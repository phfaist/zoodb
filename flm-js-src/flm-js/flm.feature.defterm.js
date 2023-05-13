/* 000001 */ // Transcrypt'ed from Python, 2023-05-13 11:51:23
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
/* 000006 */ export {ParsedArguments, flmspecinfo, refs, TextFormatMacro, Feature, latexnodes_nodes, ParsedArgumentsInfo, FLMParsingStateDeltaSetBlockLevel, FLMArgumentSpec, FLMEnvironmentSpecBase, FLMMacroSpecBase};
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
/* 000072 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000072 */ 		if (arguments.length) {
/* 000072 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000072 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000072 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000072 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000072 */ 					switch (__attrib0__) {
/* 000072 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000072 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000072 */ 					}
/* 000072 */ 				}
/* 000072 */ 			}
/* 000072 */ 		}
/* 000072 */ 		else {
/* 000072 */ 		}
/* 000074 */ 		var node_args = (function () {
/* 000074 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000074 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['term', 'label']));
/* 000074 */ 		}) ();
/* 000079 */ 		var term_flm_ref_label_verbatim = __call__ (get_term_ref_label_verbatim, null, (function () {
/* 000079 */ 			var __accu0__ = __getitem__ (node_args, 'term');
/* 000079 */ 			return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000079 */ 		}) ());
/* 000080 */ 		node.flmarg_term_flm_ref_label_verbatim = term_flm_ref_label_verbatim;
/* 000084 */ 		node.flmarg_labels = (function () {
/* 000084 */ 			var __accu0__ = flmspecinfo;
/* 000084 */ 			return __call__ (__accu0__.helper_collect_labels, __accu0__, __getitem__ (node_args, 'label'), self.allowed_ref_label_prefixes);
/* 000084 */ 		}) ();
/* 000090 */ 		node.flm_referenceable_infos = [(function () {
/* 000090 */ 			var __accu0__ = refs;
/* 000094 */ 			return __call__ (__accu0__.ReferenceableInfo, __accu0__, __kwargtrans__ ({formatted_ref_flm_text: node.flmarg_term_flm_ref_label_verbatim, labels: __add__ ([tuple ([self.defterm_ref_type, node.flmarg_term_flm_ref_label_verbatim])], __call__ (list, null, node.flmarg_labels))}));
/* 000094 */ 		}) ()];
/* 000099 */ 		return node;
/* 000099 */ 	});},
/* 000101 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000101 */ 		if (arguments.length) {
/* 000101 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000101 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000101 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000101 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000101 */ 					switch (__attrib0__) {
/* 000101 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000101 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000101 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000101 */ 					}
/* 000101 */ 				}
/* 000101 */ 			}
/* 000101 */ 		}
/* 000101 */ 		else {
/* 000101 */ 		}
/* 000103 */ 		var formatted_ref_flm_text = node.flmarg_term_flm_ref_label_verbatim;
/* 000106 */ 		if (__t__ ((function () {
/* 000106 */ 			var __accu0__ = render_context;
/* 000106 */ 			return __call__ (__accu0__.supports_feature, __accu0__, 'refs');
/* 000106 */ 		}) ())) {
/* 000107 */ 			var refs_mgr = (function () {
/* 000107 */ 				var __accu0__ = render_context;
/* 000107 */ 				return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000107 */ 			}) ();
/* 000108 */ 			var __iterable0__ = node.flm_referenceable_infos;
/* 000108 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000108 */ 				var referenceable_info = __getitem__ (__iterable0__, __index0__);
/* 000109 */ 				(function () {
/* 000109 */ 					var __accu0__ = refs_mgr;
/* 000109 */ 					return __call__ (__accu0__.register_reference_referenceable, __accu0__, __kwargtrans__ ({node: node, referenceable_info: referenceable_info}));
/* 000109 */ 				}) ();
/* 000109 */ 			}
/* 000109 */ 		}
/* 000115 */ 		var thenodelist = node.nodelist;
/* 000117 */ 		if (__t__ (self.render_with_term)) {
/* 000118 */ 			var environ = render_context.doc.environment;
/* 000119 */ 			var term_fragment = (function () {
/* 000119 */ 				var __accu0__ = environ;
/* 000119 */ 				return __call__ (__accu0__.make_fragment, __accu0__, __add__ (formatted_ref_flm_text, self.render_with_term_suffix), __kwargtrans__ ({standalone_mode: true}));
/* 000119 */ 			}) ();
/* 000123 */ 			var intro_node = (function () {
/* 000123 */ 				var __accu0__ = term_fragment.latex_walker;
/* 000129 */ 				return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexMacroNode, __kwargtrans__ ({macroname: '', spec: self.render_term_text_format_spec, macro_post_space: '', parsing_state: term_fragment.nodes.parsing_state, nodeargd: __call__ (ParsedArguments, null, __kwargtrans__ ({arguments_spec_list: self.render_term_text_format_spec.arguments_spec_list, argnlist: [term_fragment.nodes]})), pos: node.pos, pos_end: node.pos_end}));
/* 000129 */ 			}) ();
/* 000138 */ 			(function () {
/* 000138 */ 				var __accu0__ = self.render_term_text_format_spec;
/* 000138 */ 				return __call__ (__accu0__.finalize_node, __accu0__, intro_node);
/* 000138 */ 			}) ();
/* 000140 */ 			var thenodelist = (function () {
/* 000140 */ 				var __accu0__ = term_fragment.latex_walker;
/* 000141 */ 				return __call__ (__accu0__.make_nodelist, __accu0__, __add__ ([intro_node], __call__ (list, null, thenodelist)), __kwargtrans__ ({parsing_state: node.nodelist.parsing_state}));
/* 000141 */ 			}) ();
/* 000141 */ 		}
/* 000147 */ 		return (function () {
/* 000147 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000148 */ 			return __call__ (__accu0__.render_semantic_block, __accu0__, __kwargtrans__ ({content: (function () {
/* 000148 */ 				var __accu1__ = render_context.fragment_renderer;
/* 000148 */ 				return __call__ (__accu1__.render_nodelist, __accu1__, thenodelist, __kwargtrans__ ({render_context: render_context, is_block_level: true}));
/* 000155 */ 			}) (), role: 'defterm', render_context: render_context, target_id: (function () {
/* 000155 */ 				var __accu1__ = __getitem__ (node.flm_referenceable_infos, 0);
/* 000155 */ 				return __call__ (__accu1__.get_target_id, __accu1__);
/* 000155 */ 			}) ()}));
/* 000155 */ 		}) ();
/* 000155 */ 	});}
/* 000155 */ });
/* 000159 */ export var RefTermMacro =  __class__ ('RefTermMacro', [FLMMacroSpecBase], {
/* 000159 */ 	__module__: __name__,
/* 000161 */ 	allowed_in_standalone_mode: false,
/* 000162 */ 	delayed_render: true,
/* 000164 */ 	defterm_ref_type: 'defterm',
/* 000166 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000166 */ 		var kwargs = dict ();
/* 000166 */ 		if (arguments.length) {
/* 000166 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000166 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000166 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000166 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000166 */ 					switch (__attrib0__) {
/* 000166 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000166 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000166 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000166 */ 					}
/* 000166 */ 				}
/* 000166 */ 				delete kwargs.__kwargtrans__;
/* 000166 */ 			}
/* 000166 */ 		}
/* 000166 */ 		else {
/* 000166 */ 		}
/* 000173 */ 		__call__ (__call__ (__super__, null, RefTermMacro, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({macroname: macroname, arguments_spec_list: [__call__ (FLMArgumentSpec, null, '[', __kwargtrans__ ({argname: 'ref_term', flm_doc: 'The term that is being referenced.  May be omitted if it coincides with \\verba{term}'})), __call__ (FLMArgumentSpec, null, '{', __kwargtrans__ ({argname: 'term', flm_doc: 'The term the exact way it should be typeset at this point'}))]}, kwargs)));
/* 000173 */ 	});},
/* 000180 */ 	get get_flm_doc () {return __get__ (this, function (self) {
/* 000180 */ 		if (arguments.length) {
/* 000180 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000180 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000180 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000180 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000180 */ 					switch (__attrib0__) {
/* 000180 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000180 */ 					}
/* 000180 */ 				}
/* 000180 */ 			}
/* 000180 */ 		}
/* 000180 */ 		else {
/* 000180 */ 		}
/* 000181 */ 		return ' Reference a term defined somewhere else in a\n        \\verbcode+\\begin{defterm}…\\end{defterm}+ environment.  This will\n        typically produce a link in HTML output for instance to the location\n        where this term is defined.  In case you need to typeset the term\n        differently than when you defined it (e.g., because of a plural,\n        capital/lower case, other declination), use the optional argument to\n        give the term exactly as defined and specify the term as it should\n        appear in the main argument.  E.g.\n        \\verbcode+These are \\term[Markov chain]{Markov chains}+';
/* 000181 */ 	});},
/* 000191 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000191 */ 		if (arguments.length) {
/* 000191 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000191 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000191 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000191 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000191 */ 					switch (__attrib0__) {
/* 000191 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000191 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000191 */ 					}
/* 000191 */ 				}
/* 000191 */ 			}
/* 000191 */ 		}
/* 000191 */ 		else {
/* 000191 */ 		}
/* 000193 */ 		var node_args = (function () {
/* 000193 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000193 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['ref_term', 'term']));
/* 000193 */ 		}) ();
/* 000197 */ 		if (__t__ ((function () {
/* 000197 */ 			var __accu0__ = __getitem__ (node_args, 'ref_term');
/* 000197 */ 			return __call__ (__accu0__.was_provided, __accu0__);
/* 000197 */ 		}) ())) {
/* 000199 */ 			node.flm_term_flm_show_term_nodelist = (function () {
/* 000199 */ 				var __accu0__ = __getitem__ (node_args, 'term');
/* 000199 */ 				return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000199 */ 			}) ();
/* 000201 */ 			node.flm_term_flm_ref_label_verbatim = __call__ (get_term_ref_label_verbatim, null, (function () {
/* 000201 */ 				var __accu0__ = __getitem__ (node_args, 'ref_term');
/* 000201 */ 				return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000201 */ 			}) ());
/* 000201 */ 		}
/* 000202 */ 		else {
/* 000203 */ 			node.flm_term_flm_show_term_nodelist = (function () {
/* 000203 */ 				var __accu0__ = __getitem__ (node_args, 'term');
/* 000203 */ 				return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000203 */ 			}) ();
/* 000205 */ 			node.flm_term_flm_ref_label_verbatim = __call__ (get_term_ref_label_verbatim, null, node.flm_term_flm_show_term_nodelist);
/* 000205 */ 		}
/* 000207 */ 		node.flmarg_ref = tuple ([self.defterm_ref_type, node.flm_term_flm_ref_label_verbatim]);
/* 000207 */ 	});},
/* 000210 */ 	get prepare_delayed_render () {return __get__ (this, function (self, node, render_context) {
/* 000210 */ 		if (arguments.length) {
/* 000210 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000210 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000210 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000210 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000210 */ 					switch (__attrib0__) {
/* 000210 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000210 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000210 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000210 */ 					}
/* 000210 */ 				}
/* 000210 */ 			}
/* 000210 */ 		}
/* 000210 */ 		else {
/* 000210 */ 		}
/* 000211 */ 		// pass;
/* 000211 */ 	});},
/* 000213 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000213 */ 		if (arguments.length) {
/* 000213 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000213 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000213 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000213 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000213 */ 					switch (__attrib0__) {
/* 000213 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000213 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000213 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000213 */ 					}
/* 000213 */ 				}
/* 000213 */ 			}
/* 000213 */ 		}
/* 000213 */ 		else {
/* 000213 */ 		}
/* 000215 */ 		var term_flm_show_term_nodelist = node.flm_term_flm_show_term_nodelist;
/* 000216 */ 		var term_flm_ref_label_verbatim = node.flm_term_flm_ref_label_verbatim;
/* 000218 */ 		if (__t__ (!__t__ (((function () {
/* 000218 */ 			var __accu0__ = render_context;
/* 000218 */ 			return __call__ (__accu0__.supports_feature, __accu0__, 'refs');
/* 000218 */ 		}) ())))) {
/* 000220 */ 			return (function () {
/* 000220 */ 				var __accu0__ = render_context.fragment_renderer;
/* 000220 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, term_flm_show_term_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000220 */ 			}) ();
/* 000220 */ 		}
/* 000226 */ 		var resource_info = node.latex_walker.resource_info;
/* 000229 */ 		var refs_mgr = (function () {
/* 000229 */ 			var __accu0__ = render_context;
/* 000229 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000229 */ 		}) ();
/* 000230 */ 		var ref_instance = (function () {
/* 000230 */ 			var __accu0__ = refs_mgr;
/* 000230 */ 			return __call__ (__accu0__.get_ref, __accu0__, self.defterm_ref_type, term_flm_ref_label_verbatim, resource_info);
/* 000230 */ 		}) ();
/* 000236 */ 		return (function () {
/* 000236 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000236 */ 			return __call__ (__accu0__.render_link, __accu0__, 'term', __kwargtrans__ ({href: ref_instance.target_href, display_nodelist: term_flm_show_term_nodelist, render_context: render_context}));
/* 000236 */ 		}) ();
/* 000236 */ 	});}
/* 000236 */ });
/* 000247 */ export var FeatureDefTerm =  __class__ ('FeatureDefTerm', [Feature], {
/* 000247 */ 	__module__: __name__,
/* 000249 */ 	feature_name: 'defterm',
/* 000250 */ 	feature_title: 'Definition terms',
/* 000252 */ 	FeatureDocumentManager: null,
/* 000253 */ 	FeatureRenderManager: null,
/* 000255 */ 	render_defterm_with_term: true,
/* 000256 */ 	render_defterm_with_term_suffix: ': ',
/* 000258 */ 	get __init__ () {return __get__ (this, function (self, render_defterm_with_term, render_defterm_with_term_suffix) {
/* 000258 */ 		if (typeof render_defterm_with_term == 'undefined' || (render_defterm_with_term != null && render_defterm_with_term.hasOwnProperty ("__kwargtrans__"))) {;
/* 000258 */ 			var render_defterm_with_term = null;
/* 000258 */ 		};
/* 000258 */ 		if (typeof render_defterm_with_term_suffix == 'undefined' || (render_defterm_with_term_suffix != null && render_defterm_with_term_suffix.hasOwnProperty ("__kwargtrans__"))) {;
/* 000258 */ 			var render_defterm_with_term_suffix = null;
/* 000258 */ 		};
/* 000258 */ 		if (arguments.length) {
/* 000258 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000258 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000258 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000258 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000258 */ 					switch (__attrib0__) {
/* 000258 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000258 */ 						case 'render_defterm_with_term': var render_defterm_with_term = __allkwargs0__ [__attrib0__]; break;
/* 000258 */ 						case 'render_defterm_with_term_suffix': var render_defterm_with_term_suffix = __allkwargs0__ [__attrib0__]; break;
/* 000258 */ 					}
/* 000258 */ 				}
/* 000258 */ 			}
/* 000258 */ 		}
/* 000258 */ 		else {
/* 000258 */ 		}
/* 000259 */ 		__call__ (__call__ (__super__, null, FeatureDefTerm, '__init__'), null, self);
/* 000260 */ 		if (__t__ (render_defterm_with_term !== null)) {
/* 000261 */ 			self.render_defterm_with_term = render_defterm_with_term;
/* 000261 */ 		}
/* 000262 */ 		if (__t__ (render_defterm_with_term_suffix !== null)) {
/* 000263 */ 			self.render_defterm_with_term_suffix = render_defterm_with_term_suffix;
/* 000263 */ 		}
/* 000263 */ 	});},
/* 000266 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000266 */ 		if (arguments.length) {
/* 000266 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000266 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000266 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000266 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000266 */ 					switch (__attrib0__) {
/* 000266 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000266 */ 					}
/* 000266 */ 				}
/* 000266 */ 			}
/* 000266 */ 		}
/* 000266 */ 		else {
/* 000266 */ 		}
/* 000272 */ 		return __call__ (dict, null, __kwargtrans__ ({macros: [__call__ (RefTermMacro, null, 'term')], environments: [__call__ (DefineTermEnvironment, null, 'defterm', __kwargtrans__ ({render_with_term: self.render_defterm_with_term, render_with_term_suffix: self.render_defterm_with_term_suffix}))]}));
/* 000272 */ 	});}
/* 000272 */ });
/* 000282 */ export var FeatureClass = FeatureDefTerm;
/* 000006 */ 
//# sourceMappingURL=flm.feature.defterm.map