/* 000001 */ // Transcrypt'ed from Python, 2026-06-30 21:51:25
/* 000006 */ var html = {};
/* 000006 */ var logging = {};
/* 000006 */ var re = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000014 */ import {FragmentRenderer} from './flm.fragmentrenderer._base.js';
/* 000012 */ import {Any, Callable, Mapping} from './flm._typing_helpers.js';
/* 000009 */ import * as __module_logging__ from './logging.js';
/* 000009 */ __nest__ (logging, '', __module_logging__);
/* 000007 */ import * as __module_re__ from './re.js';
/* 000007 */ __nest__ (re, '', __module_re__);
/* 000006 */ import * as __module_html__ from './html.js';
/* 000006 */ __nest__ (html, '', __module_html__);
/* 000006 */ export {Mapping, Any, Callable, FragmentRenderer};
/* 000001 */ var __name__ = 'flm.fragmentrenderer.html';
/* 000010 */ export var logger = (function () {
/* 000010 */ 	var __accu0__ = logging;
/* 000010 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000010 */ }) ();
/* 000026 */ export var _rx_html_entity = (function () {
/* 000026 */ 	var __accu0__ = re;
/* 000026 */ 	return __call__ (__accu0__.compile, __accu0__, '[&]([a-zA-Z]+|[#][0-9]+|[#]x[0-9a-fA-F]+);');
/* 000026 */ }) ();
/* 000029 */ export var HtmlFragmentRenderer =  __class__ ('HtmlFragmentRenderer', [FragmentRenderer], {
/* 000029 */ 	__module__: __name__,
/* 000040 */ 	use_link_target_blank: false,
/* 000053 */ 	html_blocks_joiner: '\n',
/* 000070 */ 	heading_tags_by_level: dict ({1: 'h1', 2: 'h2', 3: 'h3', 4: 'span', 5: 'span', 6: 'span', 'theorem': 'span'}),
/* 000085 */ 	inline_heading_add_space: true,
/* 000092 */ 	aggressively_escape_html_attributes: false,
/* 000110 */ 	render_nothing_as_comment_with_annotations: true,
/* 000112 */ 	render_links_with_empty_href: false,
/* 000114 */ 	use_mathjax: true,
/* 000116 */ 	use_standard_math_delimiters: true,
/* 000119 */ 	include_node_data_attrs_fn: null,
/* 000141 */ 	verbatim_highlight_spaces: false,
/* 000143 */ 	verbatim_protect_backslashes: true,
/* 000145 */ 	lines_use_line_span: true,
/* 000146 */ 	lines_use_br: true,
/* 000147 */ 	lines_container_tag: dict ({}),
/* 000151 */ 	float_caption_title_separator: ': ',
/* 000153 */ 	graphics_raster_magnification: 1,
/* 000154 */ 	graphics_vector_magnification: 1,
/* 000162 */ 	supports_delayed_render_markers: true,
/* 000174 */ 	get htmlescape () {return __get__ (this, function (self, value) {
/* 000174 */ 		if (arguments.length) {
/* 000174 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000174 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000174 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000174 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000174 */ 					switch (__attrib0__) {
/* 000174 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000174 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000174 */ 					}
/* 000174 */ 				}
/* 000174 */ 			}
/* 000174 */ 		}
/* 000174 */ 		else {
/* 000174 */ 		}
/* 000184 */ 		var esc = (function () {
/* 000184 */ 			var __accu0__ = html;
/* 000184 */ 			return __call__ (__accu0__.escape, __accu0__, value);
/* 000184 */ 		}) ();
/* 000186 */ 		var esc = (function () {
/* 000186 */ 			var __accu0__ = (function () {
/* 000186 */ 				var __accu1__ = (function () {
/* 000186 */ 					var __accu2__ = (function () {
/* 000186 */ 						var __accu3__ = (function () {
/* 000186 */ 							var __accu4__ = (function () {
/* 000186 */ 								var __accu5__ = (function () {
/* 000186 */ 									var __accu6__ = esc;
/* 000186 */ 									return __call__ (__accu6__.py_replace, __accu6__, '\xa0', '&nbsp;');
/* 000186 */ 								}) ();
/* 000186 */ 								return __call__ (__accu5__.py_replace, __accu5__, '\u200a', '&hairsp;');
/* 000186 */ 							}) ();
/* 000187 */ 							return __call__ (__accu4__.py_replace, __accu4__, '\u2009', '&thinsp;');
/* 000187 */ 						}) ();
/* 000188 */ 						return __call__ (__accu3__.py_replace, __accu3__, '\u2008', '&puncsp;');
/* 000188 */ 					}) ();
/* 000189 */ 					return __call__ (__accu2__.py_replace, __accu2__, '\u2002', '&ensp;');
/* 000189 */ 				}) ();
/* 000190 */ 				return __call__ (__accu1__.py_replace, __accu1__, '\u2003', '&emsp;');
/* 000190 */ 			}) ();
/* 000191 */ 			return __call__ (__accu0__.py_replace, __accu0__, '\u2007', '&numsp;');
/* 000191 */ 		}) ();
/* 000194 */ 		return esc;
/* 000194 */ 	});},
/* 000196 */ 	get htmlescape_double_quoted_attribute_value () {return __get__ (this, function (self, value) {
/* 000196 */ 		if (arguments.length) {
/* 000196 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000196 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000196 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000196 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000196 */ 					switch (__attrib0__) {
/* 000196 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000196 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000196 */ 					}
/* 000196 */ 				}
/* 000196 */ 			}
/* 000196 */ 		}
/* 000196 */ 		else {
/* 000196 */ 		}
/* 000198 */ 		if (__t__ (self.aggressively_escape_html_attributes)) {
/* 000199 */ 			return (function () {
/* 000199 */ 				var __accu0__ = self;
/* 000199 */ 				return __call__ (__accu0__.htmlescape, __accu0__, value);
/* 000199 */ 			}) ();
/* 000199 */ 		}
/* 000209 */ 		var value = (function () {
/* 000209 */ 			var __accu0__ = _rx_html_entity;
/* 000209 */ 			return __call__ (__accu0__.sub, __accu0__, (function __lambda__ (m) {
/* 000209 */ 				if (arguments.length) {
/* 000209 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000209 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000209 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000209 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000209 */ 							switch (__attrib0__) {
/* 000209 */ 								case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000209 */ 							}
/* 000209 */ 						}
/* 000209 */ 					}
/* 000209 */ 				}
/* 000209 */ 				else {
/* 000209 */ 				}
/* 000209 */ 				return __add__ (__add__ ('&amp;', (function () {
/* 000209 */ 					var __accu1__ = m;
/* 000209 */ 					return __call__ (__accu1__.group, __accu1__, 1);
/* 000209 */ 				}) ()), ';');
/* 000209 */ 			}), value);
/* 000209 */ 		}) ();
/* 000211 */ 		var value = (function () {
/* 000211 */ 			var __accu0__ = value;
/* 000211 */ 			return __call__ (__accu0__.py_replace, __accu0__, '"', '&quot;');
/* 000211 */ 		}) ();
/* 000212 */ 		return value;
/* 000212 */ 	});},
/* 000214 */ 	get generate_open_tag () {return __get__ (this, function (self, tagname) {
/* 000214 */ 		var attrs = null;
/* 000214 */ 		var class_names = null;
/* 000214 */ 		var self_close_tag = false;
/* 000214 */ 		if (arguments.length) {
/* 000214 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000214 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000214 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000214 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000214 */ 					switch (__attrib0__) {
/* 000214 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000214 */ 						case 'tagname': var tagname = __allkwargs0__ [__attrib0__]; break;
/* 000214 */ 						case 'attrs': var attrs = __allkwargs0__ [__attrib0__]; break;
/* 000214 */ 						case 'class_names': var class_names = __allkwargs0__ [__attrib0__]; break;
/* 000214 */ 						case 'self_close_tag': var self_close_tag = __allkwargs0__ [__attrib0__]; break;
/* 000214 */ 					}
/* 000214 */ 				}
/* 000214 */ 			}
/* 000214 */ 		}
/* 000214 */ 		else {
/* 000214 */ 		}
/* 000227 */ 		var s = '<{}'.format (tagname);
/* 000228 */ 		if (__t__ (!__t__ ((attrs)))) {
/* 000229 */ 			var attrs = dict ({});
/* 000229 */ 		}
/* 000230 */ 		var attrs = __call__ (dict, null, attrs);
/* 000231 */ 		if (__t__ (__in__ ('class', attrs))) {
/* 000232 */ 			var __except0__ = __call__ (ValueError, null, "generate_open_tag(): set HTML 'class' attribute with class_names=, not with attrs=");
/* 000232 */ 			__except0__.__cause__ = null;
/* 000232 */ 			throw __except0__;
/* 000232 */ 		}
/* 000236 */ 		if (__t__ (class_names)) {
/* 000237 */ 			__setitem__ (attrs, 'class', (function () {
/* 000237 */ 				var __accu0__ = ' ';
/* 000237 */ 				return __call__ (__accu0__.join, __accu0__, class_names);
/* 000237 */ 			}) ());
/* 000237 */ 		}
/* 000238 */ 		if (__t__ (attrs)) {
/* 000239 */ 			var __iterable0__ = (function () {
/* 000239 */ 				var __accu0__ = attrs;
/* 000239 */ 				return __call__ (__accu0__.py_items, __accu0__);
/* 000239 */ 			}) ();
/* 000239 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000239 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000239 */ 				var aname = __left0__ [0];
/* 000239 */ 				var aval = __left0__ [1];
/* 000240 */ 				var s = __call__ (__iadd__, null, s, ' {}="{}"'.format (aname, (function () {
/* 000240 */ 					var __accu0__ = self;
/* 000240 */ 					return __call__ (__accu0__.htmlescape_double_quoted_attribute_value, __accu0__, aval);
/* 000240 */ 				}) ()));
/* 000240 */ 			}
/* 000240 */ 		}
/* 000241 */ 		if (__t__ (self_close_tag)) {
/* 000242 */ 			var s = __call__ (__iadd__, null, s, '/>');
/* 000242 */ 		}
/* 000243 */ 		else {
/* 000244 */ 			var s = __call__ (__iadd__, null, s, '>');
/* 000244 */ 		}
/* 000245 */ 		return s;
/* 000245 */ 	});},
/* 000247 */ 	get wrap_in_tag () {return __get__ (this, function (self, tagname, content_html) {
/* 000247 */ 		var attrs = null;
/* 000247 */ 		var class_names = null;
/* 000247 */ 		if (arguments.length) {
/* 000247 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000247 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000247 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000247 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000247 */ 					switch (__attrib0__) {
/* 000247 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000247 */ 						case 'tagname': var tagname = __allkwargs0__ [__attrib0__]; break;
/* 000247 */ 						case 'content_html': var content_html = __allkwargs0__ [__attrib0__]; break;
/* 000247 */ 						case 'attrs': var attrs = __allkwargs0__ [__attrib0__]; break;
/* 000247 */ 						case 'class_names': var class_names = __allkwargs0__ [__attrib0__]; break;
/* 000247 */ 					}
/* 000247 */ 				}
/* 000247 */ 			}
/* 000247 */ 		}
/* 000247 */ 		else {
/* 000247 */ 		}
/* 000259 */ 		var s = (function () {
/* 000259 */ 			var __accu0__ = self;
/* 000259 */ 			return __call__ (__accu0__.generate_open_tag, __accu0__, tagname, __kwargtrans__ ({attrs: attrs, class_names: class_names}));
/* 000259 */ 		}) ();
/* 000260 */ 		var s = __call__ (__iadd__, null, s, __call__ (str, null, content_html));
/* 000261 */ 		var s = __call__ (__iadd__, null, s, '</{}>'.format (tagname));
/* 000262 */ 		return s;
/* 000262 */ 	});},
/* 000264 */ 	get wrap_in_link () {return __get__ (this, function (self, display_html, target_href) {
/* 000264 */ 		var class_names = null;
/* 000264 */ 		var attrs = null;
/* 000264 */ 		if (arguments.length) {
/* 000264 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000264 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000264 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000264 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000264 */ 					switch (__attrib0__) {
/* 000264 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000264 */ 						case 'display_html': var display_html = __allkwargs0__ [__attrib0__]; break;
/* 000264 */ 						case 'target_href': var target_href = __allkwargs0__ [__attrib0__]; break;
/* 000264 */ 						case 'class_names': var class_names = __allkwargs0__ [__attrib0__]; break;
/* 000264 */ 						case 'attrs': var attrs = __allkwargs0__ [__attrib0__]; break;
/* 000264 */ 					}
/* 000264 */ 				}
/* 000264 */ 			}
/* 000264 */ 		}
/* 000264 */ 		else {
/* 000264 */ 		}
/* 000278 */ 		if (__t__ (!__t__ ((target_href)))) {
/* 000279 */ 			var target_href = '#';
/* 000279 */ 		}
/* 000280 */ 		var a_attrs = dict ({'href': target_href});
/* 000283 */ 		if (__t__ (attrs !== null)) {
/* 000284 */ 			(function () {
/* 000284 */ 				var __accu0__ = a_attrs;
/* 000284 */ 				return __call__ (__accu0__.py_update, __accu0__, attrs);
/* 000284 */ 			}) ();
/* 000284 */ 		}
/* 000285 */ 		if (__t__ (__call__ (callable, null, self.use_link_target_blank))) {
/* 000286 */ 			if (__t__ ((function () {
/* 000286 */ 				var __accu0__ = self;
/* 000286 */ 				return __call__ (__accu0__.use_link_target_blank, __accu0__, target_href);
/* 000286 */ 			}) ())) {
/* 000287 */ 				__setitem__ (a_attrs, 'target', '_blank');
/* 000287 */ 			}
/* 000287 */ 		}
/* 000288 */ 		else if (__t__ (__t__ (self.use_link_target_blank) && !__t__ (((function () {
/* 000288 */ 			var __accu0__ = target_href;
/* 000288 */ 			return __call__ (__accu0__.startswith, __accu0__, '#');
/* 000288 */ 		}) ())))) {
/* 000289 */ 			__setitem__ (a_attrs, 'target', '_blank');
/* 000289 */ 		}
/* 000290 */ 		return (function () {
/* 000290 */ 			var __accu0__ = self;
/* 000290 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'a', display_html, __kwargtrans__ ({attrs: a_attrs, class_names: class_names}));
/* 000290 */ 		}) ();
/* 000290 */ 	});},
/* 000299 */ 	get _get_meta_info_data_attrs () {return __get__ (this, function (self, node, when, render_context) {
/* 000299 */ 		if (arguments.length) {
/* 000299 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000299 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000299 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000299 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000299 */ 					switch (__attrib0__) {
/* 000299 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000299 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000299 */ 						case 'when': var when = __allkwargs0__ [__attrib0__]; break;
/* 000299 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000299 */ 					}
/* 000299 */ 				}
/* 000299 */ 			}
/* 000299 */ 		}
/* 000299 */ 		else {
/* 000299 */ 		}
/* 000300 */ 		if (__t__ (__t__ (self.include_node_data_attrs_fn === null) || node === null)) {
/* 000301 */ 			return null;
/* 000301 */ 		}
/* 000302 */ 		var meta_info = (function () {
/* 000302 */ 			var __accu0__ = self;
/* 000302 */ 			return __call__ (__accu0__.include_node_data_attrs_fn, __accu0__, node, __kwargtrans__ ({when: when, render_context: render_context}));
/* 000302 */ 		}) ();
/* 000307 */ 		if (__t__ (meta_info === null)) {
/* 000308 */ 			return null;
/* 000308 */ 		}
/* 000309 */ 		return (function () {
/* 000309 */ 			var __accu0__ = [];
/* 000309 */ 			var __iterable0__ = (function () {
/* 000309 */ 				var __accu1__ = meta_info;
/* 000309 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000309 */ 			}) ();
/* 000309 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000309 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000309 */ 				var x = __left0__ [0];
/* 000309 */ 				var v = __left0__ [1];
/* 000309 */ 				(function () {
/* 000309 */ 					var __accu1__ = __accu0__;
/* 000309 */ 					return __call__ (__accu1__.append, __accu1__, ['data-{}'.format (x), __call__ (str, null, v)]);
/* 000309 */ 				}) ();
/* 000309 */ 			}
/* 000309 */ 			return dict (__accu0__);
/* 000309 */ 		}) ();
/* 000309 */ 	});},
/* 000310 */ 	get _merge_meta_info_data_attrs () {return __get__ (this, function (self, attrs, node, when, render_context) {
/* 000310 */ 		if (arguments.length) {
/* 000310 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000310 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000310 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000310 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000310 */ 					switch (__attrib0__) {
/* 000310 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000310 */ 						case 'attrs': var attrs = __allkwargs0__ [__attrib0__]; break;
/* 000310 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000310 */ 						case 'when': var when = __allkwargs0__ [__attrib0__]; break;
/* 000310 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000310 */ 					}
/* 000310 */ 				}
/* 000310 */ 			}
/* 000310 */ 		}
/* 000310 */ 		else {
/* 000310 */ 		}
/* 000311 */ 		var data_attrs = (function () {
/* 000311 */ 			var __accu0__ = self;
/* 000311 */ 			return __call__ (__accu0__._get_meta_info_data_attrs, __accu0__, node, when, render_context);
/* 000311 */ 		}) ();
/* 000312 */ 		if (__t__ (data_attrs !== null)) {
/* 000313 */ 			(function () {
/* 000313 */ 				var __accu0__ = attrs;
/* 000313 */ 				return __call__ (__accu0__.py_update, __accu0__, data_attrs);
/* 000313 */ 			}) ();
/* 000313 */ 		}
/* 000313 */ 	});},
/* 000315 */ 	get render_build_paragraph () {return __get__ (this, function (self, nodelist, render_context) {
/* 000315 */ 		if (arguments.length) {
/* 000315 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000315 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000315 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000315 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000315 */ 					switch (__attrib0__) {
/* 000315 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000315 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000315 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000315 */ 					}
/* 000315 */ 				}
/* 000315 */ 			}
/* 000315 */ 		}
/* 000315 */ 		else {
/* 000315 */ 		}
/* 000316 */ 		var data_attrs = (function () {
/* 000316 */ 			var __accu0__ = self;
/* 000316 */ 			return __call__ (__accu0__._get_meta_info_data_attrs, __accu0__, nodelist, 'build-paragraph', render_context);
/* 000316 */ 		}) ();
/* 000318 */ 		return (function () {
/* 000318 */ 			var __accu0__ = self;
/* 000320 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'p', (function () {
/* 000320 */ 				var __accu1__ = self;
/* 000320 */ 				return __call__ (__accu1__.render_inline_content, __accu1__, nodelist, render_context);
/* 000320 */ 			}) (), __kwargtrans__ ({attrs: data_attrs}));
/* 000320 */ 		}) ();
/* 000320 */ 	});},
/* 000324 */ 	get render_inline_content () {return __get__ (this, function (self, nodelist, render_context) {
/* 000324 */ 		if (arguments.length) {
/* 000324 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000324 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000324 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000324 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000324 */ 					switch (__attrib0__) {
/* 000324 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000324 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000324 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000324 */ 					}
/* 000324 */ 				}
/* 000324 */ 			}
/* 000324 */ 		}
/* 000324 */ 		else {
/* 000324 */ 		}
/* 000325 */ 		return (function () {
/* 000325 */ 			var __accu0__ = self;
/* 000325 */ 			return __call__ (__accu0__.render_join, __accu0__, (function () {
/* 000325 */ 				var __accu1__ = [];
/* 000326 */ 				var __iterable0__ = nodelist;
/* 000326 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000326 */ 					var n = __getitem__ (__iterable0__, __index0__);
/* 000326 */ 					(function () {
/* 000326 */ 						var __accu2__ = __accu1__;
/* 000326 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000326 */ 							var __accu3__ = self;
/* 000326 */ 							return __call__ (__accu3__.render_node, __accu3__, n, render_context);
/* 000326 */ 						}) ());
/* 000326 */ 					}) ();
/* 000326 */ 				}
/* 000326 */ 				return __accu1__;
/* 000326 */ 			}) (), render_context);
/* 000326 */ 		}) ();
/* 000326 */ 	});},
/* 000330 */ 	get render_join () {return __get__ (this, function (self, content_list, render_context) {
/* 000330 */ 		if (arguments.length) {
/* 000330 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000330 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000330 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000330 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000330 */ 					switch (__attrib0__) {
/* 000330 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000330 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000330 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000330 */ 					}
/* 000330 */ 				}
/* 000330 */ 			}
/* 000330 */ 		}
/* 000330 */ 		else {
/* 000330 */ 		}
/* 000336 */ 		return (function () {
/* 000336 */ 			var __accu0__ = '';
/* 000336 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000336 */ 				var __accu1__ = [];
/* 000336 */ 				var __iterable0__ = content_list;
/* 000336 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000336 */ 					var s = __getitem__ (__iterable0__, __index0__);
/* 000336 */ 					(function () {
/* 000336 */ 						var __accu2__ = __accu1__;
/* 000336 */ 						return __call__ (__accu2__.append, __accu2__, __call__ (str, null, s));
/* 000336 */ 					}) ();
/* 000336 */ 				}
/* 000336 */ 				return __accu1__;
/* 000336 */ 			}) ());
/* 000336 */ 		}) ();
/* 000336 */ 	});},
/* 000338 */ 	get render_join_blocks () {return __get__ (this, function (self, content_list, render_context) {
/* 000338 */ 		if (arguments.length) {
/* 000338 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000338 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000338 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000338 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000338 */ 					switch (__attrib0__) {
/* 000338 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000338 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000338 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000338 */ 					}
/* 000338 */ 				}
/* 000338 */ 			}
/* 000338 */ 		}
/* 000338 */ 		else {
/* 000338 */ 		}
/* 000346 */ 		return (function () {
/* 000346 */ 			var __accu0__ = self.html_blocks_joiner;
/* 000346 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000346 */ 				var __accu1__ = [];
/* 000347 */ 				var __iterable0__ = content_list;
/* 000347 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000347 */ 					var c = __getitem__ (__iterable0__, __index0__);
/* 000347 */ 					if (__t__ (__t__ (c !== null) && __call__ (len, null, c))) {
/* 000347 */ 						(function () {
/* 000347 */ 							var __accu2__ = __accu1__;
/* 000347 */ 							return __call__ (__accu2__.append, __accu2__, c);
/* 000347 */ 						}) ();
/* 000347 */ 					}
/* 000347 */ 				}
/* 000347 */ 				return __accu1__;
/* 000347 */ 			}) ());
/* 000347 */ 		}) ();
/* 000347 */ 	});},
/* 000353 */ 	get render_value () {return __get__ (this, function (self, value, render_context) {
/* 000353 */ 		if (arguments.length) {
/* 000353 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000353 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000353 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000353 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000353 */ 					switch (__attrib0__) {
/* 000353 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000353 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000353 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000353 */ 					}
/* 000353 */ 				}
/* 000353 */ 			}
/* 000353 */ 		}
/* 000353 */ 		else {
/* 000353 */ 		}
/* 000354 */ 		return (function () {
/* 000354 */ 			var __accu0__ = self;
/* 000354 */ 			return __call__ (__accu0__.htmlescape, __accu0__, value);
/* 000354 */ 		}) ();
/* 000354 */ 	});},
/* 000356 */ 	get render_empty_error_placeholder () {return __get__ (this, function (self, debug_str, render_context) {
/* 000356 */ 		if (arguments.length) {
/* 000356 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000356 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000356 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000356 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000356 */ 					switch (__attrib0__) {
/* 000356 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000356 */ 						case 'debug_str': var debug_str = __allkwargs0__ [__attrib0__]; break;
/* 000356 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000356 */ 					}
/* 000356 */ 				}
/* 000356 */ 			}
/* 000356 */ 		}
/* 000356 */ 		else {
/* 000356 */ 		}
/* 000357 */ 		var debug_str_safe = (function () {
/* 000357 */ 			var __accu0__ = debug_str;
/* 000357 */ 			return __call__ (__accu0__.py_replace, __accu0__, '--', '- - ');
/* 000357 */ 		}) ();
/* 000358 */ 		return '<span class="empty-error-placeholder"><!-- {} -->(?)</span>'.format (debug_str_safe);
/* 000358 */ 	});},
/* 000360 */ 	get render_nothing () {return __get__ (this, function (self, render_context, annotations) {
/* 000360 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000360 */ 			var annotations = null;
/* 000360 */ 		};
/* 000360 */ 		if (arguments.length) {
/* 000360 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000360 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000360 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000360 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000360 */ 					switch (__attrib0__) {
/* 000360 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000360 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000360 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000360 */ 					}
/* 000360 */ 				}
/* 000360 */ 			}
/* 000360 */ 		}
/* 000360 */ 		else {
/* 000360 */ 		}
/* 000361 */ 		if (__t__ (!__t__ ((self.render_nothing_as_comment_with_annotations)))) {
/* 000362 */ 			return '';
/* 000362 */ 		}
/* 000363 */ 		if (__t__ (!__t__ ((annotations)))) {
/* 000364 */ 			var annotations = [];
/* 000364 */ 		}
/* 000365 */ 		var annotations = (function () {
/* 000365 */ 			var __accu0__ = [];
/* 000365 */ 			var __iterable0__ = annotations;
/* 000365 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000365 */ 				var a = __getitem__ (__iterable0__, __index0__);
/* 000365 */ 				(function () {
/* 000365 */ 					var __accu1__ = __accu0__;
/* 000365 */ 					return __call__ (__accu1__.append, __accu1__, (function () {
/* 000365 */ 						var __accu2__ = a;
/* 000365 */ 						return __call__ (__accu2__.py_replace, __accu2__, '--', '- - ');
/* 000365 */ 					}) ());
/* 000365 */ 				}) ();
/* 000365 */ 			}
/* 000365 */ 			return __accu0__;
/* 000365 */ 		}) ();
/* 000366 */ 		return (function () {
/* 000366 */ 			var __accu0__ = '<!-- {} -->';
/* 000366 */ 			return __call__ (__accu0__.format, __accu0__, (function () {
/* 000366 */ 				var __accu1__ = ' ';
/* 000366 */ 				return __call__ (__accu1__.join, __accu1__, annotations);
/* 000366 */ 			}) ());
/* 000366 */ 		}) ();
/* 000366 */ 	});},
/* 000368 */ 	get render_verbatim () {return __get__ (this, function (self, value, render_context) {
/* 000368 */ 		var is_block_level = false;
/* 000368 */ 		var annotations = null;
/* 000368 */ 		var target_id = null;
/* 000368 */ 		if (arguments.length) {
/* 000368 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000368 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000368 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000368 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000368 */ 					switch (__attrib0__) {
/* 000368 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000368 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000368 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000368 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000368 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000368 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000368 */ 					}
/* 000368 */ 				}
/* 000368 */ 			}
/* 000368 */ 		}
/* 000368 */ 		else {
/* 000368 */ 		}
/* 000370 */ 		var attrs = dict ({});
/* 000371 */ 		if (__t__ (target_id !== null)) {
/* 000372 */ 			__setitem__ (attrs, 'id', target_id);
/* 000372 */ 		}
/* 000373 */ 		var escaped = (function () {
/* 000373 */ 			var __accu0__ = self;
/* 000373 */ 			return __call__ (__accu0__.htmlescape, __accu0__, value);
/* 000373 */ 		}) ();
/* 000374 */ 		if (__t__ (self.verbatim_protect_backslashes)) {
/* 000376 */ 			var escaped = (function () {
/* 000376 */ 				var __accu0__ = escaped;
/* 000376 */ 				return __call__ (__accu0__.py_replace, __accu0__, '\\', '<span>\\</span>');
/* 000376 */ 			}) ();
/* 000376 */ 		}
/* 000377 */ 		if (__t__ (self.verbatim_highlight_spaces)) {
/* 000378 */ 			var escaped = (function () {
/* 000378 */ 				var __accu0__ = escaped;
/* 000378 */ 				return __call__ (__accu0__.py_replace, __accu0__, ' ', '<span class="verbatimspace">&nbsp;</span>');
/* 000378 */ 			}) ();
/* 000378 */ 		}
/* 000381 */ 		var tag = 'span';
/* 000382 */ 		var __iterable0__ = annotations;
/* 000382 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000382 */ 			var annotation = __getitem__ (__iterable0__, __index0__);
/* 000383 */ 			if (__t__ (__in__ (annotation, tuple (['verbatimcode-environment'])))) {
/* 000385 */ 				var tag = 'div';
/* 000385 */ 			}
/* 000385 */ 		}
/* 000387 */ 		return (function () {
/* 000387 */ 			var __accu0__ = self;
/* 000387 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, tag, escaped, __kwargtrans__ ({class_names: (__t__ (annotations) ? annotations : ['verbatimtext']), attrs: attrs}));
/* 000387 */ 		}) ();
/* 000387 */ 	});},
/* 000394 */ 	get render_math_content () {return __get__ (this, function (self, delimiters, nodelist, render_context, displaytype, environmentname, target_id) {
/* 000394 */ 		if (typeof environmentname == 'undefined' || (environmentname != null && environmentname.hasOwnProperty ("__kwargtrans__"))) {;
/* 000394 */ 			var environmentname = null;
/* 000394 */ 		};
/* 000394 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000394 */ 			var target_id = null;
/* 000394 */ 		};
/* 000394 */ 		if (arguments.length) {
/* 000394 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000394 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000394 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000394 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000394 */ 					switch (__attrib0__) {
/* 000394 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000394 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000394 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000394 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000394 */ 						case 'displaytype': var displaytype = __allkwargs0__ [__attrib0__]; break;
/* 000394 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000394 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000394 */ 					}
/* 000394 */ 				}
/* 000394 */ 			}
/* 000394 */ 		}
/* 000394 */ 		else {
/* 000394 */ 		}
/* 000402 */ 		if (__t__ (!__t__ ((self.use_mathjax)))) {
/* 000403 */ 			(function () {
/* 000403 */ 				var __accu0__ = logger;
/* 000403 */ 				return __call__ (__accu0__.warning, __accu0__, 'called HtmlFragmentRenderer.render_math_content() but self.use_mathjax is not set. Your math will probably not render correctly.');
/* 000403 */ 			}) ();
/* 000403 */ 		}
/* 000409 */ 		var use_delims = tuple ([__getitem__ (delimiters, 0), __getitem__ (delimiters, 1)]);
/* 000410 */ 		if (__t__ (self.use_standard_math_delimiters)) {
/* 000411 */ 			if (__t__ (__eq__ (displaytype, 'inline'))) {
/* 000412 */ 				var use_delims = tuple (['\\(', '\\)']);
/* 000412 */ 			}
/* 000413 */ 			else if (__t__ (__eq__ (displaytype, 'display'))) {
/* 000414 */ 				if (__t__ (environmentname)) {
/* 000415 */ 					var use_delims = tuple (['\\begin{}{}{}'.format ('{', environmentname, '}'), '\\end{}{}{}'.format ('{', environmentname, '}')]);
/* 000415 */ 				}
/* 000418 */ 				else {
/* 000420 */ 					var use_delims = tuple (['\\[', '\\]']);
/* 000420 */ 				}
/* 000420 */ 			}
/* 000421 */ 			else {
/* 000422 */ 				var __except0__ = __call__ (ValueError, null, 'Invalid displaytype: {}'.format (__call__ (repr, null, displaytype)));
/* 000422 */ 				__except0__.__cause__ = null;
/* 000422 */ 				throw __except0__;
/* 000422 */ 			}
/* 000422 */ 		}
/* 000424 */ 		var class_names = ['{}-math'.format (displaytype)];
/* 000425 */ 		if (__t__ (environmentname !== null)) {
/* 000426 */ 			(function () {
/* 000426 */ 				var __accu0__ = class_names;
/* 000426 */ 				return __call__ (__accu0__.append, __accu0__, 'env-{}'.format ((function () {
/* 000426 */ 					var __accu1__ = environmentname;
/* 000426 */ 					return __call__ (__accu1__.py_replace, __accu1__, '*', '-star');
/* 000426 */ 				}) ()));
/* 000426 */ 			}) ();
/* 000426 */ 		}
/* 000429 */ 		var content_html = (function () {
/* 000429 */ 			var __accu0__ = self;
/* 000429 */ 			return __call__ (__accu0__.htmlescape, __accu0__, __add__ (__add__ (__getitem__ (use_delims, 0), (function () {
/* 000429 */ 				var __accu1__ = self;
/* 000429 */ 				return __call__ (__accu1__.recompose_latex, __accu1__, nodelist);
/* 000429 */ 			}) ()), __getitem__ (use_delims, 1)));
/* 000429 */ 		}) ();
/* 000432 */ 		var attrs = dict ({});
/* 000433 */ 		if (__t__ (target_id !== null)) {
/* 000434 */ 			__setitem__ (attrs, 'id', target_id);
/* 000434 */ 		}
/* 000436 */ 		(function () {
/* 000436 */ 			var __accu0__ = self;
/* 000436 */ 			return __call__ (__accu0__._merge_meta_info_data_attrs, __accu0__, attrs, nodelist, 'math-content', render_context);
/* 000436 */ 		}) ();
/* 000438 */ 		if (__t__ (__eq__ (displaytype, 'display'))) {
/* 000440 */ 			return (function () {
/* 000440 */ 				var __accu0__ = self;
/* 000440 */ 				return __call__ (__accu0__.wrap_in_tag, __accu0__, 'span', content_html, __kwargtrans__ ({class_names: class_names, attrs: attrs}));
/* 000440 */ 			}) ();
/* 000440 */ 		}
/* 000447 */ 		return (function () {
/* 000447 */ 			var __accu0__ = self;
/* 000447 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'span', content_html, __kwargtrans__ ({class_names: class_names, attrs: attrs}));
/* 000447 */ 		}) ();
/* 000447 */ 	});},
/* 000454 */ 	get render_text_format () {return __get__ (this, function (self, text_formats, nodelist, render_context) {
/* 000454 */ 		if (arguments.length) {
/* 000454 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000454 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000454 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000454 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000454 */ 					switch (__attrib0__) {
/* 000454 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000454 */ 						case 'text_formats': var text_formats = __allkwargs0__ [__attrib0__]; break;
/* 000454 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000454 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000454 */ 					}
/* 000454 */ 				}
/* 000454 */ 			}
/* 000454 */ 		}
/* 000454 */ 		else {
/* 000454 */ 		}
/* 000456 */ 		var content = (function () {
/* 000456 */ 			var __accu0__ = self;
/* 000456 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, nodelist, render_context, __kwargtrans__ ({is_block_level: false}));
/* 000456 */ 		}) ();
/* 000462 */ 		var data_attrs = (function () {
/* 000462 */ 			var __accu0__ = self;
/* 000462 */ 			return __call__ (__accu0__._get_meta_info_data_attrs, __accu0__, nodelist, 'text-format', render_context);
/* 000462 */ 		}) ();
/* 000464 */ 		return (function () {
/* 000464 */ 			var __accu0__ = self;
/* 000464 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'span', content, __kwargtrans__ ({class_names: text_formats, attrs: data_attrs}));
/* 000464 */ 		}) ();
/* 000464 */ 	});},
/* 000471 */ 	get render_semantic_span () {return __get__ (this, function (self, content, role, render_context) {
/* 000471 */ 		var annotations = null;
/* 000471 */ 		var target_id = null;
/* 000471 */ 		if (arguments.length) {
/* 000471 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000471 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000471 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000471 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000471 */ 					switch (__attrib0__) {
/* 000471 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000471 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000471 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000471 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000471 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000471 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000471 */ 					}
/* 000471 */ 				}
/* 000471 */ 			}
/* 000471 */ 		}
/* 000471 */ 		else {
/* 000471 */ 		}
/* 000473 */ 		var attrs = dict ({});
/* 000474 */ 		if (__t__ (target_id !== null)) {
/* 000475 */ 			__setitem__ (attrs, 'id', target_id);
/* 000475 */ 		}
/* 000477 */ 		var annotations = __call__ (list, null, (__t__ (annotations !== null) ? annotations : []));
/* 000478 */ 		if (__t__ (__in__ (role, annotations))) {
/* 000479 */ 			(function () {
/* 000479 */ 				var __accu0__ = annotations;
/* 000479 */ 				return __call__ (__accu0__.remove, __accu0__, role);
/* 000479 */ 			}) ();
/* 000479 */ 		}
/* 000481 */ 		return (function () {
/* 000481 */ 			var __accu0__ = self;
/* 000481 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'span', content, __kwargtrans__ ({attrs: attrs, class_names: __add__ ([role], annotations)}));
/* 000481 */ 		}) ();
/* 000481 */ 	});},
/* 000489 */ 	get render_semantic_block () {return __get__ (this, function (self, content, role, render_context) {
/* 000489 */ 		var annotations = null;
/* 000489 */ 		var target_id = null;
/* 000489 */ 		if (arguments.length) {
/* 000489 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000489 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000489 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000489 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000489 */ 					switch (__attrib0__) {
/* 000489 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000489 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000489 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000489 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000489 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000489 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000489 */ 					}
/* 000489 */ 				}
/* 000489 */ 			}
/* 000489 */ 		}
/* 000489 */ 		else {
/* 000489 */ 		}
/* 000491 */ 		var attrs = dict ({});
/* 000492 */ 		if (__t__ (target_id !== null)) {
/* 000493 */ 			__setitem__ (attrs, 'id', target_id);
/* 000493 */ 		}
/* 000495 */ 		var annotations = __call__ (list, null, (__t__ (annotations !== null) ? annotations : []));
/* 000496 */ 		if (__t__ (__in__ (role, annotations))) {
/* 000497 */ 			(function () {
/* 000497 */ 				var __accu0__ = annotations;
/* 000497 */ 				return __call__ (__accu0__.remove, __accu0__, role);
/* 000497 */ 			}) ();
/* 000497 */ 		}
/* 000499 */ 		if (__t__ (__in__ (role, tuple (['section', 'main', 'article'])))) {
/* 000500 */ 			return (function () {
/* 000500 */ 				var __accu0__ = self;
/* 000500 */ 				return __call__ (__accu0__.wrap_in_tag, __accu0__, role, content, __kwargtrans__ ({attrs: attrs, class_names: annotations}));
/* 000500 */ 			}) ();
/* 000500 */ 		}
/* 000506 */ 		return (function () {
/* 000506 */ 			var __accu0__ = self;
/* 000506 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'div', content, __kwargtrans__ ({attrs: attrs, class_names: __add__ ([role], annotations)}));
/* 000506 */ 		}) ();
/* 000506 */ 	});},
/* 000514 */ 	get render_lines () {return __get__ (this, function (self, lines_info_list, render_context) {
/* 000514 */ 		var role = null;
/* 000514 */ 		var annotations = null;
/* 000514 */ 		var target_id = null;
/* 000514 */ 		if (arguments.length) {
/* 000514 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000514 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000514 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000514 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000514 */ 					switch (__attrib0__) {
/* 000514 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000514 */ 						case 'lines_info_list': var lines_info_list = __allkwargs0__ [__attrib0__]; break;
/* 000514 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000514 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000514 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000514 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000514 */ 					}
/* 000514 */ 				}
/* 000514 */ 			}
/* 000514 */ 		}
/* 000514 */ 		else {
/* 000514 */ 		}
/* 000523 */ 		var s_lines = [];
/* 000525 */ 		var __iterable0__ = lines_info_list;
/* 000525 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000525 */ 			var line_info = __getitem__ (__iterable0__, __index0__);
/* 000526 */ 			var line_content_nodelist = line_info.nodelist;
/* 000528 */ 			var line_content = (function () {
/* 000528 */ 				var __accu0__ = self;
/* 000528 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, line_content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000528 */ 			}) ();
/* 000534 */ 			if (__t__ (line_info.indent_left !== null)) {
/* 000535 */ 				var line_content = __add__ (__mul__ ('<span class="quote-lines-indent"></span>', line_info.indent_left), line_content);
/* 000535 */ 			}
/* 000540 */ 			if (__t__ (line_info.indent_right !== null)) {
/* 000541 */ 				(function () {
/* 000541 */ 					var __accu0__ = logger;
/* 000541 */ 					return __call__ (__accu0__.warning, __accu0__, 'lines indent_right not yet implemented in HTML renderer');
/* 000541 */ 				}) ();
/* 000541 */ 			}
/* 000542 */ 			if (__t__ (line_info.align !== null)) {
/* 000543 */ 				(function () {
/* 000543 */ 					var __accu0__ = logger;
/* 000543 */ 					return __call__ (__accu0__.warning, __accu0__, 'lines align not yet implemented in HTML renderer');
/* 000543 */ 				}) ();
/* 000543 */ 			}
/* 000545 */ 			if (__t__ (self.lines_use_line_span)) {
/* 000546 */ 				var line_content = (function () {
/* 000546 */ 					var __accu0__ = self;
/* 000546 */ 					return __call__ (__accu0__.wrap_in_tag, __accu0__, 'span', line_content);
/* 000546 */ 				}) ();
/* 000546 */ 			}
/* 000550 */ 			(function () {
/* 000550 */ 				var __accu0__ = s_lines;
/* 000550 */ 				return __call__ (__accu0__.append, __accu0__, line_content);
/* 000550 */ 			}) ();
/* 000550 */ 		}
/* 000554 */ 		if (__t__ (self.lines_use_br)) {
/* 000556 */ 			var s_lines = (function () {
/* 000556 */ 				var __accu0__ = [];
/* 000558 */ 				var __iterable0__ = __call__ (enumerate, null, s_lines);
/* 000558 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000558 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000558 */ 					var j = __left0__ [0];
/* 000558 */ 					var line = __left0__ [1];
/* 000558 */ 					(function () {
/* 000558 */ 						var __accu1__ = __accu0__;
/* 000557 */ 						return __call__ (__accu1__.append, __accu1__, (__t__ (__lt__ (j, __sub__ (__call__ (len, null, s_lines), 1))) ? __add__ (line, '<br>') : line));
/* 000557 */ 					}) ();
/* 000557 */ 				}
/* 000557 */ 				return __accu0__;
/* 000557 */ 			}) ();
/* 000557 */ 		}
/* 000561 */ 		var attrs = dict ({});
/* 000562 */ 		if (__t__ (target_id !== null)) {
/* 000563 */ 			__setitem__ (attrs, 'id', target_id);
/* 000563 */ 		}
/* 000565 */ 		var annotations = __call__ (list, null, (__t__ (annotations !== null) ? annotations : []));
/* 000566 */ 		if (__t__ (__t__ (role) && __in__ (role, annotations))) {
/* 000567 */ 			(function () {
/* 000567 */ 				var __accu0__ = annotations;
/* 000567 */ 				return __call__ (__accu0__.remove, __accu0__, role);
/* 000567 */ 			}) ();
/* 000567 */ 		}
/* 000569 */ 		var class_names = ['lines'];
/* 000570 */ 		if (__t__ (role)) {
/* 000571 */ 			(function () {
/* 000571 */ 				var __accu0__ = class_names;
/* 000571 */ 				return __call__ (__accu0__.append, __accu0__, role);
/* 000571 */ 			}) ();
/* 000571 */ 		}
/* 000572 */ 		if (__t__ (annotations)) {
/* 000573 */ 			(function () {
/* 000573 */ 				var __accu0__ = class_names;
/* 000573 */ 				return __call__ (__accu0__.extend, __accu0__, annotations);
/* 000573 */ 			}) ();
/* 000573 */ 		}
/* 000575 */ 		var tag = 'p';
/* 000576 */ 		if (__t__ (__t__ (role) && __in__ (role, self.lines_container_tag))) {
/* 000577 */ 			var tag = __getitem__ (self.lines_container_tag, role);
/* 000577 */ 		}
/* 000579 */ 		return (function () {
/* 000579 */ 			var __accu0__ = self;
/* 000581 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'p', (function () {
/* 000581 */ 				var __accu1__ = self;
/* 000581 */ 				return __call__ (__accu1__.render_join, __accu1__, s_lines, render_context);
/* 000581 */ 			}) (), __kwargtrans__ ({class_names: class_names, attrs: attrs}));
/* 000581 */ 		}) ();
/* 000581 */ 	});},
/* 000587 */ 	get render_enumeration () {return __get__ (this, function (self, iter_items_nodelists, counter_formatter, render_context) {
/* 000587 */ 		var target_id_generator = null;
/* 000587 */ 		var annotations = null;
/* 000587 */ 		var nested_depth = null;
/* 000587 */ 		if (arguments.length) {
/* 000587 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000587 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000587 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000587 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000587 */ 					switch (__attrib0__) {
/* 000587 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000587 */ 						case 'iter_items_nodelists': var iter_items_nodelists = __allkwargs0__ [__attrib0__]; break;
/* 000587 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000587 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000587 */ 						case 'target_id_generator': var target_id_generator = __allkwargs0__ [__attrib0__]; break;
/* 000587 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000587 */ 						case 'nested_depth': var nested_depth = __allkwargs0__ [__attrib0__]; break;
/* 000587 */ 					}
/* 000587 */ 				}
/* 000587 */ 			}
/* 000587 */ 		}
/* 000587 */ 		else {
/* 000587 */ 		}
/* 000612 */ 		var s_items = [];
/* 000614 */ 		var __iterable0__ = __call__ (enumerate, null, iter_items_nodelists);
/* 000614 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000614 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000614 */ 			var j = __left0__ [0];
/* 000614 */ 			var item_content_nodelist = __left0__ [1];
/* 000616 */ 			var use_block_level = true;
/* 000617 */ 			if (__t__ (item_content_nodelist.parsing_state.is_block_level === false)) {
/* 000620 */ 				var use_block_level = false;
/* 000620 */ 			}
/* 000622 */ 			// pass;
/* 000626 */ 			// pass;
/* 000630 */ 			var item_content = (function () {
/* 000630 */ 				var __accu0__ = self;
/* 000630 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, item_content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: use_block_level}));
/* 000630 */ 			}) ();
/* 000636 */ 			var enumno = __add__ (1, j);
/* 000638 */ 			var tag_nodelist = __call__ (counter_formatter, null, enumno);
/* 000639 */ 			if (__t__ (__call__ (isinstance, null, tag_nodelist, str))) {
/* 000640 */ 				var tag_content = (function () {
/* 000640 */ 					var __accu0__ = self;
/* 000640 */ 					return __call__ (__accu0__.render_value, __accu0__, tag_nodelist, render_context);
/* 000640 */ 				}) ();
/* 000640 */ 			}
/* 000641 */ 			else {
/* 000642 */ 				var tag_content = (function () {
/* 000642 */ 					var __accu0__ = self;
/* 000642 */ 					return __call__ (__accu0__.render_nodelist, __accu0__, tag_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000642 */ 				}) ();
/* 000642 */ 			}
/* 000648 */ 			var dtattrs = dict ({});
/* 000649 */ 			if (__t__ (target_id_generator !== null)) {
/* 000650 */ 				var tid = __call__ (target_id_generator, null, enumno);
/* 000651 */ 				if (__t__ (tid !== null)) {
/* 000652 */ 					__setitem__ (dtattrs, 'id', tid);
/* 000652 */ 				}
/* 000652 */ 			}
/* 000654 */ 			(function () {
/* 000654 */ 				var __accu0__ = s_items;
/* 000655 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000655 */ 					var __accu1__ = self;
/* 000656 */ 					return __call__ (__accu1__.render_join, __accu1__, [(function () {
/* 000656 */ 						var __accu2__ = self;
/* 000656 */ 						return __call__ (__accu2__.wrap_in_tag, __accu2__, 'dt', tag_content, __kwargtrans__ ({attrs: dtattrs}));
/* 000661 */ 					}) (), (function () {
/* 000661 */ 						var __accu2__ = self;
/* 000661 */ 						return __call__ (__accu2__.wrap_in_tag, __accu2__, 'dd', item_content);
/* 000661 */ 					}) ()], render_context);
/* 000661 */ 				}) ());
/* 000661 */ 			}) ();
/* 000661 */ 		}
/* 000668 */ 		return (function () {
/* 000668 */ 			var __accu0__ = self;
/* 000670 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'dl', (function () {
/* 000670 */ 				var __accu1__ = self;
/* 000670 */ 				return __call__ (__accu1__.render_join, __accu1__, s_items, render_context);
/* 000670 */ 			}) (), __kwargtrans__ ({class_names: __add__ (['enumeration'], (__t__ (annotations) ? annotations : []))}));
/* 000670 */ 		}) ();
/* 000670 */ 	});},
/* 000675 */ 	get render_heading () {return __get__ (this, function (self, heading_nodelist, render_context) {
/* 000675 */ 		var heading_level = 1;
/* 000675 */ 		var inline_heading = false;
/* 000675 */ 		var target_id = null;
/* 000675 */ 		var annotations = null;
/* 000675 */ 		if (arguments.length) {
/* 000675 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000675 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000675 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000675 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000675 */ 					switch (__attrib0__) {
/* 000675 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000675 */ 						case 'heading_nodelist': var heading_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000675 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000675 */ 						case 'heading_level': var heading_level = __allkwargs0__ [__attrib0__]; break;
/* 000675 */ 						case 'inline_heading': var inline_heading = __allkwargs0__ [__attrib0__]; break;
/* 000675 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000675 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000675 */ 					}
/* 000675 */ 				}
/* 000675 */ 			}
/* 000675 */ 		}
/* 000675 */ 		else {
/* 000675 */ 		}
/* 000682 */ 		if (__t__ (!__in__ (heading_level, self.heading_tags_by_level))) {
/* 000685 */ 			var __except0__ = __call__ (ValueError, null, "HTML renderer: bad heading level ‘{}’,  expected one of {} (or set HTML fragment renderer's ‘heading_tags_by_level’ config".format (heading_level, __call__ (list, null, (function () {
/* 000685 */ 				var __accu0__ = __call__ (dict, null, self.heading_tags_by_level);
/* 000685 */ 				return __call__ (__accu0__.py_keys, __accu0__);
/* 000685 */ 			}) ())));
/* 000685 */ 			__except0__.__cause__ = null;
/* 000685 */ 			throw __except0__;
/* 000685 */ 		}
/* 000688 */ 		var annot = (__t__ (annotations) ? __call__ (list, null, annotations) : []);
/* 000689 */ 		(function () {
/* 000689 */ 			var __accu0__ = annot;
/* 000689 */ 			return __call__ (__accu0__.append, __accu0__, 'heading-level-{}'.format (heading_level));
/* 000689 */ 		}) ();
/* 000690 */ 		if (__t__ (inline_heading)) {
/* 000691 */ 			(function () {
/* 000691 */ 				var __accu0__ = annot;
/* 000691 */ 				return __call__ (__accu0__.append, __accu0__, 'heading-inline');
/* 000691 */ 			}) ();
/* 000691 */ 		}
/* 000693 */ 		var attrs = dict ({});
/* 000694 */ 		if (__t__ (target_id !== null)) {
/* 000695 */ 			__setitem__ (attrs, 'id', target_id);
/* 000695 */ 		}
/* 000697 */ 		(function () {
/* 000697 */ 			var __accu0__ = self;
/* 000697 */ 			return __call__ (__accu0__._merge_meta_info_data_attrs, __accu0__, attrs, heading_nodelist, 'heading', render_context);
/* 000697 */ 		}) ();
/* 000699 */ 		var content = (function () {
/* 000699 */ 			var __accu0__ = self;
/* 000701 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, __getitem__ (self.heading_tags_by_level, heading_level), (function () {
/* 000701 */ 				var __accu1__ = self;
/* 000701 */ 				return __call__ (__accu1__.render_inline_content, __accu1__, heading_nodelist, render_context);
/* 000701 */ 			}) (), __kwargtrans__ ({class_names: annot, attrs: attrs}));
/* 000701 */ 		}) ();
/* 000705 */ 		if (__t__ (__t__ (inline_heading) && self.inline_heading_add_space)) {
/* 000706 */ 			var content = __call__ (__iadd__, null, content, ' ');
/* 000706 */ 		}
/* 000707 */ 		// pass;
/* 000712 */ 		return content;
/* 000712 */ 	});},
/* 000714 */ 	get render_link () {return __get__ (this, function (self, ref_type, href, display_nodelist, render_context, annotations) {
/* 000714 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000714 */ 			var annotations = null;
/* 000714 */ 		};
/* 000714 */ 		if (arguments.length) {
/* 000714 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000714 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000714 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000714 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000714 */ 					switch (__attrib0__) {
/* 000714 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000714 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000714 */ 						case 'href': var href = __allkwargs0__ [__attrib0__]; break;
/* 000714 */ 						case 'display_nodelist': var display_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000714 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000714 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000714 */ 					}
/* 000714 */ 				}
/* 000714 */ 			}
/* 000714 */ 		}
/* 000714 */ 		else {
/* 000714 */ 		}
/* 000715 */ 		var display_content = (function () {
/* 000715 */ 			var __accu0__ = self;
/* 000715 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, display_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000715 */ 		}) ();
/* 000720 */ 		if (__t__ (__t__ (!__t__ ((href))) && !__t__ ((self.render_links_with_empty_href)))) {
/* 000721 */ 			return display_content;
/* 000721 */ 		}
/* 000723 */ 		var data_attrs = (function () {
/* 000723 */ 			var __accu0__ = self;
/* 000723 */ 			return __call__ (__accu0__._get_meta_info_data_attrs, __accu0__, display_nodelist, 'link', render_context);
/* 000723 */ 		}) ();
/* 000725 */ 		return (function () {
/* 000725 */ 			var __accu0__ = self;
/* 000725 */ 			return __call__ (__accu0__.wrap_in_link, __accu0__, display_content, href, __kwargtrans__ ({class_names: __add__ (['href-{}'.format (ref_type)], (__t__ (annotations) ? annotations : [])), attrs: data_attrs}));
/* 000725 */ 		}) ();
/* 000725 */ 	});},
/* 000732 */ 	get render_annotation_comment () {return __get__ (this, function (self, display_nodelist, render_context, is_block_level, color_index, initials) {
/* 000732 */ 		if (typeof is_block_level == 'undefined' || (is_block_level != null && is_block_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000732 */ 			var is_block_level = false;
/* 000732 */ 		};
/* 000732 */ 		if (typeof color_index == 'undefined' || (color_index != null && color_index.hasOwnProperty ("__kwargtrans__"))) {;
/* 000732 */ 			var color_index = 0;
/* 000732 */ 		};
/* 000732 */ 		if (typeof initials == 'undefined' || (initials != null && initials.hasOwnProperty ("__kwargtrans__"))) {;
/* 000732 */ 			var initials = null;
/* 000732 */ 		};
/* 000732 */ 		if (arguments.length) {
/* 000732 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000732 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000732 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000732 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000732 */ 					switch (__attrib0__) {
/* 000732 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000732 */ 						case 'display_nodelist': var display_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000732 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000732 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000732 */ 						case 'color_index': var color_index = __allkwargs0__ [__attrib0__]; break;
/* 000732 */ 						case 'initials': var initials = __allkwargs0__ [__attrib0__]; break;
/* 000732 */ 					}
/* 000732 */ 				}
/* 000732 */ 			}
/* 000732 */ 		}
/* 000732 */ 		else {
/* 000732 */ 		}
/* 000740 */ 		var content = (function () {
/* 000740 */ 			var __accu0__ = self;
/* 000740 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, display_nodelist, render_context);
/* 000740 */ 		}) ();
/* 000741 */ 		if (__t__ (initials)) {
/* 000742 */ 			var content = __add__ (__add__ (__add__ ('<span class="annotation-initials">', initials), '</span>'), content);
/* 000742 */ 		}
/* 000744 */ 		var data_attrs = (function () {
/* 000744 */ 			var __accu0__ = self;
/* 000744 */ 			return __call__ (__accu0__._get_meta_info_data_attrs, __accu0__, display_nodelist, 'annotation-comment', render_context);
/* 000744 */ 		}) ();
/* 000747 */ 		return (function () {
/* 000747 */ 			var __accu0__ = self;
/* 000747 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, (__t__ (is_block_level) ? 'div' : 'span'), content, __kwargtrans__ ({class_names: ['annotation', 'annotation-comment', 'annotation-{}'.format (color_index)], attrs: data_attrs}));
/* 000747 */ 		}) ();
/* 000747 */ 	});},
/* 000757 */ 	get render_annotation_highlight () {return __get__ (this, function (self, display_nodelist, render_context, is_block_level, color_index, initials) {
/* 000757 */ 		if (typeof is_block_level == 'undefined' || (is_block_level != null && is_block_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000757 */ 			var is_block_level = false;
/* 000757 */ 		};
/* 000757 */ 		if (typeof color_index == 'undefined' || (color_index != null && color_index.hasOwnProperty ("__kwargtrans__"))) {;
/* 000757 */ 			var color_index = 0;
/* 000757 */ 		};
/* 000757 */ 		if (typeof initials == 'undefined' || (initials != null && initials.hasOwnProperty ("__kwargtrans__"))) {;
/* 000757 */ 			var initials = null;
/* 000757 */ 		};
/* 000757 */ 		if (arguments.length) {
/* 000757 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000757 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000757 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000757 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000757 */ 					switch (__attrib0__) {
/* 000757 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000757 */ 						case 'display_nodelist': var display_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000757 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000757 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000757 */ 						case 'color_index': var color_index = __allkwargs0__ [__attrib0__]; break;
/* 000757 */ 						case 'initials': var initials = __allkwargs0__ [__attrib0__]; break;
/* 000757 */ 					}
/* 000757 */ 				}
/* 000757 */ 			}
/* 000757 */ 		}
/* 000757 */ 		else {
/* 000757 */ 		}
/* 000765 */ 		var content = (function () {
/* 000765 */ 			var __accu0__ = self;
/* 000765 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, display_nodelist, render_context);
/* 000765 */ 		}) ();
/* 000766 */ 		if (__t__ (initials)) {
/* 000767 */ 			var content = __add__ (__add__ (__add__ ('<span class="annotation-initials">', initials), '</span>'), content);
/* 000767 */ 		}
/* 000769 */ 		var data_attrs = (function () {
/* 000769 */ 			var __accu0__ = self;
/* 000769 */ 			return __call__ (__accu0__._get_meta_info_data_attrs, __accu0__, display_nodelist, 'annotation-highlight', render_context);
/* 000769 */ 		}) ();
/* 000772 */ 		return (function () {
/* 000772 */ 			var __accu0__ = self;
/* 000772 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, (__t__ (is_block_level) ? 'div' : 'span'), content, __kwargtrans__ ({class_names: ['annotation', 'annotation-highlight', 'annotation-{}'.format (color_index)], attrs: data_attrs}));
/* 000772 */ 		}) ();
/* 000772 */ 	});},
/* 000783 */ 	get render_delayed_marker () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000783 */ 		if (arguments.length) {
/* 000783 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000783 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000783 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000783 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000783 */ 					switch (__attrib0__) {
/* 000783 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000783 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000783 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000783 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000783 */ 					}
/* 000783 */ 				}
/* 000783 */ 			}
/* 000783 */ 		}
/* 000783 */ 		else {
/* 000783 */ 		}
/* 000784 */ 		return '<FLM:DLYD:{}/>'.format (delayed_key);
/* 000784 */ 	});},
/* 000786 */ 	get render_delayed_dummy_placeholder () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000786 */ 		if (arguments.length) {
/* 000786 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000786 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000786 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000786 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000786 */ 					switch (__attrib0__) {
/* 000786 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000786 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000786 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000786 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000786 */ 					}
/* 000786 */ 				}
/* 000786 */ 			}
/* 000786 */ 		}
/* 000786 */ 		else {
/* 000786 */ 		}
/* 000787 */ 		return '<!-- delayed:{} -->'.format (delayed_key);
/* 000787 */ 	});},
/* 000789 */ 	get replace_delayed_markers_with_final_values () {return __get__ (this, function (self, content, delayed_values) {
/* 000789 */ 		if (arguments.length) {
/* 000789 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000789 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000789 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000789 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000789 */ 					switch (__attrib0__) {
/* 000789 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000789 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000789 */ 						case 'delayed_values': var delayed_values = __allkwargs0__ [__attrib0__]; break;
/* 000789 */ 					}
/* 000789 */ 				}
/* 000789 */ 			}
/* 000789 */ 		}
/* 000789 */ 		else {
/* 000789 */ 		}
/* 000790 */ 		return (function () {
/* 000790 */ 			var __accu0__ = _rx_delayed_markers;
/* 000790 */ 			return __call__ (__accu0__.sub, __accu0__, (function __lambda__ (m) {
/* 000790 */ 				if (arguments.length) {
/* 000790 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000790 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000790 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000790 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000790 */ 							switch (__attrib0__) {
/* 000790 */ 								case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000790 */ 							}
/* 000790 */ 						}
/* 000790 */ 					}
/* 000790 */ 				}
/* 000790 */ 				else {
/* 000790 */ 				}
/* 000791 */ 				return __getitem__ (delayed_values, __call__ (int, null, (function () {
/* 000791 */ 					var __accu1__ = m;
/* 000791 */ 					return __call__ (__accu1__.group, __accu1__, 'key');
/* 000791 */ 				}) ()));
/* 000791 */ 			}), content);
/* 000791 */ 		}) ();
/* 000791 */ 	});},
/* 000798 */ 	get render_float () {return __get__ (this, function (self, float_instance, render_context) {
/* 000798 */ 		if (arguments.length) {
/* 000798 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000798 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000798 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000798 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000798 */ 					switch (__attrib0__) {
/* 000798 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000798 */ 						case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000798 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000798 */ 					}
/* 000798 */ 				}
/* 000798 */ 			}
/* 000798 */ 		}
/* 000798 */ 		else {
/* 000798 */ 		}
/* 000801 */ 		var figattrs = dict ({});
/* 000803 */ 		if (__t__ (float_instance.target_id !== null)) {
/* 000804 */ 			__setitem__ (figattrs, 'id', float_instance.target_id);
/* 000804 */ 		}
/* 000806 */ 		var full_figcaption_rendered_list = [];
/* 000807 */ 		if (__t__ (float_instance.counter_value !== null)) {
/* 000809 */ 			(function () {
/* 000809 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000810 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000810 */ 					var __accu1__ = self;
/* 000812 */ 					return __call__ (__accu1__.wrap_in_tag, __accu1__, 'span', (function () {
/* 000812 */ 						var __accu2__ = self;
/* 000813 */ 						return __call__ (__accu2__.render_join, __accu2__, [(function () {
/* 000813 */ 							var __accu3__ = self;
/* 000813 */ 							return __call__ (__accu3__.render_value, __accu3__, float_instance.float_type_info.float_caption_name, render_context);
/* 000818 */ 						}) (), '&nbsp;', (function () {
/* 000818 */ 							var __accu3__ = self;
/* 000818 */ 							return __call__ (__accu3__.render_nodelist, __accu3__, float_instance.formatted_counter_value_flm.nodes, __kwargtrans__ ({render_context: render_context}));
/* 000818 */ 						}) ()], render_context);
/* 000818 */ 					}) (), __kwargtrans__ ({class_names: ['float-number']}));
/* 000818 */ 				}) ());
/* 000818 */ 			}) ();
/* 000818 */ 		}
/* 000826 */ 		else if (__t__ (float_instance.caption_nodelist)) {
/* 000829 */ 			(function () {
/* 000829 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000830 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000830 */ 					var __accu1__ = self;
/* 000832 */ 					return __call__ (__accu1__.wrap_in_tag, __accu1__, 'span', (function () {
/* 000832 */ 						var __accu2__ = self;
/* 000833 */ 						return __call__ (__accu2__.render_join, __accu2__, [(function () {
/* 000833 */ 							var __accu3__ = self;
/* 000833 */ 							return __call__ (__accu3__.render_value, __accu3__, float_instance.float_type_info.float_caption_name, render_context);
/* 000833 */ 						}) ()], render_context);
/* 000833 */ 					}) (), __kwargtrans__ ({class_names: ['float-no-number']}));
/* 000833 */ 				}) ());
/* 000833 */ 			}) ();
/* 000833 */ 		}
/* 000839 */ 		else {
/* 000843 */ 			// pass;
/* 000843 */ 		}
/* 000845 */ 		if (__t__ (float_instance.caption_nodelist)) {
/* 000849 */ 			(function () {
/* 000849 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000849 */ 				return __call__ (__accu0__.append, __accu0__, self.float_caption_title_separator);
/* 000849 */ 			}) ();
/* 000854 */ 			(function () {
/* 000854 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000855 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000855 */ 					var __accu1__ = self;
/* 000855 */ 					return __call__ (__accu1__.render_nodelist, __accu1__, float_instance.caption_nodelist, __kwargtrans__ ({render_context: render_context}));
/* 000855 */ 				}) ());
/* 000855 */ 			}) ();
/* 000855 */ 		}
/* 000861 */ 		var rendered_float_caption = null;
/* 000862 */ 		if (__t__ (full_figcaption_rendered_list)) {
/* 000863 */ 			var rendered_float_caption = (function () {
/* 000863 */ 				var __accu0__ = self;
/* 000865 */ 				return __call__ (__accu0__.wrap_in_tag, __accu0__, 'figcaption', (function () {
/* 000865 */ 					var __accu1__ = self;
/* 000867 */ 					return __call__ (__accu1__.wrap_in_tag, __accu1__, 'span', (function () {
/* 000867 */ 						var __accu2__ = self;
/* 000867 */ 						return __call__ (__accu2__.render_join, __accu2__, full_figcaption_rendered_list, render_context);
/* 000867 */ 					}) ());
/* 000867 */ 				}) (), __kwargtrans__ ({class_names: ['float-caption-content']}));
/* 000867 */ 			}) ();
/* 000867 */ 		}
/* 000872 */ 		var float_content_block_content = (function () {
/* 000872 */ 			var __accu0__ = self;
/* 000872 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, float_instance.content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: true}));
/* 000872 */ 		}) ();
/* 000877 */ 		var float_content_block = (function () {
/* 000877 */ 			var __accu0__ = self;
/* 000877 */ 			return __call__ (__accu0__.render_semantic_block, __accu0__, float_content_block_content, 'float-contents', __kwargtrans__ ({render_context: render_context}));
/* 000877 */ 		}) ();
/* 000883 */ 		if (__t__ (rendered_float_caption !== null)) {
/* 000884 */ 			var float_content_with_caption = (function () {
/* 000884 */ 				var __accu0__ = self;
/* 000884 */ 				return __call__ (__accu0__.render_join_blocks, __accu0__, [float_content_block, rendered_float_caption], render_context);
/* 000884 */ 			}) ();
/* 000884 */ 		}
/* 000888 */ 		else {
/* 000889 */ 			var float_content_with_caption = float_content_block;
/* 000889 */ 		}
/* 000891 */ 		(function () {
/* 000891 */ 			var __accu0__ = self;
/* 000891 */ 			return __call__ (__accu0__._merge_meta_info_data_attrs, __accu0__, figattrs, float_instance.content_nodelist, 'float', render_context);
/* 000891 */ 		}) ();
/* 000894 */ 		var full_figure = (function () {
/* 000894 */ 			var __accu0__ = self;
/* 000894 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'figure', float_content_with_caption, __kwargtrans__ ({attrs: figattrs, class_names: ['float', 'float-{}'.format (float_instance.float_type)]}));
/* 000894 */ 		}) ();
/* 000901 */ 		return full_figure;
/* 000901 */ 	});},
/* 000904 */ 	get render_graphics_block () {return __get__ (this, function (self, graphics_resource, render_context) {
/* 000904 */ 		if (arguments.length) {
/* 000904 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000904 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000904 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000904 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000904 */ 					switch (__attrib0__) {
/* 000904 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000904 */ 						case 'graphics_resource': var graphics_resource = __allkwargs0__ [__attrib0__]; break;
/* 000904 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000904 */ 					}
/* 000904 */ 				}
/* 000904 */ 			}
/* 000904 */ 		}
/* 000904 */ 		else {
/* 000904 */ 		}
/* 000906 */ 		var imgattrs = dict ({});
/* 000908 */ 		var styparts = [];
/* 000909 */ 		if (__t__ (graphics_resource.physical_dimensions !== null)) {
/* 000911 */ 			var __left0__ = graphics_resource.physical_dimensions;
/* 000911 */ 			var width_pt = __left0__ [0];
/* 000911 */ 			var height_pt = __left0__ [1];
/* 000913 */ 			if (__t__ (__eq__ (graphics_resource.graphics_type, 'raster'))) {
/* 000914 */ 				if (__t__ (width_pt !== null)) {
/* 000915 */ 					var width_pt = __call__ (__imul__, null, width_pt, self.graphics_raster_magnification);
/* 000915 */ 				}
/* 000916 */ 				if (__t__ (height_pt !== null)) {
/* 000917 */ 					var height_pt = __call__ (__imul__, null, height_pt, self.graphics_raster_magnification);
/* 000917 */ 				}
/* 000917 */ 			}
/* 000918 */ 			else if (__t__ (__eq__ (graphics_resource.graphics_type, 'vector'))) {
/* 000919 */ 				if (__t__ (width_pt !== null)) {
/* 000920 */ 					var width_pt = __call__ (__imul__, null, width_pt, self.graphics_vector_magnification);
/* 000920 */ 				}
/* 000921 */ 				if (__t__ (height_pt !== null)) {
/* 000922 */ 					var height_pt = __call__ (__imul__, null, height_pt, self.graphics_vector_magnification);
/* 000922 */ 				}
/* 000922 */ 			}
/* 000924 */ 			if (__t__ (width_pt !== null)) {
/* 000925 */ 				(function () {
/* 000925 */ 					var __accu0__ = styparts;
/* 000925 */ 					return __call__ (__accu0__.append, __accu0__, 'width:{}pt'.format (width_pt));
/* 000925 */ 				}) ();
/* 000925 */ 			}
/* 000926 */ 			if (__t__ (height_pt !== null)) {
/* 000927 */ 				(function () {
/* 000927 */ 					var __accu0__ = styparts;
/* 000927 */ 					return __call__ (__accu0__.append, __accu0__, 'height:{}pt'.format (height_pt));
/* 000927 */ 				}) ();
/* 000927 */ 			}
/* 000927 */ 		}
/* 000929 */ 		if (__t__ (styparts)) {
/* 000930 */ 			__setitem__ (imgattrs, 'style', (function () {
/* 000930 */ 				var __accu0__ = ';';
/* 000930 */ 				return __call__ (__accu0__.join, __accu0__, styparts);
/* 000930 */ 			}) ());
/* 000930 */ 		}
/* 000932 */ 		var src_url = graphics_resource.src_url;
/* 000933 */ 		__setitem__ (imgattrs, 'src', src_url);
/* 000936 */ 		if (__t__ (__t__ (graphics_resource.srcset !== null) && __t__ (graphics_resource.srcset) && __call__ (len, null, graphics_resource.srcset))) {
/* 000938 */ 			var srcset_items = [];
/* 000939 */ 			var __iterable0__ = graphics_resource.srcset;
/* 000939 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000939 */ 				var srcset_info = __getitem__ (__iterable0__, __index0__);
/* 000940 */ 				var ss = __getitem__ (srcset_info, 'source');
/* 000941 */ 				if (__t__ (__in__ ('pixel_density', srcset_info))) {
/* 000942 */ 					var pixel_density = __getitem__ (srcset_info, 'pixel_density');
/* 000943 */ 					var ss = __call__ (__iadd__, null, ss, ' {}x'.format (pixel_density));
/* 000943 */ 				}
/* 000945 */ 				(function () {
/* 000945 */ 					var __accu0__ = srcset_items;
/* 000945 */ 					return __call__ (__accu0__.append, __accu0__, ss);
/* 000945 */ 				}) ();
/* 000945 */ 			}
/* 000947 */ 			__setitem__ (imgattrs, 'srcset', (function () {
/* 000947 */ 				var __accu0__ = ', ';
/* 000947 */ 				return __call__ (__accu0__.join, __accu0__, srcset_items);
/* 000947 */ 			}) ());
/* 000947 */ 		}
/* 000950 */ 		return (function () {
/* 000950 */ 			var __accu0__ = self;
/* 000950 */ 			return __call__ (__accu0__.generate_open_tag, __accu0__, 'img', __kwargtrans__ ({attrs: imgattrs}));
/* 000950 */ 		}) ();
/* 000950 */ 	});},
/* 000953 */ 	get render_cells () {return __get__ (this, function (self, cells_model, render_context, target_id) {
/* 000953 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000953 */ 			var target_id = null;
/* 000953 */ 		};
/* 000953 */ 		if (arguments.length) {
/* 000953 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000953 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000953 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000953 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000953 */ 					switch (__attrib0__) {
/* 000953 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000953 */ 						case 'cells_model': var cells_model = __allkwargs0__ [__attrib0__]; break;
/* 000953 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000953 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000953 */ 					}
/* 000953 */ 				}
/* 000953 */ 			}
/* 000953 */ 		}
/* 000953 */ 		else {
/* 000953 */ 		}
/* 000955 */ 		var __left0__ = tuple ([__call__ (len, null, cells_model.grid_data), __call__ (len, null, __getitem__ (cells_model.grid_data, 0))]);
/* 000955 */ 		var tabheight = __left0__ [0];
/* 000955 */ 		var tabwidth = __left0__ [1];
/* 000957 */ 		var data_items = [];
/* 000958 */ 		var row_j = 0;
/* 000959 */ 		while (__t__ (__lt__ (row_j, __call__ (len, null, cells_model.grid_data)))) {
/* 000960 */ 			var row_items = [];
/* 000961 */ 			var col_j = 0;
/* 000962 */ 			while (__t__ (__lt__ (col_j, __call__ (len, null, __getitem__ (cells_model.grid_data, row_j))))) {
/* 000964 */ 				var grid_cell_data = __getitem__ (__getitem__ (cells_model.grid_data, row_j), col_j);
/* 000966 */ 				if (__t__ (__t__ (grid_cell_data === null) || __getitem__ (grid_cell_data, 'cell') === null)) {
/* 000969 */ 					var clsnames = [];
/* 000970 */ 					if (__t__ (__eq__ (row_j, 0))) {
/* 000971 */ 						(function () {
/* 000971 */ 							var __accu0__ = clsnames;
/* 000971 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-top');
/* 000971 */ 						}) ();
/* 000971 */ 					}
/* 000972 */ 					if (__t__ (__eq__ (col_j, 0))) {
/* 000973 */ 						(function () {
/* 000973 */ 							var __accu0__ = clsnames;
/* 000973 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-left');
/* 000973 */ 						}) ();
/* 000973 */ 					}
/* 000974 */ 					if (__t__ (__eq__ (row_j, __sub__ (tabheight, 1)))) {
/* 000975 */ 						(function () {
/* 000975 */ 							var __accu0__ = clsnames;
/* 000975 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-bottom');
/* 000975 */ 						}) ();
/* 000975 */ 					}
/* 000976 */ 					if (__t__ (__eq__ (col_j, __sub__ (tabwidth, 1)))) {
/* 000977 */ 						(function () {
/* 000977 */ 							var __accu0__ = clsnames;
/* 000977 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-right');
/* 000977 */ 						}) ();
/* 000977 */ 					}
/* 000978 */ 					(function () {
/* 000978 */ 						var __accu0__ = row_items;
/* 000978 */ 						return __call__ (__accu0__.append, __accu0__, (function () {
/* 000978 */ 							var __accu1__ = self;
/* 000978 */ 							return __call__ (__accu1__.wrap_in_tag, __accu1__, 'td', '', __kwargtrans__ ({class_names: __add__ (['cell-empty'], clsnames)}));
/* 000978 */ 						}) ());
/* 000978 */ 					}) ();
/* 000983 */ 					var col_j = __call__ (__iadd__, null, col_j, 1);
/* 000983 */ 					continue;
/* 000983 */ 				}
/* 000986 */ 				if (__t__ (__getitem__ (grid_cell_data, 'is_topleft'))) {
/* 000988 */ 					var cell = __getitem__ (grid_cell_data, 'cell');
/* 000989 */ 					var rendered_cell_contents = (function () {
/* 000989 */ 						var __accu0__ = self;
/* 000989 */ 						return __call__ (__accu0__.render_nodelist, __accu0__, cell.content_nodes, __kwargtrans__ ({render_context: render_context}));
/* 000989 */ 					}) ();
/* 000993 */ 					var clsnames = __add__ (['cell'], (function () {
/* 000993 */ 						var __accu0__ = [];
/* 000993 */ 						var __iterable0__ = cell.styles;
/* 000993 */ 						for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000993 */ 							var sty = __getitem__ (__iterable0__, __index0__);
/* 000993 */ 							(function () {
/* 000993 */ 								var __accu1__ = __accu0__;
/* 000993 */ 								return __call__ (__accu1__.append, __accu1__, 'cellstyle-{}'.format (sty));
/* 000993 */ 							}) ();
/* 000993 */ 						}
/* 000993 */ 						return __accu0__;
/* 000993 */ 					}) ());
/* 000994 */ 					if (__t__ (__eq__ (row_j, 0))) {
/* 000995 */ 						(function () {
/* 000995 */ 							var __accu0__ = clsnames;
/* 000995 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-top');
/* 000995 */ 						}) ();
/* 000995 */ 					}
/* 000996 */ 					if (__t__ (__eq__ (col_j, 0))) {
/* 000997 */ 						(function () {
/* 000997 */ 							var __accu0__ = clsnames;
/* 000997 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-left');
/* 000997 */ 						}) ();
/* 000997 */ 					}
/* 000998 */ 					if (__t__ (__eq__ (cell.placement.row_range.end, tabheight))) {
/* 000999 */ 						(function () {
/* 000999 */ 							var __accu0__ = clsnames;
/* 000999 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-bottom');
/* 000999 */ 						}) ();
/* 000999 */ 					}
/* 001000 */ 					if (__t__ (__eq__ (cell.placement.col_range.end, tabwidth))) {
/* 001001 */ 						(function () {
/* 001001 */ 							var __accu0__ = clsnames;
/* 001001 */ 							return __call__ (__accu0__.append, __accu0__, 'celltbledge-right');
/* 001001 */ 						}) ();
/* 001001 */ 					}
/* 001002 */ 					var tagname = 'td';
/* 001003 */ 					if (__t__ (__t__ (__in__ ('H', cell.styles)) || __in__ ('rH', cell.styles))) {
/* 001004 */ 						var tagname = 'th';
/* 001004 */ 					}
/* 001005 */ 					var attrs = dict ({});
/* 001006 */ 					var cplc = cell.placement;
/* 001007 */ 					if (__t__ (__ne__ (cplc.col_range.end, __add__ (cplc.col_range.start, 1)))) {
/* 001010 */ 						__setitem__ (attrs, 'colspan', __call__ (str, null, __sub__ (cplc.col_range.end, cplc.col_range.start)));
/* 001010 */ 					}
/* 001011 */ 					if (__t__ (__ne__ (cplc.row_range.end, __add__ (cplc.row_range.start, 1)))) {
/* 001013 */ 						__setitem__ (attrs, 'rowspan', __call__ (str, null, __sub__ (cplc.row_range.end, cplc.row_range.start)));
/* 001013 */ 					}
/* 001014 */ 					(function () {
/* 001014 */ 						var __accu0__ = row_items;
/* 001015 */ 						return __call__ (__accu0__.append, __accu0__, (function () {
/* 001015 */ 							var __accu1__ = self;
/* 001015 */ 							return __call__ (__accu1__.wrap_in_tag, __accu1__, tagname, rendered_cell_contents, __kwargtrans__ ({attrs: attrs, class_names: clsnames}));
/* 001015 */ 						}) ());
/* 001015 */ 					}) ();
/* 001022 */ 					var col_j = cplc.col_range.end;
/* 001022 */ 					continue;
/* 001022 */ 				}
/* 001027 */ 				var col_j = __call__ (__iadd__, null, col_j, 1);
/* 001027 */ 			}
/* 001029 */ 			(function () {
/* 001029 */ 				var __accu0__ = data_items;
/* 001029 */ 				return __call__ (__accu0__.append, __accu0__, row_items);
/* 001029 */ 			}) ();
/* 001030 */ 			var row_j = __call__ (__iadd__, null, row_j, 1);
/* 001030 */ 		}
/* 001032 */ 		var table_attrs = dict ({});
/* 001033 */ 		if (__t__ (target_id !== null)) {
/* 001034 */ 			__setitem__ (table_attrs, 'id', target_id);
/* 001034 */ 		}
/* 001036 */ 		if (__t__ (__call__ (len, null, cells_model.cells_data))) {
/* 001037 */ 			var first_cell_nodes = __getitem__ (cells_model.cells_data, 0).content_nodes;
/* 001038 */ 			(function () {
/* 001038 */ 				var __accu0__ = self;
/* 001038 */ 				return __call__ (__accu0__._merge_meta_info_data_attrs, __accu0__, table_attrs, first_cell_nodes, 'cells', render_context);
/* 001038 */ 			}) ();
/* 001038 */ 		}
/* 001041 */ 		var s = (function () {
/* 001041 */ 			var __accu0__ = self;
/* 001043 */ 			return __call__ (__accu0__.wrap_in_tag, __accu0__, 'table', (function () {
/* 001043 */ 				var __accu1__ = '';
/* 001043 */ 				return __call__ (__accu1__.join, __accu1__, (function () {
/* 001043 */ 					var __accu2__ = [];
/* 001043 */ 					var __iterable0__ = data_items;
/* 001043 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001045 */ 						var row_items = __getitem__ (__iterable0__, __index0__);
/* 001045 */ 						(function () {
/* 001045 */ 							var __accu3__ = __accu2__;
/* 001044 */ 							return __call__ (__accu3__.append, __accu3__, __add__ (__add__ ('<tr>', (function () {
/* 001044 */ 								var __accu4__ = '';
/* 001044 */ 								return __call__ (__accu4__.join, __accu4__, row_items);
/* 001044 */ 							}) ()), '</tr>'));
/* 001044 */ 						}) ();
/* 001044 */ 					}
/* 001044 */ 					return __accu2__;
/* 001044 */ 				}) ());
/* 001044 */ 			}) (), __kwargtrans__ ({attrs: table_attrs, class_names: ['cells']}));
/* 001044 */ 		}) ();
/* 001050 */ 		return s;
/* 001050 */ 	});}
/* 001050 */ });
/* 001056 */ export var _rx_delayed_markers = (function () {
/* 001056 */ 	var __accu0__ = re;
/* 001056 */ 	return __call__ (__accu0__.compile, __accu0__, '<FLM:DLYD:(?P<key>\\d+)\\s*/>');
/* 001056 */ }) ();
/* 001063 */ export var _html_css_global = '\np, ul, ol, .p-block {\n  margin: 1em 0px;\n}\np:first-child, ul:first-child, ol:first-child, .p-block:first-child {\n  margin-top: 0px;\n}\np:last-child, ul:last-child, ol:last-child, .p-block:last-child {\n  margin-bottom: 0px;\n}\ndd > p, dd > p:first-child, dd > p:last-child {\n  margin: 0.33em 0px;\n}\n\na, a:link, a:hover, a:active, a:visited {\n  color: #3232c8;\n  text-decoration: none;\n}\na:hover {\n  color: #22228a;\n}\n';
/* 001086 */ export var _html_css_content = "\n.emph, .textit {\n  font-style: italic;\n}\n.textbf {\n  font-weight: bold;\n}\n\nh1 {\n  font-size: 1.6rem;\n  line-height: 1.3em;\n  font-weight: bold;\n  margin: 1em 0px;\n}\nh2 {\n  font-size: 1.3rem;\n  line-height: 1.3em;\n  font-weight: bold;\n  margin: 1em 0px;\n}\nh3 {\n  font-size: 1rem;\n  font-weight: bold;\n  margin: 1em 0px;\n}\n\n.heading-level-4 {\n  font-style: italic;\n  display: inline;\n}\n.heading-level-4::after {\n  display: inline-block;\n  margin: 0px .12em;\n  content: '—';\n}\n\n.heading-level-5 {\n  font-style: italic;\n  font-size: .9em;\n  display: inline;\n}\n.heading-level-5::after {\n  display: inline-block;\n  margin-right: .12em;\n  content: '';\n}\n\n.heading-level-6 {\n  font-style: italic;\n  font-size: .8em;\n  display: inline;\n}\n.heading-level-6::after {\n  display: inline-block;\n  margin-right: .06em;\n  content: '';\n}\n\n\n.heading-level-theorem {\n  font-weight: bold;\n}\n.heading-level-theorem::after {\n  font-weight: bold;\n  display: inline-block;\n  margin: 0px .12em 0px 0px;\n  content: '.';\n}\n\ndiv.prooflike > p > .heading-level-theorem,\ndiv.prooflike > p > .heading-level-theorem::after {\n  font-weight: normal;\n  font-style: italic;\n}\n\n\ndl.enumeration {\n  display: block;\n  margin-left: 2.5em;\n}\ndl.enumeration > dt {\n  float: left;\n  clear: left;\n  display: inline-block;\n  /*margin: 0px; */\n  margin-left: -2.5em;\n  min-width: 2.0em;\n  /* messes up wide labels, e.g. in {description} items: */\n  /* width: 2.0em;  max-width: 2.0em;*/\n  margin-right: 0.5em;\n  text-align: right;\n}\ndl.enumeration > dd {\n  /*display: inline-block;\n  width: 100%;*/\n  border: 0px;\n  padding: 0px;\n  margin: 0px;\n}\n\nfigure.float {\n  width: 100%;\n  border-width: 1px 0px 1px 0px;\n  border-style: solid none solid none;\n  border-color: rgba(120, 120, 140, 0.15);\n  margin: 0.5rem 0px;\n  padding: 0.5rem 0px;\n}\n\nfigure.float .float-contents {\n  width: 100%;\n  max-width: 100%;\n  overflow-x: auto;\n}\n\nfigure.float .float-contents img {\n  display: block;\n  margin: 0pt auto;\n  padding: 0pt;\n  border: 0pt;\n  margin: 0px auto;\n}\n\nfigure.float figcaption {\n  display: block;\n  margin-top: 0.5em;\n  margin: 0.75em 2em 0px;\n  text-align: center;\n}\n\nfigure.float figcaption > span {\n  display: inline-block;\n  font-style: italic;\n  text-align: left;\n}\n\ntable {\n  margin: 1em 0px 1em 0px;\n  border-collapse: separate;\n  border-spacing: 0px;\n  /*border-top: solid 1pt;\n  border-bottom: solid 1pt;*/\n}\nfigure.float .float-contents table {\n  margin: 0px auto;\n}\ntd {\n  padding: 0.3em 0.5em;\n  border: none 0px;\n}\nth {\n  padding: 0.3em 0.5em;\n  border: none 0px;\n}\n.cellstyle-H {\n  border-bottom: solid .5pt;\n}\n.cellstyle-rH {\n}\n.cellstyle-l {\n  text-align: left;\n}\n.cellstyle-c {\n  text-align: center;\n}\n.cellstyle-r {\n  text-align: right;\n}\n.cellstyle-green {\n  background-color: rgba(69, 255, 69, 0.31); /*rgb(200,255,200);*/\n}\n.cellstyle-blue {\n  background-color: rgba(79, 142, 255, 0.27); /*rgb(200,220,255);*/\n}\n.cellstyle-yellow {\n  background-color: rgba(255, 255, 49, 0.33); /*rgb(255,255,200);*/\n}\n.cellstyle-red {\n  background-color: rgba(255,120,120,0.30);  /*rgb(255,200,200);*/\n}\n.cellstyle-lvert {\n  border-left: solid .5pt;\n}\n.cellstyle-rvert {\n  border-right: solid .5pt;\n}\n\n.celltbledge-top {\n  border-top: solid 1pt;\n}\n.celltbledge-bottom {\n  border-bottom: solid 1pt;\n}\n\n.verbatimcode {\n  font-family: monospace;\n  font-size: 0.9em;\n  background-color: rgba(127,127,127,0.25);\n  border-radius: 2px;\n  padding: 1px 2px;\n  display: inline-block;\n  white-space: pre-wrap;\n}\n.verbatima {\n  font-style: italic;\n}\n.verbatimcode-environment {\n  display: block;\n  margin: 0.75em 0px 1em;\n  white-space: pre;\n}\n\n.defterm {\n  font-style: italic;\n  margin: 1em 0px;\n}\n.defterm:first-child {\n  margin-top: 0px;\n}\n.defterm:last-child {\n  margin-bottom: 0px;\n}\n\n.defterm .defterm-term, .defterm .term-in-defining-defterm {\n  font-style: italic;\n  font-weight: bold;\n}\n\n.display-math {\n  width: 100%;\n  max-width: 100%;\n  display: block;\n  overflow-x: auto;\n}\n\n.endnote {\n}\n.citation {\n}\n.footnote {\n}\n.endnote-marks, .citation-marks {\n  font-size: 0.8em;\n  display: inline-block;\n  vertical-align: 0.3em;\n  margin-top: -0.3em;\n}\ndl.citation-list > dt, dl.footnote-list > dt {\n  font-size: 0.8em;\n  display: inline-block;\n  vertical-align: 0.3em;\n  margin-top: -0.3em;\n}\n\n.annotation {\n  color: var(--annotation-color);\n}\n.annotation-comment {\n  padding: 3pt 0px;\n  font-weight: 600;\n  font-family: sans-serif;\n}\n.annotation-comment::before {\n  content: '['\n}\n.annotation-comment::after {\n  content: ']'\n}\n.annotation-initials {\n  display: inline-block;\n  margin-right: 0.3em;\n  font-family: sans-serif;\n  font-size: .8em;\n  font-weight: normal;\n  font-style: normal;\n  line-height: .9;\n  padding: .5pt;\n  border: solid .4pt var(--annotation-color);\n  border-radius: 2pt;\n\n  float: right;\n  margin-right: -4em;\n}\n.annotation-0 {\n  --annotation-color: rgb(148,7,24); /* dark red / burgundy */\n}\n.annotation-1 {\n  --annotation-color: rgb(0,148,240); /* blue-y */\n}\n.annotation-2 {\n  --annotation-color: rgb(242,108,13); /* orange-brown-y */\n}\n.annotation-3 {\n  --annotation-color: rgb(65,149,42); /* green-y */\n}\n.annotation-4 {\n  --annotation-color: rgb(128,55,134); /* purple-y */\n}\n.annotation-5 {\n  --annotation-color: rgb(0,129,129); /* blue-green-y */\n}\n.annotation-6 {\n  --annotation-color: rgb(160,120,0); /* brownish */\n}\n.annotation-7 {\n  --annotation-color: rgb(35,195,155); /* aqua-ish */\n}\n\n\n.quote, .address, .blockquote {\n  margin: 1em 0;\n}\n.quote {\n  background: rgba(120, 140, 150, 0.15);\n  padding: 1em 3em;\n}\n.quote .quote-lines,\n.quote .quote-text {\n  font-style: italic;\n  margin: 0.5em 0;\n}\n.quote .quote-lines + .quote-lines {\n  margin-top: 1em;\n}\n.quote .quote-lines .quote-lines-indent {\n  display: inline-block;\n  width: 2.5em;\n}\n.quote-attributed {\n  margin: 0.5em 0;\n  text-align: right;\n}\n.quote .quote-attributed::before {\n  content: '—';\n}\n.quote-block {\n  padding-left: 1em;\n  border-left: solid 4pt rgba(120, 140, 150, 0.3)  ;\n}\n\n.address .quote-lines {\n  font-size: .933em;\n}\n\n.blockquote {\n  padding: 0 1em;\n}\n\n";
/* 001437 */ export var _html_js_mathjax = '\nMathJax = {\n    tex: {\n        inlineMath: [[\'\\\\(\', \'\\\\)\']],\n        displayMath: [[\'\\\\[\', \'\\\\]\']],\n        processEnvironments: true,\n        processRefs: true,\n\n        // equation numbering on\n        tags: \'ams\'\n    },\n    options: {\n        // all MathJax content is marked with CSS classes\n        // skipHtmlTags: \'body\',\n        // processHtmlClass: \'display-math|inline-math\',\n    },\n    startup: {\n        pageReady: function() {\n            // override the default "typeset everything on the page" behavior to\n            // only typeset whatever we have explicitly marked as math\n            return typesetPageMathPromise();\n        }\n    }\n};\nfunction typesetPageMathPromise()\n{\n    var elements = document.querySelectorAll(\'.display-math, .inline-math\');\n    return MathJax.typesetPromise(elements);\n}\n';
/* 001468 */ export var _html_body_end_js_scripts_mathjax = '\n<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>\n';
/* 001475 */ export var get_html_css_global = function (html_fragment_renderer) {
/* 001475 */ 	if (arguments.length) {
/* 001475 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001475 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001475 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001475 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001475 */ 				switch (__attrib0__) {
/* 001475 */ 					case 'html_fragment_renderer': var html_fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 001475 */ 				}
/* 001475 */ 			}
/* 001475 */ 		}
/* 001475 */ 	}
/* 001475 */ 	else {
/* 001475 */ 	}
/* 001476 */ 	return _html_css_global;
/* 001476 */ };
/* 001478 */ export var get_html_css_content = function (html_fragment_renderer) {
/* 001478 */ 	if (arguments.length) {
/* 001478 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001478 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001478 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001478 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001478 */ 				switch (__attrib0__) {
/* 001478 */ 					case 'html_fragment_renderer': var html_fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 001478 */ 				}
/* 001478 */ 			}
/* 001478 */ 		}
/* 001478 */ 	}
/* 001478 */ 	else {
/* 001478 */ 	}
/* 001479 */ 	return _html_css_content;
/* 001479 */ };
/* 001481 */ export var get_html_js = function (html_fragment_renderer) {
/* 001481 */ 	if (arguments.length) {
/* 001481 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001481 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001481 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001481 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001481 */ 				switch (__attrib0__) {
/* 001481 */ 					case 'html_fragment_renderer': var html_fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 001481 */ 				}
/* 001481 */ 			}
/* 001481 */ 		}
/* 001481 */ 	}
/* 001481 */ 	else {
/* 001481 */ 	}
/* 001482 */ 	if (__t__ (html_fragment_renderer.use_mathjax)) {
/* 001483 */ 		return _html_js_mathjax;
/* 001483 */ 	}
/* 001484 */ 	return '';
/* 001484 */ };
/* 001486 */ export var get_html_body_end_js_scripts = function (html_fragment_renderer) {
/* 001486 */ 	if (arguments.length) {
/* 001486 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001486 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001486 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001486 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001486 */ 				switch (__attrib0__) {
/* 001486 */ 					case 'html_fragment_renderer': var html_fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 001486 */ 				}
/* 001486 */ 			}
/* 001486 */ 		}
/* 001486 */ 	}
/* 001486 */ 	else {
/* 001486 */ 	}
/* 001487 */ 	if (__t__ (html_fragment_renderer.use_mathjax)) {
/* 001488 */ 		return _html_body_end_js_scripts_mathjax;
/* 001488 */ 	}
/* 001489 */ 	return '';
/* 001489 */ };
/* 001495 */ export var FragmentRendererInformation =  __class__ ('FragmentRendererInformation', [object], {
/* 001495 */ 	__module__: __name__,
/* 001501 */ 	FragmentRendererClass: HtmlFragmentRenderer,
/* 001504 */ 	get get_style_information () {return function (fragment_renderer) {
/* 001504 */ 		if (arguments.length) {
/* 001504 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001504 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001504 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001504 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001504 */ 					switch (__attrib0__) {
/* 001504 */ 						case 'fragment_renderer': var fragment_renderer = __allkwargs0__ [__attrib0__]; break;
/* 001504 */ 					}
/* 001504 */ 				}
/* 001504 */ 			}
/* 001504 */ 		}
/* 001504 */ 		else {
/* 001504 */ 		}
/* 001509 */ 		return dict ({'css_global': __call__ (get_html_css_global, null, fragment_renderer), 'css_content': __call__ (get_html_css_content, null, fragment_renderer), 'js': __call__ (get_html_js, null, fragment_renderer), 'body_end_js_scripts': __call__ (get_html_body_end_js_scripts, null, fragment_renderer)});
/* 001509 */ 	};},
/* 001512 */ 	format_name: 'html'
/* 001512 */ });
/* 000006 */ 
//# sourceMappingURL=flm.fragmentrenderer.html.map