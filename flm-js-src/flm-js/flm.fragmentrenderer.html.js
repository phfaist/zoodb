/* 000001 */ // Transcrypt'ed from Python, 2025-10-21 17:57:22
/* 000006 */ var html = {};
/* 000006 */ var logging = {};
/* 000006 */ var re = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000013 */ import {FragmentRenderer} from './flm.fragmentrenderer._base.js';
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
/* 000017 */ export var _rx_html_entity = (function () {
/* 000017 */ 	var __accu0__ = re;
/* 000017 */ 	return __call__ (__accu0__.compile, __accu0__, '[&]([a-zA-Z]+|[#][0-9]+|[#]x[0-9a-fA-F]+);');
/* 000017 */ }) ();
/* 000020 */ export var HtmlFragmentRenderer =  __class__ ('HtmlFragmentRenderer', [FragmentRenderer], {
/* 000020 */ 	__module__: __name__,
/* 000025 */ 	supports_delayed_render_markers: true,
/* 000032 */ 	use_link_target_blank: false,
/* 000045 */ 	html_blocks_joiner: '\n',
/* 000064 */ 	heading_tags_by_level: dict ({1: 'h1', 2: 'h2', 3: 'h3', 4: 'span', 5: 'span', 6: 'span', 'theorem': 'span'}),
/* 000079 */ 	inline_heading_add_space: true,
/* 000086 */ 	aggressively_escape_html_attributes: false,
/* 000104 */ 	render_nothing_as_comment_with_annotations: true,
/* 000106 */ 	render_links_with_empty_href: false,
/* 000108 */ 	use_mathjax: true,
/* 000110 */ 	use_standard_math_delimiters: true,
/* 000118 */ 	get htmlescape () {return __get__ (this, function (self, value) {
/* 000118 */ 		if (arguments.length) {
/* 000118 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000118 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000118 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000118 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000118 */ 					switch (__attrib0__) {
/* 000118 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000118 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000118 */ 					}
/* 000118 */ 				}
/* 000118 */ 			}
/* 000118 */ 		}
/* 000118 */ 		else {
/* 000118 */ 		}
/* 000119 */ 		var esc = (function () {
/* 000119 */ 			var __accu0__ = html;
/* 000119 */ 			return __call__ (__accu0__.escape, __accu0__, value);
/* 000119 */ 		}) ();
/* 000121 */ 		var esc = (function () {
/* 000121 */ 			var __accu0__ = (function () {
/* 000121 */ 				var __accu1__ = (function () {
/* 000121 */ 					var __accu2__ = (function () {
/* 000121 */ 						var __accu3__ = (function () {
/* 000121 */ 							var __accu4__ = (function () {
/* 000121 */ 								var __accu5__ = (function () {
/* 000121 */ 									var __accu6__ = esc;
/* 000121 */ 									return __call__ (__accu6__.py_replace, __accu6__, '\xa0', '&nbsp;');
/* 000121 */ 								}) ();
/* 000121 */ 								return __call__ (__accu5__.py_replace, __accu5__, '\u200a', '&hairsp;');
/* 000121 */ 							}) ();
/* 000122 */ 							return __call__ (__accu4__.py_replace, __accu4__, '\u2009', '&thinsp;');
/* 000122 */ 						}) ();
/* 000123 */ 						return __call__ (__accu3__.py_replace, __accu3__, '\u2008', '&puncsp;');
/* 000123 */ 					}) ();
/* 000124 */ 					return __call__ (__accu2__.py_replace, __accu2__, '\u2002', '&ensp;');
/* 000124 */ 				}) ();
/* 000125 */ 				return __call__ (__accu1__.py_replace, __accu1__, '\u2003', '&emsp;');
/* 000125 */ 			}) ();
/* 000126 */ 			return __call__ (__accu0__.py_replace, __accu0__, '\u2007', '&numsp;');
/* 000126 */ 		}) ();
/* 000129 */ 		return esc;
/* 000129 */ 	});},
/* 000131 */ 	get htmlescape_double_quoted_attribute_value () {return __get__ (this, function (self, value) {
/* 000131 */ 		if (arguments.length) {
/* 000131 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000131 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000131 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000131 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000131 */ 					switch (__attrib0__) {
/* 000131 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000131 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000131 */ 					}
/* 000131 */ 				}
/* 000131 */ 			}
/* 000131 */ 		}
/* 000131 */ 		else {
/* 000131 */ 		}
/* 000133 */ 		if (__t__ (self.aggressively_escape_html_attributes)) {
/* 000134 */ 			return (function () {
/* 000134 */ 				var __accu0__ = self;
/* 000134 */ 				return __call__ (__accu0__.htmlescape, __accu0__, value);
/* 000134 */ 			}) ();
/* 000134 */ 		}
/* 000144 */ 		var value = (function () {
/* 000144 */ 			var __accu0__ = _rx_html_entity;
/* 000144 */ 			return __call__ (__accu0__.sub, __accu0__, (function __lambda__ (m) {
/* 000144 */ 				if (arguments.length) {
/* 000144 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000144 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000144 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000144 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000144 */ 							switch (__attrib0__) {
/* 000144 */ 								case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000144 */ 							}
/* 000144 */ 						}
/* 000144 */ 					}
/* 000144 */ 				}
/* 000144 */ 				else {
/* 000144 */ 				}
/* 000144 */ 				return __add__ (__add__ ('&amp;', (function () {
/* 000144 */ 					var __accu1__ = m;
/* 000144 */ 					return __call__ (__accu1__.group, __accu1__, 1);
/* 000144 */ 				}) ()), ';');
/* 000144 */ 			}), value);
/* 000144 */ 		}) ();
/* 000146 */ 		var value = (function () {
/* 000146 */ 			var __accu0__ = value;
/* 000146 */ 			return __call__ (__accu0__.py_replace, __accu0__, '"', '&quot;');
/* 000146 */ 		}) ();
/* 000147 */ 		return value;
/* 000147 */ 	});},
/* 000149 */ 	get generate_open_tag () {return __get__ (this, function (self, tagname) {
/* 000149 */ 		var attrs = null;
/* 000149 */ 		var class_names = null;
/* 000149 */ 		var self_close_tag = false;
/* 000149 */ 		if (arguments.length) {
/* 000149 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000149 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000149 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000149 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000149 */ 					switch (__attrib0__) {
/* 000149 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000149 */ 						case 'tagname': var tagname = __allkwargs0__ [__attrib0__]; break;
/* 000149 */ 						case 'attrs': var attrs = __allkwargs0__ [__attrib0__]; break;
/* 000149 */ 						case 'class_names': var class_names = __allkwargs0__ [__attrib0__]; break;
/* 000149 */ 						case 'self_close_tag': var self_close_tag = __allkwargs0__ [__attrib0__]; break;
/* 000149 */ 					}
/* 000149 */ 				}
/* 000149 */ 			}
/* 000149 */ 		}
/* 000149 */ 		else {
/* 000149 */ 		}
/* 000150 */ 		var s = '<{}'.format (tagname);
/* 000151 */ 		if (__t__ (!__t__ ((attrs)))) {
/* 000152 */ 			var attrs = dict ({});
/* 000152 */ 		}
/* 000153 */ 		var attrs = __call__ (dict, null, attrs);
/* 000154 */ 		if (__t__ (__in__ ('class', attrs))) {
/* 000155 */ 			var __except0__ = __call__ (ValueError, null, "generate_open_tag(): set HTML 'class' attribute with class_names=, not with attrs=");
/* 000155 */ 			__except0__.__cause__ = null;
/* 000155 */ 			throw __except0__;
/* 000155 */ 		}
/* 000159 */ 		if (__t__ (class_names)) {
/* 000160 */ 			__setitem__ (attrs, 'class', (function () {
/* 000160 */ 				var __accu0__ = ' ';
/* 000160 */ 				return __call__ (__accu0__.join, __accu0__, class_names);
/* 000160 */ 			}) ());
/* 000160 */ 		}
/* 000161 */ 		if (__t__ (attrs)) {
/* 000162 */ 			var __iterable0__ = (function () {
/* 000162 */ 				var __accu0__ = attrs;
/* 000162 */ 				return __call__ (__accu0__.py_items, __accu0__);
/* 000162 */ 			}) ();
/* 000162 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000162 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000162 */ 				var aname = __left0__ [0];
/* 000162 */ 				var aval = __left0__ [1];
/* 000163 */ 				var s = __call__ (__iadd__, null, s, ' {}="{}"'.format (aname, (function () {
/* 000163 */ 					var __accu0__ = self;
/* 000163 */ 					return __call__ (__accu0__.htmlescape_double_quoted_attribute_value, __accu0__, aval);
/* 000163 */ 				}) ()));
/* 000163 */ 			}
/* 000163 */ 		}
/* 000164 */ 		if (__t__ (self_close_tag)) {
/* 000165 */ 			var s = __call__ (__iadd__, null, s, '/>');
/* 000165 */ 		}
/* 000166 */ 		else {
/* 000167 */ 			var s = __call__ (__iadd__, null, s, '>');
/* 000167 */ 		}
/* 000168 */ 		return s;
/* 000168 */ 	});},
/* 000170 */ 	get wrap_in_tag () {return __get__ (this, function (self, tagname, content_html) {
/* 000170 */ 		var attrs = null;
/* 000170 */ 		var class_names = null;
/* 000170 */ 		if (arguments.length) {
/* 000170 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000170 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000170 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000170 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000170 */ 					switch (__attrib0__) {
/* 000170 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000170 */ 						case 'tagname': var tagname = __allkwargs0__ [__attrib0__]; break;
/* 000170 */ 						case 'content_html': var content_html = __allkwargs0__ [__attrib0__]; break;
/* 000170 */ 						case 'attrs': var attrs = __allkwargs0__ [__attrib0__]; break;
/* 000170 */ 						case 'class_names': var class_names = __allkwargs0__ [__attrib0__]; break;
/* 000170 */ 					}
/* 000170 */ 				}
/* 000170 */ 			}
/* 000170 */ 		}
/* 000170 */ 		else {
/* 000170 */ 		}
/* 000172 */ 		var s = (function () {
/* 000172 */ 			var __accu0__ = self;
/* 000172 */ 			return __call__ (__accu0__.generate_open_tag, __accu0__, tagname, __kwargtrans__ ({attrs: attrs, class_names: class_names}));
/* 000172 */ 		}) ();
/* 000173 */ 		var s = __call__ (__iadd__, null, s, __call__ (str, null, content_html));
/* 000174 */ 		var s = __call__ (__iadd__, null, s, '</{}>'.format (tagname));
/* 000175 */ 		return s;
/* 000175 */ 	});},
/* 000177 */ 	get wrap_in_link () {return __get__ (this, function (self, display_html, target_href) {
/* 000177 */ 		var class_names = null;
/* 000177 */ 		if (arguments.length) {
/* 000177 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000177 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000177 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000177 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000177 */ 					switch (__attrib0__) {
/* 000177 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000177 */ 						case 'display_html': var display_html = __allkwargs0__ [__attrib0__]; break;
/* 000177 */ 						case 'target_href': var target_href = __allkwargs0__ [__attrib0__]; break;
/* 000177 */ 						case 'class_names': var class_names = __allkwargs0__ [__attrib0__]; break;
/* 000177 */ 					}
/* 000177 */ 				}
/* 000177 */ 			}
/* 000177 */ 		}
/* 000177 */ 		else {
/* 000177 */ 		}
/* 000178 */ 		if (__t__ (!__t__ ((target_href)))) {
/* 000179 */ 			var target_href = '#';
/* 000179 */ 		}
/* 000180 */ 		var attrs = dict ({'href': target_href});
/* 000183 */ 		if (__t__ (__call__ (callable, null, self.use_link_target_blank))) {
/* 000184 */ 			if (__t__ ((function () {
/* 000184 */ 				var __accu0__ = self;
/* 000184 */ 				return __call__ (__accu0__.use_link_target_blank, __accu0__, target_href);
/* 000184 */ 			}) ())) {
/* 000185 */ 				__setitem__ (attrs, 'target', '_blank');
/* 000185 */ 			}
/* 000185 */ 		}
/* 000186 */ 		else if (__t__ (__t__ (self.use_link_target_blank) && !__t__ (((function () {
/* 000186 */ 			var __accu0__ = target_href;
/* 000186 */ 			return __call__ (__accu0__.startswith, __accu0__, '#');
/* 000186 */ 		}) ())))) {
/* 000187 */ 			__setitem__ (attrs, 'target', '_blank');
/* 000187 */ 		}
/* 000188 */ 		return (function () {
/* 000188 */ 			var __accu0__ = self;
/* 000188 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'a', display_html, __kwargtrans__ ({attrs: attrs, class_names: class_names}));
/* 000188 */ 		}) ();
/* 000188 */ 	});},
/* 000197 */ 	get render_build_paragraph () {return __get__ (this, function (self, nodelist, render_context) {
/* 000197 */ 		if (arguments.length) {
/* 000197 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000197 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000197 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000197 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000197 */ 					switch (__attrib0__) {
/* 000197 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000197 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000197 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000197 */ 					}
/* 000197 */ 				}
/* 000197 */ 			}
/* 000197 */ 		}
/* 000197 */ 		else {
/* 000197 */ 		}
/* 000200 */ 		return __add__ (__add__ ('<p>', (function () {
/* 000200 */ 			var __accu0__ = self;
/* 000200 */ 			return __call__ (__accu0__.render_inline_content, __accu0__, nodelist, render_context);
/* 000200 */ 		}) ()), '</p>');
/* 000200 */ 	});},
/* 000204 */ 	get render_inline_content () {return __get__ (this, function (self, nodelist, render_context) {
/* 000204 */ 		if (arguments.length) {
/* 000204 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000204 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000204 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000204 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000204 */ 					switch (__attrib0__) {
/* 000204 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000204 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000204 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000204 */ 					}
/* 000204 */ 				}
/* 000204 */ 			}
/* 000204 */ 		}
/* 000204 */ 		else {
/* 000204 */ 		}
/* 000205 */ 		return (function () {
/* 000205 */ 			var __accu0__ = self;
/* 000205 */ 			return __call__ (__accu0__.render_join, __accu0__, (function () {
/* 000205 */ 				var __accu1__ = [];
/* 000206 */ 				var __iterable0__ = nodelist;
/* 000206 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000206 */ 					var n = __getitem__ (__iterable0__, __index0__);
/* 000206 */ 					(function () {
/* 000206 */ 						var __accu2__ = __accu1__;
/* 000206 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000206 */ 							var __accu3__ = self;
/* 000206 */ 							return __call__ (__accu3__.render_node, __accu3__, n, render_context);
/* 000206 */ 						}) ());
/* 000206 */ 					}) ();
/* 000206 */ 				}
/* 000206 */ 				return __accu1__;
/* 000206 */ 			}) (), render_context);
/* 000206 */ 		}) ();
/* 000206 */ 	});},
/* 000210 */ 	get render_join () {return __get__ (this, function (self, content_list, render_context) {
/* 000210 */ 		if (arguments.length) {
/* 000210 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000210 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000210 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000210 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000210 */ 					switch (__attrib0__) {
/* 000210 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000210 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000210 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000210 */ 					}
/* 000210 */ 				}
/* 000210 */ 			}
/* 000210 */ 		}
/* 000210 */ 		else {
/* 000210 */ 		}
/* 000216 */ 		return (function () {
/* 000216 */ 			var __accu0__ = '';
/* 000216 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000216 */ 				var __accu1__ = [];
/* 000216 */ 				var __iterable0__ = content_list;
/* 000216 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000216 */ 					var s = __getitem__ (__iterable0__, __index0__);
/* 000216 */ 					(function () {
/* 000216 */ 						var __accu2__ = __accu1__;
/* 000216 */ 						return __call__ (__accu2__.append, __accu2__, __call__ (str, null, s));
/* 000216 */ 					}) ();
/* 000216 */ 				}
/* 000216 */ 				return __accu1__;
/* 000216 */ 			}) ());
/* 000216 */ 		}) ();
/* 000216 */ 	});},
/* 000218 */ 	get render_join_blocks () {return __get__ (this, function (self, content_list, render_context) {
/* 000218 */ 		if (arguments.length) {
/* 000218 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000218 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000218 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000218 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000218 */ 					switch (__attrib0__) {
/* 000218 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000218 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000218 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000218 */ 					}
/* 000218 */ 				}
/* 000218 */ 			}
/* 000218 */ 		}
/* 000218 */ 		else {
/* 000218 */ 		}
/* 000226 */ 		return (function () {
/* 000226 */ 			var __accu0__ = self.html_blocks_joiner;
/* 000226 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000226 */ 				var __accu1__ = [];
/* 000227 */ 				var __iterable0__ = content_list;
/* 000227 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000227 */ 					var c = __getitem__ (__iterable0__, __index0__);
/* 000227 */ 					if (__t__ (__t__ (c !== null) && __call__ (len, null, c))) {
/* 000227 */ 						(function () {
/* 000227 */ 							var __accu2__ = __accu1__;
/* 000227 */ 							return __call__ (__accu2__.append, __accu2__, c);
/* 000227 */ 						}) ();
/* 000227 */ 					}
/* 000227 */ 				}
/* 000227 */ 				return __accu1__;
/* 000227 */ 			}) ());
/* 000227 */ 		}) ();
/* 000227 */ 	});},
/* 000233 */ 	get render_value () {return __get__ (this, function (self, value, render_context) {
/* 000233 */ 		if (arguments.length) {
/* 000233 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000233 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000233 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000233 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000233 */ 					switch (__attrib0__) {
/* 000233 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000233 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000233 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000233 */ 					}
/* 000233 */ 				}
/* 000233 */ 			}
/* 000233 */ 		}
/* 000233 */ 		else {
/* 000233 */ 		}
/* 000234 */ 		return (function () {
/* 000234 */ 			var __accu0__ = self;
/* 000234 */ 			return __call__ (__accu0__.htmlescape, __accu0__, value);
/* 000234 */ 		}) ();
/* 000234 */ 	});},
/* 000236 */ 	get render_empty_error_placeholder () {return __get__ (this, function (self, debug_str, render_context) {
/* 000236 */ 		if (arguments.length) {
/* 000236 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000236 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000236 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000236 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000236 */ 					switch (__attrib0__) {
/* 000236 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000236 */ 						case 'debug_str': var debug_str = __allkwargs0__ [__attrib0__]; break;
/* 000236 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000236 */ 					}
/* 000236 */ 				}
/* 000236 */ 			}
/* 000236 */ 		}
/* 000236 */ 		else {
/* 000236 */ 		}
/* 000237 */ 		var debug_str_safe = (function () {
/* 000237 */ 			var __accu0__ = debug_str;
/* 000237 */ 			return __call__ (__accu0__.py_replace, __accu0__, '--', '- - ');
/* 000237 */ 		}) ();
/* 000238 */ 		return '<span class="empty-error-placeholder"><!-- {} -->(?)</span>'.format (debug_str_safe);
/* 000238 */ 	});},
/* 000240 */ 	get render_nothing () {return __get__ (this, function (self, render_context, annotations) {
/* 000240 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000240 */ 			var annotations = null;
/* 000240 */ 		};
/* 000240 */ 		if (arguments.length) {
/* 000240 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000240 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000240 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000240 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000240 */ 					switch (__attrib0__) {
/* 000240 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000240 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000240 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000240 */ 					}
/* 000240 */ 				}
/* 000240 */ 			}
/* 000240 */ 		}
/* 000240 */ 		else {
/* 000240 */ 		}
/* 000241 */ 		if (__t__ (!__t__ ((self.render_nothing_as_comment_with_annotations)))) {
/* 000242 */ 			return '';
/* 000242 */ 		}
/* 000243 */ 		if (__t__ (!__t__ ((annotations)))) {
/* 000244 */ 			var annotations = [];
/* 000244 */ 		}
/* 000245 */ 		var annotations = (function () {
/* 000245 */ 			var __accu0__ = [];
/* 000245 */ 			var __iterable0__ = annotations;
/* 000245 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000245 */ 				var a = __getitem__ (__iterable0__, __index0__);
/* 000245 */ 				(function () {
/* 000245 */ 					var __accu1__ = __accu0__;
/* 000245 */ 					return __call__ (__accu1__.append, __accu1__, (function () {
/* 000245 */ 						var __accu2__ = a;
/* 000245 */ 						return __call__ (__accu2__.py_replace, __accu2__, '--', '- - ');
/* 000245 */ 					}) ());
/* 000245 */ 				}) ();
/* 000245 */ 			}
/* 000245 */ 			return __accu0__;
/* 000245 */ 		}) ();
/* 000246 */ 		return (function () {
/* 000246 */ 			var __accu0__ = '<!-- {} -->';
/* 000246 */ 			return __call__ (__accu0__.format, __accu0__, (function () {
/* 000246 */ 				var __accu1__ = ' ';
/* 000246 */ 				return __call__ (__accu1__.join, __accu1__, annotations);
/* 000246 */ 			}) ());
/* 000246 */ 		}) ();
/* 000246 */ 	});},
/* 000248 */ 	verbatim_highlight_spaces: false,
/* 000249 */ 	verbatim_protect_backslashes: true,
/* 000251 */ 	get render_verbatim () {return __get__ (this, function (self, value, render_context) {
/* 000251 */ 		var is_block_level = false;
/* 000251 */ 		var annotations = null;
/* 000251 */ 		var target_id = null;
/* 000251 */ 		if (arguments.length) {
/* 000251 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000251 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000251 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000251 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000251 */ 					switch (__attrib0__) {
/* 000251 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000251 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000251 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000251 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000251 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000251 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000251 */ 					}
/* 000251 */ 				}
/* 000251 */ 			}
/* 000251 */ 		}
/* 000251 */ 		else {
/* 000251 */ 		}
/* 000253 */ 		var attrs = dict ({});
/* 000254 */ 		if (__t__ (target_id !== null)) {
/* 000255 */ 			__setitem__ (attrs, 'id', target_id);
/* 000255 */ 		}
/* 000256 */ 		var escaped = (function () {
/* 000256 */ 			var __accu0__ = self;
/* 000256 */ 			return __call__ (__accu0__.htmlescape, __accu0__, value);
/* 000256 */ 		}) ();
/* 000257 */ 		if (__t__ (self.verbatim_protect_backslashes)) {
/* 000259 */ 			var escaped = (function () {
/* 000259 */ 				var __accu0__ = escaped;
/* 000259 */ 				return __call__ (__accu0__.py_replace, __accu0__, '\\', '<span>\\</span>');
/* 000259 */ 			}) ();
/* 000259 */ 		}
/* 000260 */ 		if (__t__ (self.verbatim_highlight_spaces)) {
/* 000261 */ 			var escaped = (function () {
/* 000261 */ 				var __accu0__ = escaped;
/* 000261 */ 				return __call__ (__accu0__.py_replace, __accu0__, ' ', '<span class="verbatimspace">&nbsp;</span>');
/* 000261 */ 			}) ();
/* 000261 */ 		}
/* 000264 */ 		var tag = 'span';
/* 000265 */ 		var __iterable0__ = annotations;
/* 000265 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000265 */ 			var annotation = __getitem__ (__iterable0__, __index0__);
/* 000266 */ 			if (__t__ (__in__ (annotation, tuple (['verbatimcode-environment'])))) {
/* 000268 */ 				var tag = 'div';
/* 000268 */ 			}
/* 000268 */ 		}
/* 000269 */ 		return (function () {
/* 000269 */ 			var __accu0__ = self;
/* 000269 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, tag, escaped, __kwargtrans__ ({class_names: (__t__ (annotations) ? annotations : ['verbatimtext']), attrs: attrs}));
/* 000269 */ 		}) ();
/* 000269 */ 	});},
/* 000276 */ 	get render_math_content () {return __get__ (this, function (self, delimiters, nodelist, render_context, displaytype, environmentname, target_id) {
/* 000276 */ 		if (typeof environmentname == 'undefined' || (environmentname != null && environmentname.hasOwnProperty ("__kwargtrans__"))) {;
/* 000276 */ 			var environmentname = null;
/* 000276 */ 		};
/* 000276 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000276 */ 			var target_id = null;
/* 000276 */ 		};
/* 000276 */ 		if (arguments.length) {
/* 000276 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000276 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000276 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000276 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000276 */ 					switch (__attrib0__) {
/* 000276 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000276 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000276 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000276 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000276 */ 						case 'displaytype': var displaytype = __allkwargs0__ [__attrib0__]; break;
/* 000276 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000276 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000276 */ 					}
/* 000276 */ 				}
/* 000276 */ 			}
/* 000276 */ 		}
/* 000276 */ 		else {
/* 000276 */ 		}
/* 000284 */ 		if (__t__ (!__t__ ((self.use_mathjax)))) {
/* 000285 */ 			(function () {
/* 000285 */ 				var __accu0__ = logger;
/* 000285 */ 				return __call__ (__accu0__.warning, __accu0__, 'called HtmlFragmentRenderer.render_math_content() but self.use_mathjax is not set. Your math will probably not render correctly.');
/* 000285 */ 			}) ();
/* 000285 */ 		}
/* 000291 */ 		var use_delims = tuple ([__getitem__ (delimiters, 0), __getitem__ (delimiters, 1)]);
/* 000292 */ 		if (__t__ (self.use_standard_math_delimiters)) {
/* 000293 */ 			if (__t__ (__eq__ (displaytype, 'inline'))) {
/* 000294 */ 				var use_delims = tuple (['\\(', '\\)']);
/* 000294 */ 			}
/* 000295 */ 			else if (__t__ (__eq__ (displaytype, 'display'))) {
/* 000296 */ 				if (__t__ (environmentname)) {
/* 000297 */ 					var use_delims = tuple (['\\begin{}{}{}'.format ('{', environmentname, '}'), '\\end{}{}{}'.format ('{', environmentname, '}')]);
/* 000297 */ 				}
/* 000300 */ 				else {
/* 000302 */ 					var use_delims = tuple (['\\[', '\\]']);
/* 000302 */ 				}
/* 000302 */ 			}
/* 000303 */ 			else {
/* 000304 */ 				var __except0__ = __call__ (ValueError, null, 'Invalid displaytype: {}'.format (__call__ (repr, null, displaytype)));
/* 000304 */ 				__except0__.__cause__ = null;
/* 000304 */ 				throw __except0__;
/* 000304 */ 			}
/* 000304 */ 		}
/* 000306 */ 		var class_names = ['{}-math'.format (displaytype)];
/* 000307 */ 		if (__t__ (environmentname !== null)) {
/* 000308 */ 			(function () {
/* 000308 */ 				var __accu0__ = class_names;
/* 000308 */ 				return __call__ (__accu0__.append, __accu0__, 'env-{}'.format ((function () {
/* 000308 */ 					var __accu1__ = environmentname;
/* 000308 */ 					return __call__ (__accu1__.py_replace, __accu1__, '*', '-star');
/* 000308 */ 				}) ()));
/* 000308 */ 			}) ();
/* 000308 */ 		}
/* 000311 */ 		var content_html = (function () {
/* 000311 */ 			var __accu0__ = self;
/* 000311 */ 			return __call__ (__accu0__.htmlescape, __accu0__, __add__ (__add__ (__getitem__ (use_delims, 0), (function () {
/* 000311 */ 				var __accu1__ = self;
/* 000311 */ 				return __call__ (__accu1__.recompose_latex, __accu1__, nodelist);
/* 000311 */ 			}) ()), __getitem__ (use_delims, 1)));
/* 000311 */ 		}) ();
/* 000314 */ 		var attrs = dict ({});
/* 000315 */ 		if (__t__ (target_id !== null)) {
/* 000316 */ 			__setitem__ (attrs, 'id', target_id);
/* 000316 */ 		}
/* 000318 */ 		if (__t__ (__eq__ (displaytype, 'display'))) {
/* 000320 */ 			return (function () {
/* 000320 */ 				var __accu0__ = self;
/* 000320 */ 				return __call__ (__accu0__.wrap_in_tag, __accu0__, 'span', content_html, __kwargtrans__ ({class_names: class_names, attrs: attrs}));
/* 000320 */ 			}) ();
/* 000320 */ 		}
/* 000327 */ 		return (function () {
/* 000327 */ 			var __accu0__ = self;
/* 000327 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'span', content_html, __kwargtrans__ ({class_names: class_names, attrs: attrs}));
/* 000327 */ 		}) ();
/* 000327 */ 	});},
/* 000334 */ 	get render_text_format () {return __get__ (this, function (self, text_formats, nodelist, render_context) {
/* 000334 */ 		if (arguments.length) {
/* 000334 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000334 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000334 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000334 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000334 */ 					switch (__attrib0__) {
/* 000334 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000334 */ 						case 'text_formats': var text_formats = __allkwargs0__ [__attrib0__]; break;
/* 000334 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000334 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000334 */ 					}
/* 000334 */ 				}
/* 000334 */ 			}
/* 000334 */ 		}
/* 000334 */ 		else {
/* 000334 */ 		}
/* 000336 */ 		var content = (function () {
/* 000336 */ 			var __accu0__ = self;
/* 000336 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, nodelist, render_context, __kwargtrans__ ({is_block_level: false}));
/* 000336 */ 		}) ();
/* 000342 */ 		return (function () {
/* 000342 */ 			var __accu0__ = self;
/* 000342 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'span', content, __kwargtrans__ ({class_names: text_formats}));
/* 000342 */ 		}) ();
/* 000342 */ 	});},
/* 000348 */ 	get render_semantic_span () {return __get__ (this, function (self, content, role, render_context) {
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
/* 000358 */ 		return (function () {
/* 000358 */ 			var __accu0__ = self;
/* 000358 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'span', content, __kwargtrans__ ({attrs: attrs, class_names: __add__ ([role], annotations)}));
/* 000358 */ 		}) ();
/* 000358 */ 	});},
/* 000366 */ 	get render_semantic_block () {return __get__ (this, function (self, content, role, render_context) {
/* 000366 */ 		var annotations = null;
/* 000366 */ 		var target_id = null;
/* 000366 */ 		if (arguments.length) {
/* 000366 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000366 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000366 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000366 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000366 */ 					switch (__attrib0__) {
/* 000366 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000366 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000366 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000366 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000366 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000366 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000366 */ 					}
/* 000366 */ 				}
/* 000366 */ 			}
/* 000366 */ 		}
/* 000366 */ 		else {
/* 000366 */ 		}
/* 000368 */ 		var attrs = dict ({});
/* 000369 */ 		if (__t__ (target_id !== null)) {
/* 000370 */ 			__setitem__ (attrs, 'id', target_id);
/* 000370 */ 		}
/* 000372 */ 		var annotations = __call__ (list, null, (__t__ (annotations !== null) ? annotations : []));
/* 000373 */ 		if (__t__ (__in__ (role, annotations))) {
/* 000374 */ 			(function () {
/* 000374 */ 				var __accu0__ = annotations;
/* 000374 */ 				return __call__ (__accu0__.remove, __accu0__, role);
/* 000374 */ 			}) ();
/* 000374 */ 		}
/* 000376 */ 		if (__t__ (__in__ (role, tuple (['section', 'main', 'article'])))) {
/* 000377 */ 			return (function () {
/* 000377 */ 				var __accu0__ = self;
/* 000377 */ 				return __call__ (__accu0__.wrap_in_tag, __accu0__, role, content, __kwargtrans__ ({attrs: attrs, class_names: annotations}));
/* 000377 */ 			}) ();
/* 000377 */ 		}
/* 000383 */ 		return (function () {
/* 000383 */ 			var __accu0__ = self;
/* 000383 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'div', content, __kwargtrans__ ({attrs: attrs, class_names: __add__ ([role], annotations)}));
/* 000383 */ 		}) ();
/* 000383 */ 	});},
/* 000391 */ 	get render_enumeration () {return __get__ (this, function (self, iter_items_nodelists, counter_formatter, render_context) {
/* 000391 */ 		var target_id_generator = null;
/* 000391 */ 		var annotations = null;
/* 000391 */ 		var nested_depth = null;
/* 000391 */ 		if (arguments.length) {
/* 000391 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000391 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000391 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000391 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000391 */ 					switch (__attrib0__) {
/* 000391 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000391 */ 						case 'iter_items_nodelists': var iter_items_nodelists = __allkwargs0__ [__attrib0__]; break;
/* 000391 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000391 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000391 */ 						case 'target_id_generator': var target_id_generator = __allkwargs0__ [__attrib0__]; break;
/* 000391 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000391 */ 						case 'nested_depth': var nested_depth = __allkwargs0__ [__attrib0__]; break;
/* 000391 */ 					}
/* 000391 */ 				}
/* 000391 */ 			}
/* 000391 */ 		}
/* 000391 */ 		else {
/* 000391 */ 		}
/* 000403 */ 		var s_items = [];
/* 000405 */ 		var __iterable0__ = __call__ (enumerate, null, iter_items_nodelists);
/* 000405 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000405 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000405 */ 			var j = __left0__ [0];
/* 000405 */ 			var item_content_nodelist = __left0__ [1];
/* 000407 */ 			var use_block_level = true;
/* 000408 */ 			if (__t__ (item_content_nodelist.parsing_state.is_block_level === false)) {
/* 000411 */ 				var use_block_level = false;
/* 000411 */ 			}
/* 000413 */ 			// pass;
/* 000417 */ 			// pass;
/* 000421 */ 			var item_content = (function () {
/* 000421 */ 				var __accu0__ = self;
/* 000421 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, item_content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: use_block_level}));
/* 000421 */ 			}) ();
/* 000427 */ 			var enumno = __add__ (1, j);
/* 000429 */ 			var tag_nodelist = __call__ (counter_formatter, null, enumno);
/* 000430 */ 			if (__t__ (__call__ (isinstance, null, tag_nodelist, str))) {
/* 000431 */ 				var tag_content = (function () {
/* 000431 */ 					var __accu0__ = self;
/* 000431 */ 					return __call__ (__accu0__.render_value, __accu0__, tag_nodelist, render_context);
/* 000431 */ 				}) ();
/* 000431 */ 			}
/* 000432 */ 			else {
/* 000433 */ 				var tag_content = (function () {
/* 000433 */ 					var __accu0__ = self;
/* 000433 */ 					return __call__ (__accu0__.render_nodelist, __accu0__, tag_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000433 */ 				}) ();
/* 000433 */ 			}
/* 000439 */ 			var dtattrs = dict ({});
/* 000440 */ 			if (__t__ (target_id_generator !== null)) {
/* 000441 */ 				var tid = __call__ (target_id_generator, null, enumno);
/* 000442 */ 				if (__t__ (tid !== null)) {
/* 000443 */ 					__setitem__ (dtattrs, 'id', tid);
/* 000443 */ 				}
/* 000443 */ 			}
/* 000445 */ 			(function () {
/* 000445 */ 				var __accu0__ = s_items;
/* 000446 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000446 */ 					var __accu1__ = self;
/* 000447 */ 					return __call__ (__accu1__.render_join, __accu1__, [(function () {
/* 000447 */ 						var __accu2__ = self;
/* 000447 */ 						return __call__ (__accu2__.wrap_in_tag, __accu2__, 'dt', tag_content, __kwargtrans__ ({attrs: dtattrs}));
/* 000452 */ 					}) (), (function () {
/* 000452 */ 						var __accu2__ = self;
/* 000452 */ 						return __call__ (__accu2__.wrap_in_tag, __accu2__, 'dd', item_content);
/* 000452 */ 					}) ()], render_context);
/* 000452 */ 				}) ());
/* 000452 */ 			}) ();
/* 000452 */ 		}
/* 000459 */ 		return (function () {
/* 000459 */ 			var __accu0__ = self;
/* 000461 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'dl', (function () {
/* 000461 */ 				var __accu1__ = self;
/* 000461 */ 				return __call__ (__accu1__.render_join, __accu1__, s_items, render_context);
/* 000461 */ 			}) (), __kwargtrans__ ({class_names: __add__ (['enumeration'], (__t__ (annotations) ? annotations : []))}));
/* 000461 */ 		}) ();
/* 000461 */ 	});},
/* 000466 */ 	get render_heading () {return __get__ (this, function (self, heading_nodelist, render_context) {
/* 000466 */ 		var heading_level = 1;
/* 000466 */ 		var inline_heading = false;
/* 000466 */ 		var target_id = null;
/* 000466 */ 		var annotations = null;
/* 000466 */ 		if (arguments.length) {
/* 000466 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000466 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000466 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000466 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000466 */ 					switch (__attrib0__) {
/* 000466 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000466 */ 						case 'heading_nodelist': var heading_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000466 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000466 */ 						case 'heading_level': var heading_level = __allkwargs0__ [__attrib0__]; break;
/* 000466 */ 						case 'inline_heading': var inline_heading = __allkwargs0__ [__attrib0__]; break;
/* 000466 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000466 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000466 */ 					}
/* 000466 */ 				}
/* 000466 */ 			}
/* 000466 */ 		}
/* 000466 */ 		else {
/* 000466 */ 		}
/* 000473 */ 		if (__t__ (!__in__ (heading_level, self.heading_tags_by_level))) {
/* 000476 */ 			var __except0__ = __call__ (ValueError, null, "HTML renderer: bad heading level ‘{}’,  expected one of {} (or set HTML fragment renderer's ‘heading_tags_by_level’ config".format (heading_level, __call__ (list, null, (function () {
/* 000476 */ 				var __accu0__ = self.heading_tags_by_level;
/* 000476 */ 				return __call__ (__accu0__.py_keys, __accu0__);
/* 000476 */ 			}) ())));
/* 000476 */ 			__except0__.__cause__ = null;
/* 000476 */ 			throw __except0__;
/* 000476 */ 		}
/* 000479 */ 		var annot = (__t__ (annotations) ? __call__ (list, null, annotations) : []);
/* 000480 */ 		(function () {
/* 000480 */ 			var __accu0__ = annot;
/* 000480 */ 			return __call__ (__accu0__.append, __accu0__, 'heading-level-{}'.format (heading_level));
/* 000480 */ 		}) ();
/* 000481 */ 		if (__t__ (inline_heading)) {
/* 000482 */ 			(function () {
/* 000482 */ 				var __accu0__ = annot;
/* 000482 */ 				return __call__ (__accu0__.append, __accu0__, 'heading-inline');
/* 000482 */ 			}) ();
/* 000482 */ 		}
/* 000484 */ 		var attrs = dict ({});
/* 000485 */ 		if (__t__ (target_id !== null)) {
/* 000486 */ 			__setitem__ (attrs, 'id', target_id);
/* 000486 */ 		}
/* 000488 */ 		var content = (function () {
/* 000488 */ 			var __accu0__ = self;
/* 000490 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, __getitem__ (self.heading_tags_by_level, heading_level), (function () {
/* 000490 */ 				var __accu1__ = self;
/* 000490 */ 				return __call__ (__accu1__.render_inline_content, __accu1__, heading_nodelist, render_context);
/* 000490 */ 			}) (), __kwargtrans__ ({class_names: annot, attrs: attrs}));
/* 000490 */ 		}) ();
/* 000494 */ 		if (__t__ (__t__ (inline_heading) && self.inline_heading_add_space)) {
/* 000495 */ 			var content = __call__ (__iadd__, null, content, ' ');
/* 000495 */ 		}
/* 000496 */ 		// pass;
/* 000500 */ 		return content;
/* 000500 */ 	});},
/* 000502 */ 	get render_link () {return __get__ (this, function (self, ref_type, href, display_nodelist, render_context, annotations) {
/* 000502 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000502 */ 			var annotations = null;
/* 000502 */ 		};
/* 000502 */ 		if (arguments.length) {
/* 000502 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000502 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000502 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000502 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000502 */ 					switch (__attrib0__) {
/* 000502 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000502 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000502 */ 						case 'href': var href = __allkwargs0__ [__attrib0__]; break;
/* 000502 */ 						case 'display_nodelist': var display_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000502 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000502 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000502 */ 					}
/* 000502 */ 				}
/* 000502 */ 			}
/* 000502 */ 		}
/* 000502 */ 		else {
/* 000502 */ 		}
/* 000503 */ 		var display_content = (function () {
/* 000503 */ 			var __accu0__ = self;
/* 000503 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, display_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000503 */ 		}) ();
/* 000508 */ 		if (__t__ (__t__ (!__t__ ((href))) && !__t__ ((self.render_links_with_empty_href)))) {
/* 000509 */ 			return display_content;
/* 000509 */ 		}
/* 000511 */ 		return (function () {
/* 000511 */ 			var __accu0__ = self;
/* 000511 */ 			return __call__ (__accu0__.wrap_in_link, __accu0__, display_content, href, __kwargtrans__ ({class_names: __add__ (['href-{}'.format (ref_type)], (__t__ (annotations) ? annotations : []))}));
/* 000511 */ 		}) ();
/* 000511 */ 	});},
/* 000517 */ 	get render_annotation_comment () {return __get__ (this, function (self, display_nodelist, render_context, is_block_level, color_index, initials) {
/* 000517 */ 		if (typeof is_block_level == 'undefined' || (is_block_level != null && is_block_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000517 */ 			var is_block_level = false;
/* 000517 */ 		};
/* 000517 */ 		if (typeof color_index == 'undefined' || (color_index != null && color_index.hasOwnProperty ("__kwargtrans__"))) {;
/* 000517 */ 			var color_index = 0;
/* 000517 */ 		};
/* 000517 */ 		if (typeof initials == 'undefined' || (initials != null && initials.hasOwnProperty ("__kwargtrans__"))) {;
/* 000517 */ 			var initials = null;
/* 000517 */ 		};
/* 000517 */ 		if (arguments.length) {
/* 000517 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000517 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000517 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000517 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000517 */ 					switch (__attrib0__) {
/* 000517 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000517 */ 						case 'display_nodelist': var display_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000517 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000517 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000517 */ 						case 'color_index': var color_index = __allkwargs0__ [__attrib0__]; break;
/* 000517 */ 						case 'initials': var initials = __allkwargs0__ [__attrib0__]; break;
/* 000517 */ 					}
/* 000517 */ 				}
/* 000517 */ 			}
/* 000517 */ 		}
/* 000517 */ 		else {
/* 000517 */ 		}
/* 000525 */ 		var content = (function () {
/* 000525 */ 			var __accu0__ = self;
/* 000525 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, display_nodelist, render_context);
/* 000525 */ 		}) ();
/* 000526 */ 		if (__t__ (initials)) {
/* 000527 */ 			var content = __add__ (__add__ (__add__ ('<span class="annotation-initials">', initials), '</span>'), content);
/* 000527 */ 		}
/* 000529 */ 		return (function () {
/* 000529 */ 			var __accu0__ = self;
/* 000529 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, (__t__ (is_block_level) ? 'div' : 'span'), content, __kwargtrans__ ({class_names: ['annotation', 'annotation-comment', 'annotation-{}'.format (color_index)]}));
/* 000529 */ 		}) ();
/* 000529 */ 	});},
/* 000538 */ 	get render_annotation_highlight () {return __get__ (this, function (self, display_nodelist, render_context, is_block_level, color_index, initials) {
/* 000538 */ 		if (typeof is_block_level == 'undefined' || (is_block_level != null && is_block_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000538 */ 			var is_block_level = false;
/* 000538 */ 		};
/* 000538 */ 		if (typeof color_index == 'undefined' || (color_index != null && color_index.hasOwnProperty ("__kwargtrans__"))) {;
/* 000538 */ 			var color_index = 0;
/* 000538 */ 		};
/* 000538 */ 		if (typeof initials == 'undefined' || (initials != null && initials.hasOwnProperty ("__kwargtrans__"))) {;
/* 000538 */ 			var initials = null;
/* 000538 */ 		};
/* 000538 */ 		if (arguments.length) {
/* 000538 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000538 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000538 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000538 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000538 */ 					switch (__attrib0__) {
/* 000538 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000538 */ 						case 'display_nodelist': var display_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000538 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000538 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000538 */ 						case 'color_index': var color_index = __allkwargs0__ [__attrib0__]; break;
/* 000538 */ 						case 'initials': var initials = __allkwargs0__ [__attrib0__]; break;
/* 000538 */ 					}
/* 000538 */ 				}
/* 000538 */ 			}
/* 000538 */ 		}
/* 000538 */ 		else {
/* 000538 */ 		}
/* 000546 */ 		var content = (function () {
/* 000546 */ 			var __accu0__ = self;
/* 000546 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, display_nodelist, render_context);
/* 000546 */ 		}) ();
/* 000547 */ 		if (__t__ (initials)) {
/* 000548 */ 			var content = __add__ (__add__ (__add__ ('<span class="annotation-initials">', initials), '</span>'), content);
/* 000548 */ 		}
/* 000550 */ 		return (function () {
/* 000550 */ 			var __accu0__ = self;
/* 000550 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, (__t__ (is_block_level) ? 'div' : 'span'), content, __kwargtrans__ ({class_names: ['annotation', 'annotation-highlight', 'annotation-{}'.format (color_index)]}));
/* 000550 */ 		}) ();
/* 000550 */ 	});},
/* 000560 */ 	get render_delayed_marker () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000560 */ 		if (arguments.length) {
/* 000560 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000560 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000560 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000560 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000560 */ 					switch (__attrib0__) {
/* 000560 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000560 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000560 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000560 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000560 */ 					}
/* 000560 */ 				}
/* 000560 */ 			}
/* 000560 */ 		}
/* 000560 */ 		else {
/* 000560 */ 		}
/* 000561 */ 		return '<FLM:DLYD:{}/>'.format (delayed_key);
/* 000561 */ 	});},
/* 000563 */ 	get render_delayed_dummy_placeholder () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000563 */ 		if (arguments.length) {
/* 000563 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000563 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000563 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000563 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000563 */ 					switch (__attrib0__) {
/* 000563 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000563 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000563 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000563 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000563 */ 					}
/* 000563 */ 				}
/* 000563 */ 			}
/* 000563 */ 		}
/* 000563 */ 		else {
/* 000563 */ 		}
/* 000564 */ 		return '<!-- delayed:{} -->'.format (delayed_key);
/* 000564 */ 	});},
/* 000566 */ 	get replace_delayed_markers_with_final_values () {return __get__ (this, function (self, content, delayed_values) {
/* 000566 */ 		if (arguments.length) {
/* 000566 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000566 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000566 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000566 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000566 */ 					switch (__attrib0__) {
/* 000566 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000566 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000566 */ 						case 'delayed_values': var delayed_values = __allkwargs0__ [__attrib0__]; break;
/* 000566 */ 					}
/* 000566 */ 				}
/* 000566 */ 			}
/* 000566 */ 		}
/* 000566 */ 		else {
/* 000566 */ 		}
/* 000567 */ 		return (function () {
/* 000567 */ 			var __accu0__ = _rx_delayed_markers;
/* 000567 */ 			return __call__ (__accu0__.sub, __accu0__, (function __lambda__ (m) {
/* 000567 */ 				if (arguments.length) {
/* 000567 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000567 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000567 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000567 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000567 */ 							switch (__attrib0__) {
/* 000567 */ 								case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000567 */ 							}
/* 000567 */ 						}
/* 000567 */ 					}
/* 000567 */ 				}
/* 000567 */ 				else {
/* 000567 */ 				}
/* 000568 */ 				return __getitem__ (delayed_values, __call__ (int, null, (function () {
/* 000568 */ 					var __accu1__ = m;
/* 000568 */ 					return __call__ (__accu1__.group, __accu1__, 'key');
/* 000568 */ 				}) ()));
/* 000568 */ 			}), content);
/* 000568 */ 		}) ();
/* 000568 */ 	});},
/* 000575 */ 	get render_float () {return __get__ (this, function (self, float_instance, render_context) {
/* 000575 */ 		if (arguments.length) {
/* 000575 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000575 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000575 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000575 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000575 */ 					switch (__attrib0__) {
/* 000575 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000575 */ 						case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000575 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000575 */ 					}
/* 000575 */ 				}
/* 000575 */ 			}
/* 000575 */ 		}
/* 000575 */ 		else {
/* 000575 */ 		}
/* 000578 */ 		var figattrs = dict ({});
/* 000580 */ 		if (__t__ (float_instance.target_id !== null)) {
/* 000581 */ 			__setitem__ (figattrs, 'id', float_instance.target_id);
/* 000581 */ 		}
/* 000583 */ 		var full_figcaption_rendered_list = [];
/* 000584 */ 		if (__t__ (float_instance.counter_value !== null)) {
/* 000586 */ 			(function () {
/* 000586 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000587 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000587 */ 					var __accu1__ = self;
/* 000589 */ 					return __call__ (__accu1__.wrap_in_tag, __accu1__, 'span', (function () {
/* 000589 */ 						var __accu2__ = self;
/* 000590 */ 						return __call__ (__accu2__.render_join, __accu2__, [(function () {
/* 000590 */ 							var __accu3__ = self;
/* 000590 */ 							return __call__ (__accu3__.render_value, __accu3__, float_instance.float_type_info.float_caption_name, render_context);
/* 000595 */ 						}) (), '&nbsp;', (function () {
/* 000595 */ 							var __accu3__ = self;
/* 000595 */ 							return __call__ (__accu3__.render_nodelist, __accu3__, float_instance.formatted_counter_value_flm.nodes, __kwargtrans__ ({render_context: render_context}));
/* 000595 */ 						}) ()], render_context);
/* 000595 */ 					}) (), __kwargtrans__ ({class_names: ['float-number']}));
/* 000595 */ 				}) ());
/* 000595 */ 			}) ();
/* 000595 */ 		}
/* 000603 */ 		else if (__t__ (float_instance.caption_nodelist)) {
/* 000606 */ 			(function () {
/* 000606 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000607 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000607 */ 					var __accu1__ = self;
/* 000609 */ 					return __call__ (__accu1__.wrap_in_tag, __accu1__, 'span', (function () {
/* 000609 */ 						var __accu2__ = self;
/* 000610 */ 						return __call__ (__accu2__.render_join, __accu2__, [(function () {
/* 000610 */ 							var __accu3__ = self;
/* 000610 */ 							return __call__ (__accu3__.render_value, __accu3__, float_instance.float_type_info.float_caption_name, render_context);
/* 000610 */ 						}) ()], render_context);
/* 000610 */ 					}) (), __kwargtrans__ ({class_names: ['float-no-number']}));
/* 000610 */ 				}) ());
/* 000610 */ 			}) ();
/* 000610 */ 		}
/* 000616 */ 		else {
/* 000620 */ 			// pass;
/* 000620 */ 		}
/* 000622 */ 		if (__t__ (float_instance.caption_nodelist)) {
/* 000626 */ 			(function () {
/* 000626 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000626 */ 				return __call__ (__accu0__.append, __accu0__, ': ');
/* 000626 */ 			}) ();
/* 000629 */ 			(function () {
/* 000629 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000630 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000630 */ 					var __accu1__ = self;
/* 000630 */ 					return __call__ (__accu1__.render_nodelist, __accu1__, float_instance.caption_nodelist, __kwargtrans__ ({render_context: render_context}));
/* 000630 */ 				}) ());
/* 000630 */ 			}) ();
/* 000630 */ 		}
/* 000636 */ 		var rendered_float_caption = null;
/* 000637 */ 		if (__t__ (full_figcaption_rendered_list)) {
/* 000638 */ 			var rendered_float_caption = (function () {
/* 000638 */ 				var __accu0__ = self;
/* 000640 */ 				return __call__ (__accu0__.wrap_in_tag, __accu0__, 'figcaption', (function () {
/* 000640 */ 					var __accu1__ = self;
/* 000642 */ 					return __call__ (__accu1__.wrap_in_tag, __accu1__, 'span', (function () {
/* 000642 */ 						var __accu2__ = self;
/* 000642 */ 						return __call__ (__accu2__.render_join, __accu2__, full_figcaption_rendered_list, render_context);
/* 000642 */ 					}) ());
/* 000642 */ 				}) (), __kwargtrans__ ({class_names: ['float-caption-content']}));
/* 000642 */ 			}) ();
/* 000642 */ 		}
/* 000647 */ 		var float_content_block_content = (function () {
/* 000647 */ 			var __accu0__ = self;
/* 000647 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, float_instance.content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: true}));
/* 000647 */ 		}) ();
/* 000652 */ 		var float_content_block = (function () {
/* 000652 */ 			var __accu0__ = self;
/* 000652 */ 			return __call__ (__accu0__.render_semantic_block, __accu0__, float_content_block_content, 'float-contents', __kwargtrans__ ({render_context: render_context}));
/* 000652 */ 		}) ();
/* 000658 */ 		if (__t__ (rendered_float_caption !== null)) {
/* 000659 */ 			var float_content_with_caption = (function () {
/* 000659 */ 				var __accu0__ = self;
/* 000659 */ 				return __call__ (__accu0__.render_join_blocks, __accu0__, [float_content_block, rendered_float_caption], render_context);
/* 000659 */ 			}) ();
/* 000659 */ 		}
/* 000663 */ 		else {
/* 000664 */ 			var float_content_with_caption = float_content_block;
/* 000664 */ 		}
/* 000666 */ 		var full_figure = (function () {
/* 000666 */ 			var __accu0__ = self;
/* 000666 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'figure', float_content_with_caption, __kwargtrans__ ({attrs: figattrs, class_names: ['float', 'float-{}'.format (float_instance.float_type)]}));
/* 000666 */ 		}) ();
/* 000673 */ 		return full_figure;
/* 000673 */ 	});},
/* 000676 */ 	graphics_raster_magnification: 1,
/* 000677 */ 	graphics_vector_magnification: 1,
/* 000679 */ 	get render_graphics_block () {return __get__ (this, function (self, graphics_resource, render_context) {
/* 000679 */ 		if (arguments.length) {
/* 000679 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000679 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000679 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000679 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000679 */ 					switch (__attrib0__) {
/* 000679 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000679 */ 						case 'graphics_resource': var graphics_resource = __allkwargs0__ [__attrib0__]; break;
/* 000679 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000679 */ 					}
/* 000679 */ 				}
/* 000679 */ 			}
/* 000679 */ 		}
/* 000679 */ 		else {
/* 000679 */ 		}
/* 000681 */ 		var imgattrs = dict ({});
/* 000683 */ 		var styparts = [];
/* 000684 */ 		if (__t__ (graphics_resource.physical_dimensions !== null)) {
/* 000686 */ 			var __left0__ = graphics_resource.physical_dimensions;
/* 000686 */ 			var width_pt = __left0__ [0];
/* 000686 */ 			var height_pt = __left0__ [1];
/* 000688 */ 			if (__t__ (__eq__ (graphics_resource.graphics_type, 'raster'))) {
/* 000689 */ 				if (__t__ (width_pt !== null)) {
/* 000690 */ 					var width_pt = __call__ (__imul__, null, width_pt, self.graphics_raster_magnification);
/* 000690 */ 				}
/* 000691 */ 				if (__t__ (height_pt !== null)) {
/* 000692 */ 					var height_pt = __call__ (__imul__, null, height_pt, self.graphics_raster_magnification);
/* 000692 */ 				}
/* 000692 */ 			}
/* 000693 */ 			else if (__t__ (__eq__ (graphics_resource.graphics_type, 'vector'))) {
/* 000694 */ 				if (__t__ (width_pt !== null)) {
/* 000695 */ 					var width_pt = __call__ (__imul__, null, width_pt, self.graphics_vector_magnification);
/* 000695 */ 				}
/* 000696 */ 				if (__t__ (height_pt !== null)) {
/* 000697 */ 					var height_pt = __call__ (__imul__, null, height_pt, self.graphics_vector_magnification);
/* 000697 */ 				}
/* 000697 */ 			}
/* 000699 */ 			if (__t__ (width_pt !== null)) {
/* 000700 */ 				(function () {
/* 000700 */ 					var __accu0__ = styparts;
/* 000700 */ 					return __call__ (__accu0__.append, __accu0__, 'width:{}pt'.format (width_pt));
/* 000700 */ 				}) ();
/* 000700 */ 			}
/* 000701 */ 			if (__t__ (height_pt !== null)) {
/* 000702 */ 				(function () {
/* 000702 */ 					var __accu0__ = styparts;
/* 000702 */ 					return __call__ (__accu0__.append, __accu0__, 'height:{}pt'.format (height_pt));
/* 000702 */ 				}) ();
/* 000702 */ 			}
/* 000702 */ 		}
/* 000704 */ 		if (__t__ (styparts)) {
/* 000705 */ 			__setitem__ (imgattrs, 'style', (function () {
/* 000705 */ 				var __accu0__ = ';';
/* 000705 */ 				return __call__ (__accu0__.join, __accu0__, styparts);
/* 000705 */ 			}) ());
/* 000705 */ 		}
/* 000707 */ 		var src_url = graphics_resource.src_url;
/* 000708 */ 		__setitem__ (imgattrs, 'src', src_url);
/* 000711 */ 		if (__t__ (__t__ (graphics_resource.srcset !== null) && __t__ (graphics_resource.srcset) && __call__ (len, null, graphics_resource.srcset))) {
/* 000713 */ 			var srcset_items = [];
/* 000714 */ 			var __iterable0__ = graphics_resource.srcset;
/* 000714 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000714 */ 				var srcset_info = __getitem__ (__iterable0__, __index0__);
/* 000715 */ 				var ss = __getitem__ (srcset_info, 'source');
/* 000716 */ 				if (__t__ (__in__ ('pixel_density', srcset_info))) {
/* 000717 */ 					var pixel_density = __getitem__ (srcset_info, 'pixel_density');
/* 000718 */ 					var ss = __call__ (__iadd__, null, ss, ' {}x'.format (pixel_density));
/* 000718 */ 				}
/* 000720 */ 				(function () {
/* 000720 */ 					var __accu0__ = srcset_items;
/* 000720 */ 					return __call__ (__accu0__.append, __accu0__, ss);
/* 000720 */ 				}) ();
/* 000720 */ 			}
/* 000722 */ 			__setitem__ (imgattrs, 'srcset', (function () {
/* 000722 */ 				var __accu0__ = ', ';
/* 000722 */ 				return __call__ (__accu0__.join, __accu0__, srcset_items);
/* 000722 */ 			}) ());
/* 000722 */ 		}
/* 000725 */ 		return (function () {
/* 000725 */ 			var __accu0__ = self;
/* 000725 */ 			return __call__ (__accu0__.generate_open_tag, __accu0__, 'img', __kwargtrans__ ({attrs: imgattrs}));
/* 000725 */ 		}) ();
/* 000725 */ 	});},
/* 000728 */ 	get render_cells () {return __get__ (this, function (self, cells_model, render_context, target_id) {
/* 000728 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000728 */ 			var target_id = null;
/* 000728 */ 		};
/* 000728 */ 		if (arguments.length) {
/* 000728 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000728 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000728 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000728 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000728 */ 					switch (__attrib0__) {
/* 000728 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000728 */ 						case 'cells_model': var cells_model = __allkwargs0__ [__attrib0__]; break;
/* 000728 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000728 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000728 */ 					}
/* 000728 */ 				}
/* 000728 */ 			}
/* 000728 */ 		}
/* 000728 */ 		else {
/* 000728 */ 		}
/* 000730 */ 		var __left0__ = tuple ([__call__ (len, null, cells_model.grid_data), __call__ (len, null, __getitem__ (cells_model.grid_data, 0))]);
/* 000730 */ 		var tabheight = __left0__ [0];
/* 000730 */ 		var tabwidth = __left0__ [1];
/* 000732 */ 		var data_items = [];
/* 000733 */ 		var row_j = 0;
/* 000734 */ 		while (__t__ (__lt__ (row_j, __call__ (len, null, cells_model.grid_data)))) {
/* 000735 */ 			var row_items = [];
/* 000736 */ 			var col_j = 0;
/* 000737 */ 			while (__t__ (__lt__ (col_j, __call__ (len, null, __getitem__ (cells_model.grid_data, row_j))))) {
/* 000739 */ 				var grid_cell_data = __getitem__ (__getitem__ (cells_model.grid_data, row_j), col_j);
/* 000741 */ 				if (__t__ (__t__ (grid_cell_data === null) || __getitem__ (grid_cell_data, 'cell') === null)) {
/* 000744 */ 					var clsnames = [];
/* 000745 */ 					if (__t__ (__eq__ (row_j, 0))) {
/* 000746 */ 						(function () {
/* 000746 */ 							var __accu0__ = clsnames;
/* 000746 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-top');
/* 000746 */ 						}) ();
/* 000746 */ 					}
/* 000747 */ 					if (__t__ (__eq__ (col_j, 0))) {
/* 000748 */ 						(function () {
/* 000748 */ 							var __accu0__ = clsnames;
/* 000748 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-left');
/* 000748 */ 						}) ();
/* 000748 */ 					}
/* 000749 */ 					if (__t__ (__eq__ (row_j, __sub__ (tabheight, 1)))) {
/* 000750 */ 						(function () {
/* 000750 */ 							var __accu0__ = clsnames;
/* 000750 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-bottom');
/* 000750 */ 						}) ();
/* 000750 */ 					}
/* 000751 */ 					if (__t__ (__eq__ (col_j, __sub__ (tabwidth, 1)))) {
/* 000752 */ 						(function () {
/* 000752 */ 							var __accu0__ = clsnames;
/* 000752 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-right');
/* 000752 */ 						}) ();
/* 000752 */ 					}
/* 000753 */ 					(function () {
/* 000753 */ 						var __accu0__ = row_items;
/* 000753 */ 						return __call__ (__accu0__.append, __accu0__, (function () {
/* 000753 */ 							var __accu1__ = self;
/* 000753 */ 							return __call__ (__accu1__.wrap_in_tag, __accu1__, 'td', '', __kwargtrans__ ({class_names: __add__ (['cell-empty'], clsnames)}));
/* 000753 */ 						}) ());
/* 000753 */ 					}) ();
/* 000758 */ 					var col_j = __call__ (__iadd__, null, col_j, 1);
/* 000758 */ 					continue;
/* 000758 */ 				}
/* 000761 */ 				if (__t__ (__getitem__ (grid_cell_data, 'is_topleft'))) {
/* 000763 */ 					var cell = __getitem__ (grid_cell_data, 'cell');
/* 000764 */ 					var rendered_cell_contents = (function () {
/* 000764 */ 						var __accu0__ = self;
/* 000764 */ 						return __call__ (__accu0__.render_nodelist, __accu0__, cell.content_nodes, __kwargtrans__ ({render_context: render_context}));
/* 000764 */ 					}) ();
/* 000768 */ 					var clsnames = __add__ (['cell'], (function () {
/* 000768 */ 						var __accu0__ = [];
/* 000768 */ 						var __iterable0__ = cell.styles;
/* 000768 */ 						for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000768 */ 							var sty = __getitem__ (__iterable0__, __index0__);
/* 000768 */ 							(function () {
/* 000768 */ 								var __accu1__ = __accu0__;
/* 000768 */ 								return __call__ (__accu1__.append, __accu1__, 'cellstyle-{}'.format (sty));
/* 000768 */ 							}) ();
/* 000768 */ 						}
/* 000768 */ 						return __accu0__;
/* 000768 */ 					}) ());
/* 000769 */ 					if (__t__ (__eq__ (row_j, 0))) {
/* 000770 */ 						(function () {
/* 000770 */ 							var __accu0__ = clsnames;
/* 000770 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-top');
/* 000770 */ 						}) ();
/* 000770 */ 					}
/* 000771 */ 					if (__t__ (__eq__ (col_j, 0))) {
/* 000772 */ 						(function () {
/* 000772 */ 							var __accu0__ = clsnames;
/* 000772 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-left');
/* 000772 */ 						}) ();
/* 000772 */ 					}
/* 000773 */ 					if (__t__ (__eq__ (cell.placement.row_range.end, tabheight))) {
/* 000774 */ 						(function () {
/* 000774 */ 							var __accu0__ = clsnames;
/* 000774 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-bottom');
/* 000774 */ 						}) ();
/* 000774 */ 					}
/* 000775 */ 					if (__t__ (__eq__ (cell.placement.col_range.end, tabwidth))) {
/* 000776 */ 						(function () {
/* 000776 */ 							var __accu0__ = clsnames;
/* 000776 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-right');
/* 000776 */ 						}) ();
/* 000776 */ 					}
/* 000777 */ 					var tagname = 'td';
/* 000778 */ 					if (__t__ (__t__ (__in__ ('H', cell.styles)) || __in__ ('rH', cell.styles))) {
/* 000779 */ 						var tagname = 'th';
/* 000779 */ 					}
/* 000780 */ 					var attrs = dict ({});
/* 000781 */ 					var cplc = cell.placement;
/* 000782 */ 					if (__t__ (__ne__ (cplc.col_range.end, __add__ (cplc.col_range.start, 1)))) {
/* 000785 */ 						__setitem__ (attrs, 'colspan', __call__ (str, null, __sub__ (cplc.col_range.end, cplc.col_range.start)));
/* 000785 */ 					}
/* 000786 */ 					if (__t__ (__ne__ (cplc.row_range.end, __add__ (cplc.row_range.start, 1)))) {
/* 000788 */ 						__setitem__ (attrs, 'rowspan', __call__ (str, null, __sub__ (cplc.row_range.end, cplc.row_range.start)));
/* 000788 */ 					}
/* 000789 */ 					(function () {
/* 000789 */ 						var __accu0__ = row_items;
/* 000790 */ 						return __call__ (__accu0__.append, __accu0__, (function () {
/* 000790 */ 							var __accu1__ = self;
/* 000790 */ 							return __call__ (__accu1__.wrap_in_tag, __accu1__, tagname, rendered_cell_contents, __kwargtrans__ ({attrs: attrs, class_names: clsnames}));
/* 000790 */ 						}) ());
/* 000790 */ 					}) ();
/* 000797 */ 					var col_j = cplc.col_range.end;
/* 000797 */ 					continue;
/* 000797 */ 				}
/* 000802 */ 				var col_j = __call__ (__iadd__, null, col_j, 1);
/* 000802 */ 			}
/* 000804 */ 			(function () {
/* 000804 */ 				var __accu0__ = data_items;
/* 000804 */ 				return __call__ (__accu0__.append, __accu0__, row_items);
/* 000804 */ 			}) ();
/* 000805 */ 			var row_j = __call__ (__iadd__, null, row_j, 1);
/* 000805 */ 		}
/* 000807 */ 		var table_attrs = dict ({});
/* 000808 */ 		if (__t__ (target_id !== null)) {
/* 000809 */ 			__setitem__ (table_attrs, 'id', target_id);
/* 000809 */ 		}
/* 000811 */ 		var s = (function () {
/* 000811 */ 			var __accu0__ = self;
/* 000813 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'table', (function () {
/* 000813 */ 				var __accu1__ = '';
/* 000813 */ 				return __call__ (__accu1__.join, __accu1__, (function () {
/* 000813 */ 					var __accu2__ = [];
/* 000813 */ 					var __iterable0__ = data_items;
/* 000813 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000815 */ 						var row_items = __getitem__ (__iterable0__, __index0__);
/* 000815 */ 						(function () {
/* 000815 */ 							var __accu3__ = __accu2__;
/* 000814 */ 							return __call__ (__accu3__.append, __accu3__, __add__ (__add__ ('<tr>', (function () {
/* 000814 */ 								var __accu4__ = '';
/* 000814 */ 								return __call__ (__accu4__.join, __accu4__, row_items);
/* 000814 */ 							}) ()), '</tr>'));
/* 000814 */ 						}) ();
/* 000814 */ 					}
/* 000814 */ 					return __accu2__;
/* 000814 */ 				}) ());
/* 000814 */ 			}) (), __kwargtrans__ ({attrs: table_attrs, class_names: ['cells']}));
/* 000814 */ 		}) ();
/* 000820 */ 		return s;
/* 000820 */ 	});}
/* 000820 */ });
/* 000826 */ export var _rx_delayed_markers = (function () {
/* 000826 */ 	var __accu0__ = re;
/* 000826 */ 	return __call__ (__accu0__.compile, __accu0__, '<FLM:DLYD:(?P<key>\\d+)\\s*/>');
/* 000826 */ }) ();
/* 000833 */ export var _html_css_global = '\np, ul, ol, .p-block {\n  margin: 1em 0px;\n}\np:first-child, ul:first-child, ol:first-child, .p-block:first-child {\n  margin-top: 0px;\n}\np:last-child, ul:last-child, ol:last-child, .p-block:last-child {\n  margin-bottom: 0px;\n}\ndd > p, dd > p:first-child, dd > p:last-child {\n  margin: 0.33em 0px;\n}\n\na, a:link, a:hover, a:active, a:visited {\n  color: #3232c8;\n  text-decoration: none;\n}\na:hover {\n  color: #22228a;\n}\n';
/* 000856 */ export var _html_css_content = "\n.emph, .textit {\n  font-style: italic;\n}\n.textbf {\n  font-weight: bold;\n}\n\nh1 {\n  font-size: 1.6rem;\n  line-height: 1.3em;\n  font-weight: bold;\n  margin: 1em 0px;\n}\nh2 {\n  font-size: 1.3rem;\n  line-height: 1.3em;\n  font-weight: bold;\n  margin: 1em 0px;\n}\nh3 {\n  font-size: 1rem;\n  font-weight: bold;\n  margin: 1em 0px;\n}\n\n.heading-level-4 {\n  font-style: italic;\n  display: inline;\n}\n.heading-level-4::after {\n  display: inline-block;\n  margin: 0px .12em;\n  content: '—';\n}\n\n.heading-level-5 {\n  font-style: italic;\n  font-size: .9em;\n  display: inline;\n}\n.heading-level-5::after {\n  display: inline-block;\n  margin-right: .12em;\n  content: '';\n}\n\n.heading-level-6 {\n  font-style: italic;\n  font-size: .8em;\n  display: inline;\n}\n.heading-level-6::after {\n  display: inline-block;\n  margin-right: .06em;\n  content: '';\n}\n\n\n.heading-level-theorem {\n  font-weight: bold;\n}\n.heading-level-theorem::after {\n  font-weight: bold;\n  display: inline-block;\n  margin: 0px .12em 0px 0px;\n  content: '.';\n}\n\ndiv.prooflike > p > .heading-level-theorem,\ndiv.prooflike > p > .heading-level-theorem::after {\n  font-weight: normal;\n  font-style: italic;\n}\n\n\ndl.enumeration {\n  display: block;\n  margin-left: 2.5em;\n}\ndl.enumeration > dt {\n  float: left;\n  clear: left;\n  display: inline-block;\n  /*margin: 0px; */\n  margin-left: -2.5em;\n  width: 2.0em;\n  min-width: 2.0em;\n  max-width: 2.0em;\n  margin-right: 0.5em;\n  text-align: right;\n}\ndl.enumeration > dd {\n  /*display: inline-block;\n  width: 100%;*/\n  border: 0px;\n  padding: 0px;\n  margin: 0px;\n}\n\nfigure.float {\n  width: 100%;\n  border-width: 1px 0px 1px 0px;\n  border-style: solid none solid none;\n  border-color: rgba(120, 120, 140, 0.15);\n  margin: 0.5rem 0px;\n  padding: 0.5rem 0px;\n}\n\nfigure.float .float-contents {\n  width: 100%;\n  max-width: 100%;\n  overflow-x: auto;\n}\n\nfigure.float .float-contents img {\n  display: block;\n  margin: 0pt auto;\n  padding: 0pt;\n  border: 0pt;\n  margin: 0px auto;\n}\n\nfigure.float figcaption {\n  display: block;\n  margin-top: 0.5em;\n  margin: 0.75em 2em 0px;\n  text-align: center;\n}\n\nfigure.float figcaption > span {\n  display: inline-block;\n  font-style: italic;\n  text-align: left;\n}\n\ntable {\n  margin: 1em 0px 1em 0px;\n  border-collapse: separate;\n  border-spacing: 0px;\n  /*border-top: solid 1pt;\n  border-bottom: solid 1pt;*/\n}\nfigure.float .float-contents table {\n  margin: 0px auto;\n}\ntd {\n  padding: 0.3em 0.5em;\n  border: none 0px;\n}\nth {\n  padding: 0.3em 0.5em;\n  border: none 0px;\n}\n.cellstyle-H {\n  border-bottom: solid .5pt;\n}\n.cellstyle-rH {\n}\n.cellstyle-l {\n  text-align: left;\n}\n.cellstyle-c {\n  text-align: center;\n}\n.cellstyle-r {\n  text-align: right;\n}\n.cellstyle-green {\n  background-color: rgba(69, 255, 69, 0.31); /*rgb(200,255,200);*/\n}\n.cellstyle-blue {\n  background-color: rgba(79, 142, 255, 0.27); /*rgb(200,220,255);*/\n}\n.cellstyle-yellow {\n  background-color: rgba(255, 255, 49, 0.33); /*rgb(255,255,200);*/\n}\n.cellstyle-red {\n  background-color: rgba(255,120,120,0.30);  /*rgb(255,200,200);*/\n}\n.cellstyle-lvert {\n  border-left: solid .5pt;\n}\n.cellstyle-rvert {\n  border-right: solid .5pt;\n}\n\n.celltbledge-top {\n  border-top: solid 1pt;\n}\n.celltbledge-bottom {\n  border-bottom: solid 1pt;\n}\n\n.verbatimcode {\n  font-family: monospace;\n  font-size: 0.9em;\n  background-color: rgba(127,127,127,0.25);\n  border-radius: 2px;\n  padding: 1px 2px;\n  display: inline-block;\n  white-space: pre-wrap;\n}\n.verbatima {\n  font-style: italic;\n}\n.verbatimcode-environment {\n  display: block;\n  margin: 0.75em 0px 1em;\n  white-space: pre;\n}\n\n.defterm {\n  font-style: italic;\n  margin: 1em 0px;\n}\n.defterm:first-child {\n  margin-top: 0px;\n}\n.defterm:last-child {\n  margin-bottom: 0px;\n}\n\n.defterm .defterm-term, .defterm .term-in-defining-defterm {\n  font-style: italic;\n  font-weight: bold;\n}\n\n.display-math {\n  width: 100%;\n  max-width: 100%;\n  display: block;\n  overflow-x: auto;\n}\n\n.endnote {\n}\n.citation {\n}\n.footnote {\n}\n.endnote-marks, .citation-marks {\n  font-size: 0.8em;\n  display: inline-block;\n  vertical-align: 0.3em;\n  margin-top: -0.3em;\n}\ndl.citation-list > dt, dl.footnote-list > dt {\n  font-size: 0.8em;\n  display: inline-block;\n  vertical-align: 0.3em;\n  margin-top: -0.3em;\n}\n\n.annotation {\n  color: var(--annotation-color);\n}\n.annotation-comment {\n  padding: 3pt 0px;\n  font-weight: 600;\n  font-family: sans-serif;\n}\n.annotation-comment::before {\n  content: '['\n}\n.annotation-comment::after {\n  content: ']'\n}\n.annotation-initials {\n  display: inline-block;\n  margin-right: 0.3em;\n  font-family: sans-serif;\n  font-size: .8em;\n  font-weight: normal;\n  font-style: normal;\n  line-height: .9;\n  padding: .5pt;\n  border: solid .4pt var(--annotation-color);\n  border-radius: 2pt;\n\n  float: right;\n  margin-right: -4em;\n}\n.annotation-0 {\n  --annotation-color: rgb(148,7,24); /* dark red / burgundy */\n}\n.annotation-1 {\n  --annotation-color: rgb(0,148,240); /* blue-y */\n}\n.annotation-2 {\n  --annotation-color: rgb(242,108,13); /* orange-brown-y */\n}\n.annotation-3 {\n  --annotation-color: rgb(65,149,42); /* green-y */\n}\n.annotation-4 {\n  --annotation-color: rgb(128,55,134); /* purple-y */\n}\n.annotation-5 {\n  --annotation-color: rgb(0,129,129); /* blue-green-y */\n}\n.annotation-6 {\n  --annotation-color: rgb(160,120,0); /* brownish */\n}\n.annotation-7 {\n  --annotation-color: rgb(35,195,155); /* aqua-ish */\n}\n\n";
/* 001167 */ export var _html_js_mathjax = '\nMathJax = {\n    tex: {\n        inlineMath: [[\'\\\\(\', \'\\\\)\']],\n        displayMath: [[\'\\\\[\', \'\\\\]\']],\n        processEnvironments: true,\n        processRefs: true,\n\n        // equation numbering on\n        tags: \'ams\'\n    },\n    options: {\n        // all MathJax content is marked with CSS classes\n        // skipHtmlTags: \'body\',\n        // processHtmlClass: \'display-math|inline-math\',\n    },\n    startup: {\n        pageReady: function() {\n            // override the default "typeset everything on the page" behavior to\n            // only typeset whatever we have explicitly marked as math\n            return typesetPageMathPromise();\n        }\n    }\n};\nfunction typesetPageMathPromise()\n{\n    var elements = document.querySelectorAll(\'.display-math, .inline-math\');\n    return MathJax.typesetPromise(elements);\n}\n';
/* 001198 */ export var _html_body_end_js_scripts_mathjax = '\n<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>\n<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>\n';
/* 001206 */ export var get_html_css_global = function (html_fragment_renderer) {
/* 001206 */ 	if (arguments.length) {
/* 001206 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001206 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001206 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001206 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001206 */ 				switch (__attrib0__) {
/* 001206 */ 					case 'html_fragment_renderer': var html_fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 001206 */ 				}
/* 001206 */ 			}
/* 001206 */ 		}
/* 001206 */ 	}
/* 001206 */ 	else {
/* 001206 */ 	}
/* 001207 */ 	return _html_css_global;
/* 001207 */ };
/* 001209 */ export var get_html_css_content = function (html_fragment_renderer) {
/* 001209 */ 	if (arguments.length) {
/* 001209 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001209 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001209 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001209 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001209 */ 				switch (__attrib0__) {
/* 001209 */ 					case 'html_fragment_renderer': var html_fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 001209 */ 				}
/* 001209 */ 			}
/* 001209 */ 		}
/* 001209 */ 	}
/* 001209 */ 	else {
/* 001209 */ 	}
/* 001210 */ 	return _html_css_content;
/* 001210 */ };
/* 001212 */ export var get_html_js = function (html_fragment_renderer) {
/* 001212 */ 	if (arguments.length) {
/* 001212 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001212 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001212 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001212 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001212 */ 				switch (__attrib0__) {
/* 001212 */ 					case 'html_fragment_renderer': var html_fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 001212 */ 				}
/* 001212 */ 			}
/* 001212 */ 		}
/* 001212 */ 	}
/* 001212 */ 	else {
/* 001212 */ 	}
/* 001213 */ 	if (__t__ (html_fragment_renderer.use_mathjax)) {
/* 001214 */ 		return _html_js_mathjax;
/* 001214 */ 	}
/* 001215 */ 	return '';
/* 001215 */ };
/* 001217 */ export var get_html_body_end_js_scripts = function (html_fragment_renderer) {
/* 001217 */ 	if (arguments.length) {
/* 001217 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001217 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001217 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001217 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001217 */ 				switch (__attrib0__) {
/* 001217 */ 					case 'html_fragment_renderer': var html_fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 001217 */ 				}
/* 001217 */ 			}
/* 001217 */ 		}
/* 001217 */ 	}
/* 001217 */ 	else {
/* 001217 */ 	}
/* 001218 */ 	if (__t__ (html_fragment_renderer.use_mathjax)) {
/* 001219 */ 		return _html_body_end_js_scripts_mathjax;
/* 001219 */ 	}
/* 001220 */ 	return '';
/* 001220 */ };
/* 001226 */ export var FragmentRendererInformation =  __class__ ('FragmentRendererInformation', [object], {
/* 001226 */ 	__module__: __name__,
/* 001232 */ 	FragmentRendererClass: HtmlFragmentRenderer,
/* 001235 */ 	get get_style_information () {return function (fragment_renderer) {
/* 001235 */ 		if (arguments.length) {
/* 001235 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001235 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001235 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001235 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001235 */ 					switch (__attrib0__) {
/* 001235 */ 						case 'fragment_renderer': var fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 001235 */ 					}
/* 001235 */ 				}
/* 001235 */ 			}
/* 001235 */ 		}
/* 001235 */ 		else {
/* 001235 */ 		}
/* 001240 */ 		return dict ({'css_global': __call__ (get_html_css_global, null, fragment_renderer), 'css_content': __call__ (get_html_css_content, null, fragment_renderer), 'js': __call__ (get_html_js, null, fragment_renderer), 'body_end_js_scripts': __call__ (get_html_body_end_js_scripts, null, fragment_renderer)});
/* 001240 */ 	};},
/* 001243 */ 	format_name: 'html'
/* 001243 */ });
/* 000006 */ 
//# sourceMappingURL=flm.fragmentrenderer.html.map