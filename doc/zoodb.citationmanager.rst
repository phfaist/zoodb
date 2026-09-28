Managing bibliographic citations
================================

Citation manager
----------------

.. code::

   import { CitationDatabaseManager } from '@phfaist/zoodb/citationmanager';


Note: See also :class:`CitationCompiler` in the FLM-related modules.


How citations are fetched
~~~~~~~~~~~~~~~~~~~~~~~~~

Citation retrieval is performed by the Rust crate `autocitefetch
<https://crates.io/crates/autocitefetch>`_, compiled to WebAssembly by the
binding crate in ``rust/`` of the ZooDb repository.  The compiled module is
inlined as base64 in the generated (committed) directory
``src/citationmanager/_wasm/`` and loaded asynchronously, once per process,
by ``src/citationmanager/_load_wasm.js`` (also exported as
``@phfaist/zoodb/citationmanager/wasm``) when
:class:`CitationDatabaseManager`'s ``initialize()`` is awaited.  Users of the
package need no Rust toolchain and no build step; the same module works on
Node.js (18 or later) and in browsers.

The WebAssembly module does no I/O of its own.  Everything goes through
JavaScript *host functions* supplied by :class:`CitationDatabaseManager`:
``fetch`` (http(s) requests through the Fetch API, and ``file:`` URLs or bare
paths read through an ``fs`` object), the cache filesystem (``read``,
``append``, ``atomicReplace``, ``list``, ``remove`` and the locking calls),
``sleep``, ``now``, and a progress-event callback.

The crate provides:

- **Chunking and rate limiting** per source (by default, the arXiv source
  queries up to 100 ids per request, at least 3.1 s apart, and the DOI source
  one DOI per request, at least 1.1 s apart).

- **Retry with exponential backoff** on network errors and on HTTP statuses
  429, 500, 502, 503 and 504, honoring a numeric ``Retry-After`` header (see
  the ``retry`` option below).

- **Expiry with stale-while-revalidate and grace.**  Every cached entry has a
  lifetime (TTL) set by its source, jittered so that entries fetched together
  do not all expire together.  After ``stale_percent`` of its lifetime an
  entry is *stale*: it is still used, and revalidated with a probability that
  grows as the entry approaches its expiry.  An expired entry is fetched
  again; if that fails within the *grace* period after expiry, the expired
  entry is used anyway and a warning is printed.

- **Chaining**, e.g. an arXiv entry that has a published DOI is resolved to
  the ``doi:`` entry (arXiv → DOI), up to ``max_chain_depth`` links.

