/* 000001 */ // Transcrypt'ed from Python, 2023-01-05 22:41:19
/* 000006 */ var logging = {};
/* 000006 */ var re = {};
/* 000006 */ var unique_object_id = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000023 */ import * as __module_unique_object_id__ from './unique_object_id.js';
/* 000023 */ __nest__ (unique_object_id, '', __module_unique_object_id__);
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
/* 000006 */ export {LLMFragment, latexnodes, latexwalker, LLMDocument, latexnodes_nodes, LatexWalkerParseError, LatexWalkerParseErrorFormatter};
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
/* 000050 */ export var LLMArgumentSpec = function (parser, argname, is_block_level) {
/* 000050 */ 	if (typeof is_block_level == 'undefined' || (is_block_level != null && is_block_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000050 */ 		var is_block_level = false;
/* 000050 */ 	};
/* 000050 */ 	if (arguments.length) {
/* 000050 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000050 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000050 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000050 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000050 */ 				switch (__attrib0__) {
/* 000050 */ 					case 'parser': var parser = __allkwargs0__ [__attrib0__]; break;
/* 000050 */ 					case 'argname': var argname = __allkwargs0__ [__attrib0__]; break;
/* 000050 */ 					case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000050 */ 				}
/* 000050 */ 			}
/* 000050 */ 		}
/* 000050 */ 	}
/* 000050 */ 	else {
/* 000050 */ 	}
/* 000057 */ 	var parsing_state_delta = null;
/* 000058 */ 	if (__t__ (is_block_level !== null)) {
/* 000059 */ 		var parsing_state_delta = __call__ (LLMParsingStateDeltaSetBlockLevel, null, __kwargtrans__ ({is_block_level: is_block_level}));
/* 000059 */ 	}
/* 000062 */ 	return (function () {
/* 000062 */ 		var __accu0__ = latexnodes;
/* 000062 */ 		return __call__ (__accu0__.LatexArgumentSpec, __accu0__, __kwargtrans__ ({parser: parser, argname: argname, parsing_state_delta: parsing_state_delta}));
/* 000062 */ 	}) ();
/* 000062 */ };
/* 000070 */ export var BlocksBuilder =  __class__ ('BlocksBuilder', [object], {
/* 000070 */ 	__module__: __name__,
/* 000072 */ 	rx_space: (function () {
/* 000072 */ 		var __accu0__ = re;
/* 000072 */ 		return __call__ (__accu0__.compile, __accu0__, '[ \\t\\n\\r]+');
/* 000072 */ 	}) (),
/* 000073 */ 	rx_only_space: (function () {
/* 000073 */ 		var __accu0__ = re;
/* 000073 */ 		return __call__ (__accu0__.compile, __accu0__, '^[ \\t\\n\\r]+$');
/* 000073 */ 	}) (),
/* 000075 */ 	get __init__ () {return __get__ (this, function (self, latexnodelist) {
/* 000075 */ 		if (arguments.length) {
/* 000075 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000075 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000075 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000075 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000075 */ 					switch (__attrib0__) {
/* 000075 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000075 */ 						case 'latexnodelist': var latexnodelist = __allkwargs0__ [__attrib0__]; break;
/* 000075 */ 					}
/* 000075 */ 				}
/* 000075 */ 			}
/* 000075 */ 		}
/* 000075 */ 		else {
/* 000075 */ 		}
/* 000076 */ 		__call__ (__call__ (__super__, null, BlocksBuilder, '__init__'), null, self);
/* 000077 */ 		self.latexnodelist = latexnodelist;
/* 000078 */ 		self.pending_paragraph_nodes = [];
/* 000079 */ 		self.blocks = [];
/* 000079 */ 	});},
/* 000081 */ 	get flush_paragraph () {return __get__ (this, function (self) {
/* 000081 */ 		if (arguments.length) {
/* 000081 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000081 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000081 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000081 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000081 */ 					switch (__attrib0__) {
/* 000081 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000081 */ 					}
/* 000081 */ 				}
/* 000081 */ 			}
/* 000081 */ 		}
/* 000081 */ 		else {
/* 000081 */ 		}
/* 000082 */ 		if (__t__ (!__t__ ((self.pending_paragraph_nodes)))) {
/* 000083 */ 			return ;
/* 000083 */ 		}
/* 000084 */ 		var paragraph_nodes = self.pending_paragraph_nodes;
/* 000085 */ 		var paragraph_nodes = (function () {
/* 000085 */ 			var __accu0__ = self;
/* 000085 */ 			return __call__ (__accu0__.finalize_paragraph, __accu0__, paragraph_nodes);
/* 000085 */ 		}) ();
/* 000087 */ 		(function () {
/* 000087 */ 			var __accu0__ = self.blocks;
/* 000088 */ 			return __call__ (__accu0__.append, __accu0__, (function () {
/* 000088 */ 				var __accu1__ = latexnodes_nodes;
/* 000088 */ 				return __call__ (__accu1__.LatexNodeList, __accu1__, paragraph_nodes, __kwargtrans__ ({parsing_state: self.latexnodelist.parsing_state, latex_walker: self.latexnodelist.latex_walker}));
/* 000088 */ 			}) ());
/* 000088 */ 		}) ();
/* 000094 */ 		self.pending_paragraph_nodes = [];
/* 000094 */ 	});},
/* 000096 */ 	get simplify_whitespace_chars () {return __get__ (this, function (self, chars, is_head, is_tail) {
/* 000096 */ 		if (typeof is_head == 'undefined' || (is_head != null && is_head.hasOwnProperty ("__kwargtrans__"))) {;
/* 000096 */ 			var is_head = false;
/* 000096 */ 		};
/* 000096 */ 		if (typeof is_tail == 'undefined' || (is_tail != null && is_tail.hasOwnProperty ("__kwargtrans__"))) {;
/* 000096 */ 			var is_tail = false;
/* 000096 */ 		};
/* 000096 */ 		if (arguments.length) {
/* 000096 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000096 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000096 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000096 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000096 */ 					switch (__attrib0__) {
/* 000096 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000096 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000096 */ 						case 'is_head': var is_head = __allkwargs0__ [__attrib0__]; break;
/* 000096 */ 						case 'is_tail': var is_tail = __allkwargs0__ [__attrib0__]; break;
/* 000096 */ 					}
/* 000096 */ 				}
/* 000096 */ 			}
/* 000096 */ 		}
/* 000096 */ 		else {
/* 000096 */ 		}
/* 000097 */ 		var newchars = (function () {
/* 000097 */ 			var __accu0__ = self.rx_space;
/* 000097 */ 			return __call__ (__accu0__.sub, __accu0__, ' ', chars);
/* 000097 */ 		}) ();
/* 000098 */ 		if (__t__ (is_head)) {
/* 000099 */ 			var newchars = (function () {
/* 000099 */ 				var __accu0__ = newchars;
/* 000099 */ 				return __call__ (__accu0__.lstrip, __accu0__);
/* 000099 */ 			}) ();
/* 000099 */ 		}
/* 000100 */ 		if (__t__ (is_tail)) {
/* 000101 */ 			var newchars = (function () {
/* 000101 */ 				var __accu0__ = newchars;
/* 000101 */ 				return __call__ (__accu0__.rstrip, __accu0__);
/* 000101 */ 			}) ();
/* 000101 */ 		}
/* 000102 */ 		return newchars;
/* 000102 */ 	});},
/* 000104 */ 	get finalize_paragraph () {return __get__ (this, function (self, paragraph_nodes) {
/* 000104 */ 		if (arguments.length) {
/* 000104 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000104 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000104 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000104 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000104 */ 					switch (__attrib0__) {
/* 000104 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000104 */ 						case 'paragraph_nodes': var paragraph_nodes = __allkwargs0__ [__attrib0__]; break;
/* 000104 */ 					}
/* 000104 */ 				}
/* 000104 */ 			}
/* 000104 */ 		}
/* 000104 */ 		else {
/* 000104 */ 		}
/* 000105 */ 		if (__t__ (!__t__ ((paragraph_nodes)))) {
/* 000106 */ 			return paragraph_nodes;
/* 000106 */ 		}
/* 000110 */ 		var is_head = true;
/* 000111 */ 		var tail_char_node_info = null;
/* 000112 */ 		var first_node = null;
/* 000113 */ 		var char_nodes = [];
/* 000114 */ 		var __iterable0__ = __call__ (enumerate, null, paragraph_nodes);
/* 000114 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000114 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000114 */ 			var j = __left0__ [0];
/* 000114 */ 			var node = __left0__ [1];
/* 000117 */ 			if (__t__ (__t__ (__eq__ (__call__ (len, null, char_nodes), 0)) && __t__ (first_node !== null) && __call__ (getattr, null, first_node, 'llm_is_block_heading', false))) {
/* 000120 */ 				var is_head = true;
/* 000120 */ 			}
/* 000122 */ 			if (__t__ ((function () {
/* 000122 */ 				var __accu0__ = node;
/* 000122 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000122 */ 			}) ())) {
/* 000123 */ 				var info = dict ({'is_head': is_head, 'is_tail': false});
/* 000124 */ 				(function () {
/* 000124 */ 					var __accu0__ = char_nodes;
/* 000124 */ 					return __call__ (__accu0__.append, __accu0__, tuple ([node, info]));
/* 000124 */ 				}) ();
/* 000125 */ 				var is_head = false;
/* 000126 */ 				var tail_char_node_info = info;
/* 000126 */ 			}
/* 000127 */ 			else if (__t__ (!__t__ (((function () {
/* 000127 */ 				var __accu0__ = node;
/* 000127 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCommentNode);
/* 000127 */ 			}) ())))) {
/* 000128 */ 				if (__t__ (first_node === null)) {
/* 000129 */ 					var first_node = node;
/* 000129 */ 				}
/* 000130 */ 				var is_head = false;
/* 000131 */ 				var tail_char_node_info = null;
/* 000131 */ 			}
/* 000131 */ 		}
/* 000134 */ 		if (__t__ (tail_char_node_info !== null)) {
/* 000135 */ 			__setitem__ (tail_char_node_info, 'is_tail', true);
/* 000135 */ 		}
/* 000137 */ 		var __iterable0__ = char_nodes;
/* 000137 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000137 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000137 */ 			var char_node = __left0__ [0];
/* 000137 */ 			var info = __left0__ [1];
/* 000138 */ 			char_node.llm_chars_value = (function () {
/* 000138 */ 				var __accu0__ = self;
/* 000138 */ 				return __call__ (__accu0__.simplify_whitespace_chars, __accu0__, char_node.chars, __kwargtrans__ ({is_head: __getitem__ (info, 'is_head'), is_tail: __getitem__ (info, 'is_tail')}));
/* 000138 */ 			}) ();
/* 000143 */ 			// pass;
/* 000143 */ 		}
/* 000151 */ 		return paragraph_nodes;
/* 000151 */ 	});},
/* 000153 */ 	get build_blocks () {return __get__ (this, function (self) {
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
/* 000154 */ 		var latexnodelist = self.latexnodelist;
/* 000158 */ 		assert (__eq__ (__call__ (len, null, self.blocks), 0));
/* 000160 */ 		var __iterable0__ = latexnodelist;
/* 000160 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000160 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000161 */ 			var n_is_block_level = __call__ (getattr, null, n, 'llm_is_block_level', null);
/* 000162 */ 			var n_is_block_heading = __call__ (getattr, null, n, 'llm_is_block_heading', false);
/* 000163 */ 			if (__t__ (n_is_block_level)) {
/* 000165 */ 				(function () {
/* 000165 */ 					var __accu0__ = self;
/* 000165 */ 					return __call__ (__accu0__.flush_paragraph, __accu0__);
/* 000165 */ 				}) ();
/* 000167 */ 				if (__t__ (__call__ (getattr, null, n, 'llm_is_paragraph_break_marker', false))) {
/* 000167 */ 					continue;
/* 000167 */ 				}
/* 000172 */ 				if (__t__ (n_is_block_heading)) {
/* 000176 */ 					(function () {
/* 000176 */ 						var __accu0__ = self.pending_paragraph_nodes;
/* 000176 */ 						return __call__ (__accu0__.append, __accu0__, n);
/* 000176 */ 					}) ();
/* 000176 */ 					continue;
/* 000176 */ 				}
/* 000181 */ 				(function () {
/* 000181 */ 					var __accu0__ = self.blocks;
/* 000181 */ 					return __call__ (__accu0__.append, __accu0__, n);
/* 000181 */ 				}) ();
/* 000181 */ 				continue;
/* 000181 */ 			}
/* 000184 */ 			var paragraph_started_yet = true;
/* 000185 */ 			if (__t__ (!__t__ ((self.pending_paragraph_nodes)))) {
/* 000186 */ 				var paragraph_started_yet = false;
/* 000186 */ 			}
/* 000187 */ 			if (__t__ (__eq__ (__call__ (len, null, self.pending_paragraph_nodes), 1))) {
/* 000188 */ 				if (__t__ (__call__ (getattr, null, __getitem__ (self.pending_paragraph_nodes, 0), 'llm_is_block_heading', false))) {
/* 000190 */ 					var paragraph_started_yet = false;
/* 000190 */ 				}
/* 000190 */ 			}
/* 000193 */ 			if (__t__ (__t__ (!__t__ ((paragraph_started_yet))) && __t__ ((function () {
/* 000193 */ 				var __accu0__ = n;
/* 000193 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000194 */ 			}) ()) && (function () {
/* 000194 */ 				var __accu0__ = self.rx_only_space;
/* 000194 */ 				return __call__ (__accu0__.match, __accu0__, n.chars);
/* 000194 */ 			}) ())) {
/* 000194 */ 				continue;
/* 000194 */ 			}
/* 000200 */ 			(function () {
/* 000200 */ 				var __accu0__ = self.pending_paragraph_nodes;
/* 000200 */ 				return __call__ (__accu0__.append, __accu0__, n);
/* 000200 */ 			}) ();
/* 000200 */ 		}
/* 000203 */ 		(function () {
/* 000203 */ 			var __accu0__ = self;
/* 000203 */ 			return __call__ (__accu0__.flush_paragraph, __accu0__);
/* 000203 */ 		}) ();
/* 000205 */ 		return self.blocks;
/* 000205 */ 	});}
/* 000205 */ });
/* 000209 */ export var NodeListFinalizer =  __class__ ('NodeListFinalizer', [object], {
/* 000209 */ 	__module__: __name__,
/* 000214 */ 	get finalize_nodelist () {return __get__ (this, function (self, latexnodelist) {
/* 000214 */ 		if (arguments.length) {
/* 000214 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000214 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000214 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000214 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000214 */ 					switch (__attrib0__) {
/* 000214 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000214 */ 						case 'latexnodelist': var latexnodelist = __allkwargs0__ [__attrib0__]; break;
/* 000214 */ 					}
/* 000214 */ 				}
/* 000214 */ 			}
/* 000214 */ 		}
/* 000214 */ 		else {
/* 000214 */ 		}
/* 000228 */ 		var is_block_level = latexnodelist.parsing_state.is_block_level;
/* 000229 */ 		if (__t__ (is_block_level === null)) {
/* 000231 */ 			var is_block_level = (function () {
/* 000231 */ 				var __accu0__ = self;
/* 000231 */ 				return __call__ (__accu0__.infer_is_block_level_nodelist, __accu0__, latexnodelist);
/* 000231 */ 			}) ();
/* 000231 */ 		}
/* 000233 */ 		latexnodelist.llm_is_block_level = is_block_level;
/* 000236 */ 		if (__t__ (!__t__ ((is_block_level)))) {
/* 000238 */ 			var __iterable0__ = latexnodelist;
/* 000238 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000238 */ 				var n = __getitem__ (__iterable0__, __index0__);
/* 000239 */ 				if (__t__ (__call__ (getattr, null, n, 'llm_is_block_level', null))) {
/* 000243 */ 					var __except0__ = __call__ (LatexWalkerParseError, null, __kwargtrans__ ({msg: 'Content is not allowed in inline text (not block level): ‘{}’'.format ((function () {
/* 000243 */ 						var __accu0__ = n;
/* 000243 */ 						return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000243 */ 					}) ()), pos: n.pos}));
/* 000243 */ 					__except0__.__cause__ = null;
/* 000243 */ 					throw __except0__;
/* 000243 */ 				}
/* 000247 */ 				if (__t__ ((function () {
/* 000247 */ 					var __accu0__ = n;
/* 000247 */ 					return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000247 */ 				}) ())) {
/* 000248 */ 					n.llm_chars_value = (function () {
/* 000248 */ 						var __accu0__ = self;
/* 000248 */ 						return __call__ (__accu0__.simplify_whitespace_chars_inline, __accu0__, n.chars);
/* 000248 */ 					}) ();
/* 000248 */ 				}
/* 000248 */ 			}
/* 000253 */ 			return latexnodelist;
/* 000253 */ 		}
/* 000257 */ 		if (__t__ (is_block_level)) {
/* 000258 */ 			var blocks_builder = (function () {
/* 000258 */ 				var __accu0__ = self;
/* 000258 */ 				return __call__ (__accu0__.make_blocks_builder, __accu0__, latexnodelist);
/* 000258 */ 			}) ();
/* 000259 */ 			var llm_blocks = (function () {
/* 000259 */ 				var __accu0__ = blocks_builder;
/* 000259 */ 				return __call__ (__accu0__.build_blocks, __accu0__);
/* 000259 */ 			}) ();
/* 000260 */ 			latexnodelist.llm_blocks = llm_blocks;
/* 000260 */ 		}
/* 000262 */ 		return latexnodelist;
/* 000262 */ 	});},
/* 000264 */ 	get infer_is_block_level_nodelist () {return __get__ (this, function (self, latexnodelist) {
/* 000264 */ 		if (arguments.length) {
/* 000264 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000264 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000264 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000264 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000264 */ 					switch (__attrib0__) {
/* 000264 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000264 */ 						case 'latexnodelist': var latexnodelist = __allkwargs0__ [__attrib0__]; break;
/* 000264 */ 					}
/* 000264 */ 				}
/* 000264 */ 			}
/* 000264 */ 		}
/* 000264 */ 		else {
/* 000264 */ 		}
/* 000265 */ 		var __iterable0__ = latexnodelist;
/* 000265 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000265 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000266 */ 			var n_is_block_level = __call__ (getattr, null, n, 'llm_is_block_level', null);
/* 000267 */ 			if (__t__ (n_is_block_level)) {
/* 000268 */ 				return true;
/* 000268 */ 			}
/* 000268 */ 		}
/* 000269 */ 		return false;
/* 000269 */ 	});},
/* 000271 */ 	get simplify_whitespace_chars_inline () {return __get__ (this, function (self, chars) {
/* 000271 */ 		if (arguments.length) {
/* 000271 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000271 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000271 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000271 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000271 */ 					switch (__attrib0__) {
/* 000271 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000271 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000271 */ 					}
/* 000271 */ 				}
/* 000271 */ 			}
/* 000271 */ 		}
/* 000271 */ 		else {
/* 000271 */ 		}
/* 000272 */ 		return (function () {
/* 000272 */ 			var __accu0__ = self.rx_inline_space;
/* 000272 */ 			return __call__ (__accu0__.sub, __accu0__, ' ', chars);
/* 000272 */ 		}) ();
/* 000272 */ 	});},
/* 000274 */ 	make_blocks_builder: BlocksBuilder,
/* 000276 */ 	rx_inline_space: BlocksBuilder.rx_space
/* 000276 */ });
/* 000280 */ export var LLMLatexWalker =  __class__ ('LLMLatexWalker', [latexwalker.LatexWalker], {
/* 000280 */ 	__module__: __name__,
/* 000293 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000293 */ 		var parsing_state_event_handler = null;
/* 000293 */ 		var standalone_mode = false;
/* 000293 */ 		var resource_info = null;
/* 000293 */ 		var parsing_mode = null;
/* 000293 */ 		var what = null;
/* 000293 */ 		var kwargs = dict ();
/* 000293 */ 		if (arguments.length) {
/* 000293 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000293 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000293 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000293 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000293 */ 					switch (__attrib0__) {
/* 000293 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000293 */ 						case 'llm_text': var llm_text = __allkwargs0__ [__attrib0__]; break;
/* 000293 */ 						case 'default_parsing_state': var default_parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000293 */ 						case 'llm_environment': var llm_environment = __allkwargs0__ [__attrib0__]; break;
/* 000293 */ 						case 'parsing_state_event_handler': var parsing_state_event_handler = __allkwargs0__ [__attrib0__]; break;
/* 000293 */ 						case 'standalone_mode': var standalone_mode = __allkwargs0__ [__attrib0__]; break;
/* 000293 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000293 */ 						case 'parsing_mode': var parsing_mode = __allkwargs0__ [__attrib0__]; break;
/* 000293 */ 						case 'what': var what = __allkwargs0__ [__attrib0__]; break;
/* 000293 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000293 */ 					}
/* 000293 */ 				}
/* 000293 */ 				delete kwargs.__kwargtrans__;
/* 000293 */ 			}
/* 000293 */ 		}
/* 000293 */ 		else {
/* 000293 */ 		}
/* 000305 */ 		__call__ (__call__ (__super__, null, LLMLatexWalker, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({s: llm_text, default_parsing_state: default_parsing_state}, kwargs)));
/* 000311 */ 		self.llm_environment = llm_environment;
/* 000313 */ 		self.standalone_mode = standalone_mode;
/* 000317 */ 		self.resource_info = resource_info;
/* 000319 */ 		self.what = what;
/* 000322 */ 		self.parsing_mode = parsing_mode;
/* 000324 */ 		self._parsing_state_event_handler = parsing_state_event_handler;
/* 000324 */ 	});},
/* 000326 */ 	get parsing_state_event_handler () {return __get__ (this, function (self) {
/* 000326 */ 		if (arguments.length) {
/* 000326 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000326 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000326 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000326 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000326 */ 					switch (__attrib0__) {
/* 000326 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000326 */ 					}
/* 000326 */ 				}
/* 000326 */ 			}
/* 000326 */ 		}
/* 000326 */ 		else {
/* 000326 */ 		}
/* 000327 */ 		if (__t__ (self._parsing_state_event_handler)) {
/* 000328 */ 			return self._parsing_state_event_handler;
/* 000328 */ 		}
/* 000329 */ 		return __call__ (__call__ (__super__, null, LLMLatexWalker, 'parsing_state_event_handler'), null, self);
/* 000329 */ 	});},
/* 000331 */ 	get make_nodelist () {return __get__ (this, function (self, nodelist, parsing_state) {
/* 000331 */ 		var kwargs = dict ();
/* 000331 */ 		if (arguments.length) {
/* 000331 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000331 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000331 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000331 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000331 */ 					switch (__attrib0__) {
/* 000331 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000331 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000331 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000331 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000331 */ 					}
/* 000331 */ 				}
/* 000331 */ 				delete kwargs.__kwargtrans__;
/* 000331 */ 			}
/* 000331 */ 		}
/* 000331 */ 		else {
/* 000331 */ 		}
/* 000332 */ 		var nl = __call__ (__call__ (__super__, null, LLMLatexWalker, 'make_nodelist'), null, self, __kwargtrans__ (__mergekwargtrans__ ({nodelist: nodelist, parsing_state: parsing_state}, kwargs)));
/* 000334 */ 		var nl = (function () {
/* 000334 */ 			var __accu0__ = (function () {
/* 000334 */ 				var __accu1__ = self.llm_environment;
/* 000334 */ 				return __call__ (__accu1__.node_list_finalizer, __accu1__);
/* 000334 */ 			}) ();
/* 000334 */ 			return __call__ (__accu0__.finalize_nodelist, __accu0__, nl);
/* 000334 */ 		}) ();
/* 000335 */ 		return nl;
/* 000335 */ 	});},
/* 000337 */ 	get make_node () {return __get__ (this, function (self, node_class) {
/* 000337 */ 		var kwargs = dict ();
/* 000337 */ 		if (arguments.length) {
/* 000337 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000337 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000337 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000337 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000337 */ 					switch (__attrib0__) {
/* 000337 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000337 */ 						case 'node_class': var node_class = __allkwargs0__ [__attrib0__]; break;
/* 000337 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000337 */ 					}
/* 000337 */ 				}
/* 000337 */ 				delete kwargs.__kwargtrans__;
/* 000337 */ 			}
/* 000337 */ 		}
/* 000337 */ 		else {
/* 000337 */ 		}
/* 000338 */ 		var node = __call__ (__call__ (__super__, null, LLMLatexWalker, 'make_node'), null, self, node_class, __kwargtrans__ (kwargs));
/* 000340 */ 		node.node_id = __call__ (fn_unique_object_id, null, node);
/* 000341 */ 		return node;
/* 000341 */ 	});},
/* 000345 */ 	get filter_whitespace_comments_nodes () {return __get__ (this, function (self, nodelist) {
/* 000345 */ 		if (arguments.length) {
/* 000345 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000345 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000345 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000345 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000345 */ 					switch (__attrib0__) {
/* 000345 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000345 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000345 */ 					}
/* 000345 */ 				}
/* 000345 */ 			}
/* 000345 */ 		}
/* 000345 */ 		else {
/* 000345 */ 		}
/* 000350 */ 		return (function () {
/* 000350 */ 			var __accu0__ = nodelist;
/* 000350 */ 			return __call__ (__accu0__.filter, __accu0__, __kwargtrans__ ({node_predicate_fn: self._filter_whitespace_comments_nodes_predicate, skip_none: true, skip_comments: true, skip_whitespace_char_nodes: true}));
/* 000350 */ 		}) ();
/* 000350 */ 	});},
/* 000357 */ 	get _filter_whitespace_comments_nodes_predicate () {return __get__ (this, function (self, node) {
/* 000357 */ 		if (arguments.length) {
/* 000357 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000357 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000357 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000357 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000357 */ 					switch (__attrib0__) {
/* 000357 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000357 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000357 */ 					}
/* 000357 */ 				}
/* 000357 */ 			}
/* 000357 */ 		}
/* 000357 */ 		else {
/* 000357 */ 		}
/* 000358 */ 		if (__t__ (__call__ (getattr, null, node, 'llm_is_paragraph_break_marker', false))) {
/* 000359 */ 			return false;
/* 000359 */ 		}
/* 000360 */ 		return true;
/* 000360 */ 	});}
/* 000360 */ });
/* 000364 */ export var LLMEnvironment =  __class__ ('LLMEnvironment', [object], {
/* 000364 */ 	__module__: __name__,
/* 000383 */ 	get __init__ () {return __get__ (this, function (self, features, parsing_state, latex_context) {
/* 000383 */ 		var tolerant_parsing = false;
/* 000383 */ 		var parsing_mode_deltas = null;
/* 000383 */ 		if (arguments.length) {
/* 000383 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000383 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000383 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000383 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000383 */ 					switch (__attrib0__) {
/* 000383 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000383 */ 						case 'features': var features = __allkwargs0__ [__attrib0__]; break;
/* 000383 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000383 */ 						case 'latex_context': var latex_context = __allkwargs0__ [__attrib0__]; break;
/* 000383 */ 						case 'tolerant_parsing': var tolerant_parsing = __allkwargs0__ [__attrib0__]; break;
/* 000383 */ 						case 'parsing_mode_deltas': var parsing_mode_deltas = __allkwargs0__ [__attrib0__]; break;
/* 000383 */ 					}
/* 000383 */ 				}
/* 000383 */ 			}
/* 000383 */ 		}
/* 000383 */ 		else {
/* 000383 */ 		}
/* 000392 */ 		__call__ (__call__ (__super__, null, LLMEnvironment, '__init__'), null, self);
/* 000394 */ 		// pass;
/* 000398 */ 		self.latex_context = latex_context;
/* 000399 */ 		self.parsing_state = parsing_state;
/* 000401 */ 		self.parsing_mode_deltas = (__t__ (parsing_mode_deltas) ? __call__ (dict, null, parsing_mode_deltas) : dict ({}));
/* 000403 */ 		self.features = __call__ (list, null, features);
/* 000405 */ 		// pass;
/* 000412 */ 		self.features_by_name = dict ({});
/* 000413 */ 		var __iterable0__ = self.features;
/* 000413 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000413 */ 			var feature = __getitem__ (__iterable0__, __index0__);
/* 000414 */ 			if (__t__ (__in__ (feature.feature_name, self.features_by_name))) {
/* 000415 */ 				var __except0__ = __call__ (ValueError, null, 'Duplicate feature detected: feature {} has same name/role as the as already-included feature {}'.format (feature, __getitem__ (self.features_by_name, feature.feature_name)));
/* 000415 */ 				__except0__.__cause__ = null;
/* 000415 */ 				throw __except0__;
/* 000415 */ 			}
/* 000420 */ 			__setitem__ (self.features_by_name, feature.feature_name, feature);
/* 000420 */ 		}
/* 000422 */ 		self.tolerant_parsing = tolerant_parsing;
/* 000424 */ 		self._node_list_finalizer = __call__ (NodeListFinalizer, null);
/* 000426 */ 		if (__t__ (self.parsing_state.latex_context === null)) {
/* 000429 */ 			var __iterable0__ = self.features;
/* 000429 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000429 */ 				var f = __getitem__ (__iterable0__, __index0__);
/* 000430 */ 				var moredefs = (function () {
/* 000430 */ 					var __accu0__ = f;
/* 000430 */ 					return __call__ (__accu0__.add_latex_context_definitions, __accu0__);
/* 000430 */ 				}) ();
/* 000431 */ 				if (__t__ (moredefs)) {
/* 000432 */ 					// pass;
/* 000435 */ 					var moredefs2 = __call__ (dict, null, moredefs);
/* 000436 */ 					(function () {
/* 000436 */ 						var __accu0__ = moredefs2;
/* 000436 */ 						return __call__ (__accu0__.py_update, __accu0__, __kwargtrans__ ({prepend: true}));
/* 000436 */ 					}) ();
/* 000437 */ 					(function () {
/* 000437 */ 						var __accu0__ = self.latex_context;
/* 000437 */ 						return __call__ (__accu0__.add_context_category, __accu0__, 'feature--{}'.format (f.feature_name), __kwargtrans__ (moredefs2));
/* 000437 */ 					}) ();
/* 000437 */ 				}
/* 000437 */ 			}
/* 000443 */ 			(function () {
/* 000443 */ 				var __accu0__ = self.latex_context;
/* 000443 */ 				return __call__ (__accu0__.freeze, __accu0__);
/* 000443 */ 			}) ();
/* 000446 */ 			self.parsing_state.latex_context = self.latex_context;
/* 000446 */ 		}
/* 000448 */ 		else if (__t__ (self.latex_context !== null)) {
/* 000451 */ 			var __except0__ = __call__ (RuntimeError, null, 'The specified `parsing_state` instance already has a latex_context set');
/* 000451 */ 			__except0__.__cause__ = null;
/* 000451 */ 			throw __except0__;
/* 000451 */ 		}
/* 000451 */ 	});},
/* 000456 */ 	get feature () {return __get__ (this, function (self, feature_name) {
/* 000456 */ 		if (arguments.length) {
/* 000456 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000456 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000456 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000456 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000456 */ 					switch (__attrib0__) {
/* 000456 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000456 */ 						case 'feature_name': var feature_name = __allkwargs0__ [__attrib0__]; break;
/* 000456 */ 					}
/* 000456 */ 				}
/* 000456 */ 			}
/* 000456 */ 		}
/* 000456 */ 		else {
/* 000456 */ 		}
/* 000457 */ 		return __getitem__ (self.features_by_name, feature_name);
/* 000457 */ 	});},
/* 000460 */ 	parsing_state_event_handler: null,
/* 000462 */ 	get make_latex_walker () {return __get__ (this, function (self, llm_text) {
/* 000462 */ 		var parsing_mode = null;
/* 000462 */ 		var resource_info = null;
/* 000462 */ 		var tolerant_parsing = null;
/* 000462 */ 		var what = null;
/* 000462 */ 		var input_lineno_colno_offsets = null;
/* 000462 */ 		if (arguments.length) {
/* 000462 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000462 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000462 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000462 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000462 */ 					switch (__attrib0__) {
/* 000462 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000462 */ 						case 'llm_text': var llm_text = __allkwargs0__ [__attrib0__]; break;
/* 000462 */ 						case 'standalone_mode': var standalone_mode = __allkwargs0__ [__attrib0__]; break;
/* 000462 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000462 */ 						case 'parsing_mode': var parsing_mode = __allkwargs0__ [__attrib0__]; break;
/* 000462 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000462 */ 						case 'tolerant_parsing': var tolerant_parsing = __allkwargs0__ [__attrib0__]; break;
/* 000462 */ 						case 'what': var what = __allkwargs0__ [__attrib0__]; break;
/* 000462 */ 						case 'input_lineno_colno_offsets': var input_lineno_colno_offsets = __allkwargs0__ [__attrib0__]; break;
/* 000462 */ 					}
/* 000462 */ 				}
/* 000462 */ 			}
/* 000462 */ 		}
/* 000462 */ 		else {
/* 000462 */ 		}
/* 000475 */ 		var default_parsing_state = (function () {
/* 000475 */ 			var __accu0__ = self;
/* 000475 */ 			return __call__ (__accu0__.make_parsing_state, __accu0__, __kwargtrans__ ({is_block_level: is_block_level, parsing_mode: parsing_mode}));
/* 000475 */ 		}) ();
/* 000480 */ 		if (__t__ (tolerant_parsing === null)) {
/* 000481 */ 			var tolerant_parsing = self.tolerant_parsing;
/* 000481 */ 		}
/* 000483 */ 		if (__t__ (input_lineno_colno_offsets === null)) {
/* 000484 */ 			var input_lineno_colno_offsets = dict ({});
/* 000484 */ 		}
/* 000497 */ 		var latex_walker = __call__ (LLMLatexWalker, null, __kwargtrans__ ({llm_text: llm_text, default_parsing_state: default_parsing_state, tolerant_parsing: tolerant_parsing, llm_environment: self, standalone_mode: standalone_mode, resource_info: resource_info, what: what, parsing_state_event_handler: self.parsing_state_event_handler, line_number_offset: (function () {
/* 000497 */ 			var __accu0__ = input_lineno_colno_offsets;
/* 000497 */ 			return __call__ (__accu0__.py_get, __accu0__, 'line_number_offset', null);
/* 000499 */ 		}) (), first_line_column_offset: (function () {
/* 000499 */ 			var __accu0__ = input_lineno_colno_offsets;
/* 000499 */ 			return __call__ (__accu0__.py_get, __accu0__, 'first_line_column_offset', null);
/* 000500 */ 		}) (), column_offset: (function () {
/* 000500 */ 			var __accu0__ = input_lineno_colno_offsets;
/* 000500 */ 			return __call__ (__accu0__.py_get, __accu0__, 'column_offset', null);
/* 000500 */ 		}) ()}));
/* 000503 */ 		return latex_walker;
/* 000503 */ 	});},
/* 000505 */ 	get make_parsing_state () {return __get__ (this, function (self, is_block_level, parsing_mode) {
/* 000505 */ 		if (typeof parsing_mode == 'undefined' || (parsing_mode != null && parsing_mode.hasOwnProperty ("__kwargtrans__"))) {;
/* 000505 */ 			var parsing_mode = null;
/* 000505 */ 		};
/* 000505 */ 		if (arguments.length) {
/* 000505 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000505 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000505 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000505 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000505 */ 					switch (__attrib0__) {
/* 000505 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000505 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000505 */ 						case 'parsing_mode': var parsing_mode = __allkwargs0__ [__attrib0__]; break;
/* 000505 */ 					}
/* 000505 */ 				}
/* 000505 */ 			}
/* 000505 */ 		}
/* 000505 */ 		else {
/* 000505 */ 		}
/* 000509 */ 		var default_parsing_state = self.parsing_state;
/* 000511 */ 		if (__t__ (parsing_mode !== null)) {
/* 000512 */ 			try {
/* 000513 */ 				var parsing_state_delta = __getitem__ (self.parsing_mode_deltas, parsing_mode);
/* 000513 */ 			}
/* 000513 */ 			catch (__except0__) {
/* 000513 */ 				if (isinstance (__except0__, KeyError)) {
/* 000513 */ 					var e = __except0__;
/* 000515 */ 					var __except1__ = __call__ (ValueError, null, 'Invalid parsing_mode ‘{}’'.format (parsing_mode));
/* 000515 */ 					__except1__.__cause__ = null;
/* 000515 */ 					throw __except1__;
/* 000515 */ 				}
/* 000515 */ 				else {
/* 000515 */ 					throw __except0__;
/* 000515 */ 				}
/* 000515 */ 			}
/* 000517 */ 			if (__t__ (parsing_state_delta !== null)) {
/* 000518 */ 				var default_parsing_state = (function () {
/* 000518 */ 					var __accu0__ = parsing_state_delta;
/* 000518 */ 					return __call__ (__accu0__.get_updated_parsing_state, __accu0__, default_parsing_state, __kwargtrans__ ({latex_walker: null}));
/* 000518 */ 				}) ();
/* 000518 */ 			}
/* 000518 */ 		}
/* 000523 */ 		var kwargs = dict ({});
/* 000524 */ 		if (__t__ (is_block_level !== null)) {
/* 000525 */ 			__setitem__ (kwargs, 'is_block_level', is_block_level);
/* 000525 */ 		}
/* 000527 */ 		return (function () {
/* 000527 */ 			var __accu0__ = default_parsing_state;
/* 000527 */ 			return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ (kwargs));
/* 000527 */ 		}) ();
/* 000527 */ 	});},
/* 000530 */ 	get make_fragment () {return __get__ (this, function (self, llm_text) {
/* 000530 */ 		var kwargs = dict ();
/* 000530 */ 		if (arguments.length) {
/* 000530 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000530 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000530 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000530 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000530 */ 					switch (__attrib0__) {
/* 000530 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000530 */ 						case 'llm_text': var llm_text = __allkwargs0__ [__attrib0__]; break;
/* 000530 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000530 */ 					}
/* 000530 */ 				}
/* 000530 */ 				delete kwargs.__kwargtrans__;
/* 000530 */ 			}
/* 000530 */ 		}
/* 000530 */ 		else {
/* 000530 */ 		}
/* 000531 */ 		try {
/* 000532 */ 			var fragment = __call__ (LLMFragment, null, llm_text, __kwargtrans__ (__mergekwargtrans__ ({environment: self}, kwargs)));
/* 000533 */ 			return fragment;
/* 000533 */ 		}
/* 000533 */ 		catch (__except0__) {
/* 000535 */ 			if (__t__ (!__t__ (((function () {
/* 000535 */ 				var __accu0__ = kwargs;
/* 000535 */ 				return __call__ (__accu0__.py_get, __accu0__, 'silent', false);
/* 000535 */ 			}) ())))) {
/* 000536 */ 				(function () {
/* 000536 */ 					var __accu0__ = logger;
/* 000537 */ 					return __call__ (__accu0__.error, __accu0__, (function () {
/* 000537 */ 						var __accu1__ = 'Error compiling fragment for {}\nContent was:\n‘{}’\n';
/* 000538 */ 						return __call__ (__accu1__.format, __accu1__, (function () {
/* 000538 */ 							var __accu2__ = kwargs;
/* 000538 */ 							return __call__ (__accu2__.py_get, __accu2__, 'what', '(unknown)');
/* 000538 */ 						}) (), llm_text);
/* 000538 */ 					}) (), __kwargtrans__ ({exc_info: true}));
/* 000538 */ 				}) ();
/* 000538 */ 			}
/* 000541 */ 			__except0__.__cause__ = null;
/* 000541 */ 			throw __except0__;
/* 000541 */ 		}
/* 000541 */ 	});},
/* 000543 */ 	get node_list_finalizer () {return __get__ (this, function (self) {
/* 000543 */ 		if (arguments.length) {
/* 000543 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000543 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000543 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000543 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000543 */ 					switch (__attrib0__) {
/* 000543 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000543 */ 					}
/* 000543 */ 				}
/* 000543 */ 			}
/* 000543 */ 		}
/* 000543 */ 		else {
/* 000543 */ 		}
/* 000544 */ 		return self._node_list_finalizer;
/* 000544 */ 	});},
/* 000548 */ 	get make_document () {return __get__ (this, function (self, render_callback) {
/* 000548 */ 		var kwargs = dict ();
/* 000548 */ 		if (arguments.length) {
/* 000548 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000548 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000548 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000548 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000548 */ 					switch (__attrib0__) {
/* 000548 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000548 */ 						case 'render_callback': var render_callback = __allkwargs0__ [__attrib0__]; break;
/* 000548 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000548 */ 					}
/* 000548 */ 				}
/* 000548 */ 				delete kwargs.__kwargtrans__;
/* 000548 */ 			}
/* 000548 */ 		}
/* 000548 */ 		else {
/* 000548 */ 		}
/* 000556 */ 		var doc = __call__ (LLMDocument, null, render_callback, __kwargtrans__ (__mergekwargtrans__ ({environment: self}, kwargs)));
/* 000561 */ 		(function () {
/* 000561 */ 			var __accu0__ = doc;
/* 000561 */ 			return __call__ (__accu0__.initialize, __accu0__);
/* 000561 */ 		}) ();
/* 000562 */ 		return doc;
/* 000562 */ 	});},
/* 000565 */ 	get get_parse_error_message () {return __get__ (this, function (self, exception_object) {
/* 000565 */ 		if (arguments.length) {
/* 000565 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000565 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000565 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000565 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000565 */ 					switch (__attrib0__) {
/* 000565 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000565 */ 						case 'exception_object': var exception_object = __allkwargs0__ [__attrib0__]; break;
/* 000565 */ 					}
/* 000565 */ 				}
/* 000565 */ 			}
/* 000565 */ 		}
/* 000565 */ 		else {
/* 000565 */ 		}
/* 000566 */ 		return (function () {
/* 000566 */ 			var __accu0__ = __call__ (LatexWalkerParseErrorFormatter, null, exception_object);
/* 000566 */ 			return __call__ (__accu0__.to_display_string, __accu0__);
/* 000566 */ 		}) ();
/* 000566 */ 	});}
/* 000566 */ });
/* 000006 */ 
//# sourceMappingURL=llm.llmenvironment.map