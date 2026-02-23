/* 000001 */ // Transcrypt'ed from Python, 2026-02-23 19:58:48
/* 000007 */ var logging = {};
/* 000007 */ var re = {};
/* 000007 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000030 */ import * as numbering from './flm.feature.numbering.js';
/* 000029 */ import {build_counter_formatter} from './flm.counter.js';
/* 000027 */ import {Feature} from './flm.feature._base.js';
/* 000025 */ import {FLMArgumentSpec} from './flm.flmenvironment.js';
/* 000024 */ import {FLMEnvironmentSpecBase, FLMMacroSpecBase} from './flm.flmspecinfo.js';
/* 000018 */ import {LatexEnvironmentBodyContentsParser, MacroSpec, ParsingStateDeltaExtendLatexContextDb} from './pylatexenc.macrospec.js';
/* 000017 */ import * as latexnodes_parsers from './pylatexenc.latexnodes.parsers.js';
/* 000016 */ import * as latexnodes_nodes from './pylatexenc.latexnodes.nodes.js';
/* 000011 */ import {LatexWalkerLocatedError, ParsedArgumentsInfo, ParsingStateDeltaEnterMathMode} from './pylatexenc.latexnodes.js';
/* 000008 */ import * as __module_logging__ from './logging.js';
/* 000008 */ __nest__ (logging, '', __module_logging__);
/* 000007 */ import * as __module_re__ from './re.js';
/* 000007 */ __nest__ (re, '', __module_re__);
/* 000007 */ export {MacroSpec, FLMArgumentSpec, ParsingStateDeltaExtendLatexContextDb, ParsingStateDeltaEnterMathMode, LatexEnvironmentBodyContentsParser, Feature, build_counter_formatter, LatexWalkerLocatedError, FLMMacroSpecBase, latexnodes_parsers, latexnodes_nodes, ParsedArgumentsInfo, FLMEnvironmentSpecBase, numbering};
/* 000001 */ var __name__ = 'flm.feature.math';
/* 000009 */ export var logger = (function () {
/* 000009 */ 	var __accu0__ = logging;
/* 000009 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000009 */ }) ();
/* 000037 */ export var _default_math_environment_names = tuple (['equation', 'equation*', 'align', 'align*', 'gather', 'gather*']);
/* 000047 */ export var eq_default_counter_formatter_spec = dict ({'format_num': dict ({'template': '${arabic}'}), 'prefix_display': dict ({'singular': 'Eq.~', 'plural': 'Eqs.~', 'capital': dict ({'singular': 'Equation', 'plural': 'Equations'})}), 'delimiters': tuple (['(', ')']), 'join_spec': 'compact'});
/* 000062 */ export var FeatureMath =  __class__ ('FeatureMath', [Feature], {
/* 000062 */ 	__module__: __name__,
/* 000064 */ 	feature_name: 'math',
/* 000065 */ 	feature_title: 'Mathematical typesetting: equations and equation references',
/* 000067 */ 	get feature_flm_doc () {return __get__ (this, function (self) {
/* 000067 */ 		if (arguments.length) {
/* 000067 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000067 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000067 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000067 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000067 */ 					switch (__attrib0__) {
/* 000067 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000067 */ 					}
/* 000067 */ 				}
/* 000067 */ 			}
/* 000067 */ 		}
/* 000067 */ 		else {
/* 000067 */ 		}
/* 000068 */ 		return __add__ (__add__ ('\n            You can use the following environments and macros to typeset pretty display\n            math equations, create labels, and refer to them at other places in your\n            document.\n\n            Note that all equation labels must begin with the prefix \\verbcode{', self.eqref_ref_type), ':}.');
/* 000068 */ 	});},
/* 000078 */ 	feature_optional_dependencies: ['refs', 'numbering'],
/* 000080 */ 	feature_default_config: dict ({'counter_formatter': eq_default_counter_formatter_spec}),
/* 000084 */ 	get __init__ () {return __get__ (this, function (self, counter_formatter, math_environment_names, eqref_macro_name, eqref_ref_type) {
/* 000084 */ 		if (typeof counter_formatter == 'undefined' || (counter_formatter != null && counter_formatter.hasOwnProperty ("__kwargtrans__"))) {;
/* 000084 */ 			var counter_formatter = null;
/* 000084 */ 		};
/* 000084 */ 		if (typeof math_environment_names == 'undefined' || (math_environment_names != null && math_environment_names.hasOwnProperty ("__kwargtrans__"))) {;
/* 000084 */ 			var math_environment_names = null;
/* 000084 */ 		};
/* 000084 */ 		if (typeof eqref_macro_name == 'undefined' || (eqref_macro_name != null && eqref_macro_name.hasOwnProperty ("__kwargtrans__"))) {;
/* 000084 */ 			var eqref_macro_name = 'eqref';
/* 000084 */ 		};
/* 000084 */ 		if (typeof eqref_ref_type == 'undefined' || (eqref_ref_type != null && eqref_ref_type.hasOwnProperty ("__kwargtrans__"))) {;
/* 000084 */ 			var eqref_ref_type = 'eq';
/* 000084 */ 		};
/* 000084 */ 		if (arguments.length) {
/* 000084 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000084 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000084 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000084 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000084 */ 					switch (__attrib0__) {
/* 000084 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000084 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000084 */ 						case 'math_environment_names': var math_environment_names = __allkwargs0__ [__attrib0__]; break;
/* 000084 */ 						case 'eqref_macro_name': var eqref_macro_name = __allkwargs0__ [__attrib0__]; break;
/* 000084 */ 						case 'eqref_ref_type': var eqref_ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000084 */ 					}
/* 000084 */ 				}
/* 000084 */ 			}
/* 000084 */ 		}
/* 000084 */ 		else {
/* 000084 */ 		}
/* 000091 */ 		__call__ (__call__ (__super__, null, FeatureMath, '__init__'), null, self);
/* 000093 */ 		if (__t__ (counter_formatter === null)) {
/* 000094 */ 			var counter_formatter = __getitem__ (self.feature_default_config, 'counter_formatter');
/* 000094 */ 		}
/* 000095 */ 		self.counter_formatter = __call__ (build_counter_formatter, null, counter_formatter, eq_default_counter_formatter_spec, __kwargtrans__ ({counter_formatter_id: 'eq'}));
/* 000101 */ 		if (__t__ (math_environment_names === null)) {
/* 000102 */ 			var math_environment_names = _default_math_environment_names;
/* 000102 */ 		}
/* 000103 */ 		self.math_environment_names = math_environment_names;
/* 000105 */ 		self.eqref_macro_name = eqref_macro_name;
/* 000106 */ 		self.eqref_ref_type = eqref_ref_type;
/* 000108 */ 	});},
/* 000108 */ 	DocumentManager: __class__ ('DocumentManager', [Feature.DocumentManager], {
/* 000108 */ 		__module__: __name__,
/* 000109 */ 		get initialize () {return __get__ (this, function (self) {
/* 000109 */ 			if (arguments.length) {
/* 000109 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000109 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000109 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000109 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000109 */ 						switch (__attrib0__) {
/* 000109 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000109 */ 						}
/* 000109 */ 					}
/* 000109 */ 				}
/* 000109 */ 			}
/* 000109 */ 			else {
/* 000109 */ 			}
/* 000110 */ 			// pass;
/* 000110 */ 		});}
/* 000112 */ 	}),
/* 000112 */ 	RenderManager: __class__ ('RenderManager', [Feature.RenderManager], {
/* 000112 */ 		__module__: __name__,
/* 000113 */ 		get initialize () {return __get__ (this, function (self, counter_formatter) {
/* 000113 */ 			if (typeof counter_formatter == 'undefined' || (counter_formatter != null && counter_formatter.hasOwnProperty ("__kwargtrans__"))) {;
/* 000113 */ 				var counter_formatter = null;
/* 000113 */ 			};
/* 000113 */ 			if (arguments.length) {
/* 000113 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000113 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000113 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000113 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000113 */ 						switch (__attrib0__) {
/* 000113 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000113 */ 							case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000113 */ 						}
/* 000113 */ 					}
/* 000113 */ 				}
/* 000113 */ 			}
/* 000113 */ 			else {
/* 000113 */ 			}
/* 000115 */ 			if (__t__ (counter_formatter !== null)) {
/* 000116 */ 				self.counter_formatter = __call__ (build_counter_formatter, null, counter_formatter, eq_default_counter_formatter_spec, __kwargtrans__ ({counter_formatter_id: 'eq'}));
/* 000116 */ 			}
/* 000120 */ 			else {
/* 000122 */ 				self.counter_formatter = self.feature.counter_formatter;
/* 000122 */ 			}
/* 000124 */ 			self.equation_counter_iface = (function () {
/* 000124 */ 				var __accu0__ = numbering;
/* 000124 */ 				return __call__ (__accu0__.get_document_render_counter, __accu0__, self.render_context, 'equation', self.counter_formatter);
/* 000124 */ 			}) ();
/* 000128 */ 			self.equation_info_by_node = dict ({});
/* 000130 */ 			if (__t__ ((function () {
/* 000130 */ 				var __accu0__ = self.render_context;
/* 000130 */ 				return __call__ (__accu0__.supports_feature, __accu0__, 'refs');
/* 000130 */ 			}) ())) {
/* 000131 */ 				var refs_mgr = (function () {
/* 000131 */ 					var __accu0__ = self.render_context;
/* 000131 */ 					return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000131 */ 				}) ();
/* 000132 */ 				(function () {
/* 000132 */ 					var __accu0__ = refs_mgr;
/* 000132 */ 					return __call__ (__accu0__.register_counter_formatter, __accu0__, __kwargtrans__ ({counter_formatter: self.counter_formatter}));
/* 000132 */ 				}) ();
/* 000132 */ 			}
/* 000132 */ 		});},
/* 000136 */ 		get new_numbered_display_math () {return __get__ (this, function (self, node, lineno, custom_tag_flm_text) {
/* 000136 */ 			if (typeof custom_tag_flm_text == 'undefined' || (custom_tag_flm_text != null && custom_tag_flm_text.hasOwnProperty ("__kwargtrans__"))) {;
/* 000136 */ 				var custom_tag_flm_text = null;
/* 000136 */ 			};
/* 000136 */ 			if (arguments.length) {
/* 000136 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000136 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000136 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000136 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000136 */ 						switch (__attrib0__) {
/* 000136 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000136 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000136 */ 							case 'lineno': var lineno = __allkwargs0__ [__attrib0__]; break;
/* 000136 */ 							case 'custom_tag_flm_text': var custom_tag_flm_text = __allkwargs0__ [__attrib0__]; break;
/* 000136 */ 						}
/* 000136 */ 					}
/* 000136 */ 				}
/* 000136 */ 			}
/* 000136 */ 			else {
/* 000136 */ 			}
/* 000138 */ 			var key = tuple ([(function () {
/* 000138 */ 				var __accu0__ = self;
/* 000138 */ 				return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000138 */ 			}) (), lineno]);
/* 000139 */ 			if (__t__ (__in__ (key, self.equation_info_by_node))) {
/* 000140 */ 				return __getitem__ (self.equation_info_by_node, key);
/* 000140 */ 			}
/* 000142 */ 			if (__t__ (custom_tag_flm_text !== null)) {
/* 000143 */ 				var formatted_ref_flm_text = custom_tag_flm_text;
/* 000144 */ 				var eq_id = '_{}'.format (__getitem__ (key, 0));
/* 000145 */ 				if (__t__ (lineno)) {
/* 000146 */ 					var eq_id = __call__ (__iadd__, null, eq_id, '-{}'.format (lineno));
/* 000146 */ 				}
/* 000147 */ 				var eq_counter_value = null;
/* 000148 */ 				var eq_counter_numprefix = null;
/* 000148 */ 			}
/* 000149 */ 			else {
/* 000150 */ 				var eq_info = (function () {
/* 000150 */ 					var __accu0__ = self.equation_counter_iface;
/* 000150 */ 					return __call__ (__accu0__.register_item, __accu0__);
/* 000150 */ 				}) ();
/* 000151 */ 				var eq_counter_value = __getitem__ (eq_info, 'value');
/* 000152 */ 				var eq_counter_numprefix = __getitem__ (eq_info, 'numprefix');
/* 000153 */ 				var formatted_ref_flm_text = __getitem__ (eq_info, 'formatted_value');
/* 000154 */ 				var eq_id = (function () {
/* 000154 */ 					var __accu0__ = eq_counter_value;
/* 000154 */ 					return __call__ (__accu0__.targetidstr, __accu0__, __kwargtrans__ ({numprefix: eq_counter_numprefix}));
/* 000154 */ 				}) ();
/* 000154 */ 			}
/* 000156 */ 			var info = tuple ([eq_id, formatted_ref_flm_text, eq_counter_numprefix, eq_counter_value]);
/* 000157 */ 			__setitem__ (self.equation_info_by_node, key, info);
/* 000158 */ 			return info;
/* 000158 */ 		});}
/* 000158 */ 	}),
/* 000161 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
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
/* 000162 */ 		var environments = (function () {
/* 000162 */ 			var __accu0__ = [];
/* 000162 */ 			var __iterable0__ = self.math_environment_names;
/* 000162 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000166 */ 				var math_environment_name = __getitem__ (__iterable0__, __index0__);
/* 000166 */ 				(function () {
/* 000166 */ 					var __accu1__ = __accu0__;
/* 000163 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (MathEnvironment, null, math_environment_name));
/* 000163 */ 				}) ();
/* 000163 */ 			}
/* 000163 */ 			return __accu0__;
/* 000163 */ 		}) ();
/* 000168 */ 		var macros = [];
/* 000169 */ 		if (__t__ (self.eqref_macro_name !== null)) {
/* 000170 */ 			(function () {
/* 000170 */ 				var __accu0__ = macros;
/* 000171 */ 				return __call__ (__accu0__.append, __accu0__, __call__ (MathEqrefMacro, null, __kwargtrans__ ({macroname: self.eqref_macro_name, ref_type: self.eqref_ref_type})));
/* 000171 */ 			}) ();
/* 000171 */ 		}
/* 000177 */ 		return __call__ (dict, null, __kwargtrans__ ({macros: macros, environments: environments}));
/* 000177 */ 	});}
/* 000177 */ });
/* 000183 */ export var _EmptyClass =  __class__ ('_EmptyClass', [object], {
/* 000183 */ 	__module__: __name__,
/* 000183 */ });
/* 000186 */ export var _ProxyNodeWithRecomposedLatex =  __class__ ('_ProxyNodeWithRecomposedLatex', [object], {
/* 000186 */ 	__module__: __name__,
/* 000188 */ 	pos: null,
/* 000189 */ 	pos_end: null,
/* 000191 */ 	get __init__ () {return __get__ (this, function (self, verbatim) {
/* 000191 */ 		if (arguments.length) {
/* 000191 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000191 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000191 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000191 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000191 */ 					switch (__attrib0__) {
/* 000191 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000191 */ 						case 'verbatim': var verbatim = __allkwargs0__ [__attrib0__]; break;
/* 000191 */ 					}
/* 000191 */ 				}
/* 000191 */ 			}
/* 000191 */ 		}
/* 000191 */ 		else {
/* 000191 */ 		}
/* 000192 */ 		self._verbatim = verbatim;
/* 000195 */ 		self.flm_specinfo = __call__ (_EmptyClass, null);
/* 000196 */ 		self.flm_specinfo.recompose_flm_text = (function __lambda__ (node, recomposer) {
/* 000196 */ 			if (arguments.length) {
/* 000196 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000196 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000196 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000196 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000196 */ 						switch (__attrib0__) {
/* 000196 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000196 */ 							case 'recomposer': var recomposer = __allkwargs0__ [__attrib0__]; break;
/* 000196 */ 						}
/* 000196 */ 					}
/* 000196 */ 				}
/* 000196 */ 			}
/* 000196 */ 			else {
/* 000196 */ 			}
/* 000198 */ 			return (function () {
/* 000198 */ 				var __accu0__ = self;
/* 000198 */ 				return __call__ (__accu0__.recompose_flm_text, __accu0__, node, __kwargtrans__ ({recomposer: recomposer}));
/* 000198 */ 			}) ();
/* 000198 */ 		});
/* 000198 */ 	});},
/* 000200 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000200 */ 		if (arguments.length) {
/* 000200 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000200 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000200 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000200 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000200 */ 					switch (__attrib0__) {
/* 000200 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000200 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000200 */ 					}
/* 000200 */ 				}
/* 000200 */ 			}
/* 000200 */ 		}
/* 000200 */ 		else {
/* 000200 */ 		}
/* 000201 */ 		return (function () {
/* 000201 */ 			var __accu0__ = visitor;
/* 000201 */ 			return __call__ (__accu0__.visit_unknown_node, __accu0__, self);
/* 000201 */ 		}) ();
/* 000201 */ 	});},
/* 000203 */ 	get recompose_flm_text () {return __get__ (this, function (self, node, recomposer) {
/* 000203 */ 		if (arguments.length) {
/* 000203 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000203 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000203 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000203 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000203 */ 					switch (__attrib0__) {
/* 000203 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000203 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000203 */ 						case 'recomposer': var recomposer = __allkwargs0__ [__attrib0__]; break;
/* 000203 */ 					}
/* 000203 */ 				}
/* 000203 */ 			}
/* 000203 */ 		}
/* 000203 */ 		else {
/* 000203 */ 		}
/* 000204 */ 		return self._verbatim;
/* 000204 */ 	});},
/* 000206 */ 	get latex_verbatim () {return __get__ (this, function (self) {
/* 000206 */ 		if (arguments.length) {
/* 000206 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000206 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000206 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000206 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000206 */ 					switch (__attrib0__) {
/* 000206 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000206 */ 					}
/* 000206 */ 				}
/* 000206 */ 			}
/* 000206 */ 		}
/* 000206 */ 		else {
/* 000206 */ 		}
/* 000207 */ 		return self._verbatim;
/* 000207 */ 	});}
/* 000207 */ });
/* 000211 */ export var MathEnvironment =  __class__ ('MathEnvironment', [FLMEnvironmentSpecBase], {
/* 000211 */ 	__module__: __name__,
/* 000216 */ 	get get_flm_doc () {return __get__ (this, function (self) {
/* 000216 */ 		if (arguments.length) {
/* 000216 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000216 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000216 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000216 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000216 */ 					switch (__attrib0__) {
/* 000216 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000216 */ 					}
/* 000216 */ 				}
/* 000216 */ 			}
/* 000216 */ 		}
/* 000216 */ 		else {
/* 000216 */ 		}
/* 000217 */ 		return 'Display equation typeset as the corresponding LaTeX environment.';
/* 000217 */ 	});},
/* 000219 */ 	get __init__ () {return __get__ (this, function (self, environmentname, is_numbered) {
/* 000219 */ 		if (typeof is_numbered == 'undefined' || (is_numbered != null && is_numbered.hasOwnProperty ("__kwargtrans__"))) {;
/* 000219 */ 			var is_numbered = null;
/* 000219 */ 		};
/* 000219 */ 		if (arguments.length) {
/* 000219 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000219 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000219 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000219 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000219 */ 					switch (__attrib0__) {
/* 000219 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000219 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000219 */ 						case 'is_numbered': var is_numbered = __allkwargs0__ [__attrib0__]; break;
/* 000219 */ 					}
/* 000219 */ 				}
/* 000219 */ 			}
/* 000219 */ 		}
/* 000219 */ 		else {
/* 000219 */ 		}
/* 000220 */ 		__call__ (__call__ (__super__, null, MathEnvironment, '__init__'), null, self, __kwargtrans__ ({environmentname: environmentname}));
/* 000223 */ 		if (__t__ (is_numbered !== null)) {
/* 000224 */ 			self.is_numbered = is_numbered;
/* 000224 */ 		}
/* 000225 */ 		else {
/* 000226 */ 			self.is_numbered = __ne__ (__getslice__ (environmentname, __neg__ (1), null, 1), '*');
/* 000226 */ 		}
/* 000228 */ 		if (__t__ (!__t__ ((self.is_numbered)))) {
/* 000230 */ 			self.allowed_in_standalone_mode = true;
/* 000230 */ 		}
/* 000230 */ 	});},
/* 000232 */ 	_fields: tuple (['environmentname', 'is_numbered']),
/* 000234 */ 	get make_body_parsing_state_delta () {return __get__ (this, function (self, token, nodeargd, arg_parsing_state_delta, latex_walker) {
/* 000234 */ 		var kwargs = dict ();
/* 000234 */ 		if (arguments.length) {
/* 000234 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000234 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000234 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000234 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000234 */ 					switch (__attrib0__) {
/* 000234 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000234 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000234 */ 						case 'nodeargd': var nodeargd = __allkwargs0__ [__attrib0__]; break;
/* 000234 */ 						case 'arg_parsing_state_delta': var arg_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000234 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000234 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000234 */ 					}
/* 000234 */ 				}
/* 000234 */ 				delete kwargs.__kwargtrans__;
/* 000234 */ 			}
/* 000234 */ 		}
/* 000234 */ 		else {
/* 000234 */ 		}
/* 000236 */ 		return __call__ (ParsingStateDeltaEnterMathMode, null);
/* 000236 */ 	});},
/* 000238 */ 	get make_body_parser () {return __get__ (this, function (self, token, nodeargd, arg_parsing_state_delta) {
/* 000238 */ 		if (arguments.length) {
/* 000238 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000238 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000238 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000238 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000238 */ 					switch (__attrib0__) {
/* 000238 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000238 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000238 */ 						case 'nodeargd': var nodeargd = __allkwargs0__ [__attrib0__]; break;
/* 000238 */ 						case 'arg_parsing_state_delta': var arg_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000238 */ 					}
/* 000238 */ 				}
/* 000238 */ 			}
/* 000238 */ 		}
/* 000238 */ 		else {
/* 000238 */ 		}
/* 000246 */ 		return __call__ (LatexEnvironmentBodyContentsParser, null, __kwargtrans__ ({environmentname: token.arg, contents_parsing_state_delta: __call__ (ParsingStateDeltaExtendLatexContextDb, null, __kwargtrans__ ({extend_latex_context: __call__ (dict, null, __kwargtrans__ ({macros: [__call__ (MacroSpec, null, 'label', __kwargtrans__ ({arguments_spec_list: [__call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: (function () {
/* 000246 */ 			var __accu0__ = latexnodes_parsers;
/* 000246 */ 			return __call__ (__accu0__.LatexCharsGroupParser, __accu0__, __kwargtrans__ ({delimiters: tuple (['{', '}'])}));
/* 000258 */ 		}) (), argname: 'label'}))]})), __call__ (MacroSpec, null, 'tag', __kwargtrans__ ({arguments_spec_list: [__call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: '*', argname: 'tag_star'})), __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: (function () {
/* 000258 */ 			var __accu0__ = latexnodes_parsers;
/* 000258 */ 			return __call__ (__accu0__.LatexCharsGroupParser, __accu0__, __kwargtrans__ ({delimiters: tuple (['{', '}'])}));
/* 000266 */ 		}) (), argname: 'text'}))]})), __call__ (MacroSpec, null, '\\', __kwargtrans__ ({arguments_spec_list: [__call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: (function () {
/* 000266 */ 			var __accu0__ = latexnodes_parsers;
/* 000266 */ 			return __call__ (__accu0__.LatexDelimitedGroupParser, __accu0__, __kwargtrans__ ({delimiters: tuple (['[', ']']), optional: true, allow_pre_space: false}));
/* 000266 */ 		}) (), argname: 'vertical_spacing'}))]}))]}))}))}));
/* 000266 */ 	});},
/* 000279 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000279 */ 		if (arguments.length) {
/* 000279 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000279 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000279 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000279 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000279 */ 					switch (__attrib0__) {
/* 000279 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000279 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000279 */ 					}
/* 000279 */ 				}
/* 000279 */ 			}
/* 000279 */ 		}
/* 000279 */ 		else {
/* 000279 */ 		}
/* 000285 */ 		node.flm_equation_lines_labels_infos = [];
/* 000290 */ 		var init_last_line_info = function () {
/* 000290 */ 			if (arguments.length) {
/* 000290 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000290 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000290 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000290 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000290 */ 					}
/* 000290 */ 				}
/* 000290 */ 			}
/* 000290 */ 			else {
/* 000290 */ 			}
/* 000291 */ 			return dict ({'labels_info': [], 'custom_tag_flm_text': null, 'nonumber': false, 'line_nodelist': []});
/* 000291 */ 		};
/* 000297 */ 		var last_line_info = __call__ (dict, null, __call__ (init_last_line_info, null));
/* 000298 */ 		var _flush_last_equation_line_labels_infos = function (newline_node) {
/* 000298 */ 			if (typeof newline_node == 'undefined' || (newline_node != null && newline_node.hasOwnProperty ("__kwargtrans__"))) {;
/* 000298 */ 				var newline_node = null;
/* 000298 */ 			};
/* 000298 */ 			if (arguments.length) {
/* 000298 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000298 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000298 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000298 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000298 */ 						switch (__attrib0__) {
/* 000298 */ 							case 'newline_node': var newline_node = __allkwargs0__ [__attrib0__]; break;
/* 000298 */ 						}
/* 000298 */ 					}
/* 000298 */ 				}
/* 000298 */ 			}
/* 000298 */ 			else {
/* 000298 */ 			}
/* 000299 */ 			(function () {
/* 000299 */ 				var __accu0__ = node.flm_equation_lines_labels_infos;
/* 000303 */ 				return __call__ (__accu0__.append, __accu0__, dict ({'labels': __call__ (list, null, __getitem__ (last_line_info, 'labels_info')), 'custom_tag_flm_text': __getitem__ (last_line_info, 'custom_tag_flm_text'), 'nonumber': __getitem__ (last_line_info, 'nonumber'), 'line_nodelist': __call__ (list, null, __getitem__ (last_line_info, 'line_nodelist')), 'newline_node': newline_node}));
/* 000303 */ 			}) ();
/* 000306 */ 			(function () {
/* 000306 */ 				var __accu0__ = last_line_info;
/* 000306 */ 				return __call__ (__accu0__.py_update, __accu0__, __call__ (init_last_line_info, null));
/* 000306 */ 			}) ();
/* 000306 */ 		};
/* 000308 */ 		var last_node_is_newline = false;
/* 000309 */ 		var __iterable0__ = node.nodelist;
/* 000309 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000309 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000310 */ 			if (__t__ (__t__ ((function () {
/* 000310 */ 				var __accu0__ = n;
/* 000310 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000310 */ 			}) ()) && __eq__ (n.macroname, 'label'))) {
/* 000315 */ 				var ref_label_node_args = (function () {
/* 000315 */ 					var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: n}));
/* 000315 */ 					return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['label']));
/* 000315 */ 				}) ();
/* 000318 */ 				var ref_label_full = (function () {
/* 000318 */ 					var __accu0__ = __getitem__ (ref_label_node_args, 'label');
/* 000318 */ 					return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000318 */ 				}) ();
/* 000320 */ 				if (__t__ (__in__ (':', ref_label_full))) {
/* 000321 */ 					var __left0__ = (function () {
/* 000321 */ 						var __accu0__ = ref_label_full;
/* 000321 */ 						return __call__ (__accu0__.py_split, __accu0__, ':', 1);
/* 000321 */ 					}) ();
/* 000321 */ 					var ref_type = __left0__ [0];
/* 000321 */ 					var ref_label = __left0__ [1];
/* 000321 */ 				}
/* 000322 */ 				else {
/* 000323 */ 					var __left0__ = tuple ([null, ref_label_full]);
/* 000323 */ 					var ref_type = __left0__ [0];
/* 000323 */ 					var ref_label = __left0__ [1];
/* 000323 */ 				}
/* 000325 */ 				var info = dict ({'node': n, 'label': tuple ([ref_type, ref_label])});
/* 000330 */ 				(function () {
/* 000330 */ 					var __accu0__ = __getitem__ (last_line_info, 'labels_info');
/* 000330 */ 					return __call__ (__accu0__.append, __accu0__, info);
/* 000330 */ 				}) ();
/* 000330 */ 			}
/* 000332 */ 			else if (__t__ (__t__ ((function () {
/* 000332 */ 				var __accu0__ = n;
/* 000332 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000332 */ 			}) ()) && __eq__ (n.macroname, 'tag'))) {
/* 000335 */ 				var tag_node_args = (function () {
/* 000335 */ 					var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: n}));
/* 000335 */ 					return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['tag_star', 'text']));
/* 000335 */ 				}) ();
/* 000340 */ 				var custom_tag_flm_text = (function () {
/* 000340 */ 					var __accu0__ = (function () {
/* 000340 */ 						var __accu1__ = __getitem__ (tag_node_args, 'text');
/* 000340 */ 						return __call__ (__accu1__.get_content_nodelist, __accu1__);
/* 000340 */ 					}) ();
/* 000340 */ 					return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000340 */ 				}) ();
/* 000341 */ 				if (__t__ (!__t__ (((function () {
/* 000341 */ 					var __accu0__ = __getitem__ (tag_node_args, 'tag_star');
/* 000341 */ 					return __call__ (__accu0__.was_provided, __accu0__);
/* 000341 */ 				}) ())))) {
/* 000342 */ 					var custom_tag_flm_text = '({})'.format (custom_tag_flm_text);
/* 000342 */ 				}
/* 000344 */ 				__setitem__ (last_line_info, 'custom_tag_flm_text', custom_tag_flm_text);
/* 000344 */ 			}
/* 000346 */ 			else if (__t__ (__t__ ((function () {
/* 000346 */ 				var __accu0__ = n;
/* 000346 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000346 */ 			}) ()) && __eq__ (n.macroname, 'nonumber'))) {
/* 000348 */ 				__setitem__ (last_line_info, 'nonumber', true);
/* 000348 */ 			}
/* 000350 */ 			else if (__t__ (__t__ ((function () {
/* 000350 */ 				var __accu0__ = n;
/* 000350 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000350 */ 			}) ()) && __eq__ (n.macroname, '\\'))) {
/* 000351 */ 				__call__ (_flush_last_equation_line_labels_infos, null, n);
/* 000352 */ 				var last_node_is_newline = true;
/* 000352 */ 			}
/* 000353 */ 			else {
/* 000355 */ 				(function () {
/* 000355 */ 					var __accu0__ = __getitem__ (last_line_info, 'line_nodelist');
/* 000355 */ 					return __call__ (__accu0__.append, __accu0__, n);
/* 000355 */ 				}) ();
/* 000357 */ 				if (__t__ (__t__ (!__t__ (((function () {
/* 000357 */ 					var __accu0__ = n;
/* 000357 */ 					return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCommentNode);
/* 000358 */ 				}) ()))) && !__t__ ((__t__ ((function () {
/* 000358 */ 					var __accu0__ = n;
/* 000358 */ 					return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000359 */ 				}) ()) && !__t__ (((function () {
/* 000359 */ 					var __accu0__ = n.chars;
/* 000359 */ 					return __call__ (__accu0__.strip, __accu0__);
/* 000359 */ 				}) ())))))) {
/* 000361 */ 					var last_node_is_newline = false;
/* 000361 */ 				}
/* 000361 */ 			}
/* 000361 */ 		}
/* 000363 */ 		if (__t__ (!__t__ ((last_node_is_newline)))) {
/* 000364 */ 			__call__ (_flush_last_equation_line_labels_infos, null);
/* 000364 */ 		}
/* 000368 */ 		var __iterable0__ = __call__ (enumerate, null, node.flm_equation_lines_labels_infos);
/* 000368 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000368 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000368 */ 			var linej = __left0__ [0];
/* 000368 */ 			var lineinfo = __left0__ [1];
/* 000370 */ 			if (__t__ (__t__ ((__t__ (!__t__ ((self.is_numbered))) || __getitem__ (lineinfo, 'nonumber'))) && (__t__ (__call__ (len, null, __getitem__ (lineinfo, 'labels'))) || __getitem__ (lineinfo, 'custom_tag_flm_text')))) {
/* 000371 */ 				var found_stuff_list = [];
/* 000372 */ 				if (__t__ (__call__ (len, null, __getitem__ (lineinfo, 'labels')))) {
/* 000373 */ 					var labels_text = (function () {
/* 000373 */ 						var __accu0__ = [];
/* 000373 */ 						var __iterable1__ = __getitem__ (lineinfo, 'labels');
/* 000373 */ 						for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000373 */ 							var lblinfo = __getitem__ (__iterable1__, __index1__);
/* 000373 */ 							(function () {
/* 000373 */ 								var __accu1__ = __accu0__;
/* 000373 */ 								return __call__ (__accu1__.append, __accu1__, __getitem__ (lblinfo, 'label'));
/* 000373 */ 							}) ();
/* 000373 */ 						}
/* 000373 */ 						return __accu0__;
/* 000373 */ 					}) ();
/* 000374 */ 					var labels_text_joined = (function () {
/* 000374 */ 						var __accu0__ = ', ';
/* 000374 */ 						return __call__ (__accu0__.join, __accu0__, (function () {
/* 000374 */ 							var __accu1__ = [];
/* 000374 */ 							var __iterable1__ = labels_text;
/* 000374 */ 							for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000374 */ 								var ln = __getitem__ (__iterable1__, __index1__);
/* 000374 */ 								(function () {
/* 000374 */ 									var __accu2__ = __accu1__;
/* 000374 */ 									return __call__ (__accu2__.append, __accu2__, __add__ (__add__ ('‘', ln), '’'));
/* 000374 */ 								}) ();
/* 000374 */ 							}
/* 000374 */ 							return __accu1__;
/* 000374 */ 						}) ());
/* 000374 */ 					}) ();
/* 000375 */ 					(function () {
/* 000375 */ 						var __accu0__ = found_stuff_list;
/* 000375 */ 						return __call__ (__accu0__.append, __accu0__, '\\label label(s) {}'.format (labels_text_joined));
/* 000375 */ 					}) ();
/* 000375 */ 				}
/* 000378 */ 				if (__t__ (__getitem__ (lineinfo, 'custom_tag_flm_text'))) {
/* 000379 */ 					(function () {
/* 000379 */ 						var __accu0__ = found_stuff_list;
/* 000379 */ 						return __call__ (__accu0__.append, __accu0__, 'custom \\tag “{}”'.format (__getitem__ (lineinfo, 'custom_tag_flm_text')));
/* 000379 */ 					}) ();
/* 000379 */ 				}
/* 000382 */ 				var found_stuff = (function () {
/* 000382 */ 					var __accu0__ = ' and ';
/* 000382 */ 					return __call__ (__accu0__.join, __accu0__, found_stuff_list);
/* 000382 */ 				}) ();
/* 000383 */ 				var __except0__ = __call__ (LatexWalkerParseError, null, "You can't have \\nonumber and \\label/\\tag on the same equation line, found {} in environment ‘{}’".format (found_stuff, node.environmentname), __kwargtrans__ ({pos: (__t__ (__getitem__ (lineinfo, 'newline_node')) || node).pos}));
/* 000383 */ 				__except0__.__cause__ = null;
/* 000383 */ 				throw __except0__;
/* 000383 */ 			}
/* 000383 */ 		}
/* 000389 */ 		return node;
/* 000389 */ 	});},
/* 000392 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000392 */ 		if (arguments.length) {
/* 000392 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000392 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000392 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000392 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000392 */ 					switch (__attrib0__) {
/* 000392 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000392 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000392 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000392 */ 					}
/* 000392 */ 				}
/* 000392 */ 			}
/* 000392 */ 		}
/* 000392 */ 		else {
/* 000392 */ 		}
/* 000395 */ 		var environmentname = node.environmentname;
/* 000397 */ 		if (__t__ (!__t__ (((function () {
/* 000397 */ 			var __accu0__ = render_context;
/* 000397 */ 			return __call__ (__accu0__.supports_feature, __accu0__, 'math');
/* 000397 */ 		}) ())))) {
/* 000398 */ 			var __except0__ = __call__ (ValueError, null, "Feature 'math' is not enabled, cannot render math environment");
/* 000398 */ 			__except0__.__cause__ = null;
/* 000398 */ 			throw __except0__;
/* 000398 */ 		}
/* 000400 */ 		var math_mgr = (function () {
/* 000400 */ 			var __accu0__ = render_context;
/* 000400 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'math');
/* 000400 */ 		}) ();
/* 000402 */ 		var refs_mgr = null;
/* 000403 */ 		if (__t__ ((function () {
/* 000403 */ 			var __accu0__ = render_context;
/* 000403 */ 			return __call__ (__accu0__.supports_feature, __accu0__, 'refs');
/* 000403 */ 		}) ())) {
/* 000404 */ 			var refs_mgr = (function () {
/* 000404 */ 				var __accu0__ = render_context;
/* 000404 */ 				return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000404 */ 			}) ();
/* 000404 */ 		}
/* 000407 */ 		var nodelist = __call__ (list, null, node.nodelist);
/* 000409 */ 		var target_id = null;
/* 000411 */ 		var lineno = 0;
/* 000412 */ 		var __iterable0__ = node.flm_equation_lines_labels_infos;
/* 000412 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000412 */ 			var line_infos = __getitem__ (__iterable0__, __index0__);
/* 000414 */ 			var nonumber = __getitem__ (line_infos, 'nonumber');
/* 000416 */ 			if (__t__ (nonumber)) {
/* 000416 */ 				continue;
/* 000416 */ 			}
/* 000419 */ 			var custom_tag_flm_text = __getitem__ (line_infos, 'custom_tag_flm_text');
/* 000423 */ 			var __left0__ = (function () {
/* 000423 */ 				var __accu0__ = math_mgr;
/* 000423 */ 				return __call__ (__accu0__.new_numbered_display_math, __accu0__, node, lineno, custom_tag_flm_text);
/* 000423 */ 			}) ();
/* 000423 */ 			var eq_id = __left0__ [0];
/* 000423 */ 			var formatted_ref_flm_text = __left0__ [1];
/* 000423 */ 			var eq_counter_numprefix = __left0__ [2];
/* 000423 */ 			var eq_counter_value = __left0__ [3];
/* 000425 */ 			var this_target_id = 'equation-{}'.format (eq_id);
/* 000426 */ 			if (__t__ (target_id === null)) {
/* 000428 */ 				var target_id = this_target_id;
/* 000428 */ 			}
/* 000430 */ 			if (__t__ (!__t__ ((custom_tag_flm_text)))) {
/* 000433 */ 				var newline_node = __getitem__ (line_infos, 'newline_node');
/* 000434 */ 				if (__t__ (newline_node !== null)) {
/* 000435 */ 					var i = (function () {
/* 000435 */ 						var __accu0__ = nodelist;
/* 000435 */ 						return __call__ (__accu0__.index, __accu0__, newline_node);
/* 000435 */ 					}) ();
/* 000435 */ 				}
/* 000436 */ 				else {
/* 000437 */ 					var i = __call__ (len, null, nodelist);
/* 000437 */ 				}
/* 000438 */ 				(function () {
/* 000438 */ 					var __accu0__ = nodelist;
/* 000441 */ 					return __call__ (__accu0__.insert, __accu0__, i, __call__ (_ProxyNodeWithRecomposedLatex, null, __add__ (__add__ ('\\tag*{', formatted_ref_flm_text), '}')));
/* 000441 */ 				}) ();
/* 000441 */ 			}
/* 000448 */ 			var this_target_id = target_id;
/* 000451 */ 			if (__t__ (__t__ (refs_mgr !== null) && render_context.is_first_pass)) {
/* 000452 */ 				var __iterable1__ = __getitem__ (line_infos, 'labels');
/* 000452 */ 				for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000452 */ 					var label_info = __getitem__ (__iterable1__, __index1__);
/* 000453 */ 					var __left0__ = __getitem__ (label_info, 'label');
/* 000453 */ 					var ref_type = __left0__ [0];
/* 000453 */ 					var ref_label = __left0__ [1];
/* 000454 */ 					var counter_formatter_id = math_mgr.counter_formatter.counter_formatter_id;
/* 000456 */ 					(function () {
/* 000456 */ 						var __accu0__ = refs_mgr;
/* 000456 */ 						return __call__ (__accu0__.register_reference, __accu0__, ref_type, ref_label, __kwargtrans__ ({node: node, formatted_ref_flm_text: formatted_ref_flm_text, target_href: '#{}'.format (this_target_id), counter_value: eq_counter_value, counter_numprefix: eq_counter_numprefix, counter_formatter_id: counter_formatter_id}));
/* 000456 */ 					}) ();
/* 000456 */ 				}
/* 000456 */ 			}
/* 000465 */ 			var lineno = __call__ (__iadd__, null, lineno, 1);
/* 000465 */ 		}
/* 000468 */ 		return (function () {
/* 000468 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000470 */ 			return __call__ (__accu0__.render_math_content, __accu0__, tuple (['', '']), (function () {
/* 000470 */ 				var __accu1__ = latexnodes_nodes;
/* 000470 */ 				return __call__ (__accu1__.LatexNodeList, __accu1__, nodelist);
/* 000470 */ 			}) (), render_context, 'display', __kwargtrans__ ({environmentname: environmentname, target_id: target_id}));
/* 000470 */ 		}) ();
/* 000470 */ 	});},
/* 000478 */ 	get recompose_pure_latex () {return __get__ (this, function (self, node, recomposer) {
/* 000478 */ 		if (arguments.length) {
/* 000478 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000478 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000478 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000478 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000478 */ 					switch (__attrib0__) {
/* 000478 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000478 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000478 */ 						case 'recomposer': var recomposer = __allkwargs0__ [__attrib0__]; break;
/* 000478 */ 					}
/* 000478 */ 				}
/* 000478 */ 			}
/* 000478 */ 		}
/* 000478 */ 		else {
/* 000478 */ 		}
/* 000480 */ 		var s = '';
/* 000482 */ 		var recopt_math = (function () {
/* 000482 */ 			var __accu0__ = recomposer;
/* 000482 */ 			return __call__ (__accu0__.get_options, __accu0__, 'math');
/* 000482 */ 		}) ();
/* 000483 */ 		var surround_display_math = (function () {
/* 000483 */ 			var __accu0__ = recopt_math;
/* 000483 */ 			return __call__ (__accu0__.py_get, __accu0__, 'surround_display_math', tuple (['', '']));
/* 000483 */ 		}) ();
/* 000484 */ 		var emit_flm_math_environment_macro = (function () {
/* 000484 */ 			var __accu0__ = recopt_math;
/* 000484 */ 			return __call__ (__accu0__.py_get, __accu0__, 'emit_flm_math_environment_macro', false);
/* 000484 */ 		}) ();
/* 000489 */ 		var s = __call__ (__iadd__, null, s, __getitem__ (surround_display_math, 0));
/* 000493 */ 		if (__t__ (emit_flm_math_environment_macro)) {
/* 000494 */ 			var s = __call__ (__iadd__, null, s, __add__ (__add__ ('\\flmMathEnvironment{', node.environmentname), '}{'));
/* 000495 */ 			var s = __call__ (__iadd__, null, s, (function () {
/* 000495 */ 				var __accu0__ = recomposer;
/* 000495 */ 				return __call__ (__accu0__.descend_into_parsed_arguments, __accu0__, node.nodeargd);
/* 000495 */ 			}) ());
/* 000496 */ 			var s = __call__ (__iadd__, null, s, '}{');
/* 000496 */ 		}
/* 000497 */ 		else {
/* 000498 */ 			var s = __call__ (__iadd__, null, s, __add__ (__add__ ('\\begin{', node.environmentname), '}'));
/* 000499 */ 			var s = __call__ (__iadd__, null, s, (function () {
/* 000499 */ 				var __accu0__ = recomposer;
/* 000499 */ 				return __call__ (__accu0__.descend_into_parsed_arguments, __accu0__, node.nodeargd);
/* 000499 */ 			}) ());
/* 000499 */ 		}
/* 000502 */ 		var s_lines = [];
/* 000503 */ 		var last_line_already_has_newline = false;
/* 000504 */ 		var __iterable0__ = node.flm_equation_lines_labels_infos;
/* 000504 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000504 */ 			var line_infos = __getitem__ (__iterable0__, __index0__);
/* 000506 */ 			var s_line = '';
/* 000508 */ 			var __iterable1__ = __getitem__ (line_infos, 'line_nodelist');
/* 000508 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000508 */ 				var n = __getitem__ (__iterable1__, __index1__);
/* 000509 */ 				var s_line = __call__ (__iadd__, null, s_line, (function () {
/* 000509 */ 					var __accu0__ = recomposer;
/* 000509 */ 					return __call__ (__accu0__.subrecompose, __accu0__, n);
/* 000509 */ 				}) ());
/* 000509 */ 			}
/* 000520 */ 			var edge_newlines_info = dict ({'initial': '', 'final': ''});
/* 000525 */ 			var _repl_newline = function (m) {
/* 000525 */ 				if (arguments.length) {
/* 000525 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000525 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000525 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000525 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000525 */ 							switch (__attrib0__) {
/* 000525 */ 								case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000525 */ 							}
/* 000525 */ 						}
/* 000525 */ 					}
/* 000525 */ 				}
/* 000525 */ 				else {
/* 000525 */ 				}
/* 000526 */ 				var nlindent = __add__ ('\n', (function () {
/* 000526 */ 					var __accu0__ = m;
/* 000526 */ 					return __call__ (__accu0__.group, __accu0__, 'indent');
/* 000526 */ 				}) ());
/* 000527 */ 				if (__t__ (__eq__ ((function () {
/* 000527 */ 					var __accu0__ = m;
/* 000527 */ 					return __call__ (__accu0__.start, __accu0__);
/* 000527 */ 				}) (), 0))) {
/* 000528 */ 					if (__t__ (last_line_already_has_newline)) {
/* 000529 */ 						__setitem__ (edge_newlines_info, 'initial', nlindent);
/* 000530 */ 						return '';
/* 000530 */ 					}
/* 000531 */ 					return nlindent;
/* 000531 */ 				}
/* 000532 */ 				if (__t__ (__eq__ ((function () {
/* 000532 */ 					var __accu0__ = m;
/* 000532 */ 					return __call__ (__accu0__.end, __accu0__);
/* 000532 */ 				}) (), __call__ (len, null, s_line)))) {
/* 000533 */ 					__setitem__ (edge_newlines_info, 'final', nlindent);
/* 000534 */ 					return '';
/* 000534 */ 				}
/* 000535 */ 				return nlindent;
/* 000535 */ 			};
/* 000544 */ 			var s_line = (function () {
/* 000544 */ 				var __accu0__ = _rx_newline_spaces;
/* 000544 */ 				return __call__ (__accu0__.sub, __accu0__, _repl_newline, s_line);
/* 000544 */ 			}) ();
/* 000555 */ 			if (__t__ (__getitem__ (line_infos, 'custom_tag_flm_text') !== null)) {
/* 000556 */ 				var s_line = __call__ (__iadd__, null, s_line, __add__ (__add__ ('\\tag*{', __getitem__ (line_infos, 'custom_tag_flm_text')), '}'));
/* 000556 */ 			}
/* 000564 */ 			var __iterable1__ = __getitem__ (line_infos, 'labels');
/* 000564 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000564 */ 				var label_info = __getitem__ (__iterable1__, __index1__);
/* 000565 */ 				var __left0__ = __getitem__ (label_info, 'label');
/* 000565 */ 				var ref_type = __left0__ [0];
/* 000565 */ 				var ref_label = __left0__ [1];
/* 000566 */ 				var safe_label_info = (function () {
/* 000566 */ 					var __accu0__ = recomposer;
/* 000566 */ 					return __call__ (__accu0__.make_safe_label, __accu0__, 'ref', ref_type, ref_label, node.latex_walker.resource_info);
/* 000566 */ 				}) ();
/* 000569 */ 				var s_line = __call__ (__iadd__, null, s_line, __add__ (__add__ ('\\label{', __getitem__ (safe_label_info, 'safe_label')), '}'));
/* 000569 */ 			}
/* 000571 */ 			if (__t__ (__getitem__ (line_infos, 'nonumber'))) {
/* 000572 */ 				var s_line = __call__ (__iadd__, null, s_line, '\\nonumber ');
/* 000572 */ 			}
/* 000574 */ 			if (__t__ (__getitem__ (line_infos, 'newline_node'))) {
/* 000575 */ 				var s_line = __call__ (__iadd__, null, s_line, (function () {
/* 000575 */ 					var __accu0__ = recomposer;
/* 000575 */ 					return __call__ (__accu0__.subrecompose, __accu0__, __getitem__ (line_infos, 'newline_node'));
/* 000575 */ 				}) ());
/* 000575 */ 			}
/* 000582 */ 			var final_newlines = __getitem__ (edge_newlines_info, 'final');
/* 000583 */ 			var s_line = __call__ (__iadd__, null, s_line, final_newlines);
/* 000585 */ 			// pass;
/* 000589 */ 			(function () {
/* 000589 */ 				var __accu0__ = s_lines;
/* 000589 */ 				return __call__ (__accu0__.append, __accu0__, s_line);
/* 000589 */ 			}) ();
/* 000590 */ 			var last_line_already_has_newline = (__t__ (__call__ (len, null, final_newlines)) ? true : false);
/* 000590 */ 		}
/* 000592 */ 		var s = __call__ (__iadd__, null, s, (function () {
/* 000592 */ 			var __accu0__ = '';
/* 000592 */ 			return __call__ (__accu0__.join, __accu0__, s_lines);
/* 000592 */ 		}) ());
/* 000594 */ 		if (__t__ (emit_flm_math_environment_macro)) {
/* 000595 */ 			var s = __call__ (__iadd__, null, s, '}');
/* 000595 */ 		}
/* 000596 */ 		else {
/* 000597 */ 			var s = __call__ (__iadd__, null, s, __add__ (__add__ ('\\end{', node.environmentname), '}'));
/* 000597 */ 		}
/* 000599 */ 		var s = __call__ (__iadd__, null, s, __getitem__ (surround_display_math, 1));
/* 000601 */ 		return s;
/* 000601 */ 	});}
/* 000601 */ });
/* 000604 */ export var _rx_newline_spaces = (function () {
/* 000604 */ 	var __accu0__ = re;
/* 000604 */ 	return __call__ (__accu0__.compile, __accu0__, '([ \\t]*?\\n)+(?P<indent>[ \\t]*)');
/* 000604 */ }) ();
/* 000608 */ export var MathEqrefMacro =  __class__ ('MathEqrefMacro', [FLMMacroSpecBase], {
/* 000608 */ 	__module__: __name__,
/* 000610 */ 	delayed_render: true,
/* 000612 */ 	allowed_in_standalone_mode: false,
/* 000617 */ 	get __init__ () {return __get__ (this, function (self, macroname, ref_type) {
/* 000617 */ 		if (typeof macroname == 'undefined' || (macroname != null && macroname.hasOwnProperty ("__kwargtrans__"))) {;
/* 000617 */ 			var macroname = 'eqref';
/* 000617 */ 		};
/* 000617 */ 		if (typeof ref_type == 'undefined' || (ref_type != null && ref_type.hasOwnProperty ("__kwargtrans__"))) {;
/* 000617 */ 			var ref_type = 'eq';
/* 000617 */ 		};
/* 000617 */ 		var kwargs = dict ();
/* 000617 */ 		if (arguments.length) {
/* 000617 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000617 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000617 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000617 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000617 */ 					switch (__attrib0__) {
/* 000617 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000617 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000617 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000617 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000617 */ 					}
/* 000617 */ 				}
/* 000617 */ 				delete kwargs.__kwargtrans__;
/* 000617 */ 			}
/* 000617 */ 		}
/* 000617 */ 		else {
/* 000617 */ 		}
/* 000622 */ 		__call__ (__call__ (__super__, null, MathEqrefMacro, '__init__'), null, self, __kwargtrans__ ({macroname: macroname, arguments_spec_list: [__call__ (FLMArgumentSpec, null, (function () {
/* 000622 */ 			var __accu0__ = latexnodes_parsers;
/* 000622 */ 			return __call__ (__accu0__.LatexCharsGroupParser, __accu0__);
/* 000622 */ 		}) (), __kwargtrans__ ({argname: 'ref_label', flm_doc: __add__ (__add__ ('Equation label.  Must begin with the prefix ‘\\verbtext+', ref_type), ':+’')}))]}));
/* 000629 */ 		self.ref_type = ref_type;
/* 000629 */ 	});},
/* 000631 */ 	_fields: tuple (['macroname', 'ref_type']),
/* 000633 */ 	get get_flm_doc () {return __get__ (this, function (self) {
/* 000633 */ 		if (arguments.length) {
/* 000633 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000633 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000633 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000633 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000633 */ 					switch (__attrib0__) {
/* 000633 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000633 */ 					}
/* 000633 */ 				}
/* 000633 */ 			}
/* 000633 */ 		}
/* 000633 */ 		else {
/* 000633 */ 		}
/* 000634 */ 		return __add__ (__add__ ('Refer to an equation by its label.  The argument must be\n            a valid equation label which starts with \\verbcode+', self.ref_type), ':+.  You can place labels in display equations using the\n            \\verbcode+\\label{…}+ macro.');
/* 000634 */ 	});},
/* 000641 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000641 */ 		if (arguments.length) {
/* 000641 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000641 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000641 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000641 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000641 */ 					switch (__attrib0__) {
/* 000641 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000641 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000641 */ 					}
/* 000641 */ 				}
/* 000641 */ 			}
/* 000641 */ 		}
/* 000641 */ 		else {
/* 000641 */ 		}
/* 000643 */ 		var node_args = (function () {
/* 000643 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000643 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['ref_label']));
/* 000643 */ 		}) ();
/* 000647 */ 		var ref_type = null;
/* 000648 */ 		var ref_label = (function () {
/* 000648 */ 			var __accu0__ = __getitem__ (node_args, 'ref_label');
/* 000648 */ 			return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000648 */ 		}) ();
/* 000649 */ 		if (__t__ (__in__ (':', ref_label))) {
/* 000650 */ 			var __left0__ = (function () {
/* 000650 */ 				var __accu0__ = ref_label;
/* 000650 */ 				return __call__ (__accu0__.py_split, __accu0__, ':', 1);
/* 000650 */ 			}) ();
/* 000650 */ 			var ref_type = __left0__ [0];
/* 000650 */ 			var ref_label = __left0__ [1];
/* 000650 */ 		}
/* 000652 */ 		if (__t__ (__ne__ (ref_type, self.ref_type))) {
/* 000653 */ 			var __except0__ = __call__ (LatexWalkerLocatedError, null, 'Equation labels must begin with “{}:” (error in ‘\\{}’)'.format (self.ref_type, node.macroname), __kwargtrans__ ({pos: node.pos}));
/* 000653 */ 			__except0__.__cause__ = null;
/* 000653 */ 			throw __except0__;
/* 000653 */ 		}
/* 000659 */ 		node.flmarg_ref = tuple ([ref_type, ref_label]);
/* 000660 */ 		node.flm_ref_info = dict ({'ref_list': [node.flmarg_ref], 'display_content_nodelist': null});
/* 000660 */ 	});},
/* 000666 */ 	get prepare_delayed_render () {return __get__ (this, function (self, node, render_context) {
/* 000666 */ 		if (arguments.length) {
/* 000666 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000666 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000666 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000666 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000666 */ 					switch (__attrib0__) {
/* 000666 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000666 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000666 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000666 */ 					}
/* 000666 */ 				}
/* 000666 */ 			}
/* 000666 */ 		}
/* 000666 */ 		else {
/* 000666 */ 		}
/* 000667 */ 		// pass;
/* 000667 */ 	});},
/* 000669 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000669 */ 		if (arguments.length) {
/* 000669 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000669 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000669 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000669 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000669 */ 					switch (__attrib0__) {
/* 000669 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000669 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000669 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000669 */ 					}
/* 000669 */ 				}
/* 000669 */ 			}
/* 000669 */ 		}
/* 000669 */ 		else {
/* 000669 */ 		}
/* 000671 */ 		var __left0__ = node.flmarg_ref;
/* 000671 */ 		var ref_type = __left0__ [0];
/* 000671 */ 		var ref_label = __left0__ [1];
/* 000673 */ 		var refs_mgr = (function () {
/* 000673 */ 			var __accu0__ = render_context;
/* 000673 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000673 */ 		}) ();
/* 000675 */ 		var resource_info = node.latex_walker.resource_info;
/* 000677 */ 		try {
/* 000678 */ 			return (function () {
/* 000678 */ 				var __accu0__ = refs_mgr;
/* 000678 */ 				return __call__ (__accu0__.render_ref, __accu0__, ref_type, ref_label, null, resource_info, __kwargtrans__ ({counter_with_prefix: false}));
/* 000678 */ 			}) ();
/* 000678 */ 		}
/* 000678 */ 		catch (__except0__) {
/* 000678 */ 			if (isinstance (__except0__, Exception)) {
/* 000678 */ 				var e = __except0__;
/* 000685 */ 				(function () {
/* 000685 */ 					var __accu0__ = logger;
/* 000686 */ 					return __call__ (__accu0__.error, __accu0__, 'Failed to resolve reference to ‘{}:{}’: {} in ‘{}’ @ {}'.format (ref_type, ref_label, e, (function () {
/* 000686 */ 						var __accu1__ = node;
/* 000686 */ 						return __call__ (__accu1__.latex_verbatim, __accu1__);
/* 000686 */ 					}) (), (function () {
/* 000686 */ 						var __accu1__ = node;
/* 000686 */ 						return __call__ (__accu1__.format_pos, __accu1__);
/* 000686 */ 					}) ()));
/* 000686 */ 				}) ();
/* 000687 */ 				var __except1__ = __call__ (LatexWalkerLocatedError, null, 'Unable to resolve reference to ‘{}:{}’. {}'.format (ref_type, ref_label, e), __kwargtrans__ ({pos: node.pos}));
/* 000687 */ 				__except1__.__cause__ = null;
/* 000687 */ 				throw __except1__;
/* 000687 */ 			}
/* 000687 */ 			else {
/* 000687 */ 				throw __except0__;
/* 000687 */ 			}
/* 000687 */ 		}
/* 000687 */ 	});},
/* 000692 */ 	get recompose_pure_latex () {return __get__ (this, function (self, node, recomposer) {
/* 000692 */ 		if (arguments.length) {
/* 000692 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000692 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000692 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000692 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000692 */ 					switch (__attrib0__) {
/* 000692 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000692 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000692 */ 						case 'recomposer': var recomposer = __allkwargs0__ [__attrib0__]; break;
/* 000692 */ 					}
/* 000692 */ 				}
/* 000692 */ 			}
/* 000692 */ 		}
/* 000692 */ 		else {
/* 000692 */ 		}
/* 000694 */ 		var safe_label_info = (function () {
/* 000694 */ 			var __accu0__ = recomposer;
/* 000694 */ 			return __call__ (__accu0__.make_safe_label, __accu0__, 'ref', __getitem__ (node.flmarg_ref, 0), __getitem__ (node.flmarg_ref, 1), node.latex_walker.resource_info);
/* 000694 */ 		}) ();
/* 000698 */ 		return __add__ (__add__ ('\\eqref{', __getitem__ (safe_label_info, 'safe_label')), '}');
/* 000698 */ 	});}
/* 000698 */ });
/* 000703 */ export var FeatureClass = FeatureMath;
/* 000007 */ 
//# sourceMappingURL=flm.feature.math.map