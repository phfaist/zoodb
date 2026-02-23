/* 000001 */ // Transcrypt'ed from Python, 2026-02-23 11:51:27
/* 000006 */ var logging = {};
/* 000006 */ var re = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000013 */ import {HtmlFragmentRenderer} from './flm.fragmentrenderer.html.js';
/* 000012 */ import {FragmentRenderer} from './flm.fragmentrenderer.js';
/* 000008 */ import * as __module_logging__ from './logging.js';
/* 000008 */ __nest__ (logging, '', __module_logging__);
/* 000006 */ import * as __module_re__ from './re.js';
/* 000006 */ __nest__ (re, '', __module_re__);
/* 000006 */ export {FragmentRenderer, HtmlFragmentRenderer};
/* 000001 */ var __name__ = 'flm.fragmentrenderer.markdown';
/* 000009 */ export var logger = (function () {
/* 000009 */ 	var __accu0__ = logging;
/* 000009 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000009 */ }) ();
/* 000016 */ export var rx_mdspecials = (function () {
/* 000016 */ 	var __accu0__ = re;
/* 000016 */ 	return __call__ (__accu0__.compile, __accu0__, '[\\\\`*_~{}\\[\\]<>()#+.!|-]');
/* 000016 */ }) ();
/* 000020 */ export var MarkdownFragmentRenderer =  __class__ ('MarkdownFragmentRenderer', [FragmentRenderer], {
/* 000020 */ 	__module__: __name__,
/* 000022 */ 	supports_delayed_render_markers: true,
/* 000029 */ 	use_target_ids: 'anchor',
/* 000039 */ 	get render_build_paragraph () {return __get__ (this, function (self, nodelist, render_context) {
/* 000039 */ 		if (arguments.length) {
/* 000039 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000039 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000039 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000039 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000039 */ 					switch (__attrib0__) {
/* 000039 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000039 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000039 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000039 */ 					}
/* 000039 */ 				}
/* 000039 */ 			}
/* 000039 */ 		}
/* 000039 */ 		else {
/* 000039 */ 		}
/* 000041 */ 		var content = (function () {
/* 000041 */ 			var __accu0__ = self;
/* 000041 */ 			return __call__ (__accu0__.render_inline_content, __accu0__, nodelist, render_context);
/* 000041 */ 		}) ();
/* 000043 */ 		var md_indent = (function () {
/* 000043 */ 			var __accu0__ = (function () {
/* 000043 */ 				var __accu1__ = render_context;
/* 000043 */ 				return __call__ (__accu1__.get_logical_state, __accu1__, 'flm_markdown');
/* 000043 */ 			}) ();
/* 000043 */ 			return __call__ (__accu0__.py_get, __accu0__, 'md_indent', '');
/* 000043 */ 		}) ();
/* 000044 */ 		if (__t__ (__ne__ (md_indent, ''))) {
/* 000045 */ 			var content = __add__ (md_indent, (function () {
/* 000045 */ 				var __accu0__ = content;
/* 000045 */ 				return __call__ (__accu0__.py_replace, __accu0__, '\n', __add__ ('\n', md_indent));
/* 000045 */ 			}) ());
/* 000045 */ 		}
/* 000046 */ 		return __add__ ('\n\n', content);
/* 000046 */ 	});},
/* 000048 */ 	get render_inline_content () {return __get__ (this, function (self, nodelist, render_context) {
/* 000048 */ 		if (arguments.length) {
/* 000048 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000048 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000048 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000048 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000048 */ 					switch (__attrib0__) {
/* 000048 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000048 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000048 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000048 */ 					}
/* 000048 */ 				}
/* 000048 */ 			}
/* 000048 */ 		}
/* 000048 */ 		else {
/* 000048 */ 		}
/* 000049 */ 		var result = (function () {
/* 000049 */ 			var __accu0__ = self;
/* 000049 */ 			return __call__ (__accu0__.render_join, __accu0__, (function () {
/* 000049 */ 				var __accu1__ = [];
/* 000050 */ 				var __iterable0__ = nodelist;
/* 000050 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000050 */ 					var n = __getitem__ (__iterable0__, __index0__);
/* 000050 */ 					(function () {
/* 000050 */ 						var __accu2__ = __accu1__;
/* 000050 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000050 */ 							var __accu3__ = self;
/* 000050 */ 							return __call__ (__accu3__.render_node, __accu3__, n, render_context);
/* 000050 */ 						}) ());
/* 000050 */ 					}) ();
/* 000050 */ 				}
/* 000050 */ 				return __accu1__;
/* 000050 */ 			}) (), render_context);
/* 000050 */ 		}) ();
/* 000053 */ 		// pass;
/* 000056 */ 		return result;
/* 000056 */ 	});},
/* 000058 */ 	get render_join () {return __get__ (this, function (self, content_list, render_context) {
/* 000058 */ 		if (arguments.length) {
/* 000058 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000058 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000058 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000058 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000058 */ 					switch (__attrib0__) {
/* 000058 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000058 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000058 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000058 */ 					}
/* 000058 */ 				}
/* 000058 */ 			}
/* 000058 */ 		}
/* 000058 */ 		else {
/* 000058 */ 		}
/* 000064 */ 		var result = (function () {
/* 000064 */ 			var __accu0__ = '';
/* 000064 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000064 */ 				var __accu1__ = [];
/* 000064 */ 				var __iterable0__ = content_list;
/* 000064 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000064 */ 					var s = __getitem__ (__iterable0__, __index0__);
/* 000064 */ 					(function () {
/* 000064 */ 						var __accu2__ = __accu1__;
/* 000064 */ 						return __call__ (__accu2__.append, __accu2__, __call__ (str, null, s));
/* 000064 */ 					}) ();
/* 000064 */ 				}
/* 000064 */ 				return __accu1__;
/* 000064 */ 			}) ());
/* 000064 */ 		}) ();
/* 000065 */ 		// pass;
/* 000068 */ 		return result;
/* 000068 */ 	});},
/* 000070 */ 	get render_join_blocks () {return __get__ (this, function (self, content_list, render_context) {
/* 000070 */ 		if (arguments.length) {
/* 000070 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000070 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000070 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000070 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000070 */ 					switch (__attrib0__) {
/* 000070 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000070 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000070 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000070 */ 					}
/* 000070 */ 				}
/* 000070 */ 			}
/* 000070 */ 		}
/* 000070 */ 		else {
/* 000070 */ 		}
/* 000078 */ 		var content = (function () {
/* 000078 */ 			var __accu0__ = '\n\n';
/* 000078 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000078 */ 				var __accu1__ = [];
/* 000079 */ 				var __iterable0__ = content_list;
/* 000079 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000079 */ 					var c = __getitem__ (__iterable0__, __index0__);
/* 000079 */ 					if (__t__ (__t__ (c !== null) && __call__ (len, null, c))) {
/* 000079 */ 						(function () {
/* 000079 */ 							var __accu2__ = __accu1__;
/* 000079 */ 							return __call__ (__accu2__.append, __accu2__, c);
/* 000079 */ 						}) ();
/* 000079 */ 					}
/* 000079 */ 				}
/* 000079 */ 				return __accu1__;
/* 000079 */ 			}) ());
/* 000079 */ 		}) ();
/* 000081 */ 		// pass;
/* 000084 */ 		return (function () {
/* 000084 */ 			var __accu0__ = (function () {
/* 000084 */ 				var __accu1__ = re;
/* 000084 */ 				return __call__ (__accu1__.sub, __accu1__, '\\n{2,}', '\n\n', content);
/* 000084 */ 			}) ();
/* 000084 */ 			return __call__ (__accu0__.strip, __accu0__);
/* 000084 */ 		}) ();
/* 000084 */ 	});},
/* 000089 */ 	get render_value () {return __get__ (this, function (self, value, render_context) {
/* 000089 */ 		if (arguments.length) {
/* 000089 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000089 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000089 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000089 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000089 */ 					switch (__attrib0__) {
/* 000089 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000089 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000089 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000089 */ 					}
/* 000089 */ 				}
/* 000089 */ 			}
/* 000089 */ 		}
/* 000089 */ 		else {
/* 000089 */ 		}
/* 000090 */ 		return (function () {
/* 000090 */ 			var __accu0__ = rx_mdspecials;
/* 000090 */ 			return __call__ (__accu0__.sub, __accu0__, (function __lambda__ (m) {
/* 000090 */ 				if (arguments.length) {
/* 000090 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000090 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000090 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000090 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000090 */ 							switch (__attrib0__) {
/* 000090 */ 								case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000090 */ 							}
/* 000090 */ 						}
/* 000090 */ 					}
/* 000090 */ 				}
/* 000090 */ 				else {
/* 000090 */ 				}
/* 000090 */ 				return __add__ ('\\', (function () {
/* 000090 */ 					var __accu1__ = m;
/* 000090 */ 					return __call__ (__accu1__.group, __accu1__);
/* 000090 */ 				}) ());
/* 000090 */ 			}), value);
/* 000090 */ 		}) ();
/* 000090 */ 	});},
/* 000092 */ 	get render_empty_error_placeholder () {return __get__ (this, function (self, debug_str, render_context) {
/* 000092 */ 		if (arguments.length) {
/* 000092 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000092 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000092 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000092 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000092 */ 					switch (__attrib0__) {
/* 000092 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000092 */ 						case 'debug_str': var debug_str = __allkwargs0__ [__attrib0__]; break;
/* 000092 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000092 */ 					}
/* 000092 */ 				}
/* 000092 */ 			}
/* 000092 */ 		}
/* 000092 */ 		else {
/* 000092 */ 		}
/* 000093 */ 		return '';
/* 000093 */ 	});},
/* 000095 */ 	get render_nothing () {return __get__ (this, function (self, render_context, annotations) {
/* 000095 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000095 */ 			var annotations = null;
/* 000095 */ 		};
/* 000095 */ 		if (arguments.length) {
/* 000095 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000095 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000095 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000095 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000095 */ 					switch (__attrib0__) {
/* 000095 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000095 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000095 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000095 */ 					}
/* 000095 */ 				}
/* 000095 */ 			}
/* 000095 */ 		}
/* 000095 */ 		else {
/* 000095 */ 		}
/* 000096 */ 		return '';
/* 000096 */ 	});},
/* 000098 */ 	get render_verbatim () {return __get__ (this, function (self, value, render_context) {
/* 000098 */ 		var is_block_level = false;
/* 000098 */ 		var annotations = null;
/* 000098 */ 		var target_id = null;
/* 000098 */ 		if (arguments.length) {
/* 000098 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000098 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000098 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000098 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000098 */ 					switch (__attrib0__) {
/* 000098 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000098 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000098 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000098 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000098 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000098 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000098 */ 					}
/* 000098 */ 				}
/* 000098 */ 			}
/* 000098 */ 		}
/* 000098 */ 		else {
/* 000098 */ 		}
/* 000100 */ 		var value = (function () {
/* 000100 */ 			var __accu0__ = value;
/* 000100 */ 			return __call__ (__accu0__.py_replace, __accu0__, '``', '` ` ');
/* 000100 */ 		}) ();
/* 000102 */ 		return __add__ (__add__ (__add__ ((function () {
/* 000102 */ 			var __accu0__ = self;
/* 000102 */ 			return __call__ (__accu0__._get_target_id_md_code, __accu0__, target_id);
/* 000103 */ 		}) (), '`` '), (function () {
/* 000103 */ 			var __accu0__ = self;
/* 000103 */ 			return __call__ (__accu0__.render_value, __accu0__, value, render_context);
/* 000103 */ 		}) ()), ' ``');
/* 000103 */ 	});},
/* 000106 */ 	get render_math_content () {return __get__ (this, function (self, delimiters, nodelist, render_context, displaytype, environmentname, target_id) {
/* 000106 */ 		if (typeof environmentname == 'undefined' || (environmentname != null && environmentname.hasOwnProperty ("__kwargtrans__"))) {;
/* 000106 */ 			var environmentname = null;
/* 000106 */ 		};
/* 000106 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000106 */ 			var target_id = null;
/* 000106 */ 		};
/* 000106 */ 		if (arguments.length) {
/* 000106 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000106 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000106 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000106 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000106 */ 					switch (__attrib0__) {
/* 000106 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000106 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000106 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000106 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000106 */ 						case 'displaytype': var displaytype = __allkwargs0__ [__attrib0__]; break;
/* 000106 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000106 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000106 */ 					}
/* 000106 */ 				}
/* 000106 */ 			}
/* 000106 */ 		}
/* 000106 */ 		else {
/* 000106 */ 		}
/* 000114 */ 		var content = __add__ (__add__ (__getitem__ (delimiters, 0), (function () {
/* 000114 */ 			var __accu0__ = self;
/* 000114 */ 			return __call__ (__accu0__.recompose_latex, __accu0__, nodelist);
/* 000114 */ 		}) ()), __getitem__ (delimiters, 1));
/* 000115 */ 		var content = (function () {
/* 000115 */ 			var __accu0__ = self;
/* 000115 */ 			return __call__ (__accu0__.render_value, __accu0__, content, render_context);
/* 000115 */ 		}) ();
/* 000117 */ 		var content = __add__ ((function () {
/* 000117 */ 			var __accu0__ = self;
/* 000117 */ 			return __call__ (__accu0__._get_target_id_md_code, __accu0__, target_id);
/* 000117 */ 		}) (), content);
/* 000120 */ 		return content;
/* 000120 */ 	});},
/* 000122 */ 	get render_text_format () {return __get__ (this, function (self, text_formats, nodelist, render_context) {
/* 000122 */ 		if (arguments.length) {
/* 000122 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000122 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000122 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000122 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000122 */ 					switch (__attrib0__) {
/* 000122 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000122 */ 						case 'text_formats': var text_formats = __allkwargs0__ [__attrib0__]; break;
/* 000122 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000122 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000122 */ 					}
/* 000122 */ 				}
/* 000122 */ 			}
/* 000122 */ 		}
/* 000122 */ 		else {
/* 000122 */ 		}
/* 000124 */ 		var content = (function () {
/* 000124 */ 			var __accu0__ = self;
/* 000124 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, nodelist, render_context, __kwargtrans__ ({is_block_level: false}));
/* 000124 */ 		}) ();
/* 000130 */ 		var mdtext = content;
/* 000131 */ 		if (__t__ (__in__ ('textbf', text_formats))) {
/* 000132 */ 			var mdtext = __add__ (__add__ ('**', content), '**');
/* 000132 */ 		}
/* 000133 */ 		if (__t__ (__t__ (__in__ ('textit', text_formats)) || __in__ ('emph', text_formats))) {
/* 000134 */ 			var mdtext = __add__ (__add__ ('*', content), '*');
/* 000134 */ 		}
/* 000136 */ 		return mdtext;
/* 000136 */ 	});},
/* 000138 */ 	get render_semantic_block () {return __get__ (this, function (self, content, role, render_context) {
/* 000138 */ 		var annotations = null;
/* 000138 */ 		var target_id = null;
/* 000138 */ 		if (arguments.length) {
/* 000138 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000138 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000138 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000138 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000138 */ 					switch (__attrib0__) {
/* 000138 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000138 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000138 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000138 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000138 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000138 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000138 */ 					}
/* 000138 */ 				}
/* 000138 */ 			}
/* 000138 */ 		}
/* 000138 */ 		else {
/* 000138 */ 		}
/* 000142 */ 		return __add__ (__add__ ((function () {
/* 000142 */ 			var __accu0__ = (function () {
/* 000142 */ 				var __accu1__ = self;
/* 000142 */ 				return __call__ (__accu1__._get_target_id_md_code, __accu1__, target_id);
/* 000142 */ 			}) ();
/* 000142 */ 			return __call__ (__accu0__.rstrip, __accu0__);
/* 000142 */ 		}) (), '\n'), content);
/* 000142 */ 	});},
/* 000145 */ 	get render_lines () {return __get__ (this, function (self, lines_info_list, render_context) {
/* 000145 */ 		var role = null;
/* 000145 */ 		var annotations = null;
/* 000145 */ 		var target_id = null;
/* 000145 */ 		if (arguments.length) {
/* 000145 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000145 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000145 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000145 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000145 */ 					switch (__attrib0__) {
/* 000145 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000145 */ 						case 'lines_info_list': var lines_info_list = __allkwargs0__ [__attrib0__]; break;
/* 000145 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000145 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000145 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000145 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000145 */ 					}
/* 000145 */ 				}
/* 000145 */ 			}
/* 000145 */ 		}
/* 000145 */ 		else {
/* 000145 */ 		}
/* 000148 */ 		var md_indent = (function () {
/* 000148 */ 			var __accu0__ = (function () {
/* 000148 */ 				var __accu1__ = render_context;
/* 000148 */ 				return __call__ (__accu1__.get_logical_state, __accu1__, 'flm_markdown');
/* 000148 */ 			}) ();
/* 000148 */ 			return __call__ (__accu0__.py_get, __accu0__, 'md_indent', '');
/* 000148 */ 		}) ();
/* 000150 */ 		var s_lines = [];
/* 000152 */ 		var __iterable0__ = lines_info_list;
/* 000152 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000152 */ 			var line_info = __getitem__ (__iterable0__, __index0__);
/* 000153 */ 			var line_content_nodelist = line_info.nodelist;
/* 000155 */ 			var s_line = (function () {
/* 000155 */ 				var __accu0__ = self;
/* 000155 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, line_content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000155 */ 			}) ();
/* 000161 */ 			if (__t__ (line_info.indent_left !== null)) {
/* 000162 */ 				var s_line = __add__ (__mul__ ('&nbsp;&nbsp;&nbsp;&nbsp;', line_info.indent_left), s_line);
/* 000162 */ 			}
/* 000167 */ 			if (__t__ (line_info.indent_right !== null)) {
/* 000168 */ 				(function () {
/* 000168 */ 					var __accu0__ = logger;
/* 000168 */ 					return __call__ (__accu0__.warning, __accu0__, 'lines indent_right not yet implemented in markdown renderer');
/* 000168 */ 				}) ();
/* 000168 */ 			}
/* 000169 */ 			if (__t__ (line_info.align !== null)) {
/* 000170 */ 				(function () {
/* 000170 */ 					var __accu0__ = logger;
/* 000170 */ 					return __call__ (__accu0__.warning, __accu0__, 'lines align not yet implemented in markdown renderer');
/* 000170 */ 				}) ();
/* 000170 */ 			}
/* 000172 */ 			if (__t__ (__ne__ (md_indent, ''))) {
/* 000173 */ 				var s_line = __add__ (md_indent, (function () {
/* 000173 */ 					var __accu0__ = s_line;
/* 000173 */ 					return __call__ (__accu0__.py_replace, __accu0__, '\n', __add__ ('\n', md_indent));
/* 000173 */ 				}) ());
/* 000173 */ 			}
/* 000175 */ 			(function () {
/* 000175 */ 				var __accu0__ = s_lines;
/* 000175 */ 				return __call__ (__accu0__.append, __accu0__, __add__ (s_line, '  '));
/* 000175 */ 			}) ();
/* 000175 */ 		}
/* 000177 */ 		var tgtid = '';
/* 000178 */ 		if (__t__ (target_id !== null)) {
/* 000179 */ 			var tgtid = __add__ (__add__ (md_indent, (function () {
/* 000179 */ 				var __accu0__ = (function () {
/* 000179 */ 					var __accu1__ = self;
/* 000179 */ 					return __call__ (__accu1__._get_target_id_md_code, __accu1__, target_id);
/* 000179 */ 				}) ();
/* 000179 */ 				return __call__ (__accu0__.rstrip, __accu0__);
/* 000179 */ 			}) ()), '\n');
/* 000180 */ 			if (__t__ (__eq__ ((function () {
/* 000180 */ 				var __accu0__ = tgtid;
/* 000180 */ 				return __call__ (__accu0__.strip, __accu0__);
/* 000180 */ 			}) (), ''))) {
/* 000181 */ 				var tgtid = '';
/* 000181 */ 			}
/* 000181 */ 		}
/* 000183 */ 		return __add__ (__add__ ('\n\n', tgtid), (function () {
/* 000183 */ 			var __accu0__ = '\n';
/* 000183 */ 			return __call__ (__accu0__.join, __accu0__, s_lines);
/* 000183 */ 		}) ());
/* 000183 */ 	});},
/* 000185 */ 	get render_enumeration () {return __get__ (this, function (self, iter_items_nodelists, counter_formatter, render_context) {
/* 000185 */ 		var target_id_generator = null;
/* 000185 */ 		var annotations = null;
/* 000185 */ 		var nested_depth = null;
/* 000185 */ 		if (arguments.length) {
/* 000185 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000185 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000185 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000185 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000185 */ 					switch (__attrib0__) {
/* 000185 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000185 */ 						case 'iter_items_nodelists': var iter_items_nodelists = __allkwargs0__ [__attrib0__]; break;
/* 000185 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000185 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000185 */ 						case 'target_id_generator': var target_id_generator = __allkwargs0__ [__attrib0__]; break;
/* 000185 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000185 */ 						case 'nested_depth': var nested_depth = __allkwargs0__ [__attrib0__]; break;
/* 000185 */ 					}
/* 000185 */ 				}
/* 000185 */ 			}
/* 000185 */ 		}
/* 000185 */ 		else {
/* 000185 */ 		}
/* 000197 */ 		var s_items = [];
/* 000199 */ 		var __iterable0__ = __call__ (enumerate, null, iter_items_nodelists);
/* 000199 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000199 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000199 */ 			var j = __left0__ [0];
/* 000199 */ 			var item_content_nodelist = __left0__ [1];
/* 000201 */ 			var use_block_level = true;
/* 000202 */ 			if (__t__ (item_content_nodelist.parsing_state.is_block_level === false)) {
/* 000205 */ 				var use_block_level = false;
/* 000205 */ 			}
/* 000207 */ 			// pass;
/* 000211 */ 			// pass;
/* 000215 */ 			var item_content = (function () {
/* 000215 */ 				var __accu0__ = self;
/* 000215 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, item_content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: use_block_level}));
/* 000215 */ 			}) ();
/* 000221 */ 			var enumno = __add__ (1, j);
/* 000223 */ 			var tag_nodelist = __call__ (counter_formatter, null, enumno);
/* 000224 */ 			if (__t__ (__call__ (isinstance, null, tag_nodelist, str))) {
/* 000225 */ 				var tag_content = (function () {
/* 000225 */ 					var __accu0__ = self;
/* 000225 */ 					return __call__ (__accu0__.render_value, __accu0__, tag_nodelist, render_context);
/* 000225 */ 				}) ();
/* 000225 */ 			}
/* 000226 */ 			else {
/* 000227 */ 				var tag_content = (function () {
/* 000227 */ 					var __accu0__ = self;
/* 000227 */ 					return __call__ (__accu0__.render_nodelist, __accu0__, tag_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000227 */ 				}) ();
/* 000227 */ 			}
/* 000233 */ 			var tgtid_md_code = '';
/* 000234 */ 			if (__t__ (target_id_generator !== null)) {
/* 000235 */ 				var target_id = __call__ (target_id_generator, null, enumno);
/* 000236 */ 				if (__t__ (target_id !== null)) {
/* 000237 */ 					var tgtid_md_code = (function () {
/* 000237 */ 						var __accu0__ = self;
/* 000237 */ 						return __call__ (__accu0__._get_target_id_md_code, __accu0__, target_id);
/* 000237 */ 					}) ();
/* 000237 */ 				}
/* 000237 */ 			}
/* 000241 */ 			(function () {
/* 000241 */ 				var __accu0__ = s_items;
/* 000241 */ 				return __call__ (__accu0__.append, __accu0__, __add__ (__add__ (__add__ (tag_content, ' '), tgtid_md_code), item_content));
/* 000241 */ 			}) ();
/* 000241 */ 		}
/* 000243 */ 		// pass;
/* 000247 */ 		var mdindent_cur = (function () {
/* 000247 */ 			var __accu0__ = (function () {
/* 000247 */ 				var __accu1__ = render_context;
/* 000247 */ 				return __call__ (__accu1__.get_logical_state, __accu1__, 'flm_markdown');
/* 000247 */ 			}) ();
/* 000247 */ 			return __call__ (__accu0__.py_get, __accu0__, 'md_indent', '');
/* 000247 */ 		}) ();
/* 000248 */ 		var mdindent = __add__ (mdindent_cur, '  ');
/* 000249 */ 		var __withid0__ = (function () {
/* 000249 */ 			var __accu0__ = render_context;
/* 000249 */ 			return __call__ (__accu0__.push_logical_state, __accu0__, 'flm_markdown', 'indent', mdindent);
/* 000249 */ 		}) ();
/* 000249 */ 		try {
/* 000249 */ 			__withid0__.__enter__ ();
/* 000251 */ 			var mdtexts = [];
/* 000253 */ 			var __iterable0__ = s_items;
/* 000253 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000253 */ 				var s_item = __getitem__ (__iterable0__, __index0__);
/* 000254 */ 				(function () {
/* 000254 */ 					var __accu0__ = mdtexts;
/* 000255 */ 					return __call__ (__accu0__.append, __accu0__, __add__ (__add__ (mdindent_cur, '- '), (function () {
/* 000255 */ 						var __accu1__ = s_item;
/* 000255 */ 						return __call__ (__accu1__.py_replace, __accu1__, '\n', __add__ ('\n', mdindent));
/* 000255 */ 					}) ()));
/* 000255 */ 				}) ();
/* 000255 */ 			}
/* 000255 */ 			__withid0__.__exit__ ();
/* 000255 */ 		}
/* 000255 */ 		catch (__except0__) {
/* 000255 */ 			if (! (__withid0__.__exit__ (__except0__.name, __except0__, __except0__.stack))) {
/* 000255 */ 				throw __except0__;
/* 000255 */ 			}
/* 000255 */ 		}
/* 000258 */ 		var content = (function () {
/* 000258 */ 			var __accu0__ = self;
/* 000258 */ 			return __call__ (__accu0__.render_join_blocks, __accu0__, mdtexts, render_context);
/* 000258 */ 		}) ();
/* 000260 */ 		return content;
/* 000260 */ 	});},
/* 000263 */ 	get render_heading () {return __get__ (this, function (self, heading_nodelist, render_context) {
/* 000263 */ 		var heading_level = 1;
/* 000263 */ 		var inline_heading = false;
/* 000263 */ 		var target_id = null;
/* 000263 */ 		var annotations = null;
/* 000263 */ 		if (arguments.length) {
/* 000263 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000263 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000263 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000263 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000263 */ 					switch (__attrib0__) {
/* 000263 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000263 */ 						case 'heading_nodelist': var heading_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000263 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000263 */ 						case 'heading_level': var heading_level = __allkwargs0__ [__attrib0__]; break;
/* 000263 */ 						case 'inline_heading': var inline_heading = __allkwargs0__ [__attrib0__]; break;
/* 000263 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000263 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000263 */ 					}
/* 000263 */ 				}
/* 000263 */ 			}
/* 000263 */ 		}
/* 000263 */ 		else {
/* 000263 */ 		}
/* 000270 */ 		var title_content = (function () {
/* 000270 */ 			var __accu0__ = self;
/* 000270 */ 			return __call__ (__accu0__.render_inline_content, __accu0__, heading_nodelist, render_context);
/* 000270 */ 		}) ();
/* 000272 */ 		var target_id_md_code = (function () {
/* 000272 */ 			var __accu0__ = self;
/* 000272 */ 			return __call__ (__accu0__._get_target_id_md_code, __accu0__, target_id);
/* 000272 */ 		}) ();
/* 000274 */ 		var heading_code = '###';
/* 000275 */ 		if (__t__ (__t__ (__call__ (isinstance, null, heading_level, int)) && __gt__ (heading_level, 0))) {
/* 000276 */ 			var heading_code = __mul__ ('#', heading_level);
/* 000276 */ 		}
/* 000279 */ 		return __add__ (__add__ (__add__ (__add__ (heading_code, ' '), target_id_md_code), (function () {
/* 000279 */ 			var __accu0__ = title_content;
/* 000279 */ 			return __call__ (__accu0__.py_replace, __accu0__, '\n', ' ');
/* 000279 */ 		}) ()), '\n');
/* 000279 */ 	});},
/* 000283 */ 	get render_link () {return __get__ (this, function (self, ref_type, href, display_nodelist, render_context, annotations) {
/* 000283 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000283 */ 			var annotations = null;
/* 000283 */ 		};
/* 000283 */ 		if (arguments.length) {
/* 000283 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000283 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000283 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000283 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000283 */ 					switch (__attrib0__) {
/* 000283 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000283 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000283 */ 						case 'href': var href = __allkwargs0__ [__attrib0__]; break;
/* 000283 */ 						case 'display_nodelist': var display_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000283 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000283 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000283 */ 					}
/* 000283 */ 				}
/* 000283 */ 			}
/* 000283 */ 		}
/* 000283 */ 		else {
/* 000283 */ 		}
/* 000284 */ 		var display_content = (function () {
/* 000284 */ 			var __accu0__ = self;
/* 000284 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, display_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000284 */ 		}) ();
/* 000289 */ 		return __add__ (__add__ (__add__ (__add__ ('[', display_content), ']('), href), ')');
/* 000289 */ 	});},
/* 000291 */ 	get render_delayed_marker () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000291 */ 		if (arguments.length) {
/* 000291 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000291 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000291 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000291 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000291 */ 					switch (__attrib0__) {
/* 000291 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000291 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000291 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000291 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000291 */ 					}
/* 000291 */ 				}
/* 000291 */ 			}
/* 000291 */ 		}
/* 000291 */ 		else {
/* 000291 */ 		}
/* 000292 */ 		return '<FLM:DLYD:{}/>'.format (delayed_key);
/* 000292 */ 	});},
/* 000294 */ 	get render_delayed_dummy_placeholder () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000294 */ 		if (arguments.length) {
/* 000294 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000294 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000294 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000294 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000294 */ 					switch (__attrib0__) {
/* 000294 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000294 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000294 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000294 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000294 */ 					}
/* 000294 */ 				}
/* 000294 */ 			}
/* 000294 */ 		}
/* 000294 */ 		else {
/* 000294 */ 		}
/* 000295 */ 		return '<!-- delayed:{} -->'.format (delayed_key);
/* 000295 */ 	});},
/* 000297 */ 	get replace_delayed_markers_with_final_values () {return __get__ (this, function (self, content, delayed_values) {
/* 000297 */ 		if (arguments.length) {
/* 000297 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000297 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000297 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000297 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000297 */ 					switch (__attrib0__) {
/* 000297 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000297 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000297 */ 						case 'delayed_values': var delayed_values = __allkwargs0__ [__attrib0__]; break;
/* 000297 */ 					}
/* 000297 */ 				}
/* 000297 */ 			}
/* 000297 */ 		}
/* 000297 */ 		else {
/* 000297 */ 		}
/* 000298 */ 		return (function () {
/* 000298 */ 			var __accu0__ = _rx_delayed_markers;
/* 000298 */ 			return __call__ (__accu0__.sub, __accu0__, (function __lambda__ (m) {
/* 000298 */ 				if (arguments.length) {
/* 000298 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000298 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000298 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000298 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000298 */ 							switch (__attrib0__) {
/* 000298 */ 								case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000298 */ 							}
/* 000298 */ 						}
/* 000298 */ 					}
/* 000298 */ 				}
/* 000298 */ 				else {
/* 000298 */ 				}
/* 000299 */ 				return __getitem__ (delayed_values, __call__ (int, null, (function () {
/* 000299 */ 					var __accu1__ = m;
/* 000299 */ 					return __call__ (__accu1__.group, __accu1__, 'key');
/* 000299 */ 				}) ()));
/* 000299 */ 			}), content);
/* 000299 */ 		}) ();
/* 000299 */ 	});},
/* 000306 */ 	get render_float () {return __get__ (this, function (self, float_instance, render_context) {
/* 000306 */ 		if (arguments.length) {
/* 000306 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000306 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000306 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000306 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000306 */ 					switch (__attrib0__) {
/* 000306 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000306 */ 						case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000306 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000306 */ 					}
/* 000306 */ 				}
/* 000306 */ 			}
/* 000306 */ 		}
/* 000306 */ 		else {
/* 000306 */ 		}
/* 000309 */ 		var full_figcaption_rendered_list = [];
/* 000310 */ 		if (__t__ (float_instance.counter_value !== null)) {
/* 000311 */ 			(function () {
/* 000311 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000312 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000312 */ 					var __accu1__ = self;
/* 000315 */ 					return __call__ (__accu1__.render_join, __accu1__, [float_instance.float_type_info.float_caption_name, '\xa0', (function () {
/* 000315 */ 						var __accu2__ = self;
/* 000315 */ 						return __call__ (__accu2__.render_nodelist, __accu2__, float_instance.formatted_counter_value_flm.nodes, __kwargtrans__ ({render_context: render_context}));
/* 000315 */ 					}) ()], render_context);
/* 000315 */ 				}) ());
/* 000315 */ 			}) ();
/* 000315 */ 		}
/* 000319 */ 		else if (__t__ (float_instance.caption_nodelist)) {
/* 000320 */ 			(function () {
/* 000320 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000320 */ 				return __call__ (__accu0__.append, __accu0__, float_instance.float_type_info.float_caption_name);
/* 000320 */ 			}) ();
/* 000320 */ 		}
/* 000322 */ 		else {
/* 000324 */ 			// pass;
/* 000324 */ 		}
/* 000326 */ 		if (__t__ (float_instance.caption_nodelist)) {
/* 000327 */ 			(function () {
/* 000327 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000327 */ 				return __call__ (__accu0__.append, __accu0__, ': ');
/* 000327 */ 			}) ();
/* 000330 */ 			(function () {
/* 000330 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000331 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000331 */ 					var __accu1__ = self;
/* 000331 */ 					return __call__ (__accu1__.render_nodelist, __accu1__, float_instance.caption_nodelist, __kwargtrans__ ({render_context: render_context}));
/* 000331 */ 				}) ());
/* 000331 */ 			}) ();
/* 000331 */ 		}
/* 000337 */ 		var rendered_float_caption = null;
/* 000338 */ 		if (__t__ (full_figcaption_rendered_list)) {
/* 000339 */ 			var rendered_float_caption = (function () {
/* 000339 */ 				var __accu0__ = self;
/* 000339 */ 				return __call__ (__accu0__.render_join, __accu0__, full_figcaption_rendered_list, render_context);
/* 000339 */ 			}) ();
/* 000339 */ 		}
/* 000342 */ 		var float_content_block = (function () {
/* 000342 */ 			var __accu0__ = self;
/* 000342 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, float_instance.content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: true}));
/* 000342 */ 		}) ();
/* 000348 */ 		if (__t__ (rendered_float_caption !== null)) {
/* 000349 */ 			var float_content_with_caption = (function () {
/* 000349 */ 				var __accu0__ = self;
/* 000349 */ 				return __call__ (__accu0__.render_join_blocks, __accu0__, [float_content_block, rendered_float_caption], render_context);
/* 000349 */ 			}) ();
/* 000349 */ 		}
/* 000353 */ 		else {
/* 000354 */ 			var float_content_with_caption = float_content_block;
/* 000354 */ 		}
/* 000356 */ 		var target_id_md_code = (function () {
/* 000356 */ 			var __accu0__ = self;
/* 000356 */ 			return __call__ (__accu0__._get_target_id_md_code, __accu0__, float_instance.target_id);
/* 000356 */ 		}) ();
/* 000358 */ 		var mdindent = (function () {
/* 000358 */ 			var __accu0__ = (function () {
/* 000358 */ 				var __accu1__ = render_context;
/* 000358 */ 				return __call__ (__accu1__.get_logical_state, __accu1__, 'flm_markdown');
/* 000358 */ 			}) ();
/* 000358 */ 			return __call__ (__accu0__.py_get, __accu0__, 'md_indent', '');
/* 000358 */ 		}) ();
/* 000359 */ 		return __add__ (mdindent, (function () {
/* 000362 */ 			var __accu0__ = __add__ (__add__ (__add__ ('---\n\n', target_id_md_code), (function () {
/* 000362 */ 				var __accu1__ = float_content_with_caption;
/* 000362 */ 				return __call__ (__accu1__.strip, __accu1__);
/* 000362 */ 			}) ()), '\n\n---\n');
/* 000362 */ 			return __call__ (__accu0__.py_replace, __accu0__, '\n', __add__ ('\n', mdindent));
/* 000362 */ 		}) ());
/* 000362 */ 	});},
/* 000367 */ 	graphics_raster_magnification: 1,
/* 000368 */ 	graphics_vector_magnification: 1,
/* 000370 */ 	get render_graphics_block () {return __get__ (this, function (self, graphics_resource, render_context) {
/* 000370 */ 		if (arguments.length) {
/* 000370 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000370 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000370 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000370 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000370 */ 					switch (__attrib0__) {
/* 000370 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000370 */ 						case 'graphics_resource': var graphics_resource = __allkwargs0__ [__attrib0__]; break;
/* 000370 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000370 */ 					}
/* 000370 */ 				}
/* 000370 */ 			}
/* 000370 */ 		}
/* 000370 */ 		else {
/* 000370 */ 		}
/* 000372 */ 		var src_url = graphics_resource.src_url;
/* 000374 */ 		return __add__ (__add__ ('![](', src_url), ')');
/* 000374 */ 	});},
/* 000377 */ 	get render_cells () {return __get__ (this, function (self, cells_model, render_context, target_id) {
/* 000377 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000377 */ 			var target_id = null;
/* 000377 */ 		};
/* 000377 */ 		if (arguments.length) {
/* 000377 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000377 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000377 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000377 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000377 */ 					switch (__attrib0__) {
/* 000377 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000377 */ 						case 'cells_model': var cells_model = __allkwargs0__ [__attrib0__]; break;
/* 000377 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000377 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000377 */ 					}
/* 000377 */ 				}
/* 000377 */ 			}
/* 000377 */ 		}
/* 000377 */ 		else {
/* 000377 */ 		}
/* 000380 */ 		return (function () {
/* 000380 */ 			var __accu0__ = __call__ (HtmlFragmentRenderer, null);
/* 000380 */ 			return __call__ (__accu0__.render_cells, __accu0__, cells_model, render_context, __kwargtrans__ ({target_id: target_id}));
/* 000380 */ 		}) ();
/* 000380 */ 	});},
/* 000385 */ 	get _get_target_id_md_code () {return __get__ (this, function (self, target_id) {
/* 000385 */ 		if (arguments.length) {
/* 000385 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000385 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000385 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000385 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000385 */ 					switch (__attrib0__) {
/* 000385 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000385 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000385 */ 					}
/* 000385 */ 				}
/* 000385 */ 			}
/* 000385 */ 		}
/* 000385 */ 		else {
/* 000385 */ 		}
/* 000386 */ 		if (__t__ (target_id === null)) {
/* 000387 */ 			return '';
/* 000387 */ 		}
/* 000388 */ 		if (__t__ (__eq__ (self.use_target_ids, 'pandoc'))) {
/* 000389 */ 			return __add__ (__add__ ('[]{#', target_id), '} ');
/* 000389 */ 		}
/* 000390 */ 		if (__t__ (__eq__ (self.use_target_ids, 'github'))) {
/* 000391 */ 			return __add__ (__add__ ('[](#', target_id), ') ');
/* 000391 */ 		}
/* 000392 */ 		if (__t__ (__eq__ (self.use_target_ids, 'anchor'))) {
/* 000393 */ 			return __add__ (__add__ ('<a name="', target_id), '"></a> ');
/* 000393 */ 		}
/* 000394 */ 		return '';
/* 000394 */ 	});}
/* 000394 */ });
/* 000402 */ export var _rx_delayed_markers = (function () {
/* 000402 */ 	var __accu0__ = re;
/* 000402 */ 	return __call__ (__accu0__.compile, __accu0__, '<FLM:DLYD:(?P<key>\\d+)\\s*/>');
/* 000402 */ }) ();
/* 000408 */ export var FragmentRendererInformation =  __class__ ('FragmentRendererInformation', [object], {
/* 000408 */ 	__module__: __name__,
/* 000409 */ 	FragmentRendererClass: MarkdownFragmentRenderer,
/* 000410 */ 	format_name: 'markdown'
/* 000410 */ });
/* 000006 */ 
//# sourceMappingURL=flm.fragmentrenderer.markdown.map