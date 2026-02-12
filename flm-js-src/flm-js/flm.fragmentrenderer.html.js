/* 000001 */ // Transcrypt'ed from Python, 2026-02-12 21:38:42
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
/* 000391 */ 	lines_use_line_span: true,
/* 000392 */ 	lines_use_br: true,
/* 000393 */ 	lines_container_tag: dict ({}),
/* 000397 */ 	get render_lines () {return __get__ (this, function (self, iter_lines_nodelists, render_context) {
/* 000397 */ 		var role = null;
/* 000397 */ 		var annotations = null;
/* 000397 */ 		var target_id = null;
/* 000397 */ 		if (arguments.length) {
/* 000397 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000397 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000397 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000397 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000397 */ 					switch (__attrib0__) {
/* 000397 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000397 */ 						case 'iter_lines_nodelists': var iter_lines_nodelists = __allkwargs0__ [__attrib0__]; break;
/* 000397 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000397 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000397 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000397 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000397 */ 					}
/* 000397 */ 				}
/* 000397 */ 			}
/* 000397 */ 		}
/* 000397 */ 		else {
/* 000397 */ 		}
/* 000406 */ 		var s_lines = [];
/* 000408 */ 		var __iterable0__ = iter_lines_nodelists;
/* 000408 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000408 */ 			var line_content_nodelist = __getitem__ (__iterable0__, __index0__);
/* 000410 */ 			var line_content = (function () {
/* 000410 */ 				var __accu0__ = self;
/* 000410 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, line_content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000410 */ 			}) ();
/* 000415 */ 			if (__t__ (self.lines_use_line_span)) {
/* 000416 */ 				var line_content = (function () {
/* 000416 */ 					var __accu0__ = self;
/* 000416 */ 					return __call__ (__accu0__.wrap_in_tag, __accu0__, 'span', line_content);
/* 000416 */ 				}) ();
/* 000416 */ 			}
/* 000420 */ 			(function () {
/* 000420 */ 				var __accu0__ = s_lines;
/* 000420 */ 				return __call__ (__accu0__.append, __accu0__, line_content);
/* 000420 */ 			}) ();
/* 000420 */ 		}
/* 000424 */ 		if (__t__ (self.lines_use_br)) {
/* 000426 */ 			var s_lines = (function () {
/* 000426 */ 				var __accu0__ = [];
/* 000428 */ 				var __iterable0__ = __call__ (enumerate, null, s_lines);
/* 000428 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000428 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000428 */ 					var j = __left0__ [0];
/* 000428 */ 					var line = __left0__ [1];
/* 000428 */ 					(function () {
/* 000428 */ 						var __accu1__ = __accu0__;
/* 000427 */ 						return __call__ (__accu1__.append, __accu1__, (__t__ (__lt__ (j, __sub__ (__call__ (len, null, s_lines), 1))) ? __add__ (line, '<br>') : line));
/* 000427 */ 					}) ();
/* 000427 */ 				}
/* 000427 */ 				return __accu0__;
/* 000427 */ 			}) ();
/* 000427 */ 		}
/* 000431 */ 		var attrs = dict ({});
/* 000432 */ 		if (__t__ (target_id !== null)) {
/* 000433 */ 			__setitem__ (attrs, 'id', target_id);
/* 000433 */ 		}
/* 000435 */ 		var annotations = __call__ (list, null, (__t__ (annotations !== null) ? annotations : []));
/* 000436 */ 		if (__t__ (__t__ (role) && __in__ (role, annotations))) {
/* 000437 */ 			(function () {
/* 000437 */ 				var __accu0__ = annotations;
/* 000437 */ 				return __call__ (__accu0__.remove, __accu0__, role);
/* 000437 */ 			}) ();
/* 000437 */ 		}
/* 000439 */ 		var class_names = ['lines'];
/* 000440 */ 		if (__t__ (role)) {
/* 000441 */ 			(function () {
/* 000441 */ 				var __accu0__ = class_names;
/* 000441 */ 				return __call__ (__accu0__.append, __accu0__, role);
/* 000441 */ 			}) ();
/* 000441 */ 		}
/* 000442 */ 		if (__t__ (annotations)) {
/* 000443 */ 			(function () {
/* 000443 */ 				var __accu0__ = class_names;
/* 000443 */ 				return __call__ (__accu0__.extend, __accu0__, annotations);
/* 000443 */ 			}) ();
/* 000443 */ 		}
/* 000445 */ 		var tag = 'p';
/* 000446 */ 		if (__t__ (__t__ (role) && __in__ (role, self.lines_container_tag))) {
/* 000447 */ 			var tag = __getitem__ (self.lines_container_tag, role);
/* 000447 */ 		}
/* 000449 */ 		return (function () {
/* 000449 */ 			var __accu0__ = self;
/* 000451 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'p', (function () {
/* 000451 */ 				var __accu1__ = self;
/* 000451 */ 				return __call__ (__accu1__.render_join, __accu1__, s_lines, render_context);
/* 000451 */ 			}) (), __kwargtrans__ ({class_names: class_names, attrs: attrs}));
/* 000451 */ 		}) ();
/* 000451 */ 	});},
/* 000457 */ 	get render_enumeration () {return __get__ (this, function (self, iter_items_nodelists, counter_formatter, render_context) {
/* 000457 */ 		var target_id_generator = null;
/* 000457 */ 		var annotations = null;
/* 000457 */ 		var nested_depth = null;
/* 000457 */ 		if (arguments.length) {
/* 000457 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000457 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000457 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000457 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000457 */ 					switch (__attrib0__) {
/* 000457 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000457 */ 						case 'iter_items_nodelists': var iter_items_nodelists = __allkwargs0__ [__attrib0__]; break;
/* 000457 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000457 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000457 */ 						case 'target_id_generator': var target_id_generator = __allkwargs0__ [__attrib0__]; break;
/* 000457 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000457 */ 						case 'nested_depth': var nested_depth = __allkwargs0__ [__attrib0__]; break;
/* 000457 */ 					}
/* 000457 */ 				}
/* 000457 */ 			}
/* 000457 */ 		}
/* 000457 */ 		else {
/* 000457 */ 		}
/* 000469 */ 		var s_items = [];
/* 000471 */ 		var __iterable0__ = __call__ (enumerate, null, iter_items_nodelists);
/* 000471 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000471 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000471 */ 			var j = __left0__ [0];
/* 000471 */ 			var item_content_nodelist = __left0__ [1];
/* 000473 */ 			var use_block_level = true;
/* 000474 */ 			if (__t__ (item_content_nodelist.parsing_state.is_block_level === false)) {
/* 000477 */ 				var use_block_level = false;
/* 000477 */ 			}
/* 000479 */ 			// pass;
/* 000483 */ 			// pass;
/* 000487 */ 			var item_content = (function () {
/* 000487 */ 				var __accu0__ = self;
/* 000487 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, item_content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: use_block_level}));
/* 000487 */ 			}) ();
/* 000493 */ 			var enumno = __add__ (1, j);
/* 000495 */ 			var tag_nodelist = __call__ (counter_formatter, null, enumno);
/* 000496 */ 			if (__t__ (__call__ (isinstance, null, tag_nodelist, str))) {
/* 000497 */ 				var tag_content = (function () {
/* 000497 */ 					var __accu0__ = self;
/* 000497 */ 					return __call__ (__accu0__.render_value, __accu0__, tag_nodelist, render_context);
/* 000497 */ 				}) ();
/* 000497 */ 			}
/* 000498 */ 			else {
/* 000499 */ 				var tag_content = (function () {
/* 000499 */ 					var __accu0__ = self;
/* 000499 */ 					return __call__ (__accu0__.render_nodelist, __accu0__, tag_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000499 */ 				}) ();
/* 000499 */ 			}
/* 000505 */ 			var dtattrs = dict ({});
/* 000506 */ 			if (__t__ (target_id_generator !== null)) {
/* 000507 */ 				var tid = __call__ (target_id_generator, null, enumno);
/* 000508 */ 				if (__t__ (tid !== null)) {
/* 000509 */ 					__setitem__ (dtattrs, 'id', tid);
/* 000509 */ 				}
/* 000509 */ 			}
/* 000511 */ 			(function () {
/* 000511 */ 				var __accu0__ = s_items;
/* 000512 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000512 */ 					var __accu1__ = self;
/* 000513 */ 					return __call__ (__accu1__.render_join, __accu1__, [(function () {
/* 000513 */ 						var __accu2__ = self;
/* 000513 */ 						return __call__ (__accu2__.wrap_in_tag, __accu2__, 'dt', tag_content, __kwargtrans__ ({attrs: dtattrs}));
/* 000518 */ 					}) (), (function () {
/* 000518 */ 						var __accu2__ = self;
/* 000518 */ 						return __call__ (__accu2__.wrap_in_tag, __accu2__, 'dd', item_content);
/* 000518 */ 					}) ()], render_context);
/* 000518 */ 				}) ());
/* 000518 */ 			}) ();
/* 000518 */ 		}
/* 000525 */ 		return (function () {
/* 000525 */ 			var __accu0__ = self;
/* 000527 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'dl', (function () {
/* 000527 */ 				var __accu1__ = self;
/* 000527 */ 				return __call__ (__accu1__.render_join, __accu1__, s_items, render_context);
/* 000527 */ 			}) (), __kwargtrans__ ({class_names: __add__ (['enumeration'], (__t__ (annotations) ? annotations : []))}));
/* 000527 */ 		}) ();
/* 000527 */ 	});},
/* 000532 */ 	get render_heading () {return __get__ (this, function (self, heading_nodelist, render_context) {
/* 000532 */ 		var heading_level = 1;
/* 000532 */ 		var inline_heading = false;
/* 000532 */ 		var target_id = null;
/* 000532 */ 		var annotations = null;
/* 000532 */ 		if (arguments.length) {
/* 000532 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000532 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000532 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000532 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000532 */ 					switch (__attrib0__) {
/* 000532 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000532 */ 						case 'heading_nodelist': var heading_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000532 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000532 */ 						case 'heading_level': var heading_level = __allkwargs0__ [__attrib0__]; break;
/* 000532 */ 						case 'inline_heading': var inline_heading = __allkwargs0__ [__attrib0__]; break;
/* 000532 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000532 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000532 */ 					}
/* 000532 */ 				}
/* 000532 */ 			}
/* 000532 */ 		}
/* 000532 */ 		else {
/* 000532 */ 		}
/* 000539 */ 		if (__t__ (!__in__ (heading_level, self.heading_tags_by_level))) {
/* 000542 */ 			var __except0__ = __call__ (ValueError, null, "HTML renderer: bad heading level ‘{}’,  expected one of {} (or set HTML fragment renderer's ‘heading_tags_by_level’ config".format (heading_level, __call__ (list, null, (function () {
/* 000542 */ 				var __accu0__ = self.heading_tags_by_level;
/* 000542 */ 				return __call__ (__accu0__.py_keys, __accu0__);
/* 000542 */ 			}) ())));
/* 000542 */ 			__except0__.__cause__ = null;
/* 000542 */ 			throw __except0__;
/* 000542 */ 		}
/* 000545 */ 		var annot = (__t__ (annotations) ? __call__ (list, null, annotations) : []);
/* 000546 */ 		(function () {
/* 000546 */ 			var __accu0__ = annot;
/* 000546 */ 			return __call__ (__accu0__.append, __accu0__, 'heading-level-{}'.format (heading_level));
/* 000546 */ 		}) ();
/* 000547 */ 		if (__t__ (inline_heading)) {
/* 000548 */ 			(function () {
/* 000548 */ 				var __accu0__ = annot;
/* 000548 */ 				return __call__ (__accu0__.append, __accu0__, 'heading-inline');
/* 000548 */ 			}) ();
/* 000548 */ 		}
/* 000550 */ 		var attrs = dict ({});
/* 000551 */ 		if (__t__ (target_id !== null)) {
/* 000552 */ 			__setitem__ (attrs, 'id', target_id);
/* 000552 */ 		}
/* 000554 */ 		var content = (function () {
/* 000554 */ 			var __accu0__ = self;
/* 000556 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, __getitem__ (self.heading_tags_by_level, heading_level), (function () {
/* 000556 */ 				var __accu1__ = self;
/* 000556 */ 				return __call__ (__accu1__.render_inline_content, __accu1__, heading_nodelist, render_context);
/* 000556 */ 			}) (), __kwargtrans__ ({class_names: annot, attrs: attrs}));
/* 000556 */ 		}) ();
/* 000560 */ 		if (__t__ (__t__ (inline_heading) && self.inline_heading_add_space)) {
/* 000561 */ 			var content = __call__ (__iadd__, null, content, ' ');
/* 000561 */ 		}
/* 000562 */ 		// pass;
/* 000566 */ 		return content;
/* 000566 */ 	});},
/* 000568 */ 	get render_link () {return __get__ (this, function (self, ref_type, href, display_nodelist, render_context, annotations) {
/* 000568 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000568 */ 			var annotations = null;
/* 000568 */ 		};
/* 000568 */ 		if (arguments.length) {
/* 000568 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000568 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000568 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000568 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000568 */ 					switch (__attrib0__) {
/* 000568 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000568 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000568 */ 						case 'href': var href = __allkwargs0__ [__attrib0__]; break;
/* 000568 */ 						case 'display_nodelist': var display_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000568 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000568 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000568 */ 					}
/* 000568 */ 				}
/* 000568 */ 			}
/* 000568 */ 		}
/* 000568 */ 		else {
/* 000568 */ 		}
/* 000569 */ 		var display_content = (function () {
/* 000569 */ 			var __accu0__ = self;
/* 000569 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, display_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000569 */ 		}) ();
/* 000574 */ 		if (__t__ (__t__ (!__t__ ((href))) && !__t__ ((self.render_links_with_empty_href)))) {
/* 000575 */ 			return display_content;
/* 000575 */ 		}
/* 000577 */ 		return (function () {
/* 000577 */ 			var __accu0__ = self;
/* 000577 */ 			return __call__ (__accu0__.wrap_in_link, __accu0__, display_content, href, __kwargtrans__ ({class_names: __add__ (['href-{}'.format (ref_type)], (__t__ (annotations) ? annotations : []))}));
/* 000577 */ 		}) ();
/* 000577 */ 	});},
/* 000583 */ 	get render_annotation_comment () {return __get__ (this, function (self, display_nodelist, render_context, is_block_level, color_index, initials) {
/* 000583 */ 		if (typeof is_block_level == 'undefined' || (is_block_level != null && is_block_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000583 */ 			var is_block_level = false;
/* 000583 */ 		};
/* 000583 */ 		if (typeof color_index == 'undefined' || (color_index != null && color_index.hasOwnProperty ("__kwargtrans__"))) {;
/* 000583 */ 			var color_index = 0;
/* 000583 */ 		};
/* 000583 */ 		if (typeof initials == 'undefined' || (initials != null && initials.hasOwnProperty ("__kwargtrans__"))) {;
/* 000583 */ 			var initials = null;
/* 000583 */ 		};
/* 000583 */ 		if (arguments.length) {
/* 000583 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000583 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000583 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000583 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000583 */ 					switch (__attrib0__) {
/* 000583 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000583 */ 						case 'display_nodelist': var display_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000583 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000583 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000583 */ 						case 'color_index': var color_index = __allkwargs0__ [__attrib0__]; break;
/* 000583 */ 						case 'initials': var initials = __allkwargs0__ [__attrib0__]; break;
/* 000583 */ 					}
/* 000583 */ 				}
/* 000583 */ 			}
/* 000583 */ 		}
/* 000583 */ 		else {
/* 000583 */ 		}
/* 000591 */ 		var content = (function () {
/* 000591 */ 			var __accu0__ = self;
/* 000591 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, display_nodelist, render_context);
/* 000591 */ 		}) ();
/* 000592 */ 		if (__t__ (initials)) {
/* 000593 */ 			var content = __add__ (__add__ (__add__ ('<span class="annotation-initials">', initials), '</span>'), content);
/* 000593 */ 		}
/* 000595 */ 		return (function () {
/* 000595 */ 			var __accu0__ = self;
/* 000595 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, (__t__ (is_block_level) ? 'div' : 'span'), content, __kwargtrans__ ({class_names: ['annotation', 'annotation-comment', 'annotation-{}'.format (color_index)]}));
/* 000595 */ 		}) ();
/* 000595 */ 	});},
/* 000604 */ 	get render_annotation_highlight () {return __get__ (this, function (self, display_nodelist, render_context, is_block_level, color_index, initials) {
/* 000604 */ 		if (typeof is_block_level == 'undefined' || (is_block_level != null && is_block_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000604 */ 			var is_block_level = false;
/* 000604 */ 		};
/* 000604 */ 		if (typeof color_index == 'undefined' || (color_index != null && color_index.hasOwnProperty ("__kwargtrans__"))) {;
/* 000604 */ 			var color_index = 0;
/* 000604 */ 		};
/* 000604 */ 		if (typeof initials == 'undefined' || (initials != null && initials.hasOwnProperty ("__kwargtrans__"))) {;
/* 000604 */ 			var initials = null;
/* 000604 */ 		};
/* 000604 */ 		if (arguments.length) {
/* 000604 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000604 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000604 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000604 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000604 */ 					switch (__attrib0__) {
/* 000604 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000604 */ 						case 'display_nodelist': var display_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000604 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000604 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000604 */ 						case 'color_index': var color_index = __allkwargs0__ [__attrib0__]; break;
/* 000604 */ 						case 'initials': var initials = __allkwargs0__ [__attrib0__]; break;
/* 000604 */ 					}
/* 000604 */ 				}
/* 000604 */ 			}
/* 000604 */ 		}
/* 000604 */ 		else {
/* 000604 */ 		}
/* 000612 */ 		var content = (function () {
/* 000612 */ 			var __accu0__ = self;
/* 000612 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, display_nodelist, render_context);
/* 000612 */ 		}) ();
/* 000613 */ 		if (__t__ (initials)) {
/* 000614 */ 			var content = __add__ (__add__ (__add__ ('<span class="annotation-initials">', initials), '</span>'), content);
/* 000614 */ 		}
/* 000616 */ 		return (function () {
/* 000616 */ 			var __accu0__ = self;
/* 000616 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, (__t__ (is_block_level) ? 'div' : 'span'), content, __kwargtrans__ ({class_names: ['annotation', 'annotation-highlight', 'annotation-{}'.format (color_index)]}));
/* 000616 */ 		}) ();
/* 000616 */ 	});},
/* 000626 */ 	get render_delayed_marker () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000626 */ 		if (arguments.length) {
/* 000626 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000626 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000626 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000626 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000626 */ 					switch (__attrib0__) {
/* 000626 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000626 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000626 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000626 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000626 */ 					}
/* 000626 */ 				}
/* 000626 */ 			}
/* 000626 */ 		}
/* 000626 */ 		else {
/* 000626 */ 		}
/* 000627 */ 		return '<FLM:DLYD:{}/>'.format (delayed_key);
/* 000627 */ 	});},
/* 000629 */ 	get render_delayed_dummy_placeholder () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000629 */ 		if (arguments.length) {
/* 000629 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000629 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000629 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000629 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000629 */ 					switch (__attrib0__) {
/* 000629 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000629 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000629 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000629 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000629 */ 					}
/* 000629 */ 				}
/* 000629 */ 			}
/* 000629 */ 		}
/* 000629 */ 		else {
/* 000629 */ 		}
/* 000630 */ 		return '<!-- delayed:{} -->'.format (delayed_key);
/* 000630 */ 	});},
/* 000632 */ 	get replace_delayed_markers_with_final_values () {return __get__ (this, function (self, content, delayed_values) {
/* 000632 */ 		if (arguments.length) {
/* 000632 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000632 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000632 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000632 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000632 */ 					switch (__attrib0__) {
/* 000632 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000632 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000632 */ 						case 'delayed_values': var delayed_values = __allkwargs0__ [__attrib0__]; break;
/* 000632 */ 					}
/* 000632 */ 				}
/* 000632 */ 			}
/* 000632 */ 		}
/* 000632 */ 		else {
/* 000632 */ 		}
/* 000633 */ 		return (function () {
/* 000633 */ 			var __accu0__ = _rx_delayed_markers;
/* 000633 */ 			return __call__ (__accu0__.sub, __accu0__, (function __lambda__ (m) {
/* 000633 */ 				if (arguments.length) {
/* 000633 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000633 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000633 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000633 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000633 */ 							switch (__attrib0__) {
/* 000633 */ 								case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000633 */ 							}
/* 000633 */ 						}
/* 000633 */ 					}
/* 000633 */ 				}
/* 000633 */ 				else {
/* 000633 */ 				}
/* 000634 */ 				return __getitem__ (delayed_values, __call__ (int, null, (function () {
/* 000634 */ 					var __accu1__ = m;
/* 000634 */ 					return __call__ (__accu1__.group, __accu1__, 'key');
/* 000634 */ 				}) ()));
/* 000634 */ 			}), content);
/* 000634 */ 		}) ();
/* 000634 */ 	});},
/* 000641 */ 	float_caption_title_separator: ': ',
/* 000643 */ 	get render_float () {return __get__ (this, function (self, float_instance, render_context) {
/* 000643 */ 		if (arguments.length) {
/* 000643 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000643 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000643 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000643 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000643 */ 					switch (__attrib0__) {
/* 000643 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000643 */ 						case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000643 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000643 */ 					}
/* 000643 */ 				}
/* 000643 */ 			}
/* 000643 */ 		}
/* 000643 */ 		else {
/* 000643 */ 		}
/* 000646 */ 		var figattrs = dict ({});
/* 000648 */ 		if (__t__ (float_instance.target_id !== null)) {
/* 000649 */ 			__setitem__ (figattrs, 'id', float_instance.target_id);
/* 000649 */ 		}
/* 000651 */ 		var full_figcaption_rendered_list = [];
/* 000652 */ 		if (__t__ (float_instance.counter_value !== null)) {
/* 000654 */ 			(function () {
/* 000654 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000655 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000655 */ 					var __accu1__ = self;
/* 000657 */ 					return __call__ (__accu1__.wrap_in_tag, __accu1__, 'span', (function () {
/* 000657 */ 						var __accu2__ = self;
/* 000658 */ 						return __call__ (__accu2__.render_join, __accu2__, [(function () {
/* 000658 */ 							var __accu3__ = self;
/* 000658 */ 							return __call__ (__accu3__.render_value, __accu3__, float_instance.float_type_info.float_caption_name, render_context);
/* 000663 */ 						}) (), '&nbsp;', (function () {
/* 000663 */ 							var __accu3__ = self;
/* 000663 */ 							return __call__ (__accu3__.render_nodelist, __accu3__, float_instance.formatted_counter_value_flm.nodes, __kwargtrans__ ({render_context: render_context}));
/* 000663 */ 						}) ()], render_context);
/* 000663 */ 					}) (), __kwargtrans__ ({class_names: ['float-number']}));
/* 000663 */ 				}) ());
/* 000663 */ 			}) ();
/* 000663 */ 		}
/* 000671 */ 		else if (__t__ (float_instance.caption_nodelist)) {
/* 000674 */ 			(function () {
/* 000674 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000675 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000675 */ 					var __accu1__ = self;
/* 000677 */ 					return __call__ (__accu1__.wrap_in_tag, __accu1__, 'span', (function () {
/* 000677 */ 						var __accu2__ = self;
/* 000678 */ 						return __call__ (__accu2__.render_join, __accu2__, [(function () {
/* 000678 */ 							var __accu3__ = self;
/* 000678 */ 							return __call__ (__accu3__.render_value, __accu3__, float_instance.float_type_info.float_caption_name, render_context);
/* 000678 */ 						}) ()], render_context);
/* 000678 */ 					}) (), __kwargtrans__ ({class_names: ['float-no-number']}));
/* 000678 */ 				}) ());
/* 000678 */ 			}) ();
/* 000678 */ 		}
/* 000684 */ 		else {
/* 000688 */ 			// pass;
/* 000688 */ 		}
/* 000690 */ 		if (__t__ (float_instance.caption_nodelist)) {
/* 000694 */ 			(function () {
/* 000694 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000694 */ 				return __call__ (__accu0__.append, __accu0__, self.float_caption_title_separator);
/* 000694 */ 			}) ();
/* 000699 */ 			(function () {
/* 000699 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000700 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000700 */ 					var __accu1__ = self;
/* 000700 */ 					return __call__ (__accu1__.render_nodelist, __accu1__, float_instance.caption_nodelist, __kwargtrans__ ({render_context: render_context}));
/* 000700 */ 				}) ());
/* 000700 */ 			}) ();
/* 000700 */ 		}
/* 000706 */ 		var rendered_float_caption = null;
/* 000707 */ 		if (__t__ (full_figcaption_rendered_list)) {
/* 000708 */ 			var rendered_float_caption = (function () {
/* 000708 */ 				var __accu0__ = self;
/* 000710 */ 				return __call__ (__accu0__.wrap_in_tag, __accu0__, 'figcaption', (function () {
/* 000710 */ 					var __accu1__ = self;
/* 000712 */ 					return __call__ (__accu1__.wrap_in_tag, __accu1__, 'span', (function () {
/* 000712 */ 						var __accu2__ = self;
/* 000712 */ 						return __call__ (__accu2__.render_join, __accu2__, full_figcaption_rendered_list, render_context);
/* 000712 */ 					}) ());
/* 000712 */ 				}) (), __kwargtrans__ ({class_names: ['float-caption-content']}));
/* 000712 */ 			}) ();
/* 000712 */ 		}
/* 000717 */ 		var float_content_block_content = (function () {
/* 000717 */ 			var __accu0__ = self;
/* 000717 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, float_instance.content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: true}));
/* 000717 */ 		}) ();
/* 000722 */ 		var float_content_block = (function () {
/* 000722 */ 			var __accu0__ = self;
/* 000722 */ 			return __call__ (__accu0__.render_semantic_block, __accu0__, float_content_block_content, 'float-contents', __kwargtrans__ ({render_context: render_context}));
/* 000722 */ 		}) ();
/* 000728 */ 		if (__t__ (rendered_float_caption !== null)) {
/* 000729 */ 			var float_content_with_caption = (function () {
/* 000729 */ 				var __accu0__ = self;
/* 000729 */ 				return __call__ (__accu0__.render_join_blocks, __accu0__, [float_content_block, rendered_float_caption], render_context);
/* 000729 */ 			}) ();
/* 000729 */ 		}
/* 000733 */ 		else {
/* 000734 */ 			var float_content_with_caption = float_content_block;
/* 000734 */ 		}
/* 000736 */ 		var full_figure = (function () {
/* 000736 */ 			var __accu0__ = self;
/* 000736 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'figure', float_content_with_caption, __kwargtrans__ ({attrs: figattrs, class_names: ['float', 'float-{}'.format (float_instance.float_type)]}));
/* 000736 */ 		}) ();
/* 000743 */ 		return full_figure;
/* 000743 */ 	});},
/* 000746 */ 	graphics_raster_magnification: 1,
/* 000747 */ 	graphics_vector_magnification: 1,
/* 000749 */ 	get render_graphics_block () {return __get__ (this, function (self, graphics_resource, render_context) {
/* 000749 */ 		if (arguments.length) {
/* 000749 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000749 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000749 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000749 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000749 */ 					switch (__attrib0__) {
/* 000749 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000749 */ 						case 'graphics_resource': var graphics_resource = __allkwargs0__ [__attrib0__]; break;
/* 000749 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000749 */ 					}
/* 000749 */ 				}
/* 000749 */ 			}
/* 000749 */ 		}
/* 000749 */ 		else {
/* 000749 */ 		}
/* 000751 */ 		var imgattrs = dict ({});
/* 000753 */ 		var styparts = [];
/* 000754 */ 		if (__t__ (graphics_resource.physical_dimensions !== null)) {
/* 000756 */ 			var __left0__ = graphics_resource.physical_dimensions;
/* 000756 */ 			var width_pt = __left0__ [0];
/* 000756 */ 			var height_pt = __left0__ [1];
/* 000758 */ 			if (__t__ (__eq__ (graphics_resource.graphics_type, 'raster'))) {
/* 000759 */ 				if (__t__ (width_pt !== null)) {
/* 000760 */ 					var width_pt = __call__ (__imul__, null, width_pt, self.graphics_raster_magnification);
/* 000760 */ 				}
/* 000761 */ 				if (__t__ (height_pt !== null)) {
/* 000762 */ 					var height_pt = __call__ (__imul__, null, height_pt, self.graphics_raster_magnification);
/* 000762 */ 				}
/* 000762 */ 			}
/* 000763 */ 			else if (__t__ (__eq__ (graphics_resource.graphics_type, 'vector'))) {
/* 000764 */ 				if (__t__ (width_pt !== null)) {
/* 000765 */ 					var width_pt = __call__ (__imul__, null, width_pt, self.graphics_vector_magnification);
/* 000765 */ 				}
/* 000766 */ 				if (__t__ (height_pt !== null)) {
/* 000767 */ 					var height_pt = __call__ (__imul__, null, height_pt, self.graphics_vector_magnification);
/* 000767 */ 				}
/* 000767 */ 			}
/* 000769 */ 			if (__t__ (width_pt !== null)) {
/* 000770 */ 				(function () {
/* 000770 */ 					var __accu0__ = styparts;
/* 000770 */ 					return __call__ (__accu0__.append, __accu0__, 'width:{}pt'.format (width_pt));
/* 000770 */ 				}) ();
/* 000770 */ 			}
/* 000771 */ 			if (__t__ (height_pt !== null)) {
/* 000772 */ 				(function () {
/* 000772 */ 					var __accu0__ = styparts;
/* 000772 */ 					return __call__ (__accu0__.append, __accu0__, 'height:{}pt'.format (height_pt));
/* 000772 */ 				}) ();
/* 000772 */ 			}
/* 000772 */ 		}
/* 000774 */ 		if (__t__ (styparts)) {
/* 000775 */ 			__setitem__ (imgattrs, 'style', (function () {
/* 000775 */ 				var __accu0__ = ';';
/* 000775 */ 				return __call__ (__accu0__.join, __accu0__, styparts);
/* 000775 */ 			}) ());
/* 000775 */ 		}
/* 000777 */ 		var src_url = graphics_resource.src_url;
/* 000778 */ 		__setitem__ (imgattrs, 'src', src_url);
/* 000781 */ 		if (__t__ (__t__ (graphics_resource.srcset !== null) && __t__ (graphics_resource.srcset) && __call__ (len, null, graphics_resource.srcset))) {
/* 000783 */ 			var srcset_items = [];
/* 000784 */ 			var __iterable0__ = graphics_resource.srcset;
/* 000784 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000784 */ 				var srcset_info = __getitem__ (__iterable0__, __index0__);
/* 000785 */ 				var ss = __getitem__ (srcset_info, 'source');
/* 000786 */ 				if (__t__ (__in__ ('pixel_density', srcset_info))) {
/* 000787 */ 					var pixel_density = __getitem__ (srcset_info, 'pixel_density');
/* 000788 */ 					var ss = __call__ (__iadd__, null, ss, ' {}x'.format (pixel_density));
/* 000788 */ 				}
/* 000790 */ 				(function () {
/* 000790 */ 					var __accu0__ = srcset_items;
/* 000790 */ 					return __call__ (__accu0__.append, __accu0__, ss);
/* 000790 */ 				}) ();
/* 000790 */ 			}
/* 000792 */ 			__setitem__ (imgattrs, 'srcset', (function () {
/* 000792 */ 				var __accu0__ = ', ';
/* 000792 */ 				return __call__ (__accu0__.join, __accu0__, srcset_items);
/* 000792 */ 			}) ());
/* 000792 */ 		}
/* 000795 */ 		return (function () {
/* 000795 */ 			var __accu0__ = self;
/* 000795 */ 			return __call__ (__accu0__.generate_open_tag, __accu0__, 'img', __kwargtrans__ ({attrs: imgattrs}));
/* 000795 */ 		}) ();
/* 000795 */ 	});},
/* 000798 */ 	get render_cells () {return __get__ (this, function (self, cells_model, render_context, target_id) {
/* 000798 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000798 */ 			var target_id = null;
/* 000798 */ 		};
/* 000798 */ 		if (arguments.length) {
/* 000798 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000798 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000798 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000798 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000798 */ 					switch (__attrib0__) {
/* 000798 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000798 */ 						case 'cells_model': var cells_model = __allkwargs0__ [__attrib0__]; break;
/* 000798 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000798 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000798 */ 					}
/* 000798 */ 				}
/* 000798 */ 			}
/* 000798 */ 		}
/* 000798 */ 		else {
/* 000798 */ 		}
/* 000800 */ 		var __left0__ = tuple ([__call__ (len, null, cells_model.grid_data), __call__ (len, null, __getitem__ (cells_model.grid_data, 0))]);
/* 000800 */ 		var tabheight = __left0__ [0];
/* 000800 */ 		var tabwidth = __left0__ [1];
/* 000802 */ 		var data_items = [];
/* 000803 */ 		var row_j = 0;
/* 000804 */ 		while (__t__ (__lt__ (row_j, __call__ (len, null, cells_model.grid_data)))) {
/* 000805 */ 			var row_items = [];
/* 000806 */ 			var col_j = 0;
/* 000807 */ 			while (__t__ (__lt__ (col_j, __call__ (len, null, __getitem__ (cells_model.grid_data, row_j))))) {
/* 000809 */ 				var grid_cell_data = __getitem__ (__getitem__ (cells_model.grid_data, row_j), col_j);
/* 000811 */ 				if (__t__ (__t__ (grid_cell_data === null) || __getitem__ (grid_cell_data, 'cell') === null)) {
/* 000814 */ 					var clsnames = [];
/* 000815 */ 					if (__t__ (__eq__ (row_j, 0))) {
/* 000816 */ 						(function () {
/* 000816 */ 							var __accu0__ = clsnames;
/* 000816 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-top');
/* 000816 */ 						}) ();
/* 000816 */ 					}
/* 000817 */ 					if (__t__ (__eq__ (col_j, 0))) {
/* 000818 */ 						(function () {
/* 000818 */ 							var __accu0__ = clsnames;
/* 000818 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-left');
/* 000818 */ 						}) ();
/* 000818 */ 					}
/* 000819 */ 					if (__t__ (__eq__ (row_j, __sub__ (tabheight, 1)))) {
/* 000820 */ 						(function () {
/* 000820 */ 							var __accu0__ = clsnames;
/* 000820 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-bottom');
/* 000820 */ 						}) ();
/* 000820 */ 					}
/* 000821 */ 					if (__t__ (__eq__ (col_j, __sub__ (tabwidth, 1)))) {
/* 000822 */ 						(function () {
/* 000822 */ 							var __accu0__ = clsnames;
/* 000822 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-right');
/* 000822 */ 						}) ();
/* 000822 */ 					}
/* 000823 */ 					(function () {
/* 000823 */ 						var __accu0__ = row_items;
/* 000823 */ 						return __call__ (__accu0__.append, __accu0__, (function () {
/* 000823 */ 							var __accu1__ = self;
/* 000823 */ 							return __call__ (__accu1__.wrap_in_tag, __accu1__, 'td', '', __kwargtrans__ ({class_names: __add__ (['cell-empty'], clsnames)}));
/* 000823 */ 						}) ());
/* 000823 */ 					}) ();
/* 000828 */ 					var col_j = __call__ (__iadd__, null, col_j, 1);
/* 000828 */ 					continue;
/* 000828 */ 				}
/* 000831 */ 				if (__t__ (__getitem__ (grid_cell_data, 'is_topleft'))) {
/* 000833 */ 					var cell = __getitem__ (grid_cell_data, 'cell');
/* 000834 */ 					var rendered_cell_contents = (function () {
/* 000834 */ 						var __accu0__ = self;
/* 000834 */ 						return __call__ (__accu0__.render_nodelist, __accu0__, cell.content_nodes, __kwargtrans__ ({render_context: render_context}));
/* 000834 */ 					}) ();
/* 000838 */ 					var clsnames = __add__ (['cell'], (function () {
/* 000838 */ 						var __accu0__ = [];
/* 000838 */ 						var __iterable0__ = cell.styles;
/* 000838 */ 						for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000838 */ 							var sty = __getitem__ (__iterable0__, __index0__);
/* 000838 */ 							(function () {
/* 000838 */ 								var __accu1__ = __accu0__;
/* 000838 */ 								return __call__ (__accu1__.append, __accu1__, 'cellstyle-{}'.format (sty));
/* 000838 */ 							}) ();
/* 000838 */ 						}
/* 000838 */ 						return __accu0__;
/* 000838 */ 					}) ());
/* 000839 */ 					if (__t__ (__eq__ (row_j, 0))) {
/* 000840 */ 						(function () {
/* 000840 */ 							var __accu0__ = clsnames;
/* 000840 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-top');
/* 000840 */ 						}) ();
/* 000840 */ 					}
/* 000841 */ 					if (__t__ (__eq__ (col_j, 0))) {
/* 000842 */ 						(function () {
/* 000842 */ 							var __accu0__ = clsnames;
/* 000842 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-left');
/* 000842 */ 						}) ();
/* 000842 */ 					}
/* 000843 */ 					if (__t__ (__eq__ (cell.placement.row_range.end, tabheight))) {
/* 000844 */ 						(function () {
/* 000844 */ 							var __accu0__ = clsnames;
/* 000844 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-bottom');
/* 000844 */ 						}) ();
/* 000844 */ 					}
/* 000845 */ 					if (__t__ (__eq__ (cell.placement.col_range.end, tabwidth))) {
/* 000846 */ 						(function () {
/* 000846 */ 							var __accu0__ = clsnames;
/* 000846 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-right');
/* 000846 */ 						}) ();
/* 000846 */ 					}
/* 000847 */ 					var tagname = 'td';
/* 000848 */ 					if (__t__ (__t__ (__in__ ('H', cell.styles)) || __in__ ('rH', cell.styles))) {
/* 000849 */ 						var tagname = 'th';
/* 000849 */ 					}
/* 000850 */ 					var attrs = dict ({});
/* 000851 */ 					var cplc = cell.placement;
/* 000852 */ 					if (__t__ (__ne__ (cplc.col_range.end, __add__ (cplc.col_range.start, 1)))) {
/* 000855 */ 						__setitem__ (attrs, 'colspan', __call__ (str, null, __sub__ (cplc.col_range.end, cplc.col_range.start)));
/* 000855 */ 					}
/* 000856 */ 					if (__t__ (__ne__ (cplc.row_range.end, __add__ (cplc.row_range.start, 1)))) {
/* 000858 */ 						__setitem__ (attrs, 'rowspan', __call__ (str, null, __sub__ (cplc.row_range.end, cplc.row_range.start)));
/* 000858 */ 					}
/* 000859 */ 					(function () {
/* 000859 */ 						var __accu0__ = row_items;
/* 000860 */ 						return __call__ (__accu0__.append, __accu0__, (function () {
/* 000860 */ 							var __accu1__ = self;
/* 000860 */ 							return __call__ (__accu1__.wrap_in_tag, __accu1__, tagname, rendered_cell_contents, __kwargtrans__ ({attrs: attrs, class_names: clsnames}));
/* 000860 */ 						}) ());
/* 000860 */ 					}) ();
/* 000867 */ 					var col_j = cplc.col_range.end;
/* 000867 */ 					continue;
/* 000867 */ 				}
/* 000872 */ 				var col_j = __call__ (__iadd__, null, col_j, 1);
/* 000872 */ 			}
/* 000874 */ 			(function () {
/* 000874 */ 				var __accu0__ = data_items;
/* 000874 */ 				return __call__ (__accu0__.append, __accu0__, row_items);
/* 000874 */ 			}) ();
/* 000875 */ 			var row_j = __call__ (__iadd__, null, row_j, 1);
/* 000875 */ 		}
/* 000877 */ 		var table_attrs = dict ({});
/* 000878 */ 		if (__t__ (target_id !== null)) {
/* 000879 */ 			__setitem__ (table_attrs, 'id', target_id);
/* 000879 */ 		}
/* 000881 */ 		var s = (function () {
/* 000881 */ 			var __accu0__ = self;
/* 000883 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'table', (function () {
/* 000883 */ 				var __accu1__ = '';
/* 000883 */ 				return __call__ (__accu1__.join, __accu1__, (function () {
/* 000883 */ 					var __accu2__ = [];
/* 000883 */ 					var __iterable0__ = data_items;
/* 000883 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000885 */ 						var row_items = __getitem__ (__iterable0__, __index0__);
/* 000885 */ 						(function () {
/* 000885 */ 							var __accu3__ = __accu2__;
/* 000884 */ 							return __call__ (__accu3__.append, __accu3__, __add__ (__add__ ('<tr>', (function () {
/* 000884 */ 								var __accu4__ = '';
/* 000884 */ 								return __call__ (__accu4__.join, __accu4__, row_items);
/* 000884 */ 							}) ()), '</tr>'));
/* 000884 */ 						}) ();
/* 000884 */ 					}
/* 000884 */ 					return __accu2__;
/* 000884 */ 				}) ());
/* 000884 */ 			}) (), __kwargtrans__ ({attrs: table_attrs, class_names: ['cells']}));
/* 000884 */ 		}) ();
/* 000890 */ 		return s;
/* 000890 */ 	});}
/* 000890 */ });
/* 000896 */ export var _rx_delayed_markers = (function () {
/* 000896 */ 	var __accu0__ = re;
/* 000896 */ 	return __call__ (__accu0__.compile, __accu0__, '<FLM:DLYD:(?P<key>\\d+)\\s*/>');
/* 000896 */ }) ();
/* 000903 */ export var _html_css_global = '\np, ul, ol, .p-block {\n  margin: 1em 0px;\n}\np:first-child, ul:first-child, ol:first-child, .p-block:first-child {\n  margin-top: 0px;\n}\np:last-child, ul:last-child, ol:last-child, .p-block:last-child {\n  margin-bottom: 0px;\n}\ndd > p, dd > p:first-child, dd > p:last-child {\n  margin: 0.33em 0px;\n}\n\na, a:link, a:hover, a:active, a:visited {\n  color: #3232c8;\n  text-decoration: none;\n}\na:hover {\n  color: #22228a;\n}\n';
/* 000926 */ export var _html_css_content = "\n.emph, .textit {\n  font-style: italic;\n}\n.textbf {\n  font-weight: bold;\n}\n\nh1 {\n  font-size: 1.6rem;\n  line-height: 1.3em;\n  font-weight: bold;\n  margin: 1em 0px;\n}\nh2 {\n  font-size: 1.3rem;\n  line-height: 1.3em;\n  font-weight: bold;\n  margin: 1em 0px;\n}\nh3 {\n  font-size: 1rem;\n  font-weight: bold;\n  margin: 1em 0px;\n}\n\n.heading-level-4 {\n  font-style: italic;\n  display: inline;\n}\n.heading-level-4::after {\n  display: inline-block;\n  margin: 0px .12em;\n  content: '—';\n}\n\n.heading-level-5 {\n  font-style: italic;\n  font-size: .9em;\n  display: inline;\n}\n.heading-level-5::after {\n  display: inline-block;\n  margin-right: .12em;\n  content: '';\n}\n\n.heading-level-6 {\n  font-style: italic;\n  font-size: .8em;\n  display: inline;\n}\n.heading-level-6::after {\n  display: inline-block;\n  margin-right: .06em;\n  content: '';\n}\n\n\n.heading-level-theorem {\n  font-weight: bold;\n}\n.heading-level-theorem::after {\n  font-weight: bold;\n  display: inline-block;\n  margin: 0px .12em 0px 0px;\n  content: '.';\n}\n\ndiv.prooflike > p > .heading-level-theorem,\ndiv.prooflike > p > .heading-level-theorem::after {\n  font-weight: normal;\n  font-style: italic;\n}\n\n\ndl.enumeration {\n  display: block;\n  margin-left: 2.5em;\n}\ndl.enumeration > dt {\n  float: left;\n  clear: left;\n  display: inline-block;\n  /*margin: 0px; */\n  margin-left: -2.5em;\n  width: 2.0em;\n  min-width: 2.0em;\n  max-width: 2.0em;\n  margin-right: 0.5em;\n  text-align: right;\n}\ndl.enumeration > dd {\n  /*display: inline-block;\n  width: 100%;*/\n  border: 0px;\n  padding: 0px;\n  margin: 0px;\n}\n\nfigure.float {\n  width: 100%;\n  border-width: 1px 0px 1px 0px;\n  border-style: solid none solid none;\n  border-color: rgba(120, 120, 140, 0.15);\n  margin: 0.5rem 0px;\n  padding: 0.5rem 0px;\n}\n\nfigure.float .float-contents {\n  width: 100%;\n  max-width: 100%;\n  overflow-x: auto;\n}\n\nfigure.float .float-contents img {\n  display: block;\n  margin: 0pt auto;\n  padding: 0pt;\n  border: 0pt;\n  margin: 0px auto;\n}\n\nfigure.float figcaption {\n  display: block;\n  margin-top: 0.5em;\n  margin: 0.75em 2em 0px;\n  text-align: center;\n}\n\nfigure.float figcaption > span {\n  display: inline-block;\n  font-style: italic;\n  text-align: left;\n}\n\ntable {\n  margin: 1em 0px 1em 0px;\n  border-collapse: separate;\n  border-spacing: 0px;\n  /*border-top: solid 1pt;\n  border-bottom: solid 1pt;*/\n}\nfigure.float .float-contents table {\n  margin: 0px auto;\n}\ntd {\n  padding: 0.3em 0.5em;\n  border: none 0px;\n}\nth {\n  padding: 0.3em 0.5em;\n  border: none 0px;\n}\n.cellstyle-H {\n  border-bottom: solid .5pt;\n}\n.cellstyle-rH {\n}\n.cellstyle-l {\n  text-align: left;\n}\n.cellstyle-c {\n  text-align: center;\n}\n.cellstyle-r {\n  text-align: right;\n}\n.cellstyle-green {\n  background-color: rgba(69, 255, 69, 0.31); /*rgb(200,255,200);*/\n}\n.cellstyle-blue {\n  background-color: rgba(79, 142, 255, 0.27); /*rgb(200,220,255);*/\n}\n.cellstyle-yellow {\n  background-color: rgba(255, 255, 49, 0.33); /*rgb(255,255,200);*/\n}\n.cellstyle-red {\n  background-color: rgba(255,120,120,0.30);  /*rgb(255,200,200);*/\n}\n.cellstyle-lvert {\n  border-left: solid .5pt;\n}\n.cellstyle-rvert {\n  border-right: solid .5pt;\n}\n\n.celltbledge-top {\n  border-top: solid 1pt;\n}\n.celltbledge-bottom {\n  border-bottom: solid 1pt;\n}\n\n.verbatimcode {\n  font-family: monospace;\n  font-size: 0.9em;\n  background-color: rgba(127,127,127,0.25);\n  border-radius: 2px;\n  padding: 1px 2px;\n  display: inline-block;\n  white-space: pre-wrap;\n}\n.verbatima {\n  font-style: italic;\n}\n.verbatimcode-environment {\n  display: block;\n  margin: 0.75em 0px 1em;\n  white-space: pre;\n}\n\n.defterm {\n  font-style: italic;\n  margin: 1em 0px;\n}\n.defterm:first-child {\n  margin-top: 0px;\n}\n.defterm:last-child {\n  margin-bottom: 0px;\n}\n\n.defterm .defterm-term, .defterm .term-in-defining-defterm {\n  font-style: italic;\n  font-weight: bold;\n}\n\n.display-math {\n  width: 100%;\n  max-width: 100%;\n  display: block;\n  overflow-x: auto;\n}\n\n.endnote {\n}\n.citation {\n}\n.footnote {\n}\n.endnote-marks, .citation-marks {\n  font-size: 0.8em;\n  display: inline-block;\n  vertical-align: 0.3em;\n  margin-top: -0.3em;\n}\ndl.citation-list > dt, dl.footnote-list > dt {\n  font-size: 0.8em;\n  display: inline-block;\n  vertical-align: 0.3em;\n  margin-top: -0.3em;\n}\n\n.annotation {\n  color: var(--annotation-color);\n}\n.annotation-comment {\n  padding: 3pt 0px;\n  font-weight: 600;\n  font-family: sans-serif;\n}\n.annotation-comment::before {\n  content: '['\n}\n.annotation-comment::after {\n  content: ']'\n}\n.annotation-initials {\n  display: inline-block;\n  margin-right: 0.3em;\n  font-family: sans-serif;\n  font-size: .8em;\n  font-weight: normal;\n  font-style: normal;\n  line-height: .9;\n  padding: .5pt;\n  border: solid .4pt var(--annotation-color);\n  border-radius: 2pt;\n\n  float: right;\n  margin-right: -4em;\n}\n.annotation-0 {\n  --annotation-color: rgb(148,7,24); /* dark red / burgundy */\n}\n.annotation-1 {\n  --annotation-color: rgb(0,148,240); /* blue-y */\n}\n.annotation-2 {\n  --annotation-color: rgb(242,108,13); /* orange-brown-y */\n}\n.annotation-3 {\n  --annotation-color: rgb(65,149,42); /* green-y */\n}\n.annotation-4 {\n  --annotation-color: rgb(128,55,134); /* purple-y */\n}\n.annotation-5 {\n  --annotation-color: rgb(0,129,129); /* blue-green-y */\n}\n.annotation-6 {\n  --annotation-color: rgb(160,120,0); /* brownish */\n}\n.annotation-7 {\n  --annotation-color: rgb(35,195,155); /* aqua-ish */\n}\n\n\n.quote, .address, .blockquote {\n  margin: 1em 0;\n}\n.quote {\n  background: rgba(120, 140, 150, 0.15);\n  padding: 1em 3em;\n}\n.quote .quote-lines,\n.quote .quote-text {\n  font-style: italic;\n  margin: 0.5em 0;\n}\n.quote-attributed {\n  margin: 0.5em 0;\n  text-align: right;\n}\n.quote .quote-attributed::before {\n  content: '—';\n}\n.quote-block {\n  padding-left: 1em;\n  border-left: solid 4pt rgba(120, 140, 150, 0.3)  ;\n}\n\n.address .quote-lines {\n  font-size: .933em;\n}\n\n.blockquote {\n  padding: 0 1em;\n}\n\n";
/* 001270 */ export var _html_js_mathjax = '\nMathJax = {\n    tex: {\n        inlineMath: [[\'\\\\(\', \'\\\\)\']],\n        displayMath: [[\'\\\\[\', \'\\\\]\']],\n        processEnvironments: true,\n        processRefs: true,\n\n        // equation numbering on\n        tags: \'ams\'\n    },\n    options: {\n        // all MathJax content is marked with CSS classes\n        // skipHtmlTags: \'body\',\n        // processHtmlClass: \'display-math|inline-math\',\n    },\n    startup: {\n        pageReady: function() {\n            // override the default "typeset everything on the page" behavior to\n            // only typeset whatever we have explicitly marked as math\n            return typesetPageMathPromise();\n        }\n    }\n};\nfunction typesetPageMathPromise()\n{\n    var elements = document.querySelectorAll(\'.display-math, .inline-math\');\n    return MathJax.typesetPromise(elements);\n}\n';
/* 001301 */ export var _html_body_end_js_scripts_mathjax = '\n<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>\n<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>\n';
/* 001309 */ export var get_html_css_global = function (html_fragment_renderer) {
/* 001309 */ 	if (arguments.length) {
/* 001309 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001309 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001309 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001309 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001309 */ 				switch (__attrib0__) {
/* 001309 */ 					case 'html_fragment_renderer': var html_fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 001309 */ 				}
/* 001309 */ 			}
/* 001309 */ 		}
/* 001309 */ 	}
/* 001309 */ 	else {
/* 001309 */ 	}
/* 001310 */ 	return _html_css_global;
/* 001310 */ };
/* 001312 */ export var get_html_css_content = function (html_fragment_renderer) {
/* 001312 */ 	if (arguments.length) {
/* 001312 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001312 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001312 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001312 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001312 */ 				switch (__attrib0__) {
/* 001312 */ 					case 'html_fragment_renderer': var html_fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 001312 */ 				}
/* 001312 */ 			}
/* 001312 */ 		}
/* 001312 */ 	}
/* 001312 */ 	else {
/* 001312 */ 	}
/* 001313 */ 	return _html_css_content;
/* 001313 */ };
/* 001315 */ export var get_html_js = function (html_fragment_renderer) {
/* 001315 */ 	if (arguments.length) {
/* 001315 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001315 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001315 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001315 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001315 */ 				switch (__attrib0__) {
/* 001315 */ 					case 'html_fragment_renderer': var html_fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 001315 */ 				}
/* 001315 */ 			}
/* 001315 */ 		}
/* 001315 */ 	}
/* 001315 */ 	else {
/* 001315 */ 	}
/* 001316 */ 	if (__t__ (html_fragment_renderer.use_mathjax)) {
/* 001317 */ 		return _html_js_mathjax;
/* 001317 */ 	}
/* 001318 */ 	return '';
/* 001318 */ };
/* 001320 */ export var get_html_body_end_js_scripts = function (html_fragment_renderer) {
/* 001320 */ 	if (arguments.length) {
/* 001320 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001320 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001320 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001320 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001320 */ 				switch (__attrib0__) {
/* 001320 */ 					case 'html_fragment_renderer': var html_fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 001320 */ 				}
/* 001320 */ 			}
/* 001320 */ 		}
/* 001320 */ 	}
/* 001320 */ 	else {
/* 001320 */ 	}
/* 001321 */ 	if (__t__ (html_fragment_renderer.use_mathjax)) {
/* 001322 */ 		return _html_body_end_js_scripts_mathjax;
/* 001322 */ 	}
/* 001323 */ 	return '';
/* 001323 */ };
/* 001329 */ export var FragmentRendererInformation =  __class__ ('FragmentRendererInformation', [object], {
/* 001329 */ 	__module__: __name__,
/* 001335 */ 	FragmentRendererClass: HtmlFragmentRenderer,
/* 001338 */ 	get get_style_information () {return function (fragment_renderer) {
/* 001338 */ 		if (arguments.length) {
/* 001338 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001338 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001338 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001338 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001338 */ 					switch (__attrib0__) {
/* 001338 */ 						case 'fragment_renderer': var fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 001338 */ 					}
/* 001338 */ 				}
/* 001338 */ 			}
/* 001338 */ 		}
/* 001338 */ 		else {
/* 001338 */ 		}
/* 001343 */ 		return dict ({'css_global': __call__ (get_html_css_global, null, fragment_renderer), 'css_content': __call__ (get_html_css_content, null, fragment_renderer), 'js': __call__ (get_html_js, null, fragment_renderer), 'body_end_js_scripts': __call__ (get_html_body_end_js_scripts, null, fragment_renderer)});
/* 001343 */ 	};},
/* 001346 */ 	format_name: 'html'
/* 001346 */ });
/* 000006 */ 
//# sourceMappingURL=flm.fragmentrenderer.html.map