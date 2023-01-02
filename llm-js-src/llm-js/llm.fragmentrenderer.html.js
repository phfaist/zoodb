/* 000001 */ // Transcrypt'ed from Python, 2023-01-02 19:06:32
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
/* 000338 */ 			// pass;
/* 000342 */ 			// pass;
/* 000346 */ 			var item_content = (function () {
/* 000346 */ 				var __accu0__ = self;
/* 000346 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, item_content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: use_block_level}));
/* 000346 */ 			}) ();
/* 000352 */ 			var enumno = __add__ (1, j);
/* 000354 */ 			var tag_nodelist = __call__ (counter_formatter, null, enumno);
/* 000355 */ 			if (__t__ (__call__ (isinstance, null, tag_nodelist, str))) {
/* 000356 */ 				var tag_content = (function () {
/* 000356 */ 					var __accu0__ = self;
/* 000356 */ 					return __call__ (__accu0__.render_value, __accu0__, tag_nodelist);
/* 000356 */ 				}) ();
/* 000356 */ 			}
/* 000357 */ 			else {
/* 000358 */ 				var tag_content = (function () {
/* 000358 */ 					var __accu0__ = self;
/* 000358 */ 					return __call__ (__accu0__.render_nodelist, __accu0__, tag_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000358 */ 				}) ();
/* 000358 */ 			}
/* 000364 */ 			var dtattrs = dict ({});
/* 000365 */ 			if (__t__ (target_id_generator !== null)) {
/* 000366 */ 				__setitem__ (dtattrs, 'id', __call__ (target_id_generator, null, enumno));
/* 000366 */ 			}
/* 000368 */ 			(function () {
/* 000368 */ 				var __accu0__ = s_items;
/* 000369 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000369 */ 					var __accu1__ = self;
/* 000370 */ 					return __call__ (__accu1__.render_join, __accu1__, [(function () {
/* 000370 */ 						var __accu2__ = self;
/* 000370 */ 						return __call__ (__accu2__.wrap_in_tag, __accu2__, 'dt', tag_content, __kwargtrans__ ({attrs: dtattrs}));
/* 000375 */ 					}) (), (function () {
/* 000375 */ 						var __accu2__ = self;
/* 000375 */ 						return __call__ (__accu2__.wrap_in_tag, __accu2__, 'dd', item_content);
/* 000375 */ 					}) ()]);
/* 000375 */ 				}) ());
/* 000375 */ 			}) ();
/* 000375 */ 		}
/* 000382 */ 		return (function () {
/* 000382 */ 			var __accu0__ = self;
/* 000384 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'dl', (function () {
/* 000384 */ 				var __accu1__ = self;
/* 000384 */ 				return __call__ (__accu1__.render_join, __accu1__, s_items);
/* 000384 */ 			}) (), __kwargtrans__ ({class_names: __add__ (['enumeration'], (__t__ (annotations) ? annotations : []))}));
/* 000384 */ 		}) ();
/* 000384 */ 	});},
/* 000389 */ 	get render_heading () {return __get__ (this, function (self, heading_nodelist, render_context) {
/* 000389 */ 		var heading_level = 1;
/* 000389 */ 		var target_id = null;
/* 000389 */ 		var inline_heading = false;
/* 000389 */ 		var annotations = null;
/* 000389 */ 		if (arguments.length) {
/* 000389 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000389 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000389 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000389 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000389 */ 					switch (__attrib0__) {
/* 000389 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000389 */ 						case 'heading_nodelist': var heading_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000389 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000389 */ 						case 'heading_level': var heading_level = __allkwargs0__ [__attrib0__]; break;
/* 000389 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000389 */ 						case 'inline_heading': var inline_heading = __allkwargs0__ [__attrib0__]; break;
/* 000389 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000389 */ 					}
/* 000389 */ 				}
/* 000389 */ 			}
/* 000389 */ 		}
/* 000389 */ 		else {
/* 000389 */ 		}
/* 000393 */ 		if (__t__ (!__in__ (heading_level, self.heading_tags_by_level))) {
/* 000395 */ 			var __except0__ = __call__ (ValueError, null, 'Bad heading_level={}, expected one of {}'.format (heading_level, __call__ (list, null, (function () {
/* 000395 */ 				var __accu0__ = self.heading_tags_by_level;
/* 000395 */ 				return __call__ (__accu0__.py_keys, __accu0__);
/* 000395 */ 			}) ())));
/* 000395 */ 			__except0__.__cause__ = null;
/* 000395 */ 			throw __except0__;
/* 000395 */ 		}
/* 000397 */ 		var annot = (__t__ (annotations) ? __call__ (list, null, annotations) : []);
/* 000398 */ 		(function () {
/* 000398 */ 			var __accu0__ = annot;
/* 000398 */ 			return __call__ (__accu0__.append, __accu0__, 'heading-level-{}'.format (heading_level));
/* 000398 */ 		}) ();
/* 000399 */ 		if (__t__ (inline_heading)) {
/* 000400 */ 			(function () {
/* 000400 */ 				var __accu0__ = annot;
/* 000400 */ 				return __call__ (__accu0__.append, __accu0__, 'heading-inline');
/* 000400 */ 			}) ();
/* 000400 */ 		}
/* 000402 */ 		var attrs = dict ({});
/* 000403 */ 		if (__t__ (target_id !== null)) {
/* 000404 */ 			__setitem__ (attrs, 'id', target_id);
/* 000404 */ 		}
/* 000406 */ 		var content = (function () {
/* 000406 */ 			var __accu0__ = self;
/* 000408 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, __getitem__ (self.heading_tags_by_level, heading_level), (function () {
/* 000408 */ 				var __accu1__ = self;
/* 000408 */ 				return __call__ (__accu1__.render_inline_content, __accu1__, heading_nodelist, render_context);
/* 000408 */ 			}) (), __kwargtrans__ ({class_names: annot, attrs: attrs}));
/* 000408 */ 		}) ();
/* 000412 */ 		if (__t__ (__t__ (inline_heading) && self.inline_heading_add_space)) {
/* 000413 */ 			var content = __call__ (__iadd__, null, content, ' ');
/* 000413 */ 		}
/* 000414 */ 		// pass;
/* 000418 */ 		return content;
/* 000418 */ 	});},
/* 000420 */ 	get render_link () {return __get__ (this, function (self, ref_type, href, display_nodelist, render_context, annotations) {
/* 000420 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000420 */ 			var annotations = null;
/* 000420 */ 		};
/* 000420 */ 		if (arguments.length) {
/* 000420 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000420 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000420 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000420 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000420 */ 					switch (__attrib0__) {
/* 000420 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000420 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000420 */ 						case 'href': var href = __allkwargs0__ [__attrib0__]; break;
/* 000420 */ 						case 'display_nodelist': var display_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000420 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000420 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000420 */ 					}
/* 000420 */ 				}
/* 000420 */ 			}
/* 000420 */ 		}
/* 000420 */ 		else {
/* 000420 */ 		}
/* 000421 */ 		var display_content = (function () {
/* 000421 */ 			var __accu0__ = self;
/* 000421 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, display_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000421 */ 		}) ();
/* 000426 */ 		return (function () {
/* 000426 */ 			var __accu0__ = self;
/* 000426 */ 			return __call__ (__accu0__.wrap_in_link, __accu0__, display_content, href, __kwargtrans__ ({class_names: __add__ (['href-{}'.format (ref_type)], (__t__ (annotations) ? annotations : []))}));
/* 000426 */ 		}) ();
/* 000426 */ 	});},
/* 000433 */ 	get render_delayed_marker () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000433 */ 		if (arguments.length) {
/* 000433 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000433 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000433 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000433 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000433 */ 					switch (__attrib0__) {
/* 000433 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000433 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000433 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000433 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000433 */ 					}
/* 000433 */ 				}
/* 000433 */ 			}
/* 000433 */ 		}
/* 000433 */ 		else {
/* 000433 */ 		}
/* 000434 */ 		return '<LLM:DLYD:{}/>'.format (delayed_key);
/* 000434 */ 	});},
/* 000436 */ 	get render_delayed_dummy_placeholder () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000436 */ 		if (arguments.length) {
/* 000436 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000436 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000436 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000436 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000436 */ 					switch (__attrib0__) {
/* 000436 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000436 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000436 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000436 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000436 */ 					}
/* 000436 */ 				}
/* 000436 */ 			}
/* 000436 */ 		}
/* 000436 */ 		else {
/* 000436 */ 		}
/* 000437 */ 		return '<!-- delayed:{} -->'.format (delayed_key);
/* 000437 */ 	});},
/* 000439 */ 	get replace_delayed_markers_with_final_values () {return __get__ (this, function (self, content, delayed_values) {
/* 000439 */ 		if (arguments.length) {
/* 000439 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000439 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000439 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000439 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000439 */ 					switch (__attrib0__) {
/* 000439 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000439 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000439 */ 						case 'delayed_values': var delayed_values = __allkwargs0__ [__attrib0__]; break;
/* 000439 */ 					}
/* 000439 */ 				}
/* 000439 */ 			}
/* 000439 */ 		}
/* 000439 */ 		else {
/* 000439 */ 		}
/* 000440 */ 		return (function () {
/* 000440 */ 			var __accu0__ = _rx_delayed_markers;
/* 000440 */ 			return __call__ (__accu0__.sub, __accu0__, (function __lambda__ (m) {
/* 000440 */ 				if (arguments.length) {
/* 000440 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000440 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000440 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000440 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000440 */ 							switch (__attrib0__) {
/* 000440 */ 								case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000440 */ 							}
/* 000440 */ 						}
/* 000440 */ 					}
/* 000440 */ 				}
/* 000440 */ 				else {
/* 000440 */ 				}
/* 000441 */ 				return __getitem__ (delayed_values, __call__ (int, null, (function () {
/* 000441 */ 					var __accu1__ = m;
/* 000441 */ 					return __call__ (__accu1__.group, __accu1__, 'key');
/* 000441 */ 				}) ()));
/* 000441 */ 			}), content);
/* 000441 */ 		}) ();
/* 000441 */ 	});},
/* 000448 */ 	get render_float () {return __get__ (this, function (self, float_instance, render_context) {
/* 000448 */ 		if (arguments.length) {
/* 000448 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000448 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000448 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000448 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000448 */ 					switch (__attrib0__) {
/* 000448 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000448 */ 						case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000448 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000448 */ 					}
/* 000448 */ 				}
/* 000448 */ 			}
/* 000448 */ 		}
/* 000448 */ 		else {
/* 000448 */ 		}
/* 000451 */ 		var figattrs = dict ({});
/* 000453 */ 		if (__t__ (float_instance.target_id !== null)) {
/* 000454 */ 			__setitem__ (figattrs, 'id', float_instance.target_id);
/* 000454 */ 		}
/* 000456 */ 		var full_figcaption_rendered_list = [];
/* 000457 */ 		if (__t__ (float_instance.number !== null)) {
/* 000459 */ 			(function () {
/* 000459 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000460 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000460 */ 					var __accu1__ = self;
/* 000462 */ 					return __call__ (__accu1__.wrap_in_tag, __accu1__, 'span', (function () {
/* 000462 */ 						var __accu2__ = self;
/* 000463 */ 						return __call__ (__accu2__.render_join, __accu2__, [(function () {
/* 000463 */ 							var __accu3__ = self;
/* 000463 */ 							return __call__ (__accu3__.render_value, __accu3__, float_instance.float_type_info.float_caption_name);
/* 000467 */ 						}) (), '&nbsp;', (function () {
/* 000467 */ 							var __accu3__ = self;
/* 000467 */ 							return __call__ (__accu3__.render_nodelist, __accu3__, float_instance.formatted_counter_value_llm.nodes, __kwargtrans__ ({render_context: render_context}));
/* 000467 */ 						}) ()]);
/* 000467 */ 					}) (), __kwargtrans__ ({class_names: ['float-number']}));
/* 000467 */ 				}) ());
/* 000467 */ 			}) ();
/* 000467 */ 		}
/* 000475 */ 		else if (__t__ (float_instance.caption_nodelist)) {
/* 000478 */ 			(function () {
/* 000478 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000479 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000479 */ 					var __accu1__ = self;
/* 000481 */ 					return __call__ (__accu1__.wrap_in_tag, __accu1__, 'span', (function () {
/* 000481 */ 						var __accu2__ = self;
/* 000482 */ 						return __call__ (__accu2__.render_join, __accu2__, [(function () {
/* 000482 */ 							var __accu3__ = self;
/* 000482 */ 							return __call__ (__accu3__.render_value, __accu3__, float_instance.float_type_info.float_caption_name);
/* 000482 */ 						}) ()]);
/* 000482 */ 					}) (), __kwargtrans__ ({class_names: ['float-no-number']}));
/* 000482 */ 				}) ());
/* 000482 */ 			}) ();
/* 000482 */ 		}
/* 000485 */ 		else {
/* 000489 */ 			// pass;
/* 000489 */ 		}
/* 000491 */ 		if (__t__ (float_instance.caption_nodelist)) {
/* 000495 */ 			(function () {
/* 000495 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000495 */ 				return __call__ (__accu0__.append, __accu0__, ': ');
/* 000495 */ 			}) ();
/* 000498 */ 			(function () {
/* 000498 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000499 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000499 */ 					var __accu1__ = self;
/* 000499 */ 					return __call__ (__accu1__.render_nodelist, __accu1__, float_instance.caption_nodelist, __kwargtrans__ ({render_context: render_context}));
/* 000499 */ 				}) ());
/* 000499 */ 			}) ();
/* 000499 */ 		}
/* 000505 */ 		var rendered_float_caption = null;
/* 000506 */ 		if (__t__ (full_figcaption_rendered_list)) {
/* 000507 */ 			var rendered_float_caption = (function () {
/* 000507 */ 				var __accu0__ = self;
/* 000509 */ 				return __call__ (__accu0__.wrap_in_tag, __accu0__, 'figcaption', (function () {
/* 000509 */ 					var __accu1__ = self;
/* 000511 */ 					return __call__ (__accu1__.wrap_in_tag, __accu1__, 'span', (function () {
/* 000511 */ 						var __accu2__ = self;
/* 000511 */ 						return __call__ (__accu2__.render_join, __accu2__, full_figcaption_rendered_list);
/* 000511 */ 					}) ());
/* 000511 */ 				}) (), __kwargtrans__ ({class_names: ['float-caption-content']}));
/* 000511 */ 			}) ();
/* 000511 */ 		}
/* 000516 */ 		var float_content_block_content = (function () {
/* 000516 */ 			var __accu0__ = self;
/* 000516 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, float_instance.content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: true}));
/* 000516 */ 		}) ();
/* 000521 */ 		var float_content_block = (function () {
/* 000521 */ 			var __accu0__ = self;
/* 000521 */ 			return __call__ (__accu0__.render_semantic_block, __accu0__, float_content_block_content, 'float-contents');
/* 000521 */ 		}) ();
/* 000526 */ 		if (__t__ (rendered_float_caption !== null)) {
/* 000527 */ 			var float_content_with_caption = (function () {
/* 000527 */ 				var __accu0__ = self;
/* 000527 */ 				return __call__ (__accu0__.render_join_blocks, __accu0__, [float_content_block, rendered_float_caption]);
/* 000527 */ 			}) ();
/* 000527 */ 		}
/* 000530 */ 		else {
/* 000532 */ 			var float_content_with_caption = float_content_block;
/* 000532 */ 		}
/* 000534 */ 		var full_figure = (function () {
/* 000534 */ 			var __accu0__ = self;
/* 000534 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'figure', float_content_with_caption, __kwargtrans__ ({attrs: figattrs, class_names: ['float', 'float-{}'.format (float_instance.float_type)]}));
/* 000534 */ 		}) ();
/* 000541 */ 		return full_figure;
/* 000541 */ 	});},
/* 000544 */ 	graphics_raster_magnification: 1,
/* 000545 */ 	graphics_vector_magnification: 1,
/* 000547 */ 	get render_graphics_block () {return __get__ (this, function (self, graphics_resource) {
/* 000547 */ 		if (arguments.length) {
/* 000547 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000547 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000547 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000547 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000547 */ 					switch (__attrib0__) {
/* 000547 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000547 */ 						case 'graphics_resource': var graphics_resource = __allkwargs0__ [__attrib0__]; break;
/* 000547 */ 					}
/* 000547 */ 				}
/* 000547 */ 			}
/* 000547 */ 		}
/* 000547 */ 		else {
/* 000547 */ 		}
/* 000549 */ 		var imgattrs = dict ({});
/* 000551 */ 		var styparts = [];
/* 000552 */ 		if (__t__ (graphics_resource.physical_dimensions !== null)) {
/* 000554 */ 			var __left0__ = graphics_resource.physical_dimensions;
/* 000554 */ 			var width_pt = __left0__ [0];
/* 000554 */ 			var height_pt = __left0__ [1];
/* 000556 */ 			if (__t__ (__eq__ (graphics_resource.graphics_type, 'raster'))) {
/* 000557 */ 				if (__t__ (width_pt !== null)) {
/* 000558 */ 					var width_pt = __call__ (__imul__, null, width_pt, self.graphics_raster_magnification);
/* 000558 */ 				}
/* 000559 */ 				if (__t__ (height_pt !== null)) {
/* 000560 */ 					var height_pt = __call__ (__imul__, null, height_pt, self.graphics_raster_magnification);
/* 000560 */ 				}
/* 000560 */ 			}
/* 000561 */ 			else if (__t__ (__eq__ (graphics_resource.graphics_type, 'vector'))) {
/* 000562 */ 				if (__t__ (width_pt !== null)) {
/* 000563 */ 					var width_pt = __call__ (__imul__, null, width_pt, self.graphics_vector_magnification);
/* 000563 */ 				}
/* 000564 */ 				if (__t__ (height_pt !== null)) {
/* 000565 */ 					var height_pt = __call__ (__imul__, null, height_pt, self.graphics_vector_magnification);
/* 000565 */ 				}
/* 000565 */ 			}
/* 000567 */ 			if (__t__ (width_pt !== null)) {
/* 000568 */ 				(function () {
/* 000568 */ 					var __accu0__ = styparts;
/* 000568 */ 					return __call__ (__accu0__.append, __accu0__, 'width:{}pt'.format (width_pt));
/* 000568 */ 				}) ();
/* 000568 */ 			}
/* 000569 */ 			if (__t__ (height_pt !== null)) {
/* 000570 */ 				(function () {
/* 000570 */ 					var __accu0__ = styparts;
/* 000570 */ 					return __call__ (__accu0__.append, __accu0__, 'height:{}pt'.format (height_pt));
/* 000570 */ 				}) ();
/* 000570 */ 			}
/* 000570 */ 		}
/* 000572 */ 		if (__t__ (styparts)) {
/* 000573 */ 			__setitem__ (imgattrs, 'style', (function () {
/* 000573 */ 				var __accu0__ = ';';
/* 000573 */ 				return __call__ (__accu0__.join, __accu0__, styparts);
/* 000573 */ 			}) ());
/* 000573 */ 		}
/* 000575 */ 		var src_url = graphics_resource.src_url;
/* 000576 */ 		__setitem__ (imgattrs, 'src', src_url);
/* 000578 */ 		if (__t__ (__t__ (graphics_resource.srcset !== null) && __call__ (len, null, graphics_resource.srcset))) {
/* 000579 */ 			__setitem__ (imgattrs, 'srcset', graphics_resource.srcset);
/* 000579 */ 		}
/* 000582 */ 		return (function () {
/* 000582 */ 			var __accu0__ = self;
/* 000582 */ 			return __call__ (__accu0__.generate_open_tag, __accu0__, 'img', __kwargtrans__ ({attrs: imgattrs}));
/* 000582 */ 		}) ();
/* 000582 */ 	});},
/* 000585 */ 	get render_cells () {return __get__ (this, function (self, cells_model, render_context, target_id) {
/* 000585 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000585 */ 			var target_id = null;
/* 000585 */ 		};
/* 000585 */ 		if (arguments.length) {
/* 000585 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000585 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000585 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000585 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000585 */ 					switch (__attrib0__) {
/* 000585 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000585 */ 						case 'cells_model': var cells_model = __allkwargs0__ [__attrib0__]; break;
/* 000585 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000585 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000585 */ 					}
/* 000585 */ 				}
/* 000585 */ 			}
/* 000585 */ 		}
/* 000585 */ 		else {
/* 000585 */ 		}
/* 000587 */ 		var data_items = [];
/* 000588 */ 		var row_j = 0;
/* 000589 */ 		while (__t__ (__lt__ (row_j, __call__ (len, null, cells_model.grid_data)))) {
/* 000590 */ 			var row_items = [];
/* 000591 */ 			var col_j = 0;
/* 000592 */ 			while (__t__ (__lt__ (col_j, __call__ (len, null, __getitem__ (cells_model.grid_data, row_j))))) {
/* 000594 */ 				var grid_cell_data = __getitem__ (__getitem__ (cells_model.grid_data, row_j), col_j);
/* 000596 */ 				if (__t__ (__t__ (grid_cell_data === null) || __getitem__ (grid_cell_data, 'cell') === null)) {
/* 000599 */ 					(function () {
/* 000599 */ 						var __accu0__ = row_items;
/* 000599 */ 						return __call__ (__accu0__.append, __accu0__, (function () {
/* 000599 */ 							var __accu1__ = self;
/* 000599 */ 							return __call__ (__accu1__.wrap_in_tag, __accu1__, 'td', '', __kwargtrans__ ({class_names: ['cell-empty']}));
/* 000599 */ 						}) ());
/* 000599 */ 					}) ();
/* 000604 */ 					var col_j = __call__ (__iadd__, null, col_j, 1);
/* 000604 */ 					continue;
/* 000604 */ 				}
/* 000607 */ 				if (__t__ (__getitem__ (grid_cell_data, 'is_topleft'))) {
/* 000609 */ 					var cell = __getitem__ (grid_cell_data, 'cell');
/* 000610 */ 					var rendered_cell_contents = (function () {
/* 000610 */ 						var __accu0__ = self;
/* 000610 */ 						return __call__ (__accu0__.render_nodelist, __accu0__, cell.content_nodes, __kwargtrans__ ({render_context: render_context}));
/* 000610 */ 					}) ();
/* 000614 */ 					var clsnames = __add__ (['cell'], (function () {
/* 000614 */ 						var __accu0__ = [];
/* 000614 */ 						var __iterable0__ = cell.styles;
/* 000614 */ 						for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000614 */ 							var sty = __getitem__ (__iterable0__, __index0__);
/* 000614 */ 							(function () {
/* 000614 */ 								var __accu1__ = __accu0__;
/* 000614 */ 								return __call__ (__accu1__.append, __accu1__, 'cellstyle-{}'.format (sty));
/* 000614 */ 							}) ();
/* 000614 */ 						}
/* 000614 */ 						return __accu0__;
/* 000614 */ 					}) ());
/* 000615 */ 					var tagname = 'td';
/* 000616 */ 					if (__t__ (__t__ (__in__ ('H', cell.styles)) || __in__ ('rH', cell.styles))) {
/* 000617 */ 						var tagname = 'th';
/* 000617 */ 					}
/* 000618 */ 					var attrs = dict ({});
/* 000619 */ 					var cplc = cell.placement;
/* 000620 */ 					if (__t__ (__ne__ (cplc.col_range.end, __add__ (cplc.col_range.start, 1)))) {
/* 000623 */ 						__setitem__ (attrs, 'colspan', __call__ (str, null, __sub__ (cplc.col_range.end, cplc.col_range.start)));
/* 000623 */ 					}
/* 000624 */ 					if (__t__ (__ne__ (cplc.row_range.end, __add__ (cplc.row_range.start, 1)))) {
/* 000626 */ 						__setitem__ (attrs, 'rowspan', __call__ (str, null, __sub__ (cplc.row_range.end, cplc.row_range.start)));
/* 000626 */ 					}
/* 000627 */ 					(function () {
/* 000627 */ 						var __accu0__ = row_items;
/* 000628 */ 						return __call__ (__accu0__.append, __accu0__, (function () {
/* 000628 */ 							var __accu1__ = self;
/* 000628 */ 							return __call__ (__accu1__.wrap_in_tag, __accu1__, tagname, rendered_cell_contents, __kwargtrans__ ({attrs: attrs, class_names: clsnames}));
/* 000628 */ 						}) ());
/* 000628 */ 					}) ();
/* 000635 */ 					var col_j = cplc.col_range.end;
/* 000635 */ 					continue;
/* 000635 */ 				}
/* 000640 */ 				var col_j = __call__ (__iadd__, null, col_j, 1);
/* 000640 */ 			}
/* 000642 */ 			(function () {
/* 000642 */ 				var __accu0__ = data_items;
/* 000642 */ 				return __call__ (__accu0__.append, __accu0__, row_items);
/* 000642 */ 			}) ();
/* 000643 */ 			var row_j = __call__ (__iadd__, null, row_j, 1);
/* 000643 */ 		}
/* 000645 */ 		var table_attrs = dict ({});
/* 000646 */ 		if (__t__ (target_id !== null)) {
/* 000647 */ 			__setitem__ (table_attrs, 'id', target_id);
/* 000647 */ 		}
/* 000649 */ 		var s = (function () {
/* 000649 */ 			var __accu0__ = self;
/* 000651 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'table', (function () {
/* 000651 */ 				var __accu1__ = '';
/* 000651 */ 				return __call__ (__accu1__.join, __accu1__, (function () {
/* 000651 */ 					var __accu2__ = [];
/* 000651 */ 					var __iterable0__ = data_items;
/* 000651 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000653 */ 						var row_items = __getitem__ (__iterable0__, __index0__);
/* 000653 */ 						(function () {
/* 000653 */ 							var __accu3__ = __accu2__;
/* 000652 */ 							return __call__ (__accu3__.append, __accu3__, __add__ (__add__ ('<tr>', (function () {
/* 000652 */ 								var __accu4__ = '';
/* 000652 */ 								return __call__ (__accu4__.join, __accu4__, row_items);
/* 000652 */ 							}) ()), '</tr>'));
/* 000652 */ 						}) ();
/* 000652 */ 					}
/* 000652 */ 					return __accu2__;
/* 000652 */ 				}) ());
/* 000652 */ 			}) (), __kwargtrans__ ({attrs: table_attrs, class_names: ['cells']}));
/* 000652 */ 		}) ();
/* 000658 */ 		return s;
/* 000658 */ 	});},
/* 000661 */ 	get get_html_css_global () {return __get__ (this, function (self) {
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
/* 000662 */ 		return _html_css_global;
/* 000662 */ 	});},
/* 000664 */ 	get get_html_css_content () {return __get__ (this, function (self) {
/* 000664 */ 		if (arguments.length) {
/* 000664 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000664 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000664 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000664 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000664 */ 					switch (__attrib0__) {
/* 000664 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000664 */ 					}
/* 000664 */ 				}
/* 000664 */ 			}
/* 000664 */ 		}
/* 000664 */ 		else {
/* 000664 */ 		}
/* 000665 */ 		return _html_css_content;
/* 000665 */ 	});},
/* 000667 */ 	get get_html_js () {return __get__ (this, function (self) {
/* 000667 */ 		if (arguments.length) {
/* 000667 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000667 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000667 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000667 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000667 */ 					switch (__attrib0__) {
/* 000667 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000667 */ 					}
/* 000667 */ 				}
/* 000667 */ 			}
/* 000667 */ 		}
/* 000667 */ 		else {
/* 000667 */ 		}
/* 000668 */ 		if (__t__ (self.use_mathjax)) {
/* 000669 */ 			return _html_js_mathjax;
/* 000669 */ 		}
/* 000670 */ 		return '';
/* 000670 */ 	});},
/* 000672 */ 	get get_html_body_end_js_scripts () {return __get__ (this, function (self) {
/* 000672 */ 		if (arguments.length) {
/* 000672 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000672 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000672 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000672 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000672 */ 					switch (__attrib0__) {
/* 000672 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000672 */ 					}
/* 000672 */ 				}
/* 000672 */ 			}
/* 000672 */ 		}
/* 000672 */ 		else {
/* 000672 */ 		}
/* 000673 */ 		if (__t__ (self.use_mathjax)) {
/* 000674 */ 			return _html_body_end_js_scripts_mathjax;
/* 000674 */ 		}
/* 000675 */ 		return '';
/* 000675 */ 	});}
/* 000675 */ });
/* 000681 */ export var _rx_delayed_markers = (function () {
/* 000681 */ 	var __accu0__ = re;
/* 000681 */ 	return __call__ (__accu0__.compile, __accu0__, '<LLM:DLYD:(?P<key>\\d+)\\s*/>');
/* 000681 */ }) ();
/* 000688 */ export var _html_css_global = '\np, ul, ol {\n  margin: 1em 0px;\n}\np:first-child, ul:first-child, ol:first-child {\n  margin-top: 0px;\n}\np:last-child, ul:last-child, ol:last-child {\n  margin-bottom: 0px;\n}\ndd > p, dd > p:first-child, dd > p:last-child {\n  margin: 0.33em 0px;\n}\n\na, a:link, a:hover, a:active, a:visited {\n  color: #3232c8;\n  text-decoration: none;\n}\na:hover {\n  color: #22228a;\n}\n';
/* 000711 */ export var _html_css_content = "\n.emph, .textit {\n  font-style: italic;\n}\n.textbf {\n  font-weight: bold;\n}\n\nh1 {\n  font-size: 1.6rem;\n  line-height: 1.3em;\n  font-weight: bold;\n  margin: 1em 0px;\n}\nh2 {\n  font-size: 1.3rem;\n  line-height: 1.3em;\n  font-weight: bold;\n  margin: 1em 0px;\n}\nh3 {\n  font-size: 1rem;\n  font-weight: bold;\n  margin: 1em 0px;\n}\n\n.heading-level-4 {\n  font-style: italic;\n  display: inline;\n}\n.heading-level-4::after {\n  display: inline-block;\n  margin: 0px .12em;\n  content: '—';\n}\n\n.heading-level-5 {\n  font-style: italic;\n  font-size: .9em;\n  display: inline;\n}\n.heading-level-5::after {\n  display: inline-block;\n  margin-right: .12em;\n  content: '';\n}\n\n.heading-level-6 {\n  font-style: italic;\n  font-size: .8em;\n  display: inline;\n}\n.heading-level-6::after {\n  display: inline-block;\n  margin-right: .06em;\n  content: '';\n}\n\ndl.enumeration {\n  display: block;\n  margin-left: 2.5em;\n}\ndl.enumeration > dt {\n  float: left;\n  clear: left;\n  display: inline-block;\n  /*margin: 0px; */\n  margin-left: -2.5em;\n  width: 2.0em;\n  min-width: 2.0em;\n  max-width: 2.0em;\n  margin-right: 0.5em;\n  text-align: right;\n}\ndl.enumeration > dd {\n  /*display: inline-block;\n  width: 100%;*/\n  border: 0px;\n  padding: 0px;\n  margin: 0px;\n}\n\nfigure.float {\n  width: 100%;\n  border-width: 1px 0px 1px 0px;\n  border-style: solid none solid none;\n  border-color: rgba(120, 120, 140, 0.15);\n  margin: 0.5rem 0px;\n  padding: 0.5rem 0px;\n}\n\nfigure.float .float-contents {\n  width: 100%;\n  max-width: 100%;\n  overflow-x: auto;\n}\n\nfigure.float .float-contents img {\n  display: block;\n  margin: 0pt auto;\n  padding: 0pt;\n  border: 0pt;\n  margin: 0px auto;\n}\n\nfigure.float figcaption {\n  display: block;\n  margin-top: 0.5em;\n  margin: 0.75em 2em 0px;\n  text-align: center;\n}\n\nfigure.float figcaption > span {\n  display: inline-block;\n  font-style: italic;\n  text-align: left;\n}\n\ntable {\n  margin: 1em 0px 1em 0px;\n  border-collapse: collapse;\n  border-top: solid 1pt;\n  border-bottom: solid 1pt;\n}\nfigure.float .float-contents table {\n  margin: 0px auto;\n}\ntd {\n  padding: 0.3em 0.5em;\n}\nth {\n  padding: 0.3em 0.5em;\n}\nth.cellstyle-H {\n  border-bottom: solid .5pt;\n}\nth.cellstyle-rH {\n}\n.cellstyle-l {\n  text-align: left;\n}\n.cellstyle-c {\n  text-align: center;\n}\n.cellstyle-r {\n  text-align: right;\n}\n.cellstyle-green {\n  background-color: rgb(200,255,200);\n}\n.cellstyle-blue {\n  background-color: rgb(200,220,255);\n}\n.cellstyle-yellow {\n  background-color: rgb(255,255,200);\n}\n.cellstyle-red {\n  background-color: rgb(255,200,200);\n}\n.cellstyle-lvert {\n  border-left: solid .5pt;\n}\n.cellstyle-rvert {\n  border-right: solid .5pt;\n}\n\n.defterm {\n  font-style: italic;\n}\n\n.defterm .defterm-term {\n  font-style: italic;\n  font-weight: bold;\n}\n\n.display-math {\n  width: 100%;\n  max-width: 100%;\n  display: block;\n  overflow-x: auto;\n}\n\n.citation {\n  font-size: 0.8em;\n  display: inline-block;\n  vertical-align: 0.3em;\n  margin-top: -0.3em;\n}\n.footnote {\n  font-size: 0.8em;\n  display: inline-block;\n  vertical-align: 0.3em;\n  margin-top: -0.3em;\n}\ndl.citation-list > dt, dl.footnote-list > dt {\n  font-size: 0.8em;\n  display: inline-block;\n  vertical-align: 0.3em;\n  margin-top: -0.3em;\n}\n";
/* 000914 */ export var _html_js_mathjax = '\nMathJax = {\n    tex: {\n        inlineMath: [[\'\\\\(\', \'\\\\)\']],\n        displayMath: [[\'\\\\[\', \'\\\\]\']],\n        processEnvironments: true,\n        processRefs: true,\n\n        // equation numbering on\n        tags: \'ams\'\n    },\n    options: {\n        // all MathJax content is marked with CSS classes\n        // skipHtmlTags: \'body\',\n        // processHtmlClass: \'display-math|inline-math\',\n    },\n    startup: {\n        pageReady: function() {\n            // override the default "typeset everything on the page" behavior to\n            // only typeset whatever we have explicitly marked as math\n            return typesetPageMathPromise();\n        }\n    }\n};\nfunction typesetPageMathPromise()\n{\n    var elements = document.querySelectorAll(\'.display-math, .inline-math\');\n    return MathJax.typesetPromise(elements);\n}\n';
/* 000945 */ export var _html_body_end_js_scripts_mathjax = '\n<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>\n<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>\n';
/* 000006 */ 
//# sourceMappingURL=llm.fragmentrenderer.html.map