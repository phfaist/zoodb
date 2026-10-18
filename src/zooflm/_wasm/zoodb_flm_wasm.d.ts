// GENERATED FILE — do not edit; run yarn build:wasm
/* tslint:disable */
/* eslint-disable */

/** The severity of a diagnostic. */
export type Severity = 'error' | 'warning' | 'note';

/** A diagnostic as the core reports it. */
export interface CoreDiagnostic {
    /** The condition's stable identifier, such as `flm.refs.unresolved`. */
    identifier: string;
    severity: Severity;
    /** For a person; not a stable interface. */
    message: string;
    /** The label of the source the diagnostic is in: a fragment's origin as given to `parse` (`path#field`), or the label of a source the library created (`index:person:alice`, `citation:arxiv:…`); `null` when it has neither. */
    origin: string | null;
    /** Byte offsets into that source's text. */
    start: number;
    end: number;
    /** 1-based line of `start` within that source's text. */
    line: number | null;
    /** 1-based column of `start` in its line, counted in bytes. The engine (`src/zooflm/engine.js`) recomputes it in characters for the fragments it holds the source of; a diagnostic in a source the library created (`index:…`, `citation:…`) keeps the byte column. */
    col: number | null;
}

/** How the top level of a fragment is laid out: `auto` is inline unless it holds a paragraph break or a block. */
export type FragmentLayoutName = 'blocks' | 'inline' | 'auto';

/** The configuration of a core (every key optional; `null` takes the default). */
export interface CoreConfig {
    /** Whether `$…$` delimits mathematics. */
    dollar_math?: boolean | null;
    /** Alternative image sources for the html output (the ZooDb publish stage). */
    srcset?: { pixel_density_list?: number[] | null; image_max_zoom_factor?: number | null } | null;
    /** The settings of the standard features, one map per feature; user definitions under `userdefs`. */
    settings?: Record<string, Record<string, unknown>> | null;
    /** Standard features switched off by name. */
    off?: string[] | null;
}

/** The versions of the module's build: this binding crate's and the `flm-core` version it was built against. */
export interface CoreVersion {
    binding: string;
    flm_core: string;
}

/** A standard feature and the JSON Schema of its settings (`null`: it takes none). */
export interface FeatureInfo {
    name: string;
    schema: Record<string, unknown> | null;
}

/** The result of `parse`. */
export interface ParsedOut {
    handle: number;
    /** The tree holds only whitespace, comments and paragraph breaks. */
    empty: boolean;
    diagnostics: CoreDiagnostic[];
}

/** An entry of the external index: a label of another document, its link target and the FLM text a reference to it shows. */
export interface ExternalIndexEntry {
    label: string;
    href: string;
    display: string;
}

/** A compiled citation: `prefix:key` and the entry as FLM inline text. */
export interface CitationEntry {
    key: string;
    text: string;
}

/** An image the host collected and inspected, keyed by `origin` (the canonical path of the source it is written in) and `path` (as written). */
export interface GraphicsEntry {
    origin: string;
    path: string;
    identity: string;
    media_type: string;
    address: string;
    kind: 'raster' | 'vector';
    width_px?: number | null;
    height_px?: number | null;
    dpi?: number | null;
    width_pt?: number | null;
    height_pt?: number | null;
}

/** Render options of one run, as data in the shape of the settings: one map per feature, of the keys it binds to the render request (`{ pieces: { exclude: ['flm.citations.bibliography'] } }`), over the settings' keys one by one. A key that is unknown, fixed when the core is built, or set by the call's own options is refused with its name. */
export type RunRenderOptions = Record<string, Record<string, unknown>>;

export interface RenderHtmlOptions {
    title?: string | null;
    /** Unresolved references are Warnings instead of Errors (default `false`). */
    unresolved_refs_warning?: boolean | null;
    /** This run's render options (`refs.unresolved` is refused: `unresolved_refs_warning` sets it). */
    render_options?: RunRenderOptions | null;
}

/** One part of a definition's delivery: a text, a file path, an address, the table that supplies the text per document (registry list only), or `host` (the host supplies it; a run's list only). */
export interface DefinitionPart {
    kind: 'inline' | 'file' | 'url' | 'table' | 'host';
    text: string;
}

/** A style or script definition. */
export interface Definition {
    id: string;
    kind: 'style' | 'script';
    /** The feature that declared it. */
    owner: string;
    parts: DefinitionPart[];
}

/** A piece of a run (the footnote list, the bibliography, …). */
export interface HtmlPiece {
    name: string;
    place: 'before-content' | 'after-content';
    html: string;
    requires: string[];
}

/** The result of `render_html`: one entry of `trees` and `tree_requires` per handle given, in order. */
export interface HtmlOut {
    trees: string[];
    tree_requires: string[][];
    pieces: HtmlPiece[];
    requires: string[];
    /** What the run's document requires (the backend's page style included), resolved. */
    definitions: Definition[];
    diagnostics: CoreDiagnostic[];
    has_errors: boolean;
}

