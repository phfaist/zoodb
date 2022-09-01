/* 000001 */ // Transcrypt'ed from Python, 2022-09-01 16:22:58
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
/* 000114 */ 		var attrs = dict ({'href': (function () {
/* 000114 */ 			var __accu0__ = self;
/* 000114 */ 			return __call__ (__accu0__.htmlescape, __accu0__, target_href);
/* 000114 */ 		}) ()});
/* 000116 */ 		if (__t__ (__call__ (callable, null, self.use_link_target_blank))) {
/* 000117 */ 			if (__t__ ((function () {
/* 000117 */ 				var __accu0__ = self;
/* 000117 */ 				return __call__ (__accu0__.use_link_target_blank, __accu0__, target_href);
/* 000117 */ 			}) ())) {
/* 000118 */ 				__setitem__ (attrs, 'target', '_blank');
/* 000118 */ 			}
/* 000118 */ 		}
/* 000119 */ 		else if (__t__ (__t__ (self.use_link_target_blank) && !__t__ (((function () {
/* 000119 */ 			var __accu0__ = target_href;
/* 000119 */ 			return __call__ (__accu0__.startswith, __accu0__, '#');
/* 000119 */ 		}) ())))) {
/* 000120 */ 			__setitem__ (attrs, 'target', '_blank');
/* 000120 */ 		}
/* 000121 */ 		return (function () {
/* 000121 */ 			var __accu0__ = self;
/* 000121 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'a', display_html, __kwargtrans__ ({attrs: attrs, class_names: class_names}));
/* 000121 */ 		}) ();
/* 000121 */ 	});},
/* 000130 */ 	get render_build_paragraph () {return __get__ (this, function (self, nodelist, render_context) {
/* 000130 */ 		if (arguments.length) {
/* 000130 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000130 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000130 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000130 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000130 */ 					switch (__attrib0__) {
/* 000130 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000130 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000130 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000130 */ 					}
/* 000130 */ 				}
/* 000130 */ 			}
/* 000130 */ 		}
/* 000130 */ 		else {
/* 000130 */ 		}
/* 000133 */ 		return __add__ (__add__ ('<p>', (function () {
/* 000133 */ 			var __accu0__ = self;
/* 000133 */ 			return __call__ (__accu0__.render_inline_content, __accu0__, nodelist, render_context);
/* 000133 */ 		}) ()), '</p>');
/* 000133 */ 	});},
/* 000137 */ 	get render_inline_content () {return __get__ (this, function (self, nodelist, render_context) {
/* 000137 */ 		if (arguments.length) {
/* 000137 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000137 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000137 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000137 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000137 */ 					switch (__attrib0__) {
/* 000137 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000137 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000137 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000137 */ 					}
/* 000137 */ 				}
/* 000137 */ 			}
/* 000137 */ 		}
/* 000137 */ 		else {
/* 000137 */ 		}
/* 000138 */ 		return (function () {
/* 000138 */ 			var __accu0__ = self;
/* 000138 */ 			return __call__ (__accu0__.render_join, __accu0__, (function () {
/* 000138 */ 				var __accu1__ = [];
/* 000139 */ 				var __iterable0__ = nodelist;
/* 000139 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000139 */ 					var n = __getitem__ (__iterable0__, __index0__);
/* 000139 */ 					(function () {
/* 000139 */ 						var __accu2__ = __accu1__;
/* 000139 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000139 */ 							var __accu3__ = self;
/* 000139 */ 							return __call__ (__accu3__.render_node, __accu3__, n, render_context);
/* 000139 */ 						}) ());
/* 000139 */ 					}) ();
/* 000139 */ 				}
/* 000139 */ 				return __accu1__;
/* 000139 */ 			}) ());
/* 000139 */ 		}) ();
/* 000139 */ 	});},
/* 000142 */ 	get render_join () {return __get__ (this, function (self, content_list) {
/* 000142 */ 		if (arguments.length) {
/* 000142 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000142 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000142 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000142 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000142 */ 					switch (__attrib0__) {
/* 000142 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000142 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000142 */ 					}
/* 000142 */ 				}
/* 000142 */ 			}
/* 000142 */ 		}
/* 000142 */ 		else {
/* 000142 */ 		}
/* 000148 */ 		return (function () {
/* 000148 */ 			var __accu0__ = '';
/* 000148 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000148 */ 				var __accu1__ = [];
/* 000148 */ 				var __iterable0__ = content_list;
/* 000148 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000148 */ 					var s = __getitem__ (__iterable0__, __index0__);
/* 000148 */ 					(function () {
/* 000148 */ 						var __accu2__ = __accu1__;
/* 000148 */ 						return __call__ (__accu2__.append, __accu2__, __call__ (str, null, s));
/* 000148 */ 					}) ();
/* 000148 */ 				}
/* 000148 */ 				return __accu1__;
/* 000148 */ 			}) ());
/* 000148 */ 		}) ();
/* 000148 */ 	});},
/* 000150 */ 	get render_join_blocks () {return __get__ (this, function (self, content_list) {
/* 000150 */ 		if (arguments.length) {
/* 000150 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000150 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000150 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000150 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000150 */ 					switch (__attrib0__) {
/* 000150 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000150 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000150 */ 					}
/* 000150 */ 				}
/* 000150 */ 			}
/* 000150 */ 		}
/* 000150 */ 		else {
/* 000150 */ 		}
/* 000158 */ 		return (function () {
/* 000158 */ 			var __accu0__ = self.html_blocks_joiner;
/* 000158 */ 			return __call__ (__accu0__.join, __accu0__, content_list);
/* 000158 */ 		}) ();
/* 000158 */ 	});},
/* 000163 */ 	get render_value () {return __get__ (this, function (self, value) {
/* 000163 */ 		if (arguments.length) {
/* 000163 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000163 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000163 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000163 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000163 */ 					switch (__attrib0__) {
/* 000163 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000163 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000163 */ 					}
/* 000163 */ 				}
/* 000163 */ 			}
/* 000163 */ 		}
/* 000163 */ 		else {
/* 000163 */ 		}
/* 000164 */ 		return (function () {
/* 000164 */ 			var __accu0__ = self;
/* 000164 */ 			return __call__ (__accu0__.htmlescape, __accu0__, value);
/* 000164 */ 		}) ();
/* 000164 */ 	});},
/* 000166 */ 	get render_empty_error_placeholder () {return __get__ (this, function (self, debug_str) {
/* 000166 */ 		if (arguments.length) {
/* 000166 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000166 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000166 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000166 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000166 */ 					switch (__attrib0__) {
/* 000166 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000166 */ 						case 'debug_str': var debug_str = __allkwargs0__ [__attrib0__]; break;
/* 000166 */ 					}
/* 000166 */ 				}
/* 000166 */ 			}
/* 000166 */ 		}
/* 000166 */ 		else {
/* 000166 */ 		}
/* 000167 */ 		var debug_str_safe = (function () {
/* 000167 */ 			var __accu0__ = debug_str;
/* 000167 */ 			return __call__ (__accu0__.py_replace, __accu0__, '--', '- - ');
/* 000167 */ 		}) ();
/* 000168 */ 		return '<span class="empty-error-placeholder"><!-- {} -->(?)</span>'.format (debug_str_safe);
/* 000168 */ 	});},
/* 000170 */ 	get render_nothing () {return __get__ (this, function (self, annotations) {
/* 000170 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000170 */ 			var annotations = null;
/* 000170 */ 		};
/* 000170 */ 		if (arguments.length) {
/* 000170 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000170 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000170 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000170 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000170 */ 					switch (__attrib0__) {
/* 000170 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000170 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000170 */ 					}
/* 000170 */ 				}
/* 000170 */ 			}
/* 000170 */ 		}
/* 000170 */ 		else {
/* 000170 */ 		}
/* 000171 */ 		if (__t__ (!__t__ ((annotations)))) {
/* 000172 */ 			var annotations = [];
/* 000172 */ 		}
/* 000173 */ 		var annotations = (function () {
/* 000173 */ 			var __accu0__ = [];
/* 000173 */ 			var __iterable0__ = annotations;
/* 000173 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000173 */ 				var a = __getitem__ (__iterable0__, __index0__);
/* 000173 */ 				(function () {
/* 000173 */ 					var __accu1__ = __accu0__;
/* 000173 */ 					return __call__ (__accu1__.append, __accu1__, (function () {
/* 000173 */ 						var __accu2__ = a;
/* 000173 */ 						return __call__ (__accu2__.py_replace, __accu2__, '--', '- - ');
/* 000173 */ 					}) ());
/* 000173 */ 				}) ();
/* 000173 */ 			}
/* 000173 */ 			return __accu0__;
/* 000173 */ 		}) ();
/* 000174 */ 		return (function () {
/* 000174 */ 			var __accu0__ = '<!-- {} -->';
/* 000174 */ 			return __call__ (__accu0__.format, __accu0__, (function () {
/* 000174 */ 				var __accu1__ = ' ';
/* 000174 */ 				return __call__ (__accu1__.join, __accu1__, annotations);
/* 000174 */ 			}) ());
/* 000174 */ 		}) ();
/* 000174 */ 	});},
/* 000176 */ 	get render_verbatim () {return __get__ (this, function (self, value) {
/* 000176 */ 		var target_id = null;
/* 000176 */ 		if (arguments.length) {
/* 000176 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000176 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000176 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000176 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000176 */ 					switch (__attrib0__) {
/* 000176 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000176 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000176 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000176 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000176 */ 					}
/* 000176 */ 				}
/* 000176 */ 			}
/* 000176 */ 		}
/* 000176 */ 		else {
/* 000176 */ 		}
/* 000177 */ 		var attrs = dict ({});
/* 000178 */ 		if (__t__ (target_id !== null)) {
/* 000179 */ 			__setitem__ (attrs, 'id', target_id);
/* 000179 */ 		}
/* 000180 */ 		return (function () {
/* 000180 */ 			var __accu0__ = self;
/* 000182 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'span', (function () {
/* 000182 */ 				var __accu1__ = self;
/* 000182 */ 				return __call__ (__accu1__.htmlescape, __accu1__, value);
/* 000182 */ 			}) (), __kwargtrans__ ({class_names: (__t__ (annotations) ? annotations : ['verbatim']), attrs: attrs}));
/* 000182 */ 		}) ();
/* 000182 */ 	});},
/* 000187 */ 	get render_math_content () {return __get__ (this, function (self, delimiters, nodelist, render_context, displaytype, environmentname, target_id) {
/* 000187 */ 		if (typeof environmentname == 'undefined' || (environmentname != null && environmentname.hasOwnProperty ("__kwargtrans__"))) {;
/* 000187 */ 			var environmentname = null;
/* 000187 */ 		};
/* 000187 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000187 */ 			var target_id = null;
/* 000187 */ 		};
/* 000187 */ 		if (arguments.length) {
/* 000187 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000187 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000187 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000187 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000187 */ 					switch (__attrib0__) {
/* 000187 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000187 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000187 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000187 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000187 */ 						case 'displaytype': var displaytype = __allkwargs0__ [__attrib0__]; break;
/* 000187 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000187 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000187 */ 					}
/* 000187 */ 				}
/* 000187 */ 			}
/* 000187 */ 		}
/* 000187 */ 		else {
/* 000187 */ 		}
/* 000194 */ 		var class_names = ['{}-math'.format (displaytype)];
/* 000195 */ 		if (__t__ (environmentname !== null)) {
/* 000196 */ 			(function () {
/* 000196 */ 				var __accu0__ = class_names;
/* 000196 */ 				return __call__ (__accu0__.append, __accu0__, 'env-{}'.format ((function () {
/* 000196 */ 					var __accu1__ = environmentname;
/* 000196 */ 					return __call__ (__accu1__.py_replace, __accu1__, '*', '-star');
/* 000196 */ 				}) ()));
/* 000196 */ 			}) ();
/* 000196 */ 		}
/* 000199 */ 		var content_html = (function () {
/* 000199 */ 			var __accu0__ = self;
/* 000199 */ 			return __call__ (__accu0__.htmlescape, __accu0__, __add__ (__add__ (__getitem__ (delimiters, 0), (function () {
/* 000199 */ 				var __accu1__ = nodelist;
/* 000199 */ 				return __call__ (__accu1__.latex_verbatim, __accu1__);
/* 000199 */ 			}) ()), __getitem__ (delimiters, 1)));
/* 000199 */ 		}) ();
/* 000202 */ 		var attrs = dict ({});
/* 000203 */ 		if (__t__ (target_id !== null)) {
/* 000204 */ 			__setitem__ (attrs, 'id', target_id);
/* 000204 */ 		}
/* 000206 */ 		if (__t__ (__eq__ (displaytype, 'display'))) {
/* 000210 */ 			return (function () {
/* 000210 */ 				var __accu0__ = self;
/* 000210 */ 				return __call__ (__accu0__.wrap_in_tag, __accu0__, 'span', content_html, __kwargtrans__ ({class_names: class_names, attrs: attrs}));
/* 000210 */ 			}) ();
/* 000210 */ 		}
/* 000217 */ 		return (function () {
/* 000217 */ 			var __accu0__ = self;
/* 000217 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'span', content_html, __kwargtrans__ ({class_names: class_names, attrs: attrs}));
/* 000217 */ 		}) ();
/* 000217 */ 	});},
/* 000224 */ 	get render_text_format () {return __get__ (this, function (self, text_formats, nodelist, render_context) {
/* 000224 */ 		if (arguments.length) {
/* 000224 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000224 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000224 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000224 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000224 */ 					switch (__attrib0__) {
/* 000224 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000224 */ 						case 'text_formats': var text_formats = __allkwargs0__ [__attrib0__]; break;
/* 000224 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000224 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000224 */ 					}
/* 000224 */ 				}
/* 000224 */ 			}
/* 000224 */ 		}
/* 000224 */ 		else {
/* 000224 */ 		}
/* 000228 */ 		var content = (function () {
/* 000228 */ 			var __accu0__ = self;
/* 000228 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, nodelist, render_context, __kwargtrans__ ({is_block_level: false}));
/* 000228 */ 		}) ();
/* 000234 */ 		return (function () {
/* 000234 */ 			var __accu0__ = self;
/* 000234 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'span', content, __kwargtrans__ ({class_names: text_formats}));
/* 000234 */ 		}) ();
/* 000234 */ 	});},
/* 000240 */ 	get render_semantic_block () {return __get__ (this, function (self, content, role) {
/* 000240 */ 		var annotations = null;
/* 000240 */ 		var target_id = null;
/* 000240 */ 		if (arguments.length) {
/* 000240 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000240 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000240 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000240 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000240 */ 					switch (__attrib0__) {
/* 000240 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000240 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000240 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000240 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000240 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000240 */ 					}
/* 000240 */ 				}
/* 000240 */ 			}
/* 000240 */ 		}
/* 000240 */ 		else {
/* 000240 */ 		}
/* 000241 */ 		var attrs = dict ({});
/* 000242 */ 		if (__t__ (target_id !== null)) {
/* 000243 */ 			__setitem__ (attrs, 'id', target_id);
/* 000243 */ 		}
/* 000244 */ 		if (__t__ (__in__ (role, tuple (['section', 'main', 'article'])))) {
/* 000245 */ 			return (function () {
/* 000245 */ 				var __accu0__ = self;
/* 000245 */ 				return __call__ (__accu0__.wrap_in_tag, __accu0__, role, content, __kwargtrans__ ({attrs: attrs, class_names: annotations}));
/* 000245 */ 			}) ();
/* 000245 */ 		}
/* 000251 */ 		return (function () {
/* 000251 */ 			var __accu0__ = self;
/* 000251 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'div', content, __kwargtrans__ ({attrs: attrs, class_names: __add__ ([role], (__t__ (annotations) ? annotations : []))}));
/* 000251 */ 		}) ();
/* 000251 */ 	});},
/* 000259 */ 	get render_enumeration () {return __get__ (this, function (self, iter_items_nodelists, counter_formatter, render_context) {
/* 000259 */ 		var target_id_generator = null;
/* 000259 */ 		var annotations = null;
/* 000259 */ 		var nested_depth = null;
/* 000259 */ 		if (arguments.length) {
/* 000259 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000259 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000259 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000259 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000259 */ 					switch (__attrib0__) {
/* 000259 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000259 */ 						case 'iter_items_nodelists': var iter_items_nodelists = __allkwargs0__ [__attrib0__]; break;
/* 000259 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000259 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000259 */ 						case 'target_id_generator': var target_id_generator = __allkwargs0__ [__attrib0__]; break;
/* 000259 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000259 */ 						case 'nested_depth': var nested_depth = __allkwargs0__ [__attrib0__]; break;
/* 000259 */ 					}
/* 000259 */ 				}
/* 000259 */ 			}
/* 000259 */ 		}
/* 000259 */ 		else {
/* 000259 */ 		}
/* 000271 */ 		var s_items = [];
/* 000273 */ 		var __iterable0__ = __call__ (enumerate, null, iter_items_nodelists);
/* 000273 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000273 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000273 */ 			var j = __left0__ [0];
/* 000273 */ 			var item_content_nodelist = __left0__ [1];
/* 000275 */ 			var use_block_level = true;
/* 000276 */ 			if (__t__ (item_content_nodelist.parsing_state.is_block_level === false)) {
/* 000279 */ 				var use_block_level = false;
/* 000279 */ 			}
/* 000281 */ 			// pass;
/* 000285 */ 			// pass;
/* 000289 */ 			var item_content = (function () {
/* 000289 */ 				var __accu0__ = self;
/* 000289 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, item_content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: use_block_level}));
/* 000289 */ 			}) ();
/* 000295 */ 			var enumno = __add__ (1, j);
/* 000297 */ 			var tag_nodelist = __call__ (counter_formatter, null, enumno);
/* 000298 */ 			if (__t__ (__call__ (isinstance, null, tag_nodelist, str))) {
/* 000299 */ 				var tag_content = (function () {
/* 000299 */ 					var __accu0__ = self;
/* 000299 */ 					return __call__ (__accu0__.render_value, __accu0__, tag_nodelist);
/* 000299 */ 				}) ();
/* 000299 */ 			}
/* 000300 */ 			else {
/* 000301 */ 				var tag_content = (function () {
/* 000301 */ 					var __accu0__ = self;
/* 000301 */ 					return __call__ (__accu0__.render_nodelist, __accu0__, tag_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000301 */ 				}) ();
/* 000301 */ 			}
/* 000307 */ 			var dtattrs = dict ({});
/* 000308 */ 			if (__t__ (target_id_generator !== null)) {
/* 000309 */ 				__setitem__ (dtattrs, 'id', __call__ (target_id_generator, null, enumno));
/* 000309 */ 			}
/* 000311 */ 			(function () {
/* 000311 */ 				var __accu0__ = s_items;
/* 000312 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000312 */ 					var __accu1__ = self;
/* 000313 */ 					return __call__ (__accu1__.render_join, __accu1__, [(function () {
/* 000313 */ 						var __accu2__ = self;
/* 000313 */ 						return __call__ (__accu2__.wrap_in_tag, __accu2__, 'dt', tag_content, __kwargtrans__ ({attrs: dtattrs}));
/* 000318 */ 					}) (), (function () {
/* 000318 */ 						var __accu2__ = self;
/* 000318 */ 						return __call__ (__accu2__.wrap_in_tag, __accu2__, 'dd', item_content);
/* 000318 */ 					}) ()]);
/* 000318 */ 				}) ());
/* 000318 */ 			}) ();
/* 000318 */ 		}
/* 000325 */ 		return (function () {
/* 000325 */ 			var __accu0__ = self;
/* 000327 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'dl', (function () {
/* 000327 */ 				var __accu1__ = self;
/* 000327 */ 				return __call__ (__accu1__.render_join, __accu1__, s_items);
/* 000327 */ 			}) (), __kwargtrans__ ({class_names: __add__ (['enumeration'], (__t__ (annotations) ? annotations : []))}));
/* 000327 */ 		}) ();
/* 000327 */ 	});},
/* 000332 */ 	get render_heading () {return __get__ (this, function (self, heading_nodelist, render_context) {
/* 000332 */ 		var heading_level = 1;
/* 000332 */ 		var target_id = null;
/* 000332 */ 		var inline_heading = false;
/* 000332 */ 		var annotations = null;
/* 000332 */ 		if (arguments.length) {
/* 000332 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000332 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000332 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000332 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000332 */ 					switch (__attrib0__) {
/* 000332 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000332 */ 						case 'heading_nodelist': var heading_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000332 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000332 */ 						case 'heading_level': var heading_level = __allkwargs0__ [__attrib0__]; break;
/* 000332 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000332 */ 						case 'inline_heading': var inline_heading = __allkwargs0__ [__attrib0__]; break;
/* 000332 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000332 */ 					}
/* 000332 */ 				}
/* 000332 */ 			}
/* 000332 */ 		}
/* 000332 */ 		else {
/* 000332 */ 		}
/* 000336 */ 		if (__t__ (!__in__ (heading_level, self.heading_tags_by_level))) {
/* 000338 */ 			var __except0__ = __call__ (ValueError, null, 'Bad heading_level={}, expected one of {}'.format (heading_level, __call__ (list, null, (function () {
/* 000338 */ 				var __accu0__ = self.heading_tags_by_level;
/* 000338 */ 				return __call__ (__accu0__.py_keys, __accu0__);
/* 000338 */ 			}) ())));
/* 000338 */ 			__except0__.__cause__ = null;
/* 000338 */ 			throw __except0__;
/* 000338 */ 		}
/* 000340 */ 		var annot = (__t__ (annotations) ? __call__ (list, null, annotations) : []);
/* 000341 */ 		(function () {
/* 000341 */ 			var __accu0__ = annot;
/* 000341 */ 			return __call__ (__accu0__.append, __accu0__, 'heading-level-{}'.format (heading_level));
/* 000341 */ 		}) ();
/* 000342 */ 		if (__t__ (inline_heading)) {
/* 000343 */ 			(function () {
/* 000343 */ 				var __accu0__ = annot;
/* 000343 */ 				return __call__ (__accu0__.append, __accu0__, 'heading-inline');
/* 000343 */ 			}) ();
/* 000343 */ 		}
/* 000345 */ 		var attrs = dict ({});
/* 000346 */ 		if (__t__ (target_id !== null)) {
/* 000347 */ 			__setitem__ (attrs, 'id', target_id);
/* 000347 */ 		}
/* 000349 */ 		var content = (function () {
/* 000349 */ 			var __accu0__ = self;
/* 000351 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, __getitem__ (self.heading_tags_by_level, heading_level), (function () {
/* 000351 */ 				var __accu1__ = self;
/* 000351 */ 				return __call__ (__accu1__.render_inline_content, __accu1__, heading_nodelist, render_context);
/* 000351 */ 			}) (), __kwargtrans__ ({class_names: annot, attrs: attrs}));
/* 000351 */ 		}) ();
/* 000355 */ 		if (__t__ (__t__ (inline_heading) && self.inline_heading_add_space)) {
/* 000356 */ 			var content = __call__ (__iadd__, null, content, ' ');
/* 000356 */ 		}
/* 000357 */ 		// pass;
/* 000361 */ 		return content;
/* 000361 */ 	});},
/* 000363 */ 	get render_link () {return __get__ (this, function (self, ref_type, href, display_nodelist, render_context, annotations) {
/* 000363 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000363 */ 			var annotations = null;
/* 000363 */ 		};
/* 000363 */ 		if (arguments.length) {
/* 000363 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000363 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000363 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000363 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000363 */ 					switch (__attrib0__) {
/* 000363 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000363 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000363 */ 						case 'href': var href = __allkwargs0__ [__attrib0__]; break;
/* 000363 */ 						case 'display_nodelist': var display_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000363 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000363 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000363 */ 					}
/* 000363 */ 				}
/* 000363 */ 			}
/* 000363 */ 		}
/* 000363 */ 		else {
/* 000363 */ 		}
/* 000364 */ 		var display_content = (function () {
/* 000364 */ 			var __accu0__ = self;
/* 000364 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, display_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000364 */ 		}) ();
/* 000369 */ 		return (function () {
/* 000369 */ 			var __accu0__ = self;
/* 000369 */ 			return __call__ (__accu0__.wrap_in_link, __accu0__, display_content, href, __kwargtrans__ ({class_names: __add__ (['href-{}'.format (ref_type)], (__t__ (annotations) ? annotations : []))}));
/* 000369 */ 		}) ();
/* 000369 */ 	});},
/* 000376 */ 	get render_delayed_marker () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000376 */ 		if (arguments.length) {
/* 000376 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000376 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000376 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000376 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000376 */ 					switch (__attrib0__) {
/* 000376 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000376 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000376 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000376 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000376 */ 					}
/* 000376 */ 				}
/* 000376 */ 			}
/* 000376 */ 		}
/* 000376 */ 		else {
/* 000376 */ 		}
/* 000377 */ 		return '<LLM:DLYD:{}/>'.format (delayed_key);
/* 000377 */ 	});},
/* 000379 */ 	get render_delayed_dummy_placeholder () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000379 */ 		if (arguments.length) {
/* 000379 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000379 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000379 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000379 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000379 */ 					switch (__attrib0__) {
/* 000379 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000379 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000379 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000379 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000379 */ 					}
/* 000379 */ 				}
/* 000379 */ 			}
/* 000379 */ 		}
/* 000379 */ 		else {
/* 000379 */ 		}
/* 000380 */ 		return '<!-- delayed:{} -->'.format (delayed_key);
/* 000380 */ 	});},
/* 000382 */ 	get replace_delayed_markers_with_final_values () {return __get__ (this, function (self, content, delayed_values) {
/* 000382 */ 		if (arguments.length) {
/* 000382 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000382 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000382 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000382 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000382 */ 					switch (__attrib0__) {
/* 000382 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000382 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000382 */ 						case 'delayed_values': var delayed_values = __allkwargs0__ [__attrib0__]; break;
/* 000382 */ 					}
/* 000382 */ 				}
/* 000382 */ 			}
/* 000382 */ 		}
/* 000382 */ 		else {
/* 000382 */ 		}
/* 000383 */ 		return (function () {
/* 000383 */ 			var __accu0__ = _rx_delayed_markers;
/* 000383 */ 			return __call__ (__accu0__.sub, __accu0__, (function __lambda__ (m) {
/* 000383 */ 				if (arguments.length) {
/* 000383 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000383 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000383 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000383 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000383 */ 							switch (__attrib0__) {
/* 000383 */ 								case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000383 */ 							}
/* 000383 */ 						}
/* 000383 */ 					}
/* 000383 */ 				}
/* 000383 */ 				else {
/* 000383 */ 				}
/* 000384 */ 				return __getitem__ (delayed_values, __call__ (int, null, (function () {
/* 000384 */ 					var __accu1__ = m;
/* 000384 */ 					return __call__ (__accu1__.group, __accu1__, 'key');
/* 000384 */ 				}) ()));
/* 000384 */ 			}), content);
/* 000384 */ 		}) ();
/* 000384 */ 	});},
/* 000391 */ 	get render_float () {return __get__ (this, function (self, float_instance, render_context) {
/* 000391 */ 		if (arguments.length) {
/* 000391 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000391 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000391 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000391 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000391 */ 					switch (__attrib0__) {
/* 000391 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000391 */ 						case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000391 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000391 */ 					}
/* 000391 */ 				}
/* 000391 */ 			}
/* 000391 */ 		}
/* 000391 */ 		else {
/* 000391 */ 		}
/* 000394 */ 		var figattrs = dict ({});
/* 000396 */ 		if (__t__ (float_instance.target_id !== null)) {
/* 000397 */ 			__setitem__ (figattrs, 'id', float_instance.target_id);
/* 000397 */ 		}
/* 000399 */ 		var full_figcaption_rendered_list = [];
/* 000400 */ 		if (__t__ (float_instance.number !== null)) {
/* 000402 */ 			(function () {
/* 000402 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000403 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000403 */ 					var __accu1__ = self;
/* 000405 */ 					return __call__ (__accu1__.wrap_in_tag, __accu1__, 'span', (function () {
/* 000405 */ 						var __accu2__ = self;
/* 000406 */ 						return __call__ (__accu2__.render_join, __accu2__, [(function () {
/* 000406 */ 							var __accu3__ = self;
/* 000406 */ 							return __call__ (__accu3__.render_value, __accu3__, float_instance.float_type_info.float_caption_name);
/* 000410 */ 						}) (), '&nbsp;', (function () {
/* 000410 */ 							var __accu3__ = self;
/* 000410 */ 							return __call__ (__accu3__.render_nodelist, __accu3__, float_instance.formatted_counter_value_llm.nodes, __kwargtrans__ ({render_context: render_context}));
/* 000410 */ 						}) ()]);
/* 000410 */ 					}) (), __kwargtrans__ ({class_names: ['float-number']}));
/* 000410 */ 				}) ());
/* 000410 */ 			}) ();
/* 000410 */ 		}
/* 000418 */ 		else if (__t__ (float_instance.caption_nodelist)) {
/* 000421 */ 			(function () {
/* 000421 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000422 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000422 */ 					var __accu1__ = self;
/* 000424 */ 					return __call__ (__accu1__.wrap_in_tag, __accu1__, 'span', (function () {
/* 000424 */ 						var __accu2__ = self;
/* 000425 */ 						return __call__ (__accu2__.render_join, __accu2__, [(function () {
/* 000425 */ 							var __accu3__ = self;
/* 000425 */ 							return __call__ (__accu3__.render_value, __accu3__, float_instance.float_type_info.float_caption_name);
/* 000425 */ 						}) ()]);
/* 000425 */ 					}) (), __kwargtrans__ ({class_names: ['float-no-number']}));
/* 000425 */ 				}) ());
/* 000425 */ 			}) ();
/* 000425 */ 		}
/* 000428 */ 		else {
/* 000432 */ 			// pass;
/* 000432 */ 		}
/* 000434 */ 		if (__t__ (float_instance.caption_nodelist)) {
/* 000438 */ 			(function () {
/* 000438 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000438 */ 				return __call__ (__accu0__.append, __accu0__, ': ');
/* 000438 */ 			}) ();
/* 000441 */ 			(function () {
/* 000441 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000442 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000442 */ 					var __accu1__ = self;
/* 000442 */ 					return __call__ (__accu1__.render_nodelist, __accu1__, float_instance.caption_nodelist, __kwargtrans__ ({render_context: render_context}));
/* 000442 */ 				}) ());
/* 000442 */ 			}) ();
/* 000442 */ 		}
/* 000448 */ 		var rendered_float_caption = null;
/* 000449 */ 		if (__t__ (full_figcaption_rendered_list)) {
/* 000450 */ 			var rendered_float_caption = (function () {
/* 000450 */ 				var __accu0__ = self;
/* 000452 */ 				return __call__ (__accu0__.wrap_in_tag, __accu0__, 'figcaption', (function () {
/* 000452 */ 					var __accu1__ = self;
/* 000454 */ 					return __call__ (__accu1__.wrap_in_tag, __accu1__, 'span', (function () {
/* 000454 */ 						var __accu2__ = self;
/* 000454 */ 						return __call__ (__accu2__.render_join, __accu2__, full_figcaption_rendered_list);
/* 000454 */ 					}) ());
/* 000454 */ 				}) (), __kwargtrans__ ({class_names: ['float-caption-content']}));
/* 000454 */ 			}) ();
/* 000454 */ 		}
/* 000459 */ 		var float_content_block_content = (function () {
/* 000459 */ 			var __accu0__ = self;
/* 000459 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, float_instance.content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: true}));
/* 000459 */ 		}) ();
/* 000464 */ 		var float_content_block = (function () {
/* 000464 */ 			var __accu0__ = self;
/* 000464 */ 			return __call__ (__accu0__.render_semantic_block, __accu0__, float_content_block_content, 'float-contents');
/* 000464 */ 		}) ();
/* 000469 */ 		if (__t__ (rendered_float_caption !== null)) {
/* 000470 */ 			var float_content_with_caption = (function () {
/* 000470 */ 				var __accu0__ = self;
/* 000470 */ 				return __call__ (__accu0__.render_join_blocks, __accu0__, [float_content_block, rendered_float_caption]);
/* 000470 */ 			}) ();
/* 000470 */ 		}
/* 000473 */ 		else {
/* 000475 */ 			var float_content_with_caption = float_content_block;
/* 000475 */ 		}
/* 000477 */ 		var full_figure = (function () {
/* 000477 */ 			var __accu0__ = self;
/* 000477 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'figure', float_content_with_caption, __kwargtrans__ ({attrs: figattrs, class_names: ['float', 'float-{}'.format (float_instance.float_type)]}));
/* 000477 */ 		}) ();
/* 000484 */ 		return full_figure;
/* 000484 */ 	});},
/* 000487 */ 	graphics_raster_magnification: 1,
/* 000488 */ 	graphics_vector_magnification: 1,
/* 000490 */ 	get render_graphics_block () {return __get__ (this, function (self, graphics_resource) {
/* 000490 */ 		if (arguments.length) {
/* 000490 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000490 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000490 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000490 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000490 */ 					switch (__attrib0__) {
/* 000490 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000490 */ 						case 'graphics_resource': var graphics_resource = __allkwargs0__ [__attrib0__]; break;
/* 000490 */ 					}
/* 000490 */ 				}
/* 000490 */ 			}
/* 000490 */ 		}
/* 000490 */ 		else {
/* 000490 */ 		}
/* 000492 */ 		var imgattrs = dict ({});
/* 000494 */ 		var styparts = [];
/* 000495 */ 		if (__t__ (graphics_resource.physical_dimensions !== null)) {
/* 000497 */ 			var __left0__ = graphics_resource.physical_dimensions;
/* 000497 */ 			var width_pt = __left0__ [0];
/* 000497 */ 			var height_pt = __left0__ [1];
/* 000499 */ 			if (__t__ (__eq__ (graphics_resource.graphics_type, 'raster'))) {
/* 000500 */ 				if (__t__ (width_pt !== null)) {
/* 000501 */ 					var width_pt = __call__ (__imul__, null, width_pt, self.graphics_raster_magnification);
/* 000501 */ 				}
/* 000502 */ 				if (__t__ (height_pt !== null)) {
/* 000503 */ 					var height_pt = __call__ (__imul__, null, height_pt, self.graphics_raster_magnification);
/* 000503 */ 				}
/* 000503 */ 			}
/* 000504 */ 			else if (__t__ (__eq__ (graphics_resource.graphics_type, 'vector'))) {
/* 000505 */ 				if (__t__ (width_pt !== null)) {
/* 000506 */ 					var width_pt = __call__ (__imul__, null, width_pt, self.graphics_vector_magnification);
/* 000506 */ 				}
/* 000507 */ 				if (__t__ (height_pt !== null)) {
/* 000508 */ 					var height_pt = __call__ (__imul__, null, height_pt, self.graphics_vector_magnification);
/* 000508 */ 				}
/* 000508 */ 			}
/* 000510 */ 			if (__t__ (width_pt !== null)) {
/* 000511 */ 				(function () {
/* 000511 */ 					var __accu0__ = styparts;
/* 000511 */ 					return __call__ (__accu0__.append, __accu0__, 'width:{}pt'.format (width_pt));
/* 000511 */ 				}) ();
/* 000511 */ 			}
/* 000512 */ 			if (__t__ (height_pt !== null)) {
/* 000513 */ 				(function () {
/* 000513 */ 					var __accu0__ = styparts;
/* 000513 */ 					return __call__ (__accu0__.append, __accu0__, 'height:{}pt'.format (height_pt));
/* 000513 */ 				}) ();
/* 000513 */ 			}
/* 000513 */ 		}
/* 000515 */ 		if (__t__ (styparts)) {
/* 000516 */ 			__setitem__ (imgattrs, 'style', (function () {
/* 000516 */ 				var __accu0__ = ';';
/* 000516 */ 				return __call__ (__accu0__.join, __accu0__, styparts);
/* 000516 */ 			}) ());
/* 000516 */ 		}
/* 000518 */ 		__setitem__ (imgattrs, 'src', graphics_resource.src_url);
/* 000521 */ 		return (function () {
/* 000521 */ 			var __accu0__ = self;
/* 000521 */ 			return __call__ (__accu0__.generate_open_tag, __accu0__, 'img', __kwargtrans__ ({attrs: imgattrs}));
/* 000521 */ 		}) ();
/* 000521 */ 	});}
/* 000521 */ });
/* 000527 */ export var _rx_delayed_markers = (function () {
/* 000527 */ 	var __accu0__ = re;
/* 000527 */ 	return __call__ (__accu0__.compile, __accu0__, '<LLM:DLYD:(?P<key>\\d+)\\s*/>');
/* 000527 */ }) ();
/* 000006 */ 
//# sourceMappingURL=llm.fragmentrenderer.html.map