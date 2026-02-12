/* 000001 */ // Transcrypt'ed from Python, 2026-02-12 21:38:43
/* 000007 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000007 */ import {FragmentRenderer} from './flm.fragmentrenderer._base.js';
/* 000007 */ export {FragmentRenderer};
/* 000001 */ var __name__ = 'flm.fragmentrenderer.text';
/* 000010 */ export var TextFragmentRenderer =  __class__ ('TextFragmentRenderer', [FragmentRenderer], {
/* 000010 */ 	__module__: __name__,
/* 000012 */ 	display_href_urls: true,
/* 000014 */ 	float_separator_top: __mul__ ('·', 80),
/* 000015 */ 	float_separator_bottom: __mul__ ('·', 80),
/* 000020 */ 	get render_value () {return __get__ (this, function (self, value, render_context) {
/* 000020 */ 		if (arguments.length) {
/* 000020 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000020 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000020 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000020 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000020 */ 					switch (__attrib0__) {
/* 000020 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000020 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000020 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000020 */ 					}
/* 000020 */ 				}
/* 000020 */ 			}
/* 000020 */ 		}
/* 000020 */ 		else {
/* 000020 */ 		}
/* 000021 */ 		return value;
/* 000021 */ 	});},
/* 000023 */ 	get render_delayed_marker () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000023 */ 		if (arguments.length) {
/* 000023 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000023 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000023 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000023 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000023 */ 					switch (__attrib0__) {
/* 000023 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000023 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000023 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000023 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000023 */ 					}
/* 000023 */ 				}
/* 000023 */ 			}
/* 000023 */ 		}
/* 000023 */ 		else {
/* 000023 */ 		}
/* 000024 */ 		return '';
/* 000024 */ 	});},
/* 000026 */ 	get render_delayed_dummy_placeholder () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000026 */ 		if (arguments.length) {
/* 000026 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000026 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000026 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000026 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000026 */ 					switch (__attrib0__) {
/* 000026 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000026 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000026 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000026 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000026 */ 					}
/* 000026 */ 				}
/* 000026 */ 			}
/* 000026 */ 		}
/* 000026 */ 		else {
/* 000026 */ 		}
/* 000027 */ 		return '#DELAYED#';
/* 000027 */ 	});},
/* 000029 */ 	get render_nothing () {return __get__ (this, function (self, render_context, annotations) {
/* 000029 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000029 */ 			var annotations = null;
/* 000029 */ 		};
/* 000029 */ 		if (arguments.length) {
/* 000029 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000029 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000029 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000029 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000029 */ 					switch (__attrib0__) {
/* 000029 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000029 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000029 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000029 */ 					}
/* 000029 */ 				}
/* 000029 */ 			}
/* 000029 */ 		}
/* 000029 */ 		else {
/* 000029 */ 		}
/* 000030 */ 		return '';
/* 000030 */ 	});},
/* 000032 */ 	get render_empty_error_placeholder () {return __get__ (this, function (self, debug_str, render_context) {
/* 000032 */ 		if (arguments.length) {
/* 000032 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000032 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000032 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000032 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000032 */ 					switch (__attrib0__) {
/* 000032 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000032 */ 						case 'debug_str': var debug_str = __allkwargs0__ [__attrib0__]; break;
/* 000032 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000032 */ 					}
/* 000032 */ 				}
/* 000032 */ 			}
/* 000032 */ 		}
/* 000032 */ 		else {
/* 000032 */ 		}
/* 000033 */ 		return '';
/* 000033 */ 	});},
/* 000035 */ 	get render_text_format () {return __get__ (this, function (self, text_formats, nodelist, render_context) {
/* 000035 */ 		if (arguments.length) {
/* 000035 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000035 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000035 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000035 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000035 */ 					switch (__attrib0__) {
/* 000035 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000035 */ 						case 'text_formats': var text_formats = __allkwargs0__ [__attrib0__]; break;
/* 000035 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000035 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000035 */ 					}
/* 000035 */ 				}
/* 000035 */ 			}
/* 000035 */ 		}
/* 000035 */ 		else {
/* 000035 */ 		}
/* 000036 */ 		var content = (function () {
/* 000036 */ 			var __accu0__ = self;
/* 000036 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, nodelist, render_context, __kwargtrans__ ({is_block_level: false}));
/* 000036 */ 		}) ();
/* 000041 */ 		return content;
/* 000041 */ 	});},
/* 000043 */ 	get render_lines () {return __get__ (this, function (self, iter_lines_nodelists, render_context) {
/* 000043 */ 		var role = null;
/* 000043 */ 		var annotations = null;
/* 000043 */ 		var target_id = null;
/* 000043 */ 		if (arguments.length) {
/* 000043 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000043 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000043 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000043 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000043 */ 					switch (__attrib0__) {
/* 000043 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000043 */ 						case 'iter_lines_nodelists': var iter_lines_nodelists = __allkwargs0__ [__attrib0__]; break;
/* 000043 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000043 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000043 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000043 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000043 */ 					}
/* 000043 */ 				}
/* 000043 */ 			}
/* 000043 */ 		}
/* 000043 */ 		else {
/* 000043 */ 		}
/* 000046 */ 		var s_lines = (function () {
/* 000046 */ 			var __accu0__ = [];
/* 000046 */ 			var __iterable0__ = iter_lines_nodelists;
/* 000046 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000052 */ 				var line_content_nodelist = __getitem__ (__iterable0__, __index0__);
/* 000052 */ 				(function () {
/* 000052 */ 					var __accu1__ = __accu0__;
/* 000047 */ 					return __call__ (__accu1__.append, __accu1__, (function () {
/* 000047 */ 						var __accu2__ = self;
/* 000047 */ 						return __call__ (__accu2__.render_nodelist, __accu2__, line_content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000047 */ 					}) ());
/* 000047 */ 				}) ();
/* 000047 */ 			}
/* 000047 */ 			return __accu0__;
/* 000047 */ 		}) ();
/* 000055 */ 		return (function () {
/* 000055 */ 			var __accu0__ = '\n';
/* 000055 */ 			return __call__ (__accu0__.join, __accu0__, s_lines);
/* 000055 */ 		}) ();
/* 000055 */ 	});},
/* 000057 */ 	get render_enumeration () {return __get__ (this, function (self, iter_items_nodelists, counter_formatter, render_context) {
/* 000057 */ 		var target_id_generator = null;
/* 000057 */ 		var annotations = null;
/* 000057 */ 		var nested_depth = 0;
/* 000057 */ 		if (arguments.length) {
/* 000057 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000057 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000057 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000057 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000057 */ 					switch (__attrib0__) {
/* 000057 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000057 */ 						case 'iter_items_nodelists': var iter_items_nodelists = __allkwargs0__ [__attrib0__]; break;
/* 000057 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000057 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000057 */ 						case 'target_id_generator': var target_id_generator = __allkwargs0__ [__attrib0__]; break;
/* 000057 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000057 */ 						case 'nested_depth': var nested_depth = __allkwargs0__ [__attrib0__]; break;
/* 000057 */ 					}
/* 000057 */ 				}
/* 000057 */ 			}
/* 000057 */ 		}
/* 000057 */ 		else {
/* 000057 */ 		}
/* 000060 */ 		var all_items = [];
/* 000061 */ 		var __iterable0__ = __call__ (enumerate, null, iter_items_nodelists);
/* 000061 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000061 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000061 */ 			var j = __left0__ [0];
/* 000061 */ 			var item_content_nodelist = __left0__ [1];
/* 000063 */ 			var item_content = (function () {
/* 000063 */ 				var __accu0__ = self;
/* 000063 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, item_content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: true}));
/* 000063 */ 			}) ();
/* 000069 */ 			var tag_nodelist = __call__ (counter_formatter, null, __add__ (1, j));
/* 000070 */ 			if (__t__ (tag_nodelist === null)) {
/* 000071 */ 				var tag_content = '?';
/* 000071 */ 			}
/* 000072 */ 			else if (__t__ (__call__ (isinstance, null, tag_nodelist, str))) {
/* 000073 */ 				var tag_content = (function () {
/* 000073 */ 					var __accu0__ = self;
/* 000073 */ 					return __call__ (__accu0__.render_value, __accu0__, tag_nodelist, render_context);
/* 000073 */ 				}) ();
/* 000073 */ 			}
/* 000074 */ 			else {
/* 000075 */ 				var tag_content = (function () {
/* 000075 */ 					var __accu0__ = self;
/* 000075 */ 					return __call__ (__accu0__.render_nodelist, __accu0__, tag_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000075 */ 				}) ();
/* 000075 */ 			}
/* 000081 */ 			if (__t__ (__gt__ (nested_depth, 0))) {
/* 000082 */ 				var tag_content = __add__ (__mul__ (' ', __mul__ (4, nested_depth)), tag_content);
/* 000082 */ 			}
/* 000084 */ 			(function () {
/* 000084 */ 				var __accu0__ = all_items;
/* 000084 */ 				return __call__ (__accu0__.append, __accu0__, tuple ([tag_content, item_content]));
/* 000084 */ 			}) ();
/* 000084 */ 		}
/* 000088 */ 		if (__t__ (!__t__ ((all_items)))) {
/* 000089 */ 			return (function () {
/* 000089 */ 				var __accu0__ = self;
/* 000089 */ 				return __call__ (__accu0__.render_semantic_block, __accu0__, '', 'enumeration', __kwargtrans__ ({render_context: render_context, annotations: annotations}));
/* 000089 */ 			}) ();
/* 000089 */ 		}
/* 000093 */ 		var max_item_width = __call__ (max, null, (function () {
/* 000093 */ 			var __accu0__ = [];
/* 000093 */ 			var __iterable0__ = all_items;
/* 000093 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000093 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000093 */ 				var fmtcnt = __left0__ [0];
/* 000093 */ 				var item_content = __left0__ [1];
/* 000093 */ 				(function () {
/* 000093 */ 					var __accu1__ = __accu0__;
/* 000093 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (len, null, fmtcnt));
/* 000093 */ 				}) ();
/* 000093 */ 			}
/* 000093 */ 			return __accu0__;
/* 000093 */ 		}) ());
/* 000095 */ 		return (function () {
/* 000095 */ 			var __accu0__ = self;
/* 000095 */ 			return __call__ (__accu0__.render_join_blocks, __accu0__, (function () {
/* 000095 */ 				var __accu1__ = [];
/* 000095 */ 				var __iterable0__ = all_items;
/* 000095 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000108 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000108 */ 					var fmtcnt = __left0__ [0];
/* 000108 */ 					var item_content = __left0__ [1];
/* 000108 */ 					(function () {
/* 000108 */ 						var __accu2__ = __accu1__;
/* 000096 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000096 */ 							var __accu3__ = self;
/* 000097 */ 							return __call__ (__accu3__.render_semantic_block, __accu3__, (function () {
/* 000097 */ 								var __accu4__ = self;
/* 000098 */ 								return __call__ (__accu4__.render_join, __accu4__, [(function () {
/* 000098 */ 									var __accu5__ = self;
/* 000099 */ 									return __call__ (__accu5__.render_value, __accu5__, __add__ ((function () {
/* 000099 */ 										var __accu6__ = fmtcnt;
/* 000099 */ 										return __call__ (__accu6__.rjust, __accu6__, __add__ (max_item_width, 2), ' ');
/* 000099 */ 									}) (), ' '), render_context);
/* 000099 */ 								}) (), item_content], render_context);
/* 000099 */ 							}) (), 'enumeration', __kwargtrans__ ({render_context: render_context, annotations: annotations}));
/* 000099 */ 						}) ());
/* 000099 */ 					}) ();
/* 000099 */ 				}
/* 000099 */ 				return __accu1__;
/* 000099 */ 			}) (), render_context);
/* 000099 */ 		}) ();
/* 000099 */ 	});},
/* 000099 */ 	heading_level_formatter: dict ({1: (function __lambda__ (s) {
/* 000099 */ 		if (arguments.length) {
/* 000099 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000099 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000099 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000099 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000099 */ 					switch (__attrib0__) {
/* 000099 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000099 */ 					}
/* 000099 */ 				}
/* 000099 */ 			}
/* 000099 */ 		}
/* 000099 */ 		else {
/* 000099 */ 		}
/* 000113 */ 		return '{}\n{}'.format (s, __mul__ ('=', __call__ (len, null, s)));
/* 000113 */ 	}), 2: (function __lambda__ (s) {
/* 000113 */ 		if (arguments.length) {
/* 000113 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000113 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000113 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000113 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000113 */ 					switch (__attrib0__) {
/* 000113 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000113 */ 					}
/* 000113 */ 				}
/* 000113 */ 			}
/* 000113 */ 		}
/* 000113 */ 		else {
/* 000113 */ 		}
/* 000114 */ 		return '{}\n{}'.format (s, __mul__ ('-', __call__ (len, null, s)));
/* 000114 */ 	}), 3: (function __lambda__ (s) {
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
/* 000115 */ 		return '{}\n{}'.format (s, __mul__ ('~', __call__ (len, null, s)));
/* 000115 */ 	}), 4: (function __lambda__ (s) {
/* 000115 */ 		if (arguments.length) {
/* 000115 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000115 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000115 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000115 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000115 */ 					switch (__attrib0__) {
/* 000115 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000115 */ 					}
/* 000115 */ 				}
/* 000115 */ 			}
/* 000115 */ 		}
/* 000115 */ 		else {
/* 000115 */ 		}
/* 000116 */ 		return '{}  '.format (__call__ (_add_punct, null, s, ':'));
/* 000116 */ 	}), 5: (function __lambda__ (s) {
/* 000116 */ 		if (arguments.length) {
/* 000116 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000116 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000116 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000116 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000116 */ 					switch (__attrib0__) {
/* 000116 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000116 */ 					}
/* 000116 */ 				}
/* 000116 */ 			}
/* 000116 */ 		}
/* 000116 */ 		else {
/* 000116 */ 		}
/* 000117 */ 		return '    {}  '.format (__call__ (_add_punct, null, s, ':'));
/* 000117 */ 	}), 6: (function __lambda__ (s) {
/* 000117 */ 		if (arguments.length) {
/* 000117 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000117 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000117 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000117 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000117 */ 					switch (__attrib0__) {
/* 000117 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000117 */ 					}
/* 000117 */ 				}
/* 000117 */ 			}
/* 000117 */ 		}
/* 000117 */ 		else {
/* 000117 */ 		}
/* 000118 */ 		return '        {}  '.format (__call__ (_add_punct, null, s, ':'));
/* 000118 */ 	}), 'theorem': (function __lambda__ (s) {
/* 000118 */ 		if (arguments.length) {
/* 000118 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000118 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000118 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000118 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000118 */ 					switch (__attrib0__) {
/* 000118 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000118 */ 					}
/* 000118 */ 				}
/* 000118 */ 			}
/* 000118 */ 		}
/* 000118 */ 		else {
/* 000118 */ 		}
/* 000118 */ 		return '{}.  '.format (s);
/* 000112 */ 	})}),
/* 000124 */ 	get render_heading () {return __get__ (this, function (self, heading_nodelist, render_context) {
/* 000124 */ 		var heading_level = 1;
/* 000124 */ 		var inline_heading = false;
/* 000124 */ 		var target_id = null;
/* 000124 */ 		var annotations = null;
/* 000124 */ 		if (arguments.length) {
/* 000124 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000124 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000124 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000124 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000124 */ 					switch (__attrib0__) {
/* 000124 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000124 */ 						case 'heading_nodelist': var heading_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000124 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000124 */ 						case 'heading_level': var heading_level = __allkwargs0__ [__attrib0__]; break;
/* 000124 */ 						case 'inline_heading': var inline_heading = __allkwargs0__ [__attrib0__]; break;
/* 000124 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000124 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000124 */ 					}
/* 000124 */ 				}
/* 000124 */ 			}
/* 000124 */ 		}
/* 000124 */ 		else {
/* 000124 */ 		}
/* 000131 */ 		var rendered_heading = (function () {
/* 000131 */ 			var __accu0__ = self;
/* 000131 */ 			return __call__ (__accu0__.render_inline_content, __accu0__, heading_nodelist, render_context);
/* 000131 */ 		}) ();
/* 000133 */ 		if (__t__ (__in__ (heading_level, self.heading_level_formatter))) {
/* 000134 */ 			var formatter = __getitem__ (self.heading_level_formatter, heading_level);
/* 000135 */ 			return __call__ (formatter, null, rendered_heading);
/* 000135 */ 		}
/* 000137 */ 		var __except0__ = __call__ (ValueError, null, 'Bad heading_level={}, expected 1..6 (or key in fragment_renderer.heading_level_formatter)'.format (heading_level));
/* 000137 */ 		__except0__.__cause__ = null;
/* 000137 */ 		throw __except0__;
/* 000137 */ 	});},
/* 000143 */ 	get render_verbatim () {return __get__ (this, function (self, value, render_context) {
/* 000143 */ 		var is_block_level = false;
/* 000143 */ 		var annotations = null;
/* 000143 */ 		var target_id = null;
/* 000143 */ 		if (arguments.length) {
/* 000143 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000143 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000143 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000143 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000143 */ 					switch (__attrib0__) {
/* 000143 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000143 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000143 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000143 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000143 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000143 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000143 */ 					}
/* 000143 */ 				}
/* 000143 */ 			}
/* 000143 */ 		}
/* 000143 */ 		else {
/* 000143 */ 		}
/* 000145 */ 		return value;
/* 000145 */ 	});},
/* 000147 */ 	get render_link () {return __get__ (this, function (self, ref_type, href, display_nodelist, render_context, annotations) {
/* 000147 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000147 */ 			var annotations = null;
/* 000147 */ 		};
/* 000147 */ 		if (arguments.length) {
/* 000147 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000147 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000147 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000147 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000147 */ 					switch (__attrib0__) {
/* 000147 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000147 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000147 */ 						case 'href': var href = __allkwargs0__ [__attrib0__]; break;
/* 000147 */ 						case 'display_nodelist': var display_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000147 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000147 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000147 */ 					}
/* 000147 */ 				}
/* 000147 */ 			}
/* 000147 */ 		}
/* 000147 */ 		else {
/* 000147 */ 		}
/* 000163 */ 		var display_content = (function () {
/* 000163 */ 			var __accu0__ = self;
/* 000163 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, display_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000163 */ 		}) ();
/* 000170 */ 		if (__t__ (__t__ (self.display_href_urls) && !__t__ (((function () {
/* 000170 */ 			var __accu0__ = href;
/* 000170 */ 			return __call__ (__accu0__.startswith, __accu0__, '#');
/* 000170 */ 		}) ())))) {
/* 000171 */ 			return '{} <{}>'.format (display_content, href);
/* 000171 */ 		}
/* 000172 */ 		return display_content;
/* 000172 */ 	});},
/* 000175 */ 	float_caption_title_separator: ': ',
/* 000177 */ 	get render_float () {return __get__ (this, function (self, float_instance, render_context) {
/* 000177 */ 		if (arguments.length) {
/* 000177 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000177 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000177 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000177 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000177 */ 					switch (__attrib0__) {
/* 000177 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000177 */ 						case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000177 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000177 */ 					}
/* 000177 */ 				}
/* 000177 */ 			}
/* 000177 */ 		}
/* 000177 */ 		else {
/* 000177 */ 		}
/* 000179 */ 		var full_figcaption_rendered_list = [];
/* 000180 */ 		if (__t__ (float_instance.counter_value !== null)) {
/* 000181 */ 			(function () {
/* 000181 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000182 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000182 */ 					var __accu1__ = self;
/* 000185 */ 					return __call__ (__accu1__.render_join, __accu1__, [float_instance.float_type_info.float_caption_name, '\xa0', (function () {
/* 000185 */ 						var __accu2__ = self;
/* 000185 */ 						return __call__ (__accu2__.render_nodelist, __accu2__, float_instance.formatted_counter_value_flm.nodes, __kwargtrans__ ({render_context: render_context}));
/* 000185 */ 					}) ()], render_context);
/* 000185 */ 				}) ());
/* 000185 */ 			}) ();
/* 000185 */ 		}
/* 000189 */ 		else if (__t__ (float_instance.caption_nodelist)) {
/* 000190 */ 			(function () {
/* 000190 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000190 */ 				return __call__ (__accu0__.append, __accu0__, float_instance.float_type_info.float_caption_name);
/* 000190 */ 			}) ();
/* 000190 */ 		}
/* 000192 */ 		else {
/* 000194 */ 			// pass;
/* 000194 */ 		}
/* 000196 */ 		if (__t__ (float_instance.caption_nodelist)) {
/* 000197 */ 			(function () {
/* 000197 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000197 */ 				return __call__ (__accu0__.append, __accu0__, self.float_caption_title_separator);
/* 000197 */ 			}) ();
/* 000202 */ 			(function () {
/* 000202 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000203 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000203 */ 					var __accu1__ = self;
/* 000203 */ 					return __call__ (__accu1__.render_nodelist, __accu1__, float_instance.caption_nodelist, __kwargtrans__ ({render_context: render_context}));
/* 000203 */ 				}) ());
/* 000203 */ 			}) ();
/* 000203 */ 		}
/* 000209 */ 		var rendered_float_caption = null;
/* 000210 */ 		if (__t__ (full_figcaption_rendered_list)) {
/* 000211 */ 			var rendered_float_caption = (function () {
/* 000211 */ 				var __accu0__ = self;
/* 000211 */ 				return __call__ (__accu0__.render_join, __accu0__, full_figcaption_rendered_list, render_context);
/* 000211 */ 			}) ();
/* 000211 */ 		}
/* 000214 */ 		var float_content_block = (function () {
/* 000214 */ 			var __accu0__ = self;
/* 000214 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, float_instance.content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: true}));
/* 000214 */ 		}) ();
/* 000220 */ 		if (__t__ (rendered_float_caption !== null)) {
/* 000221 */ 			var float_content_with_caption = (function () {
/* 000221 */ 				var __accu0__ = self;
/* 000221 */ 				return __call__ (__accu0__.render_join_blocks, __accu0__, [float_content_block, rendered_float_caption], render_context);
/* 000221 */ 			}) ();
/* 000221 */ 		}
/* 000225 */ 		else {
/* 000226 */ 			var float_content_with_caption = float_content_block;
/* 000226 */ 		}
/* 000228 */ 		return __add__ (__add__ (__add__ (__add__ (self.float_separator_top, '\n'), float_content_with_caption), '\n'), self.float_separator_bottom);
/* 000228 */ 	});},
/* 000235 */ 	get render_graphics_block () {return __get__ (this, function (self, graphics_resource, render_context) {
/* 000235 */ 		if (arguments.length) {
/* 000235 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000235 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000235 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000235 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000235 */ 					switch (__attrib0__) {
/* 000235 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000235 */ 						case 'graphics_resource': var graphics_resource = __allkwargs0__ [__attrib0__]; break;
/* 000235 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000235 */ 					}
/* 000235 */ 				}
/* 000235 */ 			}
/* 000235 */ 		}
/* 000235 */ 		else {
/* 000235 */ 		}
/* 000237 */ 		return '{}'.format (__add__ (__add__ ('[', graphics_resource.src_url), ']'));
/* 000237 */ 	});},
/* 000240 */ 	cells_column_sep: '   ',
/* 000242 */ 	get render_cells () {return __get__ (this, function (self, cells_model, render_context, target_id) {
/* 000242 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000242 */ 			var target_id = null;
/* 000242 */ 		};
/* 000242 */ 		if (arguments.length) {
/* 000242 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000242 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000242 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000242 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000242 */ 					switch (__attrib0__) {
/* 000242 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000242 */ 						case 'cells_model': var cells_model = __allkwargs0__ [__attrib0__]; break;
/* 000242 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000242 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000242 */ 					}
/* 000242 */ 				}
/* 000242 */ 			}
/* 000242 */ 		}
/* 000242 */ 		else {
/* 000242 */ 		}
/* 000245 */ 		var rendered_cells = [];
/* 000246 */ 		var __iterable0__ = cells_model.cells_data;
/* 000246 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000246 */ 			var cell = __getitem__ (__iterable0__, __index0__);
/* 000248 */ 			var rendered_cell_contents = (function () {
/* 000248 */ 				var __accu0__ = self;
/* 000248 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, cell.content_nodes, __kwargtrans__ ({render_context: render_context}));
/* 000248 */ 			}) ();
/* 000253 */ 			var rendered_cell_contents_lines = (function () {
/* 000253 */ 				var __accu0__ = rendered_cell_contents;
/* 000253 */ 				return __call__ (__accu0__.py_split, __accu0__, '\n');
/* 000253 */ 			}) ();
/* 000255 */ 			var is_header = false;
/* 000256 */ 			if (__t__ (__in__ ('H', cell.styles))) {
/* 000257 */ 				var is_header = true;
/* 000257 */ 			}
/* 000259 */ 			(function () {
/* 000259 */ 				var __accu0__ = rendered_cells;
/* 000262 */ 				return __call__ (__accu0__.append, __accu0__, dict ({'cell': cell, 'rendered_contents_lines': rendered_cell_contents_lines, 'width': __call__ (max, null, (function () {
/* 000262 */ 					var __accu1__ = [];
/* 000262 */ 					var __iterable1__ = rendered_cell_contents_lines;
/* 000262 */ 					for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000263 */ 						var line = __getitem__ (__iterable1__, __index1__);
/* 000263 */ 						(function () {
/* 000263 */ 							var __accu2__ = __accu1__;
/* 000263 */ 							return __call__ (__accu2__.append, __accu2__, __call__ (len, null, line));
/* 000263 */ 						}) ();
/* 000263 */ 					}
/* 000263 */ 					return __accu1__;
/* 000263 */ 				}) ()), 'is_header': is_header}));
/* 000263 */ 			}) ();
/* 000263 */ 		}
/* 000299 */ 		var s_items = [];
/* 000302 */ 		var __iterable0__ = rendered_cells;
/* 000302 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000302 */ 			var rcell = __getitem__ (__iterable0__, __index0__);
/* 000303 */ 			(function () {
/* 000303 */ 				var __accu0__ = s_items;
/* 000304 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000304 */ 					var __accu1__ = '\n';
/* 000304 */ 					return __call__ (__accu1__.join, __accu1__, (function () {
/* 000304 */ 						var __accu2__ = [];
/* 000304 */ 						var __iterable1__ = __getitem__ (rcell, 'rendered_contents_lines');
/* 000304 */ 						for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000304 */ 							var line = __getitem__ (__iterable1__, __index1__);
/* 000304 */ 							(function () {
/* 000304 */ 								var __accu3__ = __accu2__;
/* 000304 */ 								return __call__ (__accu3__.append, __accu3__, '    {}'.format (line));
/* 000304 */ 							}) ();
/* 000304 */ 						}
/* 000304 */ 						return __accu2__;
/* 000304 */ 					}) ());
/* 000304 */ 				}) ());
/* 000304 */ 			}) ();
/* 000304 */ 		}
/* 000307 */ 		return (function () {
/* 000307 */ 			var __accu0__ = '\n';
/* 000307 */ 			return __call__ (__accu0__.join, __accu0__, s_items);
/* 000307 */ 		}) ();
/* 000307 */ 	});}
/* 000307 */ });
/* 000312 */ export var _add_punct = function (x, c) {
/* 000312 */ 	if (arguments.length) {
/* 000312 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000312 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000312 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000312 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000312 */ 				switch (__attrib0__) {
/* 000312 */ 					case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000312 */ 					case 'c': var c = __allkwargs0__ [__attrib0__]; break;
/* 000312 */ 				}
/* 000312 */ 			}
/* 000312 */ 		}
/* 000312 */ 	}
/* 000312 */ 	else {
/* 000312 */ 	}
/* 000313 */ 	var x = __call__ (str, null, x);
/* 000314 */ 	if (__t__ (__in__ (__getslice__ ((function () {
/* 000314 */ 		var __accu0__ = x;
/* 000314 */ 		return __call__ (__accu0__.rstrip, __accu0__);
/* 000314 */ 	}) (), __neg__ (1), null, 1), '.,:;?!'))) {
/* 000315 */ 		return x;
/* 000315 */ 	}
/* 000316 */ 	return __add__ (x, c);
/* 000316 */ };
/* 000322 */ export var FragmentRendererInformation =  __class__ ('FragmentRendererInformation', [object], {
/* 000322 */ 	__module__: __name__,
/* 000323 */ 	FragmentRendererClass: TextFragmentRenderer,
/* 000324 */ 	format_name: 'text'
/* 000324 */ });
/* 000007 */ 
//# sourceMappingURL=flm.fragmentrenderer.text.map