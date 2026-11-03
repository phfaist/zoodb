import debug_mod from 'debug';
const debug = debug_mod("zoodb.std.use_flm_engine");

import { ZooFlmEngine } from '../zooflm/engine.js';


/**
 * The warning of :func:`use_flm_engine` when the option
 * ``graphics_use_srcset_parceljs`` is enabled while upstream request U2 is open.
 */
export const SRCSET_U2_WARNING =
    'graphics_use_srcset_parceljs: alternative image sources need the flm-core constructor of '
    + 'upstream request U2; images are published without srcset until it lands';

/**
 * The ``srcset`` configuration of the FLM core that the standard option
 * ``flm_options.resources.graphics_use_srcset_parceljs`` (``{ enabled,
 * pixel_density_list, image_max_zoom_factor }``) translates to: ``null``
 * unless enabled.  (:func:`use_flm_engine` does not pass it to the core while
 * upstream request U2 is open; see there.)
 *
 * @param {Object|null} option
 * @returns {Object|null}
 */
export function srcset_core_config(option)
{
    if (!option?.enabled) {
        return null;
    }
    if (option.pixel_density_list != null) {
        return { pixel_density_list: Array.from(option.pixel_density_list) };
    }
    return { image_max_zoom_factor: Math.floor(option.image_max_zoom_factor ?? 1) };
}

// the keys of `flm_options.engine` that use_flm_engine() reads
const ENGINE_OPTION_KEYS = ['dollar_math', 'settings', 'off', 'link_target_blank', 'render_value_options'];


/**
 * Factory function that creates the zoo's FLM engine
 * (:js:class:`ZooFlmEngine`) for :func:`makeStandardZooDb` (the config entry
 * ``use_flm_engine``; the engine is ``zoodb.zoo_flm_engine``).
 *
 * Reads the following properties from `_this` (the internal state object
 * built by `makeStandardZooDb`):
 *
 * - `_this.config.flm_options.engine` — the core's configuration as data:
 *   ``dollar_math`` (whether ``$…$`` delimits math; default `false`),
 *   ``settings`` (the settings of the standard features, one map per
 *   feature, user definitions under ``userdefs``), ``off`` (standard
 *   features switched off by name), ``link_target_blank`` (default `true`:
 *   in the HTML output, a link of ``\href``, ``\url`` or ``\email`` to an
 *   address outside the site opens in a new tab; `false`: no link gets a
 *   target), and ``render_value_options`` (how the composer's ``rdr()``
 *   renders arrays).  Any other key throws an ``Error`` naming it; a key set
 *   to `null` or `undefined` takes its default, as does the whole object.
 * - `_this.config.flm_options.resources.graphics_use_srcset_parceljs` —
 *   ``{ enabled: true, ... }`` asks for a ``srcset`` of Parcel-compatible
 *   image-resize URLs on raster images (:func:`srcset_core_config`).  The
 *   option is accepted but does not reach the core for now: the core's
 *   publish stage cannot write the alternative sources until flm-core offers
 *   the constructor of upstream request U2, and configured with them it would
 *   fail on every image.  Images are published without ``srcset``, and the
 *   engine's creation warns once (the ``debug`` logger and ``console.warn``,
 *   ``SRCSET_U2_WARNING``).
 * - `_this.config.flm_options.allow_unresolved_references` — if `true`,
 *   references that resolve to nothing are Warnings (the label shown)
 *   instead of Errors.
 * - `_this.flm_error_policy` — the engine's default error policy
 *   (``'continue'`` with the config's ``continue_with_errors``).
 *
 * @param {Object} _this - The internal state object from `makeStandardZooDb`.
 * @returns {Promise<ZooFlmEngine>} The engine.
 */
export async function use_flm_engine(_this)
{
    const flm_options = _this.config.flm_options ?? {};
    const engine_options = flm_options.engine ?? {};
    for (const key of Object.keys(engine_options)) {
        if (!ENGINE_OPTION_KEYS.includes(key)) {
            throw new Error(
                `use_flm_engine: unknown key ‘${key}’ in flm_options.engine, expected one of `
                + ENGINE_OPTION_KEYS.join(', ')
            );
        }
    }

    // The srcset option is accepted, but not given to the core while U2 is
    // open (the core's publish stage would fail on every image).
    if (srcset_core_config(flm_options.resources?.graphics_use_srcset_parceljs) != null) {
        debug(SRCSET_U2_WARNING);
        console.warn(SRCSET_U2_WARNING);
    }

    const core = {
        dollar_math: engine_options.dollar_math ?? false,
        srcset: null,
        settings: engine_options.settings ?? {},
        off: engine_options.off ?? [],
        link_target_blank: engine_options.link_target_blank ?? true,
    };
    debug(`Creating the FLM engine`, { core });

    return await ZooFlmEngine.create({
        core,
        error_policy: _this.flm_error_policy ?? 'abort',
        unresolved: flm_options.allow_unresolved_references ? 'warn' : 'error',
        render_value_options: engine_options.render_value_options ?? null,
    });
}
