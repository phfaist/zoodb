/* 000001 */ // Transcrypt'ed from Python, 2022-12-10 23:30:55
/* 000037 */ var logging = {};
/* 000037 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000044 */ import {ParsingStateDeltaEnterMathMode, ParsingStateDeltaReplaceParsingState, get_updated_parsing_state_from_delta} from './pylatexenc.latexnodes._parsingstatedelta.js';
/* 000041 */ import {LatexCharsNode, LatexCommentNode, LatexEnvironmentNode, LatexGroupNode, LatexMacroNode, LatexMathNode, LatexNode, LatexNodeList, LatexNodesVisitor, LatexSpecialsNode, LatexWalkerParseError, ParsedArguments, __all__, _get_content_as_chars, _unicode_from_str, _update_posposend_from_nodelist, latex_node_types} from './pylatexenc.latexnodes.nodes.js';
/* 000040 */ import {LatexWalkerEndOfStream, LatexWalkerError, LatexWalkerNodesParseError, LatexWalkerParseErrorFormatter, LatexWalkerTokenParseError, _basestring, format_pos, to_str} from './pylatexenc.latexnodes._exctypes.js';
/* 000037 */ import * as __module_logging__ from './logging.js';
/* 000037 */ __nest__ (logging, '', __module_logging__);
/* 000037 */ export {format_pos, ParsingStateDeltaEnterMathMode, LatexNodeList, LatexWalkerEndOfStream, LatexWalkerError, _get_content_as_chars, LatexSpecialsNode, LatexCommentNode, LatexMathNode, _basestring, ParsingStateDeltaReplaceParsingState, latex_node_types, LatexWalkerNodesParseError, LatexMacroNode, LatexWalkerTokenParseError, _update_posposend_from_nodelist, LatexCharsNode, LatexNode, get_updated_parsing_state_from_delta, __all__, LatexNodesVisitor, LatexWalkerParseErrorFormatter, LatexGroupNode, ParsedArguments, to_str, LatexEnvironmentNode, _unicode_from_str, LatexWalkerParseError};
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
/* 000269 */ 			(function () {
/* 000269 */ 				var __accu0__ = logger;
/* 000269 */ 				return __call__ (__accu0__.debug, __accu0__, 'finalize(): raising exc=%r', exc);
/* 000269 */ 			}) ();
/* 000270 */ 			var __except0__ = exc;
/* 000270 */ 			__except0__.__cause__ = null;
/* 000270 */ 			throw __except0__;
/* 000270 */ 		}
/* 000270 */ 	});},
/* 000280 */ 	get push_pending_chars () {return __get__ (this, function (self, chars, pos) {
/* 000280 */ 		if (arguments.length) {
/* 000280 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000280 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000280 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000280 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000280 */ 					switch (__attrib0__) {
/* 000280 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000280 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000280 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000280 */ 					}
/* 000280 */ 				}
/* 000280 */ 			}
/* 000280 */ 		}
/* 000280 */ 		else {
/* 000280 */ 		}
/* 000288 */ 		self._pending_chars = __call__ (__iadd__, null, self._pending_chars, chars);
/* 000289 */ 		if (__t__ (self._pending_chars_pos === null)) {
/* 000290 */ 			self._pending_chars_pos = pos;
/* 000290 */ 		}
/* 000290 */ 	});},
/* 000292 */ 	get flush_pending_chars () {return __get__ (this, function (self) {
/* 000292 */ 		if (arguments.length) {
/* 000292 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000292 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000292 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000292 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000292 */ 					switch (__attrib0__) {
/* 000292 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000292 */ 					}
/* 000292 */ 				}
/* 000292 */ 			}
/* 000292 */ 		}
/* 000292 */ 		else {
/* 000292 */ 		}
/* 000300 */ 		if (__t__ (!__t__ ((self._pending_chars)))) {
/* 000302 */ 			return null;
/* 000302 */ 		}
/* 000304 */ 		var __left0__ = tuple ([self._pending_chars_pos, self._pending_chars]);
/* 000304 */ 		var charspos = __left0__ [0];
/* 000304 */ 		var chars = __left0__ [1];
/* 000305 */ 		self._pending_chars = '';
/* 000306 */ 		self._pending_chars_pos = null;
/* 000308 */ 		var strnode = (function () {
/* 000308 */ 			var __accu0__ = self.latex_walker;
/* 000313 */ 			return __call__ (__accu0__.make_node, __accu0__, LatexCharsNode, __kwargtrans__ ({parsing_state: self.parsing_state, chars: chars, pos: charspos, pos_end: __add__ (charspos, __call__ (len, null, chars))}));
/* 000313 */ 		}) ();
/* 000315 */ 		return (function () {
/* 000315 */ 			var __accu0__ = self;
/* 000315 */ 			return __call__ (__accu0__.push_to_nodelist, __accu0__, strnode);
/* 000315 */ 		}) ();
/* 000315 */ 	});},
/* 000317 */ 	get push_to_nodelist () {return __get__ (this, function (self, node) {
/* 000317 */ 		if (arguments.length) {
/* 000317 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000317 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000317 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000317 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000317 */ 					switch (__attrib0__) {
/* 000317 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000317 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000317 */ 					}
/* 000317 */ 				}
/* 000317 */ 			}
/* 000317 */ 		}
/* 000317 */ 		else {
/* 000317 */ 		}
/* 000324 */ 		if (__t__ (self._finalized)) {
/* 000325 */ 			var __except0__ = __call__ (RuntimeError, null, 'You already called finalize()');
/* 000325 */ 			__except0__.__cause__ = null;
/* 000325 */ 			throw __except0__;
/* 000325 */ 		}
/* 000327 */ 		(function () {
/* 000327 */ 			var __accu0__ = self._nodelist;
/* 000327 */ 			return __call__ (__accu0__.append, __accu0__, node);
/* 000327 */ 		}) ();
/* 000329 */ 		var exc = (function () {
/* 000329 */ 			var __accu0__ = self;
/* 000329 */ 			return __call__ (__accu0__._check_nodelist_stop_condition, __accu0__);
/* 000329 */ 		}) ();
/* 000330 */ 		if (__t__ (exc !== null)) {
/* 000331 */ 			return exc;
/* 000331 */ 		}
/* 000332 */ 		return null;
/* 000332 */ 	});},
/* 000335 */ 	get update_state_from_parsing_state_delta () {return __get__ (this, function (self, parsing_state_delta) {
/* 000335 */ 		if (arguments.length) {
/* 000335 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000335 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000335 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000335 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000335 */ 					switch (__attrib0__) {
/* 000335 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000335 */ 						case 'parsing_state_delta': var parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000335 */ 					}
/* 000335 */ 				}
/* 000335 */ 			}
/* 000335 */ 		}
/* 000335 */ 		else {
/* 000335 */ 		}
/* 000344 */ 		if (__t__ (parsing_state_delta !== null)) {
/* 000345 */ 			var ps = self.parsing_state;
/* 000347 */ 			self.parsing_state = (function () {
/* 000347 */ 				var __accu0__ = parsing_state_delta;
/* 000347 */ 				return __call__ (__accu0__.get_updated_parsing_state, __accu0__, self.parsing_state, self.latex_walker);
/* 000347 */ 			}) ();
/* 000352 */ 			(function () {
/* 000352 */ 				var __accu0__ = logger;
/* 000352 */ 				return __call__ (__accu0__.debug, __accu0__, 'Updated parsing state using parsing_state_delta %r: %r →→→ %r', parsing_state_delta, ps, self.parsing_state);
/* 000352 */ 			}) ();
/* 000352 */ 		}
/* 000352 */ 	});},
/* 000360 */ 	get _check_nodelist_stop_condition () {return __get__ (this, function (self) {
/* 000360 */ 		if (arguments.length) {
/* 000360 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000360 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000360 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000360 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000360 */ 					switch (__attrib0__) {
/* 000360 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000360 */ 					}
/* 000360 */ 				}
/* 000360 */ 			}
/* 000360 */ 		}
/* 000360 */ 		else {
/* 000360 */ 		}
/* 000361 */ 		var stop_nodelist_condition = self.stop_nodelist_condition;
/* 000362 */ 		if (__t__ (stop_nodelist_condition !== null)) {
/* 000363 */ 			var stop_data = __call__ (stop_nodelist_condition, null, self._nodelist);
/* 000364 */ 			if (__t__ (stop_data)) {
/* 000365 */ 				self._stop_nodelist_condition_met = true;
/* 000366 */ 				(function () {
/* 000366 */ 					var __accu0__ = logger;
/* 000366 */ 					return __call__ (__accu0__.debug, __accu0__, 'nodes collector reached nodelist stop condition; nodelist = %r', self._nodelist);
/* 000366 */ 				}) ();
/* 000368 */ 				return (function () {
/* 000368 */ 					var __accu0__ = LatexNodesCollector;
/* 000368 */ 					return __call__ (__accu0__.ReachedStoppingCondition, __accu0__, __kwargtrans__ ({stop_data: stop_data}));
/* 000368 */ 				}) ();
/* 000368 */ 			}
/* 000368 */ 		}
/* 000369 */ 		return null;
/* 000369 */ 	});},
/* 000371 */ 	get _check_token_stop_condition () {return __get__ (this, function (self, tok) {
/* 000371 */ 		if (arguments.length) {
/* 000371 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000371 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000371 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000371 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000371 */ 					switch (__attrib0__) {
/* 000371 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000371 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000371 */ 					}
/* 000371 */ 				}
/* 000371 */ 			}
/* 000371 */ 		}
/* 000371 */ 		else {
/* 000371 */ 		}
/* 000372 */ 		var stop_token_condition = self.stop_token_condition;
/* 000373 */ 		if (__t__ (stop_token_condition !== null)) {
/* 000374 */ 			var stop_data = __call__ (stop_token_condition, null, tok);
/* 000375 */ 			if (__t__ (stop_data)) {
/* 000376 */ 				self._stop_token_condition_met = true;
/* 000377 */ 				self._stop_token_condition_met_token = tok;
/* 000378 */ 				(function () {
/* 000378 */ 					var __accu0__ = logger;
/* 000378 */ 					return __call__ (__accu0__.debug, __accu0__, 'nodes collector reached token stop condition; tok = %r, current node list = %r', tok, self._nodelist);
/* 000378 */ 				}) ();
/* 000381 */ 				return (function () {
/* 000381 */ 					var __accu0__ = LatexNodesCollector;
/* 000381 */ 					return __call__ (__accu0__.ReachedStoppingCondition, __accu0__, __kwargtrans__ ({stop_data: stop_data}));
/* 000381 */ 				}) ();
/* 000381 */ 			}
/* 000381 */ 		}
/* 000382 */ 		return null;
/* 000382 */ 	});},
/* 000385 */ 	get process_tokens () {return __get__ (this, function (self) {
/* 000385 */ 		if (arguments.length) {
/* 000385 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000385 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000385 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000385 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000385 */ 					switch (__attrib0__) {
/* 000385 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000385 */ 					}
/* 000385 */ 				}
/* 000385 */ 			}
/* 000385 */ 		}
/* 000385 */ 		else {
/* 000385 */ 		}
/* 000406 */ 		try {
/* 000407 */ 			while (__t__ (true)) {
/* 000408 */ 				(function () {
/* 000408 */ 					var __accu0__ = self;
/* 000408 */ 					return __call__ (__accu0__.process_one_token, __accu0__);
/* 000408 */ 				}) ();
/* 000408 */ 			}
/* 000408 */ 		}
/* 000408 */ 		catch (__except0__) {
/* 000408 */ 			if (isinstance (__except0__, LatexNodesCollector.ReachedStoppingCondition)) {
/* 000408 */ 				var e = __except0__;
/* 000412 */ 				self._stop_condition_stop_data = e.stop_data;
/* 000413 */ 				(function () {
/* 000413 */ 					var __accu0__ = logger;
/* 000413 */ 					return __call__ (__accu0__.debug, __accu0__, 'nodes collector process_tokens() reached stop condition');
/* 000413 */ 				}) ();
/* 000414 */ 				return ;
/* 000414 */ 			}
/* 000414 */ 			else if (isinstance (__except0__, LatexNodesCollector.ReachedEndOfStream)) {
/* 000414 */ 				var e = __except0__;
/* 000419 */ 				self._reached_end_of_stream = true;
/* 000420 */ 				(function () {
/* 000420 */ 					var __accu0__ = logger;
/* 000420 */ 					return __call__ (__accu0__.debug, __accu0__, 'nodes collector process_tokens() reached end of stream');
/* 000420 */ 				}) ();
/* 000421 */ 				return ;
/* 000421 */ 			}
/* 000421 */ 			else if (isinstance (__except0__, LatexWalkerError)) {
/* 000421 */ 				var e = __except0__;
/* 000425 */ 				(function () {
/* 000425 */ 					var __accu0__ = logger;
/* 000425 */ 					return __call__ (__accu0__.debug, __accu0__, 'process_tokens() - relaying error -- %r', e);
/* 000425 */ 				}) ();
/* 000426 */ 				__except0__.__cause__ = null;
/* 000426 */ 				throw __except0__;
/* 000426 */ 			}
/* 000426 */ 			else {
/* 000426 */ 				throw __except0__;
/* 000426 */ 			}
/* 000426 */ 		}
/* 000426 */ 		finally {
/* 000429 */ 			(function () {
/* 000429 */ 				var __accu0__ = self;
/* 000429 */ 				return __call__ (__accu0__.finalize, __accu0__);
/* 000429 */ 			}) ();
/* 000429 */ 		}
/* 000429 */ 	});},
/* 000434 */ 	get process_one_token () {return __get__ (this, function (self) {
/* 000434 */ 		if (arguments.length) {
/* 000434 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000434 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000434 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000434 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000434 */ 					switch (__attrib0__) {
/* 000434 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000434 */ 					}
/* 000434 */ 				}
/* 000434 */ 			}
/* 000434 */ 		}
/* 000434 */ 		else {
/* 000434 */ 		}
/* 000473 */ 		if (__t__ (self._finalized)) {
/* 000474 */ 			var __except0__ = __call__ (RuntimeError, null, 'You already called finalize()');
/* 000474 */ 			__except0__.__cause__ = null;
/* 000474 */ 			throw __except0__;
/* 000474 */ 		}
/* 000476 */ 		var latex_walker = self.latex_walker;
/* 000477 */ 		var token_reader = self.token_reader;
/* 000479 */ 		try {
/* 000481 */ 			var tok = (function () {
/* 000481 */ 				var __accu0__ = token_reader;
/* 000481 */ 				return __call__ (__accu0__.next_token, __accu0__, __kwargtrans__ ({parsing_state: self.parsing_state}));
/* 000481 */ 			}) ();
/* 000482 */ 			(function () {
/* 000482 */ 				var __accu0__ = logger;
/* 000482 */ 				return __call__ (__accu0__.debug, __accu0__, 'nodes collector read token %r', tok);
/* 000482 */ 			}) ();
/* 000482 */ 		}
/* 000482 */ 		catch (__except0__) {
/* 000482 */ 			if (isinstance (__except0__, LatexWalkerEndOfStream)) {
/* 000482 */ 				var e = __except0__;
/* 000485 */ 				var final_space = __call__ (getattr, null, e, 'final_space', null);
/* 000486 */ 				if (__t__ (final_space)) {
/* 000488 */ 					var final_space_pos = __add__ ((function () {
/* 000488 */ 						var __accu0__ = token_reader;
/* 000488 */ 						return __call__ (__accu0__.cur_pos, __accu0__);
/* 000488 */ 					}) (), __call__ (len, null, final_space));
/* 000489 */ 					var tok = (function () {
/* 000489 */ 						var __accu0__ = token_reader;
/* 000489 */ 						return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: 'char', arg: '', pre_space: final_space, pos: final_space_pos, pos_end: final_space_pos}));
/* 000489 */ 					}) ();
/* 000496 */ 					(function () {
/* 000496 */ 						var __accu0__ = token_reader;
/* 000496 */ 						return __call__ (__accu0__.move_past_token, __accu0__, tok);
/* 000496 */ 					}) ();
/* 000496 */ 				}
/* 000497 */ 				else {
/* 000499 */ 					var exc = (function () {
/* 000499 */ 						var __accu0__ = LatexNodesCollector;
/* 000499 */ 						return __call__ (__accu0__.ReachedEndOfStream, __accu0__);
/* 000499 */ 					}) ();
/* 000500 */ 					exc.pos_end = (function () {
/* 000500 */ 						var __accu0__ = token_reader;
/* 000500 */ 						return __call__ (__accu0__.cur_pos, __accu0__);
/* 000500 */ 					}) ();
/* 000501 */ 					(function () {
/* 000501 */ 						var __accu0__ = logger;
/* 000501 */ 						return __call__ (__accu0__.debug, __accu0__, 'process_one_token(): reached end of stream, exc=%r', exc);
/* 000501 */ 					}) ();
/* 000502 */ 					var __except1__ = exc;
/* 000502 */ 					__except1__.__cause__ = null;
/* 000502 */ 					throw __except1__;
/* 000502 */ 				}
/* 000502 */ 			}
/* 000502 */ 			else {
/* 000502 */ 				throw __except0__;
/* 000502 */ 			}
/* 000502 */ 		}
/* 000507 */ 		var stop_exc = (function () {
/* 000507 */ 			var __accu0__ = self;
/* 000507 */ 			return __call__ (__accu0__._check_token_stop_condition, __accu0__, tok);
/* 000507 */ 		}) ();
/* 000508 */ 		if (__t__ (stop_exc !== null)) {
/* 000509 */ 			if (__t__ (self.include_stop_token_pre_space_chars)) {
/* 000512 */ 				(function () {
/* 000512 */ 					var __accu0__ = self;
/* 000514 */ 					return __call__ (__accu0__.push_pending_chars, __accu0__, __kwargtrans__ ({chars: tok.pre_space, pos: __sub__ (tok.pos, __call__ (len, null, tok.pre_space))}));
/* 000514 */ 				}) ();
/* 000516 */ 				var rewind_pre_space = false;
/* 000516 */ 			}
/* 000517 */ 			else {
/* 000518 */ 				var rewind_pre_space = true;
/* 000518 */ 			}
/* 000521 */ 			(function () {
/* 000521 */ 				var __accu0__ = token_reader;
/* 000521 */ 				return __call__ (__accu0__.move_to_token, __accu0__, tok, __kwargtrans__ ({rewind_pre_space: rewind_pre_space}));
/* 000521 */ 			}) ();
/* 000522 */ 			stop_exc.pos_end = tok.pos_end;
/* 000523 */ 			(function () {
/* 000523 */ 				var __accu0__ = logger;
/* 000523 */ 				return __call__ (__accu0__.debug, __accu0__, 'process_one_token(): stop token condition reached, exc=%r', stop_exc);
/* 000523 */ 			}) ();
/* 000524 */ 			var __except0__ = stop_exc;
/* 000524 */ 			__except0__.__cause__ = null;
/* 000524 */ 			throw __except0__;
/* 000524 */ 		}
/* 000528 */ 		if (__t__ (__eq__ (tok.tok, 'char'))) {
/* 000529 */ 			(function () {
/* 000529 */ 				var __accu0__ = self;
/* 000531 */ 				return __call__ (__accu0__.push_pending_chars, __accu0__, __kwargtrans__ ({chars: __add__ (tok.pre_space, tok.arg), pos: __sub__ (tok.pos, __call__ (len, null, tok.pre_space))}));
/* 000531 */ 			}) ();
/* 000533 */ 			return ;
/* 000533 */ 		}
/* 000537 */ 		if (__t__ (self._pending_chars)) {
/* 000538 */ 			self._pending_chars = __call__ (__iadd__, null, self._pending_chars, tok.pre_space);
/* 000539 */ 			tok.pre_space = '';
/* 000540 */ 			var stop_exc = (function () {
/* 000540 */ 				var __accu0__ = self;
/* 000540 */ 				return __call__ (__accu0__.flush_pending_chars, __accu0__);
/* 000540 */ 			}) ();
/* 000541 */ 			if (__t__ (stop_exc !== null)) {
/* 000545 */ 				(function () {
/* 000545 */ 					var __accu0__ = token_reader;
/* 000545 */ 					return __call__ (__accu0__.move_to_token, __accu0__, tok, __kwargtrans__ ({rewind_pre_space: false}));
/* 000545 */ 				}) ();
/* 000546 */ 				stop_exc.pos_end = tok.pos;
/* 000547 */ 				(function () {
/* 000547 */ 					var __accu0__ = logger;
/* 000547 */ 					return __call__ (__accu0__.debug, __accu0__, 'process_one_token(): stop condition reached (a), exc=%r', stop_exc);
/* 000547 */ 				}) ();
/* 000549 */ 				var __except0__ = stop_exc;
/* 000549 */ 				__except0__.__cause__ = null;
/* 000549 */ 				throw __except0__;
/* 000549 */ 			}
/* 000549 */ 		}
/* 000556 */ 		else if (__t__ (tok.pre_space)) {
/* 000557 */ 			var spacestrnode = (function () {
/* 000557 */ 				var __accu0__ = latex_walker;
/* 000560 */ 				return __call__ (__accu0__.make_node, __accu0__, LatexCharsNode, __kwargtrans__ ({parsing_state: self.parsing_state, chars: tok.pre_space, pos: __sub__ (tok.pos, __call__ (len, null, tok.pre_space)), pos_end: tok.pos}));
/* 000560 */ 			}) ();
/* 000562 */ 			tok.pre_space = '';
/* 000563 */ 			var stop_exc = (function () {
/* 000563 */ 				var __accu0__ = self;
/* 000563 */ 				return __call__ (__accu0__.push_to_nodelist, __accu0__, spacestrnode);
/* 000563 */ 			}) ();
/* 000564 */ 			if (__t__ (stop_exc !== null)) {
/* 000568 */ 				(function () {
/* 000568 */ 					var __accu0__ = token_reader;
/* 000568 */ 					return __call__ (__accu0__.move_to_token, __accu0__, tok, __kwargtrans__ ({rewind_pre_space: false}));
/* 000568 */ 				}) ();
/* 000569 */ 				stop_exc.pos_end = tok.pos;
/* 000570 */ 				(function () {
/* 000570 */ 					var __accu0__ = logger;
/* 000570 */ 					return __call__ (__accu0__.debug, __accu0__, 'process_one_token(): stop condition reached (b), exc=%r', stop_exc);
/* 000570 */ 				}) ();
/* 000572 */ 				var __except0__ = stop_exc;
/* 000572 */ 				__except0__.__cause__ = null;
/* 000572 */ 				throw __except0__;
/* 000572 */ 			}
/* 000572 */ 		}
/* 000579 */ 		if (__t__ (__eq__ (tok.tok, 'brace_close'))) {
/* 000581 */ 			var __except0__ = __call__ (LatexWalkerNodesParseError, null, __kwargtrans__ ({msg: (function () {
/* 000581 */ 				var __accu0__ = 'Unexpected mismatching closing delimiter ‘{}’';
/* 000581 */ 				return __call__ (__accu0__.format, __accu0__, tok.arg);
/* 000581 */ 			}) (), pos: tok.pos, recovery_past_token: tok, error_type_info: dict ({'what': 'nodes_unexpected_closing_group_delimiter', 'delimiter': tok.arg})}));
/* 000581 */ 			__except0__.__cause__ = null;
/* 000581 */ 			throw __except0__;
/* 000581 */ 		}
/* 000590 */ 		if (__t__ (__eq__ (tok.tok, 'end_environment'))) {
/* 000592 */ 			var __except0__ = __call__ (LatexWalkerNodesParseError, null, __kwargtrans__ ({msg: (function () {
/* 000592 */ 				var __accu0__ = 'Unexpected closing environment: ‘{}’';
/* 000592 */ 				return __call__ (__accu0__.format, __accu0__, tok.arg);
/* 000592 */ 			}) (), pos: tok.pos, recovery_past_token: tok, error_type_info: dict ({'what': 'nodes_unexpected_end_environment', 'environmentname': tok.arg})}));
/* 000592 */ 			__except0__.__cause__ = null;
/* 000592 */ 			throw __except0__;
/* 000592 */ 		}
/* 000601 */ 		if (__t__ (__t__ (__in__ (tok.tok, tuple (['mathmode_inline', 'mathmode_display']))) && !__in__ (tok.arg, self.parsing_state._math_delims_info_by_open))) {
/* 000605 */ 			var __except0__ = __call__ (LatexWalkerNodesParseError, null, __kwargtrans__ ({msg: (function () {
/* 000605 */ 				var __accu0__ = 'Unexpected closing math mode token ‘{}’';
/* 000605 */ 				return __call__ (__accu0__.format, __accu0__, tok.arg);
/* 000605 */ 			}) (), pos: tok.pos, recovery_past_token: tok, error_type_info: dict ({'what': 'nodes_unexpected_closing_math_delimiter', 'mathmode_type': tok.tok, 'delimiter': tok.arg})}));
/* 000605 */ 			__except0__.__cause__ = null;
/* 000605 */ 			throw __except0__;
/* 000605 */ 		}
/* 000619 */ 		if (__t__ (__eq__ (tok.tok, 'comment'))) {
/* 000620 */ 			(function () {
/* 000620 */ 				var __accu0__ = self;
/* 000620 */ 				return __call__ (__accu0__.parse_comment_node, __accu0__, tok);
/* 000620 */ 			}) ();
/* 000621 */ 			return ;
/* 000621 */ 		}
/* 000623 */ 		else if (__t__ (__eq__ (tok.tok, 'brace_open'))) {
/* 000625 */ 			(function () {
/* 000625 */ 				var __accu0__ = self;
/* 000625 */ 				return __call__ (__accu0__.parse_latex_group, __accu0__, tok);
/* 000625 */ 			}) ();
/* 000626 */ 			return ;
/* 000626 */ 		}
/* 000628 */ 		else if (__t__ (__eq__ (tok.tok, 'macro'))) {
/* 000630 */ 			(function () {
/* 000630 */ 				var __accu0__ = self;
/* 000630 */ 				return __call__ (__accu0__.parse_macro, __accu0__, tok);
/* 000630 */ 			}) ();
/* 000631 */ 			return ;
/* 000631 */ 		}
/* 000633 */ 		else if (__t__ (__eq__ (tok.tok, 'begin_environment'))) {
/* 000635 */ 			(function () {
/* 000635 */ 				var __accu0__ = self;
/* 000635 */ 				return __call__ (__accu0__.parse_environment, __accu0__, tok);
/* 000635 */ 			}) ();
/* 000636 */ 			return ;
/* 000636 */ 		}
/* 000638 */ 		else if (__t__ (__eq__ (tok.tok, 'specials'))) {
/* 000640 */ 			(function () {
/* 000640 */ 				var __accu0__ = self;
/* 000640 */ 				return __call__ (__accu0__.parse_specials, __accu0__, tok);
/* 000640 */ 			}) ();
/* 000641 */ 			return ;
/* 000641 */ 		}
/* 000643 */ 		else if (__t__ (__in__ (tok.tok, tuple (['mathmode_inline', 'mathmode_display'])))) {
/* 000645 */ 			(function () {
/* 000645 */ 				var __accu0__ = self;
/* 000645 */ 				return __call__ (__accu0__.parse_math, __accu0__, tok);
/* 000645 */ 			}) ();
/* 000646 */ 			return ;
/* 000646 */ 		}
/* 000647 */ 		else {
/* 000651 */ 			var __except0__ = __call__ (LatexWalkerParseError, null, (function () {
/* 000651 */ 				var __accu0__ = 'Unknown token type: {}';
/* 000651 */ 				return __call__ (__accu0__.format, __accu0__, tok.tok);
/* 000651 */ 			}) (), __kwargtrans__ ({pos: tok.pos}));
/* 000651 */ 			__except0__.__cause__ = null;
/* 000651 */ 			throw __except0__;
/* 000651 */ 		}
/* 000651 */ 	});},
/* 000663 */ 	get make_child_parsing_state () {return __get__ (this, function (self, parsing_state, node_class) {
/* 000663 */ 		if (arguments.length) {
/* 000663 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000663 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000663 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000663 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000663 */ 					switch (__attrib0__) {
/* 000663 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000663 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000663 */ 						case 'node_class': var node_class = __allkwargs0__ [__attrib0__]; break;
/* 000663 */ 					}
/* 000663 */ 				}
/* 000663 */ 			}
/* 000663 */ 		}
/* 000663 */ 		else {
/* 000663 */ 		}
/* 000670 */ 		if (__t__ (self._make_child_parsing_state_fn !== null)) {
/* 000671 */ 			return (function () {
/* 000671 */ 				var __accu0__ = self;
/* 000671 */ 				return __call__ (__accu0__._make_child_parsing_state_fn, __accu0__, __kwargtrans__ ({parsing_state: parsing_state, node_class: node_class}));
/* 000671 */ 			}) ();
/* 000671 */ 		}
/* 000673 */ 		return self.parsing_state;
/* 000673 */ 	});},
/* 000676 */ 	get parse_comment_node () {return __get__ (this, function (self, tok) {
/* 000676 */ 		if (arguments.length) {
/* 000676 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000676 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000676 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000676 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000676 */ 					switch (__attrib0__) {
/* 000676 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000676 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000676 */ 					}
/* 000676 */ 				}
/* 000676 */ 			}
/* 000676 */ 		}
/* 000676 */ 		else {
/* 000676 */ 		}
/* 000690 */ 		var commentnode = (function () {
/* 000690 */ 			var __accu0__ = self.latex_walker;
/* 000690 */ 			return __call__ (__accu0__.make_node, __accu0__, LatexCommentNode, __kwargtrans__ ({parsing_state: self.parsing_state, comment: tok.arg, comment_post_space: tok.post_space, pos: tok.pos, pos_end: tok.pos_end}));
/* 000690 */ 		}) ();
/* 000699 */ 		var stop_exc = (function () {
/* 000699 */ 			var __accu0__ = self;
/* 000699 */ 			return __call__ (__accu0__.push_to_nodelist, __accu0__, commentnode);
/* 000699 */ 		}) ();
/* 000700 */ 		if (__t__ (stop_exc !== null)) {
/* 000701 */ 			stop_exc.pos_end = tok.pos_end;
/* 000702 */ 			(function () {
/* 000702 */ 				var __accu0__ = logger;
/* 000702 */ 				return __call__ (__accu0__.debug, __accu0__, 'parse_comment_node(): stop_exc=%r', stop_exc);
/* 000702 */ 			}) ();
/* 000703 */ 			var __except0__ = stop_exc;
/* 000703 */ 			__except0__.__cause__ = null;
/* 000703 */ 			throw __except0__;
/* 000703 */ 		}
/* 000703 */ 	});},
/* 000706 */ 	get parse_latex_group () {return __get__ (this, function (self, tok) {
/* 000706 */ 		if (arguments.length) {
/* 000706 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000706 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000706 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000706 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000706 */ 					switch (__attrib0__) {
/* 000706 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000706 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000706 */ 					}
/* 000706 */ 				}
/* 000706 */ 			}
/* 000706 */ 		}
/* 000706 */ 		else {
/* 000706 */ 		}
/* 000722 */ 		(function () {
/* 000722 */ 			var __accu0__ = logger;
/* 000722 */ 			return __call__ (__accu0__.debug, __accu0__, 'nodes collector is now parsing a latex group, %r', tok);
/* 000722 */ 		}) ();
/* 000724 */ 		(function () {
/* 000724 */ 			var __accu0__ = self.token_reader;
/* 000724 */ 			return __call__ (__accu0__.move_to_token, __accu0__, tok, __kwargtrans__ ({rewind_pre_space: false}));
/* 000724 */ 		}) ();
/* 000726 */ 		var group_parser = (function () {
/* 000726 */ 			var __accu0__ = self.latex_walker;
/* 000726 */ 			return __call__ (__accu0__.make_latex_group_parser, __accu0__, __kwargtrans__ ({delimiters: tok.arg}));
/* 000726 */ 		}) ();
/* 000731 */ 		var __left0__ = (function () {
/* 000731 */ 			var __accu0__ = self.latex_walker;
/* 000734 */ 			return __call__ (__accu0__.parse_content, __accu0__, group_parser, __kwargtrans__ ({token_reader: self.token_reader, parsing_state: (function () {
/* 000734 */ 				var __accu1__ = self;
/* 000734 */ 				return __call__ (__accu1__.make_child_parsing_state, __accu1__, self.parsing_state, LatexGroupNode);
/* 000734 */ 			}) ()}));
/* 000734 */ 		}) ();
/* 000734 */ 		var groupnode = __left0__ [0];
/* 000734 */ 		var parsing_state_delta = __left0__ [1];
/* 000738 */ 		if (__t__ (parsing_state_delta !== null)) {
/* 000739 */ 			(function () {
/* 000739 */ 				var __accu0__ = logger;
/* 000739 */ 				return __call__ (__accu0__.warning, __accu0__, 'parsing_state_delta is ignored after parsing a LaTeX group: %r', parsing_state_delta);
/* 000739 */ 			}) ();
/* 000739 */ 		}
/* 000742 */ 		var stop_exc = (function () {
/* 000742 */ 			var __accu0__ = self;
/* 000742 */ 			return __call__ (__accu0__.push_to_nodelist, __accu0__, groupnode);
/* 000742 */ 		}) ();
/* 000743 */ 		if (__t__ (stop_exc !== null)) {
/* 000744 */ 			stop_exc.pos_end = groupnode.pos_end;
/* 000745 */ 			(function () {
/* 000745 */ 				var __accu0__ = logger;
/* 000745 */ 				return __call__ (__accu0__.debug, __accu0__, 'parse_latex_group(): stop_exc=%r', stop_exc);
/* 000745 */ 			}) ();
/* 000746 */ 			var __except0__ = stop_exc;
/* 000746 */ 			__except0__.__cause__ = null;
/* 000746 */ 			throw __except0__;
/* 000746 */ 		}
/* 000748 */ 		(function () {
/* 000748 */ 			var __accu0__ = logger;
/* 000748 */ 			return __call__ (__accu0__.debug, __accu0__, 'nodes collector finished parsing group → %r', groupnode);
/* 000748 */ 		}) ();
/* 000748 */ 	});},
/* 000751 */ 	get parse_macro () {return __get__ (this, function (self, tok) {
/* 000751 */ 		if (arguments.length) {
/* 000751 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000751 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000751 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000751 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000751 */ 					switch (__attrib0__) {
/* 000751 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000751 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000751 */ 					}
/* 000751 */ 				}
/* 000751 */ 			}
/* 000751 */ 		}
/* 000751 */ 		else {
/* 000751 */ 		}
/* 000766 */ 		var macroname = tok.arg;
/* 000768 */ 		var mspec = null;
/* 000769 */ 		if (__t__ (self.parsing_state.latex_context !== null)) {
/* 000770 */ 			var mspec = (function () {
/* 000770 */ 				var __accu0__ = self.parsing_state.latex_context;
/* 000770 */ 				return __call__ (__accu0__.get_macro_spec, __accu0__, macroname);
/* 000770 */ 			}) ();
/* 000770 */ 		}
/* 000772 */ 		if (__t__ (mspec === null)) {
/* 000773 */ 			var exc = (function () {
/* 000773 */ 				var __accu0__ = self.latex_walker;
/* 000775 */ 				return __call__ (__accu0__.check_tolerant_parsing_ignore_error, __accu0__, __call__ (LatexWalkerParseError, null, __kwargtrans__ ({msg: (function () {
/* 000775 */ 					var __accu1__ = 'Encountered unknown macro ‘\\{}’';
/* 000775 */ 					return __call__ (__accu1__.format, __accu1__, macroname);
/* 000775 */ 				}) (), pos: tok.pos, error_type_info: dict ({'what': 'nodes_unknown_macro_name', 'macroname': macroname})})));
/* 000775 */ 			}) ();
/* 000783 */ 			if (__t__ (exc !== null)) {
/* 000784 */ 				var __except0__ = exc;
/* 000784 */ 				__except0__.__cause__ = null;
/* 000784 */ 				throw __except0__;
/* 000784 */ 			}
/* 000785 */ 			var mspec = null;
/* 000785 */ 		}
/* 000787 */ 		var node_class = LatexMacroNode;
/* 000788 */ 		var what = (function () {
/* 000788 */ 			var __accu0__ = 'macro ‘\\{}’';
/* 000788 */ 			return __call__ (__accu0__.format, __accu0__, macroname);
/* 000788 */ 		}) ();
/* 000790 */ 		return (function () {
/* 000790 */ 			var __accu0__ = self;
/* 000790 */ 			return __call__ (__accu0__.parse_invocable_token_type, __accu0__, tok, mspec, node_class, what);
/* 000790 */ 		}) ();
/* 000790 */ 	});},
/* 000792 */ 	get parse_environment () {return __get__ (this, function (self, tok) {
/* 000792 */ 		if (arguments.length) {
/* 000792 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000792 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000792 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000792 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000792 */ 					switch (__attrib0__) {
/* 000792 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000792 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000792 */ 					}
/* 000792 */ 				}
/* 000792 */ 			}
/* 000792 */ 		}
/* 000792 */ 		else {
/* 000792 */ 		}
/* 000808 */ 		var latex_walker = self.latex_walker;
/* 000811 */ 		var environmentname = tok.arg;
/* 000815 */ 		var envspec = (function () {
/* 000815 */ 			var __accu0__ = self.parsing_state.latex_context;
/* 000815 */ 			return __call__ (__accu0__.get_environment_spec, __accu0__, environmentname);
/* 000815 */ 		}) ();
/* 000817 */ 		if (__t__ (envspec === null)) {
/* 000818 */ 			var exc = (function () {
/* 000818 */ 				var __accu0__ = latex_walker;
/* 000820 */ 				return __call__ (__accu0__.check_tolerant_parsing_ignore_error, __accu0__, __call__ (LatexWalkerParseError, null, __kwargtrans__ ({msg: (function () {
/* 000820 */ 					var __accu1__ = 'Encountered unknown environment ‘{}{}{}’';
/* 000820 */ 					return __call__ (__accu1__.format, __accu1__, '{', environmentname, '}');
/* 000820 */ 				}) (), pos: tok.pos, error_type_info: dict ({'what': 'nodes_unknown_environment_name', 'environmentname': environmentname})})));
/* 000820 */ 			}) ();
/* 000829 */ 			if (__t__ (exc !== null)) {
/* 000830 */ 				var __except0__ = exc;
/* 000830 */ 				__except0__.__cause__ = null;
/* 000830 */ 				throw __except0__;
/* 000830 */ 			}
/* 000831 */ 			var envspec = null;
/* 000831 */ 		}
/* 000833 */ 		var node_class = LatexEnvironmentNode;
/* 000834 */ 		var what = (function () {
/* 000834 */ 			var __accu0__ = 'environment ‘{}{}{}’';
/* 000834 */ 			return __call__ (__accu0__.format, __accu0__, '{', environmentname, '}');
/* 000834 */ 		}) ();
/* 000836 */ 		return (function () {
/* 000836 */ 			var __accu0__ = self;
/* 000836 */ 			return __call__ (__accu0__.parse_invocable_token_type, __accu0__, tok, envspec, node_class, what);
/* 000836 */ 		}) ();
/* 000836 */ 	});},
/* 000838 */ 	get parse_specials () {return __get__ (this, function (self, tok) {
/* 000838 */ 		if (arguments.length) {
/* 000838 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000838 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000838 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000838 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000838 */ 					switch (__attrib0__) {
/* 000838 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000838 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000838 */ 					}
/* 000838 */ 				}
/* 000838 */ 			}
/* 000838 */ 		}
/* 000838 */ 		else {
/* 000838 */ 		}
/* 000852 */ 		var specials_spec = tok.arg;
/* 000854 */ 		var node_class = LatexSpecialsNode;
/* 000855 */ 		var what = (function () {
/* 000855 */ 			var __accu0__ = 'specials ‘{}’';
/* 000855 */ 			return __call__ (__accu0__.format, __accu0__, __call__ (getattr, null, specials_spec, 'specials_chars', '<unkonwn>'));
/* 000855 */ 		}) ();
/* 000857 */ 		return (function () {
/* 000857 */ 			var __accu0__ = self;
/* 000857 */ 			return __call__ (__accu0__.parse_invocable_token_type, __accu0__, tok, specials_spec, node_class, what);
/* 000857 */ 		}) ();
/* 000857 */ 	});},
/* 000859 */ 	get parse_invocable_token_type () {return __get__ (this, function (self, tok, spec, node_class, what) {
/* 000859 */ 		if (arguments.length) {
/* 000859 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000859 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000859 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000859 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000859 */ 					switch (__attrib0__) {
/* 000859 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000859 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000859 */ 						case 'spec': var spec = __allkwargs0__ [__attrib0__]; break;
/* 000859 */ 						case 'node_class': var node_class = __allkwargs0__ [__attrib0__]; break;
/* 000859 */ 						case 'what': var what = __allkwargs0__ [__attrib0__]; break;
/* 000859 */ 					}
/* 000859 */ 				}
/* 000859 */ 			}
/* 000859 */ 		}
/* 000859 */ 		else {
/* 000859 */ 		}
/* 000879 */ 		var latex_walker = self.latex_walker;
/* 000880 */ 		var token_reader = self.token_reader;
/* 000882 */ 		if (__t__ (spec !== null)) {
/* 000883 */ 			var node_parser = (function () {
/* 000883 */ 				var __accu0__ = spec;
/* 000883 */ 				return __call__ (__accu0__.get_node_parser, __accu0__, tok);
/* 000883 */ 			}) ();
/* 000883 */ 		}
/* 000884 */ 		else {
/* 000885 */ 			var node_parser = null;
/* 000885 */ 		}
/* 000887 */ 		if (__t__ (node_parser === null)) {
/* 000889 */ 			var exc = (function () {
/* 000889 */ 				var __accu0__ = latex_walker;
/* 000891 */ 				return __call__ (__accu0__.check_tolerant_parsing_ignore_error, __accu0__, __call__ (LatexWalkerParseError, null, __kwargtrans__ ({msg: (function () {
/* 000891 */ 					var __accu1__ = 'No parser found for callable token {!r}';
/* 000891 */ 					return __call__ (__accu1__.format, __accu1__, tok);
/* 000891 */ 				}) (), pos: tok.pos})));
/* 000891 */ 			}) ();
/* 000895 */ 			if (__t__ (exc !== null)) {
/* 000896 */ 				(function () {
/* 000896 */ 					var __accu0__ = logger;
/* 000896 */ 					return __call__ (__accu0__.debug, __accu0__, 'parse_invocable_token_type(): no-parser error, exc=%r', exc);
/* 000896 */ 				}) ();
/* 000897 */ 				var __except0__ = exc;
/* 000897 */ 				__except0__.__cause__ = null;
/* 000897 */ 				throw __except0__;
/* 000897 */ 			}
/* 000898 */ 			var result_node = null;
/* 000899 */ 			var parsing_state_delta = null;
/* 000899 */ 		}
/* 000900 */ 		else {
/* 000903 */ 			var __left0__ = (function () {
/* 000903 */ 				var __accu0__ = latex_walker;
/* 000906 */ 				return __call__ (__accu0__.parse_content, __accu0__, node_parser, token_reader, (function () {
/* 000906 */ 					var __accu1__ = self;
/* 000906 */ 					return __call__ (__accu1__.make_child_parsing_state, __accu1__, self.parsing_state, node_class);
/* 000906 */ 				}) (), __kwargtrans__ ({open_context: tuple ([what, tok])}));
/* 000906 */ 			}) ();
/* 000906 */ 			var result_node = __left0__ [0];
/* 000906 */ 			var parsing_state_delta = __left0__ [1];
/* 000906 */ 		}
/* 000910 */ 		(function () {
/* 000910 */ 			var __accu0__ = self;
/* 000910 */ 			return __call__ (__accu0__.update_state_from_parsing_state_delta, __accu0__, parsing_state_delta);
/* 000910 */ 		}) ();
/* 000912 */ 		if (__t__ (result_node === null)) {
/* 000913 */ 			(function () {
/* 000913 */ 				var __accu0__ = logger;
/* 000913 */ 				return __call__ (__accu0__.warning, __accu0__, 'Parser %r produced no node (None) for token %r', node_parser, tok);
/* 000913 */ 			}) ();
/* 000914 */ 			return ;
/* 000914 */ 		}
/* 000916 */ 		var exc = (function () {
/* 000916 */ 			var __accu0__ = self;
/* 000916 */ 			return __call__ (__accu0__.push_to_nodelist, __accu0__, result_node);
/* 000916 */ 		}) ();
/* 000917 */ 		if (__t__ (exc !== null)) {
/* 000918 */ 			exc.pos_end = result_node.pos_end;
/* 000919 */ 			(function () {
/* 000919 */ 				var __accu0__ = logger;
/* 000919 */ 				return __call__ (__accu0__.debug, __accu0__, 'parse_invocable_token_type(): exc=%r', exc);
/* 000919 */ 			}) ();
/* 000920 */ 			var __except0__ = exc;
/* 000920 */ 			__except0__.__cause__ = null;
/* 000920 */ 			throw __except0__;
/* 000920 */ 		}
/* 000920 */ 	});},
/* 000923 */ 	get parse_math () {return __get__ (this, function (self, tok) {
/* 000923 */ 		if (arguments.length) {
/* 000923 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000923 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000923 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000923 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000923 */ 					switch (__attrib0__) {
/* 000923 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000923 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000923 */ 					}
/* 000923 */ 				}
/* 000923 */ 			}
/* 000923 */ 		}
/* 000923 */ 		else {
/* 000923 */ 		}
/* 000939 */ 		(function () {
/* 000939 */ 			var __accu0__ = self.token_reader;
/* 000939 */ 			return __call__ (__accu0__.move_to_token, __accu0__, tok, __kwargtrans__ ({rewind_pre_space: false}));
/* 000939 */ 		}) ();
/* 000944 */ 		var child_math_parsing_state = (function () {
/* 000944 */ 			var __accu0__ = self;
/* 000944 */ 			return __call__ (__accu0__.make_child_parsing_state, __accu0__, self.parsing_state, LatexMathNode);
/* 000944 */ 		}) ();
/* 000948 */ 		(function () {
/* 000948 */ 			var __accu0__ = logger;
/* 000948 */ 			return __call__ (__accu0__.debug, __accu0__, 'child_math_parsing_state = %r', child_math_parsing_state);
/* 000948 */ 		}) ();
/* 000950 */ 		var math_parser = (function () {
/* 000950 */ 			var __accu0__ = self.latex_walker;
/* 000950 */ 			return __call__ (__accu0__.make_latex_math_parser, __accu0__, __kwargtrans__ ({math_mode_delimiters: tok.arg}));
/* 000950 */ 		}) ();
/* 000956 */ 		var __left0__ = (function () {
/* 000956 */ 			var __accu0__ = self.latex_walker;
/* 000956 */ 			return __call__ (__accu0__.parse_content, __accu0__, math_parser, __kwargtrans__ ({token_reader: self.token_reader, parsing_state: child_math_parsing_state}));
/* 000956 */ 		}) ();
/* 000956 */ 		var mathnode = __left0__ [0];
/* 000956 */ 		var parsing_state_delta = __left0__ [1];
/* 000962 */ 		(function () {
/* 000962 */ 			var __accu0__ = self;
/* 000962 */ 			return __call__ (__accu0__.update_state_from_parsing_state_delta, __accu0__, parsing_state_delta);
/* 000962 */ 		}) ();
/* 000964 */ 		if (__t__ (mathnode === null)) {
/* 000965 */ 			(function () {
/* 000965 */ 				var __accu0__ = logger;
/* 000965 */ 				return __call__ (__accu0__.warning, __accu0__, 'Math parser produced no node (None) for token %r', tok);
/* 000965 */ 			}) ();
/* 000966 */ 			return ;
/* 000966 */ 		}
/* 000968 */ 		var stop_exc = (function () {
/* 000968 */ 			var __accu0__ = self;
/* 000968 */ 			return __call__ (__accu0__.push_to_nodelist, __accu0__, mathnode);
/* 000968 */ 		}) ();
/* 000969 */ 		if (__t__ (stop_exc !== null)) {
/* 000970 */ 			stop_exc.pos_end = mathnode.pos_end;
/* 000971 */ 			(function () {
/* 000971 */ 				var __accu0__ = logger;
/* 000971 */ 				return __call__ (__accu0__.debug, __accu0__, 'parse_math_node(): stop_exc=%r', stop_exc);
/* 000971 */ 			}) ();
/* 000972 */ 			var __except0__ = stop_exc;
/* 000972 */ 			__except0__.__cause__ = null;
/* 000972 */ 			throw __except0__;
/* 000972 */ 		}
/* 000972 */ 	});}
/* 000972 */ });
/* 000037 */ 
//# sourceMappingURL=pylatexenc.latexnodes._nodescollector.map