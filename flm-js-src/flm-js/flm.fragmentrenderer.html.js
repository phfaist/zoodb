/* 000001 */ // Transcrypt'ed from Python, 2023-08-14 17:27:47
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
/* 000115 */ 	get htmlescape () {return __get__ (this, function (self, value) {
/* 000115 */ 		if (arguments.length) {
/* 000115 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000115 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000115 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000115 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000115 */ 					switch (__attrib0__) {
/* 000115 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000115 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000115 */ 					}
/* 000115 */ 				}
/* 000115 */ 			}
/* 000115 */ 		}
/* 000115 */ 		else {
/* 000115 */ 		}
/* 000116 */ 		var esc = (function () {
/* 000116 */ 			var __accu0__ = html;
/* 000116 */ 			return __call__ (__accu0__.escape, __accu0__, value);
/* 000116 */ 		}) ();
/* 000118 */ 		var esc = (function () {
/* 000118 */ 			var __accu0__ = (function () {
/* 000118 */ 				var __accu1__ = (function () {
/* 000118 */ 					var __accu2__ = (function () {
/* 000118 */ 						var __accu3__ = (function () {
/* 000118 */ 							var __accu4__ = (function () {
/* 000118 */ 								var __accu5__ = (function () {
/* 000118 */ 									var __accu6__ = esc;
/* 000118 */ 									return __call__ (__accu6__.py_replace, __accu6__, '\xa0', '&nbsp;');
/* 000118 */ 								}) ();
/* 000118 */ 								return __call__ (__accu5__.py_replace, __accu5__, '\u200a', '&hairsp;');
/* 000118 */ 							}) ();
/* 000119 */ 							return __call__ (__accu4__.py_replace, __accu4__, '\u2009', '&thinsp;');
/* 000119 */ 						}) ();
/* 000120 */ 						return __call__ (__accu3__.py_replace, __accu3__, '\u2008', '&puncsp;');
/* 000120 */ 					}) ();
/* 000121 */ 					return __call__ (__accu2__.py_replace, __accu2__, '\u2002', '&ensp;');
/* 000121 */ 				}) ();
/* 000122 */ 				return __call__ (__accu1__.py_replace, __accu1__, '\u2003', '&emsp;');
/* 000122 */ 			}) ();
/* 000123 */ 			return __call__ (__accu0__.py_replace, __accu0__, '\u2007', '&numsp;');
/* 000123 */ 		}) ();
/* 000126 */ 		return esc;
/* 000126 */ 	});},
/* 000128 */ 	get htmlescape_double_quoted_attribute_value () {return __get__ (this, function (self, value) {
/* 000128 */ 		if (arguments.length) {
/* 000128 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000128 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000128 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000128 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000128 */ 					switch (__attrib0__) {
/* 000128 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000128 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000128 */ 					}
/* 000128 */ 				}
/* 000128 */ 			}
/* 000128 */ 		}
/* 000128 */ 		else {
/* 000128 */ 		}
/* 000130 */ 		if (__t__ (self.aggressively_escape_html_attributes)) {
/* 000131 */ 			return (function () {
/* 000131 */ 				var __accu0__ = self;
/* 000131 */ 				return __call__ (__accu0__.htmlescape, __accu0__, value);
/* 000131 */ 			}) ();
/* 000131 */ 		}
/* 000141 */ 		var value = (function () {
/* 000141 */ 			var __accu0__ = _rx_html_entity;
/* 000141 */ 			return __call__ (__accu0__.sub, __accu0__, (function __lambda__ (m) {
/* 000141 */ 				if (arguments.length) {
/* 000141 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000141 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000141 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000141 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000141 */ 							switch (__attrib0__) {
/* 000141 */ 								case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000141 */ 							}
/* 000141 */ 						}
/* 000141 */ 					}
/* 000141 */ 				}
/* 000141 */ 				else {
/* 000141 */ 				}
/* 000141 */ 				return __add__ (__add__ ('&amp;', (function () {
/* 000141 */ 					var __accu1__ = m;
/* 000141 */ 					return __call__ (__accu1__.group, __accu1__, 1);
/* 000141 */ 				}) ()), ';');
/* 000141 */ 			}), value);
/* 000141 */ 		}) ();
/* 000143 */ 		var value = (function () {
/* 000143 */ 			var __accu0__ = value;
/* 000143 */ 			return __call__ (__accu0__.py_replace, __accu0__, '"', '&quot;');
/* 000143 */ 		}) ();
/* 000144 */ 		return value;
/* 000144 */ 	});},
/* 000146 */ 	get generate_open_tag () {return __get__ (this, function (self, tagname) {
/* 000146 */ 		var attrs = null;
/* 000146 */ 		var class_names = null;
/* 000146 */ 		var self_close_tag = false;
/* 000146 */ 		if (arguments.length) {
/* 000146 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000146 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000146 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000146 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000146 */ 					switch (__attrib0__) {
/* 000146 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000146 */ 						case 'tagname': var tagname = __allkwargs0__ [__attrib0__]; break;
/* 000146 */ 						case 'attrs': var attrs = __allkwargs0__ [__attrib0__]; break;
/* 000146 */ 						case 'class_names': var class_names = __allkwargs0__ [__attrib0__]; break;
/* 000146 */ 						case 'self_close_tag': var self_close_tag = __allkwargs0__ [__attrib0__]; break;
/* 000146 */ 					}
/* 000146 */ 				}
/* 000146 */ 			}
/* 000146 */ 		}
/* 000146 */ 		else {
/* 000146 */ 		}
/* 000147 */ 		var s = '<{}'.format (tagname);
/* 000148 */ 		if (__t__ (!__t__ ((attrs)))) {
/* 000149 */ 			var attrs = dict ({});
/* 000149 */ 		}
/* 000150 */ 		var attrs = __call__ (dict, null, attrs);
/* 000151 */ 		if (__t__ (__in__ ('class', attrs))) {
/* 000152 */ 			var __except0__ = __call__ (ValueError, null, "generate_open_tag(): set HTML 'class' attribute with class_names=, not with attrs=");
/* 000152 */ 			__except0__.__cause__ = null;
/* 000152 */ 			throw __except0__;
/* 000152 */ 		}
/* 000156 */ 		if (__t__ (class_names)) {
/* 000157 */ 			__setitem__ (attrs, 'class', (function () {
/* 000157 */ 				var __accu0__ = ' ';
/* 000157 */ 				return __call__ (__accu0__.join, __accu0__, class_names);
/* 000157 */ 			}) ());
/* 000157 */ 		}
/* 000158 */ 		if (__t__ (attrs)) {
/* 000159 */ 			var __iterable0__ = (function () {
/* 000159 */ 				var __accu0__ = attrs;
/* 000159 */ 				return __call__ (__accu0__.py_items, __accu0__);
/* 000159 */ 			}) ();
/* 000159 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000159 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000159 */ 				var aname = __left0__ [0];
/* 000159 */ 				var aval = __left0__ [1];
/* 000160 */ 				var s = __call__ (__iadd__, null, s, ' {}="{}"'.format (aname, (function () {
/* 000160 */ 					var __accu0__ = self;
/* 000160 */ 					return __call__ (__accu0__.htmlescape_double_quoted_attribute_value, __accu0__, aval);
/* 000160 */ 				}) ()));
/* 000160 */ 			}
/* 000160 */ 		}
/* 000161 */ 		if (__t__ (self_close_tag)) {
/* 000162 */ 			var s = __call__ (__iadd__, null, s, '/>');
/* 000162 */ 		}
/* 000163 */ 		else {
/* 000164 */ 			var s = __call__ (__iadd__, null, s, '>');
/* 000164 */ 		}
/* 000165 */ 		return s;
/* 000165 */ 	});},
/* 000167 */ 	get wrap_in_tag () {return __get__ (this, function (self, tagname, content_html) {
/* 000167 */ 		var attrs = null;
/* 000167 */ 		var class_names = null;
/* 000167 */ 		if (arguments.length) {
/* 000167 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000167 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000167 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000167 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000167 */ 					switch (__attrib0__) {
/* 000167 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000167 */ 						case 'tagname': var tagname = __allkwargs0__ [__attrib0__]; break;
/* 000167 */ 						case 'content_html': var content_html = __allkwargs0__ [__attrib0__]; break;
/* 000167 */ 						case 'attrs': var attrs = __allkwargs0__ [__attrib0__]; break;
/* 000167 */ 						case 'class_names': var class_names = __allkwargs0__ [__attrib0__]; break;
/* 000167 */ 					}
/* 000167 */ 				}
/* 000167 */ 			}
/* 000167 */ 		}
/* 000167 */ 		else {
/* 000167 */ 		}
/* 000169 */ 		var s = (function () {
/* 000169 */ 			var __accu0__ = self;
/* 000169 */ 			return __call__ (__accu0__.generate_open_tag, __accu0__, tagname, __kwargtrans__ ({attrs: attrs, class_names: class_names}));
/* 000169 */ 		}) ();
/* 000170 */ 		var s = __call__ (__iadd__, null, s, __call__ (str, null, content_html));
/* 000171 */ 		var s = __call__ (__iadd__, null, s, '</{}>'.format (tagname));
/* 000172 */ 		return s;
/* 000172 */ 	});},
/* 000174 */ 	get wrap_in_link () {return __get__ (this, function (self, display_html, target_href) {
/* 000174 */ 		var class_names = null;
/* 000174 */ 		if (arguments.length) {
/* 000174 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000174 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000174 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000174 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000174 */ 					switch (__attrib0__) {
/* 000174 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000174 */ 						case 'display_html': var display_html = __allkwargs0__ [__attrib0__]; break;
/* 000174 */ 						case 'target_href': var target_href = __allkwargs0__ [__attrib0__]; break;
/* 000174 */ 						case 'class_names': var class_names = __allkwargs0__ [__attrib0__]; break;
/* 000174 */ 					}
/* 000174 */ 				}
/* 000174 */ 			}
/* 000174 */ 		}
/* 000174 */ 		else {
/* 000174 */ 		}
/* 000175 */ 		if (__t__ (!__t__ ((target_href)))) {
/* 000176 */ 			var target_href = '#';
/* 000176 */ 		}
/* 000177 */ 		var attrs = dict ({'href': target_href});
/* 000180 */ 		if (__t__ (__call__ (callable, null, self.use_link_target_blank))) {
/* 000181 */ 			if (__t__ ((function () {
/* 000181 */ 				var __accu0__ = self;
/* 000181 */ 				return __call__ (__accu0__.use_link_target_blank, __accu0__, target_href);
/* 000181 */ 			}) ())) {
/* 000182 */ 				__setitem__ (attrs, 'target', '_blank');
/* 000182 */ 			}
/* 000182 */ 		}
/* 000183 */ 		else if (__t__ (__t__ (self.use_link_target_blank) && !__t__ (((function () {
/* 000183 */ 			var __accu0__ = target_href;
/* 000183 */ 			return __call__ (__accu0__.startswith, __accu0__, '#');
/* 000183 */ 		}) ())))) {
/* 000184 */ 			__setitem__ (attrs, 'target', '_blank');
/* 000184 */ 		}
/* 000185 */ 		return (function () {
/* 000185 */ 			var __accu0__ = self;
/* 000185 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'a', display_html, __kwargtrans__ ({attrs: attrs, class_names: class_names}));
/* 000185 */ 		}) ();
/* 000185 */ 	});},
/* 000194 */ 	get render_build_paragraph () {return __get__ (this, function (self, nodelist, render_context) {
/* 000194 */ 		if (arguments.length) {
/* 000194 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000194 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000194 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000194 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000194 */ 					switch (__attrib0__) {
/* 000194 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000194 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000194 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000194 */ 					}
/* 000194 */ 				}
/* 000194 */ 			}
/* 000194 */ 		}
/* 000194 */ 		else {
/* 000194 */ 		}
/* 000197 */ 		return __add__ (__add__ ('<p>', (function () {
/* 000197 */ 			var __accu0__ = self;
/* 000197 */ 			return __call__ (__accu0__.render_inline_content, __accu0__, nodelist, render_context);
/* 000197 */ 		}) ()), '</p>');
/* 000197 */ 	});},
/* 000201 */ 	get render_inline_content () {return __get__ (this, function (self, nodelist, render_context) {
/* 000201 */ 		if (arguments.length) {
/* 000201 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000201 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000201 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000201 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000201 */ 					switch (__attrib0__) {
/* 000201 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000201 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000201 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000201 */ 					}
/* 000201 */ 				}
/* 000201 */ 			}
/* 000201 */ 		}
/* 000201 */ 		else {
/* 000201 */ 		}
/* 000202 */ 		return (function () {
/* 000202 */ 			var __accu0__ = self;
/* 000202 */ 			return __call__ (__accu0__.render_join, __accu0__, (function () {
/* 000202 */ 				var __accu1__ = [];
/* 000203 */ 				var __iterable0__ = nodelist;
/* 000203 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000203 */ 					var n = __getitem__ (__iterable0__, __index0__);
/* 000203 */ 					(function () {
/* 000203 */ 						var __accu2__ = __accu1__;
/* 000203 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000203 */ 							var __accu3__ = self;
/* 000203 */ 							return __call__ (__accu3__.render_node, __accu3__, n, render_context);
/* 000203 */ 						}) ());
/* 000203 */ 					}) ();
/* 000203 */ 				}
/* 000203 */ 				return __accu1__;
/* 000203 */ 			}) (), render_context);
/* 000203 */ 		}) ();
/* 000203 */ 	});},
/* 000207 */ 	get render_join () {return __get__ (this, function (self, content_list, render_context) {
/* 000207 */ 		if (arguments.length) {
/* 000207 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000207 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000207 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000207 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000207 */ 					switch (__attrib0__) {
/* 000207 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000207 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000207 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000207 */ 					}
/* 000207 */ 				}
/* 000207 */ 			}
/* 000207 */ 		}
/* 000207 */ 		else {
/* 000207 */ 		}
/* 000213 */ 		return (function () {
/* 000213 */ 			var __accu0__ = '';
/* 000213 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000213 */ 				var __accu1__ = [];
/* 000213 */ 				var __iterable0__ = content_list;
/* 000213 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000213 */ 					var s = __getitem__ (__iterable0__, __index0__);
/* 000213 */ 					(function () {
/* 000213 */ 						var __accu2__ = __accu1__;
/* 000213 */ 						return __call__ (__accu2__.append, __accu2__, __call__ (str, null, s));
/* 000213 */ 					}) ();
/* 000213 */ 				}
/* 000213 */ 				return __accu1__;
/* 000213 */ 			}) ());
/* 000213 */ 		}) ();
/* 000213 */ 	});},
/* 000215 */ 	get render_join_blocks () {return __get__ (this, function (self, content_list, render_context) {
/* 000215 */ 		if (arguments.length) {
/* 000215 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000215 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000215 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000215 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000215 */ 					switch (__attrib0__) {
/* 000215 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000215 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000215 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000215 */ 					}
/* 000215 */ 				}
/* 000215 */ 			}
/* 000215 */ 		}
/* 000215 */ 		else {
/* 000215 */ 		}
/* 000223 */ 		return (function () {
/* 000223 */ 			var __accu0__ = self.html_blocks_joiner;
/* 000223 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000223 */ 				var __accu1__ = [];
/* 000224 */ 				var __iterable0__ = content_list;
/* 000224 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000224 */ 					var c = __getitem__ (__iterable0__, __index0__);
/* 000224 */ 					if (__t__ (__t__ (c !== null) && __call__ (len, null, c))) {
/* 000224 */ 						(function () {
/* 000224 */ 							var __accu2__ = __accu1__;
/* 000224 */ 							return __call__ (__accu2__.append, __accu2__, c);
/* 000224 */ 						}) ();
/* 000224 */ 					}
/* 000224 */ 				}
/* 000224 */ 				return __accu1__;
/* 000224 */ 			}) ());
/* 000224 */ 		}) ();
/* 000224 */ 	});},
/* 000230 */ 	get render_value () {return __get__ (this, function (self, value, render_context) {
/* 000230 */ 		if (arguments.length) {
/* 000230 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000230 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000230 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000230 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000230 */ 					switch (__attrib0__) {
/* 000230 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000230 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000230 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000230 */ 					}
/* 000230 */ 				}
/* 000230 */ 			}
/* 000230 */ 		}
/* 000230 */ 		else {
/* 000230 */ 		}
/* 000231 */ 		return (function () {
/* 000231 */ 			var __accu0__ = self;
/* 000231 */ 			return __call__ (__accu0__.htmlescape, __accu0__, value);
/* 000231 */ 		}) ();
/* 000231 */ 	});},
/* 000233 */ 	get render_empty_error_placeholder () {return __get__ (this, function (self, debug_str, render_context) {
/* 000233 */ 		if (arguments.length) {
/* 000233 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000233 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000233 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000233 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000233 */ 					switch (__attrib0__) {
/* 000233 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000233 */ 						case 'debug_str': var debug_str = __allkwargs0__ [__attrib0__]; break;
/* 000233 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000233 */ 					}
/* 000233 */ 				}
/* 000233 */ 			}
/* 000233 */ 		}
/* 000233 */ 		else {
/* 000233 */ 		}
/* 000234 */ 		var debug_str_safe = (function () {
/* 000234 */ 			var __accu0__ = debug_str;
/* 000234 */ 			return __call__ (__accu0__.py_replace, __accu0__, '--', '- - ');
/* 000234 */ 		}) ();
/* 000235 */ 		return '<span class="empty-error-placeholder"><!-- {} -->(?)</span>'.format (debug_str_safe);
/* 000235 */ 	});},
/* 000237 */ 	get render_nothing () {return __get__ (this, function (self, render_context, annotations) {
/* 000237 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000237 */ 			var annotations = null;
/* 000237 */ 		};
/* 000237 */ 		if (arguments.length) {
/* 000237 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000237 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000237 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000237 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000237 */ 					switch (__attrib0__) {
/* 000237 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000237 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000237 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000237 */ 					}
/* 000237 */ 				}
/* 000237 */ 			}
/* 000237 */ 		}
/* 000237 */ 		else {
/* 000237 */ 		}
/* 000238 */ 		if (__t__ (!__t__ ((self.render_nothing_as_comment_with_annotations)))) {
/* 000239 */ 			return '';
/* 000239 */ 		}
/* 000240 */ 		if (__t__ (!__t__ ((annotations)))) {
/* 000241 */ 			var annotations = [];
/* 000241 */ 		}
/* 000242 */ 		var annotations = (function () {
/* 000242 */ 			var __accu0__ = [];
/* 000242 */ 			var __iterable0__ = annotations;
/* 000242 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000242 */ 				var a = __getitem__ (__iterable0__, __index0__);
/* 000242 */ 				(function () {
/* 000242 */ 					var __accu1__ = __accu0__;
/* 000242 */ 					return __call__ (__accu1__.append, __accu1__, (function () {
/* 000242 */ 						var __accu2__ = a;
/* 000242 */ 						return __call__ (__accu2__.py_replace, __accu2__, '--', '- - ');
/* 000242 */ 					}) ());
/* 000242 */ 				}) ();
/* 000242 */ 			}
/* 000242 */ 			return __accu0__;
/* 000242 */ 		}) ();
/* 000243 */ 		return (function () {
/* 000243 */ 			var __accu0__ = '<!-- {} -->';
/* 000243 */ 			return __call__ (__accu0__.format, __accu0__, (function () {
/* 000243 */ 				var __accu1__ = ' ';
/* 000243 */ 				return __call__ (__accu1__.join, __accu1__, annotations);
/* 000243 */ 			}) ());
/* 000243 */ 		}) ();
/* 000243 */ 	});},
/* 000245 */ 	verbatim_highlight_spaces: false,
/* 000246 */ 	verbatim_protect_backslashes: true,
/* 000248 */ 	get render_verbatim () {return __get__ (this, function (self, value, render_context) {
/* 000248 */ 		var is_block_level = false;
/* 000248 */ 		var annotations = null;
/* 000248 */ 		var target_id = null;
/* 000248 */ 		if (arguments.length) {
/* 000248 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000248 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000248 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000248 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000248 */ 					switch (__attrib0__) {
/* 000248 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000248 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000248 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000248 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000248 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000248 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000248 */ 					}
/* 000248 */ 				}
/* 000248 */ 			}
/* 000248 */ 		}
/* 000248 */ 		else {
/* 000248 */ 		}
/* 000250 */ 		var attrs = dict ({});
/* 000251 */ 		if (__t__ (target_id !== null)) {
/* 000252 */ 			__setitem__ (attrs, 'id', target_id);
/* 000252 */ 		}
/* 000253 */ 		var escaped = (function () {
/* 000253 */ 			var __accu0__ = self;
/* 000253 */ 			return __call__ (__accu0__.htmlescape, __accu0__, value);
/* 000253 */ 		}) ();
/* 000254 */ 		if (__t__ (self.verbatim_protect_backslashes)) {
/* 000256 */ 			var escaped = (function () {
/* 000256 */ 				var __accu0__ = escaped;
/* 000256 */ 				return __call__ (__accu0__.py_replace, __accu0__, '\\', '<span>\\</span>');
/* 000256 */ 			}) ();
/* 000256 */ 		}
/* 000257 */ 		if (__t__ (self.verbatim_highlight_spaces)) {
/* 000258 */ 			var escaped = (function () {
/* 000258 */ 				var __accu0__ = escaped;
/* 000258 */ 				return __call__ (__accu0__.py_replace, __accu0__, ' ', '<span class="verbatimspace">&nbsp;</span>');
/* 000258 */ 			}) ();
/* 000258 */ 		}
/* 000261 */ 		var tag = 'span';
/* 000262 */ 		var __iterable0__ = annotations;
/* 000262 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000262 */ 			var annotation = __getitem__ (__iterable0__, __index0__);
/* 000263 */ 			if (__t__ (__in__ (annotation, tuple (['verbatimcode-environment'])))) {
/* 000265 */ 				var tag = 'div';
/* 000265 */ 			}
/* 000265 */ 		}
/* 000266 */ 		return (function () {
/* 000266 */ 			var __accu0__ = self;
/* 000266 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, tag, escaped, __kwargtrans__ ({class_names: (__t__ (annotations) ? annotations : ['verbatimtext']), attrs: attrs}));
/* 000266 */ 		}) ();
/* 000266 */ 	});},
/* 000273 */ 	get render_math_content () {return __get__ (this, function (self, delimiters, nodelist, render_context, displaytype, environmentname, target_id) {
/* 000273 */ 		if (typeof environmentname == 'undefined' || (environmentname != null && environmentname.hasOwnProperty ("__kwargtrans__"))) {;
/* 000273 */ 			var environmentname = null;
/* 000273 */ 		};
/* 000273 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000273 */ 			var target_id = null;
/* 000273 */ 		};
/* 000273 */ 		if (arguments.length) {
/* 000273 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000273 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000273 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000273 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000273 */ 					switch (__attrib0__) {
/* 000273 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000273 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000273 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000273 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000273 */ 						case 'displaytype': var displaytype = __allkwargs0__ [__attrib0__]; break;
/* 000273 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000273 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000273 */ 					}
/* 000273 */ 				}
/* 000273 */ 			}
/* 000273 */ 		}
/* 000273 */ 		else {
/* 000273 */ 		}
/* 000281 */ 		if (__t__ (!__t__ ((self.use_mathjax)))) {
/* 000282 */ 			(function () {
/* 000282 */ 				var __accu0__ = logger;
/* 000282 */ 				return __call__ (__accu0__.warning, __accu0__, 'called HtmlFragmentRenderer.render_math_content() but self.use_mathjax is not set. Your math will probably not render correctly.');
/* 000282 */ 			}) ();
/* 000282 */ 		}
/* 000288 */ 		var class_names = ['{}-math'.format (displaytype)];
/* 000289 */ 		if (__t__ (environmentname !== null)) {
/* 000290 */ 			(function () {
/* 000290 */ 				var __accu0__ = class_names;
/* 000290 */ 				return __call__ (__accu0__.append, __accu0__, 'env-{}'.format ((function () {
/* 000290 */ 					var __accu1__ = environmentname;
/* 000290 */ 					return __call__ (__accu1__.py_replace, __accu1__, '*', '-star');
/* 000290 */ 				}) ()));
/* 000290 */ 			}) ();
/* 000290 */ 		}
/* 000293 */ 		var content_html = (function () {
/* 000293 */ 			var __accu0__ = self;
/* 000293 */ 			return __call__ (__accu0__.htmlescape, __accu0__, __add__ (__add__ (__getitem__ (delimiters, 0), (function () {
/* 000293 */ 				var __accu1__ = nodelist;
/* 000293 */ 				return __call__ (__accu1__.latex_verbatim, __accu1__);
/* 000293 */ 			}) ()), __getitem__ (delimiters, 1)));
/* 000293 */ 		}) ();
/* 000296 */ 		var attrs = dict ({});
/* 000297 */ 		if (__t__ (target_id !== null)) {
/* 000298 */ 			__setitem__ (attrs, 'id', target_id);
/* 000298 */ 		}
/* 000300 */ 		if (__t__ (__eq__ (displaytype, 'display'))) {
/* 000302 */ 			return (function () {
/* 000302 */ 				var __accu0__ = self;
/* 000302 */ 				return __call__ (__accu0__.wrap_in_tag, __accu0__, 'span', content_html, __kwargtrans__ ({class_names: class_names, attrs: attrs}));
/* 000302 */ 			}) ();
/* 000302 */ 		}
/* 000309 */ 		return (function () {
/* 000309 */ 			var __accu0__ = self;
/* 000309 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'span', content_html, __kwargtrans__ ({class_names: class_names, attrs: attrs}));
/* 000309 */ 		}) ();
/* 000309 */ 	});},
/* 000316 */ 	get render_text_format () {return __get__ (this, function (self, text_formats, nodelist, render_context) {
/* 000316 */ 		if (arguments.length) {
/* 000316 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000316 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000316 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000316 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000316 */ 					switch (__attrib0__) {
/* 000316 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000316 */ 						case 'text_formats': var text_formats = __allkwargs0__ [__attrib0__]; break;
/* 000316 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000316 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000316 */ 					}
/* 000316 */ 				}
/* 000316 */ 			}
/* 000316 */ 		}
/* 000316 */ 		else {
/* 000316 */ 		}
/* 000318 */ 		var content = (function () {
/* 000318 */ 			var __accu0__ = self;
/* 000318 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, nodelist, render_context, __kwargtrans__ ({is_block_level: false}));
/* 000318 */ 		}) ();
/* 000324 */ 		return (function () {
/* 000324 */ 			var __accu0__ = self;
/* 000324 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'span', content, __kwargtrans__ ({class_names: text_formats}));
/* 000324 */ 		}) ();
/* 000324 */ 	});},
/* 000330 */ 	get render_semantic_span () {return __get__ (this, function (self, content, role, render_context) {
/* 000330 */ 		var annotations = null;
/* 000330 */ 		var target_id = null;
/* 000330 */ 		if (arguments.length) {
/* 000330 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000330 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000330 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000330 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000330 */ 					switch (__attrib0__) {
/* 000330 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000330 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000330 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000330 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000330 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000330 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000330 */ 					}
/* 000330 */ 				}
/* 000330 */ 			}
/* 000330 */ 		}
/* 000330 */ 		else {
/* 000330 */ 		}
/* 000332 */ 		var attrs = dict ({});
/* 000333 */ 		if (__t__ (target_id !== null)) {
/* 000334 */ 			__setitem__ (attrs, 'id', target_id);
/* 000334 */ 		}
/* 000336 */ 		var annotations = __call__ (list, null, (__t__ (annotations !== null) ? annotations : []));
/* 000337 */ 		if (__t__ (__in__ (role, annotations))) {
/* 000338 */ 			(function () {
/* 000338 */ 				var __accu0__ = annotations;
/* 000338 */ 				return __call__ (__accu0__.remove, __accu0__, role);
/* 000338 */ 			}) ();
/* 000338 */ 		}
/* 000340 */ 		return (function () {
/* 000340 */ 			var __accu0__ = self;
/* 000340 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'span', content, __kwargtrans__ ({attrs: attrs, class_names: __add__ ([role], annotations)}));
/* 000340 */ 		}) ();
/* 000340 */ 	});},
/* 000348 */ 	get render_semantic_block () {return __get__ (this, function (self, content, role, render_context) {
/* 000348 */ 		var annotations = null;
/* 000348 */ 		var target_id = null;
/* 000348 */ 		if (arguments.length) {
/* 000348 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000348 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000348 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000348 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000348 */ 					switch (__attrib0__) {
/* 000348 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000348 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000348 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000348 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000348 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000348 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000348 */ 					}
/* 000348 */ 				}
/* 000348 */ 			}
/* 000348 */ 		}
/* 000348 */ 		else {
/* 000348 */ 		}
/* 000350 */ 		var attrs = dict ({});
/* 000351 */ 		if (__t__ (target_id !== null)) {
/* 000352 */ 			__setitem__ (attrs, 'id', target_id);
/* 000352 */ 		}
/* 000354 */ 		var annotations = __call__ (list, null, (__t__ (annotations !== null) ? annotations : []));
/* 000355 */ 		if (__t__ (__in__ (role, annotations))) {
/* 000356 */ 			(function () {
/* 000356 */ 				var __accu0__ = annotations;
/* 000356 */ 				return __call__ (__accu0__.remove, __accu0__, role);
/* 000356 */ 			}) ();
/* 000356 */ 		}
/* 000358 */ 		if (__t__ (__in__ (role, tuple (['section', 'main', 'article'])))) {
/* 000359 */ 			return (function () {
/* 000359 */ 				var __accu0__ = self;
/* 000359 */ 				return __call__ (__accu0__.wrap_in_tag, __accu0__, role, content, __kwargtrans__ ({attrs: attrs, class_names: annotations}));
/* 000359 */ 			}) ();
/* 000359 */ 		}
/* 000365 */ 		return (function () {
/* 000365 */ 			var __accu0__ = self;
/* 000365 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'div', content, __kwargtrans__ ({attrs: attrs, class_names: __add__ ([role], annotations)}));
/* 000365 */ 		}) ();
/* 000365 */ 	});},
/* 000373 */ 	get render_enumeration () {return __get__ (this, function (self, iter_items_nodelists, counter_formatter, render_context) {
/* 000373 */ 		var target_id_generator = null;
/* 000373 */ 		var annotations = null;
/* 000373 */ 		var nested_depth = null;
/* 000373 */ 		if (arguments.length) {
/* 000373 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000373 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000373 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000373 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000373 */ 					switch (__attrib0__) {
/* 000373 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000373 */ 						case 'iter_items_nodelists': var iter_items_nodelists = __allkwargs0__ [__attrib0__]; break;
/* 000373 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000373 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000373 */ 						case 'target_id_generator': var target_id_generator = __allkwargs0__ [__attrib0__]; break;
/* 000373 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000373 */ 						case 'nested_depth': var nested_depth = __allkwargs0__ [__attrib0__]; break;
/* 000373 */ 					}
/* 000373 */ 				}
/* 000373 */ 			}
/* 000373 */ 		}
/* 000373 */ 		else {
/* 000373 */ 		}
/* 000385 */ 		var s_items = [];
/* 000387 */ 		var __iterable0__ = __call__ (enumerate, null, iter_items_nodelists);
/* 000387 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000387 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000387 */ 			var j = __left0__ [0];
/* 000387 */ 			var item_content_nodelist = __left0__ [1];
/* 000389 */ 			var use_block_level = true;
/* 000390 */ 			if (__t__ (item_content_nodelist.parsing_state.is_block_level === false)) {
/* 000393 */ 				var use_block_level = false;
/* 000393 */ 			}
/* 000395 */ 			// pass;
/* 000399 */ 			// pass;
/* 000403 */ 			var item_content = (function () {
/* 000403 */ 				var __accu0__ = self;
/* 000403 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, item_content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: use_block_level}));
/* 000403 */ 			}) ();
/* 000409 */ 			var enumno = __add__ (1, j);
/* 000411 */ 			var tag_nodelist = __call__ (counter_formatter, null, enumno);
/* 000412 */ 			if (__t__ (__call__ (isinstance, null, tag_nodelist, str))) {
/* 000413 */ 				var tag_content = (function () {
/* 000413 */ 					var __accu0__ = self;
/* 000413 */ 					return __call__ (__accu0__.render_value, __accu0__, tag_nodelist, render_context);
/* 000413 */ 				}) ();
/* 000413 */ 			}
/* 000414 */ 			else {
/* 000415 */ 				var tag_content = (function () {
/* 000415 */ 					var __accu0__ = self;
/* 000415 */ 					return __call__ (__accu0__.render_nodelist, __accu0__, tag_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000415 */ 				}) ();
/* 000415 */ 			}
/* 000421 */ 			var dtattrs = dict ({});
/* 000422 */ 			if (__t__ (target_id_generator !== null)) {
/* 000423 */ 				__setitem__ (dtattrs, 'id', __call__ (target_id_generator, null, enumno));
/* 000423 */ 			}
/* 000425 */ 			(function () {
/* 000425 */ 				var __accu0__ = s_items;
/* 000426 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000426 */ 					var __accu1__ = self;
/* 000427 */ 					return __call__ (__accu1__.render_join, __accu1__, [(function () {
/* 000427 */ 						var __accu2__ = self;
/* 000427 */ 						return __call__ (__accu2__.wrap_in_tag, __accu2__, 'dt', tag_content, __kwargtrans__ ({attrs: dtattrs}));
/* 000432 */ 					}) (), (function () {
/* 000432 */ 						var __accu2__ = self;
/* 000432 */ 						return __call__ (__accu2__.wrap_in_tag, __accu2__, 'dd', item_content);
/* 000432 */ 					}) ()], render_context);
/* 000432 */ 				}) ());
/* 000432 */ 			}) ();
/* 000432 */ 		}
/* 000439 */ 		return (function () {
/* 000439 */ 			var __accu0__ = self;
/* 000441 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'dl', (function () {
/* 000441 */ 				var __accu1__ = self;
/* 000441 */ 				return __call__ (__accu1__.render_join, __accu1__, s_items, render_context);
/* 000441 */ 			}) (), __kwargtrans__ ({class_names: __add__ (['enumeration'], (__t__ (annotations) ? annotations : []))}));
/* 000441 */ 		}) ();
/* 000441 */ 	});},
/* 000446 */ 	get render_heading () {return __get__ (this, function (self, heading_nodelist, render_context) {
/* 000446 */ 		var heading_level = 1;
/* 000446 */ 		var target_id = null;
/* 000446 */ 		var inline_heading = false;
/* 000446 */ 		var annotations = null;
/* 000446 */ 		if (arguments.length) {
/* 000446 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000446 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000446 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000446 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000446 */ 					switch (__attrib0__) {
/* 000446 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000446 */ 						case 'heading_nodelist': var heading_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000446 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000446 */ 						case 'heading_level': var heading_level = __allkwargs0__ [__attrib0__]; break;
/* 000446 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000446 */ 						case 'inline_heading': var inline_heading = __allkwargs0__ [__attrib0__]; break;
/* 000446 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000446 */ 					}
/* 000446 */ 				}
/* 000446 */ 			}
/* 000446 */ 		}
/* 000446 */ 		else {
/* 000446 */ 		}
/* 000450 */ 		if (__t__ (!__in__ (heading_level, self.heading_tags_by_level))) {
/* 000452 */ 			var __except0__ = __call__ (ValueError, null, 'Bad heading_level={}, expected one of {}'.format (heading_level, __call__ (list, null, (function () {
/* 000452 */ 				var __accu0__ = self.heading_tags_by_level;
/* 000452 */ 				return __call__ (__accu0__.py_keys, __accu0__);
/* 000452 */ 			}) ())));
/* 000452 */ 			__except0__.__cause__ = null;
/* 000452 */ 			throw __except0__;
/* 000452 */ 		}
/* 000454 */ 		var annot = (__t__ (annotations) ? __call__ (list, null, annotations) : []);
/* 000455 */ 		(function () {
/* 000455 */ 			var __accu0__ = annot;
/* 000455 */ 			return __call__ (__accu0__.append, __accu0__, 'heading-level-{}'.format (heading_level));
/* 000455 */ 		}) ();
/* 000456 */ 		if (__t__ (inline_heading)) {
/* 000457 */ 			(function () {
/* 000457 */ 				var __accu0__ = annot;
/* 000457 */ 				return __call__ (__accu0__.append, __accu0__, 'heading-inline');
/* 000457 */ 			}) ();
/* 000457 */ 		}
/* 000459 */ 		var attrs = dict ({});
/* 000460 */ 		if (__t__ (target_id !== null)) {
/* 000461 */ 			__setitem__ (attrs, 'id', target_id);
/* 000461 */ 		}
/* 000463 */ 		var content = (function () {
/* 000463 */ 			var __accu0__ = self;
/* 000465 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, __getitem__ (self.heading_tags_by_level, heading_level), (function () {
/* 000465 */ 				var __accu1__ = self;
/* 000465 */ 				return __call__ (__accu1__.render_inline_content, __accu1__, heading_nodelist, render_context);
/* 000465 */ 			}) (), __kwargtrans__ ({class_names: annot, attrs: attrs}));
/* 000465 */ 		}) ();
/* 000469 */ 		if (__t__ (__t__ (inline_heading) && self.inline_heading_add_space)) {
/* 000470 */ 			var content = __call__ (__iadd__, null, content, ' ');
/* 000470 */ 		}
/* 000471 */ 		// pass;
/* 000475 */ 		return content;
/* 000475 */ 	});},
/* 000477 */ 	get render_link () {return __get__ (this, function (self, ref_type, href, display_nodelist, render_context, annotations) {
/* 000477 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000477 */ 			var annotations = null;
/* 000477 */ 		};
/* 000477 */ 		if (arguments.length) {
/* 000477 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000477 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000477 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000477 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000477 */ 					switch (__attrib0__) {
/* 000477 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000477 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000477 */ 						case 'href': var href = __allkwargs0__ [__attrib0__]; break;
/* 000477 */ 						case 'display_nodelist': var display_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000477 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000477 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000477 */ 					}
/* 000477 */ 				}
/* 000477 */ 			}
/* 000477 */ 		}
/* 000477 */ 		else {
/* 000477 */ 		}
/* 000478 */ 		var display_content = (function () {
/* 000478 */ 			var __accu0__ = self;
/* 000478 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, display_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000478 */ 		}) ();
/* 000483 */ 		if (__t__ (__t__ (!__t__ ((href))) && !__t__ ((self.render_links_with_empty_href)))) {
/* 000484 */ 			return display_content;
/* 000484 */ 		}
/* 000486 */ 		return (function () {
/* 000486 */ 			var __accu0__ = self;
/* 000486 */ 			return __call__ (__accu0__.wrap_in_link, __accu0__, display_content, href, __kwargtrans__ ({class_names: __add__ (['href-{}'.format (ref_type)], (__t__ (annotations) ? annotations : []))}));
/* 000486 */ 		}) ();
/* 000486 */ 	});},
/* 000493 */ 	get render_delayed_marker () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000493 */ 		if (arguments.length) {
/* 000493 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000493 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000493 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000493 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000493 */ 					switch (__attrib0__) {
/* 000493 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000493 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000493 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000493 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000493 */ 					}
/* 000493 */ 				}
/* 000493 */ 			}
/* 000493 */ 		}
/* 000493 */ 		else {
/* 000493 */ 		}
/* 000494 */ 		return '<FLM:DLYD:{}/>'.format (delayed_key);
/* 000494 */ 	});},
/* 000496 */ 	get render_delayed_dummy_placeholder () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000496 */ 		if (arguments.length) {
/* 000496 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000496 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000496 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000496 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000496 */ 					switch (__attrib0__) {
/* 000496 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000496 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000496 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000496 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000496 */ 					}
/* 000496 */ 				}
/* 000496 */ 			}
/* 000496 */ 		}
/* 000496 */ 		else {
/* 000496 */ 		}
/* 000497 */ 		return '<!-- delayed:{} -->'.format (delayed_key);
/* 000497 */ 	});},
/* 000499 */ 	get replace_delayed_markers_with_final_values () {return __get__ (this, function (self, content, delayed_values) {
/* 000499 */ 		if (arguments.length) {
/* 000499 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000499 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000499 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000499 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000499 */ 					switch (__attrib0__) {
/* 000499 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000499 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000499 */ 						case 'delayed_values': var delayed_values = __allkwargs0__ [__attrib0__]; break;
/* 000499 */ 					}
/* 000499 */ 				}
/* 000499 */ 			}
/* 000499 */ 		}
/* 000499 */ 		else {
/* 000499 */ 		}
/* 000500 */ 		return (function () {
/* 000500 */ 			var __accu0__ = _rx_delayed_markers;
/* 000500 */ 			return __call__ (__accu0__.sub, __accu0__, (function __lambda__ (m) {
/* 000500 */ 				if (arguments.length) {
/* 000500 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000500 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000500 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000500 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000500 */ 							switch (__attrib0__) {
/* 000500 */ 								case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000500 */ 							}
/* 000500 */ 						}
/* 000500 */ 					}
/* 000500 */ 				}
/* 000500 */ 				else {
/* 000500 */ 				}
/* 000501 */ 				return __getitem__ (delayed_values, __call__ (int, null, (function () {
/* 000501 */ 					var __accu1__ = m;
/* 000501 */ 					return __call__ (__accu1__.group, __accu1__, 'key');
/* 000501 */ 				}) ()));
/* 000501 */ 			}), content);
/* 000501 */ 		}) ();
/* 000501 */ 	});},
/* 000508 */ 	get render_float () {return __get__ (this, function (self, float_instance, render_context) {
/* 000508 */ 		if (arguments.length) {
/* 000508 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000508 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000508 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000508 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000508 */ 					switch (__attrib0__) {
/* 000508 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000508 */ 						case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000508 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000508 */ 					}
/* 000508 */ 				}
/* 000508 */ 			}
/* 000508 */ 		}
/* 000508 */ 		else {
/* 000508 */ 		}
/* 000511 */ 		var figattrs = dict ({});
/* 000513 */ 		if (__t__ (float_instance.target_id !== null)) {
/* 000514 */ 			__setitem__ (figattrs, 'id', float_instance.target_id);
/* 000514 */ 		}
/* 000516 */ 		var full_figcaption_rendered_list = [];
/* 000517 */ 		if (__t__ (float_instance.number !== null)) {
/* 000519 */ 			(function () {
/* 000519 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000520 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000520 */ 					var __accu1__ = self;
/* 000522 */ 					return __call__ (__accu1__.wrap_in_tag, __accu1__, 'span', (function () {
/* 000522 */ 						var __accu2__ = self;
/* 000523 */ 						return __call__ (__accu2__.render_join, __accu2__, [(function () {
/* 000523 */ 							var __accu3__ = self;
/* 000523 */ 							return __call__ (__accu3__.render_value, __accu3__, float_instance.float_type_info.float_caption_name, render_context);
/* 000528 */ 						}) (), '&nbsp;', (function () {
/* 000528 */ 							var __accu3__ = self;
/* 000528 */ 							return __call__ (__accu3__.render_nodelist, __accu3__, float_instance.formatted_counter_value_flm.nodes, __kwargtrans__ ({render_context: render_context}));
/* 000528 */ 						}) ()], render_context);
/* 000528 */ 					}) (), __kwargtrans__ ({class_names: ['float-number']}));
/* 000528 */ 				}) ());
/* 000528 */ 			}) ();
/* 000528 */ 		}
/* 000536 */ 		else if (__t__ (float_instance.caption_nodelist)) {
/* 000539 */ 			(function () {
/* 000539 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000540 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000540 */ 					var __accu1__ = self;
/* 000542 */ 					return __call__ (__accu1__.wrap_in_tag, __accu1__, 'span', (function () {
/* 000542 */ 						var __accu2__ = self;
/* 000543 */ 						return __call__ (__accu2__.render_join, __accu2__, [(function () {
/* 000543 */ 							var __accu3__ = self;
/* 000543 */ 							return __call__ (__accu3__.render_value, __accu3__, float_instance.float_type_info.float_caption_name, render_context);
/* 000543 */ 						}) ()], render_context);
/* 000543 */ 					}) (), __kwargtrans__ ({class_names: ['float-no-number']}));
/* 000543 */ 				}) ());
/* 000543 */ 			}) ();
/* 000543 */ 		}
/* 000549 */ 		else {
/* 000553 */ 			// pass;
/* 000553 */ 		}
/* 000555 */ 		if (__t__ (float_instance.caption_nodelist)) {
/* 000559 */ 			(function () {
/* 000559 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000559 */ 				return __call__ (__accu0__.append, __accu0__, ': ');
/* 000559 */ 			}) ();
/* 000562 */ 			(function () {
/* 000562 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000563 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000563 */ 					var __accu1__ = self;
/* 000563 */ 					return __call__ (__accu1__.render_nodelist, __accu1__, float_instance.caption_nodelist, __kwargtrans__ ({render_context: render_context}));
/* 000563 */ 				}) ());
/* 000563 */ 			}) ();
/* 000563 */ 		}
/* 000569 */ 		var rendered_float_caption = null;
/* 000570 */ 		if (__t__ (full_figcaption_rendered_list)) {
/* 000571 */ 			var rendered_float_caption = (function () {
/* 000571 */ 				var __accu0__ = self;
/* 000573 */ 				return __call__ (__accu0__.wrap_in_tag, __accu0__, 'figcaption', (function () {
/* 000573 */ 					var __accu1__ = self;
/* 000575 */ 					return __call__ (__accu1__.wrap_in_tag, __accu1__, 'span', (function () {
/* 000575 */ 						var __accu2__ = self;
/* 000575 */ 						return __call__ (__accu2__.render_join, __accu2__, full_figcaption_rendered_list, render_context);
/* 000575 */ 					}) ());
/* 000575 */ 				}) (), __kwargtrans__ ({class_names: ['float-caption-content']}));
/* 000575 */ 			}) ();
/* 000575 */ 		}
/* 000580 */ 		var float_content_block_content = (function () {
/* 000580 */ 			var __accu0__ = self;
/* 000580 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, float_instance.content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: true}));
/* 000580 */ 		}) ();
/* 000585 */ 		var float_content_block = (function () {
/* 000585 */ 			var __accu0__ = self;
/* 000585 */ 			return __call__ (__accu0__.render_semantic_block, __accu0__, float_content_block_content, 'float-contents', __kwargtrans__ ({render_context: render_context}));
/* 000585 */ 		}) ();
/* 000591 */ 		if (__t__ (rendered_float_caption !== null)) {
/* 000592 */ 			var float_content_with_caption = (function () {
/* 000592 */ 				var __accu0__ = self;
/* 000592 */ 				return __call__ (__accu0__.render_join_blocks, __accu0__, [float_content_block, rendered_float_caption], render_context);
/* 000592 */ 			}) ();
/* 000592 */ 		}
/* 000596 */ 		else {
/* 000597 */ 			var float_content_with_caption = float_content_block;
/* 000597 */ 		}
/* 000599 */ 		var full_figure = (function () {
/* 000599 */ 			var __accu0__ = self;
/* 000599 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'figure', float_content_with_caption, __kwargtrans__ ({attrs: figattrs, class_names: ['float', 'float-{}'.format (float_instance.float_type)]}));
/* 000599 */ 		}) ();
/* 000606 */ 		return full_figure;
/* 000606 */ 	});},
/* 000609 */ 	graphics_raster_magnification: 1,
/* 000610 */ 	graphics_vector_magnification: 1,
/* 000612 */ 	get render_graphics_block () {return __get__ (this, function (self, graphics_resource, render_context) {
/* 000612 */ 		if (arguments.length) {
/* 000612 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000612 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000612 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000612 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000612 */ 					switch (__attrib0__) {
/* 000612 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000612 */ 						case 'graphics_resource': var graphics_resource = __allkwargs0__ [__attrib0__]; break;
/* 000612 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000612 */ 					}
/* 000612 */ 				}
/* 000612 */ 			}
/* 000612 */ 		}
/* 000612 */ 		else {
/* 000612 */ 		}
/* 000614 */ 		var imgattrs = dict ({});
/* 000616 */ 		var styparts = [];
/* 000617 */ 		if (__t__ (graphics_resource.physical_dimensions !== null)) {
/* 000619 */ 			var __left0__ = graphics_resource.physical_dimensions;
/* 000619 */ 			var width_pt = __left0__ [0];
/* 000619 */ 			var height_pt = __left0__ [1];
/* 000621 */ 			if (__t__ (__eq__ (graphics_resource.graphics_type, 'raster'))) {
/* 000622 */ 				if (__t__ (width_pt !== null)) {
/* 000623 */ 					var width_pt = __call__ (__imul__, null, width_pt, self.graphics_raster_magnification);
/* 000623 */ 				}
/* 000624 */ 				if (__t__ (height_pt !== null)) {
/* 000625 */ 					var height_pt = __call__ (__imul__, null, height_pt, self.graphics_raster_magnification);
/* 000625 */ 				}
/* 000625 */ 			}
/* 000626 */ 			else if (__t__ (__eq__ (graphics_resource.graphics_type, 'vector'))) {
/* 000627 */ 				if (__t__ (width_pt !== null)) {
/* 000628 */ 					var width_pt = __call__ (__imul__, null, width_pt, self.graphics_vector_magnification);
/* 000628 */ 				}
/* 000629 */ 				if (__t__ (height_pt !== null)) {
/* 000630 */ 					var height_pt = __call__ (__imul__, null, height_pt, self.graphics_vector_magnification);
/* 000630 */ 				}
/* 000630 */ 			}
/* 000632 */ 			if (__t__ (width_pt !== null)) {
/* 000633 */ 				(function () {
/* 000633 */ 					var __accu0__ = styparts;
/* 000633 */ 					return __call__ (__accu0__.append, __accu0__, 'width:{}pt'.format (width_pt));
/* 000633 */ 				}) ();
/* 000633 */ 			}
/* 000634 */ 			if (__t__ (height_pt !== null)) {
/* 000635 */ 				(function () {
/* 000635 */ 					var __accu0__ = styparts;
/* 000635 */ 					return __call__ (__accu0__.append, __accu0__, 'height:{}pt'.format (height_pt));
/* 000635 */ 				}) ();
/* 000635 */ 			}
/* 000635 */ 		}
/* 000637 */ 		if (__t__ (styparts)) {
/* 000638 */ 			__setitem__ (imgattrs, 'style', (function () {
/* 000638 */ 				var __accu0__ = ';';
/* 000638 */ 				return __call__ (__accu0__.join, __accu0__, styparts);
/* 000638 */ 			}) ());
/* 000638 */ 		}
/* 000640 */ 		var src_url = graphics_resource.src_url;
/* 000641 */ 		__setitem__ (imgattrs, 'src', src_url);
/* 000644 */ 		if (__t__ (__t__ (graphics_resource.srcset !== null) && __t__ (graphics_resource.srcset) && __call__ (len, null, graphics_resource.srcset))) {
/* 000646 */ 			var srcset_items = [];
/* 000647 */ 			var __iterable0__ = graphics_resource.srcset;
/* 000647 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000647 */ 				var srcset_info = __getitem__ (__iterable0__, __index0__);
/* 000648 */ 				var ss = __getitem__ (srcset_info, 'source');
/* 000649 */ 				if (__t__ (__in__ ('pixel_density', srcset_info))) {
/* 000650 */ 					var pixel_density = __getitem__ (srcset_info, 'pixel_density');
/* 000651 */ 					var ss = __call__ (__iadd__, null, ss, ' {}x'.format (pixel_density));
/* 000651 */ 				}
/* 000653 */ 				(function () {
/* 000653 */ 					var __accu0__ = srcset_items;
/* 000653 */ 					return __call__ (__accu0__.append, __accu0__, ss);
/* 000653 */ 				}) ();
/* 000653 */ 			}
/* 000655 */ 			__setitem__ (imgattrs, 'srcset', (function () {
/* 000655 */ 				var __accu0__ = ', ';
/* 000655 */ 				return __call__ (__accu0__.join, __accu0__, srcset_items);
/* 000655 */ 			}) ());
/* 000655 */ 		}
/* 000658 */ 		return (function () {
/* 000658 */ 			var __accu0__ = self;
/* 000658 */ 			return __call__ (__accu0__.generate_open_tag, __accu0__, 'img', __kwargtrans__ ({attrs: imgattrs}));
/* 000658 */ 		}) ();
/* 000658 */ 	});},
/* 000661 */ 	get render_cells () {return __get__ (this, function (self, cells_model, render_context, target_id) {
/* 000661 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000661 */ 			var target_id = null;
/* 000661 */ 		};
/* 000661 */ 		if (arguments.length) {
/* 000661 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000661 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000661 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000661 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000661 */ 					switch (__attrib0__) {
/* 000661 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000661 */ 						case 'cells_model': var cells_model = __allkwargs0__ [__attrib0__]; break;
/* 000661 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000661 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000661 */ 					}
/* 000661 */ 				}
/* 000661 */ 			}
/* 000661 */ 		}
/* 000661 */ 		else {
/* 000661 */ 		}
/* 000663 */ 		var __left0__ = tuple ([__call__ (len, null, cells_model.grid_data), __call__ (len, null, __getitem__ (cells_model.grid_data, 0))]);
/* 000663 */ 		var tabheight = __left0__ [0];
/* 000663 */ 		var tabwidth = __left0__ [1];
/* 000665 */ 		var data_items = [];
/* 000666 */ 		var row_j = 0;
/* 000667 */ 		while (__t__ (__lt__ (row_j, __call__ (len, null, cells_model.grid_data)))) {
/* 000668 */ 			var row_items = [];
/* 000669 */ 			var col_j = 0;
/* 000670 */ 			while (__t__ (__lt__ (col_j, __call__ (len, null, __getitem__ (cells_model.grid_data, row_j))))) {
/* 000672 */ 				var grid_cell_data = __getitem__ (__getitem__ (cells_model.grid_data, row_j), col_j);
/* 000674 */ 				if (__t__ (__t__ (grid_cell_data === null) || __getitem__ (grid_cell_data, 'cell') === null)) {
/* 000677 */ 					var clsnames = [];
/* 000678 */ 					if (__t__ (__eq__ (row_j, 0))) {
/* 000679 */ 						(function () {
/* 000679 */ 							var __accu0__ = clsnames;
/* 000679 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-top');
/* 000679 */ 						}) ();
/* 000679 */ 					}
/* 000680 */ 					if (__t__ (__eq__ (col_j, 0))) {
/* 000681 */ 						(function () {
/* 000681 */ 							var __accu0__ = clsnames;
/* 000681 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-left');
/* 000681 */ 						}) ();
/* 000681 */ 					}
/* 000682 */ 					if (__t__ (__eq__ (row_j, __sub__ (tabheight, 1)))) {
/* 000683 */ 						(function () {
/* 000683 */ 							var __accu0__ = clsnames;
/* 000683 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-bottom');
/* 000683 */ 						}) ();
/* 000683 */ 					}
/* 000684 */ 					if (__t__ (__eq__ (col_j, __sub__ (tabwidth, 1)))) {
/* 000685 */ 						(function () {
/* 000685 */ 							var __accu0__ = clsnames;
/* 000685 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-right');
/* 000685 */ 						}) ();
/* 000685 */ 					}
/* 000686 */ 					(function () {
/* 000686 */ 						var __accu0__ = row_items;
/* 000686 */ 						return __call__ (__accu0__.append, __accu0__, (function () {
/* 000686 */ 							var __accu1__ = self;
/* 000686 */ 							return __call__ (__accu1__.wrap_in_tag, __accu1__, 'td', '', __kwargtrans__ ({class_names: __add__ (['cell-empty'], clsnames)}));
/* 000686 */ 						}) ());
/* 000686 */ 					}) ();
/* 000691 */ 					var col_j = __call__ (__iadd__, null, col_j, 1);
/* 000691 */ 					continue;
/* 000691 */ 				}
/* 000694 */ 				if (__t__ (__getitem__ (grid_cell_data, 'is_topleft'))) {
/* 000696 */ 					var cell = __getitem__ (grid_cell_data, 'cell');
/* 000697 */ 					var rendered_cell_contents = (function () {
/* 000697 */ 						var __accu0__ = self;
/* 000697 */ 						return __call__ (__accu0__.render_nodelist, __accu0__, cell.content_nodes, __kwargtrans__ ({render_context: render_context}));
/* 000697 */ 					}) ();
/* 000701 */ 					var clsnames = __add__ (['cell'], (function () {
/* 000701 */ 						var __accu0__ = [];
/* 000701 */ 						var __iterable0__ = cell.styles;
/* 000701 */ 						for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000701 */ 							var sty = __getitem__ (__iterable0__, __index0__);
/* 000701 */ 							(function () {
/* 000701 */ 								var __accu1__ = __accu0__;
/* 000701 */ 								return __call__ (__accu1__.append, __accu1__, 'cellstyle-{}'.format (sty));
/* 000701 */ 							}) ();
/* 000701 */ 						}
/* 000701 */ 						return __accu0__;
/* 000701 */ 					}) ());
/* 000702 */ 					if (__t__ (__eq__ (row_j, 0))) {
/* 000703 */ 						(function () {
/* 000703 */ 							var __accu0__ = clsnames;
/* 000703 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-top');
/* 000703 */ 						}) ();
/* 000703 */ 					}
/* 000704 */ 					if (__t__ (__eq__ (col_j, 0))) {
/* 000705 */ 						(function () {
/* 000705 */ 							var __accu0__ = clsnames;
/* 000705 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-left');
/* 000705 */ 						}) ();
/* 000705 */ 					}
/* 000706 */ 					if (__t__ (__eq__ (cell.placement.row_range.end, tabheight))) {
/* 000707 */ 						(function () {
/* 000707 */ 							var __accu0__ = clsnames;
/* 000707 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-bottom');
/* 000707 */ 						}) ();
/* 000707 */ 					}
/* 000708 */ 					if (__t__ (__eq__ (cell.placement.col_range.end, tabwidth))) {
/* 000709 */ 						(function () {
/* 000709 */ 							var __accu0__ = clsnames;
/* 000709 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-right');
/* 000709 */ 						}) ();
/* 000709 */ 					}
/* 000710 */ 					var tagname = 'td';
/* 000711 */ 					if (__t__ (__t__ (__in__ ('H', cell.styles)) || __in__ ('rH', cell.styles))) {
/* 000712 */ 						var tagname = 'th';
/* 000712 */ 					}
/* 000713 */ 					var attrs = dict ({});
/* 000714 */ 					var cplc = cell.placement;
/* 000715 */ 					if (__t__ (__ne__ (cplc.col_range.end, __add__ (cplc.col_range.start, 1)))) {
/* 000718 */ 						__setitem__ (attrs, 'colspan', __call__ (str, null, __sub__ (cplc.col_range.end, cplc.col_range.start)));
/* 000718 */ 					}
/* 000719 */ 					if (__t__ (__ne__ (cplc.row_range.end, __add__ (cplc.row_range.start, 1)))) {
/* 000721 */ 						__setitem__ (attrs, 'rowspan', __call__ (str, null, __sub__ (cplc.row_range.end, cplc.row_range.start)));
/* 000721 */ 					}
/* 000722 */ 					(function () {
/* 000722 */ 						var __accu0__ = row_items;
/* 000723 */ 						return __call__ (__accu0__.append, __accu0__, (function () {
/* 000723 */ 							var __accu1__ = self;
/* 000723 */ 							return __call__ (__accu1__.wrap_in_tag, __accu1__, tagname, rendered_cell_contents, __kwargtrans__ ({attrs: attrs, class_names: clsnames}));
/* 000723 */ 						}) ());
/* 000723 */ 					}) ();
/* 000730 */ 					var col_j = cplc.col_range.end;
/* 000730 */ 					continue;
/* 000730 */ 				}
/* 000735 */ 				var col_j = __call__ (__iadd__, null, col_j, 1);
/* 000735 */ 			}
/* 000737 */ 			(function () {
/* 000737 */ 				var __accu0__ = data_items;
/* 000737 */ 				return __call__ (__accu0__.append, __accu0__, row_items);
/* 000737 */ 			}) ();
/* 000738 */ 			var row_j = __call__ (__iadd__, null, row_j, 1);
/* 000738 */ 		}
/* 000740 */ 		var table_attrs = dict ({});
/* 000741 */ 		if (__t__ (target_id !== null)) {
/* 000742 */ 			__setitem__ (table_attrs, 'id', target_id);
/* 000742 */ 		}
/* 000744 */ 		var s = (function () {
/* 000744 */ 			var __accu0__ = self;
/* 000746 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'table', (function () {
/* 000746 */ 				var __accu1__ = '';
/* 000746 */ 				return __call__ (__accu1__.join, __accu1__, (function () {
/* 000746 */ 					var __accu2__ = [];
/* 000746 */ 					var __iterable0__ = data_items;
/* 000746 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000748 */ 						var row_items = __getitem__ (__iterable0__, __index0__);
/* 000748 */ 						(function () {
/* 000748 */ 							var __accu3__ = __accu2__;
/* 000747 */ 							return __call__ (__accu3__.append, __accu3__, __add__ (__add__ ('<tr>', (function () {
/* 000747 */ 								var __accu4__ = '';
/* 000747 */ 								return __call__ (__accu4__.join, __accu4__, row_items);
/* 000747 */ 							}) ()), '</tr>'));
/* 000747 */ 						}) ();
/* 000747 */ 					}
/* 000747 */ 					return __accu2__;
/* 000747 */ 				}) ());
/* 000747 */ 			}) (), __kwargtrans__ ({attrs: table_attrs, class_names: ['cells']}));
/* 000747 */ 		}) ();
/* 000753 */ 		return s;
/* 000753 */ 	});}
/* 000753 */ });
/* 000759 */ export var _rx_delayed_markers = (function () {
/* 000759 */ 	var __accu0__ = re;
/* 000759 */ 	return __call__ (__accu0__.compile, __accu0__, '<FLM:DLYD:(?P<key>\\d+)\\s*/>');
/* 000759 */ }) ();
/* 000766 */ export var _html_css_global = '\np, ul, ol {\n  margin: 1em 0px;\n}\np:first-child, ul:first-child, ol:first-child {\n  margin-top: 0px;\n}\np:last-child, ul:last-child, ol:last-child {\n  margin-bottom: 0px;\n}\ndd > p, dd > p:first-child, dd > p:last-child {\n  margin: 0.33em 0px;\n}\n\na, a:link, a:hover, a:active, a:visited {\n  color: #3232c8;\n  text-decoration: none;\n}\na:hover {\n  color: #22228a;\n}\n';
/* 000789 */ export var _html_css_content = "\n.emph, .textit {\n  font-style: italic;\n}\n.textbf {\n  font-weight: bold;\n}\n\nh1 {\n  font-size: 1.6rem;\n  line-height: 1.3em;\n  font-weight: bold;\n  margin: 1em 0px;\n}\nh2 {\n  font-size: 1.3rem;\n  line-height: 1.3em;\n  font-weight: bold;\n  margin: 1em 0px;\n}\nh3 {\n  font-size: 1rem;\n  font-weight: bold;\n  margin: 1em 0px;\n}\n\n.heading-level-4 {\n  font-style: italic;\n  display: inline;\n}\n.heading-level-4::after {\n  display: inline-block;\n  margin: 0px .12em;\n  content: '—';\n}\n\n.heading-level-5 {\n  font-style: italic;\n  font-size: .9em;\n  display: inline;\n}\n.heading-level-5::after {\n  display: inline-block;\n  margin-right: .12em;\n  content: '';\n}\n\n.heading-level-6 {\n  font-style: italic;\n  font-size: .8em;\n  display: inline;\n}\n.heading-level-6::after {\n  display: inline-block;\n  margin-right: .06em;\n  content: '';\n}\n\n\n.heading-level-theorem {\n  font-weight: bold;\n  display: inline-block;\n}\n.heading-level-theorem::after {\n  font-weight: bold;\n  display: inline-block;\n  margin: 0px .12em 0px 0px;\n  content: '.';\n}\n\ndiv.theoremlike, div.definitionlike, div.prooflike {\n  margin: 1em 0px;\n}\n\ndiv.prooflike > p > .heading-level-theorem,\ndiv.prooflike > p > .heading-level-theorem::after {\n  font-weight: normal;\n  font-style: italic;\n}\n\n\ndl.enumeration {\n  display: block;\n  margin-left: 2.5em;\n}\ndl.enumeration > dt {\n  float: left;\n  clear: left;\n  display: inline-block;\n  /*margin: 0px; */\n  margin-left: -2.5em;\n  width: 2.0em;\n  min-width: 2.0em;\n  max-width: 2.0em;\n  margin-right: 0.5em;\n  text-align: right;\n}\ndl.enumeration > dd {\n  /*display: inline-block;\n  width: 100%;*/\n  border: 0px;\n  padding: 0px;\n  margin: 0px;\n}\n\nfigure.float {\n  width: 100%;\n  border-width: 1px 0px 1px 0px;\n  border-style: solid none solid none;\n  border-color: rgba(120, 120, 140, 0.15);\n  margin: 0.5rem 0px;\n  padding: 0.5rem 0px;\n}\n\nfigure.float .float-contents {\n  width: 100%;\n  max-width: 100%;\n  overflow-x: auto;\n}\n\nfigure.float .float-contents img {\n  display: block;\n  margin: 0pt auto;\n  padding: 0pt;\n  border: 0pt;\n  margin: 0px auto;\n}\n\nfigure.float figcaption {\n  display: block;\n  margin-top: 0.5em;\n  margin: 0.75em 2em 0px;\n  text-align: center;\n}\n\nfigure.float figcaption > span {\n  display: inline-block;\n  font-style: italic;\n  text-align: left;\n}\n\ntable {\n  margin: 1em 0px 1em 0px;\n  border-collapse: separate;\n  border-spacing: 0px;\n  /*border-top: solid 1pt;\n  border-bottom: solid 1pt;*/\n}\nfigure.float .float-contents table {\n  margin: 0px auto;\n}\ntd {\n  padding: 0.3em 0.5em;\n  border: none 0px;\n}\nth {\n  padding: 0.3em 0.5em;\n  border: none 0px;\n}\n.cellstyle-H {\n  border-bottom: solid .5pt;\n}\n.cellstyle-rH {\n}\n.cellstyle-l {\n  text-align: left;\n}\n.cellstyle-c {\n  text-align: center;\n}\n.cellstyle-r {\n  text-align: right;\n}\n.cellstyle-green {\n  background-color: rgba(69, 255, 69, 0.31); /*rgb(200,255,200);*/\n}\n.cellstyle-blue {\n  background-color: rgba(79, 142, 255, 0.27); /*rgb(200,220,255);*/\n}\n.cellstyle-yellow {\n  background-color: rgba(255, 255, 49, 0.33); /*rgb(255,255,200);*/\n}\n.cellstyle-red {\n  background-color: rgba(255,120,120,0.30);  /*rgb(255,200,200);*/\n}\n.cellstyle-lvert {\n  border-left: solid .5pt;\n}\n.cellstyle-rvert {\n  border-right: solid .5pt;\n}\n\n.celltbledge-top {\n  border-top: solid 1pt;\n}\n.celltbledge-bottom {\n  border-bottom: solid 1pt;\n}\n\n.verbatimcode {\n  font-family: monospace;\n  font-size: 0.9em;\n  background-color: rgba(127,127,127,0.25);\n  border-radius: 2px;\n  padding: 1px 2px;\n  display: inline-block;\n  white-space: pre-wrap;\n}\n.verbatima {\n  font-style: italic;\n}\n.verbatimcode-environment {\n  display: block;\n  margin: 0.75em 0px 1em;\n  white-space: pre;\n}\n\n.defterm {\n  font-style: italic;\n}\n\n.defterm .defterm-term {\n  font-style: italic;\n  font-weight: bold;\n}\n\n.display-math {\n  width: 100%;\n  max-width: 100%;\n  display: block;\n  overflow-x: auto;\n}\n\n.endnote {\n}\n.citation {\n}\n.footnote {\n}\n.endnote-marks, .citation-marks {\n  font-size: 0.8em;\n  display: inline-block;\n  vertical-align: 0.3em;\n  margin-top: -0.3em;\n}\ndl.citation-list > dt, dl.footnote-list > dt {\n  font-size: 0.8em;\n  display: inline-block;\n  vertical-align: 0.3em;\n  margin-top: -0.3em;\n}\n";
/* 001043 */ export var _html_js_mathjax = '\nMathJax = {\n    tex: {\n        inlineMath: [[\'\\\\(\', \'\\\\)\']],\n        displayMath: [[\'\\\\[\', \'\\\\]\']],\n        processEnvironments: true,\n        processRefs: true,\n\n        // equation numbering on\n        tags: \'ams\'\n    },\n    options: {\n        // all MathJax content is marked with CSS classes\n        // skipHtmlTags: \'body\',\n        // processHtmlClass: \'display-math|inline-math\',\n    },\n    startup: {\n        pageReady: function() {\n            // override the default "typeset everything on the page" behavior to\n            // only typeset whatever we have explicitly marked as math\n            return typesetPageMathPromise();\n        }\n    }\n};\nfunction typesetPageMathPromise()\n{\n    var elements = document.querySelectorAll(\'.display-math, .inline-math\');\n    return MathJax.typesetPromise(elements);\n}\n';
/* 001074 */ export var _html_body_end_js_scripts_mathjax = '\n<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>\n<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>\n';
/* 001082 */ export var get_html_css_global = function (html_fragment_renderer) {
/* 001082 */ 	if (arguments.length) {
/* 001082 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001082 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001082 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001082 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001082 */ 				switch (__attrib0__) {
/* 001082 */ 					case 'html_fragment_renderer': var html_fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 001082 */ 				}
/* 001082 */ 			}
/* 001082 */ 		}
/* 001082 */ 	}
/* 001082 */ 	else {
/* 001082 */ 	}
/* 001083 */ 	return _html_css_global;
/* 001083 */ };
/* 001085 */ export var get_html_css_content = function (html_fragment_renderer) {
/* 001085 */ 	if (arguments.length) {
/* 001085 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001085 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001085 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001085 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001085 */ 				switch (__attrib0__) {
/* 001085 */ 					case 'html_fragment_renderer': var html_fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 001085 */ 				}
/* 001085 */ 			}
/* 001085 */ 		}
/* 001085 */ 	}
/* 001085 */ 	else {
/* 001085 */ 	}
/* 001086 */ 	return _html_css_content;
/* 001086 */ };
/* 001088 */ export var get_html_js = function (html_fragment_renderer) {
/* 001088 */ 	if (arguments.length) {
/* 001088 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001088 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001088 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001088 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001088 */ 				switch (__attrib0__) {
/* 001088 */ 					case 'html_fragment_renderer': var html_fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 001088 */ 				}
/* 001088 */ 			}
/* 001088 */ 		}
/* 001088 */ 	}
/* 001088 */ 	else {
/* 001088 */ 	}
/* 001089 */ 	if (__t__ (html_fragment_renderer.use_mathjax)) {
/* 001090 */ 		return _html_js_mathjax;
/* 001090 */ 	}
/* 001091 */ 	return '';
/* 001091 */ };
/* 001093 */ export var get_html_body_end_js_scripts = function (html_fragment_renderer) {
/* 001093 */ 	if (arguments.length) {
/* 001093 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001093 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001093 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001093 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001093 */ 				switch (__attrib0__) {
/* 001093 */ 					case 'html_fragment_renderer': var html_fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 001093 */ 				}
/* 001093 */ 			}
/* 001093 */ 		}
/* 001093 */ 	}
/* 001093 */ 	else {
/* 001093 */ 	}
/* 001094 */ 	if (__t__ (html_fragment_renderer.use_mathjax)) {
/* 001095 */ 		return _html_body_end_js_scripts_mathjax;
/* 001095 */ 	}
/* 001096 */ 	return '';
/* 001096 */ };
/* 001102 */ export var FragmentRendererInformation =  __class__ ('FragmentRendererInformation', [object], {
/* 001102 */ 	__module__: __name__,
/* 001108 */ 	FragmentRendererClass: HtmlFragmentRenderer,
/* 001111 */ 	get get_style_information () {return function (fragment_renderer) {
/* 001111 */ 		if (arguments.length) {
/* 001111 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001111 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001111 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001111 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001111 */ 					switch (__attrib0__) {
/* 001111 */ 						case 'fragment_renderer': var fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 001111 */ 					}
/* 001111 */ 				}
/* 001111 */ 			}
/* 001111 */ 		}
/* 001111 */ 		else {
/* 001111 */ 		}
/* 001116 */ 		return dict ({'css_global': __call__ (get_html_css_global, null, fragment_renderer), 'css_content': __call__ (get_html_css_content, null, fragment_renderer), 'js': __call__ (get_html_js, null, fragment_renderer), 'body_end_js_scripts': __call__ (get_html_body_end_js_scripts, null, fragment_renderer)});
/* 001116 */ 	};},
/* 001119 */ 	format_name: 'html'
/* 001119 */ });
/* 000006 */ 
//# sourceMappingURL=flm.fragmentrenderer.html.map