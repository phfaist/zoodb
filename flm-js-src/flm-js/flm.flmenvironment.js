/* 000001 */ // Transcrypt'ed from Python, 2023-04-25 09:47:57
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
/* 000006 */ export {LatexWalkerLocatedErrorFormatter, macrospec, latexwalker, FLMDocument, latexnodes_nodes, latexnodes, FLMFragment, LatexWalkerParseError};
/* 000001 */ var __name__ = 'flm.flmenvironment';
/* 000008 */ export var logger = (function () {
/* 000008 */ 	var __accu0__ = logging;
/* 000008 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000008 */ }) ();
/* 000028 */ export var fn_unique_object_id = unique_object_id.fn_unique_object_id;
/* 000037 */ export var FLMParsingState =  __class__ ('FLMParsingState', [latexnodes.ParsingState], {
/* 000037 */ 	__module__: __name__,
/* 000040 */ 	_fields: __call__ (tuple, null, __add__ (__call__ (list, null, latexnodes.ParsingState._fields), ['is_block_level'])),
/* 000042 */ 	get set_fields () {return __get__ (this, function (self) {
/* 000042 */ 		var is_block_level = null;
/* 000042 */ 		var kwargs = dict ();
/* 000042 */ 		if (arguments.length) {
/* 000042 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000042 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000042 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000042 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000042 */ 					switch (__attrib0__) {
/* 000042 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000042 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000042 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000042 */ 					}
/* 000042 */ 				}
/* 000042 */ 				delete kwargs.__kwargtrans__;
/* 000042 */ 			}
/* 000042 */ 		}
/* 000042 */ 		else {
/* 000042 */ 		}
/* 000043 */ 		__call__ (__call__ (__super__, null, FLMParsingState, 'set_fields'), null, self, __kwargtrans__ (kwargs));
/* 000044 */ 		self.is_block_level = is_block_level;
/* 000044 */ 	});}
/* 000044 */ });
/* 000047 */ export var FLMParsingStateDeltaSetBlockLevel =  __class__ ('FLMParsingStateDeltaSetBlockLevel', [latexnodes.ParsingStateDelta], {
/* 000047 */ 	__module__: __name__,
/* 000048 */ 	get __init__ () {return __get__ (this, function (self, is_block_level) {
/* 000048 */ 		if (typeof is_block_level == 'undefined' || (is_block_level != null && is_block_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000048 */ 			var is_block_level = null;
/* 000048 */ 		};
/* 000048 */ 		if (arguments.length) {
/* 000048 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000048 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000048 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000048 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000048 */ 					switch (__attrib0__) {
/* 000048 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000048 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000048 */ 					}
/* 000048 */ 				}
/* 000048 */ 			}
/* 000048 */ 		}
/* 000048 */ 		else {
/* 000048 */ 		}
/* 000050 */ 		__call__ (__call__ (__super__, null, FLMParsingStateDeltaSetBlockLevel, '__init__'), null, self, __kwargtrans__ ({set_attributes: __call__ (dict, null, __kwargtrans__ ({is_block_level: is_block_level}))}));
/* 000050 */ 	});}
/* 000050 */ });
/* 000057 */ export var FLMArgumentSpec = function (parser, argname, is_block_level, flm_doc) {
/* 000057 */ 	if (typeof is_block_level == 'undefined' || (is_block_level != null && is_block_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000057 */ 		var is_block_level = false;
/* 000057 */ 	};
/* 000057 */ 	if (typeof flm_doc == 'undefined' || (flm_doc != null && flm_doc.hasOwnProperty ("__kwargtrans__"))) {;
/* 000057 */ 		var flm_doc = null;
/* 000057 */ 	};
/* 000057 */ 	if (arguments.length) {
/* 000057 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000057 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000057 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000057 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000057 */ 				switch (__attrib0__) {
/* 000057 */ 					case 'parser': var parser = __allkwargs0__ [__attrib0__]; break;
/* 000057 */ 					case 'argname': var argname = __allkwargs0__ [__attrib0__]; break;
/* 000057 */ 					case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000057 */ 					case 'flm_doc': var flm_doc = __allkwargs0__ [__attrib0__]; break;
/* 000057 */ 				}
/* 000057 */ 			}
/* 000057 */ 		}
/* 000057 */ 	}
/* 000057 */ 	else {
/* 000057 */ 	}
/* 000064 */ 	var parsing_state_delta = null;
/* 000065 */ 	if (__t__ (is_block_level !== null)) {
/* 000066 */ 		var parsing_state_delta = __call__ (FLMParsingStateDeltaSetBlockLevel, null, __kwargtrans__ ({is_block_level: is_block_level}));
/* 000066 */ 	}
/* 000069 */ 	var arg = (function () {
/* 000069 */ 		var __accu0__ = latexnodes;
/* 000069 */ 		return __call__ (__accu0__.LatexArgumentSpec, __accu0__, __kwargtrans__ ({parser: parser, argname: argname, parsing_state_delta: parsing_state_delta}));
/* 000069 */ 	}) ();
/* 000074 */ 	arg._flm_doc = flm_doc;
/* 000075 */ 	return arg;
/* 000075 */ };
/* 000082 */ export var BlocksBuilder =  __class__ ('BlocksBuilder', [object], {
/* 000082 */ 	__module__: __name__,
/* 000084 */ 	rx_space: (function () {
/* 000084 */ 		var __accu0__ = re;
/* 000084 */ 		return __call__ (__accu0__.compile, __accu0__, '[ \\t\\n\\r]+');
/* 000084 */ 	}) (),
/* 000085 */ 	rx_only_space: (function () {
/* 000085 */ 		var __accu0__ = re;
/* 000085 */ 		return __call__ (__accu0__.compile, __accu0__, '^[ \\t\\n\\r]+$');
/* 000085 */ 	}) (),
/* 000087 */ 	get __init__ () {return __get__ (this, function (self, latexnodelist) {
/* 000087 */ 		if (arguments.length) {
/* 000087 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000087 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000087 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000087 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000087 */ 					switch (__attrib0__) {
/* 000087 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000087 */ 						case 'latexnodelist': var latexnodelist = __allkwargs0__ [__attrib0__]; break;
/* 000087 */ 					}
/* 000087 */ 				}
/* 000087 */ 			}
/* 000087 */ 		}
/* 000087 */ 		else {
/* 000087 */ 		}
/* 000088 */ 		__call__ (__call__ (__super__, null, BlocksBuilder, '__init__'), null, self);
/* 000089 */ 		self.latexnodelist = latexnodelist;
/* 000090 */ 		self.pending_paragraph_nodes = [];
/* 000091 */ 		self.blocks = [];
/* 000091 */ 	});},
/* 000093 */ 	get flush_paragraph () {return __get__ (this, function (self) {
/* 000093 */ 		if (arguments.length) {
/* 000093 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000093 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000093 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000093 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000093 */ 					switch (__attrib0__) {
/* 000093 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000093 */ 					}
/* 000093 */ 				}
/* 000093 */ 			}
/* 000093 */ 		}
/* 000093 */ 		else {
/* 000093 */ 		}
/* 000094 */ 		if (__t__ (!__t__ ((self.pending_paragraph_nodes)))) {
/* 000095 */ 			return ;
/* 000095 */ 		}
/* 000096 */ 		var paragraph_nodes = self.pending_paragraph_nodes;
/* 000097 */ 		var paragraph_nodes = (function () {
/* 000097 */ 			var __accu0__ = self;
/* 000097 */ 			return __call__ (__accu0__.finalize_paragraph, __accu0__, paragraph_nodes);
/* 000097 */ 		}) ();
/* 000099 */ 		(function () {
/* 000099 */ 			var __accu0__ = self.blocks;
/* 000100 */ 			return __call__ (__accu0__.append, __accu0__, (function () {
/* 000100 */ 				var __accu1__ = latexnodes_nodes;
/* 000100 */ 				return __call__ (__accu1__.LatexNodeList, __accu1__, paragraph_nodes, __kwargtrans__ ({parsing_state: self.latexnodelist.parsing_state, latex_walker: self.latexnodelist.latex_walker}));
/* 000100 */ 			}) ());
/* 000100 */ 		}) ();
/* 000106 */ 		self.pending_paragraph_nodes = [];
/* 000106 */ 	});},
/* 000108 */ 	get simplify_whitespace_chars () {return __get__ (this, function (self, chars, is_head, is_tail) {
/* 000108 */ 		if (typeof is_head == 'undefined' || (is_head != null && is_head.hasOwnProperty ("__kwargtrans__"))) {;
/* 000108 */ 			var is_head = false;
/* 000108 */ 		};
/* 000108 */ 		if (typeof is_tail == 'undefined' || (is_tail != null && is_tail.hasOwnProperty ("__kwargtrans__"))) {;
/* 000108 */ 			var is_tail = false;
/* 000108 */ 		};
/* 000108 */ 		if (arguments.length) {
/* 000108 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000108 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000108 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000108 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000108 */ 					switch (__attrib0__) {
/* 000108 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000108 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000108 */ 						case 'is_head': var is_head = __allkwargs0__ [__attrib0__]; break;
/* 000108 */ 						case 'is_tail': var is_tail = __allkwargs0__ [__attrib0__]; break;
/* 000108 */ 					}
/* 000108 */ 				}
/* 000108 */ 			}
/* 000108 */ 		}
/* 000108 */ 		else {
/* 000108 */ 		}
/* 000109 */ 		var newchars = (function () {
/* 000109 */ 			var __accu0__ = self.rx_space;
/* 000109 */ 			return __call__ (__accu0__.sub, __accu0__, ' ', chars);
/* 000109 */ 		}) ();
/* 000110 */ 		if (__t__ (is_head)) {
/* 000111 */ 			var newchars = (function () {
/* 000111 */ 				var __accu0__ = newchars;
/* 000111 */ 				return __call__ (__accu0__.lstrip, __accu0__);
/* 000111 */ 			}) ();
/* 000111 */ 		}
/* 000112 */ 		if (__t__ (is_tail)) {
/* 000113 */ 			var newchars = (function () {
/* 000113 */ 				var __accu0__ = newchars;
/* 000113 */ 				return __call__ (__accu0__.rstrip, __accu0__);
/* 000113 */ 			}) ();
/* 000113 */ 		}
/* 000114 */ 		return newchars;
/* 000114 */ 	});},
/* 000116 */ 	get finalize_paragraph () {return __get__ (this, function (self, paragraph_nodes) {
/* 000116 */ 		if (arguments.length) {
/* 000116 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000116 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000116 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000116 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000116 */ 					switch (__attrib0__) {
/* 000116 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000116 */ 						case 'paragraph_nodes': var paragraph_nodes = __allkwargs0__ [__attrib0__]; break;
/* 000116 */ 					}
/* 000116 */ 				}
/* 000116 */ 			}
/* 000116 */ 		}
/* 000116 */ 		else {
/* 000116 */ 		}
/* 000117 */ 		if (__t__ (!__t__ ((paragraph_nodes)))) {
/* 000118 */ 			return paragraph_nodes;
/* 000118 */ 		}
/* 000122 */ 		var is_head = true;
/* 000123 */ 		var tail_char_node_info = null;
/* 000124 */ 		var next_node_should_strip_leading_whitespace = false;
/* 000125 */ 		var first_node = null;
/* 000126 */ 		var char_nodes = [];
/* 000127 */ 		var __iterable0__ = __call__ (enumerate, null, paragraph_nodes);
/* 000127 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000127 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000127 */ 			var j = __left0__ [0];
/* 000127 */ 			var node = __left0__ [1];
/* 000130 */ 			if (__t__ (__t__ (__eq__ (__call__ (len, null, char_nodes), 0)) && __t__ (first_node !== null) && __call__ (getattr, null, first_node, 'flm_is_block_heading', false))) {
/* 000133 */ 				var is_head = true;
/* 000133 */ 			}
/* 000135 */ 			if (__t__ (__call__ (getattr, null, node, 'flm_strip_preceding_whitespace', false))) {
/* 000136 */ 				if (__t__ (tail_char_node_info !== null)) {
/* 000137 */ 					__setitem__ (tail_char_node_info, 'is_tail', true);
/* 000137 */ 				}
/* 000137 */ 			}
/* 000139 */ 			if (__t__ ((function () {
/* 000139 */ 				var __accu0__ = node;
/* 000139 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000139 */ 			}) ())) {
/* 000140 */ 				var info = dict ({'is_head': is_head, 'is_tail': false});
/* 000141 */ 				if (__t__ (next_node_should_strip_leading_whitespace)) {
/* 000142 */ 					__setitem__ (info, 'is_head', true);
/* 000142 */ 				}
/* 000143 */ 				(function () {
/* 000143 */ 					var __accu0__ = char_nodes;
/* 000143 */ 					return __call__ (__accu0__.append, __accu0__, tuple ([node, info]));
/* 000143 */ 				}) ();
/* 000144 */ 				var is_head = false;
/* 000145 */ 				var tail_char_node_info = info;
/* 000145 */ 			}
/* 000146 */ 			else if (__t__ (!__t__ (((function () {
/* 000146 */ 				var __accu0__ = node;
/* 000146 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCommentNode);
/* 000146 */ 			}) ())))) {
/* 000147 */ 				if (__t__ (first_node === null)) {
/* 000148 */ 					var first_node = node;
/* 000148 */ 				}
/* 000149 */ 				var is_head = false;
/* 000150 */ 				var tail_char_node_info = null;
/* 000150 */ 			}
/* 000152 */ 			var next_node_should_strip_leading_whitespace = false;
/* 000153 */ 			if (__t__ (__call__ (getattr, null, node, 'flm_strip_following_whitespace', false))) {
/* 000154 */ 				var next_node_should_strip_leading_whitespace = true;
/* 000154 */ 			}
/* 000154 */ 		}
/* 000157 */ 		if (__t__ (tail_char_node_info !== null)) {
/* 000158 */ 			__setitem__ (tail_char_node_info, 'is_tail', true);
/* 000158 */ 		}
/* 000160 */ 		var __iterable0__ = char_nodes;
/* 000160 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000160 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000160 */ 			var char_node = __left0__ [0];
/* 000160 */ 			var info = __left0__ [1];
/* 000161 */ 			char_node.flm_chars_value = (function () {
/* 000161 */ 				var __accu0__ = self;
/* 000161 */ 				return __call__ (__accu0__.simplify_whitespace_chars, __accu0__, char_node.chars, __kwargtrans__ ({is_head: __getitem__ (info, 'is_head'), is_tail: __getitem__ (info, 'is_tail')}));
/* 000161 */ 			}) ();
/* 000161 */ 		}
/* 000172 */ 		return paragraph_nodes;
/* 000172 */ 	});},
/* 000174 */ 	get build_blocks () {return __get__ (this, function (self) {
/* 000174 */ 		if (arguments.length) {
/* 000174 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000174 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000174 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000174 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000174 */ 					switch (__attrib0__) {
/* 000174 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000174 */ 					}
/* 000174 */ 				}
/* 000174 */ 			}
/* 000174 */ 		}
/* 000174 */ 		else {
/* 000174 */ 		}
/* 000175 */ 		var latexnodelist = self.latexnodelist;
/* 000179 */ 		assert (__eq__ (__call__ (len, null, self.blocks), 0));
/* 000181 */ 		var __iterable0__ = latexnodelist;
/* 000181 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000181 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000182 */ 			var n_is_block_level = __call__ (getattr, null, n, 'flm_is_block_level', null);
/* 000183 */ 			var n_is_block_heading = __call__ (getattr, null, n, 'flm_is_block_heading', false);
/* 000184 */ 			if (__t__ (n_is_block_level)) {
/* 000186 */ 				(function () {
/* 000186 */ 					var __accu0__ = self;
/* 000186 */ 					return __call__ (__accu0__.flush_paragraph, __accu0__);
/* 000186 */ 				}) ();
/* 000188 */ 				if (__t__ (__call__ (getattr, null, n, 'flm_is_paragraph_break_marker', false))) {
/* 000188 */ 					continue;
/* 000188 */ 				}
/* 000193 */ 				if (__t__ (n_is_block_heading)) {
/* 000197 */ 					(function () {
/* 000197 */ 						var __accu0__ = self.pending_paragraph_nodes;
/* 000197 */ 						return __call__ (__accu0__.append, __accu0__, n);
/* 000197 */ 					}) ();
/* 000197 */ 					continue;
/* 000197 */ 				}
/* 000202 */ 				(function () {
/* 000202 */ 					var __accu0__ = self.blocks;
/* 000202 */ 					return __call__ (__accu0__.append, __accu0__, n);
/* 000202 */ 				}) ();
/* 000202 */ 				continue;
/* 000202 */ 			}
/* 000205 */ 			var paragraph_started_yet = true;
/* 000206 */ 			if (__t__ (!__t__ ((self.pending_paragraph_nodes)))) {
/* 000207 */ 				var paragraph_started_yet = false;
/* 000207 */ 			}
/* 000208 */ 			if (__t__ (__eq__ (__call__ (len, null, self.pending_paragraph_nodes), 1))) {
/* 000209 */ 				if (__t__ (__call__ (getattr, null, __getitem__ (self.pending_paragraph_nodes, 0), 'flm_is_block_heading', false))) {
/* 000211 */ 					var paragraph_started_yet = false;
/* 000211 */ 				}
/* 000211 */ 			}
/* 000214 */ 			if (__t__ (__t__ (!__t__ ((paragraph_started_yet))) && __t__ ((function () {
/* 000214 */ 				var __accu0__ = n;
/* 000214 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000215 */ 			}) ()) && (function () {
/* 000215 */ 				var __accu0__ = self.rx_only_space;
/* 000215 */ 				return __call__ (__accu0__.match, __accu0__, n.chars);
/* 000215 */ 			}) ())) {
/* 000215 */ 				continue;
/* 000215 */ 			}
/* 000221 */ 			(function () {
/* 000221 */ 				var __accu0__ = self.pending_paragraph_nodes;
/* 000221 */ 				return __call__ (__accu0__.append, __accu0__, n);
/* 000221 */ 			}) ();
/* 000221 */ 		}
/* 000224 */ 		(function () {
/* 000224 */ 			var __accu0__ = self;
/* 000224 */ 			return __call__ (__accu0__.flush_paragraph, __accu0__);
/* 000224 */ 		}) ();
/* 000226 */ 		return self.blocks;
/* 000226 */ 	});}
/* 000226 */ });
/* 000234 */ export var NodeListFinalizer =  __class__ ('NodeListFinalizer', [object], {
/* 000234 */ 	__module__: __name__,
/* 000239 */ 	get finalize_nodelist () {return __get__ (this, function (self, latexnodelist) {
/* 000239 */ 		if (arguments.length) {
/* 000239 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000239 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000239 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000239 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000239 */ 					switch (__attrib0__) {
/* 000239 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000239 */ 						case 'latexnodelist': var latexnodelist = __allkwargs0__ [__attrib0__]; break;
/* 000239 */ 					}
/* 000239 */ 				}
/* 000239 */ 			}
/* 000239 */ 		}
/* 000239 */ 		else {
/* 000239 */ 		}
/* 000253 */ 		var is_block_level = latexnodelist.parsing_state.is_block_level;
/* 000254 */ 		if (__t__ (is_block_level === null)) {
/* 000256 */ 			var is_block_level = (function () {
/* 000256 */ 				var __accu0__ = self;
/* 000256 */ 				return __call__ (__accu0__.infer_is_block_level_nodelist, __accu0__, latexnodelist);
/* 000256 */ 			}) ();
/* 000256 */ 		}
/* 000258 */ 		latexnodelist.flm_is_block_level = is_block_level;
/* 000261 */ 		if (__t__ (!__t__ ((is_block_level)))) {
/* 000263 */ 			var __iterable0__ = latexnodelist;
/* 000263 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000263 */ 				var n = __getitem__ (__iterable0__, __index0__);
/* 000264 */ 				if (__t__ (__call__ (getattr, null, n, 'flm_is_block_level', null))) {
/* 000268 */ 					var __except0__ = __call__ (LatexWalkerParseError, null, __kwargtrans__ ({msg: 'Content is not allowed in inline text (not block level): ‘{}’'.format ((function () {
/* 000268 */ 						var __accu0__ = n;
/* 000268 */ 						return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000268 */ 					}) ()), pos: n.pos}));
/* 000268 */ 					__except0__.__cause__ = null;
/* 000268 */ 					throw __except0__;
/* 000268 */ 				}
/* 000272 */ 				if (__t__ ((function () {
/* 000272 */ 					var __accu0__ = n;
/* 000272 */ 					return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000272 */ 				}) ())) {
/* 000273 */ 					n.flm_chars_value = (function () {
/* 000273 */ 						var __accu0__ = self;
/* 000273 */ 						return __call__ (__accu0__.simplify_whitespace_chars_inline, __accu0__, n.chars);
/* 000273 */ 					}) ();
/* 000273 */ 				}
/* 000273 */ 			}
/* 000278 */ 			return latexnodelist;
/* 000278 */ 		}
/* 000282 */ 		if (__t__ (is_block_level)) {
/* 000283 */ 			var blocks_builder = (function () {
/* 000283 */ 				var __accu0__ = self;
/* 000283 */ 				return __call__ (__accu0__.make_blocks_builder, __accu0__, latexnodelist);
/* 000283 */ 			}) ();
/* 000284 */ 			var flm_blocks = (function () {
/* 000284 */ 				var __accu0__ = blocks_builder;
/* 000284 */ 				return __call__ (__accu0__.build_blocks, __accu0__);
/* 000284 */ 			}) ();
/* 000285 */ 			latexnodelist.flm_blocks = flm_blocks;
/* 000285 */ 		}
/* 000287 */ 		return latexnodelist;
/* 000287 */ 	});},
/* 000289 */ 	get infer_is_block_level_nodelist () {return __get__ (this, function (self, latexnodelist) {
/* 000289 */ 		if (arguments.length) {
/* 000289 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000289 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000289 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000289 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000289 */ 					switch (__attrib0__) {
/* 000289 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000289 */ 						case 'latexnodelist': var latexnodelist = __allkwargs0__ [__attrib0__]; break;
/* 000289 */ 					}
/* 000289 */ 				}
/* 000289 */ 			}
/* 000289 */ 		}
/* 000289 */ 		else {
/* 000289 */ 		}
/* 000290 */ 		var __iterable0__ = latexnodelist;
/* 000290 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000290 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000291 */ 			var n_is_block_level = __call__ (getattr, null, n, 'flm_is_block_level', null);
/* 000292 */ 			if (__t__ (n_is_block_level)) {
/* 000293 */ 				return true;
/* 000293 */ 			}
/* 000293 */ 		}
/* 000294 */ 		return false;
/* 000294 */ 	});},
/* 000296 */ 	get simplify_whitespace_chars_inline () {return __get__ (this, function (self, chars) {
/* 000296 */ 		if (arguments.length) {
/* 000296 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000296 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000296 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000296 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000296 */ 					switch (__attrib0__) {
/* 000296 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000296 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000296 */ 					}
/* 000296 */ 				}
/* 000296 */ 			}
/* 000296 */ 		}
/* 000296 */ 		else {
/* 000296 */ 		}
/* 000297 */ 		return (function () {
/* 000297 */ 			var __accu0__ = self.rx_inline_space;
/* 000297 */ 			return __call__ (__accu0__.sub, __accu0__, ' ', chars);
/* 000297 */ 		}) ();
/* 000297 */ 	});},
/* 000299 */ 	make_blocks_builder: BlocksBuilder,
/* 000301 */ 	rx_inline_space: BlocksBuilder.rx_space
/* 000301 */ });
/* 000310 */ export var FLMLatexWalker =  __class__ ('FLMLatexWalker', [latexwalker.LatexWalker], {
/* 000310 */ 	__module__: __name__,
/* 000323 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000323 */ 		var parsing_state_event_handler = null;
/* 000323 */ 		var standalone_mode = false;
/* 000323 */ 		var resource_info = null;
/* 000323 */ 		var parsing_mode = null;
/* 000323 */ 		var what = null;
/* 000323 */ 		var kwargs = dict ();
/* 000323 */ 		if (arguments.length) {
/* 000323 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000323 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000323 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000323 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000323 */ 					switch (__attrib0__) {
/* 000323 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000323 */ 						case 'flm_text': var flm_text = __allkwargs0__ [__attrib0__]; break;
/* 000323 */ 						case 'default_parsing_state': var default_parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000323 */ 						case 'flm_environment': var flm_environment = __allkwargs0__ [__attrib0__]; break;
/* 000323 */ 						case 'parsing_state_event_handler': var parsing_state_event_handler = __allkwargs0__ [__attrib0__]; break;
/* 000323 */ 						case 'standalone_mode': var standalone_mode = __allkwargs0__ [__attrib0__]; break;
/* 000323 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000323 */ 						case 'parsing_mode': var parsing_mode = __allkwargs0__ [__attrib0__]; break;
/* 000323 */ 						case 'what': var what = __allkwargs0__ [__attrib0__]; break;
/* 000323 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000323 */ 					}
/* 000323 */ 				}
/* 000323 */ 				delete kwargs.__kwargtrans__;
/* 000323 */ 			}
/* 000323 */ 		}
/* 000323 */ 		else {
/* 000323 */ 		}
/* 000335 */ 		__call__ (__call__ (__super__, null, FLMLatexWalker, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({s: flm_text, default_parsing_state: default_parsing_state}, kwargs)));
/* 000341 */ 		self.flm_environment = flm_environment;
/* 000343 */ 		self.standalone_mode = standalone_mode;
/* 000347 */ 		self.resource_info = resource_info;
/* 000349 */ 		self.what = what;
/* 000352 */ 		self.parsing_mode = parsing_mode;
/* 000354 */ 		self._parsing_state_event_handler = parsing_state_event_handler;
/* 000354 */ 	});},
/* 000356 */ 	get parsing_state_event_handler () {return __get__ (this, function (self) {
/* 000356 */ 		if (arguments.length) {
/* 000356 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000356 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000356 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000356 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000356 */ 					switch (__attrib0__) {
/* 000356 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000356 */ 					}
/* 000356 */ 				}
/* 000356 */ 			}
/* 000356 */ 		}
/* 000356 */ 		else {
/* 000356 */ 		}
/* 000357 */ 		if (__t__ (self._parsing_state_event_handler)) {
/* 000358 */ 			return self._parsing_state_event_handler;
/* 000358 */ 		}
/* 000359 */ 		return __call__ (__call__ (__super__, null, FLMLatexWalker, 'parsing_state_event_handler'), null, self);
/* 000359 */ 	});},
/* 000361 */ 	get make_nodelist () {return __get__ (this, function (self, nodelist, parsing_state) {
/* 000361 */ 		var kwargs = dict ();
/* 000361 */ 		if (arguments.length) {
/* 000361 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000361 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000361 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000361 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000361 */ 					switch (__attrib0__) {
/* 000361 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000361 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000361 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000361 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000361 */ 					}
/* 000361 */ 				}
/* 000361 */ 				delete kwargs.__kwargtrans__;
/* 000361 */ 			}
/* 000361 */ 		}
/* 000361 */ 		else {
/* 000361 */ 		}
/* 000362 */ 		var nl = __call__ (__call__ (__super__, null, FLMLatexWalker, 'make_nodelist'), null, self, __kwargtrans__ (__mergekwargtrans__ ({nodelist: nodelist, parsing_state: parsing_state}, kwargs)));
/* 000364 */ 		var nl = (function () {
/* 000364 */ 			var __accu0__ = (function () {
/* 000364 */ 				var __accu1__ = self.flm_environment;
/* 000364 */ 				return __call__ (__accu1__.node_list_finalizer, __accu1__);
/* 000364 */ 			}) ();
/* 000364 */ 			return __call__ (__accu0__.finalize_nodelist, __accu0__, nl);
/* 000364 */ 		}) ();
/* 000365 */ 		return nl;
/* 000365 */ 	});},
/* 000367 */ 	get make_node () {return __get__ (this, function (self, node_class) {
/* 000367 */ 		var kwargs = dict ();
/* 000367 */ 		if (arguments.length) {
/* 000367 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000367 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000367 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000367 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000367 */ 					switch (__attrib0__) {
/* 000367 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000367 */ 						case 'node_class': var node_class = __allkwargs0__ [__attrib0__]; break;
/* 000367 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000367 */ 					}
/* 000367 */ 				}
/* 000367 */ 				delete kwargs.__kwargtrans__;
/* 000367 */ 			}
/* 000367 */ 		}
/* 000367 */ 		else {
/* 000367 */ 		}
/* 000368 */ 		var node = __call__ (__call__ (__super__, null, FLMLatexWalker, 'make_node'), null, self, node_class, __kwargtrans__ (kwargs));
/* 000370 */ 		node.node_id = __call__ (fn_unique_object_id, null, node);
/* 000371 */ 		return node;
/* 000371 */ 	});},
/* 000375 */ 	get filter_whitespace_comments_nodes () {return __get__ (this, function (self, nodelist) {
/* 000375 */ 		if (arguments.length) {
/* 000375 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000375 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000375 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000375 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000375 */ 					switch (__attrib0__) {
/* 000375 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000375 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000375 */ 					}
/* 000375 */ 				}
/* 000375 */ 			}
/* 000375 */ 		}
/* 000375 */ 		else {
/* 000375 */ 		}
/* 000380 */ 		return (function () {
/* 000380 */ 			var __accu0__ = nodelist;
/* 000380 */ 			return __call__ (__accu0__.filter, __accu0__, __kwargtrans__ ({node_predicate_fn: self._filter_whitespace_comments_nodes_predicate, skip_none: true, skip_comments: true, skip_whitespace_char_nodes: true}));
/* 000380 */ 		}) ();
/* 000380 */ 	});},
/* 000387 */ 	get _filter_whitespace_comments_nodes_predicate () {return __get__ (this, function (self, node) {
/* 000387 */ 		if (arguments.length) {
/* 000387 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000387 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000387 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000387 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000387 */ 					switch (__attrib0__) {
/* 000387 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000387 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000387 */ 					}
/* 000387 */ 				}
/* 000387 */ 			}
/* 000387 */ 		}
/* 000387 */ 		else {
/* 000387 */ 		}
/* 000388 */ 		if (__t__ (__call__ (getattr, null, node, 'flm_is_paragraph_break_marker', false))) {
/* 000389 */ 			return false;
/* 000389 */ 		}
/* 000390 */ 		return true;
/* 000390 */ 	});}
/* 000390 */ });
/* 000398 */ export var features_ensure_dependencies_are_met = function (features) {
/* 000398 */ 	if (arguments.length) {
/* 000398 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000398 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000398 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000398 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000398 */ 				switch (__attrib0__) {
/* 000398 */ 					case 'features': var features = __allkwargs0__ [__attrib0__]; break;
/* 000398 */ 				}
/* 000398 */ 			}
/* 000398 */ 		}
/* 000398 */ 	}
/* 000398 */ 	else {
/* 000398 */ 	}
/* 000400 */ 	var feature_names = __call__ (set, null, (function () {
/* 000400 */ 		var __accu0__ = [];
/* 000400 */ 		var __iterable0__ = features;
/* 000400 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000400 */ 			var f = __getitem__ (__iterable0__, __index0__);
/* 000400 */ 			(function () {
/* 000400 */ 				var __accu1__ = __accu0__;
/* 000400 */ 				return __call__ (__accu1__.append, __accu1__, f.feature_name);
/* 000400 */ 			}) ();
/* 000400 */ 		}
/* 000400 */ 		return __accu0__;
/* 000400 */ 	}) ());
/* 000402 */ 	var __iterable0__ = features;
/* 000402 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000402 */ 		var feature = __getitem__ (__iterable0__, __index0__);
/* 000403 */ 		if (__t__ (feature.feature_dependencies === null)) {
/* 000403 */ 			continue;
/* 000403 */ 		}
/* 000405 */ 		var __iterable1__ = feature.feature_dependencies;
/* 000405 */ 		for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000405 */ 			var fdepname = __getitem__ (__iterable1__, __index1__);
/* 000406 */ 			if (__t__ (!__in__ (fdepname, feature_names))) {
/* 000408 */ 				var __except0__ = __call__ (ValueError, null, 'Feature ‘{}’ ({}) has unmet dependency ‘{}’'.format (feature.feature_name, __call__ (repr, null, feature), fdepname));
/* 000408 */ 				__except0__.__cause__ = null;
/* 000408 */ 				throw __except0__;
/* 000408 */ 			}
/* 000408 */ 		}
/* 000408 */ 	}
/* 000408 */ };
/* 000414 */ export var features_sorted_by_dependencies = function (features) {
/* 000414 */ 	if (arguments.length) {
/* 000414 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000414 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000414 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000414 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000414 */ 				switch (__attrib0__) {
/* 000414 */ 					case 'features': var features = __allkwargs0__ [__attrib0__]; break;
/* 000414 */ 				}
/* 000414 */ 			}
/* 000414 */ 		}
/* 000414 */ 	}
/* 000414 */ 	else {
/* 000414 */ 	}
/* 000431 */ 	var features_to_sort = __call__ (list, null, features);
/* 000435 */ 	var features_by_name = dict ({});
/* 000436 */ 	var __iterable0__ = features_to_sort;
/* 000436 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000436 */ 		var feature = __getitem__ (__iterable0__, __index0__);
/* 000437 */ 		if (__t__ (__in__ (feature.feature_name, features_by_name))) {
/* 000439 */ 			var __except0__ = __call__ (ValueError, null, 'Duplicate feature detected: feature {} has the same name (‘{}’) as the as already-included feature {}'.format (__call__ (repr, null, feature), feature.feature_name, __getitem__ (features_by_name, feature.feature_name)));
/* 000439 */ 			__except0__.__cause__ = null;
/* 000439 */ 			throw __except0__;
/* 000439 */ 		}
/* 000443 */ 		__setitem__ (features_by_name, feature.feature_name, feature);
/* 000443 */ 	}
/* 000448 */ 	(function () {
/* 000448 */ 		var __accu0__ = features_to_sort;
/* 000448 */ 		return __call__ (__accu0__.py_sort, __accu0__, __kwargtrans__ ({key: (function __lambda__ (f) {
/* 000448 */ 			if (arguments.length) {
/* 000448 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000448 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000448 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000448 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000448 */ 						switch (__attrib0__) {
/* 000448 */ 							case 'f': var f = __allkwargs0__ [__attrib0__]; break;
/* 000448 */ 						}
/* 000448 */ 					}
/* 000448 */ 				}
/* 000448 */ 			}
/* 000448 */ 			else {
/* 000448 */ 			}
/* 000448 */ 			return f.feature_name;
/* 000448 */ 		})}));
/* 000448 */ 	}) ();
/* 000451 */ 	__call__ (features_ensure_dependencies_are_met, null, features_to_sort);
/* 000453 */ 	var get_feature_dependencies = function (f) {
/* 000453 */ 		if (arguments.length) {
/* 000453 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000453 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000453 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000453 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000453 */ 					switch (__attrib0__) {
/* 000453 */ 						case 'f': var f = __allkwargs0__ [__attrib0__]; break;
/* 000453 */ 					}
/* 000453 */ 				}
/* 000453 */ 			}
/* 000453 */ 		}
/* 000453 */ 		else {
/* 000453 */ 		}
/* 000454 */ 		var deps = __call__ (set, null);
/* 000455 */ 		if (__t__ (f.feature_dependencies !== null)) {
/* 000456 */ 			var __iterable0__ = f.feature_dependencies;
/* 000456 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000456 */ 				var fdepname = __getitem__ (__iterable0__, __index0__);
/* 000457 */ 				(function () {
/* 000457 */ 					var __accu0__ = deps;
/* 000457 */ 					return __call__ (__accu0__.add, __accu0__, fdepname);
/* 000457 */ 				}) ();
/* 000457 */ 			}
/* 000457 */ 		}
/* 000458 */ 		if (__t__ (f.feature_optional_dependencies !== null)) {
/* 000459 */ 			var __iterable0__ = f.feature_optional_dependencies;
/* 000459 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000459 */ 				var foptdepname = __getitem__ (__iterable0__, __index0__);
/* 000460 */ 				if (__t__ (__in__ (foptdepname, features_by_name))) {
/* 000461 */ 					(function () {
/* 000461 */ 						var __accu0__ = deps;
/* 000461 */ 						return __call__ (__accu0__.add, __accu0__, foptdepname);
/* 000461 */ 					}) ();
/* 000461 */ 				}
/* 000461 */ 			}
/* 000461 */ 		}
/* 000462 */ 		return __call__ (sorted, null, __call__ (list, null, deps));
/* 000462 */ 	};
/* 000470 */ 	var all_feature_dependencies = __call__ (dict, null, (function () {
/* 000470 */ 		var __accu0__ = [];
/* 000472 */ 		var __iterable0__ = (function () {
/* 000472 */ 			var __accu1__ = features_by_name;
/* 000472 */ 			return __call__ (__accu1__.py_items, __accu1__);
/* 000472 */ 		}) ();
/* 000472 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000472 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000472 */ 			var fname = __left0__ [0];
/* 000472 */ 			var f = __left0__ [1];
/* 000472 */ 			(function () {
/* 000472 */ 				var __accu1__ = __accu0__;
/* 000471 */ 				return __call__ (__accu1__.append, __accu1__, tuple ([fname, __call__ (get_feature_dependencies, null, f)]));
/* 000471 */ 			}) ();
/* 000471 */ 		}
/* 000471 */ 		return __accu0__;
/* 000471 */ 	}) ());
/* 000475 */ 	var get_feature_dependents = function (fparentname, all_feature_dependencies) {
/* 000475 */ 		if (arguments.length) {
/* 000475 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000475 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000475 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000475 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000475 */ 					switch (__attrib0__) {
/* 000475 */ 						case 'fparentname': var fparentname = __allkwargs0__ [__attrib0__]; break;
/* 000475 */ 						case 'all_feature_dependencies': var all_feature_dependencies = __allkwargs0__ [__attrib0__]; break;
/* 000475 */ 					}
/* 000475 */ 				}
/* 000475 */ 			}
/* 000475 */ 		}
/* 000475 */ 		else {
/* 000475 */ 		}
/* 000476 */ 		var dependents = __call__ (set, null);
/* 000477 */ 		var __iterable0__ = (function () {
/* 000477 */ 			var __accu0__ = all_feature_dependencies;
/* 000477 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000477 */ 		}) ();
/* 000477 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000477 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000477 */ 			var fname = __left0__ [0];
/* 000477 */ 			var fdepnames = __left0__ [1];
/* 000478 */ 			var __iterable1__ = fdepnames;
/* 000478 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000478 */ 				var fdepname = __getitem__ (__iterable1__, __index1__);
/* 000479 */ 				if (__t__ (__eq__ (fdepname, fparentname))) {
/* 000480 */ 					(function () {
/* 000480 */ 						var __accu0__ = dependents;
/* 000480 */ 						return __call__ (__accu0__.add, __accu0__, fname);
/* 000480 */ 					}) ();
/* 000480 */ 				}
/* 000480 */ 			}
/* 000480 */ 		}
/* 000481 */ 		return __call__ (sorted, null, __call__ (list, null, dependents));
/* 000481 */ 	};
/* 000487 */ 	var sorted_features = [];
/* 000488 */ 	var root_features = (function () {
/* 000488 */ 		var __accu0__ = [];
/* 000491 */ 		var __iterable0__ = __call__ (py_reversed, null, features_to_sort);
/* 000491 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000491 */ 			var f = __getitem__ (__iterable0__, __index0__);
/* 000492 */ 			if (__t__ (__eq__ (__call__ (len, null, __getitem__ (all_feature_dependencies, f.feature_name)), 0))) {
/* 000492 */ 				(function () {
/* 000492 */ 					var __accu1__ = __accu0__;
/* 000492 */ 					return __call__ (__accu1__.append, __accu1__, f);
/* 000492 */ 				}) ();
/* 000492 */ 			}
/* 000492 */ 		}
/* 000492 */ 		return __accu0__;
/* 000492 */ 	}) ();
/* 000496 */ 	while (__t__ (__gt__ (__call__ (len, null, root_features), 0))) {
/* 000497 */ 		var n = (function () {
/* 000497 */ 			var __accu0__ = root_features;
/* 000497 */ 			return __call__ (__accu0__.py_pop, __accu0__);
/* 000497 */ 		}) ();
/* 000498 */ 		(function () {
/* 000498 */ 			var __accu0__ = sorted_features;
/* 000498 */ 			return __call__ (__accu0__.append, __accu0__, n);
/* 000498 */ 		}) ();
/* 000500 */ 		var n_name = n.feature_name;
/* 000502 */ 		var iter_dependents = __call__ (get_feature_dependents, null, n_name, all_feature_dependencies);
/* 000503 */ 		var __iterable0__ = iter_dependents;
/* 000503 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000503 */ 			var fdependentname = __getitem__ (__iterable0__, __index0__);
/* 000506 */ 			(function () {
/* 000506 */ 				var __accu0__ = __getitem__ (all_feature_dependencies, fdependentname);
/* 000506 */ 				return __call__ (__accu0__.remove, __accu0__, n_name);
/* 000506 */ 			}) ();
/* 000510 */ 			if (__t__ (__eq__ (__call__ (len, null, __getitem__ (all_feature_dependencies, fdependentname)), 0))) {
/* 000512 */ 				(function () {
/* 000512 */ 					var __accu0__ = root_features;
/* 000512 */ 					return __call__ (__accu0__.insert, __accu0__, 0, __getitem__ (features_by_name, fdependentname));
/* 000512 */ 				}) ();
/* 000512 */ 			}
/* 000512 */ 		}
/* 000512 */ 	}
/* 000515 */ 	var problematic_features = [];
/* 000516 */ 	var __iterable0__ = (function () {
/* 000516 */ 		var __accu0__ = all_feature_dependencies;
/* 000516 */ 		return __call__ (__accu0__.py_items, __accu0__);
/* 000516 */ 	}) ();
/* 000516 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000516 */ 		var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000516 */ 		var fsrcname = __left0__ [0];
/* 000516 */ 		var featuredeps = __left0__ [1];
/* 000517 */ 		if (__t__ (__gt__ (__call__ (len, null, featuredeps), 0))) {
/* 000518 */ 			(function () {
/* 000518 */ 				var __accu0__ = problematic_features;
/* 000519 */ 				return __call__ (__accu0__.append, __accu0__, __add__ ('‘{}’ → '.format (fsrcname), (function () {
/* 000519 */ 					var __accu1__ = ', ';
/* 000519 */ 					return __call__ (__accu1__.join, __accu1__, (function () {
/* 000519 */ 						var __accu2__ = [];
/* 000519 */ 						var __iterable1__ = featuredeps;
/* 000519 */ 						for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000519 */ 							var fdepname = __getitem__ (__iterable1__, __index1__);
/* 000519 */ 							(function () {
/* 000519 */ 								var __accu3__ = __accu2__;
/* 000519 */ 								return __call__ (__accu3__.append, __accu3__, '‘{}’'.format (fdepname));
/* 000519 */ 							}) ();
/* 000519 */ 						}
/* 000519 */ 						return __accu2__;
/* 000519 */ 					}) ());
/* 000519 */ 				}) ()));
/* 000519 */ 			}) ();
/* 000519 */ 		}
/* 000519 */ 	}
/* 000521 */ 	if (__t__ (__gt__ (__call__ (len, null, problematic_features), 0))) {
/* 000524 */ 		var __except0__ = __call__ (ValueError, null, __add__ ('The feature dependency graph has a cycle!  Problematic dependencies:'.format (), (function () {
/* 000524 */ 			var __accu0__ = '; ';
/* 000524 */ 			return __call__ (__accu0__.join, __accu0__, problematic_features);
/* 000524 */ 		}) ()));
/* 000524 */ 		__except0__.__cause__ = null;
/* 000524 */ 		throw __except0__;
/* 000524 */ 	}
/* 000527 */ 	if (__t__ (__ne__ (__call__ (len, null, sorted_features), __call__ (len, null, features_to_sort)))) {
/* 000528 */ 		var __except0__ = __call__ (RuntimeError, null, "Internal error, we didn't get all the features right when ordering them!");
/* 000528 */ 		__except0__.__cause__ = null;
/* 000528 */ 		throw __except0__;
/* 000528 */ 	}
/* 000532 */ 	return tuple ([sorted_features, features_by_name]);
/* 000532 */ };
/* 000561 */ export var FLMEnvironment =  __class__ ('FLMEnvironment', [object], {
/* 000561 */ 	__module__: __name__,
/* 000580 */ 	get __init__ () {return __get__ (this, function (self, features, parsing_state, latex_context) {
/* 000580 */ 		var tolerant_parsing = false;
/* 000580 */ 		var parsing_mode_deltas = null;
/* 000580 */ 		if (arguments.length) {
/* 000580 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000580 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000580 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000580 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000580 */ 					switch (__attrib0__) {
/* 000580 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000580 */ 						case 'features': var features = __allkwargs0__ [__attrib0__]; break;
/* 000580 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000580 */ 						case 'latex_context': var latex_context = __allkwargs0__ [__attrib0__]; break;
/* 000580 */ 						case 'tolerant_parsing': var tolerant_parsing = __allkwargs0__ [__attrib0__]; break;
/* 000580 */ 						case 'parsing_mode_deltas': var parsing_mode_deltas = __allkwargs0__ [__attrib0__]; break;
/* 000580 */ 					}
/* 000580 */ 				}
/* 000580 */ 			}
/* 000580 */ 		}
/* 000580 */ 		else {
/* 000580 */ 		}
/* 000589 */ 		__call__ (__call__ (__super__, null, FLMEnvironment, '__init__'), null, self);
/* 000591 */ 		// pass;
/* 000595 */ 		self.latex_context = latex_context;
/* 000596 */ 		self.parsing_state = parsing_state;
/* 000598 */ 		self.parsing_mode_deltas = (__t__ (parsing_mode_deltas) ? __call__ (dict, null, parsing_mode_deltas) : dict ({}));
/* 000600 */ 		var __left0__ = __call__ (features_sorted_by_dependencies, null, features);
/* 000600 */ 		self.features = __left0__ [0];
/* 000600 */ 		self.features_by_name = __left0__ [1];
/* 000602 */ 		// pass;
/* 000606 */ 		self.tolerant_parsing = tolerant_parsing;
/* 000608 */ 		self._node_list_finalizer = __call__ (NodeListFinalizer, null);
/* 000610 */ 		if (__t__ (self.parsing_state.latex_context === null)) {
/* 000613 */ 			var __iterable0__ = self.features;
/* 000613 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000613 */ 				var f = __getitem__ (__iterable0__, __index0__);
/* 000614 */ 				var moredefs = (function () {
/* 000614 */ 					var __accu0__ = f;
/* 000614 */ 					return __call__ (__accu0__.add_latex_context_definitions, __accu0__);
/* 000614 */ 				}) ();
/* 000615 */ 				// pass;
/* 000618 */ 				if (__t__ (moredefs !== null)) {
/* 000619 */ 					var moredefs = __call__ (dict, null, moredefs);
/* 000620 */ 					if (__t__ (__call__ (len, null, moredefs))) {
/* 000621 */ 						// pass;
/* 000624 */ 						(function () {
/* 000624 */ 							var __accu0__ = moredefs;
/* 000624 */ 							return __call__ (__accu0__.py_update, __accu0__, __call__ (dict, null, __kwargtrans__ ({prepend: true})));
/* 000624 */ 						}) ();
/* 000625 */ 						(function () {
/* 000625 */ 							var __accu0__ = self.latex_context;
/* 000625 */ 							return __call__ (__accu0__.add_context_category, __accu0__, 'feature--{}'.format (f.feature_name), __kwargtrans__ (moredefs));
/* 000625 */ 						}) ();
/* 000625 */ 					}
/* 000625 */ 				}
/* 000625 */ 			}
/* 000631 */ 			(function () {
/* 000631 */ 				var __accu0__ = self.latex_context;
/* 000631 */ 				return __call__ (__accu0__.freeze, __accu0__);
/* 000631 */ 			}) ();
/* 000634 */ 			self.parsing_state.latex_context = self.latex_context;
/* 000634 */ 		}
/* 000636 */ 		else if (__t__ (self.latex_context !== null)) {
/* 000639 */ 			var __except0__ = __call__ (RuntimeError, null, 'The specified `parsing_state` instance already has a latex_context set');
/* 000639 */ 			__except0__.__cause__ = null;
/* 000639 */ 			throw __except0__;
/* 000639 */ 		}
/* 000639 */ 	});},
/* 000644 */ 	get feature () {return __get__ (this, function (self, feature_name) {
/* 000644 */ 		if (arguments.length) {
/* 000644 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000644 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000644 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000644 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000644 */ 					switch (__attrib0__) {
/* 000644 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000644 */ 						case 'feature_name': var feature_name = __allkwargs0__ [__attrib0__]; break;
/* 000644 */ 					}
/* 000644 */ 				}
/* 000644 */ 			}
/* 000644 */ 		}
/* 000644 */ 		else {
/* 000644 */ 		}
/* 000645 */ 		return __getitem__ (self.features_by_name, feature_name);
/* 000645 */ 	});},
/* 000648 */ 	parsing_state_event_handler: null,
/* 000655 */ 	get make_latex_walker () {return __get__ (this, function (self, flm_text) {
/* 000655 */ 		var parsing_mode = null;
/* 000655 */ 		var resource_info = null;
/* 000655 */ 		var tolerant_parsing = null;
/* 000655 */ 		var what = null;
/* 000655 */ 		var input_lineno_colno_offsets = null;
/* 000655 */ 		if (arguments.length) {
/* 000655 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000655 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000655 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000655 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000655 */ 					switch (__attrib0__) {
/* 000655 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000655 */ 						case 'flm_text': var flm_text = __allkwargs0__ [__attrib0__]; break;
/* 000655 */ 						case 'standalone_mode': var standalone_mode = __allkwargs0__ [__attrib0__]; break;
/* 000655 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000655 */ 						case 'parsing_mode': var parsing_mode = __allkwargs0__ [__attrib0__]; break;
/* 000655 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000655 */ 						case 'tolerant_parsing': var tolerant_parsing = __allkwargs0__ [__attrib0__]; break;
/* 000655 */ 						case 'what': var what = __allkwargs0__ [__attrib0__]; break;
/* 000655 */ 						case 'input_lineno_colno_offsets': var input_lineno_colno_offsets = __allkwargs0__ [__attrib0__]; break;
/* 000655 */ 					}
/* 000655 */ 				}
/* 000655 */ 			}
/* 000655 */ 		}
/* 000655 */ 		else {
/* 000655 */ 		}
/* 000668 */ 		var default_parsing_state = (function () {
/* 000668 */ 			var __accu0__ = self;
/* 000668 */ 			return __call__ (__accu0__.make_parsing_state, __accu0__, __kwargtrans__ ({is_block_level: is_block_level, parsing_mode: parsing_mode}));
/* 000668 */ 		}) ();
/* 000673 */ 		if (__t__ (tolerant_parsing === null)) {
/* 000674 */ 			var tolerant_parsing = self.tolerant_parsing;
/* 000674 */ 		}
/* 000676 */ 		if (__t__ (input_lineno_colno_offsets === null)) {
/* 000677 */ 			var input_lineno_colno_offsets = dict ({});
/* 000677 */ 		}
/* 000690 */ 		var latex_walker = __call__ (FLMLatexWalker, null, __kwargtrans__ ({flm_text: flm_text, default_parsing_state: default_parsing_state, tolerant_parsing: tolerant_parsing, flm_environment: self, standalone_mode: standalone_mode, resource_info: resource_info, what: what, parsing_state_event_handler: self.parsing_state_event_handler, line_number_offset: (function () {
/* 000690 */ 			var __accu0__ = input_lineno_colno_offsets;
/* 000690 */ 			return __call__ (__accu0__.py_get, __accu0__, 'line_number_offset', null);
/* 000692 */ 		}) (), first_line_column_offset: (function () {
/* 000692 */ 			var __accu0__ = input_lineno_colno_offsets;
/* 000692 */ 			return __call__ (__accu0__.py_get, __accu0__, 'first_line_column_offset', null);
/* 000693 */ 		}) (), column_offset: (function () {
/* 000693 */ 			var __accu0__ = input_lineno_colno_offsets;
/* 000693 */ 			return __call__ (__accu0__.py_get, __accu0__, 'column_offset', null);
/* 000693 */ 		}) ()}));
/* 000696 */ 		return latex_walker;
/* 000696 */ 	});},
/* 000698 */ 	get make_parsing_state () {return __get__ (this, function (self, is_block_level, parsing_mode) {
/* 000698 */ 		if (typeof parsing_mode == 'undefined' || (parsing_mode != null && parsing_mode.hasOwnProperty ("__kwargtrans__"))) {;
/* 000698 */ 			var parsing_mode = null;
/* 000698 */ 		};
/* 000698 */ 		if (arguments.length) {
/* 000698 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000698 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000698 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000698 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000698 */ 					switch (__attrib0__) {
/* 000698 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000698 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000698 */ 						case 'parsing_mode': var parsing_mode = __allkwargs0__ [__attrib0__]; break;
/* 000698 */ 					}
/* 000698 */ 				}
/* 000698 */ 			}
/* 000698 */ 		}
/* 000698 */ 		else {
/* 000698 */ 		}
/* 000702 */ 		var default_parsing_state = self.parsing_state;
/* 000704 */ 		if (__t__ (parsing_mode !== null)) {
/* 000705 */ 			try {
/* 000706 */ 				var parsing_state_delta = __getitem__ (self.parsing_mode_deltas, parsing_mode);
/* 000706 */ 			}
/* 000706 */ 			catch (__except0__) {
/* 000706 */ 				if (isinstance (__except0__, KeyError)) {
/* 000706 */ 					var e = __except0__;
/* 000708 */ 					var __except1__ = __call__ (ValueError, null, 'Invalid parsing_mode ‘{}’'.format (parsing_mode));
/* 000708 */ 					__except1__.__cause__ = null;
/* 000708 */ 					throw __except1__;
/* 000708 */ 				}
/* 000708 */ 				else {
/* 000708 */ 					throw __except0__;
/* 000708 */ 				}
/* 000708 */ 			}
/* 000710 */ 			if (__t__ (parsing_state_delta !== null)) {
/* 000711 */ 				var default_parsing_state = (function () {
/* 000711 */ 					var __accu0__ = parsing_state_delta;
/* 000711 */ 					return __call__ (__accu0__.get_updated_parsing_state, __accu0__, default_parsing_state, __kwargtrans__ ({latex_walker: null}));
/* 000711 */ 				}) ();
/* 000711 */ 			}
/* 000711 */ 		}
/* 000716 */ 		var kwargs = dict ({});
/* 000717 */ 		if (__t__ (is_block_level !== null)) {
/* 000718 */ 			__setitem__ (kwargs, 'is_block_level', is_block_level);
/* 000718 */ 		}
/* 000720 */ 		return (function () {
/* 000720 */ 			var __accu0__ = default_parsing_state;
/* 000720 */ 			return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ (kwargs));
/* 000720 */ 		}) ();
/* 000720 */ 	});},
/* 000723 */ 	get make_fragment () {return __get__ (this, function (self, flm_text) {
/* 000723 */ 		var kwargs = dict ();
/* 000723 */ 		if (arguments.length) {
/* 000723 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000723 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000723 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000723 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000723 */ 					switch (__attrib0__) {
/* 000723 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000723 */ 						case 'flm_text': var flm_text = __allkwargs0__ [__attrib0__]; break;
/* 000723 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000723 */ 					}
/* 000723 */ 				}
/* 000723 */ 				delete kwargs.__kwargtrans__;
/* 000723 */ 			}
/* 000723 */ 		}
/* 000723 */ 		else {
/* 000723 */ 		}
/* 000725 */ 		if (__t__ (__call__ (isinstance, null, flm_text, FLMFragment))) {
/* 000726 */ 			var frag = flm_text;
/* 000727 */ 			var __iterable0__ = tuple (['is_block_level', 'standalone_mode']);
/* 000727 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000727 */ 				var fld = __getitem__ (__iterable0__, __index0__);
/* 000729 */ 				if (__t__ (__t__ (__in__ (fld, kwargs)) && __t__ (__getitem__ (kwargs, fld) !== null) && __ne__ (__getitem__ (kwargs, fld), __call__ (getattr, null, frag, fld)))) {
/* 000733 */ 					var __except0__ = __call__ (ValueError, null, 'make_fragment(): FLMFragment instance specified but its ‘{}’ ({}) differs with requested ‘{}’ ({})'.format (fld, __call__ (repr, null, __call__ (getattr, null, frag, fld)), fld, __getitem__ (kwargs, fld)));
/* 000733 */ 					__except0__.__cause__ = null;
/* 000733 */ 					throw __except0__;
/* 000733 */ 				}
/* 000733 */ 			}
/* 000736 */ 			return frag;
/* 000736 */ 		}
/* 000738 */ 		try {
/* 000739 */ 			var fragment = __call__ (FLMFragment, null, flm_text, __kwargtrans__ (__mergekwargtrans__ ({environment: self}, kwargs)));
/* 000740 */ 			return fragment;
/* 000740 */ 		}
/* 000740 */ 		catch (__except0__) {
/* 000742 */ 			if (__t__ (!__t__ (((function () {
/* 000742 */ 				var __accu0__ = kwargs;
/* 000742 */ 				return __call__ (__accu0__.py_get, __accu0__, 'silent', false);
/* 000742 */ 			}) ())))) {
/* 000743 */ 				(function () {
/* 000743 */ 					var __accu0__ = logger;
/* 000744 */ 					return __call__ (__accu0__.error, __accu0__, (function () {
/* 000744 */ 						var __accu1__ = 'Error compiling fragment for {}\nContent was:\n‘{}’\n';
/* 000745 */ 						return __call__ (__accu1__.format, __accu1__, (function () {
/* 000745 */ 							var __accu2__ = kwargs;
/* 000745 */ 							return __call__ (__accu2__.py_get, __accu2__, 'what', '(unknown)');
/* 000745 */ 						}) (), flm_text);
/* 000745 */ 					}) (), __kwargtrans__ ({exc_info: true}));
/* 000745 */ 				}) ();
/* 000745 */ 			}
/* 000748 */ 			__except0__.__cause__ = null;
/* 000748 */ 			throw __except0__;
/* 000748 */ 		}
/* 000748 */ 	});},
/* 000750 */ 	get node_list_finalizer () {return __get__ (this, function (self) {
/* 000750 */ 		if (arguments.length) {
/* 000750 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000750 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000750 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000750 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000750 */ 					switch (__attrib0__) {
/* 000750 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000750 */ 					}
/* 000750 */ 				}
/* 000750 */ 			}
/* 000750 */ 		}
/* 000750 */ 		else {
/* 000750 */ 		}
/* 000751 */ 		return self._node_list_finalizer;
/* 000751 */ 	});},
/* 000755 */ 	get make_document () {return __get__ (this, function (self, render_callback) {
/* 000755 */ 		var kwargs = dict ();
/* 000755 */ 		if (arguments.length) {
/* 000755 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000755 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000755 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000755 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000755 */ 					switch (__attrib0__) {
/* 000755 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000755 */ 						case 'render_callback': var render_callback = __allkwargs0__ [__attrib0__]; break;
/* 000755 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000755 */ 					}
/* 000755 */ 				}
/* 000755 */ 				delete kwargs.__kwargtrans__;
/* 000755 */ 			}
/* 000755 */ 		}
/* 000755 */ 		else {
/* 000755 */ 		}
/* 000763 */ 		var doc = __call__ (FLMDocument, null, render_callback, __kwargtrans__ (__mergekwargtrans__ ({environment: self}, kwargs)));
/* 000768 */ 		(function () {
/* 000768 */ 			var __accu0__ = doc;
/* 000768 */ 			return __call__ (__accu0__.initialize, __accu0__);
/* 000768 */ 		}) ();
/* 000769 */ 		return doc;
/* 000769 */ 	});},
/* 000772 */ 	get get_features_selection () {return __get__ (this, function (self, enable_features) {
/* 000772 */ 		if (arguments.length) {
/* 000772 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000772 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000772 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000772 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000772 */ 					switch (__attrib0__) {
/* 000772 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000772 */ 						case 'enable_features': var enable_features = __allkwargs0__ [__attrib0__]; break;
/* 000772 */ 					}
/* 000772 */ 				}
/* 000772 */ 			}
/* 000772 */ 		}
/* 000772 */ 		else {
/* 000772 */ 		}
/* 000774 */ 		if (__t__ (enable_features === null)) {
/* 000776 */ 			return self.features;
/* 000776 */ 		}
/* 000778 */ 		var features = (function () {
/* 000778 */ 			var __accu0__ = [];
/* 000778 */ 			var __iterable0__ = enable_features;
/* 000778 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000780 */ 				var feature_name = __getitem__ (__iterable0__, __index0__);
/* 000780 */ 				(function () {
/* 000780 */ 					var __accu1__ = __accu0__;
/* 000780 */ 					return __call__ (__accu1__.append, __accu1__, __getitem__ (self.features_by_name, feature_name));
/* 000780 */ 				}) ();
/* 000780 */ 			}
/* 000780 */ 			return __accu0__;
/* 000780 */ 		}) ();
/* 000784 */ 		__call__ (features_ensure_dependencies_are_met, null, features);
/* 000786 */ 		return features;
/* 000786 */ 	});},
/* 000791 */ 	environment_get_located_error_message: null,
/* 000793 */ 	get get_located_error_message () {return __get__ (this, function (self, exception_object) {
/* 000793 */ 		if (arguments.length) {
/* 000793 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000793 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000793 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000793 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000793 */ 					switch (__attrib0__) {
/* 000793 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000793 */ 						case 'exception_object': var exception_object = __allkwargs0__ [__attrib0__]; break;
/* 000793 */ 					}
/* 000793 */ 				}
/* 000793 */ 			}
/* 000793 */ 		}
/* 000793 */ 		else {
/* 000793 */ 		}
/* 000794 */ 		if (__t__ (self.environment_get_located_error_message !== null)) {
/* 000795 */ 			return (function () {
/* 000795 */ 				var __accu0__ = self;
/* 000795 */ 				return __call__ (__accu0__.environment_get_located_error_message, __accu0__, exception_object);
/* 000795 */ 			}) ();
/* 000795 */ 		}
/* 000796 */ 		return (function () {
/* 000796 */ 			var __accu0__ = __call__ (LatexWalkerLocatedErrorFormatter, null, exception_object);
/* 000796 */ 			return __call__ (__accu0__.to_display_string, __accu0__);
/* 000796 */ 		}) ();
/* 000796 */ 	});}
/* 000796 */ });
/* 000805 */ export var standard_parsing_state = function () {
/* 000805 */ 	var force_block_level = null;
/* 000805 */ 	var enable_comments = true;
/* 000805 */ 	var comment_start = '%%';
/* 000805 */ 	var extra_forbidden_characters = '';
/* 000805 */ 	var dollar_inline_math_mode = false;
/* 000805 */ 	if (arguments.length) {
/* 000805 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000805 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000805 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000805 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000805 */ 				switch (__attrib0__) {
/* 000805 */ 					case 'force_block_level': var force_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000805 */ 					case 'enable_comments': var enable_comments = __allkwargs0__ [__attrib0__]; break;
/* 000805 */ 					case 'comment_start': var comment_start = __allkwargs0__ [__attrib0__]; break;
/* 000805 */ 					case 'extra_forbidden_characters': var extra_forbidden_characters = __allkwargs0__ [__attrib0__]; break;
/* 000805 */ 					case 'dollar_inline_math_mode': var dollar_inline_math_mode = __allkwargs0__ [__attrib0__]; break;
/* 000805 */ 				}
/* 000805 */ 			}
/* 000805 */ 		}
/* 000805 */ 	}
/* 000805 */ 	else {
/* 000805 */ 	}
/* 000821 */ 	var forbidden_characters = __call__ (str, null, extra_forbidden_characters);
/* 000822 */ 	if (__t__ (__t__ (!__t__ ((dollar_inline_math_mode))) && !__in__ ('$', forbidden_characters))) {
/* 000823 */ 		var forbidden_characters = __call__ (__iadd__, null, forbidden_characters, '$');
/* 000823 */ 	}
/* 000824 */ 	if (__t__ (__t__ ((__t__ (!__t__ ((enable_comments))) || __ne__ (comment_start, '%'))) && !__in__ ('%', forbidden_characters))) {
/* 000826 */ 		var forbidden_characters = __call__ (__iadd__, null, forbidden_characters, '%');
/* 000826 */ 	}
/* 000828 */ 	var latex_inline_math_delimiters = [tuple (['\\(', '\\)'])];
/* 000830 */ 	if (__t__ (dollar_inline_math_mode)) {
/* 000831 */ 		(function () {
/* 000831 */ 			var __accu0__ = latex_inline_math_delimiters;
/* 000831 */ 			return __call__ (__accu0__.append, __accu0__, tuple (['$', '$']));
/* 000831 */ 		}) ();
/* 000831 */ 	}
/* 000833 */ 	return __call__ (FLMParsingState, null, __kwargtrans__ ({is_block_level: force_block_level, latex_context: null, enable_comments: enable_comments, comment_start: comment_start, latex_inline_math_delimiters: latex_inline_math_delimiters, latex_display_math_delimiters: [tuple (['\\[', '\\]'])], forbidden_characters: forbidden_characters}));
/* 000833 */ };
/* 000845 */ export var FLMLatexWalkerMathContextParsingStateEventHandler =  __class__ ('FLMLatexWalkerMathContextParsingStateEventHandler', [latexnodes.LatexWalkerParsingStateEventHandler], {
/* 000845 */ 	__module__: __name__,
/* 000849 */ 	math_mode_extend_context: dict ({'unknown_macro_spec': (function () {
/* 000849 */ 		var __accu0__ = macrospec;
/* 000849 */ 		return __call__ (__accu0__.MacroSpec, __accu0__, '');
/* 000850 */ 	}) (), 'unknown_environment_spec': (function () {
/* 000850 */ 		var __accu0__ = macrospec;
/* 000850 */ 		return __call__ (__accu0__.EnvironmentSpec, __accu0__, '');
/* 000851 */ 	}) (), 'unknown_specials_spec': (function () {
/* 000851 */ 		var __accu0__ = macrospec;
/* 000851 */ 		return __call__ (__accu0__.SpecialsSpec, __accu0__, '');
/* 000848 */ 	}) ()}),
/* 000854 */ 	get enter_math_mode () {return __get__ (this, function (self, math_mode_delimiter, trigger_token) {
/* 000854 */ 		if (typeof math_mode_delimiter == 'undefined' || (math_mode_delimiter != null && math_mode_delimiter.hasOwnProperty ("__kwargtrans__"))) {;
/* 000854 */ 			var math_mode_delimiter = null;
/* 000854 */ 		};
/* 000854 */ 		if (typeof trigger_token == 'undefined' || (trigger_token != null && trigger_token.hasOwnProperty ("__kwargtrans__"))) {;
/* 000854 */ 			var trigger_token = null;
/* 000854 */ 		};
/* 000854 */ 		if (arguments.length) {
/* 000854 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000854 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000854 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000854 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000854 */ 					switch (__attrib0__) {
/* 000854 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000854 */ 						case 'math_mode_delimiter': var math_mode_delimiter = __allkwargs0__ [__attrib0__]; break;
/* 000854 */ 						case 'trigger_token': var trigger_token = __allkwargs0__ [__attrib0__]; break;
/* 000854 */ 					}
/* 000854 */ 				}
/* 000854 */ 			}
/* 000854 */ 		}
/* 000854 */ 		else {
/* 000854 */ 		}
/* 000855 */ 		var set_attributes = __call__ (dict, null, __kwargtrans__ ({in_math_mode: true, math_mode_delimiter: math_mode_delimiter}));
/* 000859 */ 		// pass;
/* 000864 */ 		return (function () {
/* 000864 */ 			var __accu0__ = macrospec;
/* 000864 */ 			return __call__ (__accu0__.ParsingStateDeltaExtendLatexContextDb, __accu0__, __kwargtrans__ ({set_attributes: set_attributes, extend_latex_context: self.math_mode_extend_context}));
/* 000864 */ 		}) ();
/* 000864 */ 	});},
/* 000869 */ 	get leave_math_mode () {return __get__ (this, function (self, trigger_token) {
/* 000869 */ 		if (typeof trigger_token == 'undefined' || (trigger_token != null && trigger_token.hasOwnProperty ("__kwargtrans__"))) {;
/* 000869 */ 			var trigger_token = null;
/* 000869 */ 		};
/* 000869 */ 		if (arguments.length) {
/* 000869 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000869 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000869 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000869 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000869 */ 					switch (__attrib0__) {
/* 000869 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000869 */ 						case 'trigger_token': var trigger_token = __allkwargs0__ [__attrib0__]; break;
/* 000869 */ 					}
/* 000869 */ 				}
/* 000869 */ 			}
/* 000869 */ 		}
/* 000869 */ 		else {
/* 000869 */ 		}
/* 000871 */ 		return (function () {
/* 000871 */ 			var __accu0__ = macrospec;
/* 000876 */ 			return __call__ (__accu0__.ParsingStateDeltaExtendLatexContextDb, __accu0__, __kwargtrans__ ({set_attributes: __call__ (dict, null, __kwargtrans__ ({in_math_mode: false, math_mode_delimiter: null})), extend_latex_context: __call__ (dict, null, __kwargtrans__ ({unknown_macro_spec: null, unknown_environment_spec: null, unknown_specials_spec: null}))}));
/* 000876 */ 		}) ();
/* 000876 */ 	});}
/* 000876 */ });
/* 000887 */ export var standard_environment_get_located_error_message = function (exception_object) {
/* 000887 */ 	if (arguments.length) {
/* 000887 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000887 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000887 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000887 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000887 */ 				switch (__attrib0__) {
/* 000887 */ 					case 'exception_object': var exception_object = __allkwargs0__ [__attrib0__]; break;
/* 000887 */ 				}
/* 000887 */ 			}
/* 000887 */ 		}
/* 000887 */ 	}
/* 000887 */ 	else {
/* 000887 */ 	}
/* 000888 */ 	var msg = null;
/* 000889 */ 	var error_type_info = exception_object.error_type_info;
/* 000890 */ 	if (__t__ (error_type_info)) {
/* 000891 */ 		var what = __getitem__ (error_type_info, 'what');
/* 000892 */ 		if (__t__ (__eq__ (what, 'token_forbidden_character'))) {
/* 000893 */ 			if (__t__ (__eq__ (__getitem__ (error_type_info, 'forbidden_character'), '%'))) {
/* 000894 */ 				var msg = 'LaTeX comments are not allowed here. Use ‘\\%’ to typeset a literal percent sign.';
/* 000894 */ 			}
/* 000898 */ 			else if (__t__ (__eq__ (__getitem__ (error_type_info, 'forbidden_character'), '$'))) {
/* 000899 */ 				var msg = "You can't use ‘$’ here. LaTeX math should be typeset using \\(...\\) for inline math and \\[...\\] for unnumbered display equations. Use ‘\\$’ for a literal dollar sign.";
/* 000899 */ 			}
/* 000899 */ 		}
/* 000899 */ 	}
/* 000904 */ 	if (__t__ (!__t__ ((msg)))) {
/* 000905 */ 		var msg = exception_object.msg;
/* 000905 */ 	}
/* 000907 */ 	var errfmt = (function () {
/* 000907 */ 		var __accu0__ = latexnodes;
/* 000907 */ 		return __call__ (__accu0__.LatexWalkerLocatedErrorFormatter, __accu0__, exception_object);
/* 000907 */ 	}) ();
/* 000909 */ 	var msg = __call__ (__iadd__, null, msg, (function () {
/* 000909 */ 		var __accu0__ = errfmt;
/* 000909 */ 		return __call__ (__accu0__.format_full_traceback, __accu0__);
/* 000909 */ 	}) ());
/* 000911 */ 	return msg;
/* 000911 */ };
/* 000918 */ export var make_standard_environment = function (features, parsing_state, latex_context, flm_environment_options, parsing_state_options) {
/* 000918 */ 	if (typeof parsing_state == 'undefined' || (parsing_state != null && parsing_state.hasOwnProperty ("__kwargtrans__"))) {;
/* 000918 */ 		var parsing_state = null;
/* 000918 */ 	};
/* 000918 */ 	if (typeof latex_context == 'undefined' || (latex_context != null && latex_context.hasOwnProperty ("__kwargtrans__"))) {;
/* 000918 */ 		var latex_context = null;
/* 000918 */ 	};
/* 000918 */ 	if (typeof flm_environment_options == 'undefined' || (flm_environment_options != null && flm_environment_options.hasOwnProperty ("__kwargtrans__"))) {;
/* 000918 */ 		var flm_environment_options = null;
/* 000918 */ 	};
/* 000918 */ 	if (typeof parsing_state_options == 'undefined' || (parsing_state_options != null && parsing_state_options.hasOwnProperty ("__kwargtrans__"))) {;
/* 000918 */ 		var parsing_state_options = null;
/* 000918 */ 	};
/* 000918 */ 	if (arguments.length) {
/* 000918 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000918 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000918 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000918 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000918 */ 				switch (__attrib0__) {
/* 000918 */ 					case 'features': var features = __allkwargs0__ [__attrib0__]; break;
/* 000918 */ 					case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000918 */ 					case 'latex_context': var latex_context = __allkwargs0__ [__attrib0__]; break;
/* 000918 */ 					case 'flm_environment_options': var flm_environment_options = __allkwargs0__ [__attrib0__]; break;
/* 000918 */ 					case 'parsing_state_options': var parsing_state_options = __allkwargs0__ [__attrib0__]; break;
/* 000918 */ 				}
/* 000918 */ 			}
/* 000918 */ 		}
/* 000918 */ 	}
/* 000918 */ 	else {
/* 000918 */ 	}
/* 000922 */ 	if (__t__ (latex_context === null)) {
/* 000923 */ 		var latex_context = (function () {
/* 000923 */ 			var __accu0__ = macrospec;
/* 000923 */ 			return __call__ (__accu0__.LatexContextDb, __accu0__);
/* 000923 */ 		}) ();
/* 000923 */ 	}
/* 000925 */ 	if (__t__ (parsing_state === null)) {
/* 000926 */ 		var parsing_state_options_2 = dict ({});
/* 000927 */ 		if (__t__ (parsing_state_options !== null)) {
/* 000928 */ 			var parsing_state_options_2 = parsing_state_options;
/* 000928 */ 		}
/* 000930 */ 		var parsing_state = __call__ (standard_parsing_state, null, __kwargtrans__ (parsing_state_options_2));
/* 000930 */ 	}
/* 000932 */ 	var parsing_state_event_handler = __call__ (FLMLatexWalkerMathContextParsingStateEventHandler, null);
/* 000934 */ 	var flm_environment_options_2 = dict ({});
/* 000935 */ 	if (__t__ (flm_environment_options !== null)) {
/* 000936 */ 		var flm_environment_options_2 = flm_environment_options;
/* 000936 */ 	}
/* 000938 */ 	var environment = __call__ (FLMEnvironment, null, features, parsing_state, latex_context, __kwargtrans__ (flm_environment_options_2));
/* 000945 */ 	environment.parsing_state_event_handler = parsing_state_event_handler;
/* 000947 */ 	environment.environment_get_located_error_message = standard_environment_get_located_error_message;
/* 000950 */ 	return environment;
/* 000950 */ };
/* 000964 */ export var _make_argvalue = function (argvalue, latex_walker, parsing_state) {
/* 000964 */ 	if (arguments.length) {
/* 000964 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000964 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000964 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000964 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000964 */ 				switch (__attrib0__) {
/* 000964 */ 					case 'argvalue': var argvalue = __allkwargs0__ [__attrib0__]; break;
/* 000964 */ 					case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000964 */ 					case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000964 */ 				}
/* 000964 */ 			}
/* 000964 */ 		}
/* 000964 */ 	}
/* 000964 */ 	else {
/* 000964 */ 	}
/* 000966 */ 	if (__t__ (argvalue === null)) {
/* 000967 */ 		return null;
/* 000967 */ 	}
/* 000969 */ 	if (__t__ (__call__ (isinstance, null, argvalue, str))) {
/* 000970 */ 		var argvalue = (function () {
/* 000970 */ 			var __accu0__ = latex_walker;
/* 000970 */ 			return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: argvalue, pos: null, pos_end: null, parsing_state: parsing_state}));
/* 000970 */ 		}) ();
/* 000970 */ 	}
/* 000978 */ 	if (__t__ (__call__ (isinstance, null, argvalue, latexnodes_nodes.LatexGroupNode))) {
/* 000979 */ 		return argvalue;
/* 000979 */ 	}
/* 000983 */ 	if (__t__ (__call__ (isinstance, null, argvalue, latexnodes_nodes.LatexNodeList))) {
/* 000984 */ 		var nodelist = argvalue;
/* 000984 */ 	}
/* 000986 */ 	else if (__t__ (__call__ (isinstance, null, argvalue, list))) {
/* 000987 */ 		var nodelist = (function () {
/* 000987 */ 			var __accu0__ = latex_walker;
/* 000987 */ 			return __call__ (__accu0__.make_nodelist, __accu0__, argvalue, __kwargtrans__ ({parsing_state: parsing_state}));
/* 000987 */ 		}) ();
/* 000987 */ 	}
/* 000990 */ 	else {
/* 000993 */ 		var nodelist = (function () {
/* 000993 */ 			var __accu0__ = latex_walker;
/* 000993 */ 			return __call__ (__accu0__.make_nodelist, __accu0__, [argvalue], __kwargtrans__ ({parsing_state: parsing_state}));
/* 000993 */ 		}) ();
/* 000993 */ 	}
/* 000998 */ 	var groupnode = (function () {
/* 000998 */ 		var __accu0__ = latex_walker;
/* 000998 */ 		return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexGroupNode, __kwargtrans__ ({delimiters: tuple (['', '']), nodelist: nodelist, pos: nodelist.pos, pos_end: nodelist.pos_end, parsing_state: parsing_state}));
/* 000998 */ 	}) ();
/* 001007 */ 	return groupnode;
/* 001007 */ };
/* 001010 */ export var make_invocable_arguments = function (flm_spec, args) {
/* 001010 */ 	if (arguments.length) {
/* 001010 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001010 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001010 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001010 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001010 */ 				switch (__attrib0__) {
/* 001010 */ 					case 'flm_spec': var flm_spec = __allkwargs0__ [__attrib0__]; break;
/* 001010 */ 					case 'args': var args = __allkwargs0__ [__attrib0__]; break;
/* 001010 */ 					case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 001010 */ 					case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 001010 */ 				}
/* 001010 */ 			}
/* 001010 */ 		}
/* 001010 */ 	}
/* 001010 */ 	else {
/* 001010 */ 	}
/* 001012 */ 	var argnlist = (function () {
/* 001012 */ 		var __accu0__ = [];
/* 001012 */ 		var __iterable0__ = flm_spec.arguments_spec_list;
/* 001012 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001012 */ 			var _ = __getitem__ (__iterable0__, __index0__);
/* 001012 */ 			(function () {
/* 001012 */ 				var __accu1__ = __accu0__;
/* 001012 */ 				return __call__ (__accu1__.append, __accu1__, null);
/* 001012 */ 			}) ();
/* 001012 */ 		}
/* 001012 */ 		return __accu0__;
/* 001012 */ 	}) ();
/* 001014 */ 	if (__t__ (args === null)) {
/* 001015 */ 		return argnlist;
/* 001015 */ 	}
/* 001017 */ 	var __iterable0__ = (function () {
/* 001017 */ 		var __accu0__ = args;
/* 001017 */ 		return __call__ (__accu0__.py_items, __accu0__);
/* 001017 */ 	}) ();
/* 001017 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001017 */ 		var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 001017 */ 		var argname = __left0__ [0];
/* 001017 */ 		var argvalue = __left0__ [1];
/* 001019 */ 		var argj = null;
/* 001020 */ 		var __iterable1__ = __call__ (enumerate, null, flm_spec.arguments_spec_list);
/* 001020 */ 		for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 001020 */ 			var __left0__ = __getitem__ (__iterable1__, __index1__);
/* 001020 */ 			var candidateargj = __left0__ [0];
/* 001020 */ 			var candidateargspec = __left0__ [1];
/* 001021 */ 			if (__t__ (__eq__ (candidateargspec.argname, argname))) {
/* 001022 */ 				var argj = candidateargj;
/* 001022 */ 				break;
/* 001022 */ 			}
/* 001022 */ 		}
/* 001024 */ 		if (__t__ (argj === null)) {
/* 001025 */ 			(function () {
/* 001025 */ 				var __accu0__ = logger;
/* 001025 */ 				return __call__ (__accu0__.error, __accu0__, 'Cannot find argument %r in spec %r', argname, flm_spec.arguments_spec_list);
/* 001025 */ 			}) ();
/* 001027 */ 			var __except0__ = __call__ (ValueError, null, 'No argument named ‘{}’ in spec'.format (argname));
/* 001027 */ 			__except0__.__cause__ = null;
/* 001027 */ 			throw __except0__;
/* 001027 */ 		}
/* 001030 */ 		__setitem__ (argnlist, argj, __call__ (_make_argvalue, null, argvalue, latex_walker, parsing_state));
/* 001030 */ 	}
/* 001032 */ 	return argnlist;
/* 001032 */ };
/* 001035 */ export var make_invocable_node_instance = function (node_type, flm_spec) {
/* 001035 */ 	var args = null;
/* 001035 */ 	var body_nodelist = null;
/* 001035 */ 	var node_kwargs = null;
/* 001035 */ 	if (arguments.length) {
/* 001035 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001035 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001035 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001035 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001035 */ 				switch (__attrib0__) {
/* 001035 */ 					case 'node_type': var node_type = __allkwargs0__ [__attrib0__]; break;
/* 001035 */ 					case 'flm_spec': var flm_spec = __allkwargs0__ [__attrib0__]; break;
/* 001035 */ 					case 'args': var args = __allkwargs0__ [__attrib0__]; break;
/* 001035 */ 					case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 001035 */ 					case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 001035 */ 					case 'body_nodelist': var body_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 001035 */ 					case 'node_kwargs': var node_kwargs = __allkwargs0__ [__attrib0__]; break;
/* 001035 */ 				}
/* 001035 */ 			}
/* 001035 */ 		}
/* 001035 */ 	}
/* 001035 */ 	else {
/* 001035 */ 	}
/* 001042 */ 	var nkwargs = dict ({'pos': null, 'pos_end': null});
/* 001047 */ 	if (__t__ (node_type === latexnodes_nodes.LatexMacroNode)) {
/* 001048 */ 		__setitem__ (nkwargs, 'macroname', flm_spec.macroname);
/* 001049 */ 		if (__t__ (body_nodelist !== null)) {
/* 001050 */ 			var __except0__ = __call__ (ValueError, null, 'For a LatexMacroNode you must have body_nodelist=None');
/* 001050 */ 			__except0__.__cause__ = null;
/* 001050 */ 			throw __except0__;
/* 001050 */ 		}
/* 001050 */ 	}
/* 001052 */ 	else if (__t__ (node_type === latexnodes_nodes.LatexEnvironmentNode)) {
/* 001053 */ 		__setitem__ (nkwargs, 'environmentname', flm_spec.environmentname);
/* 001053 */ 	}
/* 001055 */ 	else if (__t__ (node_type === latexnodes_nodes.LatexSpecialsNode)) {
/* 001056 */ 		__setitem__ (nkwargs, 'specials_chars', flm_spec.specials_chars);
/* 001057 */ 		if (__t__ (body_nodelist !== null)) {
/* 001058 */ 			var __except0__ = __call__ (ValueError, null, 'For a LatexSpecialsNode you must have body_nodelist=None');
/* 001058 */ 			__except0__.__cause__ = null;
/* 001058 */ 			throw __except0__;
/* 001058 */ 		}
/* 001058 */ 	}
/* 001060 */ 	var argnlist = __call__ (make_invocable_arguments, null, flm_spec, args, __kwargtrans__ ({latex_walker: latex_walker, parsing_state: parsing_state}));
/* 001064 */ 	var nodeargd = (function () {
/* 001064 */ 		var __accu0__ = latexnodes_nodes;
/* 001064 */ 		return __call__ (__accu0__.ParsedArguments, __accu0__, __kwargtrans__ ({argnlist: argnlist, arguments_spec_list: flm_spec.arguments_spec_list}));
/* 001064 */ 	}) ();
/* 001069 */ 	if (__t__ (body_nodelist !== null)) {
/* 001070 */ 		__setitem__ (nkwargs, 'nodelist', body_nodelist);
/* 001070 */ 	}
/* 001072 */ 	if (__t__ (node_kwargs !== null)) {
/* 001073 */ 		(function () {
/* 001073 */ 			var __accu0__ = nkwargs;
/* 001073 */ 			return __call__ (__accu0__.py_update, __accu0__, node_kwargs);
/* 001073 */ 		}) ();
/* 001073 */ 	}
/* 001075 */ 	var node = (function () {
/* 001075 */ 		var __accu0__ = latex_walker;
/* 001075 */ 		return __call__ (__accu0__.make_node, __accu0__, node_type, __kwargtrans__ (__mergekwargtrans__ ({spec: flm_spec, nodeargd: nodeargd, parsing_state: parsing_state}, nkwargs)));
/* 001075 */ 	}) ();
/* 001083 */ 	var node = (function () {
/* 001083 */ 		var __accu0__ = flm_spec;
/* 001083 */ 		return __call__ (__accu0__.finalize_node, __accu0__, node);
/* 001083 */ 	}) ();
/* 001085 */ 	return node;
/* 001085 */ };
/* 000006 */ 
//# sourceMappingURL=flm.flmenvironment.map