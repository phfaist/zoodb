import { GetGitLastModifiedDbProcessor } from '../dbprocessor/getgitlastmodified.js';

export function use_gitlastmodified_processor(_this)
{
    return new GetGitLastModifiedDbProcessor({
        data_dir: _this.config.fs_data_dir,
    });
}
