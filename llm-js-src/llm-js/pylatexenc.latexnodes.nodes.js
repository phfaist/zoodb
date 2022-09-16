/* 000001 */ // Transcrypt'ed from Python, 2022-09-16 23:46:22
/* 000037 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000038 */ import {ParsedArguments} from './pylatexenc.latexnodes._parsedargs.js';
/* 000037 */ import {LatexWalkerParseError} from './pylatexenc.latexnodes._exctypes.js';
/* 000037 */ export {ParsedArguments, LatexWalkerParseError};
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
/* 000740 */ 		if (__t__ (kwargs)) {
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
/* 000763 */ 	get __getitem__ () {return __get__ (this, function (self, index) {
/* 000763 */ 		if (arguments.length) {
/* 000763 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000763 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000763 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000763 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000763 */ 					switch (__attrib0__) {
/* 000763 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000763 */ 						case 'index': var index = __allkwargs0__ [__attrib0__]; break;
/* 000763 */ 					}
/* 000763 */ 				}
/* 000763 */ 			}
/* 000763 */ 		}
/* 000763 */ 		else {
/* 000763 */ 		}
/* 000765 */ 		if (__t__ (__t__ (__call__ (isinstance, null, index, int)) && __lt__ (index, 0))) {
/* 000768 */ 			var index = __add__ (__call__ (len, null, self.nodelist), index);
/* 000768 */ 		}
/* 000769 */ 		return __getitem__ (self.nodelist, index);
/* 000769 */ 	});},
/* 000771 */ 	get __len__ () {return __get__ (this, function (self) {
/* 000771 */ 		if (arguments.length) {
/* 000771 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000771 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000771 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000771 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000771 */ 					switch (__attrib0__) {
/* 000771 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000771 */ 					}
/* 000771 */ 				}
/* 000771 */ 			}
/* 000771 */ 		}
/* 000771 */ 		else {
/* 000771 */ 		}
/* 000772 */ 		return __call__ (len, null, self.nodelist);
/* 000772 */ 	});},
/* 000775 */ 	get latex_verbatim () {return __get__ (this, function (self) {
/* 000775 */ 		if (arguments.length) {
/* 000775 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000775 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000775 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000775 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000775 */ 					switch (__attrib0__) {
/* 000775 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000775 */ 					}
/* 000775 */ 				}
/* 000775 */ 			}
/* 000775 */ 		}
/* 000775 */ 		else {
/* 000775 */ 		}
/* 000782 */ 		return (function () {
/* 000782 */ 			var __accu0__ = '';
/* 000782 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000782 */ 				var __accu1__ = [];
/* 000782 */ 				var __iterable0__ = self.nodelist;
/* 000782 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000784 */ 					var n = __getitem__ (__iterable0__, __index0__);
/* 000784 */ 					if (__t__ (n !== null)) {
/* 000785 */ 						(function () {
/* 000785 */ 							var __accu2__ = __accu1__;
/* 000783 */ 							return __call__ (__accu2__.append, __accu2__, (function () {
/* 000783 */ 								var __accu3__ = n;
/* 000783 */ 								return __call__ (__accu3__.latex_verbatim, __accu3__);
/* 000783 */ 							}) ());
/* 000783 */ 						}) ();
/* 000783 */ 					}
/* 000783 */ 				}
/* 000783 */ 				return __accu1__;
/* 000783 */ 			}) ());
/* 000783 */ 		}) ();
/* 000783 */ 	});},
/* 000789 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000789 */ 		if (arguments.length) {
/* 000789 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000789 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000789 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000789 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000789 */ 					switch (__attrib0__) {
/* 000789 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000789 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000789 */ 					}
/* 000789 */ 				}
/* 000789 */ 			}
/* 000789 */ 		}
/* 000789 */ 		else {
/* 000789 */ 		}
/* 000790 */ 		if (__t__ (self.nodelist !== null)) {
/* 000791 */ 			var __iterable0__ = self.nodelist;
/* 000791 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000791 */ 				var node = __getitem__ (__iterable0__, __index0__);
/* 000792 */ 				if (__t__ (node !== null)) {
/* 000793 */ 					(function () {
/* 000793 */ 						var __accu0__ = node;
/* 000793 */ 						return __call__ (__accu0__.accept_node_visitor, __accu0__, visitor);
/* 000793 */ 					}) ();
/* 000793 */ 				}
/* 000793 */ 			}
/* 000793 */ 		}
/* 000794 */ 		(function () {
/* 000794 */ 			var __accu0__ = visitor;
/* 000794 */ 			return __call__ (__accu0__.visit_node_list, __accu0__, self);
/* 000794 */ 		}) ();
/* 000794 */ 	});},
/* 000797 */ 	get split_at_node () {return __get__ (this, function (self, node_predicate_fn, skip_none, keep_separators, max_split) {
/* 000797 */ 		if (typeof skip_none == 'undefined' || (skip_none != null && skip_none.hasOwnProperty ("__kwargtrans__"))) {;
/* 000797 */ 			var skip_none = true;
/* 000797 */ 		};
/* 000797 */ 		if (typeof keep_separators == 'undefined' || (keep_separators != null && keep_separators.hasOwnProperty ("__kwargtrans__"))) {;
/* 000797 */ 			var keep_separators = false;
/* 000797 */ 		};
/* 000797 */ 		if (typeof max_split == 'undefined' || (max_split != null && max_split.hasOwnProperty ("__kwargtrans__"))) {;
/* 000797 */ 			var max_split = null;
/* 000797 */ 		};
/* 000797 */ 		if (arguments.length) {
/* 000797 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000797 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000797 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000797 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000797 */ 					switch (__attrib0__) {
/* 000797 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000797 */ 						case 'node_predicate_fn': var node_predicate_fn = __allkwargs0__ [__attrib0__]; break;
/* 000797 */ 						case 'skip_none': var skip_none = __allkwargs0__ [__attrib0__]; break;
/* 000797 */ 						case 'keep_separators': var keep_separators = __allkwargs0__ [__attrib0__]; break;
/* 000797 */ 						case 'max_split': var max_split = __allkwargs0__ [__attrib0__]; break;
/* 000797 */ 					}
/* 000797 */ 				}
/* 000797 */ 			}
/* 000797 */ 		}
/* 000797 */ 		else {
/* 000797 */ 		}
/* 000800 */ 		var nodelists_list = [[]];
/* 000802 */ 		if (__t__ (__t__ (max_split !== null) && __eq__ (max_split, 0))) {
/* 000803 */ 			var no_more_splits = true;
/* 000803 */ 		}
/* 000804 */ 		else {
/* 000805 */ 			var no_more_splits = false;
/* 000805 */ 		}
/* 000807 */ 		var __iterable0__ = self.nodelist;
/* 000807 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000807 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000808 */ 			if (__t__ (__t__ (skip_none) && n === null)) {
/* 000808 */ 				continue;
/* 000808 */ 			}
/* 000810 */ 			if (__t__ (__t__ (!__t__ ((no_more_splits))) && __call__ (node_predicate_fn, null, n))) {
/* 000811 */ 				if (__t__ (keep_separators)) {
/* 000812 */ 					(function () {
/* 000812 */ 						var __accu0__ = nodelists_list;
/* 000812 */ 						return __call__ (__accu0__.append, __accu0__, [n]);
/* 000812 */ 					}) ();
/* 000812 */ 				}
/* 000813 */ 				else {
/* 000814 */ 					(function () {
/* 000814 */ 						var __accu0__ = nodelists_list;
/* 000814 */ 						return __call__ (__accu0__.append, __accu0__, []);
/* 000814 */ 					}) ();
/* 000814 */ 				}
/* 000816 */ 				if (__t__ (__t__ (max_split !== null) && __ge__ (__call__ (len, null, nodelists_list), max_split))) {
/* 000817 */ 					var no_more_splits = true;
/* 000817 */ 				}
/* 000817 */ 			}
/* 000818 */ 			else {
/* 000819 */ 				(function () {
/* 000819 */ 					var __accu0__ = __getitem__ (nodelists_list, __sub__ (__call__ (len, null, nodelists_list), 1));
/* 000819 */ 					return __call__ (__accu0__.append, __accu0__, n);
/* 000819 */ 				}) ();
/* 000819 */ 			}
/* 000819 */ 		}
/* 000821 */ 		if (__t__ (self.latex_walker !== null)) {
/* 000822 */ 			var make_latex_node_list = self.latex_walker.make_nodelist;
/* 000822 */ 		}
/* 000823 */ 		else {
/* 000824 */ 			var make_latex_node_list = (function __lambda__ (nl) {
/* 000824 */ 				var kwargs = dict ();
/* 000824 */ 				if (arguments.length) {
/* 000824 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000824 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000824 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000824 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000824 */ 							switch (__attrib0__) {
/* 000824 */ 								case 'nl': var nl = __allkwargs0__ [__attrib0__]; break;
/* 000824 */ 								default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000824 */ 							}
/* 000824 */ 						}
/* 000824 */ 						delete kwargs.__kwargtrans__;
/* 000824 */ 					}
/* 000824 */ 				}
/* 000824 */ 				else {
/* 000824 */ 				}
/* 000824 */ 				return __call__ (LatexNodeList, null, nl, __kwargtrans__ (kwargs));
/* 000824 */ 			});
/* 000824 */ 		}
/* 000826 */ 		return (function () {
/* 000826 */ 			var __accu0__ = [];
/* 000826 */ 			var __iterable0__ = nodelists_list;
/* 000826 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000828 */ 				var nl = __getitem__ (__iterable0__, __index0__);
/* 000828 */ 				(function () {
/* 000828 */ 					var __accu1__ = __accu0__;
/* 000827 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (make_latex_node_list, null, nl, __kwargtrans__ ({parsing_state: self.parsing_state})));
/* 000827 */ 				}) ();
/* 000827 */ 			}
/* 000827 */ 			return __accu0__;
/* 000827 */ 		}) ();
/* 000827 */ 	});},
/* 000831 */ 	get split_at_chars () {return __get__ (this, function (self, sep_chars) {
/* 000831 */ 		if (arguments.length) {
/* 000831 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000831 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000831 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000831 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000831 */ 					switch (__attrib0__) {
/* 000831 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000831 */ 						case 'sep_chars': var sep_chars = __allkwargs0__ [__attrib0__]; break;
/* 000831 */ 					}
/* 000831 */ 				}
/* 000831 */ 			}
/* 000831 */ 		}
/* 000831 */ 		else {
/* 000831 */ 		}
/* 000863 */ 		var split_node_lists = [];
/* 000865 */ 		if (__t__ (__call__ (callable, null, sep_chars))) {
/* 000866 */ 			var sep_chars_fn = sep_chars;
/* 000866 */ 		}
/* 000867 */ 		else {
/* 000868 */ 			var sep_chars_fn = (function __lambda__ (chars, sep_chars) {
/* 000868 */ 				if (typeof sep_chars == 'undefined' || (sep_chars != null && sep_chars.hasOwnProperty ("__kwargtrans__"))) {;
/* 000868 */ 					var sep_chars = sep_chars;
/* 000868 */ 				};
/* 000868 */ 				if (arguments.length) {
/* 000868 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000868 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000868 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000868 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000868 */ 							switch (__attrib0__) {
/* 000868 */ 								case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000868 */ 								case 'sep_chars': var sep_chars = __allkwargs0__ [__attrib0__]; break;
/* 000868 */ 							}
/* 000868 */ 						}
/* 000868 */ 					}
/* 000868 */ 				}
/* 000868 */ 				else {
/* 000868 */ 				}
/* 000868 */ 				return (function () {
/* 000868 */ 					var __accu0__ = chars;
/* 000868 */ 					return __call__ (__accu0__.py_split, __accu0__, sep_chars);
/* 000868 */ 				}) ();
/* 000868 */ 			});
/* 000868 */ 		}
/* 000870 */ 		var lw = self.latex_walker;
/* 000871 */ 		if (__t__ (lw !== null)) {
/* 000872 */ 			var make_node = lw.make_node;
/* 000872 */ 		}
/* 000873 */ 		else {
/* 000874 */ 			var make_node = (function __lambda__ (cls) {
/* 000874 */ 				var kwargs = dict ();
/* 000874 */ 				if (arguments.length) {
/* 000874 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000874 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000874 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000874 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000874 */ 							switch (__attrib0__) {
/* 000874 */ 								case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000874 */ 								default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000874 */ 							}
/* 000874 */ 						}
/* 000874 */ 						delete kwargs.__kwargtrans__;
/* 000874 */ 					}
/* 000874 */ 				}
/* 000874 */ 				else {
/* 000874 */ 				}
/* 000874 */ 				return __call__ (cls, null, __kwargtrans__ (kwargs));
/* 000874 */ 			});
/* 000874 */ 		}
/* 000876 */ 		var chars_to_node = function (chars, orig_node, rel_pos) {
/* 000876 */ 			if (arguments.length) {
/* 000876 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000876 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000876 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000876 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000876 */ 						switch (__attrib0__) {
/* 000876 */ 							case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000876 */ 							case 'orig_node': var orig_node = __allkwargs0__ [__attrib0__]; break;
/* 000876 */ 							case 'rel_pos': var rel_pos = __allkwargs0__ [__attrib0__]; break;
/* 000876 */ 						}
/* 000876 */ 					}
/* 000876 */ 				}
/* 000876 */ 			}
/* 000876 */ 			else {
/* 000876 */ 			}
/* 000877 */ 			var pos = __add__ (orig_node.pos, rel_pos);
/* 000881 */ 			return __call__ (make_node, null, LatexCharsNode, __kwargtrans__ ({parsing_state: self.parsing_state, pos: pos, pos_end: __add__ (pos, __call__ (len, null, chars)), chars: chars}));
/* 000881 */ 		};
/* 000884 */ 		var pending_nodes = [];
/* 000886 */ 		var __iterable0__ = self.nodelist;
/* 000886 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000886 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000887 */ 			if (__t__ ((function () {
/* 000887 */ 				var __accu0__ = n;
/* 000887 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexwalker.LatexCharsNode);
/* 000887 */ 			}) ())) {
/* 000888 */ 				var parts = __call__ (sep_chars_fn, null, n.chars);
/* 000889 */ 				var rel_pos = 0;
/* 000890 */ 				if (__t__ (__getitem__ (parts, 0))) {
/* 000891 */ 					(function () {
/* 000891 */ 						var __accu0__ = pending_nodes;
/* 000891 */ 						return __call__ (__accu0__.append, __accu0__, __call__ (chars_to_node, null, __getitem__ (parts, 0), n, 0));
/* 000891 */ 					}) ();
/* 000892 */ 					var rel_pos = __call__ (len, null, __getitem__ (parts, 0));
/* 000893 */ 					var parts = __getslice__ (parts, 1, null, 1);
/* 000893 */ 				}
/* 000894 */ 				if (__t__ (!__t__ ((parts)))) {
/* 000894 */ 					continue;
/* 000894 */ 				}
/* 000897 */ 				if (__t__ (pending_nodes)) {
/* 000898 */ 					(function () {
/* 000898 */ 						var __accu0__ = split_node_lists;
/* 000898 */ 						return __call__ (__accu0__.append, __accu0__, pending_nodes);
/* 000898 */ 					}) ();
/* 000899 */ 					var pending_nodes = [];
/* 000899 */ 				}
/* 000900 */ 				var __iterable1__ = parts;
/* 000900 */ 				for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000900 */ 					var p = __getitem__ (__iterable1__, __index1__);
/* 000901 */ 					(function () {
/* 000901 */ 						var __accu0__ = split_node_lists;
/* 000901 */ 						return __call__ (__accu0__.append, __accu0__, [__call__ (chars_to_node, null, p, n, rel_pos)]);
/* 000901 */ 					}) ();
/* 000902 */ 					var rel_pos = __call__ (__iadd__, null, rel_pos, __call__ (len, null, p));
/* 000902 */ 				}
/* 000902 */ 				continue;
/* 000902 */ 			}
/* 000906 */ 			(function () {
/* 000906 */ 				var __accu0__ = pending_nodes;
/* 000906 */ 				return __call__ (__accu0__.append, __accu0__, n);
/* 000906 */ 			}) ();
/* 000906 */ 		}
/* 000908 */ 		if (__t__ (pending_nodes)) {
/* 000909 */ 			(function () {
/* 000909 */ 				var __accu0__ = split_node_lists;
/* 000909 */ 				return __call__ (__accu0__.append, __accu0__, pending_nodes);
/* 000909 */ 			}) ();
/* 000909 */ 		}
/* 000911 */ 		return split_node_lists;
/* 000911 */ 	});},
/* 000914 */ 	get get_content_as_chars () {return __get__ (this, function (self) {
/* 000914 */ 		if (arguments.length) {
/* 000914 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000914 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000914 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000914 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000914 */ 					switch (__attrib0__) {
/* 000914 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000914 */ 					}
/* 000914 */ 				}
/* 000914 */ 			}
/* 000914 */ 		}
/* 000914 */ 		else {
/* 000914 */ 		}
/* 000929 */ 		return __call__ (_get_content_as_chars, null, self.nodelist);
/* 000929 */ 	});},
/* 000933 */ 	get __eq__ () {return __get__ (this, function (self, other) {
/* 000933 */ 		if (arguments.length) {
/* 000933 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000933 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000933 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000933 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000933 */ 					switch (__attrib0__) {
/* 000933 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000933 */ 						case 'other': var other = __allkwargs0__ [__attrib0__]; break;
/* 000933 */ 					}
/* 000933 */ 				}
/* 000933 */ 			}
/* 000933 */ 		}
/* 000933 */ 		else {
/* 000933 */ 		}
/* 000934 */ 		if (__t__ (__call__ (isinstance, null, other, list))) {
/* 000935 */ 			return __eq__ (self.nodelist, other);
/* 000935 */ 		}
/* 000936 */ 		return __t__ (__eq__ (self.nodelist, other.nodelist)) && __t__ ((__t__ (__t__ (self.pos === null) && other.pos === null) || __eq__ (self.pos, other.pos))) && (__t__ (__t__ (self.pos_end === null) && other.pos_end === null) || __eq__ (self.pos_end, other.pos_end));
/* 000936 */ 	});},
/* 000945 */ 	get to_json_object () {return __get__ (this, function (self) {
/* 000945 */ 		if (arguments.length) {
/* 000945 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000945 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000945 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000945 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000945 */ 					switch (__attrib0__) {
/* 000945 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000945 */ 					}
/* 000945 */ 				}
/* 000945 */ 			}
/* 000945 */ 		}
/* 000945 */ 		else {
/* 000945 */ 		}
/* 000946 */ 		return self.nodelist;
/* 000946 */ 	});},
/* 000948 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000948 */ 		if (arguments.length) {
/* 000948 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000948 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000948 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000948 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000948 */ 					switch (__attrib0__) {
/* 000948 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000948 */ 					}
/* 000948 */ 				}
/* 000948 */ 			}
/* 000948 */ 		}
/* 000948 */ 		else {
/* 000948 */ 		}
/* 000949 */ 		return (function () {
/* 000949 */ 			var __accu0__ = 'LatexNodeList({nodelist!r}, pos={pos!r}, pos_end={pos_end!r})';
/* 000949 */ 			return __call__ (__accu0__.format, __accu0__, __kwargtrans__ ({nodelist: self.nodelist, pos: self.pos, pos_end: self.pos_end}));
/* 000949 */ 		}) ();
/* 000949 */ 	});}
/* 000949 */ });
/* 000949 */ Object.defineProperty (LatexNodeList, 'len', property.call (LatexNodeList, LatexNodeList._get_len));;
/* 000957 */ export var _get_content_as_chars = function (nodelist) {
/* 000957 */ 	if (arguments.length) {
/* 000957 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000957 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000957 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000957 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000957 */ 				switch (__attrib0__) {
/* 000957 */ 					case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000957 */ 				}
/* 000957 */ 			}
/* 000957 */ 		}
/* 000957 */ 	}
/* 000957 */ 	else {
/* 000957 */ 	}
/* 000963 */ 	if (__t__ (nodelist === null)) {
/* 000964 */ 		return '';
/* 000964 */ 	}
/* 000966 */ 	var charslist = [];
/* 000968 */ 	var __iterable0__ = nodelist;
/* 000968 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000968 */ 		var n = __getitem__ (__iterable0__, __index0__);
/* 000970 */ 		if (__t__ (n === null)) {
/* 000970 */ 			continue;
/* 000970 */ 		}
/* 000973 */ 		if (__t__ ((function () {
/* 000973 */ 			var __accu0__ = n;
/* 000973 */ 			return __call__ (__accu0__.isNodeType, __accu0__, LatexCommentNode);
/* 000973 */ 		}) ())) {
/* 000973 */ 			continue;
/* 000973 */ 		}
/* 000977 */ 		if (__t__ ((function () {
/* 000977 */ 			var __accu0__ = n;
/* 000977 */ 			return __call__ (__accu0__.isNodeType, __accu0__, LatexGroupNode);
/* 000977 */ 		}) ())) {
/* 000979 */ 			(function () {
/* 000979 */ 				var __accu0__ = charslist;
/* 000979 */ 				return __call__ (__accu0__.append, __accu0__, __call__ (_get_content_as_chars, null, n.nodelist));
/* 000979 */ 			}) ();
/* 000979 */ 			continue;
/* 000979 */ 		}
/* 000982 */ 		if (__t__ ((function () {
/* 000982 */ 			var __accu0__ = n;
/* 000982 */ 			return __call__ (__accu0__.isNodeType, __accu0__, LatexCharsNode);
/* 000982 */ 		}) ())) {
/* 000983 */ 			(function () {
/* 000983 */ 				var __accu0__ = charslist;
/* 000983 */ 				return __call__ (__accu0__.append, __accu0__, n.chars);
/* 000983 */ 			}) ();
/* 000983 */ 			continue;
/* 000983 */ 		}
/* 000987 */ 		var __except0__ = __call__ (LatexWalkerParseError, null, (function () {
/* 000987 */ 			var __accu0__ = 'Expected simple characters only, got ‘{}’';
/* 000987 */ 			return __call__ (__accu0__.format, __accu0__, n.__class__.__name__);
/* 000987 */ 		}) (), __kwargtrans__ ({pos: n.pos}));
/* 000987 */ 		__except0__.__cause__ = null;
/* 000987 */ 		throw __except0__;
/* 000987 */ 	}
/* 000991 */ 	return (function () {
/* 000991 */ 		var __accu0__ = '';
/* 000991 */ 		return __call__ (__accu0__.join, __accu0__, charslist);
/* 000991 */ 	}) ();
/* 000991 */ };
/* 000998 */ export var _update_posposend_from_nodelist = function (pos, pos_end, nodelist) {
/* 000998 */ 	if (arguments.length) {
/* 000998 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000998 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000998 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000998 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000998 */ 				switch (__attrib0__) {
/* 000998 */ 					case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000998 */ 					case 'pos_end': var pos_end = __allkwargs0__ [__attrib0__]; break;
/* 000998 */ 					case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000998 */ 				}
/* 000998 */ 			}
/* 000998 */ 		}
/* 000998 */ 	}
/* 000998 */ 	else {
/* 000998 */ 	}
/* 001000 */ 	if (__t__ (pos === null)) {
/* 001001 */ 		var __break0__ = false;
/* 001001 */ 		var __iterable0__ = nodelist;
/* 001001 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001001 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 001002 */ 			if (__t__ (n !== null)) {
/* 001003 */ 				var pos = n.pos;
/* 001003 */ 				__break0__ = true;
/* 001003 */ 				break;
/* 001003 */ 			}
/* 001003 */ 		}
/* 001005 */ 		if (!__break0__) {
/* 001006 */ 			var pos = null;
/* 001006 */ 		}
/* 001006 */ 	}
/* 001008 */ 	if (__t__ (pos_end === null)) {
/* 001009 */ 		var __break0__ = false;
/* 001009 */ 		var __iterable0__ = __call__ (py_reversed, null, nodelist);
/* 001009 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001009 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 001010 */ 			if (__t__ (n !== null)) {
/* 001011 */ 				var pos_end = n.pos_end;
/* 001011 */ 				__break0__ = true;
/* 001011 */ 				break;
/* 001011 */ 			}
/* 001011 */ 		}
/* 001013 */ 		if (!__break0__) {
/* 001014 */ 			var pos_end = null;
/* 001014 */ 		}
/* 001014 */ 	}
/* 001016 */ 	return tuple ([pos, pos_end]);
/* 001016 */ };
/* 001024 */ export var LatexNodesVisitor =  __class__ ('LatexNodesVisitor', [object], {
/* 001024 */ 	__module__: __name__,
/* 001031 */ 	get visit () {return __get__ (this, function (self, node) {
/* 001031 */ 		if (arguments.length) {
/* 001031 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001031 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001031 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001031 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001031 */ 					switch (__attrib0__) {
/* 001031 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001031 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001031 */ 					}
/* 001031 */ 				}
/* 001031 */ 			}
/* 001031 */ 		}
/* 001031 */ 		else {
/* 001031 */ 		}
/* 001038 */ 		// pass;
/* 001038 */ 	});},
/* 001040 */ 	get visit_chars_node () {return __get__ (this, function (self, node) {
/* 001040 */ 		if (arguments.length) {
/* 001040 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001040 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001040 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001040 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001040 */ 					switch (__attrib0__) {
/* 001040 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001040 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001040 */ 					}
/* 001040 */ 				}
/* 001040 */ 			}
/* 001040 */ 		}
/* 001040 */ 		else {
/* 001040 */ 		}
/* 001041 */ 		(function () {
/* 001041 */ 			var __accu0__ = self;
/* 001041 */ 			return __call__ (__accu0__.visit, __accu0__, node);
/* 001041 */ 		}) ();
/* 001041 */ 	});},
/* 001043 */ 	get visit_group_node () {return __get__ (this, function (self, node) {
/* 001043 */ 		if (arguments.length) {
/* 001043 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001043 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001043 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001043 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001043 */ 					switch (__attrib0__) {
/* 001043 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001043 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001043 */ 					}
/* 001043 */ 				}
/* 001043 */ 			}
/* 001043 */ 		}
/* 001043 */ 		else {
/* 001043 */ 		}
/* 001044 */ 		(function () {
/* 001044 */ 			var __accu0__ = self;
/* 001044 */ 			return __call__ (__accu0__.visit, __accu0__, node);
/* 001044 */ 		}) ();
/* 001044 */ 	});},
/* 001046 */ 	get visit_comment_node () {return __get__ (this, function (self, node) {
/* 001046 */ 		if (arguments.length) {
/* 001046 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001046 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001046 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001046 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001046 */ 					switch (__attrib0__) {
/* 001046 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001046 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001046 */ 					}
/* 001046 */ 				}
/* 001046 */ 			}
/* 001046 */ 		}
/* 001046 */ 		else {
/* 001046 */ 		}
/* 001047 */ 		(function () {
/* 001047 */ 			var __accu0__ = self;
/* 001047 */ 			return __call__ (__accu0__.visit, __accu0__, node);
/* 001047 */ 		}) ();
/* 001047 */ 	});},
/* 001049 */ 	get visit_macro_node () {return __get__ (this, function (self, node) {
/* 001049 */ 		if (arguments.length) {
/* 001049 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001049 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001049 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001049 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001049 */ 					switch (__attrib0__) {
/* 001049 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001049 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001049 */ 					}
/* 001049 */ 				}
/* 001049 */ 			}
/* 001049 */ 		}
/* 001049 */ 		else {
/* 001049 */ 		}
/* 001050 */ 		(function () {
/* 001050 */ 			var __accu0__ = self;
/* 001050 */ 			return __call__ (__accu0__.visit, __accu0__, node);
/* 001050 */ 		}) ();
/* 001050 */ 	});},
/* 001052 */ 	get visit_environment_node () {return __get__ (this, function (self, node) {
/* 001052 */ 		if (arguments.length) {
/* 001052 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001052 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001052 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001052 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001052 */ 					switch (__attrib0__) {
/* 001052 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001052 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001052 */ 					}
/* 001052 */ 				}
/* 001052 */ 			}
/* 001052 */ 		}
/* 001052 */ 		else {
/* 001052 */ 		}
/* 001053 */ 		(function () {
/* 001053 */ 			var __accu0__ = self;
/* 001053 */ 			return __call__ (__accu0__.visit, __accu0__, node);
/* 001053 */ 		}) ();
/* 001053 */ 	});},
/* 001055 */ 	get visit_specials_node () {return __get__ (this, function (self, node) {
/* 001055 */ 		if (arguments.length) {
/* 001055 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001055 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001055 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001055 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001055 */ 					switch (__attrib0__) {
/* 001055 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001055 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001055 */ 					}
/* 001055 */ 				}
/* 001055 */ 			}
/* 001055 */ 		}
/* 001055 */ 		else {
/* 001055 */ 		}
/* 001056 */ 		(function () {
/* 001056 */ 			var __accu0__ = self;
/* 001056 */ 			return __call__ (__accu0__.visit, __accu0__, node);
/* 001056 */ 		}) ();
/* 001056 */ 	});},
/* 001058 */ 	get visit_math_node () {return __get__ (this, function (self, node) {
/* 001058 */ 		if (arguments.length) {
/* 001058 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001058 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001058 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001058 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001058 */ 					switch (__attrib0__) {
/* 001058 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001058 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001058 */ 					}
/* 001058 */ 				}
/* 001058 */ 			}
/* 001058 */ 		}
/* 001058 */ 		else {
/* 001058 */ 		}
/* 001059 */ 		(function () {
/* 001059 */ 			var __accu0__ = self;
/* 001059 */ 			return __call__ (__accu0__.visit, __accu0__, node);
/* 001059 */ 		}) ();
/* 001059 */ 	});},
/* 001061 */ 	get visit_node_list () {return __get__ (this, function (self, nodes) {
/* 001061 */ 		if (arguments.length) {
/* 001061 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001061 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001061 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001061 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001061 */ 					switch (__attrib0__) {
/* 001061 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001061 */ 						case 'nodes': var nodes = __allkwargs0__ [__attrib0__]; break;
/* 001061 */ 					}
/* 001061 */ 				}
/* 001061 */ 			}
/* 001061 */ 		}
/* 001061 */ 		else {
/* 001061 */ 		}
/* 001062 */ 		(function () {
/* 001062 */ 			var __accu0__ = self;
/* 001062 */ 			return __call__ (__accu0__.visit, __accu0__, nodes);
/* 001062 */ 		}) ();
/* 001062 */ 	});},
/* 001064 */ 	get visit_parsed_arguments () {return __get__ (this, function (self, parsed_args) {
/* 001064 */ 		if (arguments.length) {
/* 001064 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001064 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001064 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001064 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001064 */ 					switch (__attrib0__) {
/* 001064 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001064 */ 						case 'parsed_args': var parsed_args = __allkwargs0__ [__attrib0__]; break;
/* 001064 */ 					}
/* 001064 */ 				}
/* 001064 */ 			}
/* 001064 */ 		}
/* 001064 */ 		else {
/* 001064 */ 		}
/* 001065 */ 		(function () {
/* 001065 */ 			var __accu0__ = self;
/* 001065 */ 			return __call__ (__accu0__.visit, __accu0__, parsed_args);
/* 001065 */ 		}) ();
/* 001065 */ 	});},
/* 001068 */ 	get visit_unknown_node () {return __get__ (this, function (self, node) {
/* 001068 */ 		if (arguments.length) {
/* 001068 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001068 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001068 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001068 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001068 */ 					switch (__attrib0__) {
/* 001068 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001068 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001068 */ 					}
/* 001068 */ 				}
/* 001068 */ 			}
/* 001068 */ 		}
/* 001068 */ 		else {
/* 001068 */ 		}
/* 001069 */ 		(function () {
/* 001069 */ 			var __accu0__ = self;
/* 001069 */ 			return __call__ (__accu0__.visit, __accu0__, node);
/* 001069 */ 		}) ();
/* 001069 */ 	});},
/* 001074 */ 	get start () {return __get__ (this, function (self, node) {
/* 001074 */ 		if (arguments.length) {
/* 001074 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001074 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001074 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001074 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001074 */ 					switch (__attrib0__) {
/* 001074 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001074 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001074 */ 					}
/* 001074 */ 				}
/* 001074 */ 			}
/* 001074 */ 		}
/* 001074 */ 		else {
/* 001074 */ 		}
/* 001086 */ 		(function () {
/* 001086 */ 			var __accu0__ = node;
/* 001086 */ 			return __call__ (__accu0__.accept_node_visitor, __accu0__, self);
/* 001086 */ 		}) ();
/* 001086 */ 	});}
/* 001086 */ });
/* 001097 */ export var latex_node_types = [LatexNode, LatexCharsNode, LatexGroupNode, LatexCommentNode, LatexMacroNode, LatexEnvironmentNode, LatexSpecialsNode, LatexMathNode];
/* 001108 */ export var __all__ = __add__ ((function () {
/* 001108 */ 	var __accu0__ = [];
/* 001108 */ 	var __iterable0__ = latex_node_types;
/* 001108 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001108 */ 		var nc = __getitem__ (__iterable0__, __index0__);
/* 001108 */ 		(function () {
/* 001108 */ 			var __accu1__ = __accu0__;
/* 001108 */ 			return __call__ (__accu1__.append, __accu1__, nc.__name__);
/* 001108 */ 		}) ();
/* 001108 */ 	}
/* 001108 */ 	return __accu0__;
/* 001108 */ }) (), ['LatexNodeList', 'LatexNodesVisitor']);
/* 000037 */ 
//# sourceMappingURL=pylatexenc.latexnodes.nodes.map