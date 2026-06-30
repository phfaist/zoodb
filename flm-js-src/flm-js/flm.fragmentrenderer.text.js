/* 000001 */ // Transcrypt'ed from Python, 2026-06-30 21:51:26
/* 000006 */ var logging = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000011 */ import {FragmentRenderer} from './flm.fragmentrenderer._base.js';
/* 000009 */ import {Callable, Mapping} from './flm._typing_helpers.js';
/* 000006 */ import * as __module_logging__ from './logging.js';
/* 000006 */ __nest__ (logging, '', __module_logging__);
/* 000006 */ export {Callable, Mapping, FragmentRenderer};
/* 000001 */ var __name__ = 'flm.fragmentrenderer.text';
/* 000007 */ export var logger = (function () {
/* 000007 */ 	var __accu0__ = logging;
/* 000007 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000007 */ }) ();
/* 000018 */ export var TextFragmentRenderer =  __class__ ('TextFragmentRenderer', [FragmentRenderer], {
/* 000018 */ 	__module__: __name__,
/* 000029 */ 	display_href_urls: true,
/* 000031 */ 	float_separator_top: __mul__ ('·', 80),
/* 000032 */ 	float_separator_bottom: __mul__ ('·', 80),
/* 000032 */ 	heading_level_formatter: dict ({1: (function __lambda__ (s) {
/* 000032 */ 		if (arguments.length) {
/* 000032 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000032 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000032 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000032 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000032 */ 					switch (__attrib0__) {
/* 000032 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000032 */ 					}
/* 000032 */ 				}
/* 000032 */ 			}
/* 000032 */ 		}
/* 000032 */ 		else {
/* 000032 */ 		}
/* 000035 */ 		return '{}\n{}'.format (s, __mul__ ('=', __call__ (len, null, s)));
/* 000035 */ 	}), 2: (function __lambda__ (s) {
/* 000035 */ 		if (arguments.length) {
/* 000035 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000035 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000035 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000035 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000035 */ 					switch (__attrib0__) {
/* 000035 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000035 */ 					}
/* 000035 */ 				}
/* 000035 */ 			}
/* 000035 */ 		}
/* 000035 */ 		else {
/* 000035 */ 		}
/* 000036 */ 		return '{}\n{}'.format (s, __mul__ ('-', __call__ (len, null, s)));
/* 000036 */ 	}), 3: (function __lambda__ (s) {
/* 000036 */ 		if (arguments.length) {
/* 000036 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000036 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000036 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000036 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000036 */ 					switch (__attrib0__) {
/* 000036 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000036 */ 					}
/* 000036 */ 				}
/* 000036 */ 			}
/* 000036 */ 		}
/* 000036 */ 		else {
/* 000036 */ 		}
/* 000037 */ 		return '{}\n{}'.format (s, __mul__ ('~', __call__ (len, null, s)));
/* 000037 */ 	}), 4: (function __lambda__ (s) {
/* 000037 */ 		if (arguments.length) {
/* 000037 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000037 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000037 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000037 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000037 */ 					switch (__attrib0__) {
/* 000037 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000037 */ 					}
/* 000037 */ 				}
/* 000037 */ 			}
/* 000037 */ 		}
/* 000037 */ 		else {
/* 000037 */ 		}
/* 000038 */ 		return '{}  '.format (__call__ (_add_punct, null, s, ':'));
/* 000038 */ 	}), 5: (function __lambda__ (s) {
/* 000038 */ 		if (arguments.length) {
/* 000038 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000038 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000038 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000038 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000038 */ 					switch (__attrib0__) {
/* 000038 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000038 */ 					}
/* 000038 */ 				}
/* 000038 */ 			}
/* 000038 */ 		}
/* 000038 */ 		else {
/* 000038 */ 		}
/* 000039 */ 		return '    {}  '.format (__call__ (_add_punct, null, s, ':'));
/* 000039 */ 	}), 6: (function __lambda__ (s) {
/* 000039 */ 		if (arguments.length) {
/* 000039 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000039 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000039 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000039 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000039 */ 					switch (__attrib0__) {
/* 000039 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000039 */ 					}
/* 000039 */ 				}
/* 000039 */ 			}
/* 000039 */ 		}
/* 000039 */ 		else {
/* 000039 */ 		}
/* 000040 */ 		return '        {}  '.format (__call__ (_add_punct, null, s, ':'));
/* 000040 */ 	}), 'theorem': (function __lambda__ (s) {
/* 000040 */ 		if (arguments.length) {
/* 000040 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000040 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000040 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000040 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000040 */ 					switch (__attrib0__) {
/* 000040 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000040 */ 					}
/* 000040 */ 				}
/* 000040 */ 			}
/* 000040 */ 		}
/* 000040 */ 		else {
/* 000040 */ 		}
/* 000040 */ 		return '{}.  '.format (s);
/* 000034 */ 	})}),
/* 000046 */ 	float_caption_title_separator: ': ',
/* 000048 */ 	cells_column_sep: '   ',
/* 000053 */ 	get render_value () {return __get__ (this, function (self, value, render_context) {
/* 000053 */ 		if (arguments.length) {
/* 000053 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000053 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000053 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000053 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000053 */ 					switch (__attrib0__) {
/* 000053 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000053 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000053 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000053 */ 					}
/* 000053 */ 				}
/* 000053 */ 			}
/* 000053 */ 		}
/* 000053 */ 		else {
/* 000053 */ 		}
/* 000054 */ 		return value;
/* 000054 */ 	});},
/* 000056 */ 	get render_delayed_marker () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000056 */ 		if (arguments.length) {
/* 000056 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000056 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000056 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000056 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000056 */ 					switch (__attrib0__) {
/* 000056 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000056 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000056 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000056 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000056 */ 					}
/* 000056 */ 				}
/* 000056 */ 			}
/* 000056 */ 		}
/* 000056 */ 		else {
/* 000056 */ 		}
/* 000057 */ 		return '';
/* 000057 */ 	});},
/* 000059 */ 	get render_delayed_dummy_placeholder () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000059 */ 		if (arguments.length) {
/* 000059 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000059 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000059 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000059 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000059 */ 					switch (__attrib0__) {
/* 000059 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000059 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000059 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000059 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000059 */ 					}
/* 000059 */ 				}
/* 000059 */ 			}
/* 000059 */ 		}
/* 000059 */ 		else {
/* 000059 */ 		}
/* 000060 */ 		return '#DELAYED#';
/* 000060 */ 	});},
/* 000062 */ 	get render_nothing () {return __get__ (this, function (self, render_context, annotations) {
/* 000062 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000062 */ 			var annotations = null;
/* 000062 */ 		};
/* 000062 */ 		if (arguments.length) {
/* 000062 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000062 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000062 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000062 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000062 */ 					switch (__attrib0__) {
/* 000062 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000062 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000062 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000062 */ 					}
/* 000062 */ 				}
/* 000062 */ 			}
/* 000062 */ 		}
/* 000062 */ 		else {
/* 000062 */ 		}
/* 000063 */ 		return '';
/* 000063 */ 	});},
/* 000065 */ 	get render_empty_error_placeholder () {return __get__ (this, function (self, debug_str, render_context) {
/* 000065 */ 		if (arguments.length) {
/* 000065 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000065 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000065 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000065 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000065 */ 					switch (__attrib0__) {
/* 000065 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000065 */ 						case 'debug_str': var debug_str = __allkwargs0__ [__attrib0__]; break;
/* 000065 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000065 */ 					}
/* 000065 */ 				}
/* 000065 */ 			}
/* 000065 */ 		}
/* 000065 */ 		else {
/* 000065 */ 		}
/* 000066 */ 		return '';
/* 000066 */ 	});},
/* 000068 */ 	get render_text_format () {return __get__ (this, function (self, text_formats, nodelist, render_context) {
/* 000068 */ 		if (arguments.length) {
/* 000068 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000068 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000068 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000068 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000068 */ 					switch (__attrib0__) {
/* 000068 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000068 */ 						case 'text_formats': var text_formats = __allkwargs0__ [__attrib0__]; break;
/* 000068 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000068 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000068 */ 					}
/* 000068 */ 				}
/* 000068 */ 			}
/* 000068 */ 		}
/* 000068 */ 		else {
/* 000068 */ 		}
/* 000069 */ 		var content = (function () {
/* 000069 */ 			var __accu0__ = self;
/* 000069 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, nodelist, render_context, __kwargtrans__ ({is_block_level: false}));
/* 000069 */ 		}) ();
/* 000074 */ 		return content;
/* 000074 */ 	});},
/* 000076 */ 	get render_lines () {return __get__ (this, function (self, lines_info_list, render_context) {
/* 000076 */ 		var role = null;
/* 000076 */ 		var annotations = null;
/* 000076 */ 		var target_id = null;
/* 000076 */ 		if (arguments.length) {
/* 000076 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000076 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000076 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000076 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000076 */ 					switch (__attrib0__) {
/* 000076 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000076 */ 						case 'lines_info_list': var lines_info_list = __allkwargs0__ [__attrib0__]; break;
/* 000076 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000076 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000076 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000076 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000076 */ 					}
/* 000076 */ 				}
/* 000076 */ 			}
/* 000076 */ 		}
/* 000076 */ 		else {
/* 000076 */ 		}
/* 000079 */ 		var s_lines = [];
/* 000080 */ 		var __iterable0__ = lines_info_list;
/* 000080 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000080 */ 			var line_info = __getitem__ (__iterable0__, __index0__);
/* 000082 */ 			var s_line = (function () {
/* 000082 */ 				var __accu0__ = self;
/* 000082 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, line_info.nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000082 */ 			}) ();
/* 000088 */ 			if (__t__ (line_info.indent_left !== null)) {
/* 000089 */ 				var s_line = __add__ (__mul__ ('    ', line_info.indent_left), s_line);
/* 000089 */ 			}
/* 000094 */ 			if (__t__ (line_info.indent_right !== null)) {
/* 000095 */ 				(function () {
/* 000095 */ 					var __accu0__ = logger;
/* 000095 */ 					return __call__ (__accu0__.warning, __accu0__, 'lines indent_right not yet implemented in text renderer');
/* 000095 */ 				}) ();
/* 000095 */ 			}
/* 000096 */ 			if (__t__ (line_info.align !== null)) {
/* 000097 */ 				(function () {
/* 000097 */ 					var __accu0__ = logger;
/* 000097 */ 					return __call__ (__accu0__.warning, __accu0__, 'lines align not yet implemented in text renderer');
/* 000097 */ 				}) ();
/* 000097 */ 			}
/* 000099 */ 			(function () {
/* 000099 */ 				var __accu0__ = s_lines;
/* 000099 */ 				return __call__ (__accu0__.append, __accu0__, s_line);
/* 000099 */ 			}) ();
/* 000099 */ 		}
/* 000101 */ 		return (function () {
/* 000101 */ 			var __accu0__ = '\n';
/* 000101 */ 			return __call__ (__accu0__.join, __accu0__, s_lines);
/* 000101 */ 		}) ();
/* 000101 */ 	});},
/* 000103 */ 	get render_enumeration () {return __get__ (this, function (self, iter_items_nodelists, counter_formatter, render_context) {
/* 000103 */ 		var target_id_generator = null;
/* 000103 */ 		var annotations = null;
/* 000103 */ 		var nested_depth = 0;
/* 000103 */ 		if (arguments.length) {
/* 000103 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000103 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000103 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000103 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000103 */ 					switch (__attrib0__) {
/* 000103 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000103 */ 						case 'iter_items_nodelists': var iter_items_nodelists = __allkwargs0__ [__attrib0__]; break;
/* 000103 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000103 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000103 */ 						case 'target_id_generator': var target_id_generator = __allkwargs0__ [__attrib0__]; break;
/* 000103 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000103 */ 						case 'nested_depth': var nested_depth = __allkwargs0__ [__attrib0__]; break;
/* 000103 */ 					}
/* 000103 */ 				}
/* 000103 */ 			}
/* 000103 */ 		}
/* 000103 */ 		else {
/* 000103 */ 		}
/* 000106 */ 		var all_items = [];
/* 000107 */ 		var __iterable0__ = __call__ (enumerate, null, iter_items_nodelists);
/* 000107 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000107 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000107 */ 			var j = __left0__ [0];
/* 000107 */ 			var item_content_nodelist = __left0__ [1];
/* 000109 */ 			var item_content = (function () {
/* 000109 */ 				var __accu0__ = self;
/* 000109 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, item_content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: true}));
/* 000109 */ 			}) ();
/* 000115 */ 			var tag_nodelist = __call__ (counter_formatter, null, __add__ (1, j));
/* 000116 */ 			if (__t__ (tag_nodelist === null)) {
/* 000117 */ 				var tag_content = '?';
/* 000117 */ 			}
/* 000118 */ 			else if (__t__ (__call__ (isinstance, null, tag_nodelist, str))) {
/* 000119 */ 				var tag_content = (function () {
/* 000119 */ 					var __accu0__ = self;
/* 000119 */ 					return __call__ (__accu0__.render_value, __accu0__, tag_nodelist, render_context);
/* 000119 */ 				}) ();
/* 000119 */ 			}
/* 000120 */ 			else {
/* 000121 */ 				var tag_content = (function () {
/* 000121 */ 					var __accu0__ = self;
/* 000121 */ 					return __call__ (__accu0__.render_nodelist, __accu0__, tag_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000121 */ 				}) ();
/* 000121 */ 			}
/* 000127 */ 			if (__t__ (__gt__ (nested_depth, 0))) {
/* 000128 */ 				var tag_content = __add__ (__mul__ (' ', __mul__ (4, nested_depth)), tag_content);
/* 000128 */ 			}
/* 000130 */ 			(function () {
/* 000130 */ 				var __accu0__ = all_items;
/* 000130 */ 				return __call__ (__accu0__.append, __accu0__, tuple ([tag_content, item_content]));
/* 000130 */ 			}) ();
/* 000130 */ 		}
/* 000134 */ 		if (__t__ (!__t__ ((all_items)))) {
/* 000135 */ 			return (function () {
/* 000135 */ 				var __accu0__ = self;
/* 000135 */ 				return __call__ (__accu0__.render_semantic_block, __accu0__, '', 'enumeration', __kwargtrans__ ({render_context: render_context, annotations: annotations}));
/* 000135 */ 			}) ();
/* 000135 */ 		}
/* 000139 */ 		var max_item_width = __call__ (max, null, (function () {
/* 000139 */ 			var __accu0__ = [];
/* 000139 */ 			var __iterable0__ = all_items;
/* 000139 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000139 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000139 */ 				var fmtcnt = __left0__ [0];
/* 000139 */ 				var item_content = __left0__ [1];
/* 000139 */ 				(function () {
/* 000139 */ 					var __accu1__ = __accu0__;
/* 000139 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (len, null, fmtcnt));
/* 000139 */ 				}) ();
/* 000139 */ 			}
/* 000139 */ 			return __accu0__;
/* 000139 */ 		}) ());
/* 000141 */ 		return (function () {
/* 000141 */ 			var __accu0__ = self;
/* 000141 */ 			return __call__ (__accu0__.render_join_blocks, __accu0__, (function () {
/* 000141 */ 				var __accu1__ = [];
/* 000141 */ 				var __iterable0__ = all_items;
/* 000141 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000154 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000154 */ 					var fmtcnt = __left0__ [0];
/* 000154 */ 					var item_content = __left0__ [1];
/* 000154 */ 					(function () {
/* 000154 */ 						var __accu2__ = __accu1__;
/* 000142 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000142 */ 							var __accu3__ = self;
/* 000143 */ 							return __call__ (__accu3__.render_semantic_block, __accu3__, (function () {
/* 000143 */ 								var __accu4__ = self;
/* 000144 */ 								return __call__ (__accu4__.render_join, __accu4__, [(function () {
/* 000144 */ 									var __accu5__ = self;
/* 000145 */ 									return __call__ (__accu5__.render_value, __accu5__, __add__ ((function () {
/* 000145 */ 										var __accu6__ = fmtcnt;
/* 000145 */ 										return __call__ (__accu6__.rjust, __accu6__, __add__ (max_item_width, 2), ' ');
/* 000145 */ 									}) (), ' '), render_context);
/* 000145 */ 								}) (), item_content], render_context);
/* 000145 */ 							}) (), 'enumeration', __kwargtrans__ ({render_context: render_context, annotations: annotations}));
/* 000145 */ 						}) ());
/* 000145 */ 					}) ();
/* 000145 */ 				}
/* 000145 */ 				return __accu1__;
/* 000145 */ 			}) (), render_context);
/* 000145 */ 		}) ();
/* 000145 */ 	});},
/* 000158 */ 	get render_heading () {return __get__ (this, function (self, heading_nodelist, render_context) {
/* 000158 */ 		var heading_level = 1;
/* 000158 */ 		var inline_heading = false;
/* 000158 */ 		var target_id = null;
/* 000158 */ 		var annotations = null;
/* 000158 */ 		if (arguments.length) {
/* 000158 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000158 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000158 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000158 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000158 */ 					switch (__attrib0__) {
/* 000158 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000158 */ 						case 'heading_nodelist': var heading_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000158 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000158 */ 						case 'heading_level': var heading_level = __allkwargs0__ [__attrib0__]; break;
/* 000158 */ 						case 'inline_heading': var inline_heading = __allkwargs0__ [__attrib0__]; break;
/* 000158 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000158 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000158 */ 					}
/* 000158 */ 				}
/* 000158 */ 			}
/* 000158 */ 		}
/* 000158 */ 		else {
/* 000158 */ 		}
/* 000165 */ 		var rendered_heading = (function () {
/* 000165 */ 			var __accu0__ = self;
/* 000165 */ 			return __call__ (__accu0__.render_inline_content, __accu0__, heading_nodelist, render_context);
/* 000165 */ 		}) ();
/* 000167 */ 		if (__t__ (__in__ (heading_level, self.heading_level_formatter))) {
/* 000168 */ 			var formatter = __getitem__ (self.heading_level_formatter, heading_level);
/* 000169 */ 			return __call__ (formatter, null, rendered_heading);
/* 000169 */ 		}
/* 000171 */ 		(function () {
/* 000171 */ 			var __accu0__ = logger;
/* 000173 */ 			return __call__ (__accu0__.warning, __accu0__, __add__ ('Bad heading_level={}, expected one of '.format (heading_level), __call__ (repr, null, __call__ (list, null, (function () {
/* 000173 */ 				var __accu1__ = __call__ (dict, null, self.heading_level_formatter);
/* 000173 */ 				return __call__ (__accu1__.py_keys, __accu1__);
/* 000173 */ 			}) ()))));
/* 000173 */ 		}) ();
/* 000176 */ 		return '\n{}:\n'.format (rendered_heading);
/* 000176 */ 	});},
/* 000179 */ 	get render_verbatim () {return __get__ (this, function (self, value, render_context) {
/* 000179 */ 		var is_block_level = false;
/* 000179 */ 		var annotations = null;
/* 000179 */ 		var target_id = null;
/* 000179 */ 		if (arguments.length) {
/* 000179 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000179 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000179 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000179 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000179 */ 					switch (__attrib0__) {
/* 000179 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000179 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000179 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000179 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000179 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000179 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000179 */ 					}
/* 000179 */ 				}
/* 000179 */ 			}
/* 000179 */ 		}
/* 000179 */ 		else {
/* 000179 */ 		}
/* 000181 */ 		return value;
/* 000181 */ 	});},
/* 000183 */ 	get render_link () {return __get__ (this, function (self, ref_type, href, display_nodelist, render_context, annotations) {
/* 000183 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000183 */ 			var annotations = null;
/* 000183 */ 		};
/* 000183 */ 		if (arguments.length) {
/* 000183 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000183 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000183 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000183 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000183 */ 					switch (__attrib0__) {
/* 000183 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000183 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000183 */ 						case 'href': var href = __allkwargs0__ [__attrib0__]; break;
/* 000183 */ 						case 'display_nodelist': var display_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000183 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000183 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000183 */ 					}
/* 000183 */ 				}
/* 000183 */ 			}
/* 000183 */ 		}
/* 000183 */ 		else {
/* 000183 */ 		}
/* 000209 */ 		var display_content = (function () {
/* 000209 */ 			var __accu0__ = self;
/* 000209 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, display_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000209 */ 		}) ();
/* 000216 */ 		if (__t__ (__t__ (self.display_href_urls) && !__t__ (((function () {
/* 000216 */ 			var __accu0__ = href;
/* 000216 */ 			return __call__ (__accu0__.startswith, __accu0__, '#');
/* 000216 */ 		}) ())))) {
/* 000217 */ 			return '{} <{}>'.format (display_content, href);
/* 000217 */ 		}
/* 000218 */ 		return display_content;
/* 000218 */ 	});},
/* 000221 */ 	get render_float () {return __get__ (this, function (self, float_instance, render_context) {
/* 000221 */ 		if (arguments.length) {
/* 000221 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000221 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000221 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000221 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000221 */ 					switch (__attrib0__) {
/* 000221 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000221 */ 						case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000221 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000221 */ 					}
/* 000221 */ 				}
/* 000221 */ 			}
/* 000221 */ 		}
/* 000221 */ 		else {
/* 000221 */ 		}
/* 000223 */ 		var full_figcaption_rendered_list = [];
/* 000224 */ 		if (__t__ (float_instance.counter_value !== null)) {
/* 000225 */ 			(function () {
/* 000225 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000226 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000226 */ 					var __accu1__ = self;
/* 000229 */ 					return __call__ (__accu1__.render_join, __accu1__, [float_instance.float_type_info.float_caption_name, '\xa0', (function () {
/* 000229 */ 						var __accu2__ = self;
/* 000229 */ 						return __call__ (__accu2__.render_nodelist, __accu2__, float_instance.formatted_counter_value_flm.nodes, __kwargtrans__ ({render_context: render_context}));
/* 000229 */ 					}) ()], render_context);
/* 000229 */ 				}) ());
/* 000229 */ 			}) ();
/* 000229 */ 		}
/* 000233 */ 		else if (__t__ (float_instance.caption_nodelist)) {
/* 000234 */ 			(function () {
/* 000234 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000234 */ 				return __call__ (__accu0__.append, __accu0__, float_instance.float_type_info.float_caption_name);
/* 000234 */ 			}) ();
/* 000234 */ 		}
/* 000236 */ 		else {
/* 000238 */ 			// pass;
/* 000238 */ 		}
/* 000240 */ 		if (__t__ (float_instance.caption_nodelist)) {
/* 000241 */ 			(function () {
/* 000241 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000241 */ 				return __call__ (__accu0__.append, __accu0__, self.float_caption_title_separator);
/* 000241 */ 			}) ();
/* 000246 */ 			(function () {
/* 000246 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000247 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000247 */ 					var __accu1__ = self;
/* 000247 */ 					return __call__ (__accu1__.render_nodelist, __accu1__, float_instance.caption_nodelist, __kwargtrans__ ({render_context: render_context}));
/* 000247 */ 				}) ());
/* 000247 */ 			}) ();
/* 000247 */ 		}
/* 000253 */ 		var rendered_float_caption = null;
/* 000254 */ 		if (__t__ (full_figcaption_rendered_list)) {
/* 000255 */ 			var rendered_float_caption = (function () {
/* 000255 */ 				var __accu0__ = self;
/* 000255 */ 				return __call__ (__accu0__.render_join, __accu0__, full_figcaption_rendered_list, render_context);
/* 000255 */ 			}) ();
/* 000255 */ 		}
/* 000258 */ 		var float_content_block = (function () {
/* 000258 */ 			var __accu0__ = self;
/* 000258 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, float_instance.content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: true}));
/* 000258 */ 		}) ();
/* 000264 */ 		if (__t__ (rendered_float_caption !== null)) {
/* 000265 */ 			var float_content_with_caption = (function () {
/* 000265 */ 				var __accu0__ = self;
/* 000265 */ 				return __call__ (__accu0__.render_join_blocks, __accu0__, [float_content_block, rendered_float_caption], render_context);
/* 000265 */ 			}) ();
/* 000265 */ 		}
/* 000269 */ 		else {
/* 000270 */ 			var float_content_with_caption = float_content_block;
/* 000270 */ 		}
/* 000272 */ 		return __add__ (__add__ (__add__ (__add__ (self.float_separator_top, '\n'), float_content_with_caption), '\n'), self.float_separator_bottom);
/* 000272 */ 	});},
/* 000279 */ 	get render_graphics_block () {return __get__ (this, function (self, graphics_resource, render_context) {
/* 000279 */ 		if (arguments.length) {
/* 000279 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000279 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000279 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000279 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000279 */ 					switch (__attrib0__) {
/* 000279 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000279 */ 						case 'graphics_resource': var graphics_resource = __allkwargs0__ [__attrib0__]; break;
/* 000279 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000279 */ 					}
/* 000279 */ 				}
/* 000279 */ 			}
/* 000279 */ 		}
/* 000279 */ 		else {
/* 000279 */ 		}
/* 000280 */ 		return __call__ (_center_text_sqbrkt_line, null, graphics_resource.src_url);
/* 000280 */ 	});},
/* 000283 */ 	get render_cells () {return __get__ (this, function (self, cells_model, render_context, target_id) {
/* 000283 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000283 */ 			var target_id = null;
/* 000283 */ 		};
/* 000283 */ 		if (arguments.length) {
/* 000283 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000283 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000283 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000283 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000283 */ 					switch (__attrib0__) {
/* 000283 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000283 */ 						case 'cells_model': var cells_model = __allkwargs0__ [__attrib0__]; break;
/* 000283 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000283 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000283 */ 					}
/* 000283 */ 				}
/* 000283 */ 			}
/* 000283 */ 		}
/* 000283 */ 		else {
/* 000283 */ 		}
/* 000286 */ 		var rendered_cells = [];
/* 000287 */ 		var __iterable0__ = cells_model.cells_data;
/* 000287 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000287 */ 			var cell = __getitem__ (__iterable0__, __index0__);
/* 000289 */ 			var rendered_cell_contents = (function () {
/* 000289 */ 				var __accu0__ = self;
/* 000289 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, cell.content_nodes, __kwargtrans__ ({render_context: render_context}));
/* 000289 */ 			}) ();
/* 000294 */ 			var rendered_cell_contents_lines = (function () {
/* 000294 */ 				var __accu0__ = rendered_cell_contents;
/* 000294 */ 				return __call__ (__accu0__.py_split, __accu0__, '\n');
/* 000294 */ 			}) ();
/* 000296 */ 			var is_header = false;
/* 000297 */ 			if (__t__ (__in__ ('H', cell.styles))) {
/* 000298 */ 				var is_header = true;
/* 000298 */ 			}
/* 000300 */ 			(function () {
/* 000300 */ 				var __accu0__ = rendered_cells;
/* 000303 */ 				return __call__ (__accu0__.append, __accu0__, dict ({'cell': cell, 'rendered_contents_lines': rendered_cell_contents_lines, 'width': __call__ (max, null, (function () {
/* 000303 */ 					var __accu1__ = [];
/* 000303 */ 					var __iterable1__ = rendered_cell_contents_lines;
/* 000303 */ 					for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000304 */ 						var line = __getitem__ (__iterable1__, __index1__);
/* 000304 */ 						(function () {
/* 000304 */ 							var __accu2__ = __accu1__;
/* 000304 */ 							return __call__ (__accu2__.append, __accu2__, __call__ (len, null, line));
/* 000304 */ 						}) ();
/* 000304 */ 					}
/* 000304 */ 					return __accu1__;
/* 000304 */ 				}) ()), 'is_header': is_header}));
/* 000304 */ 			}) ();
/* 000304 */ 		}
/* 000340 */ 		var s_items = [];
/* 000343 */ 		var __iterable0__ = rendered_cells;
/* 000343 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000343 */ 			var rcell = __getitem__ (__iterable0__, __index0__);
/* 000344 */ 			(function () {
/* 000344 */ 				var __accu0__ = s_items;
/* 000345 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000345 */ 					var __accu1__ = '\n';
/* 000345 */ 					return __call__ (__accu1__.join, __accu1__, (function () {
/* 000345 */ 						var __accu2__ = [];
/* 000345 */ 						var __iterable1__ = __getitem__ (rcell, 'rendered_contents_lines');
/* 000345 */ 						for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000345 */ 							var line = __getitem__ (__iterable1__, __index1__);
/* 000345 */ 							(function () {
/* 000345 */ 								var __accu3__ = __accu2__;
/* 000345 */ 								return __call__ (__accu3__.append, __accu3__, '    {}'.format (line));
/* 000345 */ 							}) ();
/* 000345 */ 						}
/* 000345 */ 						return __accu2__;
/* 000345 */ 					}) ());
/* 000345 */ 				}) ());
/* 000345 */ 			}) ();
/* 000345 */ 		}
/* 000348 */ 		return (function () {
/* 000348 */ 			var __accu0__ = '\n';
/* 000348 */ 			return __call__ (__accu0__.join, __accu0__, s_items);
/* 000348 */ 		}) ();
/* 000348 */ 	});}
/* 000348 */ });
/* 000357 */ var _center_text_sqbrkt_line = (s) => (`[${s}]`).padStart(Math.round((80+s.length)/2)).padEnd(80);
/* 000368 */ export var _add_punct = function (x, c) {
/* 000368 */ 	if (arguments.length) {
/* 000368 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000368 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000368 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000368 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000368 */ 				switch (__attrib0__) {
/* 000368 */ 					case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000368 */ 					case 'c': var c = __allkwargs0__ [__attrib0__]; break;
/* 000368 */ 				}
/* 000368 */ 			}
/* 000368 */ 		}
/* 000368 */ 	}
/* 000368 */ 	else {
/* 000368 */ 	}
/* 000369 */ 	var x = __call__ (str, null, x);
/* 000370 */ 	if (__t__ (__in__ (__getslice__ ((function () {
/* 000370 */ 		var __accu0__ = x;
/* 000370 */ 		return __call__ (__accu0__.rstrip, __accu0__);
/* 000370 */ 	}) (), __neg__ (1), null, 1), '.,:;?!'))) {
/* 000371 */ 		return x;
/* 000371 */ 	}
/* 000372 */ 	return __add__ (x, c);
/* 000372 */ };
/* 000378 */ export var FragmentRendererInformation =  __class__ ('FragmentRendererInformation', [object], {
/* 000378 */ 	__module__: __name__,
/* 000379 */ 	FragmentRendererClass: TextFragmentRenderer,
/* 000380 */ 	format_name: 'text'
/* 000380 */ });
/* 000006 */ 
//# sourceMappingURL=flm.fragmentrenderer.text.map