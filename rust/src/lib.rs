//! wasm-bindgen binding of the `autocitefetch` citation retriever for
//! `@phfaist/zoodb`.
//!
//! All host I/O — HTTP and bibliography files ([`host::JsFetcher`]), cache
//! files ([`host::JsCacheFs`]), timers and the clock — is delegated to
//! JavaScript callbacks passed in the `host` object of
//! [`CitationManager::open`]. See `README.md` in this directory and section
//! 7.1 of `dev-docs/AutocitefetchImplementationPlan.md` at the repository
//! root.
//!
//! Modules:
//!
//! * [`batching`] — per-source `refreshBatching` overrides;
//! * [`config`] — the open config: serde spec types + manual extraction of the
//!   JavaScript objects serde cannot handle;
//! * [`host`] — `Fetcher`, `CacheFs`, `Clock`, `Timer` over JS callbacks;
//! * [`sources`] — spec → registered source (`BoxedSource`, `JsSource`,
//!   prefix and chain-target checks);
//! * [`formats`] — JSON/YAML parsing of bibliography files;
//! * [`reporter`] — progress events to `host.onEvent` (appendix B shapes);
//! * [`legacy`] — importing `legacyEntries` from a legacy ZooDb cache;
//! * [`convert`] — values and errors across the boundary.

#![forbid(unsafe_code)]

mod batching;
mod config;
mod convert;
mod formats;
mod host;
mod legacy;
mod reporter;
mod sources;

use std::cell::RefCell;
use std::rc::Rc;

use js_sys::{Function, Promise};
use serde::Serialize;
use wasm_bindgen::prelude::*;
use wasm_bindgen_futures::{JsFuture, future_to_promise};

use autocitefetch::filecache::FileCacheStore;
use autocitefetch::{CacheStore, Clock, Error, TtlPolicy};

use crate::convert::{csl_to_js, from_js, js_error, to_js};
use crate::host::{JsCacheFs, JsClock, JsFetcher, JsTimer};

/// Version of this binding crate.
pub const BINDING_VERSION: &str = env!("CARGO_PKG_VERSION");

/// Version of the `autocitefetch` crate this binding was built against, read
/// from `Cargo.lock` by `build.rs`.
pub const AUTOCITEFETCH_VERSION: &str = env!("AUTOCITEFETCH_VERSION");

/// Installs the console panic hook when the `debug-panics` feature is on.
#[cfg(feature = "debug-panics")]
#[wasm_bindgen(start)]
pub fn start() {
    console_error_panic_hook::set_once();
}

/// Returns `{ binding, autocitefetch }` version strings as a plain JS object.
#[wasm_bindgen(unchecked_return_type = "{ binding: string; autocitefetch: string }")]
pub fn version() -> JsValue {
    let obj = js_sys::Object::new();
    // `Reflect::set` on a fresh plain object cannot fail.
    let _ = js_sys::Reflect::set(&obj, &"binding".into(), &BINDING_VERSION.into());
    let _ = js_sys::Reflect::set(&obj, &"autocitefetch".into(), &AUTOCITEFETCH_VERSION.into());
    obj.into()
}

#[wasm_bindgen(typescript_custom_section)]
const TS_TYPES: &'static str = r#"
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
  /** synchronous; must not throw (exceptions are logged with console.error and ignored) */
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
  | { kind: 'arxiv';  prefix: string; chainDoisTo?: string | null; overrideDois?: Record<string, string | null>; chunkSize?: number; minIntervalMs?: number; ttlMs?: number; refreshBatching?: RefreshBatchingSpec }
  | { kind: 'doi';    prefix: string; chunkSize?: number; minIntervalMs?: number; ttlMs?: number; refreshBatching?: RefreshBatchingSpec }
  | { kind: 'manual'; prefix: string; format: string; chunkSize?: number; minIntervalMs?: number; ttlMs?: number; refreshBatching?: RefreshBatchingSpec }
  | { kind: 'bib';    prefix: string; files?: string[]; entries?: Record<string, object>; format?: 'auto' | 'json' | 'yaml'; chunkSize?: number; minIntervalMs?: number; ttlMs?: number; refreshBatching?: RefreshBatchingSpec }
  | { kind: 'js';     prefix: string; source: JsSourceObject; chunkSize?: number; minIntervalMs?: number; ttlMs?: number; refreshBatching?: RefreshBatchingSpec };

