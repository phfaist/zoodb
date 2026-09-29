Managing bibliographic citations
================================

When FLM text cites a paper, as in ``\cite{arxiv:quant-ph/9705052}`` or
``\cite{doi:10.1103/PhysRevA.52.R2493}``, the zoo needs that paper's
bibliographic information (authors, title, journal, year, …) in order to
format the reference.  The *citation manager*,
:class:`CitationDatabaseManager`, provides this information:

- Each citation is a ``prefix:key`` pair.  The prefix selects a *citation
  source*, and the key identifies the entry within that source.  ZooDb ships
  sources that query the `arXiv <https://arxiv.org/>`_ and `doi.org
  <https://doi.org/>`_, that look up entries in local bibliography files, and
  that take the citation text verbatim from the key.  You can
  :ref:`write your own source <citations-custom-source>`.

- Retrieved entries are stored as `CSL-JSON
  <https://citeproc-js.readthedocs.io/en/latest/csl-json/markup.html>`_ objects
  in an on-disk :ref:`cache <citations-cache>`.  Later builds reuse the cache
  and only contact remote servers for new citations or for entries that are
  due for a refresh.

- An arXiv paper that has been published is resolved to the entry of its DOI,
  so that the published version is cited.

- Requests to remote servers respect the servers' rate limits, and are retried
  when they fail temporarily.

The citation manager only *retrieves* citation information.  Formatting it
into reference text according to a CSL style is done by the
:class:`CitationCompiler`.


Citations in a standard zoo
---------------------------

With :func:`makeStandardZooDb` you never create a citation manager yourself:
the FLM processor (see :func:`use_flm_processor`) creates one, retrieves every
citation it encounters in the zoo's FLM content, and hands the results to the
citation compiler.  You configure it through ``flm_options.citations`` in the
zoo's configuration:

.. code-block:: js

   flm_options: {
       citations: {
           // CSL style used to format the citations
           csl_style: csl_style,
           // where to keep the citation cache (this is the default)
           cache_dir: '_zoodb_citations_cache',
           // YAML/JSON file mapping arXiv IDs to DOIs, for arXiv entries whose
           // DOI is missing or wrong (path relative to fs_data_dir)
           override_arxiv_dois_file: 'citations_info/override_arxiv_dois.yml',
           // YAML/JSON files with predefined entries, cited with preset:<key>
           preset_bibliography_files: [ 'citations_info/bib_preset.yml' ],
           // User-Agent header sent to remote servers
           default_user_agent: 'MyZoo/1.0 (https://example.org/myzoo)',
       },
   },

The citation prefixes available in a standard zoo are:

.. list-table::
   :header-rows: 1
   :widths: 15 25 60

   * - Prefix
     - Example
     - Citation information
   * - ``arxiv``
     - ``\cite{arxiv:2101.01234}``
     - Fetched from the arXiv API.  If the paper has a DOI, the citation
       resolves to the ``doi`` entry of that DOI (see
       :class:`CitationSourceArxiv`).
   * - ``doi``
     - ``\cite{doi:10.1103/PhysRevA.52.R2493}``
     - Fetched from doi.org (see :class:`CitationSourceDoi`).
   * - ``preset``
     - ``\cite{preset:Smith1943}``
     - Looked up in the ``preset_bibliography_files`` (see
       :class:`CitationSourceBibliographyFile`).
   * - ``manual``
     - ``\cite{manual:{A. Smith, \emph{J. Weird Stuff} (1943)}}``
     - The key itself is the citation text, in FLM (see
       :class:`CitationSourceManual`).

To configure, add, replace or remove sources, use ``citations.sources``,
which maps a prefix to one of:

- an options object, merged over the defaults of the built-in source of that
  prefix (see the options of :class:`CitationSourceArxiv`,
  :class:`CitationSourceDoi`, :class:`CitationSourceBibliographyFile`,
  :class:`CitationSourceManual` and :class:`CitationSourceBase`);
- an options object with a ``source_class`` key, to create a source of that
  class (a custom source, or a replacement of a built-in one) with the other
  options;
- a source instance, used as is;
- ``false`` (or ``null``) to remove a built-in source, or ``true`` to keep it
  with its default options.

