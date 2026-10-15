// Milestone 2 of step zero: what the host fills into the engine's two tables
// before a run (Q6, Q7), from what the scan reported.
//
// - citationsFromCache(cache, keys): the compiled citation texts of the
//   existing citation manager (`cache_compiled_citations.json`), for the cited
//   keys; keys are compared with their prefix in lower case, as the engine
//   does.
// - collectGraphics(refs, { dataDir, permalink }): for each (origin, path)
//   the scan reported, the file found beside the object's source file, read
//   and inspected (PNG, JPEG, SVG) with the same measures as ZooDb's
//   resource collector: pixel size and dpi for a raster image, the physical
//   size in points for a vector image.

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

export function normalizeKey(key) {
    const i = key.indexOf(':');
    return i < 0 ? key : key.slice(0, i).toLowerCase() + key.slice(i);
}

export function citationsFromCache(cachePath, keys) {
    const cache = JSON.parse(fs.readFileSync(cachePath, 'utf8'));
    const byKey = new Map();
    for (const [k, v] of Object.entries(cache)) byKey.set(normalizeKey(k), v.value?.citation_text ?? v.citation_text);
    const entries = [], missing = [];
    for (const key of keys) {
        const text = byKey.get(normalizeKey(key));
        if (text != null) entries.push({ key, text });
        else missing.push(key);
    }
    return { entries, missing };
}

// ---- image inspection -------------------------------------------------------------------------

const EXTENSIONS = ['', '.svg', '.png', '.jpg', '.jpeg', '.pdf'];
const MEDIA = { '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.svg': 'image/svg+xml', '.pdf': 'application/pdf' };

function inspectPng(buf) {
    if (buf.readUInt32BE(0) !== 0x89504e47) return null;
    let off = 8, width, height, dpi;
    while (off + 8 <= buf.length) {
        const len = buf.readUInt32BE(off), type = buf.toString('latin1', off + 4, off + 8);
        if (type === 'IHDR') { width = buf.readUInt32BE(off + 8); height = buf.readUInt32BE(off + 12); }
        if (type === 'pHYs' && buf[off + 16] === 1) dpi = Math.floor(buf.readUInt32BE(off + 8) * 0.0254 * 128 + 0.5) / 128;
        if (type === 'IDAT' || type === 'IEND') break;
        off += 12 + len;
    }
    return { kind: 'raster', width_px: width, height_px: height, dpi };
}

function inspectJpeg(buf) {
    if (buf[0] !== 0xff || buf[1] !== 0xd8) return null;
    let off = 2, width, height, dpi;
    while (off + 4 <= buf.length) {
        if (buf[off] !== 0xff) { off++; continue; }
        const marker = buf[off + 1], len = buf.readUInt16BE(off + 2);
        if (marker === 0xe0 && buf.toString('latin1', off + 4, off + 9) === 'JFIF\0') {
            const units = buf[off + 11], xd = buf.readUInt16BE(off + 12);
            if (units === 1) dpi = xd; else if (units === 2) dpi = xd * 2.54;
        }
        if ((marker >= 0xc0 && marker <= 0xc3) || (marker >= 0xc5 && marker <= 0xc7) || (marker >= 0xc9 && marker <= 0xcb) || (marker >= 0xcd && marker <= 0xcf)) {
            height = buf.readUInt16BE(off + 5); width = buf.readUInt16BE(off + 7);
            break;
        }
        off += 2 + len;
    }
    return { kind: 'raster', width_px: width, height_px: height, dpi };
}

const PT_PER = { pt: 1, px: 0.75, in: 72, cm: 72 / 2.54, mm: 72 / 25.4, pc: 12, '': 0.75 };
function svgLength(s) {
    const m = /^\s*([0-9.]+)\s*([a-z%]*)\s*$/i.exec(s ?? '');
    if (!m || !(m[2] in PT_PER)) return null;
    return Number(m[1]) * PT_PER[m[2]];
}
function inspectSvg(text) {
    const tag = /<svg\b[^>]*>/i.exec(text)?.[0];
    if (!tag) return null;
    const attr = (name) => new RegExp(`\\b${name}\\s*=\\s*["']([^"']*)["']`, 'i').exec(tag)?.[1];
    let w = svgLength(attr('width')), h = svgLength(attr('height'));
    if (w == null || h == null) {
        const vb = (attr('viewBox') ?? '').trim().split(/[\s,]+/).map(Number);
        if (vb.length === 4) { w ??= vb[2] * 0.75; h ??= vb[3] * 0.75; }
    }
    return { kind: 'vector', width_pt: w, height_pt: h };
}

export function inspectImage(file) {
    const ext = path.extname(file).toLowerCase();
    const buf = fs.readFileSync(file);
    if (ext === '.svg') return inspectSvg(buf.toString('utf8'));
    if (ext === '.png') return inspectPng(buf);
    if (ext === '.jpg' || ext === '.jpeg') return inspectJpeg(buf);
    return null;
}

// refs: [{ path, origin }] with origin "<file relative to dataDir>#<field>".
export function collectGraphics(refs, { dataDir, permalink }) {
    const entries = [], missing = [], seen = new Set();
    for (const { path: p, origin } of refs) {
        const key = `${origin}\0${p}`;
        if (seen.has(key)) continue;
        seen.add(key);
        if (/^[a-z][a-z0-9+.-]+:/i.test(p)) continue;        // a scheme: never asked
        const sourceFile = origin.split('#')[0];
        const base = path.join(dataDir, path.dirname(sourceFile));
        const file = EXTENSIONS.map((e) => path.join(base, p + e)).find((f) => fs.existsSync(f) && fs.statSync(f).isFile());
        if (!file) { missing.push({ path: p, origin }); continue; }
        const info = inspectImage(file);
        if (!info) { missing.push({ path: p, origin, reason: 'not inspected' }); continue; }
        const rel = path.relative(dataDir, file);
        const hash = crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex').slice(0, 8);
        const name = `${path.basename(file, path.extname(file))}-${hash}${path.extname(file)}`;
        entries.push({ origin, path: p, identity: rel, media_type: MEDIA[path.extname(file).toLowerCase()] ?? 'application/octet-stream',
                       address: permalink(name), ...info });
    }
    return { entries, missing };
}
