/* 000001 */ // Transcrypt'ed from Python, 2022-11-13 21:11:22
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
/* 000006 */ export {LatexWalkerParseError, latexwalker, LLMFragment, latexnodes_nodes, LLMDocument, LatexWalkerParseErrorFormatter, latexnodes};
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
/* 000112 */ 				(function () {
/* 000112 */ 					var __accu0__ = logger;
/* 000112 */ 					return __call__ (__accu0__.debug, __accu0__, 'simplifying whitespace for chars node, is_head={} j={} node={} --> node.llm_chars_value={}'.format (is_head, j, node, node.llm_chars_value));
/* 000112 */ 				}) ();
/* 000112 */ 			}
/* 000112 */ 		}
/* 000114 */ 		return paragraph_nodes;
/* 000114 */ 	});},
/* 000116 */ 	get build_blocks () {return __get__ (this, function (self) {
/* 000116 */ 		if (arguments.length) {
/* 000116 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000116 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000116 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000116 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000116 */ 					switch (__attrib0__) {
/* 000116 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000116 */ 					}
/* 000116 */ 				}
/* 000116 */ 			}
/* 000116 */ 		}
/* 000116 */ 		else {
/* 000116 */ 		}
/* 000117 */ 		var latexnodelist = self.latexnodelist;
/* 000121 */ 		assert (__eq__ (__call__ (len, null, self.blocks), 0));
/* 000123 */ 		var __iterable0__ = latexnodelist;
/* 000123 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000123 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000124 */ 			var n_is_block_level = __call__ (getattr, null, n, 'llm_is_block_level', null);
/* 000125 */ 			var n_is_block_heading = __call__ (getattr, null, n, 'llm_is_block_heading', false);
/* 000126 */ 			if (__t__ (n_is_block_level)) {
/* 000128 */ 				(function () {
/* 000128 */ 					var __accu0__ = self;
/* 000128 */ 					return __call__ (__accu0__.flush_paragraph, __accu0__);
/* 000128 */ 				}) ();
/* 000130 */ 				if (__t__ (__call__ (getattr, null, n, 'llm_is_paragraph_break_marker', false))) {
/* 000130 */ 					continue;
/* 000130 */ 				}
/* 000135 */ 				if (__t__ (n_is_block_heading)) {
/* 000139 */ 					(function () {
/* 000139 */ 						var __accu0__ = self.pending_paragraph_nodes;
/* 000139 */ 						return __call__ (__accu0__.append, __accu0__, n);
/* 000139 */ 					}) ();
/* 000139 */ 					continue;
/* 000139 */ 				}
/* 000144 */ 				(function () {
/* 000144 */ 					var __accu0__ = self.blocks;
/* 000144 */ 					return __call__ (__accu0__.append, __accu0__, n);
/* 000144 */ 				}) ();
/* 000144 */ 				continue;
/* 000144 */ 			}
/* 000147 */ 			var paragraph_started_yet = true;
/* 000148 */ 			if (__t__ (!__t__ ((self.pending_paragraph_nodes)))) {
/* 000149 */ 				var paragraph_started_yet = false;
/* 000149 */ 			}
/* 000150 */ 			if (__t__ (__eq__ (__call__ (len, null, self.pending_paragraph_nodes), 1))) {
/* 000151 */ 				if (__t__ (__call__ (getattr, null, __getitem__ (self.pending_paragraph_nodes, 0), 'llm_is_block_heading', false))) {
/* 000153 */ 					var paragraph_started_yet = false;
/* 000153 */ 				}
/* 000153 */ 			}
/* 000156 */ 			if (__t__ (__t__ (!__t__ ((paragraph_started_yet))) && __t__ ((function () {
/* 000156 */ 				var __accu0__ = n;
/* 000156 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000157 */ 			}) ()) && (function () {
/* 000157 */ 				var __accu0__ = self.rx_only_space;
/* 000157 */ 				return __call__ (__accu0__.match, __accu0__, n.chars);
/* 000157 */ 			}) ())) {
/* 000157 */ 				continue;
/* 000157 */ 			}
/* 000163 */ 			(function () {
/* 000163 */ 				var __accu0__ = self.pending_paragraph_nodes;
/* 000163 */ 				return __call__ (__accu0__.append, __accu0__, n);
/* 000163 */ 			}) ();
/* 000163 */ 		}
/* 000166 */ 		(function () {
/* 000166 */ 			var __accu0__ = self;
/* 000166 */ 			return __call__ (__accu0__.flush_paragraph, __accu0__);
/* 000166 */ 		}) ();
/* 000168 */ 		return self.blocks;
/* 000168 */ 	});}
/* 000168 */ });
/* 000172 */ export var NodeListFinalizer =  __class__ ('NodeListFinalizer', [object], {
/* 000172 */ 	__module__: __name__,
/* 000177 */ 	get finalize_nodelist () {return __get__ (this, function (self, latexnodelist) {
/* 000177 */ 		if (arguments.length) {
/* 000177 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000177 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000177 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000177 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000177 */ 					switch (__attrib0__) {
/* 000177 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000177 */ 						case 'latexnodelist': var latexnodelist = __allkwargs0__ [__attrib0__]; break;
/* 000177 */ 					}
/* 000177 */ 				}
/* 000177 */ 			}
/* 000177 */ 		}
/* 000177 */ 		else {
/* 000177 */ 		}
/* 000191 */ 		var is_block_level = latexnodelist.parsing_state.is_block_level;
/* 000192 */ 		if (__t__ (is_block_level === null)) {
/* 000194 */ 			var is_block_level = (function () {
/* 000194 */ 				var __accu0__ = self;
/* 000194 */ 				return __call__ (__accu0__.infer_is_block_level_nodelist, __accu0__, latexnodelist);
/* 000194 */ 			}) ();
/* 000194 */ 		}
/* 000196 */ 		latexnodelist.llm_is_block_level = is_block_level;
/* 000199 */ 		if (__t__ (!__t__ ((is_block_level)))) {
/* 000201 */ 			var __iterable0__ = latexnodelist;
/* 000201 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000201 */ 				var n = __getitem__ (__iterable0__, __index0__);
/* 000202 */ 				if (__t__ (__call__ (getattr, null, n, 'llm_is_block_level', null))) {
/* 000206 */ 					var __except0__ = __call__ (LatexWalkerParseError, null, __kwargtrans__ ({msg: 'Content is not allowed in inline text (not block level): ‘{}’'.format ((function () {
/* 000206 */ 						var __accu0__ = n;
/* 000206 */ 						return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000206 */ 					}) ()), pos: n.pos}));
/* 000206 */ 					__except0__.__cause__ = null;
/* 000206 */ 					throw __except0__;
/* 000206 */ 				}
/* 000210 */ 				if (__t__ ((function () {
/* 000210 */ 					var __accu0__ = n;
/* 000210 */ 					return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000210 */ 				}) ())) {
/* 000211 */ 					n.llm_chars_value = (function () {
/* 000211 */ 						var __accu0__ = self;
/* 000211 */ 						return __call__ (__accu0__.simplify_whitespace_chars_inline, __accu0__, n.chars);
/* 000211 */ 					}) ();
/* 000211 */ 				}
/* 000211 */ 			}
/* 000216 */ 			return latexnodelist;
/* 000216 */ 		}
/* 000220 */ 		if (__t__ (is_block_level)) {
/* 000221 */ 			var blocks_builder = (function () {
/* 000221 */ 				var __accu0__ = self;
/* 000221 */ 				return __call__ (__accu0__.make_blocks_builder, __accu0__, latexnodelist);
/* 000221 */ 			}) ();
/* 000222 */ 			var llm_blocks = (function () {
/* 000222 */ 				var __accu0__ = blocks_builder;
/* 000222 */ 				return __call__ (__accu0__.build_blocks, __accu0__);
/* 000222 */ 			}) ();
/* 000223 */ 			latexnodelist.llm_blocks = llm_blocks;
/* 000223 */ 		}
/* 000225 */ 		return latexnodelist;
/* 000225 */ 	});},
/* 000227 */ 	get infer_is_block_level_nodelist () {return __get__ (this, function (self, latexnodelist) {
/* 000227 */ 		if (arguments.length) {
/* 000227 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000227 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000227 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000227 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000227 */ 					switch (__attrib0__) {
/* 000227 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000227 */ 						case 'latexnodelist': var latexnodelist = __allkwargs0__ [__attrib0__]; break;
/* 000227 */ 					}
/* 000227 */ 				}
/* 000227 */ 			}
/* 000227 */ 		}
/* 000227 */ 		else {
/* 000227 */ 		}
/* 000228 */ 		var __iterable0__ = latexnodelist;
/* 000228 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000228 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000229 */ 			var n_is_block_level = __call__ (getattr, null, n, 'llm_is_block_level', null);
/* 000230 */ 			if (__t__ (n_is_block_level)) {
/* 000231 */ 				return true;
/* 000231 */ 			}
/* 000231 */ 		}
/* 000232 */ 		return false;
/* 000232 */ 	});},
/* 000234 */ 	get simplify_whitespace_chars_inline () {return __get__ (this, function (self, chars) {
/* 000234 */ 		if (arguments.length) {
/* 000234 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000234 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000234 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000234 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000234 */ 					switch (__attrib0__) {
/* 000234 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000234 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000234 */ 					}
/* 000234 */ 				}
/* 000234 */ 			}
/* 000234 */ 		}
/* 000234 */ 		else {
/* 000234 */ 		}
/* 000235 */ 		return (function () {
/* 000235 */ 			var __accu0__ = self.rx_inline_space;
/* 000235 */ 			return __call__ (__accu0__.sub, __accu0__, ' ', chars);
/* 000235 */ 		}) ();
/* 000235 */ 	});},
/* 000237 */ 	make_blocks_builder: BlocksBuilder,
/* 000239 */ 	rx_inline_space: BlocksBuilder.rx_space
/* 000239 */ });
/* 000243 */ export var LLMLatexWalker =  __class__ ('LLMLatexWalker', [latexwalker.LatexWalker], {
/* 000243 */ 	__module__: __name__,
/* 000256 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000256 */ 		var parsing_state_event_handler = null;
/* 000256 */ 		var standalone_mode = false;
/* 000256 */ 		var resource_info = null;
/* 000256 */ 		var parsing_mode = null;
/* 000256 */ 		var what = null;
/* 000256 */ 		var kwargs = dict ();
/* 000256 */ 		if (arguments.length) {
/* 000256 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000256 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000256 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000256 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000256 */ 					switch (__attrib0__) {
/* 000256 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000256 */ 						case 'llm_text': var llm_text = __allkwargs0__ [__attrib0__]; break;
/* 000256 */ 						case 'default_parsing_state': var default_parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000256 */ 						case 'llm_environment': var llm_environment = __allkwargs0__ [__attrib0__]; break;
/* 000256 */ 						case 'parsing_state_event_handler': var parsing_state_event_handler = __allkwargs0__ [__attrib0__]; break;
/* 000256 */ 						case 'standalone_mode': var standalone_mode = __allkwargs0__ [__attrib0__]; break;
/* 000256 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000256 */ 						case 'parsing_mode': var parsing_mode = __allkwargs0__ [__attrib0__]; break;
/* 000256 */ 						case 'what': var what = __allkwargs0__ [__attrib0__]; break;
/* 000256 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000256 */ 					}
/* 000256 */ 				}
/* 000256 */ 				delete kwargs.__kwargtrans__;
/* 000256 */ 			}
/* 000256 */ 		}
/* 000256 */ 		else {
/* 000256 */ 		}
/* 000268 */ 		__call__ (__call__ (__super__, null, LLMLatexWalker, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({s: llm_text, default_parsing_state: default_parsing_state}, kwargs)));
/* 000274 */ 		self.llm_environment = llm_environment;
/* 000276 */ 		self.standalone_mode = standalone_mode;
/* 000280 */ 		self.resource_info = resource_info;
/* 000282 */ 		self.what = what;
/* 000285 */ 		self.parsing_mode = parsing_mode;
/* 000287 */ 		self._parsing_state_event_handler = parsing_state_event_handler;
/* 000287 */ 	});},
/* 000289 */ 	get parsing_state_event_handler () {return __get__ (this, function (self) {
/* 000289 */ 		if (arguments.length) {
/* 000289 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000289 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000289 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000289 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000289 */ 					switch (__attrib0__) {
/* 000289 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000289 */ 					}
/* 000289 */ 				}
/* 000289 */ 			}
/* 000289 */ 		}
/* 000289 */ 		else {
/* 000289 */ 		}
/* 000290 */ 		if (__t__ (self._parsing_state_event_handler)) {
/* 000291 */ 			return self._parsing_state_event_handler;
/* 000291 */ 		}
/* 000292 */ 		return __call__ (__call__ (__super__, null, LLMLatexWalker, 'parsing_state_event_handler'), null, self);
/* 000292 */ 	});},
/* 000294 */ 	get make_nodelist () {return __get__ (this, function (self, nodelist, parsing_state) {
/* 000294 */ 		var kwargs = dict ();
/* 000294 */ 		if (arguments.length) {
/* 000294 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000294 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000294 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000294 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000294 */ 					switch (__attrib0__) {
/* 000294 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000294 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000294 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000294 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000294 */ 					}
/* 000294 */ 				}
/* 000294 */ 				delete kwargs.__kwargtrans__;
/* 000294 */ 			}
/* 000294 */ 		}
/* 000294 */ 		else {
/* 000294 */ 		}
/* 000295 */ 		var nl = __call__ (__call__ (__super__, null, LLMLatexWalker, 'make_nodelist'), null, self, __kwargtrans__ (__mergekwargtrans__ ({nodelist: nodelist, parsing_state: parsing_state}, kwargs)));
/* 000297 */ 		var nl = (function () {
/* 000297 */ 			var __accu0__ = (function () {
/* 000297 */ 				var __accu1__ = self.llm_environment;
/* 000297 */ 				return __call__ (__accu1__.node_list_finalizer, __accu1__);
/* 000297 */ 			}) ();
/* 000297 */ 			return __call__ (__accu0__.finalize_nodelist, __accu0__, nl);
/* 000297 */ 		}) ();
/* 000298 */ 		return nl;
/* 000298 */ 	});},
/* 000302 */ 	get filter_whitespace_comments_nodes () {return __get__ (this, function (self, nodelist) {
/* 000302 */ 		if (arguments.length) {
/* 000302 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000302 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000302 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000302 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000302 */ 					switch (__attrib0__) {
/* 000302 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000302 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000302 */ 					}
/* 000302 */ 				}
/* 000302 */ 			}
/* 000302 */ 		}
/* 000302 */ 		else {
/* 000302 */ 		}
/* 000307 */ 		return (function () {
/* 000307 */ 			var __accu0__ = nodelist;
/* 000307 */ 			return __call__ (__accu0__.filter, __accu0__, __kwargtrans__ ({node_predicate_fn: self._filter_whitespace_comments_nodes_predicate, skip_none: true, skip_comments: true, skip_whitespace_char_nodes: true}));
/* 000307 */ 		}) ();
/* 000307 */ 	});},
/* 000314 */ 	get _filter_whitespace_comments_nodes_predicate () {return __get__ (this, function (self, node) {
/* 000314 */ 		if (arguments.length) {
/* 000314 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000314 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000314 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000314 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000314 */ 					switch (__attrib0__) {
/* 000314 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000314 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000314 */ 					}
/* 000314 */ 				}
/* 000314 */ 			}
/* 000314 */ 		}
/* 000314 */ 		else {
/* 000314 */ 		}
/* 000315 */ 		if (__t__ (__call__ (getattr, null, node, 'llm_is_paragraph_break_marker', false))) {
/* 000316 */ 			return false;
/* 000316 */ 		}
/* 000317 */ 		return true;
/* 000317 */ 	});}
/* 000317 */ });
/* 000321 */ export var LLMEnvironment =  __class__ ('LLMEnvironment', [object], {
/* 000321 */ 	__module__: __name__,
/* 000340 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000340 */ 		var parsing_mode_deltas = null;
/* 000340 */ 		var tolerant_parsing = false;
/* 000340 */ 		if (arguments.length) {
/* 000340 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000340 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000340 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000340 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000340 */ 					switch (__attrib0__) {
/* 000340 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000340 */ 						case 'latex_context': var latex_context = __allkwargs0__ [__attrib0__]; break;
/* 000340 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000340 */ 						case 'features': var features = __allkwargs0__ [__attrib0__]; break;
/* 000340 */ 						case 'parsing_mode_deltas': var parsing_mode_deltas = __allkwargs0__ [__attrib0__]; break;
/* 000340 */ 						case 'tolerant_parsing': var tolerant_parsing = __allkwargs0__ [__attrib0__]; break;
/* 000340 */ 					}
/* 000340 */ 				}
/* 000340 */ 			}
/* 000340 */ 		}
/* 000340 */ 		else {
/* 000340 */ 		}
/* 000349 */ 		__call__ (__call__ (__super__, null, LLMEnvironment, '__init__'), null, self);
/* 000351 */ 		(function () {
/* 000351 */ 			var __accu0__ = logger;
/* 000351 */ 			return __call__ (__accu0__.debug, __accu0__, 'LLMEnvironment constructor');
/* 000351 */ 		}) ();
/* 000353 */ 		(function () {
/* 000353 */ 			var __accu0__ = logger;
/* 000353 */ 			return __call__ (__accu0__.debug, __accu0__, 'features={}'.format (features));
/* 000353 */ 		}) ();
/* 000355 */ 		self.latex_context = latex_context;
/* 000356 */ 		self.parsing_state = parsing_state;
/* 000358 */ 		self.parsing_mode_deltas = (__t__ (parsing_mode_deltas) ? __call__ (dict, null, parsing_mode_deltas) : dict ({}));
/* 000360 */ 		self.features = __call__ (list, null, features);
/* 000365 */ 		self.features_by_name = dict ({});
/* 000366 */ 		var __iterable0__ = self.features;
/* 000366 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000366 */ 			var feature = __getitem__ (__iterable0__, __index0__);
/* 000367 */ 			if (__t__ (__in__ (feature.feature_name, self.features_by_name))) {
/* 000368 */ 				var __except0__ = __call__ (ValueError, null, 'Duplicate feature detected: feature {} has same name/role as the as already-included feature {}'.format (feature, __getitem__ (self.features_by_name, feature.feature_name)));
/* 000368 */ 				__except0__.__cause__ = null;
/* 000368 */ 				throw __except0__;
/* 000368 */ 			}
/* 000373 */ 			__setitem__ (self.features_by_name, feature.feature_name, feature);
/* 000373 */ 		}
/* 000375 */ 		self.tolerant_parsing = tolerant_parsing;
/* 000377 */ 		self._node_list_finalizer = __call__ (NodeListFinalizer, null);
/* 000379 */ 		if (__t__ (self.parsing_state.latex_context === null)) {
/* 000382 */ 			var __iterable0__ = self.features;
/* 000382 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000382 */ 				var f = __getitem__ (__iterable0__, __index0__);
/* 000383 */ 				var moredefs = (function () {
/* 000383 */ 					var __accu0__ = f;
/* 000383 */ 					return __call__ (__accu0__.add_latex_context_definitions, __accu0__);
/* 000383 */ 				}) ();
/* 000384 */ 				if (__t__ (moredefs)) {
/* 000385 */ 					(function () {
/* 000385 */ 						var __accu0__ = logger;
/* 000385 */ 						return __call__ (__accu0__.debug, __accu0__, 'Adding definitions for “{}”'.format (f.feature_name));
/* 000385 */ 					}) ();
/* 000386 */ 					var moredefs2 = __call__ (dict, null, moredefs);
/* 000387 */ 					(function () {
/* 000387 */ 						var __accu0__ = moredefs2;
/* 000387 */ 						return __call__ (__accu0__.py_update, __accu0__, __kwargtrans__ ({prepend: true}));
/* 000387 */ 					}) ();
/* 000388 */ 					(function () {
/* 000388 */ 						var __accu0__ = self.latex_context;
/* 000388 */ 						return __call__ (__accu0__.add_context_category, __accu0__, 'feature--{}'.format (f.feature_name), __kwargtrans__ (moredefs2));
/* 000388 */ 					}) ();
/* 000388 */ 				}
/* 000388 */ 			}
/* 000394 */ 			(function () {
/* 000394 */ 				var __accu0__ = self.latex_context;
/* 000394 */ 				return __call__ (__accu0__.freeze, __accu0__);
/* 000394 */ 			}) ();
/* 000397 */ 			self.parsing_state.latex_context = self.latex_context;
/* 000397 */ 		}
/* 000399 */ 		else if (__t__ (self.latex_context !== null)) {
/* 000402 */ 			var __except0__ = __call__ (RuntimeError, null, 'The specified `parsing_state` instance already has a latex_context set');
/* 000402 */ 			__except0__.__cause__ = null;
/* 000402 */ 			throw __except0__;
/* 000402 */ 		}
/* 000402 */ 	});},
/* 000407 */ 	get feature () {return __get__ (this, function (self, feature_name) {
/* 000407 */ 		if (arguments.length) {
/* 000407 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000407 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000407 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000407 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000407 */ 					switch (__attrib0__) {
/* 000407 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000407 */ 						case 'feature_name': var feature_name = __allkwargs0__ [__attrib0__]; break;
/* 000407 */ 					}
/* 000407 */ 				}
/* 000407 */ 			}
/* 000407 */ 		}
/* 000407 */ 		else {
/* 000407 */ 		}
/* 000408 */ 		return __getitem__ (self.features_by_name, feature_name);
/* 000408 */ 	});},
/* 000411 */ 	parsing_state_event_handler: null,
/* 000413 */ 	get make_latex_walker () {return __get__ (this, function (self, llm_text) {
/* 000413 */ 		var parsing_mode = null;
/* 000413 */ 		var resource_info = null;
/* 000413 */ 		var tolerant_parsing = null;
/* 000413 */ 		var what = null;
/* 000413 */ 		var input_lineno_colno_offsets = null;
/* 000413 */ 		if (arguments.length) {
/* 000413 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000413 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000413 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000413 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000413 */ 					switch (__attrib0__) {
/* 000413 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000413 */ 						case 'llm_text': var llm_text = __allkwargs0__ [__attrib0__]; break;
/* 000413 */ 						case 'standalone_mode': var standalone_mode = __allkwargs0__ [__attrib0__]; break;
/* 000413 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000413 */ 						case 'parsing_mode': var parsing_mode = __allkwargs0__ [__attrib0__]; break;
/* 000413 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000413 */ 						case 'tolerant_parsing': var tolerant_parsing = __allkwargs0__ [__attrib0__]; break;
/* 000413 */ 						case 'what': var what = __allkwargs0__ [__attrib0__]; break;
/* 000413 */ 						case 'input_lineno_colno_offsets': var input_lineno_colno_offsets = __allkwargs0__ [__attrib0__]; break;
/* 000413 */ 					}
/* 000413 */ 				}
/* 000413 */ 			}
/* 000413 */ 		}
/* 000413 */ 		else {
/* 000413 */ 		}
/* 000426 */ 		var default_parsing_state = (function () {
/* 000426 */ 			var __accu0__ = self;
/* 000426 */ 			return __call__ (__accu0__.make_parsing_state, __accu0__, __kwargtrans__ ({is_block_level: is_block_level, parsing_mode: parsing_mode}));
/* 000426 */ 		}) ();
/* 000431 */ 		if (__t__ (tolerant_parsing === null)) {
/* 000432 */ 			var tolerant_parsing = self.tolerant_parsing;
/* 000432 */ 		}
/* 000434 */ 		if (__t__ (input_lineno_colno_offsets === null)) {
/* 000435 */ 			var input_lineno_colno_offsets = dict ({});
/* 000435 */ 		}
/* 000448 */ 		var latex_walker = __call__ (LLMLatexWalker, null, __kwargtrans__ ({llm_text: llm_text, default_parsing_state: default_parsing_state, tolerant_parsing: tolerant_parsing, llm_environment: self, standalone_mode: standalone_mode, resource_info: resource_info, what: what, parsing_state_event_handler: self.parsing_state_event_handler, line_number_offset: (function () {
/* 000448 */ 			var __accu0__ = input_lineno_colno_offsets;
/* 000448 */ 			return __call__ (__accu0__.py_get, __accu0__, 'line_number_offset', null);
/* 000450 */ 		}) (), first_line_column_offset: (function () {
/* 000450 */ 			var __accu0__ = input_lineno_colno_offsets;
/* 000450 */ 			return __call__ (__accu0__.py_get, __accu0__, 'first_line_column_offset', null);
/* 000451 */ 		}) (), column_offset: (function () {
/* 000451 */ 			var __accu0__ = input_lineno_colno_offsets;
/* 000451 */ 			return __call__ (__accu0__.py_get, __accu0__, 'column_offset', null);
/* 000451 */ 		}) ()}));
/* 000454 */ 		return latex_walker;
/* 000454 */ 	});},
/* 000456 */ 	get make_parsing_state () {return __get__ (this, function (self, is_block_level, parsing_mode) {
/* 000456 */ 		if (typeof parsing_mode == 'undefined' || (parsing_mode != null && parsing_mode.hasOwnProperty ("__kwargtrans__"))) {;
/* 000456 */ 			var parsing_mode = null;
/* 000456 */ 		};
/* 000456 */ 		if (arguments.length) {
/* 000456 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000456 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000456 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000456 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000456 */ 					switch (__attrib0__) {
/* 000456 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000456 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000456 */ 						case 'parsing_mode': var parsing_mode = __allkwargs0__ [__attrib0__]; break;
/* 000456 */ 					}
/* 000456 */ 				}
/* 000456 */ 			}
/* 000456 */ 		}
/* 000456 */ 		else {
/* 000456 */ 		}
/* 000460 */ 		var default_parsing_state = self.parsing_state;
/* 000462 */ 		if (__t__ (parsing_mode !== null)) {
/* 000463 */ 			try {
/* 000464 */ 				var parsing_state_delta = __getitem__ (self.parsing_mode_deltas, parsing_mode);
/* 000464 */ 			}
/* 000464 */ 			catch (__except0__) {
/* 000464 */ 				if (isinstance (__except0__, KeyError)) {
/* 000464 */ 					var e = __except0__;
/* 000466 */ 					var __except1__ = __call__ (ValueError, null, 'Invalid parsing_mode ‘{}’'.format (parsing_mode));
/* 000466 */ 					__except1__.__cause__ = null;
/* 000466 */ 					throw __except1__;
/* 000466 */ 				}
/* 000466 */ 				else {
/* 000466 */ 					throw __except0__;
/* 000466 */ 				}
/* 000466 */ 			}
/* 000468 */ 			if (__t__ (parsing_state_delta !== null)) {
/* 000469 */ 				var default_parsing_state = (function () {
/* 000469 */ 					var __accu0__ = parsing_state_delta;
/* 000469 */ 					return __call__ (__accu0__.get_updated_parsing_state, __accu0__, default_parsing_state, __kwargtrans__ ({latex_walker: null}));
/* 000469 */ 				}) ();
/* 000469 */ 			}
/* 000469 */ 		}
/* 000474 */ 		return (function () {
/* 000474 */ 			var __accu0__ = default_parsing_state;
/* 000474 */ 			return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ ({is_block_level: is_block_level}));
/* 000474 */ 		}) ();
/* 000474 */ 	});},
/* 000477 */ 	get make_fragment () {return __get__ (this, function (self, llm_text) {
/* 000477 */ 		var kwargs = dict ();
/* 000477 */ 		if (arguments.length) {
/* 000477 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000477 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000477 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000477 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000477 */ 					switch (__attrib0__) {
/* 000477 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000477 */ 						case 'llm_text': var llm_text = __allkwargs0__ [__attrib0__]; break;
/* 000477 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000477 */ 					}
/* 000477 */ 				}
/* 000477 */ 				delete kwargs.__kwargtrans__;
/* 000477 */ 			}
/* 000477 */ 		}
/* 000477 */ 		else {
/* 000477 */ 		}
/* 000478 */ 		try {
/* 000479 */ 			var fragment = __call__ (LLMFragment, null, llm_text, __kwargtrans__ (__mergekwargtrans__ ({environment: self}, kwargs)));
/* 000480 */ 			return fragment;
/* 000480 */ 		}
/* 000480 */ 		catch (__except0__) {
/* 000482 */ 			if (__t__ (!__t__ (((function () {
/* 000482 */ 				var __accu0__ = kwargs;
/* 000482 */ 				return __call__ (__accu0__.py_get, __accu0__, 'silent', false);
/* 000482 */ 			}) ())))) {
/* 000483 */ 				(function () {
/* 000483 */ 					var __accu0__ = logger;
/* 000484 */ 					return __call__ (__accu0__.error, __accu0__, (function () {
/* 000484 */ 						var __accu1__ = 'Error compiling fragment for {}\nContent was:\n‘{}’\n';
/* 000485 */ 						return __call__ (__accu1__.format, __accu1__, (function () {
/* 000485 */ 							var __accu2__ = kwargs;
/* 000485 */ 							return __call__ (__accu2__.py_get, __accu2__, 'what', '(unknown)');
/* 000485 */ 						}) (), llm_text, __kwargtrans__ ({exc_info: true}));
/* 000485 */ 					}) ());
/* 000485 */ 				}) ();
/* 000485 */ 			}
/* 000487 */ 			__except0__.__cause__ = null;
/* 000487 */ 			throw __except0__;
/* 000487 */ 		}
/* 000487 */ 	});},
/* 000489 */ 	get node_list_finalizer () {return __get__ (this, function (self) {
/* 000489 */ 		if (arguments.length) {
/* 000489 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000489 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000489 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000489 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000489 */ 					switch (__attrib0__) {
/* 000489 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000489 */ 					}
/* 000489 */ 				}
/* 000489 */ 			}
/* 000489 */ 		}
/* 000489 */ 		else {
/* 000489 */ 		}
/* 000490 */ 		return self._node_list_finalizer;
/* 000490 */ 	});},
/* 000494 */ 	get make_document () {return __get__ (this, function (self, render_callback) {
/* 000494 */ 		var kwargs = dict ();
/* 000494 */ 		if (arguments.length) {
/* 000494 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000494 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000494 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000494 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000494 */ 					switch (__attrib0__) {
/* 000494 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000494 */ 						case 'render_callback': var render_callback = __allkwargs0__ [__attrib0__]; break;
/* 000494 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000494 */ 					}
/* 000494 */ 				}
/* 000494 */ 				delete kwargs.__kwargtrans__;
/* 000494 */ 			}
/* 000494 */ 		}
/* 000494 */ 		else {
/* 000494 */ 		}
/* 000502 */ 		var doc = __call__ (LLMDocument, null, render_callback, __kwargtrans__ (__mergekwargtrans__ ({environment: self}, kwargs)));
/* 000507 */ 		(function () {
/* 000507 */ 			var __accu0__ = doc;
/* 000507 */ 			return __call__ (__accu0__.initialize, __accu0__);
/* 000507 */ 		}) ();
/* 000508 */ 		return doc;
/* 000508 */ 	});},
/* 000511 */ 	get get_parse_error_message () {return __get__ (this, function (self, exception_object) {
/* 000511 */ 		if (arguments.length) {
/* 000511 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000511 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000511 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000511 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000511 */ 					switch (__attrib0__) {
/* 000511 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000511 */ 						case 'exception_object': var exception_object = __allkwargs0__ [__attrib0__]; break;
/* 000511 */ 					}
/* 000511 */ 				}
/* 000511 */ 			}
/* 000511 */ 		}
/* 000511 */ 		else {
/* 000511 */ 		}
/* 000512 */ 		return (function () {
/* 000512 */ 			var __accu0__ = __call__ (LatexWalkerParseErrorFormatter, null, exception_object);
/* 000512 */ 			return __call__ (__accu0__.to_display_string, __accu0__);
/* 000512 */ 		}) ();
/* 000512 */ 	});}
/* 000512 */ });
/* 000006 */ 
//# sourceMappingURL=llm.llmenvironment.map