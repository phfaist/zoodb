/* 000001 */ // Transcrypt'ed from Python, 2025-02-13 12:53:48
/* 000037 */ var logging = {};
/* 000037 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000044 */ import {ParsingStateDeltaEnterMathMode, ParsingStateDeltaReplaceParsingState, get_updated_parsing_state_from_delta} from './pylatexenc.latexnodes._parsingstatedelta.js';
/* 000041 */ import {LatexCharsNode, LatexCommentNode, LatexEnvironmentNode, LatexGroupNode, LatexMacroNode, LatexMathNode, LatexNode, LatexNodeList, LatexNodesVisitor, LatexSpecialsNode, LatexWalkerParseError, ParsedArguments, _UseList, __all__, _display_abbrev_str, _display_str_delimiters, _get_content_as_chars, _unicode_from_str, _update_posposend_from_nodelist, latex_node_types} from './pylatexenc.latexnodes.nodes.js';
/* 000040 */ import {LatexWalkerEndOfStream, LatexWalkerError, LatexWalkerLocatedError, LatexWalkerLocatedErrorFormatter, LatexWalkerNodesParseError, LatexWalkerTokenParseError, _basestring, format_pos, to_str} from './pylatexenc.latexnodes._exctypes.js';
/* 000037 */ import * as __module_logging__ from './logging.js';
/* 000037 */ __nest__ (logging, '', __module_logging__);
/* 000037 */ export {_unicode_from_str, LatexCommentNode, LatexMacroNode, _display_abbrev_str, ParsedArguments, to_str, LatexMathNode, format_pos, LatexGroupNode, _basestring, latex_node_types, LatexWalkerNodesParseError, get_updated_parsing_state_from_delta, LatexWalkerTokenParseError, LatexWalkerEndOfStream, LatexNode, _update_posposend_from_nodelist, LatexEnvironmentNode, ParsingStateDeltaReplaceParsingState, LatexCharsNode, LatexWalkerError, LatexNodeList, _get_content_as_chars, LatexNodesVisitor, _display_str_delimiters, LatexWalkerLocatedErrorFormatter, LatexWalkerLocatedError, __all__, LatexWalkerParseError, LatexSpecialsNode, _UseList, ParsingStateDeltaEnterMathMode};
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
/* 000276 */ 			// pass;
/* 000279 */ 			var __except0__ = exc;
/* 000279 */ 			__except0__.__cause__ = null;
/* 000279 */ 			throw __except0__;
/* 000279 */ 		}
/* 000279 */ 	});},
/* 000289 */ 	get push_pending_chars () {return __get__ (this, function (self, chars, pos) {
/* 000289 */ 		if (arguments.length) {
/* 000289 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000289 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000289 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000289 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000289 */ 					switch (__attrib0__) {
/* 000289 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000289 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000289 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000289 */ 					}
/* 000289 */ 				}
/* 000289 */ 			}
/* 000289 */ 		}
/* 000289 */ 		else {
/* 000289 */ 		}
/* 000297 */ 		self._pending_chars = __call__ (__iadd__, null, self._pending_chars, chars);
/* 000298 */ 		if (__t__ (self._pending_chars_pos === null)) {
/* 000299 */ 			self._pending_chars_pos = pos;
/* 000299 */ 		}
/* 000299 */ 	});},
/* 000301 */ 	get flush_pending_chars () {return __get__ (this, function (self) {
/* 000301 */ 		if (arguments.length) {
/* 000301 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000301 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000301 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000301 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000301 */ 					switch (__attrib0__) {
/* 000301 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000301 */ 					}
/* 000301 */ 				}
/* 000301 */ 			}
/* 000301 */ 		}
/* 000301 */ 		else {
/* 000301 */ 		}
/* 000309 */ 		if (__t__ (!__t__ ((self._pending_chars)))) {
/* 000311 */ 			return null;
/* 000311 */ 		}
/* 000313 */ 		var __left0__ = tuple ([self._pending_chars_pos, self._pending_chars]);
/* 000313 */ 		var charspos = __left0__ [0];
/* 000313 */ 		var chars = __left0__ [1];
/* 000314 */ 		self._pending_chars = '';
/* 000315 */ 		self._pending_chars_pos = null;
/* 000317 */ 		var strnode = (function () {
/* 000317 */ 			var __accu0__ = self.latex_walker;
/* 000322 */ 			return __call__ (__accu0__.make_node, __accu0__, LatexCharsNode, __kwargtrans__ ({parsing_state: self.parsing_state, chars: chars, pos: charspos, pos_end: __add__ (charspos, __call__ (len, null, chars))}));
/* 000322 */ 		}) ();
/* 000324 */ 		return (function () {
/* 000324 */ 			var __accu0__ = self;
/* 000324 */ 			return __call__ (__accu0__.push_to_nodelist, __accu0__, strnode);
/* 000324 */ 		}) ();
/* 000324 */ 	});},
/* 000326 */ 	get push_to_nodelist () {return __get__ (this, function (self, node) {
/* 000326 */ 		if (arguments.length) {
/* 000326 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000326 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000326 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000326 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000326 */ 					switch (__attrib0__) {
/* 000326 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000326 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000326 */ 					}
/* 000326 */ 				}
/* 000326 */ 			}
/* 000326 */ 		}
/* 000326 */ 		else {
/* 000326 */ 		}
/* 000333 */ 		if (__t__ (self._finalized)) {
/* 000334 */ 			var __except0__ = __call__ (RuntimeError, null, 'You already called finalize()');
/* 000334 */ 			__except0__.__cause__ = null;
/* 000334 */ 			throw __except0__;
/* 000334 */ 		}
/* 000336 */ 		(function () {
/* 000336 */ 			var __accu0__ = self._nodelist;
/* 000336 */ 			return __call__ (__accu0__.append, __accu0__, node);
/* 000336 */ 		}) ();
/* 000338 */ 		var exc = (function () {
/* 000338 */ 			var __accu0__ = self;
/* 000338 */ 			return __call__ (__accu0__._check_nodelist_stop_condition, __accu0__);
/* 000338 */ 		}) ();
/* 000339 */ 		if (__t__ (exc !== null)) {
/* 000340 */ 			return exc;
/* 000340 */ 		}
/* 000341 */ 		return null;
/* 000341 */ 	});},
/* 000344 */ 	get update_state_from_parsing_state_delta () {return __get__ (this, function (self, parsing_state_delta) {
/* 000344 */ 		if (arguments.length) {
/* 000344 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000344 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000344 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000344 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000344 */ 					switch (__attrib0__) {
/* 000344 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000344 */ 						case 'parsing_state_delta': var parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000344 */ 					}
/* 000344 */ 				}
/* 000344 */ 			}
/* 000344 */ 		}
/* 000344 */ 		else {
/* 000344 */ 		}
/* 000353 */ 		if (__t__ (parsing_state_delta !== null)) {
/* 000354 */ 			var ps = self.parsing_state;
/* 000356 */ 			self.parsing_state = (function () {
/* 000356 */ 				var __accu0__ = parsing_state_delta;
/* 000356 */ 				return __call__ (__accu0__.get_updated_parsing_state, __accu0__, self.parsing_state, self.latex_walker);
/* 000356 */ 			}) ();
/* 000361 */ 			// pass;
/* 000361 */ 		}
/* 000361 */ 	});},
/* 000371 */ 	get _check_nodelist_stop_condition () {return __get__ (this, function (self) {
/* 000371 */ 		if (arguments.length) {
/* 000371 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000371 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000371 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000371 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000371 */ 					switch (__attrib0__) {
/* 000371 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000371 */ 					}
/* 000371 */ 				}
/* 000371 */ 			}
/* 000371 */ 		}
/* 000371 */ 		else {
/* 000371 */ 		}
/* 000372 */ 		var stop_nodelist_condition = self.stop_nodelist_condition;
/* 000373 */ 		if (__t__ (stop_nodelist_condition !== null)) {
/* 000374 */ 			var stop_data = __call__ (stop_nodelist_condition, null, self._nodelist);
/* 000375 */ 			if (__t__ (stop_data)) {
/* 000376 */ 				self._stop_nodelist_condition_met = true;
/* 000377 */ 				// pass;
/* 000381 */ 				return (function () {
/* 000381 */ 					var __accu0__ = LatexNodesCollector;
/* 000381 */ 					return __call__ (__accu0__.ReachedStoppingCondition, __accu0__, __kwargtrans__ ({stop_data: stop_data}));
/* 000381 */ 				}) ();
/* 000381 */ 			}
/* 000381 */ 		}
/* 000382 */ 		return null;
/* 000382 */ 	});},
/* 000384 */ 	get _check_token_stop_condition () {return __get__ (this, function (self, tok) {
/* 000384 */ 		if (arguments.length) {
/* 000384 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000384 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000384 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000384 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000384 */ 					switch (__attrib0__) {
/* 000384 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000384 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000384 */ 					}
/* 000384 */ 				}
/* 000384 */ 			}
/* 000384 */ 		}
/* 000384 */ 		else {
/* 000384 */ 		}
/* 000385 */ 		var stop_token_condition = self.stop_token_condition;
/* 000386 */ 		if (__t__ (stop_token_condition !== null)) {
/* 000387 */ 			var stop_data = __call__ (stop_token_condition, null, tok);
/* 000388 */ 			if (__t__ (stop_data)) {
/* 000389 */ 				self._stop_token_condition_met = true;
/* 000390 */ 				self._stop_token_condition_met_token = tok;
/* 000391 */ 				// pass;
/* 000396 */ 				return (function () {
/* 000396 */ 					var __accu0__ = LatexNodesCollector;
/* 000396 */ 					return __call__ (__accu0__.ReachedStoppingCondition, __accu0__, __kwargtrans__ ({stop_data: stop_data}));
/* 000396 */ 				}) ();
/* 000396 */ 			}
/* 000396 */ 		}
/* 000397 */ 		return null;
/* 000397 */ 	});},
/* 000400 */ 	get process_tokens () {return __get__ (this, function (self) {
/* 000400 */ 		if (arguments.length) {
/* 000400 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000400 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000400 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000400 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000400 */ 					switch (__attrib0__) {
/* 000400 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000400 */ 					}
/* 000400 */ 				}
/* 000400 */ 			}
/* 000400 */ 		}
/* 000400 */ 		else {
/* 000400 */ 		}
/* 000421 */ 		try {
/* 000422 */ 			while (__t__ (true)) {
/* 000423 */ 				(function () {
/* 000423 */ 					var __accu0__ = self;
/* 000423 */ 					return __call__ (__accu0__.process_one_token, __accu0__);
/* 000423 */ 				}) ();
/* 000423 */ 			}
/* 000423 */ 		}
/* 000423 */ 		catch (__except0__) {
/* 000423 */ 			if (isinstance (__except0__, LatexNodesCollector.ReachedStoppingCondition)) {
/* 000423 */ 				var e = __except0__;
/* 000427 */ 				self._stop_condition_stop_data = e.stop_data;
/* 000428 */ 				// pass;
/* 000431 */ 				return ;
/* 000431 */ 			}
/* 000431 */ 			else if (isinstance (__except0__, LatexNodesCollector.ReachedEndOfStream)) {
/* 000431 */ 				var e = __except0__;
/* 000436 */ 				self._reached_end_of_stream = true;
/* 000437 */ 				// pass;
/* 000440 */ 				return ;
/* 000440 */ 			}
/* 000440 */ 			else if (isinstance (__except0__, LatexWalkerError)) {
/* 000440 */ 				var e = __except0__;
/* 000444 */ 				// pass;
/* 000447 */ 				__except0__.__cause__ = null;
/* 000447 */ 				throw __except0__;
/* 000447 */ 			}
/* 000447 */ 			else {
/* 000447 */ 				throw __except0__;
/* 000447 */ 			}
/* 000447 */ 		}
/* 000447 */ 		finally {
/* 000450 */ 			(function () {
/* 000450 */ 				var __accu0__ = self;
/* 000450 */ 				return __call__ (__accu0__.finalize, __accu0__);
/* 000450 */ 			}) ();
/* 000450 */ 		}
/* 000450 */ 	});},
/* 000455 */ 	get process_one_token () {return __get__ (this, function (self) {
/* 000455 */ 		if (arguments.length) {
/* 000455 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000455 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000455 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000455 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000455 */ 					switch (__attrib0__) {
/* 000455 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000455 */ 					}
/* 000455 */ 				}
/* 000455 */ 			}
/* 000455 */ 		}
/* 000455 */ 		else {
/* 000455 */ 		}
/* 000494 */ 		if (__t__ (self._finalized)) {
/* 000495 */ 			var __except0__ = __call__ (RuntimeError, null, 'You already called finalize()');
/* 000495 */ 			__except0__.__cause__ = null;
/* 000495 */ 			throw __except0__;
/* 000495 */ 		}
/* 000497 */ 		var latex_walker = self.latex_walker;
/* 000498 */ 		var token_reader = self.token_reader;
/* 000500 */ 		try {
/* 000502 */ 			var tok = (function () {
/* 000502 */ 				var __accu0__ = token_reader;
/* 000502 */ 				return __call__ (__accu0__.next_token, __accu0__, __kwargtrans__ ({parsing_state: self.parsing_state}));
/* 000502 */ 			}) ();
/* 000503 */ 			// pass;
/* 000503 */ 		}
/* 000503 */ 		catch (__except0__) {
/* 000503 */ 			if (isinstance (__except0__, LatexWalkerEndOfStream)) {
/* 000503 */ 				var e = __except0__;
/* 000508 */ 				var final_space = (__t__ (__call__ (hasattr, null, e, 'final_space')) ? __call__ (getattr, null, e, 'final_space') : null);
/* 000509 */ 				if (__t__ (final_space)) {
/* 000511 */ 					var final_space_pos = __add__ ((function () {
/* 000511 */ 						var __accu0__ = token_reader;
/* 000511 */ 						return __call__ (__accu0__.cur_pos, __accu0__);
/* 000511 */ 					}) (), __call__ (len, null, final_space));
/* 000512 */ 					var tok = (function () {
/* 000512 */ 						var __accu0__ = token_reader;
/* 000512 */ 						return __call__ (__accu0__.make_token, __accu0__, __kwargtrans__ ({tok: 'char', arg: '', pre_space: final_space, pos: final_space_pos, pos_end: final_space_pos}));
/* 000512 */ 					}) ();
/* 000519 */ 					(function () {
/* 000519 */ 						var __accu0__ = token_reader;
/* 000519 */ 						return __call__ (__accu0__.move_past_token, __accu0__, tok);
/* 000519 */ 					}) ();
/* 000519 */ 				}
/* 000520 */ 				else {
/* 000522 */ 					var exc = (function () {
/* 000522 */ 						var __accu0__ = LatexNodesCollector;
/* 000522 */ 						return __call__ (__accu0__.ReachedEndOfStream, __accu0__);
/* 000522 */ 					}) ();
/* 000523 */ 					exc.pos_end = (function () {
/* 000523 */ 						var __accu0__ = token_reader;
/* 000523 */ 						return __call__ (__accu0__.cur_pos, __accu0__);
/* 000523 */ 					}) ();
/* 000524 */ 					// pass;
/* 000527 */ 					var __except1__ = exc;
/* 000527 */ 					__except1__.__cause__ = null;
/* 000527 */ 					throw __except1__;
/* 000527 */ 				}
/* 000527 */ 			}
/* 000527 */ 			else {
/* 000527 */ 				throw __except0__;
/* 000527 */ 			}
/* 000527 */ 		}
/* 000532 */ 		var stop_exc = (function () {
/* 000532 */ 			var __accu0__ = self;
/* 000532 */ 			return __call__ (__accu0__._check_token_stop_condition, __accu0__, tok);
/* 000532 */ 		}) ();
/* 000533 */ 		if (__t__ (stop_exc !== null)) {
/* 000534 */ 			if (__t__ (self.include_stop_token_pre_space_chars)) {
/* 000537 */ 				(function () {
/* 000537 */ 					var __accu0__ = self;
/* 000539 */ 					return __call__ (__accu0__.push_pending_chars, __accu0__, __kwargtrans__ ({chars: tok.pre_space, pos: __sub__ (tok.pos, __call__ (len, null, tok.pre_space))}));
/* 000539 */ 				}) ();
/* 000541 */ 				var rewind_pre_space = false;
/* 000541 */ 			}
/* 000542 */ 			else {
/* 000543 */ 				var rewind_pre_space = true;
/* 000543 */ 			}
/* 000546 */ 			(function () {
/* 000546 */ 				var __accu0__ = token_reader;
/* 000546 */ 				return __call__ (__accu0__.move_to_token, __accu0__, tok, __kwargtrans__ ({rewind_pre_space: rewind_pre_space}));
/* 000546 */ 			}) ();
/* 000547 */ 			stop_exc.pos_end = tok.pos_end;
/* 000548 */ 			// pass;
/* 000551 */ 			var __except0__ = stop_exc;
/* 000551 */ 			__except0__.__cause__ = null;
/* 000551 */ 			throw __except0__;
/* 000551 */ 		}
/* 000555 */ 		if (__t__ (__eq__ (tok.tok, 'char'))) {
/* 000556 */ 			(function () {
/* 000556 */ 				var __accu0__ = self;
/* 000558 */ 				return __call__ (__accu0__.push_pending_chars, __accu0__, __kwargtrans__ ({chars: __add__ (tok.pre_space, tok.arg), pos: __sub__ (tok.pos, __call__ (len, null, tok.pre_space))}));
/* 000558 */ 			}) ();
/* 000560 */ 			return ;
/* 000560 */ 		}
/* 000564 */ 		if (__t__ (self._pending_chars)) {
/* 000565 */ 			self._pending_chars = __call__ (__iadd__, null, self._pending_chars, tok.pre_space);
/* 000566 */ 			tok.pre_space = '';
/* 000567 */ 			var stop_exc = (function () {
/* 000567 */ 				var __accu0__ = self;
/* 000567 */ 				return __call__ (__accu0__.flush_pending_chars, __accu0__);
/* 000567 */ 			}) ();
/* 000568 */ 			if (__t__ (stop_exc !== null)) {
/* 000572 */ 				(function () {
/* 000572 */ 					var __accu0__ = token_reader;
/* 000572 */ 					return __call__ (__accu0__.move_to_token, __accu0__, tok, __kwargtrans__ ({rewind_pre_space: false}));
/* 000572 */ 				}) ();
/* 000573 */ 				stop_exc.pos_end = tok.pos;
/* 000574 */ 				// pass;
/* 000578 */ 				var __except0__ = stop_exc;
/* 000578 */ 				__except0__.__cause__ = null;
/* 000578 */ 				throw __except0__;
/* 000578 */ 			}
/* 000578 */ 		}
/* 000585 */ 		else if (__t__ (tok.pre_space)) {
/* 000586 */ 			var spacestrnode = (function () {
/* 000586 */ 				var __accu0__ = latex_walker;
/* 000589 */ 				return __call__ (__accu0__.make_node, __accu0__, LatexCharsNode, __kwargtrans__ ({parsing_state: self.parsing_state, chars: tok.pre_space, pos: __sub__ (tok.pos, __call__ (len, null, tok.pre_space)), pos_end: tok.pos}));
/* 000589 */ 			}) ();
/* 000591 */ 			tok.pre_space = '';
/* 000592 */ 			var stop_exc = (function () {
/* 000592 */ 				var __accu0__ = self;
/* 000592 */ 				return __call__ (__accu0__.push_to_nodelist, __accu0__, spacestrnode);
/* 000592 */ 			}) ();
/* 000593 */ 			if (__t__ (stop_exc !== null)) {
/* 000597 */ 				(function () {
/* 000597 */ 					var __accu0__ = token_reader;
/* 000597 */ 					return __call__ (__accu0__.move_to_token, __accu0__, tok, __kwargtrans__ ({rewind_pre_space: false}));
/* 000597 */ 				}) ();
/* 000598 */ 				stop_exc.pos_end = tok.pos;
/* 000599 */ 				// pass;
/* 000603 */ 				var __except0__ = stop_exc;
/* 000603 */ 				__except0__.__cause__ = null;
/* 000603 */ 				throw __except0__;
/* 000603 */ 			}
/* 000603 */ 		}
/* 000610 */ 		if (__t__ (__eq__ (tok.tok, 'brace_close'))) {
/* 000612 */ 			var __except0__ = __call__ (LatexWalkerNodesParseError, null, __kwargtrans__ ({msg: (function () {
/* 000612 */ 				var __accu0__ = 'Unexpected mismatching closing delimiter ‘{}’';
/* 000612 */ 				return __call__ (__accu0__.format, __accu0__, tok.arg);
/* 000612 */ 			}) (), pos: tok.pos, recovery_past_token: tok, error_type_info: dict ({'what': 'nodes_unexpected_closing_group_delimiter', 'delimiter': tok.arg})}));
/* 000612 */ 			__except0__.__cause__ = null;
/* 000612 */ 			throw __except0__;
/* 000612 */ 		}
/* 000621 */ 		if (__t__ (__eq__ (tok.tok, 'end_environment'))) {
/* 000623 */ 			var __except0__ = __call__ (LatexWalkerNodesParseError, null, __kwargtrans__ ({msg: (function () {
/* 000623 */ 				var __accu0__ = 'Unexpected closing environment: ‘{}’';
/* 000623 */ 				return __call__ (__accu0__.format, __accu0__, tok.arg);
/* 000623 */ 			}) (), pos: tok.pos, recovery_past_token: tok, error_type_info: dict ({'what': 'nodes_unexpected_end_environment', 'environmentname': tok.arg})}));
/* 000623 */ 			__except0__.__cause__ = null;
/* 000623 */ 			throw __except0__;
/* 000623 */ 		}
/* 000632 */ 		if (__t__ (__t__ (__in__ (tok.tok, tuple (['mathmode_inline', 'mathmode_display']))) && !__in__ (tok.arg, self.parsing_state._math_delims_info_by_open))) {
/* 000636 */ 			var __except0__ = __call__ (LatexWalkerNodesParseError, null, __kwargtrans__ ({msg: (function () {
/* 000636 */ 				var __accu0__ = 'Unexpected closing math mode token ‘{}’';
/* 000636 */ 				return __call__ (__accu0__.format, __accu0__, tok.arg);
/* 000636 */ 			}) (), pos: tok.pos, recovery_past_token: tok, error_type_info: dict ({'what': 'nodes_unexpected_closing_math_delimiter', 'mathmode_type': tok.tok, 'delimiter': tok.arg})}));
/* 000636 */ 			__except0__.__cause__ = null;
/* 000636 */ 			throw __except0__;
/* 000636 */ 		}
/* 000650 */ 		if (__t__ (__eq__ (tok.tok, 'comment'))) {
/* 000651 */ 			(function () {
/* 000651 */ 				var __accu0__ = self;
/* 000651 */ 				return __call__ (__accu0__.parse_comment_node, __accu0__, tok);
/* 000651 */ 			}) ();
/* 000652 */ 			return ;
/* 000652 */ 		}
/* 000654 */ 		else if (__t__ (__eq__ (tok.tok, 'brace_open'))) {
/* 000656 */ 			(function () {
/* 000656 */ 				var __accu0__ = self;
/* 000656 */ 				return __call__ (__accu0__.parse_latex_group, __accu0__, tok);
/* 000656 */ 			}) ();
/* 000657 */ 			return ;
/* 000657 */ 		}
/* 000659 */ 		else if (__t__ (__eq__ (tok.tok, 'macro'))) {
/* 000661 */ 			(function () {
/* 000661 */ 				var __accu0__ = self;
/* 000661 */ 				return __call__ (__accu0__.parse_macro, __accu0__, tok);
/* 000661 */ 			}) ();
/* 000662 */ 			return ;
/* 000662 */ 		}
/* 000664 */ 		else if (__t__ (__eq__ (tok.tok, 'begin_environment'))) {
/* 000666 */ 			(function () {
/* 000666 */ 				var __accu0__ = self;
/* 000666 */ 				return __call__ (__accu0__.parse_environment, __accu0__, tok);
/* 000666 */ 			}) ();
/* 000667 */ 			return ;
/* 000667 */ 		}
/* 000669 */ 		else if (__t__ (__eq__ (tok.tok, 'specials'))) {
/* 000671 */ 			(function () {
/* 000671 */ 				var __accu0__ = self;
/* 000671 */ 				return __call__ (__accu0__.parse_specials, __accu0__, tok);
/* 000671 */ 			}) ();
/* 000672 */ 			return ;
/* 000672 */ 		}
/* 000674 */ 		else if (__t__ (__in__ (tok.tok, tuple (['mathmode_inline', 'mathmode_display'])))) {
/* 000676 */ 			(function () {
/* 000676 */ 				var __accu0__ = self;
/* 000676 */ 				return __call__ (__accu0__.parse_math, __accu0__, tok);
/* 000676 */ 			}) ();
/* 000677 */ 			return ;
/* 000677 */ 		}
/* 000678 */ 		else {
/* 000682 */ 			var __except0__ = __call__ (LatexWalkerParseError, null, (function () {
/* 000682 */ 				var __accu0__ = 'Unknown token type: {}';
/* 000682 */ 				return __call__ (__accu0__.format, __accu0__, tok.tok);
/* 000682 */ 			}) (), __kwargtrans__ ({pos: tok.pos}));
/* 000682 */ 			__except0__.__cause__ = null;
/* 000682 */ 			throw __except0__;
/* 000682 */ 		}
/* 000682 */ 	});},
/* 000694 */ 	get make_child_parsing_state () {return __get__ (this, function (self, parsing_state, node_class, token) {
/* 000694 */ 		if (arguments.length) {
/* 000694 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000694 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000694 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000694 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000694 */ 					switch (__attrib0__) {
/* 000694 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000694 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000694 */ 						case 'node_class': var node_class = __allkwargs0__ [__attrib0__]; break;
/* 000694 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000694 */ 					}
/* 000694 */ 				}
/* 000694 */ 			}
/* 000694 */ 		}
/* 000694 */ 		else {
/* 000694 */ 		}
/* 000701 */ 		if (__t__ (self._make_child_parsing_state_fn !== null)) {
/* 000702 */ 			return (function () {
/* 000702 */ 				var __accu0__ = self;
/* 000702 */ 				return __call__ (__accu0__._make_child_parsing_state_fn, __accu0__, __kwargtrans__ ({parsing_state: parsing_state, node_class: node_class, token: token}));
/* 000702 */ 			}) ();
/* 000702 */ 		}
/* 000707 */ 		return self.parsing_state;
/* 000707 */ 	});},
/* 000710 */ 	get parse_comment_node () {return __get__ (this, function (self, tok) {
/* 000710 */ 		if (arguments.length) {
/* 000710 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000710 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000710 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000710 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000710 */ 					switch (__attrib0__) {
/* 000710 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000710 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000710 */ 					}
/* 000710 */ 				}
/* 000710 */ 			}
/* 000710 */ 		}
/* 000710 */ 		else {
/* 000710 */ 		}
/* 000724 */ 		var commentnode = (function () {
/* 000724 */ 			var __accu0__ = self.latex_walker;
/* 000724 */ 			return __call__ (__accu0__.make_node, __accu0__, LatexCommentNode, __kwargtrans__ ({parsing_state: self.parsing_state, comment: tok.arg, comment_post_space: tok.post_space, pos: tok.pos, pos_end: tok.pos_end}));
/* 000724 */ 		}) ();
/* 000733 */ 		var stop_exc = (function () {
/* 000733 */ 			var __accu0__ = self;
/* 000733 */ 			return __call__ (__accu0__.push_to_nodelist, __accu0__, commentnode);
/* 000733 */ 		}) ();
/* 000734 */ 		if (__t__ (stop_exc !== null)) {
/* 000735 */ 			stop_exc.pos_end = tok.pos_end;
/* 000736 */ 			// pass;
/* 000739 */ 			var __except0__ = stop_exc;
/* 000739 */ 			__except0__.__cause__ = null;
/* 000739 */ 			throw __except0__;
/* 000739 */ 		}
/* 000739 */ 	});},
/* 000742 */ 	get parse_latex_group () {return __get__ (this, function (self, tok) {
/* 000742 */ 		if (arguments.length) {
/* 000742 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000742 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000742 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000742 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000742 */ 					switch (__attrib0__) {
/* 000742 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000742 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000742 */ 					}
/* 000742 */ 				}
/* 000742 */ 			}
/* 000742 */ 		}
/* 000742 */ 		else {
/* 000742 */ 		}
/* 000758 */ 		// pass;
/* 000762 */ 		(function () {
/* 000762 */ 			var __accu0__ = self.token_reader;
/* 000762 */ 			return __call__ (__accu0__.move_to_token, __accu0__, tok, __kwargtrans__ ({rewind_pre_space: false}));
/* 000762 */ 		}) ();
/* 000764 */ 		var group_parser = (function () {
/* 000764 */ 			var __accu0__ = self.latex_walker;
/* 000764 */ 			return __call__ (__accu0__.make_latex_group_parser, __accu0__, __kwargtrans__ ({delimiters: tok.arg}));
/* 000764 */ 		}) ();
/* 000769 */ 		var __left0__ = (function () {
/* 000769 */ 			var __accu0__ = self.latex_walker;
/* 000772 */ 			return __call__ (__accu0__.parse_content, __accu0__, group_parser, __kwargtrans__ ({token_reader: self.token_reader, parsing_state: (function () {
/* 000772 */ 				var __accu1__ = self;
/* 000772 */ 				return __call__ (__accu1__.make_child_parsing_state, __accu1__, self.parsing_state, LatexGroupNode, __kwargtrans__ ({token: tok}));
/* 000772 */ 			}) ()}));
/* 000772 */ 		}) ();
/* 000772 */ 		var groupnode = __left0__ [0];
/* 000772 */ 		var parsing_state_delta = __left0__ [1];
/* 000779 */ 		if (__t__ (parsing_state_delta !== null)) {
/* 000780 */ 			(function () {
/* 000780 */ 				var __accu0__ = logger;
/* 000780 */ 				return __call__ (__accu0__.warning, __accu0__, 'parsing_state_delta is ignored after parsing a LaTeX group: %r', parsing_state_delta);
/* 000780 */ 			}) ();
/* 000780 */ 		}
/* 000783 */ 		var stop_exc = (function () {
/* 000783 */ 			var __accu0__ = self;
/* 000783 */ 			return __call__ (__accu0__.push_to_nodelist, __accu0__, groupnode);
/* 000783 */ 		}) ();
/* 000784 */ 		if (__t__ (stop_exc !== null)) {
/* 000785 */ 			stop_exc.pos_end = groupnode.pos_end;
/* 000786 */ 			// pass;
/* 000789 */ 			var __except0__ = stop_exc;
/* 000789 */ 			__except0__.__cause__ = null;
/* 000789 */ 			throw __except0__;
/* 000789 */ 		}
/* 000791 */ 		// pass;
/* 000791 */ 	});},
/* 000796 */ 	get parse_macro () {return __get__ (this, function (self, tok) {
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
/* 000811 */ 		var macroname = tok.arg;
/* 000813 */ 		var mspec = null;
/* 000814 */ 		if (__t__ (self.parsing_state.latex_context !== null)) {
/* 000815 */ 			var mspec = (function () {
/* 000815 */ 				var __accu0__ = self.parsing_state.latex_context;
/* 000815 */ 				return __call__ (__accu0__.get_macro_spec, __accu0__, macroname);
/* 000815 */ 			}) ();
/* 000815 */ 		}
/* 000817 */ 		if (__t__ (mspec === null)) {
/* 000818 */ 			var exc = (function () {
/* 000818 */ 				var __accu0__ = self.latex_walker;
/* 000820 */ 				return __call__ (__accu0__.check_tolerant_parsing_ignore_error, __accu0__, __call__ (LatexWalkerParseError, null, __kwargtrans__ ({msg: (function () {
/* 000820 */ 					var __accu1__ = 'Encountered unknown macro ‘\\{}’';
/* 000820 */ 					return __call__ (__accu1__.format, __accu1__, macroname);
/* 000820 */ 				}) (), pos: tok.pos, error_type_info: dict ({'what': 'nodes_unknown_macro_name', 'macroname': macroname})})));
/* 000820 */ 			}) ();
/* 000828 */ 			if (__t__ (exc !== null)) {
/* 000829 */ 				var __except0__ = exc;
/* 000829 */ 				__except0__.__cause__ = null;
/* 000829 */ 				throw __except0__;
/* 000829 */ 			}
/* 000830 */ 			var mspec = null;
/* 000830 */ 		}
/* 000832 */ 		var node_class = LatexMacroNode;
/* 000833 */ 		var what = (function () {
/* 000833 */ 			var __accu0__ = 'macro ‘\\{}’';
/* 000833 */ 			return __call__ (__accu0__.format, __accu0__, macroname);
/* 000833 */ 		}) ();
/* 000835 */ 		return (function () {
/* 000835 */ 			var __accu0__ = self;
/* 000835 */ 			return __call__ (__accu0__.parse_invocable_token_type, __accu0__, tok, mspec, node_class, what);
/* 000835 */ 		}) ();
/* 000835 */ 	});},
/* 000837 */ 	get parse_environment () {return __get__ (this, function (self, tok) {
/* 000837 */ 		if (arguments.length) {
/* 000837 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000837 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000837 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000837 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000837 */ 					switch (__attrib0__) {
/* 000837 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000837 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000837 */ 					}
/* 000837 */ 				}
/* 000837 */ 			}
/* 000837 */ 		}
/* 000837 */ 		else {
/* 000837 */ 		}
/* 000853 */ 		var latex_walker = self.latex_walker;
/* 000856 */ 		var environmentname = tok.arg;
/* 000860 */ 		var envspec = (function () {
/* 000860 */ 			var __accu0__ = self.parsing_state.latex_context;
/* 000860 */ 			return __call__ (__accu0__.get_environment_spec, __accu0__, environmentname);
/* 000860 */ 		}) ();
/* 000862 */ 		if (__t__ (envspec === null)) {
/* 000863 */ 			var exc = (function () {
/* 000863 */ 				var __accu0__ = latex_walker;
/* 000865 */ 				return __call__ (__accu0__.check_tolerant_parsing_ignore_error, __accu0__, __call__ (LatexWalkerParseError, null, __kwargtrans__ ({msg: (function () {
/* 000865 */ 					var __accu1__ = 'Encountered unknown environment ‘{}{}{}’';
/* 000865 */ 					return __call__ (__accu1__.format, __accu1__, '{', environmentname, '}');
/* 000865 */ 				}) (), pos: tok.pos, error_type_info: dict ({'what': 'nodes_unknown_environment_name', 'environmentname': environmentname})})));
/* 000865 */ 			}) ();
/* 000874 */ 			if (__t__ (exc !== null)) {
/* 000875 */ 				var __except0__ = exc;
/* 000875 */ 				__except0__.__cause__ = null;
/* 000875 */ 				throw __except0__;
/* 000875 */ 			}
/* 000876 */ 			var envspec = null;
/* 000876 */ 		}
/* 000878 */ 		var node_class = LatexEnvironmentNode;
/* 000879 */ 		var what = (function () {
/* 000879 */ 			var __accu0__ = 'environment ‘{}{}{}’';
/* 000879 */ 			return __call__ (__accu0__.format, __accu0__, '{', environmentname, '}');
/* 000879 */ 		}) ();
/* 000881 */ 		return (function () {
/* 000881 */ 			var __accu0__ = self;
/* 000881 */ 			return __call__ (__accu0__.parse_invocable_token_type, __accu0__, tok, envspec, node_class, what);
/* 000881 */ 		}) ();
/* 000881 */ 	});},
/* 000883 */ 	get parse_specials () {return __get__ (this, function (self, tok) {
/* 000883 */ 		if (arguments.length) {
/* 000883 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000883 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000883 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000883 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000883 */ 					switch (__attrib0__) {
/* 000883 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000883 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000883 */ 					}
/* 000883 */ 				}
/* 000883 */ 			}
/* 000883 */ 		}
/* 000883 */ 		else {
/* 000883 */ 		}
/* 000897 */ 		var specials_spec = tok.arg;
/* 000899 */ 		var node_class = LatexSpecialsNode;
/* 000900 */ 		var what = (function () {
/* 000900 */ 			var __accu0__ = 'specials ‘{}’';
/* 000901 */ 			return __call__ (__accu0__.format, __accu0__, (__t__ (__call__ (hasattr, null, specials_spec, 'specials_chars')) ? __call__ (getattr, null, specials_spec, 'specials_chars') : '<unkonwn>'));
/* 000901 */ 		}) ();
/* 000906 */ 		return (function () {
/* 000906 */ 			var __accu0__ = self;
/* 000906 */ 			return __call__ (__accu0__.parse_invocable_token_type, __accu0__, tok, specials_spec, node_class, what);
/* 000906 */ 		}) ();
/* 000906 */ 	});},
/* 000908 */ 	get parse_invocable_token_type () {return __get__ (this, function (self, tok, spec, node_class, what) {
/* 000908 */ 		if (arguments.length) {
/* 000908 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000908 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000908 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000908 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000908 */ 					switch (__attrib0__) {
/* 000908 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000908 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000908 */ 						case 'spec': var spec = __allkwargs0__ [__attrib0__]; break;
/* 000908 */ 						case 'node_class': var node_class = __allkwargs0__ [__attrib0__]; break;
/* 000908 */ 						case 'what': var what = __allkwargs0__ [__attrib0__]; break;
/* 000908 */ 					}
/* 000908 */ 				}
/* 000908 */ 			}
/* 000908 */ 		}
/* 000908 */ 		else {
/* 000908 */ 		}
/* 000928 */ 		var latex_walker = self.latex_walker;
/* 000929 */ 		var token_reader = self.token_reader;
/* 000931 */ 		if (__t__ (spec !== null)) {
/* 000932 */ 			var node_parser = (function () {
/* 000932 */ 				var __accu0__ = spec;
/* 000932 */ 				return __call__ (__accu0__.get_node_parser, __accu0__, tok);
/* 000932 */ 			}) ();
/* 000932 */ 		}
/* 000933 */ 		else {
/* 000934 */ 			var node_parser = null;
/* 000934 */ 		}
/* 000936 */ 		if (__t__ (node_parser === null)) {
/* 000938 */ 			var exc = (function () {
/* 000938 */ 				var __accu0__ = latex_walker;
/* 000940 */ 				return __call__ (__accu0__.check_tolerant_parsing_ignore_error, __accu0__, __call__ (LatexWalkerParseError, null, __kwargtrans__ ({msg: (function () {
/* 000940 */ 					var __accu1__ = 'No parser found for callable token {!r}';
/* 000940 */ 					return __call__ (__accu1__.format, __accu1__, tok);
/* 000940 */ 				}) (), pos: tok.pos})));
/* 000940 */ 			}) ();
/* 000944 */ 			if (__t__ (exc !== null)) {
/* 000945 */ 				// pass;
/* 000948 */ 				var __except0__ = exc;
/* 000948 */ 				__except0__.__cause__ = null;
/* 000948 */ 				throw __except0__;
/* 000948 */ 			}
/* 000949 */ 			var result_node = null;
/* 000950 */ 			var parsing_state_delta = null;
/* 000950 */ 		}
/* 000951 */ 		else {
/* 000954 */ 			var __left0__ = (function () {
/* 000954 */ 				var __accu0__ = latex_walker;
/* 000957 */ 				return __call__ (__accu0__.parse_content, __accu0__, node_parser, token_reader, (function () {
/* 000957 */ 					var __accu1__ = self;
/* 000957 */ 					return __call__ (__accu1__.make_child_parsing_state, __accu1__, self.parsing_state, node_class, tok);
/* 000957 */ 				}) (), __kwargtrans__ ({open_context: tuple ([what, tok])}));
/* 000957 */ 			}) ();
/* 000957 */ 			var result_node = __left0__ [0];
/* 000957 */ 			var parsing_state_delta = __left0__ [1];
/* 000957 */ 		}
/* 000965 */ 		(function () {
/* 000965 */ 			var __accu0__ = self;
/* 000965 */ 			return __call__ (__accu0__.update_state_from_parsing_state_delta, __accu0__, parsing_state_delta);
/* 000965 */ 		}) ();
/* 000967 */ 		if (__t__ (result_node === null)) {
/* 000968 */ 			(function () {
/* 000968 */ 				var __accu0__ = logger;
/* 000968 */ 				return __call__ (__accu0__.warning, __accu0__, 'Parser %r produced no node (None) for token %r', node_parser, tok);
/* 000968 */ 			}) ();
/* 000969 */ 			return ;
/* 000969 */ 		}
/* 000971 */ 		var exc = (function () {
/* 000971 */ 			var __accu0__ = self;
/* 000971 */ 			return __call__ (__accu0__.push_to_nodelist, __accu0__, result_node);
/* 000971 */ 		}) ();
/* 000972 */ 		if (__t__ (exc !== null)) {
/* 000973 */ 			exc.pos_end = result_node.pos_end;
/* 000974 */ 			// pass;
/* 000977 */ 			var __except0__ = exc;
/* 000977 */ 			__except0__.__cause__ = null;
/* 000977 */ 			throw __except0__;
/* 000977 */ 		}
/* 000977 */ 	});},
/* 000980 */ 	get parse_math () {return __get__ (this, function (self, tok) {
/* 000980 */ 		if (arguments.length) {
/* 000980 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000980 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000980 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000980 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000980 */ 					switch (__attrib0__) {
/* 000980 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000980 */ 						case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000980 */ 					}
/* 000980 */ 				}
/* 000980 */ 			}
/* 000980 */ 		}
/* 000980 */ 		else {
/* 000980 */ 		}
/* 000995 */ 		// pass;
/* 000999 */ 		(function () {
/* 000999 */ 			var __accu0__ = self.token_reader;
/* 000999 */ 			return __call__ (__accu0__.move_to_token, __accu0__, tok, __kwargtrans__ ({rewind_pre_space: false}));
/* 000999 */ 		}) ();
/* 001003 */ 		var child_math_parsing_state = (function () {
/* 001003 */ 			var __accu0__ = self;
/* 001003 */ 			return __call__ (__accu0__.make_child_parsing_state, __accu0__, self.parsing_state, LatexMathNode, tok);
/* 001003 */ 		}) ();
/* 001008 */ 		// pass;
/* 001012 */ 		var math_parser = (function () {
/* 001012 */ 			var __accu0__ = self.latex_walker;
/* 001012 */ 			return __call__ (__accu0__.make_latex_math_parser, __accu0__, __kwargtrans__ ({math_mode_delimiters: tok.arg}));
/* 001012 */ 		}) ();
/* 001018 */ 		var __left0__ = (function () {
/* 001018 */ 			var __accu0__ = self.latex_walker;
/* 001018 */ 			return __call__ (__accu0__.parse_content, __accu0__, math_parser, __kwargtrans__ ({token_reader: self.token_reader, parsing_state: child_math_parsing_state}));
/* 001018 */ 		}) ();
/* 001018 */ 		var mathnode = __left0__ [0];
/* 001018 */ 		var parsing_state_delta = __left0__ [1];
/* 001024 */ 		(function () {
/* 001024 */ 			var __accu0__ = self;
/* 001024 */ 			return __call__ (__accu0__.update_state_from_parsing_state_delta, __accu0__, parsing_state_delta);
/* 001024 */ 		}) ();
/* 001026 */ 		if (__t__ (mathnode === null)) {
/* 001027 */ 			(function () {
/* 001027 */ 				var __accu0__ = logger;
/* 001027 */ 				return __call__ (__accu0__.warning, __accu0__, 'Math parser produced no node (None) for token %r', tok);
/* 001027 */ 			}) ();
/* 001028 */ 			return ;
/* 001028 */ 		}
/* 001030 */ 		var stop_exc = (function () {
/* 001030 */ 			var __accu0__ = self;
/* 001030 */ 			return __call__ (__accu0__.push_to_nodelist, __accu0__, mathnode);
/* 001030 */ 		}) ();
/* 001031 */ 		if (__t__ (stop_exc !== null)) {
/* 001032 */ 			stop_exc.pos_end = mathnode.pos_end;
/* 001033 */ 			// pass;
/* 001036 */ 			var __except0__ = stop_exc;
/* 001036 */ 			__except0__.__cause__ = null;
/* 001036 */ 			throw __except0__;
/* 001036 */ 		}
/* 001036 */ 	});}
/* 001036 */ });
/* 000037 */ 
//# sourceMappingURL=pylatexenc.latexnodes._nodescollector.map