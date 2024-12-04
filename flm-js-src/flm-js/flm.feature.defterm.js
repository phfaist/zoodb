/* 000001 */ // Transcrypt'ed from Python, 2024-12-04 22:08:15
/* 000006 */ var logging = {};
/* 000006 */ var re = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
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
/* 000006 */ export {flmspecinfo, refs, ParsedArguments, Feature, FLMEnvironmentSpecBase, FLMArgumentSpec, FLMParsingStateDeltaSetBlockLevel, FLMMacroSpecBase, ParsedArgumentsInfo, TextFormatMacro, latexnodes_nodes};
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
/* 000082 */ 		var term_flm_ref_label_verbatim = __call__ (get_term_ref_label_verbatim, null, (function () {
/* 000082 */ 			var __accu0__ = __getitem__ (node_args, 'term');
/* 000082 */ 			return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000082 */ 		}) ());
/* 000083 */ 		node.flmarg_term_flm_ref_label_verbatim = term_flm_ref_label_verbatim;
/* 000087 */ 		node.flmarg_labels = (function () {
/* 000087 */ 			var __accu0__ = flmspecinfo;
/* 000087 */ 			return __call__ (__accu0__.helper_collect_labels, __accu0__, __getitem__ (node_args, 'label'), self.allowed_ref_label_prefixes);
/* 000087 */ 		}) ();
/* 000093 */ 		node.flm_referenceable_infos = [(function () {
/* 000093 */ 			var __accu0__ = refs;
/* 000098 */ 			return __call__ (__accu0__.ReferenceableInfo, __accu0__, __kwargtrans__ ({kind: 'defterm', formatted_ref_flm_text: node.flmarg_term_flm_ref_label_verbatim, labels: __add__ ([tuple ([self.defterm_ref_type, node.flmarg_term_flm_ref_label_verbatim])], __call__ (list, null, node.flmarg_labels))}));
/* 000098 */ 		}) ()];
/* 000103 */ 		return node;
/* 000103 */ 	});},
/* 000105 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000105 */ 		if (arguments.length) {
/* 000105 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000105 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000105 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000105 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000105 */ 					switch (__attrib0__) {
/* 000105 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000105 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000105 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000105 */ 					}
/* 000105 */ 				}
/* 000105 */ 			}
/* 000105 */ 		}
/* 000105 */ 		else {
/* 000105 */ 		}
/* 000107 */ 		var formatted_ref_flm_text = node.flmarg_term_flm_ref_label_verbatim;
/* 000109 */ 		var logical_state = (function () {
/* 000109 */ 			var __accu0__ = render_context;
/* 000109 */ 			return __call__ (__accu0__.get_logical_state, __accu0__, 'feature.defterm');
/* 000109 */ 		}) ();
/* 000110 */ 		if (__t__ (!__in__ ('currently_defining_terms', logical_state))) {
/* 000111 */ 			__setitem__ (logical_state, 'currently_defining_terms', []);
/* 000111 */ 		}
/* 000113 */ 		var cur_def_terms = __call__ (list, null, __getitem__ (logical_state, 'currently_defining_terms'));
/* 000114 */ 		(function () {
/* 000114 */ 			var __accu0__ = cur_def_terms;
/* 000114 */ 			return __call__ (__accu0__.append, __accu0__, formatted_ref_flm_text);
/* 000114 */ 		}) ();
/* 000116 */ 		var __withid0__ = (function () {
/* 000116 */ 			var __accu0__ = render_context;
/* 000116 */ 			return __call__ (__accu0__.push_logical_state, __accu0__, 'feature.defterm', 'currently_defining_terms', cur_def_terms);
/* 000116 */ 		}) ();
/* 000116 */ 		try {
/* 000116 */ 			__withid0__.__enter__ ();
/* 000119 */ 			// pass;
/* 000124 */ 			if (__t__ ((function () {
/* 000124 */ 				var __accu0__ = render_context;
/* 000124 */ 				return __call__ (__accu0__.supports_feature, __accu0__, 'refs');
/* 000124 */ 			}) ())) {
/* 000125 */ 				var refs_mgr = (function () {
/* 000125 */ 					var __accu0__ = render_context;
/* 000125 */ 					return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000125 */ 				}) ();
/* 000126 */ 				var __iterable0__ = node.flm_referenceable_infos;
/* 000126 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000126 */ 					var referenceable_info = __getitem__ (__iterable0__, __index0__);
/* 000127 */ 					(function () {
/* 000127 */ 						var __accu0__ = refs_mgr;
/* 000127 */ 						return __call__ (__accu0__.register_reference_referenceable, __accu0__, __kwargtrans__ ({node: node, referenceable_info: referenceable_info}));
/* 000127 */ 					}) ();
/* 000127 */ 				}
/* 000127 */ 			}
/* 000133 */ 			var thenodelist = node.nodelist;
/* 000135 */ 			if (__t__ (self.render_with_term)) {
/* 000136 */ 				var environ = render_context.doc.environment;
/* 000137 */ 				var term_fragment = (function () {
/* 000137 */ 					var __accu0__ = environ;
/* 000137 */ 					return __call__ (__accu0__.make_fragment, __accu0__, __add__ (formatted_ref_flm_text, self.render_with_term_suffix), __kwargtrans__ ({standalone_mode: true}));
/* 000137 */ 				}) ();
/* 000141 */ 				var intro_node = (function () {
/* 000141 */ 					var __accu0__ = term_fragment.latex_walker;
/* 000147 */ 					return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexMacroNode, __kwargtrans__ ({macroname: '', spec: self.render_term_text_format_spec, macro_post_space: '', parsing_state: term_fragment.nodes.parsing_state, nodeargd: __call__ (ParsedArguments, null, __kwargtrans__ ({arguments_spec_list: self.render_term_text_format_spec.arguments_spec_list, argnlist: [term_fragment.nodes]})), pos: node.pos, pos_end: node.pos_end}));
/* 000147 */ 				}) ();
/* 000156 */ 				(function () {
/* 000156 */ 					var __accu0__ = self.render_term_text_format_spec;
/* 000156 */ 					return __call__ (__accu0__.finalize_node, __accu0__, intro_node);
/* 000156 */ 				}) ();
/* 000158 */ 				var thenodelist = (function () {
/* 000158 */ 					var __accu0__ = term_fragment.latex_walker;
/* 000159 */ 					return __call__ (__accu0__.make_nodelist, __accu0__, __add__ ([intro_node], __call__ (list, null, thenodelist)), __kwargtrans__ ({parsing_state: node.nodelist.parsing_state}));
/* 000159 */ 				}) ();
/* 000159 */ 			}
/* 000165 */ 			var result = (function () {
/* 000165 */ 				var __accu0__ = render_context.fragment_renderer;
/* 000166 */ 				return __call__ (__accu0__.render_semantic_block, __accu0__, __kwargtrans__ ({content: (function () {
/* 000166 */ 					var __accu1__ = render_context.fragment_renderer;
/* 000166 */ 					return __call__ (__accu1__.render_nodelist, __accu1__, thenodelist, __kwargtrans__ ({render_context: render_context, is_block_level: true}));
/* 000173 */ 				}) (), role: 'defterm', render_context: render_context, target_id: (function () {
/* 000173 */ 					var __accu1__ = __getitem__ (node.flm_referenceable_infos, 0);
/* 000173 */ 					return __call__ (__accu1__.get_target_id, __accu1__);
/* 000173 */ 				}) ()}));
/* 000173 */ 			}) ();
/* 000176 */ 			// pass;
/* 000176 */ 			__withid0__.__exit__ ();
/* 000176 */ 		}
/* 000176 */ 		catch (__except0__) {
/* 000176 */ 			if (! (__withid0__.__exit__ (__except0__.name, __except0__, __except0__.stack))) {
/* 000176 */ 				throw __except0__;
/* 000176 */ 			}
/* 000176 */ 		}
/* 000180 */ 		return result;
/* 000180 */ 	});},
/* 000183 */ 	get recompose_pure_latex () {return __get__ (this, function (self, node, recomposer, visited_results_arguments, visited_results_body) {
/* 000183 */ 		var kwargs = dict ();
/* 000183 */ 		if (arguments.length) {
/* 000183 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000183 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000183 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000183 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000183 */ 					switch (__attrib0__) {
/* 000183 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000183 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000183 */ 						case 'recomposer': var recomposer = __allkwargs0__ [__attrib0__]; break;
/* 000183 */ 						case 'visited_results_arguments': var visited_results_arguments = __allkwargs0__ [__attrib0__]; break;
/* 000183 */ 						case 'visited_results_body': var visited_results_body = __allkwargs0__ [__attrib0__]; break;
/* 000183 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000183 */ 					}
/* 000183 */ 				}
/* 000183 */ 				delete kwargs.__kwargtrans__;
/* 000183 */ 			}
/* 000183 */ 		}
/* 000183 */ 		else {
/* 000183 */ 		}
/* 000190 */ 		if (__t__ (node.flm_referenceable_infos === null)) {
/* 000193 */ 			var __except0__ = __call__ (LatexWalkerLocatedError, null, __add__ ('Recomposing pure LaTeX: Invalid referenceable info in defterm node ', __call__ (repr, null, node)), __kwargtrans__ ({pos: node.pos}));
/* 000193 */ 			__except0__.__cause__ = null;
/* 000193 */ 			throw __except0__;
/* 000193 */ 		}
/* 000199 */ 		var s = __add__ (__add__ ('\\begin{', __call__ (str, null, node.environmentname)), '}');
/* 000200 */ 		var s = __call__ (__iadd__, null, s, __call__ (str, null, __getitem__ (visited_results_arguments, 0)));
/* 000204 */ 		var __iterable0__ = node.flm_referenceable_infos;
/* 000204 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000204 */ 			var referenceable_info = __getitem__ (__iterable0__, __index0__);
/* 000205 */ 			var __iterable1__ = referenceable_info.labels;
/* 000205 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000205 */ 				var __left0__ = __getitem__ (__iterable1__, __index1__);
/* 000205 */ 				var ref_type = __left0__ [0];
/* 000205 */ 				var ref_label = __left0__ [1];
/* 000206 */ 				var safe_label_info = (function () {
/* 000206 */ 					var __accu0__ = recomposer;
/* 000206 */ 					return __call__ (__accu0__.make_safe_label, __accu0__, 'ref', ref_type, ref_label);
/* 000206 */ 				}) ();
/* 000207 */ 				var safe_label = __getitem__ (safe_label_info, 'safe_label');
/* 000208 */ 				var s = __call__ (__iadd__, null, s, __add__ (__add__ ('\\label{', __call__ (str, null, safe_label)), '}'));
/* 000208 */ 			}
/* 000208 */ 		}
/* 000210 */ 		var s = __call__ (__iadd__, null, s, (function () {
/* 000210 */ 			var __accu0__ = recomposer;
/* 000210 */ 			return __call__ (__accu0__.recompose_nodelist, __accu0__, visited_results_body, node);
/* 000210 */ 		}) ());
/* 000211 */ 		var s = __call__ (__iadd__, null, s, __add__ (__add__ ('\\end{', __call__ (str, null, node.environmentname)), '}'));
/* 000213 */ 		return s;
/* 000213 */ 	});}
/* 000213 */ });
/* 000220 */ export var RefTermMacro =  __class__ ('RefTermMacro', [FLMMacroSpecBase], {
/* 000220 */ 	__module__: __name__,
/* 000222 */ 	allowed_in_standalone_mode: false,
/* 000223 */ 	delayed_render: true,
/* 000225 */ 	defterm_ref_type: 'defterm',
/* 000227 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000227 */ 		var kwargs = dict ();
/* 000227 */ 		if (arguments.length) {
/* 000227 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000227 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000227 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000227 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000227 */ 					switch (__attrib0__) {
/* 000227 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000227 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000227 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000227 */ 					}
/* 000227 */ 				}
/* 000227 */ 				delete kwargs.__kwargtrans__;
/* 000227 */ 			}
/* 000227 */ 		}
/* 000227 */ 		else {
/* 000227 */ 		}
/* 000234 */ 		__call__ (__call__ (__super__, null, RefTermMacro, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({macroname: macroname, arguments_spec_list: [__call__ (FLMArgumentSpec, null, '[', __kwargtrans__ ({argname: 'ref_term', flm_doc: 'The term that is being referenced.  May be omitted if it coincides with \\verba{term}'})), __call__ (FLMArgumentSpec, null, '{', __kwargtrans__ ({argname: 'term', flm_doc: 'The term the exact way it should be typeset at this point'}))]}, kwargs)));
/* 000234 */ 	});},
/* 000241 */ 	_fields: tuple (['macroname']),
/* 000243 */ 	get get_flm_doc () {return __get__ (this, function (self) {
/* 000243 */ 		if (arguments.length) {
/* 000243 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000243 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000243 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000243 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000243 */ 					switch (__attrib0__) {
/* 000243 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000243 */ 					}
/* 000243 */ 				}
/* 000243 */ 			}
/* 000243 */ 		}
/* 000243 */ 		else {
/* 000243 */ 		}
/* 000244 */ 		return ' Reference a term defined somewhere else in a\n        \\verbcode+\\begin{defterm}…\\end{defterm}+ environment.  This will\n        typically produce a link in HTML output for instance to the location\n        where this term is defined.  In case you need to typeset the term\n        differently than when you defined it (e.g., because of a plural,\n        capital/lower case, other declination), use the optional argument to\n        give the term exactly as defined and specify the term as it should\n        appear in the main argument.  E.g.\n        \\verbcode+These are \\term[Markov chain]{Markov chains}+';
/* 000244 */ 	});},
/* 000254 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000254 */ 		if (arguments.length) {
/* 000254 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000254 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000254 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000254 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000254 */ 					switch (__attrib0__) {
/* 000254 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000254 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000254 */ 					}
/* 000254 */ 				}
/* 000254 */ 			}
/* 000254 */ 		}
/* 000254 */ 		else {
/* 000254 */ 		}
/* 000256 */ 		var node_args = (function () {
/* 000256 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000256 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['ref_term', 'term']));
/* 000256 */ 		}) ();
/* 000260 */ 		if (__t__ ((function () {
/* 000260 */ 			var __accu0__ = __getitem__ (node_args, 'ref_term');
/* 000260 */ 			return __call__ (__accu0__.was_provided, __accu0__);
/* 000260 */ 		}) ())) {
/* 000262 */ 			node.flm_term_flm_show_term_nodelist = (function () {
/* 000262 */ 				var __accu0__ = __getitem__ (node_args, 'term');
/* 000262 */ 				return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000262 */ 			}) ();
/* 000264 */ 			node.flm_term_flm_ref_label_verbatim = __call__ (get_term_ref_label_verbatim, null, (function () {
/* 000264 */ 				var __accu0__ = __getitem__ (node_args, 'ref_term');
/* 000264 */ 				return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000264 */ 			}) ());
/* 000264 */ 		}
/* 000265 */ 		else {
/* 000266 */ 			node.flm_term_flm_show_term_nodelist = (function () {
/* 000266 */ 				var __accu0__ = __getitem__ (node_args, 'term');
/* 000266 */ 				return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000266 */ 			}) ();
/* 000268 */ 			node.flm_term_flm_ref_label_verbatim = __call__ (get_term_ref_label_verbatim, null, node.flm_term_flm_show_term_nodelist);
/* 000268 */ 		}
/* 000270 */ 		node.flmarg_ref = tuple ([self.defterm_ref_type, node.flm_term_flm_ref_label_verbatim]);
/* 000271 */ 		node.flm_ref_info = dict ({'ref_list': [node.flmarg_ref], 'display_content_nodelist': node.flm_term_flm_show_term_nodelist});
/* 000271 */ 	});},
/* 000277 */ 	get prepare_delayed_render () {return __get__ (this, function (self, node, render_context) {
/* 000277 */ 		if (arguments.length) {
/* 000277 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000277 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000277 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000277 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000277 */ 					switch (__attrib0__) {
/* 000277 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000277 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000277 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000277 */ 					}
/* 000277 */ 				}
/* 000277 */ 			}
/* 000277 */ 		}
/* 000277 */ 		else {
/* 000277 */ 		}
/* 000279 */ 		// pass;
/* 000285 */ 		var is_currently_defining_term = false;
/* 000286 */ 		var logical_state = (function () {
/* 000286 */ 			var __accu0__ = render_context;
/* 000286 */ 			return __call__ (__accu0__.get_logical_state, __accu0__, 'feature.defterm');
/* 000286 */ 		}) ();
/* 000287 */ 		if (__t__ (__in__ ('currently_defining_terms', logical_state))) {
/* 000288 */ 			if (__t__ (__in__ (node.flm_term_flm_ref_label_verbatim, __getitem__ (logical_state, 'currently_defining_terms')))) {
/* 000290 */ 				var is_currently_defining_term = true;
/* 000290 */ 			}
/* 000290 */ 		}
/* 000292 */ 		// pass;
/* 000298 */ 		var mgr = (function () {
/* 000298 */ 			var __accu0__ = render_context;
/* 000298 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'defterm');
/* 000298 */ 		}) ();
/* 000299 */ 		(function () {
/* 000299 */ 			var __accu0__ = mgr;
/* 000299 */ 			return __call__ (__accu0__.register_term_node_info, __accu0__, node, __kwargtrans__ ({is_currently_defining_term: is_currently_defining_term}));
/* 000299 */ 		}) ();
/* 000299 */ 	});},
/* 000305 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000305 */ 		if (arguments.length) {
/* 000305 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000305 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000305 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000305 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000305 */ 					switch (__attrib0__) {
/* 000305 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000305 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000305 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000305 */ 					}
/* 000305 */ 				}
/* 000305 */ 			}
/* 000305 */ 		}
/* 000305 */ 		else {
/* 000305 */ 		}
/* 000307 */ 		var term_flm_show_term_nodelist = node.flm_term_flm_show_term_nodelist;
/* 000308 */ 		var term_flm_ref_label_verbatim = node.flm_term_flm_ref_label_verbatim;
/* 000310 */ 		if (__t__ (!__t__ (((function () {
/* 000310 */ 			var __accu0__ = render_context;
/* 000310 */ 			return __call__ (__accu0__.supports_feature, __accu0__, 'refs');
/* 000310 */ 		}) ())))) {
/* 000312 */ 			return (function () {
/* 000312 */ 				var __accu0__ = render_context.fragment_renderer;
/* 000312 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, term_flm_show_term_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000312 */ 			}) ();
/* 000312 */ 		}
/* 000318 */ 		var resource_info = node.latex_walker.resource_info;
/* 000321 */ 		var refs_mgr = (function () {
/* 000321 */ 			var __accu0__ = render_context;
/* 000321 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000321 */ 		}) ();
/* 000322 */ 		var ref_instance = (function () {
/* 000322 */ 			var __accu0__ = refs_mgr;
/* 000322 */ 			return __call__ (__accu0__.get_ref, __accu0__, self.defterm_ref_type, term_flm_ref_label_verbatim, resource_info);
/* 000322 */ 		}) ();
/* 000328 */ 		var mgr = (function () {
/* 000328 */ 			var __accu0__ = render_context;
/* 000328 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'defterm');
/* 000328 */ 		}) ();
/* 000329 */ 		var term_info = (function () {
/* 000329 */ 			var __accu0__ = mgr;
/* 000329 */ 			return __call__ (__accu0__.get_term_node_info, __accu0__, node);
/* 000329 */ 		}) ();
/* 000331 */ 		var is_currently_defining_term = __getitem__ (term_info, 'is_currently_defining_term');
/* 000333 */ 		if (__t__ (is_currently_defining_term)) {
/* 000335 */ 			return (function () {
/* 000335 */ 				var __accu0__ = render_context.fragment_renderer;
/* 000335 */ 				return __call__ (__accu0__.render_text_format, __accu0__, ['defterm-term', 'term-in-defining-defterm'], __kwargtrans__ ({nodelist: term_flm_show_term_nodelist, render_context: render_context}));
/* 000335 */ 			}) ();
/* 000335 */ 		}
/* 000341 */ 		return (function () {
/* 000341 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000341 */ 			return __call__ (__accu0__.render_link, __accu0__, 'term', __kwargtrans__ ({href: ref_instance.target_href, display_nodelist: term_flm_show_term_nodelist, render_context: render_context, annotations: []}));
/* 000341 */ 		}) ();
/* 000341 */ 	});},
/* 000349 */ 	get recompose_pure_latex () {return __get__ (this, function (self, node, recomposer, visited_results_arguments) {
/* 000349 */ 		var kwargs = dict ();
/* 000349 */ 		if (arguments.length) {
/* 000349 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000349 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000349 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000349 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000349 */ 					switch (__attrib0__) {
/* 000349 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000349 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000349 */ 						case 'recomposer': var recomposer = __allkwargs0__ [__attrib0__]; break;
/* 000349 */ 						case 'visited_results_arguments': var visited_results_arguments = __allkwargs0__ [__attrib0__]; break;
/* 000349 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000349 */ 					}
/* 000349 */ 				}
/* 000349 */ 				delete kwargs.__kwargtrans__;
/* 000349 */ 			}
/* 000349 */ 		}
/* 000349 */ 		else {
/* 000349 */ 		}
/* 000351 */ 		var ref_type = self.defterm_ref_type;
/* 000352 */ 		var ref_label = node.flm_term_flm_ref_label_verbatim;
/* 000354 */ 		var safe_label_info = (function () {
/* 000354 */ 			var __accu0__ = recomposer;
/* 000354 */ 			return __call__ (__accu0__.make_safe_label, __accu0__, 'ref', ref_type, ref_label);
/* 000354 */ 		}) ();
/* 000355 */ 		var safe_label = __getitem__ (safe_label_info, 'safe_label');
/* 000357 */ 		return __add__ (__add__ (__add__ (__add__ (__add__ (__add__ ('\\flmTerm{', node.macroname), '}{'), safe_label), '}'), (__t__ (__getitem__ (visited_results_arguments, 0)) ? __add__ (__add__ ('{', __getitem__ (visited_results_arguments, 0)), '}') : '{}')), __getitem__ (visited_results_arguments, 1));
/* 000357 */ 	});}
/* 000357 */ });
/* 000368 */ export var FeatureDefTerm =  __class__ ('FeatureDefTerm', [Feature], {
/* 000368 */ 	__module__: __name__,
/* 000370 */ 	feature_name: 'defterm',
/* 000373 */ 	feature_title: 'Definition terms',
/* 000373 */ 	RenderManager: __class__ ('RenderManager', [Feature.RenderManager], {
/* 000373 */ 		__module__: __name__,
/* 000374 */ 		get initialize () {return __get__ (this, function (self) {
/* 000374 */ 			if (arguments.length) {
/* 000374 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000374 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000374 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000374 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000374 */ 						switch (__attrib0__) {
/* 000374 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000374 */ 						}
/* 000374 */ 					}
/* 000374 */ 				}
/* 000374 */ 			}
/* 000374 */ 			else {
/* 000374 */ 			}
/* 000375 */ 			self.registered_term_node_infos = dict ({});
/* 000375 */ 		});},
/* 000376 */ 		get register_term_node_info () {return __get__ (this, function (self, node) {
/* 000376 */ 			var kwargs = dict ();
/* 000376 */ 			if (arguments.length) {
/* 000376 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000376 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000376 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000376 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000376 */ 						switch (__attrib0__) {
/* 000376 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000376 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000376 */ 							default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000376 */ 						}
/* 000376 */ 					}
/* 000376 */ 					delete kwargs.__kwargtrans__;
/* 000376 */ 				}
/* 000376 */ 			}
/* 000376 */ 			else {
/* 000376 */ 			}
/* 000377 */ 			__setitem__ (self.registered_term_node_infos, (function () {
/* 000377 */ 				var __accu0__ = self;
/* 000377 */ 				return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000377 */ 			}) (), kwargs);
/* 000377 */ 		});},
/* 000378 */ 		get get_term_node_info () {return __get__ (this, function (self, node) {
/* 000378 */ 			if (arguments.length) {
/* 000378 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000378 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000378 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000378 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000378 */ 						switch (__attrib0__) {
/* 000378 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000378 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000378 */ 						}
/* 000378 */ 					}
/* 000378 */ 				}
/* 000378 */ 			}
/* 000378 */ 			else {
/* 000378 */ 			}
/* 000379 */ 			return __getitem__ (self.registered_term_node_infos, (function () {
/* 000379 */ 				var __accu0__ = self;
/* 000379 */ 				return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000379 */ 			}) ());
/* 000379 */ 		});}
/* 000379 */ 	}),
/* 000382 */ 	render_defterm_with_term: true,
/* 000383 */ 	render_defterm_with_term_suffix: ': ',
/* 000385 */ 	get __init__ () {return __get__ (this, function (self, render_defterm_with_term, render_defterm_with_term_suffix) {
/* 000385 */ 		if (typeof render_defterm_with_term == 'undefined' || (render_defterm_with_term != null && render_defterm_with_term.hasOwnProperty ("__kwargtrans__"))) {;
/* 000385 */ 			var render_defterm_with_term = null;
/* 000385 */ 		};
/* 000385 */ 		if (typeof render_defterm_with_term_suffix == 'undefined' || (render_defterm_with_term_suffix != null && render_defterm_with_term_suffix.hasOwnProperty ("__kwargtrans__"))) {;
/* 000385 */ 			var render_defterm_with_term_suffix = null;
/* 000385 */ 		};
/* 000385 */ 		if (arguments.length) {
/* 000385 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000385 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000385 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000385 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000385 */ 					switch (__attrib0__) {
/* 000385 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000385 */ 						case 'render_defterm_with_term': var render_defterm_with_term = __allkwargs0__ [__attrib0__]; break;
/* 000385 */ 						case 'render_defterm_with_term_suffix': var render_defterm_with_term_suffix = __allkwargs0__ [__attrib0__]; break;
/* 000385 */ 					}
/* 000385 */ 				}
/* 000385 */ 			}
/* 000385 */ 		}
/* 000385 */ 		else {
/* 000385 */ 		}
/* 000386 */ 		__call__ (__call__ (__super__, null, FeatureDefTerm, '__init__'), null, self);
/* 000387 */ 		if (__t__ (render_defterm_with_term !== null)) {
/* 000388 */ 			self.render_defterm_with_term = render_defterm_with_term;
/* 000388 */ 		}
/* 000389 */ 		if (__t__ (render_defterm_with_term_suffix !== null)) {
/* 000390 */ 			self.render_defterm_with_term_suffix = render_defterm_with_term_suffix;
/* 000390 */ 		}
/* 000390 */ 	});},
/* 000393 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000393 */ 		if (arguments.length) {
/* 000393 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000393 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000393 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000393 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000393 */ 					switch (__attrib0__) {
/* 000393 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000393 */ 					}
/* 000393 */ 				}
/* 000393 */ 			}
/* 000393 */ 		}
/* 000393 */ 		else {
/* 000393 */ 		}
/* 000399 */ 		return __call__ (dict, null, __kwargtrans__ ({macros: [__call__ (RefTermMacro, null, 'term')], environments: [__call__ (DefineTermEnvironment, null, 'defterm', __kwargtrans__ ({render_with_term: self.render_defterm_with_term, render_with_term_suffix: self.render_defterm_with_term_suffix}))]}));
/* 000399 */ 	});}
/* 000399 */ });
/* 000409 */ export var FeatureClass = FeatureDefTerm;
/* 000006 */ 
//# sourceMappingURL=flm.feature.defterm.map