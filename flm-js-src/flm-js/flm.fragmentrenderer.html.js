/* 000001 */ // Transcrypt'ed from Python, 2023-10-16 22:13:09
/* 000006 */ var html = {};
/* 000006 */ var logging = {};
/* 000006 */ var re = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000012 */ import {FragmentRenderer} from './flm.fragmentrenderer._base.js';
/* 000009 */ import * as __module_logging__ from './logging.js';
/* 000009 */ __nest__ (logging, '', __module_logging__);
/* 000007 */ import * as __module_re__ from './re.js';
/* 000007 */ __nest__ (re, '', __module_re__);
/* 000006 */ import * as __module_html__ from './html.js';
/* 000006 */ __nest__ (html, '', __module_html__);
/* 000006 */ export {FragmentRenderer};
/* 000001 */ var __name__ = 'flm.fragmentrenderer.html';
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
/* 000024 */ 	supports_delayed_render_markers: true,
/* 000031 */ 	use_link_target_blank: false,
/* 000044 */ 	html_blocks_joiner: '\n',
/* 000063 */ 	heading_tags_by_level: dict ({1: 'h1', 2: 'h2', 3: 'h3', 4: 'span', 5: 'span', 6: 'span', 'theorem': 'span'}),
/* 000078 */ 	inline_heading_add_space: true,
/* 000085 */ 	aggressively_escape_html_attributes: false,
/* 000103 */ 	render_nothing_as_comment_with_annotations: true,
/* 000105 */ 	render_links_with_empty_href: false,
/* 000107 */ 	use_mathjax: true,
/* 000109 */ 	use_standard_math_delimiters: true,
/* 000117 */ 	get htmlescape () {return __get__ (this, function (self, value) {
/* 000117 */ 		if (arguments.length) {
/* 000117 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000117 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000117 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000117 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000117 */ 					switch (__attrib0__) {
/* 000117 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000117 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000117 */ 					}
/* 000117 */ 				}
/* 000117 */ 			}
/* 000117 */ 		}
/* 000117 */ 		else {
/* 000117 */ 		}
/* 000118 */ 		var esc = (function () {
/* 000118 */ 			var __accu0__ = html;
/* 000118 */ 			return __call__ (__accu0__.escape, __accu0__, value);
/* 000118 */ 		}) ();
/* 000120 */ 		var esc = (function () {
/* 000120 */ 			var __accu0__ = (function () {
/* 000120 */ 				var __accu1__ = (function () {
/* 000120 */ 					var __accu2__ = (function () {
/* 000120 */ 						var __accu3__ = (function () {
/* 000120 */ 							var __accu4__ = (function () {
/* 000120 */ 								var __accu5__ = (function () {
/* 000120 */ 									var __accu6__ = esc;
/* 000120 */ 									return __call__ (__accu6__.py_replace, __accu6__, '\xa0', '&nbsp;');
/* 000120 */ 								}) ();
/* 000120 */ 								return __call__ (__accu5__.py_replace, __accu5__, '\u200a', '&hairsp;');
/* 000120 */ 							}) ();
/* 000121 */ 							return __call__ (__accu4__.py_replace, __accu4__, '\u2009', '&thinsp;');
/* 000121 */ 						}) ();
/* 000122 */ 						return __call__ (__accu3__.py_replace, __accu3__, '\u2008', '&puncsp;');
/* 000122 */ 					}) ();
/* 000123 */ 					return __call__ (__accu2__.py_replace, __accu2__, '\u2002', '&ensp;');
/* 000123 */ 				}) ();
/* 000124 */ 				return __call__ (__accu1__.py_replace, __accu1__, '\u2003', '&emsp;');
/* 000124 */ 			}) ();
/* 000125 */ 			return __call__ (__accu0__.py_replace, __accu0__, '\u2007', '&numsp;');
/* 000125 */ 		}) ();
/* 000128 */ 		return esc;
/* 000128 */ 	});},
/* 000130 */ 	get htmlescape_double_quoted_attribute_value () {return __get__ (this, function (self, value) {
/* 000130 */ 		if (arguments.length) {
/* 000130 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000130 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000130 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000130 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000130 */ 					switch (__attrib0__) {
/* 000130 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000130 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000130 */ 					}
/* 000130 */ 				}
/* 000130 */ 			}
/* 000130 */ 		}
/* 000130 */ 		else {
/* 000130 */ 		}
/* 000132 */ 		if (__t__ (self.aggressively_escape_html_attributes)) {
/* 000133 */ 			return (function () {
/* 000133 */ 				var __accu0__ = self;
/* 000133 */ 				return __call__ (__accu0__.htmlescape, __accu0__, value);
/* 000133 */ 			}) ();
/* 000133 */ 		}
/* 000143 */ 		var value = (function () {
/* 000143 */ 			var __accu0__ = _rx_html_entity;
/* 000143 */ 			return __call__ (__accu0__.sub, __accu0__, (function __lambda__ (m) {
/* 000143 */ 				if (arguments.length) {
/* 000143 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000143 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000143 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000143 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000143 */ 							switch (__attrib0__) {
/* 000143 */ 								case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000143 */ 							}
/* 000143 */ 						}
/* 000143 */ 					}
/* 000143 */ 				}
/* 000143 */ 				else {
/* 000143 */ 				}
/* 000143 */ 				return __add__ (__add__ ('&amp;', (function () {
/* 000143 */ 					var __accu1__ = m;
/* 000143 */ 					return __call__ (__accu1__.group, __accu1__, 1);
/* 000143 */ 				}) ()), ';');
/* 000143 */ 			}), value);
/* 000143 */ 		}) ();
/* 000145 */ 		var value = (function () {
/* 000145 */ 			var __accu0__ = value;
/* 000145 */ 			return __call__ (__accu0__.py_replace, __accu0__, '"', '&quot;');
/* 000145 */ 		}) ();
/* 000146 */ 		return value;
/* 000146 */ 	});},
/* 000148 */ 	get generate_open_tag () {return __get__ (this, function (self, tagname) {
/* 000148 */ 		var attrs = null;
/* 000148 */ 		var class_names = null;
/* 000148 */ 		var self_close_tag = false;
/* 000148 */ 		if (arguments.length) {
/* 000148 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000148 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000148 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000148 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000148 */ 					switch (__attrib0__) {
/* 000148 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000148 */ 						case 'tagname': var tagname = __allkwargs0__ [__attrib0__]; break;
/* 000148 */ 						case 'attrs': var attrs = __allkwargs0__ [__attrib0__]; break;
/* 000148 */ 						case 'class_names': var class_names = __allkwargs0__ [__attrib0__]; break;
/* 000148 */ 						case 'self_close_tag': var self_close_tag = __allkwargs0__ [__attrib0__]; break;
/* 000148 */ 					}
/* 000148 */ 				}
/* 000148 */ 			}
/* 000148 */ 		}
/* 000148 */ 		else {
/* 000148 */ 		}
/* 000149 */ 		var s = '<{}'.format (tagname);
/* 000150 */ 		if (__t__ (!__t__ ((attrs)))) {
/* 000151 */ 			var attrs = dict ({});
/* 000151 */ 		}
/* 000152 */ 		var attrs = __call__ (dict, null, attrs);
/* 000153 */ 		if (__t__ (__in__ ('class', attrs))) {
/* 000154 */ 			var __except0__ = __call__ (ValueError, null, "generate_open_tag(): set HTML 'class' attribute with class_names=, not with attrs=");
/* 000154 */ 			__except0__.__cause__ = null;
/* 000154 */ 			throw __except0__;
/* 000154 */ 		}
/* 000158 */ 		if (__t__ (class_names)) {
/* 000159 */ 			__setitem__ (attrs, 'class', (function () {
/* 000159 */ 				var __accu0__ = ' ';
/* 000159 */ 				return __call__ (__accu0__.join, __accu0__, class_names);
/* 000159 */ 			}) ());
/* 000159 */ 		}
/* 000160 */ 		if (__t__ (attrs)) {
/* 000161 */ 			var __iterable0__ = (function () {
/* 000161 */ 				var __accu0__ = attrs;
/* 000161 */ 				return __call__ (__accu0__.py_items, __accu0__);
/* 000161 */ 			}) ();
/* 000161 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000161 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000161 */ 				var aname = __left0__ [0];
/* 000161 */ 				var aval = __left0__ [1];
/* 000162 */ 				var s = __call__ (__iadd__, null, s, ' {}="{}"'.format (aname, (function () {
/* 000162 */ 					var __accu0__ = self;
/* 000162 */ 					return __call__ (__accu0__.htmlescape_double_quoted_attribute_value, __accu0__, aval);
/* 000162 */ 				}) ()));
/* 000162 */ 			}
/* 000162 */ 		}
/* 000163 */ 		if (__t__ (self_close_tag)) {
/* 000164 */ 			var s = __call__ (__iadd__, null, s, '/>');
/* 000164 */ 		}
/* 000165 */ 		else {
/* 000166 */ 			var s = __call__ (__iadd__, null, s, '>');
/* 000166 */ 		}
/* 000167 */ 		return s;
/* 000167 */ 	});},
/* 000169 */ 	get wrap_in_tag () {return __get__ (this, function (self, tagname, content_html) {
/* 000169 */ 		var attrs = null;
/* 000169 */ 		var class_names = null;
/* 000169 */ 		if (arguments.length) {
/* 000169 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000169 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000169 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000169 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000169 */ 					switch (__attrib0__) {
/* 000169 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000169 */ 						case 'tagname': var tagname = __allkwargs0__ [__attrib0__]; break;
/* 000169 */ 						case 'content_html': var content_html = __allkwargs0__ [__attrib0__]; break;
/* 000169 */ 						case 'attrs': var attrs = __allkwargs0__ [__attrib0__]; break;
/* 000169 */ 						case 'class_names': var class_names = __allkwargs0__ [__attrib0__]; break;
/* 000169 */ 					}
/* 000169 */ 				}
/* 000169 */ 			}
/* 000169 */ 		}
/* 000169 */ 		else {
/* 000169 */ 		}
/* 000171 */ 		var s = (function () {
/* 000171 */ 			var __accu0__ = self;
/* 000171 */ 			return __call__ (__accu0__.generate_open_tag, __accu0__, tagname, __kwargtrans__ ({attrs: attrs, class_names: class_names}));
/* 000171 */ 		}) ();
/* 000172 */ 		var s = __call__ (__iadd__, null, s, __call__ (str, null, content_html));
/* 000173 */ 		var s = __call__ (__iadd__, null, s, '</{}>'.format (tagname));
/* 000174 */ 		return s;
/* 000174 */ 	});},
/* 000176 */ 	get wrap_in_link () {return __get__ (this, function (self, display_html, target_href) {
/* 000176 */ 		var class_names = null;
/* 000176 */ 		if (arguments.length) {
/* 000176 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000176 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000176 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000176 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000176 */ 					switch (__attrib0__) {
/* 000176 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000176 */ 						case 'display_html': var display_html = __allkwargs0__ [__attrib0__]; break;
/* 000176 */ 						case 'target_href': var target_href = __allkwargs0__ [__attrib0__]; break;
/* 000176 */ 						case 'class_names': var class_names = __allkwargs0__ [__attrib0__]; break;
/* 000176 */ 					}
/* 000176 */ 				}
/* 000176 */ 			}
/* 000176 */ 		}
/* 000176 */ 		else {
/* 000176 */ 		}
/* 000177 */ 		if (__t__ (!__t__ ((target_href)))) {
/* 000178 */ 			var target_href = '#';
/* 000178 */ 		}
/* 000179 */ 		var attrs = dict ({'href': target_href});
/* 000182 */ 		if (__t__ (__call__ (callable, null, self.use_link_target_blank))) {
/* 000183 */ 			if (__t__ ((function () {
/* 000183 */ 				var __accu0__ = self;
/* 000183 */ 				return __call__ (__accu0__.use_link_target_blank, __accu0__, target_href);
/* 000183 */ 			}) ())) {
/* 000184 */ 				__setitem__ (attrs, 'target', '_blank');
/* 000184 */ 			}
/* 000184 */ 		}
/* 000185 */ 		else if (__t__ (__t__ (self.use_link_target_blank) && !__t__ (((function () {
/* 000185 */ 			var __accu0__ = target_href;
/* 000185 */ 			return __call__ (__accu0__.startswith, __accu0__, '#');
/* 000185 */ 		}) ())))) {
/* 000186 */ 			__setitem__ (attrs, 'target', '_blank');
/* 000186 */ 		}
/* 000187 */ 		return (function () {
/* 000187 */ 			var __accu0__ = self;
/* 000187 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'a', display_html, __kwargtrans__ ({attrs: attrs, class_names: class_names}));
/* 000187 */ 		}) ();
/* 000187 */ 	});},
/* 000196 */ 	get render_build_paragraph () {return __get__ (this, function (self, nodelist, render_context) {
/* 000196 */ 		if (arguments.length) {
/* 000196 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000196 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000196 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000196 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000196 */ 					switch (__attrib0__) {
/* 000196 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000196 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000196 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000196 */ 					}
/* 000196 */ 				}
/* 000196 */ 			}
/* 000196 */ 		}
/* 000196 */ 		else {
/* 000196 */ 		}
/* 000199 */ 		return __add__ (__add__ ('<p>', (function () {
/* 000199 */ 			var __accu0__ = self;
/* 000199 */ 			return __call__ (__accu0__.render_inline_content, __accu0__, nodelist, render_context);
/* 000199 */ 		}) ()), '</p>');
/* 000199 */ 	});},
/* 000203 */ 	get render_inline_content () {return __get__ (this, function (self, nodelist, render_context) {
/* 000203 */ 		if (arguments.length) {
/* 000203 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000203 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000203 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000203 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000203 */ 					switch (__attrib0__) {
/* 000203 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000203 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000203 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000203 */ 					}
/* 000203 */ 				}
/* 000203 */ 			}
/* 000203 */ 		}
/* 000203 */ 		else {
/* 000203 */ 		}
/* 000204 */ 		return (function () {
/* 000204 */ 			var __accu0__ = self;
/* 000204 */ 			return __call__ (__accu0__.render_join, __accu0__, (function () {
/* 000204 */ 				var __accu1__ = [];
/* 000205 */ 				var __iterable0__ = nodelist;
/* 000205 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000205 */ 					var n = __getitem__ (__iterable0__, __index0__);
/* 000205 */ 					(function () {
/* 000205 */ 						var __accu2__ = __accu1__;
/* 000205 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000205 */ 							var __accu3__ = self;
/* 000205 */ 							return __call__ (__accu3__.render_node, __accu3__, n, render_context);
/* 000205 */ 						}) ());
/* 000205 */ 					}) ();
/* 000205 */ 				}
/* 000205 */ 				return __accu1__;
/* 000205 */ 			}) (), render_context);
/* 000205 */ 		}) ();
/* 000205 */ 	});},
/* 000209 */ 	get render_join () {return __get__ (this, function (self, content_list, render_context) {
/* 000209 */ 		if (arguments.length) {
/* 000209 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000209 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000209 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000209 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000209 */ 					switch (__attrib0__) {
/* 000209 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000209 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000209 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000209 */ 					}
/* 000209 */ 				}
/* 000209 */ 			}
/* 000209 */ 		}
/* 000209 */ 		else {
/* 000209 */ 		}
/* 000215 */ 		return (function () {
/* 000215 */ 			var __accu0__ = '';
/* 000215 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000215 */ 				var __accu1__ = [];
/* 000215 */ 				var __iterable0__ = content_list;
/* 000215 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000215 */ 					var s = __getitem__ (__iterable0__, __index0__);
/* 000215 */ 					(function () {
/* 000215 */ 						var __accu2__ = __accu1__;
/* 000215 */ 						return __call__ (__accu2__.append, __accu2__, __call__ (str, null, s));
/* 000215 */ 					}) ();
/* 000215 */ 				}
/* 000215 */ 				return __accu1__;
/* 000215 */ 			}) ());
/* 000215 */ 		}) ();
/* 000215 */ 	});},
/* 000217 */ 	get render_join_blocks () {return __get__ (this, function (self, content_list, render_context) {
/* 000217 */ 		if (arguments.length) {
/* 000217 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000217 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000217 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000217 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000217 */ 					switch (__attrib0__) {
/* 000217 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000217 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000217 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000217 */ 					}
/* 000217 */ 				}
/* 000217 */ 			}
/* 000217 */ 		}
/* 000217 */ 		else {
/* 000217 */ 		}
/* 000225 */ 		return (function () {
/* 000225 */ 			var __accu0__ = self.html_blocks_joiner;
/* 000225 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000225 */ 				var __accu1__ = [];
/* 000226 */ 				var __iterable0__ = content_list;
/* 000226 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000226 */ 					var c = __getitem__ (__iterable0__, __index0__);
/* 000226 */ 					if (__t__ (__t__ (c !== null) && __call__ (len, null, c))) {
/* 000226 */ 						(function () {
/* 000226 */ 							var __accu2__ = __accu1__;
/* 000226 */ 							return __call__ (__accu2__.append, __accu2__, c);
/* 000226 */ 						}) ();
/* 000226 */ 					}
/* 000226 */ 				}
/* 000226 */ 				return __accu1__;
/* 000226 */ 			}) ());
/* 000226 */ 		}) ();
/* 000226 */ 	});},
/* 000232 */ 	get render_value () {return __get__ (this, function (self, value, render_context) {
/* 000232 */ 		if (arguments.length) {
/* 000232 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000232 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000232 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000232 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000232 */ 					switch (__attrib0__) {
/* 000232 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000232 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000232 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000232 */ 					}
/* 000232 */ 				}
/* 000232 */ 			}
/* 000232 */ 		}
/* 000232 */ 		else {
/* 000232 */ 		}
/* 000233 */ 		return (function () {
/* 000233 */ 			var __accu0__ = self;
/* 000233 */ 			return __call__ (__accu0__.htmlescape, __accu0__, value);
/* 000233 */ 		}) ();
/* 000233 */ 	});},
/* 000235 */ 	get render_empty_error_placeholder () {return __get__ (this, function (self, debug_str, render_context) {
/* 000235 */ 		if (arguments.length) {
/* 000235 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000235 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000235 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000235 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000235 */ 					switch (__attrib0__) {
/* 000235 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000235 */ 						case 'debug_str': var debug_str = __allkwargs0__ [__attrib0__]; break;
/* 000235 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000235 */ 					}
/* 000235 */ 				}
/* 000235 */ 			}
/* 000235 */ 		}
/* 000235 */ 		else {
/* 000235 */ 		}
/* 000236 */ 		var debug_str_safe = (function () {
/* 000236 */ 			var __accu0__ = debug_str;
/* 000236 */ 			return __call__ (__accu0__.py_replace, __accu0__, '--', '- - ');
/* 000236 */ 		}) ();
/* 000237 */ 		return '<span class="empty-error-placeholder"><!-- {} -->(?)</span>'.format (debug_str_safe);
/* 000237 */ 	});},
/* 000239 */ 	get render_nothing () {return __get__ (this, function (self, render_context, annotations) {
/* 000239 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000239 */ 			var annotations = null;
/* 000239 */ 		};
/* 000239 */ 		if (arguments.length) {
/* 000239 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000239 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000239 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000239 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000239 */ 					switch (__attrib0__) {
/* 000239 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000239 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000239 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000239 */ 					}
/* 000239 */ 				}
/* 000239 */ 			}
/* 000239 */ 		}
/* 000239 */ 		else {
/* 000239 */ 		}
/* 000240 */ 		if (__t__ (!__t__ ((self.render_nothing_as_comment_with_annotations)))) {
/* 000241 */ 			return '';
/* 000241 */ 		}
/* 000242 */ 		if (__t__ (!__t__ ((annotations)))) {
/* 000243 */ 			var annotations = [];
/* 000243 */ 		}
/* 000244 */ 		var annotations = (function () {
/* 000244 */ 			var __accu0__ = [];
/* 000244 */ 			var __iterable0__ = annotations;
/* 000244 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000244 */ 				var a = __getitem__ (__iterable0__, __index0__);
/* 000244 */ 				(function () {
/* 000244 */ 					var __accu1__ = __accu0__;
/* 000244 */ 					return __call__ (__accu1__.append, __accu1__, (function () {
/* 000244 */ 						var __accu2__ = a;
/* 000244 */ 						return __call__ (__accu2__.py_replace, __accu2__, '--', '- - ');
/* 000244 */ 					}) ());
/* 000244 */ 				}) ();
/* 000244 */ 			}
/* 000244 */ 			return __accu0__;
/* 000244 */ 		}) ();
/* 000245 */ 		return (function () {
/* 000245 */ 			var __accu0__ = '<!-- {} -->';
/* 000245 */ 			return __call__ (__accu0__.format, __accu0__, (function () {
/* 000245 */ 				var __accu1__ = ' ';
/* 000245 */ 				return __call__ (__accu1__.join, __accu1__, annotations);
/* 000245 */ 			}) ());
/* 000245 */ 		}) ();
/* 000245 */ 	});},
/* 000247 */ 	verbatim_highlight_spaces: false,
/* 000248 */ 	verbatim_protect_backslashes: true,
/* 000250 */ 	get render_verbatim () {return __get__ (this, function (self, value, render_context) {
/* 000250 */ 		var is_block_level = false;
/* 000250 */ 		var annotations = null;
/* 000250 */ 		var target_id = null;
/* 000250 */ 		if (arguments.length) {
/* 000250 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000250 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000250 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000250 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000250 */ 					switch (__attrib0__) {
/* 000250 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000250 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000250 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000250 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000250 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000250 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000250 */ 					}
/* 000250 */ 				}
/* 000250 */ 			}
/* 000250 */ 		}
/* 000250 */ 		else {
/* 000250 */ 		}
/* 000252 */ 		var attrs = dict ({});
/* 000253 */ 		if (__t__ (target_id !== null)) {
/* 000254 */ 			__setitem__ (attrs, 'id', target_id);
/* 000254 */ 		}
/* 000255 */ 		var escaped = (function () {
/* 000255 */ 			var __accu0__ = self;
/* 000255 */ 			return __call__ (__accu0__.htmlescape, __accu0__, value);
/* 000255 */ 		}) ();
/* 000256 */ 		if (__t__ (self.verbatim_protect_backslashes)) {
/* 000258 */ 			var escaped = (function () {
/* 000258 */ 				var __accu0__ = escaped;
/* 000258 */ 				return __call__ (__accu0__.py_replace, __accu0__, '\\', '<span>\\</span>');
/* 000258 */ 			}) ();
/* 000258 */ 		}
/* 000259 */ 		if (__t__ (self.verbatim_highlight_spaces)) {
/* 000260 */ 			var escaped = (function () {
/* 000260 */ 				var __accu0__ = escaped;
/* 000260 */ 				return __call__ (__accu0__.py_replace, __accu0__, ' ', '<span class="verbatimspace">&nbsp;</span>');
/* 000260 */ 			}) ();
/* 000260 */ 		}
/* 000263 */ 		var tag = 'span';
/* 000264 */ 		var __iterable0__ = annotations;
/* 000264 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000264 */ 			var annotation = __getitem__ (__iterable0__, __index0__);
/* 000265 */ 			if (__t__ (__in__ (annotation, tuple (['verbatimcode-environment'])))) {
/* 000267 */ 				var tag = 'div';
/* 000267 */ 			}
/* 000267 */ 		}
/* 000268 */ 		return (function () {
/* 000268 */ 			var __accu0__ = self;
/* 000268 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, tag, escaped, __kwargtrans__ ({class_names: (__t__ (annotations) ? annotations : ['verbatimtext']), attrs: attrs}));
/* 000268 */ 		}) ();
/* 000268 */ 	});},
/* 000275 */ 	get render_math_content () {return __get__ (this, function (self, delimiters, nodelist, render_context, displaytype, environmentname, target_id) {
/* 000275 */ 		if (typeof environmentname == 'undefined' || (environmentname != null && environmentname.hasOwnProperty ("__kwargtrans__"))) {;
/* 000275 */ 			var environmentname = null;
/* 000275 */ 		};
/* 000275 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000275 */ 			var target_id = null;
/* 000275 */ 		};
/* 000275 */ 		if (arguments.length) {
/* 000275 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000275 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000275 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000275 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000275 */ 					switch (__attrib0__) {
/* 000275 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000275 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000275 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000275 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000275 */ 						case 'displaytype': var displaytype = __allkwargs0__ [__attrib0__]; break;
/* 000275 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000275 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000275 */ 					}
/* 000275 */ 				}
/* 000275 */ 			}
/* 000275 */ 		}
/* 000275 */ 		else {
/* 000275 */ 		}
/* 000283 */ 		if (__t__ (!__t__ ((self.use_mathjax)))) {
/* 000284 */ 			(function () {
/* 000284 */ 				var __accu0__ = logger;
/* 000284 */ 				return __call__ (__accu0__.warning, __accu0__, 'called HtmlFragmentRenderer.render_math_content() but self.use_mathjax is not set. Your math will probably not render correctly.');
/* 000284 */ 			}) ();
/* 000284 */ 		}
/* 000290 */ 		var use_delims = tuple ([__getitem__ (delimiters, 0), __getitem__ (delimiters, 1)]);
/* 000291 */ 		if (__t__ (self.use_standard_math_delimiters)) {
/* 000292 */ 			if (__t__ (__eq__ (displaytype, 'inline'))) {
/* 000293 */ 				var use_delims = tuple (['\\(', '\\)']);
/* 000293 */ 			}
/* 000294 */ 			else if (__t__ (__eq__ (displaytype, 'display'))) {
/* 000295 */ 				if (__t__ (environmentname)) {
/* 000296 */ 					var use_delims = tuple (['\\begin{}{}{}'.format ('{', environmentname, '}'), '\\end{}{}{}'.format ('{', environmentname, '}')]);
/* 000296 */ 				}
/* 000299 */ 				else {
/* 000301 */ 					var use_delims = tuple (['\\[', '\\]']);
/* 000301 */ 				}
/* 000301 */ 			}
/* 000302 */ 			else {
/* 000303 */ 				var __except0__ = __call__ (ValueError, null, 'Invalid displaytype: {}'.format (__call__ (repr, null, displaytype)));
/* 000303 */ 				__except0__.__cause__ = null;
/* 000303 */ 				throw __except0__;
/* 000303 */ 			}
/* 000303 */ 		}
/* 000305 */ 		var class_names = ['{}-math'.format (displaytype)];
/* 000306 */ 		if (__t__ (environmentname !== null)) {
/* 000307 */ 			(function () {
/* 000307 */ 				var __accu0__ = class_names;
/* 000307 */ 				return __call__ (__accu0__.append, __accu0__, 'env-{}'.format ((function () {
/* 000307 */ 					var __accu1__ = environmentname;
/* 000307 */ 					return __call__ (__accu1__.py_replace, __accu1__, '*', '-star');
/* 000307 */ 				}) ()));
/* 000307 */ 			}) ();
/* 000307 */ 		}
/* 000310 */ 		var content_html = (function () {
/* 000310 */ 			var __accu0__ = self;
/* 000310 */ 			return __call__ (__accu0__.htmlescape, __accu0__, __add__ (__add__ (__getitem__ (use_delims, 0), (function () {
/* 000310 */ 				var __accu1__ = nodelist;
/* 000310 */ 				return __call__ (__accu1__.latex_verbatim, __accu1__);
/* 000310 */ 			}) ()), __getitem__ (use_delims, 1)));
/* 000310 */ 		}) ();
/* 000313 */ 		var attrs = dict ({});
/* 000314 */ 		if (__t__ (target_id !== null)) {
/* 000315 */ 			__setitem__ (attrs, 'id', target_id);
/* 000315 */ 		}
/* 000317 */ 		if (__t__ (__eq__ (displaytype, 'display'))) {
/* 000319 */ 			return (function () {
/* 000319 */ 				var __accu0__ = self;
/* 000319 */ 				return __call__ (__accu0__.wrap_in_tag, __accu0__, 'span', content_html, __kwargtrans__ ({class_names: class_names, attrs: attrs}));
/* 000319 */ 			}) ();
/* 000319 */ 		}
/* 000326 */ 		return (function () {
/* 000326 */ 			var __accu0__ = self;
/* 000326 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'span', content_html, __kwargtrans__ ({class_names: class_names, attrs: attrs}));
/* 000326 */ 		}) ();
/* 000326 */ 	});},
/* 000333 */ 	get render_text_format () {return __get__ (this, function (self, text_formats, nodelist, render_context) {
/* 000333 */ 		if (arguments.length) {
/* 000333 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000333 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000333 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000333 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000333 */ 					switch (__attrib0__) {
/* 000333 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000333 */ 						case 'text_formats': var text_formats = __allkwargs0__ [__attrib0__]; break;
/* 000333 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000333 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000333 */ 					}
/* 000333 */ 				}
/* 000333 */ 			}
/* 000333 */ 		}
/* 000333 */ 		else {
/* 000333 */ 		}
/* 000335 */ 		var content = (function () {
/* 000335 */ 			var __accu0__ = self;
/* 000335 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, nodelist, render_context, __kwargtrans__ ({is_block_level: false}));
/* 000335 */ 		}) ();
/* 000341 */ 		return (function () {
/* 000341 */ 			var __accu0__ = self;
/* 000341 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'span', content, __kwargtrans__ ({class_names: text_formats}));
/* 000341 */ 		}) ();
/* 000341 */ 	});},
/* 000347 */ 	get render_semantic_span () {return __get__ (this, function (self, content, role, render_context) {
/* 000347 */ 		var annotations = null;
/* 000347 */ 		var target_id = null;
/* 000347 */ 		if (arguments.length) {
/* 000347 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000347 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000347 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000347 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000347 */ 					switch (__attrib0__) {
/* 000347 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000347 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000347 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000347 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000347 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000347 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000347 */ 					}
/* 000347 */ 				}
/* 000347 */ 			}
/* 000347 */ 		}
/* 000347 */ 		else {
/* 000347 */ 		}
/* 000349 */ 		var attrs = dict ({});
/* 000350 */ 		if (__t__ (target_id !== null)) {
/* 000351 */ 			__setitem__ (attrs, 'id', target_id);
/* 000351 */ 		}
/* 000353 */ 		var annotations = __call__ (list, null, (__t__ (annotations !== null) ? annotations : []));
/* 000354 */ 		if (__t__ (__in__ (role, annotations))) {
/* 000355 */ 			(function () {
/* 000355 */ 				var __accu0__ = annotations;
/* 000355 */ 				return __call__ (__accu0__.remove, __accu0__, role);
/* 000355 */ 			}) ();
/* 000355 */ 		}
/* 000357 */ 		return (function () {
/* 000357 */ 			var __accu0__ = self;
/* 000357 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'span', content, __kwargtrans__ ({attrs: attrs, class_names: __add__ ([role], annotations)}));
/* 000357 */ 		}) ();
/* 000357 */ 	});},
/* 000365 */ 	get render_semantic_block () {return __get__ (this, function (self, content, role, render_context) {
/* 000365 */ 		var annotations = null;
/* 000365 */ 		var target_id = null;
/* 000365 */ 		if (arguments.length) {
/* 000365 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000365 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000365 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000365 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000365 */ 					switch (__attrib0__) {
/* 000365 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000365 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000365 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000365 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000365 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000365 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000365 */ 					}
/* 000365 */ 				}
/* 000365 */ 			}
/* 000365 */ 		}
/* 000365 */ 		else {
/* 000365 */ 		}
/* 000367 */ 		var attrs = dict ({});
/* 000368 */ 		if (__t__ (target_id !== null)) {
/* 000369 */ 			__setitem__ (attrs, 'id', target_id);
/* 000369 */ 		}
/* 000371 */ 		var annotations = __call__ (list, null, (__t__ (annotations !== null) ? annotations : []));
/* 000372 */ 		if (__t__ (__in__ (role, annotations))) {
/* 000373 */ 			(function () {
/* 000373 */ 				var __accu0__ = annotations;
/* 000373 */ 				return __call__ (__accu0__.remove, __accu0__, role);
/* 000373 */ 			}) ();
/* 000373 */ 		}
/* 000375 */ 		if (__t__ (__in__ (role, tuple (['section', 'main', 'article'])))) {
/* 000376 */ 			return (function () {
/* 000376 */ 				var __accu0__ = self;
/* 000376 */ 				return __call__ (__accu0__.wrap_in_tag, __accu0__, role, content, __kwargtrans__ ({attrs: attrs, class_names: annotations}));
/* 000376 */ 			}) ();
/* 000376 */ 		}
/* 000382 */ 		return (function () {
/* 000382 */ 			var __accu0__ = self;
/* 000382 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'div', content, __kwargtrans__ ({attrs: attrs, class_names: __add__ ([role], annotations)}));
/* 000382 */ 		}) ();
/* 000382 */ 	});},
/* 000390 */ 	get render_enumeration () {return __get__ (this, function (self, iter_items_nodelists, counter_formatter, render_context) {
/* 000390 */ 		var target_id_generator = null;
/* 000390 */ 		var annotations = null;
/* 000390 */ 		var nested_depth = null;
/* 000390 */ 		if (arguments.length) {
/* 000390 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000390 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000390 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000390 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000390 */ 					switch (__attrib0__) {
/* 000390 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000390 */ 						case 'iter_items_nodelists': var iter_items_nodelists = __allkwargs0__ [__attrib0__]; break;
/* 000390 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000390 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000390 */ 						case 'target_id_generator': var target_id_generator = __allkwargs0__ [__attrib0__]; break;
/* 000390 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000390 */ 						case 'nested_depth': var nested_depth = __allkwargs0__ [__attrib0__]; break;
/* 000390 */ 					}
/* 000390 */ 				}
/* 000390 */ 			}
/* 000390 */ 		}
/* 000390 */ 		else {
/* 000390 */ 		}
/* 000402 */ 		var s_items = [];
/* 000404 */ 		var __iterable0__ = __call__ (enumerate, null, iter_items_nodelists);
/* 000404 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000404 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000404 */ 			var j = __left0__ [0];
/* 000404 */ 			var item_content_nodelist = __left0__ [1];
/* 000406 */ 			var use_block_level = true;
/* 000407 */ 			if (__t__ (item_content_nodelist.parsing_state.is_block_level === false)) {
/* 000410 */ 				var use_block_level = false;
/* 000410 */ 			}
/* 000412 */ 			// pass;
/* 000416 */ 			// pass;
/* 000420 */ 			var item_content = (function () {
/* 000420 */ 				var __accu0__ = self;
/* 000420 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, item_content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: use_block_level}));
/* 000420 */ 			}) ();
/* 000426 */ 			var enumno = __add__ (1, j);
/* 000428 */ 			var tag_nodelist = __call__ (counter_formatter, null, enumno);
/* 000429 */ 			if (__t__ (__call__ (isinstance, null, tag_nodelist, str))) {
/* 000430 */ 				var tag_content = (function () {
/* 000430 */ 					var __accu0__ = self;
/* 000430 */ 					return __call__ (__accu0__.render_value, __accu0__, tag_nodelist, render_context);
/* 000430 */ 				}) ();
/* 000430 */ 			}
/* 000431 */ 			else {
/* 000432 */ 				var tag_content = (function () {
/* 000432 */ 					var __accu0__ = self;
/* 000432 */ 					return __call__ (__accu0__.render_nodelist, __accu0__, tag_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000432 */ 				}) ();
/* 000432 */ 			}
/* 000438 */ 			var dtattrs = dict ({});
/* 000439 */ 			if (__t__ (target_id_generator !== null)) {
/* 000440 */ 				__setitem__ (dtattrs, 'id', __call__ (target_id_generator, null, enumno));
/* 000440 */ 			}
/* 000442 */ 			(function () {
/* 000442 */ 				var __accu0__ = s_items;
/* 000443 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000443 */ 					var __accu1__ = self;
/* 000444 */ 					return __call__ (__accu1__.render_join, __accu1__, [(function () {
/* 000444 */ 						var __accu2__ = self;
/* 000444 */ 						return __call__ (__accu2__.wrap_in_tag, __accu2__, 'dt', tag_content, __kwargtrans__ ({attrs: dtattrs}));
/* 000449 */ 					}) (), (function () {
/* 000449 */ 						var __accu2__ = self;
/* 000449 */ 						return __call__ (__accu2__.wrap_in_tag, __accu2__, 'dd', item_content);
/* 000449 */ 					}) ()], render_context);
/* 000449 */ 				}) ());
/* 000449 */ 			}) ();
/* 000449 */ 		}
/* 000456 */ 		return (function () {
/* 000456 */ 			var __accu0__ = self;
/* 000458 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'dl', (function () {
/* 000458 */ 				var __accu1__ = self;
/* 000458 */ 				return __call__ (__accu1__.render_join, __accu1__, s_items, render_context);
/* 000458 */ 			}) (), __kwargtrans__ ({class_names: __add__ (['enumeration'], (__t__ (annotations) ? annotations : []))}));
/* 000458 */ 		}) ();
/* 000458 */ 	});},
/* 000463 */ 	get render_heading () {return __get__ (this, function (self, heading_nodelist, render_context) {
/* 000463 */ 		var heading_level = 1;
/* 000463 */ 		var inline_heading = false;
/* 000463 */ 		var target_id = null;
/* 000463 */ 		var annotations = null;
/* 000463 */ 		if (arguments.length) {
/* 000463 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000463 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000463 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000463 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000463 */ 					switch (__attrib0__) {
/* 000463 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000463 */ 						case 'heading_nodelist': var heading_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000463 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000463 */ 						case 'heading_level': var heading_level = __allkwargs0__ [__attrib0__]; break;
/* 000463 */ 						case 'inline_heading': var inline_heading = __allkwargs0__ [__attrib0__]; break;
/* 000463 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000463 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000463 */ 					}
/* 000463 */ 				}
/* 000463 */ 			}
/* 000463 */ 		}
/* 000463 */ 		else {
/* 000463 */ 		}
/* 000470 */ 		if (__t__ (!__in__ (heading_level, self.heading_tags_by_level))) {
/* 000472 */ 			var __except0__ = __call__ (ValueError, null, 'Bad heading_level={}, expected one of {}'.format (heading_level, __call__ (list, null, (function () {
/* 000472 */ 				var __accu0__ = self.heading_tags_by_level;
/* 000472 */ 				return __call__ (__accu0__.py_keys, __accu0__);
/* 000472 */ 			}) ())));
/* 000472 */ 			__except0__.__cause__ = null;
/* 000472 */ 			throw __except0__;
/* 000472 */ 		}
/* 000474 */ 		var annot = (__t__ (annotations) ? __call__ (list, null, annotations) : []);
/* 000475 */ 		(function () {
/* 000475 */ 			var __accu0__ = annot;
/* 000475 */ 			return __call__ (__accu0__.append, __accu0__, 'heading-level-{}'.format (heading_level));
/* 000475 */ 		}) ();
/* 000476 */ 		if (__t__ (inline_heading)) {
/* 000477 */ 			(function () {
/* 000477 */ 				var __accu0__ = annot;
/* 000477 */ 				return __call__ (__accu0__.append, __accu0__, 'heading-inline');
/* 000477 */ 			}) ();
/* 000477 */ 		}
/* 000479 */ 		var attrs = dict ({});
/* 000480 */ 		if (__t__ (target_id !== null)) {
/* 000481 */ 			__setitem__ (attrs, 'id', target_id);
/* 000481 */ 		}
/* 000483 */ 		var content = (function () {
/* 000483 */ 			var __accu0__ = self;
/* 000485 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, __getitem__ (self.heading_tags_by_level, heading_level), (function () {
/* 000485 */ 				var __accu1__ = self;
/* 000485 */ 				return __call__ (__accu1__.render_inline_content, __accu1__, heading_nodelist, render_context);
/* 000485 */ 			}) (), __kwargtrans__ ({class_names: annot, attrs: attrs}));
/* 000485 */ 		}) ();
/* 000489 */ 		if (__t__ (__t__ (inline_heading) && self.inline_heading_add_space)) {
/* 000490 */ 			var content = __call__ (__iadd__, null, content, ' ');
/* 000490 */ 		}
/* 000491 */ 		// pass;
/* 000495 */ 		return content;
/* 000495 */ 	});},
/* 000497 */ 	get render_link () {return __get__ (this, function (self, ref_type, href, display_nodelist, render_context, annotations) {
/* 000497 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000497 */ 			var annotations = null;
/* 000497 */ 		};
/* 000497 */ 		if (arguments.length) {
/* 000497 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000497 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000497 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000497 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000497 */ 					switch (__attrib0__) {
/* 000497 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000497 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000497 */ 						case 'href': var href = __allkwargs0__ [__attrib0__]; break;
/* 000497 */ 						case 'display_nodelist': var display_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000497 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000497 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000497 */ 					}
/* 000497 */ 				}
/* 000497 */ 			}
/* 000497 */ 		}
/* 000497 */ 		else {
/* 000497 */ 		}
/* 000498 */ 		var display_content = (function () {
/* 000498 */ 			var __accu0__ = self;
/* 000498 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, display_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000498 */ 		}) ();
/* 000503 */ 		if (__t__ (__t__ (!__t__ ((href))) && !__t__ ((self.render_links_with_empty_href)))) {
/* 000504 */ 			return display_content;
/* 000504 */ 		}
/* 000506 */ 		return (function () {
/* 000506 */ 			var __accu0__ = self;
/* 000506 */ 			return __call__ (__accu0__.wrap_in_link, __accu0__, display_content, href, __kwargtrans__ ({class_names: __add__ (['href-{}'.format (ref_type)], (__t__ (annotations) ? annotations : []))}));
/* 000506 */ 		}) ();
/* 000506 */ 	});},
/* 000513 */ 	get render_delayed_marker () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000513 */ 		if (arguments.length) {
/* 000513 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000513 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000513 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000513 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000513 */ 					switch (__attrib0__) {
/* 000513 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000513 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000513 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000513 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000513 */ 					}
/* 000513 */ 				}
/* 000513 */ 			}
/* 000513 */ 		}
/* 000513 */ 		else {
/* 000513 */ 		}
/* 000514 */ 		return '<FLM:DLYD:{}/>'.format (delayed_key);
/* 000514 */ 	});},
/* 000516 */ 	get render_delayed_dummy_placeholder () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000516 */ 		if (arguments.length) {
/* 000516 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000516 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000516 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000516 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000516 */ 					switch (__attrib0__) {
/* 000516 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000516 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000516 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000516 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000516 */ 					}
/* 000516 */ 				}
/* 000516 */ 			}
/* 000516 */ 		}
/* 000516 */ 		else {
/* 000516 */ 		}
/* 000517 */ 		return '<!-- delayed:{} -->'.format (delayed_key);
/* 000517 */ 	});},
/* 000519 */ 	get replace_delayed_markers_with_final_values () {return __get__ (this, function (self, content, delayed_values) {
/* 000519 */ 		if (arguments.length) {
/* 000519 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000519 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000519 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000519 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000519 */ 					switch (__attrib0__) {
/* 000519 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000519 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000519 */ 						case 'delayed_values': var delayed_values = __allkwargs0__ [__attrib0__]; break;
/* 000519 */ 					}
/* 000519 */ 				}
/* 000519 */ 			}
/* 000519 */ 		}
/* 000519 */ 		else {
/* 000519 */ 		}
/* 000520 */ 		return (function () {
/* 000520 */ 			var __accu0__ = _rx_delayed_markers;
/* 000520 */ 			return __call__ (__accu0__.sub, __accu0__, (function __lambda__ (m) {
/* 000520 */ 				if (arguments.length) {
/* 000520 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000520 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000520 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000520 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000520 */ 							switch (__attrib0__) {
/* 000520 */ 								case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000520 */ 							}
/* 000520 */ 						}
/* 000520 */ 					}
/* 000520 */ 				}
/* 000520 */ 				else {
/* 000520 */ 				}
/* 000521 */ 				return __getitem__ (delayed_values, __call__ (int, null, (function () {
/* 000521 */ 					var __accu1__ = m;
/* 000521 */ 					return __call__ (__accu1__.group, __accu1__, 'key');
/* 000521 */ 				}) ()));
/* 000521 */ 			}), content);
/* 000521 */ 		}) ();
/* 000521 */ 	});},
/* 000528 */ 	get render_float () {return __get__ (this, function (self, float_instance, render_context) {
/* 000528 */ 		if (arguments.length) {
/* 000528 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000528 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000528 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000528 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000528 */ 					switch (__attrib0__) {
/* 000528 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000528 */ 						case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000528 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000528 */ 					}
/* 000528 */ 				}
/* 000528 */ 			}
/* 000528 */ 		}
/* 000528 */ 		else {
/* 000528 */ 		}
/* 000531 */ 		var figattrs = dict ({});
/* 000533 */ 		if (__t__ (float_instance.target_id !== null)) {
/* 000534 */ 			__setitem__ (figattrs, 'id', float_instance.target_id);
/* 000534 */ 		}
/* 000536 */ 		var full_figcaption_rendered_list = [];
/* 000537 */ 		if (__t__ (float_instance.number !== null)) {
/* 000539 */ 			(function () {
/* 000539 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000540 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000540 */ 					var __accu1__ = self;
/* 000542 */ 					return __call__ (__accu1__.wrap_in_tag, __accu1__, 'span', (function () {
/* 000542 */ 						var __accu2__ = self;
/* 000543 */ 						return __call__ (__accu2__.render_join, __accu2__, [(function () {
/* 000543 */ 							var __accu3__ = self;
/* 000543 */ 							return __call__ (__accu3__.render_value, __accu3__, float_instance.float_type_info.float_caption_name, render_context);
/* 000548 */ 						}) (), '&nbsp;', (function () {
/* 000548 */ 							var __accu3__ = self;
/* 000548 */ 							return __call__ (__accu3__.render_nodelist, __accu3__, float_instance.formatted_counter_value_flm.nodes, __kwargtrans__ ({render_context: render_context}));
/* 000548 */ 						}) ()], render_context);
/* 000548 */ 					}) (), __kwargtrans__ ({class_names: ['float-number']}));
/* 000548 */ 				}) ());
/* 000548 */ 			}) ();
/* 000548 */ 		}
/* 000556 */ 		else if (__t__ (float_instance.caption_nodelist)) {
/* 000559 */ 			(function () {
/* 000559 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000560 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000560 */ 					var __accu1__ = self;
/* 000562 */ 					return __call__ (__accu1__.wrap_in_tag, __accu1__, 'span', (function () {
/* 000562 */ 						var __accu2__ = self;
/* 000563 */ 						return __call__ (__accu2__.render_join, __accu2__, [(function () {
/* 000563 */ 							var __accu3__ = self;
/* 000563 */ 							return __call__ (__accu3__.render_value, __accu3__, float_instance.float_type_info.float_caption_name, render_context);
/* 000563 */ 						}) ()], render_context);
/* 000563 */ 					}) (), __kwargtrans__ ({class_names: ['float-no-number']}));
/* 000563 */ 				}) ());
/* 000563 */ 			}) ();
/* 000563 */ 		}
/* 000569 */ 		else {
/* 000573 */ 			// pass;
/* 000573 */ 		}
/* 000575 */ 		if (__t__ (float_instance.caption_nodelist)) {
/* 000579 */ 			(function () {
/* 000579 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000579 */ 				return __call__ (__accu0__.append, __accu0__, ': ');
/* 000579 */ 			}) ();
/* 000582 */ 			(function () {
/* 000582 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000583 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000583 */ 					var __accu1__ = self;
/* 000583 */ 					return __call__ (__accu1__.render_nodelist, __accu1__, float_instance.caption_nodelist, __kwargtrans__ ({render_context: render_context}));
/* 000583 */ 				}) ());
/* 000583 */ 			}) ();
/* 000583 */ 		}
/* 000589 */ 		var rendered_float_caption = null;
/* 000590 */ 		if (__t__ (full_figcaption_rendered_list)) {
/* 000591 */ 			var rendered_float_caption = (function () {
/* 000591 */ 				var __accu0__ = self;
/* 000593 */ 				return __call__ (__accu0__.wrap_in_tag, __accu0__, 'figcaption', (function () {
/* 000593 */ 					var __accu1__ = self;
/* 000595 */ 					return __call__ (__accu1__.wrap_in_tag, __accu1__, 'span', (function () {
/* 000595 */ 						var __accu2__ = self;
/* 000595 */ 						return __call__ (__accu2__.render_join, __accu2__, full_figcaption_rendered_list, render_context);
/* 000595 */ 					}) ());
/* 000595 */ 				}) (), __kwargtrans__ ({class_names: ['float-caption-content']}));
/* 000595 */ 			}) ();
/* 000595 */ 		}
/* 000600 */ 		var float_content_block_content = (function () {
/* 000600 */ 			var __accu0__ = self;
/* 000600 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, float_instance.content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: true}));
/* 000600 */ 		}) ();
/* 000605 */ 		var float_content_block = (function () {
/* 000605 */ 			var __accu0__ = self;
/* 000605 */ 			return __call__ (__accu0__.render_semantic_block, __accu0__, float_content_block_content, 'float-contents', __kwargtrans__ ({render_context: render_context}));
/* 000605 */ 		}) ();
/* 000611 */ 		if (__t__ (rendered_float_caption !== null)) {
/* 000612 */ 			var float_content_with_caption = (function () {
/* 000612 */ 				var __accu0__ = self;
/* 000612 */ 				return __call__ (__accu0__.render_join_blocks, __accu0__, [float_content_block, rendered_float_caption], render_context);
/* 000612 */ 			}) ();
/* 000612 */ 		}
/* 000616 */ 		else {
/* 000617 */ 			var float_content_with_caption = float_content_block;
/* 000617 */ 		}
/* 000619 */ 		var full_figure = (function () {
/* 000619 */ 			var __accu0__ = self;
/* 000619 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'figure', float_content_with_caption, __kwargtrans__ ({attrs: figattrs, class_names: ['float', 'float-{}'.format (float_instance.float_type)]}));
/* 000619 */ 		}) ();
/* 000626 */ 		return full_figure;
/* 000626 */ 	});},
/* 000629 */ 	graphics_raster_magnification: 1,
/* 000630 */ 	graphics_vector_magnification: 1,
/* 000632 */ 	get render_graphics_block () {return __get__ (this, function (self, graphics_resource, render_context) {
/* 000632 */ 		if (arguments.length) {
/* 000632 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000632 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000632 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000632 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000632 */ 					switch (__attrib0__) {
/* 000632 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000632 */ 						case 'graphics_resource': var graphics_resource = __allkwargs0__ [__attrib0__]; break;
/* 000632 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000632 */ 					}
/* 000632 */ 				}
/* 000632 */ 			}
/* 000632 */ 		}
/* 000632 */ 		else {
/* 000632 */ 		}
/* 000634 */ 		var imgattrs = dict ({});
/* 000636 */ 		var styparts = [];
/* 000637 */ 		if (__t__ (graphics_resource.physical_dimensions !== null)) {
/* 000639 */ 			var __left0__ = graphics_resource.physical_dimensions;
/* 000639 */ 			var width_pt = __left0__ [0];
/* 000639 */ 			var height_pt = __left0__ [1];
/* 000641 */ 			if (__t__ (__eq__ (graphics_resource.graphics_type, 'raster'))) {
/* 000642 */ 				if (__t__ (width_pt !== null)) {
/* 000643 */ 					var width_pt = __call__ (__imul__, null, width_pt, self.graphics_raster_magnification);
/* 000643 */ 				}
/* 000644 */ 				if (__t__ (height_pt !== null)) {
/* 000645 */ 					var height_pt = __call__ (__imul__, null, height_pt, self.graphics_raster_magnification);
/* 000645 */ 				}
/* 000645 */ 			}
/* 000646 */ 			else if (__t__ (__eq__ (graphics_resource.graphics_type, 'vector'))) {
/* 000647 */ 				if (__t__ (width_pt !== null)) {
/* 000648 */ 					var width_pt = __call__ (__imul__, null, width_pt, self.graphics_vector_magnification);
/* 000648 */ 				}
/* 000649 */ 				if (__t__ (height_pt !== null)) {
/* 000650 */ 					var height_pt = __call__ (__imul__, null, height_pt, self.graphics_vector_magnification);
/* 000650 */ 				}
/* 000650 */ 			}
/* 000652 */ 			if (__t__ (width_pt !== null)) {
/* 000653 */ 				(function () {
/* 000653 */ 					var __accu0__ = styparts;
/* 000653 */ 					return __call__ (__accu0__.append, __accu0__, 'width:{}pt'.format (width_pt));
/* 000653 */ 				}) ();
/* 000653 */ 			}
/* 000654 */ 			if (__t__ (height_pt !== null)) {
/* 000655 */ 				(function () {
/* 000655 */ 					var __accu0__ = styparts;
/* 000655 */ 					return __call__ (__accu0__.append, __accu0__, 'height:{}pt'.format (height_pt));
/* 000655 */ 				}) ();
/* 000655 */ 			}
/* 000655 */ 		}
/* 000657 */ 		if (__t__ (styparts)) {
/* 000658 */ 			__setitem__ (imgattrs, 'style', (function () {
/* 000658 */ 				var __accu0__ = ';';
/* 000658 */ 				return __call__ (__accu0__.join, __accu0__, styparts);
/* 000658 */ 			}) ());
/* 000658 */ 		}
/* 000660 */ 		var src_url = graphics_resource.src_url;
/* 000661 */ 		__setitem__ (imgattrs, 'src', src_url);
/* 000664 */ 		if (__t__ (__t__ (graphics_resource.srcset !== null) && __t__ (graphics_resource.srcset) && __call__ (len, null, graphics_resource.srcset))) {
/* 000666 */ 			var srcset_items = [];
/* 000667 */ 			var __iterable0__ = graphics_resource.srcset;
/* 000667 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000667 */ 				var srcset_info = __getitem__ (__iterable0__, __index0__);
/* 000668 */ 				var ss = __getitem__ (srcset_info, 'source');
/* 000669 */ 				if (__t__ (__in__ ('pixel_density', srcset_info))) {
/* 000670 */ 					var pixel_density = __getitem__ (srcset_info, 'pixel_density');
/* 000671 */ 					var ss = __call__ (__iadd__, null, ss, ' {}x'.format (pixel_density));
/* 000671 */ 				}
/* 000673 */ 				(function () {
/* 000673 */ 					var __accu0__ = srcset_items;
/* 000673 */ 					return __call__ (__accu0__.append, __accu0__, ss);
/* 000673 */ 				}) ();
/* 000673 */ 			}
/* 000675 */ 			__setitem__ (imgattrs, 'srcset', (function () {
/* 000675 */ 				var __accu0__ = ', ';
/* 000675 */ 				return __call__ (__accu0__.join, __accu0__, srcset_items);
/* 000675 */ 			}) ());
/* 000675 */ 		}
/* 000678 */ 		return (function () {
/* 000678 */ 			var __accu0__ = self;
/* 000678 */ 			return __call__ (__accu0__.generate_open_tag, __accu0__, 'img', __kwargtrans__ ({attrs: imgattrs}));
/* 000678 */ 		}) ();
/* 000678 */ 	});},
/* 000681 */ 	get render_cells () {return __get__ (this, function (self, cells_model, render_context, target_id) {
/* 000681 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000681 */ 			var target_id = null;
/* 000681 */ 		};
/* 000681 */ 		if (arguments.length) {
/* 000681 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000681 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000681 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000681 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000681 */ 					switch (__attrib0__) {
/* 000681 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000681 */ 						case 'cells_model': var cells_model = __allkwargs0__ [__attrib0__]; break;
/* 000681 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000681 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000681 */ 					}
/* 000681 */ 				}
/* 000681 */ 			}
/* 000681 */ 		}
/* 000681 */ 		else {
/* 000681 */ 		}
/* 000683 */ 		var __left0__ = tuple ([__call__ (len, null, cells_model.grid_data), __call__ (len, null, __getitem__ (cells_model.grid_data, 0))]);
/* 000683 */ 		var tabheight = __left0__ [0];
/* 000683 */ 		var tabwidth = __left0__ [1];
/* 000685 */ 		var data_items = [];
/* 000686 */ 		var row_j = 0;
/* 000687 */ 		while (__t__ (__lt__ (row_j, __call__ (len, null, cells_model.grid_data)))) {
/* 000688 */ 			var row_items = [];
/* 000689 */ 			var col_j = 0;
/* 000690 */ 			while (__t__ (__lt__ (col_j, __call__ (len, null, __getitem__ (cells_model.grid_data, row_j))))) {
/* 000692 */ 				var grid_cell_data = __getitem__ (__getitem__ (cells_model.grid_data, row_j), col_j);
/* 000694 */ 				if (__t__ (__t__ (grid_cell_data === null) || __getitem__ (grid_cell_data, 'cell') === null)) {
/* 000697 */ 					var clsnames = [];
/* 000698 */ 					if (__t__ (__eq__ (row_j, 0))) {
/* 000699 */ 						(function () {
/* 000699 */ 							var __accu0__ = clsnames;
/* 000699 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-top');
/* 000699 */ 						}) ();
/* 000699 */ 					}
/* 000700 */ 					if (__t__ (__eq__ (col_j, 0))) {
/* 000701 */ 						(function () {
/* 000701 */ 							var __accu0__ = clsnames;
/* 000701 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-left');
/* 000701 */ 						}) ();
/* 000701 */ 					}
/* 000702 */ 					if (__t__ (__eq__ (row_j, __sub__ (tabheight, 1)))) {
/* 000703 */ 						(function () {
/* 000703 */ 							var __accu0__ = clsnames;
/* 000703 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-bottom');
/* 000703 */ 						}) ();
/* 000703 */ 					}
/* 000704 */ 					if (__t__ (__eq__ (col_j, __sub__ (tabwidth, 1)))) {
/* 000705 */ 						(function () {
/* 000705 */ 							var __accu0__ = clsnames;
/* 000705 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-right');
/* 000705 */ 						}) ();
/* 000705 */ 					}
/* 000706 */ 					(function () {
/* 000706 */ 						var __accu0__ = row_items;
/* 000706 */ 						return __call__ (__accu0__.append, __accu0__, (function () {
/* 000706 */ 							var __accu1__ = self;
/* 000706 */ 							return __call__ (__accu1__.wrap_in_tag, __accu1__, 'td', '', __kwargtrans__ ({class_names: __add__ (['cell-empty'], clsnames)}));
/* 000706 */ 						}) ());
/* 000706 */ 					}) ();
/* 000711 */ 					var col_j = __call__ (__iadd__, null, col_j, 1);
/* 000711 */ 					continue;
/* 000711 */ 				}
/* 000714 */ 				if (__t__ (__getitem__ (grid_cell_data, 'is_topleft'))) {
/* 000716 */ 					var cell = __getitem__ (grid_cell_data, 'cell');
/* 000717 */ 					var rendered_cell_contents = (function () {
/* 000717 */ 						var __accu0__ = self;
/* 000717 */ 						return __call__ (__accu0__.render_nodelist, __accu0__, cell.content_nodes, __kwargtrans__ ({render_context: render_context}));
/* 000717 */ 					}) ();
/* 000721 */ 					var clsnames = __add__ (['cell'], (function () {
/* 000721 */ 						var __accu0__ = [];
/* 000721 */ 						var __iterable0__ = cell.styles;
/* 000721 */ 						for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000721 */ 							var sty = __getitem__ (__iterable0__, __index0__);
/* 000721 */ 							(function () {
/* 000721 */ 								var __accu1__ = __accu0__;
/* 000721 */ 								return __call__ (__accu1__.append, __accu1__, 'cellstyle-{}'.format (sty));
/* 000721 */ 							}) ();
/* 000721 */ 						}
/* 000721 */ 						return __accu0__;
/* 000721 */ 					}) ());
/* 000722 */ 					if (__t__ (__eq__ (row_j, 0))) {
/* 000723 */ 						(function () {
/* 000723 */ 							var __accu0__ = clsnames;
/* 000723 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-top');
/* 000723 */ 						}) ();
/* 000723 */ 					}
/* 000724 */ 					if (__t__ (__eq__ (col_j, 0))) {
/* 000725 */ 						(function () {
/* 000725 */ 							var __accu0__ = clsnames;
/* 000725 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-left');
/* 000725 */ 						}) ();
/* 000725 */ 					}
/* 000726 */ 					if (__t__ (__eq__ (cell.placement.row_range.end, tabheight))) {
/* 000727 */ 						(function () {
/* 000727 */ 							var __accu0__ = clsnames;
/* 000727 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-bottom');
/* 000727 */ 						}) ();
/* 000727 */ 					}
/* 000728 */ 					if (__t__ (__eq__ (cell.placement.col_range.end, tabwidth))) {
/* 000729 */ 						(function () {
/* 000729 */ 							var __accu0__ = clsnames;
/* 000729 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-right');
/* 000729 */ 						}) ();
/* 000729 */ 					}
/* 000730 */ 					var tagname = 'td';
/* 000731 */ 					if (__t__ (__t__ (__in__ ('H', cell.styles)) || __in__ ('rH', cell.styles))) {
/* 000732 */ 						var tagname = 'th';
/* 000732 */ 					}
/* 000733 */ 					var attrs = dict ({});
/* 000734 */ 					var cplc = cell.placement;
/* 000735 */ 					if (__t__ (__ne__ (cplc.col_range.end, __add__ (cplc.col_range.start, 1)))) {
/* 000738 */ 						__setitem__ (attrs, 'colspan', __call__ (str, null, __sub__ (cplc.col_range.end, cplc.col_range.start)));
/* 000738 */ 					}
/* 000739 */ 					if (__t__ (__ne__ (cplc.row_range.end, __add__ (cplc.row_range.start, 1)))) {
/* 000741 */ 						__setitem__ (attrs, 'rowspan', __call__ (str, null, __sub__ (cplc.row_range.end, cplc.row_range.start)));
/* 000741 */ 					}
/* 000742 */ 					(function () {
/* 000742 */ 						var __accu0__ = row_items;
/* 000743 */ 						return __call__ (__accu0__.append, __accu0__, (function () {
/* 000743 */ 							var __accu1__ = self;
/* 000743 */ 							return __call__ (__accu1__.wrap_in_tag, __accu1__, tagname, rendered_cell_contents, __kwargtrans__ ({attrs: attrs, class_names: clsnames}));
/* 000743 */ 						}) ());
/* 000743 */ 					}) ();
/* 000750 */ 					var col_j = cplc.col_range.end;
/* 000750 */ 					continue;
/* 000750 */ 				}
/* 000755 */ 				var col_j = __call__ (__iadd__, null, col_j, 1);
/* 000755 */ 			}
/* 000757 */ 			(function () {
/* 000757 */ 				var __accu0__ = data_items;
/* 000757 */ 				return __call__ (__accu0__.append, __accu0__, row_items);
/* 000757 */ 			}) ();
/* 000758 */ 			var row_j = __call__ (__iadd__, null, row_j, 1);
/* 000758 */ 		}
/* 000760 */ 		var table_attrs = dict ({});
/* 000761 */ 		if (__t__ (target_id !== null)) {
/* 000762 */ 			__setitem__ (table_attrs, 'id', target_id);
/* 000762 */ 		}
/* 000764 */ 		var s = (function () {
/* 000764 */ 			var __accu0__ = self;
/* 000766 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'table', (function () {
/* 000766 */ 				var __accu1__ = '';
/* 000766 */ 				return __call__ (__accu1__.join, __accu1__, (function () {
/* 000766 */ 					var __accu2__ = [];
/* 000766 */ 					var __iterable0__ = data_items;
/* 000766 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000768 */ 						var row_items = __getitem__ (__iterable0__, __index0__);
/* 000768 */ 						(function () {
/* 000768 */ 							var __accu3__ = __accu2__;
/* 000767 */ 							return __call__ (__accu3__.append, __accu3__, __add__ (__add__ ('<tr>', (function () {
/* 000767 */ 								var __accu4__ = '';
/* 000767 */ 								return __call__ (__accu4__.join, __accu4__, row_items);
/* 000767 */ 							}) ()), '</tr>'));
/* 000767 */ 						}) ();
/* 000767 */ 					}
/* 000767 */ 					return __accu2__;
/* 000767 */ 				}) ());
/* 000767 */ 			}) (), __kwargtrans__ ({attrs: table_attrs, class_names: ['cells']}));
/* 000767 */ 		}) ();
/* 000773 */ 		return s;
/* 000773 */ 	});}
/* 000773 */ });
/* 000779 */ export var _rx_delayed_markers = (function () {
/* 000779 */ 	var __accu0__ = re;
/* 000779 */ 	return __call__ (__accu0__.compile, __accu0__, '<FLM:DLYD:(?P<key>\\d+)\\s*/>');
/* 000779 */ }) ();
/* 000786 */ export var _html_css_global = '\np, ul, ol {\n  margin: 1em 0px;\n}\np:first-child, ul:first-child, ol:first-child {\n  margin-top: 0px;\n}\np:last-child, ul:last-child, ol:last-child {\n  margin-bottom: 0px;\n}\ndd > p, dd > p:first-child, dd > p:last-child {\n  margin: 0.33em 0px;\n}\n\na, a:link, a:hover, a:active, a:visited {\n  color: #3232c8;\n  text-decoration: none;\n}\na:hover {\n  color: #22228a;\n}\n';
/* 000809 */ export var _html_css_content = "\n.emph, .textit {\n  font-style: italic;\n}\n.textbf {\n  font-weight: bold;\n}\n\nh1 {\n  font-size: 1.6rem;\n  line-height: 1.3em;\n  font-weight: bold;\n  margin: 1em 0px;\n}\nh2 {\n  font-size: 1.3rem;\n  line-height: 1.3em;\n  font-weight: bold;\n  margin: 1em 0px;\n}\nh3 {\n  font-size: 1rem;\n  font-weight: bold;\n  margin: 1em 0px;\n}\n\n.heading-level-4 {\n  font-style: italic;\n  display: inline;\n}\n.heading-level-4::after {\n  display: inline-block;\n  margin: 0px .12em;\n  content: '—';\n}\n\n.heading-level-5 {\n  font-style: italic;\n  font-size: .9em;\n  display: inline;\n}\n.heading-level-5::after {\n  display: inline-block;\n  margin-right: .12em;\n  content: '';\n}\n\n.heading-level-6 {\n  font-style: italic;\n  font-size: .8em;\n  display: inline;\n}\n.heading-level-6::after {\n  display: inline-block;\n  margin-right: .06em;\n  content: '';\n}\n\n\n.heading-level-theorem {\n  font-weight: bold;\n  display: inline-block;\n}\n.heading-level-theorem::after {\n  font-weight: bold;\n  display: inline-block;\n  margin: 0px .12em 0px 0px;\n  content: '.';\n}\n\ndiv.theoremlike, div.definitionlike, div.prooflike {\n  margin: 1em 0px;\n}\n\ndiv.prooflike > p > .heading-level-theorem,\ndiv.prooflike > p > .heading-level-theorem::after {\n  font-weight: normal;\n  font-style: italic;\n}\n\n\ndl.enumeration {\n  display: block;\n  margin-left: 2.5em;\n}\ndl.enumeration > dt {\n  float: left;\n  clear: left;\n  display: inline-block;\n  /*margin: 0px; */\n  margin-left: -2.5em;\n  width: 2.0em;\n  min-width: 2.0em;\n  max-width: 2.0em;\n  margin-right: 0.5em;\n  text-align: right;\n}\ndl.enumeration > dd {\n  /*display: inline-block;\n  width: 100%;*/\n  border: 0px;\n  padding: 0px;\n  margin: 0px;\n}\n\nfigure.float {\n  width: 100%;\n  border-width: 1px 0px 1px 0px;\n  border-style: solid none solid none;\n  border-color: rgba(120, 120, 140, 0.15);\n  margin: 0.5rem 0px;\n  padding: 0.5rem 0px;\n}\n\nfigure.float .float-contents {\n  width: 100%;\n  max-width: 100%;\n  overflow-x: auto;\n}\n\nfigure.float .float-contents img {\n  display: block;\n  margin: 0pt auto;\n  padding: 0pt;\n  border: 0pt;\n  margin: 0px auto;\n}\n\nfigure.float figcaption {\n  display: block;\n  margin-top: 0.5em;\n  margin: 0.75em 2em 0px;\n  text-align: center;\n}\n\nfigure.float figcaption > span {\n  display: inline-block;\n  font-style: italic;\n  text-align: left;\n}\n\ntable {\n  margin: 1em 0px 1em 0px;\n  border-collapse: separate;\n  border-spacing: 0px;\n  /*border-top: solid 1pt;\n  border-bottom: solid 1pt;*/\n}\nfigure.float .float-contents table {\n  margin: 0px auto;\n}\ntd {\n  padding: 0.3em 0.5em;\n  border: none 0px;\n}\nth {\n  padding: 0.3em 0.5em;\n  border: none 0px;\n}\n.cellstyle-H {\n  border-bottom: solid .5pt;\n}\n.cellstyle-rH {\n}\n.cellstyle-l {\n  text-align: left;\n}\n.cellstyle-c {\n  text-align: center;\n}\n.cellstyle-r {\n  text-align: right;\n}\n.cellstyle-green {\n  background-color: rgba(69, 255, 69, 0.31); /*rgb(200,255,200);*/\n}\n.cellstyle-blue {\n  background-color: rgba(79, 142, 255, 0.27); /*rgb(200,220,255);*/\n}\n.cellstyle-yellow {\n  background-color: rgba(255, 255, 49, 0.33); /*rgb(255,255,200);*/\n}\n.cellstyle-red {\n  background-color: rgba(255,120,120,0.30);  /*rgb(255,200,200);*/\n}\n.cellstyle-lvert {\n  border-left: solid .5pt;\n}\n.cellstyle-rvert {\n  border-right: solid .5pt;\n}\n\n.celltbledge-top {\n  border-top: solid 1pt;\n}\n.celltbledge-bottom {\n  border-bottom: solid 1pt;\n}\n\n.verbatimcode {\n  font-family: monospace;\n  font-size: 0.9em;\n  background-color: rgba(127,127,127,0.25);\n  border-radius: 2px;\n  padding: 1px 2px;\n  display: inline-block;\n  white-space: pre-wrap;\n}\n.verbatima {\n  font-style: italic;\n}\n.verbatimcode-environment {\n  display: block;\n  margin: 0.75em 0px 1em;\n  white-space: pre;\n}\n\n.defterm {\n  font-style: italic;\n}\n\n.defterm .defterm-term {\n  font-style: italic;\n  font-weight: bold;\n}\n\n.display-math {\n  width: 100%;\n  max-width: 100%;\n  display: block;\n  overflow-x: auto;\n}\n\n.endnote {\n}\n.citation {\n}\n.footnote {\n}\n.endnote-marks, .citation-marks {\n  font-size: 0.8em;\n  display: inline-block;\n  vertical-align: 0.3em;\n  margin-top: -0.3em;\n}\ndl.citation-list > dt, dl.footnote-list > dt {\n  font-size: 0.8em;\n  display: inline-block;\n  vertical-align: 0.3em;\n  margin-top: -0.3em;\n}\n";
/* 001063 */ export var _html_js_mathjax = '\nMathJax = {\n    tex: {\n        inlineMath: [[\'\\\\(\', \'\\\\)\']],\n        displayMath: [[\'\\\\[\', \'\\\\]\']],\n        processEnvironments: true,\n        processRefs: true,\n\n        // equation numbering on\n        tags: \'ams\'\n    },\n    options: {\n        // all MathJax content is marked with CSS classes\n        // skipHtmlTags: \'body\',\n        // processHtmlClass: \'display-math|inline-math\',\n    },\n    startup: {\n        pageReady: function() {\n            // override the default "typeset everything on the page" behavior to\n            // only typeset whatever we have explicitly marked as math\n            return typesetPageMathPromise();\n        }\n    }\n};\nfunction typesetPageMathPromise()\n{\n    var elements = document.querySelectorAll(\'.display-math, .inline-math\');\n    return MathJax.typesetPromise(elements);\n}\n';
/* 001094 */ export var _html_body_end_js_scripts_mathjax = '\n<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>\n<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>\n';
/* 001102 */ export var get_html_css_global = function (html_fragment_renderer) {
/* 001102 */ 	if (arguments.length) {
/* 001102 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001102 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001102 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001102 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001102 */ 				switch (__attrib0__) {
/* 001102 */ 					case 'html_fragment_renderer': var html_fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 001102 */ 				}
/* 001102 */ 			}
/* 001102 */ 		}
/* 001102 */ 	}
/* 001102 */ 	else {
/* 001102 */ 	}
/* 001103 */ 	return _html_css_global;
/* 001103 */ };
/* 001105 */ export var get_html_css_content = function (html_fragment_renderer) {
/* 001105 */ 	if (arguments.length) {
/* 001105 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001105 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001105 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001105 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001105 */ 				switch (__attrib0__) {
/* 001105 */ 					case 'html_fragment_renderer': var html_fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 001105 */ 				}
/* 001105 */ 			}
/* 001105 */ 		}
/* 001105 */ 	}
/* 001105 */ 	else {
/* 001105 */ 	}
/* 001106 */ 	return _html_css_content;
/* 001106 */ };
/* 001108 */ export var get_html_js = function (html_fragment_renderer) {
/* 001108 */ 	if (arguments.length) {
/* 001108 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001108 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001108 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001108 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001108 */ 				switch (__attrib0__) {
/* 001108 */ 					case 'html_fragment_renderer': var html_fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 001108 */ 				}
/* 001108 */ 			}
/* 001108 */ 		}
/* 001108 */ 	}
/* 001108 */ 	else {
/* 001108 */ 	}
/* 001109 */ 	if (__t__ (html_fragment_renderer.use_mathjax)) {
/* 001110 */ 		return _html_js_mathjax;
/* 001110 */ 	}
/* 001111 */ 	return '';
/* 001111 */ };
/* 001113 */ export var get_html_body_end_js_scripts = function (html_fragment_renderer) {
/* 001113 */ 	if (arguments.length) {
/* 001113 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001113 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001113 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001113 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001113 */ 				switch (__attrib0__) {
/* 001113 */ 					case 'html_fragment_renderer': var html_fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 001113 */ 				}
/* 001113 */ 			}
/* 001113 */ 		}
/* 001113 */ 	}
/* 001113 */ 	else {
/* 001113 */ 	}
/* 001114 */ 	if (__t__ (html_fragment_renderer.use_mathjax)) {
/* 001115 */ 		return _html_body_end_js_scripts_mathjax;
/* 001115 */ 	}
/* 001116 */ 	return '';
/* 001116 */ };
/* 001122 */ export var FragmentRendererInformation =  __class__ ('FragmentRendererInformation', [object], {
/* 001122 */ 	__module__: __name__,
/* 001128 */ 	FragmentRendererClass: HtmlFragmentRenderer,
/* 001131 */ 	get get_style_information () {return function (fragment_renderer) {
/* 001131 */ 		if (arguments.length) {
/* 001131 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001131 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001131 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001131 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001131 */ 					switch (__attrib0__) {
/* 001131 */ 						case 'fragment_renderer': var fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 001131 */ 					}
/* 001131 */ 				}
/* 001131 */ 			}
/* 001131 */ 		}
/* 001131 */ 		else {
/* 001131 */ 		}
/* 001136 */ 		return dict ({'css_global': __call__ (get_html_css_global, null, fragment_renderer), 'css_content': __call__ (get_html_css_content, null, fragment_renderer), 'js': __call__ (get_html_js, null, fragment_renderer), 'body_end_js_scripts': __call__ (get_html_body_end_js_scripts, null, fragment_renderer)});
/* 001136 */ 	};},
/* 001139 */ 	format_name: 'html'
/* 001139 */ });
/* 000006 */ 
//# sourceMappingURL=flm.fragmentrenderer.html.map