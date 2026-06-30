/* 000001 */ // Transcrypt'ed from Python, 2026-06-30 21:51:22
/* 000006 */ var logging = {};
/* 000006 */ var re = {};
/* 000006 */ var unique_object_id = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000033 */ import * as __module_unique_object_id__ from './unique_object_id.js';
/* 000033 */ __nest__ (unique_object_id, '', __module_unique_object_id__);
/* 000027 */ import * as _autounichars from './flm._autounichars.js';
/* 000025 */ import {FLMDocument} from './flm.flmdocument.js';
/* 000024 */ import {FLMFragment} from './flm.flmfragment.js';
/* 000022 */ import {Type} from './flm._typing_helpers.js';
/* 000020 */ import * as latexwalker from './pylatexenc.latexwalker.js';
/* 000019 */ import * as latexnodes_nodes from './pylatexenc.latexnodes.nodes.js';
/* 000018 */ import {LatexParserBase} from './pylatexenc.latexnodes.parsers.js';
/* 000012 */ import {LatexWalkerLocatedErrorFormatter, LatexWalkerParseError, ParsingStateDelta} from './pylatexenc.latexnodes.js';
/* 000011 */ import * as macrospec from './pylatexenc.macrospec.js';
/* 000010 */ import * as latexnodes from './pylatexenc.latexnodes.js';
/* 000007 */ import * as __module_logging__ from './logging.js';
/* 000007 */ __nest__ (logging, '', __module_logging__);
/* 000006 */ import * as __module_re__ from './re.js';
/* 000006 */ __nest__ (re, '', __module_re__);
/* 000006 */ export {latexnodes_nodes, ParsingStateDelta, Type, FLMDocument, macrospec, latexnodes, LatexParserBase, LatexWalkerParseError, LatexWalkerLocatedErrorFormatter, _autounichars, FLMFragment, latexwalker};
/* 000001 */ var __name__ = 'flm.flmenvironment';
/* 000008 */ export var logger = (function () {
/* 000008 */ 	var __accu0__ = logging;
/* 000008 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000008 */ }) ();
/* 000034 */ export var fn_unique_object_id = unique_object_id.fn_unique_object_id;
/* 000043 */ export var FLMParsingState =  __class__ ('FLMParsingState', [latexnodes.ParsingState], {
/* 000043 */ 	__module__: __name__,
/* 000060 */ 	_fields: __call__ (tuple, null, __add__ (__call__ (list, null, latexnodes.ParsingState._fields), ['is_block_level'])),
/* 000062 */ 	get set_fields () {return __get__ (this, function (self) {
/* 000062 */ 		var is_block_level = null;
/* 000062 */ 		var kwargs = dict ();
/* 000062 */ 		if (arguments.length) {
/* 000062 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000062 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000062 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000062 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000062 */ 					switch (__attrib0__) {
/* 000062 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000062 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000062 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000062 */ 					}
/* 000062 */ 				}
/* 000062 */ 				delete kwargs.__kwargtrans__;
/* 000062 */ 			}
/* 000062 */ 		}
/* 000062 */ 		else {
/* 000062 */ 		}
/* 000074 */ 		__call__ (__call__ (__super__, null, FLMParsingState, 'set_fields'), null, self, __kwargtrans__ (kwargs));
/* 000075 */ 		self.is_block_level = is_block_level;
/* 000075 */ 	});}
/* 000075 */ });
/* 000078 */ export var FLMParsingStateDeltaSetBlockLevel =  __class__ ('FLMParsingStateDeltaSetBlockLevel', [ParsingStateDelta], {
/* 000078 */ 	__module__: __name__,
/* 000085 */ 	get __init__ () {return __get__ (this, function (self, is_block_level) {
/* 000085 */ 		if (typeof is_block_level == 'undefined' || (is_block_level != null && is_block_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000085 */ 			var is_block_level = null;
/* 000085 */ 		};
/* 000085 */ 		if (arguments.length) {
/* 000085 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000085 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000085 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000085 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000085 */ 					switch (__attrib0__) {
/* 000085 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000085 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000085 */ 					}
/* 000085 */ 				}
/* 000085 */ 			}
/* 000085 */ 		}
/* 000085 */ 		else {
/* 000085 */ 		}
/* 000087 */ 		__call__ (__call__ (__super__, null, FLMParsingStateDeltaSetBlockLevel, '__init__'), null, self, __kwargtrans__ ({set_attributes: __call__ (dict, null, __kwargtrans__ ({is_block_level: is_block_level})), _fields: tuple (['is_block_level'])}));
/* 000090 */ 		self.is_block_level = is_block_level;
/* 000090 */ 	});}
/* 000090 */ });
/* 000096 */ export var _NotProvided =  __class__ ('_NotProvided', [object], {
/* 000096 */ 	__module__: __name__,
/* 000096 */ });
/* 000099 */ export var FLMArgumentSpec = function (parser, argname, is_block_level, flm_doc, parsing_state_delta) {
/* 000099 */ 	if (typeof is_block_level == 'undefined' || (is_block_level != null && is_block_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000099 */ 		var is_block_level = _NotProvided;
/* 000099 */ 	};
/* 000099 */ 	if (typeof flm_doc == 'undefined' || (flm_doc != null && flm_doc.hasOwnProperty ("__kwargtrans__"))) {;
/* 000099 */ 		var flm_doc = null;
/* 000099 */ 	};
/* 000099 */ 	if (typeof parsing_state_delta == 'undefined' || (parsing_state_delta != null && parsing_state_delta.hasOwnProperty ("__kwargtrans__"))) {;
/* 000099 */ 		var parsing_state_delta = null;
/* 000099 */ 	};
/* 000099 */ 	if (arguments.length) {
/* 000099 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000099 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000099 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000099 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000099 */ 				switch (__attrib0__) {
/* 000099 */ 					case 'parser': var parser = __allkwargs0__ [__attrib0__]; break;
/* 000099 */ 					case 'argname': var argname = __allkwargs0__ [__attrib0__]; break;
/* 000099 */ 					case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000099 */ 					case 'flm_doc': var flm_doc = __allkwargs0__ [__attrib0__]; break;
/* 000099 */ 					case 'parsing_state_delta': var parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000099 */ 				}
/* 000099 */ 			}
/* 000099 */ 		}
/* 000099 */ 	}
/* 000099 */ 	else {
/* 000099 */ 	}
/* 000130 */ 	if (__t__ (parsing_state_delta === null)) {
/* 000131 */ 		if (__t__ (is_block_level === _NotProvided)) {
/* 000132 */ 			var is_block_level = false;
/* 000132 */ 		}
/* 000133 */ 		if (__t__ (is_block_level !== null)) {
/* 000134 */ 			var parsing_state_delta = __call__ (FLMParsingStateDeltaSetBlockLevel, null, __kwargtrans__ ({is_block_level: is_block_level}));
/* 000134 */ 		}
/* 000134 */ 	}
/* 000139 */ 	else if (__t__ (__t__ (is_block_level !== _NotProvided) && __ne__ ((function () {
/* 000139 */ 		var __accu0__ = parsing_state_delta.set_attributes;
/* 000139 */ 		return __call__ (__accu0__.py_get, __accu0__, 'is_block_level', null);
/* 000139 */ 	}) (), is_block_level))) {
/* 000140 */ 		var __except0__ = __call__ (ValueError, null, "You specified a parsing_state_delta= to FLMArgumentSpec(...) which might not be compatible with the provided is_block_level= arg. It's your responsibility to make sure is_block_level is correctly applied in the parsing state delta you provided, and you should set is_block_level=None here.");
/* 000140 */ 		__except0__.__cause__ = null;
/* 000140 */ 		throw __except0__;
/* 000140 */ 	}
/* 000148 */ 	var arg = (function () {
/* 000148 */ 		var __accu0__ = latexnodes;
/* 000148 */ 		return __call__ (__accu0__.LatexArgumentSpec, __accu0__, __kwargtrans__ ({parser: parser, argname: argname, parsing_state_delta: parsing_state_delta}));
/* 000148 */ 	}) ();
/* 000153 */ 	arg._flm_doc = flm_doc;
/* 000154 */ 	return arg;
/* 000154 */ };
/* 000159 */ export var _clone_flm_node = function (node) {
/* 000159 */ 	if (arguments.length) {
/* 000159 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000159 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000159 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000159 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000159 */ 				switch (__attrib0__) {
/* 000159 */ 					case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000159 */ 				}
/* 000159 */ 			}
/* 000159 */ 		}
/* 000159 */ 	}
/* 000159 */ 	else {
/* 000159 */ 	}
/* 000160 */ 	var Cls = (function () {
/* 000160 */ 		var __accu0__ = node;
/* 000160 */ 		return __call__ (__accu0__.nodeType, __accu0__);
/* 000160 */ 	}) ();
/* 000165 */ 	var new_node = __call__ (Cls, null, __kwargtrans__ (__call__ (dict, null, (function () {
/* 000165 */ 		var __accu0__ = [];
/* 000165 */ 		var __iterable0__ = node._fields;
/* 000165 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000165 */ 			var k = __getitem__ (__iterable0__, __index0__);
/* 000165 */ 			(function () {
/* 000165 */ 				var __accu1__ = __accu0__;
/* 000165 */ 				return __call__ (__accu1__.append, __accu1__, tuple ([k, __call__ (getattr, null, node, k)]));
/* 000165 */ 			}) ();
/* 000165 */ 		}
/* 000165 */ 		return __accu0__;
/* 000165 */ 	}) ())));
/* 000168 */ 	var __iterable0__ = __call__ (dir, null, node);
/* 000168 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000168 */ 		var attr = __getitem__ (__iterable0__, __index0__);
/* 000169 */ 		if (__t__ (__t__ ((function () {
/* 000169 */ 			var __accu0__ = attr;
/* 000169 */ 			return __call__ (__accu0__.startswith, __accu0__, 'flm');
/* 000169 */ 		}) ()) || (function () {
/* 000169 */ 			var __accu0__ = attr;
/* 000169 */ 			return __call__ (__accu0__.startswith, __accu0__, '_flm');
/* 000169 */ 		}) ())) {
/* 000170 */ 			__call__ (setattr, null, new_node, attr, __call__ (getattr, null, node, attr));
/* 000170 */ 		}
/* 000170 */ 	}
/* 000172 */ 	return new_node;
/* 000172 */ };
/* 000179 */ export var BlocksBuilder =  __class__ ('BlocksBuilder', [object], {
/* 000179 */ 	__module__: __name__,
/* 000198 */ 	rx_space: (function () {
/* 000198 */ 		var __accu0__ = re;
/* 000198 */ 		return __call__ (__accu0__.compile, __accu0__, '[ \\t\\n\\r]+');
/* 000198 */ 	}) (),
/* 000199 */ 	rx_only_space: (function () {
/* 000199 */ 		var __accu0__ = re;
/* 000199 */ 		return __call__ (__accu0__.compile, __accu0__, '^[ \\t\\n\\r]+$');
/* 000199 */ 	}) (),
/* 000201 */ 	get __init__ () {return __get__ (this, function (self, latexnodelist, simplify_whitespace) {
/* 000201 */ 		if (typeof simplify_whitespace == 'undefined' || (simplify_whitespace != null && simplify_whitespace.hasOwnProperty ("__kwargtrans__"))) {;
/* 000201 */ 			var simplify_whitespace = true;
/* 000201 */ 		};
/* 000201 */ 		if (arguments.length) {
/* 000201 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000201 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000201 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000201 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000201 */ 					switch (__attrib0__) {
/* 000201 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000201 */ 						case 'latexnodelist': var latexnodelist = __allkwargs0__ [__attrib0__]; break;
/* 000201 */ 						case 'simplify_whitespace': var simplify_whitespace = __allkwargs0__ [__attrib0__]; break;
/* 000201 */ 					}
/* 000201 */ 				}
/* 000201 */ 			}
/* 000201 */ 		}
/* 000201 */ 		else {
/* 000201 */ 		}
/* 000202 */ 		__call__ (__call__ (__super__, null, BlocksBuilder, '__init__'), null, self);
/* 000203 */ 		self.latexnodelist = latexnodelist;
/* 000204 */ 		self.pending_paragraph_nodes = [];
/* 000205 */ 		self.blocks = [];
/* 000206 */ 		self.simplify_whitespace = simplify_whitespace;
/* 000206 */ 	});},
/* 000208 */ 	get flush_paragraph () {return __get__ (this, function (self) {
/* 000208 */ 		if (arguments.length) {
/* 000208 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000208 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000208 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000208 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000208 */ 					switch (__attrib0__) {
/* 000208 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000208 */ 					}
/* 000208 */ 				}
/* 000208 */ 			}
/* 000208 */ 		}
/* 000208 */ 		else {
/* 000208 */ 		}
/* 000209 */ 		if (__t__ (!__t__ ((self.pending_paragraph_nodes)))) {
/* 000210 */ 			return ;
/* 000210 */ 		}
/* 000211 */ 		var paragraph_nodes = self.pending_paragraph_nodes;
/* 000212 */ 		var paragraph_nodes = (function () {
/* 000212 */ 			var __accu0__ = self;
/* 000212 */ 			return __call__ (__accu0__.finalize_paragraph, __accu0__, paragraph_nodes);
/* 000212 */ 		}) ();
/* 000213 */ 		// pass;
/* 000216 */ 		var nlblock = (function () {
/* 000216 */ 			var __accu0__ = latexnodes_nodes;
/* 000216 */ 			return __call__ (__accu0__.LatexNodeList, __accu0__, paragraph_nodes, __kwargtrans__ ({parsing_state: self.latexnodelist.parsing_state, latex_walker: self.latexnodelist.latex_walker}));
/* 000216 */ 		}) ();
/* 000223 */ 		nlblock.flm_nodelist_finalized = true;
/* 000224 */ 		(function () {
/* 000224 */ 			var __accu0__ = self.blocks;
/* 000224 */ 			return __call__ (__accu0__.append, __accu0__, nlblock);
/* 000224 */ 		}) ();
/* 000225 */ 		self.pending_paragraph_nodes = [];
/* 000225 */ 	});},
/* 000227 */ 	get simplify_whitespace_chars () {return __get__ (this, function (self, chars, is_head, is_tail) {
/* 000227 */ 		if (typeof is_head == 'undefined' || (is_head != null && is_head.hasOwnProperty ("__kwargtrans__"))) {;
/* 000227 */ 			var is_head = false;
/* 000227 */ 		};
/* 000227 */ 		if (typeof is_tail == 'undefined' || (is_tail != null && is_tail.hasOwnProperty ("__kwargtrans__"))) {;
/* 000227 */ 			var is_tail = false;
/* 000227 */ 		};
/* 000227 */ 		if (arguments.length) {
/* 000227 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000227 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000227 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000227 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000227 */ 					switch (__attrib0__) {
/* 000227 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000227 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000227 */ 						case 'is_head': var is_head = __allkwargs0__ [__attrib0__]; break;
/* 000227 */ 						case 'is_tail': var is_tail = __allkwargs0__ [__attrib0__]; break;
/* 000227 */ 					}
/* 000227 */ 				}
/* 000227 */ 			}
/* 000227 */ 		}
/* 000227 */ 		else {
/* 000227 */ 		}
/* 000228 */ 		if (__t__ (!__t__ ((self.simplify_whitespace)))) {
/* 000229 */ 			var newchars = chars;
/* 000229 */ 		}
/* 000230 */ 		else {
/* 000231 */ 			var newchars = (function () {
/* 000231 */ 				var __accu0__ = self.rx_space;
/* 000231 */ 				return __call__ (__accu0__.sub, __accu0__, ' ', chars);
/* 000231 */ 			}) ();
/* 000231 */ 		}
/* 000232 */ 		if (__t__ (is_head)) {
/* 000233 */ 			var newchars = (function () {
/* 000233 */ 				var __accu0__ = newchars;
/* 000233 */ 				return __call__ (__accu0__.lstrip, __accu0__);
/* 000233 */ 			}) ();
/* 000233 */ 		}
/* 000234 */ 		if (__t__ (is_tail)) {
/* 000235 */ 			var newchars = (function () {
/* 000235 */ 				var __accu0__ = newchars;
/* 000235 */ 				return __call__ (__accu0__.rstrip, __accu0__);
/* 000235 */ 			}) ();
/* 000235 */ 		}
/* 000236 */ 		return newchars;
/* 000236 */ 	});},
/* 000238 */ 	get finalize_paragraph () {return __get__ (this, function (self, paragraph_nodes) {
/* 000238 */ 		if (arguments.length) {
/* 000238 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000238 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000238 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000238 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000238 */ 					switch (__attrib0__) {
/* 000238 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000238 */ 						case 'paragraph_nodes': var paragraph_nodes = __allkwargs0__ [__attrib0__]; break;
/* 000238 */ 					}
/* 000238 */ 				}
/* 000238 */ 			}
/* 000238 */ 		}
/* 000238 */ 		else {
/* 000238 */ 		}
/* 000239 */ 		if (__t__ (!__t__ ((paragraph_nodes)))) {
/* 000240 */ 			return paragraph_nodes;
/* 000240 */ 		}
/* 000244 */ 		var is_head = true;
/* 000245 */ 		var tail_char_node_info = null;
/* 000246 */ 		var next_node_should_strip_leading_whitespace = false;
/* 000247 */ 		var first_node = null;
/* 000248 */ 		var seen_content_after_heading = false;
/* 000249 */ 		var char_nodes = [];
/* 000250 */ 		var __iterable0__ = __call__ (enumerate, null, paragraph_nodes);
/* 000250 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000250 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000250 */ 			var j = __left0__ [0];
/* 000250 */ 			var node = __left0__ [1];
/* 000258 */ 			if (__t__ (__t__ (__eq__ (__call__ (len, null, char_nodes), 0)) && __t__ (first_node !== null) && __t__ (!__t__ ((seen_content_after_heading))) && (__t__ (__call__ (hasattr, null, first_node, 'flm_is_block_heading')) && __call__ (getattr, null, first_node, 'flm_is_block_heading')))) {
/* 000262 */ 				var is_head = true;
/* 000262 */ 			}
/* 000266 */ 			if (__t__ (__t__ (__call__ (hasattr, null, node, 'flm_strip_preceding_whitespace')) && __call__ (getattr, null, node, 'flm_strip_preceding_whitespace'))) {
/* 000267 */ 				if (__t__ (tail_char_node_info !== null)) {
/* 000268 */ 					__setitem__ (tail_char_node_info, 'is_tail', true);
/* 000268 */ 				}
/* 000268 */ 			}
/* 000270 */ 			if (__t__ ((function () {
/* 000270 */ 				var __accu0__ = node;
/* 000270 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000270 */ 			}) ())) {
/* 000271 */ 				var info = dict ({'is_head': is_head, 'is_tail': false});
/* 000272 */ 				if (__t__ (next_node_should_strip_leading_whitespace)) {
/* 000273 */ 					__setitem__ (info, 'is_head', true);
/* 000273 */ 				}
/* 000274 */ 				(function () {
/* 000274 */ 					var __accu0__ = char_nodes;
/* 000274 */ 					return __call__ (__accu0__.append, __accu0__, tuple ([node, info, j]));
/* 000274 */ 				}) ();
/* 000275 */ 				var is_head = false;
/* 000276 */ 				var tail_char_node_info = info;
/* 000276 */ 			}
/* 000277 */ 			else if (__t__ (!__t__ (((function () {
/* 000277 */ 				var __accu0__ = node;
/* 000277 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCommentNode);
/* 000277 */ 			}) ())))) {
/* 000278 */ 				if (__t__ (first_node === null)) {
/* 000279 */ 					var first_node = node;
/* 000279 */ 				}
/* 000280 */ 				else {
/* 000281 */ 					var seen_content_after_heading = true;
/* 000281 */ 				}
/* 000282 */ 				var is_head = false;
/* 000283 */ 				var tail_char_node_info = null;
/* 000283 */ 			}
/* 000285 */ 			var next_node_should_strip_leading_whitespace = false;
/* 000288 */ 			if (__t__ (__t__ (__call__ (hasattr, null, node, 'flm_strip_following_whitespace')) && __call__ (getattr, null, node, 'flm_strip_following_whitespace'))) {
/* 000289 */ 				var next_node_should_strip_leading_whitespace = true;
/* 000289 */ 			}
/* 000289 */ 		}
/* 000292 */ 		if (__t__ (tail_char_node_info !== null)) {
/* 000293 */ 			__setitem__ (tail_char_node_info, 'is_tail', true);
/* 000293 */ 		}
/* 000295 */ 		var __iterable0__ = char_nodes;
/* 000295 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000295 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000295 */ 			var char_node = __left0__ [0];
/* 000295 */ 			var info = __left0__ [1];
/* 000295 */ 			var char_node_j = __left0__ [2];
/* 000303 */ 			var chars = (__t__ (__call__ (hasattr, null, char_node, 'flm_chars_value')) ? char_node.flm_chars_value : char_node.chars);
/* 000305 */ 			var new_flm_chars_value = (function () {
/* 000305 */ 				var __accu0__ = self;
/* 000305 */ 				return __call__ (__accu0__.simplify_whitespace_chars, __accu0__, chars, __kwargtrans__ ({is_head: __getitem__ (info, 'is_head'), is_tail: __getitem__ (info, 'is_tail')}));
/* 000305 */ 			}) ();
/* 000310 */ 			if (__t__ (__ne__ (__call__ (getattr, null, char_node, 'flm_chars_value', null), new_flm_chars_value))) {
/* 000313 */ 				var new_char_node = __call__ (_clone_flm_node, null, char_node);
/* 000316 */ 				new_char_node.flm_chars_value = new_flm_chars_value;
/* 000317 */ 				__setitem__ (paragraph_nodes, char_node_j, new_char_node);
/* 000317 */ 			}
/* 000317 */ 		}
/* 000328 */ 		return paragraph_nodes;
/* 000328 */ 	});},
/* 000330 */ 	get build_blocks () {return __get__ (this, function (self) {
/* 000330 */ 		if (arguments.length) {
/* 000330 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000330 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000330 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000330 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000330 */ 					switch (__attrib0__) {
/* 000330 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000330 */ 					}
/* 000330 */ 				}
/* 000330 */ 			}
/* 000330 */ 		}
/* 000330 */ 		else {
/* 000330 */ 		}
/* 000331 */ 		var latexnodelist = self.latexnodelist;
/* 000335 */ 		assert (__eq__ (__call__ (len, null, self.blocks), 0));
/* 000337 */ 		var __iterable0__ = latexnodelist;
/* 000337 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000337 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000340 */ 			var n_is_block_level = (__t__ (__call__ (hasattr, null, n, 'flm_is_block_level')) ? __call__ (getattr, null, n, 'flm_is_block_level') : null);
/* 000345 */ 			var n_is_block_heading = (__t__ (__call__ (hasattr, null, n, 'flm_is_block_heading')) ? __call__ (getattr, null, n, 'flm_is_block_heading') : false);
/* 000349 */ 			if (__t__ (n_is_block_level)) {
/* 000351 */ 				(function () {
/* 000351 */ 					var __accu0__ = self;
/* 000351 */ 					return __call__ (__accu0__.flush_paragraph, __accu0__);
/* 000351 */ 				}) ();
/* 000355 */ 				if (__t__ (__t__ (__call__ (hasattr, null, n, 'flm_is_paragraph_break_marker')) && __call__ (getattr, null, n, 'flm_is_paragraph_break_marker'))) {
/* 000355 */ 					continue;
/* 000355 */ 				}
/* 000360 */ 				if (__t__ (n_is_block_heading)) {
/* 000364 */ 					(function () {
/* 000364 */ 						var __accu0__ = self.pending_paragraph_nodes;
/* 000364 */ 						return __call__ (__accu0__.append, __accu0__, n);
/* 000364 */ 					}) ();
/* 000364 */ 					continue;
/* 000364 */ 				}
/* 000369 */ 				(function () {
/* 000369 */ 					var __accu0__ = self.blocks;
/* 000369 */ 					return __call__ (__accu0__.append, __accu0__, n);
/* 000369 */ 				}) ();
/* 000369 */ 				continue;
/* 000369 */ 			}
/* 000372 */ 			var paragraph_started_yet = true;
/* 000373 */ 			if (__t__ (!__t__ ((self.pending_paragraph_nodes)))) {
/* 000374 */ 				var paragraph_started_yet = false;
/* 000374 */ 			}
/* 000375 */ 			if (__t__ (__eq__ (__call__ (len, null, self.pending_paragraph_nodes), 1))) {
/* 000378 */ 				if (__t__ (__t__ (__call__ (hasattr, null, __getitem__ (self.pending_paragraph_nodes, 0), 'flm_is_block_heading')) && __call__ (getattr, null, __getitem__ (self.pending_paragraph_nodes, 0), 'flm_is_block_heading'))) {
/* 000380 */ 					var paragraph_started_yet = false;
/* 000380 */ 				}
/* 000380 */ 			}
/* 000383 */ 			if (__t__ (__t__ (!__t__ ((paragraph_started_yet))) && __t__ ((function () {
/* 000383 */ 				var __accu0__ = n;
/* 000383 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000384 */ 			}) ()) && (function () {
/* 000384 */ 				var __accu0__ = self.rx_only_space;
/* 000384 */ 				return __call__ (__accu0__.match, __accu0__, n.chars);
/* 000384 */ 			}) ())) {
/* 000384 */ 				continue;
/* 000384 */ 			}
/* 000390 */ 			(function () {
/* 000390 */ 				var __accu0__ = self.pending_paragraph_nodes;
/* 000390 */ 				return __call__ (__accu0__.append, __accu0__, n);
/* 000390 */ 			}) ();
/* 000390 */ 		}
/* 000393 */ 		(function () {
/* 000393 */ 			var __accu0__ = self;
/* 000393 */ 			return __call__ (__accu0__.flush_paragraph, __accu0__);
/* 000393 */ 		}) ();
/* 000395 */ 		return self.blocks;
/* 000395 */ 	});}
/* 000395 */ });
/* 000403 */ export var NodesFinalizer =  __class__ ('NodesFinalizer', [object], {
/* 000403 */ 	__module__: __name__,
/* 000432 */ 	get __init__ () {return __get__ (this, function (self, text_processing_options) {
/* 000432 */ 		if (typeof text_processing_options == 'undefined' || (text_processing_options != null && text_processing_options.hasOwnProperty ("__kwargtrans__"))) {;
/* 000432 */ 			var text_processing_options = null;
/* 000432 */ 		};
/* 000432 */ 		if (arguments.length) {
/* 000432 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000432 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000432 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000432 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000432 */ 					switch (__attrib0__) {
/* 000432 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000432 */ 						case 'text_processing_options': var text_processing_options = __allkwargs0__ [__attrib0__]; break;
/* 000432 */ 					}
/* 000432 */ 				}
/* 000432 */ 			}
/* 000432 */ 		}
/* 000432 */ 		else {
/* 000432 */ 		}
/* 000433 */ 		__call__ (__call__ (__super__, null, NodesFinalizer, '__init__'), null, self);
/* 000434 */ 		if (__t__ (text_processing_options)) {
/* 000435 */ 			var text_processing_options = __call__ (dict, null, text_processing_options);
/* 000435 */ 		}
/* 000436 */ 		else {
/* 000437 */ 			var text_processing_options = __call__ (dict, null);
/* 000437 */ 		}
/* 000438 */ 		var auto = (function () {
/* 000438 */ 			var __accu0__ = text_processing_options;
/* 000438 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'auto', true);
/* 000438 */ 		}) ();
/* 000439 */ 		if (__t__ (__t__ (auto === true) || auto === false)) {
/* 000440 */ 			var auto_uni_quotes = auto;
/* 000441 */ 			var ligatures_uni = auto;
/* 000441 */ 		}
/* 000442 */ 		else if (__t__ (__eq__ (auto, 'quotes'))) {
/* 000443 */ 			var auto_uni_quotes = true;
/* 000444 */ 			var ligatures_uni = false;
/* 000444 */ 		}
/* 000445 */ 		else if (__t__ (__eq__ (auto, 'ligatures'))) {
/* 000446 */ 			var auto_uni_quotes = false;
/* 000447 */ 			var ligatures_uni = true;
/* 000447 */ 		}
/* 000448 */ 		else {
/* 000449 */ 			var __except0__ = __call__ (ValueError, null, __add__ ("Invalid text_processing_options['auto']=", __call__ (repr, null, auto)));
/* 000449 */ 			__except0__.__cause__ = null;
/* 000449 */ 			throw __except0__;
/* 000449 */ 		}
/* 000451 */ 		self.simplify_whitespace = (function () {
/* 000451 */ 			var __accu0__ = text_processing_options;
/* 000451 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'simplify_whitespace', true);
/* 000451 */ 		}) ();
/* 000452 */ 		self.auto_unicode_quotes = (function () {
/* 000452 */ 			var __accu0__ = text_processing_options;
/* 000452 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'auto_unicode_quotes', auto_uni_quotes);
/* 000452 */ 		}) ();
/* 000456 */ 		self.ligature_unicode_quotes = (function () {
/* 000456 */ 			var __accu0__ = text_processing_options;
/* 000456 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'ligature_unicode_quotes', ligatures_uni);
/* 000456 */ 		}) ();
/* 000460 */ 		self.ligature_unicode_dashes = (function () {
/* 000460 */ 			var __accu0__ = text_processing_options;
/* 000460 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'ligature_unicode_dashes', ligatures_uni);
/* 000460 */ 		}) ();
/* 000464 */ 		self.ligature_unicode_ellipses = (function () {
/* 000464 */ 			var __accu0__ = text_processing_options;
/* 000464 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'ligature_unicode_ellipses', ligatures_uni);
/* 000464 */ 		}) ();
/* 000468 */ 		if (__t__ (__call__ (len, null, (function () {
/* 000468 */ 			var __accu0__ = text_processing_options;
/* 000468 */ 			return __call__ (__accu0__.py_keys, __accu0__);
/* 000468 */ 		}) ()))) {
/* 000471 */ 			var __except0__ = __call__ (ValueError, null, __add__ ('Invalid option(s) for text_processing_options: ', __call__ (repr, null, text_processing_options)));
/* 000471 */ 			__except0__.__cause__ = null;
/* 000471 */ 			throw __except0__;
/* 000471 */ 		}
/* 000471 */ 	});},
/* 000475 */ 	get finalize_nodelist () {return __get__ (this, function (self, latexnodelist) {
/* 000475 */ 		if (arguments.length) {
/* 000475 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000475 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000475 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000475 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000475 */ 					switch (__attrib0__) {
/* 000475 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000475 */ 						case 'latexnodelist': var latexnodelist = __allkwargs0__ [__attrib0__]; break;
/* 000475 */ 					}
/* 000475 */ 				}
/* 000475 */ 			}
/* 000475 */ 		}
/* 000475 */ 		else {
/* 000475 */ 		}
/* 000494 */ 		if (__t__ (__t__ (__call__ (hasattr, null, latexnodelist, 'flm_nodelist_finalized')) && __call__ (getattr, null, latexnodelist, 'flm_nodelist_finalized'))) {
/* 000495 */ 			return latexnodelist;
/* 000495 */ 		}
/* 000497 */ 		latexnodelist.flm_nodelist_finalized = true;
/* 000499 */ 		var is_block_level = latexnodelist.parsing_state.is_block_level;
/* 000500 */ 		if (__t__ (is_block_level === null)) {
/* 000502 */ 			var is_block_level = (function () {
/* 000502 */ 				var __accu0__ = self;
/* 000502 */ 				return __call__ (__accu0__.infer_is_block_level_nodelist, __accu0__, latexnodelist);
/* 000502 */ 			}) ();
/* 000502 */ 		}
/* 000504 */ 		latexnodelist.flm_is_block_level = is_block_level;
/* 000508 */ 		if (__t__ (!__t__ ((is_block_level)))) {
/* 000510 */ 			var __iterable0__ = latexnodelist;
/* 000510 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000510 */ 				var n = __getitem__ (__iterable0__, __index0__);
/* 000512 */ 				if (__t__ (__t__ (__call__ (hasattr, null, n, 'flm_is_block_level')) && __call__ (getattr, null, n, 'flm_is_block_level'))) {
/* 000516 */ 					var __except0__ = __call__ (LatexWalkerParseError, null, __kwargtrans__ ({msg: 'Content is not allowed in inline text (not block level): ‘{}’'.format ((function () {
/* 000516 */ 						var __accu0__ = n;
/* 000516 */ 						return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000516 */ 					}) ()), pos: n.pos}));
/* 000516 */ 					__except0__.__cause__ = null;
/* 000516 */ 					throw __except0__;
/* 000516 */ 				}
/* 000516 */ 			}
/* 000516 */ 		}
/* 000528 */ 		if (__t__ (is_block_level)) {
/* 000529 */ 			var blocks_builder = (function () {
/* 000529 */ 				var __accu0__ = self;
/* 000529 */ 				return __call__ (__accu0__.make_blocks_builder, __accu0__, latexnodelist);
/* 000529 */ 			}) ();
/* 000530 */ 			var flm_blocks = (function () {
/* 000530 */ 				var __accu0__ = blocks_builder;
/* 000530 */ 				return __call__ (__accu0__.build_blocks, __accu0__);
/* 000530 */ 			}) ();
/* 000531 */ 			latexnodelist.flm_blocks = flm_blocks;
/* 000531 */ 		}
/* 000533 */ 		return latexnodelist;
/* 000533 */ 	});},
/* 000536 */ 	get finalize_node () {return __get__ (this, function (self, node) {
/* 000536 */ 		if (arguments.length) {
/* 000536 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000536 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000536 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000536 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000536 */ 					switch (__attrib0__) {
/* 000536 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000536 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000536 */ 					}
/* 000536 */ 				}
/* 000536 */ 			}
/* 000536 */ 		}
/* 000536 */ 		else {
/* 000536 */ 		}
/* 000551 */ 		if (__t__ (__t__ (!__t__ ((__call__ (hasattr, null, node, 'flm_chars_value')))) && (function () {
/* 000551 */ 			var __accu0__ = node;
/* 000551 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000551 */ 		}) ())) {
/* 000559 */ 			node.flm_chars_value = (function () {
/* 000559 */ 				var __accu0__ = self;
/* 000559 */ 				return __call__ (__accu0__.process_text, __accu0__, node.chars);
/* 000559 */ 			}) ();
/* 000559 */ 		}
/* 000560 */ 		return node;
/* 000560 */ 	});},
/* 000562 */ 	get process_text () {return __get__ (this, function (self, chars) {
/* 000562 */ 		if (arguments.length) {
/* 000562 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000562 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000562 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000562 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000562 */ 					switch (__attrib0__) {
/* 000562 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000562 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000562 */ 					}
/* 000562 */ 				}
/* 000562 */ 			}
/* 000562 */ 		}
/* 000562 */ 		else {
/* 000562 */ 		}
/* 000563 */ 		if (__t__ (self.simplify_whitespace)) {
/* 000564 */ 			var chars = (function () {
/* 000564 */ 				var __accu0__ = self.rx_inline_space;
/* 000564 */ 				return __call__ (__accu0__.sub, __accu0__, ' ', chars);
/* 000564 */ 			}) ();
/* 000564 */ 		}
/* 000566 */ 		if (__t__ (self.ligature_unicode_quotes)) {
/* 000567 */ 			var chars = (function () {
/* 000567 */ 				var __accu0__ = _autounichars;
/* 000567 */ 				return __call__ (__accu0__.convert_ligature_double_quotes, __accu0__, chars);
/* 000567 */ 			}) ();
/* 000567 */ 		}
/* 000569 */ 		if (__t__ (self.auto_unicode_quotes)) {
/* 000570 */ 			var chars = (function () {
/* 000570 */ 				var __accu0__ = _autounichars;
/* 000570 */ 				return __call__ (__accu0__.convert_auto_quotes, __accu0__, chars);
/* 000570 */ 			}) ();
/* 000570 */ 		}
/* 000572 */ 		if (__t__ (self.ligature_unicode_quotes)) {
/* 000573 */ 			var chars = (function () {
/* 000573 */ 				var __accu0__ = _autounichars;
/* 000573 */ 				return __call__ (__accu0__.convert_ligature_single_quotes, __accu0__, chars);
/* 000573 */ 			}) ();
/* 000573 */ 		}
/* 000575 */ 		if (__t__ (self.ligature_unicode_dashes)) {
/* 000576 */ 			var chars = (function () {
/* 000576 */ 				var __accu0__ = _autounichars;
/* 000576 */ 				return __call__ (__accu0__.convert_ligature_dashes, __accu0__, chars);
/* 000576 */ 			}) ();
/* 000576 */ 		}
/* 000578 */ 		if (__t__ (self.ligature_unicode_ellipses)) {
/* 000579 */ 			var chars = (function () {
/* 000579 */ 				var __accu0__ = _autounichars;
/* 000579 */ 				return __call__ (__accu0__.convert_ligature_ellipses, __accu0__, chars);
/* 000579 */ 			}) ();
/* 000579 */ 		}
/* 000581 */ 		return chars;
/* 000581 */ 	});},
/* 000583 */ 	get infer_is_block_level_nodelist () {return __get__ (this, function (self, latexnodelist) {
/* 000583 */ 		if (arguments.length) {
/* 000583 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000583 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000583 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000583 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000583 */ 					switch (__attrib0__) {
/* 000583 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000583 */ 						case 'latexnodelist': var latexnodelist = __allkwargs0__ [__attrib0__]; break;
/* 000583 */ 					}
/* 000583 */ 				}
/* 000583 */ 			}
/* 000583 */ 		}
/* 000583 */ 		else {
/* 000583 */ 		}
/* 000584 */ 		var __iterable0__ = latexnodelist;
/* 000584 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000584 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000587 */ 			var n_is_block_level = (__t__ (__call__ (hasattr, null, n, 'flm_is_block_level')) ? __call__ (getattr, null, n, 'flm_is_block_level') : null);
/* 000595 */ 			if (__t__ (n_is_block_level)) {
/* 000596 */ 				return true;
/* 000596 */ 			}
/* 000596 */ 		}
/* 000597 */ 		return false;
/* 000597 */ 	});},
/* 000601 */ 	get make_blocks_builder () {return __get__ (this, function (self, latexnodelist) {
/* 000601 */ 		if (arguments.length) {
/* 000601 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000601 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000601 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000601 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000601 */ 					switch (__attrib0__) {
/* 000601 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000601 */ 						case 'latexnodelist': var latexnodelist = __allkwargs0__ [__attrib0__]; break;
/* 000601 */ 					}
/* 000601 */ 				}
/* 000601 */ 			}
/* 000601 */ 		}
/* 000601 */ 		else {
/* 000601 */ 		}
/* 000602 */ 		return __call__ (BlocksBuilder, null, latexnodelist, __kwargtrans__ ({simplify_whitespace: self.simplify_whitespace}));
/* 000602 */ 	});},
/* 000604 */ 	rx_inline_space: BlocksBuilder.rx_space
/* 000604 */ });
/* 000613 */ export var FLMLatexWalker =  __class__ ('FLMLatexWalker', [latexwalker.LatexWalker], {
/* 000613 */ 	__module__: __name__,
/* 000626 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000626 */ 		var parsing_state_event_handler = null;
/* 000626 */ 		var standalone_mode = false;
/* 000626 */ 		var resource_info = null;
/* 000626 */ 		var parsing_mode = null;
/* 000626 */ 		var what = null;
/* 000626 */ 		var input_lineno_colno_offsets = null;
/* 000626 */ 		var kwargs = dict ();
/* 000626 */ 		if (arguments.length) {
/* 000626 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000626 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000626 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000626 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000626 */ 					switch (__attrib0__) {
/* 000626 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000626 */ 						case 'flm_text': var flm_text = __allkwargs0__ [__attrib0__]; break;
/* 000626 */ 						case 'default_parsing_state': var default_parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000626 */ 						case 'flm_environment': var flm_environment = __allkwargs0__ [__attrib0__]; break;
/* 000626 */ 						case 'parsing_state_event_handler': var parsing_state_event_handler = __allkwargs0__ [__attrib0__]; break;
/* 000626 */ 						case 'standalone_mode': var standalone_mode = __allkwargs0__ [__attrib0__]; break;
/* 000626 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000626 */ 						case 'parsing_mode': var parsing_mode = __allkwargs0__ [__attrib0__]; break;
/* 000626 */ 						case 'what': var what = __allkwargs0__ [__attrib0__]; break;
/* 000626 */ 						case 'input_lineno_colno_offsets': var input_lineno_colno_offsets = __allkwargs0__ [__attrib0__]; break;
/* 000626 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000626 */ 					}
/* 000626 */ 				}
/* 000626 */ 				delete kwargs.__kwargtrans__;
/* 000626 */ 			}
/* 000626 */ 		}
/* 000626 */ 		else {
/* 000626 */ 		}
/* 000661 */ 		if (__t__ (!__t__ ((input_lineno_colno_offsets)))) {
/* 000662 */ 			var input_lineno_colno_offsets = dict ({});
/* 000662 */ 		}
/* 000667 */ 		__call__ (__call__ (__super__, null, FLMLatexWalker, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({s: flm_text, default_parsing_state: default_parsing_state, line_number_offset: (function () {
/* 000667 */ 			var __accu0__ = input_lineno_colno_offsets;
/* 000667 */ 			return __call__ (__accu0__.py_get, __accu0__, 'line_number_offset', null);
/* 000669 */ 		}) (), first_line_column_offset: (function () {
/* 000669 */ 			var __accu0__ = input_lineno_colno_offsets;
/* 000669 */ 			return __call__ (__accu0__.py_get, __accu0__, 'first_line_column_offset', null);
/* 000670 */ 		}) (), column_offset: (function () {
/* 000670 */ 			var __accu0__ = input_lineno_colno_offsets;
/* 000670 */ 			return __call__ (__accu0__.py_get, __accu0__, 'column_offset', null);
/* 000670 */ 		}) ()}, kwargs)));
/* 000674 */ 		self.flm_environment = flm_environment;
/* 000676 */ 		self.standalone_mode = standalone_mode;
/* 000680 */ 		self.resource_info = resource_info;
/* 000682 */ 		self.what = what;
/* 000685 */ 		self.parsing_mode = parsing_mode;
/* 000687 */ 		self._parsing_state_event_handler = parsing_state_event_handler;
/* 000689 */ 		self.input_lineno_colno_offsets = input_lineno_colno_offsets;
/* 000689 */ 	});},
/* 000691 */ 	get parsing_state_event_handler () {return __get__ (this, function (self) {
/* 000691 */ 		if (arguments.length) {
/* 000691 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000691 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000691 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000691 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000691 */ 					switch (__attrib0__) {
/* 000691 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000691 */ 					}
/* 000691 */ 				}
/* 000691 */ 			}
/* 000691 */ 		}
/* 000691 */ 		else {
/* 000691 */ 		}
/* 000692 */ 		if (__t__ (self._parsing_state_event_handler)) {
/* 000693 */ 			return self._parsing_state_event_handler;
/* 000693 */ 		}
/* 000694 */ 		return __call__ (__call__ (__super__, null, FLMLatexWalker, 'parsing_state_event_handler'), null, self);
/* 000694 */ 	});},
/* 000696 */ 	get make_nodelist () {return __get__ (this, function (self, nodelist, parsing_state) {
/* 000696 */ 		var kwargs = dict ();
/* 000696 */ 		if (arguments.length) {
/* 000696 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000696 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000696 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000696 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000696 */ 					switch (__attrib0__) {
/* 000696 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000696 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000696 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000696 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000696 */ 					}
/* 000696 */ 				}
/* 000696 */ 				delete kwargs.__kwargtrans__;
/* 000696 */ 			}
/* 000696 */ 		}
/* 000696 */ 		else {
/* 000696 */ 		}
/* 000697 */ 		var nl = __call__ (__call__ (__super__, null, FLMLatexWalker, 'make_nodelist'), null, self, __kwargtrans__ (__mergekwargtrans__ ({nodelist: nodelist, parsing_state: parsing_state}, kwargs)));
/* 000699 */ 		var nl2 = (function () {
/* 000699 */ 			var __accu0__ = self.flm_environment;
/* 000699 */ 			return __call__ (__accu0__.finalize_nodelist, __accu0__, nl);
/* 000699 */ 		}) ();
/* 000700 */ 		if (__t__ (nl2 === null)) {
/* 000701 */ 			var __except0__ = __call__ (ValueError, null, "Environment's finalize_nodelist() returned None");
/* 000701 */ 			__except0__.__cause__ = null;
/* 000701 */ 			throw __except0__;
/* 000701 */ 		}
/* 000702 */ 		return nl2;
/* 000702 */ 	});},
/* 000704 */ 	get make_node () {return __get__ (this, function (self, node_class) {
/* 000704 */ 		var kwargs = dict ();
/* 000704 */ 		if (arguments.length) {
/* 000704 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000704 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000704 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000704 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000704 */ 					switch (__attrib0__) {
/* 000704 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000704 */ 						case 'node_class': var node_class = __allkwargs0__ [__attrib0__]; break;
/* 000704 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000704 */ 					}
/* 000704 */ 				}
/* 000704 */ 				delete kwargs.__kwargtrans__;
/* 000704 */ 			}
/* 000704 */ 		}
/* 000704 */ 		else {
/* 000704 */ 		}
/* 000705 */ 		var node = __call__ (__call__ (__super__, null, FLMLatexWalker, 'make_node'), null, self, node_class, __kwargtrans__ (kwargs));
/* 000706 */ 		var node2 = (function () {
/* 000706 */ 			var __accu0__ = self.flm_environment;
/* 000706 */ 			return __call__ (__accu0__.finalize_node, __accu0__, node);
/* 000706 */ 		}) ();
/* 000707 */ 		if (__t__ (node2 === null)) {
/* 000708 */ 			var __except0__ = __call__ (ValueError, null, "Environment's finalize_node() returned None");
/* 000708 */ 			__except0__.__cause__ = null;
/* 000708 */ 			throw __except0__;
/* 000708 */ 		}
/* 000709 */ 		return node2;
/* 000709 */ 	});},
/* 000714 */ 	get filter_whitespace_comments_nodes () {return __get__ (this, function (self, nodelist) {
/* 000714 */ 		if (arguments.length) {
/* 000714 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000714 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000714 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000714 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000714 */ 					switch (__attrib0__) {
/* 000714 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000714 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000714 */ 					}
/* 000714 */ 				}
/* 000714 */ 			}
/* 000714 */ 		}
/* 000714 */ 		else {
/* 000714 */ 		}
/* 000719 */ 		return (function () {
/* 000719 */ 			var __accu0__ = nodelist;
/* 000719 */ 			return __call__ (__accu0__.filter, __accu0__, __kwargtrans__ ({node_predicate_fn: self._filter_whitespace_comments_nodes_predicate, skip_none: true, skip_comments: true, skip_whitespace_char_nodes: true}));
/* 000719 */ 		}) ();
/* 000719 */ 	});},
/* 000726 */ 	get _filter_whitespace_comments_nodes_predicate () {return __get__ (this, function (self, node) {
/* 000726 */ 		if (arguments.length) {
/* 000726 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000726 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000726 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000726 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000726 */ 					switch (__attrib0__) {
/* 000726 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000726 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000726 */ 					}
/* 000726 */ 				}
/* 000726 */ 			}
/* 000726 */ 		}
/* 000726 */ 		else {
/* 000726 */ 		}
/* 000729 */ 		if (__t__ (__t__ (__call__ (hasattr, null, node, 'flm_is_paragraph_break_marker')) && __call__ (getattr, null, node, 'flm_is_paragraph_break_marker'))) {
/* 000730 */ 			return false;
/* 000730 */ 		}
/* 000731 */ 		return true;
/* 000731 */ 	});}
/* 000731 */ });
/* 000739 */ export var features_ensure_dependencies_are_met = function (features) {
/* 000739 */ 	if (arguments.length) {
/* 000739 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000739 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000739 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000739 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000739 */ 				switch (__attrib0__) {
/* 000739 */ 					case 'features': var features = __allkwargs0__ [__attrib0__]; break;
/* 000739 */ 				}
/* 000739 */ 			}
/* 000739 */ 		}
/* 000739 */ 	}
/* 000739 */ 	else {
/* 000739 */ 	}
/* 000752 */ 	var feature_names = __call__ (set, null, (function () {
/* 000752 */ 		var __accu0__ = [];
/* 000752 */ 		var __iterable0__ = features;
/* 000752 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000752 */ 			var f = __getitem__ (__iterable0__, __index0__);
/* 000752 */ 			(function () {
/* 000752 */ 				var __accu1__ = __accu0__;
/* 000752 */ 				return __call__ (__accu1__.append, __accu1__, f.feature_name);
/* 000752 */ 			}) ();
/* 000752 */ 		}
/* 000752 */ 		return __accu0__;
/* 000752 */ 	}) ());
/* 000754 */ 	var __iterable0__ = features;
/* 000754 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000754 */ 		var feature = __getitem__ (__iterable0__, __index0__);
/* 000755 */ 		if (__t__ (feature.feature_dependencies === null)) {
/* 000755 */ 			continue;
/* 000755 */ 		}
/* 000757 */ 		var __iterable1__ = feature.feature_dependencies;
/* 000757 */ 		for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000757 */ 			var fdepname = __getitem__ (__iterable1__, __index1__);
/* 000758 */ 			if (__t__ (!__in__ (fdepname, feature_names))) {
/* 000760 */ 				var __except0__ = __call__ (ValueError, null, 'Feature ‘{}’ ({}) has unmet dependency ‘{}’'.format (feature.feature_name, __call__ (repr, null, feature), fdepname));
/* 000760 */ 				__except0__.__cause__ = null;
/* 000760 */ 				throw __except0__;
/* 000760 */ 			}
/* 000760 */ 		}
/* 000760 */ 	}
/* 000760 */ };
/* 000766 */ export var features_sorted_by_dependencies = function (features) {
/* 000766 */ 	if (arguments.length) {
/* 000766 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000766 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000766 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000766 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000766 */ 				switch (__attrib0__) {
/* 000766 */ 					case 'features': var features = __allkwargs0__ [__attrib0__]; break;
/* 000766 */ 				}
/* 000766 */ 			}
/* 000766 */ 		}
/* 000766 */ 	}
/* 000766 */ 	else {
/* 000766 */ 	}
/* 000791 */ 	var features_to_sort = __call__ (list, null, features);
/* 000795 */ 	var features_by_name = dict ({});
/* 000796 */ 	var __iterable0__ = features_to_sort;
/* 000796 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000796 */ 		var feature = __getitem__ (__iterable0__, __index0__);
/* 000797 */ 		if (__t__ (__in__ (feature.feature_name, features_by_name))) {
/* 000799 */ 			var __except0__ = __call__ (ValueError, null, 'Duplicate feature detected: feature {} has the same name (‘{}’) as the as already-included feature {}'.format (__call__ (repr, null, feature), feature.feature_name, __getitem__ (features_by_name, feature.feature_name)));
/* 000799 */ 			__except0__.__cause__ = null;
/* 000799 */ 			throw __except0__;
/* 000799 */ 		}
/* 000803 */ 		__setitem__ (features_by_name, feature.feature_name, feature);
/* 000803 */ 	}
/* 000808 */ 	(function () {
/* 000808 */ 		var __accu0__ = features_to_sort;
/* 000808 */ 		return __call__ (__accu0__.py_sort, __accu0__, __kwargtrans__ ({key: (function __lambda__ (f) {
/* 000808 */ 			if (arguments.length) {
/* 000808 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000808 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000808 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000808 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000808 */ 						switch (__attrib0__) {
/* 000808 */ 							case 'f': var f = __allkwargs0__ [__attrib0__]; break;
/* 000808 */ 						}
/* 000808 */ 					}
/* 000808 */ 				}
/* 000808 */ 			}
/* 000808 */ 			else {
/* 000808 */ 			}
/* 000808 */ 			return f.feature_name;
/* 000808 */ 		})}));
/* 000808 */ 	}) ();
/* 000811 */ 	__call__ (features_ensure_dependencies_are_met, null, features_to_sort);
/* 000813 */ 	var get_feature_dependencies = function (f) {
/* 000813 */ 		if (arguments.length) {
/* 000813 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000813 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000813 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000813 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000813 */ 					switch (__attrib0__) {
/* 000813 */ 						case 'f': var f = __allkwargs0__ [__attrib0__]; break;
/* 000813 */ 					}
/* 000813 */ 				}
/* 000813 */ 			}
/* 000813 */ 		}
/* 000813 */ 		else {
/* 000813 */ 		}
/* 000814 */ 		var deps = __call__ (set, null);
/* 000815 */ 		if (__t__ (f.feature_dependencies !== null)) {
/* 000816 */ 			var __iterable0__ = f.feature_dependencies;
/* 000816 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000816 */ 				var fdepname = __getitem__ (__iterable0__, __index0__);
/* 000817 */ 				(function () {
/* 000817 */ 					var __accu0__ = deps;
/* 000817 */ 					return __call__ (__accu0__.add, __accu0__, fdepname);
/* 000817 */ 				}) ();
/* 000817 */ 			}
/* 000817 */ 		}
/* 000818 */ 		if (__t__ (f.feature_optional_dependencies !== null)) {
/* 000819 */ 			var __iterable0__ = f.feature_optional_dependencies;
/* 000819 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000819 */ 				var foptdepname = __getitem__ (__iterable0__, __index0__);
/* 000820 */ 				if (__t__ (__in__ (foptdepname, features_by_name))) {
/* 000821 */ 					(function () {
/* 000821 */ 						var __accu0__ = deps;
/* 000821 */ 						return __call__ (__accu0__.add, __accu0__, foptdepname);
/* 000821 */ 					}) ();
/* 000821 */ 				}
/* 000821 */ 			}
/* 000821 */ 		}
/* 000822 */ 		return __call__ (sorted, null, __call__ (list, null, deps));
/* 000822 */ 	};
/* 000830 */ 	var all_feature_dependencies = __call__ (dict, null, (function () {
/* 000830 */ 		var __accu0__ = [];
/* 000832 */ 		var __iterable0__ = (function () {
/* 000832 */ 			var __accu1__ = features_by_name;
/* 000832 */ 			return __call__ (__accu1__.py_items, __accu1__);
/* 000832 */ 		}) ();
/* 000832 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000832 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000832 */ 			var fname = __left0__ [0];
/* 000832 */ 			var f = __left0__ [1];
/* 000832 */ 			(function () {
/* 000832 */ 				var __accu1__ = __accu0__;
/* 000831 */ 				return __call__ (__accu1__.append, __accu1__, tuple ([fname, __call__ (get_feature_dependencies, null, f)]));
/* 000831 */ 			}) ();
/* 000831 */ 		}
/* 000831 */ 		return __accu0__;
/* 000831 */ 	}) ());
/* 000835 */ 	var get_feature_dependents = function (fparentname, all_feature_dependencies) {
/* 000835 */ 		if (arguments.length) {
/* 000835 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000835 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000835 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000835 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000835 */ 					switch (__attrib0__) {
/* 000835 */ 						case 'fparentname': var fparentname = __allkwargs0__ [__attrib0__]; break;
/* 000835 */ 						case 'all_feature_dependencies': var all_feature_dependencies = __allkwargs0__ [__attrib0__]; break;
/* 000835 */ 					}
/* 000835 */ 				}
/* 000835 */ 			}
/* 000835 */ 		}
/* 000835 */ 		else {
/* 000835 */ 		}
/* 000836 */ 		var dependents = __call__ (set, null);
/* 000837 */ 		var __iterable0__ = (function () {
/* 000837 */ 			var __accu0__ = all_feature_dependencies;
/* 000837 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000837 */ 		}) ();
/* 000837 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000837 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000837 */ 			var fname = __left0__ [0];
/* 000837 */ 			var fdepnames = __left0__ [1];
/* 000838 */ 			var __iterable1__ = fdepnames;
/* 000838 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000838 */ 				var fdepname = __getitem__ (__iterable1__, __index1__);
/* 000839 */ 				if (__t__ (__eq__ (fdepname, fparentname))) {
/* 000840 */ 					(function () {
/* 000840 */ 						var __accu0__ = dependents;
/* 000840 */ 						return __call__ (__accu0__.add, __accu0__, fname);
/* 000840 */ 					}) ();
/* 000840 */ 				}
/* 000840 */ 			}
/* 000840 */ 		}
/* 000841 */ 		return __call__ (sorted, null, __call__ (list, null, dependents));
/* 000841 */ 	};
/* 000847 */ 	var sorted_features = [];
/* 000848 */ 	var root_features = (function () {
/* 000848 */ 		var __accu0__ = [];
/* 000851 */ 		var __iterable0__ = __call__ (py_reversed, null, features_to_sort);
/* 000851 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000851 */ 			var f = __getitem__ (__iterable0__, __index0__);
/* 000852 */ 			if (__t__ (__eq__ (__call__ (len, null, __getitem__ (all_feature_dependencies, f.feature_name)), 0))) {
/* 000852 */ 				(function () {
/* 000852 */ 					var __accu1__ = __accu0__;
/* 000852 */ 					return __call__ (__accu1__.append, __accu1__, f);
/* 000852 */ 				}) ();
/* 000852 */ 			}
/* 000852 */ 		}
/* 000852 */ 		return __accu0__;
/* 000852 */ 	}) ();
/* 000856 */ 	while (__t__ (__gt__ (__call__ (len, null, root_features), 0))) {
/* 000857 */ 		var n = (function () {
/* 000857 */ 			var __accu0__ = root_features;
/* 000857 */ 			return __call__ (__accu0__.py_pop, __accu0__);
/* 000857 */ 		}) ();
/* 000858 */ 		(function () {
/* 000858 */ 			var __accu0__ = sorted_features;
/* 000858 */ 			return __call__ (__accu0__.append, __accu0__, n);
/* 000858 */ 		}) ();
/* 000860 */ 		var n_name = n.feature_name;
/* 000862 */ 		var iter_dependents = __call__ (get_feature_dependents, null, n_name, all_feature_dependencies);
/* 000863 */ 		var __iterable0__ = iter_dependents;
/* 000863 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000863 */ 			var fdependentname = __getitem__ (__iterable0__, __index0__);
/* 000866 */ 			(function () {
/* 000866 */ 				var __accu0__ = __getitem__ (all_feature_dependencies, fdependentname);
/* 000866 */ 				return __call__ (__accu0__.remove, __accu0__, n_name);
/* 000866 */ 			}) ();
/* 000870 */ 			if (__t__ (__eq__ (__call__ (len, null, __getitem__ (all_feature_dependencies, fdependentname)), 0))) {
/* 000872 */ 				(function () {
/* 000872 */ 					var __accu0__ = root_features;
/* 000872 */ 					return __call__ (__accu0__.insert, __accu0__, 0, __getitem__ (features_by_name, fdependentname));
/* 000872 */ 				}) ();
/* 000872 */ 			}
/* 000872 */ 		}
/* 000872 */ 	}
/* 000875 */ 	var problematic_features = [];
/* 000876 */ 	var __iterable0__ = (function () {
/* 000876 */ 		var __accu0__ = all_feature_dependencies;
/* 000876 */ 		return __call__ (__accu0__.py_items, __accu0__);
/* 000876 */ 	}) ();
/* 000876 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000876 */ 		var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000876 */ 		var fsrcname = __left0__ [0];
/* 000876 */ 		var featuredeps = __left0__ [1];
/* 000877 */ 		if (__t__ (__gt__ (__call__ (len, null, featuredeps), 0))) {
/* 000878 */ 			(function () {
/* 000878 */ 				var __accu0__ = problematic_features;
/* 000879 */ 				return __call__ (__accu0__.append, __accu0__, __add__ ('‘{}’ → '.format (fsrcname), (function () {
/* 000879 */ 					var __accu1__ = ', ';
/* 000879 */ 					return __call__ (__accu1__.join, __accu1__, (function () {
/* 000879 */ 						var __accu2__ = [];
/* 000879 */ 						var __iterable1__ = featuredeps;
/* 000879 */ 						for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000879 */ 							var fdepname = __getitem__ (__iterable1__, __index1__);
/* 000879 */ 							(function () {
/* 000879 */ 								var __accu3__ = __accu2__;
/* 000879 */ 								return __call__ (__accu3__.append, __accu3__, '‘{}’'.format (fdepname));
/* 000879 */ 							}) ();
/* 000879 */ 						}
/* 000879 */ 						return __accu2__;
/* 000879 */ 					}) ());
/* 000879 */ 				}) ()));
/* 000879 */ 			}) ();
/* 000879 */ 		}
/* 000879 */ 	}
/* 000881 */ 	if (__t__ (__gt__ (__call__ (len, null, problematic_features), 0))) {
/* 000884 */ 		var __except0__ = __call__ (ValueError, null, __add__ ('The feature dependency graph has a cycle!  Problematic dependencies:'.format (), (function () {
/* 000884 */ 			var __accu0__ = '; ';
/* 000884 */ 			return __call__ (__accu0__.join, __accu0__, problematic_features);
/* 000884 */ 		}) ()));
/* 000884 */ 		__except0__.__cause__ = null;
/* 000884 */ 		throw __except0__;
/* 000884 */ 	}
/* 000887 */ 	if (__t__ (__ne__ (__call__ (len, null, sorted_features), __call__ (len, null, features_to_sort)))) {
/* 000888 */ 		var __except0__ = __call__ (RuntimeError, null, "Internal error, we didn't get all the features right when ordering them!");
/* 000888 */ 		__except0__.__cause__ = null;
/* 000888 */ 		throw __except0__;
/* 000888 */ 	}
/* 000892 */ 	return tuple ([sorted_features, features_by_name]);
/* 000892 */ };
/* 000921 */ export var FLMEnvironment =  __class__ ('FLMEnvironment', [object], {
/* 000921 */ 	__module__: __name__,
/* 000959 */ 	get __init__ () {return __get__ (this, function (self, features, parsing_state, latex_context) {
/* 000959 */ 		var tolerant_parsing = false;
/* 000959 */ 		var parsing_mode_deltas = null;
/* 000959 */ 		var text_processing_options = null;
/* 000959 */ 		if (arguments.length) {
/* 000959 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000959 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000959 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000959 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000959 */ 					switch (__attrib0__) {
/* 000959 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000959 */ 						case 'features': var features = __allkwargs0__ [__attrib0__]; break;
/* 000959 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000959 */ 						case 'latex_context': var latex_context = __allkwargs0__ [__attrib0__]; break;
/* 000959 */ 						case 'tolerant_parsing': var tolerant_parsing = __allkwargs0__ [__attrib0__]; break;
/* 000959 */ 						case 'parsing_mode_deltas': var parsing_mode_deltas = __allkwargs0__ [__attrib0__]; break;
/* 000959 */ 						case 'text_processing_options': var text_processing_options = __allkwargs0__ [__attrib0__]; break;
/* 000959 */ 					}
/* 000959 */ 				}
/* 000959 */ 			}
/* 000959 */ 		}
/* 000959 */ 		else {
/* 000959 */ 		}
/* 000969 */ 		__call__ (__call__ (__super__, null, FLMEnvironment, '__init__'), null, self);
/* 000971 */ 		// pass;
/* 000975 */ 		self.latex_context = latex_context;
/* 000976 */ 		self.parsing_state = parsing_state;
/* 000978 */ 		self.parsing_mode_deltas = (__t__ (parsing_mode_deltas) ? __call__ (dict, null, parsing_mode_deltas) : dict ({}));
/* 000980 */ 		var __left0__ = __call__ (features_sorted_by_dependencies, null, features);
/* 000980 */ 		self.features = __left0__ [0];
/* 000980 */ 		self.features_by_name = __left0__ [1];
/* 000982 */ 		// pass;
/* 000986 */ 		self.tolerant_parsing = tolerant_parsing;
/* 000988 */ 		self.nodes_finalizer = __call__ (NodesFinalizer, null, __kwargtrans__ ({text_processing_options: text_processing_options}));
/* 000992 */ 		if (__t__ (self.parsing_state.latex_context === null)) {
/* 000995 */ 			var __iterable0__ = self.features;
/* 000995 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000995 */ 				var f = __getitem__ (__iterable0__, __index0__);
/* 000996 */ 				var moredefs = (function () {
/* 000996 */ 					var __accu0__ = f;
/* 000996 */ 					return __call__ (__accu0__.add_latex_context_definitions, __accu0__);
/* 000996 */ 				}) ();
/* 000997 */ 				// pass;
/* 001002 */ 				if (__t__ (moredefs !== null)) {
/* 001003 */ 					var moredefs = __call__ (dict, null, moredefs);
/* 001004 */ 					if (__t__ (__call__ (len, null, moredefs))) {
/* 001005 */ 						// pass;
/* 001008 */ 						(function () {
/* 001008 */ 							var __accu0__ = moredefs;
/* 001008 */ 							return __call__ (__accu0__.py_update, __accu0__, __call__ (dict, null, __kwargtrans__ ({prepend: true})));
/* 001008 */ 						}) ();
/* 001009 */ 						(function () {
/* 001009 */ 							var __accu0__ = self.latex_context;
/* 001009 */ 							return __call__ (__accu0__.add_context_category, __accu0__, 'feature--{}'.format (f.feature_name), __kwargtrans__ (moredefs));
/* 001009 */ 						}) ();
/* 001009 */ 					}
/* 001009 */ 				}
/* 001009 */ 			}
/* 001015 */ 			(function () {
/* 001015 */ 				var __accu0__ = self.latex_context;
/* 001015 */ 				return __call__ (__accu0__.freeze, __accu0__);
/* 001015 */ 			}) ();
/* 001018 */ 			self.parsing_state.latex_context = self.latex_context;
/* 001018 */ 		}
/* 001020 */ 		else if (__t__ (self.latex_context !== null)) {
/* 001023 */ 			var __except0__ = __call__ (RuntimeError, null, 'The specified `parsing_state` instance already has a latex_context set');
/* 001023 */ 			__except0__.__cause__ = null;
/* 001023 */ 			throw __except0__;
/* 001023 */ 		}
/* 001023 */ 	});},
/* 001029 */ 	get supports_feature () {return __get__ (this, function (self, feature_name) {
/* 001029 */ 		if (arguments.length) {
/* 001029 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001029 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001029 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001029 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001029 */ 					switch (__attrib0__) {
/* 001029 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001029 */ 						case 'feature_name': var feature_name = __allkwargs0__ [__attrib0__]; break;
/* 001029 */ 					}
/* 001029 */ 				}
/* 001029 */ 			}
/* 001029 */ 		}
/* 001029 */ 		else {
/* 001029 */ 		}
/* 001034 */ 		return __t__ (__in__ (feature_name, self.features_by_name)) && __getitem__ (self.features_by_name, feature_name) !== null;
/* 001034 */ 	});},
/* 001039 */ 	get feature () {return __get__ (this, function (self, feature_name) {
/* 001039 */ 		if (arguments.length) {
/* 001039 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001039 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001039 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001039 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001039 */ 					switch (__attrib0__) {
/* 001039 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001039 */ 						case 'feature_name': var feature_name = __allkwargs0__ [__attrib0__]; break;
/* 001039 */ 					}
/* 001039 */ 				}
/* 001039 */ 			}
/* 001039 */ 		}
/* 001039 */ 		else {
/* 001039 */ 		}
/* 001044 */ 		return __getitem__ (self.features_by_name, feature_name);
/* 001044 */ 	});},
/* 001047 */ 	parsing_state_event_handler: null,
/* 001054 */ 	get make_latex_walker () {return __get__ (this, function (self, flm_text) {
/* 001054 */ 		var parsing_mode = null;
/* 001054 */ 		var resource_info = null;
/* 001054 */ 		var tolerant_parsing = null;
/* 001054 */ 		var what = null;
/* 001054 */ 		var input_lineno_colno_offsets = null;
/* 001054 */ 		if (arguments.length) {
/* 001054 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001054 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001054 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001054 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001054 */ 					switch (__attrib0__) {
/* 001054 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001054 */ 						case 'flm_text': var flm_text = __allkwargs0__ [__attrib0__]; break;
/* 001054 */ 						case 'standalone_mode': var standalone_mode = __allkwargs0__ [__attrib0__]; break;
/* 001054 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 001054 */ 						case 'parsing_mode': var parsing_mode = __allkwargs0__ [__attrib0__]; break;
/* 001054 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 001054 */ 						case 'tolerant_parsing': var tolerant_parsing = __allkwargs0__ [__attrib0__]; break;
/* 001054 */ 						case 'what': var what = __allkwargs0__ [__attrib0__]; break;
/* 001054 */ 						case 'input_lineno_colno_offsets': var input_lineno_colno_offsets = __allkwargs0__ [__attrib0__]; break;
/* 001054 */ 					}
/* 001054 */ 				}
/* 001054 */ 			}
/* 001054 */ 		}
/* 001054 */ 		else {
/* 001054 */ 		}
/* 001067 */ 		var default_parsing_state = (function () {
/* 001067 */ 			var __accu0__ = self;
/* 001067 */ 			return __call__ (__accu0__.make_parsing_state, __accu0__, __kwargtrans__ ({is_block_level: is_block_level, parsing_mode: parsing_mode}));
/* 001067 */ 		}) ();
/* 001072 */ 		if (__t__ (tolerant_parsing === null)) {
/* 001073 */ 			var tolerant_parsing = self.tolerant_parsing;
/* 001073 */ 		}
/* 001075 */ 		var latex_walker = __call__ (FLMLatexWalker, null, __kwargtrans__ ({flm_text: flm_text, default_parsing_state: default_parsing_state, tolerant_parsing: tolerant_parsing, flm_environment: self, standalone_mode: standalone_mode, resource_info: resource_info, what: what, parsing_state_event_handler: self.parsing_state_event_handler, input_lineno_colno_offsets: input_lineno_colno_offsets}));
/* 001089 */ 		return latex_walker;
/* 001089 */ 	});},
/* 001091 */ 	get define_parsing_mode () {return __get__ (this, function (self, parsing_mode, parsing_mode_delta) {
/* 001091 */ 		if (arguments.length) {
/* 001091 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001091 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001091 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001091 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001091 */ 					switch (__attrib0__) {
/* 001091 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001091 */ 						case 'parsing_mode': var parsing_mode = __allkwargs0__ [__attrib0__]; break;
/* 001091 */ 						case 'parsing_mode_delta': var parsing_mode_delta = __allkwargs0__ [__attrib0__]; break;
/* 001091 */ 					}
/* 001091 */ 				}
/* 001091 */ 			}
/* 001091 */ 		}
/* 001091 */ 		else {
/* 001091 */ 		}
/* 001092 */ 		if (__t__ (__in__ (parsing_mode, self.parsing_mode_deltas))) {
/* 001093 */ 			var __except0__ = __call__ (ValueError, null, 'Parsing mode ‘{}’ already defined!'.format (parsing_mode));
/* 001093 */ 			__except0__.__cause__ = null;
/* 001093 */ 			throw __except0__;
/* 001093 */ 		}
/* 001094 */ 		__setitem__ (self.parsing_mode_deltas, parsing_mode, parsing_mode_delta);
/* 001094 */ 	});},
/* 001096 */ 	get make_parsing_state () {return __get__ (this, function (self, is_block_level, parsing_mode) {
/* 001096 */ 		if (typeof parsing_mode == 'undefined' || (parsing_mode != null && parsing_mode.hasOwnProperty ("__kwargtrans__"))) {;
/* 001096 */ 			var parsing_mode = null;
/* 001096 */ 		};
/* 001096 */ 		if (arguments.length) {
/* 001096 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001096 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001096 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001096 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001096 */ 					switch (__attrib0__) {
/* 001096 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001096 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 001096 */ 						case 'parsing_mode': var parsing_mode = __allkwargs0__ [__attrib0__]; break;
/* 001096 */ 					}
/* 001096 */ 				}
/* 001096 */ 			}
/* 001096 */ 		}
/* 001096 */ 		else {
/* 001096 */ 		}
/* 001100 */ 		var default_parsing_state = self.parsing_state;
/* 001102 */ 		if (__t__ (parsing_mode !== null)) {
/* 001103 */ 			try {
/* 001104 */ 				var parsing_state_delta = __getitem__ (self.parsing_mode_deltas, parsing_mode);
/* 001104 */ 			}
/* 001104 */ 			catch (__except0__) {
/* 001104 */ 				if (isinstance (__except0__, KeyError)) {
/* 001104 */ 					var e = __except0__;
/* 001106 */ 					var __except1__ = __call__ (ValueError, null, 'Invalid parsing_mode ‘{}’'.format (parsing_mode));
/* 001106 */ 					__except1__.__cause__ = null;
/* 001106 */ 					throw __except1__;
/* 001106 */ 				}
/* 001106 */ 				else {
/* 001106 */ 					throw __except0__;
/* 001106 */ 				}
/* 001106 */ 			}
/* 001108 */ 			if (__t__ (parsing_state_delta !== null)) {
/* 001109 */ 				var default_parsing_state = (function () {
/* 001109 */ 					var __accu0__ = parsing_state_delta;
/* 001109 */ 					return __call__ (__accu0__.get_updated_parsing_state, __accu0__, default_parsing_state, __kwargtrans__ ({latex_walker: null}));
/* 001109 */ 				}) ();
/* 001109 */ 			}
/* 001109 */ 		}
/* 001114 */ 		var kwargs = dict ({});
/* 001115 */ 		if (__t__ (is_block_level !== null)) {
/* 001116 */ 			__setitem__ (kwargs, 'is_block_level', is_block_level);
/* 001116 */ 		}
/* 001118 */ 		return (function () {
/* 001118 */ 			var __accu0__ = default_parsing_state;
/* 001118 */ 			return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ (kwargs));
/* 001118 */ 		}) ();
/* 001118 */ 	});},
/* 001121 */ 	get make_fragment () {return __get__ (this, function (self, flm_text) {
/* 001121 */ 		var kwargs = dict ();
/* 001121 */ 		if (arguments.length) {
/* 001121 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001121 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001121 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001121 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001121 */ 					switch (__attrib0__) {
/* 001121 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001121 */ 						case 'flm_text': var flm_text = __allkwargs0__ [__attrib0__]; break;
/* 001121 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 001121 */ 					}
/* 001121 */ 				}
/* 001121 */ 				delete kwargs.__kwargtrans__;
/* 001121 */ 			}
/* 001121 */ 		}
/* 001121 */ 		else {
/* 001121 */ 		}
/* 001142 */ 		if (__t__ (__call__ (isinstance, null, flm_text, FLMFragment))) {
/* 001143 */ 			var frag = flm_text;
/* 001144 */ 			var __iterable0__ = tuple (['is_block_level', 'standalone_mode']);
/* 001144 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001144 */ 				var fld = __getitem__ (__iterable0__, __index0__);
/* 001146 */ 				if (__t__ (__t__ (__in__ (fld, kwargs)) && __t__ (__getitem__ (kwargs, fld) !== null) && __ne__ (__getitem__ (kwargs, fld), __call__ (getattr, null, frag, fld)))) {
/* 001150 */ 					var __except0__ = __call__ (ValueError, null, 'make_fragment(): FLMFragment instance specified but its ‘{}’ ({}) differs with requested ‘{}’ ({})'.format (fld, __call__ (repr, null, __call__ (getattr, null, frag, fld)), fld, __getitem__ (kwargs, fld)));
/* 001150 */ 					__except0__.__cause__ = null;
/* 001150 */ 					throw __except0__;
/* 001150 */ 				}
/* 001150 */ 			}
/* 001153 */ 			return frag;
/* 001153 */ 		}
/* 001155 */ 		try {
/* 001156 */ 			var fragment = __call__ (FLMFragment, null, flm_text, __kwargtrans__ (__mergekwargtrans__ ({environment: self}, kwargs)));
/* 001157 */ 			return fragment;
/* 001157 */ 		}
/* 001157 */ 		catch (__except0__) {
/* 001159 */ 			if (__t__ (!__t__ (((function () {
/* 001159 */ 				var __accu0__ = kwargs;
/* 001159 */ 				return __call__ (__accu0__.py_get, __accu0__, 'silent', false);
/* 001159 */ 			}) ())))) {
/* 001160 */ 				(function () {
/* 001160 */ 					var __accu0__ = logger;
/* 001161 */ 					return __call__ (__accu0__.error, __accu0__, (function () {
/* 001161 */ 						var __accu1__ = 'Error compiling fragment for {}\nContent was:\n‘{}’\n';
/* 001162 */ 						return __call__ (__accu1__.format, __accu1__, (function () {
/* 001162 */ 							var __accu2__ = kwargs;
/* 001162 */ 							return __call__ (__accu2__.py_get, __accu2__, 'what', '(unknown)');
/* 001162 */ 						}) (), __call__ (_abbrevtext, null, flm_text));
/* 001162 */ 					}) (), __kwargtrans__ ({exc_info: true}));
/* 001162 */ 				}) ();
/* 001162 */ 			}
/* 001165 */ 			__except0__.__cause__ = null;
/* 001165 */ 			throw __except0__;
/* 001165 */ 		}
/* 001165 */ 	});},
/* 001169 */ 	get make_document () {return __get__ (this, function (self, render_callback) {
/* 001169 */ 		var kwargs = dict ();
/* 001169 */ 		if (arguments.length) {
/* 001169 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001169 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001169 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001169 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001169 */ 					switch (__attrib0__) {
/* 001169 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001169 */ 						case 'render_callback': var render_callback = __allkwargs0__ [__attrib0__]; break;
/* 001169 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 001169 */ 					}
/* 001169 */ 				}
/* 001169 */ 				delete kwargs.__kwargtrans__;
/* 001169 */ 			}
/* 001169 */ 		}
/* 001169 */ 		else {
/* 001169 */ 		}
/* 001178 */ 		var doc = __call__ (FLMDocument, null, render_callback, __kwargtrans__ (__mergekwargtrans__ ({environment: self}, kwargs)));
/* 001183 */ 		(function () {
/* 001183 */ 			var __accu0__ = doc;
/* 001183 */ 			return __call__ (__accu0__.initialize, __accu0__);
/* 001183 */ 		}) ();
/* 001184 */ 		return doc;
/* 001184 */ 	});},
/* 001187 */ 	get get_features_selection () {return __get__ (this, function (self, enable_features) {
/* 001187 */ 		if (arguments.length) {
/* 001187 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001187 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001187 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001187 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001187 */ 					switch (__attrib0__) {
/* 001187 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001187 */ 						case 'enable_features': var enable_features = __allkwargs0__ [__attrib0__]; break;
/* 001187 */ 					}
/* 001187 */ 				}
/* 001187 */ 			}
/* 001187 */ 		}
/* 001187 */ 		else {
/* 001187 */ 		}
/* 001189 */ 		if (__t__ (enable_features === null)) {
/* 001191 */ 			return self.features;
/* 001191 */ 		}
/* 001193 */ 		var features = (function () {
/* 001193 */ 			var __accu0__ = [];
/* 001193 */ 			var __iterable0__ = enable_features;
/* 001193 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001195 */ 				var feature_name = __getitem__ (__iterable0__, __index0__);
/* 001195 */ 				(function () {
/* 001195 */ 					var __accu1__ = __accu0__;
/* 001195 */ 					return __call__ (__accu1__.append, __accu1__, __getitem__ (self.features_by_name, feature_name));
/* 001195 */ 				}) ();
/* 001195 */ 			}
/* 001195 */ 			return __accu0__;
/* 001195 */ 		}) ();
/* 001199 */ 		__call__ (features_ensure_dependencies_are_met, null, features);
/* 001201 */ 		return features;
/* 001201 */ 	});},
/* 001206 */ 	environment_get_located_error_message: null,
/* 001208 */ 	get get_located_error_message () {return __get__ (this, function (self, exception_object) {
/* 001208 */ 		if (arguments.length) {
/* 001208 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001208 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001208 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001208 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001208 */ 					switch (__attrib0__) {
/* 001208 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001208 */ 						case 'exception_object': var exception_object = __allkwargs0__ [__attrib0__]; break;
/* 001208 */ 					}
/* 001208 */ 				}
/* 001208 */ 			}
/* 001208 */ 		}
/* 001208 */ 		else {
/* 001208 */ 		}
/* 001209 */ 		if (__t__ (self.environment_get_located_error_message !== null)) {
/* 001210 */ 			return (function () {
/* 001210 */ 				var __accu0__ = self;
/* 001210 */ 				return __call__ (__accu0__.environment_get_located_error_message, __accu0__, self, exception_object);
/* 001210 */ 			}) ();
/* 001210 */ 		}
/* 001211 */ 		return (function () {
/* 001211 */ 			var __accu0__ = __call__ (LatexWalkerLocatedErrorFormatter, null, exception_object);
/* 001211 */ 			return __call__ (__accu0__.to_display_string, __accu0__);
/* 001211 */ 		}) ();
/* 001211 */ 	});},
/* 001215 */ 	get finalize_nodelist () {return __get__ (this, function (self, nodelist) {
/* 001215 */ 		if (arguments.length) {
/* 001215 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001215 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001215 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001215 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001215 */ 					switch (__attrib0__) {
/* 001215 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001215 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 001215 */ 					}
/* 001215 */ 				}
/* 001215 */ 			}
/* 001215 */ 		}
/* 001215 */ 		else {
/* 001215 */ 		}
/* 001230 */ 		var nl = (function () {
/* 001230 */ 			var __accu0__ = self.nodes_finalizer;
/* 001230 */ 			return __call__ (__accu0__.finalize_nodelist, __accu0__, nodelist);
/* 001230 */ 		}) ();
/* 001231 */ 		return nl;
/* 001231 */ 	});},
/* 001233 */ 	get finalize_node () {return __get__ (this, function (self, node) {
/* 001233 */ 		if (arguments.length) {
/* 001233 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001233 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001233 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001233 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001233 */ 					switch (__attrib0__) {
/* 001233 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001233 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001233 */ 					}
/* 001233 */ 				}
/* 001233 */ 			}
/* 001233 */ 		}
/* 001233 */ 		else {
/* 001233 */ 		}
/* 001259 */ 		var node = (function () {
/* 001259 */ 			var __accu0__ = self.nodes_finalizer;
/* 001259 */ 			return __call__ (__accu0__.finalize_node, __accu0__, node);
/* 001259 */ 		}) ();
/* 001265 */ 		node._flm_node_id = __call__ (fn_unique_object_id, null, node);
/* 001267 */ 		return node;
/* 001267 */ 	});}
/* 001267 */ });
/* 001277 */ export var standard_parsing_state = function () {
/* 001277 */ 	var force_block_level = null;
/* 001277 */ 	var enable_comments = true;
/* 001277 */ 	var comment_start = '%%';
/* 001277 */ 	var extra_forbidden_characters = '';
/* 001277 */ 	var dollar_inline_math_mode = false;
/* 001277 */ 	if (arguments.length) {
/* 001277 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001277 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001277 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001277 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001277 */ 				switch (__attrib0__) {
/* 001277 */ 					case 'force_block_level': var force_block_level = __allkwargs0__ [__attrib0__]; break;
/* 001277 */ 					case 'enable_comments': var enable_comments = __allkwargs0__ [__attrib0__]; break;
/* 001277 */ 					case 'comment_start': var comment_start = __allkwargs0__ [__attrib0__]; break;
/* 001277 */ 					case 'extra_forbidden_characters': var extra_forbidden_characters = __allkwargs0__ [__attrib0__]; break;
/* 001277 */ 					case 'dollar_inline_math_mode': var dollar_inline_math_mode = __allkwargs0__ [__attrib0__]; break;
/* 001277 */ 				}
/* 001277 */ 			}
/* 001277 */ 		}
/* 001277 */ 	}
/* 001277 */ 	else {
/* 001277 */ 	}
/* 001293 */ 	var forbidden_characters = __call__ (str, null, extra_forbidden_characters);
/* 001294 */ 	if (__t__ (__t__ (!__t__ ((dollar_inline_math_mode))) && !__in__ ('$', forbidden_characters))) {
/* 001295 */ 		var forbidden_characters = __call__ (__iadd__, null, forbidden_characters, '$');
/* 001295 */ 	}
/* 001296 */ 	if (__t__ (__t__ ((__t__ (!__t__ ((enable_comments))) || __ne__ (comment_start, '%'))) && !__in__ ('%', forbidden_characters))) {
/* 001298 */ 		var forbidden_characters = __call__ (__iadd__, null, forbidden_characters, '%');
/* 001298 */ 	}
/* 001300 */ 	var latex_inline_math_delimiters = [tuple (['\\(', '\\)'])];
/* 001302 */ 	if (__t__ (dollar_inline_math_mode)) {
/* 001303 */ 		(function () {
/* 001303 */ 			var __accu0__ = latex_inline_math_delimiters;
/* 001303 */ 			return __call__ (__accu0__.append, __accu0__, tuple (['$', '$']));
/* 001303 */ 		}) ();
/* 001303 */ 	}
/* 001305 */ 	return __call__ (FLMParsingState, null, __kwargtrans__ ({is_block_level: force_block_level, latex_context: null, enable_comments: enable_comments, comment_start: comment_start, latex_inline_math_delimiters: latex_inline_math_delimiters, latex_display_math_delimiters: [tuple (['\\[', '\\]'])], forbidden_characters: forbidden_characters}));
/* 001305 */ };
/* 001317 */ export var FLMLatexWalkerMathContextParsingStateEventHandler =  __class__ ('FLMLatexWalkerMathContextParsingStateEventHandler', [latexnodes.LatexWalkerParsingStateEventHandler], {
/* 001317 */ 	__module__: __name__,
/* 001346 */ 	math_mode_extend_context: dict ({'unknown_macro_spec': (function () {
/* 001346 */ 		var __accu0__ = macrospec;
/* 001346 */ 		return __call__ (__accu0__.MacroSpec, __accu0__, '');
/* 001347 */ 	}) (), 'unknown_environment_spec': (function () {
/* 001347 */ 		var __accu0__ = macrospec;
/* 001347 */ 		return __call__ (__accu0__.EnvironmentSpec, __accu0__, '');
/* 001348 */ 	}) (), 'unknown_specials_spec': (function () {
/* 001348 */ 		var __accu0__ = macrospec;
/* 001348 */ 		return __call__ (__accu0__.SpecialsSpec, __accu0__, '');
/* 001345 */ 	}) ()}),
/* 001351 */ 	get enter_math_mode () {return __get__ (this, function (self, math_mode_delimiter, trigger_token) {
/* 001351 */ 		if (typeof math_mode_delimiter == 'undefined' || (math_mode_delimiter != null && math_mode_delimiter.hasOwnProperty ("__kwargtrans__"))) {;
/* 001351 */ 			var math_mode_delimiter = null;
/* 001351 */ 		};
/* 001351 */ 		if (typeof trigger_token == 'undefined' || (trigger_token != null && trigger_token.hasOwnProperty ("__kwargtrans__"))) {;
/* 001351 */ 			var trigger_token = null;
/* 001351 */ 		};
/* 001351 */ 		if (arguments.length) {
/* 001351 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001351 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001351 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001351 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001351 */ 					switch (__attrib0__) {
/* 001351 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001351 */ 						case 'math_mode_delimiter': var math_mode_delimiter = __allkwargs0__ [__attrib0__]; break;
/* 001351 */ 						case 'trigger_token': var trigger_token = __allkwargs0__ [__attrib0__]; break;
/* 001351 */ 					}
/* 001351 */ 				}
/* 001351 */ 			}
/* 001351 */ 		}
/* 001351 */ 		else {
/* 001351 */ 		}
/* 001357 */ 		var set_attributes = __call__ (dict, null, __kwargtrans__ ({in_math_mode: true, math_mode_delimiter: math_mode_delimiter}));
/* 001361 */ 		// pass;
/* 001366 */ 		return (function () {
/* 001366 */ 			var __accu0__ = macrospec;
/* 001366 */ 			return __call__ (__accu0__.ParsingStateDeltaExtendLatexContextDb, __accu0__, __kwargtrans__ ({set_attributes: set_attributes, extend_latex_context: self.math_mode_extend_context}));
/* 001366 */ 		}) ();
/* 001366 */ 	});},
/* 001371 */ 	get leave_math_mode () {return __get__ (this, function (self, trigger_token) {
/* 001371 */ 		if (typeof trigger_token == 'undefined' || (trigger_token != null && trigger_token.hasOwnProperty ("__kwargtrans__"))) {;
/* 001371 */ 			var trigger_token = null;
/* 001371 */ 		};
/* 001371 */ 		if (arguments.length) {
/* 001371 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001371 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001371 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001371 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001371 */ 					switch (__attrib0__) {
/* 001371 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001371 */ 						case 'trigger_token': var trigger_token = __allkwargs0__ [__attrib0__]; break;
/* 001371 */ 					}
/* 001371 */ 				}
/* 001371 */ 			}
/* 001371 */ 		}
/* 001371 */ 		else {
/* 001371 */ 		}
/* 001378 */ 		return (function () {
/* 001378 */ 			var __accu0__ = macrospec;
/* 001383 */ 			return __call__ (__accu0__.ParsingStateDeltaExtendLatexContextDb, __accu0__, __kwargtrans__ ({set_attributes: __call__ (dict, null, __kwargtrans__ ({in_math_mode: false, math_mode_delimiter: null})), extend_latex_context: __call__ (dict, null, __kwargtrans__ ({unknown_macro_spec: null, unknown_environment_spec: null, unknown_specials_spec: null}))}));
/* 001383 */ 		}) ();
/* 001383 */ 	});}
/* 001383 */ });
/* 001394 */ export var standard_environment_get_located_error_message = function (environment, exception_object) {
/* 001394 */ 	if (arguments.length) {
/* 001394 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001394 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001394 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001394 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001394 */ 				switch (__attrib0__) {
/* 001394 */ 					case 'environment': var environment = __allkwargs0__ [__attrib0__]; break;
/* 001394 */ 					case 'exception_object': var exception_object = __allkwargs0__ [__attrib0__]; break;
/* 001394 */ 				}
/* 001394 */ 			}
/* 001394 */ 		}
/* 001394 */ 	}
/* 001394 */ 	else {
/* 001394 */ 	}
/* 001423 */ 	var msg = null;
/* 001424 */ 	var error_type_info = exception_object.error_type_info;
/* 001425 */ 	if (__t__ (error_type_info)) {
/* 001426 */ 		var what = __getitem__ (error_type_info, 'what');
/* 001427 */ 		if (__t__ (__eq__ (what, 'token_forbidden_character'))) {
/* 001428 */ 			if (__t__ (__eq__ (__getitem__ (error_type_info, 'forbidden_character'), '%'))) {
/* 001429 */ 				var msg = 'Single percent signs are not allowed here. Use ‘\\%’ to typeset a literal percent sign, and ‘%%’ to start a comment.';
/* 001429 */ 			}
/* 001433 */ 			else if (__t__ (__eq__ (__getitem__ (error_type_info, 'forbidden_character'), '$'))) {
/* 001434 */ 				var msg = "You can't use ‘$’ here. LaTeX math should be typeset using \\(...\\) for inline math and \\[...\\] for unnumbered display equations. Use ‘\\$’ for a literal dollar sign.";
/* 001434 */ 			}
/* 001434 */ 		}
/* 001434 */ 	}
/* 001445 */ 	return msg;
/* 001445 */ };
/* 001452 */ export var make_standard_environment = function (features, parsing_state, latex_context, flm_environment_options, parsing_state_options) {
/* 001452 */ 	if (typeof parsing_state == 'undefined' || (parsing_state != null && parsing_state.hasOwnProperty ("__kwargtrans__"))) {;
/* 001452 */ 		var parsing_state = null;
/* 001452 */ 	};
/* 001452 */ 	if (typeof latex_context == 'undefined' || (latex_context != null && latex_context.hasOwnProperty ("__kwargtrans__"))) {;
/* 001452 */ 		var latex_context = null;
/* 001452 */ 	};
/* 001452 */ 	if (typeof flm_environment_options == 'undefined' || (flm_environment_options != null && flm_environment_options.hasOwnProperty ("__kwargtrans__"))) {;
/* 001452 */ 		var flm_environment_options = null;
/* 001452 */ 	};
/* 001452 */ 	if (typeof parsing_state_options == 'undefined' || (parsing_state_options != null && parsing_state_options.hasOwnProperty ("__kwargtrans__"))) {;
/* 001452 */ 		var parsing_state_options = null;
/* 001452 */ 	};
/* 001452 */ 	if (arguments.length) {
/* 001452 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001452 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001452 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001452 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001452 */ 				switch (__attrib0__) {
/* 001452 */ 					case 'features': var features = __allkwargs0__ [__attrib0__]; break;
/* 001452 */ 					case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 001452 */ 					case 'latex_context': var latex_context = __allkwargs0__ [__attrib0__]; break;
/* 001452 */ 					case 'flm_environment_options': var flm_environment_options = __allkwargs0__ [__attrib0__]; break;
/* 001452 */ 					case 'parsing_state_options': var parsing_state_options = __allkwargs0__ [__attrib0__]; break;
/* 001452 */ 				}
/* 001452 */ 			}
/* 001452 */ 		}
/* 001452 */ 	}
/* 001452 */ 	else {
/* 001452 */ 	}
/* 001487 */ 	if (__t__ (latex_context === null)) {
/* 001488 */ 		var latex_context = (function () {
/* 001488 */ 			var __accu0__ = macrospec;
/* 001488 */ 			return __call__ (__accu0__.LatexContextDb, __accu0__);
/* 001488 */ 		}) ();
/* 001488 */ 	}
/* 001490 */ 	if (__t__ (parsing_state === null)) {
/* 001491 */ 		var parsing_state_options_2 = dict ({});
/* 001492 */ 		if (__t__ (parsing_state_options !== null)) {
/* 001493 */ 			var parsing_state_options_2 = parsing_state_options;
/* 001493 */ 		}
/* 001495 */ 		var parsing_state = __call__ (standard_parsing_state, null, __kwargtrans__ (parsing_state_options_2));
/* 001495 */ 	}
/* 001497 */ 	var parsing_state_event_handler = __call__ (FLMLatexWalkerMathContextParsingStateEventHandler, null);
/* 001499 */ 	var flm_environment_options_2 = dict ({});
/* 001500 */ 	if (__t__ (flm_environment_options !== null)) {
/* 001501 */ 		var flm_environment_options_2 = flm_environment_options;
/* 001501 */ 	}
/* 001503 */ 	var environment = __call__ (FLMEnvironment, null, features, parsing_state, latex_context, __kwargtrans__ (flm_environment_options_2));
/* 001510 */ 	environment.parsing_state_event_handler = parsing_state_event_handler;
/* 001512 */ 	environment.environment_get_located_error_message = standard_environment_get_located_error_message;
/* 001515 */ 	return environment;
/* 001515 */ };
/* 001529 */ export var _make_argvalue = function (argvalue, latex_walker, parsing_state) {
/* 001529 */ 	if (arguments.length) {
/* 001529 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001529 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001529 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001529 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001529 */ 				switch (__attrib0__) {
/* 001529 */ 					case 'argvalue': var argvalue = __allkwargs0__ [__attrib0__]; break;
/* 001529 */ 					case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 001529 */ 					case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 001529 */ 				}
/* 001529 */ 			}
/* 001529 */ 		}
/* 001529 */ 	}
/* 001529 */ 	else {
/* 001529 */ 	}
/* 001531 */ 	if (__t__ (argvalue === null)) {
/* 001532 */ 		return null;
/* 001532 */ 	}
/* 001534 */ 	if (__t__ (__call__ (isinstance, null, argvalue, str))) {
/* 001535 */ 		var argvalue = (function () {
/* 001535 */ 			var __accu0__ = latex_walker;
/* 001535 */ 			return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: argvalue, pos: null, pos_end: null, parsing_state: parsing_state}));
/* 001535 */ 		}) ();
/* 001535 */ 	}
/* 001543 */ 	if (__t__ (__call__ (isinstance, null, argvalue, latexnodes_nodes.LatexGroupNode))) {
/* 001544 */ 		return argvalue;
/* 001544 */ 	}
/* 001548 */ 	if (__t__ (__call__ (isinstance, null, argvalue, latexnodes_nodes.LatexNodeList))) {
/* 001549 */ 		var nodelist = argvalue;
/* 001549 */ 	}
/* 001551 */ 	else if (__t__ (__call__ (isinstance, null, argvalue, list))) {
/* 001552 */ 		var nodelist = (function () {
/* 001552 */ 			var __accu0__ = latex_walker;
/* 001552 */ 			return __call__ (__accu0__.make_nodelist, __accu0__, argvalue, __kwargtrans__ ({parsing_state: parsing_state}));
/* 001552 */ 		}) ();
/* 001552 */ 	}
/* 001555 */ 	else {
/* 001558 */ 		var nodelist = (function () {
/* 001558 */ 			var __accu0__ = latex_walker;
/* 001558 */ 			return __call__ (__accu0__.make_nodelist, __accu0__, [argvalue], __kwargtrans__ ({parsing_state: parsing_state}));
/* 001558 */ 		}) ();
/* 001558 */ 	}
/* 001563 */ 	var groupnode = (function () {
/* 001563 */ 		var __accu0__ = latex_walker;
/* 001563 */ 		return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexGroupNode, __kwargtrans__ ({delimiters: tuple (['', '']), nodelist: nodelist, pos: nodelist.pos, pos_end: nodelist.pos_end, parsing_state: parsing_state}));
/* 001563 */ 	}) ();
/* 001572 */ 	return groupnode;
/* 001572 */ };
/* 001575 */ export var make_invocable_arguments = function (flm_spec, args) {
/* 001575 */ 	if (arguments.length) {
/* 001575 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001575 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001575 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001575 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001575 */ 				switch (__attrib0__) {
/* 001575 */ 					case 'flm_spec': var flm_spec = __allkwargs0__ [__attrib0__]; break;
/* 001575 */ 					case 'args': var args = __allkwargs0__ [__attrib0__]; break;
/* 001575 */ 					case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 001575 */ 					case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 001575 */ 				}
/* 001575 */ 			}
/* 001575 */ 		}
/* 001575 */ 	}
/* 001575 */ 	else {
/* 001575 */ 	}
/* 001591 */ 	var argnlist = (function () {
/* 001591 */ 		var __accu0__ = [];
/* 001591 */ 		var __iterable0__ = flm_spec.arguments_spec_list;
/* 001591 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001591 */ 			var _ = __getitem__ (__iterable0__, __index0__);
/* 001591 */ 			(function () {
/* 001591 */ 				var __accu1__ = __accu0__;
/* 001591 */ 				return __call__ (__accu1__.append, __accu1__, null);
/* 001591 */ 			}) ();
/* 001591 */ 		}
/* 001591 */ 		return __accu0__;
/* 001591 */ 	}) ();
/* 001593 */ 	if (__t__ (args === null)) {
/* 001594 */ 		return argnlist;
/* 001594 */ 	}
/* 001596 */ 	var __iterable0__ = (function () {
/* 001596 */ 		var __accu0__ = args;
/* 001596 */ 		return __call__ (__accu0__.py_items, __accu0__);
/* 001596 */ 	}) ();
/* 001596 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001596 */ 		var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 001596 */ 		var argname = __left0__ [0];
/* 001596 */ 		var argvalue = __left0__ [1];
/* 001598 */ 		var argj = null;
/* 001599 */ 		var __iterable1__ = __call__ (enumerate, null, flm_spec.arguments_spec_list);
/* 001599 */ 		for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 001599 */ 			var __left0__ = __getitem__ (__iterable1__, __index1__);
/* 001599 */ 			var candidateargj = __left0__ [0];
/* 001599 */ 			var candidateargspec = __left0__ [1];
/* 001600 */ 			if (__t__ (__eq__ (candidateargspec.argname, argname))) {
/* 001601 */ 				var argj = candidateargj;
/* 001601 */ 				break;
/* 001601 */ 			}
/* 001601 */ 		}
/* 001603 */ 		if (__t__ (argj === null)) {
/* 001604 */ 			(function () {
/* 001604 */ 				var __accu0__ = logger;
/* 001604 */ 				return __call__ (__accu0__.error, __accu0__, 'Cannot find argument %r in spec %r', argname, flm_spec.arguments_spec_list);
/* 001604 */ 			}) ();
/* 001606 */ 			var __except0__ = __call__ (ValueError, null, 'No argument named ‘{}’ in spec'.format (argname));
/* 001606 */ 			__except0__.__cause__ = null;
/* 001606 */ 			throw __except0__;
/* 001606 */ 		}
/* 001609 */ 		__setitem__ (argnlist, argj, __call__ (_make_argvalue, null, argvalue, latex_walker, parsing_state));
/* 001609 */ 	}
/* 001611 */ 	return argnlist;
/* 001611 */ };
/* 001614 */ export var make_invocable_node_instance = function (node_type, flm_spec) {
/* 001614 */ 	var args = null;
/* 001614 */ 	var body_nodelist = null;
/* 001614 */ 	var node_kwargs = null;
/* 001614 */ 	if (arguments.length) {
/* 001614 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001614 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001614 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001614 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001614 */ 				switch (__attrib0__) {
/* 001614 */ 					case 'node_type': var node_type = __allkwargs0__ [__attrib0__]; break;
/* 001614 */ 					case 'flm_spec': var flm_spec = __allkwargs0__ [__attrib0__]; break;
/* 001614 */ 					case 'args': var args = __allkwargs0__ [__attrib0__]; break;
/* 001614 */ 					case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 001614 */ 					case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 001614 */ 					case 'body_nodelist': var body_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 001614 */ 					case 'node_kwargs': var node_kwargs = __allkwargs0__ [__attrib0__]; break;
/* 001614 */ 				}
/* 001614 */ 			}
/* 001614 */ 		}
/* 001614 */ 	}
/* 001614 */ 	else {
/* 001614 */ 	}
/* 001641 */ 	var nkwargs = dict ({'pos': null, 'pos_end': null});
/* 001646 */ 	if (__t__ (node_type === latexnodes_nodes.LatexMacroNode)) {
/* 001647 */ 		__setitem__ (nkwargs, 'macroname', flm_spec.macroname);
/* 001648 */ 		if (__t__ (body_nodelist !== null)) {
/* 001649 */ 			var __except0__ = __call__ (ValueError, null, 'For a LatexMacroNode you must have body_nodelist=None');
/* 001649 */ 			__except0__.__cause__ = null;
/* 001649 */ 			throw __except0__;
/* 001649 */ 		}
/* 001649 */ 	}
/* 001651 */ 	else if (__t__ (node_type === latexnodes_nodes.LatexEnvironmentNode)) {
/* 001652 */ 		__setitem__ (nkwargs, 'environmentname', flm_spec.environmentname);
/* 001652 */ 	}
/* 001654 */ 	else if (__t__ (node_type === latexnodes_nodes.LatexSpecialsNode)) {
/* 001655 */ 		__setitem__ (nkwargs, 'specials_chars', flm_spec.specials_chars);
/* 001656 */ 		if (__t__ (body_nodelist !== null)) {
/* 001657 */ 			var __except0__ = __call__ (ValueError, null, 'For a LatexSpecialsNode you must have body_nodelist=None');
/* 001657 */ 			__except0__.__cause__ = null;
/* 001657 */ 			throw __except0__;
/* 001657 */ 		}
/* 001657 */ 	}
/* 001659 */ 	var argnlist = __call__ (make_invocable_arguments, null, flm_spec, args, __kwargtrans__ ({latex_walker: latex_walker, parsing_state: parsing_state}));
/* 001663 */ 	var nodeargd = (function () {
/* 001663 */ 		var __accu0__ = latexnodes_nodes;
/* 001663 */ 		return __call__ (__accu0__.ParsedArguments, __accu0__, __kwargtrans__ ({argnlist: argnlist, arguments_spec_list: flm_spec.arguments_spec_list}));
/* 001663 */ 	}) ();
/* 001668 */ 	if (__t__ (body_nodelist !== null)) {
/* 001669 */ 		__setitem__ (nkwargs, 'nodelist', body_nodelist);
/* 001669 */ 	}
/* 001671 */ 	if (__t__ (node_kwargs !== null)) {
/* 001672 */ 		(function () {
/* 001672 */ 			var __accu0__ = nkwargs;
/* 001672 */ 			return __call__ (__accu0__.py_update, __accu0__, node_kwargs);
/* 001672 */ 		}) ();
/* 001672 */ 	}
/* 001674 */ 	var node = (function () {
/* 001674 */ 		var __accu0__ = latex_walker;
/* 001674 */ 		return __call__ (__accu0__.make_node, __accu0__, node_type, __kwargtrans__ (__mergekwargtrans__ ({spec: flm_spec, nodeargd: nodeargd, parsing_state: parsing_state}, nkwargs)));
/* 001674 */ 	}) ();
/* 001682 */ 	var node = (function () {
/* 001682 */ 		var __accu0__ = flm_spec;
/* 001682 */ 		return __call__ (__accu0__.finalize_node, __accu0__, node);
/* 001682 */ 	}) ();
/* 001684 */ 	return node;
/* 001684 */ };
/* 001688 */ export var _abbrevtext = function (x, maxlen) {
/* 001688 */ 	if (typeof maxlen == 'undefined' || (maxlen != null && maxlen.hasOwnProperty ("__kwargtrans__"))) {;
/* 001688 */ 		var maxlen = 100;
/* 001688 */ 	};
/* 001688 */ 	if (arguments.length) {
/* 001688 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001688 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001688 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001688 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001688 */ 				switch (__attrib0__) {
/* 001688 */ 					case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 001688 */ 					case 'maxlen': var maxlen = __allkwargs0__ [__attrib0__]; break;
/* 001688 */ 				}
/* 001688 */ 			}
/* 001688 */ 		}
/* 001688 */ 	}
/* 001688 */ 	else {
/* 001688 */ 	}
/* 001689 */ 	var x = __call__ (str, null, x);
/* 001690 */ 	return __add__ (__getslice__ (x, 0, maxlen, 1), (__t__ (__gt__ (__call__ (len, null, x), maxlen)) ? '…' : ''));
/* 001690 */ };
/* 000006 */ 
//# sourceMappingURL=flm.flmenvironment.map