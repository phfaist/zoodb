/* 000001 */ // Transcrypt'ed from Python, 2026-06-30 21:51:21
/* 000006 */ var logging = {};
/* 000006 */ var re = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
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
/* 000066 */ 	get __init__ () {return __get__ (this, function (self, options) {
/* 000066 */ 		if (arguments.length) {
/* 000066 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000066 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000066 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000066 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000066 */ 					switch (__attrib0__) {
/* 000066 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000066 */ 						case 'options': var options = __allkwargs0__ [__attrib0__]; break;
/* 000066 */ 					}
/* 000066 */ 				}
/* 000066 */ 			}
/* 000066 */ 		}
/* 000066 */ 		else {
/* 000066 */ 		}
/* 000078 */ 		__call__ (__call__ (__super__, null, FLMPureLatexRecomposer, '__init__'), null, self);
/* 000080 */ 		if (__t__ (options === null)) {
/* 000081 */ 			var options = dict ({});
/* 000081 */ 		}
/* 000083 */ 		self.options = __call__ (dict, null, options);
/* 000084 */ 		self.options_recomposer = __call__ (dict, null, (function () {
/* 000084 */ 			var __accu0__ = options;
/* 000084 */ 			return __call__ (__accu0__.py_get, __accu0__, 'recomposer', dict ({}));
/* 000084 */ 		}) ());
/* 000085 */ 		self.render_context = (function () {
/* 000085 */ 			var __accu0__ = options;
/* 000085 */ 			return __call__ (__accu0__.py_get, __accu0__, 'render_context', null);
/* 000085 */ 		}) ();
/* 000087 */ 		self.packages = dict ({});
/* 000088 */ 		self.safe_to_label = dict ({});
/* 000089 */ 		self.label_to_safe = dict ({});
/* 000090 */ 		self.safe_label_counter = 1;
/* 000094 */ 		var safe_ref_types = __call__ (dict, null, (function () {
/* 000094 */ 			var __accu0__ = self.options_recomposer;
/* 000094 */ 			return __call__ (__accu0__.py_get, __accu0__, 'safe_label_ref_types', dict ({}));
/* 000094 */ 		}) ());
/* 000097 */ 		var __iterable0__ = __call__ (list, null, (function () {
/* 000097 */ 			var __accu0__ = safe_ref_types;
/* 000097 */ 			return __call__ (__accu0__.py_keys, __accu0__);
/* 000097 */ 		}) ());
/* 000097 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000097 */ 			var ref_domain = __getitem__ (__iterable0__, __index0__);
/* 000098 */ 			var dic = __call__ (dict, null, __getitem__ (safe_ref_types, ref_domain));
/* 000099 */ 			__setitem__ (safe_ref_types, ref_domain, dic);
/* 000099 */ 		}
/* 000100 */ 		self.safe_ref_types = safe_ref_types;
/* 000100 */ 	});},
/* 000103 */ 	get recompose_pure_latex () {return __get__ (this, function (self, node) {
/* 000103 */ 		if (arguments.length) {
/* 000103 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000103 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000103 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000103 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000103 */ 					switch (__attrib0__) {
/* 000103 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000103 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000103 */ 					}
/* 000103 */ 				}
/* 000103 */ 			}
/* 000103 */ 		}
/* 000103 */ 		else {
/* 000103 */ 		}
/* 000116 */ 		var latex = (function () {
/* 000116 */ 			var __accu0__ = self;
/* 000116 */ 			return __call__ (__accu0__.start, __accu0__, node);
/* 000116 */ 		}) ();
/* 000117 */ 		return dict ({'latex': latex, 'packages': self.packages});
/* 000117 */ 	});},
/* 000124 */ 	rx_escape_chars_text: _default_rx_escape_chars_text,
/* 000126 */ 	get get_options () {return __get__ (this, function (self, key) {
/* 000126 */ 		if (arguments.length) {
/* 000126 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000126 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000126 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000126 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000126 */ 					switch (__attrib0__) {
/* 000126 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000126 */ 						case 'key': var key = __allkwargs0__ [__attrib0__]; break;
/* 000126 */ 					}
/* 000126 */ 				}
/* 000126 */ 			}
/* 000126 */ 		}
/* 000126 */ 		else {
/* 000126 */ 		}
/* 000139 */ 		return __call__ (dict, null, (function () {
/* 000139 */ 			var __accu0__ = self.options;
/* 000139 */ 			return __call__ (__accu0__.py_get, __accu0__, key, dict ({}));
/* 000139 */ 		}) ());
/* 000139 */ 	});},
/* 000141 */ 	get ensure_latex_package () {return __get__ (this, function (self, packagename, options) {
/* 000141 */ 		if (typeof options == 'undefined' || (options != null && options.hasOwnProperty ("__kwargtrans__"))) {;
/* 000141 */ 			var options = null;
/* 000141 */ 		};
/* 000141 */ 		if (arguments.length) {
/* 000141 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000141 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000141 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000141 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000141 */ 					switch (__attrib0__) {
/* 000141 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000141 */ 						case 'packagename': var packagename = __allkwargs0__ [__attrib0__]; break;
/* 000141 */ 						case 'options': var options = __allkwargs0__ [__attrib0__]; break;
/* 000141 */ 					}
/* 000141 */ 				}
/* 000141 */ 			}
/* 000141 */ 		}
/* 000141 */ 		else {
/* 000141 */ 		}
/* 000155 */ 		if (__t__ (!__in__ (packagename, self.packages))) {
/* 000156 */ 			__setitem__ (self.packages, packagename, dict ({'options': options}));
/* 000159 */ 			return ;
/* 000159 */ 		}
/* 000160 */ 		if (__t__ (options === null)) {
/* 000162 */ 			return ;
/* 000162 */ 		}
/* 000163 */ 		if (__t__ (__getitem__ (__getitem__ (self.packages, packagename), 'options') === null)) {
/* 000165 */ 			__setitem__ (__getitem__ (self.packages, packagename), 'options', options);
/* 000165 */ 		}
/* 000166 */ 		if (__t__ (__eq__ (__getitem__ (__getitem__ (self.packages, packagename), 'options'), options))) {
/* 000168 */ 			return ;
/* 000168 */ 		}
/* 000170 */ 		var __except0__ = __call__ (ValueError, null, "Conflicting pure latex package options requested for package {} in pure latex FLM export: '{}' ≠ '{}'".format (packagename, __getitem__ (__getitem__ (self.packages, packagename), 'options'), options));
/* 000170 */ 		__except0__.__cause__ = null;
/* 000170 */ 		throw __except0__;
/* 000170 */ 	});},
/* 000175 */ 	get make_safe_label () {return __get__ (this, function (self, ref_domain, ref_type, ref_label, resource_info) {
/* 000175 */ 		if (arguments.length) {
/* 000175 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000175 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000175 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000175 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000175 */ 					switch (__attrib0__) {
/* 000175 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000175 */ 						case 'ref_domain': var ref_domain = __allkwargs0__ [__attrib0__]; break;
/* 000175 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000175 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000175 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000175 */ 					}
/* 000175 */ 				}
/* 000175 */ 			}
/* 000175 */ 		}
/* 000175 */ 		else {
/* 000175 */ 		}
/* 000178 */ 		var use_raw = false;
/* 000179 */ 		var ref_to_global_key = (function __lambda__ (ref_domain, ref_type, ref_label, resource_info) {
/* 000179 */ 			if (arguments.length) {
/* 000179 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000179 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000179 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000179 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000179 */ 						switch (__attrib0__) {
/* 000179 */ 							case 'ref_domain': var ref_domain = __allkwargs0__ [__attrib0__]; break;
/* 000179 */ 							case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000179 */ 							case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000179 */ 							case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000179 */ 						}
/* 000179 */ 					}
/* 000179 */ 				}
/* 000179 */ 			}
/* 000179 */ 			else {
/* 000179 */ 			}
/* 000179 */ 			return '{}:{}'.format (ref_type, ref_label);
/* 000179 */ 		});
/* 000182 */ 		if (__t__ (__in__ (ref_domain, self.safe_ref_types))) {
/* 000183 */ 			var d = (function () {
/* 000183 */ 				var __accu0__ = __getitem__ (self.safe_ref_types, ref_domain);
/* 000183 */ 				return __call__ (__accu0__.py_get, __accu0__, ref_type);
/* 000183 */ 			}) ();
/* 000184 */ 			if (__t__ (!__t__ ((d)))) {
/* 000185 */ 				// pass;
/* 000185 */ 			}
/* 000186 */ 			else if (__t__ (__t__ (d === true) || d === false)) {
/* 000187 */ 				var use_raw = d;
/* 000187 */ 			}
/* 000188 */ 			else {
/* 000190 */ 				if (__t__ (__in__ ('use_raw', d))) {
/* 000191 */ 					var use_raw = __getitem__ (d, 'use_raw');
/* 000191 */ 				}
/* 000192 */ 				if (__t__ (__t__ (__in__ ('ref_to_global_key', d)) && __getitem__ (d, 'ref_to_global_key'))) {
/* 000193 */ 					var ref_to_global_key = __getitem__ (d, 'ref_to_global_key');
/* 000193 */ 				}
/* 000193 */ 			}
/* 000193 */ 		}
/* 000195 */ 		if (__t__ (use_raw)) {
/* 000197 */ 			return dict ({'safe_label': '{}:{}'.format (ref_type, ref_label)});
/* 000197 */ 		}
/* 000199 */ 		var ref_global_key = __call__ (ref_to_global_key, null, ref_domain, ref_type, ref_label, resource_info);
/* 000203 */ 		if (__t__ (!__in__ (ref_domain, self.label_to_safe))) {
/* 000204 */ 			__setitem__ (self.label_to_safe, ref_domain, __call__ (_Dict, null));
/* 000205 */ 			__setitem__ (self.safe_to_label, ref_domain, __call__ (_Dict, null));
/* 000205 */ 		}
/* 000207 */ 		var label_to_safe_map = __getitem__ (self.label_to_safe, ref_domain);
/* 000208 */ 		var value = (function () {
/* 000208 */ 			var __accu0__ = label_to_safe_map;
/* 000208 */ 			return __call__ (__accu0__.py_get, __accu0__, ref_global_key, null);
/* 000208 */ 		}) ();
/* 000209 */ 		if (__t__ (value !== null)) {
/* 000211 */ 			return value;
/* 000211 */ 		}
/* 000213 */ 		var safe = '{}{}'.format (ref_domain, __call__ (str, null, self.safe_label_counter));
/* 000214 */ 		self.safe_label_counter = __call__ (__iadd__, null, self.safe_label_counter, 1);
/* 000216 */ 		var sinfo = dict ({'safe_label': safe});
/* 000218 */ 		__setitem__ (__getitem__ (self.label_to_safe, ref_domain), ref_global_key, sinfo);
/* 000219 */ 		__setitem__ (__getitem__ (self.safe_to_label, ref_domain), safe, dict ({'ref_global_key': ref_global_key, 'ref_type': ref_type, 'ref_label': ref_label, 'resource_info': resource_info}));
/* 000226 */ 		return sinfo;
/* 000226 */ 	});},
/* 000232 */ 	get recompose_delimited_nodelist () {return __get__ (this, function (self, delimiters, nodelist, n) {
/* 000232 */ 		if (arguments.length) {
/* 000232 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000232 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000232 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000232 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000232 */ 					switch (__attrib0__) {
/* 000232 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000232 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000232 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000232 */ 						case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000232 */ 					}
/* 000232 */ 				}
/* 000232 */ 			}
/* 000232 */ 		}
/* 000232 */ 		else {
/* 000232 */ 		}
/* 000233 */ 		var need_protective_braces = false;
/* 000234 */ 		if (__t__ (__t__ (__eq__ (__getitem__ (delimiters, 0), '[')) && __eq__ (__getitem__ (delimiters, 1), ']'))) {
/* 000235 */ 			if (__t__ (__t__ (__eq__ (__call__ (len, null, n.nodelist), 1)) && __t__ ((function () {
/* 000235 */ 				var __accu0__ = __getitem__ (n.nodelist, 0);
/* 000235 */ 				return __call__ (__accu0__.isNodeType, __accu0__, LatexGroupNode);
/* 000235 */ 			}) ()) && __eq__ (__getitem__ (__getitem__ (n.nodelist, 0).delimiters, 0), '{'))) {
/* 000238 */ 				var need_protective_braces = false;
/* 000238 */ 			}
/* 000239 */ 			else if (__t__ (__t__ (__eq__ (__call__ (len, null, n.nodelist), 1)) && __t__ ((function () {
/* 000239 */ 				var __accu0__ = __getitem__ (n.nodelist, 0);
/* 000239 */ 				return __call__ (__accu0__.isNodeType, __accu0__, LatexCharsNode);
/* 000240 */ 			}) ()) && (function () {
/* 000240 */ 				var __accu0__ = _rx_safe_chars_optarg;
/* 000240 */ 				return __call__ (__accu0__.match, __accu0__, __getitem__ (n.nodelist, 0).chars);
/* 000240 */ 			}) () !== null)) {
/* 000242 */ 				var need_protective_braces = false;
/* 000242 */ 			}
/* 000243 */ 			else {
/* 000244 */ 				var need_protective_braces = true;
/* 000244 */ 			}
/* 000244 */ 		}
/* 000246 */ 		if (__t__ (need_protective_braces)) {
/* 000247 */ 			var delimiters = tuple (['[{', '}]']);
/* 000247 */ 		}
/* 000249 */ 		return __call__ (__call__ (__super__, null, FLMPureLatexRecomposer, 'recompose_delimited_nodelist'), null, self, delimiters, nodelist, n);
/* 000249 */ 	});},
/* 000254 */ 	recompose_specinfo_method: 'recompose_pure_latex'
/* 000254 */ });
/* 000259 */ export var _rx_safe_chars_optarg = (function () {
/* 000259 */ 	var __accu0__ = re;
/* 000259 */ 	return __call__ (__accu0__.compile, __accu0__, '[-a-zA-Z0-9_+ !@#$&*()<>,./:;"\'|]*');
/* 000259 */ }) ();
/* 000264 */ export var default_purelatex_defs_makeatletter = "\n\n\\providecommand\\flmRequirePackage[2][]{\\usepackage[#1]{#2}}\n\n\\flmRequirePackage{verbatim}\n\n\n\\providecommand\\flmFinalPreambleSetup{}\n\n% For references -- pin down custom labels wherever we want for \\zcref\n\\@ifundefined{c@flm@internal@refcnt}{\\newcounter{flm@internal@refcnt}}{}\n\\providecommand\\flmLDefLabelText[2]{%\n  \\begingroup\n    \\def\\theflm@internal@refcnt{#1}%\n    \\refstepcounter{flm@internal@refcnt}%\n    \\zcsetup{reftype=flm--internal--ref}%\n    #2%\n  \\endgroup\n}\n\\g@addto@macro\\flmFinalPreambleSetup{%\n  \\ifcsname zcRefTypeSetup\\endcsname\n    \\zcRefTypeSetup{flm--internal--ref}{\n      Name-sg = ,       % no name prefix (singular)\n      name-sg = ,       % no name prefix (singular, lowercase)\n      Name-pl = ,       % no name prefix (plural)\n      name-pl = ,       % no name prefix (plural, lowercase)\n    }%\n  \\fi\n}\n\n\n\n\\def\\flmL@parse@labels#1{%\n  \\def\\flmL@val@labels{}%\n  \\def\\flmL@val@firstlabel{}%\n  \\flmL@parse@labels@maybelbl{#1}%\n}\n\\def\\flmL@val@labels{}%\n\\def\\flmL@val@firstlabel{}%\n\\def\\flmL@parse@labels@maybelbl#1{%\n  \\@ifnextchar\\label{\\flmL@parse@labels@lbl{#1}}{#1}%\n}\n\\def\\flmL@parse@labels@lbl#1\\label#2{%\n  \\if\\relax\\detokenize\\expandafter{\\flmL@val@firstlabel}\\relax\n    % first label\n    \\def\\flmL@val@firstlabel{#2}%\n    \\def\\flmL@val@labels{#2}%\n  \\else\n    \\edef\\flmL@val@labels{\\expandafter\\noexpand\\flmL@val@labels,#2}%\n  \\fi\n  \\flmL@parse@labels@maybelbl{#1}%\n}\n\n\n\n\n% For defterms -- \n\n\\newif\\ifdeftermShowTerm\n\\deftermShowTermtrue\n\\providecommand\\flmLdeftermAbove{\\vspace{\\abovedisplayskip}}\n\\providecommand\\flmLdeftermBelow{\\vspace{\\belowdisplayskip}}\n\\def\\flmL@defterm#1{%\n  \\begingroup\n  \\def\\flmL@val@deftermterm{#1}%\n  \\par\n  \\flmLdeftermAbove\n  \\flmDeftermFormat\n  \\phantomsection\n  \\flmL@parse@labels\\flmL@defterm@next\n}\n\\def\\flmL@defterm@next{%\n  \\expandafter\\flmL@defterm@dolabels\\expandafter{\\flmL@val@labels}%\n  \\edef\\flmL@cur@defterm@label{\\flmL@cur@defterm@label,\\flmL@val@firstlabel,}%\n  \\ifdeftermShowTerm \\flmDisplayTerm{\\flmL@val@deftermterm: }\\fi\n  \\flmL@defterm@done\n}\n\\def\\flmL@defterm@dolabels#1{%\n  \\@for\\flmL@tmp:={#1}\\do{%\n    \\expandafter\\flmL@defterm@dolabel\\expandafter{\\flmL@tmp}%\n  }%\n}\n\\def\\flmL@defterm@dolabel#1{%\n  \\flmLDefLabelText{\\flmL@val@deftermterm}{\\label{#1}}%\n}\n\\def\\flmL@defterm@done{}\n%\n\\def\\flmL@cur@defterm@label{}\n\\def\\endflmL@defterm{%\n  \\par\n  \\flmLdeftermBelow\n  \\endgroup\n}\n\\ifcsname defterm\\endcsname \\else % there's no \\provideenvironment\n  \\def\\defterm#1{\\flmL@defterm{#1}}\n  \\def\\enddefterm{\\endflmL@defterm}\n\\fi\n\\providecommand\\flmTerm[4]{%\n  \\edef\\x{\\noexpand\\in@{,#2,}{\\flmL@cur@defterm@label}}%\n  \\x\\ifin@\n    \\flmTermDisplayInDefterm{#4}%\n  \\else\n    \\flmTermDisplayTermRef{#2}{#4}%\n  \\fi\n}\n\\robustify\\flmTerm\n\\providecommand\\flmTermDisplayTermRef[2]{%\n  \\hyperref[#1]{\\flmTermFormat{#2}}%\n}\n\\providecommand\\flmTermDisplayInDefterm[1]{%\n  \\textbf{\\textit{#1}}%\n}\n\\providecommand\\flmTermFormat[1]{%\n  #1%\n}\n\\ifcsname flmFloat\\endcsname \\else % no \\provideenvironment :/\n  \\def\\flmFloat#1#2{%\n    \\edef\\flmFloat@curfloatenv{#1}%\n    \\edef\\flmFloat@usefloatenv{#1}%\n    \\edef\\flmFloat@useenvargs{\\csname flmFloatPlacementArgs#2\\endcsname}%\n    \\ifcsname flmFloatSetUseEnv#1\\endcsname\n      \\csname flmFloatSetUseEnv#1\\endcsname\n    \\fi\n    \\ifcsname flmFloatSetUseConfig#2\\endcsname\n      \\csname flmFloatSetUseConfig#2\\endcsname\n    \\fi\n    \\edef\\x{%\n      \\noexpand\\begin{\\flmFloat@usefloatenv}\\expandonce\\flmFloat@useenvargs}%\n    \\x\n    \\centering\n  }\n  \\def\\endflmFloat{%\n    \\expandafter\\end\\expandafter{\\flmFloat@usefloatenv}%\n  }\n\\fi\n\\providecommand\\flmFloatPlacementArgsNumCap{[tbph]}\n\\providecommand\\flmFloatPlacementArgsNumOnly{[tbph]}\n\\providecommand\\flmFloatPlacementArgsCapOnly{[h]}\n\\providecommand\\flmFloatPlacementArgsBare{[h]}\n\\providecommand\\flmFloatSetUseConfigBare{%\n  \\edef\\flmFloat@usefloatenv{center}%\n  \\def\\flmFloat@useenvargs{%\n    \\edef\\@captype{\\flmFloat@curfloatenv}%\n  }%\n}\n\\providecommand\\flmFloatSetUseConfigCapOnly{\\flmFloatSetUseConfigBare}\n\n\n\n\\def\\flmLInlineVerbatimEnv#1{%\n  \\begingroup\n  \\catcode`\\$=12\\relax%\n  \\catcode`\\&=12\\relax%\n  \\catcode`\\#=12\\relax%\n  \\catcode`\\^=12\\relax%\n  \\catcode`\\_=12\\relax%\n  \\catcode`\\%=12\\relax%\n  \\catcode`\\{=12\\relax%\n  \\catcode`\\}=12\\relax%\n  \\catcode`\\\\=12\\relax%\n  \\flmLInlineVerbatimEnv@{#1}%\n}\n\\begingroup\n  \\catcode`|=0\\relax%\n  \\catcode`[=1\\relax%\n  \\catcode`]=2\\relax%\n  \\catcode`\\{=12\\relax%\n  \\catcode`\\}=12\\relax%\n  \\catcode`\\\\=12\\relax%\n  |long|gdef|flmLInlineVerbatimEnv@#1[%\n      |def|flmL@tmp@ReadThisVerbatimEnvContent##1\\end{#1}[%\n          |endgroup|end[#1]|flmLinlineverbatimenv[#1][##1]%\n      ]%\n      |flmL@tmp@ReadThisVerbatimEnvContent%\n  ]%\n|endgroup\n\n\\long\\def\\flmLinlineverbatimenv#1#2{%\n  \\begingroup\n  \\obeyspaces\n  \\obeylines\n  \\ifcsname #1Format\\endcsname\n     \\csname #1Format\\endcsname{\\ignorespaces #2\\unskip}%\n  \\else\n     \\flmInlineVerbatimFormatDefault{\\ignorespaces #2\\unskip}%\n  \\fi\n  \\endgroup\n}\n\n\n\\def\\flmInlineVerb#1#2{% cf. \\verb definition in LaTeX sources latex.ltx\n  \\relax\\ifmmode\\hbox\\else\\leavevmode\\null\\fi\n  \\bgroup\n    \\expandafter\\def\\expandafter\\verb@egroup\\expandafter{\\verb@egroup #2}%\n    \\let\\do\\@makeother \\dospecials\n    \\language\\l@nohyphenation\n    #1%\n    \\flmInlineVerb@\n}\n\\def\\flmInlineVerb@{%\n  \\catcode`\\{=12\\relax \\catcode`\\}=12\\relax\n  \\expandafter\\@ifnextchar\\flm@literalBgroup{%\n    \\flmInlineVerb@WithBgroup\n  }{%\n    \\flmInlineVerb@@\n  }%\n}\n\\def\\flmInlineVerb@WithBgroup#1{% #1 == '{'\n  \\@vobeyspaces\\frenchspacing\n    \\expandafter\\@sverb\\expandafter{\\flm@literalEgroup}%\n}\n\\begingroup\n  \\catcode`\\:=12\\relax\n  \\lccode`\\:=`\\{\\relax\n  \\catcode`\\;=12\\relax\n  \\lccode`\\;=`\\}\\relax\n  \\lowercase{\\endgroup\\xdef\\flm@literalBgroup{:}\\xdef\\flm@literalEgroup{;}}\n\\def\\flmInlineVerb@ClosingChar#1{%\n  \\ifcsname flmInlineVerb@ClosingChar@#1\\endcsname\n    \\csname flmInlineVerb@ClosingChar@#1\\endcsname\n  \\else\n    #1%\n  \\fi\n}\n\\def\\flmInlineVerb@DefineClosingChar#1#2{%\n  \\expandafter\\edef\\csname flmInlineVerb@ClosingChar@#1\\endcsname{#2}%\n}\n\\flmInlineVerb@DefineClosingChar{[}{]}\n\\flmInlineVerb@DefineClosingChar{(}{)}\n\\flmInlineVerb@DefineClosingChar{<}{>}\n\\flmInlineVerb@DefineClosingChar{|}{|}\n\\def\\flmInlineVerb@@#1{%\n  \\edef\\x{\\flmInlineVerb@ClosingChar#1}%\n  \\expandafter\\@sverb\\expandafter{\\x}%\n}\n\n\n\n% block environments (verbatimcode) are defined using the {verbatim} package.\n% inline environments (verbatimtext) use our custom flmLInlineVerbatimEnv above.\n%\n% Note that we cannot use \\verb from latex directly because \\verb doesn't understand\n% braced arguments like \\verb{abc}.\n\n\n\\ifcsname verbatimcode\\endcsname\\else\n  \\newenvironment{verbatimcode}{%\n    \\begingroup\n    \\parskip=\\z@\\relax\n    \\ttfamily\n    \\verbatim\n  }{%\n    \\endverbatim\n    \\endgroup\n  }\n\\fi\n\n\\ifcsname verbatimtext\\endcsname\\else\n  \\newenvironment{verbatimtext}{\\flmLInlineVerbatimEnv{verbatimtext}}{}\n\\fi\n\n\\providecommand\\flmInlineVerbatimFormatDefault[1]{#1}\n\n\n\\def\\flmFmtVRBverba{\\itshape}\n\\def\\flmFmtVRBverbtext{}\n\\def\\flmFmtVRBverbcode{\\ttfamily}\n\\def\\flmFmtVRB#1{%\n  \\ifcsname flmFmtVRB#1\\endcsname\n    \\csname flmFmtVRB#1\\endcsname\n  \\else\n    \\flmFmtVRBverbcode\n  \\fi\n}\n\n\\def\\verba{\\flmInlineVerb{\\flmFmtVRBverba}{}}\n\\def\\verbtext{\\flmInlineVerb{\\flmFmtVRBverbtext}{}}\n\\def\\verbcode{\\flmInlineVerb{\\flmFmtVRBverbcode}{}}\n\n\n\n\n% lines; quotes, addresses, blockquotes\n\\providecommand\\flmQuoteSetup[1]{%\n  \\ifcsname flmQuoteSetup@#1\\endcsname\n    \\csname flmQuoteSetup@#1\\endcsname\n  \\fi\n}\n\\providecommand\\flmQuoteAttributed[1]{%\n  \\par\\begingroup\\raggedleft---~#1\\par\\endgroup\n}\n\\providecommand\\flmQuoteBlock[1]{%\n  \\par\n  \\list{}{%\n    \\itemindent\\parindent\n    \\leftmargin=4em\\relax\n    %\\rightmargin\\leftmargin\n    }%\n  \\item\\relax\n  #1%\n  \\endlist\n}\n\\ifdefined\\address\\else\n\\newenvironment{address}{%\n  \\par\n  \\begingroup\n  \\small\n}{%\n  \\par\n  \\endgroup\n}\n\\fi\n\\ifdefined\\blockquote\\else\n\\newenvironment{blockquote}{%\n  \\par\n  \\list{}{%\n    \\itemindent\\parindent\n    \\leftmargin=4em\\relax\n    %\\rightmargin\\leftmargin\n    }%\n  \\item\\relax\n}{%\n  \\endlist\n}\n\\fi\n\n\n";
/* 000006 */ 
//# sourceMappingURL=flm.flmrecomposer.purelatex.map