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
 * Resolve a compiled FLM reference instance to a final URL string.
 *
 * If the reference's `target_href` uses the internal `zoodbobjectref:` scheme
 * (set by the FLM processor for zoo object links), the URL is converted to a
 * zoo object permalink using `zoo_object_permalink(object_type, object_id)`.
 * Otherwise the `target_href` is returned unchanged.
 *
 * Throws an error if `ref_instance` has no `target_href` and cannot be
 * resolved.
 *
 * @param {Object} ref_instance - The FLM `RefInstance` object to resolve.
 * @param {Object} render_context - The FLM render context (passed through to
 *     the resolver; not used by this function directly).
 * @param {Object} options
 * @param {Function} options.zoo_object_permalink - Called as
 *     `zoo_object_permalink(object_type, object_id)` and must return a URL
 *     string for the given object.
 * @returns {string} The resolved URL.
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
 * Factory function that creates and configures a :class:`ZooFLMEnvironment`
 * for use with :func:`makeStandardZooDb`.
 *
 * Reads the following properties from `_this` (the internal state object
 * built by `makeStandardZooDb`):
 *
 * - `_this.config.flm_options.environment_options` — options forwarded
 *   directly to the :class:`ZooFLMEnvironment` constructor.
 * - `_this.config.flm_options.allow_unresolved_references` — if `true`,
 *   cross-references that cannot be resolved at build time render as `<??>`
 *   instead of throwing an error.
 * - `_this.config.flm_options.allow_unresolved_citations` — if `true`,
 *   unknown citation keys render verbatim as ``prefix:key``.
 * - `_this.config.flm_options.resources.graphics_use_srcset_parceljs` — when
 *   `{ enabled: true, ... }`, the graphics URL resolver emits a `srcset`
 *   array of Parcel-compatible image-resize URLs for raster images.
 * - `_this.config.zoo_permalinks.graphics_resource(gresource) → string` —
 *   callback that maps a collected graphics resource to a public URL.
 * - `_this.zoo_object_permalink(object_type, object_id) → string` — callback
 *   used by :func:`default_target_href_resolver` to map zoo object references
 *   to public URLs.
 *
 * @param {Object} _this - The internal state object from `makeStandardZooDb`.
 * @returns {ZooFLMEnvironment} The configured FLM environment instance.
 */
export function use_flm_environment(_this)
{
    const flm_options = _this.config.flm_options ?? {};
    const environment_options = flm_options.environment_options ?? {};

    const zoo_flm_environment = new ZooFLMEnvironment(environment_options);

    //
    // target_href resolver for refs within FLM.  We depend on an external
    // callable in config that tells us how to build URLs corresponding to
    // object targets
    //
    if (zoo_flm_environment.ref_resolver != null) {
        zoo_flm_environment.ref_resolver.target_href_resolver =
            (ref_instance, render_context) => {
                return default_target_href_resolver(ref_instance, render_context, {
                    zoo_object_permalink: _this.zoo_object_permalink,
                });
            }
        ;
    }
    //
    // Maybe allow unresolved references, for an incomplete zoo?
    //
    if (flm_options.allow_unresolved_references && zoo_flm_environment.feature_refs != null) {
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
    if (flm_options.allow_unresolved_citations && zoo_flm_environment.feature_citations != null) {
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
    if (zoo_flm_environment.graphics_collection != null) {
        zoo_flm_environment.graphics_collection.src_url_resolver_fn = ({
            graphics_resource, // render_context, source_path
        }) => {

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
        };
    }

    // provide helper $$kw({}) for superclass, if necessary
    _this.$$kw = $$kw;

    return zoo_flm_environment;
}
