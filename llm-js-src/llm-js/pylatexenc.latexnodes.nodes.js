/* 000001 */ // Transcrypt'ed from Python, 2022-09-29 00:22:13
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
/* 000239 */ 	});}
/* 000239 */ });
/* 000239 */ Object.defineProperty (LatexNode, 'len', property.call (LatexNode, LatexNode._get_len));;
/* 000243 */ export var LatexCharsNode =  __class__ ('LatexCharsNode', [LatexNode], {
/* 000243 */ 	__module__: __name__,
/* 000252 */ 	get __init__ () {return __get__ (this, function (self, chars) {
/* 000252 */ 		var kwargs = dict ();
/* 000252 */ 		if (arguments.length) {
/* 000252 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000252 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000252 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000252 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000252 */ 					switch (__attrib0__) {
/* 000252 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000252 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000252 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000252 */ 					}
/* 000252 */ 				}
/* 000252 */ 				delete kwargs.__kwargtrans__;
/* 000252 */ 			}
/* 000252 */ 		}
/* 000252 */ 		else {
/* 000252 */ 		}
/* 000253 */ 		__call__ (__call__ (__super__, null, LatexCharsNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['chars'])}, kwargs)));
/* 000257 */ 		self.chars = chars;
/* 000257 */ 	});},
/* 000259 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000259 */ 		if (arguments.length) {
/* 000259 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000259 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000259 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000259 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000259 */ 					switch (__attrib0__) {
/* 000259 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000259 */ 					}
/* 000259 */ 				}
/* 000259 */ 			}
/* 000259 */ 		}
/* 000259 */ 		else {
/* 000259 */ 		}
/* 000260 */ 		return LatexCharsNode;
/* 000260 */ 	});},
/* 000262 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000262 */ 		if (arguments.length) {
/* 000262 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000262 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000262 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000262 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000262 */ 					switch (__attrib0__) {
/* 000262 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000262 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000262 */ 					}
/* 000262 */ 				}
/* 000262 */ 			}
/* 000262 */ 		}
/* 000262 */ 		else {
/* 000262 */ 		}
/* 000263 */ 		(function () {
/* 000263 */ 			var __accu0__ = visitor;
/* 000263 */ 			return __call__ (__accu0__.visit_chars_node, __accu0__, self);
/* 000263 */ 		}) ();
/* 000263 */ 	});}
/* 000263 */ });
/* 000267 */ export var LatexGroupNode =  __class__ ('LatexGroupNode', [LatexNode], {
/* 000267 */ 	__module__: __name__,
/* 000292 */ 	get __init__ () {return __get__ (this, function (self, nodelist) {
/* 000292 */ 		var kwargs = dict ();
/* 000292 */ 		if (arguments.length) {
/* 000292 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000292 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000292 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000292 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000292 */ 					switch (__attrib0__) {
/* 000292 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000292 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000292 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000292 */ 					}
/* 000292 */ 				}
/* 000292 */ 				delete kwargs.__kwargtrans__;
/* 000292 */ 			}
/* 000292 */ 		}
/* 000292 */ 		else {
/* 000292 */ 		}
/* 000293 */ 		var delimiters = (function () {
/* 000293 */ 			var __accu0__ = kwargs;
/* 000293 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'delimiters', tuple (['{', '}']));
/* 000293 */ 		}) ();
/* 000294 */ 		__call__ (__call__ (__super__, null, LatexGroupNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['nodelist', 'delimiters'])}, kwargs)));
/* 000298 */ 		self.nodelist = nodelist;
/* 000299 */ 		self.delimiters = delimiters;
/* 000299 */ 	});},
/* 000301 */ 	get nodeType () {return __get__ (this, function (self) {
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
/* 000302 */ 		return LatexGroupNode;
/* 000302 */ 	});},
/* 000304 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000304 */ 		if (arguments.length) {
/* 000304 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000304 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000304 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000304 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000304 */ 					switch (__attrib0__) {
/* 000304 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000304 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000304 */ 					}
/* 000304 */ 				}
/* 000304 */ 			}
/* 000304 */ 		}
/* 000304 */ 		else {
/* 000304 */ 		}
/* 000305 */ 		if (__t__ (self.nodelist !== null)) {
/* 000306 */ 			var __iterable0__ = self.nodelist;
/* 000306 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000306 */ 				var node = __getitem__ (__iterable0__, __index0__);
/* 000307 */ 				if (__t__ (node !== null)) {
/* 000308 */ 					(function () {
/* 000308 */ 						var __accu0__ = node;
/* 000308 */ 						return __call__ (__accu0__.accept_node_visitor, __accu0__, visitor);
/* 000308 */ 					}) ();
/* 000308 */ 				}
/* 000308 */ 			}
/* 000308 */ 		}
/* 000309 */ 		(function () {
/* 000309 */ 			var __accu0__ = visitor;
/* 000309 */ 			return __call__ (__accu0__.visit_group_node, __accu0__, self);
/* 000309 */ 		}) ();
/* 000309 */ 	});}
/* 000309 */ });
/* 000312 */ export var LatexCommentNode =  __class__ ('LatexCommentNode', [LatexNode], {
/* 000312 */ 	__module__: __name__,
/* 000326 */ 	get __init__ () {return __get__ (this, function (self, comment) {
/* 000326 */ 		var kwargs = dict ();
/* 000326 */ 		if (arguments.length) {
/* 000326 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000326 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000326 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000326 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000326 */ 					switch (__attrib0__) {
/* 000326 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000326 */ 						case 'comment': var comment = __allkwargs0__ [__attrib0__]; break;
/* 000326 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000326 */ 					}
/* 000326 */ 				}
/* 000326 */ 				delete kwargs.__kwargtrans__;
/* 000326 */ 			}
/* 000326 */ 		}
/* 000326 */ 		else {
/* 000326 */ 		}
/* 000327 */ 		var comment_post_space = (function () {
/* 000327 */ 			var __accu0__ = kwargs;
/* 000327 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'comment_post_space', '');
/* 000327 */ 		}) ();
/* 000329 */ 		__call__ (__call__ (__super__, null, LatexCommentNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['comment', 'comment_post_space'])}, kwargs)));
/* 000334 */ 		self.comment = comment;
/* 000335 */ 		self.comment_post_space = comment_post_space;
/* 000335 */ 	});},
/* 000337 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000337 */ 		if (arguments.length) {
/* 000337 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000337 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000337 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000337 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000337 */ 					switch (__attrib0__) {
/* 000337 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000337 */ 					}
/* 000337 */ 				}
/* 000337 */ 			}
/* 000337 */ 		}
/* 000337 */ 		else {
/* 000337 */ 		}
/* 000338 */ 		return LatexCommentNode;
/* 000338 */ 	});},
/* 000340 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000340 */ 		if (arguments.length) {
/* 000340 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000340 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000340 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000340 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000340 */ 					switch (__attrib0__) {
/* 000340 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000340 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000340 */ 					}
/* 000340 */ 				}
/* 000340 */ 			}
/* 000340 */ 		}
/* 000340 */ 		else {
/* 000340 */ 		}
/* 000341 */ 		(function () {
/* 000341 */ 			var __accu0__ = visitor;
/* 000341 */ 			return __call__ (__accu0__.visit_comment_node, __accu0__, self);
/* 000341 */ 		}) ();
/* 000341 */ 	});}
/* 000341 */ });
/* 000344 */ export var LatexMacroNode =  __class__ ('LatexMacroNode', [LatexNode], {
/* 000344 */ 	__module__: __name__,
/* 000408 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000408 */ 		var kwargs = dict ();
/* 000408 */ 		if (arguments.length) {
/* 000408 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000408 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000408 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000408 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000408 */ 					switch (__attrib0__) {
/* 000408 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000408 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000408 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000408 */ 					}
/* 000408 */ 				}
/* 000408 */ 				delete kwargs.__kwargtrans__;
/* 000408 */ 			}
/* 000408 */ 		}
/* 000408 */ 		else {
/* 000408 */ 		}
/* 000409 */ 		var nodeargd = (function () {
/* 000409 */ 			var __accu0__ = kwargs;
/* 000409 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'nodeargd', __call__ (ParsedArguments, null));
/* 000409 */ 		}) ();
/* 000410 */ 		var macro_post_space = (function () {
/* 000410 */ 			var __accu0__ = kwargs;
/* 000410 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'macro_post_space', '');
/* 000410 */ 		}) ();
/* 000411 */ 		var spec = (function () {
/* 000411 */ 			var __accu0__ = kwargs;
/* 000411 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'spec', null);
/* 000411 */ 		}) ();
/* 000413 */ 		__call__ (__call__ (__super__, null, LatexMacroNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['macroname', 'spec', 'nodeargd', 'macro_post_space']), _redundant_fields: tuple (['nodeoptarg', 'nodeargs'])}, kwargs)));
/* 000418 */ 		self.macroname = macroname;
/* 000419 */ 		self.spec = spec;
/* 000420 */ 		self.nodeargd = nodeargd;
/* 000421 */ 		self.macro_post_space = macro_post_space;
/* 000421 */ 	});},
/* 000423 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000423 */ 		if (arguments.length) {
/* 000423 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000423 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000423 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000423 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000423 */ 					switch (__attrib0__) {
/* 000423 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000423 */ 					}
/* 000423 */ 				}
/* 000423 */ 			}
/* 000423 */ 		}
/* 000423 */ 		else {
/* 000423 */ 		}
/* 000424 */ 		return LatexMacroNode;
/* 000424 */ 	});},
/* 000426 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000426 */ 		if (arguments.length) {
/* 000426 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000426 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000426 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000426 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000426 */ 					switch (__attrib0__) {
/* 000426 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000426 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000426 */ 					}
/* 000426 */ 				}
/* 000426 */ 			}
/* 000426 */ 		}
/* 000426 */ 		else {
/* 000426 */ 		}
/* 000427 */ 		if (__t__ (self.nodeargd !== null)) {
/* 000428 */ 			(function () {
/* 000428 */ 				var __accu0__ = self.nodeargd;
/* 000428 */ 				return __call__ (__accu0__.accept_node_visitor, __accu0__, visitor);
/* 000428 */ 			}) ();
/* 000428 */ 		}
/* 000429 */ 		(function () {
/* 000429 */ 			var __accu0__ = visitor;
/* 000429 */ 			return __call__ (__accu0__.visit_macro_node, __accu0__, self);
/* 000429 */ 		}) ();
/* 000429 */ 	});}
/* 000429 */ });
/* 000452 */ export var LatexEnvironmentNode =  __class__ ('LatexEnvironmentNode', [LatexNode], {
/* 000452 */ 	__module__: __name__,
/* 000518 */ 	get __init__ () {return __get__ (this, function (self, environmentname, nodelist) {
/* 000518 */ 		var kwargs = dict ();
/* 000518 */ 		if (arguments.length) {
/* 000518 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000518 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000518 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000518 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000518 */ 					switch (__attrib0__) {
/* 000518 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000518 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000518 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000518 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000518 */ 					}
/* 000518 */ 				}
/* 000518 */ 				delete kwargs.__kwargtrans__;
/* 000518 */ 			}
/* 000518 */ 		}
/* 000518 */ 		else {
/* 000518 */ 		}
/* 000519 */ 		var nodeargd = (function () {
/* 000519 */ 			var __accu0__ = kwargs;
/* 000519 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'nodeargd', __call__ (ParsedArguments, null));
/* 000519 */ 		}) ();
/* 000520 */ 		var spec = (function () {
/* 000520 */ 			var __accu0__ = kwargs;
/* 000520 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'spec', null);
/* 000520 */ 		}) ();
/* 000525 */ 		__call__ (__call__ (__super__, null, LatexEnvironmentNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['environmentname', 'spec', 'nodelist', 'nodeargd']), _redundant_fields: tuple (['envname', 'optargs', 'args'])}, kwargs)));
/* 000530 */ 		self.environmentname = environmentname;
/* 000531 */ 		self.spec = spec;
/* 000532 */ 		self.nodelist = nodelist;
/* 000533 */ 		self.nodeargd = nodeargd;
/* 000533 */ 	});},
/* 000540 */ 	get _get_envname () {return __get__ (this, function (self) {
/* 000540 */ 		if (arguments.length) {
/* 000540 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000540 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000540 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000540 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000540 */ 					switch (__attrib0__) {
/* 000540 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000540 */ 					}
/* 000540 */ 				}
/* 000540 */ 			}
/* 000540 */ 		}
/* 000540 */ 		else {
/* 000540 */ 		}
/* 000542 */ 		return self.environmentname;
/* 000542 */ 	});},
/* 000551 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000551 */ 		if (arguments.length) {
/* 000551 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000551 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000551 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000551 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000551 */ 					switch (__attrib0__) {
/* 000551 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000551 */ 					}
/* 000551 */ 				}
/* 000551 */ 			}
/* 000551 */ 		}
/* 000551 */ 		else {
/* 000551 */ 		}
/* 000552 */ 		return LatexEnvironmentNode;
/* 000552 */ 	});},
/* 000554 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000554 */ 		if (arguments.length) {
/* 000554 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000554 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000554 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000554 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000554 */ 					switch (__attrib0__) {
/* 000554 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000554 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000554 */ 					}
/* 000554 */ 				}
/* 000554 */ 			}
/* 000554 */ 		}
/* 000554 */ 		else {
/* 000554 */ 		}
/* 000555 */ 		if (__t__ (self.nodeargd !== null)) {
/* 000556 */ 			(function () {
/* 000556 */ 				var __accu0__ = self.nodeargd;
/* 000556 */ 				return __call__ (__accu0__.accept_node_visitor, __accu0__, visitor);
/* 000556 */ 			}) ();
/* 000556 */ 		}
/* 000557 */ 		if (__t__ (self.nodelist !== null)) {
/* 000558 */ 			var __iterable0__ = self.nodelist;
/* 000558 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000558 */ 				var node = __getitem__ (__iterable0__, __index0__);
/* 000559 */ 				if (__t__ (node !== null)) {
/* 000560 */ 					(function () {
/* 000560 */ 						var __accu0__ = node;
/* 000560 */ 						return __call__ (__accu0__.accept_node_visitor, __accu0__, visitor);
/* 000560 */ 					}) ();
/* 000560 */ 				}
/* 000560 */ 			}
/* 000560 */ 		}
/* 000561 */ 		(function () {
/* 000561 */ 			var __accu0__ = visitor;
/* 000561 */ 			return __call__ (__accu0__.visit_environment_node, __accu0__, self);
/* 000561 */ 		}) ();
/* 000561 */ 	});}
/* 000561 */ });
/* 000561 */ Object.defineProperty (LatexEnvironmentNode, 'envname', property.call (LatexEnvironmentNode, LatexEnvironmentNode._get_envname));;
/* 000565 */ export var LatexSpecialsNode =  __class__ ('LatexSpecialsNode', [LatexNode], {
/* 000565 */ 	__module__: __name__,
/* 000603 */ 	get __init__ () {return __get__ (this, function (self, specials_chars) {
/* 000603 */ 		var kwargs = dict ();
/* 000603 */ 		if (arguments.length) {
/* 000603 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000603 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000603 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000603 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000603 */ 					switch (__attrib0__) {
/* 000603 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000603 */ 						case 'specials_chars': var specials_chars = __allkwargs0__ [__attrib0__]; break;
/* 000603 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000603 */ 					}
/* 000603 */ 				}
/* 000603 */ 				delete kwargs.__kwargtrans__;
/* 000603 */ 			}
/* 000603 */ 		}
/* 000603 */ 		else {
/* 000603 */ 		}
/* 000605 */ 		var spec = (function () {
/* 000605 */ 			var __accu0__ = kwargs;
/* 000605 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'spec', null);
/* 000605 */ 		}) ();
/* 000606 */ 		var nodeargd = (function () {
/* 000606 */ 			var __accu0__ = kwargs;
/* 000606 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'nodeargd', null);
/* 000606 */ 		}) ();
/* 000608 */ 		__call__ (__call__ (__super__, null, LatexSpecialsNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['specials_chars', 'spec', 'nodeargd'])}, kwargs)));
/* 000612 */ 		self.specials_chars = specials_chars;
/* 000613 */ 		self.spec = spec;
/* 000614 */ 		self.nodeargd = nodeargd;
/* 000614 */ 	});},
/* 000616 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000616 */ 		if (arguments.length) {
/* 000616 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000616 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000616 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000616 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000616 */ 					switch (__attrib0__) {
/* 000616 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000616 */ 					}
/* 000616 */ 				}
/* 000616 */ 			}
/* 000616 */ 		}
/* 000616 */ 		else {
/* 000616 */ 		}
/* 000617 */ 		return LatexSpecialsNode;
/* 000617 */ 	});},
/* 000619 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000619 */ 		if (arguments.length) {
/* 000619 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000619 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000619 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000619 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000619 */ 					switch (__attrib0__) {
/* 000619 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000619 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000619 */ 					}
/* 000619 */ 				}
/* 000619 */ 			}
/* 000619 */ 		}
/* 000619 */ 		else {
/* 000619 */ 		}
/* 000620 */ 		if (__t__ (self.nodeargd !== null)) {
/* 000621 */ 			(function () {
/* 000621 */ 				var __accu0__ = self.nodeargd;
/* 000621 */ 				return __call__ (__accu0__.accept_node_visitor, __accu0__, visitor);
/* 000621 */ 			}) ();
/* 000621 */ 		}
/* 000622 */ 		(function () {
/* 000622 */ 			var __accu0__ = visitor;
/* 000622 */ 			return __call__ (__accu0__.visit_specials_node, __accu0__, self);
/* 000622 */ 		}) ();
/* 000622 */ 	});}
/* 000622 */ });
/* 000625 */ export var LatexMathNode =  __class__ ('LatexMathNode', [LatexNode], {
/* 000625 */ 	__module__: __name__,
/* 000651 */ 	get __init__ () {return __get__ (this, function (self, displaytype, nodelist) {
/* 000651 */ 		if (typeof nodelist == 'undefined' || (nodelist != null && nodelist.hasOwnProperty ("__kwargtrans__"))) {;
/* 000651 */ 			var nodelist = [];
/* 000651 */ 		};
/* 000651 */ 		var kwargs = dict ();
/* 000651 */ 		if (arguments.length) {
/* 000651 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000651 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000651 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000651 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000651 */ 					switch (__attrib0__) {
/* 000651 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000651 */ 						case 'displaytype': var displaytype = __allkwargs0__ [__attrib0__]; break;
/* 000651 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000651 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000651 */ 					}
/* 000651 */ 				}
/* 000651 */ 				delete kwargs.__kwargtrans__;
/* 000651 */ 			}
/* 000651 */ 		}
/* 000651 */ 		else {
/* 000651 */ 		}
/* 000652 */ 		var delimiters = (function () {
/* 000652 */ 			var __accu0__ = kwargs;
/* 000652 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'delimiters', tuple ([null, null]));
/* 000652 */ 		}) ();
/* 000654 */ 		__call__ (__call__ (__super__, null, LatexMathNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['displaytype', 'nodelist', 'delimiters'])}, kwargs)));
/* 000659 */ 		self.displaytype = displaytype;
/* 000660 */ 		self.nodelist = nodelist;
/* 000661 */ 		self.delimiters = delimiters;
/* 000661 */ 	});},
/* 000663 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000663 */ 		if (arguments.length) {
/* 000663 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000663 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000663 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000663 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000663 */ 					switch (__attrib0__) {
/* 000663 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000663 */ 					}
/* 000663 */ 				}
/* 000663 */ 			}
/* 000663 */ 		}
/* 000663 */ 		else {
/* 000663 */ 		}
/* 000664 */ 		return LatexMathNode;
/* 000664 */ 	});},
/* 000667 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000667 */ 		if (arguments.length) {
/* 000667 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000667 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000667 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000667 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000667 */ 					switch (__attrib0__) {
/* 000667 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000667 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000667 */ 					}
/* 000667 */ 				}
/* 000667 */ 			}
/* 000667 */ 		}
/* 000667 */ 		else {
/* 000667 */ 		}
/* 000668 */ 		if (__t__ (self.nodelist !== null)) {
/* 000669 */ 			var __iterable0__ = self.nodelist;
/* 000669 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000669 */ 				var node = __getitem__ (__iterable0__, __index0__);
/* 000670 */ 				if (__t__ (node !== null)) {
/* 000671 */ 					(function () {
/* 000671 */ 						var __accu0__ = node;
/* 000671 */ 						return __call__ (__accu0__.accept_node_visitor, __accu0__, visitor);
/* 000671 */ 					}) ();
/* 000671 */ 				}
/* 000671 */ 			}
/* 000671 */ 		}
/* 000672 */ 		(function () {
/* 000672 */ 			var __accu0__ = visitor;
/* 000672 */ 			return __call__ (__accu0__.visit_math_node, __accu0__, self);
/* 000672 */ 		}) ();
/* 000672 */ 	});}
/* 000672 */ });
/* 000680 */ export var LatexNodeList =  __class__ ('LatexNodeList', [object], {
/* 000680 */ 	__module__: __name__,
/* 000718 */ 	get __init__ () {return __get__ (this, function (self, nodelist) {
/* 000718 */ 		var kwargs = dict ();
/* 000718 */ 		if (arguments.length) {
/* 000718 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000718 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000718 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000718 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000718 */ 					switch (__attrib0__) {
/* 000718 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000718 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000718 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000718 */ 					}
/* 000718 */ 				}
/* 000718 */ 				delete kwargs.__kwargtrans__;
/* 000718 */ 			}
/* 000718 */ 		}
/* 000718 */ 		else {
/* 000718 */ 		}
/* 000720 */ 		if (__t__ (__call__ (isinstance, null, nodelist, LatexNodeList))) {
/* 000721 */ 			var obj = nodelist;
/* 000722 */ 			self.nodelist = obj.nodelist;
/* 000723 */ 			self.parsing_state = obj.parsing_state;
/* 000724 */ 			self.latex_walker = obj.latex_walker;
/* 000725 */ 			self.pos = obj.pos;
/* 000726 */ 			self.pos_end = obj.pos_end;
/* 000727 */ 			return ;
/* 000727 */ 		}
/* 000729 */ 		self.nodelist = nodelist;
/* 000731 */ 		if (__t__ (self.nodelist === null)) {
/* 000732 */ 			(function () {
/* 000732 */ 				var __accu0__ = logger;
/* 000732 */ 				return __call__ (__accu0__.warning, __accu0__, "You're creating a LatexNodeList with nodelist=None. That's likely to cause crashes!");
/* 000732 */ 			}) ();
/* 000732 */ 		}
/* 000735 */ 		self.parsing_state = (function () {
/* 000735 */ 			var __accu0__ = kwargs;
/* 000735 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'parsing_state', null);
/* 000735 */ 		}) ();
/* 000736 */ 		self.latex_walker = (function () {
/* 000736 */ 			var __accu0__ = kwargs;
/* 000736 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'latex_walker', null);
/* 000736 */ 		}) ();
/* 000737 */ 		self.pos = (function () {
/* 000737 */ 			var __accu0__ = kwargs;
/* 000737 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'pos', null);
/* 000737 */ 		}) ();
/* 000738 */ 		self.pos_end = (function () {
/* 000738 */ 			var __accu0__ = kwargs;
/* 000738 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'pos_end', null);
/* 000738 */ 		}) ();
/* 000740 */ 		if (__t__ (__call__ (len, null, kwargs))) {
/* 000742 */ 			var __except0__ = __call__ (ValueError, null, __add__ ('Unexpected keyword arguments to LatexNodeList: ', __call__ (repr, null, kwargs)));
/* 000742 */ 			__except0__.__cause__ = null;
/* 000742 */ 			throw __except0__;
/* 000742 */ 		}
/* 000745 */ 		var __left0__ = __call__ (_update_posposend_from_nodelist, null, self.pos, self.pos_end, self.nodelist);
/* 000745 */ 		self.pos = __left0__ [0];
/* 000745 */ 		self.pos_end = __left0__ [1];
/* 000745 */ 	});},
/* 000748 */ 	_fields: tuple (['nodelist', 'parsing_state', 'latex_walker', 'pos', 'pos_end']),
/* 000752 */ 	get _get_len () {return __get__ (this, function (self) {
/* 000752 */ 		if (arguments.length) {
/* 000752 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000752 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000752 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000752 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000752 */ 					switch (__attrib0__) {
/* 000752 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000752 */ 					}
/* 000752 */ 				}
/* 000752 */ 			}
/* 000752 */ 		}
/* 000752 */ 		else {
/* 000752 */ 		}
/* 000753 */ 		if (__t__ (__t__ (self.pos === null) || self.pos_end === null)) {
/* 000754 */ 			return null;
/* 000754 */ 		}
/* 000755 */ 		return __sub__ (self.pos_end, self.pos);
/* 000755 */ 	});},
/* 000758 */ 	get __iter__ () {return __get__ (this, function (self) {
/* 000758 */ 		if (arguments.length) {
/* 000758 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000758 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000758 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000758 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000758 */ 					switch (__attrib0__) {
/* 000758 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000758 */ 					}
/* 000758 */ 				}
/* 000758 */ 			}
/* 000758 */ 		}
/* 000758 */ 		else {
/* 000758 */ 		}
/* 000759 */ 		if (__t__ (self.nodelist === null)) {
/* 000760 */ 			return __call__ (py_iter, null, []);
/* 000760 */ 		}
/* 000761 */ 		return __call__ (py_iter, null, self.nodelist);
/* 000761 */ 	});},
/* 000761 */ 	[Symbol.iterator] () {return this.__iter__ ()},
/* 000764 */ 	get __getitem__ () {return __get__ (this, function (self, index) {
/* 000764 */ 		if (arguments.length) {
/* 000764 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000764 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000764 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000764 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000764 */ 					switch (__attrib0__) {
/* 000764 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000764 */ 						case 'index': var index = __allkwargs0__ [__attrib0__]; break;
/* 000764 */ 					}
/* 000764 */ 				}
/* 000764 */ 			}
/* 000764 */ 		}
/* 000764 */ 		else {
/* 000764 */ 		}
/* 000775 */ 		try {
/* 000776 */ 			if (__t__ (__eq__ (__call__ (len, null, index), 3))) {
/* 000777 */ 				var __left0__ = index;
/* 000777 */ 				var lower = __left0__ [0];
/* 000777 */ 				var upper = __left0__ [1];
/* 000777 */ 				var step = __left0__ [2];
/* 000778 */ 				return __getslice__ (self.nodelist, lower, upper, step);
/* 000778 */ 			}
/* 000778 */ 		}
/* 000778 */ 		catch (__except0__) {
/* 000780 */ 			// pass;
/* 000780 */ 		}
/* 000783 */ 		if (__t__ (__t__ (__call__ (isinstance, null, index, int)) && __lt__ (index, 0))) {
/* 000784 */ 			var index = __add__ (__call__ (len, null, self.nodelist), index);
/* 000784 */ 		}
/* 000786 */ 		return __getitem__ (self.nodelist, index);
/* 000786 */ 	});},
/* 000789 */ 	get __len__ () {return __get__ (this, function (self) {
/* 000789 */ 		if (arguments.length) {
/* 000789 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000789 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000789 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000789 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000789 */ 					switch (__attrib0__) {
/* 000789 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000789 */ 					}
/* 000789 */ 				}
/* 000789 */ 			}
/* 000789 */ 		}
/* 000789 */ 		else {
/* 000789 */ 		}
/* 000790 */ 		return __call__ (len, null, self.nodelist);
/* 000790 */ 	});},
/* 000793 */ 	get latex_verbatim () {return __get__ (this, function (self) {
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
/* 000800 */ 		return (function () {
/* 000800 */ 			var __accu0__ = '';
/* 000800 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000800 */ 				var __accu1__ = [];
/* 000800 */ 				var __iterable0__ = self.nodelist;
/* 000800 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000802 */ 					var n = __getitem__ (__iterable0__, __index0__);
/* 000802 */ 					if (__t__ (n !== null)) {
/* 000803 */ 						(function () {
/* 000803 */ 							var __accu2__ = __accu1__;
/* 000801 */ 							return __call__ (__accu2__.append, __accu2__, (function () {
/* 000801 */ 								var __accu3__ = n;
/* 000801 */ 								return __call__ (__accu3__.latex_verbatim, __accu3__);
/* 000801 */ 							}) ());
/* 000801 */ 						}) ();
/* 000801 */ 					}
/* 000801 */ 				}
/* 000801 */ 				return __accu1__;
/* 000801 */ 			}) ());
/* 000801 */ 		}) ();
/* 000801 */ 	});},
/* 000807 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000807 */ 		if (arguments.length) {
/* 000807 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000807 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000807 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000807 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000807 */ 					switch (__attrib0__) {
/* 000807 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000807 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000807 */ 					}
/* 000807 */ 				}
/* 000807 */ 			}
/* 000807 */ 		}
/* 000807 */ 		else {
/* 000807 */ 		}
/* 000808 */ 		if (__t__ (self.nodelist !== null)) {
/* 000809 */ 			var __iterable0__ = self.nodelist;
/* 000809 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000809 */ 				var node = __getitem__ (__iterable0__, __index0__);
/* 000810 */ 				if (__t__ (node !== null)) {
/* 000811 */ 					(function () {
/* 000811 */ 						var __accu0__ = node;
/* 000811 */ 						return __call__ (__accu0__.accept_node_visitor, __accu0__, visitor);
/* 000811 */ 					}) ();
/* 000811 */ 				}
/* 000811 */ 			}
/* 000811 */ 		}
/* 000812 */ 		(function () {
/* 000812 */ 			var __accu0__ = visitor;
/* 000812 */ 			return __call__ (__accu0__.visit_node_list, __accu0__, self);
/* 000812 */ 		}) ();
/* 000812 */ 	});},
/* 000815 */ 	get filter () {return __get__ (this, function (self, node_predicate_fn, skip_none, skip_comments, skip_whitespace_char_nodes) {
/* 000815 */ 		if (typeof node_predicate_fn == 'undefined' || (node_predicate_fn != null && node_predicate_fn.hasOwnProperty ("__kwargtrans__"))) {;
/* 000815 */ 			var node_predicate_fn = null;
/* 000815 */ 		};
/* 000815 */ 		if (typeof skip_none == 'undefined' || (skip_none != null && skip_none.hasOwnProperty ("__kwargtrans__"))) {;
/* 000815 */ 			var skip_none = true;
/* 000815 */ 		};
/* 000815 */ 		if (typeof skip_comments == 'undefined' || (skip_comments != null && skip_comments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000815 */ 			var skip_comments = false;
/* 000815 */ 		};
/* 000815 */ 		if (typeof skip_whitespace_char_nodes == 'undefined' || (skip_whitespace_char_nodes != null && skip_whitespace_char_nodes.hasOwnProperty ("__kwargtrans__"))) {;
/* 000815 */ 			var skip_whitespace_char_nodes = false;
/* 000815 */ 		};
/* 000815 */ 		if (arguments.length) {
/* 000815 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000815 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000815 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000815 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000815 */ 					switch (__attrib0__) {
/* 000815 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000815 */ 						case 'node_predicate_fn': var node_predicate_fn = __allkwargs0__ [__attrib0__]; break;
/* 000815 */ 						case 'skip_none': var skip_none = __allkwargs0__ [__attrib0__]; break;
/* 000815 */ 						case 'skip_comments': var skip_comments = __allkwargs0__ [__attrib0__]; break;
/* 000815 */ 						case 'skip_whitespace_char_nodes': var skip_whitespace_char_nodes = __allkwargs0__ [__attrib0__]; break;
/* 000815 */ 					}
/* 000815 */ 				}
/* 000815 */ 			}
/* 000815 */ 		}
/* 000815 */ 		else {
/* 000815 */ 		}
/* 000818 */ 		if (__t__ (self.latex_walker !== null)) {
/* 000819 */ 			var make_nodelist = self.latex_walker.make_nodelist;
/* 000819 */ 		}
/* 000820 */ 		else {
/* 000821 */ 			var make_nodelist = (function __lambda__ (nl) {
/* 000821 */ 				var kwargs = dict ();
/* 000821 */ 				if (arguments.length) {
/* 000821 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000821 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000821 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000821 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000821 */ 							switch (__attrib0__) {
/* 000821 */ 								case 'nl': var nl = __allkwargs0__ [__attrib0__]; break;
/* 000821 */ 								default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000821 */ 							}
/* 000821 */ 						}
/* 000821 */ 						delete kwargs.__kwargtrans__;
/* 000821 */ 					}
/* 000821 */ 				}
/* 000821 */ 				else {
/* 000821 */ 				}
/* 000821 */ 				return __call__ (LatexNodeList, null, nl, __kwargtrans__ (kwargs));
/* 000821 */ 			});
/* 000821 */ 		}
/* 000823 */ 		var filter_full_predicate_fn = function (n) {
/* 000823 */ 			if (arguments.length) {
/* 000823 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000823 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000823 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000823 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000823 */ 						switch (__attrib0__) {
/* 000823 */ 							case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000823 */ 						}
/* 000823 */ 					}
/* 000823 */ 				}
/* 000823 */ 			}
/* 000823 */ 			else {
/* 000823 */ 			}
/* 000824 */ 			if (__t__ (__t__ (skip_none) && n === null)) {
/* 000825 */ 				return false;
/* 000825 */ 			}
/* 000826 */ 			if (__t__ (__t__ (skip_comments) && (function () {
/* 000826 */ 				var __accu0__ = n;
/* 000826 */ 				return __call__ (__accu0__.isNodeType, __accu0__, LatexCommentNode);
/* 000826 */ 			}) ())) {
/* 000827 */ 				return false;
/* 000827 */ 			}
/* 000828 */ 			if (__t__ (__t__ (skip_whitespace_char_nodes) && __t__ ((function () {
/* 000828 */ 				var __accu0__ = n;
/* 000828 */ 				return __call__ (__accu0__.isNodeType, __accu0__, LatexCharsNode);
/* 000829 */ 			}) ()) && __eq__ (__call__ (len, null, (function () {
/* 000829 */ 				var __accu0__ = n.chars;
/* 000829 */ 				return __call__ (__accu0__.strip, __accu0__);
/* 000829 */ 			}) ()), 0))) {
/* 000830 */ 				return false;
/* 000830 */ 			}
/* 000831 */ 			if (__t__ (node_predicate_fn !== null)) {
/* 000832 */ 				return __call__ (node_predicate_fn, null, n);
/* 000832 */ 			}
/* 000833 */ 			return true;
/* 000833 */ 		};
/* 000835 */ 		var filtered_nodes = (function () {
/* 000835 */ 			var __accu0__ = [];
/* 000835 */ 			var __iterable0__ = self.nodelist;
/* 000835 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000837 */ 				var n = __getitem__ (__iterable0__, __index0__);
/* 000838 */ 				if (__t__ (__call__ (filter_full_predicate_fn, null, n))) {
/* 000838 */ 					(function () {
/* 000838 */ 						var __accu1__ = __accu0__;
/* 000838 */ 						return __call__ (__accu1__.append, __accu1__, n);
/* 000838 */ 					}) ();
/* 000838 */ 				}
/* 000838 */ 			}
/* 000838 */ 			return __accu0__;
/* 000838 */ 		}) ();
/* 000847 */ 		return __call__ (make_nodelist, null, filtered_nodes, __kwargtrans__ ({parsing_state: self.parsing_state, pos: (__t__ (__call__ (len, null, filtered_nodes)) ? null : self.pos_end), pos_end: (__t__ (__call__ (len, null, filtered_nodes)) ? null : self.pos_end)}));
/* 000847 */ 	});},
/* 000851 */ 	get split_at_node () {return __get__ (this, function (self, node_predicate_fn, skip_none, keep_separators, max_split) {
/* 000851 */ 		if (typeof skip_none == 'undefined' || (skip_none != null && skip_none.hasOwnProperty ("__kwargtrans__"))) {;
/* 000851 */ 			var skip_none = true;
/* 000851 */ 		};
/* 000851 */ 		if (typeof keep_separators == 'undefined' || (keep_separators != null && keep_separators.hasOwnProperty ("__kwargtrans__"))) {;
/* 000851 */ 			var keep_separators = false;
/* 000851 */ 		};
/* 000851 */ 		if (typeof max_split == 'undefined' || (max_split != null && max_split.hasOwnProperty ("__kwargtrans__"))) {;
/* 000851 */ 			var max_split = null;
/* 000851 */ 		};
/* 000851 */ 		if (arguments.length) {
/* 000851 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000851 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000851 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000851 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000851 */ 					switch (__attrib0__) {
/* 000851 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000851 */ 						case 'node_predicate_fn': var node_predicate_fn = __allkwargs0__ [__attrib0__]; break;
/* 000851 */ 						case 'skip_none': var skip_none = __allkwargs0__ [__attrib0__]; break;
/* 000851 */ 						case 'keep_separators': var keep_separators = __allkwargs0__ [__attrib0__]; break;
/* 000851 */ 						case 'max_split': var max_split = __allkwargs0__ [__attrib0__]; break;
/* 000851 */ 					}
/* 000851 */ 				}
/* 000851 */ 			}
/* 000851 */ 		}
/* 000851 */ 		else {
/* 000851 */ 		}
/* 000854 */ 		var nodelists_list = [[]];
/* 000856 */ 		if (__t__ (__t__ (max_split !== null) && __eq__ (max_split, 0))) {
/* 000857 */ 			var no_more_splits = true;
/* 000857 */ 		}
/* 000858 */ 		else {
/* 000859 */ 			var no_more_splits = false;
/* 000859 */ 		}
/* 000861 */ 		var __iterable0__ = self.nodelist;
/* 000861 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000861 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000862 */ 			if (__t__ (__t__ (skip_none) && n === null)) {
/* 000862 */ 				continue;
/* 000862 */ 			}
/* 000864 */ 			if (__t__ (__t__ (!__t__ ((no_more_splits))) && __call__ (node_predicate_fn, null, n))) {
/* 000865 */ 				if (__t__ (keep_separators)) {
/* 000866 */ 					(function () {
/* 000866 */ 						var __accu0__ = nodelists_list;
/* 000866 */ 						return __call__ (__accu0__.append, __accu0__, [n]);
/* 000866 */ 					}) ();
/* 000866 */ 				}
/* 000867 */ 				else {
/* 000868 */ 					(function () {
/* 000868 */ 						var __accu0__ = nodelists_list;
/* 000868 */ 						return __call__ (__accu0__.append, __accu0__, []);
/* 000868 */ 					}) ();
/* 000868 */ 				}
/* 000870 */ 				if (__t__ (__t__ (max_split !== null) && __ge__ (__call__ (len, null, nodelists_list), max_split))) {
/* 000871 */ 					var no_more_splits = true;
/* 000871 */ 				}
/* 000871 */ 			}
/* 000872 */ 			else {
/* 000873 */ 				(function () {
/* 000873 */ 					var __accu0__ = __getitem__ (nodelists_list, __sub__ (__call__ (len, null, nodelists_list), 1));
/* 000873 */ 					return __call__ (__accu0__.append, __accu0__, n);
/* 000873 */ 				}) ();
/* 000873 */ 			}
/* 000873 */ 		}
/* 000875 */ 		if (__t__ (self.latex_walker !== null)) {
/* 000876 */ 			var make_latex_node_list = self.latex_walker.make_nodelist;
/* 000876 */ 		}
/* 000877 */ 		else {
/* 000878 */ 			var make_latex_node_list = (function __lambda__ (nl) {
/* 000878 */ 				var kwargs = dict ();
/* 000878 */ 				if (arguments.length) {
/* 000878 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000878 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000878 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000878 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000878 */ 							switch (__attrib0__) {
/* 000878 */ 								case 'nl': var nl = __allkwargs0__ [__attrib0__]; break;
/* 000878 */ 								default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000878 */ 							}
/* 000878 */ 						}
/* 000878 */ 						delete kwargs.__kwargtrans__;
/* 000878 */ 					}
/* 000878 */ 				}
/* 000878 */ 				else {
/* 000878 */ 				}
/* 000878 */ 				return __call__ (LatexNodeList, null, nl, __kwargtrans__ (kwargs));
/* 000878 */ 			});
/* 000878 */ 		}
/* 000880 */ 		return (function () {
/* 000880 */ 			var __accu0__ = [];
/* 000880 */ 			var __iterable0__ = nodelists_list;
/* 000880 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000882 */ 				var nl = __getitem__ (__iterable0__, __index0__);
/* 000882 */ 				(function () {
/* 000882 */ 					var __accu1__ = __accu0__;
/* 000881 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (make_latex_node_list, null, nl, __kwargtrans__ ({parsing_state: self.parsing_state})));
/* 000881 */ 				}) ();
/* 000881 */ 			}
/* 000881 */ 			return __accu0__;
/* 000881 */ 		}) ();
/* 000881 */ 	});},
/* 000885 */ 	get split_at_chars () {return __get__ (this, function (self, sep_chars, max_split, keep_empty, skip_none) {
/* 000885 */ 		if (typeof max_split == 'undefined' || (max_split != null && max_split.hasOwnProperty ("__kwargtrans__"))) {;
/* 000885 */ 			var max_split = null;
/* 000885 */ 		};
/* 000885 */ 		if (typeof keep_empty == 'undefined' || (keep_empty != null && keep_empty.hasOwnProperty ("__kwargtrans__"))) {;
/* 000885 */ 			var keep_empty = false;
/* 000885 */ 		};
/* 000885 */ 		if (typeof skip_none == 'undefined' || (skip_none != null && skip_none.hasOwnProperty ("__kwargtrans__"))) {;
/* 000885 */ 			var skip_none = true;
/* 000885 */ 		};
/* 000885 */ 		if (arguments.length) {
/* 000885 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000885 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000885 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000885 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000885 */ 					switch (__attrib0__) {
/* 000885 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000885 */ 						case 'sep_chars': var sep_chars = __allkwargs0__ [__attrib0__]; break;
/* 000885 */ 						case 'max_split': var max_split = __allkwargs0__ [__attrib0__]; break;
/* 000885 */ 						case 'keep_empty': var keep_empty = __allkwargs0__ [__attrib0__]; break;
/* 000885 */ 						case 'skip_none': var skip_none = __allkwargs0__ [__attrib0__]; break;
/* 000885 */ 					}
/* 000885 */ 				}
/* 000885 */ 			}
/* 000885 */ 		}
/* 000885 */ 		else {
/* 000885 */ 		}
/* 000924 */ 		var split_node_lists = [];
/* 000926 */ 		var get_split_match_start_end = function (m, offset) {
/* 000926 */ 			if (typeof offset == 'undefined' || (offset != null && offset.hasOwnProperty ("__kwargtrans__"))) {;
/* 000926 */ 				var offset = 0;
/* 000926 */ 			};
/* 000926 */ 			if (arguments.length) {
/* 000926 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000926 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000926 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000926 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000926 */ 						switch (__attrib0__) {
/* 000926 */ 							case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000926 */ 							case 'offset': var offset = __allkwargs0__ [__attrib0__]; break;
/* 000926 */ 						}
/* 000926 */ 					}
/* 000926 */ 				}
/* 000926 */ 			}
/* 000926 */ 			else {
/* 000926 */ 			}
/* 000927 */ 			if (__t__ (m === null)) {
/* 000928 */ 				return tuple ([__neg__ (1), null]);
/* 000928 */ 			}
/* 000929 */ 			if (__t__ (__t__ (__call__ (hasattr, null, m, 'start')) && __call__ (hasattr, null, m, 'end'))) {
/* 000930 */ 				return tuple ([__add__ (offset, (function () {
/* 000930 */ 					var __accu0__ = m;
/* 000930 */ 					return __call__ (__accu0__.start, __accu0__);
/* 000930 */ 				}) ()), __add__ (offset, (function () {
/* 000930 */ 					var __accu0__ = m;
/* 000930 */ 					return __call__ (__accu0__.end, __accu0__);
/* 000930 */ 				}) ())]);
/* 000930 */ 			}
/* 000931 */ 			if (__t__ (__t__ (!__t__ ((m))) || !__t__ ((__call__ (len, null, m))))) {
/* 000932 */ 				return tuple ([__neg__ (1), null]);
/* 000932 */ 			}
/* 000933 */ 			var __left0__ = m;
/* 000933 */ 			var start = __left0__ [0];
/* 000933 */ 			var end = __left0__ [1];
/* 000934 */ 			if (__t__ (start === null)) {
/* 000935 */ 				var start = __neg__ (1);
/* 000935 */ 			}
/* 000936 */ 			else {
/* 000937 */ 				var start = __add__ (offset, start);
/* 000937 */ 			}
/* 000938 */ 			var end = __add__ (offset, end);
/* 000939 */ 			return tuple ([start, end]);
/* 000939 */ 		};
/* 000941 */ 		var get_next_split = function (chars, pos) {
/* 000941 */ 			if (arguments.length) {
/* 000941 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000941 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000941 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000941 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000941 */ 						switch (__attrib0__) {
/* 000941 */ 							case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000941 */ 							case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000941 */ 						}
/* 000941 */ 					}
/* 000941 */ 				}
/* 000941 */ 			}
/* 000941 */ 			else {
/* 000941 */ 			}
/* 000943 */ 			if (__t__ (__t__ (max_split !== null) && __ge__ (__call__ (len, null, split_node_lists), max_split))) {
/* 000944 */ 				return tuple ([__neg__ (1), __call__ (len, null, chars)]);
/* 000944 */ 			}
/* 000946 */ 			if (__t__ (__call__ (hasattr, null, sep_chars, 'search'))) {
/* 000952 */ 				var m = (function () {
/* 000952 */ 					var __accu0__ = sep_chars;
/* 000952 */ 					return __call__ (__accu0__.search, __accu0__, __getslice__ (chars, pos, null, 1));
/* 000952 */ 				}) ();
/* 000953 */ 				return __call__ (get_split_match_start_end, null, m, pos);
/* 000953 */ 			}
/* 000955 */ 			if (__t__ (__call__ (callable, null, sep_chars))) {
/* 000956 */ 				var m = __call__ (sep_chars, null, chars, pos);
/* 000957 */ 				return __call__ (get_split_match_start_end, null, m);
/* 000957 */ 			}
/* 000959 */ 			var idx = (function () {
/* 000959 */ 				var __accu0__ = chars;
/* 000959 */ 				return __call__ (__accu0__.find, __accu0__, sep_chars, pos);
/* 000959 */ 			}) ();
/* 000960 */ 			if (__t__ (__t__ (idx === null) || __eq__ (idx, __neg__ (1)))) {
/* 000961 */ 				return tuple ([__neg__ (1), null]);
/* 000961 */ 			}
/* 000962 */ 			return tuple ([idx, __add__ (idx, __call__ (len, null, sep_chars))]);
/* 000962 */ 		};
/* 000965 */ 		var lw = self.latex_walker;
/* 000966 */ 		if (__t__ (lw !== null)) {
/* 000967 */ 			var make_node = lw.make_node;
/* 000968 */ 			var make_nodelist = lw.make_nodelist;
/* 000968 */ 		}
/* 000969 */ 		else {
/* 000970 */ 			var make_node = (function __lambda__ (cls) {
/* 000970 */ 				var kwargs = dict ();
/* 000970 */ 				if (arguments.length) {
/* 000970 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000970 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000970 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000970 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000970 */ 							switch (__attrib0__) {
/* 000970 */ 								case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000970 */ 								default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000970 */ 							}
/* 000970 */ 						}
/* 000970 */ 						delete kwargs.__kwargtrans__;
/* 000970 */ 					}
/* 000970 */ 				}
/* 000970 */ 				else {
/* 000970 */ 				}
/* 000970 */ 				return __call__ (cls, null, __kwargtrans__ (kwargs));
/* 000970 */ 			});
/* 000971 */ 			var make_nodelist = (function __lambda__ (nl) {
/* 000971 */ 				var kwargs = dict ();
/* 000971 */ 				if (arguments.length) {
/* 000971 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000971 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000971 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000971 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000971 */ 							switch (__attrib0__) {
/* 000971 */ 								case 'nl': var nl = __allkwargs0__ [__attrib0__]; break;
/* 000971 */ 								default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000971 */ 							}
/* 000971 */ 						}
/* 000971 */ 						delete kwargs.__kwargtrans__;
/* 000971 */ 					}
/* 000971 */ 				}
/* 000971 */ 				else {
/* 000971 */ 				}
/* 000971 */ 				return __call__ (LatexNodeList, null, nl, __kwargtrans__ (kwargs));
/* 000971 */ 			});
/* 000971 */ 		}
/* 000973 */ 		var chars_to_node = function (chars, n, rel_pos, rel_pos_end) {
/* 000973 */ 			if (arguments.length) {
/* 000973 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000973 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000973 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000973 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000973 */ 						switch (__attrib0__) {
/* 000973 */ 							case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000973 */ 							case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000973 */ 							case 'rel_pos': var rel_pos = __allkwargs0__ [__attrib0__]; break;
/* 000973 */ 							case 'rel_pos_end': var rel_pos_end = __allkwargs0__ [__attrib0__]; break;
/* 000973 */ 						}
/* 000973 */ 					}
/* 000973 */ 				}
/* 000973 */ 			}
/* 000973 */ 			else {
/* 000973 */ 			}
/* 000974 */ 			return __call__ (make_node, null, LatexCharsNode, __kwargtrans__ ({parsing_state: self.parsing_state, pos: __add__ (n.pos, rel_pos), pos_end: __add__ (n.pos, rel_pos_end), chars: chars}));
/* 000974 */ 		};
/* 000980 */ 		var flush_nodes = function (nodes, pos_end) {
/* 000980 */ 			if (typeof pos_end == 'undefined' || (pos_end != null && pos_end.hasOwnProperty ("__kwargtrans__"))) {;
/* 000980 */ 				var pos_end = null;
/* 000980 */ 			};
/* 000980 */ 			if (arguments.length) {
/* 000980 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000980 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000980 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000980 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000980 */ 						switch (__attrib0__) {
/* 000980 */ 							case 'nodes': var nodes = __allkwargs0__ [__attrib0__]; break;
/* 000980 */ 							case 'pos_end': var pos_end = __allkwargs0__ [__attrib0__]; break;
/* 000980 */ 						}
/* 000980 */ 					}
/* 000980 */ 				}
/* 000980 */ 			}
/* 000980 */ 			else {
/* 000980 */ 			}
/* 000984 */ 			var newnodelist = __call__ (make_nodelist, null, nodes, __kwargtrans__ ({parsing_state: self.parsing_state, pos: (__t__ (__call__ (len, null, nodes)) ? null : pos_end), pos_end: pos_end}));
/* 000987 */ 			(function () {
/* 000987 */ 				var __accu0__ = split_node_lists;
/* 000987 */ 				return __call__ (__accu0__.append, __accu0__, newnodelist);
/* 000987 */ 			}) ();
/* 000987 */ 		};
/* 000989 */ 		var pending_nodes = [];
/* 000991 */ 		var __iterable0__ = self.nodelist;
/* 000991 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000991 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000993 */ 			if (__t__ (n === null)) {
/* 000994 */ 				if (__t__ (!__t__ ((skip_none)))) {
/* 000995 */ 					(function () {
/* 000995 */ 						var __accu0__ = pending_nodes;
/* 000995 */ 						return __call__ (__accu0__.append, __accu0__, n);
/* 000995 */ 					}) ();
/* 000995 */ 				}
/* 000995 */ 				continue;
/* 000995 */ 			}
/* 000998 */ 			if (__t__ ((function () {
/* 000998 */ 				var __accu0__ = n;
/* 000998 */ 				return __call__ (__accu0__.isNodeType, __accu0__, LatexCharsNode);
/* 000998 */ 			}) ())) {
/* 001000 */ 				var next_sep_end = 0;
/* 001002 */ 				while (__t__ (true)) {
/* 001003 */ 					var prev_sep_end = next_sep_end;
/* 001004 */ 					var __left0__ = __call__ (get_next_split, null, n.chars, prev_sep_end);
/* 001004 */ 					var next_sep_idx = __left0__ [0];
/* 001004 */ 					var next_sep_end = __left0__ [1];
/* 001006 */ 					if (__t__ (__ne__ (next_sep_idx, __neg__ (1)))) {
/* 001007 */ 						var p = __getslice__ (n.chars, prev_sep_end, next_sep_idx, 1);
/* 001008 */ 						if (__t__ (__eq__ (prev_sep_end, 0))) {
/* 001017 */ 							if (__t__ (__call__ (len, null, p))) {
/* 001018 */ 								(function () {
/* 001018 */ 									var __accu0__ = pending_nodes;
/* 001019 */ 									return __call__ (__accu0__.append, __accu0__, __call__ (chars_to_node, null, p, n, prev_sep_end, next_sep_idx));
/* 001019 */ 								}) ();
/* 001019 */ 							}
/* 001021 */ 							if (__t__ (__t__ (__call__ (len, null, pending_nodes)) || keep_empty)) {
/* 001022 */ 								__call__ (flush_nodes, null, pending_nodes, __kwargtrans__ ({pos_end: __add__ (n.pos, next_sep_idx)}));
/* 001022 */ 							}
/* 001023 */ 							var pending_nodes = [];
/* 001023 */ 							continue;
/* 001023 */ 						}
/* 001025 */ 						else {
/* 001028 */ 							var thenodes = [];
/* 001029 */ 							if (__t__ (__call__ (len, null, p))) {
/* 001031 */ 								var thenodes = [__call__ (chars_to_node, null, p, n, prev_sep_end, next_sep_idx)];
/* 001031 */ 							}
/* 001033 */ 							if (__t__ (__t__ (__call__ (len, null, thenodes)) || keep_empty)) {
/* 001034 */ 								__call__ (flush_nodes, null, thenodes, __kwargtrans__ ({pos_end: __add__ (n.pos, next_sep_idx)}));
/* 001034 */ 							}
/* 001034 */ 							continue;
/* 001034 */ 						}
/* 001034 */ 					}
/* 001036 */ 					else {
/* 001037 */ 						if (__t__ (__eq__ (prev_sep_end, 0))) {
/* 001041 */ 							(function () {
/* 001041 */ 								var __accu0__ = pending_nodes;
/* 001041 */ 								return __call__ (__accu0__.append, __accu0__, n);
/* 001041 */ 							}) ();
/* 001041 */ 							break;
/* 001041 */ 						}
/* 001043 */ 						else {
/* 001046 */ 							var p = __getslice__ (n.chars, prev_sep_end, null, 1);
/* 001047 */ 							if (__t__ (__call__ (len, null, p))) {
/* 001048 */ 								(function () {
/* 001048 */ 									var __accu0__ = pending_nodes;
/* 001049 */ 									return __call__ (__accu0__.append, __accu0__, __call__ (chars_to_node, null, p, n, prev_sep_end, __call__ (len, null, n.chars)));
/* 001049 */ 								}) ();
/* 001049 */ 							}
/* 001049 */ 							break;
/* 001049 */ 						}
/* 001049 */ 						break;
/* 001049 */ 					}
/* 001049 */ 				}
/* 001049 */ 				continue;
/* 001049 */ 			}
/* 001058 */ 			(function () {
/* 001058 */ 				var __accu0__ = pending_nodes;
/* 001058 */ 				return __call__ (__accu0__.append, __accu0__, n);
/* 001058 */ 			}) ();
/* 001058 */ 		}
/* 001060 */ 		if (__t__ (__t__ (pending_nodes) || keep_empty)) {
/* 001061 */ 			__call__ (flush_nodes, null, pending_nodes, __kwargtrans__ ({pos_end: self.pos_end}));
/* 001061 */ 		}
/* 001063 */ 		return split_node_lists;
/* 001063 */ 	});},
/* 001067 */ 	get get_content_as_chars () {return __get__ (this, function (self) {
/* 001067 */ 		if (arguments.length) {
/* 001067 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001067 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001067 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001067 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001067 */ 					switch (__attrib0__) {
/* 001067 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001067 */ 					}
/* 001067 */ 				}
/* 001067 */ 			}
/* 001067 */ 		}
/* 001067 */ 		else {
/* 001067 */ 		}
/* 001082 */ 		return __call__ (_get_content_as_chars, null, self.nodelist);
/* 001082 */ 	});},
/* 001086 */ 	get __eq__ () {return __get__ (this, function (self, other) {
/* 001086 */ 		if (arguments.length) {
/* 001086 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001086 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001086 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001086 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001086 */ 					switch (__attrib0__) {
/* 001086 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001086 */ 						case 'other': var other = __allkwargs0__ [__attrib0__]; break;
/* 001086 */ 					}
/* 001086 */ 				}
/* 001086 */ 			}
/* 001086 */ 		}
/* 001086 */ 		else {
/* 001086 */ 		}
/* 001087 */ 		if (__t__ (__call__ (isinstance, null, other, list))) {
/* 001088 */ 			return __eq__ (self.nodelist, other);
/* 001088 */ 		}
/* 001089 */ 		return __t__ (__eq__ (self.nodelist, other.nodelist)) && __t__ ((__t__ (__t__ (self.pos === null) && other.pos === null) || __eq__ (self.pos, other.pos))) && (__t__ (__t__ (self.pos_end === null) && other.pos_end === null) || __eq__ (self.pos_end, other.pos_end));
/* 001089 */ 	});},
/* 001098 */ 	get to_json_object () {return __get__ (this, function (self) {
/* 001098 */ 		if (arguments.length) {
/* 001098 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001098 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001098 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001098 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001098 */ 					switch (__attrib0__) {
/* 001098 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001098 */ 					}
/* 001098 */ 				}
/* 001098 */ 			}
/* 001098 */ 		}
/* 001098 */ 		else {
/* 001098 */ 		}
/* 001099 */ 		return self.nodelist;
/* 001099 */ 	});},
/* 001101 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 001101 */ 		if (arguments.length) {
/* 001101 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001101 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001101 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001101 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001101 */ 					switch (__attrib0__) {
/* 001101 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001101 */ 					}
/* 001101 */ 				}
/* 001101 */ 			}
/* 001101 */ 		}
/* 001101 */ 		else {
/* 001101 */ 		}
/* 001102 */ 		return (function () {
/* 001102 */ 			var __accu0__ = 'LatexNodeList({nodelist!r}, pos={pos!r}, pos_end={pos_end!r})';
/* 001102 */ 			return __call__ (__accu0__.format, __accu0__, __kwargtrans__ ({nodelist: self.nodelist, pos: self.pos, pos_end: self.pos_end}));
/* 001102 */ 		}) ();
/* 001102 */ 	});}
/* 001102 */ });
/* 001102 */ Object.defineProperty (LatexNodeList, 'len', property.call (LatexNodeList, LatexNodeList._get_len));;
/* 001110 */ export var _get_content_as_chars = function (nodelist) {
/* 001110 */ 	if (arguments.length) {
/* 001110 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001110 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001110 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001110 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001110 */ 				switch (__attrib0__) {
/* 001110 */ 					case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 001110 */ 				}
/* 001110 */ 			}
/* 001110 */ 		}
/* 001110 */ 	}
/* 001110 */ 	else {
/* 001110 */ 	}
/* 001116 */ 	if (__t__ (nodelist === null)) {
/* 001117 */ 		return '';
/* 001117 */ 	}
/* 001119 */ 	var charslist = [];
/* 001121 */ 	var __iterable0__ = nodelist;
/* 001121 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001121 */ 		var n = __getitem__ (__iterable0__, __index0__);
/* 001123 */ 		if (__t__ (n === null)) {
/* 001123 */ 			continue;
/* 001123 */ 		}
/* 001126 */ 		if (__t__ ((function () {
/* 001126 */ 			var __accu0__ = n;
/* 001126 */ 			return __call__ (__accu0__.isNodeType, __accu0__, LatexCommentNode);
/* 001126 */ 		}) ())) {
/* 001126 */ 			continue;
/* 001126 */ 		}
/* 001130 */ 		if (__t__ ((function () {
/* 001130 */ 			var __accu0__ = n;
/* 001130 */ 			return __call__ (__accu0__.isNodeType, __accu0__, LatexGroupNode);
/* 001130 */ 		}) ())) {
/* 001132 */ 			(function () {
/* 001132 */ 				var __accu0__ = charslist;
/* 001132 */ 				return __call__ (__accu0__.append, __accu0__, __call__ (_get_content_as_chars, null, n.nodelist));
/* 001132 */ 			}) ();
/* 001132 */ 			continue;
/* 001132 */ 		}
/* 001135 */ 		if (__t__ ((function () {
/* 001135 */ 			var __accu0__ = n;
/* 001135 */ 			return __call__ (__accu0__.isNodeType, __accu0__, LatexCharsNode);
/* 001135 */ 		}) ())) {
/* 001136 */ 			(function () {
/* 001136 */ 				var __accu0__ = charslist;
/* 001136 */ 				return __call__ (__accu0__.append, __accu0__, n.chars);
/* 001136 */ 			}) ();
/* 001136 */ 			continue;
/* 001136 */ 		}
/* 001140 */ 		var __except0__ = __call__ (LatexWalkerParseError, null, (function () {
/* 001140 */ 			var __accu0__ = 'Expected simple characters only, got ‘{}’';
/* 001140 */ 			return __call__ (__accu0__.format, __accu0__, n.__class__.__name__);
/* 001140 */ 		}) (), __kwargtrans__ ({pos: n.pos}));
/* 001140 */ 		__except0__.__cause__ = null;
/* 001140 */ 		throw __except0__;
/* 001140 */ 	}
/* 001144 */ 	return (function () {
/* 001144 */ 		var __accu0__ = '';
/* 001144 */ 		return __call__ (__accu0__.join, __accu0__, charslist);
/* 001144 */ 	}) ();
/* 001144 */ };
/* 001151 */ export var _update_posposend_from_nodelist = function (pos, pos_end, nodelist) {
/* 001151 */ 	if (arguments.length) {
/* 001151 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001151 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001151 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001151 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001151 */ 				switch (__attrib0__) {
/* 001151 */ 					case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 001151 */ 					case 'pos_end': var pos_end = __allkwargs0__ [__attrib0__]; break;
/* 001151 */ 					case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 001151 */ 				}
/* 001151 */ 			}
/* 001151 */ 		}
/* 001151 */ 	}
/* 001151 */ 	else {
/* 001151 */ 	}
/* 001153 */ 	if (__t__ (pos === null)) {
/* 001154 */ 		var __break0__ = false;
/* 001154 */ 		var __iterable0__ = nodelist;
/* 001154 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001154 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 001155 */ 			if (__t__ (n !== null)) {
/* 001156 */ 				var pos = n.pos;
/* 001156 */ 				__break0__ = true;
/* 001156 */ 				break;
/* 001156 */ 			}
/* 001156 */ 		}
/* 001158 */ 		if (!__break0__) {
/* 001159 */ 			var pos = null;
/* 001159 */ 		}
/* 001159 */ 	}
/* 001161 */ 	if (__t__ (pos_end === null)) {
/* 001162 */ 		var __break0__ = false;
/* 001162 */ 		var __iterable0__ = __call__ (py_reversed, null, nodelist);
/* 001162 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001162 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 001163 */ 			if (__t__ (n !== null)) {
/* 001164 */ 				var pos_end = n.pos_end;
/* 001164 */ 				__break0__ = true;
/* 001164 */ 				break;
/* 001164 */ 			}
/* 001164 */ 		}
/* 001166 */ 		if (!__break0__) {
/* 001167 */ 			var pos_end = null;
/* 001167 */ 		}
/* 001167 */ 	}
/* 001169 */ 	return tuple ([pos, pos_end]);
/* 001169 */ };
/* 001177 */ export var LatexNodesVisitor =  __class__ ('LatexNodesVisitor', [object], {
/* 001177 */ 	__module__: __name__,
/* 001184 */ 	get visit () {return __get__ (this, function (self, node) {
/* 001184 */ 		if (arguments.length) {
/* 001184 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001184 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001184 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001184 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001184 */ 					switch (__attrib0__) {
/* 001184 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001184 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001184 */ 					}
/* 001184 */ 				}
/* 001184 */ 			}
/* 001184 */ 		}
/* 001184 */ 		else {
/* 001184 */ 		}
/* 001191 */ 		// pass;
/* 001191 */ 	});},
/* 001193 */ 	get visit_chars_node () {return __get__ (this, function (self, node) {
/* 001193 */ 		if (arguments.length) {
/* 001193 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001193 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001193 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001193 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001193 */ 					switch (__attrib0__) {
/* 001193 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001193 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001193 */ 					}
/* 001193 */ 				}
/* 001193 */ 			}
/* 001193 */ 		}
/* 001193 */ 		else {
/* 001193 */ 		}
/* 001194 */ 		(function () {
/* 001194 */ 			var __accu0__ = self;
/* 001194 */ 			return __call__ (__accu0__.visit, __accu0__, node);
/* 001194 */ 		}) ();
/* 001194 */ 	});},
/* 001196 */ 	get visit_group_node () {return __get__ (this, function (self, node) {
/* 001196 */ 		if (arguments.length) {
/* 001196 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001196 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001196 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001196 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001196 */ 					switch (__attrib0__) {
/* 001196 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001196 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001196 */ 					}
/* 001196 */ 				}
/* 001196 */ 			}
/* 001196 */ 		}
/* 001196 */ 		else {
/* 001196 */ 		}
/* 001197 */ 		(function () {
/* 001197 */ 			var __accu0__ = self;
/* 001197 */ 			return __call__ (__accu0__.visit, __accu0__, node);
/* 001197 */ 		}) ();
/* 001197 */ 	});},
/* 001199 */ 	get visit_comment_node () {return __get__ (this, function (self, node) {
/* 001199 */ 		if (arguments.length) {
/* 001199 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001199 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001199 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001199 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001199 */ 					switch (__attrib0__) {
/* 001199 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001199 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001199 */ 					}
/* 001199 */ 				}
/* 001199 */ 			}
/* 001199 */ 		}
/* 001199 */ 		else {
/* 001199 */ 		}
/* 001200 */ 		(function () {
/* 001200 */ 			var __accu0__ = self;
/* 001200 */ 			return __call__ (__accu0__.visit, __accu0__, node);
/* 001200 */ 		}) ();
/* 001200 */ 	});},
/* 001202 */ 	get visit_macro_node () {return __get__ (this, function (self, node) {
/* 001202 */ 		if (arguments.length) {
/* 001202 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001202 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001202 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001202 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001202 */ 					switch (__attrib0__) {
/* 001202 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001202 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001202 */ 					}
/* 001202 */ 				}
/* 001202 */ 			}
/* 001202 */ 		}
/* 001202 */ 		else {
/* 001202 */ 		}
/* 001203 */ 		(function () {
/* 001203 */ 			var __accu0__ = self;
/* 001203 */ 			return __call__ (__accu0__.visit, __accu0__, node);
/* 001203 */ 		}) ();
/* 001203 */ 	});},
/* 001205 */ 	get visit_environment_node () {return __get__ (this, function (self, node) {
/* 001205 */ 		if (arguments.length) {
/* 001205 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001205 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001205 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001205 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001205 */ 					switch (__attrib0__) {
/* 001205 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001205 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001205 */ 					}
/* 001205 */ 				}
/* 001205 */ 			}
/* 001205 */ 		}
/* 001205 */ 		else {
/* 001205 */ 		}
/* 001206 */ 		(function () {
/* 001206 */ 			var __accu0__ = self;
/* 001206 */ 			return __call__ (__accu0__.visit, __accu0__, node);
/* 001206 */ 		}) ();
/* 001206 */ 	});},
/* 001208 */ 	get visit_specials_node () {return __get__ (this, function (self, node) {
/* 001208 */ 		if (arguments.length) {
/* 001208 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001208 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001208 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001208 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001208 */ 					switch (__attrib0__) {
/* 001208 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001208 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001208 */ 					}
/* 001208 */ 				}
/* 001208 */ 			}
/* 001208 */ 		}
/* 001208 */ 		else {
/* 001208 */ 		}
/* 001209 */ 		(function () {
/* 001209 */ 			var __accu0__ = self;
/* 001209 */ 			return __call__ (__accu0__.visit, __accu0__, node);
/* 001209 */ 		}) ();
/* 001209 */ 	});},
/* 001211 */ 	get visit_math_node () {return __get__ (this, function (self, node) {
/* 001211 */ 		if (arguments.length) {
/* 001211 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001211 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001211 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001211 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001211 */ 					switch (__attrib0__) {
/* 001211 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001211 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001211 */ 					}
/* 001211 */ 				}
/* 001211 */ 			}
/* 001211 */ 		}
/* 001211 */ 		else {
/* 001211 */ 		}
/* 001212 */ 		(function () {
/* 001212 */ 			var __accu0__ = self;
/* 001212 */ 			return __call__ (__accu0__.visit, __accu0__, node);
/* 001212 */ 		}) ();
/* 001212 */ 	});},
/* 001214 */ 	get visit_node_list () {return __get__ (this, function (self, nodes) {
/* 001214 */ 		if (arguments.length) {
/* 001214 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001214 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001214 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001214 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001214 */ 					switch (__attrib0__) {
/* 001214 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001214 */ 						case 'nodes': var nodes = __allkwargs0__ [__attrib0__]; break;
/* 001214 */ 					}
/* 001214 */ 				}
/* 001214 */ 			}
/* 001214 */ 		}
/* 001214 */ 		else {
/* 001214 */ 		}
/* 001215 */ 		(function () {
/* 001215 */ 			var __accu0__ = self;
/* 001215 */ 			return __call__ (__accu0__.visit, __accu0__, nodes);
/* 001215 */ 		}) ();
/* 001215 */ 	});},
/* 001217 */ 	get visit_parsed_arguments () {return __get__ (this, function (self, parsed_args) {
/* 001217 */ 		if (arguments.length) {
/* 001217 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001217 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001217 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001217 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001217 */ 					switch (__attrib0__) {
/* 001217 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001217 */ 						case 'parsed_args': var parsed_args = __allkwargs0__ [__attrib0__]; break;
/* 001217 */ 					}
/* 001217 */ 				}
/* 001217 */ 			}
/* 001217 */ 		}
/* 001217 */ 		else {
/* 001217 */ 		}
/* 001218 */ 		(function () {
/* 001218 */ 			var __accu0__ = self;
/* 001218 */ 			return __call__ (__accu0__.visit, __accu0__, parsed_args);
/* 001218 */ 		}) ();
/* 001218 */ 	});},
/* 001221 */ 	get visit_unknown_node () {return __get__ (this, function (self, node) {
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
/* 001227 */ 	get start () {return __get__ (this, function (self, node) {
/* 001227 */ 		if (arguments.length) {
/* 001227 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001227 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001227 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001227 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001227 */ 					switch (__attrib0__) {
/* 001227 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001227 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001227 */ 					}
/* 001227 */ 				}
/* 001227 */ 			}
/* 001227 */ 		}
/* 001227 */ 		else {
/* 001227 */ 		}
/* 001239 */ 		(function () {
/* 001239 */ 			var __accu0__ = node;
/* 001239 */ 			return __call__ (__accu0__.accept_node_visitor, __accu0__, self);
/* 001239 */ 		}) ();
/* 001239 */ 	});}
/* 001239 */ });
/* 001250 */ export var latex_node_types = [LatexNode, LatexCharsNode, LatexGroupNode, LatexCommentNode, LatexMacroNode, LatexEnvironmentNode, LatexSpecialsNode, LatexMathNode];
/* 001261 */ export var __all__ = __add__ ((function () {
/* 001261 */ 	var __accu0__ = [];
/* 001261 */ 	var __iterable0__ = latex_node_types;
/* 001261 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001261 */ 		var nc = __getitem__ (__iterable0__, __index0__);
/* 001261 */ 		(function () {
/* 001261 */ 			var __accu1__ = __accu0__;
/* 001261 */ 			return __call__ (__accu1__.append, __accu1__, nc.__name__);
/* 001261 */ 		}) ();
/* 001261 */ 	}
/* 001261 */ 	return __accu0__;
/* 001261 */ }) (), ['LatexNodeList', 'LatexNodesVisitor']);
/* 000037 */ 
//# sourceMappingURL=pylatexenc.latexnodes.nodes.map