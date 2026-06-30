/* 000001 */ // Transcrypt'ed from Python, 2026-06-30 21:51:25
/* 000006 */ var logging = {};
/* 000006 */ var re = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000014 */ import {HtmlFragmentRenderer} from './flm.fragmentrenderer.html.js';
/* 000013 */ import {FragmentRenderer} from './flm.fragmentrenderer.js';
/* 000011 */ import {Callable, Literal, Mapping} from './flm._typing_helpers.js';
/* 000008 */ import * as __module_logging__ from './logging.js';
/* 000008 */ __nest__ (logging, '', __module_logging__);
/* 000006 */ import * as __module_re__ from './re.js';
/* 000006 */ __nest__ (re, '', __module_re__);
/* 000006 */ export {Callable, Mapping, Literal, HtmlFragmentRenderer, FragmentRenderer};
/* 000001 */ var __name__ = 'flm.fragmentrenderer.markdown';
/* 000009 */ export var logger = (function () {
/* 000009 */ 	var __accu0__ = logging;
/* 000009 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000009 */ }) ();
/* 000017 */ export var rx_mdspecials = (function () {
/* 000017 */ 	var __accu0__ = re;
/* 000017 */ 	return __call__ (__accu0__.compile, __accu0__, '[\\\\`*_~{}\\[\\]<>()#+.!|-]');
/* 000017 */ }) ();
/* 000021 */ export var MarkdownFragmentRenderer =  __class__ ('MarkdownFragmentRenderer', [FragmentRenderer], {
/* 000021 */ 	__module__: __name__,
/* 000040 */ 	supports_delayed_render_markers: true,
/* 000047 */ 	use_target_ids: 'anchor',
/* 000047 */ 	heading_level_formatter: dict ({1: (function __lambda__ (s) {
/* 000047 */ 		if (arguments.length) {
/* 000047 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000047 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000047 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000047 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000047 */ 					switch (__attrib0__) {
/* 000047 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000047 */ 					}
/* 000047 */ 				}
/* 000047 */ 			}
/* 000047 */ 		}
/* 000047 */ 		else {
/* 000047 */ 		}
/* 000047 */ 		return '# {}'.format (s);
/* 000047 */ 	}), 2: (function __lambda__ (s) {
/* 000047 */ 		if (arguments.length) {
/* 000047 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000047 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000047 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000047 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000047 */ 					switch (__attrib0__) {
/* 000047 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000047 */ 					}
/* 000047 */ 				}
/* 000047 */ 			}
/* 000047 */ 		}
/* 000047 */ 		else {
/* 000047 */ 		}
/* 000047 */ 		return '## {}'.format (s);
/* 000047 */ 	}), 3: (function __lambda__ (s) {
/* 000047 */ 		if (arguments.length) {
/* 000047 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000047 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000047 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000047 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000047 */ 					switch (__attrib0__) {
/* 000047 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000047 */ 					}
/* 000047 */ 				}
/* 000047 */ 			}
/* 000047 */ 		}
/* 000047 */ 		else {
/* 000047 */ 		}
/* 000047 */ 		return '### {}'.format (s);
/* 000047 */ 	}), 4: (function __lambda__ (s) {
/* 000047 */ 		if (arguments.length) {
/* 000047 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000047 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000047 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000047 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000047 */ 					switch (__attrib0__) {
/* 000047 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000047 */ 					}
/* 000047 */ 				}
/* 000047 */ 			}
/* 000047 */ 		}
/* 000047 */ 		else {
/* 000047 */ 		}
/* 000047 */ 		return '#### {}'.format (s);
/* 000047 */ 	}), 5: (function __lambda__ (s) {
/* 000047 */ 		if (arguments.length) {
/* 000047 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000047 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000047 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000047 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000047 */ 					switch (__attrib0__) {
/* 000047 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000047 */ 					}
/* 000047 */ 				}
/* 000047 */ 			}
/* 000047 */ 		}
/* 000047 */ 		else {
/* 000047 */ 		}
/* 000047 */ 		return '##### {}'.format (s);
/* 000047 */ 	}), 6: (function __lambda__ (s) {
/* 000047 */ 		if (arguments.length) {
/* 000047 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000047 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000047 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000047 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000047 */ 					switch (__attrib0__) {
/* 000047 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000047 */ 					}
/* 000047 */ 				}
/* 000047 */ 			}
/* 000047 */ 		}
/* 000047 */ 		else {
/* 000047 */ 		}
/* 000047 */ 		return '###### {}'.format (s);
/* 000047 */ 	}), 'theorem': (function __lambda__ (s) {
/* 000047 */ 		if (arguments.length) {
/* 000047 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000047 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000047 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000047 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000047 */ 					switch (__attrib0__) {
/* 000047 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000047 */ 					}
/* 000047 */ 				}
/* 000047 */ 			}
/* 000047 */ 		}
/* 000047 */ 		else {
/* 000047 */ 		}
/* 000047 */ 		return '{}.  '.format (s);
/* 000055 */ 	})}),
/* 000073 */ 	get render_build_paragraph () {return __get__ (this, function (self, nodelist, render_context) {
/* 000073 */ 		if (arguments.length) {
/* 000073 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000073 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000073 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000073 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000073 */ 					switch (__attrib0__) {
/* 000073 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000073 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000073 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000073 */ 					}
/* 000073 */ 				}
/* 000073 */ 			}
/* 000073 */ 		}
/* 000073 */ 		else {
/* 000073 */ 		}
/* 000075 */ 		var content = (function () {
/* 000075 */ 			var __accu0__ = self;
/* 000075 */ 			return __call__ (__accu0__.render_inline_content, __accu0__, nodelist, render_context);
/* 000075 */ 		}) ();
/* 000077 */ 		var md_indent = (function () {
/* 000077 */ 			var __accu0__ = (function () {
/* 000077 */ 				var __accu1__ = render_context;
/* 000077 */ 				return __call__ (__accu1__.get_logical_state, __accu1__, 'flm_markdown');
/* 000077 */ 			}) ();
/* 000077 */ 			return __call__ (__accu0__.py_get, __accu0__, 'md_indent', '');
/* 000077 */ 		}) ();
/* 000078 */ 		if (__t__ (__ne__ (md_indent, ''))) {
/* 000079 */ 			var content = __add__ (md_indent, (function () {
/* 000079 */ 				var __accu0__ = content;
/* 000079 */ 				return __call__ (__accu0__.py_replace, __accu0__, '\n', __add__ ('\n', md_indent));
/* 000079 */ 			}) ());
/* 000079 */ 		}
/* 000080 */ 		return __add__ ('\n\n', content);
/* 000080 */ 	});},
/* 000082 */ 	get render_inline_content () {return __get__ (this, function (self, nodelist, render_context) {
/* 000082 */ 		if (arguments.length) {
/* 000082 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000082 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000082 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000082 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000082 */ 					switch (__attrib0__) {
/* 000082 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000082 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000082 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000082 */ 					}
/* 000082 */ 				}
/* 000082 */ 			}
/* 000082 */ 		}
/* 000082 */ 		else {
/* 000082 */ 		}
/* 000083 */ 		var result = (function () {
/* 000083 */ 			var __accu0__ = self;
/* 000083 */ 			return __call__ (__accu0__.render_join, __accu0__, (function () {
/* 000083 */ 				var __accu1__ = [];
/* 000084 */ 				var __iterable0__ = nodelist;
/* 000084 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000084 */ 					var n = __getitem__ (__iterable0__, __index0__);
/* 000084 */ 					(function () {
/* 000084 */ 						var __accu2__ = __accu1__;
/* 000084 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000084 */ 							var __accu3__ = self;
/* 000084 */ 							return __call__ (__accu3__.render_node, __accu3__, n, render_context);
/* 000084 */ 						}) ());
/* 000084 */ 					}) ();
/* 000084 */ 				}
/* 000084 */ 				return __accu1__;
/* 000084 */ 			}) (), render_context);
/* 000084 */ 		}) ();
/* 000087 */ 		// pass;
/* 000090 */ 		return result;
/* 000090 */ 	});},
/* 000092 */ 	get render_join () {return __get__ (this, function (self, content_list, render_context) {
/* 000092 */ 		if (arguments.length) {
/* 000092 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000092 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000092 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000092 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000092 */ 					switch (__attrib0__) {
/* 000092 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000092 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000092 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000092 */ 					}
/* 000092 */ 				}
/* 000092 */ 			}
/* 000092 */ 		}
/* 000092 */ 		else {
/* 000092 */ 		}
/* 000098 */ 		var result = (function () {
/* 000098 */ 			var __accu0__ = '';
/* 000098 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000098 */ 				var __accu1__ = [];
/* 000098 */ 				var __iterable0__ = content_list;
/* 000098 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000098 */ 					var s = __getitem__ (__iterable0__, __index0__);
/* 000098 */ 					(function () {
/* 000098 */ 						var __accu2__ = __accu1__;
/* 000098 */ 						return __call__ (__accu2__.append, __accu2__, __call__ (str, null, s));
/* 000098 */ 					}) ();
/* 000098 */ 				}
/* 000098 */ 				return __accu1__;
/* 000098 */ 			}) ());
/* 000098 */ 		}) ();
/* 000099 */ 		// pass;
/* 000102 */ 		return result;
/* 000102 */ 	});},
/* 000104 */ 	get render_join_blocks () {return __get__ (this, function (self, content_list, render_context) {
/* 000104 */ 		if (arguments.length) {
/* 000104 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000104 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000104 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000104 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000104 */ 					switch (__attrib0__) {
/* 000104 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000104 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000104 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000104 */ 					}
/* 000104 */ 				}
/* 000104 */ 			}
/* 000104 */ 		}
/* 000104 */ 		else {
/* 000104 */ 		}
/* 000112 */ 		var content = (function () {
/* 000112 */ 			var __accu0__ = '\n\n';
/* 000112 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000112 */ 				var __accu1__ = [];
/* 000113 */ 				var __iterable0__ = content_list;
/* 000113 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000113 */ 					var c = __getitem__ (__iterable0__, __index0__);
/* 000113 */ 					if (__t__ (__t__ (c !== null) && __call__ (len, null, c))) {
/* 000113 */ 						(function () {
/* 000113 */ 							var __accu2__ = __accu1__;
/* 000113 */ 							return __call__ (__accu2__.append, __accu2__, c);
/* 000113 */ 						}) ();
/* 000113 */ 					}
/* 000113 */ 				}
/* 000113 */ 				return __accu1__;
/* 000113 */ 			}) ());
/* 000113 */ 		}) ();
/* 000115 */ 		// pass;
/* 000118 */ 		return (function () {
/* 000118 */ 			var __accu0__ = (function () {
/* 000118 */ 				var __accu1__ = re;
/* 000118 */ 				return __call__ (__accu1__.sub, __accu1__, '\\n{2,}', '\n\n', content);
/* 000118 */ 			}) ();
/* 000118 */ 			return __call__ (__accu0__.strip, __accu0__);
/* 000118 */ 		}) ();
/* 000118 */ 	});},
/* 000123 */ 	get render_value () {return __get__ (this, function (self, value, render_context) {
/* 000123 */ 		if (arguments.length) {
/* 000123 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000123 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000123 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000123 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000123 */ 					switch (__attrib0__) {
/* 000123 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000123 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000123 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000123 */ 					}
/* 000123 */ 				}
/* 000123 */ 			}
/* 000123 */ 		}
/* 000123 */ 		else {
/* 000123 */ 		}
/* 000124 */ 		return (function () {
/* 000124 */ 			var __accu0__ = rx_mdspecials;
/* 000124 */ 			return __call__ (__accu0__.sub, __accu0__, (function __lambda__ (m) {
/* 000124 */ 				if (arguments.length) {
/* 000124 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000124 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000124 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000124 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000124 */ 							switch (__attrib0__) {
/* 000124 */ 								case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000124 */ 							}
/* 000124 */ 						}
/* 000124 */ 					}
/* 000124 */ 				}
/* 000124 */ 				else {
/* 000124 */ 				}
/* 000124 */ 				return __add__ ('\\', (function () {
/* 000124 */ 					var __accu1__ = m;
/* 000124 */ 					return __call__ (__accu1__.group, __accu1__);
/* 000124 */ 				}) ());
/* 000124 */ 			}), value);
/* 000124 */ 		}) ();
/* 000124 */ 	});},
/* 000126 */ 	get render_empty_error_placeholder () {return __get__ (this, function (self, debug_str, render_context) {
/* 000126 */ 		if (arguments.length) {
/* 000126 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000126 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000126 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000126 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000126 */ 					switch (__attrib0__) {
/* 000126 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000126 */ 						case 'debug_str': var debug_str = __allkwargs0__ [__attrib0__]; break;
/* 000126 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000126 */ 					}
/* 000126 */ 				}
/* 000126 */ 			}
/* 000126 */ 		}
/* 000126 */ 		else {
/* 000126 */ 		}
/* 000127 */ 		return '';
/* 000127 */ 	});},
/* 000129 */ 	get render_nothing () {return __get__ (this, function (self, render_context, annotations) {
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
/* 000129 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000129 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000129 */ 					}
/* 000129 */ 				}
/* 000129 */ 			}
/* 000129 */ 		}
/* 000129 */ 		else {
/* 000129 */ 		}
/* 000130 */ 		return '';
/* 000130 */ 	});},
/* 000132 */ 	get render_verbatim () {return __get__ (this, function (self, value, render_context) {
/* 000132 */ 		var is_block_level = false;
/* 000132 */ 		var annotations = null;
/* 000132 */ 		var target_id = null;
/* 000132 */ 		if (arguments.length) {
/* 000132 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000132 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000132 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000132 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000132 */ 					switch (__attrib0__) {
/* 000132 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000132 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000132 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000132 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000132 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000132 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000132 */ 					}
/* 000132 */ 				}
/* 000132 */ 			}
/* 000132 */ 		}
/* 000132 */ 		else {
/* 000132 */ 		}
/* 000134 */ 		var value = (function () {
/* 000134 */ 			var __accu0__ = value;
/* 000134 */ 			return __call__ (__accu0__.py_replace, __accu0__, '``', '` ` ');
/* 000134 */ 		}) ();
/* 000136 */ 		return __add__ (__add__ (__add__ ((function () {
/* 000136 */ 			var __accu0__ = self;
/* 000136 */ 			return __call__ (__accu0__._get_target_id_md_code, __accu0__, target_id);
/* 000137 */ 		}) (), '`` '), (function () {
/* 000137 */ 			var __accu0__ = self;
/* 000137 */ 			return __call__ (__accu0__.render_value, __accu0__, value, render_context);
/* 000137 */ 		}) ()), ' ``');
/* 000137 */ 	});},
/* 000140 */ 	get render_math_content () {return __get__ (this, function (self, delimiters, nodelist, render_context, displaytype, environmentname, target_id) {
/* 000140 */ 		if (typeof environmentname == 'undefined' || (environmentname != null && environmentname.hasOwnProperty ("__kwargtrans__"))) {;
/* 000140 */ 			var environmentname = null;
/* 000140 */ 		};
/* 000140 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000140 */ 			var target_id = null;
/* 000140 */ 		};
/* 000140 */ 		if (arguments.length) {
/* 000140 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000140 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000140 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000140 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000140 */ 					switch (__attrib0__) {
/* 000140 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000140 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000140 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000140 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000140 */ 						case 'displaytype': var displaytype = __allkwargs0__ [__attrib0__]; break;
/* 000140 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000140 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000140 */ 					}
/* 000140 */ 				}
/* 000140 */ 			}
/* 000140 */ 		}
/* 000140 */ 		else {
/* 000140 */ 		}
/* 000148 */ 		var content = __add__ (__add__ (__getitem__ (delimiters, 0), (function () {
/* 000148 */ 			var __accu0__ = self;
/* 000148 */ 			return __call__ (__accu0__.recompose_latex, __accu0__, nodelist);
/* 000148 */ 		}) ()), __getitem__ (delimiters, 1));
/* 000149 */ 		var content = (function () {
/* 000149 */ 			var __accu0__ = self;
/* 000149 */ 			return __call__ (__accu0__.render_value, __accu0__, content, render_context);
/* 000149 */ 		}) ();
/* 000151 */ 		var content = __add__ ((function () {
/* 000151 */ 			var __accu0__ = self;
/* 000151 */ 			return __call__ (__accu0__._get_target_id_md_code, __accu0__, target_id);
/* 000151 */ 		}) (), content);
/* 000154 */ 		return content;
/* 000154 */ 	});},
/* 000156 */ 	get render_text_format () {return __get__ (this, function (self, text_formats, nodelist, render_context) {
/* 000156 */ 		if (arguments.length) {
/* 000156 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000156 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000156 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000156 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000156 */ 					switch (__attrib0__) {
/* 000156 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 						case 'text_formats': var text_formats = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 					}
/* 000156 */ 				}
/* 000156 */ 			}
/* 000156 */ 		}
/* 000156 */ 		else {
/* 000156 */ 		}
/* 000158 */ 		var content = (function () {
/* 000158 */ 			var __accu0__ = self;
/* 000158 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, nodelist, render_context, __kwargtrans__ ({is_block_level: false}));
/* 000158 */ 		}) ();
/* 000164 */ 		var mdtext = content;
/* 000165 */ 		if (__t__ (__in__ ('textbf', text_formats))) {
/* 000166 */ 			var mdtext = __add__ (__add__ ('**', content), '**');
/* 000166 */ 		}
/* 000167 */ 		if (__t__ (__t__ (__in__ ('textit', text_formats)) || __in__ ('emph', text_formats))) {
/* 000168 */ 			var mdtext = __add__ (__add__ ('*', content), '*');
/* 000168 */ 		}
/* 000170 */ 		return mdtext;
/* 000170 */ 	});},
/* 000172 */ 	get render_semantic_block () {return __get__ (this, function (self, content, role, render_context) {
/* 000172 */ 		var annotations = null;
/* 000172 */ 		var target_id = null;
/* 000172 */ 		if (arguments.length) {
/* 000172 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000172 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000172 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000172 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000172 */ 					switch (__attrib0__) {
/* 000172 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000172 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000172 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000172 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000172 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000172 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000172 */ 					}
/* 000172 */ 				}
/* 000172 */ 			}
/* 000172 */ 		}
/* 000172 */ 		else {
/* 000172 */ 		}
/* 000176 */ 		return __add__ (__add__ ((function () {
/* 000176 */ 			var __accu0__ = (function () {
/* 000176 */ 				var __accu1__ = self;
/* 000176 */ 				return __call__ (__accu1__._get_target_id_md_code, __accu1__, target_id);
/* 000176 */ 			}) ();
/* 000176 */ 			return __call__ (__accu0__.rstrip, __accu0__);
/* 000176 */ 		}) (), '\n'), content);
/* 000176 */ 	});},
/* 000179 */ 	get render_lines () {return __get__ (this, function (self, lines_info_list, render_context) {
/* 000179 */ 		var role = null;
/* 000179 */ 		var annotations = null;
/* 000179 */ 		var target_id = null;
/* 000179 */ 		if (arguments.length) {
/* 000179 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000179 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000179 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000179 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000179 */ 					switch (__attrib0__) {
/* 000179 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000179 */ 						case 'lines_info_list': var lines_info_list = __allkwargs0__ [__attrib0__]; break;
/* 000179 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000179 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000179 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000179 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000179 */ 					}
/* 000179 */ 				}
/* 000179 */ 			}
/* 000179 */ 		}
/* 000179 */ 		else {
/* 000179 */ 		}
/* 000182 */ 		var md_indent = (function () {
/* 000182 */ 			var __accu0__ = (function () {
/* 000182 */ 				var __accu1__ = render_context;
/* 000182 */ 				return __call__ (__accu1__.get_logical_state, __accu1__, 'flm_markdown');
/* 000182 */ 			}) ();
/* 000182 */ 			return __call__ (__accu0__.py_get, __accu0__, 'md_indent', '');
/* 000182 */ 		}) ();
/* 000184 */ 		var s_lines = [];
/* 000186 */ 		var __iterable0__ = lines_info_list;
/* 000186 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000186 */ 			var line_info = __getitem__ (__iterable0__, __index0__);
/* 000187 */ 			var line_content_nodelist = line_info.nodelist;
/* 000189 */ 			var s_line = (function () {
/* 000189 */ 				var __accu0__ = self;
/* 000189 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, line_content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000189 */ 			}) ();
/* 000195 */ 			if (__t__ (line_info.indent_left !== null)) {
/* 000196 */ 				var s_line = __add__ (__mul__ ('&nbsp;&nbsp;&nbsp;&nbsp;', line_info.indent_left), s_line);
/* 000196 */ 			}
/* 000201 */ 			if (__t__ (line_info.indent_right !== null)) {
/* 000202 */ 				(function () {
/* 000202 */ 					var __accu0__ = logger;
/* 000202 */ 					return __call__ (__accu0__.warning, __accu0__, 'lines indent_right not yet implemented in markdown renderer');
/* 000202 */ 				}) ();
/* 000202 */ 			}
/* 000203 */ 			if (__t__ (line_info.align !== null)) {
/* 000204 */ 				(function () {
/* 000204 */ 					var __accu0__ = logger;
/* 000204 */ 					return __call__ (__accu0__.warning, __accu0__, 'lines align not yet implemented in markdown renderer');
/* 000204 */ 				}) ();
/* 000204 */ 			}
/* 000206 */ 			if (__t__ (__ne__ (md_indent, ''))) {
/* 000207 */ 				var s_line = __add__ (md_indent, (function () {
/* 000207 */ 					var __accu0__ = s_line;
/* 000207 */ 					return __call__ (__accu0__.py_replace, __accu0__, '\n', __add__ ('\n', md_indent));
/* 000207 */ 				}) ());
/* 000207 */ 			}
/* 000209 */ 			(function () {
/* 000209 */ 				var __accu0__ = s_lines;
/* 000209 */ 				return __call__ (__accu0__.append, __accu0__, __add__ (s_line, '  '));
/* 000209 */ 			}) ();
/* 000209 */ 		}
/* 000211 */ 		var tgtid = '';
/* 000212 */ 		if (__t__ (target_id !== null)) {
/* 000213 */ 			var tgtid = __add__ (__add__ (md_indent, (function () {
/* 000213 */ 				var __accu0__ = (function () {
/* 000213 */ 					var __accu1__ = self;
/* 000213 */ 					return __call__ (__accu1__._get_target_id_md_code, __accu1__, target_id);
/* 000213 */ 				}) ();
/* 000213 */ 				return __call__ (__accu0__.rstrip, __accu0__);
/* 000213 */ 			}) ()), '\n');
/* 000214 */ 			if (__t__ (__eq__ ((function () {
/* 000214 */ 				var __accu0__ = tgtid;
/* 000214 */ 				return __call__ (__accu0__.strip, __accu0__);
/* 000214 */ 			}) (), ''))) {
/* 000215 */ 				var tgtid = '';
/* 000215 */ 			}
/* 000215 */ 		}
/* 000217 */ 		return __add__ (__add__ ('\n\n', tgtid), (function () {
/* 000217 */ 			var __accu0__ = '\n';
/* 000217 */ 			return __call__ (__accu0__.join, __accu0__, s_lines);
/* 000217 */ 		}) ());
/* 000217 */ 	});},
/* 000219 */ 	get render_enumeration () {return __get__ (this, function (self, iter_items_nodelists, counter_formatter, render_context) {
/* 000219 */ 		var target_id_generator = null;
/* 000219 */ 		var annotations = null;
/* 000219 */ 		var nested_depth = null;
/* 000219 */ 		if (arguments.length) {
/* 000219 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000219 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000219 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000219 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000219 */ 					switch (__attrib0__) {
/* 000219 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000219 */ 						case 'iter_items_nodelists': var iter_items_nodelists = __allkwargs0__ [__attrib0__]; break;
/* 000219 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000219 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000219 */ 						case 'target_id_generator': var target_id_generator = __allkwargs0__ [__attrib0__]; break;
/* 000219 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000219 */ 						case 'nested_depth': var nested_depth = __allkwargs0__ [__attrib0__]; break;
/* 000219 */ 					}
/* 000219 */ 				}
/* 000219 */ 			}
/* 000219 */ 		}
/* 000219 */ 		else {
/* 000219 */ 		}
/* 000247 */ 		var s_items = [];
/* 000249 */ 		var __iterable0__ = __call__ (enumerate, null, iter_items_nodelists);
/* 000249 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000249 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000249 */ 			var j = __left0__ [0];
/* 000249 */ 			var item_content_nodelist = __left0__ [1];
/* 000251 */ 			var use_block_level = true;
/* 000252 */ 			if (__t__ (item_content_nodelist.parsing_state.is_block_level === false)) {
/* 000255 */ 				var use_block_level = false;
/* 000255 */ 			}
/* 000257 */ 			// pass;
/* 000261 */ 			// pass;
/* 000265 */ 			var item_content = (function () {
/* 000265 */ 				var __accu0__ = self;
/* 000265 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, item_content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: use_block_level}));
/* 000265 */ 			}) ();
/* 000271 */ 			var enumno = __add__ (1, j);
/* 000273 */ 			var tag_nodelist = __call__ (counter_formatter, null, enumno);
/* 000274 */ 			if (__t__ (__call__ (isinstance, null, tag_nodelist, str))) {
/* 000275 */ 				var tag_content = (function () {
/* 000275 */ 					var __accu0__ = self;
/* 000275 */ 					return __call__ (__accu0__.render_value, __accu0__, tag_nodelist, render_context);
/* 000275 */ 				}) ();
/* 000275 */ 			}
/* 000276 */ 			else {
/* 000277 */ 				var tag_content = (function () {
/* 000277 */ 					var __accu0__ = self;
/* 000277 */ 					return __call__ (__accu0__.render_nodelist, __accu0__, tag_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000277 */ 				}) ();
/* 000277 */ 			}
/* 000283 */ 			var tgtid_md_code = '';
/* 000284 */ 			if (__t__ (target_id_generator !== null)) {
/* 000285 */ 				var target_id = __call__ (target_id_generator, null, enumno);
/* 000286 */ 				if (__t__ (target_id !== null)) {
/* 000287 */ 					var tgtid_md_code = (function () {
/* 000287 */ 						var __accu0__ = self;
/* 000287 */ 						return __call__ (__accu0__._get_target_id_md_code, __accu0__, target_id);
/* 000287 */ 					}) ();
/* 000287 */ 				}
/* 000287 */ 			}
/* 000291 */ 			(function () {
/* 000291 */ 				var __accu0__ = s_items;
/* 000291 */ 				return __call__ (__accu0__.append, __accu0__, __add__ (__add__ (__add__ (tag_content, ' '), tgtid_md_code), item_content));
/* 000291 */ 			}) ();
/* 000291 */ 		}
/* 000293 */ 		// pass;
/* 000297 */ 		var mdindent_cur = (function () {
/* 000297 */ 			var __accu0__ = (function () {
/* 000297 */ 				var __accu1__ = render_context;
/* 000297 */ 				return __call__ (__accu1__.get_logical_state, __accu1__, 'flm_markdown');
/* 000297 */ 			}) ();
/* 000297 */ 			return __call__ (__accu0__.py_get, __accu0__, 'md_indent', '');
/* 000297 */ 		}) ();
/* 000298 */ 		var mdindent = __add__ (mdindent_cur, '  ');
/* 000299 */ 		var __withid0__ = (function () {
/* 000299 */ 			var __accu0__ = render_context;
/* 000299 */ 			return __call__ (__accu0__.push_logical_state, __accu0__, 'flm_markdown', 'indent', mdindent);
/* 000299 */ 		}) ();
/* 000299 */ 		try {
/* 000299 */ 			__withid0__.__enter__ ();
/* 000301 */ 			var mdtexts = [];
/* 000303 */ 			var __iterable0__ = s_items;
/* 000303 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000303 */ 				var s_item = __getitem__ (__iterable0__, __index0__);
/* 000304 */ 				(function () {
/* 000304 */ 					var __accu0__ = mdtexts;
/* 000305 */ 					return __call__ (__accu0__.append, __accu0__, __add__ (__add__ (mdindent_cur, '- '), (function () {
/* 000305 */ 						var __accu1__ = s_item;
/* 000305 */ 						return __call__ (__accu1__.py_replace, __accu1__, '\n', __add__ ('\n', mdindent));
/* 000305 */ 					}) ()));
/* 000305 */ 				}) ();
/* 000305 */ 			}
/* 000305 */ 			__withid0__.__exit__ ();
/* 000305 */ 		}
/* 000305 */ 		catch (__except0__) {
/* 000305 */ 			if (! (__withid0__.__exit__ (__except0__.name, __except0__, __except0__.stack))) {
/* 000305 */ 				throw __except0__;
/* 000305 */ 			}
/* 000305 */ 		}
/* 000308 */ 		var content = (function () {
/* 000308 */ 			var __accu0__ = self;
/* 000308 */ 			return __call__ (__accu0__.render_join_blocks, __accu0__, mdtexts, render_context);
/* 000308 */ 		}) ();
/* 000310 */ 		return content;
/* 000310 */ 	});},
/* 000313 */ 	get render_heading () {return __get__ (this, function (self, heading_nodelist, render_context) {
/* 000313 */ 		var heading_level = 1;
/* 000313 */ 		var inline_heading = false;
/* 000313 */ 		var target_id = null;
/* 000313 */ 		var annotations = null;
/* 000313 */ 		if (arguments.length) {
/* 000313 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000313 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000313 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000313 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000313 */ 					switch (__attrib0__) {
/* 000313 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000313 */ 						case 'heading_nodelist': var heading_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000313 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000313 */ 						case 'heading_level': var heading_level = __allkwargs0__ [__attrib0__]; break;
/* 000313 */ 						case 'inline_heading': var inline_heading = __allkwargs0__ [__attrib0__]; break;
/* 000313 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000313 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000313 */ 					}
/* 000313 */ 				}
/* 000313 */ 			}
/* 000313 */ 		}
/* 000313 */ 		else {
/* 000313 */ 		}
/* 000320 */ 		var rendered_heading = (function () {
/* 000320 */ 			var __accu0__ = self;
/* 000320 */ 			return __call__ (__accu0__.render_inline_content, __accu0__, heading_nodelist, render_context);
/* 000320 */ 		}) ();
/* 000322 */ 		var target_id_md_code = (function () {
/* 000322 */ 			var __accu0__ = self;
/* 000322 */ 			return __call__ (__accu0__._get_target_id_md_code, __accu0__, target_id);
/* 000322 */ 		}) ();
/* 000324 */ 		if (__t__ (__in__ (heading_level, self.heading_level_formatter))) {
/* 000325 */ 			var formatter = __getitem__ (self.heading_level_formatter, heading_level);
/* 000326 */ 			var heading_code = __call__ (formatter, null, __add__ (target_id_md_code, (function () {
/* 000326 */ 				var __accu0__ = rendered_heading;
/* 000326 */ 				return __call__ (__accu0__.py_replace, __accu0__, '\n', ' ');
/* 000326 */ 			}) ()));
/* 000326 */ 		}
/* 000327 */ 		else {
/* 000328 */ 			(function () {
/* 000328 */ 				var __accu0__ = logger;
/* 000330 */ 				return __call__ (__accu0__.warning, __accu0__, __add__ ('Bad heading_level={}, expected one of '.format (heading_level), __call__ (repr, null, __call__ (list, null, (function () {
/* 000330 */ 					var __accu1__ = __call__ (dict, null, self.heading_level_formatter);
/* 000330 */ 					return __call__ (__accu1__.py_keys, __accu1__);
/* 000330 */ 				}) ()))));
/* 000330 */ 			}) ();
/* 000332 */ 			var heading_code = __add__ (__add__ ('### ', target_id_md_code), (function () {
/* 000332 */ 				var __accu0__ = rendered_heading;
/* 000332 */ 				return __call__ (__accu0__.py_replace, __accu0__, '\n', ' ');
/* 000332 */ 			}) ());
/* 000332 */ 		}
/* 000334 */ 		return __add__ (heading_code, '\n');
/* 000334 */ 	});},
/* 000338 */ 	get render_link () {return __get__ (this, function (self, ref_type, href, display_nodelist, render_context, annotations) {
/* 000338 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000338 */ 			var annotations = null;
/* 000338 */ 		};
/* 000338 */ 		if (arguments.length) {
/* 000338 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000338 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000338 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000338 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000338 */ 					switch (__attrib0__) {
/* 000338 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000338 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000338 */ 						case 'href': var href = __allkwargs0__ [__attrib0__]; break;
/* 000338 */ 						case 'display_nodelist': var display_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000338 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000338 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000338 */ 					}
/* 000338 */ 				}
/* 000338 */ 			}
/* 000338 */ 		}
/* 000338 */ 		else {
/* 000338 */ 		}
/* 000339 */ 		var display_content = (function () {
/* 000339 */ 			var __accu0__ = self;
/* 000339 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, display_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: false}));
/* 000339 */ 		}) ();
/* 000344 */ 		return __add__ (__add__ (__add__ (__add__ ('[', display_content), ']('), href), ')');
/* 000344 */ 	});},
/* 000346 */ 	get render_delayed_marker () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000346 */ 		if (arguments.length) {
/* 000346 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000346 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000346 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000346 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000346 */ 					switch (__attrib0__) {
/* 000346 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000346 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000346 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000346 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000346 */ 					}
/* 000346 */ 				}
/* 000346 */ 			}
/* 000346 */ 		}
/* 000346 */ 		else {
/* 000346 */ 		}
/* 000347 */ 		return '<FLM:DLYD:{}/>'.format (delayed_key);
/* 000347 */ 	});},
/* 000349 */ 	get render_delayed_dummy_placeholder () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000349 */ 		if (arguments.length) {
/* 000349 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000349 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000349 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000349 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000349 */ 					switch (__attrib0__) {
/* 000349 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000349 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000349 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000349 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000349 */ 					}
/* 000349 */ 				}
/* 000349 */ 			}
/* 000349 */ 		}
/* 000349 */ 		else {
/* 000349 */ 		}
/* 000350 */ 		return '<!-- delayed:{} -->'.format (delayed_key);
/* 000350 */ 	});},
/* 000352 */ 	get replace_delayed_markers_with_final_values () {return __get__ (this, function (self, content, delayed_values) {
/* 000352 */ 		if (arguments.length) {
/* 000352 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000352 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000352 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000352 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000352 */ 					switch (__attrib0__) {
/* 000352 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000352 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000352 */ 						case 'delayed_values': var delayed_values = __allkwargs0__ [__attrib0__]; break;
/* 000352 */ 					}
/* 000352 */ 				}
/* 000352 */ 			}
/* 000352 */ 		}
/* 000352 */ 		else {
/* 000352 */ 		}
/* 000353 */ 		return (function () {
/* 000353 */ 			var __accu0__ = _rx_delayed_markers;
/* 000353 */ 			return __call__ (__accu0__.sub, __accu0__, (function __lambda__ (m) {
/* 000353 */ 				if (arguments.length) {
/* 000353 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000353 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000353 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000353 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000353 */ 							switch (__attrib0__) {
/* 000353 */ 								case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000353 */ 							}
/* 000353 */ 						}
/* 000353 */ 					}
/* 000353 */ 				}
/* 000353 */ 				else {
/* 000353 */ 				}
/* 000354 */ 				return __getitem__ (delayed_values, __call__ (int, null, (function () {
/* 000354 */ 					var __accu1__ = m;
/* 000354 */ 					return __call__ (__accu1__.group, __accu1__, 'key');
/* 000354 */ 				}) ()));
/* 000354 */ 			}), content);
/* 000354 */ 		}) ();
/* 000354 */ 	});},
/* 000361 */ 	get render_float () {return __get__ (this, function (self, float_instance, render_context) {
/* 000361 */ 		if (arguments.length) {
/* 000361 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000361 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000361 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000361 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000361 */ 					switch (__attrib0__) {
/* 000361 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000361 */ 						case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000361 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000361 */ 					}
/* 000361 */ 				}
/* 000361 */ 			}
/* 000361 */ 		}
/* 000361 */ 		else {
/* 000361 */ 		}
/* 000364 */ 		var full_figcaption_rendered_list = [];
/* 000365 */ 		if (__t__ (float_instance.counter_value !== null)) {
/* 000366 */ 			(function () {
/* 000366 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000367 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000367 */ 					var __accu1__ = self;
/* 000370 */ 					return __call__ (__accu1__.render_join, __accu1__, [float_instance.float_type_info.float_caption_name, '\xa0', (function () {
/* 000370 */ 						var __accu2__ = self;
/* 000370 */ 						return __call__ (__accu2__.render_nodelist, __accu2__, float_instance.formatted_counter_value_flm.nodes, __kwargtrans__ ({render_context: render_context}));
/* 000370 */ 					}) ()], render_context);
/* 000370 */ 				}) ());
/* 000370 */ 			}) ();
/* 000370 */ 		}
/* 000374 */ 		else if (__t__ (float_instance.caption_nodelist)) {
/* 000375 */ 			(function () {
/* 000375 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000375 */ 				return __call__ (__accu0__.append, __accu0__, float_instance.float_type_info.float_caption_name);
/* 000375 */ 			}) ();
/* 000375 */ 		}
/* 000377 */ 		else {
/* 000379 */ 			// pass;
/* 000379 */ 		}
/* 000381 */ 		if (__t__ (float_instance.caption_nodelist)) {
/* 000382 */ 			(function () {
/* 000382 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000382 */ 				return __call__ (__accu0__.append, __accu0__, ': ');
/* 000382 */ 			}) ();
/* 000385 */ 			(function () {
/* 000385 */ 				var __accu0__ = full_figcaption_rendered_list;
/* 000386 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000386 */ 					var __accu1__ = self;
/* 000386 */ 					return __call__ (__accu1__.render_nodelist, __accu1__, float_instance.caption_nodelist, __kwargtrans__ ({render_context: render_context}));
/* 000386 */ 				}) ());
/* 000386 */ 			}) ();
/* 000386 */ 		}
/* 000392 */ 		var rendered_float_caption = null;
/* 000393 */ 		if (__t__ (full_figcaption_rendered_list)) {
/* 000394 */ 			var rendered_float_caption = (function () {
/* 000394 */ 				var __accu0__ = self;
/* 000394 */ 				return __call__ (__accu0__.render_join, __accu0__, full_figcaption_rendered_list, render_context);
/* 000394 */ 			}) ();
/* 000394 */ 		}
/* 000397 */ 		var float_content_block = (function () {
/* 000397 */ 			var __accu0__ = self;
/* 000397 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, float_instance.content_nodelist, __kwargtrans__ ({render_context: render_context, is_block_level: true}));
/* 000397 */ 		}) ();
/* 000403 */ 		if (__t__ (rendered_float_caption !== null)) {
/* 000404 */ 			var float_content_with_caption = (function () {
/* 000404 */ 				var __accu0__ = self;
/* 000404 */ 				return __call__ (__accu0__.render_join_blocks, __accu0__, [float_content_block, rendered_float_caption], render_context);
/* 000404 */ 			}) ();
/* 000404 */ 		}
/* 000408 */ 		else {
/* 000409 */ 			var float_content_with_caption = float_content_block;
/* 000409 */ 		}
/* 000411 */ 		var target_id_md_code = (function () {
/* 000411 */ 			var __accu0__ = self;
/* 000411 */ 			return __call__ (__accu0__._get_target_id_md_code, __accu0__, float_instance.target_id);
/* 000411 */ 		}) ();
/* 000413 */ 		var mdindent = (function () {
/* 000413 */ 			var __accu0__ = (function () {
/* 000413 */ 				var __accu1__ = render_context;
/* 000413 */ 				return __call__ (__accu1__.get_logical_state, __accu1__, 'flm_markdown');
/* 000413 */ 			}) ();
/* 000413 */ 			return __call__ (__accu0__.py_get, __accu0__, 'md_indent', '');
/* 000413 */ 		}) ();
/* 000414 */ 		return __add__ (mdindent, (function () {
/* 000417 */ 			var __accu0__ = __add__ (__add__ (__add__ ('---\n\n', target_id_md_code), (function () {
/* 000417 */ 				var __accu1__ = float_content_with_caption;
/* 000417 */ 				return __call__ (__accu1__.strip, __accu1__);
/* 000417 */ 			}) ()), '\n\n---\n');
/* 000417 */ 			return __call__ (__accu0__.py_replace, __accu0__, '\n', __add__ ('\n', mdindent));
/* 000417 */ 		}) ());
/* 000417 */ 	});},
/* 000422 */ 	get render_graphics_block () {return __get__ (this, function (self, graphics_resource, render_context) {
/* 000422 */ 		if (arguments.length) {
/* 000422 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000422 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000422 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000422 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000422 */ 					switch (__attrib0__) {
/* 000422 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000422 */ 						case 'graphics_resource': var graphics_resource = __allkwargs0__ [__attrib0__]; break;
/* 000422 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000422 */ 					}
/* 000422 */ 				}
/* 000422 */ 			}
/* 000422 */ 		}
/* 000422 */ 		else {
/* 000422 */ 		}
/* 000424 */ 		var src_url = graphics_resource.src_url;
/* 000426 */ 		return __add__ (__add__ ('![](', src_url), ')');
/* 000426 */ 	});},
/* 000429 */ 	get render_cells () {return __get__ (this, function (self, cells_model, render_context, target_id) {
/* 000429 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000429 */ 			var target_id = null;
/* 000429 */ 		};
/* 000429 */ 		if (arguments.length) {
/* 000429 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000429 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000429 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000429 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000429 */ 					switch (__attrib0__) {
/* 000429 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000429 */ 						case 'cells_model': var cells_model = __allkwargs0__ [__attrib0__]; break;
/* 000429 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000429 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000429 */ 					}
/* 000429 */ 				}
/* 000429 */ 			}
/* 000429 */ 		}
/* 000429 */ 		else {
/* 000429 */ 		}
/* 000432 */ 		return (function () {
/* 000432 */ 			var __accu0__ = __call__ (HtmlFragmentRenderer, null);
/* 000432 */ 			return __call__ (__accu0__.render_cells, __accu0__, cells_model, render_context, __kwargtrans__ ({target_id: target_id}));
/* 000432 */ 		}) ();
/* 000432 */ 	});},
/* 000437 */ 	get _get_target_id_md_code () {return __get__ (this, function (self, target_id) {
/* 000437 */ 		if (arguments.length) {
/* 000437 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000437 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000437 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000437 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000437 */ 					switch (__attrib0__) {
/* 000437 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000437 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000437 */ 					}
/* 000437 */ 				}
/* 000437 */ 			}
/* 000437 */ 		}
/* 000437 */ 		else {
/* 000437 */ 		}
/* 000438 */ 		if (__t__ (target_id === null)) {
/* 000439 */ 			return '';
/* 000439 */ 		}
/* 000440 */ 		if (__t__ (__eq__ (self.use_target_ids, 'pandoc'))) {
/* 000441 */ 			return __add__ (__add__ ('[]{#', target_id), '} ');
/* 000441 */ 		}
/* 000442 */ 		if (__t__ (__eq__ (self.use_target_ids, 'github'))) {
/* 000443 */ 			return __add__ (__add__ ('[](#', target_id), ') ');
/* 000443 */ 		}
/* 000444 */ 		if (__t__ (__eq__ (self.use_target_ids, 'anchor'))) {
/* 000445 */ 			return __add__ (__add__ ('<a name="', target_id), '"></a> ');
/* 000445 */ 		}
/* 000446 */ 		return '';
/* 000446 */ 	});}
/* 000446 */ });
/* 000454 */ export var _rx_delayed_markers = (function () {
/* 000454 */ 	var __accu0__ = re;
/* 000454 */ 	return __call__ (__accu0__.compile, __accu0__, '<FLM:DLYD:(?P<key>\\d+)\\s*/>');
/* 000454 */ }) ();
/* 000460 */ export var FragmentRendererInformation =  __class__ ('FragmentRendererInformation', [object], {
/* 000460 */ 	__module__: __name__,
/* 000467 */ 	FragmentRendererClass: MarkdownFragmentRenderer,
/* 000468 */ 	format_name: 'markdown'
/* 000468 */ });
/* 000006 */ 
//# sourceMappingURL=flm.fragmentrenderer.markdown.map