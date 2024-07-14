/* 000001 */ // Transcrypt'ed from Python, 2024-07-14 20:46:41
/* 000006 */ var logging = {};
/* 000006 */ var re = {};
/* 000006 */ var unique_object_id = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000027 */ import * as __module_unique_object_id__ from './unique_object_id.js';
/* 000027 */ __nest__ (unique_object_id, '', __module_unique_object_id__);
/* 000021 */ import {FLMDocument} from './flm.flmdocument.js';
/* 000020 */ import {FLMFragment} from './flm.flmfragment.js';
/* 000018 */ import * as latexwalker from './pylatexenc.latexwalker.js';
/* 000017 */ import * as latexnodes_nodes from './pylatexenc.latexnodes.nodes.js';
/* 000012 */ import {LatexWalkerLocatedErrorFormatter, LatexWalkerParseError} from './pylatexenc.latexnodes.js';
/* 000011 */ import * as macrospec from './pylatexenc.macrospec.js';
/* 000010 */ import * as latexnodes from './pylatexenc.latexnodes.js';
/* 000007 */ import * as __module_logging__ from './logging.js';
/* 000007 */ __nest__ (logging, '', __module_logging__);
/* 000006 */ import * as __module_re__ from './re.js';
/* 000006 */ __nest__ (re, '', __module_re__);
/* 000006 */ export {LatexWalkerParseError, FLMFragment, FLMDocument, latexnodes, latexnodes_nodes, macrospec, LatexWalkerLocatedErrorFormatter, latexwalker};
/* 000001 */ var __name__ = 'flm.flmenvironment';
/* 000008 */ export var logger = (function () {
/* 000008 */ 	var __accu0__ = logging;
/* 000008 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000008 */ }) ();
/* 000028 */ export var fn_unique_object_id = unique_object_id.fn_unique_object_id;
/* 000037 */ export var FLMParsingState =  __class__ ('FLMParsingState', [latexnodes.ParsingState], {
/* 000037 */ 	__module__: __name__,
/* 000054 */ 	_fields: __call__ (tuple, null, __add__ (__call__ (list, null, latexnodes.ParsingState._fields), ['is_block_level'])),
/* 000056 */ 	get set_fields () {return __get__ (this, function (self) {
/* 000056 */ 		var is_block_level = null;
/* 000056 */ 		var kwargs = dict ();
/* 000056 */ 		if (arguments.length) {
/* 000056 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000056 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000056 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000056 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000056 */ 					switch (__attrib0__) {
/* 000056 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000056 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000056 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000056 */ 					}
/* 000056 */ 				}
/* 000056 */ 				delete kwargs.__kwargtrans__;
/* 000056 */ 			}
/* 000056 */ 		}
/* 000056 */ 		else {
/* 000056 */ 		}
/* 000057 */ 		__call__ (__call__ (__super__, null, FLMParsingState, 'set_fields'), null, self, __kwargtrans__ (kwargs));
/* 000058 */ 		self.is_block_level = is_block_level;
/* 000058 */ 	});}
/* 000058 */ });
/* 000061 */ export var FLMParsingStateDeltaSetBlockLevel =  __class__ ('FLMParsingStateDeltaSetBlockLevel', [latexnodes.ParsingStateDelta], {
/* 000061 */ 	__module__: __name__,
/* 000068 */ 	get __init__ () {return __get__ (this, function (self, is_block_level) {
/* 000068 */ 		if (typeof is_block_level == 'undefined' || (is_block_level != null && is_block_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000068 */ 			var is_block_level = null;
/* 000068 */ 		};
/* 000068 */ 		if (arguments.length) {
/* 000068 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000068 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000068 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000068 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000068 */ 					switch (__attrib0__) {
/* 000068 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000068 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000068 */ 					}
/* 000068 */ 				}
/* 000068 */ 			}
/* 000068 */ 		}
/* 000068 */ 		else {
/* 000068 */ 		}
/* 000070 */ 		__call__ (__call__ (__super__, null, FLMParsingStateDeltaSetBlockLevel, '__init__'), null, self, __kwargtrans__ ({set_attributes: __call__ (dict, null, __kwargtrans__ ({is_block_level: is_block_level})), _fields: tuple (['is_block_level'])}));
/* 000073 */ 		self.is_block_level = is_block_level;
/* 000073 */ 	});}
/* 000073 */ });
/* 000079 */ export var FLMArgumentSpec = function (parser, argname, is_block_level, flm_doc) {
/* 000079 */ 	if (typeof is_block_level == 'undefined' || (is_block_level != null && is_block_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000079 */ 		var is_block_level = false;
/* 000079 */ 	};
/* 000079 */ 	if (typeof flm_doc == 'undefined' || (flm_doc != null && flm_doc.hasOwnProperty ("__kwargtrans__"))) {;
/* 000079 */ 		var flm_doc = null;
/* 000079 */ 	};
/* 000079 */ 	if (arguments.length) {
/* 000079 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000079 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000079 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000079 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000079 */ 				switch (__attrib0__) {
/* 000079 */ 					case 'parser': var parser = __allkwargs0__ [__attrib0__]; break;
/* 000079 */ 					case 'argname': var argname = __allkwargs0__ [__attrib0__]; break;
/* 000079 */ 					case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000079 */ 					case 'flm_doc': var flm_doc = __allkwargs0__ [__attrib0__]; break;
/* 000079 */ 				}
/* 000079 */ 			}
/* 000079 */ 		}
/* 000079 */ 	}
/* 000079 */ 	else {
/* 000079 */ 	}
/* 000086 */ 	var parsing_state_delta = null;
/* 000087 */ 	if (__t__ (is_block_level !== null)) {
/* 000088 */ 		var parsing_state_delta = __call__ (FLMParsingStateDeltaSetBlockLevel, null, __kwargtrans__ ({is_block_level: is_block_level}));
/* 000088 */ 	}
/* 000091 */ 	var arg = (function () {
/* 000091 */ 		var __accu0__ = latexnodes;
/* 000091 */ 		return __call__ (__accu0__.LatexArgumentSpec, __accu0__, __kwargtrans__ ({parser: parser, argname: argname, parsing_state_delta: parsing_state_delta}));
/* 000091 */ 	}) ();
/* 000096 */ 	arg._flm_doc = flm_doc;
/* 000097 */ 	return arg;
/* 000097 */ };
/* 000104 */ export var BlocksBuilder =  __class__ ('BlocksBuilder', [object], {
/* 000104 */ 	__module__: __name__,
/* 000106 */ 	rx_space: (function () {
/* 000106 */ 		var __accu0__ = re;
/* 000106 */ 		return __call__ (__accu0__.compile, __accu0__, '[ \\t\\n\\r]+');
/* 000106 */ 	}) (),
/* 000107 */ 	rx_only_space: (function () {
/* 000107 */ 		var __accu0__ = re;
/* 000107 */ 		return __call__ (__accu0__.compile, __accu0__, '^[ \\t\\n\\r]+$');
/* 000107 */ 	}) (),
/* 000109 */ 	get __init__ () {return __get__ (this, function (self, latexnodelist) {
/* 000109 */ 		if (arguments.length) {
/* 000109 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000109 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000109 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000109 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000109 */ 					switch (__attrib0__) {
/* 000109 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000109 */ 						case 'latexnodelist': var latexnodelist = __allkwargs0__ [__attrib0__]; break;
/* 000109 */ 					}
/* 000109 */ 				}
/* 000109 */ 			}
/* 000109 */ 		}
/* 000109 */ 		else {
/* 000109 */ 		}
/* 000110 */ 		__call__ (__call__ (__super__, null, BlocksBuilder, '__init__'), null, self);
/* 000111 */ 		self.latexnodelist = latexnodelist;
/* 000112 */ 		self.pending_paragraph_nodes = [];
/* 000113 */ 		self.blocks = [];
/* 000113 */ 	});},
/* 000115 */ 	get flush_paragraph () {return __get__ (this, function (self) {
/* 000115 */ 		if (arguments.length) {
/* 000115 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000115 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000115 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000115 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000115 */ 					switch (__attrib0__) {
/* 000115 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000115 */ 					}
/* 000115 */ 				}
/* 000115 */ 			}
/* 000115 */ 		}
/* 000115 */ 		else {
/* 000115 */ 		}
/* 000116 */ 		if (__t__ (!__t__ ((self.pending_paragraph_nodes)))) {
/* 000117 */ 			return ;
/* 000117 */ 		}
/* 000118 */ 		var paragraph_nodes = self.pending_paragraph_nodes;
/* 000119 */ 		var paragraph_nodes = (function () {
/* 000119 */ 			var __accu0__ = self;
/* 000119 */ 			return __call__ (__accu0__.finalize_paragraph, __accu0__, paragraph_nodes);
/* 000119 */ 		}) ();
/* 000121 */ 		var nlblock = (function () {
/* 000121 */ 			var __accu0__ = latexnodes_nodes;
/* 000121 */ 			return __call__ (__accu0__.LatexNodeList, __accu0__, paragraph_nodes, __kwargtrans__ ({parsing_state: self.latexnodelist.parsing_state, latex_walker: self.latexnodelist.latex_walker}));
/* 000121 */ 		}) ();
/* 000128 */ 		nlblock.flm_nodelist_finalized = true;
/* 000129 */ 		(function () {
/* 000129 */ 			var __accu0__ = self.blocks;
/* 000129 */ 			return __call__ (__accu0__.append, __accu0__, nlblock);
/* 000129 */ 		}) ();
/* 000130 */ 		self.pending_paragraph_nodes = [];
/* 000130 */ 	});},
/* 000132 */ 	get simplify_whitespace_chars () {return __get__ (this, function (self, chars, is_head, is_tail) {
/* 000132 */ 		if (typeof is_head == 'undefined' || (is_head != null && is_head.hasOwnProperty ("__kwargtrans__"))) {;
/* 000132 */ 			var is_head = false;
/* 000132 */ 		};
/* 000132 */ 		if (typeof is_tail == 'undefined' || (is_tail != null && is_tail.hasOwnProperty ("__kwargtrans__"))) {;
/* 000132 */ 			var is_tail = false;
/* 000132 */ 		};
/* 000132 */ 		if (arguments.length) {
/* 000132 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000132 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000132 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000132 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000132 */ 					switch (__attrib0__) {
/* 000132 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000132 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000132 */ 						case 'is_head': var is_head = __allkwargs0__ [__attrib0__]; break;
/* 000132 */ 						case 'is_tail': var is_tail = __allkwargs0__ [__attrib0__]; break;
/* 000132 */ 					}
/* 000132 */ 				}
/* 000132 */ 			}
/* 000132 */ 		}
/* 000132 */ 		else {
/* 000132 */ 		}
/* 000133 */ 		var newchars = (function () {
/* 000133 */ 			var __accu0__ = self.rx_space;
/* 000133 */ 			return __call__ (__accu0__.sub, __accu0__, ' ', chars);
/* 000133 */ 		}) ();
/* 000134 */ 		if (__t__ (is_head)) {
/* 000135 */ 			var newchars = (function () {
/* 000135 */ 				var __accu0__ = newchars;
/* 000135 */ 				return __call__ (__accu0__.lstrip, __accu0__);
/* 000135 */ 			}) ();
/* 000135 */ 		}
/* 000136 */ 		if (__t__ (is_tail)) {
/* 000137 */ 			var newchars = (function () {
/* 000137 */ 				var __accu0__ = newchars;
/* 000137 */ 				return __call__ (__accu0__.rstrip, __accu0__);
/* 000137 */ 			}) ();
/* 000137 */ 		}
/* 000138 */ 		return newchars;
/* 000138 */ 	});},
/* 000140 */ 	get finalize_paragraph () {return __get__ (this, function (self, paragraph_nodes) {
/* 000140 */ 		if (arguments.length) {
/* 000140 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000140 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000140 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000140 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000140 */ 					switch (__attrib0__) {
/* 000140 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000140 */ 						case 'paragraph_nodes': var paragraph_nodes = __allkwargs0__ [__attrib0__]; break;
/* 000140 */ 					}
/* 000140 */ 				}
/* 000140 */ 			}
/* 000140 */ 		}
/* 000140 */ 		else {
/* 000140 */ 		}
/* 000141 */ 		if (__t__ (!__t__ ((paragraph_nodes)))) {
/* 000142 */ 			return paragraph_nodes;
/* 000142 */ 		}
/* 000146 */ 		var is_head = true;
/* 000147 */ 		var tail_char_node_info = null;
/* 000148 */ 		var next_node_should_strip_leading_whitespace = false;
/* 000149 */ 		var first_node = null;
/* 000150 */ 		var char_nodes = [];
/* 000151 */ 		var __iterable0__ = __call__ (enumerate, null, paragraph_nodes);
/* 000151 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000151 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000151 */ 			var j = __left0__ [0];
/* 000151 */ 			var node = __left0__ [1];
/* 000158 */ 			if (__t__ (__t__ (__eq__ (__call__ (len, null, char_nodes), 0)) && __t__ (first_node !== null) && (__t__ (__call__ (hasattr, null, first_node, 'flm_is_block_heading')) && __call__ (getattr, null, first_node, 'flm_is_block_heading')))) {
/* 000162 */ 				var is_head = true;
/* 000162 */ 			}
/* 000166 */ 			if (__t__ (__t__ (__call__ (hasattr, null, node, 'flm_strip_preceding_whitespace')) && __call__ (getattr, null, node, 'flm_strip_preceding_whitespace'))) {
/* 000167 */ 				if (__t__ (tail_char_node_info !== null)) {
/* 000168 */ 					__setitem__ (tail_char_node_info, 'is_tail', true);
/* 000168 */ 				}
/* 000168 */ 			}
/* 000170 */ 			if (__t__ ((function () {
/* 000170 */ 				var __accu0__ = node;
/* 000170 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000170 */ 			}) ())) {
/* 000171 */ 				var info = dict ({'is_head': is_head, 'is_tail': false});
/* 000172 */ 				if (__t__ (next_node_should_strip_leading_whitespace)) {
/* 000173 */ 					__setitem__ (info, 'is_head', true);
/* 000173 */ 				}
/* 000174 */ 				(function () {
/* 000174 */ 					var __accu0__ = char_nodes;
/* 000174 */ 					return __call__ (__accu0__.append, __accu0__, tuple ([node, info]));
/* 000174 */ 				}) ();
/* 000175 */ 				var is_head = false;
/* 000176 */ 				var tail_char_node_info = info;
/* 000176 */ 			}
/* 000177 */ 			else if (__t__ (!__t__ (((function () {
/* 000177 */ 				var __accu0__ = node;
/* 000177 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCommentNode);
/* 000177 */ 			}) ())))) {
/* 000178 */ 				if (__t__ (first_node === null)) {
/* 000179 */ 					var first_node = node;
/* 000179 */ 				}
/* 000180 */ 				var is_head = false;
/* 000181 */ 				var tail_char_node_info = null;
/* 000181 */ 			}
/* 000183 */ 			var next_node_should_strip_leading_whitespace = false;
/* 000186 */ 			if (__t__ (__t__ (__call__ (hasattr, null, node, 'flm_strip_following_whitespace')) && __call__ (getattr, null, node, 'flm_strip_following_whitespace'))) {
/* 000187 */ 				var next_node_should_strip_leading_whitespace = true;
/* 000187 */ 			}
/* 000187 */ 		}
/* 000190 */ 		if (__t__ (tail_char_node_info !== null)) {
/* 000191 */ 			__setitem__ (tail_char_node_info, 'is_tail', true);
/* 000191 */ 		}
/* 000193 */ 		var __iterable0__ = char_nodes;
/* 000193 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000193 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000193 */ 			var char_node = __left0__ [0];
/* 000193 */ 			var info = __left0__ [1];
/* 000194 */ 			char_node.flm_chars_value = (function () {
/* 000194 */ 				var __accu0__ = self;
/* 000194 */ 				return __call__ (__accu0__.simplify_whitespace_chars, __accu0__, char_node.chars, __kwargtrans__ ({is_head: __getitem__ (info, 'is_head'), is_tail: __getitem__ (info, 'is_tail')}));
/* 000194 */ 			}) ();
/* 000194 */ 		}
/* 000205 */ 		return paragraph_nodes;
/* 000205 */ 	});},
/* 000207 */ 	get build_blocks () {return __get__ (this, function (self) {
/* 000207 */ 		if (arguments.length) {
/* 000207 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000207 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000207 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000207 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000207 */ 					switch (__attrib0__) {
/* 000207 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000207 */ 					}
/* 000207 */ 				}
/* 000207 */ 			}
/* 000207 */ 		}
/* 000207 */ 		else {
/* 000207 */ 		}
/* 000208 */ 		var latexnodelist = self.latexnodelist;
/* 000212 */ 		assert (__eq__ (__call__ (len, null, self.blocks), 0));
/* 000214 */ 		var __iterable0__ = latexnodelist;
/* 000214 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000214 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000217 */ 			var n_is_block_level = (__t__ (__call__ (hasattr, null, n, 'flm_is_block_level')) ? __call__ (getattr, null, n, 'flm_is_block_level') : null);
/* 000222 */ 			var n_is_block_heading = (__t__ (__call__ (hasattr, null, n, 'flm_is_block_heading')) ? __call__ (getattr, null, n, 'flm_is_block_heading') : false);
/* 000226 */ 			if (__t__ (n_is_block_level)) {
/* 000228 */ 				(function () {
/* 000228 */ 					var __accu0__ = self;
/* 000228 */ 					return __call__ (__accu0__.flush_paragraph, __accu0__);
/* 000228 */ 				}) ();
/* 000232 */ 				if (__t__ (__t__ (__call__ (hasattr, null, n, 'flm_is_paragraph_break_marker')) && __call__ (getattr, null, n, 'flm_is_paragraph_break_marker'))) {
/* 000232 */ 					continue;
/* 000232 */ 				}
/* 000237 */ 				if (__t__ (n_is_block_heading)) {
/* 000241 */ 					(function () {
/* 000241 */ 						var __accu0__ = self.pending_paragraph_nodes;
/* 000241 */ 						return __call__ (__accu0__.append, __accu0__, n);
/* 000241 */ 					}) ();
/* 000241 */ 					continue;
/* 000241 */ 				}
/* 000246 */ 				(function () {
/* 000246 */ 					var __accu0__ = self.blocks;
/* 000246 */ 					return __call__ (__accu0__.append, __accu0__, n);
/* 000246 */ 				}) ();
/* 000246 */ 				continue;
/* 000246 */ 			}
/* 000249 */ 			var paragraph_started_yet = true;
/* 000250 */ 			if (__t__ (!__t__ ((self.pending_paragraph_nodes)))) {
/* 000251 */ 				var paragraph_started_yet = false;
/* 000251 */ 			}
/* 000252 */ 			if (__t__ (__eq__ (__call__ (len, null, self.pending_paragraph_nodes), 1))) {
/* 000255 */ 				if (__t__ (__t__ (__call__ (hasattr, null, __getitem__ (self.pending_paragraph_nodes, 0), 'flm_is_block_heading')) && __call__ (getattr, null, __getitem__ (self.pending_paragraph_nodes, 0), 'flm_is_block_heading'))) {
/* 000257 */ 					var paragraph_started_yet = false;
/* 000257 */ 				}
/* 000257 */ 			}
/* 000260 */ 			if (__t__ (__t__ (!__t__ ((paragraph_started_yet))) && __t__ ((function () {
/* 000260 */ 				var __accu0__ = n;
/* 000260 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000261 */ 			}) ()) && (function () {
/* 000261 */ 				var __accu0__ = self.rx_only_space;
/* 000261 */ 				return __call__ (__accu0__.match, __accu0__, n.chars);
/* 000261 */ 			}) ())) {
/* 000261 */ 				continue;
/* 000261 */ 			}
/* 000267 */ 			(function () {
/* 000267 */ 				var __accu0__ = self.pending_paragraph_nodes;
/* 000267 */ 				return __call__ (__accu0__.append, __accu0__, n);
/* 000267 */ 			}) ();
/* 000267 */ 		}
/* 000270 */ 		(function () {
/* 000270 */ 			var __accu0__ = self;
/* 000270 */ 			return __call__ (__accu0__.flush_paragraph, __accu0__);
/* 000270 */ 		}) ();
/* 000272 */ 		return self.blocks;
/* 000272 */ 	});}
/* 000272 */ });
/* 000280 */ export var NodeListFinalizer =  __class__ ('NodeListFinalizer', [object], {
/* 000280 */ 	__module__: __name__,
/* 000285 */ 	get finalize_nodelist () {return __get__ (this, function (self, latexnodelist) {
/* 000285 */ 		if (arguments.length) {
/* 000285 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000285 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000285 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000285 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000285 */ 					switch (__attrib0__) {
/* 000285 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000285 */ 						case 'latexnodelist': var latexnodelist = __allkwargs0__ [__attrib0__]; break;
/* 000285 */ 					}
/* 000285 */ 				}
/* 000285 */ 			}
/* 000285 */ 		}
/* 000285 */ 		else {
/* 000285 */ 		}
/* 000301 */ 		if (__t__ (__t__ (__call__ (hasattr, null, latexnodelist, 'flm_nodelist_finalized')) && __call__ (getattr, null, latexnodelist, 'flm_nodelist_finalized'))) {
/* 000302 */ 			return latexnodelist;
/* 000302 */ 		}
/* 000304 */ 		latexnodelist.flm_nodelist_finalized = true;
/* 000306 */ 		var is_block_level = latexnodelist.parsing_state.is_block_level;
/* 000307 */ 		if (__t__ (is_block_level === null)) {
/* 000309 */ 			var is_block_level = (function () {
/* 000309 */ 				var __accu0__ = self;
/* 000309 */ 				return __call__ (__accu0__.infer_is_block_level_nodelist, __accu0__, latexnodelist);
/* 000309 */ 			}) ();
/* 000309 */ 		}
/* 000311 */ 		latexnodelist.flm_is_block_level = is_block_level;
/* 000315 */ 		if (__t__ (!__t__ ((is_block_level)))) {
/* 000317 */ 			var __iterable0__ = latexnodelist;
/* 000317 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000317 */ 				var n = __getitem__ (__iterable0__, __index0__);
/* 000319 */ 				if (__t__ (__t__ (__call__ (hasattr, null, n, 'flm_is_block_level')) && __call__ (getattr, null, n, 'flm_is_block_level'))) {
/* 000323 */ 					var __except0__ = __call__ (LatexWalkerParseError, null, __kwargtrans__ ({msg: 'Content is not allowed in inline text (not block level): ‘{}’'.format ((function () {
/* 000323 */ 						var __accu0__ = n;
/* 000323 */ 						return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000323 */ 					}) ()), pos: n.pos}));
/* 000323 */ 					__except0__.__cause__ = null;
/* 000323 */ 					throw __except0__;
/* 000323 */ 				}
/* 000327 */ 				if (__t__ ((function () {
/* 000327 */ 					var __accu0__ = n;
/* 000327 */ 					return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000327 */ 				}) ())) {
/* 000328 */ 					n.flm_chars_value = (function () {
/* 000328 */ 						var __accu0__ = self;
/* 000328 */ 						return __call__ (__accu0__.simplify_whitespace_chars_inline, __accu0__, n.chars);
/* 000328 */ 					}) ();
/* 000328 */ 				}
/* 000328 */ 			}
/* 000328 */ 		}
/* 000335 */ 		if (__t__ (is_block_level)) {
/* 000336 */ 			var blocks_builder = (function () {
/* 000336 */ 				var __accu0__ = self;
/* 000336 */ 				return __call__ (__accu0__.make_blocks_builder, __accu0__, latexnodelist);
/* 000336 */ 			}) ();
/* 000337 */ 			var flm_blocks = (function () {
/* 000337 */ 				var __accu0__ = blocks_builder;
/* 000337 */ 				return __call__ (__accu0__.build_blocks, __accu0__);
/* 000337 */ 			}) ();
/* 000338 */ 			latexnodelist.flm_blocks = flm_blocks;
/* 000338 */ 		}
/* 000340 */ 		return latexnodelist;
/* 000340 */ 	});},
/* 000343 */ 	get infer_is_block_level_nodelist () {return __get__ (this, function (self, latexnodelist) {
/* 000343 */ 		if (arguments.length) {
/* 000343 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000343 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000343 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000343 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000343 */ 					switch (__attrib0__) {
/* 000343 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000343 */ 						case 'latexnodelist': var latexnodelist = __allkwargs0__ [__attrib0__]; break;
/* 000343 */ 					}
/* 000343 */ 				}
/* 000343 */ 			}
/* 000343 */ 		}
/* 000343 */ 		else {
/* 000343 */ 		}
/* 000344 */ 		var __iterable0__ = latexnodelist;
/* 000344 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000344 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000347 */ 			var n_is_block_level = (__t__ (__call__ (hasattr, null, n, 'flm_is_block_level')) ? __call__ (getattr, null, n, 'flm_is_block_level') : null);
/* 000351 */ 			if (__t__ (n_is_block_level)) {
/* 000352 */ 				return true;
/* 000352 */ 			}
/* 000352 */ 		}
/* 000353 */ 		return false;
/* 000353 */ 	});},
/* 000355 */ 	get simplify_whitespace_chars_inline () {return __get__ (this, function (self, chars) {
/* 000355 */ 		if (arguments.length) {
/* 000355 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000355 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000355 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000355 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000355 */ 					switch (__attrib0__) {
/* 000355 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000355 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000355 */ 					}
/* 000355 */ 				}
/* 000355 */ 			}
/* 000355 */ 		}
/* 000355 */ 		else {
/* 000355 */ 		}
/* 000356 */ 		return (function () {
/* 000356 */ 			var __accu0__ = self.rx_inline_space;
/* 000356 */ 			return __call__ (__accu0__.sub, __accu0__, ' ', chars);
/* 000356 */ 		}) ();
/* 000356 */ 	});},
/* 000358 */ 	make_blocks_builder: BlocksBuilder,
/* 000360 */ 	rx_inline_space: BlocksBuilder.rx_space
/* 000360 */ });
/* 000369 */ export var FLMLatexWalker =  __class__ ('FLMLatexWalker', [latexwalker.LatexWalker], {
/* 000369 */ 	__module__: __name__,
/* 000382 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000382 */ 		var parsing_state_event_handler = null;
/* 000382 */ 		var standalone_mode = false;
/* 000382 */ 		var resource_info = null;
/* 000382 */ 		var parsing_mode = null;
/* 000382 */ 		var what = null;
/* 000382 */ 		var input_lineno_colno_offsets = null;
/* 000382 */ 		var kwargs = dict ();
/* 000382 */ 		if (arguments.length) {
/* 000382 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000382 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000382 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000382 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000382 */ 					switch (__attrib0__) {
/* 000382 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000382 */ 						case 'flm_text': var flm_text = __allkwargs0__ [__attrib0__]; break;
/* 000382 */ 						case 'default_parsing_state': var default_parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000382 */ 						case 'flm_environment': var flm_environment = __allkwargs0__ [__attrib0__]; break;
/* 000382 */ 						case 'parsing_state_event_handler': var parsing_state_event_handler = __allkwargs0__ [__attrib0__]; break;
/* 000382 */ 						case 'standalone_mode': var standalone_mode = __allkwargs0__ [__attrib0__]; break;
/* 000382 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000382 */ 						case 'parsing_mode': var parsing_mode = __allkwargs0__ [__attrib0__]; break;
/* 000382 */ 						case 'what': var what = __allkwargs0__ [__attrib0__]; break;
/* 000382 */ 						case 'input_lineno_colno_offsets': var input_lineno_colno_offsets = __allkwargs0__ [__attrib0__]; break;
/* 000382 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000382 */ 					}
/* 000382 */ 				}
/* 000382 */ 				delete kwargs.__kwargtrans__;
/* 000382 */ 			}
/* 000382 */ 		}
/* 000382 */ 		else {
/* 000382 */ 		}
/* 000395 */ 		if (__t__ (!__t__ ((input_lineno_colno_offsets)))) {
/* 000396 */ 			var input_lineno_colno_offsets = dict ({});
/* 000396 */ 		}
/* 000401 */ 		__call__ (__call__ (__super__, null, FLMLatexWalker, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({s: flm_text, default_parsing_state: default_parsing_state, line_number_offset: (function () {
/* 000401 */ 			var __accu0__ = input_lineno_colno_offsets;
/* 000401 */ 			return __call__ (__accu0__.py_get, __accu0__, 'line_number_offset', null);
/* 000403 */ 		}) (), first_line_column_offset: (function () {
/* 000403 */ 			var __accu0__ = input_lineno_colno_offsets;
/* 000403 */ 			return __call__ (__accu0__.py_get, __accu0__, 'first_line_column_offset', null);
/* 000404 */ 		}) (), column_offset: (function () {
/* 000404 */ 			var __accu0__ = input_lineno_colno_offsets;
/* 000404 */ 			return __call__ (__accu0__.py_get, __accu0__, 'column_offset', null);
/* 000404 */ 		}) ()}, kwargs)));
/* 000408 */ 		self.flm_environment = flm_environment;
/* 000410 */ 		self.standalone_mode = standalone_mode;
/* 000414 */ 		self.resource_info = resource_info;
/* 000416 */ 		self.what = what;
/* 000419 */ 		self.parsing_mode = parsing_mode;
/* 000421 */ 		self._parsing_state_event_handler = parsing_state_event_handler;
/* 000423 */ 		self.input_lineno_colno_offsets = input_lineno_colno_offsets;
/* 000423 */ 	});},
/* 000425 */ 	get parsing_state_event_handler () {return __get__ (this, function (self) {
/* 000425 */ 		if (arguments.length) {
/* 000425 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000425 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000425 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000425 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000425 */ 					switch (__attrib0__) {
/* 000425 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000425 */ 					}
/* 000425 */ 				}
/* 000425 */ 			}
/* 000425 */ 		}
/* 000425 */ 		else {
/* 000425 */ 		}
/* 000426 */ 		if (__t__ (self._parsing_state_event_handler)) {
/* 000427 */ 			return self._parsing_state_event_handler;
/* 000427 */ 		}
/* 000428 */ 		return __call__ (__call__ (__super__, null, FLMLatexWalker, 'parsing_state_event_handler'), null, self);
/* 000428 */ 	});},
/* 000430 */ 	get make_nodelist () {return __get__ (this, function (self, nodelist, parsing_state) {
/* 000430 */ 		var kwargs = dict ();
/* 000430 */ 		if (arguments.length) {
/* 000430 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000430 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000430 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000430 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000430 */ 					switch (__attrib0__) {
/* 000430 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000430 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000430 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000430 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000430 */ 					}
/* 000430 */ 				}
/* 000430 */ 				delete kwargs.__kwargtrans__;
/* 000430 */ 			}
/* 000430 */ 		}
/* 000430 */ 		else {
/* 000430 */ 		}
/* 000431 */ 		var nl = __call__ (__call__ (__super__, null, FLMLatexWalker, 'make_nodelist'), null, self, __kwargtrans__ (__mergekwargtrans__ ({nodelist: nodelist, parsing_state: parsing_state}, kwargs)));
/* 000433 */ 		var nl2 = (function () {
/* 000433 */ 			var __accu0__ = self.flm_environment;
/* 000433 */ 			return __call__ (__accu0__.finalize_nodelist, __accu0__, nl);
/* 000433 */ 		}) ();
/* 000434 */ 		if (__t__ (nl2 === null)) {
/* 000435 */ 			var __except0__ = __call__ (ValueError, null, "Environment's finalize_nodelist() returned None");
/* 000435 */ 			__except0__.__cause__ = null;
/* 000435 */ 			throw __except0__;
/* 000435 */ 		}
/* 000436 */ 		return nl2;
/* 000436 */ 	});},
/* 000438 */ 	get make_node () {return __get__ (this, function (self, node_class) {
/* 000438 */ 		var kwargs = dict ();
/* 000438 */ 		if (arguments.length) {
/* 000438 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000438 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000438 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000438 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000438 */ 					switch (__attrib0__) {
/* 000438 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000438 */ 						case 'node_class': var node_class = __allkwargs0__ [__attrib0__]; break;
/* 000438 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000438 */ 					}
/* 000438 */ 				}
/* 000438 */ 				delete kwargs.__kwargtrans__;
/* 000438 */ 			}
/* 000438 */ 		}
/* 000438 */ 		else {
/* 000438 */ 		}
/* 000439 */ 		var node = __call__ (__call__ (__super__, null, FLMLatexWalker, 'make_node'), null, self, node_class, __kwargtrans__ (kwargs));
/* 000440 */ 		var node2 = (function () {
/* 000440 */ 			var __accu0__ = self.flm_environment;
/* 000440 */ 			return __call__ (__accu0__.finalize_node, __accu0__, node);
/* 000440 */ 		}) ();
/* 000441 */ 		if (__t__ (node2 === null)) {
/* 000442 */ 			var __except0__ = __call__ (ValueError, null, "Environment's finalize_node() returned None");
/* 000442 */ 			__except0__.__cause__ = null;
/* 000442 */ 			throw __except0__;
/* 000442 */ 		}
/* 000443 */ 		return node2;
/* 000443 */ 	});},
/* 000448 */ 	get filter_whitespace_comments_nodes () {return __get__ (this, function (self, nodelist) {
/* 000448 */ 		if (arguments.length) {
/* 000448 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000448 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000448 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000448 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000448 */ 					switch (__attrib0__) {
/* 000448 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000448 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000448 */ 					}
/* 000448 */ 				}
/* 000448 */ 			}
/* 000448 */ 		}
/* 000448 */ 		else {
/* 000448 */ 		}
/* 000453 */ 		return (function () {
/* 000453 */ 			var __accu0__ = nodelist;
/* 000453 */ 			return __call__ (__accu0__.filter, __accu0__, __kwargtrans__ ({node_predicate_fn: self._filter_whitespace_comments_nodes_predicate, skip_none: true, skip_comments: true, skip_whitespace_char_nodes: true}));
/* 000453 */ 		}) ();
/* 000453 */ 	});},
/* 000460 */ 	get _filter_whitespace_comments_nodes_predicate () {return __get__ (this, function (self, node) {
/* 000460 */ 		if (arguments.length) {
/* 000460 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000460 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000460 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000460 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000460 */ 					switch (__attrib0__) {
/* 000460 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000460 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000460 */ 					}
/* 000460 */ 				}
/* 000460 */ 			}
/* 000460 */ 		}
/* 000460 */ 		else {
/* 000460 */ 		}
/* 000463 */ 		if (__t__ (__t__ (__call__ (hasattr, null, node, 'flm_is_paragraph_break_marker')) && __call__ (getattr, null, node, 'flm_is_paragraph_break_marker'))) {
/* 000464 */ 			return false;
/* 000464 */ 		}
/* 000465 */ 		return true;
/* 000465 */ 	});}
/* 000465 */ });
/* 000473 */ export var features_ensure_dependencies_are_met = function (features) {
/* 000473 */ 	if (arguments.length) {
/* 000473 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000473 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000473 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000473 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000473 */ 				switch (__attrib0__) {
/* 000473 */ 					case 'features': var features = __allkwargs0__ [__attrib0__]; break;
/* 000473 */ 				}
/* 000473 */ 			}
/* 000473 */ 		}
/* 000473 */ 	}
/* 000473 */ 	else {
/* 000473 */ 	}
/* 000475 */ 	var feature_names = __call__ (set, null, (function () {
/* 000475 */ 		var __accu0__ = [];
/* 000475 */ 		var __iterable0__ = features;
/* 000475 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000475 */ 			var f = __getitem__ (__iterable0__, __index0__);
/* 000475 */ 			(function () {
/* 000475 */ 				var __accu1__ = __accu0__;
/* 000475 */ 				return __call__ (__accu1__.append, __accu1__, f.feature_name);
/* 000475 */ 			}) ();
/* 000475 */ 		}
/* 000475 */ 		return __accu0__;
/* 000475 */ 	}) ());
/* 000477 */ 	var __iterable0__ = features;
/* 000477 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000477 */ 		var feature = __getitem__ (__iterable0__, __index0__);
/* 000478 */ 		if (__t__ (feature.feature_dependencies === null)) {
/* 000478 */ 			continue;
/* 000478 */ 		}
/* 000480 */ 		var __iterable1__ = feature.feature_dependencies;
/* 000480 */ 		for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000480 */ 			var fdepname = __getitem__ (__iterable1__, __index1__);
/* 000481 */ 			if (__t__ (!__in__ (fdepname, feature_names))) {
/* 000483 */ 				var __except0__ = __call__ (ValueError, null, 'Feature ‘{}’ ({}) has unmet dependency ‘{}’'.format (feature.feature_name, __call__ (repr, null, feature), fdepname));
/* 000483 */ 				__except0__.__cause__ = null;
/* 000483 */ 				throw __except0__;
/* 000483 */ 			}
/* 000483 */ 		}
/* 000483 */ 	}
/* 000483 */ };
/* 000489 */ export var features_sorted_by_dependencies = function (features) {
/* 000489 */ 	if (arguments.length) {
/* 000489 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000489 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000489 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000489 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000489 */ 				switch (__attrib0__) {
/* 000489 */ 					case 'features': var features = __allkwargs0__ [__attrib0__]; break;
/* 000489 */ 				}
/* 000489 */ 			}
/* 000489 */ 		}
/* 000489 */ 	}
/* 000489 */ 	else {
/* 000489 */ 	}
/* 000506 */ 	var features_to_sort = __call__ (list, null, features);
/* 000510 */ 	var features_by_name = dict ({});
/* 000511 */ 	var __iterable0__ = features_to_sort;
/* 000511 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000511 */ 		var feature = __getitem__ (__iterable0__, __index0__);
/* 000512 */ 		if (__t__ (__in__ (feature.feature_name, features_by_name))) {
/* 000514 */ 			var __except0__ = __call__ (ValueError, null, 'Duplicate feature detected: feature {} has the same name (‘{}’) as the as already-included feature {}'.format (__call__ (repr, null, feature), feature.feature_name, __getitem__ (features_by_name, feature.feature_name)));
/* 000514 */ 			__except0__.__cause__ = null;
/* 000514 */ 			throw __except0__;
/* 000514 */ 		}
/* 000518 */ 		__setitem__ (features_by_name, feature.feature_name, feature);
/* 000518 */ 	}
/* 000523 */ 	(function () {
/* 000523 */ 		var __accu0__ = features_to_sort;
/* 000523 */ 		return __call__ (__accu0__.py_sort, __accu0__, __kwargtrans__ ({key: (function __lambda__ (f) {
/* 000523 */ 			if (arguments.length) {
/* 000523 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000523 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000523 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000523 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000523 */ 						switch (__attrib0__) {
/* 000523 */ 							case 'f': var f = __allkwargs0__ [__attrib0__]; break;
/* 000523 */ 						}
/* 000523 */ 					}
/* 000523 */ 				}
/* 000523 */ 			}
/* 000523 */ 			else {
/* 000523 */ 			}
/* 000523 */ 			return f.feature_name;
/* 000523 */ 		})}));
/* 000523 */ 	}) ();
/* 000526 */ 	__call__ (features_ensure_dependencies_are_met, null, features_to_sort);
/* 000528 */ 	var get_feature_dependencies = function (f) {
/* 000528 */ 		if (arguments.length) {
/* 000528 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000528 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000528 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000528 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000528 */ 					switch (__attrib0__) {
/* 000528 */ 						case 'f': var f = __allkwargs0__ [__attrib0__]; break;
/* 000528 */ 					}
/* 000528 */ 				}
/* 000528 */ 			}
/* 000528 */ 		}
/* 000528 */ 		else {
/* 000528 */ 		}
/* 000529 */ 		var deps = __call__ (set, null);
/* 000530 */ 		if (__t__ (f.feature_dependencies !== null)) {
/* 000531 */ 			var __iterable0__ = f.feature_dependencies;
/* 000531 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000531 */ 				var fdepname = __getitem__ (__iterable0__, __index0__);
/* 000532 */ 				(function () {
/* 000532 */ 					var __accu0__ = deps;
/* 000532 */ 					return __call__ (__accu0__.add, __accu0__, fdepname);
/* 000532 */ 				}) ();
/* 000532 */ 			}
/* 000532 */ 		}
/* 000533 */ 		if (__t__ (f.feature_optional_dependencies !== null)) {
/* 000534 */ 			var __iterable0__ = f.feature_optional_dependencies;
/* 000534 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000534 */ 				var foptdepname = __getitem__ (__iterable0__, __index0__);
/* 000535 */ 				if (__t__ (__in__ (foptdepname, features_by_name))) {
/* 000536 */ 					(function () {
/* 000536 */ 						var __accu0__ = deps;
/* 000536 */ 						return __call__ (__accu0__.add, __accu0__, foptdepname);
/* 000536 */ 					}) ();
/* 000536 */ 				}
/* 000536 */ 			}
/* 000536 */ 		}
/* 000537 */ 		return __call__ (sorted, null, __call__ (list, null, deps));
/* 000537 */ 	};
/* 000545 */ 	var all_feature_dependencies = __call__ (dict, null, (function () {
/* 000545 */ 		var __accu0__ = [];
/* 000547 */ 		var __iterable0__ = (function () {
/* 000547 */ 			var __accu1__ = features_by_name;
/* 000547 */ 			return __call__ (__accu1__.py_items, __accu1__);
/* 000547 */ 		}) ();
/* 000547 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000547 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000547 */ 			var fname = __left0__ [0];
/* 000547 */ 			var f = __left0__ [1];
/* 000547 */ 			(function () {
/* 000547 */ 				var __accu1__ = __accu0__;
/* 000546 */ 				return __call__ (__accu1__.append, __accu1__, tuple ([fname, __call__ (get_feature_dependencies, null, f)]));
/* 000546 */ 			}) ();
/* 000546 */ 		}
/* 000546 */ 		return __accu0__;
/* 000546 */ 	}) ());
/* 000550 */ 	var get_feature_dependents = function (fparentname, all_feature_dependencies) {
/* 000550 */ 		if (arguments.length) {
/* 000550 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000550 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000550 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000550 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000550 */ 					switch (__attrib0__) {
/* 000550 */ 						case 'fparentname': var fparentname = __allkwargs0__ [__attrib0__]; break;
/* 000550 */ 						case 'all_feature_dependencies': var all_feature_dependencies = __allkwargs0__ [__attrib0__]; break;
/* 000550 */ 					}
/* 000550 */ 				}
/* 000550 */ 			}
/* 000550 */ 		}
/* 000550 */ 		else {
/* 000550 */ 		}
/* 000551 */ 		var dependents = __call__ (set, null);
/* 000552 */ 		var __iterable0__ = (function () {
/* 000552 */ 			var __accu0__ = all_feature_dependencies;
/* 000552 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000552 */ 		}) ();
/* 000552 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000552 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000552 */ 			var fname = __left0__ [0];
/* 000552 */ 			var fdepnames = __left0__ [1];
/* 000553 */ 			var __iterable1__ = fdepnames;
/* 000553 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000553 */ 				var fdepname = __getitem__ (__iterable1__, __index1__);
/* 000554 */ 				if (__t__ (__eq__ (fdepname, fparentname))) {
/* 000555 */ 					(function () {
/* 000555 */ 						var __accu0__ = dependents;
/* 000555 */ 						return __call__ (__accu0__.add, __accu0__, fname);
/* 000555 */ 					}) ();
/* 000555 */ 				}
/* 000555 */ 			}
/* 000555 */ 		}
/* 000556 */ 		return __call__ (sorted, null, __call__ (list, null, dependents));
/* 000556 */ 	};
/* 000562 */ 	var sorted_features = [];
/* 000563 */ 	var root_features = (function () {
/* 000563 */ 		var __accu0__ = [];
/* 000566 */ 		var __iterable0__ = __call__ (py_reversed, null, features_to_sort);
/* 000566 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000566 */ 			var f = __getitem__ (__iterable0__, __index0__);
/* 000567 */ 			if (__t__ (__eq__ (__call__ (len, null, __getitem__ (all_feature_dependencies, f.feature_name)), 0))) {
/* 000567 */ 				(function () {
/* 000567 */ 					var __accu1__ = __accu0__;
/* 000567 */ 					return __call__ (__accu1__.append, __accu1__, f);
/* 000567 */ 				}) ();
/* 000567 */ 			}
/* 000567 */ 		}
/* 000567 */ 		return __accu0__;
/* 000567 */ 	}) ();
/* 000571 */ 	while (__t__ (__gt__ (__call__ (len, null, root_features), 0))) {
/* 000572 */ 		var n = (function () {
/* 000572 */ 			var __accu0__ = root_features;
/* 000572 */ 			return __call__ (__accu0__.py_pop, __accu0__);
/* 000572 */ 		}) ();
/* 000573 */ 		(function () {
/* 000573 */ 			var __accu0__ = sorted_features;
/* 000573 */ 			return __call__ (__accu0__.append, __accu0__, n);
/* 000573 */ 		}) ();
/* 000575 */ 		var n_name = n.feature_name;
/* 000577 */ 		var iter_dependents = __call__ (get_feature_dependents, null, n_name, all_feature_dependencies);
/* 000578 */ 		var __iterable0__ = iter_dependents;
/* 000578 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000578 */ 			var fdependentname = __getitem__ (__iterable0__, __index0__);
/* 000581 */ 			(function () {
/* 000581 */ 				var __accu0__ = __getitem__ (all_feature_dependencies, fdependentname);
/* 000581 */ 				return __call__ (__accu0__.remove, __accu0__, n_name);
/* 000581 */ 			}) ();
/* 000585 */ 			if (__t__ (__eq__ (__call__ (len, null, __getitem__ (all_feature_dependencies, fdependentname)), 0))) {
/* 000587 */ 				(function () {
/* 000587 */ 					var __accu0__ = root_features;
/* 000587 */ 					return __call__ (__accu0__.insert, __accu0__, 0, __getitem__ (features_by_name, fdependentname));
/* 000587 */ 				}) ();
/* 000587 */ 			}
/* 000587 */ 		}
/* 000587 */ 	}
/* 000590 */ 	var problematic_features = [];
/* 000591 */ 	var __iterable0__ = (function () {
/* 000591 */ 		var __accu0__ = all_feature_dependencies;
/* 000591 */ 		return __call__ (__accu0__.py_items, __accu0__);
/* 000591 */ 	}) ();
/* 000591 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000591 */ 		var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000591 */ 		var fsrcname = __left0__ [0];
/* 000591 */ 		var featuredeps = __left0__ [1];
/* 000592 */ 		if (__t__ (__gt__ (__call__ (len, null, featuredeps), 0))) {
/* 000593 */ 			(function () {
/* 000593 */ 				var __accu0__ = problematic_features;
/* 000594 */ 				return __call__ (__accu0__.append, __accu0__, __add__ ('‘{}’ → '.format (fsrcname), (function () {
/* 000594 */ 					var __accu1__ = ', ';
/* 000594 */ 					return __call__ (__accu1__.join, __accu1__, (function () {
/* 000594 */ 						var __accu2__ = [];
/* 000594 */ 						var __iterable1__ = featuredeps;
/* 000594 */ 						for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000594 */ 							var fdepname = __getitem__ (__iterable1__, __index1__);
/* 000594 */ 							(function () {
/* 000594 */ 								var __accu3__ = __accu2__;
/* 000594 */ 								return __call__ (__accu3__.append, __accu3__, '‘{}’'.format (fdepname));
/* 000594 */ 							}) ();
/* 000594 */ 						}
/* 000594 */ 						return __accu2__;
/* 000594 */ 					}) ());
/* 000594 */ 				}) ()));
/* 000594 */ 			}) ();
/* 000594 */ 		}
/* 000594 */ 	}
/* 000596 */ 	if (__t__ (__gt__ (__call__ (len, null, problematic_features), 0))) {
/* 000599 */ 		var __except0__ = __call__ (ValueError, null, __add__ ('The feature dependency graph has a cycle!  Problematic dependencies:'.format (), (function () {
/* 000599 */ 			var __accu0__ = '; ';
/* 000599 */ 			return __call__ (__accu0__.join, __accu0__, problematic_features);
/* 000599 */ 		}) ()));
/* 000599 */ 		__except0__.__cause__ = null;
/* 000599 */ 		throw __except0__;
/* 000599 */ 	}
/* 000602 */ 	if (__t__ (__ne__ (__call__ (len, null, sorted_features), __call__ (len, null, features_to_sort)))) {
/* 000603 */ 		var __except0__ = __call__ (RuntimeError, null, "Internal error, we didn't get all the features right when ordering them!");
/* 000603 */ 		__except0__.__cause__ = null;
/* 000603 */ 		throw __except0__;
/* 000603 */ 	}
/* 000607 */ 	return tuple ([sorted_features, features_by_name]);
/* 000607 */ };
/* 000636 */ export var FLMEnvironment =  __class__ ('FLMEnvironment', [object], {
/* 000636 */ 	__module__: __name__,
/* 000655 */ 	get __init__ () {return __get__ (this, function (self, features, parsing_state, latex_context) {
/* 000655 */ 		var tolerant_parsing = false;
/* 000655 */ 		var parsing_mode_deltas = null;
/* 000655 */ 		if (arguments.length) {
/* 000655 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000655 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000655 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000655 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000655 */ 					switch (__attrib0__) {
/* 000655 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000655 */ 						case 'features': var features = __allkwargs0__ [__attrib0__]; break;
/* 000655 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000655 */ 						case 'latex_context': var latex_context = __allkwargs0__ [__attrib0__]; break;
/* 000655 */ 						case 'tolerant_parsing': var tolerant_parsing = __allkwargs0__ [__attrib0__]; break;
/* 000655 */ 						case 'parsing_mode_deltas': var parsing_mode_deltas = __allkwargs0__ [__attrib0__]; break;
/* 000655 */ 					}
/* 000655 */ 				}
/* 000655 */ 			}
/* 000655 */ 		}
/* 000655 */ 		else {
/* 000655 */ 		}
/* 000664 */ 		__call__ (__call__ (__super__, null, FLMEnvironment, '__init__'), null, self);
/* 000666 */ 		// pass;
/* 000670 */ 		self.latex_context = latex_context;
/* 000671 */ 		self.parsing_state = parsing_state;
/* 000673 */ 		self.parsing_mode_deltas = (__t__ (parsing_mode_deltas) ? __call__ (dict, null, parsing_mode_deltas) : dict ({}));
/* 000675 */ 		var __left0__ = __call__ (features_sorted_by_dependencies, null, features);
/* 000675 */ 		self.features = __left0__ [0];
/* 000675 */ 		self.features_by_name = __left0__ [1];
/* 000677 */ 		// pass;
/* 000681 */ 		self.tolerant_parsing = tolerant_parsing;
/* 000683 */ 		self._node_list_finalizer = __call__ (NodeListFinalizer, null);
/* 000685 */ 		if (__t__ (self.parsing_state.latex_context === null)) {
/* 000688 */ 			var __iterable0__ = self.features;
/* 000688 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000688 */ 				var f = __getitem__ (__iterable0__, __index0__);
/* 000689 */ 				var moredefs = (function () {
/* 000689 */ 					var __accu0__ = f;
/* 000689 */ 					return __call__ (__accu0__.add_latex_context_definitions, __accu0__);
/* 000689 */ 				}) ();
/* 000690 */ 				// pass;
/* 000695 */ 				if (__t__ (moredefs !== null)) {
/* 000696 */ 					var moredefs = __call__ (dict, null, moredefs);
/* 000697 */ 					if (__t__ (__call__ (len, null, moredefs))) {
/* 000698 */ 						// pass;
/* 000701 */ 						(function () {
/* 000701 */ 							var __accu0__ = moredefs;
/* 000701 */ 							return __call__ (__accu0__.py_update, __accu0__, __call__ (dict, null, __kwargtrans__ ({prepend: true})));
/* 000701 */ 						}) ();
/* 000702 */ 						(function () {
/* 000702 */ 							var __accu0__ = self.latex_context;
/* 000702 */ 							return __call__ (__accu0__.add_context_category, __accu0__, 'feature--{}'.format (f.feature_name), __kwargtrans__ (moredefs));
/* 000702 */ 						}) ();
/* 000702 */ 					}
/* 000702 */ 				}
/* 000702 */ 			}
/* 000708 */ 			(function () {
/* 000708 */ 				var __accu0__ = self.latex_context;
/* 000708 */ 				return __call__ (__accu0__.freeze, __accu0__);
/* 000708 */ 			}) ();
/* 000711 */ 			self.parsing_state.latex_context = self.latex_context;
/* 000711 */ 		}
/* 000713 */ 		else if (__t__ (self.latex_context !== null)) {
/* 000716 */ 			var __except0__ = __call__ (RuntimeError, null, 'The specified `parsing_state` instance already has a latex_context set');
/* 000716 */ 			__except0__.__cause__ = null;
/* 000716 */ 			throw __except0__;
/* 000716 */ 		}
/* 000716 */ 	});},
/* 000721 */ 	get feature () {return __get__ (this, function (self, feature_name) {
/* 000721 */ 		if (arguments.length) {
/* 000721 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000721 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000721 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000721 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000721 */ 					switch (__attrib0__) {
/* 000721 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000721 */ 						case 'feature_name': var feature_name = __allkwargs0__ [__attrib0__]; break;
/* 000721 */ 					}
/* 000721 */ 				}
/* 000721 */ 			}
/* 000721 */ 		}
/* 000721 */ 		else {
/* 000721 */ 		}
/* 000722 */ 		return __getitem__ (self.features_by_name, feature_name);
/* 000722 */ 	});},
/* 000725 */ 	parsing_state_event_handler: null,
/* 000732 */ 	get make_latex_walker () {return __get__ (this, function (self, flm_text) {
/* 000732 */ 		var parsing_mode = null;
/* 000732 */ 		var resource_info = null;
/* 000732 */ 		var tolerant_parsing = null;
/* 000732 */ 		var what = null;
/* 000732 */ 		var input_lineno_colno_offsets = null;
/* 000732 */ 		if (arguments.length) {
/* 000732 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000732 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000732 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000732 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000732 */ 					switch (__attrib0__) {
/* 000732 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000732 */ 						case 'flm_text': var flm_text = __allkwargs0__ [__attrib0__]; break;
/* 000732 */ 						case 'standalone_mode': var standalone_mode = __allkwargs0__ [__attrib0__]; break;
/* 000732 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000732 */ 						case 'parsing_mode': var parsing_mode = __allkwargs0__ [__attrib0__]; break;
/* 000732 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000732 */ 						case 'tolerant_parsing': var tolerant_parsing = __allkwargs0__ [__attrib0__]; break;
/* 000732 */ 						case 'what': var what = __allkwargs0__ [__attrib0__]; break;
/* 000732 */ 						case 'input_lineno_colno_offsets': var input_lineno_colno_offsets = __allkwargs0__ [__attrib0__]; break;
/* 000732 */ 					}
/* 000732 */ 				}
/* 000732 */ 			}
/* 000732 */ 		}
/* 000732 */ 		else {
/* 000732 */ 		}
/* 000745 */ 		var default_parsing_state = (function () {
/* 000745 */ 			var __accu0__ = self;
/* 000745 */ 			return __call__ (__accu0__.make_parsing_state, __accu0__, __kwargtrans__ ({is_block_level: is_block_level, parsing_mode: parsing_mode}));
/* 000745 */ 		}) ();
/* 000750 */ 		if (__t__ (tolerant_parsing === null)) {
/* 000751 */ 			var tolerant_parsing = self.tolerant_parsing;
/* 000751 */ 		}
/* 000753 */ 		var latex_walker = __call__ (FLMLatexWalker, null, __kwargtrans__ ({flm_text: flm_text, default_parsing_state: default_parsing_state, tolerant_parsing: tolerant_parsing, flm_environment: self, standalone_mode: standalone_mode, resource_info: resource_info, what: what, parsing_state_event_handler: self.parsing_state_event_handler, input_lineno_colno_offsets: input_lineno_colno_offsets}));
/* 000767 */ 		return latex_walker;
/* 000767 */ 	});},
/* 000769 */ 	get define_parsing_mode () {return __get__ (this, function (self, parsing_mode, parsing_mode_delta) {
/* 000769 */ 		if (arguments.length) {
/* 000769 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000769 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000769 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000769 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000769 */ 					switch (__attrib0__) {
/* 000769 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000769 */ 						case 'parsing_mode': var parsing_mode = __allkwargs0__ [__attrib0__]; break;
/* 000769 */ 						case 'parsing_mode_delta': var parsing_mode_delta = __allkwargs0__ [__attrib0__]; break;
/* 000769 */ 					}
/* 000769 */ 				}
/* 000769 */ 			}
/* 000769 */ 		}
/* 000769 */ 		else {
/* 000769 */ 		}
/* 000770 */ 		if (__t__ (__in__ (parsing_mode, self.parsing_mode_deltas))) {
/* 000771 */ 			var __except0__ = __call__ (ValueError, null, 'Parsing mode ‘{}’ already defined!'.format (parsing_mode));
/* 000771 */ 			__except0__.__cause__ = null;
/* 000771 */ 			throw __except0__;
/* 000771 */ 		}
/* 000772 */ 		__setitem__ (self.parsing_mode_deltas, parsing_mode, parsing_mode_delta);
/* 000772 */ 	});},
/* 000774 */ 	get make_parsing_state () {return __get__ (this, function (self, is_block_level, parsing_mode) {
/* 000774 */ 		if (typeof parsing_mode == 'undefined' || (parsing_mode != null && parsing_mode.hasOwnProperty ("__kwargtrans__"))) {;
/* 000774 */ 			var parsing_mode = null;
/* 000774 */ 		};
/* 000774 */ 		if (arguments.length) {
/* 000774 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000774 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000774 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000774 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000774 */ 					switch (__attrib0__) {
/* 000774 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000774 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000774 */ 						case 'parsing_mode': var parsing_mode = __allkwargs0__ [__attrib0__]; break;
/* 000774 */ 					}
/* 000774 */ 				}
/* 000774 */ 			}
/* 000774 */ 		}
/* 000774 */ 		else {
/* 000774 */ 		}
/* 000778 */ 		var default_parsing_state = self.parsing_state;
/* 000780 */ 		if (__t__ (parsing_mode !== null)) {
/* 000781 */ 			try {
/* 000782 */ 				var parsing_state_delta = __getitem__ (self.parsing_mode_deltas, parsing_mode);
/* 000782 */ 			}
/* 000782 */ 			catch (__except0__) {
/* 000782 */ 				if (isinstance (__except0__, KeyError)) {
/* 000782 */ 					var e = __except0__;
/* 000784 */ 					var __except1__ = __call__ (ValueError, null, 'Invalid parsing_mode ‘{}’'.format (parsing_mode));
/* 000784 */ 					__except1__.__cause__ = null;
/* 000784 */ 					throw __except1__;
/* 000784 */ 				}
/* 000784 */ 				else {
/* 000784 */ 					throw __except0__;
/* 000784 */ 				}
/* 000784 */ 			}
/* 000786 */ 			if (__t__ (parsing_state_delta !== null)) {
/* 000787 */ 				var default_parsing_state = (function () {
/* 000787 */ 					var __accu0__ = parsing_state_delta;
/* 000787 */ 					return __call__ (__accu0__.get_updated_parsing_state, __accu0__, default_parsing_state, __kwargtrans__ ({latex_walker: null}));
/* 000787 */ 				}) ();
/* 000787 */ 			}
/* 000787 */ 		}
/* 000792 */ 		var kwargs = dict ({});
/* 000793 */ 		if (__t__ (is_block_level !== null)) {
/* 000794 */ 			__setitem__ (kwargs, 'is_block_level', is_block_level);
/* 000794 */ 		}
/* 000796 */ 		return (function () {
/* 000796 */ 			var __accu0__ = default_parsing_state;
/* 000796 */ 			return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ (kwargs));
/* 000796 */ 		}) ();
/* 000796 */ 	});},
/* 000799 */ 	get make_fragment () {return __get__ (this, function (self, flm_text) {
/* 000799 */ 		var kwargs = dict ();
/* 000799 */ 		if (arguments.length) {
/* 000799 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000799 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000799 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000799 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000799 */ 					switch (__attrib0__) {
/* 000799 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000799 */ 						case 'flm_text': var flm_text = __allkwargs0__ [__attrib0__]; break;
/* 000799 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000799 */ 					}
/* 000799 */ 				}
/* 000799 */ 				delete kwargs.__kwargtrans__;
/* 000799 */ 			}
/* 000799 */ 		}
/* 000799 */ 		else {
/* 000799 */ 		}
/* 000801 */ 		if (__t__ (__call__ (isinstance, null, flm_text, FLMFragment))) {
/* 000802 */ 			var frag = flm_text;
/* 000803 */ 			var __iterable0__ = tuple (['is_block_level', 'standalone_mode']);
/* 000803 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000803 */ 				var fld = __getitem__ (__iterable0__, __index0__);
/* 000805 */ 				if (__t__ (__t__ (__in__ (fld, kwargs)) && __t__ (__getitem__ (kwargs, fld) !== null) && __ne__ (__getitem__ (kwargs, fld), __call__ (getattr, null, frag, fld)))) {
/* 000809 */ 					var __except0__ = __call__ (ValueError, null, 'make_fragment(): FLMFragment instance specified but its ‘{}’ ({}) differs with requested ‘{}’ ({})'.format (fld, __call__ (repr, null, __call__ (getattr, null, frag, fld)), fld, __getitem__ (kwargs, fld)));
/* 000809 */ 					__except0__.__cause__ = null;
/* 000809 */ 					throw __except0__;
/* 000809 */ 				}
/* 000809 */ 			}
/* 000812 */ 			return frag;
/* 000812 */ 		}
/* 000814 */ 		try {
/* 000815 */ 			var fragment = __call__ (FLMFragment, null, flm_text, __kwargtrans__ (__mergekwargtrans__ ({environment: self}, kwargs)));
/* 000816 */ 			return fragment;
/* 000816 */ 		}
/* 000816 */ 		catch (__except0__) {
/* 000818 */ 			if (__t__ (!__t__ (((function () {
/* 000818 */ 				var __accu0__ = kwargs;
/* 000818 */ 				return __call__ (__accu0__.py_get, __accu0__, 'silent', false);
/* 000818 */ 			}) ())))) {
/* 000819 */ 				(function () {
/* 000819 */ 					var __accu0__ = logger;
/* 000820 */ 					return __call__ (__accu0__.error, __accu0__, (function () {
/* 000820 */ 						var __accu1__ = 'Error compiling fragment for {}\nContent was:\n‘{}’\n';
/* 000821 */ 						return __call__ (__accu1__.format, __accu1__, (function () {
/* 000821 */ 							var __accu2__ = kwargs;
/* 000821 */ 							return __call__ (__accu2__.py_get, __accu2__, 'what', '(unknown)');
/* 000821 */ 						}) (), flm_text);
/* 000821 */ 					}) (), __kwargtrans__ ({exc_info: true}));
/* 000821 */ 				}) ();
/* 000821 */ 			}
/* 000824 */ 			__except0__.__cause__ = null;
/* 000824 */ 			throw __except0__;
/* 000824 */ 		}
/* 000824 */ 	});},
/* 000828 */ 	get make_document () {return __get__ (this, function (self, render_callback) {
/* 000828 */ 		var kwargs = dict ();
/* 000828 */ 		if (arguments.length) {
/* 000828 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000828 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000828 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000828 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000828 */ 					switch (__attrib0__) {
/* 000828 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000828 */ 						case 'render_callback': var render_callback = __allkwargs0__ [__attrib0__]; break;
/* 000828 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000828 */ 					}
/* 000828 */ 				}
/* 000828 */ 				delete kwargs.__kwargtrans__;
/* 000828 */ 			}
/* 000828 */ 		}
/* 000828 */ 		else {
/* 000828 */ 		}
/* 000837 */ 		var doc = __call__ (FLMDocument, null, render_callback, __kwargtrans__ (__mergekwargtrans__ ({environment: self}, kwargs)));
/* 000842 */ 		(function () {
/* 000842 */ 			var __accu0__ = doc;
/* 000842 */ 			return __call__ (__accu0__.initialize, __accu0__);
/* 000842 */ 		}) ();
/* 000843 */ 		return doc;
/* 000843 */ 	});},
/* 000846 */ 	get get_features_selection () {return __get__ (this, function (self, enable_features) {
/* 000846 */ 		if (arguments.length) {
/* 000846 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000846 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000846 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000846 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000846 */ 					switch (__attrib0__) {
/* 000846 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000846 */ 						case 'enable_features': var enable_features = __allkwargs0__ [__attrib0__]; break;
/* 000846 */ 					}
/* 000846 */ 				}
/* 000846 */ 			}
/* 000846 */ 		}
/* 000846 */ 		else {
/* 000846 */ 		}
/* 000848 */ 		if (__t__ (enable_features === null)) {
/* 000850 */ 			return self.features;
/* 000850 */ 		}
/* 000852 */ 		var features = (function () {
/* 000852 */ 			var __accu0__ = [];
/* 000852 */ 			var __iterable0__ = enable_features;
/* 000852 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000854 */ 				var feature_name = __getitem__ (__iterable0__, __index0__);
/* 000854 */ 				(function () {
/* 000854 */ 					var __accu1__ = __accu0__;
/* 000854 */ 					return __call__ (__accu1__.append, __accu1__, __getitem__ (self.features_by_name, feature_name));
/* 000854 */ 				}) ();
/* 000854 */ 			}
/* 000854 */ 			return __accu0__;
/* 000854 */ 		}) ();
/* 000858 */ 		__call__ (features_ensure_dependencies_are_met, null, features);
/* 000860 */ 		return features;
/* 000860 */ 	});},
/* 000865 */ 	environment_get_located_error_message: null,
/* 000867 */ 	get get_located_error_message () {return __get__ (this, function (self, exception_object) {
/* 000867 */ 		if (arguments.length) {
/* 000867 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000867 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000867 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000867 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000867 */ 					switch (__attrib0__) {
/* 000867 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000867 */ 						case 'exception_object': var exception_object = __allkwargs0__ [__attrib0__]; break;
/* 000867 */ 					}
/* 000867 */ 				}
/* 000867 */ 			}
/* 000867 */ 		}
/* 000867 */ 		else {
/* 000867 */ 		}
/* 000868 */ 		if (__t__ (self.environment_get_located_error_message !== null)) {
/* 000869 */ 			return (function () {
/* 000869 */ 				var __accu0__ = self;
/* 000869 */ 				return __call__ (__accu0__.environment_get_located_error_message, __accu0__, exception_object);
/* 000869 */ 			}) ();
/* 000869 */ 		}
/* 000870 */ 		return (function () {
/* 000870 */ 			var __accu0__ = __call__ (LatexWalkerLocatedErrorFormatter, null, exception_object);
/* 000870 */ 			return __call__ (__accu0__.to_display_string, __accu0__);
/* 000870 */ 		}) ();
/* 000870 */ 	});},
/* 000874 */ 	get finalize_nodelist () {return __get__ (this, function (self, nodelist) {
/* 000874 */ 		if (arguments.length) {
/* 000874 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000874 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000874 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000874 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000874 */ 					switch (__attrib0__) {
/* 000874 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000874 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000874 */ 					}
/* 000874 */ 				}
/* 000874 */ 			}
/* 000874 */ 		}
/* 000874 */ 		else {
/* 000874 */ 		}
/* 000875 */ 		var nl = (function () {
/* 000875 */ 			var __accu0__ = self._node_list_finalizer;
/* 000875 */ 			return __call__ (__accu0__.finalize_nodelist, __accu0__, nodelist);
/* 000875 */ 		}) ();
/* 000876 */ 		return nl;
/* 000876 */ 	});},
/* 000878 */ 	get finalize_node () {return __get__ (this, function (self, node) {
/* 000878 */ 		if (arguments.length) {
/* 000878 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000878 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000878 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000878 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000878 */ 					switch (__attrib0__) {
/* 000878 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000878 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000878 */ 					}
/* 000878 */ 				}
/* 000878 */ 			}
/* 000878 */ 		}
/* 000878 */ 		else {
/* 000878 */ 		}
/* 000883 */ 		node._flm_node_id = __call__ (fn_unique_object_id, null, node);
/* 000884 */ 		return node;
/* 000884 */ 	});}
/* 000884 */ });
/* 000892 */ export var standard_parsing_state = function () {
/* 000892 */ 	var force_block_level = null;
/* 000892 */ 	var enable_comments = true;
/* 000892 */ 	var comment_start = '%%';
/* 000892 */ 	var extra_forbidden_characters = '';
/* 000892 */ 	var dollar_inline_math_mode = false;
/* 000892 */ 	if (arguments.length) {
/* 000892 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000892 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000892 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000892 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000892 */ 				switch (__attrib0__) {
/* 000892 */ 					case 'force_block_level': var force_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000892 */ 					case 'enable_comments': var enable_comments = __allkwargs0__ [__attrib0__]; break;
/* 000892 */ 					case 'comment_start': var comment_start = __allkwargs0__ [__attrib0__]; break;
/* 000892 */ 					case 'extra_forbidden_characters': var extra_forbidden_characters = __allkwargs0__ [__attrib0__]; break;
/* 000892 */ 					case 'dollar_inline_math_mode': var dollar_inline_math_mode = __allkwargs0__ [__attrib0__]; break;
/* 000892 */ 				}
/* 000892 */ 			}
/* 000892 */ 		}
/* 000892 */ 	}
/* 000892 */ 	else {
/* 000892 */ 	}
/* 000908 */ 	var forbidden_characters = __call__ (str, null, extra_forbidden_characters);
/* 000909 */ 	if (__t__ (__t__ (!__t__ ((dollar_inline_math_mode))) && !__in__ ('$', forbidden_characters))) {
/* 000910 */ 		var forbidden_characters = __call__ (__iadd__, null, forbidden_characters, '$');
/* 000910 */ 	}
/* 000911 */ 	if (__t__ (__t__ ((__t__ (!__t__ ((enable_comments))) || __ne__ (comment_start, '%'))) && !__in__ ('%', forbidden_characters))) {
/* 000913 */ 		var forbidden_characters = __call__ (__iadd__, null, forbidden_characters, '%');
/* 000913 */ 	}
/* 000915 */ 	var latex_inline_math_delimiters = [tuple (['\\(', '\\)'])];
/* 000917 */ 	if (__t__ (dollar_inline_math_mode)) {
/* 000918 */ 		(function () {
/* 000918 */ 			var __accu0__ = latex_inline_math_delimiters;
/* 000918 */ 			return __call__ (__accu0__.append, __accu0__, tuple (['$', '$']));
/* 000918 */ 		}) ();
/* 000918 */ 	}
/* 000920 */ 	return __call__ (FLMParsingState, null, __kwargtrans__ ({is_block_level: force_block_level, latex_context: null, enable_comments: enable_comments, comment_start: comment_start, latex_inline_math_delimiters: latex_inline_math_delimiters, latex_display_math_delimiters: [tuple (['\\[', '\\]'])], forbidden_characters: forbidden_characters}));
/* 000920 */ };
/* 000932 */ export var FLMLatexWalkerMathContextParsingStateEventHandler =  __class__ ('FLMLatexWalkerMathContextParsingStateEventHandler', [latexnodes.LatexWalkerParsingStateEventHandler], {
/* 000932 */ 	__module__: __name__,
/* 000961 */ 	math_mode_extend_context: dict ({'unknown_macro_spec': (function () {
/* 000961 */ 		var __accu0__ = macrospec;
/* 000961 */ 		return __call__ (__accu0__.MacroSpec, __accu0__, '');
/* 000962 */ 	}) (), 'unknown_environment_spec': (function () {
/* 000962 */ 		var __accu0__ = macrospec;
/* 000962 */ 		return __call__ (__accu0__.EnvironmentSpec, __accu0__, '');
/* 000963 */ 	}) (), 'unknown_specials_spec': (function () {
/* 000963 */ 		var __accu0__ = macrospec;
/* 000963 */ 		return __call__ (__accu0__.SpecialsSpec, __accu0__, '');
/* 000960 */ 	}) ()}),
/* 000966 */ 	get enter_math_mode () {return __get__ (this, function (self, math_mode_delimiter, trigger_token) {
/* 000966 */ 		if (typeof math_mode_delimiter == 'undefined' || (math_mode_delimiter != null && math_mode_delimiter.hasOwnProperty ("__kwargtrans__"))) {;
/* 000966 */ 			var math_mode_delimiter = null;
/* 000966 */ 		};
/* 000966 */ 		if (typeof trigger_token == 'undefined' || (trigger_token != null && trigger_token.hasOwnProperty ("__kwargtrans__"))) {;
/* 000966 */ 			var trigger_token = null;
/* 000966 */ 		};
/* 000966 */ 		if (arguments.length) {
/* 000966 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000966 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000966 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000966 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000966 */ 					switch (__attrib0__) {
/* 000966 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000966 */ 						case 'math_mode_delimiter': var math_mode_delimiter = __allkwargs0__ [__attrib0__]; break;
/* 000966 */ 						case 'trigger_token': var trigger_token = __allkwargs0__ [__attrib0__]; break;
/* 000966 */ 					}
/* 000966 */ 				}
/* 000966 */ 			}
/* 000966 */ 		}
/* 000966 */ 		else {
/* 000966 */ 		}
/* 000972 */ 		var set_attributes = __call__ (dict, null, __kwargtrans__ ({in_math_mode: true, math_mode_delimiter: math_mode_delimiter}));
/* 000976 */ 		// pass;
/* 000981 */ 		return (function () {
/* 000981 */ 			var __accu0__ = macrospec;
/* 000981 */ 			return __call__ (__accu0__.ParsingStateDeltaExtendLatexContextDb, __accu0__, __kwargtrans__ ({set_attributes: set_attributes, extend_latex_context: self.math_mode_extend_context}));
/* 000981 */ 		}) ();
/* 000981 */ 	});},
/* 000986 */ 	get leave_math_mode () {return __get__ (this, function (self, trigger_token) {
/* 000986 */ 		if (typeof trigger_token == 'undefined' || (trigger_token != null && trigger_token.hasOwnProperty ("__kwargtrans__"))) {;
/* 000986 */ 			var trigger_token = null;
/* 000986 */ 		};
/* 000986 */ 		if (arguments.length) {
/* 000986 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000986 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000986 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000986 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000986 */ 					switch (__attrib0__) {
/* 000986 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000986 */ 						case 'trigger_token': var trigger_token = __allkwargs0__ [__attrib0__]; break;
/* 000986 */ 					}
/* 000986 */ 				}
/* 000986 */ 			}
/* 000986 */ 		}
/* 000986 */ 		else {
/* 000986 */ 		}
/* 000993 */ 		return (function () {
/* 000993 */ 			var __accu0__ = macrospec;
/* 000998 */ 			return __call__ (__accu0__.ParsingStateDeltaExtendLatexContextDb, __accu0__, __kwargtrans__ ({set_attributes: __call__ (dict, null, __kwargtrans__ ({in_math_mode: false, math_mode_delimiter: null})), extend_latex_context: __call__ (dict, null, __kwargtrans__ ({unknown_macro_spec: null, unknown_environment_spec: null, unknown_specials_spec: null}))}));
/* 000998 */ 		}) ();
/* 000998 */ 	});}
/* 000998 */ });
/* 001009 */ export var standard_environment_get_located_error_message = function (exception_object) {
/* 001009 */ 	if (arguments.length) {
/* 001009 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001009 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001009 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001009 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001009 */ 				switch (__attrib0__) {
/* 001009 */ 					case 'exception_object': var exception_object = __allkwargs0__ [__attrib0__]; break;
/* 001009 */ 				}
/* 001009 */ 			}
/* 001009 */ 		}
/* 001009 */ 	}
/* 001009 */ 	else {
/* 001009 */ 	}
/* 001033 */ 	var msg = null;
/* 001034 */ 	var error_type_info = exception_object.error_type_info;
/* 001035 */ 	if (__t__ (error_type_info)) {
/* 001036 */ 		var what = __getitem__ (error_type_info, 'what');
/* 001037 */ 		if (__t__ (__eq__ (what, 'token_forbidden_character'))) {
/* 001038 */ 			if (__t__ (__eq__ (__getitem__ (error_type_info, 'forbidden_character'), '%'))) {
/* 001039 */ 				var msg = 'Single percent signs are not allowed here. Use ‘\\%’ to typeset a literal percent sign, and ‘%%’ to start a comment.';
/* 001039 */ 			}
/* 001043 */ 			else if (__t__ (__eq__ (__getitem__ (error_type_info, 'forbidden_character'), '$'))) {
/* 001044 */ 				var msg = "You can't use ‘$’ here. LaTeX math should be typeset using \\(...\\) for inline math and \\[...\\] for unnumbered display equations. Use ‘\\$’ for a literal dollar sign.";
/* 001044 */ 			}
/* 001044 */ 		}
/* 001044 */ 	}
/* 001049 */ 	if (__t__ (!__t__ ((msg)))) {
/* 001050 */ 		var msg = exception_object.msg;
/* 001050 */ 	}
/* 001052 */ 	var errfmt = (function () {
/* 001052 */ 		var __accu0__ = latexnodes;
/* 001052 */ 		return __call__ (__accu0__.LatexWalkerLocatedErrorFormatter, __accu0__, exception_object);
/* 001052 */ 	}) ();
/* 001054 */ 	var msg = __call__ (__iadd__, null, msg, (function () {
/* 001054 */ 		var __accu0__ = errfmt;
/* 001054 */ 		return __call__ (__accu0__.format_full_traceback, __accu0__);
/* 001054 */ 	}) ());
/* 001056 */ 	return msg;
/* 001056 */ };
/* 001063 */ export var make_standard_environment = function (features, parsing_state, latex_context, flm_environment_options, parsing_state_options) {
/* 001063 */ 	if (typeof parsing_state == 'undefined' || (parsing_state != null && parsing_state.hasOwnProperty ("__kwargtrans__"))) {;
/* 001063 */ 		var parsing_state = null;
/* 001063 */ 	};
/* 001063 */ 	if (typeof latex_context == 'undefined' || (latex_context != null && latex_context.hasOwnProperty ("__kwargtrans__"))) {;
/* 001063 */ 		var latex_context = null;
/* 001063 */ 	};
/* 001063 */ 	if (typeof flm_environment_options == 'undefined' || (flm_environment_options != null && flm_environment_options.hasOwnProperty ("__kwargtrans__"))) {;
/* 001063 */ 		var flm_environment_options = null;
/* 001063 */ 	};
/* 001063 */ 	if (typeof parsing_state_options == 'undefined' || (parsing_state_options != null && parsing_state_options.hasOwnProperty ("__kwargtrans__"))) {;
/* 001063 */ 		var parsing_state_options = null;
/* 001063 */ 	};
/* 001063 */ 	if (arguments.length) {
/* 001063 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001063 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001063 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001063 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001063 */ 				switch (__attrib0__) {
/* 001063 */ 					case 'features': var features = __allkwargs0__ [__attrib0__]; break;
/* 001063 */ 					case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 001063 */ 					case 'latex_context': var latex_context = __allkwargs0__ [__attrib0__]; break;
/* 001063 */ 					case 'flm_environment_options': var flm_environment_options = __allkwargs0__ [__attrib0__]; break;
/* 001063 */ 					case 'parsing_state_options': var parsing_state_options = __allkwargs0__ [__attrib0__]; break;
/* 001063 */ 				}
/* 001063 */ 			}
/* 001063 */ 		}
/* 001063 */ 	}
/* 001063 */ 	else {
/* 001063 */ 	}
/* 001067 */ 	if (__t__ (latex_context === null)) {
/* 001068 */ 		var latex_context = (function () {
/* 001068 */ 			var __accu0__ = macrospec;
/* 001068 */ 			return __call__ (__accu0__.LatexContextDb, __accu0__);
/* 001068 */ 		}) ();
/* 001068 */ 	}
/* 001070 */ 	if (__t__ (parsing_state === null)) {
/* 001071 */ 		var parsing_state_options_2 = dict ({});
/* 001072 */ 		if (__t__ (parsing_state_options !== null)) {
/* 001073 */ 			var parsing_state_options_2 = parsing_state_options;
/* 001073 */ 		}
/* 001075 */ 		var parsing_state = __call__ (standard_parsing_state, null, __kwargtrans__ (parsing_state_options_2));
/* 001075 */ 	}
/* 001077 */ 	var parsing_state_event_handler = __call__ (FLMLatexWalkerMathContextParsingStateEventHandler, null);
/* 001079 */ 	var flm_environment_options_2 = dict ({});
/* 001080 */ 	if (__t__ (flm_environment_options !== null)) {
/* 001081 */ 		var flm_environment_options_2 = flm_environment_options;
/* 001081 */ 	}
/* 001083 */ 	var environment = __call__ (FLMEnvironment, null, features, parsing_state, latex_context, __kwargtrans__ (flm_environment_options_2));
/* 001090 */ 	environment.parsing_state_event_handler = parsing_state_event_handler;
/* 001092 */ 	environment.environment_get_located_error_message = standard_environment_get_located_error_message;
/* 001095 */ 	return environment;
/* 001095 */ };
/* 001109 */ export var _make_argvalue = function (argvalue, latex_walker, parsing_state) {
/* 001109 */ 	if (arguments.length) {
/* 001109 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001109 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001109 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001109 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001109 */ 				switch (__attrib0__) {
/* 001109 */ 					case 'argvalue': var argvalue = __allkwargs0__ [__attrib0__]; break;
/* 001109 */ 					case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 001109 */ 					case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 001109 */ 				}
/* 001109 */ 			}
/* 001109 */ 		}
/* 001109 */ 	}
/* 001109 */ 	else {
/* 001109 */ 	}
/* 001111 */ 	if (__t__ (argvalue === null)) {
/* 001112 */ 		return null;
/* 001112 */ 	}
/* 001114 */ 	if (__t__ (__call__ (isinstance, null, argvalue, str))) {
/* 001115 */ 		var argvalue = (function () {
/* 001115 */ 			var __accu0__ = latex_walker;
/* 001115 */ 			return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: argvalue, pos: null, pos_end: null, parsing_state: parsing_state}));
/* 001115 */ 		}) ();
/* 001115 */ 	}
/* 001123 */ 	if (__t__ (__call__ (isinstance, null, argvalue, latexnodes_nodes.LatexGroupNode))) {
/* 001124 */ 		return argvalue;
/* 001124 */ 	}
/* 001128 */ 	if (__t__ (__call__ (isinstance, null, argvalue, latexnodes_nodes.LatexNodeList))) {
/* 001129 */ 		var nodelist = argvalue;
/* 001129 */ 	}
/* 001131 */ 	else if (__t__ (__call__ (isinstance, null, argvalue, list))) {
/* 001132 */ 		var nodelist = (function () {
/* 001132 */ 			var __accu0__ = latex_walker;
/* 001132 */ 			return __call__ (__accu0__.make_nodelist, __accu0__, argvalue, __kwargtrans__ ({parsing_state: parsing_state}));
/* 001132 */ 		}) ();
/* 001132 */ 	}
/* 001135 */ 	else {
/* 001138 */ 		var nodelist = (function () {
/* 001138 */ 			var __accu0__ = latex_walker;
/* 001138 */ 			return __call__ (__accu0__.make_nodelist, __accu0__, [argvalue], __kwargtrans__ ({parsing_state: parsing_state}));
/* 001138 */ 		}) ();
/* 001138 */ 	}
/* 001143 */ 	var groupnode = (function () {
/* 001143 */ 		var __accu0__ = latex_walker;
/* 001143 */ 		return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexGroupNode, __kwargtrans__ ({delimiters: tuple (['', '']), nodelist: nodelist, pos: nodelist.pos, pos_end: nodelist.pos_end, parsing_state: parsing_state}));
/* 001143 */ 	}) ();
/* 001152 */ 	return groupnode;
/* 001152 */ };
/* 001155 */ export var make_invocable_arguments = function (flm_spec, args) {
/* 001155 */ 	if (arguments.length) {
/* 001155 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001155 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001155 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001155 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001155 */ 				switch (__attrib0__) {
/* 001155 */ 					case 'flm_spec': var flm_spec = __allkwargs0__ [__attrib0__]; break;
/* 001155 */ 					case 'args': var args = __allkwargs0__ [__attrib0__]; break;
/* 001155 */ 					case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 001155 */ 					case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 001155 */ 				}
/* 001155 */ 			}
/* 001155 */ 		}
/* 001155 */ 	}
/* 001155 */ 	else {
/* 001155 */ 	}
/* 001157 */ 	var argnlist = (function () {
/* 001157 */ 		var __accu0__ = [];
/* 001157 */ 		var __iterable0__ = flm_spec.arguments_spec_list;
/* 001157 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001157 */ 			var _ = __getitem__ (__iterable0__, __index0__);
/* 001157 */ 			(function () {
/* 001157 */ 				var __accu1__ = __accu0__;
/* 001157 */ 				return __call__ (__accu1__.append, __accu1__, null);
/* 001157 */ 			}) ();
/* 001157 */ 		}
/* 001157 */ 		return __accu0__;
/* 001157 */ 	}) ();
/* 001159 */ 	if (__t__ (args === null)) {
/* 001160 */ 		return argnlist;
/* 001160 */ 	}
/* 001162 */ 	var __iterable0__ = (function () {
/* 001162 */ 		var __accu0__ = args;
/* 001162 */ 		return __call__ (__accu0__.py_items, __accu0__);
/* 001162 */ 	}) ();
/* 001162 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001162 */ 		var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 001162 */ 		var argname = __left0__ [0];
/* 001162 */ 		var argvalue = __left0__ [1];
/* 001164 */ 		var argj = null;
/* 001165 */ 		var __iterable1__ = __call__ (enumerate, null, flm_spec.arguments_spec_list);
/* 001165 */ 		for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 001165 */ 			var __left0__ = __getitem__ (__iterable1__, __index1__);
/* 001165 */ 			var candidateargj = __left0__ [0];
/* 001165 */ 			var candidateargspec = __left0__ [1];
/* 001166 */ 			if (__t__ (__eq__ (candidateargspec.argname, argname))) {
/* 001167 */ 				var argj = candidateargj;
/* 001167 */ 				break;
/* 001167 */ 			}
/* 001167 */ 		}
/* 001169 */ 		if (__t__ (argj === null)) {
/* 001170 */ 			(function () {
/* 001170 */ 				var __accu0__ = logger;
/* 001170 */ 				return __call__ (__accu0__.error, __accu0__, 'Cannot find argument %r in spec %r', argname, flm_spec.arguments_spec_list);
/* 001170 */ 			}) ();
/* 001172 */ 			var __except0__ = __call__ (ValueError, null, 'No argument named ‘{}’ in spec'.format (argname));
/* 001172 */ 			__except0__.__cause__ = null;
/* 001172 */ 			throw __except0__;
/* 001172 */ 		}
/* 001175 */ 		__setitem__ (argnlist, argj, __call__ (_make_argvalue, null, argvalue, latex_walker, parsing_state));
/* 001175 */ 	}
/* 001177 */ 	return argnlist;
/* 001177 */ };
/* 001180 */ export var make_invocable_node_instance = function (node_type, flm_spec) {
/* 001180 */ 	var args = null;
/* 001180 */ 	var body_nodelist = null;
/* 001180 */ 	var node_kwargs = null;
/* 001180 */ 	if (arguments.length) {
/* 001180 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001180 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001180 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001180 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001180 */ 				switch (__attrib0__) {
/* 001180 */ 					case 'node_type': var node_type = __allkwargs0__ [__attrib0__]; break;
/* 001180 */ 					case 'flm_spec': var flm_spec = __allkwargs0__ [__attrib0__]; break;
/* 001180 */ 					case 'args': var args = __allkwargs0__ [__attrib0__]; break;
/* 001180 */ 					case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 001180 */ 					case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 001180 */ 					case 'body_nodelist': var body_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 001180 */ 					case 'node_kwargs': var node_kwargs = __allkwargs0__ [__attrib0__]; break;
/* 001180 */ 				}
/* 001180 */ 			}
/* 001180 */ 		}
/* 001180 */ 	}
/* 001180 */ 	else {
/* 001180 */ 	}
/* 001187 */ 	var nkwargs = dict ({'pos': null, 'pos_end': null});
/* 001192 */ 	if (__t__ (node_type === latexnodes_nodes.LatexMacroNode)) {
/* 001193 */ 		__setitem__ (nkwargs, 'macroname', flm_spec.macroname);
/* 001194 */ 		if (__t__ (body_nodelist !== null)) {
/* 001195 */ 			var __except0__ = __call__ (ValueError, null, 'For a LatexMacroNode you must have body_nodelist=None');
/* 001195 */ 			__except0__.__cause__ = null;
/* 001195 */ 			throw __except0__;
/* 001195 */ 		}
/* 001195 */ 	}
/* 001197 */ 	else if (__t__ (node_type === latexnodes_nodes.LatexEnvironmentNode)) {
/* 001198 */ 		__setitem__ (nkwargs, 'environmentname', flm_spec.environmentname);
/* 001198 */ 	}
/* 001200 */ 	else if (__t__ (node_type === latexnodes_nodes.LatexSpecialsNode)) {
/* 001201 */ 		__setitem__ (nkwargs, 'specials_chars', flm_spec.specials_chars);
/* 001202 */ 		if (__t__ (body_nodelist !== null)) {
/* 001203 */ 			var __except0__ = __call__ (ValueError, null, 'For a LatexSpecialsNode you must have body_nodelist=None');
/* 001203 */ 			__except0__.__cause__ = null;
/* 001203 */ 			throw __except0__;
/* 001203 */ 		}
/* 001203 */ 	}
/* 001205 */ 	var argnlist = __call__ (make_invocable_arguments, null, flm_spec, args, __kwargtrans__ ({latex_walker: latex_walker, parsing_state: parsing_state}));
/* 001209 */ 	var nodeargd = (function () {
/* 001209 */ 		var __accu0__ = latexnodes_nodes;
/* 001209 */ 		return __call__ (__accu0__.ParsedArguments, __accu0__, __kwargtrans__ ({argnlist: argnlist, arguments_spec_list: flm_spec.arguments_spec_list}));
/* 001209 */ 	}) ();
/* 001214 */ 	if (__t__ (body_nodelist !== null)) {
/* 001215 */ 		__setitem__ (nkwargs, 'nodelist', body_nodelist);
/* 001215 */ 	}
/* 001217 */ 	if (__t__ (node_kwargs !== null)) {
/* 001218 */ 		(function () {
/* 001218 */ 			var __accu0__ = nkwargs;
/* 001218 */ 			return __call__ (__accu0__.py_update, __accu0__, node_kwargs);
/* 001218 */ 		}) ();
/* 001218 */ 	}
/* 001220 */ 	var node = (function () {
/* 001220 */ 		var __accu0__ = latex_walker;
/* 001220 */ 		return __call__ (__accu0__.make_node, __accu0__, node_type, __kwargtrans__ (__mergekwargtrans__ ({spec: flm_spec, nodeargd: nodeargd, parsing_state: parsing_state}, nkwargs)));
/* 001220 */ 	}) ();
/* 001228 */ 	var node = (function () {
/* 001228 */ 		var __accu0__ = flm_spec;
/* 001228 */ 		return __call__ (__accu0__.finalize_node, __accu0__, node);
/* 001228 */ 	}) ();
/* 001230 */ 	return node;
/* 001230 */ };
/* 000006 */ 
//# sourceMappingURL=flm.flmenvironment.map