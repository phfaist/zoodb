/* 000001 */ // Transcrypt'ed from Python, 2023-08-06 17:30:21
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
/* 000106 */ 	use_mathjax: true,
/* 000114 */ 	get htmlescape () {return __get__ (this, function (self, value) {
/* 000114 */ 		if (arguments.length) {
/* 000114 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000114 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000114 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000114 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000114 */ 					switch (__attrib0__) {
/* 000114 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000114 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000114 */ 					}
/* 000114 */ 				}
/* 000114 */ 			}
/* 000114 */ 		}
/* 000114 */ 		else {
/* 000114 */ 		}
/* 000115 */ 		var esc = (function () {
/* 000115 */ 			var __accu0__ = html;
/* 000115 */ 			return __call__ (__accu0__.escape, __accu0__, value);
/* 000115 */ 		}) ();
/* 000117 */ 		var esc = (function () {
/* 000117 */ 			var __accu0__ = (function () {
/* 000117 */ 				var __accu1__ = (function () {
/* 000117 */ 					var __accu2__ = (function () {
/* 000117 */ 						var __accu3__ = (function () {
/* 000117 */ 							var __accu4__ = (function () {
/* 000117 */ 								var __accu5__ = (function () {
/* 000117 */ 									var __accu6__ = esc;
/* 000117 */ 									return __call__ (__accu6__.py_replace, __accu6__, '\xa0', '&nbsp;');
/* 000117 */ 								}) ();
/* 000117 */ 								return __call__ (__accu5__.py_replace, __accu5__, '\u200a', '&hairsp;');
/* 000117 */ 							}) ();
/* 000118 */ 							return __call__ (__accu4__.py_replace, __accu4__, '\u2009', '&thinsp;');
/* 000118 */ 						}) ();
/* 000119 */ 						return __call__ (__accu3__.py_replace, __accu3__, '\u2008', '&puncsp;');
/* 000119 */ 					}) ();
/* 000120 */ 					return __call__ (__accu2__.py_replace, __accu2__, '\u2002', '&ensp;');
/* 000120 */ 				}) ();
/* 000121 */ 				return __call__ (__accu1__.py_replace, __accu1__, '\u2003', '&emsp;');
/* 000121 */ 			}) ();
/* 000122 */ 			return __call__ (__accu0__.py_replace, __accu0__, '\u2007', '&numsp;');
/* 000122 */ 		}) ();
/* 000125 */ 		return esc;
/* 000125 */ 	});},
/* 000127 */ 	get htmlescape_double_quoted_attribute_value () {return __get__ (this, function (self, value) {
/* 000127 */ 		if (arguments.length) {
/* 000127 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000127 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000127 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000127 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000127 */ 					switch (__attrib0__) {
/* 000127 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000127 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000127 */ 					}
/* 000127 */ 				}
/* 000127 */ 			}
/* 000127 */ 		}
/* 000127 */ 		else {
/* 000127 */ 		}
/* 000129 */ 		if (__t__ (self.aggressively_escape_html_attributes)) {
/* 000130 */ 			return (function () {
/* 000130 */ 				var __accu0__ = self;
/* 000130 */ 				return __call__ (__accu0__.htmlescape, __accu0__, value);
/* 000130 */ 			}) ();
/* 000130 */ 		}
/* 000140 */ 		var value = (function () {
/* 000140 */ 			var __accu0__ = _rx_html_entity;
/* 000140 */ 			return __call__ (__accu0__.sub, __accu0__, (function __lambda__ (m) {
/* 000140 */ 				if (arguments.length) {
/* 000140 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000140 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000140 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000140 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000140 */ 							switch (__attrib0__) {
/* 000140 */ 								case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000140 */ 							}
/* 000140 */ 						}
/* 000140 */ 					}
/* 000140 */ 				}
/* 000140 */ 				else {
/* 000140 */ 				}
/* 000140 */ 				return __add__ (__add__ ('&amp;', (function () {
/* 000140 */ 					var __accu1__ = m;
/* 000140 */ 					return __call__ (__accu1__.group, __accu1__, 1);
/* 000140 */ 				}) ()), ';');
/* 000140 */ 			}), value);
/* 000140 */ 		}) ();
/* 000142 */ 		var value = (function () {
/* 000142 */ 			var __accu0__ = value;
/* 000142 */ 			return __call__ (__accu0__.py_replace, __accu0__, '"', '&quot;');
/* 000142 */ 		}) ();
/* 000143 */ 		return value;
/* 000143 */ 	});},
/* 000145 */ 	get generate_open_tag () {return __get__ (this, function (self, tagname) {
/* 000145 */ 		var attrs = null;
/* 000145 */ 		var class_names = null;
/* 000145 */ 		var self_close_tag = false;
/* 000145 */ 		if (arguments.length) {
/* 000145 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000145 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000145 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000145 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000145 */ 					switch (__attrib0__) {
/* 000145 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000145 */ 						case 'tagname': var tagname = __allkwargs0__ [__attrib0__]; break;
/* 000145 */ 						case 'attrs': var attrs = __allkwargs0__ [__attrib0__]; break;
/* 000145 */ 						case 'class_names': var class_names = __allkwargs0__ [__attrib0__]; break;
/* 000145 */ 						case 'self_close_tag': var self_close_tag = __allkwargs0__ [__attrib0__]; break;
/* 000145 */ 					}
/* 000145 */ 				}
/* 000145 */ 			}
/* 000145 */ 		}
/* 000145 */ 		else {
/* 000145 */ 		}
/* 000146 */ 		var s = '<{}'.format (tagname);
/* 000147 */ 		if (__t__ (!__t__ ((attrs)))) {
/* 000148 */ 			var attrs = dict ({});
/* 000148 */ 		}
/* 000149 */ 		var attrs = __call__ (dict, null, attrs);
/* 000150 */ 		if (__t__ (__in__ ('class', attrs))) {
/* 000151 */ 			var __except0__ = __call__ (ValueError, null, "generate_open_tag(): set HTML 'class' attribute with class_names=, not with attrs=");
/* 000151 */ 			__except0__.__cause__ = null;
/* 000151 */ 			throw __except0__;
/* 000151 */ 		}
/* 000155 */ 		if (__t__ (class_names)) {
/* 000156 */ 			__setitem__ (attrs, 'class', (function () {
/* 000156 */ 				var __accu0__ = ' ';
/* 000156 */ 				return __call__ (__accu0__.join, __accu0__, class_names);
/* 000156 */ 			}) ());
/* 000156 */ 		}
/* 000157 */ 		if (__t__ (attrs)) {
/* 000158 */ 			var __iterable0__ = (function () {
/* 000158 */ 				var __accu0__ = attrs;
/* 000158 */ 				return __call__ (__accu0__.py_items, __accu0__);
/* 000158 */ 			}) ();
/* 000158 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000158 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000158 */ 				var aname = __left0__ [0];
/* 000158 */ 				var aval = __left0__ [1];
/* 000159 */ 				var s = __call__ (__iadd__, null, s, ' {}="{}"'.format (aname, (function () {
/* 000159 */ 					var __accu0__ = self;
/* 000159 */ 					return __call__ (__accu0__.htmlescape_double_quoted_attribute_value, __accu0__, aval);
/* 000159 */ 				}) ()));
/* 000159 */ 			}
/* 000159 */ 		}
/* 000160 */ 		if (__t__ (self_close_tag)) {
/* 000161 */ 			var s = __call__ (__iadd__, null, s, '/>');
/* 000161 */ 		}
/* 000162 */ 		else {
/* 000163 */ 			var s = __call__ (__iadd__, null, s, '>');
/* 000163 */ 		}
/* 000164 */ 		return s;
/* 000164 */ 	});},
/* 000166 */ 	get wrap_in_tag () {return __get__ (this, function (self, tagname, content_html) {
/* 000166 */ 		var attrs = null;
/* 000166 */ 		var class_names = null;
/* 000166 */ 		if (arguments.length) {
/* 000166 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000166 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000166 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000166 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000166 */ 					switch (__attrib0__) {
/* 000166 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000166 */ 						case 'tagname': var tagname = __allkwargs0__ [__attrib0__]; break;
/* 000166 */ 						case 'content_html': var content_html = __allkwargs0__ [__attrib0__]; break;
/* 000166 */ 						case 'attrs': var attrs = __allkwargs0__ [__attrib0__]; break;
/* 000166 */ 						case 'class_names': var class_names = __allkwargs0__ [__attrib0__]; break;
/* 000166 */ 					}
/* 000166 */ 				}
/* 000166 */ 			}
/* 000166 */ 		}
/* 000166 */ 		else {
/* 000166 */ 		}
/* 000168 */ 		var s = (function () {
/* 000168 */ 			var __accu0__ = self;
/* 000168 */ 			return __call__ (__accu0__.generate_open_tag, __accu0__, tagname, __kwargtrans__ ({attrs: attrs, class_names: class_names}));
/* 000168 */ 		}) ();
/* 000169 */ 		var s = __call__ (__iadd__, null, s, __call__ (str, null, content_html));
/* 000170 */ 		var s = __call__ (__iadd__, null, s, '</{}>'.format (tagname));
/* 000171 */ 		return s;
/* 000171 */ 	});},
/* 000173 */ 	get wrap_in_link () {return __get__ (this, function (self, display_html, target_href) {
/* 000173 */ 		var class_names = null;
/* 000173 */ 		if (arguments.length) {
/* 000173 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000173 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000173 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000173 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000173 */ 					switch (__attrib0__) {
/* 000173 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000173 */ 						case 'display_html': var display_html = __allkwargs0__ [__attrib0__]; break;
/* 000173 */ 						case 'target_href': var target_href = __allkwargs0__ [__attrib0__]; break;
/* 000173 */ 						case 'class_names': var class_names = __allkwargs0__ [__attrib0__]; break;
/* 000173 */ 					}
/* 000173 */ 				}
/* 000173 */ 			}
/* 000173 */ 		}
/* 000173 */ 		else {
/* 000173 */ 		}
/* 000174 */ 		if (__t__ (!__t__ ((target_href)))) {
/* 000175 */ 			var target_href = '#';
/* 000175 */ 		}
/* 000176 */ 		var attrs = dict ({'href': target_href});
/* 000179 */ 		if (__t__ (__call__ (callable, null, self.use_link_target_blank))) {
/* 000180 */ 			if (__t__ ((function () {
/* 000180 */ 				var __accu0__ = self;
/* 000180 */ 				return __call__ (__accu0__.use_link_target_blank, __accu0__, target_href);
/* 000180 */ 			}) ())) {
/* 000181 */ 				__setitem__ (attrs, 'target', '_blank');
/* 000181 */ 			}
/* 000181 */ 		}
/* 000182 */ 		else if (__t__ (__t__ (self.use_link_target_blank) && !__t__ (((function () {
/* 000182 */ 			var __accu0__ = target_href;
/* 000182 */ 			return __call__ (__accu0__.startswith, __accu0__, '#');
/* 000182 */ 		}) ())))) {
/* 000183 */ 			__setitem__ (attrs, 'target', '_blank');
/* 000183 */ 		}
/* 000184 */ 		return (function () {
/* 000184 */ 			var __accu0__ = self;
/* 000184 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'a', display_html, __kwargtrans__ ({attrs: attrs, class_names: class_names}));
/* 000184 */ 		}) ();
/* 000184 */ 	});},
/* 000193 */ 	get render_build_paragraph () {return __get__ (this, function (self, nodelist, render_context) {
/* 000193 */ 		if (arguments.length) {
/* 000193 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000193 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000193 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000193 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000193 */ 					switch (__attrib0__) {
/* 000193 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000193 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000193 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000193 */ 					}
/* 000193 */ 				}
/* 000193 */ 			}
/* 000193 */ 		}
/* 000193 */ 		else {
/* 000193 */ 		}
/* 000196 */ 		return __add__ (__add__ ('<p>', (function () {
/* 000196 */ 			var __accu0__ = self;
/* 000196 */ 			return __call__ (__accu0__.render_inline_content, __accu0__, nodelist, render_context);
/* 000196 */ 		}) ()), '</p>');
/* 000196 */ 	});},
/* 000200 */ 	get render_inline_content () {return __get__ (this, function (self, nodelist, render_context) {
/* 000200 */ 		if (arguments.length) {
/* 000200 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000200 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000200 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000200 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000200 */ 					switch (__attrib0__) {
/* 000200 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000200 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000200 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000200 */ 					}
/* 000200 */ 				}
/* 000200 */ 			}
/* 000200 */ 		}
/* 000200 */ 		else {
/* 000200 */ 		}
/* 000201 */ 		return (function () {
/* 000201 */ 			var __accu0__ = self;
/* 000201 */ 			return __call__ (__accu0__.render_join, __accu0__, (function () {
/* 000201 */ 				var __accu1__ = [];
/* 000202 */ 				var __iterable0__ = nodelist;
/* 000202 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000202 */ 					var n = __getitem__ (__iterable0__, __index0__);
/* 000202 */ 					(function () {
/* 000202 */ 						var __accu2__ = __accu1__;
/* 000202 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000202 */ 							var __accu3__ = self;
/* 000202 */ 							return __call__ (__accu3__.render_node, __accu3__, n, render_context);
/* 000202 */ 						}) ());
/* 000202 */ 					}) ();
/* 000202 */ 				}
/* 000202 */ 				return __accu1__;
/* 000202 */ 			}) (), render_context);
/* 000202 */ 		}) ();
/* 000202 */ 	});},
/* 000206 */ 	get render_join () {return __get__ (this, function (self, content_list, render_context) {
/* 000206 */ 		if (arguments.length) {
/* 000206 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000206 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000206 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000206 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000206 */ 					switch (__attrib0__) {
/* 000206 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000206 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000206 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000206 */ 					}
/* 000206 */ 				}
/* 000206 */ 			}
/* 000206 */ 		}
/* 000206 */ 		else {
/* 000206 */ 		}
/* 000212 */ 		return (function () {
/* 000212 */ 			var __accu0__ = '';
/* 000212 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000212 */ 				var __accu1__ = [];
/* 000212 */ 				var __iterable0__ = content_list;
/* 000212 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000212 */ 					var s = __getitem__ (__iterable0__, __index0__);
/* 000212 */ 					(function () {
/* 000212 */ 						var __accu2__ = __accu1__;
/* 000212 */ 						return __call__ (__accu2__.append, __accu2__, __call__ (str, null, s));
/* 000212 */ 					}) ();
/* 000212 */ 				}
/* 000212 */ 				return __accu1__;
/* 000212 */ 			}) ());
/* 000212 */ 		}) ();
/* 000212 */ 	});},
/* 000214 */ 	get render_join_blocks () {return __get__ (this, function (self, content_list, render_context) {
/* 000214 */ 		if (arguments.length) {
/* 000214 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000214 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000214 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000214 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000214 */ 					switch (__attrib0__) {
/* 000214 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000214 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000214 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000214 */ 					}
/* 000214 */ 				}
/* 000214 */ 			}
/* 000214 */ 		}
/* 000214 */ 		else {
/* 000214 */ 		}
/* 000222 */ 		return (function () {
/* 000222 */ 			var __accu0__ = self.html_blocks_joiner;
/* 000222 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000222 */ 				var __accu1__ = [];
/* 000223 */ 				var __iterable0__ = content_list;
/* 000223 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000223 */ 					var c = __getitem__ (__iterable0__, __index0__);
/* 000223 */ 					if (__t__ (__t__ (c !== null) && __call__ (len, null, c))) {
/* 000223 */ 						(function () {
/* 000223 */ 							var __accu2__ = __accu1__;
/* 000223 */ 							return __call__ (__accu2__.append, __accu2__, c);
/* 000223 */ 						}) ();
/* 000223 */ 					}
/* 000223 */ 				}
/* 000223 */ 				return __accu1__;
/* 000223 */ 			}) ());
/* 000223 */ 		}) ();
/* 000223 */ 	});},
/* 000229 */ 	get render_value () {return __get__ (this, function (self, value, render_context) {
/* 000229 */ 		if (arguments.length) {
/* 000229 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000229 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000229 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000229 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000229 */ 					switch (__attrib0__) {
/* 000229 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000229 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000229 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000229 */ 					}
/* 000229 */ 				}
/* 000229 */ 			}
/* 000229 */ 		}
/* 000229 */ 		else {
/* 000229 */ 		}
/* 000230 */ 		return (function () {
/* 000230 */ 			var __accu0__ = self;
/* 000230 */ 			return __call__ (__accu0__.htmlescape, __accu0__, value);
/* 000230 */ 		}) ();
/* 000230 */ 	});},
/* 000232 */ 	get render_empty_error_placeholder () {return __get__ (this, function (self, debug_str, render_context) {
/* 000232 */ 		if (arguments.length) {
/* 000232 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000232 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000232 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000232 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000232 */ 					switch (__attrib0__) {
/* 000232 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000232 */ 						case 'debug_str': var debug_str = __allkwargs0__ [__attrib0__]; break;
/* 000232 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000232 */ 					}
/* 000232 */ 				}
/* 000232 */ 			}
/* 000232 */ 		}
/* 000232 */ 		else {
/* 000232 */ 		}
/* 000233 */ 		var debug_str_safe = (function () {
/* 000233 */ 			var __accu0__ = debug_str;
/* 000233 */ 			return __call__ (__accu0__.py_replace, __accu0__, '--', '- - ');
/* 000233 */ 		}) ();
/* 000234 */ 		return '<span class="empty-error-placeholder"><!-- {} -->(?)</span>'.format (debug_str_safe);
/* 000234 */ 	});},
/* 000236 */ 	get render_nothing () {return __get__ (this, function (self, render_context, annotations) {
/* 000236 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000236 */ 			var annotations = null;
/* 000236 */ 		};
/* 000236 */ 		if (arguments.length) {
/* 000236 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000236 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000236 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000236 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000236 */ 					switch (__attrib0__) {
/* 000236 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000236 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000236 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000236 */ 					}
/* 000236 */ 				}
/* 000236 */ 			}
/* 000236 */ 		}
/* 000236 */ 		else {
/* 000236 */ 		}
/* 000237 */ 		if (__t__ (!__t__ ((self.render_nothing_as_comment_with_annotations)))) {
/* 000238 */ 			return '';
/* 000238 */ 		}
/* 000239 */ 		if (__t__ (!__t__ ((annotations)))) {
/* 000240 */ 			var annotations = [];
/* 000240 */ 		}
/* 000241 */ 		var annotations = (function () {
/* 000241 */ 			var __accu0__ = [];
/* 000241 */ 			var __iterable0__ = annotations;
/* 000241 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000241 */ 				var a = __getitem__ (__iterable0__, __index0__);
/* 000241 */ 				(function () {
/* 000241 */ 					var __accu1__ = __accu0__;
/* 000241 */ 					return __call__ (__accu1__.append, __accu1__, (function () {
/* 000241 */ 						var __accu2__ = a;
/* 000241 */ 						return __call__ (__accu2__.py_replace, __accu2__, '--', '- - ');
/* 000241 */ 					}) ());
/* 000241 */ 				}) ();
/* 000241 */ 			}
/* 000241 */ 			return __accu0__;
/* 000241 */ 		}) ();
/* 000242 */ 		return (function () {
/* 000242 */ 			var __accu0__ = '<!-- {} -->';
/* 000242 */ 			return __call__ (__accu0__.format, __accu0__, (function () {
/* 000242 */ 				var __accu1__ = ' ';
/* 000242 */ 				return __call__ (__accu1__.join, __accu1__, annotations);
/* 000242 */ 			}) ());
/* 000242 */ 		}) ();
/* 000242 */ 	});},
/* 000244 */ 	verbatim_highlight_spaces: false,
/* 000245 */ 	verbatim_protect_backslashes: true,
/* 000247 */ 	get render_verbatim () {return __get__ (this, function (self, value, render_context) {
/* 000247 */ 		var is_block_level = false;
/* 000247 */ 		var annotations = null;
/* 000247 */ 		var target_id = null;
/* 000247 */ 		if (arguments.length) {
/* 000247 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000247 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000247 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000247 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000247 */ 					switch (__attrib0__) {
/* 000247 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000247 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000247 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000247 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000247 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000247 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000247 */ 					}
/* 000247 */ 				}
/* 000247 */ 			}
/* 000247 */ 		}
/* 000247 */ 		else {
/* 000247 */ 		}
/* 000249 */ 		var attrs = dict ({});
/* 000250 */ 		if (__t__ (target_id !== null)) {
/* 000251 */ 			__setitem__ (attrs, 'id', target_id);
/* 000251 */ 		}
/* 000252 */ 		var escaped = (function () {
/* 000252 */ 			var __accu0__ = self;
/* 000252 */ 			return __call__ (__accu0__.htmlescape, __accu0__, value);
/* 000252 */ 		}) ();
/* 000253 */ 		if (__t__ (self.verbatim_protect_backslashes)) {
/* 000255 */ 			var escaped = (function () {
/* 000255 */ 				var __accu0__ = escaped;
/* 000255 */ 				return __call__ (__accu0__.py_replace, __accu0__, '\\', '<span>\\</span>');
/* 000255 */ 			}) ();
/* 000255 */ 		}
/* 000256 */ 		if (__t__ (self.verbatim_highlight_spaces)) {
/* 000257 */ 			var escaped = (function () {
/* 000257 */ 				var __accu0__ = escaped;
/* 000257 */ 				return __call__ (__accu0__.py_replace, __accu0__, ' ', '<span class="verbatimspace">&nbsp;</span>');
/* 000257 */ 			}) ();
/* 000257 */ 		}
/* 000260 */ 		var tag = 'span';
/* 000261 */ 		var __iterable0__ = annotations;
/* 000261 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000261 */ 			var annotation = __getitem__ (__iterable0__, __index0__);
/* 000262 */ 			if (__t__ (__in__ (annotation, tuple (['verbatimcode-environment'])))) {
/* 000264 */ 				var tag = 'div';
/* 000264 */ 			}
/* 000264 */ 		}
/* 000265 */ 		return (function () {
/* 000265 */ 			var __accu0__ = self;
/* 000265 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, tag, escaped, __kwargtrans__ ({class_names: (__t__ (annotations) ? annotations : ['verbatimtext']), attrs: attrs}));
/* 000265 */ 		}) ();
/* 000265 */ 	});},
/* 000272 */ 	get render_math_content () {return __get__ (this, function (self, delimiters, nodelist, render_context, displaytype, environmentname, target_id) {
/* 000272 */ 		if (typeof environmentname == 'undefined' || (environmentname != null && environmentname.hasOwnProperty ("__kwargtrans__"))) {;
/* 000272 */ 			var environmentname = null;
/* 000272 */ 		};
/* 000272 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000272 */ 			var target_id = null;
/* 000272 */ 		};
/* 000272 */ 		if (arguments.length) {
/* 000272 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000272 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000272 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000272 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000272 */ 					switch (__attrib0__) {
/* 000272 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000272 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000272 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000272 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000272 */ 						case 'displaytype': var displaytype = __allkwargs0__ [__attrib0__]; break;
/* 000272 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000272 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000272 */ 					}
/* 000272 */ 				}
/* 000272 */ 			}
/* 000272 */ 		}
/* 000272 */ 		else {
/* 000272 */ 		}
/* 000280 */ 		if (__t__ (!__t__ ((self.use_mathjax)))) {
/* 000281 */ 			(function () {
/* 000281 */ 				var __accu0__ = logger;
/* 000281 */ 				return __call__ (__accu0__.warning, __accu0__, 'called HtmlFragmentRenderer.render_math_content() but self.use_mathjax is not set. Your math will probably not render correctly.');
/* 000281 */ 			}) ();
/* 000281 */ 		}
/* 000287 */ 		var class_names = ['{}-math'.format (displaytype)];
/* 000288 */ 		if (__t__ (environmentname !== null)) {
/* 000289 */ 			(function () {
/* 000289 */ 				var __accu0__ = class_names;
/* 000289 */ 				return __call__ (__accu0__.append, __accu0__, 'env-{}'.format ((function () {
/* 000289 */ 					var __accu1__ = environmentname;
/* 000289 */ 					return __call__ (__accu1__.py_replace, __accu1__, '*', '-star');
/* 000289 */ 				}) ()));
/* 000289 */ 			}) ();
/* 000289 */ 		}
/* 000292 */ 		var content_html = (function () {
/* 000292 */ 			var __accu0__ = self;
/* 000292 */ 			return __call__ (__accu0__.htmlescape, __accu0__, __add__ (__add__ (__getitem__ (delimiters, 0), (function () {
/* 000292 */ 				var __accu1__ = nodelist;
/* 000292 */ 				return __call__ (__accu1__.latex_verbatim, __accu1__);
/* 000292 */ 			}) ()), __getitem__ (delimiters, 1)));
/* 000292 */ 		}) ();
/* 000295 */ 		var attrs = dict ({});
/* 000296 */ 		if (__t__ (target_id !== null)) {
/* 000297 */ 			__setitem__ (attrs, 'id', target_id);
/* 000297 */ 		}
/* 000299 */ 		if (__t__ (__eq__ (displaytype, 'display'))) {
/* 000301 */ 			return (function () {
/* 000301 */ 				var __accu0__ = self;
/* 000301 */ 				return __call__ (__accu0__.wrap_in_tag, __accu0__, 'span', content_html, __kwargtrans__ ({class_names: class_names, attrs: attrs}));
/* 000301 */ 			}) ();
/* 000301 */ 		}
/* 000308 */ 		return (function () {
/* 000308 */ 			var __accu0__ = self;
/* 000308 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'span', content_html, __kwargtrans__ ({class_names: class_names, attrs: attrs}));
/* 000308 */ 		}) ();
/* 000308 */ 	});},
/* 000315 */ 	get render_text_format () {return __get__ (this, function (self, text_formats, nodelist, render_context) {
/* 000315 */ 		if (arguments.length) {
/* 000315 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000315 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000315 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000315 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000315 */ 					switch (__attrib0__) {
/* 000315 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000315 */ 						case 'text_formats': var text_formats = __allkwargs0__ [__attrib0__]; break;
/* 000315 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000315 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000315 */ 					}
/* 000315 */ 				}
/* 000315 */ 			}
/* 000315 */ 		}
/* 000315 */ 		else {
/* 000315 */ 		}
/* 000317 */ 		var content = (function () {
/* 000317 */ 			var __accu0__ = self;
/* 000317 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, nodelist, render_context, __kwargtrans__ ({is_block_level: false}));
/* 000317 */ 		}) ();
/* 000323 */ 		return (function () {
/* 000323 */ 			var __accu0__ = self;
/* 000323 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'span', content, __kwargtrans__ ({class_names: text_formats}));
/* 000323 */ 		}) ();
/* 000323 */ 	});},
/* 000329 */ 	get render_semantic_span () {return __get__ (this, function (self, content, role, render_context) {
/* 000329 */ 		var annotations = null;
/* 000329 */ 		var target_id = null;
/* 000329 */ 		if (arguments.length) {
/* 000329 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000329 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000329 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000329 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000329 */ 					switch (__attrib0__) {
/* 000329 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000329 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000329 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000329 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000329 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000329 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000329 */ 					}
/* 000329 */ 				}
/* 000329 */ 			}
/* 000329 */ 		}
/* 000329 */ 		else {
/* 000329 */ 		}
/* 000331 */ 		var attrs = dict ({});
/* 000332 */ 		if (__t__ (target_id !== null)) {
/* 000333 */ 			__setitem__ (attrs, 'id', target_id);
/* 000333 */ 		}
/* 000335 */ 		var annotations = __call__ (list, null, (__t__ (annotations !== null) ? annotations : []));
/* 000336 */ 		if (__t__ (__in__ (role, annotations))) {
/* 000337 */ 			(function () {
/* 000337 */ 				var __accu0__ = annotations;
/* 000337 */ 				return __call__ (__accu0__.remove, __accu0__, role);
/* 000337 */ 			}) ();
/* 000337 */ 		}
/* 000339 */ 		return (function () {
/* 000339 */ 			var __accu0__ = self;
/* 000339 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'span', content, __kwargtrans__ ({attrs: attrs, class_names: __add__ ([role], annotations)}));
/* 000339 */ 		}) ();
/* 000339 */ 	});},
/* 000347 */ 	get render_semantic_block () {return __get__ (this, function (self, content, role, render_context) {
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
/* 000357 */ 		if (__t__ (__in__ (role, tuple (['section', 'main', 'article'])))) {
/* 000358 */ 			return (function () {
/* 000358 */ 				var __accu0__ = self;
/* 000358 */ 				return __call__ (__accu0__.wrap_in_tag, __accu0__, role, content, __kwargtrans__ ({attrs: attrs, class_names: annotations}));
/* 000358 */ 			}) ();
/* 000358 */ 		}
/* 000364 */ 		return (function () {
/* 000364 */ 			var __accu0__ = self;
/* 000364 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'div', content, __kwargtrans__ ({attrs: attrs, class_names: __add__ ([role], annotations)}));
/* 000364 */ 		}) ();
/* 000364 */ 	});},
/* 000372 */ 	get render_enumeration () {return __get__ (this, function (self, iter_items_nodelists, counter_formatter, render_context) {
/* 000372 */ 		var target_id_generator = null;
/* 000372 */ 		var annotations = null;
/* 000372 */ 		var nested_depth = null;
/* 000372 */ 		if (arguments.length) {
/* 000372 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000372 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000372 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000372 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000372 */ 					switch (__attrib0__) {
/* 000372 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000372 */ 						case 'iter_items_nodelists': var iter_items_nodelists = __allkwargs0__ [__attrib0__]; break;
/* 000372 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000372 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000372 */ 						case 'target_id_generator': var target_id_generator = __allkwargs0__ [__attrib0__]; break;
/* 000372 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000372 */ 						case 'nested_depth': var nested_depth = __allkwargs0__ [__attrib0__]; break;
/* 000372 */ 					}
/* 000372 */ 				}
/* 000372 */ 			}
/* 000372 */ 		}
/* 000372 */ 		else {
/* 000372 */ 		}
/* 000384 */ 		var s_items = [];
/* 000386 */ 		var __iterable0__ = __call__ (enumerate, null, iter_items_nodelists);
/* 000386 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000386 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000386 */ 			var j = __left0__ [0];
/* 000386 */ 			var item_content_nodelist = __left0__ [1];
/* 000388 */ 			var use_block_level = true;
/* 000389 */ 			if (__t__ (item_content_nodelist.parsing_state.is_block_level === false)) {
/* 000392 */ 				var use_block_level = false;
/* 000392 */ 			}
/* 000394 */ 			// pass;
/* 000398 */ 			// pass;
/* 000402 */ 			var item_content = (function () {
/* 000402 */ 				var __accu0__ = self;
/* 000402 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, item_content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: use_block_level}));
/* 000402 */ 			}) ();
/* 000408 */ 			var enumno = __add__ (1, j);
/* 000410 */ 			var tag_nodelist = __call__ (counter_formatter, null, enumno);
/* 000411 */ 			if (__t__ (__call__ (isinstance, null, tag_nodelist, str))) {
/* 000412 */ 				var tag_content = (function () {
/* 000412 */ 					var __accu0__ = self;
/* 000412 */ 					return __call__ (__accu0__.render_value, __accu0__, tag_nodelist, render_context);
/* 000412 */ 				}) ();
/* 000412 */ 			}
/* 000413 */ 			else {
/* 000414 */ 				var tag_content = (function () {
/* 000414 */ 					var __accu0__ = self;
/* 000414 */ 					return __call__ (__accu0__.render_nodelist, __accu0__, tag_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000414 */ 				}) ();
/* 000414 */ 			}
/* 000420 */ 			var dtattrs = dict ({});
/* 000421 */ 			if (__t__ (target_id_generator !== null)) {
/* 000422 */ 				__setitem__ (dtattrs, 'id', __call__ (target_id_generator, null, enumno));
/* 000422 */ 			}
/* 000424 */ 			(function () {
/* 000424 */ 				var __accu0__ = s_items;
/* 000425 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000425 */ 					var __accu1__ = self;
/* 000426 */ 					return __call__ (__accu1__.render_join, __accu1__, [(function () {
/* 000426 */ 						var __accu2__ = self;
/* 000426 */ 						return __call__ (__accu2__.wrap_in_tag, __accu2__, 'dt', tag_content, __kwargtrans__ ({attrs: dtattrs}));
/* 000431 */ 					}) (), (function () {
/* 000431 */ 						var __accu2__ = self;
/* 000431 */ 						return __call__ (__accu2__.wrap_in_tag, __accu2__, 'dd', item_content);
/* 000431 */ 					}) ()], render_context);
/* 000431 */ 				}) ());
/* 000431 */ 			}) ();
/* 000431 */ 		}
/* 000438 */ 		return (function () {
/* 000438 */ 			var __accu0__ = self;
/* 000440 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'dl', (function () {
/* 000440 */ 				var __accu1__ = self;
/* 000440 */ 				return __call__ (__accu1__.render_join, __accu1__, s_items, render_context);
/* 000440 */ 			}) (), __kwargtrans__ ({class_names: __add__ (['enumeration'], (__t__ (annotations) ? annotations : []))}));
/* 000440 */ 		}) ();
/* 000440 */ 	});},
/* 000445 */ 	get render_heading () {return __get__ (this, function (self, heading_nodelist, render_context) {
/* 000445 */ 		var heading_level = 1;
/* 000445 */ 		var target_id = null;
/* 000445 */ 		var inline_heading = false;
/* 000445 */ 		var annotations = null;
/* 000445 */ 		if (arguments.length) {
/* 000445 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000445 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000445 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000445 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000445 */ 					switch (__attrib0__) {
/* 000445 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000445 */ 						case 'heading_nodelist': var heading_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000445 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000445 */ 						case 'heading_level': var heading_level = __allkwargs0__ [__attrib0__]; break;
/* 000445 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000445 */ 						case 'inline_heading': var inline_heading = __allkwargs0__ [__attrib0__]; break;
/* 000445 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000445 */ 					}
/* 000445 */ 				}
/* 000445 */ 			}
/* 000445 */ 		}
/* 000445 */ 		else {
/* 000445 */ 		}
/* 000449 */ 		if (__t__ (!__in__ (heading_level, self.heading_tags_by_level))) {
/* 000451 */ 			var __except0__ = __call__ (ValueError, null, 'Bad heading_level={}, expected one of {}'.format (heading_level, __call__ (list, null, (function () {
/* 000451 */ 				var __accu0__ = self.heading_tags_by_level;
/* 000451 */ 				return __call__ (__accu0__.py_keys, __accu0__);
/* 000451 */ 			}) ())));
/* 000451 */ 			__except0__.__cause__ = null;
/* 000451 */ 			throw __except0__;
/* 000451 */ 		}
/* 000453 */ 		var annot = (__t__ (annotations) ? __call__ (list, null, annotations) : []);
/* 000454 */ 		(function () {
/* 000454 */ 			var __accu0__ = annot;
/* 000454 */ 			return __call__ (__accu0__.append, __accu0__, 'heading-level-{}'.format (heading_level));
/* 000454 */ 		}) ();
/* 000455 */ 		if (__t__ (inline_heading)) {
/* 000456 */ 			(function () {
/* 000456 */ 				var __accu0__ = annot;
/* 000456 */ 				return __call__ (__accu0__.append, __accu0__, 'heading-inline');
/* 000456 */ 			}) ();
/* 000456 */ 		}
/* 000458 */ 		var attrs = dict ({});
/* 000459 */ 		if (__t__ (target_id !== null)) {
/* 000460 */ 			__setitem__ (attrs, 'id', target_id);
/* 000460 */ 		}
/* 000462 */ 		var content = (function () {
/* 000462 */ 			var __accu0__ = self;
/* 000464 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, __getitem__ (self.heading_tags_by_level, heading_level), (function () {
/* 000464 */ 				var __accu1__ = self;
/* 000464 */ 				return __call__ (__accu1__.render_inline_content, __accu1__, heading_nodelist, render_context);
/* 000464 */ 			}) (), __kwargtrans__ ({class_names: annot, attrs: attrs}));
/* 000464 */ 		}) ();
/* 000468 */ 		if (__t__ (__t__ (inline_heading) && self.inline_heading_add_space)) {
/* 000469 */ 			var content = __call__ (__iadd__, null, content, ' ');
/* 000469 */ 		}
/* 000470 */ 		// pass;
/* 000474 */ 		return content;
/* 000474 */ 	});},
/* 000476 */ 	get render_link () {return __get__ (this, function (self, ref_type, href, display_nodelist, render_context, annotations) {
/* 000476 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000476 */ 			var annotations = null;
/* 000476 */ 		};
/* 000476 */ 		if (arguments.length) {
/* 000476 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000476 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000476 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000476 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000476 */ 					switch (__attrib0__) {
/* 000476 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000476 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000476 */ 						case 'href': var href = __allkwargs0__ [__attrib0__]; break;
/* 000476 */ 						case 'display_nodelist': var display_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000476 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000476 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000476 */ 					}
/* 000476 */ 				}
/* 000476 */ 			}
/* 000476 */ 		}
/* 000476 */ 		else {
/* 000476 */ 		}
/* 000477 */ 		var display_content = (function () {
/* 000477 */ 			var __accu0__ = self;
/* 000477 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, display_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000477 */ 		}) ();
/* 000482 */ 		return (function () {
/* 000482 */ 			var __accu0__ = self;
/* 000482 */ 			return __call__ (__accu0__.wrap_in_link, __accu0__, display_content, href, __kwargtrans__ ({class_names: __add__ (['href-{}'.format (ref_type)], (__t__ (annotations) ? annotations : []))}));
/* 000482 */ 		}) ();
/* 000482 */ 	});},
/* 000489 */ 	get render_delayed_marker () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000489 */ 		if (arguments.length) {
/* 000489 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000489 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000489 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000489 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000489 */ 					switch (__attrib0__) {
/* 000489 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000489 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000489 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000489 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000489 */ 					}
/* 000489 */ 				}
/* 000489 */ 			}
/* 000489 */ 		}
/* 000489 */ 		else {
/* 000489 */ 		}
/* 000490 */ 		return '<FLM:DLYD:{}/>'.format (delayed_key);
/* 000490 */ 	});},
/* 000492 */ 	get render_delayed_dummy_placeholder () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000492 */ 		if (arguments.length) {
/* 000492 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000492 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000492 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000492 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000492 */ 					switch (__attrib0__) {
/* 000492 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000492 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000492 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000492 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000492 */ 					}
/* 000492 */ 				}
/* 000492 */ 			}
/* 000492 */ 		}
/* 000492 */ 		else {
/* 000492 */ 		}
/* 000493 */ 		return '<!-- delayed:{} -->'.format (delayed_key);
/* 000493 */ 	});},
/* 000495 */ 	get replace_delayed_markers_with_final_values () {return __get__ (this, function (self, content, delayed_values) {
/* 000495 */ 		if (arguments.length) {
/* 000495 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000495 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000495 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000495 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000495 */ 					switch (__attrib0__) {
/* 000495 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000495 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000495 */ 						case 'delayed_values': var delayed_values = __allkwargs0__ [__attrib0__]; break;
/* 000495 */ 					}
/* 000495 */ 				}
/* 000495 */ 			}
/* 000495 */ 		}
/* 000495 */ 		else {
/* 000495 */ 		}
/* 000496 */ 		return (function () {
/* 000496 */ 			var __accu0__ = _rx_delayed_markers;
/* 000496 */ 			return __call__ (__accu0__.sub, __accu0__, (function __lambda__ (m) {
/* 000496 */ 				if (arguments.length) {
/* 000496 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000496 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000496 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000496 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000496 */ 							switch (__attrib0__) {
/* 000496 */ 								case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000496 */ 							}
/* 000496 */ 						}
/* 000496 */ 					}
/* 000496 */ 				}
/* 000496 */ 				else {
/* 000496 */ 				}
/* 000497 */ 				return __getitem__ (delayed_values, __call__ (int, null, (function () {
/* 000497 */ 					var __accu1__ = m;
/* 000497 */ 					return __call__ (__accu1__.group, __accu1__, 'key');
/* 000497 */ 				}) ()));
/* 000497 */ 			}), content);
/* 000497 */ 		}) ();
/* 000497 */ 	});},
/* 000504 */ 	get render_float () {return __get__ (this, function (self, float_instance, render_context) {
/* 000504 */ 		if (arguments.length) {
/* 000504 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000504 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000504 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000504 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000504 */ 					switch (__attrib0__) {
/* 000504 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000504 */ 						case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000504 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000504 */ 					}
/* 000504 */ 				}
/* 000504 */ 			}
/* 000504 */ 		}
/* 000504 */ 		else {
/* 000504 */ 		}
/* 000507 */ 		var figattrs = dict ({});
/* 000509 */ 		if (__t__ (float_instance.target_id !== null)) {
/* 000510 */ 			__setitem__ (figattrs, 'id', float_instance.target_id);
/* 000510 */ 		}
/* 000512 */ 		var full_figcaption_rendered_list = [];
/* 000513 */ 		if (__t__ (float_instance.number !== null)) {
/* 000515 */ 			(function () {
/* 000515 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000516 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000516 */ 					var __accu1__ = self;
/* 000518 */ 					return __call__ (__accu1__.wrap_in_tag, __accu1__, 'span', (function () {
/* 000518 */ 						var __accu2__ = self;
/* 000519 */ 						return __call__ (__accu2__.render_join, __accu2__, [(function () {
/* 000519 */ 							var __accu3__ = self;
/* 000519 */ 							return __call__ (__accu3__.render_value, __accu3__, float_instance.float_type_info.float_caption_name, render_context);
/* 000524 */ 						}) (), '&nbsp;', (function () {
/* 000524 */ 							var __accu3__ = self;
/* 000524 */ 							return __call__ (__accu3__.render_nodelist, __accu3__, float_instance.formatted_counter_value_flm.nodes, __kwargtrans__ ({render_context: render_context}));
/* 000524 */ 						}) ()], render_context);
/* 000524 */ 					}) (), __kwargtrans__ ({class_names: ['float-number']}));
/* 000524 */ 				}) ());
/* 000524 */ 			}) ();
/* 000524 */ 		}
/* 000532 */ 		else if (__t__ (float_instance.caption_nodelist)) {
/* 000535 */ 			(function () {
/* 000535 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000536 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000536 */ 					var __accu1__ = self;
/* 000538 */ 					return __call__ (__accu1__.wrap_in_tag, __accu1__, 'span', (function () {
/* 000538 */ 						var __accu2__ = self;
/* 000539 */ 						return __call__ (__accu2__.render_join, __accu2__, [(function () {
/* 000539 */ 							var __accu3__ = self;
/* 000539 */ 							return __call__ (__accu3__.render_value, __accu3__, float_instance.float_type_info.float_caption_name, render_context);
/* 000539 */ 						}) ()], render_context);
/* 000539 */ 					}) (), __kwargtrans__ ({class_names: ['float-no-number']}));
/* 000539 */ 				}) ());
/* 000539 */ 			}) ();
/* 000539 */ 		}
/* 000545 */ 		else {
/* 000549 */ 			// pass;
/* 000549 */ 		}
/* 000551 */ 		if (__t__ (float_instance.caption_nodelist)) {
/* 000555 */ 			(function () {
/* 000555 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000555 */ 				return __call__ (__accu0__.append, __accu0__, ': ');
/* 000555 */ 			}) ();
/* 000558 */ 			(function () {
/* 000558 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000559 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000559 */ 					var __accu1__ = self;
/* 000559 */ 					return __call__ (__accu1__.render_nodelist, __accu1__, float_instance.caption_nodelist, __kwargtrans__ ({render_context: render_context}));
/* 000559 */ 				}) ());
/* 000559 */ 			}) ();
/* 000559 */ 		}
/* 000565 */ 		var rendered_float_caption = null;
/* 000566 */ 		if (__t__ (full_figcaption_rendered_list)) {
/* 000567 */ 			var rendered_float_caption = (function () {
/* 000567 */ 				var __accu0__ = self;
/* 000569 */ 				return __call__ (__accu0__.wrap_in_tag, __accu0__, 'figcaption', (function () {
/* 000569 */ 					var __accu1__ = self;
/* 000571 */ 					return __call__ (__accu1__.wrap_in_tag, __accu1__, 'span', (function () {
/* 000571 */ 						var __accu2__ = self;
/* 000571 */ 						return __call__ (__accu2__.render_join, __accu2__, full_figcaption_rendered_list, render_context);
/* 000571 */ 					}) ());
/* 000571 */ 				}) (), __kwargtrans__ ({class_names: ['float-caption-content']}));
/* 000571 */ 			}) ();
/* 000571 */ 		}
/* 000576 */ 		var float_content_block_content = (function () {
/* 000576 */ 			var __accu0__ = self;
/* 000576 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, float_instance.content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: true}));
/* 000576 */ 		}) ();
/* 000581 */ 		var float_content_block = (function () {
/* 000581 */ 			var __accu0__ = self;
/* 000581 */ 			return __call__ (__accu0__.render_semantic_block, __accu0__, float_content_block_content, 'float-contents', __kwargtrans__ ({render_context: render_context}));
/* 000581 */ 		}) ();
/* 000587 */ 		if (__t__ (rendered_float_caption !== null)) {
/* 000588 */ 			var float_content_with_caption = (function () {
/* 000588 */ 				var __accu0__ = self;
/* 000588 */ 				return __call__ (__accu0__.render_join_blocks, __accu0__, [float_content_block, rendered_float_caption], render_context);
/* 000588 */ 			}) ();
/* 000588 */ 		}
/* 000592 */ 		else {
/* 000593 */ 			var float_content_with_caption = float_content_block;
/* 000593 */ 		}
/* 000595 */ 		var full_figure = (function () {
/* 000595 */ 			var __accu0__ = self;
/* 000595 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'figure', float_content_with_caption, __kwargtrans__ ({attrs: figattrs, class_names: ['float', 'float-{}'.format (float_instance.float_type)]}));
/* 000595 */ 		}) ();
/* 000602 */ 		return full_figure;
/* 000602 */ 	});},
/* 000605 */ 	graphics_raster_magnification: 1,
/* 000606 */ 	graphics_vector_magnification: 1,
/* 000608 */ 	get render_graphics_block () {return __get__ (this, function (self, graphics_resource, render_context) {
/* 000608 */ 		if (arguments.length) {
/* 000608 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000608 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000608 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000608 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000608 */ 					switch (__attrib0__) {
/* 000608 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000608 */ 						case 'graphics_resource': var graphics_resource = __allkwargs0__ [__attrib0__]; break;
/* 000608 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000608 */ 					}
/* 000608 */ 				}
/* 000608 */ 			}
/* 000608 */ 		}
/* 000608 */ 		else {
/* 000608 */ 		}
/* 000610 */ 		var imgattrs = dict ({});
/* 000612 */ 		var styparts = [];
/* 000613 */ 		if (__t__ (graphics_resource.physical_dimensions !== null)) {
/* 000615 */ 			var __left0__ = graphics_resource.physical_dimensions;
/* 000615 */ 			var width_pt = __left0__ [0];
/* 000615 */ 			var height_pt = __left0__ [1];
/* 000617 */ 			if (__t__ (__eq__ (graphics_resource.graphics_type, 'raster'))) {
/* 000618 */ 				if (__t__ (width_pt !== null)) {
/* 000619 */ 					var width_pt = __call__ (__imul__, null, width_pt, self.graphics_raster_magnification);
/* 000619 */ 				}
/* 000620 */ 				if (__t__ (height_pt !== null)) {
/* 000621 */ 					var height_pt = __call__ (__imul__, null, height_pt, self.graphics_raster_magnification);
/* 000621 */ 				}
/* 000621 */ 			}
/* 000622 */ 			else if (__t__ (__eq__ (graphics_resource.graphics_type, 'vector'))) {
/* 000623 */ 				if (__t__ (width_pt !== null)) {
/* 000624 */ 					var width_pt = __call__ (__imul__, null, width_pt, self.graphics_vector_magnification);
/* 000624 */ 				}
/* 000625 */ 				if (__t__ (height_pt !== null)) {
/* 000626 */ 					var height_pt = __call__ (__imul__, null, height_pt, self.graphics_vector_magnification);
/* 000626 */ 				}
/* 000626 */ 			}
/* 000628 */ 			if (__t__ (width_pt !== null)) {
/* 000629 */ 				(function () {
/* 000629 */ 					var __accu0__ = styparts;
/* 000629 */ 					return __call__ (__accu0__.append, __accu0__, 'width:{}pt'.format (width_pt));
/* 000629 */ 				}) ();
/* 000629 */ 			}
/* 000630 */ 			if (__t__ (height_pt !== null)) {
/* 000631 */ 				(function () {
/* 000631 */ 					var __accu0__ = styparts;
/* 000631 */ 					return __call__ (__accu0__.append, __accu0__, 'height:{}pt'.format (height_pt));
/* 000631 */ 				}) ();
/* 000631 */ 			}
/* 000631 */ 		}
/* 000633 */ 		if (__t__ (styparts)) {
/* 000634 */ 			__setitem__ (imgattrs, 'style', (function () {
/* 000634 */ 				var __accu0__ = ';';
/* 000634 */ 				return __call__ (__accu0__.join, __accu0__, styparts);
/* 000634 */ 			}) ());
/* 000634 */ 		}
/* 000636 */ 		var src_url = graphics_resource.src_url;
/* 000637 */ 		__setitem__ (imgattrs, 'src', src_url);
/* 000640 */ 		if (__t__ (__t__ (graphics_resource.srcset !== null) && __t__ (graphics_resource.srcset) && __call__ (len, null, graphics_resource.srcset))) {
/* 000642 */ 			var srcset_items = [];
/* 000643 */ 			var __iterable0__ = graphics_resource.srcset;
/* 000643 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000643 */ 				var srcset_info = __getitem__ (__iterable0__, __index0__);
/* 000644 */ 				var ss = __getitem__ (srcset_info, 'source');
/* 000645 */ 				if (__t__ (__in__ ('pixel_density', srcset_info))) {
/* 000646 */ 					var pixel_density = __getitem__ (srcset_info, 'pixel_density');
/* 000647 */ 					var ss = __call__ (__iadd__, null, ss, ' {}x'.format (pixel_density));
/* 000647 */ 				}
/* 000649 */ 				(function () {
/* 000649 */ 					var __accu0__ = srcset_items;
/* 000649 */ 					return __call__ (__accu0__.append, __accu0__, ss);
/* 000649 */ 				}) ();
/* 000649 */ 			}
/* 000651 */ 			__setitem__ (imgattrs, 'srcset', (function () {
/* 000651 */ 				var __accu0__ = ', ';
/* 000651 */ 				return __call__ (__accu0__.join, __accu0__, srcset_items);
/* 000651 */ 			}) ());
/* 000651 */ 		}
/* 000654 */ 		return (function () {
/* 000654 */ 			var __accu0__ = self;
/* 000654 */ 			return __call__ (__accu0__.generate_open_tag, __accu0__, 'img', __kwargtrans__ ({attrs: imgattrs}));
/* 000654 */ 		}) ();
/* 000654 */ 	});},
/* 000657 */ 	get render_cells () {return __get__ (this, function (self, cells_model, render_context, target_id) {
/* 000657 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000657 */ 			var target_id = null;
/* 000657 */ 		};
/* 000657 */ 		if (arguments.length) {
/* 000657 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000657 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000657 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000657 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000657 */ 					switch (__attrib0__) {
/* 000657 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000657 */ 						case 'cells_model': var cells_model = __allkwargs0__ [__attrib0__]; break;
/* 000657 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000657 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000657 */ 					}
/* 000657 */ 				}
/* 000657 */ 			}
/* 000657 */ 		}
/* 000657 */ 		else {
/* 000657 */ 		}
/* 000659 */ 		var __left0__ = tuple ([__call__ (len, null, cells_model.grid_data), __call__ (len, null, __getitem__ (cells_model.grid_data, 0))]);
/* 000659 */ 		var tabheight = __left0__ [0];
/* 000659 */ 		var tabwidth = __left0__ [1];
/* 000661 */ 		var data_items = [];
/* 000662 */ 		var row_j = 0;
/* 000663 */ 		while (__t__ (__lt__ (row_j, __call__ (len, null, cells_model.grid_data)))) {
/* 000664 */ 			var row_items = [];
/* 000665 */ 			var col_j = 0;
/* 000666 */ 			while (__t__ (__lt__ (col_j, __call__ (len, null, __getitem__ (cells_model.grid_data, row_j))))) {
/* 000668 */ 				var grid_cell_data = __getitem__ (__getitem__ (cells_model.grid_data, row_j), col_j);
/* 000670 */ 				if (__t__ (__t__ (grid_cell_data === null) || __getitem__ (grid_cell_data, 'cell') === null)) {
/* 000673 */ 					var clsnames = [];
/* 000674 */ 					if (__t__ (__eq__ (row_j, 0))) {
/* 000675 */ 						(function () {
/* 000675 */ 							var __accu0__ = clsnames;
/* 000675 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-top');
/* 000675 */ 						}) ();
/* 000675 */ 					}
/* 000676 */ 					if (__t__ (__eq__ (col_j, 0))) {
/* 000677 */ 						(function () {
/* 000677 */ 							var __accu0__ = clsnames;
/* 000677 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-left');
/* 000677 */ 						}) ();
/* 000677 */ 					}
/* 000678 */ 					if (__t__ (__eq__ (row_j, __sub__ (tabheight, 1)))) {
/* 000679 */ 						(function () {
/* 000679 */ 							var __accu0__ = clsnames;
/* 000679 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-bottom');
/* 000679 */ 						}) ();
/* 000679 */ 					}
/* 000680 */ 					if (__t__ (__eq__ (col_j, __sub__ (tabwidth, 1)))) {
/* 000681 */ 						(function () {
/* 000681 */ 							var __accu0__ = clsnames;
/* 000681 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-right');
/* 000681 */ 						}) ();
/* 000681 */ 					}
/* 000682 */ 					(function () {
/* 000682 */ 						var __accu0__ = row_items;
/* 000682 */ 						return __call__ (__accu0__.append, __accu0__, (function () {
/* 000682 */ 							var __accu1__ = self;
/* 000682 */ 							return __call__ (__accu1__.wrap_in_tag, __accu1__, 'td', '', __kwargtrans__ ({class_names: __add__ (['cell-empty'], clsnames)}));
/* 000682 */ 						}) ());
/* 000682 */ 					}) ();
/* 000687 */ 					var col_j = __call__ (__iadd__, null, col_j, 1);
/* 000687 */ 					continue;
/* 000687 */ 				}
/* 000690 */ 				if (__t__ (__getitem__ (grid_cell_data, 'is_topleft'))) {
/* 000692 */ 					var cell = __getitem__ (grid_cell_data, 'cell');
/* 000693 */ 					var rendered_cell_contents = (function () {
/* 000693 */ 						var __accu0__ = self;
/* 000693 */ 						return __call__ (__accu0__.render_nodelist, __accu0__, cell.content_nodes, __kwargtrans__ ({render_context: render_context}));
/* 000693 */ 					}) ();
/* 000697 */ 					var clsnames = __add__ (['cell'], (function () {
/* 000697 */ 						var __accu0__ = [];
/* 000697 */ 						var __iterable0__ = cell.styles;
/* 000697 */ 						for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000697 */ 							var sty = __getitem__ (__iterable0__, __index0__);
/* 000697 */ 							(function () {
/* 000697 */ 								var __accu1__ = __accu0__;
/* 000697 */ 								return __call__ (__accu1__.append, __accu1__, 'cellstyle-{}'.format (sty));
/* 000697 */ 							}) ();
/* 000697 */ 						}
/* 000697 */ 						return __accu0__;
/* 000697 */ 					}) ());
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
/* 000702 */ 					if (__t__ (__eq__ (cell.placement.row_range.end, tabheight))) {
/* 000703 */ 						(function () {
/* 000703 */ 							var __accu0__ = clsnames;
/* 000703 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-bottom');
/* 000703 */ 						}) ();
/* 000703 */ 					}
/* 000704 */ 					if (__t__ (__eq__ (cell.placement.col_range.end, tabwidth))) {
/* 000705 */ 						(function () {
/* 000705 */ 							var __accu0__ = clsnames;
/* 000705 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-right');
/* 000705 */ 						}) ();
/* 000705 */ 					}
/* 000706 */ 					var tagname = 'td';
/* 000707 */ 					if (__t__ (__t__ (__in__ ('H', cell.styles)) || __in__ ('rH', cell.styles))) {
/* 000708 */ 						var tagname = 'th';
/* 000708 */ 					}
/* 000709 */ 					var attrs = dict ({});
/* 000710 */ 					var cplc = cell.placement;
/* 000711 */ 					if (__t__ (__ne__ (cplc.col_range.end, __add__ (cplc.col_range.start, 1)))) {
/* 000714 */ 						__setitem__ (attrs, 'colspan', __call__ (str, null, __sub__ (cplc.col_range.end, cplc.col_range.start)));
/* 000714 */ 					}
/* 000715 */ 					if (__t__ (__ne__ (cplc.row_range.end, __add__ (cplc.row_range.start, 1)))) {
/* 000717 */ 						__setitem__ (attrs, 'rowspan', __call__ (str, null, __sub__ (cplc.row_range.end, cplc.row_range.start)));
/* 000717 */ 					}
/* 000718 */ 					(function () {
/* 000718 */ 						var __accu0__ = row_items;
/* 000719 */ 						return __call__ (__accu0__.append, __accu0__, (function () {
/* 000719 */ 							var __accu1__ = self;
/* 000719 */ 							return __call__ (__accu1__.wrap_in_tag, __accu1__, tagname, rendered_cell_contents, __kwargtrans__ ({attrs: attrs, class_names: clsnames}));
/* 000719 */ 						}) ());
/* 000719 */ 					}) ();
/* 000726 */ 					var col_j = cplc.col_range.end;
/* 000726 */ 					continue;
/* 000726 */ 				}
/* 000731 */ 				var col_j = __call__ (__iadd__, null, col_j, 1);
/* 000731 */ 			}
/* 000733 */ 			(function () {
/* 000733 */ 				var __accu0__ = data_items;
/* 000733 */ 				return __call__ (__accu0__.append, __accu0__, row_items);
/* 000733 */ 			}) ();
/* 000734 */ 			var row_j = __call__ (__iadd__, null, row_j, 1);
/* 000734 */ 		}
/* 000736 */ 		var table_attrs = dict ({});
/* 000737 */ 		if (__t__ (target_id !== null)) {
/* 000738 */ 			__setitem__ (table_attrs, 'id', target_id);
/* 000738 */ 		}
/* 000740 */ 		var s = (function () {
/* 000740 */ 			var __accu0__ = self;
/* 000742 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'table', (function () {
/* 000742 */ 				var __accu1__ = '';
/* 000742 */ 				return __call__ (__accu1__.join, __accu1__, (function () {
/* 000742 */ 					var __accu2__ = [];
/* 000742 */ 					var __iterable0__ = data_items;
/* 000742 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000744 */ 						var row_items = __getitem__ (__iterable0__, __index0__);
/* 000744 */ 						(function () {
/* 000744 */ 							var __accu3__ = __accu2__;
/* 000743 */ 							return __call__ (__accu3__.append, __accu3__, __add__ (__add__ ('<tr>', (function () {
/* 000743 */ 								var __accu4__ = '';
/* 000743 */ 								return __call__ (__accu4__.join, __accu4__, row_items);
/* 000743 */ 							}) ()), '</tr>'));
/* 000743 */ 						}) ();
/* 000743 */ 					}
/* 000743 */ 					return __accu2__;
/* 000743 */ 				}) ());
/* 000743 */ 			}) (), __kwargtrans__ ({attrs: table_attrs, class_names: ['cells']}));
/* 000743 */ 		}) ();
/* 000749 */ 		return s;
/* 000749 */ 	});}
/* 000749 */ });
/* 000755 */ export var _rx_delayed_markers = (function () {
/* 000755 */ 	var __accu0__ = re;
/* 000755 */ 	return __call__ (__accu0__.compile, __accu0__, '<FLM:DLYD:(?P<key>\\d+)\\s*/>');
/* 000755 */ }) ();
/* 000762 */ export var _html_css_global = '\np, ul, ol {\n  margin: 1em 0px;\n}\np:first-child, ul:first-child, ol:first-child {\n  margin-top: 0px;\n}\np:last-child, ul:last-child, ol:last-child {\n  margin-bottom: 0px;\n}\ndd > p, dd > p:first-child, dd > p:last-child {\n  margin: 0.33em 0px;\n}\n\na, a:link, a:hover, a:active, a:visited {\n  color: #3232c8;\n  text-decoration: none;\n}\na:hover {\n  color: #22228a;\n}\n';
/* 000785 */ export var _html_css_content = "\n.emph, .textit {\n  font-style: italic;\n}\n.textbf {\n  font-weight: bold;\n}\n\nh1 {\n  font-size: 1.6rem;\n  line-height: 1.3em;\n  font-weight: bold;\n  margin: 1em 0px;\n}\nh2 {\n  font-size: 1.3rem;\n  line-height: 1.3em;\n  font-weight: bold;\n  margin: 1em 0px;\n}\nh3 {\n  font-size: 1rem;\n  font-weight: bold;\n  margin: 1em 0px;\n}\n\n.heading-level-4 {\n  font-style: italic;\n  display: inline;\n}\n.heading-level-4::after {\n  display: inline-block;\n  margin: 0px .12em;\n  content: '—';\n}\n\n.heading-level-5 {\n  font-style: italic;\n  font-size: .9em;\n  display: inline;\n}\n.heading-level-5::after {\n  display: inline-block;\n  margin-right: .12em;\n  content: '';\n}\n\n.heading-level-6 {\n  font-style: italic;\n  font-size: .8em;\n  display: inline;\n}\n.heading-level-6::after {\n  display: inline-block;\n  margin-right: .06em;\n  content: '';\n}\n\n\n.heading-level-theorem {\n  font-weight: bold;\n  display: inline-block;\n}\n.heading-level-theorem::after {\n  font-weight: bold;\n  display: inline-block;\n  margin: 0px .12em 0px 0px;\n  content: '.';\n}\n\ndiv.theoremlike, div.definitionlike, div.prooflike {\n  margin: 1em 0px;\n}\n\ndiv.prooflike > p > .heading-level-theorem,\ndiv.prooflike > p > .heading-level-theorem::after {\n  font-weight: normal;\n  font-style: italic;\n}\n\n\ndl.enumeration {\n  display: block;\n  margin-left: 2.5em;\n}\ndl.enumeration > dt {\n  float: left;\n  clear: left;\n  display: inline-block;\n  /*margin: 0px; */\n  margin-left: -2.5em;\n  width: 2.0em;\n  min-width: 2.0em;\n  max-width: 2.0em;\n  margin-right: 0.5em;\n  text-align: right;\n}\ndl.enumeration > dd {\n  /*display: inline-block;\n  width: 100%;*/\n  border: 0px;\n  padding: 0px;\n  margin: 0px;\n}\n\nfigure.float {\n  width: 100%;\n  border-width: 1px 0px 1px 0px;\n  border-style: solid none solid none;\n  border-color: rgba(120, 120, 140, 0.15);\n  margin: 0.5rem 0px;\n  padding: 0.5rem 0px;\n}\n\nfigure.float .float-contents {\n  width: 100%;\n  max-width: 100%;\n  overflow-x: auto;\n}\n\nfigure.float .float-contents img {\n  display: block;\n  margin: 0pt auto;\n  padding: 0pt;\n  border: 0pt;\n  margin: 0px auto;\n}\n\nfigure.float figcaption {\n  display: block;\n  margin-top: 0.5em;\n  margin: 0.75em 2em 0px;\n  text-align: center;\n}\n\nfigure.float figcaption > span {\n  display: inline-block;\n  font-style: italic;\n  text-align: left;\n}\n\ntable {\n  margin: 1em 0px 1em 0px;\n  border-collapse: separate;\n  border-spacing: 0px;\n  /*border-top: solid 1pt;\n  border-bottom: solid 1pt;*/\n}\nfigure.float .float-contents table {\n  margin: 0px auto;\n}\ntd {\n  padding: 0.3em 0.5em;\n  border: none 0px;\n}\nth {\n  padding: 0.3em 0.5em;\n  border: none 0px;\n}\n.cellstyle-H {\n  border-bottom: solid .5pt;\n}\n.cellstyle-rH {\n}\n.cellstyle-l {\n  text-align: left;\n}\n.cellstyle-c {\n  text-align: center;\n}\n.cellstyle-r {\n  text-align: right;\n}\n.cellstyle-green {\n  background-color: rgba(69, 255, 69, 0.31); /*rgb(200,255,200);*/\n}\n.cellstyle-blue {\n  background-color: rgba(79, 142, 255, 0.27); /*rgb(200,220,255);*/\n}\n.cellstyle-yellow {\n  background-color: rgba(255, 255, 49, 0.33); /*rgb(255,255,200);*/\n}\n.cellstyle-red {\n  background-color: rgba(255,120,120,0.30);  /*rgb(255,200,200);*/\n}\n.cellstyle-lvert {\n  border-left: solid .5pt;\n}\n.cellstyle-rvert {\n  border-right: solid .5pt;\n}\n\n.celltbledge-top {\n  border-top: solid 1pt;\n}\n.celltbledge-bottom {\n  border-bottom: solid 1pt;\n}\n\n.verbatimcode {\n  font-family: monospace;\n  font-size: 0.9em;\n  background-color: rgba(127,127,127,0.25);\n  border-radius: 2px;\n  padding: 1px 2px;\n  display: inline-block;\n  white-space: pre-wrap;\n}\n.verbatima {\n  font-style: italic;\n}\n.verbatimcode-environment {\n  display: block;\n  margin: 0.75em 0px 1em;\n  white-space: pre;\n}\n\n.defterm {\n  font-style: italic;\n}\n\n.defterm .defterm-term {\n  font-style: italic;\n  font-weight: bold;\n}\n\n.display-math {\n  width: 100%;\n  max-width: 100%;\n  display: block;\n  overflow-x: auto;\n}\n\n.endnotes, .citations {\n  font-size: 0.8em;\n  display: inline-block;\n  vertical-align: 0.3em;\n  margin-top: -0.3em;\n}\n.citation {\n}\n.footnote {\n}\ndl.citation-list > dt, dl.footnote-list > dt {\n  font-size: 0.8em;\n  display: inline-block;\n  vertical-align: 0.3em;\n  margin-top: -0.3em;\n}\n";
/* 001037 */ export var _html_js_mathjax = '\nMathJax = {\n    tex: {\n        inlineMath: [[\'\\\\(\', \'\\\\)\']],\n        displayMath: [[\'\\\\[\', \'\\\\]\']],\n        processEnvironments: true,\n        processRefs: true,\n\n        // equation numbering on\n        tags: \'ams\'\n    },\n    options: {\n        // all MathJax content is marked with CSS classes\n        // skipHtmlTags: \'body\',\n        // processHtmlClass: \'display-math|inline-math\',\n    },\n    startup: {\n        pageReady: function() {\n            // override the default "typeset everything on the page" behavior to\n            // only typeset whatever we have explicitly marked as math\n            return typesetPageMathPromise();\n        }\n    }\n};\nfunction typesetPageMathPromise()\n{\n    var elements = document.querySelectorAll(\'.display-math, .inline-math\');\n    return MathJax.typesetPromise(elements);\n}\n';
/* 001068 */ export var _html_body_end_js_scripts_mathjax = '\n<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>\n<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>\n';
/* 001076 */ export var get_html_css_global = function (html_fragment_renderer) {
/* 001076 */ 	if (arguments.length) {
/* 001076 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001076 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001076 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001076 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001076 */ 				switch (__attrib0__) {
/* 001076 */ 					case 'html_fragment_renderer': var html_fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 001076 */ 				}
/* 001076 */ 			}
/* 001076 */ 		}
/* 001076 */ 	}
/* 001076 */ 	else {
/* 001076 */ 	}
/* 001077 */ 	return _html_css_global;
/* 001077 */ };
/* 001079 */ export var get_html_css_content = function (html_fragment_renderer) {
/* 001079 */ 	if (arguments.length) {
/* 001079 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001079 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001079 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001079 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001079 */ 				switch (__attrib0__) {
/* 001079 */ 					case 'html_fragment_renderer': var html_fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 001079 */ 				}
/* 001079 */ 			}
/* 001079 */ 		}
/* 001079 */ 	}
/* 001079 */ 	else {
/* 001079 */ 	}
/* 001080 */ 	return _html_css_content;
/* 001080 */ };
/* 001082 */ export var get_html_js = function (html_fragment_renderer) {
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
/* 001083 */ 	if (__t__ (html_fragment_renderer.use_mathjax)) {
/* 001084 */ 		return _html_js_mathjax;
/* 001084 */ 	}
/* 001085 */ 	return '';
/* 001085 */ };
/* 001087 */ export var get_html_body_end_js_scripts = function (html_fragment_renderer) {
/* 001087 */ 	if (arguments.length) {
/* 001087 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001087 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001087 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001087 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001087 */ 				switch (__attrib0__) {
/* 001087 */ 					case 'html_fragment_renderer': var html_fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 001087 */ 				}
/* 001087 */ 			}
/* 001087 */ 		}
/* 001087 */ 	}
/* 001087 */ 	else {
/* 001087 */ 	}
/* 001088 */ 	if (__t__ (html_fragment_renderer.use_mathjax)) {
/* 001089 */ 		return _html_body_end_js_scripts_mathjax;
/* 001089 */ 	}
/* 001090 */ 	return '';
/* 001090 */ };
/* 001096 */ export var FragmentRendererInformation =  __class__ ('FragmentRendererInformation', [object], {
/* 001096 */ 	__module__: __name__,
/* 001102 */ 	FragmentRendererClass: HtmlFragmentRenderer,
/* 001105 */ 	get get_style_information () {return function (fragment_renderer) {
/* 001105 */ 		if (arguments.length) {
/* 001105 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001105 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001105 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001105 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001105 */ 					switch (__attrib0__) {
/* 001105 */ 						case 'fragment_renderer': var fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 001105 */ 					}
/* 001105 */ 				}
/* 001105 */ 			}
/* 001105 */ 		}
/* 001105 */ 		else {
/* 001105 */ 		}
/* 001110 */ 		return dict ({'css_global': __call__ (get_html_css_global, null, fragment_renderer), 'css_content': __call__ (get_html_css_content, null, fragment_renderer), 'js': __call__ (get_html_js, null, fragment_renderer), 'body_end_js_scripts': __call__ (get_html_body_end_js_scripts, null, fragment_renderer)});
/* 001110 */ 	};},
/* 001113 */ 	format_name: 'html'
/* 001113 */ });
/* 000006 */ 
//# sourceMappingURL=flm.fragmentrenderer.html.map