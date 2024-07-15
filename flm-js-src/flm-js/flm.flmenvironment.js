/* 000001 */ // Transcrypt'ed from Python, 2024-07-16 00:01:36
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
/* 000006 */ export {FLMDocument, latexnodes, latexnodes_nodes, macrospec, FLMFragment, LatexWalkerLocatedErrorFormatter, LatexWalkerParseError, latexwalker};
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
/* 000102 */ export var _clone_flm_node = function (node) {
/* 000102 */ 	if (arguments.length) {
/* 000102 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000102 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000102 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000102 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000102 */ 				switch (__attrib0__) {
/* 000102 */ 					case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000102 */ 				}
/* 000102 */ 			}
/* 000102 */ 		}
/* 000102 */ 	}
/* 000102 */ 	else {
/* 000102 */ 	}
/* 000103 */ 	var Cls = (function () {
/* 000103 */ 		var __accu0__ = node;
/* 000103 */ 		return __call__ (__accu0__.nodeType, __accu0__);
/* 000103 */ 	}) ();
/* 000108 */ 	var new_node = __call__ (Cls, null, __kwargtrans__ (__call__ (dict, null, (function () {
/* 000108 */ 		var __accu0__ = [];
/* 000108 */ 		var __iterable0__ = node._fields;
/* 000108 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000108 */ 			var k = __getitem__ (__iterable0__, __index0__);
/* 000108 */ 			(function () {
/* 000108 */ 				var __accu1__ = __accu0__;
/* 000108 */ 				return __call__ (__accu1__.append, __accu1__, tuple ([k, __call__ (getattr, null, node, k)]));
/* 000108 */ 			}) ();
/* 000108 */ 		}
/* 000108 */ 		return __accu0__;
/* 000108 */ 	}) ())));
/* 000111 */ 	var __iterable0__ = __call__ (dir, null, node);
/* 000111 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000111 */ 		var attr = __getitem__ (__iterable0__, __index0__);
/* 000112 */ 		if (__t__ (__t__ ((function () {
/* 000112 */ 			var __accu0__ = attr;
/* 000112 */ 			return __call__ (__accu0__.startswith, __accu0__, 'flm');
/* 000112 */ 		}) ()) || (function () {
/* 000112 */ 			var __accu0__ = attr;
/* 000112 */ 			return __call__ (__accu0__.startswith, __accu0__, '_flm');
/* 000112 */ 		}) ())) {
/* 000113 */ 			__call__ (setattr, null, new_node, attr, __call__ (getattr, null, node, attr));
/* 000113 */ 		}
/* 000113 */ 	}
/* 000115 */ 	return new_node;
/* 000115 */ };
/* 000122 */ export var BlocksBuilder =  __class__ ('BlocksBuilder', [object], {
/* 000122 */ 	__module__: __name__,
/* 000124 */ 	rx_space: (function () {
/* 000124 */ 		var __accu0__ = re;
/* 000124 */ 		return __call__ (__accu0__.compile, __accu0__, '[ \\t\\n\\r]+');
/* 000124 */ 	}) (),
/* 000125 */ 	rx_only_space: (function () {
/* 000125 */ 		var __accu0__ = re;
/* 000125 */ 		return __call__ (__accu0__.compile, __accu0__, '^[ \\t\\n\\r]+$');
/* 000125 */ 	}) (),
/* 000127 */ 	get __init__ () {return __get__ (this, function (self, latexnodelist) {
/* 000127 */ 		if (arguments.length) {
/* 000127 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000127 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000127 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000127 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000127 */ 					switch (__attrib0__) {
/* 000127 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000127 */ 						case 'latexnodelist': var latexnodelist = __allkwargs0__ [__attrib0__]; break;
/* 000127 */ 					}
/* 000127 */ 				}
/* 000127 */ 			}
/* 000127 */ 		}
/* 000127 */ 		else {
/* 000127 */ 		}
/* 000128 */ 		__call__ (__call__ (__super__, null, BlocksBuilder, '__init__'), null, self);
/* 000129 */ 		self.latexnodelist = latexnodelist;
/* 000130 */ 		self.pending_paragraph_nodes = [];
/* 000131 */ 		self.blocks = [];
/* 000131 */ 	});},
/* 000133 */ 	get flush_paragraph () {return __get__ (this, function (self) {
/* 000133 */ 		if (arguments.length) {
/* 000133 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000133 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000133 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000133 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000133 */ 					switch (__attrib0__) {
/* 000133 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000133 */ 					}
/* 000133 */ 				}
/* 000133 */ 			}
/* 000133 */ 		}
/* 000133 */ 		else {
/* 000133 */ 		}
/* 000134 */ 		if (__t__ (!__t__ ((self.pending_paragraph_nodes)))) {
/* 000135 */ 			return ;
/* 000135 */ 		}
/* 000136 */ 		var paragraph_nodes = self.pending_paragraph_nodes;
/* 000137 */ 		var paragraph_nodes = (function () {
/* 000137 */ 			var __accu0__ = self;
/* 000137 */ 			return __call__ (__accu0__.finalize_paragraph, __accu0__, paragraph_nodes);
/* 000137 */ 		}) ();
/* 000138 */ 		// pass;
/* 000141 */ 		var nlblock = (function () {
/* 000141 */ 			var __accu0__ = latexnodes_nodes;
/* 000141 */ 			return __call__ (__accu0__.LatexNodeList, __accu0__, paragraph_nodes, __kwargtrans__ ({parsing_state: self.latexnodelist.parsing_state, latex_walker: self.latexnodelist.latex_walker}));
/* 000141 */ 		}) ();
/* 000148 */ 		nlblock.flm_nodelist_finalized = true;
/* 000149 */ 		(function () {
/* 000149 */ 			var __accu0__ = self.blocks;
/* 000149 */ 			return __call__ (__accu0__.append, __accu0__, nlblock);
/* 000149 */ 		}) ();
/* 000150 */ 		self.pending_paragraph_nodes = [];
/* 000150 */ 	});},
/* 000152 */ 	get simplify_whitespace_chars () {return __get__ (this, function (self, chars, is_head, is_tail) {
/* 000152 */ 		if (typeof is_head == 'undefined' || (is_head != null && is_head.hasOwnProperty ("__kwargtrans__"))) {;
/* 000152 */ 			var is_head = false;
/* 000152 */ 		};
/* 000152 */ 		if (typeof is_tail == 'undefined' || (is_tail != null && is_tail.hasOwnProperty ("__kwargtrans__"))) {;
/* 000152 */ 			var is_tail = false;
/* 000152 */ 		};
/* 000152 */ 		if (arguments.length) {
/* 000152 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000152 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000152 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000152 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000152 */ 					switch (__attrib0__) {
/* 000152 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000152 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000152 */ 						case 'is_head': var is_head = __allkwargs0__ [__attrib0__]; break;
/* 000152 */ 						case 'is_tail': var is_tail = __allkwargs0__ [__attrib0__]; break;
/* 000152 */ 					}
/* 000152 */ 				}
/* 000152 */ 			}
/* 000152 */ 		}
/* 000152 */ 		else {
/* 000152 */ 		}
/* 000153 */ 		var newchars = (function () {
/* 000153 */ 			var __accu0__ = self.rx_space;
/* 000153 */ 			return __call__ (__accu0__.sub, __accu0__, ' ', chars);
/* 000153 */ 		}) ();
/* 000154 */ 		if (__t__ (is_head)) {
/* 000155 */ 			var newchars = (function () {
/* 000155 */ 				var __accu0__ = newchars;
/* 000155 */ 				return __call__ (__accu0__.lstrip, __accu0__);
/* 000155 */ 			}) ();
/* 000155 */ 		}
/* 000156 */ 		if (__t__ (is_tail)) {
/* 000157 */ 			var newchars = (function () {
/* 000157 */ 				var __accu0__ = newchars;
/* 000157 */ 				return __call__ (__accu0__.rstrip, __accu0__);
/* 000157 */ 			}) ();
/* 000157 */ 		}
/* 000158 */ 		return newchars;
/* 000158 */ 	});},
/* 000160 */ 	get finalize_paragraph () {return __get__ (this, function (self, paragraph_nodes) {
/* 000160 */ 		if (arguments.length) {
/* 000160 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000160 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000160 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000160 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000160 */ 					switch (__attrib0__) {
/* 000160 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000160 */ 						case 'paragraph_nodes': var paragraph_nodes = __allkwargs0__ [__attrib0__]; break;
/* 000160 */ 					}
/* 000160 */ 				}
/* 000160 */ 			}
/* 000160 */ 		}
/* 000160 */ 		else {
/* 000160 */ 		}
/* 000161 */ 		if (__t__ (!__t__ ((paragraph_nodes)))) {
/* 000162 */ 			return paragraph_nodes;
/* 000162 */ 		}
/* 000166 */ 		var is_head = true;
/* 000167 */ 		var tail_char_node_info = null;
/* 000168 */ 		var next_node_should_strip_leading_whitespace = false;
/* 000169 */ 		var first_node = null;
/* 000170 */ 		var char_nodes = [];
/* 000171 */ 		var __iterable0__ = __call__ (enumerate, null, paragraph_nodes);
/* 000171 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000171 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000171 */ 			var j = __left0__ [0];
/* 000171 */ 			var node = __left0__ [1];
/* 000178 */ 			if (__t__ (__t__ (__eq__ (__call__ (len, null, char_nodes), 0)) && __t__ (first_node !== null) && (__t__ (__call__ (hasattr, null, first_node, 'flm_is_block_heading')) && __call__ (getattr, null, first_node, 'flm_is_block_heading')))) {
/* 000182 */ 				var is_head = true;
/* 000182 */ 			}
/* 000186 */ 			if (__t__ (__t__ (__call__ (hasattr, null, node, 'flm_strip_preceding_whitespace')) && __call__ (getattr, null, node, 'flm_strip_preceding_whitespace'))) {
/* 000187 */ 				if (__t__ (tail_char_node_info !== null)) {
/* 000188 */ 					__setitem__ (tail_char_node_info, 'is_tail', true);
/* 000188 */ 				}
/* 000188 */ 			}
/* 000190 */ 			if (__t__ ((function () {
/* 000190 */ 				var __accu0__ = node;
/* 000190 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000190 */ 			}) ())) {
/* 000191 */ 				var info = dict ({'is_head': is_head, 'is_tail': false});
/* 000192 */ 				if (__t__ (next_node_should_strip_leading_whitespace)) {
/* 000193 */ 					__setitem__ (info, 'is_head', true);
/* 000193 */ 				}
/* 000194 */ 				(function () {
/* 000194 */ 					var __accu0__ = char_nodes;
/* 000194 */ 					return __call__ (__accu0__.append, __accu0__, tuple ([node, info, j]));
/* 000194 */ 				}) ();
/* 000195 */ 				var is_head = false;
/* 000196 */ 				var tail_char_node_info = info;
/* 000196 */ 			}
/* 000197 */ 			else if (__t__ (!__t__ (((function () {
/* 000197 */ 				var __accu0__ = node;
/* 000197 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCommentNode);
/* 000197 */ 			}) ())))) {
/* 000198 */ 				if (__t__ (first_node === null)) {
/* 000199 */ 					var first_node = node;
/* 000199 */ 				}
/* 000200 */ 				var is_head = false;
/* 000201 */ 				var tail_char_node_info = null;
/* 000201 */ 			}
/* 000203 */ 			var next_node_should_strip_leading_whitespace = false;
/* 000206 */ 			if (__t__ (__t__ (__call__ (hasattr, null, node, 'flm_strip_following_whitespace')) && __call__ (getattr, null, node, 'flm_strip_following_whitespace'))) {
/* 000207 */ 				var next_node_should_strip_leading_whitespace = true;
/* 000207 */ 			}
/* 000207 */ 		}
/* 000210 */ 		if (__t__ (tail_char_node_info !== null)) {
/* 000211 */ 			__setitem__ (tail_char_node_info, 'is_tail', true);
/* 000211 */ 		}
/* 000213 */ 		var __iterable0__ = char_nodes;
/* 000213 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000213 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000213 */ 			var char_node = __left0__ [0];
/* 000213 */ 			var info = __left0__ [1];
/* 000213 */ 			var char_node_j = __left0__ [2];
/* 000220 */ 			var new_flm_chars_value = (function () {
/* 000220 */ 				var __accu0__ = self;
/* 000220 */ 				return __call__ (__accu0__.simplify_whitespace_chars, __accu0__, char_node.chars, __kwargtrans__ ({is_head: __getitem__ (info, 'is_head'), is_tail: __getitem__ (info, 'is_tail')}));
/* 000220 */ 			}) ();
/* 000225 */ 			if (__t__ (__ne__ (__call__ (getattr, null, char_node, 'flm_chars_value', null), new_flm_chars_value))) {
/* 000228 */ 				var new_char_node = __call__ (_clone_flm_node, null, char_node);
/* 000231 */ 				new_char_node.flm_chars_value = new_flm_chars_value;
/* 000232 */ 				__setitem__ (paragraph_nodes, char_node_j, new_char_node);
/* 000232 */ 			}
/* 000232 */ 		}
/* 000243 */ 		return paragraph_nodes;
/* 000243 */ 	});},
/* 000245 */ 	get build_blocks () {return __get__ (this, function (self) {
/* 000245 */ 		if (arguments.length) {
/* 000245 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000245 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000245 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000245 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000245 */ 					switch (__attrib0__) {
/* 000245 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000245 */ 					}
/* 000245 */ 				}
/* 000245 */ 			}
/* 000245 */ 		}
/* 000245 */ 		else {
/* 000245 */ 		}
/* 000246 */ 		var latexnodelist = self.latexnodelist;
/* 000250 */ 		assert (__eq__ (__call__ (len, null, self.blocks), 0));
/* 000252 */ 		var __iterable0__ = latexnodelist;
/* 000252 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000252 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000255 */ 			var n_is_block_level = (__t__ (__call__ (hasattr, null, n, 'flm_is_block_level')) ? __call__ (getattr, null, n, 'flm_is_block_level') : null);
/* 000260 */ 			var n_is_block_heading = (__t__ (__call__ (hasattr, null, n, 'flm_is_block_heading')) ? __call__ (getattr, null, n, 'flm_is_block_heading') : false);
/* 000264 */ 			if (__t__ (n_is_block_level)) {
/* 000266 */ 				(function () {
/* 000266 */ 					var __accu0__ = self;
/* 000266 */ 					return __call__ (__accu0__.flush_paragraph, __accu0__);
/* 000266 */ 				}) ();
/* 000270 */ 				if (__t__ (__t__ (__call__ (hasattr, null, n, 'flm_is_paragraph_break_marker')) && __call__ (getattr, null, n, 'flm_is_paragraph_break_marker'))) {
/* 000270 */ 					continue;
/* 000270 */ 				}
/* 000275 */ 				if (__t__ (n_is_block_heading)) {
/* 000279 */ 					(function () {
/* 000279 */ 						var __accu0__ = self.pending_paragraph_nodes;
/* 000279 */ 						return __call__ (__accu0__.append, __accu0__, n);
/* 000279 */ 					}) ();
/* 000279 */ 					continue;
/* 000279 */ 				}
/* 000284 */ 				(function () {
/* 000284 */ 					var __accu0__ = self.blocks;
/* 000284 */ 					return __call__ (__accu0__.append, __accu0__, n);
/* 000284 */ 				}) ();
/* 000284 */ 				continue;
/* 000284 */ 			}
/* 000287 */ 			var paragraph_started_yet = true;
/* 000288 */ 			if (__t__ (!__t__ ((self.pending_paragraph_nodes)))) {
/* 000289 */ 				var paragraph_started_yet = false;
/* 000289 */ 			}
/* 000290 */ 			if (__t__ (__eq__ (__call__ (len, null, self.pending_paragraph_nodes), 1))) {
/* 000293 */ 				if (__t__ (__t__ (__call__ (hasattr, null, __getitem__ (self.pending_paragraph_nodes, 0), 'flm_is_block_heading')) && __call__ (getattr, null, __getitem__ (self.pending_paragraph_nodes, 0), 'flm_is_block_heading'))) {
/* 000295 */ 					var paragraph_started_yet = false;
/* 000295 */ 				}
/* 000295 */ 			}
/* 000298 */ 			if (__t__ (__t__ (!__t__ ((paragraph_started_yet))) && __t__ ((function () {
/* 000298 */ 				var __accu0__ = n;
/* 000298 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000299 */ 			}) ()) && (function () {
/* 000299 */ 				var __accu0__ = self.rx_only_space;
/* 000299 */ 				return __call__ (__accu0__.match, __accu0__, n.chars);
/* 000299 */ 			}) ())) {
/* 000299 */ 				continue;
/* 000299 */ 			}
/* 000305 */ 			(function () {
/* 000305 */ 				var __accu0__ = self.pending_paragraph_nodes;
/* 000305 */ 				return __call__ (__accu0__.append, __accu0__, n);
/* 000305 */ 			}) ();
/* 000305 */ 		}
/* 000308 */ 		(function () {
/* 000308 */ 			var __accu0__ = self;
/* 000308 */ 			return __call__ (__accu0__.flush_paragraph, __accu0__);
/* 000308 */ 		}) ();
/* 000310 */ 		return self.blocks;
/* 000310 */ 	});}
/* 000310 */ });
/* 000318 */ export var NodesFinalizer =  __class__ ('NodesFinalizer', [object], {
/* 000318 */ 	__module__: __name__,
/* 000329 */ 	get finalize_nodelist () {return __get__ (this, function (self, latexnodelist) {
/* 000329 */ 		if (arguments.length) {
/* 000329 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000329 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000329 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000329 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000329 */ 					switch (__attrib0__) {
/* 000329 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000329 */ 						case 'latexnodelist': var latexnodelist = __allkwargs0__ [__attrib0__]; break;
/* 000329 */ 					}
/* 000329 */ 				}
/* 000329 */ 			}
/* 000329 */ 		}
/* 000329 */ 		else {
/* 000329 */ 		}
/* 000345 */ 		if (__t__ (__t__ (__call__ (hasattr, null, latexnodelist, 'flm_nodelist_finalized')) && __call__ (getattr, null, latexnodelist, 'flm_nodelist_finalized'))) {
/* 000346 */ 			return latexnodelist;
/* 000346 */ 		}
/* 000348 */ 		latexnodelist.flm_nodelist_finalized = true;
/* 000350 */ 		var is_block_level = latexnodelist.parsing_state.is_block_level;
/* 000351 */ 		if (__t__ (is_block_level === null)) {
/* 000353 */ 			var is_block_level = (function () {
/* 000353 */ 				var __accu0__ = self;
/* 000353 */ 				return __call__ (__accu0__.infer_is_block_level_nodelist, __accu0__, latexnodelist);
/* 000353 */ 			}) ();
/* 000353 */ 		}
/* 000355 */ 		latexnodelist.flm_is_block_level = is_block_level;
/* 000359 */ 		if (__t__ (!__t__ ((is_block_level)))) {
/* 000361 */ 			var __iterable0__ = latexnodelist;
/* 000361 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000361 */ 				var n = __getitem__ (__iterable0__, __index0__);
/* 000363 */ 				if (__t__ (__t__ (__call__ (hasattr, null, n, 'flm_is_block_level')) && __call__ (getattr, null, n, 'flm_is_block_level'))) {
/* 000367 */ 					var __except0__ = __call__ (LatexWalkerParseError, null, __kwargtrans__ ({msg: 'Content is not allowed in inline text (not block level): ‘{}’'.format ((function () {
/* 000367 */ 						var __accu0__ = n;
/* 000367 */ 						return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000367 */ 					}) ()), pos: n.pos}));
/* 000367 */ 					__except0__.__cause__ = null;
/* 000367 */ 					throw __except0__;
/* 000367 */ 				}
/* 000367 */ 			}
/* 000367 */ 		}
/* 000374 */ 		if (__t__ (is_block_level)) {
/* 000375 */ 			var blocks_builder = (function () {
/* 000375 */ 				var __accu0__ = self;
/* 000375 */ 				return __call__ (__accu0__.make_blocks_builder, __accu0__, latexnodelist);
/* 000375 */ 			}) ();
/* 000376 */ 			var flm_blocks = (function () {
/* 000376 */ 				var __accu0__ = blocks_builder;
/* 000376 */ 				return __call__ (__accu0__.build_blocks, __accu0__);
/* 000376 */ 			}) ();
/* 000377 */ 			latexnodelist.flm_blocks = flm_blocks;
/* 000377 */ 		}
/* 000379 */ 		return latexnodelist;
/* 000379 */ 	});},
/* 000382 */ 	get finalize_node () {return __get__ (this, function (self, node) {
/* 000382 */ 		if (arguments.length) {
/* 000382 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000382 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000382 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000382 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000382 */ 					switch (__attrib0__) {
/* 000382 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000382 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000382 */ 					}
/* 000382 */ 				}
/* 000382 */ 			}
/* 000382 */ 		}
/* 000382 */ 		else {
/* 000382 */ 		}
/* 000385 */ 		if (__t__ (__t__ (!__t__ ((__call__ (hasattr, null, node, 'flm_chars_value')))) && (function () {
/* 000385 */ 			var __accu0__ = node;
/* 000385 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000385 */ 		}) ())) {
/* 000393 */ 			node.flm_chars_value = (function () {
/* 000393 */ 				var __accu0__ = self;
/* 000393 */ 				return __call__ (__accu0__.simplify_whitespace_chars_inline, __accu0__, node.chars);
/* 000393 */ 			}) ();
/* 000393 */ 		}
/* 000396 */ 		return node;
/* 000396 */ 	});},
/* 000399 */ 	get infer_is_block_level_nodelist () {return __get__ (this, function (self, latexnodelist) {
/* 000399 */ 		if (arguments.length) {
/* 000399 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000399 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000399 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000399 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000399 */ 					switch (__attrib0__) {
/* 000399 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000399 */ 						case 'latexnodelist': var latexnodelist = __allkwargs0__ [__attrib0__]; break;
/* 000399 */ 					}
/* 000399 */ 				}
/* 000399 */ 			}
/* 000399 */ 		}
/* 000399 */ 		else {
/* 000399 */ 		}
/* 000400 */ 		var __iterable0__ = latexnodelist;
/* 000400 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000400 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000403 */ 			var n_is_block_level = (__t__ (__call__ (hasattr, null, n, 'flm_is_block_level')) ? __call__ (getattr, null, n, 'flm_is_block_level') : null);
/* 000407 */ 			if (__t__ (n_is_block_level)) {
/* 000408 */ 				return true;
/* 000408 */ 			}
/* 000408 */ 		}
/* 000409 */ 		return false;
/* 000409 */ 	});},
/* 000411 */ 	get simplify_whitespace_chars_inline () {return __get__ (this, function (self, chars) {
/* 000411 */ 		if (arguments.length) {
/* 000411 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000411 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000411 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000411 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000411 */ 					switch (__attrib0__) {
/* 000411 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000411 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000411 */ 					}
/* 000411 */ 				}
/* 000411 */ 			}
/* 000411 */ 		}
/* 000411 */ 		else {
/* 000411 */ 		}
/* 000412 */ 		return (function () {
/* 000412 */ 			var __accu0__ = self.rx_inline_space;
/* 000412 */ 			return __call__ (__accu0__.sub, __accu0__, ' ', chars);
/* 000412 */ 		}) ();
/* 000412 */ 	});},
/* 000414 */ 	make_blocks_builder: BlocksBuilder,
/* 000416 */ 	rx_inline_space: BlocksBuilder.rx_space
/* 000416 */ });
/* 000425 */ export var FLMLatexWalker =  __class__ ('FLMLatexWalker', [latexwalker.LatexWalker], {
/* 000425 */ 	__module__: __name__,
/* 000438 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000438 */ 		var parsing_state_event_handler = null;
/* 000438 */ 		var standalone_mode = false;
/* 000438 */ 		var resource_info = null;
/* 000438 */ 		var parsing_mode = null;
/* 000438 */ 		var what = null;
/* 000438 */ 		var input_lineno_colno_offsets = null;
/* 000438 */ 		var kwargs = dict ();
/* 000438 */ 		if (arguments.length) {
/* 000438 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000438 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000438 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000438 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000438 */ 					switch (__attrib0__) {
/* 000438 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000438 */ 						case 'flm_text': var flm_text = __allkwargs0__ [__attrib0__]; break;
/* 000438 */ 						case 'default_parsing_state': var default_parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000438 */ 						case 'flm_environment': var flm_environment = __allkwargs0__ [__attrib0__]; break;
/* 000438 */ 						case 'parsing_state_event_handler': var parsing_state_event_handler = __allkwargs0__ [__attrib0__]; break;
/* 000438 */ 						case 'standalone_mode': var standalone_mode = __allkwargs0__ [__attrib0__]; break;
/* 000438 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000438 */ 						case 'parsing_mode': var parsing_mode = __allkwargs0__ [__attrib0__]; break;
/* 000438 */ 						case 'what': var what = __allkwargs0__ [__attrib0__]; break;
/* 000438 */ 						case 'input_lineno_colno_offsets': var input_lineno_colno_offsets = __allkwargs0__ [__attrib0__]; break;
/* 000438 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000438 */ 					}
/* 000438 */ 				}
/* 000438 */ 				delete kwargs.__kwargtrans__;
/* 000438 */ 			}
/* 000438 */ 		}
/* 000438 */ 		else {
/* 000438 */ 		}
/* 000451 */ 		if (__t__ (!__t__ ((input_lineno_colno_offsets)))) {
/* 000452 */ 			var input_lineno_colno_offsets = dict ({});
/* 000452 */ 		}
/* 000457 */ 		__call__ (__call__ (__super__, null, FLMLatexWalker, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({s: flm_text, default_parsing_state: default_parsing_state, line_number_offset: (function () {
/* 000457 */ 			var __accu0__ = input_lineno_colno_offsets;
/* 000457 */ 			return __call__ (__accu0__.py_get, __accu0__, 'line_number_offset', null);
/* 000459 */ 		}) (), first_line_column_offset: (function () {
/* 000459 */ 			var __accu0__ = input_lineno_colno_offsets;
/* 000459 */ 			return __call__ (__accu0__.py_get, __accu0__, 'first_line_column_offset', null);
/* 000460 */ 		}) (), column_offset: (function () {
/* 000460 */ 			var __accu0__ = input_lineno_colno_offsets;
/* 000460 */ 			return __call__ (__accu0__.py_get, __accu0__, 'column_offset', null);
/* 000460 */ 		}) ()}, kwargs)));
/* 000464 */ 		self.flm_environment = flm_environment;
/* 000466 */ 		self.standalone_mode = standalone_mode;
/* 000470 */ 		self.resource_info = resource_info;
/* 000472 */ 		self.what = what;
/* 000475 */ 		self.parsing_mode = parsing_mode;
/* 000477 */ 		self._parsing_state_event_handler = parsing_state_event_handler;
/* 000479 */ 		self.input_lineno_colno_offsets = input_lineno_colno_offsets;
/* 000479 */ 	});},
/* 000481 */ 	get parsing_state_event_handler () {return __get__ (this, function (self) {
/* 000481 */ 		if (arguments.length) {
/* 000481 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000481 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000481 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000481 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000481 */ 					switch (__attrib0__) {
/* 000481 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000481 */ 					}
/* 000481 */ 				}
/* 000481 */ 			}
/* 000481 */ 		}
/* 000481 */ 		else {
/* 000481 */ 		}
/* 000482 */ 		if (__t__ (self._parsing_state_event_handler)) {
/* 000483 */ 			return self._parsing_state_event_handler;
/* 000483 */ 		}
/* 000484 */ 		return __call__ (__call__ (__super__, null, FLMLatexWalker, 'parsing_state_event_handler'), null, self);
/* 000484 */ 	});},
/* 000486 */ 	get make_nodelist () {return __get__ (this, function (self, nodelist, parsing_state) {
/* 000486 */ 		var kwargs = dict ();
/* 000486 */ 		if (arguments.length) {
/* 000486 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000486 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000486 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000486 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000486 */ 					switch (__attrib0__) {
/* 000486 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000486 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000486 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000486 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000486 */ 					}
/* 000486 */ 				}
/* 000486 */ 				delete kwargs.__kwargtrans__;
/* 000486 */ 			}
/* 000486 */ 		}
/* 000486 */ 		else {
/* 000486 */ 		}
/* 000487 */ 		var nl = __call__ (__call__ (__super__, null, FLMLatexWalker, 'make_nodelist'), null, self, __kwargtrans__ (__mergekwargtrans__ ({nodelist: nodelist, parsing_state: parsing_state}, kwargs)));
/* 000489 */ 		var nl2 = (function () {
/* 000489 */ 			var __accu0__ = self.flm_environment;
/* 000489 */ 			return __call__ (__accu0__.finalize_nodelist, __accu0__, nl);
/* 000489 */ 		}) ();
/* 000490 */ 		if (__t__ (nl2 === null)) {
/* 000491 */ 			var __except0__ = __call__ (ValueError, null, "Environment's finalize_nodelist() returned None");
/* 000491 */ 			__except0__.__cause__ = null;
/* 000491 */ 			throw __except0__;
/* 000491 */ 		}
/* 000492 */ 		return nl2;
/* 000492 */ 	});},
/* 000494 */ 	get make_node () {return __get__ (this, function (self, node_class) {
/* 000494 */ 		var kwargs = dict ();
/* 000494 */ 		if (arguments.length) {
/* 000494 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000494 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000494 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000494 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000494 */ 					switch (__attrib0__) {
/* 000494 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000494 */ 						case 'node_class': var node_class = __allkwargs0__ [__attrib0__]; break;
/* 000494 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000494 */ 					}
/* 000494 */ 				}
/* 000494 */ 				delete kwargs.__kwargtrans__;
/* 000494 */ 			}
/* 000494 */ 		}
/* 000494 */ 		else {
/* 000494 */ 		}
/* 000495 */ 		var node = __call__ (__call__ (__super__, null, FLMLatexWalker, 'make_node'), null, self, node_class, __kwargtrans__ (kwargs));
/* 000496 */ 		var node2 = (function () {
/* 000496 */ 			var __accu0__ = self.flm_environment;
/* 000496 */ 			return __call__ (__accu0__.finalize_node, __accu0__, node);
/* 000496 */ 		}) ();
/* 000497 */ 		if (__t__ (node2 === null)) {
/* 000498 */ 			var __except0__ = __call__ (ValueError, null, "Environment's finalize_node() returned None");
/* 000498 */ 			__except0__.__cause__ = null;
/* 000498 */ 			throw __except0__;
/* 000498 */ 		}
/* 000499 */ 		return node2;
/* 000499 */ 	});},
/* 000504 */ 	get filter_whitespace_comments_nodes () {return __get__ (this, function (self, nodelist) {
/* 000504 */ 		if (arguments.length) {
/* 000504 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000504 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000504 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000504 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000504 */ 					switch (__attrib0__) {
/* 000504 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000504 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000504 */ 					}
/* 000504 */ 				}
/* 000504 */ 			}
/* 000504 */ 		}
/* 000504 */ 		else {
/* 000504 */ 		}
/* 000509 */ 		return (function () {
/* 000509 */ 			var __accu0__ = nodelist;
/* 000509 */ 			return __call__ (__accu0__.filter, __accu0__, __kwargtrans__ ({node_predicate_fn: self._filter_whitespace_comments_nodes_predicate, skip_none: true, skip_comments: true, skip_whitespace_char_nodes: true}));
/* 000509 */ 		}) ();
/* 000509 */ 	});},
/* 000516 */ 	get _filter_whitespace_comments_nodes_predicate () {return __get__ (this, function (self, node) {
/* 000516 */ 		if (arguments.length) {
/* 000516 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000516 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000516 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000516 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000516 */ 					switch (__attrib0__) {
/* 000516 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000516 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000516 */ 					}
/* 000516 */ 				}
/* 000516 */ 			}
/* 000516 */ 		}
/* 000516 */ 		else {
/* 000516 */ 		}
/* 000519 */ 		if (__t__ (__t__ (__call__ (hasattr, null, node, 'flm_is_paragraph_break_marker')) && __call__ (getattr, null, node, 'flm_is_paragraph_break_marker'))) {
/* 000520 */ 			return false;
/* 000520 */ 		}
/* 000521 */ 		return true;
/* 000521 */ 	});}
/* 000521 */ });
/* 000529 */ export var features_ensure_dependencies_are_met = function (features) {
/* 000529 */ 	if (arguments.length) {
/* 000529 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000529 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000529 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000529 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000529 */ 				switch (__attrib0__) {
/* 000529 */ 					case 'features': var features = __allkwargs0__ [__attrib0__]; break;
/* 000529 */ 				}
/* 000529 */ 			}
/* 000529 */ 		}
/* 000529 */ 	}
/* 000529 */ 	else {
/* 000529 */ 	}
/* 000531 */ 	var feature_names = __call__ (set, null, (function () {
/* 000531 */ 		var __accu0__ = [];
/* 000531 */ 		var __iterable0__ = features;
/* 000531 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000531 */ 			var f = __getitem__ (__iterable0__, __index0__);
/* 000531 */ 			(function () {
/* 000531 */ 				var __accu1__ = __accu0__;
/* 000531 */ 				return __call__ (__accu1__.append, __accu1__, f.feature_name);
/* 000531 */ 			}) ();
/* 000531 */ 		}
/* 000531 */ 		return __accu0__;
/* 000531 */ 	}) ());
/* 000533 */ 	var __iterable0__ = features;
/* 000533 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000533 */ 		var feature = __getitem__ (__iterable0__, __index0__);
/* 000534 */ 		if (__t__ (feature.feature_dependencies === null)) {
/* 000534 */ 			continue;
/* 000534 */ 		}
/* 000536 */ 		var __iterable1__ = feature.feature_dependencies;
/* 000536 */ 		for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000536 */ 			var fdepname = __getitem__ (__iterable1__, __index1__);
/* 000537 */ 			if (__t__ (!__in__ (fdepname, feature_names))) {
/* 000539 */ 				var __except0__ = __call__ (ValueError, null, 'Feature ‘{}’ ({}) has unmet dependency ‘{}’'.format (feature.feature_name, __call__ (repr, null, feature), fdepname));
/* 000539 */ 				__except0__.__cause__ = null;
/* 000539 */ 				throw __except0__;
/* 000539 */ 			}
/* 000539 */ 		}
/* 000539 */ 	}
/* 000539 */ };
/* 000545 */ export var features_sorted_by_dependencies = function (features) {
/* 000545 */ 	if (arguments.length) {
/* 000545 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000545 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000545 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000545 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000545 */ 				switch (__attrib0__) {
/* 000545 */ 					case 'features': var features = __allkwargs0__ [__attrib0__]; break;
/* 000545 */ 				}
/* 000545 */ 			}
/* 000545 */ 		}
/* 000545 */ 	}
/* 000545 */ 	else {
/* 000545 */ 	}
/* 000562 */ 	var features_to_sort = __call__ (list, null, features);
/* 000566 */ 	var features_by_name = dict ({});
/* 000567 */ 	var __iterable0__ = features_to_sort;
/* 000567 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000567 */ 		var feature = __getitem__ (__iterable0__, __index0__);
/* 000568 */ 		if (__t__ (__in__ (feature.feature_name, features_by_name))) {
/* 000570 */ 			var __except0__ = __call__ (ValueError, null, 'Duplicate feature detected: feature {} has the same name (‘{}’) as the as already-included feature {}'.format (__call__ (repr, null, feature), feature.feature_name, __getitem__ (features_by_name, feature.feature_name)));
/* 000570 */ 			__except0__.__cause__ = null;
/* 000570 */ 			throw __except0__;
/* 000570 */ 		}
/* 000574 */ 		__setitem__ (features_by_name, feature.feature_name, feature);
/* 000574 */ 	}
/* 000579 */ 	(function () {
/* 000579 */ 		var __accu0__ = features_to_sort;
/* 000579 */ 		return __call__ (__accu0__.py_sort, __accu0__, __kwargtrans__ ({key: (function __lambda__ (f) {
/* 000579 */ 			if (arguments.length) {
/* 000579 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000579 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000579 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000579 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000579 */ 						switch (__attrib0__) {
/* 000579 */ 							case 'f': var f = __allkwargs0__ [__attrib0__]; break;
/* 000579 */ 						}
/* 000579 */ 					}
/* 000579 */ 				}
/* 000579 */ 			}
/* 000579 */ 			else {
/* 000579 */ 			}
/* 000579 */ 			return f.feature_name;
/* 000579 */ 		})}));
/* 000579 */ 	}) ();
/* 000582 */ 	__call__ (features_ensure_dependencies_are_met, null, features_to_sort);
/* 000584 */ 	var get_feature_dependencies = function (f) {
/* 000584 */ 		if (arguments.length) {
/* 000584 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000584 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000584 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000584 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000584 */ 					switch (__attrib0__) {
/* 000584 */ 						case 'f': var f = __allkwargs0__ [__attrib0__]; break;
/* 000584 */ 					}
/* 000584 */ 				}
/* 000584 */ 			}
/* 000584 */ 		}
/* 000584 */ 		else {
/* 000584 */ 		}
/* 000585 */ 		var deps = __call__ (set, null);
/* 000586 */ 		if (__t__ (f.feature_dependencies !== null)) {
/* 000587 */ 			var __iterable0__ = f.feature_dependencies;
/* 000587 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000587 */ 				var fdepname = __getitem__ (__iterable0__, __index0__);
/* 000588 */ 				(function () {
/* 000588 */ 					var __accu0__ = deps;
/* 000588 */ 					return __call__ (__accu0__.add, __accu0__, fdepname);
/* 000588 */ 				}) ();
/* 000588 */ 			}
/* 000588 */ 		}
/* 000589 */ 		if (__t__ (f.feature_optional_dependencies !== null)) {
/* 000590 */ 			var __iterable0__ = f.feature_optional_dependencies;
/* 000590 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000590 */ 				var foptdepname = __getitem__ (__iterable0__, __index0__);
/* 000591 */ 				if (__t__ (__in__ (foptdepname, features_by_name))) {
/* 000592 */ 					(function () {
/* 000592 */ 						var __accu0__ = deps;
/* 000592 */ 						return __call__ (__accu0__.add, __accu0__, foptdepname);
/* 000592 */ 					}) ();
/* 000592 */ 				}
/* 000592 */ 			}
/* 000592 */ 		}
/* 000593 */ 		return __call__ (sorted, null, __call__ (list, null, deps));
/* 000593 */ 	};
/* 000601 */ 	var all_feature_dependencies = __call__ (dict, null, (function () {
/* 000601 */ 		var __accu0__ = [];
/* 000603 */ 		var __iterable0__ = (function () {
/* 000603 */ 			var __accu1__ = features_by_name;
/* 000603 */ 			return __call__ (__accu1__.py_items, __accu1__);
/* 000603 */ 		}) ();
/* 000603 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000603 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000603 */ 			var fname = __left0__ [0];
/* 000603 */ 			var f = __left0__ [1];
/* 000603 */ 			(function () {
/* 000603 */ 				var __accu1__ = __accu0__;
/* 000602 */ 				return __call__ (__accu1__.append, __accu1__, tuple ([fname, __call__ (get_feature_dependencies, null, f)]));
/* 000602 */ 			}) ();
/* 000602 */ 		}
/* 000602 */ 		return __accu0__;
/* 000602 */ 	}) ());
/* 000606 */ 	var get_feature_dependents = function (fparentname, all_feature_dependencies) {
/* 000606 */ 		if (arguments.length) {
/* 000606 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000606 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000606 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000606 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000606 */ 					switch (__attrib0__) {
/* 000606 */ 						case 'fparentname': var fparentname = __allkwargs0__ [__attrib0__]; break;
/* 000606 */ 						case 'all_feature_dependencies': var all_feature_dependencies = __allkwargs0__ [__attrib0__]; break;
/* 000606 */ 					}
/* 000606 */ 				}
/* 000606 */ 			}
/* 000606 */ 		}
/* 000606 */ 		else {
/* 000606 */ 		}
/* 000607 */ 		var dependents = __call__ (set, null);
/* 000608 */ 		var __iterable0__ = (function () {
/* 000608 */ 			var __accu0__ = all_feature_dependencies;
/* 000608 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000608 */ 		}) ();
/* 000608 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000608 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000608 */ 			var fname = __left0__ [0];
/* 000608 */ 			var fdepnames = __left0__ [1];
/* 000609 */ 			var __iterable1__ = fdepnames;
/* 000609 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000609 */ 				var fdepname = __getitem__ (__iterable1__, __index1__);
/* 000610 */ 				if (__t__ (__eq__ (fdepname, fparentname))) {
/* 000611 */ 					(function () {
/* 000611 */ 						var __accu0__ = dependents;
/* 000611 */ 						return __call__ (__accu0__.add, __accu0__, fname);
/* 000611 */ 					}) ();
/* 000611 */ 				}
/* 000611 */ 			}
/* 000611 */ 		}
/* 000612 */ 		return __call__ (sorted, null, __call__ (list, null, dependents));
/* 000612 */ 	};
/* 000618 */ 	var sorted_features = [];
/* 000619 */ 	var root_features = (function () {
/* 000619 */ 		var __accu0__ = [];
/* 000622 */ 		var __iterable0__ = __call__ (py_reversed, null, features_to_sort);
/* 000622 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000622 */ 			var f = __getitem__ (__iterable0__, __index0__);
/* 000623 */ 			if (__t__ (__eq__ (__call__ (len, null, __getitem__ (all_feature_dependencies, f.feature_name)), 0))) {
/* 000623 */ 				(function () {
/* 000623 */ 					var __accu1__ = __accu0__;
/* 000623 */ 					return __call__ (__accu1__.append, __accu1__, f);
/* 000623 */ 				}) ();
/* 000623 */ 			}
/* 000623 */ 		}
/* 000623 */ 		return __accu0__;
/* 000623 */ 	}) ();
/* 000627 */ 	while (__t__ (__gt__ (__call__ (len, null, root_features), 0))) {
/* 000628 */ 		var n = (function () {
/* 000628 */ 			var __accu0__ = root_features;
/* 000628 */ 			return __call__ (__accu0__.py_pop, __accu0__);
/* 000628 */ 		}) ();
/* 000629 */ 		(function () {
/* 000629 */ 			var __accu0__ = sorted_features;
/* 000629 */ 			return __call__ (__accu0__.append, __accu0__, n);
/* 000629 */ 		}) ();
/* 000631 */ 		var n_name = n.feature_name;
/* 000633 */ 		var iter_dependents = __call__ (get_feature_dependents, null, n_name, all_feature_dependencies);
/* 000634 */ 		var __iterable0__ = iter_dependents;
/* 000634 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000634 */ 			var fdependentname = __getitem__ (__iterable0__, __index0__);
/* 000637 */ 			(function () {
/* 000637 */ 				var __accu0__ = __getitem__ (all_feature_dependencies, fdependentname);
/* 000637 */ 				return __call__ (__accu0__.remove, __accu0__, n_name);
/* 000637 */ 			}) ();
/* 000641 */ 			if (__t__ (__eq__ (__call__ (len, null, __getitem__ (all_feature_dependencies, fdependentname)), 0))) {
/* 000643 */ 				(function () {
/* 000643 */ 					var __accu0__ = root_features;
/* 000643 */ 					return __call__ (__accu0__.insert, __accu0__, 0, __getitem__ (features_by_name, fdependentname));
/* 000643 */ 				}) ();
/* 000643 */ 			}
/* 000643 */ 		}
/* 000643 */ 	}
/* 000646 */ 	var problematic_features = [];
/* 000647 */ 	var __iterable0__ = (function () {
/* 000647 */ 		var __accu0__ = all_feature_dependencies;
/* 000647 */ 		return __call__ (__accu0__.py_items, __accu0__);
/* 000647 */ 	}) ();
/* 000647 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000647 */ 		var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000647 */ 		var fsrcname = __left0__ [0];
/* 000647 */ 		var featuredeps = __left0__ [1];
/* 000648 */ 		if (__t__ (__gt__ (__call__ (len, null, featuredeps), 0))) {
/* 000649 */ 			(function () {
/* 000649 */ 				var __accu0__ = problematic_features;
/* 000650 */ 				return __call__ (__accu0__.append, __accu0__, __add__ ('‘{}’ → '.format (fsrcname), (function () {
/* 000650 */ 					var __accu1__ = ', ';
/* 000650 */ 					return __call__ (__accu1__.join, __accu1__, (function () {
/* 000650 */ 						var __accu2__ = [];
/* 000650 */ 						var __iterable1__ = featuredeps;
/* 000650 */ 						for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000650 */ 							var fdepname = __getitem__ (__iterable1__, __index1__);
/* 000650 */ 							(function () {
/* 000650 */ 								var __accu3__ = __accu2__;
/* 000650 */ 								return __call__ (__accu3__.append, __accu3__, '‘{}’'.format (fdepname));
/* 000650 */ 							}) ();
/* 000650 */ 						}
/* 000650 */ 						return __accu2__;
/* 000650 */ 					}) ());
/* 000650 */ 				}) ()));
/* 000650 */ 			}) ();
/* 000650 */ 		}
/* 000650 */ 	}
/* 000652 */ 	if (__t__ (__gt__ (__call__ (len, null, problematic_features), 0))) {
/* 000655 */ 		var __except0__ = __call__ (ValueError, null, __add__ ('The feature dependency graph has a cycle!  Problematic dependencies:'.format (), (function () {
/* 000655 */ 			var __accu0__ = '; ';
/* 000655 */ 			return __call__ (__accu0__.join, __accu0__, problematic_features);
/* 000655 */ 		}) ()));
/* 000655 */ 		__except0__.__cause__ = null;
/* 000655 */ 		throw __except0__;
/* 000655 */ 	}
/* 000658 */ 	if (__t__ (__ne__ (__call__ (len, null, sorted_features), __call__ (len, null, features_to_sort)))) {
/* 000659 */ 		var __except0__ = __call__ (RuntimeError, null, "Internal error, we didn't get all the features right when ordering them!");
/* 000659 */ 		__except0__.__cause__ = null;
/* 000659 */ 		throw __except0__;
/* 000659 */ 	}
/* 000663 */ 	return tuple ([sorted_features, features_by_name]);
/* 000663 */ };
/* 000692 */ export var FLMEnvironment =  __class__ ('FLMEnvironment', [object], {
/* 000692 */ 	__module__: __name__,
/* 000711 */ 	get __init__ () {return __get__ (this, function (self, features, parsing_state, latex_context) {
/* 000711 */ 		var tolerant_parsing = false;
/* 000711 */ 		var parsing_mode_deltas = null;
/* 000711 */ 		if (arguments.length) {
/* 000711 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000711 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000711 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000711 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000711 */ 					switch (__attrib0__) {
/* 000711 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000711 */ 						case 'features': var features = __allkwargs0__ [__attrib0__]; break;
/* 000711 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000711 */ 						case 'latex_context': var latex_context = __allkwargs0__ [__attrib0__]; break;
/* 000711 */ 						case 'tolerant_parsing': var tolerant_parsing = __allkwargs0__ [__attrib0__]; break;
/* 000711 */ 						case 'parsing_mode_deltas': var parsing_mode_deltas = __allkwargs0__ [__attrib0__]; break;
/* 000711 */ 					}
/* 000711 */ 				}
/* 000711 */ 			}
/* 000711 */ 		}
/* 000711 */ 		else {
/* 000711 */ 		}
/* 000720 */ 		__call__ (__call__ (__super__, null, FLMEnvironment, '__init__'), null, self);
/* 000722 */ 		// pass;
/* 000726 */ 		self.latex_context = latex_context;
/* 000727 */ 		self.parsing_state = parsing_state;
/* 000729 */ 		self.parsing_mode_deltas = (__t__ (parsing_mode_deltas) ? __call__ (dict, null, parsing_mode_deltas) : dict ({}));
/* 000731 */ 		var __left0__ = __call__ (features_sorted_by_dependencies, null, features);
/* 000731 */ 		self.features = __left0__ [0];
/* 000731 */ 		self.features_by_name = __left0__ [1];
/* 000733 */ 		// pass;
/* 000737 */ 		self.tolerant_parsing = tolerant_parsing;
/* 000739 */ 		self._nodes_finalizer = __call__ (NodesFinalizer, null);
/* 000741 */ 		if (__t__ (self.parsing_state.latex_context === null)) {
/* 000744 */ 			var __iterable0__ = self.features;
/* 000744 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000744 */ 				var f = __getitem__ (__iterable0__, __index0__);
/* 000745 */ 				var moredefs = (function () {
/* 000745 */ 					var __accu0__ = f;
/* 000745 */ 					return __call__ (__accu0__.add_latex_context_definitions, __accu0__);
/* 000745 */ 				}) ();
/* 000746 */ 				// pass;
/* 000751 */ 				if (__t__ (moredefs !== null)) {
/* 000752 */ 					var moredefs = __call__ (dict, null, moredefs);
/* 000753 */ 					if (__t__ (__call__ (len, null, moredefs))) {
/* 000754 */ 						// pass;
/* 000757 */ 						(function () {
/* 000757 */ 							var __accu0__ = moredefs;
/* 000757 */ 							return __call__ (__accu0__.py_update, __accu0__, __call__ (dict, null, __kwargtrans__ ({prepend: true})));
/* 000757 */ 						}) ();
/* 000758 */ 						(function () {
/* 000758 */ 							var __accu0__ = self.latex_context;
/* 000758 */ 							return __call__ (__accu0__.add_context_category, __accu0__, 'feature--{}'.format (f.feature_name), __kwargtrans__ (moredefs));
/* 000758 */ 						}) ();
/* 000758 */ 					}
/* 000758 */ 				}
/* 000758 */ 			}
/* 000764 */ 			(function () {
/* 000764 */ 				var __accu0__ = self.latex_context;
/* 000764 */ 				return __call__ (__accu0__.freeze, __accu0__);
/* 000764 */ 			}) ();
/* 000767 */ 			self.parsing_state.latex_context = self.latex_context;
/* 000767 */ 		}
/* 000769 */ 		else if (__t__ (self.latex_context !== null)) {
/* 000772 */ 			var __except0__ = __call__ (RuntimeError, null, 'The specified `parsing_state` instance already has a latex_context set');
/* 000772 */ 			__except0__.__cause__ = null;
/* 000772 */ 			throw __except0__;
/* 000772 */ 		}
/* 000772 */ 	});},
/* 000777 */ 	get feature () {return __get__ (this, function (self, feature_name) {
/* 000777 */ 		if (arguments.length) {
/* 000777 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000777 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000777 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000777 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000777 */ 					switch (__attrib0__) {
/* 000777 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000777 */ 						case 'feature_name': var feature_name = __allkwargs0__ [__attrib0__]; break;
/* 000777 */ 					}
/* 000777 */ 				}
/* 000777 */ 			}
/* 000777 */ 		}
/* 000777 */ 		else {
/* 000777 */ 		}
/* 000778 */ 		return __getitem__ (self.features_by_name, feature_name);
/* 000778 */ 	});},
/* 000781 */ 	parsing_state_event_handler: null,
/* 000788 */ 	get make_latex_walker () {return __get__ (this, function (self, flm_text) {
/* 000788 */ 		var parsing_mode = null;
/* 000788 */ 		var resource_info = null;
/* 000788 */ 		var tolerant_parsing = null;
/* 000788 */ 		var what = null;
/* 000788 */ 		var input_lineno_colno_offsets = null;
/* 000788 */ 		if (arguments.length) {
/* 000788 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000788 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000788 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000788 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000788 */ 					switch (__attrib0__) {
/* 000788 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000788 */ 						case 'flm_text': var flm_text = __allkwargs0__ [__attrib0__]; break;
/* 000788 */ 						case 'standalone_mode': var standalone_mode = __allkwargs0__ [__attrib0__]; break;
/* 000788 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000788 */ 						case 'parsing_mode': var parsing_mode = __allkwargs0__ [__attrib0__]; break;
/* 000788 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000788 */ 						case 'tolerant_parsing': var tolerant_parsing = __allkwargs0__ [__attrib0__]; break;
/* 000788 */ 						case 'what': var what = __allkwargs0__ [__attrib0__]; break;
/* 000788 */ 						case 'input_lineno_colno_offsets': var input_lineno_colno_offsets = __allkwargs0__ [__attrib0__]; break;
/* 000788 */ 					}
/* 000788 */ 				}
/* 000788 */ 			}
/* 000788 */ 		}
/* 000788 */ 		else {
/* 000788 */ 		}
/* 000801 */ 		var default_parsing_state = (function () {
/* 000801 */ 			var __accu0__ = self;
/* 000801 */ 			return __call__ (__accu0__.make_parsing_state, __accu0__, __kwargtrans__ ({is_block_level: is_block_level, parsing_mode: parsing_mode}));
/* 000801 */ 		}) ();
/* 000806 */ 		if (__t__ (tolerant_parsing === null)) {
/* 000807 */ 			var tolerant_parsing = self.tolerant_parsing;
/* 000807 */ 		}
/* 000809 */ 		var latex_walker = __call__ (FLMLatexWalker, null, __kwargtrans__ ({flm_text: flm_text, default_parsing_state: default_parsing_state, tolerant_parsing: tolerant_parsing, flm_environment: self, standalone_mode: standalone_mode, resource_info: resource_info, what: what, parsing_state_event_handler: self.parsing_state_event_handler, input_lineno_colno_offsets: input_lineno_colno_offsets}));
/* 000823 */ 		return latex_walker;
/* 000823 */ 	});},
/* 000825 */ 	get define_parsing_mode () {return __get__ (this, function (self, parsing_mode, parsing_mode_delta) {
/* 000825 */ 		if (arguments.length) {
/* 000825 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000825 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000825 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000825 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000825 */ 					switch (__attrib0__) {
/* 000825 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000825 */ 						case 'parsing_mode': var parsing_mode = __allkwargs0__ [__attrib0__]; break;
/* 000825 */ 						case 'parsing_mode_delta': var parsing_mode_delta = __allkwargs0__ [__attrib0__]; break;
/* 000825 */ 					}
/* 000825 */ 				}
/* 000825 */ 			}
/* 000825 */ 		}
/* 000825 */ 		else {
/* 000825 */ 		}
/* 000826 */ 		if (__t__ (__in__ (parsing_mode, self.parsing_mode_deltas))) {
/* 000827 */ 			var __except0__ = __call__ (ValueError, null, 'Parsing mode ‘{}’ already defined!'.format (parsing_mode));
/* 000827 */ 			__except0__.__cause__ = null;
/* 000827 */ 			throw __except0__;
/* 000827 */ 		}
/* 000828 */ 		__setitem__ (self.parsing_mode_deltas, parsing_mode, parsing_mode_delta);
/* 000828 */ 	});},
/* 000830 */ 	get make_parsing_state () {return __get__ (this, function (self, is_block_level, parsing_mode) {
/* 000830 */ 		if (typeof parsing_mode == 'undefined' || (parsing_mode != null && parsing_mode.hasOwnProperty ("__kwargtrans__"))) {;
/* 000830 */ 			var parsing_mode = null;
/* 000830 */ 		};
/* 000830 */ 		if (arguments.length) {
/* 000830 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000830 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000830 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000830 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000830 */ 					switch (__attrib0__) {
/* 000830 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000830 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000830 */ 						case 'parsing_mode': var parsing_mode = __allkwargs0__ [__attrib0__]; break;
/* 000830 */ 					}
/* 000830 */ 				}
/* 000830 */ 			}
/* 000830 */ 		}
/* 000830 */ 		else {
/* 000830 */ 		}
/* 000834 */ 		var default_parsing_state = self.parsing_state;
/* 000836 */ 		if (__t__ (parsing_mode !== null)) {
/* 000837 */ 			try {
/* 000838 */ 				var parsing_state_delta = __getitem__ (self.parsing_mode_deltas, parsing_mode);
/* 000838 */ 			}
/* 000838 */ 			catch (__except0__) {
/* 000838 */ 				if (isinstance (__except0__, KeyError)) {
/* 000838 */ 					var e = __except0__;
/* 000840 */ 					var __except1__ = __call__ (ValueError, null, 'Invalid parsing_mode ‘{}’'.format (parsing_mode));
/* 000840 */ 					__except1__.__cause__ = null;
/* 000840 */ 					throw __except1__;
/* 000840 */ 				}
/* 000840 */ 				else {
/* 000840 */ 					throw __except0__;
/* 000840 */ 				}
/* 000840 */ 			}
/* 000842 */ 			if (__t__ (parsing_state_delta !== null)) {
/* 000843 */ 				var default_parsing_state = (function () {
/* 000843 */ 					var __accu0__ = parsing_state_delta;
/* 000843 */ 					return __call__ (__accu0__.get_updated_parsing_state, __accu0__, default_parsing_state, __kwargtrans__ ({latex_walker: null}));
/* 000843 */ 				}) ();
/* 000843 */ 			}
/* 000843 */ 		}
/* 000848 */ 		var kwargs = dict ({});
/* 000849 */ 		if (__t__ (is_block_level !== null)) {
/* 000850 */ 			__setitem__ (kwargs, 'is_block_level', is_block_level);
/* 000850 */ 		}
/* 000852 */ 		return (function () {
/* 000852 */ 			var __accu0__ = default_parsing_state;
/* 000852 */ 			return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ (kwargs));
/* 000852 */ 		}) ();
/* 000852 */ 	});},
/* 000855 */ 	get make_fragment () {return __get__ (this, function (self, flm_text) {
/* 000855 */ 		var kwargs = dict ();
/* 000855 */ 		if (arguments.length) {
/* 000855 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000855 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000855 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000855 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000855 */ 					switch (__attrib0__) {
/* 000855 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000855 */ 						case 'flm_text': var flm_text = __allkwargs0__ [__attrib0__]; break;
/* 000855 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000855 */ 					}
/* 000855 */ 				}
/* 000855 */ 				delete kwargs.__kwargtrans__;
/* 000855 */ 			}
/* 000855 */ 		}
/* 000855 */ 		else {
/* 000855 */ 		}
/* 000857 */ 		if (__t__ (__call__ (isinstance, null, flm_text, FLMFragment))) {
/* 000858 */ 			var frag = flm_text;
/* 000859 */ 			var __iterable0__ = tuple (['is_block_level', 'standalone_mode']);
/* 000859 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000859 */ 				var fld = __getitem__ (__iterable0__, __index0__);
/* 000861 */ 				if (__t__ (__t__ (__in__ (fld, kwargs)) && __t__ (__getitem__ (kwargs, fld) !== null) && __ne__ (__getitem__ (kwargs, fld), __call__ (getattr, null, frag, fld)))) {
/* 000865 */ 					var __except0__ = __call__ (ValueError, null, 'make_fragment(): FLMFragment instance specified but its ‘{}’ ({}) differs with requested ‘{}’ ({})'.format (fld, __call__ (repr, null, __call__ (getattr, null, frag, fld)), fld, __getitem__ (kwargs, fld)));
/* 000865 */ 					__except0__.__cause__ = null;
/* 000865 */ 					throw __except0__;
/* 000865 */ 				}
/* 000865 */ 			}
/* 000868 */ 			return frag;
/* 000868 */ 		}
/* 000870 */ 		try {
/* 000871 */ 			var fragment = __call__ (FLMFragment, null, flm_text, __kwargtrans__ (__mergekwargtrans__ ({environment: self}, kwargs)));
/* 000872 */ 			return fragment;
/* 000872 */ 		}
/* 000872 */ 		catch (__except0__) {
/* 000874 */ 			if (__t__ (!__t__ (((function () {
/* 000874 */ 				var __accu0__ = kwargs;
/* 000874 */ 				return __call__ (__accu0__.py_get, __accu0__, 'silent', false);
/* 000874 */ 			}) ())))) {
/* 000875 */ 				(function () {
/* 000875 */ 					var __accu0__ = logger;
/* 000876 */ 					return __call__ (__accu0__.error, __accu0__, (function () {
/* 000876 */ 						var __accu1__ = 'Error compiling fragment for {}\nContent was:\n‘{}’\n';
/* 000877 */ 						return __call__ (__accu1__.format, __accu1__, (function () {
/* 000877 */ 							var __accu2__ = kwargs;
/* 000877 */ 							return __call__ (__accu2__.py_get, __accu2__, 'what', '(unknown)');
/* 000877 */ 						}) (), flm_text);
/* 000877 */ 					}) (), __kwargtrans__ ({exc_info: true}));
/* 000877 */ 				}) ();
/* 000877 */ 			}
/* 000880 */ 			__except0__.__cause__ = null;
/* 000880 */ 			throw __except0__;
/* 000880 */ 		}
/* 000880 */ 	});},
/* 000884 */ 	get make_document () {return __get__ (this, function (self, render_callback) {
/* 000884 */ 		var kwargs = dict ();
/* 000884 */ 		if (arguments.length) {
/* 000884 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000884 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000884 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000884 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000884 */ 					switch (__attrib0__) {
/* 000884 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000884 */ 						case 'render_callback': var render_callback = __allkwargs0__ [__attrib0__]; break;
/* 000884 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000884 */ 					}
/* 000884 */ 				}
/* 000884 */ 				delete kwargs.__kwargtrans__;
/* 000884 */ 			}
/* 000884 */ 		}
/* 000884 */ 		else {
/* 000884 */ 		}
/* 000893 */ 		var doc = __call__ (FLMDocument, null, render_callback, __kwargtrans__ (__mergekwargtrans__ ({environment: self}, kwargs)));
/* 000898 */ 		(function () {
/* 000898 */ 			var __accu0__ = doc;
/* 000898 */ 			return __call__ (__accu0__.initialize, __accu0__);
/* 000898 */ 		}) ();
/* 000899 */ 		return doc;
/* 000899 */ 	});},
/* 000902 */ 	get get_features_selection () {return __get__ (this, function (self, enable_features) {
/* 000902 */ 		if (arguments.length) {
/* 000902 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000902 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000902 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000902 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000902 */ 					switch (__attrib0__) {
/* 000902 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000902 */ 						case 'enable_features': var enable_features = __allkwargs0__ [__attrib0__]; break;
/* 000902 */ 					}
/* 000902 */ 				}
/* 000902 */ 			}
/* 000902 */ 		}
/* 000902 */ 		else {
/* 000902 */ 		}
/* 000904 */ 		if (__t__ (enable_features === null)) {
/* 000906 */ 			return self.features;
/* 000906 */ 		}
/* 000908 */ 		var features = (function () {
/* 000908 */ 			var __accu0__ = [];
/* 000908 */ 			var __iterable0__ = enable_features;
/* 000908 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000910 */ 				var feature_name = __getitem__ (__iterable0__, __index0__);
/* 000910 */ 				(function () {
/* 000910 */ 					var __accu1__ = __accu0__;
/* 000910 */ 					return __call__ (__accu1__.append, __accu1__, __getitem__ (self.features_by_name, feature_name));
/* 000910 */ 				}) ();
/* 000910 */ 			}
/* 000910 */ 			return __accu0__;
/* 000910 */ 		}) ();
/* 000914 */ 		__call__ (features_ensure_dependencies_are_met, null, features);
/* 000916 */ 		return features;
/* 000916 */ 	});},
/* 000921 */ 	environment_get_located_error_message: null,
/* 000923 */ 	get get_located_error_message () {return __get__ (this, function (self, exception_object) {
/* 000923 */ 		if (arguments.length) {
/* 000923 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000923 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000923 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000923 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000923 */ 					switch (__attrib0__) {
/* 000923 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000923 */ 						case 'exception_object': var exception_object = __allkwargs0__ [__attrib0__]; break;
/* 000923 */ 					}
/* 000923 */ 				}
/* 000923 */ 			}
/* 000923 */ 		}
/* 000923 */ 		else {
/* 000923 */ 		}
/* 000924 */ 		if (__t__ (self.environment_get_located_error_message !== null)) {
/* 000925 */ 			return (function () {
/* 000925 */ 				var __accu0__ = self;
/* 000925 */ 				return __call__ (__accu0__.environment_get_located_error_message, __accu0__, exception_object);
/* 000925 */ 			}) ();
/* 000925 */ 		}
/* 000926 */ 		return (function () {
/* 000926 */ 			var __accu0__ = __call__ (LatexWalkerLocatedErrorFormatter, null, exception_object);
/* 000926 */ 			return __call__ (__accu0__.to_display_string, __accu0__);
/* 000926 */ 		}) ();
/* 000926 */ 	});},
/* 000930 */ 	get finalize_nodelist () {return __get__ (this, function (self, nodelist) {
/* 000930 */ 		if (arguments.length) {
/* 000930 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000930 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000930 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000930 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000930 */ 					switch (__attrib0__) {
/* 000930 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000930 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000930 */ 					}
/* 000930 */ 				}
/* 000930 */ 			}
/* 000930 */ 		}
/* 000930 */ 		else {
/* 000930 */ 		}
/* 000931 */ 		var nl = (function () {
/* 000931 */ 			var __accu0__ = self._nodes_finalizer;
/* 000931 */ 			return __call__ (__accu0__.finalize_nodelist, __accu0__, nodelist);
/* 000931 */ 		}) ();
/* 000932 */ 		return nl;
/* 000932 */ 	});},
/* 000934 */ 	get finalize_node () {return __get__ (this, function (self, node) {
/* 000934 */ 		if (arguments.length) {
/* 000934 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000934 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000934 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000934 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000934 */ 					switch (__attrib0__) {
/* 000934 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000934 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000934 */ 					}
/* 000934 */ 				}
/* 000934 */ 			}
/* 000934 */ 		}
/* 000934 */ 		else {
/* 000934 */ 		}
/* 000937 */ 		var node = (function () {
/* 000937 */ 			var __accu0__ = self._nodes_finalizer;
/* 000937 */ 			return __call__ (__accu0__.finalize_node, __accu0__, node);
/* 000937 */ 		}) ();
/* 000943 */ 		node._flm_node_id = __call__ (fn_unique_object_id, null, node);
/* 000945 */ 		return node;
/* 000945 */ 	});}
/* 000945 */ });
/* 000953 */ export var standard_parsing_state = function () {
/* 000953 */ 	var force_block_level = null;
/* 000953 */ 	var enable_comments = true;
/* 000953 */ 	var comment_start = '%%';
/* 000953 */ 	var extra_forbidden_characters = '';
/* 000953 */ 	var dollar_inline_math_mode = false;
/* 000953 */ 	if (arguments.length) {
/* 000953 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000953 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000953 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000953 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000953 */ 				switch (__attrib0__) {
/* 000953 */ 					case 'force_block_level': var force_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000953 */ 					case 'enable_comments': var enable_comments = __allkwargs0__ [__attrib0__]; break;
/* 000953 */ 					case 'comment_start': var comment_start = __allkwargs0__ [__attrib0__]; break;
/* 000953 */ 					case 'extra_forbidden_characters': var extra_forbidden_characters = __allkwargs0__ [__attrib0__]; break;
/* 000953 */ 					case 'dollar_inline_math_mode': var dollar_inline_math_mode = __allkwargs0__ [__attrib0__]; break;
/* 000953 */ 				}
/* 000953 */ 			}
/* 000953 */ 		}
/* 000953 */ 	}
/* 000953 */ 	else {
/* 000953 */ 	}
/* 000969 */ 	var forbidden_characters = __call__ (str, null, extra_forbidden_characters);
/* 000970 */ 	if (__t__ (__t__ (!__t__ ((dollar_inline_math_mode))) && !__in__ ('$', forbidden_characters))) {
/* 000971 */ 		var forbidden_characters = __call__ (__iadd__, null, forbidden_characters, '$');
/* 000971 */ 	}
/* 000972 */ 	if (__t__ (__t__ ((__t__ (!__t__ ((enable_comments))) || __ne__ (comment_start, '%'))) && !__in__ ('%', forbidden_characters))) {
/* 000974 */ 		var forbidden_characters = __call__ (__iadd__, null, forbidden_characters, '%');
/* 000974 */ 	}
/* 000976 */ 	var latex_inline_math_delimiters = [tuple (['\\(', '\\)'])];
/* 000978 */ 	if (__t__ (dollar_inline_math_mode)) {
/* 000979 */ 		(function () {
/* 000979 */ 			var __accu0__ = latex_inline_math_delimiters;
/* 000979 */ 			return __call__ (__accu0__.append, __accu0__, tuple (['$', '$']));
/* 000979 */ 		}) ();
/* 000979 */ 	}
/* 000981 */ 	return __call__ (FLMParsingState, null, __kwargtrans__ ({is_block_level: force_block_level, latex_context: null, enable_comments: enable_comments, comment_start: comment_start, latex_inline_math_delimiters: latex_inline_math_delimiters, latex_display_math_delimiters: [tuple (['\\[', '\\]'])], forbidden_characters: forbidden_characters}));
/* 000981 */ };
/* 000993 */ export var FLMLatexWalkerMathContextParsingStateEventHandler =  __class__ ('FLMLatexWalkerMathContextParsingStateEventHandler', [latexnodes.LatexWalkerParsingStateEventHandler], {
/* 000993 */ 	__module__: __name__,
/* 001022 */ 	math_mode_extend_context: dict ({'unknown_macro_spec': (function () {
/* 001022 */ 		var __accu0__ = macrospec;
/* 001022 */ 		return __call__ (__accu0__.MacroSpec, __accu0__, '');
/* 001023 */ 	}) (), 'unknown_environment_spec': (function () {
/* 001023 */ 		var __accu0__ = macrospec;
/* 001023 */ 		return __call__ (__accu0__.EnvironmentSpec, __accu0__, '');
/* 001024 */ 	}) (), 'unknown_specials_spec': (function () {
/* 001024 */ 		var __accu0__ = macrospec;
/* 001024 */ 		return __call__ (__accu0__.SpecialsSpec, __accu0__, '');
/* 001021 */ 	}) ()}),
/* 001027 */ 	get enter_math_mode () {return __get__ (this, function (self, math_mode_delimiter, trigger_token) {
/* 001027 */ 		if (typeof math_mode_delimiter == 'undefined' || (math_mode_delimiter != null && math_mode_delimiter.hasOwnProperty ("__kwargtrans__"))) {;
/* 001027 */ 			var math_mode_delimiter = null;
/* 001027 */ 		};
/* 001027 */ 		if (typeof trigger_token == 'undefined' || (trigger_token != null && trigger_token.hasOwnProperty ("__kwargtrans__"))) {;
/* 001027 */ 			var trigger_token = null;
/* 001027 */ 		};
/* 001027 */ 		if (arguments.length) {
/* 001027 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001027 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001027 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001027 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001027 */ 					switch (__attrib0__) {
/* 001027 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001027 */ 						case 'math_mode_delimiter': var math_mode_delimiter = __allkwargs0__ [__attrib0__]; break;
/* 001027 */ 						case 'trigger_token': var trigger_token = __allkwargs0__ [__attrib0__]; break;
/* 001027 */ 					}
/* 001027 */ 				}
/* 001027 */ 			}
/* 001027 */ 		}
/* 001027 */ 		else {
/* 001027 */ 		}
/* 001033 */ 		var set_attributes = __call__ (dict, null, __kwargtrans__ ({in_math_mode: true, math_mode_delimiter: math_mode_delimiter}));
/* 001037 */ 		// pass;
/* 001042 */ 		return (function () {
/* 001042 */ 			var __accu0__ = macrospec;
/* 001042 */ 			return __call__ (__accu0__.ParsingStateDeltaExtendLatexContextDb, __accu0__, __kwargtrans__ ({set_attributes: set_attributes, extend_latex_context: self.math_mode_extend_context}));
/* 001042 */ 		}) ();
/* 001042 */ 	});},
/* 001047 */ 	get leave_math_mode () {return __get__ (this, function (self, trigger_token) {
/* 001047 */ 		if (typeof trigger_token == 'undefined' || (trigger_token != null && trigger_token.hasOwnProperty ("__kwargtrans__"))) {;
/* 001047 */ 			var trigger_token = null;
/* 001047 */ 		};
/* 001047 */ 		if (arguments.length) {
/* 001047 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001047 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001047 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001047 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001047 */ 					switch (__attrib0__) {
/* 001047 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001047 */ 						case 'trigger_token': var trigger_token = __allkwargs0__ [__attrib0__]; break;
/* 001047 */ 					}
/* 001047 */ 				}
/* 001047 */ 			}
/* 001047 */ 		}
/* 001047 */ 		else {
/* 001047 */ 		}
/* 001054 */ 		return (function () {
/* 001054 */ 			var __accu0__ = macrospec;
/* 001059 */ 			return __call__ (__accu0__.ParsingStateDeltaExtendLatexContextDb, __accu0__, __kwargtrans__ ({set_attributes: __call__ (dict, null, __kwargtrans__ ({in_math_mode: false, math_mode_delimiter: null})), extend_latex_context: __call__ (dict, null, __kwargtrans__ ({unknown_macro_spec: null, unknown_environment_spec: null, unknown_specials_spec: null}))}));
/* 001059 */ 		}) ();
/* 001059 */ 	});}
/* 001059 */ });
/* 001070 */ export var standard_environment_get_located_error_message = function (exception_object) {
/* 001070 */ 	if (arguments.length) {
/* 001070 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001070 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001070 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001070 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001070 */ 				switch (__attrib0__) {
/* 001070 */ 					case 'exception_object': var exception_object = __allkwargs0__ [__attrib0__]; break;
/* 001070 */ 				}
/* 001070 */ 			}
/* 001070 */ 		}
/* 001070 */ 	}
/* 001070 */ 	else {
/* 001070 */ 	}
/* 001094 */ 	var msg = null;
/* 001095 */ 	var error_type_info = exception_object.error_type_info;
/* 001096 */ 	if (__t__ (error_type_info)) {
/* 001097 */ 		var what = __getitem__ (error_type_info, 'what');
/* 001098 */ 		if (__t__ (__eq__ (what, 'token_forbidden_character'))) {
/* 001099 */ 			if (__t__ (__eq__ (__getitem__ (error_type_info, 'forbidden_character'), '%'))) {
/* 001100 */ 				var msg = 'Single percent signs are not allowed here. Use ‘\\%’ to typeset a literal percent sign, and ‘%%’ to start a comment.';
/* 001100 */ 			}
/* 001104 */ 			else if (__t__ (__eq__ (__getitem__ (error_type_info, 'forbidden_character'), '$'))) {
/* 001105 */ 				var msg = "You can't use ‘$’ here. LaTeX math should be typeset using \\(...\\) for inline math and \\[...\\] for unnumbered display equations. Use ‘\\$’ for a literal dollar sign.";
/* 001105 */ 			}
/* 001105 */ 		}
/* 001105 */ 	}
/* 001110 */ 	if (__t__ (!__t__ ((msg)))) {
/* 001111 */ 		var msg = exception_object.msg;
/* 001111 */ 	}
/* 001113 */ 	var errfmt = (function () {
/* 001113 */ 		var __accu0__ = latexnodes;
/* 001113 */ 		return __call__ (__accu0__.LatexWalkerLocatedErrorFormatter, __accu0__, exception_object);
/* 001113 */ 	}) ();
/* 001115 */ 	var msg = __call__ (__iadd__, null, msg, (function () {
/* 001115 */ 		var __accu0__ = errfmt;
/* 001115 */ 		return __call__ (__accu0__.format_full_traceback, __accu0__);
/* 001115 */ 	}) ());
/* 001117 */ 	return msg;
/* 001117 */ };
/* 001124 */ export var make_standard_environment = function (features, parsing_state, latex_context, flm_environment_options, parsing_state_options) {
/* 001124 */ 	if (typeof parsing_state == 'undefined' || (parsing_state != null && parsing_state.hasOwnProperty ("__kwargtrans__"))) {;
/* 001124 */ 		var parsing_state = null;
/* 001124 */ 	};
/* 001124 */ 	if (typeof latex_context == 'undefined' || (latex_context != null && latex_context.hasOwnProperty ("__kwargtrans__"))) {;
/* 001124 */ 		var latex_context = null;
/* 001124 */ 	};
/* 001124 */ 	if (typeof flm_environment_options == 'undefined' || (flm_environment_options != null && flm_environment_options.hasOwnProperty ("__kwargtrans__"))) {;
/* 001124 */ 		var flm_environment_options = null;
/* 001124 */ 	};
/* 001124 */ 	if (typeof parsing_state_options == 'undefined' || (parsing_state_options != null && parsing_state_options.hasOwnProperty ("__kwargtrans__"))) {;
/* 001124 */ 		var parsing_state_options = null;
/* 001124 */ 	};
/* 001124 */ 	if (arguments.length) {
/* 001124 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001124 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001124 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001124 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001124 */ 				switch (__attrib0__) {
/* 001124 */ 					case 'features': var features = __allkwargs0__ [__attrib0__]; break;
/* 001124 */ 					case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 001124 */ 					case 'latex_context': var latex_context = __allkwargs0__ [__attrib0__]; break;
/* 001124 */ 					case 'flm_environment_options': var flm_environment_options = __allkwargs0__ [__attrib0__]; break;
/* 001124 */ 					case 'parsing_state_options': var parsing_state_options = __allkwargs0__ [__attrib0__]; break;
/* 001124 */ 				}
/* 001124 */ 			}
/* 001124 */ 		}
/* 001124 */ 	}
/* 001124 */ 	else {
/* 001124 */ 	}
/* 001128 */ 	if (__t__ (latex_context === null)) {
/* 001129 */ 		var latex_context = (function () {
/* 001129 */ 			var __accu0__ = macrospec;
/* 001129 */ 			return __call__ (__accu0__.LatexContextDb, __accu0__);
/* 001129 */ 		}) ();
/* 001129 */ 	}
/* 001131 */ 	if (__t__ (parsing_state === null)) {
/* 001132 */ 		var parsing_state_options_2 = dict ({});
/* 001133 */ 		if (__t__ (parsing_state_options !== null)) {
/* 001134 */ 			var parsing_state_options_2 = parsing_state_options;
/* 001134 */ 		}
/* 001136 */ 		var parsing_state = __call__ (standard_parsing_state, null, __kwargtrans__ (parsing_state_options_2));
/* 001136 */ 	}
/* 001138 */ 	var parsing_state_event_handler = __call__ (FLMLatexWalkerMathContextParsingStateEventHandler, null);
/* 001140 */ 	var flm_environment_options_2 = dict ({});
/* 001141 */ 	if (__t__ (flm_environment_options !== null)) {
/* 001142 */ 		var flm_environment_options_2 = flm_environment_options;
/* 001142 */ 	}
/* 001144 */ 	var environment = __call__ (FLMEnvironment, null, features, parsing_state, latex_context, __kwargtrans__ (flm_environment_options_2));
/* 001151 */ 	environment.parsing_state_event_handler = parsing_state_event_handler;
/* 001153 */ 	environment.environment_get_located_error_message = standard_environment_get_located_error_message;
/* 001156 */ 	return environment;
/* 001156 */ };
/* 001170 */ export var _make_argvalue = function (argvalue, latex_walker, parsing_state) {
/* 001170 */ 	if (arguments.length) {
/* 001170 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001170 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001170 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001170 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001170 */ 				switch (__attrib0__) {
/* 001170 */ 					case 'argvalue': var argvalue = __allkwargs0__ [__attrib0__]; break;
/* 001170 */ 					case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 001170 */ 					case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 001170 */ 				}
/* 001170 */ 			}
/* 001170 */ 		}
/* 001170 */ 	}
/* 001170 */ 	else {
/* 001170 */ 	}
/* 001172 */ 	if (__t__ (argvalue === null)) {
/* 001173 */ 		return null;
/* 001173 */ 	}
/* 001175 */ 	if (__t__ (__call__ (isinstance, null, argvalue, str))) {
/* 001176 */ 		var argvalue = (function () {
/* 001176 */ 			var __accu0__ = latex_walker;
/* 001176 */ 			return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: argvalue, pos: null, pos_end: null, parsing_state: parsing_state}));
/* 001176 */ 		}) ();
/* 001176 */ 	}
/* 001184 */ 	if (__t__ (__call__ (isinstance, null, argvalue, latexnodes_nodes.LatexGroupNode))) {
/* 001185 */ 		return argvalue;
/* 001185 */ 	}
/* 001189 */ 	if (__t__ (__call__ (isinstance, null, argvalue, latexnodes_nodes.LatexNodeList))) {
/* 001190 */ 		var nodelist = argvalue;
/* 001190 */ 	}
/* 001192 */ 	else if (__t__ (__call__ (isinstance, null, argvalue, list))) {
/* 001193 */ 		var nodelist = (function () {
/* 001193 */ 			var __accu0__ = latex_walker;
/* 001193 */ 			return __call__ (__accu0__.make_nodelist, __accu0__, argvalue, __kwargtrans__ ({parsing_state: parsing_state}));
/* 001193 */ 		}) ();
/* 001193 */ 	}
/* 001196 */ 	else {
/* 001199 */ 		var nodelist = (function () {
/* 001199 */ 			var __accu0__ = latex_walker;
/* 001199 */ 			return __call__ (__accu0__.make_nodelist, __accu0__, [argvalue], __kwargtrans__ ({parsing_state: parsing_state}));
/* 001199 */ 		}) ();
/* 001199 */ 	}
/* 001204 */ 	var groupnode = (function () {
/* 001204 */ 		var __accu0__ = latex_walker;
/* 001204 */ 		return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexGroupNode, __kwargtrans__ ({delimiters: tuple (['', '']), nodelist: nodelist, pos: nodelist.pos, pos_end: nodelist.pos_end, parsing_state: parsing_state}));
/* 001204 */ 	}) ();
/* 001213 */ 	return groupnode;
/* 001213 */ };
/* 001216 */ export var make_invocable_arguments = function (flm_spec, args) {
/* 001216 */ 	if (arguments.length) {
/* 001216 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001216 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001216 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001216 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001216 */ 				switch (__attrib0__) {
/* 001216 */ 					case 'flm_spec': var flm_spec = __allkwargs0__ [__attrib0__]; break;
/* 001216 */ 					case 'args': var args = __allkwargs0__ [__attrib0__]; break;
/* 001216 */ 					case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 001216 */ 					case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 001216 */ 				}
/* 001216 */ 			}
/* 001216 */ 		}
/* 001216 */ 	}
/* 001216 */ 	else {
/* 001216 */ 	}
/* 001218 */ 	var argnlist = (function () {
/* 001218 */ 		var __accu0__ = [];
/* 001218 */ 		var __iterable0__ = flm_spec.arguments_spec_list;
/* 001218 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001218 */ 			var _ = __getitem__ (__iterable0__, __index0__);
/* 001218 */ 			(function () {
/* 001218 */ 				var __accu1__ = __accu0__;
/* 001218 */ 				return __call__ (__accu1__.append, __accu1__, null);
/* 001218 */ 			}) ();
/* 001218 */ 		}
/* 001218 */ 		return __accu0__;
/* 001218 */ 	}) ();
/* 001220 */ 	if (__t__ (args === null)) {
/* 001221 */ 		return argnlist;
/* 001221 */ 	}
/* 001223 */ 	var __iterable0__ = (function () {
/* 001223 */ 		var __accu0__ = args;
/* 001223 */ 		return __call__ (__accu0__.py_items, __accu0__);
/* 001223 */ 	}) ();
/* 001223 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001223 */ 		var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 001223 */ 		var argname = __left0__ [0];
/* 001223 */ 		var argvalue = __left0__ [1];
/* 001225 */ 		var argj = null;
/* 001226 */ 		var __iterable1__ = __call__ (enumerate, null, flm_spec.arguments_spec_list);
/* 001226 */ 		for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 001226 */ 			var __left0__ = __getitem__ (__iterable1__, __index1__);
/* 001226 */ 			var candidateargj = __left0__ [0];
/* 001226 */ 			var candidateargspec = __left0__ [1];
/* 001227 */ 			if (__t__ (__eq__ (candidateargspec.argname, argname))) {
/* 001228 */ 				var argj = candidateargj;
/* 001228 */ 				break;
/* 001228 */ 			}
/* 001228 */ 		}
/* 001230 */ 		if (__t__ (argj === null)) {
/* 001231 */ 			(function () {
/* 001231 */ 				var __accu0__ = logger;
/* 001231 */ 				return __call__ (__accu0__.error, __accu0__, 'Cannot find argument %r in spec %r', argname, flm_spec.arguments_spec_list);
/* 001231 */ 			}) ();
/* 001233 */ 			var __except0__ = __call__ (ValueError, null, 'No argument named ‘{}’ in spec'.format (argname));
/* 001233 */ 			__except0__.__cause__ = null;
/* 001233 */ 			throw __except0__;
/* 001233 */ 		}
/* 001236 */ 		__setitem__ (argnlist, argj, __call__ (_make_argvalue, null, argvalue, latex_walker, parsing_state));
/* 001236 */ 	}
/* 001238 */ 	return argnlist;
/* 001238 */ };
/* 001241 */ export var make_invocable_node_instance = function (node_type, flm_spec) {
/* 001241 */ 	var args = null;
/* 001241 */ 	var body_nodelist = null;
/* 001241 */ 	var node_kwargs = null;
/* 001241 */ 	if (arguments.length) {
/* 001241 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001241 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001241 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001241 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001241 */ 				switch (__attrib0__) {
/* 001241 */ 					case 'node_type': var node_type = __allkwargs0__ [__attrib0__]; break;
/* 001241 */ 					case 'flm_spec': var flm_spec = __allkwargs0__ [__attrib0__]; break;
/* 001241 */ 					case 'args': var args = __allkwargs0__ [__attrib0__]; break;
/* 001241 */ 					case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 001241 */ 					case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 001241 */ 					case 'body_nodelist': var body_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 001241 */ 					case 'node_kwargs': var node_kwargs = __allkwargs0__ [__attrib0__]; break;
/* 001241 */ 				}
/* 001241 */ 			}
/* 001241 */ 		}
/* 001241 */ 	}
/* 001241 */ 	else {
/* 001241 */ 	}
/* 001248 */ 	var nkwargs = dict ({'pos': null, 'pos_end': null});
/* 001253 */ 	if (__t__ (node_type === latexnodes_nodes.LatexMacroNode)) {
/* 001254 */ 		__setitem__ (nkwargs, 'macroname', flm_spec.macroname);
/* 001255 */ 		if (__t__ (body_nodelist !== null)) {
/* 001256 */ 			var __except0__ = __call__ (ValueError, null, 'For a LatexMacroNode you must have body_nodelist=None');
/* 001256 */ 			__except0__.__cause__ = null;
/* 001256 */ 			throw __except0__;
/* 001256 */ 		}
/* 001256 */ 	}
/* 001258 */ 	else if (__t__ (node_type === latexnodes_nodes.LatexEnvironmentNode)) {
/* 001259 */ 		__setitem__ (nkwargs, 'environmentname', flm_spec.environmentname);
/* 001259 */ 	}
/* 001261 */ 	else if (__t__ (node_type === latexnodes_nodes.LatexSpecialsNode)) {
/* 001262 */ 		__setitem__ (nkwargs, 'specials_chars', flm_spec.specials_chars);
/* 001263 */ 		if (__t__ (body_nodelist !== null)) {
/* 001264 */ 			var __except0__ = __call__ (ValueError, null, 'For a LatexSpecialsNode you must have body_nodelist=None');
/* 001264 */ 			__except0__.__cause__ = null;
/* 001264 */ 			throw __except0__;
/* 001264 */ 		}
/* 001264 */ 	}
/* 001266 */ 	var argnlist = __call__ (make_invocable_arguments, null, flm_spec, args, __kwargtrans__ ({latex_walker: latex_walker, parsing_state: parsing_state}));
/* 001270 */ 	var nodeargd = (function () {
/* 001270 */ 		var __accu0__ = latexnodes_nodes;
/* 001270 */ 		return __call__ (__accu0__.ParsedArguments, __accu0__, __kwargtrans__ ({argnlist: argnlist, arguments_spec_list: flm_spec.arguments_spec_list}));
/* 001270 */ 	}) ();
/* 001275 */ 	if (__t__ (body_nodelist !== null)) {
/* 001276 */ 		__setitem__ (nkwargs, 'nodelist', body_nodelist);
/* 001276 */ 	}
/* 001278 */ 	if (__t__ (node_kwargs !== null)) {
/* 001279 */ 		(function () {
/* 001279 */ 			var __accu0__ = nkwargs;
/* 001279 */ 			return __call__ (__accu0__.py_update, __accu0__, node_kwargs);
/* 001279 */ 		}) ();
/* 001279 */ 	}
/* 001281 */ 	var node = (function () {
/* 001281 */ 		var __accu0__ = latex_walker;
/* 001281 */ 		return __call__ (__accu0__.make_node, __accu0__, node_type, __kwargtrans__ (__mergekwargtrans__ ({spec: flm_spec, nodeargd: nodeargd, parsing_state: parsing_state}, nkwargs)));
/* 001281 */ 	}) ();
/* 001289 */ 	var node = (function () {
/* 001289 */ 		var __accu0__ = flm_spec;
/* 001289 */ 		return __call__ (__accu0__.finalize_node, __accu0__, node);
/* 001289 */ 	}) ();
/* 001291 */ 	return node;
/* 001291 */ };
/* 000006 */ 
//# sourceMappingURL=flm.flmenvironment.map