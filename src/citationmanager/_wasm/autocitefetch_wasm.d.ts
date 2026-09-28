// GENERATED FILE — do not edit; run yarn build:wasm
/* tslint:disable */
/* eslint-disable */

export interface OpenConfig {
    sources: SourceSpec[];
    host: HostFunctions;
    /** '/'-separated; must not be empty (use '.'). */
    cacheDir: string;
    /** default 'citations' */
    cacheBase?: string;
    /** unique per process run */
    writerId: string;
    ttlPolicy?: { stalePercent?: number; jitterPercent?: number; graceDays?: number };
    retry?: { maxRetries?: number; baseMs?: number; capMs?: number; honorRetryAfter?: boolean };
    maxChainDepth?: number;
    dropCslFields?: string[];
    /** default 1000; 0 disables throttling */
    throttleEventsMs?: number;
    legacyEntries?: LegacyEntry[];
}

export interface LegacyEntry { id: string; value: object; expire: number | null }

export interface HostFunctions {
    fetch(req: HostRequest): Promise<HostResponse>;
    cacheFs: HostCacheFs;
    sleep?(ms: number): Promise<void>;
    now?(): number;
    onEvent?(ev: ProgressEvent): void;
}

export interface HostRequest { url: string; method: 'GET' | 'POST'; headers: Record<string, string>; body: Uint8Array | null }
export interface HostResponse { status: number; headers: Record<string, string>; body: Uint8Array }

export interface HostCacheFs {
    read(path: string): Promise<Uint8Array | null>;
    append(path: string, bytes: Uint8Array): Promise<void>;
    atomicReplace(path: string, bytes: Uint8Array): Promise<void>;
    list(dir: string): Promise<string[]>;
    remove(path: string): Promise<void>;
    lockExclusive(path: string): Promise<HostGuard>;
    tryLockExclusive(path: string): Promise<HostGuard | null>;
}
export interface HostGuard { release(): void }

export type SourceSpec =
| { kind: 'arxiv';  prefix: string; chainDoisTo?: string | null; overrideDois?: Record<string, string | null>; chunkSize?: number; minIntervalMs?: number; ttlMs?: number }
| { kind: 'doi';    prefix: string; chunkSize?: number; minIntervalMs?: number; ttlMs?: number }
| { kind: 'manual'; prefix: string; format: string; chunkSize?: number; minIntervalMs?: number; ttlMs?: number }
| { kind: 'bib';    prefix: string; files?: string[]; entries?: Record<string, object>; format?: 'auto' | 'json' | 'yaml'; chunkSize?: number; minIntervalMs?: number; ttlMs?: number }
| { kind: 'js';     prefix: string; source: JsSourceObject; chunkSize?: number; minIntervalMs?: number; ttlMs?: number };

export interface JsSourceObject {
    retrieveChunk(keys: string[], ctx: { prefix: string }): Promise<JsResolution[]>;
    normalizeKey?(key: string): string;
    chainsTo?: string[];
}

export type JsResolution =
| { key: string; outcome: 'concrete'; csl: object; ttlMs?: number }
| { key: string; outcome: 'chained';  prefix: string; targetKey: string; setProperties?: object }
| { key: string; outcome: 'failed';   message: string }
| { key: string; outcome: 'missing';  message: string };

export interface CiteFailure { prefix: string; key: string; message: string; origin: [string, string] | null }

export type ProgressEvent = { type: string; [field: string]: unknown };



/**
 * The citation manager: resolves `(prefix, key)` citations to CSL-JSON
 * through the registered sources, cached in `cacheDir/<cacheBase>.jsonl`.
 */
export class CitationManager {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Compact buffered writes into `cacheDir/<cacheBase>.jsonl`.
     */
    flush(): Promise<void>;
    /**
     * Read one citation as a plain CSL-JSON object (chains followed, `id` =
     * normalized `prefix:key`). Rejects if it is not in the cache.
     */
    get(prefix: string, key: string): Promise<object>;
    /**
     * Read several citations; `null` where a citation is not in the cache
     * (or its chain is broken). Rejects only on a cache error.
     */
    getMany(cites: [string, string][]): Promise<(object | null)[]>;
    /**
     * All cached ids (`prefix:key`, normalized), sorted.
     */
    keys(): Promise<string[]>;
    /**
     * Parse `config`, open the cache, build and register the sources.
     * Rejects with an `Error` naming the offending key or source.
     */
    static open(config: OpenConfig): Promise<CitationManager>;
    /**
     * Drop entries expired past the grace window; resolves to the number
     * removed. Flushes the cache.
     */
    prune(): Promise<number>;
    /**
     * Fetch every missing or stale citation, following chains. Resolves to
     * the per-citation failures (never rejects for a bad citation; an
     * unregistered prefix is reported as a failure too). Rejects only on a
     * cache error or malformed input.
     */
    retrieve(cites: [string, string][]): Promise<CiteFailure[]>;
    /**
     * Counts of a `legacyEntries` import, or `null` if none was requested.
     */
    readonly legacyImport: { imported: number; skipped: number } | null;
    /**
     * The registered citation prefixes, in spec order.
     */
    readonly prefixes: string[];
}

/**
 * Returns `{ binding, autocitefetch }` version strings as a plain JS object.
 */
export function version(): { binding: string; autocitefetch: string };

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly __wbg_citationmanager_free: (a: number, b: number) => void;
    readonly citationmanager_flush: (a: number) => any;
    readonly citationmanager_get: (a: number, b: number, c: number, d: number, e: number) => any;
    readonly citationmanager_getMany: (a: number, b: any) => any;
    readonly citationmanager_keys: (a: number) => any;
    readonly citationmanager_legacyImport: (a: number) => any;
    readonly citationmanager_open: (a: any) => any;
    readonly citationmanager_prefixes: (a: number) => [number, number];
    readonly citationmanager_prune: (a: number) => any;
    readonly citationmanager_retrieve: (a: number, b: any) => any;
    readonly version: () => any;
    readonly wasm_bindgen_68cc7bfd7663d6e5___convert__closures_____invoke___wasm_bindgen_68cc7bfd7663d6e5___JsValue__core_7d5f0a2ba6a62c33___result__Result_____wasm_bindgen_68cc7bfd7663d6e5___JsError___true_: (a: number, b: number, c: any) => [number, number];
    readonly wasm_bindgen_68cc7bfd7663d6e5___convert__closures_____invoke___js_sys_18bd74787ca571e2___Function_fn_wasm_bindgen_68cc7bfd7663d6e5___JsValue_____wasm_bindgen_68cc7bfd7663d6e5___sys__Undefined___js_sys_18bd74787ca571e2___Function_fn_wasm_bindgen_68cc7bfd7663d6e5___JsValue_____wasm_bindgen_68cc7bfd7663d6e5___sys__Undefined_______true_: (a: number, b: number, c: any, d: any) => void;
    readonly __wbindgen_malloc: (a: number, b: number) => number;
    readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
    readonly __wbindgen_exn_store: (a: number) => void;
    readonly __externref_table_alloc: () => number;
    readonly __wbindgen_externrefs: WebAssembly.Table;
    readonly __wbindgen_destroy_closure: (a: number, b: number) => void;
    readonly __externref_drop_slice: (a: number, b: number) => void;
    readonly __wbindgen_free: (a: number, b: number, c: number) => void;
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
