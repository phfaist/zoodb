/* 000001 */ // Transcrypt'ed from Python, 2023-04-09 00:31:36
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
/* 000079 */ 	aggressively_escape_html_attributes: false,
/* 000097 */ 	render_nothing_as_comment_with_annotations: true,
/* 000100 */ 	use_mathjax: true,
/* 000108 */ 	get htmlescape () {return __get__ (this, function (self, value) {
/* 000108 */ 		if (arguments.length) {
/* 000108 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000108 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000108 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000108 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000108 */ 					switch (__attrib0__) {
/* 000108 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000108 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000108 */ 					}
/* 000108 */ 				}
/* 000108 */ 			}
/* 000108 */ 		}
/* 000108 */ 		else {
/* 000108 */ 		}
/* 000109 */ 		var esc = (function () {
/* 000109 */ 			var __accu0__ = html;
/* 000109 */ 			return __call__ (__accu0__.escape, __accu0__, value);
/* 000109 */ 		}) ();
/* 000111 */ 		var esc = (function () {
/* 000111 */ 			var __accu0__ = (function () {
/* 000111 */ 				var __accu1__ = (function () {
/* 000111 */ 					var __accu2__ = (function () {
/* 000111 */ 						var __accu3__ = (function () {
/* 000111 */ 							var __accu4__ = (function () {
/* 000111 */ 								var __accu5__ = (function () {
/* 000111 */ 									var __accu6__ = esc;
/* 000111 */ 									return __call__ (__accu6__.py_replace, __accu6__, '\xa0', '&nbsp;');
/* 000111 */ 								}) ();
/* 000111 */ 								return __call__ (__accu5__.py_replace, __accu5__, '\u200a', '&hairsp;');
/* 000111 */ 							}) ();
/* 000112 */ 							return __call__ (__accu4__.py_replace, __accu4__, '\u2009', '&thinsp;');
/* 000112 */ 						}) ();
/* 000113 */ 						return __call__ (__accu3__.py_replace, __accu3__, '\u2008', '&puncsp;');
/* 000113 */ 					}) ();
/* 000114 */ 					return __call__ (__accu2__.py_replace, __accu2__, '\u2002', '&ensp;');
/* 000114 */ 				}) ();
/* 000115 */ 				return __call__ (__accu1__.py_replace, __accu1__, '\u2003', '&emsp;');
/* 000115 */ 			}) ();
/* 000116 */ 			return __call__ (__accu0__.py_replace, __accu0__, '\u2007', '&numsp;');
/* 000116 */ 		}) ();
/* 000119 */ 		return esc;
/* 000119 */ 	});},
/* 000121 */ 	get htmlescape_double_quoted_attribute_value () {return __get__ (this, function (self, value) {
/* 000121 */ 		if (arguments.length) {
/* 000121 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000121 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000121 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000121 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000121 */ 					switch (__attrib0__) {
/* 000121 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000121 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000121 */ 					}
/* 000121 */ 				}
/* 000121 */ 			}
/* 000121 */ 		}
/* 000121 */ 		else {
/* 000121 */ 		}
/* 000123 */ 		if (__t__ (self.aggressively_escape_html_attributes)) {
/* 000124 */ 			return (function () {
/* 000124 */ 				var __accu0__ = self;
/* 000124 */ 				return __call__ (__accu0__.htmlescape, __accu0__, value);
/* 000124 */ 			}) ();
/* 000124 */ 		}
/* 000134 */ 		var value = (function () {
/* 000134 */ 			var __accu0__ = _rx_html_entity;
/* 000134 */ 			return __call__ (__accu0__.sub, __accu0__, (function __lambda__ (m) {
/* 000134 */ 				if (arguments.length) {
/* 000134 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000134 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000134 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000134 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000134 */ 							switch (__attrib0__) {
/* 000134 */ 								case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000134 */ 							}
/* 000134 */ 						}
/* 000134 */ 					}
/* 000134 */ 				}
/* 000134 */ 				else {
/* 000134 */ 				}
/* 000134 */ 				return __add__ (__add__ ('&amp;', (function () {
/* 000134 */ 					var __accu1__ = m;
/* 000134 */ 					return __call__ (__accu1__.group, __accu1__, 1);
/* 000134 */ 				}) ()), ';');
/* 000134 */ 			}), value);
/* 000134 */ 		}) ();
/* 000136 */ 		var value = (function () {
/* 000136 */ 			var __accu0__ = value;
/* 000136 */ 			return __call__ (__accu0__.py_replace, __accu0__, '"', '&quot;');
/* 000136 */ 		}) ();
/* 000137 */ 		return value;
/* 000137 */ 	});},
/* 000139 */ 	get generate_open_tag () {return __get__ (this, function (self, tagname) {
/* 000139 */ 		var attrs = null;
/* 000139 */ 		var class_names = null;
/* 000139 */ 		var self_close_tag = false;
/* 000139 */ 		if (arguments.length) {
/* 000139 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000139 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000139 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000139 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000139 */ 					switch (__attrib0__) {
/* 000139 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000139 */ 						case 'tagname': var tagname = __allkwargs0__ [__attrib0__]; break;
/* 000139 */ 						case 'attrs': var attrs = __allkwargs0__ [__attrib0__]; break;
/* 000139 */ 						case 'class_names': var class_names = __allkwargs0__ [__attrib0__]; break;
/* 000139 */ 						case 'self_close_tag': var self_close_tag = __allkwargs0__ [__attrib0__]; break;
/* 000139 */ 					}
/* 000139 */ 				}
/* 000139 */ 			}
/* 000139 */ 		}
/* 000139 */ 		else {
/* 000139 */ 		}
/* 000140 */ 		var s = '<{}'.format (tagname);
/* 000141 */ 		if (__t__ (!__t__ ((attrs)))) {
/* 000142 */ 			var attrs = dict ({});
/* 000142 */ 		}
/* 000143 */ 		var attrs = __call__ (dict, null, attrs);
/* 000144 */ 		if (__t__ (__in__ ('class', attrs))) {
/* 000145 */ 			var __except0__ = __call__ (ValueError, null, "generate_open_tag(): set HTML 'class' attribute with class_names=, not with attrs=");
/* 000145 */ 			__except0__.__cause__ = null;
/* 000145 */ 			throw __except0__;
/* 000145 */ 		}
/* 000149 */ 		if (__t__ (class_names)) {
/* 000150 */ 			__setitem__ (attrs, 'class', (function () {
/* 000150 */ 				var __accu0__ = ' ';
/* 000150 */ 				return __call__ (__accu0__.join, __accu0__, class_names);
/* 000150 */ 			}) ());
/* 000150 */ 		}
/* 000151 */ 		if (__t__ (attrs)) {
/* 000152 */ 			var __iterable0__ = (function () {
/* 000152 */ 				var __accu0__ = attrs;
/* 000152 */ 				return __call__ (__accu0__.py_items, __accu0__);
/* 000152 */ 			}) ();
/* 000152 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000152 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000152 */ 				var aname = __left0__ [0];
/* 000152 */ 				var aval = __left0__ [1];
/* 000153 */ 				var s = __call__ (__iadd__, null, s, ' {}="{}"'.format (aname, (function () {
/* 000153 */ 					var __accu0__ = self;
/* 000153 */ 					return __call__ (__accu0__.htmlescape_double_quoted_attribute_value, __accu0__, aval);
/* 000153 */ 				}) ()));
/* 000153 */ 			}
/* 000153 */ 		}
/* 000154 */ 		if (__t__ (self_close_tag)) {
/* 000155 */ 			var s = __call__ (__iadd__, null, s, '/>');
/* 000155 */ 		}
/* 000156 */ 		else {
/* 000157 */ 			var s = __call__ (__iadd__, null, s, '>');
/* 000157 */ 		}
/* 000158 */ 		return s;
/* 000158 */ 	});},
/* 000160 */ 	get wrap_in_tag () {return __get__ (this, function (self, tagname, content_html) {
/* 000160 */ 		var attrs = null;
/* 000160 */ 		var class_names = null;
/* 000160 */ 		if (arguments.length) {
/* 000160 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000160 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000160 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000160 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000160 */ 					switch (__attrib0__) {
/* 000160 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000160 */ 						case 'tagname': var tagname = __allkwargs0__ [__attrib0__]; break;
/* 000160 */ 						case 'content_html': var content_html = __allkwargs0__ [__attrib0__]; break;
/* 000160 */ 						case 'attrs': var attrs = __allkwargs0__ [__attrib0__]; break;
/* 000160 */ 						case 'class_names': var class_names = __allkwargs0__ [__attrib0__]; break;
/* 000160 */ 					}
/* 000160 */ 				}
/* 000160 */ 			}
/* 000160 */ 		}
/* 000160 */ 		else {
/* 000160 */ 		}
/* 000162 */ 		var s = (function () {
/* 000162 */ 			var __accu0__ = self;
/* 000162 */ 			return __call__ (__accu0__.generate_open_tag, __accu0__, tagname, __kwargtrans__ ({attrs: attrs, class_names: class_names}));
/* 000162 */ 		}) ();
/* 000163 */ 		var s = __call__ (__iadd__, null, s, __call__ (str, null, content_html));
/* 000164 */ 		var s = __call__ (__iadd__, null, s, '</{}>'.format (tagname));
/* 000165 */ 		return s;
/* 000165 */ 	});},
/* 000167 */ 	get wrap_in_link () {return __get__ (this, function (self, display_html, target_href) {
/* 000167 */ 		var class_names = null;
/* 000167 */ 		if (arguments.length) {
/* 000167 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000167 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000167 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000167 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000167 */ 					switch (__attrib0__) {
/* 000167 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000167 */ 						case 'display_html': var display_html = __allkwargs0__ [__attrib0__]; break;
/* 000167 */ 						case 'target_href': var target_href = __allkwargs0__ [__attrib0__]; break;
/* 000167 */ 						case 'class_names': var class_names = __allkwargs0__ [__attrib0__]; break;
/* 000167 */ 					}
/* 000167 */ 				}
/* 000167 */ 			}
/* 000167 */ 		}
/* 000167 */ 		else {
/* 000167 */ 		}
/* 000168 */ 		if (__t__ (!__t__ ((target_href)))) {
/* 000169 */ 			var target_href = '#';
/* 000169 */ 		}
/* 000170 */ 		var attrs = dict ({'href': target_href});
/* 000173 */ 		if (__t__ (__call__ (callable, null, self.use_link_target_blank))) {
/* 000174 */ 			if (__t__ ((function () {
/* 000174 */ 				var __accu0__ = self;
/* 000174 */ 				return __call__ (__accu0__.use_link_target_blank, __accu0__, target_href);
/* 000174 */ 			}) ())) {
/* 000175 */ 				__setitem__ (attrs, 'target', '_blank');
/* 000175 */ 			}
/* 000175 */ 		}
/* 000176 */ 		else if (__t__ (__t__ (self.use_link_target_blank) && !__t__ (((function () {
/* 000176 */ 			var __accu0__ = target_href;
/* 000176 */ 			return __call__ (__accu0__.startswith, __accu0__, '#');
/* 000176 */ 		}) ())))) {
/* 000177 */ 			__setitem__ (attrs, 'target', '_blank');
/* 000177 */ 		}
/* 000178 */ 		return (function () {
/* 000178 */ 			var __accu0__ = self;
/* 000178 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'a', display_html, __kwargtrans__ ({attrs: attrs, class_names: class_names}));
/* 000178 */ 		}) ();
/* 000178 */ 	});},
/* 000187 */ 	get render_build_paragraph () {return __get__ (this, function (self, nodelist, render_context) {
/* 000187 */ 		if (arguments.length) {
/* 000187 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000187 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000187 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000187 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000187 */ 					switch (__attrib0__) {
/* 000187 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000187 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000187 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000187 */ 					}
/* 000187 */ 				}
/* 000187 */ 			}
/* 000187 */ 		}
/* 000187 */ 		else {
/* 000187 */ 		}
/* 000190 */ 		return __add__ (__add__ ('<p>', (function () {
/* 000190 */ 			var __accu0__ = self;
/* 000190 */ 			return __call__ (__accu0__.render_inline_content, __accu0__, nodelist, render_context);
/* 000190 */ 		}) ()), '</p>');
/* 000190 */ 	});},
/* 000194 */ 	get render_inline_content () {return __get__ (this, function (self, nodelist, render_context) {
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
/* 000195 */ 		return (function () {
/* 000195 */ 			var __accu0__ = self;
/* 000195 */ 			return __call__ (__accu0__.render_join, __accu0__, (function () {
/* 000195 */ 				var __accu1__ = [];
/* 000196 */ 				var __iterable0__ = nodelist;
/* 000196 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000196 */ 					var n = __getitem__ (__iterable0__, __index0__);
/* 000196 */ 					(function () {
/* 000196 */ 						var __accu2__ = __accu1__;
/* 000196 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000196 */ 							var __accu3__ = self;
/* 000196 */ 							return __call__ (__accu3__.render_node, __accu3__, n, render_context);
/* 000196 */ 						}) ());
/* 000196 */ 					}) ();
/* 000196 */ 				}
/* 000196 */ 				return __accu1__;
/* 000196 */ 			}) (), render_context);
/* 000196 */ 		}) ();
/* 000196 */ 	});},
/* 000200 */ 	get render_join () {return __get__ (this, function (self, content_list, render_context) {
/* 000200 */ 		if (arguments.length) {
/* 000200 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000200 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000200 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000200 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000200 */ 					switch (__attrib0__) {
/* 000200 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000200 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000200 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000200 */ 					}
/* 000200 */ 				}
/* 000200 */ 			}
/* 000200 */ 		}
/* 000200 */ 		else {
/* 000200 */ 		}
/* 000206 */ 		return (function () {
/* 000206 */ 			var __accu0__ = '';
/* 000206 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000206 */ 				var __accu1__ = [];
/* 000206 */ 				var __iterable0__ = content_list;
/* 000206 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000206 */ 					var s = __getitem__ (__iterable0__, __index0__);
/* 000206 */ 					(function () {
/* 000206 */ 						var __accu2__ = __accu1__;
/* 000206 */ 						return __call__ (__accu2__.append, __accu2__, __call__ (str, null, s));
/* 000206 */ 					}) ();
/* 000206 */ 				}
/* 000206 */ 				return __accu1__;
/* 000206 */ 			}) ());
/* 000206 */ 		}) ();
/* 000206 */ 	});},
/* 000208 */ 	get render_join_blocks () {return __get__ (this, function (self, content_list, render_context) {
/* 000208 */ 		if (arguments.length) {
/* 000208 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000208 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000208 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000208 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000208 */ 					switch (__attrib0__) {
/* 000208 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000208 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000208 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000208 */ 					}
/* 000208 */ 				}
/* 000208 */ 			}
/* 000208 */ 		}
/* 000208 */ 		else {
/* 000208 */ 		}
/* 000216 */ 		return (function () {
/* 000216 */ 			var __accu0__ = self.html_blocks_joiner;
/* 000216 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000216 */ 				var __accu1__ = [];
/* 000217 */ 				var __iterable0__ = content_list;
/* 000217 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000217 */ 					var c = __getitem__ (__iterable0__, __index0__);
/* 000217 */ 					if (__t__ (__t__ (c !== null) && __call__ (len, null, c))) {
/* 000217 */ 						(function () {
/* 000217 */ 							var __accu2__ = __accu1__;
/* 000217 */ 							return __call__ (__accu2__.append, __accu2__, c);
/* 000217 */ 						}) ();
/* 000217 */ 					}
/* 000217 */ 				}
/* 000217 */ 				return __accu1__;
/* 000217 */ 			}) ());
/* 000217 */ 		}) ();
/* 000217 */ 	});},
/* 000223 */ 	get render_value () {return __get__ (this, function (self, value, render_context) {
/* 000223 */ 		if (arguments.length) {
/* 000223 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000223 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000223 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000223 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000223 */ 					switch (__attrib0__) {
/* 000223 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000223 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000223 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000223 */ 					}
/* 000223 */ 				}
/* 000223 */ 			}
/* 000223 */ 		}
/* 000223 */ 		else {
/* 000223 */ 		}
/* 000224 */ 		return (function () {
/* 000224 */ 			var __accu0__ = self;
/* 000224 */ 			return __call__ (__accu0__.htmlescape, __accu0__, value);
/* 000224 */ 		}) ();
/* 000224 */ 	});},
/* 000226 */ 	get render_empty_error_placeholder () {return __get__ (this, function (self, debug_str, render_context) {
/* 000226 */ 		if (arguments.length) {
/* 000226 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000226 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000226 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000226 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000226 */ 					switch (__attrib0__) {
/* 000226 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000226 */ 						case 'debug_str': var debug_str = __allkwargs0__ [__attrib0__]; break;
/* 000226 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000226 */ 					}
/* 000226 */ 				}
/* 000226 */ 			}
/* 000226 */ 		}
/* 000226 */ 		else {
/* 000226 */ 		}
/* 000227 */ 		var debug_str_safe = (function () {
/* 000227 */ 			var __accu0__ = debug_str;
/* 000227 */ 			return __call__ (__accu0__.py_replace, __accu0__, '--', '- - ');
/* 000227 */ 		}) ();
/* 000228 */ 		return '<span class="empty-error-placeholder"><!-- {} -->(?)</span>'.format (debug_str_safe);
/* 000228 */ 	});},
/* 000230 */ 	get render_nothing () {return __get__ (this, function (self, render_context, annotations) {
/* 000230 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000230 */ 			var annotations = null;
/* 000230 */ 		};
/* 000230 */ 		if (arguments.length) {
/* 000230 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000230 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000230 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000230 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000230 */ 					switch (__attrib0__) {
/* 000230 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000230 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000230 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000230 */ 					}
/* 000230 */ 				}
/* 000230 */ 			}
/* 000230 */ 		}
/* 000230 */ 		else {
/* 000230 */ 		}
/* 000231 */ 		if (__t__ (!__t__ ((self.render_nothing_as_comment_with_annotations)))) {
/* 000232 */ 			return '';
/* 000232 */ 		}
/* 000233 */ 		if (__t__ (!__t__ ((annotations)))) {
/* 000234 */ 			var annotations = [];
/* 000234 */ 		}
/* 000235 */ 		var annotations = (function () {
/* 000235 */ 			var __accu0__ = [];
/* 000235 */ 			var __iterable0__ = annotations;
/* 000235 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000235 */ 				var a = __getitem__ (__iterable0__, __index0__);
/* 000235 */ 				(function () {
/* 000235 */ 					var __accu1__ = __accu0__;
/* 000235 */ 					return __call__ (__accu1__.append, __accu1__, (function () {
/* 000235 */ 						var __accu2__ = a;
/* 000235 */ 						return __call__ (__accu2__.py_replace, __accu2__, '--', '- - ');
/* 000235 */ 					}) ());
/* 000235 */ 				}) ();
/* 000235 */ 			}
/* 000235 */ 			return __accu0__;
/* 000235 */ 		}) ();
/* 000236 */ 		return (function () {
/* 000236 */ 			var __accu0__ = '<!-- {} -->';
/* 000236 */ 			return __call__ (__accu0__.format, __accu0__, (function () {
/* 000236 */ 				var __accu1__ = ' ';
/* 000236 */ 				return __call__ (__accu1__.join, __accu1__, annotations);
/* 000236 */ 			}) ());
/* 000236 */ 		}) ();
/* 000236 */ 	});},
/* 000238 */ 	verbatim_highlight_spaces: false,
/* 000239 */ 	verbatim_protect_backslashes: true,
/* 000241 */ 	get render_verbatim () {return __get__ (this, function (self, value, render_context) {
/* 000241 */ 		var is_block_level = false;
/* 000241 */ 		var annotations = null;
/* 000241 */ 		var target_id = null;
/* 000241 */ 		if (arguments.length) {
/* 000241 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000241 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000241 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000241 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000241 */ 					switch (__attrib0__) {
/* 000241 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000241 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000241 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000241 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000241 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000241 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000241 */ 					}
/* 000241 */ 				}
/* 000241 */ 			}
/* 000241 */ 		}
/* 000241 */ 		else {
/* 000241 */ 		}
/* 000243 */ 		var attrs = dict ({});
/* 000244 */ 		if (__t__ (target_id !== null)) {
/* 000245 */ 			__setitem__ (attrs, 'id', target_id);
/* 000245 */ 		}
/* 000246 */ 		var escaped = (function () {
/* 000246 */ 			var __accu0__ = self;
/* 000246 */ 			return __call__ (__accu0__.htmlescape, __accu0__, value);
/* 000246 */ 		}) ();
/* 000247 */ 		if (__t__ (self.verbatim_protect_backslashes)) {
/* 000249 */ 			var escaped = (function () {
/* 000249 */ 				var __accu0__ = escaped;
/* 000249 */ 				return __call__ (__accu0__.py_replace, __accu0__, '\\', '<span>\\</span>');
/* 000249 */ 			}) ();
/* 000249 */ 		}
/* 000250 */ 		if (__t__ (self.verbatim_highlight_spaces)) {
/* 000251 */ 			var escaped = (function () {
/* 000251 */ 				var __accu0__ = escaped;
/* 000251 */ 				return __call__ (__accu0__.py_replace, __accu0__, ' ', '<span class="verbatimspace">&nbsp;</span>');
/* 000251 */ 			}) ();
/* 000251 */ 		}
/* 000254 */ 		var tag = 'span';
/* 000255 */ 		var __iterable0__ = annotations;
/* 000255 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000255 */ 			var annotation = __getitem__ (__iterable0__, __index0__);
/* 000256 */ 			if (__t__ (__in__ (annotation, tuple (['verbatimcode-environment'])))) {
/* 000258 */ 				var tag = 'div';
/* 000258 */ 			}
/* 000258 */ 		}
/* 000259 */ 		return (function () {
/* 000259 */ 			var __accu0__ = self;
/* 000259 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, tag, escaped, __kwargtrans__ ({class_names: (__t__ (annotations) ? annotations : ['verbatimtext']), attrs: attrs}));
/* 000259 */ 		}) ();
/* 000259 */ 	});},
/* 000266 */ 	get render_math_content () {return __get__ (this, function (self, delimiters, nodelist, render_context, displaytype, environmentname, target_id) {
/* 000266 */ 		if (typeof environmentname == 'undefined' || (environmentname != null && environmentname.hasOwnProperty ("__kwargtrans__"))) {;
/* 000266 */ 			var environmentname = null;
/* 000266 */ 		};
/* 000266 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000266 */ 			var target_id = null;
/* 000266 */ 		};
/* 000266 */ 		if (arguments.length) {
/* 000266 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000266 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000266 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000266 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000266 */ 					switch (__attrib0__) {
/* 000266 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000266 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000266 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000266 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000266 */ 						case 'displaytype': var displaytype = __allkwargs0__ [__attrib0__]; break;
/* 000266 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000266 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000266 */ 					}
/* 000266 */ 				}
/* 000266 */ 			}
/* 000266 */ 		}
/* 000266 */ 		else {
/* 000266 */ 		}
/* 000274 */ 		if (__t__ (!__t__ ((self.use_mathjax)))) {
/* 000275 */ 			(function () {
/* 000275 */ 				var __accu0__ = logger;
/* 000275 */ 				return __call__ (__accu0__.warning, __accu0__, 'called HtmlFragmentRenderer.render_math_content() but self.use_mathjax is not set. Your math will probably not render correctly.');
/* 000275 */ 			}) ();
/* 000275 */ 		}
/* 000281 */ 		var class_names = ['{}-math'.format (displaytype)];
/* 000282 */ 		if (__t__ (environmentname !== null)) {
/* 000283 */ 			(function () {
/* 000283 */ 				var __accu0__ = class_names;
/* 000283 */ 				return __call__ (__accu0__.append, __accu0__, 'env-{}'.format ((function () {
/* 000283 */ 					var __accu1__ = environmentname;
/* 000283 */ 					return __call__ (__accu1__.py_replace, __accu1__, '*', '-star');
/* 000283 */ 				}) ()));
/* 000283 */ 			}) ();
/* 000283 */ 		}
/* 000286 */ 		var content_html = (function () {
/* 000286 */ 			var __accu0__ = self;
/* 000286 */ 			return __call__ (__accu0__.htmlescape, __accu0__, __add__ (__add__ (__getitem__ (delimiters, 0), (function () {
/* 000286 */ 				var __accu1__ = nodelist;
/* 000286 */ 				return __call__ (__accu1__.latex_verbatim, __accu1__);
/* 000286 */ 			}) ()), __getitem__ (delimiters, 1)));
/* 000286 */ 		}) ();
/* 000289 */ 		var attrs = dict ({});
/* 000290 */ 		if (__t__ (target_id !== null)) {
/* 000291 */ 			__setitem__ (attrs, 'id', target_id);
/* 000291 */ 		}
/* 000293 */ 		if (__t__ (__eq__ (displaytype, 'display'))) {
/* 000295 */ 			return (function () {
/* 000295 */ 				var __accu0__ = self;
/* 000295 */ 				return __call__ (__accu0__.wrap_in_tag, __accu0__, 'span', content_html, __kwargtrans__ ({class_names: class_names, attrs: attrs}));
/* 000295 */ 			}) ();
/* 000295 */ 		}
/* 000302 */ 		return (function () {
/* 000302 */ 			var __accu0__ = self;
/* 000302 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'span', content_html, __kwargtrans__ ({class_names: class_names, attrs: attrs}));
/* 000302 */ 		}) ();
/* 000302 */ 	});},
/* 000309 */ 	get render_text_format () {return __get__ (this, function (self, text_formats, nodelist, render_context) {
/* 000309 */ 		if (arguments.length) {
/* 000309 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000309 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000309 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000309 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000309 */ 					switch (__attrib0__) {
/* 000309 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000309 */ 						case 'text_formats': var text_formats = __allkwargs0__ [__attrib0__]; break;
/* 000309 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000309 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000309 */ 					}
/* 000309 */ 				}
/* 000309 */ 			}
/* 000309 */ 		}
/* 000309 */ 		else {
/* 000309 */ 		}
/* 000313 */ 		var content = (function () {
/* 000313 */ 			var __accu0__ = self;
/* 000313 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, nodelist, render_context, __kwargtrans__ ({is_block_level: false}));
/* 000313 */ 		}) ();
/* 000319 */ 		return (function () {
/* 000319 */ 			var __accu0__ = self;
/* 000319 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'span', content, __kwargtrans__ ({class_names: text_formats}));
/* 000319 */ 		}) ();
/* 000319 */ 	});},
/* 000325 */ 	get render_semantic_span () {return __get__ (this, function (self, content, role, render_context) {
/* 000325 */ 		var annotations = null;
/* 000325 */ 		var target_id = null;
/* 000325 */ 		if (arguments.length) {
/* 000325 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000325 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000325 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000325 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000325 */ 					switch (__attrib0__) {
/* 000325 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000325 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000325 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000325 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000325 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000325 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000325 */ 					}
/* 000325 */ 				}
/* 000325 */ 			}
/* 000325 */ 		}
/* 000325 */ 		else {
/* 000325 */ 		}
/* 000327 */ 		var attrs = dict ({});
/* 000328 */ 		if (__t__ (target_id !== null)) {
/* 000329 */ 			__setitem__ (attrs, 'id', target_id);
/* 000329 */ 		}
/* 000330 */ 		return (function () {
/* 000330 */ 			var __accu0__ = self;
/* 000330 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'span', content, __kwargtrans__ ({attrs: attrs, class_names: __add__ ([role], (__t__ (annotations) ? annotations : []))}));
/* 000330 */ 		}) ();
/* 000330 */ 	});},
/* 000338 */ 	get render_semantic_block () {return __get__ (this, function (self, content, role, render_context) {
/* 000338 */ 		var annotations = null;
/* 000338 */ 		var target_id = null;
/* 000338 */ 		if (arguments.length) {
/* 000338 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000338 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000338 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000338 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000338 */ 					switch (__attrib0__) {
/* 000338 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000338 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000338 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000338 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000338 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000338 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000338 */ 					}
/* 000338 */ 				}
/* 000338 */ 			}
/* 000338 */ 		}
/* 000338 */ 		else {
/* 000338 */ 		}
/* 000340 */ 		var attrs = dict ({});
/* 000341 */ 		if (__t__ (target_id !== null)) {
/* 000342 */ 			__setitem__ (attrs, 'id', target_id);
/* 000342 */ 		}
/* 000343 */ 		if (__t__ (__in__ (role, tuple (['section', 'main', 'article'])))) {
/* 000344 */ 			return (function () {
/* 000344 */ 				var __accu0__ = self;
/* 000344 */ 				return __call__ (__accu0__.wrap_in_tag, __accu0__, role, content, __kwargtrans__ ({attrs: attrs, class_names: annotations}));
/* 000344 */ 			}) ();
/* 000344 */ 		}
/* 000350 */ 		return (function () {
/* 000350 */ 			var __accu0__ = self;
/* 000350 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'div', content, __kwargtrans__ ({attrs: attrs, class_names: __add__ ([role], (__t__ (annotations) ? annotations : []))}));
/* 000350 */ 		}) ();
/* 000350 */ 	});},
/* 000358 */ 	get render_enumeration () {return __get__ (this, function (self, iter_items_nodelists, counter_formatter, render_context) {
/* 000358 */ 		var target_id_generator = null;
/* 000358 */ 		var annotations = null;
/* 000358 */ 		var nested_depth = null;
/* 000358 */ 		if (arguments.length) {
/* 000358 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000358 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000358 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000358 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000358 */ 					switch (__attrib0__) {
/* 000358 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000358 */ 						case 'iter_items_nodelists': var iter_items_nodelists = __allkwargs0__ [__attrib0__]; break;
/* 000358 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000358 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000358 */ 						case 'target_id_generator': var target_id_generator = __allkwargs0__ [__attrib0__]; break;
/* 000358 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000358 */ 						case 'nested_depth': var nested_depth = __allkwargs0__ [__attrib0__]; break;
/* 000358 */ 					}
/* 000358 */ 				}
/* 000358 */ 			}
/* 000358 */ 		}
/* 000358 */ 		else {
/* 000358 */ 		}
/* 000370 */ 		var s_items = [];
/* 000372 */ 		var __iterable0__ = __call__ (enumerate, null, iter_items_nodelists);
/* 000372 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000372 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000372 */ 			var j = __left0__ [0];
/* 000372 */ 			var item_content_nodelist = __left0__ [1];
/* 000374 */ 			var use_block_level = true;
/* 000375 */ 			if (__t__ (item_content_nodelist.parsing_state.is_block_level === false)) {
/* 000378 */ 				var use_block_level = false;
/* 000378 */ 			}
/* 000380 */ 			// pass;
/* 000384 */ 			// pass;
/* 000388 */ 			var item_content = (function () {
/* 000388 */ 				var __accu0__ = self;
/* 000388 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, item_content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: use_block_level}));
/* 000388 */ 			}) ();
/* 000394 */ 			var enumno = __add__ (1, j);
/* 000396 */ 			var tag_nodelist = __call__ (counter_formatter, null, enumno);
/* 000397 */ 			if (__t__ (__call__ (isinstance, null, tag_nodelist, str))) {
/* 000398 */ 				var tag_content = (function () {
/* 000398 */ 					var __accu0__ = self;
/* 000398 */ 					return __call__ (__accu0__.render_value, __accu0__, tag_nodelist, render_context);
/* 000398 */ 				}) ();
/* 000398 */ 			}
/* 000399 */ 			else {
/* 000400 */ 				var tag_content = (function () {
/* 000400 */ 					var __accu0__ = self;
/* 000400 */ 					return __call__ (__accu0__.render_nodelist, __accu0__, tag_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000400 */ 				}) ();
/* 000400 */ 			}
/* 000406 */ 			var dtattrs = dict ({});
/* 000407 */ 			if (__t__ (target_id_generator !== null)) {
/* 000408 */ 				__setitem__ (dtattrs, 'id', __call__ (target_id_generator, null, enumno));
/* 000408 */ 			}
/* 000410 */ 			(function () {
/* 000410 */ 				var __accu0__ = s_items;
/* 000411 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000411 */ 					var __accu1__ = self;
/* 000412 */ 					return __call__ (__accu1__.render_join, __accu1__, [(function () {
/* 000412 */ 						var __accu2__ = self;
/* 000412 */ 						return __call__ (__accu2__.wrap_in_tag, __accu2__, 'dt', tag_content, __kwargtrans__ ({attrs: dtattrs}));
/* 000417 */ 					}) (), (function () {
/* 000417 */ 						var __accu2__ = self;
/* 000417 */ 						return __call__ (__accu2__.wrap_in_tag, __accu2__, 'dd', item_content);
/* 000417 */ 					}) ()], render_context);
/* 000417 */ 				}) ());
/* 000417 */ 			}) ();
/* 000417 */ 		}
/* 000424 */ 		return (function () {
/* 000424 */ 			var __accu0__ = self;
/* 000426 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'dl', (function () {
/* 000426 */ 				var __accu1__ = self;
/* 000426 */ 				return __call__ (__accu1__.render_join, __accu1__, s_items, render_context);
/* 000426 */ 			}) (), __kwargtrans__ ({class_names: __add__ (['enumeration'], (__t__ (annotations) ? annotations : []))}));
/* 000426 */ 		}) ();
/* 000426 */ 	});},
/* 000431 */ 	get render_heading () {return __get__ (this, function (self, heading_nodelist, render_context) {
/* 000431 */ 		var heading_level = 1;
/* 000431 */ 		var target_id = null;
/* 000431 */ 		var inline_heading = false;
/* 000431 */ 		var annotations = null;
/* 000431 */ 		if (arguments.length) {
/* 000431 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000431 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000431 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000431 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000431 */ 					switch (__attrib0__) {
/* 000431 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000431 */ 						case 'heading_nodelist': var heading_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000431 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000431 */ 						case 'heading_level': var heading_level = __allkwargs0__ [__attrib0__]; break;
/* 000431 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000431 */ 						case 'inline_heading': var inline_heading = __allkwargs0__ [__attrib0__]; break;
/* 000431 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000431 */ 					}
/* 000431 */ 				}
/* 000431 */ 			}
/* 000431 */ 		}
/* 000431 */ 		else {
/* 000431 */ 		}
/* 000435 */ 		if (__t__ (!__in__ (heading_level, self.heading_tags_by_level))) {
/* 000437 */ 			var __except0__ = __call__ (ValueError, null, 'Bad heading_level={}, expected one of {}'.format (heading_level, __call__ (list, null, (function () {
/* 000437 */ 				var __accu0__ = self.heading_tags_by_level;
/* 000437 */ 				return __call__ (__accu0__.py_keys, __accu0__);
/* 000437 */ 			}) ())));
/* 000437 */ 			__except0__.__cause__ = null;
/* 000437 */ 			throw __except0__;
/* 000437 */ 		}
/* 000439 */ 		var annot = (__t__ (annotations) ? __call__ (list, null, annotations) : []);
/* 000440 */ 		(function () {
/* 000440 */ 			var __accu0__ = annot;
/* 000440 */ 			return __call__ (__accu0__.append, __accu0__, 'heading-level-{}'.format (heading_level));
/* 000440 */ 		}) ();
/* 000441 */ 		if (__t__ (inline_heading)) {
/* 000442 */ 			(function () {
/* 000442 */ 				var __accu0__ = annot;
/* 000442 */ 				return __call__ (__accu0__.append, __accu0__, 'heading-inline');
/* 000442 */ 			}) ();
/* 000442 */ 		}
/* 000444 */ 		var attrs = dict ({});
/* 000445 */ 		if (__t__ (target_id !== null)) {
/* 000446 */ 			__setitem__ (attrs, 'id', target_id);
/* 000446 */ 		}
/* 000448 */ 		var content = (function () {
/* 000448 */ 			var __accu0__ = self;
/* 000450 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, __getitem__ (self.heading_tags_by_level, heading_level), (function () {
/* 000450 */ 				var __accu1__ = self;
/* 000450 */ 				return __call__ (__accu1__.render_inline_content, __accu1__, heading_nodelist, render_context);
/* 000450 */ 			}) (), __kwargtrans__ ({class_names: annot, attrs: attrs}));
/* 000450 */ 		}) ();
/* 000454 */ 		if (__t__ (__t__ (inline_heading) && self.inline_heading_add_space)) {
/* 000455 */ 			var content = __call__ (__iadd__, null, content, ' ');
/* 000455 */ 		}
/* 000456 */ 		// pass;
/* 000460 */ 		return content;
/* 000460 */ 	});},
/* 000462 */ 	get render_link () {return __get__ (this, function (self, ref_type, href, display_nodelist, render_context, annotations) {
/* 000462 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000462 */ 			var annotations = null;
/* 000462 */ 		};
/* 000462 */ 		if (arguments.length) {
/* 000462 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000462 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000462 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000462 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000462 */ 					switch (__attrib0__) {
/* 000462 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000462 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000462 */ 						case 'href': var href = __allkwargs0__ [__attrib0__]; break;
/* 000462 */ 						case 'display_nodelist': var display_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000462 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000462 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000462 */ 					}
/* 000462 */ 				}
/* 000462 */ 			}
/* 000462 */ 		}
/* 000462 */ 		else {
/* 000462 */ 		}
/* 000463 */ 		var display_content = (function () {
/* 000463 */ 			var __accu0__ = self;
/* 000463 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, display_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000463 */ 		}) ();
/* 000468 */ 		return (function () {
/* 000468 */ 			var __accu0__ = self;
/* 000468 */ 			return __call__ (__accu0__.wrap_in_link, __accu0__, display_content, href, __kwargtrans__ ({class_names: __add__ (['href-{}'.format (ref_type)], (__t__ (annotations) ? annotations : []))}));
/* 000468 */ 		}) ();
/* 000468 */ 	});},
/* 000475 */ 	get render_delayed_marker () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000475 */ 		if (arguments.length) {
/* 000475 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000475 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000475 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000475 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000475 */ 					switch (__attrib0__) {
/* 000475 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000475 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000475 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000475 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000475 */ 					}
/* 000475 */ 				}
/* 000475 */ 			}
/* 000475 */ 		}
/* 000475 */ 		else {
/* 000475 */ 		}
/* 000476 */ 		return '<LLM:DLYD:{}/>'.format (delayed_key);
/* 000476 */ 	});},
/* 000478 */ 	get render_delayed_dummy_placeholder () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000478 */ 		if (arguments.length) {
/* 000478 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000478 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000478 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000478 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000478 */ 					switch (__attrib0__) {
/* 000478 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000478 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000478 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000478 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000478 */ 					}
/* 000478 */ 				}
/* 000478 */ 			}
/* 000478 */ 		}
/* 000478 */ 		else {
/* 000478 */ 		}
/* 000479 */ 		return '<!-- delayed:{} -->'.format (delayed_key);
/* 000479 */ 	});},
/* 000481 */ 	get replace_delayed_markers_with_final_values () {return __get__ (this, function (self, content, delayed_values) {
/* 000481 */ 		if (arguments.length) {
/* 000481 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000481 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000481 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000481 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000481 */ 					switch (__attrib0__) {
/* 000481 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000481 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000481 */ 						case 'delayed_values': var delayed_values = __allkwargs0__ [__attrib0__]; break;
/* 000481 */ 					}
/* 000481 */ 				}
/* 000481 */ 			}
/* 000481 */ 		}
/* 000481 */ 		else {
/* 000481 */ 		}
/* 000482 */ 		return (function () {
/* 000482 */ 			var __accu0__ = _rx_delayed_markers;
/* 000482 */ 			return __call__ (__accu0__.sub, __accu0__, (function __lambda__ (m) {
/* 000482 */ 				if (arguments.length) {
/* 000482 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000482 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000482 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000482 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000482 */ 							switch (__attrib0__) {
/* 000482 */ 								case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000482 */ 							}
/* 000482 */ 						}
/* 000482 */ 					}
/* 000482 */ 				}
/* 000482 */ 				else {
/* 000482 */ 				}
/* 000483 */ 				return __getitem__ (delayed_values, __call__ (int, null, (function () {
/* 000483 */ 					var __accu1__ = m;
/* 000483 */ 					return __call__ (__accu1__.group, __accu1__, 'key');
/* 000483 */ 				}) ()));
/* 000483 */ 			}), content);
/* 000483 */ 		}) ();
/* 000483 */ 	});},
/* 000490 */ 	get render_float () {return __get__ (this, function (self, float_instance, render_context) {
/* 000490 */ 		if (arguments.length) {
/* 000490 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000490 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000490 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000490 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000490 */ 					switch (__attrib0__) {
/* 000490 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000490 */ 						case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000490 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000490 */ 					}
/* 000490 */ 				}
/* 000490 */ 			}
/* 000490 */ 		}
/* 000490 */ 		else {
/* 000490 */ 		}
/* 000493 */ 		var figattrs = dict ({});
/* 000495 */ 		if (__t__ (float_instance.target_id !== null)) {
/* 000496 */ 			__setitem__ (figattrs, 'id', float_instance.target_id);
/* 000496 */ 		}
/* 000498 */ 		var full_figcaption_rendered_list = [];
/* 000499 */ 		if (__t__ (float_instance.number !== null)) {
/* 000501 */ 			(function () {
/* 000501 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000502 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000502 */ 					var __accu1__ = self;
/* 000504 */ 					return __call__ (__accu1__.wrap_in_tag, __accu1__, 'span', (function () {
/* 000504 */ 						var __accu2__ = self;
/* 000505 */ 						return __call__ (__accu2__.render_join, __accu2__, [(function () {
/* 000505 */ 							var __accu3__ = self;
/* 000505 */ 							return __call__ (__accu3__.render_value, __accu3__, float_instance.float_type_info.float_caption_name, render_context);
/* 000510 */ 						}) (), '&nbsp;', (function () {
/* 000510 */ 							var __accu3__ = self;
/* 000510 */ 							return __call__ (__accu3__.render_nodelist, __accu3__, float_instance.formatted_counter_value_llm.nodes, __kwargtrans__ ({render_context: render_context}));
/* 000510 */ 						}) ()], render_context);
/* 000510 */ 					}) (), __kwargtrans__ ({class_names: ['float-number']}));
/* 000510 */ 				}) ());
/* 000510 */ 			}) ();
/* 000510 */ 		}
/* 000518 */ 		else if (__t__ (float_instance.caption_nodelist)) {
/* 000521 */ 			(function () {
/* 000521 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000522 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000522 */ 					var __accu1__ = self;
/* 000524 */ 					return __call__ (__accu1__.wrap_in_tag, __accu1__, 'span', (function () {
/* 000524 */ 						var __accu2__ = self;
/* 000525 */ 						return __call__ (__accu2__.render_join, __accu2__, [(function () {
/* 000525 */ 							var __accu3__ = self;
/* 000525 */ 							return __call__ (__accu3__.render_value, __accu3__, float_instance.float_type_info.float_caption_name, render_context);
/* 000525 */ 						}) ()], render_context);
/* 000525 */ 					}) (), __kwargtrans__ ({class_names: ['float-no-number']}));
/* 000525 */ 				}) ());
/* 000525 */ 			}) ();
/* 000525 */ 		}
/* 000531 */ 		else {
/* 000535 */ 			// pass;
/* 000535 */ 		}
/* 000537 */ 		if (__t__ (float_instance.caption_nodelist)) {
/* 000541 */ 			(function () {
/* 000541 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000541 */ 				return __call__ (__accu0__.append, __accu0__, ': ');
/* 000541 */ 			}) ();
/* 000544 */ 			(function () {
/* 000544 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000545 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000545 */ 					var __accu1__ = self;
/* 000545 */ 					return __call__ (__accu1__.render_nodelist, __accu1__, float_instance.caption_nodelist, __kwargtrans__ ({render_context: render_context}));
/* 000545 */ 				}) ());
/* 000545 */ 			}) ();
/* 000545 */ 		}
/* 000551 */ 		var rendered_float_caption = null;
/* 000552 */ 		if (__t__ (full_figcaption_rendered_list)) {
/* 000553 */ 			var rendered_float_caption = (function () {
/* 000553 */ 				var __accu0__ = self;
/* 000555 */ 				return __call__ (__accu0__.wrap_in_tag, __accu0__, 'figcaption', (function () {
/* 000555 */ 					var __accu1__ = self;
/* 000557 */ 					return __call__ (__accu1__.wrap_in_tag, __accu1__, 'span', (function () {
/* 000557 */ 						var __accu2__ = self;
/* 000557 */ 						return __call__ (__accu2__.render_join, __accu2__, full_figcaption_rendered_list, render_context);
/* 000557 */ 					}) ());
/* 000557 */ 				}) (), __kwargtrans__ ({class_names: ['float-caption-content']}));
/* 000557 */ 			}) ();
/* 000557 */ 		}
/* 000562 */ 		var float_content_block_content = (function () {
/* 000562 */ 			var __accu0__ = self;
/* 000562 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, float_instance.content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: true}));
/* 000562 */ 		}) ();
/* 000567 */ 		var float_content_block = (function () {
/* 000567 */ 			var __accu0__ = self;
/* 000567 */ 			return __call__ (__accu0__.render_semantic_block, __accu0__, float_content_block_content, 'float-contents', __kwargtrans__ ({render_context: render_context}));
/* 000567 */ 		}) ();
/* 000573 */ 		if (__t__ (rendered_float_caption !== null)) {
/* 000574 */ 			var float_content_with_caption = (function () {
/* 000574 */ 				var __accu0__ = self;
/* 000574 */ 				return __call__ (__accu0__.render_join_blocks, __accu0__, [float_content_block, rendered_float_caption], render_context);
/* 000574 */ 			}) ();
/* 000574 */ 		}
/* 000578 */ 		else {
/* 000579 */ 			var float_content_with_caption = float_content_block;
/* 000579 */ 		}
/* 000581 */ 		var full_figure = (function () {
/* 000581 */ 			var __accu0__ = self;
/* 000581 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'figure', float_content_with_caption, __kwargtrans__ ({attrs: figattrs, class_names: ['float', 'float-{}'.format (float_instance.float_type)]}));
/* 000581 */ 		}) ();
/* 000588 */ 		return full_figure;
/* 000588 */ 	});},
/* 000591 */ 	graphics_raster_magnification: 1,
/* 000592 */ 	graphics_vector_magnification: 1,
/* 000594 */ 	get render_graphics_block () {return __get__ (this, function (self, graphics_resource, render_context) {
/* 000594 */ 		if (arguments.length) {
/* 000594 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000594 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000594 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000594 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000594 */ 					switch (__attrib0__) {
/* 000594 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000594 */ 						case 'graphics_resource': var graphics_resource = __allkwargs0__ [__attrib0__]; break;
/* 000594 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000594 */ 					}
/* 000594 */ 				}
/* 000594 */ 			}
/* 000594 */ 		}
/* 000594 */ 		else {
/* 000594 */ 		}
/* 000596 */ 		var imgattrs = dict ({});
/* 000598 */ 		var styparts = [];
/* 000599 */ 		if (__t__ (graphics_resource.physical_dimensions !== null)) {
/* 000601 */ 			var __left0__ = graphics_resource.physical_dimensions;
/* 000601 */ 			var width_pt = __left0__ [0];
/* 000601 */ 			var height_pt = __left0__ [1];
/* 000603 */ 			if (__t__ (__eq__ (graphics_resource.graphics_type, 'raster'))) {
/* 000604 */ 				if (__t__ (width_pt !== null)) {
/* 000605 */ 					var width_pt = __call__ (__imul__, null, width_pt, self.graphics_raster_magnification);
/* 000605 */ 				}
/* 000606 */ 				if (__t__ (height_pt !== null)) {
/* 000607 */ 					var height_pt = __call__ (__imul__, null, height_pt, self.graphics_raster_magnification);
/* 000607 */ 				}
/* 000607 */ 			}
/* 000608 */ 			else if (__t__ (__eq__ (graphics_resource.graphics_type, 'vector'))) {
/* 000609 */ 				if (__t__ (width_pt !== null)) {
/* 000610 */ 					var width_pt = __call__ (__imul__, null, width_pt, self.graphics_vector_magnification);
/* 000610 */ 				}
/* 000611 */ 				if (__t__ (height_pt !== null)) {
/* 000612 */ 					var height_pt = __call__ (__imul__, null, height_pt, self.graphics_vector_magnification);
/* 000612 */ 				}
/* 000612 */ 			}
/* 000614 */ 			if (__t__ (width_pt !== null)) {
/* 000615 */ 				(function () {
/* 000615 */ 					var __accu0__ = styparts;
/* 000615 */ 					return __call__ (__accu0__.append, __accu0__, 'width:{}pt'.format (width_pt));
/* 000615 */ 				}) ();
/* 000615 */ 			}
/* 000616 */ 			if (__t__ (height_pt !== null)) {
/* 000617 */ 				(function () {
/* 000617 */ 					var __accu0__ = styparts;
/* 000617 */ 					return __call__ (__accu0__.append, __accu0__, 'height:{}pt'.format (height_pt));
/* 000617 */ 				}) ();
/* 000617 */ 			}
/* 000617 */ 		}
/* 000619 */ 		if (__t__ (styparts)) {
/* 000620 */ 			__setitem__ (imgattrs, 'style', (function () {
/* 000620 */ 				var __accu0__ = ';';
/* 000620 */ 				return __call__ (__accu0__.join, __accu0__, styparts);
/* 000620 */ 			}) ());
/* 000620 */ 		}
/* 000622 */ 		var src_url = graphics_resource.src_url;
/* 000623 */ 		__setitem__ (imgattrs, 'src', src_url);
/* 000625 */ 		if (__t__ (__t__ (graphics_resource.srcset !== null) && __call__ (len, null, graphics_resource.srcset))) {
/* 000626 */ 			__setitem__ (imgattrs, 'srcset', graphics_resource.srcset);
/* 000626 */ 		}
/* 000629 */ 		return (function () {
/* 000629 */ 			var __accu0__ = self;
/* 000629 */ 			return __call__ (__accu0__.generate_open_tag, __accu0__, 'img', __kwargtrans__ ({attrs: imgattrs}));
/* 000629 */ 		}) ();
/* 000629 */ 	});},
/* 000632 */ 	get render_cells () {return __get__ (this, function (self, cells_model, render_context, target_id) {
/* 000632 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000632 */ 			var target_id = null;
/* 000632 */ 		};
/* 000632 */ 		if (arguments.length) {
/* 000632 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000632 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000632 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000632 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000632 */ 					switch (__attrib0__) {
/* 000632 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000632 */ 						case 'cells_model': var cells_model = __allkwargs0__ [__attrib0__]; break;
/* 000632 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000632 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000632 */ 					}
/* 000632 */ 				}
/* 000632 */ 			}
/* 000632 */ 		}
/* 000632 */ 		else {
/* 000632 */ 		}
/* 000634 */ 		var __left0__ = tuple ([__call__ (len, null, cells_model.grid_data), __call__ (len, null, __getitem__ (cells_model.grid_data, 0))]);
/* 000634 */ 		var tabheight = __left0__ [0];
/* 000634 */ 		var tabwidth = __left0__ [1];
/* 000636 */ 		var data_items = [];
/* 000637 */ 		var row_j = 0;
/* 000638 */ 		while (__t__ (__lt__ (row_j, __call__ (len, null, cells_model.grid_data)))) {
/* 000639 */ 			var row_items = [];
/* 000640 */ 			var col_j = 0;
/* 000641 */ 			while (__t__ (__lt__ (col_j, __call__ (len, null, __getitem__ (cells_model.grid_data, row_j))))) {
/* 000643 */ 				var grid_cell_data = __getitem__ (__getitem__ (cells_model.grid_data, row_j), col_j);
/* 000645 */ 				if (__t__ (__t__ (grid_cell_data === null) || __getitem__ (grid_cell_data, 'cell') === null)) {
/* 000648 */ 					(function () {
/* 000648 */ 						var __accu0__ = row_items;
/* 000648 */ 						return __call__ (__accu0__.append, __accu0__, (function () {
/* 000648 */ 							var __accu1__ = self;
/* 000648 */ 							return __call__ (__accu1__.wrap_in_tag, __accu1__, 'td', '', __kwargtrans__ ({class_names: ['cell-empty']}));
/* 000648 */ 						}) ());
/* 000648 */ 					}) ();
/* 000653 */ 					var col_j = __call__ (__iadd__, null, col_j, 1);
/* 000653 */ 					continue;
/* 000653 */ 				}
/* 000656 */ 				if (__t__ (__getitem__ (grid_cell_data, 'is_topleft'))) {
/* 000658 */ 					var cell = __getitem__ (grid_cell_data, 'cell');
/* 000659 */ 					var rendered_cell_contents = (function () {
/* 000659 */ 						var __accu0__ = self;
/* 000659 */ 						return __call__ (__accu0__.render_nodelist, __accu0__, cell.content_nodes, __kwargtrans__ ({render_context: render_context}));
/* 000659 */ 					}) ();
/* 000663 */ 					var clsnames = __add__ (['cell'], (function () {
/* 000663 */ 						var __accu0__ = [];
/* 000663 */ 						var __iterable0__ = cell.styles;
/* 000663 */ 						for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000663 */ 							var sty = __getitem__ (__iterable0__, __index0__);
/* 000663 */ 							(function () {
/* 000663 */ 								var __accu1__ = __accu0__;
/* 000663 */ 								return __call__ (__accu1__.append, __accu1__, 'cellstyle-{}'.format (sty));
/* 000663 */ 							}) ();
/* 000663 */ 						}
/* 000663 */ 						return __accu0__;
/* 000663 */ 					}) ());
/* 000664 */ 					if (__t__ (__eq__ (row_j, 0))) {
/* 000665 */ 						(function () {
/* 000665 */ 							var __accu0__ = clsnames;
/* 000665 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-top');
/* 000665 */ 						}) ();
/* 000665 */ 					}
/* 000666 */ 					if (__t__ (__eq__ (col_j, 0))) {
/* 000667 */ 						(function () {
/* 000667 */ 							var __accu0__ = clsnames;
/* 000667 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-left');
/* 000667 */ 						}) ();
/* 000667 */ 					}
/* 000668 */ 					if (__t__ (__eq__ (cell.placement.row_range.end, tabheight))) {
/* 000669 */ 						(function () {
/* 000669 */ 							var __accu0__ = clsnames;
/* 000669 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-bottom');
/* 000669 */ 						}) ();
/* 000669 */ 					}
/* 000670 */ 					if (__t__ (__eq__ (cell.placement.col_range.end, tabwidth))) {
/* 000671 */ 						(function () {
/* 000671 */ 							var __accu0__ = clsnames;
/* 000671 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-right');
/* 000671 */ 						}) ();
/* 000671 */ 					}
/* 000672 */ 					var tagname = 'td';
/* 000673 */ 					if (__t__ (__t__ (__in__ ('H', cell.styles)) || __in__ ('rH', cell.styles))) {
/* 000674 */ 						var tagname = 'th';
/* 000674 */ 					}
/* 000675 */ 					var attrs = dict ({});
/* 000676 */ 					var cplc = cell.placement;
/* 000677 */ 					if (__t__ (__ne__ (cplc.col_range.end, __add__ (cplc.col_range.start, 1)))) {
/* 000680 */ 						__setitem__ (attrs, 'colspan', __call__ (str, null, __sub__ (cplc.col_range.end, cplc.col_range.start)));
/* 000680 */ 					}
/* 000681 */ 					if (__t__ (__ne__ (cplc.row_range.end, __add__ (cplc.row_range.start, 1)))) {
/* 000683 */ 						__setitem__ (attrs, 'rowspan', __call__ (str, null, __sub__ (cplc.row_range.end, cplc.row_range.start)));
/* 000683 */ 					}
/* 000684 */ 					(function () {
/* 000684 */ 						var __accu0__ = row_items;
/* 000685 */ 						return __call__ (__accu0__.append, __accu0__, (function () {
/* 000685 */ 							var __accu1__ = self;
/* 000685 */ 							return __call__ (__accu1__.wrap_in_tag, __accu1__, tagname, rendered_cell_contents, __kwargtrans__ ({attrs: attrs, class_names: clsnames}));
/* 000685 */ 						}) ());
/* 000685 */ 					}) ();
/* 000692 */ 					var col_j = cplc.col_range.end;
/* 000692 */ 					continue;
/* 000692 */ 				}
/* 000697 */ 				var col_j = __call__ (__iadd__, null, col_j, 1);
/* 000697 */ 			}
/* 000699 */ 			(function () {
/* 000699 */ 				var __accu0__ = data_items;
/* 000699 */ 				return __call__ (__accu0__.append, __accu0__, row_items);
/* 000699 */ 			}) ();
/* 000700 */ 			var row_j = __call__ (__iadd__, null, row_j, 1);
/* 000700 */ 		}
/* 000702 */ 		var table_attrs = dict ({});
/* 000703 */ 		if (__t__ (target_id !== null)) {
/* 000704 */ 			__setitem__ (table_attrs, 'id', target_id);
/* 000704 */ 		}
/* 000706 */ 		var s = (function () {
/* 000706 */ 			var __accu0__ = self;
/* 000708 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'table', (function () {
/* 000708 */ 				var __accu1__ = '';
/* 000708 */ 				return __call__ (__accu1__.join, __accu1__, (function () {
/* 000708 */ 					var __accu2__ = [];
/* 000708 */ 					var __iterable0__ = data_items;
/* 000708 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000710 */ 						var row_items = __getitem__ (__iterable0__, __index0__);
/* 000710 */ 						(function () {
/* 000710 */ 							var __accu3__ = __accu2__;
/* 000709 */ 							return __call__ (__accu3__.append, __accu3__, __add__ (__add__ ('<tr>', (function () {
/* 000709 */ 								var __accu4__ = '';
/* 000709 */ 								return __call__ (__accu4__.join, __accu4__, row_items);
/* 000709 */ 							}) ()), '</tr>'));
/* 000709 */ 						}) ();
/* 000709 */ 					}
/* 000709 */ 					return __accu2__;
/* 000709 */ 				}) ());
/* 000709 */ 			}) (), __kwargtrans__ ({attrs: table_attrs, class_names: ['cells']}));
/* 000709 */ 		}) ();
/* 000715 */ 		return s;
/* 000715 */ 	});}
/* 000715 */ });
/* 000721 */ export var _rx_delayed_markers = (function () {
/* 000721 */ 	var __accu0__ = re;
/* 000721 */ 	return __call__ (__accu0__.compile, __accu0__, '<LLM:DLYD:(?P<key>\\d+)\\s*/>');
/* 000721 */ }) ();
/* 000728 */ export var _html_css_global = '\np, ul, ol {\n  margin: 1em 0px;\n}\np:first-child, ul:first-child, ol:first-child {\n  margin-top: 0px;\n}\np:last-child, ul:last-child, ol:last-child {\n  margin-bottom: 0px;\n}\ndd > p, dd > p:first-child, dd > p:last-child {\n  margin: 0.33em 0px;\n}\n\na, a:link, a:hover, a:active, a:visited {\n  color: #3232c8;\n  text-decoration: none;\n}\na:hover {\n  color: #22228a;\n}\n';
/* 000751 */ export var _html_css_content = "\n.emph, .textit {\n  font-style: italic;\n}\n.textbf {\n  font-weight: bold;\n}\n\nh1 {\n  font-size: 1.6rem;\n  line-height: 1.3em;\n  font-weight: bold;\n  margin: 1em 0px;\n}\nh2 {\n  font-size: 1.3rem;\n  line-height: 1.3em;\n  font-weight: bold;\n  margin: 1em 0px;\n}\nh3 {\n  font-size: 1rem;\n  font-weight: bold;\n  margin: 1em 0px;\n}\n\n.heading-level-4 {\n  font-style: italic;\n  display: inline;\n}\n.heading-level-4::after {\n  display: inline-block;\n  margin: 0px .12em;\n  content: '—';\n}\n\n.heading-level-5 {\n  font-style: italic;\n  font-size: .9em;\n  display: inline;\n}\n.heading-level-5::after {\n  display: inline-block;\n  margin-right: .12em;\n  content: '';\n}\n\n.heading-level-6 {\n  font-style: italic;\n  font-size: .8em;\n  display: inline;\n}\n.heading-level-6::after {\n  display: inline-block;\n  margin-right: .06em;\n  content: '';\n}\n\ndl.enumeration {\n  display: block;\n  margin-left: 2.5em;\n}\ndl.enumeration > dt {\n  float: left;\n  clear: left;\n  display: inline-block;\n  /*margin: 0px; */\n  margin-left: -2.5em;\n  width: 2.0em;\n  min-width: 2.0em;\n  max-width: 2.0em;\n  margin-right: 0.5em;\n  text-align: right;\n}\ndl.enumeration > dd {\n  /*display: inline-block;\n  width: 100%;*/\n  border: 0px;\n  padding: 0px;\n  margin: 0px;\n}\n\nfigure.float {\n  width: 100%;\n  border-width: 1px 0px 1px 0px;\n  border-style: solid none solid none;\n  border-color: rgba(120, 120, 140, 0.15);\n  margin: 0.5rem 0px;\n  padding: 0.5rem 0px;\n}\n\nfigure.float .float-contents {\n  width: 100%;\n  max-width: 100%;\n  overflow-x: auto;\n}\n\nfigure.float .float-contents img {\n  display: block;\n  margin: 0pt auto;\n  padding: 0pt;\n  border: 0pt;\n  margin: 0px auto;\n}\n\nfigure.float figcaption {\n  display: block;\n  margin-top: 0.5em;\n  margin: 0.75em 2em 0px;\n  text-align: center;\n}\n\nfigure.float figcaption > span {\n  display: inline-block;\n  font-style: italic;\n  text-align: left;\n}\n\ntable {\n  margin: 1em 0px 1em 0px;\n  border-collapse: separate;\n  border-spacing: 0px;\n  /*border-top: solid 1pt;\n  border-bottom: solid 1pt;*/\n}\nfigure.float .float-contents table {\n  margin: 0px auto;\n}\ntd {\n  padding: 0.3em 0.5em;\n  border: none 0px;\n}\nth {\n  padding: 0.3em 0.5em;\n  border: none 0px;\n}\n.cellstyle-H {\n  border-bottom: solid .5pt;\n}\n.cellstyle-rH {\n}\n.cellstyle-l {\n  text-align: left;\n}\n.cellstyle-c {\n  text-align: center;\n}\n.cellstyle-r {\n  text-align: right;\n}\n.cellstyle-green {\n  background-color: rgb(200,255,200);\n}\n.cellstyle-blue {\n  background-color: rgb(200,220,255);\n}\n.cellstyle-yellow {\n  background-color: rgb(255,255,200);\n}\n.cellstyle-red {\n  background-color: rgb(255,200,200);\n}\n.cellstyle-lvert {\n  border-left: solid .5pt;\n}\n.cellstyle-rvert {\n  border-right: solid .5pt;\n}\n\n.celltbledge-top {\n  border-top: solid 1pt;\n}\n.celltbledge-bottom {\n  border-bottom: solid 1pt;\n}\n\n.verbatimcode {\n  font-family: monospace;\n  font-size: 0.9em;\n  background-color: rgba(127,127,127,0.25);\n  border-radius: 2px;\n  padding: 1px 2px;\n  display: inline-block;\n  white-space: pre-wrap;\n}\n.verbatima {\n  font-style: italic;\n}\n.verbatimcode-environment {\n  display: block;\n  margin: 0.75em 0px 1em;\n  white-space: pre;\n}\n\n.defterm {\n  font-style: italic;\n}\n\n.defterm .defterm-term {\n  font-style: italic;\n  font-weight: bold;\n}\n\n.display-math {\n  width: 100%;\n  max-width: 100%;\n  display: block;\n  overflow-x: auto;\n}\n\n.endnotes, .citations {\n  font-size: 0.8em;\n  display: inline-block;\n  vertical-align: 0.3em;\n  margin-top: -0.3em;\n}\n.citation {\n}\n.footnote {\n}\ndl.citation-list > dt, dl.footnote-list > dt {\n  font-size: 0.8em;\n  display: inline-block;\n  vertical-align: 0.3em;\n  margin-top: -0.3em;\n}\n";
/* 000980 */ export var _html_js_mathjax = '\nMathJax = {\n    tex: {\n        inlineMath: [[\'\\\\(\', \'\\\\)\']],\n        displayMath: [[\'\\\\[\', \'\\\\]\']],\n        processEnvironments: true,\n        processRefs: true,\n\n        // equation numbering on\n        tags: \'ams\'\n    },\n    options: {\n        // all MathJax content is marked with CSS classes\n        // skipHtmlTags: \'body\',\n        // processHtmlClass: \'display-math|inline-math\',\n    },\n    startup: {\n        pageReady: function() {\n            // override the default "typeset everything on the page" behavior to\n            // only typeset whatever we have explicitly marked as math\n            return typesetPageMathPromise();\n        }\n    }\n};\nfunction typesetPageMathPromise()\n{\n    var elements = document.querySelectorAll(\'.display-math, .inline-math\');\n    return MathJax.typesetPromise(elements);\n}\n';
/* 001011 */ export var _html_body_end_js_scripts_mathjax = '\n<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>\n<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>\n';
/* 001019 */ export var get_html_css_global = function (html_fragment_renderer) {
/* 001019 */ 	if (arguments.length) {
/* 001019 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001019 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001019 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001019 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001019 */ 				switch (__attrib0__) {
/* 001019 */ 					case 'html_fragment_renderer': var html_fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 001019 */ 				}
/* 001019 */ 			}
/* 001019 */ 		}
/* 001019 */ 	}
/* 001019 */ 	else {
/* 001019 */ 	}
/* 001020 */ 	return _html_css_global;
/* 001020 */ };
/* 001022 */ export var get_html_css_content = function (html_fragment_renderer) {
/* 001022 */ 	if (arguments.length) {
/* 001022 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001022 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001022 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001022 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001022 */ 				switch (__attrib0__) {
/* 001022 */ 					case 'html_fragment_renderer': var html_fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 001022 */ 				}
/* 001022 */ 			}
/* 001022 */ 		}
/* 001022 */ 	}
/* 001022 */ 	else {
/* 001022 */ 	}
/* 001023 */ 	return _html_css_content;
/* 001023 */ };
/* 001025 */ export var get_html_js = function (html_fragment_renderer) {
/* 001025 */ 	if (arguments.length) {
/* 001025 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001025 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001025 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001025 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001025 */ 				switch (__attrib0__) {
/* 001025 */ 					case 'html_fragment_renderer': var html_fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 001025 */ 				}
/* 001025 */ 			}
/* 001025 */ 		}
/* 001025 */ 	}
/* 001025 */ 	else {
/* 001025 */ 	}
/* 001026 */ 	if (__t__ (html_fragment_renderer.use_mathjax)) {
/* 001027 */ 		return _html_js_mathjax;
/* 001027 */ 	}
/* 001028 */ 	return '';
/* 001028 */ };
/* 001030 */ export var get_html_body_end_js_scripts = function (html_fragment_renderer) {
/* 001030 */ 	if (arguments.length) {
/* 001030 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001030 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001030 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001030 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001030 */ 				switch (__attrib0__) {
/* 001030 */ 					case 'html_fragment_renderer': var html_fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 001030 */ 				}
/* 001030 */ 			}
/* 001030 */ 		}
/* 001030 */ 	}
/* 001030 */ 	else {
/* 001030 */ 	}
/* 001031 */ 	if (__t__ (html_fragment_renderer.use_mathjax)) {
/* 001032 */ 		return _html_body_end_js_scripts_mathjax;
/* 001032 */ 	}
/* 001033 */ 	return '';
/* 001033 */ };
/* 001039 */ export var FragmentRendererInformation =  __class__ ('FragmentRendererInformation', [object], {
/* 001039 */ 	__module__: __name__,
/* 001040 */ 	FragmentRendererClass: HtmlFragmentRenderer,
/* 001043 */ 	get get_style_information () {return function (fragment_renderer) {
/* 001043 */ 		if (arguments.length) {
/* 001043 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001043 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001043 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001043 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001043 */ 					switch (__attrib0__) {
/* 001043 */ 						case 'fragment_renderer': var fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 001043 */ 					}
/* 001043 */ 				}
/* 001043 */ 			}
/* 001043 */ 		}
/* 001043 */ 		else {
/* 001043 */ 		}
/* 001048 */ 		return dict ({'css_global': __call__ (get_html_css_global, null, fragment_renderer), 'css_content': __call__ (get_html_css_content, null, fragment_renderer), 'js': __call__ (get_html_js, null, fragment_renderer), 'body_end_js_scripts': __call__ (get_html_body_end_js_scripts, null, fragment_renderer)});
/* 001048 */ 	};},
/* 001051 */ 	format_name: 'html'
/* 001051 */ });
/* 000006 */ 
//# sourceMappingURL=llm.fragmentrenderer.html.map