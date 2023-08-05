/* 000001 */ // Transcrypt'ed from Python, 2023-08-06 00:52:16
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
/* 000006 */ export {latexwalker, LatexWalkerParseError, FLMFragment, latexnodes, macrospec, FLMDocument, latexnodes_nodes, LatexWalkerLocatedErrorFormatter};
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
/* 000154 */ 			if (__t__ (__t__ (__eq__ (__call__ (len, null, char_nodes), 0)) && __t__ (first_node !== null) && __call__ (getattr, null, first_node, 'flm_is_block_heading', false))) {
/* 000157 */ 				var is_head = true;
/* 000157 */ 			}
/* 000159 */ 			if (__t__ (__call__ (getattr, null, node, 'flm_strip_preceding_whitespace', false))) {
/* 000160 */ 				if (__t__ (tail_char_node_info !== null)) {
/* 000161 */ 					__setitem__ (tail_char_node_info, 'is_tail', true);
/* 000161 */ 				}
/* 000161 */ 			}
/* 000163 */ 			if (__t__ ((function () {
/* 000163 */ 				var __accu0__ = node;
/* 000163 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000163 */ 			}) ())) {
/* 000164 */ 				var info = dict ({'is_head': is_head, 'is_tail': false});
/* 000165 */ 				if (__t__ (next_node_should_strip_leading_whitespace)) {
/* 000166 */ 					__setitem__ (info, 'is_head', true);
/* 000166 */ 				}
/* 000167 */ 				(function () {
/* 000167 */ 					var __accu0__ = char_nodes;
/* 000167 */ 					return __call__ (__accu0__.append, __accu0__, tuple ([node, info]));
/* 000167 */ 				}) ();
/* 000168 */ 				var is_head = false;
/* 000169 */ 				var tail_char_node_info = info;
/* 000169 */ 			}
/* 000170 */ 			else if (__t__ (!__t__ (((function () {
/* 000170 */ 				var __accu0__ = node;
/* 000170 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCommentNode);
/* 000170 */ 			}) ())))) {
/* 000171 */ 				if (__t__ (first_node === null)) {
/* 000172 */ 					var first_node = node;
/* 000172 */ 				}
/* 000173 */ 				var is_head = false;
/* 000174 */ 				var tail_char_node_info = null;
/* 000174 */ 			}
/* 000176 */ 			var next_node_should_strip_leading_whitespace = false;
/* 000177 */ 			if (__t__ (__call__ (getattr, null, node, 'flm_strip_following_whitespace', false))) {
/* 000178 */ 				var next_node_should_strip_leading_whitespace = true;
/* 000178 */ 			}
/* 000178 */ 		}
/* 000181 */ 		if (__t__ (tail_char_node_info !== null)) {
/* 000182 */ 			__setitem__ (tail_char_node_info, 'is_tail', true);
/* 000182 */ 		}
/* 000184 */ 		var __iterable0__ = char_nodes;
/* 000184 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000184 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000184 */ 			var char_node = __left0__ [0];
/* 000184 */ 			var info = __left0__ [1];
/* 000185 */ 			char_node.flm_chars_value = (function () {
/* 000185 */ 				var __accu0__ = self;
/* 000185 */ 				return __call__ (__accu0__.simplify_whitespace_chars, __accu0__, char_node.chars, __kwargtrans__ ({is_head: __getitem__ (info, 'is_head'), is_tail: __getitem__ (info, 'is_tail')}));
/* 000185 */ 			}) ();
/* 000185 */ 		}
/* 000196 */ 		return paragraph_nodes;
/* 000196 */ 	});},
/* 000198 */ 	get build_blocks () {return __get__ (this, function (self) {
/* 000198 */ 		if (arguments.length) {
/* 000198 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000198 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000198 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000198 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000198 */ 					switch (__attrib0__) {
/* 000198 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000198 */ 					}
/* 000198 */ 				}
/* 000198 */ 			}
/* 000198 */ 		}
/* 000198 */ 		else {
/* 000198 */ 		}
/* 000199 */ 		var latexnodelist = self.latexnodelist;
/* 000203 */ 		assert (__eq__ (__call__ (len, null, self.blocks), 0));
/* 000205 */ 		var __iterable0__ = latexnodelist;
/* 000205 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000205 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000206 */ 			var n_is_block_level = __call__ (getattr, null, n, 'flm_is_block_level', null);
/* 000207 */ 			var n_is_block_heading = __call__ (getattr, null, n, 'flm_is_block_heading', false);
/* 000208 */ 			if (__t__ (n_is_block_level)) {
/* 000210 */ 				(function () {
/* 000210 */ 					var __accu0__ = self;
/* 000210 */ 					return __call__ (__accu0__.flush_paragraph, __accu0__);
/* 000210 */ 				}) ();
/* 000212 */ 				if (__t__ (__call__ (getattr, null, n, 'flm_is_paragraph_break_marker', false))) {
/* 000212 */ 					continue;
/* 000212 */ 				}
/* 000217 */ 				if (__t__ (n_is_block_heading)) {
/* 000221 */ 					(function () {
/* 000221 */ 						var __accu0__ = self.pending_paragraph_nodes;
/* 000221 */ 						return __call__ (__accu0__.append, __accu0__, n);
/* 000221 */ 					}) ();
/* 000221 */ 					continue;
/* 000221 */ 				}
/* 000226 */ 				(function () {
/* 000226 */ 					var __accu0__ = self.blocks;
/* 000226 */ 					return __call__ (__accu0__.append, __accu0__, n);
/* 000226 */ 				}) ();
/* 000226 */ 				continue;
/* 000226 */ 			}
/* 000229 */ 			var paragraph_started_yet = true;
/* 000230 */ 			if (__t__ (!__t__ ((self.pending_paragraph_nodes)))) {
/* 000231 */ 				var paragraph_started_yet = false;
/* 000231 */ 			}
/* 000232 */ 			if (__t__ (__eq__ (__call__ (len, null, self.pending_paragraph_nodes), 1))) {
/* 000233 */ 				if (__t__ (__call__ (getattr, null, __getitem__ (self.pending_paragraph_nodes, 0), 'flm_is_block_heading', false))) {
/* 000235 */ 					var paragraph_started_yet = false;
/* 000235 */ 				}
/* 000235 */ 			}
/* 000238 */ 			if (__t__ (__t__ (!__t__ ((paragraph_started_yet))) && __t__ ((function () {
/* 000238 */ 				var __accu0__ = n;
/* 000238 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000239 */ 			}) ()) && (function () {
/* 000239 */ 				var __accu0__ = self.rx_only_space;
/* 000239 */ 				return __call__ (__accu0__.match, __accu0__, n.chars);
/* 000239 */ 			}) ())) {
/* 000239 */ 				continue;
/* 000239 */ 			}
/* 000245 */ 			(function () {
/* 000245 */ 				var __accu0__ = self.pending_paragraph_nodes;
/* 000245 */ 				return __call__ (__accu0__.append, __accu0__, n);
/* 000245 */ 			}) ();
/* 000245 */ 		}
/* 000248 */ 		(function () {
/* 000248 */ 			var __accu0__ = self;
/* 000248 */ 			return __call__ (__accu0__.flush_paragraph, __accu0__);
/* 000248 */ 		}) ();
/* 000250 */ 		return self.blocks;
/* 000250 */ 	});}
/* 000250 */ });
/* 000258 */ export var NodeListFinalizer =  __class__ ('NodeListFinalizer', [object], {
/* 000258 */ 	__module__: __name__,
/* 000263 */ 	get finalize_nodelist () {return __get__ (this, function (self, latexnodelist) {
/* 000263 */ 		if (arguments.length) {
/* 000263 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000263 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000263 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000263 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000263 */ 					switch (__attrib0__) {
/* 000263 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000263 */ 						case 'latexnodelist': var latexnodelist = __allkwargs0__ [__attrib0__]; break;
/* 000263 */ 					}
/* 000263 */ 				}
/* 000263 */ 			}
/* 000263 */ 		}
/* 000263 */ 		else {
/* 000263 */ 		}
/* 000279 */ 		if (__t__ (__t__ (__call__ (hasattr, null, latexnodelist, 'flm_nodelist_finalized')) && __call__ (getattr, null, latexnodelist, 'flm_nodelist_finalized'))) {
/* 000280 */ 			return latexnodelist;
/* 000280 */ 		}
/* 000282 */ 		latexnodelist.flm_nodelist_finalized = true;
/* 000284 */ 		var is_block_level = latexnodelist.parsing_state.is_block_level;
/* 000285 */ 		if (__t__ (is_block_level === null)) {
/* 000287 */ 			var is_block_level = (function () {
/* 000287 */ 				var __accu0__ = self;
/* 000287 */ 				return __call__ (__accu0__.infer_is_block_level_nodelist, __accu0__, latexnodelist);
/* 000287 */ 			}) ();
/* 000287 */ 		}
/* 000289 */ 		latexnodelist.flm_is_block_level = is_block_level;
/* 000293 */ 		if (__t__ (!__t__ ((is_block_level)))) {
/* 000295 */ 			var __iterable0__ = latexnodelist;
/* 000295 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000295 */ 				var n = __getitem__ (__iterable0__, __index0__);
/* 000296 */ 				if (__t__ (__call__ (getattr, null, n, 'flm_is_block_level', null))) {
/* 000300 */ 					var __except0__ = __call__ (LatexWalkerParseError, null, __kwargtrans__ ({msg: 'Content is not allowed in inline text (not block level): ‘{}’'.format ((function () {
/* 000300 */ 						var __accu0__ = n;
/* 000300 */ 						return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000300 */ 					}) ()), pos: n.pos}));
/* 000300 */ 					__except0__.__cause__ = null;
/* 000300 */ 					throw __except0__;
/* 000300 */ 				}
/* 000304 */ 				if (__t__ ((function () {
/* 000304 */ 					var __accu0__ = n;
/* 000304 */ 					return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000304 */ 				}) ())) {
/* 000305 */ 					n.flm_chars_value = (function () {
/* 000305 */ 						var __accu0__ = self;
/* 000305 */ 						return __call__ (__accu0__.simplify_whitespace_chars_inline, __accu0__, n.chars);
/* 000305 */ 					}) ();
/* 000305 */ 				}
/* 000305 */ 			}
/* 000305 */ 		}
/* 000312 */ 		if (__t__ (is_block_level)) {
/* 000313 */ 			var blocks_builder = (function () {
/* 000313 */ 				var __accu0__ = self;
/* 000313 */ 				return __call__ (__accu0__.make_blocks_builder, __accu0__, latexnodelist);
/* 000313 */ 			}) ();
/* 000314 */ 			var flm_blocks = (function () {
/* 000314 */ 				var __accu0__ = blocks_builder;
/* 000314 */ 				return __call__ (__accu0__.build_blocks, __accu0__);
/* 000314 */ 			}) ();
/* 000315 */ 			latexnodelist.flm_blocks = flm_blocks;
/* 000315 */ 		}
/* 000317 */ 		return latexnodelist;
/* 000317 */ 	});},
/* 000320 */ 	get infer_is_block_level_nodelist () {return __get__ (this, function (self, latexnodelist) {
/* 000320 */ 		if (arguments.length) {
/* 000320 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000320 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000320 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000320 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000320 */ 					switch (__attrib0__) {
/* 000320 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000320 */ 						case 'latexnodelist': var latexnodelist = __allkwargs0__ [__attrib0__]; break;
/* 000320 */ 					}
/* 000320 */ 				}
/* 000320 */ 			}
/* 000320 */ 		}
/* 000320 */ 		else {
/* 000320 */ 		}
/* 000321 */ 		var __iterable0__ = latexnodelist;
/* 000321 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000321 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000322 */ 			var n_is_block_level = __call__ (getattr, null, n, 'flm_is_block_level', null);
/* 000323 */ 			if (__t__ (n_is_block_level)) {
/* 000324 */ 				return true;
/* 000324 */ 			}
/* 000324 */ 		}
/* 000325 */ 		return false;
/* 000325 */ 	});},
/* 000327 */ 	get simplify_whitespace_chars_inline () {return __get__ (this, function (self, chars) {
/* 000327 */ 		if (arguments.length) {
/* 000327 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000327 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000327 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000327 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000327 */ 					switch (__attrib0__) {
/* 000327 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000327 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000327 */ 					}
/* 000327 */ 				}
/* 000327 */ 			}
/* 000327 */ 		}
/* 000327 */ 		else {
/* 000327 */ 		}
/* 000328 */ 		return (function () {
/* 000328 */ 			var __accu0__ = self.rx_inline_space;
/* 000328 */ 			return __call__ (__accu0__.sub, __accu0__, ' ', chars);
/* 000328 */ 		}) ();
/* 000328 */ 	});},
/* 000330 */ 	make_blocks_builder: BlocksBuilder,
/* 000332 */ 	rx_inline_space: BlocksBuilder.rx_space
/* 000332 */ });
/* 000341 */ export var FLMLatexWalker =  __class__ ('FLMLatexWalker', [latexwalker.LatexWalker], {
/* 000341 */ 	__module__: __name__,
/* 000354 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000354 */ 		var parsing_state_event_handler = null;
/* 000354 */ 		var standalone_mode = false;
/* 000354 */ 		var resource_info = null;
/* 000354 */ 		var parsing_mode = null;
/* 000354 */ 		var what = null;
/* 000354 */ 		var input_lineno_colno_offsets = null;
/* 000354 */ 		var kwargs = dict ();
/* 000354 */ 		if (arguments.length) {
/* 000354 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000354 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000354 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000354 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000354 */ 					switch (__attrib0__) {
/* 000354 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000354 */ 						case 'flm_text': var flm_text = __allkwargs0__ [__attrib0__]; break;
/* 000354 */ 						case 'default_parsing_state': var default_parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000354 */ 						case 'flm_environment': var flm_environment = __allkwargs0__ [__attrib0__]; break;
/* 000354 */ 						case 'parsing_state_event_handler': var parsing_state_event_handler = __allkwargs0__ [__attrib0__]; break;
/* 000354 */ 						case 'standalone_mode': var standalone_mode = __allkwargs0__ [__attrib0__]; break;
/* 000354 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000354 */ 						case 'parsing_mode': var parsing_mode = __allkwargs0__ [__attrib0__]; break;
/* 000354 */ 						case 'what': var what = __allkwargs0__ [__attrib0__]; break;
/* 000354 */ 						case 'input_lineno_colno_offsets': var input_lineno_colno_offsets = __allkwargs0__ [__attrib0__]; break;
/* 000354 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000354 */ 					}
/* 000354 */ 				}
/* 000354 */ 				delete kwargs.__kwargtrans__;
/* 000354 */ 			}
/* 000354 */ 		}
/* 000354 */ 		else {
/* 000354 */ 		}
/* 000367 */ 		if (__t__ (!__t__ ((input_lineno_colno_offsets)))) {
/* 000368 */ 			var input_lineno_colno_offsets = dict ({});
/* 000368 */ 		}
/* 000373 */ 		__call__ (__call__ (__super__, null, FLMLatexWalker, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({s: flm_text, default_parsing_state: default_parsing_state, line_number_offset: (function () {
/* 000373 */ 			var __accu0__ = input_lineno_colno_offsets;
/* 000373 */ 			return __call__ (__accu0__.py_get, __accu0__, 'line_number_offset', null);
/* 000375 */ 		}) (), first_line_column_offset: (function () {
/* 000375 */ 			var __accu0__ = input_lineno_colno_offsets;
/* 000375 */ 			return __call__ (__accu0__.py_get, __accu0__, 'first_line_column_offset', null);
/* 000376 */ 		}) (), column_offset: (function () {
/* 000376 */ 			var __accu0__ = input_lineno_colno_offsets;
/* 000376 */ 			return __call__ (__accu0__.py_get, __accu0__, 'column_offset', null);
/* 000376 */ 		}) ()}, kwargs)));
/* 000380 */ 		self.flm_environment = flm_environment;
/* 000382 */ 		self.standalone_mode = standalone_mode;
/* 000386 */ 		self.resource_info = resource_info;
/* 000388 */ 		self.what = what;
/* 000391 */ 		self.parsing_mode = parsing_mode;
/* 000393 */ 		self._parsing_state_event_handler = parsing_state_event_handler;
/* 000395 */ 		self.input_lineno_colno_offsets = input_lineno_colno_offsets;
/* 000395 */ 	});},
/* 000397 */ 	get parsing_state_event_handler () {return __get__ (this, function (self) {
/* 000397 */ 		if (arguments.length) {
/* 000397 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000397 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000397 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000397 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000397 */ 					switch (__attrib0__) {
/* 000397 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000397 */ 					}
/* 000397 */ 				}
/* 000397 */ 			}
/* 000397 */ 		}
/* 000397 */ 		else {
/* 000397 */ 		}
/* 000398 */ 		if (__t__ (self._parsing_state_event_handler)) {
/* 000399 */ 			return self._parsing_state_event_handler;
/* 000399 */ 		}
/* 000400 */ 		return __call__ (__call__ (__super__, null, FLMLatexWalker, 'parsing_state_event_handler'), null, self);
/* 000400 */ 	});},
/* 000402 */ 	get make_nodelist () {return __get__ (this, function (self, nodelist, parsing_state) {
/* 000402 */ 		var kwargs = dict ();
/* 000402 */ 		if (arguments.length) {
/* 000402 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000402 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000402 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000402 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000402 */ 					switch (__attrib0__) {
/* 000402 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000402 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000402 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000402 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000402 */ 					}
/* 000402 */ 				}
/* 000402 */ 				delete kwargs.__kwargtrans__;
/* 000402 */ 			}
/* 000402 */ 		}
/* 000402 */ 		else {
/* 000402 */ 		}
/* 000403 */ 		var nl = __call__ (__call__ (__super__, null, FLMLatexWalker, 'make_nodelist'), null, self, __kwargtrans__ (__mergekwargtrans__ ({nodelist: nodelist, parsing_state: parsing_state}, kwargs)));
/* 000405 */ 		var nl2 = (function () {
/* 000405 */ 			var __accu0__ = self.flm_environment;
/* 000405 */ 			return __call__ (__accu0__.finalize_nodelist, __accu0__, nl);
/* 000405 */ 		}) ();
/* 000406 */ 		if (__t__ (nl2 === null)) {
/* 000407 */ 			var __except0__ = __call__ (ValueError, null, "Environment's finalize_nodelist() returned None");
/* 000407 */ 			__except0__.__cause__ = null;
/* 000407 */ 			throw __except0__;
/* 000407 */ 		}
/* 000408 */ 		return nl2;
/* 000408 */ 	});},
/* 000410 */ 	get make_node () {return __get__ (this, function (self, node_class) {
/* 000410 */ 		var kwargs = dict ();
/* 000410 */ 		if (arguments.length) {
/* 000410 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000410 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000410 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000410 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000410 */ 					switch (__attrib0__) {
/* 000410 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000410 */ 						case 'node_class': var node_class = __allkwargs0__ [__attrib0__]; break;
/* 000410 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000410 */ 					}
/* 000410 */ 				}
/* 000410 */ 				delete kwargs.__kwargtrans__;
/* 000410 */ 			}
/* 000410 */ 		}
/* 000410 */ 		else {
/* 000410 */ 		}
/* 000411 */ 		var node = __call__ (__call__ (__super__, null, FLMLatexWalker, 'make_node'), null, self, node_class, __kwargtrans__ (kwargs));
/* 000412 */ 		var node2 = (function () {
/* 000412 */ 			var __accu0__ = self.flm_environment;
/* 000412 */ 			return __call__ (__accu0__.finalize_node, __accu0__, node);
/* 000412 */ 		}) ();
/* 000413 */ 		if (__t__ (node2 === null)) {
/* 000414 */ 			var __except0__ = __call__ (ValueError, null, "Environment's finalize_node() returned None");
/* 000414 */ 			__except0__.__cause__ = null;
/* 000414 */ 			throw __except0__;
/* 000414 */ 		}
/* 000415 */ 		return node2;
/* 000415 */ 	});},
/* 000420 */ 	get filter_whitespace_comments_nodes () {return __get__ (this, function (self, nodelist) {
/* 000420 */ 		if (arguments.length) {
/* 000420 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000420 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000420 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000420 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000420 */ 					switch (__attrib0__) {
/* 000420 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000420 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000420 */ 					}
/* 000420 */ 				}
/* 000420 */ 			}
/* 000420 */ 		}
/* 000420 */ 		else {
/* 000420 */ 		}
/* 000425 */ 		return (function () {
/* 000425 */ 			var __accu0__ = nodelist;
/* 000425 */ 			return __call__ (__accu0__.filter, __accu0__, __kwargtrans__ ({node_predicate_fn: self._filter_whitespace_comments_nodes_predicate, skip_none: true, skip_comments: true, skip_whitespace_char_nodes: true}));
/* 000425 */ 		}) ();
/* 000425 */ 	});},
/* 000432 */ 	get _filter_whitespace_comments_nodes_predicate () {return __get__ (this, function (self, node) {
/* 000432 */ 		if (arguments.length) {
/* 000432 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000432 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000432 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000432 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000432 */ 					switch (__attrib0__) {
/* 000432 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000432 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000432 */ 					}
/* 000432 */ 				}
/* 000432 */ 			}
/* 000432 */ 		}
/* 000432 */ 		else {
/* 000432 */ 		}
/* 000433 */ 		if (__t__ (__call__ (getattr, null, node, 'flm_is_paragraph_break_marker', false))) {
/* 000434 */ 			return false;
/* 000434 */ 		}
/* 000435 */ 		return true;
/* 000435 */ 	});}
/* 000435 */ });
/* 000443 */ export var features_ensure_dependencies_are_met = function (features) {
/* 000443 */ 	if (arguments.length) {
/* 000443 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000443 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000443 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000443 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000443 */ 				switch (__attrib0__) {
/* 000443 */ 					case 'features': var features = __allkwargs0__ [__attrib0__]; break;
/* 000443 */ 				}
/* 000443 */ 			}
/* 000443 */ 		}
/* 000443 */ 	}
/* 000443 */ 	else {
/* 000443 */ 	}
/* 000445 */ 	var feature_names = __call__ (set, null, (function () {
/* 000445 */ 		var __accu0__ = [];
/* 000445 */ 		var __iterable0__ = features;
/* 000445 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000445 */ 			var f = __getitem__ (__iterable0__, __index0__);
/* 000445 */ 			(function () {
/* 000445 */ 				var __accu1__ = __accu0__;
/* 000445 */ 				return __call__ (__accu1__.append, __accu1__, f.feature_name);
/* 000445 */ 			}) ();
/* 000445 */ 		}
/* 000445 */ 		return __accu0__;
/* 000445 */ 	}) ());
/* 000447 */ 	var __iterable0__ = features;
/* 000447 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000447 */ 		var feature = __getitem__ (__iterable0__, __index0__);
/* 000448 */ 		if (__t__ (feature.feature_dependencies === null)) {
/* 000448 */ 			continue;
/* 000448 */ 		}
/* 000450 */ 		var __iterable1__ = feature.feature_dependencies;
/* 000450 */ 		for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000450 */ 			var fdepname = __getitem__ (__iterable1__, __index1__);
/* 000451 */ 			if (__t__ (!__in__ (fdepname, feature_names))) {
/* 000453 */ 				var __except0__ = __call__ (ValueError, null, 'Feature ‘{}’ ({}) has unmet dependency ‘{}’'.format (feature.feature_name, __call__ (repr, null, feature), fdepname));
/* 000453 */ 				__except0__.__cause__ = null;
/* 000453 */ 				throw __except0__;
/* 000453 */ 			}
/* 000453 */ 		}
/* 000453 */ 	}
/* 000453 */ };
/* 000459 */ export var features_sorted_by_dependencies = function (features) {
/* 000459 */ 	if (arguments.length) {
/* 000459 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000459 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000459 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000459 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000459 */ 				switch (__attrib0__) {
/* 000459 */ 					case 'features': var features = __allkwargs0__ [__attrib0__]; break;
/* 000459 */ 				}
/* 000459 */ 			}
/* 000459 */ 		}
/* 000459 */ 	}
/* 000459 */ 	else {
/* 000459 */ 	}
/* 000476 */ 	var features_to_sort = __call__ (list, null, features);
/* 000480 */ 	var features_by_name = dict ({});
/* 000481 */ 	var __iterable0__ = features_to_sort;
/* 000481 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000481 */ 		var feature = __getitem__ (__iterable0__, __index0__);
/* 000482 */ 		if (__t__ (__in__ (feature.feature_name, features_by_name))) {
/* 000484 */ 			var __except0__ = __call__ (ValueError, null, 'Duplicate feature detected: feature {} has the same name (‘{}’) as the as already-included feature {}'.format (__call__ (repr, null, feature), feature.feature_name, __getitem__ (features_by_name, feature.feature_name)));
/* 000484 */ 			__except0__.__cause__ = null;
/* 000484 */ 			throw __except0__;
/* 000484 */ 		}
/* 000488 */ 		__setitem__ (features_by_name, feature.feature_name, feature);
/* 000488 */ 	}
/* 000493 */ 	(function () {
/* 000493 */ 		var __accu0__ = features_to_sort;
/* 000493 */ 		return __call__ (__accu0__.py_sort, __accu0__, __kwargtrans__ ({key: (function __lambda__ (f) {
/* 000493 */ 			if (arguments.length) {
/* 000493 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000493 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000493 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000493 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000493 */ 						switch (__attrib0__) {
/* 000493 */ 							case 'f': var f = __allkwargs0__ [__attrib0__]; break;
/* 000493 */ 						}
/* 000493 */ 					}
/* 000493 */ 				}
/* 000493 */ 			}
/* 000493 */ 			else {
/* 000493 */ 			}
/* 000493 */ 			return f.feature_name;
/* 000493 */ 		})}));
/* 000493 */ 	}) ();
/* 000496 */ 	__call__ (features_ensure_dependencies_are_met, null, features_to_sort);
/* 000498 */ 	var get_feature_dependencies = function (f) {
/* 000498 */ 		if (arguments.length) {
/* 000498 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000498 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000498 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000498 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000498 */ 					switch (__attrib0__) {
/* 000498 */ 						case 'f': var f = __allkwargs0__ [__attrib0__]; break;
/* 000498 */ 					}
/* 000498 */ 				}
/* 000498 */ 			}
/* 000498 */ 		}
/* 000498 */ 		else {
/* 000498 */ 		}
/* 000499 */ 		var deps = __call__ (set, null);
/* 000500 */ 		if (__t__ (f.feature_dependencies !== null)) {
/* 000501 */ 			var __iterable0__ = f.feature_dependencies;
/* 000501 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000501 */ 				var fdepname = __getitem__ (__iterable0__, __index0__);
/* 000502 */ 				(function () {
/* 000502 */ 					var __accu0__ = deps;
/* 000502 */ 					return __call__ (__accu0__.add, __accu0__, fdepname);
/* 000502 */ 				}) ();
/* 000502 */ 			}
/* 000502 */ 		}
/* 000503 */ 		if (__t__ (f.feature_optional_dependencies !== null)) {
/* 000504 */ 			var __iterable0__ = f.feature_optional_dependencies;
/* 000504 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000504 */ 				var foptdepname = __getitem__ (__iterable0__, __index0__);
/* 000505 */ 				if (__t__ (__in__ (foptdepname, features_by_name))) {
/* 000506 */ 					(function () {
/* 000506 */ 						var __accu0__ = deps;
/* 000506 */ 						return __call__ (__accu0__.add, __accu0__, foptdepname);
/* 000506 */ 					}) ();
/* 000506 */ 				}
/* 000506 */ 			}
/* 000506 */ 		}
/* 000507 */ 		return __call__ (sorted, null, __call__ (list, null, deps));
/* 000507 */ 	};
/* 000515 */ 	var all_feature_dependencies = __call__ (dict, null, (function () {
/* 000515 */ 		var __accu0__ = [];
/* 000517 */ 		var __iterable0__ = (function () {
/* 000517 */ 			var __accu1__ = features_by_name;
/* 000517 */ 			return __call__ (__accu1__.py_items, __accu1__);
/* 000517 */ 		}) ();
/* 000517 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000517 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000517 */ 			var fname = __left0__ [0];
/* 000517 */ 			var f = __left0__ [1];
/* 000517 */ 			(function () {
/* 000517 */ 				var __accu1__ = __accu0__;
/* 000516 */ 				return __call__ (__accu1__.append, __accu1__, tuple ([fname, __call__ (get_feature_dependencies, null, f)]));
/* 000516 */ 			}) ();
/* 000516 */ 		}
/* 000516 */ 		return __accu0__;
/* 000516 */ 	}) ());
/* 000520 */ 	var get_feature_dependents = function (fparentname, all_feature_dependencies) {
/* 000520 */ 		if (arguments.length) {
/* 000520 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000520 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000520 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000520 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000520 */ 					switch (__attrib0__) {
/* 000520 */ 						case 'fparentname': var fparentname = __allkwargs0__ [__attrib0__]; break;
/* 000520 */ 						case 'all_feature_dependencies': var all_feature_dependencies = __allkwargs0__ [__attrib0__]; break;
/* 000520 */ 					}
/* 000520 */ 				}
/* 000520 */ 			}
/* 000520 */ 		}
/* 000520 */ 		else {
/* 000520 */ 		}
/* 000521 */ 		var dependents = __call__ (set, null);
/* 000522 */ 		var __iterable0__ = (function () {
/* 000522 */ 			var __accu0__ = all_feature_dependencies;
/* 000522 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000522 */ 		}) ();
/* 000522 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000522 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000522 */ 			var fname = __left0__ [0];
/* 000522 */ 			var fdepnames = __left0__ [1];
/* 000523 */ 			var __iterable1__ = fdepnames;
/* 000523 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000523 */ 				var fdepname = __getitem__ (__iterable1__, __index1__);
/* 000524 */ 				if (__t__ (__eq__ (fdepname, fparentname))) {
/* 000525 */ 					(function () {
/* 000525 */ 						var __accu0__ = dependents;
/* 000525 */ 						return __call__ (__accu0__.add, __accu0__, fname);
/* 000525 */ 					}) ();
/* 000525 */ 				}
/* 000525 */ 			}
/* 000525 */ 		}
/* 000526 */ 		return __call__ (sorted, null, __call__ (list, null, dependents));
/* 000526 */ 	};
/* 000532 */ 	var sorted_features = [];
/* 000533 */ 	var root_features = (function () {
/* 000533 */ 		var __accu0__ = [];
/* 000536 */ 		var __iterable0__ = __call__ (py_reversed, null, features_to_sort);
/* 000536 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000536 */ 			var f = __getitem__ (__iterable0__, __index0__);
/* 000537 */ 			if (__t__ (__eq__ (__call__ (len, null, __getitem__ (all_feature_dependencies, f.feature_name)), 0))) {
/* 000537 */ 				(function () {
/* 000537 */ 					var __accu1__ = __accu0__;
/* 000537 */ 					return __call__ (__accu1__.append, __accu1__, f);
/* 000537 */ 				}) ();
/* 000537 */ 			}
/* 000537 */ 		}
/* 000537 */ 		return __accu0__;
/* 000537 */ 	}) ();
/* 000541 */ 	while (__t__ (__gt__ (__call__ (len, null, root_features), 0))) {
/* 000542 */ 		var n = (function () {
/* 000542 */ 			var __accu0__ = root_features;
/* 000542 */ 			return __call__ (__accu0__.py_pop, __accu0__);
/* 000542 */ 		}) ();
/* 000543 */ 		(function () {
/* 000543 */ 			var __accu0__ = sorted_features;
/* 000543 */ 			return __call__ (__accu0__.append, __accu0__, n);
/* 000543 */ 		}) ();
/* 000545 */ 		var n_name = n.feature_name;
/* 000547 */ 		var iter_dependents = __call__ (get_feature_dependents, null, n_name, all_feature_dependencies);
/* 000548 */ 		var __iterable0__ = iter_dependents;
/* 000548 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000548 */ 			var fdependentname = __getitem__ (__iterable0__, __index0__);
/* 000551 */ 			(function () {
/* 000551 */ 				var __accu0__ = __getitem__ (all_feature_dependencies, fdependentname);
/* 000551 */ 				return __call__ (__accu0__.remove, __accu0__, n_name);
/* 000551 */ 			}) ();
/* 000555 */ 			if (__t__ (__eq__ (__call__ (len, null, __getitem__ (all_feature_dependencies, fdependentname)), 0))) {
/* 000557 */ 				(function () {
/* 000557 */ 					var __accu0__ = root_features;
/* 000557 */ 					return __call__ (__accu0__.insert, __accu0__, 0, __getitem__ (features_by_name, fdependentname));
/* 000557 */ 				}) ();
/* 000557 */ 			}
/* 000557 */ 		}
/* 000557 */ 	}
/* 000560 */ 	var problematic_features = [];
/* 000561 */ 	var __iterable0__ = (function () {
/* 000561 */ 		var __accu0__ = all_feature_dependencies;
/* 000561 */ 		return __call__ (__accu0__.py_items, __accu0__);
/* 000561 */ 	}) ();
/* 000561 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000561 */ 		var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000561 */ 		var fsrcname = __left0__ [0];
/* 000561 */ 		var featuredeps = __left0__ [1];
/* 000562 */ 		if (__t__ (__gt__ (__call__ (len, null, featuredeps), 0))) {
/* 000563 */ 			(function () {
/* 000563 */ 				var __accu0__ = problematic_features;
/* 000564 */ 				return __call__ (__accu0__.append, __accu0__, __add__ ('‘{}’ → '.format (fsrcname), (function () {
/* 000564 */ 					var __accu1__ = ', ';
/* 000564 */ 					return __call__ (__accu1__.join, __accu1__, (function () {
/* 000564 */ 						var __accu2__ = [];
/* 000564 */ 						var __iterable1__ = featuredeps;
/* 000564 */ 						for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000564 */ 							var fdepname = __getitem__ (__iterable1__, __index1__);
/* 000564 */ 							(function () {
/* 000564 */ 								var __accu3__ = __accu2__;
/* 000564 */ 								return __call__ (__accu3__.append, __accu3__, '‘{}’'.format (fdepname));
/* 000564 */ 							}) ();
/* 000564 */ 						}
/* 000564 */ 						return __accu2__;
/* 000564 */ 					}) ());
/* 000564 */ 				}) ()));
/* 000564 */ 			}) ();
/* 000564 */ 		}
/* 000564 */ 	}
/* 000566 */ 	if (__t__ (__gt__ (__call__ (len, null, problematic_features), 0))) {
/* 000569 */ 		var __except0__ = __call__ (ValueError, null, __add__ ('The feature dependency graph has a cycle!  Problematic dependencies:'.format (), (function () {
/* 000569 */ 			var __accu0__ = '; ';
/* 000569 */ 			return __call__ (__accu0__.join, __accu0__, problematic_features);
/* 000569 */ 		}) ()));
/* 000569 */ 		__except0__.__cause__ = null;
/* 000569 */ 		throw __except0__;
/* 000569 */ 	}
/* 000572 */ 	if (__t__ (__ne__ (__call__ (len, null, sorted_features), __call__ (len, null, features_to_sort)))) {
/* 000573 */ 		var __except0__ = __call__ (RuntimeError, null, "Internal error, we didn't get all the features right when ordering them!");
/* 000573 */ 		__except0__.__cause__ = null;
/* 000573 */ 		throw __except0__;
/* 000573 */ 	}
/* 000577 */ 	return tuple ([sorted_features, features_by_name]);
/* 000577 */ };
/* 000606 */ export var FLMEnvironment =  __class__ ('FLMEnvironment', [object], {
/* 000606 */ 	__module__: __name__,
/* 000625 */ 	get __init__ () {return __get__ (this, function (self, features, parsing_state, latex_context) {
/* 000625 */ 		var tolerant_parsing = false;
/* 000625 */ 		var parsing_mode_deltas = null;
/* 000625 */ 		if (arguments.length) {
/* 000625 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000625 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000625 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000625 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000625 */ 					switch (__attrib0__) {
/* 000625 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000625 */ 						case 'features': var features = __allkwargs0__ [__attrib0__]; break;
/* 000625 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000625 */ 						case 'latex_context': var latex_context = __allkwargs0__ [__attrib0__]; break;
/* 000625 */ 						case 'tolerant_parsing': var tolerant_parsing = __allkwargs0__ [__attrib0__]; break;
/* 000625 */ 						case 'parsing_mode_deltas': var parsing_mode_deltas = __allkwargs0__ [__attrib0__]; break;
/* 000625 */ 					}
/* 000625 */ 				}
/* 000625 */ 			}
/* 000625 */ 		}
/* 000625 */ 		else {
/* 000625 */ 		}
/* 000634 */ 		__call__ (__call__ (__super__, null, FLMEnvironment, '__init__'), null, self);
/* 000636 */ 		// pass;
/* 000640 */ 		self.latex_context = latex_context;
/* 000641 */ 		self.parsing_state = parsing_state;
/* 000643 */ 		self.parsing_mode_deltas = (__t__ (parsing_mode_deltas) ? __call__ (dict, null, parsing_mode_deltas) : dict ({}));
/* 000645 */ 		var __left0__ = __call__ (features_sorted_by_dependencies, null, features);
/* 000645 */ 		self.features = __left0__ [0];
/* 000645 */ 		self.features_by_name = __left0__ [1];
/* 000647 */ 		// pass;
/* 000651 */ 		self.tolerant_parsing = tolerant_parsing;
/* 000653 */ 		self._node_list_finalizer = __call__ (NodeListFinalizer, null);
/* 000655 */ 		if (__t__ (self.parsing_state.latex_context === null)) {
/* 000658 */ 			var __iterable0__ = self.features;
/* 000658 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000658 */ 				var f = __getitem__ (__iterable0__, __index0__);
/* 000659 */ 				var moredefs = (function () {
/* 000659 */ 					var __accu0__ = f;
/* 000659 */ 					return __call__ (__accu0__.add_latex_context_definitions, __accu0__);
/* 000659 */ 				}) ();
/* 000660 */ 				// pass;
/* 000665 */ 				if (__t__ (moredefs !== null)) {
/* 000666 */ 					var moredefs = __call__ (dict, null, moredefs);
/* 000667 */ 					if (__t__ (__call__ (len, null, moredefs))) {
/* 000668 */ 						// pass;
/* 000671 */ 						(function () {
/* 000671 */ 							var __accu0__ = moredefs;
/* 000671 */ 							return __call__ (__accu0__.py_update, __accu0__, __call__ (dict, null, __kwargtrans__ ({prepend: true})));
/* 000671 */ 						}) ();
/* 000672 */ 						(function () {
/* 000672 */ 							var __accu0__ = self.latex_context;
/* 000672 */ 							return __call__ (__accu0__.add_context_category, __accu0__, 'feature--{}'.format (f.feature_name), __kwargtrans__ (moredefs));
/* 000672 */ 						}) ();
/* 000672 */ 					}
/* 000672 */ 				}
/* 000672 */ 			}
/* 000678 */ 			(function () {
/* 000678 */ 				var __accu0__ = self.latex_context;
/* 000678 */ 				return __call__ (__accu0__.freeze, __accu0__);
/* 000678 */ 			}) ();
/* 000681 */ 			self.parsing_state.latex_context = self.latex_context;
/* 000681 */ 		}
/* 000683 */ 		else if (__t__ (self.latex_context !== null)) {
/* 000686 */ 			var __except0__ = __call__ (RuntimeError, null, 'The specified `parsing_state` instance already has a latex_context set');
/* 000686 */ 			__except0__.__cause__ = null;
/* 000686 */ 			throw __except0__;
/* 000686 */ 		}
/* 000686 */ 	});},
/* 000691 */ 	get feature () {return __get__ (this, function (self, feature_name) {
/* 000691 */ 		if (arguments.length) {
/* 000691 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000691 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000691 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000691 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000691 */ 					switch (__attrib0__) {
/* 000691 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000691 */ 						case 'feature_name': var feature_name = __allkwargs0__ [__attrib0__]; break;
/* 000691 */ 					}
/* 000691 */ 				}
/* 000691 */ 			}
/* 000691 */ 		}
/* 000691 */ 		else {
/* 000691 */ 		}
/* 000692 */ 		return __getitem__ (self.features_by_name, feature_name);
/* 000692 */ 	});},
/* 000695 */ 	parsing_state_event_handler: null,
/* 000702 */ 	get make_latex_walker () {return __get__ (this, function (self, flm_text) {
/* 000702 */ 		var parsing_mode = null;
/* 000702 */ 		var resource_info = null;
/* 000702 */ 		var tolerant_parsing = null;
/* 000702 */ 		var what = null;
/* 000702 */ 		var input_lineno_colno_offsets = null;
/* 000702 */ 		if (arguments.length) {
/* 000702 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000702 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000702 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000702 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000702 */ 					switch (__attrib0__) {
/* 000702 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000702 */ 						case 'flm_text': var flm_text = __allkwargs0__ [__attrib0__]; break;
/* 000702 */ 						case 'standalone_mode': var standalone_mode = __allkwargs0__ [__attrib0__]; break;
/* 000702 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000702 */ 						case 'parsing_mode': var parsing_mode = __allkwargs0__ [__attrib0__]; break;
/* 000702 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000702 */ 						case 'tolerant_parsing': var tolerant_parsing = __allkwargs0__ [__attrib0__]; break;
/* 000702 */ 						case 'what': var what = __allkwargs0__ [__attrib0__]; break;
/* 000702 */ 						case 'input_lineno_colno_offsets': var input_lineno_colno_offsets = __allkwargs0__ [__attrib0__]; break;
/* 000702 */ 					}
/* 000702 */ 				}
/* 000702 */ 			}
/* 000702 */ 		}
/* 000702 */ 		else {
/* 000702 */ 		}
/* 000715 */ 		var default_parsing_state = (function () {
/* 000715 */ 			var __accu0__ = self;
/* 000715 */ 			return __call__ (__accu0__.make_parsing_state, __accu0__, __kwargtrans__ ({is_block_level: is_block_level, parsing_mode: parsing_mode}));
/* 000715 */ 		}) ();
/* 000720 */ 		if (__t__ (tolerant_parsing === null)) {
/* 000721 */ 			var tolerant_parsing = self.tolerant_parsing;
/* 000721 */ 		}
/* 000723 */ 		var latex_walker = __call__ (FLMLatexWalker, null, __kwargtrans__ ({flm_text: flm_text, default_parsing_state: default_parsing_state, tolerant_parsing: tolerant_parsing, flm_environment: self, standalone_mode: standalone_mode, resource_info: resource_info, what: what, parsing_state_event_handler: self.parsing_state_event_handler, input_lineno_colno_offsets: input_lineno_colno_offsets}));
/* 000737 */ 		return latex_walker;
/* 000737 */ 	});},
/* 000739 */ 	get make_parsing_state () {return __get__ (this, function (self, is_block_level, parsing_mode) {
/* 000739 */ 		if (typeof parsing_mode == 'undefined' || (parsing_mode != null && parsing_mode.hasOwnProperty ("__kwargtrans__"))) {;
/* 000739 */ 			var parsing_mode = null;
/* 000739 */ 		};
/* 000739 */ 		if (arguments.length) {
/* 000739 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000739 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000739 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000739 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000739 */ 					switch (__attrib0__) {
/* 000739 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000739 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000739 */ 						case 'parsing_mode': var parsing_mode = __allkwargs0__ [__attrib0__]; break;
/* 000739 */ 					}
/* 000739 */ 				}
/* 000739 */ 			}
/* 000739 */ 		}
/* 000739 */ 		else {
/* 000739 */ 		}
/* 000743 */ 		var default_parsing_state = self.parsing_state;
/* 000745 */ 		if (__t__ (parsing_mode !== null)) {
/* 000746 */ 			try {
/* 000747 */ 				var parsing_state_delta = __getitem__ (self.parsing_mode_deltas, parsing_mode);
/* 000747 */ 			}
/* 000747 */ 			catch (__except0__) {
/* 000747 */ 				if (isinstance (__except0__, KeyError)) {
/* 000747 */ 					var e = __except0__;
/* 000749 */ 					var __except1__ = __call__ (ValueError, null, 'Invalid parsing_mode ‘{}’'.format (parsing_mode));
/* 000749 */ 					__except1__.__cause__ = null;
/* 000749 */ 					throw __except1__;
/* 000749 */ 				}
/* 000749 */ 				else {
/* 000749 */ 					throw __except0__;
/* 000749 */ 				}
/* 000749 */ 			}
/* 000751 */ 			if (__t__ (parsing_state_delta !== null)) {
/* 000752 */ 				var default_parsing_state = (function () {
/* 000752 */ 					var __accu0__ = parsing_state_delta;
/* 000752 */ 					return __call__ (__accu0__.get_updated_parsing_state, __accu0__, default_parsing_state, __kwargtrans__ ({latex_walker: null}));
/* 000752 */ 				}) ();
/* 000752 */ 			}
/* 000752 */ 		}
/* 000757 */ 		var kwargs = dict ({});
/* 000758 */ 		if (__t__ (is_block_level !== null)) {
/* 000759 */ 			__setitem__ (kwargs, 'is_block_level', is_block_level);
/* 000759 */ 		}
/* 000761 */ 		return (function () {
/* 000761 */ 			var __accu0__ = default_parsing_state;
/* 000761 */ 			return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ (kwargs));
/* 000761 */ 		}) ();
/* 000761 */ 	});},
/* 000764 */ 	get make_fragment () {return __get__ (this, function (self, flm_text) {
/* 000764 */ 		var kwargs = dict ();
/* 000764 */ 		if (arguments.length) {
/* 000764 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000764 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000764 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000764 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000764 */ 					switch (__attrib0__) {
/* 000764 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000764 */ 						case 'flm_text': var flm_text = __allkwargs0__ [__attrib0__]; break;
/* 000764 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000764 */ 					}
/* 000764 */ 				}
/* 000764 */ 				delete kwargs.__kwargtrans__;
/* 000764 */ 			}
/* 000764 */ 		}
/* 000764 */ 		else {
/* 000764 */ 		}
/* 000766 */ 		if (__t__ (__call__ (isinstance, null, flm_text, FLMFragment))) {
/* 000767 */ 			var frag = flm_text;
/* 000768 */ 			var __iterable0__ = tuple (['is_block_level', 'standalone_mode']);
/* 000768 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000768 */ 				var fld = __getitem__ (__iterable0__, __index0__);
/* 000770 */ 				if (__t__ (__t__ (__in__ (fld, kwargs)) && __t__ (__getitem__ (kwargs, fld) !== null) && __ne__ (__getitem__ (kwargs, fld), __call__ (getattr, null, frag, fld)))) {
/* 000774 */ 					var __except0__ = __call__ (ValueError, null, 'make_fragment(): FLMFragment instance specified but its ‘{}’ ({}) differs with requested ‘{}’ ({})'.format (fld, __call__ (repr, null, __call__ (getattr, null, frag, fld)), fld, __getitem__ (kwargs, fld)));
/* 000774 */ 					__except0__.__cause__ = null;
/* 000774 */ 					throw __except0__;
/* 000774 */ 				}
/* 000774 */ 			}
/* 000777 */ 			return frag;
/* 000777 */ 		}
/* 000779 */ 		try {
/* 000780 */ 			var fragment = __call__ (FLMFragment, null, flm_text, __kwargtrans__ (__mergekwargtrans__ ({environment: self}, kwargs)));
/* 000781 */ 			return fragment;
/* 000781 */ 		}
/* 000781 */ 		catch (__except0__) {
/* 000783 */ 			if (__t__ (!__t__ (((function () {
/* 000783 */ 				var __accu0__ = kwargs;
/* 000783 */ 				return __call__ (__accu0__.py_get, __accu0__, 'silent', false);
/* 000783 */ 			}) ())))) {
/* 000784 */ 				(function () {
/* 000784 */ 					var __accu0__ = logger;
/* 000785 */ 					return __call__ (__accu0__.error, __accu0__, (function () {
/* 000785 */ 						var __accu1__ = 'Error compiling fragment for {}\nContent was:\n‘{}’\n';
/* 000786 */ 						return __call__ (__accu1__.format, __accu1__, (function () {
/* 000786 */ 							var __accu2__ = kwargs;
/* 000786 */ 							return __call__ (__accu2__.py_get, __accu2__, 'what', '(unknown)');
/* 000786 */ 						}) (), flm_text);
/* 000786 */ 					}) (), __kwargtrans__ ({exc_info: true}));
/* 000786 */ 				}) ();
/* 000786 */ 			}
/* 000789 */ 			__except0__.__cause__ = null;
/* 000789 */ 			throw __except0__;
/* 000789 */ 		}
/* 000789 */ 	});},
/* 000796 */ 	get make_document () {return __get__ (this, function (self, render_callback) {
/* 000796 */ 		var kwargs = dict ();
/* 000796 */ 		if (arguments.length) {
/* 000796 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000796 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000796 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000796 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000796 */ 					switch (__attrib0__) {
/* 000796 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000796 */ 						case 'render_callback': var render_callback = __allkwargs0__ [__attrib0__]; break;
/* 000796 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000796 */ 					}
/* 000796 */ 				}
/* 000796 */ 				delete kwargs.__kwargtrans__;
/* 000796 */ 			}
/* 000796 */ 		}
/* 000796 */ 		else {
/* 000796 */ 		}
/* 000805 */ 		var doc = __call__ (FLMDocument, null, render_callback, __kwargtrans__ (__mergekwargtrans__ ({environment: self}, kwargs)));
/* 000810 */ 		(function () {
/* 000810 */ 			var __accu0__ = doc;
/* 000810 */ 			return __call__ (__accu0__.initialize, __accu0__);
/* 000810 */ 		}) ();
/* 000811 */ 		return doc;
/* 000811 */ 	});},
/* 000814 */ 	get get_features_selection () {return __get__ (this, function (self, enable_features) {
/* 000814 */ 		if (arguments.length) {
/* 000814 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000814 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000814 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000814 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000814 */ 					switch (__attrib0__) {
/* 000814 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000814 */ 						case 'enable_features': var enable_features = __allkwargs0__ [__attrib0__]; break;
/* 000814 */ 					}
/* 000814 */ 				}
/* 000814 */ 			}
/* 000814 */ 		}
/* 000814 */ 		else {
/* 000814 */ 		}
/* 000816 */ 		if (__t__ (enable_features === null)) {
/* 000818 */ 			return self.features;
/* 000818 */ 		}
/* 000820 */ 		var features = (function () {
/* 000820 */ 			var __accu0__ = [];
/* 000820 */ 			var __iterable0__ = enable_features;
/* 000820 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000822 */ 				var feature_name = __getitem__ (__iterable0__, __index0__);
/* 000822 */ 				(function () {
/* 000822 */ 					var __accu1__ = __accu0__;
/* 000822 */ 					return __call__ (__accu1__.append, __accu1__, __getitem__ (self.features_by_name, feature_name));
/* 000822 */ 				}) ();
/* 000822 */ 			}
/* 000822 */ 			return __accu0__;
/* 000822 */ 		}) ();
/* 000826 */ 		__call__ (features_ensure_dependencies_are_met, null, features);
/* 000828 */ 		return features;
/* 000828 */ 	});},
/* 000833 */ 	environment_get_located_error_message: null,
/* 000835 */ 	get get_located_error_message () {return __get__ (this, function (self, exception_object) {
/* 000835 */ 		if (arguments.length) {
/* 000835 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000835 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000835 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000835 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000835 */ 					switch (__attrib0__) {
/* 000835 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000835 */ 						case 'exception_object': var exception_object = __allkwargs0__ [__attrib0__]; break;
/* 000835 */ 					}
/* 000835 */ 				}
/* 000835 */ 			}
/* 000835 */ 		}
/* 000835 */ 		else {
/* 000835 */ 		}
/* 000836 */ 		if (__t__ (self.environment_get_located_error_message !== null)) {
/* 000837 */ 			return (function () {
/* 000837 */ 				var __accu0__ = self;
/* 000837 */ 				return __call__ (__accu0__.environment_get_located_error_message, __accu0__, exception_object);
/* 000837 */ 			}) ();
/* 000837 */ 		}
/* 000838 */ 		return (function () {
/* 000838 */ 			var __accu0__ = __call__ (LatexWalkerLocatedErrorFormatter, null, exception_object);
/* 000838 */ 			return __call__ (__accu0__.to_display_string, __accu0__);
/* 000838 */ 		}) ();
/* 000838 */ 	});},
/* 000842 */ 	get finalize_nodelist () {return __get__ (this, function (self, nodelist) {
/* 000842 */ 		if (arguments.length) {
/* 000842 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000842 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000842 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000842 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000842 */ 					switch (__attrib0__) {
/* 000842 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000842 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000842 */ 					}
/* 000842 */ 				}
/* 000842 */ 			}
/* 000842 */ 		}
/* 000842 */ 		else {
/* 000842 */ 		}
/* 000843 */ 		var nl = (function () {
/* 000843 */ 			var __accu0__ = self._node_list_finalizer;
/* 000843 */ 			return __call__ (__accu0__.finalize_nodelist, __accu0__, nodelist);
/* 000843 */ 		}) ();
/* 000844 */ 		return nl;
/* 000844 */ 	});},
/* 000846 */ 	get finalize_node () {return __get__ (this, function (self, node) {
/* 000846 */ 		if (arguments.length) {
/* 000846 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000846 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000846 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000846 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000846 */ 					switch (__attrib0__) {
/* 000846 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000846 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000846 */ 					}
/* 000846 */ 				}
/* 000846 */ 			}
/* 000846 */ 		}
/* 000846 */ 		else {
/* 000846 */ 		}
/* 000851 */ 		node._flm_node_id = __call__ (fn_unique_object_id, null, node);
/* 000852 */ 		return node;
/* 000852 */ 	});}
/* 000852 */ });
/* 000860 */ export var standard_parsing_state = function () {
/* 000860 */ 	var force_block_level = null;
/* 000860 */ 	var enable_comments = true;
/* 000860 */ 	var comment_start = '%%';
/* 000860 */ 	var extra_forbidden_characters = '';
/* 000860 */ 	var dollar_inline_math_mode = false;
/* 000860 */ 	if (arguments.length) {
/* 000860 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000860 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000860 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000860 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000860 */ 				switch (__attrib0__) {
/* 000860 */ 					case 'force_block_level': var force_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000860 */ 					case 'enable_comments': var enable_comments = __allkwargs0__ [__attrib0__]; break;
/* 000860 */ 					case 'comment_start': var comment_start = __allkwargs0__ [__attrib0__]; break;
/* 000860 */ 					case 'extra_forbidden_characters': var extra_forbidden_characters = __allkwargs0__ [__attrib0__]; break;
/* 000860 */ 					case 'dollar_inline_math_mode': var dollar_inline_math_mode = __allkwargs0__ [__attrib0__]; break;
/* 000860 */ 				}
/* 000860 */ 			}
/* 000860 */ 		}
/* 000860 */ 	}
/* 000860 */ 	else {
/* 000860 */ 	}
/* 000876 */ 	var forbidden_characters = __call__ (str, null, extra_forbidden_characters);
/* 000877 */ 	if (__t__ (__t__ (!__t__ ((dollar_inline_math_mode))) && !__in__ ('$', forbidden_characters))) {
/* 000878 */ 		var forbidden_characters = __call__ (__iadd__, null, forbidden_characters, '$');
/* 000878 */ 	}
/* 000879 */ 	if (__t__ (__t__ ((__t__ (!__t__ ((enable_comments))) || __ne__ (comment_start, '%'))) && !__in__ ('%', forbidden_characters))) {
/* 000881 */ 		var forbidden_characters = __call__ (__iadd__, null, forbidden_characters, '%');
/* 000881 */ 	}
/* 000883 */ 	var latex_inline_math_delimiters = [tuple (['\\(', '\\)'])];
/* 000885 */ 	if (__t__ (dollar_inline_math_mode)) {
/* 000886 */ 		(function () {
/* 000886 */ 			var __accu0__ = latex_inline_math_delimiters;
/* 000886 */ 			return __call__ (__accu0__.append, __accu0__, tuple (['$', '$']));
/* 000886 */ 		}) ();
/* 000886 */ 	}
/* 000888 */ 	return __call__ (FLMParsingState, null, __kwargtrans__ ({is_block_level: force_block_level, latex_context: null, enable_comments: enable_comments, comment_start: comment_start, latex_inline_math_delimiters: latex_inline_math_delimiters, latex_display_math_delimiters: [tuple (['\\[', '\\]'])], forbidden_characters: forbidden_characters}));
/* 000888 */ };
/* 000900 */ export var FLMLatexWalkerMathContextParsingStateEventHandler =  __class__ ('FLMLatexWalkerMathContextParsingStateEventHandler', [latexnodes.LatexWalkerParsingStateEventHandler], {
/* 000900 */ 	__module__: __name__,
/* 000929 */ 	math_mode_extend_context: dict ({'unknown_macro_spec': (function () {
/* 000929 */ 		var __accu0__ = macrospec;
/* 000929 */ 		return __call__ (__accu0__.MacroSpec, __accu0__, '');
/* 000930 */ 	}) (), 'unknown_environment_spec': (function () {
/* 000930 */ 		var __accu0__ = macrospec;
/* 000930 */ 		return __call__ (__accu0__.EnvironmentSpec, __accu0__, '');
/* 000931 */ 	}) (), 'unknown_specials_spec': (function () {
/* 000931 */ 		var __accu0__ = macrospec;
/* 000931 */ 		return __call__ (__accu0__.SpecialsSpec, __accu0__, '');
/* 000928 */ 	}) ()}),
/* 000934 */ 	get enter_math_mode () {return __get__ (this, function (self, math_mode_delimiter, trigger_token) {
/* 000934 */ 		if (typeof math_mode_delimiter == 'undefined' || (math_mode_delimiter != null && math_mode_delimiter.hasOwnProperty ("__kwargtrans__"))) {;
/* 000934 */ 			var math_mode_delimiter = null;
/* 000934 */ 		};
/* 000934 */ 		if (typeof trigger_token == 'undefined' || (trigger_token != null && trigger_token.hasOwnProperty ("__kwargtrans__"))) {;
/* 000934 */ 			var trigger_token = null;
/* 000934 */ 		};
/* 000934 */ 		if (arguments.length) {
/* 000934 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000934 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000934 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000934 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000934 */ 					switch (__attrib0__) {
/* 000934 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000934 */ 						case 'math_mode_delimiter': var math_mode_delimiter = __allkwargs0__ [__attrib0__]; break;
/* 000934 */ 						case 'trigger_token': var trigger_token = __allkwargs0__ [__attrib0__]; break;
/* 000934 */ 					}
/* 000934 */ 				}
/* 000934 */ 			}
/* 000934 */ 		}
/* 000934 */ 		else {
/* 000934 */ 		}
/* 000940 */ 		var set_attributes = __call__ (dict, null, __kwargtrans__ ({in_math_mode: true, math_mode_delimiter: math_mode_delimiter}));
/* 000944 */ 		// pass;
/* 000949 */ 		return (function () {
/* 000949 */ 			var __accu0__ = macrospec;
/* 000949 */ 			return __call__ (__accu0__.ParsingStateDeltaExtendLatexContextDb, __accu0__, __kwargtrans__ ({set_attributes: set_attributes, extend_latex_context: self.math_mode_extend_context}));
/* 000949 */ 		}) ();
/* 000949 */ 	});},
/* 000954 */ 	get leave_math_mode () {return __get__ (this, function (self, trigger_token) {
/* 000954 */ 		if (typeof trigger_token == 'undefined' || (trigger_token != null && trigger_token.hasOwnProperty ("__kwargtrans__"))) {;
/* 000954 */ 			var trigger_token = null;
/* 000954 */ 		};
/* 000954 */ 		if (arguments.length) {
/* 000954 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000954 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000954 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000954 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000954 */ 					switch (__attrib0__) {
/* 000954 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000954 */ 						case 'trigger_token': var trigger_token = __allkwargs0__ [__attrib0__]; break;
/* 000954 */ 					}
/* 000954 */ 				}
/* 000954 */ 			}
/* 000954 */ 		}
/* 000954 */ 		else {
/* 000954 */ 		}
/* 000961 */ 		return (function () {
/* 000961 */ 			var __accu0__ = macrospec;
/* 000966 */ 			return __call__ (__accu0__.ParsingStateDeltaExtendLatexContextDb, __accu0__, __kwargtrans__ ({set_attributes: __call__ (dict, null, __kwargtrans__ ({in_math_mode: false, math_mode_delimiter: null})), extend_latex_context: __call__ (dict, null, __kwargtrans__ ({unknown_macro_spec: null, unknown_environment_spec: null, unknown_specials_spec: null}))}));
/* 000966 */ 		}) ();
/* 000966 */ 	});}
/* 000966 */ });
/* 000977 */ export var standard_environment_get_located_error_message = function (exception_object) {
/* 000977 */ 	if (arguments.length) {
/* 000977 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000977 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000977 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000977 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000977 */ 				switch (__attrib0__) {
/* 000977 */ 					case 'exception_object': var exception_object = __allkwargs0__ [__attrib0__]; break;
/* 000977 */ 				}
/* 000977 */ 			}
/* 000977 */ 		}
/* 000977 */ 	}
/* 000977 */ 	else {
/* 000977 */ 	}
/* 001001 */ 	var msg = null;
/* 001002 */ 	var error_type_info = exception_object.error_type_info;
/* 001003 */ 	if (__t__ (error_type_info)) {
/* 001004 */ 		var what = __getitem__ (error_type_info, 'what');
/* 001005 */ 		if (__t__ (__eq__ (what, 'token_forbidden_character'))) {
/* 001006 */ 			if (__t__ (__eq__ (__getitem__ (error_type_info, 'forbidden_character'), '%'))) {
/* 001007 */ 				var msg = 'Single percent signs are not allowed here. Use ‘\\%’ to typeset a literal percent sign, and ‘%%’ to start a comment.';
/* 001007 */ 			}
/* 001011 */ 			else if (__t__ (__eq__ (__getitem__ (error_type_info, 'forbidden_character'), '$'))) {
/* 001012 */ 				var msg = "You can't use ‘$’ here. LaTeX math should be typeset using \\(...\\) for inline math and \\[...\\] for unnumbered display equations. Use ‘\\$’ for a literal dollar sign.";
/* 001012 */ 			}
/* 001012 */ 		}
/* 001012 */ 	}
/* 001017 */ 	if (__t__ (!__t__ ((msg)))) {
/* 001018 */ 		var msg = exception_object.msg;
/* 001018 */ 	}
/* 001020 */ 	var errfmt = (function () {
/* 001020 */ 		var __accu0__ = latexnodes;
/* 001020 */ 		return __call__ (__accu0__.LatexWalkerLocatedErrorFormatter, __accu0__, exception_object);
/* 001020 */ 	}) ();
/* 001022 */ 	var msg = __call__ (__iadd__, null, msg, (function () {
/* 001022 */ 		var __accu0__ = errfmt;
/* 001022 */ 		return __call__ (__accu0__.format_full_traceback, __accu0__);
/* 001022 */ 	}) ());
/* 001024 */ 	return msg;
/* 001024 */ };
/* 001031 */ export var make_standard_environment = function (features, parsing_state, latex_context, flm_environment_options, parsing_state_options) {
/* 001031 */ 	if (typeof parsing_state == 'undefined' || (parsing_state != null && parsing_state.hasOwnProperty ("__kwargtrans__"))) {;
/* 001031 */ 		var parsing_state = null;
/* 001031 */ 	};
/* 001031 */ 	if (typeof latex_context == 'undefined' || (latex_context != null && latex_context.hasOwnProperty ("__kwargtrans__"))) {;
/* 001031 */ 		var latex_context = null;
/* 001031 */ 	};
/* 001031 */ 	if (typeof flm_environment_options == 'undefined' || (flm_environment_options != null && flm_environment_options.hasOwnProperty ("__kwargtrans__"))) {;
/* 001031 */ 		var flm_environment_options = null;
/* 001031 */ 	};
/* 001031 */ 	if (typeof parsing_state_options == 'undefined' || (parsing_state_options != null && parsing_state_options.hasOwnProperty ("__kwargtrans__"))) {;
/* 001031 */ 		var parsing_state_options = null;
/* 001031 */ 	};
/* 001031 */ 	if (arguments.length) {
/* 001031 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001031 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001031 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001031 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001031 */ 				switch (__attrib0__) {
/* 001031 */ 					case 'features': var features = __allkwargs0__ [__attrib0__]; break;
/* 001031 */ 					case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 001031 */ 					case 'latex_context': var latex_context = __allkwargs0__ [__attrib0__]; break;
/* 001031 */ 					case 'flm_environment_options': var flm_environment_options = __allkwargs0__ [__attrib0__]; break;
/* 001031 */ 					case 'parsing_state_options': var parsing_state_options = __allkwargs0__ [__attrib0__]; break;
/* 001031 */ 				}
/* 001031 */ 			}
/* 001031 */ 		}
/* 001031 */ 	}
/* 001031 */ 	else {
/* 001031 */ 	}
/* 001035 */ 	if (__t__ (latex_context === null)) {
/* 001036 */ 		var latex_context = (function () {
/* 001036 */ 			var __accu0__ = macrospec;
/* 001036 */ 			return __call__ (__accu0__.LatexContextDb, __accu0__);
/* 001036 */ 		}) ();
/* 001036 */ 	}
/* 001038 */ 	if (__t__ (parsing_state === null)) {
/* 001039 */ 		var parsing_state_options_2 = dict ({});
/* 001040 */ 		if (__t__ (parsing_state_options !== null)) {
/* 001041 */ 			var parsing_state_options_2 = parsing_state_options;
/* 001041 */ 		}
/* 001043 */ 		var parsing_state = __call__ (standard_parsing_state, null, __kwargtrans__ (parsing_state_options_2));
/* 001043 */ 	}
/* 001045 */ 	var parsing_state_event_handler = __call__ (FLMLatexWalkerMathContextParsingStateEventHandler, null);
/* 001047 */ 	var flm_environment_options_2 = dict ({});
/* 001048 */ 	if (__t__ (flm_environment_options !== null)) {
/* 001049 */ 		var flm_environment_options_2 = flm_environment_options;
/* 001049 */ 	}
/* 001051 */ 	var environment = __call__ (FLMEnvironment, null, features, parsing_state, latex_context, __kwargtrans__ (flm_environment_options_2));
/* 001058 */ 	environment.parsing_state_event_handler = parsing_state_event_handler;
/* 001060 */ 	environment.environment_get_located_error_message = standard_environment_get_located_error_message;
/* 001063 */ 	return environment;
/* 001063 */ };
/* 001077 */ export var _make_argvalue = function (argvalue, latex_walker, parsing_state) {
/* 001077 */ 	if (arguments.length) {
/* 001077 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001077 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001077 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001077 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001077 */ 				switch (__attrib0__) {
/* 001077 */ 					case 'argvalue': var argvalue = __allkwargs0__ [__attrib0__]; break;
/* 001077 */ 					case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 001077 */ 					case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 001077 */ 				}
/* 001077 */ 			}
/* 001077 */ 		}
/* 001077 */ 	}
/* 001077 */ 	else {
/* 001077 */ 	}
/* 001079 */ 	if (__t__ (argvalue === null)) {
/* 001080 */ 		return null;
/* 001080 */ 	}
/* 001082 */ 	if (__t__ (__call__ (isinstance, null, argvalue, str))) {
/* 001083 */ 		var argvalue = (function () {
/* 001083 */ 			var __accu0__ = latex_walker;
/* 001083 */ 			return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: argvalue, pos: null, pos_end: null, parsing_state: parsing_state}));
/* 001083 */ 		}) ();
/* 001083 */ 	}
/* 001091 */ 	if (__t__ (__call__ (isinstance, null, argvalue, latexnodes_nodes.LatexGroupNode))) {
/* 001092 */ 		return argvalue;
/* 001092 */ 	}
/* 001096 */ 	if (__t__ (__call__ (isinstance, null, argvalue, latexnodes_nodes.LatexNodeList))) {
/* 001097 */ 		var nodelist = argvalue;
/* 001097 */ 	}
/* 001099 */ 	else if (__t__ (__call__ (isinstance, null, argvalue, list))) {
/* 001100 */ 		var nodelist = (function () {
/* 001100 */ 			var __accu0__ = latex_walker;
/* 001100 */ 			return __call__ (__accu0__.make_nodelist, __accu0__, argvalue, __kwargtrans__ ({parsing_state: parsing_state}));
/* 001100 */ 		}) ();
/* 001100 */ 	}
/* 001103 */ 	else {
/* 001106 */ 		var nodelist = (function () {
/* 001106 */ 			var __accu0__ = latex_walker;
/* 001106 */ 			return __call__ (__accu0__.make_nodelist, __accu0__, [argvalue], __kwargtrans__ ({parsing_state: parsing_state}));
/* 001106 */ 		}) ();
/* 001106 */ 	}
/* 001111 */ 	var groupnode = (function () {
/* 001111 */ 		var __accu0__ = latex_walker;
/* 001111 */ 		return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexGroupNode, __kwargtrans__ ({delimiters: tuple (['', '']), nodelist: nodelist, pos: nodelist.pos, pos_end: nodelist.pos_end, parsing_state: parsing_state}));
/* 001111 */ 	}) ();
/* 001120 */ 	return groupnode;
/* 001120 */ };
/* 001123 */ export var make_invocable_arguments = function (flm_spec, args) {
/* 001123 */ 	if (arguments.length) {
/* 001123 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001123 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001123 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001123 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001123 */ 				switch (__attrib0__) {
/* 001123 */ 					case 'flm_spec': var flm_spec = __allkwargs0__ [__attrib0__]; break;
/* 001123 */ 					case 'args': var args = __allkwargs0__ [__attrib0__]; break;
/* 001123 */ 					case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 001123 */ 					case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 001123 */ 				}
/* 001123 */ 			}
/* 001123 */ 		}
/* 001123 */ 	}
/* 001123 */ 	else {
/* 001123 */ 	}
/* 001125 */ 	var argnlist = (function () {
/* 001125 */ 		var __accu0__ = [];
/* 001125 */ 		var __iterable0__ = flm_spec.arguments_spec_list;
/* 001125 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001125 */ 			var _ = __getitem__ (__iterable0__, __index0__);
/* 001125 */ 			(function () {
/* 001125 */ 				var __accu1__ = __accu0__;
/* 001125 */ 				return __call__ (__accu1__.append, __accu1__, null);
/* 001125 */ 			}) ();
/* 001125 */ 		}
/* 001125 */ 		return __accu0__;
/* 001125 */ 	}) ();
/* 001127 */ 	if (__t__ (args === null)) {
/* 001128 */ 		return argnlist;
/* 001128 */ 	}
/* 001130 */ 	var __iterable0__ = (function () {
/* 001130 */ 		var __accu0__ = args;
/* 001130 */ 		return __call__ (__accu0__.py_items, __accu0__);
/* 001130 */ 	}) ();
/* 001130 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001130 */ 		var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 001130 */ 		var argname = __left0__ [0];
/* 001130 */ 		var argvalue = __left0__ [1];
/* 001132 */ 		var argj = null;
/* 001133 */ 		var __iterable1__ = __call__ (enumerate, null, flm_spec.arguments_spec_list);
/* 001133 */ 		for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 001133 */ 			var __left0__ = __getitem__ (__iterable1__, __index1__);
/* 001133 */ 			var candidateargj = __left0__ [0];
/* 001133 */ 			var candidateargspec = __left0__ [1];
/* 001134 */ 			if (__t__ (__eq__ (candidateargspec.argname, argname))) {
/* 001135 */ 				var argj = candidateargj;
/* 001135 */ 				break;
/* 001135 */ 			}
/* 001135 */ 		}
/* 001137 */ 		if (__t__ (argj === null)) {
/* 001138 */ 			(function () {
/* 001138 */ 				var __accu0__ = logger;
/* 001138 */ 				return __call__ (__accu0__.error, __accu0__, 'Cannot find argument %r in spec %r', argname, flm_spec.arguments_spec_list);
/* 001138 */ 			}) ();
/* 001140 */ 			var __except0__ = __call__ (ValueError, null, 'No argument named ‘{}’ in spec'.format (argname));
/* 001140 */ 			__except0__.__cause__ = null;
/* 001140 */ 			throw __except0__;
/* 001140 */ 		}
/* 001143 */ 		__setitem__ (argnlist, argj, __call__ (_make_argvalue, null, argvalue, latex_walker, parsing_state));
/* 001143 */ 	}
/* 001145 */ 	return argnlist;
/* 001145 */ };
/* 001148 */ export var make_invocable_node_instance = function (node_type, flm_spec) {
/* 001148 */ 	var args = null;
/* 001148 */ 	var body_nodelist = null;
/* 001148 */ 	var node_kwargs = null;
/* 001148 */ 	if (arguments.length) {
/* 001148 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001148 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001148 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001148 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001148 */ 				switch (__attrib0__) {
/* 001148 */ 					case 'node_type': var node_type = __allkwargs0__ [__attrib0__]; break;
/* 001148 */ 					case 'flm_spec': var flm_spec = __allkwargs0__ [__attrib0__]; break;
/* 001148 */ 					case 'args': var args = __allkwargs0__ [__attrib0__]; break;
/* 001148 */ 					case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 001148 */ 					case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 001148 */ 					case 'body_nodelist': var body_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 001148 */ 					case 'node_kwargs': var node_kwargs = __allkwargs0__ [__attrib0__]; break;
/* 001148 */ 				}
/* 001148 */ 			}
/* 001148 */ 		}
/* 001148 */ 	}
/* 001148 */ 	else {
/* 001148 */ 	}
/* 001155 */ 	var nkwargs = dict ({'pos': null, 'pos_end': null});
/* 001160 */ 	if (__t__ (node_type === latexnodes_nodes.LatexMacroNode)) {
/* 001161 */ 		__setitem__ (nkwargs, 'macroname', flm_spec.macroname);
/* 001162 */ 		if (__t__ (body_nodelist !== null)) {
/* 001163 */ 			var __except0__ = __call__ (ValueError, null, 'For a LatexMacroNode you must have body_nodelist=None');
/* 001163 */ 			__except0__.__cause__ = null;
/* 001163 */ 			throw __except0__;
/* 001163 */ 		}
/* 001163 */ 	}
/* 001165 */ 	else if (__t__ (node_type === latexnodes_nodes.LatexEnvironmentNode)) {
/* 001166 */ 		__setitem__ (nkwargs, 'environmentname', flm_spec.environmentname);
/* 001166 */ 	}
/* 001168 */ 	else if (__t__ (node_type === latexnodes_nodes.LatexSpecialsNode)) {
/* 001169 */ 		__setitem__ (nkwargs, 'specials_chars', flm_spec.specials_chars);
/* 001170 */ 		if (__t__ (body_nodelist !== null)) {
/* 001171 */ 			var __except0__ = __call__ (ValueError, null, 'For a LatexSpecialsNode you must have body_nodelist=None');
/* 001171 */ 			__except0__.__cause__ = null;
/* 001171 */ 			throw __except0__;
/* 001171 */ 		}
/* 001171 */ 	}
/* 001173 */ 	var argnlist = __call__ (make_invocable_arguments, null, flm_spec, args, __kwargtrans__ ({latex_walker: latex_walker, parsing_state: parsing_state}));
/* 001177 */ 	var nodeargd = (function () {
/* 001177 */ 		var __accu0__ = latexnodes_nodes;
/* 001177 */ 		return __call__ (__accu0__.ParsedArguments, __accu0__, __kwargtrans__ ({argnlist: argnlist, arguments_spec_list: flm_spec.arguments_spec_list}));
/* 001177 */ 	}) ();
/* 001182 */ 	if (__t__ (body_nodelist !== null)) {
/* 001183 */ 		__setitem__ (nkwargs, 'nodelist', body_nodelist);
/* 001183 */ 	}
/* 001185 */ 	if (__t__ (node_kwargs !== null)) {
/* 001186 */ 		(function () {
/* 001186 */ 			var __accu0__ = nkwargs;
/* 001186 */ 			return __call__ (__accu0__.py_update, __accu0__, node_kwargs);
/* 001186 */ 		}) ();
/* 001186 */ 	}
/* 001188 */ 	var node = (function () {
/* 001188 */ 		var __accu0__ = latex_walker;
/* 001188 */ 		return __call__ (__accu0__.make_node, __accu0__, node_type, __kwargtrans__ (__mergekwargtrans__ ({spec: flm_spec, nodeargd: nodeargd, parsing_state: parsing_state}, nkwargs)));
/* 001188 */ 	}) ();
/* 001196 */ 	var node = (function () {
/* 001196 */ 		var __accu0__ = flm_spec;
/* 001196 */ 		return __call__ (__accu0__.finalize_node, __accu0__, node);
/* 001196 */ 	}) ();
/* 001198 */ 	return node;
/* 001198 */ };
/* 000006 */ 
//# sourceMappingURL=flm.flmenvironment.map