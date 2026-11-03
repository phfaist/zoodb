// The zoo data of the two test sets, as the runners read them: the schemas
// (for the `_flm` field markers and the field titles) and the objects.
import fs from 'node:fs';
import path from 'node:path';

export function makeZooData({ YAML, kind, dataDir, schemasDir }) {
    const schemaCache = new Map();
    function loadSchema(name) {
        if (!schemaCache.has(name)) schemaCache.set(name, YAML.parse(fs.readFileSync(path.join(schemasDir, name + '.yml'), 'utf8')));
        return schemaCache.get(name);
    }
    function deref(schema) {
        if (schema && schema.$ref) {
            const m = /^\/schemas\/([A-Za-z0-9_-]+)$/.exec(schema.$ref);
            if (!m) throw new Error(`unsupported $ref ${schema.$ref}`);
            return loadSchema(m[1]);
        }
        return schema;
    }
    function flmMode(annotation) {
        if (annotation == null || annotation === false) return null;
        if (annotation === true || annotation === 'full') return { layout: 'auto', standalone: false };
        if (annotation === 'standalone') return { layout: 'inline', standalone: true };
        if (annotation === 'block_level') return { layout: 'blocks', standalone: false };
        if (typeof annotation === 'object') {
            if (annotation.enabled === false) return null;
            return { layout: annotation.standalone ? 'inline' : 'auto', standalone: !!annotation.standalone };
        }
        throw new Error(`unknown _flm annotation ${JSON.stringify(annotation)}`);
    }
    // Yields { field, text, mode, title } for every FLM field of `value` under `schema`.
    function* flmFields(schema, value, field = '') {
        schema = deref(schema);
        if (schema == null || value == null) return;
        const mode = flmMode(schema._flm);
        if (mode && typeof value === 'string') {
            yield { field, text: value, mode, title: schema._title ?? null };
            return;
        }
        if (schema.type === 'object' || schema.properties) {
            for (const [k, sub] of Object.entries(schema.properties ?? {})) {
                if (Object.hasOwn(value, k)) yield* flmFields(sub, value[k], field ? `${field}.${k}` : k);
            }
        } else if (schema.type === 'array' && schema.items && Array.isArray(value)) {
            for (let i = 0; i < value.length; i++) yield* flmFields(schema.items, value[i], `${field}[${i}]`);
        }
    }
    function* ymlFiles(dir) {
        for (const ent of fs.readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
            const p = path.join(dir, ent.name);
            if (ent.isDirectory()) yield* ymlFiles(p);
            else if (/\.ya?ml$/.test(ent.name)) yield p;
        }
    }
    const readYaml = (p) => YAML.parse(fs.readFileSync(p, 'utf8'));
    // [{ type, id, file, data, schema }]
    function loadObjects() {
        const out = [];
        const rel = (p) => path.relative(dataDir, p);
        if (kind === 'example') {
            for (const p of ymlFiles(path.join(dataDir, 'people'))) {
                const data = readYaml(p);
                out.push({ type: 'person', id: data.person_id, file: rel(p), data, schema: 'person' });
            }
        } else if (kind === 'eczoo') {
            for (const p of ymlFiles(path.join(dataDir, 'codes'))) {
                const data = readYaml(p);
                out.push({ type: 'code', id: data.code_id, file: rel(p), data, schema: 'code' });
            }
            for (const p of ymlFiles(path.join(dataDir, 'codelists'))) {
                const data = readYaml(p);
                out.push({ type: 'codelist', id: data.list_id, file: rel(p), data, schema: 'codelist' });
            }
            const lists = [
                ['space', 'code_extra/spaces.yml', (d) => d.space_id],
                ['domain', 'codetree/domains.yml', (d) => d.domain_id],
                ['user', 'users/users_db.yml', (d) => d.user_id],
            ];
            for (const [type, file, idOf] of lists) {
                const p = path.join(dataDir, file);
                if (!fs.existsSync(p)) continue;
                for (const data of readYaml(p)) out.push({ type, id: idOf(data), file, data, schema: type });
            }
            const kp = path.join(dataDir, 'codetree/kingdoms.yml');
            if (fs.existsSync(kp)) {
                for (const [domain_id, kingdoms] of Object.entries(readYaml(kp).kingdoms_by_domain_id ?? {})) {
                    for (const k of kingdoms) {
                        out.push({ type: 'kingdom', id: k.kingdom_id, file: 'codetree/kingdoms.yml', data: Object.assign({ parent_domain: { domain_id } }, k), schema: 'kingdom' });
                    }
                }
            }
        } else {
            throw new Error(`unknown kind ${kind}`);
        }
        return out;
    }
    return { loadSchema, flmFields, loadObjects };
}
