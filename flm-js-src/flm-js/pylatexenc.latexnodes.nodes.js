/* 000001 */ // Transcrypt'ed from Python, 2023-05-13 11:51:21
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
/* 000130 */ 	get __init__ () {return __get__ (this, function (self, _fields, _redundant_fields, parsing_state, pos, pos_end, latex_walker) {
/* 000130 */ 		if (typeof _redundant_fields == 'undefined' || (_redundant_fields != null && _redundant_fields.hasOwnProperty ("__kwargtrans__"))) {;
/* 000130 */ 			var _redundant_fields = null;
/* 000130 */ 		};
/* 000130 */ 		if (typeof parsing_state == 'undefined' || (parsing_state != null && parsing_state.hasOwnProperty ("__kwargtrans__"))) {;
/* 000130 */ 			var parsing_state = null;
/* 000130 */ 		};
/* 000130 */ 		if (typeof pos == 'undefined' || (pos != null && pos.hasOwnProperty ("__kwargtrans__"))) {;
/* 000130 */ 			var pos = null;
/* 000130 */ 		};
/* 000130 */ 		if (typeof pos_end == 'undefined' || (pos_end != null && pos_end.hasOwnProperty ("__kwargtrans__"))) {;
/* 000130 */ 			var pos_end = null;
/* 000130 */ 		};
/* 000130 */ 		if (typeof latex_walker == 'undefined' || (latex_walker != null && latex_walker.hasOwnProperty ("__kwargtrans__"))) {;
/* 000130 */ 			var latex_walker = null;
/* 000130 */ 		};
/* 000130 */ 		var kwargs = dict ();
/* 000130 */ 		if (arguments.length) {
/* 000130 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000130 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000130 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000130 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000130 */ 					switch (__attrib0__) {
/* 000130 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000130 */ 						case '_fields': var _fields = __allkwargs0__ [__attrib0__]; break;
/* 000130 */ 						case '_redundant_fields': var _redundant_fields = __allkwargs0__ [__attrib0__]; break;
/* 000130 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000130 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000130 */ 						case 'pos_end': var pos_end = __allkwargs0__ [__attrib0__]; break;
/* 000130 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000130 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000130 */ 					}
/* 000130 */ 				}
/* 000130 */ 				delete kwargs.__kwargtrans__;
/* 000130 */ 			}
/* 000130 */ 		}
/* 000130 */ 		else {
/* 000130 */ 		}
/* 000134 */ 		var len_ = (function () {
/* 000134 */ 			var __accu0__ = kwargs;
/* 000134 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'len', null);
/* 000134 */ 		}) ();
/* 000140 */ 		__call__ (__call__ (__super__, null, LatexNode, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000142 */ 		self.parsing_state = parsing_state;
/* 000143 */ 		self.latex_walker = latex_walker;
/* 000144 */ 		self.pos = pos;
/* 000145 */ 		self.pos_end = pos_end;
/* 000147 */ 		if (__t__ (__t__ (pos_end === null) && len_ !== null)) {
/* 000148 */ 			self.pos_end = __add__ (self.pos, len_);
/* 000148 */ 		}
/* 000151 */ 		self._fields = __call__ (tuple, null, __add__ (['pos', 'pos_end', 'parsing_state', 'latex_walker'], __call__ (list, null, _fields)));
/* 000152 */ 		if (__t__ (_redundant_fields !== null)) {
/* 000154 */ 			self._redundant_fields = __call__ (tuple, null, __add__ (__add__ (__call__ (list, null, self._fields), ['len']), __call__ (list, null, _redundant_fields)));
/* 000154 */ 		}
/* 000155 */ 		else {
/* 000156 */ 			self._redundant_fields = __call__ (tuple, null, __add__ (__call__ (list, null, self._fields), ['len']));
/* 000156 */ 		}
/* 000156 */ 	});},
/* 000158 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000158 */ 		if (arguments.length) {
/* 000158 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000158 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000158 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000158 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000158 */ 					switch (__attrib0__) {
/* 000158 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000158 */ 					}
/* 000158 */ 				}
/* 000158 */ 			}
/* 000158 */ 		}
/* 000158 */ 		else {
/* 000158 */ 		}
/* 000165 */ 		return LatexNode;
/* 000165 */ 	});},
/* 000167 */ 	get isNodeType () {return __get__ (this, function (self, t) {
/* 000167 */ 		if (arguments.length) {
/* 000167 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000167 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000167 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000167 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000167 */ 					switch (__attrib0__) {
/* 000167 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000167 */ 						case 't': var t = __allkwargs0__ [__attrib0__]; break;
/* 000167 */ 					}
/* 000167 */ 				}
/* 000167 */ 			}
/* 000167 */ 		}
/* 000167 */ 		else {
/* 000167 */ 		}
/* 000173 */ 		return __call__ (isinstance, null, self, t);
/* 000173 */ 	});},
/* 000176 */ 	get _get_len () {return __get__ (this, function (self) {
/* 000176 */ 		if (arguments.length) {
/* 000176 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000176 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000176 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000176 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000176 */ 					switch (__attrib0__) {
/* 000176 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000176 */ 					}
/* 000176 */ 				}
/* 000176 */ 			}
/* 000176 */ 		}
/* 000176 */ 		else {
/* 000176 */ 		}
/* 000177 */ 		if (__t__ (__t__ (self.pos === null) || self.pos_end === null)) {
/* 000178 */ 			return null;
/* 000178 */ 		}
/* 000179 */ 		return __sub__ (self.pos_end, self.pos);
/* 000179 */ 	});},
/* 000181 */ 	get latex_verbatim () {return __get__ (this, function (self) {
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
/* 000187 */ 		if (__t__ (self.latex_walker === null)) {
/* 000188 */ 			var __except0__ = __call__ (py_TypeError, null, "Can't use latex_verbatim() on node because we don't have any latex_walker set");
/* 000188 */ 			__except0__.__cause__ = null;
/* 000188 */ 			throw __except0__;
/* 000188 */ 		}
/* 000190 */ 		return __getslice__ (self.latex_walker.s, self.pos, self.pos_end, 1);
/* 000190 */ 	});},
/* 000192 */ 	get __eq__ () {return __get__ (this, function (self, other) {
/* 000192 */ 		if (arguments.length) {
/* 000192 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000192 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000192 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000192 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000192 */ 					switch (__attrib0__) {
/* 000192 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000192 */ 						case 'other': var other = __allkwargs0__ [__attrib0__]; break;
/* 000192 */ 					}
/* 000192 */ 				}
/* 000192 */ 			}
/* 000192 */ 		}
/* 000192 */ 		else {
/* 000192 */ 		}
/* 000196 */ 		return __t__ (other !== null) && __t__ (__call__ (isinstance, null, other, LatexNode)) && __t__ ((function () {
/* 000196 */ 			var __accu0__ = self;
/* 000196 */ 			return __call__ (__accu0__.nodeType, __accu0__);
/* 000196 */ 		}) () === (function () {
/* 000196 */ 			var __accu0__ = other;
/* 000196 */ 			return __call__ (__accu0__.nodeType, __accu0__);
/* 000204 */ 		}) ()) && __t__ (other.parsing_state === self.parsing_state) && __t__ (other.latex_walker === self.latex_walker) && __t__ ((__t__ (__t__ (other.pos === null) && self.pos === null) || __eq__ (other.pos, self.pos))) && __t__ ((__t__ (__t__ (other.pos_end === null) && self.pos_end === null) || __eq__ (other.pos_end, self.pos_end))) && __call__ (all, null, (function () {
/* 000204 */ 			var __accu0__ = [];
/* 000205 */ 			var __iterable0__ = self._fields;
/* 000205 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000208 */ 				var f = __getitem__ (__iterable0__, __index0__);
/* 000208 */ 				(function () {
/* 000208 */ 					var __accu1__ = __accu0__;
/* 000207 */ 					return __call__ (__accu1__.append, __accu1__, __t__ (__t__ (__call__ (getattr, null, self, f) === null) && __call__ (getattr, null, other, f) === null) || __eq__ (__call__ (getattr, null, self, f), __call__ (getattr, null, other, f)));
/* 000207 */ 				}) ();
/* 000207 */ 			}
/* 000207 */ 			return py_iter (__accu0__);
/* 000207 */ 		}) ());
/* 000207 */ 	});},
/* 000214 */ 	get __ne__ () {return __get__ (this, function (self, other) {
/* 000214 */ 		if (arguments.length) {
/* 000214 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000214 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000214 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000214 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000214 */ 					switch (__attrib0__) {
/* 000214 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000214 */ 						case 'other': var other = __allkwargs0__ [__attrib0__]; break;
/* 000214 */ 					}
/* 000214 */ 				}
/* 000214 */ 			}
/* 000214 */ 		}
/* 000214 */ 		else {
/* 000214 */ 		}
/* 000214 */ 		return NotImplemented;
/* 000214 */ 	});},
/* 000216 */ 	__hash__: null,
/* 000218 */ 	get __unicode__ () {return __get__ (this, function (self) {
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
/* 000219 */ 		return __call__ (_unicode_from_str, null, (function () {
/* 000219 */ 			var __accu0__ = self;
/* 000219 */ 			return __call__ (__accu0__.__str__, __accu0__);
/* 000219 */ 		}) ());
/* 000219 */ 	});},
/* 000220 */ 	get __str__ () {return __get__ (this, function (self) {
/* 000220 */ 		if (arguments.length) {
/* 000220 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000220 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000220 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000220 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000220 */ 					switch (__attrib0__) {
/* 000220 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000220 */ 					}
/* 000220 */ 				}
/* 000220 */ 			}
/* 000220 */ 		}
/* 000220 */ 		else {
/* 000220 */ 		}
/* 000221 */ 		return (function () {
/* 000221 */ 			var __accu0__ = self;
/* 000221 */ 			return __call__ (__accu0__.__repr__, __accu0__);
/* 000221 */ 		}) ();
/* 000221 */ 	});},
/* 000222 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000222 */ 		if (arguments.length) {
/* 000222 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000222 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000222 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000222 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000222 */ 					switch (__attrib0__) {
/* 000222 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000222 */ 					}
/* 000222 */ 				}
/* 000222 */ 			}
/* 000222 */ 		}
/* 000222 */ 		else {
/* 000222 */ 		}
/* 000224 */ 		return __add__ (__add__ (__add__ ((function () {
/* 000224 */ 			var __accu0__ = self;
/* 000224 */ 			return __call__ (__accu0__.nodeType, __accu0__);
/* 000225 */ 		}) ().__name__, '('), (function () {
/* 000225 */ 			var __accu0__ = ', ';
/* 000225 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000225 */ 				var __accu1__ = [];
/* 000225 */ 				var __iterable0__ = self._fields;
/* 000225 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000225 */ 					var k = __getitem__ (__iterable0__, __index0__);
/* 000225 */ 					(function () {
/* 000225 */ 						var __accu2__ = __accu1__;
/* 000225 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000225 */ 							var __accu3__ = '{}={!r}';
/* 000225 */ 							return __call__ (__accu3__.format, __accu3__, k, __call__ (getattr, null, self, k));
/* 000225 */ 						}) ());
/* 000225 */ 					}) ();
/* 000225 */ 				}
/* 000225 */ 				return __accu1__;
/* 000225 */ 			}) ());
/* 000225 */ 		}) ()), ')');
/* 000225 */ 	});},
/* 000229 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000229 */ 		if (arguments.length) {
/* 000229 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000229 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000229 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000229 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000229 */ 					switch (__attrib0__) {
/* 000229 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000229 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000229 */ 					}
/* 000229 */ 				}
/* 000229 */ 			}
/* 000229 */ 		}
/* 000229 */ 		else {
/* 000229 */ 		}
/* 000230 */ 		(function () {
/* 000230 */ 			var __accu0__ = visitor;
/* 000230 */ 			return __call__ (__accu0__.visit_unknown_node, __accu0__, self);
/* 000230 */ 		}) ();
/* 000230 */ 	});},
/* 000232 */ 	get to_json_object_with_latexwalker () {return __get__ (this, function (self, latexwalker) {
/* 000232 */ 		if (arguments.length) {
/* 000232 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000232 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000232 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000232 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000232 */ 					switch (__attrib0__) {
/* 000232 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000232 */ 						case 'latexwalker': var latexwalker = __allkwargs0__ [__attrib0__]; break;
/* 000232 */ 					}
/* 000232 */ 				}
/* 000232 */ 			}
/* 000232 */ 		}
/* 000232 */ 		else {
/* 000232 */ 		}
/* 000234 */ 		var d = dict ({'nodetype': self.__class__.__name__});
/* 000238 */ 		var __iterable0__ = self._fields;
/* 000238 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000238 */ 			var fld = __getitem__ (__iterable0__, __index0__);
/* 000239 */ 			if (__t__ (__eq__ (fld, 'spec'))) {
/* 000241 */ 				__setitem__ (d, fld, __call__ (repr, null, self.spec));
/* 000241 */ 			}
/* 000242 */ 			else if (__t__ (__eq__ (fld, 'latex_walker'))) {
/* 000244 */ 				// pass;
/* 000244 */ 			}
/* 000245 */ 			else {
/* 000246 */ 				__setitem__ (d, fld, __call__ (getattr, null, self, fld));
/* 000246 */ 			}
/* 000246 */ 		}
/* 000247 */ 		(function () {
/* 000247 */ 			var __accu0__ = d;
/* 000247 */ 			return __call__ (__accu0__.py_update, __accu0__, (function () {
/* 000247 */ 				var __accu1__ = latexwalker;
/* 000247 */ 				return __call__ (__accu1__.pos_to_lineno_colno, __accu1__, self.pos, __kwargtrans__ ({as_dict: true}));
/* 000247 */ 			}) ());
/* 000247 */ 		}) ();
/* 000248 */ 		return d;
/* 000248 */ 	});},
/* 000250 */ 	get format_pos () {return __get__ (this, function (self) {
/* 000250 */ 		if (arguments.length) {
/* 000250 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000250 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000250 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000250 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000250 */ 					switch (__attrib0__) {
/* 000250 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000250 */ 					}
/* 000250 */ 				}
/* 000250 */ 			}
/* 000250 */ 		}
/* 000250 */ 		else {
/* 000250 */ 		}
/* 000251 */ 		if (__t__ (self.latex_walker !== null)) {
/* 000252 */ 			return (function () {
/* 000252 */ 				var __accu0__ = self.latex_walker;
/* 000252 */ 				return __call__ (__accu0__.format_pos, __accu0__, self.pos);
/* 000252 */ 			}) ();
/* 000252 */ 		}
/* 000253 */ 		return (function () {
/* 000253 */ 			var __accu0__ = '[@ pos {}]';
/* 000253 */ 			return __call__ (__accu0__.format, __accu0__, __call__ (repr, null, self.pos));
/* 000253 */ 		}) ();
/* 000253 */ 	});}
/* 000253 */ });
/* 000253 */ Object.defineProperty (LatexNode, 'len', property.call (LatexNode, LatexNode._get_len));;
/* 000256 */ export var LatexCharsNode =  __class__ ('LatexCharsNode', [LatexNode], {
/* 000256 */ 	__module__: __name__,
/* 000265 */ 	get __init__ () {return __get__ (this, function (self, chars) {
/* 000265 */ 		var kwargs = dict ();
/* 000265 */ 		if (arguments.length) {
/* 000265 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000265 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000265 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000265 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000265 */ 					switch (__attrib0__) {
/* 000265 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000265 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000265 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000265 */ 					}
/* 000265 */ 				}
/* 000265 */ 				delete kwargs.__kwargtrans__;
/* 000265 */ 			}
/* 000265 */ 		}
/* 000265 */ 		else {
/* 000265 */ 		}
/* 000266 */ 		__call__ (__call__ (__super__, null, LatexCharsNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['chars'])}, kwargs)));
/* 000270 */ 		self.chars = chars;
/* 000270 */ 	});},
/* 000272 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000272 */ 		if (arguments.length) {
/* 000272 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000272 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000272 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000272 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000272 */ 					switch (__attrib0__) {
/* 000272 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000272 */ 					}
/* 000272 */ 				}
/* 000272 */ 			}
/* 000272 */ 		}
/* 000272 */ 		else {
/* 000272 */ 		}
/* 000273 */ 		return LatexCharsNode;
/* 000273 */ 	});},
/* 000275 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000275 */ 		if (arguments.length) {
/* 000275 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000275 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000275 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000275 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000275 */ 					switch (__attrib0__) {
/* 000275 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000275 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000275 */ 					}
/* 000275 */ 				}
/* 000275 */ 			}
/* 000275 */ 		}
/* 000275 */ 		else {
/* 000275 */ 		}
/* 000276 */ 		(function () {
/* 000276 */ 			var __accu0__ = visitor;
/* 000276 */ 			return __call__ (__accu0__.visit_chars_node, __accu0__, self);
/* 000276 */ 		}) ();
/* 000276 */ 	});}
/* 000276 */ });
/* 000280 */ export var LatexGroupNode =  __class__ ('LatexGroupNode', [LatexNode], {
/* 000280 */ 	__module__: __name__,
/* 000305 */ 	get __init__ () {return __get__ (this, function (self, nodelist) {
/* 000305 */ 		var kwargs = dict ();
/* 000305 */ 		if (arguments.length) {
/* 000305 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000305 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000305 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000305 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000305 */ 					switch (__attrib0__) {
/* 000305 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000305 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000305 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000305 */ 					}
/* 000305 */ 				}
/* 000305 */ 				delete kwargs.__kwargtrans__;
/* 000305 */ 			}
/* 000305 */ 		}
/* 000305 */ 		else {
/* 000305 */ 		}
/* 000306 */ 		var delimiters = (function () {
/* 000306 */ 			var __accu0__ = kwargs;
/* 000306 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'delimiters', tuple (['{', '}']));
/* 000306 */ 		}) ();
/* 000307 */ 		__call__ (__call__ (__super__, null, LatexGroupNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['nodelist', 'delimiters'])}, kwargs)));
/* 000311 */ 		self.nodelist = nodelist;
/* 000312 */ 		self.delimiters = delimiters;
/* 000312 */ 	});},
/* 000314 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000314 */ 		if (arguments.length) {
/* 000314 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000314 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000314 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000314 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000314 */ 					switch (__attrib0__) {
/* 000314 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000314 */ 					}
/* 000314 */ 				}
/* 000314 */ 			}
/* 000314 */ 		}
/* 000314 */ 		else {
/* 000314 */ 		}
/* 000315 */ 		return LatexGroupNode;
/* 000315 */ 	});},
/* 000317 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000317 */ 		if (arguments.length) {
/* 000317 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000317 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000317 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000317 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000317 */ 					switch (__attrib0__) {
/* 000317 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000317 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000317 */ 					}
/* 000317 */ 				}
/* 000317 */ 			}
/* 000317 */ 		}
/* 000317 */ 		else {
/* 000317 */ 		}
/* 000318 */ 		if (__t__ (self.nodelist !== null)) {
/* 000319 */ 			var __iterable0__ = self.nodelist;
/* 000319 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000319 */ 				var node = __getitem__ (__iterable0__, __index0__);
/* 000320 */ 				if (__t__ (node !== null)) {
/* 000321 */ 					(function () {
/* 000321 */ 						var __accu0__ = node;
/* 000321 */ 						return __call__ (__accu0__.accept_node_visitor, __accu0__, visitor);
/* 000321 */ 					}) ();
/* 000321 */ 				}
/* 000321 */ 			}
/* 000321 */ 		}
/* 000322 */ 		(function () {
/* 000322 */ 			var __accu0__ = visitor;
/* 000322 */ 			return __call__ (__accu0__.visit_group_node, __accu0__, self);
/* 000322 */ 		}) ();
/* 000322 */ 	});}
/* 000322 */ });
/* 000325 */ export var LatexCommentNode =  __class__ ('LatexCommentNode', [LatexNode], {
/* 000325 */ 	__module__: __name__,
/* 000339 */ 	get __init__ () {return __get__ (this, function (self, comment) {
/* 000339 */ 		var kwargs = dict ();
/* 000339 */ 		if (arguments.length) {
/* 000339 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000339 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000339 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000339 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000339 */ 					switch (__attrib0__) {
/* 000339 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000339 */ 						case 'comment': var comment = __allkwargs0__ [__attrib0__]; break;
/* 000339 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000339 */ 					}
/* 000339 */ 				}
/* 000339 */ 				delete kwargs.__kwargtrans__;
/* 000339 */ 			}
/* 000339 */ 		}
/* 000339 */ 		else {
/* 000339 */ 		}
/* 000340 */ 		var comment_post_space = (function () {
/* 000340 */ 			var __accu0__ = kwargs;
/* 000340 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'comment_post_space', '');
/* 000340 */ 		}) ();
/* 000342 */ 		__call__ (__call__ (__super__, null, LatexCommentNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['comment', 'comment_post_space'])}, kwargs)));
/* 000347 */ 		self.comment = comment;
/* 000348 */ 		self.comment_post_space = comment_post_space;
/* 000348 */ 	});},
/* 000350 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000350 */ 		if (arguments.length) {
/* 000350 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000350 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000350 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000350 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000350 */ 					switch (__attrib0__) {
/* 000350 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000350 */ 					}
/* 000350 */ 				}
/* 000350 */ 			}
/* 000350 */ 		}
/* 000350 */ 		else {
/* 000350 */ 		}
/* 000351 */ 		return LatexCommentNode;
/* 000351 */ 	});},
/* 000353 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000353 */ 		if (arguments.length) {
/* 000353 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000353 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000353 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000353 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000353 */ 					switch (__attrib0__) {
/* 000353 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000353 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000353 */ 					}
/* 000353 */ 				}
/* 000353 */ 			}
/* 000353 */ 		}
/* 000353 */ 		else {
/* 000353 */ 		}
/* 000354 */ 		(function () {
/* 000354 */ 			var __accu0__ = visitor;
/* 000354 */ 			return __call__ (__accu0__.visit_comment_node, __accu0__, self);
/* 000354 */ 		}) ();
/* 000354 */ 	});}
/* 000354 */ });
/* 000357 */ export var LatexMacroNode =  __class__ ('LatexMacroNode', [LatexNode], {
/* 000357 */ 	__module__: __name__,
/* 000421 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000421 */ 		var kwargs = dict ();
/* 000421 */ 		if (arguments.length) {
/* 000421 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000421 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000421 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000421 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000421 */ 					switch (__attrib0__) {
/* 000421 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000421 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000421 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000421 */ 					}
/* 000421 */ 				}
/* 000421 */ 				delete kwargs.__kwargtrans__;
/* 000421 */ 			}
/* 000421 */ 		}
/* 000421 */ 		else {
/* 000421 */ 		}
/* 000422 */ 		var nodeargd = (function () {
/* 000422 */ 			var __accu0__ = kwargs;
/* 000422 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'nodeargd', __call__ (ParsedArguments, null));
/* 000422 */ 		}) ();
/* 000423 */ 		var macro_post_space = (function () {
/* 000423 */ 			var __accu0__ = kwargs;
/* 000423 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'macro_post_space', '');
/* 000423 */ 		}) ();
/* 000424 */ 		var spec = (function () {
/* 000424 */ 			var __accu0__ = kwargs;
/* 000424 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'spec', null);
/* 000424 */ 		}) ();
/* 000426 */ 		__call__ (__call__ (__super__, null, LatexMacroNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['macroname', 'spec', 'nodeargd', 'macro_post_space']), _redundant_fields: tuple (['nodeoptarg', 'nodeargs'])}, kwargs)));
/* 000431 */ 		self.macroname = macroname;
/* 000432 */ 		self.spec = spec;
/* 000433 */ 		self.nodeargd = nodeargd;
/* 000434 */ 		self.macro_post_space = macro_post_space;
/* 000434 */ 	});},
/* 000436 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000436 */ 		if (arguments.length) {
/* 000436 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000436 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000436 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000436 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000436 */ 					switch (__attrib0__) {
/* 000436 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000436 */ 					}
/* 000436 */ 				}
/* 000436 */ 			}
/* 000436 */ 		}
/* 000436 */ 		else {
/* 000436 */ 		}
/* 000437 */ 		return LatexMacroNode;
/* 000437 */ 	});},
/* 000439 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000439 */ 		if (arguments.length) {
/* 000439 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000439 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000439 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000439 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000439 */ 					switch (__attrib0__) {
/* 000439 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000439 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000439 */ 					}
/* 000439 */ 				}
/* 000439 */ 			}
/* 000439 */ 		}
/* 000439 */ 		else {
/* 000439 */ 		}
/* 000440 */ 		if (__t__ (self.nodeargd !== null)) {
/* 000441 */ 			(function () {
/* 000441 */ 				var __accu0__ = self.nodeargd;
/* 000441 */ 				return __call__ (__accu0__.accept_node_visitor, __accu0__, visitor);
/* 000441 */ 			}) ();
/* 000441 */ 		}
/* 000442 */ 		(function () {
/* 000442 */ 			var __accu0__ = visitor;
/* 000442 */ 			return __call__ (__accu0__.visit_macro_node, __accu0__, self);
/* 000442 */ 		}) ();
/* 000442 */ 	});}
/* 000442 */ });
/* 000465 */ export var LatexEnvironmentNode =  __class__ ('LatexEnvironmentNode', [LatexNode], {
/* 000465 */ 	__module__: __name__,
/* 000531 */ 	get __init__ () {return __get__ (this, function (self, environmentname, nodelist) {
/* 000531 */ 		var kwargs = dict ();
/* 000531 */ 		if (arguments.length) {
/* 000531 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000531 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000531 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000531 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000531 */ 					switch (__attrib0__) {
/* 000531 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000531 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000531 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000531 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000531 */ 					}
/* 000531 */ 				}
/* 000531 */ 				delete kwargs.__kwargtrans__;
/* 000531 */ 			}
/* 000531 */ 		}
/* 000531 */ 		else {
/* 000531 */ 		}
/* 000532 */ 		var nodeargd = (function () {
/* 000532 */ 			var __accu0__ = kwargs;
/* 000532 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'nodeargd', __call__ (ParsedArguments, null));
/* 000532 */ 		}) ();
/* 000533 */ 		var spec = (function () {
/* 000533 */ 			var __accu0__ = kwargs;
/* 000533 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'spec', null);
/* 000533 */ 		}) ();
/* 000538 */ 		__call__ (__call__ (__super__, null, LatexEnvironmentNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['environmentname', 'spec', 'nodelist', 'nodeargd']), _redundant_fields: tuple (['envname', 'optargs', 'args'])}, kwargs)));
/* 000543 */ 		self.environmentname = environmentname;
/* 000544 */ 		self.spec = spec;
/* 000545 */ 		self.nodelist = nodelist;
/* 000546 */ 		self.nodeargd = nodeargd;
/* 000546 */ 	});},
/* 000553 */ 	get _get_envname () {return __get__ (this, function (self) {
/* 000553 */ 		if (arguments.length) {
/* 000553 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000553 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000553 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000553 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000553 */ 					switch (__attrib0__) {
/* 000553 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000553 */ 					}
/* 000553 */ 				}
/* 000553 */ 			}
/* 000553 */ 		}
/* 000553 */ 		else {
/* 000553 */ 		}
/* 000555 */ 		return self.environmentname;
/* 000555 */ 	});},
/* 000564 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000564 */ 		if (arguments.length) {
/* 000564 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000564 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000564 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000564 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000564 */ 					switch (__attrib0__) {
/* 000564 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000564 */ 					}
/* 000564 */ 				}
/* 000564 */ 			}
/* 000564 */ 		}
/* 000564 */ 		else {
/* 000564 */ 		}
/* 000565 */ 		return LatexEnvironmentNode;
/* 000565 */ 	});},
/* 000567 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000567 */ 		if (arguments.length) {
/* 000567 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000567 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000567 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000567 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000567 */ 					switch (__attrib0__) {
/* 000567 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000567 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000567 */ 					}
/* 000567 */ 				}
/* 000567 */ 			}
/* 000567 */ 		}
/* 000567 */ 		else {
/* 000567 */ 		}
/* 000568 */ 		if (__t__ (self.nodeargd !== null)) {
/* 000569 */ 			(function () {
/* 000569 */ 				var __accu0__ = self.nodeargd;
/* 000569 */ 				return __call__ (__accu0__.accept_node_visitor, __accu0__, visitor);
/* 000569 */ 			}) ();
/* 000569 */ 		}
/* 000570 */ 		if (__t__ (self.nodelist !== null)) {
/* 000571 */ 			var __iterable0__ = self.nodelist;
/* 000571 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000571 */ 				var node = __getitem__ (__iterable0__, __index0__);
/* 000572 */ 				if (__t__ (node !== null)) {
/* 000573 */ 					(function () {
/* 000573 */ 						var __accu0__ = node;
/* 000573 */ 						return __call__ (__accu0__.accept_node_visitor, __accu0__, visitor);
/* 000573 */ 					}) ();
/* 000573 */ 				}
/* 000573 */ 			}
/* 000573 */ 		}
/* 000574 */ 		(function () {
/* 000574 */ 			var __accu0__ = visitor;
/* 000574 */ 			return __call__ (__accu0__.visit_environment_node, __accu0__, self);
/* 000574 */ 		}) ();
/* 000574 */ 	});}
/* 000574 */ });
/* 000574 */ Object.defineProperty (LatexEnvironmentNode, 'envname', property.call (LatexEnvironmentNode, LatexEnvironmentNode._get_envname));;
/* 000578 */ export var LatexSpecialsNode =  __class__ ('LatexSpecialsNode', [LatexNode], {
/* 000578 */ 	__module__: __name__,
/* 000616 */ 	get __init__ () {return __get__ (this, function (self, specials_chars) {
/* 000616 */ 		var kwargs = dict ();
/* 000616 */ 		if (arguments.length) {
/* 000616 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000616 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000616 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000616 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000616 */ 					switch (__attrib0__) {
/* 000616 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000616 */ 						case 'specials_chars': var specials_chars = __allkwargs0__ [__attrib0__]; break;
/* 000616 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000616 */ 					}
/* 000616 */ 				}
/* 000616 */ 				delete kwargs.__kwargtrans__;
/* 000616 */ 			}
/* 000616 */ 		}
/* 000616 */ 		else {
/* 000616 */ 		}
/* 000618 */ 		var spec = (function () {
/* 000618 */ 			var __accu0__ = kwargs;
/* 000618 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'spec', null);
/* 000618 */ 		}) ();
/* 000619 */ 		var nodeargd = (function () {
/* 000619 */ 			var __accu0__ = kwargs;
/* 000619 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'nodeargd', null);
/* 000619 */ 		}) ();
/* 000621 */ 		__call__ (__call__ (__super__, null, LatexSpecialsNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['specials_chars', 'spec', 'nodeargd'])}, kwargs)));
/* 000625 */ 		self.specials_chars = specials_chars;
/* 000626 */ 		self.spec = spec;
/* 000627 */ 		self.nodeargd = nodeargd;
/* 000627 */ 	});},
/* 000629 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000629 */ 		if (arguments.length) {
/* 000629 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000629 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000629 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000629 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000629 */ 					switch (__attrib0__) {
/* 000629 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000629 */ 					}
/* 000629 */ 				}
/* 000629 */ 			}
/* 000629 */ 		}
/* 000629 */ 		else {
/* 000629 */ 		}
/* 000630 */ 		return LatexSpecialsNode;
/* 000630 */ 	});},
/* 000632 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000632 */ 		if (arguments.length) {
/* 000632 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000632 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000632 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000632 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000632 */ 					switch (__attrib0__) {
/* 000632 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000632 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000632 */ 					}
/* 000632 */ 				}
/* 000632 */ 			}
/* 000632 */ 		}
/* 000632 */ 		else {
/* 000632 */ 		}
/* 000633 */ 		if (__t__ (self.nodeargd !== null)) {
/* 000634 */ 			(function () {
/* 000634 */ 				var __accu0__ = self.nodeargd;
/* 000634 */ 				return __call__ (__accu0__.accept_node_visitor, __accu0__, visitor);
/* 000634 */ 			}) ();
/* 000634 */ 		}
/* 000635 */ 		(function () {
/* 000635 */ 			var __accu0__ = visitor;
/* 000635 */ 			return __call__ (__accu0__.visit_specials_node, __accu0__, self);
/* 000635 */ 		}) ();
/* 000635 */ 	});}
/* 000635 */ });
/* 000638 */ export var LatexMathNode =  __class__ ('LatexMathNode', [LatexNode], {
/* 000638 */ 	__module__: __name__,
/* 000664 */ 	get __init__ () {return __get__ (this, function (self, displaytype, nodelist) {
/* 000664 */ 		if (typeof nodelist == 'undefined' || (nodelist != null && nodelist.hasOwnProperty ("__kwargtrans__"))) {;
/* 000664 */ 			var nodelist = [];
/* 000664 */ 		};
/* 000664 */ 		var kwargs = dict ();
/* 000664 */ 		if (arguments.length) {
/* 000664 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000664 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000664 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000664 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000664 */ 					switch (__attrib0__) {
/* 000664 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000664 */ 						case 'displaytype': var displaytype = __allkwargs0__ [__attrib0__]; break;
/* 000664 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000664 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000664 */ 					}
/* 000664 */ 				}
/* 000664 */ 				delete kwargs.__kwargtrans__;
/* 000664 */ 			}
/* 000664 */ 		}
/* 000664 */ 		else {
/* 000664 */ 		}
/* 000665 */ 		var delimiters = (function () {
/* 000665 */ 			var __accu0__ = kwargs;
/* 000665 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'delimiters', tuple ([null, null]));
/* 000665 */ 		}) ();
/* 000667 */ 		__call__ (__call__ (__super__, null, LatexMathNode, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['displaytype', 'nodelist', 'delimiters'])}, kwargs)));
/* 000672 */ 		self.displaytype = displaytype;
/* 000673 */ 		self.nodelist = nodelist;
/* 000674 */ 		self.delimiters = delimiters;
/* 000674 */ 	});},
/* 000676 */ 	get nodeType () {return __get__ (this, function (self) {
/* 000676 */ 		if (arguments.length) {
/* 000676 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000676 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000676 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000676 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000676 */ 					switch (__attrib0__) {
/* 000676 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000676 */ 					}
/* 000676 */ 				}
/* 000676 */ 			}
/* 000676 */ 		}
/* 000676 */ 		else {
/* 000676 */ 		}
/* 000677 */ 		return LatexMathNode;
/* 000677 */ 	});},
/* 000680 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000680 */ 		if (arguments.length) {
/* 000680 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000680 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000680 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000680 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000680 */ 					switch (__attrib0__) {
/* 000680 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000680 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000680 */ 					}
/* 000680 */ 				}
/* 000680 */ 			}
/* 000680 */ 		}
/* 000680 */ 		else {
/* 000680 */ 		}
/* 000681 */ 		if (__t__ (self.nodelist !== null)) {
/* 000682 */ 			var __iterable0__ = self.nodelist;
/* 000682 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000682 */ 				var node = __getitem__ (__iterable0__, __index0__);
/* 000683 */ 				if (__t__ (node !== null)) {
/* 000684 */ 					(function () {
/* 000684 */ 						var __accu0__ = node;
/* 000684 */ 						return __call__ (__accu0__.accept_node_visitor, __accu0__, visitor);
/* 000684 */ 					}) ();
/* 000684 */ 				}
/* 000684 */ 			}
/* 000684 */ 		}
/* 000685 */ 		(function () {
/* 000685 */ 			var __accu0__ = visitor;
/* 000685 */ 			return __call__ (__accu0__.visit_math_node, __accu0__, self);
/* 000685 */ 		}) ();
/* 000685 */ 	});}
/* 000685 */ });
/* 000693 */ export var LatexNodeList =  __class__ ('LatexNodeList', [object], {
/* 000693 */ 	__module__: __name__,
/* 000735 */ 	get __init__ () {return __get__ (this, function (self, nodelist) {
/* 000735 */ 		var kwargs = dict ();
/* 000735 */ 		if (arguments.length) {
/* 000735 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000735 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000735 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000735 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000735 */ 					switch (__attrib0__) {
/* 000735 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000735 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000735 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000735 */ 					}
/* 000735 */ 				}
/* 000735 */ 				delete kwargs.__kwargtrans__;
/* 000735 */ 			}
/* 000735 */ 		}
/* 000735 */ 		else {
/* 000735 */ 		}
/* 000737 */ 		if (__t__ (__call__ (isinstance, null, nodelist, LatexNodeList))) {
/* 000738 */ 			var obj = nodelist;
/* 000739 */ 			self.nodelist = obj.nodelist;
/* 000740 */ 			self.parsing_state = obj.parsing_state;
/* 000741 */ 			self.latex_walker = obj.latex_walker;
/* 000742 */ 			self.pos = obj.pos;
/* 000743 */ 			self.pos_end = obj.pos_end;
/* 000744 */ 			return ;
/* 000744 */ 		}
/* 000746 */ 		self.nodelist = nodelist;
/* 000748 */ 		if (__t__ (self.nodelist === null)) {
/* 000749 */ 			(function () {
/* 000749 */ 				var __accu0__ = logger;
/* 000749 */ 				return __call__ (__accu0__.warning, __accu0__, "You're creating a LatexNodeList with nodelist=None. That's likely to cause crashes!");
/* 000749 */ 			}) ();
/* 000749 */ 		}
/* 000752 */ 		self.parsing_state = (function () {
/* 000752 */ 			var __accu0__ = kwargs;
/* 000752 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'parsing_state', null);
/* 000752 */ 		}) ();
/* 000753 */ 		self.latex_walker = (function () {
/* 000753 */ 			var __accu0__ = kwargs;
/* 000753 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'latex_walker', null);
/* 000753 */ 		}) ();
/* 000754 */ 		self.pos = (function () {
/* 000754 */ 			var __accu0__ = kwargs;
/* 000754 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'pos', null);
/* 000754 */ 		}) ();
/* 000755 */ 		self.pos_end = (function () {
/* 000755 */ 			var __accu0__ = kwargs;
/* 000755 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'pos_end', null);
/* 000755 */ 		}) ();
/* 000757 */ 		if (__t__ (__call__ (len, null, kwargs))) {
/* 000759 */ 			var __except0__ = __call__ (ValueError, null, __add__ ('Unexpected keyword arguments to LatexNodeList: ', __call__ (repr, null, kwargs)));
/* 000759 */ 			__except0__.__cause__ = null;
/* 000759 */ 			throw __except0__;
/* 000759 */ 		}
/* 000762 */ 		var __left0__ = __call__ (_update_posposend_from_nodelist, null, self.pos, self.pos_end, self.nodelist);
/* 000762 */ 		self.pos = __left0__ [0];
/* 000762 */ 		self.pos_end = __left0__ [1];
/* 000762 */ 	});},
/* 000765 */ 	_fields: tuple (['nodelist', 'parsing_state', 'latex_walker', 'pos', 'pos_end']),
/* 000769 */ 	get _get_len () {return __get__ (this, function (self) {
/* 000769 */ 		if (arguments.length) {
/* 000769 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000769 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000769 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000769 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000769 */ 					switch (__attrib0__) {
/* 000769 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000769 */ 					}
/* 000769 */ 				}
/* 000769 */ 			}
/* 000769 */ 		}
/* 000769 */ 		else {
/* 000769 */ 		}
/* 000770 */ 		if (__t__ (__t__ (self.pos === null) || self.pos_end === null)) {
/* 000771 */ 			return null;
/* 000771 */ 		}
/* 000772 */ 		return __sub__ (self.pos_end, self.pos);
/* 000772 */ 	});},
/* 000775 */ 	get __iter__ () {return __get__ (this, function (self) {
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
/* 000776 */ 		if (__t__ (self.nodelist === null)) {
/* 000777 */ 			return __call__ (py_iter, null, []);
/* 000777 */ 		}
/* 000778 */ 		return __call__ (py_iter, null, self.nodelist);
/* 000778 */ 	});},
/* 000778 */ 	[Symbol.iterator] () {return this.__iter__ ()},
/* 000781 */ 	get __getitem__ () {return __get__ (this, function (self, index) {
/* 000781 */ 		if (arguments.length) {
/* 000781 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000781 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000781 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000781 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000781 */ 					switch (__attrib0__) {
/* 000781 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000781 */ 						case 'index': var index = __allkwargs0__ [__attrib0__]; break;
/* 000781 */ 					}
/* 000781 */ 				}
/* 000781 */ 			}
/* 000781 */ 		}
/* 000781 */ 		else {
/* 000781 */ 		}
/* 000792 */ 		try {
/* 000793 */ 			if (__t__ (__eq__ (__call__ (len, null, index), 3))) {
/* 000794 */ 				var __left0__ = index;
/* 000794 */ 				var lower = __left0__ [0];
/* 000794 */ 				var upper = __left0__ [1];
/* 000794 */ 				var step = __left0__ [2];
/* 000795 */ 				return __getslice__ (self.nodelist, lower, upper, step);
/* 000795 */ 			}
/* 000795 */ 		}
/* 000795 */ 		catch (__except0__) {
/* 000797 */ 			// pass;
/* 000797 */ 		}
/* 000800 */ 		if (__t__ (__t__ (__call__ (isinstance, null, index, int)) && __lt__ (index, 0))) {
/* 000801 */ 			var index = __add__ (__call__ (len, null, self.nodelist), index);
/* 000801 */ 		}
/* 000803 */ 		return __getitem__ (self.nodelist, index);
/* 000803 */ 	});},
/* 000806 */ 	get __len__ () {return __get__ (this, function (self) {
/* 000806 */ 		if (arguments.length) {
/* 000806 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000806 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000806 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000806 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000806 */ 					switch (__attrib0__) {
/* 000806 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000806 */ 					}
/* 000806 */ 				}
/* 000806 */ 			}
/* 000806 */ 		}
/* 000806 */ 		else {
/* 000806 */ 		}
/* 000807 */ 		return __call__ (len, null, self.nodelist);
/* 000807 */ 	});},
/* 000810 */ 	get latex_verbatim () {return __get__ (this, function (self) {
/* 000810 */ 		if (arguments.length) {
/* 000810 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000810 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000810 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000810 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000810 */ 					switch (__attrib0__) {
/* 000810 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000810 */ 					}
/* 000810 */ 				}
/* 000810 */ 			}
/* 000810 */ 		}
/* 000810 */ 		else {
/* 000810 */ 		}
/* 000817 */ 		return (function () {
/* 000817 */ 			var __accu0__ = '';
/* 000817 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000817 */ 				var __accu1__ = [];
/* 000817 */ 				var __iterable0__ = self.nodelist;
/* 000817 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000819 */ 					var n = __getitem__ (__iterable0__, __index0__);
/* 000819 */ 					if (__t__ (n !== null)) {
/* 000820 */ 						(function () {
/* 000820 */ 							var __accu2__ = __accu1__;
/* 000818 */ 							return __call__ (__accu2__.append, __accu2__, (function () {
/* 000818 */ 								var __accu3__ = n;
/* 000818 */ 								return __call__ (__accu3__.latex_verbatim, __accu3__);
/* 000818 */ 							}) ());
/* 000818 */ 						}) ();
/* 000818 */ 					}
/* 000818 */ 				}
/* 000818 */ 				return __accu1__;
/* 000818 */ 			}) ());
/* 000818 */ 		}) ();
/* 000818 */ 	});},
/* 000824 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000824 */ 		if (arguments.length) {
/* 000824 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000824 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000824 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000824 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000824 */ 					switch (__attrib0__) {
/* 000824 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000824 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000824 */ 					}
/* 000824 */ 				}
/* 000824 */ 			}
/* 000824 */ 		}
/* 000824 */ 		else {
/* 000824 */ 		}
/* 000825 */ 		if (__t__ (self.nodelist !== null)) {
/* 000826 */ 			var __iterable0__ = self.nodelist;
/* 000826 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000826 */ 				var node = __getitem__ (__iterable0__, __index0__);
/* 000827 */ 				if (__t__ (node !== null)) {
/* 000828 */ 					(function () {
/* 000828 */ 						var __accu0__ = node;
/* 000828 */ 						return __call__ (__accu0__.accept_node_visitor, __accu0__, visitor);
/* 000828 */ 					}) ();
/* 000828 */ 				}
/* 000828 */ 			}
/* 000828 */ 		}
/* 000829 */ 		(function () {
/* 000829 */ 			var __accu0__ = visitor;
/* 000829 */ 			return __call__ (__accu0__.visit_node_list, __accu0__, self);
/* 000829 */ 		}) ();
/* 000829 */ 	});},
/* 000832 */ 	get filter () {return __get__ (this, function (self, node_predicate_fn, skip_none, skip_comments, skip_whitespace_char_nodes) {
/* 000832 */ 		if (typeof node_predicate_fn == 'undefined' || (node_predicate_fn != null && node_predicate_fn.hasOwnProperty ("__kwargtrans__"))) {;
/* 000832 */ 			var node_predicate_fn = null;
/* 000832 */ 		};
/* 000832 */ 		if (typeof skip_none == 'undefined' || (skip_none != null && skip_none.hasOwnProperty ("__kwargtrans__"))) {;
/* 000832 */ 			var skip_none = true;
/* 000832 */ 		};
/* 000832 */ 		if (typeof skip_comments == 'undefined' || (skip_comments != null && skip_comments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000832 */ 			var skip_comments = false;
/* 000832 */ 		};
/* 000832 */ 		if (typeof skip_whitespace_char_nodes == 'undefined' || (skip_whitespace_char_nodes != null && skip_whitespace_char_nodes.hasOwnProperty ("__kwargtrans__"))) {;
/* 000832 */ 			var skip_whitespace_char_nodes = false;
/* 000832 */ 		};
/* 000832 */ 		if (arguments.length) {
/* 000832 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000832 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000832 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000832 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000832 */ 					switch (__attrib0__) {
/* 000832 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000832 */ 						case 'node_predicate_fn': var node_predicate_fn = __allkwargs0__ [__attrib0__]; break;
/* 000832 */ 						case 'skip_none': var skip_none = __allkwargs0__ [__attrib0__]; break;
/* 000832 */ 						case 'skip_comments': var skip_comments = __allkwargs0__ [__attrib0__]; break;
/* 000832 */ 						case 'skip_whitespace_char_nodes': var skip_whitespace_char_nodes = __allkwargs0__ [__attrib0__]; break;
/* 000832 */ 					}
/* 000832 */ 				}
/* 000832 */ 			}
/* 000832 */ 		}
/* 000832 */ 		else {
/* 000832 */ 		}
/* 000835 */ 		if (__t__ (self.latex_walker !== null)) {
/* 000836 */ 			var make_nodelist = self.latex_walker.make_nodelist;
/* 000836 */ 		}
/* 000837 */ 		else {
/* 000838 */ 			var make_nodelist = (function __lambda__ (nl) {
/* 000838 */ 				var kwargs = dict ();
/* 000838 */ 				if (arguments.length) {
/* 000838 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000838 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000838 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000838 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000838 */ 							switch (__attrib0__) {
/* 000838 */ 								case 'nl': var nl = __allkwargs0__ [__attrib0__]; break;
/* 000838 */ 								default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000838 */ 							}
/* 000838 */ 						}
/* 000838 */ 						delete kwargs.__kwargtrans__;
/* 000838 */ 					}
/* 000838 */ 				}
/* 000838 */ 				else {
/* 000838 */ 				}
/* 000838 */ 				return __call__ (LatexNodeList, null, nl, __kwargtrans__ (kwargs));
/* 000838 */ 			});
/* 000838 */ 		}
/* 000840 */ 		var filter_full_predicate_fn = function (n) {
/* 000840 */ 			if (arguments.length) {
/* 000840 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000840 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000840 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000840 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000840 */ 						switch (__attrib0__) {
/* 000840 */ 							case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000840 */ 						}
/* 000840 */ 					}
/* 000840 */ 				}
/* 000840 */ 			}
/* 000840 */ 			else {
/* 000840 */ 			}
/* 000841 */ 			if (__t__ (__t__ (skip_none) && n === null)) {
/* 000842 */ 				return false;
/* 000842 */ 			}
/* 000843 */ 			if (__t__ (__t__ (skip_comments) && (function () {
/* 000843 */ 				var __accu0__ = n;
/* 000843 */ 				return __call__ (__accu0__.isNodeType, __accu0__, LatexCommentNode);
/* 000843 */ 			}) ())) {
/* 000844 */ 				return false;
/* 000844 */ 			}
/* 000845 */ 			if (__t__ (__t__ (skip_whitespace_char_nodes) && __t__ ((function () {
/* 000845 */ 				var __accu0__ = n;
/* 000845 */ 				return __call__ (__accu0__.isNodeType, __accu0__, LatexCharsNode);
/* 000846 */ 			}) ()) && __eq__ (__call__ (len, null, (function () {
/* 000846 */ 				var __accu0__ = n.chars;
/* 000846 */ 				return __call__ (__accu0__.strip, __accu0__);
/* 000846 */ 			}) ()), 0))) {
/* 000847 */ 				return false;
/* 000847 */ 			}
/* 000848 */ 			if (__t__ (node_predicate_fn !== null)) {
/* 000849 */ 				return __call__ (node_predicate_fn, null, n);
/* 000849 */ 			}
/* 000850 */ 			return true;
/* 000850 */ 		};
/* 000852 */ 		var filtered_nodes = (function () {
/* 000852 */ 			var __accu0__ = [];
/* 000852 */ 			var __iterable0__ = self.nodelist;
/* 000852 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000854 */ 				var n = __getitem__ (__iterable0__, __index0__);
/* 000855 */ 				if (__t__ (__call__ (filter_full_predicate_fn, null, n))) {
/* 000855 */ 					(function () {
/* 000855 */ 						var __accu1__ = __accu0__;
/* 000855 */ 						return __call__ (__accu1__.append, __accu1__, n);
/* 000855 */ 					}) ();
/* 000855 */ 				}
/* 000855 */ 			}
/* 000855 */ 			return __accu0__;
/* 000855 */ 		}) ();
/* 000864 */ 		return __call__ (make_nodelist, null, filtered_nodes, __kwargtrans__ ({parsing_state: self.parsing_state, pos: (__t__ (__call__ (len, null, filtered_nodes)) ? null : self.pos_end), pos_end: (__t__ (__call__ (len, null, filtered_nodes)) ? null : self.pos_end)}));
/* 000864 */ 	});},
/* 000868 */ 	get split_at_node () {return __get__ (this, function (self, node_predicate_fn, skip_none, keep_separators, max_split) {
/* 000868 */ 		if (typeof skip_none == 'undefined' || (skip_none != null && skip_none.hasOwnProperty ("__kwargtrans__"))) {;
/* 000868 */ 			var skip_none = true;
/* 000868 */ 		};
/* 000868 */ 		if (typeof keep_separators == 'undefined' || (keep_separators != null && keep_separators.hasOwnProperty ("__kwargtrans__"))) {;
/* 000868 */ 			var keep_separators = false;
/* 000868 */ 		};
/* 000868 */ 		if (typeof max_split == 'undefined' || (max_split != null && max_split.hasOwnProperty ("__kwargtrans__"))) {;
/* 000868 */ 			var max_split = null;
/* 000868 */ 		};
/* 000868 */ 		if (arguments.length) {
/* 000868 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000868 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000868 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000868 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000868 */ 					switch (__attrib0__) {
/* 000868 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000868 */ 						case 'node_predicate_fn': var node_predicate_fn = __allkwargs0__ [__attrib0__]; break;
/* 000868 */ 						case 'skip_none': var skip_none = __allkwargs0__ [__attrib0__]; break;
/* 000868 */ 						case 'keep_separators': var keep_separators = __allkwargs0__ [__attrib0__]; break;
/* 000868 */ 						case 'max_split': var max_split = __allkwargs0__ [__attrib0__]; break;
/* 000868 */ 					}
/* 000868 */ 				}
/* 000868 */ 			}
/* 000868 */ 		}
/* 000868 */ 		else {
/* 000868 */ 		}
/* 000871 */ 		var nodelists_list = [[]];
/* 000873 */ 		if (__t__ (__t__ (max_split !== null) && __eq__ (max_split, 0))) {
/* 000874 */ 			var no_more_splits = true;
/* 000874 */ 		}
/* 000875 */ 		else {
/* 000876 */ 			var no_more_splits = false;
/* 000876 */ 		}
/* 000878 */ 		var __iterable0__ = self.nodelist;
/* 000878 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000878 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000879 */ 			if (__t__ (__t__ (skip_none) && n === null)) {
/* 000879 */ 				continue;
/* 000879 */ 			}
/* 000881 */ 			if (__t__ (__t__ (!__t__ ((no_more_splits))) && __call__ (node_predicate_fn, null, n))) {
/* 000882 */ 				if (__t__ (keep_separators)) {
/* 000883 */ 					(function () {
/* 000883 */ 						var __accu0__ = nodelists_list;
/* 000883 */ 						return __call__ (__accu0__.append, __accu0__, [n]);
/* 000883 */ 					}) ();
/* 000883 */ 				}
/* 000884 */ 				else {
/* 000885 */ 					(function () {
/* 000885 */ 						var __accu0__ = nodelists_list;
/* 000885 */ 						return __call__ (__accu0__.append, __accu0__, []);
/* 000885 */ 					}) ();
/* 000885 */ 				}
/* 000887 */ 				if (__t__ (__t__ (max_split !== null) && __ge__ (__call__ (len, null, nodelists_list), max_split))) {
/* 000888 */ 					var no_more_splits = true;
/* 000888 */ 				}
/* 000888 */ 			}
/* 000889 */ 			else {
/* 000890 */ 				(function () {
/* 000890 */ 					var __accu0__ = __getitem__ (nodelists_list, __sub__ (__call__ (len, null, nodelists_list), 1));
/* 000890 */ 					return __call__ (__accu0__.append, __accu0__, n);
/* 000890 */ 				}) ();
/* 000890 */ 			}
/* 000890 */ 		}
/* 000892 */ 		if (__t__ (self.latex_walker !== null)) {
/* 000893 */ 			var make_latex_node_list = self.latex_walker.make_nodelist;
/* 000893 */ 		}
/* 000894 */ 		else {
/* 000895 */ 			var make_latex_node_list = (function __lambda__ (nl) {
/* 000895 */ 				var kwargs = dict ();
/* 000895 */ 				if (arguments.length) {
/* 000895 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000895 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000895 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000895 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000895 */ 							switch (__attrib0__) {
/* 000895 */ 								case 'nl': var nl = __allkwargs0__ [__attrib0__]; break;
/* 000895 */ 								default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000895 */ 							}
/* 000895 */ 						}
/* 000895 */ 						delete kwargs.__kwargtrans__;
/* 000895 */ 					}
/* 000895 */ 				}
/* 000895 */ 				else {
/* 000895 */ 				}
/* 000895 */ 				return __call__ (LatexNodeList, null, nl, __kwargtrans__ (kwargs));
/* 000895 */ 			});
/* 000895 */ 		}
/* 000897 */ 		return (function () {
/* 000897 */ 			var __accu0__ = [];
/* 000897 */ 			var __iterable0__ = nodelists_list;
/* 000897 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000899 */ 				var nl = __getitem__ (__iterable0__, __index0__);
/* 000899 */ 				(function () {
/* 000899 */ 					var __accu1__ = __accu0__;
/* 000898 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (make_latex_node_list, null, nl, __kwargtrans__ ({parsing_state: self.parsing_state})));
/* 000898 */ 				}) ();
/* 000898 */ 			}
/* 000898 */ 			return __accu0__;
/* 000898 */ 		}) ();
/* 000898 */ 	});},
/* 000902 */ 	get split_at_chars () {return __get__ (this, function (self, sep_chars, max_split, keep_empty, skip_none) {
/* 000902 */ 		if (typeof max_split == 'undefined' || (max_split != null && max_split.hasOwnProperty ("__kwargtrans__"))) {;
/* 000902 */ 			var max_split = null;
/* 000902 */ 		};
/* 000902 */ 		if (typeof keep_empty == 'undefined' || (keep_empty != null && keep_empty.hasOwnProperty ("__kwargtrans__"))) {;
/* 000902 */ 			var keep_empty = false;
/* 000902 */ 		};
/* 000902 */ 		if (typeof skip_none == 'undefined' || (skip_none != null && skip_none.hasOwnProperty ("__kwargtrans__"))) {;
/* 000902 */ 			var skip_none = true;
/* 000902 */ 		};
/* 000902 */ 		if (arguments.length) {
/* 000902 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000902 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000902 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000902 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000902 */ 					switch (__attrib0__) {
/* 000902 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000902 */ 						case 'sep_chars': var sep_chars = __allkwargs0__ [__attrib0__]; break;
/* 000902 */ 						case 'max_split': var max_split = __allkwargs0__ [__attrib0__]; break;
/* 000902 */ 						case 'keep_empty': var keep_empty = __allkwargs0__ [__attrib0__]; break;
/* 000902 */ 						case 'skip_none': var skip_none = __allkwargs0__ [__attrib0__]; break;
/* 000902 */ 					}
/* 000902 */ 				}
/* 000902 */ 			}
/* 000902 */ 		}
/* 000902 */ 		else {
/* 000902 */ 		}
/* 000941 */ 		var split_node_lists = [];
/* 000943 */ 		var get_split_match_start_end = function (m, offset) {
/* 000943 */ 			if (typeof offset == 'undefined' || (offset != null && offset.hasOwnProperty ("__kwargtrans__"))) {;
/* 000943 */ 				var offset = 0;
/* 000943 */ 			};
/* 000943 */ 			if (arguments.length) {
/* 000943 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000943 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000943 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000943 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000943 */ 						switch (__attrib0__) {
/* 000943 */ 							case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000943 */ 							case 'offset': var offset = __allkwargs0__ [__attrib0__]; break;
/* 000943 */ 						}
/* 000943 */ 					}
/* 000943 */ 				}
/* 000943 */ 			}
/* 000943 */ 			else {
/* 000943 */ 			}
/* 000944 */ 			if (__t__ (m === null)) {
/* 000945 */ 				return tuple ([__neg__ (1), null]);
/* 000945 */ 			}
/* 000946 */ 			if (__t__ (__t__ (__call__ (hasattr, null, m, 'start')) && __call__ (hasattr, null, m, 'end'))) {
/* 000947 */ 				return tuple ([__add__ (offset, (function () {
/* 000947 */ 					var __accu0__ = m;
/* 000947 */ 					return __call__ (__accu0__.start, __accu0__);
/* 000947 */ 				}) ()), __add__ (offset, (function () {
/* 000947 */ 					var __accu0__ = m;
/* 000947 */ 					return __call__ (__accu0__.end, __accu0__);
/* 000947 */ 				}) ())]);
/* 000947 */ 			}
/* 000948 */ 			if (__t__ (__t__ (!__t__ ((m))) || !__t__ ((__call__ (len, null, m))))) {
/* 000949 */ 				return tuple ([__neg__ (1), null]);
/* 000949 */ 			}
/* 000950 */ 			var __left0__ = m;
/* 000950 */ 			var start = __left0__ [0];
/* 000950 */ 			var end = __left0__ [1];
/* 000951 */ 			if (__t__ (start === null)) {
/* 000952 */ 				var start = __neg__ (1);
/* 000952 */ 			}
/* 000953 */ 			else {
/* 000954 */ 				var start = __add__ (offset, start);
/* 000954 */ 			}
/* 000955 */ 			var end = __add__ (offset, end);
/* 000956 */ 			return tuple ([start, end]);
/* 000956 */ 		};
/* 000958 */ 		var get_next_split = function (chars, pos) {
/* 000958 */ 			if (arguments.length) {
/* 000958 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000958 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000958 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000958 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000958 */ 						switch (__attrib0__) {
/* 000958 */ 							case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000958 */ 							case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000958 */ 						}
/* 000958 */ 					}
/* 000958 */ 				}
/* 000958 */ 			}
/* 000958 */ 			else {
/* 000958 */ 			}
/* 000960 */ 			if (__t__ (__t__ (max_split !== null) && __ge__ (__call__ (len, null, split_node_lists), max_split))) {
/* 000961 */ 				return tuple ([__neg__ (1), __call__ (len, null, chars)]);
/* 000961 */ 			}
/* 000963 */ 			if (__t__ (__call__ (hasattr, null, sep_chars, 'search'))) {
/* 000969 */ 				var m = (function () {
/* 000969 */ 					var __accu0__ = sep_chars;
/* 000969 */ 					return __call__ (__accu0__.search, __accu0__, __getslice__ (chars, pos, null, 1));
/* 000969 */ 				}) ();
/* 000970 */ 				return __call__ (get_split_match_start_end, null, m, pos);
/* 000970 */ 			}
/* 000972 */ 			if (__t__ (__call__ (callable, null, sep_chars))) {
/* 000973 */ 				var m = __call__ (sep_chars, null, chars, pos);
/* 000974 */ 				return __call__ (get_split_match_start_end, null, m);
/* 000974 */ 			}
/* 000976 */ 			var idx = (function () {
/* 000976 */ 				var __accu0__ = chars;
/* 000976 */ 				return __call__ (__accu0__.find, __accu0__, sep_chars, pos);
/* 000976 */ 			}) ();
/* 000977 */ 			if (__t__ (__t__ (idx === null) || __eq__ (idx, __neg__ (1)))) {
/* 000978 */ 				return tuple ([__neg__ (1), null]);
/* 000978 */ 			}
/* 000979 */ 			return tuple ([idx, __add__ (idx, __call__ (len, null, sep_chars))]);
/* 000979 */ 		};
/* 000982 */ 		var lw = self.latex_walker;
/* 000983 */ 		if (__t__ (lw !== null)) {
/* 000984 */ 			var make_node = lw.make_node;
/* 000985 */ 			var make_nodelist = lw.make_nodelist;
/* 000985 */ 		}
/* 000986 */ 		else {
/* 000987 */ 			var make_node = (function __lambda__ (cls) {
/* 000987 */ 				var kwargs = dict ();
/* 000987 */ 				if (arguments.length) {
/* 000987 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000987 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000987 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000987 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000987 */ 							switch (__attrib0__) {
/* 000987 */ 								case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000987 */ 								default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000987 */ 							}
/* 000987 */ 						}
/* 000987 */ 						delete kwargs.__kwargtrans__;
/* 000987 */ 					}
/* 000987 */ 				}
/* 000987 */ 				else {
/* 000987 */ 				}
/* 000987 */ 				return __call__ (cls, null, __kwargtrans__ (kwargs));
/* 000987 */ 			});
/* 000988 */ 			var make_nodelist = (function __lambda__ (nl) {
/* 000988 */ 				var kwargs = dict ();
/* 000988 */ 				if (arguments.length) {
/* 000988 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000988 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000988 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000988 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000988 */ 							switch (__attrib0__) {
/* 000988 */ 								case 'nl': var nl = __allkwargs0__ [__attrib0__]; break;
/* 000988 */ 								default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000988 */ 							}
/* 000988 */ 						}
/* 000988 */ 						delete kwargs.__kwargtrans__;
/* 000988 */ 					}
/* 000988 */ 				}
/* 000988 */ 				else {
/* 000988 */ 				}
/* 000988 */ 				return __call__ (LatexNodeList, null, nl, __kwargtrans__ (kwargs));
/* 000988 */ 			});
/* 000988 */ 		}
/* 000990 */ 		var chars_to_node = function (chars, n, rel_pos, rel_pos_end) {
/* 000990 */ 			if (arguments.length) {
/* 000990 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000990 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000990 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000990 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000990 */ 						switch (__attrib0__) {
/* 000990 */ 							case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000990 */ 							case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000990 */ 							case 'rel_pos': var rel_pos = __allkwargs0__ [__attrib0__]; break;
/* 000990 */ 							case 'rel_pos_end': var rel_pos_end = __allkwargs0__ [__attrib0__]; break;
/* 000990 */ 						}
/* 000990 */ 					}
/* 000990 */ 				}
/* 000990 */ 			}
/* 000990 */ 			else {
/* 000990 */ 			}
/* 000991 */ 			return __call__ (make_node, null, LatexCharsNode, __kwargtrans__ ({parsing_state: self.parsing_state, pos: __add__ (n.pos, rel_pos), pos_end: __add__ (n.pos, rel_pos_end), chars: chars}));
/* 000991 */ 		};
/* 000997 */ 		var flush_nodes = function (nodes, pos_end) {
/* 000997 */ 			if (typeof pos_end == 'undefined' || (pos_end != null && pos_end.hasOwnProperty ("__kwargtrans__"))) {;
/* 000997 */ 				var pos_end = null;
/* 000997 */ 			};
/* 000997 */ 			if (arguments.length) {
/* 000997 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000997 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000997 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000997 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000997 */ 						switch (__attrib0__) {
/* 000997 */ 							case 'nodes': var nodes = __allkwargs0__ [__attrib0__]; break;
/* 000997 */ 							case 'pos_end': var pos_end = __allkwargs0__ [__attrib0__]; break;
/* 000997 */ 						}
/* 000997 */ 					}
/* 000997 */ 				}
/* 000997 */ 			}
/* 000997 */ 			else {
/* 000997 */ 			}
/* 001001 */ 			var newnodelist = __call__ (make_nodelist, null, nodes, __kwargtrans__ ({parsing_state: self.parsing_state, pos: (__t__ (__call__ (len, null, nodes)) ? null : pos_end), pos_end: pos_end}));
/* 001004 */ 			(function () {
/* 001004 */ 				var __accu0__ = split_node_lists;
/* 001004 */ 				return __call__ (__accu0__.append, __accu0__, newnodelist);
/* 001004 */ 			}) ();
/* 001004 */ 		};
/* 001006 */ 		var pending_nodes = [];
/* 001008 */ 		var __iterable0__ = self.nodelist;
/* 001008 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001008 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 001010 */ 			if (__t__ (n === null)) {
/* 001011 */ 				if (__t__ (!__t__ ((skip_none)))) {
/* 001012 */ 					(function () {
/* 001012 */ 						var __accu0__ = pending_nodes;
/* 001012 */ 						return __call__ (__accu0__.append, __accu0__, n);
/* 001012 */ 					}) ();
/* 001012 */ 				}
/* 001012 */ 				continue;
/* 001012 */ 			}
/* 001015 */ 			if (__t__ ((function () {
/* 001015 */ 				var __accu0__ = n;
/* 001015 */ 				return __call__ (__accu0__.isNodeType, __accu0__, LatexCharsNode);
/* 001015 */ 			}) ())) {
/* 001017 */ 				var next_sep_end = 0;
/* 001019 */ 				while (__t__ (true)) {
/* 001020 */ 					var prev_sep_end = next_sep_end;
/* 001021 */ 					var __left0__ = __call__ (get_next_split, null, n.chars, prev_sep_end);
/* 001021 */ 					var next_sep_idx = __left0__ [0];
/* 001021 */ 					var next_sep_end = __left0__ [1];
/* 001023 */ 					if (__t__ (__ne__ (next_sep_idx, __neg__ (1)))) {
/* 001024 */ 						var p = __getslice__ (n.chars, prev_sep_end, next_sep_idx, 1);
/* 001025 */ 						if (__t__ (__eq__ (prev_sep_end, 0))) {
/* 001034 */ 							if (__t__ (__call__ (len, null, p))) {
/* 001035 */ 								(function () {
/* 001035 */ 									var __accu0__ = pending_nodes;
/* 001036 */ 									return __call__ (__accu0__.append, __accu0__, __call__ (chars_to_node, null, p, n, prev_sep_end, next_sep_idx));
/* 001036 */ 								}) ();
/* 001036 */ 							}
/* 001038 */ 							if (__t__ (__t__ (__call__ (len, null, pending_nodes)) || keep_empty)) {
/* 001039 */ 								__call__ (flush_nodes, null, pending_nodes, __kwargtrans__ ({pos_end: __add__ (n.pos, next_sep_idx)}));
/* 001039 */ 							}
/* 001040 */ 							var pending_nodes = [];
/* 001040 */ 							continue;
/* 001040 */ 						}
/* 001042 */ 						else {
/* 001045 */ 							var thenodes = [];
/* 001046 */ 							if (__t__ (__call__ (len, null, p))) {
/* 001048 */ 								var thenodes = [__call__ (chars_to_node, null, p, n, prev_sep_end, next_sep_idx)];
/* 001048 */ 							}
/* 001050 */ 							if (__t__ (__t__ (__call__ (len, null, thenodes)) || keep_empty)) {
/* 001051 */ 								__call__ (flush_nodes, null, thenodes, __kwargtrans__ ({pos_end: __add__ (n.pos, next_sep_idx)}));
/* 001051 */ 							}
/* 001051 */ 							continue;
/* 001051 */ 						}
/* 001051 */ 					}
/* 001054 */ 					else if (__t__ (__eq__ (prev_sep_end, 0))) {
/* 001058 */ 						(function () {
/* 001058 */ 							var __accu0__ = pending_nodes;
/* 001058 */ 							return __call__ (__accu0__.append, __accu0__, n);
/* 001058 */ 						}) ();
/* 001058 */ 						break;
/* 001058 */ 					}
/* 001060 */ 					else {
/* 001063 */ 						var p = __getslice__ (n.chars, prev_sep_end, null, 1);
/* 001064 */ 						if (__t__ (__call__ (len, null, p))) {
/* 001065 */ 							(function () {
/* 001065 */ 								var __accu0__ = pending_nodes;
/* 001066 */ 								return __call__ (__accu0__.append, __accu0__, __call__ (chars_to_node, null, p, n, prev_sep_end, __call__ (len, null, n.chars)));
/* 001066 */ 							}) ();
/* 001066 */ 						}
/* 001066 */ 						break;
/* 001066 */ 					}
/* 001066 */ 				}
/* 001066 */ 				continue;
/* 001066 */ 			}
/* 001075 */ 			(function () {
/* 001075 */ 				var __accu0__ = pending_nodes;
/* 001075 */ 				return __call__ (__accu0__.append, __accu0__, n);
/* 001075 */ 			}) ();
/* 001075 */ 		}
/* 001077 */ 		if (__t__ (__t__ (pending_nodes) || keep_empty)) {
/* 001078 */ 			__call__ (flush_nodes, null, pending_nodes, __kwargtrans__ ({pos_end: self.pos_end}));
/* 001078 */ 		}
/* 001080 */ 		return split_node_lists;
/* 001080 */ 	});},
/* 001084 */ 	get get_content_as_chars () {return __get__ (this, function (self) {
/* 001084 */ 		if (arguments.length) {
/* 001084 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001084 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001084 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001084 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001084 */ 					switch (__attrib0__) {
/* 001084 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001084 */ 					}
/* 001084 */ 				}
/* 001084 */ 			}
/* 001084 */ 		}
/* 001084 */ 		else {
/* 001084 */ 		}
/* 001099 */ 		return __call__ (_get_content_as_chars, null, self.nodelist);
/* 001099 */ 	});},
/* 001103 */ 	get __eq__ () {return __get__ (this, function (self, other) {
/* 001103 */ 		if (arguments.length) {
/* 001103 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001103 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001103 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001103 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001103 */ 					switch (__attrib0__) {
/* 001103 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001103 */ 						case 'other': var other = __allkwargs0__ [__attrib0__]; break;
/* 001103 */ 					}
/* 001103 */ 				}
/* 001103 */ 			}
/* 001103 */ 		}
/* 001103 */ 		else {
/* 001103 */ 		}
/* 001104 */ 		if (__t__ (__call__ (isinstance, null, other, list))) {
/* 001105 */ 			return __eq__ (self.nodelist, other);
/* 001105 */ 		}
/* 001106 */ 		return __t__ (__eq__ (self.nodelist, other.nodelist)) && __t__ ((__t__ (__t__ (self.pos === null) && other.pos === null) || __eq__ (self.pos, other.pos))) && (__t__ (__t__ (self.pos_end === null) && other.pos_end === null) || __eq__ (self.pos_end, other.pos_end));
/* 001106 */ 	});},
/* 001115 */ 	get to_json_object () {return __get__ (this, function (self) {
/* 001115 */ 		if (arguments.length) {
/* 001115 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001115 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001115 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001115 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001115 */ 					switch (__attrib0__) {
/* 001115 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001115 */ 					}
/* 001115 */ 				}
/* 001115 */ 			}
/* 001115 */ 		}
/* 001115 */ 		else {
/* 001115 */ 		}
/* 001116 */ 		return self.nodelist;
/* 001116 */ 	});},
/* 001118 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 001118 */ 		if (arguments.length) {
/* 001118 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001118 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001118 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001118 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001118 */ 					switch (__attrib0__) {
/* 001118 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001118 */ 					}
/* 001118 */ 				}
/* 001118 */ 			}
/* 001118 */ 		}
/* 001118 */ 		else {
/* 001118 */ 		}
/* 001119 */ 		return (function () {
/* 001119 */ 			var __accu0__ = 'LatexNodeList({nodelist!r}, pos={pos!r}, pos_end={pos_end!r})';
/* 001119 */ 			return __call__ (__accu0__.format, __accu0__, __kwargtrans__ ({nodelist: self.nodelist, pos: self.pos, pos_end: self.pos_end}));
/* 001119 */ 		}) ();
/* 001119 */ 	});}
/* 001119 */ });
/* 001119 */ Object.defineProperty (LatexNodeList, 'len', property.call (LatexNodeList, LatexNodeList._get_len));;
/* 001127 */ export var _get_content_as_chars = function (nodelist) {
/* 001127 */ 	if (arguments.length) {
/* 001127 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001127 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001127 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001127 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001127 */ 				switch (__attrib0__) {
/* 001127 */ 					case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 001127 */ 				}
/* 001127 */ 			}
/* 001127 */ 		}
/* 001127 */ 	}
/* 001127 */ 	else {
/* 001127 */ 	}
/* 001133 */ 	if (__t__ (nodelist === null)) {
/* 001134 */ 		return '';
/* 001134 */ 	}
/* 001136 */ 	var charslist = [];
/* 001138 */ 	var __iterable0__ = nodelist;
/* 001138 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001138 */ 		var n = __getitem__ (__iterable0__, __index0__);
/* 001140 */ 		if (__t__ (n === null)) {
/* 001140 */ 			continue;
/* 001140 */ 		}
/* 001143 */ 		if (__t__ ((function () {
/* 001143 */ 			var __accu0__ = n;
/* 001143 */ 			return __call__ (__accu0__.isNodeType, __accu0__, LatexCommentNode);
/* 001143 */ 		}) ())) {
/* 001143 */ 			continue;
/* 001143 */ 		}
/* 001147 */ 		if (__t__ ((function () {
/* 001147 */ 			var __accu0__ = n;
/* 001147 */ 			return __call__ (__accu0__.isNodeType, __accu0__, LatexGroupNode);
/* 001147 */ 		}) ())) {
/* 001149 */ 			(function () {
/* 001149 */ 				var __accu0__ = charslist;
/* 001149 */ 				return __call__ (__accu0__.append, __accu0__, __call__ (_get_content_as_chars, null, n.nodelist));
/* 001149 */ 			}) ();
/* 001149 */ 			continue;
/* 001149 */ 		}
/* 001152 */ 		if (__t__ ((function () {
/* 001152 */ 			var __accu0__ = n;
/* 001152 */ 			return __call__ (__accu0__.isNodeType, __accu0__, LatexCharsNode);
/* 001152 */ 		}) ())) {
/* 001153 */ 			(function () {
/* 001153 */ 				var __accu0__ = charslist;
/* 001153 */ 				return __call__ (__accu0__.append, __accu0__, n.chars);
/* 001153 */ 			}) ();
/* 001153 */ 			continue;
/* 001153 */ 		}
/* 001157 */ 		var __except0__ = __call__ (LatexWalkerParseError, null, (function () {
/* 001157 */ 			var __accu0__ = 'Expected simple characters only, got ‘{}’';
/* 001157 */ 			return __call__ (__accu0__.format, __accu0__, n.__class__.__name__);
/* 001157 */ 		}) (), __kwargtrans__ ({pos: n.pos}));
/* 001157 */ 		__except0__.__cause__ = null;
/* 001157 */ 		throw __except0__;
/* 001157 */ 	}
/* 001161 */ 	return (function () {
/* 001161 */ 		var __accu0__ = '';
/* 001161 */ 		return __call__ (__accu0__.join, __accu0__, charslist);
/* 001161 */ 	}) ();
/* 001161 */ };
/* 001168 */ export var _update_posposend_from_nodelist = function (pos, pos_end, nodelist) {
/* 001168 */ 	if (arguments.length) {
/* 001168 */ 		var __ilastarg0__ = arguments.length - 1;
/* 001168 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001168 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001168 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 001168 */ 				switch (__attrib0__) {
/* 001168 */ 					case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 001168 */ 					case 'pos_end': var pos_end = __allkwargs0__ [__attrib0__]; break;
/* 001168 */ 					case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 001168 */ 				}
/* 001168 */ 			}
/* 001168 */ 		}
/* 001168 */ 	}
/* 001168 */ 	else {
/* 001168 */ 	}
/* 001170 */ 	if (__t__ (pos === null)) {
/* 001171 */ 		var __break0__ = false;
/* 001171 */ 		var __iterable0__ = nodelist;
/* 001171 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001171 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 001172 */ 			if (__t__ (n !== null)) {
/* 001173 */ 				var pos = n.pos;
/* 001173 */ 				__break0__ = true;
/* 001173 */ 				break;
/* 001173 */ 			}
/* 001173 */ 		}
/* 001175 */ 		if (!__break0__) {
/* 001176 */ 			var pos = null;
/* 001176 */ 		}
/* 001176 */ 	}
/* 001178 */ 	if (__t__ (pos_end === null)) {
/* 001179 */ 		var __break0__ = false;
/* 001179 */ 		var __iterable0__ = __call__ (py_reversed, null, nodelist);
/* 001179 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001179 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 001180 */ 			if (__t__ (n !== null)) {
/* 001181 */ 				var pos_end = n.pos_end;
/* 001181 */ 				__break0__ = true;
/* 001181 */ 				break;
/* 001181 */ 			}
/* 001181 */ 		}
/* 001183 */ 		if (!__break0__) {
/* 001184 */ 			var pos_end = null;
/* 001184 */ 		}
/* 001184 */ 	}
/* 001186 */ 	return tuple ([pos, pos_end]);
/* 001186 */ };
/* 001194 */ export var LatexNodesVisitor =  __class__ ('LatexNodesVisitor', [object], {
/* 001194 */ 	__module__: __name__,
/* 001205 */ 	get visit () {return __get__ (this, function (self, node) {
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
/* 001212 */ 		// pass;
/* 001212 */ 	});},
/* 001214 */ 	get visit_chars_node () {return __get__ (this, function (self, node) {
/* 001214 */ 		if (arguments.length) {
/* 001214 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001214 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001214 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001214 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001214 */ 					switch (__attrib0__) {
/* 001214 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001214 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001214 */ 					}
/* 001214 */ 				}
/* 001214 */ 			}
/* 001214 */ 		}
/* 001214 */ 		else {
/* 001214 */ 		}
/* 001215 */ 		(function () {
/* 001215 */ 			var __accu0__ = self;
/* 001215 */ 			return __call__ (__accu0__.visit, __accu0__, node);
/* 001215 */ 		}) ();
/* 001215 */ 	});},
/* 001217 */ 	get visit_group_node () {return __get__ (this, function (self, node) {
/* 001217 */ 		if (arguments.length) {
/* 001217 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001217 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001217 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001217 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001217 */ 					switch (__attrib0__) {
/* 001217 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001217 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001217 */ 					}
/* 001217 */ 				}
/* 001217 */ 			}
/* 001217 */ 		}
/* 001217 */ 		else {
/* 001217 */ 		}
/* 001218 */ 		(function () {
/* 001218 */ 			var __accu0__ = self;
/* 001218 */ 			return __call__ (__accu0__.visit, __accu0__, node);
/* 001218 */ 		}) ();
/* 001218 */ 	});},
/* 001220 */ 	get visit_comment_node () {return __get__ (this, function (self, node) {
/* 001220 */ 		if (arguments.length) {
/* 001220 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001220 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001220 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001220 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001220 */ 					switch (__attrib0__) {
/* 001220 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001220 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001220 */ 					}
/* 001220 */ 				}
/* 001220 */ 			}
/* 001220 */ 		}
/* 001220 */ 		else {
/* 001220 */ 		}
/* 001221 */ 		(function () {
/* 001221 */ 			var __accu0__ = self;
/* 001221 */ 			return __call__ (__accu0__.visit, __accu0__, node);
/* 001221 */ 		}) ();
/* 001221 */ 	});},
/* 001223 */ 	get visit_macro_node () {return __get__ (this, function (self, node) {
/* 001223 */ 		if (arguments.length) {
/* 001223 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001223 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001223 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001223 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001223 */ 					switch (__attrib0__) {
/* 001223 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001223 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001223 */ 					}
/* 001223 */ 				}
/* 001223 */ 			}
/* 001223 */ 		}
/* 001223 */ 		else {
/* 001223 */ 		}
/* 001224 */ 		(function () {
/* 001224 */ 			var __accu0__ = self;
/* 001224 */ 			return __call__ (__accu0__.visit, __accu0__, node);
/* 001224 */ 		}) ();
/* 001224 */ 	});},
/* 001226 */ 	get visit_environment_node () {return __get__ (this, function (self, node) {
/* 001226 */ 		if (arguments.length) {
/* 001226 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001226 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001226 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001226 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001226 */ 					switch (__attrib0__) {
/* 001226 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001226 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001226 */ 					}
/* 001226 */ 				}
/* 001226 */ 			}
/* 001226 */ 		}
/* 001226 */ 		else {
/* 001226 */ 		}
/* 001227 */ 		(function () {
/* 001227 */ 			var __accu0__ = self;
/* 001227 */ 			return __call__ (__accu0__.visit, __accu0__, node);
/* 001227 */ 		}) ();
/* 001227 */ 	});},
/* 001229 */ 	get visit_specials_node () {return __get__ (this, function (self, node) {
/* 001229 */ 		if (arguments.length) {
/* 001229 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001229 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001229 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001229 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001229 */ 					switch (__attrib0__) {
/* 001229 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001229 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001229 */ 					}
/* 001229 */ 				}
/* 001229 */ 			}
/* 001229 */ 		}
/* 001229 */ 		else {
/* 001229 */ 		}
/* 001230 */ 		(function () {
/* 001230 */ 			var __accu0__ = self;
/* 001230 */ 			return __call__ (__accu0__.visit, __accu0__, node);
/* 001230 */ 		}) ();
/* 001230 */ 	});},
/* 001232 */ 	get visit_math_node () {return __get__ (this, function (self, node) {
/* 001232 */ 		if (arguments.length) {
/* 001232 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001232 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001232 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001232 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001232 */ 					switch (__attrib0__) {
/* 001232 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001232 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001232 */ 					}
/* 001232 */ 				}
/* 001232 */ 			}
/* 001232 */ 		}
/* 001232 */ 		else {
/* 001232 */ 		}
/* 001233 */ 		(function () {
/* 001233 */ 			var __accu0__ = self;
/* 001233 */ 			return __call__ (__accu0__.visit, __accu0__, node);
/* 001233 */ 		}) ();
/* 001233 */ 	});},
/* 001235 */ 	get visit_node_list () {return __get__ (this, function (self, nodes) {
/* 001235 */ 		if (arguments.length) {
/* 001235 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001235 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001235 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001235 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001235 */ 					switch (__attrib0__) {
/* 001235 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001235 */ 						case 'nodes': var nodes = __allkwargs0__ [__attrib0__]; break;
/* 001235 */ 					}
/* 001235 */ 				}
/* 001235 */ 			}
/* 001235 */ 		}
/* 001235 */ 		else {
/* 001235 */ 		}
/* 001236 */ 		(function () {
/* 001236 */ 			var __accu0__ = self;
/* 001236 */ 			return __call__ (__accu0__.visit, __accu0__, nodes);
/* 001236 */ 		}) ();
/* 001236 */ 	});},
/* 001238 */ 	get visit_parsed_arguments () {return __get__ (this, function (self, parsed_args) {
/* 001238 */ 		if (arguments.length) {
/* 001238 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001238 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001238 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001238 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001238 */ 					switch (__attrib0__) {
/* 001238 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001238 */ 						case 'parsed_args': var parsed_args = __allkwargs0__ [__attrib0__]; break;
/* 001238 */ 					}
/* 001238 */ 				}
/* 001238 */ 			}
/* 001238 */ 		}
/* 001238 */ 		else {
/* 001238 */ 		}
/* 001239 */ 		(function () {
/* 001239 */ 			var __accu0__ = self;
/* 001239 */ 			return __call__ (__accu0__.visit, __accu0__, parsed_args);
/* 001239 */ 		}) ();
/* 001239 */ 	});},
/* 001242 */ 	get visit_unknown_node () {return __get__ (this, function (self, node) {
/* 001242 */ 		if (arguments.length) {
/* 001242 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001242 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001242 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001242 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001242 */ 					switch (__attrib0__) {
/* 001242 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001242 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001242 */ 					}
/* 001242 */ 				}
/* 001242 */ 			}
/* 001242 */ 		}
/* 001242 */ 		else {
/* 001242 */ 		}
/* 001243 */ 		(function () {
/* 001243 */ 			var __accu0__ = self;
/* 001243 */ 			return __call__ (__accu0__.visit, __accu0__, node);
/* 001243 */ 		}) ();
/* 001243 */ 	});},
/* 001248 */ 	get start () {return __get__ (this, function (self, node) {
/* 001248 */ 		if (arguments.length) {
/* 001248 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001248 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001248 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001248 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001248 */ 					switch (__attrib0__) {
/* 001248 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001248 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001248 */ 					}
/* 001248 */ 				}
/* 001248 */ 			}
/* 001248 */ 		}
/* 001248 */ 		else {
/* 001248 */ 		}
/* 001260 */ 		(function () {
/* 001260 */ 			var __accu0__ = node;
/* 001260 */ 			return __call__ (__accu0__.accept_node_visitor, __accu0__, self);
/* 001260 */ 		}) ();
/* 001260 */ 	});}
/* 001260 */ });
/* 001271 */ export var latex_node_types = [LatexNode, LatexCharsNode, LatexGroupNode, LatexCommentNode, LatexMacroNode, LatexEnvironmentNode, LatexSpecialsNode, LatexMathNode];
/* 001282 */ export var __all__ = __add__ ((function () {
/* 001282 */ 	var __accu0__ = [];
/* 001282 */ 	var __iterable0__ = latex_node_types;
/* 001282 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001282 */ 		var nc = __getitem__ (__iterable0__, __index0__);
/* 001282 */ 		(function () {
/* 001282 */ 			var __accu1__ = __accu0__;
/* 001282 */ 			return __call__ (__accu1__.append, __accu1__, nc.__name__);
/* 001282 */ 		}) ();
/* 001282 */ 	}
/* 001282 */ 	return __accu0__;
/* 001282 */ }) (), ['LatexNodeList', 'LatexNodesVisitor']);
/* 000037 */ 
//# sourceMappingURL=pylatexenc.latexnodes.nodes.map