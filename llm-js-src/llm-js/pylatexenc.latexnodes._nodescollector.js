/* 000001 */ // Transcrypt'ed from Python, 2022-08-23 17:26:47
/* 000037 */ var logging = {};
/* 000037 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000044 */ import {ParsingStateDeltaEnterMathMode, ParsingStateDeltaReplaceParsingState, get_updated_parsing_state_from_delta} from './pylatexenc.latexnodes._parsingstatedelta.js';
/* 000041 */ import {LatexCharsNode, LatexCommentNode, LatexEnvironmentNode, LatexGroupNode, LatexMacroNode, LatexMathNode, LatexNode, LatexNodeList, LatexNodesVisitor, LatexSpecialsNode, LatexWalkerParseError, ParsedArguments, __all__, _get_content_as_chars, _unicode_from_str, _update_posposend_from_nodelist} from './pylatexenc.latexnodes.nodes.js';
/* 000040 */ import {LatexWalkerEndOfStream, LatexWalkerError, LatexWalkerNodesParseError, LatexWalkerParseErrorFormatter, LatexWalkerTokenParseError, _basestring, format_pos} from './pylatexenc.latexnodes._exctypes.js';
/* 000037 */ import * as __module_logging__ from './logging.js';
/* 000037 */ __nest__ (logging, '', __module_logging__);
/* 000037 */ export {ParsingStateDeltaEnterMathMode, _get_content_as_chars, LatexNodeList, _update_posposend_from_nodelist, LatexNodesVisitor, LatexWalkerError, LatexNode, LatexSpecialsNode, _basestring, LatexWalkerEndOfStream, LatexCommentNode, LatexEnvironmentNode, LatexGroupNode, __all__, _unicode_from_str, LatexMathNode, LatexWalkerParseErrorFormatter, format_pos, LatexWalkerNodesParseError, ParsingStateDeltaReplaceParsingState, LatexWalkerParseError, LatexWalkerTokenParseError, ParsedArguments, LatexCharsNode, LatexMacroNode, get_updated_parsing_state_from_delta};
/* 000001 */ var __name__ = 'pylatexenc.latexnodes._nodescollector';
/* 000038 */ export var logger = (function () {
/* 000038 */ 	var __accu0__ = logging;
/* 000038 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000038 */ }) ();
/* 000051 */ export var LatexNodesCollector =  __class__ ('LatexNodesCollector', [object], {
/* 000070 */ 	__module__: __name__,
/* 000070 */ 	ReachedEndOfStream: __class__ ('ReachedEndOfStream', [Exception], {
/* 000070 */ 		__module__: __name__,
/* 000083 */ 	}),
/* 000083 */ 	ReachedStoppingCondition: __class__ ('ReachedStoppingCondition', [Exception], {
/* 000083 */ 		__module__: __name__,
/* 000093 */ 		get __init__ () {return __get__ (this, function (self, stop_data) {
/* 000093 */ 			var kwargs = dict ();
/* 000093 */ 			if (arguments.length) {
/* 000093 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000093 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000093 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000093 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000093 */ 						switch (__attrib0__) {
/* 000093 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000093 */ 							case 'stop_data': var stop_data = __allkwargs0__ [__attrib0__]; break;
/* 000093 */ 							default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000093 */ 						}
/* 000093 */ 					}
/* 000093 */ 					delete kwargs.__kwargtrans__;
/* 000093 */ 				}
/* 000093 */ 			}
/* 000093 */ 			else {
/* 000093 */ 			}
/* 000094 */ 			__call__ (__call__ (__super__, null, LatexNodesCollector.ReachedStoppingCondition, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000095 */ 			self.stop_data = stop_data;
/* 000095 */ 		});}
/* 000095 */ 	}),
/* 000098 */ 	get __init__ () {return __get__ (this, function (self, latex_walker, token_reader, parsing_state, stop_token_condition, stop_nodelist_condition, make_child_parsing_state, include_stop_token_pre_space_chars) {
/* 000098 */ 		if (typeof stop_token_condition == 'undefined' || (stop_token_condition != null && stop_token_condition.hasOwnProperty ("__kwargtrans__"))) {;
/* 000098 */ 			var stop_token_condition = null;
/* 000098 */ 		};
/* 000098 */ 		if (typeof stop_nodelist_condition == 'undefined' || (stop_nodelist_condition != null && stop_nodelist_condition.hasOwnProperty ("__kwargtrans__"))) {;
/* 000098 */ 			var stop_nodelist_condition = null;
/* 000098 */ 		};
/* 000098 */ 		if (typeof make_child_parsing_state == 'undefined' || (make_child_parsing_state != null && make_child_parsing_state.hasOwnProperty ("__kwargtrans__"))) {;
/* 000098 */ 			var make_child_parsing_state = null;
/* 000098 */ 		};
/* 000098 */ 		if (typeof include_stop_token_pre_space_chars == 'undefined' || (include_stop_token_pre_space_chars != null && include_stop_token_pre_space_chars.hasOwnProperty ("__kwargtrans__"))) {;
/* 000098 */ 			var include_stop_token_pre_space_chars = true;
/* 000098 */ 		};
/* 000098 */ 		if (arguments.length) {
/* 000098 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000098 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000098 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000098 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000098 */ 					switch (__attrib0__) {
/* 000098 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000098 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000098 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000098 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000098 */ 						case 'stop_token_condition': var stop_token_condition = __allkwargs0__ [__attrib0__]; break;
/* 000098 */ 						case 'stop_nodelist_condition': var stop_nodelist_condition = __allkwargs0__ [__attrib0__]; break;
/* 000098 */ 						case 'make_child_parsing_state': var make_child_parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000098 */ 						case 'include_stop_token_pre_space_chars': var include_stop_token_pre_space_chars = __allkwargs0__ [__attrib0__]; break;
/* 000098 */ 					}
/* 000098 */ 				}
/* 000098 */ 			}
/* 000098 */ 		}
/* 000098 */ 		else {
/* 000098 */ 		}
/* 000108 */ 		__call__ (__call__ (__super__, null, LatexNodesCollector, '__init__'), null, self);
/* 000110 */ 		self.latex_walker = latex_walker;
/* 000111 */ 		self.token_reader = token_reader;
/* 000113 */ 		self.stop_token_condition = stop_token_condition;
/* 000114 */ 		self.stop_nodelist_condition = stop_nodelist_condition;
/* 000116 */ 		self.include_stop_token_pre_space_chars = include_stop_token_pre_space_chars;
/* 000118 */ 		self._stop_token_condition_met = false;
/* 000120 */ 		self._stop_token_condition_met_token = null;
/* 000121 */ 		self._stop_nodelist_condition_met = false;
/* 000122 */ 		self._stop_condition_stop_data = null;
/* 000123 */ 		self._reached_end_of_stream = false;
/* 000127 */ 		self.parsing_state = parsing_state;
/* 000129 */ 		self.start_parsing_state = parsing_state;
/* 000132 */ 		self._nodelist = [];
/* 000135 */ 		self._pending_chars_pos = null;
/* 000136 */ 		self._pending_chars = '';
/* 000139 */ 		self._finalized = false;
/* 000142 */ 		self._make_child_parsing_state_fn = make_child_parsing_state;
/* 000142 */ 	});},
/* 000146 */ 	get get_final_nodelist () {return __get__ (this, function (self) {
/* 000146 */ 		if (arguments.length) {
/* 000146 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000146 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000146 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000146 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000146 */ 					switch (__attrib0__) {
/* 000146 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000146 */ 					}
/* 000146 */ 				}
/* 000146 */ 			}
/* 000146 */ 		}
/* 000146 */ 		else {
/* 000146 */ 		}
/* 000152 */ 		if (__t__ (!__t__ ((self._finalized)))) {
/* 000153 */ 			var __except0__ = __call__ (RuntimeError, null, 'Call to get_final_nodelist() before finalize()');
/* 000153 */ 			__except0__.__cause__ = null;
/* 000153 */ 			throw __except0__;
/* 000153 */ 		}
/* 000155 */ 		return (function () {
/* 000155 */ 			var __accu0__ = self.latex_walker;
/* 000155 */ 			return __call__ (__accu0__.make_nodelist, __accu0__, __kwargtrans__ ({nodelist: self._nodelist, parsing_state: self.start_parsing_state}));
/* 000155 */ 		}) ();
/* 000155 */ 	});},
/* 000161 */ 	get get_parser_parsing_state_delta () {return __get__ (this, function (self) {
/* 000161 */ 		if (arguments.length) {
/* 000161 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000161 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000161 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000161 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000161 */ 					switch (__attrib0__) {
/* 000161 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000161 */ 					}
/* 000161 */ 				}
/* 000161 */ 			}
/* 000161 */ 		}
/* 000161 */ 		else {
/* 000161 */ 		}
/* 000164 */ 		if (__t__ (!__t__ ((self._finalized)))) {
/* 000165 */ 			var __except0__ = __call__ (RuntimeError, null, 'Call to get_parser_parsing_state_delta() before finalize()');
/* 000165 */ 			__except0__.__cause__ = null;
/* 000165 */ 			throw __except0__;
/* 000165 */ 		}
/* 000167 */ 		if (__t__ (self.start_parsing_state === self.parsing_state)) {
/* 000169 */ 			return null;
/* 000169 */ 		}
/* 000172 */ 		return __call__ (ParsingStateDeltaReplaceParsingState, null, __kwargtrans__ ({set_parsing_state: self.parsing_state}));
/* 000172 */ 	});},
/* 000175 */ 	get pos_start () {return __get__ (this, function (self) {
/* 000175 */ 		if (arguments.length) {
/* 000175 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000175 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000175 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000175 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000175 */ 					switch (__attrib0__) {
/* 000175 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000175 */ 					}
/* 000175 */ 				}
/* 000175 */ 			}
/* 000175 */ 		}
/* 000175 */ 		else {
/* 000175 */ 		}
/* 000180 */ 		try {
/* 000182 */ 			var p = __call__ (py_next, null, (function () {
/* 000182 */ 				var __accu0__ = [];
/* 000182 */ 				var __iterable0__ = self._nodelist;
/* 000182 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000182 */ 					var n = __getitem__ (__iterable0__, __index0__);
/* 000182 */ 					if (__t__ (n !== null)) {
/* 000182 */ 						(function () {
/* 000182 */ 							var __accu1__ = __accu0__;
/* 000182 */ 							return __call__ (__accu1__.append, __accu1__, n.pos);
/* 000182 */ 						}) ();
/* 000182 */ 					}
/* 000182 */ 				}
/* 000182 */ 				return py_iter (__accu0__);
/* 000182 */ 			}) ());
/* 000182 */ 		}
/* 000182 */ 		catch (__except0__) {
/* 000182 */ 			if (isinstance (__except0__, StopIteration)) {
/* 000184 */ 				var p = null;
/* 000184 */ 			}
/* 000184 */ 			else {
/* 000184 */ 				throw __except0__;
/* 000184 */ 			}
/* 000184 */ 		}
/* 000185 */ 		if (__t__ (p !== null)) {
/* 000186 */ 			return p;
/* 000186 */ 		}
/* 000187 */ 		return self._pending_chars_pos;
/* 000187 */ 	});},
/* 000189 */ 	get pos_end () {return __get__ (this, function (self) {
/* 000189 */ 		if (arguments.length) {
/* 000189 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000189 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000189 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000189 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000189 */ 					switch (__attrib0__) {
/* 000189 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000189 */ 					}
/* 000189 */ 				}
/* 000189 */ 			}
/* 000189 */ 		}
/* 000189 */ 		else {
/* 000189 */ 		}
/* 000194 */ 		try {
/* 000196 */ 			var lastnode = __call__ (py_next, null, (function () {
/* 000196 */ 				var __accu0__ = [];
/* 000196 */ 				var __iterable0__ = __call__ (py_reversed, null, self._nodelist);
/* 000196 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000196 */ 					var n = __getitem__ (__iterable0__, __index0__);
/* 000196 */ 					if (__t__ (n !== null)) {
/* 000196 */ 						(function () {
/* 000196 */ 							var __accu1__ = __accu0__;
/* 000196 */ 							return __call__ (__accu1__.append, __accu1__, n);
/* 000196 */ 						}) ();
/* 000196 */ 					}
/* 000196 */ 				}
/* 000196 */ 				return py_iter (__accu0__);
/* 000196 */ 			}) ());
/* 000196 */ 		}
/* 000196 */ 		catch (__except0__) {
/* 000196 */ 			if (isinstance (__except0__, StopIteration)) {
/* 000198 */ 				var lastnode = null;
/* 000198 */ 			}
/* 000198 */ 			else {
/* 000198 */ 				throw __except0__;
/* 000198 */ 			}
/* 000198 */ 		}
/* 000199 */ 		if (__t__ (lastnode === null)) {
/* 000200 */ 			return null;
/* 000200 */ 		}
/* 000201 */ 		return lastnode.pos_end;
/* 000201 */ 	});},
/* 000204 */ 	get stop_token_condition_met () {return __get__ (this, function (self) {
/* 000204 */ 		if (arguments.length) {
/* 000204 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000204 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000204 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000204 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000204 */ 					switch (__attrib0__) {
/* 000204 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000204 */ 					}
/* 000204 */ 				}
/* 000204 */ 			}
/* 000204 */ 		}
/* 000204 */ 		else {
/* 000204 */ 		}
/* 000209 */ 		return self._stop_token_condition_met;
/* 000209 */ 	});},
/* 000211 */ 	get stop_token_condition_met_token () {return __get__ (this, function (self) {
/* 000211 */ 		if (arguments.length) {
/* 000211 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000211 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000211 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000211 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000211 */ 					switch (__attrib0__) {
/* 000211 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000211 */ 					}
/* 000211 */ 				}
/* 000211 */ 			}
/* 000211 */ 		}
/* 000211 */ 		else {
/* 000211 */ 		}
/* 000215 */ 		return self._stop_token_condition_met_token;
/* 000215 */ 	});},
/* 000217 */ 	get stop_nodelist_condition_met () {return __get__ (this, function (self) {
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
/* 000222 */ 		return self._stop_nodelist_condition_met;
/* 000222 */ 	});},
/* 000224 */ 	get stop_condition_stop_data () {return __get__ (this, function (self) {
/* 000224 */ 		if (arguments.length) {
/* 000224 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000224 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000224 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000224 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000224 */ 					switch (__attrib0__) {
/* 000224 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000224 */ 					}
/* 000224 */ 				}
/* 000224 */ 			}
/* 000224 */ 		}
/* 000224 */ 		else {
/* 000224 */ 		}
/* 000229 */ 		return self._stop_condition_stop_data;
/* 000229 */ 	});},
/* 000231 */ 	get reached_end_of_stream () {return __get__ (this, function (self) {
/* 000231 */ 		if (arguments.length) {
/* 000231 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000231 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000231 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000231 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000231 */ 					switch (__attrib0__) {
/* 000231 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000231 */ 					}
/* 000231 */ 				}
/* 000231 */ 			}
/* 000231 */ 		}
/* 000231 */ 		else {
/* 000231 */ 		}
/* 000235 */ 		return self._reached_end_of_stream;
/* 000235 */ 	});},
/* 000238 */ 	get is_finalized () {return __get__ (this, function (self) {
/* 000238 */ 		if (arguments.length) {
/* 000238 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000238 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000238 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000238 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000238 */ 					switch (__attrib0__) {
/* 000238 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000238 */ 					}
/* 000238 */ 				}
/* 000238 */ 			}
/* 000238 */ 		}
/* 000238 */ 		else {
/* 000238 */ 		}
/* 000245 */ 		return self._finalized;
/* 000245 */ 	});},
/* 000247 */ 	get finalize () {return __get__ (this, function (self) {
/* 000247 */ 		if (arguments.length) {
/* 000247 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000247 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000247 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000247 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000247 */ 					switch (__attrib0__) {
/* 000247 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000247 */ 					}
/* 000247 */ 				}
/* 000247 */ 			}
/* 000247 */ 		}
/* 000247 */ 		else {
/* 000247 */ 		}
/* 000261 */ 		if (__t__ (self._finalized)) {
/* 000262 */ 			return ;
/* 000262 */ 		}
/* 000264 */ 		var exc = (function () {
/* 000264 */ 			var __accu0__ = self;
/* 000264 */ 			return __call__ (__accu0__.flush_pending_chars, __accu0__);
/* 000264 */ 		}) ();
/* 000266 */ 		self._finalized = true;
/* 000268 */ 		if (__t__ (exc !== null)) {
/* 000269 */ 			var __except0__ = exc;
/* 000269 */ 			__except0__.__cause__ = null;
/* 000269 */ 			throw __except0__;
/* 000269 */ 		}
/* 000269 */ 	});},
/* 000279 */ 	get push_pending_chars () {return __get__ (this, function (self, chars, pos) {
/* 000279 */ 		if (arguments.length) {
/* 000279 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000279 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000279 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000279 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000279 */ 					switch (__attrib0__) {
/* 000279 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000279 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000279 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000279 */ 					}
/* 000279 */ 				}
/* 000279 */ 			}
/* 000279 */ 		}
/* 000279 */ 		else {
/* 000279 */ 		}
/* 000287 */ 		self._pending_chars = __call__ (__iadd__, null, self._pending_chars, chars);
/* 000288 */ 		if (__t__ (self._pending_chars_pos === null)) {
/* 000289 */ 			self._pending_chars_pos = pos;
/* 000289 */ 		}
/* 000289 */ 	});},
/* 000291 */ 	get flush_pending_chars () {return __get__ (this, function (self) {
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
/* 000299 */ 		if (__t__ (!__t__ ((self._pending_chars)))) {
/* 000301 */ 			return null;
/* 000301 */ 		}
/* 000303 */ 		var __left0__ = tuple ([self._pending_chars_pos, self._pending_chars]);
/* 000303 */ 		var charspos = __left0__ [0];
/* 000303 */ 		var chars = __left0__ [1];
/* 000304 */ 		self._pending_chars = '';
/* 000305 */ 		self._pending_chars_pos = null;
/* 000307 */ 		var strnode = (function () {
/* 000307 */ 			var __accu0__ = self.latex_walker;
/* 000312 */ 			return __call__ (__accu0__.make_node, __accu0__, LatexCharsNode, __kwargtrans__ ({parsing_state: self.parsing_state, chars: chars, pos: charspos, pos_end: __add__ (charspos, __call__ (len, null, chars))}));
/* 000312 */ 		}) ();
/* 000314 */ 		return (function () {
/* 000314 */ 			var __accu0__ = self;
/* 000314 */ 			return __call__ (__accu0__.push_to_nodelist, __accu0__, strnode);
/* 000314 */ 		}) ();
/* 000314 */ 	});},
/* 000316 */ 	get push_to_nodelist () {return __get__ (this, function (self, node) {
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
/* 000323 */ 		if (__t__ (self._finalized)) {
/* 000324 */ 			var __except0__ = __call__ (RuntimeError, null, 'You already called finalize()');
/* 000324 */ 			__except0__.__cause__ = null;
/* 000324 */ 			throw __except0__;
/* 000324 */ 		}
/* 000326 */ 		(function () {
/* 000326 */ 			var __accu0__ = self._nodelist;
/* 000326 */ 			return __call__ (__accu0__.append, __accu0__, node);
/* 000326 */ 		}) ();
/* 000328 */ 		var exc = (function () {
/* 000328 */ 			var __accu0__ = self;
/* 000328 */ 			return __call__ (__accu0__._check_nodelist_stop_condition, __accu0__);
/* 000328 */ 		}) ();
/* 000329 */ 		if (__t__ (exc !== null)) {
/* 000330 */ 			return exc;
/* 000330 */ 		}
/* 000331 */ 		return null;
/* 000331 */ 	});},
/* 000334 */ 	get update_state_from_parsing_state_delta () {return __get__ (this, function (self, parsing_state_delta) {
/* 000334 */ 		if (arguments.length) {
/* 000334 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000334 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000334 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000334 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000334 */ 					switch (__attrib0__) {
/* 000334 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000334 */ 						case 'parsing_state_delta': var parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000334 */ 					}
/* 000334 */ 				}
/* 000334 */ 			}
/* 000334 */ 		}
/* 000334 */ 		else {
/* 000334 */ 		}
/* 000343 */ 		if (__t__ (parsing_state_delta !== null)) {
/* 000344 */ 			var ps = self.parsing_state;
/* 000346 */ 			self.parsing_state = (function () {
/* 000346 */ 				var __accu0__ = parsing_state_delta;
/* 000346 */ 				return __call__ (__accu0__.get_updated_parsing_state, __accu0__, self.parsing_state, self.latex_walker);
/* 000346 */ 			}) ();
/* 000351 */ 			// pass;
/* 000351 */ 		}
/* 000351 */ 	});},
/* 000361 */ 	get _check_nodelist_stop_condition () {return __get__ (this, function (self) {
/* 000361 */ 		if (arguments.length) {
/* 000361 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000361 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000361 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000361 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000361 */ 					switch (__attrib0__) {
/* 000361 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000361 */ 					}
/* 000361 */ 				}
/* 000361 */ 			}
/* 000361 */ 		}
/* 000361 */ 		else {
/* 000361 */ 		}
/* 000362 */ 		var stop_nodelist_condition = self.stop_nodelist_condition;
/* 000363 */ 		if (__t__ (stop_nodelist_condition !== null)) {
/* 000364 */ 			var stop_data = __call__ (stop_nodelist_condition, null, self._nodelist);
/* 000365 */ 			if (__t__ (stop_data)) {
/* 000366 */ 				self._stop_nodelist_condition_met = true;
/* 000367 */ 				// pass;
/* 000371 */ 				return (function () {
/* 000371 */ 					var __accu0__ = LatexNodesCollector;
/* 000371 */ 					return __call__ (__accu0__.ReachedStoppingCondition, __accu0__, __kwargtrans__ ({stop_data: stop_data}));
/* 000371 */ 				}) ();
/* 000371 */ 			}
/* 000371 */ 		}
/* 000372 */ 		return null;
/* 000372 */ 	});},
/* 000374 */ 	get _check_token_stop_condition () {return __get__ (this, function (self, tok) {
/* 000374 */ 		if (arguments.length) {
/* 000374 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000374 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000374 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000374 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000374 */ 					switch (__attrib0__) {
/* 000374 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000374 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000374 */ 					}
/* 000374 */ 				}
/* 000374 */ 			}
/* 000374 */ 		}
/* 000374 */ 		else {
/* 000374 */ 		}
/* 000375 */ 		var stop_token_condition = self.stop_token_condition;
/* 000376 */ 		if (__t__ (stop_token_condition !== null)) {
/* 000377 */ 			var stop_data = __call__ (stop_token_condition, null, tok);
/* 000378 */ 			if (__t__ (stop_data)) {
/* 000379 */ 				self._stop_token_condition_met = true;
/* 000380 */ 				self._stop_token_condition_met_token = tok;
/* 000381 */ 				// pass;
/* 000386 */ 				return (function () {
/* 000386 */ 					var __accu0__ = LatexNodesCollector;
/* 000386 */ 					return __call__ (__accu0__.ReachedStoppingCondition, __accu0__, __kwargtrans__ ({stop_data: stop_data}));
/* 000386 */ 				}) ();
/* 000386 */ 			}
/* 000386 */ 		}
/* 000387 */ 		return null;
/* 000387 */ 	});},
/* 000390 */ 	get process_tokens () {return __get__ (this, function (self) {
/* 000390 */ 		if (arguments.length) {
/* 000390 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000390 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000390 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000390 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000390 */ 					switch (__attrib0__) {
/* 000390 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000390 */ 					}
/* 000390 */ 				}
/* 000390 */ 			}
/* 000390 */ 		}
/* 000390 */ 		else {
/* 000390 */ 		}
/* 000411 */ 		try {
/* 000412 */ 			while (__t__ (true)) {
/* 000413 */ 				(function () {
/* 000413 */ 					var __accu0__ = self;
/* 000413 */ 					return __call__ (__accu0__.process_one_token, __accu0__);
/* 000413 */ 				}) ();
/* 000413 */ 			}
/* 000413 */ 		}
/* 000413 */ 		catch (__except0__) {
/* 000413 */ 			if (isinstance (__except0__, LatexNodesCollector.ReachedStoppingCondition)) {
/* 000413 */ 				var e = __except0__;
/* 000417 */ 				self._stop_condition_stop_data = e.stop_data;
/* 000418 */ 				// pass;
/* 000421 */ 				return ;
/* 000421 */ 			}
/* 000421 */ 			else if (isinstance (__except0__, LatexNodesCollector.ReachedEndOfStream)) {
/* 000421 */ 				var e = __except0__;
/* 000426 */ 				self._reached_end_of_stream = true;
/* 000427 */ 				// pass;
/* 000430 */ 				return ;
/* 000430 */ 			}
/* 000430 */ 			else if (isinstance (__except0__, LatexWalkerError)) {
/* 000430 */ 				var e = __except0__;
/* 000434 */ 				__except0__.__cause__ = null;
/* 000434 */ 				throw __except0__;
/* 000434 */ 			}
/* 000434 */ 			else {
/* 000434 */ 				throw __except0__;
/* 000434 */ 			}
/* 000434 */ 		}
/* 000434 */ 		finally {
/* 000437 */ 			(function () {
/* 000437 */ 				var __accu0__ = self;
/* 000437 */ 				return __call__ (__accu0__.finalize, __accu0__);
/* 000437 */ 			}) ();
/* 000437 */ 		}
/* 000437 */ 	});},
/* 000442 */ 	get process_one_token () {return __get__ (this, function (self) {
/* 000442 */ 		if (arguments.length) {
/* 000442 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000442 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000442 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000442 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000442 */ 					switch (__attrib0__) {
/* 000442 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000442 */ 					}
/* 000442 */ 				}
/* 000442 */ 			}
/* 000442 */ 		}
/* 000442 */ 		else {
/* 000442 */ 		}
/* 000481 */ 		if (__t__ (self._finalized)) {
/* 000482 */ 			var __except0__ = __call__ (RuntimeError, null, 'You already called finalize()');
/* 000482 */ 			__except0__.__cause__ = null;
/* 000482 */ 			throw __except0__;
/* 000482 */ 		}
/* 000484 */ 		var latex_walker = self.latex_walker;
/* 000485 */ 		var token_reader = self.token_reader;
/* 000487 */ 		try {
/* 000489 */ 			var tok = (function () {
/* 000489 */ 				var __accu0__ = token_reader;
/* 000489 */ 				return __call__ (__accu0__.next_token, __accu0__, __kwargtrans__ ({parsing_state: self.parsing_state}));
/* 000489 */ 			}) ();
/* 000490 */ 			// pass;
/* 000490 */ 		}
/* 000490 */ 		catch (__except0__) {
/* 000490 */ 			if (isinstance (__except0__, LatexWalkerEndOfStream)) {
/* 000490 */ 				var e = __except0__;
/* 000495 */ 				var final_space = __call__ (getattr, null, e, 'final_space', null);
/* 000496 */ 				if (__t__ (final_space)) {
/* 000498 */ 					var final_space_pos = __add__ ((function () {
/* 000498 */ 						var __accu0__ = token_reader;
/* 000498 */ 						return __call__ (__accu0__.cur_pos, __accu0__);
/* 000498 */ 					}) (), __call__ (len, null, final_space));
/* 000499 */ 					var tok = (function () {
/* 000499 */ 						var __accu0__ = token_reader;
/* 000499 */ 						return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: 'char', arg: '', pre_space: final_space, pos: final_space_pos, pos_end: final_space_pos}));
/* 000499 */ 					}) ();
/* 000506 */ 					(function () {
/* 000506 */ 						var __accu0__ = token_reader;
/* 000506 */ 						return __call__ (__accu0__.move_past_token, __accu0__, tok);
/* 000506 */ 					}) ();
/* 000506 */ 				}
/* 000507 */ 				else {
/* 000509 */ 					var exc = (function () {
/* 000509 */ 						var __accu0__ = LatexNodesCollector;
/* 000509 */ 						return __call__ (__accu0__.ReachedEndOfStream, __accu0__);
/* 000509 */ 					}) ();
/* 000510 */ 					exc.pos_end = (function () {
/* 000510 */ 						var __accu0__ = token_reader;
/* 000510 */ 						return __call__ (__accu0__.cur_pos, __accu0__);
/* 000510 */ 					}) ();
/* 000511 */ 					var __except1__ = exc;
/* 000511 */ 					__except1__.__cause__ = null;
/* 000511 */ 					throw __except1__;
/* 000511 */ 				}
/* 000511 */ 			}
/* 000511 */ 			else {
/* 000511 */ 				throw __except0__;
/* 000511 */ 			}
/* 000511 */ 		}
/* 000516 */ 		var stop_exc = (function () {
/* 000516 */ 			var __accu0__ = self;
/* 000516 */ 			return __call__ (__accu0__._check_token_stop_condition, __accu0__, tok);
/* 000516 */ 		}) ();
/* 000517 */ 		if (__t__ (stop_exc !== null)) {
/* 000518 */ 			if (__t__ (self.include_stop_token_pre_space_chars)) {
/* 000521 */ 				(function () {
/* 000521 */ 					var __accu0__ = self;
/* 000523 */ 					return __call__ (__accu0__.push_pending_chars, __accu0__, __kwargtrans__ ({chars: tok.pre_space, pos: __sub__ (tok.pos, __call__ (len, null, tok.pre_space))}));
/* 000523 */ 				}) ();
/* 000525 */ 				var rewind_pre_space = false;
/* 000525 */ 			}
/* 000526 */ 			else {
/* 000527 */ 				var rewind_pre_space = true;
/* 000527 */ 			}
/* 000530 */ 			(function () {
/* 000530 */ 				var __accu0__ = token_reader;
/* 000530 */ 				return __call__ (__accu0__.move_to_token, __accu0__, tok, __kwargtrans__ ({rewind_pre_space: rewind_pre_space}));
/* 000530 */ 			}) ();
/* 000531 */ 			stop_exc.pos_end = tok.pos_end;
/* 000532 */ 			var __except0__ = stop_exc;
/* 000532 */ 			__except0__.__cause__ = null;
/* 000532 */ 			throw __except0__;
/* 000532 */ 		}
/* 000536 */ 		if (__t__ (__eq__ (tok.tok, 'char'))) {
/* 000537 */ 			(function () {
/* 000537 */ 				var __accu0__ = self;
/* 000539 */ 				return __call__ (__accu0__.push_pending_chars, __accu0__, __kwargtrans__ ({chars: __add__ (tok.pre_space, tok.arg), pos: __sub__ (tok.pos, __call__ (len, null, tok.pre_space))}));
/* 000539 */ 			}) ();
/* 000541 */ 			return ;
/* 000541 */ 		}
/* 000545 */ 		if (__t__ (self._pending_chars)) {
/* 000546 */ 			self._pending_chars = __call__ (__iadd__, null, self._pending_chars, tok.pre_space);
/* 000547 */ 			tok.pre_space = '';
/* 000548 */ 			var stop_exc = (function () {
/* 000548 */ 				var __accu0__ = self;
/* 000548 */ 				return __call__ (__accu0__.flush_pending_chars, __accu0__);
/* 000548 */ 			}) ();
/* 000549 */ 			if (__t__ (stop_exc !== null)) {
/* 000553 */ 				(function () {
/* 000553 */ 					var __accu0__ = token_reader;
/* 000553 */ 					return __call__ (__accu0__.move_to_token, __accu0__, tok, __kwargtrans__ ({rewind_pre_space: false}));
/* 000553 */ 				}) ();
/* 000554 */ 				stop_exc.pos_end = tok.pos;
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
/* 000576 */ 				var __except0__ = stop_exc;
/* 000576 */ 				__except0__.__cause__ = null;
/* 000576 */ 				throw __except0__;
/* 000576 */ 			}
/* 000576 */ 		}
/* 000583 */ 		if (__t__ (__eq__ (tok.tok, 'brace_close'))) {
/* 000585 */ 			var __except0__ = __call__ (LatexWalkerNodesParseError, null, __kwargtrans__ ({msg: (function () {
/* 000585 */ 				var __accu0__ = 'Unexpected mismatching closing delimiter ‘{}’';
/* 000585 */ 				return __call__ (__accu0__.format, __accu0__, tok.arg);
/* 000585 */ 			}) (), pos: tok.pos, recovery_past_token: tok, error_type_info: dict ({'what': 'nodes_unexpected_closing_group_delimiter', 'delimiter': tok.arg})}));
/* 000585 */ 			__except0__.__cause__ = null;
/* 000585 */ 			throw __except0__;
/* 000585 */ 		}
/* 000594 */ 		if (__t__ (__eq__ (tok.tok, 'end_environment'))) {
/* 000596 */ 			var __except0__ = __call__ (LatexWalkerNodesParseError, null, __kwargtrans__ ({msg: (function () {
/* 000596 */ 				var __accu0__ = 'Unexpected closing environment: ‘{}’';
/* 000596 */ 				return __call__ (__accu0__.format, __accu0__, tok.arg);
/* 000596 */ 			}) (), pos: tok.pos, recovery_past_token: tok, error_type_info: dict ({'what': 'nodes_unexpected_end_environment', 'environmentname': tok.arg})}));
/* 000596 */ 			__except0__.__cause__ = null;
/* 000596 */ 			throw __except0__;
/* 000596 */ 		}
/* 000605 */ 		if (__t__ (__t__ (__in__ (tok.tok, tuple (['mathmode_inline', 'mathmode_display']))) && !__in__ (tok.arg, self.parsing_state._math_delims_info_by_open))) {
/* 000609 */ 			var __except0__ = __call__ (LatexWalkerNodesParseError, null, __kwargtrans__ ({msg: (function () {
/* 000609 */ 				var __accu0__ = 'Unexpected closing math mode token ‘{}’';
/* 000609 */ 				return __call__ (__accu0__.format, __accu0__, tok.arg);
/* 000609 */ 			}) (), pos: tok.pos, recovery_past_token: tok, error_type_info: dict ({'what': 'nodes_unexpected_closing_math_delimiter', 'mathmode_type': tok.tok, 'delimiter': tok.arg})}));
/* 000609 */ 			__except0__.__cause__ = null;
/* 000609 */ 			throw __except0__;
/* 000609 */ 		}
/* 000623 */ 		if (__t__ (__eq__ (tok.tok, 'comment'))) {
/* 000624 */ 			(function () {
/* 000624 */ 				var __accu0__ = self;
/* 000624 */ 				return __call__ (__accu0__.parse_comment_node, __accu0__, tok);
/* 000624 */ 			}) ();
/* 000625 */ 			return ;
/* 000625 */ 		}
/* 000627 */ 		else if (__t__ (__eq__ (tok.tok, 'brace_open'))) {
/* 000629 */ 			(function () {
/* 000629 */ 				var __accu0__ = self;
/* 000629 */ 				return __call__ (__accu0__.parse_latex_group, __accu0__, tok);
/* 000629 */ 			}) ();
/* 000630 */ 			return ;
/* 000630 */ 		}
/* 000632 */ 		else if (__t__ (__eq__ (tok.tok, 'macro'))) {
/* 000634 */ 			(function () {
/* 000634 */ 				var __accu0__ = self;
/* 000634 */ 				return __call__ (__accu0__.parse_macro, __accu0__, tok);
/* 000634 */ 			}) ();
/* 000635 */ 			return ;
/* 000635 */ 		}
/* 000637 */ 		else if (__t__ (__eq__ (tok.tok, 'begin_environment'))) {
/* 000639 */ 			(function () {
/* 000639 */ 				var __accu0__ = self;
/* 000639 */ 				return __call__ (__accu0__.parse_environment, __accu0__, tok);
/* 000639 */ 			}) ();
/* 000640 */ 			return ;
/* 000640 */ 		}
/* 000642 */ 		else if (__t__ (__eq__ (tok.tok, 'specials'))) {
/* 000644 */ 			(function () {
/* 000644 */ 				var __accu0__ = self;
/* 000644 */ 				return __call__ (__accu0__.parse_specials, __accu0__, tok);
/* 000644 */ 			}) ();
/* 000645 */ 			return ;
/* 000645 */ 		}
/* 000647 */ 		else if (__t__ (__in__ (tok.tok, tuple (['mathmode_inline', 'mathmode_display'])))) {
/* 000649 */ 			(function () {
/* 000649 */ 				var __accu0__ = self;
/* 000649 */ 				return __call__ (__accu0__.parse_math, __accu0__, tok);
/* 000649 */ 			}) ();
/* 000650 */ 			return ;
/* 000650 */ 		}
/* 000651 */ 		else {
/* 000655 */ 			var __except0__ = __call__ (LatexWalkerParseError, null, (function () {
/* 000655 */ 				var __accu0__ = 'Unknown token type: {}';
/* 000655 */ 				return __call__ (__accu0__.format, __accu0__, tok.tok);
/* 000655 */ 			}) (), __kwargtrans__ ({pos: tok.pos}));
/* 000655 */ 			__except0__.__cause__ = null;
/* 000655 */ 			throw __except0__;
/* 000655 */ 		}
/* 000655 */ 	});},
/* 000667 */ 	get make_child_parsing_state () {return __get__ (this, function (self, parsing_state, node_class) {
/* 000667 */ 		if (arguments.length) {
/* 000667 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000667 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000667 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000667 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000667 */ 					switch (__attrib0__) {
/* 000667 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000667 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000667 */ 						case 'node_class': var node_class = __allkwargs0__ [__attrib0__]; break;
/* 000667 */ 					}
/* 000667 */ 				}
/* 000667 */ 			}
/* 000667 */ 		}
/* 000667 */ 		else {
/* 000667 */ 		}
/* 000674 */ 		if (__t__ (self._make_child_parsing_state_fn !== null)) {
/* 000675 */ 			return (function () {
/* 000675 */ 				var __accu0__ = self;
/* 000675 */ 				return __call__ (__accu0__._make_child_parsing_state_fn, __accu0__, __kwargtrans__ ({parsing_state: parsing_state, node_class: node_class}));
/* 000675 */ 			}) ();
/* 000675 */ 		}
/* 000677 */ 		return self.parsing_state;
/* 000677 */ 	});},
/* 000680 */ 	get parse_comment_node () {return __get__ (this, function (self, tok) {
/* 000680 */ 		if (arguments.length) {
/* 000680 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000680 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000680 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000680 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000680 */ 					switch (__attrib0__) {
/* 000680 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000680 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000680 */ 					}
/* 000680 */ 				}
/* 000680 */ 			}
/* 000680 */ 		}
/* 000680 */ 		else {
/* 000680 */ 		}
/* 000694 */ 		var commentnode = (function () {
/* 000694 */ 			var __accu0__ = self.latex_walker;
/* 000694 */ 			return __call__ (__accu0__.make_node, __accu0__, LatexCommentNode, __kwargtrans__ ({parsing_state: self.parsing_state, comment: tok.arg, comment_post_space: tok.post_space, pos: tok.pos, pos_end: tok.pos_end}));
/* 000694 */ 		}) ();
/* 000703 */ 		var stop_exc = (function () {
/* 000703 */ 			var __accu0__ = self;
/* 000703 */ 			return __call__ (__accu0__.push_to_nodelist, __accu0__, commentnode);
/* 000703 */ 		}) ();
/* 000704 */ 		if (__t__ (stop_exc !== null)) {
/* 000705 */ 			stop_exc.pos_end = tok.pos_end;
/* 000706 */ 			var __except0__ = stop_exc;
/* 000706 */ 			__except0__.__cause__ = null;
/* 000706 */ 			throw __except0__;
/* 000706 */ 		}
/* 000706 */ 	});},
/* 000709 */ 	get parse_latex_group () {return __get__ (this, function (self, tok) {
/* 000709 */ 		if (arguments.length) {
/* 000709 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000709 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000709 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000709 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000709 */ 					switch (__attrib0__) {
/* 000709 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000709 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000709 */ 					}
/* 000709 */ 				}
/* 000709 */ 			}
/* 000709 */ 		}
/* 000709 */ 		else {
/* 000709 */ 		}
/* 000725 */ 		// pass;
/* 000729 */ 		(function () {
/* 000729 */ 			var __accu0__ = self.token_reader;
/* 000729 */ 			return __call__ (__accu0__.move_to_token, __accu0__, tok, __kwargtrans__ ({rewind_pre_space: false}));
/* 000729 */ 		}) ();
/* 000732 */ 		var __left0__ = (function () {
/* 000732 */ 			var __accu0__ = self.latex_walker;
/* 000733 */ 			return __call__ (__accu0__.parse_content, __accu0__, (function () {
/* 000733 */ 				var __accu1__ = self.latex_walker;
/* 000733 */ 				return __call__ (__accu1__.make_latex_group_parser, __accu1__, __kwargtrans__ ({delimiters: tok.arg}));
/* 000737 */ 			}) (), __kwargtrans__ ({token_reader: self.token_reader, parsing_state: (function () {
/* 000737 */ 				var __accu1__ = self;
/* 000737 */ 				return __call__ (__accu1__.make_child_parsing_state, __accu1__, self.parsing_state, LatexGroupNode);
/* 000737 */ 			}) ()}));
/* 000737 */ 		}) ();
/* 000737 */ 		var groupnode = __left0__ [0];
/* 000737 */ 		var parsing_state_delta = __left0__ [1];
/* 000741 */ 		if (__t__ (parsing_state_delta !== null)) {
/* 000742 */ 			(function () {
/* 000742 */ 				var __accu0__ = logger;
/* 000742 */ 				return __call__ (__accu0__.warning, __accu0__, 'parsing_state_delta is ignored after parsing a LaTeX group: %r', parsing_state_delta);
/* 000742 */ 			}) ();
/* 000742 */ 		}
/* 000745 */ 		var stop_exc = (function () {
/* 000745 */ 			var __accu0__ = self;
/* 000745 */ 			return __call__ (__accu0__.push_to_nodelist, __accu0__, groupnode);
/* 000745 */ 		}) ();
/* 000746 */ 		if (__t__ (stop_exc !== null)) {
/* 000747 */ 			stop_exc.pos_end = groupnode.pos_end;
/* 000748 */ 			var __except0__ = stop_exc;
/* 000748 */ 			__except0__.__cause__ = null;
/* 000748 */ 			throw __except0__;
/* 000748 */ 		}
/* 000750 */ 		// pass;
/* 000750 */ 	});},
/* 000755 */ 	get parse_macro () {return __get__ (this, function (self, tok) {
/* 000755 */ 		if (arguments.length) {
/* 000755 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000755 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000755 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000755 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000755 */ 					switch (__attrib0__) {
/* 000755 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000755 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000755 */ 					}
/* 000755 */ 				}
/* 000755 */ 			}
/* 000755 */ 		}
/* 000755 */ 		else {
/* 000755 */ 		}
/* 000770 */ 		var macroname = tok.arg;
/* 000772 */ 		var mspec = null;
/* 000773 */ 		if (__t__ (self.parsing_state.latex_context !== null)) {
/* 000774 */ 			var mspec = (function () {
/* 000774 */ 				var __accu0__ = self.parsing_state.latex_context;
/* 000774 */ 				return __call__ (__accu0__.get_macro_spec, __accu0__, macroname);
/* 000774 */ 			}) ();
/* 000774 */ 		}
/* 000776 */ 		if (__t__ (mspec === null)) {
/* 000777 */ 			var exc = (function () {
/* 000777 */ 				var __accu0__ = self.latex_walker;
/* 000779 */ 				return __call__ (__accu0__.check_tolerant_parsing_ignore_error, __accu0__, __call__ (LatexWalkerParseError, null, __kwargtrans__ ({msg: (function () {
/* 000779 */ 					var __accu1__ = 'Encountered unknown macro ‘\\{}’';
/* 000779 */ 					return __call__ (__accu1__.format, __accu1__, macroname);
/* 000779 */ 				}) (), pos: tok.pos, error_type_info: dict ({'what': 'nodes_unknown_macro_name', 'macroname': macroname})})));
/* 000779 */ 			}) ();
/* 000787 */ 			if (__t__ (exc !== null)) {
/* 000788 */ 				var __except0__ = exc;
/* 000788 */ 				__except0__.__cause__ = null;
/* 000788 */ 				throw __except0__;
/* 000788 */ 			}
/* 000789 */ 			var mspec = null;
/* 000789 */ 		}
/* 000791 */ 		var node_class = LatexMacroNode;
/* 000792 */ 		var what = (function () {
/* 000792 */ 			var __accu0__ = 'macro ‘\\{}’';
/* 000792 */ 			return __call__ (__accu0__.format, __accu0__, macroname);
/* 000792 */ 		}) ();
/* 000794 */ 		return (function () {
/* 000794 */ 			var __accu0__ = self;
/* 000794 */ 			return __call__ (__accu0__.parse_invocable_token_type, __accu0__, tok, mspec, node_class, what);
/* 000794 */ 		}) ();
/* 000794 */ 	});},
/* 000796 */ 	get parse_environment () {return __get__ (this, function (self, tok) {
/* 000796 */ 		if (arguments.length) {
/* 000796 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000796 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000796 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000796 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000796 */ 					switch (__attrib0__) {
/* 000796 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000796 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000796 */ 					}
/* 000796 */ 				}
/* 000796 */ 			}
/* 000796 */ 		}
/* 000796 */ 		else {
/* 000796 */ 		}
/* 000812 */ 		var latex_walker = self.latex_walker;
/* 000815 */ 		var environmentname = tok.arg;
/* 000819 */ 		var envspec = (function () {
/* 000819 */ 			var __accu0__ = self.parsing_state.latex_context;
/* 000819 */ 			return __call__ (__accu0__.get_environment_spec, __accu0__, environmentname);
/* 000819 */ 		}) ();
/* 000821 */ 		if (__t__ (envspec === null)) {
/* 000822 */ 			var exc = (function () {
/* 000822 */ 				var __accu0__ = latex_walker;
/* 000824 */ 				return __call__ (__accu0__.check_tolerant_parsing_ignore_error, __accu0__, __call__ (LatexWalkerParseError, null, __kwargtrans__ ({msg: (function () {
/* 000824 */ 					var __accu1__ = 'Encountered unknown environment ‘{{{}}}’';
/* 000824 */ 					return __call__ (__accu1__.format, __accu1__, environmentname);
/* 000824 */ 				}) (), pos: tok.pos, error_type_info: dict ({'what': 'nodes_unknown_environment_name', 'environmentname': environmentname})})));
/* 000824 */ 			}) ();
/* 000832 */ 			if (__t__ (exc !== null)) {
/* 000833 */ 				var __except0__ = exc;
/* 000833 */ 				__except0__.__cause__ = null;
/* 000833 */ 				throw __except0__;
/* 000833 */ 			}
/* 000834 */ 			var envspec = null;
/* 000834 */ 		}
/* 000836 */ 		var node_class = LatexEnvironmentNode;
/* 000837 */ 		var what = (function () {
/* 000837 */ 			var __accu0__ = 'environment ‘{{{}}}’';
/* 000837 */ 			return __call__ (__accu0__.format, __accu0__, environmentname);
/* 000837 */ 		}) ();
/* 000839 */ 		return (function () {
/* 000839 */ 			var __accu0__ = self;
/* 000839 */ 			return __call__ (__accu0__.parse_invocable_token_type, __accu0__, tok, envspec, node_class, what);
/* 000839 */ 		}) ();
/* 000839 */ 	});},
/* 000841 */ 	get parse_specials () {return __get__ (this, function (self, tok) {
/* 000841 */ 		if (arguments.length) {
/* 000841 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000841 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000841 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000841 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000841 */ 					switch (__attrib0__) {
/* 000841 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000841 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000841 */ 					}
/* 000841 */ 				}
/* 000841 */ 			}
/* 000841 */ 		}
/* 000841 */ 		else {
/* 000841 */ 		}
/* 000855 */ 		var specials_spec = tok.arg;
/* 000857 */ 		var node_class = LatexSpecialsNode;
/* 000858 */ 		var what = (function () {
/* 000858 */ 			var __accu0__ = 'specials ‘{}’';
/* 000858 */ 			return __call__ (__accu0__.format, __accu0__, __call__ (getattr, null, specials_spec, 'specials_chars', '<unkonwn>'));
/* 000858 */ 		}) ();
/* 000860 */ 		return (function () {
/* 000860 */ 			var __accu0__ = self;
/* 000860 */ 			return __call__ (__accu0__.parse_invocable_token_type, __accu0__, tok, specials_spec, node_class, what);
/* 000860 */ 		}) ();
/* 000860 */ 	});},
/* 000862 */ 	get parse_invocable_token_type () {return __get__ (this, function (self, tok, spec, node_class, what) {
/* 000862 */ 		if (arguments.length) {
/* 000862 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000862 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000862 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000862 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000862 */ 					switch (__attrib0__) {
/* 000862 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000862 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000862 */ 						case 'spec': var spec = __allkwargs0__ [__attrib0__]; break;
/* 000862 */ 						case 'node_class': var node_class = __allkwargs0__ [__attrib0__]; break;
/* 000862 */ 						case 'what': var what = __allkwargs0__ [__attrib0__]; break;
/* 000862 */ 					}
/* 000862 */ 				}
/* 000862 */ 			}
/* 000862 */ 		}
/* 000862 */ 		else {
/* 000862 */ 		}
/* 000882 */ 		var latex_walker = self.latex_walker;
/* 000883 */ 		var token_reader = self.token_reader;
/* 000885 */ 		if (__t__ (spec !== null)) {
/* 000886 */ 			var node_parser = (function () {
/* 000886 */ 				var __accu0__ = spec;
/* 000886 */ 				return __call__ (__accu0__.get_node_parser, __accu0__, tok);
/* 000886 */ 			}) ();
/* 000886 */ 		}
/* 000887 */ 		else {
/* 000888 */ 			var node_parser = null;
/* 000888 */ 		}
/* 000890 */ 		if (__t__ (node_parser === null)) {
/* 000892 */ 			var exc = (function () {
/* 000892 */ 				var __accu0__ = latex_walker;
/* 000894 */ 				return __call__ (__accu0__.check_tolerant_parsing_ignore_error, __accu0__, __call__ (LatexWalkerParseError, null, __kwargtrans__ ({msg: (function () {
/* 000894 */ 					var __accu1__ = 'No parser found for callable token {!r}';
/* 000894 */ 					return __call__ (__accu1__.format, __accu1__, tok);
/* 000894 */ 				}) (), pos: tok.pos})));
/* 000894 */ 			}) ();
/* 000898 */ 			if (__t__ (exc !== null)) {
/* 000899 */ 				var __except0__ = exc;
/* 000899 */ 				__except0__.__cause__ = null;
/* 000899 */ 				throw __except0__;
/* 000899 */ 			}
/* 000900 */ 			var result_node = null;
/* 000901 */ 			var parsing_state_delta = null;
/* 000901 */ 		}
/* 000902 */ 		else {
/* 000905 */ 			var __left0__ = (function () {
/* 000905 */ 				var __accu0__ = latex_walker;
/* 000908 */ 				return __call__ (__accu0__.parse_content, __accu0__, node_parser, __kwargtrans__ ({token_reader: token_reader, parsing_state: (function () {
/* 000908 */ 					var __accu1__ = self;
/* 000908 */ 					return __call__ (__accu1__.make_child_parsing_state, __accu1__, self.parsing_state, node_class);
/* 000908 */ 				}) (), open_context: tuple ([what, tok])}));
/* 000908 */ 			}) ();
/* 000908 */ 			var result_node = __left0__ [0];
/* 000908 */ 			var parsing_state_delta = __left0__ [1];
/* 000908 */ 		}
/* 000912 */ 		(function () {
/* 000912 */ 			var __accu0__ = self;
/* 000912 */ 			return __call__ (__accu0__.update_state_from_parsing_state_delta, __accu0__, parsing_state_delta);
/* 000912 */ 		}) ();
/* 000914 */ 		if (__t__ (result_node === null)) {
/* 000915 */ 			(function () {
/* 000915 */ 				var __accu0__ = logger;
/* 000915 */ 				return __call__ (__accu0__.warning, __accu0__, 'Parser %r produced no node (None) for token %r', node_parser, tok);
/* 000915 */ 			}) ();
/* 000916 */ 			return ;
/* 000916 */ 		}
/* 000918 */ 		var exc = (function () {
/* 000918 */ 			var __accu0__ = self;
/* 000918 */ 			return __call__ (__accu0__.push_to_nodelist, __accu0__, result_node);
/* 000918 */ 		}) ();
/* 000919 */ 		if (__t__ (exc !== null)) {
/* 000920 */ 			exc.pos_end = result_node.pos_end;
/* 000921 */ 			var __except0__ = exc;
/* 000921 */ 			__except0__.__cause__ = null;
/* 000921 */ 			throw __except0__;
/* 000921 */ 		}
/* 000921 */ 	});},
/* 000924 */ 	get parse_math () {return __get__ (this, function (self, tok) {
/* 000924 */ 		if (arguments.length) {
/* 000924 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000924 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000924 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000924 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000924 */ 					switch (__attrib0__) {
/* 000924 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000924 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000924 */ 					}
/* 000924 */ 				}
/* 000924 */ 			}
/* 000924 */ 		}
/* 000924 */ 		else {
/* 000924 */ 		}
/* 000940 */ 		(function () {
/* 000940 */ 			var __accu0__ = self.token_reader;
/* 000940 */ 			return __call__ (__accu0__.move_to_token, __accu0__, tok, __kwargtrans__ ({rewind_pre_space: false}));
/* 000940 */ 		}) ();
/* 000945 */ 		var child_math_parsing_state = (function () {
/* 000945 */ 			var __accu0__ = self;
/* 000945 */ 			return __call__ (__accu0__.make_child_parsing_state, __accu0__, self.parsing_state, LatexMathNode);
/* 000945 */ 		}) ();
/* 000949 */ 		// pass;
/* 000955 */ 		var __left0__ = (function () {
/* 000955 */ 			var __accu0__ = self.latex_walker;
/* 000956 */ 			return __call__ (__accu0__.parse_content, __accu0__, (function () {
/* 000956 */ 				var __accu1__ = self.latex_walker;
/* 000956 */ 				return __call__ (__accu1__.make_latex_math_parser, __accu1__, __kwargtrans__ ({math_mode_delimiters: tok.arg}));
/* 000956 */ 			}) (), __kwargtrans__ ({token_reader: self.token_reader, parsing_state: child_math_parsing_state}));
/* 000956 */ 		}) ();
/* 000956 */ 		var mathnode = __left0__ [0];
/* 000956 */ 		var parsing_state_delta = __left0__ [1];
/* 000963 */ 		(function () {
/* 000963 */ 			var __accu0__ = self;
/* 000963 */ 			return __call__ (__accu0__.update_state_from_parsing_state_delta, __accu0__, parsing_state_delta);
/* 000963 */ 		}) ();
/* 000965 */ 		if (__t__ (mathnode === null)) {
/* 000966 */ 			(function () {
/* 000966 */ 				var __accu0__ = logger;
/* 000966 */ 				return __call__ (__accu0__.warning, __accu0__, 'Math parser produced no node (None) for token %r', tok);
/* 000966 */ 			}) ();
/* 000967 */ 			return ;
/* 000967 */ 		}
/* 000969 */ 		var stop_exc = (function () {
/* 000969 */ 			var __accu0__ = self;
/* 000969 */ 			return __call__ (__accu0__.push_to_nodelist, __accu0__, mathnode);
/* 000969 */ 		}) ();
/* 000970 */ 		if (__t__ (stop_exc !== null)) {
/* 000971 */ 			stop_exc.pos_end = mathnode.pos_end;
/* 000972 */ 			var __except0__ = stop_exc;
/* 000972 */ 			__except0__.__cause__ = null;
/* 000972 */ 			throw __except0__;
/* 000972 */ 		}
/* 000972 */ 	});}
/* 000972 */ });
/* 000037 */ 
//# sourceMappingURL=pylatexenc.latexnodes._nodescollector.map