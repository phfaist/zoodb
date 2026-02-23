/* 000001 */ // Transcrypt'ed from Python, 2026-02-23 11:51:27
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
/* 000397 */ 	get render_lines () {return __get__ (this, function (self, lines_info_list, render_context) {
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
/* 000397 */ 						case 'lines_info_list': var lines_info_list = __allkwargs0__ [__attrib0__]; break;
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
/* 000408 */ 		var __iterable0__ = lines_info_list;
/* 000408 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000408 */ 			var line_info = __getitem__ (__iterable0__, __index0__);
/* 000409 */ 			var line_content_nodelist = line_info.nodelist;
/* 000411 */ 			var line_content = (function () {
/* 000411 */ 				var __accu0__ = self;
/* 000411 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, line_content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000411 */ 			}) ();
/* 000417 */ 			if (__t__ (line_info.indent_left !== null)) {
/* 000418 */ 				var line_content = __add__ (__mul__ ('<span class="quote-lines-indent"></span>', line_info.indent_left), line_content);
/* 000418 */ 			}
/* 000423 */ 			if (__t__ (line_info.indent_right !== null)) {
/* 000424 */ 				(function () {
/* 000424 */ 					var __accu0__ = logger;
/* 000424 */ 					return __call__ (__accu0__.warning, __accu0__, 'lines indent_right not yet implemented in HTML renderer');
/* 000424 */ 				}) ();
/* 000424 */ 			}
/* 000425 */ 			if (__t__ (line_info.align !== null)) {
/* 000426 */ 				(function () {
/* 000426 */ 					var __accu0__ = logger;
/* 000426 */ 					return __call__ (__accu0__.warning, __accu0__, 'lines align not yet implemented in HTML renderer');
/* 000426 */ 				}) ();
/* 000426 */ 			}
/* 000428 */ 			if (__t__ (self.lines_use_line_span)) {
/* 000429 */ 				var line_content = (function () {
/* 000429 */ 					var __accu0__ = self;
/* 000429 */ 					return __call__ (__accu0__.wrap_in_tag, __accu0__, 'span', line_content);
/* 000429 */ 				}) ();
/* 000429 */ 			}
/* 000433 */ 			(function () {
/* 000433 */ 				var __accu0__ = s_lines;
/* 000433 */ 				return __call__ (__accu0__.append, __accu0__, line_content);
/* 000433 */ 			}) ();
/* 000433 */ 		}
/* 000437 */ 		if (__t__ (self.lines_use_br)) {
/* 000439 */ 			var s_lines = (function () {
/* 000439 */ 				var __accu0__ = [];
/* 000441 */ 				var __iterable0__ = __call__ (enumerate, null, s_lines);
/* 000441 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000441 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000441 */ 					var j = __left0__ [0];
/* 000441 */ 					var line = __left0__ [1];
/* 000441 */ 					(function () {
/* 000441 */ 						var __accu1__ = __accu0__;
/* 000440 */ 						return __call__ (__accu1__.append, __accu1__, (__t__ (__lt__ (j, __sub__ (__call__ (len, null, s_lines), 1))) ? __add__ (line, '<br>') : line));
/* 000440 */ 					}) ();
/* 000440 */ 				}
/* 000440 */ 				return __accu0__;
/* 000440 */ 			}) ();
/* 000440 */ 		}
/* 000444 */ 		var attrs = dict ({});
/* 000445 */ 		if (__t__ (target_id !== null)) {
/* 000446 */ 			__setitem__ (attrs, 'id', target_id);
/* 000446 */ 		}
/* 000448 */ 		var annotations = __call__ (list, null, (__t__ (annotations !== null) ? annotations : []));
/* 000449 */ 		if (__t__ (__t__ (role) && __in__ (role, annotations))) {
/* 000450 */ 			(function () {
/* 000450 */ 				var __accu0__ = annotations;
/* 000450 */ 				return __call__ (__accu0__.remove, __accu0__, role);
/* 000450 */ 			}) ();
/* 000450 */ 		}
/* 000452 */ 		var class_names = ['lines'];
/* 000453 */ 		if (__t__ (role)) {
/* 000454 */ 			(function () {
/* 000454 */ 				var __accu0__ = class_names;
/* 000454 */ 				return __call__ (__accu0__.append, __accu0__, role);
/* 000454 */ 			}) ();
/* 000454 */ 		}
/* 000455 */ 		if (__t__ (annotations)) {
/* 000456 */ 			(function () {
/* 000456 */ 				var __accu0__ = class_names;
/* 000456 */ 				return __call__ (__accu0__.extend, __accu0__, annotations);
/* 000456 */ 			}) ();
/* 000456 */ 		}
/* 000458 */ 		var tag = 'p';
/* 000459 */ 		if (__t__ (__t__ (role) && __in__ (role, self.lines_container_tag))) {
/* 000460 */ 			var tag = __getitem__ (self.lines_container_tag, role);
/* 000460 */ 		}
/* 000462 */ 		return (function () {
/* 000462 */ 			var __accu0__ = self;
/* 000464 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'p', (function () {
/* 000464 */ 				var __accu1__ = self;
/* 000464 */ 				return __call__ (__accu1__.render_join, __accu1__, s_lines, render_context);
/* 000464 */ 			}) (), __kwargtrans__ ({class_names: class_names, attrs: attrs}));
/* 000464 */ 		}) ();
/* 000464 */ 	});},
/* 000470 */ 	get render_enumeration () {return __get__ (this, function (self, iter_items_nodelists, counter_formatter, render_context) {
/* 000470 */ 		var target_id_generator = null;
/* 000470 */ 		var annotations = null;
/* 000470 */ 		var nested_depth = null;
/* 000470 */ 		if (arguments.length) {
/* 000470 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000470 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000470 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000470 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000470 */ 					switch (__attrib0__) {
/* 000470 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000470 */ 						case 'iter_items_nodelists': var iter_items_nodelists = __allkwargs0__ [__attrib0__]; break;
/* 000470 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000470 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000470 */ 						case 'target_id_generator': var target_id_generator = __allkwargs0__ [__attrib0__]; break;
/* 000470 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000470 */ 						case 'nested_depth': var nested_depth = __allkwargs0__ [__attrib0__]; break;
/* 000470 */ 					}
/* 000470 */ 				}
/* 000470 */ 			}
/* 000470 */ 		}
/* 000470 */ 		else {
/* 000470 */ 		}
/* 000482 */ 		var s_items = [];
/* 000484 */ 		var __iterable0__ = __call__ (enumerate, null, iter_items_nodelists);
/* 000484 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000484 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000484 */ 			var j = __left0__ [0];
/* 000484 */ 			var item_content_nodelist = __left0__ [1];
/* 000486 */ 			var use_block_level = true;
/* 000487 */ 			if (__t__ (item_content_nodelist.parsing_state.is_block_level === false)) {
/* 000490 */ 				var use_block_level = false;
/* 000490 */ 			}
/* 000492 */ 			// pass;
/* 000496 */ 			// pass;
/* 000500 */ 			var item_content = (function () {
/* 000500 */ 				var __accu0__ = self;
/* 000500 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, item_content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: use_block_level}));
/* 000500 */ 			}) ();
/* 000506 */ 			var enumno = __add__ (1, j);
/* 000508 */ 			var tag_nodelist = __call__ (counter_formatter, null, enumno);
/* 000509 */ 			if (__t__ (__call__ (isinstance, null, tag_nodelist, str))) {
/* 000510 */ 				var tag_content = (function () {
/* 000510 */ 					var __accu0__ = self;
/* 000510 */ 					return __call__ (__accu0__.render_value, __accu0__, tag_nodelist, render_context);
/* 000510 */ 				}) ();
/* 000510 */ 			}
/* 000511 */ 			else {
/* 000512 */ 				var tag_content = (function () {
/* 000512 */ 					var __accu0__ = self;
/* 000512 */ 					return __call__ (__accu0__.render_nodelist, __accu0__, tag_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000512 */ 				}) ();
/* 000512 */ 			}
/* 000518 */ 			var dtattrs = dict ({});
/* 000519 */ 			if (__t__ (target_id_generator !== null)) {
/* 000520 */ 				var tid = __call__ (target_id_generator, null, enumno);
/* 000521 */ 				if (__t__ (tid !== null)) {
/* 000522 */ 					__setitem__ (dtattrs, 'id', tid);
/* 000522 */ 				}
/* 000522 */ 			}
/* 000524 */ 			(function () {
/* 000524 */ 				var __accu0__ = s_items;
/* 000525 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000525 */ 					var __accu1__ = self;
/* 000526 */ 					return __call__ (__accu1__.render_join, __accu1__, [(function () {
/* 000526 */ 						var __accu2__ = self;
/* 000526 */ 						return __call__ (__accu2__.wrap_in_tag, __accu2__, 'dt', tag_content, __kwargtrans__ ({attrs: dtattrs}));
/* 000531 */ 					}) (), (function () {
/* 000531 */ 						var __accu2__ = self;
/* 000531 */ 						return __call__ (__accu2__.wrap_in_tag, __accu2__, 'dd', item_content);
/* 000531 */ 					}) ()], render_context);
/* 000531 */ 				}) ());
/* 000531 */ 			}) ();
/* 000531 */ 		}
/* 000538 */ 		return (function () {
/* 000538 */ 			var __accu0__ = self;
/* 000540 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'dl', (function () {
/* 000540 */ 				var __accu1__ = self;
/* 000540 */ 				return __call__ (__accu1__.render_join, __accu1__, s_items, render_context);
/* 000540 */ 			}) (), __kwargtrans__ ({class_names: __add__ (['enumeration'], (__t__ (annotations) ? annotations : []))}));
/* 000540 */ 		}) ();
/* 000540 */ 	});},
/* 000545 */ 	get render_heading () {return __get__ (this, function (self, heading_nodelist, render_context) {
/* 000545 */ 		var heading_level = 1;
/* 000545 */ 		var inline_heading = false;
/* 000545 */ 		var target_id = null;
/* 000545 */ 		var annotations = null;
/* 000545 */ 		if (arguments.length) {
/* 000545 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000545 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000545 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000545 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000545 */ 					switch (__attrib0__) {
/* 000545 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000545 */ 						case 'heading_nodelist': var heading_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000545 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000545 */ 						case 'heading_level': var heading_level = __allkwargs0__ [__attrib0__]; break;
/* 000545 */ 						case 'inline_heading': var inline_heading = __allkwargs0__ [__attrib0__]; break;
/* 000545 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000545 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000545 */ 					}
/* 000545 */ 				}
/* 000545 */ 			}
/* 000545 */ 		}
/* 000545 */ 		else {
/* 000545 */ 		}
/* 000552 */ 		if (__t__ (!__in__ (heading_level, self.heading_tags_by_level))) {
/* 000555 */ 			var __except0__ = __call__ (ValueError, null, "HTML renderer: bad heading level ‘{}’,  expected one of {} (or set HTML fragment renderer's ‘heading_tags_by_level’ config".format (heading_level, __call__ (list, null, (function () {
/* 000555 */ 				var __accu0__ = self.heading_tags_by_level;
/* 000555 */ 				return __call__ (__accu0__.py_keys, __accu0__);
/* 000555 */ 			}) ())));
/* 000555 */ 			__except0__.__cause__ = null;
/* 000555 */ 			throw __except0__;
/* 000555 */ 		}
/* 000558 */ 		var annot = (__t__ (annotations) ? __call__ (list, null, annotations) : []);
/* 000559 */ 		(function () {
/* 000559 */ 			var __accu0__ = annot;
/* 000559 */ 			return __call__ (__accu0__.append, __accu0__, 'heading-level-{}'.format (heading_level));
/* 000559 */ 		}) ();
/* 000560 */ 		if (__t__ (inline_heading)) {
/* 000561 */ 			(function () {
/* 000561 */ 				var __accu0__ = annot;
/* 000561 */ 				return __call__ (__accu0__.append, __accu0__, 'heading-inline');
/* 000561 */ 			}) ();
/* 000561 */ 		}
/* 000563 */ 		var attrs = dict ({});
/* 000564 */ 		if (__t__ (target_id !== null)) {
/* 000565 */ 			__setitem__ (attrs, 'id', target_id);
/* 000565 */ 		}
/* 000567 */ 		var content = (function () {
/* 000567 */ 			var __accu0__ = self;
/* 000569 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, __getitem__ (self.heading_tags_by_level, heading_level), (function () {
/* 000569 */ 				var __accu1__ = self;
/* 000569 */ 				return __call__ (__accu1__.render_inline_content, __accu1__, heading_nodelist, render_context);
/* 000569 */ 			}) (), __kwargtrans__ ({class_names: annot, attrs: attrs}));
/* 000569 */ 		}) ();
/* 000573 */ 		if (__t__ (__t__ (inline_heading) && self.inline_heading_add_space)) {
/* 000574 */ 			var content = __call__ (__iadd__, null, content, ' ');
/* 000574 */ 		}
/* 000575 */ 		// pass;
/* 000579 */ 		return content;
/* 000579 */ 	});},
/* 000581 */ 	get render_link () {return __get__ (this, function (self, ref_type, href, display_nodelist, render_context, annotations) {
/* 000581 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000581 */ 			var annotations = null;
/* 000581 */ 		};
/* 000581 */ 		if (arguments.length) {
/* 000581 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000581 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000581 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000581 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000581 */ 					switch (__attrib0__) {
/* 000581 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000581 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000581 */ 						case 'href': var href = __allkwargs0__ [__attrib0__]; break;
/* 000581 */ 						case 'display_nodelist': var display_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000581 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000581 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000581 */ 					}
/* 000581 */ 				}
/* 000581 */ 			}
/* 000581 */ 		}
/* 000581 */ 		else {
/* 000581 */ 		}
/* 000582 */ 		var display_content = (function () {
/* 000582 */ 			var __accu0__ = self;
/* 000582 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, display_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000582 */ 		}) ();
/* 000587 */ 		if (__t__ (__t__ (!__t__ ((href))) && !__t__ ((self.render_links_with_empty_href)))) {
/* 000588 */ 			return display_content;
/* 000588 */ 		}
/* 000590 */ 		return (function () {
/* 000590 */ 			var __accu0__ = self;
/* 000590 */ 			return __call__ (__accu0__.wrap_in_link, __accu0__, display_content, href, __kwargtrans__ ({class_names: __add__ (['href-{}'.format (ref_type)], (__t__ (annotations) ? annotations : []))}));
/* 000590 */ 		}) ();
/* 000590 */ 	});},
/* 000596 */ 	get render_annotation_comment () {return __get__ (this, function (self, display_nodelist, render_context, is_block_level, color_index, initials) {
/* 000596 */ 		if (typeof is_block_level == 'undefined' || (is_block_level != null && is_block_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000596 */ 			var is_block_level = false;
/* 000596 */ 		};
/* 000596 */ 		if (typeof color_index == 'undefined' || (color_index != null && color_index.hasOwnProperty ("__kwargtrans__"))) {;
/* 000596 */ 			var color_index = 0;
/* 000596 */ 		};
/* 000596 */ 		if (typeof initials == 'undefined' || (initials != null && initials.hasOwnProperty ("__kwargtrans__"))) {;
/* 000596 */ 			var initials = null;
/* 000596 */ 		};
/* 000596 */ 		if (arguments.length) {
/* 000596 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000596 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000596 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000596 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000596 */ 					switch (__attrib0__) {
/* 000596 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000596 */ 						case 'display_nodelist': var display_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000596 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000596 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000596 */ 						case 'color_index': var color_index = __allkwargs0__ [__attrib0__]; break;
/* 000596 */ 						case 'initials': var initials = __allkwargs0__ [__attrib0__]; break;
/* 000596 */ 					}
/* 000596 */ 				}
/* 000596 */ 			}
/* 000596 */ 		}
/* 000596 */ 		else {
/* 000596 */ 		}
/* 000604 */ 		var content = (function () {
/* 000604 */ 			var __accu0__ = self;
/* 000604 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, display_nodelist, render_context);
/* 000604 */ 		}) ();
/* 000605 */ 		if (__t__ (initials)) {
/* 000606 */ 			var content = __add__ (__add__ (__add__ ('<span class="annotation-initials">', initials), '</span>'), content);
/* 000606 */ 		}
/* 000608 */ 		return (function () {
/* 000608 */ 			var __accu0__ = self;
/* 000608 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, (__t__ (is_block_level) ? 'div' : 'span'), content, __kwargtrans__ ({class_names: ['annotation', 'annotation-comment', 'annotation-{}'.format (color_index)]}));
/* 000608 */ 		}) ();
/* 000608 */ 	});},
/* 000617 */ 	get render_annotation_highlight () {return __get__ (this, function (self, display_nodelist, render_context, is_block_level, color_index, initials) {
/* 000617 */ 		if (typeof is_block_level == 'undefined' || (is_block_level != null && is_block_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000617 */ 			var is_block_level = false;
/* 000617 */ 		};
/* 000617 */ 		if (typeof color_index == 'undefined' || (color_index != null && color_index.hasOwnProperty ("__kwargtrans__"))) {;
/* 000617 */ 			var color_index = 0;
/* 000617 */ 		};
/* 000617 */ 		if (typeof initials == 'undefined' || (initials != null && initials.hasOwnProperty ("__kwargtrans__"))) {;
/* 000617 */ 			var initials = null;
/* 000617 */ 		};
/* 000617 */ 		if (arguments.length) {
/* 000617 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000617 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000617 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000617 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000617 */ 					switch (__attrib0__) {
/* 000617 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000617 */ 						case 'display_nodelist': var display_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000617 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000617 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000617 */ 						case 'color_index': var color_index = __allkwargs0__ [__attrib0__]; break;
/* 000617 */ 						case 'initials': var initials = __allkwargs0__ [__attrib0__]; break;
/* 000617 */ 					}
/* 000617 */ 				}
/* 000617 */ 			}
/* 000617 */ 		}
/* 000617 */ 		else {
/* 000617 */ 		}
/* 000625 */ 		var content = (function () {
/* 000625 */ 			var __accu0__ = self;
/* 000625 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, display_nodelist, render_context);
/* 000625 */ 		}) ();
/* 000626 */ 		if (__t__ (initials)) {
/* 000627 */ 			var content = __add__ (__add__ (__add__ ('<span class="annotation-initials">', initials), '</span>'), content);
/* 000627 */ 		}
/* 000629 */ 		return (function () {
/* 000629 */ 			var __accu0__ = self;
/* 000629 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, (__t__ (is_block_level) ? 'div' : 'span'), content, __kwargtrans__ ({class_names: ['annotation', 'annotation-highlight', 'annotation-{}'.format (color_index)]}));
/* 000629 */ 		}) ();
/* 000629 */ 	});},
/* 000639 */ 	get render_delayed_marker () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000639 */ 		if (arguments.length) {
/* 000639 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000639 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000639 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000639 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000639 */ 					switch (__attrib0__) {
/* 000639 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000639 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000639 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000639 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000639 */ 					}
/* 000639 */ 				}
/* 000639 */ 			}
/* 000639 */ 		}
/* 000639 */ 		else {
/* 000639 */ 		}
/* 000640 */ 		return '<FLM:DLYD:{}/>'.format (delayed_key);
/* 000640 */ 	});},
/* 000642 */ 	get render_delayed_dummy_placeholder () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000642 */ 		if (arguments.length) {
/* 000642 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000642 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000642 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000642 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000642 */ 					switch (__attrib0__) {
/* 000642 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000642 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000642 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000642 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000642 */ 					}
/* 000642 */ 				}
/* 000642 */ 			}
/* 000642 */ 		}
/* 000642 */ 		else {
/* 000642 */ 		}
/* 000643 */ 		return '<!-- delayed:{} -->'.format (delayed_key);
/* 000643 */ 	});},
/* 000645 */ 	get replace_delayed_markers_with_final_values () {return __get__ (this, function (self, content, delayed_values) {
/* 000645 */ 		if (arguments.length) {
/* 000645 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000645 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000645 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000645 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000645 */ 					switch (__attrib0__) {
/* 000645 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000645 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000645 */ 						case 'delayed_values': var delayed_values = __allkwargs0__ [__attrib0__]; break;
/* 000645 */ 					}
/* 000645 */ 				}
/* 000645 */ 			}
/* 000645 */ 		}
/* 000645 */ 		else {
/* 000645 */ 		}
/* 000646 */ 		return (function () {
/* 000646 */ 			var __accu0__ = _rx_delayed_markers;
/* 000646 */ 			return __call__ (__accu0__.sub, __accu0__, (function __lambda__ (m) {
/* 000646 */ 				if (arguments.length) {
/* 000646 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000646 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000646 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000646 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000646 */ 							switch (__attrib0__) {
/* 000646 */ 								case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000646 */ 							}
/* 000646 */ 						}
/* 000646 */ 					}
/* 000646 */ 				}
/* 000646 */ 				else {
/* 000646 */ 				}
/* 000647 */ 				return __getitem__ (delayed_values, __call__ (int, null, (function () {
/* 000647 */ 					var __accu1__ = m;
/* 000647 */ 					return __call__ (__accu1__.group, __accu1__, 'key');
/* 000647 */ 				}) ()));
/* 000647 */ 			}), content);
/* 000647 */ 		}) ();
/* 000647 */ 	});},
/* 000654 */ 	float_caption_title_separator: ': ',
/* 000656 */ 	get render_float () {return __get__ (this, function (self, float_instance, render_context) {
/* 000656 */ 		if (arguments.length) {
/* 000656 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000656 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000656 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000656 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000656 */ 					switch (__attrib0__) {
/* 000656 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000656 */ 						case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000656 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000656 */ 					}
/* 000656 */ 				}
/* 000656 */ 			}
/* 000656 */ 		}
/* 000656 */ 		else {
/* 000656 */ 		}
/* 000659 */ 		var figattrs = dict ({});
/* 000661 */ 		if (__t__ (float_instance.target_id !== null)) {
/* 000662 */ 			__setitem__ (figattrs, 'id', float_instance.target_id);
/* 000662 */ 		}
/* 000664 */ 		var full_figcaption_rendered_list = [];
/* 000665 */ 		if (__t__ (float_instance.counter_value !== null)) {
/* 000667 */ 			(function () {
/* 000667 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000668 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000668 */ 					var __accu1__ = self;
/* 000670 */ 					return __call__ (__accu1__.wrap_in_tag, __accu1__, 'span', (function () {
/* 000670 */ 						var __accu2__ = self;
/* 000671 */ 						return __call__ (__accu2__.render_join, __accu2__, [(function () {
/* 000671 */ 							var __accu3__ = self;
/* 000671 */ 							return __call__ (__accu3__.render_value, __accu3__, float_instance.float_type_info.float_caption_name, render_context);
/* 000676 */ 						}) (), '&nbsp;', (function () {
/* 000676 */ 							var __accu3__ = self;
/* 000676 */ 							return __call__ (__accu3__.render_nodelist, __accu3__, float_instance.formatted_counter_value_flm.nodes, __kwargtrans__ ({render_context: render_context}));
/* 000676 */ 						}) ()], render_context);
/* 000676 */ 					}) (), __kwargtrans__ ({class_names: ['float-number']}));
/* 000676 */ 				}) ());
/* 000676 */ 			}) ();
/* 000676 */ 		}
/* 000684 */ 		else if (__t__ (float_instance.caption_nodelist)) {
/* 000687 */ 			(function () {
/* 000687 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000688 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000688 */ 					var __accu1__ = self;
/* 000690 */ 					return __call__ (__accu1__.wrap_in_tag, __accu1__, 'span', (function () {
/* 000690 */ 						var __accu2__ = self;
/* 000691 */ 						return __call__ (__accu2__.render_join, __accu2__, [(function () {
/* 000691 */ 							var __accu3__ = self;
/* 000691 */ 							return __call__ (__accu3__.render_value, __accu3__, float_instance.float_type_info.float_caption_name, render_context);
/* 000691 */ 						}) ()], render_context);
/* 000691 */ 					}) (), __kwargtrans__ ({class_names: ['float-no-number']}));
/* 000691 */ 				}) ());
/* 000691 */ 			}) ();
/* 000691 */ 		}
/* 000697 */ 		else {
/* 000701 */ 			// pass;
/* 000701 */ 		}
/* 000703 */ 		if (__t__ (float_instance.caption_nodelist)) {
/* 000707 */ 			(function () {
/* 000707 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000707 */ 				return __call__ (__accu0__.append, __accu0__, self.float_caption_title_separator);
/* 000707 */ 			}) ();
/* 000712 */ 			(function () {
/* 000712 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000713 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000713 */ 					var __accu1__ = self;
/* 000713 */ 					return __call__ (__accu1__.render_nodelist, __accu1__, float_instance.caption_nodelist, __kwargtrans__ ({render_context: render_context}));
/* 000713 */ 				}) ());
/* 000713 */ 			}) ();
/* 000713 */ 		}
/* 000719 */ 		var rendered_float_caption = null;
/* 000720 */ 		if (__t__ (full_figcaption_rendered_list)) {
/* 000721 */ 			var rendered_float_caption = (function () {
/* 000721 */ 				var __accu0__ = self;
/* 000723 */ 				return __call__ (__accu0__.wrap_in_tag, __accu0__, 'figcaption', (function () {
/* 000723 */ 					var __accu1__ = self;
/* 000725 */ 					return __call__ (__accu1__.wrap_in_tag, __accu1__, 'span', (function () {
/* 000725 */ 						var __accu2__ = self;
/* 000725 */ 						return __call__ (__accu2__.render_join, __accu2__, full_figcaption_rendered_list, render_context);
/* 000725 */ 					}) ());
/* 000725 */ 				}) (), __kwargtrans__ ({class_names: ['float-caption-content']}));
/* 000725 */ 			}) ();
/* 000725 */ 		}
/* 000730 */ 		var float_content_block_content = (function () {
/* 000730 */ 			var __accu0__ = self;
/* 000730 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, float_instance.content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: true}));
/* 000730 */ 		}) ();
/* 000735 */ 		var float_content_block = (function () {
/* 000735 */ 			var __accu0__ = self;
/* 000735 */ 			return __call__ (__accu0__.render_semantic_block, __accu0__, float_content_block_content, 'float-contents', __kwargtrans__ ({render_context: render_context}));
/* 000735 */ 		}) ();
/* 000741 */ 		if (__t__ (rendered_float_caption !== null)) {
/* 000742 */ 			var float_content_with_caption = (function () {
/* 000742 */ 				var __accu0__ = self;
/* 000742 */ 				return __call__ (__accu0__.render_join_blocks, __accu0__, [float_content_block, rendered_float_caption], render_context);
/* 000742 */ 			}) ();
/* 000742 */ 		}
/* 000746 */ 		else {
/* 000747 */ 			var float_content_with_caption = float_content_block;
/* 000747 */ 		}
/* 000749 */ 		var full_figure = (function () {
/* 000749 */ 			var __accu0__ = self;
/* 000749 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'figure', float_content_with_caption, __kwargtrans__ ({attrs: figattrs, class_names: ['float', 'float-{}'.format (float_instance.float_type)]}));
/* 000749 */ 		}) ();
/* 000756 */ 		return full_figure;
/* 000756 */ 	});},
/* 000759 */ 	graphics_raster_magnification: 1,
/* 000760 */ 	graphics_vector_magnification: 1,
/* 000762 */ 	get render_graphics_block () {return __get__ (this, function (self, graphics_resource, render_context) {
/* 000762 */ 		if (arguments.length) {
/* 000762 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000762 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000762 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000762 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000762 */ 					switch (__attrib0__) {
/* 000762 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000762 */ 						case 'graphics_resource': var graphics_resource = __allkwargs0__ [__attrib0__]; break;
/* 000762 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000762 */ 					}
/* 000762 */ 				}
/* 000762 */ 			}
/* 000762 */ 		}
/* 000762 */ 		else {
/* 000762 */ 		}
/* 000764 */ 		var imgattrs = dict ({});
/* 000766 */ 		var styparts = [];
/* 000767 */ 		if (__t__ (graphics_resource.physical_dimensions !== null)) {
/* 000769 */ 			var __left0__ = graphics_resource.physical_dimensions;
/* 000769 */ 			var width_pt = __left0__ [0];
/* 000769 */ 			var height_pt = __left0__ [1];
/* 000771 */ 			if (__t__ (__eq__ (graphics_resource.graphics_type, 'raster'))) {
/* 000772 */ 				if (__t__ (width_pt !== null)) {
/* 000773 */ 					var width_pt = __call__ (__imul__, null, width_pt, self.graphics_raster_magnification);
/* 000773 */ 				}
/* 000774 */ 				if (__t__ (height_pt !== null)) {
/* 000775 */ 					var height_pt = __call__ (__imul__, null, height_pt, self.graphics_raster_magnification);
/* 000775 */ 				}
/* 000775 */ 			}
/* 000776 */ 			else if (__t__ (__eq__ (graphics_resource.graphics_type, 'vector'))) {
/* 000777 */ 				if (__t__ (width_pt !== null)) {
/* 000778 */ 					var width_pt = __call__ (__imul__, null, width_pt, self.graphics_vector_magnification);
/* 000778 */ 				}
/* 000779 */ 				if (__t__ (height_pt !== null)) {
/* 000780 */ 					var height_pt = __call__ (__imul__, null, height_pt, self.graphics_vector_magnification);
/* 000780 */ 				}
/* 000780 */ 			}
/* 000782 */ 			if (__t__ (width_pt !== null)) {
/* 000783 */ 				(function () {
/* 000783 */ 					var __accu0__ = styparts;
/* 000783 */ 					return __call__ (__accu0__.append, __accu0__, 'width:{}pt'.format (width_pt));
/* 000783 */ 				}) ();
/* 000783 */ 			}
/* 000784 */ 			if (__t__ (height_pt !== null)) {
/* 000785 */ 				(function () {
/* 000785 */ 					var __accu0__ = styparts;
/* 000785 */ 					return __call__ (__accu0__.append, __accu0__, 'height:{}pt'.format (height_pt));
/* 000785 */ 				}) ();
/* 000785 */ 			}
/* 000785 */ 		}
/* 000787 */ 		if (__t__ (styparts)) {
/* 000788 */ 			__setitem__ (imgattrs, 'style', (function () {
/* 000788 */ 				var __accu0__ = ';';
/* 000788 */ 				return __call__ (__accu0__.join, __accu0__, styparts);
/* 000788 */ 			}) ());
/* 000788 */ 		}
/* 000790 */ 		var src_url = graphics_resource.src_url;
/* 000791 */ 		__setitem__ (imgattrs, 'src', src_url);
/* 000794 */ 		if (__t__ (__t__ (graphics_resource.srcset !== null) && __t__ (graphics_resource.srcset) && __call__ (len, null, graphics_resource.srcset))) {
/* 000796 */ 			var srcset_items = [];
/* 000797 */ 			var __iterable0__ = graphics_resource.srcset;
/* 000797 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000797 */ 				var srcset_info = __getitem__ (__iterable0__, __index0__);
/* 000798 */ 				var ss = __getitem__ (srcset_info, 'source');
/* 000799 */ 				if (__t__ (__in__ ('pixel_density', srcset_info))) {
/* 000800 */ 					var pixel_density = __getitem__ (srcset_info, 'pixel_density');
/* 000801 */ 					var ss = __call__ (__iadd__, null, ss, ' {}x'.format (pixel_density));
/* 000801 */ 				}
/* 000803 */ 				(function () {
/* 000803 */ 					var __accu0__ = srcset_items;
/* 000803 */ 					return __call__ (__accu0__.append, __accu0__, ss);
/* 000803 */ 				}) ();
/* 000803 */ 			}
/* 000805 */ 			__setitem__ (imgattrs, 'srcset', (function () {
/* 000805 */ 				var __accu0__ = ', ';
/* 000805 */ 				return __call__ (__accu0__.join, __accu0__, srcset_items);
/* 000805 */ 			}) ());
/* 000805 */ 		}
/* 000808 */ 		return (function () {
/* 000808 */ 			var __accu0__ = self;
/* 000808 */ 			return __call__ (__accu0__.generate_open_tag, __accu0__, 'img', __kwargtrans__ ({attrs: imgattrs}));
/* 000808 */ 		}) ();
/* 000808 */ 	});},
/* 000811 */ 	get render_cells () {return __get__ (this, function (self, cells_model, render_context, target_id) {
/* 000811 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000811 */ 			var target_id = null;
/* 000811 */ 		};
/* 000811 */ 		if (arguments.length) {
/* 000811 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000811 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000811 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000811 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000811 */ 					switch (__attrib0__) {
/* 000811 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000811 */ 						case 'cells_model': var cells_model = __allkwargs0__ [__attrib0__]; break;
/* 000811 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000811 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000811 */ 					}
/* 000811 */ 				}
/* 000811 */ 			}
/* 000811 */ 		}
/* 000811 */ 		else {
/* 000811 */ 		}
/* 000813 */ 		var __left0__ = tuple ([__call__ (len, null, cells_model.grid_data), __call__ (len, null, __getitem__ (cells_model.grid_data, 0))]);
/* 000813 */ 		var tabheight = __left0__ [0];
/* 000813 */ 		var tabwidth = __left0__ [1];
/* 000815 */ 		var data_items = [];
/* 000816 */ 		var row_j = 0;
/* 000817 */ 		while (__t__ (__lt__ (row_j, __call__ (len, null, cells_model.grid_data)))) {
/* 000818 */ 			var row_items = [];
/* 000819 */ 			var col_j = 0;
/* 000820 */ 			while (__t__ (__lt__ (col_j, __call__ (len, null, __getitem__ (cells_model.grid_data, row_j))))) {
/* 000822 */ 				var grid_cell_data = __getitem__ (__getitem__ (cells_model.grid_data, row_j), col_j);
/* 000824 */ 				if (__t__ (__t__ (grid_cell_data === null) || __getitem__ (grid_cell_data, 'cell') === null)) {
/* 000827 */ 					var clsnames = [];
/* 000828 */ 					if (__t__ (__eq__ (row_j, 0))) {
/* 000829 */ 						(function () {
/* 000829 */ 							var __accu0__ = clsnames;
/* 000829 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-top');
/* 000829 */ 						}) ();
/* 000829 */ 					}
/* 000830 */ 					if (__t__ (__eq__ (col_j, 0))) {
/* 000831 */ 						(function () {
/* 000831 */ 							var __accu0__ = clsnames;
/* 000831 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-left');
/* 000831 */ 						}) ();
/* 000831 */ 					}
/* 000832 */ 					if (__t__ (__eq__ (row_j, __sub__ (tabheight, 1)))) {
/* 000833 */ 						(function () {
/* 000833 */ 							var __accu0__ = clsnames;
/* 000833 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-bottom');
/* 000833 */ 						}) ();
/* 000833 */ 					}
/* 000834 */ 					if (__t__ (__eq__ (col_j, __sub__ (tabwidth, 1)))) {
/* 000835 */ 						(function () {
/* 000835 */ 							var __accu0__ = clsnames;
/* 000835 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-right');
/* 000835 */ 						}) ();
/* 000835 */ 					}
/* 000836 */ 					(function () {
/* 000836 */ 						var __accu0__ = row_items;
/* 000836 */ 						return __call__ (__accu0__.append, __accu0__, (function () {
/* 000836 */ 							var __accu1__ = self;
/* 000836 */ 							return __call__ (__accu1__.wrap_in_tag, __accu1__, 'td', '', __kwargtrans__ ({class_names: __add__ (['cell-empty'], clsnames)}));
/* 000836 */ 						}) ());
/* 000836 */ 					}) ();
/* 000841 */ 					var col_j = __call__ (__iadd__, null, col_j, 1);
/* 000841 */ 					continue;
/* 000841 */ 				}
/* 000844 */ 				if (__t__ (__getitem__ (grid_cell_data, 'is_topleft'))) {
/* 000846 */ 					var cell = __getitem__ (grid_cell_data, 'cell');
/* 000847 */ 					var rendered_cell_contents = (function () {
/* 000847 */ 						var __accu0__ = self;
/* 000847 */ 						return __call__ (__accu0__.render_nodelist, __accu0__, cell.content_nodes, __kwargtrans__ ({render_context: render_context}));
/* 000847 */ 					}) ();
/* 000851 */ 					var clsnames = __add__ (['cell'], (function () {
/* 000851 */ 						var __accu0__ = [];
/* 000851 */ 						var __iterable0__ = cell.styles;
/* 000851 */ 						for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000851 */ 							var sty = __getitem__ (__iterable0__, __index0__);
/* 000851 */ 							(function () {
/* 000851 */ 								var __accu1__ = __accu0__;
/* 000851 */ 								return __call__ (__accu1__.append, __accu1__, 'cellstyle-{}'.format (sty));
/* 000851 */ 							}) ();
/* 000851 */ 						}
/* 000851 */ 						return __accu0__;
/* 000851 */ 					}) ());
/* 000852 */ 					if (__t__ (__eq__ (row_j, 0))) {
/* 000853 */ 						(function () {
/* 000853 */ 							var __accu0__ = clsnames;
/* 000853 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-top');
/* 000853 */ 						}) ();
/* 000853 */ 					}
/* 000854 */ 					if (__t__ (__eq__ (col_j, 0))) {
/* 000855 */ 						(function () {
/* 000855 */ 							var __accu0__ = clsnames;
/* 000855 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-left');
/* 000855 */ 						}) ();
/* 000855 */ 					}
/* 000856 */ 					if (__t__ (__eq__ (cell.placement.row_range.end, tabheight))) {
/* 000857 */ 						(function () {
/* 000857 */ 							var __accu0__ = clsnames;
/* 000857 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-bottom');
/* 000857 */ 						}) ();
/* 000857 */ 					}
/* 000858 */ 					if (__t__ (__eq__ (cell.placement.col_range.end, tabwidth))) {
/* 000859 */ 						(function () {
/* 000859 */ 							var __accu0__ = clsnames;
/* 000859 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-right');
/* 000859 */ 						}) ();
/* 000859 */ 					}
/* 000860 */ 					var tagname = 'td';
/* 000861 */ 					if (__t__ (__t__ (__in__ ('H', cell.styles)) || __in__ ('rH', cell.styles))) {
/* 000862 */ 						var tagname = 'th';
/* 000862 */ 					}
/* 000863 */ 					var attrs = dict ({});
/* 000864 */ 					var cplc = cell.placement;
/* 000865 */ 					if (__t__ (__ne__ (cplc.col_range.end, __add__ (cplc.col_range.start, 1)))) {
/* 000868 */ 						__setitem__ (attrs, 'colspan', __call__ (str, null, __sub__ (cplc.col_range.end, cplc.col_range.start)));
/* 000868 */ 					}
/* 000869 */ 					if (__t__ (__ne__ (cplc.row_range.end, __add__ (cplc.row_range.start, 1)))) {
/* 000871 */ 						__setitem__ (attrs, 'rowspan', __call__ (str, null, __sub__ (cplc.row_range.end, cplc.row_range.start)));
/* 000871 */ 					}
/* 000872 */ 					(function () {
/* 000872 */ 						var __accu0__ = row_items;
/* 000873 */ 						return __call__ (__accu0__.append, __accu0__, (function () {
/* 000873 */ 							var __accu1__ = self;
/* 000873 */ 							return __call__ (__accu1__.wrap_in_tag, __accu1__, tagname, rendered_cell_contents, __kwargtrans__ ({attrs: attrs, class_names: clsnames}));
/* 000873 */ 						}) ());
/* 000873 */ 					}) ();
/* 000880 */ 					var col_j = cplc.col_range.end;
/* 000880 */ 					continue;
/* 000880 */ 				}
/* 000885 */ 				var col_j = __call__ (__iadd__, null, col_j, 1);
/* 000885 */ 			}
/* 000887 */ 			(function () {
/* 000887 */ 				var __accu0__ = data_items;
/* 000887 */ 				return __call__ (__accu0__.append, __accu0__, row_items);
/* 000887 */ 			}) ();
/* 000888 */ 			var row_j = __call__ (__iadd__, null, row_j, 1);
/* 000888 */ 		}
/* 000890 */ 		var table_attrs = dict ({});
/* 000891 */ 		if (__t__ (target_id !== null)) {
/* 000892 */ 			__setitem__ (table_attrs, 'id', target_id);
/* 000892 */ 		}
/* 000894 */ 		var s = (function () {
/* 000894 */ 			var __accu0__ = self;
/* 000896 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'table', (function () {
/* 000896 */ 				var __accu1__ = '';
/* 000896 */ 				return __call__ (__accu1__.join, __accu1__, (function () {
/* 000896 */ 					var __accu2__ = [];
/* 000896 */ 					var __iterable0__ = data_items;
/* 000896 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000898 */ 						var row_items = __getitem__ (__iterable0__, __index0__);
/* 000898 */ 						(function () {
/* 000898 */ 							var __accu3__ = __accu2__;
/* 000897 */ 							return __call__ (__accu3__.append, __accu3__, __add__ (__add__ ('<tr>', (function () {
/* 000897 */ 								var __accu4__ = '';
/* 000897 */ 								return __call__ (__accu4__.join, __accu4__, row_items);
/* 000897 */ 							}) ()), '</tr>'));
/* 000897 */ 						}) ();
/* 000897 */ 					}
/* 000897 */ 					return __accu2__;
/* 000897 */ 				}) ());
/* 000897 */ 			}) (), __kwargtrans__ ({attrs: table_attrs, class_names: ['cells']}));
/* 000897 */ 		}) ();
/* 000903 */ 		return s;
/* 000903 */ 	});}
/* 000903 */ });
/* 000909 */ export var _rx_delayed_markers = (function () {
/* 000909 */ 	var __accu0__ = re;
/* 000909 */ 	return __call__ (__accu0__.compile, __accu0__, '<FLM:DLYD:(?P<key>\\d+)\\s*/>');
/* 000909 */ }) ();
/* 000916 */ export var _html_css_global = '\np, ul, ol, .p-block {\n  margin: 1em 0px;\n}\np:first-child, ul:first-child, ol:first-child, .p-block:first-child {\n  margin-top: 0px;\n}\np:last-child, ul:last-child, ol:last-child, .p-block:last-child {\n  margin-bottom: 0px;\n}\ndd > p, dd > p:first-child, dd > p:last-child {\n  margin: 0.33em 0px;\n}\n\na, a:link, a:hover, a:active, a:visited {\n  color: #3232c8;\n  text-decoration: none;\n}\na:hover {\n  color: #22228a;\n}\n';
/* 000939 */ export var _html_css_content = "\n.emph, .textit {\n  font-style: italic;\n}\n.textbf {\n  font-weight: bold;\n}\n\nh1 {\n  font-size: 1.6rem;\n  line-height: 1.3em;\n  font-weight: bold;\n  margin: 1em 0px;\n}\nh2 {\n  font-size: 1.3rem;\n  line-height: 1.3em;\n  font-weight: bold;\n  margin: 1em 0px;\n}\nh3 {\n  font-size: 1rem;\n  font-weight: bold;\n  margin: 1em 0px;\n}\n\n.heading-level-4 {\n  font-style: italic;\n  display: inline;\n}\n.heading-level-4::after {\n  display: inline-block;\n  margin: 0px .12em;\n  content: '—';\n}\n\n.heading-level-5 {\n  font-style: italic;\n  font-size: .9em;\n  display: inline;\n}\n.heading-level-5::after {\n  display: inline-block;\n  margin-right: .12em;\n  content: '';\n}\n\n.heading-level-6 {\n  font-style: italic;\n  font-size: .8em;\n  display: inline;\n}\n.heading-level-6::after {\n  display: inline-block;\n  margin-right: .06em;\n  content: '';\n}\n\n\n.heading-level-theorem {\n  font-weight: bold;\n}\n.heading-level-theorem::after {\n  font-weight: bold;\n  display: inline-block;\n  margin: 0px .12em 0px 0px;\n  content: '.';\n}\n\ndiv.prooflike > p > .heading-level-theorem,\ndiv.prooflike > p > .heading-level-theorem::after {\n  font-weight: normal;\n  font-style: italic;\n}\n\n\ndl.enumeration {\n  display: block;\n  margin-left: 2.5em;\n}\ndl.enumeration > dt {\n  float: left;\n  clear: left;\n  display: inline-block;\n  /*margin: 0px; */\n  margin-left: -2.5em;\n  width: 2.0em;\n  min-width: 2.0em;\n  /*max-width: 2.0em;*/ /* messes up wide labels, e.g. in {description} items */\n  margin-right: 0.5em;\n  text-align: right;\n}\ndl.enumeration > dd {\n  /*display: inline-block;\n  width: 100%;*/\n  border: 0px;\n  padding: 0px;\n  margin: 0px;\n}\n\nfigure.float {\n  width: 100%;\n  border-width: 1px 0px 1px 0px;\n  border-style: solid none solid none;\n  border-color: rgba(120, 120, 140, 0.15);\n  margin: 0.5rem 0px;\n  padding: 0.5rem 0px;\n}\n\nfigure.float .float-contents {\n  width: 100%;\n  max-width: 100%;\n  overflow-x: auto;\n}\n\nfigure.float .float-contents img {\n  display: block;\n  margin: 0pt auto;\n  padding: 0pt;\n  border: 0pt;\n  margin: 0px auto;\n}\n\nfigure.float figcaption {\n  display: block;\n  margin-top: 0.5em;\n  margin: 0.75em 2em 0px;\n  text-align: center;\n}\n\nfigure.float figcaption > span {\n  display: inline-block;\n  font-style: italic;\n  text-align: left;\n}\n\ntable {\n  margin: 1em 0px 1em 0px;\n  border-collapse: separate;\n  border-spacing: 0px;\n  /*border-top: solid 1pt;\n  border-bottom: solid 1pt;*/\n}\nfigure.float .float-contents table {\n  margin: 0px auto;\n}\ntd {\n  padding: 0.3em 0.5em;\n  border: none 0px;\n}\nth {\n  padding: 0.3em 0.5em;\n  border: none 0px;\n}\n.cellstyle-H {\n  border-bottom: solid .5pt;\n}\n.cellstyle-rH {\n}\n.cellstyle-l {\n  text-align: left;\n}\n.cellstyle-c {\n  text-align: center;\n}\n.cellstyle-r {\n  text-align: right;\n}\n.cellstyle-green {\n  background-color: rgba(69, 255, 69, 0.31); /*rgb(200,255,200);*/\n}\n.cellstyle-blue {\n  background-color: rgba(79, 142, 255, 0.27); /*rgb(200,220,255);*/\n}\n.cellstyle-yellow {\n  background-color: rgba(255, 255, 49, 0.33); /*rgb(255,255,200);*/\n}\n.cellstyle-red {\n  background-color: rgba(255,120,120,0.30);  /*rgb(255,200,200);*/\n}\n.cellstyle-lvert {\n  border-left: solid .5pt;\n}\n.cellstyle-rvert {\n  border-right: solid .5pt;\n}\n\n.celltbledge-top {\n  border-top: solid 1pt;\n}\n.celltbledge-bottom {\n  border-bottom: solid 1pt;\n}\n\n.verbatimcode {\n  font-family: monospace;\n  font-size: 0.9em;\n  background-color: rgba(127,127,127,0.25);\n  border-radius: 2px;\n  padding: 1px 2px;\n  display: inline-block;\n  white-space: pre-wrap;\n}\n.verbatima {\n  font-style: italic;\n}\n.verbatimcode-environment {\n  display: block;\n  margin: 0.75em 0px 1em;\n  white-space: pre;\n}\n\n.defterm {\n  font-style: italic;\n  margin: 1em 0px;\n}\n.defterm:first-child {\n  margin-top: 0px;\n}\n.defterm:last-child {\n  margin-bottom: 0px;\n}\n\n.defterm .defterm-term, .defterm .term-in-defining-defterm {\n  font-style: italic;\n  font-weight: bold;\n}\n\n.display-math {\n  width: 100%;\n  max-width: 100%;\n  display: block;\n  overflow-x: auto;\n}\n\n.endnote {\n}\n.citation {\n}\n.footnote {\n}\n.endnote-marks, .citation-marks {\n  font-size: 0.8em;\n  display: inline-block;\n  vertical-align: 0.3em;\n  margin-top: -0.3em;\n}\ndl.citation-list > dt, dl.footnote-list > dt {\n  font-size: 0.8em;\n  display: inline-block;\n  vertical-align: 0.3em;\n  margin-top: -0.3em;\n}\n\n.annotation {\n  color: var(--annotation-color);\n}\n.annotation-comment {\n  padding: 3pt 0px;\n  font-weight: 600;\n  font-family: sans-serif;\n}\n.annotation-comment::before {\n  content: '['\n}\n.annotation-comment::after {\n  content: ']'\n}\n.annotation-initials {\n  display: inline-block;\n  margin-right: 0.3em;\n  font-family: sans-serif;\n  font-size: .8em;\n  font-weight: normal;\n  font-style: normal;\n  line-height: .9;\n  padding: .5pt;\n  border: solid .4pt var(--annotation-color);\n  border-radius: 2pt;\n\n  float: right;\n  margin-right: -4em;\n}\n.annotation-0 {\n  --annotation-color: rgb(148,7,24); /* dark red / burgundy */\n}\n.annotation-1 {\n  --annotation-color: rgb(0,148,240); /* blue-y */\n}\n.annotation-2 {\n  --annotation-color: rgb(242,108,13); /* orange-brown-y */\n}\n.annotation-3 {\n  --annotation-color: rgb(65,149,42); /* green-y */\n}\n.annotation-4 {\n  --annotation-color: rgb(128,55,134); /* purple-y */\n}\n.annotation-5 {\n  --annotation-color: rgb(0,129,129); /* blue-green-y */\n}\n.annotation-6 {\n  --annotation-color: rgb(160,120,0); /* brownish */\n}\n.annotation-7 {\n  --annotation-color: rgb(35,195,155); /* aqua-ish */\n}\n\n\n.quote, .address, .blockquote {\n  margin: 1em 0;\n}\n.quote {\n  background: rgba(120, 140, 150, 0.15);\n  padding: 1em 3em;\n}\n.quote .quote-lines,\n.quote .quote-text {\n  font-style: italic;\n  margin: 0.5em 0;\n}\n\n.quote .quote-lines + .quote-lines {\n  margin-top: 1em;\n}\n\n.quote .quote-lines .quote-lines-indent {\n  display: inline-block;\n  width: 2.5em;\n}\n\n.quote-attributed {\n  margin: 0.5em 0;\n  text-align: right;\n}\n.quote .quote-attributed::before {\n  content: '—';\n}\n.quote-block {\n  padding-left: 1em;\n  border-left: solid 4pt rgba(120, 140, 150, 0.3)  ;\n}\n\n.address .quote-lines {\n  font-size: .933em;\n}\n\n.blockquote {\n  padding: 0 1em;\n}\n\n";
/* 001293 */ export var _html_js_mathjax = '\nMathJax = {\n    tex: {\n        inlineMath: [[\'\\\\(\', \'\\\\)\']],\n        displayMath: [[\'\\\\[\', \'\\\\]\']],\n        processEnvironments: true,\n        processRefs: true,\n\n        // equation numbering on\n        tags: \'ams\'\n    },\n    options: {\n        // all MathJax content is marked with CSS classes\n        // skipHtmlTags: \'body\',\n        // processHtmlClass: \'display-math|inline-math\',\n    },\n    startup: {\n        pageReady: function() {\n            // override the default "typeset everything on the page" behavior to\n            // only typeset whatever we have explicitly marked as math\n            return typesetPageMathPromise();\n        }\n    }\n};\nfunction typesetPageMathPromise()\n{\n    var elements = document.querySelectorAll(\'.display-math, .inline-math\');\n    return MathJax.typesetPromise(elements);\n}\n';
/* 001324 */ export var _html_body_end_js_scripts_mathjax = '\n<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>\n<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>\n';
/* 001332 */ export var get_html_css_global = function (html_fragment_renderer) {
/* 001332 */ 	if (arguments.length) {
/* 001332 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001332 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001332 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001332 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001332 */ 				switch (__attrib0__) {
/* 001332 */ 					case 'html_fragment_renderer': var html_fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 001332 */ 				}
/* 001332 */ 			}
/* 001332 */ 		}
/* 001332 */ 	}
/* 001332 */ 	else {
/* 001332 */ 	}
/* 001333 */ 	return _html_css_global;
/* 001333 */ };
/* 001335 */ export var get_html_css_content = function (html_fragment_renderer) {
/* 001335 */ 	if (arguments.length) {
/* 001335 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001335 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001335 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001335 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001335 */ 				switch (__attrib0__) {
/* 001335 */ 					case 'html_fragment_renderer': var html_fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 001335 */ 				}
/* 001335 */ 			}
/* 001335 */ 		}
/* 001335 */ 	}
/* 001335 */ 	else {
/* 001335 */ 	}
/* 001336 */ 	return _html_css_content;
/* 001336 */ };
/* 001338 */ export var get_html_js = function (html_fragment_renderer) {
/* 001338 */ 	if (arguments.length) {
/* 001338 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001338 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001338 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001338 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001338 */ 				switch (__attrib0__) {
/* 001338 */ 					case 'html_fragment_renderer': var html_fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 001338 */ 				}
/* 001338 */ 			}
/* 001338 */ 		}
/* 001338 */ 	}
/* 001338 */ 	else {
/* 001338 */ 	}
/* 001339 */ 	if (__t__ (html_fragment_renderer.use_mathjax)) {
/* 001340 */ 		return _html_js_mathjax;
/* 001340 */ 	}
/* 001341 */ 	return '';
/* 001341 */ };
/* 001343 */ export var get_html_body_end_js_scripts = function (html_fragment_renderer) {
/* 001343 */ 	if (arguments.length) {
/* 001343 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001343 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001343 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001343 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001343 */ 				switch (__attrib0__) {
/* 001343 */ 					case 'html_fragment_renderer': var html_fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 001343 */ 				}
/* 001343 */ 			}
/* 001343 */ 		}
/* 001343 */ 	}
/* 001343 */ 	else {
/* 001343 */ 	}
/* 001344 */ 	if (__t__ (html_fragment_renderer.use_mathjax)) {
/* 001345 */ 		return _html_body_end_js_scripts_mathjax;
/* 001345 */ 	}
/* 001346 */ 	return '';
/* 001346 */ };
/* 001352 */ export var FragmentRendererInformation =  __class__ ('FragmentRendererInformation', [object], {
/* 001352 */ 	__module__: __name__,
/* 001358 */ 	FragmentRendererClass: HtmlFragmentRenderer,
/* 001361 */ 	get get_style_information () {return function (fragment_renderer) {
/* 001361 */ 		if (arguments.length) {
/* 001361 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001361 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001361 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001361 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001361 */ 					switch (__attrib0__) {
/* 001361 */ 						case 'fragment_renderer': var fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 001361 */ 					}
/* 001361 */ 				}
/* 001361 */ 			}
/* 001361 */ 		}
/* 001361 */ 		else {
/* 001361 */ 		}
/* 001366 */ 		return dict ({'css_global': __call__ (get_html_css_global, null, fragment_renderer), 'css_content': __call__ (get_html_css_content, null, fragment_renderer), 'js': __call__ (get_html_js, null, fragment_renderer), 'body_end_js_scripts': __call__ (get_html_body_end_js_scripts, null, fragment_renderer)});
/* 001366 */ 	};},
/* 001369 */ 	format_name: 'html'
/* 001369 */ });
/* 000006 */ 
//# sourceMappingURL=flm.fragmentrenderer.html.map