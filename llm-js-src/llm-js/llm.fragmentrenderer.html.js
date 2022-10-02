/* 000001 */ // Transcrypt'ed from Python, 2022-10-02 16:34:50
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
/* 000103 */ 	get htmlescape () {return __get__ (this, function (self, value) {
/* 000103 */ 		if (arguments.length) {
/* 000103 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000103 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000103 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000103 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000103 */ 					switch (__attrib0__) {
/* 000103 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000103 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000103 */ 					}
/* 000103 */ 				}
/* 000103 */ 			}
/* 000103 */ 		}
/* 000103 */ 		else {
/* 000103 */ 		}
/* 000104 */ 		return (function () {
/* 000104 */ 			var __accu0__ = html;
/* 000104 */ 			return __call__ (__accu0__.escape, __accu0__, value);
/* 000104 */ 		}) ();
/* 000104 */ 	});},
/* 000106 */ 	get htmlescape_double_quoted_attribute_value () {return __get__ (this, function (self, value) {
/* 000106 */ 		if (arguments.length) {
/* 000106 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000106 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000106 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000106 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000106 */ 					switch (__attrib0__) {
/* 000106 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000106 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000106 */ 					}
/* 000106 */ 				}
/* 000106 */ 			}
/* 000106 */ 		}
/* 000106 */ 		else {
/* 000106 */ 		}
/* 000108 */ 		if (__t__ (self.aggressively_escape_html_attributes)) {
/* 000109 */ 			return (function () {
/* 000109 */ 				var __accu0__ = self;
/* 000109 */ 				return __call__ (__accu0__.htmlescape, __accu0__, value);
/* 000109 */ 			}) ();
/* 000109 */ 		}
/* 000119 */ 		var value = (function () {
/* 000119 */ 			var __accu0__ = _rx_html_entity;
/* 000119 */ 			return __call__ (__accu0__.sub, __accu0__, (function __lambda__ (m) {
/* 000119 */ 				if (arguments.length) {
/* 000119 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000119 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000119 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000119 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000119 */ 							switch (__attrib0__) {
/* 000119 */ 								case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000119 */ 							}
/* 000119 */ 						}
/* 000119 */ 					}
/* 000119 */ 				}
/* 000119 */ 				else {
/* 000119 */ 				}
/* 000119 */ 				return __add__ (__add__ ('&amp;', (function () {
/* 000119 */ 					var __accu1__ = m;
/* 000119 */ 					return __call__ (__accu1__.group, __accu1__, 1);
/* 000119 */ 				}) ()), ';');
/* 000119 */ 			}), value);
/* 000119 */ 		}) ();
/* 000121 */ 		var value = (function () {
/* 000121 */ 			var __accu0__ = value;
/* 000121 */ 			return __call__ (__accu0__.py_replace, __accu0__, '"', '&quot;');
/* 000121 */ 		}) ();
/* 000122 */ 		return value;
/* 000122 */ 	});},
/* 000124 */ 	get generate_open_tag () {return __get__ (this, function (self, tagname) {
/* 000124 */ 		var attrs = null;
/* 000124 */ 		var class_names = null;
/* 000124 */ 		var self_close_tag = false;
/* 000124 */ 		if (arguments.length) {
/* 000124 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000124 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000124 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000124 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000124 */ 					switch (__attrib0__) {
/* 000124 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000124 */ 						case 'tagname': var tagname = __allkwargs0__ [__attrib0__]; break;
/* 000124 */ 						case 'attrs': var attrs = __allkwargs0__ [__attrib0__]; break;
/* 000124 */ 						case 'class_names': var class_names = __allkwargs0__ [__attrib0__]; break;
/* 000124 */ 						case 'self_close_tag': var self_close_tag = __allkwargs0__ [__attrib0__]; break;
/* 000124 */ 					}
/* 000124 */ 				}
/* 000124 */ 			}
/* 000124 */ 		}
/* 000124 */ 		else {
/* 000124 */ 		}
/* 000125 */ 		var s = '<{}'.format (tagname);
/* 000126 */ 		if (__t__ (!__t__ ((attrs)))) {
/* 000127 */ 			var attrs = dict ({});
/* 000127 */ 		}
/* 000128 */ 		var attrs = __call__ (dict, null, attrs);
/* 000129 */ 		if (__t__ (__in__ ('class', attrs))) {
/* 000130 */ 			var __except0__ = __call__ (ValueError, null, "generate_open_tag(): set HTML 'class' attribute with class_names=, not with attrs=");
/* 000130 */ 			__except0__.__cause__ = null;
/* 000130 */ 			throw __except0__;
/* 000130 */ 		}
/* 000134 */ 		if (__t__ (class_names)) {
/* 000135 */ 			__setitem__ (attrs, 'class', (function () {
/* 000135 */ 				var __accu0__ = ' ';
/* 000135 */ 				return __call__ (__accu0__.join, __accu0__, class_names);
/* 000135 */ 			}) ());
/* 000135 */ 		}
/* 000136 */ 		if (__t__ (attrs)) {
/* 000137 */ 			var __iterable0__ = (function () {
/* 000137 */ 				var __accu0__ = attrs;
/* 000137 */ 				return __call__ (__accu0__.py_items, __accu0__);
/* 000137 */ 			}) ();
/* 000137 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000137 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000137 */ 				var aname = __left0__ [0];
/* 000137 */ 				var aval = __left0__ [1];
/* 000138 */ 				var s = __call__ (__iadd__, null, s, ' {}="{}"'.format (aname, (function () {
/* 000138 */ 					var __accu0__ = self;
/* 000138 */ 					return __call__ (__accu0__.htmlescape_double_quoted_attribute_value, __accu0__, aval);
/* 000138 */ 				}) ()));
/* 000138 */ 			}
/* 000138 */ 		}
/* 000139 */ 		if (__t__ (self_close_tag)) {
/* 000140 */ 			var s = __call__ (__iadd__, null, s, '/>');
/* 000140 */ 		}
/* 000141 */ 		else {
/* 000142 */ 			var s = __call__ (__iadd__, null, s, '>');
/* 000142 */ 		}
/* 000143 */ 		return s;
/* 000143 */ 	});},
/* 000145 */ 	get wrap_in_tag () {return __get__ (this, function (self, tagname, content_html) {
/* 000145 */ 		var attrs = null;
/* 000145 */ 		var class_names = null;
/* 000145 */ 		if (arguments.length) {
/* 000145 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000145 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000145 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000145 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000145 */ 					switch (__attrib0__) {
/* 000145 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000145 */ 						case 'tagname': var tagname = __allkwargs0__ [__attrib0__]; break;
/* 000145 */ 						case 'content_html': var content_html = __allkwargs0__ [__attrib0__]; break;
/* 000145 */ 						case 'attrs': var attrs = __allkwargs0__ [__attrib0__]; break;
/* 000145 */ 						case 'class_names': var class_names = __allkwargs0__ [__attrib0__]; break;
/* 000145 */ 					}
/* 000145 */ 				}
/* 000145 */ 			}
/* 000145 */ 		}
/* 000145 */ 		else {
/* 000145 */ 		}
/* 000147 */ 		var s = (function () {
/* 000147 */ 			var __accu0__ = self;
/* 000147 */ 			return __call__ (__accu0__.generate_open_tag, __accu0__, tagname, __kwargtrans__ ({attrs: attrs, class_names: class_names}));
/* 000147 */ 		}) ();
/* 000148 */ 		var s = __call__ (__iadd__, null, s, __call__ (str, null, content_html));
/* 000149 */ 		var s = __call__ (__iadd__, null, s, '</{}>'.format (tagname));
/* 000150 */ 		return s;
/* 000150 */ 	});},
/* 000152 */ 	get wrap_in_link () {return __get__ (this, function (self, display_html, target_href) {
/* 000152 */ 		var class_names = null;
/* 000152 */ 		if (arguments.length) {
/* 000152 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000152 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000152 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000152 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000152 */ 					switch (__attrib0__) {
/* 000152 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000152 */ 						case 'display_html': var display_html = __allkwargs0__ [__attrib0__]; break;
/* 000152 */ 						case 'target_href': var target_href = __allkwargs0__ [__attrib0__]; break;
/* 000152 */ 						case 'class_names': var class_names = __allkwargs0__ [__attrib0__]; break;
/* 000152 */ 					}
/* 000152 */ 				}
/* 000152 */ 			}
/* 000152 */ 		}
/* 000152 */ 		else {
/* 000152 */ 		}
/* 000153 */ 		if (__t__ (!__t__ ((target_href)))) {
/* 000154 */ 			var target_href = '#';
/* 000154 */ 		}
/* 000156 */ 		var attrs = dict ({'href': (function () {
/* 000156 */ 			var __accu0__ = self;
/* 000156 */ 			return __call__ (__accu0__.htmlescape, __accu0__, target_href);
/* 000156 */ 		}) ()});
/* 000158 */ 		if (__t__ (__call__ (callable, null, self.use_link_target_blank))) {
/* 000159 */ 			if (__t__ ((function () {
/* 000159 */ 				var __accu0__ = self;
/* 000159 */ 				return __call__ (__accu0__.use_link_target_blank, __accu0__, target_href);
/* 000159 */ 			}) ())) {
/* 000160 */ 				__setitem__ (attrs, 'target', '_blank');
/* 000160 */ 			}
/* 000160 */ 		}
/* 000161 */ 		else if (__t__ (__t__ (self.use_link_target_blank) && !__t__ (((function () {
/* 000161 */ 			var __accu0__ = target_href;
/* 000161 */ 			return __call__ (__accu0__.startswith, __accu0__, '#');
/* 000161 */ 		}) ())))) {
/* 000162 */ 			__setitem__ (attrs, 'target', '_blank');
/* 000162 */ 		}
/* 000163 */ 		return (function () {
/* 000163 */ 			var __accu0__ = self;
/* 000163 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'a', display_html, __kwargtrans__ ({attrs: attrs, class_names: class_names}));
/* 000163 */ 		}) ();
/* 000163 */ 	});},
/* 000172 */ 	get render_build_paragraph () {return __get__ (this, function (self, nodelist, render_context) {
/* 000172 */ 		if (arguments.length) {
/* 000172 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000172 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000172 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000172 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000172 */ 					switch (__attrib0__) {
/* 000172 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000172 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000172 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000172 */ 					}
/* 000172 */ 				}
/* 000172 */ 			}
/* 000172 */ 		}
/* 000172 */ 		else {
/* 000172 */ 		}
/* 000175 */ 		return __add__ (__add__ ('<p>', (function () {
/* 000175 */ 			var __accu0__ = self;
/* 000175 */ 			return __call__ (__accu0__.render_inline_content, __accu0__, nodelist, render_context);
/* 000175 */ 		}) ()), '</p>');
/* 000175 */ 	});},
/* 000179 */ 	get render_inline_content () {return __get__ (this, function (self, nodelist, render_context) {
/* 000179 */ 		if (arguments.length) {
/* 000179 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000179 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000179 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000179 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000179 */ 					switch (__attrib0__) {
/* 000179 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000179 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000179 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000179 */ 					}
/* 000179 */ 				}
/* 000179 */ 			}
/* 000179 */ 		}
/* 000179 */ 		else {
/* 000179 */ 		}
/* 000180 */ 		return (function () {
/* 000180 */ 			var __accu0__ = self;
/* 000180 */ 			return __call__ (__accu0__.render_join, __accu0__, (function () {
/* 000180 */ 				var __accu1__ = [];
/* 000181 */ 				var __iterable0__ = nodelist;
/* 000181 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000181 */ 					var n = __getitem__ (__iterable0__, __index0__);
/* 000181 */ 					(function () {
/* 000181 */ 						var __accu2__ = __accu1__;
/* 000181 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000181 */ 							var __accu3__ = self;
/* 000181 */ 							return __call__ (__accu3__.render_node, __accu3__, n, render_context);
/* 000181 */ 						}) ());
/* 000181 */ 					}) ();
/* 000181 */ 				}
/* 000181 */ 				return __accu1__;
/* 000181 */ 			}) ());
/* 000181 */ 		}) ();
/* 000181 */ 	});},
/* 000184 */ 	get render_join () {return __get__ (this, function (self, content_list) {
/* 000184 */ 		if (arguments.length) {
/* 000184 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000184 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000184 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000184 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000184 */ 					switch (__attrib0__) {
/* 000184 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000184 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000184 */ 					}
/* 000184 */ 				}
/* 000184 */ 			}
/* 000184 */ 		}
/* 000184 */ 		else {
/* 000184 */ 		}
/* 000190 */ 		return (function () {
/* 000190 */ 			var __accu0__ = '';
/* 000190 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000190 */ 				var __accu1__ = [];
/* 000190 */ 				var __iterable0__ = content_list;
/* 000190 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000190 */ 					var s = __getitem__ (__iterable0__, __index0__);
/* 000190 */ 					(function () {
/* 000190 */ 						var __accu2__ = __accu1__;
/* 000190 */ 						return __call__ (__accu2__.append, __accu2__, __call__ (str, null, s));
/* 000190 */ 					}) ();
/* 000190 */ 				}
/* 000190 */ 				return __accu1__;
/* 000190 */ 			}) ());
/* 000190 */ 		}) ();
/* 000190 */ 	});},
/* 000192 */ 	get render_join_blocks () {return __get__ (this, function (self, content_list) {
/* 000192 */ 		if (arguments.length) {
/* 000192 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000192 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000192 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000192 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000192 */ 					switch (__attrib0__) {
/* 000192 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000192 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000192 */ 					}
/* 000192 */ 				}
/* 000192 */ 			}
/* 000192 */ 		}
/* 000192 */ 		else {
/* 000192 */ 		}
/* 000200 */ 		return (function () {
/* 000200 */ 			var __accu0__ = self.html_blocks_joiner;
/* 000200 */ 			return __call__ (__accu0__.join, __accu0__, content_list);
/* 000200 */ 		}) ();
/* 000200 */ 	});},
/* 000205 */ 	get render_value () {return __get__ (this, function (self, value) {
/* 000205 */ 		if (arguments.length) {
/* 000205 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000205 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000205 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000205 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000205 */ 					switch (__attrib0__) {
/* 000205 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000205 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000205 */ 					}
/* 000205 */ 				}
/* 000205 */ 			}
/* 000205 */ 		}
/* 000205 */ 		else {
/* 000205 */ 		}
/* 000206 */ 		return (function () {
/* 000206 */ 			var __accu0__ = self;
/* 000206 */ 			return __call__ (__accu0__.htmlescape, __accu0__, value);
/* 000206 */ 		}) ();
/* 000206 */ 	});},
/* 000208 */ 	get render_empty_error_placeholder () {return __get__ (this, function (self, debug_str) {
/* 000208 */ 		if (arguments.length) {
/* 000208 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000208 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000208 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000208 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000208 */ 					switch (__attrib0__) {
/* 000208 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000208 */ 						case 'debug_str': var debug_str = __allkwargs0__ [__attrib0__]; break;
/* 000208 */ 					}
/* 000208 */ 				}
/* 000208 */ 			}
/* 000208 */ 		}
/* 000208 */ 		else {
/* 000208 */ 		}
/* 000209 */ 		var debug_str_safe = (function () {
/* 000209 */ 			var __accu0__ = debug_str;
/* 000209 */ 			return __call__ (__accu0__.py_replace, __accu0__, '--', '- - ');
/* 000209 */ 		}) ();
/* 000210 */ 		return '<span class="empty-error-placeholder"><!-- {} -->(?)</span>'.format (debug_str_safe);
/* 000210 */ 	});},
/* 000212 */ 	get render_nothing () {return __get__ (this, function (self, annotations) {
/* 000212 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000212 */ 			var annotations = null;
/* 000212 */ 		};
/* 000212 */ 		if (arguments.length) {
/* 000212 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000212 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000212 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000212 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000212 */ 					switch (__attrib0__) {
/* 000212 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000212 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000212 */ 					}
/* 000212 */ 				}
/* 000212 */ 			}
/* 000212 */ 		}
/* 000212 */ 		else {
/* 000212 */ 		}
/* 000213 */ 		if (__t__ (!__t__ ((annotations)))) {
/* 000214 */ 			var annotations = [];
/* 000214 */ 		}
/* 000215 */ 		var annotations = (function () {
/* 000215 */ 			var __accu0__ = [];
/* 000215 */ 			var __iterable0__ = annotations;
/* 000215 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000215 */ 				var a = __getitem__ (__iterable0__, __index0__);
/* 000215 */ 				(function () {
/* 000215 */ 					var __accu1__ = __accu0__;
/* 000215 */ 					return __call__ (__accu1__.append, __accu1__, (function () {
/* 000215 */ 						var __accu2__ = a;
/* 000215 */ 						return __call__ (__accu2__.py_replace, __accu2__, '--', '- - ');
/* 000215 */ 					}) ());
/* 000215 */ 				}) ();
/* 000215 */ 			}
/* 000215 */ 			return __accu0__;
/* 000215 */ 		}) ();
/* 000216 */ 		return (function () {
/* 000216 */ 			var __accu0__ = '<!-- {} -->';
/* 000216 */ 			return __call__ (__accu0__.format, __accu0__, (function () {
/* 000216 */ 				var __accu1__ = ' ';
/* 000216 */ 				return __call__ (__accu1__.join, __accu1__, annotations);
/* 000216 */ 			}) ());
/* 000216 */ 		}) ();
/* 000216 */ 	});},
/* 000218 */ 	get render_verbatim () {return __get__ (this, function (self, value) {
/* 000218 */ 		var target_id = null;
/* 000218 */ 		if (arguments.length) {
/* 000218 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000218 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000218 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000218 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000218 */ 					switch (__attrib0__) {
/* 000218 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000218 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000218 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000218 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000218 */ 					}
/* 000218 */ 				}
/* 000218 */ 			}
/* 000218 */ 		}
/* 000218 */ 		else {
/* 000218 */ 		}
/* 000219 */ 		var attrs = dict ({});
/* 000220 */ 		if (__t__ (target_id !== null)) {
/* 000221 */ 			__setitem__ (attrs, 'id', target_id);
/* 000221 */ 		}
/* 000222 */ 		return (function () {
/* 000222 */ 			var __accu0__ = self;
/* 000224 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'span', (function () {
/* 000224 */ 				var __accu1__ = self;
/* 000224 */ 				return __call__ (__accu1__.htmlescape, __accu1__, value);
/* 000224 */ 			}) (), __kwargtrans__ ({class_names: (__t__ (annotations) ? annotations : ['verbatim']), attrs: attrs}));
/* 000224 */ 		}) ();
/* 000224 */ 	});},
/* 000229 */ 	get render_math_content () {return __get__ (this, function (self, delimiters, nodelist, render_context, displaytype, environmentname, target_id) {
/* 000229 */ 		if (typeof environmentname == 'undefined' || (environmentname != null && environmentname.hasOwnProperty ("__kwargtrans__"))) {;
/* 000229 */ 			var environmentname = null;
/* 000229 */ 		};
/* 000229 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000229 */ 			var target_id = null;
/* 000229 */ 		};
/* 000229 */ 		if (arguments.length) {
/* 000229 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000229 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000229 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000229 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000229 */ 					switch (__attrib0__) {
/* 000229 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000229 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000229 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000229 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000229 */ 						case 'displaytype': var displaytype = __allkwargs0__ [__attrib0__]; break;
/* 000229 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000229 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000229 */ 					}
/* 000229 */ 				}
/* 000229 */ 			}
/* 000229 */ 		}
/* 000229 */ 		else {
/* 000229 */ 		}
/* 000236 */ 		var class_names = ['{}-math'.format (displaytype)];
/* 000237 */ 		if (__t__ (environmentname !== null)) {
/* 000238 */ 			(function () {
/* 000238 */ 				var __accu0__ = class_names;
/* 000238 */ 				return __call__ (__accu0__.append, __accu0__, 'env-{}'.format ((function () {
/* 000238 */ 					var __accu1__ = environmentname;
/* 000238 */ 					return __call__ (__accu1__.py_replace, __accu1__, '*', '-star');
/* 000238 */ 				}) ()));
/* 000238 */ 			}) ();
/* 000238 */ 		}
/* 000241 */ 		var content_html = (function () {
/* 000241 */ 			var __accu0__ = self;
/* 000241 */ 			return __call__ (__accu0__.htmlescape, __accu0__, __add__ (__add__ (__getitem__ (delimiters, 0), (function () {
/* 000241 */ 				var __accu1__ = nodelist;
/* 000241 */ 				return __call__ (__accu1__.latex_verbatim, __accu1__);
/* 000241 */ 			}) ()), __getitem__ (delimiters, 1)));
/* 000241 */ 		}) ();
/* 000244 */ 		var attrs = dict ({});
/* 000245 */ 		if (__t__ (target_id !== null)) {
/* 000246 */ 			__setitem__ (attrs, 'id', target_id);
/* 000246 */ 		}
/* 000248 */ 		if (__t__ (__eq__ (displaytype, 'display'))) {
/* 000252 */ 			return (function () {
/* 000252 */ 				var __accu0__ = self;
/* 000252 */ 				return __call__ (__accu0__.wrap_in_tag, __accu0__, 'span', content_html, __kwargtrans__ ({class_names: class_names, attrs: attrs}));
/* 000252 */ 			}) ();
/* 000252 */ 		}
/* 000259 */ 		return (function () {
/* 000259 */ 			var __accu0__ = self;
/* 000259 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'span', content_html, __kwargtrans__ ({class_names: class_names, attrs: attrs}));
/* 000259 */ 		}) ();
/* 000259 */ 	});},
/* 000266 */ 	get render_text_format () {return __get__ (this, function (self, text_formats, nodelist, render_context) {
/* 000266 */ 		if (arguments.length) {
/* 000266 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000266 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000266 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000266 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000266 */ 					switch (__attrib0__) {
/* 000266 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000266 */ 						case 'text_formats': var text_formats = __allkwargs0__ [__attrib0__]; break;
/* 000266 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000266 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000266 */ 					}
/* 000266 */ 				}
/* 000266 */ 			}
/* 000266 */ 		}
/* 000266 */ 		else {
/* 000266 */ 		}
/* 000270 */ 		var content = (function () {
/* 000270 */ 			var __accu0__ = self;
/* 000270 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, nodelist, render_context, __kwargtrans__ ({is_block_level: false}));
/* 000270 */ 		}) ();
/* 000276 */ 		return (function () {
/* 000276 */ 			var __accu0__ = self;
/* 000276 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'span', content, __kwargtrans__ ({class_names: text_formats}));
/* 000276 */ 		}) ();
/* 000276 */ 	});},
/* 000282 */ 	get render_semantic_block () {return __get__ (this, function (self, content, role) {
/* 000282 */ 		var annotations = null;
/* 000282 */ 		var target_id = null;
/* 000282 */ 		if (arguments.length) {
/* 000282 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000282 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000282 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000282 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000282 */ 					switch (__attrib0__) {
/* 000282 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000282 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000282 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000282 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000282 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000282 */ 					}
/* 000282 */ 				}
/* 000282 */ 			}
/* 000282 */ 		}
/* 000282 */ 		else {
/* 000282 */ 		}
/* 000283 */ 		var attrs = dict ({});
/* 000284 */ 		if (__t__ (target_id !== null)) {
/* 000285 */ 			__setitem__ (attrs, 'id', target_id);
/* 000285 */ 		}
/* 000286 */ 		if (__t__ (__in__ (role, tuple (['section', 'main', 'article'])))) {
/* 000287 */ 			return (function () {
/* 000287 */ 				var __accu0__ = self;
/* 000287 */ 				return __call__ (__accu0__.wrap_in_tag, __accu0__, role, content, __kwargtrans__ ({attrs: attrs, class_names: annotations}));
/* 000287 */ 			}) ();
/* 000287 */ 		}
/* 000293 */ 		return (function () {
/* 000293 */ 			var __accu0__ = self;
/* 000293 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'div', content, __kwargtrans__ ({attrs: attrs, class_names: __add__ ([role], (__t__ (annotations) ? annotations : []))}));
/* 000293 */ 		}) ();
/* 000293 */ 	});},
/* 000301 */ 	get render_enumeration () {return __get__ (this, function (self, iter_items_nodelists, counter_formatter, render_context) {
/* 000301 */ 		var target_id_generator = null;
/* 000301 */ 		var annotations = null;
/* 000301 */ 		var nested_depth = null;
/* 000301 */ 		if (arguments.length) {
/* 000301 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000301 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000301 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000301 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000301 */ 					switch (__attrib0__) {
/* 000301 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000301 */ 						case 'iter_items_nodelists': var iter_items_nodelists = __allkwargs0__ [__attrib0__]; break;
/* 000301 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000301 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000301 */ 						case 'target_id_generator': var target_id_generator = __allkwargs0__ [__attrib0__]; break;
/* 000301 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000301 */ 						case 'nested_depth': var nested_depth = __allkwargs0__ [__attrib0__]; break;
/* 000301 */ 					}
/* 000301 */ 				}
/* 000301 */ 			}
/* 000301 */ 		}
/* 000301 */ 		else {
/* 000301 */ 		}
/* 000313 */ 		var s_items = [];
/* 000315 */ 		var __iterable0__ = __call__ (enumerate, null, iter_items_nodelists);
/* 000315 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000315 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000315 */ 			var j = __left0__ [0];
/* 000315 */ 			var item_content_nodelist = __left0__ [1];
/* 000317 */ 			var use_block_level = true;
/* 000318 */ 			if (__t__ (item_content_nodelist.parsing_state.is_block_level === false)) {
/* 000321 */ 				var use_block_level = false;
/* 000321 */ 			}
/* 000323 */ 			// pass;
/* 000327 */ 			// pass;
/* 000331 */ 			var item_content = (function () {
/* 000331 */ 				var __accu0__ = self;
/* 000331 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, item_content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: use_block_level}));
/* 000331 */ 			}) ();
/* 000337 */ 			var enumno = __add__ (1, j);
/* 000339 */ 			var tag_nodelist = __call__ (counter_formatter, null, enumno);
/* 000340 */ 			if (__t__ (__call__ (isinstance, null, tag_nodelist, str))) {
/* 000341 */ 				var tag_content = (function () {
/* 000341 */ 					var __accu0__ = self;
/* 000341 */ 					return __call__ (__accu0__.render_value, __accu0__, tag_nodelist);
/* 000341 */ 				}) ();
/* 000341 */ 			}
/* 000342 */ 			else {
/* 000343 */ 				var tag_content = (function () {
/* 000343 */ 					var __accu0__ = self;
/* 000343 */ 					return __call__ (__accu0__.render_nodelist, __accu0__, tag_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000343 */ 				}) ();
/* 000343 */ 			}
/* 000349 */ 			var dtattrs = dict ({});
/* 000350 */ 			if (__t__ (target_id_generator !== null)) {
/* 000351 */ 				__setitem__ (dtattrs, 'id', __call__ (target_id_generator, null, enumno));
/* 000351 */ 			}
/* 000353 */ 			(function () {
/* 000353 */ 				var __accu0__ = s_items;
/* 000354 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000354 */ 					var __accu1__ = self;
/* 000355 */ 					return __call__ (__accu1__.render_join, __accu1__, [(function () {
/* 000355 */ 						var __accu2__ = self;
/* 000355 */ 						return __call__ (__accu2__.wrap_in_tag, __accu2__, 'dt', tag_content, __kwargtrans__ ({attrs: dtattrs}));
/* 000360 */ 					}) (), (function () {
/* 000360 */ 						var __accu2__ = self;
/* 000360 */ 						return __call__ (__accu2__.wrap_in_tag, __accu2__, 'dd', item_content);
/* 000360 */ 					}) ()]);
/* 000360 */ 				}) ());
/* 000360 */ 			}) ();
/* 000360 */ 		}
/* 000367 */ 		return (function () {
/* 000367 */ 			var __accu0__ = self;
/* 000369 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'dl', (function () {
/* 000369 */ 				var __accu1__ = self;
/* 000369 */ 				return __call__ (__accu1__.render_join, __accu1__, s_items);
/* 000369 */ 			}) (), __kwargtrans__ ({class_names: __add__ (['enumeration'], (__t__ (annotations) ? annotations : []))}));
/* 000369 */ 		}) ();
/* 000369 */ 	});},
/* 000374 */ 	get render_heading () {return __get__ (this, function (self, heading_nodelist, render_context) {
/* 000374 */ 		var heading_level = 1;
/* 000374 */ 		var target_id = null;
/* 000374 */ 		var inline_heading = false;
/* 000374 */ 		var annotations = null;
/* 000374 */ 		if (arguments.length) {
/* 000374 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000374 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000374 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000374 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000374 */ 					switch (__attrib0__) {
/* 000374 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000374 */ 						case 'heading_nodelist': var heading_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000374 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000374 */ 						case 'heading_level': var heading_level = __allkwargs0__ [__attrib0__]; break;
/* 000374 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000374 */ 						case 'inline_heading': var inline_heading = __allkwargs0__ [__attrib0__]; break;
/* 000374 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000374 */ 					}
/* 000374 */ 				}
/* 000374 */ 			}
/* 000374 */ 		}
/* 000374 */ 		else {
/* 000374 */ 		}
/* 000378 */ 		if (__t__ (!__in__ (heading_level, self.heading_tags_by_level))) {
/* 000380 */ 			var __except0__ = __call__ (ValueError, null, 'Bad heading_level={}, expected one of {}'.format (heading_level, __call__ (list, null, (function () {
/* 000380 */ 				var __accu0__ = self.heading_tags_by_level;
/* 000380 */ 				return __call__ (__accu0__.py_keys, __accu0__);
/* 000380 */ 			}) ())));
/* 000380 */ 			__except0__.__cause__ = null;
/* 000380 */ 			throw __except0__;
/* 000380 */ 		}
/* 000382 */ 		var annot = (__t__ (annotations) ? __call__ (list, null, annotations) : []);
/* 000383 */ 		(function () {
/* 000383 */ 			var __accu0__ = annot;
/* 000383 */ 			return __call__ (__accu0__.append, __accu0__, 'heading-level-{}'.format (heading_level));
/* 000383 */ 		}) ();
/* 000384 */ 		if (__t__ (inline_heading)) {
/* 000385 */ 			(function () {
/* 000385 */ 				var __accu0__ = annot;
/* 000385 */ 				return __call__ (__accu0__.append, __accu0__, 'heading-inline');
/* 000385 */ 			}) ();
/* 000385 */ 		}
/* 000387 */ 		var attrs = dict ({});
/* 000388 */ 		if (__t__ (target_id !== null)) {
/* 000389 */ 			__setitem__ (attrs, 'id', target_id);
/* 000389 */ 		}
/* 000391 */ 		var content = (function () {
/* 000391 */ 			var __accu0__ = self;
/* 000393 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, __getitem__ (self.heading_tags_by_level, heading_level), (function () {
/* 000393 */ 				var __accu1__ = self;
/* 000393 */ 				return __call__ (__accu1__.render_inline_content, __accu1__, heading_nodelist, render_context);
/* 000393 */ 			}) (), __kwargtrans__ ({class_names: annot, attrs: attrs}));
/* 000393 */ 		}) ();
/* 000397 */ 		if (__t__ (__t__ (inline_heading) && self.inline_heading_add_space)) {
/* 000398 */ 			var content = __call__ (__iadd__, null, content, ' ');
/* 000398 */ 		}
/* 000399 */ 		// pass;
/* 000403 */ 		return content;
/* 000403 */ 	});},
/* 000405 */ 	get render_link () {return __get__ (this, function (self, ref_type, href, display_nodelist, render_context, annotations) {
/* 000405 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000405 */ 			var annotations = null;
/* 000405 */ 		};
/* 000405 */ 		if (arguments.length) {
/* 000405 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000405 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000405 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000405 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000405 */ 					switch (__attrib0__) {
/* 000405 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000405 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000405 */ 						case 'href': var href = __allkwargs0__ [__attrib0__]; break;
/* 000405 */ 						case 'display_nodelist': var display_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000405 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000405 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000405 */ 					}
/* 000405 */ 				}
/* 000405 */ 			}
/* 000405 */ 		}
/* 000405 */ 		else {
/* 000405 */ 		}
/* 000406 */ 		var display_content = (function () {
/* 000406 */ 			var __accu0__ = self;
/* 000406 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, display_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000406 */ 		}) ();
/* 000411 */ 		return (function () {
/* 000411 */ 			var __accu0__ = self;
/* 000411 */ 			return __call__ (__accu0__.wrap_in_link, __accu0__, display_content, href, __kwargtrans__ ({class_names: __add__ (['href-{}'.format (ref_type)], (__t__ (annotations) ? annotations : []))}));
/* 000411 */ 		}) ();
/* 000411 */ 	});},
/* 000418 */ 	get render_delayed_marker () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000418 */ 		if (arguments.length) {
/* 000418 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000418 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000418 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000418 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000418 */ 					switch (__attrib0__) {
/* 000418 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000418 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000418 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000418 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000418 */ 					}
/* 000418 */ 				}
/* 000418 */ 			}
/* 000418 */ 		}
/* 000418 */ 		else {
/* 000418 */ 		}
/* 000419 */ 		return '<LLM:DLYD:{}/>'.format (delayed_key);
/* 000419 */ 	});},
/* 000421 */ 	get render_delayed_dummy_placeholder () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000421 */ 		if (arguments.length) {
/* 000421 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000421 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000421 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000421 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000421 */ 					switch (__attrib0__) {
/* 000421 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000421 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000421 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000421 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000421 */ 					}
/* 000421 */ 				}
/* 000421 */ 			}
/* 000421 */ 		}
/* 000421 */ 		else {
/* 000421 */ 		}
/* 000422 */ 		return '<!-- delayed:{} -->'.format (delayed_key);
/* 000422 */ 	});},
/* 000424 */ 	get replace_delayed_markers_with_final_values () {return __get__ (this, function (self, content, delayed_values) {
/* 000424 */ 		if (arguments.length) {
/* 000424 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000424 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000424 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000424 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000424 */ 					switch (__attrib0__) {
/* 000424 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000424 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000424 */ 						case 'delayed_values': var delayed_values = __allkwargs0__ [__attrib0__]; break;
/* 000424 */ 					}
/* 000424 */ 				}
/* 000424 */ 			}
/* 000424 */ 		}
/* 000424 */ 		else {
/* 000424 */ 		}
/* 000425 */ 		return (function () {
/* 000425 */ 			var __accu0__ = _rx_delayed_markers;
/* 000425 */ 			return __call__ (__accu0__.sub, __accu0__, (function __lambda__ (m) {
/* 000425 */ 				if (arguments.length) {
/* 000425 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000425 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000425 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000425 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000425 */ 							switch (__attrib0__) {
/* 000425 */ 								case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000425 */ 							}
/* 000425 */ 						}
/* 000425 */ 					}
/* 000425 */ 				}
/* 000425 */ 				else {
/* 000425 */ 				}
/* 000426 */ 				return __getitem__ (delayed_values, __call__ (int, null, (function () {
/* 000426 */ 					var __accu1__ = m;
/* 000426 */ 					return __call__ (__accu1__.group, __accu1__, 'key');
/* 000426 */ 				}) ()));
/* 000426 */ 			}), content);
/* 000426 */ 		}) ();
/* 000426 */ 	});},
/* 000433 */ 	get render_float () {return __get__ (this, function (self, float_instance, render_context) {
/* 000433 */ 		if (arguments.length) {
/* 000433 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000433 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000433 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000433 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000433 */ 					switch (__attrib0__) {
/* 000433 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000433 */ 						case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000433 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000433 */ 					}
/* 000433 */ 				}
/* 000433 */ 			}
/* 000433 */ 		}
/* 000433 */ 		else {
/* 000433 */ 		}
/* 000436 */ 		var figattrs = dict ({});
/* 000438 */ 		if (__t__ (float_instance.target_id !== null)) {
/* 000439 */ 			__setitem__ (figattrs, 'id', float_instance.target_id);
/* 000439 */ 		}
/* 000441 */ 		var full_figcaption_rendered_list = [];
/* 000442 */ 		if (__t__ (float_instance.number !== null)) {
/* 000444 */ 			(function () {
/* 000444 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000445 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000445 */ 					var __accu1__ = self;
/* 000447 */ 					return __call__ (__accu1__.wrap_in_tag, __accu1__, 'span', (function () {
/* 000447 */ 						var __accu2__ = self;
/* 000448 */ 						return __call__ (__accu2__.render_join, __accu2__, [(function () {
/* 000448 */ 							var __accu3__ = self;
/* 000448 */ 							return __call__ (__accu3__.render_value, __accu3__, float_instance.float_type_info.float_caption_name);
/* 000452 */ 						}) (), '&nbsp;', (function () {
/* 000452 */ 							var __accu3__ = self;
/* 000452 */ 							return __call__ (__accu3__.render_nodelist, __accu3__, float_instance.formatted_counter_value_llm.nodes, __kwargtrans__ ({render_context: render_context}));
/* 000452 */ 						}) ()]);
/* 000452 */ 					}) (), __kwargtrans__ ({class_names: ['float-number']}));
/* 000452 */ 				}) ());
/* 000452 */ 			}) ();
/* 000452 */ 		}
/* 000460 */ 		else if (__t__ (float_instance.caption_nodelist)) {
/* 000463 */ 			(function () {
/* 000463 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000464 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000464 */ 					var __accu1__ = self;
/* 000466 */ 					return __call__ (__accu1__.wrap_in_tag, __accu1__, 'span', (function () {
/* 000466 */ 						var __accu2__ = self;
/* 000467 */ 						return __call__ (__accu2__.render_join, __accu2__, [(function () {
/* 000467 */ 							var __accu3__ = self;
/* 000467 */ 							return __call__ (__accu3__.render_value, __accu3__, float_instance.float_type_info.float_caption_name);
/* 000467 */ 						}) ()]);
/* 000467 */ 					}) (), __kwargtrans__ ({class_names: ['float-no-number']}));
/* 000467 */ 				}) ());
/* 000467 */ 			}) ();
/* 000467 */ 		}
/* 000470 */ 		else {
/* 000474 */ 			// pass;
/* 000474 */ 		}
/* 000476 */ 		if (__t__ (float_instance.caption_nodelist)) {
/* 000480 */ 			(function () {
/* 000480 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000480 */ 				return __call__ (__accu0__.append, __accu0__, ': ');
/* 000480 */ 			}) ();
/* 000483 */ 			(function () {
/* 000483 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000484 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000484 */ 					var __accu1__ = self;
/* 000484 */ 					return __call__ (__accu1__.render_nodelist, __accu1__, float_instance.caption_nodelist, __kwargtrans__ ({render_context: render_context}));
/* 000484 */ 				}) ());
/* 000484 */ 			}) ();
/* 000484 */ 		}
/* 000490 */ 		var rendered_float_caption = null;
/* 000491 */ 		if (__t__ (full_figcaption_rendered_list)) {
/* 000492 */ 			var rendered_float_caption = (function () {
/* 000492 */ 				var __accu0__ = self;
/* 000494 */ 				return __call__ (__accu0__.wrap_in_tag, __accu0__, 'figcaption', (function () {
/* 000494 */ 					var __accu1__ = self;
/* 000496 */ 					return __call__ (__accu1__.wrap_in_tag, __accu1__, 'span', (function () {
/* 000496 */ 						var __accu2__ = self;
/* 000496 */ 						return __call__ (__accu2__.render_join, __accu2__, full_figcaption_rendered_list);
/* 000496 */ 					}) ());
/* 000496 */ 				}) (), __kwargtrans__ ({class_names: ['float-caption-content']}));
/* 000496 */ 			}) ();
/* 000496 */ 		}
/* 000501 */ 		var float_content_block_content = (function () {
/* 000501 */ 			var __accu0__ = self;
/* 000501 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, float_instance.content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: true}));
/* 000501 */ 		}) ();
/* 000506 */ 		var float_content_block = (function () {
/* 000506 */ 			var __accu0__ = self;
/* 000506 */ 			return __call__ (__accu0__.render_semantic_block, __accu0__, float_content_block_content, 'float-contents');
/* 000506 */ 		}) ();
/* 000511 */ 		if (__t__ (rendered_float_caption !== null)) {
/* 000512 */ 			var float_content_with_caption = (function () {
/* 000512 */ 				var __accu0__ = self;
/* 000512 */ 				return __call__ (__accu0__.render_join_blocks, __accu0__, [float_content_block, rendered_float_caption]);
/* 000512 */ 			}) ();
/* 000512 */ 		}
/* 000515 */ 		else {
/* 000517 */ 			var float_content_with_caption = float_content_block;
/* 000517 */ 		}
/* 000519 */ 		var full_figure = (function () {
/* 000519 */ 			var __accu0__ = self;
/* 000519 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'figure', float_content_with_caption, __kwargtrans__ ({attrs: figattrs, class_names: ['float', 'float-{}'.format (float_instance.float_type)]}));
/* 000519 */ 		}) ();
/* 000526 */ 		return full_figure;
/* 000526 */ 	});},
/* 000529 */ 	graphics_raster_magnification: 1,
/* 000530 */ 	graphics_vector_magnification: 1,
/* 000532 */ 	get render_graphics_block () {return __get__ (this, function (self, graphics_resource) {
/* 000532 */ 		if (arguments.length) {
/* 000532 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000532 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000532 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000532 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000532 */ 					switch (__attrib0__) {
/* 000532 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000532 */ 						case 'graphics_resource': var graphics_resource = __allkwargs0__ [__attrib0__]; break;
/* 000532 */ 					}
/* 000532 */ 				}
/* 000532 */ 			}
/* 000532 */ 		}
/* 000532 */ 		else {
/* 000532 */ 		}
/* 000534 */ 		var imgattrs = dict ({});
/* 000536 */ 		var styparts = [];
/* 000537 */ 		if (__t__ (graphics_resource.physical_dimensions !== null)) {
/* 000539 */ 			var __left0__ = graphics_resource.physical_dimensions;
/* 000539 */ 			var width_pt = __left0__ [0];
/* 000539 */ 			var height_pt = __left0__ [1];
/* 000541 */ 			if (__t__ (__eq__ (graphics_resource.graphics_type, 'raster'))) {
/* 000542 */ 				if (__t__ (width_pt !== null)) {
/* 000543 */ 					var width_pt = __call__ (__imul__, null, width_pt, self.graphics_raster_magnification);
/* 000543 */ 				}
/* 000544 */ 				if (__t__ (height_pt !== null)) {
/* 000545 */ 					var height_pt = __call__ (__imul__, null, height_pt, self.graphics_raster_magnification);
/* 000545 */ 				}
/* 000545 */ 			}
/* 000546 */ 			else if (__t__ (__eq__ (graphics_resource.graphics_type, 'vector'))) {
/* 000547 */ 				if (__t__ (width_pt !== null)) {
/* 000548 */ 					var width_pt = __call__ (__imul__, null, width_pt, self.graphics_vector_magnification);
/* 000548 */ 				}
/* 000549 */ 				if (__t__ (height_pt !== null)) {
/* 000550 */ 					var height_pt = __call__ (__imul__, null, height_pt, self.graphics_vector_magnification);
/* 000550 */ 				}
/* 000550 */ 			}
/* 000552 */ 			if (__t__ (width_pt !== null)) {
/* 000553 */ 				(function () {
/* 000553 */ 					var __accu0__ = styparts;
/* 000553 */ 					return __call__ (__accu0__.append, __accu0__, 'width:{}pt'.format (width_pt));
/* 000553 */ 				}) ();
/* 000553 */ 			}
/* 000554 */ 			if (__t__ (height_pt !== null)) {
/* 000555 */ 				(function () {
/* 000555 */ 					var __accu0__ = styparts;
/* 000555 */ 					return __call__ (__accu0__.append, __accu0__, 'height:{}pt'.format (height_pt));
/* 000555 */ 				}) ();
/* 000555 */ 			}
/* 000555 */ 		}
/* 000557 */ 		if (__t__ (styparts)) {
/* 000558 */ 			__setitem__ (imgattrs, 'style', (function () {
/* 000558 */ 				var __accu0__ = ';';
/* 000558 */ 				return __call__ (__accu0__.join, __accu0__, styparts);
/* 000558 */ 			}) ());
/* 000558 */ 		}
/* 000560 */ 		var src_url = graphics_resource.src_url;
/* 000561 */ 		__setitem__ (imgattrs, 'src', src_url);
/* 000563 */ 		if (__t__ (__t__ (graphics_resource.srcset !== null) && __call__ (len, null, graphics_resource.srcset))) {
/* 000564 */ 			__setitem__ (imgattrs, 'srcset', graphics_resource.srcset);
/* 000564 */ 		}
/* 000567 */ 		return (function () {
/* 000567 */ 			var __accu0__ = self;
/* 000567 */ 			return __call__ (__accu0__.generate_open_tag, __accu0__, 'img', __kwargtrans__ ({attrs: imgattrs}));
/* 000567 */ 		}) ();
/* 000567 */ 	});},
/* 000570 */ 	get render_cells () {return __get__ (this, function (self, cells_model, render_context, target_id) {
/* 000570 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000570 */ 			var target_id = null;
/* 000570 */ 		};
/* 000570 */ 		if (arguments.length) {
/* 000570 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000570 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000570 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000570 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000570 */ 					switch (__attrib0__) {
/* 000570 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000570 */ 						case 'cells_model': var cells_model = __allkwargs0__ [__attrib0__]; break;
/* 000570 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000570 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000570 */ 					}
/* 000570 */ 				}
/* 000570 */ 			}
/* 000570 */ 		}
/* 000570 */ 		else {
/* 000570 */ 		}
/* 000572 */ 		var data_items = [];
/* 000573 */ 		var row_j = 0;
/* 000574 */ 		while (__t__ (__lt__ (row_j, __call__ (len, null, cells_model.grid_data)))) {
/* 000575 */ 			var row_items = [];
/* 000576 */ 			var col_j = 0;
/* 000577 */ 			while (__t__ (__lt__ (col_j, __call__ (len, null, __getitem__ (cells_model.grid_data, row_j))))) {
/* 000579 */ 				var grid_cell_data = __getitem__ (__getitem__ (cells_model.grid_data, row_j), col_j);
/* 000581 */ 				if (__t__ (__t__ (grid_cell_data === null) || __getitem__ (grid_cell_data, 'cell') === null)) {
/* 000584 */ 					(function () {
/* 000584 */ 						var __accu0__ = row_items;
/* 000584 */ 						return __call__ (__accu0__.append, __accu0__, (function () {
/* 000584 */ 							var __accu1__ = self;
/* 000584 */ 							return __call__ (__accu1__.wrap_in_tag, __accu1__, 'td', '', __kwargtrans__ ({class_names: ['cell-empty']}));
/* 000584 */ 						}) ());
/* 000584 */ 					}) ();
/* 000589 */ 					var col_j = __call__ (__iadd__, null, col_j, 1);
/* 000589 */ 					continue;
/* 000589 */ 				}
/* 000592 */ 				if (__t__ (__getitem__ (grid_cell_data, 'is_topleft'))) {
/* 000594 */ 					var cell = __getitem__ (grid_cell_data, 'cell');
/* 000595 */ 					var rendered_cell_contents = (function () {
/* 000595 */ 						var __accu0__ = self;
/* 000595 */ 						return __call__ (__accu0__.render_nodelist, __accu0__, cell.content_nodes, __kwargtrans__ ({render_context: render_context}));
/* 000595 */ 					}) ();
/* 000599 */ 					var clsnames = __add__ (['cell'], (function () {
/* 000599 */ 						var __accu0__ = [];
/* 000599 */ 						var __iterable0__ = cell.styles;
/* 000599 */ 						for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000599 */ 							var sty = __getitem__ (__iterable0__, __index0__);
/* 000599 */ 							(function () {
/* 000599 */ 								var __accu1__ = __accu0__;
/* 000599 */ 								return __call__ (__accu1__.append, __accu1__, 'cellstyle-{}'.format (sty));
/* 000599 */ 							}) ();
/* 000599 */ 						}
/* 000599 */ 						return __accu0__;
/* 000599 */ 					}) ());
/* 000600 */ 					var tagname = 'td';
/* 000601 */ 					if (__t__ (__t__ (__in__ ('H', cell.styles)) || __in__ ('rH', cell.styles))) {
/* 000602 */ 						var tagname = 'th';
/* 000602 */ 					}
/* 000603 */ 					var attrs = dict ({});
/* 000604 */ 					var cplc = cell.placement;
/* 000605 */ 					if (__t__ (__ne__ (cplc.col_range.end, __add__ (cplc.col_range.start, 1)))) {
/* 000608 */ 						__setitem__ (attrs, 'colspan', __call__ (str, null, __sub__ (cplc.col_range.end, cplc.col_range.start)));
/* 000608 */ 					}
/* 000609 */ 					if (__t__ (__ne__ (cplc.row_range.end, __add__ (cplc.row_range.start, 1)))) {
/* 000611 */ 						__setitem__ (attrs, 'rowspan', __call__ (str, null, __sub__ (cplc.row_range.end, cplc.row_range.start)));
/* 000611 */ 					}
/* 000612 */ 					(function () {
/* 000612 */ 						var __accu0__ = row_items;
/* 000613 */ 						return __call__ (__accu0__.append, __accu0__, (function () {
/* 000613 */ 							var __accu1__ = self;
/* 000613 */ 							return __call__ (__accu1__.wrap_in_tag, __accu1__, tagname, rendered_cell_contents, __kwargtrans__ ({attrs: attrs, class_names: clsnames}));
/* 000613 */ 						}) ());
/* 000613 */ 					}) ();
/* 000620 */ 					var col_j = cplc.col_range.end;
/* 000620 */ 					continue;
/* 000620 */ 				}
/* 000625 */ 				var col_j = __call__ (__iadd__, null, col_j, 1);
/* 000625 */ 			}
/* 000627 */ 			(function () {
/* 000627 */ 				var __accu0__ = data_items;
/* 000627 */ 				return __call__ (__accu0__.append, __accu0__, row_items);
/* 000627 */ 			}) ();
/* 000628 */ 			var row_j = __call__ (__iadd__, null, row_j, 1);
/* 000628 */ 		}
/* 000630 */ 		var table_attrs = dict ({});
/* 000631 */ 		if (__t__ (target_id !== null)) {
/* 000632 */ 			__setitem__ (table_attrs, 'id', target_id);
/* 000632 */ 		}
/* 000634 */ 		var s = (function () {
/* 000634 */ 			var __accu0__ = self;
/* 000636 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'table', (function () {
/* 000636 */ 				var __accu1__ = '';
/* 000636 */ 				return __call__ (__accu1__.join, __accu1__, (function () {
/* 000636 */ 					var __accu2__ = [];
/* 000636 */ 					var __iterable0__ = data_items;
/* 000636 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000638 */ 						var row_items = __getitem__ (__iterable0__, __index0__);
/* 000638 */ 						(function () {
/* 000638 */ 							var __accu3__ = __accu2__;
/* 000637 */ 							return __call__ (__accu3__.append, __accu3__, __add__ (__add__ ('<tr>', (function () {
/* 000637 */ 								var __accu4__ = '';
/* 000637 */ 								return __call__ (__accu4__.join, __accu4__, row_items);
/* 000637 */ 							}) ()), '</tr>'));
/* 000637 */ 						}) ();
/* 000637 */ 					}
/* 000637 */ 					return __accu2__;
/* 000637 */ 				}) ());
/* 000637 */ 			}) (), __kwargtrans__ ({attrs: table_attrs, class_names: ['cells']}));
/* 000637 */ 		}) ();
/* 000643 */ 		return s;
/* 000643 */ 	});}
/* 000643 */ });
/* 000649 */ export var _rx_delayed_markers = (function () {
/* 000649 */ 	var __accu0__ = re;
/* 000649 */ 	return __call__ (__accu0__.compile, __accu0__, '<LLM:DLYD:(?P<key>\\d+)\\s*/>');
/* 000649 */ }) ();
/* 000006 */ 
//# sourceMappingURL=llm.fragmentrenderer.html.map