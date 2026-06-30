/* 000001 */ // Transcrypt'ed from Python, 2026-06-30 21:51:25
/* 000013 */ var logging = {};
/* 000013 */ var re = {};
/* 000013 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000033 */ import * as refs from './flm.feature.refs.js';
/* 000032 */ import {Feature, FeatureRenderManagerBase} from './flm.feature._base.js';
/* 000027 */ import {FLMArgumentSpec, FLMParsingStateDeltaSetBlockLevel} from './flm.flmenvironment.js';
/* 000024 */ import {FLMEnvironmentSpecBase, FLMMacroSpecBase, TextFormatMacro} from './flm.flmspecinfo.js';
/* 000022 */ import * as flmspecinfo from './flm.flmspecinfo.js';
/* 000020 */ import * as latexnodes_nodes from './pylatexenc.latexnodes.nodes.js';
/* 000017 */ import {LatexWalkerLocatedError, ParsedArguments, ParsedArgumentsInfo} from './pylatexenc.latexnodes.js';
/* 000014 */ import * as __module_logging__ from './logging.js';
/* 000014 */ __nest__ (logging, '', __module_logging__);
/* 000013 */ import * as __module_re__ from './re.js';
/* 000013 */ __nest__ (re, '', __module_re__);
/* 000013 */ export {TextFormatMacro, FLMMacroSpecBase, latexnodes_nodes, ParsedArgumentsInfo, FLMParsingStateDeltaSetBlockLevel, FeatureRenderManagerBase, Feature, refs, FLMEnvironmentSpecBase, ParsedArguments, flmspecinfo, FLMArgumentSpec, LatexWalkerLocatedError};
/* 000001 */ var __name__ = 'flm.feature.defterm';
/* 000015 */ export var logger = (function () {
/* 000015 */ 	var __accu0__ = logging;
/* 000015 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000015 */ }) ();
/* 000037 */ export var simplify_trim_whitespace = function (x) {
/* 000037 */ 	if (arguments.length) {
/* 000037 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000037 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000037 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000037 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000037 */ 				switch (__attrib0__) {
/* 000037 */ 					case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000037 */ 				}
/* 000037 */ 			}
/* 000037 */ 		}
/* 000037 */ 	}
/* 000037 */ 	else {
/* 000037 */ 	}
/* 000045 */ 	return (function () {
/* 000045 */ 		var __accu0__ = re;
/* 000045 */ 		return __call__ (__accu0__.sub, __accu0__, '\\s+', ' ', (function () {
/* 000045 */ 			var __accu1__ = x;
/* 000045 */ 			return __call__ (__accu1__.strip, __accu1__);
/* 000045 */ 		}) ());
/* 000045 */ 	}) ();
/* 000045 */ };
/* 000047 */ export var get_term_ref_label_verbatim = function (node_term_arg_nodelist) {
/* 000047 */ 	if (arguments.length) {
/* 000047 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000047 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000047 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000047 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000047 */ 				switch (__attrib0__) {
/* 000047 */ 					case 'node_term_arg_nodelist': var node_term_arg_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000047 */ 				}
/* 000047 */ 			}
/* 000047 */ 		}
/* 000047 */ 	}
/* 000047 */ 	else {
/* 000047 */ 	}
/* 000060 */ 	return __call__ (simplify_trim_whitespace, null, (function () {
/* 000060 */ 		var __accu0__ = node_term_arg_nodelist;
/* 000060 */ 		return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000060 */ 	}) ());
/* 000060 */ };
/* 000066 */ export var DefineTermEnvironment =  __class__ ('DefineTermEnvironment', [FLMEnvironmentSpecBase], {
/* 000066 */ 	__module__: __name__,
/* 000068 */ 	is_block_level: true,
/* 000070 */ 	allowed_in_standalone_mode: false,
/* 000072 */ 	allowed_ref_label_prefixes: tuple (['topic']),
/* 000074 */ 	defterm_ref_type: 'defterm',
/* 000076 */ 	get __init__ () {return __get__ (this, function (self, environmentname, render_with_term, render_with_term_suffix) {
/* 000076 */ 		if (typeof render_with_term == 'undefined' || (render_with_term != null && render_with_term.hasOwnProperty ("__kwargtrans__"))) {;
/* 000076 */ 			var render_with_term = true;
/* 000076 */ 		};
/* 000076 */ 		if (typeof render_with_term_suffix == 'undefined' || (render_with_term_suffix != null && render_with_term_suffix.hasOwnProperty ("__kwargtrans__"))) {;
/* 000076 */ 			var render_with_term_suffix = ': ';
/* 000076 */ 		};
/* 000076 */ 		var kwargs = dict ();
/* 000076 */ 		if (arguments.length) {
/* 000076 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000076 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000076 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000076 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000076 */ 					switch (__attrib0__) {
/* 000076 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000076 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000076 */ 						case 'render_with_term': var render_with_term = __allkwargs0__ [__attrib0__]; break;
/* 000076 */ 						case 'render_with_term_suffix': var render_with_term_suffix = __allkwargs0__ [__attrib0__]; break;
/* 000076 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000076 */ 					}
/* 000076 */ 				}
/* 000076 */ 				delete kwargs.__kwargtrans__;
/* 000076 */ 			}
/* 000076 */ 		}
/* 000076 */ 		else {
/* 000076 */ 		}
/* 000096 */ 		__call__ (__call__ (__super__, null, DefineTermEnvironment, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({environmentname: environmentname, arguments_spec_list: [__call__ (FLMArgumentSpec, null, '{', __kwargtrans__ ({argname: 'term'})), flmspecinfo.label_arg], body_parsing_state_delta: __call__ (FLMParsingStateDeltaSetBlockLevel, null, __kwargtrans__ ({is_block_level: self.is_block_level}))}, kwargs)));
/* 000099 */ 		self.render_with_term = render_with_term;
/* 000100 */ 		self.render_with_term_suffix = render_with_term_suffix;
/* 000101 */ 		if (__t__ (self.render_with_term)) {
/* 000102 */ 			var mspec = __call__ (TextFormatMacro, null, '', __kwargtrans__ ({text_formats: ['defterm-term']}));
/* 000103 */ 			mspec.is_block_heading = true;
/* 000104 */ 			self.render_term_text_format_spec = mspec;
/* 000104 */ 		}
/* 000104 */ 	});},
/* 000106 */ 	_fields: tuple (['environmentname', 'render_with_term', 'render_with_term_suffix']),
/* 000110 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000110 */ 		if (arguments.length) {
/* 000110 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000110 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000110 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000110 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000110 */ 					switch (__attrib0__) {
/* 000110 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000110 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000110 */ 					}
/* 000110 */ 				}
/* 000110 */ 			}
/* 000110 */ 		}
/* 000110 */ 		else {
/* 000110 */ 		}
/* 000112 */ 		var node_args = (function () {
/* 000112 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000112 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['term', 'label']));
/* 000112 */ 		}) ();
/* 000116 */ 		node.flmarg_term = (function () {
/* 000116 */ 			var __accu0__ = __getitem__ (node_args, 'term');
/* 000116 */ 			return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000116 */ 		}) ();
/* 000118 */ 		var term_flm_ref_label_verbatim = __call__ (get_term_ref_label_verbatim, null, node.flmarg_term);
/* 000119 */ 		node.flmarg_term_flm_ref_label_verbatim = term_flm_ref_label_verbatim;
/* 000123 */ 		node.flmarg_labels = (function () {
/* 000123 */ 			var __accu0__ = flmspecinfo;
/* 000123 */ 			return __call__ (__accu0__.helper_collect_labels, __accu0__, __getitem__ (node_args, 'label'), self.allowed_ref_label_prefixes);
/* 000123 */ 		}) ();
/* 000129 */ 		node.flm_referenceable_infos = [(function () {
/* 000129 */ 			var __accu0__ = refs;
/* 000134 */ 			return __call__ (__accu0__.ReferenceableInfo, __accu0__, __kwargtrans__ ({kind: 'defterm', formatted_ref_flm_text: node.flmarg_term_flm_ref_label_verbatim, labels: __add__ ([tuple ([self.defterm_ref_type, node.flmarg_term_flm_ref_label_verbatim])], __call__ (list, null, node.flmarg_labels))}));
/* 000134 */ 		}) ()];
/* 000139 */ 		return node;
/* 000139 */ 	});},
/* 000141 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000141 */ 		if (arguments.length) {
/* 000141 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000141 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000141 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000141 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000141 */ 					switch (__attrib0__) {
/* 000141 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000141 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000141 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000141 */ 					}
/* 000141 */ 				}
/* 000141 */ 			}
/* 000141 */ 		}
/* 000141 */ 		else {
/* 000141 */ 		}
/* 000143 */ 		var formatted_ref_flm_text = node.flmarg_term_flm_ref_label_verbatim;
/* 000145 */ 		var logical_state = (function () {
/* 000145 */ 			var __accu0__ = render_context;
/* 000145 */ 			return __call__ (__accu0__.get_logical_state, __accu0__, 'feature.defterm');
/* 000145 */ 		}) ();
/* 000146 */ 		if (__t__ (!__in__ ('currently_defining_terms', logical_state))) {
/* 000147 */ 			__setitem__ (logical_state, 'currently_defining_terms', []);
/* 000147 */ 		}
/* 000149 */ 		var cur_def_terms = __call__ (list, null, __getitem__ (logical_state, 'currently_defining_terms'));
/* 000150 */ 		(function () {
/* 000150 */ 			var __accu0__ = cur_def_terms;
/* 000150 */ 			return __call__ (__accu0__.append, __accu0__, formatted_ref_flm_text);
/* 000150 */ 		}) ();
/* 000152 */ 		var __withid0__ = (function () {
/* 000152 */ 			var __accu0__ = render_context;
/* 000152 */ 			return __call__ (__accu0__.push_logical_state, __accu0__, 'feature.defterm', 'currently_defining_terms', cur_def_terms);
/* 000152 */ 		}) ();
/* 000152 */ 		try {
/* 000152 */ 			__withid0__.__enter__ ();
/* 000155 */ 			// pass;
/* 000160 */ 			if (__t__ ((function () {
/* 000160 */ 				var __accu0__ = render_context;
/* 000160 */ 				return __call__ (__accu0__.supports_feature, __accu0__, 'refs');
/* 000160 */ 			}) ())) {
/* 000161 */ 				var refs_mgr = (function () {
/* 000161 */ 					var __accu0__ = render_context;
/* 000161 */ 					return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000161 */ 				}) ();
/* 000162 */ 				var __iterable0__ = node.flm_referenceable_infos;
/* 000162 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000162 */ 					var referenceable_info = __getitem__ (__iterable0__, __index0__);
/* 000163 */ 					(function () {
/* 000163 */ 						var __accu0__ = refs_mgr;
/* 000163 */ 						return __call__ (__accu0__.register_reference_referenceable, __accu0__, __kwargtrans__ ({node: node, referenceable_info: referenceable_info}));
/* 000163 */ 					}) ();
/* 000163 */ 				}
/* 000163 */ 			}
/* 000169 */ 			var thenodelist = node.nodelist;
/* 000171 */ 			if (__t__ (self.render_with_term)) {
/* 000172 */ 				var environ = render_context.doc.environment;
/* 000173 */ 				var term_fragment = (function () {
/* 000173 */ 					var __accu0__ = environ;
/* 000173 */ 					return __call__ (__accu0__.make_fragment, __accu0__, __add__ (formatted_ref_flm_text, self.render_with_term_suffix), __kwargtrans__ ({standalone_mode: true}));
/* 000173 */ 				}) ();
/* 000177 */ 				var intro_node = (function () {
/* 000177 */ 					var __accu0__ = term_fragment.latex_walker;
/* 000183 */ 					return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexMacroNode, __kwargtrans__ ({macroname: '', spec: self.render_term_text_format_spec, macro_post_space: '', parsing_state: term_fragment.nodes.parsing_state, nodeargd: __call__ (ParsedArguments, null, __kwargtrans__ ({arguments_spec_list: self.render_term_text_format_spec.arguments_spec_list, argnlist: [term_fragment.nodes]})), pos: node.pos, pos_end: node.pos_end}));
/* 000183 */ 				}) ();
/* 000193 */ 				(function () {
/* 000193 */ 					var __accu0__ = self.render_term_text_format_spec;
/* 000193 */ 					return __call__ (__accu0__.finalize_node, __accu0__, intro_node);
/* 000193 */ 				}) ();
/* 000195 */ 				var thenodelist = (function () {
/* 000195 */ 					var __accu0__ = term_fragment.latex_walker;
/* 000196 */ 					return __call__ (__accu0__.make_nodelist, __accu0__, __add__ ([intro_node], __call__ (list, null, thenodelist)), __kwargtrans__ ({parsing_state: node.nodelist.parsing_state}));
/* 000196 */ 				}) ();
/* 000196 */ 			}
/* 000202 */ 			var result = (function () {
/* 000202 */ 				var __accu0__ = render_context.fragment_renderer;
/* 000203 */ 				return __call__ (__accu0__.render_semantic_block, __accu0__, __kwargtrans__ ({content: (function () {
/* 000203 */ 					var __accu1__ = render_context.fragment_renderer;
/* 000203 */ 					return __call__ (__accu1__.render_nodelist, __accu1__, thenodelist, __kwargtrans__ ({render_context: render_context, is_block_level: true}));
/* 000210 */ 				}) (), role: 'defterm', render_context: render_context, target_id: (function () {
/* 000210 */ 					var __accu1__ = __getitem__ (node.flm_referenceable_infos, 0);
/* 000210 */ 					return __call__ (__accu1__.get_target_id, __accu1__);
/* 000210 */ 				}) (), annotations: ['p-block']}));
/* 000210 */ 			}) ();
/* 000214 */ 			// pass;
/* 000214 */ 			__withid0__.__exit__ ();
/* 000214 */ 		}
/* 000214 */ 		catch (__except0__) {
/* 000214 */ 			if (! (__withid0__.__exit__ (__except0__.name, __except0__, __except0__.stack))) {
/* 000214 */ 				throw __except0__;
/* 000214 */ 			}
/* 000214 */ 		}
/* 000218 */ 		return result;
/* 000218 */ 	});},
/* 000221 */ 	get recompose_pure_latex () {return __get__ (this, function (self, node, recomposer) {
/* 000221 */ 		if (arguments.length) {
/* 000221 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000221 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000221 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000221 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000221 */ 					switch (__attrib0__) {
/* 000221 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000221 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000221 */ 						case 'recomposer': var recomposer = __allkwargs0__ [__attrib0__]; break;
/* 000221 */ 					}
/* 000221 */ 				}
/* 000221 */ 			}
/* 000221 */ 		}
/* 000221 */ 		else {
/* 000221 */ 		}
/* 000227 */ 		if (__t__ (node.flm_referenceable_infos === null)) {
/* 000230 */ 			var __except0__ = __call__ (LatexWalkerLocatedError, null, __add__ ('Recomposing pure LaTeX: Invalid referenceable info in defterm node ', __call__ (repr, null, node)), __kwargtrans__ ({pos: node.pos}));
/* 000230 */ 			__except0__.__cause__ = null;
/* 000230 */ 			throw __except0__;
/* 000230 */ 		}
/* 000236 */ 		var term_recomposed = (function () {
/* 000236 */ 			var __accu0__ = recomposer;
/* 000236 */ 			return __call__ (__accu0__.subrecompose, __accu0__, node.flmarg_term);
/* 000236 */ 		}) ();
/* 000238 */ 		var s = __add__ (__add__ ('\\begin{', __call__ (str, null, node.environmentname)), '}');
/* 000239 */ 		var s = __call__ (__iadd__, null, s, __add__ (__add__ ('{', term_recomposed), '}'));
/* 000243 */ 		var __iterable0__ = node.flm_referenceable_infos;
/* 000243 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000243 */ 			var referenceable_info = __getitem__ (__iterable0__, __index0__);
/* 000244 */ 			var __iterable1__ = referenceable_info.labels;
/* 000244 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000244 */ 				var __left0__ = __getitem__ (__iterable1__, __index1__);
/* 000244 */ 				var ref_type = __left0__ [0];
/* 000244 */ 				var ref_label = __left0__ [1];
/* 000245 */ 				var safe_label_info = (function () {
/* 000245 */ 					var __accu0__ = recomposer;
/* 000245 */ 					return __call__ (__accu0__.make_safe_label, __accu0__, 'ref', ref_type, ref_label, node.latex_walker.resource_info);
/* 000245 */ 				}) ();
/* 000248 */ 				var safe_label = __getitem__ (safe_label_info, 'safe_label');
/* 000249 */ 				var s = __call__ (__iadd__, null, s, __add__ (__add__ ('\\label{', __call__ (str, null, safe_label)), '}'));
/* 000249 */ 			}
/* 000249 */ 		}
/* 000251 */ 		var s = __call__ (__iadd__, null, s, (function () {
/* 000251 */ 			var __accu0__ = recomposer;
/* 000251 */ 			return __call__ (__accu0__.recompose_nodelist, __accu0__, node.nodelist, node);
/* 000251 */ 		}) ());
/* 000252 */ 		var s = __call__ (__iadd__, null, s, __add__ (__add__ ('\\end{', __call__ (str, null, node.environmentname)), '}'));
/* 000254 */ 		return s;
/* 000254 */ 	});}
/* 000254 */ });
/* 000261 */ export var RefTermMacro =  __class__ ('RefTermMacro', [FLMMacroSpecBase], {
/* 000261 */ 	__module__: __name__,
/* 000271 */ 	allowed_in_standalone_mode: false,
/* 000272 */ 	delayed_render: true,
/* 000274 */ 	defterm_ref_type: 'defterm',
/* 000276 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000276 */ 		var kwargs = dict ();
/* 000276 */ 		if (arguments.length) {
/* 000276 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000276 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000276 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000276 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000276 */ 					switch (__attrib0__) {
/* 000276 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000276 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000276 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000276 */ 					}
/* 000276 */ 				}
/* 000276 */ 				delete kwargs.__kwargtrans__;
/* 000276 */ 			}
/* 000276 */ 		}
/* 000276 */ 		else {
/* 000276 */ 		}
/* 000283 */ 		__call__ (__call__ (__super__, null, RefTermMacro, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({macroname: macroname, arguments_spec_list: [__call__ (FLMArgumentSpec, null, '[', __kwargtrans__ ({argname: 'ref_term', flm_doc: 'The term that is being referenced.  May be omitted if it coincides with \\verba{term}'})), __call__ (FLMArgumentSpec, null, '{', __kwargtrans__ ({argname: 'term', flm_doc: 'The term the exact way it should be typeset at this point'}))]}, kwargs)));
/* 000283 */ 	});},
/* 000290 */ 	_fields: tuple (['macroname']),
/* 000292 */ 	get get_flm_doc () {return __get__ (this, function (self) {
/* 000292 */ 		if (arguments.length) {
/* 000292 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000292 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000292 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000292 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000292 */ 					switch (__attrib0__) {
/* 000292 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000292 */ 					}
/* 000292 */ 				}
/* 000292 */ 			}
/* 000292 */ 		}
/* 000292 */ 		else {
/* 000292 */ 		}
/* 000293 */ 		return ' Reference a term defined somewhere else in a\n        \\verbcode+\\begin{defterm}…\\end{defterm}+ environment.  This will\n        typically produce a link in HTML output for instance to the location\n        where this term is defined.  In case you need to typeset the term\n        differently than when you defined it (e.g., because of a plural,\n        capital/lower case, other declination), use the optional argument to\n        give the term exactly as defined and specify the term as it should\n        appear in the main argument.  E.g.\n        \\verbcode+These are \\term[Markov chain]{Markov chains}+';
/* 000293 */ 	});},
/* 000303 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000303 */ 		if (arguments.length) {
/* 000303 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000303 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000303 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000303 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000303 */ 					switch (__attrib0__) {
/* 000303 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000303 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000303 */ 					}
/* 000303 */ 				}
/* 000303 */ 			}
/* 000303 */ 		}
/* 000303 */ 		else {
/* 000303 */ 		}
/* 000305 */ 		var node_args = (function () {
/* 000305 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000305 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['ref_term', 'term']));
/* 000305 */ 		}) ();
/* 000309 */ 		var term_nodelist = (function () {
/* 000309 */ 			var __accu0__ = __getitem__ (node_args, 'term');
/* 000309 */ 			return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000309 */ 		}) ();
/* 000311 */ 		if (__t__ ((function () {
/* 000311 */ 			var __accu0__ = __getitem__ (node_args, 'ref_term');
/* 000311 */ 			return __call__ (__accu0__.was_provided, __accu0__);
/* 000311 */ 		}) ())) {
/* 000312 */ 			node.flmarg_ref_term = (function () {
/* 000312 */ 				var __accu0__ = __getitem__ (node_args, 'ref_term');
/* 000312 */ 				return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000312 */ 			}) ();
/* 000313 */ 			node.flm_term_flm_show_term_nodelist = term_nodelist;
/* 000315 */ 			node.flm_term_flm_ref_label_verbatim = __call__ (get_term_ref_label_verbatim, null, node.flmarg_ref_term);
/* 000315 */ 		}
/* 000316 */ 		else {
/* 000317 */ 			node.flmarg_ref_term = null;
/* 000318 */ 			node.flm_term_flm_show_term_nodelist = term_nodelist;
/* 000320 */ 			node.flm_term_flm_ref_label_verbatim = __call__ (get_term_ref_label_verbatim, null, term_nodelist);
/* 000320 */ 		}
/* 000322 */ 		node.flmarg_ref = tuple ([self.defterm_ref_type, node.flm_term_flm_ref_label_verbatim]);
/* 000323 */ 		node.flm_ref_info = dict ({'ref_list': [node.flmarg_ref], 'display_content_nodelist': node.flm_term_flm_show_term_nodelist});
/* 000323 */ 	});},
/* 000329 */ 	get prepare_delayed_render () {return __get__ (this, function (self, node, render_context) {
/* 000329 */ 		if (arguments.length) {
/* 000329 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000329 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000329 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000329 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000329 */ 					switch (__attrib0__) {
/* 000329 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000329 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000329 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000329 */ 					}
/* 000329 */ 				}
/* 000329 */ 			}
/* 000329 */ 		}
/* 000329 */ 		else {
/* 000329 */ 		}
/* 000331 */ 		// pass;
/* 000337 */ 		var is_currently_defining_term = false;
/* 000338 */ 		var logical_state = (function () {
/* 000338 */ 			var __accu0__ = render_context;
/* 000338 */ 			return __call__ (__accu0__.get_logical_state, __accu0__, 'feature.defterm');
/* 000338 */ 		}) ();
/* 000339 */ 		if (__t__ (__in__ ('currently_defining_terms', logical_state))) {
/* 000340 */ 			if (__t__ (__in__ (node.flm_term_flm_ref_label_verbatim, __getitem__ (logical_state, 'currently_defining_terms')))) {
/* 000342 */ 				var is_currently_defining_term = true;
/* 000342 */ 			}
/* 000342 */ 		}
/* 000344 */ 		// pass;
/* 000350 */ 		var mgr = (function () {
/* 000350 */ 			var __accu0__ = render_context;
/* 000350 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'defterm');
/* 000350 */ 		}) ();
/* 000351 */ 		(function () {
/* 000351 */ 			var __accu0__ = mgr;
/* 000351 */ 			return __call__ (__accu0__.register_term_node_info, __accu0__, node, __kwargtrans__ ({is_currently_defining_term: is_currently_defining_term}));
/* 000351 */ 		}) ();
/* 000351 */ 	});},
/* 000357 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000357 */ 		if (arguments.length) {
/* 000357 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000357 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000357 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000357 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000357 */ 					switch (__attrib0__) {
/* 000357 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000357 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000357 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000357 */ 					}
/* 000357 */ 				}
/* 000357 */ 			}
/* 000357 */ 		}
/* 000357 */ 		else {
/* 000357 */ 		}
/* 000359 */ 		var term_flm_show_term_nodelist = node.flm_term_flm_show_term_nodelist;
/* 000360 */ 		var term_flm_ref_label_verbatim = node.flm_term_flm_ref_label_verbatim;
/* 000362 */ 		if (__t__ (!__t__ (((function () {
/* 000362 */ 			var __accu0__ = render_context;
/* 000362 */ 			return __call__ (__accu0__.supports_feature, __accu0__, 'refs');
/* 000362 */ 		}) ())))) {
/* 000364 */ 			return (function () {
/* 000364 */ 				var __accu0__ = render_context.fragment_renderer;
/* 000364 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, term_flm_show_term_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000364 */ 			}) ();
/* 000364 */ 		}
/* 000370 */ 		var resource_info = node.latex_walker.resource_info;
/* 000373 */ 		var refs_mgr = (function () {
/* 000373 */ 			var __accu0__ = render_context;
/* 000373 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000373 */ 		}) ();
/* 000374 */ 		var ref_instance = (function () {
/* 000374 */ 			var __accu0__ = refs_mgr;
/* 000374 */ 			return __call__ (__accu0__.get_ref, __accu0__, self.defterm_ref_type, term_flm_ref_label_verbatim, resource_info);
/* 000374 */ 		}) ();
/* 000380 */ 		var mgr = (function () {
/* 000380 */ 			var __accu0__ = render_context;
/* 000380 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'defterm');
/* 000380 */ 		}) ();
/* 000381 */ 		var term_info = (function () {
/* 000381 */ 			var __accu0__ = mgr;
/* 000381 */ 			return __call__ (__accu0__.get_term_node_info, __accu0__, node);
/* 000381 */ 		}) ();
/* 000383 */ 		var is_currently_defining_term = __getitem__ (term_info, 'is_currently_defining_term');
/* 000385 */ 		if (__t__ (is_currently_defining_term)) {
/* 000387 */ 			return (function () {
/* 000387 */ 				var __accu0__ = render_context.fragment_renderer;
/* 000387 */ 				return __call__ (__accu0__.render_text_format, __accu0__, ['defterm-term', 'term-in-defining-defterm'], __kwargtrans__ ({nodelist: term_flm_show_term_nodelist, render_context: render_context}));
/* 000387 */ 			}) ();
/* 000387 */ 		}
/* 000393 */ 		return (function () {
/* 000393 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000393 */ 			return __call__ (__accu0__.render_link, __accu0__, 'term', __kwargtrans__ ({href: ref_instance.target_href, display_nodelist: term_flm_show_term_nodelist, render_context: render_context, annotations: []}));
/* 000393 */ 		}) ();
/* 000393 */ 	});},
/* 000401 */ 	get recompose_pure_latex () {return __get__ (this, function (self, node, recomposer) {
/* 000401 */ 		if (arguments.length) {
/* 000401 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000401 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000401 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000401 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000401 */ 					switch (__attrib0__) {
/* 000401 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000401 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000401 */ 						case 'recomposer': var recomposer = __allkwargs0__ [__attrib0__]; break;
/* 000401 */ 					}
/* 000401 */ 				}
/* 000401 */ 			}
/* 000401 */ 		}
/* 000401 */ 		else {
/* 000401 */ 		}
/* 000403 */ 		var ref_type = self.defterm_ref_type;
/* 000404 */ 		var ref_label = node.flm_term_flm_ref_label_verbatim;
/* 000406 */ 		var safe_label_info = (function () {
/* 000406 */ 			var __accu0__ = recomposer;
/* 000406 */ 			return __call__ (__accu0__.make_safe_label, __accu0__, 'ref', ref_type, ref_label, node.latex_walker.resource_info);
/* 000406 */ 		}) ();
/* 000409 */ 		var safe_label = __getitem__ (safe_label_info, 'safe_label');
/* 000411 */ 		var term_flm_show_term_nodelist = node.flm_term_flm_show_term_nodelist;
/* 000412 */ 		var show_term_recomposed = (function () {
/* 000412 */ 			var __accu0__ = recomposer;
/* 000412 */ 			return __call__ (__accu0__.subrecompose, __accu0__, term_flm_show_term_nodelist);
/* 000412 */ 		}) ();
/* 000416 */ 		var ref_term_recomposed = null;
/* 000417 */ 		if (__t__ (node.flmarg_ref_term !== null)) {
/* 000418 */ 			var ref_term_recomposed = (function () {
/* 000418 */ 				var __accu0__ = recomposer;
/* 000418 */ 				return __call__ (__accu0__.subrecompose, __accu0__, node.flmarg_ref_term);
/* 000418 */ 			}) ();
/* 000418 */ 		}
/* 000424 */ 		return __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__add__ ('\\flmTerm{', node.macroname), '}{'), safe_label), '}'), (__t__ (ref_term_recomposed) ? __add__ (__add__ ('{', ref_term_recomposed), '}') : '{}')), '{'), show_term_recomposed), '}');
/* 000424 */ 	});}
/* 000424 */ });
/* 000435 */ export var FeatureDefTerm =  __class__ ('FeatureDefTerm', [Feature], {
/* 000435 */ 	__module__: __name__,
/* 000444 */ 	feature_name: 'defterm',
/* 000447 */ 	feature_title: 'Definition terms',
/* 000447 */ 	RenderManager: __class__ ('RenderManager', [FeatureRenderManagerBase], {
/* 000447 */ 		__module__: __name__,
/* 000448 */ 		get initialize () {return __get__ (this, function (self) {
/* 000448 */ 			if (arguments.length) {
/* 000448 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000448 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000448 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000448 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000448 */ 						switch (__attrib0__) {
/* 000448 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000448 */ 						}
/* 000448 */ 					}
/* 000448 */ 				}
/* 000448 */ 			}
/* 000448 */ 			else {
/* 000448 */ 			}
/* 000449 */ 			self.registered_term_node_infos = dict ({});
/* 000449 */ 		});},
/* 000450 */ 		get register_term_node_info () {return __get__ (this, function (self, node) {
/* 000450 */ 			var kwargs = dict ();
/* 000450 */ 			if (arguments.length) {
/* 000450 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000450 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000450 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000450 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000450 */ 						switch (__attrib0__) {
/* 000450 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000450 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000450 */ 							default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000450 */ 						}
/* 000450 */ 					}
/* 000450 */ 					delete kwargs.__kwargtrans__;
/* 000450 */ 				}
/* 000450 */ 			}
/* 000450 */ 			else {
/* 000450 */ 			}
/* 000451 */ 			__setitem__ (self.registered_term_node_infos, (function () {
/* 000451 */ 				var __accu0__ = self;
/* 000451 */ 				return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000451 */ 			}) (), kwargs);
/* 000451 */ 		});},
/* 000452 */ 		get get_term_node_info () {return __get__ (this, function (self, node) {
/* 000452 */ 			if (arguments.length) {
/* 000452 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000452 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000452 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000452 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000452 */ 						switch (__attrib0__) {
/* 000452 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000452 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000452 */ 						}
/* 000452 */ 					}
/* 000452 */ 				}
/* 000452 */ 			}
/* 000452 */ 			else {
/* 000452 */ 			}
/* 000453 */ 			return __getitem__ (self.registered_term_node_infos, (function () {
/* 000453 */ 				var __accu0__ = self;
/* 000453 */ 				return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000453 */ 			}) ());
/* 000453 */ 		});}
/* 000453 */ 	}),
/* 000456 */ 	render_defterm_with_term: true,
/* 000457 */ 	render_defterm_with_term_suffix: ': ',
/* 000459 */ 	get __init__ () {return __get__ (this, function (self, render_defterm_with_term, render_defterm_with_term_suffix) {
/* 000459 */ 		if (typeof render_defterm_with_term == 'undefined' || (render_defterm_with_term != null && render_defterm_with_term.hasOwnProperty ("__kwargtrans__"))) {;
/* 000459 */ 			var render_defterm_with_term = null;
/* 000459 */ 		};
/* 000459 */ 		if (typeof render_defterm_with_term_suffix == 'undefined' || (render_defterm_with_term_suffix != null && render_defterm_with_term_suffix.hasOwnProperty ("__kwargtrans__"))) {;
/* 000459 */ 			var render_defterm_with_term_suffix = null;
/* 000459 */ 		};
/* 000459 */ 		if (arguments.length) {
/* 000459 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000459 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000459 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000459 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000459 */ 					switch (__attrib0__) {
/* 000459 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000459 */ 						case 'render_defterm_with_term': var render_defterm_with_term = __allkwargs0__ [__attrib0__]; break;
/* 000459 */ 						case 'render_defterm_with_term_suffix': var render_defterm_with_term_suffix = __allkwargs0__ [__attrib0__]; break;
/* 000459 */ 					}
/* 000459 */ 				}
/* 000459 */ 			}
/* 000459 */ 		}
/* 000459 */ 		else {
/* 000459 */ 		}
/* 000461 */ 		__call__ (__call__ (__super__, null, FeatureDefTerm, '__init__'), null, self);
/* 000462 */ 		if (__t__ (render_defterm_with_term !== null)) {
/* 000463 */ 			self.render_defterm_with_term = render_defterm_with_term;
/* 000463 */ 		}
/* 000464 */ 		if (__t__ (render_defterm_with_term_suffix !== null)) {
/* 000465 */ 			self.render_defterm_with_term_suffix = render_defterm_with_term_suffix;
/* 000465 */ 		}
/* 000465 */ 	});},
/* 000468 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000468 */ 		if (arguments.length) {
/* 000468 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000468 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000468 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000468 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000468 */ 					switch (__attrib0__) {
/* 000468 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000468 */ 					}
/* 000468 */ 				}
/* 000468 */ 			}
/* 000468 */ 		}
/* 000468 */ 		else {
/* 000468 */ 		}
/* 000474 */ 		return __call__ (dict, null, __kwargtrans__ ({macros: [__call__ (RefTermMacro, null, 'term')], environments: [__call__ (DefineTermEnvironment, null, 'defterm', __kwargtrans__ ({render_with_term: self.render_defterm_with_term, render_with_term_suffix: self.render_defterm_with_term_suffix}))]}));
/* 000474 */ 	});}
/* 000474 */ });
/* 000484 */ export var FeatureClass = FeatureDefTerm;
/* 000013 */ 
//# sourceMappingURL=flm.feature.defterm.map