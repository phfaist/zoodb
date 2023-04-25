/* 000001 */ // Transcrypt'ed from Python, 2023-04-25 12:01:28
/* 000037 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000038 */ import {ParsedArguments} from './pylatexenc.latexnodes._parsedargs.js';
/* 000037 */ import {LatexWalkerParseError} from './pylatexenc.latexnodes._exctypes.js';
/* 000037 */ export {LatexWalkerParseError, ParsedArguments};
/* 000001 */ var __name__ = 'pylatexenc.latexnodes.nodes';
/* 000042 */ export var _unicode_from_str = (function __lambda__ (x) {
/* 000042 */ 	if (arguments.length) {
/* 000042 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000042 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000042 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000042 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000042 */ 				switch (__attrib0__) {
/* 000042 */ 					case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000042 */ 				}
/* 000042 */ 			}
/* 000042 */ 		}
/* 000042 */ 	}
/* 000042 */ 	else {
/* 000042 */ 	}
/* 000042 */ 	return x;
/* 000042 */ });
/* 000062 */ export var LatexNode =  __class__ ('LatexNode', [object], {
/* 000062 */ 	__module__: __name__,
/* 000122 */ 	get __init__ () {return __get__ (this, function (self, _fields, _redundant_fields, parsing_state, pos, pos_end, latex_walker) {
/* 000122 */ 		if (typeof _redundant_fields == 'undefined' || (_redundant_fields != null && _redundant_fields.hasOwnProperty ("__kwargtrans__"))) {;
/* 000122 */ 			var _redundant_fields = null;
/* 000122 */ 		};
/* 000122 */ 		if (typeof parsing_state == 'undefined' || (parsing_state != null && parsing_state.hasOwnProperty ("__kwargtrans__"))) {;
/* 000122 */ 			var parsing_state = null;
/* 000122 */ 		};
/* 000122 */ 		if (typeof pos == 'undefined' || (pos != null && pos.hasOwnProperty ("__kwargtrans__"))) {;
/* 000122 */ 			var pos = null;
/* 000122 */ 		};
/* 000122 */ 		if (typeof pos_end == 'undefined' || (pos_end != null && pos_end.hasOwnProperty ("__kwargtrans__"))) {;
/* 000122 */ 			var pos_end = null;
/* 000122 */ 		};
/* 000122 */ 		if (typeof latex_walker == 'undefined' || (latex_walker != null && latex_walker.hasOwnProperty ("__kwargtrans__"))) {;
/* 000122 */ 			var latex_walker = null;
/* 000122 */ 		};
/* 000122 */ 		var kwargs = dict ();
/* 000122 */ 		if (arguments.length) {
/* 000122 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000122 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000122 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000122 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000122 */ 					switch (__attrib0__) {
/* 000122 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000122 */ 						case '_fields': var _fields = __allkwargs0__ [__attrib0__]; break;
/* 000122 */ 						case '_redundant_fields': var _redundant_fields = __allkwargs0__ [__attrib0__]; break;
/* 000122 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000122 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000122 */ 						case 'pos_end': var pos_end = __allkwargs0__ [__attrib0__]; break;
/* 000122 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000122 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000122 */ 					}
/* 000122 */ 				}
/* 000122 */ 				delete kwargs.__kwargtrans__;
/* 000122 */ 			}
/* 000122 */ 		}
/* 000122 */ 		else {
/* 000122 */ 		}
/* 000126 */ 		var len_ = (function () {
/* 000126 */ 			var __accu0__ = kwargs;
/* 000126 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'len', null);
/* 000126 */ 		}) ();
/* 000132 */ 		__call__ (__call__ (__super__, null, LatexNode, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000134 */ 		self.parsing_state = parsing_state;
/* 000135 */ 		self.latex_walker = latex_walker;
/* 000136 */ 		self.pos = pos;
/* 000137 */ 		self.pos_end = pos_end;
/* 000139 */ 		if (__t__ (__t__ (pos_end === null) && len_ !== null)) {
/* 000140 */ 			self.pos_end = __add__ (self.pos, len_);
/* 000140 */ 		}
/* 000143 */ 		self._fields = __call__ (tuple, null, __add__ (['pos', 'pos_end', 'parsing_state', 'latex_walker'], __call__ (list, null, _fields)));
/* 000144 */ 		if (__t__ (_redundant_fields !== null)) {
/* 000146 */ 			self._redundant_fields = __call__ (tuple, null, __add__ (__add__ (__call__ (list, null, self._fields), ['len']), __call__ (list, null, _redundant_fields)));
/* 000146 */ 		}
/* 000147 */ 		else {
/* 000148 */ 			self._redundant_fields = __call__ (tuple, null, __add__ (__call__ (list, null, self._fields), ['len']));
/* 000148 */ 		}
/* 000148 */ 	});},
/* 000150 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000150 */ 		if (arguments.length) {
/* 000150 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000150 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000150 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000150 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000150 */ 					switch (__attrib0__) {
/* 000150 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000150 */ 					}
/* 000150 */ 				}
/* 000150 */ 			}
/* 000150 */ 		}
/* 000150 */ 		else {
/* 000150 */ 		}
/* 000157 */ 		return LatexNode;
/* 000157 */ 	});},
/* 000159 */ 	get isNodeType () {return __get__ (this, function (self, t) {
/* 000159 */ 		if (arguments.length) {
/* 000159 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000159 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000159 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000159 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000159 */ 					switch (__attrib0__) {
/* 000159 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000159 */ 						case 't': var t = __allkwargs0__ [__attrib0__]; break;
/* 000159 */ 					}
/* 000159 */ 				}
/* 000159 */ 			}
/* 000159 */ 		}
/* 000159 */ 		else {
/* 000159 */ 		}
/* 000165 */ 		return __call__ (isinstance, null, self, t);
/* 000165 */ 	});},
/* 000168 */ 	get _get_len () {return __get__ (this, function (self) {
/* 000168 */ 		if (arguments.length) {
/* 000168 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000168 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000168 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000168 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000168 */ 					switch (__attrib0__) {
/* 000168 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000168 */ 					}
/* 000168 */ 				}
/* 000168 */ 			}
/* 000168 */ 		}
/* 000168 */ 		else {
/* 000168 */ 		}
/* 000169 */ 		if (__t__ (__t__ (self.pos === null) || self.pos_end === null)) {
/* 000170 */ 			return null;
/* 000170 */ 		}
/* 000171 */ 		return __sub__ (self.pos_end, self.pos);
/* 000171 */ 	});},
/* 000173 */ 	get latex_verbatim () {return __get__ (this, function (self) {
/* 000173 */ 		if (arguments.length) {
/* 000173 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000173 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000173 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000173 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000173 */ 					switch (__attrib0__) {
/* 000173 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000173 */ 					}
/* 000173 */ 				}
/* 000173 */ 			}
/* 000173 */ 		}
/* 000173 */ 		else {
/* 000173 */ 		}
/* 000179 */ 		if (__t__ (self.latex_walker === null)) {
/* 000180 */ 			var __except0__ = __call__ (py_TypeError, null, "Can't use latex_verbatim() on node because we don't have any latex_walker set");
/* 000180 */ 			__except0__.__cause__ = null;
/* 000180 */ 			throw __except0__;
/* 000180 */ 		}
/* 000182 */ 		return __getslice__ (self.latex_walker.s, self.pos, self.pos_end, 1);
/* 000182 */ 	});},
/* 000184 */ 	get __eq__ () {return __get__ (this, function (self, other) {
/* 000184 */ 		if (arguments.length) {
/* 000184 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000184 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000184 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000184 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000184 */ 					switch (__attrib0__) {
/* 000184 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000184 */ 						case 'other': var other = __allkwargs0__ [__attrib0__]; break;
/* 000184 */ 					}
/* 000184 */ 				}
/* 000184 */ 			}
/* 000184 */ 		}
/* 000184 */ 		else {
/* 000184 */ 		}
/* 000188 */ 		return __t__ (other !== null) && __t__ (__call__ (isinstance, null, other, LatexNode)) && __t__ ((function () {
/* 000188 */ 			var __accu0__ = self;
/* 000188 */ 			return __call__ (__accu0__.nodeType, __accu0__);
/* 000188 */ 		}) () === (function () {
/* 000188 */ 			var __accu0__ = other;
/* 000188 */ 			return __call__ (__accu0__.nodeType, __accu0__);
/* 000196 */ 		}) ()) && __t__ (other.parsing_state === self.parsing_state) && __t__ (other.latex_walker === self.latex_walker) && __t__ ((__t__ (__t__ (other.pos === null) && self.pos === null) || __eq__ (other.pos, self.pos))) && __t__ ((__t__ (__t__ (other.pos_end === null) && self.pos_end === null) || __eq__ (other.pos_end, self.pos_end))) && __call__ (all, null, (function () {
/* 000196 */ 			var __accu0__ = [];
/* 000197 */ 			var __iterable0__ = self._fields;
/* 000197 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000200 */ 				var f = __getitem__ (__iterable0__, __index0__);
/* 000200 */ 				(function () {
/* 000200 */ 					var __accu1__ = __accu0__;
/* 000199 */ 					return __call__ (__accu1__.append, __accu1__, __t__ (__t__ (__call__ (getattr, null, self, f) === null) && __call__ (getattr, null, other, f) === null) || __eq__ (__call__ (getattr, null, self, f), __call__ (getattr, null, other, f)));
/* 000199 */ 				}) ();
/* 000199 */ 			}
/* 000199 */ 			return py_iter (__accu0__);
/* 000199 */ 		}) ());
/* 000199 */ 	});},
/* 000206 */ 	get __ne__ () {return __get__ (this, function (self, other) {
/* 000206 */ 		if (arguments.length) {
/* 000206 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000206 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000206 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000206 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000206 */ 					switch (__attrib0__) {
/* 000206 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000206 */ 						case 'other': var other = __allkwargs0__ [__attrib0__]; break;
/* 000206 */ 					}
/* 000206 */ 				}
/* 000206 */ 			}
/* 000206 */ 		}
/* 000206 */ 		else {
/* 000206 */ 		}
/* 000206 */ 		return NotImplemented;
/* 000206 */ 	});},
/* 000208 */ 	__hash__: null,
/* 000210 */ 	get __unicode__ () {return __get__ (this, function (self) {
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
/* 000211 */ 		return __call__ (_unicode_from_str, null, (function () {
/* 000211 */ 			var __accu0__ = self;
/* 000211 */ 			return __call__ (__accu0__.__str__, __accu0__);
/* 000211 */ 		}) ());
/* 000211 */ 	});},
/* 000212 */ 	get __str__ () {return __get__ (this, function (self) {
/* 000212 */ 		if (arguments.length) {
/* 000212 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000212 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000212 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000212 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000212 */ 					switch (__attrib0__) {
/* 000212 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000212 */ 					}
/* 000212 */ 				}
/* 000212 */ 			}
/* 000212 */ 		}
/* 000212 */ 		else {
/* 000212 */ 		}
/* 000213 */ 		return (function () {
/* 000213 */ 			var __accu0__ = self;
/* 000213 */ 			return __call__ (__accu0__.__repr__, __accu0__);
/* 000213 */ 		}) ();
/* 000213 */ 	});},
/* 000214 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000214 */ 		if (arguments.length) {
/* 000214 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000214 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000214 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000214 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000214 */ 					switch (__attrib0__) {
/* 000214 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000214 */ 					}
/* 000214 */ 				}
/* 000214 */ 			}
/* 000214 */ 		}
/* 000214 */ 		else {
/* 000214 */ 		}
/* 000216 */ 		return __add__ (__add__ (__add__ ((function () {
/* 000216 */ 			var __accu0__ = self;
/* 000216 */ 			return __call__ (__accu0__.nodeType, __accu0__);
/* 000217 */ 		}) ().__name__, '('), (function () {
/* 000217 */ 			var __accu0__ = ', ';
/* 000217 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000217 */ 				var __accu1__ = [];
/* 000217 */ 				var __iterable0__ = self._fields;
/* 000217 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000217 */ 					var k = __getitem__ (__iterable0__, __index0__);
/* 000217 */ 					(function () {
/* 000217 */ 						var __accu2__ = __accu1__;
/* 000217 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000217 */ 							var __accu3__ = '{}={!r}';
/* 000217 */ 							return __call__ (__accu3__.format, __accu3__, k, __call__ (getattr, null, self, k));
/* 000217 */ 						}) ());
/* 000217 */ 					}) ();
/* 000217 */ 				}
/* 000217 */ 				return __accu1__;
/* 000217 */ 			}) ());
/* 000217 */ 		}) ()), ')');
/* 000217 */ 	});},
/* 000221 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000221 */ 		if (arguments.length) {
/* 000221 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000221 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000221 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000221 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000221 */ 					switch (__attrib0__) {
/* 000221 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000221 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000221 */ 					}
/* 000221 */ 				}
/* 000221 */ 			}
/* 000221 */ 		}
/* 000221 */ 		else {
/* 000221 */ 		}
/* 000222 */ 		(function () {
/* 000222 */ 			var __accu0__ = visitor;
/* 000222 */ 			return __call__ (__accu0__.visit_unknown_node, __accu0__, self);
/* 000222 */ 		}) ();
/* 000222 */ 	});},
/* 000224 */ 	get to_json_object_with_latexwalker () {return __get__ (this, function (self, latexwalker) {
/* 000224 */ 		if (arguments.length) {
/* 000224 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000224 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000224 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000224 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000224 */ 					switch (__attrib0__) {
/* 000224 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000224 */ 						case 'latexwalker': var latexwalker = __allkwargs0__ [__attrib0__]; break;
/* 000224 */ 					}
/* 000224 */ 				}
/* 000224 */ 			}
/* 000224 */ 		}
/* 000224 */ 		else {
/* 000224 */ 		}
/* 000226 */ 		var d = dict ({'nodetype': self.__class__.__name__});
/* 000230 */ 		var __iterable0__ = self._fields;
/* 000230 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000230 */ 			var fld = __getitem__ (__iterable0__, __index0__);
/* 000231 */ 			if (__t__ (__eq__ (fld, 'spec'))) {
/* 000233 */ 				__setitem__ (d, fld, __call__ (repr, null, self.spec));
/* 000233 */ 			}
/* 000234 */ 			else if (__t__ (__eq__ (fld, 'latex_walker'))) {
/* 000236 */ 				// pass;
/* 000236 */ 			}
/* 000237 */ 			else {
/* 000238 */ 				__setitem__ (d, fld, __call__ (getattr, null, self, fld));
/* 000238 */ 			}
/* 000238 */ 		}
/* 000239 */ 		(function () {
/* 000239 */ 			var __accu0__ = d;
/* 000239 */ 			return __call__ (__accu0__.py_update, __accu0__, (function () {
/* 000239 */ 				var __accu1__ = latexwalker;
/* 000239 */ 				return __call__ (__accu1__.pos_to_lineno_colno, __accu1__, self.pos, __kwargtrans__ ({as_dict: true}));
/* 000239 */ 			}) ());
/* 000239 */ 		}) ();
/* 000240 */ 		return d;
/* 000240 */ 	});},
/* 000242 */ 	get format_pos () {return __get__ (this, function (self) {
/* 000242 */ 		if (arguments.length) {
/* 000242 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000242 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000242 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000242 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000242 */ 					switch (__attrib0__) {
/* 000242 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000242 */ 					}
/* 000242 */ 				}
/* 000242 */ 			}
/* 000242 */ 		}
/* 000242 */ 		else {
/* 000242 */ 		}
/* 000243 */ 		if (__t__ (self.latex_walker !== null)) {
/* 000244 */ 			return (function () {
/* 000244 */ 				var __accu0__ = self.latex_walker;
/* 000244 */ 				return __call__ (__accu0__.format_pos, __accu0__, self.pos);
/* 000244 */ 			}) ();
/* 000244 */ 		}
/* 000245 */ 		return (function () {
/* 000245 */ 			var __accu0__ = '[@ pos {}]';
/* 000245 */ 			return __call__ (__accu0__.format, __accu0__, __call__ (repr, null, self.pos));
/* 000245 */ 		}) ();
/* 000245 */ 	});}
/* 000245 */ });
/* 000245 */ Object.defineProperty (LatexNode, 'len', property.call (LatexNode, LatexNode._get_len));;
/* 000248 */ export var LatexCharsNode =  __class__ ('LatexCharsNode', [LatexNode], {
/* 000248 */ 	__module__: __name__,
/* 000257 */ 	get __init__ () {return __get__ (this, function (self, chars) {
/* 000257 */ 		var kwargs = dict ();
/* 000257 */ 		if (arguments.length) {
/* 000257 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000257 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000257 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000257 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000257 */ 					switch (__attrib0__) {
/* 000257 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000257 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000257 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000257 */ 					}
/* 000257 */ 				}
/* 000257 */ 				delete kwargs.__kwargtrans__;
/* 000257 */ 			}
/* 000257 */ 		}
/* 000257 */ 		else {
/* 000257 */ 		}
/* 000258 */ 		__call__ (__call__ (__super__, null, LatexCharsNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['chars'])}, kwargs)));
/* 000262 */ 		self.chars = chars;
/* 000262 */ 	});},
/* 000264 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000264 */ 		if (arguments.length) {
/* 000264 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000264 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000264 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000264 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000264 */ 					switch (__attrib0__) {
/* 000264 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000264 */ 					}
/* 000264 */ 				}
/* 000264 */ 			}
/* 000264 */ 		}
/* 000264 */ 		else {
/* 000264 */ 		}
/* 000265 */ 		return LatexCharsNode;
/* 000265 */ 	});},
/* 000267 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000267 */ 		if (arguments.length) {
/* 000267 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000267 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000267 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000267 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000267 */ 					switch (__attrib0__) {
/* 000267 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000267 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000267 */ 					}
/* 000267 */ 				}
/* 000267 */ 			}
/* 000267 */ 		}
/* 000267 */ 		else {
/* 000267 */ 		}
/* 000268 */ 		(function () {
/* 000268 */ 			var __accu0__ = visitor;
/* 000268 */ 			return __call__ (__accu0__.visit_chars_node, __accu0__, self);
/* 000268 */ 		}) ();
/* 000268 */ 	});}
/* 000268 */ });
/* 000272 */ export var LatexGroupNode =  __class__ ('LatexGroupNode', [LatexNode], {
/* 000272 */ 	__module__: __name__,
/* 000297 */ 	get __init__ () {return __get__ (this, function (self, nodelist) {
/* 000297 */ 		var kwargs = dict ();
/* 000297 */ 		if (arguments.length) {
/* 000297 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000297 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000297 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000297 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000297 */ 					switch (__attrib0__) {
/* 000297 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000297 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000297 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000297 */ 					}
/* 000297 */ 				}
/* 000297 */ 				delete kwargs.__kwargtrans__;
/* 000297 */ 			}
/* 000297 */ 		}
/* 000297 */ 		else {
/* 000297 */ 		}
/* 000298 */ 		var delimiters = (function () {
/* 000298 */ 			var __accu0__ = kwargs;
/* 000298 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'delimiters', tuple (['{', '}']));
/* 000298 */ 		}) ();
/* 000299 */ 		__call__ (__call__ (__super__, null, LatexGroupNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['nodelist', 'delimiters'])}, kwargs)));
/* 000303 */ 		self.nodelist = nodelist;
/* 000304 */ 		self.delimiters = delimiters;
/* 000304 */ 	});},
/* 000306 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000306 */ 		if (arguments.length) {
/* 000306 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000306 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000306 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000306 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000306 */ 					switch (__attrib0__) {
/* 000306 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000306 */ 					}
/* 000306 */ 				}
/* 000306 */ 			}
/* 000306 */ 		}
/* 000306 */ 		else {
/* 000306 */ 		}
/* 000307 */ 		return LatexGroupNode;
/* 000307 */ 	});},
/* 000309 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000309 */ 		if (arguments.length) {
/* 000309 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000309 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000309 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000309 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000309 */ 					switch (__attrib0__) {
/* 000309 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000309 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000309 */ 					}
/* 000309 */ 				}
/* 000309 */ 			}
/* 000309 */ 		}
/* 000309 */ 		else {
/* 000309 */ 		}
/* 000310 */ 		if (__t__ (self.nodelist !== null)) {
/* 000311 */ 			var __iterable0__ = self.nodelist;
/* 000311 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000311 */ 				var node = __getitem__ (__iterable0__, __index0__);
/* 000312 */ 				if (__t__ (node !== null)) {
/* 000313 */ 					(function () {
/* 000313 */ 						var __accu0__ = node;
/* 000313 */ 						return __call__ (__accu0__.accept_node_visitor, __accu0__, visitor);
/* 000313 */ 					}) ();
/* 000313 */ 				}
/* 000313 */ 			}
/* 000313 */ 		}
/* 000314 */ 		(function () {
/* 000314 */ 			var __accu0__ = visitor;
/* 000314 */ 			return __call__ (__accu0__.visit_group_node, __accu0__, self);
/* 000314 */ 		}) ();
/* 000314 */ 	});}
/* 000314 */ });
/* 000317 */ export var LatexCommentNode =  __class__ ('LatexCommentNode', [LatexNode], {
/* 000317 */ 	__module__: __name__,
/* 000331 */ 	get __init__ () {return __get__ (this, function (self, comment) {
/* 000331 */ 		var kwargs = dict ();
/* 000331 */ 		if (arguments.length) {
/* 000331 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000331 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000331 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000331 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000331 */ 					switch (__attrib0__) {
/* 000331 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000331 */ 						case 'comment': var comment = __allkwargs0__ [__attrib0__]; break;
/* 000331 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000331 */ 					}
/* 000331 */ 				}
/* 000331 */ 				delete kwargs.__kwargtrans__;
/* 000331 */ 			}
/* 000331 */ 		}
/* 000331 */ 		else {
/* 000331 */ 		}
/* 000332 */ 		var comment_post_space = (function () {
/* 000332 */ 			var __accu0__ = kwargs;
/* 000332 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'comment_post_space', '');
/* 000332 */ 		}) ();
/* 000334 */ 		__call__ (__call__ (__super__, null, LatexCommentNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['comment', 'comment_post_space'])}, kwargs)));
/* 000339 */ 		self.comment = comment;
/* 000340 */ 		self.comment_post_space = comment_post_space;
/* 000340 */ 	});},
/* 000342 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000342 */ 		if (arguments.length) {
/* 000342 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000342 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000342 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000342 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000342 */ 					switch (__attrib0__) {
/* 000342 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000342 */ 					}
/* 000342 */ 				}
/* 000342 */ 			}
/* 000342 */ 		}
/* 000342 */ 		else {
/* 000342 */ 		}
/* 000343 */ 		return LatexCommentNode;
/* 000343 */ 	});},
/* 000345 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000345 */ 		if (arguments.length) {
/* 000345 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000345 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000345 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000345 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000345 */ 					switch (__attrib0__) {
/* 000345 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000345 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000345 */ 					}
/* 000345 */ 				}
/* 000345 */ 			}
/* 000345 */ 		}
/* 000345 */ 		else {
/* 000345 */ 		}
/* 000346 */ 		(function () {
/* 000346 */ 			var __accu0__ = visitor;
/* 000346 */ 			return __call__ (__accu0__.visit_comment_node, __accu0__, self);
/* 000346 */ 		}) ();
/* 000346 */ 	});}
/* 000346 */ });
/* 000349 */ export var LatexMacroNode =  __class__ ('LatexMacroNode', [LatexNode], {
/* 000349 */ 	__module__: __name__,
/* 000413 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000413 */ 		var kwargs = dict ();
/* 000413 */ 		if (arguments.length) {
/* 000413 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000413 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000413 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000413 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000413 */ 					switch (__attrib0__) {
/* 000413 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000413 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000413 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000413 */ 					}
/* 000413 */ 				}
/* 000413 */ 				delete kwargs.__kwargtrans__;
/* 000413 */ 			}
/* 000413 */ 		}
/* 000413 */ 		else {
/* 000413 */ 		}
/* 000414 */ 		var nodeargd = (function () {
/* 000414 */ 			var __accu0__ = kwargs;
/* 000414 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'nodeargd', __call__ (ParsedArguments, null));
/* 000414 */ 		}) ();
/* 000415 */ 		var macro_post_space = (function () {
/* 000415 */ 			var __accu0__ = kwargs;
/* 000415 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'macro_post_space', '');
/* 000415 */ 		}) ();
/* 000416 */ 		var spec = (function () {
/* 000416 */ 			var __accu0__ = kwargs;
/* 000416 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'spec', null);
/* 000416 */ 		}) ();
/* 000418 */ 		__call__ (__call__ (__super__, null, LatexMacroNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['macroname', 'spec', 'nodeargd', 'macro_post_space']), _redundant_fields: tuple (['nodeoptarg', 'nodeargs'])}, kwargs)));
/* 000423 */ 		self.macroname = macroname;
/* 000424 */ 		self.spec = spec;
/* 000425 */ 		self.nodeargd = nodeargd;
/* 000426 */ 		self.macro_post_space = macro_post_space;
/* 000426 */ 	});},
/* 000428 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000428 */ 		if (arguments.length) {
/* 000428 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000428 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000428 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000428 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000428 */ 					switch (__attrib0__) {
/* 000428 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000428 */ 					}
/* 000428 */ 				}
/* 000428 */ 			}
/* 000428 */ 		}
/* 000428 */ 		else {
/* 000428 */ 		}
/* 000429 */ 		return LatexMacroNode;
/* 000429 */ 	});},
/* 000431 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000431 */ 		if (arguments.length) {
/* 000431 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000431 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000431 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000431 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000431 */ 					switch (__attrib0__) {
/* 000431 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000431 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000431 */ 					}
/* 000431 */ 				}
/* 000431 */ 			}
/* 000431 */ 		}
/* 000431 */ 		else {
/* 000431 */ 		}
/* 000432 */ 		if (__t__ (self.nodeargd !== null)) {
/* 000433 */ 			(function () {
/* 000433 */ 				var __accu0__ = self.nodeargd;
/* 000433 */ 				return __call__ (__accu0__.accept_node_visitor, __accu0__, visitor);
/* 000433 */ 			}) ();
/* 000433 */ 		}
/* 000434 */ 		(function () {
/* 000434 */ 			var __accu0__ = visitor;
/* 000434 */ 			return __call__ (__accu0__.visit_macro_node, __accu0__, self);
/* 000434 */ 		}) ();
/* 000434 */ 	});}
/* 000434 */ });
/* 000457 */ export var LatexEnvironmentNode =  __class__ ('LatexEnvironmentNode', [LatexNode], {
/* 000457 */ 	__module__: __name__,
/* 000523 */ 	get __init__ () {return __get__ (this, function (self, environmentname, nodelist) {
/* 000523 */ 		var kwargs = dict ();
/* 000523 */ 		if (arguments.length) {
/* 000523 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000523 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000523 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000523 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000523 */ 					switch (__attrib0__) {
/* 000523 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000523 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000523 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000523 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000523 */ 					}
/* 000523 */ 				}
/* 000523 */ 				delete kwargs.__kwargtrans__;
/* 000523 */ 			}
/* 000523 */ 		}
/* 000523 */ 		else {
/* 000523 */ 		}
/* 000524 */ 		var nodeargd = (function () {
/* 000524 */ 			var __accu0__ = kwargs;
/* 000524 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'nodeargd', __call__ (ParsedArguments, null));
/* 000524 */ 		}) ();
/* 000525 */ 		var spec = (function () {
/* 000525 */ 			var __accu0__ = kwargs;
/* 000525 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'spec', null);
/* 000525 */ 		}) ();
/* 000530 */ 		__call__ (__call__ (__super__, null, LatexEnvironmentNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['environmentname', 'spec', 'nodelist', 'nodeargd']), _redundant_fields: tuple (['envname', 'optargs', 'args'])}, kwargs)));
/* 000535 */ 		self.environmentname = environmentname;
/* 000536 */ 		self.spec = spec;
/* 000537 */ 		self.nodelist = nodelist;
/* 000538 */ 		self.nodeargd = nodeargd;
/* 000538 */ 	});},
/* 000545 */ 	get _get_envname () {return __get__ (this, function (self) {
/* 000545 */ 		if (arguments.length) {
/* 000545 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000545 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000545 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000545 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000545 */ 					switch (__attrib0__) {
/* 000545 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000545 */ 					}
/* 000545 */ 				}
/* 000545 */ 			}
/* 000545 */ 		}
/* 000545 */ 		else {
/* 000545 */ 		}
/* 000547 */ 		return self.environmentname;
/* 000547 */ 	});},
/* 000556 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000556 */ 		if (arguments.length) {
/* 000556 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000556 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000556 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000556 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000556 */ 					switch (__attrib0__) {
/* 000556 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000556 */ 					}
/* 000556 */ 				}
/* 000556 */ 			}
/* 000556 */ 		}
/* 000556 */ 		else {
/* 000556 */ 		}
/* 000557 */ 		return LatexEnvironmentNode;
/* 000557 */ 	});},
/* 000559 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000559 */ 		if (arguments.length) {
/* 000559 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000559 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000559 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000559 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000559 */ 					switch (__attrib0__) {
/* 000559 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000559 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000559 */ 					}
/* 000559 */ 				}
/* 000559 */ 			}
/* 000559 */ 		}
/* 000559 */ 		else {
/* 000559 */ 		}
/* 000560 */ 		if (__t__ (self.nodeargd !== null)) {
/* 000561 */ 			(function () {
/* 000561 */ 				var __accu0__ = self.nodeargd;
/* 000561 */ 				return __call__ (__accu0__.accept_node_visitor, __accu0__, visitor);
/* 000561 */ 			}) ();
/* 000561 */ 		}
/* 000562 */ 		if (__t__ (self.nodelist !== null)) {
/* 000563 */ 			var __iterable0__ = self.nodelist;
/* 000563 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000563 */ 				var node = __getitem__ (__iterable0__, __index0__);
/* 000564 */ 				if (__t__ (node !== null)) {
/* 000565 */ 					(function () {
/* 000565 */ 						var __accu0__ = node;
/* 000565 */ 						return __call__ (__accu0__.accept_node_visitor, __accu0__, visitor);
/* 000565 */ 					}) ();
/* 000565 */ 				}
/* 000565 */ 			}
/* 000565 */ 		}
/* 000566 */ 		(function () {
/* 000566 */ 			var __accu0__ = visitor;
/* 000566 */ 			return __call__ (__accu0__.visit_environment_node, __accu0__, self);
/* 000566 */ 		}) ();
/* 000566 */ 	});}
/* 000566 */ });
/* 000566 */ Object.defineProperty (LatexEnvironmentNode, 'envname', property.call (LatexEnvironmentNode, LatexEnvironmentNode._get_envname));;
/* 000570 */ export var LatexSpecialsNode =  __class__ ('LatexSpecialsNode', [LatexNode], {
/* 000570 */ 	__module__: __name__,
/* 000608 */ 	get __init__ () {return __get__ (this, function (self, specials_chars) {
/* 000608 */ 		var kwargs = dict ();
/* 000608 */ 		if (arguments.length) {
/* 000608 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000608 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000608 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000608 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000608 */ 					switch (__attrib0__) {
/* 000608 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000608 */ 						case 'specials_chars': var specials_chars = __allkwargs0__ [__attrib0__]; break;
/* 000608 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000608 */ 					}
/* 000608 */ 				}
/* 000608 */ 				delete kwargs.__kwargtrans__;
/* 000608 */ 			}
/* 000608 */ 		}
/* 000608 */ 		else {
/* 000608 */ 		}
/* 000610 */ 		var spec = (function () {
/* 000610 */ 			var __accu0__ = kwargs;
/* 000610 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'spec', null);
/* 000610 */ 		}) ();
/* 000611 */ 		var nodeargd = (function () {
/* 000611 */ 			var __accu0__ = kwargs;
/* 000611 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'nodeargd', null);
/* 000611 */ 		}) ();
/* 000613 */ 		__call__ (__call__ (__super__, null, LatexSpecialsNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['specials_chars', 'spec', 'nodeargd'])}, kwargs)));
/* 000617 */ 		self.specials_chars = specials_chars;
/* 000618 */ 		self.spec = spec;
/* 000619 */ 		self.nodeargd = nodeargd;
/* 000619 */ 	});},
/* 000621 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000621 */ 		if (arguments.length) {
/* 000621 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000621 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000621 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000621 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000621 */ 					switch (__attrib0__) {
/* 000621 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000621 */ 					}
/* 000621 */ 				}
/* 000621 */ 			}
/* 000621 */ 		}
/* 000621 */ 		else {
/* 000621 */ 		}
/* 000622 */ 		return LatexSpecialsNode;
/* 000622 */ 	});},
/* 000624 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000624 */ 		if (arguments.length) {
/* 000624 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000624 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000624 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000624 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000624 */ 					switch (__attrib0__) {
/* 000624 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000624 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000624 */ 					}
/* 000624 */ 				}
/* 000624 */ 			}
/* 000624 */ 		}
/* 000624 */ 		else {
/* 000624 */ 		}
/* 000625 */ 		if (__t__ (self.nodeargd !== null)) {
/* 000626 */ 			(function () {
/* 000626 */ 				var __accu0__ = self.nodeargd;
/* 000626 */ 				return __call__ (__accu0__.accept_node_visitor, __accu0__, visitor);
/* 000626 */ 			}) ();
/* 000626 */ 		}
/* 000627 */ 		(function () {
/* 000627 */ 			var __accu0__ = visitor;
/* 000627 */ 			return __call__ (__accu0__.visit_specials_node, __accu0__, self);
/* 000627 */ 		}) ();
/* 000627 */ 	});}
/* 000627 */ });
/* 000630 */ export var LatexMathNode =  __class__ ('LatexMathNode', [LatexNode], {
/* 000630 */ 	__module__: __name__,
/* 000656 */ 	get __init__ () {return __get__ (this, function (self, displaytype, nodelist) {
/* 000656 */ 		if (typeof nodelist == 'undefined' || (nodelist != null && nodelist.hasOwnProperty ("__kwargtrans__"))) {;
/* 000656 */ 			var nodelist = [];
/* 000656 */ 		};
/* 000656 */ 		var kwargs = dict ();
/* 000656 */ 		if (arguments.length) {
/* 000656 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000656 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000656 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000656 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000656 */ 					switch (__attrib0__) {
/* 000656 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000656 */ 						case 'displaytype': var displaytype = __allkwargs0__ [__attrib0__]; break;
/* 000656 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000656 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000656 */ 					}
/* 000656 */ 				}
/* 000656 */ 				delete kwargs.__kwargtrans__;
/* 000656 */ 			}
/* 000656 */ 		}
/* 000656 */ 		else {
/* 000656 */ 		}
/* 000657 */ 		var delimiters = (function () {
/* 000657 */ 			var __accu0__ = kwargs;
/* 000657 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'delimiters', tuple ([null, null]));
/* 000657 */ 		}) ();
/* 000659 */ 		__call__ (__call__ (__super__, null, LatexMathNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['displaytype', 'nodelist', 'delimiters'])}, kwargs)));
/* 000664 */ 		self.displaytype = displaytype;
/* 000665 */ 		self.nodelist = nodelist;
/* 000666 */ 		self.delimiters = delimiters;
/* 000666 */ 	});},
/* 000668 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000668 */ 		if (arguments.length) {
/* 000668 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000668 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000668 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000668 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000668 */ 					switch (__attrib0__) {
/* 000668 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000668 */ 					}
/* 000668 */ 				}
/* 000668 */ 			}
/* 000668 */ 		}
/* 000668 */ 		else {
/* 000668 */ 		}
/* 000669 */ 		return LatexMathNode;
/* 000669 */ 	});},
/* 000672 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000672 */ 		if (arguments.length) {
/* 000672 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000672 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000672 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000672 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000672 */ 					switch (__attrib0__) {
/* 000672 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000672 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000672 */ 					}
/* 000672 */ 				}
/* 000672 */ 			}
/* 000672 */ 		}
/* 000672 */ 		else {
/* 000672 */ 		}
/* 000673 */ 		if (__t__ (self.nodelist !== null)) {
/* 000674 */ 			var __iterable0__ = self.nodelist;
/* 000674 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000674 */ 				var node = __getitem__ (__iterable0__, __index0__);
/* 000675 */ 				if (__t__ (node !== null)) {
/* 000676 */ 					(function () {
/* 000676 */ 						var __accu0__ = node;
/* 000676 */ 						return __call__ (__accu0__.accept_node_visitor, __accu0__, visitor);
/* 000676 */ 					}) ();
/* 000676 */ 				}
/* 000676 */ 			}
/* 000676 */ 		}
/* 000677 */ 		(function () {
/* 000677 */ 			var __accu0__ = visitor;
/* 000677 */ 			return __call__ (__accu0__.visit_math_node, __accu0__, self);
/* 000677 */ 		}) ();
/* 000677 */ 	});}
/* 000677 */ });
/* 000685 */ export var LatexNodeList =  __class__ ('LatexNodeList', [object], {
/* 000685 */ 	__module__: __name__,
/* 000727 */ 	get __init__ () {return __get__ (this, function (self, nodelist) {
/* 000727 */ 		var kwargs = dict ();
/* 000727 */ 		if (arguments.length) {
/* 000727 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000727 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000727 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000727 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000727 */ 					switch (__attrib0__) {
/* 000727 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000727 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000727 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000727 */ 					}
/* 000727 */ 				}
/* 000727 */ 				delete kwargs.__kwargtrans__;
/* 000727 */ 			}
/* 000727 */ 		}
/* 000727 */ 		else {
/* 000727 */ 		}
/* 000729 */ 		if (__t__ (__call__ (isinstance, null, nodelist, LatexNodeList))) {
/* 000730 */ 			var obj = nodelist;
/* 000731 */ 			self.nodelist = obj.nodelist;
/* 000732 */ 			self.parsing_state = obj.parsing_state;
/* 000733 */ 			self.latex_walker = obj.latex_walker;
/* 000734 */ 			self.pos = obj.pos;
/* 000735 */ 			self.pos_end = obj.pos_end;
/* 000736 */ 			return ;
/* 000736 */ 		}
/* 000738 */ 		self.nodelist = nodelist;
/* 000740 */ 		if (__t__ (self.nodelist === null)) {
/* 000741 */ 			(function () {
/* 000741 */ 				var __accu0__ = logger;
/* 000741 */ 				return __call__ (__accu0__.warning, __accu0__, "You're creating a LatexNodeList with nodelist=None. That's likely to cause crashes!");
/* 000741 */ 			}) ();
/* 000741 */ 		}
/* 000744 */ 		self.parsing_state = (function () {
/* 000744 */ 			var __accu0__ = kwargs;
/* 000744 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'parsing_state', null);
/* 000744 */ 		}) ();
/* 000745 */ 		self.latex_walker = (function () {
/* 000745 */ 			var __accu0__ = kwargs;
/* 000745 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'latex_walker', null);
/* 000745 */ 		}) ();
/* 000746 */ 		self.pos = (function () {
/* 000746 */ 			var __accu0__ = kwargs;
/* 000746 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'pos', null);
/* 000746 */ 		}) ();
/* 000747 */ 		self.pos_end = (function () {
/* 000747 */ 			var __accu0__ = kwargs;
/* 000747 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'pos_end', null);
/* 000747 */ 		}) ();
/* 000749 */ 		if (__t__ (__call__ (len, null, kwargs))) {
/* 000751 */ 			var __except0__ = __call__ (ValueError, null, __add__ ('Unexpected keyword arguments to LatexNodeList: ', __call__ (repr, null, kwargs)));
/* 000751 */ 			__except0__.__cause__ = null;
/* 000751 */ 			throw __except0__;
/* 000751 */ 		}
/* 000754 */ 		var __left0__ = __call__ (_update_posposend_from_nodelist, null, self.pos, self.pos_end, self.nodelist);
/* 000754 */ 		self.pos = __left0__ [0];
/* 000754 */ 		self.pos_end = __left0__ [1];
/* 000754 */ 	});},
/* 000757 */ 	_fields: tuple (['nodelist', 'parsing_state', 'latex_walker', 'pos', 'pos_end']),
/* 000761 */ 	get _get_len () {return __get__ (this, function (self) {
/* 000761 */ 		if (arguments.length) {
/* 000761 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000761 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000761 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000761 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000761 */ 					switch (__attrib0__) {
/* 000761 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000761 */ 					}
/* 000761 */ 				}
/* 000761 */ 			}
/* 000761 */ 		}
/* 000761 */ 		else {
/* 000761 */ 		}
/* 000762 */ 		if (__t__ (__t__ (self.pos === null) || self.pos_end === null)) {
/* 000763 */ 			return null;
/* 000763 */ 		}
/* 000764 */ 		return __sub__ (self.pos_end, self.pos);
/* 000764 */ 	});},
/* 000767 */ 	get __iter__ () {return __get__ (this, function (self) {
/* 000767 */ 		if (arguments.length) {
/* 000767 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000767 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000767 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000767 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000767 */ 					switch (__attrib0__) {
/* 000767 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000767 */ 					}
/* 000767 */ 				}
/* 000767 */ 			}
/* 000767 */ 		}
/* 000767 */ 		else {
/* 000767 */ 		}
/* 000768 */ 		if (__t__ (self.nodelist === null)) {
/* 000769 */ 			return __call__ (py_iter, null, []);
/* 000769 */ 		}
/* 000770 */ 		return __call__ (py_iter, null, self.nodelist);
/* 000770 */ 	});},
/* 000770 */ 	[Symbol.iterator] () {return this.__iter__ ()},
/* 000773 */ 	get __getitem__ () {return __get__ (this, function (self, index) {
/* 000773 */ 		if (arguments.length) {
/* 000773 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000773 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000773 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000773 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000773 */ 					switch (__attrib0__) {
/* 000773 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000773 */ 						case 'index': var index = __allkwargs0__ [__attrib0__]; break;
/* 000773 */ 					}
/* 000773 */ 				}
/* 000773 */ 			}
/* 000773 */ 		}
/* 000773 */ 		else {
/* 000773 */ 		}
/* 000784 */ 		try {
/* 000785 */ 			if (__t__ (__eq__ (__call__ (len, null, index), 3))) {
/* 000786 */ 				var __left0__ = index;
/* 000786 */ 				var lower = __left0__ [0];
/* 000786 */ 				var upper = __left0__ [1];
/* 000786 */ 				var step = __left0__ [2];
/* 000787 */ 				return __getslice__ (self.nodelist, lower, upper, step);
/* 000787 */ 			}
/* 000787 */ 		}
/* 000787 */ 		catch (__except0__) {
/* 000789 */ 			// pass;
/* 000789 */ 		}
/* 000792 */ 		if (__t__ (__t__ (__call__ (isinstance, null, index, int)) && __lt__ (index, 0))) {
/* 000793 */ 			var index = __add__ (__call__ (len, null, self.nodelist), index);
/* 000793 */ 		}
/* 000795 */ 		return __getitem__ (self.nodelist, index);
/* 000795 */ 	});},
/* 000798 */ 	get __len__ () {return __get__ (this, function (self) {
/* 000798 */ 		if (arguments.length) {
/* 000798 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000798 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000798 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000798 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000798 */ 					switch (__attrib0__) {
/* 000798 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000798 */ 					}
/* 000798 */ 				}
/* 000798 */ 			}
/* 000798 */ 		}
/* 000798 */ 		else {
/* 000798 */ 		}
/* 000799 */ 		return __call__ (len, null, self.nodelist);
/* 000799 */ 	});},
/* 000802 */ 	get latex_verbatim () {return __get__ (this, function (self) {
/* 000802 */ 		if (arguments.length) {
/* 000802 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000802 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000802 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000802 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000802 */ 					switch (__attrib0__) {
/* 000802 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000802 */ 					}
/* 000802 */ 				}
/* 000802 */ 			}
/* 000802 */ 		}
/* 000802 */ 		else {
/* 000802 */ 		}
/* 000809 */ 		return (function () {
/* 000809 */ 			var __accu0__ = '';
/* 000809 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000809 */ 				var __accu1__ = [];
/* 000809 */ 				var __iterable0__ = self.nodelist;
/* 000809 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000811 */ 					var n = __getitem__ (__iterable0__, __index0__);
/* 000811 */ 					if (__t__ (n !== null)) {
/* 000812 */ 						(function () {
/* 000812 */ 							var __accu2__ = __accu1__;
/* 000810 */ 							return __call__ (__accu2__.append, __accu2__, (function () {
/* 000810 */ 								var __accu3__ = n;
/* 000810 */ 								return __call__ (__accu3__.latex_verbatim, __accu3__);
/* 000810 */ 							}) ());
/* 000810 */ 						}) ();
/* 000810 */ 					}
/* 000810 */ 				}
/* 000810 */ 				return __accu1__;
/* 000810 */ 			}) ());
/* 000810 */ 		}) ();
/* 000810 */ 	});},
/* 000816 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000816 */ 		if (arguments.length) {
/* 000816 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000816 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000816 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000816 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000816 */ 					switch (__attrib0__) {
/* 000816 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000816 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000816 */ 					}
/* 000816 */ 				}
/* 000816 */ 			}
/* 000816 */ 		}
/* 000816 */ 		else {
/* 000816 */ 		}
/* 000817 */ 		if (__t__ (self.nodelist !== null)) {
/* 000818 */ 			var __iterable0__ = self.nodelist;
/* 000818 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000818 */ 				var node = __getitem__ (__iterable0__, __index0__);
/* 000819 */ 				if (__t__ (node !== null)) {
/* 000820 */ 					(function () {
/* 000820 */ 						var __accu0__ = node;
/* 000820 */ 						return __call__ (__accu0__.accept_node_visitor, __accu0__, visitor);
/* 000820 */ 					}) ();
/* 000820 */ 				}
/* 000820 */ 			}
/* 000820 */ 		}
/* 000821 */ 		(function () {
/* 000821 */ 			var __accu0__ = visitor;
/* 000821 */ 			return __call__ (__accu0__.visit_node_list, __accu0__, self);
/* 000821 */ 		}) ();
/* 000821 */ 	});},
/* 000824 */ 	get filter () {return __get__ (this, function (self, node_predicate_fn, skip_none, skip_comments, skip_whitespace_char_nodes) {
/* 000824 */ 		if (typeof node_predicate_fn == 'undefined' || (node_predicate_fn != null && node_predicate_fn.hasOwnProperty ("__kwargtrans__"))) {;
/* 000824 */ 			var node_predicate_fn = null;
/* 000824 */ 		};
/* 000824 */ 		if (typeof skip_none == 'undefined' || (skip_none != null && skip_none.hasOwnProperty ("__kwargtrans__"))) {;
/* 000824 */ 			var skip_none = true;
/* 000824 */ 		};
/* 000824 */ 		if (typeof skip_comments == 'undefined' || (skip_comments != null && skip_comments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000824 */ 			var skip_comments = false;
/* 000824 */ 		};
/* 000824 */ 		if (typeof skip_whitespace_char_nodes == 'undefined' || (skip_whitespace_char_nodes != null && skip_whitespace_char_nodes.hasOwnProperty ("__kwargtrans__"))) {;
/* 000824 */ 			var skip_whitespace_char_nodes = false;
/* 000824 */ 		};
/* 000824 */ 		if (arguments.length) {
/* 000824 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000824 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000824 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000824 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000824 */ 					switch (__attrib0__) {
/* 000824 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000824 */ 						case 'node_predicate_fn': var node_predicate_fn = __allkwargs0__ [__attrib0__]; break;
/* 000824 */ 						case 'skip_none': var skip_none = __allkwargs0__ [__attrib0__]; break;
/* 000824 */ 						case 'skip_comments': var skip_comments = __allkwargs0__ [__attrib0__]; break;
/* 000824 */ 						case 'skip_whitespace_char_nodes': var skip_whitespace_char_nodes = __allkwargs0__ [__attrib0__]; break;
/* 000824 */ 					}
/* 000824 */ 				}
/* 000824 */ 			}
/* 000824 */ 		}
/* 000824 */ 		else {
/* 000824 */ 		}
/* 000827 */ 		if (__t__ (self.latex_walker !== null)) {
/* 000828 */ 			var make_nodelist = self.latex_walker.make_nodelist;
/* 000828 */ 		}
/* 000829 */ 		else {
/* 000830 */ 			var make_nodelist = (function __lambda__ (nl) {
/* 000830 */ 				var kwargs = dict ();
/* 000830 */ 				if (arguments.length) {
/* 000830 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000830 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000830 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000830 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000830 */ 							switch (__attrib0__) {
/* 000830 */ 								case 'nl': var nl = __allkwargs0__ [__attrib0__]; break;
/* 000830 */ 								default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000830 */ 							}
/* 000830 */ 						}
/* 000830 */ 						delete kwargs.__kwargtrans__;
/* 000830 */ 					}
/* 000830 */ 				}
/* 000830 */ 				else {
/* 000830 */ 				}
/* 000830 */ 				return __call__ (LatexNodeList, null, nl, __kwargtrans__ (kwargs));
/* 000830 */ 			});
/* 000830 */ 		}
/* 000832 */ 		var filter_full_predicate_fn = function (n) {
/* 000832 */ 			if (arguments.length) {
/* 000832 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000832 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000832 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000832 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000832 */ 						switch (__attrib0__) {
/* 000832 */ 							case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000832 */ 						}
/* 000832 */ 					}
/* 000832 */ 				}
/* 000832 */ 			}
/* 000832 */ 			else {
/* 000832 */ 			}
/* 000833 */ 			if (__t__ (__t__ (skip_none) && n === null)) {
/* 000834 */ 				return false;
/* 000834 */ 			}
/* 000835 */ 			if (__t__ (__t__ (skip_comments) && (function () {
/* 000835 */ 				var __accu0__ = n;
/* 000835 */ 				return __call__ (__accu0__.isNodeType, __accu0__, LatexCommentNode);
/* 000835 */ 			}) ())) {
/* 000836 */ 				return false;
/* 000836 */ 			}
/* 000837 */ 			if (__t__ (__t__ (skip_whitespace_char_nodes) && __t__ ((function () {
/* 000837 */ 				var __accu0__ = n;
/* 000837 */ 				return __call__ (__accu0__.isNodeType, __accu0__, LatexCharsNode);
/* 000838 */ 			}) ()) && __eq__ (__call__ (len, null, (function () {
/* 000838 */ 				var __accu0__ = n.chars;
/* 000838 */ 				return __call__ (__accu0__.strip, __accu0__);
/* 000838 */ 			}) ()), 0))) {
/* 000839 */ 				return false;
/* 000839 */ 			}
/* 000840 */ 			if (__t__ (node_predicate_fn !== null)) {
/* 000841 */ 				return __call__ (node_predicate_fn, null, n);
/* 000841 */ 			}
/* 000842 */ 			return true;
/* 000842 */ 		};
/* 000844 */ 		var filtered_nodes = (function () {
/* 000844 */ 			var __accu0__ = [];
/* 000844 */ 			var __iterable0__ = self.nodelist;
/* 000844 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000846 */ 				var n = __getitem__ (__iterable0__, __index0__);
/* 000847 */ 				if (__t__ (__call__ (filter_full_predicate_fn, null, n))) {
/* 000847 */ 					(function () {
/* 000847 */ 						var __accu1__ = __accu0__;
/* 000847 */ 						return __call__ (__accu1__.append, __accu1__, n);
/* 000847 */ 					}) ();
/* 000847 */ 				}
/* 000847 */ 			}
/* 000847 */ 			return __accu0__;
/* 000847 */ 		}) ();
/* 000856 */ 		return __call__ (make_nodelist, null, filtered_nodes, __kwargtrans__ ({parsing_state: self.parsing_state, pos: (__t__ (__call__ (len, null, filtered_nodes)) ? null : self.pos_end), pos_end: (__t__ (__call__ (len, null, filtered_nodes)) ? null : self.pos_end)}));
/* 000856 */ 	});},
/* 000860 */ 	get split_at_node () {return __get__ (this, function (self, node_predicate_fn, skip_none, keep_separators, max_split) {
/* 000860 */ 		if (typeof skip_none == 'undefined' || (skip_none != null && skip_none.hasOwnProperty ("__kwargtrans__"))) {;
/* 000860 */ 			var skip_none = true;
/* 000860 */ 		};
/* 000860 */ 		if (typeof keep_separators == 'undefined' || (keep_separators != null && keep_separators.hasOwnProperty ("__kwargtrans__"))) {;
/* 000860 */ 			var keep_separators = false;
/* 000860 */ 		};
/* 000860 */ 		if (typeof max_split == 'undefined' || (max_split != null && max_split.hasOwnProperty ("__kwargtrans__"))) {;
/* 000860 */ 			var max_split = null;
/* 000860 */ 		};
/* 000860 */ 		if (arguments.length) {
/* 000860 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000860 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000860 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000860 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000860 */ 					switch (__attrib0__) {
/* 000860 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000860 */ 						case 'node_predicate_fn': var node_predicate_fn = __allkwargs0__ [__attrib0__]; break;
/* 000860 */ 						case 'skip_none': var skip_none = __allkwargs0__ [__attrib0__]; break;
/* 000860 */ 						case 'keep_separators': var keep_separators = __allkwargs0__ [__attrib0__]; break;
/* 000860 */ 						case 'max_split': var max_split = __allkwargs0__ [__attrib0__]; break;
/* 000860 */ 					}
/* 000860 */ 				}
/* 000860 */ 			}
/* 000860 */ 		}
/* 000860 */ 		else {
/* 000860 */ 		}
/* 000863 */ 		var nodelists_list = [[]];
/* 000865 */ 		if (__t__ (__t__ (max_split !== null) && __eq__ (max_split, 0))) {
/* 000866 */ 			var no_more_splits = true;
/* 000866 */ 		}
/* 000867 */ 		else {
/* 000868 */ 			var no_more_splits = false;
/* 000868 */ 		}
/* 000870 */ 		var __iterable0__ = self.nodelist;
/* 000870 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000870 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000871 */ 			if (__t__ (__t__ (skip_none) && n === null)) {
/* 000871 */ 				continue;
/* 000871 */ 			}
/* 000873 */ 			if (__t__ (__t__ (!__t__ ((no_more_splits))) && __call__ (node_predicate_fn, null, n))) {
/* 000874 */ 				if (__t__ (keep_separators)) {
/* 000875 */ 					(function () {
/* 000875 */ 						var __accu0__ = nodelists_list;
/* 000875 */ 						return __call__ (__accu0__.append, __accu0__, [n]);
/* 000875 */ 					}) ();
/* 000875 */ 				}
/* 000876 */ 				else {
/* 000877 */ 					(function () {
/* 000877 */ 						var __accu0__ = nodelists_list;
/* 000877 */ 						return __call__ (__accu0__.append, __accu0__, []);
/* 000877 */ 					}) ();
/* 000877 */ 				}
/* 000879 */ 				if (__t__ (__t__ (max_split !== null) && __ge__ (__call__ (len, null, nodelists_list), max_split))) {
/* 000880 */ 					var no_more_splits = true;
/* 000880 */ 				}
/* 000880 */ 			}
/* 000881 */ 			else {
/* 000882 */ 				(function () {
/* 000882 */ 					var __accu0__ = __getitem__ (nodelists_list, __sub__ (__call__ (len, null, nodelists_list), 1));
/* 000882 */ 					return __call__ (__accu0__.append, __accu0__, n);
/* 000882 */ 				}) ();
/* 000882 */ 			}
/* 000882 */ 		}
/* 000884 */ 		if (__t__ (self.latex_walker !== null)) {
/* 000885 */ 			var make_latex_node_list = self.latex_walker.make_nodelist;
/* 000885 */ 		}
/* 000886 */ 		else {
/* 000887 */ 			var make_latex_node_list = (function __lambda__ (nl) {
/* 000887 */ 				var kwargs = dict ();
/* 000887 */ 				if (arguments.length) {
/* 000887 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000887 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000887 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000887 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000887 */ 							switch (__attrib0__) {
/* 000887 */ 								case 'nl': var nl = __allkwargs0__ [__attrib0__]; break;
/* 000887 */ 								default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000887 */ 							}
/* 000887 */ 						}
/* 000887 */ 						delete kwargs.__kwargtrans__;
/* 000887 */ 					}
/* 000887 */ 				}
/* 000887 */ 				else {
/* 000887 */ 				}
/* 000887 */ 				return __call__ (LatexNodeList, null, nl, __kwargtrans__ (kwargs));
/* 000887 */ 			});
/* 000887 */ 		}
/* 000889 */ 		return (function () {
/* 000889 */ 			var __accu0__ = [];
/* 000889 */ 			var __iterable0__ = nodelists_list;
/* 000889 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000891 */ 				var nl = __getitem__ (__iterable0__, __index0__);
/* 000891 */ 				(function () {
/* 000891 */ 					var __accu1__ = __accu0__;
/* 000890 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (make_latex_node_list, null, nl, __kwargtrans__ ({parsing_state: self.parsing_state})));
/* 000890 */ 				}) ();
/* 000890 */ 			}
/* 000890 */ 			return __accu0__;
/* 000890 */ 		}) ();
/* 000890 */ 	});},
/* 000894 */ 	get split_at_chars () {return __get__ (this, function (self, sep_chars, max_split, keep_empty, skip_none) {
/* 000894 */ 		if (typeof max_split == 'undefined' || (max_split != null && max_split.hasOwnProperty ("__kwargtrans__"))) {;
/* 000894 */ 			var max_split = null;
/* 000894 */ 		};
/* 000894 */ 		if (typeof keep_empty == 'undefined' || (keep_empty != null && keep_empty.hasOwnProperty ("__kwargtrans__"))) {;
/* 000894 */ 			var keep_empty = false;
/* 000894 */ 		};
/* 000894 */ 		if (typeof skip_none == 'undefined' || (skip_none != null && skip_none.hasOwnProperty ("__kwargtrans__"))) {;
/* 000894 */ 			var skip_none = true;
/* 000894 */ 		};
/* 000894 */ 		if (arguments.length) {
/* 000894 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000894 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000894 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000894 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000894 */ 					switch (__attrib0__) {
/* 000894 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000894 */ 						case 'sep_chars': var sep_chars = __allkwargs0__ [__attrib0__]; break;
/* 000894 */ 						case 'max_split': var max_split = __allkwargs0__ [__attrib0__]; break;
/* 000894 */ 						case 'keep_empty': var keep_empty = __allkwargs0__ [__attrib0__]; break;
/* 000894 */ 						case 'skip_none': var skip_none = __allkwargs0__ [__attrib0__]; break;
/* 000894 */ 					}
/* 000894 */ 				}
/* 000894 */ 			}
/* 000894 */ 		}
/* 000894 */ 		else {
/* 000894 */ 		}
/* 000933 */ 		var split_node_lists = [];
/* 000935 */ 		var get_split_match_start_end = function (m, offset) {
/* 000935 */ 			if (typeof offset == 'undefined' || (offset != null && offset.hasOwnProperty ("__kwargtrans__"))) {;
/* 000935 */ 				var offset = 0;
/* 000935 */ 			};
/* 000935 */ 			if (arguments.length) {
/* 000935 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000935 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000935 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000935 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000935 */ 						switch (__attrib0__) {
/* 000935 */ 							case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000935 */ 							case 'offset': var offset = __allkwargs0__ [__attrib0__]; break;
/* 000935 */ 						}
/* 000935 */ 					}
/* 000935 */ 				}
/* 000935 */ 			}
/* 000935 */ 			else {
/* 000935 */ 			}
/* 000936 */ 			if (__t__ (m === null)) {
/* 000937 */ 				return tuple ([__neg__ (1), null]);
/* 000937 */ 			}
/* 000938 */ 			if (__t__ (__t__ (__call__ (hasattr, null, m, 'start')) && __call__ (hasattr, null, m, 'end'))) {
/* 000939 */ 				return tuple ([__add__ (offset, (function () {
/* 000939 */ 					var __accu0__ = m;
/* 000939 */ 					return __call__ (__accu0__.start, __accu0__);
/* 000939 */ 				}) ()), __add__ (offset, (function () {
/* 000939 */ 					var __accu0__ = m;
/* 000939 */ 					return __call__ (__accu0__.end, __accu0__);
/* 000939 */ 				}) ())]);
/* 000939 */ 			}
/* 000940 */ 			if (__t__ (__t__ (!__t__ ((m))) || !__t__ ((__call__ (len, null, m))))) {
/* 000941 */ 				return tuple ([__neg__ (1), null]);
/* 000941 */ 			}
/* 000942 */ 			var __left0__ = m;
/* 000942 */ 			var start = __left0__ [0];
/* 000942 */ 			var end = __left0__ [1];
/* 000943 */ 			if (__t__ (start === null)) {
/* 000944 */ 				var start = __neg__ (1);
/* 000944 */ 			}
/* 000945 */ 			else {
/* 000946 */ 				var start = __add__ (offset, start);
/* 000946 */ 			}
/* 000947 */ 			var end = __add__ (offset, end);
/* 000948 */ 			return tuple ([start, end]);
/* 000948 */ 		};
/* 000950 */ 		var get_next_split = function (chars, pos) {
/* 000950 */ 			if (arguments.length) {
/* 000950 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000950 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000950 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000950 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000950 */ 						switch (__attrib0__) {
/* 000950 */ 							case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000950 */ 							case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000950 */ 						}
/* 000950 */ 					}
/* 000950 */ 				}
/* 000950 */ 			}
/* 000950 */ 			else {
/* 000950 */ 			}
/* 000952 */ 			if (__t__ (__t__ (max_split !== null) && __ge__ (__call__ (len, null, split_node_lists), max_split))) {
/* 000953 */ 				return tuple ([__neg__ (1), __call__ (len, null, chars)]);
/* 000953 */ 			}
/* 000955 */ 			if (__t__ (__call__ (hasattr, null, sep_chars, 'search'))) {
/* 000961 */ 				var m = (function () {
/* 000961 */ 					var __accu0__ = sep_chars;
/* 000961 */ 					return __call__ (__accu0__.search, __accu0__, __getslice__ (chars, pos, null, 1));
/* 000961 */ 				}) ();
/* 000962 */ 				return __call__ (get_split_match_start_end, null, m, pos);
/* 000962 */ 			}
/* 000964 */ 			if (__t__ (__call__ (callable, null, sep_chars))) {
/* 000965 */ 				var m = __call__ (sep_chars, null, chars, pos);
/* 000966 */ 				return __call__ (get_split_match_start_end, null, m);
/* 000966 */ 			}
/* 000968 */ 			var idx = (function () {
/* 000968 */ 				var __accu0__ = chars;
/* 000968 */ 				return __call__ (__accu0__.find, __accu0__, sep_chars, pos);
/* 000968 */ 			}) ();
/* 000969 */ 			if (__t__ (__t__ (idx === null) || __eq__ (idx, __neg__ (1)))) {
/* 000970 */ 				return tuple ([__neg__ (1), null]);
/* 000970 */ 			}
/* 000971 */ 			return tuple ([idx, __add__ (idx, __call__ (len, null, sep_chars))]);
/* 000971 */ 		};
/* 000974 */ 		var lw = self.latex_walker;
/* 000975 */ 		if (__t__ (lw !== null)) {
/* 000976 */ 			var make_node = lw.make_node;
/* 000977 */ 			var make_nodelist = lw.make_nodelist;
/* 000977 */ 		}
/* 000978 */ 		else {
/* 000979 */ 			var make_node = (function __lambda__ (cls) {
/* 000979 */ 				var kwargs = dict ();
/* 000979 */ 				if (arguments.length) {
/* 000979 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000979 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000979 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000979 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000979 */ 							switch (__attrib0__) {
/* 000979 */ 								case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000979 */ 								default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000979 */ 							}
/* 000979 */ 						}
/* 000979 */ 						delete kwargs.__kwargtrans__;
/* 000979 */ 					}
/* 000979 */ 				}
/* 000979 */ 				else {
/* 000979 */ 				}
/* 000979 */ 				return __call__ (cls, null, __kwargtrans__ (kwargs));
/* 000979 */ 			});
/* 000980 */ 			var make_nodelist = (function __lambda__ (nl) {
/* 000980 */ 				var kwargs = dict ();
/* 000980 */ 				if (arguments.length) {
/* 000980 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000980 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000980 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000980 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000980 */ 							switch (__attrib0__) {
/* 000980 */ 								case 'nl': var nl = __allkwargs0__ [__attrib0__]; break;
/* 000980 */ 								default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000980 */ 							}
/* 000980 */ 						}
/* 000980 */ 						delete kwargs.__kwargtrans__;
/* 000980 */ 					}
/* 000980 */ 				}
/* 000980 */ 				else {
/* 000980 */ 				}
/* 000980 */ 				return __call__ (LatexNodeList, null, nl, __kwargtrans__ (kwargs));
/* 000980 */ 			});
/* 000980 */ 		}
/* 000982 */ 		var chars_to_node = function (chars, n, rel_pos, rel_pos_end) {
/* 000982 */ 			if (arguments.length) {
/* 000982 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000982 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000982 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000982 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000982 */ 						switch (__attrib0__) {
/* 000982 */ 							case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000982 */ 							case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000982 */ 							case 'rel_pos': var rel_pos = __allkwargs0__ [__attrib0__]; break;
/* 000982 */ 							case 'rel_pos_end': var rel_pos_end = __allkwargs0__ [__attrib0__]; break;
/* 000982 */ 						}
/* 000982 */ 					}
/* 000982 */ 				}
/* 000982 */ 			}
/* 000982 */ 			else {
/* 000982 */ 			}
/* 000983 */ 			return __call__ (make_node, null, LatexCharsNode, __kwargtrans__ ({parsing_state: self.parsing_state, pos: __add__ (n.pos, rel_pos), pos_end: __add__ (n.pos, rel_pos_end), chars: chars}));
/* 000983 */ 		};
/* 000989 */ 		var flush_nodes = function (nodes, pos_end) {
/* 000989 */ 			if (typeof pos_end == 'undefined' || (pos_end != null && pos_end.hasOwnProperty ("__kwargtrans__"))) {;
/* 000989 */ 				var pos_end = null;
/* 000989 */ 			};
/* 000989 */ 			if (arguments.length) {
/* 000989 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000989 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000989 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000989 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000989 */ 						switch (__attrib0__) {
/* 000989 */ 							case 'nodes': var nodes = __allkwargs0__ [__attrib0__]; break;
/* 000989 */ 							case 'pos_end': var pos_end = __allkwargs0__ [__attrib0__]; break;
/* 000989 */ 						}
/* 000989 */ 					}
/* 000989 */ 				}
/* 000989 */ 			}
/* 000989 */ 			else {
/* 000989 */ 			}
/* 000993 */ 			var newnodelist = __call__ (make_nodelist, null, nodes, __kwargtrans__ ({parsing_state: self.parsing_state, pos: (__t__ (__call__ (len, null, nodes)) ? null : pos_end), pos_end: pos_end}));
/* 000996 */ 			(function () {
/* 000996 */ 				var __accu0__ = split_node_lists;
/* 000996 */ 				return __call__ (__accu0__.append, __accu0__, newnodelist);
/* 000996 */ 			}) ();
/* 000996 */ 		};
/* 000998 */ 		var pending_nodes = [];
/* 001000 */ 		var __iterable0__ = self.nodelist;
/* 001000 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001000 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 001002 */ 			if (__t__ (n === null)) {
/* 001003 */ 				if (__t__ (!__t__ ((skip_none)))) {
/* 001004 */ 					(function () {
/* 001004 */ 						var __accu0__ = pending_nodes;
/* 001004 */ 						return __call__ (__accu0__.append, __accu0__, n);
/* 001004 */ 					}) ();
/* 001004 */ 				}
/* 001004 */ 				continue;
/* 001004 */ 			}
/* 001007 */ 			if (__t__ ((function () {
/* 001007 */ 				var __accu0__ = n;
/* 001007 */ 				return __call__ (__accu0__.isNodeType, __accu0__, LatexCharsNode);
/* 001007 */ 			}) ())) {
/* 001009 */ 				var next_sep_end = 0;
/* 001011 */ 				while (__t__ (true)) {
/* 001012 */ 					var prev_sep_end = next_sep_end;
/* 001013 */ 					var __left0__ = __call__ (get_next_split, null, n.chars, prev_sep_end);
/* 001013 */ 					var next_sep_idx = __left0__ [0];
/* 001013 */ 					var next_sep_end = __left0__ [1];
/* 001015 */ 					if (__t__ (__ne__ (next_sep_idx, __neg__ (1)))) {
/* 001016 */ 						var p = __getslice__ (n.chars, prev_sep_end, next_sep_idx, 1);
/* 001017 */ 						if (__t__ (__eq__ (prev_sep_end, 0))) {
/* 001026 */ 							if (__t__ (__call__ (len, null, p))) {
/* 001027 */ 								(function () {
/* 001027 */ 									var __accu0__ = pending_nodes;
/* 001028 */ 									return __call__ (__accu0__.append, __accu0__, __call__ (chars_to_node, null, p, n, prev_sep_end, next_sep_idx));
/* 001028 */ 								}) ();
/* 001028 */ 							}
/* 001030 */ 							if (__t__ (__t__ (__call__ (len, null, pending_nodes)) || keep_empty)) {
/* 001031 */ 								__call__ (flush_nodes, null, pending_nodes, __kwargtrans__ ({pos_end: __add__ (n.pos, next_sep_idx)}));
/* 001031 */ 							}
/* 001032 */ 							var pending_nodes = [];
/* 001032 */ 							continue;
/* 001032 */ 						}
/* 001034 */ 						else {
/* 001037 */ 							var thenodes = [];
/* 001038 */ 							if (__t__ (__call__ (len, null, p))) {
/* 001040 */ 								var thenodes = [__call__ (chars_to_node, null, p, n, prev_sep_end, next_sep_idx)];
/* 001040 */ 							}
/* 001042 */ 							if (__t__ (__t__ (__call__ (len, null, thenodes)) || keep_empty)) {
/* 001043 */ 								__call__ (flush_nodes, null, thenodes, __kwargtrans__ ({pos_end: __add__ (n.pos, next_sep_idx)}));
/* 001043 */ 							}
/* 001043 */ 							continue;
/* 001043 */ 						}
/* 001043 */ 					}
/* 001046 */ 					else if (__t__ (__eq__ (prev_sep_end, 0))) {
/* 001050 */ 						(function () {
/* 001050 */ 							var __accu0__ = pending_nodes;
/* 001050 */ 							return __call__ (__accu0__.append, __accu0__, n);
/* 001050 */ 						}) ();
/* 001050 */ 						break;
/* 001050 */ 					}
/* 001052 */ 					else {
/* 001055 */ 						var p = __getslice__ (n.chars, prev_sep_end, null, 1);
/* 001056 */ 						if (__t__ (__call__ (len, null, p))) {
/* 001057 */ 							(function () {
/* 001057 */ 								var __accu0__ = pending_nodes;
/* 001058 */ 								return __call__ (__accu0__.append, __accu0__, __call__ (chars_to_node, null, p, n, prev_sep_end, __call__ (len, null, n.chars)));
/* 001058 */ 							}) ();
/* 001058 */ 						}
/* 001058 */ 						break;
/* 001058 */ 					}
/* 001058 */ 				}
/* 001058 */ 				continue;
/* 001058 */ 			}
/* 001067 */ 			(function () {
/* 001067 */ 				var __accu0__ = pending_nodes;
/* 001067 */ 				return __call__ (__accu0__.append, __accu0__, n);
/* 001067 */ 			}) ();
/* 001067 */ 		}
/* 001069 */ 		if (__t__ (__t__ (pending_nodes) || keep_empty)) {
/* 001070 */ 			__call__ (flush_nodes, null, pending_nodes, __kwargtrans__ ({pos_end: self.pos_end}));
/* 001070 */ 		}
/* 001072 */ 		return split_node_lists;
/* 001072 */ 	});},
/* 001076 */ 	get get_content_as_chars () {return __get__ (this, function (self) {
/* 001076 */ 		if (arguments.length) {
/* 001076 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001076 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001076 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001076 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001076 */ 					switch (__attrib0__) {
/* 001076 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001076 */ 					}
/* 001076 */ 				}
/* 001076 */ 			}
/* 001076 */ 		}
/* 001076 */ 		else {
/* 001076 */ 		}
/* 001091 */ 		return __call__ (_get_content_as_chars, null, self.nodelist);
/* 001091 */ 	});},
/* 001095 */ 	get __eq__ () {return __get__ (this, function (self, other) {
/* 001095 */ 		if (arguments.length) {
/* 001095 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001095 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001095 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001095 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001095 */ 					switch (__attrib0__) {
/* 001095 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001095 */ 						case 'other': var other = __allkwargs0__ [__attrib0__]; break;
/* 001095 */ 					}
/* 001095 */ 				}
/* 001095 */ 			}
/* 001095 */ 		}
/* 001095 */ 		else {
/* 001095 */ 		}
/* 001096 */ 		if (__t__ (__call__ (isinstance, null, other, list))) {
/* 001097 */ 			return __eq__ (self.nodelist, other);
/* 001097 */ 		}
/* 001098 */ 		return __t__ (__eq__ (self.nodelist, other.nodelist)) && __t__ ((__t__ (__t__ (self.pos === null) && other.pos === null) || __eq__ (self.pos, other.pos))) && (__t__ (__t__ (self.pos_end === null) && other.pos_end === null) || __eq__ (self.pos_end, other.pos_end));
/* 001098 */ 	});},
/* 001107 */ 	get to_json_object () {return __get__ (this, function (self) {
/* 001107 */ 		if (arguments.length) {
/* 001107 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001107 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001107 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001107 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001107 */ 					switch (__attrib0__) {
/* 001107 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001107 */ 					}
/* 001107 */ 				}
/* 001107 */ 			}
/* 001107 */ 		}
/* 001107 */ 		else {
/* 001107 */ 		}
/* 001108 */ 		return self.nodelist;
/* 001108 */ 	});},
/* 001110 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 001110 */ 		if (arguments.length) {
/* 001110 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001110 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001110 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001110 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001110 */ 					switch (__attrib0__) {
/* 001110 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001110 */ 					}
/* 001110 */ 				}
/* 001110 */ 			}
/* 001110 */ 		}
/* 001110 */ 		else {
/* 001110 */ 		}
/* 001111 */ 		return (function () {
/* 001111 */ 			var __accu0__ = 'LatexNodeList({nodelist!r}, pos={pos!r}, pos_end={pos_end!r})';
/* 001111 */ 			return __call__ (__accu0__.format, __accu0__, __kwargtrans__ ({nodelist: self.nodelist, pos: self.pos, pos_end: self.pos_end}));
/* 001111 */ 		}) ();
/* 001111 */ 	});}
/* 001111 */ });
/* 001111 */ Object.defineProperty (LatexNodeList, 'len', property.call (LatexNodeList, LatexNodeList._get_len));;
/* 001119 */ export var _get_content_as_chars = function (nodelist) {
/* 001119 */ 	if (arguments.length) {
/* 001119 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001119 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001119 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001119 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001119 */ 				switch (__attrib0__) {
/* 001119 */ 					case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 001119 */ 				}
/* 001119 */ 			}
/* 001119 */ 		}
/* 001119 */ 	}
/* 001119 */ 	else {
/* 001119 */ 	}
/* 001125 */ 	if (__t__ (nodelist === null)) {
/* 001126 */ 		return '';
/* 001126 */ 	}
/* 001128 */ 	var charslist = [];
/* 001130 */ 	var __iterable0__ = nodelist;
/* 001130 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001130 */ 		var n = __getitem__ (__iterable0__, __index0__);
/* 001132 */ 		if (__t__ (n === null)) {
/* 001132 */ 			continue;
/* 001132 */ 		}
/* 001135 */ 		if (__t__ ((function () {
/* 001135 */ 			var __accu0__ = n;
/* 001135 */ 			return __call__ (__accu0__.isNodeType, __accu0__, LatexCommentNode);
/* 001135 */ 		}) ())) {
/* 001135 */ 			continue;
/* 001135 */ 		}
/* 001139 */ 		if (__t__ ((function () {
/* 001139 */ 			var __accu0__ = n;
/* 001139 */ 			return __call__ (__accu0__.isNodeType, __accu0__, LatexGroupNode);
/* 001139 */ 		}) ())) {
/* 001141 */ 			(function () {
/* 001141 */ 				var __accu0__ = charslist;
/* 001141 */ 				return __call__ (__accu0__.append, __accu0__, __call__ (_get_content_as_chars, null, n.nodelist));
/* 001141 */ 			}) ();
/* 001141 */ 			continue;
/* 001141 */ 		}
/* 001144 */ 		if (__t__ ((function () {
/* 001144 */ 			var __accu0__ = n;
/* 001144 */ 			return __call__ (__accu0__.isNodeType, __accu0__, LatexCharsNode);
/* 001144 */ 		}) ())) {
/* 001145 */ 			(function () {
/* 001145 */ 				var __accu0__ = charslist;
/* 001145 */ 				return __call__ (__accu0__.append, __accu0__, n.chars);
/* 001145 */ 			}) ();
/* 001145 */ 			continue;
/* 001145 */ 		}
/* 001149 */ 		var __except0__ = __call__ (LatexWalkerParseError, null, (function () {
/* 001149 */ 			var __accu0__ = 'Expected simple characters only, got ‘{}’';
/* 001149 */ 			return __call__ (__accu0__.format, __accu0__, n.__class__.__name__);
/* 001149 */ 		}) (), __kwargtrans__ ({pos: n.pos}));
/* 001149 */ 		__except0__.__cause__ = null;
/* 001149 */ 		throw __except0__;
/* 001149 */ 	}
/* 001153 */ 	return (function () {
/* 001153 */ 		var __accu0__ = '';
/* 001153 */ 		return __call__ (__accu0__.join, __accu0__, charslist);
/* 001153 */ 	}) ();
/* 001153 */ };
/* 001160 */ export var _update_posposend_from_nodelist = function (pos, pos_end, nodelist) {
/* 001160 */ 	if (arguments.length) {
/* 001160 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001160 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001160 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001160 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001160 */ 				switch (__attrib0__) {
/* 001160 */ 					case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 001160 */ 					case 'pos_end': var pos_end = __allkwargs0__ [__attrib0__]; break;
/* 001160 */ 					case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 001160 */ 				}
/* 001160 */ 			}
/* 001160 */ 		}
/* 001160 */ 	}
/* 001160 */ 	else {
/* 001160 */ 	}
/* 001162 */ 	if (__t__ (pos === null)) {
/* 001163 */ 		var __break0__ = false;
/* 001163 */ 		var __iterable0__ = nodelist;
/* 001163 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001163 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 001164 */ 			if (__t__ (n !== null)) {
/* 001165 */ 				var pos = n.pos;
/* 001165 */ 				__break0__ = true;
/* 001165 */ 				break;
/* 001165 */ 			}
/* 001165 */ 		}
/* 001167 */ 		if (!__break0__) {
/* 001168 */ 			var pos = null;
/* 001168 */ 		}
/* 001168 */ 	}
/* 001170 */ 	if (__t__ (pos_end === null)) {
/* 001171 */ 		var __break0__ = false;
/* 001171 */ 		var __iterable0__ = __call__ (py_reversed, null, nodelist);
/* 001171 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001171 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 001172 */ 			if (__t__ (n !== null)) {
/* 001173 */ 				var pos_end = n.pos_end;
/* 001173 */ 				__break0__ = true;
/* 001173 */ 				break;
/* 001173 */ 			}
/* 001173 */ 		}
/* 001175 */ 		if (!__break0__) {
/* 001176 */ 			var pos_end = null;
/* 001176 */ 		}
/* 001176 */ 	}
/* 001178 */ 	return tuple ([pos, pos_end]);
/* 001178 */ };
/* 001186 */ export var LatexNodesVisitor =  __class__ ('LatexNodesVisitor', [object], {
/* 001186 */ 	__module__: __name__,
/* 001197 */ 	get visit () {return __get__ (this, function (self, node) {
/* 001197 */ 		if (arguments.length) {
/* 001197 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001197 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001197 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001197 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001197 */ 					switch (__attrib0__) {
/* 001197 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001197 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001197 */ 					}
/* 001197 */ 				}
/* 001197 */ 			}
/* 001197 */ 		}
/* 001197 */ 		else {
/* 001197 */ 		}
/* 001204 */ 		// pass;
/* 001204 */ 	});},
/* 001206 */ 	get visit_chars_node () {return __get__ (this, function (self, node) {
/* 001206 */ 		if (arguments.length) {
/* 001206 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001206 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001206 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001206 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001206 */ 					switch (__attrib0__) {
/* 001206 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001206 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001206 */ 					}
/* 001206 */ 				}
/* 001206 */ 			}
/* 001206 */ 		}
/* 001206 */ 		else {
/* 001206 */ 		}
/* 001207 */ 		(function () {
/* 001207 */ 			var __accu0__ = self;
/* 001207 */ 			return __call__ (__accu0__.visit, __accu0__, node);
/* 001207 */ 		}) ();
/* 001207 */ 	});},
/* 001209 */ 	get visit_group_node () {return __get__ (this, function (self, node) {
/* 001209 */ 		if (arguments.length) {
/* 001209 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001209 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001209 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001209 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001209 */ 					switch (__attrib0__) {
/* 001209 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001209 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001209 */ 					}
/* 001209 */ 				}
/* 001209 */ 			}
/* 001209 */ 		}
/* 001209 */ 		else {
/* 001209 */ 		}
/* 001210 */ 		(function () {
/* 001210 */ 			var __accu0__ = self;
/* 001210 */ 			return __call__ (__accu0__.visit, __accu0__, node);
/* 001210 */ 		}) ();
/* 001210 */ 	});},
/* 001212 */ 	get visit_comment_node () {return __get__ (this, function (self, node) {
/* 001212 */ 		if (arguments.length) {
/* 001212 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001212 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001212 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001212 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001212 */ 					switch (__attrib0__) {
/* 001212 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001212 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001212 */ 					}
/* 001212 */ 				}
/* 001212 */ 			}
/* 001212 */ 		}
/* 001212 */ 		else {
/* 001212 */ 		}
/* 001213 */ 		(function () {
/* 001213 */ 			var __accu0__ = self;
/* 001213 */ 			return __call__ (__accu0__.visit, __accu0__, node);
/* 001213 */ 		}) ();
/* 001213 */ 	});},
/* 001215 */ 	get visit_macro_node () {return __get__ (this, function (self, node) {
/* 001215 */ 		if (arguments.length) {
/* 001215 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001215 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001215 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001215 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001215 */ 					switch (__attrib0__) {
/* 001215 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001215 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001215 */ 					}
/* 001215 */ 				}
/* 001215 */ 			}
/* 001215 */ 		}
/* 001215 */ 		else {
/* 001215 */ 		}
/* 001216 */ 		(function () {
/* 001216 */ 			var __accu0__ = self;
/* 001216 */ 			return __call__ (__accu0__.visit, __accu0__, node);
/* 001216 */ 		}) ();
/* 001216 */ 	});},
/* 001218 */ 	get visit_environment_node () {return __get__ (this, function (self, node) {
/* 001218 */ 		if (arguments.length) {
/* 001218 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001218 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001218 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001218 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001218 */ 					switch (__attrib0__) {
/* 001218 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001218 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001218 */ 					}
/* 001218 */ 				}
/* 001218 */ 			}
/* 001218 */ 		}
/* 001218 */ 		else {
/* 001218 */ 		}
/* 001219 */ 		(function () {
/* 001219 */ 			var __accu0__ = self;
/* 001219 */ 			return __call__ (__accu0__.visit, __accu0__, node);
/* 001219 */ 		}) ();
/* 001219 */ 	});},
/* 001221 */ 	get visit_specials_node () {return __get__ (this, function (self, node) {
/* 001221 */ 		if (arguments.length) {
/* 001221 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001221 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001221 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001221 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001221 */ 					switch (__attrib0__) {
/* 001221 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001221 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001221 */ 					}
/* 001221 */ 				}
/* 001221 */ 			}
/* 001221 */ 		}
/* 001221 */ 		else {
/* 001221 */ 		}
/* 001222 */ 		(function () {
/* 001222 */ 			var __accu0__ = self;
/* 001222 */ 			return __call__ (__accu0__.visit, __accu0__, node);
/* 001222 */ 		}) ();
/* 001222 */ 	});},
/* 001224 */ 	get visit_math_node () {return __get__ (this, function (self, node) {
/* 001224 */ 		if (arguments.length) {
/* 001224 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001224 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001224 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001224 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001224 */ 					switch (__attrib0__) {
/* 001224 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001224 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001224 */ 					}
/* 001224 */ 				}
/* 001224 */ 			}
/* 001224 */ 		}
/* 001224 */ 		else {
/* 001224 */ 		}
/* 001225 */ 		(function () {
/* 001225 */ 			var __accu0__ = self;
/* 001225 */ 			return __call__ (__accu0__.visit, __accu0__, node);
/* 001225 */ 		}) ();
/* 001225 */ 	});},
/* 001227 */ 	get visit_node_list () {return __get__ (this, function (self, nodes) {
/* 001227 */ 		if (arguments.length) {
/* 001227 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001227 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001227 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001227 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001227 */ 					switch (__attrib0__) {
/* 001227 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001227 */ 						case 'nodes': var nodes = __allkwargs0__ [__attrib0__]; break;
/* 001227 */ 					}
/* 001227 */ 				}
/* 001227 */ 			}
/* 001227 */ 		}
/* 001227 */ 		else {
/* 001227 */ 		}
/* 001228 */ 		(function () {
/* 001228 */ 			var __accu0__ = self;
/* 001228 */ 			return __call__ (__accu0__.visit, __accu0__, nodes);
/* 001228 */ 		}) ();
/* 001228 */ 	});},
/* 001230 */ 	get visit_parsed_arguments () {return __get__ (this, function (self, parsed_args) {
/* 001230 */ 		if (arguments.length) {
/* 001230 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001230 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001230 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001230 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001230 */ 					switch (__attrib0__) {
/* 001230 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001230 */ 						case 'parsed_args': var parsed_args = __allkwargs0__ [__attrib0__]; break;
/* 001230 */ 					}
/* 001230 */ 				}
/* 001230 */ 			}
/* 001230 */ 		}
/* 001230 */ 		else {
/* 001230 */ 		}
/* 001231 */ 		(function () {
/* 001231 */ 			var __accu0__ = self;
/* 001231 */ 			return __call__ (__accu0__.visit, __accu0__, parsed_args);
/* 001231 */ 		}) ();
/* 001231 */ 	});},
/* 001234 */ 	get visit_unknown_node () {return __get__ (this, function (self, node) {
/* 001234 */ 		if (arguments.length) {
/* 001234 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001234 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001234 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001234 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001234 */ 					switch (__attrib0__) {
/* 001234 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001234 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001234 */ 					}
/* 001234 */ 				}
/* 001234 */ 			}
/* 001234 */ 		}
/* 001234 */ 		else {
/* 001234 */ 		}
/* 001235 */ 		(function () {
/* 001235 */ 			var __accu0__ = self;
/* 001235 */ 			return __call__ (__accu0__.visit, __accu0__, node);
/* 001235 */ 		}) ();
/* 001235 */ 	});},
/* 001240 */ 	get start () {return __get__ (this, function (self, node) {
/* 001240 */ 		if (arguments.length) {
/* 001240 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001240 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001240 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001240 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001240 */ 					switch (__attrib0__) {
/* 001240 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001240 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001240 */ 					}
/* 001240 */ 				}
/* 001240 */ 			}
/* 001240 */ 		}
/* 001240 */ 		else {
/* 001240 */ 		}
/* 001252 */ 		(function () {
/* 001252 */ 			var __accu0__ = node;
/* 001252 */ 			return __call__ (__accu0__.accept_node_visitor, __accu0__, self);
/* 001252 */ 		}) ();
/* 001252 */ 	});}
/* 001252 */ });
/* 001263 */ export var latex_node_types = [LatexNode, LatexCharsNode, LatexGroupNode, LatexCommentNode, LatexMacroNode, LatexEnvironmentNode, LatexSpecialsNode, LatexMathNode];
/* 001274 */ export var __all__ = __add__ ((function () {
/* 001274 */ 	var __accu0__ = [];
/* 001274 */ 	var __iterable0__ = latex_node_types;
/* 001274 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001274 */ 		var nc = __getitem__ (__iterable0__, __index0__);
/* 001274 */ 		(function () {
/* 001274 */ 			var __accu1__ = __accu0__;
/* 001274 */ 			return __call__ (__accu1__.append, __accu1__, nc.__name__);
/* 001274 */ 		}) ();
/* 001274 */ 	}
/* 001274 */ 	return __accu0__;
/* 001274 */ }) (), ['LatexNodeList', 'LatexNodesVisitor']);
/* 000037 */ 
//# sourceMappingURL=pylatexenc.latexnodes.nodes.map