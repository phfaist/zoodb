/* 000001 */ // Transcrypt'ed from Python, 2022-09-29 00:22:14
/* 000006 */ var logging = {};
/* 000006 */ var re = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000016 */ import {LLMDocument} from './llm.llmdocument.js';
/* 000015 */ import {LLMFragment} from './llm.llmfragment.js';
/* 000013 */ import * as latexwalker from './pylatexenc.latexwalker.js';
/* 000012 */ import * as latexnodes_nodes from './pylatexenc.latexnodes.nodes.js';
/* 000011 */ import {LatexWalkerParseError, LatexWalkerParseErrorFormatter} from './pylatexenc.latexnodes.js';
/* 000010 */ import * as latexnodes from './pylatexenc.latexnodes.js';
/* 000007 */ import * as __module_logging__ from './logging.js';
/* 000007 */ __nest__ (logging, '', __module_logging__);
/* 000006 */ import * as __module_re__ from './re.js';
/* 000006 */ __nest__ (re, '', __module_re__);
/* 000006 */ export {LLMFragment, LatexWalkerParseError, latexnodes_nodes, latexnodes, LLMDocument, LatexWalkerParseErrorFormatter, latexwalker};
/* 000001 */ var __name__ = 'llm.llmenvironment';
/* 000008 */ export var logger = (function () {
/* 000008 */ 	var __accu0__ = logging;
/* 000008 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000008 */ }) ();
/* 000021 */ export var LLMParsingState =  __class__ ('LLMParsingState', [latexnodes.ParsingState], {
/* 000021 */ 	__module__: __name__,
/* 000024 */ 	_fields: __call__ (tuple, null, __add__ (__call__ (list, null, latexnodes.ParsingState._fields), ['is_block_level'])),
/* 000026 */ 	get set_fields () {return __get__ (this, function (self) {
/* 000026 */ 		var is_block_level = null;
/* 000026 */ 		var kwargs = dict ();
/* 000026 */ 		if (arguments.length) {
/* 000026 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000026 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000026 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000026 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000026 */ 					switch (__attrib0__) {
/* 000026 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000026 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000026 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000026 */ 					}
/* 000026 */ 				}
/* 000026 */ 				delete kwargs.__kwargtrans__;
/* 000026 */ 			}
/* 000026 */ 		}
/* 000026 */ 		else {
/* 000026 */ 		}
/* 000027 */ 		__call__ (__call__ (__super__, null, LLMParsingState, 'set_fields'), null, self, __kwargtrans__ (kwargs));
/* 000028 */ 		self.is_block_level = is_block_level;
/* 000028 */ 	});}
/* 000028 */ });
/* 000031 */ export var LLMParsingStateDeltaSetBlockLevel =  __class__ ('LLMParsingStateDeltaSetBlockLevel', [latexnodes.ParsingStateDelta], {
/* 000031 */ 	__module__: __name__,
/* 000032 */ 	get __init__ () {return __get__ (this, function (self, is_block_level) {
/* 000032 */ 		if (typeof is_block_level == 'undefined' || (is_block_level != null && is_block_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000032 */ 			var is_block_level = null;
/* 000032 */ 		};
/* 000032 */ 		if (arguments.length) {
/* 000032 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000032 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000032 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000032 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000032 */ 					switch (__attrib0__) {
/* 000032 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000032 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000032 */ 					}
/* 000032 */ 				}
/* 000032 */ 			}
/* 000032 */ 		}
/* 000032 */ 		else {
/* 000032 */ 		}
/* 000034 */ 		__call__ (__call__ (__super__, null, LLMParsingStateDeltaSetBlockLevel, '__init__'), null, self, __kwargtrans__ ({set_attributes: __call__ (dict, null, __kwargtrans__ ({is_block_level: is_block_level}))}));
/* 000034 */ 	});}
/* 000034 */ });
/* 000038 */ export var LLMArgumentSpec = function (parser, argname, is_block_level) {
/* 000038 */ 	if (typeof is_block_level == 'undefined' || (is_block_level != null && is_block_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000038 */ 		var is_block_level = false;
/* 000038 */ 	};
/* 000038 */ 	if (arguments.length) {
/* 000038 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000038 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000038 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000038 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000038 */ 				switch (__attrib0__) {
/* 000038 */ 					case 'parser': var parser = __allkwargs0__ [__attrib0__]; break;
/* 000038 */ 					case 'argname': var argname = __allkwargs0__ [__attrib0__]; break;
/* 000038 */ 					case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000038 */ 				}
/* 000038 */ 			}
/* 000038 */ 		}
/* 000038 */ 	}
/* 000038 */ 	else {
/* 000038 */ 	}
/* 000045 */ 	var parsing_state_delta = null;
/* 000046 */ 	if (__t__ (is_block_level !== null)) {
/* 000047 */ 		var parsing_state_delta = __call__ (LLMParsingStateDeltaSetBlockLevel, null, __kwargtrans__ ({is_block_level: is_block_level}));
/* 000047 */ 	}
/* 000050 */ 	return (function () {
/* 000050 */ 		var __accu0__ = latexnodes;
/* 000050 */ 		return __call__ (__accu0__.LatexArgumentSpec, __accu0__, __kwargtrans__ ({parser: parser, argname: argname, parsing_state_delta: parsing_state_delta}));
/* 000050 */ 	}) ();
/* 000050 */ };
/* 000058 */ export var BlocksBuilder =  __class__ ('BlocksBuilder', [object], {
/* 000058 */ 	__module__: __name__,
/* 000060 */ 	rx_space: (function () {
/* 000060 */ 		var __accu0__ = re;
/* 000060 */ 		return __call__ (__accu0__.compile, __accu0__, '[ \\t\\n\\r]+');
/* 000060 */ 	}) (),
/* 000061 */ 	rx_only_space: (function () {
/* 000061 */ 		var __accu0__ = re;
/* 000061 */ 		return __call__ (__accu0__.compile, __accu0__, '^[ \\t\\n\\r]+$');
/* 000061 */ 	}) (),
/* 000063 */ 	get __init__ () {return __get__ (this, function (self, latexnodelist) {
/* 000063 */ 		if (arguments.length) {
/* 000063 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000063 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000063 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000063 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000063 */ 					switch (__attrib0__) {
/* 000063 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000063 */ 						case 'latexnodelist': var latexnodelist = __allkwargs0__ [__attrib0__]; break;
/* 000063 */ 					}
/* 000063 */ 				}
/* 000063 */ 			}
/* 000063 */ 		}
/* 000063 */ 		else {
/* 000063 */ 		}
/* 000064 */ 		__call__ (__call__ (__super__, null, BlocksBuilder, '__init__'), null, self);
/* 000065 */ 		self.latexnodelist = latexnodelist;
/* 000066 */ 		self.pending_paragraph_nodes = [];
/* 000067 */ 		self.blocks = [];
/* 000067 */ 	});},
/* 000069 */ 	get flush_paragraph () {return __get__ (this, function (self) {
/* 000069 */ 		if (arguments.length) {
/* 000069 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000069 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000069 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000069 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000069 */ 					switch (__attrib0__) {
/* 000069 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000069 */ 					}
/* 000069 */ 				}
/* 000069 */ 			}
/* 000069 */ 		}
/* 000069 */ 		else {
/* 000069 */ 		}
/* 000070 */ 		if (__t__ (!__t__ ((self.pending_paragraph_nodes)))) {
/* 000071 */ 			return ;
/* 000071 */ 		}
/* 000072 */ 		var paragraph_nodes = self.pending_paragraph_nodes;
/* 000073 */ 		var paragraph_nodes = (function () {
/* 000073 */ 			var __accu0__ = self;
/* 000073 */ 			return __call__ (__accu0__.finalize_paragraph, __accu0__, paragraph_nodes);
/* 000073 */ 		}) ();
/* 000075 */ 		(function () {
/* 000075 */ 			var __accu0__ = self.blocks;
/* 000076 */ 			return __call__ (__accu0__.append, __accu0__, (function () {
/* 000076 */ 				var __accu1__ = latexnodes_nodes;
/* 000076 */ 				return __call__ (__accu1__.LatexNodeList, __accu1__, paragraph_nodes, __kwargtrans__ ({parsing_state: self.latexnodelist.parsing_state, latex_walker: self.latexnodelist.latex_walker}));
/* 000076 */ 			}) ());
/* 000076 */ 		}) ();
/* 000082 */ 		self.pending_paragraph_nodes = [];
/* 000082 */ 	});},
/* 000084 */ 	get simplify_whitespace_chars () {return __get__ (this, function (self, chars, is_head, is_tail) {
/* 000084 */ 		if (typeof is_head == 'undefined' || (is_head != null && is_head.hasOwnProperty ("__kwargtrans__"))) {;
/* 000084 */ 			var is_head = false;
/* 000084 */ 		};
/* 000084 */ 		if (typeof is_tail == 'undefined' || (is_tail != null && is_tail.hasOwnProperty ("__kwargtrans__"))) {;
/* 000084 */ 			var is_tail = false;
/* 000084 */ 		};
/* 000084 */ 		if (arguments.length) {
/* 000084 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000084 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000084 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000084 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000084 */ 					switch (__attrib0__) {
/* 000084 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000084 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000084 */ 						case 'is_head': var is_head = __allkwargs0__ [__attrib0__]; break;
/* 000084 */ 						case 'is_tail': var is_tail = __allkwargs0__ [__attrib0__]; break;
/* 000084 */ 					}
/* 000084 */ 				}
/* 000084 */ 			}
/* 000084 */ 		}
/* 000084 */ 		else {
/* 000084 */ 		}
/* 000085 */ 		var newchars = (function () {
/* 000085 */ 			var __accu0__ = self.rx_space;
/* 000085 */ 			return __call__ (__accu0__.sub, __accu0__, ' ', chars);
/* 000085 */ 		}) ();
/* 000086 */ 		if (__t__ (is_head)) {
/* 000087 */ 			var newchars = (function () {
/* 000087 */ 				var __accu0__ = newchars;
/* 000087 */ 				return __call__ (__accu0__.lstrip, __accu0__);
/* 000087 */ 			}) ();
/* 000087 */ 		}
/* 000088 */ 		if (__t__ (is_tail)) {
/* 000089 */ 			var newchars = (function () {
/* 000089 */ 				var __accu0__ = newchars;
/* 000089 */ 				return __call__ (__accu0__.rstrip, __accu0__);
/* 000089 */ 			}) ();
/* 000089 */ 		}
/* 000090 */ 		return newchars;
/* 000090 */ 	});},
/* 000092 */ 	get finalize_paragraph () {return __get__ (this, function (self, paragraph_nodes) {
/* 000092 */ 		if (arguments.length) {
/* 000092 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000092 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000092 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000092 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000092 */ 					switch (__attrib0__) {
/* 000092 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000092 */ 						case 'paragraph_nodes': var paragraph_nodes = __allkwargs0__ [__attrib0__]; break;
/* 000092 */ 					}
/* 000092 */ 				}
/* 000092 */ 			}
/* 000092 */ 		}
/* 000092 */ 		else {
/* 000092 */ 		}
/* 000093 */ 		if (__t__ (!__t__ ((paragraph_nodes)))) {
/* 000094 */ 			return paragraph_nodes;
/* 000094 */ 		}
/* 000097 */ 		var lastj = __sub__ (__call__ (len, null, paragraph_nodes), 1);
/* 000098 */ 		var __iterable0__ = __call__ (enumerate, null, paragraph_nodes);
/* 000098 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000098 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000098 */ 			var j = __left0__ [0];
/* 000098 */ 			var node = __left0__ [1];
/* 000100 */ 			var is_head = __eq__ (j, 0);
/* 000101 */ 			if (__t__ (__t__ (__eq__ (j, 1)) && __call__ (getattr, null, __getitem__ (paragraph_nodes, 0), 'llm_is_block_heading', false))) {
/* 000104 */ 				var is_head = true;
/* 000104 */ 			}
/* 000106 */ 			if (__t__ ((function () {
/* 000106 */ 				var __accu0__ = node;
/* 000106 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000106 */ 			}) ())) {
/* 000107 */ 				node.llm_chars_value = (function () {
/* 000107 */ 					var __accu0__ = self;
/* 000107 */ 					return __call__ (__accu0__.simplify_whitespace_chars, __accu0__, node.chars, __kwargtrans__ ({is_head: is_head, is_tail: __eq__ (j, lastj)}));
/* 000107 */ 				}) ();
/* 000112 */ 				// pass;
/* 000112 */ 			}
/* 000112 */ 		}
/* 000116 */ 		return paragraph_nodes;
/* 000116 */ 	});},
/* 000118 */ 	get build_blocks () {return __get__ (this, function (self) {
/* 000118 */ 		if (arguments.length) {
/* 000118 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000118 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000118 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000118 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000118 */ 					switch (__attrib0__) {
/* 000118 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000118 */ 					}
/* 000118 */ 				}
/* 000118 */ 			}
/* 000118 */ 		}
/* 000118 */ 		else {
/* 000118 */ 		}
/* 000119 */ 		var latexnodelist = self.latexnodelist;
/* 000123 */ 		assert (__eq__ (__call__ (len, null, self.blocks), 0));
/* 000125 */ 		var __iterable0__ = latexnodelist;
/* 000125 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000125 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000126 */ 			var n_is_block_level = __call__ (getattr, null, n, 'llm_is_block_level', null);
/* 000127 */ 			var n_is_block_heading = __call__ (getattr, null, n, 'llm_is_block_heading', false);
/* 000128 */ 			if (__t__ (n_is_block_level)) {
/* 000130 */ 				(function () {
/* 000130 */ 					var __accu0__ = self;
/* 000130 */ 					return __call__ (__accu0__.flush_paragraph, __accu0__);
/* 000130 */ 				}) ();
/* 000132 */ 				if (__t__ (__call__ (getattr, null, n, 'llm_is_paragraph_break_marker', false))) {
/* 000132 */ 					continue;
/* 000132 */ 				}
/* 000137 */ 				if (__t__ (n_is_block_heading)) {
/* 000141 */ 					(function () {
/* 000141 */ 						var __accu0__ = self.pending_paragraph_nodes;
/* 000141 */ 						return __call__ (__accu0__.append, __accu0__, n);
/* 000141 */ 					}) ();
/* 000141 */ 					continue;
/* 000141 */ 				}
/* 000146 */ 				(function () {
/* 000146 */ 					var __accu0__ = self.blocks;
/* 000146 */ 					return __call__ (__accu0__.append, __accu0__, n);
/* 000146 */ 				}) ();
/* 000146 */ 				continue;
/* 000146 */ 			}
/* 000149 */ 			var paragraph_started_yet = true;
/* 000150 */ 			if (__t__ (!__t__ ((self.pending_paragraph_nodes)))) {
/* 000151 */ 				var paragraph_started_yet = false;
/* 000151 */ 			}
/* 000152 */ 			if (__t__ (__eq__ (__call__ (len, null, self.pending_paragraph_nodes), 1))) {
/* 000153 */ 				if (__t__ (__call__ (getattr, null, __getitem__ (self.pending_paragraph_nodes, 0), 'llm_is_block_heading', false))) {
/* 000155 */ 					var paragraph_started_yet = false;
/* 000155 */ 				}
/* 000155 */ 			}
/* 000158 */ 			if (__t__ (__t__ (!__t__ ((paragraph_started_yet))) && __t__ ((function () {
/* 000158 */ 				var __accu0__ = n;
/* 000158 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000159 */ 			}) ()) && (function () {
/* 000159 */ 				var __accu0__ = self.rx_only_space;
/* 000159 */ 				return __call__ (__accu0__.match, __accu0__, n.chars);
/* 000159 */ 			}) ())) {
/* 000159 */ 				continue;
/* 000159 */ 			}
/* 000165 */ 			(function () {
/* 000165 */ 				var __accu0__ = self.pending_paragraph_nodes;
/* 000165 */ 				return __call__ (__accu0__.append, __accu0__, n);
/* 000165 */ 			}) ();
/* 000165 */ 		}
/* 000168 */ 		(function () {
/* 000168 */ 			var __accu0__ = self;
/* 000168 */ 			return __call__ (__accu0__.flush_paragraph, __accu0__);
/* 000168 */ 		}) ();
/* 000170 */ 		return self.blocks;
/* 000170 */ 	});}
/* 000170 */ });
/* 000174 */ export var NodeListFinalizer =  __class__ ('NodeListFinalizer', [object], {
/* 000174 */ 	__module__: __name__,
/* 000179 */ 	get finalize_nodelist () {return __get__ (this, function (self, latexnodelist) {
/* 000179 */ 		if (arguments.length) {
/* 000179 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000179 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000179 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000179 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000179 */ 					switch (__attrib0__) {
/* 000179 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000179 */ 						case 'latexnodelist': var latexnodelist = __allkwargs0__ [__attrib0__]; break;
/* 000179 */ 					}
/* 000179 */ 				}
/* 000179 */ 			}
/* 000179 */ 		}
/* 000179 */ 		else {
/* 000179 */ 		}
/* 000193 */ 		var is_block_level = latexnodelist.parsing_state.is_block_level;
/* 000194 */ 		if (__t__ (is_block_level === null)) {
/* 000196 */ 			var is_block_level = (function () {
/* 000196 */ 				var __accu0__ = self;
/* 000196 */ 				return __call__ (__accu0__.infer_is_block_level_nodelist, __accu0__, latexnodelist);
/* 000196 */ 			}) ();
/* 000196 */ 		}
/* 000198 */ 		latexnodelist.llm_is_block_level = is_block_level;
/* 000201 */ 		if (__t__ (!__t__ ((is_block_level)))) {
/* 000203 */ 			var __iterable0__ = latexnodelist;
/* 000203 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000203 */ 				var n = __getitem__ (__iterable0__, __index0__);
/* 000204 */ 				if (__t__ (__call__ (getattr, null, n, 'llm_is_block_level', null))) {
/* 000208 */ 					var __except0__ = __call__ (LatexWalkerParseError, null, __kwargtrans__ ({msg: 'Content is not allowed in inline text (not block level): ‘{}’'.format ((function () {
/* 000208 */ 						var __accu0__ = n;
/* 000208 */ 						return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000208 */ 					}) ()), pos: n.pos}));
/* 000208 */ 					__except0__.__cause__ = null;
/* 000208 */ 					throw __except0__;
/* 000208 */ 				}
/* 000212 */ 				if (__t__ ((function () {
/* 000212 */ 					var __accu0__ = n;
/* 000212 */ 					return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000212 */ 				}) ())) {
/* 000213 */ 					n.llm_chars_value = (function () {
/* 000213 */ 						var __accu0__ = self;
/* 000213 */ 						return __call__ (__accu0__.simplify_whitespace_chars_inline, __accu0__, n.chars);
/* 000213 */ 					}) ();
/* 000213 */ 				}
/* 000213 */ 			}
/* 000218 */ 			return latexnodelist;
/* 000218 */ 		}
/* 000222 */ 		if (__t__ (is_block_level)) {
/* 000223 */ 			var blocks_builder = (function () {
/* 000223 */ 				var __accu0__ = self;
/* 000223 */ 				return __call__ (__accu0__.make_blocks_builder, __accu0__, latexnodelist);
/* 000223 */ 			}) ();
/* 000224 */ 			var llm_blocks = (function () {
/* 000224 */ 				var __accu0__ = blocks_builder;
/* 000224 */ 				return __call__ (__accu0__.build_blocks, __accu0__);
/* 000224 */ 			}) ();
/* 000225 */ 			latexnodelist.llm_blocks = llm_blocks;
/* 000225 */ 		}
/* 000227 */ 		return latexnodelist;
/* 000227 */ 	});},
/* 000229 */ 	get infer_is_block_level_nodelist () {return __get__ (this, function (self, latexnodelist) {
/* 000229 */ 		if (arguments.length) {
/* 000229 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000229 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000229 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000229 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000229 */ 					switch (__attrib0__) {
/* 000229 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000229 */ 						case 'latexnodelist': var latexnodelist = __allkwargs0__ [__attrib0__]; break;
/* 000229 */ 					}
/* 000229 */ 				}
/* 000229 */ 			}
/* 000229 */ 		}
/* 000229 */ 		else {
/* 000229 */ 		}
/* 000230 */ 		var __iterable0__ = latexnodelist;
/* 000230 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000230 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000231 */ 			var n_is_block_level = __call__ (getattr, null, n, 'llm_is_block_level', null);
/* 000232 */ 			if (__t__ (n_is_block_level)) {
/* 000233 */ 				return true;
/* 000233 */ 			}
/* 000233 */ 		}
/* 000234 */ 		return false;
/* 000234 */ 	});},
/* 000236 */ 	get simplify_whitespace_chars_inline () {return __get__ (this, function (self, chars) {
/* 000236 */ 		if (arguments.length) {
/* 000236 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000236 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000236 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000236 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000236 */ 					switch (__attrib0__) {
/* 000236 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000236 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000236 */ 					}
/* 000236 */ 				}
/* 000236 */ 			}
/* 000236 */ 		}
/* 000236 */ 		else {
/* 000236 */ 		}
/* 000237 */ 		return (function () {
/* 000237 */ 			var __accu0__ = self.rx_inline_space;
/* 000237 */ 			return __call__ (__accu0__.sub, __accu0__, ' ', chars);
/* 000237 */ 		}) ();
/* 000237 */ 	});},
/* 000239 */ 	make_blocks_builder: BlocksBuilder,
/* 000241 */ 	rx_inline_space: BlocksBuilder.rx_space
/* 000241 */ });
/* 000245 */ export var LLMLatexWalker =  __class__ ('LLMLatexWalker', [latexwalker.LatexWalker], {
/* 000245 */ 	__module__: __name__,
/* 000258 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000258 */ 		var parsing_state_event_handler = null;
/* 000258 */ 		var standalone_mode = false;
/* 000258 */ 		var resource_info = null;
/* 000258 */ 		var parsing_mode = null;
/* 000258 */ 		var what = null;
/* 000258 */ 		var kwargs = dict ();
/* 000258 */ 		if (arguments.length) {
/* 000258 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000258 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000258 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000258 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000258 */ 					switch (__attrib0__) {
/* 000258 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000258 */ 						case 'llm_text': var llm_text = __allkwargs0__ [__attrib0__]; break;
/* 000258 */ 						case 'default_parsing_state': var default_parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000258 */ 						case 'llm_environment': var llm_environment = __allkwargs0__ [__attrib0__]; break;
/* 000258 */ 						case 'parsing_state_event_handler': var parsing_state_event_handler = __allkwargs0__ [__attrib0__]; break;
/* 000258 */ 						case 'standalone_mode': var standalone_mode = __allkwargs0__ [__attrib0__]; break;
/* 000258 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000258 */ 						case 'parsing_mode': var parsing_mode = __allkwargs0__ [__attrib0__]; break;
/* 000258 */ 						case 'what': var what = __allkwargs0__ [__attrib0__]; break;
/* 000258 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000258 */ 					}
/* 000258 */ 				}
/* 000258 */ 				delete kwargs.__kwargtrans__;
/* 000258 */ 			}
/* 000258 */ 		}
/* 000258 */ 		else {
/* 000258 */ 		}
/* 000270 */ 		__call__ (__call__ (__super__, null, LLMLatexWalker, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({s: llm_text, default_parsing_state: default_parsing_state}, kwargs)));
/* 000276 */ 		self.llm_environment = llm_environment;
/* 000278 */ 		self.standalone_mode = standalone_mode;
/* 000282 */ 		self.resource_info = resource_info;
/* 000284 */ 		self.what = what;
/* 000287 */ 		self.parsing_mode = parsing_mode;
/* 000289 */ 		self._parsing_state_event_handler = parsing_state_event_handler;
/* 000289 */ 	});},
/* 000291 */ 	get parsing_state_event_handler () {return __get__ (this, function (self) {
/* 000291 */ 		if (arguments.length) {
/* 000291 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000291 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000291 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000291 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000291 */ 					switch (__attrib0__) {
/* 000291 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000291 */ 					}
/* 000291 */ 				}
/* 000291 */ 			}
/* 000291 */ 		}
/* 000291 */ 		else {
/* 000291 */ 		}
/* 000292 */ 		if (__t__ (self._parsing_state_event_handler)) {
/* 000293 */ 			return self._parsing_state_event_handler;
/* 000293 */ 		}
/* 000294 */ 		return __call__ (__call__ (__super__, null, LLMLatexWalker, 'parsing_state_event_handler'), null, self);
/* 000294 */ 	});},
/* 000296 */ 	get make_nodelist () {return __get__ (this, function (self, nodelist, parsing_state) {
/* 000296 */ 		var kwargs = dict ();
/* 000296 */ 		if (arguments.length) {
/* 000296 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000296 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000296 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000296 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000296 */ 					switch (__attrib0__) {
/* 000296 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000296 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000296 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000296 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000296 */ 					}
/* 000296 */ 				}
/* 000296 */ 				delete kwargs.__kwargtrans__;
/* 000296 */ 			}
/* 000296 */ 		}
/* 000296 */ 		else {
/* 000296 */ 		}
/* 000297 */ 		var nl = __call__ (__call__ (__super__, null, LLMLatexWalker, 'make_nodelist'), null, self, __kwargtrans__ (__mergekwargtrans__ ({nodelist: nodelist, parsing_state: parsing_state}, kwargs)));
/* 000299 */ 		var nl = (function () {
/* 000299 */ 			var __accu0__ = (function () {
/* 000299 */ 				var __accu1__ = self.llm_environment;
/* 000299 */ 				return __call__ (__accu1__.node_list_finalizer, __accu1__);
/* 000299 */ 			}) ();
/* 000299 */ 			return __call__ (__accu0__.finalize_nodelist, __accu0__, nl);
/* 000299 */ 		}) ();
/* 000300 */ 		return nl;
/* 000300 */ 	});},
/* 000304 */ 	get filter_whitespace_comments_nodes () {return __get__ (this, function (self, nodelist) {
/* 000304 */ 		if (arguments.length) {
/* 000304 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000304 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000304 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000304 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000304 */ 					switch (__attrib0__) {
/* 000304 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000304 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000304 */ 					}
/* 000304 */ 				}
/* 000304 */ 			}
/* 000304 */ 		}
/* 000304 */ 		else {
/* 000304 */ 		}
/* 000309 */ 		return (function () {
/* 000309 */ 			var __accu0__ = nodelist;
/* 000309 */ 			return __call__ (__accu0__.filter, __accu0__, __kwargtrans__ ({node_predicate_fn: self._filter_whitespace_comments_nodes_predicate, skip_none: true, skip_comments: true, skip_whitespace_char_nodes: true}));
/* 000309 */ 		}) ();
/* 000309 */ 	});},
/* 000316 */ 	get _filter_whitespace_comments_nodes_predicate () {return __get__ (this, function (self, node) {
/* 000316 */ 		if (arguments.length) {
/* 000316 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000316 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000316 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000316 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000316 */ 					switch (__attrib0__) {
/* 000316 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000316 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000316 */ 					}
/* 000316 */ 				}
/* 000316 */ 			}
/* 000316 */ 		}
/* 000316 */ 		else {
/* 000316 */ 		}
/* 000317 */ 		if (__t__ (__call__ (getattr, null, node, 'llm_is_paragraph_break_marker', false))) {
/* 000318 */ 			return false;
/* 000318 */ 		}
/* 000319 */ 		return true;
/* 000319 */ 	});}
/* 000319 */ });
/* 000323 */ export var LLMEnvironment =  __class__ ('LLMEnvironment', [object], {
/* 000323 */ 	__module__: __name__,
/* 000342 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000342 */ 		var parsing_mode_deltas = null;
/* 000342 */ 		var tolerant_parsing = false;
/* 000342 */ 		if (arguments.length) {
/* 000342 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000342 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000342 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000342 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000342 */ 					switch (__attrib0__) {
/* 000342 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000342 */ 						case 'latex_context': var latex_context = __allkwargs0__ [__attrib0__]; break;
/* 000342 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000342 */ 						case 'features': var features = __allkwargs0__ [__attrib0__]; break;
/* 000342 */ 						case 'parsing_mode_deltas': var parsing_mode_deltas = __allkwargs0__ [__attrib0__]; break;
/* 000342 */ 						case 'tolerant_parsing': var tolerant_parsing = __allkwargs0__ [__attrib0__]; break;
/* 000342 */ 					}
/* 000342 */ 				}
/* 000342 */ 			}
/* 000342 */ 		}
/* 000342 */ 		else {
/* 000342 */ 		}
/* 000351 */ 		__call__ (__call__ (__super__, null, LLMEnvironment, '__init__'), null, self);
/* 000353 */ 		// pass;
/* 000357 */ 		// pass;
/* 000361 */ 		self.latex_context = latex_context;
/* 000362 */ 		self.parsing_state = parsing_state;
/* 000364 */ 		self.parsing_mode_deltas = (__t__ (parsing_mode_deltas) ? __call__ (dict, null, parsing_mode_deltas) : dict ({}));
/* 000366 */ 		self.features = __call__ (list, null, features);
/* 000371 */ 		self.features_by_name = dict ({});
/* 000372 */ 		var __iterable0__ = self.features;
/* 000372 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000372 */ 			var feature = __getitem__ (__iterable0__, __index0__);
/* 000373 */ 			if (__t__ (__in__ (feature.feature_name, self.features_by_name))) {
/* 000374 */ 				var __except0__ = __call__ (ValueError, null, 'Duplicate feature detected: feature {} has same name/role as the as already-included feature {}'.format (feature, __getitem__ (self.features_by_name, feature.feature_name)));
/* 000374 */ 				__except0__.__cause__ = null;
/* 000374 */ 				throw __except0__;
/* 000374 */ 			}
/* 000379 */ 			__setitem__ (self.features_by_name, feature.feature_name, feature);
/* 000379 */ 		}
/* 000381 */ 		self.tolerant_parsing = tolerant_parsing;
/* 000383 */ 		self._node_list_finalizer = __call__ (NodeListFinalizer, null);
/* 000385 */ 		if (__t__ (self.parsing_state.latex_context === null)) {
/* 000388 */ 			var __iterable0__ = self.features;
/* 000388 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000388 */ 				var f = __getitem__ (__iterable0__, __index0__);
/* 000389 */ 				var moredefs = (function () {
/* 000389 */ 					var __accu0__ = f;
/* 000389 */ 					return __call__ (__accu0__.add_latex_context_definitions, __accu0__);
/* 000389 */ 				}) ();
/* 000390 */ 				if (__t__ (moredefs)) {
/* 000391 */ 					// pass;
/* 000394 */ 					var moredefs2 = __call__ (dict, null, moredefs);
/* 000395 */ 					(function () {
/* 000395 */ 						var __accu0__ = moredefs2;
/* 000395 */ 						return __call__ (__accu0__.py_update, __accu0__, __kwargtrans__ ({prepend: true}));
/* 000395 */ 					}) ();
/* 000396 */ 					(function () {
/* 000396 */ 						var __accu0__ = self.latex_context;
/* 000396 */ 						return __call__ (__accu0__.add_context_category, __accu0__, 'feature--{}'.format (f.feature_name), __kwargtrans__ (moredefs2));
/* 000396 */ 					}) ();
/* 000396 */ 				}
/* 000396 */ 			}
/* 000402 */ 			(function () {
/* 000402 */ 				var __accu0__ = self.latex_context;
/* 000402 */ 				return __call__ (__accu0__.freeze, __accu0__);
/* 000402 */ 			}) ();
/* 000405 */ 			self.parsing_state.latex_context = self.latex_context;
/* 000405 */ 		}
/* 000407 */ 		else if (__t__ (self.latex_context !== null)) {
/* 000410 */ 			var __except0__ = __call__ (RuntimeError, null, 'The specified `parsing_state` instance already has a latex_context set');
/* 000410 */ 			__except0__.__cause__ = null;
/* 000410 */ 			throw __except0__;
/* 000410 */ 		}
/* 000410 */ 	});},
/* 000415 */ 	get feature () {return __get__ (this, function (self, feature_name) {
/* 000415 */ 		if (arguments.length) {
/* 000415 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000415 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000415 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000415 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000415 */ 					switch (__attrib0__) {
/* 000415 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000415 */ 						case 'feature_name': var feature_name = __allkwargs0__ [__attrib0__]; break;
/* 000415 */ 					}
/* 000415 */ 				}
/* 000415 */ 			}
/* 000415 */ 		}
/* 000415 */ 		else {
/* 000415 */ 		}
/* 000416 */ 		return __getitem__ (self.features_by_name, feature_name);
/* 000416 */ 	});},
/* 000419 */ 	parsing_state_event_handler: null,
/* 000421 */ 	get make_latex_walker () {return __get__ (this, function (self, llm_text) {
/* 000421 */ 		var parsing_mode = null;
/* 000421 */ 		var resource_info = null;
/* 000421 */ 		var tolerant_parsing = null;
/* 000421 */ 		var what = null;
/* 000421 */ 		if (arguments.length) {
/* 000421 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000421 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000421 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000421 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000421 */ 					switch (__attrib0__) {
/* 000421 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000421 */ 						case 'llm_text': var llm_text = __allkwargs0__ [__attrib0__]; break;
/* 000421 */ 						case 'standalone_mode': var standalone_mode = __allkwargs0__ [__attrib0__]; break;
/* 000421 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000421 */ 						case 'parsing_mode': var parsing_mode = __allkwargs0__ [__attrib0__]; break;
/* 000421 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000421 */ 						case 'tolerant_parsing': var tolerant_parsing = __allkwargs0__ [__attrib0__]; break;
/* 000421 */ 						case 'what': var what = __allkwargs0__ [__attrib0__]; break;
/* 000421 */ 					}
/* 000421 */ 				}
/* 000421 */ 			}
/* 000421 */ 		}
/* 000421 */ 		else {
/* 000421 */ 		}
/* 000432 */ 		var default_parsing_state = (function () {
/* 000432 */ 			var __accu0__ = self;
/* 000432 */ 			return __call__ (__accu0__.make_parsing_state, __accu0__, __kwargtrans__ ({is_block_level: is_block_level, parsing_mode: parsing_mode}));
/* 000432 */ 		}) ();
/* 000437 */ 		if (__t__ (tolerant_parsing === null)) {
/* 000438 */ 			var tolerant_parsing = self.tolerant_parsing;
/* 000438 */ 		}
/* 000440 */ 		var latex_walker = __call__ (LLMLatexWalker, null, __kwargtrans__ ({llm_text: llm_text, default_parsing_state: default_parsing_state, tolerant_parsing: tolerant_parsing, llm_environment: self, standalone_mode: standalone_mode, resource_info: resource_info, what: what, parsing_state_event_handler: self.parsing_state_event_handler}));
/* 000452 */ 		return latex_walker;
/* 000452 */ 	});},
/* 000454 */ 	get make_parsing_state () {return __get__ (this, function (self, is_block_level, parsing_mode) {
/* 000454 */ 		if (typeof parsing_mode == 'undefined' || (parsing_mode != null && parsing_mode.hasOwnProperty ("__kwargtrans__"))) {;
/* 000454 */ 			var parsing_mode = null;
/* 000454 */ 		};
/* 000454 */ 		if (arguments.length) {
/* 000454 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000454 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000454 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000454 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000454 */ 					switch (__attrib0__) {
/* 000454 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000454 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000454 */ 						case 'parsing_mode': var parsing_mode = __allkwargs0__ [__attrib0__]; break;
/* 000454 */ 					}
/* 000454 */ 				}
/* 000454 */ 			}
/* 000454 */ 		}
/* 000454 */ 		else {
/* 000454 */ 		}
/* 000458 */ 		var default_parsing_state = self.parsing_state;
/* 000460 */ 		if (__t__ (parsing_mode !== null)) {
/* 000461 */ 			try {
/* 000462 */ 				var parsing_state_delta = __getitem__ (self.parsing_mode_deltas, parsing_mode);
/* 000462 */ 			}
/* 000462 */ 			catch (__except0__) {
/* 000462 */ 				if (isinstance (__except0__, KeyError)) {
/* 000462 */ 					var e = __except0__;
/* 000464 */ 					var __except1__ = __call__ (ValueError, null, 'Invalid parsing_mode ‘{}’'.format (parsing_mode));
/* 000464 */ 					__except1__.__cause__ = null;
/* 000464 */ 					throw __except1__;
/* 000464 */ 				}
/* 000464 */ 				else {
/* 000464 */ 					throw __except0__;
/* 000464 */ 				}
/* 000464 */ 			}
/* 000466 */ 			if (__t__ (parsing_state_delta !== null)) {
/* 000467 */ 				var default_parsing_state = (function () {
/* 000467 */ 					var __accu0__ = parsing_state_delta;
/* 000467 */ 					return __call__ (__accu0__.get_updated_parsing_state, __accu0__, default_parsing_state, __kwargtrans__ ({latex_walker: null}));
/* 000467 */ 				}) ();
/* 000467 */ 			}
/* 000467 */ 		}
/* 000472 */ 		return (function () {
/* 000472 */ 			var __accu0__ = default_parsing_state;
/* 000472 */ 			return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ ({is_block_level: is_block_level}));
/* 000472 */ 		}) ();
/* 000472 */ 	});},
/* 000475 */ 	get make_fragment () {return __get__ (this, function (self, llm_text) {
/* 000475 */ 		var kwargs = dict ();
/* 000475 */ 		if (arguments.length) {
/* 000475 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000475 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000475 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000475 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000475 */ 					switch (__attrib0__) {
/* 000475 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000475 */ 						case 'llm_text': var llm_text = __allkwargs0__ [__attrib0__]; break;
/* 000475 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000475 */ 					}
/* 000475 */ 				}
/* 000475 */ 				delete kwargs.__kwargtrans__;
/* 000475 */ 			}
/* 000475 */ 		}
/* 000475 */ 		else {
/* 000475 */ 		}
/* 000476 */ 		try {
/* 000477 */ 			var fragment = __call__ (LLMFragment, null, llm_text, __kwargtrans__ (__mergekwargtrans__ ({environment: self}, kwargs)));
/* 000478 */ 			return fragment;
/* 000478 */ 		}
/* 000478 */ 		catch (__except0__) {
/* 000480 */ 			if (__t__ (!__t__ (((function () {
/* 000480 */ 				var __accu0__ = kwargs;
/* 000480 */ 				return __call__ (__accu0__.py_get, __accu0__, 'silent', false);
/* 000480 */ 			}) ())))) {
/* 000481 */ 				(function () {
/* 000481 */ 					var __accu0__ = logger;
/* 000482 */ 					return __call__ (__accu0__.error, __accu0__, (function () {
/* 000482 */ 						var __accu1__ = 'Error compiling fragment for {}\nContent was:\n‘{}’\n';
/* 000483 */ 						return __call__ (__accu1__.format, __accu1__, (function () {
/* 000483 */ 							var __accu2__ = kwargs;
/* 000483 */ 							return __call__ (__accu2__.py_get, __accu2__, 'what', '(unknown)');
/* 000483 */ 						}) (), llm_text, __kwargtrans__ ({exc_info: true}));
/* 000483 */ 					}) ());
/* 000483 */ 				}) ();
/* 000483 */ 			}
/* 000485 */ 			__except0__.__cause__ = null;
/* 000485 */ 			throw __except0__;
/* 000485 */ 		}
/* 000485 */ 	});},
/* 000487 */ 	get node_list_finalizer () {return __get__ (this, function (self) {
/* 000487 */ 		if (arguments.length) {
/* 000487 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000487 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000487 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000487 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000487 */ 					switch (__attrib0__) {
/* 000487 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000487 */ 					}
/* 000487 */ 				}
/* 000487 */ 			}
/* 000487 */ 		}
/* 000487 */ 		else {
/* 000487 */ 		}
/* 000488 */ 		return self._node_list_finalizer;
/* 000488 */ 	});},
/* 000492 */ 	get make_document () {return __get__ (this, function (self, render_callback) {
/* 000492 */ 		var kwargs = dict ();
/* 000492 */ 		if (arguments.length) {
/* 000492 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000492 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000492 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000492 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000492 */ 					switch (__attrib0__) {
/* 000492 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000492 */ 						case 'render_callback': var render_callback = __allkwargs0__ [__attrib0__]; break;
/* 000492 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000492 */ 					}
/* 000492 */ 				}
/* 000492 */ 				delete kwargs.__kwargtrans__;
/* 000492 */ 			}
/* 000492 */ 		}
/* 000492 */ 		else {
/* 000492 */ 		}
/* 000500 */ 		var doc = __call__ (LLMDocument, null, render_callback, __kwargtrans__ (__mergekwargtrans__ ({environment: self}, kwargs)));
/* 000505 */ 		(function () {
/* 000505 */ 			var __accu0__ = doc;
/* 000505 */ 			return __call__ (__accu0__.initialize, __accu0__);
/* 000505 */ 		}) ();
/* 000506 */ 		return doc;
/* 000506 */ 	});},
/* 000509 */ 	get get_parse_error_message () {return __get__ (this, function (self, exception_object) {
/* 000509 */ 		if (arguments.length) {
/* 000509 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000509 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000509 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000509 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000509 */ 					switch (__attrib0__) {
/* 000509 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000509 */ 						case 'exception_object': var exception_object = __allkwargs0__ [__attrib0__]; break;
/* 000509 */ 					}
/* 000509 */ 				}
/* 000509 */ 			}
/* 000509 */ 		}
/* 000509 */ 		else {
/* 000509 */ 		}
/* 000510 */ 		return (function () {
/* 000510 */ 			var __accu0__ = __call__ (LatexWalkerParseErrorFormatter, null, exception_object);
/* 000510 */ 			return __call__ (__accu0__.to_display_string, __accu0__);
/* 000510 */ 		}) ();
/* 000510 */ 	});}
/* 000510 */ });
/* 000006 */ 
//# sourceMappingURL=llm.llmenvironment.map