/* 000001 */ // Transcrypt'ed from Python, 2026-02-23 19:58:49
/* 000006 */ var logging = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000009 */ import {FragmentRenderer} from './flm.fragmentrenderer._base.js';
/* 000006 */ import * as __module_logging__ from './logging.js';
/* 000006 */ __nest__ (logging, '', __module_logging__);
/* 000006 */ export {FragmentRenderer};
/* 000001 */ var __name__ = 'flm.fragmentrenderer.text';
/* 000007 */ export var logger = (function () {
/* 000007 */ 	var __accu0__ = logging;
/* 000007 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000007 */ }) ();
/* 000012 */ export var TextFragmentRenderer =  __class__ ('TextFragmentRenderer', [FragmentRenderer], {
/* 000012 */ 	__module__: __name__,
/* 000014 */ 	display_href_urls: true,
/* 000016 */ 	float_separator_top: __mul__ ('·', 80),
/* 000017 */ 	float_separator_bottom: __mul__ ('·', 80),
/* 000022 */ 	get render_value () {return __get__ (this, function (self, value, render_context) {
/* 000022 */ 		if (arguments.length) {
/* 000022 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000022 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000022 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000022 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000022 */ 					switch (__attrib0__) {
/* 000022 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000022 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000022 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000022 */ 					}
/* 000022 */ 				}
/* 000022 */ 			}
/* 000022 */ 		}
/* 000022 */ 		else {
/* 000022 */ 		}
/* 000023 */ 		return value;
/* 000023 */ 	});},
/* 000025 */ 	get render_delayed_marker () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000025 */ 		if (arguments.length) {
/* 000025 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000025 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000025 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000025 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000025 */ 					switch (__attrib0__) {
/* 000025 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000025 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000025 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000025 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000025 */ 					}
/* 000025 */ 				}
/* 000025 */ 			}
/* 000025 */ 		}
/* 000025 */ 		else {
/* 000025 */ 		}
/* 000026 */ 		return '';
/* 000026 */ 	});},
/* 000028 */ 	get render_delayed_dummy_placeholder () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000028 */ 		if (arguments.length) {
/* 000028 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000028 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000028 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000028 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000028 */ 					switch (__attrib0__) {
/* 000028 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000028 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000028 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000028 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000028 */ 					}
/* 000028 */ 				}
/* 000028 */ 			}
/* 000028 */ 		}
/* 000028 */ 		else {
/* 000028 */ 		}
/* 000029 */ 		return '#DELAYED#';
/* 000029 */ 	});},
/* 000031 */ 	get render_nothing () {return __get__ (this, function (self, render_context, annotations) {
/* 000031 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000031 */ 			var annotations = null;
/* 000031 */ 		};
/* 000031 */ 		if (arguments.length) {
/* 000031 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000031 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000031 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000031 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000031 */ 					switch (__attrib0__) {
/* 000031 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000031 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000031 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000031 */ 					}
/* 000031 */ 				}
/* 000031 */ 			}
/* 000031 */ 		}
/* 000031 */ 		else {
/* 000031 */ 		}
/* 000032 */ 		return '';
/* 000032 */ 	});},
/* 000034 */ 	get render_empty_error_placeholder () {return __get__ (this, function (self, debug_str, render_context) {
/* 000034 */ 		if (arguments.length) {
/* 000034 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000034 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000034 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000034 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000034 */ 					switch (__attrib0__) {
/* 000034 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000034 */ 						case 'debug_str': var debug_str = __allkwargs0__ [__attrib0__]; break;
/* 000034 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000034 */ 					}
/* 000034 */ 				}
/* 000034 */ 			}
/* 000034 */ 		}
/* 000034 */ 		else {
/* 000034 */ 		}
/* 000035 */ 		return '';
/* 000035 */ 	});},
/* 000037 */ 	get render_text_format () {return __get__ (this, function (self, text_formats, nodelist, render_context) {
/* 000037 */ 		if (arguments.length) {
/* 000037 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000037 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000037 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000037 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000037 */ 					switch (__attrib0__) {
/* 000037 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000037 */ 						case 'text_formats': var text_formats = __allkwargs0__ [__attrib0__]; break;
/* 000037 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000037 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000037 */ 					}
/* 000037 */ 				}
/* 000037 */ 			}
/* 000037 */ 		}
/* 000037 */ 		else {
/* 000037 */ 		}
/* 000038 */ 		var content = (function () {
/* 000038 */ 			var __accu0__ = self;
/* 000038 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, nodelist, render_context, __kwargtrans__ ({is_block_level: false}));
/* 000038 */ 		}) ();
/* 000043 */ 		return content;
/* 000043 */ 	});},
/* 000045 */ 	get render_lines () {return __get__ (this, function (self, lines_info_list, render_context) {
/* 000045 */ 		var role = null;
/* 000045 */ 		var annotations = null;
/* 000045 */ 		var target_id = null;
/* 000045 */ 		if (arguments.length) {
/* 000045 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000045 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000045 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000045 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000045 */ 					switch (__attrib0__) {
/* 000045 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000045 */ 						case 'lines_info_list': var lines_info_list = __allkwargs0__ [__attrib0__]; break;
/* 000045 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000045 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000045 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000045 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000045 */ 					}
/* 000045 */ 				}
/* 000045 */ 			}
/* 000045 */ 		}
/* 000045 */ 		else {
/* 000045 */ 		}
/* 000048 */ 		var s_lines = [];
/* 000049 */ 		var __iterable0__ = lines_info_list;
/* 000049 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000049 */ 			var line_info = __getitem__ (__iterable0__, __index0__);
/* 000051 */ 			var s_line = (function () {
/* 000051 */ 				var __accu0__ = self;
/* 000051 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, line_info.nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000051 */ 			}) ();
/* 000057 */ 			if (__t__ (line_info.indent_left !== null)) {
/* 000058 */ 				var s_line = __add__ (__mul__ ('    ', line_info.indent_left), s_line);
/* 000058 */ 			}
/* 000063 */ 			if (__t__ (line_info.indent_right !== null)) {
/* 000064 */ 				(function () {
/* 000064 */ 					var __accu0__ = logger;
/* 000064 */ 					return __call__ (__accu0__.warning, __accu0__, 'lines indent_right not yet implemented in text renderer');
/* 000064 */ 				}) ();
/* 000064 */ 			}
/* 000065 */ 			if (__t__ (line_info.align !== null)) {
/* 000066 */ 				(function () {
/* 000066 */ 					var __accu0__ = logger;
/* 000066 */ 					return __call__ (__accu0__.warning, __accu0__, 'lines align not yet implemented in text renderer');
/* 000066 */ 				}) ();
/* 000066 */ 			}
/* 000068 */ 			(function () {
/* 000068 */ 				var __accu0__ = s_lines;
/* 000068 */ 				return __call__ (__accu0__.append, __accu0__, s_line);
/* 000068 */ 			}) ();
/* 000068 */ 		}
/* 000070 */ 		return (function () {
/* 000070 */ 			var __accu0__ = '\n';
/* 000070 */ 			return __call__ (__accu0__.join, __accu0__, s_lines);
/* 000070 */ 		}) ();
/* 000070 */ 	});},
/* 000072 */ 	get render_enumeration () {return __get__ (this, function (self, iter_items_nodelists, counter_formatter, render_context) {
/* 000072 */ 		var target_id_generator = null;
/* 000072 */ 		var annotations = null;
/* 000072 */ 		var nested_depth = 0;
/* 000072 */ 		if (arguments.length) {
/* 000072 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000072 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000072 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000072 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000072 */ 					switch (__attrib0__) {
/* 000072 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000072 */ 						case 'iter_items_nodelists': var iter_items_nodelists = __allkwargs0__ [__attrib0__]; break;
/* 000072 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000072 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000072 */ 						case 'target_id_generator': var target_id_generator = __allkwargs0__ [__attrib0__]; break;
/* 000072 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000072 */ 						case 'nested_depth': var nested_depth = __allkwargs0__ [__attrib0__]; break;
/* 000072 */ 					}
/* 000072 */ 				}
/* 000072 */ 			}
/* 000072 */ 		}
/* 000072 */ 		else {
/* 000072 */ 		}
/* 000075 */ 		var all_items = [];
/* 000076 */ 		var __iterable0__ = __call__ (enumerate, null, iter_items_nodelists);
/* 000076 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000076 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000076 */ 			var j = __left0__ [0];
/* 000076 */ 			var item_content_nodelist = __left0__ [1];
/* 000078 */ 			var item_content = (function () {
/* 000078 */ 				var __accu0__ = self;
/* 000078 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, item_content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: true}));
/* 000078 */ 			}) ();
/* 000084 */ 			var tag_nodelist = __call__ (counter_formatter, null, __add__ (1, j));
/* 000085 */ 			if (__t__ (tag_nodelist === null)) {
/* 000086 */ 				var tag_content = '?';
/* 000086 */ 			}
/* 000087 */ 			else if (__t__ (__call__ (isinstance, null, tag_nodelist, str))) {
/* 000088 */ 				var tag_content = (function () {
/* 000088 */ 					var __accu0__ = self;
/* 000088 */ 					return __call__ (__accu0__.render_value, __accu0__, tag_nodelist, render_context);
/* 000088 */ 				}) ();
/* 000088 */ 			}
/* 000089 */ 			else {
/* 000090 */ 				var tag_content = (function () {
/* 000090 */ 					var __accu0__ = self;
/* 000090 */ 					return __call__ (__accu0__.render_nodelist, __accu0__, tag_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000090 */ 				}) ();
/* 000090 */ 			}
/* 000096 */ 			if (__t__ (__gt__ (nested_depth, 0))) {
/* 000097 */ 				var tag_content = __add__ (__mul__ (' ', __mul__ (4, nested_depth)), tag_content);
/* 000097 */ 			}
/* 000099 */ 			(function () {
/* 000099 */ 				var __accu0__ = all_items;
/* 000099 */ 				return __call__ (__accu0__.append, __accu0__, tuple ([tag_content, item_content]));
/* 000099 */ 			}) ();
/* 000099 */ 		}
/* 000103 */ 		if (__t__ (!__t__ ((all_items)))) {
/* 000104 */ 			return (function () {
/* 000104 */ 				var __accu0__ = self;
/* 000104 */ 				return __call__ (__accu0__.render_semantic_block, __accu0__, '', 'enumeration', __kwargtrans__ ({render_context: render_context, annotations: annotations}));
/* 000104 */ 			}) ();
/* 000104 */ 		}
/* 000108 */ 		var max_item_width = __call__ (max, null, (function () {
/* 000108 */ 			var __accu0__ = [];
/* 000108 */ 			var __iterable0__ = all_items;
/* 000108 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000108 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000108 */ 				var fmtcnt = __left0__ [0];
/* 000108 */ 				var item_content = __left0__ [1];
/* 000108 */ 				(function () {
/* 000108 */ 					var __accu1__ = __accu0__;
/* 000108 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (len, null, fmtcnt));
/* 000108 */ 				}) ();
/* 000108 */ 			}
/* 000108 */ 			return __accu0__;
/* 000108 */ 		}) ());
/* 000110 */ 		return (function () {
/* 000110 */ 			var __accu0__ = self;
/* 000110 */ 			return __call__ (__accu0__.render_join_blocks, __accu0__, (function () {
/* 000110 */ 				var __accu1__ = [];
/* 000110 */ 				var __iterable0__ = all_items;
/* 000110 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000123 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000123 */ 					var fmtcnt = __left0__ [0];
/* 000123 */ 					var item_content = __left0__ [1];
/* 000123 */ 					(function () {
/* 000123 */ 						var __accu2__ = __accu1__;
/* 000111 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000111 */ 							var __accu3__ = self;
/* 000112 */ 							return __call__ (__accu3__.render_semantic_block, __accu3__, (function () {
/* 000112 */ 								var __accu4__ = self;
/* 000113 */ 								return __call__ (__accu4__.render_join, __accu4__, [(function () {
/* 000113 */ 									var __accu5__ = self;
/* 000114 */ 									return __call__ (__accu5__.render_value, __accu5__, __add__ ((function () {
/* 000114 */ 										var __accu6__ = fmtcnt;
/* 000114 */ 										return __call__ (__accu6__.rjust, __accu6__, __add__ (max_item_width, 2), ' ');
/* 000114 */ 									}) (), ' '), render_context);
/* 000114 */ 								}) (), item_content], render_context);
/* 000114 */ 							}) (), 'enumeration', __kwargtrans__ ({render_context: render_context, annotations: annotations}));
/* 000114 */ 						}) ());
/* 000114 */ 					}) ();
/* 000114 */ 				}
/* 000114 */ 				return __accu1__;
/* 000114 */ 			}) (), render_context);
/* 000114 */ 		}) ();
/* 000114 */ 	});},
/* 000114 */ 	heading_level_formatter: dict ({1: (function __lambda__ (s) {
/* 000114 */ 		if (arguments.length) {
/* 000114 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000114 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000114 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000114 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000114 */ 					switch (__attrib0__) {
/* 000114 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000114 */ 					}
/* 000114 */ 				}
/* 000114 */ 			}
/* 000114 */ 		}
/* 000114 */ 		else {
/* 000114 */ 		}
/* 000128 */ 		return '{}\n{}'.format (s, __mul__ ('=', __call__ (len, null, s)));
/* 000128 */ 	}), 2: (function __lambda__ (s) {
/* 000128 */ 		if (arguments.length) {
/* 000128 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000128 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000128 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000128 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000128 */ 					switch (__attrib0__) {
/* 000128 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000128 */ 					}
/* 000128 */ 				}
/* 000128 */ 			}
/* 000128 */ 		}
/* 000128 */ 		else {
/* 000128 */ 		}
/* 000129 */ 		return '{}\n{}'.format (s, __mul__ ('-', __call__ (len, null, s)));
/* 000129 */ 	}), 3: (function __lambda__ (s) {
/* 000129 */ 		if (arguments.length) {
/* 000129 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000129 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000129 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000129 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000129 */ 					switch (__attrib0__) {
/* 000129 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000129 */ 					}
/* 000129 */ 				}
/* 000129 */ 			}
/* 000129 */ 		}
/* 000129 */ 		else {
/* 000129 */ 		}
/* 000130 */ 		return '{}\n{}'.format (s, __mul__ ('~', __call__ (len, null, s)));
/* 000130 */ 	}), 4: (function __lambda__ (s) {
/* 000130 */ 		if (arguments.length) {
/* 000130 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000130 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000130 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000130 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000130 */ 					switch (__attrib0__) {
/* 000130 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000130 */ 					}
/* 000130 */ 				}
/* 000130 */ 			}
/* 000130 */ 		}
/* 000130 */ 		else {
/* 000130 */ 		}
/* 000131 */ 		return '{}  '.format (__call__ (_add_punct, null, s, ':'));
/* 000131 */ 	}), 5: (function __lambda__ (s) {
/* 000131 */ 		if (arguments.length) {
/* 000131 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000131 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000131 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000131 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000131 */ 					switch (__attrib0__) {
/* 000131 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000131 */ 					}
/* 000131 */ 				}
/* 000131 */ 			}
/* 000131 */ 		}
/* 000131 */ 		else {
/* 000131 */ 		}
/* 000132 */ 		return '    {}  '.format (__call__ (_add_punct, null, s, ':'));
/* 000132 */ 	}), 6: (function __lambda__ (s) {
/* 000132 */ 		if (arguments.length) {
/* 000132 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000132 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000132 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000132 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000132 */ 					switch (__attrib0__) {
/* 000132 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000132 */ 					}
/* 000132 */ 				}
/* 000132 */ 			}
/* 000132 */ 		}
/* 000132 */ 		else {
/* 000132 */ 		}
/* 000133 */ 		return '        {}  '.format (__call__ (_add_punct, null, s, ':'));
/* 000133 */ 	}), 'theorem': (function __lambda__ (s) {
/* 000133 */ 		if (arguments.length) {
/* 000133 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000133 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000133 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000133 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000133 */ 					switch (__attrib0__) {
/* 000133 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000133 */ 					}
/* 000133 */ 				}
/* 000133 */ 			}
/* 000133 */ 		}
/* 000133 */ 		else {
/* 000133 */ 		}
/* 000133 */ 		return '{}.  '.format (s);
/* 000127 */ 	})}),
/* 000139 */ 	get render_heading () {return __get__ (this, function (self, heading_nodelist, render_context) {
/* 000139 */ 		var heading_level = 1;
/* 000139 */ 		var inline_heading = false;
/* 000139 */ 		var target_id = null;
/* 000139 */ 		var annotations = null;
/* 000139 */ 		if (arguments.length) {
/* 000139 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000139 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000139 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000139 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000139 */ 					switch (__attrib0__) {
/* 000139 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000139 */ 						case 'heading_nodelist': var heading_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000139 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000139 */ 						case 'heading_level': var heading_level = __allkwargs0__ [__attrib0__]; break;
/* 000139 */ 						case 'inline_heading': var inline_heading = __allkwargs0__ [__attrib0__]; break;
/* 000139 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000139 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000139 */ 					}
/* 000139 */ 				}
/* 000139 */ 			}
/* 000139 */ 		}
/* 000139 */ 		else {
/* 000139 */ 		}
/* 000146 */ 		var rendered_heading = (function () {
/* 000146 */ 			var __accu0__ = self;
/* 000146 */ 			return __call__ (__accu0__.render_inline_content, __accu0__, heading_nodelist, render_context);
/* 000146 */ 		}) ();
/* 000148 */ 		if (__t__ (__in__ (heading_level, self.heading_level_formatter))) {
/* 000149 */ 			var formatter = __getitem__ (self.heading_level_formatter, heading_level);
/* 000150 */ 			return __call__ (formatter, null, rendered_heading);
/* 000150 */ 		}
/* 000152 */ 		(function () {
/* 000152 */ 			var __accu0__ = logger;
/* 000152 */ 			return __call__ (__accu0__.warning, __accu0__, 'Bad heading_level={}, expected 1..6 (or key in fragment_renderer.heading_level_formatter)'.format (heading_level));
/* 000152 */ 		}) ();
/* 000157 */ 		return '\n{}:\n'.format (rendered_heading);
/* 000157 */ 	});},
/* 000160 */ 	get render_verbatim () {return __get__ (this, function (self, value, render_context) {
/* 000160 */ 		var is_block_level = false;
/* 000160 */ 		var annotations = null;
/* 000160 */ 		var target_id = null;
/* 000160 */ 		if (arguments.length) {
/* 000160 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000160 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000160 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000160 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000160 */ 					switch (__attrib0__) {
/* 000160 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000160 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000160 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000160 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000160 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000160 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000160 */ 					}
/* 000160 */ 				}
/* 000160 */ 			}
/* 000160 */ 		}
/* 000160 */ 		else {
/* 000160 */ 		}
/* 000162 */ 		return value;
/* 000162 */ 	});},
/* 000164 */ 	get render_link () {return __get__ (this, function (self, ref_type, href, display_nodelist, render_context, annotations) {
/* 000164 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000164 */ 			var annotations = null;
/* 000164 */ 		};
/* 000164 */ 		if (arguments.length) {
/* 000164 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000164 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000164 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000164 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000164 */ 					switch (__attrib0__) {
/* 000164 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000164 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000164 */ 						case 'href': var href = __allkwargs0__ [__attrib0__]; break;
/* 000164 */ 						case 'display_nodelist': var display_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000164 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000164 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000164 */ 					}
/* 000164 */ 				}
/* 000164 */ 			}
/* 000164 */ 		}
/* 000164 */ 		else {
/* 000164 */ 		}
/* 000180 */ 		var display_content = (function () {
/* 000180 */ 			var __accu0__ = self;
/* 000180 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, display_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000180 */ 		}) ();
/* 000187 */ 		if (__t__ (__t__ (self.display_href_urls) && !__t__ (((function () {
/* 000187 */ 			var __accu0__ = href;
/* 000187 */ 			return __call__ (__accu0__.startswith, __accu0__, '#');
/* 000187 */ 		}) ())))) {
/* 000188 */ 			return '{} <{}>'.format (display_content, href);
/* 000188 */ 		}
/* 000189 */ 		return display_content;
/* 000189 */ 	});},
/* 000192 */ 	float_caption_title_separator: ': ',
/* 000194 */ 	get render_float () {return __get__ (this, function (self, float_instance, render_context) {
/* 000194 */ 		if (arguments.length) {
/* 000194 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000194 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000194 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000194 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000194 */ 					switch (__attrib0__) {
/* 000194 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000194 */ 						case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000194 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000194 */ 					}
/* 000194 */ 				}
/* 000194 */ 			}
/* 000194 */ 		}
/* 000194 */ 		else {
/* 000194 */ 		}
/* 000196 */ 		var full_figcaption_rendered_list = [];
/* 000197 */ 		if (__t__ (float_instance.counter_value !== null)) {
/* 000198 */ 			(function () {
/* 000198 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000199 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000199 */ 					var __accu1__ = self;
/* 000202 */ 					return __call__ (__accu1__.render_join, __accu1__, [float_instance.float_type_info.float_caption_name, '\xa0', (function () {
/* 000202 */ 						var __accu2__ = self;
/* 000202 */ 						return __call__ (__accu2__.render_nodelist, __accu2__, float_instance.formatted_counter_value_flm.nodes, __kwargtrans__ ({render_context: render_context}));
/* 000202 */ 					}) ()], render_context);
/* 000202 */ 				}) ());
/* 000202 */ 			}) ();
/* 000202 */ 		}
/* 000206 */ 		else if (__t__ (float_instance.caption_nodelist)) {
/* 000207 */ 			(function () {
/* 000207 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000207 */ 				return __call__ (__accu0__.append, __accu0__, float_instance.float_type_info.float_caption_name);
/* 000207 */ 			}) ();
/* 000207 */ 		}
/* 000209 */ 		else {
/* 000211 */ 			// pass;
/* 000211 */ 		}
/* 000213 */ 		if (__t__ (float_instance.caption_nodelist)) {
/* 000214 */ 			(function () {
/* 000214 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000214 */ 				return __call__ (__accu0__.append, __accu0__, self.float_caption_title_separator);
/* 000214 */ 			}) ();
/* 000219 */ 			(function () {
/* 000219 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000220 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000220 */ 					var __accu1__ = self;
/* 000220 */ 					return __call__ (__accu1__.render_nodelist, __accu1__, float_instance.caption_nodelist, __kwargtrans__ ({render_context: render_context}));
/* 000220 */ 				}) ());
/* 000220 */ 			}) ();
/* 000220 */ 		}
/* 000226 */ 		var rendered_float_caption = null;
/* 000227 */ 		if (__t__ (full_figcaption_rendered_list)) {
/* 000228 */ 			var rendered_float_caption = (function () {
/* 000228 */ 				var __accu0__ = self;
/* 000228 */ 				return __call__ (__accu0__.render_join, __accu0__, full_figcaption_rendered_list, render_context);
/* 000228 */ 			}) ();
/* 000228 */ 		}
/* 000231 */ 		var float_content_block = (function () {
/* 000231 */ 			var __accu0__ = self;
/* 000231 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, float_instance.content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: true}));
/* 000231 */ 		}) ();
/* 000237 */ 		if (__t__ (rendered_float_caption !== null)) {
/* 000238 */ 			var float_content_with_caption = (function () {
/* 000238 */ 				var __accu0__ = self;
/* 000238 */ 				return __call__ (__accu0__.render_join_blocks, __accu0__, [float_content_block, rendered_float_caption], render_context);
/* 000238 */ 			}) ();
/* 000238 */ 		}
/* 000242 */ 		else {
/* 000243 */ 			var float_content_with_caption = float_content_block;
/* 000243 */ 		}
/* 000245 */ 		return __add__ (__add__ (__add__ (__add__ (self.float_separator_top, '\n'), float_content_with_caption), '\n'), self.float_separator_bottom);
/* 000245 */ 	});},
/* 000252 */ 	get render_graphics_block () {return __get__ (this, function (self, graphics_resource, render_context) {
/* 000252 */ 		if (arguments.length) {
/* 000252 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000252 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000252 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000252 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000252 */ 					switch (__attrib0__) {
/* 000252 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000252 */ 						case 'graphics_resource': var graphics_resource = __allkwargs0__ [__attrib0__]; break;
/* 000252 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000252 */ 					}
/* 000252 */ 				}
/* 000252 */ 			}
/* 000252 */ 		}
/* 000252 */ 		else {
/* 000252 */ 		}
/* 000254 */ 		return '{}'.format (__add__ (__add__ ('[', graphics_resource.src_url), ']'));
/* 000254 */ 	});},
/* 000257 */ 	cells_column_sep: '   ',
/* 000259 */ 	get render_cells () {return __get__ (this, function (self, cells_model, render_context, target_id) {
/* 000259 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000259 */ 			var target_id = null;
/* 000259 */ 		};
/* 000259 */ 		if (arguments.length) {
/* 000259 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000259 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000259 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000259 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000259 */ 					switch (__attrib0__) {
/* 000259 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000259 */ 						case 'cells_model': var cells_model = __allkwargs0__ [__attrib0__]; break;
/* 000259 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000259 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000259 */ 					}
/* 000259 */ 				}
/* 000259 */ 			}
/* 000259 */ 		}
/* 000259 */ 		else {
/* 000259 */ 		}
/* 000262 */ 		var rendered_cells = [];
/* 000263 */ 		var __iterable0__ = cells_model.cells_data;
/* 000263 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000263 */ 			var cell = __getitem__ (__iterable0__, __index0__);
/* 000265 */ 			var rendered_cell_contents = (function () {
/* 000265 */ 				var __accu0__ = self;
/* 000265 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, cell.content_nodes, __kwargtrans__ ({render_context: render_context}));
/* 000265 */ 			}) ();
/* 000270 */ 			var rendered_cell_contents_lines = (function () {
/* 000270 */ 				var __accu0__ = rendered_cell_contents;
/* 000270 */ 				return __call__ (__accu0__.py_split, __accu0__, '\n');
/* 000270 */ 			}) ();
/* 000272 */ 			var is_header = false;
/* 000273 */ 			if (__t__ (__in__ ('H', cell.styles))) {
/* 000274 */ 				var is_header = true;
/* 000274 */ 			}
/* 000276 */ 			(function () {
/* 000276 */ 				var __accu0__ = rendered_cells;
/* 000279 */ 				return __call__ (__accu0__.append, __accu0__, dict ({'cell': cell, 'rendered_contents_lines': rendered_cell_contents_lines, 'width': __call__ (max, null, (function () {
/* 000279 */ 					var __accu1__ = [];
/* 000279 */ 					var __iterable1__ = rendered_cell_contents_lines;
/* 000279 */ 					for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000280 */ 						var line = __getitem__ (__iterable1__, __index1__);
/* 000280 */ 						(function () {
/* 000280 */ 							var __accu2__ = __accu1__;
/* 000280 */ 							return __call__ (__accu2__.append, __accu2__, __call__ (len, null, line));
/* 000280 */ 						}) ();
/* 000280 */ 					}
/* 000280 */ 					return __accu1__;
/* 000280 */ 				}) ()), 'is_header': is_header}));
/* 000280 */ 			}) ();
/* 000280 */ 		}
/* 000316 */ 		var s_items = [];
/* 000319 */ 		var __iterable0__ = rendered_cells;
/* 000319 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000319 */ 			var rcell = __getitem__ (__iterable0__, __index0__);
/* 000320 */ 			(function () {
/* 000320 */ 				var __accu0__ = s_items;
/* 000321 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000321 */ 					var __accu1__ = '\n';
/* 000321 */ 					return __call__ (__accu1__.join, __accu1__, (function () {
/* 000321 */ 						var __accu2__ = [];
/* 000321 */ 						var __iterable1__ = __getitem__ (rcell, 'rendered_contents_lines');
/* 000321 */ 						for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000321 */ 							var line = __getitem__ (__iterable1__, __index1__);
/* 000321 */ 							(function () {
/* 000321 */ 								var __accu3__ = __accu2__;
/* 000321 */ 								return __call__ (__accu3__.append, __accu3__, '    {}'.format (line));
/* 000321 */ 							}) ();
/* 000321 */ 						}
/* 000321 */ 						return __accu2__;
/* 000321 */ 					}) ());
/* 000321 */ 				}) ());
/* 000321 */ 			}) ();
/* 000321 */ 		}
/* 000324 */ 		return (function () {
/* 000324 */ 			var __accu0__ = '\n';
/* 000324 */ 			return __call__ (__accu0__.join, __accu0__, s_items);
/* 000324 */ 		}) ();
/* 000324 */ 	});}
/* 000324 */ });
/* 000329 */ export var _add_punct = function (x, c) {
/* 000329 */ 	if (arguments.length) {
/* 000329 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000329 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000329 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000329 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000329 */ 				switch (__attrib0__) {
/* 000329 */ 					case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000329 */ 					case 'c': var c = __allkwargs0__ [__attrib0__]; break;
/* 000329 */ 				}
/* 000329 */ 			}
/* 000329 */ 		}
/* 000329 */ 	}
/* 000329 */ 	else {
/* 000329 */ 	}
/* 000330 */ 	var x = __call__ (str, null, x);
/* 000331 */ 	if (__t__ (__in__ (__getslice__ ((function () {
/* 000331 */ 		var __accu0__ = x;
/* 000331 */ 		return __call__ (__accu0__.rstrip, __accu0__);
/* 000331 */ 	}) (), __neg__ (1), null, 1), '.,:;?!'))) {
/* 000332 */ 		return x;
/* 000332 */ 	}
/* 000333 */ 	return __add__ (x, c);
/* 000333 */ };
/* 000339 */ export var FragmentRendererInformation =  __class__ ('FragmentRendererInformation', [object], {
/* 000339 */ 	__module__: __name__,
/* 000340 */ 	FragmentRendererClass: TextFragmentRenderer,
/* 000341 */ 	format_name: 'text'
/* 000341 */ });
/* 000006 */ 
//# sourceMappingURL=flm.fragmentrenderer.text.map