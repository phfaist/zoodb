/* 000001 */ // Transcrypt'ed from Python, 2022-08-29 11:35:10
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
/* 000057 */ export var __all__ = ['LatexNode', 'LatexCharsNode', 'LatexGroupNode', 'LatexCommentNode', 'LatexMacroNode', 'LatexEnvironmentNode', 'LatexSpecialsNode', 'LatexMathNode', 'LatexNodeList', 'LatexNodesVisitor'];
/* 000076 */ export var LatexNode =  __class__ ('LatexNode', [object], {
/* 000076 */ 	__module__: __name__,
/* 000136 */ 	get __init__ () {return __get__ (this, function (self, _fields, _redundant_fields, parsing_state, pos, pos_end, latex_walker) {
/* 000136 */ 		if (typeof _redundant_fields == 'undefined' || (_redundant_fields != null && _redundant_fields.hasOwnProperty ("__kwargtrans__"))) {;
/* 000136 */ 			var _redundant_fields = null;
/* 000136 */ 		};
/* 000136 */ 		if (typeof parsing_state == 'undefined' || (parsing_state != null && parsing_state.hasOwnProperty ("__kwargtrans__"))) {;
/* 000136 */ 			var parsing_state = null;
/* 000136 */ 		};
/* 000136 */ 		if (typeof pos == 'undefined' || (pos != null && pos.hasOwnProperty ("__kwargtrans__"))) {;
/* 000136 */ 			var pos = null;
/* 000136 */ 		};
/* 000136 */ 		if (typeof pos_end == 'undefined' || (pos_end != null && pos_end.hasOwnProperty ("__kwargtrans__"))) {;
/* 000136 */ 			var pos_end = null;
/* 000136 */ 		};
/* 000136 */ 		if (typeof latex_walker == 'undefined' || (latex_walker != null && latex_walker.hasOwnProperty ("__kwargtrans__"))) {;
/* 000136 */ 			var latex_walker = null;
/* 000136 */ 		};
/* 000136 */ 		var kwargs = dict ();
/* 000136 */ 		if (arguments.length) {
/* 000136 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000136 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000136 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000136 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000136 */ 					switch (__attrib0__) {
/* 000136 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000136 */ 						case '_fields': var _fields = __allkwargs0__ [__attrib0__]; break;
/* 000136 */ 						case '_redundant_fields': var _redundant_fields = __allkwargs0__ [__attrib0__]; break;
/* 000136 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000136 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000136 */ 						case 'pos_end': var pos_end = __allkwargs0__ [__attrib0__]; break;
/* 000136 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000136 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000136 */ 					}
/* 000136 */ 				}
/* 000136 */ 				delete kwargs.__kwargtrans__;
/* 000136 */ 			}
/* 000136 */ 		}
/* 000136 */ 		else {
/* 000136 */ 		}
/* 000140 */ 		var len_ = (function () {
/* 000140 */ 			var __accu0__ = kwargs;
/* 000140 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'len', null);
/* 000140 */ 		}) ();
/* 000146 */ 		__call__ (__call__ (__super__, null, LatexNode, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000148 */ 		self.parsing_state = parsing_state;
/* 000149 */ 		self.latex_walker = latex_walker;
/* 000150 */ 		self.pos = pos;
/* 000151 */ 		self.pos_end = pos_end;
/* 000153 */ 		if (__t__ (__t__ (pos_end === null) && len_ !== null)) {
/* 000154 */ 			self.pos_end = __add__ (self.pos, len_);
/* 000154 */ 		}
/* 000157 */ 		self._fields = __call__ (tuple, null, __add__ (['pos', 'pos_end', 'parsing_state', 'latex_walker'], __call__ (list, null, _fields)));
/* 000158 */ 		if (__t__ (_redundant_fields !== null)) {
/* 000160 */ 			self._redundant_fields = __call__ (tuple, null, __add__ (__add__ (__call__ (list, null, self._fields), ['len']), __call__ (list, null, _redundant_fields)));
/* 000160 */ 		}
/* 000161 */ 		else {
/* 000162 */ 			self._redundant_fields = __call__ (tuple, null, __add__ (__call__ (list, null, self._fields), ['len']));
/* 000162 */ 		}
/* 000162 */ 	});},
/* 000164 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000164 */ 		if (arguments.length) {
/* 000164 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000164 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000164 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000164 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000164 */ 					switch (__attrib0__) {
/* 000164 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000164 */ 					}
/* 000164 */ 				}
/* 000164 */ 			}
/* 000164 */ 		}
/* 000164 */ 		else {
/* 000164 */ 		}
/* 000171 */ 		return LatexNode;
/* 000171 */ 	});},
/* 000173 */ 	get isNodeType () {return __get__ (this, function (self, t) {
/* 000173 */ 		if (arguments.length) {
/* 000173 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000173 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000173 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000173 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000173 */ 					switch (__attrib0__) {
/* 000173 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000173 */ 						case 't': var t = __allkwargs0__ [__attrib0__]; break;
/* 000173 */ 					}
/* 000173 */ 				}
/* 000173 */ 			}
/* 000173 */ 		}
/* 000173 */ 		else {
/* 000173 */ 		}
/* 000179 */ 		return __call__ (isinstance, null, self, t);
/* 000179 */ 	});},
/* 000182 */ 	get _get_len () {return __get__ (this, function (self) {
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
/* 000183 */ 		if (__t__ (__t__ (self.pos === null) || self.pos_end === null)) {
/* 000184 */ 			return null;
/* 000184 */ 		}
/* 000185 */ 		return __sub__ (self.pos_end, self.pos);
/* 000185 */ 	});},
/* 000187 */ 	get latex_verbatim () {return __get__ (this, function (self) {
/* 000187 */ 		if (arguments.length) {
/* 000187 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000187 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000187 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000187 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000187 */ 					switch (__attrib0__) {
/* 000187 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000187 */ 					}
/* 000187 */ 				}
/* 000187 */ 			}
/* 000187 */ 		}
/* 000187 */ 		else {
/* 000187 */ 		}
/* 000193 */ 		if (__t__ (self.latex_walker === null)) {
/* 000194 */ 			var __except0__ = __call__ (py_TypeError, null, "Can't use latex_verbatim() on node because we don't have any latex_walker set");
/* 000194 */ 			__except0__.__cause__ = null;
/* 000194 */ 			throw __except0__;
/* 000194 */ 		}
/* 000196 */ 		return __getslice__ (self.latex_walker.s, self.pos, self.pos_end, 1);
/* 000196 */ 	});},
/* 000198 */ 	get __eq__ () {return __get__ (this, function (self, other) {
/* 000198 */ 		if (arguments.length) {
/* 000198 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000198 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000198 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000198 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000198 */ 					switch (__attrib0__) {
/* 000198 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000198 */ 						case 'other': var other = __allkwargs0__ [__attrib0__]; break;
/* 000198 */ 					}
/* 000198 */ 				}
/* 000198 */ 			}
/* 000198 */ 		}
/* 000198 */ 		else {
/* 000198 */ 		}
/* 000201 */ 		return __t__ (other !== null) && __t__ ((function () {
/* 000201 */ 			var __accu0__ = self;
/* 000201 */ 			return __call__ (__accu0__.nodeType, __accu0__);
/* 000201 */ 		}) () === (function () {
/* 000201 */ 			var __accu0__ = other;
/* 000201 */ 			return __call__ (__accu0__.nodeType, __accu0__);
/* 000209 */ 		}) ()) && __t__ (other.parsing_state === self.parsing_state) && __t__ (other.latex_walker === self.latex_walker) && __t__ ((__t__ (__t__ (other.pos === null) && self.pos === null) || __eq__ (other.pos, self.pos))) && __t__ ((__t__ (__t__ (other.pos_end === null) && self.pos_end === null) || __eq__ (other.pos_end, self.pos_end))) && __call__ (all, null, (function () {
/* 000209 */ 			var __accu0__ = [];
/* 000210 */ 			var __iterable0__ = self._fields;
/* 000210 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000213 */ 				var f = __getitem__ (__iterable0__, __index0__);
/* 000213 */ 				(function () {
/* 000213 */ 					var __accu1__ = __accu0__;
/* 000212 */ 					return __call__ (__accu1__.append, __accu1__, __t__ (__t__ (__call__ (getattr, null, self, f) === null) && __call__ (getattr, null, other, f) === null) || __eq__ (__call__ (getattr, null, self, f), __call__ (getattr, null, other, f)));
/* 000212 */ 				}) ();
/* 000212 */ 			}
/* 000212 */ 			return py_iter (__accu0__);
/* 000212 */ 		}) ());
/* 000212 */ 	});},
/* 000219 */ 	get __ne__ () {return __get__ (this, function (self, other) {
/* 000219 */ 		if (arguments.length) {
/* 000219 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000219 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000219 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000219 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000219 */ 					switch (__attrib0__) {
/* 000219 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000219 */ 						case 'other': var other = __allkwargs0__ [__attrib0__]; break;
/* 000219 */ 					}
/* 000219 */ 				}
/* 000219 */ 			}
/* 000219 */ 		}
/* 000219 */ 		else {
/* 000219 */ 		}
/* 000219 */ 		return NotImplemented;
/* 000219 */ 	});},
/* 000221 */ 	__hash__: null,
/* 000223 */ 	get __unicode__ () {return __get__ (this, function (self) {
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
/* 000224 */ 		return __call__ (_unicode_from_str, null, (function () {
/* 000224 */ 			var __accu0__ = self;
/* 000224 */ 			return __call__ (__accu0__.__str__, __accu0__);
/* 000224 */ 		}) ());
/* 000224 */ 	});},
/* 000225 */ 	get __str__ () {return __get__ (this, function (self) {
/* 000225 */ 		if (arguments.length) {
/* 000225 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000225 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000225 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000225 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000225 */ 					switch (__attrib0__) {
/* 000225 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000225 */ 					}
/* 000225 */ 				}
/* 000225 */ 			}
/* 000225 */ 		}
/* 000225 */ 		else {
/* 000225 */ 		}
/* 000226 */ 		return (function () {
/* 000226 */ 			var __accu0__ = self;
/* 000226 */ 			return __call__ (__accu0__.__repr__, __accu0__);
/* 000226 */ 		}) ();
/* 000226 */ 	});},
/* 000227 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000227 */ 		if (arguments.length) {
/* 000227 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000227 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000227 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000227 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000227 */ 					switch (__attrib0__) {
/* 000227 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000227 */ 					}
/* 000227 */ 				}
/* 000227 */ 			}
/* 000227 */ 		}
/* 000227 */ 		else {
/* 000227 */ 		}
/* 000229 */ 		return __add__ (__add__ (__add__ ((function () {
/* 000229 */ 			var __accu0__ = self;
/* 000229 */ 			return __call__ (__accu0__.nodeType, __accu0__);
/* 000230 */ 		}) ().__name__, '('), (function () {
/* 000230 */ 			var __accu0__ = ', ';
/* 000230 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000230 */ 				var __accu1__ = [];
/* 000230 */ 				var __iterable0__ = self._fields;
/* 000230 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000230 */ 					var k = __getitem__ (__iterable0__, __index0__);
/* 000230 */ 					(function () {
/* 000230 */ 						var __accu2__ = __accu1__;
/* 000230 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000230 */ 							var __accu3__ = '{}={!r}';
/* 000230 */ 							return __call__ (__accu3__.format, __accu3__, k, __call__ (getattr, null, self, k));
/* 000230 */ 						}) ());
/* 000230 */ 					}) ();
/* 000230 */ 				}
/* 000230 */ 				return __accu1__;
/* 000230 */ 			}) ());
/* 000230 */ 		}) ()), ')');
/* 000230 */ 	});},
/* 000234 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000234 */ 		if (arguments.length) {
/* 000234 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000234 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000234 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000234 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000234 */ 					switch (__attrib0__) {
/* 000234 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000234 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000234 */ 					}
/* 000234 */ 				}
/* 000234 */ 			}
/* 000234 */ 		}
/* 000234 */ 		else {
/* 000234 */ 		}
/* 000235 */ 		(function () {
/* 000235 */ 			var __accu0__ = visitor;
/* 000235 */ 			return __call__ (__accu0__.visit_unknown_node, __accu0__, self);
/* 000235 */ 		}) ();
/* 000235 */ 	});},
/* 000237 */ 	get to_json_object_with_latexwalker () {return __get__ (this, function (self, latexwalker) {
/* 000237 */ 		if (arguments.length) {
/* 000237 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000237 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000237 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000237 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000237 */ 					switch (__attrib0__) {
/* 000237 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000237 */ 						case 'latexwalker': var latexwalker = __allkwargs0__ [__attrib0__]; break;
/* 000237 */ 					}
/* 000237 */ 				}
/* 000237 */ 			}
/* 000237 */ 		}
/* 000237 */ 		else {
/* 000237 */ 		}
/* 000239 */ 		var d = dict ({'nodetype': self.__class__.__name__});
/* 000243 */ 		var __iterable0__ = self._fields;
/* 000243 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000243 */ 			var fld = __getitem__ (__iterable0__, __index0__);
/* 000244 */ 			if (__t__ (__eq__ (fld, 'spec'))) {
/* 000246 */ 				__setitem__ (d, fld, __call__ (repr, null, self.spec));
/* 000246 */ 			}
/* 000247 */ 			else if (__t__ (__eq__ (fld, 'latex_walker'))) {
/* 000249 */ 				// pass;
/* 000249 */ 			}
/* 000250 */ 			else {
/* 000251 */ 				__setitem__ (d, fld, __call__ (getattr, null, self, fld));
/* 000251 */ 			}
/* 000251 */ 		}
/* 000252 */ 		(function () {
/* 000252 */ 			var __accu0__ = d;
/* 000252 */ 			return __call__ (__accu0__.py_update, __accu0__, (function () {
/* 000252 */ 				var __accu1__ = latexwalker;
/* 000252 */ 				return __call__ (__accu1__.pos_to_lineno_colno, __accu1__, self.pos, __kwargtrans__ ({as_dict: true}));
/* 000252 */ 			}) ());
/* 000252 */ 		}) ();
/* 000253 */ 		return d;
/* 000253 */ 	});}
/* 000253 */ });
/* 000253 */ Object.defineProperty (LatexNode, 'len', property.call (LatexNode, LatexNode._get_len));;
/* 000257 */ export var LatexCharsNode =  __class__ ('LatexCharsNode', [LatexNode], {
/* 000257 */ 	__module__: __name__,
/* 000266 */ 	get __init__ () {return __get__ (this, function (self, chars) {
/* 000266 */ 		var kwargs = dict ();
/* 000266 */ 		if (arguments.length) {
/* 000266 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000266 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000266 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000266 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000266 */ 					switch (__attrib0__) {
/* 000266 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000266 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000266 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000266 */ 					}
/* 000266 */ 				}
/* 000266 */ 				delete kwargs.__kwargtrans__;
/* 000266 */ 			}
/* 000266 */ 		}
/* 000266 */ 		else {
/* 000266 */ 		}
/* 000267 */ 		__call__ (__call__ (__super__, null, LatexCharsNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['chars'])}, kwargs)));
/* 000271 */ 		self.chars = chars;
/* 000271 */ 	});},
/* 000273 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000273 */ 		if (arguments.length) {
/* 000273 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000273 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000273 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000273 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000273 */ 					switch (__attrib0__) {
/* 000273 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000273 */ 					}
/* 000273 */ 				}
/* 000273 */ 			}
/* 000273 */ 		}
/* 000273 */ 		else {
/* 000273 */ 		}
/* 000274 */ 		return LatexCharsNode;
/* 000274 */ 	});},
/* 000276 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000276 */ 		if (arguments.length) {
/* 000276 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000276 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000276 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000276 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000276 */ 					switch (__attrib0__) {
/* 000276 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000276 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000276 */ 					}
/* 000276 */ 				}
/* 000276 */ 			}
/* 000276 */ 		}
/* 000276 */ 		else {
/* 000276 */ 		}
/* 000277 */ 		(function () {
/* 000277 */ 			var __accu0__ = visitor;
/* 000277 */ 			return __call__ (__accu0__.visit_chars_node, __accu0__, self);
/* 000277 */ 		}) ();
/* 000277 */ 	});}
/* 000277 */ });
/* 000281 */ export var LatexGroupNode =  __class__ ('LatexGroupNode', [LatexNode], {
/* 000281 */ 	__module__: __name__,
/* 000306 */ 	get __init__ () {return __get__ (this, function (self, nodelist) {
/* 000306 */ 		var kwargs = dict ();
/* 000306 */ 		if (arguments.length) {
/* 000306 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000306 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000306 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000306 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000306 */ 					switch (__attrib0__) {
/* 000306 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000306 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000306 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000306 */ 					}
/* 000306 */ 				}
/* 000306 */ 				delete kwargs.__kwargtrans__;
/* 000306 */ 			}
/* 000306 */ 		}
/* 000306 */ 		else {
/* 000306 */ 		}
/* 000307 */ 		var delimiters = (function () {
/* 000307 */ 			var __accu0__ = kwargs;
/* 000307 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'delimiters', tuple (['{', '}']));
/* 000307 */ 		}) ();
/* 000308 */ 		__call__ (__call__ (__super__, null, LatexGroupNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['nodelist', 'delimiters'])}, kwargs)));
/* 000312 */ 		self.nodelist = nodelist;
/* 000313 */ 		self.delimiters = delimiters;
/* 000313 */ 	});},
/* 000315 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000315 */ 		if (arguments.length) {
/* 000315 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000315 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000315 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000315 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000315 */ 					switch (__attrib0__) {
/* 000315 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000315 */ 					}
/* 000315 */ 				}
/* 000315 */ 			}
/* 000315 */ 		}
/* 000315 */ 		else {
/* 000315 */ 		}
/* 000316 */ 		return LatexGroupNode;
/* 000316 */ 	});},
/* 000318 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000318 */ 		if (arguments.length) {
/* 000318 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000318 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000318 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000318 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000318 */ 					switch (__attrib0__) {
/* 000318 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000318 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000318 */ 					}
/* 000318 */ 				}
/* 000318 */ 			}
/* 000318 */ 		}
/* 000318 */ 		else {
/* 000318 */ 		}
/* 000319 */ 		if (__t__ (self.nodelist !== null)) {
/* 000320 */ 			var __iterable0__ = self.nodelist;
/* 000320 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000320 */ 				var node = __getitem__ (__iterable0__, __index0__);
/* 000321 */ 				if (__t__ (node !== null)) {
/* 000322 */ 					(function () {
/* 000322 */ 						var __accu0__ = node;
/* 000322 */ 						return __call__ (__accu0__.accept_node_visitor, __accu0__, visitor);
/* 000322 */ 					}) ();
/* 000322 */ 				}
/* 000322 */ 			}
/* 000322 */ 		}
/* 000323 */ 		(function () {
/* 000323 */ 			var __accu0__ = visitor;
/* 000323 */ 			return __call__ (__accu0__.visit_group_node, __accu0__, self);
/* 000323 */ 		}) ();
/* 000323 */ 	});}
/* 000323 */ });
/* 000326 */ export var LatexCommentNode =  __class__ ('LatexCommentNode', [LatexNode], {
/* 000326 */ 	__module__: __name__,
/* 000340 */ 	get __init__ () {return __get__ (this, function (self, comment) {
/* 000340 */ 		var kwargs = dict ();
/* 000340 */ 		if (arguments.length) {
/* 000340 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000340 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000340 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000340 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000340 */ 					switch (__attrib0__) {
/* 000340 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000340 */ 						case 'comment': var comment = __allkwargs0__ [__attrib0__]; break;
/* 000340 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000340 */ 					}
/* 000340 */ 				}
/* 000340 */ 				delete kwargs.__kwargtrans__;
/* 000340 */ 			}
/* 000340 */ 		}
/* 000340 */ 		else {
/* 000340 */ 		}
/* 000341 */ 		var comment_post_space = (function () {
/* 000341 */ 			var __accu0__ = kwargs;
/* 000341 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'comment_post_space', '');
/* 000341 */ 		}) ();
/* 000343 */ 		__call__ (__call__ (__super__, null, LatexCommentNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['comment', 'comment_post_space'])}, kwargs)));
/* 000348 */ 		self.comment = comment;
/* 000349 */ 		self.comment_post_space = comment_post_space;
/* 000349 */ 	});},
/* 000351 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000351 */ 		if (arguments.length) {
/* 000351 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000351 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000351 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000351 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000351 */ 					switch (__attrib0__) {
/* 000351 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000351 */ 					}
/* 000351 */ 				}
/* 000351 */ 			}
/* 000351 */ 		}
/* 000351 */ 		else {
/* 000351 */ 		}
/* 000352 */ 		return LatexCommentNode;
/* 000352 */ 	});},
/* 000354 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000354 */ 		if (arguments.length) {
/* 000354 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000354 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000354 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000354 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000354 */ 					switch (__attrib0__) {
/* 000354 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000354 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000354 */ 					}
/* 000354 */ 				}
/* 000354 */ 			}
/* 000354 */ 		}
/* 000354 */ 		else {
/* 000354 */ 		}
/* 000355 */ 		(function () {
/* 000355 */ 			var __accu0__ = visitor;
/* 000355 */ 			return __call__ (__accu0__.visit_comment_node, __accu0__, self);
/* 000355 */ 		}) ();
/* 000355 */ 	});}
/* 000355 */ });
/* 000358 */ export var LatexMacroNode =  __class__ ('LatexMacroNode', [LatexNode], {
/* 000358 */ 	__module__: __name__,
/* 000422 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000422 */ 		var kwargs = dict ();
/* 000422 */ 		if (arguments.length) {
/* 000422 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000422 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000422 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000422 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000422 */ 					switch (__attrib0__) {
/* 000422 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000422 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000422 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000422 */ 					}
/* 000422 */ 				}
/* 000422 */ 				delete kwargs.__kwargtrans__;
/* 000422 */ 			}
/* 000422 */ 		}
/* 000422 */ 		else {
/* 000422 */ 		}
/* 000423 */ 		var nodeargd = (function () {
/* 000423 */ 			var __accu0__ = kwargs;
/* 000423 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'nodeargd', __call__ (ParsedArguments, null));
/* 000423 */ 		}) ();
/* 000424 */ 		var macro_post_space = (function () {
/* 000424 */ 			var __accu0__ = kwargs;
/* 000424 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'macro_post_space', '');
/* 000424 */ 		}) ();
/* 000425 */ 		var spec = (function () {
/* 000425 */ 			var __accu0__ = kwargs;
/* 000425 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'spec', null);
/* 000425 */ 		}) ();
/* 000427 */ 		__call__ (__call__ (__super__, null, LatexMacroNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['macroname', 'spec', 'nodeargd', 'macro_post_space']), _redundant_fields: tuple (['nodeoptarg', 'nodeargs'])}, kwargs)));
/* 000432 */ 		self.macroname = macroname;
/* 000433 */ 		self.spec = spec;
/* 000434 */ 		self.nodeargd = nodeargd;
/* 000435 */ 		self.macro_post_space = macro_post_space;
/* 000435 */ 	});},
/* 000437 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000437 */ 		if (arguments.length) {
/* 000437 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000437 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000437 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000437 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000437 */ 					switch (__attrib0__) {
/* 000437 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000437 */ 					}
/* 000437 */ 				}
/* 000437 */ 			}
/* 000437 */ 		}
/* 000437 */ 		else {
/* 000437 */ 		}
/* 000438 */ 		return LatexMacroNode;
/* 000438 */ 	});},
/* 000440 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000440 */ 		if (arguments.length) {
/* 000440 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000440 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000440 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000440 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000440 */ 					switch (__attrib0__) {
/* 000440 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000440 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000440 */ 					}
/* 000440 */ 				}
/* 000440 */ 			}
/* 000440 */ 		}
/* 000440 */ 		else {
/* 000440 */ 		}
/* 000441 */ 		if (__t__ (self.nodeargd !== null)) {
/* 000442 */ 			(function () {
/* 000442 */ 				var __accu0__ = self.nodeargd;
/* 000442 */ 				return __call__ (__accu0__.accept_node_visitor, __accu0__, visitor);
/* 000442 */ 			}) ();
/* 000442 */ 		}
/* 000443 */ 		(function () {
/* 000443 */ 			var __accu0__ = visitor;
/* 000443 */ 			return __call__ (__accu0__.visit_macro_node, __accu0__, self);
/* 000443 */ 		}) ();
/* 000443 */ 	});}
/* 000443 */ });
/* 000466 */ export var LatexEnvironmentNode =  __class__ ('LatexEnvironmentNode', [LatexNode], {
/* 000466 */ 	__module__: __name__,
/* 000532 */ 	get __init__ () {return __get__ (this, function (self, environmentname, nodelist) {
/* 000532 */ 		var kwargs = dict ();
/* 000532 */ 		if (arguments.length) {
/* 000532 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000532 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000532 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000532 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000532 */ 					switch (__attrib0__) {
/* 000532 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000532 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000532 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000532 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000532 */ 					}
/* 000532 */ 				}
/* 000532 */ 				delete kwargs.__kwargtrans__;
/* 000532 */ 			}
/* 000532 */ 		}
/* 000532 */ 		else {
/* 000532 */ 		}
/* 000533 */ 		var nodeargd = (function () {
/* 000533 */ 			var __accu0__ = kwargs;
/* 000533 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'nodeargd', __call__ (ParsedArguments, null));
/* 000533 */ 		}) ();
/* 000534 */ 		var spec = (function () {
/* 000534 */ 			var __accu0__ = kwargs;
/* 000534 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'spec', null);
/* 000534 */ 		}) ();
/* 000539 */ 		__call__ (__call__ (__super__, null, LatexEnvironmentNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['environmentname', 'spec', 'nodelist', 'nodeargd']), _redundant_fields: tuple (['envname', 'optargs', 'args'])}, kwargs)));
/* 000544 */ 		self.environmentname = environmentname;
/* 000545 */ 		self.spec = spec;
/* 000546 */ 		self.nodelist = nodelist;
/* 000547 */ 		self.nodeargd = nodeargd;
/* 000547 */ 	});},
/* 000554 */ 	get _get_envname () {return __get__ (this, function (self) {
/* 000554 */ 		if (arguments.length) {
/* 000554 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000554 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000554 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000554 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000554 */ 					switch (__attrib0__) {
/* 000554 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000554 */ 					}
/* 000554 */ 				}
/* 000554 */ 			}
/* 000554 */ 		}
/* 000554 */ 		else {
/* 000554 */ 		}
/* 000556 */ 		return self.environmentname;
/* 000556 */ 	});},
/* 000565 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000565 */ 		if (arguments.length) {
/* 000565 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000565 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000565 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000565 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000565 */ 					switch (__attrib0__) {
/* 000565 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000565 */ 					}
/* 000565 */ 				}
/* 000565 */ 			}
/* 000565 */ 		}
/* 000565 */ 		else {
/* 000565 */ 		}
/* 000566 */ 		return LatexEnvironmentNode;
/* 000566 */ 	});},
/* 000568 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000568 */ 		if (arguments.length) {
/* 000568 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000568 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000568 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000568 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000568 */ 					switch (__attrib0__) {
/* 000568 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000568 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000568 */ 					}
/* 000568 */ 				}
/* 000568 */ 			}
/* 000568 */ 		}
/* 000568 */ 		else {
/* 000568 */ 		}
/* 000569 */ 		if (__t__ (self.nodeargd !== null)) {
/* 000570 */ 			(function () {
/* 000570 */ 				var __accu0__ = self.nodeargd;
/* 000570 */ 				return __call__ (__accu0__.accept_node_visitor, __accu0__, visitor);
/* 000570 */ 			}) ();
/* 000570 */ 		}
/* 000571 */ 		if (__t__ (self.nodelist !== null)) {
/* 000572 */ 			var __iterable0__ = self.nodelist;
/* 000572 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000572 */ 				var node = __getitem__ (__iterable0__, __index0__);
/* 000573 */ 				if (__t__ (node !== null)) {
/* 000574 */ 					(function () {
/* 000574 */ 						var __accu0__ = node;
/* 000574 */ 						return __call__ (__accu0__.accept_node_visitor, __accu0__, visitor);
/* 000574 */ 					}) ();
/* 000574 */ 				}
/* 000574 */ 			}
/* 000574 */ 		}
/* 000575 */ 		(function () {
/* 000575 */ 			var __accu0__ = visitor;
/* 000575 */ 			return __call__ (__accu0__.visit_environment_node, __accu0__, self);
/* 000575 */ 		}) ();
/* 000575 */ 	});}
/* 000575 */ });
/* 000575 */ Object.defineProperty (LatexEnvironmentNode, 'envname', property.call (LatexEnvironmentNode, LatexEnvironmentNode._get_envname));;
/* 000579 */ export var LatexSpecialsNode =  __class__ ('LatexSpecialsNode', [LatexNode], {
/* 000579 */ 	__module__: __name__,
/* 000617 */ 	get __init__ () {return __get__ (this, function (self, specials_chars) {
/* 000617 */ 		var kwargs = dict ();
/* 000617 */ 		if (arguments.length) {
/* 000617 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000617 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000617 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000617 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000617 */ 					switch (__attrib0__) {
/* 000617 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000617 */ 						case 'specials_chars': var specials_chars = __allkwargs0__ [__attrib0__]; break;
/* 000617 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000617 */ 					}
/* 000617 */ 				}
/* 000617 */ 				delete kwargs.__kwargtrans__;
/* 000617 */ 			}
/* 000617 */ 		}
/* 000617 */ 		else {
/* 000617 */ 		}
/* 000619 */ 		var spec = (function () {
/* 000619 */ 			var __accu0__ = kwargs;
/* 000619 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'spec', null);
/* 000619 */ 		}) ();
/* 000620 */ 		var nodeargd = (function () {
/* 000620 */ 			var __accu0__ = kwargs;
/* 000620 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'nodeargd', null);
/* 000620 */ 		}) ();
/* 000622 */ 		__call__ (__call__ (__super__, null, LatexSpecialsNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['specials_chars', 'spec', 'nodeargd'])}, kwargs)));
/* 000626 */ 		self.specials_chars = specials_chars;
/* 000627 */ 		self.spec = spec;
/* 000628 */ 		self.nodeargd = nodeargd;
/* 000628 */ 	});},
/* 000630 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000630 */ 		if (arguments.length) {
/* 000630 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000630 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000630 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000630 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000630 */ 					switch (__attrib0__) {
/* 000630 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000630 */ 					}
/* 000630 */ 				}
/* 000630 */ 			}
/* 000630 */ 		}
/* 000630 */ 		else {
/* 000630 */ 		}
/* 000631 */ 		return LatexSpecialsNode;
/* 000631 */ 	});},
/* 000633 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000633 */ 		if (arguments.length) {
/* 000633 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000633 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000633 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000633 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000633 */ 					switch (__attrib0__) {
/* 000633 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000633 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000633 */ 					}
/* 000633 */ 				}
/* 000633 */ 			}
/* 000633 */ 		}
/* 000633 */ 		else {
/* 000633 */ 		}
/* 000634 */ 		if (__t__ (self.nodeargd !== null)) {
/* 000635 */ 			(function () {
/* 000635 */ 				var __accu0__ = self.nodeargd;
/* 000635 */ 				return __call__ (__accu0__.accept_node_visitor, __accu0__, visitor);
/* 000635 */ 			}) ();
/* 000635 */ 		}
/* 000636 */ 		(function () {
/* 000636 */ 			var __accu0__ = visitor;
/* 000636 */ 			return __call__ (__accu0__.visit_specials_node, __accu0__, self);
/* 000636 */ 		}) ();
/* 000636 */ 	});}
/* 000636 */ });
/* 000639 */ export var LatexMathNode =  __class__ ('LatexMathNode', [LatexNode], {
/* 000639 */ 	__module__: __name__,
/* 000665 */ 	get __init__ () {return __get__ (this, function (self, displaytype, nodelist) {
/* 000665 */ 		if (typeof nodelist == 'undefined' || (nodelist != null && nodelist.hasOwnProperty ("__kwargtrans__"))) {;
/* 000665 */ 			var nodelist = [];
/* 000665 */ 		};
/* 000665 */ 		var kwargs = dict ();
/* 000665 */ 		if (arguments.length) {
/* 000665 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000665 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000665 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000665 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000665 */ 					switch (__attrib0__) {
/* 000665 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000665 */ 						case 'displaytype': var displaytype = __allkwargs0__ [__attrib0__]; break;
/* 000665 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000665 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000665 */ 					}
/* 000665 */ 				}
/* 000665 */ 				delete kwargs.__kwargtrans__;
/* 000665 */ 			}
/* 000665 */ 		}
/* 000665 */ 		else {
/* 000665 */ 		}
/* 000666 */ 		var delimiters = (function () {
/* 000666 */ 			var __accu0__ = kwargs;
/* 000666 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'delimiters', tuple ([null, null]));
/* 000666 */ 		}) ();
/* 000668 */ 		__call__ (__call__ (__super__, null, LatexMathNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['displaytype', 'nodelist', 'delimiters'])}, kwargs)));
/* 000673 */ 		self.displaytype = displaytype;
/* 000674 */ 		self.nodelist = nodelist;
/* 000675 */ 		self.delimiters = delimiters;
/* 000675 */ 	});},
/* 000677 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000677 */ 		if (arguments.length) {
/* 000677 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000677 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000677 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000677 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000677 */ 					switch (__attrib0__) {
/* 000677 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000677 */ 					}
/* 000677 */ 				}
/* 000677 */ 			}
/* 000677 */ 		}
/* 000677 */ 		else {
/* 000677 */ 		}
/* 000678 */ 		return LatexMathNode;
/* 000678 */ 	});},
/* 000681 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000681 */ 		if (arguments.length) {
/* 000681 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000681 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000681 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000681 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000681 */ 					switch (__attrib0__) {
/* 000681 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000681 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000681 */ 					}
/* 000681 */ 				}
/* 000681 */ 			}
/* 000681 */ 		}
/* 000681 */ 		else {
/* 000681 */ 		}
/* 000682 */ 		if (__t__ (self.nodelist !== null)) {
/* 000683 */ 			var __iterable0__ = self.nodelist;
/* 000683 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000683 */ 				var node = __getitem__ (__iterable0__, __index0__);
/* 000684 */ 				if (__t__ (node !== null)) {
/* 000685 */ 					(function () {
/* 000685 */ 						var __accu0__ = node;
/* 000685 */ 						return __call__ (__accu0__.accept_node_visitor, __accu0__, visitor);
/* 000685 */ 					}) ();
/* 000685 */ 				}
/* 000685 */ 			}
/* 000685 */ 		}
/* 000686 */ 		(function () {
/* 000686 */ 			var __accu0__ = visitor;
/* 000686 */ 			return __call__ (__accu0__.visit_math_node, __accu0__, self);
/* 000686 */ 		}) ();
/* 000686 */ 	});}
/* 000686 */ });
/* 000694 */ export var LatexNodeList =  __class__ ('LatexNodeList', [object], {
/* 000694 */ 	__module__: __name__,
/* 000732 */ 	get __init__ () {return __get__ (this, function (self, nodelist) {
/* 000732 */ 		var kwargs = dict ();
/* 000732 */ 		if (arguments.length) {
/* 000732 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000732 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000732 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000732 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000732 */ 					switch (__attrib0__) {
/* 000732 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000732 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000732 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000732 */ 					}
/* 000732 */ 				}
/* 000732 */ 				delete kwargs.__kwargtrans__;
/* 000732 */ 			}
/* 000732 */ 		}
/* 000732 */ 		else {
/* 000732 */ 		}
/* 000734 */ 		if (__t__ (__call__ (isinstance, null, nodelist, LatexNodeList))) {
/* 000735 */ 			var obj = nodelist;
/* 000736 */ 			self.nodelist = obj.nodelist;
/* 000737 */ 			self.parsing_state = obj.parsing_state;
/* 000738 */ 			self.latex_walker = obj.latex_walker;
/* 000739 */ 			self.pos = obj.pos;
/* 000740 */ 			self.pos_end = obj.pos_end;
/* 000741 */ 			return ;
/* 000741 */ 		}
/* 000743 */ 		self.nodelist = nodelist;
/* 000745 */ 		if (__t__ (self.nodelist === null)) {
/* 000746 */ 			(function () {
/* 000746 */ 				var __accu0__ = logger;
/* 000746 */ 				return __call__ (__accu0__.warning, __accu0__, "You're creating a LatexNodeList with nodelist=None. That's likely to cause crashes!");
/* 000746 */ 			}) ();
/* 000746 */ 		}
/* 000749 */ 		self.parsing_state = (function () {
/* 000749 */ 			var __accu0__ = kwargs;
/* 000749 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'parsing_state', null);
/* 000749 */ 		}) ();
/* 000750 */ 		self.latex_walker = (function () {
/* 000750 */ 			var __accu0__ = kwargs;
/* 000750 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'latex_walker', null);
/* 000750 */ 		}) ();
/* 000751 */ 		self.pos = (function () {
/* 000751 */ 			var __accu0__ = kwargs;
/* 000751 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'pos', null);
/* 000751 */ 		}) ();
/* 000752 */ 		self.pos_end = (function () {
/* 000752 */ 			var __accu0__ = kwargs;
/* 000752 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'pos_end', null);
/* 000752 */ 		}) ();
/* 000754 */ 		if (__t__ (kwargs)) {
/* 000756 */ 			var __except0__ = __call__ (ValueError, null, __add__ ('Unexpected keyword arguments to LatexNodeList: ', __call__ (repr, null, kwargs)));
/* 000756 */ 			__except0__.__cause__ = null;
/* 000756 */ 			throw __except0__;
/* 000756 */ 		}
/* 000759 */ 		var __left0__ = __call__ (_update_posposend_from_nodelist, null, self.pos, self.pos_end, self.nodelist);
/* 000759 */ 		self.pos = __left0__ [0];
/* 000759 */ 		self.pos_end = __left0__ [1];
/* 000759 */ 	});},
/* 000763 */ 	get _get_len () {return __get__ (this, function (self) {
/* 000763 */ 		if (arguments.length) {
/* 000763 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000763 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000763 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000763 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000763 */ 					switch (__attrib0__) {
/* 000763 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000763 */ 					}
/* 000763 */ 				}
/* 000763 */ 			}
/* 000763 */ 		}
/* 000763 */ 		else {
/* 000763 */ 		}
/* 000764 */ 		if (__t__ (__t__ (self.pos === null) || self.pos_end === null)) {
/* 000765 */ 			return null;
/* 000765 */ 		}
/* 000766 */ 		return __sub__ (self.pos_end, self.pos);
/* 000766 */ 	});},
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
/* 000770 */ 		if (__t__ (__t__ (__call__ (isinstance, null, index, int)) && __lt__ (index, 0))) {
/* 000773 */ 			var index = __add__ (__call__ (len, null, self.nodelist), index);
/* 000773 */ 		}
/* 000774 */ 		return __getitem__ (self.nodelist, index);
/* 000774 */ 	});},
/* 000776 */ 	get __len__ () {return __get__ (this, function (self) {
/* 000776 */ 		if (arguments.length) {
/* 000776 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000776 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000776 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000776 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000776 */ 					switch (__attrib0__) {
/* 000776 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000776 */ 					}
/* 000776 */ 				}
/* 000776 */ 			}
/* 000776 */ 		}
/* 000776 */ 		else {
/* 000776 */ 		}
/* 000777 */ 		return __call__ (len, null, self.nodelist);
/* 000777 */ 	});},
/* 000780 */ 	get latex_verbatim () {return __get__ (this, function (self) {
/* 000780 */ 		if (arguments.length) {
/* 000780 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000780 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000780 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000780 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000780 */ 					switch (__attrib0__) {
/* 000780 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000780 */ 					}
/* 000780 */ 				}
/* 000780 */ 			}
/* 000780 */ 		}
/* 000780 */ 		else {
/* 000780 */ 		}
/* 000787 */ 		return (function () {
/* 000787 */ 			var __accu0__ = '';
/* 000787 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000787 */ 				var __accu1__ = [];
/* 000787 */ 				var __iterable0__ = self.nodelist;
/* 000787 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000789 */ 					var n = __getitem__ (__iterable0__, __index0__);
/* 000789 */ 					if (__t__ (n !== null)) {
/* 000790 */ 						(function () {
/* 000790 */ 							var __accu2__ = __accu1__;
/* 000788 */ 							return __call__ (__accu2__.append, __accu2__, (function () {
/* 000788 */ 								var __accu3__ = n;
/* 000788 */ 								return __call__ (__accu3__.latex_verbatim, __accu3__);
/* 000788 */ 							}) ());
/* 000788 */ 						}) ();
/* 000788 */ 					}
/* 000788 */ 				}
/* 000788 */ 				return __accu1__;
/* 000788 */ 			}) ());
/* 000788 */ 		}) ();
/* 000788 */ 	});},
/* 000794 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000794 */ 		if (arguments.length) {
/* 000794 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000794 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000794 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000794 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000794 */ 					switch (__attrib0__) {
/* 000794 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000794 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000794 */ 					}
/* 000794 */ 				}
/* 000794 */ 			}
/* 000794 */ 		}
/* 000794 */ 		else {
/* 000794 */ 		}
/* 000795 */ 		if (__t__ (self.nodelist !== null)) {
/* 000796 */ 			var __iterable0__ = self.nodelist;
/* 000796 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000796 */ 				var node = __getitem__ (__iterable0__, __index0__);
/* 000797 */ 				if (__t__ (node !== null)) {
/* 000798 */ 					(function () {
/* 000798 */ 						var __accu0__ = node;
/* 000798 */ 						return __call__ (__accu0__.accept_node_visitor, __accu0__, visitor);
/* 000798 */ 					}) ();
/* 000798 */ 				}
/* 000798 */ 			}
/* 000798 */ 		}
/* 000799 */ 		(function () {
/* 000799 */ 			var __accu0__ = visitor;
/* 000799 */ 			return __call__ (__accu0__.visit_node_list, __accu0__, self);
/* 000799 */ 		}) ();
/* 000799 */ 	});},
/* 000802 */ 	get split_at_node () {return __get__ (this, function (self, node_predicate_fn, skip_none, keep_separators, max_split) {
/* 000802 */ 		if (typeof skip_none == 'undefined' || (skip_none != null && skip_none.hasOwnProperty ("__kwargtrans__"))) {;
/* 000802 */ 			var skip_none = true;
/* 000802 */ 		};
/* 000802 */ 		if (typeof keep_separators == 'undefined' || (keep_separators != null && keep_separators.hasOwnProperty ("__kwargtrans__"))) {;
/* 000802 */ 			var keep_separators = false;
/* 000802 */ 		};
/* 000802 */ 		if (typeof max_split == 'undefined' || (max_split != null && max_split.hasOwnProperty ("__kwargtrans__"))) {;
/* 000802 */ 			var max_split = null;
/* 000802 */ 		};
/* 000802 */ 		if (arguments.length) {
/* 000802 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000802 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000802 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000802 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000802 */ 					switch (__attrib0__) {
/* 000802 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000802 */ 						case 'node_predicate_fn': var node_predicate_fn = __allkwargs0__ [__attrib0__]; break;
/* 000802 */ 						case 'skip_none': var skip_none = __allkwargs0__ [__attrib0__]; break;
/* 000802 */ 						case 'keep_separators': var keep_separators = __allkwargs0__ [__attrib0__]; break;
/* 000802 */ 						case 'max_split': var max_split = __allkwargs0__ [__attrib0__]; break;
/* 000802 */ 					}
/* 000802 */ 				}
/* 000802 */ 			}
/* 000802 */ 		}
/* 000802 */ 		else {
/* 000802 */ 		}
/* 000805 */ 		var nodelists_list = [[]];
/* 000807 */ 		if (__t__ (__t__ (max_split !== null) && __eq__ (max_split, 0))) {
/* 000808 */ 			var no_more_splits = true;
/* 000808 */ 		}
/* 000809 */ 		else {
/* 000810 */ 			var no_more_splits = false;
/* 000810 */ 		}
/* 000812 */ 		var __iterable0__ = self.nodelist;
/* 000812 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000812 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000813 */ 			if (__t__ (__t__ (skip_none) && n === null)) {
/* 000813 */ 				continue;
/* 000813 */ 			}
/* 000815 */ 			if (__t__ (__t__ (!__t__ ((no_more_splits))) && __call__ (node_predicate_fn, null, n))) {
/* 000816 */ 				if (__t__ (keep_separators)) {
/* 000817 */ 					(function () {
/* 000817 */ 						var __accu0__ = nodelists_list;
/* 000817 */ 						return __call__ (__accu0__.append, __accu0__, [n]);
/* 000817 */ 					}) ();
/* 000817 */ 				}
/* 000818 */ 				else {
/* 000819 */ 					(function () {
/* 000819 */ 						var __accu0__ = nodelists_list;
/* 000819 */ 						return __call__ (__accu0__.append, __accu0__, []);
/* 000819 */ 					}) ();
/* 000819 */ 				}
/* 000821 */ 				if (__t__ (__t__ (max_split !== null) && __ge__ (__call__ (len, null, nodelists_list), max_split))) {
/* 000822 */ 					var no_more_splits = true;
/* 000822 */ 				}
/* 000822 */ 			}
/* 000823 */ 			else {
/* 000824 */ 				(function () {
/* 000824 */ 					var __accu0__ = __getitem__ (nodelists_list, __sub__ (__call__ (len, null, nodelists_list), 1));
/* 000824 */ 					return __call__ (__accu0__.append, __accu0__, n);
/* 000824 */ 				}) ();
/* 000824 */ 			}
/* 000824 */ 		}
/* 000826 */ 		if (__t__ (self.latex_walker !== null)) {
/* 000827 */ 			var make_latex_node_list = self.latex_walker.make_nodelist;
/* 000827 */ 		}
/* 000828 */ 		else {
/* 000829 */ 			var make_latex_node_list = (function __lambda__ (nl) {
/* 000829 */ 				var kwargs = dict ();
/* 000829 */ 				if (arguments.length) {
/* 000829 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000829 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000829 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000829 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000829 */ 							switch (__attrib0__) {
/* 000829 */ 								case 'nl': var nl = __allkwargs0__ [__attrib0__]; break;
/* 000829 */ 								default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000829 */ 							}
/* 000829 */ 						}
/* 000829 */ 						delete kwargs.__kwargtrans__;
/* 000829 */ 					}
/* 000829 */ 				}
/* 000829 */ 				else {
/* 000829 */ 				}
/* 000829 */ 				return __call__ (LatexNodeList, null, nl, __kwargtrans__ (kwargs));
/* 000829 */ 			});
/* 000829 */ 		}
/* 000831 */ 		return (function () {
/* 000831 */ 			var __accu0__ = [];
/* 000831 */ 			var __iterable0__ = nodelists_list;
/* 000831 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000833 */ 				var nl = __getitem__ (__iterable0__, __index0__);
/* 000833 */ 				(function () {
/* 000833 */ 					var __accu1__ = __accu0__;
/* 000832 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (make_latex_node_list, null, nl, __kwargtrans__ ({parsing_state: self.parsing_state})));
/* 000832 */ 				}) ();
/* 000832 */ 			}
/* 000832 */ 			return __accu0__;
/* 000832 */ 		}) ();
/* 000832 */ 	});},
/* 000836 */ 	get split_at_chars () {return __get__ (this, function (self, sep_chars) {
/* 000836 */ 		if (arguments.length) {
/* 000836 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000836 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000836 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000836 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000836 */ 					switch (__attrib0__) {
/* 000836 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000836 */ 						case 'sep_chars': var sep_chars = __allkwargs0__ [__attrib0__]; break;
/* 000836 */ 					}
/* 000836 */ 				}
/* 000836 */ 			}
/* 000836 */ 		}
/* 000836 */ 		else {
/* 000836 */ 		}
/* 000868 */ 		var split_node_lists = [];
/* 000870 */ 		if (__t__ (__call__ (callable, null, sep_chars))) {
/* 000871 */ 			var sep_chars_fn = sep_chars;
/* 000871 */ 		}
/* 000872 */ 		else {
/* 000873 */ 			var sep_chars_fn = (function __lambda__ (chars, sep_chars) {
/* 000873 */ 				if (typeof sep_chars == 'undefined' || (sep_chars != null && sep_chars.hasOwnProperty ("__kwargtrans__"))) {;
/* 000873 */ 					var sep_chars = sep_chars;
/* 000873 */ 				};
/* 000873 */ 				if (arguments.length) {
/* 000873 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000873 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000873 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000873 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000873 */ 							switch (__attrib0__) {
/* 000873 */ 								case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000873 */ 								case 'sep_chars': var sep_chars = __allkwargs0__ [__attrib0__]; break;
/* 000873 */ 							}
/* 000873 */ 						}
/* 000873 */ 					}
/* 000873 */ 				}
/* 000873 */ 				else {
/* 000873 */ 				}
/* 000873 */ 				return (function () {
/* 000873 */ 					var __accu0__ = chars;
/* 000873 */ 					return __call__ (__accu0__.py_split, __accu0__, sep_chars);
/* 000873 */ 				}) ();
/* 000873 */ 			});
/* 000873 */ 		}
/* 000875 */ 		var lw = self.latex_walker;
/* 000876 */ 		if (__t__ (lw !== null)) {
/* 000877 */ 			var make_node = lw.make_node;
/* 000877 */ 		}
/* 000878 */ 		else {
/* 000879 */ 			var make_node = (function __lambda__ (cls) {
/* 000879 */ 				var kwargs = dict ();
/* 000879 */ 				if (arguments.length) {
/* 000879 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000879 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000879 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000879 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000879 */ 							switch (__attrib0__) {
/* 000879 */ 								case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000879 */ 								default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000879 */ 							}
/* 000879 */ 						}
/* 000879 */ 						delete kwargs.__kwargtrans__;
/* 000879 */ 					}
/* 000879 */ 				}
/* 000879 */ 				else {
/* 000879 */ 				}
/* 000879 */ 				return __call__ (cls, null, __kwargtrans__ (kwargs));
/* 000879 */ 			});
/* 000879 */ 		}
/* 000881 */ 		var chars_to_node = function (chars, orig_node, rel_pos) {
/* 000881 */ 			if (arguments.length) {
/* 000881 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000881 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000881 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000881 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000881 */ 						switch (__attrib0__) {
/* 000881 */ 							case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000881 */ 							case 'orig_node': var orig_node = __allkwargs0__ [__attrib0__]; break;
/* 000881 */ 							case 'rel_pos': var rel_pos = __allkwargs0__ [__attrib0__]; break;
/* 000881 */ 						}
/* 000881 */ 					}
/* 000881 */ 				}
/* 000881 */ 			}
/* 000881 */ 			else {
/* 000881 */ 			}
/* 000882 */ 			var pos = __add__ (orig_node.pos, rel_pos);
/* 000886 */ 			return __call__ (make_node, null, LatexCharsNode, __kwargtrans__ ({parsing_state: self.parsing_state, pos: pos, pos_end: __add__ (pos, __call__ (len, null, chars)), chars: chars}));
/* 000886 */ 		};
/* 000889 */ 		var pending_nodes = [];
/* 000891 */ 		var __iterable0__ = self.nodelist;
/* 000891 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000891 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000892 */ 			if (__t__ ((function () {
/* 000892 */ 				var __accu0__ = n;
/* 000892 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexwalker.LatexCharsNode);
/* 000892 */ 			}) ())) {
/* 000893 */ 				var parts = __call__ (sep_chars_fn, null, n.chars);
/* 000894 */ 				var rel_pos = 0;
/* 000895 */ 				if (__t__ (__getitem__ (parts, 0))) {
/* 000896 */ 					(function () {
/* 000896 */ 						var __accu0__ = pending_nodes;
/* 000896 */ 						return __call__ (__accu0__.append, __accu0__, __call__ (chars_to_node, null, __getitem__ (parts, 0), n, 0));
/* 000896 */ 					}) ();
/* 000897 */ 					var rel_pos = __call__ (len, null, __getitem__ (parts, 0));
/* 000898 */ 					var parts = __getslice__ (parts, 1, null, 1);
/* 000898 */ 				}
/* 000899 */ 				if (__t__ (!__t__ ((parts)))) {
/* 000899 */ 					continue;
/* 000899 */ 				}
/* 000902 */ 				if (__t__ (pending_nodes)) {
/* 000903 */ 					(function () {
/* 000903 */ 						var __accu0__ = split_node_lists;
/* 000903 */ 						return __call__ (__accu0__.append, __accu0__, pending_nodes);
/* 000903 */ 					}) ();
/* 000904 */ 					var pending_nodes = [];
/* 000904 */ 				}
/* 000905 */ 				var __iterable1__ = parts;
/* 000905 */ 				for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000905 */ 					var p = __getitem__ (__iterable1__, __index1__);
/* 000906 */ 					(function () {
/* 000906 */ 						var __accu0__ = split_node_lists;
/* 000906 */ 						return __call__ (__accu0__.append, __accu0__, [__call__ (chars_to_node, null, p, n, rel_pos)]);
/* 000906 */ 					}) ();
/* 000907 */ 					var rel_pos = __call__ (__iadd__, null, rel_pos, __call__ (len, null, p));
/* 000907 */ 				}
/* 000907 */ 				continue;
/* 000907 */ 			}
/* 000911 */ 			(function () {
/* 000911 */ 				var __accu0__ = pending_nodes;
/* 000911 */ 				return __call__ (__accu0__.append, __accu0__, n);
/* 000911 */ 			}) ();
/* 000911 */ 		}
/* 000913 */ 		if (__t__ (pending_nodes)) {
/* 000914 */ 			(function () {
/* 000914 */ 				var __accu0__ = split_node_lists;
/* 000914 */ 				return __call__ (__accu0__.append, __accu0__, pending_nodes);
/* 000914 */ 			}) ();
/* 000914 */ 		}
/* 000916 */ 		return split_node_lists;
/* 000916 */ 	});},
/* 000919 */ 	get get_content_as_chars () {return __get__ (this, function (self) {
/* 000919 */ 		if (arguments.length) {
/* 000919 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000919 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000919 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000919 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000919 */ 					switch (__attrib0__) {
/* 000919 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000919 */ 					}
/* 000919 */ 				}
/* 000919 */ 			}
/* 000919 */ 		}
/* 000919 */ 		else {
/* 000919 */ 		}
/* 000934 */ 		return __call__ (_get_content_as_chars, null, self.nodelist);
/* 000934 */ 	});},
/* 000938 */ 	get __eq__ () {return __get__ (this, function (self, other) {
/* 000938 */ 		if (arguments.length) {
/* 000938 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000938 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000938 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000938 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000938 */ 					switch (__attrib0__) {
/* 000938 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000938 */ 						case 'other': var other = __allkwargs0__ [__attrib0__]; break;
/* 000938 */ 					}
/* 000938 */ 				}
/* 000938 */ 			}
/* 000938 */ 		}
/* 000938 */ 		else {
/* 000938 */ 		}
/* 000939 */ 		if (__t__ (__call__ (isinstance, null, other, list))) {
/* 000940 */ 			return __eq__ (self.nodelist, other);
/* 000940 */ 		}
/* 000941 */ 		return __t__ (__eq__ (self.nodelist, other.nodelist)) && __t__ ((__t__ (__t__ (self.pos === null) && other.pos === null) || __eq__ (self.pos, other.pos))) && (__t__ (__t__ (self.pos_end === null) && other.pos_end === null) || __eq__ (self.pos_end, other.pos_end));
/* 000941 */ 	});},
/* 000950 */ 	get to_json_object () {return __get__ (this, function (self) {
/* 000950 */ 		if (arguments.length) {
/* 000950 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000950 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000950 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000950 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000950 */ 					switch (__attrib0__) {
/* 000950 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000950 */ 					}
/* 000950 */ 				}
/* 000950 */ 			}
/* 000950 */ 		}
/* 000950 */ 		else {
/* 000950 */ 		}
/* 000951 */ 		return self.nodelist;
/* 000951 */ 	});},
/* 000953 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000953 */ 		if (arguments.length) {
/* 000953 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000953 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000953 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000953 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000953 */ 					switch (__attrib0__) {
/* 000953 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000953 */ 					}
/* 000953 */ 				}
/* 000953 */ 			}
/* 000953 */ 		}
/* 000953 */ 		else {
/* 000953 */ 		}
/* 000954 */ 		return (function () {
/* 000954 */ 			var __accu0__ = 'LatexNodeList({nodelist!r}, pos={pos!r}, pos_end={pos_end!r})';
/* 000954 */ 			return __call__ (__accu0__.format, __accu0__, __kwargtrans__ ({nodelist: self.nodelist, pos: self.pos, pos_end: self.pos_end}));
/* 000954 */ 		}) ();
/* 000954 */ 	});}
/* 000954 */ });
/* 000954 */ Object.defineProperty (LatexNodeList, 'len', property.call (LatexNodeList, LatexNodeList._get_len));;
/* 000962 */ export var _get_content_as_chars = function (nodelist) {
/* 000962 */ 	if (arguments.length) {
/* 000962 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000962 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000962 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000962 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000962 */ 				switch (__attrib0__) {
/* 000962 */ 					case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000962 */ 				}
/* 000962 */ 			}
/* 000962 */ 		}
/* 000962 */ 	}
/* 000962 */ 	else {
/* 000962 */ 	}
/* 000968 */ 	if (__t__ (nodelist === null)) {
/* 000969 */ 		return '';
/* 000969 */ 	}
/* 000971 */ 	var charslist = [];
/* 000973 */ 	var __iterable0__ = nodelist;
/* 000973 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000973 */ 		var n = __getitem__ (__iterable0__, __index0__);
/* 000975 */ 		if (__t__ (n === null)) {
/* 000975 */ 			continue;
/* 000975 */ 		}
/* 000978 */ 		if (__t__ ((function () {
/* 000978 */ 			var __accu0__ = n;
/* 000978 */ 			return __call__ (__accu0__.isNodeType, __accu0__, LatexCommentNode);
/* 000978 */ 		}) ())) {
/* 000978 */ 			continue;
/* 000978 */ 		}
/* 000982 */ 		if (__t__ ((function () {
/* 000982 */ 			var __accu0__ = n;
/* 000982 */ 			return __call__ (__accu0__.isNodeType, __accu0__, LatexGroupNode);
/* 000982 */ 		}) ())) {
/* 000984 */ 			(function () {
/* 000984 */ 				var __accu0__ = charslist;
/* 000984 */ 				return __call__ (__accu0__.append, __accu0__, __call__ (_get_content_as_chars, null, n.nodelist));
/* 000984 */ 			}) ();
/* 000984 */ 			continue;
/* 000984 */ 		}
/* 000987 */ 		if (__t__ ((function () {
/* 000987 */ 			var __accu0__ = n;
/* 000987 */ 			return __call__ (__accu0__.isNodeType, __accu0__, LatexCharsNode);
/* 000987 */ 		}) ())) {
/* 000988 */ 			(function () {
/* 000988 */ 				var __accu0__ = charslist;
/* 000988 */ 				return __call__ (__accu0__.append, __accu0__, n.chars);
/* 000988 */ 			}) ();
/* 000988 */ 			continue;
/* 000988 */ 		}
/* 000992 */ 		var __except0__ = __call__ (LatexWalkerParseError, null, (function () {
/* 000992 */ 			var __accu0__ = 'Expected simple characters only, got ‘{}’';
/* 000992 */ 			return __call__ (__accu0__.format, __accu0__, n.__class__.__name__);
/* 000992 */ 		}) (), __kwargtrans__ ({pos: n.pos}));
/* 000992 */ 		__except0__.__cause__ = null;
/* 000992 */ 		throw __except0__;
/* 000992 */ 	}
/* 000996 */ 	return (function () {
/* 000996 */ 		var __accu0__ = '';
/* 000996 */ 		return __call__ (__accu0__.join, __accu0__, charslist);
/* 000996 */ 	}) ();
/* 000996 */ };
/* 001003 */ export var _update_posposend_from_nodelist = function (pos, pos_end, nodelist) {
/* 001003 */ 	if (arguments.length) {
/* 001003 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001003 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001003 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001003 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001003 */ 				switch (__attrib0__) {
/* 001003 */ 					case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 001003 */ 					case 'pos_end': var pos_end = __allkwargs0__ [__attrib0__]; break;
/* 001003 */ 					case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 001003 */ 				}
/* 001003 */ 			}
/* 001003 */ 		}
/* 001003 */ 	}
/* 001003 */ 	else {
/* 001003 */ 	}
/* 001005 */ 	if (__t__ (pos === null)) {
/* 001006 */ 		var __break0__ = false;
/* 001006 */ 		var __iterable0__ = nodelist;
/* 001006 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001006 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 001007 */ 			if (__t__ (n !== null)) {
/* 001008 */ 				var pos = n.pos;
/* 001008 */ 				__break0__ = true;
/* 001008 */ 				break;
/* 001008 */ 			}
/* 001008 */ 		}
/* 001010 */ 		if (!__break0__) {
/* 001011 */ 			var pos = null;
/* 001011 */ 		}
/* 001011 */ 	}
/* 001013 */ 	if (__t__ (pos_end === null)) {
/* 001014 */ 		var __break0__ = false;
/* 001014 */ 		var __iterable0__ = __call__ (py_reversed, null, nodelist);
/* 001014 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001014 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 001015 */ 			if (__t__ (n !== null)) {
/* 001016 */ 				var pos_end = n.pos_end;
/* 001016 */ 				__break0__ = true;
/* 001016 */ 				break;
/* 001016 */ 			}
/* 001016 */ 		}
/* 001018 */ 		if (!__break0__) {
/* 001019 */ 			var pos_end = null;
/* 001019 */ 		}
/* 001019 */ 	}
/* 001021 */ 	return tuple ([pos, pos_end]);
/* 001021 */ };
/* 001029 */ export var LatexNodesVisitor =  __class__ ('LatexNodesVisitor', [object], {
/* 001029 */ 	__module__: __name__,
/* 001036 */ 	get visit () {return __get__ (this, function (self, node) {
/* 001036 */ 		if (arguments.length) {
/* 001036 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001036 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001036 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001036 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001036 */ 					switch (__attrib0__) {
/* 001036 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001036 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001036 */ 					}
/* 001036 */ 				}
/* 001036 */ 			}
/* 001036 */ 		}
/* 001036 */ 		else {
/* 001036 */ 		}
/* 001043 */ 		// pass;
/* 001043 */ 	});},
/* 001045 */ 	get visit_chars_node () {return __get__ (this, function (self, node) {
/* 001045 */ 		if (arguments.length) {
/* 001045 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001045 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001045 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001045 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001045 */ 					switch (__attrib0__) {
/* 001045 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001045 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001045 */ 					}
/* 001045 */ 				}
/* 001045 */ 			}
/* 001045 */ 		}
/* 001045 */ 		else {
/* 001045 */ 		}
/* 001046 */ 		(function () {
/* 001046 */ 			var __accu0__ = self;
/* 001046 */ 			return __call__ (__accu0__.visit, __accu0__, node);
/* 001046 */ 		}) ();
/* 001046 */ 	});},
/* 001048 */ 	get visit_group_node () {return __get__ (this, function (self, node) {
/* 001048 */ 		if (arguments.length) {
/* 001048 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001048 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001048 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001048 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001048 */ 					switch (__attrib0__) {
/* 001048 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001048 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001048 */ 					}
/* 001048 */ 				}
/* 001048 */ 			}
/* 001048 */ 		}
/* 001048 */ 		else {
/* 001048 */ 		}
/* 001049 */ 		(function () {
/* 001049 */ 			var __accu0__ = self;
/* 001049 */ 			return __call__ (__accu0__.visit, __accu0__, node);
/* 001049 */ 		}) ();
/* 001049 */ 	});},
/* 001051 */ 	get visit_comment_node () {return __get__ (this, function (self, node) {
/* 001051 */ 		if (arguments.length) {
/* 001051 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001051 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001051 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001051 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001051 */ 					switch (__attrib0__) {
/* 001051 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001051 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001051 */ 					}
/* 001051 */ 				}
/* 001051 */ 			}
/* 001051 */ 		}
/* 001051 */ 		else {
/* 001051 */ 		}
/* 001052 */ 		(function () {
/* 001052 */ 			var __accu0__ = self;
/* 001052 */ 			return __call__ (__accu0__.visit, __accu0__, node);
/* 001052 */ 		}) ();
/* 001052 */ 	});},
/* 001054 */ 	get visit_macro_node () {return __get__ (this, function (self, node) {
/* 001054 */ 		if (arguments.length) {
/* 001054 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001054 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001054 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001054 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001054 */ 					switch (__attrib0__) {
/* 001054 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001054 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001054 */ 					}
/* 001054 */ 				}
/* 001054 */ 			}
/* 001054 */ 		}
/* 001054 */ 		else {
/* 001054 */ 		}
/* 001055 */ 		(function () {
/* 001055 */ 			var __accu0__ = self;
/* 001055 */ 			return __call__ (__accu0__.visit, __accu0__, node);
/* 001055 */ 		}) ();
/* 001055 */ 	});},
/* 001057 */ 	get visit_environment_node () {return __get__ (this, function (self, node) {
/* 001057 */ 		if (arguments.length) {
/* 001057 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001057 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001057 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001057 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001057 */ 					switch (__attrib0__) {
/* 001057 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001057 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001057 */ 					}
/* 001057 */ 				}
/* 001057 */ 			}
/* 001057 */ 		}
/* 001057 */ 		else {
/* 001057 */ 		}
/* 001058 */ 		(function () {
/* 001058 */ 			var __accu0__ = self;
/* 001058 */ 			return __call__ (__accu0__.visit, __accu0__, node);
/* 001058 */ 		}) ();
/* 001058 */ 	});},
/* 001060 */ 	get visit_specials_node () {return __get__ (this, function (self, node) {
/* 001060 */ 		if (arguments.length) {
/* 001060 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001060 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001060 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001060 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001060 */ 					switch (__attrib0__) {
/* 001060 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001060 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001060 */ 					}
/* 001060 */ 				}
/* 001060 */ 			}
/* 001060 */ 		}
/* 001060 */ 		else {
/* 001060 */ 		}
/* 001061 */ 		(function () {
/* 001061 */ 			var __accu0__ = self;
/* 001061 */ 			return __call__ (__accu0__.visit, __accu0__, node);
/* 001061 */ 		}) ();
/* 001061 */ 	});},
/* 001063 */ 	get visit_math_node () {return __get__ (this, function (self, node) {
/* 001063 */ 		if (arguments.length) {
/* 001063 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001063 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001063 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001063 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001063 */ 					switch (__attrib0__) {
/* 001063 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001063 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001063 */ 					}
/* 001063 */ 				}
/* 001063 */ 			}
/* 001063 */ 		}
/* 001063 */ 		else {
/* 001063 */ 		}
/* 001064 */ 		(function () {
/* 001064 */ 			var __accu0__ = self;
/* 001064 */ 			return __call__ (__accu0__.visit, __accu0__, node);
/* 001064 */ 		}) ();
/* 001064 */ 	});},
/* 001066 */ 	get visit_node_list () {return __get__ (this, function (self, nodes) {
/* 001066 */ 		if (arguments.length) {
/* 001066 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001066 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001066 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001066 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001066 */ 					switch (__attrib0__) {
/* 001066 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001066 */ 						case 'nodes': var nodes = __allkwargs0__ [__attrib0__]; break;
/* 001066 */ 					}
/* 001066 */ 				}
/* 001066 */ 			}
/* 001066 */ 		}
/* 001066 */ 		else {
/* 001066 */ 		}
/* 001067 */ 		(function () {
/* 001067 */ 			var __accu0__ = self;
/* 001067 */ 			return __call__ (__accu0__.visit, __accu0__, nodes);
/* 001067 */ 		}) ();
/* 001067 */ 	});},
/* 001069 */ 	get visit_parsed_arguments () {return __get__ (this, function (self, parsed_args) {
/* 001069 */ 		if (arguments.length) {
/* 001069 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001069 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001069 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001069 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001069 */ 					switch (__attrib0__) {
/* 001069 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001069 */ 						case 'parsed_args': var parsed_args = __allkwargs0__ [__attrib0__]; break;
/* 001069 */ 					}
/* 001069 */ 				}
/* 001069 */ 			}
/* 001069 */ 		}
/* 001069 */ 		else {
/* 001069 */ 		}
/* 001070 */ 		(function () {
/* 001070 */ 			var __accu0__ = self;
/* 001070 */ 			return __call__ (__accu0__.visit, __accu0__, parsed_args);
/* 001070 */ 		}) ();
/* 001070 */ 	});},
/* 001073 */ 	get visit_unknown_node () {return __get__ (this, function (self, node) {
/* 001073 */ 		if (arguments.length) {
/* 001073 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001073 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001073 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001073 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001073 */ 					switch (__attrib0__) {
/* 001073 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001073 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001073 */ 					}
/* 001073 */ 				}
/* 001073 */ 			}
/* 001073 */ 		}
/* 001073 */ 		else {
/* 001073 */ 		}
/* 001074 */ 		(function () {
/* 001074 */ 			var __accu0__ = self;
/* 001074 */ 			return __call__ (__accu0__.visit, __accu0__, node);
/* 001074 */ 		}) ();
/* 001074 */ 	});},
/* 001079 */ 	get start () {return __get__ (this, function (self, node) {
/* 001079 */ 		if (arguments.length) {
/* 001079 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001079 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001079 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001079 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001079 */ 					switch (__attrib0__) {
/* 001079 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001079 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001079 */ 					}
/* 001079 */ 				}
/* 001079 */ 			}
/* 001079 */ 		}
/* 001079 */ 		else {
/* 001079 */ 		}
/* 001091 */ 		(function () {
/* 001091 */ 			var __accu0__ = node;
/* 001091 */ 			return __call__ (__accu0__.accept_node_visitor, __accu0__, self);
/* 001091 */ 		}) ();
/* 001091 */ 	});}
/* 001091 */ });
/* 000037 */ 
//# sourceMappingURL=pylatexenc.latexnodes.nodes.map