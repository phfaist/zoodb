/* 000001 */ // Transcrypt'ed from Python, 2022-09-29 22:20:46
/* 000006 */ var logging = {};
/* 000006 */ var re = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000025 */ import * as refs from './llm.feature.refs.js';
/* 000024 */ import {Feature} from './llm.feature._base.js';
/* 000020 */ import {LLMArgumentSpec, LLMParsingStateDeltaSetBlockLevel} from './llm.llmenvironment.js';
/* 000017 */ import {LLMEnvironmentSpecBase, LLMMacroSpecBase, TextFormatMacro} from './llm.llmspecinfo.js';
/* 000015 */ import * as llmspecinfo from './llm.llmspecinfo.js';
/* 000013 */ import * as latexnodes_nodes from './pylatexenc.latexnodes.nodes.js';
/* 000010 */ import {LatexArgumentSpec, ParsedArguments, ParsedArgumentsInfo} from './pylatexenc.latexnodes.js';
/* 000007 */ import * as __module_logging__ from './logging.js';
/* 000007 */ __nest__ (logging, '', __module_logging__);
/* 000006 */ import * as __module_re__ from './re.js';
/* 000006 */ __nest__ (re, '', __module_re__);
/* 000006 */ export {latexnodes_nodes, llmspecinfo, LLMArgumentSpec, LLMEnvironmentSpecBase, Feature, ParsedArgumentsInfo, LatexArgumentSpec, TextFormatMacro, ParsedArguments, refs, LLMParsingStateDeltaSetBlockLevel, LLMMacroSpecBase};
/* 000001 */ var __name__ = 'llm.feature.defterm';
/* 000008 */ export var logger = (function () {
/* 000008 */ 	var __accu0__ = logging;
/* 000008 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000008 */ }) ();
/* 000029 */ export var simplify_trim_whitespace = function (x) {
/* 000029 */ 	if (arguments.length) {
/* 000029 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000029 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000029 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000029 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000029 */ 				switch (__attrib0__) {
/* 000029 */ 					case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000029 */ 				}
/* 000029 */ 			}
/* 000029 */ 		}
/* 000029 */ 	}
/* 000029 */ 	else {
/* 000029 */ 	}
/* 000032 */ 	return (function () {
/* 000032 */ 		var __accu0__ = re;
/* 000032 */ 		return __call__ (__accu0__.sub, __accu0__, '\\s+', ' ', (function () {
/* 000032 */ 			var __accu1__ = x;
/* 000032 */ 			return __call__ (__accu1__.strip, __accu1__);
/* 000032 */ 		}) ());
/* 000032 */ 	}) ();
/* 000032 */ };
/* 000034 */ export var get_term_ref_label_verbatim = function (node_term_arg_nodelist) {
/* 000034 */ 	if (arguments.length) {
/* 000034 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000034 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000034 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000034 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000034 */ 				switch (__attrib0__) {
/* 000034 */ 					case 'node_term_arg_nodelist': var node_term_arg_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000034 */ 				}
/* 000034 */ 			}
/* 000034 */ 		}
/* 000034 */ 	}
/* 000034 */ 	else {
/* 000034 */ 	}
/* 000036 */ 	return __call__ (simplify_trim_whitespace, null, (function () {
/* 000036 */ 		var __accu0__ = node_term_arg_nodelist;
/* 000036 */ 		return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000036 */ 	}) ());
/* 000036 */ };
/* 000045 */ export var DefineTermEnvironment =  __class__ ('DefineTermEnvironment', [LLMEnvironmentSpecBase], {
/* 000045 */ 	__module__: __name__,
/* 000047 */ 	is_block_level: true,
/* 000049 */ 	allowed_in_standalone_mode: false,
/* 000051 */ 	allowed_ref_label_prefixes: tuple (['topic']),
/* 000053 */ 	defterm_ref_type: 'defterm',
/* 000055 */ 	get __init__ () {return __get__ (this, function (self, environmentname, render_with_term, render_with_term_suffix) {
/* 000055 */ 		if (typeof render_with_term == 'undefined' || (render_with_term != null && render_with_term.hasOwnProperty ("__kwargtrans__"))) {;
/* 000055 */ 			var render_with_term = true;
/* 000055 */ 		};
/* 000055 */ 		if (typeof render_with_term_suffix == 'undefined' || (render_with_term_suffix != null && render_with_term_suffix.hasOwnProperty ("__kwargtrans__"))) {;
/* 000055 */ 			var render_with_term_suffix = ': ';
/* 000055 */ 		};
/* 000055 */ 		var kwargs = dict ();
/* 000055 */ 		if (arguments.length) {
/* 000055 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000055 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000055 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000055 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000055 */ 					switch (__attrib0__) {
/* 000055 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000055 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000055 */ 						case 'render_with_term': var render_with_term = __allkwargs0__ [__attrib0__]; break;
/* 000055 */ 						case 'render_with_term_suffix': var render_with_term_suffix = __allkwargs0__ [__attrib0__]; break;
/* 000055 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000055 */ 					}
/* 000055 */ 				}
/* 000055 */ 				delete kwargs.__kwargtrans__;
/* 000055 */ 			}
/* 000055 */ 		}
/* 000055 */ 		else {
/* 000055 */ 		}
/* 000060 */ 		__call__ (__call__ (__super__, null, DefineTermEnvironment, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({environmentname: environmentname, arguments_spec_list: [__call__ (LLMArgumentSpec, null, '{', __kwargtrans__ ({argname: 'term'})), llmspecinfo.label_arg]}, kwargs)));
/* 000065 */ 		self.render_with_term = render_with_term;
/* 000066 */ 		self.render_with_term_suffix = render_with_term_suffix;
/* 000067 */ 		if (__t__ (self.render_with_term)) {
/* 000068 */ 			var mspec = __call__ (TextFormatMacro, null, '', __kwargtrans__ ({text_formats: ['defterm-term']}));
/* 000069 */ 			mspec.is_block_heading = true;
/* 000070 */ 			self.render_term_text_format_spec = mspec;
/* 000070 */ 		}
/* 000073 */ 		self.body_parsing_state_delta = __call__ (LLMParsingStateDeltaSetBlockLevel, null, __kwargtrans__ ({is_block_level: self.is_block_level}));
/* 000073 */ 	});},
/* 000076 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000076 */ 		if (arguments.length) {
/* 000076 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000076 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000076 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000076 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000076 */ 					switch (__attrib0__) {
/* 000076 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000076 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000076 */ 					}
/* 000076 */ 				}
/* 000076 */ 			}
/* 000076 */ 		}
/* 000076 */ 		else {
/* 000076 */ 		}
/* 000078 */ 		var node_args = (function () {
/* 000078 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000078 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['term', 'label']));
/* 000078 */ 		}) ();
/* 000083 */ 		var term_llm_ref_label_verbatim = __call__ (get_term_ref_label_verbatim, null, (function () {
/* 000083 */ 			var __accu0__ = __getitem__ (node_args, 'term');
/* 000083 */ 			return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000083 */ 		}) ());
/* 000084 */ 		node.llmarg_term_llm_ref_label_verbatim = term_llm_ref_label_verbatim;
/* 000088 */ 		node.llmarg_labels = (function () {
/* 000088 */ 			var __accu0__ = llmspecinfo;
/* 000088 */ 			return __call__ (__accu0__.helper_collect_labels, __accu0__, __getitem__ (node_args, 'label'), self.allowed_ref_label_prefixes);
/* 000088 */ 		}) ();
/* 000093 */ 		node.llm_referenceable_info = (function () {
/* 000093 */ 			var __accu0__ = refs;
/* 000097 */ 			return __call__ (__accu0__.ReferenceableInfo, __accu0__, __kwargtrans__ ({formatted_ref_llm_text: node.llmarg_term_llm_ref_label_verbatim, labels: __add__ ([tuple ([self.defterm_ref_type, node.llmarg_term_llm_ref_label_verbatim])], __call__ (list, null, node.llmarg_labels))}));
/* 000097 */ 		}) ();
/* 000101 */ 		return node;
/* 000101 */ 	});},
/* 000103 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000103 */ 		if (arguments.length) {
/* 000103 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000103 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000103 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000103 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000103 */ 					switch (__attrib0__) {
/* 000103 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000103 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000103 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000103 */ 					}
/* 000103 */ 				}
/* 000103 */ 			}
/* 000103 */ 		}
/* 000103 */ 		else {
/* 000103 */ 		}
/* 000108 */ 		var formatted_ref_llm_text = node.llmarg_term_llm_ref_label_verbatim;
/* 000116 */ 		if (__t__ ((function () {
/* 000116 */ 			var __accu0__ = render_context;
/* 000116 */ 			return __call__ (__accu0__.supports_feature, __accu0__, 'refs');
/* 000116 */ 		}) ())) {
/* 000117 */ 			var refs_mgr = (function () {
/* 000117 */ 				var __accu0__ = render_context;
/* 000117 */ 				return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000117 */ 			}) ();
/* 000118 */ 			(function () {
/* 000118 */ 				var __accu0__ = refs_mgr;
/* 000118 */ 				return __call__ (__accu0__.register_reference_referenceable, __accu0__, __kwargtrans__ ({node: node, referenceable_info: node.llm_referenceable_info}));
/* 000118 */ 			}) ();
/* 000118 */ 		}
/* 000139 */ 		var thenodelist = node.nodelist;
/* 000141 */ 		if (__t__ (self.render_with_term)) {
/* 000142 */ 			var environ = render_context.doc.environment;
/* 000143 */ 			var term_fragment = (function () {
/* 000143 */ 				var __accu0__ = environ;
/* 000143 */ 				return __call__ (__accu0__.make_fragment, __accu0__, __add__ (formatted_ref_llm_text, self.render_with_term_suffix), __kwargtrans__ ({standalone_mode: true}));
/* 000143 */ 			}) ();
/* 000147 */ 			var intro_node = (function () {
/* 000147 */ 				var __accu0__ = term_fragment.latex_walker;
/* 000153 */ 				return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexMacroNode, __kwargtrans__ ({macroname: '', spec: self.render_term_text_format_spec, macro_post_space: '', parsing_state: term_fragment.nodes.parsing_state, nodeargd: __call__ (ParsedArguments, null, __kwargtrans__ ({arguments_spec_list: self.render_term_text_format_spec.arguments_spec_list, argnlist: [term_fragment.nodes]})), pos: node.pos, pos_end: node.pos_end}));
/* 000153 */ 			}) ();
/* 000162 */ 			(function () {
/* 000162 */ 				var __accu0__ = self.render_term_text_format_spec;
/* 000162 */ 				return __call__ (__accu0__.finalize_node, __accu0__, intro_node);
/* 000162 */ 			}) ();
/* 000164 */ 			var thenodelist = (function () {
/* 000164 */ 				var __accu0__ = term_fragment.latex_walker;
/* 000165 */ 				return __call__ (__accu0__.make_nodelist, __accu0__, __add__ ([intro_node], __call__ (list, null, thenodelist)), __kwargtrans__ ({parsing_state: node.nodelist.parsing_state}));
/* 000165 */ 			}) ();
/* 000165 */ 		}
/* 000171 */ 		return (function () {
/* 000171 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000172 */ 			return __call__ (__accu0__.render_semantic_block, __accu0__, __kwargtrans__ ({content: (function () {
/* 000172 */ 				var __accu1__ = render_context.fragment_renderer;
/* 000172 */ 				return __call__ (__accu1__.render_nodelist, __accu1__, thenodelist, __kwargtrans__ ({render_context: render_context, is_block_level: true}));
/* 000178 */ 			}) (), role: 'defterm', target_id: (function () {
/* 000178 */ 				var __accu1__ = node.llm_referenceable_info;
/* 000178 */ 				return __call__ (__accu1__.get_target_id, __accu1__);
/* 000178 */ 			}) ()}));
/* 000178 */ 		}) ();
/* 000178 */ 	});}
/* 000178 */ });
/* 000182 */ export var RefTermMacro =  __class__ ('RefTermMacro', [LLMMacroSpecBase], {
/* 000182 */ 	__module__: __name__,
/* 000184 */ 	allowed_in_standalone_mode: false,
/* 000186 */ 	defterm_ref_type: 'defterm',
/* 000188 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000188 */ 		var kwargs = dict ();
/* 000188 */ 		if (arguments.length) {
/* 000188 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000188 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000188 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000188 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000188 */ 					switch (__attrib0__) {
/* 000188 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000188 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000188 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000188 */ 					}
/* 000188 */ 				}
/* 000188 */ 				delete kwargs.__kwargtrans__;
/* 000188 */ 			}
/* 000188 */ 		}
/* 000188 */ 		else {
/* 000188 */ 		}
/* 000193 */ 		__call__ (__call__ (__super__, null, RefTermMacro, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({macroname: macroname, arguments_spec_list: [__call__ (LLMArgumentSpec, null, '[', __kwargtrans__ ({argname: 'ref_term'})), __call__ (LLMArgumentSpec, null, '{', __kwargtrans__ ({argname: 'term'}))]}, kwargs)));
/* 000193 */ 	});},
/* 000198 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000198 */ 		if (arguments.length) {
/* 000198 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000198 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000198 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000198 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000198 */ 					switch (__attrib0__) {
/* 000198 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000198 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000198 */ 					}
/* 000198 */ 				}
/* 000198 */ 			}
/* 000198 */ 		}
/* 000198 */ 		else {
/* 000198 */ 		}
/* 000200 */ 		var node_args = (function () {
/* 000200 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000200 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['ref_term', 'term']));
/* 000200 */ 		}) ();
/* 000204 */ 		if (__t__ ((function () {
/* 000204 */ 			var __accu0__ = __getitem__ (node_args, 'ref_term');
/* 000204 */ 			return __call__ (__accu0__.was_provided, __accu0__);
/* 000204 */ 		}) ())) {
/* 000206 */ 			node.llm_term_llm_show_term_nodelist = (function () {
/* 000206 */ 				var __accu0__ = __getitem__ (node_args, 'term');
/* 000206 */ 				return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000206 */ 			}) ();
/* 000208 */ 			node.llm_term_llm_ref_label_verbatim = __call__ (get_term_ref_label_verbatim, null, (function () {
/* 000208 */ 				var __accu0__ = __getitem__ (node_args, 'ref_term');
/* 000208 */ 				return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000208 */ 			}) ());
/* 000208 */ 		}
/* 000209 */ 		else {
/* 000210 */ 			node.llm_term_llm_show_term_nodelist = (function () {
/* 000210 */ 				var __accu0__ = __getitem__ (node_args, 'term');
/* 000210 */ 				return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000210 */ 			}) ();
/* 000212 */ 			node.llm_term_llm_ref_label_verbatim = __call__ (get_term_ref_label_verbatim, null, node.llm_term_llm_show_term_nodelist);
/* 000212 */ 		}
/* 000214 */ 		node.llmarg_ref = tuple ([self.defterm_ref_type, node.llm_term_llm_ref_label_verbatim]);
/* 000214 */ 	});},
/* 000217 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000217 */ 		if (arguments.length) {
/* 000217 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000217 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000217 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000217 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000217 */ 					switch (__attrib0__) {
/* 000217 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000217 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000217 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000217 */ 					}
/* 000217 */ 				}
/* 000217 */ 			}
/* 000217 */ 		}
/* 000217 */ 		else {
/* 000217 */ 		}
/* 000219 */ 		var term_llm_show_term_nodelist = node.llm_term_llm_show_term_nodelist;
/* 000220 */ 		var term_llm_ref_label_verbatim = node.llm_term_llm_ref_label_verbatim;
/* 000222 */ 		if (__t__ (!__t__ (((function () {
/* 000222 */ 			var __accu0__ = render_context;
/* 000222 */ 			return __call__ (__accu0__.supports_feature, __accu0__, 'refs');
/* 000222 */ 		}) ())))) {
/* 000224 */ 			return (function () {
/* 000224 */ 				var __accu0__ = render_context.fragment_renderer;
/* 000224 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, term_llm_show_term_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000224 */ 			}) ();
/* 000224 */ 		}
/* 000230 */ 		var resource_info = node.latex_walker.resource_info;
/* 000233 */ 		var refs_mgr = (function () {
/* 000233 */ 			var __accu0__ = render_context;
/* 000233 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000233 */ 		}) ();
/* 000234 */ 		var ref_instance = (function () {
/* 000234 */ 			var __accu0__ = refs_mgr;
/* 000234 */ 			return __call__ (__accu0__.get_ref, __accu0__, self.defterm_ref_type, term_llm_ref_label_verbatim, resource_info);
/* 000234 */ 		}) ();
/* 000240 */ 		return (function () {
/* 000240 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000240 */ 			return __call__ (__accu0__.render_link, __accu0__, 'term', __kwargtrans__ ({href: ref_instance.target_href, display_nodelist: term_llm_show_term_nodelist, render_context: render_context}));
/* 000240 */ 		}) ();
/* 000240 */ 	});}
/* 000240 */ });
/* 000251 */ export var FeatureDefTerm =  __class__ ('FeatureDefTerm', [Feature], {
/* 000251 */ 	__module__: __name__,
/* 000253 */ 	feature_name: 'defterm',
/* 000255 */ 	FeatureDocumentManager: null,
/* 000256 */ 	FeatureRenderManager: null,
/* 000258 */ 	render_defterm_with_term: true,
/* 000259 */ 	render_defterm_with_term_suffix: ': ',
/* 000261 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000261 */ 		if (arguments.length) {
/* 000261 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000261 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000261 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000261 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000261 */ 					switch (__attrib0__) {
/* 000261 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000261 */ 					}
/* 000261 */ 				}
/* 000261 */ 			}
/* 000261 */ 		}
/* 000261 */ 		else {
/* 000261 */ 		}
/* 000267 */ 		return __call__ (dict, null, __kwargtrans__ ({macros: [__call__ (RefTermMacro, null, 'term')], environments: [__call__ (DefineTermEnvironment, null, 'defterm', __kwargtrans__ ({render_with_term: self.render_defterm_with_term, render_with_term_suffix: self.render_defterm_with_term_suffix}))]}));
/* 000267 */ 	});}
/* 000267 */ });
/* 000006 */ 
//# sourceMappingURL=llm.feature.defterm.map