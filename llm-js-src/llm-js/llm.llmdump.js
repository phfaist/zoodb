/* 000001 */ // Transcrypt'ed from Python, 2022-12-30 19:36:38
/* 000007 */ var unique_object_id = {};
/* 000007 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000032 */ import * as __module_unique_object_id__ from './unique_object_id.js';
/* 000032 */ __nest__ (unique_object_id, '', __module_unique_object_id__);
/* 000024 */ import {LLMFragment} from './llm.llmfragment.js';
/* 000019 */ import {LLMLatexWalker, LLMParsingState} from './llm.llmenvironment.js';
/* 000015 */ import {EnvironmentSpec, LatexContextDb, MacroSpec, SpecialsSpec} from './pylatexenc.macrospec.js';
/* 000011 */ import {LatexNodeList, latex_node_types} from './pylatexenc.latexnodes.nodes.js';
/* 000007 */ import {LatexArgumentSpec, ParsedArguments} from './pylatexenc.latexnodes.js';
/* 000007 */ export {MacroSpec, SpecialsSpec, LatexContextDb, LLMLatexWalker, LatexArgumentSpec, latex_node_types, EnvironmentSpec, LatexNodeList, ParsedArguments, LLMParsingState, LLMFragment};
/* 000001 */ var __name__ = 'llm.llmdump';
/* 000033 */ export var fn_unique_object_id = unique_object_id.fn_unique_object_id;
/* 000042 */ export var _FakeDataLoadedLLMLatexWalker =  __class__ ('_FakeDataLoadedLLMLatexWalker', [object], {
/* 000042 */ 	__module__: __name__,
/* 000043 */ 	get __init__ () {return __get__ (this, function (self, s) {
/* 000043 */ 		if (arguments.length) {
/* 000043 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000043 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000043 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000043 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000043 */ 					switch (__attrib0__) {
/* 000043 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000043 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000043 */ 					}
/* 000043 */ 				}
/* 000043 */ 			}
/* 000043 */ 		}
/* 000043 */ 		else {
/* 000043 */ 		}
/* 000044 */ 		self.s = s;
/* 000045 */ 		self._fields = tuple (['s']);
/* 000045 */ 	});},
/* 000047 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000047 */ 		if (arguments.length) {
/* 000047 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000047 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000047 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000047 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000047 */ 					switch (__attrib0__) {
/* 000047 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000047 */ 					}
/* 000047 */ 				}
/* 000047 */ 			}
/* 000047 */ 		}
/* 000047 */ 		else {
/* 000047 */ 		}
/* 000048 */ 		return '{}(s={})'.format (self.__class__.__name__, self.s);
/* 000048 */ 	});}
/* 000048 */ });
/* 000055 */ export var _dump_version = 1;
/* 000058 */ export var _Skip =  __class__ ('_Skip', [object], {
/* 000058 */ 	__module__: __name__,
/* 000058 */ });
/* 000062 */ export var _skip_types = tuple ([LatexArgumentSpec, MacroSpec, EnvironmentSpec, SpecialsSpec, LatexContextDb]);
/* 000067 */ export var LLMDataDumper =  __class__ ('LLMDataDumper', [object], {
/* 000067 */ 	__module__: __name__,
/* 000068 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000068 */ 		if (arguments.length) {
/* 000068 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000068 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000068 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000068 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000068 */ 					switch (__attrib0__) {
/* 000068 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000068 */ 						case 'environment': var environment = __allkwargs0__ [__attrib0__]; break;
/* 000068 */ 					}
/* 000068 */ 				}
/* 000068 */ 			}
/* 000068 */ 		}
/* 000068 */ 		else {
/* 000068 */ 		}
/* 000069 */ 		self.environment = environment;
/* 000070 */ 		(function () {
/* 000070 */ 			var __accu0__ = self;
/* 000070 */ 			return __call__ (__accu0__.py_clear, __accu0__);
/* 000070 */ 		}) ();
/* 000070 */ 	});},
/* 000072 */ 	get py_clear () {return __get__ (this, function (self) {
/* 000072 */ 		if (arguments.length) {
/* 000072 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000072 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000072 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000072 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000072 */ 					switch (__attrib0__) {
/* 000072 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000072 */ 					}
/* 000072 */ 				}
/* 000072 */ 			}
/* 000072 */ 		}
/* 000072 */ 		else {
/* 000072 */ 		}
/* 000073 */ 		self.data = dict ({'objects': dict ({}), 'resources': dict ({}), '_dump': dict ({'version': _dump_version})});
/* 000073 */ 	});},
/* 000081 */ 	get get_data () {return __get__ (this, function (self) {
/* 000081 */ 		if (arguments.length) {
/* 000081 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000081 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000081 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000081 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000081 */ 					switch (__attrib0__) {
/* 000081 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000081 */ 					}
/* 000081 */ 				}
/* 000081 */ 			}
/* 000081 */ 		}
/* 000081 */ 		else {
/* 000081 */ 		}
/* 000082 */ 		return self.data;
/* 000082 */ 	});},
/* 000084 */ 	get add_dump () {return __get__ (this, function (self, key, obj) {
/* 000084 */ 		if (arguments.length) {
/* 000084 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000084 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000084 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000084 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000084 */ 					switch (__attrib0__) {
/* 000084 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000084 */ 						case 'key': var key = __allkwargs0__ [__attrib0__]; break;
/* 000084 */ 						case 'obj': var obj = __allkwargs0__ [__attrib0__]; break;
/* 000084 */ 					}
/* 000084 */ 				}
/* 000084 */ 			}
/* 000084 */ 		}
/* 000084 */ 		else {
/* 000084 */ 		}
/* 000085 */ 		var dump = (function () {
/* 000085 */ 			var __accu0__ = self;
/* 000085 */ 			return __call__ (__accu0__._make_object_dump, __accu0__, obj, __kwargtrans__ ({dumping_state: dict ({'object': obj})}));
/* 000085 */ 		}) ();
/* 000086 */ 		__setitem__ (__getitem__ (self.data, 'objects'), key, dump);
/* 000086 */ 	});},
/* 000090 */ 	get _make_object_dump () {return __get__ (this, function (self, obj) {
/* 000090 */ 		var type_name = null;
/* 000090 */ 		if (arguments.length) {
/* 000090 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000090 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000090 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000090 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000090 */ 					switch (__attrib0__) {
/* 000090 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000090 */ 						case 'obj': var obj = __allkwargs0__ [__attrib0__]; break;
/* 000090 */ 						case 'dumping_state': var dumping_state = __allkwargs0__ [__attrib0__]; break;
/* 000090 */ 						case 'type_name': var type_name = __allkwargs0__ [__attrib0__]; break;
/* 000090 */ 					}
/* 000090 */ 				}
/* 000090 */ 			}
/* 000090 */ 		}
/* 000090 */ 		else {
/* 000090 */ 		}
/* 000092 */ 		var fieldnames = __call__ (set, null, obj._fields);
/* 000093 */ 		var __iterable0__ = __call__ (dir, null, obj);
/* 000093 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000093 */ 			var fieldname = __getitem__ (__iterable0__, __index0__);
/* 000094 */ 			if (__t__ ((function () {
/* 000094 */ 				var __accu0__ = fieldname;
/* 000094 */ 				return __call__ (__accu0__.startswith, __accu0__, 'llm');
/* 000094 */ 			}) ())) {
/* 000095 */ 				(function () {
/* 000095 */ 					var __accu0__ = fieldnames;
/* 000095 */ 					return __call__ (__accu0__.add, __accu0__, fieldname);
/* 000095 */ 				}) ();
/* 000095 */ 			}
/* 000095 */ 		}
/* 000097 */ 		var objdata = dict ({'$type': (__t__ (type_name !== null) ? type_name : obj.__class__.__name__)});
/* 000100 */ 		var __iterable0__ = __call__ (sorted, null, fieldnames);
/* 000100 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000100 */ 			var field = __getitem__ (__iterable0__, __index0__);
/* 000101 */ 			var val = (function () {
/* 000101 */ 				var __accu0__ = self;
/* 000101 */ 				return __call__ (__accu0__._make_dump, __accu0__, __call__ (getattr, null, obj, field), __kwargtrans__ ({dumping_state: dumping_state}));
/* 000101 */ 			}) ();
/* 000102 */ 			if (__t__ (val === _Skip)) {
/* 000103 */ 				var val = dict ({'$skip': true});
/* 000103 */ 			}
/* 000104 */ 			__setitem__ (objdata, field, val);
/* 000104 */ 		}
/* 000106 */ 		return objdata;
/* 000106 */ 	});},
/* 000108 */ 	get _make_dump () {return __get__ (this, function (self, x) {
/* 000108 */ 		if (arguments.length) {
/* 000108 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000108 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000108 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000108 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000108 */ 					switch (__attrib0__) {
/* 000108 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000108 */ 						case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000108 */ 						case 'dumping_state': var dumping_state = __allkwargs0__ [__attrib0__]; break;
/* 000108 */ 					}
/* 000108 */ 				}
/* 000108 */ 			}
/* 000108 */ 		}
/* 000108 */ 		else {
/* 000108 */ 		}
/* 000110 */ 		if (__t__ (__call__ (isinstance, null, x, tuple ([tuple, list])))) {
/* 000111 */ 			var result = [];
/* 000112 */ 			var __iterable0__ = x;
/* 000112 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000112 */ 				var item = __getitem__ (__iterable0__, __index0__);
/* 000113 */ 				var value = (function () {
/* 000113 */ 					var __accu0__ = self;
/* 000113 */ 					return __call__ (__accu0__._make_dump, __accu0__, item, __kwargtrans__ ({dumping_state: dumping_state}));
/* 000113 */ 				}) ();
/* 000114 */ 				if (__t__ (value === _Skip)) {
/* 000115 */ 					var value = null;
/* 000115 */ 				}
/* 000116 */ 				(function () {
/* 000116 */ 					var __accu0__ = result;
/* 000116 */ 					return __call__ (__accu0__.append, __accu0__, value);
/* 000116 */ 				}) ();
/* 000116 */ 			}
/* 000117 */ 			return result;
/* 000117 */ 		}
/* 000119 */ 		if (__t__ (__call__ (isinstance, null, x, LLMLatexWalker))) {
/* 000120 */ 			return (function () {
/* 000120 */ 				var __accu0__ = self;
/* 000123 */ 				return __call__ (__accu0__._make_resource, __accu0__, 'LLMLatexWalker', x, __call__ (_FakeDataLoadedLLMLatexWalker, null, x.s), __kwargtrans__ ({dumping_state: dumping_state}));
/* 000123 */ 			}) ();
/* 000123 */ 		}
/* 000127 */ 		if (__t__ (__call__ (isinstance, null, x, LLMParsingState))) {
/* 000128 */ 			return (function () {
/* 000128 */ 				var __accu0__ = self;
/* 000128 */ 				return __call__ (__accu0__._make_resource, __accu0__, 'LLMParsingState', x, x, __kwargtrans__ ({dumping_state: dumping_state}));
/* 000128 */ 			}) ();
/* 000128 */ 		}
/* 000135 */ 		if (__t__ (__call__ (isinstance, null, x, _skip_types))) {
/* 000136 */ 			return _Skip;
/* 000136 */ 		}
/* 000138 */ 		if (__t__ (__call__ (hasattr, null, x, '_fields'))) {
/* 000139 */ 			return (function () {
/* 000139 */ 				var __accu0__ = self;
/* 000139 */ 				return __call__ (__accu0__._make_object_dump, __accu0__, x, __kwargtrans__ ({dumping_state: dumping_state}));
/* 000139 */ 			}) ();
/* 000139 */ 		}
/* 000141 */ 		if (__t__ (x === null)) {
/* 000142 */ 			return null;
/* 000142 */ 		}
/* 000144 */ 		if (__t__ (__call__ (isinstance, null, x, tuple ([str, bool, int, float])))) {
/* 000145 */ 			return x;
/* 000145 */ 		}
/* 000147 */ 		var __except0__ = __call__ (ValueError, null, 'Cannot dump value {} of unsupported type'.format (x));
/* 000147 */ 		__except0__.__cause__ = null;
/* 000147 */ 		throw __except0__;
/* 000147 */ 	});},
/* 000149 */ 	get _make_resource () {return __get__ (this, function (self, restype, y, ydata) {
/* 000149 */ 		if (arguments.length) {
/* 000149 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000149 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000149 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000149 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000149 */ 					switch (__attrib0__) {
/* 000149 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000149 */ 						case 'restype': var restype = __allkwargs0__ [__attrib0__]; break;
/* 000149 */ 						case 'y': var y = __allkwargs0__ [__attrib0__]; break;
/* 000149 */ 						case 'ydata': var ydata = __allkwargs0__ [__attrib0__]; break;
/* 000149 */ 						case 'dumping_state': var dumping_state = __allkwargs0__ [__attrib0__]; break;
/* 000149 */ 					}
/* 000149 */ 				}
/* 000149 */ 			}
/* 000149 */ 		}
/* 000149 */ 		else {
/* 000149 */ 		}
/* 000150 */ 		if (__t__ (!__in__ (restype, __getitem__ (self.data, 'resources')))) {
/* 000151 */ 			__setitem__ (__getitem__ (self.data, 'resources'), restype, dict ({}));
/* 000151 */ 		}
/* 000153 */ 		var reskey = __call__ (str, null, __call__ (fn_unique_object_id, null, y));
/* 000154 */ 		if (__t__ (!__in__ (reskey, __getitem__ (__getitem__ (self.data, 'resources'), restype)))) {
/* 000155 */ 			var ydata_dump = (function () {
/* 000155 */ 				var __accu0__ = self;
/* 000155 */ 				return __call__ (__accu0__._make_object_dump, __accu0__, ydata, __kwargtrans__ ({dumping_state: dumping_state, type_name: restype}));
/* 000155 */ 			}) ();
/* 000158 */ 			__setitem__ (__getitem__ (__getitem__ (self.data, 'resources'), restype), reskey, ydata_dump);
/* 000158 */ 		}
/* 000160 */ 		return dict ({'$restype': restype, '$reskey': reskey});
/* 000160 */ 	});}
/* 000160 */ });
/* 000166 */ export var LLMDataLoadNotSupported =  __class__ ('LLMDataLoadNotSupported', [object], {
/* 000166 */ 	__module__: __name__,
/* 000166 */ });
/* 000170 */ export var latex_node_types_dict = (function () {
/* 000170 */ 	var __accu0__ = [];
/* 000170 */ 	var __iterable0__ = latex_node_types;
/* 000170 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000172 */ 		var c = __getitem__ (__iterable0__, __index0__);
/* 000172 */ 		(function () {
/* 000172 */ 			var __accu1__ = __accu0__;
/* 000172 */ 			return __call__ (__accu1__.append, __accu1__, [c.__name__, c]);
/* 000172 */ 		}) ();
/* 000172 */ 	}
/* 000172 */ 	return dict (__accu0__);
/* 000172 */ }) ();
/* 000175 */ export var _objtypes = (function () {
/* 000175 */ 	var __accu0__ = [];
/* 000175 */ 	var __iterable0__ = [LLMParsingState, ParsedArguments];
/* 000175 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000179 */ 		var c = __getitem__ (__iterable0__, __index0__);
/* 000177 */ 		(function () {
/* 000177 */ 			var __accu1__ = __accu0__;
/* 000177 */ 			return __call__ (__accu1__.append, __accu1__, [c.__name__, c]);
/* 000177 */ 		}) ();
/* 000177 */ 	}
/* 000177 */ 	return dict (__accu0__);
/* 000177 */ }) ();
/* 000183 */ export var LLMDataLoader =  __class__ ('LLMDataLoader', [object], {
/* 000183 */ 	__module__: __name__,
/* 000184 */ 	get __init__ () {return __get__ (this, function (self, data) {
/* 000184 */ 		if (arguments.length) {
/* 000184 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000184 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000184 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000184 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000184 */ 					switch (__attrib0__) {
/* 000184 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000184 */ 						case 'data': var data = __allkwargs0__ [__attrib0__]; break;
/* 000184 */ 						case 'environment': var environment = __allkwargs0__ [__attrib0__]; break;
/* 000184 */ 					}
/* 000184 */ 				}
/* 000184 */ 			}
/* 000184 */ 		}
/* 000184 */ 		else {
/* 000184 */ 		}
/* 000185 */ 		self.data = data;
/* 000186 */ 		self.environment = environment;
/* 000188 */ 		if (__t__ (__ne__ (__getitem__ (__getitem__ (self.data, '_dump'), 'version'), _dump_version))) {
/* 000189 */ 			var __except0__ = __call__ (RuntimeError, null, 'Dump version mismatch: {}, expected {}'.format (__getitem__ (__getitem__ (self.data, '_dump'), 'version'), _dump_version));
/* 000189 */ 			__except0__.__cause__ = null;
/* 000189 */ 			throw __except0__;
/* 000189 */ 		}
/* 000189 */ 	});},
/* 000194 */ 	get get_keys () {return __get__ (this, function (self) {
/* 000194 */ 		if (arguments.length) {
/* 000194 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000194 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000194 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000194 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000194 */ 					switch (__attrib0__) {
/* 000194 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000194 */ 					}
/* 000194 */ 				}
/* 000194 */ 			}
/* 000194 */ 		}
/* 000194 */ 		else {
/* 000194 */ 		}
/* 000195 */ 		return __call__ (list, null, (function () {
/* 000195 */ 			var __accu0__ = __getitem__ (self.data, 'objects');
/* 000195 */ 			return __call__ (__accu0__.py_keys, __accu0__);
/* 000195 */ 		}) ());
/* 000195 */ 	});},
/* 000197 */ 	get get_object () {return __get__ (this, function (self, key) {
/* 000197 */ 		if (arguments.length) {
/* 000197 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000197 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000197 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000197 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000197 */ 					switch (__attrib0__) {
/* 000197 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000197 */ 						case 'key': var key = __allkwargs0__ [__attrib0__]; break;
/* 000197 */ 					}
/* 000197 */ 				}
/* 000197 */ 			}
/* 000197 */ 		}
/* 000197 */ 		else {
/* 000197 */ 		}
/* 000198 */ 		var data = __getitem__ (__getitem__ (self.data, 'objects'), key);
/* 000199 */ 		return (function () {
/* 000199 */ 			var __accu0__ = self;
/* 000199 */ 			return __call__ (__accu0__._load_from_data, __accu0__, data);
/* 000199 */ 		}) ();
/* 000199 */ 	});},
/* 000203 */ 	get _load_from_data () {return __get__ (this, function (self, data) {
/* 000203 */ 		if (arguments.length) {
/* 000203 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000203 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000203 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000203 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000203 */ 					switch (__attrib0__) {
/* 000203 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000203 */ 						case 'data': var data = __allkwargs0__ [__attrib0__]; break;
/* 000203 */ 					}
/* 000203 */ 				}
/* 000203 */ 			}
/* 000203 */ 		}
/* 000203 */ 		else {
/* 000203 */ 		}
/* 000204 */ 		if (__t__ (__call__ (isinstance, null, data, list))) {
/* 000205 */ 			return (function () {
/* 000205 */ 				var __accu0__ = [];
/* 000205 */ 				var __iterable0__ = data;
/* 000205 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000205 */ 					var item = __getitem__ (__iterable0__, __index0__);
/* 000205 */ 					(function () {
/* 000205 */ 						var __accu1__ = __accu0__;
/* 000205 */ 						return __call__ (__accu1__.append, __accu1__, (function () {
/* 000205 */ 							var __accu2__ = self;
/* 000205 */ 							return __call__ (__accu2__._load_from_data, __accu2__, item);
/* 000205 */ 						}) ());
/* 000205 */ 					}) ();
/* 000205 */ 				}
/* 000205 */ 				return __accu0__;
/* 000205 */ 			}) ();
/* 000205 */ 		}
/* 000207 */ 		if (__t__ (__call__ (isinstance, null, data, dict))) {
/* 000208 */ 			if (__t__ (__t__ (__in__ ('$skip', data)) && __getitem__ (data, '$skip') === true)) {
/* 000209 */ 				return LLMDataLoadNotSupported;
/* 000209 */ 			}
/* 000210 */ 			if (__t__ (__in__ ('$restype', data))) {
/* 000211 */ 				return (function () {
/* 000211 */ 					var __accu0__ = self;
/* 000211 */ 					return __call__ (__accu0__._load_resource, __accu0__, __getitem__ (data, '$restype'), __getitem__ (data, '$reskey'));
/* 000211 */ 				}) ();
/* 000211 */ 			}
/* 000212 */ 			if (__t__ (__in__ ('$type', data))) {
/* 000213 */ 				return (function () {
/* 000213 */ 					var __accu0__ = self;
/* 000213 */ 					return __call__ (__accu0__._load_object, __accu0__, (function () {
/* 000213 */ 						var __accu1__ = data;
/* 000213 */ 						return __call__ (__accu1__.py_pop, __accu1__, '$type');
/* 000213 */ 					}) (), data);
/* 000213 */ 				}) ();
/* 000213 */ 			}
/* 000213 */ 		}
/* 000215 */ 		return data;
/* 000215 */ 	});},
/* 000217 */ 	get _load_resource () {return __get__ (this, function (self, restype, reskey) {
/* 000217 */ 		if (arguments.length) {
/* 000217 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000217 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000217 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000217 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000217 */ 					switch (__attrib0__) {
/* 000217 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000217 */ 						case 'restype': var restype = __allkwargs0__ [__attrib0__]; break;
/* 000217 */ 						case 'reskey': var reskey = __allkwargs0__ [__attrib0__]; break;
/* 000217 */ 					}
/* 000217 */ 				}
/* 000217 */ 			}
/* 000217 */ 		}
/* 000217 */ 		else {
/* 000217 */ 		}
/* 000218 */ 		var resdata = __getitem__ (__getitem__ (__getitem__ (self.data, 'resources'), restype), reskey);
/* 000219 */ 		if (__t__ (__eq__ (restype, 'LLMLatexWalker'))) {
/* 000220 */ 			return __call__ (_FakeDataLoadedLLMLatexWalker, null, __getitem__ (resdata, 's'));
/* 000220 */ 		}
/* 000221 */ 		if (__t__ (__eq__ (restype, 'LLMParsingState'))) {
/* 000222 */ 			return (function () {
/* 000222 */ 				var __accu0__ = self;
/* 000224 */ 				return __call__ (__accu0__._load_object, __accu0__, restype, __call__ (dict, null, resdata, __kwargtrans__ ({latex_context: LLMDataLoadNotSupported})));
/* 000224 */ 			}) ();
/* 000224 */ 		}
/* 000226 */ 		var __except0__ = __call__ (ValueError, null, 'Unknown data resource type to load: {}'.format (restype));
/* 000226 */ 		__except0__.__cause__ = null;
/* 000226 */ 		throw __except0__;
/* 000226 */ 	});},
/* 000228 */ 	get _load_object () {return __get__ (this, function (self, objtype, data) {
/* 000228 */ 		if (arguments.length) {
/* 000228 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000228 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000228 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000228 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000228 */ 					switch (__attrib0__) {
/* 000228 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000228 */ 						case 'objtype': var objtype = __allkwargs0__ [__attrib0__]; break;
/* 000228 */ 						case 'data': var data = __allkwargs0__ [__attrib0__]; break;
/* 000228 */ 					}
/* 000228 */ 				}
/* 000228 */ 			}
/* 000228 */ 		}
/* 000228 */ 		else {
/* 000228 */ 		}
/* 000230 */ 		if (__t__ (__eq__ (objtype, 'LLMFragment'))) {
/* 000231 */ 			var ObjTypeFn = self._make_fragment;
/* 000231 */ 		}
/* 000232 */ 		else if (__t__ (__t__ (__in__ (objtype, latex_node_types_dict)) || __eq__ (objtype, 'LatexNodeList'))) {
/* 000233 */ 			var ObjTypeFn = (function __lambda__ () {
/* 000233 */ 				var kwargs = dict ();
/* 000233 */ 				if (arguments.length) {
/* 000233 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000233 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000233 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000233 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000233 */ 							switch (__attrib0__) {
/* 000233 */ 								default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000233 */ 							}
/* 000233 */ 						}
/* 000233 */ 						delete kwargs.__kwargtrans__;
/* 000233 */ 					}
/* 000233 */ 				}
/* 000233 */ 				else {
/* 000233 */ 				}
/* 000233 */ 				return (function () {
/* 000233 */ 					var __accu0__ = self;
/* 000233 */ 					return __call__ (__accu0__._make_node_instance, __accu0__, objtype, kwargs);
/* 000233 */ 				}) ();
/* 000233 */ 			});
/* 000233 */ 		}
/* 000234 */ 		else if (__t__ (__in__ (objtype, _objtypes))) {
/* 000235 */ 			var ObjTypeFn = __getitem__ (_objtypes, objtype);
/* 000235 */ 		}
/* 000236 */ 		else {
/* 000237 */ 			var __except0__ = __call__ (ValueError, null, 'Unknown object type ‘{}’ for data loading'.format (objtype));
/* 000237 */ 			__except0__.__cause__ = null;
/* 000237 */ 			throw __except0__;
/* 000237 */ 		}
/* 000239 */ 		var args = (function () {
/* 000239 */ 			var __accu0__ = [];
/* 000241 */ 			var __iterable0__ = (function () {
/* 000241 */ 				var __accu1__ = data;
/* 000241 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000241 */ 			}) ();
/* 000241 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000241 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000241 */ 				var k = __left0__ [0];
/* 000241 */ 				var v = __left0__ [1];
/* 000242 */ 				if (__t__ (!__t__ (((function () {
/* 000242 */ 					var __accu1__ = k;
/* 000242 */ 					return __call__ (__accu1__.startswith, __accu1__, '$');
/* 000242 */ 				}) ())))) {
/* 000242 */ 					(function () {
/* 000242 */ 						var __accu1__ = __accu0__;
/* 000240 */ 						return __call__ (__accu1__.append, __accu1__, [k, (function () {
/* 000240 */ 							var __accu2__ = self;
/* 000240 */ 							return __call__ (__accu2__._load_from_data, __accu2__, v);
/* 000240 */ 						}) ()]);
/* 000240 */ 					}) ();
/* 000240 */ 				}
/* 000240 */ 			}
/* 000240 */ 			return dict (__accu0__);
/* 000240 */ 		}) ();
/* 000246 */ 		var obj = __call__ (ObjTypeFn, null, __kwargtrans__ (args));
/* 000247 */ 		return obj;
/* 000247 */ 	});},
/* 000249 */ 	get _make_node_instance () {return __get__ (this, function (self, nodetype, kwargs) {
/* 000249 */ 		if (arguments.length) {
/* 000249 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000249 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000249 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000249 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000249 */ 					switch (__attrib0__) {
/* 000249 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000249 */ 						case 'nodetype': var nodetype = __allkwargs0__ [__attrib0__]; break;
/* 000249 */ 						case 'kwargs': var kwargs = __allkwargs0__ [__attrib0__]; break;
/* 000249 */ 					}
/* 000249 */ 				}
/* 000249 */ 			}
/* 000249 */ 		}
/* 000249 */ 		else {
/* 000249 */ 		}
/* 000250 */ 		var base_kwargs = dict ({});
/* 000251 */ 		var attrib_kwargs = dict ({});
/* 000252 */ 		var __iterable0__ = (function () {
/* 000252 */ 			var __accu0__ = kwargs;
/* 000252 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000252 */ 		}) ();
/* 000252 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000252 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000252 */ 			var k = __left0__ [0];
/* 000252 */ 			var v = __left0__ [1];
/* 000253 */ 			if (__t__ ((function () {
/* 000253 */ 				var __accu0__ = k;
/* 000253 */ 				return __call__ (__accu0__.startswith, __accu0__, 'llm');
/* 000253 */ 			}) ())) {
/* 000254 */ 				__setitem__ (attrib_kwargs, k, v);
/* 000254 */ 			}
/* 000255 */ 			else {
/* 000256 */ 				__setitem__ (base_kwargs, k, v);
/* 000256 */ 			}
/* 000256 */ 		}
/* 000258 */ 		if (__t__ (__eq__ (nodetype, 'LatexNodeList'))) {
/* 000259 */ 			var ObjTypeFn = LatexNodeList;
/* 000259 */ 		}
/* 000260 */ 		else {
/* 000261 */ 			var ObjTypeFn = __getitem__ (latex_node_types_dict, nodetype);
/* 000261 */ 		}
/* 000263 */ 		var node = __call__ (ObjTypeFn, null, __kwargtrans__ (base_kwargs));
/* 000264 */ 		var __iterable0__ = (function () {
/* 000264 */ 			var __accu0__ = attrib_kwargs;
/* 000264 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000264 */ 		}) ();
/* 000264 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000264 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000264 */ 			var k = __left0__ [0];
/* 000264 */ 			var v = __left0__ [1];
/* 000265 */ 			__call__ (setattr, null, node, k, v);
/* 000265 */ 		}
/* 000267 */ 		return node;
/* 000267 */ 	});},
/* 000269 */ 	get _make_fragment () {return __get__ (this, function (self) {
/* 000269 */ 		var kwargs = dict ();
/* 000269 */ 		if (arguments.length) {
/* 000269 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000269 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000269 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000269 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000269 */ 					switch (__attrib0__) {
/* 000269 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000269 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000269 */ 					}
/* 000269 */ 				}
/* 000269 */ 				delete kwargs.__kwargtrans__;
/* 000269 */ 			}
/* 000269 */ 		}
/* 000269 */ 		else {
/* 000269 */ 		}
/* 000270 */ 		var nodelist = (function () {
/* 000270 */ 			var __accu0__ = kwargs;
/* 000270 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'nodes');
/* 000270 */ 		}) ();
/* 000271 */ 		var llm_text = (function () {
/* 000271 */ 			var __accu0__ = kwargs;
/* 000271 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'llm_text');
/* 000271 */ 		}) ();
/* 000272 */ 		return __call__ (LLMFragment, null, __kwargtrans__ (__mergekwargtrans__ ({llm_text: nodelist, environment: self.environment, _llm_text_if_loading_nodes: llm_text}, kwargs)));
/* 000272 */ 	});}
/* 000272 */ });
/* 000007 */ 
//# sourceMappingURL=llm.llmdump.map