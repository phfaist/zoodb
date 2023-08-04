import { RelationsPopulator } from '../dbprocessor/relations.js';

/**
 * Set up the StandardZooDb to set up a :class:`RelationsPopulator` database
 * processor.
 */
export function use_relations_populator( /*_this*/ )
{
    return new RelationsPopulator();
}
