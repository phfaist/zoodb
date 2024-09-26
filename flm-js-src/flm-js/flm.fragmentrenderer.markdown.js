/* 000001 */ // Transcrypt'ed from Python, 2024-09-26 21:06:59
/* 000006 */ var logging = {};
/* 000006 */ var re = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
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
/* 000144 */ 	get render_enumeration () {return __get__ (this, function (self, iter_items_nodelists, counter_formatter, render_context) {
/* 000144 */ 		var target_id_generator = null;
/* 000144 */ 		var annotations = null;
/* 000144 */ 		var nested_depth = null;
/* 000144 */ 		if (arguments.length) {
/* 000144 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000144 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000144 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000144 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000144 */ 					switch (__attrib0__) {
/* 000144 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000144 */ 						case 'iter_items_nodelists': var iter_items_nodelists = __allkwargs0__ [__attrib0__]; break;
/* 000144 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000144 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000144 */ 						case 'target_id_generator': var target_id_generator = __allkwargs0__ [__attrib0__]; break;
/* 000144 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000144 */ 						case 'nested_depth': var nested_depth = __allkwargs0__ [__attrib0__]; break;
/* 000144 */ 					}
/* 000144 */ 				}
/* 000144 */ 			}
/* 000144 */ 		}
/* 000144 */ 		else {
/* 000144 */ 		}
/* 000156 */ 		var s_items = [];
/* 000158 */ 		var __iterable0__ = __call__ (enumerate, null, iter_items_nodelists);
/* 000158 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000158 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000158 */ 			var j = __left0__ [0];
/* 000158 */ 			var item_content_nodelist = __left0__ [1];
/* 000160 */ 			var use_block_level = true;
/* 000161 */ 			if (__t__ (item_content_nodelist.parsing_state.is_block_level === false)) {
/* 000164 */ 				var use_block_level = false;
/* 000164 */ 			}
/* 000166 */ 			// pass;
/* 000170 */ 			// pass;
/* 000174 */ 			var item_content = (function () {
/* 000174 */ 				var __accu0__ = self;
/* 000174 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, item_content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: use_block_level}));
/* 000174 */ 			}) ();
/* 000180 */ 			var enumno = __add__ (1, j);
/* 000182 */ 			var tag_nodelist = __call__ (counter_formatter, null, enumno);
/* 000183 */ 			if (__t__ (__call__ (isinstance, null, tag_nodelist, str))) {
/* 000184 */ 				var tag_content = (function () {
/* 000184 */ 					var __accu0__ = self;
/* 000184 */ 					return __call__ (__accu0__.render_value, __accu0__, tag_nodelist, render_context);
/* 000184 */ 				}) ();
/* 000184 */ 			}
/* 000185 */ 			else {
/* 000186 */ 				var tag_content = (function () {
/* 000186 */ 					var __accu0__ = self;
/* 000186 */ 					return __call__ (__accu0__.render_nodelist, __accu0__, tag_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000186 */ 				}) ();
/* 000186 */ 			}
/* 000192 */ 			var tgtid_md_code = '';
/* 000193 */ 			if (__t__ (target_id_generator !== null)) {
/* 000194 */ 				var target_id = __call__ (target_id_generator, null, enumno);
/* 000195 */ 				if (__t__ (target_id !== null)) {
/* 000196 */ 					var tgtid_md_code = (function () {
/* 000196 */ 						var __accu0__ = self;
/* 000196 */ 						return __call__ (__accu0__._get_target_id_md_code, __accu0__, target_id);
/* 000196 */ 					}) ();
/* 000196 */ 				}
/* 000196 */ 			}
/* 000200 */ 			(function () {
/* 000200 */ 				var __accu0__ = s_items;
/* 000200 */ 				return __call__ (__accu0__.append, __accu0__, __add__ (__add__ (__add__ (tag_content, ' '), tgtid_md_code), item_content));
/* 000200 */ 			}) ();
/* 000200 */ 		}
/* 000202 */ 		// pass;
/* 000206 */ 		var mdindent_cur = (function () {
/* 000206 */ 			var __accu0__ = (function () {
/* 000206 */ 				var __accu1__ = render_context;
/* 000206 */ 				return __call__ (__accu1__.get_logical_state, __accu1__, 'flm_markdown');
/* 000206 */ 			}) ();
/* 000206 */ 			return __call__ (__accu0__.py_get, __accu0__, 'md_indent', '');
/* 000206 */ 		}) ();
/* 000207 */ 		var mdindent = __add__ (mdindent_cur, '  ');
/* 000208 */ 		var __withid0__ = (function () {
/* 000208 */ 			var __accu0__ = render_context;
/* 000208 */ 			return __call__ (__accu0__.push_logical_state, __accu0__, 'flm_markdown', 'indent', mdindent);
/* 000208 */ 		}) ();
/* 000208 */ 		try {
/* 000208 */ 			__withid0__.__enter__ ();
/* 000210 */ 			var mdtexts = [];
/* 000212 */ 			var __iterable0__ = s_items;
/* 000212 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000212 */ 				var s_item = __getitem__ (__iterable0__, __index0__);
/* 000213 */ 				(function () {
/* 000213 */ 					var __accu0__ = mdtexts;
/* 000214 */ 					return __call__ (__accu0__.append, __accu0__, __add__ (__add__ (mdindent_cur, '- '), (function () {
/* 000214 */ 						var __accu1__ = s_item;
/* 000214 */ 						return __call__ (__accu1__.py_replace, __accu1__, '\n', __add__ ('\n', mdindent));
/* 000214 */ 					}) ()));
/* 000214 */ 				}) ();
/* 000214 */ 			}
/* 000214 */ 			__withid0__.__exit__ ();
/* 000214 */ 		}
/* 000214 */ 		catch (__except0__) {
/* 000214 */ 			if (! (__withid0__.__exit__ (__except0__.name, __except0__, __except0__.stack))) {
/* 000214 */ 				throw __except0__;
/* 000214 */ 			}
/* 000214 */ 		}
/* 000217 */ 		var content = (function () {
/* 000217 */ 			var __accu0__ = self;
/* 000217 */ 			return __call__ (__accu0__.render_join_blocks, __accu0__, mdtexts, render_context);
/* 000217 */ 		}) ();
/* 000219 */ 		return content;
/* 000219 */ 	});},
/* 000222 */ 	get render_heading () {return __get__ (this, function (self, heading_nodelist, render_context) {
/* 000222 */ 		var heading_level = 1;
/* 000222 */ 		var inline_heading = false;
/* 000222 */ 		var target_id = null;
/* 000222 */ 		var annotations = null;
/* 000222 */ 		if (arguments.length) {
/* 000222 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000222 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000222 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000222 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000222 */ 					switch (__attrib0__) {
/* 000222 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000222 */ 						case 'heading_nodelist': var heading_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000222 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000222 */ 						case 'heading_level': var heading_level = __allkwargs0__ [__attrib0__]; break;
/* 000222 */ 						case 'inline_heading': var inline_heading = __allkwargs0__ [__attrib0__]; break;
/* 000222 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000222 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000222 */ 					}
/* 000222 */ 				}
/* 000222 */ 			}
/* 000222 */ 		}
/* 000222 */ 		else {
/* 000222 */ 		}
/* 000229 */ 		var title_content = (function () {
/* 000229 */ 			var __accu0__ = self;
/* 000229 */ 			return __call__ (__accu0__.render_inline_content, __accu0__, heading_nodelist, render_context);
/* 000229 */ 		}) ();
/* 000231 */ 		var target_id_md_code = (function () {
/* 000231 */ 			var __accu0__ = self;
/* 000231 */ 			return __call__ (__accu0__._get_target_id_md_code, __accu0__, target_id);
/* 000231 */ 		}) ();
/* 000234 */ 		return __add__ (__add__ (__add__ (__add__ (__mul__ ('#', heading_level), ' '), target_id_md_code), (function () {
/* 000234 */ 			var __accu0__ = title_content;
/* 000234 */ 			return __call__ (__accu0__.py_replace, __accu0__, '\n', ' ');
/* 000234 */ 		}) ()), '\n');
/* 000234 */ 	});},
/* 000238 */ 	get render_link () {return __get__ (this, function (self, ref_type, href, display_nodelist, render_context, annotations) {
/* 000238 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000238 */ 			var annotations = null;
/* 000238 */ 		};
/* 000238 */ 		if (arguments.length) {
/* 000238 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000238 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000238 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000238 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000238 */ 					switch (__attrib0__) {
/* 000238 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000238 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000238 */ 						case 'href': var href = __allkwargs0__ [__attrib0__]; break;
/* 000238 */ 						case 'display_nodelist': var display_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000238 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000238 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000238 */ 					}
/* 000238 */ 				}
/* 000238 */ 			}
/* 000238 */ 		}
/* 000238 */ 		else {
/* 000238 */ 		}
/* 000239 */ 		var display_content = (function () {
/* 000239 */ 			var __accu0__ = self;
/* 000239 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, display_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000239 */ 		}) ();
/* 000244 */ 		return __add__ (__add__ (__add__ (__add__ ('[', display_content), ']('), href), ')');
/* 000244 */ 	});},
/* 000246 */ 	get render_delayed_marker () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000246 */ 		if (arguments.length) {
/* 000246 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000246 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000246 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000246 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000246 */ 					switch (__attrib0__) {
/* 000246 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000246 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000246 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000246 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000246 */ 					}
/* 000246 */ 				}
/* 000246 */ 			}
/* 000246 */ 		}
/* 000246 */ 		else {
/* 000246 */ 		}
/* 000247 */ 		return '<FLM:DLYD:{}/>'.format (delayed_key);
/* 000247 */ 	});},
/* 000249 */ 	get render_delayed_dummy_placeholder () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000249 */ 		if (arguments.length) {
/* 000249 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000249 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000249 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000249 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000249 */ 					switch (__attrib0__) {
/* 000249 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000249 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000249 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000249 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000249 */ 					}
/* 000249 */ 				}
/* 000249 */ 			}
/* 000249 */ 		}
/* 000249 */ 		else {
/* 000249 */ 		}
/* 000250 */ 		return '<!-- delayed:{} -->'.format (delayed_key);
/* 000250 */ 	});},
/* 000252 */ 	get replace_delayed_markers_with_final_values () {return __get__ (this, function (self, content, delayed_values) {
/* 000252 */ 		if (arguments.length) {
/* 000252 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000252 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000252 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000252 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000252 */ 					switch (__attrib0__) {
/* 000252 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000252 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000252 */ 						case 'delayed_values': var delayed_values = __allkwargs0__ [__attrib0__]; break;
/* 000252 */ 					}
/* 000252 */ 				}
/* 000252 */ 			}
/* 000252 */ 		}
/* 000252 */ 		else {
/* 000252 */ 		}
/* 000253 */ 		return (function () {
/* 000253 */ 			var __accu0__ = _rx_delayed_markers;
/* 000253 */ 			return __call__ (__accu0__.sub, __accu0__, (function __lambda__ (m) {
/* 000253 */ 				if (arguments.length) {
/* 000253 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000253 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000253 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000253 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000253 */ 							switch (__attrib0__) {
/* 000253 */ 								case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000253 */ 							}
/* 000253 */ 						}
/* 000253 */ 					}
/* 000253 */ 				}
/* 000253 */ 				else {
/* 000253 */ 				}
/* 000254 */ 				return __getitem__ (delayed_values, __call__ (int, null, (function () {
/* 000254 */ 					var __accu1__ = m;
/* 000254 */ 					return __call__ (__accu1__.group, __accu1__, 'key');
/* 000254 */ 				}) ()));
/* 000254 */ 			}), content);
/* 000254 */ 		}) ();
/* 000254 */ 	});},
/* 000261 */ 	get render_float () {return __get__ (this, function (self, float_instance, render_context) {
/* 000261 */ 		if (arguments.length) {
/* 000261 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000261 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000261 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000261 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000261 */ 					switch (__attrib0__) {
/* 000261 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000261 */ 						case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000261 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000261 */ 					}
/* 000261 */ 				}
/* 000261 */ 			}
/* 000261 */ 		}
/* 000261 */ 		else {
/* 000261 */ 		}
/* 000264 */ 		var full_figcaption_rendered_list = [];
/* 000265 */ 		if (__t__ (float_instance.number !== null)) {
/* 000266 */ 			(function () {
/* 000266 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000267 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000267 */ 					var __accu1__ = self;
/* 000270 */ 					return __call__ (__accu1__.render_join, __accu1__, [float_instance.float_type_info.float_caption_name, '\xa0', (function () {
/* 000270 */ 						var __accu2__ = self;
/* 000270 */ 						return __call__ (__accu2__.render_nodelist, __accu2__, float_instance.formatted_counter_value_flm.nodes, __kwargtrans__ ({render_context: render_context}));
/* 000270 */ 					}) ()], render_context);
/* 000270 */ 				}) ());
/* 000270 */ 			}) ();
/* 000270 */ 		}
/* 000274 */ 		else if (__t__ (float_instance.caption_nodelist)) {
/* 000275 */ 			(function () {
/* 000275 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000275 */ 				return __call__ (__accu0__.append, __accu0__, float_instance.float_type_info.float_caption_name);
/* 000275 */ 			}) ();
/* 000275 */ 		}
/* 000277 */ 		else {
/* 000279 */ 			// pass;
/* 000279 */ 		}
/* 000281 */ 		if (__t__ (float_instance.caption_nodelist)) {
/* 000282 */ 			(function () {
/* 000282 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000282 */ 				return __call__ (__accu0__.append, __accu0__, ': ');
/* 000282 */ 			}) ();
/* 000285 */ 			(function () {
/* 000285 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000286 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000286 */ 					var __accu1__ = self;
/* 000286 */ 					return __call__ (__accu1__.render_nodelist, __accu1__, float_instance.caption_nodelist, __kwargtrans__ ({render_context: render_context}));
/* 000286 */ 				}) ());
/* 000286 */ 			}) ();
/* 000286 */ 		}
/* 000292 */ 		var rendered_float_caption = null;
/* 000293 */ 		if (__t__ (full_figcaption_rendered_list)) {
/* 000294 */ 			var rendered_float_caption = (function () {
/* 000294 */ 				var __accu0__ = self;
/* 000294 */ 				return __call__ (__accu0__.render_join, __accu0__, full_figcaption_rendered_list, render_context);
/* 000294 */ 			}) ();
/* 000294 */ 		}
/* 000297 */ 		var float_content_block = (function () {
/* 000297 */ 			var __accu0__ = self;
/* 000297 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, float_instance.content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: true}));
/* 000297 */ 		}) ();
/* 000303 */ 		if (__t__ (rendered_float_caption !== null)) {
/* 000304 */ 			var float_content_with_caption = (function () {
/* 000304 */ 				var __accu0__ = self;
/* 000304 */ 				return __call__ (__accu0__.render_join_blocks, __accu0__, [float_content_block, rendered_float_caption], render_context);
/* 000304 */ 			}) ();
/* 000304 */ 		}
/* 000308 */ 		else {
/* 000309 */ 			var float_content_with_caption = float_content_block;
/* 000309 */ 		}
/* 000311 */ 		var target_id_md_code = (function () {
/* 000311 */ 			var __accu0__ = self;
/* 000311 */ 			return __call__ (__accu0__._get_target_id_md_code, __accu0__, float_instance.target_id);
/* 000311 */ 		}) ();
/* 000313 */ 		var mdindent = (function () {
/* 000313 */ 			var __accu0__ = (function () {
/* 000313 */ 				var __accu1__ = render_context;
/* 000313 */ 				return __call__ (__accu1__.get_logical_state, __accu1__, 'flm_markdown');
/* 000313 */ 			}) ();
/* 000313 */ 			return __call__ (__accu0__.py_get, __accu0__, 'md_indent', '');
/* 000313 */ 		}) ();
/* 000314 */ 		return __add__ (mdindent, (function () {
/* 000317 */ 			var __accu0__ = __add__ (__add__ (__add__ ('---\n\n', target_id_md_code), (function () {
/* 000317 */ 				var __accu1__ = float_content_with_caption;
/* 000317 */ 				return __call__ (__accu1__.strip, __accu1__);
/* 000317 */ 			}) ()), '\n\n---\n');
/* 000317 */ 			return __call__ (__accu0__.py_replace, __accu0__, '\n', __add__ ('\n', mdindent));
/* 000317 */ 		}) ());
/* 000317 */ 	});},
/* 000322 */ 	graphics_raster_magnification: 1,
/* 000323 */ 	graphics_vector_magnification: 1,
/* 000325 */ 	get render_graphics_block () {return __get__ (this, function (self, graphics_resource, render_context) {
/* 000325 */ 		if (arguments.length) {
/* 000325 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000325 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000325 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000325 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000325 */ 					switch (__attrib0__) {
/* 000325 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000325 */ 						case 'graphics_resource': var graphics_resource = __allkwargs0__ [__attrib0__]; break;
/* 000325 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000325 */ 					}
/* 000325 */ 				}
/* 000325 */ 			}
/* 000325 */ 		}
/* 000325 */ 		else {
/* 000325 */ 		}
/* 000327 */ 		var src_url = graphics_resource.src_url;
/* 000329 */ 		return __add__ (__add__ ('![](', src_url), ')');
/* 000329 */ 	});},
/* 000332 */ 	get render_cells () {return __get__ (this, function (self, cells_model, render_context, target_id) {
/* 000332 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000332 */ 			var target_id = null;
/* 000332 */ 		};
/* 000332 */ 		if (arguments.length) {
/* 000332 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000332 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000332 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000332 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000332 */ 					switch (__attrib0__) {
/* 000332 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000332 */ 						case 'cells_model': var cells_model = __allkwargs0__ [__attrib0__]; break;
/* 000332 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000332 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000332 */ 					}
/* 000332 */ 				}
/* 000332 */ 			}
/* 000332 */ 		}
/* 000332 */ 		else {
/* 000332 */ 		}
/* 000335 */ 		return (function () {
/* 000335 */ 			var __accu0__ = __call__ (HtmlFragmentRenderer, null);
/* 000335 */ 			return __call__ (__accu0__.render_cells, __accu0__, cells_model, render_context, __kwargtrans__ ({target_id: target_id}));
/* 000335 */ 		}) ();
/* 000335 */ 	});},
/* 000340 */ 	get _get_target_id_md_code () {return __get__ (this, function (self, target_id) {
/* 000340 */ 		if (arguments.length) {
/* 000340 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000340 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000340 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000340 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000340 */ 					switch (__attrib0__) {
/* 000340 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000340 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000340 */ 					}
/* 000340 */ 				}
/* 000340 */ 			}
/* 000340 */ 		}
/* 000340 */ 		else {
/* 000340 */ 		}
/* 000341 */ 		if (__t__ (target_id === null)) {
/* 000342 */ 			return '';
/* 000342 */ 		}
/* 000343 */ 		if (__t__ (__eq__ (self.use_target_ids, 'pandoc'))) {
/* 000344 */ 			return __add__ (__add__ ('[]{#', target_id), '} ');
/* 000344 */ 		}
/* 000345 */ 		if (__t__ (__eq__ (self.use_target_ids, 'github'))) {
/* 000346 */ 			return __add__ (__add__ ('[](#', target_id), ') ');
/* 000346 */ 		}
/* 000347 */ 		if (__t__ (__eq__ (self.use_target_ids, 'anchor'))) {
/* 000348 */ 			return __add__ (__add__ ('<a name="', target_id), '"></a> ');
/* 000348 */ 		}
/* 000349 */ 		return '';
/* 000349 */ 	});}
/* 000349 */ });
/* 000357 */ export var _rx_delayed_markers = (function () {
/* 000357 */ 	var __accu0__ = re;
/* 000357 */ 	return __call__ (__accu0__.compile, __accu0__, '<FLM:DLYD:(?P<key>\\d+)\\s*/>');
/* 000357 */ }) ();
/* 000363 */ export var FragmentRendererInformation =  __class__ ('FragmentRendererInformation', [object], {
/* 000363 */ 	__module__: __name__,
/* 000364 */ 	FragmentRendererClass: MarkdownFragmentRenderer,
/* 000365 */ 	format_name: 'markdown'
/* 000365 */ });
/* 000006 */ 
//# sourceMappingURL=flm.fragmentrenderer.markdown.map