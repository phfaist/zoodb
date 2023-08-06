import debug_mod from 'debug';
const debug = debug_mod("zoodb.std.use_flm_environment");

import {
    $$kw, //repr,
    ZooFLMEnvironment,
    RefInstance,
    //fn_unique_object_id,
} from '../zooflm/index.js';

import { split_prefix_label } from '../util/prefixlabel.js';

// import loMerge from 'lodash/merge.js';

/**
 * Doc........
 */
export function default_target_href_resolver(ref_instance, render_context,
                                             { zoo_object_permalink })
{
    const { target_href, ref_type, ref_label } = ref_instance ?? {};

    if (target_href != null) {
        // maybe fix target_href?
        const url = new URL(target_href);
        if (url.protocol == 'zoodbobjectref:') {
            // this is a reference set by zoodb/zooflm/zooprocessor.js

            // [Note, we seem to get all the slashes as part of the pathname in
            // "protocol:///code/ref" when running in the browser]
            const objectref = url.pathname.replace(/^\/+/, '');

            const [object_type, object_id] = split_prefix_label(objectref);
            let object_url = zoo_object_permalink(object_type, object_id)
                + url.hash;
            return object_url;
        }
        return target_href;
    }
    throw new Error(`Cannot resolve link reference to ‘${ref_type}:${ref_label}’`);
}



/**
 * Set up the StandardZooDb to set up a :class:`ZooFLMEnvironment` with some
 * standard features and settings.
 *
 * Document options............................
 */
export function use_flm_environment(_this)
{
    const zoo_flm_environment_options = _this.config.zoo_flm_environment_options ?? {};

    const flm_options = _this.config.flm_options ?? {};


    const zoo_flm_environment = new ZooFLMEnvironment(zoo_flm_environment_options);

    //
    // target_href resolver for refs within FLM.  We depend on an external
    // callable in config that tells us how to build URLs corresponding to
    // object targets
    //
    zoo_flm_environment.ref_resolver.target_href_resolver =
        (ref_instance, render_context) => {
            return default_target_href_resolver(ref_instance, render_context, {
                zoo_object_permalink: _this.zoo_object_permalink,
            });
        }
    ;
    //
    // Maybe allow unresolved references, for an incomplete zoo?
    //
    if (flm_options.allow_unresolved_references) {
        zoo_flm_environment.feature_refs.add_external_ref_resolver(
            {
                get_ref(ref_type, ref_label, /*resource_info, render_context*/) {
                    debug(`Default ref_resolver called for invalid reference `
                          + `‘${ref_type}:${ref_label}’`);
                    return RefInstance(
                        // ref_type, ref_label, formatted_ref_flm_text, target_href
                        ref_type, ref_label,
                        '<??>', null
                    );
                }
            }
        );
    }
    //
    // Maybe allow unresolved citations?
    //
    if (flm_options.allow_unresolved_citations) {
        zoo_flm_environment.feature_citations.add_external_citations_provider(
            {
                get_citation_full_text_flm(cite_prefix, cite_key, /*resource_info*/)
                {
                    debug(`Note: unresolved citation ‘${cite_prefix}:${cite_key}’`);
                    return `\\begin{verbatimtext}${cite_prefix}:${cite_key}\\end{verbatimtext}`;
                }
            }
        );
    }
    //
    // Set the graphics resource URL resolver.  We depend on an external
    // callable in config that tells us how to build URLs corresponding to a
    // given graphics resource.
    //
    zoo_flm_environment.graphics_collection.src_url_resolver_fn =
        ({graphics_resource, /*render_context, source_path*/}) => {

            const src_url =
                  _this.config.zoo_permalinks.graphics_resource(graphics_resource);

            // possibly prepare alternative versions of the image (via Parcel)
            // through an srcset= attribute

            let srcset = undefined;

            if (flm_options.resources?.graphics_use_srcset_parceljs
                && flm_options.resources.graphics_use_srcset_parceljs.enabled) {

                // Note: building an srcset this way only works if we
                // postprocess the resulting html pages with parcel.  This is
                // why this feature is opt-in with the explicit option
                // `graphcis_use_srcset_parceljs: { enabled: true,
                // image_max_zoom_factor: ... }`.

                let {
                    pixel_density_list,
                    image_max_zoom_factor,
                } = flm_options.resources.graphics_use_srcset_parceljs;

                if (graphics_resource.graphics_type == 'raster') {

                    const [imgw, imgh] = graphics_resource.pixel_dimensions;

                    if (!pixel_density_list) {
                        let maxfactor = Math.floor(image_max_zoom_factor);
                        // [1, 2, ..., maxfactor]
                        pixel_density_list = Array(maxfactor).fill().map((_,i)=>(i+1));
                    }

                    let srcset_items = [];
                    //for (let factor = 1; factor <= image_max_zoom_factor; ++factor)
                    for (const factor of pixel_density_list) {
                        const dpi = 96*factor;
                        if (dpi >= graphics_resource.dpi) {
                            break;
                        }
                        srcset_items.push({
                            factor,
                            width: Math.round(imgw * dpi / graphics_resource.dpi),
                            height: Math.round(imgh * dpi / graphics_resource.dpi),
                        });
                    }
                    srcset = srcset_items.map( ({factor, width, height}) => (
                        {
                            source: `${src_url}?`
                                + (new URLSearchParams({as:'webp',width,height,})).toString(),
                            pixel_density: factor,
                        }
                    ) );
                    
                    debug(`built parceljs-compatible srcset for ${src_url} → `
                          + srcset.map(
                              ({source,pixel_density}) => `${source} ${pixel_density}x`
                          ).join(', '));
                }
            }

            return {src_url, srcset};
        }
    ;

    // provide helper $$kw({}) for superclass, if necessary
    _this.$$kw = $$kw;

    return zoo_flm_environment;
}
