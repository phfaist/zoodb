import { GetGitLastModifiedDbProcessor } from '../dbprocessor/getgitlastmodified.js';


/**
 * Set up the StandardZooDb to include a :class:`GetGitLastModifiedDbProcessor`
 * database processor.
 */
export function use_gitlastmodified_processor(_this)
{
    return new GetGitLastModifiedDbProcessor({
        data_dir: _this.config.fs_data_dir,
    });
}
