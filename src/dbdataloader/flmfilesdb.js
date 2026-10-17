import debug_module from 'debug';
const debug = debug_module('zoodb.dbdataloader.flmfilesdb');

import path from 'path';

import loMerge from 'lodash/merge.js';

import { ZooFlmError, format_diagnostic, utf8_offset_to_index } from '../zooflm/diagnostics.js';

import { getfield, setfield } from '../util/getfield.js';

import { YamlDbDataLoader } from './yamldb.js';
import { decode_text, make_locator, parse_yaml_text } from './_yamlparse.js';


// The front matter: `---` lines around YAML at the start of the file (blank
// lines before it allowed; LF or CRLF line breaks; the YAML may be empty,
// `---` right after `---`); `d` for the indices of the YAML text.
const rx_frontmatter = /^(?:\r?\n)*---\s*\n([\s\S]*?)(?:\r?\n)?(?<=\n)---\s*($|\n)/d;

// The refused pattern's message in a front matter (the tool
// zoodb-reindent-yaml reads .yml and .yaml files only).
const REFUSED_QUOTED_CONTINUATION_MESSAGE_FLM =
    'a quoted value that continues on the next line must be indented more '
    + 'than the key; indent its continuation lines further';

const rx_default_trim_start = /^[ \t]*\n?/;

function count_newlines(text, end)
{
    let n = 0;
    for (let i = text.indexOf('\n'); i !== -1 && i < end; i = text.indexOf('\n', i + 1)) {
        n += 1;
    }
    return n;
}

// The field path of a field name as the field compiler names fields: `[]`
// (append) becomes the index the value is appended at, `[n]` becomes `n`.
// Computed before the value is set.
function concrete_field_path(obj, field_name)
{
    const parts = [];
    let cur = obj;
    for (const part of field_name.split('.')) {
        const m = /^\[(\d*)\]$/.exec(part);
        let key = part;
        if (m != null) {
            key = (m[1] === '') ? (Array.isArray(cur) ? cur.length : 0) : parseInt(m[1]);
        }
        parts.push(String(key));
        cur = (cur != null && typeof cur === 'object') ? cur[key] : undefined;
    }
    return parts.join('.');
}


/**
 * Load object data from a collection of FLM source files with optional YAML
 * front matter.
 *
 * Each ``.flm`` file may begin with a YAML front matter block delimited by
 * ``---`` lines.  Fields defined in the front matter are loaded as regular
 * object properties (read as :js:class:`YamlDbDataLoader` reads a YAML file).
 * The body of the file (after the front matter, if any) holds
 * ``\begin{field}{<fieldname>}...\end{field}`` blocks, which the zoo's FLM
 * engine reads (:js:meth:`ZooFlmEngine.parse_fields`).  The verbatim content
 * of each block is assigned to the corresponding field on the object (using
 * dot-separated paths for nested fields, e.g. ``relations.parents``; a part
 * ``[]`` appends to a list, ``[n]`` sets its item ``n``).  A field may not
 * appear in both the front matter and the body; doing so raises an error.
 *
 * Top-level content outside ``\begin{field}...\end{field}`` blocks is not
 * allowed (except for whitespace and comments introduced with ``%%``):
 * other content, or a block that is not closed, raises a
 * :js:class:`ZooFlmError` whose message lists the errors, each with the
 * file, the line and the column (:js:func:`format_diagnostic`).
 *
 * The positions of the fields in the file are recorded on the object as
 * ``obj._zoodb.flm_field_positions`` (see
 * :js:meth:`YamlDbDataLoader.parse_file_data_with_positions`): the front
 * matter's string values as in a YAML file, each body field at the first
 * character of its value after the trim (``style: 'field'``, exact).
 *
 * Includes validation of the input object data against the provided schemas.
 *
 * This class extends :js:class:`YamlDbDataLoader`.  All configuration options
 * accepted by :js:class:`YamlDbDataLoader` are also accepted here; the
 * following defaults are changed:
 *
 * - ``object_defaults.file_name_match`` defaults to ``/\.flm$/i`` (instead
 *   of the YAML/JSON pattern used by the parent class).
 *
 * Additional configuration options:
 *
 * - ``engine`` *(required)* — the zoo's FLM engine
 *   (:js:class:`ZooFlmEngine`), which parses the files' bodies;
 *   :func:`makeStandardYamlDbDataLoader` passes ``zoodb.zoo_flm_engine``.
 *
 * - ``flm_field_environmentname`` — the LaTeX environment name that delimits
 *   field blocks in the file body: only ``'field'`` (the default), the
 *   element the engine's core declares, is accepted.
 *
 * - ``flm_field_value_trim`` — controls whitespace trimming of field body
 *   content.  If ``true`` (the default), leading horizontal whitespace and
 *   one newline, and one newline and trailing horizontal whitespace, are
 *   stripped.  If ``false``, no trimming is performed.  May also be set to a
 *   custom ``(string) → string`` function for bespoke trimming behaviour (a
 *   field's position is then recorded only when the trimmed value is found
 *   in the block's content).
 *
 * See also :func:`makeStandardZooDb` for a higher-level setup.
 */