export interface RenderTextOptions {
    /** The line width in columns; `null` never wraps. */
    width?: number | null;
    link_addresses?: boolean | null;
    /** Default `true` for text. */
    unresolved_refs_warning?: boolean | null;
    /** Also render each tree alone, for `trees` and `tree_diagnostics`. */
    per_tree?: boolean | null;
    /** Place the pieces in the text (default `false`). */
    pieces?: boolean | null;
    /** This run's render options, as for html (`refs.unresolved`, `text.width` and `text.link_addresses` are refused: this object's keys set them). */
    render_options?: RunRenderOptions | null;
}

/** The result of `render_text`; `trees` and `tree_diagnostics` only with `per_tree`, one per handle given, each tree rendered alone. */
export interface TextOut {
    text: string;
    trees: string[];
    tree_diagnostics: CoreDiagnostic[][];
    diagnostics: CoreDiagnostic[];
    has_errors: boolean;
}

export interface RenderLatexOptions {
    raw_label_types?: string[] | null;
    drop_comments?: boolean | null;
    unresolved_refs_warning?: boolean | null;
}

/** The result of `render_latex`: one entry of `trees` per handle given. */
export interface LatexOut {
    trees: string[];
    style_name: string | null;
    style: string | null;
    document: string | null;
    diagnostics: CoreDiagnostic[];
    has_errors: boolean;
}

export interface TruncateOptions {
    chars: number;
    min_chars?: number | null;
    /** Default `' …'`. */
    marker?: string | null;
    first_paragraph?: boolean | null;
}

/** The result of `truncate`: the shortened FLM source, to be parsed again. */
export interface TruncateOut {
    source: string;
    truncated: boolean;
    cut_at: number | null;
    diagnostics: CoreDiagnostic[];
}

/** An image written in a tree: the path as written and the canonical path of its source (the graphics table's key). */
export interface ScanGraphicsRef {
    path: string;
    origin: string | null;
}

/** A label a tree defines: the anchor of its point when one of the labels of its point forms it (`type-label`, the same in every document; `null` for a point anchored otherwise: on its number, a renumbered title, a collision) and the FLM source of the content the point shows (`null`: none; a single braced group without its braces). */
export interface ScanLabel {
    label: string;
    anchor: string | null;
    display: string | null;
}

/** A reference site: the label it points at, and whether it resolved inside the scanned document (the scan installs no external index). */
export interface ScanRef {
    label: string;
    resolved: boolean;
}

/** A label written for a second point: where the later point is (the origin label of its source, byte offsets into it). */
export interface ScanDuplicate {
    label: string;
    origin: string | null;
    start: number;
    end: number;
}

/** A term definition (`\begin{defterm}{term} … \end{defterm}`): the labels of its point (the one computed from the term, `defterm:<term>`, which a term link targets; one per alias; then the written ones), its anchor when one of its labels forms it, the FLM source of the term (`null`: blank), and the byte range of its body in the tree's source (`null`: an empty body, or one written through a user definition). */
export interface ScanTerm {
    labels: string[];
    anchor: string | null;
    display: string | null;
    body_start: number | null;
    body_end: number | null;
}

/** What the scan found in one tree. */
export interface ScanTree {
    /** The labels whose point the tree holds, in the order of the points. */
    labels: ScanLabel[];
    /** The reference sites of the tree, in tree order. */
    refs: ScanRef[];
    graphics: ScanGraphicsRef[];
    /** The term definitions of the tree, in tree order. */
    terms: ScanTerm[];
    /** The citation keys the tree cites, each once, in order of first citation in the tree. */
    cited: string[];
}

/** The result of `scan`: one entry of `trees` per handle given. */
export interface ScanOut {
    trees: ScanTree[];
    /** The cited keys of all the trees, each once, in order of first citation, with the origin of that first citation (every tree that cites a key lists it in its own `cited`). */
    cited: [string, string | null][];
    duplicate_labels: ScanDuplicate[];
    standalone_violations: number;
    diagnostics: CoreDiagnostic[];
    has_errors: boolean;
}

/** A field of an FLM data file and the byte range of its body. */
export interface FieldOut {
    name: string;
    start: number;
    end: number;
    text: string;
}

export interface FieldsOut {
    fields: FieldOut[];
    diagnostics: CoreDiagnostic[];
}



/**
 * The core as a JavaScript class: one registry, the fragments parsed with
 * it (addressed by handle), the cached plans and the host tables. Every
 * method returns plain JSON-compatible values; an error (a wrong handle, a
 * wrong option, a configuration refused) is thrown as a JavaScript `Error`
 * carrying the message, never returned as content. The engine of
 * `src/zooflm/engine.js` drives it.
 */
