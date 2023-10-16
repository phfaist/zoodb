/* 000001 */ // Transcrypt'ed from Python, 2023-10-16 20:52:35
/* 000006 */ var logging = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000015 */ import {SimpleLatexDefinitionsFeature} from './flm.feature._base.js';
/* 000013 */ import {FLMArgumentSpec, FLMMacroSpecBase} from './flm.flmspecinfo.js';
/* 000011 */ import {ParsedArgumentsInfo} from './pylatexenc.latexnodes.js';
/* 000010 */ import * as latexnodes_nodes from './pylatexenc.latexnodes.nodes.js';
/* 000009 */ import * as latexnodes_parsers from './pylatexenc.latexnodes.parsers.js';
/* 000006 */ import * as __module_logging__ from './logging.js';
/* 000006 */ __nest__ (logging, '', __module_logging__);
/* 000006 */ export {latexnodes_parsers, ParsedArgumentsInfo, FLMArgumentSpec, SimpleLatexDefinitionsFeature, latexnodes_nodes, FLMMacroSpecBase};
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
/* 000057 */ 	_fields: tuple (['macroname', 'command_arguments', 'ref_type']),
/* 000061 */ 	get _get_arguments_spec_list () {return __getcm__ (this, function (cls, command_arguments) {
/* 000061 */ 		if (arguments.length) {
/* 000061 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000061 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000061 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000061 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000061 */ 					switch (__attrib0__) {
/* 000061 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000061 */ 						case 'command_arguments': var command_arguments = __allkwargs0__ [__attrib0__]; break;
/* 000061 */ 					}
/* 000061 */ 				}
/* 000061 */ 			}
/* 000061 */ 		}
/* 000061 */ 		else {
/* 000061 */ 		}
/* 000062 */ 		return (function () {
/* 000062 */ 			var __accu0__ = [];
/* 000062 */ 			var __iterable0__ = command_arguments;
/* 000062 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000064 */ 				var cmdarg = __getitem__ (__iterable0__, __index0__);
/* 000064 */ 				(function () {
/* 000064 */ 					var __accu1__ = __accu0__;
/* 000064 */ 					return __call__ (__accu1__.append, __accu1__, __getitem__ (_href_arg_specs, cmdarg));
/* 000064 */ 				}) ();
/* 000064 */ 			}
/* 000064 */ 			return __accu0__;
/* 000064 */ 		}) ();
/* 000064 */ 	});},
/* 000068 */ 	get pretty_url () {return __getcm__ (this, function (cls, target_href) {
/* 000068 */ 		if (arguments.length) {
/* 000068 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000068 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000068 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000068 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000068 */ 					switch (__attrib0__) {
/* 000068 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000068 */ 						case 'target_href': var target_href = __allkwargs0__ [__attrib0__]; break;
/* 000068 */ 					}
/* 000068 */ 				}
/* 000068 */ 			}
/* 000068 */ 		}
/* 000068 */ 		else {
/* 000068 */ 		}
/* 000069 */ 		var url_display = __call__ (str, null, target_href);
/* 000070 */ 		var __iterable0__ = tuple (['http://', 'https://', 'mailto:']);
/* 000070 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000070 */ 			var prefix = __getitem__ (__iterable0__, __index0__);
/* 000071 */ 			if (__t__ ((function () {
/* 000071 */ 				var __accu0__ = url_display;
/* 000071 */ 				return __call__ (__accu0__.startswith, __accu0__, prefix);
/* 000071 */ 			}) ())) {
/* 000072 */ 				var url_display = __getslice__ (url_display, __call__ (len, null, prefix), null, 1);
/* 000072 */ 				break;
/* 000072 */ 			}
/* 000072 */ 		}
/* 000074 */ 		var url_display = (function () {
/* 000074 */ 			var __accu0__ = url_display;
/* 000074 */ 			return __call__ (__accu0__.rstrip, __accu0__, '/#?');
/* 000074 */ 		}) ();
/* 000075 */ 		return url_display;
/* 000075 */ 	});},
/* 000078 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000078 */ 		if (arguments.length) {
/* 000078 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000078 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000078 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000078 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000078 */ 					switch (__attrib0__) {
/* 000078 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000078 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000078 */ 					}
/* 000078 */ 				}
/* 000078 */ 			}
/* 000078 */ 		}
/* 000078 */ 		else {
/* 000078 */ 		}
/* 000080 */ 		var node_args = (function () {
/* 000080 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000080 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, self.command_arguments);
/* 000080 */ 		}) ();
/* 000084 */ 		var target_href = null;
/* 000085 */ 		var display_text_nodelist = null;
/* 000087 */ 		if (__t__ (__in__ ('target_href', node_args))) {
/* 000088 */ 			var target_href = (function () {
/* 000088 */ 				var __accu0__ = __getitem__ (node_args, 'target_href');
/* 000088 */ 				return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000088 */ 			}) ();
/* 000088 */ 		}
/* 000089 */ 		else if (__t__ (__in__ ('target_email', node_args))) {
/* 000090 */ 			var target_href = __add__ ('mailto:', (function () {
/* 000090 */ 				var __accu0__ = __getitem__ (node_args, 'target_email');
/* 000090 */ 				return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000090 */ 			}) ());
/* 000090 */ 		}
/* 000091 */ 		else {
/* 000092 */ 			var __except0__ = __call__ (ValueError, null, 'FLM Internal Error: no URL or hyper reference provided to href-like macro');
/* 000092 */ 			__except0__.__cause__ = null;
/* 000092 */ 			throw __except0__;
/* 000092 */ 		}
/* 000096 */ 		if (__t__ (__in__ ('display_text', node_args))) {
/* 000097 */ 			var display_text_nodelist = (function () {
/* 000097 */ 				var __accu0__ = __getitem__ (node_args, 'display_text');
/* 000097 */ 				return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000097 */ 			}) ();
/* 000097 */ 		}
/* 000099 */ 		node.flm_href_info = dict ({'target_href': target_href, 'display_text_nodelist': display_text_nodelist});
/* 000099 */ 	});},
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
/* 000106 */ 		var target_href = __getitem__ (node.flm_href_info, 'target_href');
/* 000107 */ 		var display_text_nodelist = __getitem__ (node.flm_href_info, 'display_text_nodelist');
/* 000110 */ 		if (__t__ (display_text_nodelist === null)) {
/* 000111 */ 			var display_text_nodelist = (function () {
/* 000111 */ 				var __accu0__ = node.latex_walker;
/* 000113 */ 				return __call__ (__accu0__.make_nodelist, __accu0__, [(function () {
/* 000113 */ 					var __accu1__ = node.latex_walker;
/* 000116 */ 					return __call__ (__accu1__.make_node, __accu1__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({parsing_state: node.parsing_state, chars: (function () {
/* 000116 */ 						var __accu2__ = self;
/* 000116 */ 						return __call__ (__accu2__.pretty_url, __accu2__, target_href);
/* 000116 */ 					}) (), pos: node.pos, pos_end: node.pos}));
/* 000116 */ 				}) ()], __kwargtrans__ ({parsing_state: node.parsing_state}));
/* 000116 */ 			}) ();
/* 000116 */ 		}
/* 000124 */ 		return (function () {
/* 000124 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000124 */ 			return __call__ (__accu0__.render_link, __accu0__, self.ref_type, target_href, display_text_nodelist, render_context);
/* 000124 */ 		}) ();
/* 000124 */ 	});}
/* 000124 */ });
/* 000134 */ export var FeatureHref =  __class__ ('FeatureHref', [SimpleLatexDefinitionsFeature], {
/* 000134 */ 	__module__: __name__,
/* 000136 */ 	feature_name: 'href',
/* 000137 */ 	feature_title: 'Hyperlinks',
/* 000139 */ 	latex_definitions: dict ({'macros': [__call__ (HrefHyperlinkMacro, null, __kwargtrans__ ({macroname: 'href', command_arguments: tuple (['target_href', 'display_text'])})), __call__ (HrefHyperlinkMacro, null, __kwargtrans__ ({macroname: 'url', command_arguments: tuple (['target_href'])})), __call__ (HrefHyperlinkMacro, null, __kwargtrans__ ({macroname: 'email', command_arguments: tuple (['target_email'])}))]})
/* 000139 */ });
/* 000157 */ export var FeatureClass = FeatureHref;
/* 000006 */ 
//# sourceMappingURL=flm.feature.href.map