/* 000001 */ // Transcrypt'ed from Python, 2026-02-13 22:15:40
/* 000006 */ var logging = {};
/* 000006 */ var re = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000016 */ import {FLMNodesFlmRecomposer} from './flm.flmrecomposer._recomposer.js';
/* 000011 */ import {LatexCharsNode, LatexGroupNode} from './pylatexenc.latexnodes.nodes.js';
/* 000008 */ import * as __module_logging__ from './logging.js';
/* 000008 */ __nest__ (logging, '', __module_logging__);
/* 000006 */ import * as __module_re__ from './re.js';
/* 000006 */ __nest__ (re, '', __module_re__);
/* 000006 */ export {LatexGroupNode, FLMNodesFlmRecomposer, LatexCharsNode};
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
/* 000031 */ function _JsMapDict_createMap() { return new Map(); }; function _JsMapDict_get(map, k, dflt, raise) { if (map.has(k)) { return map.get(k) } if (raise) { throw KeyError (k, new Error()); } return dflt; };
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
/* 000036 */ 		return __call__ (_JsMapDict_get, null, self.map, k, dflt, false);
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
/* 000038 */ 	});},
/* 000039 */ 	get __getitem__ () {return __get__ (this, function (self, k) {
/* 000039 */ 		if (arguments.length) {
/* 000039 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000039 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000039 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000039 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000039 */ 					switch (__attrib0__) {
/* 000039 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000039 */ 						case 'k': var k = __allkwargs0__ [__attrib0__]; break;
/* 000039 */ 					}
/* 000039 */ 				}
/* 000039 */ 			}
/* 000039 */ 		}
/* 000039 */ 		else {
/* 000039 */ 		}
/* 000040 */ 		return __call__ (_JsMapDict_get, null, self.map, k, null, true);
/* 000040 */ 	});}
/* 000040 */ });
/* 000042 */ var _Dict = JsMapDict;
/* 000046 */ export var FLMPureLatexRecomposer =  __class__ ('FLMPureLatexRecomposer', [FLMNodesFlmRecomposer], {
/* 000046 */ 	__module__: __name__,
/* 000051 */ 	get __init__ () {return __get__ (this, function (self, options) {
/* 000051 */ 		if (arguments.length) {
/* 000051 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000051 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000051 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000051 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000051 */ 					switch (__attrib0__) {
/* 000051 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000051 */ 						case 'options': var options = __allkwargs0__ [__attrib0__]; break;
/* 000051 */ 					}
/* 000051 */ 				}
/* 000051 */ 			}
/* 000051 */ 		}
/* 000051 */ 		else {
/* 000051 */ 		}
/* 000052 */ 		__call__ (__call__ (__super__, null, FLMPureLatexRecomposer, '__init__'), null, self);
/* 000054 */ 		if (__t__ (options === null)) {
/* 000055 */ 			var options = dict ({});
/* 000055 */ 		}
/* 000057 */ 		self.options = __call__ (dict, null, options);
/* 000058 */ 		self.options_recomposer = __call__ (dict, null, (function () {
/* 000058 */ 			var __accu0__ = options;
/* 000058 */ 			return __call__ (__accu0__.py_get, __accu0__, 'recomposer', dict ({}));
/* 000058 */ 		}) ());
/* 000059 */ 		self.render_context = (function () {
/* 000059 */ 			var __accu0__ = options;
/* 000059 */ 			return __call__ (__accu0__.py_get, __accu0__, 'render_context', null);
/* 000059 */ 		}) ();
/* 000061 */ 		self.packages = dict ({});
/* 000062 */ 		self.safe_to_label = dict ({});
/* 000063 */ 		self.label_to_safe = dict ({});
/* 000064 */ 		self.safe_label_counter = 1;
/* 000068 */ 		var safe_ref_types = __call__ (dict, null, (function () {
/* 000068 */ 			var __accu0__ = self.options_recomposer;
/* 000068 */ 			return __call__ (__accu0__.py_get, __accu0__, 'safe_label_ref_types', dict ({}));
/* 000068 */ 		}) ());
/* 000071 */ 		var __iterable0__ = __call__ (list, null, (function () {
/* 000071 */ 			var __accu0__ = safe_ref_types;
/* 000071 */ 			return __call__ (__accu0__.py_keys, __accu0__);
/* 000071 */ 		}) ());
/* 000071 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000071 */ 			var ref_domain = __getitem__ (__iterable0__, __index0__);
/* 000072 */ 			var dic = __call__ (dict, null, __getitem__ (safe_ref_types, ref_domain));
/* 000073 */ 			__setitem__ (safe_ref_types, ref_domain, dic);
/* 000073 */ 		}
/* 000074 */ 		self.safe_ref_types = safe_ref_types;
/* 000074 */ 	});},
/* 000077 */ 	get recompose_pure_latex () {return __get__ (this, function (self, node) {
/* 000077 */ 		if (arguments.length) {
/* 000077 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000077 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000077 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000077 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000077 */ 					switch (__attrib0__) {
/* 000077 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000077 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000077 */ 					}
/* 000077 */ 				}
/* 000077 */ 			}
/* 000077 */ 		}
/* 000077 */ 		else {
/* 000077 */ 		}
/* 000078 */ 		var latex = (function () {
/* 000078 */ 			var __accu0__ = self;
/* 000078 */ 			return __call__ (__accu0__.start, __accu0__, node);
/* 000078 */ 		}) ();
/* 000079 */ 		return dict ({'latex': latex, 'packages': self.packages});
/* 000079 */ 	});},
/* 000086 */ 	rx_escape_chars_text: _default_rx_escape_chars_text,
/* 000088 */ 	get get_options () {return __get__ (this, function (self, key) {
/* 000088 */ 		if (arguments.length) {
/* 000088 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000088 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000088 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000088 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000088 */ 					switch (__attrib0__) {
/* 000088 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000088 */ 						case 'key': var key = __allkwargs0__ [__attrib0__]; break;
/* 000088 */ 					}
/* 000088 */ 				}
/* 000088 */ 			}
/* 000088 */ 		}
/* 000088 */ 		else {
/* 000088 */ 		}
/* 000089 */ 		return __call__ (dict, null, (function () {
/* 000089 */ 			var __accu0__ = self.options;
/* 000089 */ 			return __call__ (__accu0__.py_get, __accu0__, key, dict ({}));
/* 000089 */ 		}) ());
/* 000089 */ 	});},
/* 000091 */ 	get ensure_latex_package () {return __get__ (this, function (self, packagename, options) {
/* 000091 */ 		if (typeof options == 'undefined' || (options != null && options.hasOwnProperty ("__kwargtrans__"))) {;
/* 000091 */ 			var options = null;
/* 000091 */ 		};
/* 000091 */ 		if (arguments.length) {
/* 000091 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000091 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000091 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000091 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000091 */ 					switch (__attrib0__) {
/* 000091 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000091 */ 						case 'packagename': var packagename = __allkwargs0__ [__attrib0__]; break;
/* 000091 */ 						case 'options': var options = __allkwargs0__ [__attrib0__]; break;
/* 000091 */ 					}
/* 000091 */ 				}
/* 000091 */ 			}
/* 000091 */ 		}
/* 000091 */ 		else {
/* 000091 */ 		}
/* 000092 */ 		if (__t__ (!__in__ (packagename, self.packages))) {
/* 000093 */ 			__setitem__ (self.packages, packagename, dict ({'options': options}));
/* 000096 */ 			return ;
/* 000096 */ 		}
/* 000097 */ 		if (__t__ (options === null)) {
/* 000099 */ 			return ;
/* 000099 */ 		}
/* 000100 */ 		if (__t__ (__getitem__ (__getitem__ (self.packages, packagename), 'options') === null)) {
/* 000102 */ 			__setitem__ (__getitem__ (self.packages, packagename), 'options', options);
/* 000102 */ 		}
/* 000103 */ 		if (__t__ (__eq__ (__getitem__ (__getitem__ (self.packages, packagename), 'options'), options))) {
/* 000105 */ 			return ;
/* 000105 */ 		}
/* 000107 */ 		var __except0__ = __call__ (ValueError, null, 'Conflicting pure latex package options requested for package {} in pure latex FLM export: ‘{}’ ≠ ‘{}’'.format (packagename, __getitem__ (__getitem__ (self.packages, packagename), 'options'), options));
/* 000107 */ 		__except0__.__cause__ = null;
/* 000107 */ 		throw __except0__;
/* 000107 */ 	});},
/* 000112 */ 	get make_safe_label () {return __get__ (this, function (self, ref_domain, ref_type, ref_label, resource_info) {
/* 000112 */ 		if (arguments.length) {
/* 000112 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000112 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000112 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000112 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000112 */ 					switch (__attrib0__) {
/* 000112 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000112 */ 						case 'ref_domain': var ref_domain = __allkwargs0__ [__attrib0__]; break;
/* 000112 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000112 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000112 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000112 */ 					}
/* 000112 */ 				}
/* 000112 */ 			}
/* 000112 */ 		}
/* 000112 */ 		else {
/* 000112 */ 		}
/* 000115 */ 		var use_raw = false;
/* 000116 */ 		var ref_to_global_key = (function __lambda__ (ref_domain, ref_type, ref_label, resource_info) {
/* 000116 */ 			if (arguments.length) {
/* 000116 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000116 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000116 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000116 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000116 */ 						switch (__attrib0__) {
/* 000116 */ 							case 'ref_domain': var ref_domain = __allkwargs0__ [__attrib0__]; break;
/* 000116 */ 							case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000116 */ 							case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000116 */ 							case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000116 */ 						}
/* 000116 */ 					}
/* 000116 */ 				}
/* 000116 */ 			}
/* 000116 */ 			else {
/* 000116 */ 			}
/* 000116 */ 			return '{}:{}'.format (ref_type, ref_label);
/* 000116 */ 		});
/* 000119 */ 		if (__t__ (__in__ (ref_domain, self.safe_ref_types))) {
/* 000120 */ 			var d = (function () {
/* 000120 */ 				var __accu0__ = __getitem__ (self.safe_ref_types, ref_domain);
/* 000120 */ 				return __call__ (__accu0__.py_get, __accu0__, ref_type);
/* 000120 */ 			}) ();
/* 000121 */ 			if (__t__ (!__t__ ((d)))) {
/* 000122 */ 				// pass;
/* 000122 */ 			}
/* 000123 */ 			else if (__t__ (__t__ (d === true) || d === false)) {
/* 000124 */ 				var use_raw = d;
/* 000124 */ 			}
/* 000125 */ 			else {
/* 000127 */ 				if (__t__ (__in__ ('use_raw', d))) {
/* 000128 */ 					var use_raw = __getitem__ (d, 'use_raw');
/* 000128 */ 				}
/* 000129 */ 				if (__t__ (__t__ (__in__ ('ref_to_global_key', d)) && __getitem__ (d, 'ref_to_global_key'))) {
/* 000130 */ 					var ref_to_global_key = __getitem__ (d, 'ref_to_global_key');
/* 000130 */ 				}
/* 000130 */ 			}
/* 000130 */ 		}
/* 000132 */ 		if (__t__ (use_raw)) {
/* 000134 */ 			return dict ({'safe_label': '{}:{}'.format (ref_type, ref_label)});
/* 000134 */ 		}
/* 000136 */ 		var ref_global_key = __call__ (ref_to_global_key, null, ref_domain, ref_type, ref_label, resource_info);
/* 000140 */ 		if (__t__ (!__in__ (ref_domain, self.label_to_safe))) {
/* 000141 */ 			__setitem__ (self.label_to_safe, ref_domain, __call__ (_Dict, null));
/* 000142 */ 			__setitem__ (self.safe_to_label, ref_domain, __call__ (_Dict, null));
/* 000142 */ 		}
/* 000144 */ 		var label_to_safe_map = __getitem__ (self.label_to_safe, ref_domain);
/* 000145 */ 		var value = (function () {
/* 000145 */ 			var __accu0__ = label_to_safe_map;
/* 000145 */ 			return __call__ (__accu0__.py_get, __accu0__, ref_global_key, null);
/* 000145 */ 		}) ();
/* 000146 */ 		if (__t__ (value !== null)) {
/* 000148 */ 			return value;
/* 000148 */ 		}
/* 000150 */ 		var safe = '{}{}'.format (ref_domain, __call__ (str, null, self.safe_label_counter));
/* 000151 */ 		self.safe_label_counter = __call__ (__iadd__, null, self.safe_label_counter, 1);
/* 000153 */ 		var sinfo = dict ({'safe_label': safe});
/* 000155 */ 		__setitem__ (__getitem__ (self.label_to_safe, ref_domain), ref_global_key, sinfo);
/* 000156 */ 		__setitem__ (__getitem__ (self.safe_to_label, ref_domain), safe, dict ({'ref_global_key': ref_global_key, 'ref_type': ref_type, 'ref_label': ref_label, 'resource_info': resource_info}));
/* 000163 */ 		return sinfo;
/* 000163 */ 	});},
/* 000169 */ 	get recompose_delimited_nodelist () {return __get__ (this, function (self, delimiters, nodelist, n) {
/* 000169 */ 		if (arguments.length) {
/* 000169 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000169 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000169 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000169 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000169 */ 					switch (__attrib0__) {
/* 000169 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000169 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000169 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000169 */ 						case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000169 */ 					}
/* 000169 */ 				}
/* 000169 */ 			}
/* 000169 */ 		}
/* 000169 */ 		else {
/* 000169 */ 		}
/* 000170 */ 		var need_protective_braces = false;
/* 000171 */ 		if (__t__ (__t__ (__eq__ (__getitem__ (delimiters, 0), '[')) && __eq__ (__getitem__ (delimiters, 1), ']'))) {
/* 000172 */ 			if (__t__ (__t__ (__eq__ (__call__ (len, null, n.nodelist), 1)) && __t__ ((function () {
/* 000172 */ 				var __accu0__ = __getitem__ (n.nodelist, 0);
/* 000172 */ 				return __call__ (__accu0__.isNodeType, __accu0__, LatexGroupNode);
/* 000172 */ 			}) ()) && __eq__ (__getitem__ (__getitem__ (n.nodelist, 0).delimiters, 0), '{'))) {
/* 000175 */ 				var need_protective_braces = false;
/* 000175 */ 			}
/* 000176 */ 			else if (__t__ (__t__ (__eq__ (__call__ (len, null, n.nodelist), 1)) && __t__ ((function () {
/* 000176 */ 				var __accu0__ = __getitem__ (n.nodelist, 0);
/* 000176 */ 				return __call__ (__accu0__.isNodeType, __accu0__, LatexCharsNode);
/* 000177 */ 			}) ()) && (function () {
/* 000177 */ 				var __accu0__ = _rx_safe_chars_optarg;
/* 000177 */ 				return __call__ (__accu0__.match, __accu0__, __getitem__ (n.nodelist, 0).chars);
/* 000177 */ 			}) () !== null)) {
/* 000179 */ 				var need_protective_braces = false;
/* 000179 */ 			}
/* 000180 */ 			else {
/* 000181 */ 				var need_protective_braces = true;
/* 000181 */ 			}
/* 000181 */ 		}
/* 000183 */ 		if (__t__ (need_protective_braces)) {
/* 000184 */ 			var delimiters = tuple (['[{', '}]']);
/* 000184 */ 		}
/* 000186 */ 		return __call__ (__call__ (__super__, null, FLMPureLatexRecomposer, 'recompose_delimited_nodelist'), null, self, delimiters, nodelist, n);
/* 000186 */ 	});},
/* 000191 */ 	recompose_specinfo_method: 'recompose_pure_latex'
/* 000191 */ });
/* 000196 */ export var _rx_safe_chars_optarg = (function () {
/* 000196 */ 	var __accu0__ = re;
/* 000196 */ 	return __call__ (__accu0__.compile, __accu0__, '[-a-zA-Z0-9_+ !@#$&*()<>,./:;"\'|]*');
/* 000196 */ }) ();
/* 000201 */ export var default_purelatex_defs_makeatletter = "\n\n\\providecommand\\flmRequirePackage[2][]{\\usepackage[#1]{#2}}\n\n\\flmRequirePackage{verbatim}\n\n\n\\providecommand\\flmFinalPreambleSetup{}\n\n% For references -- pin down custom labels wherever we want for \\cref\n\\NewDocumentCommand{\\flmL@crefCustomLabel}{O{flmLCustomLabel}m+m}{%\n  \\begingroup\n    \\cref@constructprefix{#1}{\\cref@result}%\n    \\protected@edef\\@currentlabel{%\n      #3}%\n    \\protected@edef\\@currentlabelname{#3}%\n    \\protected@edef\\cref@currentlabel{%\n      [#1][][\\cref@result]%\n      #3%\n    }%\n    \\flmL@cref@label[{#1}]{#2}%\n  \\endgroup\n}\n\\g@addto@macro\\flmFinalPreambleSetup{%\n  \\ifcsname crefname\\noexpand\\endcsname\n    \\crefname{flmLCustomLabel}{}{}%\n    \\Crefname{flmLCustomLabel}{}{}%\n  \\fi}\n\\newcommand\\flmLDefLabelText[2]{%\n  \\begingroup\n    \\let\\flmL@cref@label\\label\n    \\def\\label##1{%\n      \\flmL@crefCustomLabel{##1}{#1}%\n    }%\n    #2%\n  \\endgroup\n}\n\n\n\n\\def\\flmL@parse@labels#1{%\n  \\def\\flmL@val@labels{}%\n  \\def\\flmL@val@firstlabel{}%\n  \\flmL@parse@labels@maybelbl{#1}%\n}\n\\def\\flmL@val@labels{}%\n\\def\\flmL@val@firstlabel{}%\n\\def\\flmL@parse@labels@maybelbl#1{%\n  \\@ifnextchar\\label{\\flmL@parse@labels@lbl{#1}}{#1}%\n}\n\\def\\flmL@parse@labels@lbl#1\\label#2{%\n  \\if\\relax\\detokenize\\expandafter{\\flmL@val@firstlabel}\\relax\n    % first label\n    \\def\\flmL@val@firstlabel{#2}%\n    \\def\\flmL@val@labels{#2}%\n  \\else\n    \\edef\\flmL@val@labels{\\expandafter\\noexpand\\flmL@val@labels,#2}%\n  \\fi\n  \\flmL@parse@labels@maybelbl{#1}%\n}\n\n\n\n\n% For defterms -- \n\n\\newif\\ifdeftermShowTerm\n\\deftermShowTermtrue\n\\def\\flmL@defterm#1{%\n  \\begingroup\n  \\def\\flmL@val@deftermterm{#1}%\n  \\par\\vspace{\\abovedisplayskip}%\n  \\flmDeftermFormat\n  \\phantomsection\n  \\flmL@parse@labels\\flmL@defterm@next\n}\n\\def\\flmL@defterm@next{%\n  \\expandafter\\flmL@defterm@dolabels\\expandafter{\\flmL@val@labels}%\n  \\edef\\flmL@cur@defterm@label{\\flmL@cur@defterm@label,\\flmL@val@firstlabel,}%\n  \\ifdeftermShowTerm \\flmDisplayTerm{\\flmL@val@deftermterm: }\\fi\n  \\flmL@defterm@done\n}\n\\def\\flmL@defterm@dolabels#1{%\n  \\@for\\flmL@tmp:={#1}\\do{%\n    \\expandafter\\flmL@defterm@dolabel\\expandafter{\\flmL@tmp}%\n  }%\n}\n\\def\\flmL@defterm@dolabel#1{%\n  \\flmLDefLabelText{\\flmL@val@deftermterm}{\\label{#1}}%\n}\n\\def\\flmL@defterm@done{}\n%\n\\def\\flmL@cur@defterm@label{}\n\\def\\endflmL@defterm{%\n  \\par\n  \\vspace{\\belowdisplayskip}%\n  \\endgroup\n}\n\\ifcsname defterm\\endcsname \\else % there's no \\provideenvironment\n  \\def\\defterm#1{\\flmL@defterm{#1}}\n  \\def\\enddefterm{\\endflmL@defterm}\n\\fi\n\\providecommand\\flmTerm[4]{%\n  \\edef\\x{\\noexpand\\in@{,#2,}{\\flmL@cur@defterm@label}}%\n  \\x\\ifin@\n    \\flmTermDisplayInDefterm{#4}%\n  \\else\n    \\flmTermDisplayTermRef{#2}{#4}%\n  \\fi\n}\n\\robustify\\flmTerm\n\\providecommand\\flmTermDisplayTermRef[2]{%\n  \\hyperref[#1]{\\flmTermFormat{#2}}%\n}\n\\providecommand\\flmTermDisplayInDefterm[1]{%\n  \\textbf{\\textit{#1}}%\n}\n\\providecommand\\flmTermFormat[1]{%\n  #1%\n}\n\\ifcsname flmFloat\\endcsname \\else % no \\provideenvironment :/\n  \\def\\flmFloat#1#2{%\n    \\edef\\flmFloat@curfloatenv{#1}%\n    \\edef\\flmFloat@usefloatenv{#1}%\n    \\edef\\flmFloat@useenvargs{\\csname flmFloatPlacementArgs#2\\endcsname}%\n    \\ifcsname flmFloatSetUseEnv#1\\endcsname\n      \\csname flmFloatSetUseEnv#1\\endcsname\n    \\fi\n    \\ifcsname flmFloatSetUseConfig#2\\endcsname\n      \\csname flmFloatSetUseConfig#2\\endcsname\n    \\fi\n    \\edef\\x{%\n      \\noexpand\\begin{\\flmFloat@usefloatenv}\\expandonce\\flmFloat@useenvargs}%\n    \\x\n    \\centering\n  }\n  \\def\\endflmFloat{%\n    \\expandafter\\end\\expandafter{\\flmFloat@usefloatenv}%\n  }\n\\fi\n\\providecommand\\flmFloatPlacementArgsNumCap{[tbph]}\n\\providecommand\\flmFloatPlacementArgsNumOnly{[tbph]}\n\\providecommand\\flmFloatPlacementArgsCapOnly{[h]}\n\\providecommand\\flmFloatPlacementArgsBare{[h]}\n\\providecommand\\flmFloatSetUseConfigBare{%\n  \\edef\\flmFloat@usefloatenv{center}%\n  \\def\\flmFloat@useenvargs{%\n    \\edef\\@captype{\\flmFloat@curfloatenv}%\n  }%\n}\n\\providecommand\\flmFloatSetUseConfigCapOnly{\\flmFloatSetUseConfigBare}\n\n\n\n\\def\\flmLInlineVerbatimEnv#1{%\n  \\begingroup\n  \\catcode`\\$=12\\relax%\n  \\catcode`\\&=12\\relax%\n  \\catcode`\\#=12\\relax%\n  \\catcode`\\^=12\\relax%\n  \\catcode`\\_=12\\relax%\n  \\catcode`\\%=12\\relax%\n  \\catcode`\\{=12\\relax%\n  \\catcode`\\}=12\\relax%\n  \\catcode`\\\\=12\\relax%\n  \\flmLInlineVerbatimEnv@{#1}%\n}\n\\begingroup\n  \\catcode`|=0\\relax%\n  \\catcode`[=1\\relax%\n  \\catcode`]=2\\relax%\n  \\catcode`\\{=12\\relax%\n  \\catcode`\\}=12\\relax%\n  \\catcode`\\\\=12\\relax%\n  |long|gdef|flmLInlineVerbatimEnv@#1[%\n      |def|flmL@tmp@ReadThisVerbatimEnvContent##1\\end{#1}[%\n          |endgroup|end[#1]|flmLinlineverbatimenv[#1][##1]%\n      ]%\n      |flmL@tmp@ReadThisVerbatimEnvContent%\n  ]%\n|endgroup\n\n\\long\\def\\flmLinlineverbatimenv#1#2{%\n  \\begingroup\n  \\obeyspaces\n  \\obeylines\n  \\ifcsname #1Format\\endcsname\n     \\csname #1Format\\endcsname{\\ignorespaces #2\\unskip}%\n  \\else\n     \\flmInlineVerbatimFormatDefault{\\ignorespaces #2\\unskip}%\n  \\fi\n  \\endgroup\n}\n\n\n\\def\\flmInlineVerb#1#2{% cf. \\verb definition in LaTeX sources latex.ltx\n  \\relax\\ifmmode\\hbox\\else\\leavevmode\\null\\fi\n  \\bgroup\n    \\expandafter\\def\\expandafter\\verb@egroup\\expandafter{\\verb@egroup #2}%\n    \\let\\do\\@makeother \\dospecials\n    \\language\\l@nohyphenation\n    #1%\n    \\flmInlineVerb@\n}\n\\def\\flmInlineVerb@{%\n  \\catcode`\\{=12\\relax \\catcode`\\}=12\\relax\n  \\expandafter\\@ifnextchar\\flm@literalBgroup{%\n    \\flmInlineVerb@WithBgroup\n  }{%\n    \\flmInlineVerb@@\n  }%\n}\n\\def\\flmInlineVerb@WithBgroup#1{% #1 == '{'\n  \\@vobeyspaces\\frenchspacing\n    \\expandafter\\@sverb\\expandafter{\\flm@literalEgroup}%\n}\n\\begingroup\n  \\catcode`\\:=12\\relax\n  \\lccode`\\:=`\\{\\relax\n  \\catcode`\\;=12\\relax\n  \\lccode`\\;=`\\}\\relax\n  \\lowercase{\\endgroup\\xdef\\flm@literalBgroup{:}\\xdef\\flm@literalEgroup{;}}\n\\def\\flmInlineVerb@ClosingChar#1{%\n  \\ifcsname flmInlineVerb@ClosingChar@#1\\endcsname\n    \\csname flmInlineVerb@ClosingChar@#1\\endcsname\n  \\else\n    #1%\n  \\fi\n}\n\\def\\flmInlineVerb@DefineClosingChar#1#2{%\n  \\expandafter\\edef\\csname flmInlineVerb@ClosingChar@#1\\endcsname{#2}%\n}\n\\flmInlineVerb@DefineClosingChar{[}{]}\n\\flmInlineVerb@DefineClosingChar{(}{)}\n\\flmInlineVerb@DefineClosingChar{<}{>}\n\\flmInlineVerb@DefineClosingChar{|}{|}\n\\def\\flmInlineVerb@@#1{%\n  \\edef\\x{\\flmInlineVerb@ClosingChar#1}%\n  \\expandafter\\@sverb\\expandafter{\\x}%\n}\n\n\n\n% block environments (verbatimcode) are defined using the {verbatim} package.\n% inline environments (verbatimtext) use our custom flmLInlineVerbatimEnv above.\n%\n% Note that we cannot use \\verb from latex directly because \\verb doesn't understand\n% braced arguments like \\verb{abc}.\n\n\n\\ifcsname verbatimcode\\endcsname\\else\n  \\newenvironment{verbatimcode}{%\n    \\begingroup\n    \\parskip=\\z@\\relax\n    \\ttfamily\n    \\verbatim\n  }{%\n    \\endverbatim\n    \\endgroup\n  }\n\\fi\n\n\\ifcsname verbatimtext\\endcsname\\else\n  \\newenvironment{verbatimtext}{\\flmLInlineVerbatimEnv{verbatimtext}}{}\n\\fi\n\n\\providecommand\\flmInlineVerbatimFormatDefault[1]{#1}\n\n\n\\def\\flmFmtVRBverba{\\itshape}\n\\def\\flmFmtVRBverbtext{}\n\\def\\flmFmtVRBverbcode{\\ttfamily}\n\\def\\flmFmtVRB#1{%\n  \\ifcsname flmFmtVRB#1\\endcsname\n    \\csname flmFmtVRB#1\\endcsname\n  \\else\n    \\flmFmtVRBverbcode\n  \\fi\n}\n\n\\def\\verba{\\flmInlineVerb{\\flmFmtVRBverba}{}}\n\\def\\verbtext{\\flmInlineVerb{\\flmFmtVRBverbtext}{}}\n\\def\\verbcode{\\flmInlineVerb{\\flmFmtVRBverbcode}{}}\n\n\n\n\n% lines; quotes, addresses, blockquotes\n\\providecommand\\flmQuoteSetup[1]{%\n  \\ifcsname flmQuoteSetup@#1\\endcsname\n    \\csname flmQuoteSetup@#1\\endcsname\n  \\fi\n}\n\\providecommand\\flmQuoteAttributed[1]{%\n  \\par\\begingroup\\raggedleft---~#1\\par\\endgroup\n}\n\\providecommand\\flmQuoteBlock[1]{%\n  \\par\n  \\list{}{%\n    \\itemindent\\parindent\n    \\leftmargin=4em\\relax\n    %\\rightmargin\\leftmargin\n    }%\n  \\item\\relax\n  #1%\n  \\endlist\n}\n\\ifdefined\\address\\else\n\\newenvironment{address}{%\n  \\par\n  \\begingroup\n  \\small\n}{%\n  \\par\n  \\endgroup\n}\n\\ifdefined\\blockquote\\else\n\\newenvironment{blockquote}{%\n  \\par\n  \\list{}{%\n    \\itemindent\\parindent\n    \\leftmargin=4em\\relax\n    %\\rightmargin\\leftmargin\n    }%\n  \\item\\relax\n}{%\n  \\endlist\n}\n\\fi\n\n\n";
/* 000006 */ 
//# sourceMappingURL=flm.flmrecomposer.purelatex.map