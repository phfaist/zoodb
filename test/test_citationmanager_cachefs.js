import * as assert from 'assert';
import fs from 'fs';
import os from 'os';
import path from 'path';

import {
    make_node_cache_fs, make_memory_cache_fs, check_cache_fs_methods,
} from '../src/citationmanager/_cachefs.js';


const encoder = new TextEncoder();
const decoder = new TextDecoder();


/**
 * Common HostCacheFs behavior suite.
 *
 * `setup()` resolves to `{ cfs, dir, make_subdir }` where `dir` is an existing
 * (for node) directory in which to operate, and `make_subdir(name)` creates a
 * subdirectory entry inside `dir` (for the memory fs: a file within it).
 */
function cache_fs_suite(setup)
{
    it('read of a missing file resolves to null', async function () {
        const { cfs, dir } = await setup();
        assert.strictEqual(await cfs.read(`${dir}/missing.jsonl`), null);
    });

    it('round-trips append/read', async function () {
        const { cfs, dir } = await setup();
        const p = `${dir}/._citations.w1.log`;
        await cfs.append(p, encoder.encode('line one\n'));
        await cfs.append(p, encoder.encode('line two\n'));
        const data = await cfs.read(p);
        assert.strictEqual(Object.getPrototypeOf(data), Uint8Array.prototype);
        assert.strictEqual(decoder.decode(data), 'line one\nline two\n');
    });

    it('round-trips atomicReplace/read', async function () {
        const { cfs, dir } = await setup();
        const p = `${dir}/citations.jsonl`;
        await cfs.atomicReplace(p, encoder.encode('first\n'));
        assert.strictEqual(decoder.decode(await cfs.read(p)), 'first\n');
        await cfs.atomicReplace(p, encoder.encode('second\n'));
        assert.strictEqual(decoder.decode(await cfs.read(p)), 'second\n');
        // no temporary files left behind
        assert.deepStrictEqual((await cfs.list(dir)).sort(), ['citations.jsonl']);
    });

    it('read returns a copy that does not alias stored data', async function () {
        const { cfs, dir } = await setup();
        const p = `${dir}/f`;
        const bytes = encoder.encode('abc');
        await cfs.append(p, bytes);
        bytes[0] = 0x7a;
        const r1 = await cfs.read(p);
        r1[1] = 0x7a;
        assert.strictEqual(decoder.decode(await cfs.read(p)), 'abc');
    });

    it('list returns file names, files only', async function () {
        const { cfs, dir, make_subdir } = await setup();
        await cfs.append(`${dir}/a.txt`, encoder.encode('a'));
        await cfs.atomicReplace(`${dir}/b.txt`, encoder.encode('b'));
        await make_subdir('sub');
        assert.deepStrictEqual((await cfs.list(dir)).sort(), ['a.txt', 'b.txt']);
        // trailing slash is accepted
        assert.deepStrictEqual((await cfs.list(`${dir}/`)).sort(), ['a.txt', 'b.txt']);
        assert.deepStrictEqual(await cfs.list(`${dir}/sub`), ['inner.txt']);
    });

    it('list of a missing directory resolves to []', async function () {
        const { cfs, dir } = await setup();
        assert.deepStrictEqual(await cfs.list(`${dir}/no-such-dir`), []);
    });

    it('remove deletes a file; a missing file is ignored', async function () {
        const { cfs, dir } = await setup();
        const p = `${dir}/x.log`;
        await cfs.append(p, encoder.encode('x'));
        assert.deepStrictEqual(await cfs.list(dir), ['x.log']);
        await cfs.remove(p);
        assert.strictEqual(await cfs.read(p), null);
        assert.deepStrictEqual(await cfs.list(dir), []);
        await cfs.remove(p); // does not throw
        await cfs.remove(`${dir}/never-existed`);
    });

    it('methods work with this unbound', async function () {
        const { cfs, dir } = await setup();
        const { append, read, list, remove, atomicReplace, lockExclusive, tryLockExclusive }
              = cfs;
        await append(`${dir}/u`, encoder.encode('1'));
        await atomicReplace(`${dir}/v`, encoder.encode('2'));
        assert.strictEqual(decoder.decode(await read(`${dir}/u`)), '1');
        assert.deepStrictEqual((await list(dir)).sort(), ['u', 'v']);
        await remove(`${dir}/u`);
        await remove(`${dir}/v`);
        assert.deepStrictEqual(await list(dir), []);
        const g = await lockExclusive(`${dir}/lock`);
        g.release();
        await tryLockExclusive(`${dir}/lock2`);
    });
}


