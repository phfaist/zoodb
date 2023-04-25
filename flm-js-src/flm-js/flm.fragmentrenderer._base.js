/* 000001 */ // Transcrypt'ed from Python, 2023-04-25 12:01:30
/* 000007 */ var logging = {};
/* 000007 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000012 */ import {FLMRenderContext} from './flm.flmrendercontext.js';
/* 000010 */ import * as nodes from './pylatexenc.latexnodes.nodes.js';
/* 000007 */ import * as __module_logging__ from './logging.js';
/* 000007 */ __nest__ (logging, '', __module_logging__);
/* 000007 */ export {FLMRenderContext, nodes};
/* 000001 */ var __name__ = 'flm.fragmentrenderer._base';
/* 000008 */ export var logger = (function () {
/* 000008 */ 	var __accu0__ = logging;
/* 000008 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000008 */ }) ();
/* 000015 */ export var FragmentRenderer =  __class__ ('FragmentRenderer', [object], {
/* 000015 */ 	__module__: __name__,
/* 000020 */ 	supports_delayed_render_markers: false,
/* 000027 */ 	get __init__ () {return __get__ (this, function (self, config) {
/* 000027 */ 		if (typeof config == 'undefined' || (config != null && config.hasOwnProperty ("__kwargtrans__"))) {;
/* 000027 */ 			var config = null;
/* 000027 */ 		};
/* 000027 */ 		if (arguments.length) {
/* 000027 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000027 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000027 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000027 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000027 */ 					switch (__attrib0__) {
/* 000027 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000027 */ 						case 'config': var config = __allkwargs0__ [__attrib0__]; break;
/* 000027 */ 					}
/* 000027 */ 				}
/* 000027 */ 			}
/* 000027 */ 		}
/* 000027 */ 		else {
/* 000027 */ 		}
/* 000028 */ 		__call__ (__call__ (__super__, null, FragmentRenderer, '__init__'), null, self);
/* 000030 */ 		if (__t__ (config !== null)) {
/* 000031 */ 			var __iterable0__ = (function () {
/* 000031 */ 				var __accu0__ = config;
/* 000031 */ 				return __call__ (__accu0__.py_items, __accu0__);
/* 000031 */ 			}) ();
/* 000031 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000031 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000031 */ 				var k = __left0__ [0];
/* 000031 */ 				var v = __left0__ [1];
/* 000032 */ 				__call__ (setattr, null, self, k, v);
/* 000032 */ 			}
/* 000032 */ 		}
/* 000032 */ 	});},
/* 000035 */ 	get document_render_start () {return __get__ (this, function (self, render_context) {
/* 000035 */ 		if (arguments.length) {
/* 000035 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000035 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000035 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000035 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000035 */ 					switch (__attrib0__) {
/* 000035 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000035 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000035 */ 					}
/* 000035 */ 				}
/* 000035 */ 			}
/* 000035 */ 		}
/* 000035 */ 		else {
/* 000035 */ 		}
/* 000036 */ 		// pass;
/* 000036 */ 	});},
/* 000038 */ 	get document_render_finish () {return __get__ (this, function (self, render_context) {
/* 000038 */ 		if (arguments.length) {
/* 000038 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000038 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000038 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000038 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000038 */ 					switch (__attrib0__) {
/* 000038 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000038 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000038 */ 					}
/* 000038 */ 				}
/* 000038 */ 			}
/* 000038 */ 		}
/* 000038 */ 		else {
/* 000038 */ 		}
/* 000039 */ 		// pass;
/* 000039 */ 	});},
/* 000042 */ 	get render_fragment () {return __get__ (this, function (self, flm_fragment, render_context, is_block_level) {
/* 000042 */ 		if (typeof is_block_level == 'undefined' || (is_block_level != null && is_block_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000042 */ 			var is_block_level = null;
/* 000042 */ 		};
/* 000042 */ 		if (arguments.length) {
/* 000042 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000042 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000042 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000042 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000042 */ 					switch (__attrib0__) {
/* 000042 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000042 */ 						case 'flm_fragment': var flm_fragment = __allkwargs0__ [__attrib0__]; break;
/* 000042 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000042 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000042 */ 					}
/* 000042 */ 				}
/* 000042 */ 			}
/* 000042 */ 		}
/* 000042 */ 		else {
/* 000042 */ 		}
/* 000043 */ 		try {
/* 000044 */ 			return (function () {
/* 000044 */ 				var __accu0__ = self;
/* 000045 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, flm_fragment.nodes, (function () {
/* 000045 */ 					var __accu1__ = self;
/* 000045 */ 					return __call__ (__accu1__.ensure_render_context, __accu1__, render_context);
/* 000045 */ 				}) (), __kwargtrans__ ({is_block_level: is_block_level}));
/* 000045 */ 			}) ();
/* 000045 */ 		}
/* 000045 */ 		catch (__except0__) {
/* 000045 */ 			if (isinstance (__except0__, Exception)) {
/* 000045 */ 				var e = __except0__;
/* 000048 */ 				// pass;
/* 000051 */ 				__except0__.__cause__ = null;
/* 000051 */ 				throw __except0__;
/* 000051 */ 			}
/* 000051 */ 			else {
/* 000051 */ 				throw __except0__;
/* 000051 */ 			}
/* 000051 */ 		}
/* 000051 */ 	});},
/* 000053 */ 	get render_nodelist () {return __get__ (this, function (self, nodelist, render_context, is_block_level) {
/* 000053 */ 		if (typeof is_block_level == 'undefined' || (is_block_level != null && is_block_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000053 */ 			var is_block_level = null;
/* 000053 */ 		};
/* 000053 */ 		if (arguments.length) {
/* 000053 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000053 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000053 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000053 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000053 */ 					switch (__attrib0__) {
/* 000053 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000053 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000053 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000053 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000053 */ 					}
/* 000053 */ 				}
/* 000053 */ 			}
/* 000053 */ 		}
/* 000053 */ 		else {
/* 000053 */ 		}
/* 000068 */ 		if (__t__ (nodelist === null)) {
/* 000069 */ 			var __except0__ = __call__ (ValueError, null, 'render_nodelist(): nodelist should not be None');
/* 000069 */ 			__except0__.__cause__ = null;
/* 000069 */ 			throw __except0__;
/* 000069 */ 		}
/* 000071 */ 		if (__t__ (!__t__ ((__call__ (hasattr, null, nodelist, 'flm_is_block_level'))))) {
/* 000072 */ 			// pass;
/* 000077 */ 			var __except0__ = __call__ (ValueError, null, 'The given node list was not parsed & produced by FLM; missing .flm_is_block_level attribute');
/* 000077 */ 			__except0__.__cause__ = null;
/* 000077 */ 			throw __except0__;
/* 000077 */ 		}
/* 000080 */ 		if (__t__ (is_block_level === null)) {
/* 000081 */ 			var is_block_level = nodelist.flm_is_block_level;
/* 000081 */ 		}
/* 000083 */ 		if (__t__ (__t__ (!__t__ ((is_block_level))) && nodelist.flm_is_block_level)) {
/* 000084 */ 			var __except0__ = __call__ (ValueError, null, 'Cannot render node list ‘{}’ in inline mode (not block level mode) as it contains block-level elements.'.format (nodelist));
/* 000084 */ 			__except0__.__cause__ = null;
/* 000084 */ 			throw __except0__;
/* 000084 */ 		}
/* 000089 */ 		if (__t__ (is_block_level)) {
/* 000095 */ 			if (__t__ (__call__ (hasattr, null, nodelist, 'flm_blocks'))) {
/* 000096 */ 				var node_blocks = nodelist.flm_blocks;
/* 000096 */ 			}
/* 000097 */ 			else {
/* 000098 */ 				var node_blocks = [nodelist];
/* 000098 */ 			}
/* 000100 */ 			return (function () {
/* 000100 */ 				var __accu0__ = self;
/* 000100 */ 				return __call__ (__accu0__.render_blocks, __accu0__, node_blocks, render_context);
/* 000100 */ 			}) ();
/* 000100 */ 		}
/* 000102 */ 		return (function () {
/* 000102 */ 			var __accu0__ = self;
/* 000102 */ 			return __call__ (__accu0__.render_inline_content, __accu0__, nodelist, render_context);
/* 000102 */ 		}) ();
/* 000102 */ 	});},
/* 000105 */ 	get render_node () {return __get__ (this, function (self, node, render_context) {
/* 000105 */ 		if (arguments.length) {
/* 000105 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000105 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000105 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000105 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000105 */ 					switch (__attrib0__) {
/* 000105 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000105 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000105 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000105 */ 					}
/* 000105 */ 				}
/* 000105 */ 			}
/* 000105 */ 		}
/* 000105 */ 		else {
/* 000105 */ 		}
/* 000106 */ 		var render_context = (function () {
/* 000106 */ 			var __accu0__ = self;
/* 000106 */ 			return __call__ (__accu0__.ensure_render_context, __accu0__, render_context);
/* 000106 */ 		}) ();
/* 000108 */ 		try {
/* 000109 */ 			if (__t__ ((function () {
/* 000109 */ 				var __accu0__ = node;
/* 000109 */ 				return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexCharsNode);
/* 000109 */ 			}) ())) {
/* 000110 */ 				return (function () {
/* 000110 */ 					var __accu0__ = self;
/* 000110 */ 					return __call__ (__accu0__.render_node_chars, __accu0__, node, render_context);
/* 000110 */ 				}) ();
/* 000110 */ 			}
/* 000111 */ 			if (__t__ ((function () {
/* 000111 */ 				var __accu0__ = node;
/* 000111 */ 				return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexCommentNode);
/* 000111 */ 			}) ())) {
/* 000112 */ 				return (function () {
/* 000112 */ 					var __accu0__ = self;
/* 000112 */ 					return __call__ (__accu0__.render_node_comment, __accu0__, node, render_context);
/* 000112 */ 				}) ();
/* 000112 */ 			}
/* 000113 */ 			if (__t__ ((function () {
/* 000113 */ 				var __accu0__ = node;
/* 000113 */ 				return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexGroupNode);
/* 000113 */ 			}) ())) {
/* 000114 */ 				return (function () {
/* 000114 */ 					var __accu0__ = self;
/* 000114 */ 					return __call__ (__accu0__.render_node_group, __accu0__, node, render_context);
/* 000114 */ 				}) ();
/* 000114 */ 			}
/* 000115 */ 			if (__t__ ((function () {
/* 000115 */ 				var __accu0__ = node;
/* 000115 */ 				return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexMacroNode);
/* 000115 */ 			}) ())) {
/* 000116 */ 				return (function () {
/* 000116 */ 					var __accu0__ = self;
/* 000116 */ 					return __call__ (__accu0__.render_node_macro, __accu0__, node, render_context);
/* 000116 */ 				}) ();
/* 000116 */ 			}
/* 000117 */ 			if (__t__ ((function () {
/* 000117 */ 				var __accu0__ = node;
/* 000117 */ 				return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexEnvironmentNode);
/* 000117 */ 			}) ())) {
/* 000118 */ 				return (function () {
/* 000118 */ 					var __accu0__ = self;
/* 000118 */ 					return __call__ (__accu0__.render_node_environment, __accu0__, node, render_context);
/* 000118 */ 				}) ();
/* 000118 */ 			}
/* 000119 */ 			if (__t__ ((function () {
/* 000119 */ 				var __accu0__ = node;
/* 000119 */ 				return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexSpecialsNode);
/* 000119 */ 			}) ())) {
/* 000120 */ 				return (function () {
/* 000120 */ 					var __accu0__ = self;
/* 000120 */ 					return __call__ (__accu0__.render_node_specials, __accu0__, node, render_context);
/* 000120 */ 				}) ();
/* 000120 */ 			}
/* 000121 */ 			if (__t__ ((function () {
/* 000121 */ 				var __accu0__ = node;
/* 000121 */ 				return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexMathNode);
/* 000121 */ 			}) ())) {
/* 000122 */ 				return (function () {
/* 000122 */ 					var __accu0__ = self;
/* 000122 */ 					return __call__ (__accu0__.render_node_math, __accu0__, node, render_context);
/* 000122 */ 				}) ();
/* 000122 */ 			}
/* 000124 */ 			var __except0__ = __call__ (ValueError, null, 'Invalid node type: {}'.format (node));
/* 000124 */ 			__except0__.__cause__ = null;
/* 000124 */ 			throw __except0__;
/* 000124 */ 		}
/* 000124 */ 		catch (__except0__) {
/* 000124 */ 			if (isinstance (__except0__, LatexWalkerLocatedError)) {
/* 000124 */ 				var e = __except0__;
/* 000127 */ 				if (__t__ (__t__ (!__t__ ((__call__ (hasattr, null, e, 'pos')))) || e.pos === null)) {
/* 000128 */ 					e.pos = node.pos;
/* 000128 */ 				}
/* 000129 */ 				var __except1__ = e;
/* 000129 */ 				__except1__.__cause__ = null;
/* 000129 */ 				throw __except1__;
/* 000129 */ 			}
/* 000129 */ 			else if (isinstance (__except0__, Exception)) {
/* 000129 */ 				var e = __except0__;
/* 000132 */ 				var __except1__ = __call__ (LatexWalkerLocatedError, null, __call__ (str, null, e), __kwargtrans__ ({pos: node.pos}));
/* 000132 */ 				__except1__.__cause__ = null;
/* 000132 */ 				throw __except1__;
/* 000132 */ 			}
/* 000132 */ 			else {
/* 000132 */ 				throw __except0__;
/* 000132 */ 			}
/* 000132 */ 		}
/* 000132 */ 	});},
/* 000135 */ 	get render_node_chars () {return __get__ (this, function (self, node, render_context) {
/* 000135 */ 		if (arguments.length) {
/* 000135 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000135 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000135 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000135 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000135 */ 					switch (__attrib0__) {
/* 000135 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000135 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000135 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000135 */ 					}
/* 000135 */ 				}
/* 000135 */ 			}
/* 000135 */ 		}
/* 000135 */ 		else {
/* 000135 */ 		}
/* 000136 */ 		if (__t__ (__call__ (hasattr, null, node, 'flm_chars_value'))) {
/* 000137 */ 			var chars_value = node.flm_chars_value;
/* 000137 */ 		}
/* 000138 */ 		else {
/* 000139 */ 			var chars_value = null;
/* 000139 */ 		}
/* 000140 */ 		if (__t__ (chars_value === null)) {
/* 000142 */ 			var chars_value = node.chars;
/* 000142 */ 		}
/* 000143 */ 		return (function () {
/* 000143 */ 			var __accu0__ = self;
/* 000143 */ 			return __call__ (__accu0__.render_value, __accu0__, chars_value, render_context);
/* 000143 */ 		}) ();
/* 000143 */ 	});},
/* 000145 */ 	get render_node_comment () {return __get__ (this, function (self, node, render_context) {
/* 000145 */ 		if (arguments.length) {
/* 000145 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000145 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000145 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000145 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000145 */ 					switch (__attrib0__) {
/* 000145 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000145 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000145 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000145 */ 					}
/* 000145 */ 				}
/* 000145 */ 			}
/* 000145 */ 		}
/* 000145 */ 		else {
/* 000145 */ 		}
/* 000146 */ 		return '';
/* 000146 */ 	});},
/* 000148 */ 	get render_node_group () {return __get__ (this, function (self, node, render_context) {
/* 000148 */ 		if (arguments.length) {
/* 000148 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000148 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000148 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000148 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000148 */ 					switch (__attrib0__) {
/* 000148 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000148 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000148 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000148 */ 					}
/* 000148 */ 				}
/* 000148 */ 			}
/* 000148 */ 		}
/* 000148 */ 		else {
/* 000148 */ 		}
/* 000149 */ 		return (function () {
/* 000149 */ 			var __accu0__ = self;
/* 000150 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, node.nodelist, (function () {
/* 000150 */ 				var __accu1__ = self;
/* 000150 */ 				return __call__ (__accu1__.ensure_render_context, __accu1__, render_context);
/* 000150 */ 			}) ());
/* 000150 */ 		}) ();
/* 000150 */ 	});},
/* 000152 */ 	get render_node_macro () {return __get__ (this, function (self, node, render_context) {
/* 000152 */ 		if (arguments.length) {
/* 000152 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000152 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000152 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000152 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000152 */ 					switch (__attrib0__) {
/* 000152 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000152 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000152 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000152 */ 					}
/* 000152 */ 				}
/* 000152 */ 			}
/* 000152 */ 		}
/* 000152 */ 		else {
/* 000152 */ 		}
/* 000153 */ 		return (function () {
/* 000153 */ 			var __accu0__ = self;
/* 000154 */ 			return __call__ (__accu0__.render_invocable_node, __accu0__, node, (function () {
/* 000154 */ 				var __accu1__ = self;
/* 000154 */ 				return __call__ (__accu1__.ensure_render_context, __accu1__, render_context);
/* 000154 */ 			}) ());
/* 000154 */ 		}) ();
/* 000154 */ 	});},
/* 000156 */ 	get render_node_environment () {return __get__ (this, function (self, node, render_context) {
/* 000156 */ 		if (arguments.length) {
/* 000156 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000156 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000156 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000156 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000156 */ 					switch (__attrib0__) {
/* 000156 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 					}
/* 000156 */ 				}
/* 000156 */ 			}
/* 000156 */ 		}
/* 000156 */ 		else {
/* 000156 */ 		}
/* 000157 */ 		return (function () {
/* 000157 */ 			var __accu0__ = self;
/* 000158 */ 			return __call__ (__accu0__.render_invocable_node, __accu0__, node, (function () {
/* 000158 */ 				var __accu1__ = self;
/* 000158 */ 				return __call__ (__accu1__.ensure_render_context, __accu1__, render_context);
/* 000158 */ 			}) ());
/* 000158 */ 		}) ();
/* 000158 */ 	});},
/* 000160 */ 	get render_node_specials () {return __get__ (this, function (self, node, render_context) {
/* 000160 */ 		if (arguments.length) {
/* 000160 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000160 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000160 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000160 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000160 */ 					switch (__attrib0__) {
/* 000160 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000160 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000160 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000160 */ 					}
/* 000160 */ 				}
/* 000160 */ 			}
/* 000160 */ 		}
/* 000160 */ 		else {
/* 000160 */ 		}
/* 000161 */ 		return (function () {
/* 000161 */ 			var __accu0__ = self;
/* 000162 */ 			return __call__ (__accu0__.render_invocable_node, __accu0__, node, (function () {
/* 000162 */ 				var __accu1__ = self;
/* 000162 */ 				return __call__ (__accu1__.ensure_render_context, __accu1__, render_context);
/* 000162 */ 			}) ());
/* 000162 */ 		}) ();
/* 000162 */ 	});},
/* 000164 */ 	get render_invocable_node () {return __get__ (this, function (self, node, render_context) {
/* 000164 */ 		if (arguments.length) {
/* 000164 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000164 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000164 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000164 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000164 */ 					switch (__attrib0__) {
/* 000164 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000164 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000164 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000164 */ 					}
/* 000164 */ 				}
/* 000164 */ 			}
/* 000164 */ 		}
/* 000164 */ 		else {
/* 000164 */ 		}
/* 000170 */ 		if (__t__ (__t__ (!__t__ ((__call__ (hasattr, null, node, 'flm_specinfo')))) || node.flm_specinfo === null)) {
/* 000171 */ 			var __except0__ = __call__ (RuntimeError, null, 'Node {} does not have the `flm_specinfo` attribute set'.format (node));
/* 000171 */ 			__except0__.__cause__ = null;
/* 000171 */ 			throw __except0__;
/* 000171 */ 		}
/* 000173 */ 		if (__t__ (render_context.is_standalone_mode)) {
/* 000174 */ 			if (__t__ (!__t__ ((node.flm_specinfo.allowed_in_standalone_mode)))) {
/* 000176 */ 				var __except0__ = __call__ (ValueError, null, 'Cannot render ‘{}’ in standalone mode.'.format ((function () {
/* 000176 */ 					var __accu0__ = node;
/* 000176 */ 					return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000176 */ 				}) ()));
/* 000176 */ 				__except0__.__cause__ = null;
/* 000176 */ 				throw __except0__;
/* 000176 */ 			}
/* 000176 */ 		}
/* 000179 */ 		return (function () {
/* 000179 */ 			var __accu0__ = self;
/* 000182 */ 			return __call__ (__accu0__.render_invocable_node_call_render, __accu0__, node, node.flm_specinfo, (function () {
/* 000182 */ 				var __accu1__ = self;
/* 000182 */ 				return __call__ (__accu1__.ensure_render_context, __accu1__, render_context);
/* 000182 */ 			}) ());
/* 000182 */ 		}) ();
/* 000182 */ 	});},
/* 000187 */ 	get render_invocable_node_call_render () {return __get__ (this, function (self, node, flm_specinfo, render_context) {
/* 000187 */ 		if (arguments.length) {
/* 000187 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000187 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000187 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000187 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000187 */ 					switch (__attrib0__) {
/* 000187 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000187 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000187 */ 						case 'flm_specinfo': var flm_specinfo = __allkwargs0__ [__attrib0__]; break;
/* 000187 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000187 */ 					}
/* 000187 */ 				}
/* 000187 */ 			}
/* 000187 */ 		}
/* 000187 */ 		else {
/* 000187 */ 		}
/* 000187 */ 		assert (render_context !== null);
/* 000192 */ 		if (__t__ (flm_specinfo === null)) {
/* 000193 */ 			var __except0__ = __call__ (ValueError, null, 'Cannot render node={} because specinfo is None!'.format (node));
/* 000193 */ 			__except0__.__cause__ = null;
/* 000193 */ 			throw __except0__;
/* 000193 */ 		}
/* 000195 */ 		var is_delayed_render = (function () {
/* 000195 */ 			var __accu0__ = render_context;
/* 000195 */ 			return __call__ (__accu0__.get_is_delayed_render, __accu0__, node);
/* 000195 */ 		}) ();
/* 000196 */ 		if (__t__ (is_delayed_render)) {
/* 000199 */ 			var is_first_pass = render_context.is_first_pass;
/* 000200 */ 			var delayed_key = null;
/* 000202 */ 			if (__t__ (is_first_pass)) {
/* 000203 */ 				(function () {
/* 000203 */ 					var __accu0__ = flm_specinfo;
/* 000203 */ 					return __call__ (__accu0__.prepare_delayed_render, __accu0__, node, render_context);
/* 000203 */ 				}) ();
/* 000204 */ 				var delayed_key = (function () {
/* 000204 */ 					var __accu0__ = render_context;
/* 000204 */ 					return __call__ (__accu0__.register_delayed_render, __accu0__, node, self);
/* 000204 */ 				}) ();
/* 000204 */ 			}
/* 000206 */ 			if (__t__ (self.supports_delayed_render_markers)) {
/* 000209 */ 				return (function () {
/* 000209 */ 					var __accu0__ = self;
/* 000209 */ 					return __call__ (__accu0__.render_delayed_marker, __accu0__, node, delayed_key, render_context);
/* 000209 */ 				}) ();
/* 000209 */ 			}
/* 000210 */ 			else if (__t__ (is_first_pass)) {
/* 000212 */ 				(function () {
/* 000212 */ 					var __accu0__ = flm_specinfo;
/* 000212 */ 					return __call__ (__accu0__.prepare_delayed_render, __accu0__, node, render_context);
/* 000212 */ 				}) ();
/* 000214 */ 				return (function () {
/* 000214 */ 					var __accu0__ = self;
/* 000214 */ 					return __call__ (__accu0__.render_delayed_dummy_placeholder, __accu0__, node, delayed_key, render_context);
/* 000214 */ 				}) ();
/* 000214 */ 			}
/* 000215 */ 			else {
/* 000215 */ 				assert (!__t__ ((render_context.is_first_pass)));
/* 000219 */ 				return (function () {
/* 000219 */ 					var __accu0__ = render_context;
/* 000219 */ 					return __call__ (__accu0__.get_delayed_render_content, __accu0__, node);
/* 000219 */ 				}) ();
/* 000219 */ 			}
/* 000219 */ 		}
/* 000223 */ 		var value = (function () {
/* 000223 */ 			var __accu0__ = flm_specinfo;
/* 000223 */ 			return __call__ (__accu0__.render, __accu0__, node, render_context);
/* 000223 */ 		}) ();
/* 000224 */ 		return value;
/* 000224 */ 	});},
/* 000226 */ 	get render_node_math () {return __get__ (this, function (self, node, render_context) {
/* 000226 */ 		if (arguments.length) {
/* 000226 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000226 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000226 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000226 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000226 */ 					switch (__attrib0__) {
/* 000226 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000226 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000226 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000226 */ 					}
/* 000226 */ 				}
/* 000226 */ 			}
/* 000226 */ 		}
/* 000226 */ 		else {
/* 000226 */ 		}
/* 000227 */ 		return (function () {
/* 000227 */ 			var __accu0__ = self;
/* 000230 */ 			return __call__ (__accu0__.render_math_content, __accu0__, node.delimiters, node.nodelist, (function () {
/* 000230 */ 				var __accu1__ = self;
/* 000230 */ 				return __call__ (__accu1__.ensure_render_context, __accu1__, render_context);
/* 000230 */ 			}) (), __kwargtrans__ ({displaytype: node.displaytype, target_id: null}));
/* 000230 */ 		}) ();
/* 000230 */ 	});},
/* 000235 */ 	get render_math_content () {return __get__ (this, function (self, delimiters, nodelist, render_context, displaytype) {
/* 000235 */ 		var environmentname = null;
/* 000235 */ 		var target_id = null;
/* 000235 */ 		if (arguments.length) {
/* 000235 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000235 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000235 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000235 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000235 */ 					switch (__attrib0__) {
/* 000235 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000235 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000235 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000235 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000235 */ 						case 'displaytype': var displaytype = __allkwargs0__ [__attrib0__]; break;
/* 000235 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000235 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000235 */ 					}
/* 000235 */ 				}
/* 000235 */ 			}
/* 000235 */ 		}
/* 000235 */ 		else {
/* 000235 */ 		}
/* 000242 */ 		var rendered = (function () {
/* 000242 */ 			var __accu0__ = self;
/* 000243 */ 			return __call__ (__accu0__.render_verbatim, __accu0__, __add__ (__add__ (__getitem__ (delimiters, 0), (function () {
/* 000243 */ 				var __accu1__ = nodelist;
/* 000243 */ 				return __call__ (__accu1__.latex_verbatim, __accu1__);
/* 000243 */ 			}) ()), __getitem__ (delimiters, 1)), __kwargtrans__ ({render_context: render_context, annotations: ['{}-math'.format (displaytype)], target_id: target_id, is_block_level: __eq__ (displaytype, 'display')}));
/* 000243 */ 		}) ();
/* 000249 */ 		return rendered;
/* 000249 */ 	});},
/* 000256 */ 	get render_blocks () {return __get__ (this, function (self, node_blocks, render_context) {
/* 000256 */ 		if (arguments.length) {
/* 000256 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000256 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000256 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000256 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000256 */ 					switch (__attrib0__) {
/* 000256 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000256 */ 						case 'node_blocks': var node_blocks = __allkwargs0__ [__attrib0__]; break;
/* 000256 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000256 */ 					}
/* 000256 */ 				}
/* 000256 */ 			}
/* 000256 */ 		}
/* 000256 */ 		else {
/* 000256 */ 		}
/* 000258 */ 		var rendered_blocks = [];
/* 000260 */ 		var __iterable0__ = node_blocks;
/* 000260 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000260 */ 			var block = __getitem__ (__iterable0__, __index0__);
/* 000262 */ 			if (__t__ (__call__ (isinstance, null, block, nodes.LatexNodeList))) {
/* 000263 */ 				var para = (function () {
/* 000263 */ 					var __accu0__ = self;
/* 000263 */ 					return __call__ (__accu0__.render_build_paragraph, __accu0__, block, render_context);
/* 000263 */ 				}) ();
/* 000263 */ 			}
/* 000264 */ 			else {
/* 000265 */ 				var para = (function () {
/* 000265 */ 					var __accu0__ = self;
/* 000265 */ 					return __call__ (__accu0__.render_node, __accu0__, block, render_context);
/* 000265 */ 				}) ();
/* 000265 */ 			}
/* 000267 */ 			(function () {
/* 000267 */ 				var __accu0__ = rendered_blocks;
/* 000267 */ 				return __call__ (__accu0__.append, __accu0__, para);
/* 000267 */ 			}) ();
/* 000267 */ 		}
/* 000269 */ 		return (function () {
/* 000269 */ 			var __accu0__ = self;
/* 000269 */ 			return __call__ (__accu0__.render_join_blocks, __accu0__, rendered_blocks, render_context);
/* 000269 */ 		}) ();
/* 000269 */ 	});},
/* 000272 */ 	get render_build_paragraph () {return __get__ (this, function (self, nodelist, render_context) {
/* 000272 */ 		if (arguments.length) {
/* 000272 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000272 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000272 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000272 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000272 */ 					switch (__attrib0__) {
/* 000272 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000272 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000272 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000272 */ 					}
/* 000272 */ 				}
/* 000272 */ 			}
/* 000272 */ 		}
/* 000272 */ 		else {
/* 000272 */ 		}
/* 000276 */ 		return (function () {
/* 000276 */ 			var __accu0__ = self;
/* 000276 */ 			return __call__ (__accu0__.render_inline_content, __accu0__, nodelist, render_context);
/* 000276 */ 		}) ();
/* 000276 */ 	});},
/* 000278 */ 	get render_inline_content () {return __get__ (this, function (self, nodelist, render_context) {
/* 000278 */ 		if (arguments.length) {
/* 000278 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000278 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000278 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000278 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000278 */ 					switch (__attrib0__) {
/* 000278 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000278 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000278 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000278 */ 					}
/* 000278 */ 				}
/* 000278 */ 			}
/* 000278 */ 		}
/* 000278 */ 		else {
/* 000278 */ 		}
/* 000279 */ 		return (function () {
/* 000279 */ 			var __accu0__ = self;
/* 000279 */ 			return __call__ (__accu0__.render_join, __accu0__, (function () {
/* 000279 */ 				var __accu1__ = [];
/* 000279 */ 				var __iterable0__ = nodelist;
/* 000279 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000280 */ 					var n = __getitem__ (__iterable0__, __index0__);
/* 000280 */ 					(function () {
/* 000280 */ 						var __accu2__ = __accu1__;
/* 000279 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000279 */ 							var __accu3__ = self;
/* 000279 */ 							return __call__ (__accu3__.render_node, __accu3__, n, render_context);
/* 000279 */ 						}) ());
/* 000279 */ 					}) ();
/* 000279 */ 				}
/* 000279 */ 				return __accu1__;
/* 000279 */ 			}) (), render_context);
/* 000279 */ 		}) ();
/* 000279 */ 	});},
/* 000283 */ 	get render_join () {return __get__ (this, function (self, content_list, render_context) {
/* 000283 */ 		if (arguments.length) {
/* 000283 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000283 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000283 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000283 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000283 */ 					switch (__attrib0__) {
/* 000283 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000283 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000283 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000283 */ 					}
/* 000283 */ 				}
/* 000283 */ 			}
/* 000283 */ 		}
/* 000283 */ 		else {
/* 000283 */ 		}
/* 000287 */ 		return (function () {
/* 000287 */ 			var __accu0__ = '';
/* 000287 */ 			return __call__ (__accu0__.join, __accu0__, content_list);
/* 000287 */ 		}) ();
/* 000287 */ 	});},
/* 000290 */ 	get render_join_blocks () {return __get__ (this, function (self, content_list, render_context) {
/* 000290 */ 		if (arguments.length) {
/* 000290 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000290 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000290 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000290 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000290 */ 					switch (__attrib0__) {
/* 000290 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000290 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000290 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000290 */ 					}
/* 000290 */ 				}
/* 000290 */ 			}
/* 000290 */ 		}
/* 000290 */ 		else {
/* 000290 */ 		}
/* 000298 */ 		return (function () {
/* 000298 */ 			var __accu0__ = '\n\n';
/* 000298 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000298 */ 				var __accu1__ = [];
/* 000298 */ 				var __iterable0__ = content_list;
/* 000298 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000298 */ 					var c = __getitem__ (__iterable0__, __index0__);
/* 000298 */ 					if (__t__ (__t__ (c !== null) && __call__ (len, null, c))) {
/* 000298 */ 						(function () {
/* 000298 */ 							var __accu2__ = __accu1__;
/* 000298 */ 							return __call__ (__accu2__.append, __accu2__, c);
/* 000298 */ 						}) ();
/* 000298 */ 					}
/* 000298 */ 				}
/* 000298 */ 				return __accu1__;
/* 000298 */ 			}) ());
/* 000298 */ 		}) ();
/* 000298 */ 	});},
/* 000304 */ 	get render_semantic_span () {return __get__ (this, function (self, content, role, render_context) {
/* 000304 */ 		var annotations = null;
/* 000304 */ 		var target_id = null;
/* 000304 */ 		if (arguments.length) {
/* 000304 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000304 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000304 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000304 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000304 */ 					switch (__attrib0__) {
/* 000304 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000304 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000304 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000304 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000304 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000304 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000304 */ 					}
/* 000304 */ 				}
/* 000304 */ 			}
/* 000304 */ 		}
/* 000304 */ 		else {
/* 000304 */ 		}
/* 000311 */ 		return content;
/* 000311 */ 	});},
/* 000313 */ 	get render_semantic_block () {return __get__ (this, function (self, content, role, render_context) {
/* 000313 */ 		var annotations = null;
/* 000313 */ 		var target_id = null;
/* 000313 */ 		if (arguments.length) {
/* 000313 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000313 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000313 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000313 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000313 */ 					switch (__attrib0__) {
/* 000313 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000313 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000313 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000313 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000313 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000313 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000313 */ 					}
/* 000313 */ 				}
/* 000313 */ 			}
/* 000313 */ 		}
/* 000313 */ 		else {
/* 000313 */ 		}
/* 000320 */ 		return content;
/* 000320 */ 	});},
/* 000325 */ 	get replace_delayed_markers_with_final_values () {return __get__ (this, function (self, content, delayed_values) {
/* 000325 */ 		if (arguments.length) {
/* 000325 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000325 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000325 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000325 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000325 */ 					switch (__attrib0__) {
/* 000325 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000325 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000325 */ 						case 'delayed_values': var delayed_values = __allkwargs0__ [__attrib0__]; break;
/* 000325 */ 					}
/* 000325 */ 				}
/* 000325 */ 			}
/* 000325 */ 		}
/* 000325 */ 		else {
/* 000325 */ 		}
/* 000336 */ 		var __except0__ = __call__ (RuntimeError, null, 'Reimplement me!');
/* 000336 */ 		__except0__.__cause__ = null;
/* 000336 */ 		throw __except0__;
/* 000336 */ 	});},
/* 000341 */ 	get render_value () {return __get__ (this, function (self, value, render_context) {
/* 000341 */ 		if (arguments.length) {
/* 000341 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000341 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000341 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000341 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000341 */ 					switch (__attrib0__) {
/* 000341 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000341 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000341 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000341 */ 					}
/* 000341 */ 				}
/* 000341 */ 			}
/* 000341 */ 		}
/* 000341 */ 		else {
/* 000341 */ 		}
/* 000342 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000342 */ 		__except0__.__cause__ = null;
/* 000342 */ 		throw __except0__;
/* 000342 */ 	});},
/* 000344 */ 	get render_delayed_marker () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000344 */ 		if (arguments.length) {
/* 000344 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000344 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000344 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000344 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000344 */ 					switch (__attrib0__) {
/* 000344 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000344 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000344 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000344 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000344 */ 					}
/* 000344 */ 				}
/* 000344 */ 			}
/* 000344 */ 		}
/* 000344 */ 		else {
/* 000344 */ 		}
/* 000345 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000345 */ 		__except0__.__cause__ = null;
/* 000345 */ 		throw __except0__;
/* 000345 */ 	});},
/* 000347 */ 	get render_delayed_dummy_placeholder () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000347 */ 		if (arguments.length) {
/* 000347 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000347 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000347 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000347 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000347 */ 					switch (__attrib0__) {
/* 000347 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000347 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000347 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000347 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000347 */ 					}
/* 000347 */ 				}
/* 000347 */ 			}
/* 000347 */ 		}
/* 000347 */ 		else {
/* 000347 */ 		}
/* 000348 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000348 */ 		__except0__.__cause__ = null;
/* 000348 */ 		throw __except0__;
/* 000348 */ 	});},
/* 000350 */ 	get render_nothing () {return __get__ (this, function (self, render_context, annotations) {
/* 000350 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000350 */ 			var annotations = null;
/* 000350 */ 		};
/* 000350 */ 		if (arguments.length) {
/* 000350 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000350 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000350 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000350 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000350 */ 					switch (__attrib0__) {
/* 000350 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000350 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000350 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000350 */ 					}
/* 000350 */ 				}
/* 000350 */ 			}
/* 000350 */ 		}
/* 000350 */ 		else {
/* 000350 */ 		}
/* 000351 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000351 */ 		__except0__.__cause__ = null;
/* 000351 */ 		throw __except0__;
/* 000351 */ 	});},
/* 000353 */ 	get render_empty_error_placeholder () {return __get__ (this, function (self, debug_str, render_context) {
/* 000353 */ 		if (arguments.length) {
/* 000353 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000353 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000353 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000353 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000353 */ 					switch (__attrib0__) {
/* 000353 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000353 */ 						case 'debug_str': var debug_str = __allkwargs0__ [__attrib0__]; break;
/* 000353 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000353 */ 					}
/* 000353 */ 				}
/* 000353 */ 			}
/* 000353 */ 		}
/* 000353 */ 		else {
/* 000353 */ 		}
/* 000354 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000354 */ 		__except0__.__cause__ = null;
/* 000354 */ 		throw __except0__;
/* 000354 */ 	});},
/* 000356 */ 	get render_text_format () {return __get__ (this, function (self, text_formats, nodelist, render_context) {
/* 000356 */ 		if (arguments.length) {
/* 000356 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000356 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000356 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000356 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000356 */ 					switch (__attrib0__) {
/* 000356 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000356 */ 						case 'text_formats': var text_formats = __allkwargs0__ [__attrib0__]; break;
/* 000356 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000356 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000356 */ 					}
/* 000356 */ 				}
/* 000356 */ 			}
/* 000356 */ 		}
/* 000356 */ 		else {
/* 000356 */ 		}
/* 000357 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000357 */ 		__except0__.__cause__ = null;
/* 000357 */ 		throw __except0__;
/* 000357 */ 	});},
/* 000359 */ 	get render_enumeration () {return __get__ (this, function (self, iter_items_nodelists, counter_formatter, render_context) {
/* 000359 */ 		var target_id_generator = null;
/* 000359 */ 		var annotations = null;
/* 000359 */ 		if (arguments.length) {
/* 000359 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000359 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000359 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000359 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000359 */ 					switch (__attrib0__) {
/* 000359 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000359 */ 						case 'iter_items_nodelists': var iter_items_nodelists = __allkwargs0__ [__attrib0__]; break;
/* 000359 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000359 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000359 */ 						case 'target_id_generator': var target_id_generator = __allkwargs0__ [__attrib0__]; break;
/* 000359 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000359 */ 					}
/* 000359 */ 				}
/* 000359 */ 			}
/* 000359 */ 		}
/* 000359 */ 		else {
/* 000359 */ 		}
/* 000361 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000361 */ 		__except0__.__cause__ = null;
/* 000361 */ 		throw __except0__;
/* 000361 */ 	});},
/* 000363 */ 	get render_heading () {return __get__ (this, function (self, heading_nodelist, render_context) {
/* 000363 */ 		var heading_level = 1;
/* 000363 */ 		var inline_heading = false;
/* 000363 */ 		var target_id = null;
/* 000363 */ 		if (arguments.length) {
/* 000363 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000363 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000363 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000363 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000363 */ 					switch (__attrib0__) {
/* 000363 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000363 */ 						case 'heading_nodelist': var heading_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000363 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000363 */ 						case 'heading_level': var heading_level = __allkwargs0__ [__attrib0__]; break;
/* 000363 */ 						case 'inline_heading': var inline_heading = __allkwargs0__ [__attrib0__]; break;
/* 000363 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000363 */ 					}
/* 000363 */ 				}
/* 000363 */ 			}
/* 000363 */ 		}
/* 000363 */ 		else {
/* 000363 */ 		}
/* 000365 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000365 */ 		__except0__.__cause__ = null;
/* 000365 */ 		throw __except0__;
/* 000365 */ 	});},
/* 000367 */ 	get render_verbatim () {return __get__ (this, function (self, value, render_context) {
/* 000367 */ 		var is_block_level = false;
/* 000367 */ 		var annotations = null;
/* 000367 */ 		var target_id = null;
/* 000367 */ 		if (arguments.length) {
/* 000367 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000367 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000367 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000367 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000367 */ 					switch (__attrib0__) {
/* 000367 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000367 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000367 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000367 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000367 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000367 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000367 */ 					}
/* 000367 */ 				}
/* 000367 */ 			}
/* 000367 */ 		}
/* 000367 */ 		else {
/* 000367 */ 		}
/* 000369 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000369 */ 		__except0__.__cause__ = null;
/* 000369 */ 		throw __except0__;
/* 000369 */ 	});},
/* 000371 */ 	get render_link () {return __get__ (this, function (self, ref_type, href, display_nodelist, render_context, annotations) {
/* 000371 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000371 */ 			var annotations = null;
/* 000371 */ 		};
/* 000371 */ 		if (arguments.length) {
/* 000371 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000371 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000371 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000371 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000371 */ 					switch (__attrib0__) {
/* 000371 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000371 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000371 */ 						case 'href': var href = __allkwargs0__ [__attrib0__]; break;
/* 000371 */ 						case 'display_nodelist': var display_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000371 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000371 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000371 */ 					}
/* 000371 */ 				}
/* 000371 */ 			}
/* 000371 */ 		}
/* 000371 */ 		else {
/* 000371 */ 		}
/* 000385 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000385 */ 		__except0__.__cause__ = null;
/* 000385 */ 		throw __except0__;
/* 000385 */ 	});},
/* 000391 */ 	get render_float () {return __get__ (this, function (self, float_instance, render_context) {
/* 000391 */ 		if (arguments.length) {
/* 000391 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000391 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000391 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000391 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000391 */ 					switch (__attrib0__) {
/* 000391 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000391 */ 						case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000391 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000391 */ 					}
/* 000391 */ 				}
/* 000391 */ 			}
/* 000391 */ 		}
/* 000391 */ 		else {
/* 000391 */ 		}
/* 000392 */ 		var __except0__ = __call__ (RuntimeError, null, 'Feature is not implemented by subclass');
/* 000392 */ 		__except0__.__cause__ = null;
/* 000392 */ 		throw __except0__;
/* 000392 */ 	});},
/* 000394 */ 	get render_graphics_block () {return __get__ (this, function (self, graphics_resource, render_context) {
/* 000394 */ 		if (arguments.length) {
/* 000394 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000394 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000394 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000394 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000394 */ 					switch (__attrib0__) {
/* 000394 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000394 */ 						case 'graphics_resource': var graphics_resource = __allkwargs0__ [__attrib0__]; break;
/* 000394 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000394 */ 					}
/* 000394 */ 				}
/* 000394 */ 			}
/* 000394 */ 		}
/* 000394 */ 		else {
/* 000394 */ 		}
/* 000395 */ 		var __except0__ = __call__ (RuntimeError, null, 'Feature is not implemented by subclass');
/* 000395 */ 		__except0__.__cause__ = null;
/* 000395 */ 		throw __except0__;
/* 000395 */ 	});},
/* 000397 */ 	get render_cells () {return __get__ (this, function (self, cells_model, render_context, target_id) {
/* 000397 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000397 */ 			var target_id = null;
/* 000397 */ 		};
/* 000397 */ 		if (arguments.length) {
/* 000397 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000397 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000397 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000397 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000397 */ 					switch (__attrib0__) {
/* 000397 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000397 */ 						case 'cells_model': var cells_model = __allkwargs0__ [__attrib0__]; break;
/* 000397 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000397 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000397 */ 					}
/* 000397 */ 				}
/* 000397 */ 			}
/* 000397 */ 		}
/* 000397 */ 		else {
/* 000397 */ 		}
/* 000398 */ 		var __except0__ = __call__ (RuntimeError, null, 'Feature is not implemented by subclass');
/* 000398 */ 		__except0__.__cause__ = null;
/* 000398 */ 		throw __except0__;
/* 000398 */ 	});},
/* 000405 */ 	get ensure_render_context () {return __get__ (this, function (self, render_context) {
/* 000405 */ 		if (arguments.length) {
/* 000405 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000405 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000405 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000405 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000405 */ 					switch (__attrib0__) {
/* 000405 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000405 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000405 */ 					}
/* 000405 */ 				}
/* 000405 */ 			}
/* 000405 */ 		}
/* 000405 */ 		else {
/* 000405 */ 		}
/* 000406 */ 		return __t__ (render_context) || __call__ (FLMRenderContext, null, __kwargtrans__ ({fragment_renderer: self}));
/* 000406 */ 	});}
/* 000406 */ });
/* 000007 */ 
//# sourceMappingURL=flm.fragmentrenderer._base.map