/* 000001 */ // Transcrypt'ed from Python, 2022-09-16 23:46:25
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
/* 000016 */ export var _rx_html_entity = (function () {
/* 000016 */ 	var __accu0__ = re;
/* 000016 */ 	return __call__ (__accu0__.compile, __accu0__, '[&]([a-zA-Z]+|[#][0-9]+|[#]x[0-9a-fA-F]+);');
/* 000016 */ }) ();
/* 000019 */ export var HtmlFragmentRenderer =  __class__ ('HtmlFragmentRenderer', [FragmentRenderer], {
/* 000019 */ 	__module__: __name__,
/* 000021 */ 	supports_delayed_render_markers: true,
/* 000028 */ 	use_link_target_blank: false,
/* 000041 */ 	html_blocks_joiner: '\n',
/* 000060 */ 	heading_tags_by_level: dict ({1: 'h1', 2: 'h2', 3: 'h3', 4: 'span', 5: 'span', 6: 'span'}),
/* 000072 */ 	inline_heading_add_space: true,
/* 000085 */ 	get htmlescape () {return __get__ (this, function (self, value) {
/* 000085 */ 		if (arguments.length) {
/* 000085 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000085 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000085 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000085 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000085 */ 					switch (__attrib0__) {
/* 000085 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000085 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000085 */ 					}
/* 000085 */ 				}
/* 000085 */ 			}
/* 000085 */ 		}
/* 000085 */ 		else {
/* 000085 */ 		}
/* 000086 */ 		return (function () {
/* 000086 */ 			var __accu0__ = html;
/* 000086 */ 			return __call__ (__accu0__.escape, __accu0__, value);
/* 000086 */ 		}) ();
/* 000086 */ 	});},
/* 000088 */ 	get htmlescape_double_quoted_attribute () {return __get__ (this, function (self, value) {
/* 000088 */ 		if (arguments.length) {
/* 000088 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000088 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000088 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000088 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000088 */ 					switch (__attrib0__) {
/* 000088 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000088 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000088 */ 					}
/* 000088 */ 				}
/* 000088 */ 			}
/* 000088 */ 		}
/* 000088 */ 		else {
/* 000088 */ 		}
/* 000096 */ 		var value = (function () {
/* 000096 */ 			var __accu0__ = _rx_html_entity;
/* 000096 */ 			return __call__ (__accu0__.sub, __accu0__, (function __lambda__ (m) {
/* 000096 */ 				if (arguments.length) {
/* 000096 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000096 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000096 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000096 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000096 */ 							switch (__attrib0__) {
/* 000096 */ 								case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000096 */ 							}
/* 000096 */ 						}
/* 000096 */ 					}
/* 000096 */ 				}
/* 000096 */ 				else {
/* 000096 */ 				}
/* 000096 */ 				return __add__ (__add__ ('&amp;', (function () {
/* 000096 */ 					var __accu1__ = m;
/* 000096 */ 					return __call__ (__accu1__.group, __accu1__, 1);
/* 000096 */ 				}) ()), ';');
/* 000096 */ 			}), value);
/* 000096 */ 		}) ();
/* 000098 */ 		var value = (function () {
/* 000098 */ 			var __accu0__ = value;
/* 000098 */ 			return __call__ (__accu0__.py_replace, __accu0__, '"', '&quot;');
/* 000098 */ 		}) ();
/* 000099 */ 		return value;
/* 000099 */ 	});},
/* 000101 */ 	get generate_open_tag () {return __get__ (this, function (self, tagname) {
/* 000101 */ 		var attrs = null;
/* 000101 */ 		var class_names = null;
/* 000101 */ 		var self_close_tag = false;
/* 000101 */ 		if (arguments.length) {
/* 000101 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000101 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000101 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000101 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000101 */ 					switch (__attrib0__) {
/* 000101 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000101 */ 						case 'tagname': var tagname = __allkwargs0__ [__attrib0__]; break;
/* 000101 */ 						case 'attrs': var attrs = __allkwargs0__ [__attrib0__]; break;
/* 000101 */ 						case 'class_names': var class_names = __allkwargs0__ [__attrib0__]; break;
/* 000101 */ 						case 'self_close_tag': var self_close_tag = __allkwargs0__ [__attrib0__]; break;
/* 000101 */ 					}
/* 000101 */ 				}
/* 000101 */ 			}
/* 000101 */ 		}
/* 000101 */ 		else {
/* 000101 */ 		}
/* 000102 */ 		var s = '<{}'.format (tagname);
/* 000103 */ 		if (__t__ (!__t__ ((attrs)))) {
/* 000104 */ 			var attrs = dict ({});
/* 000104 */ 		}
/* 000105 */ 		var attrs = __call__ (dict, null, attrs);
/* 000106 */ 		if (__t__ (__in__ ('class', attrs))) {
/* 000107 */ 			var __except0__ = __call__ (ValueError, null, "generate_open_tag(): set HTML 'class' attribute with class_names=, not with attrs=");
/* 000107 */ 			__except0__.__cause__ = null;
/* 000107 */ 			throw __except0__;
/* 000107 */ 		}
/* 000111 */ 		if (__t__ (class_names)) {
/* 000112 */ 			__setitem__ (attrs, 'class', (function () {
/* 000112 */ 				var __accu0__ = ' ';
/* 000112 */ 				return __call__ (__accu0__.join, __accu0__, class_names);
/* 000112 */ 			}) ());
/* 000112 */ 		}
/* 000113 */ 		if (__t__ (attrs)) {
/* 000114 */ 			var __iterable0__ = (function () {
/* 000114 */ 				var __accu0__ = attrs;
/* 000114 */ 				return __call__ (__accu0__.py_items, __accu0__);
/* 000114 */ 			}) ();
/* 000114 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000114 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000114 */ 				var aname = __left0__ [0];
/* 000114 */ 				var aval = __left0__ [1];
/* 000115 */ 				var s = __call__ (__iadd__, null, s, ' {}="{}"'.format (aname, (function () {
/* 000115 */ 					var __accu0__ = self;
/* 000115 */ 					return __call__ (__accu0__.htmlescape_double_quoted_attribute, __accu0__, aval);
/* 000115 */ 				}) ()));
/* 000115 */ 			}
/* 000115 */ 		}
/* 000116 */ 		if (__t__ (self_close_tag)) {
/* 000117 */ 			var s = __call__ (__iadd__, null, s, '/>');
/* 000117 */ 		}
/* 000118 */ 		else {
/* 000119 */ 			var s = __call__ (__iadd__, null, s, '>');
/* 000119 */ 		}
/* 000120 */ 		return s;
/* 000120 */ 	});},
/* 000122 */ 	get wrap_in_tag () {return __get__ (this, function (self, tagname, content_html) {
/* 000122 */ 		var attrs = null;
/* 000122 */ 		var class_names = null;
/* 000122 */ 		if (arguments.length) {
/* 000122 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000122 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000122 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000122 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000122 */ 					switch (__attrib0__) {
/* 000122 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000122 */ 						case 'tagname': var tagname = __allkwargs0__ [__attrib0__]; break;
/* 000122 */ 						case 'content_html': var content_html = __allkwargs0__ [__attrib0__]; break;
/* 000122 */ 						case 'attrs': var attrs = __allkwargs0__ [__attrib0__]; break;
/* 000122 */ 						case 'class_names': var class_names = __allkwargs0__ [__attrib0__]; break;
/* 000122 */ 					}
/* 000122 */ 				}
/* 000122 */ 			}
/* 000122 */ 		}
/* 000122 */ 		else {
/* 000122 */ 		}
/* 000124 */ 		var s = (function () {
/* 000124 */ 			var __accu0__ = self;
/* 000124 */ 			return __call__ (__accu0__.generate_open_tag, __accu0__, tagname, __kwargtrans__ ({attrs: attrs, class_names: class_names}));
/* 000124 */ 		}) ();
/* 000125 */ 		var s = __call__ (__iadd__, null, s, __call__ (str, null, content_html));
/* 000126 */ 		var s = __call__ (__iadd__, null, s, '</{}>'.format (tagname));
/* 000127 */ 		return s;
/* 000127 */ 	});},
/* 000129 */ 	get wrap_in_link () {return __get__ (this, function (self, display_html, target_href) {
/* 000129 */ 		var class_names = null;
/* 000129 */ 		if (arguments.length) {
/* 000129 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000129 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000129 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000129 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000129 */ 					switch (__attrib0__) {
/* 000129 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000129 */ 						case 'display_html': var display_html = __allkwargs0__ [__attrib0__]; break;
/* 000129 */ 						case 'target_href': var target_href = __allkwargs0__ [__attrib0__]; break;
/* 000129 */ 						case 'class_names': var class_names = __allkwargs0__ [__attrib0__]; break;
/* 000129 */ 					}
/* 000129 */ 				}
/* 000129 */ 			}
/* 000129 */ 		}
/* 000129 */ 		else {
/* 000129 */ 		}
/* 000130 */ 		if (__t__ (!__t__ ((target_href)))) {
/* 000131 */ 			var target_href = '#';
/* 000131 */ 		}
/* 000133 */ 		var attrs = dict ({'href': (function () {
/* 000133 */ 			var __accu0__ = self;
/* 000133 */ 			return __call__ (__accu0__.htmlescape, __accu0__, target_href);
/* 000133 */ 		}) ()});
/* 000135 */ 		if (__t__ (__call__ (callable, null, self.use_link_target_blank))) {
/* 000136 */ 			if (__t__ ((function () {
/* 000136 */ 				var __accu0__ = self;
/* 000136 */ 				return __call__ (__accu0__.use_link_target_blank, __accu0__, target_href);
/* 000136 */ 			}) ())) {
/* 000137 */ 				__setitem__ (attrs, 'target', '_blank');
/* 000137 */ 			}
/* 000137 */ 		}
/* 000138 */ 		else if (__t__ (__t__ (self.use_link_target_blank) && !__t__ (((function () {
/* 000138 */ 			var __accu0__ = target_href;
/* 000138 */ 			return __call__ (__accu0__.startswith, __accu0__, '#');
/* 000138 */ 		}) ())))) {
/* 000139 */ 			__setitem__ (attrs, 'target', '_blank');
/* 000139 */ 		}
/* 000140 */ 		return (function () {
/* 000140 */ 			var __accu0__ = self;
/* 000140 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'a', display_html, __kwargtrans__ ({attrs: attrs, class_names: class_names}));
/* 000140 */ 		}) ();
/* 000140 */ 	});},
/* 000149 */ 	get render_build_paragraph () {return __get__ (this, function (self, nodelist, render_context) {
/* 000149 */ 		if (arguments.length) {
/* 000149 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000149 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000149 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000149 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000149 */ 					switch (__attrib0__) {
/* 000149 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000149 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000149 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000149 */ 					}
/* 000149 */ 				}
/* 000149 */ 			}
/* 000149 */ 		}
/* 000149 */ 		else {
/* 000149 */ 		}
/* 000152 */ 		return __add__ (__add__ ('<p>', (function () {
/* 000152 */ 			var __accu0__ = self;
/* 000152 */ 			return __call__ (__accu0__.render_inline_content, __accu0__, nodelist, render_context);
/* 000152 */ 		}) ()), '</p>');
/* 000152 */ 	});},
/* 000156 */ 	get render_inline_content () {return __get__ (this, function (self, nodelist, render_context) {
/* 000156 */ 		if (arguments.length) {
/* 000156 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000156 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000156 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000156 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000156 */ 					switch (__attrib0__) {
/* 000156 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 					}
/* 000156 */ 				}
/* 000156 */ 			}
/* 000156 */ 		}
/* 000156 */ 		else {
/* 000156 */ 		}
/* 000157 */ 		return (function () {
/* 000157 */ 			var __accu0__ = self;
/* 000157 */ 			return __call__ (__accu0__.render_join, __accu0__, (function () {
/* 000157 */ 				var __accu1__ = [];
/* 000158 */ 				var __iterable0__ = nodelist;
/* 000158 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000158 */ 					var n = __getitem__ (__iterable0__, __index0__);
/* 000158 */ 					(function () {
/* 000158 */ 						var __accu2__ = __accu1__;
/* 000158 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000158 */ 							var __accu3__ = self;
/* 000158 */ 							return __call__ (__accu3__.render_node, __accu3__, n, render_context);
/* 000158 */ 						}) ());
/* 000158 */ 					}) ();
/* 000158 */ 				}
/* 000158 */ 				return __accu1__;
/* 000158 */ 			}) ());
/* 000158 */ 		}) ();
/* 000158 */ 	});},
/* 000161 */ 	get render_join () {return __get__ (this, function (self, content_list) {
/* 000161 */ 		if (arguments.length) {
/* 000161 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000161 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000161 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000161 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000161 */ 					switch (__attrib0__) {
/* 000161 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000161 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000161 */ 					}
/* 000161 */ 				}
/* 000161 */ 			}
/* 000161 */ 		}
/* 000161 */ 		else {
/* 000161 */ 		}
/* 000167 */ 		return (function () {
/* 000167 */ 			var __accu0__ = '';
/* 000167 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000167 */ 				var __accu1__ = [];
/* 000167 */ 				var __iterable0__ = content_list;
/* 000167 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000167 */ 					var s = __getitem__ (__iterable0__, __index0__);
/* 000167 */ 					(function () {
/* 000167 */ 						var __accu2__ = __accu1__;
/* 000167 */ 						return __call__ (__accu2__.append, __accu2__, __call__ (str, null, s));
/* 000167 */ 					}) ();
/* 000167 */ 				}
/* 000167 */ 				return __accu1__;
/* 000167 */ 			}) ());
/* 000167 */ 		}) ();
/* 000167 */ 	});},
/* 000169 */ 	get render_join_blocks () {return __get__ (this, function (self, content_list) {
/* 000169 */ 		if (arguments.length) {
/* 000169 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000169 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000169 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000169 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000169 */ 					switch (__attrib0__) {
/* 000169 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000169 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000169 */ 					}
/* 000169 */ 				}
/* 000169 */ 			}
/* 000169 */ 		}
/* 000169 */ 		else {
/* 000169 */ 		}
/* 000177 */ 		return (function () {
/* 000177 */ 			var __accu0__ = self.html_blocks_joiner;
/* 000177 */ 			return __call__ (__accu0__.join, __accu0__, content_list);
/* 000177 */ 		}) ();
/* 000177 */ 	});},
/* 000182 */ 	get render_value () {return __get__ (this, function (self, value) {
/* 000182 */ 		if (arguments.length) {
/* 000182 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000182 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000182 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000182 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000182 */ 					switch (__attrib0__) {
/* 000182 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000182 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000182 */ 					}
/* 000182 */ 				}
/* 000182 */ 			}
/* 000182 */ 		}
/* 000182 */ 		else {
/* 000182 */ 		}
/* 000183 */ 		return (function () {
/* 000183 */ 			var __accu0__ = self;
/* 000183 */ 			return __call__ (__accu0__.htmlescape, __accu0__, value);
/* 000183 */ 		}) ();
/* 000183 */ 	});},
/* 000185 */ 	get render_empty_error_placeholder () {return __get__ (this, function (self, debug_str) {
/* 000185 */ 		if (arguments.length) {
/* 000185 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000185 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000185 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000185 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000185 */ 					switch (__attrib0__) {
/* 000185 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000185 */ 						case 'debug_str': var debug_str = __allkwargs0__ [__attrib0__]; break;
/* 000185 */ 					}
/* 000185 */ 				}
/* 000185 */ 			}
/* 000185 */ 		}
/* 000185 */ 		else {
/* 000185 */ 		}
/* 000186 */ 		var debug_str_safe = (function () {
/* 000186 */ 			var __accu0__ = debug_str;
/* 000186 */ 			return __call__ (__accu0__.py_replace, __accu0__, '--', '- - ');
/* 000186 */ 		}) ();
/* 000187 */ 		return '<span class="empty-error-placeholder"><!-- {} -->(?)</span>'.format (debug_str_safe);
/* 000187 */ 	});},
/* 000189 */ 	get render_nothing () {return __get__ (this, function (self, annotations) {
/* 000189 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000189 */ 			var annotations = null;
/* 000189 */ 		};
/* 000189 */ 		if (arguments.length) {
/* 000189 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000189 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000189 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000189 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000189 */ 					switch (__attrib0__) {
/* 000189 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000189 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000189 */ 					}
/* 000189 */ 				}
/* 000189 */ 			}
/* 000189 */ 		}
/* 000189 */ 		else {
/* 000189 */ 		}
/* 000190 */ 		if (__t__ (!__t__ ((annotations)))) {
/* 000191 */ 			var annotations = [];
/* 000191 */ 		}
/* 000192 */ 		var annotations = (function () {
/* 000192 */ 			var __accu0__ = [];
/* 000192 */ 			var __iterable0__ = annotations;
/* 000192 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000192 */ 				var a = __getitem__ (__iterable0__, __index0__);
/* 000192 */ 				(function () {
/* 000192 */ 					var __accu1__ = __accu0__;
/* 000192 */ 					return __call__ (__accu1__.append, __accu1__, (function () {
/* 000192 */ 						var __accu2__ = a;
/* 000192 */ 						return __call__ (__accu2__.py_replace, __accu2__, '--', '- - ');
/* 000192 */ 					}) ());
/* 000192 */ 				}) ();
/* 000192 */ 			}
/* 000192 */ 			return __accu0__;
/* 000192 */ 		}) ();
/* 000193 */ 		return (function () {
/* 000193 */ 			var __accu0__ = '<!-- {} -->';
/* 000193 */ 			return __call__ (__accu0__.format, __accu0__, (function () {
/* 000193 */ 				var __accu1__ = ' ';
/* 000193 */ 				return __call__ (__accu1__.join, __accu1__, annotations);
/* 000193 */ 			}) ());
/* 000193 */ 		}) ();
/* 000193 */ 	});},
/* 000195 */ 	get render_verbatim () {return __get__ (this, function (self, value) {
/* 000195 */ 		var target_id = null;
/* 000195 */ 		if (arguments.length) {
/* 000195 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000195 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000195 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000195 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000195 */ 					switch (__attrib0__) {
/* 000195 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000195 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000195 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000195 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000195 */ 					}
/* 000195 */ 				}
/* 000195 */ 			}
/* 000195 */ 		}
/* 000195 */ 		else {
/* 000195 */ 		}
/* 000196 */ 		var attrs = dict ({});
/* 000197 */ 		if (__t__ (target_id !== null)) {
/* 000198 */ 			__setitem__ (attrs, 'id', target_id);
/* 000198 */ 		}
/* 000199 */ 		return (function () {
/* 000199 */ 			var __accu0__ = self;
/* 000201 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'span', (function () {
/* 000201 */ 				var __accu1__ = self;
/* 000201 */ 				return __call__ (__accu1__.htmlescape, __accu1__, value);
/* 000201 */ 			}) (), __kwargtrans__ ({class_names: (__t__ (annotations) ? annotations : ['verbatim']), attrs: attrs}));
/* 000201 */ 		}) ();
/* 000201 */ 	});},
/* 000206 */ 	get render_math_content () {return __get__ (this, function (self, delimiters, nodelist, render_context, displaytype, environmentname, target_id) {
/* 000206 */ 		if (typeof environmentname == 'undefined' || (environmentname != null && environmentname.hasOwnProperty ("__kwargtrans__"))) {;
/* 000206 */ 			var environmentname = null;
/* 000206 */ 		};
/* 000206 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000206 */ 			var target_id = null;
/* 000206 */ 		};
/* 000206 */ 		if (arguments.length) {
/* 000206 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000206 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000206 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000206 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000206 */ 					switch (__attrib0__) {
/* 000206 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000206 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000206 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000206 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000206 */ 						case 'displaytype': var displaytype = __allkwargs0__ [__attrib0__]; break;
/* 000206 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000206 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000206 */ 					}
/* 000206 */ 				}
/* 000206 */ 			}
/* 000206 */ 		}
/* 000206 */ 		else {
/* 000206 */ 		}
/* 000213 */ 		var class_names = ['{}-math'.format (displaytype)];
/* 000214 */ 		if (__t__ (environmentname !== null)) {
/* 000215 */ 			(function () {
/* 000215 */ 				var __accu0__ = class_names;
/* 000215 */ 				return __call__ (__accu0__.append, __accu0__, 'env-{}'.format ((function () {
/* 000215 */ 					var __accu1__ = environmentname;
/* 000215 */ 					return __call__ (__accu1__.py_replace, __accu1__, '*', '-star');
/* 000215 */ 				}) ()));
/* 000215 */ 			}) ();
/* 000215 */ 		}
/* 000218 */ 		var content_html = (function () {
/* 000218 */ 			var __accu0__ = self;
/* 000218 */ 			return __call__ (__accu0__.htmlescape, __accu0__, __add__ (__add__ (__getitem__ (delimiters, 0), (function () {
/* 000218 */ 				var __accu1__ = nodelist;
/* 000218 */ 				return __call__ (__accu1__.latex_verbatim, __accu1__);
/* 000218 */ 			}) ()), __getitem__ (delimiters, 1)));
/* 000218 */ 		}) ();
/* 000221 */ 		var attrs = dict ({});
/* 000222 */ 		if (__t__ (target_id !== null)) {
/* 000223 */ 			__setitem__ (attrs, 'id', target_id);
/* 000223 */ 		}
/* 000225 */ 		if (__t__ (__eq__ (displaytype, 'display'))) {
/* 000229 */ 			return (function () {
/* 000229 */ 				var __accu0__ = self;
/* 000229 */ 				return __call__ (__accu0__.wrap_in_tag, __accu0__, 'span', content_html, __kwargtrans__ ({class_names: class_names, attrs: attrs}));
/* 000229 */ 			}) ();
/* 000229 */ 		}
/* 000236 */ 		return (function () {
/* 000236 */ 			var __accu0__ = self;
/* 000236 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'span', content_html, __kwargtrans__ ({class_names: class_names, attrs: attrs}));
/* 000236 */ 		}) ();
/* 000236 */ 	});},
/* 000243 */ 	get render_text_format () {return __get__ (this, function (self, text_formats, nodelist, render_context) {
/* 000243 */ 		if (arguments.length) {
/* 000243 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000243 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000243 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000243 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000243 */ 					switch (__attrib0__) {
/* 000243 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000243 */ 						case 'text_formats': var text_formats = __allkwargs0__ [__attrib0__]; break;
/* 000243 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000243 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000243 */ 					}
/* 000243 */ 				}
/* 000243 */ 			}
/* 000243 */ 		}
/* 000243 */ 		else {
/* 000243 */ 		}
/* 000247 */ 		var content = (function () {
/* 000247 */ 			var __accu0__ = self;
/* 000247 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, nodelist, render_context, __kwargtrans__ ({is_block_level: false}));
/* 000247 */ 		}) ();
/* 000253 */ 		return (function () {
/* 000253 */ 			var __accu0__ = self;
/* 000253 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'span', content, __kwargtrans__ ({class_names: text_formats}));
/* 000253 */ 		}) ();
/* 000253 */ 	});},
/* 000259 */ 	get render_semantic_block () {return __get__ (this, function (self, content, role) {
/* 000259 */ 		var annotations = null;
/* 000259 */ 		var target_id = null;
/* 000259 */ 		if (arguments.length) {
/* 000259 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000259 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000259 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000259 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000259 */ 					switch (__attrib0__) {
/* 000259 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000259 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000259 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000259 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000259 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000259 */ 					}
/* 000259 */ 				}
/* 000259 */ 			}
/* 000259 */ 		}
/* 000259 */ 		else {
/* 000259 */ 		}
/* 000260 */ 		var attrs = dict ({});
/* 000261 */ 		if (__t__ (target_id !== null)) {
/* 000262 */ 			__setitem__ (attrs, 'id', target_id);
/* 000262 */ 		}
/* 000263 */ 		if (__t__ (__in__ (role, tuple (['section', 'main', 'article'])))) {
/* 000264 */ 			return (function () {
/* 000264 */ 				var __accu0__ = self;
/* 000264 */ 				return __call__ (__accu0__.wrap_in_tag, __accu0__, role, content, __kwargtrans__ ({attrs: attrs, class_names: annotations}));
/* 000264 */ 			}) ();
/* 000264 */ 		}
/* 000270 */ 		return (function () {
/* 000270 */ 			var __accu0__ = self;
/* 000270 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'div', content, __kwargtrans__ ({attrs: attrs, class_names: __add__ ([role], (__t__ (annotations) ? annotations : []))}));
/* 000270 */ 		}) ();
/* 000270 */ 	});},
/* 000278 */ 	get render_enumeration () {return __get__ (this, function (self, iter_items_nodelists, counter_formatter, render_context) {
/* 000278 */ 		var target_id_generator = null;
/* 000278 */ 		var annotations = null;
/* 000278 */ 		var nested_depth = null;
/* 000278 */ 		if (arguments.length) {
/* 000278 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000278 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000278 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000278 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000278 */ 					switch (__attrib0__) {
/* 000278 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000278 */ 						case 'iter_items_nodelists': var iter_items_nodelists = __allkwargs0__ [__attrib0__]; break;
/* 000278 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000278 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000278 */ 						case 'target_id_generator': var target_id_generator = __allkwargs0__ [__attrib0__]; break;
/* 000278 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000278 */ 						case 'nested_depth': var nested_depth = __allkwargs0__ [__attrib0__]; break;
/* 000278 */ 					}
/* 000278 */ 				}
/* 000278 */ 			}
/* 000278 */ 		}
/* 000278 */ 		else {
/* 000278 */ 		}
/* 000290 */ 		var s_items = [];
/* 000292 */ 		var __iterable0__ = __call__ (enumerate, null, iter_items_nodelists);
/* 000292 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000292 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000292 */ 			var j = __left0__ [0];
/* 000292 */ 			var item_content_nodelist = __left0__ [1];
/* 000294 */ 			var use_block_level = true;
/* 000295 */ 			if (__t__ (item_content_nodelist.parsing_state.is_block_level === false)) {
/* 000298 */ 				var use_block_level = false;
/* 000298 */ 			}
/* 000300 */ 			// pass;
/* 000304 */ 			// pass;
/* 000308 */ 			var item_content = (function () {
/* 000308 */ 				var __accu0__ = self;
/* 000308 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, item_content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: use_block_level}));
/* 000308 */ 			}) ();
/* 000314 */ 			var enumno = __add__ (1, j);
/* 000316 */ 			var tag_nodelist = __call__ (counter_formatter, null, enumno);
/* 000317 */ 			if (__t__ (__call__ (isinstance, null, tag_nodelist, str))) {
/* 000318 */ 				var tag_content = (function () {
/* 000318 */ 					var __accu0__ = self;
/* 000318 */ 					return __call__ (__accu0__.render_value, __accu0__, tag_nodelist);
/* 000318 */ 				}) ();
/* 000318 */ 			}
/* 000319 */ 			else {
/* 000320 */ 				var tag_content = (function () {
/* 000320 */ 					var __accu0__ = self;
/* 000320 */ 					return __call__ (__accu0__.render_nodelist, __accu0__, tag_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000320 */ 				}) ();
/* 000320 */ 			}
/* 000326 */ 			var dtattrs = dict ({});
/* 000327 */ 			if (__t__ (target_id_generator !== null)) {
/* 000328 */ 				__setitem__ (dtattrs, 'id', __call__ (target_id_generator, null, enumno));
/* 000328 */ 			}
/* 000330 */ 			(function () {
/* 000330 */ 				var __accu0__ = s_items;
/* 000331 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000331 */ 					var __accu1__ = self;
/* 000332 */ 					return __call__ (__accu1__.render_join, __accu1__, [(function () {
/* 000332 */ 						var __accu2__ = self;
/* 000332 */ 						return __call__ (__accu2__.wrap_in_tag, __accu2__, 'dt', tag_content, __kwargtrans__ ({attrs: dtattrs}));
/* 000337 */ 					}) (), (function () {
/* 000337 */ 						var __accu2__ = self;
/* 000337 */ 						return __call__ (__accu2__.wrap_in_tag, __accu2__, 'dd', item_content);
/* 000337 */ 					}) ()]);
/* 000337 */ 				}) ());
/* 000337 */ 			}) ();
/* 000337 */ 		}
/* 000344 */ 		return (function () {
/* 000344 */ 			var __accu0__ = self;
/* 000346 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'dl', (function () {
/* 000346 */ 				var __accu1__ = self;
/* 000346 */ 				return __call__ (__accu1__.render_join, __accu1__, s_items);
/* 000346 */ 			}) (), __kwargtrans__ ({class_names: __add__ (['enumeration'], (__t__ (annotations) ? annotations : []))}));
/* 000346 */ 		}) ();
/* 000346 */ 	});},
/* 000351 */ 	get render_heading () {return __get__ (this, function (self, heading_nodelist, render_context) {
/* 000351 */ 		var heading_level = 1;
/* 000351 */ 		var target_id = null;
/* 000351 */ 		var inline_heading = false;
/* 000351 */ 		var annotations = null;
/* 000351 */ 		if (arguments.length) {
/* 000351 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000351 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000351 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000351 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000351 */ 					switch (__attrib0__) {
/* 000351 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000351 */ 						case 'heading_nodelist': var heading_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000351 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000351 */ 						case 'heading_level': var heading_level = __allkwargs0__ [__attrib0__]; break;
/* 000351 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000351 */ 						case 'inline_heading': var inline_heading = __allkwargs0__ [__attrib0__]; break;
/* 000351 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000351 */ 					}
/* 000351 */ 				}
/* 000351 */ 			}
/* 000351 */ 		}
/* 000351 */ 		else {
/* 000351 */ 		}
/* 000355 */ 		if (__t__ (!__in__ (heading_level, self.heading_tags_by_level))) {
/* 000357 */ 			var __except0__ = __call__ (ValueError, null, 'Bad heading_level={}, expected one of {}'.format (heading_level, __call__ (list, null, (function () {
/* 000357 */ 				var __accu0__ = self.heading_tags_by_level;
/* 000357 */ 				return __call__ (__accu0__.py_keys, __accu0__);
/* 000357 */ 			}) ())));
/* 000357 */ 			__except0__.__cause__ = null;
/* 000357 */ 			throw __except0__;
/* 000357 */ 		}
/* 000359 */ 		var annot = (__t__ (annotations) ? __call__ (list, null, annotations) : []);
/* 000360 */ 		(function () {
/* 000360 */ 			var __accu0__ = annot;
/* 000360 */ 			return __call__ (__accu0__.append, __accu0__, 'heading-level-{}'.format (heading_level));
/* 000360 */ 		}) ();
/* 000361 */ 		if (__t__ (inline_heading)) {
/* 000362 */ 			(function () {
/* 000362 */ 				var __accu0__ = annot;
/* 000362 */ 				return __call__ (__accu0__.append, __accu0__, 'heading-inline');
/* 000362 */ 			}) ();
/* 000362 */ 		}
/* 000364 */ 		var attrs = dict ({});
/* 000365 */ 		if (__t__ (target_id !== null)) {
/* 000366 */ 			__setitem__ (attrs, 'id', target_id);
/* 000366 */ 		}
/* 000368 */ 		var content = (function () {
/* 000368 */ 			var __accu0__ = self;
/* 000370 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, __getitem__ (self.heading_tags_by_level, heading_level), (function () {
/* 000370 */ 				var __accu1__ = self;
/* 000370 */ 				return __call__ (__accu1__.render_inline_content, __accu1__, heading_nodelist, render_context);
/* 000370 */ 			}) (), __kwargtrans__ ({class_names: annot, attrs: attrs}));
/* 000370 */ 		}) ();
/* 000374 */ 		if (__t__ (__t__ (inline_heading) && self.inline_heading_add_space)) {
/* 000375 */ 			var content = __call__ (__iadd__, null, content, ' ');
/* 000375 */ 		}
/* 000376 */ 		// pass;
/* 000380 */ 		return content;
/* 000380 */ 	});},
/* 000382 */ 	get render_link () {return __get__ (this, function (self, ref_type, href, display_nodelist, render_context, annotations) {
/* 000382 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000382 */ 			var annotations = null;
/* 000382 */ 		};
/* 000382 */ 		if (arguments.length) {
/* 000382 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000382 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000382 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000382 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000382 */ 					switch (__attrib0__) {
/* 000382 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000382 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000382 */ 						case 'href': var href = __allkwargs0__ [__attrib0__]; break;
/* 000382 */ 						case 'display_nodelist': var display_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000382 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000382 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000382 */ 					}
/* 000382 */ 				}
/* 000382 */ 			}
/* 000382 */ 		}
/* 000382 */ 		else {
/* 000382 */ 		}
/* 000383 */ 		var display_content = (function () {
/* 000383 */ 			var __accu0__ = self;
/* 000383 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, display_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000383 */ 		}) ();
/* 000388 */ 		return (function () {
/* 000388 */ 			var __accu0__ = self;
/* 000388 */ 			return __call__ (__accu0__.wrap_in_link, __accu0__, display_content, href, __kwargtrans__ ({class_names: __add__ (['href-{}'.format (ref_type)], (__t__ (annotations) ? annotations : []))}));
/* 000388 */ 		}) ();
/* 000388 */ 	});},
/* 000395 */ 	get render_delayed_marker () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000395 */ 		if (arguments.length) {
/* 000395 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000395 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000395 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000395 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000395 */ 					switch (__attrib0__) {
/* 000395 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000395 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000395 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000395 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000395 */ 					}
/* 000395 */ 				}
/* 000395 */ 			}
/* 000395 */ 		}
/* 000395 */ 		else {
/* 000395 */ 		}
/* 000396 */ 		return '<LLM:DLYD:{}/>'.format (delayed_key);
/* 000396 */ 	});},
/* 000398 */ 	get render_delayed_dummy_placeholder () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000398 */ 		if (arguments.length) {
/* 000398 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000398 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000398 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000398 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000398 */ 					switch (__attrib0__) {
/* 000398 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000398 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000398 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000398 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000398 */ 					}
/* 000398 */ 				}
/* 000398 */ 			}
/* 000398 */ 		}
/* 000398 */ 		else {
/* 000398 */ 		}
/* 000399 */ 		return '<!-- delayed:{} -->'.format (delayed_key);
/* 000399 */ 	});},
/* 000401 */ 	get replace_delayed_markers_with_final_values () {return __get__ (this, function (self, content, delayed_values) {
/* 000401 */ 		if (arguments.length) {
/* 000401 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000401 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000401 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000401 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000401 */ 					switch (__attrib0__) {
/* 000401 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000401 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000401 */ 						case 'delayed_values': var delayed_values = __allkwargs0__ [__attrib0__]; break;
/* 000401 */ 					}
/* 000401 */ 				}
/* 000401 */ 			}
/* 000401 */ 		}
/* 000401 */ 		else {
/* 000401 */ 		}
/* 000402 */ 		return (function () {
/* 000402 */ 			var __accu0__ = _rx_delayed_markers;
/* 000402 */ 			return __call__ (__accu0__.sub, __accu0__, (function __lambda__ (m) {
/* 000402 */ 				if (arguments.length) {
/* 000402 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000402 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000402 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000402 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000402 */ 							switch (__attrib0__) {
/* 000402 */ 								case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000402 */ 							}
/* 000402 */ 						}
/* 000402 */ 					}
/* 000402 */ 				}
/* 000402 */ 				else {
/* 000402 */ 				}
/* 000403 */ 				return __getitem__ (delayed_values, __call__ (int, null, (function () {
/* 000403 */ 					var __accu1__ = m;
/* 000403 */ 					return __call__ (__accu1__.group, __accu1__, 'key');
/* 000403 */ 				}) ()));
/* 000403 */ 			}), content);
/* 000403 */ 		}) ();
/* 000403 */ 	});},
/* 000410 */ 	get render_float () {return __get__ (this, function (self, float_instance, render_context) {
/* 000410 */ 		if (arguments.length) {
/* 000410 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000410 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000410 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000410 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000410 */ 					switch (__attrib0__) {
/* 000410 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000410 */ 						case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000410 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000410 */ 					}
/* 000410 */ 				}
/* 000410 */ 			}
/* 000410 */ 		}
/* 000410 */ 		else {
/* 000410 */ 		}
/* 000413 */ 		var figattrs = dict ({});
/* 000415 */ 		if (__t__ (float_instance.target_id !== null)) {
/* 000416 */ 			__setitem__ (figattrs, 'id', float_instance.target_id);
/* 000416 */ 		}
/* 000418 */ 		var full_figcaption_rendered_list = [];
/* 000419 */ 		if (__t__ (float_instance.number !== null)) {
/* 000421 */ 			(function () {
/* 000421 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000422 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000422 */ 					var __accu1__ = self;
/* 000424 */ 					return __call__ (__accu1__.wrap_in_tag, __accu1__, 'span', (function () {
/* 000424 */ 						var __accu2__ = self;
/* 000425 */ 						return __call__ (__accu2__.render_join, __accu2__, [(function () {
/* 000425 */ 							var __accu3__ = self;
/* 000425 */ 							return __call__ (__accu3__.render_value, __accu3__, float_instance.float_type_info.float_caption_name);
/* 000429 */ 						}) (), '&nbsp;', (function () {
/* 000429 */ 							var __accu3__ = self;
/* 000429 */ 							return __call__ (__accu3__.render_nodelist, __accu3__, float_instance.formatted_counter_value_llm.nodes, __kwargtrans__ ({render_context: render_context}));
/* 000429 */ 						}) ()]);
/* 000429 */ 					}) (), __kwargtrans__ ({class_names: ['float-number']}));
/* 000429 */ 				}) ());
/* 000429 */ 			}) ();
/* 000429 */ 		}
/* 000437 */ 		else if (__t__ (float_instance.caption_nodelist)) {
/* 000440 */ 			(function () {
/* 000440 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000441 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000441 */ 					var __accu1__ = self;
/* 000443 */ 					return __call__ (__accu1__.wrap_in_tag, __accu1__, 'span', (function () {
/* 000443 */ 						var __accu2__ = self;
/* 000444 */ 						return __call__ (__accu2__.render_join, __accu2__, [(function () {
/* 000444 */ 							var __accu3__ = self;
/* 000444 */ 							return __call__ (__accu3__.render_value, __accu3__, float_instance.float_type_info.float_caption_name);
/* 000444 */ 						}) ()]);
/* 000444 */ 					}) (), __kwargtrans__ ({class_names: ['float-no-number']}));
/* 000444 */ 				}) ());
/* 000444 */ 			}) ();
/* 000444 */ 		}
/* 000447 */ 		else {
/* 000451 */ 			// pass;
/* 000451 */ 		}
/* 000453 */ 		if (__t__ (float_instance.caption_nodelist)) {
/* 000457 */ 			(function () {
/* 000457 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000457 */ 				return __call__ (__accu0__.append, __accu0__, ': ');
/* 000457 */ 			}) ();
/* 000460 */ 			(function () {
/* 000460 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000461 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000461 */ 					var __accu1__ = self;
/* 000461 */ 					return __call__ (__accu1__.render_nodelist, __accu1__, float_instance.caption_nodelist, __kwargtrans__ ({render_context: render_context}));
/* 000461 */ 				}) ());
/* 000461 */ 			}) ();
/* 000461 */ 		}
/* 000467 */ 		var rendered_float_caption = null;
/* 000468 */ 		if (__t__ (full_figcaption_rendered_list)) {
/* 000469 */ 			var rendered_float_caption = (function () {
/* 000469 */ 				var __accu0__ = self;
/* 000471 */ 				return __call__ (__accu0__.wrap_in_tag, __accu0__, 'figcaption', (function () {
/* 000471 */ 					var __accu1__ = self;
/* 000473 */ 					return __call__ (__accu1__.wrap_in_tag, __accu1__, 'span', (function () {
/* 000473 */ 						var __accu2__ = self;
/* 000473 */ 						return __call__ (__accu2__.render_join, __accu2__, full_figcaption_rendered_list);
/* 000473 */ 					}) ());
/* 000473 */ 				}) (), __kwargtrans__ ({class_names: ['float-caption-content']}));
/* 000473 */ 			}) ();
/* 000473 */ 		}
/* 000478 */ 		var float_content_block_content = (function () {
/* 000478 */ 			var __accu0__ = self;
/* 000478 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, float_instance.content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: true}));
/* 000478 */ 		}) ();
/* 000483 */ 		var float_content_block = (function () {
/* 000483 */ 			var __accu0__ = self;
/* 000483 */ 			return __call__ (__accu0__.render_semantic_block, __accu0__, float_content_block_content, 'float-contents');
/* 000483 */ 		}) ();
/* 000488 */ 		if (__t__ (rendered_float_caption !== null)) {
/* 000489 */ 			var float_content_with_caption = (function () {
/* 000489 */ 				var __accu0__ = self;
/* 000489 */ 				return __call__ (__accu0__.render_join_blocks, __accu0__, [float_content_block, rendered_float_caption]);
/* 000489 */ 			}) ();
/* 000489 */ 		}
/* 000492 */ 		else {
/* 000494 */ 			var float_content_with_caption = float_content_block;
/* 000494 */ 		}
/* 000496 */ 		var full_figure = (function () {
/* 000496 */ 			var __accu0__ = self;
/* 000496 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'figure', float_content_with_caption, __kwargtrans__ ({attrs: figattrs, class_names: ['float', 'float-{}'.format (float_instance.float_type)]}));
/* 000496 */ 		}) ();
/* 000503 */ 		return full_figure;
/* 000503 */ 	});},
/* 000506 */ 	graphics_raster_magnification: 1,
/* 000507 */ 	graphics_vector_magnification: 1,
/* 000509 */ 	get render_graphics_block () {return __get__ (this, function (self, graphics_resource) {
/* 000509 */ 		if (arguments.length) {
/* 000509 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000509 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000509 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000509 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000509 */ 					switch (__attrib0__) {
/* 000509 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000509 */ 						case 'graphics_resource': var graphics_resource = __allkwargs0__ [__attrib0__]; break;
/* 000509 */ 					}
/* 000509 */ 				}
/* 000509 */ 			}
/* 000509 */ 		}
/* 000509 */ 		else {
/* 000509 */ 		}
/* 000511 */ 		var imgattrs = dict ({});
/* 000513 */ 		var styparts = [];
/* 000514 */ 		if (__t__ (graphics_resource.physical_dimensions !== null)) {
/* 000516 */ 			var __left0__ = graphics_resource.physical_dimensions;
/* 000516 */ 			var width_pt = __left0__ [0];
/* 000516 */ 			var height_pt = __left0__ [1];
/* 000518 */ 			if (__t__ (__eq__ (graphics_resource.graphics_type, 'raster'))) {
/* 000519 */ 				if (__t__ (width_pt !== null)) {
/* 000520 */ 					var width_pt = __call__ (__imul__, null, width_pt, self.graphics_raster_magnification);
/* 000520 */ 				}
/* 000521 */ 				if (__t__ (height_pt !== null)) {
/* 000522 */ 					var height_pt = __call__ (__imul__, null, height_pt, self.graphics_raster_magnification);
/* 000522 */ 				}
/* 000522 */ 			}
/* 000523 */ 			else if (__t__ (__eq__ (graphics_resource.graphics_type, 'vector'))) {
/* 000524 */ 				if (__t__ (width_pt !== null)) {
/* 000525 */ 					var width_pt = __call__ (__imul__, null, width_pt, self.graphics_vector_magnification);
/* 000525 */ 				}
/* 000526 */ 				if (__t__ (height_pt !== null)) {
/* 000527 */ 					var height_pt = __call__ (__imul__, null, height_pt, self.graphics_vector_magnification);
/* 000527 */ 				}
/* 000527 */ 			}
/* 000529 */ 			if (__t__ (width_pt !== null)) {
/* 000530 */ 				(function () {
/* 000530 */ 					var __accu0__ = styparts;
/* 000530 */ 					return __call__ (__accu0__.append, __accu0__, 'width:{}pt'.format (width_pt));
/* 000530 */ 				}) ();
/* 000530 */ 			}
/* 000531 */ 			if (__t__ (height_pt !== null)) {
/* 000532 */ 				(function () {
/* 000532 */ 					var __accu0__ = styparts;
/* 000532 */ 					return __call__ (__accu0__.append, __accu0__, 'height:{}pt'.format (height_pt));
/* 000532 */ 				}) ();
/* 000532 */ 			}
/* 000532 */ 		}
/* 000534 */ 		if (__t__ (styparts)) {
/* 000535 */ 			__setitem__ (imgattrs, 'style', (function () {
/* 000535 */ 				var __accu0__ = ';';
/* 000535 */ 				return __call__ (__accu0__.join, __accu0__, styparts);
/* 000535 */ 			}) ());
/* 000535 */ 		}
/* 000537 */ 		var src_url = graphics_resource.src_url;
/* 000538 */ 		__setitem__ (imgattrs, 'src', src_url);
/* 000540 */ 		if (__t__ (graphics_resource.srcset)) {
/* 000541 */ 			__setitem__ (imgattrs, 'srcset', graphics_resource.srcset);
/* 000541 */ 		}
/* 000544 */ 		return (function () {
/* 000544 */ 			var __accu0__ = self;
/* 000544 */ 			return __call__ (__accu0__.generate_open_tag, __accu0__, 'img', __kwargtrans__ ({attrs: imgattrs}));
/* 000544 */ 		}) ();
/* 000544 */ 	});}
/* 000544 */ });
/* 000550 */ export var _rx_delayed_markers = (function () {
/* 000550 */ 	var __accu0__ = re;
/* 000550 */ 	return __call__ (__accu0__.compile, __accu0__, '<LLM:DLYD:(?P<key>\\d+)\\s*/>');
/* 000550 */ }) ();
/* 000006 */ 
//# sourceMappingURL=llm.fragmentrenderer.html.map