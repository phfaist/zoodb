/* 000001 */ // Transcrypt'ed from Python, 2026-06-30 21:51:22
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
/* 000006 */ export {SpecialsSpec, FLMLatexWalker, FLMParsingState, LatexNodeList, FLMParsingStateDeltaSetBlockLevel, LatexArgumentSpec, ParsingStateDelta, FLMSpecInfo, MacroSpec, ParsedArguments, latex_node_types, EnvironmentSpec, LatexContextDb, LatexParserBase, FLMFragment};
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
/* 000165 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000165 */ 		if (arguments.length) {
/* 000165 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000165 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000165 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000165 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000165 */ 					switch (__attrib0__) {
/* 000165 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000165 */ 						case 'environment': var environment = __allkwargs0__ [__attrib0__]; break;
/* 000165 */ 					}
/* 000165 */ 				}
/* 000165 */ 			}
/* 000165 */ 		}
/* 000165 */ 		else {
/* 000165 */ 		}
/* 000172 */ 		self.environment = environment;
/* 000173 */ 		(function () {
/* 000173 */ 			var __accu0__ = self;
/* 000173 */ 			return __call__ (__accu0__.py_clear, __accu0__);
/* 000173 */ 		}) ();
/* 000173 */ 	});},
/* 000175 */ 	get py_clear () {return __get__ (this, function (self) {
/* 000175 */ 		if (arguments.length) {
/* 000175 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000175 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000175 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000175 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000175 */ 					switch (__attrib0__) {
/* 000175 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000175 */ 					}
/* 000175 */ 				}
/* 000175 */ 			}
/* 000175 */ 		}
/* 000175 */ 		else {
/* 000175 */ 		}
/* 000180 */ 		self.data = dict ({'dumps': dict ({}), 'resources': dict ({}), '_dump': dict ({'version': _dump_version})});
/* 000180 */ 	});},
/* 000188 */ 	get get_data () {return __get__ (this, function (self) {
/* 000188 */ 		if (arguments.length) {
/* 000188 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000188 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000188 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000188 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000188 */ 					switch (__attrib0__) {
/* 000188 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000188 */ 					}
/* 000188 */ 				}
/* 000188 */ 			}
/* 000188 */ 		}
/* 000188 */ 		else {
/* 000188 */ 		}
/* 000189 */ 		return self.data;
/* 000189 */ 	});},
/* 000191 */ 	get add_object_dump () {return __get__ (this, function (self, key, obj) {
/* 000191 */ 		if (arguments.length) {
/* 000191 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000191 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000191 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000191 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000191 */ 					switch (__attrib0__) {
/* 000191 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000191 */ 						case 'key': var key = __allkwargs0__ [__attrib0__]; break;
/* 000191 */ 						case 'obj': var obj = __allkwargs0__ [__attrib0__]; break;
/* 000191 */ 					}
/* 000191 */ 				}
/* 000191 */ 			}
/* 000191 */ 		}
/* 000191 */ 		else {
/* 000191 */ 		}
/* 000192 */ 		var dump = (function () {
/* 000192 */ 			var __accu0__ = self;
/* 000192 */ 			return __call__ (__accu0__._make_object_dump, __accu0__, obj, __kwargtrans__ ({dumping_state: dict ({'object': obj})}));
/* 000192 */ 		}) ();
/* 000193 */ 		__setitem__ (__getitem__ (self.data, 'dumps'), key, dump);
/* 000193 */ 	});},
/* 000197 */ 	get _make_object_dump () {return __get__ (this, function (self, obj) {
/* 000197 */ 		var type_name = null;
/* 000197 */ 		if (arguments.length) {
/* 000197 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000197 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000197 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000197 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000197 */ 					switch (__attrib0__) {
/* 000197 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000197 */ 						case 'obj': var obj = __allkwargs0__ [__attrib0__]; break;
/* 000197 */ 						case 'dumping_state': var dumping_state = __allkwargs0__ [__attrib0__]; break;
/* 000197 */ 						case 'type_name': var type_name = __allkwargs0__ [__attrib0__]; break;
/* 000197 */ 					}
/* 000197 */ 				}
/* 000197 */ 			}
/* 000197 */ 		}
/* 000197 */ 		else {
/* 000197 */ 		}
/* 000199 */ 		var fieldnames = __call__ (set, null, obj._fields);
/* 000200 */ 		var __iterable0__ = __call__ (dir, null, obj);
/* 000200 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000200 */ 			var fieldname = __getitem__ (__iterable0__, __index0__);
/* 000201 */ 			if (__t__ ((function () {
/* 000201 */ 				var __accu0__ = fieldname;
/* 000201 */ 				return __call__ (__accu0__.startswith, __accu0__, 'flm');
/* 000201 */ 			}) ())) {
/* 000202 */ 				(function () {
/* 000202 */ 					var __accu0__ = fieldnames;
/* 000202 */ 					return __call__ (__accu0__.add, __accu0__, fieldname);
/* 000202 */ 				}) ();
/* 000202 */ 			}
/* 000202 */ 		}
/* 000204 */ 		if (__t__ (type_name === null)) {
/* 000205 */ 			var cls = obj.__class__;
/* 000206 */ 			var clsname = cls.__name__;
/* 000207 */ 			if (__t__ (__call__ (_is_known_serializable_object_type_names, null, clsname))) {
/* 000208 */ 				var type_name = clsname;
/* 000208 */ 			}
/* 000209 */ 			else {
/* 000210 */ 				var type_name = __call__ (_fullclassname, null, cls);
/* 000210 */ 			}
/* 000210 */ 		}
/* 000212 */ 		var objdata = dict ({'$type': type_name});
/* 000216 */ 		var get_obj_attr = function (fieldname) {
/* 000216 */ 			if (arguments.length) {
/* 000216 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000216 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000216 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000216 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000216 */ 						switch (__attrib0__) {
/* 000216 */ 							case 'fieldname': var fieldname = __allkwargs0__ [__attrib0__]; break;
/* 000216 */ 						}
/* 000216 */ 					}
/* 000216 */ 				}
/* 000216 */ 			}
/* 000216 */ 			else {
/* 000216 */ 			}
/* 000217 */ 			if (__t__ (__call__ (hasattr, null, obj, fieldname))) {
/* 000218 */ 				return __call__ (getattr, null, obj, fieldname);
/* 000218 */ 			}
/* 000219 */ 			if (__t__ (__t__ (__call__ (hasattr, null, obj, '_proxy_object')) && __call__ (hasattr, null, obj._proxy_object, fieldname))) {
/* 000220 */ 				return __call__ (getattr, null, obj._proxy_object, fieldname);
/* 000220 */ 			}
/* 000221 */ 			var __except0__ = __call__ (ValueError, null, __add__ (__add__ (__add__ ('Invalid object field: ', __call__ (repr, null, fieldname)), ' in '), __call__ (repr, null, obj)));
/* 000221 */ 			__except0__.__cause__ = null;
/* 000221 */ 			throw __except0__;
/* 000221 */ 		};
/* 000223 */ 		var __iterable0__ = __call__ (sorted, null, fieldnames);
/* 000223 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000223 */ 			var field = __getitem__ (__iterable0__, __index0__);
/* 000224 */ 			var val = (function () {
/* 000224 */ 				var __accu0__ = self;
/* 000224 */ 				return __call__ (__accu0__._make_dump, __accu0__, __call__ (get_obj_attr, null, field), __kwargtrans__ ({dumping_state: dumping_state}));
/* 000224 */ 			}) ();
/* 000225 */ 			if (__t__ (val === _Skip)) {
/* 000226 */ 				var val = dict ({'$skip': true});
/* 000226 */ 			}
/* 000227 */ 			__setitem__ (objdata, field, val);
/* 000227 */ 		}
/* 000229 */ 		return objdata;
/* 000229 */ 	});},
/* 000231 */ 	get _make_dump () {return __get__ (this, function (self, x) {
/* 000231 */ 		if (arguments.length) {
/* 000231 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000231 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000231 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000231 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000231 */ 					switch (__attrib0__) {
/* 000231 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000231 */ 						case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000231 */ 						case 'dumping_state': var dumping_state = __allkwargs0__ [__attrib0__]; break;
/* 000231 */ 					}
/* 000231 */ 				}
/* 000231 */ 			}
/* 000231 */ 		}
/* 000231 */ 		else {
/* 000231 */ 		}
/* 000233 */ 		if (__t__ (__call__ (isinstance, null, x, tuple ([tuple, list])))) {
/* 000234 */ 			var result = [];
/* 000235 */ 			var __iterable0__ = x;
/* 000235 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000235 */ 				var item = __getitem__ (__iterable0__, __index0__);
/* 000236 */ 				var value = (function () {
/* 000236 */ 					var __accu0__ = self;
/* 000236 */ 					return __call__ (__accu0__._make_dump, __accu0__, item, __kwargtrans__ ({dumping_state: dumping_state}));
/* 000236 */ 				}) ();
/* 000237 */ 				if (__t__ (value === _Skip)) {
/* 000238 */ 					var value = null;
/* 000238 */ 				}
/* 000239 */ 				(function () {
/* 000239 */ 					var __accu0__ = result;
/* 000239 */ 					return __call__ (__accu0__.append, __accu0__, value);
/* 000239 */ 				}) ();
/* 000239 */ 			}
/* 000240 */ 			return result;
/* 000240 */ 		}
/* 000242 */ 		if (__t__ (__call__ (isinstance, null, x, dict))) {
/* 000243 */ 			return (function () {
/* 000243 */ 				var __accu0__ = [];
/* 000244 */ 				var __iterable0__ = (function () {
/* 000244 */ 					var __accu1__ = x;
/* 000244 */ 					return __call__ (__accu1__.py_items, __accu1__);
/* 000244 */ 				}) ();
/* 000244 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000244 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000244 */ 					var k = __left0__ [0];
/* 000244 */ 					var v = __left0__ [1];
/* 000244 */ 					(function () {
/* 000244 */ 						var __accu1__ = __accu0__;
/* 000243 */ 						return __call__ (__accu1__.append, __accu1__, [k, (function () {
/* 000243 */ 							var __accu2__ = self;
/* 000243 */ 							return __call__ (__accu2__._make_dump, __accu2__, v, __kwargtrans__ ({dumping_state: dumping_state}));
/* 000243 */ 						}) ()]);
/* 000243 */ 					}) ();
/* 000243 */ 				}
/* 000243 */ 				return dict (__accu0__);
/* 000243 */ 			}) ();
/* 000243 */ 		}
/* 000246 */ 		if (__t__ (x === self.environment)) {
/* 000247 */ 			return dict ({'$flmenv': 'environment'});
/* 000247 */ 		}
/* 000249 */ 		if (__t__ (x === self.environment.parsing_state)) {
/* 000250 */ 			return dict ({'$flmenv': 'parsing_state'});
/* 000250 */ 		}
/* 000252 */ 		if (__t__ (__call__ (isinstance, null, x, FLMLatexWalker))) {
/* 000253 */ 			return (function () {
/* 000253 */ 				var __accu0__ = self;
/* 000256 */ 				return __call__ (__accu0__._make_resource, __accu0__, 'FLMLatexWalker', x, __call__ (_FakeDataLoadedFLMLatexWalker, null, x), __kwargtrans__ ({dumping_state: dumping_state}));
/* 000256 */ 			}) ();
/* 000256 */ 		}
/* 000260 */ 		if (__t__ (__call__ (isinstance, null, x, FLMSpecInfo))) {
/* 000261 */ 			return (function () {
/* 000261 */ 				var __accu0__ = self;
/* 000266 */ 				return __call__ (__accu0__._make_resource, __accu0__, 'FLMSpecInfo', x, x, __kwargtrans__ ({dumping_state: dumping_state, restype_dumptype: __call__ (_fullclassname, null, x.__class__)}));
/* 000266 */ 			}) ();
/* 000266 */ 		}
/* 000269 */ 		if (__t__ (__call__ (isinstance, null, x, FLMParsingState))) {
/* 000270 */ 			return (function () {
/* 000270 */ 				var __accu0__ = self;
/* 000270 */ 				return __call__ (__accu0__._make_resource, __accu0__, 'FLMParsingState', x, x, __kwargtrans__ ({dumping_state: dumping_state}));
/* 000270 */ 			}) ();
/* 000270 */ 		}
/* 000277 */ 		if (__t__ (__call__ (isinstance, null, x, latex_node_types))) {
/* 000278 */ 			return (function () {
/* 000278 */ 				var __accu0__ = self;
/* 000278 */ 				return __call__ (__accu0__._make_resource, __accu0__, 'LatexNode', x, x, __kwargtrans__ ({dumping_state: dumping_state, restype_dumptype: x.__class__.__name__}));
/* 000278 */ 			}) ();
/* 000278 */ 		}
/* 000286 */ 		if (__t__ (__call__ (isinstance, null, x, _skip_types))) {
/* 000287 */ 			return _Skip;
/* 000287 */ 		}
/* 000289 */ 		if (__t__ (__call__ (hasattr, null, x, '_fields'))) {
/* 000290 */ 			return (function () {
/* 000290 */ 				var __accu0__ = self;
/* 000290 */ 				return __call__ (__accu0__._make_object_dump, __accu0__, x, __kwargtrans__ ({dumping_state: dumping_state}));
/* 000290 */ 			}) ();
/* 000290 */ 		}
/* 000292 */ 		if (__t__ (__call__ (isinstance, null, x, tuple ([str, bool, int, float])))) {
/* 000293 */ 			return x;
/* 000293 */ 		}
/* 000295 */ 		if (__t__ (x === null)) {
/* 000296 */ 			return null;
/* 000296 */ 		}
/* 000298 */ 		if (__t__ (!__t__ ((x)))) {
/* 000300 */ 			return null;
/* 000300 */ 		}
/* 000302 */ 		var __except0__ = __call__ (ValueError, null, 'Cannot dump value {} of unsupported type'.format (__call__ (repr, null, x)));
/* 000302 */ 		__except0__.__cause__ = null;
/* 000302 */ 		throw __except0__;
/* 000302 */ 	});},
/* 000304 */ 	get _make_resource () {return __get__ (this, function (self, restype, y, ydata) {
/* 000304 */ 		var restype_dumptype = null;
/* 000304 */ 		if (arguments.length) {
/* 000304 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000304 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000304 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000304 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000304 */ 					switch (__attrib0__) {
/* 000304 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000304 */ 						case 'restype': var restype = __allkwargs0__ [__attrib0__]; break;
/* 000304 */ 						case 'y': var y = __allkwargs0__ [__attrib0__]; break;
/* 000304 */ 						case 'ydata': var ydata = __allkwargs0__ [__attrib0__]; break;
/* 000304 */ 						case 'restype_dumptype': var restype_dumptype = __allkwargs0__ [__attrib0__]; break;
/* 000304 */ 						case 'dumping_state': var dumping_state = __allkwargs0__ [__attrib0__]; break;
/* 000304 */ 					}
/* 000304 */ 				}
/* 000304 */ 			}
/* 000304 */ 		}
/* 000304 */ 		else {
/* 000304 */ 		}
/* 000305 */ 		if (__t__ (!__in__ (restype, __getitem__ (self.data, 'resources')))) {
/* 000306 */ 			__setitem__ (__getitem__ (self.data, 'resources'), restype, dict ({}));
/* 000306 */ 		}
/* 000308 */ 		var reskey = __call__ (str, null, __call__ (fn_unique_object_id, null, y));
/* 000309 */ 		if (__t__ (!__in__ (reskey, __getitem__ (__getitem__ (self.data, 'resources'), restype)))) {
/* 000313 */ 			__setitem__ (__getitem__ (__getitem__ (self.data, 'resources'), restype), reskey, '$currently-dumping');
/* 000315 */ 			var ydata_dump = (function () {
/* 000315 */ 				var __accu0__ = self;
/* 000315 */ 				return __call__ (__accu0__._make_object_dump, __accu0__, ydata, __kwargtrans__ ({dumping_state: dumping_state, type_name: (__t__ (restype_dumptype !== null) ? restype_dumptype : restype)}));
/* 000315 */ 			}) ();
/* 000320 */ 			__setitem__ (__getitem__ (__getitem__ (self.data, 'resources'), restype), reskey, ydata_dump);
/* 000320 */ 		}
/* 000322 */ 		return dict ({'$restype': restype, '$reskey': reskey});
/* 000322 */ 	});}
/* 000322 */ });
/* 000326 */ export var FLMDataLoadNotSupported =  __class__ ('FLMDataLoadNotSupported', [object], {
/* 000326 */ 	__module__: __name__,
/* 000326 */ });
/* 000340 */ export var FLMDataLoader =  __class__ ('FLMDataLoader', [object], {
/* 000340 */ 	__module__: __name__,
/* 000358 */ 	get __init__ () {return __get__ (this, function (self, data) {
/* 000358 */ 		if (arguments.length) {
/* 000358 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000358 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000358 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000358 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000358 */ 					switch (__attrib0__) {
/* 000358 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000358 */ 						case 'data': var data = __allkwargs0__ [__attrib0__]; break;
/* 000358 */ 						case 'environment': var environment = __allkwargs0__ [__attrib0__]; break;
/* 000358 */ 					}
/* 000358 */ 				}
/* 000358 */ 			}
/* 000358 */ 		}
/* 000358 */ 		else {
/* 000358 */ 		}
/* 000359 */ 		self.data = data;
/* 000360 */ 		self.environment = environment;
/* 000362 */ 		if (__t__ (__ne__ (__getitem__ (__getitem__ (self.data, '_dump'), 'version'), _dump_version))) {
/* 000363 */ 			var __except0__ = __call__ (ValueError, null, 'Dump version mismatch: {}, expected {}'.format (__getitem__ (__getitem__ (self.data, '_dump'), 'version'), _dump_version));
/* 000363 */ 			__except0__.__cause__ = null;
/* 000363 */ 			throw __except0__;
/* 000363 */ 		}
/* 000368 */ 		self._loaded_resources = dict ({});
/* 000369 */ 		if (__t__ (__t__ (__in__ ('resources', self.data)) && __getitem__ (self.data, 'resources'))) {
/* 000370 */ 			var __iterable0__ = __getitem__ (self.data, 'resources');
/* 000370 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000370 */ 				var restype = __getitem__ (__iterable0__, __index0__);
/* 000371 */ 				__setitem__ (self._loaded_resources, restype, dict ({}));
/* 000371 */ 			}
/* 000371 */ 		}
/* 000371 */ 	});},
/* 000374 */ 	get get_keys () {return __get__ (this, function (self) {
/* 000374 */ 		if (arguments.length) {
/* 000374 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000374 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000374 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000374 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000374 */ 					switch (__attrib0__) {
/* 000374 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000374 */ 					}
/* 000374 */ 				}
/* 000374 */ 			}
/* 000374 */ 		}
/* 000374 */ 		else {
/* 000374 */ 		}
/* 000375 */ 		return __call__ (list, null, (function () {
/* 000375 */ 			var __accu0__ = __call__ (dict, null, __getitem__ (self.data, 'dumps'));
/* 000375 */ 			return __call__ (__accu0__.py_keys, __accu0__);
/* 000375 */ 		}) ());
/* 000375 */ 	});},
/* 000377 */ 	get get_object_dump () {return __get__ (this, function (self, key) {
/* 000377 */ 		if (arguments.length) {
/* 000377 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000377 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000377 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000377 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000377 */ 					switch (__attrib0__) {
/* 000377 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000377 */ 						case 'key': var key = __allkwargs0__ [__attrib0__]; break;
/* 000377 */ 					}
/* 000377 */ 				}
/* 000377 */ 			}
/* 000377 */ 		}
/* 000377 */ 		else {
/* 000377 */ 		}
/* 000378 */ 		var data = __getitem__ (__getitem__ (self.data, 'dumps'), key);
/* 000379 */ 		return (function () {
/* 000379 */ 			var __accu0__ = self;
/* 000379 */ 			return __call__ (__accu0__._load_from_data, __accu0__, data);
/* 000379 */ 		}) ();
/* 000379 */ 	});},
/* 000383 */ 	get _load_from_data () {return __get__ (this, function (self, data) {
/* 000383 */ 		if (arguments.length) {
/* 000383 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000383 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000383 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000383 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000383 */ 					switch (__attrib0__) {
/* 000383 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000383 */ 						case 'data': var data = __allkwargs0__ [__attrib0__]; break;
/* 000383 */ 					}
/* 000383 */ 				}
/* 000383 */ 			}
/* 000383 */ 		}
/* 000383 */ 		else {
/* 000383 */ 		}
/* 000385 */ 		if (__t__ (data === null)) {
/* 000386 */ 			return null;
/* 000386 */ 		}
/* 000388 */ 		if (__t__ (__call__ (isinstance, null, data, list))) {
/* 000389 */ 			return (function () {
/* 000389 */ 				var __accu0__ = [];
/* 000389 */ 				var __iterable0__ = data;
/* 000389 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000389 */ 					var item = __getitem__ (__iterable0__, __index0__);
/* 000389 */ 					(function () {
/* 000389 */ 						var __accu1__ = __accu0__;
/* 000389 */ 						return __call__ (__accu1__.append, __accu1__, (function () {
/* 000389 */ 							var __accu2__ = self;
/* 000389 */ 							return __call__ (__accu2__._load_from_data, __accu2__, item);
/* 000389 */ 						}) ());
/* 000389 */ 					}) ();
/* 000389 */ 				}
/* 000389 */ 				return __accu0__;
/* 000389 */ 			}) ();
/* 000389 */ 		}
/* 000394 */ 		var special = null;
/* 000395 */ 		try {
/* 000396 */ 			var special = __getitem__ (data, '$flmenv');
/* 000396 */ 		}
/* 000396 */ 		catch (__except0__) {
/* 000398 */ 			// pass;
/* 000398 */ 		}
/* 000399 */ 		if (__t__ (special)) {
/* 000400 */ 			return (function () {
/* 000400 */ 				var __accu0__ = self;
/* 000400 */ 				return __call__ (__accu0__._flmenv_object, __accu0__, __getitem__ (data, '$flmenv'), data);
/* 000400 */ 			}) ();
/* 000400 */ 		}
/* 000402 */ 		var special = null;
/* 000403 */ 		try {
/* 000404 */ 			var special = __getitem__ (data, '$skip');
/* 000404 */ 		}
/* 000404 */ 		catch (__except0__) {
/* 000406 */ 			// pass;
/* 000406 */ 		}
/* 000407 */ 		if (__t__ (special)) {
/* 000408 */ 			return FLMDataLoadNotSupported;
/* 000408 */ 		}
/* 000410 */ 		var special = null;
/* 000411 */ 		try {
/* 000412 */ 			var special = __getitem__ (data, '$restype');
/* 000412 */ 		}
/* 000412 */ 		catch (__except0__) {
/* 000414 */ 			// pass;
/* 000414 */ 		}
/* 000415 */ 		if (__t__ (special)) {
/* 000416 */ 			return (function () {
/* 000416 */ 				var __accu0__ = self;
/* 000416 */ 				return __call__ (__accu0__._load_resource, __accu0__, special, __getitem__ (data, '$reskey'));
/* 000416 */ 			}) ();
/* 000416 */ 		}
/* 000418 */ 		var special = null;
/* 000419 */ 		try {
/* 000420 */ 			var special = __getitem__ (data, '$type');
/* 000420 */ 		}
/* 000420 */ 		catch (__except0__) {
/* 000422 */ 			// pass;
/* 000422 */ 		}
/* 000423 */ 		if (__t__ (special)) {
/* 000424 */ 			var datad = __call__ (dict, null, data);
/* 000425 */ 			var thetype = (function () {
/* 000425 */ 				var __accu0__ = datad;
/* 000425 */ 				return __call__ (__accu0__.py_pop, __accu0__, '$type');
/* 000425 */ 			}) ();
/* 000426 */ 			return (function () {
/* 000426 */ 				var __accu0__ = self;
/* 000426 */ 				return __call__ (__accu0__._load_object, __accu0__, thetype, datad);
/* 000426 */ 			}) ();
/* 000426 */ 		}
/* 000428 */ 		if (__t__ (__call__ (isinstance, null, data, tuple ([str, int, bool])))) {
/* 000429 */ 			return data;
/* 000429 */ 		}
/* 000431 */ 		if (__t__ (data === FLMDataLoadNotSupported)) {
/* 000432 */ 			return null;
/* 000432 */ 		}
/* 000435 */ 		return (function () {
/* 000435 */ 			var __accu0__ = [];
/* 000437 */ 			var __iterable0__ = (function () {
/* 000437 */ 				var __accu1__ = __call__ (dict, null, data);
/* 000437 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000437 */ 			}) ();
/* 000437 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000437 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000437 */ 				var k = __left0__ [0];
/* 000437 */ 				var v = __left0__ [1];
/* 000437 */ 				(function () {
/* 000437 */ 					var __accu1__ = __accu0__;
/* 000436 */ 					return __call__ (__accu1__.append, __accu1__, [k, (function () {
/* 000436 */ 						var __accu2__ = self;
/* 000436 */ 						return __call__ (__accu2__._load_from_data, __accu2__, v);
/* 000436 */ 					}) ()]);
/* 000436 */ 				}) ();
/* 000436 */ 			}
/* 000436 */ 			return dict (__accu0__);
/* 000436 */ 		}) ();
/* 000436 */ 	});},
/* 000441 */ 	get _flmenv_object () {return __get__ (this, function (self, flmenv_what, data) {
/* 000441 */ 		if (arguments.length) {
/* 000441 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000441 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000441 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000441 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000441 */ 					switch (__attrib0__) {
/* 000441 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000441 */ 						case 'flmenv_what': var flmenv_what = __allkwargs0__ [__attrib0__]; break;
/* 000441 */ 						case 'data': var data = __allkwargs0__ [__attrib0__]; break;
/* 000441 */ 					}
/* 000441 */ 				}
/* 000441 */ 			}
/* 000441 */ 		}
/* 000441 */ 		else {
/* 000441 */ 		}
/* 000442 */ 		if (__t__ (__eq__ (flmenv_what, ''))) {
/* 000443 */ 			return self.environment;
/* 000443 */ 		}
/* 000444 */ 		if (__t__ (__eq__ (flmenv_what, 'parsing_state'))) {
/* 000445 */ 			return self.environment.parsing_state;
/* 000445 */ 		}
/* 000446 */ 		var __except0__ = __call__ (ValueError, null, __add__ ('Unknown/invalid flmenv: ', __call__ (repr, null, data)));
/* 000446 */ 		__except0__.__cause__ = null;
/* 000446 */ 		throw __except0__;
/* 000446 */ 	});},
/* 000449 */ 	get _load_resource () {return __get__ (this, function (self, restype, reskey) {
/* 000449 */ 		if (arguments.length) {
/* 000449 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000449 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000449 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000449 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000449 */ 					switch (__attrib0__) {
/* 000449 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000449 */ 						case 'restype': var restype = __allkwargs0__ [__attrib0__]; break;
/* 000449 */ 						case 'reskey': var reskey = __allkwargs0__ [__attrib0__]; break;
/* 000449 */ 					}
/* 000449 */ 				}
/* 000449 */ 			}
/* 000449 */ 		}
/* 000449 */ 		else {
/* 000449 */ 		}
/* 000451 */ 		if (__t__ (!__in__ (restype, self._loaded_resources))) {
/* 000452 */ 			__setitem__ (self._loaded_resources, restype, dict ({}));
/* 000452 */ 		}
/* 000454 */ 		if (__t__ (!__in__ (reskey, __getitem__ (self._loaded_resources, restype)))) {
/* 000457 */ 			__setitem__ (__getitem__ (self._loaded_resources, restype), reskey, (function () {
/* 000457 */ 				var __accu0__ = self;
/* 000457 */ 				return __call__ (__accu0__._load_resource_from_data, __accu0__, restype, reskey);
/* 000457 */ 			}) ());
/* 000457 */ 		}
/* 000460 */ 		return __getitem__ (__getitem__ (self._loaded_resources, restype), reskey);
/* 000460 */ 	});},
/* 000462 */ 	get _load_resource_from_data () {return __get__ (this, function (self, restype, reskey) {
/* 000462 */ 		if (arguments.length) {
/* 000462 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000462 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000462 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000462 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000462 */ 					switch (__attrib0__) {
/* 000462 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000462 */ 						case 'restype': var restype = __allkwargs0__ [__attrib0__]; break;
/* 000462 */ 						case 'reskey': var reskey = __allkwargs0__ [__attrib0__]; break;
/* 000462 */ 					}
/* 000462 */ 				}
/* 000462 */ 			}
/* 000462 */ 		}
/* 000462 */ 		else {
/* 000462 */ 		}
/* 000464 */ 		if (__t__ (!__in__ (restype, __getitem__ (self.data, 'resources')))) {
/* 000465 */ 			var __except0__ = __call__ (ValueError, null, 'Invalid internal resource reference type {}'.format (restype));
/* 000465 */ 			__except0__.__cause__ = null;
/* 000465 */ 			throw __except0__;
/* 000465 */ 		}
/* 000466 */ 		if (__t__ (!__in__ (reskey, __getitem__ (__getitem__ (self.data, 'resources'), restype)))) {
/* 000467 */ 			var __except0__ = __call__ (ValueError, null, 'Invalid internal resource reference key {}/{}'.format (restype, reskey));
/* 000467 */ 			__except0__.__cause__ = null;
/* 000467 */ 			throw __except0__;
/* 000467 */ 		}
/* 000469 */ 		var resdata = __getitem__ (__getitem__ (__getitem__ (self.data, 'resources'), restype), reskey);
/* 000471 */ 		if (__t__ (__eq__ (restype, 'FLMLatexWalker'))) {
/* 000472 */ 			var resdata2 = __call__ (dict, null, resdata);
/* 000473 */ 			var the_type = (function () {
/* 000473 */ 				var __accu0__ = resdata2;
/* 000473 */ 				return __call__ (__accu0__.py_pop, __accu0__, '$type');
/* 000473 */ 			}) ();
/* 000474 */ 			if (__t__ (__ne__ (the_type, 'FLMLatexWalker'))) {
/* 000475 */ 				var __except0__ = __call__ (ValueError, null, "flmdump: Can't create LatexWalker instances other than FLMLatexWalker");
/* 000475 */ 				__except0__.__cause__ = null;
/* 000475 */ 				throw __except0__;
/* 000475 */ 			}
/* 000478 */ 			return (function () {
/* 000478 */ 				var __accu0__ = self.environment;
/* 000478 */ 				return __call__ (__accu0__.make_latex_walker, __accu0__, __kwargtrans__ (resdata2));
/* 000478 */ 			}) ();
/* 000478 */ 		}
/* 000482 */ 		if (__t__ (__eq__ (restype, 'FLMParsingState'))) {
/* 000483 */ 			return (function () {
/* 000483 */ 				var __accu0__ = self;
/* 000485 */ 				return __call__ (__accu0__._load_object, __accu0__, restype, __call__ (dict, null, resdata, __kwargtrans__ ({latex_context: FLMDataLoadNotSupported})));
/* 000485 */ 			}) ();
/* 000485 */ 		}
/* 000488 */ 		if (__t__ (__eq__ (restype, 'FLMSpecInfo'))) {
/* 000489 */ 			var resdata2 = __call__ (dict, null, resdata);
/* 000490 */ 			var the_type = (function () {
/* 000490 */ 				var __accu0__ = resdata2;
/* 000490 */ 				return __call__ (__accu0__.py_pop, __accu0__, '$type');
/* 000490 */ 			}) ();
/* 000491 */ 			return (function () {
/* 000491 */ 				var __accu0__ = self;
/* 000491 */ 				return __call__ (__accu0__._load_object, __accu0__, the_type, resdata2, __kwargtrans__ ({restype: restype}));
/* 000491 */ 			}) ();
/* 000491 */ 		}
/* 000497 */ 		if (__t__ (__eq__ (restype, 'LatexNode'))) {
/* 000498 */ 			var resdata2 = __call__ (dict, null, resdata);
/* 000499 */ 			var the_type = (function () {
/* 000499 */ 				var __accu0__ = resdata2;
/* 000499 */ 				return __call__ (__accu0__.py_pop, __accu0__, '$type');
/* 000499 */ 			}) ();
/* 000500 */ 			return (function () {
/* 000500 */ 				var __accu0__ = self;
/* 000500 */ 				return __call__ (__accu0__._load_object, __accu0__, the_type, resdata2);
/* 000500 */ 			}) ();
/* 000500 */ 		}
/* 000505 */ 		var __except0__ = __call__ (ValueError, null, 'Unknown data resource type to load: {}'.format (restype));
/* 000505 */ 		__except0__.__cause__ = null;
/* 000505 */ 		throw __except0__;
/* 000505 */ 	});},
/* 000508 */ 	get _load_object () {return __get__ (this, function (self, objtype, data) {
/* 000508 */ 		var restype = null;
/* 000508 */ 		if (arguments.length) {
/* 000508 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000508 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000508 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000508 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000508 */ 					switch (__attrib0__) {
/* 000508 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000508 */ 						case 'objtype': var objtype = __allkwargs0__ [__attrib0__]; break;
/* 000508 */ 						case 'data': var data = __allkwargs0__ [__attrib0__]; break;
/* 000508 */ 						case 'restype': var restype = __allkwargs0__ [__attrib0__]; break;
/* 000508 */ 					}
/* 000508 */ 				}
/* 000508 */ 			}
/* 000508 */ 		}
/* 000508 */ 		else {
/* 000508 */ 		}
/* 000510 */ 		var data = __call__ (dict, null, data);
/* 000512 */ 		var args = (function () {
/* 000512 */ 			var __accu0__ = [];
/* 000514 */ 			var __iterable0__ = (function () {
/* 000514 */ 				var __accu1__ = data;
/* 000514 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000514 */ 			}) ();
/* 000514 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000514 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000514 */ 				var k = __left0__ [0];
/* 000514 */ 				var v = __left0__ [1];
/* 000515 */ 				if (__t__ (!__t__ (((function () {
/* 000515 */ 					var __accu1__ = k;
/* 000515 */ 					return __call__ (__accu1__.startswith, __accu1__, '$');
/* 000515 */ 				}) ())))) {
/* 000515 */ 					(function () {
/* 000515 */ 						var __accu1__ = __accu0__;
/* 000513 */ 						return __call__ (__accu1__.append, __accu1__, [k, (function () {
/* 000513 */ 							var __accu2__ = self;
/* 000513 */ 							return __call__ (__accu2__._load_from_data, __accu2__, v);
/* 000513 */ 						}) ()]);
/* 000513 */ 					}) ();
/* 000513 */ 				}
/* 000513 */ 			}
/* 000513 */ 			return dict (__accu0__);
/* 000513 */ 		}) ();
/* 000518 */ 		if (__t__ (__eq__ (objtype, 'FLMFragment'))) {
/* 000519 */ 			var ObjTypeFn = self._make_fragment;
/* 000519 */ 		}
/* 000520 */ 		else if (__t__ (__t__ (__in__ (objtype, latex_node_types_dict)) || __eq__ (objtype, 'LatexNodeList'))) {
/* 000521 */ 			var ObjTypeFn = (function __lambda__ () {
/* 000521 */ 				var kwargs = dict ();
/* 000521 */ 				if (arguments.length) {
/* 000521 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000521 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000521 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000521 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000521 */ 							switch (__attrib0__) {
/* 000521 */ 								default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000521 */ 							}
/* 000521 */ 						}
/* 000521 */ 						delete kwargs.__kwargtrans__;
/* 000521 */ 					}
/* 000521 */ 				}
/* 000521 */ 				else {
/* 000521 */ 				}
/* 000521 */ 				return (function () {
/* 000521 */ 					var __accu0__ = self;
/* 000521 */ 					return __call__ (__accu0__._make_node_instance, __accu0__, objtype, kwargs);
/* 000521 */ 				}) ();
/* 000521 */ 			});
/* 000521 */ 		}
/* 000522 */ 		else if (__t__ (__in__ (objtype, known_object_types))) {
/* 000523 */ 			var ObjTypeFn = __getitem__ (known_object_types, objtype);
/* 000523 */ 		}
/* 000524 */ 		else if (__t__ (__in__ (':', objtype))) {
/* 000526 */ 			var ObjTypeFn = __call__ (_import_class, null, objtype, __kwargtrans__ ({restype: restype}));
/* 000526 */ 		}
/* 000527 */ 		else {
/* 000528 */ 			var __except0__ = __call__ (ValueError, null, 'Unknown object type ‘{}’ for data loading'.format (objtype));
/* 000528 */ 			__except0__.__cause__ = null;
/* 000528 */ 			throw __except0__;
/* 000528 */ 		}
/* 000531 */ 		var obj = __call__ (ObjTypeFn, null, __kwargtrans__ (args));
/* 000532 */ 		return obj;
/* 000532 */ 	});},
/* 000534 */ 	get _make_node_instance () {return __get__ (this, function (self, nodetype, kwargs) {
/* 000534 */ 		if (arguments.length) {
/* 000534 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000534 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000534 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000534 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000534 */ 					switch (__attrib0__) {
/* 000534 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000534 */ 						case 'nodetype': var nodetype = __allkwargs0__ [__attrib0__]; break;
/* 000534 */ 						case 'kwargs': var kwargs = __allkwargs0__ [__attrib0__]; break;
/* 000534 */ 					}
/* 000534 */ 				}
/* 000534 */ 			}
/* 000534 */ 		}
/* 000534 */ 		else {
/* 000534 */ 		}
/* 000540 */ 		var base_kwargs = dict ({});
/* 000541 */ 		var attrib_kwargs = dict ({});
/* 000542 */ 		var __iterable0__ = (function () {
/* 000542 */ 			var __accu0__ = kwargs;
/* 000542 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000542 */ 		}) ();
/* 000542 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000542 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000542 */ 			var k = __left0__ [0];
/* 000542 */ 			var v = __left0__ [1];
/* 000543 */ 			if (__t__ ((function () {
/* 000543 */ 				var __accu0__ = k;
/* 000543 */ 				return __call__ (__accu0__.startswith, __accu0__, 'flm');
/* 000543 */ 			}) ())) {
/* 000544 */ 				__setitem__ (attrib_kwargs, k, v);
/* 000544 */ 			}
/* 000545 */ 			else {
/* 000546 */ 				__setitem__ (base_kwargs, k, v);
/* 000546 */ 			}
/* 000546 */ 		}
/* 000548 */ 		if (__t__ (__eq__ (nodetype, 'LatexNodeList'))) {
/* 000549 */ 			var ObjTypeFn = LatexNodeList;
/* 000550 */ 			var finalize_fn = self.environment.finalize_nodelist;
/* 000550 */ 		}
/* 000551 */ 		else {
/* 000552 */ 			var ObjTypeFn = __getitem__ (latex_node_types_dict, nodetype);
/* 000553 */ 			var finalize_fn = self.environment.finalize_node;
/* 000553 */ 		}
/* 000555 */ 		// pass;
/* 000560 */ 		var node = __call__ (ObjTypeFn, null, __kwargtrans__ (base_kwargs));
/* 000561 */ 		var __iterable0__ = (function () {
/* 000561 */ 			var __accu0__ = attrib_kwargs;
/* 000561 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000561 */ 		}) ();
/* 000561 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000561 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000561 */ 			var k = __left0__ [0];
/* 000561 */ 			var v = __left0__ [1];
/* 000562 */ 			__call__ (setattr, null, node, k, v);
/* 000562 */ 		}
/* 000564 */ 		var node = __call__ (finalize_fn, null, node);
/* 000566 */ 		// pass;
/* 000571 */ 		return node;
/* 000571 */ 	});},
/* 000573 */ 	get _make_fragment () {return __get__ (this, function (self) {
/* 000573 */ 		var kwargs = dict ();
/* 000573 */ 		if (arguments.length) {
/* 000573 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000573 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000573 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000573 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000573 */ 					switch (__attrib0__) {
/* 000573 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000573 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000573 */ 					}
/* 000573 */ 				}
/* 000573 */ 				delete kwargs.__kwargtrans__;
/* 000573 */ 			}
/* 000573 */ 		}
/* 000573 */ 		else {
/* 000573 */ 		}
/* 000574 */ 		var nodelist = (function () {
/* 000574 */ 			var __accu0__ = kwargs;
/* 000574 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'nodes');
/* 000574 */ 		}) ();
/* 000575 */ 		var flm_text = (function () {
/* 000575 */ 			var __accu0__ = kwargs;
/* 000575 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'flm_text');
/* 000575 */ 		}) ();
/* 000576 */ 		return __call__ (FLMFragment, null, __kwargtrans__ (__mergekwargtrans__ ({flm_text: nodelist, environment: self.environment, _flm_text_if_loading_nodes: flm_text}, kwargs)));
/* 000576 */ 	});}
/* 000576 */ });
/* 000006 */ 
//# sourceMappingURL=flm.flmdump.map