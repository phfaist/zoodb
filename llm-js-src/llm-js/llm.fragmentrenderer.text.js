/* 000001 */ // Transcrypt'ed from Python, 2023-04-09 01:44:41
/* 000007 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000007 */ import {FragmentRenderer} from './llm.fragmentrenderer._base.js';
/* 000007 */ export {FragmentRenderer};
/* 000001 */ var __name__ = 'llm.fragmentrenderer.text';
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
/* 000097 */ 	get render_heading () {return __get__ (this, function (self, heading_nodelist, render_context) {
/* 000097 */ 		var heading_level = 1;
/* 000097 */ 		var target_id = null;
/* 000097 */ 		var inline_heading = false;
/* 000097 */ 		var annotations = null;
/* 000097 */ 		if (arguments.length) {
/* 000097 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000097 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000097 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000097 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000097 */ 					switch (__attrib0__) {
/* 000097 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000097 */ 						case 'heading_nodelist': var heading_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000097 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000097 */ 						case 'heading_level': var heading_level = __allkwargs0__ [__attrib0__]; break;
/* 000097 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000097 */ 						case 'inline_heading': var inline_heading = __allkwargs0__ [__attrib0__]; break;
/* 000097 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000097 */ 					}
/* 000097 */ 				}
/* 000097 */ 			}
/* 000097 */ 		}
/* 000097 */ 		else {
/* 000097 */ 		}
/* 000101 */ 		var rendered_heading = (function () {
/* 000101 */ 			var __accu0__ = self;
/* 000101 */ 			return __call__ (__accu0__.render_inline_content, __accu0__, heading_nodelist, render_context);
/* 000101 */ 		}) ();
/* 000103 */ 		var add_punct = function (x, c) {
/* 000103 */ 			if (arguments.length) {
/* 000103 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000103 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000103 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000103 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000103 */ 						switch (__attrib0__) {
/* 000103 */ 							case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000103 */ 							case 'c': var c = __allkwargs0__ [__attrib0__]; break;
/* 000103 */ 						}
/* 000103 */ 					}
/* 000103 */ 				}
/* 000103 */ 			}
/* 000103 */ 			else {
/* 000103 */ 			}
/* 000104 */ 			var x = __call__ (str, null, x);
/* 000105 */ 			if (__t__ (__in__ (__getslice__ ((function () {
/* 000105 */ 				var __accu0__ = x;
/* 000105 */ 				return __call__ (__accu0__.rstrip, __accu0__);
/* 000105 */ 			}) (), __neg__ (1), null, 1), '.,:;?!'))) {
/* 000106 */ 				return x;
/* 000106 */ 			}
/* 000107 */ 			return __add__ (x, c);
/* 000107 */ 		};
/* 000109 */ 		if (__t__ (__eq__ (heading_level, 1))) {
/* 000110 */ 			return '{}\n{}'.format (rendered_heading, __mul__ ('=', __call__ (len, null, rendered_heading)));
/* 000110 */ 		}
/* 000111 */ 		if (__t__ (__eq__ (heading_level, 2))) {
/* 000112 */ 			return '{}\n{}'.format (rendered_heading, __mul__ ('-', __call__ (len, null, rendered_heading)));
/* 000112 */ 		}
/* 000113 */ 		if (__t__ (__eq__ (heading_level, 3))) {
/* 000114 */ 			return '{}\n{}'.format (rendered_heading, __mul__ ('~', __call__ (len, null, rendered_heading)));
/* 000114 */ 		}
/* 000115 */ 		if (__t__ (__eq__ (heading_level, 4))) {
/* 000116 */ 			return '{}  '.format (__call__ (add_punct, null, rendered_heading, ':'));
/* 000116 */ 		}
/* 000117 */ 		if (__t__ (__eq__ (heading_level, 5))) {
/* 000118 */ 			return '    {}  '.format (__call__ (add_punct, null, rendered_heading, ':'));
/* 000118 */ 		}
/* 000119 */ 		if (__t__ (__eq__ (heading_level, 6))) {
/* 000120 */ 			return '        {}  '.format (__call__ (add_punct, null, rendered_heading, ':'));
/* 000120 */ 		}
/* 000122 */ 		var __except0__ = __call__ (ValueError, null, 'Bad heading_level={}, expected 1..6'.format (heading_level));
/* 000122 */ 		__except0__.__cause__ = null;
/* 000122 */ 		throw __except0__;
/* 000122 */ 	});},
/* 000125 */ 	get render_verbatim () {return __get__ (this, function (self, value, render_context) {
/* 000125 */ 		var is_block_level = false;
/* 000125 */ 		var annotations = null;
/* 000125 */ 		var target_id = null;
/* 000125 */ 		if (arguments.length) {
/* 000125 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000125 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000125 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000125 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000125 */ 					switch (__attrib0__) {
/* 000125 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000125 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000125 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000125 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000125 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000125 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000125 */ 					}
/* 000125 */ 				}
/* 000125 */ 			}
/* 000125 */ 		}
/* 000125 */ 		else {
/* 000125 */ 		}
/* 000127 */ 		return value;
/* 000127 */ 	});},
/* 000129 */ 	get render_link () {return __get__ (this, function (self, ref_type, href, display_nodelist, render_context, annotations) {
/* 000129 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000129 */ 			var annotations = null;
/* 000129 */ 		};
/* 000129 */ 		if (arguments.length) {
/* 000129 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000129 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000129 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000129 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000129 */ 					switch (__attrib0__) {
/* 000129 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000129 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000129 */ 						case 'href': var href = __allkwargs0__ [__attrib0__]; break;
/* 000129 */ 						case 'display_nodelist': var display_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000129 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000129 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000129 */ 					}
/* 000129 */ 				}
/* 000129 */ 			}
/* 000129 */ 		}
/* 000129 */ 		else {
/* 000129 */ 		}
/* 000145 */ 		var display_content = (function () {
/* 000145 */ 			var __accu0__ = self;
/* 000145 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, display_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000145 */ 		}) ();
/* 000152 */ 		if (__t__ (__t__ (self.display_href_urls) && !__t__ (((function () {
/* 000152 */ 			var __accu0__ = href;
/* 000152 */ 			return __call__ (__accu0__.startswith, __accu0__, '#');
/* 000152 */ 		}) ())))) {
/* 000153 */ 			return '{} <{}>'.format (display_content, href);
/* 000153 */ 		}
/* 000154 */ 		return display_content;
/* 000154 */ 	});},
/* 000157 */ 	get render_float () {return __get__ (this, function (self, float_instance, render_context) {
/* 000157 */ 		if (arguments.length) {
/* 000157 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000157 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000157 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000157 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000157 */ 					switch (__attrib0__) {
/* 000157 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000157 */ 						case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000157 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000157 */ 					}
/* 000157 */ 				}
/* 000157 */ 			}
/* 000157 */ 		}
/* 000157 */ 		else {
/* 000157 */ 		}
/* 000159 */ 		var full_figcaption_rendered_list = [];
/* 000160 */ 		if (__t__ (float_instance.number !== null)) {
/* 000161 */ 			(function () {
/* 000161 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000162 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000162 */ 					var __accu1__ = self;
/* 000165 */ 					return __call__ (__accu1__.render_join, __accu1__, [float_instance.float_type_info.float_caption_name, '\xa0', (function () {
/* 000165 */ 						var __accu2__ = self;
/* 000165 */ 						return __call__ (__accu2__.render_nodelist, __accu2__, float_instance.formatted_counter_value_llm.nodes, __kwargtrans__ ({render_context: render_context}));
/* 000165 */ 					}) ()], render_context);
/* 000165 */ 				}) ());
/* 000165 */ 			}) ();
/* 000165 */ 		}
/* 000169 */ 		else if (__t__ (float_instance.caption_nodelist)) {
/* 000170 */ 			(function () {
/* 000170 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000170 */ 				return __call__ (__accu0__.append, __accu0__, float_instance.float_type_info.float_caption_name);
/* 000170 */ 			}) ();
/* 000170 */ 		}
/* 000172 */ 		else {
/* 000174 */ 			// pass;
/* 000174 */ 		}
/* 000176 */ 		if (__t__ (float_instance.caption_nodelist)) {
/* 000177 */ 			(function () {
/* 000177 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000177 */ 				return __call__ (__accu0__.append, __accu0__, ': ');
/* 000177 */ 			}) ();
/* 000180 */ 			(function () {
/* 000180 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000181 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000181 */ 					var __accu1__ = self;
/* 000181 */ 					return __call__ (__accu1__.render_nodelist, __accu1__, float_instance.caption_nodelist, __kwargtrans__ ({render_context: render_context}));
/* 000181 */ 				}) ());
/* 000181 */ 			}) ();
/* 000181 */ 		}
/* 000187 */ 		var rendered_float_caption = null;
/* 000188 */ 		if (__t__ (full_figcaption_rendered_list)) {
/* 000189 */ 			var rendered_float_caption = (function () {
/* 000189 */ 				var __accu0__ = self;
/* 000189 */ 				return __call__ (__accu0__.render_join, __accu0__, full_figcaption_rendered_list, render_context);
/* 000189 */ 			}) ();
/* 000189 */ 		}
/* 000192 */ 		var float_content_block = (function () {
/* 000192 */ 			var __accu0__ = self;
/* 000192 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, float_instance.content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: true}));
/* 000192 */ 		}) ();
/* 000198 */ 		if (__t__ (rendered_float_caption !== null)) {
/* 000199 */ 			var float_content_with_caption = (function () {
/* 000199 */ 				var __accu0__ = self;
/* 000199 */ 				return __call__ (__accu0__.render_join_blocks, __accu0__, [float_content_block, rendered_float_caption], render_context);
/* 000199 */ 			}) ();
/* 000199 */ 		}
/* 000203 */ 		else {
/* 000204 */ 			var float_content_with_caption = float_content_block;
/* 000204 */ 		}
/* 000206 */ 		return __add__ (__add__ (__add__ (__add__ (self.float_separator_top, '\n'), float_content_with_caption), '\n'), self.float_separator_bottom);
/* 000206 */ 	});},
/* 000213 */ 	get render_graphics_block () {return __get__ (this, function (self, graphics_resource, render_context) {
/* 000213 */ 		if (arguments.length) {
/* 000213 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000213 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000213 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000213 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000213 */ 					switch (__attrib0__) {
/* 000213 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000213 */ 						case 'graphics_resource': var graphics_resource = __allkwargs0__ [__attrib0__]; break;
/* 000213 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000213 */ 					}
/* 000213 */ 				}
/* 000213 */ 			}
/* 000213 */ 		}
/* 000213 */ 		else {
/* 000213 */ 		}
/* 000215 */ 		return '{}'.format (__add__ (__add__ ('[', graphics_resource.src_url), ']'));
/* 000215 */ 	});},
/* 000218 */ 	cells_column_sep: '   ',
/* 000220 */ 	get render_cells () {return __get__ (this, function (self, cells_model, render_context, target_id) {
/* 000220 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000220 */ 			var target_id = null;
/* 000220 */ 		};
/* 000220 */ 		if (arguments.length) {
/* 000220 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000220 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000220 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000220 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000220 */ 					switch (__attrib0__) {
/* 000220 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000220 */ 						case 'cells_model': var cells_model = __allkwargs0__ [__attrib0__]; break;
/* 000220 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000220 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000220 */ 					}
/* 000220 */ 				}
/* 000220 */ 			}
/* 000220 */ 		}
/* 000220 */ 		else {
/* 000220 */ 		}
/* 000223 */ 		var rendered_cells = [];
/* 000224 */ 		var __iterable0__ = cells_model.cells_data;
/* 000224 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000224 */ 			var cell = __getitem__ (__iterable0__, __index0__);
/* 000226 */ 			var rendered_cell_contents = (function () {
/* 000226 */ 				var __accu0__ = self;
/* 000226 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, cell.content_nodes, __kwargtrans__ ({render_context: render_context}));
/* 000226 */ 			}) ();
/* 000231 */ 			var rendered_cell_contents_lines = (function () {
/* 000231 */ 				var __accu0__ = rendered_cell_contents;
/* 000231 */ 				return __call__ (__accu0__.py_split, __accu0__, '\n');
/* 000231 */ 			}) ();
/* 000233 */ 			var is_header = false;
/* 000234 */ 			if (__t__ (__in__ ('H', cell.styles))) {
/* 000235 */ 				var is_header = true;
/* 000235 */ 			}
/* 000237 */ 			(function () {
/* 000237 */ 				var __accu0__ = rendered_cells;
/* 000240 */ 				return __call__ (__accu0__.append, __accu0__, dict ({'cell': cell, 'rendered_contents_lines': rendered_cell_contents_lines, 'width': __call__ (max, null, (function () {
/* 000240 */ 					var __accu1__ = [];
/* 000240 */ 					var __iterable1__ = rendered_cell_contents_lines;
/* 000240 */ 					for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000241 */ 						var line = __getitem__ (__iterable1__, __index1__);
/* 000241 */ 						(function () {
/* 000241 */ 							var __accu2__ = __accu1__;
/* 000241 */ 							return __call__ (__accu2__.append, __accu2__, __call__ (len, null, line));
/* 000241 */ 						}) ();
/* 000241 */ 					}
/* 000241 */ 					return __accu1__;
/* 000241 */ 				}) ()), 'is_header': is_header}));
/* 000241 */ 			}) ();
/* 000241 */ 		}
/* 000277 */ 		var s_items = [];
/* 000280 */ 		var __iterable0__ = rendered_cells;
/* 000280 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000280 */ 			var rcell = __getitem__ (__iterable0__, __index0__);
/* 000281 */ 			(function () {
/* 000281 */ 				var __accu0__ = s_items;
/* 000282 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000282 */ 					var __accu1__ = '\n';
/* 000282 */ 					return __call__ (__accu1__.join, __accu1__, (function () {
/* 000282 */ 						var __accu2__ = [];
/* 000282 */ 						var __iterable1__ = __getitem__ (rcell, 'rendered_contents_lines');
/* 000282 */ 						for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000282 */ 							var line = __getitem__ (__iterable1__, __index1__);
/* 000282 */ 							(function () {
/* 000282 */ 								var __accu3__ = __accu2__;
/* 000282 */ 								return __call__ (__accu3__.append, __accu3__, '    {}'.format (line));
/* 000282 */ 							}) ();
/* 000282 */ 						}
/* 000282 */ 						return __accu2__;
/* 000282 */ 					}) ());
/* 000282 */ 				}) ());
/* 000282 */ 			}) ();
/* 000282 */ 		}
/* 000285 */ 		return (function () {
/* 000285 */ 			var __accu0__ = '\n';
/* 000285 */ 			return __call__ (__accu0__.join, __accu0__, s_items);
/* 000285 */ 		}) ();
/* 000285 */ 	});}
/* 000285 */ });
/* 000290 */ export var FragmentRendererInformation =  __class__ ('FragmentRendererInformation', [object], {
/* 000290 */ 	__module__: __name__,
/* 000291 */ 	FragmentRendererClass: TextFragmentRenderer,
/* 000292 */ 	format_name: 'text'
/* 000292 */ });
/* 000007 */ 
//# sourceMappingURL=llm.fragmentrenderer.text.map