Progress is reported as plain event objects with a ``type`` field (the same
snake_case vocabulary as the crate's Python binding): ``retrieve_started``,
``pass_started``, ``pass_finished``, ``retrieve_finished``,
``source_started``, ``source_progress``, ``source_finished``,
``cite_resolved``, ``cite_failed`` (with ``grace_served``),
``wait_started`` / ``wait_finished`` (``wait`` is ``'rate_limit'``,
``'backoff'``, ``'cache_flush'`` or ``'unknown'``), ``request_started``,
``request_finished``, and ``unknown`` for variants this build does not know.
The exact shapes are given by the ``ProgressEvent`` type in
``src/citationmanager/_wasm/autocitefetch_wasm.d.ts``.  By default,
milestones and waits of 2 s or more are logged with
``debug('zoodb.citationmanager.progress')`` (enable with
``DEBUG=zoodb.citationmanager.progress``), while backoff waits and failures
served from an expired entry are printed with ``console.warn``;
``source_progress`` events are throttled to one per second per prefix.
Supplying an ``on_event`` callback replaces this default and disables the
throttling.

Per-citation failures do not throw: ``retrieve_citations()`` returns the list
of failures (``{ prefix, key, message, origin }``) and prints each one with
the location where the citation was encountered.


Cache files
~~~~~~~~~~~

All files live in the cache directory ``cache_dir`` (for a standard zoo,
``flm_options.citations.cache_dir``, default ``_zoodb_citations_cache``):

- ``citations.jsonl`` (``<cache_base>.jsonl``) — the fetched citation
  information, one record per line.  It is written only by the crate (never
  by JavaScript code), and compacted when the manager flushes.

- ``cache_compiled_citations.json`` — the formatted citations, written by the
  :class:`CitationCompiler` (unchanged).

- ``._citations*`` — throwaway files (per-process append logs) that exist
  while a build runs.  Add one rule to your ``.gitignore``::

      ._citations*

On Node.js the library does **no file locking**: the cache directory is
assumed to be used by a single process at a time.  Two builds sharing one
``cache_dir`` concurrently may lose each other's new entries.  A run that is
interrupted may leave its ``._citations.<writer>.log`` file behind; later runs
fold its contents into the cache but never delete it, so remove
``._citations*`` files by hand when no build is running.

The legacy cache file ``cache_downloaded_info.json`` (written by ZooDb before
0.2) is **no longer read**.  If it exists and ``citations.jsonl`` does not, the
manager prints a warning naming the migration tool, and all citations are then
fetched again.  To keep them, convert the legacy file once per project with
the ``zoodb-migrate-citations-cache`` tool (package ``bin``, e.g.
``yarn zoodb-migrate-citations-cache --cache-dir _zoodb_citations_cache``):

.. code-block:: text

   Usage: zoodb-migrate-citations-cache --cache-dir <dir> [--legacy-file <path>] [--cache-base citations] [--prefix <name>=<kind>]... [--drop-field <name>]... [--dry-run] [--force] [--remove-legacy]

Nothing is fetched.  Prefixes ``arxiv``, ``doi``, ``manual`` and ``preset``
map to the built-in sources; any other prefix is treated as a custom source
(override with ``--prefix <name>=<kind>``).  The tool refuses to overwrite an
existing ``<dir>/<base>.jsonl`` unless ``--force`` is given, and leaves the
legacy file untouched unless ``--remove-legacy`` is given.  Run it with
``--help`` for the full option list.


Options
~~~~~~~

The manager's options are documented with :class:`CitationDatabaseManager`
below.  The following keys may be given to a standard zoo through
``flm_options.citations.citation_manager_options`` (all optional):

``fetch``
   A Fetch-API-compatible function ``(url, init) => Promise<Response>`` used
   for http(s) requests.  Default: ``globalThis.fetch``.  In a browser, a
   proxying fetch is needed to reach arXiv and doi.org (CORS).

``fs``
   An ``fs``-compatible object used to read local files (``file:`` URLs and
   bare paths, e.g. bibliography files).  Default: the manager's ``cache_fs``,
   else the ``fs`` option of the first source that has one.

``fs_root_path``
   The directory relative to which bare local paths are resolved.  Default:
   the ``fsRootFilePath`` of the first source that has one (for a standard
   zoo, ``fs_data_dir``), else ``''``.

``fetch_timeout_ms``
   Timeout of each http(s) request, in milliseconds.  Default ``120000``.

``retry``
   Retry policy of the built-in sources' requests:
   ``{ max_retries, base_ms, cap_ms, honor_retry_after }``; omitted fields
   keep their defaults ``5``, ``500``, ``30000``, ``true`` (the delay starts
   at ``base_ms``, doubles at each retry with some jitter and is capped at
   ``cap_ms``; a ``Retry-After`` header is clamped to that range).

``ttl_policy``
   Expiry policy: ``{ stale_percent, jitter_percent, grace_days }``; defaults
   ``80``, ``15`` (±15 % jitter on each entry's lifetime) and ``14``.

``max_chain_depth``
   Maximal length of a chain of chained citations.  Default ``16``.

``drop_csl_fields``
   CSL-JSON fields removed from fetched entries before they are stored.
   Default ``['reference']``.

``on_event``
   A synchronous callback receiving every progress event (see above).  It
   replaces the default reporting, and events are not throttled.  Exceptions
   it throws are logged and ignored.

``progress_debug``
   If ``false``, the default reporting does not log to
   ``debug('zoodb.citationmanager.progress')`` (warnings are still printed).
   Default ``true``.

``writer_id``
   Identifier of this process in the names of the ``._citations*`` files.
   Default: a random token.

``cache_base``
   Base name of the cache file.  Default ``'citations'``
   (``citations.jsonl``).

``sleep``, ``now``
   Replace the timer (``async (ms) => {}``, default ``setTimeout``) and the
   clock (``() => milliseconds since epoch``, default ``Date.now``) used for
   rate limiting, backoff and expiry.  Mostly useful for tests.

The manager options ``cache_fs``, ``cache_dir``, ``default_user_agent``,
``cache_entry_default_duration_ms`` and ``skip_save_cache`` are set from the
corresponding ``flm_options.citations`` keys, as before.

Behavior change: the arXiv source chains DOIs to the ``doi`` source, which
must therefore be registered.  Setting ``citations.sources.doi: false`` while
the arXiv source is enabled requires an arXiv source constructed with
``chain_to_doi: false`` (e.g., ``sources.arxiv: new CitationSourceArxiv({
chain_to_doi: false })``); otherwise ``initialize()`` throws an error that
says so.


Writing a custom source
~~~~~~~~~~~~~~~~~~~~~~~

A custom source subclasses :class:`CitationSourceBase` (see below) and
implements ``async run_retrieve_chunk(id_list)``.  The crate calls it for each
chunk of keys (at most ``chunk_size`` keys, chunks started at least
``chunk_retrieve_delay_ms`` apart).  For each key, it calls

.. code-block:: js

   this.citation_manager.store_citation(
       this.cite_prefix, key, csl_json_object, this.cache_store_options
   );
   // or, to point the key to another source's entry:
   this.citation_manager.store_citation_chained(
       this.cite_prefix, key, new_cite_prefix, new_cite_key, set_properties
   );

While ``run_retrieve_chunk()`` runs, ``this.citation_manager`` is a collector
that records these calls (awaiting them is allowed but not needed) and still
exposes the manager's ``options``.  Use ``this.fetch_url(url, fetch_options)``
to read remote URLs, ``file:`` URLs or paths relative to ``fsRootFilePath``;
it returns the body as a string, or, with ``get_response_object: true``, an
object ``{ status, ok, headers, body, text(), json() }``.  ``fetch_url`` retries
network errors and HTTP statuses 429, 500, 502, 503 and 504 (honoring a
numeric ``Retry-After``) up to ``fetch_max_retries`` times, since the crate's
own retry policy does not apply to JavaScript sources.  Optionally
reimplement ``source_initialize_run()`` (called once per
``retrieve_citations()``, before this source's first chunk),
``source_finalize_run()`` (called after each ``retrieve_citations()``), and
``validate_cite_key(cite_key)`` (return an error message to reject a key
before any request is made, or ``null``).  The options ``chunk_size``,
``chunk_retrieve_delay_ms``, ``chains_to_sources``, ``cache_store_options``,
``cache_duration_ms``, ``use_user_agent``, ``user_agent``,
``fetch_max_retries``, ``fs`` and ``fsRootFilePath`` are described with
:class:`CitationSourceBase`.  If a source sets no cache duration, the
manager's ``cache_entry_default_duration_ms`` (30 days) applies.

Restrictions:

- Exactly one resolution is recorded per requested key, and only for the
  source's own prefix; keys for which nothing was stored are reported as
  failures.

- Citations cannot be stored from ``source_finalize_run()`` (the call
  throws).

- Do not call ``retrieve_citations()``, ``purge_expired()`` or
  ``save_cache()`` on the manager from inside ``run_retrieve_chunk()``: they
  wait for the running retrieval and would deadlock.

- Calling ``store_citation()`` / ``store_citation_chained()`` on the manager
  itself outside a chunk throws.


Known limitations
~~~~~~~~~~~~~~~~~

- Concurrent processes sharing one ``cache_dir`` are unsupported; there is no
  locking on Node.js.  An interrupted run leaves a
  ``._citations.<writer>.log`` file that later runs fold but never delete;
  remove ``._citations*`` files by hand when no build is running.

- Browsers cannot reach arXiv or doi.org directly because of CORS: pass a
  proxying ``fetch`` in ``citation_manager_options.fetch``, or use placeholder
  sources.  Nothing is persisted in a browser: set ``skip_save_cache`` so that
  the cache is kept in memory.

- Custom (JavaScript) sources: one resolution per requested key; no stores
  from ``source_finalize_run()``; no crate-side retry (``fetch_url`` retries
  instead).

- ``cache_downloaded_info.json`` is never read; convert it once with
  ``zoodb-migrate-citations-cache`` (which deletes it with
  ``--remove-legacy``), otherwise the first build fetches everything again
  after a warning.

- ``keys()`` returns normalized ids (``doi:`` keys are lowercased);
  ``get_citation_by_id()`` accepts the spelling encountered in the FLM text.

- The per-source ``user_agent`` / ``use_user_agent`` options apply only to
  requests made through ``fetch_url()`` (custom sources, and the arXiv
  source's ``override_arxiv_dois_file``); the requests of the built-in sources
  (arXiv, DOI, bibliography files) use the manager's ``default_user_agent``
  and ``default_use_user_agent``.

- ``fetch_url(url, { get_response_object: true })`` returns a plain object
  ``{ status, ok, headers, body, text(), json() }``, not a Fetch ``Response``.



.. js:autoclass:: src/citationmanager/_manager.CitationDatabaseManager
   :short-name:
   :members:




Citation Sources
----------------

.. code::

   import {
       CitationSourceArxiv
   } from '@phfaist/zoodb/citationmanager/source/arxiv.js';
   import {
       CitationSourceDoi
   } from '@phfaist/zoodb/citationmanager/source/doi.js';
   import {
       CitationSourceManual
   } from '@phfaist/zoodb/citationmanager/source/manual.js';
   import {
       CitationSourceBibliographyFile
   } from '@phfaist/zoodb/citationmanager/source/bibliographyfile.js';


.. js:autoclass:: src/citationmanager/source/arxiv.CitationSourceArxiv
   :short-name:
   :members:

.. js:autoclass:: src/citationmanager/source/doi.CitationSourceDoi
   :short-name:
   :members:

.. js:autoclass:: src/citationmanager/source/manual.CitationSourceManual
   :short-name:
   :members:

.. js:autoclass:: src/citationmanager/source/bibliographyfile.CitationSourceBibliographyFile
   :short-name:
   :members:


Citation Source Base Class
--------------------------

.. code::
   
   // base class, e.g. to write your own citation source implementation
   import {
       CitationSourceBase
   } from '@phfaist/zoodb/citationmanager/source/base.js';


.. js:autoclass:: src/citationmanager/source/base.CitationSourceBase
   :short-name:
   :members:
