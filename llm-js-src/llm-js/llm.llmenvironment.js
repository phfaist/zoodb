/* 000001 */ // Transcrypt'ed from Python, 2022-09-11 22:27:56
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
/* 000006 */ export {LLMFragment, latexwalker, LLMDocument, LatexWalkerParseErrorFormatter, latexnodes, LatexWalkerParseError, latexnodes_nodes};
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
/* 000076 */ 				return __call__ (__accu1__.LatexNodeList, __accu1__, paragraph_nodes);
/* 000076 */ 			}) ());
/* 000076 */ 		}) ();
/* 000078 */ 		self.pending_paragraph_nodes = [];
/* 000078 */ 	});},
/* 000080 */ 	get simplify_whitespace_chars () {return __get__ (this, function (self, chars, is_head, is_tail) {
/* 000080 */ 		if (typeof is_head == 'undefined' || (is_head != null && is_head.hasOwnProperty ("__kwargtrans__"))) {;
/* 000080 */ 			var is_head = false;
/* 000080 */ 		};
/* 000080 */ 		if (typeof is_tail == 'undefined' || (is_tail != null && is_tail.hasOwnProperty ("__kwargtrans__"))) {;
/* 000080 */ 			var is_tail = false;
/* 000080 */ 		};
/* 000080 */ 		if (arguments.length) {
/* 000080 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000080 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000080 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000080 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000080 */ 					switch (__attrib0__) {
/* 000080 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000080 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000080 */ 						case 'is_head': var is_head = __allkwargs0__ [__attrib0__]; break;
/* 000080 */ 						case 'is_tail': var is_tail = __allkwargs0__ [__attrib0__]; break;
/* 000080 */ 					}
/* 000080 */ 				}
/* 000080 */ 			}
/* 000080 */ 		}
/* 000080 */ 		else {
/* 000080 */ 		}
/* 000081 */ 		var newchars = (function () {
/* 000081 */ 			var __accu0__ = self.rx_space;
/* 000081 */ 			return __call__ (__accu0__.sub, __accu0__, ' ', chars);
/* 000081 */ 		}) ();
/* 000082 */ 		if (__t__ (is_head)) {
/* 000083 */ 			var newchars = (function () {
/* 000083 */ 				var __accu0__ = newchars;
/* 000083 */ 				return __call__ (__accu0__.lstrip, __accu0__);
/* 000083 */ 			}) ();
/* 000083 */ 		}
/* 000084 */ 		if (__t__ (is_tail)) {
/* 000085 */ 			var newchars = (function () {
/* 000085 */ 				var __accu0__ = newchars;
/* 000085 */ 				return __call__ (__accu0__.rstrip, __accu0__);
/* 000085 */ 			}) ();
/* 000085 */ 		}
/* 000086 */ 		return newchars;
/* 000086 */ 	});},
/* 000088 */ 	get finalize_paragraph () {return __get__ (this, function (self, paragraph_nodes) {
/* 000088 */ 		if (arguments.length) {
/* 000088 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000088 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000088 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000088 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000088 */ 					switch (__attrib0__) {
/* 000088 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000088 */ 						case 'paragraph_nodes': var paragraph_nodes = __allkwargs0__ [__attrib0__]; break;
/* 000088 */ 					}
/* 000088 */ 				}
/* 000088 */ 			}
/* 000088 */ 		}
/* 000088 */ 		else {
/* 000088 */ 		}
/* 000089 */ 		if (__t__ (!__t__ ((paragraph_nodes)))) {
/* 000090 */ 			return paragraph_nodes;
/* 000090 */ 		}
/* 000093 */ 		var lastj = __sub__ (__call__ (len, null, paragraph_nodes), 1);
/* 000094 */ 		var __iterable0__ = __call__ (enumerate, null, paragraph_nodes);
/* 000094 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000094 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000094 */ 			var j = __left0__ [0];
/* 000094 */ 			var node = __left0__ [1];
/* 000096 */ 			var is_head = __eq__ (j, 0);
/* 000097 */ 			if (__t__ (__t__ (__eq__ (j, 1)) && __call__ (getattr, null, __getitem__ (paragraph_nodes, 0), 'llm_is_block_heading', false))) {
/* 000100 */ 				var is_head = true;
/* 000100 */ 			}
/* 000102 */ 			if (__t__ ((function () {
/* 000102 */ 				var __accu0__ = node;
/* 000102 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000102 */ 			}) ())) {
/* 000103 */ 				node.llm_chars_value = (function () {
/* 000103 */ 					var __accu0__ = self;
/* 000103 */ 					return __call__ (__accu0__.simplify_whitespace_chars, __accu0__, node.chars, __kwargtrans__ ({is_head: is_head, is_tail: __eq__ (j, lastj)}));
/* 000103 */ 				}) ();
/* 000108 */ 				// pass;
/* 000108 */ 			}
/* 000108 */ 		}
/* 000112 */ 		return paragraph_nodes;
/* 000112 */ 	});},
/* 000114 */ 	get build_blocks () {return __get__ (this, function (self) {
/* 000114 */ 		if (arguments.length) {
/* 000114 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000114 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000114 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000114 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000114 */ 					switch (__attrib0__) {
/* 000114 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000114 */ 					}
/* 000114 */ 				}
/* 000114 */ 			}
/* 000114 */ 		}
/* 000114 */ 		else {
/* 000114 */ 		}
/* 000115 */ 		var latexnodelist = self.latexnodelist;
/* 000119 */ 		assert (__eq__ (__call__ (len, null, self.blocks), 0));
/* 000121 */ 		var __iterable0__ = latexnodelist;
/* 000121 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000121 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000122 */ 			var n_is_block_level = __call__ (getattr, null, n, 'llm_is_block_level', null);
/* 000123 */ 			var n_is_block_heading = __call__ (getattr, null, n, 'llm_is_block_heading', false);
/* 000124 */ 			if (__t__ (n_is_block_level)) {
/* 000126 */ 				(function () {
/* 000126 */ 					var __accu0__ = self;
/* 000126 */ 					return __call__ (__accu0__.flush_paragraph, __accu0__);
/* 000126 */ 				}) ();
/* 000128 */ 				if (__t__ (__call__ (getattr, null, n, 'llm_is_paragraph_break_marker', false))) {
/* 000128 */ 					continue;
/* 000128 */ 				}
/* 000133 */ 				if (__t__ (n_is_block_heading)) {
/* 000137 */ 					(function () {
/* 000137 */ 						var __accu0__ = self.pending_paragraph_nodes;
/* 000137 */ 						return __call__ (__accu0__.append, __accu0__, n);
/* 000137 */ 					}) ();
/* 000137 */ 					continue;
/* 000137 */ 				}
/* 000142 */ 				(function () {
/* 000142 */ 					var __accu0__ = self.blocks;
/* 000142 */ 					return __call__ (__accu0__.append, __accu0__, n);
/* 000142 */ 				}) ();
/* 000142 */ 				continue;
/* 000142 */ 			}
/* 000145 */ 			var paragraph_started_yet = true;
/* 000146 */ 			if (__t__ (!__t__ ((self.pending_paragraph_nodes)))) {
/* 000147 */ 				var paragraph_started_yet = false;
/* 000147 */ 			}
/* 000148 */ 			if (__t__ (__eq__ (__call__ (len, null, self.pending_paragraph_nodes), 1))) {
/* 000149 */ 				if (__t__ (__call__ (getattr, null, __getitem__ (self.pending_paragraph_nodes, 0), 'llm_is_block_heading', false))) {
/* 000151 */ 					var paragraph_started_yet = false;
/* 000151 */ 				}
/* 000151 */ 			}
/* 000154 */ 			if (__t__ (__t__ (!__t__ ((paragraph_started_yet))) && __t__ ((function () {
/* 000154 */ 				var __accu0__ = n;
/* 000154 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000155 */ 			}) ()) && (function () {
/* 000155 */ 				var __accu0__ = self.rx_only_space;
/* 000155 */ 				return __call__ (__accu0__.match, __accu0__, n.chars);
/* 000155 */ 			}) ())) {
/* 000155 */ 				continue;
/* 000155 */ 			}
/* 000161 */ 			(function () {
/* 000161 */ 				var __accu0__ = self.pending_paragraph_nodes;
/* 000161 */ 				return __call__ (__accu0__.append, __accu0__, n);
/* 000161 */ 			}) ();
/* 000161 */ 		}
/* 000164 */ 		(function () {
/* 000164 */ 			var __accu0__ = self;
/* 000164 */ 			return __call__ (__accu0__.flush_paragraph, __accu0__);
/* 000164 */ 		}) ();
/* 000166 */ 		return self.blocks;
/* 000166 */ 	});}
/* 000166 */ });
/* 000170 */ export var NodeListFinalizer =  __class__ ('NodeListFinalizer', [object], {
/* 000170 */ 	__module__: __name__,
/* 000175 */ 	get finalize_nodelist () {return __get__ (this, function (self, latexnodelist) {
/* 000175 */ 		if (arguments.length) {
/* 000175 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000175 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000175 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000175 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000175 */ 					switch (__attrib0__) {
/* 000175 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000175 */ 						case 'latexnodelist': var latexnodelist = __allkwargs0__ [__attrib0__]; break;
/* 000175 */ 					}
/* 000175 */ 				}
/* 000175 */ 			}
/* 000175 */ 		}
/* 000175 */ 		else {
/* 000175 */ 		}
/* 000189 */ 		var is_block_level = latexnodelist.parsing_state.is_block_level;
/* 000190 */ 		if (__t__ (is_block_level === null)) {
/* 000192 */ 			var is_block_level = (function () {
/* 000192 */ 				var __accu0__ = self;
/* 000192 */ 				return __call__ (__accu0__.infer_is_block_level_nodelist, __accu0__, latexnodelist);
/* 000192 */ 			}) ();
/* 000192 */ 		}
/* 000194 */ 		latexnodelist.llm_is_block_level = is_block_level;
/* 000197 */ 		if (__t__ (!__t__ ((is_block_level)))) {
/* 000199 */ 			var __iterable0__ = latexnodelist;
/* 000199 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000199 */ 				var n = __getitem__ (__iterable0__, __index0__);
/* 000200 */ 				if (__t__ (__call__ (getattr, null, n, 'llm_is_block_level', null))) {
/* 000204 */ 					var __except0__ = __call__ (LatexWalkerParseError, null, __kwargtrans__ ({msg: 'Content is not allowed in inline text (not block level): ‘{}’'.format ((function () {
/* 000204 */ 						var __accu0__ = n;
/* 000204 */ 						return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000204 */ 					}) ()), pos: n.pos}));
/* 000204 */ 					__except0__.__cause__ = null;
/* 000204 */ 					throw __except0__;
/* 000204 */ 				}
/* 000208 */ 				if (__t__ ((function () {
/* 000208 */ 					var __accu0__ = n;
/* 000208 */ 					return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000208 */ 				}) ())) {
/* 000209 */ 					n.llm_chars_value = (function () {
/* 000209 */ 						var __accu0__ = self;
/* 000209 */ 						return __call__ (__accu0__.simplify_whitespace_chars_inline, __accu0__, n.chars);
/* 000209 */ 					}) ();
/* 000209 */ 				}
/* 000209 */ 			}
/* 000214 */ 			return latexnodelist;
/* 000214 */ 		}
/* 000218 */ 		if (__t__ (is_block_level)) {
/* 000219 */ 			var blocks_builder = (function () {
/* 000219 */ 				var __accu0__ = self;
/* 000219 */ 				return __call__ (__accu0__.make_blocks_builder, __accu0__, latexnodelist);
/* 000219 */ 			}) ();
/* 000220 */ 			var llm_blocks = (function () {
/* 000220 */ 				var __accu0__ = blocks_builder;
/* 000220 */ 				return __call__ (__accu0__.build_blocks, __accu0__);
/* 000220 */ 			}) ();
/* 000221 */ 			latexnodelist.llm_blocks = llm_blocks;
/* 000221 */ 		}
/* 000223 */ 		return latexnodelist;
/* 000223 */ 	});},
/* 000225 */ 	get infer_is_block_level_nodelist () {return __get__ (this, function (self, latexnodelist) {
/* 000225 */ 		if (arguments.length) {
/* 000225 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000225 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000225 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000225 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000225 */ 					switch (__attrib0__) {
/* 000225 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000225 */ 						case 'latexnodelist': var latexnodelist = __allkwargs0__ [__attrib0__]; break;
/* 000225 */ 					}
/* 000225 */ 				}
/* 000225 */ 			}
/* 000225 */ 		}
/* 000225 */ 		else {
/* 000225 */ 		}
/* 000226 */ 		var __iterable0__ = latexnodelist;
/* 000226 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000226 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000227 */ 			var n_is_block_level = __call__ (getattr, null, n, 'llm_is_block_level', null);
/* 000228 */ 			if (__t__ (n_is_block_level)) {
/* 000229 */ 				return true;
/* 000229 */ 			}
/* 000229 */ 		}
/* 000230 */ 		return false;
/* 000230 */ 	});},
/* 000232 */ 	get simplify_whitespace_chars_inline () {return __get__ (this, function (self, chars) {
/* 000232 */ 		if (arguments.length) {
/* 000232 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000232 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000232 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000232 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000232 */ 					switch (__attrib0__) {
/* 000232 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000232 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000232 */ 					}
/* 000232 */ 				}
/* 000232 */ 			}
/* 000232 */ 		}
/* 000232 */ 		else {
/* 000232 */ 		}
/* 000233 */ 		return (function () {
/* 000233 */ 			var __accu0__ = self.rx_inline_space;
/* 000233 */ 			return __call__ (__accu0__.sub, __accu0__, ' ', chars);
/* 000233 */ 		}) ();
/* 000233 */ 	});},
/* 000235 */ 	make_blocks_builder: BlocksBuilder,
/* 000237 */ 	rx_inline_space: BlocksBuilder.rx_space
/* 000237 */ });
/* 000241 */ export var LLMLatexWalker =  __class__ ('LLMLatexWalker', [latexwalker.LatexWalker], {
/* 000241 */ 	__module__: __name__,
/* 000254 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000254 */ 		var parsing_state_event_handler = null;
/* 000254 */ 		var standalone_mode = false;
/* 000254 */ 		var resource_info = null;
/* 000254 */ 		var parsing_mode = null;
/* 000254 */ 		var what = null;
/* 000254 */ 		var kwargs = dict ();
/* 000254 */ 		if (arguments.length) {
/* 000254 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000254 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000254 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000254 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000254 */ 					switch (__attrib0__) {
/* 000254 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000254 */ 						case 'llm_text': var llm_text = __allkwargs0__ [__attrib0__]; break;
/* 000254 */ 						case 'default_parsing_state': var default_parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000254 */ 						case 'llm_environment': var llm_environment = __allkwargs0__ [__attrib0__]; break;
/* 000254 */ 						case 'parsing_state_event_handler': var parsing_state_event_handler = __allkwargs0__ [__attrib0__]; break;
/* 000254 */ 						case 'standalone_mode': var standalone_mode = __allkwargs0__ [__attrib0__]; break;
/* 000254 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000254 */ 						case 'parsing_mode': var parsing_mode = __allkwargs0__ [__attrib0__]; break;
/* 000254 */ 						case 'what': var what = __allkwargs0__ [__attrib0__]; break;
/* 000254 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000254 */ 					}
/* 000254 */ 				}
/* 000254 */ 				delete kwargs.__kwargtrans__;
/* 000254 */ 			}
/* 000254 */ 		}
/* 000254 */ 		else {
/* 000254 */ 		}
/* 000266 */ 		__call__ (__call__ (__super__, null, LLMLatexWalker, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({s: llm_text, default_parsing_state: default_parsing_state}, kwargs)));
/* 000272 */ 		self.llm_environment = llm_environment;
/* 000274 */ 		self.standalone_mode = standalone_mode;
/* 000278 */ 		self.resource_info = resource_info;
/* 000280 */ 		self.what = what;
/* 000283 */ 		self.parsing_mode = parsing_mode;
/* 000285 */ 		self._parsing_state_event_handler = parsing_state_event_handler;
/* 000285 */ 	});},
/* 000287 */ 	get parsing_state_event_handler () {return __get__ (this, function (self) {
/* 000287 */ 		if (arguments.length) {
/* 000287 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000287 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000287 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000287 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000287 */ 					switch (__attrib0__) {
/* 000287 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000287 */ 					}
/* 000287 */ 				}
/* 000287 */ 			}
/* 000287 */ 		}
/* 000287 */ 		else {
/* 000287 */ 		}
/* 000288 */ 		if (__t__ (self._parsing_state_event_handler)) {
/* 000289 */ 			return self._parsing_state_event_handler;
/* 000289 */ 		}
/* 000290 */ 		return __call__ (__call__ (__super__, null, LLMLatexWalker, 'parsing_state_event_handler'), null, self);
/* 000290 */ 	});},
/* 000292 */ 	get make_nodelist () {return __get__ (this, function (self, nodelist, parsing_state) {
/* 000292 */ 		var kwargs = dict ();
/* 000292 */ 		if (arguments.length) {
/* 000292 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000292 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000292 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000292 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000292 */ 					switch (__attrib0__) {
/* 000292 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000292 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000292 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000292 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000292 */ 					}
/* 000292 */ 				}
/* 000292 */ 				delete kwargs.__kwargtrans__;
/* 000292 */ 			}
/* 000292 */ 		}
/* 000292 */ 		else {
/* 000292 */ 		}
/* 000293 */ 		var nl = __call__ (__call__ (__super__, null, LLMLatexWalker, 'make_nodelist'), null, self, __kwargtrans__ (__mergekwargtrans__ ({nodelist: nodelist, parsing_state: parsing_state}, kwargs)));
/* 000295 */ 		var nl = (function () {
/* 000295 */ 			var __accu0__ = (function () {
/* 000295 */ 				var __accu1__ = self.llm_environment;
/* 000295 */ 				return __call__ (__accu1__.node_list_finalizer, __accu1__);
/* 000295 */ 			}) ();
/* 000295 */ 			return __call__ (__accu0__.finalize_nodelist, __accu0__, nl);
/* 000295 */ 		}) ();
/* 000296 */ 		return nl;
/* 000296 */ 	});}
/* 000296 */ });
/* 000300 */ export var LLMEnvironment =  __class__ ('LLMEnvironment', [object], {
/* 000300 */ 	__module__: __name__,
/* 000319 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000319 */ 		var parsing_mode_deltas = null;
/* 000319 */ 		var tolerant_parsing = false;
/* 000319 */ 		if (arguments.length) {
/* 000319 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000319 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000319 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000319 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000319 */ 					switch (__attrib0__) {
/* 000319 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000319 */ 						case 'latex_context': var latex_context = __allkwargs0__ [__attrib0__]; break;
/* 000319 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000319 */ 						case 'features': var features = __allkwargs0__ [__attrib0__]; break;
/* 000319 */ 						case 'parsing_mode_deltas': var parsing_mode_deltas = __allkwargs0__ [__attrib0__]; break;
/* 000319 */ 						case 'tolerant_parsing': var tolerant_parsing = __allkwargs0__ [__attrib0__]; break;
/* 000319 */ 					}
/* 000319 */ 				}
/* 000319 */ 			}
/* 000319 */ 		}
/* 000319 */ 		else {
/* 000319 */ 		}
/* 000328 */ 		__call__ (__call__ (__super__, null, LLMEnvironment, '__init__'), null, self);
/* 000330 */ 		// pass;
/* 000334 */ 		// pass;
/* 000338 */ 		self.latex_context = latex_context;
/* 000339 */ 		self.parsing_state = parsing_state;
/* 000341 */ 		self.parsing_mode_deltas = (__t__ (parsing_mode_deltas) ? __call__ (dict, null, parsing_mode_deltas) : dict ({}));
/* 000343 */ 		self.features = __call__ (list, null, features);
/* 000348 */ 		self.features_by_name = dict ({});
/* 000349 */ 		var __iterable0__ = self.features;
/* 000349 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000349 */ 			var feature = __getitem__ (__iterable0__, __index0__);
/* 000350 */ 			if (__t__ (__in__ (feature.feature_name, self.features_by_name))) {
/* 000351 */ 				var __except0__ = __call__ (ValueError, null, 'Duplicate feature detected: feature {} has same name/role as the as already-included feature {}'.format (feature, __getitem__ (self.features_by_name, feature.feature_name)));
/* 000351 */ 				__except0__.__cause__ = null;
/* 000351 */ 				throw __except0__;
/* 000351 */ 			}
/* 000356 */ 			__setitem__ (self.features_by_name, feature.feature_name, feature);
/* 000356 */ 		}
/* 000358 */ 		self.tolerant_parsing = tolerant_parsing;
/* 000360 */ 		self._node_list_finalizer = __call__ (NodeListFinalizer, null);
/* 000362 */ 		if (__t__ (self.parsing_state.latex_context === null)) {
/* 000365 */ 			var __iterable0__ = self.features;
/* 000365 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000365 */ 				var f = __getitem__ (__iterable0__, __index0__);
/* 000366 */ 				var moredefs = (function () {
/* 000366 */ 					var __accu0__ = f;
/* 000366 */ 					return __call__ (__accu0__.add_latex_context_definitions, __accu0__);
/* 000366 */ 				}) ();
/* 000367 */ 				if (__t__ (moredefs)) {
/* 000368 */ 					// pass;
/* 000371 */ 					var moredefs2 = __call__ (dict, null, moredefs);
/* 000372 */ 					(function () {
/* 000372 */ 						var __accu0__ = moredefs2;
/* 000372 */ 						return __call__ (__accu0__.py_update, __accu0__, __kwargtrans__ ({prepend: true}));
/* 000372 */ 					}) ();
/* 000373 */ 					(function () {
/* 000373 */ 						var __accu0__ = self.latex_context;
/* 000373 */ 						return __call__ (__accu0__.add_context_category, __accu0__, 'feature--{}'.format (f.feature_name), __kwargtrans__ (moredefs2));
/* 000373 */ 					}) ();
/* 000373 */ 				}
/* 000373 */ 			}
/* 000379 */ 			(function () {
/* 000379 */ 				var __accu0__ = self.latex_context;
/* 000379 */ 				return __call__ (__accu0__.freeze, __accu0__);
/* 000379 */ 			}) ();
/* 000382 */ 			self.parsing_state.latex_context = self.latex_context;
/* 000382 */ 		}
/* 000384 */ 		else if (__t__ (self.latex_context !== null)) {
/* 000387 */ 			var __except0__ = __call__ (RuntimeError, null, 'The specified `parsing_state` instance already has a latex_context set');
/* 000387 */ 			__except0__.__cause__ = null;
/* 000387 */ 			throw __except0__;
/* 000387 */ 		}
/* 000387 */ 	});},
/* 000392 */ 	get feature () {return __get__ (this, function (self, feature_name) {
/* 000392 */ 		if (arguments.length) {
/* 000392 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000392 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000392 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000392 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000392 */ 					switch (__attrib0__) {
/* 000392 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000392 */ 						case 'feature_name': var feature_name = __allkwargs0__ [__attrib0__]; break;
/* 000392 */ 					}
/* 000392 */ 				}
/* 000392 */ 			}
/* 000392 */ 		}
/* 000392 */ 		else {
/* 000392 */ 		}
/* 000393 */ 		return __getitem__ (self.features_by_name, feature_name);
/* 000393 */ 	});},
/* 000396 */ 	parsing_state_event_handler: null,
/* 000398 */ 	get make_latex_walker () {return __get__ (this, function (self, llm_text) {
/* 000398 */ 		var parsing_mode = null;
/* 000398 */ 		var resource_info = null;
/* 000398 */ 		var tolerant_parsing = null;
/* 000398 */ 		var what = null;
/* 000398 */ 		if (arguments.length) {
/* 000398 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000398 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000398 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000398 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000398 */ 					switch (__attrib0__) {
/* 000398 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000398 */ 						case 'llm_text': var llm_text = __allkwargs0__ [__attrib0__]; break;
/* 000398 */ 						case 'standalone_mode': var standalone_mode = __allkwargs0__ [__attrib0__]; break;
/* 000398 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000398 */ 						case 'parsing_mode': var parsing_mode = __allkwargs0__ [__attrib0__]; break;
/* 000398 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000398 */ 						case 'tolerant_parsing': var tolerant_parsing = __allkwargs0__ [__attrib0__]; break;
/* 000398 */ 						case 'what': var what = __allkwargs0__ [__attrib0__]; break;
/* 000398 */ 					}
/* 000398 */ 				}
/* 000398 */ 			}
/* 000398 */ 		}
/* 000398 */ 		else {
/* 000398 */ 		}
/* 000409 */ 		var default_parsing_state = (function () {
/* 000409 */ 			var __accu0__ = self;
/* 000409 */ 			return __call__ (__accu0__.make_parsing_state, __accu0__, __kwargtrans__ ({is_block_level: is_block_level, parsing_mode: parsing_mode}));
/* 000409 */ 		}) ();
/* 000414 */ 		if (__t__ (tolerant_parsing === null)) {
/* 000415 */ 			var tolerant_parsing = self.tolerant_parsing;
/* 000415 */ 		}
/* 000417 */ 		var latex_walker = __call__ (LLMLatexWalker, null, __kwargtrans__ ({llm_text: llm_text, default_parsing_state: default_parsing_state, tolerant_parsing: tolerant_parsing, llm_environment: self, standalone_mode: standalone_mode, resource_info: resource_info, what: what, parsing_state_event_handler: self.parsing_state_event_handler}));
/* 000429 */ 		return latex_walker;
/* 000429 */ 	});},
/* 000431 */ 	get make_parsing_state () {return __get__ (this, function (self, is_block_level, parsing_mode) {
/* 000431 */ 		if (typeof parsing_mode == 'undefined' || (parsing_mode != null && parsing_mode.hasOwnProperty ("__kwargtrans__"))) {;
/* 000431 */ 			var parsing_mode = null;
/* 000431 */ 		};
/* 000431 */ 		if (arguments.length) {
/* 000431 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000431 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000431 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000431 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000431 */ 					switch (__attrib0__) {
/* 000431 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000431 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000431 */ 						case 'parsing_mode': var parsing_mode = __allkwargs0__ [__attrib0__]; break;
/* 000431 */ 					}
/* 000431 */ 				}
/* 000431 */ 			}
/* 000431 */ 		}
/* 000431 */ 		else {
/* 000431 */ 		}
/* 000435 */ 		var default_parsing_state = self.parsing_state;
/* 000437 */ 		if (__t__ (parsing_mode !== null)) {
/* 000438 */ 			try {
/* 000439 */ 				var parsing_state_delta = __getitem__ (self.parsing_mode_deltas, parsing_mode);
/* 000439 */ 			}
/* 000439 */ 			catch (__except0__) {
/* 000439 */ 				if (isinstance (__except0__, KeyError)) {
/* 000439 */ 					var e = __except0__;
/* 000441 */ 					var __except1__ = __call__ (ValueError, null, 'Invalid parsing_mode ‘{}’'.format (parsing_mode));
/* 000441 */ 					__except1__.__cause__ = null;
/* 000441 */ 					throw __except1__;
/* 000441 */ 				}
/* 000441 */ 				else {
/* 000441 */ 					throw __except0__;
/* 000441 */ 				}
/* 000441 */ 			}
/* 000443 */ 			if (__t__ (parsing_state_delta !== null)) {
/* 000444 */ 				var default_parsing_state = (function () {
/* 000444 */ 					var __accu0__ = parsing_state_delta;
/* 000444 */ 					return __call__ (__accu0__.get_updated_parsing_state, __accu0__, default_parsing_state, __kwargtrans__ ({latex_walker: null}));
/* 000444 */ 				}) ();
/* 000444 */ 			}
/* 000444 */ 		}
/* 000449 */ 		return (function () {
/* 000449 */ 			var __accu0__ = default_parsing_state;
/* 000449 */ 			return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ ({is_block_level: is_block_level}));
/* 000449 */ 		}) ();
/* 000449 */ 	});},
/* 000452 */ 	get make_fragment () {return __get__ (this, function (self, llm_text) {
/* 000452 */ 		var kwargs = dict ();
/* 000452 */ 		if (arguments.length) {
/* 000452 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000452 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000452 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000452 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000452 */ 					switch (__attrib0__) {
/* 000452 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000452 */ 						case 'llm_text': var llm_text = __allkwargs0__ [__attrib0__]; break;
/* 000452 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000452 */ 					}
/* 000452 */ 				}
/* 000452 */ 				delete kwargs.__kwargtrans__;
/* 000452 */ 			}
/* 000452 */ 		}
/* 000452 */ 		else {
/* 000452 */ 		}
/* 000453 */ 		try {
/* 000454 */ 			var fragment = __call__ (LLMFragment, null, llm_text, __kwargtrans__ (__mergekwargtrans__ ({environment: self}, kwargs)));
/* 000455 */ 			return fragment;
/* 000455 */ 		}
/* 000455 */ 		catch (__except0__) {
/* 000457 */ 			if (__t__ (!__t__ (((function () {
/* 000457 */ 				var __accu0__ = kwargs;
/* 000457 */ 				return __call__ (__accu0__.py_get, __accu0__, 'silent', false);
/* 000457 */ 			}) ())))) {
/* 000458 */ 				(function () {
/* 000458 */ 					var __accu0__ = logger;
/* 000459 */ 					return __call__ (__accu0__.error, __accu0__, (function () {
/* 000459 */ 						var __accu1__ = 'Error compiling fragment for {}\nContent was:\n‘{}’\n';
/* 000460 */ 						return __call__ (__accu1__.format, __accu1__, (function () {
/* 000460 */ 							var __accu2__ = kwargs;
/* 000460 */ 							return __call__ (__accu2__.py_get, __accu2__, 'what', '(unknown)');
/* 000460 */ 						}) (), llm_text, __kwargtrans__ ({exc_info: true}));
/* 000460 */ 					}) ());
/* 000460 */ 				}) ();
/* 000460 */ 			}
/* 000462 */ 			__except0__.__cause__ = null;
/* 000462 */ 			throw __except0__;
/* 000462 */ 		}
/* 000462 */ 	});},
/* 000464 */ 	get node_list_finalizer () {return __get__ (this, function (self) {
/* 000464 */ 		if (arguments.length) {
/* 000464 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000464 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000464 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000464 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000464 */ 					switch (__attrib0__) {
/* 000464 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000464 */ 					}
/* 000464 */ 				}
/* 000464 */ 			}
/* 000464 */ 		}
/* 000464 */ 		else {
/* 000464 */ 		}
/* 000465 */ 		return self._node_list_finalizer;
/* 000465 */ 	});},
/* 000469 */ 	get make_document () {return __get__ (this, function (self, render_callback) {
/* 000469 */ 		var kwargs = dict ();
/* 000469 */ 		if (arguments.length) {
/* 000469 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000469 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000469 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000469 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000469 */ 					switch (__attrib0__) {
/* 000469 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000469 */ 						case 'render_callback': var render_callback = __allkwargs0__ [__attrib0__]; break;
/* 000469 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000469 */ 					}
/* 000469 */ 				}
/* 000469 */ 				delete kwargs.__kwargtrans__;
/* 000469 */ 			}
/* 000469 */ 		}
/* 000469 */ 		else {
/* 000469 */ 		}
/* 000477 */ 		var doc = __call__ (LLMDocument, null, render_callback, __kwargtrans__ (__mergekwargtrans__ ({environment: self}, kwargs)));
/* 000482 */ 		(function () {
/* 000482 */ 			var __accu0__ = doc;
/* 000482 */ 			return __call__ (__accu0__.initialize, __accu0__);
/* 000482 */ 		}) ();
/* 000483 */ 		return doc;
/* 000483 */ 	});},
/* 000486 */ 	get get_parse_error_message () {return __get__ (this, function (self, exception_object) {
/* 000486 */ 		if (arguments.length) {
/* 000486 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000486 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000486 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000486 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000486 */ 					switch (__attrib0__) {
/* 000486 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000486 */ 						case 'exception_object': var exception_object = __allkwargs0__ [__attrib0__]; break;
/* 000486 */ 					}
/* 000486 */ 				}
/* 000486 */ 			}
/* 000486 */ 		}
/* 000486 */ 		else {
/* 000486 */ 		}
/* 000487 */ 		return (function () {
/* 000487 */ 			var __accu0__ = __call__ (LatexWalkerParseErrorFormatter, null, exception_object);
/* 000487 */ 			return __call__ (__accu0__.to_display_string, __accu0__);
/* 000487 */ 		}) ();
/* 000487 */ 	});}
/* 000487 */ });
/* 000006 */ 
//# sourceMappingURL=llm.llmenvironment.map