/* 000001 */ // Transcrypt'ed from Python, 2026-06-30 21:51:24
/* 000014 */ var logging = {};
/* 000014 */ var re = {};
/* 000014 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000025 */ import {SimpleLatexDefinitionsFeature} from './flm.feature._base.js';
/* 000023 */ import {FLMMacroSpecBase} from './flm.flmspecinfo.js';
/* 000022 */ import {FLMArgumentSpec} from './flm.flmenvironment.js';
/* 000020 */ import {ParsedArgumentsInfo} from './pylatexenc.latexnodes.js';
/* 000019 */ import * as latexnodes_nodes from './pylatexenc.latexnodes.nodes.js';
/* 000018 */ import * as latexnodes_parsers from './pylatexenc.latexnodes.parsers.js';
/* 000015 */ import * as __module_logging__ from './logging.js';
/* 000015 */ __nest__ (logging, '', __module_logging__);
/* 000014 */ import * as __module_re__ from './re.js';
/* 000014 */ __nest__ (re, '', __module_re__);
/* 000014 */ export {latexnodes_nodes, FLMMacroSpecBase, ParsedArgumentsInfo, SimpleLatexDefinitionsFeature, latexnodes_parsers, FLMArgumentSpec};
/* 000001 */ var __name__ = 'flm.feature.href';
/* 000016 */ export var logger = (function () {
/* 000016 */ 	var __accu0__ = logging;
/* 000016 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000016 */ }) ();
/* 000030 */ export var _href_arg_specs = dict ({'target_href': __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: (function () {
/* 000030 */ 	var __accu0__ = latexnodes_parsers;
/* 000030 */ 	return __call__ (__accu0__.LatexDelimitedVerbatimParser, __accu0__, tuple (['{', '}']));
/* 000034 */ }) (), argname: 'target_href'})), 'target_email': __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: (function () {
/* 000034 */ 	var __accu0__ = latexnodes_parsers;
/* 000034 */ 	return __call__ (__accu0__.LatexDelimitedVerbatimParser, __accu0__, tuple (['{', '}']));
/* 000047 */ }) (), argname: 'target_email'})), 'display_text': __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: '{', argname: 'display_text'})), 'target_Xhref': __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: '{', argname: 'target_href'})), 'target_Xemail': __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: '{', argname: 'target_email'}))});
/* 000054 */ export var _rx_url_unsafe = (function () {
/* 000054 */ 	var __accu0__ = re;
/* 000054 */ 	return __call__ (__accu0__.compile, __accu0__, '[#%{}\\\\]');
/* 000054 */ }) ();
/* 000058 */ export var HrefHyperlinkMacro =  __class__ ('HrefHyperlinkMacro', [FLMMacroSpecBase], {
/* 000058 */ 	__module__: __name__,
/* 000060 */ 	allowed_in_standalone_mode: true,
/* 000062 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000062 */ 		var command_arguments = tuple (['target_href', 'target_email', 'display_text']);
/* 000062 */ 		var ref_type = 'href';
/* 000062 */ 		if (arguments.length) {
/* 000062 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000062 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000062 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000062 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000062 */ 					switch (__attrib0__) {
/* 000062 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000062 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000062 */ 						case 'command_arguments': var command_arguments = __allkwargs0__ [__attrib0__]; break;
/* 000062 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000062 */ 					}
/* 000062 */ 				}
/* 000062 */ 			}
/* 000062 */ 		}
/* 000062 */ 		else {
/* 000062 */ 		}
/* 000079 */ 		var arguments_spec_list = (function () {
/* 000079 */ 			var __accu0__ = self;
/* 000079 */ 			return __call__ (__accu0__._get_arguments_spec_list, __accu0__, command_arguments);
/* 000079 */ 		}) ();
/* 000080 */ 		__call__ (__call__ (__super__, null, HrefHyperlinkMacro, '__init__'), null, self, __kwargtrans__ ({macroname: macroname, arguments_spec_list: arguments_spec_list}));
/* 000084 */ 		self.command_arguments = command_arguments;
/* 000085 */ 		self.ref_type = ref_type;
/* 000087 */ 		self.command_argnames = (function () {
/* 000087 */ 			var __accu0__ = [];
/* 000087 */ 			var __iterable0__ = arguments_spec_list;
/* 000087 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000087 */ 				var c = __getitem__ (__iterable0__, __index0__);
/* 000087 */ 				(function () {
/* 000087 */ 					var __accu1__ = __accu0__;
/* 000087 */ 					return __call__ (__accu1__.append, __accu1__, c.argname);
/* 000087 */ 				}) ();
/* 000087 */ 			}
/* 000087 */ 			return __accu0__;
/* 000087 */ 		}) ();
/* 000089 */ 		if (__t__ (__in__ ('display_text', self.command_argnames))) {
/* 000092 */ 			self._flm_main_text_argument = 'display_text';
/* 000092 */ 		}
/* 000092 */ 	});},
/* 000095 */ 	_fields: tuple (['macroname', 'command_arguments', 'ref_type']),
/* 000099 */ 	get _get_arguments_spec_list () {return __getcm__ (this, function (cls, command_arguments) {
/* 000099 */ 		if (arguments.length) {
/* 000099 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000099 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000099 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000099 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000099 */ 					switch (__attrib0__) {
/* 000099 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000099 */ 						case 'command_arguments': var command_arguments = __allkwargs0__ [__attrib0__]; break;
/* 000099 */ 					}
/* 000099 */ 				}
/* 000099 */ 			}
/* 000099 */ 		}
/* 000099 */ 		else {
/* 000099 */ 		}
/* 000100 */ 		return (function () {
/* 000100 */ 			var __accu0__ = [];
/* 000100 */ 			var __iterable0__ = command_arguments;
/* 000100 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000102 */ 				var cmdarg = __getitem__ (__iterable0__, __index0__);
/* 000102 */ 				(function () {
/* 000102 */ 					var __accu1__ = __accu0__;
/* 000102 */ 					return __call__ (__accu1__.append, __accu1__, __getitem__ (_href_arg_specs, cmdarg));
/* 000102 */ 				}) ();
/* 000102 */ 			}
/* 000102 */ 			return __accu0__;
/* 000102 */ 		}) ();
/* 000102 */ 	});},
/* 000106 */ 	get pretty_url () {return __getcm__ (this, function (cls, target_href) {
/* 000106 */ 		if (arguments.length) {
/* 000106 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000106 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000106 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000106 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000106 */ 					switch (__attrib0__) {
/* 000106 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000106 */ 						case 'target_href': var target_href = __allkwargs0__ [__attrib0__]; break;
/* 000106 */ 					}
/* 000106 */ 				}
/* 000106 */ 			}
/* 000106 */ 		}
/* 000106 */ 		else {
/* 000106 */ 		}
/* 000116 */ 		var url_display = __call__ (str, null, target_href);
/* 000117 */ 		var __iterable0__ = tuple (['http://', 'https://', 'mailto:']);
/* 000117 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000117 */ 			var prefix = __getitem__ (__iterable0__, __index0__);
/* 000118 */ 			if (__t__ ((function () {
/* 000118 */ 				var __accu0__ = url_display;
/* 000118 */ 				return __call__ (__accu0__.startswith, __accu0__, prefix);
/* 000118 */ 			}) ())) {
/* 000119 */ 				var url_display = __getslice__ (url_display, __call__ (len, null, prefix), null, 1);
/* 000119 */ 				break;
/* 000119 */ 			}
/* 000119 */ 		}
/* 000121 */ 		var url_display = (function () {
/* 000121 */ 			var __accu0__ = url_display;
/* 000121 */ 			return __call__ (__accu0__.rstrip, __accu0__, '/#?');
/* 000121 */ 		}) ();
/* 000122 */ 		return url_display;
/* 000122 */ 	});},
/* 000125 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000125 */ 		if (arguments.length) {
/* 000125 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000125 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000125 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000125 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000125 */ 					switch (__attrib0__) {
/* 000125 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000125 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000125 */ 					}
/* 000125 */ 				}
/* 000125 */ 			}
/* 000125 */ 		}
/* 000125 */ 		else {
/* 000125 */ 		}
/* 000127 */ 		var node_args = (function () {
/* 000127 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000127 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, self.command_argnames);
/* 000127 */ 		}) ();
/* 000131 */ 		var target_href = null;
/* 000132 */ 		var display_text_nodelist = null;
/* 000134 */ 		if (__t__ (__in__ ('target_href', node_args))) {
/* 000135 */ 			var target_href = (function () {
/* 000135 */ 				var __accu0__ = __getitem__ (node_args, 'target_href');
/* 000135 */ 				return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000135 */ 			}) ();
/* 000135 */ 		}
/* 000136 */ 		else if (__t__ (__in__ ('target_email', node_args))) {
/* 000137 */ 			var target_href = __add__ ('mailto:', (function () {
/* 000137 */ 				var __accu0__ = __getitem__ (node_args, 'target_email');
/* 000137 */ 				return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000137 */ 			}) ());
/* 000137 */ 		}
/* 000138 */ 		else {
/* 000139 */ 			var __except0__ = __call__ (ValueError, null, 'FLM Internal Error: no URL or hyper reference provided to href-like macro');
/* 000139 */ 			__except0__.__cause__ = null;
/* 000139 */ 			throw __except0__;
/* 000139 */ 		}
/* 000143 */ 		if (__t__ (__in__ ('display_text', node_args))) {
/* 000144 */ 			var display_text_nodelist = (function () {
/* 000144 */ 				var __accu0__ = __getitem__ (node_args, 'display_text');
/* 000144 */ 				return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000144 */ 			}) ();
/* 000144 */ 		}
/* 000146 */ 		node.flm_href_info = dict ({'target_href': target_href, 'display_text_nodelist': display_text_nodelist});
/* 000146 */ 	});},
/* 000151 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000151 */ 		if (arguments.length) {
/* 000151 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000151 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000151 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000151 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000151 */ 					switch (__attrib0__) {
/* 000151 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000151 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000151 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000151 */ 					}
/* 000151 */ 				}
/* 000151 */ 			}
/* 000151 */ 		}
/* 000151 */ 		else {
/* 000151 */ 		}
/* 000153 */ 		var target_href = __getitem__ (node.flm_href_info, 'target_href');
/* 000154 */ 		var display_text_nodelist = __getitem__ (node.flm_href_info, 'display_text_nodelist');
/* 000157 */ 		if (__t__ (display_text_nodelist === null)) {
/* 000158 */ 			var ps = (function () {
/* 000158 */ 				var __accu0__ = node.parsing_state;
/* 000158 */ 				return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ ({is_block_level: false}));
/* 000158 */ 			}) ();
/* 000159 */ 			var display_text_nodelist = (function () {
/* 000159 */ 				var __accu0__ = node.latex_walker;
/* 000161 */ 				return __call__ (__accu0__.make_nodelist, __accu0__, [(function () {
/* 000161 */ 					var __accu1__ = node.latex_walker;
/* 000164 */ 					return __call__ (__accu1__.make_node, __accu1__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({parsing_state: ps, chars: (function () {
/* 000164 */ 						var __accu2__ = self;
/* 000164 */ 						return __call__ (__accu2__.pretty_url, __accu2__, target_href);
/* 000164 */ 					}) (), pos: node.pos, pos_end: node.pos}));
/* 000164 */ 				}) ()], __kwargtrans__ ({parsing_state: ps}));
/* 000164 */ 			}) ();
/* 000164 */ 		}
/* 000172 */ 		return (function () {
/* 000172 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000172 */ 			return __call__ (__accu0__.render_link, __accu0__, self.ref_type, target_href, display_text_nodelist, render_context);
/* 000172 */ 		}) ();
/* 000172 */ 	});},
/* 000180 */ 	get recompose_pure_latex () {return __get__ (this, function (self, node, recomposer) {
/* 000180 */ 		if (arguments.length) {
/* 000180 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000180 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000180 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000180 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000180 */ 					switch (__attrib0__) {
/* 000180 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000180 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000180 */ 						case 'recomposer': var recomposer = __allkwargs0__ [__attrib0__]; break;
/* 000180 */ 					}
/* 000180 */ 				}
/* 000180 */ 			}
/* 000180 */ 		}
/* 000180 */ 		else {
/* 000180 */ 		}
/* 000182 */ 		var recopt_href = (function () {
/* 000182 */ 			var __accu0__ = recomposer;
/* 000182 */ 			return __call__ (__accu0__.get_options, __accu0__, 'href');
/* 000182 */ 		}) ();
/* 000184 */ 		var href_macro_mapping = (function () {
/* 000184 */ 			var __accu0__ = recopt_href;
/* 000184 */ 			return __call__ (__accu0__.py_get, __accu0__, 'map_macros', null);
/* 000184 */ 		}) ();
/* 000186 */ 		if (__t__ (__t__ (href_macro_mapping) && __in__ (node.macroname, href_macro_mapping))) {
/* 000187 */ 			var s = __add__ ('\\', __getitem__ (href_macro_mapping, node.macroname));
/* 000187 */ 		}
/* 000188 */ 		else {
/* 000189 */ 			var s = __add__ ('\\', node.macroname);
/* 000189 */ 		}
/* 000196 */ 		var s_macro_args = [];
/* 000198 */ 		if (__t__ (node.nodeargd !== null)) {
/* 000201 */ 			var __iterable0__ = __call__ (zip, null, self.command_argnames, node.nodeargd.argnlist);
/* 000201 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000201 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000201 */ 				var argname = __left0__ [0];
/* 000201 */ 				var nodearg = __left0__ [1];
/* 000208 */ 				var recomposed_arg_value = (function () {
/* 000208 */ 					var __accu0__ = recomposer;
/* 000208 */ 					return __call__ (__accu0__.subrecompose, __accu0__, nodearg);
/* 000208 */ 				}) ();
/* 000210 */ 				if (__t__ (__in__ (argname, tuple (['target_href', 'target_email'])))) {
/* 000211 */ 					var slenm1 = __sub__ (__call__ (len, null, recomposed_arg_value), 1);
/* 000212 */ 					(function () {
/* 000212 */ 						var __accu0__ = s_macro_args;
/* 000214 */ 						return __call__ (__accu0__.append, __accu0__, __add__ (__add__ (__getitem__ (recomposed_arg_value, 0), (function () {
/* 000214 */ 							var __accu1__ = _rx_url_unsafe;
/* 000214 */ 							return __call__ (__accu1__.sub, __accu1__, (function __lambda__ (m) {
/* 000214 */ 								if (arguments.length) {
/* 000214 */ 									var __ilastarg0__ = arguments.length - 1;
/* 000214 */ 									if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000214 */ 										var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000214 */ 										for (var __attrib0__ in __allkwargs0__) {
/* 000214 */ 											switch (__attrib0__) {
/* 000214 */ 												case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000214 */ 											}
/* 000214 */ 										}
/* 000214 */ 									}
/* 000214 */ 								}
/* 000214 */ 								else {
/* 000214 */ 								}
/* 000215 */ 								return __add__ ('\\', (function () {
/* 000215 */ 									var __accu2__ = m;
/* 000215 */ 									return __call__ (__accu2__.group, __accu2__, 0);
/* 000215 */ 								}) ());
/* 000215 */ 							}), __getslice__ (recomposed_arg_value, 1, slenm1, 1));
/* 000215 */ 						}) ()), __getitem__ (recomposed_arg_value, slenm1)));
/* 000215 */ 					}) ();
/* 000215 */ 				}
/* 000219 */ 				else {
/* 000221 */ 					(function () {
/* 000221 */ 						var __accu0__ = s_macro_args;
/* 000221 */ 						return __call__ (__accu0__.append, __accu0__, recomposed_arg_value);
/* 000221 */ 					}) ();
/* 000221 */ 				}
/* 000221 */ 			}
/* 000221 */ 		}
/* 000223 */ 		var recomposed = __add__ (s, (function () {
/* 000223 */ 			var __accu0__ = '';
/* 000223 */ 			return __call__ (__accu0__.join, __accu0__, s_macro_args);
/* 000223 */ 		}) ());
/* 000224 */ 		return recomposed;
/* 000224 */ 	});}
/* 000224 */ });
/* 000228 */ export var FeatureHref =  __class__ ('FeatureHref', [SimpleLatexDefinitionsFeature], {
/* 000228 */ 	__module__: __name__,
/* 000237 */ 	feature_name: 'href',
/* 000238 */ 	feature_title: 'Hyperlinks',
/* 000240 */ 	latex_definitions: dict ({'macros': [__call__ (HrefHyperlinkMacro, null, __kwargtrans__ ({macroname: 'href', command_arguments: tuple (['target_href', 'display_text'])})), __call__ (HrefHyperlinkMacro, null, __kwargtrans__ ({macroname: 'url', command_arguments: tuple (['target_href'])})), __call__ (HrefHyperlinkMacro, null, __kwargtrans__ ({macroname: 'email', command_arguments: tuple (['target_email'])}))]}),
/* 000257 */ 	HrefHyperlinkMacroClass: HrefHyperlinkMacro
/* 000257 */ });
/* 000260 */ export var FeatureClass = FeatureHref;
/* 000014 */ 
//# sourceMappingURL=flm.feature.href.map