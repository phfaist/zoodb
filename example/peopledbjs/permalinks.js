//
// Code here where at which paths objects will be made available
//

export const permalinks = {

    // Oops, I didn't mean to refer to people as "objects" and definitely not to
    // collect them in a "zoo" ... :/

    // e.g., "/person/alice"
    object: (object_type, object_id) => `/${object_type}/${object_id}`,

    // will be used for, e.g., pictures
    graphics_resource: (graphics_resource) => `/pic/${graphics_resource.src_url}`,
};