Sources created from options receive the ``fs`` and ``fsRootFilePath``
(``fs_data_dir``) options unless they set them, so relative file paths work as
for the built-in sources.  Options common to all of them can be given in
``citations.source_options``.  The ``preset`` source is only created by default
if ``preset_bibliography_files`` is set.  Because arXiv citations resolve to DOI
entries, removing the ``doi`` source requires an arXiv source that does not
chain to DOIs:

.. code-block:: js

   citations: {
       source_options: {
           user_agent: 'MyZoo/1.0 (https://example.org/myzoo)',
       },
       sources: {
           arxiv: {
               chain_to_doi: false,
               override_arxiv_dois_file: 'citations_info/override_arxiv_dois.yml',
               refresh_batching: { min_batch: 50 },
           },
           doi: false,
           preset: { bibliography_files: [ 'citations_info/bib_preset.yml' ] },
           mysource: { source_class: MyCitationSource, api_url: 'https://…' },
           other: new OtherCitationSource(),
       },
   }

The ``override_arxiv_dois_file`` and ``preset_bibliography_files`` keys of
``flm_options.citations`` remain available as shortcuts for the corresponding
options of the ``arxiv`` and ``preset`` sources.

**Citations that cannot be retrieved** (a malformed arXiv ID, a DOI that does
not exist, a network failure, …) are printed along with the file and field in
which they were encountered.  By default the zoo build then fails with an error
that lists them.  With ``flm_error_policy: 'continue'``, the build proceeds and
formats the citations that could be retrieved.

The other available keys of ``flm_options.citations`` are listed with
:func:`makeStandardZooDb`.  Options of the citation manager itself, such as
those listed under :ref:`citations-advanced-options`, can be passed through
``citations.citation_manager_options``.


.. _citations-cache:

The citation cache
------------------

The cache lives in the directory ``cache_dir`` (``_zoodb_citations_cache`` in
a standard zoo) and consists of:

``citations.jsonl``
   The retrieved citation information.

``cache_compiled_citations.json``
   The formatted citations, maintained by the :class:`CitationCompiler`.

``._citations*``
   Temporary files that exist while a build runs.  Exclude them from version
   control, e.g., with the ``.gitignore`` rule ``._citations*``.

Keep the cache directory between builds (e.g., in version control or in your
CI cache) so that citations are not all fetched again at every build.

**Refreshing.**  Each entry is kept for a lifetime that depends on its source:
10 days for arXiv entries, 360 days for DOI entries, 60 seconds for entries of
local bibliography files (3 minutes if any file is remote, so that edits to
the files are picked up), and 30 days by default for custom sources.  Manual
citations are never written to the cache.  An entry is refreshed as it
approaches the end of its lifetime.  If the refresh fails shortly after the
entry has expired (within 14 days by default), the expired entry is used
anyway and a warning is printed.  These durations can be changed with the
sources' ``cache_duration_ms`` option and with the manager's ``ttl_policy``
option.

**Refresh batching.**  Refreshing a few entries at a time would cost a whole
rate-limited request for each handful of entries (the arXiv API answers 100
identifiers in one request).  Instead, a source may *defer* a small amount of
refresh work, serving the cached entries meanwhile, until there is enough of it
to be worth a request, and *top up* a request that goes out anyway with
entries that are nearly due.  The built-in defaults: arXiv waits for 20 stale
entries (at most 2 days past their expiry) and fills its requests with entries
at least half-way through their lifetime; doi.org waits for 10 stale entries
(at most 30 days past expiry); a bibliography file refreshes all its entries
together; custom sources refetch exactly what is due.  A cache miss is always
fetched immediately, and deferred entries go along with it.  Adjust this with
the ``refresh_batching`` option of a source (see
:ref:`citations-refresh-batching`).

**One build at a time.**  Only one process should use a given cache directory
at a time; two builds that share it concurrently may lose entries that the
other one fetched.  A build that is interrupted may leave a
``._citations.<id>.log`` file behind.  Its contents are taken into account by
the next build, but the file is not removed; delete ``._citations*`` files
yourself when no build is running.

**Extending lifetimes.**  To keep the cached entries of a source for longer
without fetching them again (for instance before a build that must not hit the
arXiv API), shift their lifetime with the ``zoodb-extend-citations-ttl`` tool.
For example, to add 60 days to all arXiv entries:

.. code-block:: text

   yarn zoodb-extend-citations-ttl --cache-dir _zoodb_citations_cache --prefix arxiv --add 60d

