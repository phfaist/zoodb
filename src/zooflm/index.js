//
// ZooDB/ZooFLM code base
//


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
        return args; // no non-undefined arguments -- in particular, no kwargs
    }

    let argLast = args[iLast];
    if (argLast == null || typeof argLast !== 'object'
        || !Object.hasOwn(argLast, "__kwargtrans__")) {
        // not kwargs, no changes to args
        return args;
    }

    // these are kwargs, set arguments!
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

    if (Object.keys(kwargs).length) {
        throw new Error(
            `Invalid keyword argument(s): ${Object.keys(kwargs).join(', ')}`
        );
    }

    return args;
}


// provide $$kw({...}) and repr() to importers
export {$$kw, repr} from './_flm-js/py.js';

// provide ability to create derived classes of transcrypt/py classes, if necessary ...
export {__class__, __super__, __get__, isinstance} from './_flm-js/org.transcrypt.__runtime__.js';

// ZooFLMResourceInfo
export * from './_resourceinfo.js';


// includes: make_zoo_flm_environment, prep_flm_environ_features,
// zooflm_default_options, SectionCommandSpec, EndnoteCategory, RefInstance,
// FloatType, GraphicsResource
export * from './_environment.js';


//
// Easily dump and reload compiled FLM to/from data/JSON
//
export { FLMDataDumper, FLMDataLoader } from './_flm-js/flm.flmdump.js';



// ZooHtmlFragmentRenderer
export * from './_fragmentrenderers.js';


// fn_unique_object_id utility
export { fn_unique_object_id } from './_flm-js/unique_object_id.js';


// utilities for rendering:
export * from './_renderutils.js';
