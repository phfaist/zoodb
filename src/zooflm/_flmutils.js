
import { repr } from './_flm-js/py.js';

//
// Use e.g. as:
//
// function myTranscryptPythonFunctionCallback(...args) {
//     const [environmentname, main_body_parsing_state] = zooflm.decode_kwargs(
//         args,
//         ['environmentname', 'main_body_parsing_state'],
//     );
//     ...
// }
//
export function decode_kwargs(args, argnames)
{
    // find last argument
    let iLast = args.findLastIndex( (item) => (item !== undefined) );

    if (iLast === -1) {
        if (args.length != argnames.length) {
            throw new Error(`Error in function call: ${args.length} arguments provided, `
                + `expected ${argnames.length} `
                + `(${argnames.map((n) => "‘"+n+"’").join(", ")})`);
        }
        return args; // no non-undefined arguments -- in particular, no kwargs
    }

    let argLast = args[iLast];
    if (argLast == null || typeof argLast !== 'object'
        || !Object.hasOwn(argLast, "__kwargtrans__")) {
        // not kwargs, no changes to args
        return args;
    }

    // these are kwargs; set arguments!
    let kwargs = Object.assign({}, argLast); // make copy so we can remove elements
    args[iLast] = undefined;

    delete kwargs["__kwargtrans__"];

    // set args from kwargs
    for (const [argJ, argName] of argnames.entries()) {
        let kwargsValue = kwargs[argName];
        if (kwargsValue !== undefined) {
            if (args[argJ] !== undefined) {
                throw new Error(
                    `Both positional and keyword arguments provided for ‘${argName}’ (py-style)`
                );
            }
            args[argJ] = kwargsValue;
            delete kwargs[argName];
        }
    }

    delete kwargs["constructor"]; // why does Transcrypt set this ???
    // delete it only now, in case we actually had a kwarg named 'constructor'

    const remainingKeys = Object.keys(kwargs);
    if (remainingKeys.length) {
        throw new Error(
            `Invalid keyword argument(s): ${remainingKeys.map((n) => "‘"+n+"’").join(', ')}`
        );
    }

    return args;
}




function _to_string_safe(x)
{
    try {
        return `${x}`;
    } catch (tostrerr) {
        return `[failed to convert to string]`;
    }
}
function _repr_safe(x)
{
    try {
        return `${repr(x)}`;
    } catch (tostrerr) {
        return `[failed to convert repr]`;
    }
}

/**
 * Converts an error object to string in a safe way, also handling error objects
 * that come from Python/Transcrypt.
 * 
 * @param {*} err The error object to convert to string
 * @returns A string representation of the error object
 */
export function get_zooflm_error_string(err)
{
    if (err && err.__class__ != null) {
        const clsname = _to_string_safe(err.__class__.__name__);
        if (err.__repr__) {
            return `${clsname}: ${_repr_safe(err)}`;
        }
        if (err.__str__) {
            return `${clsname}: ${_to_string_safe(err)}`;
        }
        if (err.args) {
            return `${clsname}: ${_to_string_safe(err.args)}`;
        }
        if (err.msg) {
            return `${clsname}: ${_to_string_safe(err.msg)}`;
        }
        return `${clsname}: ${_to_string_safe(err)}`;
    }
    return _to_string_safe(err);
}




