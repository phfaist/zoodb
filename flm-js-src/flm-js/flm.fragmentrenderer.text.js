/* 000001 */ // Transcrypt'ed from Python, 2025-02-21 21:50:05
/* 000007 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
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
/* 000043 */ 	get render_enumeration () {return __get__ (this, function (self, iter_items_nodelists, counter_formatter, render_context) {
/* 000043 */ 		var target_id_generator = null;
/* 000043 */ 		var annotations = null;
/* 000043 */ 		var nested_depth = 0;
/* 000043 */ 		if (arguments.length) {
/* 000043 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000043 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000043 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000043 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000043 */ 					switch (__attrib0__) {
/* 000043 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000043 */ 						case 'iter_items_nodelists': var iter_items_nodelists = __allkwargs0__ [__attrib0__]; break;
/* 000043 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000043 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000043 */ 						case 'target_id_generator': var target_id_generator = __allkwargs0__ [__attrib0__]; break;
/* 000043 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000043 */ 						case 'nested_depth': var nested_depth = __allkwargs0__ [__attrib0__]; break;
/* 000043 */ 					}
/* 000043 */ 				}
/* 000043 */ 			}
/* 000043 */ 		}
/* 000043 */ 		else {
/* 000043 */ 		}
/* 000046 */ 		var all_items = [];
/* 000047 */ 		var __iterable0__ = __call__ (enumerate, null, iter_items_nodelists);
/* 000047 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000047 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000047 */ 			var j = __left0__ [0];
/* 000047 */ 			var item_content_nodelist = __left0__ [1];
/* 000049 */ 			var item_content = (function () {
/* 000049 */ 				var __accu0__ = self;
/* 000049 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, item_content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: true}));
/* 000049 */ 			}) ();
/* 000055 */ 			var tag_nodelist = __call__ (counter_formatter, null, __add__ (1, j));
/* 000056 */ 			if (__t__ (tag_nodelist === null)) {
/* 000057 */ 				var tag_content = '?';
/* 000057 */ 			}
/* 000058 */ 			else if (__t__ (__call__ (isinstance, null, tag_nodelist, str))) {
/* 000059 */ 				var tag_content = (function () {
/* 000059 */ 					var __accu0__ = self;
/* 000059 */ 					return __call__ (__accu0__.render_value, __accu0__, tag_nodelist, render_context);
/* 000059 */ 				}) ();
/* 000059 */ 			}
/* 000060 */ 			else {
/* 000061 */ 				var tag_content = (function () {
/* 000061 */ 					var __accu0__ = self;
/* 000061 */ 					return __call__ (__accu0__.render_nodelist, __accu0__, tag_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000061 */ 				}) ();
/* 000061 */ 			}
/* 000067 */ 			if (__t__ (__gt__ (nested_depth, 0))) {
/* 000068 */ 				var tag_content = __add__ (__mul__ (' ', __mul__ (4, nested_depth)), tag_content);
/* 000068 */ 			}
/* 000070 */ 			(function () {
/* 000070 */ 				var __accu0__ = all_items;
/* 000070 */ 				return __call__ (__accu0__.append, __accu0__, tuple ([tag_content, item_content]));
/* 000070 */ 			}) ();
/* 000070 */ 		}
/* 000074 */ 		if (__t__ (!__t__ ((all_items)))) {
/* 000075 */ 			return (function () {
/* 000075 */ 				var __accu0__ = self;
/* 000075 */ 				return __call__ (__accu0__.render_semantic_block, __accu0__, '', 'enumeration', __kwargtrans__ ({render_context: render_context, annotations: annotations}));
/* 000075 */ 			}) ();
/* 000075 */ 		}
/* 000079 */ 		var max_item_width = __call__ (max, null, (function () {
/* 000079 */ 			var __accu0__ = [];
/* 000079 */ 			var __iterable0__ = all_items;
/* 000079 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000079 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000079 */ 				var fmtcnt = __left0__ [0];
/* 000079 */ 				var item_content = __left0__ [1];
/* 000079 */ 				(function () {
/* 000079 */ 					var __accu1__ = __accu0__;
/* 000079 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (len, null, fmtcnt));
/* 000079 */ 				}) ();
/* 000079 */ 			}
/* 000079 */ 			return __accu0__;
/* 000079 */ 		}) ());
/* 000081 */ 		return (function () {
/* 000081 */ 			var __accu0__ = self;
/* 000081 */ 			return __call__ (__accu0__.render_join_blocks, __accu0__, (function () {
/* 000081 */ 				var __accu1__ = [];
/* 000081 */ 				var __iterable0__ = all_items;
/* 000081 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000094 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000094 */ 					var fmtcnt = __left0__ [0];
/* 000094 */ 					var item_content = __left0__ [1];
/* 000094 */ 					(function () {
/* 000094 */ 						var __accu2__ = __accu1__;
/* 000082 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000082 */ 							var __accu3__ = self;
/* 000083 */ 							return __call__ (__accu3__.render_semantic_block, __accu3__, (function () {
/* 000083 */ 								var __accu4__ = self;
/* 000084 */ 								return __call__ (__accu4__.render_join, __accu4__, [(function () {
/* 000084 */ 									var __accu5__ = self;
/* 000085 */ 									return __call__ (__accu5__.render_value, __accu5__, __add__ ((function () {
/* 000085 */ 										var __accu6__ = fmtcnt;
/* 000085 */ 										return __call__ (__accu6__.rjust, __accu6__, __add__ (max_item_width, 2), ' ');
/* 000085 */ 									}) (), ' '), render_context);
/* 000085 */ 								}) (), item_content], render_context);
/* 000085 */ 							}) (), 'enumeration', __kwargtrans__ ({render_context: render_context, annotations: annotations}));
/* 000085 */ 						}) ());
/* 000085 */ 					}) ();
/* 000085 */ 				}
/* 000085 */ 				return __accu1__;
/* 000085 */ 			}) (), render_context);
/* 000085 */ 		}) ();
/* 000085 */ 	});},
/* 000085 */ 	heading_level_formatter: dict ({1: (function __lambda__ (s) {
/* 000085 */ 		if (arguments.length) {
/* 000085 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000085 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000085 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000085 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000085 */ 					switch (__attrib0__) {
/* 000085 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000085 */ 					}
/* 000085 */ 				}
/* 000085 */ 			}
/* 000085 */ 		}
/* 000085 */ 		else {
/* 000085 */ 		}
/* 000099 */ 		return '{}\n{}'.format (s, __mul__ ('=', __call__ (len, null, s)));
/* 000099 */ 	}), 2: (function __lambda__ (s) {
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
/* 000100 */ 		return '{}\n{}'.format (s, __mul__ ('-', __call__ (len, null, s)));
/* 000100 */ 	}), 3: (function __lambda__ (s) {
/* 000100 */ 		if (arguments.length) {
/* 000100 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000100 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000100 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000100 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000100 */ 					switch (__attrib0__) {
/* 000100 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000100 */ 					}
/* 000100 */ 				}
/* 000100 */ 			}
/* 000100 */ 		}
/* 000100 */ 		else {
/* 000100 */ 		}
/* 000101 */ 		return '{}\n{}'.format (s, __mul__ ('~', __call__ (len, null, s)));
/* 000101 */ 	}), 4: (function __lambda__ (s) {
/* 000101 */ 		if (arguments.length) {
/* 000101 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000101 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000101 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000101 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000101 */ 					switch (__attrib0__) {
/* 000101 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000101 */ 					}
/* 000101 */ 				}
/* 000101 */ 			}
/* 000101 */ 		}
/* 000101 */ 		else {
/* 000101 */ 		}
/* 000102 */ 		return '{}  '.format (__call__ (_add_punct, null, s, ':'));
/* 000102 */ 	}), 5: (function __lambda__ (s) {
/* 000102 */ 		if (arguments.length) {
/* 000102 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000102 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000102 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000102 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000102 */ 					switch (__attrib0__) {
/* 000102 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000102 */ 					}
/* 000102 */ 				}
/* 000102 */ 			}
/* 000102 */ 		}
/* 000102 */ 		else {
/* 000102 */ 		}
/* 000103 */ 		return '    {}  '.format (__call__ (_add_punct, null, s, ':'));
/* 000103 */ 	}), 6: (function __lambda__ (s) {
/* 000103 */ 		if (arguments.length) {
/* 000103 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000103 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000103 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000103 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000103 */ 					switch (__attrib0__) {
/* 000103 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000103 */ 					}
/* 000103 */ 				}
/* 000103 */ 			}
/* 000103 */ 		}
/* 000103 */ 		else {
/* 000103 */ 		}
/* 000104 */ 		return '        {}  '.format (__call__ (_add_punct, null, s, ':'));
/* 000104 */ 	}), 'theorem': (function __lambda__ (s) {
/* 000104 */ 		if (arguments.length) {
/* 000104 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000104 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000104 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000104 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000104 */ 					switch (__attrib0__) {
/* 000104 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000104 */ 					}
/* 000104 */ 				}
/* 000104 */ 			}
/* 000104 */ 		}
/* 000104 */ 		else {
/* 000104 */ 		}
/* 000104 */ 		return '{}.  '.format (s);
/* 000098 */ 	})}),
/* 000110 */ 	get render_heading () {return __get__ (this, function (self, heading_nodelist, render_context) {
/* 000110 */ 		var heading_level = 1;
/* 000110 */ 		var inline_heading = false;
/* 000110 */ 		var target_id = null;
/* 000110 */ 		var annotations = null;
/* 000110 */ 		if (arguments.length) {
/* 000110 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000110 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000110 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000110 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000110 */ 					switch (__attrib0__) {
/* 000110 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000110 */ 						case 'heading_nodelist': var heading_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000110 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000110 */ 						case 'heading_level': var heading_level = __allkwargs0__ [__attrib0__]; break;
/* 000110 */ 						case 'inline_heading': var inline_heading = __allkwargs0__ [__attrib0__]; break;
/* 000110 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000110 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000110 */ 					}
/* 000110 */ 				}
/* 000110 */ 			}
/* 000110 */ 		}
/* 000110 */ 		else {
/* 000110 */ 		}
/* 000117 */ 		var rendered_heading = (function () {
/* 000117 */ 			var __accu0__ = self;
/* 000117 */ 			return __call__ (__accu0__.render_inline_content, __accu0__, heading_nodelist, render_context);
/* 000117 */ 		}) ();
/* 000119 */ 		if (__t__ (__in__ (heading_level, self.heading_level_formatter))) {
/* 000120 */ 			var formatter = __getitem__ (self.heading_level_formatter, heading_level);
/* 000121 */ 			return __call__ (formatter, null, rendered_heading);
/* 000121 */ 		}
/* 000123 */ 		var __except0__ = __call__ (ValueError, null, 'Bad heading_level={}, expected 1..6'.format (heading_level));
/* 000123 */ 		__except0__.__cause__ = null;
/* 000123 */ 		throw __except0__;
/* 000123 */ 	});},
/* 000126 */ 	get render_verbatim () {return __get__ (this, function (self, value, render_context) {
/* 000126 */ 		var is_block_level = false;
/* 000126 */ 		var annotations = null;
/* 000126 */ 		var target_id = null;
/* 000126 */ 		if (arguments.length) {
/* 000126 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000126 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000126 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000126 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000126 */ 					switch (__attrib0__) {
/* 000126 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000126 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000126 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000126 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000126 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000126 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000126 */ 					}
/* 000126 */ 				}
/* 000126 */ 			}
/* 000126 */ 		}
/* 000126 */ 		else {
/* 000126 */ 		}
/* 000128 */ 		return value;
/* 000128 */ 	});},
/* 000130 */ 	get render_link () {return __get__ (this, function (self, ref_type, href, display_nodelist, render_context, annotations) {
/* 000130 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000130 */ 			var annotations = null;
/* 000130 */ 		};
/* 000130 */ 		if (arguments.length) {
/* 000130 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000130 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000130 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000130 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000130 */ 					switch (__attrib0__) {
/* 000130 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000130 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000130 */ 						case 'href': var href = __allkwargs0__ [__attrib0__]; break;
/* 000130 */ 						case 'display_nodelist': var display_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000130 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000130 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000130 */ 					}
/* 000130 */ 				}
/* 000130 */ 			}
/* 000130 */ 		}
/* 000130 */ 		else {
/* 000130 */ 		}
/* 000146 */ 		var display_content = (function () {
/* 000146 */ 			var __accu0__ = self;
/* 000146 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, display_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000146 */ 		}) ();
/* 000153 */ 		if (__t__ (__t__ (self.display_href_urls) && !__t__ (((function () {
/* 000153 */ 			var __accu0__ = href;
/* 000153 */ 			return __call__ (__accu0__.startswith, __accu0__, '#');
/* 000153 */ 		}) ())))) {
/* 000154 */ 			return '{} <{}>'.format (display_content, href);
/* 000154 */ 		}
/* 000155 */ 		return display_content;
/* 000155 */ 	});},
/* 000158 */ 	get render_float () {return __get__ (this, function (self, float_instance, render_context) {
/* 000158 */ 		if (arguments.length) {
/* 000158 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000158 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000158 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000158 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000158 */ 					switch (__attrib0__) {
/* 000158 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000158 */ 						case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000158 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000158 */ 					}
/* 000158 */ 				}
/* 000158 */ 			}
/* 000158 */ 		}
/* 000158 */ 		else {
/* 000158 */ 		}
/* 000160 */ 		var full_figcaption_rendered_list = [];
/* 000161 */ 		if (__t__ (float_instance.number !== null)) {
/* 000162 */ 			(function () {
/* 000162 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000163 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000163 */ 					var __accu1__ = self;
/* 000166 */ 					return __call__ (__accu1__.render_join, __accu1__, [float_instance.float_type_info.float_caption_name, '\xa0', (function () {
/* 000166 */ 						var __accu2__ = self;
/* 000166 */ 						return __call__ (__accu2__.render_nodelist, __accu2__, float_instance.formatted_counter_value_flm.nodes, __kwargtrans__ ({render_context: render_context}));
/* 000166 */ 					}) ()], render_context);
/* 000166 */ 				}) ());
/* 000166 */ 			}) ();
/* 000166 */ 		}
/* 000170 */ 		else if (__t__ (float_instance.caption_nodelist)) {
/* 000171 */ 			(function () {
/* 000171 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000171 */ 				return __call__ (__accu0__.append, __accu0__, float_instance.float_type_info.float_caption_name);
/* 000171 */ 			}) ();
/* 000171 */ 		}
/* 000173 */ 		else {
/* 000175 */ 			// pass;
/* 000175 */ 		}
/* 000177 */ 		if (__t__ (float_instance.caption_nodelist)) {
/* 000178 */ 			(function () {
/* 000178 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000178 */ 				return __call__ (__accu0__.append, __accu0__, ': ');
/* 000178 */ 			}) ();
/* 000181 */ 			(function () {
/* 000181 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000182 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000182 */ 					var __accu1__ = self;
/* 000182 */ 					return __call__ (__accu1__.render_nodelist, __accu1__, float_instance.caption_nodelist, __kwargtrans__ ({render_context: render_context}));
/* 000182 */ 				}) ());
/* 000182 */ 			}) ();
/* 000182 */ 		}
/* 000188 */ 		var rendered_float_caption = null;
/* 000189 */ 		if (__t__ (full_figcaption_rendered_list)) {
/* 000190 */ 			var rendered_float_caption = (function () {
/* 000190 */ 				var __accu0__ = self;
/* 000190 */ 				return __call__ (__accu0__.render_join, __accu0__, full_figcaption_rendered_list, render_context);
/* 000190 */ 			}) ();
/* 000190 */ 		}
/* 000193 */ 		var float_content_block = (function () {
/* 000193 */ 			var __accu0__ = self;
/* 000193 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, float_instance.content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: true}));
/* 000193 */ 		}) ();
/* 000199 */ 		if (__t__ (rendered_float_caption !== null)) {
/* 000200 */ 			var float_content_with_caption = (function () {
/* 000200 */ 				var __accu0__ = self;
/* 000200 */ 				return __call__ (__accu0__.render_join_blocks, __accu0__, [float_content_block, rendered_float_caption], render_context);
/* 000200 */ 			}) ();
/* 000200 */ 		}
/* 000204 */ 		else {
/* 000205 */ 			var float_content_with_caption = float_content_block;
/* 000205 */ 		}
/* 000207 */ 		return __add__ (__add__ (__add__ (__add__ (self.float_separator_top, '\n'), float_content_with_caption), '\n'), self.float_separator_bottom);
/* 000207 */ 	});},
/* 000214 */ 	get render_graphics_block () {return __get__ (this, function (self, graphics_resource, render_context) {
/* 000214 */ 		if (arguments.length) {
/* 000214 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000214 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000214 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000214 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000214 */ 					switch (__attrib0__) {
/* 000214 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000214 */ 						case 'graphics_resource': var graphics_resource = __allkwargs0__ [__attrib0__]; break;
/* 000214 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000214 */ 					}
/* 000214 */ 				}
/* 000214 */ 			}
/* 000214 */ 		}
/* 000214 */ 		else {
/* 000214 */ 		}
/* 000216 */ 		return '{}'.format (__add__ (__add__ ('[', graphics_resource.src_url), ']'));
/* 000216 */ 	});},
/* 000219 */ 	cells_column_sep: '   ',
/* 000221 */ 	get render_cells () {return __get__ (this, function (self, cells_model, render_context, target_id) {
/* 000221 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000221 */ 			var target_id = null;
/* 000221 */ 		};
/* 000221 */ 		if (arguments.length) {
/* 000221 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000221 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000221 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000221 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000221 */ 					switch (__attrib0__) {
/* 000221 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000221 */ 						case 'cells_model': var cells_model = __allkwargs0__ [__attrib0__]; break;
/* 000221 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000221 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000221 */ 					}
/* 000221 */ 				}
/* 000221 */ 			}
/* 000221 */ 		}
/* 000221 */ 		else {
/* 000221 */ 		}
/* 000224 */ 		var rendered_cells = [];
/* 000225 */ 		var __iterable0__ = cells_model.cells_data;
/* 000225 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000225 */ 			var cell = __getitem__ (__iterable0__, __index0__);
/* 000227 */ 			var rendered_cell_contents = (function () {
/* 000227 */ 				var __accu0__ = self;
/* 000227 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, cell.content_nodes, __kwargtrans__ ({render_context: render_context}));
/* 000227 */ 			}) ();
/* 000232 */ 			var rendered_cell_contents_lines = (function () {
/* 000232 */ 				var __accu0__ = rendered_cell_contents;
/* 000232 */ 				return __call__ (__accu0__.py_split, __accu0__, '\n');
/* 000232 */ 			}) ();
/* 000234 */ 			var is_header = false;
/* 000235 */ 			if (__t__ (__in__ ('H', cell.styles))) {
/* 000236 */ 				var is_header = true;
/* 000236 */ 			}
/* 000238 */ 			(function () {
/* 000238 */ 				var __accu0__ = rendered_cells;
/* 000241 */ 				return __call__ (__accu0__.append, __accu0__, dict ({'cell': cell, 'rendered_contents_lines': rendered_cell_contents_lines, 'width': __call__ (max, null, (function () {
/* 000241 */ 					var __accu1__ = [];
/* 000241 */ 					var __iterable1__ = rendered_cell_contents_lines;
/* 000241 */ 					for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000242 */ 						var line = __getitem__ (__iterable1__, __index1__);
/* 000242 */ 						(function () {
/* 000242 */ 							var __accu2__ = __accu1__;
/* 000242 */ 							return __call__ (__accu2__.append, __accu2__, __call__ (len, null, line));
/* 000242 */ 						}) ();
/* 000242 */ 					}
/* 000242 */ 					return __accu1__;
/* 000242 */ 				}) ()), 'is_header': is_header}));
/* 000242 */ 			}) ();
/* 000242 */ 		}
/* 000278 */ 		var s_items = [];
/* 000281 */ 		var __iterable0__ = rendered_cells;
/* 000281 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000281 */ 			var rcell = __getitem__ (__iterable0__, __index0__);
/* 000282 */ 			(function () {
/* 000282 */ 				var __accu0__ = s_items;
/* 000283 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000283 */ 					var __accu1__ = '\n';
/* 000283 */ 					return __call__ (__accu1__.join, __accu1__, (function () {
/* 000283 */ 						var __accu2__ = [];
/* 000283 */ 						var __iterable1__ = __getitem__ (rcell, 'rendered_contents_lines');
/* 000283 */ 						for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000283 */ 							var line = __getitem__ (__iterable1__, __index1__);
/* 000283 */ 							(function () {
/* 000283 */ 								var __accu3__ = __accu2__;
/* 000283 */ 								return __call__ (__accu3__.append, __accu3__, '    {}'.format (line));
/* 000283 */ 							}) ();
/* 000283 */ 						}
/* 000283 */ 						return __accu2__;
/* 000283 */ 					}) ());
/* 000283 */ 				}) ());
/* 000283 */ 			}) ();
/* 000283 */ 		}
/* 000286 */ 		return (function () {
/* 000286 */ 			var __accu0__ = '\n';
/* 000286 */ 			return __call__ (__accu0__.join, __accu0__, s_items);
/* 000286 */ 		}) ();
/* 000286 */ 	});}
/* 000286 */ });
/* 000291 */ export var _add_punct = function (x, c) {
/* 000291 */ 	if (arguments.length) {
/* 000291 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000291 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000291 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000291 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000291 */ 				switch (__attrib0__) {
/* 000291 */ 					case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000291 */ 					case 'c': var c = __allkwargs0__ [__attrib0__]; break;
/* 000291 */ 				}
/* 000291 */ 			}
/* 000291 */ 		}
/* 000291 */ 	}
/* 000291 */ 	else {
/* 000291 */ 	}
/* 000292 */ 	var x = __call__ (str, null, x);
/* 000293 */ 	if (__t__ (__in__ (__getslice__ ((function () {
/* 000293 */ 		var __accu0__ = x;
/* 000293 */ 		return __call__ (__accu0__.rstrip, __accu0__);
/* 000293 */ 	}) (), __neg__ (1), null, 1), '.,:;?!'))) {
/* 000294 */ 		return x;
/* 000294 */ 	}
/* 000295 */ 	return __add__ (x, c);
/* 000295 */ };
/* 000301 */ export var FragmentRendererInformation =  __class__ ('FragmentRendererInformation', [object], {
/* 000301 */ 	__module__: __name__,
/* 000302 */ 	FragmentRendererClass: TextFragmentRenderer,
/* 000303 */ 	format_name: 'text'
/* 000303 */ });
/* 000007 */ 
//# sourceMappingURL=flm.fragmentrenderer.text.map