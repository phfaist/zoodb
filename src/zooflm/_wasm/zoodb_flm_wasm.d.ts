// GENERATED FILE — do not edit; run yarn build:wasm
/* tslint:disable */
/* eslint-disable */

/**
 * The engine as a JavaScript class: one registry, the fragments parsed with
 * it (addressed by handle), the cached plans and the host tables. Every
 * method returns plain JSON-compatible values; an error is thrown as a
 * JavaScript `Error` carrying the message.
 */
export class ZooFlm {
    free(): void;
    [Symbol.dispose](): void;
    build_diagnostics(): any;
    citations_len(): number;
    external_index_len(): number;
    /**
     * The standard features and the JSON Schema of each one's settings (Q14).
     */
    static features(): any;
    fragment_count(): number;
    graphics_len(): number;
    constructor(config: any);
    /**
     * Parses `text` as one fragment; `layout` is `blocks`, `inline` or `auto`.
     * Returns `{ handle, diagnostics }`.
     */
    parse(text: string, origin: string, layout: string): any;
    /**
     * Reads the fields of an FLM data file (Q16): `{ fields: [{ name, start,
     * end, text }], diagnostics }`.
     */
    parse_fields(text: string, origin: string): any;
    /**
     * Renders the given fragments as one document with the `html` workflow.
     */
    render_html(handles: Uint32Array, options: any): any;
    /**
     * Renders the given fragments as one document with the `latex-recomposed`
     * workflow (Q12): `{ trees, style_name, style, document, diagnostics,
     * has_errors }`.
     */
    render_latex(handles: Uint32Array, options: any): any;
    /**
     * Renders the given fragments as one document with the `text` workflow
     * (Q11): `{ text, trees, diagnostics, has_errors }`.
     */
    render_text(handles: Uint32Array, options: any): any;
    /**
     * Runs the scan (a bare plan over the tables the host reads) over the
     * given fragments as one document and returns the scan tables;
     * `standalone` lists the handles of standalone fields (Q5).
     */
    scan(handles: Uint32Array, standalone: Uint32Array): any;
    /**
     * Replaces the citations table: `[{ key, text }]` (Q6).
     */
    set_citations(entries: any): void;
    /**
     * Replaces the external index: `[{ label, href, display }]`, `display`
     * being FLM text. Returns the parse diagnostics of the display texts.
     */
    set_external_index(entries: any): any;
    /**
     * Replaces the graphics table: `[{ origin, path, identity, media_type,
     * address, kind, width_px, height_px, dpi, width_pt, height_pt }]` (Q7).
     */
    set_graphics(entries: any): void;
    /**
     * Truncates FLM source to about `options.chars` characters (R18):
     * `{ source, truncated, cut_at, diagnostics }`; `options` also takes
     * `min_chars`, `marker` and `first_paragraph`.
     */
    truncate(text: string, origin: string, layout: string, options: any): any;
}

export function start(): void;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly __wbg_zooflm_free: (a: number, b: number) => void;
    readonly start: () => void;
    readonly zooflm_build_diagnostics: (a: number) => [number, number, number];
    readonly zooflm_citations_len: (a: number) => number;
    readonly zooflm_external_index_len: (a: number) => number;
    readonly zooflm_features: () => [number, number, number];
    readonly zooflm_fragment_count: (a: number) => number;
    readonly zooflm_graphics_len: (a: number) => number;
    readonly zooflm_new: (a: any) => [number, number, number];
    readonly zooflm_parse: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => [number, number, number];
    readonly zooflm_parse_fields: (a: number, b: number, c: number, d: number, e: number) => [number, number, number];
    readonly zooflm_render_html: (a: number, b: number, c: number, d: any) => [number, number, number];
    readonly zooflm_render_latex: (a: number, b: number, c: number, d: any) => [number, number, number];
    readonly zooflm_render_text: (a: number, b: number, c: number, d: any) => [number, number, number];
    readonly zooflm_scan: (a: number, b: number, c: number, d: number, e: number) => [number, number, number];
    readonly zooflm_set_citations: (a: number, b: any) => [number, number];
    readonly zooflm_set_external_index: (a: number, b: any) => [number, number, number];
    readonly zooflm_set_graphics: (a: number, b: any) => [number, number];
    readonly zooflm_truncate: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: any) => [number, number, number];
    readonly __wbindgen_malloc: (a: number, b: number) => number;
    readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
    readonly __wbindgen_exn_store: (a: number) => void;
    readonly __externref_table_alloc: () => number;
    readonly __wbindgen_externrefs: WebAssembly.Table;
    readonly __externref_table_dealloc: (a: number) => void;
    readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
