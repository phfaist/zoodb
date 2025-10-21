/* 000001 */ // Transcrypt'ed from Python, 2025-10-21 23:26:08
/* 000285 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000001 */ var __name__ = 'pylatexenc.latexnodes._parsedargs';
/* 000039 */ export var _basestring = str;
/* 000057 */ export var LatexArgumentSpec =  __class__ ('LatexArgumentSpec', [object], {
/* 000057 */ 	__module__: __name__,
/* 000095 */ 	get __init__ () {return __get__ (this, function (self, parser, argname, parsing_state_delta) {
/* 000095 */ 		if (typeof argname == 'undefined' || (argname != null && argname.hasOwnProperty ("__kwargtrans__"))) {;
/* 000095 */ 			var argname = null;
/* 000095 */ 		};
/* 000095 */ 		if (typeof parsing_state_delta == 'undefined' || (parsing_state_delta != null && parsing_state_delta.hasOwnProperty ("__kwargtrans__"))) {;
/* 000095 */ 			var parsing_state_delta = null;
/* 000095 */ 		};
/* 000095 */ 		if (arguments.length) {
/* 000095 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000095 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000095 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000095 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000095 */ 					switch (__attrib0__) {
/* 000095 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000095 */ 						case 'parser': var parser = __allkwargs0__ [__attrib0__]; break;
/* 000095 */ 						case 'argname': var argname = __allkwargs0__ [__attrib0__]; break;
/* 000095 */ 						case 'parsing_state_delta': var parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000095 */ 					}
/* 000095 */ 				}
/* 000095 */ 			}
/* 000095 */ 		}
/* 000095 */ 		else {
/* 000095 */ 		}
/* 000097 */ 		self.parser = parser;
/* 000099 */ 		self.argname = argname;
/* 000101 */ 		self.parsing_state_delta = parsing_state_delta;
/* 000101 */ 	});},
/* 000103 */ 	_fields: tuple (['parser', 'argname', 'parsing_state_delta']),
/* 000106 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000106 */ 		if (arguments.length) {
/* 000106 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000106 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000106 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000106 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000106 */ 					switch (__attrib0__) {
/* 000106 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000106 */ 					}
/* 000106 */ 				}
/* 000106 */ 			}
/* 000106 */ 		}
/* 000106 */ 		else {
/* 000106 */ 		}
/* 000108 */ 		return (function () {
/* 000108 */ 			var __accu0__ = '{cls}(argname={argname!r}, parser={parser!r}, parsing_state_delta={parsing_state_delta!r})';
/* 000108 */ 			return __call__ (__accu0__.format, __accu0__, __kwargtrans__ ({cls: self.__class__.__name__, argname: self.argname, parser: self.parser, parsing_state_delta: self.parsing_state_delta}));
/* 000108 */ 		}) ();
/* 000108 */ 	});},
/* 000118 */ 	get to_json_object () {return __get__ (this, function (self) {
/* 000118 */ 		if (arguments.length) {
/* 000118 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000118 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000118 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000118 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000118 */ 					switch (__attrib0__) {
/* 000118 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000118 */ 					}
/* 000118 */ 				}
/* 000118 */ 			}
/* 000118 */ 		}
/* 000118 */ 		else {
/* 000118 */ 		}
/* 000119 */ 		var d = __call__ (dict, null, __kwargtrans__ ({parser: self.parser, argname: self.argname, parsing_state_delta: self.parsing_state_delta}));
/* 000124 */ 		return d;
/* 000124 */ 	});},
/* 000126 */ 	get __eq__ () {return __get__ (this, function (self, other) {
/* 000126 */ 		if (arguments.length) {
/* 000126 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000126 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000126 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000126 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000126 */ 					switch (__attrib0__) {
/* 000126 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000126 */ 						case 'other': var other = __allkwargs0__ [__attrib0__]; break;
/* 000126 */ 					}
/* 000126 */ 				}
/* 000126 */ 			}
/* 000126 */ 		}
/* 000126 */ 		else {
/* 000126 */ 		}
/* 000127 */ 		return __t__ (__eq__ (self.parser, other.parser)) && __t__ (__eq__ (self.argname, other.argname)) && __eq__ (self.parsing_state_delta, other.parsing_state_delta);
/* 000127 */ 	});}
/* 000127 */ });
/* 000136 */ export var ParsedArguments =  __class__ ('ParsedArguments', [object], {
/* 000136 */ 	__module__: __name__,
/* 000209 */ 	get __init__ () {return __get__ (this, function (self, argnlist, arguments_spec_list) {
/* 000209 */ 		if (typeof argnlist == 'undefined' || (argnlist != null && argnlist.hasOwnProperty ("__kwargtrans__"))) {;
/* 000209 */ 			var argnlist = null;
/* 000209 */ 		};
/* 000209 */ 		if (typeof arguments_spec_list == 'undefined' || (arguments_spec_list != null && arguments_spec_list.hasOwnProperty ("__kwargtrans__"))) {;
/* 000209 */ 			var arguments_spec_list = null;
/* 000209 */ 		};
/* 000209 */ 		var kwargs = dict ();
/* 000209 */ 		if (arguments.length) {
/* 000209 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000209 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000209 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000209 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000209 */ 					switch (__attrib0__) {
/* 000209 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000209 */ 						case 'argnlist': var argnlist = __allkwargs0__ [__attrib0__]; break;
/* 000209 */ 						case 'arguments_spec_list': var arguments_spec_list = __allkwargs0__ [__attrib0__]; break;
/* 000209 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000209 */ 					}
/* 000209 */ 				}
/* 000209 */ 				delete kwargs.__kwargtrans__;
/* 000209 */ 			}
/* 000209 */ 		}
/* 000209 */ 		else {
/* 000209 */ 		}
/* 000214 */ 		var argspec = (function () {
/* 000214 */ 			var __accu0__ = kwargs;
/* 000214 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'argspec', null);
/* 000214 */ 		}) ();
/* 000215 */ 		__call__ (__call__ (__super__, null, ParsedArguments, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000217 */ 		if (__t__ (__t__ (arguments_spec_list === null) && argspec !== null)) {
/* 000219 */ 			var arguments_spec_list = argspec;
/* 000219 */ 		}
/* 000221 */ 		self.argnlist = (__t__ (argnlist) ? argnlist : []);
/* 000223 */ 		self.arguments_spec_list = (__t__ (arguments_spec_list) ? arguments_spec_list : []);
/* 000223 */ 	});},
/* 000226 */ 	_fields: tuple (['arguments_spec_list', 'argnlist']),
/* 000258 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000258 */ 		if (arguments.length) {
/* 000258 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000258 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000258 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000258 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000258 */ 					switch (__attrib0__) {
/* 000258 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000258 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000258 */ 					}
/* 000258 */ 				}
/* 000258 */ 			}
/* 000258 */ 		}
/* 000258 */ 		else {
/* 000258 */ 		}
/* 000259 */ 		return (function () {
/* 000259 */ 			var __accu0__ = visitor;
/* 000259 */ 			return __call__ (__accu0__.node_standard_process_parsed_arguments, __accu0__, self);
/* 000259 */ 		}) ();
/* 000259 */ 	});},
/* 000262 */ 	get __eq__ () {return __get__ (this, function (self, other) {
/* 000262 */ 		if (arguments.length) {
/* 000262 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000262 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000262 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000262 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000262 */ 					switch (__attrib0__) {
/* 000262 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000262 */ 						case 'other': var other = __allkwargs0__ [__attrib0__]; break;
/* 000262 */ 					}
/* 000262 */ 				}
/* 000262 */ 			}
/* 000262 */ 		}
/* 000262 */ 		else {
/* 000262 */ 		}
/* 000263 */ 		return __t__ (__eq__ (self.arguments_spec_list, other.arguments_spec_list)) && __eq__ (self.argnlist, other.argnlist);
/* 000263 */ 	});},
/* 000268 */ 	get to_json_object () {return __get__ (this, function (self) {
/* 000268 */ 		if (arguments.length) {
/* 000268 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000268 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000268 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000268 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000268 */ 					switch (__attrib0__) {
/* 000268 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000268 */ 					}
/* 000268 */ 				}
/* 000268 */ 			}
/* 000268 */ 		}
/* 000268 */ 		else {
/* 000268 */ 		}
/* 000279 */ 		return __call__ (dict, null, __kwargtrans__ ({arguments_spec_list: self.arguments_spec_list, argnlist: self.argnlist}));
/* 000279 */ 	});},
/* 000284 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000284 */ 		if (arguments.length) {
/* 000284 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000284 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000284 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000284 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000284 */ 					switch (__attrib0__) {
/* 000284 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000284 */ 					}
/* 000284 */ 				}
/* 000284 */ 			}
/* 000284 */ 		}
/* 000284 */ 		else {
/* 000284 */ 		}
/* 000285 */ 		return (function () {
/* 000285 */ 			var __accu0__ = '{}(arguments_spec_list={!r}, argnlist={!r})';
/* 000285 */ 			return __call__ (__accu0__.format, __accu0__, self.__class__.__name__, self.arguments_spec_list, self.argnlist);
/* 000285 */ 		}) ();
/* 000285 */ 	});}
/* 000285 */ });
/* 000285 */ 
//# sourceMappingURL=pylatexenc.latexnodes._parsedargs.map