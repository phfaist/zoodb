/* 000001 */ // Transcrypt'ed from Python, 2023-04-09 00:31:35
/* 000006 */ var logging = {};
/* 000006 */ var re = {};
/* 000006 */ var unique_object_id = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000023 */ import * as __module_unique_object_id__ from './unique_object_id.js';
/* 000023 */ __nest__ (unique_object_id, '', __module_unique_object_id__);
/* 000017 */ import {LLMDocument} from './llm.llmdocument.js';
/* 000016 */ import {LLMFragment} from './llm.llmfragment.js';
/* 000014 */ import * as latexwalker from './pylatexenc.latexwalker.js';
/* 000013 */ import * as latexnodes_nodes from './pylatexenc.latexnodes.nodes.js';
/* 000012 */ import {LatexWalkerParseError, LatexWalkerParseErrorFormatter} from './pylatexenc.latexnodes.js';
/* 000011 */ import * as macrospec from './pylatexenc.macrospec.js';
/* 000010 */ import * as latexnodes from './pylatexenc.latexnodes.js';
/* 000007 */ import * as __module_logging__ from './logging.js';
/* 000007 */ __nest__ (logging, '', __module_logging__);
/* 000006 */ import * as __module_re__ from './re.js';
/* 000006 */ __nest__ (re, '', __module_re__);
/* 000006 */ export {latexnodes, latexnodes_nodes, LLMDocument, LatexWalkerParseError, LatexWalkerParseErrorFormatter, LLMFragment, macrospec, latexwalker};
/* 000001 */ var __name__ = 'llm.llmenvironment';
/* 000008 */ export var logger = (function () {
/* 000008 */ 	var __accu0__ = logging;
/* 000008 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000008 */ }) ();
/* 000024 */ export var fn_unique_object_id = unique_object_id.fn_unique_object_id;
/* 000033 */ export var LLMParsingState =  __class__ ('LLMParsingState', [latexnodes.ParsingState], {
/* 000033 */ 	__module__: __name__,
/* 000036 */ 	_fields: __call__ (tuple, null, __add__ (__call__ (list, null, latexnodes.ParsingState._fields), ['is_block_level'])),
/* 000038 */ 	get set_fields () {return __get__ (this, function (self) {
/* 000038 */ 		var is_block_level = null;
/* 000038 */ 		var kwargs = dict ();
/* 000038 */ 		if (arguments.length) {
/* 000038 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000038 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000038 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000038 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000038 */ 					switch (__attrib0__) {
/* 000038 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000038 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000038 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000038 */ 					}
/* 000038 */ 				}
/* 000038 */ 				delete kwargs.__kwargtrans__;
/* 000038 */ 			}
/* 000038 */ 		}
/* 000038 */ 		else {
/* 000038 */ 		}
/* 000039 */ 		__call__ (__call__ (__super__, null, LLMParsingState, 'set_fields'), null, self, __kwargtrans__ (kwargs));
/* 000040 */ 		self.is_block_level = is_block_level;
/* 000040 */ 	});}
/* 000040 */ });
/* 000043 */ export var LLMParsingStateDeltaSetBlockLevel =  __class__ ('LLMParsingStateDeltaSetBlockLevel', [latexnodes.ParsingStateDelta], {
/* 000043 */ 	__module__: __name__,
/* 000044 */ 	get __init__ () {return __get__ (this, function (self, is_block_level) {
/* 000044 */ 		if (typeof is_block_level == 'undefined' || (is_block_level != null && is_block_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000044 */ 			var is_block_level = null;
/* 000044 */ 		};
/* 000044 */ 		if (arguments.length) {
/* 000044 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000044 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000044 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000044 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000044 */ 					switch (__attrib0__) {
/* 000044 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000044 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000044 */ 					}
/* 000044 */ 				}
/* 000044 */ 			}
/* 000044 */ 		}
/* 000044 */ 		else {
/* 000044 */ 		}
/* 000046 */ 		__call__ (__call__ (__super__, null, LLMParsingStateDeltaSetBlockLevel, '__init__'), null, self, __kwargtrans__ ({set_attributes: __call__ (dict, null, __kwargtrans__ ({is_block_level: is_block_level}))}));
/* 000046 */ 	});}
/* 000046 */ });
/* 000053 */ export var LLMArgumentSpec = function (parser, argname, is_block_level, llm_doc) {
/* 000053 */ 	if (typeof is_block_level == 'undefined' || (is_block_level != null && is_block_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000053 */ 		var is_block_level = false;
/* 000053 */ 	};
/* 000053 */ 	if (typeof llm_doc == 'undefined' || (llm_doc != null && llm_doc.hasOwnProperty ("__kwargtrans__"))) {;
/* 000053 */ 		var llm_doc = null;
/* 000053 */ 	};
/* 000053 */ 	if (arguments.length) {
/* 000053 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000053 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000053 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000053 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000053 */ 				switch (__attrib0__) {
/* 000053 */ 					case 'parser': var parser = __allkwargs0__ [__attrib0__]; break;
/* 000053 */ 					case 'argname': var argname = __allkwargs0__ [__attrib0__]; break;
/* 000053 */ 					case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000053 */ 					case 'llm_doc': var llm_doc = __allkwargs0__ [__attrib0__]; break;
/* 000053 */ 				}
/* 000053 */ 			}
/* 000053 */ 		}
/* 000053 */ 	}
/* 000053 */ 	else {
/* 000053 */ 	}
/* 000060 */ 	var parsing_state_delta = null;
/* 000061 */ 	if (__t__ (is_block_level !== null)) {
/* 000062 */ 		var parsing_state_delta = __call__ (LLMParsingStateDeltaSetBlockLevel, null, __kwargtrans__ ({is_block_level: is_block_level}));
/* 000062 */ 	}
/* 000065 */ 	var arg = (function () {
/* 000065 */ 		var __accu0__ = latexnodes;
/* 000065 */ 		return __call__ (__accu0__.LatexArgumentSpec, __accu0__, __kwargtrans__ ({parser: parser, argname: argname, parsing_state_delta: parsing_state_delta}));
/* 000065 */ 	}) ();
/* 000070 */ 	arg._llm_doc = llm_doc;
/* 000071 */ 	return arg;
/* 000071 */ };
/* 000078 */ export var BlocksBuilder =  __class__ ('BlocksBuilder', [object], {
/* 000078 */ 	__module__: __name__,
/* 000080 */ 	rx_space: (function () {
/* 000080 */ 		var __accu0__ = re;
/* 000080 */ 		return __call__ (__accu0__.compile, __accu0__, '[ \\t\\n\\r]+');
/* 000080 */ 	}) (),
/* 000081 */ 	rx_only_space: (function () {
/* 000081 */ 		var __accu0__ = re;
/* 000081 */ 		return __call__ (__accu0__.compile, __accu0__, '^[ \\t\\n\\r]+$');
/* 000081 */ 	}) (),
/* 000083 */ 	get __init__ () {return __get__ (this, function (self, latexnodelist) {
/* 000083 */ 		if (arguments.length) {
/* 000083 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000083 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000083 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000083 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000083 */ 					switch (__attrib0__) {
/* 000083 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000083 */ 						case 'latexnodelist': var latexnodelist = __allkwargs0__ [__attrib0__]; break;
/* 000083 */ 					}
/* 000083 */ 				}
/* 000083 */ 			}
/* 000083 */ 		}
/* 000083 */ 		else {
/* 000083 */ 		}
/* 000084 */ 		__call__ (__call__ (__super__, null, BlocksBuilder, '__init__'), null, self);
/* 000085 */ 		self.latexnodelist = latexnodelist;
/* 000086 */ 		self.pending_paragraph_nodes = [];
/* 000087 */ 		self.blocks = [];
/* 000087 */ 	});},
/* 000089 */ 	get flush_paragraph () {return __get__ (this, function (self) {
/* 000089 */ 		if (arguments.length) {
/* 000089 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000089 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000089 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000089 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000089 */ 					switch (__attrib0__) {
/* 000089 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000089 */ 					}
/* 000089 */ 				}
/* 000089 */ 			}
/* 000089 */ 		}
/* 000089 */ 		else {
/* 000089 */ 		}
/* 000090 */ 		if (__t__ (!__t__ ((self.pending_paragraph_nodes)))) {
/* 000091 */ 			return ;
/* 000091 */ 		}
/* 000092 */ 		var paragraph_nodes = self.pending_paragraph_nodes;
/* 000093 */ 		var paragraph_nodes = (function () {
/* 000093 */ 			var __accu0__ = self;
/* 000093 */ 			return __call__ (__accu0__.finalize_paragraph, __accu0__, paragraph_nodes);
/* 000093 */ 		}) ();
/* 000095 */ 		(function () {
/* 000095 */ 			var __accu0__ = self.blocks;
/* 000096 */ 			return __call__ (__accu0__.append, __accu0__, (function () {
/* 000096 */ 				var __accu1__ = latexnodes_nodes;
/* 000096 */ 				return __call__ (__accu1__.LatexNodeList, __accu1__, paragraph_nodes, __kwargtrans__ ({parsing_state: self.latexnodelist.parsing_state, latex_walker: self.latexnodelist.latex_walker}));
/* 000096 */ 			}) ());
/* 000096 */ 		}) ();
/* 000102 */ 		self.pending_paragraph_nodes = [];
/* 000102 */ 	});},
/* 000104 */ 	get simplify_whitespace_chars () {return __get__ (this, function (self, chars, is_head, is_tail) {
/* 000104 */ 		if (typeof is_head == 'undefined' || (is_head != null && is_head.hasOwnProperty ("__kwargtrans__"))) {;
/* 000104 */ 			var is_head = false;
/* 000104 */ 		};
/* 000104 */ 		if (typeof is_tail == 'undefined' || (is_tail != null && is_tail.hasOwnProperty ("__kwargtrans__"))) {;
/* 000104 */ 			var is_tail = false;
/* 000104 */ 		};
/* 000104 */ 		if (arguments.length) {
/* 000104 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000104 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000104 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000104 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000104 */ 					switch (__attrib0__) {
/* 000104 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000104 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000104 */ 						case 'is_head': var is_head = __allkwargs0__ [__attrib0__]; break;
/* 000104 */ 						case 'is_tail': var is_tail = __allkwargs0__ [__attrib0__]; break;
/* 000104 */ 					}
/* 000104 */ 				}
/* 000104 */ 			}
/* 000104 */ 		}
/* 000104 */ 		else {
/* 000104 */ 		}
/* 000105 */ 		var newchars = (function () {
/* 000105 */ 			var __accu0__ = self.rx_space;
/* 000105 */ 			return __call__ (__accu0__.sub, __accu0__, ' ', chars);
/* 000105 */ 		}) ();
/* 000106 */ 		if (__t__ (is_head)) {
/* 000107 */ 			var newchars = (function () {
/* 000107 */ 				var __accu0__ = newchars;
/* 000107 */ 				return __call__ (__accu0__.lstrip, __accu0__);
/* 000107 */ 			}) ();
/* 000107 */ 		}
/* 000108 */ 		if (__t__ (is_tail)) {
/* 000109 */ 			var newchars = (function () {
/* 000109 */ 				var __accu0__ = newchars;
/* 000109 */ 				return __call__ (__accu0__.rstrip, __accu0__);
/* 000109 */ 			}) ();
/* 000109 */ 		}
/* 000110 */ 		return newchars;
/* 000110 */ 	});},
/* 000112 */ 	get finalize_paragraph () {return __get__ (this, function (self, paragraph_nodes) {
/* 000112 */ 		if (arguments.length) {
/* 000112 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000112 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000112 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000112 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000112 */ 					switch (__attrib0__) {
/* 000112 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000112 */ 						case 'paragraph_nodes': var paragraph_nodes = __allkwargs0__ [__attrib0__]; break;
/* 000112 */ 					}
/* 000112 */ 				}
/* 000112 */ 			}
/* 000112 */ 		}
/* 000112 */ 		else {
/* 000112 */ 		}
/* 000113 */ 		if (__t__ (!__t__ ((paragraph_nodes)))) {
/* 000114 */ 			return paragraph_nodes;
/* 000114 */ 		}
/* 000118 */ 		var is_head = true;
/* 000119 */ 		var tail_char_node_info = null;
/* 000120 */ 		var first_node = null;
/* 000121 */ 		var char_nodes = [];
/* 000122 */ 		var __iterable0__ = __call__ (enumerate, null, paragraph_nodes);
/* 000122 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000122 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000122 */ 			var j = __left0__ [0];
/* 000122 */ 			var node = __left0__ [1];
/* 000125 */ 			if (__t__ (__t__ (__eq__ (__call__ (len, null, char_nodes), 0)) && __t__ (first_node !== null) && __call__ (getattr, null, first_node, 'llm_is_block_heading', false))) {
/* 000128 */ 				var is_head = true;
/* 000128 */ 			}
/* 000130 */ 			if (__t__ ((function () {
/* 000130 */ 				var __accu0__ = node;
/* 000130 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000130 */ 			}) ())) {
/* 000131 */ 				var info = dict ({'is_head': is_head, 'is_tail': false});
/* 000132 */ 				(function () {
/* 000132 */ 					var __accu0__ = char_nodes;
/* 000132 */ 					return __call__ (__accu0__.append, __accu0__, tuple ([node, info]));
/* 000132 */ 				}) ();
/* 000133 */ 				var is_head = false;
/* 000134 */ 				var tail_char_node_info = info;
/* 000134 */ 			}
/* 000135 */ 			else if (__t__ (!__t__ (((function () {
/* 000135 */ 				var __accu0__ = node;
/* 000135 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCommentNode);
/* 000135 */ 			}) ())))) {
/* 000136 */ 				if (__t__ (first_node === null)) {
/* 000137 */ 					var first_node = node;
/* 000137 */ 				}
/* 000138 */ 				var is_head = false;
/* 000139 */ 				var tail_char_node_info = null;
/* 000139 */ 			}
/* 000139 */ 		}
/* 000142 */ 		if (__t__ (tail_char_node_info !== null)) {
/* 000143 */ 			__setitem__ (tail_char_node_info, 'is_tail', true);
/* 000143 */ 		}
/* 000145 */ 		var __iterable0__ = char_nodes;
/* 000145 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000145 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000145 */ 			var char_node = __left0__ [0];
/* 000145 */ 			var info = __left0__ [1];
/* 000146 */ 			char_node.llm_chars_value = (function () {
/* 000146 */ 				var __accu0__ = self;
/* 000146 */ 				return __call__ (__accu0__.simplify_whitespace_chars, __accu0__, char_node.chars, __kwargtrans__ ({is_head: __getitem__ (info, 'is_head'), is_tail: __getitem__ (info, 'is_tail')}));
/* 000146 */ 			}) ();
/* 000146 */ 		}
/* 000157 */ 		return paragraph_nodes;
/* 000157 */ 	});},
/* 000159 */ 	get build_blocks () {return __get__ (this, function (self) {
/* 000159 */ 		if (arguments.length) {
/* 000159 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000159 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000159 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000159 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000159 */ 					switch (__attrib0__) {
/* 000159 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000159 */ 					}
/* 000159 */ 				}
/* 000159 */ 			}
/* 000159 */ 		}
/* 000159 */ 		else {
/* 000159 */ 		}
/* 000160 */ 		var latexnodelist = self.latexnodelist;
/* 000164 */ 		assert (__eq__ (__call__ (len, null, self.blocks), 0));
/* 000166 */ 		var __iterable0__ = latexnodelist;
/* 000166 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000166 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000167 */ 			var n_is_block_level = __call__ (getattr, null, n, 'llm_is_block_level', null);
/* 000168 */ 			var n_is_block_heading = __call__ (getattr, null, n, 'llm_is_block_heading', false);
/* 000169 */ 			if (__t__ (n_is_block_level)) {
/* 000171 */ 				(function () {
/* 000171 */ 					var __accu0__ = self;
/* 000171 */ 					return __call__ (__accu0__.flush_paragraph, __accu0__);
/* 000171 */ 				}) ();
/* 000173 */ 				if (__t__ (__call__ (getattr, null, n, 'llm_is_paragraph_break_marker', false))) {
/* 000173 */ 					continue;
/* 000173 */ 				}
/* 000178 */ 				if (__t__ (n_is_block_heading)) {
/* 000182 */ 					(function () {
/* 000182 */ 						var __accu0__ = self.pending_paragraph_nodes;
/* 000182 */ 						return __call__ (__accu0__.append, __accu0__, n);
/* 000182 */ 					}) ();
/* 000182 */ 					continue;
/* 000182 */ 				}
/* 000187 */ 				(function () {
/* 000187 */ 					var __accu0__ = self.blocks;
/* 000187 */ 					return __call__ (__accu0__.append, __accu0__, n);
/* 000187 */ 				}) ();
/* 000187 */ 				continue;
/* 000187 */ 			}
/* 000190 */ 			var paragraph_started_yet = true;
/* 000191 */ 			if (__t__ (!__t__ ((self.pending_paragraph_nodes)))) {
/* 000192 */ 				var paragraph_started_yet = false;
/* 000192 */ 			}
/* 000193 */ 			if (__t__ (__eq__ (__call__ (len, null, self.pending_paragraph_nodes), 1))) {
/* 000194 */ 				if (__t__ (__call__ (getattr, null, __getitem__ (self.pending_paragraph_nodes, 0), 'llm_is_block_heading', false))) {
/* 000196 */ 					var paragraph_started_yet = false;
/* 000196 */ 				}
/* 000196 */ 			}
/* 000199 */ 			if (__t__ (__t__ (!__t__ ((paragraph_started_yet))) && __t__ ((function () {
/* 000199 */ 				var __accu0__ = n;
/* 000199 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000200 */ 			}) ()) && (function () {
/* 000200 */ 				var __accu0__ = self.rx_only_space;
/* 000200 */ 				return __call__ (__accu0__.match, __accu0__, n.chars);
/* 000200 */ 			}) ())) {
/* 000200 */ 				continue;
/* 000200 */ 			}
/* 000206 */ 			(function () {
/* 000206 */ 				var __accu0__ = self.pending_paragraph_nodes;
/* 000206 */ 				return __call__ (__accu0__.append, __accu0__, n);
/* 000206 */ 			}) ();
/* 000206 */ 		}
/* 000209 */ 		(function () {
/* 000209 */ 			var __accu0__ = self;
/* 000209 */ 			return __call__ (__accu0__.flush_paragraph, __accu0__);
/* 000209 */ 		}) ();
/* 000211 */ 		return self.blocks;
/* 000211 */ 	});}
/* 000211 */ });
/* 000219 */ export var NodeListFinalizer =  __class__ ('NodeListFinalizer', [object], {
/* 000219 */ 	__module__: __name__,
/* 000224 */ 	get finalize_nodelist () {return __get__ (this, function (self, latexnodelist) {
/* 000224 */ 		if (arguments.length) {
/* 000224 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000224 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000224 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000224 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000224 */ 					switch (__attrib0__) {
/* 000224 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000224 */ 						case 'latexnodelist': var latexnodelist = __allkwargs0__ [__attrib0__]; break;
/* 000224 */ 					}
/* 000224 */ 				}
/* 000224 */ 			}
/* 000224 */ 		}
/* 000224 */ 		else {
/* 000224 */ 		}
/* 000238 */ 		var is_block_level = latexnodelist.parsing_state.is_block_level;
/* 000239 */ 		if (__t__ (is_block_level === null)) {
/* 000241 */ 			var is_block_level = (function () {
/* 000241 */ 				var __accu0__ = self;
/* 000241 */ 				return __call__ (__accu0__.infer_is_block_level_nodelist, __accu0__, latexnodelist);
/* 000241 */ 			}) ();
/* 000241 */ 		}
/* 000243 */ 		latexnodelist.llm_is_block_level = is_block_level;
/* 000246 */ 		if (__t__ (!__t__ ((is_block_level)))) {
/* 000248 */ 			var __iterable0__ = latexnodelist;
/* 000248 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000248 */ 				var n = __getitem__ (__iterable0__, __index0__);
/* 000249 */ 				if (__t__ (__call__ (getattr, null, n, 'llm_is_block_level', null))) {
/* 000253 */ 					var __except0__ = __call__ (LatexWalkerParseError, null, __kwargtrans__ ({msg: 'Content is not allowed in inline text (not block level): ‘{}’'.format ((function () {
/* 000253 */ 						var __accu0__ = n;
/* 000253 */ 						return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000253 */ 					}) ()), pos: n.pos}));
/* 000253 */ 					__except0__.__cause__ = null;
/* 000253 */ 					throw __except0__;
/* 000253 */ 				}
/* 000257 */ 				if (__t__ ((function () {
/* 000257 */ 					var __accu0__ = n;
/* 000257 */ 					return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000257 */ 				}) ())) {
/* 000258 */ 					n.llm_chars_value = (function () {
/* 000258 */ 						var __accu0__ = self;
/* 000258 */ 						return __call__ (__accu0__.simplify_whitespace_chars_inline, __accu0__, n.chars);
/* 000258 */ 					}) ();
/* 000258 */ 				}
/* 000258 */ 			}
/* 000263 */ 			return latexnodelist;
/* 000263 */ 		}
/* 000267 */ 		if (__t__ (is_block_level)) {
/* 000268 */ 			var blocks_builder = (function () {
/* 000268 */ 				var __accu0__ = self;
/* 000268 */ 				return __call__ (__accu0__.make_blocks_builder, __accu0__, latexnodelist);
/* 000268 */ 			}) ();
/* 000269 */ 			var llm_blocks = (function () {
/* 000269 */ 				var __accu0__ = blocks_builder;
/* 000269 */ 				return __call__ (__accu0__.build_blocks, __accu0__);
/* 000269 */ 			}) ();
/* 000270 */ 			latexnodelist.llm_blocks = llm_blocks;
/* 000270 */ 		}
/* 000272 */ 		return latexnodelist;
/* 000272 */ 	});},
/* 000274 */ 	get infer_is_block_level_nodelist () {return __get__ (this, function (self, latexnodelist) {
/* 000274 */ 		if (arguments.length) {
/* 000274 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000274 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000274 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000274 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000274 */ 					switch (__attrib0__) {
/* 000274 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000274 */ 						case 'latexnodelist': var latexnodelist = __allkwargs0__ [__attrib0__]; break;
/* 000274 */ 					}
/* 000274 */ 				}
/* 000274 */ 			}
/* 000274 */ 		}
/* 000274 */ 		else {
/* 000274 */ 		}
/* 000275 */ 		var __iterable0__ = latexnodelist;
/* 000275 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000275 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000276 */ 			var n_is_block_level = __call__ (getattr, null, n, 'llm_is_block_level', null);
/* 000277 */ 			if (__t__ (n_is_block_level)) {
/* 000278 */ 				return true;
/* 000278 */ 			}
/* 000278 */ 		}
/* 000279 */ 		return false;
/* 000279 */ 	});},
/* 000281 */ 	get simplify_whitespace_chars_inline () {return __get__ (this, function (self, chars) {
/* 000281 */ 		if (arguments.length) {
/* 000281 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000281 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000281 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000281 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000281 */ 					switch (__attrib0__) {
/* 000281 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000281 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000281 */ 					}
/* 000281 */ 				}
/* 000281 */ 			}
/* 000281 */ 		}
/* 000281 */ 		else {
/* 000281 */ 		}
/* 000282 */ 		return (function () {
/* 000282 */ 			var __accu0__ = self.rx_inline_space;
/* 000282 */ 			return __call__ (__accu0__.sub, __accu0__, ' ', chars);
/* 000282 */ 		}) ();
/* 000282 */ 	});},
/* 000284 */ 	make_blocks_builder: BlocksBuilder,
/* 000286 */ 	rx_inline_space: BlocksBuilder.rx_space
/* 000286 */ });
/* 000295 */ export var LLMLatexWalker =  __class__ ('LLMLatexWalker', [latexwalker.LatexWalker], {
/* 000295 */ 	__module__: __name__,
/* 000308 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000308 */ 		var parsing_state_event_handler = null;
/* 000308 */ 		var standalone_mode = false;
/* 000308 */ 		var resource_info = null;
/* 000308 */ 		var parsing_mode = null;
/* 000308 */ 		var what = null;
/* 000308 */ 		var kwargs = dict ();
/* 000308 */ 		if (arguments.length) {
/* 000308 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000308 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000308 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000308 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000308 */ 					switch (__attrib0__) {
/* 000308 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000308 */ 						case 'llm_text': var llm_text = __allkwargs0__ [__attrib0__]; break;
/* 000308 */ 						case 'default_parsing_state': var default_parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000308 */ 						case 'llm_environment': var llm_environment = __allkwargs0__ [__attrib0__]; break;
/* 000308 */ 						case 'parsing_state_event_handler': var parsing_state_event_handler = __allkwargs0__ [__attrib0__]; break;
/* 000308 */ 						case 'standalone_mode': var standalone_mode = __allkwargs0__ [__attrib0__]; break;
/* 000308 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000308 */ 						case 'parsing_mode': var parsing_mode = __allkwargs0__ [__attrib0__]; break;
/* 000308 */ 						case 'what': var what = __allkwargs0__ [__attrib0__]; break;
/* 000308 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000308 */ 					}
/* 000308 */ 				}
/* 000308 */ 				delete kwargs.__kwargtrans__;
/* 000308 */ 			}
/* 000308 */ 		}
/* 000308 */ 		else {
/* 000308 */ 		}
/* 000320 */ 		__call__ (__call__ (__super__, null, LLMLatexWalker, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({s: llm_text, default_parsing_state: default_parsing_state}, kwargs)));
/* 000326 */ 		self.llm_environment = llm_environment;
/* 000328 */ 		self.standalone_mode = standalone_mode;
/* 000332 */ 		self.resource_info = resource_info;
/* 000334 */ 		self.what = what;
/* 000337 */ 		self.parsing_mode = parsing_mode;
/* 000339 */ 		self._parsing_state_event_handler = parsing_state_event_handler;
/* 000339 */ 	});},
/* 000341 */ 	get parsing_state_event_handler () {return __get__ (this, function (self) {
/* 000341 */ 		if (arguments.length) {
/* 000341 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000341 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000341 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000341 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000341 */ 					switch (__attrib0__) {
/* 000341 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000341 */ 					}
/* 000341 */ 				}
/* 000341 */ 			}
/* 000341 */ 		}
/* 000341 */ 		else {
/* 000341 */ 		}
/* 000342 */ 		if (__t__ (self._parsing_state_event_handler)) {
/* 000343 */ 			return self._parsing_state_event_handler;
/* 000343 */ 		}
/* 000344 */ 		return __call__ (__call__ (__super__, null, LLMLatexWalker, 'parsing_state_event_handler'), null, self);
/* 000344 */ 	});},
/* 000346 */ 	get make_nodelist () {return __get__ (this, function (self, nodelist, parsing_state) {
/* 000346 */ 		var kwargs = dict ();
/* 000346 */ 		if (arguments.length) {
/* 000346 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000346 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000346 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000346 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000346 */ 					switch (__attrib0__) {
/* 000346 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000346 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000346 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000346 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000346 */ 					}
/* 000346 */ 				}
/* 000346 */ 				delete kwargs.__kwargtrans__;
/* 000346 */ 			}
/* 000346 */ 		}
/* 000346 */ 		else {
/* 000346 */ 		}
/* 000347 */ 		var nl = __call__ (__call__ (__super__, null, LLMLatexWalker, 'make_nodelist'), null, self, __kwargtrans__ (__mergekwargtrans__ ({nodelist: nodelist, parsing_state: parsing_state}, kwargs)));
/* 000349 */ 		var nl = (function () {
/* 000349 */ 			var __accu0__ = (function () {
/* 000349 */ 				var __accu1__ = self.llm_environment;
/* 000349 */ 				return __call__ (__accu1__.node_list_finalizer, __accu1__);
/* 000349 */ 			}) ();
/* 000349 */ 			return __call__ (__accu0__.finalize_nodelist, __accu0__, nl);
/* 000349 */ 		}) ();
/* 000350 */ 		return nl;
/* 000350 */ 	});},
/* 000352 */ 	get make_node () {return __get__ (this, function (self, node_class) {
/* 000352 */ 		var kwargs = dict ();
/* 000352 */ 		if (arguments.length) {
/* 000352 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000352 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000352 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000352 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000352 */ 					switch (__attrib0__) {
/* 000352 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000352 */ 						case 'node_class': var node_class = __allkwargs0__ [__attrib0__]; break;
/* 000352 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000352 */ 					}
/* 000352 */ 				}
/* 000352 */ 				delete kwargs.__kwargtrans__;
/* 000352 */ 			}
/* 000352 */ 		}
/* 000352 */ 		else {
/* 000352 */ 		}
/* 000353 */ 		var node = __call__ (__call__ (__super__, null, LLMLatexWalker, 'make_node'), null, self, node_class, __kwargtrans__ (kwargs));
/* 000355 */ 		node.node_id = __call__ (fn_unique_object_id, null, node);
/* 000356 */ 		return node;
/* 000356 */ 	});},
/* 000360 */ 	get filter_whitespace_comments_nodes () {return __get__ (this, function (self, nodelist) {
/* 000360 */ 		if (arguments.length) {
/* 000360 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000360 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000360 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000360 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000360 */ 					switch (__attrib0__) {
/* 000360 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000360 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000360 */ 					}
/* 000360 */ 				}
/* 000360 */ 			}
/* 000360 */ 		}
/* 000360 */ 		else {
/* 000360 */ 		}
/* 000365 */ 		return (function () {
/* 000365 */ 			var __accu0__ = nodelist;
/* 000365 */ 			return __call__ (__accu0__.filter, __accu0__, __kwargtrans__ ({node_predicate_fn: self._filter_whitespace_comments_nodes_predicate, skip_none: true, skip_comments: true, skip_whitespace_char_nodes: true}));
/* 000365 */ 		}) ();
/* 000365 */ 	});},
/* 000372 */ 	get _filter_whitespace_comments_nodes_predicate () {return __get__ (this, function (self, node) {
/* 000372 */ 		if (arguments.length) {
/* 000372 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000372 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000372 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000372 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000372 */ 					switch (__attrib0__) {
/* 000372 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000372 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000372 */ 					}
/* 000372 */ 				}
/* 000372 */ 			}
/* 000372 */ 		}
/* 000372 */ 		else {
/* 000372 */ 		}
/* 000373 */ 		if (__t__ (__call__ (getattr, null, node, 'llm_is_paragraph_break_marker', false))) {
/* 000374 */ 			return false;
/* 000374 */ 		}
/* 000375 */ 		return true;
/* 000375 */ 	});}
/* 000375 */ });
/* 000383 */ export var features_ensure_dependencies_are_met = function (features) {
/* 000383 */ 	if (arguments.length) {
/* 000383 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000383 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000383 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000383 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000383 */ 				switch (__attrib0__) {
/* 000383 */ 					case 'features': var features = __allkwargs0__ [__attrib0__]; break;
/* 000383 */ 				}
/* 000383 */ 			}
/* 000383 */ 		}
/* 000383 */ 	}
/* 000383 */ 	else {
/* 000383 */ 	}
/* 000385 */ 	var feature_names = __call__ (set, null, (function () {
/* 000385 */ 		var __accu0__ = [];
/* 000385 */ 		var __iterable0__ = features;
/* 000385 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000385 */ 			var f = __getitem__ (__iterable0__, __index0__);
/* 000385 */ 			(function () {
/* 000385 */ 				var __accu1__ = __accu0__;
/* 000385 */ 				return __call__ (__accu1__.append, __accu1__, f.feature_name);
/* 000385 */ 			}) ();
/* 000385 */ 		}
/* 000385 */ 		return __accu0__;
/* 000385 */ 	}) ());
/* 000387 */ 	var __iterable0__ = features;
/* 000387 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000387 */ 		var feature = __getitem__ (__iterable0__, __index0__);
/* 000388 */ 		if (__t__ (feature.feature_dependencies === null)) {
/* 000388 */ 			continue;
/* 000388 */ 		}
/* 000390 */ 		var __iterable1__ = feature.feature_dependencies;
/* 000390 */ 		for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000390 */ 			var fdepname = __getitem__ (__iterable1__, __index1__);
/* 000391 */ 			if (__t__ (!__in__ (fdepname, feature_names))) {
/* 000393 */ 				var __except0__ = __call__ (ValueError, null, 'Feature ‘{}’ ({}) has unmet dependency ‘{}’'.format (feature.feature_name, __call__ (repr, null, feature), fdepname));
/* 000393 */ 				__except0__.__cause__ = null;
/* 000393 */ 				throw __except0__;
/* 000393 */ 			}
/* 000393 */ 		}
/* 000393 */ 	}
/* 000393 */ };
/* 000399 */ export var features_sorted_by_dependencies = function (features) {
/* 000399 */ 	if (arguments.length) {
/* 000399 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000399 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000399 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000399 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000399 */ 				switch (__attrib0__) {
/* 000399 */ 					case 'features': var features = __allkwargs0__ [__attrib0__]; break;
/* 000399 */ 				}
/* 000399 */ 			}
/* 000399 */ 		}
/* 000399 */ 	}
/* 000399 */ 	else {
/* 000399 */ 	}
/* 000416 */ 	var features_to_sort = __call__ (list, null, features);
/* 000420 */ 	var features_by_name = dict ({});
/* 000421 */ 	var __iterable0__ = features_to_sort;
/* 000421 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000421 */ 		var feature = __getitem__ (__iterable0__, __index0__);
/* 000422 */ 		if (__t__ (__in__ (feature.feature_name, features_by_name))) {
/* 000424 */ 			var __except0__ = __call__ (ValueError, null, 'Duplicate feature detected: feature {} has the same name (‘{}’) as the as already-included feature {}'.format (__call__ (repr, null, feature), feature.feature_name, __getitem__ (features_by_name, feature.feature_name)));
/* 000424 */ 			__except0__.__cause__ = null;
/* 000424 */ 			throw __except0__;
/* 000424 */ 		}
/* 000428 */ 		__setitem__ (features_by_name, feature.feature_name, feature);
/* 000428 */ 	}
/* 000433 */ 	(function () {
/* 000433 */ 		var __accu0__ = features_to_sort;
/* 000433 */ 		return __call__ (__accu0__.py_sort, __accu0__, __kwargtrans__ ({key: (function __lambda__ (f) {
/* 000433 */ 			if (arguments.length) {
/* 000433 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000433 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000433 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000433 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000433 */ 						switch (__attrib0__) {
/* 000433 */ 							case 'f': var f = __allkwargs0__ [__attrib0__]; break;
/* 000433 */ 						}
/* 000433 */ 					}
/* 000433 */ 				}
/* 000433 */ 			}
/* 000433 */ 			else {
/* 000433 */ 			}
/* 000433 */ 			return f.feature_name;
/* 000433 */ 		})}));
/* 000433 */ 	}) ();
/* 000436 */ 	__call__ (features_ensure_dependencies_are_met, null, features_to_sort);
/* 000438 */ 	var get_feature_dependencies = function (f) {
/* 000438 */ 		if (arguments.length) {
/* 000438 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000438 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000438 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000438 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000438 */ 					switch (__attrib0__) {
/* 000438 */ 						case 'f': var f = __allkwargs0__ [__attrib0__]; break;
/* 000438 */ 					}
/* 000438 */ 				}
/* 000438 */ 			}
/* 000438 */ 		}
/* 000438 */ 		else {
/* 000438 */ 		}
/* 000439 */ 		var deps = __call__ (set, null);
/* 000440 */ 		if (__t__ (f.feature_dependencies !== null)) {
/* 000441 */ 			var __iterable0__ = f.feature_dependencies;
/* 000441 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000441 */ 				var fdepname = __getitem__ (__iterable0__, __index0__);
/* 000442 */ 				(function () {
/* 000442 */ 					var __accu0__ = deps;
/* 000442 */ 					return __call__ (__accu0__.add, __accu0__, fdepname);
/* 000442 */ 				}) ();
/* 000442 */ 			}
/* 000442 */ 		}
/* 000443 */ 		if (__t__ (f.feature_optional_dependencies !== null)) {
/* 000444 */ 			var __iterable0__ = f.feature_optional_dependencies;
/* 000444 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000444 */ 				var foptdepname = __getitem__ (__iterable0__, __index0__);
/* 000445 */ 				if (__t__ (__in__ (foptdepname, features_by_name))) {
/* 000446 */ 					(function () {
/* 000446 */ 						var __accu0__ = deps;
/* 000446 */ 						return __call__ (__accu0__.add, __accu0__, foptdepname);
/* 000446 */ 					}) ();
/* 000446 */ 				}
/* 000446 */ 			}
/* 000446 */ 		}
/* 000447 */ 		return __call__ (sorted, null, __call__ (list, null, deps));
/* 000447 */ 	};
/* 000455 */ 	var all_feature_dependencies = __call__ (dict, null, (function () {
/* 000455 */ 		var __accu0__ = [];
/* 000457 */ 		var __iterable0__ = (function () {
/* 000457 */ 			var __accu1__ = features_by_name;
/* 000457 */ 			return __call__ (__accu1__.py_items, __accu1__);
/* 000457 */ 		}) ();
/* 000457 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000457 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000457 */ 			var fname = __left0__ [0];
/* 000457 */ 			var f = __left0__ [1];
/* 000457 */ 			(function () {
/* 000457 */ 				var __accu1__ = __accu0__;
/* 000456 */ 				return __call__ (__accu1__.append, __accu1__, tuple ([fname, __call__ (get_feature_dependencies, null, f)]));
/* 000456 */ 			}) ();
/* 000456 */ 		}
/* 000456 */ 		return __accu0__;
/* 000456 */ 	}) ());
/* 000460 */ 	var get_feature_dependents = function (fparentname, all_feature_dependencies) {
/* 000460 */ 		if (arguments.length) {
/* 000460 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000460 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000460 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000460 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000460 */ 					switch (__attrib0__) {
/* 000460 */ 						case 'fparentname': var fparentname = __allkwargs0__ [__attrib0__]; break;
/* 000460 */ 						case 'all_feature_dependencies': var all_feature_dependencies = __allkwargs0__ [__attrib0__]; break;
/* 000460 */ 					}
/* 000460 */ 				}
/* 000460 */ 			}
/* 000460 */ 		}
/* 000460 */ 		else {
/* 000460 */ 		}
/* 000461 */ 		var dependents = __call__ (set, null);
/* 000462 */ 		var __iterable0__ = (function () {
/* 000462 */ 			var __accu0__ = all_feature_dependencies;
/* 000462 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000462 */ 		}) ();
/* 000462 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000462 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000462 */ 			var fname = __left0__ [0];
/* 000462 */ 			var fdepnames = __left0__ [1];
/* 000463 */ 			var __iterable1__ = fdepnames;
/* 000463 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000463 */ 				var fdepname = __getitem__ (__iterable1__, __index1__);
/* 000464 */ 				if (__t__ (__eq__ (fdepname, fparentname))) {
/* 000465 */ 					(function () {
/* 000465 */ 						var __accu0__ = dependents;
/* 000465 */ 						return __call__ (__accu0__.add, __accu0__, fname);
/* 000465 */ 					}) ();
/* 000465 */ 				}
/* 000465 */ 			}
/* 000465 */ 		}
/* 000466 */ 		return __call__ (sorted, null, __call__ (list, null, dependents));
/* 000466 */ 	};
/* 000472 */ 	var sorted_features = [];
/* 000473 */ 	var root_features = (function () {
/* 000473 */ 		var __accu0__ = [];
/* 000476 */ 		var __iterable0__ = __call__ (py_reversed, null, features_to_sort);
/* 000476 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000476 */ 			var f = __getitem__ (__iterable0__, __index0__);
/* 000477 */ 			if (__t__ (__eq__ (__call__ (len, null, __getitem__ (all_feature_dependencies, f.feature_name)), 0))) {
/* 000477 */ 				(function () {
/* 000477 */ 					var __accu1__ = __accu0__;
/* 000477 */ 					return __call__ (__accu1__.append, __accu1__, f);
/* 000477 */ 				}) ();
/* 000477 */ 			}
/* 000477 */ 		}
/* 000477 */ 		return __accu0__;
/* 000477 */ 	}) ();
/* 000481 */ 	while (__t__ (__gt__ (__call__ (len, null, root_features), 0))) {
/* 000482 */ 		var n = (function () {
/* 000482 */ 			var __accu0__ = root_features;
/* 000482 */ 			return __call__ (__accu0__.py_pop, __accu0__);
/* 000482 */ 		}) ();
/* 000483 */ 		(function () {
/* 000483 */ 			var __accu0__ = sorted_features;
/* 000483 */ 			return __call__ (__accu0__.append, __accu0__, n);
/* 000483 */ 		}) ();
/* 000485 */ 		var n_name = n.feature_name;
/* 000487 */ 		var iter_dependents = __call__ (get_feature_dependents, null, n_name, all_feature_dependencies);
/* 000488 */ 		var __iterable0__ = iter_dependents;
/* 000488 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000488 */ 			var fdependentname = __getitem__ (__iterable0__, __index0__);
/* 000491 */ 			(function () {
/* 000491 */ 				var __accu0__ = __getitem__ (all_feature_dependencies, fdependentname);
/* 000491 */ 				return __call__ (__accu0__.remove, __accu0__, n_name);
/* 000491 */ 			}) ();
/* 000495 */ 			if (__t__ (__eq__ (__call__ (len, null, __getitem__ (all_feature_dependencies, fdependentname)), 0))) {
/* 000497 */ 				(function () {
/* 000497 */ 					var __accu0__ = root_features;
/* 000497 */ 					return __call__ (__accu0__.insert, __accu0__, 0, __getitem__ (features_by_name, fdependentname));
/* 000497 */ 				}) ();
/* 000497 */ 			}
/* 000497 */ 		}
/* 000497 */ 	}
/* 000500 */ 	var problematic_features = [];
/* 000501 */ 	var __iterable0__ = (function () {
/* 000501 */ 		var __accu0__ = all_feature_dependencies;
/* 000501 */ 		return __call__ (__accu0__.py_items, __accu0__);
/* 000501 */ 	}) ();
/* 000501 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000501 */ 		var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000501 */ 		var fsrcname = __left0__ [0];
/* 000501 */ 		var featuredeps = __left0__ [1];
/* 000502 */ 		if (__t__ (__gt__ (__call__ (len, null, featuredeps), 0))) {
/* 000503 */ 			(function () {
/* 000503 */ 				var __accu0__ = problematic_features;
/* 000504 */ 				return __call__ (__accu0__.append, __accu0__, __add__ ('‘{}’ → '.format (fsrcname), (function () {
/* 000504 */ 					var __accu1__ = ', ';
/* 000504 */ 					return __call__ (__accu1__.join, __accu1__, (function () {
/* 000504 */ 						var __accu2__ = [];
/* 000504 */ 						var __iterable1__ = featuredeps;
/* 000504 */ 						for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000504 */ 							var fdepname = __getitem__ (__iterable1__, __index1__);
/* 000504 */ 							(function () {
/* 000504 */ 								var __accu3__ = __accu2__;
/* 000504 */ 								return __call__ (__accu3__.append, __accu3__, '‘{}’'.format (fdepname));
/* 000504 */ 							}) ();
/* 000504 */ 						}
/* 000504 */ 						return __accu2__;
/* 000504 */ 					}) ());
/* 000504 */ 				}) ()));
/* 000504 */ 			}) ();
/* 000504 */ 		}
/* 000504 */ 	}
/* 000506 */ 	if (__t__ (__gt__ (__call__ (len, null, problematic_features), 0))) {
/* 000509 */ 		var __except0__ = __call__ (ValueError, null, __add__ ('The feature dependency graph has a cycle!  Problematic dependencies:'.format (), (function () {
/* 000509 */ 			var __accu0__ = '; ';
/* 000509 */ 			return __call__ (__accu0__.join, __accu0__, problematic_features);
/* 000509 */ 		}) ()));
/* 000509 */ 		__except0__.__cause__ = null;
/* 000509 */ 		throw __except0__;
/* 000509 */ 	}
/* 000512 */ 	if (__t__ (__ne__ (__call__ (len, null, sorted_features), __call__ (len, null, features_to_sort)))) {
/* 000513 */ 		var __except0__ = __call__ (RuntimeError, null, "Internal error, we didn't get all the features right when ordering them!");
/* 000513 */ 		__except0__.__cause__ = null;
/* 000513 */ 		throw __except0__;
/* 000513 */ 	}
/* 000517 */ 	return tuple ([sorted_features, features_by_name]);
/* 000517 */ };
/* 000546 */ export var LLMEnvironment =  __class__ ('LLMEnvironment', [object], {
/* 000546 */ 	__module__: __name__,
/* 000565 */ 	get __init__ () {return __get__ (this, function (self, features, parsing_state, latex_context) {
/* 000565 */ 		var tolerant_parsing = false;
/* 000565 */ 		var parsing_mode_deltas = null;
/* 000565 */ 		if (arguments.length) {
/* 000565 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000565 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000565 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000565 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000565 */ 					switch (__attrib0__) {
/* 000565 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000565 */ 						case 'features': var features = __allkwargs0__ [__attrib0__]; break;
/* 000565 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000565 */ 						case 'latex_context': var latex_context = __allkwargs0__ [__attrib0__]; break;
/* 000565 */ 						case 'tolerant_parsing': var tolerant_parsing = __allkwargs0__ [__attrib0__]; break;
/* 000565 */ 						case 'parsing_mode_deltas': var parsing_mode_deltas = __allkwargs0__ [__attrib0__]; break;
/* 000565 */ 					}
/* 000565 */ 				}
/* 000565 */ 			}
/* 000565 */ 		}
/* 000565 */ 		else {
/* 000565 */ 		}
/* 000574 */ 		__call__ (__call__ (__super__, null, LLMEnvironment, '__init__'), null, self);
/* 000576 */ 		// pass;
/* 000580 */ 		self.latex_context = latex_context;
/* 000581 */ 		self.parsing_state = parsing_state;
/* 000583 */ 		self.parsing_mode_deltas = (__t__ (parsing_mode_deltas) ? __call__ (dict, null, parsing_mode_deltas) : dict ({}));
/* 000585 */ 		var __left0__ = __call__ (features_sorted_by_dependencies, null, features);
/* 000585 */ 		self.features = __left0__ [0];
/* 000585 */ 		self.features_by_name = __left0__ [1];
/* 000587 */ 		// pass;
/* 000591 */ 		self.tolerant_parsing = tolerant_parsing;
/* 000593 */ 		self._node_list_finalizer = __call__ (NodeListFinalizer, null);
/* 000595 */ 		if (__t__ (self.parsing_state.latex_context === null)) {
/* 000598 */ 			var __iterable0__ = self.features;
/* 000598 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000598 */ 				var f = __getitem__ (__iterable0__, __index0__);
/* 000599 */ 				var moredefs = (function () {
/* 000599 */ 					var __accu0__ = f;
/* 000599 */ 					return __call__ (__accu0__.add_latex_context_definitions, __accu0__);
/* 000599 */ 				}) ();
/* 000600 */ 				// pass;
/* 000603 */ 				if (__t__ (moredefs !== null)) {
/* 000604 */ 					var moredefs = __call__ (dict, null, moredefs);
/* 000605 */ 					if (__t__ (__call__ (len, null, moredefs))) {
/* 000606 */ 						// pass;
/* 000609 */ 						(function () {
/* 000609 */ 							var __accu0__ = moredefs;
/* 000609 */ 							return __call__ (__accu0__.py_update, __accu0__, __kwargtrans__ ({prepend: true}));
/* 000609 */ 						}) ();
/* 000610 */ 						(function () {
/* 000610 */ 							var __accu0__ = self.latex_context;
/* 000610 */ 							return __call__ (__accu0__.add_context_category, __accu0__, 'feature--{}'.format (f.feature_name), __kwargtrans__ (moredefs));
/* 000610 */ 						}) ();
/* 000610 */ 					}
/* 000610 */ 				}
/* 000610 */ 			}
/* 000616 */ 			(function () {
/* 000616 */ 				var __accu0__ = self.latex_context;
/* 000616 */ 				return __call__ (__accu0__.freeze, __accu0__);
/* 000616 */ 			}) ();
/* 000619 */ 			self.parsing_state.latex_context = self.latex_context;
/* 000619 */ 		}
/* 000621 */ 		else if (__t__ (self.latex_context !== null)) {
/* 000624 */ 			var __except0__ = __call__ (RuntimeError, null, 'The specified `parsing_state` instance already has a latex_context set');
/* 000624 */ 			__except0__.__cause__ = null;
/* 000624 */ 			throw __except0__;
/* 000624 */ 		}
/* 000624 */ 	});},
/* 000629 */ 	get feature () {return __get__ (this, function (self, feature_name) {
/* 000629 */ 		if (arguments.length) {
/* 000629 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000629 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000629 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000629 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000629 */ 					switch (__attrib0__) {
/* 000629 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000629 */ 						case 'feature_name': var feature_name = __allkwargs0__ [__attrib0__]; break;
/* 000629 */ 					}
/* 000629 */ 				}
/* 000629 */ 			}
/* 000629 */ 		}
/* 000629 */ 		else {
/* 000629 */ 		}
/* 000630 */ 		return __getitem__ (self.features_by_name, feature_name);
/* 000630 */ 	});},
/* 000633 */ 	parsing_state_event_handler: null,
/* 000640 */ 	get make_latex_walker () {return __get__ (this, function (self, llm_text) {
/* 000640 */ 		var parsing_mode = null;
/* 000640 */ 		var resource_info = null;
/* 000640 */ 		var tolerant_parsing = null;
/* 000640 */ 		var what = null;
/* 000640 */ 		var input_lineno_colno_offsets = null;
/* 000640 */ 		if (arguments.length) {
/* 000640 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000640 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000640 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000640 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000640 */ 					switch (__attrib0__) {
/* 000640 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000640 */ 						case 'llm_text': var llm_text = __allkwargs0__ [__attrib0__]; break;
/* 000640 */ 						case 'standalone_mode': var standalone_mode = __allkwargs0__ [__attrib0__]; break;
/* 000640 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000640 */ 						case 'parsing_mode': var parsing_mode = __allkwargs0__ [__attrib0__]; break;
/* 000640 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000640 */ 						case 'tolerant_parsing': var tolerant_parsing = __allkwargs0__ [__attrib0__]; break;
/* 000640 */ 						case 'what': var what = __allkwargs0__ [__attrib0__]; break;
/* 000640 */ 						case 'input_lineno_colno_offsets': var input_lineno_colno_offsets = __allkwargs0__ [__attrib0__]; break;
/* 000640 */ 					}
/* 000640 */ 				}
/* 000640 */ 			}
/* 000640 */ 		}
/* 000640 */ 		else {
/* 000640 */ 		}
/* 000653 */ 		var default_parsing_state = (function () {
/* 000653 */ 			var __accu0__ = self;
/* 000653 */ 			return __call__ (__accu0__.make_parsing_state, __accu0__, __kwargtrans__ ({is_block_level: is_block_level, parsing_mode: parsing_mode}));
/* 000653 */ 		}) ();
/* 000658 */ 		if (__t__ (tolerant_parsing === null)) {
/* 000659 */ 			var tolerant_parsing = self.tolerant_parsing;
/* 000659 */ 		}
/* 000661 */ 		if (__t__ (input_lineno_colno_offsets === null)) {
/* 000662 */ 			var input_lineno_colno_offsets = dict ({});
/* 000662 */ 		}
/* 000675 */ 		var latex_walker = __call__ (LLMLatexWalker, null, __kwargtrans__ ({llm_text: llm_text, default_parsing_state: default_parsing_state, tolerant_parsing: tolerant_parsing, llm_environment: self, standalone_mode: standalone_mode, resource_info: resource_info, what: what, parsing_state_event_handler: self.parsing_state_event_handler, line_number_offset: (function () {
/* 000675 */ 			var __accu0__ = input_lineno_colno_offsets;
/* 000675 */ 			return __call__ (__accu0__.py_get, __accu0__, 'line_number_offset', null);
/* 000677 */ 		}) (), first_line_column_offset: (function () {
/* 000677 */ 			var __accu0__ = input_lineno_colno_offsets;
/* 000677 */ 			return __call__ (__accu0__.py_get, __accu0__, 'first_line_column_offset', null);
/* 000678 */ 		}) (), column_offset: (function () {
/* 000678 */ 			var __accu0__ = input_lineno_colno_offsets;
/* 000678 */ 			return __call__ (__accu0__.py_get, __accu0__, 'column_offset', null);
/* 000678 */ 		}) ()}));
/* 000681 */ 		return latex_walker;
/* 000681 */ 	});},
/* 000683 */ 	get make_parsing_state () {return __get__ (this, function (self, is_block_level, parsing_mode) {
/* 000683 */ 		if (typeof parsing_mode == 'undefined' || (parsing_mode != null && parsing_mode.hasOwnProperty ("__kwargtrans__"))) {;
/* 000683 */ 			var parsing_mode = null;
/* 000683 */ 		};
/* 000683 */ 		if (arguments.length) {
/* 000683 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000683 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000683 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000683 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000683 */ 					switch (__attrib0__) {
/* 000683 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000683 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000683 */ 						case 'parsing_mode': var parsing_mode = __allkwargs0__ [__attrib0__]; break;
/* 000683 */ 					}
/* 000683 */ 				}
/* 000683 */ 			}
/* 000683 */ 		}
/* 000683 */ 		else {
/* 000683 */ 		}
/* 000687 */ 		var default_parsing_state = self.parsing_state;
/* 000689 */ 		if (__t__ (parsing_mode !== null)) {
/* 000690 */ 			try {
/* 000691 */ 				var parsing_state_delta = __getitem__ (self.parsing_mode_deltas, parsing_mode);
/* 000691 */ 			}
/* 000691 */ 			catch (__except0__) {
/* 000691 */ 				if (isinstance (__except0__, KeyError)) {
/* 000691 */ 					var e = __except0__;
/* 000693 */ 					var __except1__ = __call__ (ValueError, null, 'Invalid parsing_mode ‘{}’'.format (parsing_mode));
/* 000693 */ 					__except1__.__cause__ = null;
/* 000693 */ 					throw __except1__;
/* 000693 */ 				}
/* 000693 */ 				else {
/* 000693 */ 					throw __except0__;
/* 000693 */ 				}
/* 000693 */ 			}
/* 000695 */ 			if (__t__ (parsing_state_delta !== null)) {
/* 000696 */ 				var default_parsing_state = (function () {
/* 000696 */ 					var __accu0__ = parsing_state_delta;
/* 000696 */ 					return __call__ (__accu0__.get_updated_parsing_state, __accu0__, default_parsing_state, __kwargtrans__ ({latex_walker: null}));
/* 000696 */ 				}) ();
/* 000696 */ 			}
/* 000696 */ 		}
/* 000701 */ 		var kwargs = dict ({});
/* 000702 */ 		if (__t__ (is_block_level !== null)) {
/* 000703 */ 			__setitem__ (kwargs, 'is_block_level', is_block_level);
/* 000703 */ 		}
/* 000705 */ 		return (function () {
/* 000705 */ 			var __accu0__ = default_parsing_state;
/* 000705 */ 			return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ (kwargs));
/* 000705 */ 		}) ();
/* 000705 */ 	});},
/* 000708 */ 	get make_fragment () {return __get__ (this, function (self, llm_text) {
/* 000708 */ 		var kwargs = dict ();
/* 000708 */ 		if (arguments.length) {
/* 000708 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000708 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000708 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000708 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000708 */ 					switch (__attrib0__) {
/* 000708 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000708 */ 						case 'llm_text': var llm_text = __allkwargs0__ [__attrib0__]; break;
/* 000708 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000708 */ 					}
/* 000708 */ 				}
/* 000708 */ 				delete kwargs.__kwargtrans__;
/* 000708 */ 			}
/* 000708 */ 		}
/* 000708 */ 		else {
/* 000708 */ 		}
/* 000709 */ 		try {
/* 000710 */ 			var fragment = __call__ (LLMFragment, null, llm_text, __kwargtrans__ (__mergekwargtrans__ ({environment: self}, kwargs)));
/* 000711 */ 			return fragment;
/* 000711 */ 		}
/* 000711 */ 		catch (__except0__) {
/* 000713 */ 			if (__t__ (!__t__ (((function () {
/* 000713 */ 				var __accu0__ = kwargs;
/* 000713 */ 				return __call__ (__accu0__.py_get, __accu0__, 'silent', false);
/* 000713 */ 			}) ())))) {
/* 000714 */ 				(function () {
/* 000714 */ 					var __accu0__ = logger;
/* 000715 */ 					return __call__ (__accu0__.error, __accu0__, (function () {
/* 000715 */ 						var __accu1__ = 'Error compiling fragment for {}\nContent was:\n‘{}’\n';
/* 000716 */ 						return __call__ (__accu1__.format, __accu1__, (function () {
/* 000716 */ 							var __accu2__ = kwargs;
/* 000716 */ 							return __call__ (__accu2__.py_get, __accu2__, 'what', '(unknown)');
/* 000716 */ 						}) (), llm_text);
/* 000716 */ 					}) (), __kwargtrans__ ({exc_info: true}));
/* 000716 */ 				}) ();
/* 000716 */ 			}
/* 000719 */ 			__except0__.__cause__ = null;
/* 000719 */ 			throw __except0__;
/* 000719 */ 		}
/* 000719 */ 	});},
/* 000721 */ 	get node_list_finalizer () {return __get__ (this, function (self) {
/* 000721 */ 		if (arguments.length) {
/* 000721 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000721 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000721 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000721 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000721 */ 					switch (__attrib0__) {
/* 000721 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000721 */ 					}
/* 000721 */ 				}
/* 000721 */ 			}
/* 000721 */ 		}
/* 000721 */ 		else {
/* 000721 */ 		}
/* 000722 */ 		return self._node_list_finalizer;
/* 000722 */ 	});},
/* 000726 */ 	get make_document () {return __get__ (this, function (self, render_callback) {
/* 000726 */ 		var kwargs = dict ();
/* 000726 */ 		if (arguments.length) {
/* 000726 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000726 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000726 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000726 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000726 */ 					switch (__attrib0__) {
/* 000726 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000726 */ 						case 'render_callback': var render_callback = __allkwargs0__ [__attrib0__]; break;
/* 000726 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000726 */ 					}
/* 000726 */ 				}
/* 000726 */ 				delete kwargs.__kwargtrans__;
/* 000726 */ 			}
/* 000726 */ 		}
/* 000726 */ 		else {
/* 000726 */ 		}
/* 000734 */ 		var doc = __call__ (LLMDocument, null, render_callback, __kwargtrans__ (__mergekwargtrans__ ({environment: self}, kwargs)));
/* 000739 */ 		(function () {
/* 000739 */ 			var __accu0__ = doc;
/* 000739 */ 			return __call__ (__accu0__.initialize, __accu0__);
/* 000739 */ 		}) ();
/* 000740 */ 		return doc;
/* 000740 */ 	});},
/* 000743 */ 	get get_features_selection () {return __get__ (this, function (self, enable_features) {
/* 000743 */ 		if (arguments.length) {
/* 000743 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000743 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000743 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000743 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000743 */ 					switch (__attrib0__) {
/* 000743 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000743 */ 						case 'enable_features': var enable_features = __allkwargs0__ [__attrib0__]; break;
/* 000743 */ 					}
/* 000743 */ 				}
/* 000743 */ 			}
/* 000743 */ 		}
/* 000743 */ 		else {
/* 000743 */ 		}
/* 000745 */ 		if (__t__ (enable_features === null)) {
/* 000747 */ 			return self.features;
/* 000747 */ 		}
/* 000749 */ 		var features = (function () {
/* 000749 */ 			var __accu0__ = [];
/* 000749 */ 			var __iterable0__ = enable_features;
/* 000749 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000751 */ 				var feature_name = __getitem__ (__iterable0__, __index0__);
/* 000751 */ 				(function () {
/* 000751 */ 					var __accu1__ = __accu0__;
/* 000751 */ 					return __call__ (__accu1__.append, __accu1__, __getitem__ (self.features_by_name, feature_name));
/* 000751 */ 				}) ();
/* 000751 */ 			}
/* 000751 */ 			return __accu0__;
/* 000751 */ 		}) ();
/* 000755 */ 		__call__ (features_ensure_dependencies_are_met, null, features);
/* 000757 */ 		return features;
/* 000757 */ 	});},
/* 000762 */ 	environment_get_parse_error_message: null,
/* 000764 */ 	get get_parse_error_message () {return __get__ (this, function (self, exception_object) {
/* 000764 */ 		if (arguments.length) {
/* 000764 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000764 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000764 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000764 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000764 */ 					switch (__attrib0__) {
/* 000764 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000764 */ 						case 'exception_object': var exception_object = __allkwargs0__ [__attrib0__]; break;
/* 000764 */ 					}
/* 000764 */ 				}
/* 000764 */ 			}
/* 000764 */ 		}
/* 000764 */ 		else {
/* 000764 */ 		}
/* 000765 */ 		if (__t__ (self.environment_get_parse_error_message !== null)) {
/* 000766 */ 			return (function () {
/* 000766 */ 				var __accu0__ = self;
/* 000766 */ 				return __call__ (__accu0__.environment_get_parse_error_message, __accu0__, exception_object);
/* 000766 */ 			}) ();
/* 000766 */ 		}
/* 000767 */ 		return (function () {
/* 000767 */ 			var __accu0__ = __call__ (LatexWalkerParseErrorFormatter, null, exception_object);
/* 000767 */ 			return __call__ (__accu0__.to_display_string, __accu0__);
/* 000767 */ 		}) ();
/* 000767 */ 	});}
/* 000767 */ });
/* 000776 */ export var standard_parsing_state = function () {
/* 000776 */ 	var force_block_level = null;
/* 000776 */ 	var enable_comments = true;
/* 000776 */ 	var comment_start = '%%';
/* 000776 */ 	var extra_forbidden_characters = '';
/* 000776 */ 	var dollar_inline_math_mode = false;
/* 000776 */ 	if (arguments.length) {
/* 000776 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000776 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000776 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000776 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000776 */ 				switch (__attrib0__) {
/* 000776 */ 					case 'force_block_level': var force_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000776 */ 					case 'enable_comments': var enable_comments = __allkwargs0__ [__attrib0__]; break;
/* 000776 */ 					case 'comment_start': var comment_start = __allkwargs0__ [__attrib0__]; break;
/* 000776 */ 					case 'extra_forbidden_characters': var extra_forbidden_characters = __allkwargs0__ [__attrib0__]; break;
/* 000776 */ 					case 'dollar_inline_math_mode': var dollar_inline_math_mode = __allkwargs0__ [__attrib0__]; break;
/* 000776 */ 				}
/* 000776 */ 			}
/* 000776 */ 		}
/* 000776 */ 	}
/* 000776 */ 	else {
/* 000776 */ 	}
/* 000792 */ 	var forbidden_characters = __call__ (str, null, extra_forbidden_characters);
/* 000793 */ 	if (__t__ (__t__ (!__t__ ((dollar_inline_math_mode))) && !__in__ ('$', forbidden_characters))) {
/* 000794 */ 		var forbidden_characters = __call__ (__iadd__, null, forbidden_characters, '$');
/* 000794 */ 	}
/* 000795 */ 	if (__t__ (__t__ ((__t__ (!__t__ ((enable_comments))) || __ne__ (comment_start, '%'))) && !__in__ ('%', forbidden_characters))) {
/* 000797 */ 		var forbidden_characters = __call__ (__iadd__, null, forbidden_characters, '%');
/* 000797 */ 	}
/* 000799 */ 	var latex_inline_math_delimiters = [tuple (['\\(', '\\)'])];
/* 000801 */ 	if (__t__ (dollar_inline_math_mode)) {
/* 000802 */ 		(function () {
/* 000802 */ 			var __accu0__ = latex_inline_math_delimiters;
/* 000802 */ 			return __call__ (__accu0__.append, __accu0__, tuple (['$', '$']));
/* 000802 */ 		}) ();
/* 000802 */ 	}
/* 000804 */ 	return __call__ (LLMParsingState, null, __kwargtrans__ ({is_block_level: force_block_level, latex_context: null, enable_comments: enable_comments, comment_start: comment_start, latex_inline_math_delimiters: latex_inline_math_delimiters, latex_display_math_delimiters: [tuple (['\\[', '\\]'])], forbidden_characters: forbidden_characters}));
/* 000804 */ };
/* 000816 */ export var LLMLatexWalkerMathContextParsingStateEventHandler =  __class__ ('LLMLatexWalkerMathContextParsingStateEventHandler', [latexnodes.LatexWalkerParsingStateEventHandler], {
/* 000816 */ 	__module__: __name__,
/* 000820 */ 	math_mode_extend_context: dict ({'unknown_macro_spec': (function () {
/* 000820 */ 		var __accu0__ = macrospec;
/* 000820 */ 		return __call__ (__accu0__.MacroSpec, __accu0__, '');
/* 000821 */ 	}) (), 'unknown_environment_spec': (function () {
/* 000821 */ 		var __accu0__ = macrospec;
/* 000821 */ 		return __call__ (__accu0__.EnvironmentSpec, __accu0__, '');
/* 000822 */ 	}) (), 'unknown_specials_spec': (function () {
/* 000822 */ 		var __accu0__ = macrospec;
/* 000822 */ 		return __call__ (__accu0__.SpecialsSpec, __accu0__, '');
/* 000819 */ 	}) ()}),
/* 000825 */ 	get enter_math_mode () {return __get__ (this, function (self, math_mode_delimiter, trigger_token) {
/* 000825 */ 		if (typeof math_mode_delimiter == 'undefined' || (math_mode_delimiter != null && math_mode_delimiter.hasOwnProperty ("__kwargtrans__"))) {;
/* 000825 */ 			var math_mode_delimiter = null;
/* 000825 */ 		};
/* 000825 */ 		if (typeof trigger_token == 'undefined' || (trigger_token != null && trigger_token.hasOwnProperty ("__kwargtrans__"))) {;
/* 000825 */ 			var trigger_token = null;
/* 000825 */ 		};
/* 000825 */ 		if (arguments.length) {
/* 000825 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000825 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000825 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000825 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000825 */ 					switch (__attrib0__) {
/* 000825 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000825 */ 						case 'math_mode_delimiter': var math_mode_delimiter = __allkwargs0__ [__attrib0__]; break;
/* 000825 */ 						case 'trigger_token': var trigger_token = __allkwargs0__ [__attrib0__]; break;
/* 000825 */ 					}
/* 000825 */ 				}
/* 000825 */ 			}
/* 000825 */ 		}
/* 000825 */ 		else {
/* 000825 */ 		}
/* 000826 */ 		var set_attributes = __call__ (dict, null, __kwargtrans__ ({in_math_mode: true, math_mode_delimiter: math_mode_delimiter}));
/* 000830 */ 		// pass;
/* 000835 */ 		return (function () {
/* 000835 */ 			var __accu0__ = macrospec;
/* 000835 */ 			return __call__ (__accu0__.ParsingStateDeltaExtendLatexContextDb, __accu0__, __kwargtrans__ ({set_attributes: set_attributes, extend_latex_context: self.math_mode_extend_context}));
/* 000835 */ 		}) ();
/* 000835 */ 	});},
/* 000840 */ 	get leave_math_mode () {return __get__ (this, function (self, trigger_token) {
/* 000840 */ 		if (typeof trigger_token == 'undefined' || (trigger_token != null && trigger_token.hasOwnProperty ("__kwargtrans__"))) {;
/* 000840 */ 			var trigger_token = null;
/* 000840 */ 		};
/* 000840 */ 		if (arguments.length) {
/* 000840 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000840 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000840 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000840 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000840 */ 					switch (__attrib0__) {
/* 000840 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000840 */ 						case 'trigger_token': var trigger_token = __allkwargs0__ [__attrib0__]; break;
/* 000840 */ 					}
/* 000840 */ 				}
/* 000840 */ 			}
/* 000840 */ 		}
/* 000840 */ 		else {
/* 000840 */ 		}
/* 000842 */ 		return (function () {
/* 000842 */ 			var __accu0__ = macrospec;
/* 000847 */ 			return __call__ (__accu0__.ParsingStateDeltaExtendLatexContextDb, __accu0__, __kwargtrans__ ({set_attributes: __call__ (dict, null, __kwargtrans__ ({in_math_mode: false, math_mode_delimiter: null})), extend_latex_context: __call__ (dict, null, __kwargtrans__ ({unknown_macro_spec: null, unknown_environment_spec: null, unknown_specials_spec: null}))}));
/* 000847 */ 		}) ();
/* 000847 */ 	});}
/* 000847 */ });
/* 000858 */ export var standard_environment_get_parse_error_message = function (exception_object) {
/* 000858 */ 	if (arguments.length) {
/* 000858 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000858 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000858 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000858 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000858 */ 				switch (__attrib0__) {
/* 000858 */ 					case 'exception_object': var exception_object = __allkwargs0__ [__attrib0__]; break;
/* 000858 */ 				}
/* 000858 */ 			}
/* 000858 */ 		}
/* 000858 */ 	}
/* 000858 */ 	else {
/* 000858 */ 	}
/* 000859 */ 	var msg = null;
/* 000860 */ 	var error_type_info = exception_object.error_type_info;
/* 000861 */ 	if (__t__ (error_type_info)) {
/* 000862 */ 		var what = __getitem__ (error_type_info, 'what');
/* 000863 */ 		if (__t__ (__eq__ (what, 'token_forbidden_character'))) {
/* 000864 */ 			if (__t__ (__eq__ (__getitem__ (error_type_info, 'forbidden_character'), '%'))) {
/* 000865 */ 				var msg = 'LaTeX comments are not allowed here. Use ‘\\%’ to typeset a literal percent sign.';
/* 000865 */ 			}
/* 000869 */ 			else if (__t__ (__eq__ (__getitem__ (error_type_info, 'forbidden_character'), '$'))) {
/* 000870 */ 				var msg = "You can't use ‘$’ here. LaTeX math should be typeset using \\(...\\) for inline math and \\[...\\] for unnumbered display equations. Use ‘\\$’ for a literal dollar sign.";
/* 000870 */ 			}
/* 000870 */ 		}
/* 000870 */ 	}
/* 000875 */ 	if (__t__ (!__t__ ((msg)))) {
/* 000876 */ 		var msg = exception_object.msg;
/* 000876 */ 	}
/* 000878 */ 	var errfmt = (function () {
/* 000878 */ 		var __accu0__ = latexnodes;
/* 000878 */ 		return __call__ (__accu0__.LatexWalkerParseErrorFormatter, __accu0__, exception_object);
/* 000878 */ 	}) ();
/* 000880 */ 	var msg = __call__ (__iadd__, null, msg, (function () {
/* 000880 */ 		var __accu0__ = errfmt;
/* 000880 */ 		return __call__ (__accu0__.format_full_traceback, __accu0__);
/* 000880 */ 	}) ());
/* 000882 */ 	return msg;
/* 000882 */ };
/* 000889 */ export var make_standard_environment = function (features, parsing_state, latex_context, llm_environment_options, parsing_state_options) {
/* 000889 */ 	if (typeof parsing_state == 'undefined' || (parsing_state != null && parsing_state.hasOwnProperty ("__kwargtrans__"))) {;
/* 000889 */ 		var parsing_state = null;
/* 000889 */ 	};
/* 000889 */ 	if (typeof latex_context == 'undefined' || (latex_context != null && latex_context.hasOwnProperty ("__kwargtrans__"))) {;
/* 000889 */ 		var latex_context = null;
/* 000889 */ 	};
/* 000889 */ 	if (typeof llm_environment_options == 'undefined' || (llm_environment_options != null && llm_environment_options.hasOwnProperty ("__kwargtrans__"))) {;
/* 000889 */ 		var llm_environment_options = null;
/* 000889 */ 	};
/* 000889 */ 	if (typeof parsing_state_options == 'undefined' || (parsing_state_options != null && parsing_state_options.hasOwnProperty ("__kwargtrans__"))) {;
/* 000889 */ 		var parsing_state_options = null;
/* 000889 */ 	};
/* 000889 */ 	if (arguments.length) {
/* 000889 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000889 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000889 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000889 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000889 */ 				switch (__attrib0__) {
/* 000889 */ 					case 'features': var features = __allkwargs0__ [__attrib0__]; break;
/* 000889 */ 					case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000889 */ 					case 'latex_context': var latex_context = __allkwargs0__ [__attrib0__]; break;
/* 000889 */ 					case 'llm_environment_options': var llm_environment_options = __allkwargs0__ [__attrib0__]; break;
/* 000889 */ 					case 'parsing_state_options': var parsing_state_options = __allkwargs0__ [__attrib0__]; break;
/* 000889 */ 				}
/* 000889 */ 			}
/* 000889 */ 		}
/* 000889 */ 	}
/* 000889 */ 	else {
/* 000889 */ 	}
/* 000893 */ 	if (__t__ (latex_context === null)) {
/* 000894 */ 		var latex_context = (function () {
/* 000894 */ 			var __accu0__ = macrospec;
/* 000894 */ 			return __call__ (__accu0__.LatexContextDb, __accu0__);
/* 000894 */ 		}) ();
/* 000894 */ 	}
/* 000896 */ 	if (__t__ (parsing_state === null)) {
/* 000897 */ 		var parsing_state_options_2 = dict ({});
/* 000898 */ 		if (__t__ (parsing_state_options !== null)) {
/* 000899 */ 			var parsing_state_options_2 = parsing_state_options;
/* 000899 */ 		}
/* 000901 */ 		var parsing_state = __call__ (standard_parsing_state, null, __kwargtrans__ (parsing_state_options_2));
/* 000901 */ 	}
/* 000903 */ 	var parsing_state_event_handler = __call__ (LLMLatexWalkerMathContextParsingStateEventHandler, null);
/* 000905 */ 	var llm_environment_options_2 = dict ({});
/* 000906 */ 	if (__t__ (llm_environment_options !== null)) {
/* 000907 */ 		var llm_environment_options_2 = llm_environment_options;
/* 000907 */ 	}
/* 000909 */ 	var environment = __call__ (LLMEnvironment, null, features, parsing_state, latex_context, __kwargtrans__ (llm_environment_options_2));
/* 000916 */ 	environment.parsing_state_event_handler = parsing_state_event_handler;
/* 000918 */ 	environment.environment_get_parse_error_message = standard_environment_get_parse_error_message;
/* 000921 */ 	return environment;
/* 000921 */ };
/* 000006 */ 
//# sourceMappingURL=llm.llmenvironment.map