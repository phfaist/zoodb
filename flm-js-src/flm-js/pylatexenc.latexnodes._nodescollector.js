/* 000001 */ // Transcrypt'ed from Python, 2023-04-25 12:01:29
/* 000037 */ var logging = {};
/* 000037 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000044 */ import {ParsingStateDeltaEnterMathMode, ParsingStateDeltaReplaceParsingState, get_updated_parsing_state_from_delta} from './pylatexenc.latexnodes._parsingstatedelta.js';
/* 000041 */ import {LatexCharsNode, LatexCommentNode, LatexEnvironmentNode, LatexGroupNode, LatexMacroNode, LatexMathNode, LatexNode, LatexNodeList, LatexNodesVisitor, LatexSpecialsNode, LatexWalkerParseError, ParsedArguments, __all__, _get_content_as_chars, _unicode_from_str, _update_posposend_from_nodelist, latex_node_types} from './pylatexenc.latexnodes.nodes.js';
/* 000040 */ import {LatexWalkerEndOfStream, LatexWalkerError, LatexWalkerLocatedError, LatexWalkerLocatedErrorFormatter, LatexWalkerNodesParseError, LatexWalkerTokenParseError, _basestring, format_pos, to_str} from './pylatexenc.latexnodes._exctypes.js';
/* 000037 */ import * as __module_logging__ from './logging.js';
/* 000037 */ __nest__ (logging, '', __module_logging__);
/* 000037 */ export {_basestring, LatexSpecialsNode, _update_posposend_from_nodelist, LatexNodesVisitor, ParsingStateDeltaEnterMathMode, _unicode_from_str, ParsingStateDeltaReplaceParsingState, LatexNodeList, get_updated_parsing_state_from_delta, latex_node_types, LatexCharsNode, LatexEnvironmentNode, ParsedArguments, __all__, LatexMathNode, LatexWalkerLocatedError, LatexNode, LatexWalkerTokenParseError, to_str, _get_content_as_chars, format_pos, LatexWalkerEndOfStream, LatexWalkerError, LatexWalkerLocatedErrorFormatter, LatexGroupNode, LatexWalkerNodesParseError, LatexWalkerParseError, LatexMacroNode, LatexCommentNode};
/* 000001 */ var __name__ = 'pylatexenc.latexnodes._nodescollector';
/* 000038 */ export var logger = (function () {
/* 000038 */ 	var __accu0__ = logging;
/* 000038 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000038 */ }) ();
/* 000051 */ export var LatexNodesCollector =  __class__ ('LatexNodesCollector', [object], {
/* 000075 */ 	__module__: __name__,
/* 000075 */ 	ReachedEndOfStream: __class__ ('ReachedEndOfStream', [Exception], {
/* 000075 */ 		__module__: __name__,
/* 000088 */ 	}),
/* 000088 */ 	ReachedStoppingCondition: __class__ ('ReachedStoppingCondition', [Exception], {
/* 000088 */ 		__module__: __name__,
/* 000098 */ 		get __init__ () {return __get__ (this, function (self, stop_data) {
/* 000098 */ 			var kwargs = dict ();
/* 000098 */ 			if (arguments.length) {
/* 000098 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000098 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000098 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000098 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000098 */ 						switch (__attrib0__) {
/* 000098 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000098 */ 							case 'stop_data': var stop_data = __allkwargs0__ [__attrib0__]; break;
/* 000098 */ 							default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000098 */ 						}
/* 000098 */ 					}
/* 000098 */ 					delete kwargs.__kwargtrans__;
/* 000098 */ 				}
/* 000098 */ 			}
/* 000098 */ 			else {
/* 000098 */ 			}
/* 000099 */ 			__call__ (__call__ (__super__, null, LatexNodesCollector.ReachedStoppingCondition, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000100 */ 			self.stop_data = stop_data;
/* 000100 */ 		});}
/* 000100 */ 	}),
/* 000103 */ 	get __init__ () {return __get__ (this, function (self, latex_walker, token_reader, parsing_state, stop_token_condition, stop_nodelist_condition, make_child_parsing_state, include_stop_token_pre_space_chars) {
/* 000103 */ 		if (typeof stop_token_condition == 'undefined' || (stop_token_condition != null && stop_token_condition.hasOwnProperty ("__kwargtrans__"))) {;
/* 000103 */ 			var stop_token_condition = null;
/* 000103 */ 		};
/* 000103 */ 		if (typeof stop_nodelist_condition == 'undefined' || (stop_nodelist_condition != null && stop_nodelist_condition.hasOwnProperty ("__kwargtrans__"))) {;
/* 000103 */ 			var stop_nodelist_condition = null;
/* 000103 */ 		};
/* 000103 */ 		if (typeof make_child_parsing_state == 'undefined' || (make_child_parsing_state != null && make_child_parsing_state.hasOwnProperty ("__kwargtrans__"))) {;
/* 000103 */ 			var make_child_parsing_state = null;
/* 000103 */ 		};
/* 000103 */ 		if (typeof include_stop_token_pre_space_chars == 'undefined' || (include_stop_token_pre_space_chars != null && include_stop_token_pre_space_chars.hasOwnProperty ("__kwargtrans__"))) {;
/* 000103 */ 			var include_stop_token_pre_space_chars = true;
/* 000103 */ 		};
/* 000103 */ 		if (arguments.length) {
/* 000103 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000103 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000103 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000103 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000103 */ 					switch (__attrib0__) {
/* 000103 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000103 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000103 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000103 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000103 */ 						case 'stop_token_condition': var stop_token_condition = __allkwargs0__ [__attrib0__]; break;
/* 000103 */ 						case 'stop_nodelist_condition': var stop_nodelist_condition = __allkwargs0__ [__attrib0__]; break;
/* 000103 */ 						case 'make_child_parsing_state': var make_child_parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000103 */ 						case 'include_stop_token_pre_space_chars': var include_stop_token_pre_space_chars = __allkwargs0__ [__attrib0__]; break;
/* 000103 */ 					}
/* 000103 */ 				}
/* 000103 */ 			}
/* 000103 */ 		}
/* 000103 */ 		else {
/* 000103 */ 		}
/* 000113 */ 		__call__ (__call__ (__super__, null, LatexNodesCollector, '__init__'), null, self);
/* 000115 */ 		self.latex_walker = latex_walker;
/* 000116 */ 		self.token_reader = token_reader;
/* 000118 */ 		self.stop_token_condition = stop_token_condition;
/* 000119 */ 		self.stop_nodelist_condition = stop_nodelist_condition;
/* 000121 */ 		self.include_stop_token_pre_space_chars = include_stop_token_pre_space_chars;
/* 000123 */ 		self._stop_token_condition_met = false;
/* 000125 */ 		self._stop_token_condition_met_token = null;
/* 000126 */ 		self._stop_nodelist_condition_met = false;
/* 000127 */ 		self._stop_condition_stop_data = null;
/* 000128 */ 		self._reached_end_of_stream = false;
/* 000132 */ 		self.parsing_state = parsing_state;
/* 000134 */ 		self.start_parsing_state = parsing_state;
/* 000137 */ 		self._nodelist = [];
/* 000140 */ 		self._pending_chars_pos = null;
/* 000141 */ 		self._pending_chars = '';
/* 000144 */ 		self._finalized = false;
/* 000147 */ 		self._make_child_parsing_state_fn = make_child_parsing_state;
/* 000147 */ 	});},
/* 000151 */ 	get get_final_nodelist () {return __get__ (this, function (self) {
/* 000151 */ 		if (arguments.length) {
/* 000151 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000151 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000151 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000151 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000151 */ 					switch (__attrib0__) {
/* 000151 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000151 */ 					}
/* 000151 */ 				}
/* 000151 */ 			}
/* 000151 */ 		}
/* 000151 */ 		else {
/* 000151 */ 		}
/* 000157 */ 		if (__t__ (!__t__ ((self._finalized)))) {
/* 000158 */ 			var __except0__ = __call__ (RuntimeError, null, 'Call to get_final_nodelist() before finalize()');
/* 000158 */ 			__except0__.__cause__ = null;
/* 000158 */ 			throw __except0__;
/* 000158 */ 		}
/* 000160 */ 		return (function () {
/* 000160 */ 			var __accu0__ = self.latex_walker;
/* 000160 */ 			return __call__ (__accu0__.make_nodelist, __accu0__, __kwargtrans__ ({nodelist: self._nodelist, parsing_state: self.start_parsing_state}));
/* 000160 */ 		}) ();
/* 000160 */ 	});},
/* 000166 */ 	get get_parser_parsing_state_delta () {return __get__ (this, function (self) {
/* 000166 */ 		if (arguments.length) {
/* 000166 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000166 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000166 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000166 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000166 */ 					switch (__attrib0__) {
/* 000166 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000166 */ 					}
/* 000166 */ 				}
/* 000166 */ 			}
/* 000166 */ 		}
/* 000166 */ 		else {
/* 000166 */ 		}
/* 000170 */ 		if (__t__ (!__t__ ((self._finalized)))) {
/* 000171 */ 			var __except0__ = __call__ (RuntimeError, null, 'Call to get_parser_parsing_state_delta() before finalize()');
/* 000171 */ 			__except0__.__cause__ = null;
/* 000171 */ 			throw __except0__;
/* 000171 */ 		}
/* 000173 */ 		if (__t__ (self.start_parsing_state === self.parsing_state)) {
/* 000175 */ 			return null;
/* 000175 */ 		}
/* 000178 */ 		return __call__ (ParsingStateDeltaReplaceParsingState, null, __kwargtrans__ ({set_parsing_state: self.parsing_state}));
/* 000178 */ 	});},
/* 000181 */ 	get pos_start () {return __get__ (this, function (self) {
/* 000181 */ 		if (arguments.length) {
/* 000181 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000181 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000181 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000181 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000181 */ 					switch (__attrib0__) {
/* 000181 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000181 */ 					}
/* 000181 */ 				}
/* 000181 */ 			}
/* 000181 */ 		}
/* 000181 */ 		else {
/* 000181 */ 		}
/* 000186 */ 		try {
/* 000188 */ 			var p = __call__ (py_next, null, (function () {
/* 000188 */ 				var __accu0__ = [];
/* 000188 */ 				var __iterable0__ = self._nodelist;
/* 000188 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000188 */ 					var n = __getitem__ (__iterable0__, __index0__);
/* 000188 */ 					if (__t__ (n !== null)) {
/* 000188 */ 						(function () {
/* 000188 */ 							var __accu1__ = __accu0__;
/* 000188 */ 							return __call__ (__accu1__.append, __accu1__, n.pos);
/* 000188 */ 						}) ();
/* 000188 */ 					}
/* 000188 */ 				}
/* 000188 */ 				return py_iter (__accu0__);
/* 000188 */ 			}) ());
/* 000188 */ 		}
/* 000188 */ 		catch (__except0__) {
/* 000188 */ 			if (isinstance (__except0__, StopIteration)) {
/* 000190 */ 				var p = null;
/* 000190 */ 			}
/* 000190 */ 			else {
/* 000190 */ 				throw __except0__;
/* 000190 */ 			}
/* 000190 */ 		}
/* 000191 */ 		if (__t__ (p !== null)) {
/* 000192 */ 			return p;
/* 000192 */ 		}
/* 000193 */ 		return self._pending_chars_pos;
/* 000193 */ 	});},
/* 000195 */ 	get pos_end () {return __get__ (this, function (self) {
/* 000195 */ 		if (arguments.length) {
/* 000195 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000195 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000195 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000195 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000195 */ 					switch (__attrib0__) {
/* 000195 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000195 */ 					}
/* 000195 */ 				}
/* 000195 */ 			}
/* 000195 */ 		}
/* 000195 */ 		else {
/* 000195 */ 		}
/* 000200 */ 		try {
/* 000202 */ 			var lastnode = __call__ (py_next, null, (function () {
/* 000202 */ 				var __accu0__ = [];
/* 000202 */ 				var __iterable0__ = __call__ (py_reversed, null, self._nodelist);
/* 000202 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000202 */ 					var n = __getitem__ (__iterable0__, __index0__);
/* 000202 */ 					if (__t__ (n !== null)) {
/* 000202 */ 						(function () {
/* 000202 */ 							var __accu1__ = __accu0__;
/* 000202 */ 							return __call__ (__accu1__.append, __accu1__, n);
/* 000202 */ 						}) ();
/* 000202 */ 					}
/* 000202 */ 				}
/* 000202 */ 				return py_iter (__accu0__);
/* 000202 */ 			}) ());
/* 000202 */ 		}
/* 000202 */ 		catch (__except0__) {
/* 000202 */ 			if (isinstance (__except0__, StopIteration)) {
/* 000204 */ 				var lastnode = null;
/* 000204 */ 			}
/* 000204 */ 			else {
/* 000204 */ 				throw __except0__;
/* 000204 */ 			}
/* 000204 */ 		}
/* 000205 */ 		if (__t__ (lastnode === null)) {
/* 000206 */ 			return null;
/* 000206 */ 		}
/* 000207 */ 		return lastnode.pos_end;
/* 000207 */ 	});},
/* 000210 */ 	get stop_token_condition_met () {return __get__ (this, function (self) {
/* 000210 */ 		if (arguments.length) {
/* 000210 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000210 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000210 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000210 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000210 */ 					switch (__attrib0__) {
/* 000210 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000210 */ 					}
/* 000210 */ 				}
/* 000210 */ 			}
/* 000210 */ 		}
/* 000210 */ 		else {
/* 000210 */ 		}
/* 000215 */ 		return self._stop_token_condition_met;
/* 000215 */ 	});},
/* 000217 */ 	get stop_token_condition_met_token () {return __get__ (this, function (self) {
/* 000217 */ 		if (arguments.length) {
/* 000217 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000217 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000217 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000217 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000217 */ 					switch (__attrib0__) {
/* 000217 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000217 */ 					}
/* 000217 */ 				}
/* 000217 */ 			}
/* 000217 */ 		}
/* 000217 */ 		else {
/* 000217 */ 		}
/* 000221 */ 		return self._stop_token_condition_met_token;
/* 000221 */ 	});},
/* 000223 */ 	get stop_nodelist_condition_met () {return __get__ (this, function (self) {
/* 000223 */ 		if (arguments.length) {
/* 000223 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000223 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000223 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000223 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000223 */ 					switch (__attrib0__) {
/* 000223 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000223 */ 					}
/* 000223 */ 				}
/* 000223 */ 			}
/* 000223 */ 		}
/* 000223 */ 		else {
/* 000223 */ 		}
/* 000228 */ 		return self._stop_nodelist_condition_met;
/* 000228 */ 	});},
/* 000230 */ 	get stop_condition_stop_data () {return __get__ (this, function (self) {
/* 000230 */ 		if (arguments.length) {
/* 000230 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000230 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000230 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000230 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000230 */ 					switch (__attrib0__) {
/* 000230 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000230 */ 					}
/* 000230 */ 				}
/* 000230 */ 			}
/* 000230 */ 		}
/* 000230 */ 		else {
/* 000230 */ 		}
/* 000235 */ 		return self._stop_condition_stop_data;
/* 000235 */ 	});},
/* 000237 */ 	get reached_end_of_stream () {return __get__ (this, function (self) {
/* 000237 */ 		if (arguments.length) {
/* 000237 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000237 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000237 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000237 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000237 */ 					switch (__attrib0__) {
/* 000237 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000237 */ 					}
/* 000237 */ 				}
/* 000237 */ 			}
/* 000237 */ 		}
/* 000237 */ 		else {
/* 000237 */ 		}
/* 000241 */ 		return self._reached_end_of_stream;
/* 000241 */ 	});},
/* 000244 */ 	get is_finalized () {return __get__ (this, function (self) {
/* 000244 */ 		if (arguments.length) {
/* 000244 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000244 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000244 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000244 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000244 */ 					switch (__attrib0__) {
/* 000244 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000244 */ 					}
/* 000244 */ 				}
/* 000244 */ 			}
/* 000244 */ 		}
/* 000244 */ 		else {
/* 000244 */ 		}
/* 000251 */ 		return self._finalized;
/* 000251 */ 	});},
/* 000253 */ 	get finalize () {return __get__ (this, function (self) {
/* 000253 */ 		if (arguments.length) {
/* 000253 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000253 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000253 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000253 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000253 */ 					switch (__attrib0__) {
/* 000253 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000253 */ 					}
/* 000253 */ 				}
/* 000253 */ 			}
/* 000253 */ 		}
/* 000253 */ 		else {
/* 000253 */ 		}
/* 000267 */ 		if (__t__ (self._finalized)) {
/* 000268 */ 			return ;
/* 000268 */ 		}
/* 000270 */ 		var exc = (function () {
/* 000270 */ 			var __accu0__ = self;
/* 000270 */ 			return __call__ (__accu0__.flush_pending_chars, __accu0__);
/* 000270 */ 		}) ();
/* 000272 */ 		self._finalized = true;
/* 000274 */ 		if (__t__ (exc !== null)) {
/* 000275 */ 			(function () {
/* 000275 */ 				var __accu0__ = logger;
/* 000275 */ 				return __call__ (__accu0__.debug, __accu0__, 'finalize(): raising exc=%r', exc);
/* 000275 */ 			}) ();
/* 000276 */ 			var __except0__ = exc;
/* 000276 */ 			__except0__.__cause__ = null;
/* 000276 */ 			throw __except0__;
/* 000276 */ 		}
/* 000276 */ 	});},
/* 000286 */ 	get push_pending_chars () {return __get__ (this, function (self, chars, pos) {
/* 000286 */ 		if (arguments.length) {
/* 000286 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000286 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000286 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000286 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000286 */ 					switch (__attrib0__) {
/* 000286 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000286 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000286 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000286 */ 					}
/* 000286 */ 				}
/* 000286 */ 			}
/* 000286 */ 		}
/* 000286 */ 		else {
/* 000286 */ 		}
/* 000294 */ 		self._pending_chars = __call__ (__iadd__, null, self._pending_chars, chars);
/* 000295 */ 		if (__t__ (self._pending_chars_pos === null)) {
/* 000296 */ 			self._pending_chars_pos = pos;
/* 000296 */ 		}
/* 000296 */ 	});},
/* 000298 */ 	get flush_pending_chars () {return __get__ (this, function (self) {
/* 000298 */ 		if (arguments.length) {
/* 000298 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000298 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000298 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000298 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000298 */ 					switch (__attrib0__) {
/* 000298 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000298 */ 					}
/* 000298 */ 				}
/* 000298 */ 			}
/* 000298 */ 		}
/* 000298 */ 		else {
/* 000298 */ 		}
/* 000306 */ 		if (__t__ (!__t__ ((self._pending_chars)))) {
/* 000308 */ 			return null;
/* 000308 */ 		}
/* 000310 */ 		var __left0__ = tuple ([self._pending_chars_pos, self._pending_chars]);
/* 000310 */ 		var charspos = __left0__ [0];
/* 000310 */ 		var chars = __left0__ [1];
/* 000311 */ 		self._pending_chars = '';
/* 000312 */ 		self._pending_chars_pos = null;
/* 000314 */ 		var strnode = (function () {
/* 000314 */ 			var __accu0__ = self.latex_walker;
/* 000319 */ 			return __call__ (__accu0__.make_node, __accu0__, LatexCharsNode, __kwargtrans__ ({parsing_state: self.parsing_state, chars: chars, pos: charspos, pos_end: __add__ (charspos, __call__ (len, null, chars))}));
/* 000319 */ 		}) ();
/* 000321 */ 		return (function () {
/* 000321 */ 			var __accu0__ = self;
/* 000321 */ 			return __call__ (__accu0__.push_to_nodelist, __accu0__, strnode);
/* 000321 */ 		}) ();
/* 000321 */ 	});},
/* 000323 */ 	get push_to_nodelist () {return __get__ (this, function (self, node) {
/* 000323 */ 		if (arguments.length) {
/* 000323 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000323 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000323 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000323 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000323 */ 					switch (__attrib0__) {
/* 000323 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000323 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000323 */ 					}
/* 000323 */ 				}
/* 000323 */ 			}
/* 000323 */ 		}
/* 000323 */ 		else {
/* 000323 */ 		}
/* 000330 */ 		if (__t__ (self._finalized)) {
/* 000331 */ 			var __except0__ = __call__ (RuntimeError, null, 'You already called finalize()');
/* 000331 */ 			__except0__.__cause__ = null;
/* 000331 */ 			throw __except0__;
/* 000331 */ 		}
/* 000333 */ 		(function () {
/* 000333 */ 			var __accu0__ = self._nodelist;
/* 000333 */ 			return __call__ (__accu0__.append, __accu0__, node);
/* 000333 */ 		}) ();
/* 000335 */ 		var exc = (function () {
/* 000335 */ 			var __accu0__ = self;
/* 000335 */ 			return __call__ (__accu0__._check_nodelist_stop_condition, __accu0__);
/* 000335 */ 		}) ();
/* 000336 */ 		if (__t__ (exc !== null)) {
/* 000337 */ 			return exc;
/* 000337 */ 		}
/* 000338 */ 		return null;
/* 000338 */ 	});},
/* 000341 */ 	get update_state_from_parsing_state_delta () {return __get__ (this, function (self, parsing_state_delta) {
/* 000341 */ 		if (arguments.length) {
/* 000341 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000341 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000341 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000341 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000341 */ 					switch (__attrib0__) {
/* 000341 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000341 */ 						case 'parsing_state_delta': var parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000341 */ 					}
/* 000341 */ 				}
/* 000341 */ 			}
/* 000341 */ 		}
/* 000341 */ 		else {
/* 000341 */ 		}
/* 000350 */ 		if (__t__ (parsing_state_delta !== null)) {
/* 000351 */ 			var ps = self.parsing_state;
/* 000353 */ 			self.parsing_state = (function () {
/* 000353 */ 				var __accu0__ = parsing_state_delta;
/* 000353 */ 				return __call__ (__accu0__.get_updated_parsing_state, __accu0__, self.parsing_state, self.latex_walker);
/* 000353 */ 			}) ();
/* 000358 */ 			(function () {
/* 000358 */ 				var __accu0__ = logger;
/* 000358 */ 				return __call__ (__accu0__.debug, __accu0__, 'Updated parsing state using parsing_state_delta %r: %r →→→ %r', parsing_state_delta, ps, self.parsing_state);
/* 000358 */ 			}) ();
/* 000358 */ 		}
/* 000358 */ 	});},
/* 000366 */ 	get _check_nodelist_stop_condition () {return __get__ (this, function (self) {
/* 000366 */ 		if (arguments.length) {
/* 000366 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000366 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000366 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000366 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000366 */ 					switch (__attrib0__) {
/* 000366 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000366 */ 					}
/* 000366 */ 				}
/* 000366 */ 			}
/* 000366 */ 		}
/* 000366 */ 		else {
/* 000366 */ 		}
/* 000367 */ 		var stop_nodelist_condition = self.stop_nodelist_condition;
/* 000368 */ 		if (__t__ (stop_nodelist_condition !== null)) {
/* 000369 */ 			var stop_data = __call__ (stop_nodelist_condition, null, self._nodelist);
/* 000370 */ 			if (__t__ (stop_data)) {
/* 000371 */ 				self._stop_nodelist_condition_met = true;
/* 000372 */ 				(function () {
/* 000372 */ 					var __accu0__ = logger;
/* 000372 */ 					return __call__ (__accu0__.debug, __accu0__, 'nodes collector reached nodelist stop condition; nodelist = %r', self._nodelist);
/* 000372 */ 				}) ();
/* 000374 */ 				return (function () {
/* 000374 */ 					var __accu0__ = LatexNodesCollector;
/* 000374 */ 					return __call__ (__accu0__.ReachedStoppingCondition, __accu0__, __kwargtrans__ ({stop_data: stop_data}));
/* 000374 */ 				}) ();
/* 000374 */ 			}
/* 000374 */ 		}
/* 000375 */ 		return null;
/* 000375 */ 	});},
/* 000377 */ 	get _check_token_stop_condition () {return __get__ (this, function (self, tok) {
/* 000377 */ 		if (arguments.length) {
/* 000377 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000377 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000377 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000377 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000377 */ 					switch (__attrib0__) {
/* 000377 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000377 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000377 */ 					}
/* 000377 */ 				}
/* 000377 */ 			}
/* 000377 */ 		}
/* 000377 */ 		else {
/* 000377 */ 		}
/* 000378 */ 		var stop_token_condition = self.stop_token_condition;
/* 000379 */ 		if (__t__ (stop_token_condition !== null)) {
/* 000380 */ 			var stop_data = __call__ (stop_token_condition, null, tok);
/* 000381 */ 			if (__t__ (stop_data)) {
/* 000382 */ 				self._stop_token_condition_met = true;
/* 000383 */ 				self._stop_token_condition_met_token = tok;
/* 000384 */ 				(function () {
/* 000384 */ 					var __accu0__ = logger;
/* 000384 */ 					return __call__ (__accu0__.debug, __accu0__, 'nodes collector reached token stop condition; tok = %r, current node list = %r', tok, self._nodelist);
/* 000384 */ 				}) ();
/* 000387 */ 				return (function () {
/* 000387 */ 					var __accu0__ = LatexNodesCollector;
/* 000387 */ 					return __call__ (__accu0__.ReachedStoppingCondition, __accu0__, __kwargtrans__ ({stop_data: stop_data}));
/* 000387 */ 				}) ();
/* 000387 */ 			}
/* 000387 */ 		}
/* 000388 */ 		return null;
/* 000388 */ 	});},
/* 000391 */ 	get process_tokens () {return __get__ (this, function (self) {
/* 000391 */ 		if (arguments.length) {
/* 000391 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000391 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000391 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000391 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000391 */ 					switch (__attrib0__) {
/* 000391 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000391 */ 					}
/* 000391 */ 				}
/* 000391 */ 			}
/* 000391 */ 		}
/* 000391 */ 		else {
/* 000391 */ 		}
/* 000412 */ 		try {
/* 000413 */ 			while (__t__ (true)) {
/* 000414 */ 				(function () {
/* 000414 */ 					var __accu0__ = self;
/* 000414 */ 					return __call__ (__accu0__.process_one_token, __accu0__);
/* 000414 */ 				}) ();
/* 000414 */ 			}
/* 000414 */ 		}
/* 000414 */ 		catch (__except0__) {
/* 000414 */ 			if (isinstance (__except0__, LatexNodesCollector.ReachedStoppingCondition)) {
/* 000414 */ 				var e = __except0__;
/* 000418 */ 				self._stop_condition_stop_data = e.stop_data;
/* 000419 */ 				(function () {
/* 000419 */ 					var __accu0__ = logger;
/* 000419 */ 					return __call__ (__accu0__.debug, __accu0__, 'nodes collector process_tokens() reached stop condition');
/* 000419 */ 				}) ();
/* 000420 */ 				return ;
/* 000420 */ 			}
/* 000420 */ 			else if (isinstance (__except0__, LatexNodesCollector.ReachedEndOfStream)) {
/* 000420 */ 				var e = __except0__;
/* 000425 */ 				self._reached_end_of_stream = true;
/* 000426 */ 				(function () {
/* 000426 */ 					var __accu0__ = logger;
/* 000426 */ 					return __call__ (__accu0__.debug, __accu0__, 'nodes collector process_tokens() reached end of stream');
/* 000426 */ 				}) ();
/* 000427 */ 				return ;
/* 000427 */ 			}
/* 000427 */ 			else if (isinstance (__except0__, LatexWalkerError)) {
/* 000427 */ 				var e = __except0__;
/* 000431 */ 				(function () {
/* 000431 */ 					var __accu0__ = logger;
/* 000431 */ 					return __call__ (__accu0__.debug, __accu0__, 'process_tokens() - relaying error -- %r', e);
/* 000431 */ 				}) ();
/* 000432 */ 				__except0__.__cause__ = null;
/* 000432 */ 				throw __except0__;
/* 000432 */ 			}
/* 000432 */ 			else {
/* 000432 */ 				throw __except0__;
/* 000432 */ 			}
/* 000432 */ 		}
/* 000432 */ 		finally {
/* 000435 */ 			(function () {
/* 000435 */ 				var __accu0__ = self;
/* 000435 */ 				return __call__ (__accu0__.finalize, __accu0__);
/* 000435 */ 			}) ();
/* 000435 */ 		}
/* 000435 */ 	});},
/* 000440 */ 	get process_one_token () {return __get__ (this, function (self) {
/* 000440 */ 		if (arguments.length) {
/* 000440 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000440 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000440 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000440 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000440 */ 					switch (__attrib0__) {
/* 000440 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000440 */ 					}
/* 000440 */ 				}
/* 000440 */ 			}
/* 000440 */ 		}
/* 000440 */ 		else {
/* 000440 */ 		}
/* 000479 */ 		if (__t__ (self._finalized)) {
/* 000480 */ 			var __except0__ = __call__ (RuntimeError, null, 'You already called finalize()');
/* 000480 */ 			__except0__.__cause__ = null;
/* 000480 */ 			throw __except0__;
/* 000480 */ 		}
/* 000482 */ 		var latex_walker = self.latex_walker;
/* 000483 */ 		var token_reader = self.token_reader;
/* 000485 */ 		try {
/* 000487 */ 			var tok = (function () {
/* 000487 */ 				var __accu0__ = token_reader;
/* 000487 */ 				return __call__ (__accu0__.next_token, __accu0__, __kwargtrans__ ({parsing_state: self.parsing_state}));
/* 000487 */ 			}) ();
/* 000488 */ 			(function () {
/* 000488 */ 				var __accu0__ = logger;
/* 000488 */ 				return __call__ (__accu0__.debug, __accu0__, 'nodes collector read token %r', tok);
/* 000488 */ 			}) ();
/* 000488 */ 		}
/* 000488 */ 		catch (__except0__) {
/* 000488 */ 			if (isinstance (__except0__, LatexWalkerEndOfStream)) {
/* 000488 */ 				var e = __except0__;
/* 000491 */ 				var final_space = __call__ (getattr, null, e, 'final_space', null);
/* 000492 */ 				if (__t__ (final_space)) {
/* 000494 */ 					var final_space_pos = __add__ ((function () {
/* 000494 */ 						var __accu0__ = token_reader;
/* 000494 */ 						return __call__ (__accu0__.cur_pos, __accu0__);
/* 000494 */ 					}) (), __call__ (len, null, final_space));
/* 000495 */ 					var tok = (function () {
/* 000495 */ 						var __accu0__ = token_reader;
/* 000495 */ 						return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: 'char', arg: '', pre_space: final_space, pos: final_space_pos, pos_end: final_space_pos}));
/* 000495 */ 					}) ();
/* 000502 */ 					(function () {
/* 000502 */ 						var __accu0__ = token_reader;
/* 000502 */ 						return __call__ (__accu0__.move_past_token, __accu0__, tok);
/* 000502 */ 					}) ();
/* 000502 */ 				}
/* 000503 */ 				else {
/* 000505 */ 					var exc = (function () {
/* 000505 */ 						var __accu0__ = LatexNodesCollector;
/* 000505 */ 						return __call__ (__accu0__.ReachedEndOfStream, __accu0__);
/* 000505 */ 					}) ();
/* 000506 */ 					exc.pos_end = (function () {
/* 000506 */ 						var __accu0__ = token_reader;
/* 000506 */ 						return __call__ (__accu0__.cur_pos, __accu0__);
/* 000506 */ 					}) ();
/* 000507 */ 					(function () {
/* 000507 */ 						var __accu0__ = logger;
/* 000507 */ 						return __call__ (__accu0__.debug, __accu0__, 'process_one_token(): reached end of stream, exc=%r', exc);
/* 000507 */ 					}) ();
/* 000508 */ 					var __except1__ = exc;
/* 000508 */ 					__except1__.__cause__ = null;
/* 000508 */ 					throw __except1__;
/* 000508 */ 				}
/* 000508 */ 			}
/* 000508 */ 			else {
/* 000508 */ 				throw __except0__;
/* 000508 */ 			}
/* 000508 */ 		}
/* 000513 */ 		var stop_exc = (function () {
/* 000513 */ 			var __accu0__ = self;
/* 000513 */ 			return __call__ (__accu0__._check_token_stop_condition, __accu0__, tok);
/* 000513 */ 		}) ();
/* 000514 */ 		if (__t__ (stop_exc !== null)) {
/* 000515 */ 			if (__t__ (self.include_stop_token_pre_space_chars)) {
/* 000518 */ 				(function () {
/* 000518 */ 					var __accu0__ = self;
/* 000520 */ 					return __call__ (__accu0__.push_pending_chars, __accu0__, __kwargtrans__ ({chars: tok.pre_space, pos: __sub__ (tok.pos, __call__ (len, null, tok.pre_space))}));
/* 000520 */ 				}) ();
/* 000522 */ 				var rewind_pre_space = false;
/* 000522 */ 			}
/* 000523 */ 			else {
/* 000524 */ 				var rewind_pre_space = true;
/* 000524 */ 			}
/* 000527 */ 			(function () {
/* 000527 */ 				var __accu0__ = token_reader;
/* 000527 */ 				return __call__ (__accu0__.move_to_token, __accu0__, tok, __kwargtrans__ ({rewind_pre_space: rewind_pre_space}));
/* 000527 */ 			}) ();
/* 000528 */ 			stop_exc.pos_end = tok.pos_end;
/* 000529 */ 			(function () {
/* 000529 */ 				var __accu0__ = logger;
/* 000529 */ 				return __call__ (__accu0__.debug, __accu0__, 'process_one_token(): stop token condition reached, exc=%r', stop_exc);
/* 000529 */ 			}) ();
/* 000530 */ 			var __except0__ = stop_exc;
/* 000530 */ 			__except0__.__cause__ = null;
/* 000530 */ 			throw __except0__;
/* 000530 */ 		}
/* 000534 */ 		if (__t__ (__eq__ (tok.tok, 'char'))) {
/* 000535 */ 			(function () {
/* 000535 */ 				var __accu0__ = self;
/* 000537 */ 				return __call__ (__accu0__.push_pending_chars, __accu0__, __kwargtrans__ ({chars: __add__ (tok.pre_space, tok.arg), pos: __sub__ (tok.pos, __call__ (len, null, tok.pre_space))}));
/* 000537 */ 			}) ();
/* 000539 */ 			return ;
/* 000539 */ 		}
/* 000543 */ 		if (__t__ (self._pending_chars)) {
/* 000544 */ 			self._pending_chars = __call__ (__iadd__, null, self._pending_chars, tok.pre_space);
/* 000545 */ 			tok.pre_space = '';
/* 000546 */ 			var stop_exc = (function () {
/* 000546 */ 				var __accu0__ = self;
/* 000546 */ 				return __call__ (__accu0__.flush_pending_chars, __accu0__);
/* 000546 */ 			}) ();
/* 000547 */ 			if (__t__ (stop_exc !== null)) {
/* 000551 */ 				(function () {
/* 000551 */ 					var __accu0__ = token_reader;
/* 000551 */ 					return __call__ (__accu0__.move_to_token, __accu0__, tok, __kwargtrans__ ({rewind_pre_space: false}));
/* 000551 */ 				}) ();
/* 000552 */ 				stop_exc.pos_end = tok.pos;
/* 000553 */ 				(function () {
/* 000553 */ 					var __accu0__ = logger;
/* 000553 */ 					return __call__ (__accu0__.debug, __accu0__, 'process_one_token(): stop condition reached (a), exc=%r', stop_exc);
/* 000553 */ 				}) ();
/* 000555 */ 				var __except0__ = stop_exc;
/* 000555 */ 				__except0__.__cause__ = null;
/* 000555 */ 				throw __except0__;
/* 000555 */ 			}
/* 000555 */ 		}
/* 000562 */ 		else if (__t__ (tok.pre_space)) {
/* 000563 */ 			var spacestrnode = (function () {
/* 000563 */ 				var __accu0__ = latex_walker;
/* 000566 */ 				return __call__ (__accu0__.make_node, __accu0__, LatexCharsNode, __kwargtrans__ ({parsing_state: self.parsing_state, chars: tok.pre_space, pos: __sub__ (tok.pos, __call__ (len, null, tok.pre_space)), pos_end: tok.pos}));
/* 000566 */ 			}) ();
/* 000568 */ 			tok.pre_space = '';
/* 000569 */ 			var stop_exc = (function () {
/* 000569 */ 				var __accu0__ = self;
/* 000569 */ 				return __call__ (__accu0__.push_to_nodelist, __accu0__, spacestrnode);
/* 000569 */ 			}) ();
/* 000570 */ 			if (__t__ (stop_exc !== null)) {
/* 000574 */ 				(function () {
/* 000574 */ 					var __accu0__ = token_reader;
/* 000574 */ 					return __call__ (__accu0__.move_to_token, __accu0__, tok, __kwargtrans__ ({rewind_pre_space: false}));
/* 000574 */ 				}) ();
/* 000575 */ 				stop_exc.pos_end = tok.pos;
/* 000576 */ 				(function () {
/* 000576 */ 					var __accu0__ = logger;
/* 000576 */ 					return __call__ (__accu0__.debug, __accu0__, 'process_one_token(): stop condition reached (b), exc=%r', stop_exc);
/* 000576 */ 				}) ();
/* 000578 */ 				var __except0__ = stop_exc;
/* 000578 */ 				__except0__.__cause__ = null;
/* 000578 */ 				throw __except0__;
/* 000578 */ 			}
/* 000578 */ 		}
/* 000585 */ 		if (__t__ (__eq__ (tok.tok, 'brace_close'))) {
/* 000587 */ 			var __except0__ = __call__ (LatexWalkerNodesParseError, null, __kwargtrans__ ({msg: (function () {
/* 000587 */ 				var __accu0__ = 'Unexpected mismatching closing delimiter ‘{}’';
/* 000587 */ 				return __call__ (__accu0__.format, __accu0__, tok.arg);
/* 000587 */ 			}) (), pos: tok.pos, recovery_past_token: tok, error_type_info: dict ({'what': 'nodes_unexpected_closing_group_delimiter', 'delimiter': tok.arg})}));
/* 000587 */ 			__except0__.__cause__ = null;
/* 000587 */ 			throw __except0__;
/* 000587 */ 		}
/* 000596 */ 		if (__t__ (__eq__ (tok.tok, 'end_environment'))) {
/* 000598 */ 			var __except0__ = __call__ (LatexWalkerNodesParseError, null, __kwargtrans__ ({msg: (function () {
/* 000598 */ 				var __accu0__ = 'Unexpected closing environment: ‘{}’';
/* 000598 */ 				return __call__ (__accu0__.format, __accu0__, tok.arg);
/* 000598 */ 			}) (), pos: tok.pos, recovery_past_token: tok, error_type_info: dict ({'what': 'nodes_unexpected_end_environment', 'environmentname': tok.arg})}));
/* 000598 */ 			__except0__.__cause__ = null;
/* 000598 */ 			throw __except0__;
/* 000598 */ 		}
/* 000607 */ 		if (__t__ (__t__ (__in__ (tok.tok, tuple (['mathmode_inline', 'mathmode_display']))) && !__in__ (tok.arg, self.parsing_state._math_delims_info_by_open))) {
/* 000611 */ 			var __except0__ = __call__ (LatexWalkerNodesParseError, null, __kwargtrans__ ({msg: (function () {
/* 000611 */ 				var __accu0__ = 'Unexpected closing math mode token ‘{}’';
/* 000611 */ 				return __call__ (__accu0__.format, __accu0__, tok.arg);
/* 000611 */ 			}) (), pos: tok.pos, recovery_past_token: tok, error_type_info: dict ({'what': 'nodes_unexpected_closing_math_delimiter', 'mathmode_type': tok.tok, 'delimiter': tok.arg})}));
/* 000611 */ 			__except0__.__cause__ = null;
/* 000611 */ 			throw __except0__;
/* 000611 */ 		}
/* 000625 */ 		if (__t__ (__eq__ (tok.tok, 'comment'))) {
/* 000626 */ 			(function () {
/* 000626 */ 				var __accu0__ = self;
/* 000626 */ 				return __call__ (__accu0__.parse_comment_node, __accu0__, tok);
/* 000626 */ 			}) ();
/* 000627 */ 			return ;
/* 000627 */ 		}
/* 000629 */ 		else if (__t__ (__eq__ (tok.tok, 'brace_open'))) {
/* 000631 */ 			(function () {
/* 000631 */ 				var __accu0__ = self;
/* 000631 */ 				return __call__ (__accu0__.parse_latex_group, __accu0__, tok);
/* 000631 */ 			}) ();
/* 000632 */ 			return ;
/* 000632 */ 		}
/* 000634 */ 		else if (__t__ (__eq__ (tok.tok, 'macro'))) {
/* 000636 */ 			(function () {
/* 000636 */ 				var __accu0__ = self;
/* 000636 */ 				return __call__ (__accu0__.parse_macro, __accu0__, tok);
/* 000636 */ 			}) ();
/* 000637 */ 			return ;
/* 000637 */ 		}
/* 000639 */ 		else if (__t__ (__eq__ (tok.tok, 'begin_environment'))) {
/* 000641 */ 			(function () {
/* 000641 */ 				var __accu0__ = self;
/* 000641 */ 				return __call__ (__accu0__.parse_environment, __accu0__, tok);
/* 000641 */ 			}) ();
/* 000642 */ 			return ;
/* 000642 */ 		}
/* 000644 */ 		else if (__t__ (__eq__ (tok.tok, 'specials'))) {
/* 000646 */ 			(function () {
/* 000646 */ 				var __accu0__ = self;
/* 000646 */ 				return __call__ (__accu0__.parse_specials, __accu0__, tok);
/* 000646 */ 			}) ();
/* 000647 */ 			return ;
/* 000647 */ 		}
/* 000649 */ 		else if (__t__ (__in__ (tok.tok, tuple (['mathmode_inline', 'mathmode_display'])))) {
/* 000651 */ 			(function () {
/* 000651 */ 				var __accu0__ = self;
/* 000651 */ 				return __call__ (__accu0__.parse_math, __accu0__, tok);
/* 000651 */ 			}) ();
/* 000652 */ 			return ;
/* 000652 */ 		}
/* 000653 */ 		else {
/* 000657 */ 			var __except0__ = __call__ (LatexWalkerParseError, null, (function () {
/* 000657 */ 				var __accu0__ = 'Unknown token type: {}';
/* 000657 */ 				return __call__ (__accu0__.format, __accu0__, tok.tok);
/* 000657 */ 			}) (), __kwargtrans__ ({pos: tok.pos}));
/* 000657 */ 			__except0__.__cause__ = null;
/* 000657 */ 			throw __except0__;
/* 000657 */ 		}
/* 000657 */ 	});},
/* 000669 */ 	get make_child_parsing_state () {return __get__ (this, function (self, parsing_state, node_class) {
/* 000669 */ 		if (arguments.length) {
/* 000669 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000669 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000669 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000669 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000669 */ 					switch (__attrib0__) {
/* 000669 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000669 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000669 */ 						case 'node_class': var node_class = __allkwargs0__ [__attrib0__]; break;
/* 000669 */ 					}
/* 000669 */ 				}
/* 000669 */ 			}
/* 000669 */ 		}
/* 000669 */ 		else {
/* 000669 */ 		}
/* 000676 */ 		if (__t__ (self._make_child_parsing_state_fn !== null)) {
/* 000677 */ 			return (function () {
/* 000677 */ 				var __accu0__ = self;
/* 000677 */ 				return __call__ (__accu0__._make_child_parsing_state_fn, __accu0__, __kwargtrans__ ({parsing_state: parsing_state, node_class: node_class}));
/* 000677 */ 			}) ();
/* 000677 */ 		}
/* 000679 */ 		return self.parsing_state;
/* 000679 */ 	});},
/* 000682 */ 	get parse_comment_node () {return __get__ (this, function (self, tok) {
/* 000682 */ 		if (arguments.length) {
/* 000682 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000682 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000682 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000682 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000682 */ 					switch (__attrib0__) {
/* 000682 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000682 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000682 */ 					}
/* 000682 */ 				}
/* 000682 */ 			}
/* 000682 */ 		}
/* 000682 */ 		else {
/* 000682 */ 		}
/* 000696 */ 		var commentnode = (function () {
/* 000696 */ 			var __accu0__ = self.latex_walker;
/* 000696 */ 			return __call__ (__accu0__.make_node, __accu0__, LatexCommentNode, __kwargtrans__ ({parsing_state: self.parsing_state, comment: tok.arg, comment_post_space: tok.post_space, pos: tok.pos, pos_end: tok.pos_end}));
/* 000696 */ 		}) ();
/* 000705 */ 		var stop_exc = (function () {
/* 000705 */ 			var __accu0__ = self;
/* 000705 */ 			return __call__ (__accu0__.push_to_nodelist, __accu0__, commentnode);
/* 000705 */ 		}) ();
/* 000706 */ 		if (__t__ (stop_exc !== null)) {
/* 000707 */ 			stop_exc.pos_end = tok.pos_end;
/* 000708 */ 			(function () {
/* 000708 */ 				var __accu0__ = logger;
/* 000708 */ 				return __call__ (__accu0__.debug, __accu0__, 'parse_comment_node(): stop_exc=%r', stop_exc);
/* 000708 */ 			}) ();
/* 000709 */ 			var __except0__ = stop_exc;
/* 000709 */ 			__except0__.__cause__ = null;
/* 000709 */ 			throw __except0__;
/* 000709 */ 		}
/* 000709 */ 	});},
/* 000712 */ 	get parse_latex_group () {return __get__ (this, function (self, tok) {
/* 000712 */ 		if (arguments.length) {
/* 000712 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000712 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000712 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000712 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000712 */ 					switch (__attrib0__) {
/* 000712 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000712 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000712 */ 					}
/* 000712 */ 				}
/* 000712 */ 			}
/* 000712 */ 		}
/* 000712 */ 		else {
/* 000712 */ 		}
/* 000728 */ 		(function () {
/* 000728 */ 			var __accu0__ = logger;
/* 000728 */ 			return __call__ (__accu0__.debug, __accu0__, 'nodes collector is now parsing a latex group, %r', tok);
/* 000728 */ 		}) ();
/* 000730 */ 		(function () {
/* 000730 */ 			var __accu0__ = self.token_reader;
/* 000730 */ 			return __call__ (__accu0__.move_to_token, __accu0__, tok, __kwargtrans__ ({rewind_pre_space: false}));
/* 000730 */ 		}) ();
/* 000732 */ 		var group_parser = (function () {
/* 000732 */ 			var __accu0__ = self.latex_walker;
/* 000732 */ 			return __call__ (__accu0__.make_latex_group_parser, __accu0__, __kwargtrans__ ({delimiters: tok.arg}));
/* 000732 */ 		}) ();
/* 000737 */ 		var __left0__ = (function () {
/* 000737 */ 			var __accu0__ = self.latex_walker;
/* 000740 */ 			return __call__ (__accu0__.parse_content, __accu0__, group_parser, __kwargtrans__ ({token_reader: self.token_reader, parsing_state: (function () {
/* 000740 */ 				var __accu1__ = self;
/* 000740 */ 				return __call__ (__accu1__.make_child_parsing_state, __accu1__, self.parsing_state, LatexGroupNode);
/* 000740 */ 			}) ()}));
/* 000740 */ 		}) ();
/* 000740 */ 		var groupnode = __left0__ [0];
/* 000740 */ 		var parsing_state_delta = __left0__ [1];
/* 000744 */ 		if (__t__ (parsing_state_delta !== null)) {
/* 000745 */ 			(function () {
/* 000745 */ 				var __accu0__ = logger;
/* 000745 */ 				return __call__ (__accu0__.warning, __accu0__, 'parsing_state_delta is ignored after parsing a LaTeX group: %r', parsing_state_delta);
/* 000745 */ 			}) ();
/* 000745 */ 		}
/* 000748 */ 		var stop_exc = (function () {
/* 000748 */ 			var __accu0__ = self;
/* 000748 */ 			return __call__ (__accu0__.push_to_nodelist, __accu0__, groupnode);
/* 000748 */ 		}) ();
/* 000749 */ 		if (__t__ (stop_exc !== null)) {
/* 000750 */ 			stop_exc.pos_end = groupnode.pos_end;
/* 000751 */ 			(function () {
/* 000751 */ 				var __accu0__ = logger;
/* 000751 */ 				return __call__ (__accu0__.debug, __accu0__, 'parse_latex_group(): stop_exc=%r', stop_exc);
/* 000751 */ 			}) ();
/* 000752 */ 			var __except0__ = stop_exc;
/* 000752 */ 			__except0__.__cause__ = null;
/* 000752 */ 			throw __except0__;
/* 000752 */ 		}
/* 000754 */ 		(function () {
/* 000754 */ 			var __accu0__ = logger;
/* 000754 */ 			return __call__ (__accu0__.debug, __accu0__, 'nodes collector finished parsing group → %r', groupnode);
/* 000754 */ 		}) ();
/* 000754 */ 	});},
/* 000757 */ 	get parse_macro () {return __get__ (this, function (self, tok) {
/* 000757 */ 		if (arguments.length) {
/* 000757 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000757 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000757 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000757 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000757 */ 					switch (__attrib0__) {
/* 000757 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000757 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000757 */ 					}
/* 000757 */ 				}
/* 000757 */ 			}
/* 000757 */ 		}
/* 000757 */ 		else {
/* 000757 */ 		}
/* 000772 */ 		var macroname = tok.arg;
/* 000774 */ 		var mspec = null;
/* 000775 */ 		if (__t__ (self.parsing_state.latex_context !== null)) {
/* 000776 */ 			var mspec = (function () {
/* 000776 */ 				var __accu0__ = self.parsing_state.latex_context;
/* 000776 */ 				return __call__ (__accu0__.get_macro_spec, __accu0__, macroname);
/* 000776 */ 			}) ();
/* 000776 */ 		}
/* 000778 */ 		if (__t__ (mspec === null)) {
/* 000779 */ 			var exc = (function () {
/* 000779 */ 				var __accu0__ = self.latex_walker;
/* 000781 */ 				return __call__ (__accu0__.check_tolerant_parsing_ignore_error, __accu0__, __call__ (LatexWalkerParseError, null, __kwargtrans__ ({msg: (function () {
/* 000781 */ 					var __accu1__ = 'Encountered unknown macro ‘\\{}’';
/* 000781 */ 					return __call__ (__accu1__.format, __accu1__, macroname);
/* 000781 */ 				}) (), pos: tok.pos, error_type_info: dict ({'what': 'nodes_unknown_macro_name', 'macroname': macroname})})));
/* 000781 */ 			}) ();
/* 000789 */ 			if (__t__ (exc !== null)) {
/* 000790 */ 				var __except0__ = exc;
/* 000790 */ 				__except0__.__cause__ = null;
/* 000790 */ 				throw __except0__;
/* 000790 */ 			}
/* 000791 */ 			var mspec = null;
/* 000791 */ 		}
/* 000793 */ 		var node_class = LatexMacroNode;
/* 000794 */ 		var what = (function () {
/* 000794 */ 			var __accu0__ = 'macro ‘\\{}’';
/* 000794 */ 			return __call__ (__accu0__.format, __accu0__, macroname);
/* 000794 */ 		}) ();
/* 000796 */ 		return (function () {
/* 000796 */ 			var __accu0__ = self;
/* 000796 */ 			return __call__ (__accu0__.parse_invocable_token_type, __accu0__, tok, mspec, node_class, what);
/* 000796 */ 		}) ();
/* 000796 */ 	});},
/* 000798 */ 	get parse_environment () {return __get__ (this, function (self, tok) {
/* 000798 */ 		if (arguments.length) {
/* 000798 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000798 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000798 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000798 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000798 */ 					switch (__attrib0__) {
/* 000798 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000798 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000798 */ 					}
/* 000798 */ 				}
/* 000798 */ 			}
/* 000798 */ 		}
/* 000798 */ 		else {
/* 000798 */ 		}
/* 000814 */ 		var latex_walker = self.latex_walker;
/* 000817 */ 		var environmentname = tok.arg;
/* 000821 */ 		var envspec = (function () {
/* 000821 */ 			var __accu0__ = self.parsing_state.latex_context;
/* 000821 */ 			return __call__ (__accu0__.get_environment_spec, __accu0__, environmentname);
/* 000821 */ 		}) ();
/* 000823 */ 		if (__t__ (envspec === null)) {
/* 000824 */ 			var exc = (function () {
/* 000824 */ 				var __accu0__ = latex_walker;
/* 000826 */ 				return __call__ (__accu0__.check_tolerant_parsing_ignore_error, __accu0__, __call__ (LatexWalkerParseError, null, __kwargtrans__ ({msg: (function () {
/* 000826 */ 					var __accu1__ = 'Encountered unknown environment ‘{}{}{}’';
/* 000826 */ 					return __call__ (__accu1__.format, __accu1__, '{', environmentname, '}');
/* 000826 */ 				}) (), pos: tok.pos, error_type_info: dict ({'what': 'nodes_unknown_environment_name', 'environmentname': environmentname})})));
/* 000826 */ 			}) ();
/* 000835 */ 			if (__t__ (exc !== null)) {
/* 000836 */ 				var __except0__ = exc;
/* 000836 */ 				__except0__.__cause__ = null;
/* 000836 */ 				throw __except0__;
/* 000836 */ 			}
/* 000837 */ 			var envspec = null;
/* 000837 */ 		}
/* 000839 */ 		var node_class = LatexEnvironmentNode;
/* 000840 */ 		var what = (function () {
/* 000840 */ 			var __accu0__ = 'environment ‘{}{}{}’';
/* 000840 */ 			return __call__ (__accu0__.format, __accu0__, '{', environmentname, '}');
/* 000840 */ 		}) ();
/* 000842 */ 		return (function () {
/* 000842 */ 			var __accu0__ = self;
/* 000842 */ 			return __call__ (__accu0__.parse_invocable_token_type, __accu0__, tok, envspec, node_class, what);
/* 000842 */ 		}) ();
/* 000842 */ 	});},
/* 000844 */ 	get parse_specials () {return __get__ (this, function (self, tok) {
/* 000844 */ 		if (arguments.length) {
/* 000844 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000844 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000844 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000844 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000844 */ 					switch (__attrib0__) {
/* 000844 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000844 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000844 */ 					}
/* 000844 */ 				}
/* 000844 */ 			}
/* 000844 */ 		}
/* 000844 */ 		else {
/* 000844 */ 		}
/* 000858 */ 		var specials_spec = tok.arg;
/* 000860 */ 		var node_class = LatexSpecialsNode;
/* 000861 */ 		var what = (function () {
/* 000861 */ 			var __accu0__ = 'specials ‘{}’';
/* 000861 */ 			return __call__ (__accu0__.format, __accu0__, __call__ (getattr, null, specials_spec, 'specials_chars', '<unkonwn>'));
/* 000861 */ 		}) ();
/* 000863 */ 		return (function () {
/* 000863 */ 			var __accu0__ = self;
/* 000863 */ 			return __call__ (__accu0__.parse_invocable_token_type, __accu0__, tok, specials_spec, node_class, what);
/* 000863 */ 		}) ();
/* 000863 */ 	});},
/* 000865 */ 	get parse_invocable_token_type () {return __get__ (this, function (self, tok, spec, node_class, what) {
/* 000865 */ 		if (arguments.length) {
/* 000865 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000865 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000865 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000865 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000865 */ 					switch (__attrib0__) {
/* 000865 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000865 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000865 */ 						case 'spec': var spec = __allkwargs0__ [__attrib0__]; break;
/* 000865 */ 						case 'node_class': var node_class = __allkwargs0__ [__attrib0__]; break;
/* 000865 */ 						case 'what': var what = __allkwargs0__ [__attrib0__]; break;
/* 000865 */ 					}
/* 000865 */ 				}
/* 000865 */ 			}
/* 000865 */ 		}
/* 000865 */ 		else {
/* 000865 */ 		}
/* 000885 */ 		var latex_walker = self.latex_walker;
/* 000886 */ 		var token_reader = self.token_reader;
/* 000888 */ 		if (__t__ (spec !== null)) {
/* 000889 */ 			var node_parser = (function () {
/* 000889 */ 				var __accu0__ = spec;
/* 000889 */ 				return __call__ (__accu0__.get_node_parser, __accu0__, tok);
/* 000889 */ 			}) ();
/* 000889 */ 		}
/* 000890 */ 		else {
/* 000891 */ 			var node_parser = null;
/* 000891 */ 		}
/* 000893 */ 		if (__t__ (node_parser === null)) {
/* 000895 */ 			var exc = (function () {
/* 000895 */ 				var __accu0__ = latex_walker;
/* 000897 */ 				return __call__ (__accu0__.check_tolerant_parsing_ignore_error, __accu0__, __call__ (LatexWalkerParseError, null, __kwargtrans__ ({msg: (function () {
/* 000897 */ 					var __accu1__ = 'No parser found for callable token {!r}';
/* 000897 */ 					return __call__ (__accu1__.format, __accu1__, tok);
/* 000897 */ 				}) (), pos: tok.pos})));
/* 000897 */ 			}) ();
/* 000901 */ 			if (__t__ (exc !== null)) {
/* 000902 */ 				(function () {
/* 000902 */ 					var __accu0__ = logger;
/* 000902 */ 					return __call__ (__accu0__.debug, __accu0__, 'parse_invocable_token_type(): no-parser error, exc=%r', exc);
/* 000902 */ 				}) ();
/* 000903 */ 				var __except0__ = exc;
/* 000903 */ 				__except0__.__cause__ = null;
/* 000903 */ 				throw __except0__;
/* 000903 */ 			}
/* 000904 */ 			var result_node = null;
/* 000905 */ 			var parsing_state_delta = null;
/* 000905 */ 		}
/* 000906 */ 		else {
/* 000909 */ 			var __left0__ = (function () {
/* 000909 */ 				var __accu0__ = latex_walker;
/* 000912 */ 				return __call__ (__accu0__.parse_content, __accu0__, node_parser, token_reader, (function () {
/* 000912 */ 					var __accu1__ = self;
/* 000912 */ 					return __call__ (__accu1__.make_child_parsing_state, __accu1__, self.parsing_state, node_class);
/* 000912 */ 				}) (), __kwargtrans__ ({open_context: tuple ([what, tok])}));
/* 000912 */ 			}) ();
/* 000912 */ 			var result_node = __left0__ [0];
/* 000912 */ 			var parsing_state_delta = __left0__ [1];
/* 000912 */ 		}
/* 000916 */ 		(function () {
/* 000916 */ 			var __accu0__ = self;
/* 000916 */ 			return __call__ (__accu0__.update_state_from_parsing_state_delta, __accu0__, parsing_state_delta);
/* 000916 */ 		}) ();
/* 000918 */ 		if (__t__ (result_node === null)) {
/* 000919 */ 			(function () {
/* 000919 */ 				var __accu0__ = logger;
/* 000919 */ 				return __call__ (__accu0__.warning, __accu0__, 'Parser %r produced no node (None) for token %r', node_parser, tok);
/* 000919 */ 			}) ();
/* 000920 */ 			return ;
/* 000920 */ 		}
/* 000922 */ 		var exc = (function () {
/* 000922 */ 			var __accu0__ = self;
/* 000922 */ 			return __call__ (__accu0__.push_to_nodelist, __accu0__, result_node);
/* 000922 */ 		}) ();
/* 000923 */ 		if (__t__ (exc !== null)) {
/* 000924 */ 			exc.pos_end = result_node.pos_end;
/* 000925 */ 			(function () {
/* 000925 */ 				var __accu0__ = logger;
/* 000925 */ 				return __call__ (__accu0__.debug, __accu0__, 'parse_invocable_token_type(): exc=%r', exc);
/* 000925 */ 			}) ();
/* 000926 */ 			var __except0__ = exc;
/* 000926 */ 			__except0__.__cause__ = null;
/* 000926 */ 			throw __except0__;
/* 000926 */ 		}
/* 000926 */ 	});},
/* 000929 */ 	get parse_math () {return __get__ (this, function (self, tok) {
/* 000929 */ 		if (arguments.length) {
/* 000929 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000929 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000929 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000929 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000929 */ 					switch (__attrib0__) {
/* 000929 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000929 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000929 */ 					}
/* 000929 */ 				}
/* 000929 */ 			}
/* 000929 */ 		}
/* 000929 */ 		else {
/* 000929 */ 		}
/* 000944 */ 		(function () {
/* 000944 */ 			var __accu0__ = logger;
/* 000944 */ 			return __call__ (__accu0__.debug, __accu0__, 'parse_math, tok=%r', tok);
/* 000944 */ 		}) ();
/* 000946 */ 		(function () {
/* 000946 */ 			var __accu0__ = self.token_reader;
/* 000946 */ 			return __call__ (__accu0__.move_to_token, __accu0__, tok, __kwargtrans__ ({rewind_pre_space: false}));
/* 000946 */ 		}) ();
/* 000950 */ 		var child_math_parsing_state = (function () {
/* 000950 */ 			var __accu0__ = self;
/* 000950 */ 			return __call__ (__accu0__.make_child_parsing_state, __accu0__, self.parsing_state, LatexMathNode);
/* 000950 */ 		}) ();
/* 000954 */ 		(function () {
/* 000954 */ 			var __accu0__ = logger;
/* 000954 */ 			return __call__ (__accu0__.debug, __accu0__, 'child_math_parsing_state = %r', child_math_parsing_state);
/* 000954 */ 		}) ();
/* 000956 */ 		var math_parser = (function () {
/* 000956 */ 			var __accu0__ = self.latex_walker;
/* 000956 */ 			return __call__ (__accu0__.make_latex_math_parser, __accu0__, __kwargtrans__ ({math_mode_delimiters: tok.arg}));
/* 000956 */ 		}) ();
/* 000962 */ 		var __left0__ = (function () {
/* 000962 */ 			var __accu0__ = self.latex_walker;
/* 000962 */ 			return __call__ (__accu0__.parse_content, __accu0__, math_parser, __kwargtrans__ ({token_reader: self.token_reader, parsing_state: child_math_parsing_state}));
/* 000962 */ 		}) ();
/* 000962 */ 		var mathnode = __left0__ [0];
/* 000962 */ 		var parsing_state_delta = __left0__ [1];
/* 000968 */ 		(function () {
/* 000968 */ 			var __accu0__ = self;
/* 000968 */ 			return __call__ (__accu0__.update_state_from_parsing_state_delta, __accu0__, parsing_state_delta);
/* 000968 */ 		}) ();
/* 000970 */ 		if (__t__ (mathnode === null)) {
/* 000971 */ 			(function () {
/* 000971 */ 				var __accu0__ = logger;
/* 000971 */ 				return __call__ (__accu0__.warning, __accu0__, 'Math parser produced no node (None) for token %r', tok);
/* 000971 */ 			}) ();
/* 000972 */ 			return ;
/* 000972 */ 		}
/* 000974 */ 		var stop_exc = (function () {
/* 000974 */ 			var __accu0__ = self;
/* 000974 */ 			return __call__ (__accu0__.push_to_nodelist, __accu0__, mathnode);
/* 000974 */ 		}) ();
/* 000975 */ 		if (__t__ (stop_exc !== null)) {
/* 000976 */ 			stop_exc.pos_end = mathnode.pos_end;
/* 000977 */ 			(function () {
/* 000977 */ 				var __accu0__ = logger;
/* 000977 */ 				return __call__ (__accu0__.debug, __accu0__, 'parse_math_node(): stop_exc=%r', stop_exc);
/* 000977 */ 			}) ();
/* 000978 */ 			var __except0__ = stop_exc;
/* 000978 */ 			__except0__.__cause__ = null;
/* 000978 */ 			throw __except0__;
/* 000978 */ 		}
/* 000978 */ 	});}
/* 000978 */ });
/* 000037 */ 
//# sourceMappingURL=pylatexenc.latexnodes._nodescollector.map