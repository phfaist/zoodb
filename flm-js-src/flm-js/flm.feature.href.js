/* 000001 */ // Transcrypt'ed from Python, 2025-01-19 14:47:56
/* 000006 */ var logging = {};
/* 000006 */ var re = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000017 */ import {SimpleLatexDefinitionsFeature} from './flm.feature._base.js';
/* 000015 */ import {FLMMacroSpecBase} from './flm.flmspecinfo.js';
/* 000014 */ import {FLMArgumentSpec} from './flm.flmenvironment.js';
/* 000012 */ import {ParsedArgumentsInfo} from './pylatexenc.latexnodes.js';
/* 000011 */ import * as latexnodes_nodes from './pylatexenc.latexnodes.nodes.js';
/* 000010 */ import * as latexnodes_parsers from './pylatexenc.latexnodes.parsers.js';
/* 000007 */ import * as __module_logging__ from './logging.js';
/* 000007 */ __nest__ (logging, '', __module_logging__);
/* 000006 */ import * as __module_re__ from './re.js';
/* 000006 */ __nest__ (re, '', __module_re__);
/* 000006 */ export {SimpleLatexDefinitionsFeature, FLMArgumentSpec, FLMMacroSpecBase, ParsedArgumentsInfo, latexnodes_parsers, latexnodes_nodes};
/* 000001 */ var __name__ = 'flm.feature.href';
/* 000008 */ export var logger = (function () {
/* 000008 */ 	var __accu0__ = logging;
/* 000008 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000008 */ }) ();
/* 000022 */ export var _href_arg_specs = dict ({'target_href': __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: (function () {
/* 000022 */ 	var __accu0__ = latexnodes_parsers;
/* 000022 */ 	return __call__ (__accu0__.LatexDelimitedVerbatimParser, __accu0__, tuple (['{', '}']));
/* 000026 */ }) (), argname: 'target_href'})), 'target_email': __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: (function () {
/* 000026 */ 	var __accu0__ = latexnodes_parsers;
/* 000026 */ 	return __call__ (__accu0__.LatexDelimitedVerbatimParser, __accu0__, tuple (['{', '}']));
/* 000039 */ }) (), argname: 'target_email'})), 'display_text': __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: '{', argname: 'display_text'})), 'target_Xhref': __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: '{', argname: 'target_href'})), 'target_Xemail': __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: '{', argname: 'target_email'}))});
/* 000046 */ export var HrefHyperlinkMacro =  __class__ ('HrefHyperlinkMacro', [FLMMacroSpecBase], {
/* 000046 */ 	__module__: __name__,
/* 000048 */ 	allowed_in_standalone_mode: true,
/* 000050 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000050 */ 		var command_arguments = tuple (['target_href', 'target_email', 'display_text']);
/* 000050 */ 		var ref_type = 'href';
/* 000050 */ 		if (arguments.length) {
/* 000050 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000050 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000050 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000050 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000050 */ 					switch (__attrib0__) {
/* 000050 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000050 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000050 */ 						case 'command_arguments': var command_arguments = __allkwargs0__ [__attrib0__]; break;
/* 000050 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000050 */ 					}
/* 000050 */ 				}
/* 000050 */ 			}
/* 000050 */ 		}
/* 000050 */ 		else {
/* 000050 */ 		}
/* 000057 */ 		var arguments_spec_list = (function () {
/* 000057 */ 			var __accu0__ = self;
/* 000057 */ 			return __call__ (__accu0__._get_arguments_spec_list, __accu0__, command_arguments);
/* 000057 */ 		}) ();
/* 000058 */ 		__call__ (__call__ (__super__, null, HrefHyperlinkMacro, '__init__'), null, self, __kwargtrans__ ({macroname: macroname, arguments_spec_list: arguments_spec_list}));
/* 000062 */ 		self.command_arguments = command_arguments;
/* 000063 */ 		self.ref_type = ref_type;
/* 000065 */ 		self.command_argnames = (function () {
/* 000065 */ 			var __accu0__ = [];
/* 000065 */ 			var __iterable0__ = arguments_spec_list;
/* 000065 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000065 */ 				var c = __getitem__ (__iterable0__, __index0__);
/* 000065 */ 				(function () {
/* 000065 */ 					var __accu1__ = __accu0__;
/* 000065 */ 					return __call__ (__accu1__.append, __accu1__, c.argname);
/* 000065 */ 				}) ();
/* 000065 */ 			}
/* 000065 */ 			return __accu0__;
/* 000065 */ 		}) ();
/* 000067 */ 		if (__t__ (__in__ ('display_text', self.command_argnames))) {
/* 000070 */ 			self._flm_main_text_argument = 'display_text';
/* 000070 */ 		}
/* 000070 */ 	});},
/* 000073 */ 	_fields: tuple (['macroname', 'command_arguments', 'ref_type']),
/* 000077 */ 	get _get_arguments_spec_list () {return __getcm__ (this, function (cls, command_arguments) {
/* 000077 */ 		if (arguments.length) {
/* 000077 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000077 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000077 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000077 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000077 */ 					switch (__attrib0__) {
/* 000077 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000077 */ 						case 'command_arguments': var command_arguments = __allkwargs0__ [__attrib0__]; break;
/* 000077 */ 					}
/* 000077 */ 				}
/* 000077 */ 			}
/* 000077 */ 		}
/* 000077 */ 		else {
/* 000077 */ 		}
/* 000078 */ 		return (function () {
/* 000078 */ 			var __accu0__ = [];
/* 000078 */ 			var __iterable0__ = command_arguments;
/* 000078 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000080 */ 				var cmdarg = __getitem__ (__iterable0__, __index0__);
/* 000080 */ 				(function () {
/* 000080 */ 					var __accu1__ = __accu0__;
/* 000080 */ 					return __call__ (__accu1__.append, __accu1__, __getitem__ (_href_arg_specs, cmdarg));
/* 000080 */ 				}) ();
/* 000080 */ 			}
/* 000080 */ 			return __accu0__;
/* 000080 */ 		}) ();
/* 000080 */ 	});},
/* 000084 */ 	get pretty_url () {return __getcm__ (this, function (cls, target_href) {
/* 000084 */ 		if (arguments.length) {
/* 000084 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000084 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000084 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000084 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000084 */ 					switch (__attrib0__) {
/* 000084 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000084 */ 						case 'target_href': var target_href = __allkwargs0__ [__attrib0__]; break;
/* 000084 */ 					}
/* 000084 */ 				}
/* 000084 */ 			}
/* 000084 */ 		}
/* 000084 */ 		else {
/* 000084 */ 		}
/* 000085 */ 		var url_display = __call__ (str, null, target_href);
/* 000086 */ 		var __iterable0__ = tuple (['http://', 'https://', 'mailto:']);
/* 000086 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000086 */ 			var prefix = __getitem__ (__iterable0__, __index0__);
/* 000087 */ 			if (__t__ ((function () {
/* 000087 */ 				var __accu0__ = url_display;
/* 000087 */ 				return __call__ (__accu0__.startswith, __accu0__, prefix);
/* 000087 */ 			}) ())) {
/* 000088 */ 				var url_display = __getslice__ (url_display, __call__ (len, null, prefix), null, 1);
/* 000088 */ 				break;
/* 000088 */ 			}
/* 000088 */ 		}
/* 000090 */ 		var url_display = (function () {
/* 000090 */ 			var __accu0__ = url_display;
/* 000090 */ 			return __call__ (__accu0__.rstrip, __accu0__, '/#?');
/* 000090 */ 		}) ();
/* 000091 */ 		return url_display;
/* 000091 */ 	});},
/* 000094 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000094 */ 		if (arguments.length) {
/* 000094 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000094 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000094 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000094 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000094 */ 					switch (__attrib0__) {
/* 000094 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000094 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000094 */ 					}
/* 000094 */ 				}
/* 000094 */ 			}
/* 000094 */ 		}
/* 000094 */ 		else {
/* 000094 */ 		}
/* 000096 */ 		var node_args = (function () {
/* 000096 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000096 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, self.command_argnames);
/* 000096 */ 		}) ();
/* 000100 */ 		var target_href = null;
/* 000101 */ 		var display_text_nodelist = null;
/* 000103 */ 		if (__t__ (__in__ ('target_href', node_args))) {
/* 000104 */ 			var target_href = (function () {
/* 000104 */ 				var __accu0__ = __getitem__ (node_args, 'target_href');
/* 000104 */ 				return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000104 */ 			}) ();
/* 000104 */ 		}
/* 000105 */ 		else if (__t__ (__in__ ('target_email', node_args))) {
/* 000106 */ 			var target_href = __add__ ('mailto:', (function () {
/* 000106 */ 				var __accu0__ = __getitem__ (node_args, 'target_email');
/* 000106 */ 				return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000106 */ 			}) ());
/* 000106 */ 		}
/* 000107 */ 		else {
/* 000108 */ 			var __except0__ = __call__ (ValueError, null, 'FLM Internal Error: no URL or hyper reference provided to href-like macro');
/* 000108 */ 			__except0__.__cause__ = null;
/* 000108 */ 			throw __except0__;
/* 000108 */ 		}
/* 000112 */ 		if (__t__ (__in__ ('display_text', node_args))) {
/* 000113 */ 			var display_text_nodelist = (function () {
/* 000113 */ 				var __accu0__ = __getitem__ (node_args, 'display_text');
/* 000113 */ 				return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000113 */ 			}) ();
/* 000113 */ 		}
/* 000115 */ 		node.flm_href_info = dict ({'target_href': target_href, 'display_text_nodelist': display_text_nodelist});
/* 000115 */ 	});},
/* 000120 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000120 */ 		if (arguments.length) {
/* 000120 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000120 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000120 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000120 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000120 */ 					switch (__attrib0__) {
/* 000120 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000120 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000120 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000120 */ 					}
/* 000120 */ 				}
/* 000120 */ 			}
/* 000120 */ 		}
/* 000120 */ 		else {
/* 000120 */ 		}
/* 000122 */ 		var target_href = __getitem__ (node.flm_href_info, 'target_href');
/* 000123 */ 		var display_text_nodelist = __getitem__ (node.flm_href_info, 'display_text_nodelist');
/* 000126 */ 		if (__t__ (display_text_nodelist === null)) {
/* 000127 */ 			var ps = (function () {
/* 000127 */ 				var __accu0__ = node.parsing_state;
/* 000127 */ 				return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ ({is_block_level: false}));
/* 000127 */ 			}) ();
/* 000128 */ 			var display_text_nodelist = (function () {
/* 000128 */ 				var __accu0__ = node.latex_walker;
/* 000130 */ 				return __call__ (__accu0__.make_nodelist, __accu0__, [(function () {
/* 000130 */ 					var __accu1__ = node.latex_walker;
/* 000133 */ 					return __call__ (__accu1__.make_node, __accu1__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({parsing_state: ps, chars: (function () {
/* 000133 */ 						var __accu2__ = self;
/* 000133 */ 						return __call__ (__accu2__.pretty_url, __accu2__, target_href);
/* 000133 */ 					}) (), pos: node.pos, pos_end: node.pos}));
/* 000133 */ 				}) ()], __kwargtrans__ ({parsing_state: ps}));
/* 000133 */ 			}) ();
/* 000133 */ 		}
/* 000141 */ 		return (function () {
/* 000141 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000141 */ 			return __call__ (__accu0__.render_link, __accu0__, self.ref_type, target_href, display_text_nodelist, render_context);
/* 000141 */ 		}) ();
/* 000141 */ 	});},
/* 000149 */ 	get recompose_pure_latex () {return __get__ (this, function (self, node, recomposer, visited_results_arguments) {
/* 000149 */ 		var kwargs = dict ();
/* 000149 */ 		if (arguments.length) {
/* 000149 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000149 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000149 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000149 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000149 */ 					switch (__attrib0__) {
/* 000149 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000149 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000149 */ 						case 'recomposer': var recomposer = __allkwargs0__ [__attrib0__]; break;
/* 000149 */ 						case 'visited_results_arguments': var visited_results_arguments = __allkwargs0__ [__attrib0__]; break;
/* 000149 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000149 */ 					}
/* 000149 */ 				}
/* 000149 */ 				delete kwargs.__kwargtrans__;
/* 000149 */ 			}
/* 000149 */ 		}
/* 000149 */ 		else {
/* 000149 */ 		}
/* 000151 */ 		var s = __add__ ('\\', node.macroname);
/* 000158 */ 		var s_macro_args = [];
/* 000160 */ 		var rx = (function () {
/* 000160 */ 			var __accu0__ = re;
/* 000160 */ 			return __call__ (__accu0__.compile, __accu0__, '[\\\\#%{}]');
/* 000160 */ 		}) ();
/* 000163 */ 		var __iterable0__ = __call__ (zip, null, self.command_argnames, visited_results_arguments);
/* 000163 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000163 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000163 */ 			var argname = __left0__ [0];
/* 000163 */ 			var recomposed_arg_value = __left0__ [1];
/* 000165 */ 			if (__t__ (__in__ (argname, tuple (['target_href', 'target_email'])))) {
/* 000166 */ 				var slenm1 = __sub__ (__call__ (len, null, recomposed_arg_value), 1);
/* 000167 */ 				(function () {
/* 000167 */ 					var __accu0__ = s_macro_args;
/* 000169 */ 					return __call__ (__accu0__.append, __accu0__, __add__ (__add__ (__getitem__ (recomposed_arg_value, 0), (function () {
/* 000169 */ 						var __accu1__ = rx;
/* 000169 */ 						return __call__ (__accu1__.sub, __accu1__, (function __lambda__ (m) {
/* 000169 */ 							if (arguments.length) {
/* 000169 */ 								var __ilastarg0__ = arguments.length - 1;
/* 000169 */ 								if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000169 */ 									var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000169 */ 									for (var __attrib0__ in __allkwargs0__) {
/* 000169 */ 										switch (__attrib0__) {
/* 000169 */ 											case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000169 */ 										}
/* 000169 */ 									}
/* 000169 */ 								}
/* 000169 */ 							}
/* 000169 */ 							else {
/* 000169 */ 							}
/* 000169 */ 							return __add__ ('\\', (function () {
/* 000169 */ 								var __accu2__ = m;
/* 000169 */ 								return __call__ (__accu2__.group, __accu2__, 0);
/* 000169 */ 							}) ());
/* 000169 */ 						}), __getslice__ (recomposed_arg_value, 1, slenm1, 1));
/* 000169 */ 					}) ()), __getitem__ (recomposed_arg_value, slenm1)));
/* 000169 */ 				}) ();
/* 000169 */ 			}
/* 000171 */ 			else {
/* 000173 */ 				(function () {
/* 000173 */ 					var __accu0__ = s_macro_args;
/* 000173 */ 					return __call__ (__accu0__.append, __accu0__, recomposed_arg_value);
/* 000173 */ 				}) ();
/* 000173 */ 			}
/* 000173 */ 		}
/* 000175 */ 		return __add__ (s, (function () {
/* 000175 */ 			var __accu0__ = '';
/* 000175 */ 			return __call__ (__accu0__.join, __accu0__, s_macro_args);
/* 000175 */ 		}) ());
/* 000175 */ 	});}
/* 000175 */ });
/* 000179 */ export var FeatureHref =  __class__ ('FeatureHref', [SimpleLatexDefinitionsFeature], {
/* 000179 */ 	__module__: __name__,
/* 000181 */ 	feature_name: 'href',
/* 000182 */ 	feature_title: 'Hyperlinks',
/* 000184 */ 	latex_definitions: dict ({'macros': [__call__ (HrefHyperlinkMacro, null, __kwargtrans__ ({macroname: 'href', command_arguments: tuple (['target_href', 'display_text'])})), __call__ (HrefHyperlinkMacro, null, __kwargtrans__ ({macroname: 'url', command_arguments: tuple (['target_href'])})), __call__ (HrefHyperlinkMacro, null, __kwargtrans__ ({macroname: 'email', command_arguments: tuple (['target_email'])}))]}),
/* 000201 */ 	HrefHyperlinkMacroClass: HrefHyperlinkMacro
/* 000201 */ });
/* 000204 */ export var FeatureClass = FeatureHref;
/* 000006 */ 
//# sourceMappingURL=flm.feature.href.map