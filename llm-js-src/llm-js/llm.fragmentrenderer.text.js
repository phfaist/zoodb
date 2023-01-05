/* 000001 */ // Transcrypt'ed from Python, 2023-01-05 22:41:20
/* 000007 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000007 */ import {FragmentRenderer} from './llm.fragmentrenderer._base.js';
/* 000007 */ export {FragmentRenderer};
/* 000001 */ var __name__ = 'llm.fragmentrenderer.text';
/* 000010 */ export var TextFragmentRenderer =  __class__ ('TextFragmentRenderer', [FragmentRenderer], {
/* 000010 */ 	__module__: __name__,
/* 000012 */ 	display_href_urls: true,
/* 000014 */ 	float_separator_top: __mul__ ('·', 80),
/* 000015 */ 	float_separator_bottom: __mul__ ('·', 80),
/* 000020 */ 	get render_value () {return __get__ (this, function (self, value) {
/* 000020 */ 		if (arguments.length) {
/* 000020 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000020 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000020 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000020 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000020 */ 					switch (__attrib0__) {
/* 000020 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000020 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
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
/* 000029 */ 	get render_nothing () {return __get__ (this, function (self, annotations) {
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
/* 000029 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000029 */ 					}
/* 000029 */ 				}
/* 000029 */ 			}
/* 000029 */ 		}
/* 000029 */ 		else {
/* 000029 */ 		}
/* 000030 */ 		return '';
/* 000030 */ 	});},
/* 000032 */ 	get render_empty_error_placeholder () {return __get__ (this, function (self, debug_str) {
/* 000032 */ 		if (arguments.length) {
/* 000032 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000032 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000032 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000032 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000032 */ 					switch (__attrib0__) {
/* 000032 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000032 */ 						case 'debug_str': var debug_str = __allkwargs0__ [__attrib0__]; break;
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
/* 000059 */ 					return __call__ (__accu0__.render_value, __accu0__, tag_nodelist);
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
/* 000075 */ 				return __call__ (__accu0__.render_semantic_block, __accu0__, '', 'enumeration', __kwargtrans__ ({annotations: annotations}));
/* 000075 */ 			}) ();
/* 000075 */ 		}
/* 000077 */ 		var max_item_width = __call__ (max, null, (function () {
/* 000077 */ 			var __accu0__ = [];
/* 000077 */ 			var __iterable0__ = all_items;
/* 000077 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000077 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000077 */ 				var fmtcnt = __left0__ [0];
/* 000077 */ 				var item_content = __left0__ [1];
/* 000077 */ 				(function () {
/* 000077 */ 					var __accu1__ = __accu0__;
/* 000077 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (len, null, fmtcnt));
/* 000077 */ 				}) ();
/* 000077 */ 			}
/* 000077 */ 			return __accu0__;
/* 000077 */ 		}) ());
/* 000079 */ 		return (function () {
/* 000079 */ 			var __accu0__ = self;
/* 000079 */ 			return __call__ (__accu0__.render_join_blocks, __accu0__, (function () {
/* 000079 */ 				var __accu1__ = [];
/* 000079 */ 				var __iterable0__ = all_items;
/* 000079 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000088 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000088 */ 					var fmtcnt = __left0__ [0];
/* 000088 */ 					var item_content = __left0__ [1];
/* 000088 */ 					(function () {
/* 000088 */ 						var __accu2__ = __accu1__;
/* 000080 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000080 */ 							var __accu3__ = self;
/* 000081 */ 							return __call__ (__accu3__.render_semantic_block, __accu3__, (function () {
/* 000081 */ 								var __accu4__ = self;
/* 000082 */ 								return __call__ (__accu4__.render_join, __accu4__, [(function () {
/* 000082 */ 									var __accu5__ = self;
/* 000082 */ 									return __call__ (__accu5__.render_value, __accu5__, __add__ ((function () {
/* 000082 */ 										var __accu6__ = fmtcnt;
/* 000082 */ 										return __call__ (__accu6__.rjust, __accu6__, __add__ (max_item_width, 2), ' ');
/* 000082 */ 									}) (), ' '));
/* 000082 */ 								}) (), item_content]);
/* 000082 */ 							}) (), 'enumeration', __kwargtrans__ ({annotations: annotations}));
/* 000082 */ 						}) ());
/* 000082 */ 					}) ();
/* 000082 */ 				}
/* 000082 */ 				return __accu1__;
/* 000082 */ 			}) ());
/* 000082 */ 		}) ();
/* 000082 */ 	});},
/* 000091 */ 	get render_heading () {return __get__ (this, function (self, heading_nodelist, render_context) {
/* 000091 */ 		var heading_level = 1;
/* 000091 */ 		var target_id = null;
/* 000091 */ 		var inline_heading = false;
/* 000091 */ 		var annotations = null;
/* 000091 */ 		if (arguments.length) {
/* 000091 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000091 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000091 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000091 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000091 */ 					switch (__attrib0__) {
/* 000091 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000091 */ 						case 'heading_nodelist': var heading_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000091 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000091 */ 						case 'heading_level': var heading_level = __allkwargs0__ [__attrib0__]; break;
/* 000091 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000091 */ 						case 'inline_heading': var inline_heading = __allkwargs0__ [__attrib0__]; break;
/* 000091 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000091 */ 					}
/* 000091 */ 				}
/* 000091 */ 			}
/* 000091 */ 		}
/* 000091 */ 		else {
/* 000091 */ 		}
/* 000095 */ 		var rendered_heading = (function () {
/* 000095 */ 			var __accu0__ = self;
/* 000095 */ 			return __call__ (__accu0__.render_inline_content, __accu0__, heading_nodelist, render_context);
/* 000095 */ 		}) ();
/* 000097 */ 		var add_punct = function (x, c) {
/* 000097 */ 			if (arguments.length) {
/* 000097 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000097 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000097 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000097 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000097 */ 						switch (__attrib0__) {
/* 000097 */ 							case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000097 */ 							case 'c': var c = __allkwargs0__ [__attrib0__]; break;
/* 000097 */ 						}
/* 000097 */ 					}
/* 000097 */ 				}
/* 000097 */ 			}
/* 000097 */ 			else {
/* 000097 */ 			}
/* 000098 */ 			var x = __call__ (str, null, x);
/* 000099 */ 			if (__t__ (__in__ (__getslice__ ((function () {
/* 000099 */ 				var __accu0__ = x;
/* 000099 */ 				return __call__ (__accu0__.rstrip, __accu0__);
/* 000099 */ 			}) (), __neg__ (1), null, 1), '.,:;?!'))) {
/* 000100 */ 				return x;
/* 000100 */ 			}
/* 000101 */ 			return __add__ (x, c);
/* 000101 */ 		};
/* 000103 */ 		if (__t__ (__eq__ (heading_level, 1))) {
/* 000104 */ 			return '{}\n{}'.format (rendered_heading, __mul__ ('=', __call__ (len, null, rendered_heading)));
/* 000104 */ 		}
/* 000105 */ 		if (__t__ (__eq__ (heading_level, 2))) {
/* 000106 */ 			return '{}\n{}'.format (rendered_heading, __mul__ ('-', __call__ (len, null, rendered_heading)));
/* 000106 */ 		}
/* 000107 */ 		if (__t__ (__eq__ (heading_level, 3))) {
/* 000108 */ 			return '{}\n{}'.format (rendered_heading, __mul__ ('~', __call__ (len, null, rendered_heading)));
/* 000108 */ 		}
/* 000109 */ 		if (__t__ (__eq__ (heading_level, 4))) {
/* 000110 */ 			return '{}  '.format (__call__ (add_punct, null, rendered_heading, ':'));
/* 000110 */ 		}
/* 000111 */ 		if (__t__ (__eq__ (heading_level, 5))) {
/* 000112 */ 			return '    {}  '.format (__call__ (add_punct, null, rendered_heading, ':'));
/* 000112 */ 		}
/* 000113 */ 		if (__t__ (__eq__ (heading_level, 6))) {
/* 000114 */ 			return '        {}  '.format (__call__ (add_punct, null, rendered_heading, ':'));
/* 000114 */ 		}
/* 000116 */ 		var __except0__ = __call__ (ValueError, null, 'Bad heading_level={}, expected 1..6'.format (heading_level));
/* 000116 */ 		__except0__.__cause__ = null;
/* 000116 */ 		throw __except0__;
/* 000116 */ 	});},
/* 000119 */ 	get render_verbatim () {return __get__ (this, function (self, value) {
/* 000119 */ 		var annotations = null;
/* 000119 */ 		var target_id = null;
/* 000119 */ 		if (arguments.length) {
/* 000119 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000119 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000119 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000119 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000119 */ 					switch (__attrib0__) {
/* 000119 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000119 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000119 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000119 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000119 */ 					}
/* 000119 */ 				}
/* 000119 */ 			}
/* 000119 */ 		}
/* 000119 */ 		else {
/* 000119 */ 		}
/* 000120 */ 		return value;
/* 000120 */ 	});},
/* 000122 */ 	get render_link () {return __get__ (this, function (self, ref_type, href, display_nodelist, render_context, annotations) {
/* 000122 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000122 */ 			var annotations = null;
/* 000122 */ 		};
/* 000122 */ 		if (arguments.length) {
/* 000122 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000122 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000122 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000122 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000122 */ 					switch (__attrib0__) {
/* 000122 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000122 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000122 */ 						case 'href': var href = __allkwargs0__ [__attrib0__]; break;
/* 000122 */ 						case 'display_nodelist': var display_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000122 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000122 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000122 */ 					}
/* 000122 */ 				}
/* 000122 */ 			}
/* 000122 */ 		}
/* 000122 */ 		else {
/* 000122 */ 		}
/* 000138 */ 		var display_content = (function () {
/* 000138 */ 			var __accu0__ = self;
/* 000138 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, display_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000138 */ 		}) ();
/* 000145 */ 		if (__t__ (__t__ (self.display_href_urls) && !__t__ (((function () {
/* 000145 */ 			var __accu0__ = href;
/* 000145 */ 			return __call__ (__accu0__.startswith, __accu0__, '#');
/* 000145 */ 		}) ())))) {
/* 000146 */ 			return '{} <{}>'.format (display_content, href);
/* 000146 */ 		}
/* 000147 */ 		return display_content;
/* 000147 */ 	});},
/* 000150 */ 	get render_float () {return __get__ (this, function (self, float_instance, render_context) {
/* 000150 */ 		if (arguments.length) {
/* 000150 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000150 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000150 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000150 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000150 */ 					switch (__attrib0__) {
/* 000150 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000150 */ 						case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000150 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000150 */ 					}
/* 000150 */ 				}
/* 000150 */ 			}
/* 000150 */ 		}
/* 000150 */ 		else {
/* 000150 */ 		}
/* 000152 */ 		var full_figcaption_rendered_list = [];
/* 000153 */ 		if (__t__ (float_instance.number !== null)) {
/* 000154 */ 			(function () {
/* 000154 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000155 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000155 */ 					var __accu1__ = self;
/* 000158 */ 					return __call__ (__accu1__.render_join, __accu1__, [float_instance.float_type_info.float_caption_name, '\xa0', (function () {
/* 000158 */ 						var __accu2__ = self;
/* 000158 */ 						return __call__ (__accu2__.render_nodelist, __accu2__, float_instance.formatted_counter_value_llm.nodes, __kwargtrans__ ({render_context: render_context}));
/* 000158 */ 					}) ()]);
/* 000158 */ 				}) ());
/* 000158 */ 			}) ();
/* 000158 */ 		}
/* 000162 */ 		else if (__t__ (float_instance.caption_nodelist)) {
/* 000163 */ 			(function () {
/* 000163 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000163 */ 				return __call__ (__accu0__.append, __accu0__, float_instance.float_type_info.float_caption_name);
/* 000163 */ 			}) ();
/* 000163 */ 		}
/* 000165 */ 		else {
/* 000167 */ 			// pass;
/* 000167 */ 		}
/* 000169 */ 		if (__t__ (float_instance.caption_nodelist)) {
/* 000170 */ 			(function () {
/* 000170 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000170 */ 				return __call__ (__accu0__.append, __accu0__, ': ');
/* 000170 */ 			}) ();
/* 000173 */ 			(function () {
/* 000173 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000174 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000174 */ 					var __accu1__ = self;
/* 000174 */ 					return __call__ (__accu1__.render_nodelist, __accu1__, float_instance.caption_nodelist, __kwargtrans__ ({render_context: render_context}));
/* 000174 */ 				}) ());
/* 000174 */ 			}) ();
/* 000174 */ 		}
/* 000180 */ 		var rendered_float_caption = null;
/* 000181 */ 		if (__t__ (full_figcaption_rendered_list)) {
/* 000182 */ 			var rendered_float_caption = (function () {
/* 000182 */ 				var __accu0__ = self;
/* 000182 */ 				return __call__ (__accu0__.render_join, __accu0__, full_figcaption_rendered_list);
/* 000182 */ 			}) ();
/* 000182 */ 		}
/* 000184 */ 		var float_content_block = (function () {
/* 000184 */ 			var __accu0__ = self;
/* 000184 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, float_instance.content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: true}));
/* 000184 */ 		}) ();
/* 000190 */ 		if (__t__ (rendered_float_caption !== null)) {
/* 000191 */ 			var float_content_with_caption = (function () {
/* 000191 */ 				var __accu0__ = self;
/* 000191 */ 				return __call__ (__accu0__.render_join_blocks, __accu0__, [float_content_block, rendered_float_caption]);
/* 000191 */ 			}) ();
/* 000191 */ 		}
/* 000194 */ 		else {
/* 000196 */ 			var float_content_with_caption = float_content_block;
/* 000196 */ 		}
/* 000198 */ 		return __add__ (__add__ (__add__ (__add__ (self.float_separator_top, '\n'), float_content_with_caption), '\n'), self.float_separator_bottom);
/* 000198 */ 	});},
/* 000205 */ 	get render_graphics_block () {return __get__ (this, function (self, graphics_resource) {
/* 000205 */ 		if (arguments.length) {
/* 000205 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000205 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000205 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000205 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000205 */ 					switch (__attrib0__) {
/* 000205 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000205 */ 						case 'graphics_resource': var graphics_resource = __allkwargs0__ [__attrib0__]; break;
/* 000205 */ 					}
/* 000205 */ 				}
/* 000205 */ 			}
/* 000205 */ 		}
/* 000205 */ 		else {
/* 000205 */ 		}
/* 000207 */ 		return '{}'.format (__add__ (__add__ ('[', graphics_resource.src_url), ']'));
/* 000207 */ 	});},
/* 000210 */ 	cells_column_sep: '   ',
/* 000212 */ 	get render_cells () {return __get__ (this, function (self, cells_model, render_context, target_id) {
/* 000212 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000212 */ 			var target_id = null;
/* 000212 */ 		};
/* 000212 */ 		if (arguments.length) {
/* 000212 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000212 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000212 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000212 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000212 */ 					switch (__attrib0__) {
/* 000212 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000212 */ 						case 'cells_model': var cells_model = __allkwargs0__ [__attrib0__]; break;
/* 000212 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000212 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000212 */ 					}
/* 000212 */ 				}
/* 000212 */ 			}
/* 000212 */ 		}
/* 000212 */ 		else {
/* 000212 */ 		}
/* 000215 */ 		var rendered_cells = [];
/* 000216 */ 		var __iterable0__ = cells_model.cells_data;
/* 000216 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000216 */ 			var cell = __getitem__ (__iterable0__, __index0__);
/* 000218 */ 			var rendered_cell_contents = (function () {
/* 000218 */ 				var __accu0__ = self;
/* 000218 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, cell.content_nodes, __kwargtrans__ ({render_context: render_context}));
/* 000218 */ 			}) ();
/* 000223 */ 			var rendered_cell_contents_lines = (function () {
/* 000223 */ 				var __accu0__ = rendered_cell_contents;
/* 000223 */ 				return __call__ (__accu0__.py_split, __accu0__, '\n');
/* 000223 */ 			}) ();
/* 000225 */ 			var is_header = false;
/* 000226 */ 			if (__t__ (__in__ ('H', cell.styles))) {
/* 000227 */ 				var is_header = true;
/* 000227 */ 			}
/* 000229 */ 			(function () {
/* 000229 */ 				var __accu0__ = rendered_cells;
/* 000232 */ 				return __call__ (__accu0__.append, __accu0__, dict ({'cell': cell, 'rendered_contents_lines': rendered_cell_contents_lines, 'width': __call__ (max, null, (function () {
/* 000232 */ 					var __accu1__ = [];
/* 000232 */ 					var __iterable1__ = rendered_cell_contents_lines;
/* 000232 */ 					for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000233 */ 						var line = __getitem__ (__iterable1__, __index1__);
/* 000233 */ 						(function () {
/* 000233 */ 							var __accu2__ = __accu1__;
/* 000233 */ 							return __call__ (__accu2__.append, __accu2__, __call__ (len, null, line));
/* 000233 */ 						}) ();
/* 000233 */ 					}
/* 000233 */ 					return __accu1__;
/* 000233 */ 				}) ()), 'is_header': is_header}));
/* 000233 */ 			}) ();
/* 000233 */ 		}
/* 000269 */ 		var s_items = [];
/* 000272 */ 		var __iterable0__ = rendered_cells;
/* 000272 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000272 */ 			var rcell = __getitem__ (__iterable0__, __index0__);
/* 000273 */ 			(function () {
/* 000273 */ 				var __accu0__ = s_items;
/* 000274 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000274 */ 					var __accu1__ = '\n';
/* 000274 */ 					return __call__ (__accu1__.join, __accu1__, (function () {
/* 000274 */ 						var __accu2__ = [];
/* 000274 */ 						var __iterable1__ = __getitem__ (rcell, 'rendered_contents_lines');
/* 000274 */ 						for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000274 */ 							var line = __getitem__ (__iterable1__, __index1__);
/* 000274 */ 							(function () {
/* 000274 */ 								var __accu3__ = __accu2__;
/* 000274 */ 								return __call__ (__accu3__.append, __accu3__, '    {}'.format (line));
/* 000274 */ 							}) ();
/* 000274 */ 						}
/* 000274 */ 						return __accu2__;
/* 000274 */ 					}) ());
/* 000274 */ 				}) ());
/* 000274 */ 			}) ();
/* 000274 */ 		}
/* 000277 */ 		return (function () {
/* 000277 */ 			var __accu0__ = '\n';
/* 000277 */ 			return __call__ (__accu0__.join, __accu0__, s_items);
/* 000277 */ 		}) ();
/* 000277 */ 	});}
/* 000277 */ });
/* 000007 */ 
//# sourceMappingURL=llm.fragmentrenderer.text.map