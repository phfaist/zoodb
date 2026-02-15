/* 000001 */ // Transcrypt'ed from Python, 2026-02-15 18:37:43
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
/* 000145 */ 	get render_lines () {return __get__ (this, function (self, iter_lines_nodelists, render_context) {
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
/* 000145 */ 						case 'iter_lines_nodelists': var iter_lines_nodelists = __allkwargs0__ [__attrib0__]; break;
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
/* 000152 */ 		var __iterable0__ = iter_lines_nodelists;
/* 000152 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000152 */ 			var line_content_nodelist = __getitem__ (__iterable0__, __index0__);
/* 000153 */ 			var s_line = (function () {
/* 000153 */ 				var __accu0__ = self;
/* 000153 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, line_content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000153 */ 			}) ();
/* 000158 */ 			if (__t__ (__ne__ (md_indent, ''))) {
/* 000159 */ 				var s_line = __add__ (md_indent, (function () {
/* 000159 */ 					var __accu0__ = s_line;
/* 000159 */ 					return __call__ (__accu0__.py_replace, __accu0__, '\n', __add__ ('\n', md_indent));
/* 000159 */ 				}) ());
/* 000159 */ 			}
/* 000160 */ 			(function () {
/* 000160 */ 				var __accu0__ = s_lines;
/* 000160 */ 				return __call__ (__accu0__.append, __accu0__, __add__ (s_line, '  '));
/* 000160 */ 			}) ();
/* 000160 */ 		}
/* 000162 */ 		var tgtid = '';
/* 000163 */ 		if (__t__ (target_id !== null)) {
/* 000164 */ 			var tgtid = __add__ (__add__ (md_indent, (function () {
/* 000164 */ 				var __accu0__ = (function () {
/* 000164 */ 					var __accu1__ = self;
/* 000164 */ 					return __call__ (__accu1__._get_target_id_md_code, __accu1__, target_id);
/* 000164 */ 				}) ();
/* 000164 */ 				return __call__ (__accu0__.rstrip, __accu0__);
/* 000164 */ 			}) ()), '\n');
/* 000165 */ 			if (__t__ (__eq__ ((function () {
/* 000165 */ 				var __accu0__ = tgtid;
/* 000165 */ 				return __call__ (__accu0__.strip, __accu0__);
/* 000165 */ 			}) (), ''))) {
/* 000166 */ 				var tgtid = '';
/* 000166 */ 			}
/* 000166 */ 		}
/* 000168 */ 		return __add__ (__add__ ('\n\n', tgtid), content);
/* 000168 */ 	});},
/* 000170 */ 	get render_enumeration () {return __get__ (this, function (self, iter_items_nodelists, counter_formatter, render_context) {
/* 000170 */ 		var target_id_generator = null;
/* 000170 */ 		var annotations = null;
/* 000170 */ 		var nested_depth = null;
/* 000170 */ 		if (arguments.length) {
/* 000170 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000170 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000170 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000170 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000170 */ 					switch (__attrib0__) {
/* 000170 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000170 */ 						case 'iter_items_nodelists': var iter_items_nodelists = __allkwargs0__ [__attrib0__]; break;
/* 000170 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000170 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000170 */ 						case 'target_id_generator': var target_id_generator = __allkwargs0__ [__attrib0__]; break;
/* 000170 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000170 */ 						case 'nested_depth': var nested_depth = __allkwargs0__ [__attrib0__]; break;
/* 000170 */ 					}
/* 000170 */ 				}
/* 000170 */ 			}
/* 000170 */ 		}
/* 000170 */ 		else {
/* 000170 */ 		}
/* 000182 */ 		var s_items = [];
/* 000184 */ 		var __iterable0__ = __call__ (enumerate, null, iter_items_nodelists);
/* 000184 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000184 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000184 */ 			var j = __left0__ [0];
/* 000184 */ 			var item_content_nodelist = __left0__ [1];
/* 000186 */ 			var use_block_level = true;
/* 000187 */ 			if (__t__ (item_content_nodelist.parsing_state.is_block_level === false)) {
/* 000190 */ 				var use_block_level = false;
/* 000190 */ 			}
/* 000192 */ 			// pass;
/* 000196 */ 			// pass;
/* 000200 */ 			var item_content = (function () {
/* 000200 */ 				var __accu0__ = self;
/* 000200 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, item_content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: use_block_level}));
/* 000200 */ 			}) ();
/* 000206 */ 			var enumno = __add__ (1, j);
/* 000208 */ 			var tag_nodelist = __call__ (counter_formatter, null, enumno);
/* 000209 */ 			if (__t__ (__call__ (isinstance, null, tag_nodelist, str))) {
/* 000210 */ 				var tag_content = (function () {
/* 000210 */ 					var __accu0__ = self;
/* 000210 */ 					return __call__ (__accu0__.render_value, __accu0__, tag_nodelist, render_context);
/* 000210 */ 				}) ();
/* 000210 */ 			}
/* 000211 */ 			else {
/* 000212 */ 				var tag_content = (function () {
/* 000212 */ 					var __accu0__ = self;
/* 000212 */ 					return __call__ (__accu0__.render_nodelist, __accu0__, tag_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000212 */ 				}) ();
/* 000212 */ 			}
/* 000218 */ 			var tgtid_md_code = '';
/* 000219 */ 			if (__t__ (target_id_generator !== null)) {
/* 000220 */ 				var target_id = __call__ (target_id_generator, null, enumno);
/* 000221 */ 				if (__t__ (target_id !== null)) {
/* 000222 */ 					var tgtid_md_code = (function () {
/* 000222 */ 						var __accu0__ = self;
/* 000222 */ 						return __call__ (__accu0__._get_target_id_md_code, __accu0__, target_id);
/* 000222 */ 					}) ();
/* 000222 */ 				}
/* 000222 */ 			}
/* 000226 */ 			(function () {
/* 000226 */ 				var __accu0__ = s_items;
/* 000226 */ 				return __call__ (__accu0__.append, __accu0__, __add__ (__add__ (__add__ (tag_content, ' '), tgtid_md_code), item_content));
/* 000226 */ 			}) ();
/* 000226 */ 		}
/* 000228 */ 		// pass;
/* 000232 */ 		var mdindent_cur = (function () {
/* 000232 */ 			var __accu0__ = (function () {
/* 000232 */ 				var __accu1__ = render_context;
/* 000232 */ 				return __call__ (__accu1__.get_logical_state, __accu1__, 'flm_markdown');
/* 000232 */ 			}) ();
/* 000232 */ 			return __call__ (__accu0__.py_get, __accu0__, 'md_indent', '');
/* 000232 */ 		}) ();
/* 000233 */ 		var mdindent = __add__ (mdindent_cur, '  ');
/* 000234 */ 		var __withid0__ = (function () {
/* 000234 */ 			var __accu0__ = render_context;
/* 000234 */ 			return __call__ (__accu0__.push_logical_state, __accu0__, 'flm_markdown', 'indent', mdindent);
/* 000234 */ 		}) ();
/* 000234 */ 		try {
/* 000234 */ 			__withid0__.__enter__ ();
/* 000236 */ 			var mdtexts = [];
/* 000238 */ 			var __iterable0__ = s_items;
/* 000238 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000238 */ 				var s_item = __getitem__ (__iterable0__, __index0__);
/* 000239 */ 				(function () {
/* 000239 */ 					var __accu0__ = mdtexts;
/* 000240 */ 					return __call__ (__accu0__.append, __accu0__, __add__ (__add__ (mdindent_cur, '- '), (function () {
/* 000240 */ 						var __accu1__ = s_item;
/* 000240 */ 						return __call__ (__accu1__.py_replace, __accu1__, '\n', __add__ ('\n', mdindent));
/* 000240 */ 					}) ()));
/* 000240 */ 				}) ();
/* 000240 */ 			}
/* 000240 */ 			__withid0__.__exit__ ();
/* 000240 */ 		}
/* 000240 */ 		catch (__except0__) {
/* 000240 */ 			if (! (__withid0__.__exit__ (__except0__.name, __except0__, __except0__.stack))) {
/* 000240 */ 				throw __except0__;
/* 000240 */ 			}
/* 000240 */ 		}
/* 000243 */ 		var content = (function () {
/* 000243 */ 			var __accu0__ = self;
/* 000243 */ 			return __call__ (__accu0__.render_join_blocks, __accu0__, mdtexts, render_context);
/* 000243 */ 		}) ();
/* 000245 */ 		return content;
/* 000245 */ 	});},
/* 000248 */ 	get render_heading () {return __get__ (this, function (self, heading_nodelist, render_context) {
/* 000248 */ 		var heading_level = 1;
/* 000248 */ 		var inline_heading = false;
/* 000248 */ 		var target_id = null;
/* 000248 */ 		var annotations = null;
/* 000248 */ 		if (arguments.length) {
/* 000248 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000248 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000248 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000248 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000248 */ 					switch (__attrib0__) {
/* 000248 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000248 */ 						case 'heading_nodelist': var heading_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000248 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000248 */ 						case 'heading_level': var heading_level = __allkwargs0__ [__attrib0__]; break;
/* 000248 */ 						case 'inline_heading': var inline_heading = __allkwargs0__ [__attrib0__]; break;
/* 000248 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000248 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000248 */ 					}
/* 000248 */ 				}
/* 000248 */ 			}
/* 000248 */ 		}
/* 000248 */ 		else {
/* 000248 */ 		}
/* 000255 */ 		var title_content = (function () {
/* 000255 */ 			var __accu0__ = self;
/* 000255 */ 			return __call__ (__accu0__.render_inline_content, __accu0__, heading_nodelist, render_context);
/* 000255 */ 		}) ();
/* 000257 */ 		var target_id_md_code = (function () {
/* 000257 */ 			var __accu0__ = self;
/* 000257 */ 			return __call__ (__accu0__._get_target_id_md_code, __accu0__, target_id);
/* 000257 */ 		}) ();
/* 000260 */ 		return __add__ (__add__ (__add__ (__add__ (__mul__ ('#', heading_level), ' '), target_id_md_code), (function () {
/* 000260 */ 			var __accu0__ = title_content;
/* 000260 */ 			return __call__ (__accu0__.py_replace, __accu0__, '\n', ' ');
/* 000260 */ 		}) ()), '\n');
/* 000260 */ 	});},
/* 000264 */ 	get render_link () {return __get__ (this, function (self, ref_type, href, display_nodelist, render_context, annotations) {
/* 000264 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000264 */ 			var annotations = null;
/* 000264 */ 		};
/* 000264 */ 		if (arguments.length) {
/* 000264 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000264 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000264 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000264 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000264 */ 					switch (__attrib0__) {
/* 000264 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000264 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000264 */ 						case 'href': var href = __allkwargs0__ [__attrib0__]; break;
/* 000264 */ 						case 'display_nodelist': var display_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000264 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000264 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000264 */ 					}
/* 000264 */ 				}
/* 000264 */ 			}
/* 000264 */ 		}
/* 000264 */ 		else {
/* 000264 */ 		}
/* 000265 */ 		var display_content = (function () {
/* 000265 */ 			var __accu0__ = self;
/* 000265 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, display_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000265 */ 		}) ();
/* 000270 */ 		return __add__ (__add__ (__add__ (__add__ ('[', display_content), ']('), href), ')');
/* 000270 */ 	});},
/* 000272 */ 	get render_delayed_marker () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000272 */ 		if (arguments.length) {
/* 000272 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000272 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000272 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000272 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000272 */ 					switch (__attrib0__) {
/* 000272 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000272 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000272 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000272 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000272 */ 					}
/* 000272 */ 				}
/* 000272 */ 			}
/* 000272 */ 		}
/* 000272 */ 		else {
/* 000272 */ 		}
/* 000273 */ 		return '<FLM:DLYD:{}/>'.format (delayed_key);
/* 000273 */ 	});},
/* 000275 */ 	get render_delayed_dummy_placeholder () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000275 */ 		if (arguments.length) {
/* 000275 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000275 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000275 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000275 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000275 */ 					switch (__attrib0__) {
/* 000275 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000275 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000275 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000275 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000275 */ 					}
/* 000275 */ 				}
/* 000275 */ 			}
/* 000275 */ 		}
/* 000275 */ 		else {
/* 000275 */ 		}
/* 000276 */ 		return '<!-- delayed:{} -->'.format (delayed_key);
/* 000276 */ 	});},
/* 000278 */ 	get replace_delayed_markers_with_final_values () {return __get__ (this, function (self, content, delayed_values) {
/* 000278 */ 		if (arguments.length) {
/* 000278 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000278 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000278 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000278 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000278 */ 					switch (__attrib0__) {
/* 000278 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000278 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000278 */ 						case 'delayed_values': var delayed_values = __allkwargs0__ [__attrib0__]; break;
/* 000278 */ 					}
/* 000278 */ 				}
/* 000278 */ 			}
/* 000278 */ 		}
/* 000278 */ 		else {
/* 000278 */ 		}
/* 000279 */ 		return (function () {
/* 000279 */ 			var __accu0__ = _rx_delayed_markers;
/* 000279 */ 			return __call__ (__accu0__.sub, __accu0__, (function __lambda__ (m) {
/* 000279 */ 				if (arguments.length) {
/* 000279 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000279 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000279 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000279 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000279 */ 							switch (__attrib0__) {
/* 000279 */ 								case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000279 */ 							}
/* 000279 */ 						}
/* 000279 */ 					}
/* 000279 */ 				}
/* 000279 */ 				else {
/* 000279 */ 				}
/* 000280 */ 				return __getitem__ (delayed_values, __call__ (int, null, (function () {
/* 000280 */ 					var __accu1__ = m;
/* 000280 */ 					return __call__ (__accu1__.group, __accu1__, 'key');
/* 000280 */ 				}) ()));
/* 000280 */ 			}), content);
/* 000280 */ 		}) ();
/* 000280 */ 	});},
/* 000287 */ 	get render_float () {return __get__ (this, function (self, float_instance, render_context) {
/* 000287 */ 		if (arguments.length) {
/* 000287 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000287 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000287 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000287 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000287 */ 					switch (__attrib0__) {
/* 000287 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000287 */ 						case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000287 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000287 */ 					}
/* 000287 */ 				}
/* 000287 */ 			}
/* 000287 */ 		}
/* 000287 */ 		else {
/* 000287 */ 		}
/* 000290 */ 		var full_figcaption_rendered_list = [];
/* 000291 */ 		if (__t__ (float_instance.counter_value !== null)) {
/* 000292 */ 			(function () {
/* 000292 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000293 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000293 */ 					var __accu1__ = self;
/* 000296 */ 					return __call__ (__accu1__.render_join, __accu1__, [float_instance.float_type_info.float_caption_name, '\xa0', (function () {
/* 000296 */ 						var __accu2__ = self;
/* 000296 */ 						return __call__ (__accu2__.render_nodelist, __accu2__, float_instance.formatted_counter_value_flm.nodes, __kwargtrans__ ({render_context: render_context}));
/* 000296 */ 					}) ()], render_context);
/* 000296 */ 				}) ());
/* 000296 */ 			}) ();
/* 000296 */ 		}
/* 000300 */ 		else if (__t__ (float_instance.caption_nodelist)) {
/* 000301 */ 			(function () {
/* 000301 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000301 */ 				return __call__ (__accu0__.append, __accu0__, float_instance.float_type_info.float_caption_name);
/* 000301 */ 			}) ();
/* 000301 */ 		}
/* 000303 */ 		else {
/* 000305 */ 			// pass;
/* 000305 */ 		}
/* 000307 */ 		if (__t__ (float_instance.caption_nodelist)) {
/* 000308 */ 			(function () {
/* 000308 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000308 */ 				return __call__ (__accu0__.append, __accu0__, ': ');
/* 000308 */ 			}) ();
/* 000311 */ 			(function () {
/* 000311 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000312 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000312 */ 					var __accu1__ = self;
/* 000312 */ 					return __call__ (__accu1__.render_nodelist, __accu1__, float_instance.caption_nodelist, __kwargtrans__ ({render_context: render_context}));
/* 000312 */ 				}) ());
/* 000312 */ 			}) ();
/* 000312 */ 		}
/* 000318 */ 		var rendered_float_caption = null;
/* 000319 */ 		if (__t__ (full_figcaption_rendered_list)) {
/* 000320 */ 			var rendered_float_caption = (function () {
/* 000320 */ 				var __accu0__ = self;
/* 000320 */ 				return __call__ (__accu0__.render_join, __accu0__, full_figcaption_rendered_list, render_context);
/* 000320 */ 			}) ();
/* 000320 */ 		}
/* 000323 */ 		var float_content_block = (function () {
/* 000323 */ 			var __accu0__ = self;
/* 000323 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, float_instance.content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: true}));
/* 000323 */ 		}) ();
/* 000329 */ 		if (__t__ (rendered_float_caption !== null)) {
/* 000330 */ 			var float_content_with_caption = (function () {
/* 000330 */ 				var __accu0__ = self;
/* 000330 */ 				return __call__ (__accu0__.render_join_blocks, __accu0__, [float_content_block, rendered_float_caption], render_context);
/* 000330 */ 			}) ();
/* 000330 */ 		}
/* 000334 */ 		else {
/* 000335 */ 			var float_content_with_caption = float_content_block;
/* 000335 */ 		}
/* 000337 */ 		var target_id_md_code = (function () {
/* 000337 */ 			var __accu0__ = self;
/* 000337 */ 			return __call__ (__accu0__._get_target_id_md_code, __accu0__, float_instance.target_id);
/* 000337 */ 		}) ();
/* 000339 */ 		var mdindent = (function () {
/* 000339 */ 			var __accu0__ = (function () {
/* 000339 */ 				var __accu1__ = render_context;
/* 000339 */ 				return __call__ (__accu1__.get_logical_state, __accu1__, 'flm_markdown');
/* 000339 */ 			}) ();
/* 000339 */ 			return __call__ (__accu0__.py_get, __accu0__, 'md_indent', '');
/* 000339 */ 		}) ();
/* 000340 */ 		return __add__ (mdindent, (function () {
/* 000343 */ 			var __accu0__ = __add__ (__add__ (__add__ ('---\n\n', target_id_md_code), (function () {
/* 000343 */ 				var __accu1__ = float_content_with_caption;
/* 000343 */ 				return __call__ (__accu1__.strip, __accu1__);
/* 000343 */ 			}) ()), '\n\n---\n');
/* 000343 */ 			return __call__ (__accu0__.py_replace, __accu0__, '\n', __add__ ('\n', mdindent));
/* 000343 */ 		}) ());
/* 000343 */ 	});},
/* 000348 */ 	graphics_raster_magnification: 1,
/* 000349 */ 	graphics_vector_magnification: 1,
/* 000351 */ 	get render_graphics_block () {return __get__ (this, function (self, graphics_resource, render_context) {
/* 000351 */ 		if (arguments.length) {
/* 000351 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000351 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000351 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000351 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000351 */ 					switch (__attrib0__) {
/* 000351 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000351 */ 						case 'graphics_resource': var graphics_resource = __allkwargs0__ [__attrib0__]; break;
/* 000351 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000351 */ 					}
/* 000351 */ 				}
/* 000351 */ 			}
/* 000351 */ 		}
/* 000351 */ 		else {
/* 000351 */ 		}
/* 000353 */ 		var src_url = graphics_resource.src_url;
/* 000355 */ 		return __add__ (__add__ ('![](', src_url), ')');
/* 000355 */ 	});},
/* 000358 */ 	get render_cells () {return __get__ (this, function (self, cells_model, render_context, target_id) {
/* 000358 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000358 */ 			var target_id = null;
/* 000358 */ 		};
/* 000358 */ 		if (arguments.length) {
/* 000358 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000358 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000358 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000358 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000358 */ 					switch (__attrib0__) {
/* 000358 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000358 */ 						case 'cells_model': var cells_model = __allkwargs0__ [__attrib0__]; break;
/* 000358 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000358 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000358 */ 					}
/* 000358 */ 				}
/* 000358 */ 			}
/* 000358 */ 		}
/* 000358 */ 		else {
/* 000358 */ 		}
/* 000361 */ 		return (function () {
/* 000361 */ 			var __accu0__ = __call__ (HtmlFragmentRenderer, null);
/* 000361 */ 			return __call__ (__accu0__.render_cells, __accu0__, cells_model, render_context, __kwargtrans__ ({target_id: target_id}));
/* 000361 */ 		}) ();
/* 000361 */ 	});},
/* 000366 */ 	get _get_target_id_md_code () {return __get__ (this, function (self, target_id) {
/* 000366 */ 		if (arguments.length) {
/* 000366 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000366 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000366 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000366 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000366 */ 					switch (__attrib0__) {
/* 000366 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000366 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000366 */ 					}
/* 000366 */ 				}
/* 000366 */ 			}
/* 000366 */ 		}
/* 000366 */ 		else {
/* 000366 */ 		}
/* 000367 */ 		if (__t__ (target_id === null)) {
/* 000368 */ 			return '';
/* 000368 */ 		}
/* 000369 */ 		if (__t__ (__eq__ (self.use_target_ids, 'pandoc'))) {
/* 000370 */ 			return __add__ (__add__ ('[]{#', target_id), '} ');
/* 000370 */ 		}
/* 000371 */ 		if (__t__ (__eq__ (self.use_target_ids, 'github'))) {
/* 000372 */ 			return __add__ (__add__ ('[](#', target_id), ') ');
/* 000372 */ 		}
/* 000373 */ 		if (__t__ (__eq__ (self.use_target_ids, 'anchor'))) {
/* 000374 */ 			return __add__ (__add__ ('<a name="', target_id), '"></a> ');
/* 000374 */ 		}
/* 000375 */ 		return '';
/* 000375 */ 	});}
/* 000375 */ });
/* 000383 */ export var _rx_delayed_markers = (function () {
/* 000383 */ 	var __accu0__ = re;
/* 000383 */ 	return __call__ (__accu0__.compile, __accu0__, '<FLM:DLYD:(?P<key>\\d+)\\s*/>');
/* 000383 */ }) ();
/* 000389 */ export var FragmentRendererInformation =  __class__ ('FragmentRendererInformation', [object], {
/* 000389 */ 	__module__: __name__,
/* 000390 */ 	FragmentRendererClass: MarkdownFragmentRenderer,
/* 000391 */ 	format_name: 'markdown'
/* 000391 */ });
/* 000006 */ 
//# sourceMappingURL=flm.fragmentrenderer.markdown.map