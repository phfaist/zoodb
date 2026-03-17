/* 000001 */ // Transcrypt'ed from Python, 2026-03-17 13:44:56
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
/* 000177 */ 		var attrs = null;
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
/* 000177 */ 						case 'attrs': var attrs = __allkwargs0__ [__attrib0__]; break;
/* 000177 */ 					}
/* 000177 */ 				}
/* 000177 */ 			}
/* 000177 */ 		}
/* 000177 */ 		else {
/* 000177 */ 		}
/* 000178 */ 		if (__t__ (!__t__ ((target_href)))) {
/* 000179 */ 			var target_href = '#';
/* 000179 */ 		}
/* 000180 */ 		var a_attrs = dict ({'href': target_href});
/* 000183 */ 		if (__t__ (attrs !== null)) {
/* 000184 */ 			(function () {
/* 000184 */ 				var __accu0__ = a_attrs;
/* 000184 */ 				return __call__ (__accu0__.py_update, __accu0__, attrs);
/* 000184 */ 			}) ();
/* 000184 */ 		}
/* 000185 */ 		if (__t__ (__call__ (callable, null, self.use_link_target_blank))) {
/* 000186 */ 			if (__t__ ((function () {
/* 000186 */ 				var __accu0__ = self;
/* 000186 */ 				return __call__ (__accu0__.use_link_target_blank, __accu0__, target_href);
/* 000186 */ 			}) ())) {
/* 000187 */ 				__setitem__ (a_attrs, 'target', '_blank');
/* 000187 */ 			}
/* 000187 */ 		}
/* 000188 */ 		else if (__t__ (__t__ (self.use_link_target_blank) && !__t__ (((function () {
/* 000188 */ 			var __accu0__ = target_href;
/* 000188 */ 			return __call__ (__accu0__.startswith, __accu0__, '#');
/* 000188 */ 		}) ())))) {
/* 000189 */ 			__setitem__ (a_attrs, 'target', '_blank');
/* 000189 */ 		}
/* 000190 */ 		return (function () {
/* 000190 */ 			var __accu0__ = self;
/* 000190 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'a', display_html, __kwargtrans__ ({attrs: a_attrs, class_names: class_names}));
/* 000190 */ 		}) ();
/* 000190 */ 	});},
/* 000199 */ 	include_node_data_attrs_fn: null,
/* 000219 */ 	get _get_meta_info_data_attrs () {return __get__ (this, function (self, node, when, render_context) {
/* 000219 */ 		if (arguments.length) {
/* 000219 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000219 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000219 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000219 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000219 */ 					switch (__attrib0__) {
/* 000219 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000219 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000219 */ 						case 'when': var when = __allkwargs0__ [__attrib0__]; break;
/* 000219 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000219 */ 					}
/* 000219 */ 				}
/* 000219 */ 			}
/* 000219 */ 		}
/* 000219 */ 		else {
/* 000219 */ 		}
/* 000220 */ 		if (__t__ (__t__ (self.include_node_data_attrs_fn === null) || node === null)) {
/* 000221 */ 			return null;
/* 000221 */ 		}
/* 000222 */ 		var meta_info = (function () {
/* 000222 */ 			var __accu0__ = self;
/* 000222 */ 			return __call__ (__accu0__.include_node_data_attrs_fn, __accu0__, node, __kwargtrans__ ({when: when, render_context: render_context}));
/* 000222 */ 		}) ();
/* 000227 */ 		if (__t__ (meta_info === null)) {
/* 000228 */ 			return null;
/* 000228 */ 		}
/* 000229 */ 		return (function () {
/* 000229 */ 			var __accu0__ = [];
/* 000229 */ 			var __iterable0__ = (function () {
/* 000229 */ 				var __accu1__ = meta_info;
/* 000229 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000229 */ 			}) ();
/* 000229 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000229 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000229 */ 				var x = __left0__ [0];
/* 000229 */ 				var v = __left0__ [1];
/* 000229 */ 				(function () {
/* 000229 */ 					var __accu1__ = __accu0__;
/* 000229 */ 					return __call__ (__accu1__.append, __accu1__, ['data-{}'.format (x), __call__ (str, null, v)]);
/* 000229 */ 				}) ();
/* 000229 */ 			}
/* 000229 */ 			return dict (__accu0__);
/* 000229 */ 		}) ();
/* 000229 */ 	});},
/* 000230 */ 	get _merge_meta_info_data_attrs () {return __get__ (this, function (self, attrs, node, when, render_context) {
/* 000230 */ 		if (arguments.length) {
/* 000230 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000230 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000230 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000230 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000230 */ 					switch (__attrib0__) {
/* 000230 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000230 */ 						case 'attrs': var attrs = __allkwargs0__ [__attrib0__]; break;
/* 000230 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000230 */ 						case 'when': var when = __allkwargs0__ [__attrib0__]; break;
/* 000230 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000230 */ 					}
/* 000230 */ 				}
/* 000230 */ 			}
/* 000230 */ 		}
/* 000230 */ 		else {
/* 000230 */ 		}
/* 000231 */ 		var data_attrs = (function () {
/* 000231 */ 			var __accu0__ = self;
/* 000231 */ 			return __call__ (__accu0__._get_meta_info_data_attrs, __accu0__, node, when, render_context);
/* 000231 */ 		}) ();
/* 000232 */ 		if (__t__ (data_attrs !== null)) {
/* 000233 */ 			(function () {
/* 000233 */ 				var __accu0__ = attrs;
/* 000233 */ 				return __call__ (__accu0__.py_update, __accu0__, data_attrs);
/* 000233 */ 			}) ();
/* 000233 */ 		}
/* 000233 */ 	});},
/* 000235 */ 	get render_build_paragraph () {return __get__ (this, function (self, nodelist, render_context) {
/* 000235 */ 		if (arguments.length) {
/* 000235 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000235 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000235 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000235 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000235 */ 					switch (__attrib0__) {
/* 000235 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000235 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000235 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000235 */ 					}
/* 000235 */ 				}
/* 000235 */ 			}
/* 000235 */ 		}
/* 000235 */ 		else {
/* 000235 */ 		}
/* 000236 */ 		var data_attrs = (function () {
/* 000236 */ 			var __accu0__ = self;
/* 000236 */ 			return __call__ (__accu0__._get_meta_info_data_attrs, __accu0__, nodelist, 'build-paragraph', render_context);
/* 000236 */ 		}) ();
/* 000238 */ 		return (function () {
/* 000238 */ 			var __accu0__ = self;
/* 000240 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'p', (function () {
/* 000240 */ 				var __accu1__ = self;
/* 000240 */ 				return __call__ (__accu1__.render_inline_content, __accu1__, nodelist, render_context);
/* 000240 */ 			}) (), __kwargtrans__ ({attrs: data_attrs}));
/* 000240 */ 		}) ();
/* 000240 */ 	});},
/* 000244 */ 	get render_inline_content () {return __get__ (this, function (self, nodelist, render_context) {
/* 000244 */ 		if (arguments.length) {
/* 000244 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000244 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000244 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000244 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000244 */ 					switch (__attrib0__) {
/* 000244 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000244 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000244 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000244 */ 					}
/* 000244 */ 				}
/* 000244 */ 			}
/* 000244 */ 		}
/* 000244 */ 		else {
/* 000244 */ 		}
/* 000245 */ 		return (function () {
/* 000245 */ 			var __accu0__ = self;
/* 000245 */ 			return __call__ (__accu0__.render_join, __accu0__, (function () {
/* 000245 */ 				var __accu1__ = [];
/* 000246 */ 				var __iterable0__ = nodelist;
/* 000246 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000246 */ 					var n = __getitem__ (__iterable0__, __index0__);
/* 000246 */ 					(function () {
/* 000246 */ 						var __accu2__ = __accu1__;
/* 000246 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000246 */ 							var __accu3__ = self;
/* 000246 */ 							return __call__ (__accu3__.render_node, __accu3__, n, render_context);
/* 000246 */ 						}) ());
/* 000246 */ 					}) ();
/* 000246 */ 				}
/* 000246 */ 				return __accu1__;
/* 000246 */ 			}) (), render_context);
/* 000246 */ 		}) ();
/* 000246 */ 	});},
/* 000250 */ 	get render_join () {return __get__ (this, function (self, content_list, render_context) {
/* 000250 */ 		if (arguments.length) {
/* 000250 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000250 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000250 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000250 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000250 */ 					switch (__attrib0__) {
/* 000250 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000250 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000250 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000250 */ 					}
/* 000250 */ 				}
/* 000250 */ 			}
/* 000250 */ 		}
/* 000250 */ 		else {
/* 000250 */ 		}
/* 000256 */ 		return (function () {
/* 000256 */ 			var __accu0__ = '';
/* 000256 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000256 */ 				var __accu1__ = [];
/* 000256 */ 				var __iterable0__ = content_list;
/* 000256 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000256 */ 					var s = __getitem__ (__iterable0__, __index0__);
/* 000256 */ 					(function () {
/* 000256 */ 						var __accu2__ = __accu1__;
/* 000256 */ 						return __call__ (__accu2__.append, __accu2__, __call__ (str, null, s));
/* 000256 */ 					}) ();
/* 000256 */ 				}
/* 000256 */ 				return __accu1__;
/* 000256 */ 			}) ());
/* 000256 */ 		}) ();
/* 000256 */ 	});},
/* 000258 */ 	get render_join_blocks () {return __get__ (this, function (self, content_list, render_context) {
/* 000258 */ 		if (arguments.length) {
/* 000258 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000258 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000258 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000258 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000258 */ 					switch (__attrib0__) {
/* 000258 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000258 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000258 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000258 */ 					}
/* 000258 */ 				}
/* 000258 */ 			}
/* 000258 */ 		}
/* 000258 */ 		else {
/* 000258 */ 		}
/* 000266 */ 		return (function () {
/* 000266 */ 			var __accu0__ = self.html_blocks_joiner;
/* 000266 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000266 */ 				var __accu1__ = [];
/* 000267 */ 				var __iterable0__ = content_list;
/* 000267 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000267 */ 					var c = __getitem__ (__iterable0__, __index0__);
/* 000267 */ 					if (__t__ (__t__ (c !== null) && __call__ (len, null, c))) {
/* 000267 */ 						(function () {
/* 000267 */ 							var __accu2__ = __accu1__;
/* 000267 */ 							return __call__ (__accu2__.append, __accu2__, c);
/* 000267 */ 						}) ();
/* 000267 */ 					}
/* 000267 */ 				}
/* 000267 */ 				return __accu1__;
/* 000267 */ 			}) ());
/* 000267 */ 		}) ();
/* 000267 */ 	});},
/* 000273 */ 	get render_value () {return __get__ (this, function (self, value, render_context) {
/* 000273 */ 		if (arguments.length) {
/* 000273 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000273 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000273 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000273 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000273 */ 					switch (__attrib0__) {
/* 000273 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000273 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000273 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000273 */ 					}
/* 000273 */ 				}
/* 000273 */ 			}
/* 000273 */ 		}
/* 000273 */ 		else {
/* 000273 */ 		}
/* 000274 */ 		return (function () {
/* 000274 */ 			var __accu0__ = self;
/* 000274 */ 			return __call__ (__accu0__.htmlescape, __accu0__, value);
/* 000274 */ 		}) ();
/* 000274 */ 	});},
/* 000276 */ 	get render_empty_error_placeholder () {return __get__ (this, function (self, debug_str, render_context) {
/* 000276 */ 		if (arguments.length) {
/* 000276 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000276 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000276 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000276 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000276 */ 					switch (__attrib0__) {
/* 000276 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000276 */ 						case 'debug_str': var debug_str = __allkwargs0__ [__attrib0__]; break;
/* 000276 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000276 */ 					}
/* 000276 */ 				}
/* 000276 */ 			}
/* 000276 */ 		}
/* 000276 */ 		else {
/* 000276 */ 		}
/* 000277 */ 		var debug_str_safe = (function () {
/* 000277 */ 			var __accu0__ = debug_str;
/* 000277 */ 			return __call__ (__accu0__.py_replace, __accu0__, '--', '- - ');
/* 000277 */ 		}) ();
/* 000278 */ 		return '<span class="empty-error-placeholder"><!-- {} -->(?)</span>'.format (debug_str_safe);
/* 000278 */ 	});},
/* 000280 */ 	get render_nothing () {return __get__ (this, function (self, render_context, annotations) {
/* 000280 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000280 */ 			var annotations = null;
/* 000280 */ 		};
/* 000280 */ 		if (arguments.length) {
/* 000280 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000280 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000280 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000280 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000280 */ 					switch (__attrib0__) {
/* 000280 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000280 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000280 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000280 */ 					}
/* 000280 */ 				}
/* 000280 */ 			}
/* 000280 */ 		}
/* 000280 */ 		else {
/* 000280 */ 		}
/* 000281 */ 		if (__t__ (!__t__ ((self.render_nothing_as_comment_with_annotations)))) {
/* 000282 */ 			return '';
/* 000282 */ 		}
/* 000283 */ 		if (__t__ (!__t__ ((annotations)))) {
/* 000284 */ 			var annotations = [];
/* 000284 */ 		}
/* 000285 */ 		var annotations = (function () {
/* 000285 */ 			var __accu0__ = [];
/* 000285 */ 			var __iterable0__ = annotations;
/* 000285 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000285 */ 				var a = __getitem__ (__iterable0__, __index0__);
/* 000285 */ 				(function () {
/* 000285 */ 					var __accu1__ = __accu0__;
/* 000285 */ 					return __call__ (__accu1__.append, __accu1__, (function () {
/* 000285 */ 						var __accu2__ = a;
/* 000285 */ 						return __call__ (__accu2__.py_replace, __accu2__, '--', '- - ');
/* 000285 */ 					}) ());
/* 000285 */ 				}) ();
/* 000285 */ 			}
/* 000285 */ 			return __accu0__;
/* 000285 */ 		}) ();
/* 000286 */ 		return (function () {
/* 000286 */ 			var __accu0__ = '<!-- {} -->';
/* 000286 */ 			return __call__ (__accu0__.format, __accu0__, (function () {
/* 000286 */ 				var __accu1__ = ' ';
/* 000286 */ 				return __call__ (__accu1__.join, __accu1__, annotations);
/* 000286 */ 			}) ());
/* 000286 */ 		}) ();
/* 000286 */ 	});},
/* 000288 */ 	verbatim_highlight_spaces: false,
/* 000289 */ 	verbatim_protect_backslashes: true,
/* 000291 */ 	get render_verbatim () {return __get__ (this, function (self, value, render_context) {
/* 000291 */ 		var is_block_level = false;
/* 000291 */ 		var annotations = null;
/* 000291 */ 		var target_id = null;
/* 000291 */ 		if (arguments.length) {
/* 000291 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000291 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000291 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000291 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000291 */ 					switch (__attrib0__) {
/* 000291 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000291 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000291 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000291 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000291 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000291 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000291 */ 					}
/* 000291 */ 				}
/* 000291 */ 			}
/* 000291 */ 		}
/* 000291 */ 		else {
/* 000291 */ 		}
/* 000293 */ 		var attrs = dict ({});
/* 000294 */ 		if (__t__ (target_id !== null)) {
/* 000295 */ 			__setitem__ (attrs, 'id', target_id);
/* 000295 */ 		}
/* 000296 */ 		var escaped = (function () {
/* 000296 */ 			var __accu0__ = self;
/* 000296 */ 			return __call__ (__accu0__.htmlescape, __accu0__, value);
/* 000296 */ 		}) ();
/* 000297 */ 		if (__t__ (self.verbatim_protect_backslashes)) {
/* 000299 */ 			var escaped = (function () {
/* 000299 */ 				var __accu0__ = escaped;
/* 000299 */ 				return __call__ (__accu0__.py_replace, __accu0__, '\\', '<span>\\</span>');
/* 000299 */ 			}) ();
/* 000299 */ 		}
/* 000300 */ 		if (__t__ (self.verbatim_highlight_spaces)) {
/* 000301 */ 			var escaped = (function () {
/* 000301 */ 				var __accu0__ = escaped;
/* 000301 */ 				return __call__ (__accu0__.py_replace, __accu0__, ' ', '<span class="verbatimspace">&nbsp;</span>');
/* 000301 */ 			}) ();
/* 000301 */ 		}
/* 000304 */ 		var tag = 'span';
/* 000305 */ 		var __iterable0__ = annotations;
/* 000305 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000305 */ 			var annotation = __getitem__ (__iterable0__, __index0__);
/* 000306 */ 			if (__t__ (__in__ (annotation, tuple (['verbatimcode-environment'])))) {
/* 000308 */ 				var tag = 'div';
/* 000308 */ 			}
/* 000308 */ 		}
/* 000310 */ 		return (function () {
/* 000310 */ 			var __accu0__ = self;
/* 000310 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, tag, escaped, __kwargtrans__ ({class_names: (__t__ (annotations) ? annotations : ['verbatimtext']), attrs: attrs}));
/* 000310 */ 		}) ();
/* 000310 */ 	});},
/* 000317 */ 	get render_math_content () {return __get__ (this, function (self, delimiters, nodelist, render_context, displaytype, environmentname, target_id) {
/* 000317 */ 		if (typeof environmentname == 'undefined' || (environmentname != null && environmentname.hasOwnProperty ("__kwargtrans__"))) {;
/* 000317 */ 			var environmentname = null;
/* 000317 */ 		};
/* 000317 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000317 */ 			var target_id = null;
/* 000317 */ 		};
/* 000317 */ 		if (arguments.length) {
/* 000317 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000317 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000317 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000317 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000317 */ 					switch (__attrib0__) {
/* 000317 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000317 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000317 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000317 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000317 */ 						case 'displaytype': var displaytype = __allkwargs0__ [__attrib0__]; break;
/* 000317 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000317 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000317 */ 					}
/* 000317 */ 				}
/* 000317 */ 			}
/* 000317 */ 		}
/* 000317 */ 		else {
/* 000317 */ 		}
/* 000325 */ 		if (__t__ (!__t__ ((self.use_mathjax)))) {
/* 000326 */ 			(function () {
/* 000326 */ 				var __accu0__ = logger;
/* 000326 */ 				return __call__ (__accu0__.warning, __accu0__, 'called HtmlFragmentRenderer.render_math_content() but self.use_mathjax is not set. Your math will probably not render correctly.');
/* 000326 */ 			}) ();
/* 000326 */ 		}
/* 000332 */ 		var use_delims = tuple ([__getitem__ (delimiters, 0), __getitem__ (delimiters, 1)]);
/* 000333 */ 		if (__t__ (self.use_standard_math_delimiters)) {
/* 000334 */ 			if (__t__ (__eq__ (displaytype, 'inline'))) {
/* 000335 */ 				var use_delims = tuple (['\\(', '\\)']);
/* 000335 */ 			}
/* 000336 */ 			else if (__t__ (__eq__ (displaytype, 'display'))) {
/* 000337 */ 				if (__t__ (environmentname)) {
/* 000338 */ 					var use_delims = tuple (['\\begin{}{}{}'.format ('{', environmentname, '}'), '\\end{}{}{}'.format ('{', environmentname, '}')]);
/* 000338 */ 				}
/* 000341 */ 				else {
/* 000343 */ 					var use_delims = tuple (['\\[', '\\]']);
/* 000343 */ 				}
/* 000343 */ 			}
/* 000344 */ 			else {
/* 000345 */ 				var __except0__ = __call__ (ValueError, null, 'Invalid displaytype: {}'.format (__call__ (repr, null, displaytype)));
/* 000345 */ 				__except0__.__cause__ = null;
/* 000345 */ 				throw __except0__;
/* 000345 */ 			}
/* 000345 */ 		}
/* 000347 */ 		var class_names = ['{}-math'.format (displaytype)];
/* 000348 */ 		if (__t__ (environmentname !== null)) {
/* 000349 */ 			(function () {
/* 000349 */ 				var __accu0__ = class_names;
/* 000349 */ 				return __call__ (__accu0__.append, __accu0__, 'env-{}'.format ((function () {
/* 000349 */ 					var __accu1__ = environmentname;
/* 000349 */ 					return __call__ (__accu1__.py_replace, __accu1__, '*', '-star');
/* 000349 */ 				}) ()));
/* 000349 */ 			}) ();
/* 000349 */ 		}
/* 000352 */ 		var content_html = (function () {
/* 000352 */ 			var __accu0__ = self;
/* 000352 */ 			return __call__ (__accu0__.htmlescape, __accu0__, __add__ (__add__ (__getitem__ (use_delims, 0), (function () {
/* 000352 */ 				var __accu1__ = self;
/* 000352 */ 				return __call__ (__accu1__.recompose_latex, __accu1__, nodelist);
/* 000352 */ 			}) ()), __getitem__ (use_delims, 1)));
/* 000352 */ 		}) ();
/* 000355 */ 		var attrs = dict ({});
/* 000356 */ 		if (__t__ (target_id !== null)) {
/* 000357 */ 			__setitem__ (attrs, 'id', target_id);
/* 000357 */ 		}
/* 000359 */ 		(function () {
/* 000359 */ 			var __accu0__ = self;
/* 000359 */ 			return __call__ (__accu0__._merge_meta_info_data_attrs, __accu0__, attrs, nodelist, 'math-content', render_context);
/* 000359 */ 		}) ();
/* 000361 */ 		if (__t__ (__eq__ (displaytype, 'display'))) {
/* 000363 */ 			return (function () {
/* 000363 */ 				var __accu0__ = self;
/* 000363 */ 				return __call__ (__accu0__.wrap_in_tag, __accu0__, 'span', content_html, __kwargtrans__ ({class_names: class_names, attrs: attrs}));
/* 000363 */ 			}) ();
/* 000363 */ 		}
/* 000370 */ 		return (function () {
/* 000370 */ 			var __accu0__ = self;
/* 000370 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'span', content_html, __kwargtrans__ ({class_names: class_names, attrs: attrs}));
/* 000370 */ 		}) ();
/* 000370 */ 	});},
/* 000377 */ 	get render_text_format () {return __get__ (this, function (self, text_formats, nodelist, render_context) {
/* 000377 */ 		if (arguments.length) {
/* 000377 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000377 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000377 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000377 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000377 */ 					switch (__attrib0__) {
/* 000377 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000377 */ 						case 'text_formats': var text_formats = __allkwargs0__ [__attrib0__]; break;
/* 000377 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000377 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000377 */ 					}
/* 000377 */ 				}
/* 000377 */ 			}
/* 000377 */ 		}
/* 000377 */ 		else {
/* 000377 */ 		}
/* 000379 */ 		var content = (function () {
/* 000379 */ 			var __accu0__ = self;
/* 000379 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, nodelist, render_context, __kwargtrans__ ({is_block_level: false}));
/* 000379 */ 		}) ();
/* 000385 */ 		var data_attrs = (function () {
/* 000385 */ 			var __accu0__ = self;
/* 000385 */ 			return __call__ (__accu0__._get_meta_info_data_attrs, __accu0__, nodelist, 'text-format', render_context);
/* 000385 */ 		}) ();
/* 000387 */ 		return (function () {
/* 000387 */ 			var __accu0__ = self;
/* 000387 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'span', content, __kwargtrans__ ({class_names: text_formats, attrs: data_attrs}));
/* 000387 */ 		}) ();
/* 000387 */ 	});},
/* 000394 */ 	get render_semantic_span () {return __get__ (this, function (self, content, role, render_context) {
/* 000394 */ 		var annotations = null;
/* 000394 */ 		var target_id = null;
/* 000394 */ 		if (arguments.length) {
/* 000394 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000394 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000394 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000394 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000394 */ 					switch (__attrib0__) {
/* 000394 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000394 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000394 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000394 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000394 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000394 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000394 */ 					}
/* 000394 */ 				}
/* 000394 */ 			}
/* 000394 */ 		}
/* 000394 */ 		else {
/* 000394 */ 		}
/* 000396 */ 		var attrs = dict ({});
/* 000397 */ 		if (__t__ (target_id !== null)) {
/* 000398 */ 			__setitem__ (attrs, 'id', target_id);
/* 000398 */ 		}
/* 000400 */ 		var annotations = __call__ (list, null, (__t__ (annotations !== null) ? annotations : []));
/* 000401 */ 		if (__t__ (__in__ (role, annotations))) {
/* 000402 */ 			(function () {
/* 000402 */ 				var __accu0__ = annotations;
/* 000402 */ 				return __call__ (__accu0__.remove, __accu0__, role);
/* 000402 */ 			}) ();
/* 000402 */ 		}
/* 000404 */ 		return (function () {
/* 000404 */ 			var __accu0__ = self;
/* 000404 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'span', content, __kwargtrans__ ({attrs: attrs, class_names: __add__ ([role], annotations)}));
/* 000404 */ 		}) ();
/* 000404 */ 	});},
/* 000412 */ 	get render_semantic_block () {return __get__ (this, function (self, content, role, render_context) {
/* 000412 */ 		var annotations = null;
/* 000412 */ 		var target_id = null;
/* 000412 */ 		if (arguments.length) {
/* 000412 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000412 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000412 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000412 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000412 */ 					switch (__attrib0__) {
/* 000412 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000412 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000412 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000412 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000412 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000412 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000412 */ 					}
/* 000412 */ 				}
/* 000412 */ 			}
/* 000412 */ 		}
/* 000412 */ 		else {
/* 000412 */ 		}
/* 000414 */ 		var attrs = dict ({});
/* 000415 */ 		if (__t__ (target_id !== null)) {
/* 000416 */ 			__setitem__ (attrs, 'id', target_id);
/* 000416 */ 		}
/* 000418 */ 		var annotations = __call__ (list, null, (__t__ (annotations !== null) ? annotations : []));
/* 000419 */ 		if (__t__ (__in__ (role, annotations))) {
/* 000420 */ 			(function () {
/* 000420 */ 				var __accu0__ = annotations;
/* 000420 */ 				return __call__ (__accu0__.remove, __accu0__, role);
/* 000420 */ 			}) ();
/* 000420 */ 		}
/* 000422 */ 		if (__t__ (__in__ (role, tuple (['section', 'main', 'article'])))) {
/* 000423 */ 			return (function () {
/* 000423 */ 				var __accu0__ = self;
/* 000423 */ 				return __call__ (__accu0__.wrap_in_tag, __accu0__, role, content, __kwargtrans__ ({attrs: attrs, class_names: annotations}));
/* 000423 */ 			}) ();
/* 000423 */ 		}
/* 000429 */ 		return (function () {
/* 000429 */ 			var __accu0__ = self;
/* 000429 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'div', content, __kwargtrans__ ({attrs: attrs, class_names: __add__ ([role], annotations)}));
/* 000429 */ 		}) ();
/* 000429 */ 	});},
/* 000437 */ 	lines_use_line_span: true,
/* 000438 */ 	lines_use_br: true,
/* 000439 */ 	lines_container_tag: dict ({}),
/* 000443 */ 	get render_lines () {return __get__ (this, function (self, lines_info_list, render_context) {
/* 000443 */ 		var role = null;
/* 000443 */ 		var annotations = null;
/* 000443 */ 		var target_id = null;
/* 000443 */ 		if (arguments.length) {
/* 000443 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000443 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000443 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000443 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000443 */ 					switch (__attrib0__) {
/* 000443 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000443 */ 						case 'lines_info_list': var lines_info_list = __allkwargs0__ [__attrib0__]; break;
/* 000443 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000443 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000443 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000443 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000443 */ 					}
/* 000443 */ 				}
/* 000443 */ 			}
/* 000443 */ 		}
/* 000443 */ 		else {
/* 000443 */ 		}
/* 000452 */ 		var s_lines = [];
/* 000454 */ 		var __iterable0__ = lines_info_list;
/* 000454 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000454 */ 			var line_info = __getitem__ (__iterable0__, __index0__);
/* 000455 */ 			var line_content_nodelist = line_info.nodelist;
/* 000457 */ 			var line_content = (function () {
/* 000457 */ 				var __accu0__ = self;
/* 000457 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, line_content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000457 */ 			}) ();
/* 000463 */ 			if (__t__ (line_info.indent_left !== null)) {
/* 000464 */ 				var line_content = __add__ (__mul__ ('<span class="quote-lines-indent"></span>', line_info.indent_left), line_content);
/* 000464 */ 			}
/* 000469 */ 			if (__t__ (line_info.indent_right !== null)) {
/* 000470 */ 				(function () {
/* 000470 */ 					var __accu0__ = logger;
/* 000470 */ 					return __call__ (__accu0__.warning, __accu0__, 'lines indent_right not yet implemented in HTML renderer');
/* 000470 */ 				}) ();
/* 000470 */ 			}
/* 000471 */ 			if (__t__ (line_info.align !== null)) {
/* 000472 */ 				(function () {
/* 000472 */ 					var __accu0__ = logger;
/* 000472 */ 					return __call__ (__accu0__.warning, __accu0__, 'lines align not yet implemented in HTML renderer');
/* 000472 */ 				}) ();
/* 000472 */ 			}
/* 000474 */ 			if (__t__ (self.lines_use_line_span)) {
/* 000475 */ 				var line_content = (function () {
/* 000475 */ 					var __accu0__ = self;
/* 000475 */ 					return __call__ (__accu0__.wrap_in_tag, __accu0__, 'span', line_content);
/* 000475 */ 				}) ();
/* 000475 */ 			}
/* 000479 */ 			(function () {
/* 000479 */ 				var __accu0__ = s_lines;
/* 000479 */ 				return __call__ (__accu0__.append, __accu0__, line_content);
/* 000479 */ 			}) ();
/* 000479 */ 		}
/* 000483 */ 		if (__t__ (self.lines_use_br)) {
/* 000485 */ 			var s_lines = (function () {
/* 000485 */ 				var __accu0__ = [];
/* 000487 */ 				var __iterable0__ = __call__ (enumerate, null, s_lines);
/* 000487 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000487 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000487 */ 					var j = __left0__ [0];
/* 000487 */ 					var line = __left0__ [1];
/* 000487 */ 					(function () {
/* 000487 */ 						var __accu1__ = __accu0__;
/* 000486 */ 						return __call__ (__accu1__.append, __accu1__, (__t__ (__lt__ (j, __sub__ (__call__ (len, null, s_lines), 1))) ? __add__ (line, '<br>') : line));
/* 000486 */ 					}) ();
/* 000486 */ 				}
/* 000486 */ 				return __accu0__;
/* 000486 */ 			}) ();
/* 000486 */ 		}
/* 000490 */ 		var attrs = dict ({});
/* 000491 */ 		if (__t__ (target_id !== null)) {
/* 000492 */ 			__setitem__ (attrs, 'id', target_id);
/* 000492 */ 		}
/* 000494 */ 		var annotations = __call__ (list, null, (__t__ (annotations !== null) ? annotations : []));
/* 000495 */ 		if (__t__ (__t__ (role) && __in__ (role, annotations))) {
/* 000496 */ 			(function () {
/* 000496 */ 				var __accu0__ = annotations;
/* 000496 */ 				return __call__ (__accu0__.remove, __accu0__, role);
/* 000496 */ 			}) ();
/* 000496 */ 		}
/* 000498 */ 		var class_names = ['lines'];
/* 000499 */ 		if (__t__ (role)) {
/* 000500 */ 			(function () {
/* 000500 */ 				var __accu0__ = class_names;
/* 000500 */ 				return __call__ (__accu0__.append, __accu0__, role);
/* 000500 */ 			}) ();
/* 000500 */ 		}
/* 000501 */ 		if (__t__ (annotations)) {
/* 000502 */ 			(function () {
/* 000502 */ 				var __accu0__ = class_names;
/* 000502 */ 				return __call__ (__accu0__.extend, __accu0__, annotations);
/* 000502 */ 			}) ();
/* 000502 */ 		}
/* 000504 */ 		var tag = 'p';
/* 000505 */ 		if (__t__ (__t__ (role) && __in__ (role, self.lines_container_tag))) {
/* 000506 */ 			var tag = __getitem__ (self.lines_container_tag, role);
/* 000506 */ 		}
/* 000508 */ 		return (function () {
/* 000508 */ 			var __accu0__ = self;
/* 000510 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'p', (function () {
/* 000510 */ 				var __accu1__ = self;
/* 000510 */ 				return __call__ (__accu1__.render_join, __accu1__, s_lines, render_context);
/* 000510 */ 			}) (), __kwargtrans__ ({class_names: class_names, attrs: attrs}));
/* 000510 */ 		}) ();
/* 000510 */ 	});},
/* 000516 */ 	get render_enumeration () {return __get__ (this, function (self, iter_items_nodelists, counter_formatter, render_context) {
/* 000516 */ 		var target_id_generator = null;
/* 000516 */ 		var annotations = null;
/* 000516 */ 		var nested_depth = null;
/* 000516 */ 		if (arguments.length) {
/* 000516 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000516 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000516 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000516 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000516 */ 					switch (__attrib0__) {
/* 000516 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000516 */ 						case 'iter_items_nodelists': var iter_items_nodelists = __allkwargs0__ [__attrib0__]; break;
/* 000516 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000516 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000516 */ 						case 'target_id_generator': var target_id_generator = __allkwargs0__ [__attrib0__]; break;
/* 000516 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000516 */ 						case 'nested_depth': var nested_depth = __allkwargs0__ [__attrib0__]; break;
/* 000516 */ 					}
/* 000516 */ 				}
/* 000516 */ 			}
/* 000516 */ 		}
/* 000516 */ 		else {
/* 000516 */ 		}
/* 000528 */ 		var s_items = [];
/* 000530 */ 		var __iterable0__ = __call__ (enumerate, null, iter_items_nodelists);
/* 000530 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000530 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000530 */ 			var j = __left0__ [0];
/* 000530 */ 			var item_content_nodelist = __left0__ [1];
/* 000532 */ 			var use_block_level = true;
/* 000533 */ 			if (__t__ (item_content_nodelist.parsing_state.is_block_level === false)) {
/* 000536 */ 				var use_block_level = false;
/* 000536 */ 			}
/* 000538 */ 			// pass;
/* 000542 */ 			// pass;
/* 000546 */ 			var item_content = (function () {
/* 000546 */ 				var __accu0__ = self;
/* 000546 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, item_content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: use_block_level}));
/* 000546 */ 			}) ();
/* 000552 */ 			var enumno = __add__ (1, j);
/* 000554 */ 			var tag_nodelist = __call__ (counter_formatter, null, enumno);
/* 000555 */ 			if (__t__ (__call__ (isinstance, null, tag_nodelist, str))) {
/* 000556 */ 				var tag_content = (function () {
/* 000556 */ 					var __accu0__ = self;
/* 000556 */ 					return __call__ (__accu0__.render_value, __accu0__, tag_nodelist, render_context);
/* 000556 */ 				}) ();
/* 000556 */ 			}
/* 000557 */ 			else {
/* 000558 */ 				var tag_content = (function () {
/* 000558 */ 					var __accu0__ = self;
/* 000558 */ 					return __call__ (__accu0__.render_nodelist, __accu0__, tag_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000558 */ 				}) ();
/* 000558 */ 			}
/* 000564 */ 			var dtattrs = dict ({});
/* 000565 */ 			if (__t__ (target_id_generator !== null)) {
/* 000566 */ 				var tid = __call__ (target_id_generator, null, enumno);
/* 000567 */ 				if (__t__ (tid !== null)) {
/* 000568 */ 					__setitem__ (dtattrs, 'id', tid);
/* 000568 */ 				}
/* 000568 */ 			}
/* 000570 */ 			(function () {
/* 000570 */ 				var __accu0__ = s_items;
/* 000571 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000571 */ 					var __accu1__ = self;
/* 000572 */ 					return __call__ (__accu1__.render_join, __accu1__, [(function () {
/* 000572 */ 						var __accu2__ = self;
/* 000572 */ 						return __call__ (__accu2__.wrap_in_tag, __accu2__, 'dt', tag_content, __kwargtrans__ ({attrs: dtattrs}));
/* 000577 */ 					}) (), (function () {
/* 000577 */ 						var __accu2__ = self;
/* 000577 */ 						return __call__ (__accu2__.wrap_in_tag, __accu2__, 'dd', item_content);
/* 000577 */ 					}) ()], render_context);
/* 000577 */ 				}) ());
/* 000577 */ 			}) ();
/* 000577 */ 		}
/* 000584 */ 		return (function () {
/* 000584 */ 			var __accu0__ = self;
/* 000586 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'dl', (function () {
/* 000586 */ 				var __accu1__ = self;
/* 000586 */ 				return __call__ (__accu1__.render_join, __accu1__, s_items, render_context);
/* 000586 */ 			}) (), __kwargtrans__ ({class_names: __add__ (['enumeration'], (__t__ (annotations) ? annotations : []))}));
/* 000586 */ 		}) ();
/* 000586 */ 	});},
/* 000591 */ 	get render_heading () {return __get__ (this, function (self, heading_nodelist, render_context) {
/* 000591 */ 		var heading_level = 1;
/* 000591 */ 		var inline_heading = false;
/* 000591 */ 		var target_id = null;
/* 000591 */ 		var annotations = null;
/* 000591 */ 		if (arguments.length) {
/* 000591 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000591 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000591 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000591 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000591 */ 					switch (__attrib0__) {
/* 000591 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000591 */ 						case 'heading_nodelist': var heading_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000591 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000591 */ 						case 'heading_level': var heading_level = __allkwargs0__ [__attrib0__]; break;
/* 000591 */ 						case 'inline_heading': var inline_heading = __allkwargs0__ [__attrib0__]; break;
/* 000591 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000591 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000591 */ 					}
/* 000591 */ 				}
/* 000591 */ 			}
/* 000591 */ 		}
/* 000591 */ 		else {
/* 000591 */ 		}
/* 000598 */ 		if (__t__ (!__in__ (heading_level, self.heading_tags_by_level))) {
/* 000601 */ 			var __except0__ = __call__ (ValueError, null, "HTML renderer: bad heading level ‘{}’,  expected one of {} (or set HTML fragment renderer's ‘heading_tags_by_level’ config".format (heading_level, __call__ (list, null, (function () {
/* 000601 */ 				var __accu0__ = self.heading_tags_by_level;
/* 000601 */ 				return __call__ (__accu0__.py_keys, __accu0__);
/* 000601 */ 			}) ())));
/* 000601 */ 			__except0__.__cause__ = null;
/* 000601 */ 			throw __except0__;
/* 000601 */ 		}
/* 000604 */ 		var annot = (__t__ (annotations) ? __call__ (list, null, annotations) : []);
/* 000605 */ 		(function () {
/* 000605 */ 			var __accu0__ = annot;
/* 000605 */ 			return __call__ (__accu0__.append, __accu0__, 'heading-level-{}'.format (heading_level));
/* 000605 */ 		}) ();
/* 000606 */ 		if (__t__ (inline_heading)) {
/* 000607 */ 			(function () {
/* 000607 */ 				var __accu0__ = annot;
/* 000607 */ 				return __call__ (__accu0__.append, __accu0__, 'heading-inline');
/* 000607 */ 			}) ();
/* 000607 */ 		}
/* 000609 */ 		var attrs = dict ({});
/* 000610 */ 		if (__t__ (target_id !== null)) {
/* 000611 */ 			__setitem__ (attrs, 'id', target_id);
/* 000611 */ 		}
/* 000613 */ 		(function () {
/* 000613 */ 			var __accu0__ = self;
/* 000613 */ 			return __call__ (__accu0__._merge_meta_info_data_attrs, __accu0__, attrs, heading_nodelist, 'heading', render_context);
/* 000613 */ 		}) ();
/* 000615 */ 		var content = (function () {
/* 000615 */ 			var __accu0__ = self;
/* 000617 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, __getitem__ (self.heading_tags_by_level, heading_level), (function () {
/* 000617 */ 				var __accu1__ = self;
/* 000617 */ 				return __call__ (__accu1__.render_inline_content, __accu1__, heading_nodelist, render_context);
/* 000617 */ 			}) (), __kwargtrans__ ({class_names: annot, attrs: attrs}));
/* 000617 */ 		}) ();
/* 000621 */ 		if (__t__ (__t__ (inline_heading) && self.inline_heading_add_space)) {
/* 000622 */ 			var content = __call__ (__iadd__, null, content, ' ');
/* 000622 */ 		}
/* 000623 */ 		// pass;
/* 000627 */ 		return content;
/* 000627 */ 	});},
/* 000629 */ 	get render_link () {return __get__ (this, function (self, ref_type, href, display_nodelist, render_context, annotations) {
/* 000629 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000629 */ 			var annotations = null;
/* 000629 */ 		};
/* 000629 */ 		if (arguments.length) {
/* 000629 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000629 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000629 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000629 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000629 */ 					switch (__attrib0__) {
/* 000629 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000629 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000629 */ 						case 'href': var href = __allkwargs0__ [__attrib0__]; break;
/* 000629 */ 						case 'display_nodelist': var display_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000629 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000629 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000629 */ 					}
/* 000629 */ 				}
/* 000629 */ 			}
/* 000629 */ 		}
/* 000629 */ 		else {
/* 000629 */ 		}
/* 000630 */ 		var display_content = (function () {
/* 000630 */ 			var __accu0__ = self;
/* 000630 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, display_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000630 */ 		}) ();
/* 000635 */ 		if (__t__ (__t__ (!__t__ ((href))) && !__t__ ((self.render_links_with_empty_href)))) {
/* 000636 */ 			return display_content;
/* 000636 */ 		}
/* 000638 */ 		var data_attrs = (function () {
/* 000638 */ 			var __accu0__ = self;
/* 000638 */ 			return __call__ (__accu0__._get_meta_info_data_attrs, __accu0__, display_nodelist, 'link', render_context);
/* 000638 */ 		}) ();
/* 000640 */ 		return (function () {
/* 000640 */ 			var __accu0__ = self;
/* 000640 */ 			return __call__ (__accu0__.wrap_in_link, __accu0__, display_content, href, __kwargtrans__ ({class_names: __add__ (['href-{}'.format (ref_type)], (__t__ (annotations) ? annotations : [])), attrs: data_attrs}));
/* 000640 */ 		}) ();
/* 000640 */ 	});},
/* 000647 */ 	get render_annotation_comment () {return __get__ (this, function (self, display_nodelist, render_context, is_block_level, color_index, initials) {
/* 000647 */ 		if (typeof is_block_level == 'undefined' || (is_block_level != null && is_block_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000647 */ 			var is_block_level = false;
/* 000647 */ 		};
/* 000647 */ 		if (typeof color_index == 'undefined' || (color_index != null && color_index.hasOwnProperty ("__kwargtrans__"))) {;
/* 000647 */ 			var color_index = 0;
/* 000647 */ 		};
/* 000647 */ 		if (typeof initials == 'undefined' || (initials != null && initials.hasOwnProperty ("__kwargtrans__"))) {;
/* 000647 */ 			var initials = null;
/* 000647 */ 		};
/* 000647 */ 		if (arguments.length) {
/* 000647 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000647 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000647 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000647 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000647 */ 					switch (__attrib0__) {
/* 000647 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000647 */ 						case 'display_nodelist': var display_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000647 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000647 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000647 */ 						case 'color_index': var color_index = __allkwargs0__ [__attrib0__]; break;
/* 000647 */ 						case 'initials': var initials = __allkwargs0__ [__attrib0__]; break;
/* 000647 */ 					}
/* 000647 */ 				}
/* 000647 */ 			}
/* 000647 */ 		}
/* 000647 */ 		else {
/* 000647 */ 		}
/* 000655 */ 		var content = (function () {
/* 000655 */ 			var __accu0__ = self;
/* 000655 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, display_nodelist, render_context);
/* 000655 */ 		}) ();
/* 000656 */ 		if (__t__ (initials)) {
/* 000657 */ 			var content = __add__ (__add__ (__add__ ('<span class="annotation-initials">', initials), '</span>'), content);
/* 000657 */ 		}
/* 000659 */ 		var data_attrs = (function () {
/* 000659 */ 			var __accu0__ = self;
/* 000659 */ 			return __call__ (__accu0__._get_meta_info_data_attrs, __accu0__, display_nodelist, 'annotation-comment', render_context);
/* 000659 */ 		}) ();
/* 000662 */ 		return (function () {
/* 000662 */ 			var __accu0__ = self;
/* 000662 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, (__t__ (is_block_level) ? 'div' : 'span'), content, __kwargtrans__ ({class_names: ['annotation', 'annotation-comment', 'annotation-{}'.format (color_index)], attrs: data_attrs}));
/* 000662 */ 		}) ();
/* 000662 */ 	});},
/* 000672 */ 	get render_annotation_highlight () {return __get__ (this, function (self, display_nodelist, render_context, is_block_level, color_index, initials) {
/* 000672 */ 		if (typeof is_block_level == 'undefined' || (is_block_level != null && is_block_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000672 */ 			var is_block_level = false;
/* 000672 */ 		};
/* 000672 */ 		if (typeof color_index == 'undefined' || (color_index != null && color_index.hasOwnProperty ("__kwargtrans__"))) {;
/* 000672 */ 			var color_index = 0;
/* 000672 */ 		};
/* 000672 */ 		if (typeof initials == 'undefined' || (initials != null && initials.hasOwnProperty ("__kwargtrans__"))) {;
/* 000672 */ 			var initials = null;
/* 000672 */ 		};
/* 000672 */ 		if (arguments.length) {
/* 000672 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000672 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000672 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000672 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000672 */ 					switch (__attrib0__) {
/* 000672 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000672 */ 						case 'display_nodelist': var display_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000672 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000672 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000672 */ 						case 'color_index': var color_index = __allkwargs0__ [__attrib0__]; break;
/* 000672 */ 						case 'initials': var initials = __allkwargs0__ [__attrib0__]; break;
/* 000672 */ 					}
/* 000672 */ 				}
/* 000672 */ 			}
/* 000672 */ 		}
/* 000672 */ 		else {
/* 000672 */ 		}
/* 000680 */ 		var content = (function () {
/* 000680 */ 			var __accu0__ = self;
/* 000680 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, display_nodelist, render_context);
/* 000680 */ 		}) ();
/* 000681 */ 		if (__t__ (initials)) {
/* 000682 */ 			var content = __add__ (__add__ (__add__ ('<span class="annotation-initials">', initials), '</span>'), content);
/* 000682 */ 		}
/* 000684 */ 		var data_attrs = (function () {
/* 000684 */ 			var __accu0__ = self;
/* 000684 */ 			return __call__ (__accu0__._get_meta_info_data_attrs, __accu0__, display_nodelist, 'annotation-highlight', render_context);
/* 000684 */ 		}) ();
/* 000687 */ 		return (function () {
/* 000687 */ 			var __accu0__ = self;
/* 000687 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, (__t__ (is_block_level) ? 'div' : 'span'), content, __kwargtrans__ ({class_names: ['annotation', 'annotation-highlight', 'annotation-{}'.format (color_index)], attrs: data_attrs}));
/* 000687 */ 		}) ();
/* 000687 */ 	});},
/* 000698 */ 	get render_delayed_marker () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000698 */ 		if (arguments.length) {
/* 000698 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000698 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000698 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000698 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000698 */ 					switch (__attrib0__) {
/* 000698 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000698 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000698 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000698 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000698 */ 					}
/* 000698 */ 				}
/* 000698 */ 			}
/* 000698 */ 		}
/* 000698 */ 		else {
/* 000698 */ 		}
/* 000699 */ 		return '<FLM:DLYD:{}/>'.format (delayed_key);
/* 000699 */ 	});},
/* 000701 */ 	get render_delayed_dummy_placeholder () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000701 */ 		if (arguments.length) {
/* 000701 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000701 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000701 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000701 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000701 */ 					switch (__attrib0__) {
/* 000701 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000701 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000701 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000701 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000701 */ 					}
/* 000701 */ 				}
/* 000701 */ 			}
/* 000701 */ 		}
/* 000701 */ 		else {
/* 000701 */ 		}
/* 000702 */ 		return '<!-- delayed:{} -->'.format (delayed_key);
/* 000702 */ 	});},
/* 000704 */ 	get replace_delayed_markers_with_final_values () {return __get__ (this, function (self, content, delayed_values) {
/* 000704 */ 		if (arguments.length) {
/* 000704 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000704 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000704 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000704 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000704 */ 					switch (__attrib0__) {
/* 000704 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000704 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000704 */ 						case 'delayed_values': var delayed_values = __allkwargs0__ [__attrib0__]; break;
/* 000704 */ 					}
/* 000704 */ 				}
/* 000704 */ 			}
/* 000704 */ 		}
/* 000704 */ 		else {
/* 000704 */ 		}
/* 000705 */ 		return (function () {
/* 000705 */ 			var __accu0__ = _rx_delayed_markers;
/* 000705 */ 			return __call__ (__accu0__.sub, __accu0__, (function __lambda__ (m) {
/* 000705 */ 				if (arguments.length) {
/* 000705 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000705 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000705 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000705 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000705 */ 							switch (__attrib0__) {
/* 000705 */ 								case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000705 */ 							}
/* 000705 */ 						}
/* 000705 */ 					}
/* 000705 */ 				}
/* 000705 */ 				else {
/* 000705 */ 				}
/* 000706 */ 				return __getitem__ (delayed_values, __call__ (int, null, (function () {
/* 000706 */ 					var __accu1__ = m;
/* 000706 */ 					return __call__ (__accu1__.group, __accu1__, 'key');
/* 000706 */ 				}) ()));
/* 000706 */ 			}), content);
/* 000706 */ 		}) ();
/* 000706 */ 	});},
/* 000713 */ 	float_caption_title_separator: ': ',
/* 000715 */ 	get render_float () {return __get__ (this, function (self, float_instance, render_context) {
/* 000715 */ 		if (arguments.length) {
/* 000715 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000715 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000715 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000715 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000715 */ 					switch (__attrib0__) {
/* 000715 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000715 */ 						case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000715 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000715 */ 					}
/* 000715 */ 				}
/* 000715 */ 			}
/* 000715 */ 		}
/* 000715 */ 		else {
/* 000715 */ 		}
/* 000718 */ 		var figattrs = dict ({});
/* 000720 */ 		if (__t__ (float_instance.target_id !== null)) {
/* 000721 */ 			__setitem__ (figattrs, 'id', float_instance.target_id);
/* 000721 */ 		}
/* 000723 */ 		var full_figcaption_rendered_list = [];
/* 000724 */ 		if (__t__ (float_instance.counter_value !== null)) {
/* 000726 */ 			(function () {
/* 000726 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000727 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000727 */ 					var __accu1__ = self;
/* 000729 */ 					return __call__ (__accu1__.wrap_in_tag, __accu1__, 'span', (function () {
/* 000729 */ 						var __accu2__ = self;
/* 000730 */ 						return __call__ (__accu2__.render_join, __accu2__, [(function () {
/* 000730 */ 							var __accu3__ = self;
/* 000730 */ 							return __call__ (__accu3__.render_value, __accu3__, float_instance.float_type_info.float_caption_name, render_context);
/* 000735 */ 						}) (), '&nbsp;', (function () {
/* 000735 */ 							var __accu3__ = self;
/* 000735 */ 							return __call__ (__accu3__.render_nodelist, __accu3__, float_instance.formatted_counter_value_flm.nodes, __kwargtrans__ ({render_context: render_context}));
/* 000735 */ 						}) ()], render_context);
/* 000735 */ 					}) (), __kwargtrans__ ({class_names: ['float-number']}));
/* 000735 */ 				}) ());
/* 000735 */ 			}) ();
/* 000735 */ 		}
/* 000743 */ 		else if (__t__ (float_instance.caption_nodelist)) {
/* 000746 */ 			(function () {
/* 000746 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000747 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000747 */ 					var __accu1__ = self;
/* 000749 */ 					return __call__ (__accu1__.wrap_in_tag, __accu1__, 'span', (function () {
/* 000749 */ 						var __accu2__ = self;
/* 000750 */ 						return __call__ (__accu2__.render_join, __accu2__, [(function () {
/* 000750 */ 							var __accu3__ = self;
/* 000750 */ 							return __call__ (__accu3__.render_value, __accu3__, float_instance.float_type_info.float_caption_name, render_context);
/* 000750 */ 						}) ()], render_context);
/* 000750 */ 					}) (), __kwargtrans__ ({class_names: ['float-no-number']}));
/* 000750 */ 				}) ());
/* 000750 */ 			}) ();
/* 000750 */ 		}
/* 000756 */ 		else {
/* 000760 */ 			// pass;
/* 000760 */ 		}
/* 000762 */ 		if (__t__ (float_instance.caption_nodelist)) {
/* 000766 */ 			(function () {
/* 000766 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000766 */ 				return __call__ (__accu0__.append, __accu0__, self.float_caption_title_separator);
/* 000766 */ 			}) ();
/* 000771 */ 			(function () {
/* 000771 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000772 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000772 */ 					var __accu1__ = self;
/* 000772 */ 					return __call__ (__accu1__.render_nodelist, __accu1__, float_instance.caption_nodelist, __kwargtrans__ ({render_context: render_context}));
/* 000772 */ 				}) ());
/* 000772 */ 			}) ();
/* 000772 */ 		}
/* 000778 */ 		var rendered_float_caption = null;
/* 000779 */ 		if (__t__ (full_figcaption_rendered_list)) {
/* 000780 */ 			var rendered_float_caption = (function () {
/* 000780 */ 				var __accu0__ = self;
/* 000782 */ 				return __call__ (__accu0__.wrap_in_tag, __accu0__, 'figcaption', (function () {
/* 000782 */ 					var __accu1__ = self;
/* 000784 */ 					return __call__ (__accu1__.wrap_in_tag, __accu1__, 'span', (function () {
/* 000784 */ 						var __accu2__ = self;
/* 000784 */ 						return __call__ (__accu2__.render_join, __accu2__, full_figcaption_rendered_list, render_context);
/* 000784 */ 					}) ());
/* 000784 */ 				}) (), __kwargtrans__ ({class_names: ['float-caption-content']}));
/* 000784 */ 			}) ();
/* 000784 */ 		}
/* 000789 */ 		var float_content_block_content = (function () {
/* 000789 */ 			var __accu0__ = self;
/* 000789 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, float_instance.content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: true}));
/* 000789 */ 		}) ();
/* 000794 */ 		var float_content_block = (function () {
/* 000794 */ 			var __accu0__ = self;
/* 000794 */ 			return __call__ (__accu0__.render_semantic_block, __accu0__, float_content_block_content, 'float-contents', __kwargtrans__ ({render_context: render_context}));
/* 000794 */ 		}) ();
/* 000800 */ 		if (__t__ (rendered_float_caption !== null)) {
/* 000801 */ 			var float_content_with_caption = (function () {
/* 000801 */ 				var __accu0__ = self;
/* 000801 */ 				return __call__ (__accu0__.render_join_blocks, __accu0__, [float_content_block, rendered_float_caption], render_context);
/* 000801 */ 			}) ();
/* 000801 */ 		}
/* 000805 */ 		else {
/* 000806 */ 			var float_content_with_caption = float_content_block;
/* 000806 */ 		}
/* 000808 */ 		(function () {
/* 000808 */ 			var __accu0__ = self;
/* 000808 */ 			return __call__ (__accu0__._merge_meta_info_data_attrs, __accu0__, figattrs, float_instance.content_nodelist, 'float', render_context);
/* 000808 */ 		}) ();
/* 000811 */ 		var full_figure = (function () {
/* 000811 */ 			var __accu0__ = self;
/* 000811 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'figure', float_content_with_caption, __kwargtrans__ ({attrs: figattrs, class_names: ['float', 'float-{}'.format (float_instance.float_type)]}));
/* 000811 */ 		}) ();
/* 000818 */ 		return full_figure;
/* 000818 */ 	});},
/* 000821 */ 	graphics_raster_magnification: 1,
/* 000822 */ 	graphics_vector_magnification: 1,
/* 000824 */ 	get render_graphics_block () {return __get__ (this, function (self, graphics_resource, render_context) {
/* 000824 */ 		if (arguments.length) {
/* 000824 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000824 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000824 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000824 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000824 */ 					switch (__attrib0__) {
/* 000824 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000824 */ 						case 'graphics_resource': var graphics_resource = __allkwargs0__ [__attrib0__]; break;
/* 000824 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000824 */ 					}
/* 000824 */ 				}
/* 000824 */ 			}
/* 000824 */ 		}
/* 000824 */ 		else {
/* 000824 */ 		}
/* 000826 */ 		var imgattrs = dict ({});
/* 000828 */ 		var styparts = [];
/* 000829 */ 		if (__t__ (graphics_resource.physical_dimensions !== null)) {
/* 000831 */ 			var __left0__ = graphics_resource.physical_dimensions;
/* 000831 */ 			var width_pt = __left0__ [0];
/* 000831 */ 			var height_pt = __left0__ [1];
/* 000833 */ 			if (__t__ (__eq__ (graphics_resource.graphics_type, 'raster'))) {
/* 000834 */ 				if (__t__ (width_pt !== null)) {
/* 000835 */ 					var width_pt = __call__ (__imul__, null, width_pt, self.graphics_raster_magnification);
/* 000835 */ 				}
/* 000836 */ 				if (__t__ (height_pt !== null)) {
/* 000837 */ 					var height_pt = __call__ (__imul__, null, height_pt, self.graphics_raster_magnification);
/* 000837 */ 				}
/* 000837 */ 			}
/* 000838 */ 			else if (__t__ (__eq__ (graphics_resource.graphics_type, 'vector'))) {
/* 000839 */ 				if (__t__ (width_pt !== null)) {
/* 000840 */ 					var width_pt = __call__ (__imul__, null, width_pt, self.graphics_vector_magnification);
/* 000840 */ 				}
/* 000841 */ 				if (__t__ (height_pt !== null)) {
/* 000842 */ 					var height_pt = __call__ (__imul__, null, height_pt, self.graphics_vector_magnification);
/* 000842 */ 				}
/* 000842 */ 			}
/* 000844 */ 			if (__t__ (width_pt !== null)) {
/* 000845 */ 				(function () {
/* 000845 */ 					var __accu0__ = styparts;
/* 000845 */ 					return __call__ (__accu0__.append, __accu0__, 'width:{}pt'.format (width_pt));
/* 000845 */ 				}) ();
/* 000845 */ 			}
/* 000846 */ 			if (__t__ (height_pt !== null)) {
/* 000847 */ 				(function () {
/* 000847 */ 					var __accu0__ = styparts;
/* 000847 */ 					return __call__ (__accu0__.append, __accu0__, 'height:{}pt'.format (height_pt));
/* 000847 */ 				}) ();
/* 000847 */ 			}
/* 000847 */ 		}
/* 000849 */ 		if (__t__ (styparts)) {
/* 000850 */ 			__setitem__ (imgattrs, 'style', (function () {
/* 000850 */ 				var __accu0__ = ';';
/* 000850 */ 				return __call__ (__accu0__.join, __accu0__, styparts);
/* 000850 */ 			}) ());
/* 000850 */ 		}
/* 000852 */ 		var src_url = graphics_resource.src_url;
/* 000853 */ 		__setitem__ (imgattrs, 'src', src_url);
/* 000856 */ 		if (__t__ (__t__ (graphics_resource.srcset !== null) && __t__ (graphics_resource.srcset) && __call__ (len, null, graphics_resource.srcset))) {
/* 000858 */ 			var srcset_items = [];
/* 000859 */ 			var __iterable0__ = graphics_resource.srcset;
/* 000859 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000859 */ 				var srcset_info = __getitem__ (__iterable0__, __index0__);
/* 000860 */ 				var ss = __getitem__ (srcset_info, 'source');
/* 000861 */ 				if (__t__ (__in__ ('pixel_density', srcset_info))) {
/* 000862 */ 					var pixel_density = __getitem__ (srcset_info, 'pixel_density');
/* 000863 */ 					var ss = __call__ (__iadd__, null, ss, ' {}x'.format (pixel_density));
/* 000863 */ 				}
/* 000865 */ 				(function () {
/* 000865 */ 					var __accu0__ = srcset_items;
/* 000865 */ 					return __call__ (__accu0__.append, __accu0__, ss);
/* 000865 */ 				}) ();
/* 000865 */ 			}
/* 000867 */ 			__setitem__ (imgattrs, 'srcset', (function () {
/* 000867 */ 				var __accu0__ = ', ';
/* 000867 */ 				return __call__ (__accu0__.join, __accu0__, srcset_items);
/* 000867 */ 			}) ());
/* 000867 */ 		}
/* 000870 */ 		return (function () {
/* 000870 */ 			var __accu0__ = self;
/* 000870 */ 			return __call__ (__accu0__.generate_open_tag, __accu0__, 'img', __kwargtrans__ ({attrs: imgattrs}));
/* 000870 */ 		}) ();
/* 000870 */ 	});},
/* 000873 */ 	get render_cells () {return __get__ (this, function (self, cells_model, render_context, target_id) {
/* 000873 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000873 */ 			var target_id = null;
/* 000873 */ 		};
/* 000873 */ 		if (arguments.length) {
/* 000873 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000873 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000873 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000873 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000873 */ 					switch (__attrib0__) {
/* 000873 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000873 */ 						case 'cells_model': var cells_model = __allkwargs0__ [__attrib0__]; break;
/* 000873 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000873 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000873 */ 					}
/* 000873 */ 				}
/* 000873 */ 			}
/* 000873 */ 		}
/* 000873 */ 		else {
/* 000873 */ 		}
/* 000875 */ 		var __left0__ = tuple ([__call__ (len, null, cells_model.grid_data), __call__ (len, null, __getitem__ (cells_model.grid_data, 0))]);
/* 000875 */ 		var tabheight = __left0__ [0];
/* 000875 */ 		var tabwidth = __left0__ [1];
/* 000877 */ 		var data_items = [];
/* 000878 */ 		var row_j = 0;
/* 000879 */ 		while (__t__ (__lt__ (row_j, __call__ (len, null, cells_model.grid_data)))) {
/* 000880 */ 			var row_items = [];
/* 000881 */ 			var col_j = 0;
/* 000882 */ 			while (__t__ (__lt__ (col_j, __call__ (len, null, __getitem__ (cells_model.grid_data, row_j))))) {
/* 000884 */ 				var grid_cell_data = __getitem__ (__getitem__ (cells_model.grid_data, row_j), col_j);
/* 000886 */ 				if (__t__ (__t__ (grid_cell_data === null) || __getitem__ (grid_cell_data, 'cell') === null)) {
/* 000889 */ 					var clsnames = [];
/* 000890 */ 					if (__t__ (__eq__ (row_j, 0))) {
/* 000891 */ 						(function () {
/* 000891 */ 							var __accu0__ = clsnames;
/* 000891 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-top');
/* 000891 */ 						}) ();
/* 000891 */ 					}
/* 000892 */ 					if (__t__ (__eq__ (col_j, 0))) {
/* 000893 */ 						(function () {
/* 000893 */ 							var __accu0__ = clsnames;
/* 000893 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-left');
/* 000893 */ 						}) ();
/* 000893 */ 					}
/* 000894 */ 					if (__t__ (__eq__ (row_j, __sub__ (tabheight, 1)))) {
/* 000895 */ 						(function () {
/* 000895 */ 							var __accu0__ = clsnames;
/* 000895 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-bottom');
/* 000895 */ 						}) ();
/* 000895 */ 					}
/* 000896 */ 					if (__t__ (__eq__ (col_j, __sub__ (tabwidth, 1)))) {
/* 000897 */ 						(function () {
/* 000897 */ 							var __accu0__ = clsnames;
/* 000897 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-right');
/* 000897 */ 						}) ();
/* 000897 */ 					}
/* 000898 */ 					(function () {
/* 000898 */ 						var __accu0__ = row_items;
/* 000898 */ 						return __call__ (__accu0__.append, __accu0__, (function () {
/* 000898 */ 							var __accu1__ = self;
/* 000898 */ 							return __call__ (__accu1__.wrap_in_tag, __accu1__, 'td', '', __kwargtrans__ ({class_names: __add__ (['cell-empty'], clsnames)}));
/* 000898 */ 						}) ());
/* 000898 */ 					}) ();
/* 000903 */ 					var col_j = __call__ (__iadd__, null, col_j, 1);
/* 000903 */ 					continue;
/* 000903 */ 				}
/* 000906 */ 				if (__t__ (__getitem__ (grid_cell_data, 'is_topleft'))) {
/* 000908 */ 					var cell = __getitem__ (grid_cell_data, 'cell');
/* 000909 */ 					var rendered_cell_contents = (function () {
/* 000909 */ 						var __accu0__ = self;
/* 000909 */ 						return __call__ (__accu0__.render_nodelist, __accu0__, cell.content_nodes, __kwargtrans__ ({render_context: render_context}));
/* 000909 */ 					}) ();
/* 000913 */ 					var clsnames = __add__ (['cell'], (function () {
/* 000913 */ 						var __accu0__ = [];
/* 000913 */ 						var __iterable0__ = cell.styles;
/* 000913 */ 						for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000913 */ 							var sty = __getitem__ (__iterable0__, __index0__);
/* 000913 */ 							(function () {
/* 000913 */ 								var __accu1__ = __accu0__;
/* 000913 */ 								return __call__ (__accu1__.append, __accu1__, 'cellstyle-{}'.format (sty));
/* 000913 */ 							}) ();
/* 000913 */ 						}
/* 000913 */ 						return __accu0__;
/* 000913 */ 					}) ());
/* 000914 */ 					if (__t__ (__eq__ (row_j, 0))) {
/* 000915 */ 						(function () {
/* 000915 */ 							var __accu0__ = clsnames;
/* 000915 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-top');
/* 000915 */ 						}) ();
/* 000915 */ 					}
/* 000916 */ 					if (__t__ (__eq__ (col_j, 0))) {
/* 000917 */ 						(function () {
/* 000917 */ 							var __accu0__ = clsnames;
/* 000917 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-left');
/* 000917 */ 						}) ();
/* 000917 */ 					}
/* 000918 */ 					if (__t__ (__eq__ (cell.placement.row_range.end, tabheight))) {
/* 000919 */ 						(function () {
/* 000919 */ 							var __accu0__ = clsnames;
/* 000919 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-bottom');
/* 000919 */ 						}) ();
/* 000919 */ 					}
/* 000920 */ 					if (__t__ (__eq__ (cell.placement.col_range.end, tabwidth))) {
/* 000921 */ 						(function () {
/* 000921 */ 							var __accu0__ = clsnames;
/* 000921 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-right');
/* 000921 */ 						}) ();
/* 000921 */ 					}
/* 000922 */ 					var tagname = 'td';
/* 000923 */ 					if (__t__ (__t__ (__in__ ('H', cell.styles)) || __in__ ('rH', cell.styles))) {
/* 000924 */ 						var tagname = 'th';
/* 000924 */ 					}
/* 000925 */ 					var attrs = dict ({});
/* 000926 */ 					var cplc = cell.placement;
/* 000927 */ 					if (__t__ (__ne__ (cplc.col_range.end, __add__ (cplc.col_range.start, 1)))) {
/* 000930 */ 						__setitem__ (attrs, 'colspan', __call__ (str, null, __sub__ (cplc.col_range.end, cplc.col_range.start)));
/* 000930 */ 					}
/* 000931 */ 					if (__t__ (__ne__ (cplc.row_range.end, __add__ (cplc.row_range.start, 1)))) {
/* 000933 */ 						__setitem__ (attrs, 'rowspan', __call__ (str, null, __sub__ (cplc.row_range.end, cplc.row_range.start)));
/* 000933 */ 					}
/* 000934 */ 					(function () {
/* 000934 */ 						var __accu0__ = row_items;
/* 000935 */ 						return __call__ (__accu0__.append, __accu0__, (function () {
/* 000935 */ 							var __accu1__ = self;
/* 000935 */ 							return __call__ (__accu1__.wrap_in_tag, __accu1__, tagname, rendered_cell_contents, __kwargtrans__ ({attrs: attrs, class_names: clsnames}));
/* 000935 */ 						}) ());
/* 000935 */ 					}) ();
/* 000942 */ 					var col_j = cplc.col_range.end;
/* 000942 */ 					continue;
/* 000942 */ 				}
/* 000947 */ 				var col_j = __call__ (__iadd__, null, col_j, 1);
/* 000947 */ 			}
/* 000949 */ 			(function () {
/* 000949 */ 				var __accu0__ = data_items;
/* 000949 */ 				return __call__ (__accu0__.append, __accu0__, row_items);
/* 000949 */ 			}) ();
/* 000950 */ 			var row_j = __call__ (__iadd__, null, row_j, 1);
/* 000950 */ 		}
/* 000952 */ 		var table_attrs = dict ({});
/* 000953 */ 		if (__t__ (target_id !== null)) {
/* 000954 */ 			__setitem__ (table_attrs, 'id', target_id);
/* 000954 */ 		}
/* 000956 */ 		if (__t__ (__call__ (len, null, cells_model.cells_data))) {
/* 000957 */ 			var first_cell_nodes = __getitem__ (cells_model.cells_data, 0).content_nodes;
/* 000958 */ 			(function () {
/* 000958 */ 				var __accu0__ = self;
/* 000958 */ 				return __call__ (__accu0__._merge_meta_info_data_attrs, __accu0__, table_attrs, first_cell_nodes, 'cells', render_context);
/* 000958 */ 			}) ();
/* 000958 */ 		}
/* 000961 */ 		var s = (function () {
/* 000961 */ 			var __accu0__ = self;
/* 000963 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'table', (function () {
/* 000963 */ 				var __accu1__ = '';
/* 000963 */ 				return __call__ (__accu1__.join, __accu1__, (function () {
/* 000963 */ 					var __accu2__ = [];
/* 000963 */ 					var __iterable0__ = data_items;
/* 000963 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000965 */ 						var row_items = __getitem__ (__iterable0__, __index0__);
/* 000965 */ 						(function () {
/* 000965 */ 							var __accu3__ = __accu2__;
/* 000964 */ 							return __call__ (__accu3__.append, __accu3__, __add__ (__add__ ('<tr>', (function () {
/* 000964 */ 								var __accu4__ = '';
/* 000964 */ 								return __call__ (__accu4__.join, __accu4__, row_items);
/* 000964 */ 							}) ()), '</tr>'));
/* 000964 */ 						}) ();
/* 000964 */ 					}
/* 000964 */ 					return __accu2__;
/* 000964 */ 				}) ());
/* 000964 */ 			}) (), __kwargtrans__ ({attrs: table_attrs, class_names: ['cells']}));
/* 000964 */ 		}) ();
/* 000970 */ 		return s;
/* 000970 */ 	});}
/* 000970 */ });
/* 000976 */ export var _rx_delayed_markers = (function () {
/* 000976 */ 	var __accu0__ = re;
/* 000976 */ 	return __call__ (__accu0__.compile, __accu0__, '<FLM:DLYD:(?P<key>\\d+)\\s*/>');
/* 000976 */ }) ();
/* 000983 */ export var _html_css_global = '\np, ul, ol, .p-block {\n  margin: 1em 0px;\n}\np:first-child, ul:first-child, ol:first-child, .p-block:first-child {\n  margin-top: 0px;\n}\np:last-child, ul:last-child, ol:last-child, .p-block:last-child {\n  margin-bottom: 0px;\n}\ndd > p, dd > p:first-child, dd > p:last-child {\n  margin: 0.33em 0px;\n}\n\na, a:link, a:hover, a:active, a:visited {\n  color: #3232c8;\n  text-decoration: none;\n}\na:hover {\n  color: #22228a;\n}\n';
/* 001006 */ export var _html_css_content = "\n.emph, .textit {\n  font-style: italic;\n}\n.textbf {\n  font-weight: bold;\n}\n\nh1 {\n  font-size: 1.6rem;\n  line-height: 1.3em;\n  font-weight: bold;\n  margin: 1em 0px;\n}\nh2 {\n  font-size: 1.3rem;\n  line-height: 1.3em;\n  font-weight: bold;\n  margin: 1em 0px;\n}\nh3 {\n  font-size: 1rem;\n  font-weight: bold;\n  margin: 1em 0px;\n}\n\n.heading-level-4 {\n  font-style: italic;\n  display: inline;\n}\n.heading-level-4::after {\n  display: inline-block;\n  margin: 0px .12em;\n  content: '—';\n}\n\n.heading-level-5 {\n  font-style: italic;\n  font-size: .9em;\n  display: inline;\n}\n.heading-level-5::after {\n  display: inline-block;\n  margin-right: .12em;\n  content: '';\n}\n\n.heading-level-6 {\n  font-style: italic;\n  font-size: .8em;\n  display: inline;\n}\n.heading-level-6::after {\n  display: inline-block;\n  margin-right: .06em;\n  content: '';\n}\n\n\n.heading-level-theorem {\n  font-weight: bold;\n}\n.heading-level-theorem::after {\n  font-weight: bold;\n  display: inline-block;\n  margin: 0px .12em 0px 0px;\n  content: '.';\n}\n\ndiv.prooflike > p > .heading-level-theorem,\ndiv.prooflike > p > .heading-level-theorem::after {\n  font-weight: normal;\n  font-style: italic;\n}\n\n\ndl.enumeration {\n  display: block;\n  margin-left: 2.5em;\n}\ndl.enumeration > dt {\n  float: left;\n  clear: left;\n  display: inline-block;\n  /*margin: 0px; */\n  margin-left: -2.5em;\n  min-width: 2.0em;\n  /* messes up wide labels, e.g. in {description} items: */\n  /* width: 2.0em;  max-width: 2.0em;*/\n  margin-right: 0.5em;\n  text-align: right;\n}\ndl.enumeration > dd {\n  /*display: inline-block;\n  width: 100%;*/\n  border: 0px;\n  padding: 0px;\n  margin: 0px;\n}\n\nfigure.float {\n  width: 100%;\n  border-width: 1px 0px 1px 0px;\n  border-style: solid none solid none;\n  border-color: rgba(120, 120, 140, 0.15);\n  margin: 0.5rem 0px;\n  padding: 0.5rem 0px;\n}\n\nfigure.float .float-contents {\n  width: 100%;\n  max-width: 100%;\n  overflow-x: auto;\n}\n\nfigure.float .float-contents img {\n  display: block;\n  margin: 0pt auto;\n  padding: 0pt;\n  border: 0pt;\n  margin: 0px auto;\n}\n\nfigure.float figcaption {\n  display: block;\n  margin-top: 0.5em;\n  margin: 0.75em 2em 0px;\n  text-align: center;\n}\n\nfigure.float figcaption > span {\n  display: inline-block;\n  font-style: italic;\n  text-align: left;\n}\n\ntable {\n  margin: 1em 0px 1em 0px;\n  border-collapse: separate;\n  border-spacing: 0px;\n  /*border-top: solid 1pt;\n  border-bottom: solid 1pt;*/\n}\nfigure.float .float-contents table {\n  margin: 0px auto;\n}\ntd {\n  padding: 0.3em 0.5em;\n  border: none 0px;\n}\nth {\n  padding: 0.3em 0.5em;\n  border: none 0px;\n}\n.cellstyle-H {\n  border-bottom: solid .5pt;\n}\n.cellstyle-rH {\n}\n.cellstyle-l {\n  text-align: left;\n}\n.cellstyle-c {\n  text-align: center;\n}\n.cellstyle-r {\n  text-align: right;\n}\n.cellstyle-green {\n  background-color: rgba(69, 255, 69, 0.31); /*rgb(200,255,200);*/\n}\n.cellstyle-blue {\n  background-color: rgba(79, 142, 255, 0.27); /*rgb(200,220,255);*/\n}\n.cellstyle-yellow {\n  background-color: rgba(255, 255, 49, 0.33); /*rgb(255,255,200);*/\n}\n.cellstyle-red {\n  background-color: rgba(255,120,120,0.30);  /*rgb(255,200,200);*/\n}\n.cellstyle-lvert {\n  border-left: solid .5pt;\n}\n.cellstyle-rvert {\n  border-right: solid .5pt;\n}\n\n.celltbledge-top {\n  border-top: solid 1pt;\n}\n.celltbledge-bottom {\n  border-bottom: solid 1pt;\n}\n\n.verbatimcode {\n  font-family: monospace;\n  font-size: 0.9em;\n  background-color: rgba(127,127,127,0.25);\n  border-radius: 2px;\n  padding: 1px 2px;\n  display: inline-block;\n  white-space: pre-wrap;\n}\n.verbatima {\n  font-style: italic;\n}\n.verbatimcode-environment {\n  display: block;\n  margin: 0.75em 0px 1em;\n  white-space: pre;\n}\n\n.defterm {\n  font-style: italic;\n  margin: 1em 0px;\n}\n.defterm:first-child {\n  margin-top: 0px;\n}\n.defterm:last-child {\n  margin-bottom: 0px;\n}\n\n.defterm .defterm-term, .defterm .term-in-defining-defterm {\n  font-style: italic;\n  font-weight: bold;\n}\n\n.display-math {\n  width: 100%;\n  max-width: 100%;\n  display: block;\n  overflow-x: auto;\n}\n\n.endnote {\n}\n.citation {\n}\n.footnote {\n}\n.endnote-marks, .citation-marks {\n  font-size: 0.8em;\n  display: inline-block;\n  vertical-align: 0.3em;\n  margin-top: -0.3em;\n}\ndl.citation-list > dt, dl.footnote-list > dt {\n  font-size: 0.8em;\n  display: inline-block;\n  vertical-align: 0.3em;\n  margin-top: -0.3em;\n}\n\n.annotation {\n  color: var(--annotation-color);\n}\n.annotation-comment {\n  padding: 3pt 0px;\n  font-weight: 600;\n  font-family: sans-serif;\n}\n.annotation-comment::before {\n  content: '['\n}\n.annotation-comment::after {\n  content: ']'\n}\n.annotation-initials {\n  display: inline-block;\n  margin-right: 0.3em;\n  font-family: sans-serif;\n  font-size: .8em;\n  font-weight: normal;\n  font-style: normal;\n  line-height: .9;\n  padding: .5pt;\n  border: solid .4pt var(--annotation-color);\n  border-radius: 2pt;\n\n  float: right;\n  margin-right: -4em;\n}\n.annotation-0 {\n  --annotation-color: rgb(148,7,24); /* dark red / burgundy */\n}\n.annotation-1 {\n  --annotation-color: rgb(0,148,240); /* blue-y */\n}\n.annotation-2 {\n  --annotation-color: rgb(242,108,13); /* orange-brown-y */\n}\n.annotation-3 {\n  --annotation-color: rgb(65,149,42); /* green-y */\n}\n.annotation-4 {\n  --annotation-color: rgb(128,55,134); /* purple-y */\n}\n.annotation-5 {\n  --annotation-color: rgb(0,129,129); /* blue-green-y */\n}\n.annotation-6 {\n  --annotation-color: rgb(160,120,0); /* brownish */\n}\n.annotation-7 {\n  --annotation-color: rgb(35,195,155); /* aqua-ish */\n}\n\n\n.quote, .address, .blockquote {\n  margin: 1em 0;\n}\n.quote {\n  background: rgba(120, 140, 150, 0.15);\n  padding: 1em 3em;\n}\n.quote .quote-lines,\n.quote .quote-text {\n  font-style: italic;\n  margin: 0.5em 0;\n}\n.quote .quote-lines + .quote-lines {\n  margin-top: 1em;\n}\n.quote .quote-lines .quote-lines-indent {\n  display: inline-block;\n  width: 2.5em;\n}\n.quote-attributed {\n  margin: 0.5em 0;\n  text-align: right;\n}\n.quote .quote-attributed::before {\n  content: '—';\n}\n.quote-block {\n  padding-left: 1em;\n  border-left: solid 4pt rgba(120, 140, 150, 0.3)  ;\n}\n\n.address .quote-lines {\n  font-size: .933em;\n}\n\n.blockquote {\n  padding: 0 1em;\n}\n\n";
/* 001357 */ export var _html_js_mathjax = '\nMathJax = {\n    tex: {\n        inlineMath: [[\'\\\\(\', \'\\\\)\']],\n        displayMath: [[\'\\\\[\', \'\\\\]\']],\n        processEnvironments: true,\n        processRefs: true,\n\n        // equation numbering on\n        tags: \'ams\'\n    },\n    options: {\n        // all MathJax content is marked with CSS classes\n        // skipHtmlTags: \'body\',\n        // processHtmlClass: \'display-math|inline-math\',\n    },\n    startup: {\n        pageReady: function() {\n            // override the default "typeset everything on the page" behavior to\n            // only typeset whatever we have explicitly marked as math\n            return typesetPageMathPromise();\n        }\n    }\n};\nfunction typesetPageMathPromise()\n{\n    var elements = document.querySelectorAll(\'.display-math, .inline-math\');\n    return MathJax.typesetPromise(elements);\n}\n';
/* 001388 */ export var _html_body_end_js_scripts_mathjax = '\n<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>\n<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>\n';
/* 001396 */ export var get_html_css_global = function (html_fragment_renderer) {
/* 001396 */ 	if (arguments.length) {
/* 001396 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001396 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001396 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001396 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001396 */ 				switch (__attrib0__) {
/* 001396 */ 					case 'html_fragment_renderer': var html_fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 001396 */ 				}
/* 001396 */ 			}
/* 001396 */ 		}
/* 001396 */ 	}
/* 001396 */ 	else {
/* 001396 */ 	}
/* 001397 */ 	return _html_css_global;
/* 001397 */ };
/* 001399 */ export var get_html_css_content = function (html_fragment_renderer) {
/* 001399 */ 	if (arguments.length) {
/* 001399 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001399 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001399 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001399 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001399 */ 				switch (__attrib0__) {
/* 001399 */ 					case 'html_fragment_renderer': var html_fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 001399 */ 				}
/* 001399 */ 			}
/* 001399 */ 		}
/* 001399 */ 	}
/* 001399 */ 	else {
/* 001399 */ 	}
/* 001400 */ 	return _html_css_content;
/* 001400 */ };
/* 001402 */ export var get_html_js = function (html_fragment_renderer) {
/* 001402 */ 	if (arguments.length) {
/* 001402 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001402 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001402 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001402 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001402 */ 				switch (__attrib0__) {
/* 001402 */ 					case 'html_fragment_renderer': var html_fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 001402 */ 				}
/* 001402 */ 			}
/* 001402 */ 		}
/* 001402 */ 	}
/* 001402 */ 	else {
/* 001402 */ 	}
/* 001403 */ 	if (__t__ (html_fragment_renderer.use_mathjax)) {
/* 001404 */ 		return _html_js_mathjax;
/* 001404 */ 	}
/* 001405 */ 	return '';
/* 001405 */ };
/* 001407 */ export var get_html_body_end_js_scripts = function (html_fragment_renderer) {
/* 001407 */ 	if (arguments.length) {
/* 001407 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001407 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001407 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001407 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001407 */ 				switch (__attrib0__) {
/* 001407 */ 					case 'html_fragment_renderer': var html_fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 001407 */ 				}
/* 001407 */ 			}
/* 001407 */ 		}
/* 001407 */ 	}
/* 001407 */ 	else {
/* 001407 */ 	}
/* 001408 */ 	if (__t__ (html_fragment_renderer.use_mathjax)) {
/* 001409 */ 		return _html_body_end_js_scripts_mathjax;
/* 001409 */ 	}
/* 001410 */ 	return '';
/* 001410 */ };
/* 001416 */ export var FragmentRendererInformation =  __class__ ('FragmentRendererInformation', [object], {
/* 001416 */ 	__module__: __name__,
/* 001422 */ 	FragmentRendererClass: HtmlFragmentRenderer,
/* 001425 */ 	get get_style_information () {return function (fragment_renderer) {
/* 001425 */ 		if (arguments.length) {
/* 001425 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001425 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001425 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001425 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001425 */ 					switch (__attrib0__) {
/* 001425 */ 						case 'fragment_renderer': var fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 001425 */ 					}
/* 001425 */ 				}
/* 001425 */ 			}
/* 001425 */ 		}
/* 001425 */ 		else {
/* 001425 */ 		}
/* 001430 */ 		return dict ({'css_global': __call__ (get_html_css_global, null, fragment_renderer), 'css_content': __call__ (get_html_css_content, null, fragment_renderer), 'js': __call__ (get_html_js, null, fragment_renderer), 'body_end_js_scripts': __call__ (get_html_body_end_js_scripts, null, fragment_renderer)});
/* 001430 */ 	};},
/* 001433 */ 	format_name: 'html'
/* 001433 */ });
/* 000006 */ 
//# sourceMappingURL=flm.fragmentrenderer.html.map