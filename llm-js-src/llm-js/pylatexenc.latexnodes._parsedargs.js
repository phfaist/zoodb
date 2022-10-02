/* 000001 */ // Transcrypt'ed from Python, 2022-10-02 16:34:48
/* 000288 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
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
/* 000103 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000103 */ 		if (arguments.length) {
/* 000103 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000103 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000103 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000103 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000103 */ 					switch (__attrib0__) {
/* 000103 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000103 */ 					}
/* 000103 */ 				}
/* 000103 */ 			}
/* 000103 */ 		}
/* 000103 */ 		else {
/* 000103 */ 		}
/* 000105 */ 		return (function () {
/* 000105 */ 			var __accu0__ = '{cls}(argname={argname!r}, parser={parser!r}, parsing_state_delta={parsing_state_delta!r})';
/* 000105 */ 			return __call__ (__accu0__.format, __accu0__, __kwargtrans__ ({cls: self.__class__.__name__, argname: self.argname, parser: self.parser, parsing_state_delta: self.parsing_state_delta}));
/* 000105 */ 		}) ();
/* 000105 */ 	});},
/* 000115 */ 	get to_json_object () {return __get__ (this, function (self) {
/* 000115 */ 		if (arguments.length) {
/* 000115 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000115 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000115 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000115 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000115 */ 					switch (__attrib0__) {
/* 000115 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000115 */ 					}
/* 000115 */ 				}
/* 000115 */ 			}
/* 000115 */ 		}
/* 000115 */ 		else {
/* 000115 */ 		}
/* 000116 */ 		var d = __call__ (dict, null, __kwargtrans__ ({parser: self.parser, argname: self.argname, parsing_state_delta: self.parsing_state_delta}));
/* 000121 */ 		return d;
/* 000121 */ 	});},
/* 000123 */ 	get __eq__ () {return __get__ (this, function (self, other) {
/* 000123 */ 		if (arguments.length) {
/* 000123 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000123 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000123 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000123 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000123 */ 					switch (__attrib0__) {
/* 000123 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000123 */ 						case 'other': var other = __allkwargs0__ [__attrib0__]; break;
/* 000123 */ 					}
/* 000123 */ 				}
/* 000123 */ 			}
/* 000123 */ 		}
/* 000123 */ 		else {
/* 000123 */ 		}
/* 000124 */ 		return __t__ (__eq__ (self.parser, other.parser)) && __t__ (__eq__ (self.argname, other.argname)) && __eq__ (self.parsing_state_delta, other.parsing_state_delta);
/* 000124 */ 	});}
/* 000124 */ });
/* 000133 */ export var ParsedArguments =  __class__ ('ParsedArguments', [object], {
/* 000133 */ 	__module__: __name__,
/* 000206 */ 	get __init__ () {return __get__ (this, function (self, argnlist, arguments_spec_list) {
/* 000206 */ 		if (typeof argnlist == 'undefined' || (argnlist != null && argnlist.hasOwnProperty ("__kwargtrans__"))) {;
/* 000206 */ 			var argnlist = null;
/* 000206 */ 		};
/* 000206 */ 		if (typeof arguments_spec_list == 'undefined' || (arguments_spec_list != null && arguments_spec_list.hasOwnProperty ("__kwargtrans__"))) {;
/* 000206 */ 			var arguments_spec_list = null;
/* 000206 */ 		};
/* 000206 */ 		var kwargs = dict ();
/* 000206 */ 		if (arguments.length) {
/* 000206 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000206 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000206 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000206 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000206 */ 					switch (__attrib0__) {
/* 000206 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000206 */ 						case 'argnlist': var argnlist = __allkwargs0__ [__attrib0__]; break;
/* 000206 */ 						case 'arguments_spec_list': var arguments_spec_list = __allkwargs0__ [__attrib0__]; break;
/* 000206 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000206 */ 					}
/* 000206 */ 				}
/* 000206 */ 				delete kwargs.__kwargtrans__;
/* 000206 */ 			}
/* 000206 */ 		}
/* 000206 */ 		else {
/* 000206 */ 		}
/* 000211 */ 		var argspec = (function () {
/* 000211 */ 			var __accu0__ = kwargs;
/* 000211 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'argspec', null);
/* 000211 */ 		}) ();
/* 000212 */ 		__call__ (__call__ (__super__, null, ParsedArguments, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000214 */ 		if (__t__ (__t__ (arguments_spec_list === null) && argspec !== null)) {
/* 000216 */ 			var arguments_spec_list = argspec;
/* 000216 */ 		}
/* 000218 */ 		self.argnlist = (__t__ (argnlist) ? argnlist : []);
/* 000220 */ 		self.arguments_spec_list = (__t__ (arguments_spec_list) ? arguments_spec_list : []);
/* 000220 */ 	});},
/* 000223 */ 	_fields: tuple (['arguments_spec_list', 'argnlist']),
/* 000255 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000255 */ 		if (arguments.length) {
/* 000255 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000255 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000255 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000255 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000255 */ 					switch (__attrib0__) {
/* 000255 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000255 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000255 */ 					}
/* 000255 */ 				}
/* 000255 */ 			}
/* 000255 */ 		}
/* 000255 */ 		else {
/* 000255 */ 		}
/* 000256 */ 		if (__t__ (self.argnlist !== null)) {
/* 000257 */ 			var __iterable0__ = self.argnlist;
/* 000257 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000257 */ 				var argnode = __getitem__ (__iterable0__, __index0__);
/* 000258 */ 				if (__t__ (argnode !== null)) {
/* 000259 */ 					(function () {
/* 000259 */ 						var __accu0__ = argnode;
/* 000259 */ 						return __call__ (__accu0__.accept_node_visitor, __accu0__, visitor);
/* 000259 */ 					}) ();
/* 000259 */ 				}
/* 000259 */ 			}
/* 000259 */ 		}
/* 000260 */ 		(function () {
/* 000260 */ 			var __accu0__ = visitor;
/* 000260 */ 			return __call__ (__accu0__.visit_parsed_arguments, __accu0__, self);
/* 000260 */ 		}) ();
/* 000260 */ 	});},
/* 000263 */ 	get __eq__ () {return __get__ (this, function (self, other) {
/* 000263 */ 		if (arguments.length) {
/* 000263 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000263 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000263 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000263 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000263 */ 					switch (__attrib0__) {
/* 000263 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000263 */ 						case 'other': var other = __allkwargs0__ [__attrib0__]; break;
/* 000263 */ 					}
/* 000263 */ 				}
/* 000263 */ 			}
/* 000263 */ 		}
/* 000263 */ 		else {
/* 000263 */ 		}
/* 000264 */ 		return __t__ (__eq__ (self.arguments_spec_list, other.arguments_spec_list)) && __eq__ (self.argnlist, other.argnlist);
/* 000264 */ 	});},
/* 000269 */ 	get to_json_object () {return __get__ (this, function (self) {
/* 000269 */ 		if (arguments.length) {
/* 000269 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000269 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000269 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000269 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000269 */ 					switch (__attrib0__) {
/* 000269 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000269 */ 					}
/* 000269 */ 				}
/* 000269 */ 			}
/* 000269 */ 		}
/* 000269 */ 		else {
/* 000269 */ 		}
/* 000282 */ 		return __call__ (dict, null, __kwargtrans__ ({arguments_spec_list: self.arguments_spec_list, argnlist: self.argnlist}));
/* 000282 */ 	});},
/* 000287 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000287 */ 		if (arguments.length) {
/* 000287 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000287 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000287 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000287 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000287 */ 					switch (__attrib0__) {
/* 000287 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000287 */ 					}
/* 000287 */ 				}
/* 000287 */ 			}
/* 000287 */ 		}
/* 000287 */ 		else {
/* 000287 */ 		}
/* 000288 */ 		return (function () {
/* 000288 */ 			var __accu0__ = '{}(arguments_spec_list={!r}, argnlist={!r})';
/* 000288 */ 			return __call__ (__accu0__.format, __accu0__, self.__class__.__name__, self.arguments_spec_list, self.argnlist);
/* 000288 */ 		}) ();
/* 000288 */ 	});}
/* 000288 */ });
/* 000288 */ 
//# sourceMappingURL=pylatexenc.latexnodes._parsedargs.map