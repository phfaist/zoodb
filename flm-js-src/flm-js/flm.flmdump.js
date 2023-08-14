/* 000001 */ // Transcrypt'ed from Python, 2023-08-14 17:27:44
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
/* 000007 */ export {LatexParserBase, LatexNodeList, EnvironmentSpec, latex_node_types, FLMFragment, LatexContextDb, FLMParsingState, SpecialsSpec, ParsedArguments, FLMParsingStateDeltaSetBlockLevel, FLMSpecInfo, FLMLatexWalker, MacroSpec, LatexArgumentSpec, ParsingStateDelta, CallableSpec};
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
/* 000108 */ export var known_object_types = (function () {
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
/* 000120 */ export var _is_known_serializable_object_type_names = function (typename) {
/* 000120 */ 	if (arguments.length) {
/* 000120 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000120 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000120 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000120 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000120 */ 				switch (__attrib0__) {
/* 000120 */ 					case 'typename': var typename = __allkwargs0__ [__attrib0__]; break;
/* 000120 */ 				}
/* 000120 */ 			}
/* 000120 */ 		}
/* 000120 */ 	}
/* 000120 */ 	else {
/* 000120 */ 	}
/* 000121 */ 	return __t__ (__in__ (typename, latex_node_types_dict)) || __t__ (__in__ (typename, known_object_types)) || __eq__ (typename, 'LatexNodeList');
/* 000121 */ };
/* 000132 */ export var _dump_version = 2;
/* 000136 */ export var _Skip =  __class__ ('_Skip', [object], {
/* 000136 */ 	__module__: __name__,
/* 000136 */ });
/* 000140 */ export var _skip_types = tuple ([LatexContextDb, LatexParserBase, MacroSpec, EnvironmentSpec, SpecialsSpec]);
/* 000151 */ export var FLMDataDumper =  __class__ ('FLMDataDumper', [object], {
/* 000151 */ 	__module__: __name__,
/* 000156 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000156 */ 		if (arguments.length) {
/* 000156 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000156 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000156 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000156 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000156 */ 					switch (__attrib0__) {
/* 000156 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 						case 'environment': var environment = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 					}
/* 000156 */ 				}
/* 000156 */ 			}
/* 000156 */ 		}
/* 000156 */ 		else {
/* 000156 */ 		}
/* 000157 */ 		self.environment = environment;
/* 000158 */ 		(function () {
/* 000158 */ 			var __accu0__ = self;
/* 000158 */ 			return __call__ (__accu0__.py_clear, __accu0__);
/* 000158 */ 		}) ();
/* 000158 */ 	});},
/* 000160 */ 	get py_clear () {return __get__ (this, function (self) {
/* 000160 */ 		if (arguments.length) {
/* 000160 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000160 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000160 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000160 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000160 */ 					switch (__attrib0__) {
/* 000160 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000160 */ 					}
/* 000160 */ 				}
/* 000160 */ 			}
/* 000160 */ 		}
/* 000160 */ 		else {
/* 000160 */ 		}
/* 000161 */ 		self.data = dict ({'dumps': dict ({}), 'resources': dict ({}), '_dump': dict ({'version': _dump_version})});
/* 000161 */ 	});},
/* 000169 */ 	get get_data () {return __get__ (this, function (self) {
/* 000169 */ 		if (arguments.length) {
/* 000169 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000169 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000169 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000169 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000169 */ 					switch (__attrib0__) {
/* 000169 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000169 */ 					}
/* 000169 */ 				}
/* 000169 */ 			}
/* 000169 */ 		}
/* 000169 */ 		else {
/* 000169 */ 		}
/* 000170 */ 		return self.data;
/* 000170 */ 	});},
/* 000172 */ 	get add_object_dump () {return __get__ (this, function (self, key, obj) {
/* 000172 */ 		if (arguments.length) {
/* 000172 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000172 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000172 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000172 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000172 */ 					switch (__attrib0__) {
/* 000172 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000172 */ 						case 'key': var key = __allkwargs0__ [__attrib0__]; break;
/* 000172 */ 						case 'obj': var obj = __allkwargs0__ [__attrib0__]; break;
/* 000172 */ 					}
/* 000172 */ 				}
/* 000172 */ 			}
/* 000172 */ 		}
/* 000172 */ 		else {
/* 000172 */ 		}
/* 000173 */ 		var dump = (function () {
/* 000173 */ 			var __accu0__ = self;
/* 000173 */ 			return __call__ (__accu0__._make_object_dump, __accu0__, obj, __kwargtrans__ ({dumping_state: dict ({'object': obj})}));
/* 000173 */ 		}) ();
/* 000174 */ 		__setitem__ (__getitem__ (self.data, 'dumps'), key, dump);
/* 000174 */ 	});},
/* 000178 */ 	get _make_object_dump () {return __get__ (this, function (self, obj) {
/* 000178 */ 		var type_name = null;
/* 000178 */ 		if (arguments.length) {
/* 000178 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000178 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000178 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000178 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000178 */ 					switch (__attrib0__) {
/* 000178 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000178 */ 						case 'obj': var obj = __allkwargs0__ [__attrib0__]; break;
/* 000178 */ 						case 'dumping_state': var dumping_state = __allkwargs0__ [__attrib0__]; break;
/* 000178 */ 						case 'type_name': var type_name = __allkwargs0__ [__attrib0__]; break;
/* 000178 */ 					}
/* 000178 */ 				}
/* 000178 */ 			}
/* 000178 */ 		}
/* 000178 */ 		else {
/* 000178 */ 		}
/* 000180 */ 		var fieldnames = __call__ (set, null, obj._fields);
/* 000181 */ 		var __iterable0__ = __call__ (dir, null, obj);
/* 000181 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000181 */ 			var fieldname = __getitem__ (__iterable0__, __index0__);
/* 000182 */ 			if (__t__ ((function () {
/* 000182 */ 				var __accu0__ = fieldname;
/* 000182 */ 				return __call__ (__accu0__.startswith, __accu0__, 'flm');
/* 000182 */ 			}) ())) {
/* 000183 */ 				(function () {
/* 000183 */ 					var __accu0__ = fieldnames;
/* 000183 */ 					return __call__ (__accu0__.add, __accu0__, fieldname);
/* 000183 */ 				}) ();
/* 000183 */ 			}
/* 000183 */ 		}
/* 000185 */ 		if (__t__ (type_name === null)) {
/* 000186 */ 			var cls = obj.__class__;
/* 000187 */ 			var clsname = cls.__name__;
/* 000188 */ 			if (__t__ (__call__ (_is_known_serializable_object_type_names, null, clsname))) {
/* 000189 */ 				var type_name = clsname;
/* 000189 */ 			}
/* 000190 */ 			else {
/* 000191 */ 				var type_name = __call__ (_fullclassname, null, cls);
/* 000191 */ 			}
/* 000191 */ 		}
/* 000193 */ 		var objdata = dict ({'$type': type_name});
/* 000197 */ 		var get_obj_attr = function (fieldname) {
/* 000197 */ 			if (arguments.length) {
/* 000197 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000197 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000197 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000197 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000197 */ 						switch (__attrib0__) {
/* 000197 */ 							case 'fieldname': var fieldname = __allkwargs0__ [__attrib0__]; break;
/* 000197 */ 						}
/* 000197 */ 					}
/* 000197 */ 				}
/* 000197 */ 			}
/* 000197 */ 			else {
/* 000197 */ 			}
/* 000198 */ 			if (__t__ (__call__ (hasattr, null, obj, fieldname))) {
/* 000199 */ 				return __call__ (getattr, null, obj, fieldname);
/* 000199 */ 			}
/* 000200 */ 			if (__t__ (__t__ (__call__ (hasattr, null, obj, '_proxy_object')) && __call__ (hasattr, null, obj._proxy_object, fieldname))) {
/* 000201 */ 				return __call__ (getattr, null, obj._proxy_object, fieldname);
/* 000201 */ 			}
/* 000202 */ 			var __except0__ = __call__ (ValueError, null, __add__ (__add__ (__add__ ('Invalid object field: ', __call__ (repr, null, fieldname)), ' in '), __call__ (repr, null, obj)));
/* 000202 */ 			__except0__.__cause__ = null;
/* 000202 */ 			throw __except0__;
/* 000202 */ 		};
/* 000204 */ 		var __iterable0__ = __call__ (sorted, null, fieldnames);
/* 000204 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000204 */ 			var field = __getitem__ (__iterable0__, __index0__);
/* 000205 */ 			var val = (function () {
/* 000205 */ 				var __accu0__ = self;
/* 000205 */ 				return __call__ (__accu0__._make_dump, __accu0__, __call__ (get_obj_attr, null, field), __kwargtrans__ ({dumping_state: dumping_state}));
/* 000205 */ 			}) ();
/* 000206 */ 			if (__t__ (val === _Skip)) {
/* 000207 */ 				var val = dict ({'$skip': true});
/* 000207 */ 			}
/* 000208 */ 			__setitem__ (objdata, field, val);
/* 000208 */ 		}
/* 000210 */ 		return objdata;
/* 000210 */ 	});},
/* 000212 */ 	get _make_dump () {return __get__ (this, function (self, x) {
/* 000212 */ 		if (arguments.length) {
/* 000212 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000212 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000212 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000212 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000212 */ 					switch (__attrib0__) {
/* 000212 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000212 */ 						case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000212 */ 						case 'dumping_state': var dumping_state = __allkwargs0__ [__attrib0__]; break;
/* 000212 */ 					}
/* 000212 */ 				}
/* 000212 */ 			}
/* 000212 */ 		}
/* 000212 */ 		else {
/* 000212 */ 		}
/* 000214 */ 		if (__t__ (__call__ (isinstance, null, x, tuple ([tuple, list])))) {
/* 000215 */ 			var result = [];
/* 000216 */ 			var __iterable0__ = x;
/* 000216 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000216 */ 				var item = __getitem__ (__iterable0__, __index0__);
/* 000217 */ 				var value = (function () {
/* 000217 */ 					var __accu0__ = self;
/* 000217 */ 					return __call__ (__accu0__._make_dump, __accu0__, item, __kwargtrans__ ({dumping_state: dumping_state}));
/* 000217 */ 				}) ();
/* 000218 */ 				if (__t__ (value === _Skip)) {
/* 000219 */ 					var value = null;
/* 000219 */ 				}
/* 000220 */ 				(function () {
/* 000220 */ 					var __accu0__ = result;
/* 000220 */ 					return __call__ (__accu0__.append, __accu0__, value);
/* 000220 */ 				}) ();
/* 000220 */ 			}
/* 000221 */ 			return result;
/* 000221 */ 		}
/* 000223 */ 		if (__t__ (__call__ (isinstance, null, x, dict))) {
/* 000224 */ 			return (function () {
/* 000224 */ 				var __accu0__ = [];
/* 000225 */ 				var __iterable0__ = (function () {
/* 000225 */ 					var __accu1__ = x;
/* 000225 */ 					return __call__ (__accu1__.py_items, __accu1__);
/* 000225 */ 				}) ();
/* 000225 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000225 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000225 */ 					var k = __left0__ [0];
/* 000225 */ 					var v = __left0__ [1];
/* 000225 */ 					(function () {
/* 000225 */ 						var __accu1__ = __accu0__;
/* 000224 */ 						return __call__ (__accu1__.append, __accu1__, [k, (function () {
/* 000224 */ 							var __accu2__ = self;
/* 000224 */ 							return __call__ (__accu2__._make_dump, __accu2__, v, __kwargtrans__ ({dumping_state: dumping_state}));
/* 000224 */ 						}) ()]);
/* 000224 */ 					}) ();
/* 000224 */ 				}
/* 000224 */ 				return dict (__accu0__);
/* 000224 */ 			}) ();
/* 000224 */ 		}
/* 000227 */ 		if (__t__ (x === self.environment)) {
/* 000228 */ 			return dict ({'$flmenv': 'environment'});
/* 000228 */ 		}
/* 000230 */ 		if (__t__ (x === self.environment.parsing_state)) {
/* 000231 */ 			return dict ({'$flmenv': 'parsing_state'});
/* 000231 */ 		}
/* 000233 */ 		if (__t__ (__call__ (isinstance, null, x, FLMLatexWalker))) {
/* 000234 */ 			return (function () {
/* 000234 */ 				var __accu0__ = self;
/* 000237 */ 				return __call__ (__accu0__._make_resource, __accu0__, 'FLMLatexWalker', x, __call__ (_FakeDataLoadedFLMLatexWalker, null, x), __kwargtrans__ ({dumping_state: dumping_state}));
/* 000237 */ 			}) ();
/* 000237 */ 		}
/* 000241 */ 		if (__t__ (__call__ (isinstance, null, x, FLMSpecInfo))) {
/* 000242 */ 			return (function () {
/* 000242 */ 				var __accu0__ = self;
/* 000247 */ 				return __call__ (__accu0__._make_resource, __accu0__, 'FLMSpecInfo', x, x, __kwargtrans__ ({dumping_state: dumping_state, restype_dumptype: __call__ (_fullclassname, null, x.__class__)}));
/* 000247 */ 			}) ();
/* 000247 */ 		}
/* 000250 */ 		if (__t__ (__call__ (isinstance, null, x, FLMParsingState))) {
/* 000251 */ 			return (function () {
/* 000251 */ 				var __accu0__ = self;
/* 000251 */ 				return __call__ (__accu0__._make_resource, __accu0__, 'FLMParsingState', x, x, __kwargtrans__ ({dumping_state: dumping_state}));
/* 000251 */ 			}) ();
/* 000251 */ 		}
/* 000258 */ 		if (__t__ (__call__ (isinstance, null, x, latex_node_types))) {
/* 000259 */ 			return (function () {
/* 000259 */ 				var __accu0__ = self;
/* 000259 */ 				return __call__ (__accu0__._make_resource, __accu0__, 'LatexNode', x, x, __kwargtrans__ ({dumping_state: dumping_state, restype_dumptype: x.__class__.__name__}));
/* 000259 */ 			}) ();
/* 000259 */ 		}
/* 000267 */ 		if (__t__ (__call__ (isinstance, null, x, _skip_types))) {
/* 000268 */ 			return _Skip;
/* 000268 */ 		}
/* 000270 */ 		if (__t__ (__call__ (hasattr, null, x, '_fields'))) {
/* 000271 */ 			return (function () {
/* 000271 */ 				var __accu0__ = self;
/* 000271 */ 				return __call__ (__accu0__._make_object_dump, __accu0__, x, __kwargtrans__ ({dumping_state: dumping_state}));
/* 000271 */ 			}) ();
/* 000271 */ 		}
/* 000273 */ 		if (__t__ (__call__ (isinstance, null, x, tuple ([str, bool, int, float])))) {
/* 000274 */ 			return x;
/* 000274 */ 		}
/* 000276 */ 		if (__t__ (x === null)) {
/* 000277 */ 			return null;
/* 000277 */ 		}
/* 000279 */ 		if (__t__ (!__t__ ((x)))) {
/* 000281 */ 			return null;
/* 000281 */ 		}
/* 000283 */ 		var __except0__ = __call__ (ValueError, null, 'Cannot dump value {} of unsupported type'.format (__call__ (repr, null, x)));
/* 000283 */ 		__except0__.__cause__ = null;
/* 000283 */ 		throw __except0__;
/* 000283 */ 	});},
/* 000285 */ 	get _make_resource () {return __get__ (this, function (self, restype, y, ydata) {
/* 000285 */ 		var restype_dumptype = null;
/* 000285 */ 		if (arguments.length) {
/* 000285 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000285 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000285 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000285 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000285 */ 					switch (__attrib0__) {
/* 000285 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000285 */ 						case 'restype': var restype = __allkwargs0__ [__attrib0__]; break;
/* 000285 */ 						case 'y': var y = __allkwargs0__ [__attrib0__]; break;
/* 000285 */ 						case 'ydata': var ydata = __allkwargs0__ [__attrib0__]; break;
/* 000285 */ 						case 'restype_dumptype': var restype_dumptype = __allkwargs0__ [__attrib0__]; break;
/* 000285 */ 						case 'dumping_state': var dumping_state = __allkwargs0__ [__attrib0__]; break;
/* 000285 */ 					}
/* 000285 */ 				}
/* 000285 */ 			}
/* 000285 */ 		}
/* 000285 */ 		else {
/* 000285 */ 		}
/* 000286 */ 		if (__t__ (!__in__ (restype, __getitem__ (self.data, 'resources')))) {
/* 000287 */ 			__setitem__ (__getitem__ (self.data, 'resources'), restype, dict ({}));
/* 000287 */ 		}
/* 000289 */ 		var reskey = __call__ (str, null, __call__ (fn_unique_object_id, null, y));
/* 000290 */ 		if (__t__ (!__in__ (reskey, __getitem__ (__getitem__ (self.data, 'resources'), restype)))) {
/* 000294 */ 			__setitem__ (__getitem__ (__getitem__ (self.data, 'resources'), restype), reskey, '$currently-dumping');
/* 000296 */ 			var ydata_dump = (function () {
/* 000296 */ 				var __accu0__ = self;
/* 000296 */ 				return __call__ (__accu0__._make_object_dump, __accu0__, ydata, __kwargtrans__ ({dumping_state: dumping_state, type_name: (__t__ (restype_dumptype !== null) ? restype_dumptype : restype)}));
/* 000296 */ 			}) ();
/* 000301 */ 			__setitem__ (__getitem__ (__getitem__ (self.data, 'resources'), restype), reskey, ydata_dump);
/* 000301 */ 		}
/* 000303 */ 		return dict ({'$restype': restype, '$reskey': reskey});
/* 000303 */ 	});}
/* 000303 */ });
/* 000307 */ export var FLMDataLoadNotSupported =  __class__ ('FLMDataLoadNotSupported', [object], {
/* 000307 */ 	__module__: __name__,
/* 000307 */ });
/* 000317 */ export var FLMDataLoader =  __class__ ('FLMDataLoader', [object], {
/* 000317 */ 	__module__: __name__,
/* 000322 */ 	get __init__ () {return __get__ (this, function (self, data) {
/* 000322 */ 		if (arguments.length) {
/* 000322 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000322 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000322 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000322 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000322 */ 					switch (__attrib0__) {
/* 000322 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000322 */ 						case 'data': var data = __allkwargs0__ [__attrib0__]; break;
/* 000322 */ 						case 'environment': var environment = __allkwargs0__ [__attrib0__]; break;
/* 000322 */ 					}
/* 000322 */ 				}
/* 000322 */ 			}
/* 000322 */ 		}
/* 000322 */ 		else {
/* 000322 */ 		}
/* 000323 */ 		self.data = data;
/* 000324 */ 		self.environment = environment;
/* 000326 */ 		if (__t__ (__ne__ (__getitem__ (__getitem__ (self.data, '_dump'), 'version'), _dump_version))) {
/* 000327 */ 			var __except0__ = __call__ (RuntimeError, null, 'Dump version mismatch: {}, expected {}'.format (__getitem__ (__getitem__ (self.data, '_dump'), 'version'), _dump_version));
/* 000327 */ 			__except0__.__cause__ = null;
/* 000327 */ 			throw __except0__;
/* 000327 */ 		}
/* 000332 */ 		self._loaded_resources = dict ({});
/* 000333 */ 		if (__t__ (__t__ (__in__ ('resources', self.data)) && __getitem__ (self.data, 'resources'))) {
/* 000334 */ 			var __iterable0__ = __getitem__ (self.data, 'resources');
/* 000334 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000334 */ 				var restype = __getitem__ (__iterable0__, __index0__);
/* 000335 */ 				__setitem__ (self._loaded_resources, restype, dict ({}));
/* 000335 */ 			}
/* 000335 */ 		}
/* 000335 */ 	});},
/* 000338 */ 	get get_keys () {return __get__ (this, function (self) {
/* 000338 */ 		if (arguments.length) {
/* 000338 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000338 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000338 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000338 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000338 */ 					switch (__attrib0__) {
/* 000338 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000338 */ 					}
/* 000338 */ 				}
/* 000338 */ 			}
/* 000338 */ 		}
/* 000338 */ 		else {
/* 000338 */ 		}
/* 000339 */ 		return __call__ (list, null, (function () {
/* 000339 */ 			var __accu0__ = __getitem__ (self.data, 'dumps');
/* 000339 */ 			return __call__ (__accu0__.py_keys, __accu0__);
/* 000339 */ 		}) ());
/* 000339 */ 	});},
/* 000341 */ 	get get_object_dump () {return __get__ (this, function (self, key) {
/* 000341 */ 		if (arguments.length) {
/* 000341 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000341 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000341 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000341 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000341 */ 					switch (__attrib0__) {
/* 000341 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000341 */ 						case 'key': var key = __allkwargs0__ [__attrib0__]; break;
/* 000341 */ 					}
/* 000341 */ 				}
/* 000341 */ 			}
/* 000341 */ 		}
/* 000341 */ 		else {
/* 000341 */ 		}
/* 000342 */ 		var data = __getitem__ (__getitem__ (self.data, 'dumps'), key);
/* 000343 */ 		return (function () {
/* 000343 */ 			var __accu0__ = self;
/* 000343 */ 			return __call__ (__accu0__._load_from_data, __accu0__, data);
/* 000343 */ 		}) ();
/* 000343 */ 	});},
/* 000347 */ 	get _load_from_data () {return __get__ (this, function (self, data) {
/* 000347 */ 		if (arguments.length) {
/* 000347 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000347 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000347 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000347 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000347 */ 					switch (__attrib0__) {
/* 000347 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000347 */ 						case 'data': var data = __allkwargs0__ [__attrib0__]; break;
/* 000347 */ 					}
/* 000347 */ 				}
/* 000347 */ 			}
/* 000347 */ 		}
/* 000347 */ 		else {
/* 000347 */ 		}
/* 000349 */ 		if (__t__ (data === null)) {
/* 000350 */ 			return null;
/* 000350 */ 		}
/* 000352 */ 		if (__t__ (__call__ (isinstance, null, data, list))) {
/* 000353 */ 			return (function () {
/* 000353 */ 				var __accu0__ = [];
/* 000353 */ 				var __iterable0__ = data;
/* 000353 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000353 */ 					var item = __getitem__ (__iterable0__, __index0__);
/* 000353 */ 					(function () {
/* 000353 */ 						var __accu1__ = __accu0__;
/* 000353 */ 						return __call__ (__accu1__.append, __accu1__, (function () {
/* 000353 */ 							var __accu2__ = self;
/* 000353 */ 							return __call__ (__accu2__._load_from_data, __accu2__, item);
/* 000353 */ 						}) ());
/* 000353 */ 					}) ();
/* 000353 */ 				}
/* 000353 */ 				return __accu0__;
/* 000353 */ 			}) ();
/* 000353 */ 		}
/* 000358 */ 		var special = null;
/* 000359 */ 		try {
/* 000360 */ 			var special = __getitem__ (data, '$flmenv');
/* 000360 */ 		}
/* 000360 */ 		catch (__except0__) {
/* 000360 */ 			if (isinstance (__except0__, Exception)) {
/* 000361 */ 				// pass;
/* 000361 */ 			}
/* 000361 */ 			else {
/* 000361 */ 				throw __except0__;
/* 000361 */ 			}
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
/* 000367 */ 			if (isinstance (__except0__, Exception)) {
/* 000368 */ 				// pass;
/* 000368 */ 			}
/* 000368 */ 			else {
/* 000368 */ 				throw __except0__;
/* 000368 */ 			}
/* 000368 */ 		}
/* 000369 */ 		if (__t__ (special)) {
/* 000370 */ 			return FLMDataLoadNotSupported;
/* 000370 */ 		}
/* 000372 */ 		var special = null;
/* 000373 */ 		try {
/* 000374 */ 			var special = __getitem__ (data, '$restype');
/* 000374 */ 		}
/* 000374 */ 		catch (__except0__) {
/* 000374 */ 			if (isinstance (__except0__, Exception)) {
/* 000375 */ 				// pass;
/* 000375 */ 			}
/* 000375 */ 			else {
/* 000375 */ 				throw __except0__;
/* 000375 */ 			}
/* 000375 */ 		}
/* 000376 */ 		if (__t__ (special)) {
/* 000377 */ 			return (function () {
/* 000377 */ 				var __accu0__ = self;
/* 000377 */ 				return __call__ (__accu0__._load_resource, __accu0__, special, __getitem__ (data, '$reskey'));
/* 000377 */ 			}) ();
/* 000377 */ 		}
/* 000379 */ 		var special = null;
/* 000380 */ 		try {
/* 000381 */ 			var special = __getitem__ (data, '$type');
/* 000381 */ 		}
/* 000381 */ 		catch (__except0__) {
/* 000381 */ 			if (isinstance (__except0__, Exception)) {
/* 000382 */ 				// pass;
/* 000382 */ 			}
/* 000382 */ 			else {
/* 000382 */ 				throw __except0__;
/* 000382 */ 			}
/* 000382 */ 		}
/* 000383 */ 		if (__t__ (special)) {
/* 000384 */ 			var datad = __call__ (dict, null, data);
/* 000385 */ 			var thetype = (function () {
/* 000385 */ 				var __accu0__ = datad;
/* 000385 */ 				return __call__ (__accu0__.py_pop, __accu0__, '$type');
/* 000385 */ 			}) ();
/* 000386 */ 			return (function () {
/* 000386 */ 				var __accu0__ = self;
/* 000386 */ 				return __call__ (__accu0__._load_object, __accu0__, thetype, datad);
/* 000386 */ 			}) ();
/* 000386 */ 		}
/* 000388 */ 		if (__t__ (__call__ (isinstance, null, data, tuple ([str, int, bool])))) {
/* 000389 */ 			return data;
/* 000389 */ 		}
/* 000391 */ 		if (__t__ (data === FLMDataLoadNotSupported)) {
/* 000392 */ 			return null;
/* 000392 */ 		}
/* 000395 */ 		return (function () {
/* 000395 */ 			var __accu0__ = [];
/* 000396 */ 			var __iterable0__ = (function () {
/* 000396 */ 				var __accu1__ = __call__ (dict, null, data);
/* 000396 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000396 */ 			}) ();
/* 000396 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000396 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000396 */ 				var k = __left0__ [0];
/* 000396 */ 				var v = __left0__ [1];
/* 000396 */ 				(function () {
/* 000396 */ 					var __accu1__ = __accu0__;
/* 000395 */ 					return __call__ (__accu1__.append, __accu1__, [k, (function () {
/* 000395 */ 						var __accu2__ = self;
/* 000395 */ 						return __call__ (__accu2__._load_from_data, __accu2__, v);
/* 000395 */ 					}) ()]);
/* 000395 */ 				}) ();
/* 000395 */ 			}
/* 000395 */ 			return dict (__accu0__);
/* 000395 */ 		}) ();
/* 000395 */ 	});},
/* 000401 */ 	get _flmenv_object () {return __get__ (this, function (self, flmenv_what, data) {
/* 000401 */ 		if (arguments.length) {
/* 000401 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000401 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000401 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000401 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000401 */ 					switch (__attrib0__) {
/* 000401 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000401 */ 						case 'flmenv_what': var flmenv_what = __allkwargs0__ [__attrib0__]; break;
/* 000401 */ 						case 'data': var data = __allkwargs0__ [__attrib0__]; break;
/* 000401 */ 					}
/* 000401 */ 				}
/* 000401 */ 			}
/* 000401 */ 		}
/* 000401 */ 		else {
/* 000401 */ 		}
/* 000402 */ 		if (__t__ (__eq__ (flmenv_what, ''))) {
/* 000403 */ 			return self.environment;
/* 000403 */ 		}
/* 000404 */ 		if (__t__ (__eq__ (flmenv_what, 'parsing_state'))) {
/* 000405 */ 			return self.environment.parsing_state;
/* 000405 */ 		}
/* 000406 */ 		var __except0__ = __call__ (ValueError, null, __add__ ('Unknown/invalid flmenv: ', __call__ (repr, null, data)));
/* 000406 */ 		__except0__.__cause__ = null;
/* 000406 */ 		throw __except0__;
/* 000406 */ 	});},
/* 000409 */ 	get _load_resource () {return __get__ (this, function (self, restype, reskey) {
/* 000409 */ 		if (arguments.length) {
/* 000409 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000409 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000409 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000409 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000409 */ 					switch (__attrib0__) {
/* 000409 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000409 */ 						case 'restype': var restype = __allkwargs0__ [__attrib0__]; break;
/* 000409 */ 						case 'reskey': var reskey = __allkwargs0__ [__attrib0__]; break;
/* 000409 */ 					}
/* 000409 */ 				}
/* 000409 */ 			}
/* 000409 */ 		}
/* 000409 */ 		else {
/* 000409 */ 		}
/* 000411 */ 		if (__t__ (!__in__ (restype, self._loaded_resources))) {
/* 000412 */ 			__setitem__ (self._loaded_resources, restype, dict ({}));
/* 000412 */ 		}
/* 000414 */ 		if (__t__ (!__in__ (reskey, __getitem__ (self._loaded_resources, restype)))) {
/* 000417 */ 			__setitem__ (__getitem__ (self._loaded_resources, restype), reskey, (function () {
/* 000417 */ 				var __accu0__ = self;
/* 000417 */ 				return __call__ (__accu0__._load_resource_from_data, __accu0__, restype, reskey);
/* 000417 */ 			}) ());
/* 000417 */ 		}
/* 000420 */ 		return __getitem__ (__getitem__ (self._loaded_resources, restype), reskey);
/* 000420 */ 	});},
/* 000422 */ 	get _load_resource_from_data () {return __get__ (this, function (self, restype, reskey) {
/* 000422 */ 		if (arguments.length) {
/* 000422 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000422 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000422 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000422 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000422 */ 					switch (__attrib0__) {
/* 000422 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000422 */ 						case 'restype': var restype = __allkwargs0__ [__attrib0__]; break;
/* 000422 */ 						case 'reskey': var reskey = __allkwargs0__ [__attrib0__]; break;
/* 000422 */ 					}
/* 000422 */ 				}
/* 000422 */ 			}
/* 000422 */ 		}
/* 000422 */ 		else {
/* 000422 */ 		}
/* 000424 */ 		if (__t__ (!__in__ (restype, __getitem__ (self.data, 'resources')))) {
/* 000425 */ 			var __except0__ = __call__ (ValueError, null, 'Invalid internal resource reference type {}'.format (restype));
/* 000425 */ 			__except0__.__cause__ = null;
/* 000425 */ 			throw __except0__;
/* 000425 */ 		}
/* 000426 */ 		if (__t__ (!__in__ (reskey, __getitem__ (__getitem__ (self.data, 'resources'), restype)))) {
/* 000427 */ 			var __except0__ = __call__ (ValueError, null, 'Invalid internal resource reference key {}/{}'.format (restype, reskey));
/* 000427 */ 			__except0__.__cause__ = null;
/* 000427 */ 			throw __except0__;
/* 000427 */ 		}
/* 000429 */ 		var resdata = __getitem__ (__getitem__ (__getitem__ (self.data, 'resources'), restype), reskey);
/* 000431 */ 		if (__t__ (__eq__ (restype, 'FLMLatexWalker'))) {
/* 000432 */ 			var resdata2 = __call__ (dict, null, resdata);
/* 000433 */ 			var the_type = (function () {
/* 000433 */ 				var __accu0__ = resdata2;
/* 000433 */ 				return __call__ (__accu0__.py_pop, __accu0__, '$type');
/* 000433 */ 			}) ();
/* 000434 */ 			if (__t__ (__ne__ (the_type, 'FLMLatexWalker'))) {
/* 000435 */ 				var __except0__ = __call__ (ValueError, null, "flmdump: Can't create LatexWalker instances other than FLMLatexWalker");
/* 000435 */ 				__except0__.__cause__ = null;
/* 000435 */ 				throw __except0__;
/* 000435 */ 			}
/* 000438 */ 			return (function () {
/* 000438 */ 				var __accu0__ = self.environment;
/* 000438 */ 				return __call__ (__accu0__.make_latex_walker, __accu0__, __kwargtrans__ (resdata2));
/* 000438 */ 			}) ();
/* 000438 */ 		}
/* 000442 */ 		if (__t__ (__eq__ (restype, 'FLMParsingState'))) {
/* 000443 */ 			return (function () {
/* 000443 */ 				var __accu0__ = self;
/* 000445 */ 				return __call__ (__accu0__._load_object, __accu0__, restype, __call__ (dict, null, resdata, __kwargtrans__ ({latex_context: FLMDataLoadNotSupported})));
/* 000445 */ 			}) ();
/* 000445 */ 		}
/* 000448 */ 		if (__t__ (__eq__ (restype, 'FLMSpecInfo'))) {
/* 000449 */ 			var resdata2 = __call__ (dict, null, resdata);
/* 000450 */ 			var the_type = (function () {
/* 000450 */ 				var __accu0__ = resdata2;
/* 000450 */ 				return __call__ (__accu0__.py_pop, __accu0__, '$type');
/* 000450 */ 			}) ();
/* 000451 */ 			return (function () {
/* 000451 */ 				var __accu0__ = self;
/* 000451 */ 				return __call__ (__accu0__._load_object, __accu0__, the_type, resdata2, __kwargtrans__ ({restype: restype}));
/* 000451 */ 			}) ();
/* 000451 */ 		}
/* 000457 */ 		if (__t__ (__eq__ (restype, 'LatexNode'))) {
/* 000458 */ 			var resdata2 = __call__ (dict, null, resdata);
/* 000459 */ 			var the_type = (function () {
/* 000459 */ 				var __accu0__ = resdata2;
/* 000459 */ 				return __call__ (__accu0__.py_pop, __accu0__, '$type');
/* 000459 */ 			}) ();
/* 000460 */ 			return (function () {
/* 000460 */ 				var __accu0__ = self;
/* 000460 */ 				return __call__ (__accu0__._load_object, __accu0__, the_type, resdata2);
/* 000460 */ 			}) ();
/* 000460 */ 		}
/* 000465 */ 		var __except0__ = __call__ (ValueError, null, 'Unknown data resource type to load: {}'.format (restype));
/* 000465 */ 		__except0__.__cause__ = null;
/* 000465 */ 		throw __except0__;
/* 000465 */ 	});},
/* 000468 */ 	get _load_object () {return __get__ (this, function (self, objtype, data) {
/* 000468 */ 		var restype = null;
/* 000468 */ 		if (arguments.length) {
/* 000468 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000468 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000468 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000468 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000468 */ 					switch (__attrib0__) {
/* 000468 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000468 */ 						case 'objtype': var objtype = __allkwargs0__ [__attrib0__]; break;
/* 000468 */ 						case 'data': var data = __allkwargs0__ [__attrib0__]; break;
/* 000468 */ 						case 'restype': var restype = __allkwargs0__ [__attrib0__]; break;
/* 000468 */ 					}
/* 000468 */ 				}
/* 000468 */ 			}
/* 000468 */ 		}
/* 000468 */ 		else {
/* 000468 */ 		}
/* 000470 */ 		var data = __call__ (dict, null, data);
/* 000472 */ 		var args = (function () {
/* 000472 */ 			var __accu0__ = [];
/* 000474 */ 			var __iterable0__ = (function () {
/* 000474 */ 				var __accu1__ = data;
/* 000474 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000474 */ 			}) ();
/* 000474 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000474 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000474 */ 				var k = __left0__ [0];
/* 000474 */ 				var v = __left0__ [1];
/* 000475 */ 				if (__t__ (!__t__ (((function () {
/* 000475 */ 					var __accu1__ = k;
/* 000475 */ 					return __call__ (__accu1__.startswith, __accu1__, '$');
/* 000475 */ 				}) ())))) {
/* 000475 */ 					(function () {
/* 000475 */ 						var __accu1__ = __accu0__;
/* 000473 */ 						return __call__ (__accu1__.append, __accu1__, [k, (function () {
/* 000473 */ 							var __accu2__ = self;
/* 000473 */ 							return __call__ (__accu2__._load_from_data, __accu2__, v);
/* 000473 */ 						}) ()]);
/* 000473 */ 					}) ();
/* 000473 */ 				}
/* 000473 */ 			}
/* 000473 */ 			return dict (__accu0__);
/* 000473 */ 		}) ();
/* 000478 */ 		if (__t__ (__eq__ (objtype, 'FLMFragment'))) {
/* 000479 */ 			var ObjTypeFn = self._make_fragment;
/* 000479 */ 		}
/* 000480 */ 		else if (__t__ (__t__ (__in__ (objtype, latex_node_types_dict)) || __eq__ (objtype, 'LatexNodeList'))) {
/* 000481 */ 			var ObjTypeFn = (function __lambda__ () {
/* 000481 */ 				var kwargs = dict ();
/* 000481 */ 				if (arguments.length) {
/* 000481 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000481 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000481 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000481 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000481 */ 							switch (__attrib0__) {
/* 000481 */ 								default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000481 */ 							}
/* 000481 */ 						}
/* 000481 */ 						delete kwargs.__kwargtrans__;
/* 000481 */ 					}
/* 000481 */ 				}
/* 000481 */ 				else {
/* 000481 */ 				}
/* 000481 */ 				return (function () {
/* 000481 */ 					var __accu0__ = self;
/* 000481 */ 					return __call__ (__accu0__._make_node_instance, __accu0__, objtype, kwargs);
/* 000481 */ 				}) ();
/* 000481 */ 			});
/* 000481 */ 		}
/* 000482 */ 		else if (__t__ (__in__ (objtype, known_object_types))) {
/* 000483 */ 			var ObjTypeFn = __getitem__ (known_object_types, objtype);
/* 000483 */ 		}
/* 000484 */ 		else if (__t__ (__in__ (':', objtype))) {
/* 000486 */ 			var ObjTypeFn = __call__ (_import_class, null, objtype, __kwargtrans__ ({restype: restype}));
/* 000486 */ 		}
/* 000487 */ 		else {
/* 000488 */ 			var __except0__ = __call__ (ValueError, null, 'Unknown object type ‘{}’ for data loading'.format (objtype));
/* 000488 */ 			__except0__.__cause__ = null;
/* 000488 */ 			throw __except0__;
/* 000488 */ 		}
/* 000491 */ 		var obj = __call__ (ObjTypeFn, null, __kwargtrans__ (args));
/* 000492 */ 		return obj;
/* 000492 */ 	});},
/* 000494 */ 	get _make_node_instance () {return __get__ (this, function (self, nodetype, kwargs) {
/* 000494 */ 		if (arguments.length) {
/* 000494 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000494 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000494 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000494 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000494 */ 					switch (__attrib0__) {
/* 000494 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000494 */ 						case 'nodetype': var nodetype = __allkwargs0__ [__attrib0__]; break;
/* 000494 */ 						case 'kwargs': var kwargs = __allkwargs0__ [__attrib0__]; break;
/* 000494 */ 					}
/* 000494 */ 				}
/* 000494 */ 			}
/* 000494 */ 		}
/* 000494 */ 		else {
/* 000494 */ 		}
/* 000500 */ 		var base_kwargs = dict ({});
/* 000501 */ 		var attrib_kwargs = dict ({});
/* 000502 */ 		var __iterable0__ = (function () {
/* 000502 */ 			var __accu0__ = kwargs;
/* 000502 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000502 */ 		}) ();
/* 000502 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000502 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000502 */ 			var k = __left0__ [0];
/* 000502 */ 			var v = __left0__ [1];
/* 000503 */ 			if (__t__ ((function () {
/* 000503 */ 				var __accu0__ = k;
/* 000503 */ 				return __call__ (__accu0__.startswith, __accu0__, 'flm');
/* 000503 */ 			}) ())) {
/* 000504 */ 				__setitem__ (attrib_kwargs, k, v);
/* 000504 */ 			}
/* 000505 */ 			else {
/* 000506 */ 				__setitem__ (base_kwargs, k, v);
/* 000506 */ 			}
/* 000506 */ 		}
/* 000508 */ 		if (__t__ (__eq__ (nodetype, 'LatexNodeList'))) {
/* 000509 */ 			var ObjTypeFn = LatexNodeList;
/* 000510 */ 			var finalize_fn = self.environment.finalize_nodelist;
/* 000510 */ 		}
/* 000511 */ 		else {
/* 000512 */ 			var ObjTypeFn = __getitem__ (latex_node_types_dict, nodetype);
/* 000513 */ 			var finalize_fn = self.environment.finalize_node;
/* 000513 */ 		}
/* 000515 */ 		var node = __call__ (ObjTypeFn, null, __kwargtrans__ (base_kwargs));
/* 000516 */ 		var __iterable0__ = (function () {
/* 000516 */ 			var __accu0__ = attrib_kwargs;
/* 000516 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000516 */ 		}) ();
/* 000516 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000516 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000516 */ 			var k = __left0__ [0];
/* 000516 */ 			var v = __left0__ [1];
/* 000517 */ 			__call__ (setattr, null, node, k, v);
/* 000517 */ 		}
/* 000519 */ 		var node = __call__ (finalize_fn, null, node);
/* 000521 */ 		return node;
/* 000521 */ 	});},
/* 000523 */ 	get _make_fragment () {return __get__ (this, function (self) {
/* 000523 */ 		var kwargs = dict ();
/* 000523 */ 		if (arguments.length) {
/* 000523 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000523 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000523 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000523 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000523 */ 					switch (__attrib0__) {
/* 000523 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000523 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000523 */ 					}
/* 000523 */ 				}
/* 000523 */ 				delete kwargs.__kwargtrans__;
/* 000523 */ 			}
/* 000523 */ 		}
/* 000523 */ 		else {
/* 000523 */ 		}
/* 000524 */ 		var nodelist = (function () {
/* 000524 */ 			var __accu0__ = kwargs;
/* 000524 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'nodes');
/* 000524 */ 		}) ();
/* 000525 */ 		var flm_text = (function () {
/* 000525 */ 			var __accu0__ = kwargs;
/* 000525 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'flm_text');
/* 000525 */ 		}) ();
/* 000526 */ 		return __call__ (FLMFragment, null, __kwargtrans__ (__mergekwargtrans__ ({flm_text: nodelist, environment: self.environment, _flm_text_if_loading_nodes: flm_text}, kwargs)));
/* 000526 */ 	});}
/* 000526 */ });
/* 000007 */ 
//# sourceMappingURL=flm.flmdump.map