/* 000001 */ // Transcrypt'ed from Python, 2023-04-09 22:34:26
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
/* 000006 */ export {latexnodes, macrospec, latexnodes_nodes, LatexWalkerParseError, latexwalker, LatexWalkerParseErrorFormatter, LLMFragment, LLMDocument};
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
/* 000120 */ 		var next_node_should_strip_leading_whitespace = false;
/* 000121 */ 		var first_node = null;
/* 000122 */ 		var char_nodes = [];
/* 000123 */ 		var __iterable0__ = __call__ (enumerate, null, paragraph_nodes);
/* 000123 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000123 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000123 */ 			var j = __left0__ [0];
/* 000123 */ 			var node = __left0__ [1];
/* 000126 */ 			if (__t__ (__t__ (__eq__ (__call__ (len, null, char_nodes), 0)) && __t__ (first_node !== null) && __call__ (getattr, null, first_node, 'llm_is_block_heading', false))) {
/* 000129 */ 				var is_head = true;
/* 000129 */ 			}
/* 000131 */ 			if (__t__ (__call__ (getattr, null, node, 'llm_strip_preceding_whitespace', false))) {
/* 000132 */ 				if (__t__ (tail_char_node_info !== null)) {
/* 000133 */ 					__setitem__ (tail_char_node_info, 'is_tail', true);
/* 000133 */ 				}
/* 000133 */ 			}
/* 000135 */ 			if (__t__ ((function () {
/* 000135 */ 				var __accu0__ = node;
/* 000135 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000135 */ 			}) ())) {
/* 000136 */ 				var info = dict ({'is_head': is_head, 'is_tail': false});
/* 000137 */ 				if (__t__ (next_node_should_strip_leading_whitespace)) {
/* 000138 */ 					__setitem__ (info, 'is_head', true);
/* 000138 */ 				}
/* 000139 */ 				(function () {
/* 000139 */ 					var __accu0__ = char_nodes;
/* 000139 */ 					return __call__ (__accu0__.append, __accu0__, tuple ([node, info]));
/* 000139 */ 				}) ();
/* 000140 */ 				var is_head = false;
/* 000141 */ 				var tail_char_node_info = info;
/* 000141 */ 			}
/* 000142 */ 			else if (__t__ (!__t__ (((function () {
/* 000142 */ 				var __accu0__ = node;
/* 000142 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCommentNode);
/* 000142 */ 			}) ())))) {
/* 000143 */ 				if (__t__ (first_node === null)) {
/* 000144 */ 					var first_node = node;
/* 000144 */ 				}
/* 000145 */ 				var is_head = false;
/* 000146 */ 				var tail_char_node_info = null;
/* 000146 */ 			}
/* 000148 */ 			var next_node_should_strip_leading_whitespace = false;
/* 000149 */ 			if (__t__ (__call__ (getattr, null, node, 'llm_strip_following_whitespace', false))) {
/* 000150 */ 				var next_node_should_strip_leading_whitespace = true;
/* 000150 */ 			}
/* 000150 */ 		}
/* 000153 */ 		if (__t__ (tail_char_node_info !== null)) {
/* 000154 */ 			__setitem__ (tail_char_node_info, 'is_tail', true);
/* 000154 */ 		}
/* 000156 */ 		var __iterable0__ = char_nodes;
/* 000156 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000156 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000156 */ 			var char_node = __left0__ [0];
/* 000156 */ 			var info = __left0__ [1];
/* 000157 */ 			char_node.llm_chars_value = (function () {
/* 000157 */ 				var __accu0__ = self;
/* 000157 */ 				return __call__ (__accu0__.simplify_whitespace_chars, __accu0__, char_node.chars, __kwargtrans__ ({is_head: __getitem__ (info, 'is_head'), is_tail: __getitem__ (info, 'is_tail')}));
/* 000157 */ 			}) ();
/* 000157 */ 		}
/* 000168 */ 		return paragraph_nodes;
/* 000168 */ 	});},
/* 000170 */ 	get build_blocks () {return __get__ (this, function (self) {
/* 000170 */ 		if (arguments.length) {
/* 000170 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000170 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000170 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000170 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000170 */ 					switch (__attrib0__) {
/* 000170 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000170 */ 					}
/* 000170 */ 				}
/* 000170 */ 			}
/* 000170 */ 		}
/* 000170 */ 		else {
/* 000170 */ 		}
/* 000171 */ 		var latexnodelist = self.latexnodelist;
/* 000175 */ 		assert (__eq__ (__call__ (len, null, self.blocks), 0));
/* 000177 */ 		var __iterable0__ = latexnodelist;
/* 000177 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000177 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000178 */ 			var n_is_block_level = __call__ (getattr, null, n, 'llm_is_block_level', null);
/* 000179 */ 			var n_is_block_heading = __call__ (getattr, null, n, 'llm_is_block_heading', false);
/* 000180 */ 			if (__t__ (n_is_block_level)) {
/* 000182 */ 				(function () {
/* 000182 */ 					var __accu0__ = self;
/* 000182 */ 					return __call__ (__accu0__.flush_paragraph, __accu0__);
/* 000182 */ 				}) ();
/* 000184 */ 				if (__t__ (__call__ (getattr, null, n, 'llm_is_paragraph_break_marker', false))) {
/* 000184 */ 					continue;
/* 000184 */ 				}
/* 000189 */ 				if (__t__ (n_is_block_heading)) {
/* 000193 */ 					(function () {
/* 000193 */ 						var __accu0__ = self.pending_paragraph_nodes;
/* 000193 */ 						return __call__ (__accu0__.append, __accu0__, n);
/* 000193 */ 					}) ();
/* 000193 */ 					continue;
/* 000193 */ 				}
/* 000198 */ 				(function () {
/* 000198 */ 					var __accu0__ = self.blocks;
/* 000198 */ 					return __call__ (__accu0__.append, __accu0__, n);
/* 000198 */ 				}) ();
/* 000198 */ 				continue;
/* 000198 */ 			}
/* 000201 */ 			var paragraph_started_yet = true;
/* 000202 */ 			if (__t__ (!__t__ ((self.pending_paragraph_nodes)))) {
/* 000203 */ 				var paragraph_started_yet = false;
/* 000203 */ 			}
/* 000204 */ 			if (__t__ (__eq__ (__call__ (len, null, self.pending_paragraph_nodes), 1))) {
/* 000205 */ 				if (__t__ (__call__ (getattr, null, __getitem__ (self.pending_paragraph_nodes, 0), 'llm_is_block_heading', false))) {
/* 000207 */ 					var paragraph_started_yet = false;
/* 000207 */ 				}
/* 000207 */ 			}
/* 000210 */ 			if (__t__ (__t__ (!__t__ ((paragraph_started_yet))) && __t__ ((function () {
/* 000210 */ 				var __accu0__ = n;
/* 000210 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000211 */ 			}) ()) && (function () {
/* 000211 */ 				var __accu0__ = self.rx_only_space;
/* 000211 */ 				return __call__ (__accu0__.match, __accu0__, n.chars);
/* 000211 */ 			}) ())) {
/* 000211 */ 				continue;
/* 000211 */ 			}
/* 000217 */ 			(function () {
/* 000217 */ 				var __accu0__ = self.pending_paragraph_nodes;
/* 000217 */ 				return __call__ (__accu0__.append, __accu0__, n);
/* 000217 */ 			}) ();
/* 000217 */ 		}
/* 000220 */ 		(function () {
/* 000220 */ 			var __accu0__ = self;
/* 000220 */ 			return __call__ (__accu0__.flush_paragraph, __accu0__);
/* 000220 */ 		}) ();
/* 000222 */ 		return self.blocks;
/* 000222 */ 	});}
/* 000222 */ });
/* 000230 */ export var NodeListFinalizer =  __class__ ('NodeListFinalizer', [object], {
/* 000230 */ 	__module__: __name__,
/* 000235 */ 	get finalize_nodelist () {return __get__ (this, function (self, latexnodelist) {
/* 000235 */ 		if (arguments.length) {
/* 000235 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000235 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000235 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000235 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000235 */ 					switch (__attrib0__) {
/* 000235 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000235 */ 						case 'latexnodelist': var latexnodelist = __allkwargs0__ [__attrib0__]; break;
/* 000235 */ 					}
/* 000235 */ 				}
/* 000235 */ 			}
/* 000235 */ 		}
/* 000235 */ 		else {
/* 000235 */ 		}
/* 000249 */ 		var is_block_level = latexnodelist.parsing_state.is_block_level;
/* 000250 */ 		if (__t__ (is_block_level === null)) {
/* 000252 */ 			var is_block_level = (function () {
/* 000252 */ 				var __accu0__ = self;
/* 000252 */ 				return __call__ (__accu0__.infer_is_block_level_nodelist, __accu0__, latexnodelist);
/* 000252 */ 			}) ();
/* 000252 */ 		}
/* 000254 */ 		latexnodelist.llm_is_block_level = is_block_level;
/* 000257 */ 		if (__t__ (!__t__ ((is_block_level)))) {
/* 000259 */ 			var __iterable0__ = latexnodelist;
/* 000259 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000259 */ 				var n = __getitem__ (__iterable0__, __index0__);
/* 000260 */ 				if (__t__ (__call__ (getattr, null, n, 'llm_is_block_level', null))) {
/* 000264 */ 					var __except0__ = __call__ (LatexWalkerParseError, null, __kwargtrans__ ({msg: 'Content is not allowed in inline text (not block level): ‘{}’'.format ((function () {
/* 000264 */ 						var __accu0__ = n;
/* 000264 */ 						return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000264 */ 					}) ()), pos: n.pos}));
/* 000264 */ 					__except0__.__cause__ = null;
/* 000264 */ 					throw __except0__;
/* 000264 */ 				}
/* 000268 */ 				if (__t__ ((function () {
/* 000268 */ 					var __accu0__ = n;
/* 000268 */ 					return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000268 */ 				}) ())) {
/* 000269 */ 					n.llm_chars_value = (function () {
/* 000269 */ 						var __accu0__ = self;
/* 000269 */ 						return __call__ (__accu0__.simplify_whitespace_chars_inline, __accu0__, n.chars);
/* 000269 */ 					}) ();
/* 000269 */ 				}
/* 000269 */ 			}
/* 000274 */ 			return latexnodelist;
/* 000274 */ 		}
/* 000278 */ 		if (__t__ (is_block_level)) {
/* 000279 */ 			var blocks_builder = (function () {
/* 000279 */ 				var __accu0__ = self;
/* 000279 */ 				return __call__ (__accu0__.make_blocks_builder, __accu0__, latexnodelist);
/* 000279 */ 			}) ();
/* 000280 */ 			var llm_blocks = (function () {
/* 000280 */ 				var __accu0__ = blocks_builder;
/* 000280 */ 				return __call__ (__accu0__.build_blocks, __accu0__);
/* 000280 */ 			}) ();
/* 000281 */ 			latexnodelist.llm_blocks = llm_blocks;
/* 000281 */ 		}
/* 000283 */ 		return latexnodelist;
/* 000283 */ 	});},
/* 000285 */ 	get infer_is_block_level_nodelist () {return __get__ (this, function (self, latexnodelist) {
/* 000285 */ 		if (arguments.length) {
/* 000285 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000285 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000285 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000285 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000285 */ 					switch (__attrib0__) {
/* 000285 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000285 */ 						case 'latexnodelist': var latexnodelist = __allkwargs0__ [__attrib0__]; break;
/* 000285 */ 					}
/* 000285 */ 				}
/* 000285 */ 			}
/* 000285 */ 		}
/* 000285 */ 		else {
/* 000285 */ 		}
/* 000286 */ 		var __iterable0__ = latexnodelist;
/* 000286 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000286 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000287 */ 			var n_is_block_level = __call__ (getattr, null, n, 'llm_is_block_level', null);
/* 000288 */ 			if (__t__ (n_is_block_level)) {
/* 000289 */ 				return true;
/* 000289 */ 			}
/* 000289 */ 		}
/* 000290 */ 		return false;
/* 000290 */ 	});},
/* 000292 */ 	get simplify_whitespace_chars_inline () {return __get__ (this, function (self, chars) {
/* 000292 */ 		if (arguments.length) {
/* 000292 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000292 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000292 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000292 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000292 */ 					switch (__attrib0__) {
/* 000292 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000292 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000292 */ 					}
/* 000292 */ 				}
/* 000292 */ 			}
/* 000292 */ 		}
/* 000292 */ 		else {
/* 000292 */ 		}
/* 000293 */ 		return (function () {
/* 000293 */ 			var __accu0__ = self.rx_inline_space;
/* 000293 */ 			return __call__ (__accu0__.sub, __accu0__, ' ', chars);
/* 000293 */ 		}) ();
/* 000293 */ 	});},
/* 000295 */ 	make_blocks_builder: BlocksBuilder,
/* 000297 */ 	rx_inline_space: BlocksBuilder.rx_space
/* 000297 */ });
/* 000306 */ export var LLMLatexWalker =  __class__ ('LLMLatexWalker', [latexwalker.LatexWalker], {
/* 000306 */ 	__module__: __name__,
/* 000319 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000319 */ 		var parsing_state_event_handler = null;
/* 000319 */ 		var standalone_mode = false;
/* 000319 */ 		var resource_info = null;
/* 000319 */ 		var parsing_mode = null;
/* 000319 */ 		var what = null;
/* 000319 */ 		var kwargs = dict ();
/* 000319 */ 		if (arguments.length) {
/* 000319 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000319 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000319 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000319 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000319 */ 					switch (__attrib0__) {
/* 000319 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000319 */ 						case 'llm_text': var llm_text = __allkwargs0__ [__attrib0__]; break;
/* 000319 */ 						case 'default_parsing_state': var default_parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000319 */ 						case 'llm_environment': var llm_environment = __allkwargs0__ [__attrib0__]; break;
/* 000319 */ 						case 'parsing_state_event_handler': var parsing_state_event_handler = __allkwargs0__ [__attrib0__]; break;
/* 000319 */ 						case 'standalone_mode': var standalone_mode = __allkwargs0__ [__attrib0__]; break;
/* 000319 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000319 */ 						case 'parsing_mode': var parsing_mode = __allkwargs0__ [__attrib0__]; break;
/* 000319 */ 						case 'what': var what = __allkwargs0__ [__attrib0__]; break;
/* 000319 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000319 */ 					}
/* 000319 */ 				}
/* 000319 */ 				delete kwargs.__kwargtrans__;
/* 000319 */ 			}
/* 000319 */ 		}
/* 000319 */ 		else {
/* 000319 */ 		}
/* 000331 */ 		__call__ (__call__ (__super__, null, LLMLatexWalker, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({s: llm_text, default_parsing_state: default_parsing_state}, kwargs)));
/* 000337 */ 		self.llm_environment = llm_environment;
/* 000339 */ 		self.standalone_mode = standalone_mode;
/* 000343 */ 		self.resource_info = resource_info;
/* 000345 */ 		self.what = what;
/* 000348 */ 		self.parsing_mode = parsing_mode;
/* 000350 */ 		self._parsing_state_event_handler = parsing_state_event_handler;
/* 000350 */ 	});},
/* 000352 */ 	get parsing_state_event_handler () {return __get__ (this, function (self) {
/* 000352 */ 		if (arguments.length) {
/* 000352 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000352 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000352 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000352 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000352 */ 					switch (__attrib0__) {
/* 000352 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000352 */ 					}
/* 000352 */ 				}
/* 000352 */ 			}
/* 000352 */ 		}
/* 000352 */ 		else {
/* 000352 */ 		}
/* 000353 */ 		if (__t__ (self._parsing_state_event_handler)) {
/* 000354 */ 			return self._parsing_state_event_handler;
/* 000354 */ 		}
/* 000355 */ 		return __call__ (__call__ (__super__, null, LLMLatexWalker, 'parsing_state_event_handler'), null, self);
/* 000355 */ 	});},
/* 000357 */ 	get make_nodelist () {return __get__ (this, function (self, nodelist, parsing_state) {
/* 000357 */ 		var kwargs = dict ();
/* 000357 */ 		if (arguments.length) {
/* 000357 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000357 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000357 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000357 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000357 */ 					switch (__attrib0__) {
/* 000357 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000357 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000357 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000357 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000357 */ 					}
/* 000357 */ 				}
/* 000357 */ 				delete kwargs.__kwargtrans__;
/* 000357 */ 			}
/* 000357 */ 		}
/* 000357 */ 		else {
/* 000357 */ 		}
/* 000358 */ 		var nl = __call__ (__call__ (__super__, null, LLMLatexWalker, 'make_nodelist'), null, self, __kwargtrans__ (__mergekwargtrans__ ({nodelist: nodelist, parsing_state: parsing_state}, kwargs)));
/* 000360 */ 		var nl = (function () {
/* 000360 */ 			var __accu0__ = (function () {
/* 000360 */ 				var __accu1__ = self.llm_environment;
/* 000360 */ 				return __call__ (__accu1__.node_list_finalizer, __accu1__);
/* 000360 */ 			}) ();
/* 000360 */ 			return __call__ (__accu0__.finalize_nodelist, __accu0__, nl);
/* 000360 */ 		}) ();
/* 000361 */ 		return nl;
/* 000361 */ 	});},
/* 000363 */ 	get make_node () {return __get__ (this, function (self, node_class) {
/* 000363 */ 		var kwargs = dict ();
/* 000363 */ 		if (arguments.length) {
/* 000363 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000363 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000363 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000363 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000363 */ 					switch (__attrib0__) {
/* 000363 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000363 */ 						case 'node_class': var node_class = __allkwargs0__ [__attrib0__]; break;
/* 000363 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000363 */ 					}
/* 000363 */ 				}
/* 000363 */ 				delete kwargs.__kwargtrans__;
/* 000363 */ 			}
/* 000363 */ 		}
/* 000363 */ 		else {
/* 000363 */ 		}
/* 000364 */ 		var node = __call__ (__call__ (__super__, null, LLMLatexWalker, 'make_node'), null, self, node_class, __kwargtrans__ (kwargs));
/* 000366 */ 		node.node_id = __call__ (fn_unique_object_id, null, node);
/* 000367 */ 		return node;
/* 000367 */ 	});},
/* 000371 */ 	get filter_whitespace_comments_nodes () {return __get__ (this, function (self, nodelist) {
/* 000371 */ 		if (arguments.length) {
/* 000371 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000371 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000371 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000371 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000371 */ 					switch (__attrib0__) {
/* 000371 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000371 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000371 */ 					}
/* 000371 */ 				}
/* 000371 */ 			}
/* 000371 */ 		}
/* 000371 */ 		else {
/* 000371 */ 		}
/* 000376 */ 		return (function () {
/* 000376 */ 			var __accu0__ = nodelist;
/* 000376 */ 			return __call__ (__accu0__.filter, __accu0__, __kwargtrans__ ({node_predicate_fn: self._filter_whitespace_comments_nodes_predicate, skip_none: true, skip_comments: true, skip_whitespace_char_nodes: true}));
/* 000376 */ 		}) ();
/* 000376 */ 	});},
/* 000383 */ 	get _filter_whitespace_comments_nodes_predicate () {return __get__ (this, function (self, node) {
/* 000383 */ 		if (arguments.length) {
/* 000383 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000383 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000383 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000383 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000383 */ 					switch (__attrib0__) {
/* 000383 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000383 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000383 */ 					}
/* 000383 */ 				}
/* 000383 */ 			}
/* 000383 */ 		}
/* 000383 */ 		else {
/* 000383 */ 		}
/* 000384 */ 		if (__t__ (__call__ (getattr, null, node, 'llm_is_paragraph_break_marker', false))) {
/* 000385 */ 			return false;
/* 000385 */ 		}
/* 000386 */ 		return true;
/* 000386 */ 	});}
/* 000386 */ });
/* 000394 */ export var features_ensure_dependencies_are_met = function (features) {
/* 000394 */ 	if (arguments.length) {
/* 000394 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000394 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000394 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000394 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000394 */ 				switch (__attrib0__) {
/* 000394 */ 					case 'features': var features = __allkwargs0__ [__attrib0__]; break;
/* 000394 */ 				}
/* 000394 */ 			}
/* 000394 */ 		}
/* 000394 */ 	}
/* 000394 */ 	else {
/* 000394 */ 	}
/* 000396 */ 	var feature_names = __call__ (set, null, (function () {
/* 000396 */ 		var __accu0__ = [];
/* 000396 */ 		var __iterable0__ = features;
/* 000396 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000396 */ 			var f = __getitem__ (__iterable0__, __index0__);
/* 000396 */ 			(function () {
/* 000396 */ 				var __accu1__ = __accu0__;
/* 000396 */ 				return __call__ (__accu1__.append, __accu1__, f.feature_name);
/* 000396 */ 			}) ();
/* 000396 */ 		}
/* 000396 */ 		return __accu0__;
/* 000396 */ 	}) ());
/* 000398 */ 	var __iterable0__ = features;
/* 000398 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000398 */ 		var feature = __getitem__ (__iterable0__, __index0__);
/* 000399 */ 		if (__t__ (feature.feature_dependencies === null)) {
/* 000399 */ 			continue;
/* 000399 */ 		}
/* 000401 */ 		var __iterable1__ = feature.feature_dependencies;
/* 000401 */ 		for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000401 */ 			var fdepname = __getitem__ (__iterable1__, __index1__);
/* 000402 */ 			if (__t__ (!__in__ (fdepname, feature_names))) {
/* 000404 */ 				var __except0__ = __call__ (ValueError, null, 'Feature ‘{}’ ({}) has unmet dependency ‘{}’'.format (feature.feature_name, __call__ (repr, null, feature), fdepname));
/* 000404 */ 				__except0__.__cause__ = null;
/* 000404 */ 				throw __except0__;
/* 000404 */ 			}
/* 000404 */ 		}
/* 000404 */ 	}
/* 000404 */ };
/* 000410 */ export var features_sorted_by_dependencies = function (features) {
/* 000410 */ 	if (arguments.length) {
/* 000410 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000410 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000410 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000410 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000410 */ 				switch (__attrib0__) {
/* 000410 */ 					case 'features': var features = __allkwargs0__ [__attrib0__]; break;
/* 000410 */ 				}
/* 000410 */ 			}
/* 000410 */ 		}
/* 000410 */ 	}
/* 000410 */ 	else {
/* 000410 */ 	}
/* 000427 */ 	var features_to_sort = __call__ (list, null, features);
/* 000431 */ 	var features_by_name = dict ({});
/* 000432 */ 	var __iterable0__ = features_to_sort;
/* 000432 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000432 */ 		var feature = __getitem__ (__iterable0__, __index0__);
/* 000433 */ 		if (__t__ (__in__ (feature.feature_name, features_by_name))) {
/* 000435 */ 			var __except0__ = __call__ (ValueError, null, 'Duplicate feature detected: feature {} has the same name (‘{}’) as the as already-included feature {}'.format (__call__ (repr, null, feature), feature.feature_name, __getitem__ (features_by_name, feature.feature_name)));
/* 000435 */ 			__except0__.__cause__ = null;
/* 000435 */ 			throw __except0__;
/* 000435 */ 		}
/* 000439 */ 		__setitem__ (features_by_name, feature.feature_name, feature);
/* 000439 */ 	}
/* 000444 */ 	(function () {
/* 000444 */ 		var __accu0__ = features_to_sort;
/* 000444 */ 		return __call__ (__accu0__.py_sort, __accu0__, __kwargtrans__ ({key: (function __lambda__ (f) {
/* 000444 */ 			if (arguments.length) {
/* 000444 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000444 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000444 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000444 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000444 */ 						switch (__attrib0__) {
/* 000444 */ 							case 'f': var f = __allkwargs0__ [__attrib0__]; break;
/* 000444 */ 						}
/* 000444 */ 					}
/* 000444 */ 				}
/* 000444 */ 			}
/* 000444 */ 			else {
/* 000444 */ 			}
/* 000444 */ 			return f.feature_name;
/* 000444 */ 		})}));
/* 000444 */ 	}) ();
/* 000447 */ 	__call__ (features_ensure_dependencies_are_met, null, features_to_sort);
/* 000449 */ 	var get_feature_dependencies = function (f) {
/* 000449 */ 		if (arguments.length) {
/* 000449 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000449 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000449 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000449 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000449 */ 					switch (__attrib0__) {
/* 000449 */ 						case 'f': var f = __allkwargs0__ [__attrib0__]; break;
/* 000449 */ 					}
/* 000449 */ 				}
/* 000449 */ 			}
/* 000449 */ 		}
/* 000449 */ 		else {
/* 000449 */ 		}
/* 000450 */ 		var deps = __call__ (set, null);
/* 000451 */ 		if (__t__ (f.feature_dependencies !== null)) {
/* 000452 */ 			var __iterable0__ = f.feature_dependencies;
/* 000452 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000452 */ 				var fdepname = __getitem__ (__iterable0__, __index0__);
/* 000453 */ 				(function () {
/* 000453 */ 					var __accu0__ = deps;
/* 000453 */ 					return __call__ (__accu0__.add, __accu0__, fdepname);
/* 000453 */ 				}) ();
/* 000453 */ 			}
/* 000453 */ 		}
/* 000454 */ 		if (__t__ (f.feature_optional_dependencies !== null)) {
/* 000455 */ 			var __iterable0__ = f.feature_optional_dependencies;
/* 000455 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000455 */ 				var foptdepname = __getitem__ (__iterable0__, __index0__);
/* 000456 */ 				if (__t__ (__in__ (foptdepname, features_by_name))) {
/* 000457 */ 					(function () {
/* 000457 */ 						var __accu0__ = deps;
/* 000457 */ 						return __call__ (__accu0__.add, __accu0__, foptdepname);
/* 000457 */ 					}) ();
/* 000457 */ 				}
/* 000457 */ 			}
/* 000457 */ 		}
/* 000458 */ 		return __call__ (sorted, null, __call__ (list, null, deps));
/* 000458 */ 	};
/* 000466 */ 	var all_feature_dependencies = __call__ (dict, null, (function () {
/* 000466 */ 		var __accu0__ = [];
/* 000468 */ 		var __iterable0__ = (function () {
/* 000468 */ 			var __accu1__ = features_by_name;
/* 000468 */ 			return __call__ (__accu1__.py_items, __accu1__);
/* 000468 */ 		}) ();
/* 000468 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000468 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000468 */ 			var fname = __left0__ [0];
/* 000468 */ 			var f = __left0__ [1];
/* 000468 */ 			(function () {
/* 000468 */ 				var __accu1__ = __accu0__;
/* 000467 */ 				return __call__ (__accu1__.append, __accu1__, tuple ([fname, __call__ (get_feature_dependencies, null, f)]));
/* 000467 */ 			}) ();
/* 000467 */ 		}
/* 000467 */ 		return __accu0__;
/* 000467 */ 	}) ());
/* 000471 */ 	var get_feature_dependents = function (fparentname, all_feature_dependencies) {
/* 000471 */ 		if (arguments.length) {
/* 000471 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000471 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000471 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000471 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000471 */ 					switch (__attrib0__) {
/* 000471 */ 						case 'fparentname': var fparentname = __allkwargs0__ [__attrib0__]; break;
/* 000471 */ 						case 'all_feature_dependencies': var all_feature_dependencies = __allkwargs0__ [__attrib0__]; break;
/* 000471 */ 					}
/* 000471 */ 				}
/* 000471 */ 			}
/* 000471 */ 		}
/* 000471 */ 		else {
/* 000471 */ 		}
/* 000472 */ 		var dependents = __call__ (set, null);
/* 000473 */ 		var __iterable0__ = (function () {
/* 000473 */ 			var __accu0__ = all_feature_dependencies;
/* 000473 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000473 */ 		}) ();
/* 000473 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000473 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000473 */ 			var fname = __left0__ [0];
/* 000473 */ 			var fdepnames = __left0__ [1];
/* 000474 */ 			var __iterable1__ = fdepnames;
/* 000474 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000474 */ 				var fdepname = __getitem__ (__iterable1__, __index1__);
/* 000475 */ 				if (__t__ (__eq__ (fdepname, fparentname))) {
/* 000476 */ 					(function () {
/* 000476 */ 						var __accu0__ = dependents;
/* 000476 */ 						return __call__ (__accu0__.add, __accu0__, fname);
/* 000476 */ 					}) ();
/* 000476 */ 				}
/* 000476 */ 			}
/* 000476 */ 		}
/* 000477 */ 		return __call__ (sorted, null, __call__ (list, null, dependents));
/* 000477 */ 	};
/* 000483 */ 	var sorted_features = [];
/* 000484 */ 	var root_features = (function () {
/* 000484 */ 		var __accu0__ = [];
/* 000487 */ 		var __iterable0__ = __call__ (py_reversed, null, features_to_sort);
/* 000487 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000487 */ 			var f = __getitem__ (__iterable0__, __index0__);
/* 000488 */ 			if (__t__ (__eq__ (__call__ (len, null, __getitem__ (all_feature_dependencies, f.feature_name)), 0))) {
/* 000488 */ 				(function () {
/* 000488 */ 					var __accu1__ = __accu0__;
/* 000488 */ 					return __call__ (__accu1__.append, __accu1__, f);
/* 000488 */ 				}) ();
/* 000488 */ 			}
/* 000488 */ 		}
/* 000488 */ 		return __accu0__;
/* 000488 */ 	}) ();
/* 000492 */ 	while (__t__ (__gt__ (__call__ (len, null, root_features), 0))) {
/* 000493 */ 		var n = (function () {
/* 000493 */ 			var __accu0__ = root_features;
/* 000493 */ 			return __call__ (__accu0__.py_pop, __accu0__);
/* 000493 */ 		}) ();
/* 000494 */ 		(function () {
/* 000494 */ 			var __accu0__ = sorted_features;
/* 000494 */ 			return __call__ (__accu0__.append, __accu0__, n);
/* 000494 */ 		}) ();
/* 000496 */ 		var n_name = n.feature_name;
/* 000498 */ 		var iter_dependents = __call__ (get_feature_dependents, null, n_name, all_feature_dependencies);
/* 000499 */ 		var __iterable0__ = iter_dependents;
/* 000499 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000499 */ 			var fdependentname = __getitem__ (__iterable0__, __index0__);
/* 000502 */ 			(function () {
/* 000502 */ 				var __accu0__ = __getitem__ (all_feature_dependencies, fdependentname);
/* 000502 */ 				return __call__ (__accu0__.remove, __accu0__, n_name);
/* 000502 */ 			}) ();
/* 000506 */ 			if (__t__ (__eq__ (__call__ (len, null, __getitem__ (all_feature_dependencies, fdependentname)), 0))) {
/* 000508 */ 				(function () {
/* 000508 */ 					var __accu0__ = root_features;
/* 000508 */ 					return __call__ (__accu0__.insert, __accu0__, 0, __getitem__ (features_by_name, fdependentname));
/* 000508 */ 				}) ();
/* 000508 */ 			}
/* 000508 */ 		}
/* 000508 */ 	}
/* 000511 */ 	var problematic_features = [];
/* 000512 */ 	var __iterable0__ = (function () {
/* 000512 */ 		var __accu0__ = all_feature_dependencies;
/* 000512 */ 		return __call__ (__accu0__.py_items, __accu0__);
/* 000512 */ 	}) ();
/* 000512 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000512 */ 		var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000512 */ 		var fsrcname = __left0__ [0];
/* 000512 */ 		var featuredeps = __left0__ [1];
/* 000513 */ 		if (__t__ (__gt__ (__call__ (len, null, featuredeps), 0))) {
/* 000514 */ 			(function () {
/* 000514 */ 				var __accu0__ = problematic_features;
/* 000515 */ 				return __call__ (__accu0__.append, __accu0__, __add__ ('‘{}’ → '.format (fsrcname), (function () {
/* 000515 */ 					var __accu1__ = ', ';
/* 000515 */ 					return __call__ (__accu1__.join, __accu1__, (function () {
/* 000515 */ 						var __accu2__ = [];
/* 000515 */ 						var __iterable1__ = featuredeps;
/* 000515 */ 						for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000515 */ 							var fdepname = __getitem__ (__iterable1__, __index1__);
/* 000515 */ 							(function () {
/* 000515 */ 								var __accu3__ = __accu2__;
/* 000515 */ 								return __call__ (__accu3__.append, __accu3__, '‘{}’'.format (fdepname));
/* 000515 */ 							}) ();
/* 000515 */ 						}
/* 000515 */ 						return __accu2__;
/* 000515 */ 					}) ());
/* 000515 */ 				}) ()));
/* 000515 */ 			}) ();
/* 000515 */ 		}
/* 000515 */ 	}
/* 000517 */ 	if (__t__ (__gt__ (__call__ (len, null, problematic_features), 0))) {
/* 000520 */ 		var __except0__ = __call__ (ValueError, null, __add__ ('The feature dependency graph has a cycle!  Problematic dependencies:'.format (), (function () {
/* 000520 */ 			var __accu0__ = '; ';
/* 000520 */ 			return __call__ (__accu0__.join, __accu0__, problematic_features);
/* 000520 */ 		}) ()));
/* 000520 */ 		__except0__.__cause__ = null;
/* 000520 */ 		throw __except0__;
/* 000520 */ 	}
/* 000523 */ 	if (__t__ (__ne__ (__call__ (len, null, sorted_features), __call__ (len, null, features_to_sort)))) {
/* 000524 */ 		var __except0__ = __call__ (RuntimeError, null, "Internal error, we didn't get all the features right when ordering them!");
/* 000524 */ 		__except0__.__cause__ = null;
/* 000524 */ 		throw __except0__;
/* 000524 */ 	}
/* 000528 */ 	return tuple ([sorted_features, features_by_name]);
/* 000528 */ };
/* 000557 */ export var LLMEnvironment =  __class__ ('LLMEnvironment', [object], {
/* 000557 */ 	__module__: __name__,
/* 000576 */ 	get __init__ () {return __get__ (this, function (self, features, parsing_state, latex_context) {
/* 000576 */ 		var tolerant_parsing = false;
/* 000576 */ 		var parsing_mode_deltas = null;
/* 000576 */ 		if (arguments.length) {
/* 000576 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000576 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000576 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000576 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000576 */ 					switch (__attrib0__) {
/* 000576 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000576 */ 						case 'features': var features = __allkwargs0__ [__attrib0__]; break;
/* 000576 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000576 */ 						case 'latex_context': var latex_context = __allkwargs0__ [__attrib0__]; break;
/* 000576 */ 						case 'tolerant_parsing': var tolerant_parsing = __allkwargs0__ [__attrib0__]; break;
/* 000576 */ 						case 'parsing_mode_deltas': var parsing_mode_deltas = __allkwargs0__ [__attrib0__]; break;
/* 000576 */ 					}
/* 000576 */ 				}
/* 000576 */ 			}
/* 000576 */ 		}
/* 000576 */ 		else {
/* 000576 */ 		}
/* 000585 */ 		__call__ (__call__ (__super__, null, LLMEnvironment, '__init__'), null, self);
/* 000587 */ 		// pass;
/* 000591 */ 		self.latex_context = latex_context;
/* 000592 */ 		self.parsing_state = parsing_state;
/* 000594 */ 		self.parsing_mode_deltas = (__t__ (parsing_mode_deltas) ? __call__ (dict, null, parsing_mode_deltas) : dict ({}));
/* 000596 */ 		var __left0__ = __call__ (features_sorted_by_dependencies, null, features);
/* 000596 */ 		self.features = __left0__ [0];
/* 000596 */ 		self.features_by_name = __left0__ [1];
/* 000598 */ 		// pass;
/* 000602 */ 		self.tolerant_parsing = tolerant_parsing;
/* 000604 */ 		self._node_list_finalizer = __call__ (NodeListFinalizer, null);
/* 000606 */ 		if (__t__ (self.parsing_state.latex_context === null)) {
/* 000609 */ 			var __iterable0__ = self.features;
/* 000609 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000609 */ 				var f = __getitem__ (__iterable0__, __index0__);
/* 000610 */ 				var moredefs = (function () {
/* 000610 */ 					var __accu0__ = f;
/* 000610 */ 					return __call__ (__accu0__.add_latex_context_definitions, __accu0__);
/* 000610 */ 				}) ();
/* 000611 */ 				// pass;
/* 000614 */ 				if (__t__ (moredefs !== null)) {
/* 000615 */ 					var moredefs = __call__ (dict, null, moredefs);
/* 000616 */ 					if (__t__ (__call__ (len, null, moredefs))) {
/* 000617 */ 						// pass;
/* 000620 */ 						(function () {
/* 000620 */ 							var __accu0__ = moredefs;
/* 000620 */ 							return __call__ (__accu0__.py_update, __accu0__, __call__ (dict, null, __kwargtrans__ ({prepend: true})));
/* 000620 */ 						}) ();
/* 000621 */ 						(function () {
/* 000621 */ 							var __accu0__ = self.latex_context;
/* 000621 */ 							return __call__ (__accu0__.add_context_category, __accu0__, 'feature--{}'.format (f.feature_name), __kwargtrans__ (moredefs));
/* 000621 */ 						}) ();
/* 000621 */ 					}
/* 000621 */ 				}
/* 000621 */ 			}
/* 000627 */ 			(function () {
/* 000627 */ 				var __accu0__ = self.latex_context;
/* 000627 */ 				return __call__ (__accu0__.freeze, __accu0__);
/* 000627 */ 			}) ();
/* 000630 */ 			self.parsing_state.latex_context = self.latex_context;
/* 000630 */ 		}
/* 000632 */ 		else if (__t__ (self.latex_context !== null)) {
/* 000635 */ 			var __except0__ = __call__ (RuntimeError, null, 'The specified `parsing_state` instance already has a latex_context set');
/* 000635 */ 			__except0__.__cause__ = null;
/* 000635 */ 			throw __except0__;
/* 000635 */ 		}
/* 000635 */ 	});},
/* 000640 */ 	get feature () {return __get__ (this, function (self, feature_name) {
/* 000640 */ 		if (arguments.length) {
/* 000640 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000640 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000640 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000640 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000640 */ 					switch (__attrib0__) {
/* 000640 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000640 */ 						case 'feature_name': var feature_name = __allkwargs0__ [__attrib0__]; break;
/* 000640 */ 					}
/* 000640 */ 				}
/* 000640 */ 			}
/* 000640 */ 		}
/* 000640 */ 		else {
/* 000640 */ 		}
/* 000641 */ 		return __getitem__ (self.features_by_name, feature_name);
/* 000641 */ 	});},
/* 000644 */ 	parsing_state_event_handler: null,
/* 000651 */ 	get make_latex_walker () {return __get__ (this, function (self, llm_text) {
/* 000651 */ 		var parsing_mode = null;
/* 000651 */ 		var resource_info = null;
/* 000651 */ 		var tolerant_parsing = null;
/* 000651 */ 		var what = null;
/* 000651 */ 		var input_lineno_colno_offsets = null;
/* 000651 */ 		if (arguments.length) {
/* 000651 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000651 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000651 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000651 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000651 */ 					switch (__attrib0__) {
/* 000651 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000651 */ 						case 'llm_text': var llm_text = __allkwargs0__ [__attrib0__]; break;
/* 000651 */ 						case 'standalone_mode': var standalone_mode = __allkwargs0__ [__attrib0__]; break;
/* 000651 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000651 */ 						case 'parsing_mode': var parsing_mode = __allkwargs0__ [__attrib0__]; break;
/* 000651 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000651 */ 						case 'tolerant_parsing': var tolerant_parsing = __allkwargs0__ [__attrib0__]; break;
/* 000651 */ 						case 'what': var what = __allkwargs0__ [__attrib0__]; break;
/* 000651 */ 						case 'input_lineno_colno_offsets': var input_lineno_colno_offsets = __allkwargs0__ [__attrib0__]; break;
/* 000651 */ 					}
/* 000651 */ 				}
/* 000651 */ 			}
/* 000651 */ 		}
/* 000651 */ 		else {
/* 000651 */ 		}
/* 000664 */ 		var default_parsing_state = (function () {
/* 000664 */ 			var __accu0__ = self;
/* 000664 */ 			return __call__ (__accu0__.make_parsing_state, __accu0__, __kwargtrans__ ({is_block_level: is_block_level, parsing_mode: parsing_mode}));
/* 000664 */ 		}) ();
/* 000669 */ 		if (__t__ (tolerant_parsing === null)) {
/* 000670 */ 			var tolerant_parsing = self.tolerant_parsing;
/* 000670 */ 		}
/* 000672 */ 		if (__t__ (input_lineno_colno_offsets === null)) {
/* 000673 */ 			var input_lineno_colno_offsets = dict ({});
/* 000673 */ 		}
/* 000686 */ 		var latex_walker = __call__ (LLMLatexWalker, null, __kwargtrans__ ({llm_text: llm_text, default_parsing_state: default_parsing_state, tolerant_parsing: tolerant_parsing, llm_environment: self, standalone_mode: standalone_mode, resource_info: resource_info, what: what, parsing_state_event_handler: self.parsing_state_event_handler, line_number_offset: (function () {
/* 000686 */ 			var __accu0__ = input_lineno_colno_offsets;
/* 000686 */ 			return __call__ (__accu0__.py_get, __accu0__, 'line_number_offset', null);
/* 000688 */ 		}) (), first_line_column_offset: (function () {
/* 000688 */ 			var __accu0__ = input_lineno_colno_offsets;
/* 000688 */ 			return __call__ (__accu0__.py_get, __accu0__, 'first_line_column_offset', null);
/* 000689 */ 		}) (), column_offset: (function () {
/* 000689 */ 			var __accu0__ = input_lineno_colno_offsets;
/* 000689 */ 			return __call__ (__accu0__.py_get, __accu0__, 'column_offset', null);
/* 000689 */ 		}) ()}));
/* 000692 */ 		return latex_walker;
/* 000692 */ 	});},
/* 000694 */ 	get make_parsing_state () {return __get__ (this, function (self, is_block_level, parsing_mode) {
/* 000694 */ 		if (typeof parsing_mode == 'undefined' || (parsing_mode != null && parsing_mode.hasOwnProperty ("__kwargtrans__"))) {;
/* 000694 */ 			var parsing_mode = null;
/* 000694 */ 		};
/* 000694 */ 		if (arguments.length) {
/* 000694 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000694 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000694 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000694 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000694 */ 					switch (__attrib0__) {
/* 000694 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000694 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000694 */ 						case 'parsing_mode': var parsing_mode = __allkwargs0__ [__attrib0__]; break;
/* 000694 */ 					}
/* 000694 */ 				}
/* 000694 */ 			}
/* 000694 */ 		}
/* 000694 */ 		else {
/* 000694 */ 		}
/* 000698 */ 		var default_parsing_state = self.parsing_state;
/* 000700 */ 		if (__t__ (parsing_mode !== null)) {
/* 000701 */ 			try {
/* 000702 */ 				var parsing_state_delta = __getitem__ (self.parsing_mode_deltas, parsing_mode);
/* 000702 */ 			}
/* 000702 */ 			catch (__except0__) {
/* 000702 */ 				if (isinstance (__except0__, KeyError)) {
/* 000702 */ 					var e = __except0__;
/* 000704 */ 					var __except1__ = __call__ (ValueError, null, 'Invalid parsing_mode ‘{}’'.format (parsing_mode));
/* 000704 */ 					__except1__.__cause__ = null;
/* 000704 */ 					throw __except1__;
/* 000704 */ 				}
/* 000704 */ 				else {
/* 000704 */ 					throw __except0__;
/* 000704 */ 				}
/* 000704 */ 			}
/* 000706 */ 			if (__t__ (parsing_state_delta !== null)) {
/* 000707 */ 				var default_parsing_state = (function () {
/* 000707 */ 					var __accu0__ = parsing_state_delta;
/* 000707 */ 					return __call__ (__accu0__.get_updated_parsing_state, __accu0__, default_parsing_state, __kwargtrans__ ({latex_walker: null}));
/* 000707 */ 				}) ();
/* 000707 */ 			}
/* 000707 */ 		}
/* 000712 */ 		var kwargs = dict ({});
/* 000713 */ 		if (__t__ (is_block_level !== null)) {
/* 000714 */ 			__setitem__ (kwargs, 'is_block_level', is_block_level);
/* 000714 */ 		}
/* 000716 */ 		return (function () {
/* 000716 */ 			var __accu0__ = default_parsing_state;
/* 000716 */ 			return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ (kwargs));
/* 000716 */ 		}) ();
/* 000716 */ 	});},
/* 000719 */ 	get make_fragment () {return __get__ (this, function (self, llm_text) {
/* 000719 */ 		var kwargs = dict ();
/* 000719 */ 		if (arguments.length) {
/* 000719 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000719 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000719 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000719 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000719 */ 					switch (__attrib0__) {
/* 000719 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000719 */ 						case 'llm_text': var llm_text = __allkwargs0__ [__attrib0__]; break;
/* 000719 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000719 */ 					}
/* 000719 */ 				}
/* 000719 */ 				delete kwargs.__kwargtrans__;
/* 000719 */ 			}
/* 000719 */ 		}
/* 000719 */ 		else {
/* 000719 */ 		}
/* 000721 */ 		if (__t__ (__call__ (isinstance, null, llm_text, LLMFragment))) {
/* 000722 */ 			var frag = llm_text;
/* 000723 */ 			var __iterable0__ = tuple (['is_block_level', 'standalone_mode']);
/* 000723 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000723 */ 				var fld = __getitem__ (__iterable0__, __index0__);
/* 000725 */ 				if (__t__ (__t__ (__in__ (fld, kwargs)) && __t__ (__getitem__ (kwargs, fld) !== null) && __ne__ (__getitem__ (kwargs, fld), __call__ (getattr, null, frag, fld)))) {
/* 000729 */ 					var __except0__ = __call__ (ValueError, null, 'make_fragment(): LLMFragment instance specified but its ‘{}’ ({}) differs with requested ‘{}’ ({})'.format (fld, __call__ (repr, null, __call__ (getattr, null, frag, fld)), fld, __getitem__ (kwargs, fld)));
/* 000729 */ 					__except0__.__cause__ = null;
/* 000729 */ 					throw __except0__;
/* 000729 */ 				}
/* 000729 */ 			}
/* 000732 */ 			return frag;
/* 000732 */ 		}
/* 000734 */ 		try {
/* 000735 */ 			var fragment = __call__ (LLMFragment, null, llm_text, __kwargtrans__ (__mergekwargtrans__ ({environment: self}, kwargs)));
/* 000736 */ 			return fragment;
/* 000736 */ 		}
/* 000736 */ 		catch (__except0__) {
/* 000738 */ 			if (__t__ (!__t__ (((function () {
/* 000738 */ 				var __accu0__ = kwargs;
/* 000738 */ 				return __call__ (__accu0__.py_get, __accu0__, 'silent', false);
/* 000738 */ 			}) ())))) {
/* 000739 */ 				(function () {
/* 000739 */ 					var __accu0__ = logger;
/* 000740 */ 					return __call__ (__accu0__.error, __accu0__, (function () {
/* 000740 */ 						var __accu1__ = 'Error compiling fragment for {}\nContent was:\n‘{}’\n';
/* 000741 */ 						return __call__ (__accu1__.format, __accu1__, (function () {
/* 000741 */ 							var __accu2__ = kwargs;
/* 000741 */ 							return __call__ (__accu2__.py_get, __accu2__, 'what', '(unknown)');
/* 000741 */ 						}) (), llm_text);
/* 000741 */ 					}) (), __kwargtrans__ ({exc_info: true}));
/* 000741 */ 				}) ();
/* 000741 */ 			}
/* 000744 */ 			__except0__.__cause__ = null;
/* 000744 */ 			throw __except0__;
/* 000744 */ 		}
/* 000744 */ 	});},
/* 000746 */ 	get node_list_finalizer () {return __get__ (this, function (self) {
/* 000746 */ 		if (arguments.length) {
/* 000746 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000746 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000746 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000746 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000746 */ 					switch (__attrib0__) {
/* 000746 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000746 */ 					}
/* 000746 */ 				}
/* 000746 */ 			}
/* 000746 */ 		}
/* 000746 */ 		else {
/* 000746 */ 		}
/* 000747 */ 		return self._node_list_finalizer;
/* 000747 */ 	});},
/* 000751 */ 	get make_document () {return __get__ (this, function (self, render_callback) {
/* 000751 */ 		var kwargs = dict ();
/* 000751 */ 		if (arguments.length) {
/* 000751 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000751 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000751 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000751 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000751 */ 					switch (__attrib0__) {
/* 000751 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000751 */ 						case 'render_callback': var render_callback = __allkwargs0__ [__attrib0__]; break;
/* 000751 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000751 */ 					}
/* 000751 */ 				}
/* 000751 */ 				delete kwargs.__kwargtrans__;
/* 000751 */ 			}
/* 000751 */ 		}
/* 000751 */ 		else {
/* 000751 */ 		}
/* 000759 */ 		var doc = __call__ (LLMDocument, null, render_callback, __kwargtrans__ (__mergekwargtrans__ ({environment: self}, kwargs)));
/* 000764 */ 		(function () {
/* 000764 */ 			var __accu0__ = doc;
/* 000764 */ 			return __call__ (__accu0__.initialize, __accu0__);
/* 000764 */ 		}) ();
/* 000765 */ 		return doc;
/* 000765 */ 	});},
/* 000768 */ 	get get_features_selection () {return __get__ (this, function (self, enable_features) {
/* 000768 */ 		if (arguments.length) {
/* 000768 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000768 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000768 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000768 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000768 */ 					switch (__attrib0__) {
/* 000768 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000768 */ 						case 'enable_features': var enable_features = __allkwargs0__ [__attrib0__]; break;
/* 000768 */ 					}
/* 000768 */ 				}
/* 000768 */ 			}
/* 000768 */ 		}
/* 000768 */ 		else {
/* 000768 */ 		}
/* 000770 */ 		if (__t__ (enable_features === null)) {
/* 000772 */ 			return self.features;
/* 000772 */ 		}
/* 000774 */ 		var features = (function () {
/* 000774 */ 			var __accu0__ = [];
/* 000774 */ 			var __iterable0__ = enable_features;
/* 000774 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000776 */ 				var feature_name = __getitem__ (__iterable0__, __index0__);
/* 000776 */ 				(function () {
/* 000776 */ 					var __accu1__ = __accu0__;
/* 000776 */ 					return __call__ (__accu1__.append, __accu1__, __getitem__ (self.features_by_name, feature_name));
/* 000776 */ 				}) ();
/* 000776 */ 			}
/* 000776 */ 			return __accu0__;
/* 000776 */ 		}) ();
/* 000780 */ 		__call__ (features_ensure_dependencies_are_met, null, features);
/* 000782 */ 		return features;
/* 000782 */ 	});},
/* 000787 */ 	environment_get_parse_error_message: null,
/* 000789 */ 	get get_parse_error_message () {return __get__ (this, function (self, exception_object) {
/* 000789 */ 		if (arguments.length) {
/* 000789 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000789 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000789 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000789 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000789 */ 					switch (__attrib0__) {
/* 000789 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000789 */ 						case 'exception_object': var exception_object = __allkwargs0__ [__attrib0__]; break;
/* 000789 */ 					}
/* 000789 */ 				}
/* 000789 */ 			}
/* 000789 */ 		}
/* 000789 */ 		else {
/* 000789 */ 		}
/* 000790 */ 		if (__t__ (self.environment_get_parse_error_message !== null)) {
/* 000791 */ 			return (function () {
/* 000791 */ 				var __accu0__ = self;
/* 000791 */ 				return __call__ (__accu0__.environment_get_parse_error_message, __accu0__, exception_object);
/* 000791 */ 			}) ();
/* 000791 */ 		}
/* 000792 */ 		return (function () {
/* 000792 */ 			var __accu0__ = __call__ (LatexWalkerParseErrorFormatter, null, exception_object);
/* 000792 */ 			return __call__ (__accu0__.to_display_string, __accu0__);
/* 000792 */ 		}) ();
/* 000792 */ 	});}
/* 000792 */ });
/* 000801 */ export var standard_parsing_state = function () {
/* 000801 */ 	var force_block_level = null;
/* 000801 */ 	var enable_comments = true;
/* 000801 */ 	var comment_start = '%%';
/* 000801 */ 	var extra_forbidden_characters = '';
/* 000801 */ 	var dollar_inline_math_mode = false;
/* 000801 */ 	if (arguments.length) {
/* 000801 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000801 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000801 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000801 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000801 */ 				switch (__attrib0__) {
/* 000801 */ 					case 'force_block_level': var force_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000801 */ 					case 'enable_comments': var enable_comments = __allkwargs0__ [__attrib0__]; break;
/* 000801 */ 					case 'comment_start': var comment_start = __allkwargs0__ [__attrib0__]; break;
/* 000801 */ 					case 'extra_forbidden_characters': var extra_forbidden_characters = __allkwargs0__ [__attrib0__]; break;
/* 000801 */ 					case 'dollar_inline_math_mode': var dollar_inline_math_mode = __allkwargs0__ [__attrib0__]; break;
/* 000801 */ 				}
/* 000801 */ 			}
/* 000801 */ 		}
/* 000801 */ 	}
/* 000801 */ 	else {
/* 000801 */ 	}
/* 000817 */ 	var forbidden_characters = __call__ (str, null, extra_forbidden_characters);
/* 000818 */ 	if (__t__ (__t__ (!__t__ ((dollar_inline_math_mode))) && !__in__ ('$', forbidden_characters))) {
/* 000819 */ 		var forbidden_characters = __call__ (__iadd__, null, forbidden_characters, '$');
/* 000819 */ 	}
/* 000820 */ 	if (__t__ (__t__ ((__t__ (!__t__ ((enable_comments))) || __ne__ (comment_start, '%'))) && !__in__ ('%', forbidden_characters))) {
/* 000822 */ 		var forbidden_characters = __call__ (__iadd__, null, forbidden_characters, '%');
/* 000822 */ 	}
/* 000824 */ 	var latex_inline_math_delimiters = [tuple (['\\(', '\\)'])];
/* 000826 */ 	if (__t__ (dollar_inline_math_mode)) {
/* 000827 */ 		(function () {
/* 000827 */ 			var __accu0__ = latex_inline_math_delimiters;
/* 000827 */ 			return __call__ (__accu0__.append, __accu0__, tuple (['$', '$']));
/* 000827 */ 		}) ();
/* 000827 */ 	}
/* 000829 */ 	return __call__ (LLMParsingState, null, __kwargtrans__ ({is_block_level: force_block_level, latex_context: null, enable_comments: enable_comments, comment_start: comment_start, latex_inline_math_delimiters: latex_inline_math_delimiters, latex_display_math_delimiters: [tuple (['\\[', '\\]'])], forbidden_characters: forbidden_characters}));
/* 000829 */ };
/* 000841 */ export var LLMLatexWalkerMathContextParsingStateEventHandler =  __class__ ('LLMLatexWalkerMathContextParsingStateEventHandler', [latexnodes.LatexWalkerParsingStateEventHandler], {
/* 000841 */ 	__module__: __name__,
/* 000845 */ 	math_mode_extend_context: dict ({'unknown_macro_spec': (function () {
/* 000845 */ 		var __accu0__ = macrospec;
/* 000845 */ 		return __call__ (__accu0__.MacroSpec, __accu0__, '');
/* 000846 */ 	}) (), 'unknown_environment_spec': (function () {
/* 000846 */ 		var __accu0__ = macrospec;
/* 000846 */ 		return __call__ (__accu0__.EnvironmentSpec, __accu0__, '');
/* 000847 */ 	}) (), 'unknown_specials_spec': (function () {
/* 000847 */ 		var __accu0__ = macrospec;
/* 000847 */ 		return __call__ (__accu0__.SpecialsSpec, __accu0__, '');
/* 000844 */ 	}) ()}),
/* 000850 */ 	get enter_math_mode () {return __get__ (this, function (self, math_mode_delimiter, trigger_token) {
/* 000850 */ 		if (typeof math_mode_delimiter == 'undefined' || (math_mode_delimiter != null && math_mode_delimiter.hasOwnProperty ("__kwargtrans__"))) {;
/* 000850 */ 			var math_mode_delimiter = null;
/* 000850 */ 		};
/* 000850 */ 		if (typeof trigger_token == 'undefined' || (trigger_token != null && trigger_token.hasOwnProperty ("__kwargtrans__"))) {;
/* 000850 */ 			var trigger_token = null;
/* 000850 */ 		};
/* 000850 */ 		if (arguments.length) {
/* 000850 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000850 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000850 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000850 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000850 */ 					switch (__attrib0__) {
/* 000850 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000850 */ 						case 'math_mode_delimiter': var math_mode_delimiter = __allkwargs0__ [__attrib0__]; break;
/* 000850 */ 						case 'trigger_token': var trigger_token = __allkwargs0__ [__attrib0__]; break;
/* 000850 */ 					}
/* 000850 */ 				}
/* 000850 */ 			}
/* 000850 */ 		}
/* 000850 */ 		else {
/* 000850 */ 		}
/* 000851 */ 		var set_attributes = __call__ (dict, null, __kwargtrans__ ({in_math_mode: true, math_mode_delimiter: math_mode_delimiter}));
/* 000855 */ 		// pass;
/* 000860 */ 		return (function () {
/* 000860 */ 			var __accu0__ = macrospec;
/* 000860 */ 			return __call__ (__accu0__.ParsingStateDeltaExtendLatexContextDb, __accu0__, __kwargtrans__ ({set_attributes: set_attributes, extend_latex_context: self.math_mode_extend_context}));
/* 000860 */ 		}) ();
/* 000860 */ 	});},
/* 000865 */ 	get leave_math_mode () {return __get__ (this, function (self, trigger_token) {
/* 000865 */ 		if (typeof trigger_token == 'undefined' || (trigger_token != null && trigger_token.hasOwnProperty ("__kwargtrans__"))) {;
/* 000865 */ 			var trigger_token = null;
/* 000865 */ 		};
/* 000865 */ 		if (arguments.length) {
/* 000865 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000865 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000865 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000865 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000865 */ 					switch (__attrib0__) {
/* 000865 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000865 */ 						case 'trigger_token': var trigger_token = __allkwargs0__ [__attrib0__]; break;
/* 000865 */ 					}
/* 000865 */ 				}
/* 000865 */ 			}
/* 000865 */ 		}
/* 000865 */ 		else {
/* 000865 */ 		}
/* 000867 */ 		return (function () {
/* 000867 */ 			var __accu0__ = macrospec;
/* 000872 */ 			return __call__ (__accu0__.ParsingStateDeltaExtendLatexContextDb, __accu0__, __kwargtrans__ ({set_attributes: __call__ (dict, null, __kwargtrans__ ({in_math_mode: false, math_mode_delimiter: null})), extend_latex_context: __call__ (dict, null, __kwargtrans__ ({unknown_macro_spec: null, unknown_environment_spec: null, unknown_specials_spec: null}))}));
/* 000872 */ 		}) ();
/* 000872 */ 	});}
/* 000872 */ });
/* 000883 */ export var standard_environment_get_parse_error_message = function (exception_object) {
/* 000883 */ 	if (arguments.length) {
/* 000883 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000883 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000883 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000883 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000883 */ 				switch (__attrib0__) {
/* 000883 */ 					case 'exception_object': var exception_object = __allkwargs0__ [__attrib0__]; break;
/* 000883 */ 				}
/* 000883 */ 			}
/* 000883 */ 		}
/* 000883 */ 	}
/* 000883 */ 	else {
/* 000883 */ 	}
/* 000884 */ 	var msg = null;
/* 000885 */ 	var error_type_info = exception_object.error_type_info;
/* 000886 */ 	if (__t__ (error_type_info)) {
/* 000887 */ 		var what = __getitem__ (error_type_info, 'what');
/* 000888 */ 		if (__t__ (__eq__ (what, 'token_forbidden_character'))) {
/* 000889 */ 			if (__t__ (__eq__ (__getitem__ (error_type_info, 'forbidden_character'), '%'))) {
/* 000890 */ 				var msg = 'LaTeX comments are not allowed here. Use ‘\\%’ to typeset a literal percent sign.';
/* 000890 */ 			}
/* 000894 */ 			else if (__t__ (__eq__ (__getitem__ (error_type_info, 'forbidden_character'), '$'))) {
/* 000895 */ 				var msg = "You can't use ‘$’ here. LaTeX math should be typeset using \\(...\\) for inline math and \\[...\\] for unnumbered display equations. Use ‘\\$’ for a literal dollar sign.";
/* 000895 */ 			}
/* 000895 */ 		}
/* 000895 */ 	}
/* 000900 */ 	if (__t__ (!__t__ ((msg)))) {
/* 000901 */ 		var msg = exception_object.msg;
/* 000901 */ 	}
/* 000903 */ 	var errfmt = (function () {
/* 000903 */ 		var __accu0__ = latexnodes;
/* 000903 */ 		return __call__ (__accu0__.LatexWalkerParseErrorFormatter, __accu0__, exception_object);
/* 000903 */ 	}) ();
/* 000905 */ 	var msg = __call__ (__iadd__, null, msg, (function () {
/* 000905 */ 		var __accu0__ = errfmt;
/* 000905 */ 		return __call__ (__accu0__.format_full_traceback, __accu0__);
/* 000905 */ 	}) ());
/* 000907 */ 	return msg;
/* 000907 */ };
/* 000914 */ export var make_standard_environment = function (features, parsing_state, latex_context, llm_environment_options, parsing_state_options) {
/* 000914 */ 	if (typeof parsing_state == 'undefined' || (parsing_state != null && parsing_state.hasOwnProperty ("__kwargtrans__"))) {;
/* 000914 */ 		var parsing_state = null;
/* 000914 */ 	};
/* 000914 */ 	if (typeof latex_context == 'undefined' || (latex_context != null && latex_context.hasOwnProperty ("__kwargtrans__"))) {;
/* 000914 */ 		var latex_context = null;
/* 000914 */ 	};
/* 000914 */ 	if (typeof llm_environment_options == 'undefined' || (llm_environment_options != null && llm_environment_options.hasOwnProperty ("__kwargtrans__"))) {;
/* 000914 */ 		var llm_environment_options = null;
/* 000914 */ 	};
/* 000914 */ 	if (typeof parsing_state_options == 'undefined' || (parsing_state_options != null && parsing_state_options.hasOwnProperty ("__kwargtrans__"))) {;
/* 000914 */ 		var parsing_state_options = null;
/* 000914 */ 	};
/* 000914 */ 	if (arguments.length) {
/* 000914 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000914 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000914 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000914 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000914 */ 				switch (__attrib0__) {
/* 000914 */ 					case 'features': var features = __allkwargs0__ [__attrib0__]; break;
/* 000914 */ 					case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000914 */ 					case 'latex_context': var latex_context = __allkwargs0__ [__attrib0__]; break;
/* 000914 */ 					case 'llm_environment_options': var llm_environment_options = __allkwargs0__ [__attrib0__]; break;
/* 000914 */ 					case 'parsing_state_options': var parsing_state_options = __allkwargs0__ [__attrib0__]; break;
/* 000914 */ 				}
/* 000914 */ 			}
/* 000914 */ 		}
/* 000914 */ 	}
/* 000914 */ 	else {
/* 000914 */ 	}
/* 000918 */ 	if (__t__ (latex_context === null)) {
/* 000919 */ 		var latex_context = (function () {
/* 000919 */ 			var __accu0__ = macrospec;
/* 000919 */ 			return __call__ (__accu0__.LatexContextDb, __accu0__);
/* 000919 */ 		}) ();
/* 000919 */ 	}
/* 000921 */ 	if (__t__ (parsing_state === null)) {
/* 000922 */ 		var parsing_state_options_2 = dict ({});
/* 000923 */ 		if (__t__ (parsing_state_options !== null)) {
/* 000924 */ 			var parsing_state_options_2 = parsing_state_options;
/* 000924 */ 		}
/* 000926 */ 		var parsing_state = __call__ (standard_parsing_state, null, __kwargtrans__ (parsing_state_options_2));
/* 000926 */ 	}
/* 000928 */ 	var parsing_state_event_handler = __call__ (LLMLatexWalkerMathContextParsingStateEventHandler, null);
/* 000930 */ 	var llm_environment_options_2 = dict ({});
/* 000931 */ 	if (__t__ (llm_environment_options !== null)) {
/* 000932 */ 		var llm_environment_options_2 = llm_environment_options;
/* 000932 */ 	}
/* 000934 */ 	var environment = __call__ (LLMEnvironment, null, features, parsing_state, latex_context, __kwargtrans__ (llm_environment_options_2));
/* 000941 */ 	environment.parsing_state_event_handler = parsing_state_event_handler;
/* 000943 */ 	environment.environment_get_parse_error_message = standard_environment_get_parse_error_message;
/* 000946 */ 	return environment;
/* 000946 */ };
/* 000960 */ export var _make_argvalue = function (argvalue, latex_walker, parsing_state) {
/* 000960 */ 	if (arguments.length) {
/* 000960 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000960 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000960 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000960 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000960 */ 				switch (__attrib0__) {
/* 000960 */ 					case 'argvalue': var argvalue = __allkwargs0__ [__attrib0__]; break;
/* 000960 */ 					case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000960 */ 					case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000960 */ 				}
/* 000960 */ 			}
/* 000960 */ 		}
/* 000960 */ 	}
/* 000960 */ 	else {
/* 000960 */ 	}
/* 000962 */ 	if (__t__ (argvalue === null)) {
/* 000963 */ 		return null;
/* 000963 */ 	}
/* 000965 */ 	if (__t__ (__call__ (isinstance, null, argvalue, str))) {
/* 000966 */ 		var argvalue = (function () {
/* 000966 */ 			var __accu0__ = latex_walker;
/* 000966 */ 			return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: argvalue, pos: null, pos_end: null, parsing_state: parsing_state}));
/* 000966 */ 		}) ();
/* 000966 */ 	}
/* 000974 */ 	if (__t__ (__call__ (isinstance, null, argvalue, latexnodes_nodes.LatexGroupNode))) {
/* 000975 */ 		return argvalue;
/* 000975 */ 	}
/* 000979 */ 	if (__t__ (__call__ (isinstance, null, argvalue, latexnodes_nodes.LatexNodeList))) {
/* 000980 */ 		var nodelist = argvalue;
/* 000980 */ 	}
/* 000982 */ 	else if (__t__ (__call__ (isinstance, null, argvalue, list))) {
/* 000983 */ 		var nodelist = (function () {
/* 000983 */ 			var __accu0__ = latex_walker;
/* 000983 */ 			return __call__ (__accu0__.make_nodelist, __accu0__, argvalue, __kwargtrans__ ({parsing_state: parsing_state}));
/* 000983 */ 		}) ();
/* 000983 */ 	}
/* 000986 */ 	else {
/* 000989 */ 		var nodelist = (function () {
/* 000989 */ 			var __accu0__ = latex_walker;
/* 000989 */ 			return __call__ (__accu0__.make_nodelist, __accu0__, [argvalue], __kwargtrans__ ({parsing_state: parsing_state}));
/* 000989 */ 		}) ();
/* 000989 */ 	}
/* 000994 */ 	var groupnode = (function () {
/* 000994 */ 		var __accu0__ = latex_walker;
/* 000994 */ 		return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexGroupNode, __kwargtrans__ ({delimiters: tuple (['', '']), nodelist: nodelist, pos: nodelist.pos, pos_end: nodelist.pos_end, parsing_state: parsing_state}));
/* 000994 */ 	}) ();
/* 001003 */ 	return groupnode;
/* 001003 */ };
/* 001006 */ export var make_invocable_arguments = function (llm_spec, args) {
/* 001006 */ 	if (arguments.length) {
/* 001006 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001006 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001006 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001006 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001006 */ 				switch (__attrib0__) {
/* 001006 */ 					case 'llm_spec': var llm_spec = __allkwargs0__ [__attrib0__]; break;
/* 001006 */ 					case 'args': var args = __allkwargs0__ [__attrib0__]; break;
/* 001006 */ 					case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 001006 */ 					case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 001006 */ 				}
/* 001006 */ 			}
/* 001006 */ 		}
/* 001006 */ 	}
/* 001006 */ 	else {
/* 001006 */ 	}
/* 001008 */ 	var argnlist = (function () {
/* 001008 */ 		var __accu0__ = [];
/* 001008 */ 		var __iterable0__ = llm_spec.arguments_spec_list;
/* 001008 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001008 */ 			var _ = __getitem__ (__iterable0__, __index0__);
/* 001008 */ 			(function () {
/* 001008 */ 				var __accu1__ = __accu0__;
/* 001008 */ 				return __call__ (__accu1__.append, __accu1__, null);
/* 001008 */ 			}) ();
/* 001008 */ 		}
/* 001008 */ 		return __accu0__;
/* 001008 */ 	}) ();
/* 001010 */ 	if (__t__ (args === null)) {
/* 001011 */ 		return argnlist;
/* 001011 */ 	}
/* 001013 */ 	var __iterable0__ = (function () {
/* 001013 */ 		var __accu0__ = args;
/* 001013 */ 		return __call__ (__accu0__.py_items, __accu0__);
/* 001013 */ 	}) ();
/* 001013 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001013 */ 		var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 001013 */ 		var argname = __left0__ [0];
/* 001013 */ 		var argvalue = __left0__ [1];
/* 001015 */ 		var argj = null;
/* 001016 */ 		var __iterable1__ = __call__ (enumerate, null, llm_spec.arguments_spec_list);
/* 001016 */ 		for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 001016 */ 			var __left0__ = __getitem__ (__iterable1__, __index1__);
/* 001016 */ 			var candidateargj = __left0__ [0];
/* 001016 */ 			var candidateargspec = __left0__ [1];
/* 001017 */ 			if (__t__ (__eq__ (candidateargspec.argname, argname))) {
/* 001018 */ 				var argj = candidateargj;
/* 001018 */ 				break;
/* 001018 */ 			}
/* 001018 */ 		}
/* 001020 */ 		if (__t__ (argj === null)) {
/* 001021 */ 			(function () {
/* 001021 */ 				var __accu0__ = logger;
/* 001021 */ 				return __call__ (__accu0__.error, __accu0__, 'Cannot find argument %r in spec %r', argname, llm_spec.arguments_spec_list);
/* 001021 */ 			}) ();
/* 001023 */ 			var __except0__ = __call__ (ValueError, null, 'No argument named ‘{}’ in spec'.format (argname));
/* 001023 */ 			__except0__.__cause__ = null;
/* 001023 */ 			throw __except0__;
/* 001023 */ 		}
/* 001026 */ 		__setitem__ (argnlist, argj, __call__ (_make_argvalue, null, argvalue, latex_walker, parsing_state));
/* 001026 */ 	}
/* 001028 */ 	return argnlist;
/* 001028 */ };
/* 001031 */ export var make_invocable_node_instance = function (node_type, llm_spec) {
/* 001031 */ 	var args = null;
/* 001031 */ 	var body_nodelist = null;
/* 001031 */ 	var node_kwargs = null;
/* 001031 */ 	if (arguments.length) {
/* 001031 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001031 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001031 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001031 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001031 */ 				switch (__attrib0__) {
/* 001031 */ 					case 'node_type': var node_type = __allkwargs0__ [__attrib0__]; break;
/* 001031 */ 					case 'llm_spec': var llm_spec = __allkwargs0__ [__attrib0__]; break;
/* 001031 */ 					case 'args': var args = __allkwargs0__ [__attrib0__]; break;
/* 001031 */ 					case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 001031 */ 					case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 001031 */ 					case 'body_nodelist': var body_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 001031 */ 					case 'node_kwargs': var node_kwargs = __allkwargs0__ [__attrib0__]; break;
/* 001031 */ 				}
/* 001031 */ 			}
/* 001031 */ 		}
/* 001031 */ 	}
/* 001031 */ 	else {
/* 001031 */ 	}
/* 001038 */ 	var nkwargs = dict ({'pos': null, 'pos_end': null});
/* 001043 */ 	if (__t__ (node_type === latexnodes_nodes.LatexMacroNode)) {
/* 001044 */ 		__setitem__ (nkwargs, 'macroname', llm_spec.macroname);
/* 001045 */ 		if (__t__ (body_nodelist !== null)) {
/* 001046 */ 			var __except0__ = __call__ (ValueError, null, 'For a LatexMacroNode you must have body_nodelist=None');
/* 001046 */ 			__except0__.__cause__ = null;
/* 001046 */ 			throw __except0__;
/* 001046 */ 		}
/* 001046 */ 	}
/* 001048 */ 	else if (__t__ (node_type === latexnodes_nodes.LatexEnvironmentNode)) {
/* 001049 */ 		__setitem__ (nkwargs, 'environmentname', llm_spec.environmentname);
/* 001049 */ 	}
/* 001051 */ 	else if (__t__ (node_type === latexnodes_nodes.LatexSpecialsNode)) {
/* 001052 */ 		__setitem__ (nkwargs, 'specials_chars', llm_spec.specials_chars);
/* 001053 */ 		if (__t__ (body_nodelist !== null)) {
/* 001054 */ 			var __except0__ = __call__ (ValueError, null, 'For a LatexSpecialsNode you must have body_nodelist=None');
/* 001054 */ 			__except0__.__cause__ = null;
/* 001054 */ 			throw __except0__;
/* 001054 */ 		}
/* 001054 */ 	}
/* 001056 */ 	var argnlist = __call__ (make_invocable_arguments, null, llm_spec, args, __kwargtrans__ ({latex_walker: latex_walker, parsing_state: parsing_state}));
/* 001060 */ 	var nodeargd = (function () {
/* 001060 */ 		var __accu0__ = latexnodes_nodes;
/* 001060 */ 		return __call__ (__accu0__.ParsedArguments, __accu0__, __kwargtrans__ ({argnlist: argnlist, arguments_spec_list: llm_spec.arguments_spec_list}));
/* 001060 */ 	}) ();
/* 001065 */ 	if (__t__ (body_nodelist !== null)) {
/* 001066 */ 		__setitem__ (nkwargs, 'nodelist', body_nodelist);
/* 001066 */ 	}
/* 001068 */ 	if (__t__ (node_kwargs !== null)) {
/* 001069 */ 		(function () {
/* 001069 */ 			var __accu0__ = nkwargs;
/* 001069 */ 			return __call__ (__accu0__.py_update, __accu0__, node_kwargs);
/* 001069 */ 		}) ();
/* 001069 */ 	}
/* 001071 */ 	var node = (function () {
/* 001071 */ 		var __accu0__ = latex_walker;
/* 001071 */ 		return __call__ (__accu0__.make_node, __accu0__, node_type, __kwargtrans__ (__mergekwargtrans__ ({spec: llm_spec, nodeargd: nodeargd, parsing_state: parsing_state}, nkwargs)));
/* 001071 */ 	}) ();
/* 001079 */ 	var node = (function () {
/* 001079 */ 		var __accu0__ = llm_spec;
/* 001079 */ 		return __call__ (__accu0__.finalize_node, __accu0__, node);
/* 001079 */ 	}) ();
/* 001081 */ 	return node;
/* 001081 */ };
/* 000006 */ 
//# sourceMappingURL=llm.llmenvironment.map