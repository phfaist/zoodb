/* 000001 */ // Transcrypt'ed from Python, 2023-05-13 11:51:24
/* 000006 */ var logging = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000015 */ import {SimpleLatexDefinitionsFeature} from './flm.feature._base.js';
/* 000013 */ import {FLMArgumentSpec, FLMMacroSpecBase} from './flm.flmspecinfo.js';
/* 000011 */ import {ParsedArgumentsInfo} from './pylatexenc.latexnodes.js';
/* 000010 */ import * as latexnodes_nodes from './pylatexenc.latexnodes.nodes.js';
/* 000009 */ import * as latexnodes_parsers from './pylatexenc.latexnodes.parsers.js';
/* 000006 */ import * as __module_logging__ from './logging.js';
/* 000006 */ __nest__ (logging, '', __module_logging__);
/* 000006 */ export {ParsedArgumentsInfo, FLMArgumentSpec, latexnodes_parsers, SimpleLatexDefinitionsFeature, latexnodes_nodes, FLMMacroSpecBase};
/* 000001 */ var __name__ = 'flm.feature.href';
/* 000007 */ export var logger = (function () {
/* 000007 */ 	var __accu0__ = logging;
/* 000007 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000007 */ }) ();
/* 000020 */ export var _href_arg_specs = dict ({'target_href': __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: (function () {
/* 000020 */ 	var __accu0__ = latexnodes_parsers;
/* 000020 */ 	return __call__ (__accu0__.LatexDelimitedVerbatimParser, __accu0__, tuple (['{', '}']));
/* 000024 */ }) (), argname: 'target_href'})), 'target_email': __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: (function () {
/* 000024 */ 	var __accu0__ = latexnodes_parsers;
/* 000024 */ 	return __call__ (__accu0__.LatexDelimitedVerbatimParser, __accu0__, tuple (['{', '}']));
/* 000027 */ }) (), argname: 'target_email'})), 'display_text': __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: '{', argname: 'display_text'}))});
/* 000034 */ export var HrefHyperlinkMacro =  __class__ ('HrefHyperlinkMacro', [FLMMacroSpecBase], {
/* 000034 */ 	__module__: __name__,
/* 000036 */ 	allowed_in_standalone_mode: true,
/* 000038 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000038 */ 		var command_arguments = tuple (['target_href', 'target_email', 'display_text']);
/* 000038 */ 		var ref_type = 'href';
/* 000038 */ 		if (arguments.length) {
/* 000038 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000038 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000038 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000038 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000038 */ 					switch (__attrib0__) {
/* 000038 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000038 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000038 */ 						case 'command_arguments': var command_arguments = __allkwargs0__ [__attrib0__]; break;
/* 000038 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000038 */ 					}
/* 000038 */ 				}
/* 000038 */ 			}
/* 000038 */ 		}
/* 000038 */ 		else {
/* 000038 */ 		}
/* 000047 */ 		__call__ (__call__ (__super__, null, HrefHyperlinkMacro, '__init__'), null, self, __kwargtrans__ ({macroname: macroname, arguments_spec_list: (function () {
/* 000047 */ 			var __accu0__ = self;
/* 000047 */ 			return __call__ (__accu0__._get_arguments_spec_list, __accu0__, command_arguments);
/* 000047 */ 		}) ()}));
/* 000049 */ 		self.command_arguments = (function () {
/* 000049 */ 			var __accu0__ = [];
/* 000049 */ 			var __iterable0__ = command_arguments;
/* 000049 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000049 */ 				var c = __getitem__ (__iterable0__, __index0__);
/* 000049 */ 				(function () {
/* 000049 */ 					var __accu1__ = __accu0__;
/* 000049 */ 					return __call__ (__accu1__.append, __accu1__, (function () {
/* 000049 */ 						var __accu2__ = c;
/* 000049 */ 						return __call__ (__accu2__.strip, __accu2__, '[]');
/* 000049 */ 					}) ());
/* 000049 */ 				}) ();
/* 000049 */ 			}
/* 000049 */ 			return __accu0__;
/* 000049 */ 		}) ();
/* 000050 */ 		self.ref_type = ref_type;
/* 000052 */ 		if (__t__ (__in__ ('display_text', command_arguments))) {
/* 000055 */ 			self._flm_main_text_argument = 'display_text';
/* 000055 */ 		}
/* 000055 */ 	});},
/* 000058 */ 	get _get_arguments_spec_list () {return __getcm__ (this, function (cls, command_arguments) {
/* 000058 */ 		if (arguments.length) {
/* 000058 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000058 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000058 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000058 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000058 */ 					switch (__attrib0__) {
/* 000058 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000058 */ 						case 'command_arguments': var command_arguments = __allkwargs0__ [__attrib0__]; break;
/* 000058 */ 					}
/* 000058 */ 				}
/* 000058 */ 			}
/* 000058 */ 		}
/* 000058 */ 		else {
/* 000058 */ 		}
/* 000059 */ 		return (function () {
/* 000059 */ 			var __accu0__ = [];
/* 000059 */ 			var __iterable0__ = command_arguments;
/* 000059 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000061 */ 				var cmdarg = __getitem__ (__iterable0__, __index0__);
/* 000061 */ 				(function () {
/* 000061 */ 					var __accu1__ = __accu0__;
/* 000061 */ 					return __call__ (__accu1__.append, __accu1__, __getitem__ (_href_arg_specs, cmdarg));
/* 000061 */ 				}) ();
/* 000061 */ 			}
/* 000061 */ 			return __accu0__;
/* 000061 */ 		}) ();
/* 000061 */ 	});},
/* 000065 */ 	get pretty_url () {return __getcm__ (this, function (cls, target_href) {
/* 000065 */ 		if (arguments.length) {
/* 000065 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000065 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000065 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000065 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000065 */ 					switch (__attrib0__) {
/* 000065 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000065 */ 						case 'target_href': var target_href = __allkwargs0__ [__attrib0__]; break;
/* 000065 */ 					}
/* 000065 */ 				}
/* 000065 */ 			}
/* 000065 */ 		}
/* 000065 */ 		else {
/* 000065 */ 		}
/* 000066 */ 		var url_display = __call__ (str, null, target_href);
/* 000067 */ 		var __iterable0__ = tuple (['http://', 'https://', 'mailto:']);
/* 000067 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000067 */ 			var prefix = __getitem__ (__iterable0__, __index0__);
/* 000068 */ 			if (__t__ ((function () {
/* 000068 */ 				var __accu0__ = url_display;
/* 000068 */ 				return __call__ (__accu0__.startswith, __accu0__, prefix);
/* 000068 */ 			}) ())) {
/* 000069 */ 				var url_display = __getslice__ (url_display, __call__ (len, null, prefix), null, 1);
/* 000069 */ 				break;
/* 000069 */ 			}
/* 000069 */ 		}
/* 000071 */ 		var url_display = (function () {
/* 000071 */ 			var __accu0__ = url_display;
/* 000071 */ 			return __call__ (__accu0__.rstrip, __accu0__, '/#?');
/* 000071 */ 		}) ();
/* 000072 */ 		return url_display;
/* 000072 */ 	});},
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
/* 000077 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, self.command_arguments);
/* 000077 */ 		}) ();
/* 000081 */ 		var target_href = null;
/* 000082 */ 		var display_text_nodelist = null;
/* 000084 */ 		if (__t__ (__in__ ('target_href', node_args))) {
/* 000085 */ 			var target_href = (function () {
/* 000085 */ 				var __accu0__ = __getitem__ (node_args, 'target_href');
/* 000085 */ 				return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000085 */ 			}) ();
/* 000085 */ 		}
/* 000086 */ 		else if (__t__ (__in__ ('target_email', node_args))) {
/* 000087 */ 			var target_href = __add__ ('mailto:', (function () {
/* 000087 */ 				var __accu0__ = __getitem__ (node_args, 'target_email');
/* 000087 */ 				return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000087 */ 			}) ());
/* 000087 */ 		}
/* 000088 */ 		else {
/* 000089 */ 			var __except0__ = __call__ (ValueError, null, 'FLM Internal Error: no URL or hyper reference provided to href-like macro');
/* 000089 */ 			__except0__.__cause__ = null;
/* 000089 */ 			throw __except0__;
/* 000089 */ 		}
/* 000093 */ 		if (__t__ (__in__ ('display_text', node_args))) {
/* 000094 */ 			var display_text_nodelist = (function () {
/* 000094 */ 				var __accu0__ = __getitem__ (node_args, 'display_text');
/* 000094 */ 				return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000094 */ 			}) ();
/* 000094 */ 		}
/* 000096 */ 		node.flm_href_info = dict ({'target_href': target_href, 'display_text_nodelist': display_text_nodelist});
/* 000096 */ 	});},
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
/* 000103 */ 		var target_href = __getitem__ (node.flm_href_info, 'target_href');
/* 000104 */ 		var display_text_nodelist = __getitem__ (node.flm_href_info, 'display_text_nodelist');
/* 000107 */ 		if (__t__ (display_text_nodelist === null)) {
/* 000108 */ 			var display_text_nodelist = (function () {
/* 000108 */ 				var __accu0__ = node.latex_walker;
/* 000110 */ 				return __call__ (__accu0__.make_nodelist, __accu0__, [(function () {
/* 000110 */ 					var __accu1__ = node.latex_walker;
/* 000113 */ 					return __call__ (__accu1__.make_node, __accu1__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({parsing_state: node.parsing_state, chars: (function () {
/* 000113 */ 						var __accu2__ = self;
/* 000113 */ 						return __call__ (__accu2__.pretty_url, __accu2__, target_href);
/* 000113 */ 					}) (), pos: node.pos, pos_end: node.pos}));
/* 000113 */ 				}) ()], __kwargtrans__ ({parsing_state: node.parsing_state}));
/* 000113 */ 			}) ();
/* 000113 */ 		}
/* 000121 */ 		return (function () {
/* 000121 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000121 */ 			return __call__ (__accu0__.render_link, __accu0__, self.ref_type, target_href, display_text_nodelist, render_context);
/* 000121 */ 		}) ();
/* 000121 */ 	});}
/* 000121 */ });
/* 000131 */ export var FeatureHref =  __class__ ('FeatureHref', [SimpleLatexDefinitionsFeature], {
/* 000131 */ 	__module__: __name__,
/* 000133 */ 	feature_name: 'href',
/* 000134 */ 	feature_title: 'Hyperlinks',
/* 000136 */ 	latex_definitions: dict ({'macros': [__call__ (HrefHyperlinkMacro, null, __kwargtrans__ ({macroname: 'href', command_arguments: tuple (['target_href', 'display_text'])})), __call__ (HrefHyperlinkMacro, null, __kwargtrans__ ({macroname: 'url', command_arguments: tuple (['target_href'])})), __call__ (HrefHyperlinkMacro, null, __kwargtrans__ ({macroname: 'email', command_arguments: tuple (['target_email'])}))]})
/* 000136 */ });
/* 000154 */ export var FeatureClass = FeatureHref;
/* 000006 */ 
//# sourceMappingURL=flm.feature.href.map