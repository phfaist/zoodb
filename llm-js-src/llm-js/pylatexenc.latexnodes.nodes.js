/* 000001 */ // Transcrypt'ed from Python, 2022-12-30 19:36:38
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
/* 000187 */ 		return __t__ (other !== null) && __t__ ((function () {
/* 000187 */ 			var __accu0__ = self;
/* 000187 */ 			return __call__ (__accu0__.nodeType, __accu0__);
/* 000187 */ 		}) () === (function () {
/* 000187 */ 			var __accu0__ = other;
/* 000187 */ 			return __call__ (__accu0__.nodeType, __accu0__);
/* 000195 */ 		}) ()) && __t__ (other.parsing_state === self.parsing_state) && __t__ (other.latex_walker === self.latex_walker) && __t__ ((__t__ (__t__ (other.pos === null) && self.pos === null) || __eq__ (other.pos, self.pos))) && __t__ ((__t__ (__t__ (other.pos_end === null) && self.pos_end === null) || __eq__ (other.pos_end, self.pos_end))) && __call__ (all, null, (function () {
/* 000195 */ 			var __accu0__ = [];
/* 000196 */ 			var __iterable0__ = self._fields;
/* 000196 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000199 */ 				var f = __getitem__ (__iterable0__, __index0__);
/* 000199 */ 				(function () {
/* 000199 */ 					var __accu1__ = __accu0__;
/* 000198 */ 					return __call__ (__accu1__.append, __accu1__, __t__ (__t__ (__call__ (getattr, null, self, f) === null) && __call__ (getattr, null, other, f) === null) || __eq__ (__call__ (getattr, null, self, f), __call__ (getattr, null, other, f)));
/* 000198 */ 				}) ();
/* 000198 */ 			}
/* 000198 */ 			return py_iter (__accu0__);
/* 000198 */ 		}) ());
/* 000198 */ 	});},
/* 000205 */ 	get __ne__ () {return __get__ (this, function (self, other) {
/* 000205 */ 		if (arguments.length) {
/* 000205 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000205 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000205 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000205 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000205 */ 					switch (__attrib0__) {
/* 000205 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000205 */ 						case 'other': var other = __allkwargs0__ [__attrib0__]; break;
/* 000205 */ 					}
/* 000205 */ 				}
/* 000205 */ 			}
/* 000205 */ 		}
/* 000205 */ 		else {
/* 000205 */ 		}
/* 000205 */ 		return NotImplemented;
/* 000205 */ 	});},
/* 000207 */ 	__hash__: null,
/* 000209 */ 	get __unicode__ () {return __get__ (this, function (self) {
/* 000209 */ 		if (arguments.length) {
/* 000209 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000209 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000209 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000209 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000209 */ 					switch (__attrib0__) {
/* 000209 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000209 */ 					}
/* 000209 */ 				}
/* 000209 */ 			}
/* 000209 */ 		}
/* 000209 */ 		else {
/* 000209 */ 		}
/* 000210 */ 		return __call__ (_unicode_from_str, null, (function () {
/* 000210 */ 			var __accu0__ = self;
/* 000210 */ 			return __call__ (__accu0__.__str__, __accu0__);
/* 000210 */ 		}) ());
/* 000210 */ 	});},
/* 000211 */ 	get __str__ () {return __get__ (this, function (self) {
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
/* 000212 */ 		return (function () {
/* 000212 */ 			var __accu0__ = self;
/* 000212 */ 			return __call__ (__accu0__.__repr__, __accu0__);
/* 000212 */ 		}) ();
/* 000212 */ 	});},
/* 000213 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000213 */ 		if (arguments.length) {
/* 000213 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000213 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000213 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000213 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000213 */ 					switch (__attrib0__) {
/* 000213 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000213 */ 					}
/* 000213 */ 				}
/* 000213 */ 			}
/* 000213 */ 		}
/* 000213 */ 		else {
/* 000213 */ 		}
/* 000215 */ 		return __add__ (__add__ (__add__ ((function () {
/* 000215 */ 			var __accu0__ = self;
/* 000215 */ 			return __call__ (__accu0__.nodeType, __accu0__);
/* 000216 */ 		}) ().__name__, '('), (function () {
/* 000216 */ 			var __accu0__ = ', ';
/* 000216 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000216 */ 				var __accu1__ = [];
/* 000216 */ 				var __iterable0__ = self._fields;
/* 000216 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000216 */ 					var k = __getitem__ (__iterable0__, __index0__);
/* 000216 */ 					(function () {
/* 000216 */ 						var __accu2__ = __accu1__;
/* 000216 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000216 */ 							var __accu3__ = '{}={!r}';
/* 000216 */ 							return __call__ (__accu3__.format, __accu3__, k, __call__ (getattr, null, self, k));
/* 000216 */ 						}) ());
/* 000216 */ 					}) ();
/* 000216 */ 				}
/* 000216 */ 				return __accu1__;
/* 000216 */ 			}) ());
/* 000216 */ 		}) ()), ')');
/* 000216 */ 	});},
/* 000220 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000220 */ 		if (arguments.length) {
/* 000220 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000220 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000220 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000220 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000220 */ 					switch (__attrib0__) {
/* 000220 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000220 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000220 */ 					}
/* 000220 */ 				}
/* 000220 */ 			}
/* 000220 */ 		}
/* 000220 */ 		else {
/* 000220 */ 		}
/* 000221 */ 		(function () {
/* 000221 */ 			var __accu0__ = visitor;
/* 000221 */ 			return __call__ (__accu0__.visit_unknown_node, __accu0__, self);
/* 000221 */ 		}) ();
/* 000221 */ 	});},
/* 000223 */ 	get to_json_object_with_latexwalker () {return __get__ (this, function (self, latexwalker) {
/* 000223 */ 		if (arguments.length) {
/* 000223 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000223 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000223 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000223 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000223 */ 					switch (__attrib0__) {
/* 000223 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000223 */ 						case 'latexwalker': var latexwalker = __allkwargs0__ [__attrib0__]; break;
/* 000223 */ 					}
/* 000223 */ 				}
/* 000223 */ 			}
/* 000223 */ 		}
/* 000223 */ 		else {
/* 000223 */ 		}
/* 000225 */ 		var d = dict ({'nodetype': self.__class__.__name__});
/* 000229 */ 		var __iterable0__ = self._fields;
/* 000229 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000229 */ 			var fld = __getitem__ (__iterable0__, __index0__);
/* 000230 */ 			if (__t__ (__eq__ (fld, 'spec'))) {
/* 000232 */ 				__setitem__ (d, fld, __call__ (repr, null, self.spec));
/* 000232 */ 			}
/* 000233 */ 			else if (__t__ (__eq__ (fld, 'latex_walker'))) {
/* 000235 */ 				// pass;
/* 000235 */ 			}
/* 000236 */ 			else {
/* 000237 */ 				__setitem__ (d, fld, __call__ (getattr, null, self, fld));
/* 000237 */ 			}
/* 000237 */ 		}
/* 000238 */ 		(function () {
/* 000238 */ 			var __accu0__ = d;
/* 000238 */ 			return __call__ (__accu0__.py_update, __accu0__, (function () {
/* 000238 */ 				var __accu1__ = latexwalker;
/* 000238 */ 				return __call__ (__accu1__.pos_to_lineno_colno, __accu1__, self.pos, __kwargtrans__ ({as_dict: true}));
/* 000238 */ 			}) ());
/* 000238 */ 		}) ();
/* 000239 */ 		return d;
/* 000239 */ 	});},
/* 000241 */ 	get format_pos () {return __get__ (this, function (self) {
/* 000241 */ 		if (arguments.length) {
/* 000241 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000241 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000241 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000241 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000241 */ 					switch (__attrib0__) {
/* 000241 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000241 */ 					}
/* 000241 */ 				}
/* 000241 */ 			}
/* 000241 */ 		}
/* 000241 */ 		else {
/* 000241 */ 		}
/* 000242 */ 		if (__t__ (self.latex_walker !== null)) {
/* 000243 */ 			return (function () {
/* 000243 */ 				var __accu0__ = self.latex_walker;
/* 000243 */ 				return __call__ (__accu0__.format_pos, __accu0__, self.pos);
/* 000243 */ 			}) ();
/* 000243 */ 		}
/* 000244 */ 		return (function () {
/* 000244 */ 			var __accu0__ = '[@ pos {}]';
/* 000244 */ 			return __call__ (__accu0__.format, __accu0__, __call__ (repr, null, self.pos));
/* 000244 */ 		}) ();
/* 000244 */ 	});}
/* 000244 */ });
/* 000244 */ Object.defineProperty (LatexNode, 'len', property.call (LatexNode, LatexNode._get_len));;
/* 000247 */ export var LatexCharsNode =  __class__ ('LatexCharsNode', [LatexNode], {
/* 000247 */ 	__module__: __name__,
/* 000256 */ 	get __init__ () {return __get__ (this, function (self, chars) {
/* 000256 */ 		var kwargs = dict ();
/* 000256 */ 		if (arguments.length) {
/* 000256 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000256 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000256 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000256 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000256 */ 					switch (__attrib0__) {
/* 000256 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000256 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000256 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000256 */ 					}
/* 000256 */ 				}
/* 000256 */ 				delete kwargs.__kwargtrans__;
/* 000256 */ 			}
/* 000256 */ 		}
/* 000256 */ 		else {
/* 000256 */ 		}
/* 000257 */ 		__call__ (__call__ (__super__, null, LatexCharsNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['chars'])}, kwargs)));
/* 000261 */ 		self.chars = chars;
/* 000261 */ 	});},
/* 000263 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000263 */ 		if (arguments.length) {
/* 000263 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000263 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000263 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000263 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000263 */ 					switch (__attrib0__) {
/* 000263 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000263 */ 					}
/* 000263 */ 				}
/* 000263 */ 			}
/* 000263 */ 		}
/* 000263 */ 		else {
/* 000263 */ 		}
/* 000264 */ 		return LatexCharsNode;
/* 000264 */ 	});},
/* 000266 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000266 */ 		if (arguments.length) {
/* 000266 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000266 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000266 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000266 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000266 */ 					switch (__attrib0__) {
/* 000266 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000266 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000266 */ 					}
/* 000266 */ 				}
/* 000266 */ 			}
/* 000266 */ 		}
/* 000266 */ 		else {
/* 000266 */ 		}
/* 000267 */ 		(function () {
/* 000267 */ 			var __accu0__ = visitor;
/* 000267 */ 			return __call__ (__accu0__.visit_chars_node, __accu0__, self);
/* 000267 */ 		}) ();
/* 000267 */ 	});}
/* 000267 */ });
/* 000271 */ export var LatexGroupNode =  __class__ ('LatexGroupNode', [LatexNode], {
/* 000271 */ 	__module__: __name__,
/* 000296 */ 	get __init__ () {return __get__ (this, function (self, nodelist) {
/* 000296 */ 		var kwargs = dict ();
/* 000296 */ 		if (arguments.length) {
/* 000296 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000296 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000296 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000296 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000296 */ 					switch (__attrib0__) {
/* 000296 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000296 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000296 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000296 */ 					}
/* 000296 */ 				}
/* 000296 */ 				delete kwargs.__kwargtrans__;
/* 000296 */ 			}
/* 000296 */ 		}
/* 000296 */ 		else {
/* 000296 */ 		}
/* 000297 */ 		var delimiters = (function () {
/* 000297 */ 			var __accu0__ = kwargs;
/* 000297 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'delimiters', tuple (['{', '}']));
/* 000297 */ 		}) ();
/* 000298 */ 		__call__ (__call__ (__super__, null, LatexGroupNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['nodelist', 'delimiters'])}, kwargs)));
/* 000302 */ 		self.nodelist = nodelist;
/* 000303 */ 		self.delimiters = delimiters;
/* 000303 */ 	});},
/* 000305 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000305 */ 		if (arguments.length) {
/* 000305 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000305 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000305 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000305 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000305 */ 					switch (__attrib0__) {
/* 000305 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000305 */ 					}
/* 000305 */ 				}
/* 000305 */ 			}
/* 000305 */ 		}
/* 000305 */ 		else {
/* 000305 */ 		}
/* 000306 */ 		return LatexGroupNode;
/* 000306 */ 	});},
/* 000308 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000308 */ 		if (arguments.length) {
/* 000308 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000308 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000308 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000308 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000308 */ 					switch (__attrib0__) {
/* 000308 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000308 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000308 */ 					}
/* 000308 */ 				}
/* 000308 */ 			}
/* 000308 */ 		}
/* 000308 */ 		else {
/* 000308 */ 		}
/* 000309 */ 		if (__t__ (self.nodelist !== null)) {
/* 000310 */ 			var __iterable0__ = self.nodelist;
/* 000310 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000310 */ 				var node = __getitem__ (__iterable0__, __index0__);
/* 000311 */ 				if (__t__ (node !== null)) {
/* 000312 */ 					(function () {
/* 000312 */ 						var __accu0__ = node;
/* 000312 */ 						return __call__ (__accu0__.accept_node_visitor, __accu0__, visitor);
/* 000312 */ 					}) ();
/* 000312 */ 				}
/* 000312 */ 			}
/* 000312 */ 		}
/* 000313 */ 		(function () {
/* 000313 */ 			var __accu0__ = visitor;
/* 000313 */ 			return __call__ (__accu0__.visit_group_node, __accu0__, self);
/* 000313 */ 		}) ();
/* 000313 */ 	});}
/* 000313 */ });
/* 000316 */ export var LatexCommentNode =  __class__ ('LatexCommentNode', [LatexNode], {
/* 000316 */ 	__module__: __name__,
/* 000330 */ 	get __init__ () {return __get__ (this, function (self, comment) {
/* 000330 */ 		var kwargs = dict ();
/* 000330 */ 		if (arguments.length) {
/* 000330 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000330 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000330 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000330 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000330 */ 					switch (__attrib0__) {
/* 000330 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000330 */ 						case 'comment': var comment = __allkwargs0__ [__attrib0__]; break;
/* 000330 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000330 */ 					}
/* 000330 */ 				}
/* 000330 */ 				delete kwargs.__kwargtrans__;
/* 000330 */ 			}
/* 000330 */ 		}
/* 000330 */ 		else {
/* 000330 */ 		}
/* 000331 */ 		var comment_post_space = (function () {
/* 000331 */ 			var __accu0__ = kwargs;
/* 000331 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'comment_post_space', '');
/* 000331 */ 		}) ();
/* 000333 */ 		__call__ (__call__ (__super__, null, LatexCommentNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['comment', 'comment_post_space'])}, kwargs)));
/* 000338 */ 		self.comment = comment;
/* 000339 */ 		self.comment_post_space = comment_post_space;
/* 000339 */ 	});},
/* 000341 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000341 */ 		if (arguments.length) {
/* 000341 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000341 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000341 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000341 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000341 */ 					switch (__attrib0__) {
/* 000341 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000341 */ 					}
/* 000341 */ 				}
/* 000341 */ 			}
/* 000341 */ 		}
/* 000341 */ 		else {
/* 000341 */ 		}
/* 000342 */ 		return LatexCommentNode;
/* 000342 */ 	});},
/* 000344 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000344 */ 		if (arguments.length) {
/* 000344 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000344 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000344 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000344 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000344 */ 					switch (__attrib0__) {
/* 000344 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000344 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000344 */ 					}
/* 000344 */ 				}
/* 000344 */ 			}
/* 000344 */ 		}
/* 000344 */ 		else {
/* 000344 */ 		}
/* 000345 */ 		(function () {
/* 000345 */ 			var __accu0__ = visitor;
/* 000345 */ 			return __call__ (__accu0__.visit_comment_node, __accu0__, self);
/* 000345 */ 		}) ();
/* 000345 */ 	});}
/* 000345 */ });
/* 000348 */ export var LatexMacroNode =  __class__ ('LatexMacroNode', [LatexNode], {
/* 000348 */ 	__module__: __name__,
/* 000412 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000412 */ 		var kwargs = dict ();
/* 000412 */ 		if (arguments.length) {
/* 000412 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000412 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000412 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000412 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000412 */ 					switch (__attrib0__) {
/* 000412 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000412 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000412 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000412 */ 					}
/* 000412 */ 				}
/* 000412 */ 				delete kwargs.__kwargtrans__;
/* 000412 */ 			}
/* 000412 */ 		}
/* 000412 */ 		else {
/* 000412 */ 		}
/* 000413 */ 		var nodeargd = (function () {
/* 000413 */ 			var __accu0__ = kwargs;
/* 000413 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'nodeargd', __call__ (ParsedArguments, null));
/* 000413 */ 		}) ();
/* 000414 */ 		var macro_post_space = (function () {
/* 000414 */ 			var __accu0__ = kwargs;
/* 000414 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'macro_post_space', '');
/* 000414 */ 		}) ();
/* 000415 */ 		var spec = (function () {
/* 000415 */ 			var __accu0__ = kwargs;
/* 000415 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'spec', null);
/* 000415 */ 		}) ();
/* 000417 */ 		__call__ (__call__ (__super__, null, LatexMacroNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['macroname', 'spec', 'nodeargd', 'macro_post_space']), _redundant_fields: tuple (['nodeoptarg', 'nodeargs'])}, kwargs)));
/* 000422 */ 		self.macroname = macroname;
/* 000423 */ 		self.spec = spec;
/* 000424 */ 		self.nodeargd = nodeargd;
/* 000425 */ 		self.macro_post_space = macro_post_space;
/* 000425 */ 	});},
/* 000427 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000427 */ 		if (arguments.length) {
/* 000427 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000427 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000427 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000427 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000427 */ 					switch (__attrib0__) {
/* 000427 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000427 */ 					}
/* 000427 */ 				}
/* 000427 */ 			}
/* 000427 */ 		}
/* 000427 */ 		else {
/* 000427 */ 		}
/* 000428 */ 		return LatexMacroNode;
/* 000428 */ 	});},
/* 000430 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000430 */ 		if (arguments.length) {
/* 000430 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000430 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000430 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000430 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000430 */ 					switch (__attrib0__) {
/* 000430 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000430 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000430 */ 					}
/* 000430 */ 				}
/* 000430 */ 			}
/* 000430 */ 		}
/* 000430 */ 		else {
/* 000430 */ 		}
/* 000431 */ 		if (__t__ (self.nodeargd !== null)) {
/* 000432 */ 			(function () {
/* 000432 */ 				var __accu0__ = self.nodeargd;
/* 000432 */ 				return __call__ (__accu0__.accept_node_visitor, __accu0__, visitor);
/* 000432 */ 			}) ();
/* 000432 */ 		}
/* 000433 */ 		(function () {
/* 000433 */ 			var __accu0__ = visitor;
/* 000433 */ 			return __call__ (__accu0__.visit_macro_node, __accu0__, self);
/* 000433 */ 		}) ();
/* 000433 */ 	});}
/* 000433 */ });
/* 000456 */ export var LatexEnvironmentNode =  __class__ ('LatexEnvironmentNode', [LatexNode], {
/* 000456 */ 	__module__: __name__,
/* 000522 */ 	get __init__ () {return __get__ (this, function (self, environmentname, nodelist) {
/* 000522 */ 		var kwargs = dict ();
/* 000522 */ 		if (arguments.length) {
/* 000522 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000522 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000522 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000522 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000522 */ 					switch (__attrib0__) {
/* 000522 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000522 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000522 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000522 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000522 */ 					}
/* 000522 */ 				}
/* 000522 */ 				delete kwargs.__kwargtrans__;
/* 000522 */ 			}
/* 000522 */ 		}
/* 000522 */ 		else {
/* 000522 */ 		}
/* 000523 */ 		var nodeargd = (function () {
/* 000523 */ 			var __accu0__ = kwargs;
/* 000523 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'nodeargd', __call__ (ParsedArguments, null));
/* 000523 */ 		}) ();
/* 000524 */ 		var spec = (function () {
/* 000524 */ 			var __accu0__ = kwargs;
/* 000524 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'spec', null);
/* 000524 */ 		}) ();
/* 000529 */ 		__call__ (__call__ (__super__, null, LatexEnvironmentNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['environmentname', 'spec', 'nodelist', 'nodeargd']), _redundant_fields: tuple (['envname', 'optargs', 'args'])}, kwargs)));
/* 000534 */ 		self.environmentname = environmentname;
/* 000535 */ 		self.spec = spec;
/* 000536 */ 		self.nodelist = nodelist;
/* 000537 */ 		self.nodeargd = nodeargd;
/* 000537 */ 	});},
/* 000544 */ 	get _get_envname () {return __get__ (this, function (self) {
/* 000544 */ 		if (arguments.length) {
/* 000544 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000544 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000544 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000544 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000544 */ 					switch (__attrib0__) {
/* 000544 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000544 */ 					}
/* 000544 */ 				}
/* 000544 */ 			}
/* 000544 */ 		}
/* 000544 */ 		else {
/* 000544 */ 		}
/* 000546 */ 		return self.environmentname;
/* 000546 */ 	});},
/* 000555 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000555 */ 		if (arguments.length) {
/* 000555 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000555 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000555 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000555 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000555 */ 					switch (__attrib0__) {
/* 000555 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000555 */ 					}
/* 000555 */ 				}
/* 000555 */ 			}
/* 000555 */ 		}
/* 000555 */ 		else {
/* 000555 */ 		}
/* 000556 */ 		return LatexEnvironmentNode;
/* 000556 */ 	});},
/* 000558 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000558 */ 		if (arguments.length) {
/* 000558 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000558 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000558 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000558 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000558 */ 					switch (__attrib0__) {
/* 000558 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000558 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000558 */ 					}
/* 000558 */ 				}
/* 000558 */ 			}
/* 000558 */ 		}
/* 000558 */ 		else {
/* 000558 */ 		}
/* 000559 */ 		if (__t__ (self.nodeargd !== null)) {
/* 000560 */ 			(function () {
/* 000560 */ 				var __accu0__ = self.nodeargd;
/* 000560 */ 				return __call__ (__accu0__.accept_node_visitor, __accu0__, visitor);
/* 000560 */ 			}) ();
/* 000560 */ 		}
/* 000561 */ 		if (__t__ (self.nodelist !== null)) {
/* 000562 */ 			var __iterable0__ = self.nodelist;
/* 000562 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000562 */ 				var node = __getitem__ (__iterable0__, __index0__);
/* 000563 */ 				if (__t__ (node !== null)) {
/* 000564 */ 					(function () {
/* 000564 */ 						var __accu0__ = node;
/* 000564 */ 						return __call__ (__accu0__.accept_node_visitor, __accu0__, visitor);
/* 000564 */ 					}) ();
/* 000564 */ 				}
/* 000564 */ 			}
/* 000564 */ 		}
/* 000565 */ 		(function () {
/* 000565 */ 			var __accu0__ = visitor;
/* 000565 */ 			return __call__ (__accu0__.visit_environment_node, __accu0__, self);
/* 000565 */ 		}) ();
/* 000565 */ 	});}
/* 000565 */ });
/* 000565 */ Object.defineProperty (LatexEnvironmentNode, 'envname', property.call (LatexEnvironmentNode, LatexEnvironmentNode._get_envname));;
/* 000569 */ export var LatexSpecialsNode =  __class__ ('LatexSpecialsNode', [LatexNode], {
/* 000569 */ 	__module__: __name__,
/* 000607 */ 	get __init__ () {return __get__ (this, function (self, specials_chars) {
/* 000607 */ 		var kwargs = dict ();
/* 000607 */ 		if (arguments.length) {
/* 000607 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000607 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000607 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000607 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000607 */ 					switch (__attrib0__) {
/* 000607 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000607 */ 						case 'specials_chars': var specials_chars = __allkwargs0__ [__attrib0__]; break;
/* 000607 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000607 */ 					}
/* 000607 */ 				}
/* 000607 */ 				delete kwargs.__kwargtrans__;
/* 000607 */ 			}
/* 000607 */ 		}
/* 000607 */ 		else {
/* 000607 */ 		}
/* 000609 */ 		var spec = (function () {
/* 000609 */ 			var __accu0__ = kwargs;
/* 000609 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'spec', null);
/* 000609 */ 		}) ();
/* 000610 */ 		var nodeargd = (function () {
/* 000610 */ 			var __accu0__ = kwargs;
/* 000610 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'nodeargd', null);
/* 000610 */ 		}) ();
/* 000612 */ 		__call__ (__call__ (__super__, null, LatexSpecialsNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['specials_chars', 'spec', 'nodeargd'])}, kwargs)));
/* 000616 */ 		self.specials_chars = specials_chars;
/* 000617 */ 		self.spec = spec;
/* 000618 */ 		self.nodeargd = nodeargd;
/* 000618 */ 	});},
/* 000620 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000620 */ 		if (arguments.length) {
/* 000620 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000620 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000620 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000620 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000620 */ 					switch (__attrib0__) {
/* 000620 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000620 */ 					}
/* 000620 */ 				}
/* 000620 */ 			}
/* 000620 */ 		}
/* 000620 */ 		else {
/* 000620 */ 		}
/* 000621 */ 		return LatexSpecialsNode;
/* 000621 */ 	});},
/* 000623 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000623 */ 		if (arguments.length) {
/* 000623 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000623 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000623 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000623 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000623 */ 					switch (__attrib0__) {
/* 000623 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000623 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000623 */ 					}
/* 000623 */ 				}
/* 000623 */ 			}
/* 000623 */ 		}
/* 000623 */ 		else {
/* 000623 */ 		}
/* 000624 */ 		if (__t__ (self.nodeargd !== null)) {
/* 000625 */ 			(function () {
/* 000625 */ 				var __accu0__ = self.nodeargd;
/* 000625 */ 				return __call__ (__accu0__.accept_node_visitor, __accu0__, visitor);
/* 000625 */ 			}) ();
/* 000625 */ 		}
/* 000626 */ 		(function () {
/* 000626 */ 			var __accu0__ = visitor;
/* 000626 */ 			return __call__ (__accu0__.visit_specials_node, __accu0__, self);
/* 000626 */ 		}) ();
/* 000626 */ 	});}
/* 000626 */ });
/* 000629 */ export var LatexMathNode =  __class__ ('LatexMathNode', [LatexNode], {
/* 000629 */ 	__module__: __name__,
/* 000655 */ 	get __init__ () {return __get__ (this, function (self, displaytype, nodelist) {
/* 000655 */ 		if (typeof nodelist == 'undefined' || (nodelist != null && nodelist.hasOwnProperty ("__kwargtrans__"))) {;
/* 000655 */ 			var nodelist = [];
/* 000655 */ 		};
/* 000655 */ 		var kwargs = dict ();
/* 000655 */ 		if (arguments.length) {
/* 000655 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000655 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000655 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000655 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000655 */ 					switch (__attrib0__) {
/* 000655 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000655 */ 						case 'displaytype': var displaytype = __allkwargs0__ [__attrib0__]; break;
/* 000655 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000655 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000655 */ 					}
/* 000655 */ 				}
/* 000655 */ 				delete kwargs.__kwargtrans__;
/* 000655 */ 			}
/* 000655 */ 		}
/* 000655 */ 		else {
/* 000655 */ 		}
/* 000656 */ 		var delimiters = (function () {
/* 000656 */ 			var __accu0__ = kwargs;
/* 000656 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'delimiters', tuple ([null, null]));
/* 000656 */ 		}) ();
/* 000658 */ 		__call__ (__call__ (__super__, null, LatexMathNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['displaytype', 'nodelist', 'delimiters'])}, kwargs)));
/* 000663 */ 		self.displaytype = displaytype;
/* 000664 */ 		self.nodelist = nodelist;
/* 000665 */ 		self.delimiters = delimiters;
/* 000665 */ 	});},
/* 000667 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000667 */ 		if (arguments.length) {
/* 000667 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000667 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000667 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000667 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000667 */ 					switch (__attrib0__) {
/* 000667 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000667 */ 					}
/* 000667 */ 				}
/* 000667 */ 			}
/* 000667 */ 		}
/* 000667 */ 		else {
/* 000667 */ 		}
/* 000668 */ 		return LatexMathNode;
/* 000668 */ 	});},
/* 000671 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000671 */ 		if (arguments.length) {
/* 000671 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000671 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000671 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000671 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000671 */ 					switch (__attrib0__) {
/* 000671 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000671 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000671 */ 					}
/* 000671 */ 				}
/* 000671 */ 			}
/* 000671 */ 		}
/* 000671 */ 		else {
/* 000671 */ 		}
/* 000672 */ 		if (__t__ (self.nodelist !== null)) {
/* 000673 */ 			var __iterable0__ = self.nodelist;
/* 000673 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000673 */ 				var node = __getitem__ (__iterable0__, __index0__);
/* 000674 */ 				if (__t__ (node !== null)) {
/* 000675 */ 					(function () {
/* 000675 */ 						var __accu0__ = node;
/* 000675 */ 						return __call__ (__accu0__.accept_node_visitor, __accu0__, visitor);
/* 000675 */ 					}) ();
/* 000675 */ 				}
/* 000675 */ 			}
/* 000675 */ 		}
/* 000676 */ 		(function () {
/* 000676 */ 			var __accu0__ = visitor;
/* 000676 */ 			return __call__ (__accu0__.visit_math_node, __accu0__, self);
/* 000676 */ 		}) ();
/* 000676 */ 	});}
/* 000676 */ });
/* 000684 */ export var LatexNodeList =  __class__ ('LatexNodeList', [object], {
/* 000684 */ 	__module__: __name__,
/* 000722 */ 	get __init__ () {return __get__ (this, function (self, nodelist) {
/* 000722 */ 		var kwargs = dict ();
/* 000722 */ 		if (arguments.length) {
/* 000722 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000722 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000722 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000722 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000722 */ 					switch (__attrib0__) {
/* 000722 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000722 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000722 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000722 */ 					}
/* 000722 */ 				}
/* 000722 */ 				delete kwargs.__kwargtrans__;
/* 000722 */ 			}
/* 000722 */ 		}
/* 000722 */ 		else {
/* 000722 */ 		}
/* 000724 */ 		if (__t__ (__call__ (isinstance, null, nodelist, LatexNodeList))) {
/* 000725 */ 			var obj = nodelist;
/* 000726 */ 			self.nodelist = obj.nodelist;
/* 000727 */ 			self.parsing_state = obj.parsing_state;
/* 000728 */ 			self.latex_walker = obj.latex_walker;
/* 000729 */ 			self.pos = obj.pos;
/* 000730 */ 			self.pos_end = obj.pos_end;
/* 000731 */ 			return ;
/* 000731 */ 		}
/* 000733 */ 		self.nodelist = nodelist;
/* 000735 */ 		if (__t__ (self.nodelist === null)) {
/* 000736 */ 			(function () {
/* 000736 */ 				var __accu0__ = logger;
/* 000736 */ 				return __call__ (__accu0__.warning, __accu0__, "You're creating a LatexNodeList with nodelist=None. That's likely to cause crashes!");
/* 000736 */ 			}) ();
/* 000736 */ 		}
/* 000739 */ 		self.parsing_state = (function () {
/* 000739 */ 			var __accu0__ = kwargs;
/* 000739 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'parsing_state', null);
/* 000739 */ 		}) ();
/* 000740 */ 		self.latex_walker = (function () {
/* 000740 */ 			var __accu0__ = kwargs;
/* 000740 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'latex_walker', null);
/* 000740 */ 		}) ();
/* 000741 */ 		self.pos = (function () {
/* 000741 */ 			var __accu0__ = kwargs;
/* 000741 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'pos', null);
/* 000741 */ 		}) ();
/* 000742 */ 		self.pos_end = (function () {
/* 000742 */ 			var __accu0__ = kwargs;
/* 000742 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'pos_end', null);
/* 000742 */ 		}) ();
/* 000744 */ 		if (__t__ (__call__ (len, null, kwargs))) {
/* 000746 */ 			var __except0__ = __call__ (ValueError, null, __add__ ('Unexpected keyword arguments to LatexNodeList: ', __call__ (repr, null, kwargs)));
/* 000746 */ 			__except0__.__cause__ = null;
/* 000746 */ 			throw __except0__;
/* 000746 */ 		}
/* 000749 */ 		var __left0__ = __call__ (_update_posposend_from_nodelist, null, self.pos, self.pos_end, self.nodelist);
/* 000749 */ 		self.pos = __left0__ [0];
/* 000749 */ 		self.pos_end = __left0__ [1];
/* 000749 */ 	});},
/* 000752 */ 	_fields: tuple (['nodelist', 'parsing_state', 'latex_walker', 'pos', 'pos_end']),
/* 000756 */ 	get _get_len () {return __get__ (this, function (self) {
/* 000756 */ 		if (arguments.length) {
/* 000756 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000756 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000756 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000756 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000756 */ 					switch (__attrib0__) {
/* 000756 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000756 */ 					}
/* 000756 */ 				}
/* 000756 */ 			}
/* 000756 */ 		}
/* 000756 */ 		else {
/* 000756 */ 		}
/* 000757 */ 		if (__t__ (__t__ (self.pos === null) || self.pos_end === null)) {
/* 000758 */ 			return null;
/* 000758 */ 		}
/* 000759 */ 		return __sub__ (self.pos_end, self.pos);
/* 000759 */ 	});},
/* 000762 */ 	get __iter__ () {return __get__ (this, function (self) {
/* 000762 */ 		if (arguments.length) {
/* 000762 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000762 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000762 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000762 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000762 */ 					switch (__attrib0__) {
/* 000762 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000762 */ 					}
/* 000762 */ 				}
/* 000762 */ 			}
/* 000762 */ 		}
/* 000762 */ 		else {
/* 000762 */ 		}
/* 000763 */ 		if (__t__ (self.nodelist === null)) {
/* 000764 */ 			return __call__ (py_iter, null, []);
/* 000764 */ 		}
/* 000765 */ 		return __call__ (py_iter, null, self.nodelist);
/* 000765 */ 	});},
/* 000765 */ 	[Symbol.iterator] () {return this.__iter__ ()},
/* 000768 */ 	get __getitem__ () {return __get__ (this, function (self, index) {
/* 000768 */ 		if (arguments.length) {
/* 000768 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000768 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000768 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000768 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000768 */ 					switch (__attrib0__) {
/* 000768 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000768 */ 						case 'index': var index = __allkwargs0__ [__attrib0__]; break;
/* 000768 */ 					}
/* 000768 */ 				}
/* 000768 */ 			}
/* 000768 */ 		}
/* 000768 */ 		else {
/* 000768 */ 		}
/* 000779 */ 		try {
/* 000780 */ 			if (__t__ (__eq__ (__call__ (len, null, index), 3))) {
/* 000781 */ 				var __left0__ = index;
/* 000781 */ 				var lower = __left0__ [0];
/* 000781 */ 				var upper = __left0__ [1];
/* 000781 */ 				var step = __left0__ [2];
/* 000782 */ 				return __getslice__ (self.nodelist, lower, upper, step);
/* 000782 */ 			}
/* 000782 */ 		}
/* 000782 */ 		catch (__except0__) {
/* 000784 */ 			// pass;
/* 000784 */ 		}
/* 000787 */ 		if (__t__ (__t__ (__call__ (isinstance, null, index, int)) && __lt__ (index, 0))) {
/* 000788 */ 			var index = __add__ (__call__ (len, null, self.nodelist), index);
/* 000788 */ 		}
/* 000790 */ 		return __getitem__ (self.nodelist, index);
/* 000790 */ 	});},
/* 000793 */ 	get __len__ () {return __get__ (this, function (self) {
/* 000793 */ 		if (arguments.length) {
/* 000793 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000793 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000793 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000793 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000793 */ 					switch (__attrib0__) {
/* 000793 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000793 */ 					}
/* 000793 */ 				}
/* 000793 */ 			}
/* 000793 */ 		}
/* 000793 */ 		else {
/* 000793 */ 		}
/* 000794 */ 		return __call__ (len, null, self.nodelist);
/* 000794 */ 	});},
/* 000797 */ 	get latex_verbatim () {return __get__ (this, function (self) {
/* 000797 */ 		if (arguments.length) {
/* 000797 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000797 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000797 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000797 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000797 */ 					switch (__attrib0__) {
/* 000797 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000797 */ 					}
/* 000797 */ 				}
/* 000797 */ 			}
/* 000797 */ 		}
/* 000797 */ 		else {
/* 000797 */ 		}
/* 000804 */ 		return (function () {
/* 000804 */ 			var __accu0__ = '';
/* 000804 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000804 */ 				var __accu1__ = [];
/* 000804 */ 				var __iterable0__ = self.nodelist;
/* 000804 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000806 */ 					var n = __getitem__ (__iterable0__, __index0__);
/* 000806 */ 					if (__t__ (n !== null)) {
/* 000807 */ 						(function () {
/* 000807 */ 							var __accu2__ = __accu1__;
/* 000805 */ 							return __call__ (__accu2__.append, __accu2__, (function () {
/* 000805 */ 								var __accu3__ = n;
/* 000805 */ 								return __call__ (__accu3__.latex_verbatim, __accu3__);
/* 000805 */ 							}) ());
/* 000805 */ 						}) ();
/* 000805 */ 					}
/* 000805 */ 				}
/* 000805 */ 				return __accu1__;
/* 000805 */ 			}) ());
/* 000805 */ 		}) ();
/* 000805 */ 	});},
/* 000811 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000811 */ 		if (arguments.length) {
/* 000811 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000811 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000811 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000811 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000811 */ 					switch (__attrib0__) {
/* 000811 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000811 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000811 */ 					}
/* 000811 */ 				}
/* 000811 */ 			}
/* 000811 */ 		}
/* 000811 */ 		else {
/* 000811 */ 		}
/* 000812 */ 		if (__t__ (self.nodelist !== null)) {
/* 000813 */ 			var __iterable0__ = self.nodelist;
/* 000813 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000813 */ 				var node = __getitem__ (__iterable0__, __index0__);
/* 000814 */ 				if (__t__ (node !== null)) {
/* 000815 */ 					(function () {
/* 000815 */ 						var __accu0__ = node;
/* 000815 */ 						return __call__ (__accu0__.accept_node_visitor, __accu0__, visitor);
/* 000815 */ 					}) ();
/* 000815 */ 				}
/* 000815 */ 			}
/* 000815 */ 		}
/* 000816 */ 		(function () {
/* 000816 */ 			var __accu0__ = visitor;
/* 000816 */ 			return __call__ (__accu0__.visit_node_list, __accu0__, self);
/* 000816 */ 		}) ();
/* 000816 */ 	});},
/* 000819 */ 	get filter () {return __get__ (this, function (self, node_predicate_fn, skip_none, skip_comments, skip_whitespace_char_nodes) {
/* 000819 */ 		if (typeof node_predicate_fn == 'undefined' || (node_predicate_fn != null && node_predicate_fn.hasOwnProperty ("__kwargtrans__"))) {;
/* 000819 */ 			var node_predicate_fn = null;
/* 000819 */ 		};
/* 000819 */ 		if (typeof skip_none == 'undefined' || (skip_none != null && skip_none.hasOwnProperty ("__kwargtrans__"))) {;
/* 000819 */ 			var skip_none = true;
/* 000819 */ 		};
/* 000819 */ 		if (typeof skip_comments == 'undefined' || (skip_comments != null && skip_comments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000819 */ 			var skip_comments = false;
/* 000819 */ 		};
/* 000819 */ 		if (typeof skip_whitespace_char_nodes == 'undefined' || (skip_whitespace_char_nodes != null && skip_whitespace_char_nodes.hasOwnProperty ("__kwargtrans__"))) {;
/* 000819 */ 			var skip_whitespace_char_nodes = false;
/* 000819 */ 		};
/* 000819 */ 		if (arguments.length) {
/* 000819 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000819 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000819 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000819 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000819 */ 					switch (__attrib0__) {
/* 000819 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000819 */ 						case 'node_predicate_fn': var node_predicate_fn = __allkwargs0__ [__attrib0__]; break;
/* 000819 */ 						case 'skip_none': var skip_none = __allkwargs0__ [__attrib0__]; break;
/* 000819 */ 						case 'skip_comments': var skip_comments = __allkwargs0__ [__attrib0__]; break;
/* 000819 */ 						case 'skip_whitespace_char_nodes': var skip_whitespace_char_nodes = __allkwargs0__ [__attrib0__]; break;
/* 000819 */ 					}
/* 000819 */ 				}
/* 000819 */ 			}
/* 000819 */ 		}
/* 000819 */ 		else {
/* 000819 */ 		}
/* 000822 */ 		if (__t__ (self.latex_walker !== null)) {
/* 000823 */ 			var make_nodelist = self.latex_walker.make_nodelist;
/* 000823 */ 		}
/* 000824 */ 		else {
/* 000825 */ 			var make_nodelist = (function __lambda__ (nl) {
/* 000825 */ 				var kwargs = dict ();
/* 000825 */ 				if (arguments.length) {
/* 000825 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000825 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000825 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000825 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000825 */ 							switch (__attrib0__) {
/* 000825 */ 								case 'nl': var nl = __allkwargs0__ [__attrib0__]; break;
/* 000825 */ 								default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000825 */ 							}
/* 000825 */ 						}
/* 000825 */ 						delete kwargs.__kwargtrans__;
/* 000825 */ 					}
/* 000825 */ 				}
/* 000825 */ 				else {
/* 000825 */ 				}
/* 000825 */ 				return __call__ (LatexNodeList, null, nl, __kwargtrans__ (kwargs));
/* 000825 */ 			});
/* 000825 */ 		}
/* 000827 */ 		var filter_full_predicate_fn = function (n) {
/* 000827 */ 			if (arguments.length) {
/* 000827 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000827 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000827 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000827 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000827 */ 						switch (__attrib0__) {
/* 000827 */ 							case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000827 */ 						}
/* 000827 */ 					}
/* 000827 */ 				}
/* 000827 */ 			}
/* 000827 */ 			else {
/* 000827 */ 			}
/* 000828 */ 			if (__t__ (__t__ (skip_none) && n === null)) {
/* 000829 */ 				return false;
/* 000829 */ 			}
/* 000830 */ 			if (__t__ (__t__ (skip_comments) && (function () {
/* 000830 */ 				var __accu0__ = n;
/* 000830 */ 				return __call__ (__accu0__.isNodeType, __accu0__, LatexCommentNode);
/* 000830 */ 			}) ())) {
/* 000831 */ 				return false;
/* 000831 */ 			}
/* 000832 */ 			if (__t__ (__t__ (skip_whitespace_char_nodes) && __t__ ((function () {
/* 000832 */ 				var __accu0__ = n;
/* 000832 */ 				return __call__ (__accu0__.isNodeType, __accu0__, LatexCharsNode);
/* 000833 */ 			}) ()) && __eq__ (__call__ (len, null, (function () {
/* 000833 */ 				var __accu0__ = n.chars;
/* 000833 */ 				return __call__ (__accu0__.strip, __accu0__);
/* 000833 */ 			}) ()), 0))) {
/* 000834 */ 				return false;
/* 000834 */ 			}
/* 000835 */ 			if (__t__ (node_predicate_fn !== null)) {
/* 000836 */ 				return __call__ (node_predicate_fn, null, n);
/* 000836 */ 			}
/* 000837 */ 			return true;
/* 000837 */ 		};
/* 000839 */ 		var filtered_nodes = (function () {
/* 000839 */ 			var __accu0__ = [];
/* 000839 */ 			var __iterable0__ = self.nodelist;
/* 000839 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000841 */ 				var n = __getitem__ (__iterable0__, __index0__);
/* 000842 */ 				if (__t__ (__call__ (filter_full_predicate_fn, null, n))) {
/* 000842 */ 					(function () {
/* 000842 */ 						var __accu1__ = __accu0__;
/* 000842 */ 						return __call__ (__accu1__.append, __accu1__, n);
/* 000842 */ 					}) ();
/* 000842 */ 				}
/* 000842 */ 			}
/* 000842 */ 			return __accu0__;
/* 000842 */ 		}) ();
/* 000851 */ 		return __call__ (make_nodelist, null, filtered_nodes, __kwargtrans__ ({parsing_state: self.parsing_state, pos: (__t__ (__call__ (len, null, filtered_nodes)) ? null : self.pos_end), pos_end: (__t__ (__call__ (len, null, filtered_nodes)) ? null : self.pos_end)}));
/* 000851 */ 	});},
/* 000855 */ 	get split_at_node () {return __get__ (this, function (self, node_predicate_fn, skip_none, keep_separators, max_split) {
/* 000855 */ 		if (typeof skip_none == 'undefined' || (skip_none != null && skip_none.hasOwnProperty ("__kwargtrans__"))) {;
/* 000855 */ 			var skip_none = true;
/* 000855 */ 		};
/* 000855 */ 		if (typeof keep_separators == 'undefined' || (keep_separators != null && keep_separators.hasOwnProperty ("__kwargtrans__"))) {;
/* 000855 */ 			var keep_separators = false;
/* 000855 */ 		};
/* 000855 */ 		if (typeof max_split == 'undefined' || (max_split != null && max_split.hasOwnProperty ("__kwargtrans__"))) {;
/* 000855 */ 			var max_split = null;
/* 000855 */ 		};
/* 000855 */ 		if (arguments.length) {
/* 000855 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000855 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000855 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000855 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000855 */ 					switch (__attrib0__) {
/* 000855 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000855 */ 						case 'node_predicate_fn': var node_predicate_fn = __allkwargs0__ [__attrib0__]; break;
/* 000855 */ 						case 'skip_none': var skip_none = __allkwargs0__ [__attrib0__]; break;
/* 000855 */ 						case 'keep_separators': var keep_separators = __allkwargs0__ [__attrib0__]; break;
/* 000855 */ 						case 'max_split': var max_split = __allkwargs0__ [__attrib0__]; break;
/* 000855 */ 					}
/* 000855 */ 				}
/* 000855 */ 			}
/* 000855 */ 		}
/* 000855 */ 		else {
/* 000855 */ 		}
/* 000858 */ 		var nodelists_list = [[]];
/* 000860 */ 		if (__t__ (__t__ (max_split !== null) && __eq__ (max_split, 0))) {
/* 000861 */ 			var no_more_splits = true;
/* 000861 */ 		}
/* 000862 */ 		else {
/* 000863 */ 			var no_more_splits = false;
/* 000863 */ 		}
/* 000865 */ 		var __iterable0__ = self.nodelist;
/* 000865 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000865 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000866 */ 			if (__t__ (__t__ (skip_none) && n === null)) {
/* 000866 */ 				continue;
/* 000866 */ 			}
/* 000868 */ 			if (__t__ (__t__ (!__t__ ((no_more_splits))) && __call__ (node_predicate_fn, null, n))) {
/* 000869 */ 				if (__t__ (keep_separators)) {
/* 000870 */ 					(function () {
/* 000870 */ 						var __accu0__ = nodelists_list;
/* 000870 */ 						return __call__ (__accu0__.append, __accu0__, [n]);
/* 000870 */ 					}) ();
/* 000870 */ 				}
/* 000871 */ 				else {
/* 000872 */ 					(function () {
/* 000872 */ 						var __accu0__ = nodelists_list;
/* 000872 */ 						return __call__ (__accu0__.append, __accu0__, []);
/* 000872 */ 					}) ();
/* 000872 */ 				}
/* 000874 */ 				if (__t__ (__t__ (max_split !== null) && __ge__ (__call__ (len, null, nodelists_list), max_split))) {
/* 000875 */ 					var no_more_splits = true;
/* 000875 */ 				}
/* 000875 */ 			}
/* 000876 */ 			else {
/* 000877 */ 				(function () {
/* 000877 */ 					var __accu0__ = __getitem__ (nodelists_list, __sub__ (__call__ (len, null, nodelists_list), 1));
/* 000877 */ 					return __call__ (__accu0__.append, __accu0__, n);
/* 000877 */ 				}) ();
/* 000877 */ 			}
/* 000877 */ 		}
/* 000879 */ 		if (__t__ (self.latex_walker !== null)) {
/* 000880 */ 			var make_latex_node_list = self.latex_walker.make_nodelist;
/* 000880 */ 		}
/* 000881 */ 		else {
/* 000882 */ 			var make_latex_node_list = (function __lambda__ (nl) {
/* 000882 */ 				var kwargs = dict ();
/* 000882 */ 				if (arguments.length) {
/* 000882 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000882 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000882 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000882 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000882 */ 							switch (__attrib0__) {
/* 000882 */ 								case 'nl': var nl = __allkwargs0__ [__attrib0__]; break;
/* 000882 */ 								default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000882 */ 							}
/* 000882 */ 						}
/* 000882 */ 						delete kwargs.__kwargtrans__;
/* 000882 */ 					}
/* 000882 */ 				}
/* 000882 */ 				else {
/* 000882 */ 				}
/* 000882 */ 				return __call__ (LatexNodeList, null, nl, __kwargtrans__ (kwargs));
/* 000882 */ 			});
/* 000882 */ 		}
/* 000884 */ 		return (function () {
/* 000884 */ 			var __accu0__ = [];
/* 000884 */ 			var __iterable0__ = nodelists_list;
/* 000884 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000886 */ 				var nl = __getitem__ (__iterable0__, __index0__);
/* 000886 */ 				(function () {
/* 000886 */ 					var __accu1__ = __accu0__;
/* 000885 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (make_latex_node_list, null, nl, __kwargtrans__ ({parsing_state: self.parsing_state})));
/* 000885 */ 				}) ();
/* 000885 */ 			}
/* 000885 */ 			return __accu0__;
/* 000885 */ 		}) ();
/* 000885 */ 	});},
/* 000889 */ 	get split_at_chars () {return __get__ (this, function (self, sep_chars, max_split, keep_empty, skip_none) {
/* 000889 */ 		if (typeof max_split == 'undefined' || (max_split != null && max_split.hasOwnProperty ("__kwargtrans__"))) {;
/* 000889 */ 			var max_split = null;
/* 000889 */ 		};
/* 000889 */ 		if (typeof keep_empty == 'undefined' || (keep_empty != null && keep_empty.hasOwnProperty ("__kwargtrans__"))) {;
/* 000889 */ 			var keep_empty = false;
/* 000889 */ 		};
/* 000889 */ 		if (typeof skip_none == 'undefined' || (skip_none != null && skip_none.hasOwnProperty ("__kwargtrans__"))) {;
/* 000889 */ 			var skip_none = true;
/* 000889 */ 		};
/* 000889 */ 		if (arguments.length) {
/* 000889 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000889 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000889 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000889 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000889 */ 					switch (__attrib0__) {
/* 000889 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000889 */ 						case 'sep_chars': var sep_chars = __allkwargs0__ [__attrib0__]; break;
/* 000889 */ 						case 'max_split': var max_split = __allkwargs0__ [__attrib0__]; break;
/* 000889 */ 						case 'keep_empty': var keep_empty = __allkwargs0__ [__attrib0__]; break;
/* 000889 */ 						case 'skip_none': var skip_none = __allkwargs0__ [__attrib0__]; break;
/* 000889 */ 					}
/* 000889 */ 				}
/* 000889 */ 			}
/* 000889 */ 		}
/* 000889 */ 		else {
/* 000889 */ 		}
/* 000928 */ 		var split_node_lists = [];
/* 000930 */ 		var get_split_match_start_end = function (m, offset) {
/* 000930 */ 			if (typeof offset == 'undefined' || (offset != null && offset.hasOwnProperty ("__kwargtrans__"))) {;
/* 000930 */ 				var offset = 0;
/* 000930 */ 			};
/* 000930 */ 			if (arguments.length) {
/* 000930 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000930 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000930 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000930 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000930 */ 						switch (__attrib0__) {
/* 000930 */ 							case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000930 */ 							case 'offset': var offset = __allkwargs0__ [__attrib0__]; break;
/* 000930 */ 						}
/* 000930 */ 					}
/* 000930 */ 				}
/* 000930 */ 			}
/* 000930 */ 			else {
/* 000930 */ 			}
/* 000931 */ 			if (__t__ (m === null)) {
/* 000932 */ 				return tuple ([__neg__ (1), null]);
/* 000932 */ 			}
/* 000933 */ 			if (__t__ (__t__ (__call__ (hasattr, null, m, 'start')) && __call__ (hasattr, null, m, 'end'))) {
/* 000934 */ 				return tuple ([__add__ (offset, (function () {
/* 000934 */ 					var __accu0__ = m;
/* 000934 */ 					return __call__ (__accu0__.start, __accu0__);
/* 000934 */ 				}) ()), __add__ (offset, (function () {
/* 000934 */ 					var __accu0__ = m;
/* 000934 */ 					return __call__ (__accu0__.end, __accu0__);
/* 000934 */ 				}) ())]);
/* 000934 */ 			}
/* 000935 */ 			if (__t__ (__t__ (!__t__ ((m))) || !__t__ ((__call__ (len, null, m))))) {
/* 000936 */ 				return tuple ([__neg__ (1), null]);
/* 000936 */ 			}
/* 000937 */ 			var __left0__ = m;
/* 000937 */ 			var start = __left0__ [0];
/* 000937 */ 			var end = __left0__ [1];
/* 000938 */ 			if (__t__ (start === null)) {
/* 000939 */ 				var start = __neg__ (1);
/* 000939 */ 			}
/* 000940 */ 			else {
/* 000941 */ 				var start = __add__ (offset, start);
/* 000941 */ 			}
/* 000942 */ 			var end = __add__ (offset, end);
/* 000943 */ 			return tuple ([start, end]);
/* 000943 */ 		};
/* 000945 */ 		var get_next_split = function (chars, pos) {
/* 000945 */ 			if (arguments.length) {
/* 000945 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000945 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000945 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000945 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000945 */ 						switch (__attrib0__) {
/* 000945 */ 							case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000945 */ 							case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000945 */ 						}
/* 000945 */ 					}
/* 000945 */ 				}
/* 000945 */ 			}
/* 000945 */ 			else {
/* 000945 */ 			}
/* 000947 */ 			if (__t__ (__t__ (max_split !== null) && __ge__ (__call__ (len, null, split_node_lists), max_split))) {
/* 000948 */ 				return tuple ([__neg__ (1), __call__ (len, null, chars)]);
/* 000948 */ 			}
/* 000950 */ 			if (__t__ (__call__ (hasattr, null, sep_chars, 'search'))) {
/* 000956 */ 				var m = (function () {
/* 000956 */ 					var __accu0__ = sep_chars;
/* 000956 */ 					return __call__ (__accu0__.search, __accu0__, __getslice__ (chars, pos, null, 1));
/* 000956 */ 				}) ();
/* 000957 */ 				return __call__ (get_split_match_start_end, null, m, pos);
/* 000957 */ 			}
/* 000959 */ 			if (__t__ (__call__ (callable, null, sep_chars))) {
/* 000960 */ 				var m = __call__ (sep_chars, null, chars, pos);
/* 000961 */ 				return __call__ (get_split_match_start_end, null, m);
/* 000961 */ 			}
/* 000963 */ 			var idx = (function () {
/* 000963 */ 				var __accu0__ = chars;
/* 000963 */ 				return __call__ (__accu0__.find, __accu0__, sep_chars, pos);
/* 000963 */ 			}) ();
/* 000964 */ 			if (__t__ (__t__ (idx === null) || __eq__ (idx, __neg__ (1)))) {
/* 000965 */ 				return tuple ([__neg__ (1), null]);
/* 000965 */ 			}
/* 000966 */ 			return tuple ([idx, __add__ (idx, __call__ (len, null, sep_chars))]);
/* 000966 */ 		};
/* 000969 */ 		var lw = self.latex_walker;
/* 000970 */ 		if (__t__ (lw !== null)) {
/* 000971 */ 			var make_node = lw.make_node;
/* 000972 */ 			var make_nodelist = lw.make_nodelist;
/* 000972 */ 		}
/* 000973 */ 		else {
/* 000974 */ 			var make_node = (function __lambda__ (cls) {
/* 000974 */ 				var kwargs = dict ();
/* 000974 */ 				if (arguments.length) {
/* 000974 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000974 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000974 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000974 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000974 */ 							switch (__attrib0__) {
/* 000974 */ 								case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000974 */ 								default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000974 */ 							}
/* 000974 */ 						}
/* 000974 */ 						delete kwargs.__kwargtrans__;
/* 000974 */ 					}
/* 000974 */ 				}
/* 000974 */ 				else {
/* 000974 */ 				}
/* 000974 */ 				return __call__ (cls, null, __kwargtrans__ (kwargs));
/* 000974 */ 			});
/* 000975 */ 			var make_nodelist = (function __lambda__ (nl) {
/* 000975 */ 				var kwargs = dict ();
/* 000975 */ 				if (arguments.length) {
/* 000975 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000975 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000975 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000975 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000975 */ 							switch (__attrib0__) {
/* 000975 */ 								case 'nl': var nl = __allkwargs0__ [__attrib0__]; break;
/* 000975 */ 								default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000975 */ 							}
/* 000975 */ 						}
/* 000975 */ 						delete kwargs.__kwargtrans__;
/* 000975 */ 					}
/* 000975 */ 				}
/* 000975 */ 				else {
/* 000975 */ 				}
/* 000975 */ 				return __call__ (LatexNodeList, null, nl, __kwargtrans__ (kwargs));
/* 000975 */ 			});
/* 000975 */ 		}
/* 000977 */ 		var chars_to_node = function (chars, n, rel_pos, rel_pos_end) {
/* 000977 */ 			if (arguments.length) {
/* 000977 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000977 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000977 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000977 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000977 */ 						switch (__attrib0__) {
/* 000977 */ 							case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000977 */ 							case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000977 */ 							case 'rel_pos': var rel_pos = __allkwargs0__ [__attrib0__]; break;
/* 000977 */ 							case 'rel_pos_end': var rel_pos_end = __allkwargs0__ [__attrib0__]; break;
/* 000977 */ 						}
/* 000977 */ 					}
/* 000977 */ 				}
/* 000977 */ 			}
/* 000977 */ 			else {
/* 000977 */ 			}
/* 000978 */ 			return __call__ (make_node, null, LatexCharsNode, __kwargtrans__ ({parsing_state: self.parsing_state, pos: __add__ (n.pos, rel_pos), pos_end: __add__ (n.pos, rel_pos_end), chars: chars}));
/* 000978 */ 		};
/* 000984 */ 		var flush_nodes = function (nodes, pos_end) {
/* 000984 */ 			if (typeof pos_end == 'undefined' || (pos_end != null && pos_end.hasOwnProperty ("__kwargtrans__"))) {;
/* 000984 */ 				var pos_end = null;
/* 000984 */ 			};
/* 000984 */ 			if (arguments.length) {
/* 000984 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000984 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000984 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000984 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000984 */ 						switch (__attrib0__) {
/* 000984 */ 							case 'nodes': var nodes = __allkwargs0__ [__attrib0__]; break;
/* 000984 */ 							case 'pos_end': var pos_end = __allkwargs0__ [__attrib0__]; break;
/* 000984 */ 						}
/* 000984 */ 					}
/* 000984 */ 				}
/* 000984 */ 			}
/* 000984 */ 			else {
/* 000984 */ 			}
/* 000988 */ 			var newnodelist = __call__ (make_nodelist, null, nodes, __kwargtrans__ ({parsing_state: self.parsing_state, pos: (__t__ (__call__ (len, null, nodes)) ? null : pos_end), pos_end: pos_end}));
/* 000991 */ 			(function () {
/* 000991 */ 				var __accu0__ = split_node_lists;
/* 000991 */ 				return __call__ (__accu0__.append, __accu0__, newnodelist);
/* 000991 */ 			}) ();
/* 000991 */ 		};
/* 000993 */ 		var pending_nodes = [];
/* 000995 */ 		var __iterable0__ = self.nodelist;
/* 000995 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000995 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000997 */ 			if (__t__ (n === null)) {
/* 000998 */ 				if (__t__ (!__t__ ((skip_none)))) {
/* 000999 */ 					(function () {
/* 000999 */ 						var __accu0__ = pending_nodes;
/* 000999 */ 						return __call__ (__accu0__.append, __accu0__, n);
/* 000999 */ 					}) ();
/* 000999 */ 				}
/* 000999 */ 				continue;
/* 000999 */ 			}
/* 001002 */ 			if (__t__ ((function () {
/* 001002 */ 				var __accu0__ = n;
/* 001002 */ 				return __call__ (__accu0__.isNodeType, __accu0__, LatexCharsNode);
/* 001002 */ 			}) ())) {
/* 001004 */ 				var next_sep_end = 0;
/* 001006 */ 				while (__t__ (true)) {
/* 001007 */ 					var prev_sep_end = next_sep_end;
/* 001008 */ 					var __left0__ = __call__ (get_next_split, null, n.chars, prev_sep_end);
/* 001008 */ 					var next_sep_idx = __left0__ [0];
/* 001008 */ 					var next_sep_end = __left0__ [1];
/* 001010 */ 					if (__t__ (__ne__ (next_sep_idx, __neg__ (1)))) {
/* 001011 */ 						var p = __getslice__ (n.chars, prev_sep_end, next_sep_idx, 1);
/* 001012 */ 						if (__t__ (__eq__ (prev_sep_end, 0))) {
/* 001021 */ 							if (__t__ (__call__ (len, null, p))) {
/* 001022 */ 								(function () {
/* 001022 */ 									var __accu0__ = pending_nodes;
/* 001023 */ 									return __call__ (__accu0__.append, __accu0__, __call__ (chars_to_node, null, p, n, prev_sep_end, next_sep_idx));
/* 001023 */ 								}) ();
/* 001023 */ 							}
/* 001025 */ 							if (__t__ (__t__ (__call__ (len, null, pending_nodes)) || keep_empty)) {
/* 001026 */ 								__call__ (flush_nodes, null, pending_nodes, __kwargtrans__ ({pos_end: __add__ (n.pos, next_sep_idx)}));
/* 001026 */ 							}
/* 001027 */ 							var pending_nodes = [];
/* 001027 */ 							continue;
/* 001027 */ 						}
/* 001029 */ 						else {
/* 001032 */ 							var thenodes = [];
/* 001033 */ 							if (__t__ (__call__ (len, null, p))) {
/* 001035 */ 								var thenodes = [__call__ (chars_to_node, null, p, n, prev_sep_end, next_sep_idx)];
/* 001035 */ 							}
/* 001037 */ 							if (__t__ (__t__ (__call__ (len, null, thenodes)) || keep_empty)) {
/* 001038 */ 								__call__ (flush_nodes, null, thenodes, __kwargtrans__ ({pos_end: __add__ (n.pos, next_sep_idx)}));
/* 001038 */ 							}
/* 001038 */ 							continue;
/* 001038 */ 						}
/* 001038 */ 					}
/* 001041 */ 					else if (__t__ (__eq__ (prev_sep_end, 0))) {
/* 001045 */ 						(function () {
/* 001045 */ 							var __accu0__ = pending_nodes;
/* 001045 */ 							return __call__ (__accu0__.append, __accu0__, n);
/* 001045 */ 						}) ();
/* 001045 */ 						break;
/* 001045 */ 					}
/* 001047 */ 					else {
/* 001050 */ 						var p = __getslice__ (n.chars, prev_sep_end, null, 1);
/* 001051 */ 						if (__t__ (__call__ (len, null, p))) {
/* 001052 */ 							(function () {
/* 001052 */ 								var __accu0__ = pending_nodes;
/* 001053 */ 								return __call__ (__accu0__.append, __accu0__, __call__ (chars_to_node, null, p, n, prev_sep_end, __call__ (len, null, n.chars)));
/* 001053 */ 							}) ();
/* 001053 */ 						}
/* 001053 */ 						break;
/* 001053 */ 					}
/* 001053 */ 				}
/* 001053 */ 				continue;
/* 001053 */ 			}
/* 001062 */ 			(function () {
/* 001062 */ 				var __accu0__ = pending_nodes;
/* 001062 */ 				return __call__ (__accu0__.append, __accu0__, n);
/* 001062 */ 			}) ();
/* 001062 */ 		}
/* 001064 */ 		if (__t__ (__t__ (pending_nodes) || keep_empty)) {
/* 001065 */ 			__call__ (flush_nodes, null, pending_nodes, __kwargtrans__ ({pos_end: self.pos_end}));
/* 001065 */ 		}
/* 001067 */ 		return split_node_lists;
/* 001067 */ 	});},
/* 001071 */ 	get get_content_as_chars () {return __get__ (this, function (self) {
/* 001071 */ 		if (arguments.length) {
/* 001071 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001071 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001071 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001071 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001071 */ 					switch (__attrib0__) {
/* 001071 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001071 */ 					}
/* 001071 */ 				}
/* 001071 */ 			}
/* 001071 */ 		}
/* 001071 */ 		else {
/* 001071 */ 		}
/* 001086 */ 		return __call__ (_get_content_as_chars, null, self.nodelist);
/* 001086 */ 	});},
/* 001090 */ 	get __eq__ () {return __get__ (this, function (self, other) {
/* 001090 */ 		if (arguments.length) {
/* 001090 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001090 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001090 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001090 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001090 */ 					switch (__attrib0__) {
/* 001090 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001090 */ 						case 'other': var other = __allkwargs0__ [__attrib0__]; break;
/* 001090 */ 					}
/* 001090 */ 				}
/* 001090 */ 			}
/* 001090 */ 		}
/* 001090 */ 		else {
/* 001090 */ 		}
/* 001091 */ 		if (__t__ (__call__ (isinstance, null, other, list))) {
/* 001092 */ 			return __eq__ (self.nodelist, other);
/* 001092 */ 		}
/* 001093 */ 		return __t__ (__eq__ (self.nodelist, other.nodelist)) && __t__ ((__t__ (__t__ (self.pos === null) && other.pos === null) || __eq__ (self.pos, other.pos))) && (__t__ (__t__ (self.pos_end === null) && other.pos_end === null) || __eq__ (self.pos_end, other.pos_end));
/* 001093 */ 	});},
/* 001102 */ 	get to_json_object () {return __get__ (this, function (self) {
/* 001102 */ 		if (arguments.length) {
/* 001102 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001102 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001102 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001102 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001102 */ 					switch (__attrib0__) {
/* 001102 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001102 */ 					}
/* 001102 */ 				}
/* 001102 */ 			}
/* 001102 */ 		}
/* 001102 */ 		else {
/* 001102 */ 		}
/* 001103 */ 		return self.nodelist;
/* 001103 */ 	});},
/* 001105 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 001105 */ 		if (arguments.length) {
/* 001105 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001105 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001105 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001105 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001105 */ 					switch (__attrib0__) {
/* 001105 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001105 */ 					}
/* 001105 */ 				}
/* 001105 */ 			}
/* 001105 */ 		}
/* 001105 */ 		else {
/* 001105 */ 		}
/* 001106 */ 		return (function () {
/* 001106 */ 			var __accu0__ = 'LatexNodeList({nodelist!r}, pos={pos!r}, pos_end={pos_end!r})';
/* 001106 */ 			return __call__ (__accu0__.format, __accu0__, __kwargtrans__ ({nodelist: self.nodelist, pos: self.pos, pos_end: self.pos_end}));
/* 001106 */ 		}) ();
/* 001106 */ 	});}
/* 001106 */ });
/* 001106 */ Object.defineProperty (LatexNodeList, 'len', property.call (LatexNodeList, LatexNodeList._get_len));;
/* 001114 */ export var _get_content_as_chars = function (nodelist) {
/* 001114 */ 	if (arguments.length) {
/* 001114 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001114 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001114 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001114 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001114 */ 				switch (__attrib0__) {
/* 001114 */ 					case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 001114 */ 				}
/* 001114 */ 			}
/* 001114 */ 		}
/* 001114 */ 	}
/* 001114 */ 	else {
/* 001114 */ 	}
/* 001120 */ 	if (__t__ (nodelist === null)) {
/* 001121 */ 		return '';
/* 001121 */ 	}
/* 001123 */ 	var charslist = [];
/* 001125 */ 	var __iterable0__ = nodelist;
/* 001125 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001125 */ 		var n = __getitem__ (__iterable0__, __index0__);
/* 001127 */ 		if (__t__ (n === null)) {
/* 001127 */ 			continue;
/* 001127 */ 		}
/* 001130 */ 		if (__t__ ((function () {
/* 001130 */ 			var __accu0__ = n;
/* 001130 */ 			return __call__ (__accu0__.isNodeType, __accu0__, LatexCommentNode);
/* 001130 */ 		}) ())) {
/* 001130 */ 			continue;
/* 001130 */ 		}
/* 001134 */ 		if (__t__ ((function () {
/* 001134 */ 			var __accu0__ = n;
/* 001134 */ 			return __call__ (__accu0__.isNodeType, __accu0__, LatexGroupNode);
/* 001134 */ 		}) ())) {
/* 001136 */ 			(function () {
/* 001136 */ 				var __accu0__ = charslist;
/* 001136 */ 				return __call__ (__accu0__.append, __accu0__, __call__ (_get_content_as_chars, null, n.nodelist));
/* 001136 */ 			}) ();
/* 001136 */ 			continue;
/* 001136 */ 		}
/* 001139 */ 		if (__t__ ((function () {
/* 001139 */ 			var __accu0__ = n;
/* 001139 */ 			return __call__ (__accu0__.isNodeType, __accu0__, LatexCharsNode);
/* 001139 */ 		}) ())) {
/* 001140 */ 			(function () {
/* 001140 */ 				var __accu0__ = charslist;
/* 001140 */ 				return __call__ (__accu0__.append, __accu0__, n.chars);
/* 001140 */ 			}) ();
/* 001140 */ 			continue;
/* 001140 */ 		}
/* 001144 */ 		var __except0__ = __call__ (LatexWalkerParseError, null, (function () {
/* 001144 */ 			var __accu0__ = 'Expected simple characters only, got ‘{}’';
/* 001144 */ 			return __call__ (__accu0__.format, __accu0__, n.__class__.__name__);
/* 001144 */ 		}) (), __kwargtrans__ ({pos: n.pos}));
/* 001144 */ 		__except0__.__cause__ = null;
/* 001144 */ 		throw __except0__;
/* 001144 */ 	}
/* 001148 */ 	return (function () {
/* 001148 */ 		var __accu0__ = '';
/* 001148 */ 		return __call__ (__accu0__.join, __accu0__, charslist);
/* 001148 */ 	}) ();
/* 001148 */ };
/* 001155 */ export var _update_posposend_from_nodelist = function (pos, pos_end, nodelist) {
/* 001155 */ 	if (arguments.length) {
/* 001155 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001155 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001155 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001155 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001155 */ 				switch (__attrib0__) {
/* 001155 */ 					case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 001155 */ 					case 'pos_end': var pos_end = __allkwargs0__ [__attrib0__]; break;
/* 001155 */ 					case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 001155 */ 				}
/* 001155 */ 			}
/* 001155 */ 		}
/* 001155 */ 	}
/* 001155 */ 	else {
/* 001155 */ 	}
/* 001157 */ 	if (__t__ (pos === null)) {
/* 001158 */ 		var __break0__ = false;
/* 001158 */ 		var __iterable0__ = nodelist;
/* 001158 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001158 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 001159 */ 			if (__t__ (n !== null)) {
/* 001160 */ 				var pos = n.pos;
/* 001160 */ 				__break0__ = true;
/* 001160 */ 				break;
/* 001160 */ 			}
/* 001160 */ 		}
/* 001162 */ 		if (!__break0__) {
/* 001163 */ 			var pos = null;
/* 001163 */ 		}
/* 001163 */ 	}
/* 001165 */ 	if (__t__ (pos_end === null)) {
/* 001166 */ 		var __break0__ = false;
/* 001166 */ 		var __iterable0__ = __call__ (py_reversed, null, nodelist);
/* 001166 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001166 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 001167 */ 			if (__t__ (n !== null)) {
/* 001168 */ 				var pos_end = n.pos_end;
/* 001168 */ 				__break0__ = true;
/* 001168 */ 				break;
/* 001168 */ 			}
/* 001168 */ 		}
/* 001170 */ 		if (!__break0__) {
/* 001171 */ 			var pos_end = null;
/* 001171 */ 		}
/* 001171 */ 	}
/* 001173 */ 	return tuple ([pos, pos_end]);
/* 001173 */ };
/* 001181 */ export var LatexNodesVisitor =  __class__ ('LatexNodesVisitor', [object], {
/* 001181 */ 	__module__: __name__,
/* 001188 */ 	get visit () {return __get__ (this, function (self, node) {
/* 001188 */ 		if (arguments.length) {
/* 001188 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001188 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001188 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001188 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001188 */ 					switch (__attrib0__) {
/* 001188 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001188 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001188 */ 					}
/* 001188 */ 				}
/* 001188 */ 			}
/* 001188 */ 		}
/* 001188 */ 		else {
/* 001188 */ 		}
/* 001195 */ 		// pass;
/* 001195 */ 	});},
/* 001197 */ 	get visit_chars_node () {return __get__ (this, function (self, node) {
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
/* 001198 */ 		(function () {
/* 001198 */ 			var __accu0__ = self;
/* 001198 */ 			return __call__ (__accu0__.visit, __accu0__, node);
/* 001198 */ 		}) ();
/* 001198 */ 	});},
/* 001200 */ 	get visit_group_node () {return __get__ (this, function (self, node) {
/* 001200 */ 		if (arguments.length) {
/* 001200 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001200 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001200 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001200 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001200 */ 					switch (__attrib0__) {
/* 001200 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001200 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001200 */ 					}
/* 001200 */ 				}
/* 001200 */ 			}
/* 001200 */ 		}
/* 001200 */ 		else {
/* 001200 */ 		}
/* 001201 */ 		(function () {
/* 001201 */ 			var __accu0__ = self;
/* 001201 */ 			return __call__ (__accu0__.visit, __accu0__, node);
/* 001201 */ 		}) ();
/* 001201 */ 	});},
/* 001203 */ 	get visit_comment_node () {return __get__ (this, function (self, node) {
/* 001203 */ 		if (arguments.length) {
/* 001203 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001203 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001203 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001203 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001203 */ 					switch (__attrib0__) {
/* 001203 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001203 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001203 */ 					}
/* 001203 */ 				}
/* 001203 */ 			}
/* 001203 */ 		}
/* 001203 */ 		else {
/* 001203 */ 		}
/* 001204 */ 		(function () {
/* 001204 */ 			var __accu0__ = self;
/* 001204 */ 			return __call__ (__accu0__.visit, __accu0__, node);
/* 001204 */ 		}) ();
/* 001204 */ 	});},
/* 001206 */ 	get visit_macro_node () {return __get__ (this, function (self, node) {
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
/* 001209 */ 	get visit_environment_node () {return __get__ (this, function (self, node) {
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
/* 001212 */ 	get visit_specials_node () {return __get__ (this, function (self, node) {
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
/* 001215 */ 	get visit_math_node () {return __get__ (this, function (self, node) {
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
/* 001218 */ 	get visit_node_list () {return __get__ (this, function (self, nodes) {
/* 001218 */ 		if (arguments.length) {
/* 001218 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001218 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001218 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001218 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001218 */ 					switch (__attrib0__) {
/* 001218 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001218 */ 						case 'nodes': var nodes = __allkwargs0__ [__attrib0__]; break;
/* 001218 */ 					}
/* 001218 */ 				}
/* 001218 */ 			}
/* 001218 */ 		}
/* 001218 */ 		else {
/* 001218 */ 		}
/* 001219 */ 		(function () {
/* 001219 */ 			var __accu0__ = self;
/* 001219 */ 			return __call__ (__accu0__.visit, __accu0__, nodes);
/* 001219 */ 		}) ();
/* 001219 */ 	});},
/* 001221 */ 	get visit_parsed_arguments () {return __get__ (this, function (self, parsed_args) {
/* 001221 */ 		if (arguments.length) {
/* 001221 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001221 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001221 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001221 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001221 */ 					switch (__attrib0__) {
/* 001221 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001221 */ 						case 'parsed_args': var parsed_args = __allkwargs0__ [__attrib0__]; break;
/* 001221 */ 					}
/* 001221 */ 				}
/* 001221 */ 			}
/* 001221 */ 		}
/* 001221 */ 		else {
/* 001221 */ 		}
/* 001222 */ 		(function () {
/* 001222 */ 			var __accu0__ = self;
/* 001222 */ 			return __call__ (__accu0__.visit, __accu0__, parsed_args);
/* 001222 */ 		}) ();
/* 001222 */ 	});},
/* 001225 */ 	get visit_unknown_node () {return __get__ (this, function (self, node) {
/* 001225 */ 		if (arguments.length) {
/* 001225 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001225 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001225 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001225 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001225 */ 					switch (__attrib0__) {
/* 001225 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001225 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001225 */ 					}
/* 001225 */ 				}
/* 001225 */ 			}
/* 001225 */ 		}
/* 001225 */ 		else {
/* 001225 */ 		}
/* 001226 */ 		(function () {
/* 001226 */ 			var __accu0__ = self;
/* 001226 */ 			return __call__ (__accu0__.visit, __accu0__, node);
/* 001226 */ 		}) ();
/* 001226 */ 	});},
/* 001231 */ 	get start () {return __get__ (this, function (self, node) {
/* 001231 */ 		if (arguments.length) {
/* 001231 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001231 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001231 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001231 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001231 */ 					switch (__attrib0__) {
/* 001231 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001231 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001231 */ 					}
/* 001231 */ 				}
/* 001231 */ 			}
/* 001231 */ 		}
/* 001231 */ 		else {
/* 001231 */ 		}
/* 001243 */ 		(function () {
/* 001243 */ 			var __accu0__ = node;
/* 001243 */ 			return __call__ (__accu0__.accept_node_visitor, __accu0__, self);
/* 001243 */ 		}) ();
/* 001243 */ 	});}
/* 001243 */ });
/* 001254 */ export var latex_node_types = [LatexNode, LatexCharsNode, LatexGroupNode, LatexCommentNode, LatexMacroNode, LatexEnvironmentNode, LatexSpecialsNode, LatexMathNode];
/* 001265 */ export var __all__ = __add__ ((function () {
/* 001265 */ 	var __accu0__ = [];
/* 001265 */ 	var __iterable0__ = latex_node_types;
/* 001265 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001265 */ 		var nc = __getitem__ (__iterable0__, __index0__);
/* 001265 */ 		(function () {
/* 001265 */ 			var __accu1__ = __accu0__;
/* 001265 */ 			return __call__ (__accu1__.append, __accu1__, nc.__name__);
/* 001265 */ 		}) ();
/* 001265 */ 	}
/* 001265 */ 	return __accu0__;
/* 001265 */ }) (), ['LatexNodeList', 'LatexNodesVisitor']);
/* 000037 */ 
//# sourceMappingURL=pylatexenc.latexnodes.nodes.map