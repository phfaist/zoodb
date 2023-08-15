import path from 'path';


// like encodeURI(), but be much more aggressive on escaping unwanted
// characters other than '/' thanks to encodeURIComponent() which encodes
// more special characters (like ?& etc.)
//
// NOTE: Paths are still assumed to have the '/' folder delimiter on all
// platforms!
function percent_encode_path(p)
{
    return (
        p.split('/').map( (piece) => encodeURIComponent(piece) ).join('/')
    );
}


/** Normalizes a path or url into a proper URL.
 *
 * If the `url` argument is a URL with a protocol (e.g. 'http:' or 'file:'
 * etc.), then the url is returned unchanged.  In particular, it is assumed that
 * the URL is already correctly %-encoded.
 *
 * If the `url` argument does not have a protocol, then it is assumed to be a
 * raw filesystem path.  Then a 'file:...' url is returned, with the path
 * suitably %-encoded.
 *
 * If `fs_root_path` is specified, any raw filesystem path (without the 'file:'
 * protocol) is understood as relative to that path.  The value of
 * `fs_root_path` should be a raw filesystem path (it should not be prefixed by
 * '%' and should not be percent-encoded).
 */
export function path_or_url_to_url(url, { fs_root_path }={})
{
    // if `url` is a filesystem path, then it isn't %-encoded
    if ( (new URL(url, 'xyzdummyproto://')).protocol === 'xyzdummyproto:') {
        if (fs_root_path) {
            url = path.join(fs_root_path, url);
        }
        url = `file:${percent_encode_path(url)}`;
    }

    return new URL(url);
}
