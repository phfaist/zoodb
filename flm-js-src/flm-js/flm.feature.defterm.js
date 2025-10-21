/* 000001 */ // Transcrypt'ed from Python, 2025-10-21 23:26:11
/* 000006 */ var logging = {};
/* 000006 */ var re = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000025 */ import * as refs from './flm.feature.refs.js';
/* 000024 */ import {Feature} from './flm.feature._base.js';
/* 000020 */ import {FLMArgumentSpec, FLMParsingStateDeltaSetBlockLevel} from './flm.flmenvironment.js';
/* 000017 */ import {FLMEnvironmentSpecBase, FLMMacroSpecBase, TextFormatMacro} from './flm.flmspecinfo.js';
/* 000015 */ import * as flmspecinfo from './flm.flmspecinfo.js';
/* 000013 */ import * as latexnodes_nodes from './pylatexenc.latexnodes.nodes.js';
/* 000010 */ import {ParsedArguments, ParsedArgumentsInfo} from './pylatexenc.latexnodes.js';
/* 000007 */ import * as __module_logging__ from './logging.js';
/* 000007 */ __nest__ (logging, '', __module_logging__);
/* 000006 */ import * as __module_re__ from './re.js';
/* 000006 */ __nest__ (re, '', __module_re__);
/* 000006 */ export {TextFormatMacro, Feature, FLMMacroSpecBase, FLMEnvironmentSpecBase, refs, FLMArgumentSpec, latexnodes_nodes, FLMParsingStateDeltaSetBlockLevel, ParsedArgumentsInfo, ParsedArguments, flmspecinfo};
/* 000001 */ var __name__ = 'flm.feature.defterm';
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
/* 000042 */ export var DefineTermEnvironment =  __class__ ('DefineTermEnvironment', [FLMEnvironmentSpecBase], {
/* 000042 */ 	__module__: __name__,
/* 000044 */ 	is_block_level: true,
/* 000046 */ 	allowed_in_standalone_mode: false,
/* 000048 */ 	allowed_ref_label_prefixes: tuple (['topic']),
/* 000050 */ 	defterm_ref_type: 'defterm',
/* 000052 */ 	get __init__ () {return __get__ (this, function (self, environmentname, render_with_term, render_with_term_suffix) {
/* 000052 */ 		if (typeof render_with_term == 'undefined' || (render_with_term != null && render_with_term.hasOwnProperty ("__kwargtrans__"))) {;
/* 000052 */ 			var render_with_term = true;
/* 000052 */ 		};
/* 000052 */ 		if (typeof render_with_term_suffix == 'undefined' || (render_with_term_suffix != null && render_with_term_suffix.hasOwnProperty ("__kwargtrans__"))) {;
/* 000052 */ 			var render_with_term_suffix = ': ';
/* 000052 */ 		};
/* 000052 */ 		var kwargs = dict ();
/* 000052 */ 		if (arguments.length) {
/* 000052 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000052 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000052 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000052 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000052 */ 					switch (__attrib0__) {
/* 000052 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000052 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000052 */ 						case 'render_with_term': var render_with_term = __allkwargs0__ [__attrib0__]; break;
/* 000052 */ 						case 'render_with_term_suffix': var render_with_term_suffix = __allkwargs0__ [__attrib0__]; break;
/* 000052 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000052 */ 					}
/* 000052 */ 				}
/* 000052 */ 				delete kwargs.__kwargtrans__;
/* 000052 */ 			}
/* 000052 */ 		}
/* 000052 */ 		else {
/* 000052 */ 		}
/* 000061 */ 		__call__ (__call__ (__super__, null, DefineTermEnvironment, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({environmentname: environmentname, arguments_spec_list: [__call__ (FLMArgumentSpec, null, '{', __kwargtrans__ ({argname: 'term'})), flmspecinfo.label_arg], body_parsing_state_delta: __call__ (FLMParsingStateDeltaSetBlockLevel, null, __kwargtrans__ ({is_block_level: self.is_block_level}))}, kwargs)));
/* 000064 */ 		self.render_with_term = render_with_term;
/* 000065 */ 		self.render_with_term_suffix = render_with_term_suffix;
/* 000066 */ 		if (__t__ (self.render_with_term)) {
/* 000067 */ 			var mspec = __call__ (TextFormatMacro, null, '', __kwargtrans__ ({text_formats: ['defterm-term']}));
/* 000068 */ 			mspec.is_block_heading = true;
/* 000069 */ 			self.render_term_text_format_spec = mspec;
/* 000069 */ 		}
/* 000069 */ 	});},
/* 000071 */ 	_fields: tuple (['environmentname', 'render_with_term', 'render_with_term_suffix']),
/* 000075 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000075 */ 		if (arguments.length) {
/* 000075 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000075 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000075 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000075 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000075 */ 					switch (__attrib0__) {
/* 000075 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000075 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000075 */ 					}
/* 000075 */ 				}
/* 000075 */ 			}
/* 000075 */ 		}
/* 000075 */ 		else {
/* 000075 */ 		}
/* 000077 */ 		var node_args = (function () {
/* 000077 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000077 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['term', 'label']));
/* 000077 */ 		}) ();
/* 000081 */ 		node.flmarg_term = (function () {
/* 000081 */ 			var __accu0__ = __getitem__ (node_args, 'term');
/* 000081 */ 			return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000081 */ 		}) ();
/* 000083 */ 		var term_flm_ref_label_verbatim = __call__ (get_term_ref_label_verbatim, null, node.flmarg_term);
/* 000084 */ 		node.flmarg_term_flm_ref_label_verbatim = term_flm_ref_label_verbatim;
/* 000088 */ 		node.flmarg_labels = (function () {
/* 000088 */ 			var __accu0__ = flmspecinfo;
/* 000088 */ 			return __call__ (__accu0__.helper_collect_labels, __accu0__, __getitem__ (node_args, 'label'), self.allowed_ref_label_prefixes);
/* 000088 */ 		}) ();
/* 000094 */ 		node.flm_referenceable_infos = [(function () {
/* 000094 */ 			var __accu0__ = refs;
/* 000099 */ 			return __call__ (__accu0__.ReferenceableInfo, __accu0__, __kwargtrans__ ({kind: 'defterm', formatted_ref_flm_text: node.flmarg_term_flm_ref_label_verbatim, labels: __add__ ([tuple ([self.defterm_ref_type, node.flmarg_term_flm_ref_label_verbatim])], __call__ (list, null, node.flmarg_labels))}));
/* 000099 */ 		}) ()];
/* 000104 */ 		return node;
/* 000104 */ 	});},
/* 000106 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000106 */ 		if (arguments.length) {
/* 000106 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000106 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000106 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000106 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000106 */ 					switch (__attrib0__) {
/* 000106 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000106 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000106 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000106 */ 					}
/* 000106 */ 				}
/* 000106 */ 			}
/* 000106 */ 		}
/* 000106 */ 		else {
/* 000106 */ 		}
/* 000108 */ 		var formatted_ref_flm_text = node.flmarg_term_flm_ref_label_verbatim;
/* 000110 */ 		var logical_state = (function () {
/* 000110 */ 			var __accu0__ = render_context;
/* 000110 */ 			return __call__ (__accu0__.get_logical_state, __accu0__, 'feature.defterm');
/* 000110 */ 		}) ();
/* 000111 */ 		if (__t__ (!__in__ ('currently_defining_terms', logical_state))) {
/* 000112 */ 			__setitem__ (logical_state, 'currently_defining_terms', []);
/* 000112 */ 		}
/* 000114 */ 		var cur_def_terms = __call__ (list, null, __getitem__ (logical_state, 'currently_defining_terms'));
/* 000115 */ 		(function () {
/* 000115 */ 			var __accu0__ = cur_def_terms;
/* 000115 */ 			return __call__ (__accu0__.append, __accu0__, formatted_ref_flm_text);
/* 000115 */ 		}) ();
/* 000117 */ 		var __withid0__ = (function () {
/* 000117 */ 			var __accu0__ = render_context;
/* 000117 */ 			return __call__ (__accu0__.push_logical_state, __accu0__, 'feature.defterm', 'currently_defining_terms', cur_def_terms);
/* 000117 */ 		}) ();
/* 000117 */ 		try {
/* 000117 */ 			__withid0__.__enter__ ();
/* 000120 */ 			// pass;
/* 000125 */ 			if (__t__ ((function () {
/* 000125 */ 				var __accu0__ = render_context;
/* 000125 */ 				return __call__ (__accu0__.supports_feature, __accu0__, 'refs');
/* 000125 */ 			}) ())) {
/* 000126 */ 				var refs_mgr = (function () {
/* 000126 */ 					var __accu0__ = render_context;
/* 000126 */ 					return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000126 */ 				}) ();
/* 000127 */ 				var __iterable0__ = node.flm_referenceable_infos;
/* 000127 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000127 */ 					var referenceable_info = __getitem__ (__iterable0__, __index0__);
/* 000128 */ 					(function () {
/* 000128 */ 						var __accu0__ = refs_mgr;
/* 000128 */ 						return __call__ (__accu0__.register_reference_referenceable, __accu0__, __kwargtrans__ ({node: node, referenceable_info: referenceable_info}));
/* 000128 */ 					}) ();
/* 000128 */ 				}
/* 000128 */ 			}
/* 000134 */ 			var thenodelist = node.nodelist;
/* 000136 */ 			if (__t__ (self.render_with_term)) {
/* 000137 */ 				var environ = render_context.doc.environment;
/* 000138 */ 				var term_fragment = (function () {
/* 000138 */ 					var __accu0__ = environ;
/* 000138 */ 					return __call__ (__accu0__.make_fragment, __accu0__, __add__ (formatted_ref_flm_text, self.render_with_term_suffix), __kwargtrans__ ({standalone_mode: true}));
/* 000138 */ 				}) ();
/* 000142 */ 				var intro_node = (function () {
/* 000142 */ 					var __accu0__ = term_fragment.latex_walker;
/* 000148 */ 					return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexMacroNode, __kwargtrans__ ({macroname: '', spec: self.render_term_text_format_spec, macro_post_space: '', parsing_state: term_fragment.nodes.parsing_state, nodeargd: __call__ (ParsedArguments, null, __kwargtrans__ ({arguments_spec_list: self.render_term_text_format_spec.arguments_spec_list, argnlist: [term_fragment.nodes]})), pos: node.pos, pos_end: node.pos_end}));
/* 000148 */ 				}) ();
/* 000158 */ 				(function () {
/* 000158 */ 					var __accu0__ = self.render_term_text_format_spec;
/* 000158 */ 					return __call__ (__accu0__.finalize_node, __accu0__, intro_node);
/* 000158 */ 				}) ();
/* 000160 */ 				var thenodelist = (function () {
/* 000160 */ 					var __accu0__ = term_fragment.latex_walker;
/* 000161 */ 					return __call__ (__accu0__.make_nodelist, __accu0__, __add__ ([intro_node], __call__ (list, null, thenodelist)), __kwargtrans__ ({parsing_state: node.nodelist.parsing_state}));
/* 000161 */ 				}) ();
/* 000161 */ 			}
/* 000167 */ 			var result = (function () {
/* 000167 */ 				var __accu0__ = render_context.fragment_renderer;
/* 000168 */ 				return __call__ (__accu0__.render_semantic_block, __accu0__, __kwargtrans__ ({content: (function () {
/* 000168 */ 					var __accu1__ = render_context.fragment_renderer;
/* 000168 */ 					return __call__ (__accu1__.render_nodelist, __accu1__, thenodelist, __kwargtrans__ ({render_context: render_context, is_block_level: true}));
/* 000175 */ 				}) (), role: 'defterm', render_context: render_context, target_id: (function () {
/* 000175 */ 					var __accu1__ = __getitem__ (node.flm_referenceable_infos, 0);
/* 000175 */ 					return __call__ (__accu1__.get_target_id, __accu1__);
/* 000175 */ 				}) (), annotations: ['p-block']}));
/* 000175 */ 			}) ();
/* 000179 */ 			// pass;
/* 000179 */ 			__withid0__.__exit__ ();
/* 000179 */ 		}
/* 000179 */ 		catch (__except0__) {
/* 000179 */ 			if (! (__withid0__.__exit__ (__except0__.name, __except0__, __except0__.stack))) {
/* 000179 */ 				throw __except0__;
/* 000179 */ 			}
/* 000179 */ 		}
/* 000183 */ 		return result;
/* 000183 */ 	});},
/* 000186 */ 	get recompose_pure_latex () {return __get__ (this, function (self, node, recomposer) {
/* 000186 */ 		if (arguments.length) {
/* 000186 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000186 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000186 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000186 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000186 */ 					switch (__attrib0__) {
/* 000186 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000186 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000186 */ 						case 'recomposer': var recomposer = __allkwargs0__ [__attrib0__]; break;
/* 000186 */ 					}
/* 000186 */ 				}
/* 000186 */ 			}
/* 000186 */ 		}
/* 000186 */ 		else {
/* 000186 */ 		}
/* 000192 */ 		if (__t__ (node.flm_referenceable_infos === null)) {
/* 000195 */ 			var __except0__ = __call__ (LatexWalkerLocatedError, null, __add__ ('Recomposing pure LaTeX: Invalid referenceable info in defterm node ', __call__ (repr, null, node)), __kwargtrans__ ({pos: node.pos}));
/* 000195 */ 			__except0__.__cause__ = null;
/* 000195 */ 			throw __except0__;
/* 000195 */ 		}
/* 000201 */ 		var term_recomposed = (function () {
/* 000201 */ 			var __accu0__ = recomposer;
/* 000201 */ 			return __call__ (__accu0__.subrecompose, __accu0__, node.flmarg_term);
/* 000201 */ 		}) ();
/* 000203 */ 		var s = __add__ (__add__ ('\\begin{', __call__ (str, null, node.environmentname)), '}');
/* 000204 */ 		var s = __call__ (__iadd__, null, s, __add__ (__add__ ('{', term_recomposed), '}'));
/* 000208 */ 		var __iterable0__ = node.flm_referenceable_infos;
/* 000208 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000208 */ 			var referenceable_info = __getitem__ (__iterable0__, __index0__);
/* 000209 */ 			var __iterable1__ = referenceable_info.labels;
/* 000209 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000209 */ 				var __left0__ = __getitem__ (__iterable1__, __index1__);
/* 000209 */ 				var ref_type = __left0__ [0];
/* 000209 */ 				var ref_label = __left0__ [1];
/* 000210 */ 				var safe_label_info = (function () {
/* 000210 */ 					var __accu0__ = recomposer;
/* 000210 */ 					return __call__ (__accu0__.make_safe_label, __accu0__, 'ref', ref_type, ref_label, node.latex_walker.resource_info);
/* 000210 */ 				}) ();
/* 000213 */ 				var safe_label = __getitem__ (safe_label_info, 'safe_label');
/* 000214 */ 				var s = __call__ (__iadd__, null, s, __add__ (__add__ ('\\label{', __call__ (str, null, safe_label)), '}'));
/* 000214 */ 			}
/* 000214 */ 		}
/* 000216 */ 		var s = __call__ (__iadd__, null, s, (function () {
/* 000216 */ 			var __accu0__ = recomposer;
/* 000216 */ 			return __call__ (__accu0__.recompose_nodelist, __accu0__, node.nodelist, node);
/* 000216 */ 		}) ());
/* 000217 */ 		var s = __call__ (__iadd__, null, s, __add__ (__add__ ('\\end{', __call__ (str, null, node.environmentname)), '}'));
/* 000219 */ 		return s;
/* 000219 */ 	});}
/* 000219 */ });
/* 000226 */ export var RefTermMacro =  __class__ ('RefTermMacro', [FLMMacroSpecBase], {
/* 000226 */ 	__module__: __name__,
/* 000228 */ 	allowed_in_standalone_mode: false,
/* 000229 */ 	delayed_render: true,
/* 000231 */ 	defterm_ref_type: 'defterm',
/* 000233 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000233 */ 		var kwargs = dict ();
/* 000233 */ 		if (arguments.length) {
/* 000233 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000233 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000233 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000233 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000233 */ 					switch (__attrib0__) {
/* 000233 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000233 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000233 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000233 */ 					}
/* 000233 */ 				}
/* 000233 */ 				delete kwargs.__kwargtrans__;
/* 000233 */ 			}
/* 000233 */ 		}
/* 000233 */ 		else {
/* 000233 */ 		}
/* 000240 */ 		__call__ (__call__ (__super__, null, RefTermMacro, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({macroname: macroname, arguments_spec_list: [__call__ (FLMArgumentSpec, null, '[', __kwargtrans__ ({argname: 'ref_term', flm_doc: 'The term that is being referenced.  May be omitted if it coincides with \\verba{term}'})), __call__ (FLMArgumentSpec, null, '{', __kwargtrans__ ({argname: 'term', flm_doc: 'The term the exact way it should be typeset at this point'}))]}, kwargs)));
/* 000240 */ 	});},
/* 000247 */ 	_fields: tuple (['macroname']),
/* 000249 */ 	get get_flm_doc () {return __get__ (this, function (self) {
/* 000249 */ 		if (arguments.length) {
/* 000249 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000249 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000249 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000249 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000249 */ 					switch (__attrib0__) {
/* 000249 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000249 */ 					}
/* 000249 */ 				}
/* 000249 */ 			}
/* 000249 */ 		}
/* 000249 */ 		else {
/* 000249 */ 		}
/* 000250 */ 		return ' Reference a term defined somewhere else in a\n        \\verbcode+\\begin{defterm}…\\end{defterm}+ environment.  This will\n        typically produce a link in HTML output for instance to the location\n        where this term is defined.  In case you need to typeset the term\n        differently than when you defined it (e.g., because of a plural,\n        capital/lower case, other declination), use the optional argument to\n        give the term exactly as defined and specify the term as it should\n        appear in the main argument.  E.g.\n        \\verbcode+These are \\term[Markov chain]{Markov chains}+';
/* 000250 */ 	});},
/* 000260 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000260 */ 		if (arguments.length) {
/* 000260 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000260 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000260 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000260 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000260 */ 					switch (__attrib0__) {
/* 000260 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000260 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000260 */ 					}
/* 000260 */ 				}
/* 000260 */ 			}
/* 000260 */ 		}
/* 000260 */ 		else {
/* 000260 */ 		}
/* 000262 */ 		var node_args = (function () {
/* 000262 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000262 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['ref_term', 'term']));
/* 000262 */ 		}) ();
/* 000266 */ 		var term_nodelist = (function () {
/* 000266 */ 			var __accu0__ = __getitem__ (node_args, 'term');
/* 000266 */ 			return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000266 */ 		}) ();
/* 000268 */ 		if (__t__ ((function () {
/* 000268 */ 			var __accu0__ = __getitem__ (node_args, 'ref_term');
/* 000268 */ 			return __call__ (__accu0__.was_provided, __accu0__);
/* 000268 */ 		}) ())) {
/* 000269 */ 			node.flmarg_ref_term = (function () {
/* 000269 */ 				var __accu0__ = __getitem__ (node_args, 'ref_term');
/* 000269 */ 				return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000269 */ 			}) ();
/* 000270 */ 			node.flm_term_flm_show_term_nodelist = term_nodelist;
/* 000272 */ 			node.flm_term_flm_ref_label_verbatim = __call__ (get_term_ref_label_verbatim, null, node.flmarg_ref_term);
/* 000272 */ 		}
/* 000273 */ 		else {
/* 000274 */ 			node.flmarg_ref_term = null;
/* 000275 */ 			node.flm_term_flm_show_term_nodelist = term_nodelist;
/* 000277 */ 			node.flm_term_flm_ref_label_verbatim = __call__ (get_term_ref_label_verbatim, null, term_nodelist);
/* 000277 */ 		}
/* 000279 */ 		node.flmarg_ref = tuple ([self.defterm_ref_type, node.flm_term_flm_ref_label_verbatim]);
/* 000280 */ 		node.flm_ref_info = dict ({'ref_list': [node.flmarg_ref], 'display_content_nodelist': node.flm_term_flm_show_term_nodelist});
/* 000280 */ 	});},
/* 000286 */ 	get prepare_delayed_render () {return __get__ (this, function (self, node, render_context) {
/* 000286 */ 		if (arguments.length) {
/* 000286 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000286 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000286 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000286 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000286 */ 					switch (__attrib0__) {
/* 000286 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000286 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000286 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000286 */ 					}
/* 000286 */ 				}
/* 000286 */ 			}
/* 000286 */ 		}
/* 000286 */ 		else {
/* 000286 */ 		}
/* 000288 */ 		// pass;
/* 000294 */ 		var is_currently_defining_term = false;
/* 000295 */ 		var logical_state = (function () {
/* 000295 */ 			var __accu0__ = render_context;
/* 000295 */ 			return __call__ (__accu0__.get_logical_state, __accu0__, 'feature.defterm');
/* 000295 */ 		}) ();
/* 000296 */ 		if (__t__ (__in__ ('currently_defining_terms', logical_state))) {
/* 000297 */ 			if (__t__ (__in__ (node.flm_term_flm_ref_label_verbatim, __getitem__ (logical_state, 'currently_defining_terms')))) {
/* 000299 */ 				var is_currently_defining_term = true;
/* 000299 */ 			}
/* 000299 */ 		}
/* 000301 */ 		// pass;
/* 000307 */ 		var mgr = (function () {
/* 000307 */ 			var __accu0__ = render_context;
/* 000307 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'defterm');
/* 000307 */ 		}) ();
/* 000308 */ 		(function () {
/* 000308 */ 			var __accu0__ = mgr;
/* 000308 */ 			return __call__ (__accu0__.register_term_node_info, __accu0__, node, __kwargtrans__ ({is_currently_defining_term: is_currently_defining_term}));
/* 000308 */ 		}) ();
/* 000308 */ 	});},
/* 000314 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000314 */ 		if (arguments.length) {
/* 000314 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000314 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000314 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000314 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000314 */ 					switch (__attrib0__) {
/* 000314 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000314 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000314 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000314 */ 					}
/* 000314 */ 				}
/* 000314 */ 			}
/* 000314 */ 		}
/* 000314 */ 		else {
/* 000314 */ 		}
/* 000316 */ 		var term_flm_show_term_nodelist = node.flm_term_flm_show_term_nodelist;
/* 000317 */ 		var term_flm_ref_label_verbatim = node.flm_term_flm_ref_label_verbatim;
/* 000319 */ 		if (__t__ (!__t__ (((function () {
/* 000319 */ 			var __accu0__ = render_context;
/* 000319 */ 			return __call__ (__accu0__.supports_feature, __accu0__, 'refs');
/* 000319 */ 		}) ())))) {
/* 000321 */ 			return (function () {
/* 000321 */ 				var __accu0__ = render_context.fragment_renderer;
/* 000321 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, term_flm_show_term_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000321 */ 			}) ();
/* 000321 */ 		}
/* 000327 */ 		var resource_info = node.latex_walker.resource_info;
/* 000330 */ 		var refs_mgr = (function () {
/* 000330 */ 			var __accu0__ = render_context;
/* 000330 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000330 */ 		}) ();
/* 000331 */ 		var ref_instance = (function () {
/* 000331 */ 			var __accu0__ = refs_mgr;
/* 000331 */ 			return __call__ (__accu0__.get_ref, __accu0__, self.defterm_ref_type, term_flm_ref_label_verbatim, resource_info);
/* 000331 */ 		}) ();
/* 000337 */ 		var mgr = (function () {
/* 000337 */ 			var __accu0__ = render_context;
/* 000337 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'defterm');
/* 000337 */ 		}) ();
/* 000338 */ 		var term_info = (function () {
/* 000338 */ 			var __accu0__ = mgr;
/* 000338 */ 			return __call__ (__accu0__.get_term_node_info, __accu0__, node);
/* 000338 */ 		}) ();
/* 000340 */ 		var is_currently_defining_term = __getitem__ (term_info, 'is_currently_defining_term');
/* 000342 */ 		if (__t__ (is_currently_defining_term)) {
/* 000344 */ 			return (function () {
/* 000344 */ 				var __accu0__ = render_context.fragment_renderer;
/* 000344 */ 				return __call__ (__accu0__.render_text_format, __accu0__, ['defterm-term', 'term-in-defining-defterm'], __kwargtrans__ ({nodelist: term_flm_show_term_nodelist, render_context: render_context}));
/* 000344 */ 			}) ();
/* 000344 */ 		}
/* 000350 */ 		return (function () {
/* 000350 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000350 */ 			return __call__ (__accu0__.render_link, __accu0__, 'term', __kwargtrans__ ({href: ref_instance.target_href, display_nodelist: term_flm_show_term_nodelist, render_context: render_context, annotations: []}));
/* 000350 */ 		}) ();
/* 000350 */ 	});},
/* 000358 */ 	get recompose_pure_latex () {return __get__ (this, function (self, node, recomposer) {
/* 000358 */ 		if (arguments.length) {
/* 000358 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000358 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000358 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000358 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000358 */ 					switch (__attrib0__) {
/* 000358 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000358 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000358 */ 						case 'recomposer': var recomposer = __allkwargs0__ [__attrib0__]; break;
/* 000358 */ 					}
/* 000358 */ 				}
/* 000358 */ 			}
/* 000358 */ 		}
/* 000358 */ 		else {
/* 000358 */ 		}
/* 000360 */ 		var ref_type = self.defterm_ref_type;
/* 000361 */ 		var ref_label = node.flm_term_flm_ref_label_verbatim;
/* 000363 */ 		var safe_label_info = (function () {
/* 000363 */ 			var __accu0__ = recomposer;
/* 000363 */ 			return __call__ (__accu0__.make_safe_label, __accu0__, 'ref', ref_type, ref_label, node.latex_walker.resource_info);
/* 000363 */ 		}) ();
/* 000366 */ 		var safe_label = __getitem__ (safe_label_info, 'safe_label');
/* 000368 */ 		var term_flm_show_term_nodelist = node.flm_term_flm_show_term_nodelist;
/* 000369 */ 		var show_term_recomposed = (function () {
/* 000369 */ 			var __accu0__ = recomposer;
/* 000369 */ 			return __call__ (__accu0__.subrecompose, __accu0__, term_flm_show_term_nodelist);
/* 000369 */ 		}) ();
/* 000373 */ 		var ref_term_recomposed = null;
/* 000374 */ 		if (__t__ (node.flmarg_ref_term !== null)) {
/* 000375 */ 			var ref_term_recomposed = (function () {
/* 000375 */ 				var __accu0__ = recomposer;
/* 000375 */ 				return __call__ (__accu0__.subrecompose, __accu0__, node.flmarg_ref_term);
/* 000375 */ 			}) ();
/* 000375 */ 		}
/* 000381 */ 		return __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ ('\\flmTerm{', node.macroname), '}{'), safe_label), '}'), (__t__ (ref_term_recomposed) ? __add__ (__add__ ('{', ref_term_recomposed), '}') : '{}')), '{'), show_term_recomposed), '}');
/* 000381 */ 	});}
/* 000381 */ });
/* 000392 */ export var FeatureDefTerm =  __class__ ('FeatureDefTerm', [Feature], {
/* 000392 */ 	__module__: __name__,
/* 000394 */ 	feature_name: 'defterm',
/* 000397 */ 	feature_title: 'Definition terms',
/* 000397 */ 	RenderManager: __class__ ('RenderManager', [Feature.RenderManager], {
/* 000397 */ 		__module__: __name__,
/* 000398 */ 		get initialize () {return __get__ (this, function (self) {
/* 000398 */ 			if (arguments.length) {
/* 000398 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000398 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000398 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000398 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000398 */ 						switch (__attrib0__) {
/* 000398 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000398 */ 						}
/* 000398 */ 					}
/* 000398 */ 				}
/* 000398 */ 			}
/* 000398 */ 			else {
/* 000398 */ 			}
/* 000399 */ 			self.registered_term_node_infos = dict ({});
/* 000399 */ 		});},
/* 000400 */ 		get register_term_node_info () {return __get__ (this, function (self, node) {
/* 000400 */ 			var kwargs = dict ();
/* 000400 */ 			if (arguments.length) {
/* 000400 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000400 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000400 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000400 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000400 */ 						switch (__attrib0__) {
/* 000400 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000400 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000400 */ 							default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000400 */ 						}
/* 000400 */ 					}
/* 000400 */ 					delete kwargs.__kwargtrans__;
/* 000400 */ 				}
/* 000400 */ 			}
/* 000400 */ 			else {
/* 000400 */ 			}
/* 000401 */ 			__setitem__ (self.registered_term_node_infos, (function () {
/* 000401 */ 				var __accu0__ = self;
/* 000401 */ 				return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000401 */ 			}) (), kwargs);
/* 000401 */ 		});},
/* 000402 */ 		get get_term_node_info () {return __get__ (this, function (self, node) {
/* 000402 */ 			if (arguments.length) {
/* 000402 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000402 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000402 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000402 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000402 */ 						switch (__attrib0__) {
/* 000402 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000402 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000402 */ 						}
/* 000402 */ 					}
/* 000402 */ 				}
/* 000402 */ 			}
/* 000402 */ 			else {
/* 000402 */ 			}
/* 000403 */ 			return __getitem__ (self.registered_term_node_infos, (function () {
/* 000403 */ 				var __accu0__ = self;
/* 000403 */ 				return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000403 */ 			}) ());
/* 000403 */ 		});}
/* 000403 */ 	}),
/* 000406 */ 	render_defterm_with_term: true,
/* 000407 */ 	render_defterm_with_term_suffix: ': ',
/* 000409 */ 	get __init__ () {return __get__ (this, function (self, render_defterm_with_term, render_defterm_with_term_suffix) {
/* 000409 */ 		if (typeof render_defterm_with_term == 'undefined' || (render_defterm_with_term != null && render_defterm_with_term.hasOwnProperty ("__kwargtrans__"))) {;
/* 000409 */ 			var render_defterm_with_term = null;
/* 000409 */ 		};
/* 000409 */ 		if (typeof render_defterm_with_term_suffix == 'undefined' || (render_defterm_with_term_suffix != null && render_defterm_with_term_suffix.hasOwnProperty ("__kwargtrans__"))) {;
/* 000409 */ 			var render_defterm_with_term_suffix = null;
/* 000409 */ 		};
/* 000409 */ 		if (arguments.length) {
/* 000409 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000409 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000409 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000409 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000409 */ 					switch (__attrib0__) {
/* 000409 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000409 */ 						case 'render_defterm_with_term': var render_defterm_with_term = __allkwargs0__ [__attrib0__]; break;
/* 000409 */ 						case 'render_defterm_with_term_suffix': var render_defterm_with_term_suffix = __allkwargs0__ [__attrib0__]; break;
/* 000409 */ 					}
/* 000409 */ 				}
/* 000409 */ 			}
/* 000409 */ 		}
/* 000409 */ 		else {
/* 000409 */ 		}
/* 000410 */ 		__call__ (__call__ (__super__, null, FeatureDefTerm, '__init__'), null, self);
/* 000411 */ 		if (__t__ (render_defterm_with_term !== null)) {
/* 000412 */ 			self.render_defterm_with_term = render_defterm_with_term;
/* 000412 */ 		}
/* 000413 */ 		if (__t__ (render_defterm_with_term_suffix !== null)) {
/* 000414 */ 			self.render_defterm_with_term_suffix = render_defterm_with_term_suffix;
/* 000414 */ 		}
/* 000414 */ 	});},
/* 000417 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000417 */ 		if (arguments.length) {
/* 000417 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000417 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000417 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000417 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000417 */ 					switch (__attrib0__) {
/* 000417 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000417 */ 					}
/* 000417 */ 				}
/* 000417 */ 			}
/* 000417 */ 		}
/* 000417 */ 		else {
/* 000417 */ 		}
/* 000423 */ 		return __call__ (dict, null, __kwargtrans__ ({macros: [__call__ (RefTermMacro, null, 'term')], environments: [__call__ (DefineTermEnvironment, null, 'defterm', __kwargtrans__ ({render_with_term: self.render_defterm_with_term, render_with_term_suffix: self.render_defterm_with_term_suffix}))]}));
/* 000423 */ 	});}
/* 000423 */ });
/* 000433 */ export var FeatureClass = FeatureDefTerm;
/* 000006 */ 
//# sourceMappingURL=flm.feature.defterm.map