describe('zoodb.citationmanager._cachefs', function () {

    let tmproot = null;
    let counter = 0;

    before(async function () {
        tmproot = await fs.promises.mkdtemp(path.join(os.tmpdir(), 'zoodb-cachefs-'));
    });

    after(async function () {
        if (tmproot) {
            await fs.promises.rm(tmproot, { recursive: true, force: true });
        }
    });

    const new_node_dir = async () => {
        const dir = path.join(tmproot, `d${counter++}`);
        await fs.promises.mkdir(dir);
        return dir;
    };

    describe('make_node_cache_fs', function () {

        cache_fs_suite(async () => {
            const dir = await new_node_dir();
            return {
                cfs: make_node_cache_fs(fs),
                dir,
                make_subdir: async (name) => {
                    await fs.promises.mkdir(path.join(dir, name));
                    await fs.promises.writeFile(path.join(dir, name, 'inner.txt'), 'i');
                },
            };
        });

        it('works with a callback-only fs object', async function () {
            const dir = await new_node_dir();
            const cbfs = {};
            for (const m of ['readFile', 'writeFile', 'appendFile', 'rename', 'readdir',
                             'unlink', 'mkdir', 'stat']) {
                cbfs[m] = (...args) => fs[m](...args);
            }
            assert.deepStrictEqual(check_cache_fs_methods(cbfs), []);
            const cfs = make_node_cache_fs(cbfs);
            await cfs.append(`${dir}/a`, encoder.encode('A'));
            await cfs.atomicReplace(`${dir}/b`, encoder.encode('B'));
            await fs.promises.mkdir(path.join(dir, 'sub'));
            assert.deepStrictEqual((await cfs.list(dir)).sort(), ['a', 'b']);
            assert.strictEqual(decoder.decode(await cfs.read(`${dir}/b`)), 'B');
            assert.strictEqual(await cfs.read(`${dir}/c`), null);
            await cfs.remove(`${dir}/a`);
            await cfs.remove(`${dir}/a`);
            assert.deepStrictEqual(await cfs.list(dir), ['b']);
        });

        it('list excludes directories reached through symlinks', async function () {
            const dir = await new_node_dir();
            await fs.promises.mkdir(path.join(dir, 'realdir'));
            await fs.promises.writeFile(path.join(dir, 'realfile'), 'x');
            await fs.promises.symlink(path.join(dir, 'realdir'), path.join(dir, 'linkdir'));
            await fs.promises.symlink(path.join(dir, 'realfile'), path.join(dir, 'linkfile'));
            await fs.promises.symlink(path.join(dir, 'nothing'), path.join(dir, 'dangling'));
            const cfs = make_node_cache_fs(fs);
            assert.deepStrictEqual((await cfs.list(dir)).sort(), ['linkfile', 'realfile']);
        });

        it('tryLockExclusive resolves to null and creates no file', async function () {
            const dir = await new_node_dir();
            await fs.promises.writeFile(path.join(dir, 'citations.jsonl'), '');
            const before_list = (await fs.promises.readdir(dir)).sort();
            const cfs = make_node_cache_fs(fs);
            const g = await cfs.tryLockExclusive(`${dir}/._citations.w.log.lock`);
            assert.strictEqual(g, null);
            const g2 = await cfs.tryLockExclusive(`${dir}/._citations.lock`);
            assert.strictEqual(g2, null);
            assert.deepStrictEqual((await fs.promises.readdir(dir)).sort(), before_list);
        });

        it('lockExclusive resolves to a guard, creates no file, release() is idempotent',
           async function () {
               const dir = await new_node_dir();
               const cfs = make_node_cache_fs(fs);
               const g = await cfs.lockExclusive(`${dir}/._citations.lock`);
               assert.ok(g != null);
               assert.strictEqual(typeof g.release, 'function');
               assert.deepStrictEqual(await fs.promises.readdir(dir), []);
               g.release();
               g.release();
               // a second lock can be acquired right away (no locking at all)
               const g2 = await cfs.lockExclusive(`${dir}/._citations.lock`);
               g2.release();
               assert.deepStrictEqual(await fs.promises.readdir(dir), []);
           });

        it('does not create the lock files even with a missing directory', async function () {
            const cfs = make_node_cache_fs(fs);
            const dir = path.join(tmproot, 'never-created');
            assert.strictEqual(await cfs.tryLockExclusive(`${dir}/x.lock`), null);
            (await cfs.lockExclusive(`${dir}/x.lock`)).release();
            assert.strictEqual(fs.existsSync(dir), false);
        });
    });

    describe('make_memory_cache_fs', function () {

        cache_fs_suite(async () => {
            const cfs = make_memory_cache_fs();
            const dir = `/mem/d${counter++}`;
            return {
                cfs,
                dir,
                make_subdir: async (name) => {
                    await cfs.append(`${dir}/${name}/inner.txt`, encoder.encode('i'));
                },
            };
        });

        it('lists relative and root paths by directory', async function () {
            const cfs = make_memory_cache_fs();
            await cfs.append('top', encoder.encode('1'));
            await cfs.append('/root', encoder.encode('2'));
            await cfs.append('rel/a', encoder.encode('3'));
            assert.deepStrictEqual(await cfs.list(''), ['top']);
            assert.deepStrictEqual(await cfs.list('.'), ['top']);
            assert.deepStrictEqual(await cfs.list('/'), ['root']);
            assert.deepStrictEqual(await cfs.list('rel'), ['a']);
            assert.deepStrictEqual(await cfs.list('rel/'), ['a']);
        });

        it('locks are always acquired; release() is idempotent', async function () {
            const cfs = make_memory_cache_fs();
            const g1 = await cfs.tryLockExclusive('/d/x.lock');
            assert.ok(g1 != null);
            const g2 = await cfs.tryLockExclusive('/d/x.lock');
            assert.ok(g2 != null);
            const g3 = await cfs.lockExclusive('/d/x.lock');
            assert.ok(g3 != null);
            for (const g of [g1, g2, g3]) {
                g.release();
                g.release();
            }
            assert.deepStrictEqual(await cfs.list('/d'), []);
        });

        it('export() and import() copy the stored files', async function () {
            const cfs = make_memory_cache_fs();
            await cfs.append('/d/a', encoder.encode('A'));
            const exported = cfs.export();
            assert.ok(exported instanceof Map);
            assert.deepStrictEqual([...exported.keys()], ['/d/a']);
            exported.get('/d/a')[0] = 0x7a;
            assert.strictEqual(decoder.decode(await cfs.read('/d/a')), 'A');

            const cfs2 = make_memory_cache_fs();
            cfs2.import(new Map([['/e/b', encoder.encode('B')]]));
            cfs2.import({ '/e/c': 'C' });
            assert.deepStrictEqual((await cfs2.list('/e')).sort(), ['b', 'c']);
            assert.strictEqual(decoder.decode(await cfs2.read('/e/c')), 'C');
        });
    });

    describe('check_cache_fs_methods', function () {

        it('reports no missing method for node fs', function () {
            assert.deepStrictEqual(check_cache_fs_methods(fs), []);
        });

        it('reports missing methods', function () {
            assert.deepStrictEqual(
                check_cache_fs_methods({ promises: { readFile() {}, writeFile() {} },
                                         rename() {} }),
                ['appendFile', 'readdir', 'unlink', 'mkdir']
            );
            assert.deepStrictEqual(
                check_cache_fs_methods(null),
                ['readFile', 'writeFile', 'appendFile', 'rename', 'readdir', 'unlink', 'mkdir']
            );
        });
    });
});