/**
 * Adjusts a source's refresh batching (deferring small amounts of refresh work,
 * topping up requests with nearly-due entries). Settings not given keep the
 * source's own default; `eager: true` starts from 'eager' instead.
 */
export type RefreshBatchingSpec =
  | 'eager'
  | 'default'
  | { eager?: boolean; minBatch?: number; maxDeferDays?: number;
      topUp?: false | null | 'off' | { minAgePercent?: number; fill?: 'chunk' | number } };

/** The refresh batching in effect for a prefix (see `CitationManager.refreshBatching`). */
export interface RefreshBatching {
  minBatch: number;
  maxDeferDays: number;
  topUp: { minAgePercent: number; fill: 'chunk' | number } | null;
}

/**
 * A citation source implemented in JavaScript (`kind: 'js'`).
 *
 * `retrieveChunk` must return one resolution per key (keys left out are
 * reported as `missing`); a rejection fails every key of the chunk.
 * `normalizeKey` defaults to trimming; if it throws or returns a non-string,
 * the trimmed key is used and the problem is logged with `console.error`.
 *
 * Re-entrancy: `retrieveChunk` runs inside the manager's `retrieve()`. It may
 * call `get`, `getMany` and `keys` on the same manager, but must NOT call
 * `retrieve`, `prune` or `flush` on it: those are serialized behind the
 * running `retrieve()` and awaiting one from here would deadlock.
 */
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

/** What a `wait_started` / `wait_finished` event is waiting for. */
export type ProgressWait =
  | { wait: 'rate_limit'; prefix: string }
  | { wait: 'backoff'; url: string; attempt: number }
  | { wait: 'cache_flush' }
  | { wait: 'unknown' };

/**
 * A progress event handed to `host.onEvent` (synchronously; the callback's
 * return value is ignored and anything it throws is logged with
 * `console.error` and otherwise ignored). Same snake_case vocabulary as the
 * Python binding. Unless `throttleEventsMs` is 0, `source_progress` events
 * are throttled to one per `throttleEventsMs` (default 1000) per prefix; all
 * other events are always delivered. `attempt` is 0-based.
 */
export type ProgressEvent =
  | { type: 'retrieve_started'; cites: number }
  | { type: 'pass_started'; pass: number; cached: number; to_fetch: number }
  | { type: 'pass_finished'; pass: number; discovered: number }
  | { type: 'retrieve_finished'; considered: number; failed: number }
  | { type: 'source_started'; prefix: string; keys: number; chunks: number }
  | { type: 'source_progress'; prefix: string; done: number; total: number }
  | { type: 'source_finished'; prefix: string; done: number }
  | { type: 'cite_resolved'; prefix: string; key: string; how: 'concrete' }
  | { type: 'cite_resolved'; prefix: string; key: string; how: 'chained'; target: [string, string] }
  | { type: 'cite_failed'; prefix: string; key: string; message: string; grace_served: boolean }
  | ({ type: 'wait_started'; expected_ms: number | null } & ProgressWait)
  | ({ type: 'wait_finished' } & ProgressWait)
  | { type: 'request_started'; url: string; attempt: number }
  | { type: 'request_finished'; url: string; status: number }
  | { type: 'request_finished'; url: string; error: string }
  | { type: 'refresh_planned'; prefix: string; deferred: number; pulled_forward: number }
  | { type: 'unknown' };
"#;

type Manager =
    autocitefetch::CitationManager<JsFetcher, FileCacheStore<JsCacheFs>, JsClock, JsTimer>;

/// Shared state behind every handle. Methods clone the `Rc` into their
/// promise, so no `&mut self` crosses an await and no `RefCell` borrow is held
/// across one.
struct Inner {
    manager: Manager,
    prefixes: Vec<String>,
    /// `{imported, skipped}` of a `legacyEntries` import (WP1b); `None` when
    /// none was requested.
    legacy_import: Option<(u32, u32)>,
    /// Tail of the FIFO queue serializing the operations that write the store
    /// (`retrieve`, `prune`, `flush`); see [`Inner::exclusive`].
    tail: RefCell<Promise>,
}

