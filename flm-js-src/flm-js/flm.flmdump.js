/* 000001 */ // Transcrypt'ed from Python, 2023-10-16 20:52:33
/* 000007 */ var flm_all_serializable_classes = {};
/* 000007 */ var unique_object_id = {};
/* 000007 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000053 */ import * as __module_flm_all_serializable_classes__ from './flm_all_serializable_classes.js';
/* 000053 */ __nest__ (flm_all_serializable_classes, '', __module_flm_all_serializable_classes__);
/* 000042 */ import * as __module_unique_object_id__ from './unique_object_id.js';
/* 000042 */ __nest__ (unique_object_id, '', __module_unique_object_id__);
/* 000034 */ import {FLMFragment} from './flm.flmfragment.js';
/* 000030 */ import {FLMSpecInfo} from './flm.flmspecinfo.js';
/* 000024 */ import {FLMLatexWalker, FLMParsingState, FLMParsingStateDeltaSetBlockLevel} from './flm.flmenvironment.js';
/* 000019 */ import {EnvironmentSpec, LatexContextDb, MacroSpec, SpecialsSpec} from './pylatexenc.macrospec.js';
/* 000015 */ import {LatexNodeList, latex_node_types} from './pylatexenc.latexnodes.nodes.js';
/* 000012 */ import {LatexParserBase} from './pylatexenc.latexnodes.parsers.js';
/* 000007 */ import {LatexArgumentSpec, ParsedArguments, ParsingStateDelta} from './pylatexenc.latexnodes.js';
/* 000007 */ export {FLMFragment, EnvironmentSpec, latex_node_types, LatexArgumentSpec, MacroSpec, LatexNodeList, SpecialsSpec, FLMParsingState, LatexContextDb, ParsingStateDelta, FLMSpecInfo, FLMParsingStateDeltaSetBlockLevel, LatexParserBase, FLMLatexWalker, ParsedArguments};
/* 000001 */ var __name__ = 'flm.flmdump';
/* 000043 */ export var fn_unique_object_id = unique_object_id.fn_unique_object_id;
/* 000054 */ export var _import_class = function (fullclsname, restype) {
/* 000054 */ 	if (arguments.length) {
/* 000054 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000054 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000054 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000054 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000054 */ 				switch (__attrib0__) {
/* 000054 */ 					case 'fullclsname': var fullclsname = __allkwargs0__ [__attrib0__]; break;
/* 000054 */ 					case 'restype': var restype = __allkwargs0__ [__attrib0__]; break;
/* 000054 */ 				}
/* 000054 */ 			}
/* 000054 */ 		}
/* 000054 */ 	}
/* 000054 */ 	else {
/* 000054 */ 	}
/* 000055 */ 	var resources = flm_all_serializable_classes.serializable;
/* 000056 */ 	if (__t__ (restype === null)) {
/* 000057 */ 		var restype = '';
/* 000057 */ 	}
/* 000058 */ 	if (__t__ (!__in__ (restype, resources))) {
/* 000059 */ 		var __except0__ = __call__ (ValueError, null, __add__ ('Invalid restype: ', __call__ (repr, null, restype)));
/* 000059 */ 		__except0__.__cause__ = null;
/* 000059 */ 		throw __except0__;
/* 000059 */ 	}
/* 000060 */ 	var rcls = __getitem__ (resources, restype);
/* 000061 */ 	if (__t__ (!__in__ (fullclsname, rcls))) {
/* 000063 */ 		var __except0__ = __call__ (ValueError, null, __add__ (__add__ (__add__ (__add__ ('Invalid class name: ', __call__ (repr, null, fullclsname)), ' ['), __call__ (repr, null, restype)), ']'));
/* 000063 */ 		__except0__.__cause__ = null;
/* 000063 */ 		throw __except0__;
/* 000063 */ 	}
/* 000064 */ 	return __getitem__ (rcls, fullclsname);
/* 000064 */ };
/* 000069 */ export var _fullclassname = function (clsobj) {
/* 000069 */ 	if (arguments.length) {
/* 000069 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000069 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000069 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000069 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000069 */ 				switch (__attrib0__) {
/* 000069 */ 					case 'clsobj': var clsobj = __allkwargs0__ [__attrib0__]; break;
/* 000069 */ 				}
/* 000069 */ 			}
/* 000069 */ 		}
/* 000069 */ 	}
/* 000069 */ 	else {
/* 000069 */ 	}
/* 000074 */ 	return __add__ (__add__ (clsobj.__module__, ':'), clsobj.__name__);
/* 000074 */ };
/* 000080 */ export var _FakeDataLoadedFLMLatexWalker =  __class__ ('_FakeDataLoadedFLMLatexWalker', [object], {
/* 000080 */ 	__module__: __name__,
/* 000081 */ 	get __init__ () {return __get__ (this, function (self, latex_walker) {
/* 000081 */ 		if (arguments.length) {
/* 000081 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000081 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000081 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000081 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000081 */ 					switch (__attrib0__) {
/* 000081 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000081 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000081 */ 					}
/* 000081 */ 				}
/* 000081 */ 			}
/* 000081 */ 		}
/* 000081 */ 		else {
/* 000081 */ 		}
/* 000082 */ 		self.flm_text = latex_walker.s;
/* 000083 */ 		self.standalone_mode = latex_walker.standalone_mode;
/* 000084 */ 		self.is_block_level = latex_walker.default_parsing_state.is_block_level;
/* 000085 */ 		self.parsing_mode = latex_walker.parsing_mode;
/* 000086 */ 		self.resource_info = latex_walker.resource_info;
/* 000087 */ 		self.tolerant_parsing = latex_walker.tolerant_parsing;
/* 000088 */ 		self.what = latex_walker.what;
/* 000089 */ 		self.input_lineno_colno_offsets = latex_walker.input_lineno_colno_offsets;
/* 000089 */ 	});},
/* 000091 */ 	_fields: tuple (['flm_text', 'standalone_mode', 'is_block_level', 'parsing_mode', 'resource_info', 'tolerant_parsing', 'what', 'input_lineno_colno_offsets']),
/* 000095 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000095 */ 		if (arguments.length) {
/* 000095 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000095 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000095 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000095 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000095 */ 					switch (__attrib0__) {
/* 000095 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000095 */ 					}
/* 000095 */ 				}
/* 000095 */ 			}
/* 000095 */ 		}
/* 000095 */ 		else {
/* 000095 */ 		}
/* 000096 */ 		return '{}(**{})'.format (self.__class__.__name__, __call__ (repr, null, self.__dict__));
/* 000096 */ 	});}
/* 000096 */ });
/* 000102 */ export var latex_node_types_dict = (function () {
/* 000102 */ 	var __accu0__ = [];
/* 000102 */ 	var __iterable0__ = latex_node_types;
/* 000102 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000104 */ 		var c = __getitem__ (__iterable0__, __index0__);
/* 000104 */ 		(function () {
/* 000104 */ 			var __accu1__ = __accu0__;
/* 000104 */ 			return __call__ (__accu1__.append, __accu1__, [c.__name__, c]);
/* 000104 */ 		}) ();
/* 000104 */ 	}
/* 000104 */ 	return dict (__accu0__);
/* 000104 */ }) ();
/* 000107 */ export var known_object_types = (function () {
/* 000107 */ 	var __accu0__ = [];
/* 000107 */ 	var __iterable0__ = [FLMFragment, FLMParsingState, ParsedArguments, LatexArgumentSpec, ParsingStateDelta, FLMParsingStateDeltaSetBlockLevel];
/* 000107 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000115 */ 		var c = __getitem__ (__iterable0__, __index0__);
/* 000109 */ 		(function () {
/* 000109 */ 			var __accu1__ = __accu0__;
/* 000109 */ 			return __call__ (__accu1__.append, __accu1__, [c.__name__, c]);
/* 000109 */ 		}) ();
/* 000109 */ 	}
/* 000109 */ 	return dict (__accu0__);
/* 000109 */ }) ();
/* 000119 */ export var _is_known_serializable_object_type_names = function (typename) {
/* 000119 */ 	if (arguments.length) {
/* 000119 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000119 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000119 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000119 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000119 */ 				switch (__attrib0__) {
/* 000119 */ 					case 'typename': var typename = __allkwargs0__ [__attrib0__]; break;
/* 000119 */ 				}
/* 000119 */ 			}
/* 000119 */ 		}
/* 000119 */ 	}
/* 000119 */ 	else {
/* 000119 */ 	}
/* 000120 */ 	return __t__ (__in__ (typename, latex_node_types_dict)) || __t__ (__in__ (typename, known_object_types)) || __eq__ (typename, 'LatexNodeList');
/* 000120 */ };
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
/* 000185 */ 			var cls = obj.__class__;
/* 000186 */ 			var clsname = cls.__name__;
/* 000187 */ 			if (__t__ (__call__ (_is_known_serializable_object_type_names, null, clsname))) {
/* 000188 */ 				var type_name = clsname;
/* 000188 */ 			}
/* 000189 */ 			else {
/* 000190 */ 				var type_name = __call__ (_fullclassname, null, cls);
/* 000190 */ 			}
/* 000190 */ 		}
/* 000192 */ 		var objdata = dict ({'$type': type_name});
/* 000196 */ 		var get_obj_attr = function (fieldname) {
/* 000196 */ 			if (arguments.length) {
/* 000196 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000196 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000196 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000196 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000196 */ 						switch (__attrib0__) {
/* 000196 */ 							case 'fieldname': var fieldname = __allkwargs0__ [__attrib0__]; break;
/* 000196 */ 						}
/* 000196 */ 					}
/* 000196 */ 				}
/* 000196 */ 			}
/* 000196 */ 			else {
/* 000196 */ 			}
/* 000197 */ 			if (__t__ (__call__ (hasattr, null, obj, fieldname))) {
/* 000198 */ 				return __call__ (getattr, null, obj, fieldname);
/* 000198 */ 			}
/* 000199 */ 			if (__t__ (__t__ (__call__ (hasattr, null, obj, '_proxy_object')) && __call__ (hasattr, null, obj._proxy_object, fieldname))) {
/* 000200 */ 				return __call__ (getattr, null, obj._proxy_object, fieldname);
/* 000200 */ 			}
/* 000201 */ 			var __except0__ = __call__ (ValueError, null, __add__ (__add__ (__add__ ('Invalid object field: ', __call__ (repr, null, fieldname)), ' in '), __call__ (repr, null, obj)));
/* 000201 */ 			__except0__.__cause__ = null;
/* 000201 */ 			throw __except0__;
/* 000201 */ 		};
/* 000203 */ 		var __iterable0__ = __call__ (sorted, null, fieldnames);
/* 000203 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000203 */ 			var field = __getitem__ (__iterable0__, __index0__);
/* 000204 */ 			var val = (function () {
/* 000204 */ 				var __accu0__ = self;
/* 000204 */ 				return __call__ (__accu0__._make_dump, __accu0__, __call__ (get_obj_attr, null, field), __kwargtrans__ ({dumping_state: dumping_state}));
/* 000204 */ 			}) ();
/* 000205 */ 			if (__t__ (val === _Skip)) {
/* 000206 */ 				var val = dict ({'$skip': true});
/* 000206 */ 			}
/* 000207 */ 			__setitem__ (objdata, field, val);
/* 000207 */ 		}
/* 000209 */ 		return objdata;
/* 000209 */ 	});},
/* 000211 */ 	get _make_dump () {return __get__ (this, function (self, x) {
/* 000211 */ 		if (arguments.length) {
/* 000211 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000211 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000211 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000211 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000211 */ 					switch (__attrib0__) {
/* 000211 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000211 */ 						case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000211 */ 						case 'dumping_state': var dumping_state = __allkwargs0__ [__attrib0__]; break;
/* 000211 */ 					}
/* 000211 */ 				}
/* 000211 */ 			}
/* 000211 */ 		}
/* 000211 */ 		else {
/* 000211 */ 		}
/* 000213 */ 		if (__t__ (__call__ (isinstance, null, x, tuple ([tuple, list])))) {
/* 000214 */ 			var result = [];
/* 000215 */ 			var __iterable0__ = x;
/* 000215 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000215 */ 				var item = __getitem__ (__iterable0__, __index0__);
/* 000216 */ 				var value = (function () {
/* 000216 */ 					var __accu0__ = self;
/* 000216 */ 					return __call__ (__accu0__._make_dump, __accu0__, item, __kwargtrans__ ({dumping_state: dumping_state}));
/* 000216 */ 				}) ();
/* 000217 */ 				if (__t__ (value === _Skip)) {
/* 000218 */ 					var value = null;
/* 000218 */ 				}
/* 000219 */ 				(function () {
/* 000219 */ 					var __accu0__ = result;
/* 000219 */ 					return __call__ (__accu0__.append, __accu0__, value);
/* 000219 */ 				}) ();
/* 000219 */ 			}
/* 000220 */ 			return result;
/* 000220 */ 		}
/* 000222 */ 		if (__t__ (__call__ (isinstance, null, x, dict))) {
/* 000223 */ 			return (function () {
/* 000223 */ 				var __accu0__ = [];
/* 000224 */ 				var __iterable0__ = (function () {
/* 000224 */ 					var __accu1__ = x;
/* 000224 */ 					return __call__ (__accu1__.py_items, __accu1__);
/* 000224 */ 				}) ();
/* 000224 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000224 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000224 */ 					var k = __left0__ [0];
/* 000224 */ 					var v = __left0__ [1];
/* 000224 */ 					(function () {
/* 000224 */ 						var __accu1__ = __accu0__;
/* 000223 */ 						return __call__ (__accu1__.append, __accu1__, [k, (function () {
/* 000223 */ 							var __accu2__ = self;
/* 000223 */ 							return __call__ (__accu2__._make_dump, __accu2__, v, __kwargtrans__ ({dumping_state: dumping_state}));
/* 000223 */ 						}) ()]);
/* 000223 */ 					}) ();
/* 000223 */ 				}
/* 000223 */ 				return dict (__accu0__);
/* 000223 */ 			}) ();
/* 000223 */ 		}
/* 000226 */ 		if (__t__ (x === self.environment)) {
/* 000227 */ 			return dict ({'$flmenv': 'environment'});
/* 000227 */ 		}
/* 000229 */ 		if (__t__ (x === self.environment.parsing_state)) {
/* 000230 */ 			return dict ({'$flmenv': 'parsing_state'});
/* 000230 */ 		}
/* 000232 */ 		if (__t__ (__call__ (isinstance, null, x, FLMLatexWalker))) {
/* 000233 */ 			return (function () {
/* 000233 */ 				var __accu0__ = self;
/* 000236 */ 				return __call__ (__accu0__._make_resource, __accu0__, 'FLMLatexWalker', x, __call__ (_FakeDataLoadedFLMLatexWalker, null, x), __kwargtrans__ ({dumping_state: dumping_state}));
/* 000236 */ 			}) ();
/* 000236 */ 		}
/* 000240 */ 		if (__t__ (__call__ (isinstance, null, x, FLMSpecInfo))) {
/* 000241 */ 			return (function () {
/* 000241 */ 				var __accu0__ = self;
/* 000246 */ 				return __call__ (__accu0__._make_resource, __accu0__, 'FLMSpecInfo', x, x, __kwargtrans__ ({dumping_state: dumping_state, restype_dumptype: __call__ (_fullclassname, null, x.__class__)}));
/* 000246 */ 			}) ();
/* 000246 */ 		}
/* 000249 */ 		if (__t__ (__call__ (isinstance, null, x, FLMParsingState))) {
/* 000250 */ 			return (function () {
/* 000250 */ 				var __accu0__ = self;
/* 000250 */ 				return __call__ (__accu0__._make_resource, __accu0__, 'FLMParsingState', x, x, __kwargtrans__ ({dumping_state: dumping_state}));
/* 000250 */ 			}) ();
/* 000250 */ 		}
/* 000257 */ 		if (__t__ (__call__ (isinstance, null, x, latex_node_types))) {
/* 000258 */ 			return (function () {
/* 000258 */ 				var __accu0__ = self;
/* 000258 */ 				return __call__ (__accu0__._make_resource, __accu0__, 'LatexNode', x, x, __kwargtrans__ ({dumping_state: dumping_state, restype_dumptype: x.__class__.__name__}));
/* 000258 */ 			}) ();
/* 000258 */ 		}
/* 000266 */ 		if (__t__ (__call__ (isinstance, null, x, _skip_types))) {
/* 000267 */ 			return _Skip;
/* 000267 */ 		}
/* 000269 */ 		if (__t__ (__call__ (hasattr, null, x, '_fields'))) {
/* 000270 */ 			return (function () {
/* 000270 */ 				var __accu0__ = self;
/* 000270 */ 				return __call__ (__accu0__._make_object_dump, __accu0__, x, __kwargtrans__ ({dumping_state: dumping_state}));
/* 000270 */ 			}) ();
/* 000270 */ 		}
/* 000272 */ 		if (__t__ (__call__ (isinstance, null, x, tuple ([str, bool, int, float])))) {
/* 000273 */ 			return x;
/* 000273 */ 		}
/* 000275 */ 		if (__t__ (x === null)) {
/* 000276 */ 			return null;
/* 000276 */ 		}
/* 000278 */ 		if (__t__ (!__t__ ((x)))) {
/* 000280 */ 			return null;
/* 000280 */ 		}
/* 000282 */ 		var __except0__ = __call__ (ValueError, null, 'Cannot dump value {} of unsupported type'.format (__call__ (repr, null, x)));
/* 000282 */ 		__except0__.__cause__ = null;
/* 000282 */ 		throw __except0__;
/* 000282 */ 	});},
/* 000284 */ 	get _make_resource () {return __get__ (this, function (self, restype, y, ydata) {
/* 000284 */ 		var restype_dumptype = null;
/* 000284 */ 		if (arguments.length) {
/* 000284 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000284 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000284 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000284 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000284 */ 					switch (__attrib0__) {
/* 000284 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000284 */ 						case 'restype': var restype = __allkwargs0__ [__attrib0__]; break;
/* 000284 */ 						case 'y': var y = __allkwargs0__ [__attrib0__]; break;
/* 000284 */ 						case 'ydata': var ydata = __allkwargs0__ [__attrib0__]; break;
/* 000284 */ 						case 'restype_dumptype': var restype_dumptype = __allkwargs0__ [__attrib0__]; break;
/* 000284 */ 						case 'dumping_state': var dumping_state = __allkwargs0__ [__attrib0__]; break;
/* 000284 */ 					}
/* 000284 */ 				}
/* 000284 */ 			}
/* 000284 */ 		}
/* 000284 */ 		else {
/* 000284 */ 		}
/* 000285 */ 		if (__t__ (!__in__ (restype, __getitem__ (self.data, 'resources')))) {
/* 000286 */ 			__setitem__ (__getitem__ (self.data, 'resources'), restype, dict ({}));
/* 000286 */ 		}
/* 000288 */ 		var reskey = __call__ (str, null, __call__ (fn_unique_object_id, null, y));
/* 000289 */ 		if (__t__ (!__in__ (reskey, __getitem__ (__getitem__ (self.data, 'resources'), restype)))) {
/* 000293 */ 			__setitem__ (__getitem__ (__getitem__ (self.data, 'resources'), restype), reskey, '$currently-dumping');
/* 000295 */ 			var ydata_dump = (function () {
/* 000295 */ 				var __accu0__ = self;
/* 000295 */ 				return __call__ (__accu0__._make_object_dump, __accu0__, ydata, __kwargtrans__ ({dumping_state: dumping_state, type_name: (__t__ (restype_dumptype !== null) ? restype_dumptype : restype)}));
/* 000295 */ 			}) ();
/* 000300 */ 			__setitem__ (__getitem__ (__getitem__ (self.data, 'resources'), restype), reskey, ydata_dump);
/* 000300 */ 		}
/* 000302 */ 		return dict ({'$restype': restype, '$reskey': reskey});
/* 000302 */ 	});}
/* 000302 */ });
/* 000306 */ export var FLMDataLoadNotSupported =  __class__ ('FLMDataLoadNotSupported', [object], {
/* 000306 */ 	__module__: __name__,
/* 000306 */ });
/* 000316 */ export var FLMDataLoader =  __class__ ('FLMDataLoader', [object], {
/* 000316 */ 	__module__: __name__,
/* 000321 */ 	get __init__ () {return __get__ (this, function (self, data) {
/* 000321 */ 		if (arguments.length) {
/* 000321 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000321 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000321 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000321 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000321 */ 					switch (__attrib0__) {
/* 000321 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000321 */ 						case 'data': var data = __allkwargs0__ [__attrib0__]; break;
/* 000321 */ 						case 'environment': var environment = __allkwargs0__ [__attrib0__]; break;
/* 000321 */ 					}
/* 000321 */ 				}
/* 000321 */ 			}
/* 000321 */ 		}
/* 000321 */ 		else {
/* 000321 */ 		}
/* 000322 */ 		self.data = data;
/* 000323 */ 		self.environment = environment;
/* 000325 */ 		if (__t__ (__ne__ (__getitem__ (__getitem__ (self.data, '_dump'), 'version'), _dump_version))) {
/* 000326 */ 			var __except0__ = __call__ (RuntimeError, null, 'Dump version mismatch: {}, expected {}'.format (__getitem__ (__getitem__ (self.data, '_dump'), 'version'), _dump_version));
/* 000326 */ 			__except0__.__cause__ = null;
/* 000326 */ 			throw __except0__;
/* 000326 */ 		}
/* 000331 */ 		self._loaded_resources = dict ({});
/* 000332 */ 		if (__t__ (__t__ (__in__ ('resources', self.data)) && __getitem__ (self.data, 'resources'))) {
/* 000333 */ 			var __iterable0__ = __getitem__ (self.data, 'resources');
/* 000333 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000333 */ 				var restype = __getitem__ (__iterable0__, __index0__);
/* 000334 */ 				__setitem__ (self._loaded_resources, restype, dict ({}));
/* 000334 */ 			}
/* 000334 */ 		}
/* 000334 */ 	});},
/* 000337 */ 	get get_keys () {return __get__ (this, function (self) {
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
/* 000338 */ 		return __call__ (list, null, (function () {
/* 000338 */ 			var __accu0__ = __getitem__ (self.data, 'dumps');
/* 000338 */ 			return __call__ (__accu0__.py_keys, __accu0__);
/* 000338 */ 		}) ());
/* 000338 */ 	});},
/* 000340 */ 	get get_object_dump () {return __get__ (this, function (self, key) {
/* 000340 */ 		if (arguments.length) {
/* 000340 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000340 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000340 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000340 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000340 */ 					switch (__attrib0__) {
/* 000340 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000340 */ 						case 'key': var key = __allkwargs0__ [__attrib0__]; break;
/* 000340 */ 					}
/* 000340 */ 				}
/* 000340 */ 			}
/* 000340 */ 		}
/* 000340 */ 		else {
/* 000340 */ 		}
/* 000341 */ 		var data = __getitem__ (__getitem__ (self.data, 'dumps'), key);
/* 000342 */ 		return (function () {
/* 000342 */ 			var __accu0__ = self;
/* 000342 */ 			return __call__ (__accu0__._load_from_data, __accu0__, data);
/* 000342 */ 		}) ();
/* 000342 */ 	});},
/* 000346 */ 	get _load_from_data () {return __get__ (this, function (self, data) {
/* 000346 */ 		if (arguments.length) {
/* 000346 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000346 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000346 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000346 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000346 */ 					switch (__attrib0__) {
/* 000346 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000346 */ 						case 'data': var data = __allkwargs0__ [__attrib0__]; break;
/* 000346 */ 					}
/* 000346 */ 				}
/* 000346 */ 			}
/* 000346 */ 		}
/* 000346 */ 		else {
/* 000346 */ 		}
/* 000348 */ 		if (__t__ (data === null)) {
/* 000349 */ 			return null;
/* 000349 */ 		}
/* 000351 */ 		if (__t__ (__call__ (isinstance, null, data, list))) {
/* 000352 */ 			return (function () {
/* 000352 */ 				var __accu0__ = [];
/* 000352 */ 				var __iterable0__ = data;
/* 000352 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000352 */ 					var item = __getitem__ (__iterable0__, __index0__);
/* 000352 */ 					(function () {
/* 000352 */ 						var __accu1__ = __accu0__;
/* 000352 */ 						return __call__ (__accu1__.append, __accu1__, (function () {
/* 000352 */ 							var __accu2__ = self;
/* 000352 */ 							return __call__ (__accu2__._load_from_data, __accu2__, item);
/* 000352 */ 						}) ());
/* 000352 */ 					}) ();
/* 000352 */ 				}
/* 000352 */ 				return __accu0__;
/* 000352 */ 			}) ();
/* 000352 */ 		}
/* 000357 */ 		var special = null;
/* 000358 */ 		try {
/* 000359 */ 			var special = __getitem__ (data, '$flmenv');
/* 000359 */ 		}
/* 000359 */ 		catch (__except0__) {
/* 000361 */ 			// pass;
/* 000361 */ 		}
/* 000362 */ 		if (__t__ (special)) {
/* 000363 */ 			return (function () {
/* 000363 */ 				var __accu0__ = self;
/* 000363 */ 				return __call__ (__accu0__._flmenv_object, __accu0__, __getitem__ (data, '$flmenv'), data);
/* 000363 */ 			}) ();
/* 000363 */ 		}
/* 000365 */ 		var special = null;
/* 000366 */ 		try {
/* 000367 */ 			var special = __getitem__ (data, '$skip');
/* 000367 */ 		}
/* 000367 */ 		catch (__except0__) {
/* 000369 */ 			// pass;
/* 000369 */ 		}
/* 000370 */ 		if (__t__ (special)) {
/* 000371 */ 			return FLMDataLoadNotSupported;
/* 000371 */ 		}
/* 000373 */ 		var special = null;
/* 000374 */ 		try {
/* 000375 */ 			var special = __getitem__ (data, '$restype');
/* 000375 */ 		}
/* 000375 */ 		catch (__except0__) {
/* 000377 */ 			// pass;
/* 000377 */ 		}
/* 000378 */ 		if (__t__ (special)) {
/* 000379 */ 			return (function () {
/* 000379 */ 				var __accu0__ = self;
/* 000379 */ 				return __call__ (__accu0__._load_resource, __accu0__, special, __getitem__ (data, '$reskey'));
/* 000379 */ 			}) ();
/* 000379 */ 		}
/* 000381 */ 		var special = null;
/* 000382 */ 		try {
/* 000383 */ 			var special = __getitem__ (data, '$type');
/* 000383 */ 		}
/* 000383 */ 		catch (__except0__) {
/* 000385 */ 			// pass;
/* 000385 */ 		}
/* 000386 */ 		if (__t__ (special)) {
/* 000387 */ 			var datad = __call__ (dict, null, data);
/* 000388 */ 			var thetype = (function () {
/* 000388 */ 				var __accu0__ = datad;
/* 000388 */ 				return __call__ (__accu0__.py_pop, __accu0__, '$type');
/* 000388 */ 			}) ();
/* 000389 */ 			return (function () {
/* 000389 */ 				var __accu0__ = self;
/* 000389 */ 				return __call__ (__accu0__._load_object, __accu0__, thetype, datad);
/* 000389 */ 			}) ();
/* 000389 */ 		}
/* 000391 */ 		if (__t__ (__call__ (isinstance, null, data, tuple ([str, int, bool])))) {
/* 000392 */ 			return data;
/* 000392 */ 		}
/* 000394 */ 		if (__t__ (data === FLMDataLoadNotSupported)) {
/* 000395 */ 			return null;
/* 000395 */ 		}
/* 000398 */ 		return (function () {
/* 000398 */ 			var __accu0__ = [];
/* 000399 */ 			var __iterable0__ = (function () {
/* 000399 */ 				var __accu1__ = __call__ (dict, null, data);
/* 000399 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000399 */ 			}) ();
/* 000399 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000399 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000399 */ 				var k = __left0__ [0];
/* 000399 */ 				var v = __left0__ [1];
/* 000399 */ 				(function () {
/* 000399 */ 					var __accu1__ = __accu0__;
/* 000398 */ 					return __call__ (__accu1__.append, __accu1__, [k, (function () {
/* 000398 */ 						var __accu2__ = self;
/* 000398 */ 						return __call__ (__accu2__._load_from_data, __accu2__, v);
/* 000398 */ 					}) ()]);
/* 000398 */ 				}) ();
/* 000398 */ 			}
/* 000398 */ 			return dict (__accu0__);
/* 000398 */ 		}) ();
/* 000398 */ 	});},
/* 000404 */ 	get _flmenv_object () {return __get__ (this, function (self, flmenv_what, data) {
/* 000404 */ 		if (arguments.length) {
/* 000404 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000404 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000404 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000404 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000404 */ 					switch (__attrib0__) {
/* 000404 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000404 */ 						case 'flmenv_what': var flmenv_what = __allkwargs0__ [__attrib0__]; break;
/* 000404 */ 						case 'data': var data = __allkwargs0__ [__attrib0__]; break;
/* 000404 */ 					}
/* 000404 */ 				}
/* 000404 */ 			}
/* 000404 */ 		}
/* 000404 */ 		else {
/* 000404 */ 		}
/* 000405 */ 		if (__t__ (__eq__ (flmenv_what, ''))) {
/* 000406 */ 			return self.environment;
/* 000406 */ 		}
/* 000407 */ 		if (__t__ (__eq__ (flmenv_what, 'parsing_state'))) {
/* 000408 */ 			return self.environment.parsing_state;
/* 000408 */ 		}
/* 000409 */ 		var __except0__ = __call__ (ValueError, null, __add__ ('Unknown/invalid flmenv: ', __call__ (repr, null, data)));
/* 000409 */ 		__except0__.__cause__ = null;
/* 000409 */ 		throw __except0__;
/* 000409 */ 	});},
/* 000412 */ 	get _load_resource () {return __get__ (this, function (self, restype, reskey) {
/* 000412 */ 		if (arguments.length) {
/* 000412 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000412 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000412 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000412 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000412 */ 					switch (__attrib0__) {
/* 000412 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000412 */ 						case 'restype': var restype = __allkwargs0__ [__attrib0__]; break;
/* 000412 */ 						case 'reskey': var reskey = __allkwargs0__ [__attrib0__]; break;
/* 000412 */ 					}
/* 000412 */ 				}
/* 000412 */ 			}
/* 000412 */ 		}
/* 000412 */ 		else {
/* 000412 */ 		}
/* 000414 */ 		if (__t__ (!__in__ (restype, self._loaded_resources))) {
/* 000415 */ 			__setitem__ (self._loaded_resources, restype, dict ({}));
/* 000415 */ 		}
/* 000417 */ 		if (__t__ (!__in__ (reskey, __getitem__ (self._loaded_resources, restype)))) {
/* 000420 */ 			__setitem__ (__getitem__ (self._loaded_resources, restype), reskey, (function () {
/* 000420 */ 				var __accu0__ = self;
/* 000420 */ 				return __call__ (__accu0__._load_resource_from_data, __accu0__, restype, reskey);
/* 000420 */ 			}) ());
/* 000420 */ 		}
/* 000423 */ 		return __getitem__ (__getitem__ (self._loaded_resources, restype), reskey);
/* 000423 */ 	});},
/* 000425 */ 	get _load_resource_from_data () {return __get__ (this, function (self, restype, reskey) {
/* 000425 */ 		if (arguments.length) {
/* 000425 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000425 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000425 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000425 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000425 */ 					switch (__attrib0__) {
/* 000425 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000425 */ 						case 'restype': var restype = __allkwargs0__ [__attrib0__]; break;
/* 000425 */ 						case 'reskey': var reskey = __allkwargs0__ [__attrib0__]; break;
/* 000425 */ 					}
/* 000425 */ 				}
/* 000425 */ 			}
/* 000425 */ 		}
/* 000425 */ 		else {
/* 000425 */ 		}
/* 000427 */ 		if (__t__ (!__in__ (restype, __getitem__ (self.data, 'resources')))) {
/* 000428 */ 			var __except0__ = __call__ (ValueError, null, 'Invalid internal resource reference type {}'.format (restype));
/* 000428 */ 			__except0__.__cause__ = null;
/* 000428 */ 			throw __except0__;
/* 000428 */ 		}
/* 000429 */ 		if (__t__ (!__in__ (reskey, __getitem__ (__getitem__ (self.data, 'resources'), restype)))) {
/* 000430 */ 			var __except0__ = __call__ (ValueError, null, 'Invalid internal resource reference key {}/{}'.format (restype, reskey));
/* 000430 */ 			__except0__.__cause__ = null;
/* 000430 */ 			throw __except0__;
/* 000430 */ 		}
/* 000432 */ 		var resdata = __getitem__ (__getitem__ (__getitem__ (self.data, 'resources'), restype), reskey);
/* 000434 */ 		if (__t__ (__eq__ (restype, 'FLMLatexWalker'))) {
/* 000435 */ 			var resdata2 = __call__ (dict, null, resdata);
/* 000436 */ 			var the_type = (function () {
/* 000436 */ 				var __accu0__ = resdata2;
/* 000436 */ 				return __call__ (__accu0__.py_pop, __accu0__, '$type');
/* 000436 */ 			}) ();
/* 000437 */ 			if (__t__ (__ne__ (the_type, 'FLMLatexWalker'))) {
/* 000438 */ 				var __except0__ = __call__ (ValueError, null, "flmdump: Can't create LatexWalker instances other than FLMLatexWalker");
/* 000438 */ 				__except0__.__cause__ = null;
/* 000438 */ 				throw __except0__;
/* 000438 */ 			}
/* 000441 */ 			return (function () {
/* 000441 */ 				var __accu0__ = self.environment;
/* 000441 */ 				return __call__ (__accu0__.make_latex_walker, __accu0__, __kwargtrans__ (resdata2));
/* 000441 */ 			}) ();
/* 000441 */ 		}
/* 000445 */ 		if (__t__ (__eq__ (restype, 'FLMParsingState'))) {
/* 000446 */ 			return (function () {
/* 000446 */ 				var __accu0__ = self;
/* 000448 */ 				return __call__ (__accu0__._load_object, __accu0__, restype, __call__ (dict, null, resdata, __kwargtrans__ ({latex_context: FLMDataLoadNotSupported})));
/* 000448 */ 			}) ();
/* 000448 */ 		}
/* 000451 */ 		if (__t__ (__eq__ (restype, 'FLMSpecInfo'))) {
/* 000452 */ 			var resdata2 = __call__ (dict, null, resdata);
/* 000453 */ 			var the_type = (function () {
/* 000453 */ 				var __accu0__ = resdata2;
/* 000453 */ 				return __call__ (__accu0__.py_pop, __accu0__, '$type');
/* 000453 */ 			}) ();
/* 000454 */ 			return (function () {
/* 000454 */ 				var __accu0__ = self;
/* 000454 */ 				return __call__ (__accu0__._load_object, __accu0__, the_type, resdata2, __kwargtrans__ ({restype: restype}));
/* 000454 */ 			}) ();
/* 000454 */ 		}
/* 000460 */ 		if (__t__ (__eq__ (restype, 'LatexNode'))) {
/* 000461 */ 			var resdata2 = __call__ (dict, null, resdata);
/* 000462 */ 			var the_type = (function () {
/* 000462 */ 				var __accu0__ = resdata2;
/* 000462 */ 				return __call__ (__accu0__.py_pop, __accu0__, '$type');
/* 000462 */ 			}) ();
/* 000463 */ 			return (function () {
/* 000463 */ 				var __accu0__ = self;
/* 000463 */ 				return __call__ (__accu0__._load_object, __accu0__, the_type, resdata2);
/* 000463 */ 			}) ();
/* 000463 */ 		}
/* 000468 */ 		var __except0__ = __call__ (ValueError, null, 'Unknown data resource type to load: {}'.format (restype));
/* 000468 */ 		__except0__.__cause__ = null;
/* 000468 */ 		throw __except0__;
/* 000468 */ 	});},
/* 000471 */ 	get _load_object () {return __get__ (this, function (self, objtype, data) {
/* 000471 */ 		var restype = null;
/* 000471 */ 		if (arguments.length) {
/* 000471 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000471 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000471 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000471 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000471 */ 					switch (__attrib0__) {
/* 000471 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000471 */ 						case 'objtype': var objtype = __allkwargs0__ [__attrib0__]; break;
/* 000471 */ 						case 'data': var data = __allkwargs0__ [__attrib0__]; break;
/* 000471 */ 						case 'restype': var restype = __allkwargs0__ [__attrib0__]; break;
/* 000471 */ 					}
/* 000471 */ 				}
/* 000471 */ 			}
/* 000471 */ 		}
/* 000471 */ 		else {
/* 000471 */ 		}
/* 000473 */ 		var data = __call__ (dict, null, data);
/* 000475 */ 		var args = (function () {
/* 000475 */ 			var __accu0__ = [];
/* 000477 */ 			var __iterable0__ = (function () {
/* 000477 */ 				var __accu1__ = data;
/* 000477 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000477 */ 			}) ();
/* 000477 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000477 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000477 */ 				var k = __left0__ [0];
/* 000477 */ 				var v = __left0__ [1];
/* 000478 */ 				if (__t__ (!__t__ (((function () {
/* 000478 */ 					var __accu1__ = k;
/* 000478 */ 					return __call__ (__accu1__.startswith, __accu1__, '$');
/* 000478 */ 				}) ())))) {
/* 000478 */ 					(function () {
/* 000478 */ 						var __accu1__ = __accu0__;
/* 000476 */ 						return __call__ (__accu1__.append, __accu1__, [k, (function () {
/* 000476 */ 							var __accu2__ = self;
/* 000476 */ 							return __call__ (__accu2__._load_from_data, __accu2__, v);
/* 000476 */ 						}) ()]);
/* 000476 */ 					}) ();
/* 000476 */ 				}
/* 000476 */ 			}
/* 000476 */ 			return dict (__accu0__);
/* 000476 */ 		}) ();
/* 000481 */ 		if (__t__ (__eq__ (objtype, 'FLMFragment'))) {
/* 000482 */ 			var ObjTypeFn = self._make_fragment;
/* 000482 */ 		}
/* 000483 */ 		else if (__t__ (__t__ (__in__ (objtype, latex_node_types_dict)) || __eq__ (objtype, 'LatexNodeList'))) {
/* 000484 */ 			var ObjTypeFn = (function __lambda__ () {
/* 000484 */ 				var kwargs = dict ();
/* 000484 */ 				if (arguments.length) {
/* 000484 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000484 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000484 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000484 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000484 */ 							switch (__attrib0__) {
/* 000484 */ 								default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000484 */ 							}
/* 000484 */ 						}
/* 000484 */ 						delete kwargs.__kwargtrans__;
/* 000484 */ 					}
/* 000484 */ 				}
/* 000484 */ 				else {
/* 000484 */ 				}
/* 000484 */ 				return (function () {
/* 000484 */ 					var __accu0__ = self;
/* 000484 */ 					return __call__ (__accu0__._make_node_instance, __accu0__, objtype, kwargs);
/* 000484 */ 				}) ();
/* 000484 */ 			});
/* 000484 */ 		}
/* 000485 */ 		else if (__t__ (__in__ (objtype, known_object_types))) {
/* 000486 */ 			var ObjTypeFn = __getitem__ (known_object_types, objtype);
/* 000486 */ 		}
/* 000487 */ 		else if (__t__ (__in__ (':', objtype))) {
/* 000489 */ 			var ObjTypeFn = __call__ (_import_class, null, objtype, __kwargtrans__ ({restype: restype}));
/* 000489 */ 		}
/* 000490 */ 		else {
/* 000491 */ 			var __except0__ = __call__ (ValueError, null, 'Unknown object type ‘{}’ for data loading'.format (objtype));
/* 000491 */ 			__except0__.__cause__ = null;
/* 000491 */ 			throw __except0__;
/* 000491 */ 		}
/* 000494 */ 		var obj = __call__ (ObjTypeFn, null, __kwargtrans__ (args));
/* 000495 */ 		return obj;
/* 000495 */ 	});},
/* 000497 */ 	get _make_node_instance () {return __get__ (this, function (self, nodetype, kwargs) {
/* 000497 */ 		if (arguments.length) {
/* 000497 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000497 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000497 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000497 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000497 */ 					switch (__attrib0__) {
/* 000497 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000497 */ 						case 'nodetype': var nodetype = __allkwargs0__ [__attrib0__]; break;
/* 000497 */ 						case 'kwargs': var kwargs = __allkwargs0__ [__attrib0__]; break;
/* 000497 */ 					}
/* 000497 */ 				}
/* 000497 */ 			}
/* 000497 */ 		}
/* 000497 */ 		else {
/* 000497 */ 		}
/* 000503 */ 		var base_kwargs = dict ({});
/* 000504 */ 		var attrib_kwargs = dict ({});
/* 000505 */ 		var __iterable0__ = (function () {
/* 000505 */ 			var __accu0__ = kwargs;
/* 000505 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000505 */ 		}) ();
/* 000505 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000505 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000505 */ 			var k = __left0__ [0];
/* 000505 */ 			var v = __left0__ [1];
/* 000506 */ 			if (__t__ ((function () {
/* 000506 */ 				var __accu0__ = k;
/* 000506 */ 				return __call__ (__accu0__.startswith, __accu0__, 'flm');
/* 000506 */ 			}) ())) {
/* 000507 */ 				__setitem__ (attrib_kwargs, k, v);
/* 000507 */ 			}
/* 000508 */ 			else {
/* 000509 */ 				__setitem__ (base_kwargs, k, v);
/* 000509 */ 			}
/* 000509 */ 		}
/* 000511 */ 		if (__t__ (__eq__ (nodetype, 'LatexNodeList'))) {
/* 000512 */ 			var ObjTypeFn = LatexNodeList;
/* 000513 */ 			var finalize_fn = self.environment.finalize_nodelist;
/* 000513 */ 		}
/* 000514 */ 		else {
/* 000515 */ 			var ObjTypeFn = __getitem__ (latex_node_types_dict, nodetype);
/* 000516 */ 			var finalize_fn = self.environment.finalize_node;
/* 000516 */ 		}
/* 000518 */ 		var node = __call__ (ObjTypeFn, null, __kwargtrans__ (base_kwargs));
/* 000519 */ 		var __iterable0__ = (function () {
/* 000519 */ 			var __accu0__ = attrib_kwargs;
/* 000519 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000519 */ 		}) ();
/* 000519 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000519 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000519 */ 			var k = __left0__ [0];
/* 000519 */ 			var v = __left0__ [1];
/* 000520 */ 			__call__ (setattr, null, node, k, v);
/* 000520 */ 		}
/* 000522 */ 		var node = __call__ (finalize_fn, null, node);
/* 000524 */ 		return node;
/* 000524 */ 	});},
/* 000526 */ 	get _make_fragment () {return __get__ (this, function (self) {
/* 000526 */ 		var kwargs = dict ();
/* 000526 */ 		if (arguments.length) {
/* 000526 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000526 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000526 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000526 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000526 */ 					switch (__attrib0__) {
/* 000526 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000526 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000526 */ 					}
/* 000526 */ 				}
/* 000526 */ 				delete kwargs.__kwargtrans__;
/* 000526 */ 			}
/* 000526 */ 		}
/* 000526 */ 		else {
/* 000526 */ 		}
/* 000527 */ 		var nodelist = (function () {
/* 000527 */ 			var __accu0__ = kwargs;
/* 000527 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'nodes');
/* 000527 */ 		}) ();
/* 000528 */ 		var flm_text = (function () {
/* 000528 */ 			var __accu0__ = kwargs;
/* 000528 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'flm_text');
/* 000528 */ 		}) ();
/* 000529 */ 		return __call__ (FLMFragment, null, __kwargtrans__ (__mergekwargtrans__ ({flm_text: nodelist, environment: self.environment, _flm_text_if_loading_nodes: flm_text}, kwargs)));
/* 000529 */ 	});}
/* 000529 */ });
/* 000007 */ 
//# sourceMappingURL=flm.flmdump.map