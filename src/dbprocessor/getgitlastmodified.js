import debug_module from 'debug';
const debug = debug_module('zoodb.dbprocessor.getgitlastmodified');

import path from 'path';
import { spawnSync } from 'child_process';

import { ZooDbProcessorBase } from './base.js';


// Thank you
// https://github.com/11ty/eleventy/blob/0db66a2/src/Util/DateGitLastUpdated.js
// -->
/* Thank you to Vuepress!
 * https://github.com/vuejs/vuepress/blob/89440ce552675859189ed4ab254ce19c4bba5447/packages/%40vuepress/plugin-last-updated/index.js
 * MIT licensed: https://github.com/vuejs/vuepress/blob/89440ce552675859189ed4ab254ce19c4bba5447/LICENSE
 */
function getGitLastUpdatedDate(filePath) {
    //debug(`Getting GIT modification time stamp for ${filePath}`);

    try {

        let spw = spawnSync(
            "git",
            // Formats https://www.git-scm.com/docs/git-log#_pretty_formats
            // %at author date, UNIX timestamp
            ["log", "-1", "--format=%at", filePath],
            {
                cwd: path.dirname(filePath),
            }
        );
        const timestamp = (
            parseInt(
                spw.stdout.toString("utf-8")
            ) * 1000
        );
        const dateObject = new Date(timestamp);

        // make sure the date is valid!
        dateObject.toISOString();

    } catch (err) {

        console.error(`Failed to find GIT last modified time for ‘${filePath}’!`, err);
        return new Date();

    }

    //debug(`  -> date = ${dateObject.toISOString()}`);
    return dateObject;
}




/**
 * Use `git` to inspect the last modification time of a source file associated
 * with a given object.
 *
 * Objects' meta field ``obj._zoodb.git_last_modified_date`` is set to a
 * relevant JavaScript ``Date`` instance.
 *
 * Options: ``{ data_dir: ...}``
 *
 * - `data_dir` is the folder relative to which we should interpret source file
 *   paths.
 */
export class GetGitLastModifiedDbProcessor extends ZooDbProcessorBase
{
    constructor(options)
    {
        super()

        this.data_dir = options?.data_dir;
        if (this.data_dir == null) {
            throw new Error(`No data dir specified for getting git-last-modified information`);
        }

        this._latest_modification_date = null;

        debug(`Creating GetGitLastModifiedDbProcessor with data_dir ‘${this.data_dir}’`);
    }

    /**
     * If called after processing the zoo, this method returns the latest
     * encountered modification date of a source file path.
     */
    get_latest_modification_date()
    {
        return this._latest_modification_date;
    }

    // ---

    initialize_zoo()
    {
    }

    process_zoo()
    {
        if (this.zoodb == null) {
            throw new Error(`No zoodb set!`);
        }

        for (const [object_type, objdb] of Object.entries(this.zoodb.objects)) {
            for (const [objid, obj] of Object.entries(objdb)) {
                this.process_object(object_type, objid, obj);
            }
        }
    }

    // prepare_zoo_update_objects(db_objects)
    // {
    // }

    // default base implementation simply calls process_zoo(), that's good
    // enough for us.
    //
    // process_zoo_update_objects(db_objects)
    // { ... }

    // ----

    process_object(object_type, objid, obj)
    {
        const { source_file_path } = obj._zoodb ?? {};
        //debug(`Processing ${object_type} ‘${objid}’ - source_file_path=‘${source_file_path}’`);
        if (source_file_path != null) {
            const full_file_path = path.resolve(this.data_dir, source_file_path);
            const object_date = getGitLastUpdatedDate(full_file_path);
            if (object_date != null) {
                obj._zoodb.git_last_modified_date = object_date;
                if (this._latest_modification_date == null
                    || object_date > this._latest_modification_date) {
                    this._latest_modification_date = object_date;
                }
            }
        }
    }


    // // ---
    // prepare_data_dump(data, options)
    // {
    //     return data;
    // }

}
