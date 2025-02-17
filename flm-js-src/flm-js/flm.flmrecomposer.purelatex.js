/* 000001 */ // Transcrypt'ed from Python, 2025-02-17 12:39:31
/* 000006 */ var logging = {};
/* 000006 */ var re = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000016 */ import {FLMNodesFlmRecomposer} from './flm.flmrecomposer._recomposer.js';
/* 000011 */ import {LatexCharsNode, LatexGroupNode} from './pylatexenc.latexnodes.nodes.js';
/* 000008 */ import * as __module_logging__ from './logging.js';
/* 000008 */ __nest__ (logging, '', __module_logging__);
/* 000006 */ import * as __module_re__ from './re.js';
/* 000006 */ __nest__ (re, '', __module_re__);
/* 000006 */ export {LatexCharsNode, FLMNodesFlmRecomposer, LatexGroupNode};
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
/* 000110 */ 	get make_safe_label () {return __get__ (this, function (self, ref_domain, ref_type, ref_label, resource_info) {
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
/* 000110 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000110 */ 					}
/* 000110 */ 				}
/* 000110 */ 			}
/* 000110 */ 		}
/* 000110 */ 		else {
/* 000110 */ 		}
/* 000113 */ 		var use_raw = false;
/* 000114 */ 		var ref_to_global_key = (function __lambda__ (ref_domain, ref_type, ref_label, resource_info) {
/* 000114 */ 			if (arguments.length) {
/* 000114 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000114 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000114 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000114 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000114 */ 						switch (__attrib0__) {
/* 000114 */ 							case 'ref_domain': var ref_domain = __allkwargs0__ [__attrib0__]; break;
/* 000114 */ 							case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000114 */ 							case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000114 */ 							case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000114 */ 						}
/* 000114 */ 					}
/* 000114 */ 				}
/* 000114 */ 			}
/* 000114 */ 			else {
/* 000114 */ 			}
/* 000114 */ 			return '{}:{}'.format (ref_type, ref_label);
/* 000114 */ 		});
/* 000117 */ 		if (__t__ (__in__ (ref_domain, self.safe_ref_types))) {
/* 000118 */ 			var d = (function () {
/* 000118 */ 				var __accu0__ = __getitem__ (self.safe_ref_types, ref_domain);
/* 000118 */ 				return __call__ (__accu0__.py_get, __accu0__, ref_type);
/* 000118 */ 			}) ();
/* 000119 */ 			if (__t__ (!__t__ ((d)))) {
/* 000120 */ 				// pass;
/* 000120 */ 			}
/* 000121 */ 			else if (__t__ (__t__ (d === true) || d === false)) {
/* 000122 */ 				var use_raw = d;
/* 000122 */ 			}
/* 000123 */ 			else {
/* 000125 */ 				if (__t__ (__in__ ('use_raw', d))) {
/* 000126 */ 					var use_raw = __getitem__ (d, 'use_raw');
/* 000126 */ 				}
/* 000127 */ 				if (__t__ (__t__ (__in__ ('ref_to_global_key', d)) && __getitem__ (d, 'ref_to_global_key'))) {
/* 000128 */ 					var ref_to_global_key = __getitem__ (d, 'ref_to_global_key');
/* 000128 */ 				}
/* 000128 */ 			}
/* 000128 */ 		}
/* 000130 */ 		if (__t__ (use_raw)) {
/* 000132 */ 			return dict ({'safe_label': '{}:{}'.format (ref_type, ref_label)});
/* 000132 */ 		}
/* 000134 */ 		var ref_global_key = __call__ (ref_to_global_key, null, ref_domain, ref_type, ref_label, resource_info);
/* 000138 */ 		if (__t__ (!__in__ (ref_domain, self.label_to_safe))) {
/* 000139 */ 			__setitem__ (self.label_to_safe, ref_domain, __call__ (_Dict, null));
/* 000140 */ 			__setitem__ (self.safe_to_label, ref_domain, __call__ (_Dict, null));
/* 000140 */ 		}
/* 000142 */ 		var label_to_safe_map = __getitem__ (self.label_to_safe, ref_domain);
/* 000143 */ 		var value = (function () {
/* 000143 */ 			var __accu0__ = label_to_safe_map;
/* 000143 */ 			return __call__ (__accu0__.py_get, __accu0__, ref_global_key, null);
/* 000143 */ 		}) ();
/* 000144 */ 		if (__t__ (value !== null)) {
/* 000146 */ 			return value;
/* 000146 */ 		}
/* 000148 */ 		var safe = '{}{}'.format (ref_domain, __call__ (str, null, self.safe_label_counter));
/* 000149 */ 		self.safe_label_counter = __call__ (__iadd__, null, self.safe_label_counter, 1);
/* 000151 */ 		var sinfo = dict ({'safe_label': safe});
/* 000153 */ 		__setitem__ (__getitem__ (self.label_to_safe, ref_domain), ref_global_key, sinfo);
/* 000154 */ 		__setitem__ (__getitem__ (self.safe_to_label, ref_domain), safe, dict ({'ref_global_key': ref_global_key, 'ref_type': ref_type, 'ref_label': ref_label, 'resource_info': resource_info}));
/* 000161 */ 		return sinfo;
/* 000161 */ 	});},
/* 000167 */ 	get recompose_delimited_nodelist () {return __get__ (this, function (self, delimiters, nodelist, n) {
/* 000167 */ 		if (arguments.length) {
/* 000167 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000167 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000167 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000167 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000167 */ 					switch (__attrib0__) {
/* 000167 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000167 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000167 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000167 */ 						case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000167 */ 					}
/* 000167 */ 				}
/* 000167 */ 			}
/* 000167 */ 		}
/* 000167 */ 		else {
/* 000167 */ 		}
/* 000168 */ 		var need_protective_braces = false;
/* 000169 */ 		if (__t__ (__t__ (__eq__ (__getitem__ (delimiters, 0), '[')) && __eq__ (__getitem__ (delimiters, 1), ']'))) {
/* 000170 */ 			if (__t__ (__t__ (__eq__ (__call__ (len, null, n.nodelist), 1)) && __t__ ((function () {
/* 000170 */ 				var __accu0__ = __getitem__ (n.nodelist, 0);
/* 000170 */ 				return __call__ (__accu0__.isNodeType, __accu0__, LatexGroupNode);
/* 000170 */ 			}) ()) && __eq__ (__getitem__ (__getitem__ (n.nodelist, 0).delimiters, 0), '{'))) {
/* 000173 */ 				var need_protective_braces = false;
/* 000173 */ 			}
/* 000174 */ 			else if (__t__ (__t__ (__eq__ (__call__ (len, null, n.nodelist), 1)) && __t__ ((function () {
/* 000174 */ 				var __accu0__ = __getitem__ (n.nodelist, 0);
/* 000174 */ 				return __call__ (__accu0__.isNodeType, __accu0__, LatexCharsNode);
/* 000175 */ 			}) ()) && (function () {
/* 000175 */ 				var __accu0__ = _rx_safe_chars_optarg;
/* 000175 */ 				return __call__ (__accu0__.match, __accu0__, __getitem__ (n.nodelist, 0).chars);
/* 000175 */ 			}) () !== null)) {
/* 000177 */ 				var need_protective_braces = false;
/* 000177 */ 			}
/* 000178 */ 			else {
/* 000179 */ 				var need_protective_braces = true;
/* 000179 */ 			}
/* 000179 */ 		}
/* 000181 */ 		if (__t__ (need_protective_braces)) {
/* 000182 */ 			var delimiters = tuple (['[{', '}]']);
/* 000182 */ 		}
/* 000184 */ 		return __call__ (__call__ (__super__, null, FLMPureLatexRecomposer, 'recompose_delimited_nodelist'), null, self, delimiters, nodelist, n);
/* 000184 */ 	});},
/* 000189 */ 	recompose_specinfo_method: 'recompose_pure_latex'
/* 000189 */ });
/* 000194 */ export var _rx_safe_chars_optarg = (function () {
/* 000194 */ 	var __accu0__ = re;
/* 000194 */ 	return __call__ (__accu0__.compile, __accu0__, '[-a-zA-Z0-9_+ !@#$&*()<>,./:;"\'|]*');
/* 000194 */ }) ();
/* 000199 */ export var default_purelatex_defs_makeatletter = "\n\n\\providecommand\\flmRequirePackage[2][]{\\usepackage[#1]{#2}}\n\n\\flmRequirePackage{verbatim}\n\n\n\\providecommand\\flmFinalPreambleSetup{}\n\n% For references -- pin down custom labels wherever we want for \\cref\n\\NewDocumentCommand{\\flmL@crefCustomLabel}{O{flmLCustomLabel}m+m}{%\n  \\begingroup\n    \\cref@constructprefix{#1}{\\cref@result}%\n    \\protected@edef\\@currentlabel{%\n      #3}%\n    \\protected@edef\\@currentlabelname{#3}%\n    \\protected@edef\\cref@currentlabel{%\n      [#1][][\\cref@result]%\n      #3%\n    }%\n    \\flmL@cref@label[{#1}]{#2}%\n  \\endgroup\n}\n\\g@addto@macro\\flmFinalPreambleSetup{%\n  \\ifcsname crefname\\noexpand\\endcsname\n    \\crefname{flmLCustomLabel}{}{}%\n    \\Crefname{flmLCustomLabel}{}{}%\n  \\fi}\n\\newcommand\\flmLDefLabelText[2]{%\n  \\begingroup\n    \\let\\flmL@cref@label\\label\n    \\def\\label##1{%\n      \\flmL@crefCustomLabel{##1}{#1}%\n    }%\n    #2%\n  \\endgroup\n}\n\n% For defterms -- \n\n\\newif\\ifdeftermShowTerm\n\\deftermShowTermtrue\n\\def\\flmL@defterm#1\\label#2{%\n  \\begingroup\n  \\par\\vspace{\\abovedisplayskip}%\n  \\flmDeftermFormat\n  \\phantomsection\n  \\label{#2}%\n  \\edef\\flmL@cur@defterm@label{\\flmL@cur@defterm@label,#2,}%\n  \\ifdeftermShowTerm \\flmDisplayTerm{#1: }\\fi\n}\n\\def\\flmL@cur@defterm@label{}\n\\def\\endflmL@defterm{%\n  \\par\n  \\vspace{\\belowdisplayskip}%\n  \\endgroup\n}\n\\ifcsname defterm\\endcsname \\else % there's no \\provideenvironment\n  \\def\\defterm#1{\\flmL@defterm{#1}}\n  \\def\\enddefterm{\\endflmL@defterm}\n\\fi\n\\providecommand\\flmTerm[4]{%\n  \\edef\\x{\\noexpand\\in@{,#2,}{\\flmL@cur@defterm@label}}%\n  \\x\\ifin@\n    \\flmTermDisplayInDefterm{#4}%\n  \\else\n    \\flmTermDisplayTermRef{#2}{#4}%\n  \\fi\n}\n\\robustify\\flmTerm\n\\providecommand\\flmTermDisplayTermRef[2]{%\n  \\hyperref[#1]{\\flmTermFormat{#2}}%\n}\n\\providecommand\\flmTermDisplayInDefterm[1]{%\n  \\textbf{\\textit{#1}}%\n}\n\\providecommand\\flmTermFormat[1]{%\n  #1%\n}\n\\ifcsname flmFloat\\endcsname \\else % no \\provideenvironment :/\n  \\def\\flmFloat#1#2{%\n    \\edef\\flmFloat@curfloatenv{#1}%\n    \\edef\\flmFloat@usefloatenv{#1}%\n    \\edef\\flmFloat@useenvargs{\\csname flmFloatPlacementArgs#2\\endcsname}%\n    \\ifcsname flmFloatSetUseEnv#1\\endcsname\n      \\csname flmFloatSetUseEnv#1\\endcsname\n    \\fi\n    \\ifcsname flmFloatSetUseConfig#2\\endcsname\n      \\csname flmFloatSetUseConfig#2\\endcsname\n    \\fi\n    \\edef\\x{%\n      \\noexpand\\begin{\\flmFloat@usefloatenv}\\expandonce\\flmFloat@useenvargs}%\n    \\x\n    \\centering\n  }\n  \\def\\endflmFloat{%\n    \\expandafter\\end\\expandafter{\\flmFloat@usefloatenv}%\n  }\n\\fi\n\\providecommand\\flmFloatPlacementArgsNumCap{[tbph]}\n\\providecommand\\flmFloatPlacementArgsNumOnly{[tbph]}\n\\providecommand\\flmFloatPlacementArgsCapOnly{[h]}\n\\providecommand\\flmFloatPlacementArgsBare{[h]}\n\\providecommand\\flmFloatSetUseConfigBare{%\n  \\edef\\flmFloat@usefloatenv{center}%\n  \\def\\flmFloat@useenvargs{%\n    \\edef\\@captype{\\flmFloat@curfloatenv}%\n  }%\n}\n\\providecommand\\flmFloatSetUseConfigCapOnly{\\flmFloatSetUseConfigBare}\n\n\n\n\\def\\flmLInlineVerbatimEnv#1{%\n  \\begingroup\n  \\catcode`\\$=12\\relax%\n  \\catcode`\\&=12\\relax%\n  \\catcode`\\#=12\\relax%\n  \\catcode`\\^=12\\relax%\n  \\catcode`\\_=12\\relax%\n  \\catcode`\\%=12\\relax%\n  \\catcode`\\{=12\\relax%\n  \\catcode`\\}=12\\relax%\n  \\catcode`\\\\=12\\relax%\n  \\flmLInlineVerbatimEnv@{#1}%\n}\n\\begingroup\n  \\catcode`|=0\\relax%\n  \\catcode`[=1\\relax%\n  \\catcode`]=2\\relax%\n  \\catcode`\\{=12\\relax%\n  \\catcode`\\}=12\\relax%\n  \\catcode`\\\\=12\\relax%\n  |long|gdef|flmLInlineVerbatimEnv@#1[%\n      |def|flmL@tmp@ReadThisVerbatimEnvContent##1\\end{#1}[%\n          |endgroup|end[#1]|flmLinlineverbatimenv[#1][##1]%\n      ]%\n      |flmL@tmp@ReadThisVerbatimEnvContent%\n  ]%\n|endgroup\n\n\\long\\def\\flmLinlineverbatimenv#1#2{%\n  \\begingroup\n  \\obeyspaces\n  \\obeylines\n  \\ifcsname #1Format\\endcsname\n     \\csname #1Format\\endcsname{\\ignorespaces #2\\unskip}%\n  \\else\n     \\flmInlineVerbatimFormatDefault{\\ignorespaces #2\\unskip}%\n  \\fi\n  \\endgroup\n}\n\n\n\\def\\flmInlineVerb#1#2{% cf. \\verb definition in LaTeX sources latex.ltx\n  \\relax\\ifmmode\\hbox\\else\\leavevmode\\null\\fi\n  \\bgroup\n    \\expandafter\\def\\expandafter\\verb@egroup\\expandafter{\\verb@egroup #2}%\n    \\let\\do\\@makeother \\dospecials\n    \\language\\l@nohyphenation\n    #1%\n    \\flmInlineVerb@\n}\n\\def\\flmInlineVerb@{%\n  \\catcode`\\{=12\\relax \\catcode`\\}=12\\relax\n  \\expandafter\\@ifnextchar\\flm@literalBgroup{%\n    \\flmInlineVerb@WithBgroup\n  }{%\n    \\flmInlineVerb@@\n  }%\n}\n\\def\\flmInlineVerb@WithBgroup#1{% #1 == '{'\n  \\@vobeyspaces\\frenchspacing\n    \\expandafter\\@sverb\\expandafter{\\flm@literalEgroup}%\n}\n\\begingroup\n  \\catcode`\\:=12\\relax\n  \\lccode`\\:=`\\{\\relax\n  \\catcode`\\;=12\\relax\n  \\lccode`\\;=`\\}\\relax\n  \\lowercase{\\endgroup\\xdef\\flm@literalBgroup{:}\\xdef\\flm@literalEgroup{;}}\n\\def\\flmInlineVerb@ClosingChar#1{%\n  \\ifcsname flmInlineVerb@ClosingChar@#1\\endcsname\n    \\csname flmInlineVerb@ClosingChar@#1\\endcsname\n  \\else\n    #1%\n  \\fi\n}\n\\def\\flmInlineVerb@DefineClosingChar#1#2{%\n  \\expandafter\\edef\\csname flmInlineVerb@ClosingChar@#1\\endcsname{#2}%\n}\n\\flmInlineVerb@DefineClosingChar{[}{]}\n\\flmInlineVerb@DefineClosingChar{(}{)}\n\\flmInlineVerb@DefineClosingChar{<}{>}\n\\flmInlineVerb@DefineClosingChar{|}{|}\n\\def\\flmInlineVerb@@#1{%\n  \\edef\\x{\\flmInlineVerb@ClosingChar#1}%\n  \\expandafter\\@sverb\\expandafter{\\x}%\n}\n\n\n\n% block environments (verbatimcode) are defined using the {verbatim} package.\n% inline environments (verbatimtext) use our custom flmLInlineVerbatimEnv above.\n%\n% Note that we cannot use \\verb from latex directly because \\verb doesn't understand\n% braced arguments like \\verb{abc}.\n\n\n\\ifcsname verbatimcode\\endcsname\\else\n  \\newenvironment{verbatimcode}{%\n    \\begingroup\n    \\parskip=\\z@\\relax\n    \\ttfamily\n    \\verbatim\n  }{%\n    \\endverbatim\n    \\endgroup\n  }\n\\fi\n\n\\ifcsname verbatimtext\\endcsname\\else\n  \\newenvironment{verbatimtext}{\\flmLInlineVerbatimEnv{verbatimtext}}{}\n\\fi\n\n\\providecommand\\flmInlineVerbatimFormatDefault[1]{#1}\n\n\n\\def\\verba{\\flmInlineVerb{\\itshape}{}}\n\\def\\verbtext{\\flmInlineVerb{}{}}\n\\def\\verbcode{\\flmInlineVerb{\\ttfamily}{}}\n\n\n";
/* 000006 */ 
//# sourceMappingURL=flm.flmrecomposer.purelatex.map