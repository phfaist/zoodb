/* 000001 */ // Transcrypt'ed from Python, 2023-05-13 12:17:28
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
/* 000021 */ 	supports_delayed_render_markers: true,
/* 000028 */ 	use_link_target_blank: false,
/* 000041 */ 	html_blocks_joiner: '\n',
/* 000060 */ 	heading_tags_by_level: dict ({1: 'h1', 2: 'h2', 3: 'h3', 4: 'span', 5: 'span', 6: 'span', 'theorem': 'span'}),
/* 000075 */ 	inline_heading_add_space: true,
/* 000082 */ 	aggressively_escape_html_attributes: false,
/* 000100 */ 	render_nothing_as_comment_with_annotations: true,
/* 000103 */ 	use_mathjax: true,
/* 000111 */ 	get htmlescape () {return __get__ (this, function (self, value) {
/* 000111 */ 		if (arguments.length) {
/* 000111 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000111 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000111 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000111 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000111 */ 					switch (__attrib0__) {
/* 000111 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000111 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000111 */ 					}
/* 000111 */ 				}
/* 000111 */ 			}
/* 000111 */ 		}
/* 000111 */ 		else {
/* 000111 */ 		}
/* 000112 */ 		var esc = (function () {
/* 000112 */ 			var __accu0__ = html;
/* 000112 */ 			return __call__ (__accu0__.escape, __accu0__, value);
/* 000112 */ 		}) ();
/* 000114 */ 		var esc = (function () {
/* 000114 */ 			var __accu0__ = (function () {
/* 000114 */ 				var __accu1__ = (function () {
/* 000114 */ 					var __accu2__ = (function () {
/* 000114 */ 						var __accu3__ = (function () {
/* 000114 */ 							var __accu4__ = (function () {
/* 000114 */ 								var __accu5__ = (function () {
/* 000114 */ 									var __accu6__ = esc;
/* 000114 */ 									return __call__ (__accu6__.py_replace, __accu6__, '\xa0', '&nbsp;');
/* 000114 */ 								}) ();
/* 000114 */ 								return __call__ (__accu5__.py_replace, __accu5__, '\u200a', '&hairsp;');
/* 000114 */ 							}) ();
/* 000115 */ 							return __call__ (__accu4__.py_replace, __accu4__, '\u2009', '&thinsp;');
/* 000115 */ 						}) ();
/* 000116 */ 						return __call__ (__accu3__.py_replace, __accu3__, '\u2008', '&puncsp;');
/* 000116 */ 					}) ();
/* 000117 */ 					return __call__ (__accu2__.py_replace, __accu2__, '\u2002', '&ensp;');
/* 000117 */ 				}) ();
/* 000118 */ 				return __call__ (__accu1__.py_replace, __accu1__, '\u2003', '&emsp;');
/* 000118 */ 			}) ();
/* 000119 */ 			return __call__ (__accu0__.py_replace, __accu0__, '\u2007', '&numsp;');
/* 000119 */ 		}) ();
/* 000122 */ 		return esc;
/* 000122 */ 	});},
/* 000124 */ 	get htmlescape_double_quoted_attribute_value () {return __get__ (this, function (self, value) {
/* 000124 */ 		if (arguments.length) {
/* 000124 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000124 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000124 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000124 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000124 */ 					switch (__attrib0__) {
/* 000124 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000124 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000124 */ 					}
/* 000124 */ 				}
/* 000124 */ 			}
/* 000124 */ 		}
/* 000124 */ 		else {
/* 000124 */ 		}
/* 000126 */ 		if (__t__ (self.aggressively_escape_html_attributes)) {
/* 000127 */ 			return (function () {
/* 000127 */ 				var __accu0__ = self;
/* 000127 */ 				return __call__ (__accu0__.htmlescape, __accu0__, value);
/* 000127 */ 			}) ();
/* 000127 */ 		}
/* 000137 */ 		var value = (function () {
/* 000137 */ 			var __accu0__ = _rx_html_entity;
/* 000137 */ 			return __call__ (__accu0__.sub, __accu0__, (function __lambda__ (m) {
/* 000137 */ 				if (arguments.length) {
/* 000137 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000137 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000137 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000137 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000137 */ 							switch (__attrib0__) {
/* 000137 */ 								case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000137 */ 							}
/* 000137 */ 						}
/* 000137 */ 					}
/* 000137 */ 				}
/* 000137 */ 				else {
/* 000137 */ 				}
/* 000137 */ 				return __add__ (__add__ ('&amp;', (function () {
/* 000137 */ 					var __accu1__ = m;
/* 000137 */ 					return __call__ (__accu1__.group, __accu1__, 1);
/* 000137 */ 				}) ()), ';');
/* 000137 */ 			}), value);
/* 000137 */ 		}) ();
/* 000139 */ 		var value = (function () {
/* 000139 */ 			var __accu0__ = value;
/* 000139 */ 			return __call__ (__accu0__.py_replace, __accu0__, '"', '&quot;');
/* 000139 */ 		}) ();
/* 000140 */ 		return value;
/* 000140 */ 	});},
/* 000142 */ 	get generate_open_tag () {return __get__ (this, function (self, tagname) {
/* 000142 */ 		var attrs = null;
/* 000142 */ 		var class_names = null;
/* 000142 */ 		var self_close_tag = false;
/* 000142 */ 		if (arguments.length) {
/* 000142 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000142 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000142 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000142 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000142 */ 					switch (__attrib0__) {
/* 000142 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000142 */ 						case 'tagname': var tagname = __allkwargs0__ [__attrib0__]; break;
/* 000142 */ 						case 'attrs': var attrs = __allkwargs0__ [__attrib0__]; break;
/* 000142 */ 						case 'class_names': var class_names = __allkwargs0__ [__attrib0__]; break;
/* 000142 */ 						case 'self_close_tag': var self_close_tag = __allkwargs0__ [__attrib0__]; break;
/* 000142 */ 					}
/* 000142 */ 				}
/* 000142 */ 			}
/* 000142 */ 		}
/* 000142 */ 		else {
/* 000142 */ 		}
/* 000143 */ 		var s = '<{}'.format (tagname);
/* 000144 */ 		if (__t__ (!__t__ ((attrs)))) {
/* 000145 */ 			var attrs = dict ({});
/* 000145 */ 		}
/* 000146 */ 		var attrs = __call__ (dict, null, attrs);
/* 000147 */ 		if (__t__ (__in__ ('class', attrs))) {
/* 000148 */ 			var __except0__ = __call__ (ValueError, null, "generate_open_tag(): set HTML 'class' attribute with class_names=, not with attrs=");
/* 000148 */ 			__except0__.__cause__ = null;
/* 000148 */ 			throw __except0__;
/* 000148 */ 		}
/* 000152 */ 		if (__t__ (class_names)) {
/* 000153 */ 			__setitem__ (attrs, 'class', (function () {
/* 000153 */ 				var __accu0__ = ' ';
/* 000153 */ 				return __call__ (__accu0__.join, __accu0__, class_names);
/* 000153 */ 			}) ());
/* 000153 */ 		}
/* 000154 */ 		if (__t__ (attrs)) {
/* 000155 */ 			var __iterable0__ = (function () {
/* 000155 */ 				var __accu0__ = attrs;
/* 000155 */ 				return __call__ (__accu0__.py_items, __accu0__);
/* 000155 */ 			}) ();
/* 000155 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000155 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000155 */ 				var aname = __left0__ [0];
/* 000155 */ 				var aval = __left0__ [1];
/* 000156 */ 				var s = __call__ (__iadd__, null, s, ' {}="{}"'.format (aname, (function () {
/* 000156 */ 					var __accu0__ = self;
/* 000156 */ 					return __call__ (__accu0__.htmlescape_double_quoted_attribute_value, __accu0__, aval);
/* 000156 */ 				}) ()));
/* 000156 */ 			}
/* 000156 */ 		}
/* 000157 */ 		if (__t__ (self_close_tag)) {
/* 000158 */ 			var s = __call__ (__iadd__, null, s, '/>');
/* 000158 */ 		}
/* 000159 */ 		else {
/* 000160 */ 			var s = __call__ (__iadd__, null, s, '>');
/* 000160 */ 		}
/* 000161 */ 		return s;
/* 000161 */ 	});},
/* 000163 */ 	get wrap_in_tag () {return __get__ (this, function (self, tagname, content_html) {
/* 000163 */ 		var attrs = null;
/* 000163 */ 		var class_names = null;
/* 000163 */ 		if (arguments.length) {
/* 000163 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000163 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000163 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000163 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000163 */ 					switch (__attrib0__) {
/* 000163 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000163 */ 						case 'tagname': var tagname = __allkwargs0__ [__attrib0__]; break;
/* 000163 */ 						case 'content_html': var content_html = __allkwargs0__ [__attrib0__]; break;
/* 000163 */ 						case 'attrs': var attrs = __allkwargs0__ [__attrib0__]; break;
/* 000163 */ 						case 'class_names': var class_names = __allkwargs0__ [__attrib0__]; break;
/* 000163 */ 					}
/* 000163 */ 				}
/* 000163 */ 			}
/* 000163 */ 		}
/* 000163 */ 		else {
/* 000163 */ 		}
/* 000165 */ 		var s = (function () {
/* 000165 */ 			var __accu0__ = self;
/* 000165 */ 			return __call__ (__accu0__.generate_open_tag, __accu0__, tagname, __kwargtrans__ ({attrs: attrs, class_names: class_names}));
/* 000165 */ 		}) ();
/* 000166 */ 		var s = __call__ (__iadd__, null, s, __call__ (str, null, content_html));
/* 000167 */ 		var s = __call__ (__iadd__, null, s, '</{}>'.format (tagname));
/* 000168 */ 		return s;
/* 000168 */ 	});},
/* 000170 */ 	get wrap_in_link () {return __get__ (this, function (self, display_html, target_href) {
/* 000170 */ 		var class_names = null;
/* 000170 */ 		if (arguments.length) {
/* 000170 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000170 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000170 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000170 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000170 */ 					switch (__attrib0__) {
/* 000170 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000170 */ 						case 'display_html': var display_html = __allkwargs0__ [__attrib0__]; break;
/* 000170 */ 						case 'target_href': var target_href = __allkwargs0__ [__attrib0__]; break;
/* 000170 */ 						case 'class_names': var class_names = __allkwargs0__ [__attrib0__]; break;
/* 000170 */ 					}
/* 000170 */ 				}
/* 000170 */ 			}
/* 000170 */ 		}
/* 000170 */ 		else {
/* 000170 */ 		}
/* 000171 */ 		if (__t__ (!__t__ ((target_href)))) {
/* 000172 */ 			var target_href = '#';
/* 000172 */ 		}
/* 000173 */ 		var attrs = dict ({'href': target_href});
/* 000176 */ 		if (__t__ (__call__ (callable, null, self.use_link_target_blank))) {
/* 000177 */ 			if (__t__ ((function () {
/* 000177 */ 				var __accu0__ = self;
/* 000177 */ 				return __call__ (__accu0__.use_link_target_blank, __accu0__, target_href);
/* 000177 */ 			}) ())) {
/* 000178 */ 				__setitem__ (attrs, 'target', '_blank');
/* 000178 */ 			}
/* 000178 */ 		}
/* 000179 */ 		else if (__t__ (__t__ (self.use_link_target_blank) && !__t__ (((function () {
/* 000179 */ 			var __accu0__ = target_href;
/* 000179 */ 			return __call__ (__accu0__.startswith, __accu0__, '#');
/* 000179 */ 		}) ())))) {
/* 000180 */ 			__setitem__ (attrs, 'target', '_blank');
/* 000180 */ 		}
/* 000181 */ 		return (function () {
/* 000181 */ 			var __accu0__ = self;
/* 000181 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'a', display_html, __kwargtrans__ ({attrs: attrs, class_names: class_names}));
/* 000181 */ 		}) ();
/* 000181 */ 	});},
/* 000190 */ 	get render_build_paragraph () {return __get__ (this, function (self, nodelist, render_context) {
/* 000190 */ 		if (arguments.length) {
/* 000190 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000190 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000190 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000190 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000190 */ 					switch (__attrib0__) {
/* 000190 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000190 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000190 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000190 */ 					}
/* 000190 */ 				}
/* 000190 */ 			}
/* 000190 */ 		}
/* 000190 */ 		else {
/* 000190 */ 		}
/* 000193 */ 		return __add__ (__add__ ('<p>', (function () {
/* 000193 */ 			var __accu0__ = self;
/* 000193 */ 			return __call__ (__accu0__.render_inline_content, __accu0__, nodelist, render_context);
/* 000193 */ 		}) ()), '</p>');
/* 000193 */ 	});},
/* 000197 */ 	get render_inline_content () {return __get__ (this, function (self, nodelist, render_context) {
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
/* 000198 */ 		return (function () {
/* 000198 */ 			var __accu0__ = self;
/* 000198 */ 			return __call__ (__accu0__.render_join, __accu0__, (function () {
/* 000198 */ 				var __accu1__ = [];
/* 000199 */ 				var __iterable0__ = nodelist;
/* 000199 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000199 */ 					var n = __getitem__ (__iterable0__, __index0__);
/* 000199 */ 					(function () {
/* 000199 */ 						var __accu2__ = __accu1__;
/* 000199 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000199 */ 							var __accu3__ = self;
/* 000199 */ 							return __call__ (__accu3__.render_node, __accu3__, n, render_context);
/* 000199 */ 						}) ());
/* 000199 */ 					}) ();
/* 000199 */ 				}
/* 000199 */ 				return __accu1__;
/* 000199 */ 			}) (), render_context);
/* 000199 */ 		}) ();
/* 000199 */ 	});},
/* 000203 */ 	get render_join () {return __get__ (this, function (self, content_list, render_context) {
/* 000203 */ 		if (arguments.length) {
/* 000203 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000203 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000203 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000203 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000203 */ 					switch (__attrib0__) {
/* 000203 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000203 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000203 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000203 */ 					}
/* 000203 */ 				}
/* 000203 */ 			}
/* 000203 */ 		}
/* 000203 */ 		else {
/* 000203 */ 		}
/* 000209 */ 		return (function () {
/* 000209 */ 			var __accu0__ = '';
/* 000209 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000209 */ 				var __accu1__ = [];
/* 000209 */ 				var __iterable0__ = content_list;
/* 000209 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000209 */ 					var s = __getitem__ (__iterable0__, __index0__);
/* 000209 */ 					(function () {
/* 000209 */ 						var __accu2__ = __accu1__;
/* 000209 */ 						return __call__ (__accu2__.append, __accu2__, __call__ (str, null, s));
/* 000209 */ 					}) ();
/* 000209 */ 				}
/* 000209 */ 				return __accu1__;
/* 000209 */ 			}) ());
/* 000209 */ 		}) ();
/* 000209 */ 	});},
/* 000211 */ 	get render_join_blocks () {return __get__ (this, function (self, content_list, render_context) {
/* 000211 */ 		if (arguments.length) {
/* 000211 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000211 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000211 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000211 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000211 */ 					switch (__attrib0__) {
/* 000211 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000211 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000211 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000211 */ 					}
/* 000211 */ 				}
/* 000211 */ 			}
/* 000211 */ 		}
/* 000211 */ 		else {
/* 000211 */ 		}
/* 000219 */ 		return (function () {
/* 000219 */ 			var __accu0__ = self.html_blocks_joiner;
/* 000219 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000219 */ 				var __accu1__ = [];
/* 000220 */ 				var __iterable0__ = content_list;
/* 000220 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000220 */ 					var c = __getitem__ (__iterable0__, __index0__);
/* 000220 */ 					if (__t__ (__t__ (c !== null) && __call__ (len, null, c))) {
/* 000220 */ 						(function () {
/* 000220 */ 							var __accu2__ = __accu1__;
/* 000220 */ 							return __call__ (__accu2__.append, __accu2__, c);
/* 000220 */ 						}) ();
/* 000220 */ 					}
/* 000220 */ 				}
/* 000220 */ 				return __accu1__;
/* 000220 */ 			}) ());
/* 000220 */ 		}) ();
/* 000220 */ 	});},
/* 000226 */ 	get render_value () {return __get__ (this, function (self, value, render_context) {
/* 000226 */ 		if (arguments.length) {
/* 000226 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000226 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000226 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000226 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000226 */ 					switch (__attrib0__) {
/* 000226 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000226 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000226 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000226 */ 					}
/* 000226 */ 				}
/* 000226 */ 			}
/* 000226 */ 		}
/* 000226 */ 		else {
/* 000226 */ 		}
/* 000227 */ 		return (function () {
/* 000227 */ 			var __accu0__ = self;
/* 000227 */ 			return __call__ (__accu0__.htmlescape, __accu0__, value);
/* 000227 */ 		}) ();
/* 000227 */ 	});},
/* 000229 */ 	get render_empty_error_placeholder () {return __get__ (this, function (self, debug_str, render_context) {
/* 000229 */ 		if (arguments.length) {
/* 000229 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000229 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000229 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000229 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000229 */ 					switch (__attrib0__) {
/* 000229 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000229 */ 						case 'debug_str': var debug_str = __allkwargs0__ [__attrib0__]; break;
/* 000229 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000229 */ 					}
/* 000229 */ 				}
/* 000229 */ 			}
/* 000229 */ 		}
/* 000229 */ 		else {
/* 000229 */ 		}
/* 000230 */ 		var debug_str_safe = (function () {
/* 000230 */ 			var __accu0__ = debug_str;
/* 000230 */ 			return __call__ (__accu0__.py_replace, __accu0__, '--', '- - ');
/* 000230 */ 		}) ();
/* 000231 */ 		return '<span class="empty-error-placeholder"><!-- {} -->(?)</span>'.format (debug_str_safe);
/* 000231 */ 	});},
/* 000233 */ 	get render_nothing () {return __get__ (this, function (self, render_context, annotations) {
/* 000233 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000233 */ 			var annotations = null;
/* 000233 */ 		};
/* 000233 */ 		if (arguments.length) {
/* 000233 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000233 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000233 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000233 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000233 */ 					switch (__attrib0__) {
/* 000233 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000233 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000233 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000233 */ 					}
/* 000233 */ 				}
/* 000233 */ 			}
/* 000233 */ 		}
/* 000233 */ 		else {
/* 000233 */ 		}
/* 000234 */ 		if (__t__ (!__t__ ((self.render_nothing_as_comment_with_annotations)))) {
/* 000235 */ 			return '';
/* 000235 */ 		}
/* 000236 */ 		if (__t__ (!__t__ ((annotations)))) {
/* 000237 */ 			var annotations = [];
/* 000237 */ 		}
/* 000238 */ 		var annotations = (function () {
/* 000238 */ 			var __accu0__ = [];
/* 000238 */ 			var __iterable0__ = annotations;
/* 000238 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000238 */ 				var a = __getitem__ (__iterable0__, __index0__);
/* 000238 */ 				(function () {
/* 000238 */ 					var __accu1__ = __accu0__;
/* 000238 */ 					return __call__ (__accu1__.append, __accu1__, (function () {
/* 000238 */ 						var __accu2__ = a;
/* 000238 */ 						return __call__ (__accu2__.py_replace, __accu2__, '--', '- - ');
/* 000238 */ 					}) ());
/* 000238 */ 				}) ();
/* 000238 */ 			}
/* 000238 */ 			return __accu0__;
/* 000238 */ 		}) ();
/* 000239 */ 		return (function () {
/* 000239 */ 			var __accu0__ = '<!-- {} -->';
/* 000239 */ 			return __call__ (__accu0__.format, __accu0__, (function () {
/* 000239 */ 				var __accu1__ = ' ';
/* 000239 */ 				return __call__ (__accu1__.join, __accu1__, annotations);
/* 000239 */ 			}) ());
/* 000239 */ 		}) ();
/* 000239 */ 	});},
/* 000241 */ 	verbatim_highlight_spaces: false,
/* 000242 */ 	verbatim_protect_backslashes: true,
/* 000244 */ 	get render_verbatim () {return __get__ (this, function (self, value, render_context) {
/* 000244 */ 		var is_block_level = false;
/* 000244 */ 		var annotations = null;
/* 000244 */ 		var target_id = null;
/* 000244 */ 		if (arguments.length) {
/* 000244 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000244 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000244 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000244 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000244 */ 					switch (__attrib0__) {
/* 000244 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000244 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000244 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000244 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000244 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000244 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000244 */ 					}
/* 000244 */ 				}
/* 000244 */ 			}
/* 000244 */ 		}
/* 000244 */ 		else {
/* 000244 */ 		}
/* 000246 */ 		var attrs = dict ({});
/* 000247 */ 		if (__t__ (target_id !== null)) {
/* 000248 */ 			__setitem__ (attrs, 'id', target_id);
/* 000248 */ 		}
/* 000249 */ 		var escaped = (function () {
/* 000249 */ 			var __accu0__ = self;
/* 000249 */ 			return __call__ (__accu0__.htmlescape, __accu0__, value);
/* 000249 */ 		}) ();
/* 000250 */ 		if (__t__ (self.verbatim_protect_backslashes)) {
/* 000252 */ 			var escaped = (function () {
/* 000252 */ 				var __accu0__ = escaped;
/* 000252 */ 				return __call__ (__accu0__.py_replace, __accu0__, '\\', '<span>\\</span>');
/* 000252 */ 			}) ();
/* 000252 */ 		}
/* 000253 */ 		if (__t__ (self.verbatim_highlight_spaces)) {
/* 000254 */ 			var escaped = (function () {
/* 000254 */ 				var __accu0__ = escaped;
/* 000254 */ 				return __call__ (__accu0__.py_replace, __accu0__, ' ', '<span class="verbatimspace">&nbsp;</span>');
/* 000254 */ 			}) ();
/* 000254 */ 		}
/* 000257 */ 		var tag = 'span';
/* 000258 */ 		var __iterable0__ = annotations;
/* 000258 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000258 */ 			var annotation = __getitem__ (__iterable0__, __index0__);
/* 000259 */ 			if (__t__ (__in__ (annotation, tuple (['verbatimcode-environment'])))) {
/* 000261 */ 				var tag = 'div';
/* 000261 */ 			}
/* 000261 */ 		}
/* 000262 */ 		return (function () {
/* 000262 */ 			var __accu0__ = self;
/* 000262 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, tag, escaped, __kwargtrans__ ({class_names: (__t__ (annotations) ? annotations : ['verbatimtext']), attrs: attrs}));
/* 000262 */ 		}) ();
/* 000262 */ 	});},
/* 000269 */ 	get render_math_content () {return __get__ (this, function (self, delimiters, nodelist, render_context, displaytype, environmentname, target_id) {
/* 000269 */ 		if (typeof environmentname == 'undefined' || (environmentname != null && environmentname.hasOwnProperty ("__kwargtrans__"))) {;
/* 000269 */ 			var environmentname = null;
/* 000269 */ 		};
/* 000269 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000269 */ 			var target_id = null;
/* 000269 */ 		};
/* 000269 */ 		if (arguments.length) {
/* 000269 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000269 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000269 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000269 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000269 */ 					switch (__attrib0__) {
/* 000269 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000269 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000269 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000269 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000269 */ 						case 'displaytype': var displaytype = __allkwargs0__ [__attrib0__]; break;
/* 000269 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000269 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000269 */ 					}
/* 000269 */ 				}
/* 000269 */ 			}
/* 000269 */ 		}
/* 000269 */ 		else {
/* 000269 */ 		}
/* 000277 */ 		if (__t__ (!__t__ ((self.use_mathjax)))) {
/* 000278 */ 			(function () {
/* 000278 */ 				var __accu0__ = logger;
/* 000278 */ 				return __call__ (__accu0__.warning, __accu0__, 'called HtmlFragmentRenderer.render_math_content() but self.use_mathjax is not set. Your math will probably not render correctly.');
/* 000278 */ 			}) ();
/* 000278 */ 		}
/* 000284 */ 		var class_names = ['{}-math'.format (displaytype)];
/* 000285 */ 		if (__t__ (environmentname !== null)) {
/* 000286 */ 			(function () {
/* 000286 */ 				var __accu0__ = class_names;
/* 000286 */ 				return __call__ (__accu0__.append, __accu0__, 'env-{}'.format ((function () {
/* 000286 */ 					var __accu1__ = environmentname;
/* 000286 */ 					return __call__ (__accu1__.py_replace, __accu1__, '*', '-star');
/* 000286 */ 				}) ()));
/* 000286 */ 			}) ();
/* 000286 */ 		}
/* 000289 */ 		var content_html = (function () {
/* 000289 */ 			var __accu0__ = self;
/* 000289 */ 			return __call__ (__accu0__.htmlescape, __accu0__, __add__ (__add__ (__getitem__ (delimiters, 0), (function () {
/* 000289 */ 				var __accu1__ = nodelist;
/* 000289 */ 				return __call__ (__accu1__.latex_verbatim, __accu1__);
/* 000289 */ 			}) ()), __getitem__ (delimiters, 1)));
/* 000289 */ 		}) ();
/* 000292 */ 		var attrs = dict ({});
/* 000293 */ 		if (__t__ (target_id !== null)) {
/* 000294 */ 			__setitem__ (attrs, 'id', target_id);
/* 000294 */ 		}
/* 000296 */ 		if (__t__ (__eq__ (displaytype, 'display'))) {
/* 000298 */ 			return (function () {
/* 000298 */ 				var __accu0__ = self;
/* 000298 */ 				return __call__ (__accu0__.wrap_in_tag, __accu0__, 'span', content_html, __kwargtrans__ ({class_names: class_names, attrs: attrs}));
/* 000298 */ 			}) ();
/* 000298 */ 		}
/* 000305 */ 		return (function () {
/* 000305 */ 			var __accu0__ = self;
/* 000305 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'span', content_html, __kwargtrans__ ({class_names: class_names, attrs: attrs}));
/* 000305 */ 		}) ();
/* 000305 */ 	});},
/* 000312 */ 	get render_text_format () {return __get__ (this, function (self, text_formats, nodelist, render_context) {
/* 000312 */ 		if (arguments.length) {
/* 000312 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000312 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000312 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000312 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000312 */ 					switch (__attrib0__) {
/* 000312 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000312 */ 						case 'text_formats': var text_formats = __allkwargs0__ [__attrib0__]; break;
/* 000312 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000312 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000312 */ 					}
/* 000312 */ 				}
/* 000312 */ 			}
/* 000312 */ 		}
/* 000312 */ 		else {
/* 000312 */ 		}
/* 000316 */ 		var content = (function () {
/* 000316 */ 			var __accu0__ = self;
/* 000316 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, nodelist, render_context, __kwargtrans__ ({is_block_level: false}));
/* 000316 */ 		}) ();
/* 000322 */ 		return (function () {
/* 000322 */ 			var __accu0__ = self;
/* 000322 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'span', content, __kwargtrans__ ({class_names: text_formats}));
/* 000322 */ 		}) ();
/* 000322 */ 	});},
/* 000328 */ 	get render_semantic_span () {return __get__ (this, function (self, content, role, render_context) {
/* 000328 */ 		var annotations = null;
/* 000328 */ 		var target_id = null;
/* 000328 */ 		if (arguments.length) {
/* 000328 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000328 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000328 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000328 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000328 */ 					switch (__attrib0__) {
/* 000328 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000328 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000328 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000328 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000328 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000328 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000328 */ 					}
/* 000328 */ 				}
/* 000328 */ 			}
/* 000328 */ 		}
/* 000328 */ 		else {
/* 000328 */ 		}
/* 000330 */ 		var attrs = dict ({});
/* 000331 */ 		if (__t__ (target_id !== null)) {
/* 000332 */ 			__setitem__ (attrs, 'id', target_id);
/* 000332 */ 		}
/* 000334 */ 		var annotations = __call__ (list, null, (__t__ (annotations !== null) ? annotations : []));
/* 000335 */ 		if (__t__ (__in__ (role, annotations))) {
/* 000336 */ 			(function () {
/* 000336 */ 				var __accu0__ = annotations;
/* 000336 */ 				return __call__ (__accu0__.remove, __accu0__, role);
/* 000336 */ 			}) ();
/* 000336 */ 		}
/* 000338 */ 		return (function () {
/* 000338 */ 			var __accu0__ = self;
/* 000338 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'span', content, __kwargtrans__ ({attrs: attrs, class_names: __add__ ([role], annotations)}));
/* 000338 */ 		}) ();
/* 000338 */ 	});},
/* 000346 */ 	get render_semantic_block () {return __get__ (this, function (self, content, role, render_context) {
/* 000346 */ 		var annotations = null;
/* 000346 */ 		var target_id = null;
/* 000346 */ 		if (arguments.length) {
/* 000346 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000346 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000346 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000346 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000346 */ 					switch (__attrib0__) {
/* 000346 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000346 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000346 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000346 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000346 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000346 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000346 */ 					}
/* 000346 */ 				}
/* 000346 */ 			}
/* 000346 */ 		}
/* 000346 */ 		else {
/* 000346 */ 		}
/* 000348 */ 		var attrs = dict ({});
/* 000349 */ 		if (__t__ (target_id !== null)) {
/* 000350 */ 			__setitem__ (attrs, 'id', target_id);
/* 000350 */ 		}
/* 000352 */ 		var annotations = __call__ (list, null, (__t__ (annotations !== null) ? annotations : []));
/* 000353 */ 		if (__t__ (__in__ (role, annotations))) {
/* 000354 */ 			(function () {
/* 000354 */ 				var __accu0__ = annotations;
/* 000354 */ 				return __call__ (__accu0__.remove, __accu0__, role);
/* 000354 */ 			}) ();
/* 000354 */ 		}
/* 000356 */ 		if (__t__ (__in__ (role, tuple (['section', 'main', 'article'])))) {
/* 000357 */ 			return (function () {
/* 000357 */ 				var __accu0__ = self;
/* 000357 */ 				return __call__ (__accu0__.wrap_in_tag, __accu0__, role, content, __kwargtrans__ ({attrs: attrs, class_names: annotations}));
/* 000357 */ 			}) ();
/* 000357 */ 		}
/* 000363 */ 		return (function () {
/* 000363 */ 			var __accu0__ = self;
/* 000363 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'div', content, __kwargtrans__ ({attrs: attrs, class_names: __add__ ([role], annotations)}));
/* 000363 */ 		}) ();
/* 000363 */ 	});},
/* 000371 */ 	get render_enumeration () {return __get__ (this, function (self, iter_items_nodelists, counter_formatter, render_context) {
/* 000371 */ 		var target_id_generator = null;
/* 000371 */ 		var annotations = null;
/* 000371 */ 		var nested_depth = null;
/* 000371 */ 		if (arguments.length) {
/* 000371 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000371 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000371 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000371 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000371 */ 					switch (__attrib0__) {
/* 000371 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000371 */ 						case 'iter_items_nodelists': var iter_items_nodelists = __allkwargs0__ [__attrib0__]; break;
/* 000371 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000371 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000371 */ 						case 'target_id_generator': var target_id_generator = __allkwargs0__ [__attrib0__]; break;
/* 000371 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000371 */ 						case 'nested_depth': var nested_depth = __allkwargs0__ [__attrib0__]; break;
/* 000371 */ 					}
/* 000371 */ 				}
/* 000371 */ 			}
/* 000371 */ 		}
/* 000371 */ 		else {
/* 000371 */ 		}
/* 000383 */ 		var s_items = [];
/* 000385 */ 		var __iterable0__ = __call__ (enumerate, null, iter_items_nodelists);
/* 000385 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000385 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000385 */ 			var j = __left0__ [0];
/* 000385 */ 			var item_content_nodelist = __left0__ [1];
/* 000387 */ 			var use_block_level = true;
/* 000388 */ 			if (__t__ (item_content_nodelist.parsing_state.is_block_level === false)) {
/* 000391 */ 				var use_block_level = false;
/* 000391 */ 			}
/* 000393 */ 			// pass;
/* 000397 */ 			// pass;
/* 000401 */ 			var item_content = (function () {
/* 000401 */ 				var __accu0__ = self;
/* 000401 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, item_content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: use_block_level}));
/* 000401 */ 			}) ();
/* 000407 */ 			var enumno = __add__ (1, j);
/* 000409 */ 			var tag_nodelist = __call__ (counter_formatter, null, enumno);
/* 000410 */ 			if (__t__ (__call__ (isinstance, null, tag_nodelist, str))) {
/* 000411 */ 				var tag_content = (function () {
/* 000411 */ 					var __accu0__ = self;
/* 000411 */ 					return __call__ (__accu0__.render_value, __accu0__, tag_nodelist, render_context);
/* 000411 */ 				}) ();
/* 000411 */ 			}
/* 000412 */ 			else {
/* 000413 */ 				var tag_content = (function () {
/* 000413 */ 					var __accu0__ = self;
/* 000413 */ 					return __call__ (__accu0__.render_nodelist, __accu0__, tag_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000413 */ 				}) ();
/* 000413 */ 			}
/* 000419 */ 			var dtattrs = dict ({});
/* 000420 */ 			if (__t__ (target_id_generator !== null)) {
/* 000421 */ 				__setitem__ (dtattrs, 'id', __call__ (target_id_generator, null, enumno));
/* 000421 */ 			}
/* 000423 */ 			(function () {
/* 000423 */ 				var __accu0__ = s_items;
/* 000424 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000424 */ 					var __accu1__ = self;
/* 000425 */ 					return __call__ (__accu1__.render_join, __accu1__, [(function () {
/* 000425 */ 						var __accu2__ = self;
/* 000425 */ 						return __call__ (__accu2__.wrap_in_tag, __accu2__, 'dt', tag_content, __kwargtrans__ ({attrs: dtattrs}));
/* 000430 */ 					}) (), (function () {
/* 000430 */ 						var __accu2__ = self;
/* 000430 */ 						return __call__ (__accu2__.wrap_in_tag, __accu2__, 'dd', item_content);
/* 000430 */ 					}) ()], render_context);
/* 000430 */ 				}) ());
/* 000430 */ 			}) ();
/* 000430 */ 		}
/* 000437 */ 		return (function () {
/* 000437 */ 			var __accu0__ = self;
/* 000439 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'dl', (function () {
/* 000439 */ 				var __accu1__ = self;
/* 000439 */ 				return __call__ (__accu1__.render_join, __accu1__, s_items, render_context);
/* 000439 */ 			}) (), __kwargtrans__ ({class_names: __add__ (['enumeration'], (__t__ (annotations) ? annotations : []))}));
/* 000439 */ 		}) ();
/* 000439 */ 	});},
/* 000444 */ 	get render_heading () {return __get__ (this, function (self, heading_nodelist, render_context) {
/* 000444 */ 		var heading_level = 1;
/* 000444 */ 		var target_id = null;
/* 000444 */ 		var inline_heading = false;
/* 000444 */ 		var annotations = null;
/* 000444 */ 		if (arguments.length) {
/* 000444 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000444 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000444 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000444 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000444 */ 					switch (__attrib0__) {
/* 000444 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000444 */ 						case 'heading_nodelist': var heading_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000444 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000444 */ 						case 'heading_level': var heading_level = __allkwargs0__ [__attrib0__]; break;
/* 000444 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000444 */ 						case 'inline_heading': var inline_heading = __allkwargs0__ [__attrib0__]; break;
/* 000444 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000444 */ 					}
/* 000444 */ 				}
/* 000444 */ 			}
/* 000444 */ 		}
/* 000444 */ 		else {
/* 000444 */ 		}
/* 000448 */ 		if (__t__ (!__in__ (heading_level, self.heading_tags_by_level))) {
/* 000450 */ 			var __except0__ = __call__ (ValueError, null, 'Bad heading_level={}, expected one of {}'.format (heading_level, __call__ (list, null, (function () {
/* 000450 */ 				var __accu0__ = self.heading_tags_by_level;
/* 000450 */ 				return __call__ (__accu0__.py_keys, __accu0__);
/* 000450 */ 			}) ())));
/* 000450 */ 			__except0__.__cause__ = null;
/* 000450 */ 			throw __except0__;
/* 000450 */ 		}
/* 000452 */ 		var annot = (__t__ (annotations) ? __call__ (list, null, annotations) : []);
/* 000453 */ 		(function () {
/* 000453 */ 			var __accu0__ = annot;
/* 000453 */ 			return __call__ (__accu0__.append, __accu0__, 'heading-level-{}'.format (heading_level));
/* 000453 */ 		}) ();
/* 000454 */ 		if (__t__ (inline_heading)) {
/* 000455 */ 			(function () {
/* 000455 */ 				var __accu0__ = annot;
/* 000455 */ 				return __call__ (__accu0__.append, __accu0__, 'heading-inline');
/* 000455 */ 			}) ();
/* 000455 */ 		}
/* 000457 */ 		var attrs = dict ({});
/* 000458 */ 		if (__t__ (target_id !== null)) {
/* 000459 */ 			__setitem__ (attrs, 'id', target_id);
/* 000459 */ 		}
/* 000461 */ 		var content = (function () {
/* 000461 */ 			var __accu0__ = self;
/* 000463 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, __getitem__ (self.heading_tags_by_level, heading_level), (function () {
/* 000463 */ 				var __accu1__ = self;
/* 000463 */ 				return __call__ (__accu1__.render_inline_content, __accu1__, heading_nodelist, render_context);
/* 000463 */ 			}) (), __kwargtrans__ ({class_names: annot, attrs: attrs}));
/* 000463 */ 		}) ();
/* 000467 */ 		if (__t__ (__t__ (inline_heading) && self.inline_heading_add_space)) {
/* 000468 */ 			var content = __call__ (__iadd__, null, content, ' ');
/* 000468 */ 		}
/* 000469 */ 		// pass;
/* 000473 */ 		return content;
/* 000473 */ 	});},
/* 000475 */ 	get render_link () {return __get__ (this, function (self, ref_type, href, display_nodelist, render_context, annotations) {
/* 000475 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000475 */ 			var annotations = null;
/* 000475 */ 		};
/* 000475 */ 		if (arguments.length) {
/* 000475 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000475 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000475 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000475 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000475 */ 					switch (__attrib0__) {
/* 000475 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000475 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000475 */ 						case 'href': var href = __allkwargs0__ [__attrib0__]; break;
/* 000475 */ 						case 'display_nodelist': var display_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000475 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000475 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000475 */ 					}
/* 000475 */ 				}
/* 000475 */ 			}
/* 000475 */ 		}
/* 000475 */ 		else {
/* 000475 */ 		}
/* 000476 */ 		var display_content = (function () {
/* 000476 */ 			var __accu0__ = self;
/* 000476 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, display_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000476 */ 		}) ();
/* 000481 */ 		return (function () {
/* 000481 */ 			var __accu0__ = self;
/* 000481 */ 			return __call__ (__accu0__.wrap_in_link, __accu0__, display_content, href, __kwargtrans__ ({class_names: __add__ (['href-{}'.format (ref_type)], (__t__ (annotations) ? annotations : []))}));
/* 000481 */ 		}) ();
/* 000481 */ 	});},
/* 000488 */ 	get render_delayed_marker () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000488 */ 		if (arguments.length) {
/* 000488 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000488 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000488 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000488 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000488 */ 					switch (__attrib0__) {
/* 000488 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000488 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000488 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000488 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000488 */ 					}
/* 000488 */ 				}
/* 000488 */ 			}
/* 000488 */ 		}
/* 000488 */ 		else {
/* 000488 */ 		}
/* 000489 */ 		return '<FLM:DLYD:{}/>'.format (delayed_key);
/* 000489 */ 	});},
/* 000491 */ 	get render_delayed_dummy_placeholder () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000491 */ 		if (arguments.length) {
/* 000491 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000491 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000491 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000491 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000491 */ 					switch (__attrib0__) {
/* 000491 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000491 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000491 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000491 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000491 */ 					}
/* 000491 */ 				}
/* 000491 */ 			}
/* 000491 */ 		}
/* 000491 */ 		else {
/* 000491 */ 		}
/* 000492 */ 		return '<!-- delayed:{} -->'.format (delayed_key);
/* 000492 */ 	});},
/* 000494 */ 	get replace_delayed_markers_with_final_values () {return __get__ (this, function (self, content, delayed_values) {
/* 000494 */ 		if (arguments.length) {
/* 000494 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000494 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000494 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000494 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000494 */ 					switch (__attrib0__) {
/* 000494 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000494 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000494 */ 						case 'delayed_values': var delayed_values = __allkwargs0__ [__attrib0__]; break;
/* 000494 */ 					}
/* 000494 */ 				}
/* 000494 */ 			}
/* 000494 */ 		}
/* 000494 */ 		else {
/* 000494 */ 		}
/* 000495 */ 		return (function () {
/* 000495 */ 			var __accu0__ = _rx_delayed_markers;
/* 000495 */ 			return __call__ (__accu0__.sub, __accu0__, (function __lambda__ (m) {
/* 000495 */ 				if (arguments.length) {
/* 000495 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000495 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000495 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000495 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000495 */ 							switch (__attrib0__) {
/* 000495 */ 								case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000495 */ 							}
/* 000495 */ 						}
/* 000495 */ 					}
/* 000495 */ 				}
/* 000495 */ 				else {
/* 000495 */ 				}
/* 000496 */ 				return __getitem__ (delayed_values, __call__ (int, null, (function () {
/* 000496 */ 					var __accu1__ = m;
/* 000496 */ 					return __call__ (__accu1__.group, __accu1__, 'key');
/* 000496 */ 				}) ()));
/* 000496 */ 			}), content);
/* 000496 */ 		}) ();
/* 000496 */ 	});},
/* 000503 */ 	get render_float () {return __get__ (this, function (self, float_instance, render_context) {
/* 000503 */ 		if (arguments.length) {
/* 000503 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000503 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000503 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000503 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000503 */ 					switch (__attrib0__) {
/* 000503 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000503 */ 						case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000503 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000503 */ 					}
/* 000503 */ 				}
/* 000503 */ 			}
/* 000503 */ 		}
/* 000503 */ 		else {
/* 000503 */ 		}
/* 000506 */ 		var figattrs = dict ({});
/* 000508 */ 		if (__t__ (float_instance.target_id !== null)) {
/* 000509 */ 			__setitem__ (figattrs, 'id', float_instance.target_id);
/* 000509 */ 		}
/* 000511 */ 		var full_figcaption_rendered_list = [];
/* 000512 */ 		if (__t__ (float_instance.number !== null)) {
/* 000514 */ 			(function () {
/* 000514 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000515 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000515 */ 					var __accu1__ = self;
/* 000517 */ 					return __call__ (__accu1__.wrap_in_tag, __accu1__, 'span', (function () {
/* 000517 */ 						var __accu2__ = self;
/* 000518 */ 						return __call__ (__accu2__.render_join, __accu2__, [(function () {
/* 000518 */ 							var __accu3__ = self;
/* 000518 */ 							return __call__ (__accu3__.render_value, __accu3__, float_instance.float_type_info.float_caption_name, render_context);
/* 000523 */ 						}) (), '&nbsp;', (function () {
/* 000523 */ 							var __accu3__ = self;
/* 000523 */ 							return __call__ (__accu3__.render_nodelist, __accu3__, float_instance.formatted_counter_value_flm.nodes, __kwargtrans__ ({render_context: render_context}));
/* 000523 */ 						}) ()], render_context);
/* 000523 */ 					}) (), __kwargtrans__ ({class_names: ['float-number']}));
/* 000523 */ 				}) ());
/* 000523 */ 			}) ();
/* 000523 */ 		}
/* 000531 */ 		else if (__t__ (float_instance.caption_nodelist)) {
/* 000534 */ 			(function () {
/* 000534 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000535 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000535 */ 					var __accu1__ = self;
/* 000537 */ 					return __call__ (__accu1__.wrap_in_tag, __accu1__, 'span', (function () {
/* 000537 */ 						var __accu2__ = self;
/* 000538 */ 						return __call__ (__accu2__.render_join, __accu2__, [(function () {
/* 000538 */ 							var __accu3__ = self;
/* 000538 */ 							return __call__ (__accu3__.render_value, __accu3__, float_instance.float_type_info.float_caption_name, render_context);
/* 000538 */ 						}) ()], render_context);
/* 000538 */ 					}) (), __kwargtrans__ ({class_names: ['float-no-number']}));
/* 000538 */ 				}) ());
/* 000538 */ 			}) ();
/* 000538 */ 		}
/* 000544 */ 		else {
/* 000548 */ 			// pass;
/* 000548 */ 		}
/* 000550 */ 		if (__t__ (float_instance.caption_nodelist)) {
/* 000554 */ 			(function () {
/* 000554 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000554 */ 				return __call__ (__accu0__.append, __accu0__, ': ');
/* 000554 */ 			}) ();
/* 000557 */ 			(function () {
/* 000557 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000558 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000558 */ 					var __accu1__ = self;
/* 000558 */ 					return __call__ (__accu1__.render_nodelist, __accu1__, float_instance.caption_nodelist, __kwargtrans__ ({render_context: render_context}));
/* 000558 */ 				}) ());
/* 000558 */ 			}) ();
/* 000558 */ 		}
/* 000564 */ 		var rendered_float_caption = null;
/* 000565 */ 		if (__t__ (full_figcaption_rendered_list)) {
/* 000566 */ 			var rendered_float_caption = (function () {
/* 000566 */ 				var __accu0__ = self;
/* 000568 */ 				return __call__ (__accu0__.wrap_in_tag, __accu0__, 'figcaption', (function () {
/* 000568 */ 					var __accu1__ = self;
/* 000570 */ 					return __call__ (__accu1__.wrap_in_tag, __accu1__, 'span', (function () {
/* 000570 */ 						var __accu2__ = self;
/* 000570 */ 						return __call__ (__accu2__.render_join, __accu2__, full_figcaption_rendered_list, render_context);
/* 000570 */ 					}) ());
/* 000570 */ 				}) (), __kwargtrans__ ({class_names: ['float-caption-content']}));
/* 000570 */ 			}) ();
/* 000570 */ 		}
/* 000575 */ 		var float_content_block_content = (function () {
/* 000575 */ 			var __accu0__ = self;
/* 000575 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, float_instance.content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: true}));
/* 000575 */ 		}) ();
/* 000580 */ 		var float_content_block = (function () {
/* 000580 */ 			var __accu0__ = self;
/* 000580 */ 			return __call__ (__accu0__.render_semantic_block, __accu0__, float_content_block_content, 'float-contents', __kwargtrans__ ({render_context: render_context}));
/* 000580 */ 		}) ();
/* 000586 */ 		if (__t__ (rendered_float_caption !== null)) {
/* 000587 */ 			var float_content_with_caption = (function () {
/* 000587 */ 				var __accu0__ = self;
/* 000587 */ 				return __call__ (__accu0__.render_join_blocks, __accu0__, [float_content_block, rendered_float_caption], render_context);
/* 000587 */ 			}) ();
/* 000587 */ 		}
/* 000591 */ 		else {
/* 000592 */ 			var float_content_with_caption = float_content_block;
/* 000592 */ 		}
/* 000594 */ 		var full_figure = (function () {
/* 000594 */ 			var __accu0__ = self;
/* 000594 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'figure', float_content_with_caption, __kwargtrans__ ({attrs: figattrs, class_names: ['float', 'float-{}'.format (float_instance.float_type)]}));
/* 000594 */ 		}) ();
/* 000601 */ 		return full_figure;
/* 000601 */ 	});},
/* 000604 */ 	graphics_raster_magnification: 1,
/* 000605 */ 	graphics_vector_magnification: 1,
/* 000607 */ 	get render_graphics_block () {return __get__ (this, function (self, graphics_resource, render_context) {
/* 000607 */ 		if (arguments.length) {
/* 000607 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000607 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000607 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000607 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000607 */ 					switch (__attrib0__) {
/* 000607 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000607 */ 						case 'graphics_resource': var graphics_resource = __allkwargs0__ [__attrib0__]; break;
/* 000607 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000607 */ 					}
/* 000607 */ 				}
/* 000607 */ 			}
/* 000607 */ 		}
/* 000607 */ 		else {
/* 000607 */ 		}
/* 000609 */ 		var imgattrs = dict ({});
/* 000611 */ 		var styparts = [];
/* 000612 */ 		if (__t__ (graphics_resource.physical_dimensions !== null)) {
/* 000614 */ 			var __left0__ = graphics_resource.physical_dimensions;
/* 000614 */ 			var width_pt = __left0__ [0];
/* 000614 */ 			var height_pt = __left0__ [1];
/* 000616 */ 			if (__t__ (__eq__ (graphics_resource.graphics_type, 'raster'))) {
/* 000617 */ 				if (__t__ (width_pt !== null)) {
/* 000618 */ 					var width_pt = __call__ (__imul__, null, width_pt, self.graphics_raster_magnification);
/* 000618 */ 				}
/* 000619 */ 				if (__t__ (height_pt !== null)) {
/* 000620 */ 					var height_pt = __call__ (__imul__, null, height_pt, self.graphics_raster_magnification);
/* 000620 */ 				}
/* 000620 */ 			}
/* 000621 */ 			else if (__t__ (__eq__ (graphics_resource.graphics_type, 'vector'))) {
/* 000622 */ 				if (__t__ (width_pt !== null)) {
/* 000623 */ 					var width_pt = __call__ (__imul__, null, width_pt, self.graphics_vector_magnification);
/* 000623 */ 				}
/* 000624 */ 				if (__t__ (height_pt !== null)) {
/* 000625 */ 					var height_pt = __call__ (__imul__, null, height_pt, self.graphics_vector_magnification);
/* 000625 */ 				}
/* 000625 */ 			}
/* 000627 */ 			if (__t__ (width_pt !== null)) {
/* 000628 */ 				(function () {
/* 000628 */ 					var __accu0__ = styparts;
/* 000628 */ 					return __call__ (__accu0__.append, __accu0__, 'width:{}pt'.format (width_pt));
/* 000628 */ 				}) ();
/* 000628 */ 			}
/* 000629 */ 			if (__t__ (height_pt !== null)) {
/* 000630 */ 				(function () {
/* 000630 */ 					var __accu0__ = styparts;
/* 000630 */ 					return __call__ (__accu0__.append, __accu0__, 'height:{}pt'.format (height_pt));
/* 000630 */ 				}) ();
/* 000630 */ 			}
/* 000630 */ 		}
/* 000632 */ 		if (__t__ (styparts)) {
/* 000633 */ 			__setitem__ (imgattrs, 'style', (function () {
/* 000633 */ 				var __accu0__ = ';';
/* 000633 */ 				return __call__ (__accu0__.join, __accu0__, styparts);
/* 000633 */ 			}) ());
/* 000633 */ 		}
/* 000635 */ 		var src_url = graphics_resource.src_url;
/* 000636 */ 		__setitem__ (imgattrs, 'src', src_url);
/* 000638 */ 		if (__t__ (__t__ (graphics_resource.srcset !== null) && __call__ (len, null, graphics_resource.srcset))) {
/* 000639 */ 			__setitem__ (imgattrs, 'srcset', graphics_resource.srcset);
/* 000639 */ 		}
/* 000642 */ 		return (function () {
/* 000642 */ 			var __accu0__ = self;
/* 000642 */ 			return __call__ (__accu0__.generate_open_tag, __accu0__, 'img', __kwargtrans__ ({attrs: imgattrs}));
/* 000642 */ 		}) ();
/* 000642 */ 	});},
/* 000645 */ 	get render_cells () {return __get__ (this, function (self, cells_model, render_context, target_id) {
/* 000645 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000645 */ 			var target_id = null;
/* 000645 */ 		};
/* 000645 */ 		if (arguments.length) {
/* 000645 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000645 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000645 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000645 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000645 */ 					switch (__attrib0__) {
/* 000645 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000645 */ 						case 'cells_model': var cells_model = __allkwargs0__ [__attrib0__]; break;
/* 000645 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000645 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000645 */ 					}
/* 000645 */ 				}
/* 000645 */ 			}
/* 000645 */ 		}
/* 000645 */ 		else {
/* 000645 */ 		}
/* 000647 */ 		var __left0__ = tuple ([__call__ (len, null, cells_model.grid_data), __call__ (len, null, __getitem__ (cells_model.grid_data, 0))]);
/* 000647 */ 		var tabheight = __left0__ [0];
/* 000647 */ 		var tabwidth = __left0__ [1];
/* 000649 */ 		var data_items = [];
/* 000650 */ 		var row_j = 0;
/* 000651 */ 		while (__t__ (__lt__ (row_j, __call__ (len, null, cells_model.grid_data)))) {
/* 000652 */ 			var row_items = [];
/* 000653 */ 			var col_j = 0;
/* 000654 */ 			while (__t__ (__lt__ (col_j, __call__ (len, null, __getitem__ (cells_model.grid_data, row_j))))) {
/* 000656 */ 				var grid_cell_data = __getitem__ (__getitem__ (cells_model.grid_data, row_j), col_j);
/* 000658 */ 				if (__t__ (__t__ (grid_cell_data === null) || __getitem__ (grid_cell_data, 'cell') === null)) {
/* 000661 */ 					var clsnames = [];
/* 000662 */ 					if (__t__ (__eq__ (row_j, 0))) {
/* 000663 */ 						(function () {
/* 000663 */ 							var __accu0__ = clsnames;
/* 000663 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-top');
/* 000663 */ 						}) ();
/* 000663 */ 					}
/* 000664 */ 					if (__t__ (__eq__ (col_j, 0))) {
/* 000665 */ 						(function () {
/* 000665 */ 							var __accu0__ = clsnames;
/* 000665 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-left');
/* 000665 */ 						}) ();
/* 000665 */ 					}
/* 000666 */ 					if (__t__ (__eq__ (row_j, __sub__ (tabheight, 1)))) {
/* 000667 */ 						(function () {
/* 000667 */ 							var __accu0__ = clsnames;
/* 000667 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-bottom');
/* 000667 */ 						}) ();
/* 000667 */ 					}
/* 000668 */ 					if (__t__ (__eq__ (col_j, __sub__ (tabwidth, 1)))) {
/* 000669 */ 						(function () {
/* 000669 */ 							var __accu0__ = clsnames;
/* 000669 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-right');
/* 000669 */ 						}) ();
/* 000669 */ 					}
/* 000670 */ 					(function () {
/* 000670 */ 						var __accu0__ = row_items;
/* 000670 */ 						return __call__ (__accu0__.append, __accu0__, (function () {
/* 000670 */ 							var __accu1__ = self;
/* 000670 */ 							return __call__ (__accu1__.wrap_in_tag, __accu1__, 'td', '', __kwargtrans__ ({class_names: __add__ (['cell-empty'], clsnames)}));
/* 000670 */ 						}) ());
/* 000670 */ 					}) ();
/* 000675 */ 					var col_j = __call__ (__iadd__, null, col_j, 1);
/* 000675 */ 					continue;
/* 000675 */ 				}
/* 000678 */ 				if (__t__ (__getitem__ (grid_cell_data, 'is_topleft'))) {
/* 000680 */ 					var cell = __getitem__ (grid_cell_data, 'cell');
/* 000681 */ 					var rendered_cell_contents = (function () {
/* 000681 */ 						var __accu0__ = self;
/* 000681 */ 						return __call__ (__accu0__.render_nodelist, __accu0__, cell.content_nodes, __kwargtrans__ ({render_context: render_context}));
/* 000681 */ 					}) ();
/* 000685 */ 					var clsnames = __add__ (['cell'], (function () {
/* 000685 */ 						var __accu0__ = [];
/* 000685 */ 						var __iterable0__ = cell.styles;
/* 000685 */ 						for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000685 */ 							var sty = __getitem__ (__iterable0__, __index0__);
/* 000685 */ 							(function () {
/* 000685 */ 								var __accu1__ = __accu0__;
/* 000685 */ 								return __call__ (__accu1__.append, __accu1__, 'cellstyle-{}'.format (sty));
/* 000685 */ 							}) ();
/* 000685 */ 						}
/* 000685 */ 						return __accu0__;
/* 000685 */ 					}) ());
/* 000686 */ 					if (__t__ (__eq__ (row_j, 0))) {
/* 000687 */ 						(function () {
/* 000687 */ 							var __accu0__ = clsnames;
/* 000687 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-top');
/* 000687 */ 						}) ();
/* 000687 */ 					}
/* 000688 */ 					if (__t__ (__eq__ (col_j, 0))) {
/* 000689 */ 						(function () {
/* 000689 */ 							var __accu0__ = clsnames;
/* 000689 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-left');
/* 000689 */ 						}) ();
/* 000689 */ 					}
/* 000690 */ 					if (__t__ (__eq__ (cell.placement.row_range.end, tabheight))) {
/* 000691 */ 						(function () {
/* 000691 */ 							var __accu0__ = clsnames;
/* 000691 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-bottom');
/* 000691 */ 						}) ();
/* 000691 */ 					}
/* 000692 */ 					if (__t__ (__eq__ (cell.placement.col_range.end, tabwidth))) {
/* 000693 */ 						(function () {
/* 000693 */ 							var __accu0__ = clsnames;
/* 000693 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-right');
/* 000693 */ 						}) ();
/* 000693 */ 					}
/* 000694 */ 					var tagname = 'td';
/* 000695 */ 					if (__t__ (__t__ (__in__ ('H', cell.styles)) || __in__ ('rH', cell.styles))) {
/* 000696 */ 						var tagname = 'th';
/* 000696 */ 					}
/* 000697 */ 					var attrs = dict ({});
/* 000698 */ 					var cplc = cell.placement;
/* 000699 */ 					if (__t__ (__ne__ (cplc.col_range.end, __add__ (cplc.col_range.start, 1)))) {
/* 000702 */ 						__setitem__ (attrs, 'colspan', __call__ (str, null, __sub__ (cplc.col_range.end, cplc.col_range.start)));
/* 000702 */ 					}
/* 000703 */ 					if (__t__ (__ne__ (cplc.row_range.end, __add__ (cplc.row_range.start, 1)))) {
/* 000705 */ 						__setitem__ (attrs, 'rowspan', __call__ (str, null, __sub__ (cplc.row_range.end, cplc.row_range.start)));
/* 000705 */ 					}
/* 000706 */ 					(function () {
/* 000706 */ 						var __accu0__ = row_items;
/* 000707 */ 						return __call__ (__accu0__.append, __accu0__, (function () {
/* 000707 */ 							var __accu1__ = self;
/* 000707 */ 							return __call__ (__accu1__.wrap_in_tag, __accu1__, tagname, rendered_cell_contents, __kwargtrans__ ({attrs: attrs, class_names: clsnames}));
/* 000707 */ 						}) ());
/* 000707 */ 					}) ();
/* 000714 */ 					var col_j = cplc.col_range.end;
/* 000714 */ 					continue;
/* 000714 */ 				}
/* 000719 */ 				var col_j = __call__ (__iadd__, null, col_j, 1);
/* 000719 */ 			}
/* 000721 */ 			(function () {
/* 000721 */ 				var __accu0__ = data_items;
/* 000721 */ 				return __call__ (__accu0__.append, __accu0__, row_items);
/* 000721 */ 			}) ();
/* 000722 */ 			var row_j = __call__ (__iadd__, null, row_j, 1);
/* 000722 */ 		}
/* 000724 */ 		var table_attrs = dict ({});
/* 000725 */ 		if (__t__ (target_id !== null)) {
/* 000726 */ 			__setitem__ (table_attrs, 'id', target_id);
/* 000726 */ 		}
/* 000728 */ 		var s = (function () {
/* 000728 */ 			var __accu0__ = self;
/* 000730 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'table', (function () {
/* 000730 */ 				var __accu1__ = '';
/* 000730 */ 				return __call__ (__accu1__.join, __accu1__, (function () {
/* 000730 */ 					var __accu2__ = [];
/* 000730 */ 					var __iterable0__ = data_items;
/* 000730 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000732 */ 						var row_items = __getitem__ (__iterable0__, __index0__);
/* 000732 */ 						(function () {
/* 000732 */ 							var __accu3__ = __accu2__;
/* 000731 */ 							return __call__ (__accu3__.append, __accu3__, __add__ (__add__ ('<tr>', (function () {
/* 000731 */ 								var __accu4__ = '';
/* 000731 */ 								return __call__ (__accu4__.join, __accu4__, row_items);
/* 000731 */ 							}) ()), '</tr>'));
/* 000731 */ 						}) ();
/* 000731 */ 					}
/* 000731 */ 					return __accu2__;
/* 000731 */ 				}) ());
/* 000731 */ 			}) (), __kwargtrans__ ({attrs: table_attrs, class_names: ['cells']}));
/* 000731 */ 		}) ();
/* 000737 */ 		return s;
/* 000737 */ 	});}
/* 000737 */ });
/* 000743 */ export var _rx_delayed_markers = (function () {
/* 000743 */ 	var __accu0__ = re;
/* 000743 */ 	return __call__ (__accu0__.compile, __accu0__, '<FLM:DLYD:(?P<key>\\d+)\\s*/>');
/* 000743 */ }) ();
/* 000750 */ export var _html_css_global = '\np, ul, ol {\n  margin: 1em 0px;\n}\np:first-child, ul:first-child, ol:first-child {\n  margin-top: 0px;\n}\np:last-child, ul:last-child, ol:last-child {\n  margin-bottom: 0px;\n}\ndd > p, dd > p:first-child, dd > p:last-child {\n  margin: 0.33em 0px;\n}\n\na, a:link, a:hover, a:active, a:visited {\n  color: #3232c8;\n  text-decoration: none;\n}\na:hover {\n  color: #22228a;\n}\n';
/* 000773 */ export var _html_css_content = "\n.emph, .textit {\n  font-style: italic;\n}\n.textbf {\n  font-weight: bold;\n}\n\nh1 {\n  font-size: 1.6rem;\n  line-height: 1.3em;\n  font-weight: bold;\n  margin: 1em 0px;\n}\nh2 {\n  font-size: 1.3rem;\n  line-height: 1.3em;\n  font-weight: bold;\n  margin: 1em 0px;\n}\nh3 {\n  font-size: 1rem;\n  font-weight: bold;\n  margin: 1em 0px;\n}\n\n.heading-level-4 {\n  font-style: italic;\n  display: inline;\n}\n.heading-level-4::after {\n  display: inline-block;\n  margin: 0px .12em;\n  content: '—';\n}\n\n.heading-level-5 {\n  font-style: italic;\n  font-size: .9em;\n  display: inline;\n}\n.heading-level-5::after {\n  display: inline-block;\n  margin-right: .12em;\n  content: '';\n}\n\n.heading-level-6 {\n  font-style: italic;\n  font-size: .8em;\n  display: inline;\n}\n.heading-level-6::after {\n  display: inline-block;\n  margin-right: .06em;\n  content: '';\n}\n\n\n.heading-level-theorem {\n  font-weight: bold;\n  display: inline-block;\n}\n.heading-level-theorem::after {\n  font-weight: bold;\n  display: inline-block;\n  margin: 0px .12em 0px 0px;\n  content: '.';\n}\n\ndiv.theoremlike, div.definitionlike, div.prooflike {\n  margin: 1em 0px;\n}\n\ndiv.prooflike > p > .heading-level-theorem,\ndiv.prooflike > p > .heading-level-theorem::after {\n  font-weight: normal;\n  font-style: italic;\n}\n\n\ndl.enumeration {\n  display: block;\n  margin-left: 2.5em;\n}\ndl.enumeration > dt {\n  float: left;\n  clear: left;\n  display: inline-block;\n  /*margin: 0px; */\n  margin-left: -2.5em;\n  width: 2.0em;\n  min-width: 2.0em;\n  max-width: 2.0em;\n  margin-right: 0.5em;\n  text-align: right;\n}\ndl.enumeration > dd {\n  /*display: inline-block;\n  width: 100%;*/\n  border: 0px;\n  padding: 0px;\n  margin: 0px;\n}\n\nfigure.float {\n  width: 100%;\n  border-width: 1px 0px 1px 0px;\n  border-style: solid none solid none;\n  border-color: rgba(120, 120, 140, 0.15);\n  margin: 0.5rem 0px;\n  padding: 0.5rem 0px;\n}\n\nfigure.float .float-contents {\n  width: 100%;\n  max-width: 100%;\n  overflow-x: auto;\n}\n\nfigure.float .float-contents img {\n  display: block;\n  margin: 0pt auto;\n  padding: 0pt;\n  border: 0pt;\n  margin: 0px auto;\n}\n\nfigure.float figcaption {\n  display: block;\n  margin-top: 0.5em;\n  margin: 0.75em 2em 0px;\n  text-align: center;\n}\n\nfigure.float figcaption > span {\n  display: inline-block;\n  font-style: italic;\n  text-align: left;\n}\n\ntable {\n  margin: 1em 0px 1em 0px;\n  border-collapse: separate;\n  border-spacing: 0px;\n  /*border-top: solid 1pt;\n  border-bottom: solid 1pt;*/\n}\nfigure.float .float-contents table {\n  margin: 0px auto;\n}\ntd {\n  padding: 0.3em 0.5em;\n  border: none 0px;\n}\nth {\n  padding: 0.3em 0.5em;\n  border: none 0px;\n}\n.cellstyle-H {\n  border-bottom: solid .5pt;\n}\n.cellstyle-rH {\n}\n.cellstyle-l {\n  text-align: left;\n}\n.cellstyle-c {\n  text-align: center;\n}\n.cellstyle-r {\n  text-align: right;\n}\n.cellstyle-green {\n  background-color: rgba(69, 255, 69, 0.31); /*rgb(200,255,200);*/\n}\n.cellstyle-blue {\n  background-color: rgba(79, 142, 255, 0.27); /*rgb(200,220,255);*/\n}\n.cellstyle-yellow {\n  background-color: rgba(255, 255, 49, 0.33); /*rgb(255,255,200);*/\n}\n.cellstyle-red {\n  background-color: rgba(255,120,120,0.30);  /*rgb(255,200,200);*/\n}\n.cellstyle-lvert {\n  border-left: solid .5pt;\n}\n.cellstyle-rvert {\n  border-right: solid .5pt;\n}\n\n.celltbledge-top {\n  border-top: solid 1pt;\n}\n.celltbledge-bottom {\n  border-bottom: solid 1pt;\n}\n\n.verbatimcode {\n  font-family: monospace;\n  font-size: 0.9em;\n  background-color: rgba(127,127,127,0.25);\n  border-radius: 2px;\n  padding: 1px 2px;\n  display: inline-block;\n  white-space: pre-wrap;\n}\n.verbatima {\n  font-style: italic;\n}\n.verbatimcode-environment {\n  display: block;\n  margin: 0.75em 0px 1em;\n  white-space: pre;\n}\n\n.defterm {\n  font-style: italic;\n}\n\n.defterm .defterm-term {\n  font-style: italic;\n  font-weight: bold;\n}\n\n.display-math {\n  width: 100%;\n  max-width: 100%;\n  display: block;\n  overflow-x: auto;\n}\n\n.endnotes, .citations {\n  font-size: 0.8em;\n  display: inline-block;\n  vertical-align: 0.3em;\n  margin-top: -0.3em;\n}\n.citation {\n}\n.footnote {\n}\ndl.citation-list > dt, dl.footnote-list > dt {\n  font-size: 0.8em;\n  display: inline-block;\n  vertical-align: 0.3em;\n  margin-top: -0.3em;\n}\n";
/* 001025 */ export var _html_js_mathjax = '\nMathJax = {\n    tex: {\n        inlineMath: [[\'\\\\(\', \'\\\\)\']],\n        displayMath: [[\'\\\\[\', \'\\\\]\']],\n        processEnvironments: true,\n        processRefs: true,\n\n        // equation numbering on\n        tags: \'ams\'\n    },\n    options: {\n        // all MathJax content is marked with CSS classes\n        // skipHtmlTags: \'body\',\n        // processHtmlClass: \'display-math|inline-math\',\n    },\n    startup: {\n        pageReady: function() {\n            // override the default "typeset everything on the page" behavior to\n            // only typeset whatever we have explicitly marked as math\n            return typesetPageMathPromise();\n        }\n    }\n};\nfunction typesetPageMathPromise()\n{\n    var elements = document.querySelectorAll(\'.display-math, .inline-math\');\n    return MathJax.typesetPromise(elements);\n}\n';
/* 001056 */ export var _html_body_end_js_scripts_mathjax = '\n<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>\n<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>\n';
/* 001064 */ export var get_html_css_global = function (html_fragment_renderer) {
/* 001064 */ 	if (arguments.length) {
/* 001064 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001064 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001064 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001064 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001064 */ 				switch (__attrib0__) {
/* 001064 */ 					case 'html_fragment_renderer': var html_fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 001064 */ 				}
/* 001064 */ 			}
/* 001064 */ 		}
/* 001064 */ 	}
/* 001064 */ 	else {
/* 001064 */ 	}
/* 001065 */ 	return _html_css_global;
/* 001065 */ };
/* 001067 */ export var get_html_css_content = function (html_fragment_renderer) {
/* 001067 */ 	if (arguments.length) {
/* 001067 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001067 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001067 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001067 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001067 */ 				switch (__attrib0__) {
/* 001067 */ 					case 'html_fragment_renderer': var html_fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 001067 */ 				}
/* 001067 */ 			}
/* 001067 */ 		}
/* 001067 */ 	}
/* 001067 */ 	else {
/* 001067 */ 	}
/* 001068 */ 	return _html_css_content;
/* 001068 */ };
/* 001070 */ export var get_html_js = function (html_fragment_renderer) {
/* 001070 */ 	if (arguments.length) {
/* 001070 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001070 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001070 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001070 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001070 */ 				switch (__attrib0__) {
/* 001070 */ 					case 'html_fragment_renderer': var html_fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 001070 */ 				}
/* 001070 */ 			}
/* 001070 */ 		}
/* 001070 */ 	}
/* 001070 */ 	else {
/* 001070 */ 	}
/* 001071 */ 	if (__t__ (html_fragment_renderer.use_mathjax)) {
/* 001072 */ 		return _html_js_mathjax;
/* 001072 */ 	}
/* 001073 */ 	return '';
/* 001073 */ };
/* 001075 */ export var get_html_body_end_js_scripts = function (html_fragment_renderer) {
/* 001075 */ 	if (arguments.length) {
/* 001075 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001075 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001075 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001075 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001075 */ 				switch (__attrib0__) {
/* 001075 */ 					case 'html_fragment_renderer': var html_fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 001075 */ 				}
/* 001075 */ 			}
/* 001075 */ 		}
/* 001075 */ 	}
/* 001075 */ 	else {
/* 001075 */ 	}
/* 001076 */ 	if (__t__ (html_fragment_renderer.use_mathjax)) {
/* 001077 */ 		return _html_body_end_js_scripts_mathjax;
/* 001077 */ 	}
/* 001078 */ 	return '';
/* 001078 */ };
/* 001084 */ export var FragmentRendererInformation =  __class__ ('FragmentRendererInformation', [object], {
/* 001084 */ 	__module__: __name__,
/* 001085 */ 	FragmentRendererClass: HtmlFragmentRenderer,
/* 001088 */ 	get get_style_information () {return function (fragment_renderer) {
/* 001088 */ 		if (arguments.length) {
/* 001088 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001088 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001088 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001088 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001088 */ 					switch (__attrib0__) {
/* 001088 */ 						case 'fragment_renderer': var fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 001088 */ 					}
/* 001088 */ 				}
/* 001088 */ 			}
/* 001088 */ 		}
/* 001088 */ 		else {
/* 001088 */ 		}
/* 001093 */ 		return dict ({'css_global': __call__ (get_html_css_global, null, fragment_renderer), 'css_content': __call__ (get_html_css_content, null, fragment_renderer), 'js': __call__ (get_html_js, null, fragment_renderer), 'body_end_js_scripts': __call__ (get_html_body_end_js_scripts, null, fragment_renderer)});
/* 001093 */ 	};},
/* 001096 */ 	format_name: 'html'
/* 001096 */ });
/* 000006 */ 
//# sourceMappingURL=flm.fragmentrenderer.html.map