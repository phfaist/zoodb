/* 000001 */ // Transcrypt'ed from Python, 2025-02-16 00:46:20
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
/* 000006 */ export {LatexWalkerParseError, FLMFragment, FLMDocument, macrospec, LatexWalkerLocatedErrorFormatter, latexwalker, latexnodes_nodes, latexnodes};
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
/* 000079 */ export var FLMArgumentSpec = function (parser, argname, is_block_level, flm_doc, parsing_state_delta) {
/* 000079 */ 	if (typeof is_block_level == 'undefined' || (is_block_level != null && is_block_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000079 */ 		var is_block_level = false;
/* 000079 */ 	};
/* 000079 */ 	if (typeof flm_doc == 'undefined' || (flm_doc != null && flm_doc.hasOwnProperty ("__kwargtrans__"))) {;
/* 000079 */ 		var flm_doc = null;
/* 000079 */ 	};
/* 000079 */ 	if (typeof parsing_state_delta == 'undefined' || (parsing_state_delta != null && parsing_state_delta.hasOwnProperty ("__kwargtrans__"))) {;
/* 000079 */ 		var parsing_state_delta = null;
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
/* 000079 */ 					case 'parsing_state_delta': var parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000079 */ 				}
/* 000079 */ 			}
/* 000079 */ 		}
/* 000079 */ 	}
/* 000079 */ 	else {
/* 000079 */ 	}
/* 000087 */ 	if (__t__ (parsing_state_delta === null)) {
/* 000088 */ 		if (__t__ (is_block_level !== null)) {
/* 000089 */ 			var parsing_state_delta = __call__ (FLMParsingStateDeltaSetBlockLevel, null, __kwargtrans__ ({is_block_level: is_block_level}));
/* 000089 */ 		}
/* 000089 */ 	}
/* 000094 */ 	else if (__t__ (__t__ (is_block_level !== null) && __ne__ ((function () {
/* 000094 */ 		var __accu0__ = parsing_state_delta.set_attributes;
/* 000094 */ 		return __call__ (__accu0__.py_get, __accu0__, 'is_block_level', null);
/* 000094 */ 	}) (), is_block_level))) {
/* 000095 */ 		var __except0__ = __call__ (ValueError, null, "You specified a parsing_state_delta= to FLMArgumentSpec(...) which might not be compatible with the provided is_block_level= arg. It's your responsibility to make sure is_block_level is correctly applied in the parsing state delta you provided, and you should set is_block_level=None here.");
/* 000095 */ 		__except0__.__cause__ = null;
/* 000095 */ 		throw __except0__;
/* 000095 */ 	}
/* 000103 */ 	var arg = (function () {
/* 000103 */ 		var __accu0__ = latexnodes;
/* 000103 */ 		return __call__ (__accu0__.LatexArgumentSpec, __accu0__, __kwargtrans__ ({parser: parser, argname: argname, parsing_state_delta: parsing_state_delta}));
/* 000103 */ 	}) ();
/* 000108 */ 	arg._flm_doc = flm_doc;
/* 000109 */ 	return arg;
/* 000109 */ };
/* 000114 */ export var _clone_flm_node = function (node) {
/* 000114 */ 	if (arguments.length) {
/* 000114 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000114 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000114 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000114 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000114 */ 				switch (__attrib0__) {
/* 000114 */ 					case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000114 */ 				}
/* 000114 */ 			}
/* 000114 */ 		}
/* 000114 */ 	}
/* 000114 */ 	else {
/* 000114 */ 	}
/* 000115 */ 	var Cls = (function () {
/* 000115 */ 		var __accu0__ = node;
/* 000115 */ 		return __call__ (__accu0__.nodeType, __accu0__);
/* 000115 */ 	}) ();
/* 000120 */ 	var new_node = __call__ (Cls, null, __kwargtrans__ (__call__ (dict, null, (function () {
/* 000120 */ 		var __accu0__ = [];
/* 000120 */ 		var __iterable0__ = node._fields;
/* 000120 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000120 */ 			var k = __getitem__ (__iterable0__, __index0__);
/* 000120 */ 			(function () {
/* 000120 */ 				var __accu1__ = __accu0__;
/* 000120 */ 				return __call__ (__accu1__.append, __accu1__, tuple ([k, __call__ (getattr, null, node, k)]));
/* 000120 */ 			}) ();
/* 000120 */ 		}
/* 000120 */ 		return __accu0__;
/* 000120 */ 	}) ())));
/* 000123 */ 	var __iterable0__ = __call__ (dir, null, node);
/* 000123 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000123 */ 		var attr = __getitem__ (__iterable0__, __index0__);
/* 000124 */ 		if (__t__ (__t__ ((function () {
/* 000124 */ 			var __accu0__ = attr;
/* 000124 */ 			return __call__ (__accu0__.startswith, __accu0__, 'flm');
/* 000124 */ 		}) ()) || (function () {
/* 000124 */ 			var __accu0__ = attr;
/* 000124 */ 			return __call__ (__accu0__.startswith, __accu0__, '_flm');
/* 000124 */ 		}) ())) {
/* 000125 */ 			__call__ (setattr, null, new_node, attr, __call__ (getattr, null, node, attr));
/* 000125 */ 		}
/* 000125 */ 	}
/* 000127 */ 	return new_node;
/* 000127 */ };
/* 000134 */ export var BlocksBuilder =  __class__ ('BlocksBuilder', [object], {
/* 000134 */ 	__module__: __name__,
/* 000136 */ 	rx_space: (function () {
/* 000136 */ 		var __accu0__ = re;
/* 000136 */ 		return __call__ (__accu0__.compile, __accu0__, '[ \\t\\n\\r]+');
/* 000136 */ 	}) (),
/* 000137 */ 	rx_only_space: (function () {
/* 000137 */ 		var __accu0__ = re;
/* 000137 */ 		return __call__ (__accu0__.compile, __accu0__, '^[ \\t\\n\\r]+$');
/* 000137 */ 	}) (),
/* 000139 */ 	get __init__ () {return __get__ (this, function (self, latexnodelist) {
/* 000139 */ 		if (arguments.length) {
/* 000139 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000139 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000139 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000139 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000139 */ 					switch (__attrib0__) {
/* 000139 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000139 */ 						case 'latexnodelist': var latexnodelist = __allkwargs0__ [__attrib0__]; break;
/* 000139 */ 					}
/* 000139 */ 				}
/* 000139 */ 			}
/* 000139 */ 		}
/* 000139 */ 		else {
/* 000139 */ 		}
/* 000140 */ 		__call__ (__call__ (__super__, null, BlocksBuilder, '__init__'), null, self);
/* 000141 */ 		self.latexnodelist = latexnodelist;
/* 000142 */ 		self.pending_paragraph_nodes = [];
/* 000143 */ 		self.blocks = [];
/* 000143 */ 	});},
/* 000145 */ 	get flush_paragraph () {return __get__ (this, function (self) {
/* 000145 */ 		if (arguments.length) {
/* 000145 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000145 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000145 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000145 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000145 */ 					switch (__attrib0__) {
/* 000145 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000145 */ 					}
/* 000145 */ 				}
/* 000145 */ 			}
/* 000145 */ 		}
/* 000145 */ 		else {
/* 000145 */ 		}
/* 000146 */ 		if (__t__ (!__t__ ((self.pending_paragraph_nodes)))) {
/* 000147 */ 			return ;
/* 000147 */ 		}
/* 000148 */ 		var paragraph_nodes = self.pending_paragraph_nodes;
/* 000149 */ 		var paragraph_nodes = (function () {
/* 000149 */ 			var __accu0__ = self;
/* 000149 */ 			return __call__ (__accu0__.finalize_paragraph, __accu0__, paragraph_nodes);
/* 000149 */ 		}) ();
/* 000150 */ 		// pass;
/* 000153 */ 		var nlblock = (function () {
/* 000153 */ 			var __accu0__ = latexnodes_nodes;
/* 000153 */ 			return __call__ (__accu0__.LatexNodeList, __accu0__, paragraph_nodes, __kwargtrans__ ({parsing_state: self.latexnodelist.parsing_state, latex_walker: self.latexnodelist.latex_walker}));
/* 000153 */ 		}) ();
/* 000160 */ 		nlblock.flm_nodelist_finalized = true;
/* 000161 */ 		(function () {
/* 000161 */ 			var __accu0__ = self.blocks;
/* 000161 */ 			return __call__ (__accu0__.append, __accu0__, nlblock);
/* 000161 */ 		}) ();
/* 000162 */ 		self.pending_paragraph_nodes = [];
/* 000162 */ 	});},
/* 000164 */ 	get simplify_whitespace_chars () {return __get__ (this, function (self, chars, is_head, is_tail) {
/* 000164 */ 		if (typeof is_head == 'undefined' || (is_head != null && is_head.hasOwnProperty ("__kwargtrans__"))) {;
/* 000164 */ 			var is_head = false;
/* 000164 */ 		};
/* 000164 */ 		if (typeof is_tail == 'undefined' || (is_tail != null && is_tail.hasOwnProperty ("__kwargtrans__"))) {;
/* 000164 */ 			var is_tail = false;
/* 000164 */ 		};
/* 000164 */ 		if (arguments.length) {
/* 000164 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000164 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000164 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000164 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000164 */ 					switch (__attrib0__) {
/* 000164 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000164 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000164 */ 						case 'is_head': var is_head = __allkwargs0__ [__attrib0__]; break;
/* 000164 */ 						case 'is_tail': var is_tail = __allkwargs0__ [__attrib0__]; break;
/* 000164 */ 					}
/* 000164 */ 				}
/* 000164 */ 			}
/* 000164 */ 		}
/* 000164 */ 		else {
/* 000164 */ 		}
/* 000165 */ 		var newchars = (function () {
/* 000165 */ 			var __accu0__ = self.rx_space;
/* 000165 */ 			return __call__ (__accu0__.sub, __accu0__, ' ', chars);
/* 000165 */ 		}) ();
/* 000166 */ 		if (__t__ (is_head)) {
/* 000167 */ 			var newchars = (function () {
/* 000167 */ 				var __accu0__ = newchars;
/* 000167 */ 				return __call__ (__accu0__.lstrip, __accu0__);
/* 000167 */ 			}) ();
/* 000167 */ 		}
/* 000168 */ 		if (__t__ (is_tail)) {
/* 000169 */ 			var newchars = (function () {
/* 000169 */ 				var __accu0__ = newchars;
/* 000169 */ 				return __call__ (__accu0__.rstrip, __accu0__);
/* 000169 */ 			}) ();
/* 000169 */ 		}
/* 000170 */ 		return newchars;
/* 000170 */ 	});},
/* 000172 */ 	get finalize_paragraph () {return __get__ (this, function (self, paragraph_nodes) {
/* 000172 */ 		if (arguments.length) {
/* 000172 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000172 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000172 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000172 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000172 */ 					switch (__attrib0__) {
/* 000172 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000172 */ 						case 'paragraph_nodes': var paragraph_nodes = __allkwargs0__ [__attrib0__]; break;
/* 000172 */ 					}
/* 000172 */ 				}
/* 000172 */ 			}
/* 000172 */ 		}
/* 000172 */ 		else {
/* 000172 */ 		}
/* 000173 */ 		if (__t__ (!__t__ ((paragraph_nodes)))) {
/* 000174 */ 			return paragraph_nodes;
/* 000174 */ 		}
/* 000178 */ 		var is_head = true;
/* 000179 */ 		var tail_char_node_info = null;
/* 000180 */ 		var next_node_should_strip_leading_whitespace = false;
/* 000181 */ 		var first_node = null;
/* 000182 */ 		var char_nodes = [];
/* 000183 */ 		var __iterable0__ = __call__ (enumerate, null, paragraph_nodes);
/* 000183 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000183 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000183 */ 			var j = __left0__ [0];
/* 000183 */ 			var node = __left0__ [1];
/* 000190 */ 			if (__t__ (__t__ (__eq__ (__call__ (len, null, char_nodes), 0)) && __t__ (first_node !== null) && (__t__ (__call__ (hasattr, null, first_node, 'flm_is_block_heading')) && __call__ (getattr, null, first_node, 'flm_is_block_heading')))) {
/* 000194 */ 				var is_head = true;
/* 000194 */ 			}
/* 000198 */ 			if (__t__ (__t__ (__call__ (hasattr, null, node, 'flm_strip_preceding_whitespace')) && __call__ (getattr, null, node, 'flm_strip_preceding_whitespace'))) {
/* 000199 */ 				if (__t__ (tail_char_node_info !== null)) {
/* 000200 */ 					__setitem__ (tail_char_node_info, 'is_tail', true);
/* 000200 */ 				}
/* 000200 */ 			}
/* 000202 */ 			if (__t__ ((function () {
/* 000202 */ 				var __accu0__ = node;
/* 000202 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000202 */ 			}) ())) {
/* 000203 */ 				var info = dict ({'is_head': is_head, 'is_tail': false});
/* 000204 */ 				if (__t__ (next_node_should_strip_leading_whitespace)) {
/* 000205 */ 					__setitem__ (info, 'is_head', true);
/* 000205 */ 				}
/* 000206 */ 				(function () {
/* 000206 */ 					var __accu0__ = char_nodes;
/* 000206 */ 					return __call__ (__accu0__.append, __accu0__, tuple ([node, info, j]));
/* 000206 */ 				}) ();
/* 000207 */ 				var is_head = false;
/* 000208 */ 				var tail_char_node_info = info;
/* 000208 */ 			}
/* 000209 */ 			else if (__t__ (!__t__ (((function () {
/* 000209 */ 				var __accu0__ = node;
/* 000209 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCommentNode);
/* 000209 */ 			}) ())))) {
/* 000210 */ 				if (__t__ (first_node === null)) {
/* 000211 */ 					var first_node = node;
/* 000211 */ 				}
/* 000212 */ 				var is_head = false;
/* 000213 */ 				var tail_char_node_info = null;
/* 000213 */ 			}
/* 000215 */ 			var next_node_should_strip_leading_whitespace = false;
/* 000218 */ 			if (__t__ (__t__ (__call__ (hasattr, null, node, 'flm_strip_following_whitespace')) && __call__ (getattr, null, node, 'flm_strip_following_whitespace'))) {
/* 000219 */ 				var next_node_should_strip_leading_whitespace = true;
/* 000219 */ 			}
/* 000219 */ 		}
/* 000222 */ 		if (__t__ (tail_char_node_info !== null)) {
/* 000223 */ 			__setitem__ (tail_char_node_info, 'is_tail', true);
/* 000223 */ 		}
/* 000225 */ 		var __iterable0__ = char_nodes;
/* 000225 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000225 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000225 */ 			var char_node = __left0__ [0];
/* 000225 */ 			var info = __left0__ [1];
/* 000225 */ 			var char_node_j = __left0__ [2];
/* 000232 */ 			var new_flm_chars_value = (function () {
/* 000232 */ 				var __accu0__ = self;
/* 000232 */ 				return __call__ (__accu0__.simplify_whitespace_chars, __accu0__, char_node.chars, __kwargtrans__ ({is_head: __getitem__ (info, 'is_head'), is_tail: __getitem__ (info, 'is_tail')}));
/* 000232 */ 			}) ();
/* 000237 */ 			if (__t__ (__ne__ (__call__ (getattr, null, char_node, 'flm_chars_value', null), new_flm_chars_value))) {
/* 000240 */ 				var new_char_node = __call__ (_clone_flm_node, null, char_node);
/* 000243 */ 				new_char_node.flm_chars_value = new_flm_chars_value;
/* 000244 */ 				__setitem__ (paragraph_nodes, char_node_j, new_char_node);
/* 000244 */ 			}
/* 000244 */ 		}
/* 000255 */ 		return paragraph_nodes;
/* 000255 */ 	});},
/* 000257 */ 	get build_blocks () {return __get__ (this, function (self) {
/* 000257 */ 		if (arguments.length) {
/* 000257 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000257 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000257 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000257 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000257 */ 					switch (__attrib0__) {
/* 000257 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000257 */ 					}
/* 000257 */ 				}
/* 000257 */ 			}
/* 000257 */ 		}
/* 000257 */ 		else {
/* 000257 */ 		}
/* 000258 */ 		var latexnodelist = self.latexnodelist;
/* 000262 */ 		assert (__eq__ (__call__ (len, null, self.blocks), 0));
/* 000264 */ 		var __iterable0__ = latexnodelist;
/* 000264 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000264 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000267 */ 			var n_is_block_level = (__t__ (__call__ (hasattr, null, n, 'flm_is_block_level')) ? __call__ (getattr, null, n, 'flm_is_block_level') : null);
/* 000272 */ 			var n_is_block_heading = (__t__ (__call__ (hasattr, null, n, 'flm_is_block_heading')) ? __call__ (getattr, null, n, 'flm_is_block_heading') : false);
/* 000276 */ 			if (__t__ (n_is_block_level)) {
/* 000278 */ 				(function () {
/* 000278 */ 					var __accu0__ = self;
/* 000278 */ 					return __call__ (__accu0__.flush_paragraph, __accu0__);
/* 000278 */ 				}) ();
/* 000282 */ 				if (__t__ (__t__ (__call__ (hasattr, null, n, 'flm_is_paragraph_break_marker')) && __call__ (getattr, null, n, 'flm_is_paragraph_break_marker'))) {
/* 000282 */ 					continue;
/* 000282 */ 				}
/* 000287 */ 				if (__t__ (n_is_block_heading)) {
/* 000291 */ 					(function () {
/* 000291 */ 						var __accu0__ = self.pending_paragraph_nodes;
/* 000291 */ 						return __call__ (__accu0__.append, __accu0__, n);
/* 000291 */ 					}) ();
/* 000291 */ 					continue;
/* 000291 */ 				}
/* 000296 */ 				(function () {
/* 000296 */ 					var __accu0__ = self.blocks;
/* 000296 */ 					return __call__ (__accu0__.append, __accu0__, n);
/* 000296 */ 				}) ();
/* 000296 */ 				continue;
/* 000296 */ 			}
/* 000299 */ 			var paragraph_started_yet = true;
/* 000300 */ 			if (__t__ (!__t__ ((self.pending_paragraph_nodes)))) {
/* 000301 */ 				var paragraph_started_yet = false;
/* 000301 */ 			}
/* 000302 */ 			if (__t__ (__eq__ (__call__ (len, null, self.pending_paragraph_nodes), 1))) {
/* 000305 */ 				if (__t__ (__t__ (__call__ (hasattr, null, __getitem__ (self.pending_paragraph_nodes, 0), 'flm_is_block_heading')) && __call__ (getattr, null, __getitem__ (self.pending_paragraph_nodes, 0), 'flm_is_block_heading'))) {
/* 000307 */ 					var paragraph_started_yet = false;
/* 000307 */ 				}
/* 000307 */ 			}
/* 000310 */ 			if (__t__ (__t__ (!__t__ ((paragraph_started_yet))) && __t__ ((function () {
/* 000310 */ 				var __accu0__ = n;
/* 000310 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000311 */ 			}) ()) && (function () {
/* 000311 */ 				var __accu0__ = self.rx_only_space;
/* 000311 */ 				return __call__ (__accu0__.match, __accu0__, n.chars);
/* 000311 */ 			}) ())) {
/* 000311 */ 				continue;
/* 000311 */ 			}
/* 000317 */ 			(function () {
/* 000317 */ 				var __accu0__ = self.pending_paragraph_nodes;
/* 000317 */ 				return __call__ (__accu0__.append, __accu0__, n);
/* 000317 */ 			}) ();
/* 000317 */ 		}
/* 000320 */ 		(function () {
/* 000320 */ 			var __accu0__ = self;
/* 000320 */ 			return __call__ (__accu0__.flush_paragraph, __accu0__);
/* 000320 */ 		}) ();
/* 000322 */ 		return self.blocks;
/* 000322 */ 	});}
/* 000322 */ });
/* 000330 */ export var NodesFinalizer =  __class__ ('NodesFinalizer', [object], {
/* 000330 */ 	__module__: __name__,
/* 000341 */ 	get finalize_nodelist () {return __get__ (this, function (self, latexnodelist) {
/* 000341 */ 		if (arguments.length) {
/* 000341 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000341 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000341 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000341 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000341 */ 					switch (__attrib0__) {
/* 000341 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000341 */ 						case 'latexnodelist': var latexnodelist = __allkwargs0__ [__attrib0__]; break;
/* 000341 */ 					}
/* 000341 */ 				}
/* 000341 */ 			}
/* 000341 */ 		}
/* 000341 */ 		else {
/* 000341 */ 		}
/* 000357 */ 		if (__t__ (__t__ (__call__ (hasattr, null, latexnodelist, 'flm_nodelist_finalized')) && __call__ (getattr, null, latexnodelist, 'flm_nodelist_finalized'))) {
/* 000358 */ 			return latexnodelist;
/* 000358 */ 		}
/* 000360 */ 		latexnodelist.flm_nodelist_finalized = true;
/* 000362 */ 		var is_block_level = latexnodelist.parsing_state.is_block_level;
/* 000363 */ 		if (__t__ (is_block_level === null)) {
/* 000365 */ 			var is_block_level = (function () {
/* 000365 */ 				var __accu0__ = self;
/* 000365 */ 				return __call__ (__accu0__.infer_is_block_level_nodelist, __accu0__, latexnodelist);
/* 000365 */ 			}) ();
/* 000365 */ 		}
/* 000367 */ 		latexnodelist.flm_is_block_level = is_block_level;
/* 000371 */ 		if (__t__ (!__t__ ((is_block_level)))) {
/* 000373 */ 			var __iterable0__ = latexnodelist;
/* 000373 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000373 */ 				var n = __getitem__ (__iterable0__, __index0__);
/* 000375 */ 				if (__t__ (__t__ (__call__ (hasattr, null, n, 'flm_is_block_level')) && __call__ (getattr, null, n, 'flm_is_block_level'))) {
/* 000379 */ 					var __except0__ = __call__ (LatexWalkerParseError, null, __kwargtrans__ ({msg: 'Content is not allowed in inline text (not block level): ‘{}’'.format ((function () {
/* 000379 */ 						var __accu0__ = n;
/* 000379 */ 						return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000379 */ 					}) ()), pos: n.pos}));
/* 000379 */ 					__except0__.__cause__ = null;
/* 000379 */ 					throw __except0__;
/* 000379 */ 				}
/* 000379 */ 			}
/* 000379 */ 		}
/* 000386 */ 		if (__t__ (is_block_level)) {
/* 000387 */ 			var blocks_builder = (function () {
/* 000387 */ 				var __accu0__ = self;
/* 000387 */ 				return __call__ (__accu0__.make_blocks_builder, __accu0__, latexnodelist);
/* 000387 */ 			}) ();
/* 000388 */ 			var flm_blocks = (function () {
/* 000388 */ 				var __accu0__ = blocks_builder;
/* 000388 */ 				return __call__ (__accu0__.build_blocks, __accu0__);
/* 000388 */ 			}) ();
/* 000389 */ 			latexnodelist.flm_blocks = flm_blocks;
/* 000389 */ 		}
/* 000391 */ 		return latexnodelist;
/* 000391 */ 	});},
/* 000394 */ 	get finalize_node () {return __get__ (this, function (self, node) {
/* 000394 */ 		if (arguments.length) {
/* 000394 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000394 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000394 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000394 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000394 */ 					switch (__attrib0__) {
/* 000394 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000394 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000394 */ 					}
/* 000394 */ 				}
/* 000394 */ 			}
/* 000394 */ 		}
/* 000394 */ 		else {
/* 000394 */ 		}
/* 000397 */ 		if (__t__ (__t__ (!__t__ ((__call__ (hasattr, null, node, 'flm_chars_value')))) && (function () {
/* 000397 */ 			var __accu0__ = node;
/* 000397 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000397 */ 		}) ())) {
/* 000405 */ 			node.flm_chars_value = (function () {
/* 000405 */ 				var __accu0__ = self;
/* 000405 */ 				return __call__ (__accu0__.simplify_whitespace_chars_inline, __accu0__, node.chars);
/* 000405 */ 			}) ();
/* 000405 */ 		}
/* 000408 */ 		return node;
/* 000408 */ 	});},
/* 000411 */ 	get infer_is_block_level_nodelist () {return __get__ (this, function (self, latexnodelist) {
/* 000411 */ 		if (arguments.length) {
/* 000411 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000411 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000411 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000411 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000411 */ 					switch (__attrib0__) {
/* 000411 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000411 */ 						case 'latexnodelist': var latexnodelist = __allkwargs0__ [__attrib0__]; break;
/* 000411 */ 					}
/* 000411 */ 				}
/* 000411 */ 			}
/* 000411 */ 		}
/* 000411 */ 		else {
/* 000411 */ 		}
/* 000412 */ 		var __iterable0__ = latexnodelist;
/* 000412 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000412 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000415 */ 			var n_is_block_level = (__t__ (__call__ (hasattr, null, n, 'flm_is_block_level')) ? __call__ (getattr, null, n, 'flm_is_block_level') : null);
/* 000419 */ 			if (__t__ (n_is_block_level)) {
/* 000420 */ 				return true;
/* 000420 */ 			}
/* 000420 */ 		}
/* 000421 */ 		return false;
/* 000421 */ 	});},
/* 000423 */ 	get simplify_whitespace_chars_inline () {return __get__ (this, function (self, chars) {
/* 000423 */ 		if (arguments.length) {
/* 000423 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000423 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000423 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000423 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000423 */ 					switch (__attrib0__) {
/* 000423 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000423 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000423 */ 					}
/* 000423 */ 				}
/* 000423 */ 			}
/* 000423 */ 		}
/* 000423 */ 		else {
/* 000423 */ 		}
/* 000424 */ 		return (function () {
/* 000424 */ 			var __accu0__ = self.rx_inline_space;
/* 000424 */ 			return __call__ (__accu0__.sub, __accu0__, ' ', chars);
/* 000424 */ 		}) ();
/* 000424 */ 	});},
/* 000426 */ 	make_blocks_builder: BlocksBuilder,
/* 000428 */ 	rx_inline_space: BlocksBuilder.rx_space
/* 000428 */ });
/* 000437 */ export var FLMLatexWalker =  __class__ ('FLMLatexWalker', [latexwalker.LatexWalker], {
/* 000437 */ 	__module__: __name__,
/* 000450 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000450 */ 		var parsing_state_event_handler = null;
/* 000450 */ 		var standalone_mode = false;
/* 000450 */ 		var resource_info = null;
/* 000450 */ 		var parsing_mode = null;
/* 000450 */ 		var what = null;
/* 000450 */ 		var input_lineno_colno_offsets = null;
/* 000450 */ 		var kwargs = dict ();
/* 000450 */ 		if (arguments.length) {
/* 000450 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000450 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000450 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000450 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000450 */ 					switch (__attrib0__) {
/* 000450 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000450 */ 						case 'flm_text': var flm_text = __allkwargs0__ [__attrib0__]; break;
/* 000450 */ 						case 'default_parsing_state': var default_parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000450 */ 						case 'flm_environment': var flm_environment = __allkwargs0__ [__attrib0__]; break;
/* 000450 */ 						case 'parsing_state_event_handler': var parsing_state_event_handler = __allkwargs0__ [__attrib0__]; break;
/* 000450 */ 						case 'standalone_mode': var standalone_mode = __allkwargs0__ [__attrib0__]; break;
/* 000450 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000450 */ 						case 'parsing_mode': var parsing_mode = __allkwargs0__ [__attrib0__]; break;
/* 000450 */ 						case 'what': var what = __allkwargs0__ [__attrib0__]; break;
/* 000450 */ 						case 'input_lineno_colno_offsets': var input_lineno_colno_offsets = __allkwargs0__ [__attrib0__]; break;
/* 000450 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000450 */ 					}
/* 000450 */ 				}
/* 000450 */ 				delete kwargs.__kwargtrans__;
/* 000450 */ 			}
/* 000450 */ 		}
/* 000450 */ 		else {
/* 000450 */ 		}
/* 000463 */ 		if (__t__ (!__t__ ((input_lineno_colno_offsets)))) {
/* 000464 */ 			var input_lineno_colno_offsets = dict ({});
/* 000464 */ 		}
/* 000469 */ 		__call__ (__call__ (__super__, null, FLMLatexWalker, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({s: flm_text, default_parsing_state: default_parsing_state, line_number_offset: (function () {
/* 000469 */ 			var __accu0__ = input_lineno_colno_offsets;
/* 000469 */ 			return __call__ (__accu0__.py_get, __accu0__, 'line_number_offset', null);
/* 000471 */ 		}) (), first_line_column_offset: (function () {
/* 000471 */ 			var __accu0__ = input_lineno_colno_offsets;
/* 000471 */ 			return __call__ (__accu0__.py_get, __accu0__, 'first_line_column_offset', null);
/* 000472 */ 		}) (), column_offset: (function () {
/* 000472 */ 			var __accu0__ = input_lineno_colno_offsets;
/* 000472 */ 			return __call__ (__accu0__.py_get, __accu0__, 'column_offset', null);
/* 000472 */ 		}) ()}, kwargs)));
/* 000476 */ 		self.flm_environment = flm_environment;
/* 000478 */ 		self.standalone_mode = standalone_mode;
/* 000482 */ 		self.resource_info = resource_info;
/* 000484 */ 		self.what = what;
/* 000487 */ 		self.parsing_mode = parsing_mode;
/* 000489 */ 		self._parsing_state_event_handler = parsing_state_event_handler;
/* 000491 */ 		self.input_lineno_colno_offsets = input_lineno_colno_offsets;
/* 000491 */ 	});},
/* 000493 */ 	get parsing_state_event_handler () {return __get__ (this, function (self) {
/* 000493 */ 		if (arguments.length) {
/* 000493 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000493 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000493 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000493 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000493 */ 					switch (__attrib0__) {
/* 000493 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000493 */ 					}
/* 000493 */ 				}
/* 000493 */ 			}
/* 000493 */ 		}
/* 000493 */ 		else {
/* 000493 */ 		}
/* 000494 */ 		if (__t__ (self._parsing_state_event_handler)) {
/* 000495 */ 			return self._parsing_state_event_handler;
/* 000495 */ 		}
/* 000496 */ 		return __call__ (__call__ (__super__, null, FLMLatexWalker, 'parsing_state_event_handler'), null, self);
/* 000496 */ 	});},
/* 000498 */ 	get make_nodelist () {return __get__ (this, function (self, nodelist, parsing_state) {
/* 000498 */ 		var kwargs = dict ();
/* 000498 */ 		if (arguments.length) {
/* 000498 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000498 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000498 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000498 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000498 */ 					switch (__attrib0__) {
/* 000498 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000498 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000498 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000498 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000498 */ 					}
/* 000498 */ 				}
/* 000498 */ 				delete kwargs.__kwargtrans__;
/* 000498 */ 			}
/* 000498 */ 		}
/* 000498 */ 		else {
/* 000498 */ 		}
/* 000499 */ 		var nl = __call__ (__call__ (__super__, null, FLMLatexWalker, 'make_nodelist'), null, self, __kwargtrans__ (__mergekwargtrans__ ({nodelist: nodelist, parsing_state: parsing_state}, kwargs)));
/* 000501 */ 		var nl2 = (function () {
/* 000501 */ 			var __accu0__ = self.flm_environment;
/* 000501 */ 			return __call__ (__accu0__.finalize_nodelist, __accu0__, nl);
/* 000501 */ 		}) ();
/* 000502 */ 		if (__t__ (nl2 === null)) {
/* 000503 */ 			var __except0__ = __call__ (ValueError, null, "Environment's finalize_nodelist() returned None");
/* 000503 */ 			__except0__.__cause__ = null;
/* 000503 */ 			throw __except0__;
/* 000503 */ 		}
/* 000504 */ 		return nl2;
/* 000504 */ 	});},
/* 000506 */ 	get make_node () {return __get__ (this, function (self, node_class) {
/* 000506 */ 		var kwargs = dict ();
/* 000506 */ 		if (arguments.length) {
/* 000506 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000506 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000506 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000506 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000506 */ 					switch (__attrib0__) {
/* 000506 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000506 */ 						case 'node_class': var node_class = __allkwargs0__ [__attrib0__]; break;
/* 000506 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000506 */ 					}
/* 000506 */ 				}
/* 000506 */ 				delete kwargs.__kwargtrans__;
/* 000506 */ 			}
/* 000506 */ 		}
/* 000506 */ 		else {
/* 000506 */ 		}
/* 000507 */ 		var node = __call__ (__call__ (__super__, null, FLMLatexWalker, 'make_node'), null, self, node_class, __kwargtrans__ (kwargs));
/* 000508 */ 		var node2 = (function () {
/* 000508 */ 			var __accu0__ = self.flm_environment;
/* 000508 */ 			return __call__ (__accu0__.finalize_node, __accu0__, node);
/* 000508 */ 		}) ();
/* 000509 */ 		if (__t__ (node2 === null)) {
/* 000510 */ 			var __except0__ = __call__ (ValueError, null, "Environment's finalize_node() returned None");
/* 000510 */ 			__except0__.__cause__ = null;
/* 000510 */ 			throw __except0__;
/* 000510 */ 		}
/* 000511 */ 		return node2;
/* 000511 */ 	});},
/* 000516 */ 	get filter_whitespace_comments_nodes () {return __get__ (this, function (self, nodelist) {
/* 000516 */ 		if (arguments.length) {
/* 000516 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000516 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000516 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000516 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000516 */ 					switch (__attrib0__) {
/* 000516 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000516 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000516 */ 					}
/* 000516 */ 				}
/* 000516 */ 			}
/* 000516 */ 		}
/* 000516 */ 		else {
/* 000516 */ 		}
/* 000521 */ 		return (function () {
/* 000521 */ 			var __accu0__ = nodelist;
/* 000521 */ 			return __call__ (__accu0__.filter, __accu0__, __kwargtrans__ ({node_predicate_fn: self._filter_whitespace_comments_nodes_predicate, skip_none: true, skip_comments: true, skip_whitespace_char_nodes: true}));
/* 000521 */ 		}) ();
/* 000521 */ 	});},
/* 000528 */ 	get _filter_whitespace_comments_nodes_predicate () {return __get__ (this, function (self, node) {
/* 000528 */ 		if (arguments.length) {
/* 000528 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000528 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000528 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000528 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000528 */ 					switch (__attrib0__) {
/* 000528 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000528 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000528 */ 					}
/* 000528 */ 				}
/* 000528 */ 			}
/* 000528 */ 		}
/* 000528 */ 		else {
/* 000528 */ 		}
/* 000531 */ 		if (__t__ (__t__ (__call__ (hasattr, null, node, 'flm_is_paragraph_break_marker')) && __call__ (getattr, null, node, 'flm_is_paragraph_break_marker'))) {
/* 000532 */ 			return false;
/* 000532 */ 		}
/* 000533 */ 		return true;
/* 000533 */ 	});}
/* 000533 */ });
/* 000541 */ export var features_ensure_dependencies_are_met = function (features) {
/* 000541 */ 	if (arguments.length) {
/* 000541 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000541 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000541 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000541 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000541 */ 				switch (__attrib0__) {
/* 000541 */ 					case 'features': var features = __allkwargs0__ [__attrib0__]; break;
/* 000541 */ 				}
/* 000541 */ 			}
/* 000541 */ 		}
/* 000541 */ 	}
/* 000541 */ 	else {
/* 000541 */ 	}
/* 000543 */ 	var feature_names = __call__ (set, null, (function () {
/* 000543 */ 		var __accu0__ = [];
/* 000543 */ 		var __iterable0__ = features;
/* 000543 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000543 */ 			var f = __getitem__ (__iterable0__, __index0__);
/* 000543 */ 			(function () {
/* 000543 */ 				var __accu1__ = __accu0__;
/* 000543 */ 				return __call__ (__accu1__.append, __accu1__, f.feature_name);
/* 000543 */ 			}) ();
/* 000543 */ 		}
/* 000543 */ 		return __accu0__;
/* 000543 */ 	}) ());
/* 000545 */ 	var __iterable0__ = features;
/* 000545 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000545 */ 		var feature = __getitem__ (__iterable0__, __index0__);
/* 000546 */ 		if (__t__ (feature.feature_dependencies === null)) {
/* 000546 */ 			continue;
/* 000546 */ 		}
/* 000548 */ 		var __iterable1__ = feature.feature_dependencies;
/* 000548 */ 		for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000548 */ 			var fdepname = __getitem__ (__iterable1__, __index1__);
/* 000549 */ 			if (__t__ (!__in__ (fdepname, feature_names))) {
/* 000551 */ 				var __except0__ = __call__ (ValueError, null, 'Feature ‘{}’ ({}) has unmet dependency ‘{}’'.format (feature.feature_name, __call__ (repr, null, feature), fdepname));
/* 000551 */ 				__except0__.__cause__ = null;
/* 000551 */ 				throw __except0__;
/* 000551 */ 			}
/* 000551 */ 		}
/* 000551 */ 	}
/* 000551 */ };
/* 000557 */ export var features_sorted_by_dependencies = function (features) {
/* 000557 */ 	if (arguments.length) {
/* 000557 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000557 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000557 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000557 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000557 */ 				switch (__attrib0__) {
/* 000557 */ 					case 'features': var features = __allkwargs0__ [__attrib0__]; break;
/* 000557 */ 				}
/* 000557 */ 			}
/* 000557 */ 		}
/* 000557 */ 	}
/* 000557 */ 	else {
/* 000557 */ 	}
/* 000574 */ 	var features_to_sort = __call__ (list, null, features);
/* 000578 */ 	var features_by_name = dict ({});
/* 000579 */ 	var __iterable0__ = features_to_sort;
/* 000579 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000579 */ 		var feature = __getitem__ (__iterable0__, __index0__);
/* 000580 */ 		if (__t__ (__in__ (feature.feature_name, features_by_name))) {
/* 000582 */ 			var __except0__ = __call__ (ValueError, null, 'Duplicate feature detected: feature {} has the same name (‘{}’) as the as already-included feature {}'.format (__call__ (repr, null, feature), feature.feature_name, __getitem__ (features_by_name, feature.feature_name)));
/* 000582 */ 			__except0__.__cause__ = null;
/* 000582 */ 			throw __except0__;
/* 000582 */ 		}
/* 000586 */ 		__setitem__ (features_by_name, feature.feature_name, feature);
/* 000586 */ 	}
/* 000591 */ 	(function () {
/* 000591 */ 		var __accu0__ = features_to_sort;
/* 000591 */ 		return __call__ (__accu0__.py_sort, __accu0__, __kwargtrans__ ({key: (function __lambda__ (f) {
/* 000591 */ 			if (arguments.length) {
/* 000591 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000591 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000591 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000591 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000591 */ 						switch (__attrib0__) {
/* 000591 */ 							case 'f': var f = __allkwargs0__ [__attrib0__]; break;
/* 000591 */ 						}
/* 000591 */ 					}
/* 000591 */ 				}
/* 000591 */ 			}
/* 000591 */ 			else {
/* 000591 */ 			}
/* 000591 */ 			return f.feature_name;
/* 000591 */ 		})}));
/* 000591 */ 	}) ();
/* 000594 */ 	__call__ (features_ensure_dependencies_are_met, null, features_to_sort);
/* 000596 */ 	var get_feature_dependencies = function (f) {
/* 000596 */ 		if (arguments.length) {
/* 000596 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000596 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000596 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000596 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000596 */ 					switch (__attrib0__) {
/* 000596 */ 						case 'f': var f = __allkwargs0__ [__attrib0__]; break;
/* 000596 */ 					}
/* 000596 */ 				}
/* 000596 */ 			}
/* 000596 */ 		}
/* 000596 */ 		else {
/* 000596 */ 		}
/* 000597 */ 		var deps = __call__ (set, null);
/* 000598 */ 		if (__t__ (f.feature_dependencies !== null)) {
/* 000599 */ 			var __iterable0__ = f.feature_dependencies;
/* 000599 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000599 */ 				var fdepname = __getitem__ (__iterable0__, __index0__);
/* 000600 */ 				(function () {
/* 000600 */ 					var __accu0__ = deps;
/* 000600 */ 					return __call__ (__accu0__.add, __accu0__, fdepname);
/* 000600 */ 				}) ();
/* 000600 */ 			}
/* 000600 */ 		}
/* 000601 */ 		if (__t__ (f.feature_optional_dependencies !== null)) {
/* 000602 */ 			var __iterable0__ = f.feature_optional_dependencies;
/* 000602 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000602 */ 				var foptdepname = __getitem__ (__iterable0__, __index0__);
/* 000603 */ 				if (__t__ (__in__ (foptdepname, features_by_name))) {
/* 000604 */ 					(function () {
/* 000604 */ 						var __accu0__ = deps;
/* 000604 */ 						return __call__ (__accu0__.add, __accu0__, foptdepname);
/* 000604 */ 					}) ();
/* 000604 */ 				}
/* 000604 */ 			}
/* 000604 */ 		}
/* 000605 */ 		return __call__ (sorted, null, __call__ (list, null, deps));
/* 000605 */ 	};
/* 000613 */ 	var all_feature_dependencies = __call__ (dict, null, (function () {
/* 000613 */ 		var __accu0__ = [];
/* 000615 */ 		var __iterable0__ = (function () {
/* 000615 */ 			var __accu1__ = features_by_name;
/* 000615 */ 			return __call__ (__accu1__.py_items, __accu1__);
/* 000615 */ 		}) ();
/* 000615 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000615 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000615 */ 			var fname = __left0__ [0];
/* 000615 */ 			var f = __left0__ [1];
/* 000615 */ 			(function () {
/* 000615 */ 				var __accu1__ = __accu0__;
/* 000614 */ 				return __call__ (__accu1__.append, __accu1__, tuple ([fname, __call__ (get_feature_dependencies, null, f)]));
/* 000614 */ 			}) ();
/* 000614 */ 		}
/* 000614 */ 		return __accu0__;
/* 000614 */ 	}) ());
/* 000618 */ 	var get_feature_dependents = function (fparentname, all_feature_dependencies) {
/* 000618 */ 		if (arguments.length) {
/* 000618 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000618 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000618 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000618 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000618 */ 					switch (__attrib0__) {
/* 000618 */ 						case 'fparentname': var fparentname = __allkwargs0__ [__attrib0__]; break;
/* 000618 */ 						case 'all_feature_dependencies': var all_feature_dependencies = __allkwargs0__ [__attrib0__]; break;
/* 000618 */ 					}
/* 000618 */ 				}
/* 000618 */ 			}
/* 000618 */ 		}
/* 000618 */ 		else {
/* 000618 */ 		}
/* 000619 */ 		var dependents = __call__ (set, null);
/* 000620 */ 		var __iterable0__ = (function () {
/* 000620 */ 			var __accu0__ = all_feature_dependencies;
/* 000620 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000620 */ 		}) ();
/* 000620 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000620 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000620 */ 			var fname = __left0__ [0];
/* 000620 */ 			var fdepnames = __left0__ [1];
/* 000621 */ 			var __iterable1__ = fdepnames;
/* 000621 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000621 */ 				var fdepname = __getitem__ (__iterable1__, __index1__);
/* 000622 */ 				if (__t__ (__eq__ (fdepname, fparentname))) {
/* 000623 */ 					(function () {
/* 000623 */ 						var __accu0__ = dependents;
/* 000623 */ 						return __call__ (__accu0__.add, __accu0__, fname);
/* 000623 */ 					}) ();
/* 000623 */ 				}
/* 000623 */ 			}
/* 000623 */ 		}
/* 000624 */ 		return __call__ (sorted, null, __call__ (list, null, dependents));
/* 000624 */ 	};
/* 000630 */ 	var sorted_features = [];
/* 000631 */ 	var root_features = (function () {
/* 000631 */ 		var __accu0__ = [];
/* 000634 */ 		var __iterable0__ = __call__ (py_reversed, null, features_to_sort);
/* 000634 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000634 */ 			var f = __getitem__ (__iterable0__, __index0__);
/* 000635 */ 			if (__t__ (__eq__ (__call__ (len, null, __getitem__ (all_feature_dependencies, f.feature_name)), 0))) {
/* 000635 */ 				(function () {
/* 000635 */ 					var __accu1__ = __accu0__;
/* 000635 */ 					return __call__ (__accu1__.append, __accu1__, f);
/* 000635 */ 				}) ();
/* 000635 */ 			}
/* 000635 */ 		}
/* 000635 */ 		return __accu0__;
/* 000635 */ 	}) ();
/* 000639 */ 	while (__t__ (__gt__ (__call__ (len, null, root_features), 0))) {
/* 000640 */ 		var n = (function () {
/* 000640 */ 			var __accu0__ = root_features;
/* 000640 */ 			return __call__ (__accu0__.py_pop, __accu0__);
/* 000640 */ 		}) ();
/* 000641 */ 		(function () {
/* 000641 */ 			var __accu0__ = sorted_features;
/* 000641 */ 			return __call__ (__accu0__.append, __accu0__, n);
/* 000641 */ 		}) ();
/* 000643 */ 		var n_name = n.feature_name;
/* 000645 */ 		var iter_dependents = __call__ (get_feature_dependents, null, n_name, all_feature_dependencies);
/* 000646 */ 		var __iterable0__ = iter_dependents;
/* 000646 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000646 */ 			var fdependentname = __getitem__ (__iterable0__, __index0__);
/* 000649 */ 			(function () {
/* 000649 */ 				var __accu0__ = __getitem__ (all_feature_dependencies, fdependentname);
/* 000649 */ 				return __call__ (__accu0__.remove, __accu0__, n_name);
/* 000649 */ 			}) ();
/* 000653 */ 			if (__t__ (__eq__ (__call__ (len, null, __getitem__ (all_feature_dependencies, fdependentname)), 0))) {
/* 000655 */ 				(function () {
/* 000655 */ 					var __accu0__ = root_features;
/* 000655 */ 					return __call__ (__accu0__.insert, __accu0__, 0, __getitem__ (features_by_name, fdependentname));
/* 000655 */ 				}) ();
/* 000655 */ 			}
/* 000655 */ 		}
/* 000655 */ 	}
/* 000658 */ 	var problematic_features = [];
/* 000659 */ 	var __iterable0__ = (function () {
/* 000659 */ 		var __accu0__ = all_feature_dependencies;
/* 000659 */ 		return __call__ (__accu0__.py_items, __accu0__);
/* 000659 */ 	}) ();
/* 000659 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000659 */ 		var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000659 */ 		var fsrcname = __left0__ [0];
/* 000659 */ 		var featuredeps = __left0__ [1];
/* 000660 */ 		if (__t__ (__gt__ (__call__ (len, null, featuredeps), 0))) {
/* 000661 */ 			(function () {
/* 000661 */ 				var __accu0__ = problematic_features;
/* 000662 */ 				return __call__ (__accu0__.append, __accu0__, __add__ ('‘{}’ → '.format (fsrcname), (function () {
/* 000662 */ 					var __accu1__ = ', ';
/* 000662 */ 					return __call__ (__accu1__.join, __accu1__, (function () {
/* 000662 */ 						var __accu2__ = [];
/* 000662 */ 						var __iterable1__ = featuredeps;
/* 000662 */ 						for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000662 */ 							var fdepname = __getitem__ (__iterable1__, __index1__);
/* 000662 */ 							(function () {
/* 000662 */ 								var __accu3__ = __accu2__;
/* 000662 */ 								return __call__ (__accu3__.append, __accu3__, '‘{}’'.format (fdepname));
/* 000662 */ 							}) ();
/* 000662 */ 						}
/* 000662 */ 						return __accu2__;
/* 000662 */ 					}) ());
/* 000662 */ 				}) ()));
/* 000662 */ 			}) ();
/* 000662 */ 		}
/* 000662 */ 	}
/* 000664 */ 	if (__t__ (__gt__ (__call__ (len, null, problematic_features), 0))) {
/* 000667 */ 		var __except0__ = __call__ (ValueError, null, __add__ ('The feature dependency graph has a cycle!  Problematic dependencies:'.format (), (function () {
/* 000667 */ 			var __accu0__ = '; ';
/* 000667 */ 			return __call__ (__accu0__.join, __accu0__, problematic_features);
/* 000667 */ 		}) ()));
/* 000667 */ 		__except0__.__cause__ = null;
/* 000667 */ 		throw __except0__;
/* 000667 */ 	}
/* 000670 */ 	if (__t__ (__ne__ (__call__ (len, null, sorted_features), __call__ (len, null, features_to_sort)))) {
/* 000671 */ 		var __except0__ = __call__ (RuntimeError, null, "Internal error, we didn't get all the features right when ordering them!");
/* 000671 */ 		__except0__.__cause__ = null;
/* 000671 */ 		throw __except0__;
/* 000671 */ 	}
/* 000675 */ 	return tuple ([sorted_features, features_by_name]);
/* 000675 */ };
/* 000704 */ export var FLMEnvironment =  __class__ ('FLMEnvironment', [object], {
/* 000704 */ 	__module__: __name__,
/* 000723 */ 	get __init__ () {return __get__ (this, function (self, features, parsing_state, latex_context) {
/* 000723 */ 		var tolerant_parsing = false;
/* 000723 */ 		var parsing_mode_deltas = null;
/* 000723 */ 		if (arguments.length) {
/* 000723 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000723 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000723 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000723 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000723 */ 					switch (__attrib0__) {
/* 000723 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000723 */ 						case 'features': var features = __allkwargs0__ [__attrib0__]; break;
/* 000723 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000723 */ 						case 'latex_context': var latex_context = __allkwargs0__ [__attrib0__]; break;
/* 000723 */ 						case 'tolerant_parsing': var tolerant_parsing = __allkwargs0__ [__attrib0__]; break;
/* 000723 */ 						case 'parsing_mode_deltas': var parsing_mode_deltas = __allkwargs0__ [__attrib0__]; break;
/* 000723 */ 					}
/* 000723 */ 				}
/* 000723 */ 			}
/* 000723 */ 		}
/* 000723 */ 		else {
/* 000723 */ 		}
/* 000732 */ 		__call__ (__call__ (__super__, null, FLMEnvironment, '__init__'), null, self);
/* 000734 */ 		// pass;
/* 000738 */ 		self.latex_context = latex_context;
/* 000739 */ 		self.parsing_state = parsing_state;
/* 000741 */ 		self.parsing_mode_deltas = (__t__ (parsing_mode_deltas) ? __call__ (dict, null, parsing_mode_deltas) : dict ({}));
/* 000743 */ 		var __left0__ = __call__ (features_sorted_by_dependencies, null, features);
/* 000743 */ 		self.features = __left0__ [0];
/* 000743 */ 		self.features_by_name = __left0__ [1];
/* 000745 */ 		// pass;
/* 000749 */ 		self.tolerant_parsing = tolerant_parsing;
/* 000751 */ 		self._nodes_finalizer = __call__ (NodesFinalizer, null);
/* 000753 */ 		if (__t__ (self.parsing_state.latex_context === null)) {
/* 000756 */ 			var __iterable0__ = self.features;
/* 000756 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000756 */ 				var f = __getitem__ (__iterable0__, __index0__);
/* 000757 */ 				var moredefs = (function () {
/* 000757 */ 					var __accu0__ = f;
/* 000757 */ 					return __call__ (__accu0__.add_latex_context_definitions, __accu0__);
/* 000757 */ 				}) ();
/* 000758 */ 				// pass;
/* 000763 */ 				if (__t__ (moredefs !== null)) {
/* 000764 */ 					var moredefs = __call__ (dict, null, moredefs);
/* 000765 */ 					if (__t__ (__call__ (len, null, moredefs))) {
/* 000766 */ 						// pass;
/* 000769 */ 						(function () {
/* 000769 */ 							var __accu0__ = moredefs;
/* 000769 */ 							return __call__ (__accu0__.py_update, __accu0__, __call__ (dict, null, __kwargtrans__ ({prepend: true})));
/* 000769 */ 						}) ();
/* 000770 */ 						(function () {
/* 000770 */ 							var __accu0__ = self.latex_context;
/* 000770 */ 							return __call__ (__accu0__.add_context_category, __accu0__, 'feature--{}'.format (f.feature_name), __kwargtrans__ (moredefs));
/* 000770 */ 						}) ();
/* 000770 */ 					}
/* 000770 */ 				}
/* 000770 */ 			}
/* 000776 */ 			(function () {
/* 000776 */ 				var __accu0__ = self.latex_context;
/* 000776 */ 				return __call__ (__accu0__.freeze, __accu0__);
/* 000776 */ 			}) ();
/* 000779 */ 			self.parsing_state.latex_context = self.latex_context;
/* 000779 */ 		}
/* 000781 */ 		else if (__t__ (self.latex_context !== null)) {
/* 000784 */ 			var __except0__ = __call__ (RuntimeError, null, 'The specified `parsing_state` instance already has a latex_context set');
/* 000784 */ 			__except0__.__cause__ = null;
/* 000784 */ 			throw __except0__;
/* 000784 */ 		}
/* 000784 */ 	});},
/* 000790 */ 	get supports_feature () {return __get__ (this, function (self, feature_name) {
/* 000790 */ 		if (arguments.length) {
/* 000790 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000790 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000790 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000790 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000790 */ 					switch (__attrib0__) {
/* 000790 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000790 */ 						case 'feature_name': var feature_name = __allkwargs0__ [__attrib0__]; break;
/* 000790 */ 					}
/* 000790 */ 				}
/* 000790 */ 			}
/* 000790 */ 		}
/* 000790 */ 		else {
/* 000790 */ 		}
/* 000791 */ 		return __t__ (__in__ (feature_name, self.features_by_name)) && __getitem__ (self.features_by_name, feature_name) !== null;
/* 000791 */ 	});},
/* 000796 */ 	get feature () {return __get__ (this, function (self, feature_name) {
/* 000796 */ 		if (arguments.length) {
/* 000796 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000796 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000796 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000796 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000796 */ 					switch (__attrib0__) {
/* 000796 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000796 */ 						case 'feature_name': var feature_name = __allkwargs0__ [__attrib0__]; break;
/* 000796 */ 					}
/* 000796 */ 				}
/* 000796 */ 			}
/* 000796 */ 		}
/* 000796 */ 		else {
/* 000796 */ 		}
/* 000797 */ 		return __getitem__ (self.features_by_name, feature_name);
/* 000797 */ 	});},
/* 000800 */ 	parsing_state_event_handler: null,
/* 000807 */ 	get make_latex_walker () {return __get__ (this, function (self, flm_text) {
/* 000807 */ 		var parsing_mode = null;
/* 000807 */ 		var resource_info = null;
/* 000807 */ 		var tolerant_parsing = null;
/* 000807 */ 		var what = null;
/* 000807 */ 		var input_lineno_colno_offsets = null;
/* 000807 */ 		if (arguments.length) {
/* 000807 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000807 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000807 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000807 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000807 */ 					switch (__attrib0__) {
/* 000807 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000807 */ 						case 'flm_text': var flm_text = __allkwargs0__ [__attrib0__]; break;
/* 000807 */ 						case 'standalone_mode': var standalone_mode = __allkwargs0__ [__attrib0__]; break;
/* 000807 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000807 */ 						case 'parsing_mode': var parsing_mode = __allkwargs0__ [__attrib0__]; break;
/* 000807 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000807 */ 						case 'tolerant_parsing': var tolerant_parsing = __allkwargs0__ [__attrib0__]; break;
/* 000807 */ 						case 'what': var what = __allkwargs0__ [__attrib0__]; break;
/* 000807 */ 						case 'input_lineno_colno_offsets': var input_lineno_colno_offsets = __allkwargs0__ [__attrib0__]; break;
/* 000807 */ 					}
/* 000807 */ 				}
/* 000807 */ 			}
/* 000807 */ 		}
/* 000807 */ 		else {
/* 000807 */ 		}
/* 000820 */ 		var default_parsing_state = (function () {
/* 000820 */ 			var __accu0__ = self;
/* 000820 */ 			return __call__ (__accu0__.make_parsing_state, __accu0__, __kwargtrans__ ({is_block_level: is_block_level, parsing_mode: parsing_mode}));
/* 000820 */ 		}) ();
/* 000825 */ 		if (__t__ (tolerant_parsing === null)) {
/* 000826 */ 			var tolerant_parsing = self.tolerant_parsing;
/* 000826 */ 		}
/* 000828 */ 		var latex_walker = __call__ (FLMLatexWalker, null, __kwargtrans__ ({flm_text: flm_text, default_parsing_state: default_parsing_state, tolerant_parsing: tolerant_parsing, flm_environment: self, standalone_mode: standalone_mode, resource_info: resource_info, what: what, parsing_state_event_handler: self.parsing_state_event_handler, input_lineno_colno_offsets: input_lineno_colno_offsets}));
/* 000842 */ 		return latex_walker;
/* 000842 */ 	});},
/* 000844 */ 	get define_parsing_mode () {return __get__ (this, function (self, parsing_mode, parsing_mode_delta) {
/* 000844 */ 		if (arguments.length) {
/* 000844 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000844 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000844 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000844 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000844 */ 					switch (__attrib0__) {
/* 000844 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000844 */ 						case 'parsing_mode': var parsing_mode = __allkwargs0__ [__attrib0__]; break;
/* 000844 */ 						case 'parsing_mode_delta': var parsing_mode_delta = __allkwargs0__ [__attrib0__]; break;
/* 000844 */ 					}
/* 000844 */ 				}
/* 000844 */ 			}
/* 000844 */ 		}
/* 000844 */ 		else {
/* 000844 */ 		}
/* 000845 */ 		if (__t__ (__in__ (parsing_mode, self.parsing_mode_deltas))) {
/* 000846 */ 			var __except0__ = __call__ (ValueError, null, 'Parsing mode ‘{}’ already defined!'.format (parsing_mode));
/* 000846 */ 			__except0__.__cause__ = null;
/* 000846 */ 			throw __except0__;
/* 000846 */ 		}
/* 000847 */ 		__setitem__ (self.parsing_mode_deltas, parsing_mode, parsing_mode_delta);
/* 000847 */ 	});},
/* 000849 */ 	get make_parsing_state () {return __get__ (this, function (self, is_block_level, parsing_mode) {
/* 000849 */ 		if (typeof parsing_mode == 'undefined' || (parsing_mode != null && parsing_mode.hasOwnProperty ("__kwargtrans__"))) {;
/* 000849 */ 			var parsing_mode = null;
/* 000849 */ 		};
/* 000849 */ 		if (arguments.length) {
/* 000849 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000849 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000849 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000849 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000849 */ 					switch (__attrib0__) {
/* 000849 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000849 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000849 */ 						case 'parsing_mode': var parsing_mode = __allkwargs0__ [__attrib0__]; break;
/* 000849 */ 					}
/* 000849 */ 				}
/* 000849 */ 			}
/* 000849 */ 		}
/* 000849 */ 		else {
/* 000849 */ 		}
/* 000853 */ 		var default_parsing_state = self.parsing_state;
/* 000855 */ 		if (__t__ (parsing_mode !== null)) {
/* 000856 */ 			try {
/* 000857 */ 				var parsing_state_delta = __getitem__ (self.parsing_mode_deltas, parsing_mode);
/* 000857 */ 			}
/* 000857 */ 			catch (__except0__) {
/* 000857 */ 				if (isinstance (__except0__, KeyError)) {
/* 000857 */ 					var e = __except0__;
/* 000859 */ 					var __except1__ = __call__ (ValueError, null, 'Invalid parsing_mode ‘{}’'.format (parsing_mode));
/* 000859 */ 					__except1__.__cause__ = null;
/* 000859 */ 					throw __except1__;
/* 000859 */ 				}
/* 000859 */ 				else {
/* 000859 */ 					throw __except0__;
/* 000859 */ 				}
/* 000859 */ 			}
/* 000861 */ 			if (__t__ (parsing_state_delta !== null)) {
/* 000862 */ 				var default_parsing_state = (function () {
/* 000862 */ 					var __accu0__ = parsing_state_delta;
/* 000862 */ 					return __call__ (__accu0__.get_updated_parsing_state, __accu0__, default_parsing_state, __kwargtrans__ ({latex_walker: null}));
/* 000862 */ 				}) ();
/* 000862 */ 			}
/* 000862 */ 		}
/* 000867 */ 		var kwargs = dict ({});
/* 000868 */ 		if (__t__ (is_block_level !== null)) {
/* 000869 */ 			__setitem__ (kwargs, 'is_block_level', is_block_level);
/* 000869 */ 		}
/* 000871 */ 		return (function () {
/* 000871 */ 			var __accu0__ = default_parsing_state;
/* 000871 */ 			return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ (kwargs));
/* 000871 */ 		}) ();
/* 000871 */ 	});},
/* 000874 */ 	get make_fragment () {return __get__ (this, function (self, flm_text) {
/* 000874 */ 		var kwargs = dict ();
/* 000874 */ 		if (arguments.length) {
/* 000874 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000874 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000874 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000874 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000874 */ 					switch (__attrib0__) {
/* 000874 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000874 */ 						case 'flm_text': var flm_text = __allkwargs0__ [__attrib0__]; break;
/* 000874 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000874 */ 					}
/* 000874 */ 				}
/* 000874 */ 				delete kwargs.__kwargtrans__;
/* 000874 */ 			}
/* 000874 */ 		}
/* 000874 */ 		else {
/* 000874 */ 		}
/* 000876 */ 		if (__t__ (__call__ (isinstance, null, flm_text, FLMFragment))) {
/* 000877 */ 			var frag = flm_text;
/* 000878 */ 			var __iterable0__ = tuple (['is_block_level', 'standalone_mode']);
/* 000878 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000878 */ 				var fld = __getitem__ (__iterable0__, __index0__);
/* 000880 */ 				if (__t__ (__t__ (__in__ (fld, kwargs)) && __t__ (__getitem__ (kwargs, fld) !== null) && __ne__ (__getitem__ (kwargs, fld), __call__ (getattr, null, frag, fld)))) {
/* 000884 */ 					var __except0__ = __call__ (ValueError, null, 'make_fragment(): FLMFragment instance specified but its ‘{}’ ({}) differs with requested ‘{}’ ({})'.format (fld, __call__ (repr, null, __call__ (getattr, null, frag, fld)), fld, __getitem__ (kwargs, fld)));
/* 000884 */ 					__except0__.__cause__ = null;
/* 000884 */ 					throw __except0__;
/* 000884 */ 				}
/* 000884 */ 			}
/* 000887 */ 			return frag;
/* 000887 */ 		}
/* 000889 */ 		try {
/* 000890 */ 			var fragment = __call__ (FLMFragment, null, flm_text, __kwargtrans__ (__mergekwargtrans__ ({environment: self}, kwargs)));
/* 000891 */ 			return fragment;
/* 000891 */ 		}
/* 000891 */ 		catch (__except0__) {
/* 000893 */ 			if (__t__ (!__t__ (((function () {
/* 000893 */ 				var __accu0__ = kwargs;
/* 000893 */ 				return __call__ (__accu0__.py_get, __accu0__, 'silent', false);
/* 000893 */ 			}) ())))) {
/* 000894 */ 				(function () {
/* 000894 */ 					var __accu0__ = logger;
/* 000895 */ 					return __call__ (__accu0__.error, __accu0__, (function () {
/* 000895 */ 						var __accu1__ = 'Error compiling fragment for {}\nContent was:\n‘{}’\n';
/* 000896 */ 						return __call__ (__accu1__.format, __accu1__, (function () {
/* 000896 */ 							var __accu2__ = kwargs;
/* 000896 */ 							return __call__ (__accu2__.py_get, __accu2__, 'what', '(unknown)');
/* 000896 */ 						}) (), flm_text);
/* 000896 */ 					}) (), __kwargtrans__ ({exc_info: true}));
/* 000896 */ 				}) ();
/* 000896 */ 			}
/* 000899 */ 			__except0__.__cause__ = null;
/* 000899 */ 			throw __except0__;
/* 000899 */ 		}
/* 000899 */ 	});},
/* 000903 */ 	get make_document () {return __get__ (this, function (self, render_callback) {
/* 000903 */ 		var kwargs = dict ();
/* 000903 */ 		if (arguments.length) {
/* 000903 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000903 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000903 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000903 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000903 */ 					switch (__attrib0__) {
/* 000903 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000903 */ 						case 'render_callback': var render_callback = __allkwargs0__ [__attrib0__]; break;
/* 000903 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000903 */ 					}
/* 000903 */ 				}
/* 000903 */ 				delete kwargs.__kwargtrans__;
/* 000903 */ 			}
/* 000903 */ 		}
/* 000903 */ 		else {
/* 000903 */ 		}
/* 000912 */ 		var doc = __call__ (FLMDocument, null, render_callback, __kwargtrans__ (__mergekwargtrans__ ({environment: self}, kwargs)));
/* 000917 */ 		(function () {
/* 000917 */ 			var __accu0__ = doc;
/* 000917 */ 			return __call__ (__accu0__.initialize, __accu0__);
/* 000917 */ 		}) ();
/* 000918 */ 		return doc;
/* 000918 */ 	});},
/* 000921 */ 	get get_features_selection () {return __get__ (this, function (self, enable_features) {
/* 000921 */ 		if (arguments.length) {
/* 000921 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000921 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000921 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000921 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000921 */ 					switch (__attrib0__) {
/* 000921 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000921 */ 						case 'enable_features': var enable_features = __allkwargs0__ [__attrib0__]; break;
/* 000921 */ 					}
/* 000921 */ 				}
/* 000921 */ 			}
/* 000921 */ 		}
/* 000921 */ 		else {
/* 000921 */ 		}
/* 000923 */ 		if (__t__ (enable_features === null)) {
/* 000925 */ 			return self.features;
/* 000925 */ 		}
/* 000927 */ 		var features = (function () {
/* 000927 */ 			var __accu0__ = [];
/* 000927 */ 			var __iterable0__ = enable_features;
/* 000927 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000929 */ 				var feature_name = __getitem__ (__iterable0__, __index0__);
/* 000929 */ 				(function () {
/* 000929 */ 					var __accu1__ = __accu0__;
/* 000929 */ 					return __call__ (__accu1__.append, __accu1__, __getitem__ (self.features_by_name, feature_name));
/* 000929 */ 				}) ();
/* 000929 */ 			}
/* 000929 */ 			return __accu0__;
/* 000929 */ 		}) ();
/* 000933 */ 		__call__ (features_ensure_dependencies_are_met, null, features);
/* 000935 */ 		return features;
/* 000935 */ 	});},
/* 000940 */ 	environment_get_located_error_message: null,
/* 000942 */ 	get get_located_error_message () {return __get__ (this, function (self, exception_object) {
/* 000942 */ 		if (arguments.length) {
/* 000942 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000942 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000942 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000942 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000942 */ 					switch (__attrib0__) {
/* 000942 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000942 */ 						case 'exception_object': var exception_object = __allkwargs0__ [__attrib0__]; break;
/* 000942 */ 					}
/* 000942 */ 				}
/* 000942 */ 			}
/* 000942 */ 		}
/* 000942 */ 		else {
/* 000942 */ 		}
/* 000943 */ 		if (__t__ (self.environment_get_located_error_message !== null)) {
/* 000944 */ 			return (function () {
/* 000944 */ 				var __accu0__ = self;
/* 000944 */ 				return __call__ (__accu0__.environment_get_located_error_message, __accu0__, exception_object);
/* 000944 */ 			}) ();
/* 000944 */ 		}
/* 000945 */ 		return (function () {
/* 000945 */ 			var __accu0__ = __call__ (LatexWalkerLocatedErrorFormatter, null, exception_object);
/* 000945 */ 			return __call__ (__accu0__.to_display_string, __accu0__);
/* 000945 */ 		}) ();
/* 000945 */ 	});},
/* 000949 */ 	get finalize_nodelist () {return __get__ (this, function (self, nodelist) {
/* 000949 */ 		if (arguments.length) {
/* 000949 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000949 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000949 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000949 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000949 */ 					switch (__attrib0__) {
/* 000949 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000949 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000949 */ 					}
/* 000949 */ 				}
/* 000949 */ 			}
/* 000949 */ 		}
/* 000949 */ 		else {
/* 000949 */ 		}
/* 000950 */ 		var nl = (function () {
/* 000950 */ 			var __accu0__ = self._nodes_finalizer;
/* 000950 */ 			return __call__ (__accu0__.finalize_nodelist, __accu0__, nodelist);
/* 000950 */ 		}) ();
/* 000951 */ 		return nl;
/* 000951 */ 	});},
/* 000953 */ 	get finalize_node () {return __get__ (this, function (self, node) {
/* 000953 */ 		if (arguments.length) {
/* 000953 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000953 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000953 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000953 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000953 */ 					switch (__attrib0__) {
/* 000953 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000953 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000953 */ 					}
/* 000953 */ 				}
/* 000953 */ 			}
/* 000953 */ 		}
/* 000953 */ 		else {
/* 000953 */ 		}
/* 000960 */ 		var node = (function () {
/* 000960 */ 			var __accu0__ = self._nodes_finalizer;
/* 000960 */ 			return __call__ (__accu0__.finalize_node, __accu0__, node);
/* 000960 */ 		}) ();
/* 000966 */ 		node._flm_node_id = __call__ (fn_unique_object_id, null, node);
/* 000968 */ 		return node;
/* 000968 */ 	});}
/* 000968 */ });
/* 000976 */ export var standard_parsing_state = function () {
/* 000976 */ 	var force_block_level = null;
/* 000976 */ 	var enable_comments = true;
/* 000976 */ 	var comment_start = '%%';
/* 000976 */ 	var extra_forbidden_characters = '';
/* 000976 */ 	var dollar_inline_math_mode = false;
/* 000976 */ 	if (arguments.length) {
/* 000976 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000976 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000976 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000976 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000976 */ 				switch (__attrib0__) {
/* 000976 */ 					case 'force_block_level': var force_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000976 */ 					case 'enable_comments': var enable_comments = __allkwargs0__ [__attrib0__]; break;
/* 000976 */ 					case 'comment_start': var comment_start = __allkwargs0__ [__attrib0__]; break;
/* 000976 */ 					case 'extra_forbidden_characters': var extra_forbidden_characters = __allkwargs0__ [__attrib0__]; break;
/* 000976 */ 					case 'dollar_inline_math_mode': var dollar_inline_math_mode = __allkwargs0__ [__attrib0__]; break;
/* 000976 */ 				}
/* 000976 */ 			}
/* 000976 */ 		}
/* 000976 */ 	}
/* 000976 */ 	else {
/* 000976 */ 	}
/* 000992 */ 	var forbidden_characters = __call__ (str, null, extra_forbidden_characters);
/* 000993 */ 	if (__t__ (__t__ (!__t__ ((dollar_inline_math_mode))) && !__in__ ('$', forbidden_characters))) {
/* 000994 */ 		var forbidden_characters = __call__ (__iadd__, null, forbidden_characters, '$');
/* 000994 */ 	}
/* 000995 */ 	if (__t__ (__t__ ((__t__ (!__t__ ((enable_comments))) || __ne__ (comment_start, '%'))) && !__in__ ('%', forbidden_characters))) {
/* 000997 */ 		var forbidden_characters = __call__ (__iadd__, null, forbidden_characters, '%');
/* 000997 */ 	}
/* 000999 */ 	var latex_inline_math_delimiters = [tuple (['\\(', '\\)'])];
/* 001001 */ 	if (__t__ (dollar_inline_math_mode)) {
/* 001002 */ 		(function () {
/* 001002 */ 			var __accu0__ = latex_inline_math_delimiters;
/* 001002 */ 			return __call__ (__accu0__.append, __accu0__, tuple (['$', '$']));
/* 001002 */ 		}) ();
/* 001002 */ 	}
/* 001004 */ 	return __call__ (FLMParsingState, null, __kwargtrans__ ({is_block_level: force_block_level, latex_context: null, enable_comments: enable_comments, comment_start: comment_start, latex_inline_math_delimiters: latex_inline_math_delimiters, latex_display_math_delimiters: [tuple (['\\[', '\\]'])], forbidden_characters: forbidden_characters}));
/* 001004 */ };
/* 001016 */ export var FLMLatexWalkerMathContextParsingStateEventHandler =  __class__ ('FLMLatexWalkerMathContextParsingStateEventHandler', [latexnodes.LatexWalkerParsingStateEventHandler], {
/* 001016 */ 	__module__: __name__,
/* 001045 */ 	math_mode_extend_context: dict ({'unknown_macro_spec': (function () {
/* 001045 */ 		var __accu0__ = macrospec;
/* 001045 */ 		return __call__ (__accu0__.MacroSpec, __accu0__, '');
/* 001046 */ 	}) (), 'unknown_environment_spec': (function () {
/* 001046 */ 		var __accu0__ = macrospec;
/* 001046 */ 		return __call__ (__accu0__.EnvironmentSpec, __accu0__, '');
/* 001047 */ 	}) (), 'unknown_specials_spec': (function () {
/* 001047 */ 		var __accu0__ = macrospec;
/* 001047 */ 		return __call__ (__accu0__.SpecialsSpec, __accu0__, '');
/* 001044 */ 	}) ()}),
/* 001050 */ 	get enter_math_mode () {return __get__ (this, function (self, math_mode_delimiter, trigger_token) {
/* 001050 */ 		if (typeof math_mode_delimiter == 'undefined' || (math_mode_delimiter != null && math_mode_delimiter.hasOwnProperty ("__kwargtrans__"))) {;
/* 001050 */ 			var math_mode_delimiter = null;
/* 001050 */ 		};
/* 001050 */ 		if (typeof trigger_token == 'undefined' || (trigger_token != null && trigger_token.hasOwnProperty ("__kwargtrans__"))) {;
/* 001050 */ 			var trigger_token = null;
/* 001050 */ 		};
/* 001050 */ 		if (arguments.length) {
/* 001050 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001050 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001050 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001050 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001050 */ 					switch (__attrib0__) {
/* 001050 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001050 */ 						case 'math_mode_delimiter': var math_mode_delimiter = __allkwargs0__ [__attrib0__]; break;
/* 001050 */ 						case 'trigger_token': var trigger_token = __allkwargs0__ [__attrib0__]; break;
/* 001050 */ 					}
/* 001050 */ 				}
/* 001050 */ 			}
/* 001050 */ 		}
/* 001050 */ 		else {
/* 001050 */ 		}
/* 001056 */ 		var set_attributes = __call__ (dict, null, __kwargtrans__ ({in_math_mode: true, math_mode_delimiter: math_mode_delimiter}));
/* 001060 */ 		// pass;
/* 001065 */ 		return (function () {
/* 001065 */ 			var __accu0__ = macrospec;
/* 001065 */ 			return __call__ (__accu0__.ParsingStateDeltaExtendLatexContextDb, __accu0__, __kwargtrans__ ({set_attributes: set_attributes, extend_latex_context: self.math_mode_extend_context}));
/* 001065 */ 		}) ();
/* 001065 */ 	});},
/* 001070 */ 	get leave_math_mode () {return __get__ (this, function (self, trigger_token) {
/* 001070 */ 		if (typeof trigger_token == 'undefined' || (trigger_token != null && trigger_token.hasOwnProperty ("__kwargtrans__"))) {;
/* 001070 */ 			var trigger_token = null;
/* 001070 */ 		};
/* 001070 */ 		if (arguments.length) {
/* 001070 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001070 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001070 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001070 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001070 */ 					switch (__attrib0__) {
/* 001070 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001070 */ 						case 'trigger_token': var trigger_token = __allkwargs0__ [__attrib0__]; break;
/* 001070 */ 					}
/* 001070 */ 				}
/* 001070 */ 			}
/* 001070 */ 		}
/* 001070 */ 		else {
/* 001070 */ 		}
/* 001077 */ 		return (function () {
/* 001077 */ 			var __accu0__ = macrospec;
/* 001082 */ 			return __call__ (__accu0__.ParsingStateDeltaExtendLatexContextDb, __accu0__, __kwargtrans__ ({set_attributes: __call__ (dict, null, __kwargtrans__ ({in_math_mode: false, math_mode_delimiter: null})), extend_latex_context: __call__ (dict, null, __kwargtrans__ ({unknown_macro_spec: null, unknown_environment_spec: null, unknown_specials_spec: null}))}));
/* 001082 */ 		}) ();
/* 001082 */ 	});}
/* 001082 */ });
/* 001093 */ export var standard_environment_get_located_error_message = function (exception_object) {
/* 001093 */ 	if (arguments.length) {
/* 001093 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001093 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001093 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001093 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001093 */ 				switch (__attrib0__) {
/* 001093 */ 					case 'exception_object': var exception_object = __allkwargs0__ [__attrib0__]; break;
/* 001093 */ 				}
/* 001093 */ 			}
/* 001093 */ 		}
/* 001093 */ 	}
/* 001093 */ 	else {
/* 001093 */ 	}
/* 001117 */ 	var msg = null;
/* 001118 */ 	var error_type_info = exception_object.error_type_info;
/* 001119 */ 	if (__t__ (error_type_info)) {
/* 001120 */ 		var what = __getitem__ (error_type_info, 'what');
/* 001121 */ 		if (__t__ (__eq__ (what, 'token_forbidden_character'))) {
/* 001122 */ 			if (__t__ (__eq__ (__getitem__ (error_type_info, 'forbidden_character'), '%'))) {
/* 001123 */ 				var msg = 'Single percent signs are not allowed here. Use ‘\\%’ to typeset a literal percent sign, and ‘%%’ to start a comment.';
/* 001123 */ 			}
/* 001127 */ 			else if (__t__ (__eq__ (__getitem__ (error_type_info, 'forbidden_character'), '$'))) {
/* 001128 */ 				var msg = "You can't use ‘$’ here. LaTeX math should be typeset using \\(...\\) for inline math and \\[...\\] for unnumbered display equations. Use ‘\\$’ for a literal dollar sign.";
/* 001128 */ 			}
/* 001128 */ 		}
/* 001128 */ 	}
/* 001133 */ 	if (__t__ (!__t__ ((msg)))) {
/* 001134 */ 		var msg = exception_object.msg;
/* 001134 */ 	}
/* 001136 */ 	var errfmt = (function () {
/* 001136 */ 		var __accu0__ = latexnodes;
/* 001136 */ 		return __call__ (__accu0__.LatexWalkerLocatedErrorFormatter, __accu0__, exception_object);
/* 001136 */ 	}) ();
/* 001138 */ 	var msg = __call__ (__iadd__, null, msg, (function () {
/* 001138 */ 		var __accu0__ = errfmt;
/* 001138 */ 		return __call__ (__accu0__.format_full_traceback, __accu0__);
/* 001138 */ 	}) ());
/* 001140 */ 	return msg;
/* 001140 */ };
/* 001147 */ export var make_standard_environment = function (features, parsing_state, latex_context, flm_environment_options, parsing_state_options) {
/* 001147 */ 	if (typeof parsing_state == 'undefined' || (parsing_state != null && parsing_state.hasOwnProperty ("__kwargtrans__"))) {;
/* 001147 */ 		var parsing_state = null;
/* 001147 */ 	};
/* 001147 */ 	if (typeof latex_context == 'undefined' || (latex_context != null && latex_context.hasOwnProperty ("__kwargtrans__"))) {;
/* 001147 */ 		var latex_context = null;
/* 001147 */ 	};
/* 001147 */ 	if (typeof flm_environment_options == 'undefined' || (flm_environment_options != null && flm_environment_options.hasOwnProperty ("__kwargtrans__"))) {;
/* 001147 */ 		var flm_environment_options = null;
/* 001147 */ 	};
/* 001147 */ 	if (typeof parsing_state_options == 'undefined' || (parsing_state_options != null && parsing_state_options.hasOwnProperty ("__kwargtrans__"))) {;
/* 001147 */ 		var parsing_state_options = null;
/* 001147 */ 	};
/* 001147 */ 	if (arguments.length) {
/* 001147 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001147 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001147 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001147 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001147 */ 				switch (__attrib0__) {
/* 001147 */ 					case 'features': var features = __allkwargs0__ [__attrib0__]; break;
/* 001147 */ 					case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 001147 */ 					case 'latex_context': var latex_context = __allkwargs0__ [__attrib0__]; break;
/* 001147 */ 					case 'flm_environment_options': var flm_environment_options = __allkwargs0__ [__attrib0__]; break;
/* 001147 */ 					case 'parsing_state_options': var parsing_state_options = __allkwargs0__ [__attrib0__]; break;
/* 001147 */ 				}
/* 001147 */ 			}
/* 001147 */ 		}
/* 001147 */ 	}
/* 001147 */ 	else {
/* 001147 */ 	}
/* 001151 */ 	if (__t__ (latex_context === null)) {
/* 001152 */ 		var latex_context = (function () {
/* 001152 */ 			var __accu0__ = macrospec;
/* 001152 */ 			return __call__ (__accu0__.LatexContextDb, __accu0__);
/* 001152 */ 		}) ();
/* 001152 */ 	}
/* 001154 */ 	if (__t__ (parsing_state === null)) {
/* 001155 */ 		var parsing_state_options_2 = dict ({});
/* 001156 */ 		if (__t__ (parsing_state_options !== null)) {
/* 001157 */ 			var parsing_state_options_2 = parsing_state_options;
/* 001157 */ 		}
/* 001159 */ 		var parsing_state = __call__ (standard_parsing_state, null, __kwargtrans__ (parsing_state_options_2));
/* 001159 */ 	}
/* 001161 */ 	var parsing_state_event_handler = __call__ (FLMLatexWalkerMathContextParsingStateEventHandler, null);
/* 001163 */ 	var flm_environment_options_2 = dict ({});
/* 001164 */ 	if (__t__ (flm_environment_options !== null)) {
/* 001165 */ 		var flm_environment_options_2 = flm_environment_options;
/* 001165 */ 	}
/* 001167 */ 	var environment = __call__ (FLMEnvironment, null, features, parsing_state, latex_context, __kwargtrans__ (flm_environment_options_2));
/* 001174 */ 	environment.parsing_state_event_handler = parsing_state_event_handler;
/* 001176 */ 	environment.environment_get_located_error_message = standard_environment_get_located_error_message;
/* 001179 */ 	return environment;
/* 001179 */ };
/* 001193 */ export var _make_argvalue = function (argvalue, latex_walker, parsing_state) {
/* 001193 */ 	if (arguments.length) {
/* 001193 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001193 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001193 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001193 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001193 */ 				switch (__attrib0__) {
/* 001193 */ 					case 'argvalue': var argvalue = __allkwargs0__ [__attrib0__]; break;
/* 001193 */ 					case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 001193 */ 					case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 001193 */ 				}
/* 001193 */ 			}
/* 001193 */ 		}
/* 001193 */ 	}
/* 001193 */ 	else {
/* 001193 */ 	}
/* 001195 */ 	if (__t__ (argvalue === null)) {
/* 001196 */ 		return null;
/* 001196 */ 	}
/* 001198 */ 	if (__t__ (__call__ (isinstance, null, argvalue, str))) {
/* 001199 */ 		var argvalue = (function () {
/* 001199 */ 			var __accu0__ = latex_walker;
/* 001199 */ 			return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: argvalue, pos: null, pos_end: null, parsing_state: parsing_state}));
/* 001199 */ 		}) ();
/* 001199 */ 	}
/* 001207 */ 	if (__t__ (__call__ (isinstance, null, argvalue, latexnodes_nodes.LatexGroupNode))) {
/* 001208 */ 		return argvalue;
/* 001208 */ 	}
/* 001212 */ 	if (__t__ (__call__ (isinstance, null, argvalue, latexnodes_nodes.LatexNodeList))) {
/* 001213 */ 		var nodelist = argvalue;
/* 001213 */ 	}
/* 001215 */ 	else if (__t__ (__call__ (isinstance, null, argvalue, list))) {
/* 001216 */ 		var nodelist = (function () {
/* 001216 */ 			var __accu0__ = latex_walker;
/* 001216 */ 			return __call__ (__accu0__.make_nodelist, __accu0__, argvalue, __kwargtrans__ ({parsing_state: parsing_state}));
/* 001216 */ 		}) ();
/* 001216 */ 	}
/* 001219 */ 	else {
/* 001222 */ 		var nodelist = (function () {
/* 001222 */ 			var __accu0__ = latex_walker;
/* 001222 */ 			return __call__ (__accu0__.make_nodelist, __accu0__, [argvalue], __kwargtrans__ ({parsing_state: parsing_state}));
/* 001222 */ 		}) ();
/* 001222 */ 	}
/* 001227 */ 	var groupnode = (function () {
/* 001227 */ 		var __accu0__ = latex_walker;
/* 001227 */ 		return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexGroupNode, __kwargtrans__ ({delimiters: tuple (['', '']), nodelist: nodelist, pos: nodelist.pos, pos_end: nodelist.pos_end, parsing_state: parsing_state}));
/* 001227 */ 	}) ();
/* 001236 */ 	return groupnode;
/* 001236 */ };
/* 001239 */ export var make_invocable_arguments = function (flm_spec, args) {
/* 001239 */ 	if (arguments.length) {
/* 001239 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001239 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001239 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001239 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001239 */ 				switch (__attrib0__) {
/* 001239 */ 					case 'flm_spec': var flm_spec = __allkwargs0__ [__attrib0__]; break;
/* 001239 */ 					case 'args': var args = __allkwargs0__ [__attrib0__]; break;
/* 001239 */ 					case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 001239 */ 					case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 001239 */ 				}
/* 001239 */ 			}
/* 001239 */ 		}
/* 001239 */ 	}
/* 001239 */ 	else {
/* 001239 */ 	}
/* 001241 */ 	var argnlist = (function () {
/* 001241 */ 		var __accu0__ = [];
/* 001241 */ 		var __iterable0__ = flm_spec.arguments_spec_list;
/* 001241 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001241 */ 			var _ = __getitem__ (__iterable0__, __index0__);
/* 001241 */ 			(function () {
/* 001241 */ 				var __accu1__ = __accu0__;
/* 001241 */ 				return __call__ (__accu1__.append, __accu1__, null);
/* 001241 */ 			}) ();
/* 001241 */ 		}
/* 001241 */ 		return __accu0__;
/* 001241 */ 	}) ();
/* 001243 */ 	if (__t__ (args === null)) {
/* 001244 */ 		return argnlist;
/* 001244 */ 	}
/* 001246 */ 	var __iterable0__ = (function () {
/* 001246 */ 		var __accu0__ = args;
/* 001246 */ 		return __call__ (__accu0__.py_items, __accu0__);
/* 001246 */ 	}) ();
/* 001246 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001246 */ 		var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 001246 */ 		var argname = __left0__ [0];
/* 001246 */ 		var argvalue = __left0__ [1];
/* 001248 */ 		var argj = null;
/* 001249 */ 		var __iterable1__ = __call__ (enumerate, null, flm_spec.arguments_spec_list);
/* 001249 */ 		for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 001249 */ 			var __left0__ = __getitem__ (__iterable1__, __index1__);
/* 001249 */ 			var candidateargj = __left0__ [0];
/* 001249 */ 			var candidateargspec = __left0__ [1];
/* 001250 */ 			if (__t__ (__eq__ (candidateargspec.argname, argname))) {
/* 001251 */ 				var argj = candidateargj;
/* 001251 */ 				break;
/* 001251 */ 			}
/* 001251 */ 		}
/* 001253 */ 		if (__t__ (argj === null)) {
/* 001254 */ 			(function () {
/* 001254 */ 				var __accu0__ = logger;
/* 001254 */ 				return __call__ (__accu0__.error, __accu0__, 'Cannot find argument %r in spec %r', argname, flm_spec.arguments_spec_list);
/* 001254 */ 			}) ();
/* 001256 */ 			var __except0__ = __call__ (ValueError, null, 'No argument named ‘{}’ in spec'.format (argname));
/* 001256 */ 			__except0__.__cause__ = null;
/* 001256 */ 			throw __except0__;
/* 001256 */ 		}
/* 001259 */ 		__setitem__ (argnlist, argj, __call__ (_make_argvalue, null, argvalue, latex_walker, parsing_state));
/* 001259 */ 	}
/* 001261 */ 	return argnlist;
/* 001261 */ };
/* 001264 */ export var make_invocable_node_instance = function (node_type, flm_spec) {
/* 001264 */ 	var args = null;
/* 001264 */ 	var body_nodelist = null;
/* 001264 */ 	var node_kwargs = null;
/* 001264 */ 	if (arguments.length) {
/* 001264 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001264 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001264 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001264 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001264 */ 				switch (__attrib0__) {
/* 001264 */ 					case 'node_type': var node_type = __allkwargs0__ [__attrib0__]; break;
/* 001264 */ 					case 'flm_spec': var flm_spec = __allkwargs0__ [__attrib0__]; break;
/* 001264 */ 					case 'args': var args = __allkwargs0__ [__attrib0__]; break;
/* 001264 */ 					case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 001264 */ 					case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 001264 */ 					case 'body_nodelist': var body_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 001264 */ 					case 'node_kwargs': var node_kwargs = __allkwargs0__ [__attrib0__]; break;
/* 001264 */ 				}
/* 001264 */ 			}
/* 001264 */ 		}
/* 001264 */ 	}
/* 001264 */ 	else {
/* 001264 */ 	}
/* 001271 */ 	var nkwargs = dict ({'pos': null, 'pos_end': null});
/* 001276 */ 	if (__t__ (node_type === latexnodes_nodes.LatexMacroNode)) {
/* 001277 */ 		__setitem__ (nkwargs, 'macroname', flm_spec.macroname);
/* 001278 */ 		if (__t__ (body_nodelist !== null)) {
/* 001279 */ 			var __except0__ = __call__ (ValueError, null, 'For a LatexMacroNode you must have body_nodelist=None');
/* 001279 */ 			__except0__.__cause__ = null;
/* 001279 */ 			throw __except0__;
/* 001279 */ 		}
/* 001279 */ 	}
/* 001281 */ 	else if (__t__ (node_type === latexnodes_nodes.LatexEnvironmentNode)) {
/* 001282 */ 		__setitem__ (nkwargs, 'environmentname', flm_spec.environmentname);
/* 001282 */ 	}
/* 001284 */ 	else if (__t__ (node_type === latexnodes_nodes.LatexSpecialsNode)) {
/* 001285 */ 		__setitem__ (nkwargs, 'specials_chars', flm_spec.specials_chars);
/* 001286 */ 		if (__t__ (body_nodelist !== null)) {
/* 001287 */ 			var __except0__ = __call__ (ValueError, null, 'For a LatexSpecialsNode you must have body_nodelist=None');
/* 001287 */ 			__except0__.__cause__ = null;
/* 001287 */ 			throw __except0__;
/* 001287 */ 		}
/* 001287 */ 	}
/* 001289 */ 	var argnlist = __call__ (make_invocable_arguments, null, flm_spec, args, __kwargtrans__ ({latex_walker: latex_walker, parsing_state: parsing_state}));
/* 001293 */ 	var nodeargd = (function () {
/* 001293 */ 		var __accu0__ = latexnodes_nodes;
/* 001293 */ 		return __call__ (__accu0__.ParsedArguments, __accu0__, __kwargtrans__ ({argnlist: argnlist, arguments_spec_list: flm_spec.arguments_spec_list}));
/* 001293 */ 	}) ();
/* 001298 */ 	if (__t__ (body_nodelist !== null)) {
/* 001299 */ 		__setitem__ (nkwargs, 'nodelist', body_nodelist);
/* 001299 */ 	}
/* 001301 */ 	if (__t__ (node_kwargs !== null)) {
/* 001302 */ 		(function () {
/* 001302 */ 			var __accu0__ = nkwargs;
/* 001302 */ 			return __call__ (__accu0__.py_update, __accu0__, node_kwargs);
/* 001302 */ 		}) ();
/* 001302 */ 	}
/* 001304 */ 	var node = (function () {
/* 001304 */ 		var __accu0__ = latex_walker;
/* 001304 */ 		return __call__ (__accu0__.make_node, __accu0__, node_type, __kwargtrans__ (__mergekwargtrans__ ({spec: flm_spec, nodeargd: nodeargd, parsing_state: parsing_state}, nkwargs)));
/* 001304 */ 	}) ();
/* 001312 */ 	var node = (function () {
/* 001312 */ 		var __accu0__ = flm_spec;
/* 001312 */ 		return __call__ (__accu0__.finalize_node, __accu0__, node);
/* 001312 */ 	}) ();
/* 001314 */ 	return node;
/* 001314 */ };
/* 000006 */ 
//# sourceMappingURL=flm.flmenvironment.map