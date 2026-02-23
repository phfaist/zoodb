/* 000001 */ // Transcrypt'ed from Python, 2026-02-23 19:58:46
/* 000006 */ var logging = {};
/* 000006 */ var re = {};
/* 000006 */ var unique_object_id = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000029 */ import * as __module_unique_object_id__ from './unique_object_id.js';
/* 000029 */ __nest__ (unique_object_id, '', __module_unique_object_id__);
/* 000023 */ import * as _autounichars from './flm._autounichars.js';
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
/* 000006 */ export {latexnodes, LatexWalkerLocatedErrorFormatter, LatexWalkerParseError, FLMDocument, macrospec, FLMFragment, latexnodes_nodes, _autounichars, latexwalker};
/* 000001 */ var __name__ = 'flm.flmenvironment';
/* 000008 */ export var logger = (function () {
/* 000008 */ 	var __accu0__ = logging;
/* 000008 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000008 */ }) ();
/* 000030 */ export var fn_unique_object_id = unique_object_id.fn_unique_object_id;
/* 000039 */ export var FLMParsingState =  __class__ ('FLMParsingState', [latexnodes.ParsingState], {
/* 000039 */ 	__module__: __name__,
/* 000056 */ 	_fields: __call__ (tuple, null, __add__ (__call__ (list, null, latexnodes.ParsingState._fields), ['is_block_level'])),
/* 000058 */ 	get set_fields () {return __get__ (this, function (self) {
/* 000058 */ 		var is_block_level = null;
/* 000058 */ 		var kwargs = dict ();
/* 000058 */ 		if (arguments.length) {
/* 000058 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000058 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000058 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000058 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000058 */ 					switch (__attrib0__) {
/* 000058 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000058 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000058 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000058 */ 					}
/* 000058 */ 				}
/* 000058 */ 				delete kwargs.__kwargtrans__;
/* 000058 */ 			}
/* 000058 */ 		}
/* 000058 */ 		else {
/* 000058 */ 		}
/* 000059 */ 		__call__ (__call__ (__super__, null, FLMParsingState, 'set_fields'), null, self, __kwargtrans__ (kwargs));
/* 000060 */ 		self.is_block_level = is_block_level;
/* 000060 */ 	});}
/* 000060 */ });
/* 000063 */ export var FLMParsingStateDeltaSetBlockLevel =  __class__ ('FLMParsingStateDeltaSetBlockLevel', [latexnodes.ParsingStateDelta], {
/* 000063 */ 	__module__: __name__,
/* 000070 */ 	get __init__ () {return __get__ (this, function (self, is_block_level) {
/* 000070 */ 		if (typeof is_block_level == 'undefined' || (is_block_level != null && is_block_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000070 */ 			var is_block_level = null;
/* 000070 */ 		};
/* 000070 */ 		if (arguments.length) {
/* 000070 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000070 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000070 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000070 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000070 */ 					switch (__attrib0__) {
/* 000070 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000070 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000070 */ 					}
/* 000070 */ 				}
/* 000070 */ 			}
/* 000070 */ 		}
/* 000070 */ 		else {
/* 000070 */ 		}
/* 000072 */ 		__call__ (__call__ (__super__, null, FLMParsingStateDeltaSetBlockLevel, '__init__'), null, self, __kwargtrans__ ({set_attributes: __call__ (dict, null, __kwargtrans__ ({is_block_level: is_block_level})), _fields: tuple (['is_block_level'])}));
/* 000075 */ 		self.is_block_level = is_block_level;
/* 000075 */ 	});}
/* 000075 */ });
/* 000081 */ export var _NotProvided =  __class__ ('_NotProvided', [object], {
/* 000081 */ 	__module__: __name__,
/* 000081 */ });
/* 000084 */ export var FLMArgumentSpec = function (parser, argname, is_block_level, flm_doc, parsing_state_delta) {
/* 000084 */ 	if (typeof is_block_level == 'undefined' || (is_block_level != null && is_block_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000084 */ 		var is_block_level = _NotProvided;
/* 000084 */ 	};
/* 000084 */ 	if (typeof flm_doc == 'undefined' || (flm_doc != null && flm_doc.hasOwnProperty ("__kwargtrans__"))) {;
/* 000084 */ 		var flm_doc = null;
/* 000084 */ 	};
/* 000084 */ 	if (typeof parsing_state_delta == 'undefined' || (parsing_state_delta != null && parsing_state_delta.hasOwnProperty ("__kwargtrans__"))) {;
/* 000084 */ 		var parsing_state_delta = null;
/* 000084 */ 	};
/* 000084 */ 	if (arguments.length) {
/* 000084 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000084 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000084 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000084 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000084 */ 				switch (__attrib0__) {
/* 000084 */ 					case 'parser': var parser = __allkwargs0__ [__attrib0__]; break;
/* 000084 */ 					case 'argname': var argname = __allkwargs0__ [__attrib0__]; break;
/* 000084 */ 					case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000084 */ 					case 'flm_doc': var flm_doc = __allkwargs0__ [__attrib0__]; break;
/* 000084 */ 					case 'parsing_state_delta': var parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000084 */ 				}
/* 000084 */ 			}
/* 000084 */ 		}
/* 000084 */ 	}
/* 000084 */ 	else {
/* 000084 */ 	}
/* 000092 */ 	if (__t__ (parsing_state_delta === null)) {
/* 000093 */ 		if (__t__ (is_block_level === _NotProvided)) {
/* 000094 */ 			var is_block_level = false;
/* 000094 */ 		}
/* 000095 */ 		if (__t__ (is_block_level !== null)) {
/* 000096 */ 			var parsing_state_delta = __call__ (FLMParsingStateDeltaSetBlockLevel, null, __kwargtrans__ ({is_block_level: is_block_level}));
/* 000096 */ 		}
/* 000096 */ 	}
/* 000101 */ 	else if (__t__ (__t__ (is_block_level !== _NotProvided) && __ne__ ((function () {
/* 000101 */ 		var __accu0__ = parsing_state_delta.set_attributes;
/* 000101 */ 		return __call__ (__accu0__.py_get, __accu0__, 'is_block_level', null);
/* 000101 */ 	}) (), is_block_level))) {
/* 000102 */ 		var __except0__ = __call__ (ValueError, null, "You specified a parsing_state_delta= to FLMArgumentSpec(...) which might not be compatible with the provided is_block_level= arg. It's your responsibility to make sure is_block_level is correctly applied in the parsing state delta you provided, and you should set is_block_level=None here.");
/* 000102 */ 		__except0__.__cause__ = null;
/* 000102 */ 		throw __except0__;
/* 000102 */ 	}
/* 000110 */ 	var arg = (function () {
/* 000110 */ 		var __accu0__ = latexnodes;
/* 000110 */ 		return __call__ (__accu0__.LatexArgumentSpec, __accu0__, __kwargtrans__ ({parser: parser, argname: argname, parsing_state_delta: parsing_state_delta}));
/* 000110 */ 	}) ();
/* 000115 */ 	arg._flm_doc = flm_doc;
/* 000116 */ 	return arg;
/* 000116 */ };
/* 000121 */ export var _clone_flm_node = function (node) {
/* 000121 */ 	if (arguments.length) {
/* 000121 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000121 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000121 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000121 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000121 */ 				switch (__attrib0__) {
/* 000121 */ 					case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000121 */ 				}
/* 000121 */ 			}
/* 000121 */ 		}
/* 000121 */ 	}
/* 000121 */ 	else {
/* 000121 */ 	}
/* 000122 */ 	var Cls = (function () {
/* 000122 */ 		var __accu0__ = node;
/* 000122 */ 		return __call__ (__accu0__.nodeType, __accu0__);
/* 000122 */ 	}) ();
/* 000127 */ 	var new_node = __call__ (Cls, null, __kwargtrans__ (__call__ (dict, null, (function () {
/* 000127 */ 		var __accu0__ = [];
/* 000127 */ 		var __iterable0__ = node._fields;
/* 000127 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000127 */ 			var k = __getitem__ (__iterable0__, __index0__);
/* 000127 */ 			(function () {
/* 000127 */ 				var __accu1__ = __accu0__;
/* 000127 */ 				return __call__ (__accu1__.append, __accu1__, tuple ([k, __call__ (getattr, null, node, k)]));
/* 000127 */ 			}) ();
/* 000127 */ 		}
/* 000127 */ 		return __accu0__;
/* 000127 */ 	}) ())));
/* 000130 */ 	var __iterable0__ = __call__ (dir, null, node);
/* 000130 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000130 */ 		var attr = __getitem__ (__iterable0__, __index0__);
/* 000131 */ 		if (__t__ (__t__ ((function () {
/* 000131 */ 			var __accu0__ = attr;
/* 000131 */ 			return __call__ (__accu0__.startswith, __accu0__, 'flm');
/* 000131 */ 		}) ()) || (function () {
/* 000131 */ 			var __accu0__ = attr;
/* 000131 */ 			return __call__ (__accu0__.startswith, __accu0__, '_flm');
/* 000131 */ 		}) ())) {
/* 000132 */ 			__call__ (setattr, null, new_node, attr, __call__ (getattr, null, node, attr));
/* 000132 */ 		}
/* 000132 */ 	}
/* 000134 */ 	return new_node;
/* 000134 */ };
/* 000141 */ export var BlocksBuilder =  __class__ ('BlocksBuilder', [object], {
/* 000141 */ 	__module__: __name__,
/* 000143 */ 	rx_space: (function () {
/* 000143 */ 		var __accu0__ = re;
/* 000143 */ 		return __call__ (__accu0__.compile, __accu0__, '[ \\t\\n\\r]+');
/* 000143 */ 	}) (),
/* 000144 */ 	rx_only_space: (function () {
/* 000144 */ 		var __accu0__ = re;
/* 000144 */ 		return __call__ (__accu0__.compile, __accu0__, '^[ \\t\\n\\r]+$');
/* 000144 */ 	}) (),
/* 000146 */ 	get __init__ () {return __get__ (this, function (self, latexnodelist, simplify_whitespace) {
/* 000146 */ 		if (typeof simplify_whitespace == 'undefined' || (simplify_whitespace != null && simplify_whitespace.hasOwnProperty ("__kwargtrans__"))) {;
/* 000146 */ 			var simplify_whitespace = true;
/* 000146 */ 		};
/* 000146 */ 		if (arguments.length) {
/* 000146 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000146 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000146 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000146 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000146 */ 					switch (__attrib0__) {
/* 000146 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000146 */ 						case 'latexnodelist': var latexnodelist = __allkwargs0__ [__attrib0__]; break;
/* 000146 */ 						case 'simplify_whitespace': var simplify_whitespace = __allkwargs0__ [__attrib0__]; break;
/* 000146 */ 					}
/* 000146 */ 				}
/* 000146 */ 			}
/* 000146 */ 		}
/* 000146 */ 		else {
/* 000146 */ 		}
/* 000147 */ 		__call__ (__call__ (__super__, null, BlocksBuilder, '__init__'), null, self);
/* 000148 */ 		self.latexnodelist = latexnodelist;
/* 000149 */ 		self.pending_paragraph_nodes = [];
/* 000150 */ 		self.blocks = [];
/* 000151 */ 		self.simplify_whitespace = simplify_whitespace;
/* 000151 */ 	});},
/* 000153 */ 	get flush_paragraph () {return __get__ (this, function (self) {
/* 000153 */ 		if (arguments.length) {
/* 000153 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000153 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000153 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000153 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000153 */ 					switch (__attrib0__) {
/* 000153 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000153 */ 					}
/* 000153 */ 				}
/* 000153 */ 			}
/* 000153 */ 		}
/* 000153 */ 		else {
/* 000153 */ 		}
/* 000154 */ 		if (__t__ (!__t__ ((self.pending_paragraph_nodes)))) {
/* 000155 */ 			return ;
/* 000155 */ 		}
/* 000156 */ 		var paragraph_nodes = self.pending_paragraph_nodes;
/* 000157 */ 		var paragraph_nodes = (function () {
/* 000157 */ 			var __accu0__ = self;
/* 000157 */ 			return __call__ (__accu0__.finalize_paragraph, __accu0__, paragraph_nodes);
/* 000157 */ 		}) ();
/* 000158 */ 		// pass;
/* 000161 */ 		var nlblock = (function () {
/* 000161 */ 			var __accu0__ = latexnodes_nodes;
/* 000161 */ 			return __call__ (__accu0__.LatexNodeList, __accu0__, paragraph_nodes, __kwargtrans__ ({parsing_state: self.latexnodelist.parsing_state, latex_walker: self.latexnodelist.latex_walker}));
/* 000161 */ 		}) ();
/* 000168 */ 		nlblock.flm_nodelist_finalized = true;
/* 000169 */ 		(function () {
/* 000169 */ 			var __accu0__ = self.blocks;
/* 000169 */ 			return __call__ (__accu0__.append, __accu0__, nlblock);
/* 000169 */ 		}) ();
/* 000170 */ 		self.pending_paragraph_nodes = [];
/* 000170 */ 	});},
/* 000172 */ 	get simplify_whitespace_chars () {return __get__ (this, function (self, chars, is_head, is_tail) {
/* 000172 */ 		if (typeof is_head == 'undefined' || (is_head != null && is_head.hasOwnProperty ("__kwargtrans__"))) {;
/* 000172 */ 			var is_head = false;
/* 000172 */ 		};
/* 000172 */ 		if (typeof is_tail == 'undefined' || (is_tail != null && is_tail.hasOwnProperty ("__kwargtrans__"))) {;
/* 000172 */ 			var is_tail = false;
/* 000172 */ 		};
/* 000172 */ 		if (arguments.length) {
/* 000172 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000172 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000172 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000172 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000172 */ 					switch (__attrib0__) {
/* 000172 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000172 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000172 */ 						case 'is_head': var is_head = __allkwargs0__ [__attrib0__]; break;
/* 000172 */ 						case 'is_tail': var is_tail = __allkwargs0__ [__attrib0__]; break;
/* 000172 */ 					}
/* 000172 */ 				}
/* 000172 */ 			}
/* 000172 */ 		}
/* 000172 */ 		else {
/* 000172 */ 		}
/* 000173 */ 		if (__t__ (!__t__ ((self.simplify_whitespace)))) {
/* 000174 */ 			var newchars = chars;
/* 000174 */ 		}
/* 000175 */ 		else {
/* 000176 */ 			var newchars = (function () {
/* 000176 */ 				var __accu0__ = self.rx_space;
/* 000176 */ 				return __call__ (__accu0__.sub, __accu0__, ' ', chars);
/* 000176 */ 			}) ();
/* 000176 */ 		}
/* 000177 */ 		if (__t__ (is_head)) {
/* 000178 */ 			var newchars = (function () {
/* 000178 */ 				var __accu0__ = newchars;
/* 000178 */ 				return __call__ (__accu0__.lstrip, __accu0__);
/* 000178 */ 			}) ();
/* 000178 */ 		}
/* 000179 */ 		if (__t__ (is_tail)) {
/* 000180 */ 			var newchars = (function () {
/* 000180 */ 				var __accu0__ = newchars;
/* 000180 */ 				return __call__ (__accu0__.rstrip, __accu0__);
/* 000180 */ 			}) ();
/* 000180 */ 		}
/* 000181 */ 		return newchars;
/* 000181 */ 	});},
/* 000183 */ 	get finalize_paragraph () {return __get__ (this, function (self, paragraph_nodes) {
/* 000183 */ 		if (arguments.length) {
/* 000183 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000183 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000183 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000183 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000183 */ 					switch (__attrib0__) {
/* 000183 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000183 */ 						case 'paragraph_nodes': var paragraph_nodes = __allkwargs0__ [__attrib0__]; break;
/* 000183 */ 					}
/* 000183 */ 				}
/* 000183 */ 			}
/* 000183 */ 		}
/* 000183 */ 		else {
/* 000183 */ 		}
/* 000184 */ 		if (__t__ (!__t__ ((paragraph_nodes)))) {
/* 000185 */ 			return paragraph_nodes;
/* 000185 */ 		}
/* 000189 */ 		var is_head = true;
/* 000190 */ 		var tail_char_node_info = null;
/* 000191 */ 		var next_node_should_strip_leading_whitespace = false;
/* 000192 */ 		var first_node = null;
/* 000193 */ 		var char_nodes = [];
/* 000194 */ 		var __iterable0__ = __call__ (enumerate, null, paragraph_nodes);
/* 000194 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000194 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000194 */ 			var j = __left0__ [0];
/* 000194 */ 			var node = __left0__ [1];
/* 000201 */ 			if (__t__ (__t__ (__eq__ (__call__ (len, null, char_nodes), 0)) && __t__ (first_node !== null) && (__t__ (__call__ (hasattr, null, first_node, 'flm_is_block_heading')) && __call__ (getattr, null, first_node, 'flm_is_block_heading')))) {
/* 000205 */ 				var is_head = true;
/* 000205 */ 			}
/* 000209 */ 			if (__t__ (__t__ (__call__ (hasattr, null, node, 'flm_strip_preceding_whitespace')) && __call__ (getattr, null, node, 'flm_strip_preceding_whitespace'))) {
/* 000210 */ 				if (__t__ (tail_char_node_info !== null)) {
/* 000211 */ 					__setitem__ (tail_char_node_info, 'is_tail', true);
/* 000211 */ 				}
/* 000211 */ 			}
/* 000213 */ 			if (__t__ ((function () {
/* 000213 */ 				var __accu0__ = node;
/* 000213 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000213 */ 			}) ())) {
/* 000214 */ 				var info = dict ({'is_head': is_head, 'is_tail': false});
/* 000215 */ 				if (__t__ (next_node_should_strip_leading_whitespace)) {
/* 000216 */ 					__setitem__ (info, 'is_head', true);
/* 000216 */ 				}
/* 000217 */ 				(function () {
/* 000217 */ 					var __accu0__ = char_nodes;
/* 000217 */ 					return __call__ (__accu0__.append, __accu0__, tuple ([node, info, j]));
/* 000217 */ 				}) ();
/* 000218 */ 				var is_head = false;
/* 000219 */ 				var tail_char_node_info = info;
/* 000219 */ 			}
/* 000220 */ 			else if (__t__ (!__t__ (((function () {
/* 000220 */ 				var __accu0__ = node;
/* 000220 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCommentNode);
/* 000220 */ 			}) ())))) {
/* 000221 */ 				if (__t__ (first_node === null)) {
/* 000222 */ 					var first_node = node;
/* 000222 */ 				}
/* 000223 */ 				var is_head = false;
/* 000224 */ 				var tail_char_node_info = null;
/* 000224 */ 			}
/* 000226 */ 			var next_node_should_strip_leading_whitespace = false;
/* 000229 */ 			if (__t__ (__t__ (__call__ (hasattr, null, node, 'flm_strip_following_whitespace')) && __call__ (getattr, null, node, 'flm_strip_following_whitespace'))) {
/* 000230 */ 				var next_node_should_strip_leading_whitespace = true;
/* 000230 */ 			}
/* 000230 */ 		}
/* 000233 */ 		if (__t__ (tail_char_node_info !== null)) {
/* 000234 */ 			__setitem__ (tail_char_node_info, 'is_tail', true);
/* 000234 */ 		}
/* 000236 */ 		var __iterable0__ = char_nodes;
/* 000236 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000236 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000236 */ 			var char_node = __left0__ [0];
/* 000236 */ 			var info = __left0__ [1];
/* 000236 */ 			var char_node_j = __left0__ [2];
/* 000244 */ 			var chars = (__t__ (__call__ (hasattr, null, char_node, 'flm_chars_value')) ? char_node.flm_chars_value : char_node.chars);
/* 000246 */ 			var new_flm_chars_value = (function () {
/* 000246 */ 				var __accu0__ = self;
/* 000246 */ 				return __call__ (__accu0__.simplify_whitespace_chars, __accu0__, chars, __kwargtrans__ ({is_head: __getitem__ (info, 'is_head'), is_tail: __getitem__ (info, 'is_tail')}));
/* 000246 */ 			}) ();
/* 000251 */ 			if (__t__ (__ne__ (__call__ (getattr, null, char_node, 'flm_chars_value', null), new_flm_chars_value))) {
/* 000254 */ 				var new_char_node = __call__ (_clone_flm_node, null, char_node);
/* 000257 */ 				new_char_node.flm_chars_value = new_flm_chars_value;
/* 000258 */ 				__setitem__ (paragraph_nodes, char_node_j, new_char_node);
/* 000258 */ 			}
/* 000258 */ 		}
/* 000269 */ 		return paragraph_nodes;
/* 000269 */ 	});},
/* 000271 */ 	get build_blocks () {return __get__ (this, function (self) {
/* 000271 */ 		if (arguments.length) {
/* 000271 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000271 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000271 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000271 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000271 */ 					switch (__attrib0__) {
/* 000271 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000271 */ 					}
/* 000271 */ 				}
/* 000271 */ 			}
/* 000271 */ 		}
/* 000271 */ 		else {
/* 000271 */ 		}
/* 000272 */ 		var latexnodelist = self.latexnodelist;
/* 000276 */ 		assert (__eq__ (__call__ (len, null, self.blocks), 0));
/* 000278 */ 		var __iterable0__ = latexnodelist;
/* 000278 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000278 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000281 */ 			var n_is_block_level = (__t__ (__call__ (hasattr, null, n, 'flm_is_block_level')) ? __call__ (getattr, null, n, 'flm_is_block_level') : null);
/* 000286 */ 			var n_is_block_heading = (__t__ (__call__ (hasattr, null, n, 'flm_is_block_heading')) ? __call__ (getattr, null, n, 'flm_is_block_heading') : false);
/* 000290 */ 			if (__t__ (n_is_block_level)) {
/* 000292 */ 				(function () {
/* 000292 */ 					var __accu0__ = self;
/* 000292 */ 					return __call__ (__accu0__.flush_paragraph, __accu0__);
/* 000292 */ 				}) ();
/* 000296 */ 				if (__t__ (__t__ (__call__ (hasattr, null, n, 'flm_is_paragraph_break_marker')) && __call__ (getattr, null, n, 'flm_is_paragraph_break_marker'))) {
/* 000296 */ 					continue;
/* 000296 */ 				}
/* 000301 */ 				if (__t__ (n_is_block_heading)) {
/* 000305 */ 					(function () {
/* 000305 */ 						var __accu0__ = self.pending_paragraph_nodes;
/* 000305 */ 						return __call__ (__accu0__.append, __accu0__, n);
/* 000305 */ 					}) ();
/* 000305 */ 					continue;
/* 000305 */ 				}
/* 000310 */ 				(function () {
/* 000310 */ 					var __accu0__ = self.blocks;
/* 000310 */ 					return __call__ (__accu0__.append, __accu0__, n);
/* 000310 */ 				}) ();
/* 000310 */ 				continue;
/* 000310 */ 			}
/* 000313 */ 			var paragraph_started_yet = true;
/* 000314 */ 			if (__t__ (!__t__ ((self.pending_paragraph_nodes)))) {
/* 000315 */ 				var paragraph_started_yet = false;
/* 000315 */ 			}
/* 000316 */ 			if (__t__ (__eq__ (__call__ (len, null, self.pending_paragraph_nodes), 1))) {
/* 000319 */ 				if (__t__ (__t__ (__call__ (hasattr, null, __getitem__ (self.pending_paragraph_nodes, 0), 'flm_is_block_heading')) && __call__ (getattr, null, __getitem__ (self.pending_paragraph_nodes, 0), 'flm_is_block_heading'))) {
/* 000321 */ 					var paragraph_started_yet = false;
/* 000321 */ 				}
/* 000321 */ 			}
/* 000324 */ 			if (__t__ (__t__ (!__t__ ((paragraph_started_yet))) && __t__ ((function () {
/* 000324 */ 				var __accu0__ = n;
/* 000324 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000325 */ 			}) ()) && (function () {
/* 000325 */ 				var __accu0__ = self.rx_only_space;
/* 000325 */ 				return __call__ (__accu0__.match, __accu0__, n.chars);
/* 000325 */ 			}) ())) {
/* 000325 */ 				continue;
/* 000325 */ 			}
/* 000331 */ 			(function () {
/* 000331 */ 				var __accu0__ = self.pending_paragraph_nodes;
/* 000331 */ 				return __call__ (__accu0__.append, __accu0__, n);
/* 000331 */ 			}) ();
/* 000331 */ 		}
/* 000334 */ 		(function () {
/* 000334 */ 			var __accu0__ = self;
/* 000334 */ 			return __call__ (__accu0__.flush_paragraph, __accu0__);
/* 000334 */ 		}) ();
/* 000336 */ 		return self.blocks;
/* 000336 */ 	});}
/* 000336 */ });
/* 000344 */ export var NodesFinalizer =  __class__ ('NodesFinalizer', [object], {
/* 000344 */ 	__module__: __name__,
/* 000356 */ 	get __init__ () {return __get__ (this, function (self, text_processing_options) {
/* 000356 */ 		if (typeof text_processing_options == 'undefined' || (text_processing_options != null && text_processing_options.hasOwnProperty ("__kwargtrans__"))) {;
/* 000356 */ 			var text_processing_options = null;
/* 000356 */ 		};
/* 000356 */ 		if (arguments.length) {
/* 000356 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000356 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000356 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000356 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000356 */ 					switch (__attrib0__) {
/* 000356 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000356 */ 						case 'text_processing_options': var text_processing_options = __allkwargs0__ [__attrib0__]; break;
/* 000356 */ 					}
/* 000356 */ 				}
/* 000356 */ 			}
/* 000356 */ 		}
/* 000356 */ 		else {
/* 000356 */ 		}
/* 000357 */ 		__call__ (__call__ (__super__, null, NodesFinalizer, '__init__'), null, self);
/* 000358 */ 		if (__t__ (text_processing_options)) {
/* 000359 */ 			var text_processing_options = __call__ (dict, null, text_processing_options);
/* 000359 */ 		}
/* 000360 */ 		else {
/* 000361 */ 			var text_processing_options = __call__ (dict, null);
/* 000361 */ 		}
/* 000362 */ 		var auto = (function () {
/* 000362 */ 			var __accu0__ = text_processing_options;
/* 000362 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'auto', true);
/* 000362 */ 		}) ();
/* 000363 */ 		if (__t__ (__t__ (auto === true) || auto === false)) {
/* 000364 */ 			var auto_uni_quotes = auto;
/* 000365 */ 			var ligatures_uni = auto;
/* 000365 */ 		}
/* 000366 */ 		else if (__t__ (__eq__ (auto, 'quotes'))) {
/* 000367 */ 			var auto_uni_quotes = true;
/* 000368 */ 			var ligatures_uni = false;
/* 000368 */ 		}
/* 000369 */ 		else if (__t__ (__eq__ (auto, 'ligatures'))) {
/* 000370 */ 			var auto_uni_quotes = false;
/* 000371 */ 			var ligatures_uni = true;
/* 000371 */ 		}
/* 000372 */ 		else {
/* 000373 */ 			var __except0__ = __call__ (ValueError, null, __add__ ("Invalid text_processing_options['auto']=", __call__ (repr, null, auto)));
/* 000373 */ 			__except0__.__cause__ = null;
/* 000373 */ 			throw __except0__;
/* 000373 */ 		}
/* 000375 */ 		self.simplify_whitespace = (function () {
/* 000375 */ 			var __accu0__ = text_processing_options;
/* 000375 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'simplify_whitespace', true);
/* 000375 */ 		}) ();
/* 000376 */ 		self.auto_unicode_quotes = (function () {
/* 000376 */ 			var __accu0__ = text_processing_options;
/* 000376 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'auto_unicode_quotes', auto_uni_quotes);
/* 000376 */ 		}) ();
/* 000380 */ 		self.ligature_unicode_quotes = (function () {
/* 000380 */ 			var __accu0__ = text_processing_options;
/* 000380 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'ligature_unicode_quotes', ligatures_uni);
/* 000380 */ 		}) ();
/* 000384 */ 		self.ligature_unicode_dashes = (function () {
/* 000384 */ 			var __accu0__ = text_processing_options;
/* 000384 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'ligature_unicode_dashes', ligatures_uni);
/* 000384 */ 		}) ();
/* 000388 */ 		self.ligature_unicode_ellipses = (function () {
/* 000388 */ 			var __accu0__ = text_processing_options;
/* 000388 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'ligature_unicode_ellipses', ligatures_uni);
/* 000388 */ 		}) ();
/* 000392 */ 		if (__t__ (__call__ (len, null, (function () {
/* 000392 */ 			var __accu0__ = text_processing_options;
/* 000392 */ 			return __call__ (__accu0__.py_keys, __accu0__);
/* 000392 */ 		}) ()))) {
/* 000395 */ 			var __except0__ = __call__ (ValueError, null, __add__ ('Invalid option(s) for text_processing_options: ', __call__ (repr, null, text_processing_options)));
/* 000395 */ 			__except0__.__cause__ = null;
/* 000395 */ 			throw __except0__;
/* 000395 */ 		}
/* 000395 */ 	});},
/* 000399 */ 	get finalize_nodelist () {return __get__ (this, function (self, latexnodelist) {
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
/* 000418 */ 		if (__t__ (__t__ (__call__ (hasattr, null, latexnodelist, 'flm_nodelist_finalized')) && __call__ (getattr, null, latexnodelist, 'flm_nodelist_finalized'))) {
/* 000419 */ 			return latexnodelist;
/* 000419 */ 		}
/* 000421 */ 		latexnodelist.flm_nodelist_finalized = true;
/* 000423 */ 		var is_block_level = latexnodelist.parsing_state.is_block_level;
/* 000424 */ 		if (__t__ (is_block_level === null)) {
/* 000426 */ 			var is_block_level = (function () {
/* 000426 */ 				var __accu0__ = self;
/* 000426 */ 				return __call__ (__accu0__.infer_is_block_level_nodelist, __accu0__, latexnodelist);
/* 000426 */ 			}) ();
/* 000426 */ 		}
/* 000428 */ 		latexnodelist.flm_is_block_level = is_block_level;
/* 000432 */ 		if (__t__ (!__t__ ((is_block_level)))) {
/* 000434 */ 			var __iterable0__ = latexnodelist;
/* 000434 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000434 */ 				var n = __getitem__ (__iterable0__, __index0__);
/* 000436 */ 				if (__t__ (__t__ (__call__ (hasattr, null, n, 'flm_is_block_level')) && __call__ (getattr, null, n, 'flm_is_block_level'))) {
/* 000440 */ 					var __except0__ = __call__ (LatexWalkerParseError, null, __kwargtrans__ ({msg: 'Content is not allowed in inline text (not block level): ‘{}’'.format ((function () {
/* 000440 */ 						var __accu0__ = n;
/* 000440 */ 						return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000440 */ 					}) ()), pos: n.pos}));
/* 000440 */ 					__except0__.__cause__ = null;
/* 000440 */ 					throw __except0__;
/* 000440 */ 				}
/* 000440 */ 			}
/* 000440 */ 		}
/* 000452 */ 		if (__t__ (is_block_level)) {
/* 000453 */ 			var blocks_builder = (function () {
/* 000453 */ 				var __accu0__ = self;
/* 000453 */ 				return __call__ (__accu0__.make_blocks_builder, __accu0__, latexnodelist);
/* 000453 */ 			}) ();
/* 000454 */ 			var flm_blocks = (function () {
/* 000454 */ 				var __accu0__ = blocks_builder;
/* 000454 */ 				return __call__ (__accu0__.build_blocks, __accu0__);
/* 000454 */ 			}) ();
/* 000455 */ 			latexnodelist.flm_blocks = flm_blocks;
/* 000455 */ 		}
/* 000457 */ 		return latexnodelist;
/* 000457 */ 	});},
/* 000460 */ 	get finalize_node () {return __get__ (this, function (self, node) {
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
/* 000463 */ 		if (__t__ (__t__ (!__t__ ((__call__ (hasattr, null, node, 'flm_chars_value')))) && (function () {
/* 000463 */ 			var __accu0__ = node;
/* 000463 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000463 */ 		}) ())) {
/* 000471 */ 			node.flm_chars_value = (function () {
/* 000471 */ 				var __accu0__ = self;
/* 000471 */ 				return __call__ (__accu0__.process_text, __accu0__, node.chars);
/* 000471 */ 			}) ();
/* 000471 */ 		}
/* 000472 */ 		return node;
/* 000472 */ 	});},
/* 000474 */ 	get process_text () {return __get__ (this, function (self, chars) {
/* 000474 */ 		if (arguments.length) {
/* 000474 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000474 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000474 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000474 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000474 */ 					switch (__attrib0__) {
/* 000474 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000474 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000474 */ 					}
/* 000474 */ 				}
/* 000474 */ 			}
/* 000474 */ 		}
/* 000474 */ 		else {
/* 000474 */ 		}
/* 000475 */ 		if (__t__ (self.simplify_whitespace)) {
/* 000476 */ 			var chars = (function () {
/* 000476 */ 				var __accu0__ = self.rx_inline_space;
/* 000476 */ 				return __call__ (__accu0__.sub, __accu0__, ' ', chars);
/* 000476 */ 			}) ();
/* 000476 */ 		}
/* 000478 */ 		if (__t__ (self.ligature_unicode_quotes)) {
/* 000479 */ 			var chars = (function () {
/* 000479 */ 				var __accu0__ = _autounichars;
/* 000479 */ 				return __call__ (__accu0__.convert_ligature_double_quotes, __accu0__, chars);
/* 000479 */ 			}) ();
/* 000479 */ 		}
/* 000481 */ 		if (__t__ (self.auto_unicode_quotes)) {
/* 000482 */ 			var chars = (function () {
/* 000482 */ 				var __accu0__ = _autounichars;
/* 000482 */ 				return __call__ (__accu0__.convert_auto_quotes, __accu0__, chars);
/* 000482 */ 			}) ();
/* 000482 */ 		}
/* 000484 */ 		if (__t__ (self.ligature_unicode_quotes)) {
/* 000485 */ 			var chars = (function () {
/* 000485 */ 				var __accu0__ = _autounichars;
/* 000485 */ 				return __call__ (__accu0__.convert_ligature_single_quotes, __accu0__, chars);
/* 000485 */ 			}) ();
/* 000485 */ 		}
/* 000487 */ 		if (__t__ (self.ligature_unicode_dashes)) {
/* 000488 */ 			var chars = (function () {
/* 000488 */ 				var __accu0__ = _autounichars;
/* 000488 */ 				return __call__ (__accu0__.convert_ligature_dashes, __accu0__, chars);
/* 000488 */ 			}) ();
/* 000488 */ 		}
/* 000490 */ 		if (__t__ (self.ligature_unicode_ellipses)) {
/* 000491 */ 			var chars = (function () {
/* 000491 */ 				var __accu0__ = _autounichars;
/* 000491 */ 				return __call__ (__accu0__.convert_ligature_ellipses, __accu0__, chars);
/* 000491 */ 			}) ();
/* 000491 */ 		}
/* 000493 */ 		return chars;
/* 000493 */ 	});},
/* 000495 */ 	get infer_is_block_level_nodelist () {return __get__ (this, function (self, latexnodelist) {
/* 000495 */ 		if (arguments.length) {
/* 000495 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000495 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000495 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000495 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000495 */ 					switch (__attrib0__) {
/* 000495 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000495 */ 						case 'latexnodelist': var latexnodelist = __allkwargs0__ [__attrib0__]; break;
/* 000495 */ 					}
/* 000495 */ 				}
/* 000495 */ 			}
/* 000495 */ 		}
/* 000495 */ 		else {
/* 000495 */ 		}
/* 000496 */ 		var __iterable0__ = latexnodelist;
/* 000496 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000496 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000499 */ 			var n_is_block_level = (__t__ (__call__ (hasattr, null, n, 'flm_is_block_level')) ? __call__ (getattr, null, n, 'flm_is_block_level') : null);
/* 000507 */ 			if (__t__ (n_is_block_level)) {
/* 000508 */ 				return true;
/* 000508 */ 			}
/* 000508 */ 		}
/* 000509 */ 		return false;
/* 000509 */ 	});},
/* 000513 */ 	get make_blocks_builder () {return __get__ (this, function (self, latexnodelist) {
/* 000513 */ 		if (arguments.length) {
/* 000513 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000513 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000513 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000513 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000513 */ 					switch (__attrib0__) {
/* 000513 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000513 */ 						case 'latexnodelist': var latexnodelist = __allkwargs0__ [__attrib0__]; break;
/* 000513 */ 					}
/* 000513 */ 				}
/* 000513 */ 			}
/* 000513 */ 		}
/* 000513 */ 		else {
/* 000513 */ 		}
/* 000514 */ 		return __call__ (BlocksBuilder, null, latexnodelist, __kwargtrans__ ({simplify_whitespace: self.simplify_whitespace}));
/* 000514 */ 	});},
/* 000516 */ 	rx_inline_space: BlocksBuilder.rx_space
/* 000516 */ });
/* 000525 */ export var FLMLatexWalker =  __class__ ('FLMLatexWalker', [latexwalker.LatexWalker], {
/* 000525 */ 	__module__: __name__,
/* 000538 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000538 */ 		var parsing_state_event_handler = null;
/* 000538 */ 		var standalone_mode = false;
/* 000538 */ 		var resource_info = null;
/* 000538 */ 		var parsing_mode = null;
/* 000538 */ 		var what = null;
/* 000538 */ 		var input_lineno_colno_offsets = null;
/* 000538 */ 		var kwargs = dict ();
/* 000538 */ 		if (arguments.length) {
/* 000538 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000538 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000538 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000538 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000538 */ 					switch (__attrib0__) {
/* 000538 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000538 */ 						case 'flm_text': var flm_text = __allkwargs0__ [__attrib0__]; break;
/* 000538 */ 						case 'default_parsing_state': var default_parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000538 */ 						case 'flm_environment': var flm_environment = __allkwargs0__ [__attrib0__]; break;
/* 000538 */ 						case 'parsing_state_event_handler': var parsing_state_event_handler = __allkwargs0__ [__attrib0__]; break;
/* 000538 */ 						case 'standalone_mode': var standalone_mode = __allkwargs0__ [__attrib0__]; break;
/* 000538 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000538 */ 						case 'parsing_mode': var parsing_mode = __allkwargs0__ [__attrib0__]; break;
/* 000538 */ 						case 'what': var what = __allkwargs0__ [__attrib0__]; break;
/* 000538 */ 						case 'input_lineno_colno_offsets': var input_lineno_colno_offsets = __allkwargs0__ [__attrib0__]; break;
/* 000538 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000538 */ 					}
/* 000538 */ 				}
/* 000538 */ 				delete kwargs.__kwargtrans__;
/* 000538 */ 			}
/* 000538 */ 		}
/* 000538 */ 		else {
/* 000538 */ 		}
/* 000551 */ 		if (__t__ (!__t__ ((input_lineno_colno_offsets)))) {
/* 000552 */ 			var input_lineno_colno_offsets = dict ({});
/* 000552 */ 		}
/* 000557 */ 		__call__ (__call__ (__super__, null, FLMLatexWalker, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({s: flm_text, default_parsing_state: default_parsing_state, line_number_offset: (function () {
/* 000557 */ 			var __accu0__ = input_lineno_colno_offsets;
/* 000557 */ 			return __call__ (__accu0__.py_get, __accu0__, 'line_number_offset', null);
/* 000559 */ 		}) (), first_line_column_offset: (function () {
/* 000559 */ 			var __accu0__ = input_lineno_colno_offsets;
/* 000559 */ 			return __call__ (__accu0__.py_get, __accu0__, 'first_line_column_offset', null);
/* 000560 */ 		}) (), column_offset: (function () {
/* 000560 */ 			var __accu0__ = input_lineno_colno_offsets;
/* 000560 */ 			return __call__ (__accu0__.py_get, __accu0__, 'column_offset', null);
/* 000560 */ 		}) ()}, kwargs)));
/* 000564 */ 		self.flm_environment = flm_environment;
/* 000566 */ 		self.standalone_mode = standalone_mode;
/* 000570 */ 		self.resource_info = resource_info;
/* 000572 */ 		self.what = what;
/* 000575 */ 		self.parsing_mode = parsing_mode;
/* 000577 */ 		self._parsing_state_event_handler = parsing_state_event_handler;
/* 000579 */ 		self.input_lineno_colno_offsets = input_lineno_colno_offsets;
/* 000579 */ 	});},
/* 000581 */ 	get parsing_state_event_handler () {return __get__ (this, function (self) {
/* 000581 */ 		if (arguments.length) {
/* 000581 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000581 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000581 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000581 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000581 */ 					switch (__attrib0__) {
/* 000581 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000581 */ 					}
/* 000581 */ 				}
/* 000581 */ 			}
/* 000581 */ 		}
/* 000581 */ 		else {
/* 000581 */ 		}
/* 000582 */ 		if (__t__ (self._parsing_state_event_handler)) {
/* 000583 */ 			return self._parsing_state_event_handler;
/* 000583 */ 		}
/* 000584 */ 		return __call__ (__call__ (__super__, null, FLMLatexWalker, 'parsing_state_event_handler'), null, self);
/* 000584 */ 	});},
/* 000586 */ 	get make_nodelist () {return __get__ (this, function (self, nodelist, parsing_state) {
/* 000586 */ 		var kwargs = dict ();
/* 000586 */ 		if (arguments.length) {
/* 000586 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000586 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000586 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000586 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000586 */ 					switch (__attrib0__) {
/* 000586 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000586 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000586 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000586 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000586 */ 					}
/* 000586 */ 				}
/* 000586 */ 				delete kwargs.__kwargtrans__;
/* 000586 */ 			}
/* 000586 */ 		}
/* 000586 */ 		else {
/* 000586 */ 		}
/* 000587 */ 		var nl = __call__ (__call__ (__super__, null, FLMLatexWalker, 'make_nodelist'), null, self, __kwargtrans__ (__mergekwargtrans__ ({nodelist: nodelist, parsing_state: parsing_state}, kwargs)));
/* 000589 */ 		var nl2 = (function () {
/* 000589 */ 			var __accu0__ = self.flm_environment;
/* 000589 */ 			return __call__ (__accu0__.finalize_nodelist, __accu0__, nl);
/* 000589 */ 		}) ();
/* 000590 */ 		if (__t__ (nl2 === null)) {
/* 000591 */ 			var __except0__ = __call__ (ValueError, null, "Environment's finalize_nodelist() returned None");
/* 000591 */ 			__except0__.__cause__ = null;
/* 000591 */ 			throw __except0__;
/* 000591 */ 		}
/* 000592 */ 		return nl2;
/* 000592 */ 	});},
/* 000594 */ 	get make_node () {return __get__ (this, function (self, node_class) {
/* 000594 */ 		var kwargs = dict ();
/* 000594 */ 		if (arguments.length) {
/* 000594 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000594 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000594 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000594 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000594 */ 					switch (__attrib0__) {
/* 000594 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000594 */ 						case 'node_class': var node_class = __allkwargs0__ [__attrib0__]; break;
/* 000594 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000594 */ 					}
/* 000594 */ 				}
/* 000594 */ 				delete kwargs.__kwargtrans__;
/* 000594 */ 			}
/* 000594 */ 		}
/* 000594 */ 		else {
/* 000594 */ 		}
/* 000595 */ 		var node = __call__ (__call__ (__super__, null, FLMLatexWalker, 'make_node'), null, self, node_class, __kwargtrans__ (kwargs));
/* 000596 */ 		var node2 = (function () {
/* 000596 */ 			var __accu0__ = self.flm_environment;
/* 000596 */ 			return __call__ (__accu0__.finalize_node, __accu0__, node);
/* 000596 */ 		}) ();
/* 000597 */ 		if (__t__ (node2 === null)) {
/* 000598 */ 			var __except0__ = __call__ (ValueError, null, "Environment's finalize_node() returned None");
/* 000598 */ 			__except0__.__cause__ = null;
/* 000598 */ 			throw __except0__;
/* 000598 */ 		}
/* 000599 */ 		return node2;
/* 000599 */ 	});},
/* 000604 */ 	get filter_whitespace_comments_nodes () {return __get__ (this, function (self, nodelist) {
/* 000604 */ 		if (arguments.length) {
/* 000604 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000604 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000604 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000604 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000604 */ 					switch (__attrib0__) {
/* 000604 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000604 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000604 */ 					}
/* 000604 */ 				}
/* 000604 */ 			}
/* 000604 */ 		}
/* 000604 */ 		else {
/* 000604 */ 		}
/* 000609 */ 		return (function () {
/* 000609 */ 			var __accu0__ = nodelist;
/* 000609 */ 			return __call__ (__accu0__.filter, __accu0__, __kwargtrans__ ({node_predicate_fn: self._filter_whitespace_comments_nodes_predicate, skip_none: true, skip_comments: true, skip_whitespace_char_nodes: true}));
/* 000609 */ 		}) ();
/* 000609 */ 	});},
/* 000616 */ 	get _filter_whitespace_comments_nodes_predicate () {return __get__ (this, function (self, node) {
/* 000616 */ 		if (arguments.length) {
/* 000616 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000616 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000616 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000616 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000616 */ 					switch (__attrib0__) {
/* 000616 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000616 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000616 */ 					}
/* 000616 */ 				}
/* 000616 */ 			}
/* 000616 */ 		}
/* 000616 */ 		else {
/* 000616 */ 		}
/* 000619 */ 		if (__t__ (__t__ (__call__ (hasattr, null, node, 'flm_is_paragraph_break_marker')) && __call__ (getattr, null, node, 'flm_is_paragraph_break_marker'))) {
/* 000620 */ 			return false;
/* 000620 */ 		}
/* 000621 */ 		return true;
/* 000621 */ 	});}
/* 000621 */ });
/* 000629 */ export var features_ensure_dependencies_are_met = function (features) {
/* 000629 */ 	if (arguments.length) {
/* 000629 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000629 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000629 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000629 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000629 */ 				switch (__attrib0__) {
/* 000629 */ 					case 'features': var features = __allkwargs0__ [__attrib0__]; break;
/* 000629 */ 				}
/* 000629 */ 			}
/* 000629 */ 		}
/* 000629 */ 	}
/* 000629 */ 	else {
/* 000629 */ 	}
/* 000631 */ 	var feature_names = __call__ (set, null, (function () {
/* 000631 */ 		var __accu0__ = [];
/* 000631 */ 		var __iterable0__ = features;
/* 000631 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000631 */ 			var f = __getitem__ (__iterable0__, __index0__);
/* 000631 */ 			(function () {
/* 000631 */ 				var __accu1__ = __accu0__;
/* 000631 */ 				return __call__ (__accu1__.append, __accu1__, f.feature_name);
/* 000631 */ 			}) ();
/* 000631 */ 		}
/* 000631 */ 		return __accu0__;
/* 000631 */ 	}) ());
/* 000633 */ 	var __iterable0__ = features;
/* 000633 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000633 */ 		var feature = __getitem__ (__iterable0__, __index0__);
/* 000634 */ 		if (__t__ (feature.feature_dependencies === null)) {
/* 000634 */ 			continue;
/* 000634 */ 		}
/* 000636 */ 		var __iterable1__ = feature.feature_dependencies;
/* 000636 */ 		for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000636 */ 			var fdepname = __getitem__ (__iterable1__, __index1__);
/* 000637 */ 			if (__t__ (!__in__ (fdepname, feature_names))) {
/* 000639 */ 				var __except0__ = __call__ (ValueError, null, 'Feature ‘{}’ ({}) has unmet dependency ‘{}’'.format (feature.feature_name, __call__ (repr, null, feature), fdepname));
/* 000639 */ 				__except0__.__cause__ = null;
/* 000639 */ 				throw __except0__;
/* 000639 */ 			}
/* 000639 */ 		}
/* 000639 */ 	}
/* 000639 */ };
/* 000645 */ export var features_sorted_by_dependencies = function (features) {
/* 000645 */ 	if (arguments.length) {
/* 000645 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000645 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000645 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000645 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000645 */ 				switch (__attrib0__) {
/* 000645 */ 					case 'features': var features = __allkwargs0__ [__attrib0__]; break;
/* 000645 */ 				}
/* 000645 */ 			}
/* 000645 */ 		}
/* 000645 */ 	}
/* 000645 */ 	else {
/* 000645 */ 	}
/* 000662 */ 	var features_to_sort = __call__ (list, null, features);
/* 000666 */ 	var features_by_name = dict ({});
/* 000667 */ 	var __iterable0__ = features_to_sort;
/* 000667 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000667 */ 		var feature = __getitem__ (__iterable0__, __index0__);
/* 000668 */ 		if (__t__ (__in__ (feature.feature_name, features_by_name))) {
/* 000670 */ 			var __except0__ = __call__ (ValueError, null, 'Duplicate feature detected: feature {} has the same name (‘{}’) as the as already-included feature {}'.format (__call__ (repr, null, feature), feature.feature_name, __getitem__ (features_by_name, feature.feature_name)));
/* 000670 */ 			__except0__.__cause__ = null;
/* 000670 */ 			throw __except0__;
/* 000670 */ 		}
/* 000674 */ 		__setitem__ (features_by_name, feature.feature_name, feature);
/* 000674 */ 	}
/* 000679 */ 	(function () {
/* 000679 */ 		var __accu0__ = features_to_sort;
/* 000679 */ 		return __call__ (__accu0__.py_sort, __accu0__, __kwargtrans__ ({key: (function __lambda__ (f) {
/* 000679 */ 			if (arguments.length) {
/* 000679 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000679 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000679 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000679 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000679 */ 						switch (__attrib0__) {
/* 000679 */ 							case 'f': var f = __allkwargs0__ [__attrib0__]; break;
/* 000679 */ 						}
/* 000679 */ 					}
/* 000679 */ 				}
/* 000679 */ 			}
/* 000679 */ 			else {
/* 000679 */ 			}
/* 000679 */ 			return f.feature_name;
/* 000679 */ 		})}));
/* 000679 */ 	}) ();
/* 000682 */ 	__call__ (features_ensure_dependencies_are_met, null, features_to_sort);
/* 000684 */ 	var get_feature_dependencies = function (f) {
/* 000684 */ 		if (arguments.length) {
/* 000684 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000684 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000684 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000684 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000684 */ 					switch (__attrib0__) {
/* 000684 */ 						case 'f': var f = __allkwargs0__ [__attrib0__]; break;
/* 000684 */ 					}
/* 000684 */ 				}
/* 000684 */ 			}
/* 000684 */ 		}
/* 000684 */ 		else {
/* 000684 */ 		}
/* 000685 */ 		var deps = __call__ (set, null);
/* 000686 */ 		if (__t__ (f.feature_dependencies !== null)) {
/* 000687 */ 			var __iterable0__ = f.feature_dependencies;
/* 000687 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000687 */ 				var fdepname = __getitem__ (__iterable0__, __index0__);
/* 000688 */ 				(function () {
/* 000688 */ 					var __accu0__ = deps;
/* 000688 */ 					return __call__ (__accu0__.add, __accu0__, fdepname);
/* 000688 */ 				}) ();
/* 000688 */ 			}
/* 000688 */ 		}
/* 000689 */ 		if (__t__ (f.feature_optional_dependencies !== null)) {
/* 000690 */ 			var __iterable0__ = f.feature_optional_dependencies;
/* 000690 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000690 */ 				var foptdepname = __getitem__ (__iterable0__, __index0__);
/* 000691 */ 				if (__t__ (__in__ (foptdepname, features_by_name))) {
/* 000692 */ 					(function () {
/* 000692 */ 						var __accu0__ = deps;
/* 000692 */ 						return __call__ (__accu0__.add, __accu0__, foptdepname);
/* 000692 */ 					}) ();
/* 000692 */ 				}
/* 000692 */ 			}
/* 000692 */ 		}
/* 000693 */ 		return __call__ (sorted, null, __call__ (list, null, deps));
/* 000693 */ 	};
/* 000701 */ 	var all_feature_dependencies = __call__ (dict, null, (function () {
/* 000701 */ 		var __accu0__ = [];
/* 000703 */ 		var __iterable0__ = (function () {
/* 000703 */ 			var __accu1__ = features_by_name;
/* 000703 */ 			return __call__ (__accu1__.py_items, __accu1__);
/* 000703 */ 		}) ();
/* 000703 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000703 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000703 */ 			var fname = __left0__ [0];
/* 000703 */ 			var f = __left0__ [1];
/* 000703 */ 			(function () {
/* 000703 */ 				var __accu1__ = __accu0__;
/* 000702 */ 				return __call__ (__accu1__.append, __accu1__, tuple ([fname, __call__ (get_feature_dependencies, null, f)]));
/* 000702 */ 			}) ();
/* 000702 */ 		}
/* 000702 */ 		return __accu0__;
/* 000702 */ 	}) ());
/* 000706 */ 	var get_feature_dependents = function (fparentname, all_feature_dependencies) {
/* 000706 */ 		if (arguments.length) {
/* 000706 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000706 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000706 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000706 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000706 */ 					switch (__attrib0__) {
/* 000706 */ 						case 'fparentname': var fparentname = __allkwargs0__ [__attrib0__]; break;
/* 000706 */ 						case 'all_feature_dependencies': var all_feature_dependencies = __allkwargs0__ [__attrib0__]; break;
/* 000706 */ 					}
/* 000706 */ 				}
/* 000706 */ 			}
/* 000706 */ 		}
/* 000706 */ 		else {
/* 000706 */ 		}
/* 000707 */ 		var dependents = __call__ (set, null);
/* 000708 */ 		var __iterable0__ = (function () {
/* 000708 */ 			var __accu0__ = all_feature_dependencies;
/* 000708 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000708 */ 		}) ();
/* 000708 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000708 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000708 */ 			var fname = __left0__ [0];
/* 000708 */ 			var fdepnames = __left0__ [1];
/* 000709 */ 			var __iterable1__ = fdepnames;
/* 000709 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000709 */ 				var fdepname = __getitem__ (__iterable1__, __index1__);
/* 000710 */ 				if (__t__ (__eq__ (fdepname, fparentname))) {
/* 000711 */ 					(function () {
/* 000711 */ 						var __accu0__ = dependents;
/* 000711 */ 						return __call__ (__accu0__.add, __accu0__, fname);
/* 000711 */ 					}) ();
/* 000711 */ 				}
/* 000711 */ 			}
/* 000711 */ 		}
/* 000712 */ 		return __call__ (sorted, null, __call__ (list, null, dependents));
/* 000712 */ 	};
/* 000718 */ 	var sorted_features = [];
/* 000719 */ 	var root_features = (function () {
/* 000719 */ 		var __accu0__ = [];
/* 000722 */ 		var __iterable0__ = __call__ (py_reversed, null, features_to_sort);
/* 000722 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000722 */ 			var f = __getitem__ (__iterable0__, __index0__);
/* 000723 */ 			if (__t__ (__eq__ (__call__ (len, null, __getitem__ (all_feature_dependencies, f.feature_name)), 0))) {
/* 000723 */ 				(function () {
/* 000723 */ 					var __accu1__ = __accu0__;
/* 000723 */ 					return __call__ (__accu1__.append, __accu1__, f);
/* 000723 */ 				}) ();
/* 000723 */ 			}
/* 000723 */ 		}
/* 000723 */ 		return __accu0__;
/* 000723 */ 	}) ();
/* 000727 */ 	while (__t__ (__gt__ (__call__ (len, null, root_features), 0))) {
/* 000728 */ 		var n = (function () {
/* 000728 */ 			var __accu0__ = root_features;
/* 000728 */ 			return __call__ (__accu0__.py_pop, __accu0__);
/* 000728 */ 		}) ();
/* 000729 */ 		(function () {
/* 000729 */ 			var __accu0__ = sorted_features;
/* 000729 */ 			return __call__ (__accu0__.append, __accu0__, n);
/* 000729 */ 		}) ();
/* 000731 */ 		var n_name = n.feature_name;
/* 000733 */ 		var iter_dependents = __call__ (get_feature_dependents, null, n_name, all_feature_dependencies);
/* 000734 */ 		var __iterable0__ = iter_dependents;
/* 000734 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000734 */ 			var fdependentname = __getitem__ (__iterable0__, __index0__);
/* 000737 */ 			(function () {
/* 000737 */ 				var __accu0__ = __getitem__ (all_feature_dependencies, fdependentname);
/* 000737 */ 				return __call__ (__accu0__.remove, __accu0__, n_name);
/* 000737 */ 			}) ();
/* 000741 */ 			if (__t__ (__eq__ (__call__ (len, null, __getitem__ (all_feature_dependencies, fdependentname)), 0))) {
/* 000743 */ 				(function () {
/* 000743 */ 					var __accu0__ = root_features;
/* 000743 */ 					return __call__ (__accu0__.insert, __accu0__, 0, __getitem__ (features_by_name, fdependentname));
/* 000743 */ 				}) ();
/* 000743 */ 			}
/* 000743 */ 		}
/* 000743 */ 	}
/* 000746 */ 	var problematic_features = [];
/* 000747 */ 	var __iterable0__ = (function () {
/* 000747 */ 		var __accu0__ = all_feature_dependencies;
/* 000747 */ 		return __call__ (__accu0__.py_items, __accu0__);
/* 000747 */ 	}) ();
/* 000747 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000747 */ 		var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000747 */ 		var fsrcname = __left0__ [0];
/* 000747 */ 		var featuredeps = __left0__ [1];
/* 000748 */ 		if (__t__ (__gt__ (__call__ (len, null, featuredeps), 0))) {
/* 000749 */ 			(function () {
/* 000749 */ 				var __accu0__ = problematic_features;
/* 000750 */ 				return __call__ (__accu0__.append, __accu0__, __add__ ('‘{}’ → '.format (fsrcname), (function () {
/* 000750 */ 					var __accu1__ = ', ';
/* 000750 */ 					return __call__ (__accu1__.join, __accu1__, (function () {
/* 000750 */ 						var __accu2__ = [];
/* 000750 */ 						var __iterable1__ = featuredeps;
/* 000750 */ 						for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000750 */ 							var fdepname = __getitem__ (__iterable1__, __index1__);
/* 000750 */ 							(function () {
/* 000750 */ 								var __accu3__ = __accu2__;
/* 000750 */ 								return __call__ (__accu3__.append, __accu3__, '‘{}’'.format (fdepname));
/* 000750 */ 							}) ();
/* 000750 */ 						}
/* 000750 */ 						return __accu2__;
/* 000750 */ 					}) ());
/* 000750 */ 				}) ()));
/* 000750 */ 			}) ();
/* 000750 */ 		}
/* 000750 */ 	}
/* 000752 */ 	if (__t__ (__gt__ (__call__ (len, null, problematic_features), 0))) {
/* 000755 */ 		var __except0__ = __call__ (ValueError, null, __add__ ('The feature dependency graph has a cycle!  Problematic dependencies:'.format (), (function () {
/* 000755 */ 			var __accu0__ = '; ';
/* 000755 */ 			return __call__ (__accu0__.join, __accu0__, problematic_features);
/* 000755 */ 		}) ()));
/* 000755 */ 		__except0__.__cause__ = null;
/* 000755 */ 		throw __except0__;
/* 000755 */ 	}
/* 000758 */ 	if (__t__ (__ne__ (__call__ (len, null, sorted_features), __call__ (len, null, features_to_sort)))) {
/* 000759 */ 		var __except0__ = __call__ (RuntimeError, null, "Internal error, we didn't get all the features right when ordering them!");
/* 000759 */ 		__except0__.__cause__ = null;
/* 000759 */ 		throw __except0__;
/* 000759 */ 	}
/* 000763 */ 	return tuple ([sorted_features, features_by_name]);
/* 000763 */ };
/* 000792 */ export var FLMEnvironment =  __class__ ('FLMEnvironment', [object], {
/* 000792 */ 	__module__: __name__,
/* 000811 */ 	get __init__ () {return __get__ (this, function (self, features, parsing_state, latex_context) {
/* 000811 */ 		var tolerant_parsing = false;
/* 000811 */ 		var parsing_mode_deltas = null;
/* 000811 */ 		var text_processing_options = null;
/* 000811 */ 		if (arguments.length) {
/* 000811 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000811 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000811 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000811 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000811 */ 					switch (__attrib0__) {
/* 000811 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000811 */ 						case 'features': var features = __allkwargs0__ [__attrib0__]; break;
/* 000811 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000811 */ 						case 'latex_context': var latex_context = __allkwargs0__ [__attrib0__]; break;
/* 000811 */ 						case 'tolerant_parsing': var tolerant_parsing = __allkwargs0__ [__attrib0__]; break;
/* 000811 */ 						case 'parsing_mode_deltas': var parsing_mode_deltas = __allkwargs0__ [__attrib0__]; break;
/* 000811 */ 						case 'text_processing_options': var text_processing_options = __allkwargs0__ [__attrib0__]; break;
/* 000811 */ 					}
/* 000811 */ 				}
/* 000811 */ 			}
/* 000811 */ 		}
/* 000811 */ 		else {
/* 000811 */ 		}
/* 000821 */ 		__call__ (__call__ (__super__, null, FLMEnvironment, '__init__'), null, self);
/* 000823 */ 		// pass;
/* 000827 */ 		self.latex_context = latex_context;
/* 000828 */ 		self.parsing_state = parsing_state;
/* 000830 */ 		self.parsing_mode_deltas = (__t__ (parsing_mode_deltas) ? __call__ (dict, null, parsing_mode_deltas) : dict ({}));
/* 000832 */ 		var __left0__ = __call__ (features_sorted_by_dependencies, null, features);
/* 000832 */ 		self.features = __left0__ [0];
/* 000832 */ 		self.features_by_name = __left0__ [1];
/* 000834 */ 		// pass;
/* 000838 */ 		self.tolerant_parsing = tolerant_parsing;
/* 000840 */ 		self.nodes_finalizer = __call__ (NodesFinalizer, null, __kwargtrans__ ({text_processing_options: text_processing_options}));
/* 000844 */ 		if (__t__ (self.parsing_state.latex_context === null)) {
/* 000847 */ 			var __iterable0__ = self.features;
/* 000847 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000847 */ 				var f = __getitem__ (__iterable0__, __index0__);
/* 000848 */ 				var moredefs = (function () {
/* 000848 */ 					var __accu0__ = f;
/* 000848 */ 					return __call__ (__accu0__.add_latex_context_definitions, __accu0__);
/* 000848 */ 				}) ();
/* 000849 */ 				// pass;
/* 000854 */ 				if (__t__ (moredefs !== null)) {
/* 000855 */ 					var moredefs = __call__ (dict, null, moredefs);
/* 000856 */ 					if (__t__ (__call__ (len, null, moredefs))) {
/* 000857 */ 						// pass;
/* 000860 */ 						(function () {
/* 000860 */ 							var __accu0__ = moredefs;
/* 000860 */ 							return __call__ (__accu0__.py_update, __accu0__, __call__ (dict, null, __kwargtrans__ ({prepend: true})));
/* 000860 */ 						}) ();
/* 000861 */ 						(function () {
/* 000861 */ 							var __accu0__ = self.latex_context;
/* 000861 */ 							return __call__ (__accu0__.add_context_category, __accu0__, 'feature--{}'.format (f.feature_name), __kwargtrans__ (moredefs));
/* 000861 */ 						}) ();
/* 000861 */ 					}
/* 000861 */ 				}
/* 000861 */ 			}
/* 000867 */ 			(function () {
/* 000867 */ 				var __accu0__ = self.latex_context;
/* 000867 */ 				return __call__ (__accu0__.freeze, __accu0__);
/* 000867 */ 			}) ();
/* 000870 */ 			self.parsing_state.latex_context = self.latex_context;
/* 000870 */ 		}
/* 000872 */ 		else if (__t__ (self.latex_context !== null)) {
/* 000875 */ 			var __except0__ = __call__ (RuntimeError, null, 'The specified `parsing_state` instance already has a latex_context set');
/* 000875 */ 			__except0__.__cause__ = null;
/* 000875 */ 			throw __except0__;
/* 000875 */ 		}
/* 000875 */ 	});},
/* 000881 */ 	get supports_feature () {return __get__ (this, function (self, feature_name) {
/* 000881 */ 		if (arguments.length) {
/* 000881 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000881 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000881 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000881 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000881 */ 					switch (__attrib0__) {
/* 000881 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000881 */ 						case 'feature_name': var feature_name = __allkwargs0__ [__attrib0__]; break;
/* 000881 */ 					}
/* 000881 */ 				}
/* 000881 */ 			}
/* 000881 */ 		}
/* 000881 */ 		else {
/* 000881 */ 		}
/* 000882 */ 		return __t__ (__in__ (feature_name, self.features_by_name)) && __getitem__ (self.features_by_name, feature_name) !== null;
/* 000882 */ 	});},
/* 000887 */ 	get feature () {return __get__ (this, function (self, feature_name) {
/* 000887 */ 		if (arguments.length) {
/* 000887 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000887 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000887 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000887 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000887 */ 					switch (__attrib0__) {
/* 000887 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000887 */ 						case 'feature_name': var feature_name = __allkwargs0__ [__attrib0__]; break;
/* 000887 */ 					}
/* 000887 */ 				}
/* 000887 */ 			}
/* 000887 */ 		}
/* 000887 */ 		else {
/* 000887 */ 		}
/* 000888 */ 		return __getitem__ (self.features_by_name, feature_name);
/* 000888 */ 	});},
/* 000891 */ 	parsing_state_event_handler: null,
/* 000898 */ 	get make_latex_walker () {return __get__ (this, function (self, flm_text) {
/* 000898 */ 		var parsing_mode = null;
/* 000898 */ 		var resource_info = null;
/* 000898 */ 		var tolerant_parsing = null;
/* 000898 */ 		var what = null;
/* 000898 */ 		var input_lineno_colno_offsets = null;
/* 000898 */ 		if (arguments.length) {
/* 000898 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000898 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000898 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000898 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000898 */ 					switch (__attrib0__) {
/* 000898 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000898 */ 						case 'flm_text': var flm_text = __allkwargs0__ [__attrib0__]; break;
/* 000898 */ 						case 'standalone_mode': var standalone_mode = __allkwargs0__ [__attrib0__]; break;
/* 000898 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000898 */ 						case 'parsing_mode': var parsing_mode = __allkwargs0__ [__attrib0__]; break;
/* 000898 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000898 */ 						case 'tolerant_parsing': var tolerant_parsing = __allkwargs0__ [__attrib0__]; break;
/* 000898 */ 						case 'what': var what = __allkwargs0__ [__attrib0__]; break;
/* 000898 */ 						case 'input_lineno_colno_offsets': var input_lineno_colno_offsets = __allkwargs0__ [__attrib0__]; break;
/* 000898 */ 					}
/* 000898 */ 				}
/* 000898 */ 			}
/* 000898 */ 		}
/* 000898 */ 		else {
/* 000898 */ 		}
/* 000911 */ 		var default_parsing_state = (function () {
/* 000911 */ 			var __accu0__ = self;
/* 000911 */ 			return __call__ (__accu0__.make_parsing_state, __accu0__, __kwargtrans__ ({is_block_level: is_block_level, parsing_mode: parsing_mode}));
/* 000911 */ 		}) ();
/* 000916 */ 		if (__t__ (tolerant_parsing === null)) {
/* 000917 */ 			var tolerant_parsing = self.tolerant_parsing;
/* 000917 */ 		}
/* 000919 */ 		var latex_walker = __call__ (FLMLatexWalker, null, __kwargtrans__ ({flm_text: flm_text, default_parsing_state: default_parsing_state, tolerant_parsing: tolerant_parsing, flm_environment: self, standalone_mode: standalone_mode, resource_info: resource_info, what: what, parsing_state_event_handler: self.parsing_state_event_handler, input_lineno_colno_offsets: input_lineno_colno_offsets}));
/* 000933 */ 		return latex_walker;
/* 000933 */ 	});},
/* 000935 */ 	get define_parsing_mode () {return __get__ (this, function (self, parsing_mode, parsing_mode_delta) {
/* 000935 */ 		if (arguments.length) {
/* 000935 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000935 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000935 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000935 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000935 */ 					switch (__attrib0__) {
/* 000935 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000935 */ 						case 'parsing_mode': var parsing_mode = __allkwargs0__ [__attrib0__]; break;
/* 000935 */ 						case 'parsing_mode_delta': var parsing_mode_delta = __allkwargs0__ [__attrib0__]; break;
/* 000935 */ 					}
/* 000935 */ 				}
/* 000935 */ 			}
/* 000935 */ 		}
/* 000935 */ 		else {
/* 000935 */ 		}
/* 000936 */ 		if (__t__ (__in__ (parsing_mode, self.parsing_mode_deltas))) {
/* 000937 */ 			var __except0__ = __call__ (ValueError, null, 'Parsing mode ‘{}’ already defined!'.format (parsing_mode));
/* 000937 */ 			__except0__.__cause__ = null;
/* 000937 */ 			throw __except0__;
/* 000937 */ 		}
/* 000938 */ 		__setitem__ (self.parsing_mode_deltas, parsing_mode, parsing_mode_delta);
/* 000938 */ 	});},
/* 000940 */ 	get make_parsing_state () {return __get__ (this, function (self, is_block_level, parsing_mode) {
/* 000940 */ 		if (typeof parsing_mode == 'undefined' || (parsing_mode != null && parsing_mode.hasOwnProperty ("__kwargtrans__"))) {;
/* 000940 */ 			var parsing_mode = null;
/* 000940 */ 		};
/* 000940 */ 		if (arguments.length) {
/* 000940 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000940 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000940 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000940 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000940 */ 					switch (__attrib0__) {
/* 000940 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000940 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000940 */ 						case 'parsing_mode': var parsing_mode = __allkwargs0__ [__attrib0__]; break;
/* 000940 */ 					}
/* 000940 */ 				}
/* 000940 */ 			}
/* 000940 */ 		}
/* 000940 */ 		else {
/* 000940 */ 		}
/* 000944 */ 		var default_parsing_state = self.parsing_state;
/* 000946 */ 		if (__t__ (parsing_mode !== null)) {
/* 000947 */ 			try {
/* 000948 */ 				var parsing_state_delta = __getitem__ (self.parsing_mode_deltas, parsing_mode);
/* 000948 */ 			}
/* 000948 */ 			catch (__except0__) {
/* 000948 */ 				if (isinstance (__except0__, KeyError)) {
/* 000948 */ 					var e = __except0__;
/* 000950 */ 					var __except1__ = __call__ (ValueError, null, 'Invalid parsing_mode ‘{}’'.format (parsing_mode));
/* 000950 */ 					__except1__.__cause__ = null;
/* 000950 */ 					throw __except1__;
/* 000950 */ 				}
/* 000950 */ 				else {
/* 000950 */ 					throw __except0__;
/* 000950 */ 				}
/* 000950 */ 			}
/* 000952 */ 			if (__t__ (parsing_state_delta !== null)) {
/* 000953 */ 				var default_parsing_state = (function () {
/* 000953 */ 					var __accu0__ = parsing_state_delta;
/* 000953 */ 					return __call__ (__accu0__.get_updated_parsing_state, __accu0__, default_parsing_state, __kwargtrans__ ({latex_walker: null}));
/* 000953 */ 				}) ();
/* 000953 */ 			}
/* 000953 */ 		}
/* 000958 */ 		var kwargs = dict ({});
/* 000959 */ 		if (__t__ (is_block_level !== null)) {
/* 000960 */ 			__setitem__ (kwargs, 'is_block_level', is_block_level);
/* 000960 */ 		}
/* 000962 */ 		return (function () {
/* 000962 */ 			var __accu0__ = default_parsing_state;
/* 000962 */ 			return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ (kwargs));
/* 000962 */ 		}) ();
/* 000962 */ 	});},
/* 000965 */ 	get make_fragment () {return __get__ (this, function (self, flm_text) {
/* 000965 */ 		var kwargs = dict ();
/* 000965 */ 		if (arguments.length) {
/* 000965 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000965 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000965 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000965 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000965 */ 					switch (__attrib0__) {
/* 000965 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000965 */ 						case 'flm_text': var flm_text = __allkwargs0__ [__attrib0__]; break;
/* 000965 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000965 */ 					}
/* 000965 */ 				}
/* 000965 */ 				delete kwargs.__kwargtrans__;
/* 000965 */ 			}
/* 000965 */ 		}
/* 000965 */ 		else {
/* 000965 */ 		}
/* 000967 */ 		if (__t__ (__call__ (isinstance, null, flm_text, FLMFragment))) {
/* 000968 */ 			var frag = flm_text;
/* 000969 */ 			var __iterable0__ = tuple (['is_block_level', 'standalone_mode']);
/* 000969 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000969 */ 				var fld = __getitem__ (__iterable0__, __index0__);
/* 000971 */ 				if (__t__ (__t__ (__in__ (fld, kwargs)) && __t__ (__getitem__ (kwargs, fld) !== null) && __ne__ (__getitem__ (kwargs, fld), __call__ (getattr, null, frag, fld)))) {
/* 000975 */ 					var __except0__ = __call__ (ValueError, null, 'make_fragment(): FLMFragment instance specified but its ‘{}’ ({}) differs with requested ‘{}’ ({})'.format (fld, __call__ (repr, null, __call__ (getattr, null, frag, fld)), fld, __getitem__ (kwargs, fld)));
/* 000975 */ 					__except0__.__cause__ = null;
/* 000975 */ 					throw __except0__;
/* 000975 */ 				}
/* 000975 */ 			}
/* 000978 */ 			return frag;
/* 000978 */ 		}
/* 000980 */ 		try {
/* 000981 */ 			var fragment = __call__ (FLMFragment, null, flm_text, __kwargtrans__ (__mergekwargtrans__ ({environment: self}, kwargs)));
/* 000982 */ 			return fragment;
/* 000982 */ 		}
/* 000982 */ 		catch (__except0__) {
/* 000984 */ 			if (__t__ (!__t__ (((function () {
/* 000984 */ 				var __accu0__ = kwargs;
/* 000984 */ 				return __call__ (__accu0__.py_get, __accu0__, 'silent', false);
/* 000984 */ 			}) ())))) {
/* 000985 */ 				(function () {
/* 000985 */ 					var __accu0__ = logger;
/* 000986 */ 					return __call__ (__accu0__.error, __accu0__, (function () {
/* 000986 */ 						var __accu1__ = 'Error compiling fragment for {}\nContent was:\n‘{}’\n';
/* 000987 */ 						return __call__ (__accu1__.format, __accu1__, (function () {
/* 000987 */ 							var __accu2__ = kwargs;
/* 000987 */ 							return __call__ (__accu2__.py_get, __accu2__, 'what', '(unknown)');
/* 000987 */ 						}) (), __call__ (_abbrevtext, null, flm_text));
/* 000987 */ 					}) (), __kwargtrans__ ({exc_info: true}));
/* 000987 */ 				}) ();
/* 000987 */ 			}
/* 000990 */ 			__except0__.__cause__ = null;
/* 000990 */ 			throw __except0__;
/* 000990 */ 		}
/* 000990 */ 	});},
/* 000994 */ 	get make_document () {return __get__ (this, function (self, render_callback) {
/* 000994 */ 		var kwargs = dict ();
/* 000994 */ 		if (arguments.length) {
/* 000994 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000994 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000994 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000994 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000994 */ 					switch (__attrib0__) {
/* 000994 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000994 */ 						case 'render_callback': var render_callback = __allkwargs0__ [__attrib0__]; break;
/* 000994 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000994 */ 					}
/* 000994 */ 				}
/* 000994 */ 				delete kwargs.__kwargtrans__;
/* 000994 */ 			}
/* 000994 */ 		}
/* 000994 */ 		else {
/* 000994 */ 		}
/* 001003 */ 		var doc = __call__ (FLMDocument, null, render_callback, __kwargtrans__ (__mergekwargtrans__ ({environment: self}, kwargs)));
/* 001008 */ 		(function () {
/* 001008 */ 			var __accu0__ = doc;
/* 001008 */ 			return __call__ (__accu0__.initialize, __accu0__);
/* 001008 */ 		}) ();
/* 001009 */ 		return doc;
/* 001009 */ 	});},
/* 001012 */ 	get get_features_selection () {return __get__ (this, function (self, enable_features) {
/* 001012 */ 		if (arguments.length) {
/* 001012 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001012 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001012 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001012 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001012 */ 					switch (__attrib0__) {
/* 001012 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001012 */ 						case 'enable_features': var enable_features = __allkwargs0__ [__attrib0__]; break;
/* 001012 */ 					}
/* 001012 */ 				}
/* 001012 */ 			}
/* 001012 */ 		}
/* 001012 */ 		else {
/* 001012 */ 		}
/* 001014 */ 		if (__t__ (enable_features === null)) {
/* 001016 */ 			return self.features;
/* 001016 */ 		}
/* 001018 */ 		var features = (function () {
/* 001018 */ 			var __accu0__ = [];
/* 001018 */ 			var __iterable0__ = enable_features;
/* 001018 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001020 */ 				var feature_name = __getitem__ (__iterable0__, __index0__);
/* 001020 */ 				(function () {
/* 001020 */ 					var __accu1__ = __accu0__;
/* 001020 */ 					return __call__ (__accu1__.append, __accu1__, __getitem__ (self.features_by_name, feature_name));
/* 001020 */ 				}) ();
/* 001020 */ 			}
/* 001020 */ 			return __accu0__;
/* 001020 */ 		}) ();
/* 001024 */ 		__call__ (features_ensure_dependencies_are_met, null, features);
/* 001026 */ 		return features;
/* 001026 */ 	});},
/* 001031 */ 	environment_get_located_error_message: null,
/* 001033 */ 	get get_located_error_message () {return __get__ (this, function (self, exception_object) {
/* 001033 */ 		if (arguments.length) {
/* 001033 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001033 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001033 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001033 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001033 */ 					switch (__attrib0__) {
/* 001033 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001033 */ 						case 'exception_object': var exception_object = __allkwargs0__ [__attrib0__]; break;
/* 001033 */ 					}
/* 001033 */ 				}
/* 001033 */ 			}
/* 001033 */ 		}
/* 001033 */ 		else {
/* 001033 */ 		}
/* 001034 */ 		if (__t__ (self.environment_get_located_error_message !== null)) {
/* 001035 */ 			return (function () {
/* 001035 */ 				var __accu0__ = self;
/* 001035 */ 				return __call__ (__accu0__.environment_get_located_error_message, __accu0__, self, exception_object);
/* 001035 */ 			}) ();
/* 001035 */ 		}
/* 001036 */ 		return (function () {
/* 001036 */ 			var __accu0__ = __call__ (LatexWalkerLocatedErrorFormatter, null, exception_object);
/* 001036 */ 			return __call__ (__accu0__.to_display_string, __accu0__);
/* 001036 */ 		}) ();
/* 001036 */ 	});},
/* 001040 */ 	get finalize_nodelist () {return __get__ (this, function (self, nodelist) {
/* 001040 */ 		if (arguments.length) {
/* 001040 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001040 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001040 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001040 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001040 */ 					switch (__attrib0__) {
/* 001040 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001040 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 001040 */ 					}
/* 001040 */ 				}
/* 001040 */ 			}
/* 001040 */ 		}
/* 001040 */ 		else {
/* 001040 */ 		}
/* 001041 */ 		var nl = (function () {
/* 001041 */ 			var __accu0__ = self.nodes_finalizer;
/* 001041 */ 			return __call__ (__accu0__.finalize_nodelist, __accu0__, nodelist);
/* 001041 */ 		}) ();
/* 001042 */ 		return nl;
/* 001042 */ 	});},
/* 001044 */ 	get finalize_node () {return __get__ (this, function (self, node) {
/* 001044 */ 		if (arguments.length) {
/* 001044 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001044 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001044 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001044 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001044 */ 					switch (__attrib0__) {
/* 001044 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001044 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001044 */ 					}
/* 001044 */ 				}
/* 001044 */ 			}
/* 001044 */ 		}
/* 001044 */ 		else {
/* 001044 */ 		}
/* 001051 */ 		var node = (function () {
/* 001051 */ 			var __accu0__ = self.nodes_finalizer;
/* 001051 */ 			return __call__ (__accu0__.finalize_node, __accu0__, node);
/* 001051 */ 		}) ();
/* 001057 */ 		node._flm_node_id = __call__ (fn_unique_object_id, null, node);
/* 001059 */ 		return node;
/* 001059 */ 	});}
/* 001059 */ });
/* 001067 */ export var standard_parsing_state = function () {
/* 001067 */ 	var force_block_level = null;
/* 001067 */ 	var enable_comments = true;
/* 001067 */ 	var comment_start = '%%';
/* 001067 */ 	var extra_forbidden_characters = '';
/* 001067 */ 	var dollar_inline_math_mode = false;
/* 001067 */ 	if (arguments.length) {
/* 001067 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001067 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001067 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001067 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001067 */ 				switch (__attrib0__) {
/* 001067 */ 					case 'force_block_level': var force_block_level = __allkwargs0__ [__attrib0__]; break;
/* 001067 */ 					case 'enable_comments': var enable_comments = __allkwargs0__ [__attrib0__]; break;
/* 001067 */ 					case 'comment_start': var comment_start = __allkwargs0__ [__attrib0__]; break;
/* 001067 */ 					case 'extra_forbidden_characters': var extra_forbidden_characters = __allkwargs0__ [__attrib0__]; break;
/* 001067 */ 					case 'dollar_inline_math_mode': var dollar_inline_math_mode = __allkwargs0__ [__attrib0__]; break;
/* 001067 */ 				}
/* 001067 */ 			}
/* 001067 */ 		}
/* 001067 */ 	}
/* 001067 */ 	else {
/* 001067 */ 	}
/* 001083 */ 	var forbidden_characters = __call__ (str, null, extra_forbidden_characters);
/* 001084 */ 	if (__t__ (__t__ (!__t__ ((dollar_inline_math_mode))) && !__in__ ('$', forbidden_characters))) {
/* 001085 */ 		var forbidden_characters = __call__ (__iadd__, null, forbidden_characters, '$');
/* 001085 */ 	}
/* 001086 */ 	if (__t__ (__t__ ((__t__ (!__t__ ((enable_comments))) || __ne__ (comment_start, '%'))) && !__in__ ('%', forbidden_characters))) {
/* 001088 */ 		var forbidden_characters = __call__ (__iadd__, null, forbidden_characters, '%');
/* 001088 */ 	}
/* 001090 */ 	var latex_inline_math_delimiters = [tuple (['\\(', '\\)'])];
/* 001092 */ 	if (__t__ (dollar_inline_math_mode)) {
/* 001093 */ 		(function () {
/* 001093 */ 			var __accu0__ = latex_inline_math_delimiters;
/* 001093 */ 			return __call__ (__accu0__.append, __accu0__, tuple (['$', '$']));
/* 001093 */ 		}) ();
/* 001093 */ 	}
/* 001095 */ 	return __call__ (FLMParsingState, null, __kwargtrans__ ({is_block_level: force_block_level, latex_context: null, enable_comments: enable_comments, comment_start: comment_start, latex_inline_math_delimiters: latex_inline_math_delimiters, latex_display_math_delimiters: [tuple (['\\[', '\\]'])], forbidden_characters: forbidden_characters}));
/* 001095 */ };
/* 001107 */ export var FLMLatexWalkerMathContextParsingStateEventHandler =  __class__ ('FLMLatexWalkerMathContextParsingStateEventHandler', [latexnodes.LatexWalkerParsingStateEventHandler], {
/* 001107 */ 	__module__: __name__,
/* 001136 */ 	math_mode_extend_context: dict ({'unknown_macro_spec': (function () {
/* 001136 */ 		var __accu0__ = macrospec;
/* 001136 */ 		return __call__ (__accu0__.MacroSpec, __accu0__, '');
/* 001137 */ 	}) (), 'unknown_environment_spec': (function () {
/* 001137 */ 		var __accu0__ = macrospec;
/* 001137 */ 		return __call__ (__accu0__.EnvironmentSpec, __accu0__, '');
/* 001138 */ 	}) (), 'unknown_specials_spec': (function () {
/* 001138 */ 		var __accu0__ = macrospec;
/* 001138 */ 		return __call__ (__accu0__.SpecialsSpec, __accu0__, '');
/* 001135 */ 	}) ()}),
/* 001141 */ 	get enter_math_mode () {return __get__ (this, function (self, math_mode_delimiter, trigger_token) {
/* 001141 */ 		if (typeof math_mode_delimiter == 'undefined' || (math_mode_delimiter != null && math_mode_delimiter.hasOwnProperty ("__kwargtrans__"))) {;
/* 001141 */ 			var math_mode_delimiter = null;
/* 001141 */ 		};
/* 001141 */ 		if (typeof trigger_token == 'undefined' || (trigger_token != null && trigger_token.hasOwnProperty ("__kwargtrans__"))) {;
/* 001141 */ 			var trigger_token = null;
/* 001141 */ 		};
/* 001141 */ 		if (arguments.length) {
/* 001141 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001141 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001141 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001141 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001141 */ 					switch (__attrib0__) {
/* 001141 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001141 */ 						case 'math_mode_delimiter': var math_mode_delimiter = __allkwargs0__ [__attrib0__]; break;
/* 001141 */ 						case 'trigger_token': var trigger_token = __allkwargs0__ [__attrib0__]; break;
/* 001141 */ 					}
/* 001141 */ 				}
/* 001141 */ 			}
/* 001141 */ 		}
/* 001141 */ 		else {
/* 001141 */ 		}
/* 001147 */ 		var set_attributes = __call__ (dict, null, __kwargtrans__ ({in_math_mode: true, math_mode_delimiter: math_mode_delimiter}));
/* 001151 */ 		// pass;
/* 001156 */ 		return (function () {
/* 001156 */ 			var __accu0__ = macrospec;
/* 001156 */ 			return __call__ (__accu0__.ParsingStateDeltaExtendLatexContextDb, __accu0__, __kwargtrans__ ({set_attributes: set_attributes, extend_latex_context: self.math_mode_extend_context}));
/* 001156 */ 		}) ();
/* 001156 */ 	});},
/* 001161 */ 	get leave_math_mode () {return __get__ (this, function (self, trigger_token) {
/* 001161 */ 		if (typeof trigger_token == 'undefined' || (trigger_token != null && trigger_token.hasOwnProperty ("__kwargtrans__"))) {;
/* 001161 */ 			var trigger_token = null;
/* 001161 */ 		};
/* 001161 */ 		if (arguments.length) {
/* 001161 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001161 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001161 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001161 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001161 */ 					switch (__attrib0__) {
/* 001161 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001161 */ 						case 'trigger_token': var trigger_token = __allkwargs0__ [__attrib0__]; break;
/* 001161 */ 					}
/* 001161 */ 				}
/* 001161 */ 			}
/* 001161 */ 		}
/* 001161 */ 		else {
/* 001161 */ 		}
/* 001168 */ 		return (function () {
/* 001168 */ 			var __accu0__ = macrospec;
/* 001173 */ 			return __call__ (__accu0__.ParsingStateDeltaExtendLatexContextDb, __accu0__, __kwargtrans__ ({set_attributes: __call__ (dict, null, __kwargtrans__ ({in_math_mode: false, math_mode_delimiter: null})), extend_latex_context: __call__ (dict, null, __kwargtrans__ ({unknown_macro_spec: null, unknown_environment_spec: null, unknown_specials_spec: null}))}));
/* 001173 */ 		}) ();
/* 001173 */ 	});}
/* 001173 */ });
/* 001184 */ export var standard_environment_get_located_error_message = function (environment, exception_object) {
/* 001184 */ 	if (arguments.length) {
/* 001184 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001184 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001184 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001184 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001184 */ 				switch (__attrib0__) {
/* 001184 */ 					case 'environment': var environment = __allkwargs0__ [__attrib0__]; break;
/* 001184 */ 					case 'exception_object': var exception_object = __allkwargs0__ [__attrib0__]; break;
/* 001184 */ 				}
/* 001184 */ 			}
/* 001184 */ 		}
/* 001184 */ 	}
/* 001184 */ 	else {
/* 001184 */ 	}
/* 001213 */ 	var msg = null;
/* 001214 */ 	var error_type_info = exception_object.error_type_info;
/* 001215 */ 	if (__t__ (error_type_info)) {
/* 001216 */ 		var what = __getitem__ (error_type_info, 'what');
/* 001217 */ 		if (__t__ (__eq__ (what, 'token_forbidden_character'))) {
/* 001218 */ 			if (__t__ (__eq__ (__getitem__ (error_type_info, 'forbidden_character'), '%'))) {
/* 001219 */ 				var msg = 'Single percent signs are not allowed here. Use ‘\\%’ to typeset a literal percent sign, and ‘%%’ to start a comment.';
/* 001219 */ 			}
/* 001223 */ 			else if (__t__ (__eq__ (__getitem__ (error_type_info, 'forbidden_character'), '$'))) {
/* 001224 */ 				var msg = "You can't use ‘$’ here. LaTeX math should be typeset using \\(...\\) for inline math and \\[...\\] for unnumbered display equations. Use ‘\\$’ for a literal dollar sign.";
/* 001224 */ 			}
/* 001224 */ 		}
/* 001224 */ 	}
/* 001235 */ 	return msg;
/* 001235 */ };
/* 001242 */ export var make_standard_environment = function (features, parsing_state, latex_context, flm_environment_options, parsing_state_options) {
/* 001242 */ 	if (typeof parsing_state == 'undefined' || (parsing_state != null && parsing_state.hasOwnProperty ("__kwargtrans__"))) {;
/* 001242 */ 		var parsing_state = null;
/* 001242 */ 	};
/* 001242 */ 	if (typeof latex_context == 'undefined' || (latex_context != null && latex_context.hasOwnProperty ("__kwargtrans__"))) {;
/* 001242 */ 		var latex_context = null;
/* 001242 */ 	};
/* 001242 */ 	if (typeof flm_environment_options == 'undefined' || (flm_environment_options != null && flm_environment_options.hasOwnProperty ("__kwargtrans__"))) {;
/* 001242 */ 		var flm_environment_options = null;
/* 001242 */ 	};
/* 001242 */ 	if (typeof parsing_state_options == 'undefined' || (parsing_state_options != null && parsing_state_options.hasOwnProperty ("__kwargtrans__"))) {;
/* 001242 */ 		var parsing_state_options = null;
/* 001242 */ 	};
/* 001242 */ 	if (arguments.length) {
/* 001242 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001242 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001242 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001242 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001242 */ 				switch (__attrib0__) {
/* 001242 */ 					case 'features': var features = __allkwargs0__ [__attrib0__]; break;
/* 001242 */ 					case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 001242 */ 					case 'latex_context': var latex_context = __allkwargs0__ [__attrib0__]; break;
/* 001242 */ 					case 'flm_environment_options': var flm_environment_options = __allkwargs0__ [__attrib0__]; break;
/* 001242 */ 					case 'parsing_state_options': var parsing_state_options = __allkwargs0__ [__attrib0__]; break;
/* 001242 */ 				}
/* 001242 */ 			}
/* 001242 */ 		}
/* 001242 */ 	}
/* 001242 */ 	else {
/* 001242 */ 	}
/* 001246 */ 	if (__t__ (latex_context === null)) {
/* 001247 */ 		var latex_context = (function () {
/* 001247 */ 			var __accu0__ = macrospec;
/* 001247 */ 			return __call__ (__accu0__.LatexContextDb, __accu0__);
/* 001247 */ 		}) ();
/* 001247 */ 	}
/* 001249 */ 	if (__t__ (parsing_state === null)) {
/* 001250 */ 		var parsing_state_options_2 = dict ({});
/* 001251 */ 		if (__t__ (parsing_state_options !== null)) {
/* 001252 */ 			var parsing_state_options_2 = parsing_state_options;
/* 001252 */ 		}
/* 001254 */ 		var parsing_state = __call__ (standard_parsing_state, null, __kwargtrans__ (parsing_state_options_2));
/* 001254 */ 	}
/* 001256 */ 	var parsing_state_event_handler = __call__ (FLMLatexWalkerMathContextParsingStateEventHandler, null);
/* 001258 */ 	var flm_environment_options_2 = dict ({});
/* 001259 */ 	if (__t__ (flm_environment_options !== null)) {
/* 001260 */ 		var flm_environment_options_2 = flm_environment_options;
/* 001260 */ 	}
/* 001262 */ 	var environment = __call__ (FLMEnvironment, null, features, parsing_state, latex_context, __kwargtrans__ (flm_environment_options_2));
/* 001269 */ 	environment.parsing_state_event_handler = parsing_state_event_handler;
/* 001271 */ 	environment.environment_get_located_error_message = standard_environment_get_located_error_message;
/* 001274 */ 	return environment;
/* 001274 */ };
/* 001288 */ export var _make_argvalue = function (argvalue, latex_walker, parsing_state) {
/* 001288 */ 	if (arguments.length) {
/* 001288 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001288 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001288 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001288 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001288 */ 				switch (__attrib0__) {
/* 001288 */ 					case 'argvalue': var argvalue = __allkwargs0__ [__attrib0__]; break;
/* 001288 */ 					case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 001288 */ 					case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 001288 */ 				}
/* 001288 */ 			}
/* 001288 */ 		}
/* 001288 */ 	}
/* 001288 */ 	else {
/* 001288 */ 	}
/* 001290 */ 	if (__t__ (argvalue === null)) {
/* 001291 */ 		return null;
/* 001291 */ 	}
/* 001293 */ 	if (__t__ (__call__ (isinstance, null, argvalue, str))) {
/* 001294 */ 		var argvalue = (function () {
/* 001294 */ 			var __accu0__ = latex_walker;
/* 001294 */ 			return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: argvalue, pos: null, pos_end: null, parsing_state: parsing_state}));
/* 001294 */ 		}) ();
/* 001294 */ 	}
/* 001302 */ 	if (__t__ (__call__ (isinstance, null, argvalue, latexnodes_nodes.LatexGroupNode))) {
/* 001303 */ 		return argvalue;
/* 001303 */ 	}
/* 001307 */ 	if (__t__ (__call__ (isinstance, null, argvalue, latexnodes_nodes.LatexNodeList))) {
/* 001308 */ 		var nodelist = argvalue;
/* 001308 */ 	}
/* 001310 */ 	else if (__t__ (__call__ (isinstance, null, argvalue, list))) {
/* 001311 */ 		var nodelist = (function () {
/* 001311 */ 			var __accu0__ = latex_walker;
/* 001311 */ 			return __call__ (__accu0__.make_nodelist, __accu0__, argvalue, __kwargtrans__ ({parsing_state: parsing_state}));
/* 001311 */ 		}) ();
/* 001311 */ 	}
/* 001314 */ 	else {
/* 001317 */ 		var nodelist = (function () {
/* 001317 */ 			var __accu0__ = latex_walker;
/* 001317 */ 			return __call__ (__accu0__.make_nodelist, __accu0__, [argvalue], __kwargtrans__ ({parsing_state: parsing_state}));
/* 001317 */ 		}) ();
/* 001317 */ 	}
/* 001322 */ 	var groupnode = (function () {
/* 001322 */ 		var __accu0__ = latex_walker;
/* 001322 */ 		return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexGroupNode, __kwargtrans__ ({delimiters: tuple (['', '']), nodelist: nodelist, pos: nodelist.pos, pos_end: nodelist.pos_end, parsing_state: parsing_state}));
/* 001322 */ 	}) ();
/* 001331 */ 	return groupnode;
/* 001331 */ };
/* 001334 */ export var make_invocable_arguments = function (flm_spec, args) {
/* 001334 */ 	if (arguments.length) {
/* 001334 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001334 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001334 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001334 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001334 */ 				switch (__attrib0__) {
/* 001334 */ 					case 'flm_spec': var flm_spec = __allkwargs0__ [__attrib0__]; break;
/* 001334 */ 					case 'args': var args = __allkwargs0__ [__attrib0__]; break;
/* 001334 */ 					case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 001334 */ 					case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 001334 */ 				}
/* 001334 */ 			}
/* 001334 */ 		}
/* 001334 */ 	}
/* 001334 */ 	else {
/* 001334 */ 	}
/* 001336 */ 	var argnlist = (function () {
/* 001336 */ 		var __accu0__ = [];
/* 001336 */ 		var __iterable0__ = flm_spec.arguments_spec_list;
/* 001336 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001336 */ 			var _ = __getitem__ (__iterable0__, __index0__);
/* 001336 */ 			(function () {
/* 001336 */ 				var __accu1__ = __accu0__;
/* 001336 */ 				return __call__ (__accu1__.append, __accu1__, null);
/* 001336 */ 			}) ();
/* 001336 */ 		}
/* 001336 */ 		return __accu0__;
/* 001336 */ 	}) ();
/* 001338 */ 	if (__t__ (args === null)) {
/* 001339 */ 		return argnlist;
/* 001339 */ 	}
/* 001341 */ 	var __iterable0__ = (function () {
/* 001341 */ 		var __accu0__ = args;
/* 001341 */ 		return __call__ (__accu0__.py_items, __accu0__);
/* 001341 */ 	}) ();
/* 001341 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001341 */ 		var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 001341 */ 		var argname = __left0__ [0];
/* 001341 */ 		var argvalue = __left0__ [1];
/* 001343 */ 		var argj = null;
/* 001344 */ 		var __iterable1__ = __call__ (enumerate, null, flm_spec.arguments_spec_list);
/* 001344 */ 		for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 001344 */ 			var __left0__ = __getitem__ (__iterable1__, __index1__);
/* 001344 */ 			var candidateargj = __left0__ [0];
/* 001344 */ 			var candidateargspec = __left0__ [1];
/* 001345 */ 			if (__t__ (__eq__ (candidateargspec.argname, argname))) {
/* 001346 */ 				var argj = candidateargj;
/* 001346 */ 				break;
/* 001346 */ 			}
/* 001346 */ 		}
/* 001348 */ 		if (__t__ (argj === null)) {
/* 001349 */ 			(function () {
/* 001349 */ 				var __accu0__ = logger;
/* 001349 */ 				return __call__ (__accu0__.error, __accu0__, 'Cannot find argument %r in spec %r', argname, flm_spec.arguments_spec_list);
/* 001349 */ 			}) ();
/* 001351 */ 			var __except0__ = __call__ (ValueError, null, 'No argument named ‘{}’ in spec'.format (argname));
/* 001351 */ 			__except0__.__cause__ = null;
/* 001351 */ 			throw __except0__;
/* 001351 */ 		}
/* 001354 */ 		__setitem__ (argnlist, argj, __call__ (_make_argvalue, null, argvalue, latex_walker, parsing_state));
/* 001354 */ 	}
/* 001356 */ 	return argnlist;
/* 001356 */ };
/* 001359 */ export var make_invocable_node_instance = function (node_type, flm_spec) {
/* 001359 */ 	var args = null;
/* 001359 */ 	var body_nodelist = null;
/* 001359 */ 	var node_kwargs = null;
/* 001359 */ 	if (arguments.length) {
/* 001359 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001359 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001359 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001359 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001359 */ 				switch (__attrib0__) {
/* 001359 */ 					case 'node_type': var node_type = __allkwargs0__ [__attrib0__]; break;
/* 001359 */ 					case 'flm_spec': var flm_spec = __allkwargs0__ [__attrib0__]; break;
/* 001359 */ 					case 'args': var args = __allkwargs0__ [__attrib0__]; break;
/* 001359 */ 					case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 001359 */ 					case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 001359 */ 					case 'body_nodelist': var body_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 001359 */ 					case 'node_kwargs': var node_kwargs = __allkwargs0__ [__attrib0__]; break;
/* 001359 */ 				}
/* 001359 */ 			}
/* 001359 */ 		}
/* 001359 */ 	}
/* 001359 */ 	else {
/* 001359 */ 	}
/* 001366 */ 	var nkwargs = dict ({'pos': null, 'pos_end': null});
/* 001371 */ 	if (__t__ (node_type === latexnodes_nodes.LatexMacroNode)) {
/* 001372 */ 		__setitem__ (nkwargs, 'macroname', flm_spec.macroname);
/* 001373 */ 		if (__t__ (body_nodelist !== null)) {
/* 001374 */ 			var __except0__ = __call__ (ValueError, null, 'For a LatexMacroNode you must have body_nodelist=None');
/* 001374 */ 			__except0__.__cause__ = null;
/* 001374 */ 			throw __except0__;
/* 001374 */ 		}
/* 001374 */ 	}
/* 001376 */ 	else if (__t__ (node_type === latexnodes_nodes.LatexEnvironmentNode)) {
/* 001377 */ 		__setitem__ (nkwargs, 'environmentname', flm_spec.environmentname);
/* 001377 */ 	}
/* 001379 */ 	else if (__t__ (node_type === latexnodes_nodes.LatexSpecialsNode)) {
/* 001380 */ 		__setitem__ (nkwargs, 'specials_chars', flm_spec.specials_chars);
/* 001381 */ 		if (__t__ (body_nodelist !== null)) {
/* 001382 */ 			var __except0__ = __call__ (ValueError, null, 'For a LatexSpecialsNode you must have body_nodelist=None');
/* 001382 */ 			__except0__.__cause__ = null;
/* 001382 */ 			throw __except0__;
/* 001382 */ 		}
/* 001382 */ 	}
/* 001384 */ 	var argnlist = __call__ (make_invocable_arguments, null, flm_spec, args, __kwargtrans__ ({latex_walker: latex_walker, parsing_state: parsing_state}));
/* 001388 */ 	var nodeargd = (function () {
/* 001388 */ 		var __accu0__ = latexnodes_nodes;
/* 001388 */ 		return __call__ (__accu0__.ParsedArguments, __accu0__, __kwargtrans__ ({argnlist: argnlist, arguments_spec_list: flm_spec.arguments_spec_list}));
/* 001388 */ 	}) ();
/* 001393 */ 	if (__t__ (body_nodelist !== null)) {
/* 001394 */ 		__setitem__ (nkwargs, 'nodelist', body_nodelist);
/* 001394 */ 	}
/* 001396 */ 	if (__t__ (node_kwargs !== null)) {
/* 001397 */ 		(function () {
/* 001397 */ 			var __accu0__ = nkwargs;
/* 001397 */ 			return __call__ (__accu0__.py_update, __accu0__, node_kwargs);
/* 001397 */ 		}) ();
/* 001397 */ 	}
/* 001399 */ 	var node = (function () {
/* 001399 */ 		var __accu0__ = latex_walker;
/* 001399 */ 		return __call__ (__accu0__.make_node, __accu0__, node_type, __kwargtrans__ (__mergekwargtrans__ ({spec: flm_spec, nodeargd: nodeargd, parsing_state: parsing_state}, nkwargs)));
/* 001399 */ 	}) ();
/* 001407 */ 	var node = (function () {
/* 001407 */ 		var __accu0__ = flm_spec;
/* 001407 */ 		return __call__ (__accu0__.finalize_node, __accu0__, node);
/* 001407 */ 	}) ();
/* 001409 */ 	return node;
/* 001409 */ };
/* 001413 */ export var _abbrevtext = function (x, maxlen) {
/* 001413 */ 	if (typeof maxlen == 'undefined' || (maxlen != null && maxlen.hasOwnProperty ("__kwargtrans__"))) {;
/* 001413 */ 		var maxlen = 100;
/* 001413 */ 	};
/* 001413 */ 	if (arguments.length) {
/* 001413 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001413 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001413 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001413 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001413 */ 				switch (__attrib0__) {
/* 001413 */ 					case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 001413 */ 					case 'maxlen': var maxlen = __allkwargs0__ [__attrib0__]; break;
/* 001413 */ 				}
/* 001413 */ 			}
/* 001413 */ 		}
/* 001413 */ 	}
/* 001413 */ 	else {
/* 001413 */ 	}
/* 001414 */ 	var x = __call__ (str, null, x);
/* 001415 */ 	return __add__ (__getslice__ (x, 0, maxlen, 1), (__t__ (__gt__ (__call__ (len, null, x), maxlen)) ? '…' : ''));
/* 001415 */ };
/* 000006 */ 
//# sourceMappingURL=flm.flmenvironment.map