export class FlmFilesDbDataLoader extends YamlDbDataLoader
{
    constructor(config)
    {
        config = loMerge({
            object_defaults: {
                file_name_match: /\.flm$/i,
            },
            flm_field_environmentname: 'field',
            flm_field_value_trim: true,
        }, config);

        super(config);

        const engine = this.config.engine;
        if (engine == null || typeof engine.parse_fields !== 'function') {
            throw new Error(
                'FlmFilesDbDataLoader needs the zoo\'s FLM engine as ‘engine’ in its '
                + 'configuration (a ZooFlmEngine, such as zoodb.zoo_flm_engine; '
                + 'makeStandardYamlDbDataLoader() passes it)'
            );
        }
        this.engine = engine;

        if (this.config.flm_field_environmentname !== 'field') {
            throw new Error(
                `FlmFilesDbDataLoader: flm_field_environmentname ‘`
                + `${this.config.flm_field_environmentname}’ is not supported; the FLM `
                + `engine reads the fields of a file as \\begin{field}{<fieldname>} ... `
                + `\\end{field} blocks only`
            );
        }

        if (!this.config.flm_field_value_trim) {
            this.flm_field_value_trim = (x) => x;
            this._trim_start = () => 0;
        } else if (this.config.flm_field_value_trim === true) {
            this.flm_field_value_trim = (x) => (
                x.replace(rx_default_trim_start, '').replace(/\n?[ \t]*$/, '')
            );
            this._trim_start = (x) => rx_default_trim_start.exec(x)[0].length;
        } else {
            this.flm_field_value_trim = this.config.flm_field_value_trim;
            this._trim_start = (x, value) => {
                const i = x.indexOf(value);
                return (i === -1) ? null : i;
            };
        }
    }

    /**
     * Parses an FLM file into its object data: the front matter (YAML) and
     * the body's fields. The positions of the fields are kept for
     * :js:meth:`~YamlDbDataLoader.parse_file_data_with_positions`.
     *
     * @param {string|Uint8Array} file_content - the file's content (bytes
     *     are decoded as UTF-8)
     * @param {Object} objectconfig - the object type's configuration
     * @param {string} root_path - the directory the file was found in
     * @param {string} rel_path - the file's path relative to ``root_path``
     * @returns {Promise<Object>} the object's data
     */
    async parse_file_data(file_content, objectconfig, root_path, rel_path)
    {
        const fullpath = path.join(root_path, rel_path);
        debug(`Reading FLM file ‘${fullpath}’`);

        const text = decode_text(file_content);
        const positions = Object.create(null);

        // parse any front matter
        let obj_data = {};
        let body_offset = 0;
        const frontmatter_rx_match = rx_frontmatter.exec(text);
        if (frontmatter_rx_match != null) {
            const frontmatter_start = frontmatter_rx_match.indices[1][0];
            let frontmatter;
            try {
                frontmatter = parse_yaml_text(frontmatter_rx_match[1], {
                    file: fullpath, first_line: count_newlines(text, frontmatter_start) + 1,
                    refused_message: REFUSED_QUOTED_CONTINUATION_MESSAGE_FLM,
                });
            } catch (err) {
                console.error(err.message);
                throw err;
            }
            obj_data = frontmatter.data ?? {};
            Object.assign(positions, frontmatter.positions);
            body_offset = frontmatter_rx_match[0].length;
        }

        // the body's fields, read by the engine
        const body = text.slice(body_offset);
        let parsed;
        try {
            parsed = this.engine.parse_fields(body, {
                origin: {
                    source_path: fullpath,
                    start_line: count_newlines(text, body_offset) + 1,
                    start_col: 1,
                },
            });
        } catch (err) {
            // the core refused the text (it reports content as diagnostics)
            const message = `Parse error in ‘${fullpath}’: ${err?.message ?? err}`;
            console.error(message);
            throw new Error(message, { cause: err });
        }
        for (const d of parsed.diagnostics) {
            if (d.severity !== 'error') {
                debug(format_diagnostic(d));
            }
        }
        if (parsed.diagnostics.some( (d) => d.severity === 'error' )) {
            const err = new ZooFlmError(parsed.diagnostics);
            console.error(`*** FLM file parsing error in ‘${fullpath}’:\n${err.message}`);
            throw err;
        }

        const locate = make_locator(text);
        for (const field of parsed.fields) {
            const field_name = field.name;

            const existing_value = getfield(obj_data, field_name);
            if (existing_value != null) {
                throw new Error(
                    `In ‘${fullpath}’: field ‘${field_name}’ specified both in `
                    + `front matter and as in the FLM file contents`
                );
            }

            const field_value = this.flm_field_value_trim( field.text );

            const trim_start = this._trim_start(field.text, field_value);
            if (trim_start != null) {
                const index = body_offset + utf8_offset_to_index(body, field.start) + trim_start;
                const { line, col } = locate(index);
                positions[concrete_field_path(obj_data, field_name)] = { line, col, style: 'field' };
            }

            // Set the value.
            // It might not conform to the schema at this point.  This will be caught at a
            // later stage in the loading process, as we validate the data object globally
            // against the relevant schemas.
            setfield(obj_data, field_name, () => field_value);
        }

        this._remember_positions(obj_data, positions);
        return obj_data;
    }


}