/// Releases the next queued operation when dropped.
struct Turn(Option<Function>);

impl Drop for Turn {
    fn drop(&mut self) {
        if let Some(resolve) = self.0.take() {
            let _ = resolve.call0(&JsValue::UNDEFINED);
        }
    }
}

impl Inner {
    /// Wait for this operation's turn among the store-writing operations.
    ///
    /// `FileCacheStore::flush` deletes this writer's sidecar after folding it,
    /// so it must not run concurrently with a `put`/`remove` on the same store
    /// (see the crate's `filecache` docs); two overlapping `retrieve` calls
    /// from JavaScript would otherwise interleave exactly that way. Reads
    /// (`get`, `getMany`, `keys`) are served from memory and do not queue, so
    /// a `js` source may read the manager from inside its `retrieveChunk`.
    async fn exclusive(&self) -> Turn {
        let mut release: Option<Function> = None;
        let gate = Promise::new(&mut |resolve, _reject| release = Some(resolve));
        let previous = self.tail.replace(gate);
        let _ = JsFuture::from(previous).await;
        Turn(release)
    }
}

/// A failure as handed to JavaScript (`CiteFailure`).
#[derive(Serialize)]
struct FailureOut {
    prefix: String,
    key: String,
    message: String,
    origin: Option<(String, String)>,
}

/// The citation manager: resolves `(prefix, key)` citations to CSL-JSON
/// through the registered sources, cached in `cacheDir/<cacheBase>.jsonl`.
#[wasm_bindgen]
pub struct CitationManager {
    inner: Rc<Inner>,
}

#[wasm_bindgen]
impl CitationManager {
    /// Parse `config`, open the cache, build and register the sources.
    /// Rejects with an `Error` naming the offending key or source.
    #[wasm_bindgen(unchecked_return_type = "Promise<CitationManager>")]
    pub fn open(#[wasm_bindgen(unchecked_param_type = "OpenConfig")] config: JsValue) -> Promise {
        future_to_promise(
            async move { open_impl(config).await.map(JsValue::from).map_err(js_error) },
        )
    }

    /// The registered citation prefixes, in spec order.
    #[wasm_bindgen(getter)]
    pub fn prefixes(&self) -> Vec<String> {
        self.inner.prefixes.clone()
    }

