/* 000001 */ // Transcrypt'ed from Python, 2025-02-10 21:22:00
/* 000006 */ var logging = {};
/* 000006 */ var re = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000016 */ import {FLMNodesFlmRecomposer} from './flm.flmrecomposer._recomposer.js';
/* 000011 */ import {LatexCharsNode, LatexGroupNode} from './pylatexenc.latexnodes.nodes.js';
/* 000008 */ import * as __module_logging__ from './logging.js';
/* 000008 */ __nest__ (logging, '', __module_logging__);
/* 000006 */ import * as __module_re__ from './re.js';
/* 000006 */ __nest__ (re, '', __module_re__);
/* 000006 */ export {LatexGroupNode, LatexCharsNode, FLMNodesFlmRecomposer};
/* 000001 */ var __name__ = 'flm.flmrecomposer.purelatex';
/* 000009 */ export var logger = (function () {
/* 000009 */ 	var __accu0__ = logging;
/* 000009 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000009 */ }) ();
/* 000020 */ export var _default_rx_escape_chars_text = (function () {
/* 000020 */ 	var __accu0__ = re;
/* 000020 */ 	return __call__ (__accu0__.compile, __accu0__, '[\\$&#\\^_%]');
/* 000020 */ }) ();
/* 000028 */ export var _Dict = dict;
/* 000031 */ function _JsMapDict_createMap() { return new Map(); }; function _JsMapDict_get(map, k, dflt) { if (map.has(k)) { return map.get(k) } return dflt; };
/* 000032 */ export var JsMapDict =  __class__ ('JsMapDict', [object], {
/* 000032 */ 	__module__: __name__,
/* 000033 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000033 */ 		if (arguments.length) {
/* 000033 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000033 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000033 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000033 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000033 */ 					switch (__attrib0__) {
/* 000033 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000033 */ 					}
/* 000033 */ 				}
/* 000033 */ 			}
/* 000033 */ 		}
/* 000033 */ 		else {
/* 000033 */ 		}
/* 000034 */ 		self.map = __call__ (_JsMapDict_createMap, null);
/* 000034 */ 	});},
/* 000035 */ 	get py_get () {return __get__ (this, function (self, k, dflt) {
/* 000035 */ 		if (typeof dflt == 'undefined' || (dflt != null && dflt.hasOwnProperty ("__kwargtrans__"))) {;
/* 000035 */ 			var dflt = null;
/* 000035 */ 		};
/* 000035 */ 		if (arguments.length) {
/* 000035 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000035 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000035 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000035 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000035 */ 					switch (__attrib0__) {
/* 000035 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000035 */ 						case 'k': var k = __allkwargs0__ [__attrib0__]; break;
/* 000035 */ 						case 'dflt': var dflt = __allkwargs0__ [__attrib0__]; break;
/* 000035 */ 					}
/* 000035 */ 				}
/* 000035 */ 			}
/* 000035 */ 		}
/* 000035 */ 		else {
/* 000035 */ 		}
/* 000036 */ 		return __call__ (_JsMapDict_get, null, self.map, k, dflt);
/* 000036 */ 	});},
/* 000037 */ 	get __setattr__ () {return __get__ (this, function (self, k, v) {
/* 000037 */ 		if (arguments.length) {
/* 000037 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000037 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000037 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000037 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000037 */ 					switch (__attrib0__) {
/* 000037 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000037 */ 						case 'k': var k = __allkwargs0__ [__attrib0__]; break;
/* 000037 */ 						case 'v': var v = __allkwargs0__ [__attrib0__]; break;
/* 000037 */ 					}
/* 000037 */ 				}
/* 000037 */ 			}
/* 000037 */ 		}
/* 000037 */ 		else {
/* 000037 */ 		}
/* 000038 */ 		(function () {
/* 000038 */ 			var __accu0__ = self.map;
/* 000038 */ 			return __call__ (__accu0__.set, __accu0__, k, v);
/* 000038 */ 		}) ();
/* 000038 */ 	});}
/* 000038 */ });
/* 000040 */ var _Dict = JsMapDict;
/* 000044 */ export var FLMPureLatexRecomposer =  __class__ ('FLMPureLatexRecomposer', [FLMNodesFlmRecomposer], {
/* 000044 */ 	__module__: __name__,
/* 000049 */ 	get __init__ () {return __get__ (this, function (self, options) {
/* 000049 */ 		if (arguments.length) {
/* 000049 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000049 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000049 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000049 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000049 */ 					switch (__attrib0__) {
/* 000049 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000049 */ 						case 'options': var options = __allkwargs0__ [__attrib0__]; break;
/* 000049 */ 					}
/* 000049 */ 				}
/* 000049 */ 			}
/* 000049 */ 		}
/* 000049 */ 		else {
/* 000049 */ 		}
/* 000050 */ 		__call__ (__call__ (__super__, null, FLMPureLatexRecomposer, '__init__'), null, self);
/* 000052 */ 		if (__t__ (options === null)) {
/* 000053 */ 			var options = dict ({});
/* 000053 */ 		}
/* 000055 */ 		self.options = __call__ (dict, null, options);
/* 000056 */ 		self.options_recomposer = __call__ (dict, null, (function () {
/* 000056 */ 			var __accu0__ = options;
/* 000056 */ 			return __call__ (__accu0__.py_get, __accu0__, 'recomposer', dict ({}));
/* 000056 */ 		}) ());
/* 000057 */ 		self.render_context = (function () {
/* 000057 */ 			var __accu0__ = options;
/* 000057 */ 			return __call__ (__accu0__.py_get, __accu0__, 'render_context', null);
/* 000057 */ 		}) ();
/* 000059 */ 		self.packages = dict ({});
/* 000060 */ 		self.safe_to_label = dict ({});
/* 000061 */ 		self.label_to_safe = dict ({});
/* 000062 */ 		self.safe_label_counter = 1;
/* 000066 */ 		var safe_ref_types = __call__ (dict, null, (function () {
/* 000066 */ 			var __accu0__ = self.options_recomposer;
/* 000066 */ 			return __call__ (__accu0__.py_get, __accu0__, 'safe_label_ref_types', dict ({}));
/* 000066 */ 		}) ());
/* 000069 */ 		var __iterable0__ = __call__ (list, null, (function () {
/* 000069 */ 			var __accu0__ = safe_ref_types;
/* 000069 */ 			return __call__ (__accu0__.py_keys, __accu0__);
/* 000069 */ 		}) ());
/* 000069 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000069 */ 			var ref_domain = __getitem__ (__iterable0__, __index0__);
/* 000070 */ 			var dic = __call__ (dict, null, __getitem__ (safe_ref_types, ref_domain));
/* 000071 */ 			__setitem__ (safe_ref_types, ref_domain, dic);
/* 000071 */ 		}
/* 000072 */ 		self.safe_ref_types = safe_ref_types;
/* 000072 */ 	});},
/* 000075 */ 	get recompose_pure_latex () {return __get__ (this, function (self, node) {
/* 000075 */ 		if (arguments.length) {
/* 000075 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000075 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000075 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000075 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000075 */ 					switch (__attrib0__) {
/* 000075 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000075 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000075 */ 					}
/* 000075 */ 				}
/* 000075 */ 			}
/* 000075 */ 		}
/* 000075 */ 		else {
/* 000075 */ 		}
/* 000076 */ 		var latex = (function () {
/* 000076 */ 			var __accu0__ = self;
/* 000076 */ 			return __call__ (__accu0__.start, __accu0__, node);
/* 000076 */ 		}) ();
/* 000077 */ 		return dict ({'latex': latex, 'packages': self.packages});
/* 000077 */ 	});},
/* 000084 */ 	rx_escape_chars_text: _default_rx_escape_chars_text,
/* 000086 */ 	get get_options () {return __get__ (this, function (self, key) {
/* 000086 */ 		if (arguments.length) {
/* 000086 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000086 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000086 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000086 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000086 */ 					switch (__attrib0__) {
/* 000086 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000086 */ 						case 'key': var key = __allkwargs0__ [__attrib0__]; break;
/* 000086 */ 					}
/* 000086 */ 				}
/* 000086 */ 			}
/* 000086 */ 		}
/* 000086 */ 		else {
/* 000086 */ 		}
/* 000087 */ 		return __call__ (dict, null, (function () {
/* 000087 */ 			var __accu0__ = self.options;
/* 000087 */ 			return __call__ (__accu0__.py_get, __accu0__, key, dict ({}));
/* 000087 */ 		}) ());
/* 000087 */ 	});},
/* 000089 */ 	get ensure_latex_package () {return __get__ (this, function (self, packagename, options) {
/* 000089 */ 		if (typeof options == 'undefined' || (options != null && options.hasOwnProperty ("__kwargtrans__"))) {;
/* 000089 */ 			var options = null;
/* 000089 */ 		};
/* 000089 */ 		if (arguments.length) {
/* 000089 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000089 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000089 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000089 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000089 */ 					switch (__attrib0__) {
/* 000089 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000089 */ 						case 'packagename': var packagename = __allkwargs0__ [__attrib0__]; break;
/* 000089 */ 						case 'options': var options = __allkwargs0__ [__attrib0__]; break;
/* 000089 */ 					}
/* 000089 */ 				}
/* 000089 */ 			}
/* 000089 */ 		}
/* 000089 */ 		else {
/* 000089 */ 		}
/* 000090 */ 		if (__t__ (!__in__ (packagename, self.packages))) {
/* 000091 */ 			__setitem__ (self.packages, packagename, dict ({'options': options}));
/* 000094 */ 			return ;
/* 000094 */ 		}
/* 000095 */ 		if (__t__ (options === null)) {
/* 000097 */ 			return ;
/* 000097 */ 		}
/* 000098 */ 		if (__t__ (__getitem__ (__getitem__ (self.packages, packagename), 'options') === null)) {
/* 000100 */ 			__setitem__ (__getitem__ (self.packages, packagename), 'options', options);
/* 000100 */ 		}
/* 000101 */ 		if (__t__ (__eq__ (__getitem__ (__getitem__ (self.packages, packagename), 'options'), options))) {
/* 000103 */ 			return ;
/* 000103 */ 		}
/* 000105 */ 		var __except0__ = __call__ (ValueError, null, 'Conflicting pure latex package options requested for package {} in pure latex FLM export: ‘{}’ ≠ ‘{}’'.format (packagename, __getitem__ (__getitem__ (self.packages, packagename), 'options'), options));
/* 000105 */ 		__except0__.__cause__ = null;
/* 000105 */ 		throw __except0__;
/* 000105 */ 	});},
/* 000110 */ 	get make_safe_label () {return __get__ (this, function (self, ref_domain, ref_type, ref_label) {
/* 000110 */ 		if (arguments.length) {
/* 000110 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000110 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000110 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000110 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000110 */ 					switch (__attrib0__) {
/* 000110 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000110 */ 						case 'ref_domain': var ref_domain = __allkwargs0__ [__attrib0__]; break;
/* 000110 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000110 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000110 */ 					}
/* 000110 */ 				}
/* 000110 */ 			}
/* 000110 */ 		}
/* 000110 */ 		else {
/* 000110 */ 		}
/* 000113 */ 		var ref_full_label = '{}:{}'.format (ref_type, ref_label);
/* 000115 */ 		if (__t__ (__t__ (__in__ (ref_domain, self.safe_ref_types)) && (function () {
/* 000115 */ 			var __accu0__ = __getitem__ (self.safe_ref_types, ref_domain);
/* 000115 */ 			return __call__ (__accu0__.py_get, __accu0__, ref_type);
/* 000115 */ 		}) ())) {
/* 000117 */ 			return dict ({'safe_label': ref_full_label});
/* 000117 */ 		}
/* 000119 */ 		if (__t__ (!__in__ (ref_domain, self.label_to_safe))) {
/* 000120 */ 			__setitem__ (self.label_to_safe, ref_domain, __call__ (_Dict, null));
/* 000121 */ 			__setitem__ (self.safe_to_label, ref_domain, __call__ (_Dict, null));
/* 000121 */ 		}
/* 000123 */ 		var label_to_safe_map = __getitem__ (self.label_to_safe, ref_domain);
/* 000124 */ 		var value = (function () {
/* 000124 */ 			var __accu0__ = label_to_safe_map;
/* 000124 */ 			return __call__ (__accu0__.py_get, __accu0__, ref_full_label, null);
/* 000124 */ 		}) ();
/* 000125 */ 		if (__t__ (value !== null)) {
/* 000127 */ 			return value;
/* 000127 */ 		}
/* 000129 */ 		var safe = '{}{}'.format (ref_domain, __call__ (str, null, self.safe_label_counter));
/* 000130 */ 		self.safe_label_counter = __call__ (__iadd__, null, self.safe_label_counter, 1);
/* 000132 */ 		var sinfo = dict ({'safe_label': safe});
/* 000134 */ 		__setitem__ (__getitem__ (self.label_to_safe, ref_domain), ref_full_label, sinfo);
/* 000135 */ 		__setitem__ (__getitem__ (self.safe_to_label, ref_domain), safe, ref_full_label);
/* 000137 */ 		return sinfo;
/* 000137 */ 	});},
/* 000143 */ 	get recompose_delimited_nodelist () {return __get__ (this, function (self, delimiters, nodelist, n) {
/* 000143 */ 		if (arguments.length) {
/* 000143 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000143 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000143 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000143 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000143 */ 					switch (__attrib0__) {
/* 000143 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000143 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000143 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000143 */ 						case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000143 */ 					}
/* 000143 */ 				}
/* 000143 */ 			}
/* 000143 */ 		}
/* 000143 */ 		else {
/* 000143 */ 		}
/* 000144 */ 		var need_protective_braces = false;
/* 000145 */ 		if (__t__ (__t__ (__eq__ (__getitem__ (delimiters, 0), '[')) && __eq__ (__getitem__ (delimiters, 1), ']'))) {
/* 000146 */ 			if (__t__ (__t__ (__eq__ (__call__ (len, null, n.nodelist), 1)) && __t__ ((function () {
/* 000146 */ 				var __accu0__ = __getitem__ (n.nodelist, 0);
/* 000146 */ 				return __call__ (__accu0__.isNodeType, __accu0__, LatexGroupNode);
/* 000146 */ 			}) ()) && __eq__ (__getitem__ (__getitem__ (n.nodelist, 0).delimiters, 0), '{'))) {
/* 000149 */ 				var need_protective_braces = false;
/* 000149 */ 			}
/* 000150 */ 			else if (__t__ (__t__ (__eq__ (__call__ (len, null, n.nodelist), 1)) && __t__ ((function () {
/* 000150 */ 				var __accu0__ = __getitem__ (n.nodelist, 0);
/* 000150 */ 				return __call__ (__accu0__.isNodeType, __accu0__, LatexCharsNode);
/* 000151 */ 			}) ()) && (function () {
/* 000151 */ 				var __accu0__ = _rx_safe_chars_optarg;
/* 000151 */ 				return __call__ (__accu0__.match, __accu0__, __getitem__ (n.nodelist, 0).chars);
/* 000151 */ 			}) () !== null)) {
/* 000153 */ 				var need_protective_braces = false;
/* 000153 */ 			}
/* 000154 */ 			else {
/* 000155 */ 				var need_protective_braces = true;
/* 000155 */ 			}
/* 000155 */ 		}
/* 000157 */ 		if (__t__ (need_protective_braces)) {
/* 000158 */ 			var delimiters = tuple (['[{', '}]']);
/* 000158 */ 		}
/* 000160 */ 		return __call__ (__call__ (__super__, null, FLMPureLatexRecomposer, 'recompose_delimited_nodelist'), null, self, delimiters, nodelist, n);
/* 000160 */ 	});},
/* 000165 */ 	recompose_specinfo_method: 'recompose_pure_latex'
/* 000165 */ });
/* 000170 */ export var _rx_safe_chars_optarg = (function () {
/* 000170 */ 	var __accu0__ = re;
/* 000170 */ 	return __call__ (__accu0__.compile, __accu0__, '[-a-zA-Z0-9_+ !@#$&*()<>,./:;"\'|]*');
/* 000170 */ }) ();
/* 000006 */ 
//# sourceMappingURL=flm.flmrecomposer.purelatex.map