export class ZooFlmCore {
    free(): void;
    [Symbol.dispose](): void;
    /**
     * The diagnostics of the registry build (a successful build can carry
     * Errors).
     */
    build_diagnostics(): CoreDiagnostic[];
    citations_len(): number;
    external_index_len(): number;
    /**
     * The standard features and the JSON Schema of each one's settings (Q14).
     */
    static features(): FeatureInfo[];
    /**
     * The number of fragments held (released ones not counted).
     */
    fragment_count(): number;
    graphics_len(): number;
    /**
     * Every style and script definition the registry declares, the styles
     * first, each in registration order, with the parts as declared (D8).
     */
    html_definitions(): Definition[];
    /**
     * Builds the registry from `config` (`CoreConfig`); throws on an unknown
     * key, feature or setting, naming it.
     */
    constructor(config: CoreConfig | null | undefined);
    /**
     * Parses `text` as one fragment with the canonical origin `origin`
     * (empty: none). Returns `{ handle, empty, diagnostics }`.
     */
    parse(text: string, origin: string, layout: FragmentLayoutName): ParsedOut;
    /**
     * Reads the fields of an FLM data file (Q16).
     */
    parse_fields(text: string, origin: string): FieldsOut;
    /**
     * Frees the fragments of `handles`; every handle is checked first, and a
     * released handle used later throws.
     */
    release(handles: Uint32Array | number[]): void;
    /**
     * Renders the given fragments as one document with the `html` workflow.
     */
    render_html(handles: Uint32Array | number[], options: RenderHtmlOptions | null | undefined): HtmlOut;
    /**
     * Renders the given fragments as one document with the `latex-recomposed`
     * workflow (Q12).
     */
    render_latex(handles: Uint32Array | number[], options: RenderLatexOptions | null | undefined): LatexOut;
    /**
     * Renders the given fragments as one document with the `text` workflow
     * (Q11); with `per_tree`, also each tree alone, with that run's
     * diagnostics.
     */
    render_text(handles: Uint32Array | number[], options: RenderTextOptions | null | undefined): TextOut;
    /**
     * Runs the scan (a bare plan over the tables the host reads) over the
     * given fragments as one document; `standalone` lists the handles of
     * standalone fields (Q5).
     */
    scan(handles: Uint32Array | number[], standalone: Uint32Array | number[]): ScanOut;
    /**
     * Replaces the citations table: `[{ key, text }]` (Q6).
     */
    set_citations(entries: CitationEntry[]): void;
    /**
     * Replaces the external index: `[{ label, href, display }]`, `display`
     * being FLM text, parsed inline. Returns the parse diagnostics of the
     * display texts (origin `index:LABEL`).
     */
    set_external_index(entries: ExternalIndexEntry[]): CoreDiagnostic[];
    /**
     * Replaces the graphics table (Q7).
     */
    set_graphics(entries: GraphicsEntry[]): void;
    /**
     * Truncates FLM source to about `options.chars` characters (R18).
     */
    truncate(text: string, origin: string, layout: FragmentLayoutName, options: TruncateOptions): TruncateOut;
    /**
     * The versions of the module's build: `{ binding, flm_core }` (this
     * crate's version and the `flm-core` version it was built against).
     */
    static version(): CoreVersion;
    /**
     * A new handle for the fragment of `handle` with another layout: the
     * same tree, source and parse diagnostics, not parsed again.
     */
    with_layout(handle: number, layout: FragmentLayoutName): number;
}

export function start(): void;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly __wbg_zooflmcore_free: (a: number, b: number) => void;
    readonly start: () => void;
    readonly zooflmcore_build_diagnostics: (a: number) => [number, number, number];
    readonly zooflmcore_citations_len: (a: number) => number;
    readonly zooflmcore_external_index_len: (a: number) => number;
    readonly zooflmcore_features: () => [number, number, number];
    readonly zooflmcore_fragment_count: (a: number) => number;
    readonly zooflmcore_graphics_len: (a: number) => number;
    readonly zooflmcore_html_definitions: (a: number) => [number, number, number];
    readonly zooflmcore_new: (a: any) => [number, number, number];
    readonly zooflmcore_parse: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => [number, number, number];
    readonly zooflmcore_parse_fields: (a: number, b: number, c: number, d: number, e: number) => [number, number, number];
    readonly zooflmcore_release: (a: number, b: number, c: number) => [number, number];
    readonly zooflmcore_render_html: (a: number, b: number, c: number, d: any) => [number, number, number];
    readonly zooflmcore_render_latex: (a: number, b: number, c: number, d: any) => [number, number, number];
    readonly zooflmcore_render_text: (a: number, b: number, c: number, d: any) => [number, number, number];
    readonly zooflmcore_scan: (a: number, b: number, c: number, d: number, e: number) => [number, number, number];
    readonly zooflmcore_set_citations: (a: number, b: any) => [number, number];
    readonly zooflmcore_set_external_index: (a: number, b: any) => [number, number, number];
    readonly zooflmcore_set_graphics: (a: number, b: any) => [number, number];
    readonly zooflmcore_truncate: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: any) => [number, number, number];
    readonly zooflmcore_version: () => [number, number, number];
    readonly zooflmcore_with_layout: (a: number, b: number, c: number, d: number) => [number, number, number];
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
