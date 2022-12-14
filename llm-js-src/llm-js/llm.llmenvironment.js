/* 000001 */ // Transcrypt'ed from Python, 2022-12-14 17:06:08
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
/* 000006 */ export {LatexWalkerParseError, latexwalker, LLMFragment, latexnodes_nodes, LLMDocument, LatexWalkerParseErrorFormatter, latexnodes};
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
/* 000143 */ 			(function () {
/* 000143 */ 				var __accu0__ = logger;
/* 000143 */ 				return __call__ (__accu0__.debug, __accu0__, "simplifying whitespace for chars node, info['is_head']={} char_node={} --> char_node.llm_chars_value={}".format (__getitem__ (info, 'is_head'), char_node, char_node.llm_chars_value));
/* 000143 */ 			}) ();
/* 000143 */ 		}
/* 000145 */ 		return paragraph_nodes;
/* 000145 */ 	});},
/* 000147 */ 	get build_blocks () {return __get__ (this, function (self) {
/* 000147 */ 		if (arguments.length) {
/* 000147 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000147 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000147 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000147 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000147 */ 					switch (__attrib0__) {
/* 000147 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000147 */ 					}
/* 000147 */ 				}
/* 000147 */ 			}
/* 000147 */ 		}
/* 000147 */ 		else {
/* 000147 */ 		}
/* 000148 */ 		var latexnodelist = self.latexnodelist;
/* 000152 */ 		assert (__eq__ (__call__ (len, null, self.blocks), 0));
/* 000154 */ 		var __iterable0__ = latexnodelist;
/* 000154 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000154 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000155 */ 			var n_is_block_level = __call__ (getattr, null, n, 'llm_is_block_level', null);
/* 000156 */ 			var n_is_block_heading = __call__ (getattr, null, n, 'llm_is_block_heading', false);
/* 000157 */ 			if (__t__ (n_is_block_level)) {
/* 000159 */ 				(function () {
/* 000159 */ 					var __accu0__ = self;
/* 000159 */ 					return __call__ (__accu0__.flush_paragraph, __accu0__);
/* 000159 */ 				}) ();
/* 000161 */ 				if (__t__ (__call__ (getattr, null, n, 'llm_is_paragraph_break_marker', false))) {
/* 000161 */ 					continue;
/* 000161 */ 				}
/* 000166 */ 				if (__t__ (n_is_block_heading)) {
/* 000170 */ 					(function () {
/* 000170 */ 						var __accu0__ = self.pending_paragraph_nodes;
/* 000170 */ 						return __call__ (__accu0__.append, __accu0__, n);
/* 000170 */ 					}) ();
/* 000170 */ 					continue;
/* 000170 */ 				}
/* 000175 */ 				(function () {
/* 000175 */ 					var __accu0__ = self.blocks;
/* 000175 */ 					return __call__ (__accu0__.append, __accu0__, n);
/* 000175 */ 				}) ();
/* 000175 */ 				continue;
/* 000175 */ 			}
/* 000178 */ 			var paragraph_started_yet = true;
/* 000179 */ 			if (__t__ (!__t__ ((self.pending_paragraph_nodes)))) {
/* 000180 */ 				var paragraph_started_yet = false;
/* 000180 */ 			}
/* 000181 */ 			if (__t__ (__eq__ (__call__ (len, null, self.pending_paragraph_nodes), 1))) {
/* 000182 */ 				if (__t__ (__call__ (getattr, null, __getitem__ (self.pending_paragraph_nodes, 0), 'llm_is_block_heading', false))) {
/* 000184 */ 					var paragraph_started_yet = false;
/* 000184 */ 				}
/* 000184 */ 			}
/* 000187 */ 			if (__t__ (__t__ (!__t__ ((paragraph_started_yet))) && __t__ ((function () {
/* 000187 */ 				var __accu0__ = n;
/* 000187 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000188 */ 			}) ()) && (function () {
/* 000188 */ 				var __accu0__ = self.rx_only_space;
/* 000188 */ 				return __call__ (__accu0__.match, __accu0__, n.chars);
/* 000188 */ 			}) ())) {
/* 000188 */ 				continue;
/* 000188 */ 			}
/* 000194 */ 			(function () {
/* 000194 */ 				var __accu0__ = self.pending_paragraph_nodes;
/* 000194 */ 				return __call__ (__accu0__.append, __accu0__, n);
/* 000194 */ 			}) ();
/* 000194 */ 		}
/* 000197 */ 		(function () {
/* 000197 */ 			var __accu0__ = self;
/* 000197 */ 			return __call__ (__accu0__.flush_paragraph, __accu0__);
/* 000197 */ 		}) ();
/* 000199 */ 		return self.blocks;
/* 000199 */ 	});}
/* 000199 */ });
/* 000203 */ export var NodeListFinalizer =  __class__ ('NodeListFinalizer', [object], {
/* 000203 */ 	__module__: __name__,
/* 000208 */ 	get finalize_nodelist () {return __get__ (this, function (self, latexnodelist) {
/* 000208 */ 		if (arguments.length) {
/* 000208 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000208 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000208 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000208 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000208 */ 					switch (__attrib0__) {
/* 000208 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000208 */ 						case 'latexnodelist': var latexnodelist = __allkwargs0__ [__attrib0__]; break;
/* 000208 */ 					}
/* 000208 */ 				}
/* 000208 */ 			}
/* 000208 */ 		}
/* 000208 */ 		else {
/* 000208 */ 		}
/* 000222 */ 		var is_block_level = latexnodelist.parsing_state.is_block_level;
/* 000223 */ 		if (__t__ (is_block_level === null)) {
/* 000225 */ 			var is_block_level = (function () {
/* 000225 */ 				var __accu0__ = self;
/* 000225 */ 				return __call__ (__accu0__.infer_is_block_level_nodelist, __accu0__, latexnodelist);
/* 000225 */ 			}) ();
/* 000225 */ 		}
/* 000227 */ 		latexnodelist.llm_is_block_level = is_block_level;
/* 000230 */ 		if (__t__ (!__t__ ((is_block_level)))) {
/* 000232 */ 			var __iterable0__ = latexnodelist;
/* 000232 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000232 */ 				var n = __getitem__ (__iterable0__, __index0__);
/* 000233 */ 				if (__t__ (__call__ (getattr, null, n, 'llm_is_block_level', null))) {
/* 000237 */ 					var __except0__ = __call__ (LatexWalkerParseError, null, __kwargtrans__ ({msg: 'Content is not allowed in inline text (not block level): ‘{}’'.format ((function () {
/* 000237 */ 						var __accu0__ = n;
/* 000237 */ 						return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000237 */ 					}) ()), pos: n.pos}));
/* 000237 */ 					__except0__.__cause__ = null;
/* 000237 */ 					throw __except0__;
/* 000237 */ 				}
/* 000241 */ 				if (__t__ ((function () {
/* 000241 */ 					var __accu0__ = n;
/* 000241 */ 					return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000241 */ 				}) ())) {
/* 000242 */ 					n.llm_chars_value = (function () {
/* 000242 */ 						var __accu0__ = self;
/* 000242 */ 						return __call__ (__accu0__.simplify_whitespace_chars_inline, __accu0__, n.chars);
/* 000242 */ 					}) ();
/* 000242 */ 				}
/* 000242 */ 			}
/* 000247 */ 			return latexnodelist;
/* 000247 */ 		}
/* 000251 */ 		if (__t__ (is_block_level)) {
/* 000252 */ 			var blocks_builder = (function () {
/* 000252 */ 				var __accu0__ = self;
/* 000252 */ 				return __call__ (__accu0__.make_blocks_builder, __accu0__, latexnodelist);
/* 000252 */ 			}) ();
/* 000253 */ 			var llm_blocks = (function () {
/* 000253 */ 				var __accu0__ = blocks_builder;
/* 000253 */ 				return __call__ (__accu0__.build_blocks, __accu0__);
/* 000253 */ 			}) ();
/* 000254 */ 			latexnodelist.llm_blocks = llm_blocks;
/* 000254 */ 		}
/* 000256 */ 		return latexnodelist;
/* 000256 */ 	});},
/* 000258 */ 	get infer_is_block_level_nodelist () {return __get__ (this, function (self, latexnodelist) {
/* 000258 */ 		if (arguments.length) {
/* 000258 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000258 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000258 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000258 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000258 */ 					switch (__attrib0__) {
/* 000258 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000258 */ 						case 'latexnodelist': var latexnodelist = __allkwargs0__ [__attrib0__]; break;
/* 000258 */ 					}
/* 000258 */ 				}
/* 000258 */ 			}
/* 000258 */ 		}
/* 000258 */ 		else {
/* 000258 */ 		}
/* 000259 */ 		var __iterable0__ = latexnodelist;
/* 000259 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000259 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000260 */ 			var n_is_block_level = __call__ (getattr, null, n, 'llm_is_block_level', null);
/* 000261 */ 			if (__t__ (n_is_block_level)) {
/* 000262 */ 				return true;
/* 000262 */ 			}
/* 000262 */ 		}
/* 000263 */ 		return false;
/* 000263 */ 	});},
/* 000265 */ 	get simplify_whitespace_chars_inline () {return __get__ (this, function (self, chars) {
/* 000265 */ 		if (arguments.length) {
/* 000265 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000265 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000265 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000265 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000265 */ 					switch (__attrib0__) {
/* 000265 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000265 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000265 */ 					}
/* 000265 */ 				}
/* 000265 */ 			}
/* 000265 */ 		}
/* 000265 */ 		else {
/* 000265 */ 		}
/* 000266 */ 		return (function () {
/* 000266 */ 			var __accu0__ = self.rx_inline_space;
/* 000266 */ 			return __call__ (__accu0__.sub, __accu0__, ' ', chars);
/* 000266 */ 		}) ();
/* 000266 */ 	});},
/* 000268 */ 	make_blocks_builder: BlocksBuilder,
/* 000270 */ 	rx_inline_space: BlocksBuilder.rx_space
/* 000270 */ });
/* 000274 */ export var LLMLatexWalker =  __class__ ('LLMLatexWalker', [latexwalker.LatexWalker], {
/* 000274 */ 	__module__: __name__,
/* 000287 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000287 */ 		var parsing_state_event_handler = null;
/* 000287 */ 		var standalone_mode = false;
/* 000287 */ 		var resource_info = null;
/* 000287 */ 		var parsing_mode = null;
/* 000287 */ 		var what = null;
/* 000287 */ 		var kwargs = dict ();
/* 000287 */ 		if (arguments.length) {
/* 000287 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000287 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000287 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000287 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000287 */ 					switch (__attrib0__) {
/* 000287 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000287 */ 						case 'llm_text': var llm_text = __allkwargs0__ [__attrib0__]; break;
/* 000287 */ 						case 'default_parsing_state': var default_parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000287 */ 						case 'llm_environment': var llm_environment = __allkwargs0__ [__attrib0__]; break;
/* 000287 */ 						case 'parsing_state_event_handler': var parsing_state_event_handler = __allkwargs0__ [__attrib0__]; break;
/* 000287 */ 						case 'standalone_mode': var standalone_mode = __allkwargs0__ [__attrib0__]; break;
/* 000287 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000287 */ 						case 'parsing_mode': var parsing_mode = __allkwargs0__ [__attrib0__]; break;
/* 000287 */ 						case 'what': var what = __allkwargs0__ [__attrib0__]; break;
/* 000287 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000287 */ 					}
/* 000287 */ 				}
/* 000287 */ 				delete kwargs.__kwargtrans__;
/* 000287 */ 			}
/* 000287 */ 		}
/* 000287 */ 		else {
/* 000287 */ 		}
/* 000299 */ 		__call__ (__call__ (__super__, null, LLMLatexWalker, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({s: llm_text, default_parsing_state: default_parsing_state}, kwargs)));
/* 000305 */ 		self.llm_environment = llm_environment;
/* 000307 */ 		self.standalone_mode = standalone_mode;
/* 000311 */ 		self.resource_info = resource_info;
/* 000313 */ 		self.what = what;
/* 000316 */ 		self.parsing_mode = parsing_mode;
/* 000318 */ 		self._parsing_state_event_handler = parsing_state_event_handler;
/* 000318 */ 	});},
/* 000320 */ 	get parsing_state_event_handler () {return __get__ (this, function (self) {
/* 000320 */ 		if (arguments.length) {
/* 000320 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000320 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000320 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000320 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000320 */ 					switch (__attrib0__) {
/* 000320 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000320 */ 					}
/* 000320 */ 				}
/* 000320 */ 			}
/* 000320 */ 		}
/* 000320 */ 		else {
/* 000320 */ 		}
/* 000321 */ 		if (__t__ (self._parsing_state_event_handler)) {
/* 000322 */ 			return self._parsing_state_event_handler;
/* 000322 */ 		}
/* 000323 */ 		return __call__ (__call__ (__super__, null, LLMLatexWalker, 'parsing_state_event_handler'), null, self);
/* 000323 */ 	});},
/* 000325 */ 	get make_nodelist () {return __get__ (this, function (self, nodelist, parsing_state) {
/* 000325 */ 		var kwargs = dict ();
/* 000325 */ 		if (arguments.length) {
/* 000325 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000325 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000325 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000325 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000325 */ 					switch (__attrib0__) {
/* 000325 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000325 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000325 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000325 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000325 */ 					}
/* 000325 */ 				}
/* 000325 */ 				delete kwargs.__kwargtrans__;
/* 000325 */ 			}
/* 000325 */ 		}
/* 000325 */ 		else {
/* 000325 */ 		}
/* 000326 */ 		var nl = __call__ (__call__ (__super__, null, LLMLatexWalker, 'make_nodelist'), null, self, __kwargtrans__ (__mergekwargtrans__ ({nodelist: nodelist, parsing_state: parsing_state}, kwargs)));
/* 000328 */ 		var nl = (function () {
/* 000328 */ 			var __accu0__ = (function () {
/* 000328 */ 				var __accu1__ = self.llm_environment;
/* 000328 */ 				return __call__ (__accu1__.node_list_finalizer, __accu1__);
/* 000328 */ 			}) ();
/* 000328 */ 			return __call__ (__accu0__.finalize_nodelist, __accu0__, nl);
/* 000328 */ 		}) ();
/* 000329 */ 		return nl;
/* 000329 */ 	});},
/* 000331 */ 	get make_node () {return __get__ (this, function (self, node_class) {
/* 000331 */ 		var kwargs = dict ();
/* 000331 */ 		if (arguments.length) {
/* 000331 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000331 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000331 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000331 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000331 */ 					switch (__attrib0__) {
/* 000331 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000331 */ 						case 'node_class': var node_class = __allkwargs0__ [__attrib0__]; break;
/* 000331 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000331 */ 					}
/* 000331 */ 				}
/* 000331 */ 				delete kwargs.__kwargtrans__;
/* 000331 */ 			}
/* 000331 */ 		}
/* 000331 */ 		else {
/* 000331 */ 		}
/* 000332 */ 		var node = __call__ (__call__ (__super__, null, LLMLatexWalker, 'make_node'), null, self, node_class, __kwargtrans__ (kwargs));
/* 000334 */ 		node.node_id = __call__ (fn_unique_object_id, null, node);
/* 000335 */ 		return node;
/* 000335 */ 	});},
/* 000339 */ 	get filter_whitespace_comments_nodes () {return __get__ (this, function (self, nodelist) {
/* 000339 */ 		if (arguments.length) {
/* 000339 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000339 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000339 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000339 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000339 */ 					switch (__attrib0__) {
/* 000339 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000339 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000339 */ 					}
/* 000339 */ 				}
/* 000339 */ 			}
/* 000339 */ 		}
/* 000339 */ 		else {
/* 000339 */ 		}
/* 000344 */ 		return (function () {
/* 000344 */ 			var __accu0__ = nodelist;
/* 000344 */ 			return __call__ (__accu0__.filter, __accu0__, __kwargtrans__ ({node_predicate_fn: self._filter_whitespace_comments_nodes_predicate, skip_none: true, skip_comments: true, skip_whitespace_char_nodes: true}));
/* 000344 */ 		}) ();
/* 000344 */ 	});},
/* 000351 */ 	get _filter_whitespace_comments_nodes_predicate () {return __get__ (this, function (self, node) {
/* 000351 */ 		if (arguments.length) {
/* 000351 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000351 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000351 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000351 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000351 */ 					switch (__attrib0__) {
/* 000351 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000351 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000351 */ 					}
/* 000351 */ 				}
/* 000351 */ 			}
/* 000351 */ 		}
/* 000351 */ 		else {
/* 000351 */ 		}
/* 000352 */ 		if (__t__ (__call__ (getattr, null, node, 'llm_is_paragraph_break_marker', false))) {
/* 000353 */ 			return false;
/* 000353 */ 		}
/* 000354 */ 		return true;
/* 000354 */ 	});}
/* 000354 */ });
/* 000358 */ export var LLMEnvironment =  __class__ ('LLMEnvironment', [object], {
/* 000358 */ 	__module__: __name__,
/* 000377 */ 	get __init__ () {return __get__ (this, function (self, features, parsing_state, latex_context) {
/* 000377 */ 		var tolerant_parsing = false;
/* 000377 */ 		var parsing_mode_deltas = null;
/* 000377 */ 		if (arguments.length) {
/* 000377 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000377 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000377 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000377 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000377 */ 					switch (__attrib0__) {
/* 000377 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000377 */ 						case 'features': var features = __allkwargs0__ [__attrib0__]; break;
/* 000377 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000377 */ 						case 'latex_context': var latex_context = __allkwargs0__ [__attrib0__]; break;
/* 000377 */ 						case 'tolerant_parsing': var tolerant_parsing = __allkwargs0__ [__attrib0__]; break;
/* 000377 */ 						case 'parsing_mode_deltas': var parsing_mode_deltas = __allkwargs0__ [__attrib0__]; break;
/* 000377 */ 					}
/* 000377 */ 				}
/* 000377 */ 			}
/* 000377 */ 		}
/* 000377 */ 		else {
/* 000377 */ 		}
/* 000386 */ 		__call__ (__call__ (__super__, null, LLMEnvironment, '__init__'), null, self);
/* 000388 */ 		(function () {
/* 000388 */ 			var __accu0__ = logger;
/* 000388 */ 			return __call__ (__accu0__.debug, __accu0__, 'LLMEnvironment constructor');
/* 000388 */ 		}) ();
/* 000390 */ 		self.latex_context = latex_context;
/* 000391 */ 		self.parsing_state = parsing_state;
/* 000393 */ 		self.parsing_mode_deltas = (__t__ (parsing_mode_deltas) ? __call__ (dict, null, parsing_mode_deltas) : dict ({}));
/* 000395 */ 		self.features = __call__ (list, null, features);
/* 000397 */ 		(function () {
/* 000397 */ 			var __accu0__ = logger;
/* 000397 */ 			return __call__ (__accu0__.debug, __accu0__, 'Creating environment; features = %r', self.features);
/* 000397 */ 		}) ();
/* 000402 */ 		self.features_by_name = dict ({});
/* 000403 */ 		var __iterable0__ = self.features;
/* 000403 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000403 */ 			var feature = __getitem__ (__iterable0__, __index0__);
/* 000404 */ 			if (__t__ (__in__ (feature.feature_name, self.features_by_name))) {
/* 000405 */ 				var __except0__ = __call__ (ValueError, null, 'Duplicate feature detected: feature {} has same name/role as the as already-included feature {}'.format (feature, __getitem__ (self.features_by_name, feature.feature_name)));
/* 000405 */ 				__except0__.__cause__ = null;
/* 000405 */ 				throw __except0__;
/* 000405 */ 			}
/* 000410 */ 			__setitem__ (self.features_by_name, feature.feature_name, feature);
/* 000410 */ 		}
/* 000412 */ 		self.tolerant_parsing = tolerant_parsing;
/* 000414 */ 		self._node_list_finalizer = __call__ (NodeListFinalizer, null);
/* 000416 */ 		if (__t__ (self.parsing_state.latex_context === null)) {
/* 000419 */ 			var __iterable0__ = self.features;
/* 000419 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000419 */ 				var f = __getitem__ (__iterable0__, __index0__);
/* 000420 */ 				var moredefs = (function () {
/* 000420 */ 					var __accu0__ = f;
/* 000420 */ 					return __call__ (__accu0__.add_latex_context_definitions, __accu0__);
/* 000420 */ 				}) ();
/* 000421 */ 				if (__t__ (moredefs)) {
/* 000422 */ 					(function () {
/* 000422 */ 						var __accu0__ = logger;
/* 000422 */ 						return __call__ (__accu0__.debug, __accu0__, 'Adding definitions for “{}”'.format (f.feature_name));
/* 000422 */ 					}) ();
/* 000423 */ 					var moredefs2 = __call__ (dict, null, moredefs);
/* 000424 */ 					(function () {
/* 000424 */ 						var __accu0__ = moredefs2;
/* 000424 */ 						return __call__ (__accu0__.py_update, __accu0__, __kwargtrans__ ({prepend: true}));
/* 000424 */ 					}) ();
/* 000425 */ 					(function () {
/* 000425 */ 						var __accu0__ = self.latex_context;
/* 000425 */ 						return __call__ (__accu0__.add_context_category, __accu0__, 'feature--{}'.format (f.feature_name), __kwargtrans__ (moredefs2));
/* 000425 */ 					}) ();
/* 000425 */ 				}
/* 000425 */ 			}
/* 000431 */ 			(function () {
/* 000431 */ 				var __accu0__ = self.latex_context;
/* 000431 */ 				return __call__ (__accu0__.freeze, __accu0__);
/* 000431 */ 			}) ();
/* 000434 */ 			self.parsing_state.latex_context = self.latex_context;
/* 000434 */ 		}
/* 000436 */ 		else if (__t__ (self.latex_context !== null)) {
/* 000439 */ 			var __except0__ = __call__ (RuntimeError, null, 'The specified `parsing_state` instance already has a latex_context set');
/* 000439 */ 			__except0__.__cause__ = null;
/* 000439 */ 			throw __except0__;
/* 000439 */ 		}
/* 000439 */ 	});},
/* 000444 */ 	get feature () {return __get__ (this, function (self, feature_name) {
/* 000444 */ 		if (arguments.length) {
/* 000444 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000444 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000444 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000444 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000444 */ 					switch (__attrib0__) {
/* 000444 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000444 */ 						case 'feature_name': var feature_name = __allkwargs0__ [__attrib0__]; break;
/* 000444 */ 					}
/* 000444 */ 				}
/* 000444 */ 			}
/* 000444 */ 		}
/* 000444 */ 		else {
/* 000444 */ 		}
/* 000445 */ 		return __getitem__ (self.features_by_name, feature_name);
/* 000445 */ 	});},
/* 000448 */ 	parsing_state_event_handler: null,
/* 000450 */ 	get make_latex_walker () {return __get__ (this, function (self, llm_text) {
/* 000450 */ 		var parsing_mode = null;
/* 000450 */ 		var resource_info = null;
/* 000450 */ 		var tolerant_parsing = null;
/* 000450 */ 		var what = null;
/* 000450 */ 		var input_lineno_colno_offsets = null;
/* 000450 */ 		if (arguments.length) {
/* 000450 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000450 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000450 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000450 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000450 */ 					switch (__attrib0__) {
/* 000450 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000450 */ 						case 'llm_text': var llm_text = __allkwargs0__ [__attrib0__]; break;
/* 000450 */ 						case 'standalone_mode': var standalone_mode = __allkwargs0__ [__attrib0__]; break;
/* 000450 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000450 */ 						case 'parsing_mode': var parsing_mode = __allkwargs0__ [__attrib0__]; break;
/* 000450 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000450 */ 						case 'tolerant_parsing': var tolerant_parsing = __allkwargs0__ [__attrib0__]; break;
/* 000450 */ 						case 'what': var what = __allkwargs0__ [__attrib0__]; break;
/* 000450 */ 						case 'input_lineno_colno_offsets': var input_lineno_colno_offsets = __allkwargs0__ [__attrib0__]; break;
/* 000450 */ 					}
/* 000450 */ 				}
/* 000450 */ 			}
/* 000450 */ 		}
/* 000450 */ 		else {
/* 000450 */ 		}
/* 000463 */ 		var default_parsing_state = (function () {
/* 000463 */ 			var __accu0__ = self;
/* 000463 */ 			return __call__ (__accu0__.make_parsing_state, __accu0__, __kwargtrans__ ({is_block_level: is_block_level, parsing_mode: parsing_mode}));
/* 000463 */ 		}) ();
/* 000468 */ 		if (__t__ (tolerant_parsing === null)) {
/* 000469 */ 			var tolerant_parsing = self.tolerant_parsing;
/* 000469 */ 		}
/* 000471 */ 		if (__t__ (input_lineno_colno_offsets === null)) {
/* 000472 */ 			var input_lineno_colno_offsets = dict ({});
/* 000472 */ 		}
/* 000485 */ 		var latex_walker = __call__ (LLMLatexWalker, null, __kwargtrans__ ({llm_text: llm_text, default_parsing_state: default_parsing_state, tolerant_parsing: tolerant_parsing, llm_environment: self, standalone_mode: standalone_mode, resource_info: resource_info, what: what, parsing_state_event_handler: self.parsing_state_event_handler, line_number_offset: (function () {
/* 000485 */ 			var __accu0__ = input_lineno_colno_offsets;
/* 000485 */ 			return __call__ (__accu0__.py_get, __accu0__, 'line_number_offset', null);
/* 000487 */ 		}) (), first_line_column_offset: (function () {
/* 000487 */ 			var __accu0__ = input_lineno_colno_offsets;
/* 000487 */ 			return __call__ (__accu0__.py_get, __accu0__, 'first_line_column_offset', null);
/* 000488 */ 		}) (), column_offset: (function () {
/* 000488 */ 			var __accu0__ = input_lineno_colno_offsets;
/* 000488 */ 			return __call__ (__accu0__.py_get, __accu0__, 'column_offset', null);
/* 000488 */ 		}) ()}));
/* 000491 */ 		return latex_walker;
/* 000491 */ 	});},
/* 000493 */ 	get make_parsing_state () {return __get__ (this, function (self, is_block_level, parsing_mode) {
/* 000493 */ 		if (typeof parsing_mode == 'undefined' || (parsing_mode != null && parsing_mode.hasOwnProperty ("__kwargtrans__"))) {;
/* 000493 */ 			var parsing_mode = null;
/* 000493 */ 		};
/* 000493 */ 		if (arguments.length) {
/* 000493 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000493 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000493 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000493 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000493 */ 					switch (__attrib0__) {
/* 000493 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000493 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000493 */ 						case 'parsing_mode': var parsing_mode = __allkwargs0__ [__attrib0__]; break;
/* 000493 */ 					}
/* 000493 */ 				}
/* 000493 */ 			}
/* 000493 */ 		}
/* 000493 */ 		else {
/* 000493 */ 		}
/* 000497 */ 		var default_parsing_state = self.parsing_state;
/* 000499 */ 		if (__t__ (parsing_mode !== null)) {
/* 000500 */ 			try {
/* 000501 */ 				var parsing_state_delta = __getitem__ (self.parsing_mode_deltas, parsing_mode);
/* 000501 */ 			}
/* 000501 */ 			catch (__except0__) {
/* 000501 */ 				if (isinstance (__except0__, KeyError)) {
/* 000501 */ 					var e = __except0__;
/* 000503 */ 					var __except1__ = __call__ (ValueError, null, 'Invalid parsing_mode ‘{}’'.format (parsing_mode));
/* 000503 */ 					__except1__.__cause__ = null;
/* 000503 */ 					throw __except1__;
/* 000503 */ 				}
/* 000503 */ 				else {
/* 000503 */ 					throw __except0__;
/* 000503 */ 				}
/* 000503 */ 			}
/* 000505 */ 			if (__t__ (parsing_state_delta !== null)) {
/* 000506 */ 				var default_parsing_state = (function () {
/* 000506 */ 					var __accu0__ = parsing_state_delta;
/* 000506 */ 					return __call__ (__accu0__.get_updated_parsing_state, __accu0__, default_parsing_state, __kwargtrans__ ({latex_walker: null}));
/* 000506 */ 				}) ();
/* 000506 */ 			}
/* 000506 */ 		}
/* 000511 */ 		var kwargs = dict ({});
/* 000512 */ 		if (__t__ (is_block_level !== null)) {
/* 000513 */ 			__setitem__ (kwargs, 'is_block_level', is_block_level);
/* 000513 */ 		}
/* 000515 */ 		return (function () {
/* 000515 */ 			var __accu0__ = default_parsing_state;
/* 000515 */ 			return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ (kwargs));
/* 000515 */ 		}) ();
/* 000515 */ 	});},
/* 000518 */ 	get make_fragment () {return __get__ (this, function (self, llm_text) {
/* 000518 */ 		var kwargs = dict ();
/* 000518 */ 		if (arguments.length) {
/* 000518 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000518 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000518 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000518 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000518 */ 					switch (__attrib0__) {
/* 000518 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000518 */ 						case 'llm_text': var llm_text = __allkwargs0__ [__attrib0__]; break;
/* 000518 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000518 */ 					}
/* 000518 */ 				}
/* 000518 */ 				delete kwargs.__kwargtrans__;
/* 000518 */ 			}
/* 000518 */ 		}
/* 000518 */ 		else {
/* 000518 */ 		}
/* 000519 */ 		try {
/* 000520 */ 			var fragment = __call__ (LLMFragment, null, llm_text, __kwargtrans__ (__mergekwargtrans__ ({environment: self}, kwargs)));
/* 000521 */ 			return fragment;
/* 000521 */ 		}
/* 000521 */ 		catch (__except0__) {
/* 000523 */ 			if (__t__ (!__t__ (((function () {
/* 000523 */ 				var __accu0__ = kwargs;
/* 000523 */ 				return __call__ (__accu0__.py_get, __accu0__, 'silent', false);
/* 000523 */ 			}) ())))) {
/* 000524 */ 				(function () {
/* 000524 */ 					var __accu0__ = logger;
/* 000525 */ 					return __call__ (__accu0__.error, __accu0__, (function () {
/* 000525 */ 						var __accu1__ = 'Error compiling fragment for {}\nContent was:\n‘{}’\n';
/* 000526 */ 						return __call__ (__accu1__.format, __accu1__, (function () {
/* 000526 */ 							var __accu2__ = kwargs;
/* 000526 */ 							return __call__ (__accu2__.py_get, __accu2__, 'what', '(unknown)');
/* 000526 */ 						}) (), llm_text);
/* 000526 */ 					}) (), __kwargtrans__ ({exc_info: true}));
/* 000526 */ 				}) ();
/* 000526 */ 			}
/* 000529 */ 			__except0__.__cause__ = null;
/* 000529 */ 			throw __except0__;
/* 000529 */ 		}
/* 000529 */ 	});},
/* 000531 */ 	get node_list_finalizer () {return __get__ (this, function (self) {
/* 000531 */ 		if (arguments.length) {
/* 000531 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000531 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000531 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000531 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000531 */ 					switch (__attrib0__) {
/* 000531 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000531 */ 					}
/* 000531 */ 				}
/* 000531 */ 			}
/* 000531 */ 		}
/* 000531 */ 		else {
/* 000531 */ 		}
/* 000532 */ 		return self._node_list_finalizer;
/* 000532 */ 	});},
/* 000536 */ 	get make_document () {return __get__ (this, function (self, render_callback) {
/* 000536 */ 		var kwargs = dict ();
/* 000536 */ 		if (arguments.length) {
/* 000536 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000536 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000536 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000536 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000536 */ 					switch (__attrib0__) {
/* 000536 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000536 */ 						case 'render_callback': var render_callback = __allkwargs0__ [__attrib0__]; break;
/* 000536 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000536 */ 					}
/* 000536 */ 				}
/* 000536 */ 				delete kwargs.__kwargtrans__;
/* 000536 */ 			}
/* 000536 */ 		}
/* 000536 */ 		else {
/* 000536 */ 		}
/* 000544 */ 		var doc = __call__ (LLMDocument, null, render_callback, __kwargtrans__ (__mergekwargtrans__ ({environment: self}, kwargs)));
/* 000549 */ 		(function () {
/* 000549 */ 			var __accu0__ = doc;
/* 000549 */ 			return __call__ (__accu0__.initialize, __accu0__);
/* 000549 */ 		}) ();
/* 000550 */ 		return doc;
/* 000550 */ 	});},
/* 000553 */ 	get get_parse_error_message () {return __get__ (this, function (self, exception_object) {
/* 000553 */ 		if (arguments.length) {
/* 000553 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000553 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000553 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000553 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000553 */ 					switch (__attrib0__) {
/* 000553 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000553 */ 						case 'exception_object': var exception_object = __allkwargs0__ [__attrib0__]; break;
/* 000553 */ 					}
/* 000553 */ 				}
/* 000553 */ 			}
/* 000553 */ 		}
/* 000553 */ 		else {
/* 000553 */ 		}
/* 000554 */ 		return (function () {
/* 000554 */ 			var __accu0__ = __call__ (LatexWalkerParseErrorFormatter, null, exception_object);
/* 000554 */ 			return __call__ (__accu0__.to_display_string, __accu0__);
/* 000554 */ 		}) ();
/* 000554 */ 	});}
/* 000554 */ });
/* 000006 */ 
//# sourceMappingURL=llm.llmenvironment.map