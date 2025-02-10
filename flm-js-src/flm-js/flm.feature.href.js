/* 000001 */ // Transcrypt'ed from Python, 2025-02-10 09:59:07
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
/* 000006 */ export {FLMArgumentSpec, SimpleLatexDefinitionsFeature, ParsedArgumentsInfo, latexnodes_parsers, latexnodes_nodes, FLMMacroSpecBase};
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
/* 000046 */ export var _rx_url_unsafe = (function () {
/* 000046 */ 	var __accu0__ = re;
/* 000046 */ 	return __call__ (__accu0__.compile, __accu0__, '[#%{}\\\\]');
/* 000046 */ }) ();
/* 000050 */ export var HrefHyperlinkMacro =  __class__ ('HrefHyperlinkMacro', [FLMMacroSpecBase], {
/* 000050 */ 	__module__: __name__,
/* 000052 */ 	allowed_in_standalone_mode: true,
/* 000054 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000054 */ 		var command_arguments = tuple (['target_href', 'target_email', 'display_text']);
/* 000054 */ 		var ref_type = 'href';
/* 000054 */ 		if (arguments.length) {
/* 000054 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000054 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000054 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000054 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000054 */ 					switch (__attrib0__) {
/* 000054 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000054 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000054 */ 						case 'command_arguments': var command_arguments = __allkwargs0__ [__attrib0__]; break;
/* 000054 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000054 */ 					}
/* 000054 */ 				}
/* 000054 */ 			}
/* 000054 */ 		}
/* 000054 */ 		else {
/* 000054 */ 		}
/* 000061 */ 		var arguments_spec_list = (function () {
/* 000061 */ 			var __accu0__ = self;
/* 000061 */ 			return __call__ (__accu0__._get_arguments_spec_list, __accu0__, command_arguments);
/* 000061 */ 		}) ();
/* 000062 */ 		__call__ (__call__ (__super__, null, HrefHyperlinkMacro, '__init__'), null, self, __kwargtrans__ ({macroname: macroname, arguments_spec_list: arguments_spec_list}));
/* 000066 */ 		self.command_arguments = command_arguments;
/* 000067 */ 		self.ref_type = ref_type;
/* 000069 */ 		self.command_argnames = (function () {
/* 000069 */ 			var __accu0__ = [];
/* 000069 */ 			var __iterable0__ = arguments_spec_list;
/* 000069 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000069 */ 				var c = __getitem__ (__iterable0__, __index0__);
/* 000069 */ 				(function () {
/* 000069 */ 					var __accu1__ = __accu0__;
/* 000069 */ 					return __call__ (__accu1__.append, __accu1__, c.argname);
/* 000069 */ 				}) ();
/* 000069 */ 			}
/* 000069 */ 			return __accu0__;
/* 000069 */ 		}) ();
/* 000071 */ 		if (__t__ (__in__ ('display_text', self.command_argnames))) {
/* 000074 */ 			self._flm_main_text_argument = 'display_text';
/* 000074 */ 		}
/* 000074 */ 	});},
/* 000077 */ 	_fields: tuple (['macroname', 'command_arguments', 'ref_type']),
/* 000081 */ 	get _get_arguments_spec_list () {return __getcm__ (this, function (cls, command_arguments) {
/* 000081 */ 		if (arguments.length) {
/* 000081 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000081 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000081 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000081 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000081 */ 					switch (__attrib0__) {
/* 000081 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000081 */ 						case 'command_arguments': var command_arguments = __allkwargs0__ [__attrib0__]; break;
/* 000081 */ 					}
/* 000081 */ 				}
/* 000081 */ 			}
/* 000081 */ 		}
/* 000081 */ 		else {
/* 000081 */ 		}
/* 000082 */ 		return (function () {
/* 000082 */ 			var __accu0__ = [];
/* 000082 */ 			var __iterable0__ = command_arguments;
/* 000082 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000084 */ 				var cmdarg = __getitem__ (__iterable0__, __index0__);
/* 000084 */ 				(function () {
/* 000084 */ 					var __accu1__ = __accu0__;
/* 000084 */ 					return __call__ (__accu1__.append, __accu1__, __getitem__ (_href_arg_specs, cmdarg));
/* 000084 */ 				}) ();
/* 000084 */ 			}
/* 000084 */ 			return __accu0__;
/* 000084 */ 		}) ();
/* 000084 */ 	});},
/* 000088 */ 	get pretty_url () {return __getcm__ (this, function (cls, target_href) {
/* 000088 */ 		if (arguments.length) {
/* 000088 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000088 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000088 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000088 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000088 */ 					switch (__attrib0__) {
/* 000088 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000088 */ 						case 'target_href': var target_href = __allkwargs0__ [__attrib0__]; break;
/* 000088 */ 					}
/* 000088 */ 				}
/* 000088 */ 			}
/* 000088 */ 		}
/* 000088 */ 		else {
/* 000088 */ 		}
/* 000089 */ 		var url_display = __call__ (str, null, target_href);
/* 000090 */ 		var __iterable0__ = tuple (['http://', 'https://', 'mailto:']);
/* 000090 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000090 */ 			var prefix = __getitem__ (__iterable0__, __index0__);
/* 000091 */ 			if (__t__ ((function () {
/* 000091 */ 				var __accu0__ = url_display;
/* 000091 */ 				return __call__ (__accu0__.startswith, __accu0__, prefix);
/* 000091 */ 			}) ())) {
/* 000092 */ 				var url_display = __getslice__ (url_display, __call__ (len, null, prefix), null, 1);
/* 000092 */ 				break;
/* 000092 */ 			}
/* 000092 */ 		}
/* 000094 */ 		var url_display = (function () {
/* 000094 */ 			var __accu0__ = url_display;
/* 000094 */ 			return __call__ (__accu0__.rstrip, __accu0__, '/#?');
/* 000094 */ 		}) ();
/* 000095 */ 		return url_display;
/* 000095 */ 	});},
/* 000098 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000098 */ 		if (arguments.length) {
/* 000098 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000098 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000098 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000098 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000098 */ 					switch (__attrib0__) {
/* 000098 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000098 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000098 */ 					}
/* 000098 */ 				}
/* 000098 */ 			}
/* 000098 */ 		}
/* 000098 */ 		else {
/* 000098 */ 		}
/* 000100 */ 		var node_args = (function () {
/* 000100 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000100 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, self.command_argnames);
/* 000100 */ 		}) ();
/* 000104 */ 		var target_href = null;
/* 000105 */ 		var display_text_nodelist = null;
/* 000107 */ 		if (__t__ (__in__ ('target_href', node_args))) {
/* 000108 */ 			var target_href = (function () {
/* 000108 */ 				var __accu0__ = __getitem__ (node_args, 'target_href');
/* 000108 */ 				return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000108 */ 			}) ();
/* 000108 */ 		}
/* 000109 */ 		else if (__t__ (__in__ ('target_email', node_args))) {
/* 000110 */ 			var target_href = __add__ ('mailto:', (function () {
/* 000110 */ 				var __accu0__ = __getitem__ (node_args, 'target_email');
/* 000110 */ 				return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000110 */ 			}) ());
/* 000110 */ 		}
/* 000111 */ 		else {
/* 000112 */ 			var __except0__ = __call__ (ValueError, null, 'FLM Internal Error: no URL or hyper reference provided to href-like macro');
/* 000112 */ 			__except0__.__cause__ = null;
/* 000112 */ 			throw __except0__;
/* 000112 */ 		}
/* 000116 */ 		if (__t__ (__in__ ('display_text', node_args))) {
/* 000117 */ 			var display_text_nodelist = (function () {
/* 000117 */ 				var __accu0__ = __getitem__ (node_args, 'display_text');
/* 000117 */ 				return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000117 */ 			}) ();
/* 000117 */ 		}
/* 000119 */ 		node.flm_href_info = dict ({'target_href': target_href, 'display_text_nodelist': display_text_nodelist});
/* 000119 */ 	});},
/* 000124 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000124 */ 		if (arguments.length) {
/* 000124 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000124 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000124 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000124 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000124 */ 					switch (__attrib0__) {
/* 000124 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000124 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000124 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000124 */ 					}
/* 000124 */ 				}
/* 000124 */ 			}
/* 000124 */ 		}
/* 000124 */ 		else {
/* 000124 */ 		}
/* 000126 */ 		var target_href = __getitem__ (node.flm_href_info, 'target_href');
/* 000127 */ 		var display_text_nodelist = __getitem__ (node.flm_href_info, 'display_text_nodelist');
/* 000130 */ 		if (__t__ (display_text_nodelist === null)) {
/* 000131 */ 			var ps = (function () {
/* 000131 */ 				var __accu0__ = node.parsing_state;
/* 000131 */ 				return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ ({is_block_level: false}));
/* 000131 */ 			}) ();
/* 000132 */ 			var display_text_nodelist = (function () {
/* 000132 */ 				var __accu0__ = node.latex_walker;
/* 000134 */ 				return __call__ (__accu0__.make_nodelist, __accu0__, [(function () {
/* 000134 */ 					var __accu1__ = node.latex_walker;
/* 000137 */ 					return __call__ (__accu1__.make_node, __accu1__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({parsing_state: ps, chars: (function () {
/* 000137 */ 						var __accu2__ = self;
/* 000137 */ 						return __call__ (__accu2__.pretty_url, __accu2__, target_href);
/* 000137 */ 					}) (), pos: node.pos, pos_end: node.pos}));
/* 000137 */ 				}) ()], __kwargtrans__ ({parsing_state: ps}));
/* 000137 */ 			}) ();
/* 000137 */ 		}
/* 000145 */ 		return (function () {
/* 000145 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000145 */ 			return __call__ (__accu0__.render_link, __accu0__, self.ref_type, target_href, display_text_nodelist, render_context);
/* 000145 */ 		}) ();
/* 000145 */ 	});},
/* 000153 */ 	get recompose_pure_latex () {return __get__ (this, function (self, node, recomposer) {
/* 000153 */ 		if (arguments.length) {
/* 000153 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000153 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000153 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000153 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000153 */ 					switch (__attrib0__) {
/* 000153 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000153 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000153 */ 						case 'recomposer': var recomposer = __allkwargs0__ [__attrib0__]; break;
/* 000153 */ 					}
/* 000153 */ 				}
/* 000153 */ 			}
/* 000153 */ 		}
/* 000153 */ 		else {
/* 000153 */ 		}
/* 000155 */ 		var s = __add__ ('\\', node.macroname);
/* 000162 */ 		var s_macro_args = [];
/* 000164 */ 		if (__t__ (node.nodeargd !== null)) {
/* 000167 */ 			var __iterable0__ = __call__ (zip, null, self.command_argnames, node.nodeargd.argnlist);
/* 000167 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000167 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000167 */ 				var argname = __left0__ [0];
/* 000167 */ 				var nodearg = __left0__ [1];
/* 000174 */ 				var recomposed_arg_value = (function () {
/* 000174 */ 					var __accu0__ = recomposer;
/* 000174 */ 					return __call__ (__accu0__.subrecompose, __accu0__, nodearg);
/* 000174 */ 				}) ();
/* 000176 */ 				if (__t__ (__in__ (argname, tuple (['target_href', 'target_email'])))) {
/* 000177 */ 					var slenm1 = __sub__ (__call__ (len, null, recomposed_arg_value), 1);
/* 000178 */ 					(function () {
/* 000178 */ 						var __accu0__ = s_macro_args;
/* 000180 */ 						return __call__ (__accu0__.append, __accu0__, __add__ (__add__ (__getitem__ (recomposed_arg_value, 0), (function () {
/* 000180 */ 							var __accu1__ = _rx_url_unsafe;
/* 000180 */ 							return __call__ (__accu1__.sub, __accu1__, (function __lambda__ (m) {
/* 000180 */ 								if (arguments.length) {
/* 000180 */ 									var __ilastarg0__ = arguments.length - 1;
/* 000180 */ 									if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000180 */ 										var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000180 */ 										for (var __attrib0__ in __allkwargs0__) {
/* 000180 */ 											switch (__attrib0__) {
/* 000180 */ 												case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000180 */ 											}
/* 000180 */ 										}
/* 000180 */ 									}
/* 000180 */ 								}
/* 000180 */ 								else {
/* 000180 */ 								}
/* 000181 */ 								return __add__ ('\\', (function () {
/* 000181 */ 									var __accu2__ = m;
/* 000181 */ 									return __call__ (__accu2__.group, __accu2__, 0);
/* 000181 */ 								}) ());
/* 000181 */ 							}), __getslice__ (recomposed_arg_value, 1, slenm1, 1));
/* 000181 */ 						}) ()), __getitem__ (recomposed_arg_value, slenm1)));
/* 000181 */ 					}) ();
/* 000181 */ 				}
/* 000185 */ 				else {
/* 000187 */ 					(function () {
/* 000187 */ 						var __accu0__ = s_macro_args;
/* 000187 */ 						return __call__ (__accu0__.append, __accu0__, recomposed_arg_value);
/* 000187 */ 					}) ();
/* 000187 */ 				}
/* 000187 */ 			}
/* 000187 */ 		}
/* 000189 */ 		var recomposed = __add__ (s, (function () {
/* 000189 */ 			var __accu0__ = '';
/* 000189 */ 			return __call__ (__accu0__.join, __accu0__, s_macro_args);
/* 000189 */ 		}) ());
/* 000190 */ 		return recomposed;
/* 000190 */ 	});}
/* 000190 */ });
/* 000194 */ export var FeatureHref =  __class__ ('FeatureHref', [SimpleLatexDefinitionsFeature], {
/* 000194 */ 	__module__: __name__,
/* 000196 */ 	feature_name: 'href',
/* 000197 */ 	feature_title: 'Hyperlinks',
/* 000199 */ 	latex_definitions: dict ({'macros': [__call__ (HrefHyperlinkMacro, null, __kwargtrans__ ({macroname: 'href', command_arguments: tuple (['target_href', 'display_text'])})), __call__ (HrefHyperlinkMacro, null, __kwargtrans__ ({macroname: 'url', command_arguments: tuple (['target_href'])})), __call__ (HrefHyperlinkMacro, null, __kwargtrans__ ({macroname: 'email', command_arguments: tuple (['target_email'])}))]}),
/* 000216 */ 	HrefHyperlinkMacroClass: HrefHyperlinkMacro
/* 000216 */ });
/* 000219 */ export var FeatureClass = FeatureHref;
/* 000006 */ 
//# sourceMappingURL=flm.feature.href.map