``--prefix`` may be repeated; ``--add`` takes a number followed by ``w``,
``d``, ``h`` or ``m``.  Only the entries with the given citation prefix are
changed: an arXiv entry that points to a DOI entry is extended, but not the DOI
entry.  ``--dry-run`` reports what would change.  Run the tool when no build is
running; it refuses to run if a ``._citations.<id>.log`` file is present.

**Merging caches.**  To update a cache with the entries fetched elsewhere (for
instance by another checkout of the zoo, or by a CI build), use the
``zoodb-merge-citations-cache`` tool:

.. code-block:: text

   yarn zoodb-merge-citations-cache --cache-dir _zoodb_citations_cache --from path/to/other/citations.jsonl

Entries present in only one of the two files are kept.  For a citation present
in both, the copy that expires last is kept (the one in ``--cache-dir`` on a
tie).  The ``--from`` file is only read; ``--from`` may also be a cache
directory.  ``--dry-run`` reports what would change.  As above, run the tool
when no build is running.


Using the citation manager directly
-----------------------------------

Outside of a standard zoo, create the manager with the sources you need (an
object mapping each citation prefix to a source instance), initialize it, and
retrieve the citations you are going to need.  Once retrieved, citation
information can be read synchronously.

.. code-block:: js

   import fs from 'fs';

   import { CitationDatabaseManager } from '@phfaist/zoodb/citationmanager';
   import { CitationSourceArxiv } from '@phfaist/zoodb/citationmanager/source/arxiv.js';
   import { CitationSourceDoi } from '@phfaist/zoodb/citationmanager/source/doi.js';

   const citation_manager = new CitationDatabaseManager(
       {
           arxiv: new CitationSourceArxiv(),
           doi: new CitationSourceDoi(),
       },
       {
           cache_fs: fs,
           cache_dir: 'citations_cache',
       }
   );

   await citation_manager.initialize();

   const failures = await citation_manager.retrieve_citations([
       { cite_prefix: 'arxiv', cite_key: 'quant-ph/9705052' },
       { cite_prefix: 'doi', cite_key: '10.1103/PhysRevA.52.R2493' },
   ]);
   // failures: [ { prefix, key, message, origin }, ... ]

   const csl_entry = citation_manager.get_citation('arxiv', 'quant-ph/9705052');
   console.log(csl_entry.title);

``retrieve_citations()`` does not throw when a citation cannot be retrieved.
It prints the failures and returns them; see
:js:meth:`CitationDatabaseManager.retrieve_citations`.

To keep the cache in memory only, for instance in tests, pass
``skip_save_cache: true`` instead of ``cache_fs`` and ``cache_dir``.


Progress and warnings
~~~~~~~~~~~~~~~~~~~~~

Retrieving many citations for the first time can take a while, as the arXiv
and doi.org servers only accept a limited rate of requests.  To follow the
progress, set the environment variable
``DEBUG=zoodb.citationmanager.progress``.  Retries after a failed request, and
expired entries used because they could not be refreshed, are always printed
as warnings.

To handle progress reporting yourself, pass an ``on_event`` callback in the
manager's options (see :ref:`citations-advanced-options`).  It is called
synchronously with event objects whose ``type`` field is one of:

.. list-table::
   :header-rows: 1
   :widths: 35 65

   * - ``type``
     - Meaning
   * - ``retrieve_started``, ``retrieve_finished``
     - A call to ``retrieve_citations()`` starts or ends.
   * - ``pass_started``, ``pass_finished``
     - A retrieval pass starts or ends (chained citations, e.g., the DOI of an
       arXiv paper, are retrieved in a further pass).
   * - ``source_started``, ``source_progress``, ``source_finished``
     - Progress of the requests made by one source (fields ``prefix``,
       ``done``, ``total``).
   * - ``request_started``, ``request_finished``
     - A single request made by a source.
   * - ``wait_started``, ``wait_finished``
     - A wait (field ``wait``: ``'rate_limit'``, ``'backoff'`` before a
       retry, ``'cache_flush'`` or ``'unknown'``).
   * - ``cite_resolved``, ``cite_failed``
     - A citation was retrieved, or could not be (``grace_served`` is true
       if an expired entry is used instead).
   * - ``refresh_planned``
     - :ref:`Refresh batching <citations-refresh-batching>` deferred
       ``deferred`` stale entries of source ``prefix``, or pulled
       ``pulled_forward`` nearly-due entries forward into its requests.
   * - ``unknown``
     - An event of a type not listed here.