    /// Counts of a `legacyEntries` import, or `null` if none was requested.
    #[wasm_bindgen(
        getter,
        js_name = legacyImport,
        unchecked_return_type = "{ imported: number; skipped: number } | null"
    )]
    pub fn legacy_import(&self) -> JsValue {
        match self.inner.legacy_import {
            None => JsValue::NULL,
            Some((imported, skipped)) => {
                let obj = js_sys::Object::new();
                let _ = js_sys::Reflect::set(&obj, &"imported".into(), &imported.into());
                let _ = js_sys::Reflect::set(&obj, &"skipped".into(), &skipped.into());
                obj.into()
            }
        }
    }

    /// The refresh batching in effect for `prefix` (the source's default with
    /// any `refreshBatching` override applied), or `null` if no source is
    /// registered under `prefix`.
    #[wasm_bindgen(js_name = refreshBatching, unchecked_return_type = "RefreshBatching | null")]
    pub fn refresh_batching(&self, prefix: String) -> Result<JsValue, JsValue> {
        match self.inner.manager.refresh_batching(&prefix) {
            None => Ok(JsValue::NULL),
            Some(b) => to_js(&batching::to_value(&b)).map_err(js_error),
        }
    }

    /// Fetch every missing or stale citation, following chains. Resolves to
    /// the per-citation failures (never rejects for a bad citation; an
    /// unregistered prefix is reported as a failure too). Rejects only on a
    /// cache error or malformed input.
    #[wasm_bindgen(unchecked_return_type = "Promise<CiteFailure[]>")]
    pub fn retrieve(
        &self,
        #[wasm_bindgen(unchecked_param_type = "[string, string][]")] cites: JsValue,
    ) -> Promise {
        let inner = Rc::clone(&self.inner);
        future_to_promise(async move {
            let pairs = parse_cites(cites, "retrieve")?;
            let _turn = inner.exclusive().await;
            let report = inner
                .manager
                .retrieve(&pairs)
                .await
                .map_err(|e| js_error(format!("retrieve: {e}")))?;
            let failures: Vec<FailureOut> = report
                .failures
                .into_iter()
                .map(|f| FailureOut {
                    prefix: f.prefix,
                    key: f.key,
                    message: f.message,
                    origin: f.origin,
                })
                .collect();
            to_js(&failures).map_err(js_error)
        })
    }

    /// Read one citation as a plain CSL-JSON object (chains followed, `id` =
    /// normalized `prefix:key`). Rejects if it is not in the cache.
    #[wasm_bindgen(unchecked_return_type = "Promise<object>")]
    pub fn get(&self, prefix: String, key: String) -> Promise {
        let inner = Rc::clone(&self.inner);
        future_to_promise(async move {
            match inner.manager.get(&prefix, &key).await {
                Ok(item) => csl_to_js(&item).map_err(|e| js_error(format!("{prefix}:{key}: {e}"))),
                Err(Error::NotFound(_)) => Err(js_error(format!("{prefix}:{key}: not in cache"))),
                Err(e) => Err(js_error(format!("{prefix}:{key}: {e}"))),
            }
        })
    }

    /// Read several citations; `null` where a citation is not in the cache
    /// (or its chain is broken). Rejects only on a cache error.
    #[wasm_bindgen(js_name = getMany, unchecked_return_type = "Promise<(object | null)[]>")]
    pub fn get_many(
        &self,
        #[wasm_bindgen(unchecked_param_type = "[string, string][]")] cites: JsValue,
    ) -> Promise {
        let inner = Rc::clone(&self.inner);
        future_to_promise(async move {
            let pairs = parse_cites(cites, "getMany")?;
            let out = js_sys::Array::new();
            for (prefix, key) in &pairs {
                let value = match inner.manager.get(prefix, key).await {
                    Ok(item) => {
                        csl_to_js(&item).map_err(|e| js_error(format!("{prefix}:{key}: {e}")))?
                    }
                    Err(Error::Store(e)) => {
                        return Err(js_error(format!("{prefix}:{key}: cache store error: {e}")));
                    }
                    Err(_) => JsValue::NULL,
                };
                out.push(&value);
            }
            Ok(out.into())
        })
    }

    /// All cached ids (`prefix:key`, normalized), sorted.
    #[wasm_bindgen(unchecked_return_type = "Promise<string[]>")]
    pub fn keys(&self) -> Promise {
        let inner = Rc::clone(&self.inner);
        future_to_promise(async move {
            let entries = inner
                .manager
                .store()
                .entries()
                .await
                .map_err(|e| js_error(format!("keys: cache store error: {e}")))?;
            let ids: Vec<String> = entries.into_iter().map(|(id, _)| id).collect();
            to_js(&ids).map_err(js_error)
        })
    }

    /// Drop entries expired past the grace window; resolves to the number
    /// removed. Flushes the cache.
    #[wasm_bindgen(unchecked_return_type = "Promise<number>")]
    pub fn prune(&self) -> Promise {
        let inner = Rc::clone(&self.inner);
        future_to_promise(async move {
            let _turn = inner.exclusive().await;
            let removed = inner
                .manager
                .prune()
                .await
                .map_err(|e| js_error(format!("prune: {e}")))?;
            Ok(JsValue::from_f64(removed as f64))
        })
    }

    /// Compact buffered writes into `cacheDir/<cacheBase>.jsonl`.
    #[wasm_bindgen(unchecked_return_type = "Promise<void>")]
    pub fn flush(&self) -> Promise {
        let inner = Rc::clone(&self.inner);
        future_to_promise(async move {
            let _turn = inner.exclusive().await;
            inner
                .manager
                .store()
                .flush()
                .await
                .map_err(|e| js_error(format!("flush: cache store error: {e}")))?;
            Ok(JsValue::UNDEFINED)
        })
    }
}

fn parse_cites(cites: JsValue, what: &str) -> Result<Vec<(String, String)>, JsValue> {
    from_js::<Vec<(String, String)>>(cites).map_err(|e| {
        js_error(format!(
            "{what}: expected an array of [prefix, key] pairs: {e}"
        ))
    })
}

async fn open_impl(config: JsValue) -> Result<CitationManager, String> {
    // 1. Parse the config.
    let cfg = config::parse_open_config(&config)?;
    let data = cfg.data;
    let host = cfg.host;

    // 2. Host backends.
    let fetcher = JsFetcher::new(host.this.clone(), host.fetch.clone());
    let cache_fs = JsCacheFs::new(host.cache_fs.clone());
    let clock = JsClock::new(host.this.clone(), host.now.clone());
    let timer = JsTimer::new(host.this.clone(), host.sleep.clone());

    // 3. The cache store.
    let store = FileCacheStore::open(
        cache_fs,
        data.cache_dir.clone(),
        data.cache_base(),
        data.writer_id.clone(),
    )
    .await
    .map_err(|e| format!("citation cache in `{}`: {e}", data.cache_dir))?;

    // 4. Sources.
    let mut registrations = Vec::with_capacity(cfg.sources.len());
    let mut batching_overrides = Vec::new();
    for entry in cfg.sources {
        if let Some(over) = entry.refresh_batching {
            batching_overrides.push((entry.spec.prefix().to_string(), over));
        }
        registrations.push(sources::build(entry.spec, entry.js_source)?);
    }

    // 5. Validation.
    sources::check_unique_prefixes(&registrations)?;
    sources::check_chain_targets(&registrations)?;

    // 6. Legacy import (section 7.7), with the manager's TTL policy.
    let ttl_policy = match &data.ttl_policy {
        Some(spec) => spec.build()?,
        None => TtlPolicy::default(),
    };
    let dropped_fields: &[String] = data.drop_csl_fields.as_deref().unwrap_or(&[]);
    let legacy_import = match &cfg.legacy_entries {
        None => None,
        Some(entries) => {
            let ctx = legacy::ImportContext {
                sources: &registrations,
                dropped_fields,
                policy: &ttl_policy,
                now: clock.now(),
            };
            Some(legacy::import(&store, entries, &ctx).await?)
        }
    };

    // 7. The manager, with policies and dropped fields.
    let reporter_clock = clock.clone();
    let mut manager = Manager::new(fetcher, store, clock, timer).with_policy(ttl_policy);
    if let Some(spec) = &data.retry {
        manager = manager.with_retry_policy(spec.build()?);
    }
    if let Some(depth) = data.max_chain_depth {
        manager = manager.with_max_chain_depth(depth as usize);
    }
    if let Some(fields) = &data.drop_csl_fields {
        manager = manager.with_dropped_csl_fields(fields.iter().cloned());
    }

    // Progress events: only when `onEvent` is given; throttled (samples only,
    // per prefix) unless `throttleEventsMs` is 0.
    if let Some(on_event) = &host.on_event {
        manager = manager.with_reporter(reporter::build(
            host.this.clone(),
            on_event.clone(),
            reporter_clock,
            data.throttle_events(),
        ));
    }

    // 8. Register.
    let mut prefixes = Vec::with_capacity(registrations.len());
    for reg in registrations {
        prefixes.push(reg.prefix.clone());
        manager = manager
            .register(reg.prefix.clone(), reg.source)
            .map_err(|e| format!("citation source `{}:`: {e}", reg.prefix))?;
    }
    // After registering, since an override adjusts the source's own default
    // rather than replacing it.
    for (prefix, over) in batching_overrides {
        let base = manager
            .refresh_batching(&prefix)
            .expect("the prefix was just registered");
        let batching = over.apply(base, &format!("citation source `{prefix}:`"))?;
        manager = manager.with_refresh_batching(prefix, batching);
    }

    Ok(CitationManager {
        inner: Rc::new(Inner {
            manager,
            prefixes,
            legacy_import,
            tail: RefCell::new(Promise::resolve(&JsValue::UNDEFINED)),
        }),
    })
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn versions_are_set() {
        assert_eq!(BINDING_VERSION, "0.1.0");
        assert!(
            AUTOCITEFETCH_VERSION.starts_with("0.1."),
            "{AUTOCITEFETCH_VERSION}"
        );
    }
}
