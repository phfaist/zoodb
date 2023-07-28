/* 000001 */ // Transcrypt'ed from Python, 2023-07-28 17:42:14
/* 000006 */ var logging = {};
/* 000006 */ var re = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000013 */ import {HtmlFragmentRenderer} from './flm.fragmentrenderer.html.js';
/* 000012 */ import {FragmentRenderer} from './flm.fragmentrenderer.js';
/* 000008 */ import * as __module_logging__ from './logging.js';
/* 000008 */ __nest__ (logging, '', __module_logging__);
/* 000006 */ import * as __module_re__ from './re.js';
/* 000006 */ __nest__ (re, '', __module_re__);
/* 000006 */ export {HtmlFragmentRenderer, FragmentRenderer};
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
/* 000114 */ 			var __accu0__ = nodelist;
/* 000114 */ 			return __call__ (__accu0__.latex_verbatim, __accu0__);
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
/* 000195 */ 				var tgtid_md_code = (function () {
/* 000195 */ 					var __accu0__ = self;
/* 000195 */ 					return __call__ (__accu0__._get_target_id_md_code, __accu0__, target_id);
/* 000195 */ 				}) ();
/* 000195 */ 			}
/* 000199 */ 			(function () {
/* 000199 */ 				var __accu0__ = s_items;
/* 000199 */ 				return __call__ (__accu0__.append, __accu0__, __add__ (__add__ (__add__ (tag_content, ' '), tgtid_md_code), item_content));
/* 000199 */ 			}) ();
/* 000199 */ 		}
/* 000201 */ 		// pass;
/* 000205 */ 		var mdindent_cur = (function () {
/* 000205 */ 			var __accu0__ = (function () {
/* 000205 */ 				var __accu1__ = render_context;
/* 000205 */ 				return __call__ (__accu1__.get_logical_state, __accu1__, 'flm_markdown');
/* 000205 */ 			}) ();
/* 000205 */ 			return __call__ (__accu0__.py_get, __accu0__, 'md_indent', '');
/* 000205 */ 		}) ();
/* 000206 */ 		var mdindent = __add__ (mdindent_cur, '  ');
/* 000207 */ 		var __withid0__ = (function () {
/* 000207 */ 			var __accu0__ = render_context;
/* 000207 */ 			return __call__ (__accu0__.push_logical_state, __accu0__, 'flm_markdown', 'indent', mdindent);
/* 000207 */ 		}) ();
/* 000207 */ 		try {
/* 000207 */ 			__withid0__.__enter__ ();
/* 000209 */ 			var mdtexts = [];
/* 000211 */ 			var __iterable0__ = s_items;
/* 000211 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000211 */ 				var s_item = __getitem__ (__iterable0__, __index0__);
/* 000212 */ 				(function () {
/* 000212 */ 					var __accu0__ = mdtexts;
/* 000213 */ 					return __call__ (__accu0__.append, __accu0__, __add__ (__add__ (mdindent_cur, '- '), (function () {
/* 000213 */ 						var __accu1__ = s_item;
/* 000213 */ 						return __call__ (__accu1__.py_replace, __accu1__, '\n', __add__ ('\n', mdindent));
/* 000213 */ 					}) ()));
/* 000213 */ 				}) ();
/* 000213 */ 			}
/* 000213 */ 			__withid0__.__exit__ ();
/* 000213 */ 		}
/* 000213 */ 		catch (__except0__) {
/* 000213 */ 			if (! (__withid0__.__exit__ (__except0__.name, __except0__, __except0__.stack))) {
/* 000213 */ 				throw __except0__;
/* 000213 */ 			}
/* 000213 */ 		}
/* 000216 */ 		var content = (function () {
/* 000216 */ 			var __accu0__ = self;
/* 000216 */ 			return __call__ (__accu0__.render_join_blocks, __accu0__, mdtexts, render_context);
/* 000216 */ 		}) ();
/* 000218 */ 		return content;
/* 000218 */ 	});},
/* 000221 */ 	get render_heading () {return __get__ (this, function (self, heading_nodelist, render_context) {
/* 000221 */ 		var heading_level = 1;
/* 000221 */ 		var target_id = null;
/* 000221 */ 		var inline_heading = false;
/* 000221 */ 		var annotations = null;
/* 000221 */ 		if (arguments.length) {
/* 000221 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000221 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000221 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000221 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000221 */ 					switch (__attrib0__) {
/* 000221 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000221 */ 						case 'heading_nodelist': var heading_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000221 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000221 */ 						case 'heading_level': var heading_level = __allkwargs0__ [__attrib0__]; break;
/* 000221 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000221 */ 						case 'inline_heading': var inline_heading = __allkwargs0__ [__attrib0__]; break;
/* 000221 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000221 */ 					}
/* 000221 */ 				}
/* 000221 */ 			}
/* 000221 */ 		}
/* 000221 */ 		else {
/* 000221 */ 		}
/* 000225 */ 		var title_content = (function () {
/* 000225 */ 			var __accu0__ = self;
/* 000225 */ 			return __call__ (__accu0__.render_inline_content, __accu0__, heading_nodelist, render_context);
/* 000225 */ 		}) ();
/* 000227 */ 		var target_id_md_code = (function () {
/* 000227 */ 			var __accu0__ = self;
/* 000227 */ 			return __call__ (__accu0__._get_target_id_md_code, __accu0__, target_id);
/* 000227 */ 		}) ();
/* 000230 */ 		return __add__ (__add__ (__add__ (__add__ (__mul__ ('#', heading_level), ' '), target_id_md_code), (function () {
/* 000230 */ 			var __accu0__ = title_content;
/* 000230 */ 			return __call__ (__accu0__.py_replace, __accu0__, '\n', ' ');
/* 000230 */ 		}) ()), '\n');
/* 000230 */ 	});},
/* 000234 */ 	get render_link () {return __get__ (this, function (self, ref_type, href, display_nodelist, render_context, annotations) {
/* 000234 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000234 */ 			var annotations = null;
/* 000234 */ 		};
/* 000234 */ 		if (arguments.length) {
/* 000234 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000234 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000234 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000234 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000234 */ 					switch (__attrib0__) {
/* 000234 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000234 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000234 */ 						case 'href': var href = __allkwargs0__ [__attrib0__]; break;
/* 000234 */ 						case 'display_nodelist': var display_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000234 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000234 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000234 */ 					}
/* 000234 */ 				}
/* 000234 */ 			}
/* 000234 */ 		}
/* 000234 */ 		else {
/* 000234 */ 		}
/* 000235 */ 		var display_content = (function () {
/* 000235 */ 			var __accu0__ = self;
/* 000235 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, display_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000235 */ 		}) ();
/* 000240 */ 		return __add__ (__add__ (__add__ (__add__ ('[', display_content), ']('), href), ')');
/* 000240 */ 	});},
/* 000242 */ 	get render_delayed_marker () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000242 */ 		if (arguments.length) {
/* 000242 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000242 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000242 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000242 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000242 */ 					switch (__attrib0__) {
/* 000242 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000242 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000242 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000242 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000242 */ 					}
/* 000242 */ 				}
/* 000242 */ 			}
/* 000242 */ 		}
/* 000242 */ 		else {
/* 000242 */ 		}
/* 000243 */ 		return '<FLM:DLYD:{}/>'.format (delayed_key);
/* 000243 */ 	});},
/* 000245 */ 	get render_delayed_dummy_placeholder () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000245 */ 		if (arguments.length) {
/* 000245 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000245 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000245 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000245 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000245 */ 					switch (__attrib0__) {
/* 000245 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000245 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000245 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000245 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000245 */ 					}
/* 000245 */ 				}
/* 000245 */ 			}
/* 000245 */ 		}
/* 000245 */ 		else {
/* 000245 */ 		}
/* 000246 */ 		return '<!-- delayed:{} -->'.format (delayed_key);
/* 000246 */ 	});},
/* 000248 */ 	get replace_delayed_markers_with_final_values () {return __get__ (this, function (self, content, delayed_values) {
/* 000248 */ 		if (arguments.length) {
/* 000248 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000248 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000248 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000248 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000248 */ 					switch (__attrib0__) {
/* 000248 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000248 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000248 */ 						case 'delayed_values': var delayed_values = __allkwargs0__ [__attrib0__]; break;
/* 000248 */ 					}
/* 000248 */ 				}
/* 000248 */ 			}
/* 000248 */ 		}
/* 000248 */ 		else {
/* 000248 */ 		}
/* 000249 */ 		return (function () {
/* 000249 */ 			var __accu0__ = _rx_delayed_markers;
/* 000249 */ 			return __call__ (__accu0__.sub, __accu0__, (function __lambda__ (m) {
/* 000249 */ 				if (arguments.length) {
/* 000249 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000249 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000249 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000249 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000249 */ 							switch (__attrib0__) {
/* 000249 */ 								case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000249 */ 							}
/* 000249 */ 						}
/* 000249 */ 					}
/* 000249 */ 				}
/* 000249 */ 				else {
/* 000249 */ 				}
/* 000250 */ 				return __getitem__ (delayed_values, __call__ (int, null, (function () {
/* 000250 */ 					var __accu1__ = m;
/* 000250 */ 					return __call__ (__accu1__.group, __accu1__, 'key');
/* 000250 */ 				}) ()));
/* 000250 */ 			}), content);
/* 000250 */ 		}) ();
/* 000250 */ 	});},
/* 000257 */ 	get render_float () {return __get__ (this, function (self, float_instance, render_context) {
/* 000257 */ 		if (arguments.length) {
/* 000257 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000257 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000257 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000257 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000257 */ 					switch (__attrib0__) {
/* 000257 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000257 */ 						case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000257 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000257 */ 					}
/* 000257 */ 				}
/* 000257 */ 			}
/* 000257 */ 		}
/* 000257 */ 		else {
/* 000257 */ 		}
/* 000260 */ 		var full_figcaption_rendered_list = [];
/* 000261 */ 		if (__t__ (float_instance.number !== null)) {
/* 000262 */ 			(function () {
/* 000262 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000263 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000263 */ 					var __accu1__ = self;
/* 000266 */ 					return __call__ (__accu1__.render_join, __accu1__, [float_instance.float_type_info.float_caption_name, '\xa0', (function () {
/* 000266 */ 						var __accu2__ = self;
/* 000266 */ 						return __call__ (__accu2__.render_nodelist, __accu2__, float_instance.formatted_counter_value_flm.nodes, __kwargtrans__ ({render_context: render_context}));
/* 000266 */ 					}) ()], render_context);
/* 000266 */ 				}) ());
/* 000266 */ 			}) ();
/* 000266 */ 		}
/* 000270 */ 		else if (__t__ (float_instance.caption_nodelist)) {
/* 000271 */ 			(function () {
/* 000271 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000271 */ 				return __call__ (__accu0__.append, __accu0__, float_instance.float_type_info.float_caption_name);
/* 000271 */ 			}) ();
/* 000271 */ 		}
/* 000273 */ 		else {
/* 000275 */ 			// pass;
/* 000275 */ 		}
/* 000277 */ 		if (__t__ (float_instance.caption_nodelist)) {
/* 000278 */ 			(function () {
/* 000278 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000278 */ 				return __call__ (__accu0__.append, __accu0__, ': ');
/* 000278 */ 			}) ();
/* 000281 */ 			(function () {
/* 000281 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000282 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000282 */ 					var __accu1__ = self;
/* 000282 */ 					return __call__ (__accu1__.render_nodelist, __accu1__, float_instance.caption_nodelist, __kwargtrans__ ({render_context: render_context}));
/* 000282 */ 				}) ());
/* 000282 */ 			}) ();
/* 000282 */ 		}
/* 000288 */ 		var rendered_float_caption = null;
/* 000289 */ 		if (__t__ (full_figcaption_rendered_list)) {
/* 000290 */ 			var rendered_float_caption = (function () {
/* 000290 */ 				var __accu0__ = self;
/* 000290 */ 				return __call__ (__accu0__.render_join, __accu0__, full_figcaption_rendered_list, render_context);
/* 000290 */ 			}) ();
/* 000290 */ 		}
/* 000293 */ 		var float_content_block = (function () {
/* 000293 */ 			var __accu0__ = self;
/* 000293 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, float_instance.content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: true}));
/* 000293 */ 		}) ();
/* 000299 */ 		if (__t__ (rendered_float_caption !== null)) {
/* 000300 */ 			var float_content_with_caption = (function () {
/* 000300 */ 				var __accu0__ = self;
/* 000300 */ 				return __call__ (__accu0__.render_join_blocks, __accu0__, [float_content_block, rendered_float_caption], render_context);
/* 000300 */ 			}) ();
/* 000300 */ 		}
/* 000304 */ 		else {
/* 000305 */ 			var float_content_with_caption = float_content_block;
/* 000305 */ 		}
/* 000307 */ 		var target_id_md_code = (function () {
/* 000307 */ 			var __accu0__ = self;
/* 000307 */ 			return __call__ (__accu0__._get_target_id_md_code, __accu0__, float_instance.target_id);
/* 000307 */ 		}) ();
/* 000309 */ 		var mdindent = (function () {
/* 000309 */ 			var __accu0__ = (function () {
/* 000309 */ 				var __accu1__ = render_context;
/* 000309 */ 				return __call__ (__accu1__.get_logical_state, __accu1__, 'flm_markdown');
/* 000309 */ 			}) ();
/* 000309 */ 			return __call__ (__accu0__.py_get, __accu0__, 'md_indent', '');
/* 000309 */ 		}) ();
/* 000310 */ 		return __add__ (mdindent, (function () {
/* 000313 */ 			var __accu0__ = __add__ (__add__ (__add__ ('---\n\n', target_id_md_code), (function () {
/* 000313 */ 				var __accu1__ = float_content_with_caption;
/* 000313 */ 				return __call__ (__accu1__.strip, __accu1__);
/* 000313 */ 			}) ()), '\n\n---\n');
/* 000313 */ 			return __call__ (__accu0__.py_replace, __accu0__, '\n', __add__ ('\n', mdindent));
/* 000313 */ 		}) ());
/* 000313 */ 	});},
/* 000318 */ 	graphics_raster_magnification: 1,
/* 000319 */ 	graphics_vector_magnification: 1,
/* 000321 */ 	get render_graphics_block () {return __get__ (this, function (self, graphics_resource, render_context) {
/* 000321 */ 		if (arguments.length) {
/* 000321 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000321 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000321 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000321 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000321 */ 					switch (__attrib0__) {
/* 000321 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000321 */ 						case 'graphics_resource': var graphics_resource = __allkwargs0__ [__attrib0__]; break;
/* 000321 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000321 */ 					}
/* 000321 */ 				}
/* 000321 */ 			}
/* 000321 */ 		}
/* 000321 */ 		else {
/* 000321 */ 		}
/* 000323 */ 		var src_url = graphics_resource.src_url;
/* 000325 */ 		return __add__ (__add__ ('![](', src_url), ')');
/* 000325 */ 	});},
/* 000328 */ 	get render_cells () {return __get__ (this, function (self, cells_model, render_context, target_id) {
/* 000328 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000328 */ 			var target_id = null;
/* 000328 */ 		};
/* 000328 */ 		if (arguments.length) {
/* 000328 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000328 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000328 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000328 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000328 */ 					switch (__attrib0__) {
/* 000328 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000328 */ 						case 'cells_model': var cells_model = __allkwargs0__ [__attrib0__]; break;
/* 000328 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000328 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000328 */ 					}
/* 000328 */ 				}
/* 000328 */ 			}
/* 000328 */ 		}
/* 000328 */ 		else {
/* 000328 */ 		}
/* 000331 */ 		return (function () {
/* 000331 */ 			var __accu0__ = __call__ (HtmlFragmentRenderer, null);
/* 000331 */ 			return __call__ (__accu0__.render_cells, __accu0__, cells_model, render_context, __kwargtrans__ ({target_id: target_id}));
/* 000331 */ 		}) ();
/* 000331 */ 	});},
/* 000336 */ 	get _get_target_id_md_code () {return __get__ (this, function (self, target_id) {
/* 000336 */ 		if (arguments.length) {
/* 000336 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000336 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000336 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000336 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000336 */ 					switch (__attrib0__) {
/* 000336 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000336 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000336 */ 					}
/* 000336 */ 				}
/* 000336 */ 			}
/* 000336 */ 		}
/* 000336 */ 		else {
/* 000336 */ 		}
/* 000337 */ 		if (__t__ (target_id === null)) {
/* 000338 */ 			return '';
/* 000338 */ 		}
/* 000339 */ 		if (__t__ (__eq__ (self.use_target_ids, 'pandoc'))) {
/* 000340 */ 			return __add__ (__add__ ('[]{#', target_id), '} ');
/* 000340 */ 		}
/* 000341 */ 		if (__t__ (__eq__ (self.use_target_ids, 'github'))) {
/* 000342 */ 			return __add__ (__add__ ('[](#', target_id), ') ');
/* 000342 */ 		}
/* 000343 */ 		if (__t__ (__eq__ (self.use_target_ids, 'anchor'))) {
/* 000344 */ 			return __add__ (__add__ ('<a name="', target_id), '"></a> ');
/* 000344 */ 		}
/* 000345 */ 		return '';
/* 000345 */ 	});}
/* 000345 */ });
/* 000353 */ export var _rx_delayed_markers = (function () {
/* 000353 */ 	var __accu0__ = re;
/* 000353 */ 	return __call__ (__accu0__.compile, __accu0__, '<FLM:DLYD:(?P<key>\\d+)\\s*/>');
/* 000353 */ }) ();
/* 000359 */ export var FragmentRendererInformation =  __class__ ('FragmentRendererInformation', [object], {
/* 000359 */ 	__module__: __name__,
/* 000360 */ 	FragmentRendererClass: MarkdownFragmentRenderer,
/* 000361 */ 	format_name: 'markdown'
/* 000361 */ });
/* 000006 */ 
//# sourceMappingURL=flm.fragmentrenderer.markdown.map