The complete list of fields of each event is given by the ``ProgressEvent``
type in ``src/citationmanager/_wasm/autocitefetch_wasm.d.ts``.


In a browser
~~~~~~~~~~~~

The citation manager also runs in browsers.  Browsers cannot query the arXiv
or doi.org directly, because these servers do not allow cross-origin requests:
pass a ``fetch`` function that goes through a proxy of yours in the manager's
options, or use only local sources (manual citations, bibliography files).
There is no cache on disk in a browser; set ``skip_save_cache: true``.


.. _citations-advanced-options:

Advanced options
~~~~~~~~~~~~~~~~

Besides the options documented with :class:`CitationDatabaseManager` below,
the manager accepts the following options (all optional).  In a standard zoo,
pass them in ``flm_options.citations.citation_manager_options``.

``fetch``
   A function compatible with the Fetch API, ``(url, init) => Promise<Response>``,
   used for all http(s) requests.  Default: ``globalThis.fetch``.

``fetch_timeout_ms``
   Timeout of each http(s) request, in milliseconds.  Default ``120000``.

``fs``, ``fs_root_path``
   An ``fs``-compatible object used to read local files (bibliography files,
   the arXiv DOI overrides file), and the directory relative to which their
   paths are resolved.  Default: the ``cache_fs`` option, and the directory
   given to the sources as ``fsRootFilePath`` (``fs_data_dir`` in a standard
   zoo).

``retry``
   How failed requests of the built-in sources are retried: ``{ max_retries, base_ms, cap_ms, honor_retry_after }``, with
   defaults ``5``, ``500``, ``30000`` and ``true``.  Requests are retried after
   a network error or an HTTP status 429, 500, 502, 503 or 504.  The wait
   before a retry starts at about ``base_ms`` milliseconds and doubles at each
   retry, up to ``cap_ms``; a ``Retry-After`` header sent by the server is
   honored within the same bounds.  (Custom sources retry their requests
   themselves; see :js:meth:`CitationSourceBase.fetch_url`.)

``ttl_policy``
   How cache entries are refreshed: ``{ stale_percent, jitter_percent,
   grace_days }``, with defaults ``80``, ``15`` and ``14``.  Once
   ``stale_percent`` percent of its lifetime has passed, an entry is still
   used, but may be refreshed, with a probability that increases as its expiry
   approaches.  Entry lifetimes are varied randomly by up to ±
   ``jitter_percent`` percent, so that entries fetched together are not all
   refreshed together.  An expired entry that cannot be refreshed is still used
   during ``grace_days`` days after its expiry.

``max_chain_depth``
   The maximal number of successive redirections of a citation to another
   entry (as for arXiv → DOI).  Default ``16``.

``drop_csl_fields``
   CSL-JSON fields removed from retrieved entries before they are stored.
   Default ``['reference']`` (the list of references of the cited paper that
   doi.org may return).

``on_event``
   A synchronous callback that receives every progress event (see above).  It
   replaces the default progress reporting.  Errors that it throws are
   printed and otherwise ignored.

``progress_debug``
   If ``false``, the default progress reporting does not log to
   ``debug('zoodb.citationmanager.progress')`` (warnings are still printed).
   Default ``true``.

``cache_base``
   The base name of the cache file.  Default ``'citations'``, for
   ``citations.jsonl``.

``writer_id``
   An identifier of this process, used in the names of the temporary
   ``._citations*`` files.  Default: a random token.

``sleep``, ``now``
   Replace the timer (``async (ms) => {}``) and the clock
   (``() => milliseconds since epoch``) used for rate limiting, retries and
   cache expiry.  Mostly useful for tests.


.. _citations-refresh-batching:

Refresh batching options
~~~~~~~~~~~~~~~~~~~~~~~~

Every source accepts a ``refresh_batching`` option that adjusts the source's
own default (settings that are not given keep it).  In a standard zoo, set it
with ``citations.sources.<prefix>.refresh_batching``.

