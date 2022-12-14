//
import debug_module from 'debug';
const debug = debug_module('zoodb.zoollm');


// provide $$kw({...}) and repr() to importers
export {$$kw, repr} from './llm-js/py.js';


// ZooLLMResourceInfo
export * from './_resourceinfo.js';


// includes: make_zoo_llm_environment, prep_llm_environ_features,
// zoollm_default_options, SectionCommandSpec, EndnoteCategory, RefInstance,
// FloatType, GraphicsResource
export * from './_environment.js';


//
// Easily dump and reload compiled LLM to/from data/JSON
//
export { LLMDataDumper, LLMDataLoader } from './llm-js/llm.llmdump.js';



// ZooHtmlFragmentRenderer
export * from './_fragmentrenderers.js';


// fn_unique_object_id utility
export { fn_unique_object_id } from './llm-js/unique_object_id.js';


// utilities for rendering:

export function render_value(x, render_context, render_value_options = {})
{
    if (x == null) {
        return '';
    }

    const { list_joiner, list_item_wrapper } = Object.assign(
        {
            list_joiner: '\n',
            list_item_wrapper: ((x)=>x)
        },
        render_value_options
    );

    if (typeof x === 'string') {
        return render_context.fragment_renderer.render_verbatim(x);
    }
    if (typeof x === 'number') {
        return render_context.fragment_renderer.render_verbatim( Number(x).toString() );
    }
    if (x && x.length) { // is an array
        return x.map( (value) => list_item_wrapper(
            render_value(value, render_context, render_value_options)
        ) ).join(list_joiner);
    }
    if (x && 'render' in x) { // has a render method -> e.g., llm fragment
        return x.render(render_context);
    }
    debug('Cannot render %O', x);
    throw new Error(`No idea how to render x = ${x}`);
};

export function value_not_empty(value)
{
    if (value == null) { // null or undefined
        return false;
    }
    if (value === '') {
        return false;
    }
    // e.g., llmfragment:
    if ('is_empty' in value && !value.is_empty()) {
        return true;
    }
    // e.g., string or array:
    if (value.length !== undefined && value.length > 0) {
        return true;
    }
    return false;
}


