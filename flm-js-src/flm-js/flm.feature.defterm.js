/* 000001 */ // Transcrypt'ed from Python, 2024-09-26 22:59:53
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
/* 000006 */ export {FLMEnvironmentSpecBase, FLMArgumentSpec, refs, FLMMacroSpecBase, FLMParsingStateDeltaSetBlockLevel, latexnodes_nodes, ParsedArguments, flmspecinfo, ParsedArgumentsInfo, TextFormatMacro, Feature};
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
/* 000097 */ 			return __call__ (__accu0__.ReferenceableInfo, __accu0__, __kwargtrans__ ({formatted_ref_flm_text: node.flmarg_term_flm_ref_label_verbatim, labels: __add__ ([tuple ([self.defterm_ref_type, node.flmarg_term_flm_ref_label_verbatim])], __call__ (list, null, node.flmarg_labels))}));
/* 000097 */ 		}) ()];
/* 000102 */ 		return node;
/* 000102 */ 	});},
/* 000104 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000104 */ 		if (arguments.length) {
/* 000104 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000104 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000104 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000104 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000104 */ 					switch (__attrib0__) {
/* 000104 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000104 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000104 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000104 */ 					}
/* 000104 */ 				}
/* 000104 */ 			}
/* 000104 */ 		}
/* 000104 */ 		else {
/* 000104 */ 		}
/* 000106 */ 		var formatted_ref_flm_text = node.flmarg_term_flm_ref_label_verbatim;
/* 000108 */ 		var logical_state = (function () {
/* 000108 */ 			var __accu0__ = render_context;
/* 000108 */ 			return __call__ (__accu0__.get_logical_state, __accu0__, 'feature.defterm');
/* 000108 */ 		}) ();
/* 000109 */ 		if (__t__ (!__in__ ('currently_defining_terms', logical_state))) {
/* 000110 */ 			__setitem__ (logical_state, 'currently_defining_terms', []);
/* 000110 */ 		}
/* 000112 */ 		var cur_def_terms = __call__ (list, null, __getitem__ (logical_state, 'currently_defining_terms'));
/* 000113 */ 		(function () {
/* 000113 */ 			var __accu0__ = cur_def_terms;
/* 000113 */ 			return __call__ (__accu0__.append, __accu0__, formatted_ref_flm_text);
/* 000113 */ 		}) ();
/* 000115 */ 		var __withid0__ = (function () {
/* 000115 */ 			var __accu0__ = render_context;
/* 000115 */ 			return __call__ (__accu0__.push_logical_state, __accu0__, 'feature.defterm', 'currently_defining_terms', cur_def_terms);
/* 000115 */ 		}) ();
/* 000115 */ 		try {
/* 000115 */ 			__withid0__.__enter__ ();
/* 000118 */ 			// pass;
/* 000123 */ 			if (__t__ ((function () {
/* 000123 */ 				var __accu0__ = render_context;
/* 000123 */ 				return __call__ (__accu0__.supports_feature, __accu0__, 'refs');
/* 000123 */ 			}) ())) {
/* 000124 */ 				var refs_mgr = (function () {
/* 000124 */ 					var __accu0__ = render_context;
/* 000124 */ 					return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000124 */ 				}) ();
/* 000125 */ 				var __iterable0__ = node.flm_referenceable_infos;
/* 000125 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000125 */ 					var referenceable_info = __getitem__ (__iterable0__, __index0__);
/* 000126 */ 					(function () {
/* 000126 */ 						var __accu0__ = refs_mgr;
/* 000126 */ 						return __call__ (__accu0__.register_reference_referenceable, __accu0__, __kwargtrans__ ({node: node, referenceable_info: referenceable_info}));
/* 000126 */ 					}) ();
/* 000126 */ 				}
/* 000126 */ 			}
/* 000132 */ 			var thenodelist = node.nodelist;
/* 000134 */ 			if (__t__ (self.render_with_term)) {
/* 000135 */ 				var environ = render_context.doc.environment;
/* 000136 */ 				var term_fragment = (function () {
/* 000136 */ 					var __accu0__ = environ;
/* 000136 */ 					return __call__ (__accu0__.make_fragment, __accu0__, __add__ (formatted_ref_flm_text, self.render_with_term_suffix), __kwargtrans__ ({standalone_mode: true}));
/* 000136 */ 				}) ();
/* 000140 */ 				var intro_node = (function () {
/* 000140 */ 					var __accu0__ = term_fragment.latex_walker;
/* 000146 */ 					return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexMacroNode, __kwargtrans__ ({macroname: '', spec: self.render_term_text_format_spec, macro_post_space: '', parsing_state: term_fragment.nodes.parsing_state, nodeargd: __call__ (ParsedArguments, null, __kwargtrans__ ({arguments_spec_list: self.render_term_text_format_spec.arguments_spec_list, argnlist: [term_fragment.nodes]})), pos: node.pos, pos_end: node.pos_end}));
/* 000146 */ 				}) ();
/* 000155 */ 				(function () {
/* 000155 */ 					var __accu0__ = self.render_term_text_format_spec;
/* 000155 */ 					return __call__ (__accu0__.finalize_node, __accu0__, intro_node);
/* 000155 */ 				}) ();
/* 000157 */ 				var thenodelist = (function () {
/* 000157 */ 					var __accu0__ = term_fragment.latex_walker;
/* 000158 */ 					return __call__ (__accu0__.make_nodelist, __accu0__, __add__ ([intro_node], __call__ (list, null, thenodelist)), __kwargtrans__ ({parsing_state: node.nodelist.parsing_state}));
/* 000158 */ 				}) ();
/* 000158 */ 			}
/* 000164 */ 			var result = (function () {
/* 000164 */ 				var __accu0__ = render_context.fragment_renderer;
/* 000165 */ 				return __call__ (__accu0__.render_semantic_block, __accu0__, __kwargtrans__ ({content: (function () {
/* 000165 */ 					var __accu1__ = render_context.fragment_renderer;
/* 000165 */ 					return __call__ (__accu1__.render_nodelist, __accu1__, thenodelist, __kwargtrans__ ({render_context: render_context, is_block_level: true}));
/* 000172 */ 				}) (), role: 'defterm', render_context: render_context, target_id: (function () {
/* 000172 */ 					var __accu1__ = __getitem__ (node.flm_referenceable_infos, 0);
/* 000172 */ 					return __call__ (__accu1__.get_target_id, __accu1__);
/* 000172 */ 				}) ()}));
/* 000172 */ 			}) ();
/* 000175 */ 			// pass;
/* 000175 */ 			__withid0__.__exit__ ();
/* 000175 */ 		}
/* 000175 */ 		catch (__except0__) {
/* 000175 */ 			if (! (__withid0__.__exit__ (__except0__.name, __except0__, __except0__.stack))) {
/* 000175 */ 				throw __except0__;
/* 000175 */ 			}
/* 000175 */ 		}
/* 000179 */ 		return result;
/* 000179 */ 	});},
/* 000182 */ 	get recompose_pure_latex () {return __get__ (this, function (self, node, recomposer, visited_results_arguments, visited_results_body) {
/* 000182 */ 		var kwargs = dict ();
/* 000182 */ 		if (arguments.length) {
/* 000182 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000182 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000182 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000182 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000182 */ 					switch (__attrib0__) {
/* 000182 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000182 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000182 */ 						case 'recomposer': var recomposer = __allkwargs0__ [__attrib0__]; break;
/* 000182 */ 						case 'visited_results_arguments': var visited_results_arguments = __allkwargs0__ [__attrib0__]; break;
/* 000182 */ 						case 'visited_results_body': var visited_results_body = __allkwargs0__ [__attrib0__]; break;
/* 000182 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000182 */ 					}
/* 000182 */ 				}
/* 000182 */ 				delete kwargs.__kwargtrans__;
/* 000182 */ 			}
/* 000182 */ 		}
/* 000182 */ 		else {
/* 000182 */ 		}
/* 000189 */ 		if (__t__ (node.flm_referenceable_infos === null)) {
/* 000192 */ 			var __except0__ = __call__ (LatexWalkerLocatedError, null, __add__ ('Recomposing pure LaTeX: Invalid referenceable info in defterm node ', __call__ (repr, null, node)), __kwargtrans__ ({pos: node.pos}));
/* 000192 */ 			__except0__.__cause__ = null;
/* 000192 */ 			throw __except0__;
/* 000192 */ 		}
/* 000198 */ 		var s = __add__ (__add__ ('\\begin{', __call__ (str, null, node.environmentname)), '}');
/* 000199 */ 		var s = __call__ (__iadd__, null, s, __call__ (str, null, __getitem__ (visited_results_arguments, 0)));
/* 000203 */ 		var __iterable0__ = node.flm_referenceable_infos;
/* 000203 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000203 */ 			var referenceable_info = __getitem__ (__iterable0__, __index0__);
/* 000204 */ 			var __iterable1__ = referenceable_info.labels;
/* 000204 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000204 */ 				var __left0__ = __getitem__ (__iterable1__, __index1__);
/* 000204 */ 				var ref_type = __left0__ [0];
/* 000204 */ 				var ref_label = __left0__ [1];
/* 000205 */ 				var safe_label_info = (function () {
/* 000205 */ 					var __accu0__ = recomposer;
/* 000205 */ 					return __call__ (__accu0__.make_safe_label, __accu0__, 'ref', ref_type, ref_label);
/* 000205 */ 				}) ();
/* 000206 */ 				var safe_label = __getitem__ (safe_label_info, 'safe_label');
/* 000207 */ 				var s = __call__ (__iadd__, null, s, __add__ (__add__ ('\\label{', __call__ (str, null, safe_label)), '}'));
/* 000207 */ 			}
/* 000207 */ 		}
/* 000209 */ 		var s = __call__ (__iadd__, null, s, (function () {
/* 000209 */ 			var __accu0__ = recomposer;
/* 000209 */ 			return __call__ (__accu0__.recompose_nodelist, __accu0__, visited_results_body, node);
/* 000209 */ 		}) ());
/* 000210 */ 		var s = __call__ (__iadd__, null, s, __add__ (__add__ ('\\end{', __call__ (str, null, node.environmentname)), '}'));
/* 000212 */ 		return s;
/* 000212 */ 	});}
/* 000212 */ });
/* 000219 */ export var RefTermMacro =  __class__ ('RefTermMacro', [FLMMacroSpecBase], {
/* 000219 */ 	__module__: __name__,
/* 000221 */ 	allowed_in_standalone_mode: false,
/* 000222 */ 	delayed_render: true,
/* 000224 */ 	defterm_ref_type: 'defterm',
/* 000226 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000226 */ 		var kwargs = dict ();
/* 000226 */ 		if (arguments.length) {
/* 000226 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000226 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000226 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000226 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000226 */ 					switch (__attrib0__) {
/* 000226 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000226 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000226 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000226 */ 					}
/* 000226 */ 				}
/* 000226 */ 				delete kwargs.__kwargtrans__;
/* 000226 */ 			}
/* 000226 */ 		}
/* 000226 */ 		else {
/* 000226 */ 		}
/* 000233 */ 		__call__ (__call__ (__super__, null, RefTermMacro, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({macroname: macroname, arguments_spec_list: [__call__ (FLMArgumentSpec, null, '[', __kwargtrans__ ({argname: 'ref_term', flm_doc: 'The term that is being referenced.  May be omitted if it coincides with \\verba{term}'})), __call__ (FLMArgumentSpec, null, '{', __kwargtrans__ ({argname: 'term', flm_doc: 'The term the exact way it should be typeset at this point'}))]}, kwargs)));
/* 000233 */ 	});},
/* 000240 */ 	_fields: tuple (['macroname']),
/* 000242 */ 	get get_flm_doc () {return __get__ (this, function (self) {
/* 000242 */ 		if (arguments.length) {
/* 000242 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000242 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000242 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000242 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000242 */ 					switch (__attrib0__) {
/* 000242 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000242 */ 					}
/* 000242 */ 				}
/* 000242 */ 			}
/* 000242 */ 		}
/* 000242 */ 		else {
/* 000242 */ 		}
/* 000243 */ 		return ' Reference a term defined somewhere else in a\n        \\verbcode+\\begin{defterm}…\\end{defterm}+ environment.  This will\n        typically produce a link in HTML output for instance to the location\n        where this term is defined.  In case you need to typeset the term\n        differently than when you defined it (e.g., because of a plural,\n        capital/lower case, other declination), use the optional argument to\n        give the term exactly as defined and specify the term as it should\n        appear in the main argument.  E.g.\n        \\verbcode+These are \\term[Markov chain]{Markov chains}+';
/* 000243 */ 	});},
/* 000253 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000253 */ 		if (arguments.length) {
/* 000253 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000253 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000253 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000253 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000253 */ 					switch (__attrib0__) {
/* 000253 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000253 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000253 */ 					}
/* 000253 */ 				}
/* 000253 */ 			}
/* 000253 */ 		}
/* 000253 */ 		else {
/* 000253 */ 		}
/* 000255 */ 		var node_args = (function () {
/* 000255 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000255 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['ref_term', 'term']));
/* 000255 */ 		}) ();
/* 000259 */ 		if (__t__ ((function () {
/* 000259 */ 			var __accu0__ = __getitem__ (node_args, 'ref_term');
/* 000259 */ 			return __call__ (__accu0__.was_provided, __accu0__);
/* 000259 */ 		}) ())) {
/* 000261 */ 			node.flm_term_flm_show_term_nodelist = (function () {
/* 000261 */ 				var __accu0__ = __getitem__ (node_args, 'term');
/* 000261 */ 				return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000261 */ 			}) ();
/* 000263 */ 			node.flm_term_flm_ref_label_verbatim = __call__ (get_term_ref_label_verbatim, null, (function () {
/* 000263 */ 				var __accu0__ = __getitem__ (node_args, 'ref_term');
/* 000263 */ 				return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000263 */ 			}) ());
/* 000263 */ 		}
/* 000264 */ 		else {
/* 000265 */ 			node.flm_term_flm_show_term_nodelist = (function () {
/* 000265 */ 				var __accu0__ = __getitem__ (node_args, 'term');
/* 000265 */ 				return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000265 */ 			}) ();
/* 000267 */ 			node.flm_term_flm_ref_label_verbatim = __call__ (get_term_ref_label_verbatim, null, node.flm_term_flm_show_term_nodelist);
/* 000267 */ 		}
/* 000269 */ 		node.flmarg_ref = tuple ([self.defterm_ref_type, node.flm_term_flm_ref_label_verbatim]);
/* 000269 */ 	});},
/* 000272 */ 	get prepare_delayed_render () {return __get__ (this, function (self, node, render_context) {
/* 000272 */ 		if (arguments.length) {
/* 000272 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000272 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000272 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000272 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000272 */ 					switch (__attrib0__) {
/* 000272 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000272 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000272 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000272 */ 					}
/* 000272 */ 				}
/* 000272 */ 			}
/* 000272 */ 		}
/* 000272 */ 		else {
/* 000272 */ 		}
/* 000274 */ 		// pass;
/* 000280 */ 		var is_currently_defining_term = false;
/* 000281 */ 		var logical_state = (function () {
/* 000281 */ 			var __accu0__ = render_context;
/* 000281 */ 			return __call__ (__accu0__.get_logical_state, __accu0__, 'feature.defterm');
/* 000281 */ 		}) ();
/* 000282 */ 		if (__t__ (__in__ ('currently_defining_terms', logical_state))) {
/* 000283 */ 			if (__t__ (__in__ (node.flm_term_flm_ref_label_verbatim, __getitem__ (logical_state, 'currently_defining_terms')))) {
/* 000285 */ 				var is_currently_defining_term = true;
/* 000285 */ 			}
/* 000285 */ 		}
/* 000287 */ 		// pass;
/* 000293 */ 		var mgr = (function () {
/* 000293 */ 			var __accu0__ = render_context;
/* 000293 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'defterm');
/* 000293 */ 		}) ();
/* 000294 */ 		(function () {
/* 000294 */ 			var __accu0__ = mgr;
/* 000294 */ 			return __call__ (__accu0__.register_term_node_info, __accu0__, node, __kwargtrans__ ({is_currently_defining_term: is_currently_defining_term}));
/* 000294 */ 		}) ();
/* 000294 */ 	});},
/* 000300 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000300 */ 		if (arguments.length) {
/* 000300 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000300 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000300 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000300 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000300 */ 					switch (__attrib0__) {
/* 000300 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000300 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000300 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000300 */ 					}
/* 000300 */ 				}
/* 000300 */ 			}
/* 000300 */ 		}
/* 000300 */ 		else {
/* 000300 */ 		}
/* 000302 */ 		var term_flm_show_term_nodelist = node.flm_term_flm_show_term_nodelist;
/* 000303 */ 		var term_flm_ref_label_verbatim = node.flm_term_flm_ref_label_verbatim;
/* 000305 */ 		if (__t__ (!__t__ (((function () {
/* 000305 */ 			var __accu0__ = render_context;
/* 000305 */ 			return __call__ (__accu0__.supports_feature, __accu0__, 'refs');
/* 000305 */ 		}) ())))) {
/* 000307 */ 			return (function () {
/* 000307 */ 				var __accu0__ = render_context.fragment_renderer;
/* 000307 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, term_flm_show_term_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000307 */ 			}) ();
/* 000307 */ 		}
/* 000313 */ 		var resource_info = node.latex_walker.resource_info;
/* 000316 */ 		var refs_mgr = (function () {
/* 000316 */ 			var __accu0__ = render_context;
/* 000316 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000316 */ 		}) ();
/* 000317 */ 		var ref_instance = (function () {
/* 000317 */ 			var __accu0__ = refs_mgr;
/* 000317 */ 			return __call__ (__accu0__.get_ref, __accu0__, self.defterm_ref_type, term_flm_ref_label_verbatim, resource_info);
/* 000317 */ 		}) ();
/* 000323 */ 		var mgr = (function () {
/* 000323 */ 			var __accu0__ = render_context;
/* 000323 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'defterm');
/* 000323 */ 		}) ();
/* 000324 */ 		var term_info = (function () {
/* 000324 */ 			var __accu0__ = mgr;
/* 000324 */ 			return __call__ (__accu0__.get_term_node_info, __accu0__, node);
/* 000324 */ 		}) ();
/* 000326 */ 		var is_currently_defining_term = __getitem__ (term_info, 'is_currently_defining_term');
/* 000328 */ 		if (__t__ (is_currently_defining_term)) {
/* 000330 */ 			return (function () {
/* 000330 */ 				var __accu0__ = render_context.fragment_renderer;
/* 000330 */ 				return __call__ (__accu0__.render_text_format, __accu0__, ['defterm-term', 'term-in-defining-defterm'], __kwargtrans__ ({nodelist: term_flm_show_term_nodelist, render_context: render_context}));
/* 000330 */ 			}) ();
/* 000330 */ 		}
/* 000336 */ 		return (function () {
/* 000336 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000336 */ 			return __call__ (__accu0__.render_link, __accu0__, 'term', __kwargtrans__ ({href: ref_instance.target_href, display_nodelist: term_flm_show_term_nodelist, render_context: render_context, annotations: []}));
/* 000336 */ 		}) ();
/* 000336 */ 	});},
/* 000344 */ 	get recompose_pure_latex () {return __get__ (this, function (self, node, recomposer, visited_results_arguments) {
/* 000344 */ 		var kwargs = dict ();
/* 000344 */ 		if (arguments.length) {
/* 000344 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000344 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000344 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000344 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000344 */ 					switch (__attrib0__) {
/* 000344 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000344 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000344 */ 						case 'recomposer': var recomposer = __allkwargs0__ [__attrib0__]; break;
/* 000344 */ 						case 'visited_results_arguments': var visited_results_arguments = __allkwargs0__ [__attrib0__]; break;
/* 000344 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000344 */ 					}
/* 000344 */ 				}
/* 000344 */ 				delete kwargs.__kwargtrans__;
/* 000344 */ 			}
/* 000344 */ 		}
/* 000344 */ 		else {
/* 000344 */ 		}
/* 000346 */ 		var ref_type = self.defterm_ref_type;
/* 000347 */ 		var ref_label = node.flm_term_flm_ref_label_verbatim;
/* 000349 */ 		var safe_label_info = (function () {
/* 000349 */ 			var __accu0__ = recomposer;
/* 000349 */ 			return __call__ (__accu0__.make_safe_label, __accu0__, 'ref', ref_type, ref_label);
/* 000349 */ 		}) ();
/* 000350 */ 		var safe_label = __getitem__ (safe_label_info, 'safe_label');
/* 000352 */ 		return __add__ (__add__ (__add__ (__add__ (__add__ (__add__ ('\\flmTerm{', node.macroname), '}{'), safe_label), '}'), (__t__ (__getitem__ (visited_results_arguments, 0)) ? __add__ (__add__ ('{', __getitem__ (visited_results_arguments, 0)), '}') : '{}')), __getitem__ (visited_results_arguments, 1));
/* 000352 */ 	});}
/* 000352 */ });
/* 000363 */ export var FeatureDefTerm =  __class__ ('FeatureDefTerm', [Feature], {
/* 000363 */ 	__module__: __name__,
/* 000365 */ 	feature_name: 'defterm',
/* 000368 */ 	feature_title: 'Definition terms',
/* 000368 */ 	RenderManager: __class__ ('RenderManager', [Feature.RenderManager], {
/* 000368 */ 		__module__: __name__,
/* 000369 */ 		get initialize () {return __get__ (this, function (self) {
/* 000369 */ 			if (arguments.length) {
/* 000369 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000369 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000369 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000369 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000369 */ 						switch (__attrib0__) {
/* 000369 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000369 */ 						}
/* 000369 */ 					}
/* 000369 */ 				}
/* 000369 */ 			}
/* 000369 */ 			else {
/* 000369 */ 			}
/* 000370 */ 			self.registered_term_node_infos = dict ({});
/* 000370 */ 		});},
/* 000371 */ 		get register_term_node_info () {return __get__ (this, function (self, node) {
/* 000371 */ 			var kwargs = dict ();
/* 000371 */ 			if (arguments.length) {
/* 000371 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000371 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000371 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000371 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000371 */ 						switch (__attrib0__) {
/* 000371 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000371 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000371 */ 							default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000371 */ 						}
/* 000371 */ 					}
/* 000371 */ 					delete kwargs.__kwargtrans__;
/* 000371 */ 				}
/* 000371 */ 			}
/* 000371 */ 			else {
/* 000371 */ 			}
/* 000372 */ 			__setitem__ (self.registered_term_node_infos, (function () {
/* 000372 */ 				var __accu0__ = self;
/* 000372 */ 				return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000372 */ 			}) (), kwargs);
/* 000372 */ 		});},
/* 000373 */ 		get get_term_node_info () {return __get__ (this, function (self, node) {
/* 000373 */ 			if (arguments.length) {
/* 000373 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000373 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000373 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000373 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000373 */ 						switch (__attrib0__) {
/* 000373 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000373 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000373 */ 						}
/* 000373 */ 					}
/* 000373 */ 				}
/* 000373 */ 			}
/* 000373 */ 			else {
/* 000373 */ 			}
/* 000374 */ 			return __getitem__ (self.registered_term_node_infos, (function () {
/* 000374 */ 				var __accu0__ = self;
/* 000374 */ 				return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000374 */ 			}) ());
/* 000374 */ 		});}
/* 000374 */ 	}),
/* 000377 */ 	render_defterm_with_term: true,
/* 000378 */ 	render_defterm_with_term_suffix: ': ',
/* 000380 */ 	get __init__ () {return __get__ (this, function (self, render_defterm_with_term, render_defterm_with_term_suffix) {
/* 000380 */ 		if (typeof render_defterm_with_term == 'undefined' || (render_defterm_with_term != null && render_defterm_with_term.hasOwnProperty ("__kwargtrans__"))) {;
/* 000380 */ 			var render_defterm_with_term = null;
/* 000380 */ 		};
/* 000380 */ 		if (typeof render_defterm_with_term_suffix == 'undefined' || (render_defterm_with_term_suffix != null && render_defterm_with_term_suffix.hasOwnProperty ("__kwargtrans__"))) {;
/* 000380 */ 			var render_defterm_with_term_suffix = null;
/* 000380 */ 		};
/* 000380 */ 		if (arguments.length) {
/* 000380 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000380 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000380 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000380 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000380 */ 					switch (__attrib0__) {
/* 000380 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000380 */ 						case 'render_defterm_with_term': var render_defterm_with_term = __allkwargs0__ [__attrib0__]; break;
/* 000380 */ 						case 'render_defterm_with_term_suffix': var render_defterm_with_term_suffix = __allkwargs0__ [__attrib0__]; break;
/* 000380 */ 					}
/* 000380 */ 				}
/* 000380 */ 			}
/* 000380 */ 		}
/* 000380 */ 		else {
/* 000380 */ 		}
/* 000381 */ 		__call__ (__call__ (__super__, null, FeatureDefTerm, '__init__'), null, self);
/* 000382 */ 		if (__t__ (render_defterm_with_term !== null)) {
/* 000383 */ 			self.render_defterm_with_term = render_defterm_with_term;
/* 000383 */ 		}
/* 000384 */ 		if (__t__ (render_defterm_with_term_suffix !== null)) {
/* 000385 */ 			self.render_defterm_with_term_suffix = render_defterm_with_term_suffix;
/* 000385 */ 		}
/* 000385 */ 	});},
/* 000388 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000388 */ 		if (arguments.length) {
/* 000388 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000388 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000388 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000388 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000388 */ 					switch (__attrib0__) {
/* 000388 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000388 */ 					}
/* 000388 */ 				}
/* 000388 */ 			}
/* 000388 */ 		}
/* 000388 */ 		else {
/* 000388 */ 		}
/* 000394 */ 		return __call__ (dict, null, __kwargtrans__ ({macros: [__call__ (RefTermMacro, null, 'term')], environments: [__call__ (DefineTermEnvironment, null, 'defterm', __kwargtrans__ ({render_with_term: self.render_defterm_with_term, render_with_term_suffix: self.render_defterm_with_term_suffix}))]}));
/* 000394 */ 	});}
/* 000394 */ });
/* 000404 */ export var FeatureClass = FeatureDefTerm;
/* 000006 */ 
//# sourceMappingURL=flm.feature.defterm.map