.. code-block:: js

   refresh_batching: 'eager'      // refetch whatever is due, as soon as it is due
   refresh_batching: 'default'    // the source's default (same as not setting it)
   refresh_batching: {
       eager: false,        // true: start from 'eager' rather than the default
       min_batch: 50,       // with nothing needed now, wait for 50 stale entries...
       max_defer_days: 7,   // ...but refetch an entry at most 7 days past its expiry
       top_up: {            // or false: never pull entries forward
           min_age_percent: 50,  // entries at least half-way through their lifetime
           fill: 'chunk',        // up to the request's capacity, or a number of entries
       },
   }

``max_defer_days`` is at most the ``grace_days`` of the manager's
``ttl_policy``.  With ``top_up: { fill: N }``, up to ``N`` entries are added to
a request going out anyway (and, with ``fill: 0``, only as many as needed to
reach ``min_batch``).  Turning top-up on for a source that has it off needs a
``min_age_percent``.  The structure is that of the ``refresh_batching`` option of
the Python ``flm-citations`` package.  The setting in effect is returned by
:js:meth:`CitationDatabaseManager.get_refresh_batching`, and a
``refresh_planned`` progress event ``{ prefix, deferred, pulled_forward }``
reports when batching changed what a source fetches.


.. _citations-custom-source:

Writing a custom citation source
--------------------------------

A citation source is a subclass of :class:`CitationSourceBase` that implements
``async run_retrieve_chunk(id_list)``.  The manager calls it with lists of keys
(without the prefix) that need to be retrieved.  For each key, the source calls
``this.citation_manager.store_citation()`` with the entry's CSL-JSON data, or
``this.citation_manager.store_citation_chained()`` to redirect the citation to
an entry of another source.  Use :js:meth:`CitationSourceBase.fetch_url` to
read remote URLs or local files.

.. code-block:: js

   import { CitationSourceBase }
       from '@phfaist/zoodb/citationmanager/source/base.js';

   export class MyCitationSource extends CitationSourceBase
   {
       constructor(options)
       {
           super(
               // options that the user cannot override
               { source_name: 'My citation info source' },
               // the user's options
               options,
               // defaults: prefix, at most 20 keys per call to
               // run_retrieve_chunk(), and calls at least 1 s apart
               { cite_prefix: 'mysource', chunk_size: 20,
                 chunk_retrieve_delay_ms: 1000 },
           );
       }

       async run_retrieve_chunk(id_list)
       {
           for (const key of id_list) {
               const csl_json = JSON.parse(await this.fetch_url(
                   `https://example.org/csl/${encodeURIComponent(key)}.json`
               ));
               this.citation_manager.store_citation(
                   this.cite_prefix, key, csl_json, this.cache_store_options
               );
           }
       }
   }

Register it like any other source, e.g., ``citations.sources.mysource: new
MyCitationSource()`` in a standard zoo, and cite with
``\cite{mysource:<key>}``.

A few rules apply:

- Store exactly one entry per key of ``id_list``, and only for the source's own
  prefix.  Keys for which nothing was stored are reported as failures.  If
  ``run_retrieve_chunk()`` throws, the keys of that list that were not stored
  yet are reported as failures, with the error's message.

- List the prefixes to which the source redirects citations with
  ``store_citation_chained()`` in its ``chains_to_sources`` option; the
  manager then checks that these sources are registered.

- ``store_citation()`` and ``store_citation_chained()`` may only be called
  while ``run_retrieve_chunk()`` runs, not from ``source_finalize_run()`` or
  from elsewhere.

- Do not call the manager's ``retrieve_citations()``, ``purge_expired()`` or
  ``save_cache()`` from ``run_retrieve_chunk()``: they would wait for the
  running retrieval to finish, and never return.

- Implement ``validate_cite_key()`` to reject malformed keys before any
  request is made.

Unless the source sets a ``cache_duration_ms``, its entries are kept for the
manager's ``cache_entry_default_duration_ms`` (30 days).


Upgrading from ZooDb 0.1
------------------------

The citation manager was reimplemented in ZooDb 0.2.  Retrieval is now
performed by the `autocitefetch <https://crates.io/crates/autocitefetch>`_
library, which is bundled with the package (there is nothing to install).

**The cache file changed.**  The cache file ``cache_downloaded_info.json`` of
earlier versions is no longer read; citation information is now stored in
``citations.jsonl``.  If you do nothing, the first build prints a warning and
fetches all citations again.  To avoid this, convert the old cache once, from
your project's directory:

