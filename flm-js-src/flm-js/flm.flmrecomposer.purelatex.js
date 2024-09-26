/* 000001 */ // Transcrypt'ed from Python, 2024-09-26 17:30:21
/* 000006 */ var logging = {};
/* 000006 */ var re = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000013 */ import {FLMNodesFlmRecomposer} from './flm.flmrecomposer._recomposer.js';
/* 000011 */ import {LatexGroupNode} from './pylatexenc.latexnodes.nodes.js';
/* 000008 */ import * as __module_logging__ from './logging.js';
/* 000008 */ __nest__ (logging, '', __module_logging__);
/* 000006 */ import * as __module_re__ from './re.js';
/* 000006 */ __nest__ (re, '', __module_re__);
/* 000006 */ export {FLMNodesFlmRecomposer, LatexGroupNode};
/* 000001 */ var __name__ = 'flm.flmrecomposer.purelatex';
/* 000009 */ export var logger = (function () {
/* 000009 */ 	var __accu0__ = logging;
/* 000009 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000009 */ }) ();
/* 000017 */ export var _default_rx_escape_chars_text = (function () {
/* 000017 */ 	var __accu0__ = re;
/* 000017 */ 	return __call__ (__accu0__.compile, __accu0__, '[\\$&#\\^_%]');
/* 000017 */ }) ();
/* 000025 */ export var _Dict = dict;
/* 000028 */ function _JsMapDict_createMap() { return new Map(); }; function _JsMapDict_get(map, k, dflt) { if (map.has(k)) { return map.get(k) } return dflt; };
/* 000029 */ export var JsMapDict =  __class__ ('JsMapDict', [object], {
/* 000029 */ 	__module__: __name__,
/* 000030 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000030 */ 		if (arguments.length) {
/* 000030 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000030 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000030 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000030 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000030 */ 					switch (__attrib0__) {
/* 000030 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000030 */ 					}
/* 000030 */ 				}
/* 000030 */ 			}
/* 000030 */ 		}
/* 000030 */ 		else {
/* 000030 */ 		}
/* 000031 */ 		self.map = __call__ (_JsMapDict_createMap, null);
/* 000031 */ 	});},
/* 000032 */ 	get py_get () {return __get__ (this, function (self, k, dflt) {
/* 000032 */ 		if (typeof dflt == 'undefined' || (dflt != null && dflt.hasOwnProperty ("__kwargtrans__"))) {;
/* 000032 */ 			var dflt = null;
/* 000032 */ 		};
/* 000032 */ 		if (arguments.length) {
/* 000032 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000032 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000032 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000032 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000032 */ 					switch (__attrib0__) {
/* 000032 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000032 */ 						case 'k': var k = __allkwargs0__ [__attrib0__]; break;
/* 000032 */ 						case 'dflt': var dflt = __allkwargs0__ [__attrib0__]; break;
/* 000032 */ 					}
/* 000032 */ 				}
/* 000032 */ 			}
/* 000032 */ 		}
/* 000032 */ 		else {
/* 000032 */ 		}
/* 000033 */ 		return __call__ (_JsMapDict_get, null, self.map, k, dflt);
/* 000033 */ 	});},
/* 000034 */ 	get __setattr__ () {return __get__ (this, function (self, k, v) {
/* 000034 */ 		if (arguments.length) {
/* 000034 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000034 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000034 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000034 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000034 */ 					switch (__attrib0__) {
/* 000034 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000034 */ 						case 'k': var k = __allkwargs0__ [__attrib0__]; break;
/* 000034 */ 						case 'v': var v = __allkwargs0__ [__attrib0__]; break;
/* 000034 */ 					}
/* 000034 */ 				}
/* 000034 */ 			}
/* 000034 */ 		}
/* 000034 */ 		else {
/* 000034 */ 		}
/* 000035 */ 		(function () {
/* 000035 */ 			var __accu0__ = self.map;
/* 000035 */ 			return __call__ (__accu0__.set, __accu0__, k, v);
/* 000035 */ 		}) ();
/* 000035 */ 	});}
/* 000035 */ });
/* 000037 */ var _Dict = JsMapDict;
/* 000041 */ export var FLMPureLatexRecomposer =  __class__ ('FLMPureLatexRecomposer', [FLMNodesFlmRecomposer], {
/* 000041 */ 	__module__: __name__,
/* 000046 */ 	get __init__ () {return __get__ (this, function (self, options) {
/* 000046 */ 		if (arguments.length) {
/* 000046 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000046 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000046 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000046 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000046 */ 					switch (__attrib0__) {
/* 000046 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000046 */ 						case 'options': var options = __allkwargs0__ [__attrib0__]; break;
/* 000046 */ 					}
/* 000046 */ 				}
/* 000046 */ 			}
/* 000046 */ 		}
/* 000046 */ 		else {
/* 000046 */ 		}
/* 000047 */ 		__call__ (__call__ (__super__, null, FLMPureLatexRecomposer, '__init__'), null, self);
/* 000049 */ 		if (__t__ (options === null)) {
/* 000050 */ 			var options = dict ({});
/* 000050 */ 		}
/* 000052 */ 		self.options = __call__ (dict, null, options);
/* 000053 */ 		self.options_recomposer = __call__ (dict, null, (function () {
/* 000053 */ 			var __accu0__ = options;
/* 000053 */ 			return __call__ (__accu0__.py_get, __accu0__, 'recomposer', dict ({}));
/* 000053 */ 		}) ());
/* 000054 */ 		self.render_context = (function () {
/* 000054 */ 			var __accu0__ = options;
/* 000054 */ 			return __call__ (__accu0__.py_get, __accu0__, 'render_context', null);
/* 000054 */ 		}) ();
/* 000056 */ 		self.packages = dict ({});
/* 000057 */ 		self.safe_to_label = dict ({});
/* 000058 */ 		self.label_to_safe = dict ({});
/* 000059 */ 		self.safe_label_counter = 1;
/* 000063 */ 		self.safe_ref_types = __call__ (dict, null, (function () {
/* 000063 */ 			var __accu0__ = self.options_recomposer;
/* 000063 */ 			return __call__ (__accu0__.py_get, __accu0__, 'safe_label_ref_types', dict ({}));
/* 000063 */ 		}) ());
/* 000063 */ 	});},
/* 000066 */ 	get recompose_pure_latex () {return __get__ (this, function (self, node) {
/* 000066 */ 		if (arguments.length) {
/* 000066 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000066 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000066 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000066 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000066 */ 					switch (__attrib0__) {
/* 000066 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000066 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000066 */ 					}
/* 000066 */ 				}
/* 000066 */ 			}
/* 000066 */ 		}
/* 000066 */ 		else {
/* 000066 */ 		}
/* 000067 */ 		var latex = (function () {
/* 000067 */ 			var __accu0__ = self;
/* 000067 */ 			return __call__ (__accu0__.start, __accu0__, node);
/* 000067 */ 		}) ();
/* 000068 */ 		return dict ({'latex': latex, 'packages': self.packages});
/* 000068 */ 	});},
/* 000075 */ 	rx_escape_chars_text: _default_rx_escape_chars_text,
/* 000077 */ 	get get_options () {return __get__ (this, function (self, key) {
/* 000077 */ 		if (arguments.length) {
/* 000077 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000077 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000077 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000077 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000077 */ 					switch (__attrib0__) {
/* 000077 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000077 */ 						case 'key': var key = __allkwargs0__ [__attrib0__]; break;
/* 000077 */ 					}
/* 000077 */ 				}
/* 000077 */ 			}
/* 000077 */ 		}
/* 000077 */ 		else {
/* 000077 */ 		}
/* 000078 */ 		return (function () {
/* 000078 */ 			var __accu0__ = self.options;
/* 000078 */ 			return __call__ (__accu0__.py_get, __accu0__, key, dict ({}));
/* 000078 */ 		}) ();
/* 000078 */ 	});},
/* 000080 */ 	get ensure_latex_package () {return __get__ (this, function (self, packagename, options) {
/* 000080 */ 		if (typeof options == 'undefined' || (options != null && options.hasOwnProperty ("__kwargtrans__"))) {;
/* 000080 */ 			var options = null;
/* 000080 */ 		};
/* 000080 */ 		if (arguments.length) {
/* 000080 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000080 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000080 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000080 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000080 */ 					switch (__attrib0__) {
/* 000080 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000080 */ 						case 'packagename': var packagename = __allkwargs0__ [__attrib0__]; break;
/* 000080 */ 						case 'options': var options = __allkwargs0__ [__attrib0__]; break;
/* 000080 */ 					}
/* 000080 */ 				}
/* 000080 */ 			}
/* 000080 */ 		}
/* 000080 */ 		else {
/* 000080 */ 		}
/* 000081 */ 		if (__t__ (!__in__ (packagename, self.packages))) {
/* 000082 */ 			__setitem__ (self.packages, packagename, dict ({'options': options}));
/* 000085 */ 			return ;
/* 000085 */ 		}
/* 000086 */ 		if (__t__ (options === null)) {
/* 000088 */ 			return ;
/* 000088 */ 		}
/* 000089 */ 		if (__t__ (__getitem__ (__getitem__ (self.packages, packagename), 'options') === null)) {
/* 000091 */ 			__setitem__ (__getitem__ (self.packages, packagename), 'options', options);
/* 000091 */ 		}
/* 000092 */ 		if (__t__ (__eq__ (__getitem__ (__getitem__ (self.packages, packagename), 'options'), options))) {
/* 000094 */ 			return ;
/* 000094 */ 		}
/* 000096 */ 		var __except0__ = __call__ (ValueError, null, 'Conflicting pure latex package options requested for package {} in pure latex FLM export: ‘{}’ ≠ ‘{}’'.format (packagename, __getitem__ (__getitem__ (self.packages, packagename), 'options'), options));
/* 000096 */ 		__except0__.__cause__ = null;
/* 000096 */ 		throw __except0__;
/* 000096 */ 	});},
/* 000101 */ 	get make_safe_label () {return __get__ (this, function (self, ref_domain, ref_type, ref_label) {
/* 000101 */ 		if (arguments.length) {
/* 000101 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000101 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000101 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000101 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000101 */ 					switch (__attrib0__) {
/* 000101 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000101 */ 						case 'ref_domain': var ref_domain = __allkwargs0__ [__attrib0__]; break;
/* 000101 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000101 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000101 */ 					}
/* 000101 */ 				}
/* 000101 */ 			}
/* 000101 */ 		}
/* 000101 */ 		else {
/* 000101 */ 		}
/* 000104 */ 		var ref_full_label = '{}:{}'.format (ref_type, ref_label);
/* 000106 */ 		if (__t__ (__t__ (__in__ (ref_domain, self.safe_ref_types)) && (function () {
/* 000106 */ 			var __accu0__ = __getitem__ (self.safe_ref_types, ref_domain);
/* 000106 */ 			return __call__ (__accu0__.py_get, __accu0__, ref_type);
/* 000106 */ 		}) ())) {
/* 000108 */ 			return dict ({'safe_label': ref_full_label});
/* 000108 */ 		}
/* 000110 */ 		if (__t__ (!__in__ (ref_domain, self.label_to_safe))) {
/* 000111 */ 			__setitem__ (self.label_to_safe, ref_domain, __call__ (_Dict, null));
/* 000112 */ 			__setitem__ (self.safe_to_label, ref_domain, __call__ (_Dict, null));
/* 000112 */ 		}
/* 000114 */ 		var label_to_safe_map = __getitem__ (self.label_to_safe, ref_domain);
/* 000115 */ 		var value = (function () {
/* 000115 */ 			var __accu0__ = label_to_safe_map;
/* 000115 */ 			return __call__ (__accu0__.py_get, __accu0__, ref_full_label, null);
/* 000115 */ 		}) ();
/* 000116 */ 		if (__t__ (value !== null)) {
/* 000118 */ 			return value;
/* 000118 */ 		}
/* 000120 */ 		var safe = '{}{}'.format (ref_domain, __call__ (str, null, self.safe_label_counter));
/* 000121 */ 		self.safe_label_counter = __call__ (__iadd__, null, self.safe_label_counter, 1);
/* 000123 */ 		var sinfo = dict ({'safe_label': safe});
/* 000125 */ 		__setitem__ (__getitem__ (self.label_to_safe, ref_domain), ref_full_label, sinfo);
/* 000126 */ 		__setitem__ (__getitem__ (self.safe_to_label, ref_domain), safe, ref_full_label);
/* 000128 */ 		return sinfo;
/* 000128 */ 	});},
/* 000134 */ 	get recompose_delimited_nodelist () {return __get__ (this, function (self, delimiters, recomposed_list, n) {
/* 000134 */ 		if (arguments.length) {
/* 000134 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000134 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000134 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000134 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000134 */ 					switch (__attrib0__) {
/* 000134 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000134 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000134 */ 						case 'recomposed_list': var recomposed_list = __allkwargs0__ [__attrib0__]; break;
/* 000134 */ 						case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000134 */ 					}
/* 000134 */ 				}
/* 000134 */ 			}
/* 000134 */ 		}
/* 000134 */ 		else {
/* 000134 */ 		}
/* 000135 */ 		var need_protective_braces = false;
/* 000136 */ 		if (__t__ (__t__ (__eq__ (__getitem__ (delimiters, 0), '[')) && __eq__ (__getitem__ (delimiters, 1), ']'))) {
/* 000137 */ 			if (__t__ (__t__ (__eq__ (__call__ (len, null, n.nodelist), 1)) && __t__ ((function () {
/* 000137 */ 				var __accu0__ = __getitem__ (n.nodelist, 0);
/* 000137 */ 				return __call__ (__accu0__.isNodeType, __accu0__, LatexGroupNode);
/* 000137 */ 			}) ()) && __eq__ (__getitem__ (__getitem__ (n.nodelist, 0).delimiters, 0), '{'))) {
/* 000140 */ 				var need_protective_braces = false;
/* 000140 */ 			}
/* 000141 */ 			else {
/* 000142 */ 				var need_protective_braces = true;
/* 000142 */ 			}
/* 000142 */ 		}
/* 000143 */ 		if (__t__ (need_protective_braces)) {
/* 000144 */ 			var delimiters = tuple (['[{', '}]']);
/* 000144 */ 		}
/* 000145 */ 		return __call__ (__call__ (__super__, null, FLMPureLatexRecomposer, 'recompose_delimited_nodelist'), null, self, delimiters, recomposed_list, n);
/* 000145 */ 	});},
/* 000150 */ 	recompose_specinfo_method: 'recompose_pure_latex'
/* 000150 */ });
/* 000006 */ 
//# sourceMappingURL=flm.flmrecomposer.purelatex.map