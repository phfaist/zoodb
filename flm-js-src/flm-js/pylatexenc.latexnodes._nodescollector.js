/* 000001 */ // Transcrypt'ed from Python, 2023-08-06 17:30:19
/* 000037 */ var logging = {};
/* 000037 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000044 */ import {ParsingStateDeltaEnterMathMode, ParsingStateDeltaReplaceParsingState, get_updated_parsing_state_from_delta} from './pylatexenc.latexnodes._parsingstatedelta.js';
/* 000041 */ import {LatexCharsNode, LatexCommentNode, LatexEnvironmentNode, LatexGroupNode, LatexMacroNode, LatexMathNode, LatexNode, LatexNodeList, LatexNodesVisitor, LatexSpecialsNode, LatexWalkerParseError, ParsedArguments, __all__, _get_content_as_chars, _unicode_from_str, _update_posposend_from_nodelist, latex_node_types} from './pylatexenc.latexnodes.nodes.js';
/* 000040 */ import {LatexWalkerEndOfStream, LatexWalkerError, LatexWalkerLocatedError, LatexWalkerLocatedErrorFormatter, LatexWalkerNodesParseError, LatexWalkerTokenParseError, _basestring, format_pos, to_str} from './pylatexenc.latexnodes._exctypes.js';
/* 000037 */ import * as __module_logging__ from './logging.js';
/* 000037 */ __nest__ (logging, '', __module_logging__);
/* 000037 */ export {LatexWalkerError, LatexGroupNode, LatexNode, LatexWalkerParseError, ParsingStateDeltaEnterMathMode, latex_node_types, _unicode_from_str, LatexNodesVisitor, LatexMacroNode, LatexNodeList, _basestring, LatexWalkerTokenParseError, LatexWalkerNodesParseError, __all__, _get_content_as_chars, LatexWalkerLocatedErrorFormatter, format_pos, ParsingStateDeltaReplaceParsingState, LatexCharsNode, LatexSpecialsNode, LatexWalkerLocatedError, _update_posposend_from_nodelist, to_str, LatexEnvironmentNode, get_updated_parsing_state_from_delta, LatexMathNode, LatexCommentNode, LatexWalkerEndOfStream, ParsedArguments};
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
/* 000158 */ 		if (__t__ (!__t__ ((self._finalized)))) {
/* 000159 */ 			var __except0__ = __call__ (RuntimeError, null, 'Call to get_final_nodelist() before finalize()');
/* 000159 */ 			__except0__.__cause__ = null;
/* 000159 */ 			throw __except0__;
/* 000159 */ 		}
/* 000161 */ 		return (function () {
/* 000161 */ 			var __accu0__ = self.latex_walker;
/* 000161 */ 			return __call__ (__accu0__.make_nodelist, __accu0__, __kwargtrans__ ({nodelist: self._nodelist, parsing_state: self.start_parsing_state}));
/* 000161 */ 		}) ();
/* 000161 */ 	});},
/* 000167 */ 	get get_parser_parsing_state_delta () {return __get__ (this, function (self) {
/* 000167 */ 		if (arguments.length) {
/* 000167 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000167 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000167 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000167 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000167 */ 					switch (__attrib0__) {
/* 000167 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000167 */ 					}
/* 000167 */ 				}
/* 000167 */ 			}
/* 000167 */ 		}
/* 000167 */ 		else {
/* 000167 */ 		}
/* 000171 */ 		if (__t__ (!__t__ ((self._finalized)))) {
/* 000172 */ 			var __except0__ = __call__ (RuntimeError, null, 'Call to get_parser_parsing_state_delta() before finalize()');
/* 000172 */ 			__except0__.__cause__ = null;
/* 000172 */ 			throw __except0__;
/* 000172 */ 		}
/* 000174 */ 		if (__t__ (self.start_parsing_state === self.parsing_state)) {
/* 000176 */ 			return null;
/* 000176 */ 		}
/* 000179 */ 		return __call__ (ParsingStateDeltaReplaceParsingState, null, __kwargtrans__ ({set_parsing_state: self.parsing_state}));
/* 000179 */ 	});},
/* 000182 */ 	get pos_start () {return __get__ (this, function (self) {
/* 000182 */ 		if (arguments.length) {
/* 000182 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000182 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000182 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000182 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000182 */ 					switch (__attrib0__) {
/* 000182 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000182 */ 					}
/* 000182 */ 				}
/* 000182 */ 			}
/* 000182 */ 		}
/* 000182 */ 		else {
/* 000182 */ 		}
/* 000187 */ 		try {
/* 000189 */ 			var p = __call__ (py_next, null, (function () {
/* 000189 */ 				var __accu0__ = [];
/* 000189 */ 				var __iterable0__ = self._nodelist;
/* 000189 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000189 */ 					var n = __getitem__ (__iterable0__, __index0__);
/* 000189 */ 					if (__t__ (n !== null)) {
/* 000189 */ 						(function () {
/* 000189 */ 							var __accu1__ = __accu0__;
/* 000189 */ 							return __call__ (__accu1__.append, __accu1__, n.pos);
/* 000189 */ 						}) ();
/* 000189 */ 					}
/* 000189 */ 				}
/* 000189 */ 				return py_iter (__accu0__);
/* 000189 */ 			}) ());
/* 000189 */ 		}
/* 000189 */ 		catch (__except0__) {
/* 000189 */ 			if (isinstance (__except0__, StopIteration)) {
/* 000191 */ 				var p = null;
/* 000191 */ 			}
/* 000191 */ 			else {
/* 000191 */ 				throw __except0__;
/* 000191 */ 			}
/* 000191 */ 		}
/* 000192 */ 		if (__t__ (p !== null)) {
/* 000193 */ 			return p;
/* 000193 */ 		}
/* 000194 */ 		return self._pending_chars_pos;
/* 000194 */ 	});},
/* 000196 */ 	get pos_end () {return __get__ (this, function (self) {
/* 000196 */ 		if (arguments.length) {
/* 000196 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000196 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000196 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000196 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000196 */ 					switch (__attrib0__) {
/* 000196 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000196 */ 					}
/* 000196 */ 				}
/* 000196 */ 			}
/* 000196 */ 		}
/* 000196 */ 		else {
/* 000196 */ 		}
/* 000201 */ 		try {
/* 000203 */ 			var lastnode = __call__ (py_next, null, (function () {
/* 000203 */ 				var __accu0__ = [];
/* 000203 */ 				var __iterable0__ = __call__ (py_reversed, null, self._nodelist);
/* 000203 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000203 */ 					var n = __getitem__ (__iterable0__, __index0__);
/* 000203 */ 					if (__t__ (n !== null)) {
/* 000203 */ 						(function () {
/* 000203 */ 							var __accu1__ = __accu0__;
/* 000203 */ 							return __call__ (__accu1__.append, __accu1__, n);
/* 000203 */ 						}) ();
/* 000203 */ 					}
/* 000203 */ 				}
/* 000203 */ 				return py_iter (__accu0__);
/* 000203 */ 			}) ());
/* 000203 */ 		}
/* 000203 */ 		catch (__except0__) {
/* 000203 */ 			if (isinstance (__except0__, StopIteration)) {
/* 000205 */ 				var lastnode = null;
/* 000205 */ 			}
/* 000205 */ 			else {
/* 000205 */ 				throw __except0__;
/* 000205 */ 			}
/* 000205 */ 		}
/* 000206 */ 		if (__t__ (lastnode === null)) {
/* 000207 */ 			return null;
/* 000207 */ 		}
/* 000208 */ 		return lastnode.pos_end;
/* 000208 */ 	});},
/* 000211 */ 	get stop_token_condition_met () {return __get__ (this, function (self) {
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
/* 000216 */ 		return self._stop_token_condition_met;
/* 000216 */ 	});},
/* 000218 */ 	get stop_token_condition_met_token () {return __get__ (this, function (self) {
/* 000218 */ 		if (arguments.length) {
/* 000218 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000218 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000218 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000218 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000218 */ 					switch (__attrib0__) {
/* 000218 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000218 */ 					}
/* 000218 */ 				}
/* 000218 */ 			}
/* 000218 */ 		}
/* 000218 */ 		else {
/* 000218 */ 		}
/* 000222 */ 		return self._stop_token_condition_met_token;
/* 000222 */ 	});},
/* 000224 */ 	get stop_nodelist_condition_met () {return __get__ (this, function (self) {
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
/* 000229 */ 		return self._stop_nodelist_condition_met;
/* 000229 */ 	});},
/* 000231 */ 	get stop_condition_stop_data () {return __get__ (this, function (self) {
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
/* 000236 */ 		return self._stop_condition_stop_data;
/* 000236 */ 	});},
/* 000238 */ 	get reached_end_of_stream () {return __get__ (this, function (self) {
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
/* 000242 */ 		return self._reached_end_of_stream;
/* 000242 */ 	});},
/* 000245 */ 	get is_finalized () {return __get__ (this, function (self) {
/* 000245 */ 		if (arguments.length) {
/* 000245 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000245 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000245 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000245 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000245 */ 					switch (__attrib0__) {
/* 000245 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000245 */ 					}
/* 000245 */ 				}
/* 000245 */ 			}
/* 000245 */ 		}
/* 000245 */ 		else {
/* 000245 */ 		}
/* 000252 */ 		return self._finalized;
/* 000252 */ 	});},
/* 000254 */ 	get finalize () {return __get__ (this, function (self) {
/* 000254 */ 		if (arguments.length) {
/* 000254 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000254 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000254 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000254 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000254 */ 					switch (__attrib0__) {
/* 000254 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000254 */ 					}
/* 000254 */ 				}
/* 000254 */ 			}
/* 000254 */ 		}
/* 000254 */ 		else {
/* 000254 */ 		}
/* 000268 */ 		if (__t__ (self._finalized)) {
/* 000269 */ 			return ;
/* 000269 */ 		}
/* 000271 */ 		var exc = (function () {
/* 000271 */ 			var __accu0__ = self;
/* 000271 */ 			return __call__ (__accu0__.flush_pending_chars, __accu0__);
/* 000271 */ 		}) ();
/* 000273 */ 		self._finalized = true;
/* 000275 */ 		if (__t__ (exc !== null)) {
/* 000276 */ 			(function () {
/* 000276 */ 				var __accu0__ = logger;
/* 000276 */ 				return __call__ (__accu0__.debug, __accu0__, 'finalize(): raising exc=%r', exc);
/* 000276 */ 			}) ();
/* 000277 */ 			var __except0__ = exc;
/* 000277 */ 			__except0__.__cause__ = null;
/* 000277 */ 			throw __except0__;
/* 000277 */ 		}
/* 000277 */ 	});},
/* 000287 */ 	get push_pending_chars () {return __get__ (this, function (self, chars, pos) {
/* 000287 */ 		if (arguments.length) {
/* 000287 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000287 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000287 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000287 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000287 */ 					switch (__attrib0__) {
/* 000287 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000287 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000287 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000287 */ 					}
/* 000287 */ 				}
/* 000287 */ 			}
/* 000287 */ 		}
/* 000287 */ 		else {
/* 000287 */ 		}
/* 000295 */ 		self._pending_chars = __call__ (__iadd__, null, self._pending_chars, chars);
/* 000296 */ 		if (__t__ (self._pending_chars_pos === null)) {
/* 000297 */ 			self._pending_chars_pos = pos;
/* 000297 */ 		}
/* 000297 */ 	});},
/* 000299 */ 	get flush_pending_chars () {return __get__ (this, function (self) {
/* 000299 */ 		if (arguments.length) {
/* 000299 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000299 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000299 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000299 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000299 */ 					switch (__attrib0__) {
/* 000299 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000299 */ 					}
/* 000299 */ 				}
/* 000299 */ 			}
/* 000299 */ 		}
/* 000299 */ 		else {
/* 000299 */ 		}
/* 000307 */ 		if (__t__ (!__t__ ((self._pending_chars)))) {
/* 000309 */ 			return null;
/* 000309 */ 		}
/* 000311 */ 		var __left0__ = tuple ([self._pending_chars_pos, self._pending_chars]);
/* 000311 */ 		var charspos = __left0__ [0];
/* 000311 */ 		var chars = __left0__ [1];
/* 000312 */ 		self._pending_chars = '';
/* 000313 */ 		self._pending_chars_pos = null;
/* 000315 */ 		var strnode = (function () {
/* 000315 */ 			var __accu0__ = self.latex_walker;
/* 000320 */ 			return __call__ (__accu0__.make_node, __accu0__, LatexCharsNode, __kwargtrans__ ({parsing_state: self.parsing_state, chars: chars, pos: charspos, pos_end: __add__ (charspos, __call__ (len, null, chars))}));
/* 000320 */ 		}) ();
/* 000322 */ 		return (function () {
/* 000322 */ 			var __accu0__ = self;
/* 000322 */ 			return __call__ (__accu0__.push_to_nodelist, __accu0__, strnode);
/* 000322 */ 		}) ();
/* 000322 */ 	});},
/* 000324 */ 	get push_to_nodelist () {return __get__ (this, function (self, node) {
/* 000324 */ 		if (arguments.length) {
/* 000324 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000324 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000324 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000324 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000324 */ 					switch (__attrib0__) {
/* 000324 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000324 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000324 */ 					}
/* 000324 */ 				}
/* 000324 */ 			}
/* 000324 */ 		}
/* 000324 */ 		else {
/* 000324 */ 		}
/* 000331 */ 		if (__t__ (self._finalized)) {
/* 000332 */ 			var __except0__ = __call__ (RuntimeError, null, 'You already called finalize()');
/* 000332 */ 			__except0__.__cause__ = null;
/* 000332 */ 			throw __except0__;
/* 000332 */ 		}
/* 000334 */ 		(function () {
/* 000334 */ 			var __accu0__ = self._nodelist;
/* 000334 */ 			return __call__ (__accu0__.append, __accu0__, node);
/* 000334 */ 		}) ();
/* 000336 */ 		var exc = (function () {
/* 000336 */ 			var __accu0__ = self;
/* 000336 */ 			return __call__ (__accu0__._check_nodelist_stop_condition, __accu0__);
/* 000336 */ 		}) ();
/* 000337 */ 		if (__t__ (exc !== null)) {
/* 000338 */ 			return exc;
/* 000338 */ 		}
/* 000339 */ 		return null;
/* 000339 */ 	});},
/* 000342 */ 	get update_state_from_parsing_state_delta () {return __get__ (this, function (self, parsing_state_delta) {
/* 000342 */ 		if (arguments.length) {
/* 000342 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000342 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000342 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000342 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000342 */ 					switch (__attrib0__) {
/* 000342 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000342 */ 						case 'parsing_state_delta': var parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000342 */ 					}
/* 000342 */ 				}
/* 000342 */ 			}
/* 000342 */ 		}
/* 000342 */ 		else {
/* 000342 */ 		}
/* 000351 */ 		if (__t__ (parsing_state_delta !== null)) {
/* 000352 */ 			var ps = self.parsing_state;
/* 000354 */ 			self.parsing_state = (function () {
/* 000354 */ 				var __accu0__ = parsing_state_delta;
/* 000354 */ 				return __call__ (__accu0__.get_updated_parsing_state, __accu0__, self.parsing_state, self.latex_walker);
/* 000354 */ 			}) ();
/* 000359 */ 			(function () {
/* 000359 */ 				var __accu0__ = logger;
/* 000359 */ 				return __call__ (__accu0__.debug, __accu0__, 'Updated parsing state using parsing_state_delta %r: %r →→→ %r', parsing_state_delta, ps, self.parsing_state);
/* 000359 */ 			}) ();
/* 000359 */ 		}
/* 000359 */ 	});},
/* 000367 */ 	get _check_nodelist_stop_condition () {return __get__ (this, function (self) {
/* 000367 */ 		if (arguments.length) {
/* 000367 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000367 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000367 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000367 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000367 */ 					switch (__attrib0__) {
/* 000367 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000367 */ 					}
/* 000367 */ 				}
/* 000367 */ 			}
/* 000367 */ 		}
/* 000367 */ 		else {
/* 000367 */ 		}
/* 000368 */ 		var stop_nodelist_condition = self.stop_nodelist_condition;
/* 000369 */ 		if (__t__ (stop_nodelist_condition !== null)) {
/* 000370 */ 			var stop_data = __call__ (stop_nodelist_condition, null, self._nodelist);
/* 000371 */ 			if (__t__ (stop_data)) {
/* 000372 */ 				self._stop_nodelist_condition_met = true;
/* 000373 */ 				(function () {
/* 000373 */ 					var __accu0__ = logger;
/* 000373 */ 					return __call__ (__accu0__.debug, __accu0__, 'nodes collector reached nodelist stop condition; nodelist = %r', self._nodelist);
/* 000373 */ 				}) ();
/* 000375 */ 				return (function () {
/* 000375 */ 					var __accu0__ = LatexNodesCollector;
/* 000375 */ 					return __call__ (__accu0__.ReachedStoppingCondition, __accu0__, __kwargtrans__ ({stop_data: stop_data}));
/* 000375 */ 				}) ();
/* 000375 */ 			}
/* 000375 */ 		}
/* 000376 */ 		return null;
/* 000376 */ 	});},
/* 000378 */ 	get _check_token_stop_condition () {return __get__ (this, function (self, tok) {
/* 000378 */ 		if (arguments.length) {
/* 000378 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000378 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000378 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000378 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000378 */ 					switch (__attrib0__) {
/* 000378 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000378 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000378 */ 					}
/* 000378 */ 				}
/* 000378 */ 			}
/* 000378 */ 		}
/* 000378 */ 		else {
/* 000378 */ 		}
/* 000379 */ 		var stop_token_condition = self.stop_token_condition;
/* 000380 */ 		if (__t__ (stop_token_condition !== null)) {
/* 000381 */ 			var stop_data = __call__ (stop_token_condition, null, tok);
/* 000382 */ 			if (__t__ (stop_data)) {
/* 000383 */ 				self._stop_token_condition_met = true;
/* 000384 */ 				self._stop_token_condition_met_token = tok;
/* 000385 */ 				(function () {
/* 000385 */ 					var __accu0__ = logger;
/* 000385 */ 					return __call__ (__accu0__.debug, __accu0__, 'nodes collector reached token stop condition; tok = %r, current node list = %r', tok, self._nodelist);
/* 000385 */ 				}) ();
/* 000388 */ 				return (function () {
/* 000388 */ 					var __accu0__ = LatexNodesCollector;
/* 000388 */ 					return __call__ (__accu0__.ReachedStoppingCondition, __accu0__, __kwargtrans__ ({stop_data: stop_data}));
/* 000388 */ 				}) ();
/* 000388 */ 			}
/* 000388 */ 		}
/* 000389 */ 		return null;
/* 000389 */ 	});},
/* 000392 */ 	get process_tokens () {return __get__ (this, function (self) {
/* 000392 */ 		if (arguments.length) {
/* 000392 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000392 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000392 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000392 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000392 */ 					switch (__attrib0__) {
/* 000392 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000392 */ 					}
/* 000392 */ 				}
/* 000392 */ 			}
/* 000392 */ 		}
/* 000392 */ 		else {
/* 000392 */ 		}
/* 000413 */ 		try {
/* 000414 */ 			while (__t__ (true)) {
/* 000415 */ 				(function () {
/* 000415 */ 					var __accu0__ = self;
/* 000415 */ 					return __call__ (__accu0__.process_one_token, __accu0__);
/* 000415 */ 				}) ();
/* 000415 */ 			}
/* 000415 */ 		}
/* 000415 */ 		catch (__except0__) {
/* 000415 */ 			if (isinstance (__except0__, LatexNodesCollector.ReachedStoppingCondition)) {
/* 000415 */ 				var e = __except0__;
/* 000419 */ 				self._stop_condition_stop_data = e.stop_data;
/* 000420 */ 				(function () {
/* 000420 */ 					var __accu0__ = logger;
/* 000420 */ 					return __call__ (__accu0__.debug, __accu0__, 'nodes collector process_tokens() reached stop condition');
/* 000420 */ 				}) ();
/* 000421 */ 				return ;
/* 000421 */ 			}
/* 000421 */ 			else if (isinstance (__except0__, LatexNodesCollector.ReachedEndOfStream)) {
/* 000421 */ 				var e = __except0__;
/* 000426 */ 				self._reached_end_of_stream = true;
/* 000427 */ 				(function () {
/* 000427 */ 					var __accu0__ = logger;
/* 000427 */ 					return __call__ (__accu0__.debug, __accu0__, 'nodes collector process_tokens() reached end of stream');
/* 000427 */ 				}) ();
/* 000428 */ 				return ;
/* 000428 */ 			}
/* 000428 */ 			else if (isinstance (__except0__, LatexWalkerError)) {
/* 000428 */ 				var e = __except0__;
/* 000432 */ 				(function () {
/* 000432 */ 					var __accu0__ = logger;
/* 000432 */ 					return __call__ (__accu0__.debug, __accu0__, 'process_tokens() - relaying error -- %r', e);
/* 000432 */ 				}) ();
/* 000433 */ 				__except0__.__cause__ = null;
/* 000433 */ 				throw __except0__;
/* 000433 */ 			}
/* 000433 */ 			else {
/* 000433 */ 				throw __except0__;
/* 000433 */ 			}
/* 000433 */ 		}
/* 000433 */ 		finally {
/* 000436 */ 			(function () {
/* 000436 */ 				var __accu0__ = self;
/* 000436 */ 				return __call__ (__accu0__.finalize, __accu0__);
/* 000436 */ 			}) ();
/* 000436 */ 		}
/* 000436 */ 	});},
/* 000441 */ 	get process_one_token () {return __get__ (this, function (self) {
/* 000441 */ 		if (arguments.length) {
/* 000441 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000441 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000441 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000441 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000441 */ 					switch (__attrib0__) {
/* 000441 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000441 */ 					}
/* 000441 */ 				}
/* 000441 */ 			}
/* 000441 */ 		}
/* 000441 */ 		else {
/* 000441 */ 		}
/* 000480 */ 		if (__t__ (self._finalized)) {
/* 000481 */ 			var __except0__ = __call__ (RuntimeError, null, 'You already called finalize()');
/* 000481 */ 			__except0__.__cause__ = null;
/* 000481 */ 			throw __except0__;
/* 000481 */ 		}
/* 000483 */ 		var latex_walker = self.latex_walker;
/* 000484 */ 		var token_reader = self.token_reader;
/* 000486 */ 		try {
/* 000488 */ 			var tok = (function () {
/* 000488 */ 				var __accu0__ = token_reader;
/* 000488 */ 				return __call__ (__accu0__.next_token, __accu0__, __kwargtrans__ ({parsing_state: self.parsing_state}));
/* 000488 */ 			}) ();
/* 000489 */ 			(function () {
/* 000489 */ 				var __accu0__ = logger;
/* 000489 */ 				return __call__ (__accu0__.debug, __accu0__, 'nodes collector read token %r', tok);
/* 000489 */ 			}) ();
/* 000489 */ 		}
/* 000489 */ 		catch (__except0__) {
/* 000489 */ 			if (isinstance (__except0__, LatexWalkerEndOfStream)) {
/* 000489 */ 				var e = __except0__;
/* 000492 */ 				var final_space = __call__ (getattr, null, e, 'final_space', null);
/* 000493 */ 				if (__t__ (final_space)) {
/* 000495 */ 					var final_space_pos = __add__ ((function () {
/* 000495 */ 						var __accu0__ = token_reader;
/* 000495 */ 						return __call__ (__accu0__.cur_pos, __accu0__);
/* 000495 */ 					}) (), __call__ (len, null, final_space));
/* 000496 */ 					var tok = (function () {
/* 000496 */ 						var __accu0__ = token_reader;
/* 000496 */ 						return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: 'char', arg: '', pre_space: final_space, pos: final_space_pos, pos_end: final_space_pos}));
/* 000496 */ 					}) ();
/* 000503 */ 					(function () {
/* 000503 */ 						var __accu0__ = token_reader;
/* 000503 */ 						return __call__ (__accu0__.move_past_token, __accu0__, tok);
/* 000503 */ 					}) ();
/* 000503 */ 				}
/* 000504 */ 				else {
/* 000506 */ 					var exc = (function () {
/* 000506 */ 						var __accu0__ = LatexNodesCollector;
/* 000506 */ 						return __call__ (__accu0__.ReachedEndOfStream, __accu0__);
/* 000506 */ 					}) ();
/* 000507 */ 					exc.pos_end = (function () {
/* 000507 */ 						var __accu0__ = token_reader;
/* 000507 */ 						return __call__ (__accu0__.cur_pos, __accu0__);
/* 000507 */ 					}) ();
/* 000508 */ 					(function () {
/* 000508 */ 						var __accu0__ = logger;
/* 000508 */ 						return __call__ (__accu0__.debug, __accu0__, 'process_one_token(): reached end of stream, exc=%r', exc);
/* 000508 */ 					}) ();
/* 000509 */ 					var __except1__ = exc;
/* 000509 */ 					__except1__.__cause__ = null;
/* 000509 */ 					throw __except1__;
/* 000509 */ 				}
/* 000509 */ 			}
/* 000509 */ 			else {
/* 000509 */ 				throw __except0__;
/* 000509 */ 			}
/* 000509 */ 		}
/* 000514 */ 		var stop_exc = (function () {
/* 000514 */ 			var __accu0__ = self;
/* 000514 */ 			return __call__ (__accu0__._check_token_stop_condition, __accu0__, tok);
/* 000514 */ 		}) ();
/* 000515 */ 		if (__t__ (stop_exc !== null)) {
/* 000516 */ 			if (__t__ (self.include_stop_token_pre_space_chars)) {
/* 000519 */ 				(function () {
/* 000519 */ 					var __accu0__ = self;
/* 000521 */ 					return __call__ (__accu0__.push_pending_chars, __accu0__, __kwargtrans__ ({chars: tok.pre_space, pos: __sub__ (tok.pos, __call__ (len, null, tok.pre_space))}));
/* 000521 */ 				}) ();
/* 000523 */ 				var rewind_pre_space = false;
/* 000523 */ 			}
/* 000524 */ 			else {
/* 000525 */ 				var rewind_pre_space = true;
/* 000525 */ 			}
/* 000528 */ 			(function () {
/* 000528 */ 				var __accu0__ = token_reader;
/* 000528 */ 				return __call__ (__accu0__.move_to_token, __accu0__, tok, __kwargtrans__ ({rewind_pre_space: rewind_pre_space}));
/* 000528 */ 			}) ();
/* 000529 */ 			stop_exc.pos_end = tok.pos_end;
/* 000530 */ 			(function () {
/* 000530 */ 				var __accu0__ = logger;
/* 000530 */ 				return __call__ (__accu0__.debug, __accu0__, 'process_one_token(): stop token condition reached, exc=%r', stop_exc);
/* 000530 */ 			}) ();
/* 000531 */ 			var __except0__ = stop_exc;
/* 000531 */ 			__except0__.__cause__ = null;
/* 000531 */ 			throw __except0__;
/* 000531 */ 		}
/* 000535 */ 		if (__t__ (__eq__ (tok.tok, 'char'))) {
/* 000536 */ 			(function () {
/* 000536 */ 				var __accu0__ = self;
/* 000538 */ 				return __call__ (__accu0__.push_pending_chars, __accu0__, __kwargtrans__ ({chars: __add__ (tok.pre_space, tok.arg), pos: __sub__ (tok.pos, __call__ (len, null, tok.pre_space))}));
/* 000538 */ 			}) ();
/* 000540 */ 			return ;
/* 000540 */ 		}
/* 000544 */ 		if (__t__ (self._pending_chars)) {
/* 000545 */ 			self._pending_chars = __call__ (__iadd__, null, self._pending_chars, tok.pre_space);
/* 000546 */ 			tok.pre_space = '';
/* 000547 */ 			var stop_exc = (function () {
/* 000547 */ 				var __accu0__ = self;
/* 000547 */ 				return __call__ (__accu0__.flush_pending_chars, __accu0__);
/* 000547 */ 			}) ();
/* 000548 */ 			if (__t__ (stop_exc !== null)) {
/* 000552 */ 				(function () {
/* 000552 */ 					var __accu0__ = token_reader;
/* 000552 */ 					return __call__ (__accu0__.move_to_token, __accu0__, tok, __kwargtrans__ ({rewind_pre_space: false}));
/* 000552 */ 				}) ();
/* 000553 */ 				stop_exc.pos_end = tok.pos;
/* 000554 */ 				(function () {
/* 000554 */ 					var __accu0__ = logger;
/* 000554 */ 					return __call__ (__accu0__.debug, __accu0__, 'process_one_token(): stop condition reached (a), exc=%r', stop_exc);
/* 000554 */ 				}) ();
/* 000556 */ 				var __except0__ = stop_exc;
/* 000556 */ 				__except0__.__cause__ = null;
/* 000556 */ 				throw __except0__;
/* 000556 */ 			}
/* 000556 */ 		}
/* 000563 */ 		else if (__t__ (tok.pre_space)) {
/* 000564 */ 			var spacestrnode = (function () {
/* 000564 */ 				var __accu0__ = latex_walker;
/* 000567 */ 				return __call__ (__accu0__.make_node, __accu0__, LatexCharsNode, __kwargtrans__ ({parsing_state: self.parsing_state, chars: tok.pre_space, pos: __sub__ (tok.pos, __call__ (len, null, tok.pre_space)), pos_end: tok.pos}));
/* 000567 */ 			}) ();
/* 000569 */ 			tok.pre_space = '';
/* 000570 */ 			var stop_exc = (function () {
/* 000570 */ 				var __accu0__ = self;
/* 000570 */ 				return __call__ (__accu0__.push_to_nodelist, __accu0__, spacestrnode);
/* 000570 */ 			}) ();
/* 000571 */ 			if (__t__ (stop_exc !== null)) {
/* 000575 */ 				(function () {
/* 000575 */ 					var __accu0__ = token_reader;
/* 000575 */ 					return __call__ (__accu0__.move_to_token, __accu0__, tok, __kwargtrans__ ({rewind_pre_space: false}));
/* 000575 */ 				}) ();
/* 000576 */ 				stop_exc.pos_end = tok.pos;
/* 000577 */ 				(function () {
/* 000577 */ 					var __accu0__ = logger;
/* 000577 */ 					return __call__ (__accu0__.debug, __accu0__, 'process_one_token(): stop condition reached (b), exc=%r', stop_exc);
/* 000577 */ 				}) ();
/* 000579 */ 				var __except0__ = stop_exc;
/* 000579 */ 				__except0__.__cause__ = null;
/* 000579 */ 				throw __except0__;
/* 000579 */ 			}
/* 000579 */ 		}
/* 000586 */ 		if (__t__ (__eq__ (tok.tok, 'brace_close'))) {
/* 000588 */ 			var __except0__ = __call__ (LatexWalkerNodesParseError, null, __kwargtrans__ ({msg: (function () {
/* 000588 */ 				var __accu0__ = 'Unexpected mismatching closing delimiter ‘{}’';
/* 000588 */ 				return __call__ (__accu0__.format, __accu0__, tok.arg);
/* 000588 */ 			}) (), pos: tok.pos, recovery_past_token: tok, error_type_info: dict ({'what': 'nodes_unexpected_closing_group_delimiter', 'delimiter': tok.arg})}));
/* 000588 */ 			__except0__.__cause__ = null;
/* 000588 */ 			throw __except0__;
/* 000588 */ 		}
/* 000597 */ 		if (__t__ (__eq__ (tok.tok, 'end_environment'))) {
/* 000599 */ 			var __except0__ = __call__ (LatexWalkerNodesParseError, null, __kwargtrans__ ({msg: (function () {
/* 000599 */ 				var __accu0__ = 'Unexpected closing environment: ‘{}’';
/* 000599 */ 				return __call__ (__accu0__.format, __accu0__, tok.arg);
/* 000599 */ 			}) (), pos: tok.pos, recovery_past_token: tok, error_type_info: dict ({'what': 'nodes_unexpected_end_environment', 'environmentname': tok.arg})}));
/* 000599 */ 			__except0__.__cause__ = null;
/* 000599 */ 			throw __except0__;
/* 000599 */ 		}
/* 000608 */ 		if (__t__ (__t__ (__in__ (tok.tok, tuple (['mathmode_inline', 'mathmode_display']))) && !__in__ (tok.arg, self.parsing_state._math_delims_info_by_open))) {
/* 000612 */ 			var __except0__ = __call__ (LatexWalkerNodesParseError, null, __kwargtrans__ ({msg: (function () {
/* 000612 */ 				var __accu0__ = 'Unexpected closing math mode token ‘{}’';
/* 000612 */ 				return __call__ (__accu0__.format, __accu0__, tok.arg);
/* 000612 */ 			}) (), pos: tok.pos, recovery_past_token: tok, error_type_info: dict ({'what': 'nodes_unexpected_closing_math_delimiter', 'mathmode_type': tok.tok, 'delimiter': tok.arg})}));
/* 000612 */ 			__except0__.__cause__ = null;
/* 000612 */ 			throw __except0__;
/* 000612 */ 		}
/* 000626 */ 		if (__t__ (__eq__ (tok.tok, 'comment'))) {
/* 000627 */ 			(function () {
/* 000627 */ 				var __accu0__ = self;
/* 000627 */ 				return __call__ (__accu0__.parse_comment_node, __accu0__, tok);
/* 000627 */ 			}) ();
/* 000628 */ 			return ;
/* 000628 */ 		}
/* 000630 */ 		else if (__t__ (__eq__ (tok.tok, 'brace_open'))) {
/* 000632 */ 			(function () {
/* 000632 */ 				var __accu0__ = self;
/* 000632 */ 				return __call__ (__accu0__.parse_latex_group, __accu0__, tok);
/* 000632 */ 			}) ();
/* 000633 */ 			return ;
/* 000633 */ 		}
/* 000635 */ 		else if (__t__ (__eq__ (tok.tok, 'macro'))) {
/* 000637 */ 			(function () {
/* 000637 */ 				var __accu0__ = self;
/* 000637 */ 				return __call__ (__accu0__.parse_macro, __accu0__, tok);
/* 000637 */ 			}) ();
/* 000638 */ 			return ;
/* 000638 */ 		}
/* 000640 */ 		else if (__t__ (__eq__ (tok.tok, 'begin_environment'))) {
/* 000642 */ 			(function () {
/* 000642 */ 				var __accu0__ = self;
/* 000642 */ 				return __call__ (__accu0__.parse_environment, __accu0__, tok);
/* 000642 */ 			}) ();
/* 000643 */ 			return ;
/* 000643 */ 		}
/* 000645 */ 		else if (__t__ (__eq__ (tok.tok, 'specials'))) {
/* 000647 */ 			(function () {
/* 000647 */ 				var __accu0__ = self;
/* 000647 */ 				return __call__ (__accu0__.parse_specials, __accu0__, tok);
/* 000647 */ 			}) ();
/* 000648 */ 			return ;
/* 000648 */ 		}
/* 000650 */ 		else if (__t__ (__in__ (tok.tok, tuple (['mathmode_inline', 'mathmode_display'])))) {
/* 000652 */ 			(function () {
/* 000652 */ 				var __accu0__ = self;
/* 000652 */ 				return __call__ (__accu0__.parse_math, __accu0__, tok);
/* 000652 */ 			}) ();
/* 000653 */ 			return ;
/* 000653 */ 		}
/* 000654 */ 		else {
/* 000658 */ 			var __except0__ = __call__ (LatexWalkerParseError, null, (function () {
/* 000658 */ 				var __accu0__ = 'Unknown token type: {}';
/* 000658 */ 				return __call__ (__accu0__.format, __accu0__, tok.tok);
/* 000658 */ 			}) (), __kwargtrans__ ({pos: tok.pos}));
/* 000658 */ 			__except0__.__cause__ = null;
/* 000658 */ 			throw __except0__;
/* 000658 */ 		}
/* 000658 */ 	});},
/* 000670 */ 	get make_child_parsing_state () {return __get__ (this, function (self, parsing_state, node_class) {
/* 000670 */ 		if (arguments.length) {
/* 000670 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000670 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000670 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000670 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000670 */ 					switch (__attrib0__) {
/* 000670 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000670 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000670 */ 						case 'node_class': var node_class = __allkwargs0__ [__attrib0__]; break;
/* 000670 */ 					}
/* 000670 */ 				}
/* 000670 */ 			}
/* 000670 */ 		}
/* 000670 */ 		else {
/* 000670 */ 		}
/* 000677 */ 		if (__t__ (self._make_child_parsing_state_fn !== null)) {
/* 000678 */ 			return (function () {
/* 000678 */ 				var __accu0__ = self;
/* 000678 */ 				return __call__ (__accu0__._make_child_parsing_state_fn, __accu0__, __kwargtrans__ ({parsing_state: parsing_state, node_class: node_class}));
/* 000678 */ 			}) ();
/* 000678 */ 		}
/* 000680 */ 		return self.parsing_state;
/* 000680 */ 	});},
/* 000683 */ 	get parse_comment_node () {return __get__ (this, function (self, tok) {
/* 000683 */ 		if (arguments.length) {
/* 000683 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000683 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000683 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000683 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000683 */ 					switch (__attrib0__) {
/* 000683 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000683 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000683 */ 					}
/* 000683 */ 				}
/* 000683 */ 			}
/* 000683 */ 		}
/* 000683 */ 		else {
/* 000683 */ 		}
/* 000697 */ 		var commentnode = (function () {
/* 000697 */ 			var __accu0__ = self.latex_walker;
/* 000697 */ 			return __call__ (__accu0__.make_node, __accu0__, LatexCommentNode, __kwargtrans__ ({parsing_state: self.parsing_state, comment: tok.arg, comment_post_space: tok.post_space, pos: tok.pos, pos_end: tok.pos_end}));
/* 000697 */ 		}) ();
/* 000706 */ 		var stop_exc = (function () {
/* 000706 */ 			var __accu0__ = self;
/* 000706 */ 			return __call__ (__accu0__.push_to_nodelist, __accu0__, commentnode);
/* 000706 */ 		}) ();
/* 000707 */ 		if (__t__ (stop_exc !== null)) {
/* 000708 */ 			stop_exc.pos_end = tok.pos_end;
/* 000709 */ 			(function () {
/* 000709 */ 				var __accu0__ = logger;
/* 000709 */ 				return __call__ (__accu0__.debug, __accu0__, 'parse_comment_node(): stop_exc=%r', stop_exc);
/* 000709 */ 			}) ();
/* 000710 */ 			var __except0__ = stop_exc;
/* 000710 */ 			__except0__.__cause__ = null;
/* 000710 */ 			throw __except0__;
/* 000710 */ 		}
/* 000710 */ 	});},
/* 000713 */ 	get parse_latex_group () {return __get__ (this, function (self, tok) {
/* 000713 */ 		if (arguments.length) {
/* 000713 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000713 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000713 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000713 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000713 */ 					switch (__attrib0__) {
/* 000713 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000713 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000713 */ 					}
/* 000713 */ 				}
/* 000713 */ 			}
/* 000713 */ 		}
/* 000713 */ 		else {
/* 000713 */ 		}
/* 000729 */ 		(function () {
/* 000729 */ 			var __accu0__ = logger;
/* 000729 */ 			return __call__ (__accu0__.debug, __accu0__, 'nodes collector is now parsing a latex group, %r', tok);
/* 000729 */ 		}) ();
/* 000731 */ 		(function () {
/* 000731 */ 			var __accu0__ = self.token_reader;
/* 000731 */ 			return __call__ (__accu0__.move_to_token, __accu0__, tok, __kwargtrans__ ({rewind_pre_space: false}));
/* 000731 */ 		}) ();
/* 000733 */ 		var group_parser = (function () {
/* 000733 */ 			var __accu0__ = self.latex_walker;
/* 000733 */ 			return __call__ (__accu0__.make_latex_group_parser, __accu0__, __kwargtrans__ ({delimiters: tok.arg}));
/* 000733 */ 		}) ();
/* 000738 */ 		var __left0__ = (function () {
/* 000738 */ 			var __accu0__ = self.latex_walker;
/* 000741 */ 			return __call__ (__accu0__.parse_content, __accu0__, group_parser, __kwargtrans__ ({token_reader: self.token_reader, parsing_state: (function () {
/* 000741 */ 				var __accu1__ = self;
/* 000741 */ 				return __call__ (__accu1__.make_child_parsing_state, __accu1__, self.parsing_state, LatexGroupNode);
/* 000741 */ 			}) ()}));
/* 000741 */ 		}) ();
/* 000741 */ 		var groupnode = __left0__ [0];
/* 000741 */ 		var parsing_state_delta = __left0__ [1];
/* 000745 */ 		if (__t__ (parsing_state_delta !== null)) {
/* 000746 */ 			(function () {
/* 000746 */ 				var __accu0__ = logger;
/* 000746 */ 				return __call__ (__accu0__.warning, __accu0__, 'parsing_state_delta is ignored after parsing a LaTeX group: %r', parsing_state_delta);
/* 000746 */ 			}) ();
/* 000746 */ 		}
/* 000749 */ 		var stop_exc = (function () {
/* 000749 */ 			var __accu0__ = self;
/* 000749 */ 			return __call__ (__accu0__.push_to_nodelist, __accu0__, groupnode);
/* 000749 */ 		}) ();
/* 000750 */ 		if (__t__ (stop_exc !== null)) {
/* 000751 */ 			stop_exc.pos_end = groupnode.pos_end;
/* 000752 */ 			(function () {
/* 000752 */ 				var __accu0__ = logger;
/* 000752 */ 				return __call__ (__accu0__.debug, __accu0__, 'parse_latex_group(): stop_exc=%r', stop_exc);
/* 000752 */ 			}) ();
/* 000753 */ 			var __except0__ = stop_exc;
/* 000753 */ 			__except0__.__cause__ = null;
/* 000753 */ 			throw __except0__;
/* 000753 */ 		}
/* 000755 */ 		(function () {
/* 000755 */ 			var __accu0__ = logger;
/* 000755 */ 			return __call__ (__accu0__.debug, __accu0__, 'nodes collector finished parsing group → %r', groupnode);
/* 000755 */ 		}) ();
/* 000755 */ 	});},
/* 000758 */ 	get parse_macro () {return __get__ (this, function (self, tok) {
/* 000758 */ 		if (arguments.length) {
/* 000758 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000758 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000758 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000758 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000758 */ 					switch (__attrib0__) {
/* 000758 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000758 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000758 */ 					}
/* 000758 */ 				}
/* 000758 */ 			}
/* 000758 */ 		}
/* 000758 */ 		else {
/* 000758 */ 		}
/* 000773 */ 		var macroname = tok.arg;
/* 000775 */ 		var mspec = null;
/* 000776 */ 		if (__t__ (self.parsing_state.latex_context !== null)) {
/* 000777 */ 			var mspec = (function () {
/* 000777 */ 				var __accu0__ = self.parsing_state.latex_context;
/* 000777 */ 				return __call__ (__accu0__.get_macro_spec, __accu0__, macroname);
/* 000777 */ 			}) ();
/* 000777 */ 		}
/* 000779 */ 		if (__t__ (mspec === null)) {
/* 000780 */ 			var exc = (function () {
/* 000780 */ 				var __accu0__ = self.latex_walker;
/* 000782 */ 				return __call__ (__accu0__.check_tolerant_parsing_ignore_error, __accu0__, __call__ (LatexWalkerParseError, null, __kwargtrans__ ({msg: (function () {
/* 000782 */ 					var __accu1__ = 'Encountered unknown macro ‘\\{}’';
/* 000782 */ 					return __call__ (__accu1__.format, __accu1__, macroname);
/* 000782 */ 				}) (), pos: tok.pos, error_type_info: dict ({'what': 'nodes_unknown_macro_name', 'macroname': macroname})})));
/* 000782 */ 			}) ();
/* 000790 */ 			if (__t__ (exc !== null)) {
/* 000791 */ 				var __except0__ = exc;
/* 000791 */ 				__except0__.__cause__ = null;
/* 000791 */ 				throw __except0__;
/* 000791 */ 			}
/* 000792 */ 			var mspec = null;
/* 000792 */ 		}
/* 000794 */ 		var node_class = LatexMacroNode;
/* 000795 */ 		var what = (function () {
/* 000795 */ 			var __accu0__ = 'macro ‘\\{}’';
/* 000795 */ 			return __call__ (__accu0__.format, __accu0__, macroname);
/* 000795 */ 		}) ();
/* 000797 */ 		return (function () {
/* 000797 */ 			var __accu0__ = self;
/* 000797 */ 			return __call__ (__accu0__.parse_invocable_token_type, __accu0__, tok, mspec, node_class, what);
/* 000797 */ 		}) ();
/* 000797 */ 	});},
/* 000799 */ 	get parse_environment () {return __get__ (this, function (self, tok) {
/* 000799 */ 		if (arguments.length) {
/* 000799 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000799 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000799 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000799 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000799 */ 					switch (__attrib0__) {
/* 000799 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000799 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000799 */ 					}
/* 000799 */ 				}
/* 000799 */ 			}
/* 000799 */ 		}
/* 000799 */ 		else {
/* 000799 */ 		}
/* 000815 */ 		var latex_walker = self.latex_walker;
/* 000818 */ 		var environmentname = tok.arg;
/* 000822 */ 		var envspec = (function () {
/* 000822 */ 			var __accu0__ = self.parsing_state.latex_context;
/* 000822 */ 			return __call__ (__accu0__.get_environment_spec, __accu0__, environmentname);
/* 000822 */ 		}) ();
/* 000824 */ 		if (__t__ (envspec === null)) {
/* 000825 */ 			var exc = (function () {
/* 000825 */ 				var __accu0__ = latex_walker;
/* 000827 */ 				return __call__ (__accu0__.check_tolerant_parsing_ignore_error, __accu0__, __call__ (LatexWalkerParseError, null, __kwargtrans__ ({msg: (function () {
/* 000827 */ 					var __accu1__ = 'Encountered unknown environment ‘{}{}{}’';
/* 000827 */ 					return __call__ (__accu1__.format, __accu1__, '{', environmentname, '}');
/* 000827 */ 				}) (), pos: tok.pos, error_type_info: dict ({'what': 'nodes_unknown_environment_name', 'environmentname': environmentname})})));
/* 000827 */ 			}) ();
/* 000836 */ 			if (__t__ (exc !== null)) {
/* 000837 */ 				var __except0__ = exc;
/* 000837 */ 				__except0__.__cause__ = null;
/* 000837 */ 				throw __except0__;
/* 000837 */ 			}
/* 000838 */ 			var envspec = null;
/* 000838 */ 		}
/* 000840 */ 		var node_class = LatexEnvironmentNode;
/* 000841 */ 		var what = (function () {
/* 000841 */ 			var __accu0__ = 'environment ‘{}{}{}’';
/* 000841 */ 			return __call__ (__accu0__.format, __accu0__, '{', environmentname, '}');
/* 000841 */ 		}) ();
/* 000843 */ 		return (function () {
/* 000843 */ 			var __accu0__ = self;
/* 000843 */ 			return __call__ (__accu0__.parse_invocable_token_type, __accu0__, tok, envspec, node_class, what);
/* 000843 */ 		}) ();
/* 000843 */ 	});},
/* 000845 */ 	get parse_specials () {return __get__ (this, function (self, tok) {
/* 000845 */ 		if (arguments.length) {
/* 000845 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000845 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000845 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000845 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000845 */ 					switch (__attrib0__) {
/* 000845 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000845 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000845 */ 					}
/* 000845 */ 				}
/* 000845 */ 			}
/* 000845 */ 		}
/* 000845 */ 		else {
/* 000845 */ 		}
/* 000859 */ 		var specials_spec = tok.arg;
/* 000861 */ 		var node_class = LatexSpecialsNode;
/* 000862 */ 		var what = (function () {
/* 000862 */ 			var __accu0__ = 'specials ‘{}’';
/* 000862 */ 			return __call__ (__accu0__.format, __accu0__, __call__ (getattr, null, specials_spec, 'specials_chars', '<unkonwn>'));
/* 000862 */ 		}) ();
/* 000864 */ 		return (function () {
/* 000864 */ 			var __accu0__ = self;
/* 000864 */ 			return __call__ (__accu0__.parse_invocable_token_type, __accu0__, tok, specials_spec, node_class, what);
/* 000864 */ 		}) ();
/* 000864 */ 	});},
/* 000866 */ 	get parse_invocable_token_type () {return __get__ (this, function (self, tok, spec, node_class, what) {
/* 000866 */ 		if (arguments.length) {
/* 000866 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000866 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000866 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000866 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000866 */ 					switch (__attrib0__) {
/* 000866 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000866 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000866 */ 						case 'spec': var spec = __allkwargs0__ [__attrib0__]; break;
/* 000866 */ 						case 'node_class': var node_class = __allkwargs0__ [__attrib0__]; break;
/* 000866 */ 						case 'what': var what = __allkwargs0__ [__attrib0__]; break;
/* 000866 */ 					}
/* 000866 */ 				}
/* 000866 */ 			}
/* 000866 */ 		}
/* 000866 */ 		else {
/* 000866 */ 		}
/* 000886 */ 		var latex_walker = self.latex_walker;
/* 000887 */ 		var token_reader = self.token_reader;
/* 000889 */ 		if (__t__ (spec !== null)) {
/* 000890 */ 			var node_parser = (function () {
/* 000890 */ 				var __accu0__ = spec;
/* 000890 */ 				return __call__ (__accu0__.get_node_parser, __accu0__, tok);
/* 000890 */ 			}) ();
/* 000890 */ 		}
/* 000891 */ 		else {
/* 000892 */ 			var node_parser = null;
/* 000892 */ 		}
/* 000894 */ 		if (__t__ (node_parser === null)) {
/* 000896 */ 			var exc = (function () {
/* 000896 */ 				var __accu0__ = latex_walker;
/* 000898 */ 				return __call__ (__accu0__.check_tolerant_parsing_ignore_error, __accu0__, __call__ (LatexWalkerParseError, null, __kwargtrans__ ({msg: (function () {
/* 000898 */ 					var __accu1__ = 'No parser found for callable token {!r}';
/* 000898 */ 					return __call__ (__accu1__.format, __accu1__, tok);
/* 000898 */ 				}) (), pos: tok.pos})));
/* 000898 */ 			}) ();
/* 000902 */ 			if (__t__ (exc !== null)) {
/* 000903 */ 				(function () {
/* 000903 */ 					var __accu0__ = logger;
/* 000903 */ 					return __call__ (__accu0__.debug, __accu0__, 'parse_invocable_token_type(): no-parser error, exc=%r', exc);
/* 000903 */ 				}) ();
/* 000904 */ 				var __except0__ = exc;
/* 000904 */ 				__except0__.__cause__ = null;
/* 000904 */ 				throw __except0__;
/* 000904 */ 			}
/* 000905 */ 			var result_node = null;
/* 000906 */ 			var parsing_state_delta = null;
/* 000906 */ 		}
/* 000907 */ 		else {
/* 000910 */ 			var __left0__ = (function () {
/* 000910 */ 				var __accu0__ = latex_walker;
/* 000913 */ 				return __call__ (__accu0__.parse_content, __accu0__, node_parser, token_reader, (function () {
/* 000913 */ 					var __accu1__ = self;
/* 000913 */ 					return __call__ (__accu1__.make_child_parsing_state, __accu1__, self.parsing_state, node_class);
/* 000913 */ 				}) (), __kwargtrans__ ({open_context: tuple ([what, tok])}));
/* 000913 */ 			}) ();
/* 000913 */ 			var result_node = __left0__ [0];
/* 000913 */ 			var parsing_state_delta = __left0__ [1];
/* 000913 */ 		}
/* 000917 */ 		(function () {
/* 000917 */ 			var __accu0__ = self;
/* 000917 */ 			return __call__ (__accu0__.update_state_from_parsing_state_delta, __accu0__, parsing_state_delta);
/* 000917 */ 		}) ();
/* 000919 */ 		if (__t__ (result_node === null)) {
/* 000920 */ 			(function () {
/* 000920 */ 				var __accu0__ = logger;
/* 000920 */ 				return __call__ (__accu0__.warning, __accu0__, 'Parser %r produced no node (None) for token %r', node_parser, tok);
/* 000920 */ 			}) ();
/* 000921 */ 			return ;
/* 000921 */ 		}
/* 000923 */ 		var exc = (function () {
/* 000923 */ 			var __accu0__ = self;
/* 000923 */ 			return __call__ (__accu0__.push_to_nodelist, __accu0__, result_node);
/* 000923 */ 		}) ();
/* 000924 */ 		if (__t__ (exc !== null)) {
/* 000925 */ 			exc.pos_end = result_node.pos_end;
/* 000926 */ 			(function () {
/* 000926 */ 				var __accu0__ = logger;
/* 000926 */ 				return __call__ (__accu0__.debug, __accu0__, 'parse_invocable_token_type(): exc=%r', exc);
/* 000926 */ 			}) ();
/* 000927 */ 			var __except0__ = exc;
/* 000927 */ 			__except0__.__cause__ = null;
/* 000927 */ 			throw __except0__;
/* 000927 */ 		}
/* 000927 */ 	});},
/* 000930 */ 	get parse_math () {return __get__ (this, function (self, tok) {
/* 000930 */ 		if (arguments.length) {
/* 000930 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000930 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000930 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000930 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000930 */ 					switch (__attrib0__) {
/* 000930 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000930 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000930 */ 					}
/* 000930 */ 				}
/* 000930 */ 			}
/* 000930 */ 		}
/* 000930 */ 		else {
/* 000930 */ 		}
/* 000945 */ 		(function () {
/* 000945 */ 			var __accu0__ = logger;
/* 000945 */ 			return __call__ (__accu0__.debug, __accu0__, 'parse_math, tok=%r', tok);
/* 000945 */ 		}) ();
/* 000947 */ 		(function () {
/* 000947 */ 			var __accu0__ = self.token_reader;
/* 000947 */ 			return __call__ (__accu0__.move_to_token, __accu0__, tok, __kwargtrans__ ({rewind_pre_space: false}));
/* 000947 */ 		}) ();
/* 000951 */ 		var child_math_parsing_state = (function () {
/* 000951 */ 			var __accu0__ = self;
/* 000951 */ 			return __call__ (__accu0__.make_child_parsing_state, __accu0__, self.parsing_state, LatexMathNode);
/* 000951 */ 		}) ();
/* 000955 */ 		(function () {
/* 000955 */ 			var __accu0__ = logger;
/* 000955 */ 			return __call__ (__accu0__.debug, __accu0__, 'child_math_parsing_state = %r', child_math_parsing_state);
/* 000955 */ 		}) ();
/* 000957 */ 		var math_parser = (function () {
/* 000957 */ 			var __accu0__ = self.latex_walker;
/* 000957 */ 			return __call__ (__accu0__.make_latex_math_parser, __accu0__, __kwargtrans__ ({math_mode_delimiters: tok.arg}));
/* 000957 */ 		}) ();
/* 000963 */ 		var __left0__ = (function () {
/* 000963 */ 			var __accu0__ = self.latex_walker;
/* 000963 */ 			return __call__ (__accu0__.parse_content, __accu0__, math_parser, __kwargtrans__ ({token_reader: self.token_reader, parsing_state: child_math_parsing_state}));
/* 000963 */ 		}) ();
/* 000963 */ 		var mathnode = __left0__ [0];
/* 000963 */ 		var parsing_state_delta = __left0__ [1];
/* 000969 */ 		(function () {
/* 000969 */ 			var __accu0__ = self;
/* 000969 */ 			return __call__ (__accu0__.update_state_from_parsing_state_delta, __accu0__, parsing_state_delta);
/* 000969 */ 		}) ();
/* 000971 */ 		if (__t__ (mathnode === null)) {
/* 000972 */ 			(function () {
/* 000972 */ 				var __accu0__ = logger;
/* 000972 */ 				return __call__ (__accu0__.warning, __accu0__, 'Math parser produced no node (None) for token %r', tok);
/* 000972 */ 			}) ();
/* 000973 */ 			return ;
/* 000973 */ 		}
/* 000975 */ 		var stop_exc = (function () {
/* 000975 */ 			var __accu0__ = self;
/* 000975 */ 			return __call__ (__accu0__.push_to_nodelist, __accu0__, mathnode);
/* 000975 */ 		}) ();
/* 000976 */ 		if (__t__ (stop_exc !== null)) {
/* 000977 */ 			stop_exc.pos_end = mathnode.pos_end;
/* 000978 */ 			(function () {
/* 000978 */ 				var __accu0__ = logger;
/* 000978 */ 				return __call__ (__accu0__.debug, __accu0__, 'parse_math_node(): stop_exc=%r', stop_exc);
/* 000978 */ 			}) ();
/* 000979 */ 			var __except0__ = stop_exc;
/* 000979 */ 			__except0__.__cause__ = null;
/* 000979 */ 			throw __except0__;
/* 000979 */ 		}
/* 000979 */ 	});}
/* 000979 */ });
/* 000037 */ 
//# sourceMappingURL=pylatexenc.latexnodes._nodescollector.map