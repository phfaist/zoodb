/* 000001 */ // Transcrypt'ed from Python, 2022-12-14 17:06:08
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
/* 000109 */ 		return (function () {
/* 000109 */ 			var __accu0__ = html;
/* 000109 */ 			return __call__ (__accu0__.escape, __accu0__, value);
/* 000109 */ 		}) ();
/* 000109 */ 	});},
/* 000111 */ 	get htmlescape_double_quoted_attribute_value () {return __get__ (this, function (self, value) {
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
/* 000113 */ 		if (__t__ (self.aggressively_escape_html_attributes)) {
/* 000114 */ 			return (function () {
/* 000114 */ 				var __accu0__ = self;
/* 000114 */ 				return __call__ (__accu0__.htmlescape, __accu0__, value);
/* 000114 */ 			}) ();
/* 000114 */ 		}
/* 000124 */ 		var value = (function () {
/* 000124 */ 			var __accu0__ = _rx_html_entity;
/* 000124 */ 			return __call__ (__accu0__.sub, __accu0__, (function __lambda__ (m) {
/* 000124 */ 				if (arguments.length) {
/* 000124 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000124 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000124 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000124 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000124 */ 							switch (__attrib0__) {
/* 000124 */ 								case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000124 */ 							}
/* 000124 */ 						}
/* 000124 */ 					}
/* 000124 */ 				}
/* 000124 */ 				else {
/* 000124 */ 				}
/* 000124 */ 				return __add__ (__add__ ('&amp;', (function () {
/* 000124 */ 					var __accu1__ = m;
/* 000124 */ 					return __call__ (__accu1__.group, __accu1__, 1);
/* 000124 */ 				}) ()), ';');
/* 000124 */ 			}), value);
/* 000124 */ 		}) ();
/* 000126 */ 		var value = (function () {
/* 000126 */ 			var __accu0__ = value;
/* 000126 */ 			return __call__ (__accu0__.py_replace, __accu0__, '"', '&quot;');
/* 000126 */ 		}) ();
/* 000127 */ 		return value;
/* 000127 */ 	});},
/* 000129 */ 	get generate_open_tag () {return __get__ (this, function (self, tagname) {
/* 000129 */ 		var attrs = null;
/* 000129 */ 		var class_names = null;
/* 000129 */ 		var self_close_tag = false;
/* 000129 */ 		if (arguments.length) {
/* 000129 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000129 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000129 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000129 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000129 */ 					switch (__attrib0__) {
/* 000129 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000129 */ 						case 'tagname': var tagname = __allkwargs0__ [__attrib0__]; break;
/* 000129 */ 						case 'attrs': var attrs = __allkwargs0__ [__attrib0__]; break;
/* 000129 */ 						case 'class_names': var class_names = __allkwargs0__ [__attrib0__]; break;
/* 000129 */ 						case 'self_close_tag': var self_close_tag = __allkwargs0__ [__attrib0__]; break;
/* 000129 */ 					}
/* 000129 */ 				}
/* 000129 */ 			}
/* 000129 */ 		}
/* 000129 */ 		else {
/* 000129 */ 		}
/* 000130 */ 		var s = '<{}'.format (tagname);
/* 000131 */ 		if (__t__ (!__t__ ((attrs)))) {
/* 000132 */ 			var attrs = dict ({});
/* 000132 */ 		}
/* 000133 */ 		var attrs = __call__ (dict, null, attrs);
/* 000134 */ 		if (__t__ (__in__ ('class', attrs))) {
/* 000135 */ 			var __except0__ = __call__ (ValueError, null, "generate_open_tag(): set HTML 'class' attribute with class_names=, not with attrs=");
/* 000135 */ 			__except0__.__cause__ = null;
/* 000135 */ 			throw __except0__;
/* 000135 */ 		}
/* 000139 */ 		if (__t__ (class_names)) {
/* 000140 */ 			__setitem__ (attrs, 'class', (function () {
/* 000140 */ 				var __accu0__ = ' ';
/* 000140 */ 				return __call__ (__accu0__.join, __accu0__, class_names);
/* 000140 */ 			}) ());
/* 000140 */ 		}
/* 000141 */ 		if (__t__ (attrs)) {
/* 000142 */ 			var __iterable0__ = (function () {
/* 000142 */ 				var __accu0__ = attrs;
/* 000142 */ 				return __call__ (__accu0__.py_items, __accu0__);
/* 000142 */ 			}) ();
/* 000142 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000142 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000142 */ 				var aname = __left0__ [0];
/* 000142 */ 				var aval = __left0__ [1];
/* 000143 */ 				var s = __call__ (__iadd__, null, s, ' {}="{}"'.format (aname, (function () {
/* 000143 */ 					var __accu0__ = self;
/* 000143 */ 					return __call__ (__accu0__.htmlescape_double_quoted_attribute_value, __accu0__, aval);
/* 000143 */ 				}) ()));
/* 000143 */ 			}
/* 000143 */ 		}
/* 000144 */ 		if (__t__ (self_close_tag)) {
/* 000145 */ 			var s = __call__ (__iadd__, null, s, '/>');
/* 000145 */ 		}
/* 000146 */ 		else {
/* 000147 */ 			var s = __call__ (__iadd__, null, s, '>');
/* 000147 */ 		}
/* 000148 */ 		return s;
/* 000148 */ 	});},
/* 000150 */ 	get wrap_in_tag () {return __get__ (this, function (self, tagname, content_html) {
/* 000150 */ 		var attrs = null;
/* 000150 */ 		var class_names = null;
/* 000150 */ 		if (arguments.length) {
/* 000150 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000150 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000150 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000150 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000150 */ 					switch (__attrib0__) {
/* 000150 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000150 */ 						case 'tagname': var tagname = __allkwargs0__ [__attrib0__]; break;
/* 000150 */ 						case 'content_html': var content_html = __allkwargs0__ [__attrib0__]; break;
/* 000150 */ 						case 'attrs': var attrs = __allkwargs0__ [__attrib0__]; break;
/* 000150 */ 						case 'class_names': var class_names = __allkwargs0__ [__attrib0__]; break;
/* 000150 */ 					}
/* 000150 */ 				}
/* 000150 */ 			}
/* 000150 */ 		}
/* 000150 */ 		else {
/* 000150 */ 		}
/* 000152 */ 		var s = (function () {
/* 000152 */ 			var __accu0__ = self;
/* 000152 */ 			return __call__ (__accu0__.generate_open_tag, __accu0__, tagname, __kwargtrans__ ({attrs: attrs, class_names: class_names}));
/* 000152 */ 		}) ();
/* 000153 */ 		var s = __call__ (__iadd__, null, s, __call__ (str, null, content_html));
/* 000154 */ 		var s = __call__ (__iadd__, null, s, '</{}>'.format (tagname));
/* 000155 */ 		return s;
/* 000155 */ 	});},
/* 000157 */ 	get wrap_in_link () {return __get__ (this, function (self, display_html, target_href) {
/* 000157 */ 		var class_names = null;
/* 000157 */ 		if (arguments.length) {
/* 000157 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000157 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000157 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000157 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000157 */ 					switch (__attrib0__) {
/* 000157 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000157 */ 						case 'display_html': var display_html = __allkwargs0__ [__attrib0__]; break;
/* 000157 */ 						case 'target_href': var target_href = __allkwargs0__ [__attrib0__]; break;
/* 000157 */ 						case 'class_names': var class_names = __allkwargs0__ [__attrib0__]; break;
/* 000157 */ 					}
/* 000157 */ 				}
/* 000157 */ 			}
/* 000157 */ 		}
/* 000157 */ 		else {
/* 000157 */ 		}
/* 000158 */ 		if (__t__ (!__t__ ((target_href)))) {
/* 000159 */ 			var target_href = '#';
/* 000159 */ 		}
/* 000161 */ 		var attrs = dict ({'href': (function () {
/* 000161 */ 			var __accu0__ = self;
/* 000161 */ 			return __call__ (__accu0__.htmlescape, __accu0__, target_href);
/* 000161 */ 		}) ()});
/* 000163 */ 		if (__t__ (__call__ (callable, null, self.use_link_target_blank))) {
/* 000164 */ 			if (__t__ ((function () {
/* 000164 */ 				var __accu0__ = self;
/* 000164 */ 				return __call__ (__accu0__.use_link_target_blank, __accu0__, target_href);
/* 000164 */ 			}) ())) {
/* 000165 */ 				__setitem__ (attrs, 'target', '_blank');
/* 000165 */ 			}
/* 000165 */ 		}
/* 000166 */ 		else if (__t__ (__t__ (self.use_link_target_blank) && !__t__ (((function () {
/* 000166 */ 			var __accu0__ = target_href;
/* 000166 */ 			return __call__ (__accu0__.startswith, __accu0__, '#');
/* 000166 */ 		}) ())))) {
/* 000167 */ 			__setitem__ (attrs, 'target', '_blank');
/* 000167 */ 		}
/* 000168 */ 		return (function () {
/* 000168 */ 			var __accu0__ = self;
/* 000168 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'a', display_html, __kwargtrans__ ({attrs: attrs, class_names: class_names}));
/* 000168 */ 		}) ();
/* 000168 */ 	});},
/* 000177 */ 	get render_build_paragraph () {return __get__ (this, function (self, nodelist, render_context) {
/* 000177 */ 		if (arguments.length) {
/* 000177 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000177 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000177 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000177 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000177 */ 					switch (__attrib0__) {
/* 000177 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000177 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000177 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000177 */ 					}
/* 000177 */ 				}
/* 000177 */ 			}
/* 000177 */ 		}
/* 000177 */ 		else {
/* 000177 */ 		}
/* 000180 */ 		return __add__ (__add__ ('<p>', (function () {
/* 000180 */ 			var __accu0__ = self;
/* 000180 */ 			return __call__ (__accu0__.render_inline_content, __accu0__, nodelist, render_context);
/* 000180 */ 		}) ()), '</p>');
/* 000180 */ 	});},
/* 000184 */ 	get render_inline_content () {return __get__ (this, function (self, nodelist, render_context) {
/* 000184 */ 		if (arguments.length) {
/* 000184 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000184 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000184 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000184 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000184 */ 					switch (__attrib0__) {
/* 000184 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000184 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000184 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000184 */ 					}
/* 000184 */ 				}
/* 000184 */ 			}
/* 000184 */ 		}
/* 000184 */ 		else {
/* 000184 */ 		}
/* 000185 */ 		return (function () {
/* 000185 */ 			var __accu0__ = self;
/* 000185 */ 			return __call__ (__accu0__.render_join, __accu0__, (function () {
/* 000185 */ 				var __accu1__ = [];
/* 000186 */ 				var __iterable0__ = nodelist;
/* 000186 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000186 */ 					var n = __getitem__ (__iterable0__, __index0__);
/* 000186 */ 					(function () {
/* 000186 */ 						var __accu2__ = __accu1__;
/* 000186 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000186 */ 							var __accu3__ = self;
/* 000186 */ 							return __call__ (__accu3__.render_node, __accu3__, n, render_context);
/* 000186 */ 						}) ());
/* 000186 */ 					}) ();
/* 000186 */ 				}
/* 000186 */ 				return __accu1__;
/* 000186 */ 			}) ());
/* 000186 */ 		}) ();
/* 000186 */ 	});},
/* 000189 */ 	get render_join () {return __get__ (this, function (self, content_list) {
/* 000189 */ 		if (arguments.length) {
/* 000189 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000189 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000189 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000189 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000189 */ 					switch (__attrib0__) {
/* 000189 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000189 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000189 */ 					}
/* 000189 */ 				}
/* 000189 */ 			}
/* 000189 */ 		}
/* 000189 */ 		else {
/* 000189 */ 		}
/* 000195 */ 		return (function () {
/* 000195 */ 			var __accu0__ = '';
/* 000195 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000195 */ 				var __accu1__ = [];
/* 000195 */ 				var __iterable0__ = content_list;
/* 000195 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000195 */ 					var s = __getitem__ (__iterable0__, __index0__);
/* 000195 */ 					(function () {
/* 000195 */ 						var __accu2__ = __accu1__;
/* 000195 */ 						return __call__ (__accu2__.append, __accu2__, __call__ (str, null, s));
/* 000195 */ 					}) ();
/* 000195 */ 				}
/* 000195 */ 				return __accu1__;
/* 000195 */ 			}) ());
/* 000195 */ 		}) ();
/* 000195 */ 	});},
/* 000197 */ 	get render_join_blocks () {return __get__ (this, function (self, content_list) {
/* 000197 */ 		if (arguments.length) {
/* 000197 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000197 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000197 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000197 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000197 */ 					switch (__attrib0__) {
/* 000197 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000197 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000197 */ 					}
/* 000197 */ 				}
/* 000197 */ 			}
/* 000197 */ 		}
/* 000197 */ 		else {
/* 000197 */ 		}
/* 000205 */ 		return (function () {
/* 000205 */ 			var __accu0__ = self.html_blocks_joiner;
/* 000205 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000205 */ 				var __accu1__ = [];
/* 000206 */ 				var __iterable0__ = content_list;
/* 000206 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000206 */ 					var c = __getitem__ (__iterable0__, __index0__);
/* 000206 */ 					if (__t__ (__t__ (c !== null) && __call__ (len, null, c))) {
/* 000206 */ 						(function () {
/* 000206 */ 							var __accu2__ = __accu1__;
/* 000206 */ 							return __call__ (__accu2__.append, __accu2__, c);
/* 000206 */ 						}) ();
/* 000206 */ 					}
/* 000206 */ 				}
/* 000206 */ 				return __accu1__;
/* 000206 */ 			}) ());
/* 000206 */ 		}) ();
/* 000206 */ 	});},
/* 000212 */ 	get render_value () {return __get__ (this, function (self, value) {
/* 000212 */ 		if (arguments.length) {
/* 000212 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000212 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000212 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000212 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000212 */ 					switch (__attrib0__) {
/* 000212 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000212 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000212 */ 					}
/* 000212 */ 				}
/* 000212 */ 			}
/* 000212 */ 		}
/* 000212 */ 		else {
/* 000212 */ 		}
/* 000213 */ 		return (function () {
/* 000213 */ 			var __accu0__ = self;
/* 000213 */ 			return __call__ (__accu0__.htmlescape, __accu0__, value);
/* 000213 */ 		}) ();
/* 000213 */ 	});},
/* 000215 */ 	get render_empty_error_placeholder () {return __get__ (this, function (self, debug_str) {
/* 000215 */ 		if (arguments.length) {
/* 000215 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000215 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000215 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000215 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000215 */ 					switch (__attrib0__) {
/* 000215 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000215 */ 						case 'debug_str': var debug_str = __allkwargs0__ [__attrib0__]; break;
/* 000215 */ 					}
/* 000215 */ 				}
/* 000215 */ 			}
/* 000215 */ 		}
/* 000215 */ 		else {
/* 000215 */ 		}
/* 000216 */ 		var debug_str_safe = (function () {
/* 000216 */ 			var __accu0__ = debug_str;
/* 000216 */ 			return __call__ (__accu0__.py_replace, __accu0__, '--', '- - ');
/* 000216 */ 		}) ();
/* 000217 */ 		return '<span class="empty-error-placeholder"><!-- {} -->(?)</span>'.format (debug_str_safe);
/* 000217 */ 	});},
/* 000219 */ 	get render_nothing () {return __get__ (this, function (self, annotations) {
/* 000219 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000219 */ 			var annotations = null;
/* 000219 */ 		};
/* 000219 */ 		if (arguments.length) {
/* 000219 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000219 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000219 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000219 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000219 */ 					switch (__attrib0__) {
/* 000219 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000219 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000219 */ 					}
/* 000219 */ 				}
/* 000219 */ 			}
/* 000219 */ 		}
/* 000219 */ 		else {
/* 000219 */ 		}
/* 000220 */ 		if (__t__ (!__t__ ((self.render_nothing_as_comment_with_annotations)))) {
/* 000221 */ 			return '';
/* 000221 */ 		}
/* 000222 */ 		if (__t__ (!__t__ ((annotations)))) {
/* 000223 */ 			var annotations = [];
/* 000223 */ 		}
/* 000224 */ 		var annotations = (function () {
/* 000224 */ 			var __accu0__ = [];
/* 000224 */ 			var __iterable0__ = annotations;
/* 000224 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000224 */ 				var a = __getitem__ (__iterable0__, __index0__);
/* 000224 */ 				(function () {
/* 000224 */ 					var __accu1__ = __accu0__;
/* 000224 */ 					return __call__ (__accu1__.append, __accu1__, (function () {
/* 000224 */ 						var __accu2__ = a;
/* 000224 */ 						return __call__ (__accu2__.py_replace, __accu2__, '--', '- - ');
/* 000224 */ 					}) ());
/* 000224 */ 				}) ();
/* 000224 */ 			}
/* 000224 */ 			return __accu0__;
/* 000224 */ 		}) ();
/* 000225 */ 		return (function () {
/* 000225 */ 			var __accu0__ = '<!-- {} -->';
/* 000225 */ 			return __call__ (__accu0__.format, __accu0__, (function () {
/* 000225 */ 				var __accu1__ = ' ';
/* 000225 */ 				return __call__ (__accu1__.join, __accu1__, annotations);
/* 000225 */ 			}) ());
/* 000225 */ 		}) ();
/* 000225 */ 	});},
/* 000227 */ 	get render_verbatim () {return __get__ (this, function (self, value) {
/* 000227 */ 		var target_id = null;
/* 000227 */ 		if (arguments.length) {
/* 000227 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000227 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000227 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000227 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000227 */ 					switch (__attrib0__) {
/* 000227 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000227 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000227 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000227 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000227 */ 					}
/* 000227 */ 				}
/* 000227 */ 			}
/* 000227 */ 		}
/* 000227 */ 		else {
/* 000227 */ 		}
/* 000228 */ 		var attrs = dict ({});
/* 000229 */ 		if (__t__ (target_id !== null)) {
/* 000230 */ 			__setitem__ (attrs, 'id', target_id);
/* 000230 */ 		}
/* 000231 */ 		return (function () {
/* 000231 */ 			var __accu0__ = self;
/* 000233 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'span', (function () {
/* 000233 */ 				var __accu1__ = self;
/* 000233 */ 				return __call__ (__accu1__.htmlescape, __accu1__, value);
/* 000233 */ 			}) (), __kwargtrans__ ({class_names: (__t__ (annotations) ? annotations : ['verbatim']), attrs: attrs}));
/* 000233 */ 		}) ();
/* 000233 */ 	});},
/* 000238 */ 	get render_math_content () {return __get__ (this, function (self, delimiters, nodelist, render_context, displaytype, environmentname, target_id) {
/* 000238 */ 		if (typeof environmentname == 'undefined' || (environmentname != null && environmentname.hasOwnProperty ("__kwargtrans__"))) {;
/* 000238 */ 			var environmentname = null;
/* 000238 */ 		};
/* 000238 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000238 */ 			var target_id = null;
/* 000238 */ 		};
/* 000238 */ 		if (arguments.length) {
/* 000238 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000238 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000238 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000238 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000238 */ 					switch (__attrib0__) {
/* 000238 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000238 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000238 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000238 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000238 */ 						case 'displaytype': var displaytype = __allkwargs0__ [__attrib0__]; break;
/* 000238 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000238 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000238 */ 					}
/* 000238 */ 				}
/* 000238 */ 			}
/* 000238 */ 		}
/* 000238 */ 		else {
/* 000238 */ 		}
/* 000246 */ 		if (__t__ (!__t__ ((self.use_mathjax)))) {
/* 000247 */ 			(function () {
/* 000247 */ 				var __accu0__ = logger;
/* 000247 */ 				return __call__ (__accu0__.warning, __accu0__, 'called HtmlFragmentRenderer.render_math_content() but self.use_mathjax is not set. Your math will probably not render correctly.');
/* 000247 */ 			}) ();
/* 000247 */ 		}
/* 000253 */ 		var class_names = ['{}-math'.format (displaytype)];
/* 000254 */ 		if (__t__ (environmentname !== null)) {
/* 000255 */ 			(function () {
/* 000255 */ 				var __accu0__ = class_names;
/* 000255 */ 				return __call__ (__accu0__.append, __accu0__, 'env-{}'.format ((function () {
/* 000255 */ 					var __accu1__ = environmentname;
/* 000255 */ 					return __call__ (__accu1__.py_replace, __accu1__, '*', '-star');
/* 000255 */ 				}) ()));
/* 000255 */ 			}) ();
/* 000255 */ 		}
/* 000258 */ 		var content_html = (function () {
/* 000258 */ 			var __accu0__ = self;
/* 000258 */ 			return __call__ (__accu0__.htmlescape, __accu0__, __add__ (__add__ (__getitem__ (delimiters, 0), (function () {
/* 000258 */ 				var __accu1__ = nodelist;
/* 000258 */ 				return __call__ (__accu1__.latex_verbatim, __accu1__);
/* 000258 */ 			}) ()), __getitem__ (delimiters, 1)));
/* 000258 */ 		}) ();
/* 000261 */ 		var attrs = dict ({});
/* 000262 */ 		if (__t__ (target_id !== null)) {
/* 000263 */ 			__setitem__ (attrs, 'id', target_id);
/* 000263 */ 		}
/* 000265 */ 		if (__t__ (__eq__ (displaytype, 'display'))) {
/* 000267 */ 			return (function () {
/* 000267 */ 				var __accu0__ = self;
/* 000267 */ 				return __call__ (__accu0__.wrap_in_tag, __accu0__, 'span', content_html, __kwargtrans__ ({class_names: class_names, attrs: attrs}));
/* 000267 */ 			}) ();
/* 000267 */ 		}
/* 000274 */ 		return (function () {
/* 000274 */ 			var __accu0__ = self;
/* 000274 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'span', content_html, __kwargtrans__ ({class_names: class_names, attrs: attrs}));
/* 000274 */ 		}) ();
/* 000274 */ 	});},
/* 000281 */ 	get render_text_format () {return __get__ (this, function (self, text_formats, nodelist, render_context) {
/* 000281 */ 		if (arguments.length) {
/* 000281 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000281 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000281 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000281 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000281 */ 					switch (__attrib0__) {
/* 000281 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000281 */ 						case 'text_formats': var text_formats = __allkwargs0__ [__attrib0__]; break;
/* 000281 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000281 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000281 */ 					}
/* 000281 */ 				}
/* 000281 */ 			}
/* 000281 */ 		}
/* 000281 */ 		else {
/* 000281 */ 		}
/* 000285 */ 		var content = (function () {
/* 000285 */ 			var __accu0__ = self;
/* 000285 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, nodelist, render_context, __kwargtrans__ ({is_block_level: false}));
/* 000285 */ 		}) ();
/* 000291 */ 		return (function () {
/* 000291 */ 			var __accu0__ = self;
/* 000291 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'span', content, __kwargtrans__ ({class_names: text_formats}));
/* 000291 */ 		}) ();
/* 000291 */ 	});},
/* 000297 */ 	get render_semantic_block () {return __get__ (this, function (self, content, role) {
/* 000297 */ 		var annotations = null;
/* 000297 */ 		var target_id = null;
/* 000297 */ 		if (arguments.length) {
/* 000297 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000297 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000297 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000297 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000297 */ 					switch (__attrib0__) {
/* 000297 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000297 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000297 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000297 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000297 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000297 */ 					}
/* 000297 */ 				}
/* 000297 */ 			}
/* 000297 */ 		}
/* 000297 */ 		else {
/* 000297 */ 		}
/* 000298 */ 		var attrs = dict ({});
/* 000299 */ 		if (__t__ (target_id !== null)) {
/* 000300 */ 			__setitem__ (attrs, 'id', target_id);
/* 000300 */ 		}
/* 000301 */ 		if (__t__ (__in__ (role, tuple (['section', 'main', 'article'])))) {
/* 000302 */ 			return (function () {
/* 000302 */ 				var __accu0__ = self;
/* 000302 */ 				return __call__ (__accu0__.wrap_in_tag, __accu0__, role, content, __kwargtrans__ ({attrs: attrs, class_names: annotations}));
/* 000302 */ 			}) ();
/* 000302 */ 		}
/* 000308 */ 		return (function () {
/* 000308 */ 			var __accu0__ = self;
/* 000308 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'div', content, __kwargtrans__ ({attrs: attrs, class_names: __add__ ([role], (__t__ (annotations) ? annotations : []))}));
/* 000308 */ 		}) ();
/* 000308 */ 	});},
/* 000316 */ 	get render_enumeration () {return __get__ (this, function (self, iter_items_nodelists, counter_formatter, render_context) {
/* 000316 */ 		var target_id_generator = null;
/* 000316 */ 		var annotations = null;
/* 000316 */ 		var nested_depth = null;
/* 000316 */ 		if (arguments.length) {
/* 000316 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000316 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000316 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000316 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000316 */ 					switch (__attrib0__) {
/* 000316 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000316 */ 						case 'iter_items_nodelists': var iter_items_nodelists = __allkwargs0__ [__attrib0__]; break;
/* 000316 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000316 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000316 */ 						case 'target_id_generator': var target_id_generator = __allkwargs0__ [__attrib0__]; break;
/* 000316 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000316 */ 						case 'nested_depth': var nested_depth = __allkwargs0__ [__attrib0__]; break;
/* 000316 */ 					}
/* 000316 */ 				}
/* 000316 */ 			}
/* 000316 */ 		}
/* 000316 */ 		else {
/* 000316 */ 		}
/* 000328 */ 		var s_items = [];
/* 000330 */ 		var __iterable0__ = __call__ (enumerate, null, iter_items_nodelists);
/* 000330 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000330 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000330 */ 			var j = __left0__ [0];
/* 000330 */ 			var item_content_nodelist = __left0__ [1];
/* 000332 */ 			var use_block_level = true;
/* 000333 */ 			if (__t__ (item_content_nodelist.parsing_state.is_block_level === false)) {
/* 000336 */ 				var use_block_level = false;
/* 000336 */ 			}
/* 000338 */ 			(function () {
/* 000338 */ 				var __accu0__ = logger;
/* 000338 */ 				return __call__ (__accu0__.debug, __accu0__, 'render_enumeration: got %d-th item content nodelist = %r', j, item_content_nodelist);
/* 000338 */ 			}) ();
/* 000340 */ 			(function () {
/* 000340 */ 				var __accu0__ = logger;
/* 000340 */ 				return __call__ (__accu0__.debug, __accu0__, 'will use_block_level = %r', use_block_level);
/* 000340 */ 			}) ();
/* 000342 */ 			var item_content = (function () {
/* 000342 */ 				var __accu0__ = self;
/* 000342 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, item_content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: use_block_level}));
/* 000342 */ 			}) ();
/* 000348 */ 			var enumno = __add__ (1, j);
/* 000350 */ 			var tag_nodelist = __call__ (counter_formatter, null, enumno);
/* 000351 */ 			if (__t__ (__call__ (isinstance, null, tag_nodelist, str))) {
/* 000352 */ 				var tag_content = (function () {
/* 000352 */ 					var __accu0__ = self;
/* 000352 */ 					return __call__ (__accu0__.render_value, __accu0__, tag_nodelist);
/* 000352 */ 				}) ();
/* 000352 */ 			}
/* 000353 */ 			else {
/* 000354 */ 				var tag_content = (function () {
/* 000354 */ 					var __accu0__ = self;
/* 000354 */ 					return __call__ (__accu0__.render_nodelist, __accu0__, tag_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000354 */ 				}) ();
/* 000354 */ 			}
/* 000360 */ 			var dtattrs = dict ({});
/* 000361 */ 			if (__t__ (target_id_generator !== null)) {
/* 000362 */ 				__setitem__ (dtattrs, 'id', __call__ (target_id_generator, null, enumno));
/* 000362 */ 			}
/* 000364 */ 			(function () {
/* 000364 */ 				var __accu0__ = s_items;
/* 000365 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000365 */ 					var __accu1__ = self;
/* 000366 */ 					return __call__ (__accu1__.render_join, __accu1__, [(function () {
/* 000366 */ 						var __accu2__ = self;
/* 000366 */ 						return __call__ (__accu2__.wrap_in_tag, __accu2__, 'dt', tag_content, __kwargtrans__ ({attrs: dtattrs}));
/* 000371 */ 					}) (), (function () {
/* 000371 */ 						var __accu2__ = self;
/* 000371 */ 						return __call__ (__accu2__.wrap_in_tag, __accu2__, 'dd', item_content);
/* 000371 */ 					}) ()]);
/* 000371 */ 				}) ());
/* 000371 */ 			}) ();
/* 000371 */ 		}
/* 000378 */ 		return (function () {
/* 000378 */ 			var __accu0__ = self;
/* 000380 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'dl', (function () {
/* 000380 */ 				var __accu1__ = self;
/* 000380 */ 				return __call__ (__accu1__.render_join, __accu1__, s_items);
/* 000380 */ 			}) (), __kwargtrans__ ({class_names: __add__ (['enumeration'], (__t__ (annotations) ? annotations : []))}));
/* 000380 */ 		}) ();
/* 000380 */ 	});},
/* 000385 */ 	get render_heading () {return __get__ (this, function (self, heading_nodelist, render_context) {
/* 000385 */ 		var heading_level = 1;
/* 000385 */ 		var target_id = null;
/* 000385 */ 		var inline_heading = false;
/* 000385 */ 		var annotations = null;
/* 000385 */ 		if (arguments.length) {
/* 000385 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000385 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000385 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000385 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000385 */ 					switch (__attrib0__) {
/* 000385 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000385 */ 						case 'heading_nodelist': var heading_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000385 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000385 */ 						case 'heading_level': var heading_level = __allkwargs0__ [__attrib0__]; break;
/* 000385 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000385 */ 						case 'inline_heading': var inline_heading = __allkwargs0__ [__attrib0__]; break;
/* 000385 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000385 */ 					}
/* 000385 */ 				}
/* 000385 */ 			}
/* 000385 */ 		}
/* 000385 */ 		else {
/* 000385 */ 		}
/* 000389 */ 		if (__t__ (!__in__ (heading_level, self.heading_tags_by_level))) {
/* 000391 */ 			var __except0__ = __call__ (ValueError, null, 'Bad heading_level={}, expected one of {}'.format (heading_level, __call__ (list, null, (function () {
/* 000391 */ 				var __accu0__ = self.heading_tags_by_level;
/* 000391 */ 				return __call__ (__accu0__.py_keys, __accu0__);
/* 000391 */ 			}) ())));
/* 000391 */ 			__except0__.__cause__ = null;
/* 000391 */ 			throw __except0__;
/* 000391 */ 		}
/* 000393 */ 		var annot = (__t__ (annotations) ? __call__ (list, null, annotations) : []);
/* 000394 */ 		(function () {
/* 000394 */ 			var __accu0__ = annot;
/* 000394 */ 			return __call__ (__accu0__.append, __accu0__, 'heading-level-{}'.format (heading_level));
/* 000394 */ 		}) ();
/* 000395 */ 		if (__t__ (inline_heading)) {
/* 000396 */ 			(function () {
/* 000396 */ 				var __accu0__ = annot;
/* 000396 */ 				return __call__ (__accu0__.append, __accu0__, 'heading-inline');
/* 000396 */ 			}) ();
/* 000396 */ 		}
/* 000398 */ 		var attrs = dict ({});
/* 000399 */ 		if (__t__ (target_id !== null)) {
/* 000400 */ 			__setitem__ (attrs, 'id', target_id);
/* 000400 */ 		}
/* 000402 */ 		var content = (function () {
/* 000402 */ 			var __accu0__ = self;
/* 000404 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, __getitem__ (self.heading_tags_by_level, heading_level), (function () {
/* 000404 */ 				var __accu1__ = self;
/* 000404 */ 				return __call__ (__accu1__.render_inline_content, __accu1__, heading_nodelist, render_context);
/* 000404 */ 			}) (), __kwargtrans__ ({class_names: annot, attrs: attrs}));
/* 000404 */ 		}) ();
/* 000408 */ 		if (__t__ (__t__ (inline_heading) && self.inline_heading_add_space)) {
/* 000409 */ 			var content = __call__ (__iadd__, null, content, ' ');
/* 000409 */ 		}
/* 000410 */ 		(function () {
/* 000410 */ 			var __accu0__ = logger;
/* 000410 */ 			return __call__ (__accu0__.debug, __accu0__, 'Rendered heading: content={}; inline_heading={}; add_space={}'.format (content, inline_heading, self.inline_heading_add_space));
/* 000410 */ 		}) ();
/* 000412 */ 		return content;
/* 000412 */ 	});},
/* 000414 */ 	get render_link () {return __get__ (this, function (self, ref_type, href, display_nodelist, render_context, annotations) {
/* 000414 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000414 */ 			var annotations = null;
/* 000414 */ 		};
/* 000414 */ 		if (arguments.length) {
/* 000414 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000414 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000414 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000414 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000414 */ 					switch (__attrib0__) {
/* 000414 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000414 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000414 */ 						case 'href': var href = __allkwargs0__ [__attrib0__]; break;
/* 000414 */ 						case 'display_nodelist': var display_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000414 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000414 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000414 */ 					}
/* 000414 */ 				}
/* 000414 */ 			}
/* 000414 */ 		}
/* 000414 */ 		else {
/* 000414 */ 		}
/* 000415 */ 		var display_content = (function () {
/* 000415 */ 			var __accu0__ = self;
/* 000415 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, display_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000415 */ 		}) ();
/* 000420 */ 		return (function () {
/* 000420 */ 			var __accu0__ = self;
/* 000420 */ 			return __call__ (__accu0__.wrap_in_link, __accu0__, display_content, href, __kwargtrans__ ({class_names: __add__ (['href-{}'.format (ref_type)], (__t__ (annotations) ? annotations : []))}));
/* 000420 */ 		}) ();
/* 000420 */ 	});},
/* 000427 */ 	get render_delayed_marker () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000427 */ 		if (arguments.length) {
/* 000427 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000427 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000427 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000427 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000427 */ 					switch (__attrib0__) {
/* 000427 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000427 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000427 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000427 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000427 */ 					}
/* 000427 */ 				}
/* 000427 */ 			}
/* 000427 */ 		}
/* 000427 */ 		else {
/* 000427 */ 		}
/* 000428 */ 		return '<LLM:DLYD:{}/>'.format (delayed_key);
/* 000428 */ 	});},
/* 000430 */ 	get render_delayed_dummy_placeholder () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000430 */ 		if (arguments.length) {
/* 000430 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000430 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000430 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000430 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000430 */ 					switch (__attrib0__) {
/* 000430 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000430 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000430 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000430 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000430 */ 					}
/* 000430 */ 				}
/* 000430 */ 			}
/* 000430 */ 		}
/* 000430 */ 		else {
/* 000430 */ 		}
/* 000431 */ 		return '<!-- delayed:{} -->'.format (delayed_key);
/* 000431 */ 	});},
/* 000433 */ 	get replace_delayed_markers_with_final_values () {return __get__ (this, function (self, content, delayed_values) {
/* 000433 */ 		if (arguments.length) {
/* 000433 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000433 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000433 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000433 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000433 */ 					switch (__attrib0__) {
/* 000433 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000433 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000433 */ 						case 'delayed_values': var delayed_values = __allkwargs0__ [__attrib0__]; break;
/* 000433 */ 					}
/* 000433 */ 				}
/* 000433 */ 			}
/* 000433 */ 		}
/* 000433 */ 		else {
/* 000433 */ 		}
/* 000434 */ 		return (function () {
/* 000434 */ 			var __accu0__ = _rx_delayed_markers;
/* 000434 */ 			return __call__ (__accu0__.sub, __accu0__, (function __lambda__ (m) {
/* 000434 */ 				if (arguments.length) {
/* 000434 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000434 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000434 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000434 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000434 */ 							switch (__attrib0__) {
/* 000434 */ 								case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000434 */ 							}
/* 000434 */ 						}
/* 000434 */ 					}
/* 000434 */ 				}
/* 000434 */ 				else {
/* 000434 */ 				}
/* 000435 */ 				return __getitem__ (delayed_values, __call__ (int, null, (function () {
/* 000435 */ 					var __accu1__ = m;
/* 000435 */ 					return __call__ (__accu1__.group, __accu1__, 'key');
/* 000435 */ 				}) ()));
/* 000435 */ 			}), content);
/* 000435 */ 		}) ();
/* 000435 */ 	});},
/* 000442 */ 	get render_float () {return __get__ (this, function (self, float_instance, render_context) {
/* 000442 */ 		if (arguments.length) {
/* 000442 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000442 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000442 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000442 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000442 */ 					switch (__attrib0__) {
/* 000442 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000442 */ 						case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000442 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000442 */ 					}
/* 000442 */ 				}
/* 000442 */ 			}
/* 000442 */ 		}
/* 000442 */ 		else {
/* 000442 */ 		}
/* 000445 */ 		var figattrs = dict ({});
/* 000447 */ 		if (__t__ (float_instance.target_id !== null)) {
/* 000448 */ 			__setitem__ (figattrs, 'id', float_instance.target_id);
/* 000448 */ 		}
/* 000450 */ 		var full_figcaption_rendered_list = [];
/* 000451 */ 		if (__t__ (float_instance.number !== null)) {
/* 000453 */ 			(function () {
/* 000453 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000454 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000454 */ 					var __accu1__ = self;
/* 000456 */ 					return __call__ (__accu1__.wrap_in_tag, __accu1__, 'span', (function () {
/* 000456 */ 						var __accu2__ = self;
/* 000457 */ 						return __call__ (__accu2__.render_join, __accu2__, [(function () {
/* 000457 */ 							var __accu3__ = self;
/* 000457 */ 							return __call__ (__accu3__.render_value, __accu3__, float_instance.float_type_info.float_caption_name);
/* 000461 */ 						}) (), '&nbsp;', (function () {
/* 000461 */ 							var __accu3__ = self;
/* 000461 */ 							return __call__ (__accu3__.render_nodelist, __accu3__, float_instance.formatted_counter_value_llm.nodes, __kwargtrans__ ({render_context: render_context}));
/* 000461 */ 						}) ()]);
/* 000461 */ 					}) (), __kwargtrans__ ({class_names: ['float-number']}));
/* 000461 */ 				}) ());
/* 000461 */ 			}) ();
/* 000461 */ 		}
/* 000469 */ 		else if (__t__ (float_instance.caption_nodelist)) {
/* 000472 */ 			(function () {
/* 000472 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000473 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000473 */ 					var __accu1__ = self;
/* 000475 */ 					return __call__ (__accu1__.wrap_in_tag, __accu1__, 'span', (function () {
/* 000475 */ 						var __accu2__ = self;
/* 000476 */ 						return __call__ (__accu2__.render_join, __accu2__, [(function () {
/* 000476 */ 							var __accu3__ = self;
/* 000476 */ 							return __call__ (__accu3__.render_value, __accu3__, float_instance.float_type_info.float_caption_name);
/* 000476 */ 						}) ()]);
/* 000476 */ 					}) (), __kwargtrans__ ({class_names: ['float-no-number']}));
/* 000476 */ 				}) ());
/* 000476 */ 			}) ();
/* 000476 */ 		}
/* 000479 */ 		else {
/* 000483 */ 			// pass;
/* 000483 */ 		}
/* 000485 */ 		if (__t__ (float_instance.caption_nodelist)) {
/* 000489 */ 			(function () {
/* 000489 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000489 */ 				return __call__ (__accu0__.append, __accu0__, ': ');
/* 000489 */ 			}) ();
/* 000492 */ 			(function () {
/* 000492 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000493 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000493 */ 					var __accu1__ = self;
/* 000493 */ 					return __call__ (__accu1__.render_nodelist, __accu1__, float_instance.caption_nodelist, __kwargtrans__ ({render_context: render_context}));
/* 000493 */ 				}) ());
/* 000493 */ 			}) ();
/* 000493 */ 		}
/* 000499 */ 		var rendered_float_caption = null;
/* 000500 */ 		if (__t__ (full_figcaption_rendered_list)) {
/* 000501 */ 			var rendered_float_caption = (function () {
/* 000501 */ 				var __accu0__ = self;
/* 000503 */ 				return __call__ (__accu0__.wrap_in_tag, __accu0__, 'figcaption', (function () {
/* 000503 */ 					var __accu1__ = self;
/* 000505 */ 					return __call__ (__accu1__.wrap_in_tag, __accu1__, 'span', (function () {
/* 000505 */ 						var __accu2__ = self;
/* 000505 */ 						return __call__ (__accu2__.render_join, __accu2__, full_figcaption_rendered_list);
/* 000505 */ 					}) ());
/* 000505 */ 				}) (), __kwargtrans__ ({class_names: ['float-caption-content']}));
/* 000505 */ 			}) ();
/* 000505 */ 		}
/* 000510 */ 		var float_content_block_content = (function () {
/* 000510 */ 			var __accu0__ = self;
/* 000510 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, float_instance.content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: true}));
/* 000510 */ 		}) ();
/* 000515 */ 		var float_content_block = (function () {
/* 000515 */ 			var __accu0__ = self;
/* 000515 */ 			return __call__ (__accu0__.render_semantic_block, __accu0__, float_content_block_content, 'float-contents');
/* 000515 */ 		}) ();
/* 000520 */ 		if (__t__ (rendered_float_caption !== null)) {
/* 000521 */ 			var float_content_with_caption = (function () {
/* 000521 */ 				var __accu0__ = self;
/* 000521 */ 				return __call__ (__accu0__.render_join_blocks, __accu0__, [float_content_block, rendered_float_caption]);
/* 000521 */ 			}) ();
/* 000521 */ 		}
/* 000524 */ 		else {
/* 000526 */ 			var float_content_with_caption = float_content_block;
/* 000526 */ 		}
/* 000528 */ 		var full_figure = (function () {
/* 000528 */ 			var __accu0__ = self;
/* 000528 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'figure', float_content_with_caption, __kwargtrans__ ({attrs: figattrs, class_names: ['float', 'float-{}'.format (float_instance.float_type)]}));
/* 000528 */ 		}) ();
/* 000535 */ 		return full_figure;
/* 000535 */ 	});},
/* 000538 */ 	graphics_raster_magnification: 1,
/* 000539 */ 	graphics_vector_magnification: 1,
/* 000541 */ 	get render_graphics_block () {return __get__ (this, function (self, graphics_resource) {
/* 000541 */ 		if (arguments.length) {
/* 000541 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000541 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000541 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000541 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000541 */ 					switch (__attrib0__) {
/* 000541 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000541 */ 						case 'graphics_resource': var graphics_resource = __allkwargs0__ [__attrib0__]; break;
/* 000541 */ 					}
/* 000541 */ 				}
/* 000541 */ 			}
/* 000541 */ 		}
/* 000541 */ 		else {
/* 000541 */ 		}
/* 000543 */ 		var imgattrs = dict ({});
/* 000545 */ 		var styparts = [];
/* 000546 */ 		if (__t__ (graphics_resource.physical_dimensions !== null)) {
/* 000548 */ 			var __left0__ = graphics_resource.physical_dimensions;
/* 000548 */ 			var width_pt = __left0__ [0];
/* 000548 */ 			var height_pt = __left0__ [1];
/* 000550 */ 			if (__t__ (__eq__ (graphics_resource.graphics_type, 'raster'))) {
/* 000551 */ 				if (__t__ (width_pt !== null)) {
/* 000552 */ 					var width_pt = __call__ (__imul__, null, width_pt, self.graphics_raster_magnification);
/* 000552 */ 				}
/* 000553 */ 				if (__t__ (height_pt !== null)) {
/* 000554 */ 					var height_pt = __call__ (__imul__, null, height_pt, self.graphics_raster_magnification);
/* 000554 */ 				}
/* 000554 */ 			}
/* 000555 */ 			else if (__t__ (__eq__ (graphics_resource.graphics_type, 'vector'))) {
/* 000556 */ 				if (__t__ (width_pt !== null)) {
/* 000557 */ 					var width_pt = __call__ (__imul__, null, width_pt, self.graphics_vector_magnification);
/* 000557 */ 				}
/* 000558 */ 				if (__t__ (height_pt !== null)) {
/* 000559 */ 					var height_pt = __call__ (__imul__, null, height_pt, self.graphics_vector_magnification);
/* 000559 */ 				}
/* 000559 */ 			}
/* 000561 */ 			if (__t__ (width_pt !== null)) {
/* 000562 */ 				(function () {
/* 000562 */ 					var __accu0__ = styparts;
/* 000562 */ 					return __call__ (__accu0__.append, __accu0__, 'width:{}pt'.format (width_pt));
/* 000562 */ 				}) ();
/* 000562 */ 			}
/* 000563 */ 			if (__t__ (height_pt !== null)) {
/* 000564 */ 				(function () {
/* 000564 */ 					var __accu0__ = styparts;
/* 000564 */ 					return __call__ (__accu0__.append, __accu0__, 'height:{}pt'.format (height_pt));
/* 000564 */ 				}) ();
/* 000564 */ 			}
/* 000564 */ 		}
/* 000566 */ 		if (__t__ (styparts)) {
/* 000567 */ 			__setitem__ (imgattrs, 'style', (function () {
/* 000567 */ 				var __accu0__ = ';';
/* 000567 */ 				return __call__ (__accu0__.join, __accu0__, styparts);
/* 000567 */ 			}) ());
/* 000567 */ 		}
/* 000569 */ 		var src_url = graphics_resource.src_url;
/* 000570 */ 		__setitem__ (imgattrs, 'src', src_url);
/* 000572 */ 		if (__t__ (__t__ (graphics_resource.srcset !== null) && __call__ (len, null, graphics_resource.srcset))) {
/* 000573 */ 			__setitem__ (imgattrs, 'srcset', graphics_resource.srcset);
/* 000573 */ 		}
/* 000576 */ 		return (function () {
/* 000576 */ 			var __accu0__ = self;
/* 000576 */ 			return __call__ (__accu0__.generate_open_tag, __accu0__, 'img', __kwargtrans__ ({attrs: imgattrs}));
/* 000576 */ 		}) ();
/* 000576 */ 	});},
/* 000579 */ 	get render_cells () {return __get__ (this, function (self, cells_model, render_context, target_id) {
/* 000579 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000579 */ 			var target_id = null;
/* 000579 */ 		};
/* 000579 */ 		if (arguments.length) {
/* 000579 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000579 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000579 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000579 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000579 */ 					switch (__attrib0__) {
/* 000579 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000579 */ 						case 'cells_model': var cells_model = __allkwargs0__ [__attrib0__]; break;
/* 000579 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000579 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000579 */ 					}
/* 000579 */ 				}
/* 000579 */ 			}
/* 000579 */ 		}
/* 000579 */ 		else {
/* 000579 */ 		}
/* 000581 */ 		var data_items = [];
/* 000582 */ 		var row_j = 0;
/* 000583 */ 		while (__t__ (__lt__ (row_j, __call__ (len, null, cells_model.grid_data)))) {
/* 000584 */ 			var row_items = [];
/* 000585 */ 			var col_j = 0;
/* 000586 */ 			while (__t__ (__lt__ (col_j, __call__ (len, null, __getitem__ (cells_model.grid_data, row_j))))) {
/* 000588 */ 				var grid_cell_data = __getitem__ (__getitem__ (cells_model.grid_data, row_j), col_j);
/* 000590 */ 				if (__t__ (__t__ (grid_cell_data === null) || __getitem__ (grid_cell_data, 'cell') === null)) {
/* 000593 */ 					(function () {
/* 000593 */ 						var __accu0__ = row_items;
/* 000593 */ 						return __call__ (__accu0__.append, __accu0__, (function () {
/* 000593 */ 							var __accu1__ = self;
/* 000593 */ 							return __call__ (__accu1__.wrap_in_tag, __accu1__, 'td', '', __kwargtrans__ ({class_names: ['cell-empty']}));
/* 000593 */ 						}) ());
/* 000593 */ 					}) ();
/* 000598 */ 					var col_j = __call__ (__iadd__, null, col_j, 1);
/* 000598 */ 					continue;
/* 000598 */ 				}
/* 000601 */ 				if (__t__ (__getitem__ (grid_cell_data, 'is_topleft'))) {
/* 000603 */ 					var cell = __getitem__ (grid_cell_data, 'cell');
/* 000604 */ 					var rendered_cell_contents = (function () {
/* 000604 */ 						var __accu0__ = self;
/* 000604 */ 						return __call__ (__accu0__.render_nodelist, __accu0__, cell.content_nodes, __kwargtrans__ ({render_context: render_context}));
/* 000604 */ 					}) ();
/* 000608 */ 					var clsnames = __add__ (['cell'], (function () {
/* 000608 */ 						var __accu0__ = [];
/* 000608 */ 						var __iterable0__ = cell.styles;
/* 000608 */ 						for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000608 */ 							var sty = __getitem__ (__iterable0__, __index0__);
/* 000608 */ 							(function () {
/* 000608 */ 								var __accu1__ = __accu0__;
/* 000608 */ 								return __call__ (__accu1__.append, __accu1__, 'cellstyle-{}'.format (sty));
/* 000608 */ 							}) ();
/* 000608 */ 						}
/* 000608 */ 						return __accu0__;
/* 000608 */ 					}) ());
/* 000609 */ 					var tagname = 'td';
/* 000610 */ 					if (__t__ (__t__ (__in__ ('H', cell.styles)) || __in__ ('rH', cell.styles))) {
/* 000611 */ 						var tagname = 'th';
/* 000611 */ 					}
/* 000612 */ 					var attrs = dict ({});
/* 000613 */ 					var cplc = cell.placement;
/* 000614 */ 					if (__t__ (__ne__ (cplc.col_range.end, __add__ (cplc.col_range.start, 1)))) {
/* 000617 */ 						__setitem__ (attrs, 'colspan', __call__ (str, null, __sub__ (cplc.col_range.end, cplc.col_range.start)));
/* 000617 */ 					}
/* 000618 */ 					if (__t__ (__ne__ (cplc.row_range.end, __add__ (cplc.row_range.start, 1)))) {
/* 000620 */ 						__setitem__ (attrs, 'rowspan', __call__ (str, null, __sub__ (cplc.row_range.end, cplc.row_range.start)));
/* 000620 */ 					}
/* 000621 */ 					(function () {
/* 000621 */ 						var __accu0__ = row_items;
/* 000622 */ 						return __call__ (__accu0__.append, __accu0__, (function () {
/* 000622 */ 							var __accu1__ = self;
/* 000622 */ 							return __call__ (__accu1__.wrap_in_tag, __accu1__, tagname, rendered_cell_contents, __kwargtrans__ ({attrs: attrs, class_names: clsnames}));
/* 000622 */ 						}) ());
/* 000622 */ 					}) ();
/* 000629 */ 					var col_j = cplc.col_range.end;
/* 000629 */ 					continue;
/* 000629 */ 				}
/* 000634 */ 				var col_j = __call__ (__iadd__, null, col_j, 1);
/* 000634 */ 			}
/* 000636 */ 			(function () {
/* 000636 */ 				var __accu0__ = data_items;
/* 000636 */ 				return __call__ (__accu0__.append, __accu0__, row_items);
/* 000636 */ 			}) ();
/* 000637 */ 			var row_j = __call__ (__iadd__, null, row_j, 1);
/* 000637 */ 		}
/* 000639 */ 		var table_attrs = dict ({});
/* 000640 */ 		if (__t__ (target_id !== null)) {
/* 000641 */ 			__setitem__ (table_attrs, 'id', target_id);
/* 000641 */ 		}
/* 000643 */ 		var s = (function () {
/* 000643 */ 			var __accu0__ = self;
/* 000645 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'table', (function () {
/* 000645 */ 				var __accu1__ = '';
/* 000645 */ 				return __call__ (__accu1__.join, __accu1__, (function () {
/* 000645 */ 					var __accu2__ = [];
/* 000645 */ 					var __iterable0__ = data_items;
/* 000645 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000647 */ 						var row_items = __getitem__ (__iterable0__, __index0__);
/* 000647 */ 						(function () {
/* 000647 */ 							var __accu3__ = __accu2__;
/* 000646 */ 							return __call__ (__accu3__.append, __accu3__, __add__ (__add__ ('<tr>', (function () {
/* 000646 */ 								var __accu4__ = '';
/* 000646 */ 								return __call__ (__accu4__.join, __accu4__, row_items);
/* 000646 */ 							}) ()), '</tr>'));
/* 000646 */ 						}) ();
/* 000646 */ 					}
/* 000646 */ 					return __accu2__;
/* 000646 */ 				}) ());
/* 000646 */ 			}) (), __kwargtrans__ ({attrs: table_attrs, class_names: ['cells']}));
/* 000646 */ 		}) ();
/* 000652 */ 		return s;
/* 000652 */ 	});},
/* 000655 */ 	get get_html_css_global () {return __get__ (this, function (self) {
/* 000655 */ 		if (arguments.length) {
/* 000655 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000655 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000655 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000655 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000655 */ 					switch (__attrib0__) {
/* 000655 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000655 */ 					}
/* 000655 */ 				}
/* 000655 */ 			}
/* 000655 */ 		}
/* 000655 */ 		else {
/* 000655 */ 		}
/* 000656 */ 		return _html_css_global;
/* 000656 */ 	});},
/* 000658 */ 	get get_html_css_content () {return __get__ (this, function (self) {
/* 000658 */ 		if (arguments.length) {
/* 000658 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000658 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000658 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000658 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000658 */ 					switch (__attrib0__) {
/* 000658 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000658 */ 					}
/* 000658 */ 				}
/* 000658 */ 			}
/* 000658 */ 		}
/* 000658 */ 		else {
/* 000658 */ 		}
/* 000659 */ 		return _html_css_content;
/* 000659 */ 	});},
/* 000661 */ 	get get_html_js () {return __get__ (this, function (self) {
/* 000661 */ 		if (arguments.length) {
/* 000661 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000661 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000661 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000661 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000661 */ 					switch (__attrib0__) {
/* 000661 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000661 */ 					}
/* 000661 */ 				}
/* 000661 */ 			}
/* 000661 */ 		}
/* 000661 */ 		else {
/* 000661 */ 		}
/* 000662 */ 		if (__t__ (self.use_mathjax)) {
/* 000663 */ 			return _html_js_mathjax;
/* 000663 */ 		}
/* 000664 */ 		return '';
/* 000664 */ 	});},
/* 000666 */ 	get get_html_body_end_js_scripts () {return __get__ (this, function (self) {
/* 000666 */ 		if (arguments.length) {
/* 000666 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000666 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000666 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000666 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000666 */ 					switch (__attrib0__) {
/* 000666 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000666 */ 					}
/* 000666 */ 				}
/* 000666 */ 			}
/* 000666 */ 		}
/* 000666 */ 		else {
/* 000666 */ 		}
/* 000667 */ 		if (__t__ (self.use_mathjax)) {
/* 000668 */ 			return _html_body_end_js_scripts_mathjax;
/* 000668 */ 		}
/* 000669 */ 		return '';
/* 000669 */ 	});}
/* 000669 */ });
/* 000675 */ export var _rx_delayed_markers = (function () {
/* 000675 */ 	var __accu0__ = re;
/* 000675 */ 	return __call__ (__accu0__.compile, __accu0__, '<LLM:DLYD:(?P<key>\\d+)\\s*/>');
/* 000675 */ }) ();
/* 000682 */ export var _html_css_global = '\nhtml, body {\n  font-size: 16px;\n  line-height: 1.3em;\n}\n\narticle {\n  max-width: 640px;\n  margin: 0px auto;\n}\n\np, ul, ol {\n  margin: 1em 0px;\n}\np:first-child, ul:first-child, ol:first-child {\n  margin-top: 0px;\n}\np:last-child, ul:last-child, ol:last-child {\n  margin-bottom: 0px;\n}\ndd > p, dd > p:first-child, dd > p:last-child {\n  margin: 0.33em 0px;\n}\n\na, a:link, a:hover, a:active, a:visited {\n  color: #3232c8;\n  text-decoration: none;\n}\na:hover {\n  color: #22228a;\n}\n';
/* 000715 */ export var _html_css_content = "\n.emph, .textit {\n  font-style: italic;\n}\n.textbf {\n  font-weight: bold;\n}\n\nh1 {\n  font-size: 1.6rem;\n  font-weight: bold;\n  margin: 1em 0px;\n}\nh2 {\n  font-size: 1.3rem;\n  font-weight: bold;\n  margin: 1em 0px;\n}\nh3 {\n  font-size: 1rem;\n  font-weight: bold;\n  margin: 1em 0px;\n}\n\n.heading-level-4 {\n  font-style: italic;\n  display: inline;\n}\n.heading-level-4::after {\n  display: inline-block;\n  margin: 0px .12em;\n  content: '—';\n}\n\n.heading-level-5 {\n  font-style: italic;\n  font-size: .9em;\n  display: inline;\n}\n.heading-level-5::after {\n  display: inline-block;\n  margin-right: .12em;\n  content: '';\n}\n\n.heading-level-6 {\n  font-style: italic;\n  font-size: .8em;\n  display: inline;\n}\n.heading-level-6::after {\n  display: inline-block;\n  margin-right: .06em;\n  content: '';\n}\n\ndl.enumeration {\n  display: block;\n  margin-left: 2.5em;\n}\ndl.enumeration > dt {\n  float: left;\n  clear: left;\n  display: inline-block;\n  /*margin: 0px; */\n  margin-left: -2.5em;\n  width: 2.0em;\n  min-width: 2.0em;\n  max-width: 2.0em;\n  margin-right: 0.5em;\n  text-align: right;\n}\ndl.enumeration > dd {\n  /*display: inline-block;\n  width: 100%;*/\n  border: 0px;\n  padding: 0px;\n  margin: 0px;\n}\n\nfigure.float {\n  width: 100%;\n  border-width: 1px 0px 1px 0px;\n  border-style: solid none solid none;\n  border-color: rgba(120, 120, 140, 0.15);\n  margin: 0.5rem 0px;\n  padding: 0.5rem 0px;\n}\n\nfigure.float .float-contents {\n  width: 100%;\n  max-width: 100%;\n  overflow-x: auto;\n}\n\nfigure.float .float-contents img {\n  display: block;\n  margin: 0pt auto;\n  padding: 0pt;\n  border: 0pt;\n  margin: 0px auto;\n}\n\nfigure.float figcaption {\n  display: block;\n  margin-top: 0.5em;\n  margin: 0.75em 2em 0px;\n  text-align: center;\n}\n\nfigure.float figcaption > span {\n  display: inline-block;\n  font-style: italic;\n  text-align: left;\n}\n\ntable {\n  margin: 1em 0px 1em 0px;\n  border-collapse: collapse;\n  border-top: solid 1pt;\n  border-bottom: solid 1pt;\n}\nfigure.float .float-contents table {\n  margin: 0px auto;\n}\ntd {\n  padding: 0.3em 0.5em;\n}\nth {\n  padding: 0.3em 0.5em;\n}\nth.cellstyle-H {\n  border-bottom: solid .5pt;\n}\nth.cellstyle-rH {\n}\n.cellstyle-l {\n  text-align: left;\n}\n.cellstyle-c {\n  text-align: center;\n}\n.cellstyle-r {\n  text-align: right;\n}\n.cellstyle-green {\n  background-color: rgb(200,255,200);\n}\n.cellstyle-blue {\n  background-color: rgb(200,220,255);\n}\n.cellstyle-yellow {\n  background-color: rgb(255,255,200);\n}\n.cellstyle-red {\n  background-color: rgb(255,200,200);\n}\n.cellstyle-lvert {\n  border-left: solid .5pt;\n}\n.cellstyle-rvert {\n  border-right: solid .5pt;\n}\n\n.defterm {\n  font-style: italic;\n}\n\n.defterm .defterm-term {\n  font-style: italic;\n  font-weight: bold;\n}\n\n.display-math {\n  width: 100%;\n  max-width: 100%;\n  display: block;\n  overflow-x: auto;\n}\n\n.citation {\n  font-size: 0.8em;\n  display: inline-block;\n  vertical-align: 0.3em;\n  margin-top: -0.3em;\n}\n.footnote {\n  font-size: 0.8em;\n  display: inline-block;\n  vertical-align: 0.3em;\n  margin-top: -0.3em;\n}\ndl.citation-list > dt, dl.footnote-list > dt {\n  font-size: 0.8em;\n  display: inline-block;\n  vertical-align: 0.3em;\n  margin-top: -0.3em;\n}\n";
/* 000916 */ export var _html_js_mathjax = '\nMathJax = {\n    tex: {\n        inlineMath: [[\'\\\\(\', \'\\\\)\']],\n        displayMath: [[\'\\\\[\', \'\\\\]\']],\n        processEnvironments: true,\n        processRefs: true,\n\n        // equation numbering on\n        tags: \'ams\'\n    },\n    options: {\n        // all MathJax content is marked with CSS classes\n        // skipHtmlTags: \'body\',\n        // processHtmlClass: \'display-math|inline-math\',\n    },\n    startup: {\n        pageReady: function() {\n            // override the default "typeset everything on the page" behavior to\n            // only typeset whatever we have explicitly marked as math\n            return typesetPageMathPromise();\n        }\n    }\n};\nfunction typesetPageMathPromise()\n{\n    var elements = document.querySelectorAll(\'.display-math, .inline-math\');\n    return MathJax.typesetPromise(elements);\n}\n';
/* 000947 */ export var _html_body_end_js_scripts_mathjax = '\n<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>\n<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>\n';
/* 000006 */ 
//# sourceMappingURL=llm.fragmentrenderer.html.map