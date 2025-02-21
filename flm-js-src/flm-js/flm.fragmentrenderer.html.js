/* 000001 */ // Transcrypt'ed from Python, 2025-02-21 21:50:05
/* 000006 */ var html = {};
/* 000006 */ var logging = {};
/* 000006 */ var re = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
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
/* 000518 */ 	get render_delayed_marker () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000518 */ 		if (arguments.length) {
/* 000518 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000518 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000518 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000518 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000518 */ 					switch (__attrib0__) {
/* 000518 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000518 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000518 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000518 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000518 */ 					}
/* 000518 */ 				}
/* 000518 */ 			}
/* 000518 */ 		}
/* 000518 */ 		else {
/* 000518 */ 		}
/* 000519 */ 		return '<FLM:DLYD:{}/>'.format (delayed_key);
/* 000519 */ 	});},
/* 000521 */ 	get render_delayed_dummy_placeholder () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000521 */ 		if (arguments.length) {
/* 000521 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000521 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000521 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000521 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000521 */ 					switch (__attrib0__) {
/* 000521 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000521 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000521 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000521 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000521 */ 					}
/* 000521 */ 				}
/* 000521 */ 			}
/* 000521 */ 		}
/* 000521 */ 		else {
/* 000521 */ 		}
/* 000522 */ 		return '<!-- delayed:{} -->'.format (delayed_key);
/* 000522 */ 	});},
/* 000524 */ 	get replace_delayed_markers_with_final_values () {return __get__ (this, function (self, content, delayed_values) {
/* 000524 */ 		if (arguments.length) {
/* 000524 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000524 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000524 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000524 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000524 */ 					switch (__attrib0__) {
/* 000524 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000524 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000524 */ 						case 'delayed_values': var delayed_values = __allkwargs0__ [__attrib0__]; break;
/* 000524 */ 					}
/* 000524 */ 				}
/* 000524 */ 			}
/* 000524 */ 		}
/* 000524 */ 		else {
/* 000524 */ 		}
/* 000525 */ 		return (function () {
/* 000525 */ 			var __accu0__ = _rx_delayed_markers;
/* 000525 */ 			return __call__ (__accu0__.sub, __accu0__, (function __lambda__ (m) {
/* 000525 */ 				if (arguments.length) {
/* 000525 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000525 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000525 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000525 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000525 */ 							switch (__attrib0__) {
/* 000525 */ 								case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000525 */ 							}
/* 000525 */ 						}
/* 000525 */ 					}
/* 000525 */ 				}
/* 000525 */ 				else {
/* 000525 */ 				}
/* 000526 */ 				return __getitem__ (delayed_values, __call__ (int, null, (function () {
/* 000526 */ 					var __accu1__ = m;
/* 000526 */ 					return __call__ (__accu1__.group, __accu1__, 'key');
/* 000526 */ 				}) ()));
/* 000526 */ 			}), content);
/* 000526 */ 		}) ();
/* 000526 */ 	});},
/* 000533 */ 	get render_float () {return __get__ (this, function (self, float_instance, render_context) {
/* 000533 */ 		if (arguments.length) {
/* 000533 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000533 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000533 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000533 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000533 */ 					switch (__attrib0__) {
/* 000533 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000533 */ 						case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000533 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000533 */ 					}
/* 000533 */ 				}
/* 000533 */ 			}
/* 000533 */ 		}
/* 000533 */ 		else {
/* 000533 */ 		}
/* 000536 */ 		var figattrs = dict ({});
/* 000538 */ 		if (__t__ (float_instance.target_id !== null)) {
/* 000539 */ 			__setitem__ (figattrs, 'id', float_instance.target_id);
/* 000539 */ 		}
/* 000541 */ 		var full_figcaption_rendered_list = [];
/* 000542 */ 		if (__t__ (float_instance.number !== null)) {
/* 000544 */ 			(function () {
/* 000544 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000545 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000545 */ 					var __accu1__ = self;
/* 000547 */ 					return __call__ (__accu1__.wrap_in_tag, __accu1__, 'span', (function () {
/* 000547 */ 						var __accu2__ = self;
/* 000548 */ 						return __call__ (__accu2__.render_join, __accu2__, [(function () {
/* 000548 */ 							var __accu3__ = self;
/* 000548 */ 							return __call__ (__accu3__.render_value, __accu3__, float_instance.float_type_info.float_caption_name, render_context);
/* 000553 */ 						}) (), '&nbsp;', (function () {
/* 000553 */ 							var __accu3__ = self;
/* 000553 */ 							return __call__ (__accu3__.render_nodelist, __accu3__, float_instance.formatted_counter_value_flm.nodes, __kwargtrans__ ({render_context: render_context}));
/* 000553 */ 						}) ()], render_context);
/* 000553 */ 					}) (), __kwargtrans__ ({class_names: ['float-number']}));
/* 000553 */ 				}) ());
/* 000553 */ 			}) ();
/* 000553 */ 		}
/* 000561 */ 		else if (__t__ (float_instance.caption_nodelist)) {
/* 000564 */ 			(function () {
/* 000564 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000565 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000565 */ 					var __accu1__ = self;
/* 000567 */ 					return __call__ (__accu1__.wrap_in_tag, __accu1__, 'span', (function () {
/* 000567 */ 						var __accu2__ = self;
/* 000568 */ 						return __call__ (__accu2__.render_join, __accu2__, [(function () {
/* 000568 */ 							var __accu3__ = self;
/* 000568 */ 							return __call__ (__accu3__.render_value, __accu3__, float_instance.float_type_info.float_caption_name, render_context);
/* 000568 */ 						}) ()], render_context);
/* 000568 */ 					}) (), __kwargtrans__ ({class_names: ['float-no-number']}));
/* 000568 */ 				}) ());
/* 000568 */ 			}) ();
/* 000568 */ 		}
/* 000574 */ 		else {
/* 000578 */ 			// pass;
/* 000578 */ 		}
/* 000580 */ 		if (__t__ (float_instance.caption_nodelist)) {
/* 000584 */ 			(function () {
/* 000584 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000584 */ 				return __call__ (__accu0__.append, __accu0__, ': ');
/* 000584 */ 			}) ();
/* 000587 */ 			(function () {
/* 000587 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000588 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000588 */ 					var __accu1__ = self;
/* 000588 */ 					return __call__ (__accu1__.render_nodelist, __accu1__, float_instance.caption_nodelist, __kwargtrans__ ({render_context: render_context}));
/* 000588 */ 				}) ());
/* 000588 */ 			}) ();
/* 000588 */ 		}
/* 000594 */ 		var rendered_float_caption = null;
/* 000595 */ 		if (__t__ (full_figcaption_rendered_list)) {
/* 000596 */ 			var rendered_float_caption = (function () {
/* 000596 */ 				var __accu0__ = self;
/* 000598 */ 				return __call__ (__accu0__.wrap_in_tag, __accu0__, 'figcaption', (function () {
/* 000598 */ 					var __accu1__ = self;
/* 000600 */ 					return __call__ (__accu1__.wrap_in_tag, __accu1__, 'span', (function () {
/* 000600 */ 						var __accu2__ = self;
/* 000600 */ 						return __call__ (__accu2__.render_join, __accu2__, full_figcaption_rendered_list, render_context);
/* 000600 */ 					}) ());
/* 000600 */ 				}) (), __kwargtrans__ ({class_names: ['float-caption-content']}));
/* 000600 */ 			}) ();
/* 000600 */ 		}
/* 000605 */ 		var float_content_block_content = (function () {
/* 000605 */ 			var __accu0__ = self;
/* 000605 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, float_instance.content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: true}));
/* 000605 */ 		}) ();
/* 000610 */ 		var float_content_block = (function () {
/* 000610 */ 			var __accu0__ = self;
/* 000610 */ 			return __call__ (__accu0__.render_semantic_block, __accu0__, float_content_block_content, 'float-contents', __kwargtrans__ ({render_context: render_context}));
/* 000610 */ 		}) ();
/* 000616 */ 		if (__t__ (rendered_float_caption !== null)) {
/* 000617 */ 			var float_content_with_caption = (function () {
/* 000617 */ 				var __accu0__ = self;
/* 000617 */ 				return __call__ (__accu0__.render_join_blocks, __accu0__, [float_content_block, rendered_float_caption], render_context);
/* 000617 */ 			}) ();
/* 000617 */ 		}
/* 000621 */ 		else {
/* 000622 */ 			var float_content_with_caption = float_content_block;
/* 000622 */ 		}
/* 000624 */ 		var full_figure = (function () {
/* 000624 */ 			var __accu0__ = self;
/* 000624 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'figure', float_content_with_caption, __kwargtrans__ ({attrs: figattrs, class_names: ['float', 'float-{}'.format (float_instance.float_type)]}));
/* 000624 */ 		}) ();
/* 000631 */ 		return full_figure;
/* 000631 */ 	});},
/* 000634 */ 	graphics_raster_magnification: 1,
/* 000635 */ 	graphics_vector_magnification: 1,
/* 000637 */ 	get render_graphics_block () {return __get__ (this, function (self, graphics_resource, render_context) {
/* 000637 */ 		if (arguments.length) {
/* 000637 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000637 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000637 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000637 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000637 */ 					switch (__attrib0__) {
/* 000637 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000637 */ 						case 'graphics_resource': var graphics_resource = __allkwargs0__ [__attrib0__]; break;
/* 000637 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000637 */ 					}
/* 000637 */ 				}
/* 000637 */ 			}
/* 000637 */ 		}
/* 000637 */ 		else {
/* 000637 */ 		}
/* 000639 */ 		var imgattrs = dict ({});
/* 000641 */ 		var styparts = [];
/* 000642 */ 		if (__t__ (graphics_resource.physical_dimensions !== null)) {
/* 000644 */ 			var __left0__ = graphics_resource.physical_dimensions;
/* 000644 */ 			var width_pt = __left0__ [0];
/* 000644 */ 			var height_pt = __left0__ [1];
/* 000646 */ 			if (__t__ (__eq__ (graphics_resource.graphics_type, 'raster'))) {
/* 000647 */ 				if (__t__ (width_pt !== null)) {
/* 000648 */ 					var width_pt = __call__ (__imul__, null, width_pt, self.graphics_raster_magnification);
/* 000648 */ 				}
/* 000649 */ 				if (__t__ (height_pt !== null)) {
/* 000650 */ 					var height_pt = __call__ (__imul__, null, height_pt, self.graphics_raster_magnification);
/* 000650 */ 				}
/* 000650 */ 			}
/* 000651 */ 			else if (__t__ (__eq__ (graphics_resource.graphics_type, 'vector'))) {
/* 000652 */ 				if (__t__ (width_pt !== null)) {
/* 000653 */ 					var width_pt = __call__ (__imul__, null, width_pt, self.graphics_vector_magnification);
/* 000653 */ 				}
/* 000654 */ 				if (__t__ (height_pt !== null)) {
/* 000655 */ 					var height_pt = __call__ (__imul__, null, height_pt, self.graphics_vector_magnification);
/* 000655 */ 				}
/* 000655 */ 			}
/* 000657 */ 			if (__t__ (width_pt !== null)) {
/* 000658 */ 				(function () {
/* 000658 */ 					var __accu0__ = styparts;
/* 000658 */ 					return __call__ (__accu0__.append, __accu0__, 'width:{}pt'.format (width_pt));
/* 000658 */ 				}) ();
/* 000658 */ 			}
/* 000659 */ 			if (__t__ (height_pt !== null)) {
/* 000660 */ 				(function () {
/* 000660 */ 					var __accu0__ = styparts;
/* 000660 */ 					return __call__ (__accu0__.append, __accu0__, 'height:{}pt'.format (height_pt));
/* 000660 */ 				}) ();
/* 000660 */ 			}
/* 000660 */ 		}
/* 000662 */ 		if (__t__ (styparts)) {
/* 000663 */ 			__setitem__ (imgattrs, 'style', (function () {
/* 000663 */ 				var __accu0__ = ';';
/* 000663 */ 				return __call__ (__accu0__.join, __accu0__, styparts);
/* 000663 */ 			}) ());
/* 000663 */ 		}
/* 000665 */ 		var src_url = graphics_resource.src_url;
/* 000666 */ 		__setitem__ (imgattrs, 'src', src_url);
/* 000669 */ 		if (__t__ (__t__ (graphics_resource.srcset !== null) && __t__ (graphics_resource.srcset) && __call__ (len, null, graphics_resource.srcset))) {
/* 000671 */ 			var srcset_items = [];
/* 000672 */ 			var __iterable0__ = graphics_resource.srcset;
/* 000672 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000672 */ 				var srcset_info = __getitem__ (__iterable0__, __index0__);
/* 000673 */ 				var ss = __getitem__ (srcset_info, 'source');
/* 000674 */ 				if (__t__ (__in__ ('pixel_density', srcset_info))) {
/* 000675 */ 					var pixel_density = __getitem__ (srcset_info, 'pixel_density');
/* 000676 */ 					var ss = __call__ (__iadd__, null, ss, ' {}x'.format (pixel_density));
/* 000676 */ 				}
/* 000678 */ 				(function () {
/* 000678 */ 					var __accu0__ = srcset_items;
/* 000678 */ 					return __call__ (__accu0__.append, __accu0__, ss);
/* 000678 */ 				}) ();
/* 000678 */ 			}
/* 000680 */ 			__setitem__ (imgattrs, 'srcset', (function () {
/* 000680 */ 				var __accu0__ = ', ';
/* 000680 */ 				return __call__ (__accu0__.join, __accu0__, srcset_items);
/* 000680 */ 			}) ());
/* 000680 */ 		}
/* 000683 */ 		return (function () {
/* 000683 */ 			var __accu0__ = self;
/* 000683 */ 			return __call__ (__accu0__.generate_open_tag, __accu0__, 'img', __kwargtrans__ ({attrs: imgattrs}));
/* 000683 */ 		}) ();
/* 000683 */ 	});},
/* 000686 */ 	get render_cells () {return __get__ (this, function (self, cells_model, render_context, target_id) {
/* 000686 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000686 */ 			var target_id = null;
/* 000686 */ 		};
/* 000686 */ 		if (arguments.length) {
/* 000686 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000686 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000686 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000686 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000686 */ 					switch (__attrib0__) {
/* 000686 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000686 */ 						case 'cells_model': var cells_model = __allkwargs0__ [__attrib0__]; break;
/* 000686 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000686 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000686 */ 					}
/* 000686 */ 				}
/* 000686 */ 			}
/* 000686 */ 		}
/* 000686 */ 		else {
/* 000686 */ 		}
/* 000688 */ 		var __left0__ = tuple ([__call__ (len, null, cells_model.grid_data), __call__ (len, null, __getitem__ (cells_model.grid_data, 0))]);
/* 000688 */ 		var tabheight = __left0__ [0];
/* 000688 */ 		var tabwidth = __left0__ [1];
/* 000690 */ 		var data_items = [];
/* 000691 */ 		var row_j = 0;
/* 000692 */ 		while (__t__ (__lt__ (row_j, __call__ (len, null, cells_model.grid_data)))) {
/* 000693 */ 			var row_items = [];
/* 000694 */ 			var col_j = 0;
/* 000695 */ 			while (__t__ (__lt__ (col_j, __call__ (len, null, __getitem__ (cells_model.grid_data, row_j))))) {
/* 000697 */ 				var grid_cell_data = __getitem__ (__getitem__ (cells_model.grid_data, row_j), col_j);
/* 000699 */ 				if (__t__ (__t__ (grid_cell_data === null) || __getitem__ (grid_cell_data, 'cell') === null)) {
/* 000702 */ 					var clsnames = [];
/* 000703 */ 					if (__t__ (__eq__ (row_j, 0))) {
/* 000704 */ 						(function () {
/* 000704 */ 							var __accu0__ = clsnames;
/* 000704 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-top');
/* 000704 */ 						}) ();
/* 000704 */ 					}
/* 000705 */ 					if (__t__ (__eq__ (col_j, 0))) {
/* 000706 */ 						(function () {
/* 000706 */ 							var __accu0__ = clsnames;
/* 000706 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-left');
/* 000706 */ 						}) ();
/* 000706 */ 					}
/* 000707 */ 					if (__t__ (__eq__ (row_j, __sub__ (tabheight, 1)))) {
/* 000708 */ 						(function () {
/* 000708 */ 							var __accu0__ = clsnames;
/* 000708 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-bottom');
/* 000708 */ 						}) ();
/* 000708 */ 					}
/* 000709 */ 					if (__t__ (__eq__ (col_j, __sub__ (tabwidth, 1)))) {
/* 000710 */ 						(function () {
/* 000710 */ 							var __accu0__ = clsnames;
/* 000710 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-right');
/* 000710 */ 						}) ();
/* 000710 */ 					}
/* 000711 */ 					(function () {
/* 000711 */ 						var __accu0__ = row_items;
/* 000711 */ 						return __call__ (__accu0__.append, __accu0__, (function () {
/* 000711 */ 							var __accu1__ = self;
/* 000711 */ 							return __call__ (__accu1__.wrap_in_tag, __accu1__, 'td', '', __kwargtrans__ ({class_names: __add__ (['cell-empty'], clsnames)}));
/* 000711 */ 						}) ());
/* 000711 */ 					}) ();
/* 000716 */ 					var col_j = __call__ (__iadd__, null, col_j, 1);
/* 000716 */ 					continue;
/* 000716 */ 				}
/* 000719 */ 				if (__t__ (__getitem__ (grid_cell_data, 'is_topleft'))) {
/* 000721 */ 					var cell = __getitem__ (grid_cell_data, 'cell');
/* 000722 */ 					var rendered_cell_contents = (function () {
/* 000722 */ 						var __accu0__ = self;
/* 000722 */ 						return __call__ (__accu0__.render_nodelist, __accu0__, cell.content_nodes, __kwargtrans__ ({render_context: render_context}));
/* 000722 */ 					}) ();
/* 000726 */ 					var clsnames = __add__ (['cell'], (function () {
/* 000726 */ 						var __accu0__ = [];
/* 000726 */ 						var __iterable0__ = cell.styles;
/* 000726 */ 						for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000726 */ 							var sty = __getitem__ (__iterable0__, __index0__);
/* 000726 */ 							(function () {
/* 000726 */ 								var __accu1__ = __accu0__;
/* 000726 */ 								return __call__ (__accu1__.append, __accu1__, 'cellstyle-{}'.format (sty));
/* 000726 */ 							}) ();
/* 000726 */ 						}
/* 000726 */ 						return __accu0__;
/* 000726 */ 					}) ());
/* 000727 */ 					if (__t__ (__eq__ (row_j, 0))) {
/* 000728 */ 						(function () {
/* 000728 */ 							var __accu0__ = clsnames;
/* 000728 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-top');
/* 000728 */ 						}) ();
/* 000728 */ 					}
/* 000729 */ 					if (__t__ (__eq__ (col_j, 0))) {
/* 000730 */ 						(function () {
/* 000730 */ 							var __accu0__ = clsnames;
/* 000730 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-left');
/* 000730 */ 						}) ();
/* 000730 */ 					}
/* 000731 */ 					if (__t__ (__eq__ (cell.placement.row_range.end, tabheight))) {
/* 000732 */ 						(function () {
/* 000732 */ 							var __accu0__ = clsnames;
/* 000732 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-bottom');
/* 000732 */ 						}) ();
/* 000732 */ 					}
/* 000733 */ 					if (__t__ (__eq__ (cell.placement.col_range.end, tabwidth))) {
/* 000734 */ 						(function () {
/* 000734 */ 							var __accu0__ = clsnames;
/* 000734 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-right');
/* 000734 */ 						}) ();
/* 000734 */ 					}
/* 000735 */ 					var tagname = 'td';
/* 000736 */ 					if (__t__ (__t__ (__in__ ('H', cell.styles)) || __in__ ('rH', cell.styles))) {
/* 000737 */ 						var tagname = 'th';
/* 000737 */ 					}
/* 000738 */ 					var attrs = dict ({});
/* 000739 */ 					var cplc = cell.placement;
/* 000740 */ 					if (__t__ (__ne__ (cplc.col_range.end, __add__ (cplc.col_range.start, 1)))) {
/* 000743 */ 						__setitem__ (attrs, 'colspan', __call__ (str, null, __sub__ (cplc.col_range.end, cplc.col_range.start)));
/* 000743 */ 					}
/* 000744 */ 					if (__t__ (__ne__ (cplc.row_range.end, __add__ (cplc.row_range.start, 1)))) {
/* 000746 */ 						__setitem__ (attrs, 'rowspan', __call__ (str, null, __sub__ (cplc.row_range.end, cplc.row_range.start)));
/* 000746 */ 					}
/* 000747 */ 					(function () {
/* 000747 */ 						var __accu0__ = row_items;
/* 000748 */ 						return __call__ (__accu0__.append, __accu0__, (function () {
/* 000748 */ 							var __accu1__ = self;
/* 000748 */ 							return __call__ (__accu1__.wrap_in_tag, __accu1__, tagname, rendered_cell_contents, __kwargtrans__ ({attrs: attrs, class_names: clsnames}));
/* 000748 */ 						}) ());
/* 000748 */ 					}) ();
/* 000755 */ 					var col_j = cplc.col_range.end;
/* 000755 */ 					continue;
/* 000755 */ 				}
/* 000760 */ 				var col_j = __call__ (__iadd__, null, col_j, 1);
/* 000760 */ 			}
/* 000762 */ 			(function () {
/* 000762 */ 				var __accu0__ = data_items;
/* 000762 */ 				return __call__ (__accu0__.append, __accu0__, row_items);
/* 000762 */ 			}) ();
/* 000763 */ 			var row_j = __call__ (__iadd__, null, row_j, 1);
/* 000763 */ 		}
/* 000765 */ 		var table_attrs = dict ({});
/* 000766 */ 		if (__t__ (target_id !== null)) {
/* 000767 */ 			__setitem__ (table_attrs, 'id', target_id);
/* 000767 */ 		}
/* 000769 */ 		var s = (function () {
/* 000769 */ 			var __accu0__ = self;
/* 000771 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'table', (function () {
/* 000771 */ 				var __accu1__ = '';
/* 000771 */ 				return __call__ (__accu1__.join, __accu1__, (function () {
/* 000771 */ 					var __accu2__ = [];
/* 000771 */ 					var __iterable0__ = data_items;
/* 000771 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000773 */ 						var row_items = __getitem__ (__iterable0__, __index0__);
/* 000773 */ 						(function () {
/* 000773 */ 							var __accu3__ = __accu2__;
/* 000772 */ 							return __call__ (__accu3__.append, __accu3__, __add__ (__add__ ('<tr>', (function () {
/* 000772 */ 								var __accu4__ = '';
/* 000772 */ 								return __call__ (__accu4__.join, __accu4__, row_items);
/* 000772 */ 							}) ()), '</tr>'));
/* 000772 */ 						}) ();
/* 000772 */ 					}
/* 000772 */ 					return __accu2__;
/* 000772 */ 				}) ());
/* 000772 */ 			}) (), __kwargtrans__ ({attrs: table_attrs, class_names: ['cells']}));
/* 000772 */ 		}) ();
/* 000778 */ 		return s;
/* 000778 */ 	});}
/* 000778 */ });
/* 000784 */ export var _rx_delayed_markers = (function () {
/* 000784 */ 	var __accu0__ = re;
/* 000784 */ 	return __call__ (__accu0__.compile, __accu0__, '<FLM:DLYD:(?P<key>\\d+)\\s*/>');
/* 000784 */ }) ();
/* 000791 */ export var _html_css_global = '\np, ul, ol, .p-block {\n  margin: 1em 0px;\n}\np:first-child, ul:first-child, ol:first-child, .p-block:first-child {\n  margin-top: 0px;\n}\np:last-child, ul:last-child, ol:last-child, .p-block:last-child {\n  margin-bottom: 0px;\n}\ndd > p, dd > p:first-child, dd > p:last-child {\n  margin: 0.33em 0px;\n}\n\na, a:link, a:hover, a:active, a:visited {\n  color: #3232c8;\n  text-decoration: none;\n}\na:hover {\n  color: #22228a;\n}\n';
/* 000814 */ export var _html_css_content = "\n.emph, .textit {\n  font-style: italic;\n}\n.textbf {\n  font-weight: bold;\n}\n\nh1 {\n  font-size: 1.6rem;\n  line-height: 1.3em;\n  font-weight: bold;\n  margin: 1em 0px;\n}\nh2 {\n  font-size: 1.3rem;\n  line-height: 1.3em;\n  font-weight: bold;\n  margin: 1em 0px;\n}\nh3 {\n  font-size: 1rem;\n  font-weight: bold;\n  margin: 1em 0px;\n}\n\n.heading-level-4 {\n  font-style: italic;\n  display: inline;\n}\n.heading-level-4::after {\n  display: inline-block;\n  margin: 0px .12em;\n  content: '—';\n}\n\n.heading-level-5 {\n  font-style: italic;\n  font-size: .9em;\n  display: inline;\n}\n.heading-level-5::after {\n  display: inline-block;\n  margin-right: .12em;\n  content: '';\n}\n\n.heading-level-6 {\n  font-style: italic;\n  font-size: .8em;\n  display: inline;\n}\n.heading-level-6::after {\n  display: inline-block;\n  margin-right: .06em;\n  content: '';\n}\n\n\n.heading-level-theorem {\n  font-weight: bold;\n}\n.heading-level-theorem::after {\n  font-weight: bold;\n  display: inline-block;\n  margin: 0px .12em 0px 0px;\n  content: '.';\n}\n\ndiv.prooflike > p > .heading-level-theorem,\ndiv.prooflike > p > .heading-level-theorem::after {\n  font-weight: normal;\n  font-style: italic;\n}\n\n\ndl.enumeration {\n  display: block;\n  margin-left: 2.5em;\n}\ndl.enumeration > dt {\n  float: left;\n  clear: left;\n  display: inline-block;\n  /*margin: 0px; */\n  margin-left: -2.5em;\n  width: 2.0em;\n  min-width: 2.0em;\n  max-width: 2.0em;\n  margin-right: 0.5em;\n  text-align: right;\n}\ndl.enumeration > dd {\n  /*display: inline-block;\n  width: 100%;*/\n  border: 0px;\n  padding: 0px;\n  margin: 0px;\n}\n\nfigure.float {\n  width: 100%;\n  border-width: 1px 0px 1px 0px;\n  border-style: solid none solid none;\n  border-color: rgba(120, 120, 140, 0.15);\n  margin: 0.5rem 0px;\n  padding: 0.5rem 0px;\n}\n\nfigure.float .float-contents {\n  width: 100%;\n  max-width: 100%;\n  overflow-x: auto;\n}\n\nfigure.float .float-contents img {\n  display: block;\n  margin: 0pt auto;\n  padding: 0pt;\n  border: 0pt;\n  margin: 0px auto;\n}\n\nfigure.float figcaption {\n  display: block;\n  margin-top: 0.5em;\n  margin: 0.75em 2em 0px;\n  text-align: center;\n}\n\nfigure.float figcaption > span {\n  display: inline-block;\n  font-style: italic;\n  text-align: left;\n}\n\ntable {\n  margin: 1em 0px 1em 0px;\n  border-collapse: separate;\n  border-spacing: 0px;\n  /*border-top: solid 1pt;\n  border-bottom: solid 1pt;*/\n}\nfigure.float .float-contents table {\n  margin: 0px auto;\n}\ntd {\n  padding: 0.3em 0.5em;\n  border: none 0px;\n}\nth {\n  padding: 0.3em 0.5em;\n  border: none 0px;\n}\n.cellstyle-H {\n  border-bottom: solid .5pt;\n}\n.cellstyle-rH {\n}\n.cellstyle-l {\n  text-align: left;\n}\n.cellstyle-c {\n  text-align: center;\n}\n.cellstyle-r {\n  text-align: right;\n}\n.cellstyle-green {\n  background-color: rgba(69, 255, 69, 0.31); /*rgb(200,255,200);*/\n}\n.cellstyle-blue {\n  background-color: rgba(79, 142, 255, 0.27); /*rgb(200,220,255);*/\n}\n.cellstyle-yellow {\n  background-color: rgba(255, 255, 49, 0.33); /*rgb(255,255,200);*/\n}\n.cellstyle-red {\n  background-color: rgba(255,120,120,0.30);  /*rgb(255,200,200);*/\n}\n.cellstyle-lvert {\n  border-left: solid .5pt;\n}\n.cellstyle-rvert {\n  border-right: solid .5pt;\n}\n\n.celltbledge-top {\n  border-top: solid 1pt;\n}\n.celltbledge-bottom {\n  border-bottom: solid 1pt;\n}\n\n.verbatimcode {\n  font-family: monospace;\n  font-size: 0.9em;\n  background-color: rgba(127,127,127,0.25);\n  border-radius: 2px;\n  padding: 1px 2px;\n  display: inline-block;\n  white-space: pre-wrap;\n}\n.verbatima {\n  font-style: italic;\n}\n.verbatimcode-environment {\n  display: block;\n  margin: 0.75em 0px 1em;\n  white-space: pre;\n}\n\n.defterm {\n  font-style: italic;\n  margin: 1em 0px;\n}\n.defterm:first-child {\n  margin-top: 0px;\n}\n.defterm:last-child {\n  margin-bottom: 0px;\n}\n\n.defterm .defterm-term, .defterm .term-in-defining-defterm {\n  font-style: italic;\n  font-weight: bold;\n}\n\n.display-math {\n  width: 100%;\n  max-width: 100%;\n  display: block;\n  overflow-x: auto;\n}\n\n.endnote {\n}\n.citation {\n}\n.footnote {\n}\n.endnote-marks, .citation-marks {\n  font-size: 0.8em;\n  display: inline-block;\n  vertical-align: 0.3em;\n  margin-top: -0.3em;\n}\ndl.citation-list > dt, dl.footnote-list > dt {\n  font-size: 0.8em;\n  display: inline-block;\n  vertical-align: 0.3em;\n  margin-top: -0.3em;\n}\n";
/* 001070 */ export var _html_js_mathjax = '\nMathJax = {\n    tex: {\n        inlineMath: [[\'\\\\(\', \'\\\\)\']],\n        displayMath: [[\'\\\\[\', \'\\\\]\']],\n        processEnvironments: true,\n        processRefs: true,\n\n        // equation numbering on\n        tags: \'ams\'\n    },\n    options: {\n        // all MathJax content is marked with CSS classes\n        // skipHtmlTags: \'body\',\n        // processHtmlClass: \'display-math|inline-math\',\n    },\n    startup: {\n        pageReady: function() {\n            // override the default "typeset everything on the page" behavior to\n            // only typeset whatever we have explicitly marked as math\n            return typesetPageMathPromise();\n        }\n    }\n};\nfunction typesetPageMathPromise()\n{\n    var elements = document.querySelectorAll(\'.display-math, .inline-math\');\n    return MathJax.typesetPromise(elements);\n}\n';
/* 001101 */ export var _html_body_end_js_scripts_mathjax = '\n<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>\n<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>\n';
/* 001109 */ export var get_html_css_global = function (html_fragment_renderer) {
/* 001109 */ 	if (arguments.length) {
/* 001109 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001109 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001109 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001109 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001109 */ 				switch (__attrib0__) {
/* 001109 */ 					case 'html_fragment_renderer': var html_fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 001109 */ 				}
/* 001109 */ 			}
/* 001109 */ 		}
/* 001109 */ 	}
/* 001109 */ 	else {
/* 001109 */ 	}
/* 001110 */ 	return _html_css_global;
/* 001110 */ };
/* 001112 */ export var get_html_css_content = function (html_fragment_renderer) {
/* 001112 */ 	if (arguments.length) {
/* 001112 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001112 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001112 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001112 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001112 */ 				switch (__attrib0__) {
/* 001112 */ 					case 'html_fragment_renderer': var html_fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 001112 */ 				}
/* 001112 */ 			}
/* 001112 */ 		}
/* 001112 */ 	}
/* 001112 */ 	else {
/* 001112 */ 	}
/* 001113 */ 	return _html_css_content;
/* 001113 */ };
/* 001115 */ export var get_html_js = function (html_fragment_renderer) {
/* 001115 */ 	if (arguments.length) {
/* 001115 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001115 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001115 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001115 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001115 */ 				switch (__attrib0__) {
/* 001115 */ 					case 'html_fragment_renderer': var html_fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 001115 */ 				}
/* 001115 */ 			}
/* 001115 */ 		}
/* 001115 */ 	}
/* 001115 */ 	else {
/* 001115 */ 	}
/* 001116 */ 	if (__t__ (html_fragment_renderer.use_mathjax)) {
/* 001117 */ 		return _html_js_mathjax;
/* 001117 */ 	}
/* 001118 */ 	return '';
/* 001118 */ };
/* 001120 */ export var get_html_body_end_js_scripts = function (html_fragment_renderer) {
/* 001120 */ 	if (arguments.length) {
/* 001120 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001120 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001120 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001120 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001120 */ 				switch (__attrib0__) {
/* 001120 */ 					case 'html_fragment_renderer': var html_fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 001120 */ 				}
/* 001120 */ 			}
/* 001120 */ 		}
/* 001120 */ 	}
/* 001120 */ 	else {
/* 001120 */ 	}
/* 001121 */ 	if (__t__ (html_fragment_renderer.use_mathjax)) {
/* 001122 */ 		return _html_body_end_js_scripts_mathjax;
/* 001122 */ 	}
/* 001123 */ 	return '';
/* 001123 */ };
/* 001129 */ export var FragmentRendererInformation =  __class__ ('FragmentRendererInformation', [object], {
/* 001129 */ 	__module__: __name__,
/* 001135 */ 	FragmentRendererClass: HtmlFragmentRenderer,
/* 001138 */ 	get get_style_information () {return function (fragment_renderer) {
/* 001138 */ 		if (arguments.length) {
/* 001138 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001138 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001138 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001138 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001138 */ 					switch (__attrib0__) {
/* 001138 */ 						case 'fragment_renderer': var fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 001138 */ 					}
/* 001138 */ 				}
/* 001138 */ 			}
/* 001138 */ 		}
/* 001138 */ 		else {
/* 001138 */ 		}
/* 001143 */ 		return dict ({'css_global': __call__ (get_html_css_global, null, fragment_renderer), 'css_content': __call__ (get_html_css_content, null, fragment_renderer), 'js': __call__ (get_html_js, null, fragment_renderer), 'body_end_js_scripts': __call__ (get_html_body_end_js_scripts, null, fragment_renderer)});
/* 001143 */ 	};},
/* 001146 */ 	format_name: 'html'
/* 001146 */ });
/* 000006 */ 
//# sourceMappingURL=flm.fragmentrenderer.html.map