/* 000001 */ // Transcrypt'ed from Python, 2026-02-15 18:37:40
/* 000006 */ var flm_all_serializable_classes = {};
/* 000006 */ var logging = {};
/* 000006 */ var unique_object_id = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000055 */ import * as __module_flm_all_serializable_classes__ from './flm_all_serializable_classes.js';
/* 000055 */ __nest__ (flm_all_serializable_classes, '', __module_flm_all_serializable_classes__);
/* 000044 */ import * as __module_unique_object_id__ from './unique_object_id.js';
/* 000044 */ __nest__ (unique_object_id, '', __module_unique_object_id__);
/* 000036 */ import {FLMFragment} from './flm.flmfragment.js';
/* 000032 */ import {FLMSpecInfo} from './flm.flmspecinfo.js';
/* 000026 */ import {FLMLatexWalker, FLMParsingState, FLMParsingStateDeltaSetBlockLevel} from './flm.flmenvironment.js';
/* 000021 */ import {EnvironmentSpec, LatexContextDb, MacroSpec, SpecialsSpec} from './pylatexenc.macrospec.js';
/* 000017 */ import {LatexNodeList, latex_node_types} from './pylatexenc.latexnodes.nodes.js';
/* 000014 */ import {LatexParserBase} from './pylatexenc.latexnodes.parsers.js';
/* 000009 */ import {LatexArgumentSpec, ParsedArguments, ParsingStateDelta} from './pylatexenc.latexnodes.js';
/* 000006 */ import * as __module_logging__ from './logging.js';
/* 000006 */ __nest__ (logging, '', __module_logging__);
/* 000006 */ export {FLMParsingState, ParsedArguments, SpecialsSpec, FLMParsingStateDeltaSetBlockLevel, FLMFragment, LatexParserBase, FLMSpecInfo, MacroSpec, ParsingStateDelta, latex_node_types, LatexArgumentSpec, LatexContextDb, FLMLatexWalker, EnvironmentSpec, LatexNodeList};
/* 000001 */ var __name__ = 'flm.flmdump';
/* 000007 */ export var logger = (function () {
/* 000007 */ 	var __accu0__ = logging;
/* 000007 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000007 */ }) ();
/* 000045 */ export var fn_unique_object_id = unique_object_id.fn_unique_object_id;
/* 000056 */ export var _import_class = function (fullclsname, restype) {
/* 000056 */ 	if (arguments.length) {
/* 000056 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000056 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000056 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000056 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000056 */ 				switch (__attrib0__) {
/* 000056 */ 					case 'fullclsname': var fullclsname = __allkwargs0__ [__attrib0__]; break;
/* 000056 */ 					case 'restype': var restype = __allkwargs0__ [__attrib0__]; break;
/* 000056 */ 				}
/* 000056 */ 			}
/* 000056 */ 		}
/* 000056 */ 	}
/* 000056 */ 	else {
/* 000056 */ 	}
/* 000057 */ 	var resources = flm_all_serializable_classes.serializable;
/* 000058 */ 	if (__t__ (restype === null)) {
/* 000059 */ 		var restype = '';
/* 000059 */ 	}
/* 000060 */ 	if (__t__ (!__in__ (restype, resources))) {
/* 000061 */ 		var __except0__ = __call__ (ValueError, null, __add__ ('Invalid restype: ', __call__ (repr, null, restype)));
/* 000061 */ 		__except0__.__cause__ = null;
/* 000061 */ 		throw __except0__;
/* 000061 */ 	}
/* 000062 */ 	var rcls = __getitem__ (resources, restype);
/* 000063 */ 	if (__t__ (!__in__ (fullclsname, rcls))) {
/* 000065 */ 		var __except0__ = __call__ (ValueError, null, __add__ (__add__ (__add__ (__add__ ('Invalid class name: ', __call__ (repr, null, fullclsname)), ' ['), __call__ (repr, null, restype)), ']'));
/* 000065 */ 		__except0__.__cause__ = null;
/* 000065 */ 		throw __except0__;
/* 000065 */ 	}
/* 000066 */ 	return __getitem__ (rcls, fullclsname);
/* 000066 */ };
/* 000071 */ export var _fullclassname = function (clsobj) {
/* 000071 */ 	if (arguments.length) {
/* 000071 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000071 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000071 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000071 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000071 */ 				switch (__attrib0__) {
/* 000071 */ 					case 'clsobj': var clsobj = __allkwargs0__ [__attrib0__]; break;
/* 000071 */ 				}
/* 000071 */ 			}
/* 000071 */ 		}
/* 000071 */ 	}
/* 000071 */ 	else {
/* 000071 */ 	}
/* 000076 */ 	return __add__ (__add__ (clsobj.__module__, ':'), clsobj.__name__);
/* 000076 */ };
/* 000082 */ export var _FakeDataLoadedFLMLatexWalker =  __class__ ('_FakeDataLoadedFLMLatexWalker', [object], {
/* 000082 */ 	__module__: __name__,
/* 000083 */ 	get __init__ () {return __get__ (this, function (self, latex_walker) {
/* 000083 */ 		if (arguments.length) {
/* 000083 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000083 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000083 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000083 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000083 */ 					switch (__attrib0__) {
/* 000083 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000083 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000083 */ 					}
/* 000083 */ 				}
/* 000083 */ 			}
/* 000083 */ 		}
/* 000083 */ 		else {
/* 000083 */ 		}
/* 000084 */ 		self.flm_text = latex_walker.s;
/* 000085 */ 		self.standalone_mode = latex_walker.standalone_mode;
/* 000086 */ 		self.is_block_level = latex_walker.default_parsing_state.is_block_level;
/* 000087 */ 		self.parsing_mode = latex_walker.parsing_mode;
/* 000088 */ 		self.resource_info = latex_walker.resource_info;
/* 000089 */ 		self.tolerant_parsing = latex_walker.tolerant_parsing;
/* 000090 */ 		self.what = latex_walker.what;
/* 000091 */ 		self.input_lineno_colno_offsets = latex_walker.input_lineno_colno_offsets;
/* 000091 */ 	});},
/* 000093 */ 	_fields: tuple (['flm_text', 'standalone_mode', 'is_block_level', 'parsing_mode', 'resource_info', 'tolerant_parsing', 'what', 'input_lineno_colno_offsets']),
/* 000097 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000097 */ 		if (arguments.length) {
/* 000097 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000097 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000097 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000097 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000097 */ 					switch (__attrib0__) {
/* 000097 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000097 */ 					}
/* 000097 */ 				}
/* 000097 */ 			}
/* 000097 */ 		}
/* 000097 */ 		else {
/* 000097 */ 		}
/* 000098 */ 		return '{}(**{})'.format (self.__class__.__name__, __call__ (repr, null, self.__dict__));
/* 000098 */ 	});}
/* 000098 */ });
/* 000104 */ export var latex_node_types_dict = (function () {
/* 000104 */ 	var __accu0__ = [];
/* 000104 */ 	var __iterable0__ = latex_node_types;
/* 000104 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000106 */ 		var c = __getitem__ (__iterable0__, __index0__);
/* 000106 */ 		(function () {
/* 000106 */ 			var __accu1__ = __accu0__;
/* 000106 */ 			return __call__ (__accu1__.append, __accu1__, [c.__name__, c]);
/* 000106 */ 		}) ();
/* 000106 */ 	}
/* 000106 */ 	return dict (__accu0__);
/* 000106 */ }) ();
/* 000109 */ export var known_object_types = (function () {
/* 000109 */ 	var __accu0__ = [];
/* 000109 */ 	var __iterable0__ = [FLMFragment, FLMParsingState, ParsedArguments, LatexArgumentSpec, ParsingStateDelta, FLMParsingStateDeltaSetBlockLevel];
/* 000109 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000117 */ 		var c = __getitem__ (__iterable0__, __index0__);
/* 000111 */ 		(function () {
/* 000111 */ 			var __accu1__ = __accu0__;
/* 000111 */ 			return __call__ (__accu1__.append, __accu1__, [c.__name__, c]);
/* 000111 */ 		}) ();
/* 000111 */ 	}
/* 000111 */ 	return dict (__accu0__);
/* 000111 */ }) ();
/* 000121 */ export var _is_known_serializable_object_type_names = function (typename) {
/* 000121 */ 	if (arguments.length) {
/* 000121 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000121 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000121 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000121 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000121 */ 				switch (__attrib0__) {
/* 000121 */ 					case 'typename': var typename = __allkwargs0__ [__attrib0__]; break;
/* 000121 */ 				}
/* 000121 */ 			}
/* 000121 */ 		}
/* 000121 */ 	}
/* 000121 */ 	else {
/* 000121 */ 	}
/* 000122 */ 	return __t__ (__in__ (typename, latex_node_types_dict)) || __t__ (__in__ (typename, known_object_types)) || __eq__ (typename, 'LatexNodeList');
/* 000122 */ };
/* 000133 */ export var _dump_version = 2;
/* 000137 */ export var _Skip =  __class__ ('_Skip', [object], {
/* 000137 */ 	__module__: __name__,
/* 000137 */ });
/* 000141 */ export var _skip_types = tuple ([LatexContextDb, LatexParserBase, MacroSpec, EnvironmentSpec, SpecialsSpec]);
/* 000152 */ export var FLMDataDumper =  __class__ ('FLMDataDumper', [object], {
/* 000152 */ 	__module__: __name__,
/* 000157 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000157 */ 		if (arguments.length) {
/* 000157 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000157 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000157 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000157 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000157 */ 					switch (__attrib0__) {
/* 000157 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000157 */ 						case 'environment': var environment = __allkwargs0__ [__attrib0__]; break;
/* 000157 */ 					}
/* 000157 */ 				}
/* 000157 */ 			}
/* 000157 */ 		}
/* 000157 */ 		else {
/* 000157 */ 		}
/* 000158 */ 		self.environment = environment;
/* 000159 */ 		(function () {
/* 000159 */ 			var __accu0__ = self;
/* 000159 */ 			return __call__ (__accu0__.py_clear, __accu0__);
/* 000159 */ 		}) ();
/* 000159 */ 	});},
/* 000161 */ 	get py_clear () {return __get__ (this, function (self) {
/* 000161 */ 		if (arguments.length) {
/* 000161 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000161 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000161 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000161 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000161 */ 					switch (__attrib0__) {
/* 000161 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000161 */ 					}
/* 000161 */ 				}
/* 000161 */ 			}
/* 000161 */ 		}
/* 000161 */ 		else {
/* 000161 */ 		}
/* 000162 */ 		self.data = dict ({'dumps': dict ({}), 'resources': dict ({}), '_dump': dict ({'version': _dump_version})});
/* 000162 */ 	});},
/* 000170 */ 	get get_data () {return __get__ (this, function (self) {
/* 000170 */ 		if (arguments.length) {
/* 000170 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000170 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000170 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000170 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000170 */ 					switch (__attrib0__) {
/* 000170 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000170 */ 					}
/* 000170 */ 				}
/* 000170 */ 			}
/* 000170 */ 		}
/* 000170 */ 		else {
/* 000170 */ 		}
/* 000171 */ 		return self.data;
/* 000171 */ 	});},
/* 000173 */ 	get add_object_dump () {return __get__ (this, function (self, key, obj) {
/* 000173 */ 		if (arguments.length) {
/* 000173 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000173 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000173 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000173 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000173 */ 					switch (__attrib0__) {
/* 000173 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000173 */ 						case 'key': var key = __allkwargs0__ [__attrib0__]; break;
/* 000173 */ 						case 'obj': var obj = __allkwargs0__ [__attrib0__]; break;
/* 000173 */ 					}
/* 000173 */ 				}
/* 000173 */ 			}
/* 000173 */ 		}
/* 000173 */ 		else {
/* 000173 */ 		}
/* 000174 */ 		var dump = (function () {
/* 000174 */ 			var __accu0__ = self;
/* 000174 */ 			return __call__ (__accu0__._make_object_dump, __accu0__, obj, __kwargtrans__ ({dumping_state: dict ({'object': obj})}));
/* 000174 */ 		}) ();
/* 000175 */ 		__setitem__ (__getitem__ (self.data, 'dumps'), key, dump);
/* 000175 */ 	});},
/* 000179 */ 	get _make_object_dump () {return __get__ (this, function (self, obj) {
/* 000179 */ 		var type_name = null;
/* 000179 */ 		if (arguments.length) {
/* 000179 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000179 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000179 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000179 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000179 */ 					switch (__attrib0__) {
/* 000179 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000179 */ 						case 'obj': var obj = __allkwargs0__ [__attrib0__]; break;
/* 000179 */ 						case 'dumping_state': var dumping_state = __allkwargs0__ [__attrib0__]; break;
/* 000179 */ 						case 'type_name': var type_name = __allkwargs0__ [__attrib0__]; break;
/* 000179 */ 					}
/* 000179 */ 				}
/* 000179 */ 			}
/* 000179 */ 		}
/* 000179 */ 		else {
/* 000179 */ 		}
/* 000181 */ 		var fieldnames = __call__ (set, null, obj._fields);
/* 000182 */ 		var __iterable0__ = __call__ (dir, null, obj);
/* 000182 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000182 */ 			var fieldname = __getitem__ (__iterable0__, __index0__);
/* 000183 */ 			if (__t__ ((function () {
/* 000183 */ 				var __accu0__ = fieldname;
/* 000183 */ 				return __call__ (__accu0__.startswith, __accu0__, 'flm');
/* 000183 */ 			}) ())) {
/* 000184 */ 				(function () {
/* 000184 */ 					var __accu0__ = fieldnames;
/* 000184 */ 					return __call__ (__accu0__.add, __accu0__, fieldname);
/* 000184 */ 				}) ();
/* 000184 */ 			}
/* 000184 */ 		}
/* 000186 */ 		if (__t__ (type_name === null)) {
/* 000187 */ 			var cls = obj.__class__;
/* 000188 */ 			var clsname = cls.__name__;
/* 000189 */ 			if (__t__ (__call__ (_is_known_serializable_object_type_names, null, clsname))) {
/* 000190 */ 				var type_name = clsname;
/* 000190 */ 			}
/* 000191 */ 			else {
/* 000192 */ 				var type_name = __call__ (_fullclassname, null, cls);
/* 000192 */ 			}
/* 000192 */ 		}
/* 000194 */ 		var objdata = dict ({'$type': type_name});
/* 000198 */ 		var get_obj_attr = function (fieldname) {
/* 000198 */ 			if (arguments.length) {
/* 000198 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000198 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000198 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000198 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000198 */ 						switch (__attrib0__) {
/* 000198 */ 							case 'fieldname': var fieldname = __allkwargs0__ [__attrib0__]; break;
/* 000198 */ 						}
/* 000198 */ 					}
/* 000198 */ 				}
/* 000198 */ 			}
/* 000198 */ 			else {
/* 000198 */ 			}
/* 000199 */ 			if (__t__ (__call__ (hasattr, null, obj, fieldname))) {
/* 000200 */ 				return __call__ (getattr, null, obj, fieldname);
/* 000200 */ 			}
/* 000201 */ 			if (__t__ (__t__ (__call__ (hasattr, null, obj, '_proxy_object')) && __call__ (hasattr, null, obj._proxy_object, fieldname))) {
/* 000202 */ 				return __call__ (getattr, null, obj._proxy_object, fieldname);
/* 000202 */ 			}
/* 000203 */ 			var __except0__ = __call__ (ValueError, null, __add__ (__add__ (__add__ ('Invalid object field: ', __call__ (repr, null, fieldname)), ' in '), __call__ (repr, null, obj)));
/* 000203 */ 			__except0__.__cause__ = null;
/* 000203 */ 			throw __except0__;
/* 000203 */ 		};
/* 000205 */ 		var __iterable0__ = __call__ (sorted, null, fieldnames);
/* 000205 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000205 */ 			var field = __getitem__ (__iterable0__, __index0__);
/* 000206 */ 			var val = (function () {
/* 000206 */ 				var __accu0__ = self;
/* 000206 */ 				return __call__ (__accu0__._make_dump, __accu0__, __call__ (get_obj_attr, null, field), __kwargtrans__ ({dumping_state: dumping_state}));
/* 000206 */ 			}) ();
/* 000207 */ 			if (__t__ (val === _Skip)) {
/* 000208 */ 				var val = dict ({'$skip': true});
/* 000208 */ 			}
/* 000209 */ 			__setitem__ (objdata, field, val);
/* 000209 */ 		}
/* 000211 */ 		return objdata;
/* 000211 */ 	});},
/* 000213 */ 	get _make_dump () {return __get__ (this, function (self, x) {
/* 000213 */ 		if (arguments.length) {
/* 000213 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000213 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000213 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000213 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000213 */ 					switch (__attrib0__) {
/* 000213 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000213 */ 						case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000213 */ 						case 'dumping_state': var dumping_state = __allkwargs0__ [__attrib0__]; break;
/* 000213 */ 					}
/* 000213 */ 				}
/* 000213 */ 			}
/* 000213 */ 		}
/* 000213 */ 		else {
/* 000213 */ 		}
/* 000215 */ 		if (__t__ (__call__ (isinstance, null, x, tuple ([tuple, list])))) {
/* 000216 */ 			var result = [];
/* 000217 */ 			var __iterable0__ = x;
/* 000217 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000217 */ 				var item = __getitem__ (__iterable0__, __index0__);
/* 000218 */ 				var value = (function () {
/* 000218 */ 					var __accu0__ = self;
/* 000218 */ 					return __call__ (__accu0__._make_dump, __accu0__, item, __kwargtrans__ ({dumping_state: dumping_state}));
/* 000218 */ 				}) ();
/* 000219 */ 				if (__t__ (value === _Skip)) {
/* 000220 */ 					var value = null;
/* 000220 */ 				}
/* 000221 */ 				(function () {
/* 000221 */ 					var __accu0__ = result;
/* 000221 */ 					return __call__ (__accu0__.append, __accu0__, value);
/* 000221 */ 				}) ();
/* 000221 */ 			}
/* 000222 */ 			return result;
/* 000222 */ 		}
/* 000224 */ 		if (__t__ (__call__ (isinstance, null, x, dict))) {
/* 000225 */ 			return (function () {
/* 000225 */ 				var __accu0__ = [];
/* 000226 */ 				var __iterable0__ = (function () {
/* 000226 */ 					var __accu1__ = x;
/* 000226 */ 					return __call__ (__accu1__.py_items, __accu1__);
/* 000226 */ 				}) ();
/* 000226 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000226 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000226 */ 					var k = __left0__ [0];
/* 000226 */ 					var v = __left0__ [1];
/* 000226 */ 					(function () {
/* 000226 */ 						var __accu1__ = __accu0__;
/* 000225 */ 						return __call__ (__accu1__.append, __accu1__, [k, (function () {
/* 000225 */ 							var __accu2__ = self;
/* 000225 */ 							return __call__ (__accu2__._make_dump, __accu2__, v, __kwargtrans__ ({dumping_state: dumping_state}));
/* 000225 */ 						}) ()]);
/* 000225 */ 					}) ();
/* 000225 */ 				}
/* 000225 */ 				return dict (__accu0__);
/* 000225 */ 			}) ();
/* 000225 */ 		}
/* 000228 */ 		if (__t__ (x === self.environment)) {
/* 000229 */ 			return dict ({'$flmenv': 'environment'});
/* 000229 */ 		}
/* 000231 */ 		if (__t__ (x === self.environment.parsing_state)) {
/* 000232 */ 			return dict ({'$flmenv': 'parsing_state'});
/* 000232 */ 		}
/* 000234 */ 		if (__t__ (__call__ (isinstance, null, x, FLMLatexWalker))) {
/* 000235 */ 			return (function () {
/* 000235 */ 				var __accu0__ = self;
/* 000238 */ 				return __call__ (__accu0__._make_resource, __accu0__, 'FLMLatexWalker', x, __call__ (_FakeDataLoadedFLMLatexWalker, null, x), __kwargtrans__ ({dumping_state: dumping_state}));
/* 000238 */ 			}) ();
/* 000238 */ 		}
/* 000242 */ 		if (__t__ (__call__ (isinstance, null, x, FLMSpecInfo))) {
/* 000243 */ 			return (function () {
/* 000243 */ 				var __accu0__ = self;
/* 000248 */ 				return __call__ (__accu0__._make_resource, __accu0__, 'FLMSpecInfo', x, x, __kwargtrans__ ({dumping_state: dumping_state, restype_dumptype: __call__ (_fullclassname, null, x.__class__)}));
/* 000248 */ 			}) ();
/* 000248 */ 		}
/* 000251 */ 		if (__t__ (__call__ (isinstance, null, x, FLMParsingState))) {
/* 000252 */ 			return (function () {
/* 000252 */ 				var __accu0__ = self;
/* 000252 */ 				return __call__ (__accu0__._make_resource, __accu0__, 'FLMParsingState', x, x, __kwargtrans__ ({dumping_state: dumping_state}));
/* 000252 */ 			}) ();
/* 000252 */ 		}
/* 000259 */ 		if (__t__ (__call__ (isinstance, null, x, latex_node_types))) {
/* 000260 */ 			return (function () {
/* 000260 */ 				var __accu0__ = self;
/* 000260 */ 				return __call__ (__accu0__._make_resource, __accu0__, 'LatexNode', x, x, __kwargtrans__ ({dumping_state: dumping_state, restype_dumptype: x.__class__.__name__}));
/* 000260 */ 			}) ();
/* 000260 */ 		}
/* 000268 */ 		if (__t__ (__call__ (isinstance, null, x, _skip_types))) {
/* 000269 */ 			return _Skip;
/* 000269 */ 		}
/* 000271 */ 		if (__t__ (__call__ (hasattr, null, x, '_fields'))) {
/* 000272 */ 			return (function () {
/* 000272 */ 				var __accu0__ = self;
/* 000272 */ 				return __call__ (__accu0__._make_object_dump, __accu0__, x, __kwargtrans__ ({dumping_state: dumping_state}));
/* 000272 */ 			}) ();
/* 000272 */ 		}
/* 000274 */ 		if (__t__ (__call__ (isinstance, null, x, tuple ([str, bool, int, float])))) {
/* 000275 */ 			return x;
/* 000275 */ 		}
/* 000277 */ 		if (__t__ (x === null)) {
/* 000278 */ 			return null;
/* 000278 */ 		}
/* 000280 */ 		if (__t__ (!__t__ ((x)))) {
/* 000282 */ 			return null;
/* 000282 */ 		}
/* 000284 */ 		var __except0__ = __call__ (ValueError, null, 'Cannot dump value {} of unsupported type'.format (__call__ (repr, null, x)));
/* 000284 */ 		__except0__.__cause__ = null;
/* 000284 */ 		throw __except0__;
/* 000284 */ 	});},
/* 000286 */ 	get _make_resource () {return __get__ (this, function (self, restype, y, ydata) {
/* 000286 */ 		var restype_dumptype = null;
/* 000286 */ 		if (arguments.length) {
/* 000286 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000286 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000286 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000286 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000286 */ 					switch (__attrib0__) {
/* 000286 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000286 */ 						case 'restype': var restype = __allkwargs0__ [__attrib0__]; break;
/* 000286 */ 						case 'y': var y = __allkwargs0__ [__attrib0__]; break;
/* 000286 */ 						case 'ydata': var ydata = __allkwargs0__ [__attrib0__]; break;
/* 000286 */ 						case 'restype_dumptype': var restype_dumptype = __allkwargs0__ [__attrib0__]; break;
/* 000286 */ 						case 'dumping_state': var dumping_state = __allkwargs0__ [__attrib0__]; break;
/* 000286 */ 					}
/* 000286 */ 				}
/* 000286 */ 			}
/* 000286 */ 		}
/* 000286 */ 		else {
/* 000286 */ 		}
/* 000287 */ 		if (__t__ (!__in__ (restype, __getitem__ (self.data, 'resources')))) {
/* 000288 */ 			__setitem__ (__getitem__ (self.data, 'resources'), restype, dict ({}));
/* 000288 */ 		}
/* 000290 */ 		var reskey = __call__ (str, null, __call__ (fn_unique_object_id, null, y));
/* 000291 */ 		if (__t__ (!__in__ (reskey, __getitem__ (__getitem__ (self.data, 'resources'), restype)))) {
/* 000295 */ 			__setitem__ (__getitem__ (__getitem__ (self.data, 'resources'), restype), reskey, '$currently-dumping');
/* 000297 */ 			var ydata_dump = (function () {
/* 000297 */ 				var __accu0__ = self;
/* 000297 */ 				return __call__ (__accu0__._make_object_dump, __accu0__, ydata, __kwargtrans__ ({dumping_state: dumping_state, type_name: (__t__ (restype_dumptype !== null) ? restype_dumptype : restype)}));
/* 000297 */ 			}) ();
/* 000302 */ 			__setitem__ (__getitem__ (__getitem__ (self.data, 'resources'), restype), reskey, ydata_dump);
/* 000302 */ 		}
/* 000304 */ 		return dict ({'$restype': restype, '$reskey': reskey});
/* 000304 */ 	});}
/* 000304 */ });
/* 000308 */ export var FLMDataLoadNotSupported =  __class__ ('FLMDataLoadNotSupported', [object], {
/* 000308 */ 	__module__: __name__,
/* 000308 */ });
/* 000318 */ export var FLMDataLoader =  __class__ ('FLMDataLoader', [object], {
/* 000318 */ 	__module__: __name__,
/* 000323 */ 	get __init__ () {return __get__ (this, function (self, data) {
/* 000323 */ 		if (arguments.length) {
/* 000323 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000323 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000323 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000323 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000323 */ 					switch (__attrib0__) {
/* 000323 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000323 */ 						case 'data': var data = __allkwargs0__ [__attrib0__]; break;
/* 000323 */ 						case 'environment': var environment = __allkwargs0__ [__attrib0__]; break;
/* 000323 */ 					}
/* 000323 */ 				}
/* 000323 */ 			}
/* 000323 */ 		}
/* 000323 */ 		else {
/* 000323 */ 		}
/* 000324 */ 		self.data = data;
/* 000325 */ 		self.environment = environment;
/* 000327 */ 		if (__t__ (__ne__ (__getitem__ (__getitem__ (self.data, '_dump'), 'version'), _dump_version))) {
/* 000328 */ 			var __except0__ = __call__ (RuntimeError, null, 'Dump version mismatch: {}, expected {}'.format (__getitem__ (__getitem__ (self.data, '_dump'), 'version'), _dump_version));
/* 000328 */ 			__except0__.__cause__ = null;
/* 000328 */ 			throw __except0__;
/* 000328 */ 		}
/* 000333 */ 		self._loaded_resources = dict ({});
/* 000334 */ 		if (__t__ (__t__ (__in__ ('resources', self.data)) && __getitem__ (self.data, 'resources'))) {
/* 000335 */ 			var __iterable0__ = __getitem__ (self.data, 'resources');
/* 000335 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000335 */ 				var restype = __getitem__ (__iterable0__, __index0__);
/* 000336 */ 				__setitem__ (self._loaded_resources, restype, dict ({}));
/* 000336 */ 			}
/* 000336 */ 		}
/* 000336 */ 	});},
/* 000339 */ 	get get_keys () {return __get__ (this, function (self) {
/* 000339 */ 		if (arguments.length) {
/* 000339 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000339 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000339 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000339 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000339 */ 					switch (__attrib0__) {
/* 000339 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000339 */ 					}
/* 000339 */ 				}
/* 000339 */ 			}
/* 000339 */ 		}
/* 000339 */ 		else {
/* 000339 */ 		}
/* 000340 */ 		return __call__ (list, null, (function () {
/* 000340 */ 			var __accu0__ = __getitem__ (self.data, 'dumps');
/* 000340 */ 			return __call__ (__accu0__.py_keys, __accu0__);
/* 000340 */ 		}) ());
/* 000340 */ 	});},
/* 000342 */ 	get get_object_dump () {return __get__ (this, function (self, key) {
/* 000342 */ 		if (arguments.length) {
/* 000342 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000342 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000342 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000342 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000342 */ 					switch (__attrib0__) {
/* 000342 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000342 */ 						case 'key': var key = __allkwargs0__ [__attrib0__]; break;
/* 000342 */ 					}
/* 000342 */ 				}
/* 000342 */ 			}
/* 000342 */ 		}
/* 000342 */ 		else {
/* 000342 */ 		}
/* 000343 */ 		var data = __getitem__ (__getitem__ (self.data, 'dumps'), key);
/* 000344 */ 		return (function () {
/* 000344 */ 			var __accu0__ = self;
/* 000344 */ 			return __call__ (__accu0__._load_from_data, __accu0__, data);
/* 000344 */ 		}) ();
/* 000344 */ 	});},
/* 000348 */ 	get _load_from_data () {return __get__ (this, function (self, data) {
/* 000348 */ 		if (arguments.length) {
/* 000348 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000348 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000348 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000348 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000348 */ 					switch (__attrib0__) {
/* 000348 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000348 */ 						case 'data': var data = __allkwargs0__ [__attrib0__]; break;
/* 000348 */ 					}
/* 000348 */ 				}
/* 000348 */ 			}
/* 000348 */ 		}
/* 000348 */ 		else {
/* 000348 */ 		}
/* 000350 */ 		if (__t__ (data === null)) {
/* 000351 */ 			return null;
/* 000351 */ 		}
/* 000353 */ 		if (__t__ (__call__ (isinstance, null, data, list))) {
/* 000354 */ 			return (function () {
/* 000354 */ 				var __accu0__ = [];
/* 000354 */ 				var __iterable0__ = data;
/* 000354 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000354 */ 					var item = __getitem__ (__iterable0__, __index0__);
/* 000354 */ 					(function () {
/* 000354 */ 						var __accu1__ = __accu0__;
/* 000354 */ 						return __call__ (__accu1__.append, __accu1__, (function () {
/* 000354 */ 							var __accu2__ = self;
/* 000354 */ 							return __call__ (__accu2__._load_from_data, __accu2__, item);
/* 000354 */ 						}) ());
/* 000354 */ 					}) ();
/* 000354 */ 				}
/* 000354 */ 				return __accu0__;
/* 000354 */ 			}) ();
/* 000354 */ 		}
/* 000359 */ 		var special = null;
/* 000360 */ 		try {
/* 000361 */ 			var special = __getitem__ (data, '$flmenv');
/* 000361 */ 		}
/* 000361 */ 		catch (__except0__) {
/* 000363 */ 			// pass;
/* 000363 */ 		}
/* 000364 */ 		if (__t__ (special)) {
/* 000365 */ 			return (function () {
/* 000365 */ 				var __accu0__ = self;
/* 000365 */ 				return __call__ (__accu0__._flmenv_object, __accu0__, __getitem__ (data, '$flmenv'), data);
/* 000365 */ 			}) ();
/* 000365 */ 		}
/* 000367 */ 		var special = null;
/* 000368 */ 		try {
/* 000369 */ 			var special = __getitem__ (data, '$skip');
/* 000369 */ 		}
/* 000369 */ 		catch (__except0__) {
/* 000371 */ 			// pass;
/* 000371 */ 		}
/* 000372 */ 		if (__t__ (special)) {
/* 000373 */ 			return FLMDataLoadNotSupported;
/* 000373 */ 		}
/* 000375 */ 		var special = null;
/* 000376 */ 		try {
/* 000377 */ 			var special = __getitem__ (data, '$restype');
/* 000377 */ 		}
/* 000377 */ 		catch (__except0__) {
/* 000379 */ 			// pass;
/* 000379 */ 		}
/* 000380 */ 		if (__t__ (special)) {
/* 000381 */ 			return (function () {
/* 000381 */ 				var __accu0__ = self;
/* 000381 */ 				return __call__ (__accu0__._load_resource, __accu0__, special, __getitem__ (data, '$reskey'));
/* 000381 */ 			}) ();
/* 000381 */ 		}
/* 000383 */ 		var special = null;
/* 000384 */ 		try {
/* 000385 */ 			var special = __getitem__ (data, '$type');
/* 000385 */ 		}
/* 000385 */ 		catch (__except0__) {
/* 000387 */ 			// pass;
/* 000387 */ 		}
/* 000388 */ 		if (__t__ (special)) {
/* 000389 */ 			var datad = __call__ (dict, null, data);
/* 000390 */ 			var thetype = (function () {
/* 000390 */ 				var __accu0__ = datad;
/* 000390 */ 				return __call__ (__accu0__.py_pop, __accu0__, '$type');
/* 000390 */ 			}) ();
/* 000391 */ 			return (function () {
/* 000391 */ 				var __accu0__ = self;
/* 000391 */ 				return __call__ (__accu0__._load_object, __accu0__, thetype, datad);
/* 000391 */ 			}) ();
/* 000391 */ 		}
/* 000393 */ 		if (__t__ (__call__ (isinstance, null, data, tuple ([str, int, bool])))) {
/* 000394 */ 			return data;
/* 000394 */ 		}
/* 000396 */ 		if (__t__ (data === FLMDataLoadNotSupported)) {
/* 000397 */ 			return null;
/* 000397 */ 		}
/* 000400 */ 		return (function () {
/* 000400 */ 			var __accu0__ = [];
/* 000402 */ 			var __iterable0__ = (function () {
/* 000402 */ 				var __accu1__ = __call__ (dict, null, data);
/* 000402 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000402 */ 			}) ();
/* 000402 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000402 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000402 */ 				var k = __left0__ [0];
/* 000402 */ 				var v = __left0__ [1];
/* 000402 */ 				(function () {
/* 000402 */ 					var __accu1__ = __accu0__;
/* 000401 */ 					return __call__ (__accu1__.append, __accu1__, [k, (function () {
/* 000401 */ 						var __accu2__ = self;
/* 000401 */ 						return __call__ (__accu2__._load_from_data, __accu2__, v);
/* 000401 */ 					}) ()]);
/* 000401 */ 				}) ();
/* 000401 */ 			}
/* 000401 */ 			return dict (__accu0__);
/* 000401 */ 		}) ();
/* 000401 */ 	});},
/* 000406 */ 	get _flmenv_object () {return __get__ (this, function (self, flmenv_what, data) {
/* 000406 */ 		if (arguments.length) {
/* 000406 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000406 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000406 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000406 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000406 */ 					switch (__attrib0__) {
/* 000406 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000406 */ 						case 'flmenv_what': var flmenv_what = __allkwargs0__ [__attrib0__]; break;
/* 000406 */ 						case 'data': var data = __allkwargs0__ [__attrib0__]; break;
/* 000406 */ 					}
/* 000406 */ 				}
/* 000406 */ 			}
/* 000406 */ 		}
/* 000406 */ 		else {
/* 000406 */ 		}
/* 000407 */ 		if (__t__ (__eq__ (flmenv_what, ''))) {
/* 000408 */ 			return self.environment;
/* 000408 */ 		}
/* 000409 */ 		if (__t__ (__eq__ (flmenv_what, 'parsing_state'))) {
/* 000410 */ 			return self.environment.parsing_state;
/* 000410 */ 		}
/* 000411 */ 		var __except0__ = __call__ (ValueError, null, __add__ ('Unknown/invalid flmenv: ', __call__ (repr, null, data)));
/* 000411 */ 		__except0__.__cause__ = null;
/* 000411 */ 		throw __except0__;
/* 000411 */ 	});},
/* 000414 */ 	get _load_resource () {return __get__ (this, function (self, restype, reskey) {
/* 000414 */ 		if (arguments.length) {
/* 000414 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000414 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000414 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000414 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000414 */ 					switch (__attrib0__) {
/* 000414 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000414 */ 						case 'restype': var restype = __allkwargs0__ [__attrib0__]; break;
/* 000414 */ 						case 'reskey': var reskey = __allkwargs0__ [__attrib0__]; break;
/* 000414 */ 					}
/* 000414 */ 				}
/* 000414 */ 			}
/* 000414 */ 		}
/* 000414 */ 		else {
/* 000414 */ 		}
/* 000416 */ 		if (__t__ (!__in__ (restype, self._loaded_resources))) {
/* 000417 */ 			__setitem__ (self._loaded_resources, restype, dict ({}));
/* 000417 */ 		}
/* 000419 */ 		if (__t__ (!__in__ (reskey, __getitem__ (self._loaded_resources, restype)))) {
/* 000422 */ 			__setitem__ (__getitem__ (self._loaded_resources, restype), reskey, (function () {
/* 000422 */ 				var __accu0__ = self;
/* 000422 */ 				return __call__ (__accu0__._load_resource_from_data, __accu0__, restype, reskey);
/* 000422 */ 			}) ());
/* 000422 */ 		}
/* 000425 */ 		return __getitem__ (__getitem__ (self._loaded_resources, restype), reskey);
/* 000425 */ 	});},
/* 000427 */ 	get _load_resource_from_data () {return __get__ (this, function (self, restype, reskey) {
/* 000427 */ 		if (arguments.length) {
/* 000427 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000427 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000427 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000427 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000427 */ 					switch (__attrib0__) {
/* 000427 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000427 */ 						case 'restype': var restype = __allkwargs0__ [__attrib0__]; break;
/* 000427 */ 						case 'reskey': var reskey = __allkwargs0__ [__attrib0__]; break;
/* 000427 */ 					}
/* 000427 */ 				}
/* 000427 */ 			}
/* 000427 */ 		}
/* 000427 */ 		else {
/* 000427 */ 		}
/* 000429 */ 		if (__t__ (!__in__ (restype, __getitem__ (self.data, 'resources')))) {
/* 000430 */ 			var __except0__ = __call__ (ValueError, null, 'Invalid internal resource reference type {}'.format (restype));
/* 000430 */ 			__except0__.__cause__ = null;
/* 000430 */ 			throw __except0__;
/* 000430 */ 		}
/* 000431 */ 		if (__t__ (!__in__ (reskey, __getitem__ (__getitem__ (self.data, 'resources'), restype)))) {
/* 000432 */ 			var __except0__ = __call__ (ValueError, null, 'Invalid internal resource reference key {}/{}'.format (restype, reskey));
/* 000432 */ 			__except0__.__cause__ = null;
/* 000432 */ 			throw __except0__;
/* 000432 */ 		}
/* 000434 */ 		var resdata = __getitem__ (__getitem__ (__getitem__ (self.data, 'resources'), restype), reskey);
/* 000436 */ 		if (__t__ (__eq__ (restype, 'FLMLatexWalker'))) {
/* 000437 */ 			var resdata2 = __call__ (dict, null, resdata);
/* 000438 */ 			var the_type = (function () {
/* 000438 */ 				var __accu0__ = resdata2;
/* 000438 */ 				return __call__ (__accu0__.py_pop, __accu0__, '$type');
/* 000438 */ 			}) ();
/* 000439 */ 			if (__t__ (__ne__ (the_type, 'FLMLatexWalker'))) {
/* 000440 */ 				var __except0__ = __call__ (ValueError, null, "flmdump: Can't create LatexWalker instances other than FLMLatexWalker");
/* 000440 */ 				__except0__.__cause__ = null;
/* 000440 */ 				throw __except0__;
/* 000440 */ 			}
/* 000443 */ 			return (function () {
/* 000443 */ 				var __accu0__ = self.environment;
/* 000443 */ 				return __call__ (__accu0__.make_latex_walker, __accu0__, __kwargtrans__ (resdata2));
/* 000443 */ 			}) ();
/* 000443 */ 		}
/* 000447 */ 		if (__t__ (__eq__ (restype, 'FLMParsingState'))) {
/* 000448 */ 			return (function () {
/* 000448 */ 				var __accu0__ = self;
/* 000450 */ 				return __call__ (__accu0__._load_object, __accu0__, restype, __call__ (dict, null, resdata, __kwargtrans__ ({latex_context: FLMDataLoadNotSupported})));
/* 000450 */ 			}) ();
/* 000450 */ 		}
/* 000453 */ 		if (__t__ (__eq__ (restype, 'FLMSpecInfo'))) {
/* 000454 */ 			var resdata2 = __call__ (dict, null, resdata);
/* 000455 */ 			var the_type = (function () {
/* 000455 */ 				var __accu0__ = resdata2;
/* 000455 */ 				return __call__ (__accu0__.py_pop, __accu0__, '$type');
/* 000455 */ 			}) ();
/* 000456 */ 			return (function () {
/* 000456 */ 				var __accu0__ = self;
/* 000456 */ 				return __call__ (__accu0__._load_object, __accu0__, the_type, resdata2, __kwargtrans__ ({restype: restype}));
/* 000456 */ 			}) ();
/* 000456 */ 		}
/* 000462 */ 		if (__t__ (__eq__ (restype, 'LatexNode'))) {
/* 000463 */ 			var resdata2 = __call__ (dict, null, resdata);
/* 000464 */ 			var the_type = (function () {
/* 000464 */ 				var __accu0__ = resdata2;
/* 000464 */ 				return __call__ (__accu0__.py_pop, __accu0__, '$type');
/* 000464 */ 			}) ();
/* 000465 */ 			return (function () {
/* 000465 */ 				var __accu0__ = self;
/* 000465 */ 				return __call__ (__accu0__._load_object, __accu0__, the_type, resdata2);
/* 000465 */ 			}) ();
/* 000465 */ 		}
/* 000470 */ 		var __except0__ = __call__ (ValueError, null, 'Unknown data resource type to load: {}'.format (restype));
/* 000470 */ 		__except0__.__cause__ = null;
/* 000470 */ 		throw __except0__;
/* 000470 */ 	});},
/* 000473 */ 	get _load_object () {return __get__ (this, function (self, objtype, data) {
/* 000473 */ 		var restype = null;
/* 000473 */ 		if (arguments.length) {
/* 000473 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000473 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000473 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000473 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000473 */ 					switch (__attrib0__) {
/* 000473 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000473 */ 						case 'objtype': var objtype = __allkwargs0__ [__attrib0__]; break;
/* 000473 */ 						case 'data': var data = __allkwargs0__ [__attrib0__]; break;
/* 000473 */ 						case 'restype': var restype = __allkwargs0__ [__attrib0__]; break;
/* 000473 */ 					}
/* 000473 */ 				}
/* 000473 */ 			}
/* 000473 */ 		}
/* 000473 */ 		else {
/* 000473 */ 		}
/* 000475 */ 		var data = __call__ (dict, null, data);
/* 000477 */ 		var args = (function () {
/* 000477 */ 			var __accu0__ = [];
/* 000479 */ 			var __iterable0__ = (function () {
/* 000479 */ 				var __accu1__ = data;
/* 000479 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000479 */ 			}) ();
/* 000479 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000479 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000479 */ 				var k = __left0__ [0];
/* 000479 */ 				var v = __left0__ [1];
/* 000480 */ 				if (__t__ (!__t__ (((function () {
/* 000480 */ 					var __accu1__ = k;
/* 000480 */ 					return __call__ (__accu1__.startswith, __accu1__, '$');
/* 000480 */ 				}) ())))) {
/* 000480 */ 					(function () {
/* 000480 */ 						var __accu1__ = __accu0__;
/* 000478 */ 						return __call__ (__accu1__.append, __accu1__, [k, (function () {
/* 000478 */ 							var __accu2__ = self;
/* 000478 */ 							return __call__ (__accu2__._load_from_data, __accu2__, v);
/* 000478 */ 						}) ()]);
/* 000478 */ 					}) ();
/* 000478 */ 				}
/* 000478 */ 			}
/* 000478 */ 			return dict (__accu0__);
/* 000478 */ 		}) ();
/* 000483 */ 		if (__t__ (__eq__ (objtype, 'FLMFragment'))) {
/* 000484 */ 			var ObjTypeFn = self._make_fragment;
/* 000484 */ 		}
/* 000485 */ 		else if (__t__ (__t__ (__in__ (objtype, latex_node_types_dict)) || __eq__ (objtype, 'LatexNodeList'))) {
/* 000486 */ 			var ObjTypeFn = (function __lambda__ () {
/* 000486 */ 				var kwargs = dict ();
/* 000486 */ 				if (arguments.length) {
/* 000486 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000486 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000486 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000486 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000486 */ 							switch (__attrib0__) {
/* 000486 */ 								default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000486 */ 							}
/* 000486 */ 						}
/* 000486 */ 						delete kwargs.__kwargtrans__;
/* 000486 */ 					}
/* 000486 */ 				}
/* 000486 */ 				else {
/* 000486 */ 				}
/* 000486 */ 				return (function () {
/* 000486 */ 					var __accu0__ = self;
/* 000486 */ 					return __call__ (__accu0__._make_node_instance, __accu0__, objtype, kwargs);
/* 000486 */ 				}) ();
/* 000486 */ 			});
/* 000486 */ 		}
/* 000487 */ 		else if (__t__ (__in__ (objtype, known_object_types))) {
/* 000488 */ 			var ObjTypeFn = __getitem__ (known_object_types, objtype);
/* 000488 */ 		}
/* 000489 */ 		else if (__t__ (__in__ (':', objtype))) {
/* 000491 */ 			var ObjTypeFn = __call__ (_import_class, null, objtype, __kwargtrans__ ({restype: restype}));
/* 000491 */ 		}
/* 000492 */ 		else {
/* 000493 */ 			var __except0__ = __call__ (ValueError, null, 'Unknown object type ‘{}’ for data loading'.format (objtype));
/* 000493 */ 			__except0__.__cause__ = null;
/* 000493 */ 			throw __except0__;
/* 000493 */ 		}
/* 000496 */ 		var obj = __call__ (ObjTypeFn, null, __kwargtrans__ (args));
/* 000497 */ 		return obj;
/* 000497 */ 	});},
/* 000499 */ 	get _make_node_instance () {return __get__ (this, function (self, nodetype, kwargs) {
/* 000499 */ 		if (arguments.length) {
/* 000499 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000499 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000499 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000499 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000499 */ 					switch (__attrib0__) {
/* 000499 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000499 */ 						case 'nodetype': var nodetype = __allkwargs0__ [__attrib0__]; break;
/* 000499 */ 						case 'kwargs': var kwargs = __allkwargs0__ [__attrib0__]; break;
/* 000499 */ 					}
/* 000499 */ 				}
/* 000499 */ 			}
/* 000499 */ 		}
/* 000499 */ 		else {
/* 000499 */ 		}
/* 000505 */ 		var base_kwargs = dict ({});
/* 000506 */ 		var attrib_kwargs = dict ({});
/* 000507 */ 		var __iterable0__ = (function () {
/* 000507 */ 			var __accu0__ = kwargs;
/* 000507 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000507 */ 		}) ();
/* 000507 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000507 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000507 */ 			var k = __left0__ [0];
/* 000507 */ 			var v = __left0__ [1];
/* 000508 */ 			if (__t__ ((function () {
/* 000508 */ 				var __accu0__ = k;
/* 000508 */ 				return __call__ (__accu0__.startswith, __accu0__, 'flm');
/* 000508 */ 			}) ())) {
/* 000509 */ 				__setitem__ (attrib_kwargs, k, v);
/* 000509 */ 			}
/* 000510 */ 			else {
/* 000511 */ 				__setitem__ (base_kwargs, k, v);
/* 000511 */ 			}
/* 000511 */ 		}
/* 000513 */ 		if (__t__ (__eq__ (nodetype, 'LatexNodeList'))) {
/* 000514 */ 			var ObjTypeFn = LatexNodeList;
/* 000515 */ 			var finalize_fn = self.environment.finalize_nodelist;
/* 000515 */ 		}
/* 000516 */ 		else {
/* 000517 */ 			var ObjTypeFn = __getitem__ (latex_node_types_dict, nodetype);
/* 000518 */ 			var finalize_fn = self.environment.finalize_node;
/* 000518 */ 		}
/* 000520 */ 		// pass;
/* 000525 */ 		var node = __call__ (ObjTypeFn, null, __kwargtrans__ (base_kwargs));
/* 000526 */ 		var __iterable0__ = (function () {
/* 000526 */ 			var __accu0__ = attrib_kwargs;
/* 000526 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000526 */ 		}) ();
/* 000526 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000526 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000526 */ 			var k = __left0__ [0];
/* 000526 */ 			var v = __left0__ [1];
/* 000527 */ 			__call__ (setattr, null, node, k, v);
/* 000527 */ 		}
/* 000529 */ 		var node = __call__ (finalize_fn, null, node);
/* 000531 */ 		// pass;
/* 000536 */ 		return node;
/* 000536 */ 	});},
/* 000538 */ 	get _make_fragment () {return __get__ (this, function (self) {
/* 000538 */ 		var kwargs = dict ();
/* 000538 */ 		if (arguments.length) {
/* 000538 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000538 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000538 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000538 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000538 */ 					switch (__attrib0__) {
/* 000538 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000538 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000538 */ 					}
/* 000538 */ 				}
/* 000538 */ 				delete kwargs.__kwargtrans__;
/* 000538 */ 			}
/* 000538 */ 		}
/* 000538 */ 		else {
/* 000538 */ 		}
/* 000539 */ 		var nodelist = (function () {
/* 000539 */ 			var __accu0__ = kwargs;
/* 000539 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'nodes');
/* 000539 */ 		}) ();
/* 000540 */ 		var flm_text = (function () {
/* 000540 */ 			var __accu0__ = kwargs;
/* 000540 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'flm_text');
/* 000540 */ 		}) ();
/* 000541 */ 		return __call__ (FLMFragment, null, __kwargtrans__ (__mergekwargtrans__ ({flm_text: nodelist, environment: self.environment, _flm_text_if_loading_nodes: flm_text}, kwargs)));
/* 000541 */ 	});}
/* 000541 */ });
/* 000006 */ 
//# sourceMappingURL=flm.flmdump.map