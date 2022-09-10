/* 000001 */ // Transcrypt'ed from Python, 2022-09-10 12:43:45
/* 000006 */ var html = {};
/* 000006 */ var logging = {};
/* 000006 */ var re = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000012 */ import {FragmentRenderer} from './llm.fragmentrenderer._base.js';
/* 000009 */ import * as __module_logging__ from './logging.js';
/* 000009 */ __nest__ (logging, '', __module_logging__);
/* 000007 */ import * as __module_re__ from './re.js';
/* 000007 */ __nest__ (re, '', __module_re__);
/* 000006 */ import * as __module_html__ from './html.js';
/* 000006 */ __nest__ (html, '', __module_html__);
/* 000006 */ export {FragmentRenderer};
/* 000001 */ var __name__ = 'llm.fragmentrenderer.html';
/* 000010 */ export var logger = (function () {
/* 000010 */ 	var __accu0__ = logging;
/* 000010 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000010 */ }) ();
/* 000015 */ export var HtmlFragmentRenderer =  __class__ ('HtmlFragmentRenderer', [FragmentRenderer], {
/* 000015 */ 	__module__: __name__,
/* 000017 */ 	supports_delayed_render_markers: true,
/* 000024 */ 	use_link_target_blank: false,
/* 000037 */ 	html_blocks_joiner: '\n',
/* 000056 */ 	heading_tags_by_level: dict ({1: 'h1', 2: 'h2', 3: 'h3', 4: 'span', 5: 'span', 6: 'span'}),
/* 000068 */ 	inline_heading_add_space: true,
/* 000081 */ 	get htmlescape () {return __get__ (this, function (self, value) {
/* 000081 */ 		if (arguments.length) {
/* 000081 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000081 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000081 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000081 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000081 */ 					switch (__attrib0__) {
/* 000081 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000081 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000081 */ 					}
/* 000081 */ 				}
/* 000081 */ 			}
/* 000081 */ 		}
/* 000081 */ 		else {
/* 000081 */ 		}
/* 000082 */ 		return (function () {
/* 000082 */ 			var __accu0__ = html;
/* 000082 */ 			return __call__ (__accu0__.escape, __accu0__, value);
/* 000082 */ 		}) ();
/* 000082 */ 	});},
/* 000084 */ 	get generate_open_tag () {return __get__ (this, function (self, tagname) {
/* 000084 */ 		var attrs = null;
/* 000084 */ 		var class_names = null;
/* 000084 */ 		var self_close_tag = false;
/* 000084 */ 		if (arguments.length) {
/* 000084 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000084 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000084 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000084 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000084 */ 					switch (__attrib0__) {
/* 000084 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000084 */ 						case 'tagname': var tagname = __allkwargs0__ [__attrib0__]; break;
/* 000084 */ 						case 'attrs': var attrs = __allkwargs0__ [__attrib0__]; break;
/* 000084 */ 						case 'class_names': var class_names = __allkwargs0__ [__attrib0__]; break;
/* 000084 */ 						case 'self_close_tag': var self_close_tag = __allkwargs0__ [__attrib0__]; break;
/* 000084 */ 					}
/* 000084 */ 				}
/* 000084 */ 			}
/* 000084 */ 		}
/* 000084 */ 		else {
/* 000084 */ 		}
/* 000085 */ 		var s = '<{}'.format (tagname);
/* 000086 */ 		if (__t__ (!__t__ ((attrs)))) {
/* 000087 */ 			var attrs = dict ({});
/* 000087 */ 		}
/* 000088 */ 		var attrs = __call__ (dict, null, attrs);
/* 000089 */ 		if (__t__ (__in__ ('class', attrs))) {
/* 000090 */ 			var __except0__ = __call__ (ValueError, null, "generate_open_tag(): set HTML 'class' attribute with class_names=, not with attrs=");
/* 000090 */ 			__except0__.__cause__ = null;
/* 000090 */ 			throw __except0__;
/* 000090 */ 		}
/* 000094 */ 		if (__t__ (class_names)) {
/* 000095 */ 			__setitem__ (attrs, 'class', (function () {
/* 000095 */ 				var __accu0__ = ' ';
/* 000095 */ 				return __call__ (__accu0__.join, __accu0__, class_names);
/* 000095 */ 			}) ());
/* 000095 */ 		}
/* 000096 */ 		if (__t__ (attrs)) {
/* 000097 */ 			var __iterable0__ = (function () {
/* 000097 */ 				var __accu0__ = attrs;
/* 000097 */ 				return __call__ (__accu0__.py_items, __accu0__);
/* 000097 */ 			}) ();
/* 000097 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000097 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000097 */ 				var aname = __left0__ [0];
/* 000097 */ 				var aval = __left0__ [1];
/* 000098 */ 				var s = __call__ (__iadd__, null, s, ' {}="{}"'.format (aname, (function () {
/* 000098 */ 					var __accu0__ = self;
/* 000098 */ 					return __call__ (__accu0__.htmlescape, __accu0__, aval);
/* 000098 */ 				}) ()));
/* 000098 */ 			}
/* 000098 */ 		}
/* 000099 */ 		if (__t__ (self_close_tag)) {
/* 000100 */ 			var s = __call__ (__iadd__, null, s, '/>');
/* 000100 */ 		}
/* 000101 */ 		else {
/* 000102 */ 			var s = __call__ (__iadd__, null, s, '>');
/* 000102 */ 		}
/* 000103 */ 		return s;
/* 000103 */ 	});},
/* 000105 */ 	get wrap_in_tag () {return __get__ (this, function (self, tagname, content_html) {
/* 000105 */ 		var attrs = null;
/* 000105 */ 		var class_names = null;
/* 000105 */ 		if (arguments.length) {
/* 000105 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000105 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000105 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000105 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000105 */ 					switch (__attrib0__) {
/* 000105 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000105 */ 						case 'tagname': var tagname = __allkwargs0__ [__attrib0__]; break;
/* 000105 */ 						case 'content_html': var content_html = __allkwargs0__ [__attrib0__]; break;
/* 000105 */ 						case 'attrs': var attrs = __allkwargs0__ [__attrib0__]; break;
/* 000105 */ 						case 'class_names': var class_names = __allkwargs0__ [__attrib0__]; break;
/* 000105 */ 					}
/* 000105 */ 				}
/* 000105 */ 			}
/* 000105 */ 		}
/* 000105 */ 		else {
/* 000105 */ 		}
/* 000107 */ 		var s = (function () {
/* 000107 */ 			var __accu0__ = self;
/* 000107 */ 			return __call__ (__accu0__.generate_open_tag, __accu0__, tagname, __kwargtrans__ ({attrs: attrs, class_names: class_names}));
/* 000107 */ 		}) ();
/* 000108 */ 		var s = __call__ (__iadd__, null, s, __call__ (str, null, content_html));
/* 000109 */ 		var s = __call__ (__iadd__, null, s, '</{}>'.format (tagname));
/* 000110 */ 		return s;
/* 000110 */ 	});},
/* 000112 */ 	get wrap_in_link () {return __get__ (this, function (self, display_html, target_href) {
/* 000112 */ 		var class_names = null;
/* 000112 */ 		if (arguments.length) {
/* 000112 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000112 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000112 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000112 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000112 */ 					switch (__attrib0__) {
/* 000112 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000112 */ 						case 'display_html': var display_html = __allkwargs0__ [__attrib0__]; break;
/* 000112 */ 						case 'target_href': var target_href = __allkwargs0__ [__attrib0__]; break;
/* 000112 */ 						case 'class_names': var class_names = __allkwargs0__ [__attrib0__]; break;
/* 000112 */ 					}
/* 000112 */ 				}
/* 000112 */ 			}
/* 000112 */ 		}
/* 000112 */ 		else {
/* 000112 */ 		}
/* 000113 */ 		if (__t__ (!__t__ ((target_href)))) {
/* 000114 */ 			var target_href = '#';
/* 000114 */ 		}
/* 000116 */ 		var attrs = dict ({'href': (function () {
/* 000116 */ 			var __accu0__ = self;
/* 000116 */ 			return __call__ (__accu0__.htmlescape, __accu0__, target_href);
/* 000116 */ 		}) ()});
/* 000118 */ 		if (__t__ (__call__ (callable, null, self.use_link_target_blank))) {
/* 000119 */ 			if (__t__ ((function () {
/* 000119 */ 				var __accu0__ = self;
/* 000119 */ 				return __call__ (__accu0__.use_link_target_blank, __accu0__, target_href);
/* 000119 */ 			}) ())) {
/* 000120 */ 				__setitem__ (attrs, 'target', '_blank');
/* 000120 */ 			}
/* 000120 */ 		}
/* 000121 */ 		else if (__t__ (__t__ (self.use_link_target_blank) && !__t__ (((function () {
/* 000121 */ 			var __accu0__ = target_href;
/* 000121 */ 			return __call__ (__accu0__.startswith, __accu0__, '#');
/* 000121 */ 		}) ())))) {
/* 000122 */ 			__setitem__ (attrs, 'target', '_blank');
/* 000122 */ 		}
/* 000123 */ 		return (function () {
/* 000123 */ 			var __accu0__ = self;
/* 000123 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'a', display_html, __kwargtrans__ ({attrs: attrs, class_names: class_names}));
/* 000123 */ 		}) ();
/* 000123 */ 	});},
/* 000132 */ 	get render_build_paragraph () {return __get__ (this, function (self, nodelist, render_context) {
/* 000132 */ 		if (arguments.length) {
/* 000132 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000132 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000132 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000132 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000132 */ 					switch (__attrib0__) {
/* 000132 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000132 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000132 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000132 */ 					}
/* 000132 */ 				}
/* 000132 */ 			}
/* 000132 */ 		}
/* 000132 */ 		else {
/* 000132 */ 		}
/* 000135 */ 		return __add__ (__add__ ('<p>', (function () {
/* 000135 */ 			var __accu0__ = self;
/* 000135 */ 			return __call__ (__accu0__.render_inline_content, __accu0__, nodelist, render_context);
/* 000135 */ 		}) ()), '</p>');
/* 000135 */ 	});},
/* 000139 */ 	get render_inline_content () {return __get__ (this, function (self, nodelist, render_context) {
/* 000139 */ 		if (arguments.length) {
/* 000139 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000139 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000139 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000139 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000139 */ 					switch (__attrib0__) {
/* 000139 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000139 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000139 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000139 */ 					}
/* 000139 */ 				}
/* 000139 */ 			}
/* 000139 */ 		}
/* 000139 */ 		else {
/* 000139 */ 		}
/* 000140 */ 		return (function () {
/* 000140 */ 			var __accu0__ = self;
/* 000140 */ 			return __call__ (__accu0__.render_join, __accu0__, (function () {
/* 000140 */ 				var __accu1__ = [];
/* 000141 */ 				var __iterable0__ = nodelist;
/* 000141 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000141 */ 					var n = __getitem__ (__iterable0__, __index0__);
/* 000141 */ 					(function () {
/* 000141 */ 						var __accu2__ = __accu1__;
/* 000141 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000141 */ 							var __accu3__ = self;
/* 000141 */ 							return __call__ (__accu3__.render_node, __accu3__, n, render_context);
/* 000141 */ 						}) ());
/* 000141 */ 					}) ();
/* 000141 */ 				}
/* 000141 */ 				return __accu1__;
/* 000141 */ 			}) ());
/* 000141 */ 		}) ();
/* 000141 */ 	});},
/* 000144 */ 	get render_join () {return __get__ (this, function (self, content_list) {
/* 000144 */ 		if (arguments.length) {
/* 000144 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000144 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000144 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000144 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000144 */ 					switch (__attrib0__) {
/* 000144 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000144 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000144 */ 					}
/* 000144 */ 				}
/* 000144 */ 			}
/* 000144 */ 		}
/* 000144 */ 		else {
/* 000144 */ 		}
/* 000150 */ 		return (function () {
/* 000150 */ 			var __accu0__ = '';
/* 000150 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000150 */ 				var __accu1__ = [];
/* 000150 */ 				var __iterable0__ = content_list;
/* 000150 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000150 */ 					var s = __getitem__ (__iterable0__, __index0__);
/* 000150 */ 					(function () {
/* 000150 */ 						var __accu2__ = __accu1__;
/* 000150 */ 						return __call__ (__accu2__.append, __accu2__, __call__ (str, null, s));
/* 000150 */ 					}) ();
/* 000150 */ 				}
/* 000150 */ 				return __accu1__;
/* 000150 */ 			}) ());
/* 000150 */ 		}) ();
/* 000150 */ 	});},
/* 000152 */ 	get render_join_blocks () {return __get__ (this, function (self, content_list) {
/* 000152 */ 		if (arguments.length) {
/* 000152 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000152 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000152 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000152 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000152 */ 					switch (__attrib0__) {
/* 000152 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000152 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000152 */ 					}
/* 000152 */ 				}
/* 000152 */ 			}
/* 000152 */ 		}
/* 000152 */ 		else {
/* 000152 */ 		}
/* 000160 */ 		return (function () {
/* 000160 */ 			var __accu0__ = self.html_blocks_joiner;
/* 000160 */ 			return __call__ (__accu0__.join, __accu0__, content_list);
/* 000160 */ 		}) ();
/* 000160 */ 	});},
/* 000165 */ 	get render_value () {return __get__ (this, function (self, value) {
/* 000165 */ 		if (arguments.length) {
/* 000165 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000165 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000165 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000165 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000165 */ 					switch (__attrib0__) {
/* 000165 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000165 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000165 */ 					}
/* 000165 */ 				}
/* 000165 */ 			}
/* 000165 */ 		}
/* 000165 */ 		else {
/* 000165 */ 		}
/* 000166 */ 		return (function () {
/* 000166 */ 			var __accu0__ = self;
/* 000166 */ 			return __call__ (__accu0__.htmlescape, __accu0__, value);
/* 000166 */ 		}) ();
/* 000166 */ 	});},
/* 000168 */ 	get render_empty_error_placeholder () {return __get__ (this, function (self, debug_str) {
/* 000168 */ 		if (arguments.length) {
/* 000168 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000168 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000168 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000168 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000168 */ 					switch (__attrib0__) {
/* 000168 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000168 */ 						case 'debug_str': var debug_str = __allkwargs0__ [__attrib0__]; break;
/* 000168 */ 					}
/* 000168 */ 				}
/* 000168 */ 			}
/* 000168 */ 		}
/* 000168 */ 		else {
/* 000168 */ 		}
/* 000169 */ 		var debug_str_safe = (function () {
/* 000169 */ 			var __accu0__ = debug_str;
/* 000169 */ 			return __call__ (__accu0__.py_replace, __accu0__, '--', '- - ');
/* 000169 */ 		}) ();
/* 000170 */ 		return '<span class="empty-error-placeholder"><!-- {} -->(?)</span>'.format (debug_str_safe);
/* 000170 */ 	});},
/* 000172 */ 	get render_nothing () {return __get__ (this, function (self, annotations) {
/* 000172 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000172 */ 			var annotations = null;
/* 000172 */ 		};
/* 000172 */ 		if (arguments.length) {
/* 000172 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000172 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000172 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000172 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000172 */ 					switch (__attrib0__) {
/* 000172 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000172 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000172 */ 					}
/* 000172 */ 				}
/* 000172 */ 			}
/* 000172 */ 		}
/* 000172 */ 		else {
/* 000172 */ 		}
/* 000173 */ 		if (__t__ (!__t__ ((annotations)))) {
/* 000174 */ 			var annotations = [];
/* 000174 */ 		}
/* 000175 */ 		var annotations = (function () {
/* 000175 */ 			var __accu0__ = [];
/* 000175 */ 			var __iterable0__ = annotations;
/* 000175 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000175 */ 				var a = __getitem__ (__iterable0__, __index0__);
/* 000175 */ 				(function () {
/* 000175 */ 					var __accu1__ = __accu0__;
/* 000175 */ 					return __call__ (__accu1__.append, __accu1__, (function () {
/* 000175 */ 						var __accu2__ = a;
/* 000175 */ 						return __call__ (__accu2__.py_replace, __accu2__, '--', '- - ');
/* 000175 */ 					}) ());
/* 000175 */ 				}) ();
/* 000175 */ 			}
/* 000175 */ 			return __accu0__;
/* 000175 */ 		}) ();
/* 000176 */ 		return (function () {
/* 000176 */ 			var __accu0__ = '<!-- {} -->';
/* 000176 */ 			return __call__ (__accu0__.format, __accu0__, (function () {
/* 000176 */ 				var __accu1__ = ' ';
/* 000176 */ 				return __call__ (__accu1__.join, __accu1__, annotations);
/* 000176 */ 			}) ());
/* 000176 */ 		}) ();
/* 000176 */ 	});},
/* 000178 */ 	get render_verbatim () {return __get__ (this, function (self, value) {
/* 000178 */ 		var target_id = null;
/* 000178 */ 		if (arguments.length) {
/* 000178 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000178 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000178 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000178 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000178 */ 					switch (__attrib0__) {
/* 000178 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000178 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000178 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000178 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000178 */ 					}
/* 000178 */ 				}
/* 000178 */ 			}
/* 000178 */ 		}
/* 000178 */ 		else {
/* 000178 */ 		}
/* 000179 */ 		var attrs = dict ({});
/* 000180 */ 		if (__t__ (target_id !== null)) {
/* 000181 */ 			__setitem__ (attrs, 'id', target_id);
/* 000181 */ 		}
/* 000182 */ 		return (function () {
/* 000182 */ 			var __accu0__ = self;
/* 000184 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'span', (function () {
/* 000184 */ 				var __accu1__ = self;
/* 000184 */ 				return __call__ (__accu1__.htmlescape, __accu1__, value);
/* 000184 */ 			}) (), __kwargtrans__ ({class_names: (__t__ (annotations) ? annotations : ['verbatim']), attrs: attrs}));
/* 000184 */ 		}) ();
/* 000184 */ 	});},
/* 000189 */ 	get render_math_content () {return __get__ (this, function (self, delimiters, nodelist, render_context, displaytype, environmentname, target_id) {
/* 000189 */ 		if (typeof environmentname == 'undefined' || (environmentname != null && environmentname.hasOwnProperty ("__kwargtrans__"))) {;
/* 000189 */ 			var environmentname = null;
/* 000189 */ 		};
/* 000189 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000189 */ 			var target_id = null;
/* 000189 */ 		};
/* 000189 */ 		if (arguments.length) {
/* 000189 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000189 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000189 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000189 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000189 */ 					switch (__attrib0__) {
/* 000189 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000189 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000189 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000189 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000189 */ 						case 'displaytype': var displaytype = __allkwargs0__ [__attrib0__]; break;
/* 000189 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000189 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000189 */ 					}
/* 000189 */ 				}
/* 000189 */ 			}
/* 000189 */ 		}
/* 000189 */ 		else {
/* 000189 */ 		}
/* 000196 */ 		var class_names = ['{}-math'.format (displaytype)];
/* 000197 */ 		if (__t__ (environmentname !== null)) {
/* 000198 */ 			(function () {
/* 000198 */ 				var __accu0__ = class_names;
/* 000198 */ 				return __call__ (__accu0__.append, __accu0__, 'env-{}'.format ((function () {
/* 000198 */ 					var __accu1__ = environmentname;
/* 000198 */ 					return __call__ (__accu1__.py_replace, __accu1__, '*', '-star');
/* 000198 */ 				}) ()));
/* 000198 */ 			}) ();
/* 000198 */ 		}
/* 000201 */ 		var content_html = (function () {
/* 000201 */ 			var __accu0__ = self;
/* 000201 */ 			return __call__ (__accu0__.htmlescape, __accu0__, __add__ (__add__ (__getitem__ (delimiters, 0), (function () {
/* 000201 */ 				var __accu1__ = nodelist;
/* 000201 */ 				return __call__ (__accu1__.latex_verbatim, __accu1__);
/* 000201 */ 			}) ()), __getitem__ (delimiters, 1)));
/* 000201 */ 		}) ();
/* 000204 */ 		var attrs = dict ({});
/* 000205 */ 		if (__t__ (target_id !== null)) {
/* 000206 */ 			__setitem__ (attrs, 'id', target_id);
/* 000206 */ 		}
/* 000208 */ 		if (__t__ (__eq__ (displaytype, 'display'))) {
/* 000212 */ 			return (function () {
/* 000212 */ 				var __accu0__ = self;
/* 000212 */ 				return __call__ (__accu0__.wrap_in_tag, __accu0__, 'span', content_html, __kwargtrans__ ({class_names: class_names, attrs: attrs}));
/* 000212 */ 			}) ();
/* 000212 */ 		}
/* 000219 */ 		return (function () {
/* 000219 */ 			var __accu0__ = self;
/* 000219 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'span', content_html, __kwargtrans__ ({class_names: class_names, attrs: attrs}));
/* 000219 */ 		}) ();
/* 000219 */ 	});},
/* 000226 */ 	get render_text_format () {return __get__ (this, function (self, text_formats, nodelist, render_context) {
/* 000226 */ 		if (arguments.length) {
/* 000226 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000226 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000226 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000226 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000226 */ 					switch (__attrib0__) {
/* 000226 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000226 */ 						case 'text_formats': var text_formats = __allkwargs0__ [__attrib0__]; break;
/* 000226 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000226 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000226 */ 					}
/* 000226 */ 				}
/* 000226 */ 			}
/* 000226 */ 		}
/* 000226 */ 		else {
/* 000226 */ 		}
/* 000230 */ 		var content = (function () {
/* 000230 */ 			var __accu0__ = self;
/* 000230 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, nodelist, render_context, __kwargtrans__ ({is_block_level: false}));
/* 000230 */ 		}) ();
/* 000236 */ 		return (function () {
/* 000236 */ 			var __accu0__ = self;
/* 000236 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'span', content, __kwargtrans__ ({class_names: text_formats}));
/* 000236 */ 		}) ();
/* 000236 */ 	});},
/* 000242 */ 	get render_semantic_block () {return __get__ (this, function (self, content, role) {
/* 000242 */ 		var annotations = null;
/* 000242 */ 		var target_id = null;
/* 000242 */ 		if (arguments.length) {
/* 000242 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000242 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000242 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000242 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000242 */ 					switch (__attrib0__) {
/* 000242 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000242 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000242 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000242 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000242 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000242 */ 					}
/* 000242 */ 				}
/* 000242 */ 			}
/* 000242 */ 		}
/* 000242 */ 		else {
/* 000242 */ 		}
/* 000243 */ 		var attrs = dict ({});
/* 000244 */ 		if (__t__ (target_id !== null)) {
/* 000245 */ 			__setitem__ (attrs, 'id', target_id);
/* 000245 */ 		}
/* 000246 */ 		if (__t__ (__in__ (role, tuple (['section', 'main', 'article'])))) {
/* 000247 */ 			return (function () {
/* 000247 */ 				var __accu0__ = self;
/* 000247 */ 				return __call__ (__accu0__.wrap_in_tag, __accu0__, role, content, __kwargtrans__ ({attrs: attrs, class_names: annotations}));
/* 000247 */ 			}) ();
/* 000247 */ 		}
/* 000253 */ 		return (function () {
/* 000253 */ 			var __accu0__ = self;
/* 000253 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'div', content, __kwargtrans__ ({attrs: attrs, class_names: __add__ ([role], (__t__ (annotations) ? annotations : []))}));
/* 000253 */ 		}) ();
/* 000253 */ 	});},
/* 000261 */ 	get render_enumeration () {return __get__ (this, function (self, iter_items_nodelists, counter_formatter, render_context) {
/* 000261 */ 		var target_id_generator = null;
/* 000261 */ 		var annotations = null;
/* 000261 */ 		var nested_depth = null;
/* 000261 */ 		if (arguments.length) {
/* 000261 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000261 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000261 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000261 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000261 */ 					switch (__attrib0__) {
/* 000261 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000261 */ 						case 'iter_items_nodelists': var iter_items_nodelists = __allkwargs0__ [__attrib0__]; break;
/* 000261 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000261 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000261 */ 						case 'target_id_generator': var target_id_generator = __allkwargs0__ [__attrib0__]; break;
/* 000261 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000261 */ 						case 'nested_depth': var nested_depth = __allkwargs0__ [__attrib0__]; break;
/* 000261 */ 					}
/* 000261 */ 				}
/* 000261 */ 			}
/* 000261 */ 		}
/* 000261 */ 		else {
/* 000261 */ 		}
/* 000273 */ 		var s_items = [];
/* 000275 */ 		var __iterable0__ = __call__ (enumerate, null, iter_items_nodelists);
/* 000275 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000275 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000275 */ 			var j = __left0__ [0];
/* 000275 */ 			var item_content_nodelist = __left0__ [1];
/* 000277 */ 			var use_block_level = true;
/* 000278 */ 			if (__t__ (item_content_nodelist.parsing_state.is_block_level === false)) {
/* 000281 */ 				var use_block_level = false;
/* 000281 */ 			}
/* 000283 */ 			// pass;
/* 000287 */ 			// pass;
/* 000291 */ 			var item_content = (function () {
/* 000291 */ 				var __accu0__ = self;
/* 000291 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, item_content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: use_block_level}));
/* 000291 */ 			}) ();
/* 000297 */ 			var enumno = __add__ (1, j);
/* 000299 */ 			var tag_nodelist = __call__ (counter_formatter, null, enumno);
/* 000300 */ 			if (__t__ (__call__ (isinstance, null, tag_nodelist, str))) {
/* 000301 */ 				var tag_content = (function () {
/* 000301 */ 					var __accu0__ = self;
/* 000301 */ 					return __call__ (__accu0__.render_value, __accu0__, tag_nodelist);
/* 000301 */ 				}) ();
/* 000301 */ 			}
/* 000302 */ 			else {
/* 000303 */ 				var tag_content = (function () {
/* 000303 */ 					var __accu0__ = self;
/* 000303 */ 					return __call__ (__accu0__.render_nodelist, __accu0__, tag_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000303 */ 				}) ();
/* 000303 */ 			}
/* 000309 */ 			var dtattrs = dict ({});
/* 000310 */ 			if (__t__ (target_id_generator !== null)) {
/* 000311 */ 				__setitem__ (dtattrs, 'id', __call__ (target_id_generator, null, enumno));
/* 000311 */ 			}
/* 000313 */ 			(function () {
/* 000313 */ 				var __accu0__ = s_items;
/* 000314 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000314 */ 					var __accu1__ = self;
/* 000315 */ 					return __call__ (__accu1__.render_join, __accu1__, [(function () {
/* 000315 */ 						var __accu2__ = self;
/* 000315 */ 						return __call__ (__accu2__.wrap_in_tag, __accu2__, 'dt', tag_content, __kwargtrans__ ({attrs: dtattrs}));
/* 000320 */ 					}) (), (function () {
/* 000320 */ 						var __accu2__ = self;
/* 000320 */ 						return __call__ (__accu2__.wrap_in_tag, __accu2__, 'dd', item_content);
/* 000320 */ 					}) ()]);
/* 000320 */ 				}) ());
/* 000320 */ 			}) ();
/* 000320 */ 		}
/* 000327 */ 		return (function () {
/* 000327 */ 			var __accu0__ = self;
/* 000329 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'dl', (function () {
/* 000329 */ 				var __accu1__ = self;
/* 000329 */ 				return __call__ (__accu1__.render_join, __accu1__, s_items);
/* 000329 */ 			}) (), __kwargtrans__ ({class_names: __add__ (['enumeration'], (__t__ (annotations) ? annotations : []))}));
/* 000329 */ 		}) ();
/* 000329 */ 	});},
/* 000334 */ 	get render_heading () {return __get__ (this, function (self, heading_nodelist, render_context) {
/* 000334 */ 		var heading_level = 1;
/* 000334 */ 		var target_id = null;
/* 000334 */ 		var inline_heading = false;
/* 000334 */ 		var annotations = null;
/* 000334 */ 		if (arguments.length) {
/* 000334 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000334 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000334 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000334 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000334 */ 					switch (__attrib0__) {
/* 000334 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000334 */ 						case 'heading_nodelist': var heading_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000334 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000334 */ 						case 'heading_level': var heading_level = __allkwargs0__ [__attrib0__]; break;
/* 000334 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000334 */ 						case 'inline_heading': var inline_heading = __allkwargs0__ [__attrib0__]; break;
/* 000334 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000334 */ 					}
/* 000334 */ 				}
/* 000334 */ 			}
/* 000334 */ 		}
/* 000334 */ 		else {
/* 000334 */ 		}
/* 000338 */ 		if (__t__ (!__in__ (heading_level, self.heading_tags_by_level))) {
/* 000340 */ 			var __except0__ = __call__ (ValueError, null, 'Bad heading_level={}, expected one of {}'.format (heading_level, __call__ (list, null, (function () {
/* 000340 */ 				var __accu0__ = self.heading_tags_by_level;
/* 000340 */ 				return __call__ (__accu0__.py_keys, __accu0__);
/* 000340 */ 			}) ())));
/* 000340 */ 			__except0__.__cause__ = null;
/* 000340 */ 			throw __except0__;
/* 000340 */ 		}
/* 000342 */ 		var annot = (__t__ (annotations) ? __call__ (list, null, annotations) : []);
/* 000343 */ 		(function () {
/* 000343 */ 			var __accu0__ = annot;
/* 000343 */ 			return __call__ (__accu0__.append, __accu0__, 'heading-level-{}'.format (heading_level));
/* 000343 */ 		}) ();
/* 000344 */ 		if (__t__ (inline_heading)) {
/* 000345 */ 			(function () {
/* 000345 */ 				var __accu0__ = annot;
/* 000345 */ 				return __call__ (__accu0__.append, __accu0__, 'heading-inline');
/* 000345 */ 			}) ();
/* 000345 */ 		}
/* 000347 */ 		var attrs = dict ({});
/* 000348 */ 		if (__t__ (target_id !== null)) {
/* 000349 */ 			__setitem__ (attrs, 'id', target_id);
/* 000349 */ 		}
/* 000351 */ 		var content = (function () {
/* 000351 */ 			var __accu0__ = self;
/* 000353 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, __getitem__ (self.heading_tags_by_level, heading_level), (function () {
/* 000353 */ 				var __accu1__ = self;
/* 000353 */ 				return __call__ (__accu1__.render_inline_content, __accu1__, heading_nodelist, render_context);
/* 000353 */ 			}) (), __kwargtrans__ ({class_names: annot, attrs: attrs}));
/* 000353 */ 		}) ();
/* 000357 */ 		if (__t__ (__t__ (inline_heading) && self.inline_heading_add_space)) {
/* 000358 */ 			var content = __call__ (__iadd__, null, content, ' ');
/* 000358 */ 		}
/* 000359 */ 		// pass;
/* 000363 */ 		return content;
/* 000363 */ 	});},
/* 000365 */ 	get render_link () {return __get__ (this, function (self, ref_type, href, display_nodelist, render_context, annotations) {
/* 000365 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000365 */ 			var annotations = null;
/* 000365 */ 		};
/* 000365 */ 		if (arguments.length) {
/* 000365 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000365 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000365 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000365 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000365 */ 					switch (__attrib0__) {
/* 000365 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000365 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000365 */ 						case 'href': var href = __allkwargs0__ [__attrib0__]; break;
/* 000365 */ 						case 'display_nodelist': var display_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000365 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000365 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000365 */ 					}
/* 000365 */ 				}
/* 000365 */ 			}
/* 000365 */ 		}
/* 000365 */ 		else {
/* 000365 */ 		}
/* 000366 */ 		var display_content = (function () {
/* 000366 */ 			var __accu0__ = self;
/* 000366 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, display_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000366 */ 		}) ();
/* 000371 */ 		return (function () {
/* 000371 */ 			var __accu0__ = self;
/* 000371 */ 			return __call__ (__accu0__.wrap_in_link, __accu0__, display_content, href, __kwargtrans__ ({class_names: __add__ (['href-{}'.format (ref_type)], (__t__ (annotations) ? annotations : []))}));
/* 000371 */ 		}) ();
/* 000371 */ 	});},
/* 000378 */ 	get render_delayed_marker () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000378 */ 		if (arguments.length) {
/* 000378 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000378 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000378 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000378 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000378 */ 					switch (__attrib0__) {
/* 000378 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000378 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000378 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000378 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000378 */ 					}
/* 000378 */ 				}
/* 000378 */ 			}
/* 000378 */ 		}
/* 000378 */ 		else {
/* 000378 */ 		}
/* 000379 */ 		return '<LLM:DLYD:{}/>'.format (delayed_key);
/* 000379 */ 	});},
/* 000381 */ 	get render_delayed_dummy_placeholder () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000381 */ 		if (arguments.length) {
/* 000381 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000381 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000381 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000381 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000381 */ 					switch (__attrib0__) {
/* 000381 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000381 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000381 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000381 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000381 */ 					}
/* 000381 */ 				}
/* 000381 */ 			}
/* 000381 */ 		}
/* 000381 */ 		else {
/* 000381 */ 		}
/* 000382 */ 		return '<!-- delayed:{} -->'.format (delayed_key);
/* 000382 */ 	});},
/* 000384 */ 	get replace_delayed_markers_with_final_values () {return __get__ (this, function (self, content, delayed_values) {
/* 000384 */ 		if (arguments.length) {
/* 000384 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000384 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000384 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000384 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000384 */ 					switch (__attrib0__) {
/* 000384 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000384 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000384 */ 						case 'delayed_values': var delayed_values = __allkwargs0__ [__attrib0__]; break;
/* 000384 */ 					}
/* 000384 */ 				}
/* 000384 */ 			}
/* 000384 */ 		}
/* 000384 */ 		else {
/* 000384 */ 		}
/* 000385 */ 		return (function () {
/* 000385 */ 			var __accu0__ = _rx_delayed_markers;
/* 000385 */ 			return __call__ (__accu0__.sub, __accu0__, (function __lambda__ (m) {
/* 000385 */ 				if (arguments.length) {
/* 000385 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000385 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000385 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000385 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000385 */ 							switch (__attrib0__) {
/* 000385 */ 								case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000385 */ 							}
/* 000385 */ 						}
/* 000385 */ 					}
/* 000385 */ 				}
/* 000385 */ 				else {
/* 000385 */ 				}
/* 000386 */ 				return __getitem__ (delayed_values, __call__ (int, null, (function () {
/* 000386 */ 					var __accu1__ = m;
/* 000386 */ 					return __call__ (__accu1__.group, __accu1__, 'key');
/* 000386 */ 				}) ()));
/* 000386 */ 			}), content);
/* 000386 */ 		}) ();
/* 000386 */ 	});},
/* 000393 */ 	get render_float () {return __get__ (this, function (self, float_instance, render_context) {
/* 000393 */ 		if (arguments.length) {
/* 000393 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000393 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000393 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000393 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000393 */ 					switch (__attrib0__) {
/* 000393 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000393 */ 						case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000393 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000393 */ 					}
/* 000393 */ 				}
/* 000393 */ 			}
/* 000393 */ 		}
/* 000393 */ 		else {
/* 000393 */ 		}
/* 000396 */ 		var figattrs = dict ({});
/* 000398 */ 		if (__t__ (float_instance.target_id !== null)) {
/* 000399 */ 			__setitem__ (figattrs, 'id', float_instance.target_id);
/* 000399 */ 		}
/* 000401 */ 		var full_figcaption_rendered_list = [];
/* 000402 */ 		if (__t__ (float_instance.number !== null)) {
/* 000404 */ 			(function () {
/* 000404 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000405 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000405 */ 					var __accu1__ = self;
/* 000407 */ 					return __call__ (__accu1__.wrap_in_tag, __accu1__, 'span', (function () {
/* 000407 */ 						var __accu2__ = self;
/* 000408 */ 						return __call__ (__accu2__.render_join, __accu2__, [(function () {
/* 000408 */ 							var __accu3__ = self;
/* 000408 */ 							return __call__ (__accu3__.render_value, __accu3__, float_instance.float_type_info.float_caption_name);
/* 000412 */ 						}) (), '&nbsp;', (function () {
/* 000412 */ 							var __accu3__ = self;
/* 000412 */ 							return __call__ (__accu3__.render_nodelist, __accu3__, float_instance.formatted_counter_value_llm.nodes, __kwargtrans__ ({render_context: render_context}));
/* 000412 */ 						}) ()]);
/* 000412 */ 					}) (), __kwargtrans__ ({class_names: ['float-number']}));
/* 000412 */ 				}) ());
/* 000412 */ 			}) ();
/* 000412 */ 		}
/* 000420 */ 		else if (__t__ (float_instance.caption_nodelist)) {
/* 000423 */ 			(function () {
/* 000423 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000424 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000424 */ 					var __accu1__ = self;
/* 000426 */ 					return __call__ (__accu1__.wrap_in_tag, __accu1__, 'span', (function () {
/* 000426 */ 						var __accu2__ = self;
/* 000427 */ 						return __call__ (__accu2__.render_join, __accu2__, [(function () {
/* 000427 */ 							var __accu3__ = self;
/* 000427 */ 							return __call__ (__accu3__.render_value, __accu3__, float_instance.float_type_info.float_caption_name);
/* 000427 */ 						}) ()]);
/* 000427 */ 					}) (), __kwargtrans__ ({class_names: ['float-no-number']}));
/* 000427 */ 				}) ());
/* 000427 */ 			}) ();
/* 000427 */ 		}
/* 000430 */ 		else {
/* 000434 */ 			// pass;
/* 000434 */ 		}
/* 000436 */ 		if (__t__ (float_instance.caption_nodelist)) {
/* 000440 */ 			(function () {
/* 000440 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000440 */ 				return __call__ (__accu0__.append, __accu0__, ': ');
/* 000440 */ 			}) ();
/* 000443 */ 			(function () {
/* 000443 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000444 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000444 */ 					var __accu1__ = self;
/* 000444 */ 					return __call__ (__accu1__.render_nodelist, __accu1__, float_instance.caption_nodelist, __kwargtrans__ ({render_context: render_context}));
/* 000444 */ 				}) ());
/* 000444 */ 			}) ();
/* 000444 */ 		}
/* 000450 */ 		var rendered_float_caption = null;
/* 000451 */ 		if (__t__ (full_figcaption_rendered_list)) {
/* 000452 */ 			var rendered_float_caption = (function () {
/* 000452 */ 				var __accu0__ = self;
/* 000454 */ 				return __call__ (__accu0__.wrap_in_tag, __accu0__, 'figcaption', (function () {
/* 000454 */ 					var __accu1__ = self;
/* 000456 */ 					return __call__ (__accu1__.wrap_in_tag, __accu1__, 'span', (function () {
/* 000456 */ 						var __accu2__ = self;
/* 000456 */ 						return __call__ (__accu2__.render_join, __accu2__, full_figcaption_rendered_list);
/* 000456 */ 					}) ());
/* 000456 */ 				}) (), __kwargtrans__ ({class_names: ['float-caption-content']}));
/* 000456 */ 			}) ();
/* 000456 */ 		}
/* 000461 */ 		var float_content_block_content = (function () {
/* 000461 */ 			var __accu0__ = self;
/* 000461 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, float_instance.content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: true}));
/* 000461 */ 		}) ();
/* 000466 */ 		var float_content_block = (function () {
/* 000466 */ 			var __accu0__ = self;
/* 000466 */ 			return __call__ (__accu0__.render_semantic_block, __accu0__, float_content_block_content, 'float-contents');
/* 000466 */ 		}) ();
/* 000471 */ 		if (__t__ (rendered_float_caption !== null)) {
/* 000472 */ 			var float_content_with_caption = (function () {
/* 000472 */ 				var __accu0__ = self;
/* 000472 */ 				return __call__ (__accu0__.render_join_blocks, __accu0__, [float_content_block, rendered_float_caption]);
/* 000472 */ 			}) ();
/* 000472 */ 		}
/* 000475 */ 		else {
/* 000477 */ 			var float_content_with_caption = float_content_block;
/* 000477 */ 		}
/* 000479 */ 		var full_figure = (function () {
/* 000479 */ 			var __accu0__ = self;
/* 000479 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'figure', float_content_with_caption, __kwargtrans__ ({attrs: figattrs, class_names: ['float', 'float-{}'.format (float_instance.float_type)]}));
/* 000479 */ 		}) ();
/* 000486 */ 		return full_figure;
/* 000486 */ 	});},
/* 000489 */ 	graphics_raster_magnification: 1,
/* 000490 */ 	graphics_vector_magnification: 1,
/* 000492 */ 	get render_graphics_block () {return __get__ (this, function (self, graphics_resource) {
/* 000492 */ 		if (arguments.length) {
/* 000492 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000492 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000492 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000492 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000492 */ 					switch (__attrib0__) {
/* 000492 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000492 */ 						case 'graphics_resource': var graphics_resource = __allkwargs0__ [__attrib0__]; break;
/* 000492 */ 					}
/* 000492 */ 				}
/* 000492 */ 			}
/* 000492 */ 		}
/* 000492 */ 		else {
/* 000492 */ 		}
/* 000494 */ 		var imgattrs = dict ({});
/* 000496 */ 		var styparts = [];
/* 000497 */ 		if (__t__ (graphics_resource.physical_dimensions !== null)) {
/* 000499 */ 			var __left0__ = graphics_resource.physical_dimensions;
/* 000499 */ 			var width_pt = __left0__ [0];
/* 000499 */ 			var height_pt = __left0__ [1];
/* 000501 */ 			if (__t__ (__eq__ (graphics_resource.graphics_type, 'raster'))) {
/* 000502 */ 				if (__t__ (width_pt !== null)) {
/* 000503 */ 					var width_pt = __call__ (__imul__, null, width_pt, self.graphics_raster_magnification);
/* 000503 */ 				}
/* 000504 */ 				if (__t__ (height_pt !== null)) {
/* 000505 */ 					var height_pt = __call__ (__imul__, null, height_pt, self.graphics_raster_magnification);
/* 000505 */ 				}
/* 000505 */ 			}
/* 000506 */ 			else if (__t__ (__eq__ (graphics_resource.graphics_type, 'vector'))) {
/* 000507 */ 				if (__t__ (width_pt !== null)) {
/* 000508 */ 					var width_pt = __call__ (__imul__, null, width_pt, self.graphics_vector_magnification);
/* 000508 */ 				}
/* 000509 */ 				if (__t__ (height_pt !== null)) {
/* 000510 */ 					var height_pt = __call__ (__imul__, null, height_pt, self.graphics_vector_magnification);
/* 000510 */ 				}
/* 000510 */ 			}
/* 000512 */ 			if (__t__ (width_pt !== null)) {
/* 000513 */ 				(function () {
/* 000513 */ 					var __accu0__ = styparts;
/* 000513 */ 					return __call__ (__accu0__.append, __accu0__, 'width:{}pt'.format (width_pt));
/* 000513 */ 				}) ();
/* 000513 */ 			}
/* 000514 */ 			if (__t__ (height_pt !== null)) {
/* 000515 */ 				(function () {
/* 000515 */ 					var __accu0__ = styparts;
/* 000515 */ 					return __call__ (__accu0__.append, __accu0__, 'height:{}pt'.format (height_pt));
/* 000515 */ 				}) ();
/* 000515 */ 			}
/* 000515 */ 		}
/* 000517 */ 		if (__t__ (styparts)) {
/* 000518 */ 			__setitem__ (imgattrs, 'style', (function () {
/* 000518 */ 				var __accu0__ = ';';
/* 000518 */ 				return __call__ (__accu0__.join, __accu0__, styparts);
/* 000518 */ 			}) ());
/* 000518 */ 		}
/* 000520 */ 		__setitem__ (imgattrs, 'src', graphics_resource.src_url);
/* 000523 */ 		return (function () {
/* 000523 */ 			var __accu0__ = self;
/* 000523 */ 			return __call__ (__accu0__.generate_open_tag, __accu0__, 'img', __kwargtrans__ ({attrs: imgattrs}));
/* 000523 */ 		}) ();
/* 000523 */ 	});}
/* 000523 */ });
/* 000529 */ export var _rx_delayed_markers = (function () {
/* 000529 */ 	var __accu0__ = re;
/* 000529 */ 	return __call__ (__accu0__.compile, __accu0__, '<LLM:DLYD:(?P<key>\\d+)\\s*/>');
/* 000529 */ }) ();
/* 000006 */ 
//# sourceMappingURL=llm.fragmentrenderer.html.map