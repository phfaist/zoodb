/* 000001 */ // Transcrypt'ed from Python, 2023-07-28 17:42:11
/* 000007 */ var flm_all_serializable_classes = {};
/* 000007 */ var unique_object_id = {};
/* 000007 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000054 */ import * as __module_flm_all_serializable_classes__ from './flm_all_serializable_classes.js';
/* 000054 */ __nest__ (flm_all_serializable_classes, '', __module_flm_all_serializable_classes__);
/* 000043 */ import * as __module_unique_object_id__ from './unique_object_id.js';
/* 000043 */ __nest__ (unique_object_id, '', __module_unique_object_id__);
/* 000035 */ import {FLMFragment} from './flm.flmfragment.js';
/* 000031 */ import {FLMSpecInfo} from './flm.flmspecinfo.js';
/* 000025 */ import {FLMLatexWalker, FLMParsingState, FLMParsingStateDeltaSetBlockLevel} from './flm.flmenvironment.js';
/* 000019 */ import {CallableSpec, EnvironmentSpec, LatexContextDb, MacroSpec, SpecialsSpec} from './pylatexenc.macrospec.js';
/* 000015 */ import {LatexNodeList, latex_node_types} from './pylatexenc.latexnodes.nodes.js';
/* 000012 */ import {LatexParserBase} from './pylatexenc.latexnodes.parsers.js';
/* 000007 */ import {LatexArgumentSpec, ParsedArguments, ParsingStateDelta} from './pylatexenc.latexnodes.js';
/* 000007 */ export {FLMParsingState, LatexNodeList, EnvironmentSpec, FLMFragment, FLMParsingStateDeltaSetBlockLevel, FLMLatexWalker, FLMSpecInfo, ParsingStateDelta, MacroSpec, ParsedArguments, LatexArgumentSpec, LatexContextDb, LatexParserBase, CallableSpec, latex_node_types, SpecialsSpec};
/* 000001 */ var __name__ = 'flm.flmdump';
/* 000044 */ export var fn_unique_object_id = unique_object_id.fn_unique_object_id;
/* 000055 */ export var _import_class = function (fullclsname, restype) {
/* 000055 */ 	if (arguments.length) {
/* 000055 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000055 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000055 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000055 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000055 */ 				switch (__attrib0__) {
/* 000055 */ 					case 'fullclsname': var fullclsname = __allkwargs0__ [__attrib0__]; break;
/* 000055 */ 					case 'restype': var restype = __allkwargs0__ [__attrib0__]; break;
/* 000055 */ 				}
/* 000055 */ 			}
/* 000055 */ 		}
/* 000055 */ 	}
/* 000055 */ 	else {
/* 000055 */ 	}
/* 000056 */ 	var resources = flm_all_serializable_classes.serializable;
/* 000057 */ 	if (__t__ (restype === null)) {
/* 000058 */ 		var restype = '';
/* 000058 */ 	}
/* 000059 */ 	if (__t__ (!__in__ (restype, resources))) {
/* 000060 */ 		var __except0__ = __call__ (ValueError, null, __add__ ('Invalid restype: ', __call__ (repr, null, restype)));
/* 000060 */ 		__except0__.__cause__ = null;
/* 000060 */ 		throw __except0__;
/* 000060 */ 	}
/* 000061 */ 	var rcls = __getitem__ (resources, restype);
/* 000062 */ 	if (__t__ (!__in__ (fullclsname, rcls))) {
/* 000064 */ 		var __except0__ = __call__ (ValueError, null, __add__ (__add__ (__add__ (__add__ ('Invalid class name: ', __call__ (repr, null, fullclsname)), ' ['), __call__ (repr, null, restype)), ']'));
/* 000064 */ 		__except0__.__cause__ = null;
/* 000064 */ 		throw __except0__;
/* 000064 */ 	}
/* 000065 */ 	return __getitem__ (rcls, fullclsname);
/* 000065 */ };
/* 000070 */ export var _fullclassname = function (clsobj) {
/* 000070 */ 	if (arguments.length) {
/* 000070 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000070 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000070 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000070 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000070 */ 				switch (__attrib0__) {
/* 000070 */ 					case 'clsobj': var clsobj = __allkwargs0__ [__attrib0__]; break;
/* 000070 */ 				}
/* 000070 */ 			}
/* 000070 */ 		}
/* 000070 */ 	}
/* 000070 */ 	else {
/* 000070 */ 	}
/* 000075 */ 	return __add__ (__add__ (clsobj.__module__, ':'), clsobj.__name__);
/* 000075 */ };
/* 000081 */ export var _FakeDataLoadedFLMLatexWalker =  __class__ ('_FakeDataLoadedFLMLatexWalker', [object], {
/* 000081 */ 	__module__: __name__,
/* 000082 */ 	get __init__ () {return __get__ (this, function (self, latex_walker) {
/* 000082 */ 		if (arguments.length) {
/* 000082 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000082 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000082 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000082 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000082 */ 					switch (__attrib0__) {
/* 000082 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000082 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000082 */ 					}
/* 000082 */ 				}
/* 000082 */ 			}
/* 000082 */ 		}
/* 000082 */ 		else {
/* 000082 */ 		}
/* 000083 */ 		self.flm_text = latex_walker.s;
/* 000084 */ 		self.standalone_mode = latex_walker.standalone_mode;
/* 000085 */ 		self.is_block_level = latex_walker.default_parsing_state.is_block_level;
/* 000086 */ 		self.parsing_mode = latex_walker.parsing_mode;
/* 000087 */ 		self.resource_info = latex_walker.resource_info;
/* 000088 */ 		self.tolerant_parsing = latex_walker.tolerant_parsing;
/* 000089 */ 		self.what = latex_walker.what;
/* 000090 */ 		self.input_lineno_colno_offsets = latex_walker.input_lineno_colno_offsets;
/* 000090 */ 	});},
/* 000092 */ 	_fields: tuple (['flm_text', 'standalone_mode', 'is_block_level', 'parsing_mode', 'resource_info', 'tolerant_parsing', 'what', 'input_lineno_colno_offsets']),
/* 000096 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000096 */ 		if (arguments.length) {
/* 000096 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000096 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000096 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000096 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000096 */ 					switch (__attrib0__) {
/* 000096 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000096 */ 					}
/* 000096 */ 				}
/* 000096 */ 			}
/* 000096 */ 		}
/* 000096 */ 		else {
/* 000096 */ 		}
/* 000097 */ 		return '{}(**{})'.format (self.__class__.__name__, __call__ (repr, null, self.__dict__));
/* 000097 */ 	});}
/* 000097 */ });
/* 000103 */ export var latex_node_types_dict = (function () {
/* 000103 */ 	var __accu0__ = [];
/* 000103 */ 	var __iterable0__ = latex_node_types;
/* 000103 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000105 */ 		var c = __getitem__ (__iterable0__, __index0__);
/* 000105 */ 		(function () {
/* 000105 */ 			var __accu1__ = __accu0__;
/* 000105 */ 			return __call__ (__accu1__.append, __accu1__, [c.__name__, c]);
/* 000105 */ 		}) ();
/* 000105 */ 	}
/* 000105 */ 	return dict (__accu0__);
/* 000105 */ }) ();
/* 000108 */ export var _objtypes = (function () {
/* 000108 */ 	var __accu0__ = [];
/* 000108 */ 	var __iterable0__ = [FLMFragment, FLMParsingState, ParsedArguments, LatexArgumentSpec, ParsingStateDelta, FLMParsingStateDeltaSetBlockLevel];
/* 000108 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000116 */ 		var c = __getitem__ (__iterable0__, __index0__);
/* 000110 */ 		(function () {
/* 000110 */ 			var __accu1__ = __accu0__;
/* 000110 */ 			return __call__ (__accu1__.append, __accu1__, [c.__name__, c]);
/* 000110 */ 		}) ();
/* 000110 */ 	}
/* 000110 */ 	return dict (__accu0__);
/* 000110 */ }) ();
/* 000121 */ export var _known_serializable_object_type_names = __add__ (__add__ (__call__ (list, null, (function () {
/* 000121 */ 	var __accu0__ = latex_node_types_dict;
/* 000121 */ 	return __call__ (__accu0__.py_keys, __accu0__);
/* 000122 */ }) ()), __call__ (list, null, (function () {
/* 000122 */ 	var __accu0__ = _objtypes;
/* 000122 */ 	return __call__ (__accu0__.py_keys, __accu0__);
/* 000122 */ }) ())), ['LatexNodeList']);
/* 000131 */ export var _dump_version = 2;
/* 000135 */ export var _Skip =  __class__ ('_Skip', [object], {
/* 000135 */ 	__module__: __name__,
/* 000135 */ });
/* 000139 */ export var _skip_types = tuple ([LatexContextDb, LatexParserBase, MacroSpec, EnvironmentSpec, SpecialsSpec]);
/* 000150 */ export var FLMDataDumper =  __class__ ('FLMDataDumper', [object], {
/* 000150 */ 	__module__: __name__,
/* 000155 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000155 */ 		if (arguments.length) {
/* 000155 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000155 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000155 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000155 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000155 */ 					switch (__attrib0__) {
/* 000155 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000155 */ 						case 'environment': var environment = __allkwargs0__ [__attrib0__]; break;
/* 000155 */ 					}
/* 000155 */ 				}
/* 000155 */ 			}
/* 000155 */ 		}
/* 000155 */ 		else {
/* 000155 */ 		}
/* 000156 */ 		self.environment = environment;
/* 000157 */ 		(function () {
/* 000157 */ 			var __accu0__ = self;
/* 000157 */ 			return __call__ (__accu0__.py_clear, __accu0__);
/* 000157 */ 		}) ();
/* 000157 */ 	});},
/* 000159 */ 	get py_clear () {return __get__ (this, function (self) {
/* 000159 */ 		if (arguments.length) {
/* 000159 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000159 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000159 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000159 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000159 */ 					switch (__attrib0__) {
/* 000159 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000159 */ 					}
/* 000159 */ 				}
/* 000159 */ 			}
/* 000159 */ 		}
/* 000159 */ 		else {
/* 000159 */ 		}
/* 000160 */ 		self.data = dict ({'dumps': dict ({}), 'resources': dict ({}), '_dump': dict ({'version': _dump_version})});
/* 000160 */ 	});},
/* 000168 */ 	get get_data () {return __get__ (this, function (self) {
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
/* 000169 */ 		return self.data;
/* 000169 */ 	});},
/* 000171 */ 	get add_object_dump () {return __get__ (this, function (self, key, obj) {
/* 000171 */ 		if (arguments.length) {
/* 000171 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000171 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000171 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000171 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000171 */ 					switch (__attrib0__) {
/* 000171 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000171 */ 						case 'key': var key = __allkwargs0__ [__attrib0__]; break;
/* 000171 */ 						case 'obj': var obj = __allkwargs0__ [__attrib0__]; break;
/* 000171 */ 					}
/* 000171 */ 				}
/* 000171 */ 			}
/* 000171 */ 		}
/* 000171 */ 		else {
/* 000171 */ 		}
/* 000172 */ 		var dump = (function () {
/* 000172 */ 			var __accu0__ = self;
/* 000172 */ 			return __call__ (__accu0__._make_object_dump, __accu0__, obj, __kwargtrans__ ({dumping_state: dict ({'object': obj})}));
/* 000172 */ 		}) ();
/* 000173 */ 		__setitem__ (__getitem__ (self.data, 'dumps'), key, dump);
/* 000173 */ 	});},
/* 000177 */ 	get _make_object_dump () {return __get__ (this, function (self, obj) {
/* 000177 */ 		var type_name = null;
/* 000177 */ 		if (arguments.length) {
/* 000177 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000177 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000177 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000177 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000177 */ 					switch (__attrib0__) {
/* 000177 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000177 */ 						case 'obj': var obj = __allkwargs0__ [__attrib0__]; break;
/* 000177 */ 						case 'dumping_state': var dumping_state = __allkwargs0__ [__attrib0__]; break;
/* 000177 */ 						case 'type_name': var type_name = __allkwargs0__ [__attrib0__]; break;
/* 000177 */ 					}
/* 000177 */ 				}
/* 000177 */ 			}
/* 000177 */ 		}
/* 000177 */ 		else {
/* 000177 */ 		}
/* 000179 */ 		var fieldnames = __call__ (set, null, obj._fields);
/* 000180 */ 		var __iterable0__ = __call__ (dir, null, obj);
/* 000180 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000180 */ 			var fieldname = __getitem__ (__iterable0__, __index0__);
/* 000181 */ 			if (__t__ ((function () {
/* 000181 */ 				var __accu0__ = fieldname;
/* 000181 */ 				return __call__ (__accu0__.startswith, __accu0__, 'flm');
/* 000181 */ 			}) ())) {
/* 000182 */ 				(function () {
/* 000182 */ 					var __accu0__ = fieldnames;
/* 000182 */ 					return __call__ (__accu0__.add, __accu0__, fieldname);
/* 000182 */ 				}) ();
/* 000182 */ 			}
/* 000182 */ 		}
/* 000184 */ 		if (__t__ (type_name === null)) {
/* 000185 */ 			var clsname = obj.__class__.__name__;
/* 000186 */ 			if (__t__ (__in__ (clsname, _known_serializable_object_type_names))) {
/* 000187 */ 				var type_name = clsname;
/* 000187 */ 			}
/* 000188 */ 			else {
/* 000189 */ 				var type_name = __call__ (_fullclassname, null, obj.__class__);
/* 000189 */ 			}
/* 000189 */ 		}
/* 000191 */ 		var objdata = dict ({'$type': type_name});
/* 000195 */ 		var get_obj_attr = function (fieldname) {
/* 000195 */ 			if (arguments.length) {
/* 000195 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000195 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000195 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000195 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000195 */ 						switch (__attrib0__) {
/* 000195 */ 							case 'fieldname': var fieldname = __allkwargs0__ [__attrib0__]; break;
/* 000195 */ 						}
/* 000195 */ 					}
/* 000195 */ 				}
/* 000195 */ 			}
/* 000195 */ 			else {
/* 000195 */ 			}
/* 000196 */ 			if (__t__ (__call__ (hasattr, null, obj, fieldname))) {
/* 000197 */ 				return __call__ (getattr, null, obj, fieldname);
/* 000197 */ 			}
/* 000198 */ 			if (__t__ (__t__ (__call__ (hasattr, null, obj, '_proxy_object')) && __call__ (hasattr, null, obj._proxy_object, fieldname))) {
/* 000199 */ 				return __call__ (getattr, null, obj._proxy_object, fieldname);
/* 000199 */ 			}
/* 000200 */ 			var __except0__ = __call__ (ValueError, null, __add__ (__add__ (__add__ ('Invalid object field: ', __call__ (repr, null, fieldname)), ' in '), __call__ (repr, null, obj)));
/* 000200 */ 			__except0__.__cause__ = null;
/* 000200 */ 			throw __except0__;
/* 000200 */ 		};
/* 000202 */ 		var __iterable0__ = __call__ (sorted, null, fieldnames);
/* 000202 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000202 */ 			var field = __getitem__ (__iterable0__, __index0__);
/* 000203 */ 			var val = (function () {
/* 000203 */ 				var __accu0__ = self;
/* 000203 */ 				return __call__ (__accu0__._make_dump, __accu0__, __call__ (get_obj_attr, null, field), __kwargtrans__ ({dumping_state: dumping_state}));
/* 000203 */ 			}) ();
/* 000204 */ 			if (__t__ (val === _Skip)) {
/* 000205 */ 				var val = dict ({'$skip': true});
/* 000205 */ 			}
/* 000206 */ 			__setitem__ (objdata, field, val);
/* 000206 */ 		}
/* 000208 */ 		return objdata;
/* 000208 */ 	});},
/* 000210 */ 	get _make_dump () {return __get__ (this, function (self, x) {
/* 000210 */ 		if (arguments.length) {
/* 000210 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000210 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000210 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000210 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000210 */ 					switch (__attrib0__) {
/* 000210 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000210 */ 						case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000210 */ 						case 'dumping_state': var dumping_state = __allkwargs0__ [__attrib0__]; break;
/* 000210 */ 					}
/* 000210 */ 				}
/* 000210 */ 			}
/* 000210 */ 		}
/* 000210 */ 		else {
/* 000210 */ 		}
/* 000212 */ 		if (__t__ (__call__ (isinstance, null, x, tuple ([tuple, list])))) {
/* 000213 */ 			var result = [];
/* 000214 */ 			var __iterable0__ = x;
/* 000214 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000214 */ 				var item = __getitem__ (__iterable0__, __index0__);
/* 000215 */ 				var value = (function () {
/* 000215 */ 					var __accu0__ = self;
/* 000215 */ 					return __call__ (__accu0__._make_dump, __accu0__, item, __kwargtrans__ ({dumping_state: dumping_state}));
/* 000215 */ 				}) ();
/* 000216 */ 				if (__t__ (value === _Skip)) {
/* 000217 */ 					var value = null;
/* 000217 */ 				}
/* 000218 */ 				(function () {
/* 000218 */ 					var __accu0__ = result;
/* 000218 */ 					return __call__ (__accu0__.append, __accu0__, value);
/* 000218 */ 				}) ();
/* 000218 */ 			}
/* 000219 */ 			return result;
/* 000219 */ 		}
/* 000221 */ 		if (__t__ (__call__ (isinstance, null, x, dict))) {
/* 000222 */ 			return (function () {
/* 000222 */ 				var __accu0__ = [];
/* 000223 */ 				var __iterable0__ = (function () {
/* 000223 */ 					var __accu1__ = x;
/* 000223 */ 					return __call__ (__accu1__.py_items, __accu1__);
/* 000223 */ 				}) ();
/* 000223 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000223 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000223 */ 					var k = __left0__ [0];
/* 000223 */ 					var v = __left0__ [1];
/* 000223 */ 					(function () {
/* 000223 */ 						var __accu1__ = __accu0__;
/* 000222 */ 						return __call__ (__accu1__.append, __accu1__, [k, (function () {
/* 000222 */ 							var __accu2__ = self;
/* 000222 */ 							return __call__ (__accu2__._make_dump, __accu2__, v, __kwargtrans__ ({dumping_state: dumping_state}));
/* 000222 */ 						}) ()]);
/* 000222 */ 					}) ();
/* 000222 */ 				}
/* 000222 */ 				return dict (__accu0__);
/* 000222 */ 			}) ();
/* 000222 */ 		}
/* 000225 */ 		if (__t__ (x === self.environment)) {
/* 000226 */ 			return dict ({'$flmenv': 'environment'});
/* 000226 */ 		}
/* 000228 */ 		if (__t__ (x === self.environment.parsing_state)) {
/* 000229 */ 			return dict ({'$flmenv': 'parsing_state'});
/* 000229 */ 		}
/* 000231 */ 		if (__t__ (__call__ (isinstance, null, x, FLMLatexWalker))) {
/* 000232 */ 			return (function () {
/* 000232 */ 				var __accu0__ = self;
/* 000235 */ 				return __call__ (__accu0__._make_resource, __accu0__, 'FLMLatexWalker', x, __call__ (_FakeDataLoadedFLMLatexWalker, null, x), __kwargtrans__ ({dumping_state: dumping_state}));
/* 000235 */ 			}) ();
/* 000235 */ 		}
/* 000239 */ 		if (__t__ (__call__ (isinstance, null, x, FLMSpecInfo))) {
/* 000240 */ 			return (function () {
/* 000240 */ 				var __accu0__ = self;
/* 000245 */ 				return __call__ (__accu0__._make_resource, __accu0__, 'FLMSpecInfo', x, x, __kwargtrans__ ({dumping_state: dumping_state, restype_dumptype: __call__ (_fullclassname, null, x.__class__)}));
/* 000245 */ 			}) ();
/* 000245 */ 		}
/* 000248 */ 		if (__t__ (__call__ (isinstance, null, x, FLMParsingState))) {
/* 000249 */ 			return (function () {
/* 000249 */ 				var __accu0__ = self;
/* 000249 */ 				return __call__ (__accu0__._make_resource, __accu0__, 'FLMParsingState', x, x, __kwargtrans__ ({dumping_state: dumping_state}));
/* 000249 */ 			}) ();
/* 000249 */ 		}
/* 000256 */ 		if (__t__ (__call__ (isinstance, null, x, latex_node_types))) {
/* 000257 */ 			return (function () {
/* 000257 */ 				var __accu0__ = self;
/* 000257 */ 				return __call__ (__accu0__._make_resource, __accu0__, 'LatexNode', x, x, __kwargtrans__ ({dumping_state: dumping_state, restype_dumptype: x.__class__.__name__}));
/* 000257 */ 			}) ();
/* 000257 */ 		}
/* 000265 */ 		if (__t__ (__call__ (isinstance, null, x, _skip_types))) {
/* 000266 */ 			return _Skip;
/* 000266 */ 		}
/* 000268 */ 		if (__t__ (__call__ (hasattr, null, x, '_fields'))) {
/* 000269 */ 			return (function () {
/* 000269 */ 				var __accu0__ = self;
/* 000269 */ 				return __call__ (__accu0__._make_object_dump, __accu0__, x, __kwargtrans__ ({dumping_state: dumping_state}));
/* 000269 */ 			}) ();
/* 000269 */ 		}
/* 000271 */ 		if (__t__ (x === null)) {
/* 000272 */ 			return null;
/* 000272 */ 		}
/* 000274 */ 		if (__t__ (__call__ (isinstance, null, x, tuple ([str, bool, int, float])))) {
/* 000275 */ 			return x;
/* 000275 */ 		}
/* 000277 */ 		var __except0__ = __call__ (ValueError, null, 'Cannot dump value {} of unsupported type'.format (__call__ (repr, null, x)));
/* 000277 */ 		__except0__.__cause__ = null;
/* 000277 */ 		throw __except0__;
/* 000277 */ 	});},
/* 000279 */ 	get _make_resource () {return __get__ (this, function (self, restype, y, ydata) {
/* 000279 */ 		var restype_dumptype = null;
/* 000279 */ 		if (arguments.length) {
/* 000279 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000279 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000279 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000279 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000279 */ 					switch (__attrib0__) {
/* 000279 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000279 */ 						case 'restype': var restype = __allkwargs0__ [__attrib0__]; break;
/* 000279 */ 						case 'y': var y = __allkwargs0__ [__attrib0__]; break;
/* 000279 */ 						case 'ydata': var ydata = __allkwargs0__ [__attrib0__]; break;
/* 000279 */ 						case 'restype_dumptype': var restype_dumptype = __allkwargs0__ [__attrib0__]; break;
/* 000279 */ 						case 'dumping_state': var dumping_state = __allkwargs0__ [__attrib0__]; break;
/* 000279 */ 					}
/* 000279 */ 				}
/* 000279 */ 			}
/* 000279 */ 		}
/* 000279 */ 		else {
/* 000279 */ 		}
/* 000280 */ 		if (__t__ (!__in__ (restype, __getitem__ (self.data, 'resources')))) {
/* 000281 */ 			__setitem__ (__getitem__ (self.data, 'resources'), restype, dict ({}));
/* 000281 */ 		}
/* 000283 */ 		var reskey = __call__ (str, null, __call__ (fn_unique_object_id, null, y));
/* 000284 */ 		if (__t__ (!__in__ (reskey, __getitem__ (__getitem__ (self.data, 'resources'), restype)))) {
/* 000288 */ 			__setitem__ (__getitem__ (__getitem__ (self.data, 'resources'), restype), reskey, '$currently-dumping');
/* 000290 */ 			var ydata_dump = (function () {
/* 000290 */ 				var __accu0__ = self;
/* 000290 */ 				return __call__ (__accu0__._make_object_dump, __accu0__, ydata, __kwargtrans__ ({dumping_state: dumping_state, type_name: (__t__ (restype_dumptype !== null) ? restype_dumptype : restype)}));
/* 000290 */ 			}) ();
/* 000295 */ 			__setitem__ (__getitem__ (__getitem__ (self.data, 'resources'), restype), reskey, ydata_dump);
/* 000295 */ 		}
/* 000297 */ 		return dict ({'$restype': restype, '$reskey': reskey});
/* 000297 */ 	});}
/* 000297 */ });
/* 000301 */ export var FLMDataLoadNotSupported =  __class__ ('FLMDataLoadNotSupported', [object], {
/* 000301 */ 	__module__: __name__,
/* 000301 */ });
/* 000311 */ export var FLMDataLoader =  __class__ ('FLMDataLoader', [object], {
/* 000311 */ 	__module__: __name__,
/* 000316 */ 	get __init__ () {return __get__ (this, function (self, data) {
/* 000316 */ 		if (arguments.length) {
/* 000316 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000316 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000316 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000316 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000316 */ 					switch (__attrib0__) {
/* 000316 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000316 */ 						case 'data': var data = __allkwargs0__ [__attrib0__]; break;
/* 000316 */ 						case 'environment': var environment = __allkwargs0__ [__attrib0__]; break;
/* 000316 */ 					}
/* 000316 */ 				}
/* 000316 */ 			}
/* 000316 */ 		}
/* 000316 */ 		else {
/* 000316 */ 		}
/* 000317 */ 		self.data = data;
/* 000318 */ 		self.environment = environment;
/* 000320 */ 		if (__t__ (__ne__ (__getitem__ (__getitem__ (self.data, '_dump'), 'version'), _dump_version))) {
/* 000321 */ 			var __except0__ = __call__ (RuntimeError, null, 'Dump version mismatch: {}, expected {}'.format (__getitem__ (__getitem__ (self.data, '_dump'), 'version'), _dump_version));
/* 000321 */ 			__except0__.__cause__ = null;
/* 000321 */ 			throw __except0__;
/* 000321 */ 		}
/* 000326 */ 		self._loaded_resources = dict ({});
/* 000327 */ 		if (__t__ (__t__ (__in__ ('resources', self.data)) && __getitem__ (self.data, 'resources'))) {
/* 000328 */ 			var __iterable0__ = __getitem__ (self.data, 'resources');
/* 000328 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000328 */ 				var restype = __getitem__ (__iterable0__, __index0__);
/* 000329 */ 				__setitem__ (self._loaded_resources, restype, dict ({}));
/* 000329 */ 			}
/* 000329 */ 		}
/* 000329 */ 	});},
/* 000332 */ 	get get_keys () {return __get__ (this, function (self) {
/* 000332 */ 		if (arguments.length) {
/* 000332 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000332 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000332 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000332 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000332 */ 					switch (__attrib0__) {
/* 000332 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000332 */ 					}
/* 000332 */ 				}
/* 000332 */ 			}
/* 000332 */ 		}
/* 000332 */ 		else {
/* 000332 */ 		}
/* 000333 */ 		return __call__ (list, null, (function () {
/* 000333 */ 			var __accu0__ = __getitem__ (self.data, 'dumps');
/* 000333 */ 			return __call__ (__accu0__.py_keys, __accu0__);
/* 000333 */ 		}) ());
/* 000333 */ 	});},
/* 000335 */ 	get get_object_dump () {return __get__ (this, function (self, key) {
/* 000335 */ 		if (arguments.length) {
/* 000335 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000335 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000335 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000335 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000335 */ 					switch (__attrib0__) {
/* 000335 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000335 */ 						case 'key': var key = __allkwargs0__ [__attrib0__]; break;
/* 000335 */ 					}
/* 000335 */ 				}
/* 000335 */ 			}
/* 000335 */ 		}
/* 000335 */ 		else {
/* 000335 */ 		}
/* 000336 */ 		var data = __getitem__ (__getitem__ (self.data, 'dumps'), key);
/* 000337 */ 		return (function () {
/* 000337 */ 			var __accu0__ = self;
/* 000337 */ 			return __call__ (__accu0__._load_from_data, __accu0__, data);
/* 000337 */ 		}) ();
/* 000337 */ 	});},
/* 000341 */ 	get _load_from_data () {return __get__ (this, function (self, data) {
/* 000341 */ 		if (arguments.length) {
/* 000341 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000341 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000341 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000341 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000341 */ 					switch (__attrib0__) {
/* 000341 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000341 */ 						case 'data': var data = __allkwargs0__ [__attrib0__]; break;
/* 000341 */ 					}
/* 000341 */ 				}
/* 000341 */ 			}
/* 000341 */ 		}
/* 000341 */ 		else {
/* 000341 */ 		}
/* 000343 */ 		if (__t__ (data === null)) {
/* 000344 */ 			return null;
/* 000344 */ 		}
/* 000346 */ 		if (__t__ (__call__ (isinstance, null, data, list))) {
/* 000347 */ 			return (function () {
/* 000347 */ 				var __accu0__ = [];
/* 000347 */ 				var __iterable0__ = data;
/* 000347 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000347 */ 					var item = __getitem__ (__iterable0__, __index0__);
/* 000347 */ 					(function () {
/* 000347 */ 						var __accu1__ = __accu0__;
/* 000347 */ 						return __call__ (__accu1__.append, __accu1__, (function () {
/* 000347 */ 							var __accu2__ = self;
/* 000347 */ 							return __call__ (__accu2__._load_from_data, __accu2__, item);
/* 000347 */ 						}) ());
/* 000347 */ 					}) ();
/* 000347 */ 				}
/* 000347 */ 				return __accu0__;
/* 000347 */ 			}) ();
/* 000347 */ 		}
/* 000352 */ 		var special = null;
/* 000353 */ 		try {
/* 000354 */ 			var special = __getitem__ (data, '$flmenv');
/* 000354 */ 		}
/* 000354 */ 		catch (__except0__) {
/* 000354 */ 			if (isinstance (__except0__, Exception)) {
/* 000355 */ 				// pass;
/* 000355 */ 			}
/* 000355 */ 			else {
/* 000355 */ 				throw __except0__;
/* 000355 */ 			}
/* 000355 */ 		}
/* 000356 */ 		if (__t__ (special)) {
/* 000357 */ 			return (function () {
/* 000357 */ 				var __accu0__ = self;
/* 000357 */ 				return __call__ (__accu0__._flmenv_object, __accu0__, __getitem__ (data, '$flmenv'), data);
/* 000357 */ 			}) ();
/* 000357 */ 		}
/* 000359 */ 		var special = null;
/* 000360 */ 		try {
/* 000361 */ 			var special = __getitem__ (data, '$skip');
/* 000361 */ 		}
/* 000361 */ 		catch (__except0__) {
/* 000361 */ 			if (isinstance (__except0__, Exception)) {
/* 000362 */ 				// pass;
/* 000362 */ 			}
/* 000362 */ 			else {
/* 000362 */ 				throw __except0__;
/* 000362 */ 			}
/* 000362 */ 		}
/* 000363 */ 		if (__t__ (special)) {
/* 000364 */ 			return FLMDataLoadNotSupported;
/* 000364 */ 		}
/* 000366 */ 		var special = null;
/* 000367 */ 		try {
/* 000368 */ 			var special = __getitem__ (data, '$restype');
/* 000368 */ 		}
/* 000368 */ 		catch (__except0__) {
/* 000368 */ 			if (isinstance (__except0__, Exception)) {
/* 000369 */ 				// pass;
/* 000369 */ 			}
/* 000369 */ 			else {
/* 000369 */ 				throw __except0__;
/* 000369 */ 			}
/* 000369 */ 		}
/* 000370 */ 		if (__t__ (special)) {
/* 000371 */ 			return (function () {
/* 000371 */ 				var __accu0__ = self;
/* 000371 */ 				return __call__ (__accu0__._load_resource, __accu0__, special, __getitem__ (data, '$reskey'));
/* 000371 */ 			}) ();
/* 000371 */ 		}
/* 000373 */ 		var special = null;
/* 000374 */ 		try {
/* 000375 */ 			var special = __getitem__ (data, '$type');
/* 000375 */ 		}
/* 000375 */ 		catch (__except0__) {
/* 000375 */ 			if (isinstance (__except0__, Exception)) {
/* 000376 */ 				// pass;
/* 000376 */ 			}
/* 000376 */ 			else {
/* 000376 */ 				throw __except0__;
/* 000376 */ 			}
/* 000376 */ 		}
/* 000377 */ 		if (__t__ (special)) {
/* 000378 */ 			var datad = __call__ (dict, null, data);
/* 000379 */ 			var thetype = (function () {
/* 000379 */ 				var __accu0__ = datad;
/* 000379 */ 				return __call__ (__accu0__.py_pop, __accu0__, '$type');
/* 000379 */ 			}) ();
/* 000380 */ 			return (function () {
/* 000380 */ 				var __accu0__ = self;
/* 000380 */ 				return __call__ (__accu0__._load_object, __accu0__, thetype, datad);
/* 000380 */ 			}) ();
/* 000380 */ 		}
/* 000382 */ 		if (__t__ (__call__ (isinstance, null, data, tuple ([str, int, bool])))) {
/* 000383 */ 			return data;
/* 000383 */ 		}
/* 000385 */ 		if (__t__ (data === FLMDataLoadNotSupported)) {
/* 000386 */ 			return null;
/* 000386 */ 		}
/* 000389 */ 		return (function () {
/* 000389 */ 			var __accu0__ = [];
/* 000390 */ 			var __iterable0__ = (function () {
/* 000390 */ 				var __accu1__ = __call__ (dict, null, data);
/* 000390 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000390 */ 			}) ();
/* 000390 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000390 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000390 */ 				var k = __left0__ [0];
/* 000390 */ 				var v = __left0__ [1];
/* 000390 */ 				(function () {
/* 000390 */ 					var __accu1__ = __accu0__;
/* 000389 */ 					return __call__ (__accu1__.append, __accu1__, [k, (function () {
/* 000389 */ 						var __accu2__ = self;
/* 000389 */ 						return __call__ (__accu2__._load_from_data, __accu2__, v);
/* 000389 */ 					}) ()]);
/* 000389 */ 				}) ();
/* 000389 */ 			}
/* 000389 */ 			return dict (__accu0__);
/* 000389 */ 		}) ();
/* 000389 */ 	});},
/* 000395 */ 	get _flmenv_object () {return __get__ (this, function (self, flmenv_what, data) {
/* 000395 */ 		if (arguments.length) {
/* 000395 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000395 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000395 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000395 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000395 */ 					switch (__attrib0__) {
/* 000395 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000395 */ 						case 'flmenv_what': var flmenv_what = __allkwargs0__ [__attrib0__]; break;
/* 000395 */ 						case 'data': var data = __allkwargs0__ [__attrib0__]; break;
/* 000395 */ 					}
/* 000395 */ 				}
/* 000395 */ 			}
/* 000395 */ 		}
/* 000395 */ 		else {
/* 000395 */ 		}
/* 000396 */ 		if (__t__ (__eq__ (flmenv_what, ''))) {
/* 000397 */ 			return self.environment;
/* 000397 */ 		}
/* 000398 */ 		if (__t__ (__eq__ (flmenv_what, 'parsing_state'))) {
/* 000399 */ 			return self.environment.parsing_state;
/* 000399 */ 		}
/* 000400 */ 		var __except0__ = __call__ (ValueError, null, __add__ ('Unknown/invalid flmenv: ', __call__ (repr, null, data)));
/* 000400 */ 		__except0__.__cause__ = null;
/* 000400 */ 		throw __except0__;
/* 000400 */ 	});},
/* 000403 */ 	get _load_resource () {return __get__ (this, function (self, restype, reskey) {
/* 000403 */ 		if (arguments.length) {
/* 000403 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000403 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000403 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000403 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000403 */ 					switch (__attrib0__) {
/* 000403 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000403 */ 						case 'restype': var restype = __allkwargs0__ [__attrib0__]; break;
/* 000403 */ 						case 'reskey': var reskey = __allkwargs0__ [__attrib0__]; break;
/* 000403 */ 					}
/* 000403 */ 				}
/* 000403 */ 			}
/* 000403 */ 		}
/* 000403 */ 		else {
/* 000403 */ 		}
/* 000405 */ 		if (__t__ (!__in__ (restype, self._loaded_resources))) {
/* 000406 */ 			__setitem__ (self._loaded_resources, restype, dict ({}));
/* 000406 */ 		}
/* 000408 */ 		if (__t__ (!__in__ (reskey, __getitem__ (self._loaded_resources, restype)))) {
/* 000411 */ 			__setitem__ (__getitem__ (self._loaded_resources, restype), reskey, (function () {
/* 000411 */ 				var __accu0__ = self;
/* 000411 */ 				return __call__ (__accu0__._load_resource_from_data, __accu0__, restype, reskey);
/* 000411 */ 			}) ());
/* 000411 */ 		}
/* 000414 */ 		return __getitem__ (__getitem__ (self._loaded_resources, restype), reskey);
/* 000414 */ 	});},
/* 000416 */ 	get _load_resource_from_data () {return __get__ (this, function (self, restype, reskey) {
/* 000416 */ 		if (arguments.length) {
/* 000416 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000416 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000416 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000416 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000416 */ 					switch (__attrib0__) {
/* 000416 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000416 */ 						case 'restype': var restype = __allkwargs0__ [__attrib0__]; break;
/* 000416 */ 						case 'reskey': var reskey = __allkwargs0__ [__attrib0__]; break;
/* 000416 */ 					}
/* 000416 */ 				}
/* 000416 */ 			}
/* 000416 */ 		}
/* 000416 */ 		else {
/* 000416 */ 		}
/* 000418 */ 		if (__t__ (!__in__ (restype, __getitem__ (self.data, 'resources')))) {
/* 000419 */ 			var __except0__ = __call__ (ValueError, null, 'Invalid internal resource reference type {}'.format (restype));
/* 000419 */ 			__except0__.__cause__ = null;
/* 000419 */ 			throw __except0__;
/* 000419 */ 		}
/* 000420 */ 		if (__t__ (!__in__ (reskey, __getitem__ (__getitem__ (self.data, 'resources'), restype)))) {
/* 000421 */ 			var __except0__ = __call__ (ValueError, null, 'Invalid internal resource reference key {}/{}'.format (restype, reskey));
/* 000421 */ 			__except0__.__cause__ = null;
/* 000421 */ 			throw __except0__;
/* 000421 */ 		}
/* 000423 */ 		var resdata = __getitem__ (__getitem__ (__getitem__ (self.data, 'resources'), restype), reskey);
/* 000425 */ 		if (__t__ (__eq__ (restype, 'FLMLatexWalker'))) {
/* 000426 */ 			var resdata2 = __call__ (dict, null, resdata);
/* 000427 */ 			var the_type = (function () {
/* 000427 */ 				var __accu0__ = resdata2;
/* 000427 */ 				return __call__ (__accu0__.py_pop, __accu0__, '$type');
/* 000427 */ 			}) ();
/* 000428 */ 			if (__t__ (__ne__ (the_type, 'FLMLatexWalker'))) {
/* 000429 */ 				var __except0__ = __call__ (ValueError, null, "flmdump: Can't create LatexWalker instances other than FLMLatexWalker");
/* 000429 */ 				__except0__.__cause__ = null;
/* 000429 */ 				throw __except0__;
/* 000429 */ 			}
/* 000432 */ 			return (function () {
/* 000432 */ 				var __accu0__ = self.environment;
/* 000432 */ 				return __call__ (__accu0__.make_latex_walker, __accu0__, __kwargtrans__ (resdata2));
/* 000432 */ 			}) ();
/* 000432 */ 		}
/* 000436 */ 		if (__t__ (__eq__ (restype, 'FLMParsingState'))) {
/* 000437 */ 			return (function () {
/* 000437 */ 				var __accu0__ = self;
/* 000439 */ 				return __call__ (__accu0__._load_object, __accu0__, restype, __call__ (dict, null, resdata, __kwargtrans__ ({latex_context: FLMDataLoadNotSupported})));
/* 000439 */ 			}) ();
/* 000439 */ 		}
/* 000442 */ 		if (__t__ (__eq__ (restype, 'FLMSpecInfo'))) {
/* 000443 */ 			var resdata2 = __call__ (dict, null, resdata);
/* 000444 */ 			var the_type = (function () {
/* 000444 */ 				var __accu0__ = resdata2;
/* 000444 */ 				return __call__ (__accu0__.py_pop, __accu0__, '$type');
/* 000444 */ 			}) ();
/* 000445 */ 			return (function () {
/* 000445 */ 				var __accu0__ = self;
/* 000445 */ 				return __call__ (__accu0__._load_object, __accu0__, the_type, resdata2, __kwargtrans__ ({restype: restype}));
/* 000445 */ 			}) ();
/* 000445 */ 		}
/* 000451 */ 		if (__t__ (__eq__ (restype, 'LatexNode'))) {
/* 000452 */ 			var resdata2 = __call__ (dict, null, resdata);
/* 000453 */ 			var the_type = (function () {
/* 000453 */ 				var __accu0__ = resdata2;
/* 000453 */ 				return __call__ (__accu0__.py_pop, __accu0__, '$type');
/* 000453 */ 			}) ();
/* 000454 */ 			return (function () {
/* 000454 */ 				var __accu0__ = self;
/* 000454 */ 				return __call__ (__accu0__._load_object, __accu0__, the_type, resdata2);
/* 000454 */ 			}) ();
/* 000454 */ 		}
/* 000459 */ 		var __except0__ = __call__ (ValueError, null, 'Unknown data resource type to load: {}'.format (restype));
/* 000459 */ 		__except0__.__cause__ = null;
/* 000459 */ 		throw __except0__;
/* 000459 */ 	});},
/* 000462 */ 	get _load_object () {return __get__ (this, function (self, objtype, data) {
/* 000462 */ 		var restype = null;
/* 000462 */ 		if (arguments.length) {
/* 000462 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000462 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000462 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000462 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000462 */ 					switch (__attrib0__) {
/* 000462 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000462 */ 						case 'objtype': var objtype = __allkwargs0__ [__attrib0__]; break;
/* 000462 */ 						case 'data': var data = __allkwargs0__ [__attrib0__]; break;
/* 000462 */ 						case 'restype': var restype = __allkwargs0__ [__attrib0__]; break;
/* 000462 */ 					}
/* 000462 */ 				}
/* 000462 */ 			}
/* 000462 */ 		}
/* 000462 */ 		else {
/* 000462 */ 		}
/* 000464 */ 		var data = __call__ (dict, null, data);
/* 000466 */ 		var args = (function () {
/* 000466 */ 			var __accu0__ = [];
/* 000468 */ 			var __iterable0__ = (function () {
/* 000468 */ 				var __accu1__ = data;
/* 000468 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000468 */ 			}) ();
/* 000468 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000468 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000468 */ 				var k = __left0__ [0];
/* 000468 */ 				var v = __left0__ [1];
/* 000469 */ 				if (__t__ (!__t__ (((function () {
/* 000469 */ 					var __accu1__ = k;
/* 000469 */ 					return __call__ (__accu1__.startswith, __accu1__, '$');
/* 000469 */ 				}) ())))) {
/* 000469 */ 					(function () {
/* 000469 */ 						var __accu1__ = __accu0__;
/* 000467 */ 						return __call__ (__accu1__.append, __accu1__, [k, (function () {
/* 000467 */ 							var __accu2__ = self;
/* 000467 */ 							return __call__ (__accu2__._load_from_data, __accu2__, v);
/* 000467 */ 						}) ()]);
/* 000467 */ 					}) ();
/* 000467 */ 				}
/* 000467 */ 			}
/* 000467 */ 			return dict (__accu0__);
/* 000467 */ 		}) ();
/* 000472 */ 		if (__t__ (__eq__ (objtype, 'FLMFragment'))) {
/* 000473 */ 			var ObjTypeFn = self._make_fragment;
/* 000473 */ 		}
/* 000474 */ 		else if (__t__ (__t__ (__in__ (objtype, latex_node_types_dict)) || __eq__ (objtype, 'LatexNodeList'))) {
/* 000475 */ 			var ObjTypeFn = (function __lambda__ () {
/* 000475 */ 				var kwargs = dict ();
/* 000475 */ 				if (arguments.length) {
/* 000475 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000475 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000475 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000475 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000475 */ 							switch (__attrib0__) {
/* 000475 */ 								default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000475 */ 							}
/* 000475 */ 						}
/* 000475 */ 						delete kwargs.__kwargtrans__;
/* 000475 */ 					}
/* 000475 */ 				}
/* 000475 */ 				else {
/* 000475 */ 				}
/* 000475 */ 				return (function () {
/* 000475 */ 					var __accu0__ = self;
/* 000475 */ 					return __call__ (__accu0__._make_node_instance, __accu0__, objtype, kwargs);
/* 000475 */ 				}) ();
/* 000475 */ 			});
/* 000475 */ 		}
/* 000476 */ 		else if (__t__ (__in__ (objtype, _objtypes))) {
/* 000477 */ 			var ObjTypeFn = __getitem__ (_objtypes, objtype);
/* 000477 */ 		}
/* 000478 */ 		else if (__t__ (__in__ (':', objtype))) {
/* 000480 */ 			var ObjTypeFn = __call__ (_import_class, null, objtype, __kwargtrans__ ({restype: restype}));
/* 000480 */ 		}
/* 000481 */ 		else {
/* 000482 */ 			var __except0__ = __call__ (ValueError, null, 'Unknown object type ‘{}’ for data loading'.format (objtype));
/* 000482 */ 			__except0__.__cause__ = null;
/* 000482 */ 			throw __except0__;
/* 000482 */ 		}
/* 000485 */ 		var obj = __call__ (ObjTypeFn, null, __kwargtrans__ (args));
/* 000486 */ 		return obj;
/* 000486 */ 	});},
/* 000488 */ 	get _make_node_instance () {return __get__ (this, function (self, nodetype, kwargs) {
/* 000488 */ 		if (arguments.length) {
/* 000488 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000488 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000488 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000488 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000488 */ 					switch (__attrib0__) {
/* 000488 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000488 */ 						case 'nodetype': var nodetype = __allkwargs0__ [__attrib0__]; break;
/* 000488 */ 						case 'kwargs': var kwargs = __allkwargs0__ [__attrib0__]; break;
/* 000488 */ 					}
/* 000488 */ 				}
/* 000488 */ 			}
/* 000488 */ 		}
/* 000488 */ 		else {
/* 000488 */ 		}
/* 000494 */ 		var base_kwargs = dict ({});
/* 000495 */ 		var attrib_kwargs = dict ({});
/* 000496 */ 		var __iterable0__ = (function () {
/* 000496 */ 			var __accu0__ = kwargs;
/* 000496 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000496 */ 		}) ();
/* 000496 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000496 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000496 */ 			var k = __left0__ [0];
/* 000496 */ 			var v = __left0__ [1];
/* 000497 */ 			if (__t__ ((function () {
/* 000497 */ 				var __accu0__ = k;
/* 000497 */ 				return __call__ (__accu0__.startswith, __accu0__, 'flm');
/* 000497 */ 			}) ())) {
/* 000498 */ 				__setitem__ (attrib_kwargs, k, v);
/* 000498 */ 			}
/* 000499 */ 			else {
/* 000500 */ 				__setitem__ (base_kwargs, k, v);
/* 000500 */ 			}
/* 000500 */ 		}
/* 000502 */ 		if (__t__ (__eq__ (nodetype, 'LatexNodeList'))) {
/* 000503 */ 			var ObjTypeFn = LatexNodeList;
/* 000504 */ 			var finalize_fn = self.environment.finalize_nodelist;
/* 000504 */ 		}
/* 000505 */ 		else {
/* 000506 */ 			var ObjTypeFn = __getitem__ (latex_node_types_dict, nodetype);
/* 000507 */ 			var finalize_fn = self.environment.finalize_node;
/* 000507 */ 		}
/* 000509 */ 		var node = __call__ (ObjTypeFn, null, __kwargtrans__ (base_kwargs));
/* 000510 */ 		var __iterable0__ = (function () {
/* 000510 */ 			var __accu0__ = attrib_kwargs;
/* 000510 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000510 */ 		}) ();
/* 000510 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000510 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000510 */ 			var k = __left0__ [0];
/* 000510 */ 			var v = __left0__ [1];
/* 000511 */ 			__call__ (setattr, null, node, k, v);
/* 000511 */ 		}
/* 000513 */ 		var node = __call__ (finalize_fn, null, node);
/* 000515 */ 		return node;
/* 000515 */ 	});},
/* 000517 */ 	get _make_fragment () {return __get__ (this, function (self) {
/* 000517 */ 		var kwargs = dict ();
/* 000517 */ 		if (arguments.length) {
/* 000517 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000517 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000517 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000517 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000517 */ 					switch (__attrib0__) {
/* 000517 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000517 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000517 */ 					}
/* 000517 */ 				}
/* 000517 */ 				delete kwargs.__kwargtrans__;
/* 000517 */ 			}
/* 000517 */ 		}
/* 000517 */ 		else {
/* 000517 */ 		}
/* 000518 */ 		var nodelist = (function () {
/* 000518 */ 			var __accu0__ = kwargs;
/* 000518 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'nodes');
/* 000518 */ 		}) ();
/* 000519 */ 		var flm_text = (function () {
/* 000519 */ 			var __accu0__ = kwargs;
/* 000519 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'flm_text');
/* 000519 */ 		}) ();
/* 000520 */ 		return __call__ (FLMFragment, null, __kwargtrans__ (__mergekwargtrans__ ({flm_text: nodelist, environment: self.environment, _flm_text_if_loading_nodes: flm_text}, kwargs)));
/* 000520 */ 	});}
/* 000520 */ });
/* 000007 */ 
//# sourceMappingURL=flm.flmdump.map