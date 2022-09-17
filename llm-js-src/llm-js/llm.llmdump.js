/* 000001 */ // Transcrypt'ed from Python, 2022-09-17 11:08:46
/* 000007 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000024 */ import {LLMFragment} from './llm.llmfragment.js';
/* 000019 */ import {LLMLatexWalker, LLMParsingState} from './llm.llmenvironment.js';
/* 000015 */ import {EnvironmentSpec, LatexContextDb, MacroSpec, SpecialsSpec} from './pylatexenc.macrospec.js';
/* 000011 */ import {LatexNodeList, latex_node_types} from './pylatexenc.latexnodes.nodes.js';
/* 000007 */ import {LatexArgumentSpec, ParsedArguments} from './pylatexenc.latexnodes.js';
/* 000007 */ export {latex_node_types, LatexContextDb, EnvironmentSpec, LatexArgumentSpec, LLMLatexWalker, LLMParsingState, SpecialsSpec, ParsedArguments, LatexNodeList, LLMFragment, MacroSpec};
/* 000001 */ var __name__ = 'llm.llmdump';
/* 000032 */ export var _FakeDataLoadedLLMLatexWalker =  __class__ ('_FakeDataLoadedLLMLatexWalker', [object], {
/* 000032 */ 	__module__: __name__,
/* 000033 */ 	get __init__ () {return __get__ (this, function (self, s) {
/* 000033 */ 		if (arguments.length) {
/* 000033 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000033 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000033 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000033 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000033 */ 					switch (__attrib0__) {
/* 000033 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000033 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000033 */ 					}
/* 000033 */ 				}
/* 000033 */ 			}
/* 000033 */ 		}
/* 000033 */ 		else {
/* 000033 */ 		}
/* 000034 */ 		self.s = s;
/* 000035 */ 		self._fields = tuple (['s']);
/* 000035 */ 	});},
/* 000037 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000037 */ 		if (arguments.length) {
/* 000037 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000037 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000037 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000037 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000037 */ 					switch (__attrib0__) {
/* 000037 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000037 */ 					}
/* 000037 */ 				}
/* 000037 */ 			}
/* 000037 */ 		}
/* 000037 */ 		else {
/* 000037 */ 		}
/* 000038 */ 		return '{}(s={})'.format (self.__class__.__name__, self.s);
/* 000038 */ 	});}
/* 000038 */ });
/* 000045 */ export var _dump_version = 1;
/* 000048 */ export var _Skip =  __class__ ('_Skip', [object], {
/* 000048 */ 	__module__: __name__,
/* 000048 */ });
/* 000052 */ export var _skip_types = tuple ([LatexArgumentSpec, MacroSpec, EnvironmentSpec, SpecialsSpec, LatexContextDb]);
/* 000057 */ export var LLMDataDumper =  __class__ ('LLMDataDumper', [object], {
/* 000057 */ 	__module__: __name__,
/* 000058 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000058 */ 		if (arguments.length) {
/* 000058 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000058 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000058 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000058 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000058 */ 					switch (__attrib0__) {
/* 000058 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000058 */ 						case 'environment': var environment = __allkwargs0__ [__attrib0__]; break;
/* 000058 */ 					}
/* 000058 */ 				}
/* 000058 */ 			}
/* 000058 */ 		}
/* 000058 */ 		else {
/* 000058 */ 		}
/* 000059 */ 		self.environment = environment;
/* 000060 */ 		(function () {
/* 000060 */ 			var __accu0__ = self;
/* 000060 */ 			return __call__ (__accu0__.py_clear, __accu0__);
/* 000060 */ 		}) ();
/* 000060 */ 	});},
/* 000062 */ 	get py_clear () {return __get__ (this, function (self) {
/* 000062 */ 		if (arguments.length) {
/* 000062 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000062 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000062 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000062 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000062 */ 					switch (__attrib0__) {
/* 000062 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000062 */ 					}
/* 000062 */ 				}
/* 000062 */ 			}
/* 000062 */ 		}
/* 000062 */ 		else {
/* 000062 */ 		}
/* 000063 */ 		self.data = dict ({'objects': dict ({}), 'resources': dict ({}), '_dump': dict ({'version': _dump_version})});
/* 000063 */ 	});},
/* 000071 */ 	get get_data () {return __get__ (this, function (self) {
/* 000071 */ 		if (arguments.length) {
/* 000071 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000071 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000071 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000071 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000071 */ 					switch (__attrib0__) {
/* 000071 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000071 */ 					}
/* 000071 */ 				}
/* 000071 */ 			}
/* 000071 */ 		}
/* 000071 */ 		else {
/* 000071 */ 		}
/* 000072 */ 		return self.data;
/* 000072 */ 	});},
/* 000074 */ 	get add_dump () {return __get__ (this, function (self, key, obj) {
/* 000074 */ 		if (arguments.length) {
/* 000074 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000074 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000074 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000074 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000074 */ 					switch (__attrib0__) {
/* 000074 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000074 */ 						case 'key': var key = __allkwargs0__ [__attrib0__]; break;
/* 000074 */ 						case 'obj': var obj = __allkwargs0__ [__attrib0__]; break;
/* 000074 */ 					}
/* 000074 */ 				}
/* 000074 */ 			}
/* 000074 */ 		}
/* 000074 */ 		else {
/* 000074 */ 		}
/* 000075 */ 		var dump = (function () {
/* 000075 */ 			var __accu0__ = self;
/* 000075 */ 			return __call__ (__accu0__._make_object_dump, __accu0__, obj, __kwargtrans__ ({dumping_state: dict ({'object': obj})}));
/* 000075 */ 		}) ();
/* 000076 */ 		__setitem__ (__getitem__ (self.data, 'objects'), key, dump);
/* 000076 */ 	});},
/* 000080 */ 	get _make_object_dump () {return __get__ (this, function (self, obj) {
/* 000080 */ 		var type_name = null;
/* 000080 */ 		if (arguments.length) {
/* 000080 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000080 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000080 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000080 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000080 */ 					switch (__attrib0__) {
/* 000080 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000080 */ 						case 'obj': var obj = __allkwargs0__ [__attrib0__]; break;
/* 000080 */ 						case 'dumping_state': var dumping_state = __allkwargs0__ [__attrib0__]; break;
/* 000080 */ 						case 'type_name': var type_name = __allkwargs0__ [__attrib0__]; break;
/* 000080 */ 					}
/* 000080 */ 				}
/* 000080 */ 			}
/* 000080 */ 		}
/* 000080 */ 		else {
/* 000080 */ 		}
/* 000082 */ 		var fieldnames = __call__ (set, null, obj._fields);
/* 000083 */ 		var __iterable0__ = __call__ (dir, null, obj);
/* 000083 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000083 */ 			var fieldname = __getitem__ (__iterable0__, __index0__);
/* 000084 */ 			if (__t__ ((function () {
/* 000084 */ 				var __accu0__ = fieldname;
/* 000084 */ 				return __call__ (__accu0__.startswith, __accu0__, 'llm');
/* 000084 */ 			}) ())) {
/* 000085 */ 				(function () {
/* 000085 */ 					var __accu0__ = fieldnames;
/* 000085 */ 					return __call__ (__accu0__.add, __accu0__, fieldname);
/* 000085 */ 				}) ();
/* 000085 */ 			}
/* 000085 */ 		}
/* 000087 */ 		var objdata = dict ({'$type': (__t__ (type_name !== null) ? type_name : obj.__class__.__name__)});
/* 000090 */ 		var __iterable0__ = __call__ (sorted, null, fieldnames);
/* 000090 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000090 */ 			var field = __getitem__ (__iterable0__, __index0__);
/* 000091 */ 			var val = (function () {
/* 000091 */ 				var __accu0__ = self;
/* 000091 */ 				return __call__ (__accu0__._make_dump, __accu0__, __call__ (getattr, null, obj, field), __kwargtrans__ ({dumping_state: dumping_state}));
/* 000091 */ 			}) ();
/* 000092 */ 			if (__t__ (val === _Skip)) {
/* 000093 */ 				var val = dict ({'$skip': true});
/* 000093 */ 			}
/* 000094 */ 			__setitem__ (objdata, field, val);
/* 000094 */ 		}
/* 000096 */ 		return objdata;
/* 000096 */ 	});},
/* 000098 */ 	get _make_dump () {return __get__ (this, function (self, x) {
/* 000098 */ 		if (arguments.length) {
/* 000098 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000098 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000098 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000098 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000098 */ 					switch (__attrib0__) {
/* 000098 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000098 */ 						case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000098 */ 						case 'dumping_state': var dumping_state = __allkwargs0__ [__attrib0__]; break;
/* 000098 */ 					}
/* 000098 */ 				}
/* 000098 */ 			}
/* 000098 */ 		}
/* 000098 */ 		else {
/* 000098 */ 		}
/* 000100 */ 		if (__t__ (__call__ (isinstance, null, x, tuple ([tuple, list])))) {
/* 000101 */ 			var result = [];
/* 000102 */ 			var __iterable0__ = x;
/* 000102 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000102 */ 				var item = __getitem__ (__iterable0__, __index0__);
/* 000103 */ 				var value = (function () {
/* 000103 */ 					var __accu0__ = self;
/* 000103 */ 					return __call__ (__accu0__._make_dump, __accu0__, item, __kwargtrans__ ({dumping_state: dumping_state}));
/* 000103 */ 				}) ();
/* 000104 */ 				if (__t__ (value === _Skip)) {
/* 000105 */ 					var value = null;
/* 000105 */ 				}
/* 000106 */ 				(function () {
/* 000106 */ 					var __accu0__ = result;
/* 000106 */ 					return __call__ (__accu0__.append, __accu0__, value);
/* 000106 */ 				}) ();
/* 000106 */ 			}
/* 000107 */ 			return result;
/* 000107 */ 		}
/* 000109 */ 		if (__t__ (__call__ (isinstance, null, x, LLMLatexWalker))) {
/* 000110 */ 			return (function () {
/* 000110 */ 				var __accu0__ = self;
/* 000113 */ 				return __call__ (__accu0__._make_resource, __accu0__, 'LLMLatexWalker', x, __call__ (_FakeDataLoadedLLMLatexWalker, null, x.s), __kwargtrans__ ({dumping_state: dumping_state}));
/* 000113 */ 			}) ();
/* 000113 */ 		}
/* 000117 */ 		if (__t__ (__call__ (isinstance, null, x, LLMParsingState))) {
/* 000118 */ 			return (function () {
/* 000118 */ 				var __accu0__ = self;
/* 000118 */ 				return __call__ (__accu0__._make_resource, __accu0__, 'LLMParsingState', x, x, __kwargtrans__ ({dumping_state: dumping_state}));
/* 000118 */ 			}) ();
/* 000118 */ 		}
/* 000125 */ 		if (__t__ (__call__ (isinstance, null, x, _skip_types))) {
/* 000126 */ 			return _Skip;
/* 000126 */ 		}
/* 000128 */ 		if (__t__ (__call__ (hasattr, null, x, '_fields'))) {
/* 000129 */ 			return (function () {
/* 000129 */ 				var __accu0__ = self;
/* 000129 */ 				return __call__ (__accu0__._make_object_dump, __accu0__, x, __kwargtrans__ ({dumping_state: dumping_state}));
/* 000129 */ 			}) ();
/* 000129 */ 		}
/* 000131 */ 		if (__t__ (x === null)) {
/* 000132 */ 			return null;
/* 000132 */ 		}
/* 000134 */ 		if (__t__ (__call__ (isinstance, null, x, tuple ([str, bool, int, float])))) {
/* 000135 */ 			return x;
/* 000135 */ 		}
/* 000137 */ 		var __except0__ = __call__ (ValueError, null, 'Cannot dump value {} of unsupported type'.format (x));
/* 000137 */ 		__except0__.__cause__ = null;
/* 000137 */ 		throw __except0__;
/* 000137 */ 	});},
/* 000139 */ 	get _make_resource () {return __get__ (this, function (self, restype, y, ydata) {
/* 000139 */ 		if (arguments.length) {
/* 000139 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000139 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000139 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000139 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000139 */ 					switch (__attrib0__) {
/* 000139 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000139 */ 						case 'restype': var restype = __allkwargs0__ [__attrib0__]; break;
/* 000139 */ 						case 'y': var y = __allkwargs0__ [__attrib0__]; break;
/* 000139 */ 						case 'ydata': var ydata = __allkwargs0__ [__attrib0__]; break;
/* 000139 */ 						case 'dumping_state': var dumping_state = __allkwargs0__ [__attrib0__]; break;
/* 000139 */ 					}
/* 000139 */ 				}
/* 000139 */ 			}
/* 000139 */ 		}
/* 000139 */ 		else {
/* 000139 */ 		}
/* 000140 */ 		if (__t__ (!__in__ (restype, __getitem__ (self.data, 'resources')))) {
/* 000141 */ 			__setitem__ (__getitem__ (self.data, 'resources'), restype, dict ({}));
/* 000141 */ 		}
/* 000143 */ 		var reskey = __call__ (str, null, __call__ (id, null, y));
/* 000144 */ 		if (__t__ (!__in__ (reskey, __getitem__ (__getitem__ (self.data, 'resources'), restype)))) {
/* 000145 */ 			var ydata_dump = (function () {
/* 000145 */ 				var __accu0__ = self;
/* 000145 */ 				return __call__ (__accu0__._make_object_dump, __accu0__, ydata, __kwargtrans__ ({dumping_state: dumping_state, type_name: restype}));
/* 000145 */ 			}) ();
/* 000148 */ 			__setitem__ (__getitem__ (__getitem__ (self.data, 'resources'), restype), reskey, ydata_dump);
/* 000148 */ 		}
/* 000150 */ 		return dict ({'$restype': restype, '$reskey': reskey});
/* 000150 */ 	});}
/* 000150 */ });
/* 000156 */ export var LLMDataLoadNotSupported =  __class__ ('LLMDataLoadNotSupported', [object], {
/* 000156 */ 	__module__: __name__,
/* 000156 */ });
/* 000160 */ export var latex_node_types_dict = (function () {
/* 000160 */ 	var __accu0__ = [];
/* 000160 */ 	var __iterable0__ = latex_node_types;
/* 000160 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000162 */ 		var c = __getitem__ (__iterable0__, __index0__);
/* 000162 */ 		(function () {
/* 000162 */ 			var __accu1__ = __accu0__;
/* 000162 */ 			return __call__ (__accu1__.append, __accu1__, [c.__name__, c]);
/* 000162 */ 		}) ();
/* 000162 */ 	}
/* 000162 */ 	return dict (__accu0__);
/* 000162 */ }) ();
/* 000165 */ export var _objtypes = (function () {
/* 000165 */ 	var __accu0__ = [];
/* 000165 */ 	var __iterable0__ = [LLMParsingState, ParsedArguments];
/* 000165 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000169 */ 		var c = __getitem__ (__iterable0__, __index0__);
/* 000167 */ 		(function () {
/* 000167 */ 			var __accu1__ = __accu0__;
/* 000167 */ 			return __call__ (__accu1__.append, __accu1__, [c.__name__, c]);
/* 000167 */ 		}) ();
/* 000167 */ 	}
/* 000167 */ 	return dict (__accu0__);
/* 000167 */ }) ();
/* 000173 */ export var LLMDataLoader =  __class__ ('LLMDataLoader', [object], {
/* 000173 */ 	__module__: __name__,
/* 000174 */ 	get __init__ () {return __get__ (this, function (self, data) {
/* 000174 */ 		if (arguments.length) {
/* 000174 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000174 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000174 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000174 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000174 */ 					switch (__attrib0__) {
/* 000174 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000174 */ 						case 'data': var data = __allkwargs0__ [__attrib0__]; break;
/* 000174 */ 						case 'environment': var environment = __allkwargs0__ [__attrib0__]; break;
/* 000174 */ 					}
/* 000174 */ 				}
/* 000174 */ 			}
/* 000174 */ 		}
/* 000174 */ 		else {
/* 000174 */ 		}
/* 000175 */ 		self.data = data;
/* 000176 */ 		self.environment = environment;
/* 000178 */ 		if (__t__ (__ne__ (__getitem__ (__getitem__ (self.data, '_dump'), 'version'), _dump_version))) {
/* 000179 */ 			var __except0__ = __call__ (RuntimeError, null, 'Dump version mismatch: {}, expected {}'.format (__getitem__ (__getitem__ (self.data, '_dump'), 'version'), _dump_version));
/* 000179 */ 			__except0__.__cause__ = null;
/* 000179 */ 			throw __except0__;
/* 000179 */ 		}
/* 000179 */ 	});},
/* 000184 */ 	get get_keys () {return __get__ (this, function (self) {
/* 000184 */ 		if (arguments.length) {
/* 000184 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000184 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000184 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000184 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000184 */ 					switch (__attrib0__) {
/* 000184 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000184 */ 					}
/* 000184 */ 				}
/* 000184 */ 			}
/* 000184 */ 		}
/* 000184 */ 		else {
/* 000184 */ 		}
/* 000185 */ 		return __call__ (list, null, (function () {
/* 000185 */ 			var __accu0__ = __getitem__ (self.data, 'objects');
/* 000185 */ 			return __call__ (__accu0__.py_keys, __accu0__);
/* 000185 */ 		}) ());
/* 000185 */ 	});},
/* 000187 */ 	get get_object () {return __get__ (this, function (self, key) {
/* 000187 */ 		if (arguments.length) {
/* 000187 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000187 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000187 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000187 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000187 */ 					switch (__attrib0__) {
/* 000187 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000187 */ 						case 'key': var key = __allkwargs0__ [__attrib0__]; break;
/* 000187 */ 					}
/* 000187 */ 				}
/* 000187 */ 			}
/* 000187 */ 		}
/* 000187 */ 		else {
/* 000187 */ 		}
/* 000188 */ 		var data = __getitem__ (__getitem__ (self.data, 'objects'), key);
/* 000189 */ 		return (function () {
/* 000189 */ 			var __accu0__ = self;
/* 000189 */ 			return __call__ (__accu0__._load_from_data, __accu0__, data);
/* 000189 */ 		}) ();
/* 000189 */ 	});},
/* 000193 */ 	get _load_from_data () {return __get__ (this, function (self, data) {
/* 000193 */ 		if (arguments.length) {
/* 000193 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000193 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000193 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000193 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000193 */ 					switch (__attrib0__) {
/* 000193 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000193 */ 						case 'data': var data = __allkwargs0__ [__attrib0__]; break;
/* 000193 */ 					}
/* 000193 */ 				}
/* 000193 */ 			}
/* 000193 */ 		}
/* 000193 */ 		else {
/* 000193 */ 		}
/* 000194 */ 		if (__t__ (__call__ (isinstance, null, data, list))) {
/* 000195 */ 			return (function () {
/* 000195 */ 				var __accu0__ = [];
/* 000195 */ 				var __iterable0__ = data;
/* 000195 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000195 */ 					var item = __getitem__ (__iterable0__, __index0__);
/* 000195 */ 					(function () {
/* 000195 */ 						var __accu1__ = __accu0__;
/* 000195 */ 						return __call__ (__accu1__.append, __accu1__, (function () {
/* 000195 */ 							var __accu2__ = self;
/* 000195 */ 							return __call__ (__accu2__._load_from_data, __accu2__, item);
/* 000195 */ 						}) ());
/* 000195 */ 					}) ();
/* 000195 */ 				}
/* 000195 */ 				return __accu0__;
/* 000195 */ 			}) ();
/* 000195 */ 		}
/* 000197 */ 		if (__t__ (__call__ (isinstance, null, data, dict))) {
/* 000198 */ 			if (__t__ (__t__ (__in__ ('$skip', data)) && __getitem__ (data, '$skip') === true)) {
/* 000199 */ 				return LLMDataLoadNotSupported;
/* 000199 */ 			}
/* 000200 */ 			if (__t__ (__in__ ('$restype', data))) {
/* 000201 */ 				return (function () {
/* 000201 */ 					var __accu0__ = self;
/* 000201 */ 					return __call__ (__accu0__._load_resource, __accu0__, __getitem__ (data, '$restype'), __getitem__ (data, '$reskey'));
/* 000201 */ 				}) ();
/* 000201 */ 			}
/* 000202 */ 			if (__t__ (__in__ ('$type', data))) {
/* 000203 */ 				return (function () {
/* 000203 */ 					var __accu0__ = self;
/* 000203 */ 					return __call__ (__accu0__._load_object, __accu0__, (function () {
/* 000203 */ 						var __accu1__ = data;
/* 000203 */ 						return __call__ (__accu1__.py_pop, __accu1__, '$type');
/* 000203 */ 					}) (), data);
/* 000203 */ 				}) ();
/* 000203 */ 			}
/* 000203 */ 		}
/* 000205 */ 		return data;
/* 000205 */ 	});},
/* 000207 */ 	get _load_resource () {return __get__ (this, function (self, restype, reskey) {
/* 000207 */ 		if (arguments.length) {
/* 000207 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000207 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000207 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000207 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000207 */ 					switch (__attrib0__) {
/* 000207 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000207 */ 						case 'restype': var restype = __allkwargs0__ [__attrib0__]; break;
/* 000207 */ 						case 'reskey': var reskey = __allkwargs0__ [__attrib0__]; break;
/* 000207 */ 					}
/* 000207 */ 				}
/* 000207 */ 			}
/* 000207 */ 		}
/* 000207 */ 		else {
/* 000207 */ 		}
/* 000208 */ 		var resdata = __getitem__ (__getitem__ (__getitem__ (self.data, 'resources'), restype), reskey);
/* 000209 */ 		if (__t__ (__eq__ (restype, 'LLMLatexWalker'))) {
/* 000210 */ 			return __call__ (_FakeDataLoadedLLMLatexWalker, null, __getitem__ (resdata, 's'));
/* 000210 */ 		}
/* 000211 */ 		if (__t__ (__eq__ (restype, 'LLMParsingState'))) {
/* 000212 */ 			return (function () {
/* 000212 */ 				var __accu0__ = self;
/* 000214 */ 				return __call__ (__accu0__._load_object, __accu0__, restype, __call__ (dict, null, resdata, __kwargtrans__ ({latex_context: LLMDataLoadNotSupported})));
/* 000214 */ 			}) ();
/* 000214 */ 		}
/* 000216 */ 		var __except0__ = __call__ (ValueError, null, 'Unknown data resource type to load: {}'.format (restype));
/* 000216 */ 		__except0__.__cause__ = null;
/* 000216 */ 		throw __except0__;
/* 000216 */ 	});},
/* 000218 */ 	get _load_object () {return __get__ (this, function (self, objtype, data) {
/* 000218 */ 		if (arguments.length) {
/* 000218 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000218 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000218 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000218 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000218 */ 					switch (__attrib0__) {
/* 000218 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000218 */ 						case 'objtype': var objtype = __allkwargs0__ [__attrib0__]; break;
/* 000218 */ 						case 'data': var data = __allkwargs0__ [__attrib0__]; break;
/* 000218 */ 					}
/* 000218 */ 				}
/* 000218 */ 			}
/* 000218 */ 		}
/* 000218 */ 		else {
/* 000218 */ 		}
/* 000220 */ 		if (__t__ (__eq__ (objtype, 'LLMFragment'))) {
/* 000221 */ 			var ObjTypeFn = self._make_fragment;
/* 000221 */ 		}
/* 000222 */ 		else if (__t__ (__t__ (__in__ (objtype, latex_node_types_dict)) || __eq__ (objtype, 'LatexNodeList'))) {
/* 000223 */ 			var ObjTypeFn = (function __lambda__ () {
/* 000223 */ 				var kwargs = dict ();
/* 000223 */ 				if (arguments.length) {
/* 000223 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000223 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000223 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000223 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000223 */ 							switch (__attrib0__) {
/* 000223 */ 								default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000223 */ 							}
/* 000223 */ 						}
/* 000223 */ 						delete kwargs.__kwargtrans__;
/* 000223 */ 					}
/* 000223 */ 				}
/* 000223 */ 				else {
/* 000223 */ 				}
/* 000223 */ 				return (function () {
/* 000223 */ 					var __accu0__ = self;
/* 000223 */ 					return __call__ (__accu0__._make_node_instance, __accu0__, objtype, kwargs);
/* 000223 */ 				}) ();
/* 000223 */ 			});
/* 000223 */ 		}
/* 000224 */ 		else if (__t__ (__in__ (objtype, _objtypes))) {
/* 000225 */ 			var ObjTypeFn = __getitem__ (_objtypes, objtype);
/* 000225 */ 		}
/* 000226 */ 		else {
/* 000227 */ 			var __except0__ = __call__ (ValueError, null, 'Unknown object type ‘{}’ for data loading'.format (objtype));
/* 000227 */ 			__except0__.__cause__ = null;
/* 000227 */ 			throw __except0__;
/* 000227 */ 		}
/* 000229 */ 		var args = (function () {
/* 000229 */ 			var __accu0__ = [];
/* 000231 */ 			var __iterable0__ = (function () {
/* 000231 */ 				var __accu1__ = data;
/* 000231 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000231 */ 			}) ();
/* 000231 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000231 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000231 */ 				var k = __left0__ [0];
/* 000231 */ 				var v = __left0__ [1];
/* 000232 */ 				if (__t__ (!__t__ (((function () {
/* 000232 */ 					var __accu1__ = k;
/* 000232 */ 					return __call__ (__accu1__.startswith, __accu1__, '$');
/* 000232 */ 				}) ())))) {
/* 000232 */ 					(function () {
/* 000232 */ 						var __accu1__ = __accu0__;
/* 000230 */ 						return __call__ (__accu1__.append, __accu1__, [k, (function () {
/* 000230 */ 							var __accu2__ = self;
/* 000230 */ 							return __call__ (__accu2__._load_from_data, __accu2__, v);
/* 000230 */ 						}) ()]);
/* 000230 */ 					}) ();
/* 000230 */ 				}
/* 000230 */ 			}
/* 000230 */ 			return dict (__accu0__);
/* 000230 */ 		}) ();
/* 000236 */ 		var obj = __call__ (ObjTypeFn, null, __kwargtrans__ (args));
/* 000237 */ 		return obj;
/* 000237 */ 	});},
/* 000239 */ 	get _make_node_instance () {return __get__ (this, function (self, nodetype, kwargs) {
/* 000239 */ 		if (arguments.length) {
/* 000239 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000239 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000239 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000239 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000239 */ 					switch (__attrib0__) {
/* 000239 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000239 */ 						case 'nodetype': var nodetype = __allkwargs0__ [__attrib0__]; break;
/* 000239 */ 						case 'kwargs': var kwargs = __allkwargs0__ [__attrib0__]; break;
/* 000239 */ 					}
/* 000239 */ 				}
/* 000239 */ 			}
/* 000239 */ 		}
/* 000239 */ 		else {
/* 000239 */ 		}
/* 000240 */ 		var base_kwargs = dict ({});
/* 000241 */ 		var attrib_kwargs = dict ({});
/* 000242 */ 		var __iterable0__ = (function () {
/* 000242 */ 			var __accu0__ = kwargs;
/* 000242 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000242 */ 		}) ();
/* 000242 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000242 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000242 */ 			var k = __left0__ [0];
/* 000242 */ 			var v = __left0__ [1];
/* 000243 */ 			if (__t__ ((function () {
/* 000243 */ 				var __accu0__ = k;
/* 000243 */ 				return __call__ (__accu0__.startswith, __accu0__, 'llm');
/* 000243 */ 			}) ())) {
/* 000244 */ 				__setitem__ (attrib_kwargs, k, v);
/* 000244 */ 			}
/* 000245 */ 			else {
/* 000246 */ 				__setitem__ (base_kwargs, k, v);
/* 000246 */ 			}
/* 000246 */ 		}
/* 000248 */ 		if (__t__ (__eq__ (nodetype, 'LatexNodeList'))) {
/* 000249 */ 			var ObjTypeFn = LatexNodeList;
/* 000249 */ 		}
/* 000250 */ 		else {
/* 000251 */ 			var ObjTypeFn = __getitem__ (latex_node_types_dict, nodetype);
/* 000251 */ 		}
/* 000253 */ 		var node = __call__ (ObjTypeFn, null, __kwargtrans__ (base_kwargs));
/* 000254 */ 		var __iterable0__ = (function () {
/* 000254 */ 			var __accu0__ = attrib_kwargs;
/* 000254 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000254 */ 		}) ();
/* 000254 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000254 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000254 */ 			var k = __left0__ [0];
/* 000254 */ 			var v = __left0__ [1];
/* 000255 */ 			__call__ (setattr, null, node, k, v);
/* 000255 */ 		}
/* 000257 */ 		return node;
/* 000257 */ 	});},
/* 000259 */ 	get _make_fragment () {return __get__ (this, function (self) {
/* 000259 */ 		var kwargs = dict ();
/* 000259 */ 		if (arguments.length) {
/* 000259 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000259 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000259 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000259 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000259 */ 					switch (__attrib0__) {
/* 000259 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000259 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000259 */ 					}
/* 000259 */ 				}
/* 000259 */ 				delete kwargs.__kwargtrans__;
/* 000259 */ 			}
/* 000259 */ 		}
/* 000259 */ 		else {
/* 000259 */ 		}
/* 000260 */ 		var nodelist = (function () {
/* 000260 */ 			var __accu0__ = kwargs;
/* 000260 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'nodes');
/* 000260 */ 		}) ();
/* 000261 */ 		var llm_text = (function () {
/* 000261 */ 			var __accu0__ = kwargs;
/* 000261 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'llm_text');
/* 000261 */ 		}) ();
/* 000262 */ 		return __call__ (LLMFragment, null, __kwargtrans__ (__mergekwargtrans__ ({llm_text: nodelist, environment: self.environment, _llm_text_if_loading_nodes: llm_text}, kwargs)));
/* 000262 */ 	});}
/* 000262 */ });
/* 000007 */ 
//# sourceMappingURL=llm.llmdump.map