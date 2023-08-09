/* 000001 */ // Transcrypt'ed from Python, 2023-08-09 17:29:33
/* 000037 */ var logging = {};
/* 000037 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000045 */ import {LatexParserBase} from './pylatexenc.latexnodes.parsers._base.js';
/* 000041 */ import * as nodes from './pylatexenc.latexnodes.nodes.js';
/* 000040 */ import {LatexWalkerEndOfStream, LatexWalkerError, LatexWalkerLocatedError, LatexWalkerLocatedErrorFormatter, LatexWalkerNodesParseError, LatexWalkerParseError, LatexWalkerTokenParseError, __all__, _unicode_from_str, format_pos, to_str} from './pylatexenc.latexnodes._exctypes.js';
/* 000037 */ import * as __module_logging__ from './logging.js';
/* 000037 */ __nest__ (logging, '', __module_logging__);
/* 000037 */ export {LatexWalkerNodesParseError, LatexParserBase, nodes, format_pos, _unicode_from_str, to_str, LatexWalkerLocatedErrorFormatter, LatexWalkerLocatedError, __all__, LatexWalkerEndOfStream, LatexWalkerParseError, LatexWalkerTokenParseError, LatexWalkerError};
/* 000001 */ var __name__ = 'pylatexenc.latexnodes.parsers._generalnodes';
/* 000038 */ export var logger = (function () {
/* 000038 */ 	var __accu0__ = logging;
/* 000038 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000038 */ }) ();
/* 000048 */ export var _basestring = str;
/* 000062 */ export var LatexGeneralNodesParser =  __class__ ('LatexGeneralNodesParser', [LatexParserBase], {
/* 000062 */ 	__module__: __name__,
/* 000111 */ 	get __init__ () {return __get__ (this, function (self, stop_token_condition, stop_nodelist_condition, require_stop_condition_met, stop_condition_message, make_child_parsing_state, handle_stop_condition_token, include_stop_token_pre_space_chars, handle_stop_data) {
/* 000111 */ 		if (typeof stop_token_condition == 'undefined' || (stop_token_condition != null && stop_token_condition.hasOwnProperty ("__kwargtrans__"))) {;
/* 000111 */ 			var stop_token_condition = null;
/* 000111 */ 		};
/* 000111 */ 		if (typeof stop_nodelist_condition == 'undefined' || (stop_nodelist_condition != null && stop_nodelist_condition.hasOwnProperty ("__kwargtrans__"))) {;
/* 000111 */ 			var stop_nodelist_condition = null;
/* 000111 */ 		};
/* 000111 */ 		if (typeof require_stop_condition_met == 'undefined' || (require_stop_condition_met != null && require_stop_condition_met.hasOwnProperty ("__kwargtrans__"))) {;
/* 000111 */ 			var require_stop_condition_met = true;
/* 000111 */ 		};
/* 000111 */ 		if (typeof stop_condition_message == 'undefined' || (stop_condition_message != null && stop_condition_message.hasOwnProperty ("__kwargtrans__"))) {;
/* 000111 */ 			var stop_condition_message = null;
/* 000111 */ 		};
/* 000111 */ 		if (typeof make_child_parsing_state == 'undefined' || (make_child_parsing_state != null && make_child_parsing_state.hasOwnProperty ("__kwargtrans__"))) {;
/* 000111 */ 			var make_child_parsing_state = null;
/* 000111 */ 		};
/* 000111 */ 		if (typeof handle_stop_condition_token == 'undefined' || (handle_stop_condition_token != null && handle_stop_condition_token.hasOwnProperty ("__kwargtrans__"))) {;
/* 000111 */ 			var handle_stop_condition_token = null;
/* 000111 */ 		};
/* 000111 */ 		if (typeof include_stop_token_pre_space_chars == 'undefined' || (include_stop_token_pre_space_chars != null && include_stop_token_pre_space_chars.hasOwnProperty ("__kwargtrans__"))) {;
/* 000111 */ 			var include_stop_token_pre_space_chars = true;
/* 000111 */ 		};
/* 000111 */ 		if (typeof handle_stop_data == 'undefined' || (handle_stop_data != null && handle_stop_data.hasOwnProperty ("__kwargtrans__"))) {;
/* 000111 */ 			var handle_stop_data = null;
/* 000111 */ 		};
/* 000111 */ 		var kwargs = dict ();
/* 000111 */ 		if (arguments.length) {
/* 000111 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000111 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000111 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000111 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000111 */ 					switch (__attrib0__) {
/* 000111 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000111 */ 						case 'stop_token_condition': var stop_token_condition = __allkwargs0__ [__attrib0__]; break;
/* 000111 */ 						case 'stop_nodelist_condition': var stop_nodelist_condition = __allkwargs0__ [__attrib0__]; break;
/* 000111 */ 						case 'require_stop_condition_met': var require_stop_condition_met = __allkwargs0__ [__attrib0__]; break;
/* 000111 */ 						case 'stop_condition_message': var stop_condition_message = __allkwargs0__ [__attrib0__]; break;
/* 000111 */ 						case 'make_child_parsing_state': var make_child_parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000111 */ 						case 'handle_stop_condition_token': var handle_stop_condition_token = __allkwargs0__ [__attrib0__]; break;
/* 000111 */ 						case 'include_stop_token_pre_space_chars': var include_stop_token_pre_space_chars = __allkwargs0__ [__attrib0__]; break;
/* 000111 */ 						case 'handle_stop_data': var handle_stop_data = __allkwargs0__ [__attrib0__]; break;
/* 000111 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000111 */ 					}
/* 000111 */ 				}
/* 000111 */ 				delete kwargs.__kwargtrans__;
/* 000111 */ 			}
/* 000111 */ 		}
/* 000111 */ 		else {
/* 000111 */ 		}
/* 000121 */ 		__call__ (__call__ (__super__, null, LatexGeneralNodesParser, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000122 */ 		self.stop_token_condition = stop_token_condition;
/* 000123 */ 		self.stop_nodelist_condition = stop_nodelist_condition;
/* 000125 */ 		self.require_stop_condition_met = require_stop_condition_met;
/* 000126 */ 		self.stop_condition_message = stop_condition_message;
/* 000128 */ 		self.make_child_parsing_state = make_child_parsing_state;
/* 000130 */ 		self.handle_stop_condition_token = handle_stop_condition_token;
/* 000131 */ 		self.handle_stop_data = handle_stop_data;
/* 000133 */ 		self.include_stop_token_pre_space_chars = include_stop_token_pre_space_chars;
/* 000133 */ 	});},
/* 000136 */ 	get make_nodes_collector () {return __get__ (this, function (self, latex_walker, token_reader, parsing_state) {
/* 000136 */ 		if (arguments.length) {
/* 000136 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000136 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000136 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000136 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000136 */ 					switch (__attrib0__) {
/* 000136 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000136 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000136 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000136 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000136 */ 					}
/* 000136 */ 				}
/* 000136 */ 			}
/* 000136 */ 		}
/* 000136 */ 		else {
/* 000136 */ 		}
/* 000140 */ 		return (function () {
/* 000140 */ 			var __accu0__ = latex_walker;
/* 000140 */ 			return __call__ (__accu0__.make_nodes_collector, __accu0__, __kwargtrans__ ({token_reader: token_reader, parsing_state: parsing_state, stop_token_condition: self.stop_token_condition, stop_nodelist_condition: self.stop_nodelist_condition, make_child_parsing_state: self.make_child_parsing_state, include_stop_token_pre_space_chars: self.include_stop_token_pre_space_chars}));
/* 000140 */ 		}) ();
/* 000140 */ 	});},
/* 000149 */ 	get parse () {return __get__ (this, function (self, latex_walker, token_reader, parsing_state) {
/* 000149 */ 		var kwargs = dict ();
/* 000149 */ 		if (arguments.length) {
/* 000149 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000149 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000149 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000149 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000149 */ 					switch (__attrib0__) {
/* 000149 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000149 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000149 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000149 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000149 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000149 */ 					}
/* 000149 */ 				}
/* 000149 */ 				delete kwargs.__kwargtrans__;
/* 000149 */ 			}
/* 000149 */ 		}
/* 000149 */ 		else {
/* 000149 */ 		}
/* 000158 */ 		var pos_start = (function () {
/* 000158 */ 			var __accu0__ = token_reader;
/* 000158 */ 			return __call__ (__accu0__.cur_pos, __accu0__);
/* 000158 */ 		}) ();
/* 000160 */ 		var collector = (function () {
/* 000160 */ 			var __accu0__ = self;
/* 000160 */ 			return __call__ (__accu0__.make_nodes_collector, __accu0__, latex_walker, token_reader, parsing_state);
/* 000160 */ 		}) ();
/* 000162 */ 		try {
/* 000164 */ 			(function () {
/* 000164 */ 				var __accu0__ = collector;
/* 000164 */ 				return __call__ (__accu0__.process_tokens, __accu0__);
/* 000164 */ 			}) ();
/* 000164 */ 		}
/* 000164 */ 		catch (__except0__) {
/* 000164 */ 			if (isinstance (__except0__, LatexWalkerParseError)) {
/* 000164 */ 				var e = __except0__;
/* 000173 */ 				// pass;
/* 000177 */ 				var thenodelist = (function () {
/* 000177 */ 					var __accu0__ = collector;
/* 000177 */ 					return __call__ (__accu0__.get_final_nodelist, __accu0__);
/* 000177 */ 				}) ();
/* 000178 */ 				if (__t__ (thenodelist.pos === null)) {
/* 000179 */ 					thenodelist.pos = pos_start;
/* 000179 */ 				}
/* 000180 */ 				if (__t__ (thenodelist.pos_end === null)) {
/* 000181 */ 					thenodelist.pos_end = pos_start;
/* 000181 */ 				}
/* 000189 */ 				var __except1__ = __call__ (LatexWalkerNodesParseError, null, __kwargtrans__ ({msg: e.msg, pos: e.pos, open_contexts: e.open_contexts, error_type_info: e.error_type_info, recovery_nodes: thenodelist, recovery_parsing_state_delta: (function () {
/* 000189 */ 					var __accu0__ = collector;
/* 000189 */ 					return __call__ (__accu0__.get_parser_parsing_state_delta, __accu0__);
/* 000189 */ 				}) ()}));
/* 000189 */ 				__except1__.__cause__ = null;
/* 000189 */ 				throw __except1__;
/* 000189 */ 			}
/* 000189 */ 			else {
/* 000189 */ 				throw __except0__;
/* 000189 */ 			}
/* 000189 */ 		}
/* 000192 */ 		var collected_nodelist = (function () {
/* 000192 */ 			var __accu0__ = collector;
/* 000192 */ 			return __call__ (__accu0__.get_final_nodelist, __accu0__);
/* 000192 */ 		}) ();
/* 000193 */ 		if (__t__ (collected_nodelist.pos === null)) {
/* 000194 */ 			collected_nodelist.pos = pos_start;
/* 000194 */ 		}
/* 000195 */ 		if (__t__ (collected_nodelist.pos_end === null)) {
/* 000196 */ 			collected_nodelist.pos_end = pos_start;
/* 000196 */ 		}
/* 000201 */ 		var stop_token_condition_met = (function () {
/* 000201 */ 			var __accu0__ = collector;
/* 000201 */ 			return __call__ (__accu0__.stop_token_condition_met, __accu0__);
/* 000201 */ 		}) ();
/* 000202 */ 		var stop_nodelist_condition_met = (function () {
/* 000202 */ 			var __accu0__ = collector;
/* 000202 */ 			return __call__ (__accu0__.stop_nodelist_condition_met, __accu0__);
/* 000202 */ 		}) ();
/* 000204 */ 		if (__t__ (!__t__ ((self.require_stop_condition_met)))) {
/* 000206 */ 			var met_a_required_stop_condition = true;
/* 000206 */ 		}
/* 000207 */ 		else {
/* 000208 */ 			var met_a_required_stop_condition = false;
/* 000209 */ 			if (__t__ (self.stop_token_condition !== null)) {
/* 000210 */ 				if (__t__ (stop_token_condition_met)) {
/* 000211 */ 					var met_a_required_stop_condition = true;
/* 000211 */ 				}
/* 000211 */ 			}
/* 000212 */ 			else if (__t__ (self.stop_nodelist_condition !== null)) {
/* 000213 */ 				if (__t__ (stop_nodelist_condition_met)) {
/* 000214 */ 					var met_a_required_stop_condition = true;
/* 000214 */ 				}
/* 000214 */ 			}
/* 000215 */ 			else {
/* 000217 */ 				var met_a_required_stop_condition = true;
/* 000217 */ 			}
/* 000217 */ 		}
/* 000219 */ 		// pass;
/* 000231 */ 		if (__t__ (!__t__ ((met_a_required_stop_condition)))) {
/* 000233 */ 			var message = self.stop_condition_message;
/* 000234 */ 			if (__t__ (message === null)) {
/* 000235 */ 				var message = 'End of stream encountered while parsing nodes without stop condition being met [reporting starting position]';
/* 000235 */ 			}
/* 000241 */ 			var exc = __call__ (LatexWalkerNodesParseError, null, __kwargtrans__ ({msg: message, pos: (function () {
/* 000241 */ 				var __accu0__ = collector;
/* 000241 */ 				return __call__ (__accu0__.pos_start, __accu0__);
/* 000243 */ 			}) (), recovery_nodes: collected_nodelist, recovery_parsing_state_delta: (function () {
/* 000243 */ 				var __accu0__ = collector;
/* 000243 */ 				return __call__ (__accu0__.get_parser_parsing_state_delta, __accu0__);
/* 000243 */ 			}) (), error_type_info: dict ({'what': 'nodes_generalnodes_required_stop_condition_not_met', 'stop_condition_message': self.stop_condition_message})}));
/* 000249 */ 			var __except0__ = exc;
/* 000249 */ 			__except0__.__cause__ = null;
/* 000249 */ 			throw __except0__;
/* 000249 */ 		}
/* 000251 */ 		if (__t__ (__t__ (stop_token_condition_met) && self.handle_stop_condition_token !== null)) {
/* 000253 */ 			var stoptoken = (function () {
/* 000253 */ 				var __accu0__ = collector;
/* 000253 */ 				return __call__ (__accu0__.stop_token_condition_met_token, __accu0__);
/* 000253 */ 			}) ();
/* 000255 */ 			if (__t__ (stoptoken !== null)) {
/* 000256 */ 				(function () {
/* 000256 */ 					var __accu0__ = self;
/* 000256 */ 					return __call__ (__accu0__.handle_stop_condition_token, __accu0__, stoptoken, __kwargtrans__ ({latex_walker: latex_walker, token_reader: token_reader, parsing_state: parsing_state}));
/* 000256 */ 				}) ();
/* 000256 */ 			}
/* 000256 */ 		}
/* 000263 */ 		var stop_data = (function () {
/* 000263 */ 			var __accu0__ = collector;
/* 000263 */ 			return __call__ (__accu0__.stop_condition_stop_data, __accu0__);
/* 000263 */ 		}) ();
/* 000264 */ 		if (__t__ (__t__ (stop_data !== null) && self.handle_stop_data !== null)) {
/* 000265 */ 			(function () {
/* 000265 */ 				var __accu0__ = self;
/* 000265 */ 				return __call__ (__accu0__.handle_stop_data, __accu0__, stop_data, __kwargtrans__ ({latex_walker: latex_walker, token_reader: token_reader, parsing_state: parsing_state}));
/* 000265 */ 			}) ();
/* 000265 */ 		}
/* 000272 */ 		var nodelist = collected_nodelist;
/* 000273 */ 		var parsing_state_delta = (function () {
/* 000273 */ 			var __accu0__ = collector;
/* 000273 */ 			return __call__ (__accu0__.get_parser_parsing_state_delta, __accu0__);
/* 000273 */ 		}) ();
/* 000275 */ 		// pass;
/* 000279 */ 		return tuple ([nodelist, parsing_state_delta]);
/* 000279 */ 	});}
/* 000279 */ });
/* 000286 */ export var LatexSingleNodeParser =  __class__ ('LatexSingleNodeParser', [LatexGeneralNodesParser], {
/* 000286 */ 	__module__: __name__,
/* 000307 */ 	get __init__ () {return __get__ (this, function (self, stop_on_comment) {
/* 000307 */ 		if (typeof stop_on_comment == 'undefined' || (stop_on_comment != null && stop_on_comment.hasOwnProperty ("__kwargtrans__"))) {;
/* 000307 */ 			var stop_on_comment = true;
/* 000307 */ 		};
/* 000307 */ 		var kwargs = dict ();
/* 000307 */ 		if (arguments.length) {
/* 000307 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000307 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000307 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000307 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000307 */ 					switch (__attrib0__) {
/* 000307 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000307 */ 						case 'stop_on_comment': var stop_on_comment = __allkwargs0__ [__attrib0__]; break;
/* 000307 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000307 */ 					}
/* 000307 */ 				}
/* 000307 */ 				delete kwargs.__kwargtrans__;
/* 000307 */ 			}
/* 000307 */ 		}
/* 000307 */ 		else {
/* 000307 */ 		}
/* 000308 */ 		__call__ (__call__ (__super__, null, LatexSingleNodeParser, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({stop_nodelist_condition: self._stop_nodelist_condition, require_stop_condition_met: false}, kwargs)));
/* 000313 */ 		self.stop_on_comment = stop_on_comment;
/* 000313 */ 	});},
/* 000315 */ 	get _stop_nodelist_condition () {return __get__ (this, function (self, nodelist) {
/* 000315 */ 		if (arguments.length) {
/* 000315 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000315 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000315 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000315 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000315 */ 					switch (__attrib0__) {
/* 000315 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000315 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000315 */ 					}
/* 000315 */ 				}
/* 000315 */ 			}
/* 000315 */ 		}
/* 000315 */ 		else {
/* 000315 */ 		}
/* 000316 */ 		var nl = nodelist;
/* 000317 */ 		if (__t__ (!__t__ ((self.stop_on_comment)))) {
/* 000318 */ 			var nl = (function () {
/* 000318 */ 				var __accu0__ = [];
/* 000318 */ 				var __iterable0__ = nl;
/* 000318 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000318 */ 					var n = __getitem__ (__iterable0__, __index0__);
/* 000318 */ 					if (__t__ (!__t__ (((function () {
/* 000318 */ 						var __accu1__ = n;
/* 000318 */ 						return __call__ (__accu1__.isNodeType, __accu1__, nodes.LatexCommentNode);
/* 000318 */ 					}) ())))) {
/* 000318 */ 						(function () {
/* 000318 */ 							var __accu1__ = __accu0__;
/* 000318 */ 							return __call__ (__accu1__.append, __accu1__, n);
/* 000318 */ 						}) ();
/* 000318 */ 					}
/* 000318 */ 				}
/* 000318 */ 				return __accu0__;
/* 000318 */ 			}) ();
/* 000318 */ 		}
/* 000319 */ 		if (__t__ (__ge__ (__call__ (len, null, nl), 1))) {
/* 000320 */ 			return true;
/* 000320 */ 		}
/* 000321 */ 		return false;
/* 000321 */ 	});},
/* 000323 */ 	get contents_can_be_empty () {return __get__ (this, function (self) {
/* 000323 */ 		if (arguments.length) {
/* 000323 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000323 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000323 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000323 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000323 */ 					switch (__attrib0__) {
/* 000323 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000323 */ 					}
/* 000323 */ 				}
/* 000323 */ 			}
/* 000323 */ 		}
/* 000323 */ 		else {
/* 000323 */ 		}
/* 000328 */ 		return false;
/* 000328 */ 	});}
/* 000328 */ });
/* 000037 */ 
//# sourceMappingURL=pylatexenc.latexnodes.parsers._generalnodes.map