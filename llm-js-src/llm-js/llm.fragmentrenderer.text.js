/* 000001 */ // Transcrypt'ed from Python, 2022-09-10 12:43:45
/* 000007 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000007 */ import {FragmentRenderer} from './llm.fragmentrenderer._base.js';
/* 000007 */ export {FragmentRenderer};
/* 000001 */ var __name__ = 'llm.fragmentrenderer.text';
/* 000010 */ export var TextFragmentRenderer =  __class__ ('TextFragmentRenderer', [FragmentRenderer], {
/* 000010 */ 	__module__: __name__,
/* 000012 */ 	display_href_urls: true,
/* 000016 */ 	get render_value () {return __get__ (this, function (self, value) {
/* 000016 */ 		if (arguments.length) {
/* 000016 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000016 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000016 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000016 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000016 */ 					switch (__attrib0__) {
/* 000016 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000016 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000016 */ 					}
/* 000016 */ 				}
/* 000016 */ 			}
/* 000016 */ 		}
/* 000016 */ 		else {
/* 000016 */ 		}
/* 000017 */ 		return value;
/* 000017 */ 	});},
/* 000019 */ 	get render_delayed_marker () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000019 */ 		if (arguments.length) {
/* 000019 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000019 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000019 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000019 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000019 */ 					switch (__attrib0__) {
/* 000019 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000019 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000019 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000019 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000019 */ 					}
/* 000019 */ 				}
/* 000019 */ 			}
/* 000019 */ 		}
/* 000019 */ 		else {
/* 000019 */ 		}
/* 000020 */ 		return '';
/* 000020 */ 	});},
/* 000022 */ 	get render_delayed_dummy_placeholder () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000022 */ 		if (arguments.length) {
/* 000022 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000022 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000022 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000022 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000022 */ 					switch (__attrib0__) {
/* 000022 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000022 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000022 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000022 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000022 */ 					}
/* 000022 */ 				}
/* 000022 */ 			}
/* 000022 */ 		}
/* 000022 */ 		else {
/* 000022 */ 		}
/* 000023 */ 		return '#DELAYED#';
/* 000023 */ 	});},
/* 000025 */ 	get render_nothing () {return __get__ (this, function (self, annotations) {
/* 000025 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000025 */ 			var annotations = null;
/* 000025 */ 		};
/* 000025 */ 		if (arguments.length) {
/* 000025 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000025 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000025 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000025 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000025 */ 					switch (__attrib0__) {
/* 000025 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000025 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000025 */ 					}
/* 000025 */ 				}
/* 000025 */ 			}
/* 000025 */ 		}
/* 000025 */ 		else {
/* 000025 */ 		}
/* 000026 */ 		return '';
/* 000026 */ 	});},
/* 000028 */ 	get render_empty_error_placeholder () {return __get__ (this, function (self, debug_str) {
/* 000028 */ 		if (arguments.length) {
/* 000028 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000028 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000028 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000028 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000028 */ 					switch (__attrib0__) {
/* 000028 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000028 */ 						case 'debug_str': var debug_str = __allkwargs0__ [__attrib0__]; break;
/* 000028 */ 					}
/* 000028 */ 				}
/* 000028 */ 			}
/* 000028 */ 		}
/* 000028 */ 		else {
/* 000028 */ 		}
/* 000029 */ 		return '';
/* 000029 */ 	});},
/* 000031 */ 	get render_text_format () {return __get__ (this, function (self, text_formats, nodelist, render_context) {
/* 000031 */ 		if (arguments.length) {
/* 000031 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000031 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000031 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000031 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000031 */ 					switch (__attrib0__) {
/* 000031 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000031 */ 						case 'text_formats': var text_formats = __allkwargs0__ [__attrib0__]; break;
/* 000031 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000031 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000031 */ 					}
/* 000031 */ 				}
/* 000031 */ 			}
/* 000031 */ 		}
/* 000031 */ 		else {
/* 000031 */ 		}
/* 000032 */ 		var content = (function () {
/* 000032 */ 			var __accu0__ = self;
/* 000032 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, nodelist, render_context, __kwargtrans__ ({is_block_level: false}));
/* 000032 */ 		}) ();
/* 000037 */ 		return content;
/* 000037 */ 	});},
/* 000039 */ 	get render_enumeration () {return __get__ (this, function (self, iter_items_nodelists, counter_formatter, render_context) {
/* 000039 */ 		var target_id_generator = null;
/* 000039 */ 		var annotations = null;
/* 000039 */ 		var nested_depth = 0;
/* 000039 */ 		if (arguments.length) {
/* 000039 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000039 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000039 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000039 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000039 */ 					switch (__attrib0__) {
/* 000039 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000039 */ 						case 'iter_items_nodelists': var iter_items_nodelists = __allkwargs0__ [__attrib0__]; break;
/* 000039 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000039 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000039 */ 						case 'target_id_generator': var target_id_generator = __allkwargs0__ [__attrib0__]; break;
/* 000039 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000039 */ 						case 'nested_depth': var nested_depth = __allkwargs0__ [__attrib0__]; break;
/* 000039 */ 					}
/* 000039 */ 				}
/* 000039 */ 			}
/* 000039 */ 		}
/* 000039 */ 		else {
/* 000039 */ 		}
/* 000042 */ 		var all_items = [];
/* 000043 */ 		var __iterable0__ = __call__ (enumerate, null, iter_items_nodelists);
/* 000043 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000043 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000043 */ 			var j = __left0__ [0];
/* 000043 */ 			var item_content_nodelist = __left0__ [1];
/* 000045 */ 			var item_content = (function () {
/* 000045 */ 				var __accu0__ = self;
/* 000045 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, item_content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: true}));
/* 000045 */ 			}) ();
/* 000051 */ 			var tag_nodelist = __call__ (counter_formatter, null, __add__ (1, j));
/* 000052 */ 			if (__t__ (tag_nodelist === null)) {
/* 000053 */ 				var tag_content = '?';
/* 000053 */ 			}
/* 000054 */ 			else if (__t__ (__call__ (isinstance, null, tag_nodelist, str))) {
/* 000055 */ 				var tag_content = (function () {
/* 000055 */ 					var __accu0__ = self;
/* 000055 */ 					return __call__ (__accu0__.render_value, __accu0__, tag_nodelist);
/* 000055 */ 				}) ();
/* 000055 */ 			}
/* 000056 */ 			else {
/* 000057 */ 				var tag_content = (function () {
/* 000057 */ 					var __accu0__ = self;
/* 000057 */ 					return __call__ (__accu0__.render_nodelist, __accu0__, tag_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000057 */ 				}) ();
/* 000057 */ 			}
/* 000063 */ 			if (__t__ (__gt__ (nested_depth, 0))) {
/* 000064 */ 				var tag_content = __add__ (__mul__ (' ', __mul__ (4, nested_depth)), tag_content);
/* 000064 */ 			}
/* 000066 */ 			(function () {
/* 000066 */ 				var __accu0__ = all_items;
/* 000066 */ 				return __call__ (__accu0__.append, __accu0__, tuple ([tag_content, item_content]));
/* 000066 */ 			}) ();
/* 000066 */ 		}
/* 000070 */ 		if (__t__ (!__t__ ((all_items)))) {
/* 000071 */ 			return (function () {
/* 000071 */ 				var __accu0__ = self;
/* 000071 */ 				return __call__ (__accu0__.render_semantic_block, __accu0__, '', 'enumeration', __kwargtrans__ ({annotations: annotations}));
/* 000071 */ 			}) ();
/* 000071 */ 		}
/* 000073 */ 		var max_item_width = __call__ (max, null, (function () {
/* 000073 */ 			var __accu0__ = [];
/* 000073 */ 			var __iterable0__ = all_items;
/* 000073 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000073 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000073 */ 				var fmtcnt = __left0__ [0];
/* 000073 */ 				var item_content = __left0__ [1];
/* 000073 */ 				(function () {
/* 000073 */ 					var __accu1__ = __accu0__;
/* 000073 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (len, null, fmtcnt));
/* 000073 */ 				}) ();
/* 000073 */ 			}
/* 000073 */ 			return __accu0__;
/* 000073 */ 		}) ());
/* 000075 */ 		return (function () {
/* 000075 */ 			var __accu0__ = self;
/* 000075 */ 			return __call__ (__accu0__.render_join_blocks, __accu0__, (function () {
/* 000075 */ 				var __accu1__ = [];
/* 000075 */ 				var __iterable0__ = all_items;
/* 000075 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000084 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000084 */ 					var fmtcnt = __left0__ [0];
/* 000084 */ 					var item_content = __left0__ [1];
/* 000084 */ 					(function () {
/* 000084 */ 						var __accu2__ = __accu1__;
/* 000076 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000076 */ 							var __accu3__ = self;
/* 000077 */ 							return __call__ (__accu3__.render_semantic_block, __accu3__, (function () {
/* 000077 */ 								var __accu4__ = self;
/* 000078 */ 								return __call__ (__accu4__.render_join, __accu4__, [(function () {
/* 000078 */ 									var __accu5__ = self;
/* 000078 */ 									return __call__ (__accu5__.render_value, __accu5__, __add__ ((function () {
/* 000078 */ 										var __accu6__ = fmtcnt;
/* 000078 */ 										return __call__ (__accu6__.rjust, __accu6__, __add__ (max_item_width, 2), ' ');
/* 000078 */ 									}) (), ' '));
/* 000078 */ 								}) (), item_content]);
/* 000078 */ 							}) (), 'enumeration', __kwargtrans__ ({annotations: annotations}));
/* 000078 */ 						}) ());
/* 000078 */ 					}) ();
/* 000078 */ 				}
/* 000078 */ 				return __accu1__;
/* 000078 */ 			}) ());
/* 000078 */ 		}) ();
/* 000078 */ 	});},
/* 000087 */ 	get render_heading () {return __get__ (this, function (self, heading_nodelist, render_context) {
/* 000087 */ 		var heading_level = 1;
/* 000087 */ 		var target_id = null;
/* 000087 */ 		var inline_heading = false;
/* 000087 */ 		var annotations = null;
/* 000087 */ 		if (arguments.length) {
/* 000087 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000087 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000087 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000087 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000087 */ 					switch (__attrib0__) {
/* 000087 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000087 */ 						case 'heading_nodelist': var heading_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000087 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000087 */ 						case 'heading_level': var heading_level = __allkwargs0__ [__attrib0__]; break;
/* 000087 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000087 */ 						case 'inline_heading': var inline_heading = __allkwargs0__ [__attrib0__]; break;
/* 000087 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000087 */ 					}
/* 000087 */ 				}
/* 000087 */ 			}
/* 000087 */ 		}
/* 000087 */ 		else {
/* 000087 */ 		}
/* 000091 */ 		var rendered_heading = (function () {
/* 000091 */ 			var __accu0__ = self;
/* 000091 */ 			return __call__ (__accu0__.render_inline_content, __accu0__, heading_nodelist, render_context);
/* 000091 */ 		}) ();
/* 000093 */ 		var add_punct = function (x, c) {
/* 000093 */ 			if (arguments.length) {
/* 000093 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000093 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000093 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000093 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000093 */ 						switch (__attrib0__) {
/* 000093 */ 							case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000093 */ 							case 'c': var c = __allkwargs0__ [__attrib0__]; break;
/* 000093 */ 						}
/* 000093 */ 					}
/* 000093 */ 				}
/* 000093 */ 			}
/* 000093 */ 			else {
/* 000093 */ 			}
/* 000094 */ 			var x = __call__ (str, null, x);
/* 000095 */ 			if (__t__ (__in__ (__getslice__ ((function () {
/* 000095 */ 				var __accu0__ = x;
/* 000095 */ 				return __call__ (__accu0__.rstrip, __accu0__);
/* 000095 */ 			}) (), __neg__ (1), null, 1), '.,:;?!'))) {
/* 000096 */ 				return x;
/* 000096 */ 			}
/* 000097 */ 			return __add__ (x, c);
/* 000097 */ 		};
/* 000099 */ 		if (__t__ (__eq__ (heading_level, 1))) {
/* 000100 */ 			return '{}\n{}'.format (rendered_heading, __mul__ ('=', __call__ (len, null, rendered_heading)));
/* 000100 */ 		}
/* 000101 */ 		if (__t__ (__eq__ (heading_level, 2))) {
/* 000102 */ 			return '{}\n{}'.format (rendered_heading, __mul__ ('-', __call__ (len, null, rendered_heading)));
/* 000102 */ 		}
/* 000103 */ 		if (__t__ (__eq__ (heading_level, 3))) {
/* 000104 */ 			return '{}\n{}'.format (rendered_heading, __mul__ ('~', __call__ (len, null, rendered_heading)));
/* 000104 */ 		}
/* 000105 */ 		if (__t__ (__eq__ (heading_level, 4))) {
/* 000106 */ 			return '{}  '.format (__call__ (add_punct, null, rendered_heading, ':'));
/* 000106 */ 		}
/* 000107 */ 		if (__t__ (__eq__ (heading_level, 5))) {
/* 000108 */ 			return '    {}  '.format (__call__ (add_punct, null, rendered_heading, ':'));
/* 000108 */ 		}
/* 000109 */ 		if (__t__ (__eq__ (heading_level, 6))) {
/* 000110 */ 			return '        {}  '.format (__call__ (add_punct, null, rendered_heading, ':'));
/* 000110 */ 		}
/* 000112 */ 		var __except0__ = __call__ (ValueError, null, 'Bad heading_level={}, expected 1..6'.format (heading_level));
/* 000112 */ 		__except0__.__cause__ = null;
/* 000112 */ 		throw __except0__;
/* 000112 */ 	});},
/* 000115 */ 	get render_verbatim () {return __get__ (this, function (self, value) {
/* 000115 */ 		var annotations = null;
/* 000115 */ 		var target_id = null;
/* 000115 */ 		if (arguments.length) {
/* 000115 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000115 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000115 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000115 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000115 */ 					switch (__attrib0__) {
/* 000115 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000115 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000115 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000115 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000115 */ 					}
/* 000115 */ 				}
/* 000115 */ 			}
/* 000115 */ 		}
/* 000115 */ 		else {
/* 000115 */ 		}
/* 000116 */ 		return value;
/* 000116 */ 	});},
/* 000118 */ 	get render_link () {return __get__ (this, function (self, ref_type, href, display_nodelist, render_context, annotations) {
/* 000118 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000118 */ 			var annotations = null;
/* 000118 */ 		};
/* 000118 */ 		if (arguments.length) {
/* 000118 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000118 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000118 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000118 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000118 */ 					switch (__attrib0__) {
/* 000118 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000118 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000118 */ 						case 'href': var href = __allkwargs0__ [__attrib0__]; break;
/* 000118 */ 						case 'display_nodelist': var display_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000118 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000118 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000118 */ 					}
/* 000118 */ 				}
/* 000118 */ 			}
/* 000118 */ 		}
/* 000118 */ 		else {
/* 000118 */ 		}
/* 000134 */ 		var display_content = (function () {
/* 000134 */ 			var __accu0__ = self;
/* 000134 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, display_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000134 */ 		}) ();
/* 000141 */ 		if (__t__ (__t__ (self.display_href_urls) && !__t__ (((function () {
/* 000141 */ 			var __accu0__ = href;
/* 000141 */ 			return __call__ (__accu0__.startswith, __accu0__, '#');
/* 000141 */ 		}) ())))) {
/* 000142 */ 			return '{} <{}>'.format (display_content, href);
/* 000142 */ 		}
/* 000143 */ 		return display_content;
/* 000143 */ 	});},
/* 000146 */ 	get render_float () {return __get__ (this, function (self, float_instance, render_context) {
/* 000146 */ 		if (arguments.length) {
/* 000146 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000146 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000146 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000146 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000146 */ 					switch (__attrib0__) {
/* 000146 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000146 */ 						case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000146 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000146 */ 					}
/* 000146 */ 				}
/* 000146 */ 			}
/* 000146 */ 		}
/* 000146 */ 		else {
/* 000146 */ 		}
/* 000148 */ 		var full_figcaption_rendered_list = [];
/* 000149 */ 		if (__t__ (float_instance.number !== null)) {
/* 000150 */ 			(function () {
/* 000150 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000151 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000151 */ 					var __accu1__ = self;
/* 000154 */ 					return __call__ (__accu1__.render_join, __accu1__, [float_instance.float_type_info.float_caption_name, '\xa0', (function () {
/* 000154 */ 						var __accu2__ = self;
/* 000154 */ 						return __call__ (__accu2__.render_nodelist, __accu2__, float_instance.formatted_counter_value_llm.nodes, __kwargtrans__ ({render_context: render_context}));
/* 000154 */ 					}) ()]);
/* 000154 */ 				}) ());
/* 000154 */ 			}) ();
/* 000154 */ 		}
/* 000158 */ 		else if (__t__ (float_instance.caption_nodelist)) {
/* 000159 */ 			(function () {
/* 000159 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000159 */ 				return __call__ (__accu0__.append, __accu0__, float_instance.float_type_info.float_caption_name);
/* 000159 */ 			}) ();
/* 000159 */ 		}
/* 000161 */ 		else {
/* 000163 */ 			// pass;
/* 000163 */ 		}
/* 000165 */ 		if (__t__ (float_instance.caption_nodelist)) {
/* 000166 */ 			(function () {
/* 000166 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000166 */ 				return __call__ (__accu0__.append, __accu0__, ': ');
/* 000166 */ 			}) ();
/* 000169 */ 			(function () {
/* 000169 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000170 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000170 */ 					var __accu1__ = self;
/* 000170 */ 					return __call__ (__accu1__.render_nodelist, __accu1__, float_instance.caption_nodelist, __kwargtrans__ ({render_context: render_context}));
/* 000170 */ 				}) ());
/* 000170 */ 			}) ();
/* 000170 */ 		}
/* 000176 */ 		var rendered_float_caption = null;
/* 000177 */ 		if (__t__ (full_figcaption_rendered_list)) {
/* 000178 */ 			var rendered_float_caption = (function () {
/* 000178 */ 				var __accu0__ = self;
/* 000178 */ 				return __call__ (__accu0__.render_join, __accu0__, full_figcaption_rendered_list);
/* 000178 */ 			}) ();
/* 000178 */ 		}
/* 000180 */ 		var float_content_block = (function () {
/* 000180 */ 			var __accu0__ = self;
/* 000180 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, float_instance.content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: true}));
/* 000180 */ 		}) ();
/* 000186 */ 		if (__t__ (rendered_float_caption !== null)) {
/* 000187 */ 			var float_content_with_caption = (function () {
/* 000187 */ 				var __accu0__ = self;
/* 000187 */ 				return __call__ (__accu0__.render_join_blocks, __accu0__, [float_content_block, rendered_float_caption]);
/* 000187 */ 			}) ();
/* 000187 */ 		}
/* 000190 */ 		else {
/* 000192 */ 			var float_content_with_caption = float_content_block;
/* 000192 */ 		}
/* 000194 */ 		var fig_sep = __mul__ ('·', 80);
/* 000196 */ 		return __add__ (__add__ (__add__ (__add__ (fig_sep, '\n'), float_content_with_caption), '\n'), fig_sep);
/* 000196 */ 	});},
/* 000201 */ 	get render_graphics_block () {return __get__ (this, function (self, graphics_resource) {
/* 000201 */ 		if (arguments.length) {
/* 000201 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000201 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000201 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000201 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000201 */ 					switch (__attrib0__) {
/* 000201 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000201 */ 						case 'graphics_resource': var graphics_resource = __allkwargs0__ [__attrib0__]; break;
/* 000201 */ 					}
/* 000201 */ 				}
/* 000201 */ 			}
/* 000201 */ 		}
/* 000201 */ 		else {
/* 000201 */ 		}
/* 000203 */ 		return '{}'.format (__add__ (__add__ ('[', graphics_resource.src_url), ']'));
/* 000203 */ 	});}
/* 000203 */ });
/* 000007 */ 
//# sourceMappingURL=llm.fragmentrenderer.text.map