.. code-block:: text

   yarn zoodb-migrate-citations-cache --cache-dir _zoodb_citations_cache

The conversion fetches nothing.  It leaves ``cache_downloaded_info.json`` in
place (unless ``--remove-legacy`` is given) and refuses to overwrite an
existing ``citations.jsonl`` (unless ``--force`` is given).  Citation prefixes
other than ``arxiv``, ``doi``, ``manual`` and ``preset`` are assumed to belong
to custom sources; use ``--prefix <name>=<kind>`` to say otherwise.  Run it
with ``--help`` for all options.

Also add the rule ``._citations*`` to your ``.gitignore``.

**Configuration.**  The ``arxiv`` source now requires the ``doi`` source,
unless it is constructed with ``chain_to_doi: false`` (see
`Citations in a standard zoo`_).  The arXiv source's ``api_get_method:
'post'`` is no longer supported.  The manager's ``cache_file`` option is
deprecated in favor of ``cache_dir``.  The sources' ``user_agent`` and
``use_user_agent`` options now only apply to requests made with
:js:meth:`CitationSourceBase.fetch_url` (custom sources and the arXiv DOI
overrides file); the arXiv, DOI and bibliography file sources use the manager's
``default_user_agent``.

**API changes of** :class:`CitationDatabaseManager`:

- ``retrieve_citations()`` returns the citations that could not be retrieved
  instead of throwing an error.
- ``purge_expired()`` and ``save_cache()`` are asynchronous.  ``load_cache()``
  does nothing (the cache is loaded by ``initialize()``).
- ``keys()`` returns normalized keys (DOIs in lowercase).
  ``get_citation_by_id()`` accepts the keys as they were requested.
- ``store_citation()`` and ``store_citation_chained()`` can only be called by
  sources, from ``run_retrieve_chunk()``.
- The attributes ``cache``, ``cache_fsp`` and ``cache_file`` were removed.

**API changes of the citation sources** (only relevant if you wrote a custom
source or subclassed a built-in source):

- :class:`CitationSourceBase`: the manager now splits the keys into chunks and
  schedules the calls to ``run_retrieve_chunk()``.  The methods
  ``add_retrieve()``, ``add_retrieve_done()`` and ``run()``, the helpers
  ``_fetch()`` and ``_jittered_backoff()``, and the attributes
  ``keys_to_retrieve``, ``keys_to_retrieve_remaining``, ``total_queried`` and
  ``fsp_readFile`` were removed; the option ``waiting_poll_timeout_ms`` is
  ignored.  New: ``validate_cite_key()``.  ``fetch_url()`` with
  ``get_response_object: true`` returns a plain object ``{ status, ok,
  headers, body, text(), json() }`` rather than a Fetch ``Response``.
- The built-in sources no longer retrieve citations in JavaScript: the methods
  ``run_retrieve_chunk()`` of all of them, ``source_initialize_run()`` of the
  arXiv and bibliography file sources, ``get_author_csl()``,
  ``handle_arxiv_article_response()`` and ``call_store_callback()`` of the
  arXiv source, and the attributes ``data_for_versionless_arxivid`` (arXiv) and
  ``bibdata`` (bibliography files) were removed.


API reference
-------------

Citation manager
~~~~~~~~~~~~~~~~

.. code::

   import { CitationDatabaseManager } from '@phfaist/zoodb/citationmanager';


.. js:autoclass:: src/citationmanager/_manager.CitationDatabaseManager
   :short-name:
   :members:


Citation sources
~~~~~~~~~~~~~~~~

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

.. js:autofunction:: src/citationmanager/source/arxiv.check_valid_arxiv_id
   :short-name:

.. js:autoclass:: src/citationmanager/source/doi.CitationSourceDoi
   :short-name:
   :members:

.. js:autoclass:: src/citationmanager/source/manual.CitationSourceManual
   :short-name:
   :members:

.. js:autoclass:: src/citationmanager/source/bibliographyfile.CitationSourceBibliographyFile
   :short-name:
   :members:


Citation source base class
~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code::

   // base class, e.g. to write your own citation source implementation
   import {
       CitationSourceBase
   } from '@phfaist/zoodb/citationmanager/source/base.js';


.. js:autoclass:: src/citationmanager/source/base.CitationSourceBase
   :short-name:
   :members:
