/* 000001 */ // Transcrypt'ed from Python, 2025-01-19 14:47:56
/* 000007 */ var logging = {};
/* 000007 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000028 */ import {Counter, build_counter_formatter} from './flm.counter.js';
/* 000026 */ import {Feature} from './flm.feature._base.js';
/* 000024 */ import {FLMArgumentSpec} from './flm.flmenvironment.js';
/* 000023 */ import {FLMEnvironmentSpecBase, FLMMacroSpecBase} from './flm.flmspecinfo.js';
/* 000017 */ import {LatexEnvironmentBodyContentsParser, MacroSpec, ParsingStateDeltaExtendLatexContextDb} from './pylatexenc.macrospec.js';
/* 000016 */ import * as latexnodes_parsers from './pylatexenc.latexnodes.parsers.js';
/* 000015 */ import * as latexnodes_nodes from './pylatexenc.latexnodes.nodes.js';
/* 000010 */ import {LatexWalkerLocatedError, ParsedArgumentsInfo, ParsingStateDeltaEnterMathMode} from './pylatexenc.latexnodes.js';
/* 000007 */ import * as __module_logging__ from './logging.js';
/* 000007 */ __nest__ (logging, '', __module_logging__);
/* 000007 */ export {Feature, build_counter_formatter, FLMArgumentSpec, FLMEnvironmentSpecBase, MacroSpec, latexnodes_nodes, FLMMacroSpecBase, ParsedArgumentsInfo, ParsingStateDeltaEnterMathMode, ParsingStateDeltaExtendLatexContextDb, LatexWalkerLocatedError, latexnodes_parsers, Counter, LatexEnvironmentBodyContentsParser};
/* 000001 */ var __name__ = 'flm.feature.math';
/* 000008 */ export var logger = (function () {
/* 000008 */ 	var __accu0__ = logging;
/* 000008 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000008 */ }) ();
/* 000034 */ export var _default_math_environment_names = tuple (['equation', 'equation*', 'align', 'align*', 'gather', 'gather*']);
/* 000044 */ export var eq_default_counter_formatter_spec = dict ({'format_num': dict ({'template': '(${arabic})'}), 'prefix_display': dict ({'singular': 'Eq.~', 'plural': 'Eqs.~', 'capital': dict ({'singular': 'Equation', 'plural': 'Equations'})}), 'delimiters': tuple (['', '']), 'join_spec': 'compact'});
/* 000059 */ export var FeatureMath =  __class__ ('FeatureMath', [Feature], {
/* 000059 */ 	__module__: __name__,
/* 000061 */ 	feature_name: 'math',
/* 000062 */ 	feature_title: 'Mathematical typesetting: equations and equation references',
/* 000064 */ 	get feature_flm_doc () {return __get__ (this, function (self) {
/* 000064 */ 		if (arguments.length) {
/* 000064 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000064 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000064 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000064 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000064 */ 					switch (__attrib0__) {
/* 000064 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000064 */ 					}
/* 000064 */ 				}
/* 000064 */ 			}
/* 000064 */ 		}
/* 000064 */ 		else {
/* 000064 */ 		}
/* 000065 */ 		return __add__ (__add__ ('\n            You can use the following environments and macros to typeset pretty display\n            math equations, create labels, and refer to them at other places in your\n            document.\n\n            Note that all equation labels must begin with the prefix \\verbcode{', self.eqref_ref_type), ':}.');
/* 000065 */ 	});},
/* 000075 */ 	feature_optional_dependencies: ['refs'],
/* 000077 */ 	feature_default_config: dict ({'counter_formatter': eq_default_counter_formatter_spec}),
/* 000081 */ 	get __init__ () {return __get__ (this, function (self, counter_formatter, math_environment_names, eqref_macro_name, eqref_ref_type) {
/* 000081 */ 		if (typeof counter_formatter == 'undefined' || (counter_formatter != null && counter_formatter.hasOwnProperty ("__kwargtrans__"))) {;
/* 000081 */ 			var counter_formatter = null;
/* 000081 */ 		};
/* 000081 */ 		if (typeof math_environment_names == 'undefined' || (math_environment_names != null && math_environment_names.hasOwnProperty ("__kwargtrans__"))) {;
/* 000081 */ 			var math_environment_names = null;
/* 000081 */ 		};
/* 000081 */ 		if (typeof eqref_macro_name == 'undefined' || (eqref_macro_name != null && eqref_macro_name.hasOwnProperty ("__kwargtrans__"))) {;
/* 000081 */ 			var eqref_macro_name = 'eqref';
/* 000081 */ 		};
/* 000081 */ 		if (typeof eqref_ref_type == 'undefined' || (eqref_ref_type != null && eqref_ref_type.hasOwnProperty ("__kwargtrans__"))) {;
/* 000081 */ 			var eqref_ref_type = 'eq';
/* 000081 */ 		};
/* 000081 */ 		if (arguments.length) {
/* 000081 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000081 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000081 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000081 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000081 */ 					switch (__attrib0__) {
/* 000081 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000081 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000081 */ 						case 'math_environment_names': var math_environment_names = __allkwargs0__ [__attrib0__]; break;
/* 000081 */ 						case 'eqref_macro_name': var eqref_macro_name = __allkwargs0__ [__attrib0__]; break;
/* 000081 */ 						case 'eqref_ref_type': var eqref_ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000081 */ 					}
/* 000081 */ 				}
/* 000081 */ 			}
/* 000081 */ 		}
/* 000081 */ 		else {
/* 000081 */ 		}
/* 000088 */ 		__call__ (__call__ (__super__, null, FeatureMath, '__init__'), null, self);
/* 000090 */ 		if (__t__ (counter_formatter === null)) {
/* 000091 */ 			var counter_formatter = __getitem__ (self.feature_default_config, 'counter_formatter');
/* 000091 */ 		}
/* 000092 */ 		self.counter_formatter = __call__ (build_counter_formatter, null, counter_formatter, eq_default_counter_formatter_spec, __kwargtrans__ ({counter_formatter_id: 'eq'}));
/* 000098 */ 		if (__t__ (math_environment_names === null)) {
/* 000099 */ 			var math_environment_names = _default_math_environment_names;
/* 000099 */ 		}
/* 000100 */ 		self.math_environment_names = math_environment_names;
/* 000102 */ 		self.eqref_macro_name = eqref_macro_name;
/* 000103 */ 		self.eqref_ref_type = eqref_ref_type;
/* 000105 */ 	});},
/* 000105 */ 	DocumentManager: __class__ ('DocumentManager', [Feature.DocumentManager], {
/* 000105 */ 		__module__: __name__,
/* 000106 */ 		get initialize () {return __get__ (this, function (self) {
/* 000106 */ 			if (arguments.length) {
/* 000106 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000106 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000106 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000106 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000106 */ 						switch (__attrib0__) {
/* 000106 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000106 */ 						}
/* 000106 */ 					}
/* 000106 */ 				}
/* 000106 */ 			}
/* 000106 */ 			else {
/* 000106 */ 			}
/* 000107 */ 			// pass;
/* 000107 */ 		});}
/* 000109 */ 	}),
/* 000109 */ 	RenderManager: __class__ ('RenderManager', [Feature.RenderManager], {
/* 000109 */ 		__module__: __name__,
/* 000110 */ 		get initialize () {return __get__ (this, function (self) {
/* 000110 */ 			if (arguments.length) {
/* 000110 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000110 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000110 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000110 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000110 */ 						switch (__attrib0__) {
/* 000110 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000110 */ 						}
/* 000110 */ 					}
/* 000110 */ 				}
/* 000110 */ 			}
/* 000110 */ 			else {
/* 000110 */ 			}
/* 000111 */ 			self.equation_counter = __call__ (Counter, null, self.feature.counter_formatter);
/* 000113 */ 			self.equation_info_by_node = dict ({});
/* 000115 */ 			if (__t__ ((function () {
/* 000115 */ 				var __accu0__ = self.render_context;
/* 000115 */ 				return __call__ (__accu0__.supports_feature, __accu0__, 'refs');
/* 000115 */ 			}) ())) {
/* 000116 */ 				var refs_mgr = (function () {
/* 000116 */ 					var __accu0__ = self.render_context;
/* 000116 */ 					return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000116 */ 				}) ();
/* 000117 */ 				(function () {
/* 000117 */ 					var __accu0__ = refs_mgr;
/* 000117 */ 					return __call__ (__accu0__.register_counter_formatter, __accu0__, __kwargtrans__ ({counter_formatter: self.feature.counter_formatter}));
/* 000117 */ 				}) ();
/* 000117 */ 			}
/* 000117 */ 		});},
/* 000121 */ 		get new_numbered_display_math () {return __get__ (this, function (self, node, lineno, custom_tag_flm_text) {
/* 000121 */ 			if (typeof custom_tag_flm_text == 'undefined' || (custom_tag_flm_text != null && custom_tag_flm_text.hasOwnProperty ("__kwargtrans__"))) {;
/* 000121 */ 				var custom_tag_flm_text = null;
/* 000121 */ 			};
/* 000121 */ 			if (arguments.length) {
/* 000121 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000121 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000121 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000121 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000121 */ 						switch (__attrib0__) {
/* 000121 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000121 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000121 */ 							case 'lineno': var lineno = __allkwargs0__ [__attrib0__]; break;
/* 000121 */ 							case 'custom_tag_flm_text': var custom_tag_flm_text = __allkwargs0__ [__attrib0__]; break;
/* 000121 */ 						}
/* 000121 */ 					}
/* 000121 */ 				}
/* 000121 */ 			}
/* 000121 */ 			else {
/* 000121 */ 			}
/* 000123 */ 			var key = tuple ([(function () {
/* 000123 */ 				var __accu0__ = self;
/* 000123 */ 				return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000123 */ 			}) (), lineno]);
/* 000124 */ 			if (__t__ (__in__ (key, self.equation_info_by_node))) {
/* 000125 */ 				return __getitem__ (self.equation_info_by_node, key);
/* 000125 */ 			}
/* 000127 */ 			if (__t__ (custom_tag_flm_text !== null)) {
/* 000128 */ 				var formatted_ref_flm_text = custom_tag_flm_text;
/* 000129 */ 				var eq_id = '_{}'.format (__getitem__ (key, 0));
/* 000130 */ 				if (__t__ (lineno)) {
/* 000131 */ 					var eq_id = __call__ (__iadd__, null, eq_id, '-{}'.format (lineno));
/* 000131 */ 				}
/* 000132 */ 				var eq_counter_number = null;
/* 000132 */ 			}
/* 000133 */ 			else {
/* 000135 */ 				var __left0__ = (function () {
/* 000135 */ 					var __accu0__ = self.equation_counter;
/* 000135 */ 					return __call__ (__accu0__.step_and_format_flm, __accu0__);
/* 000135 */ 				}) ();
/* 000135 */ 				var eq_id = __left0__ [0];
/* 000135 */ 				var formatted_ref_flm_text = __left0__ [1];
/* 000136 */ 				var eq_counter_number = eq_id;
/* 000136 */ 			}
/* 000138 */ 			var info = tuple ([eq_id, formatted_ref_flm_text, eq_counter_number]);
/* 000139 */ 			__setitem__ (self.equation_info_by_node, key, info);
/* 000140 */ 			return info;
/* 000140 */ 		});}
/* 000140 */ 	}),
/* 000143 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000143 */ 		if (arguments.length) {
/* 000143 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000143 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000143 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000143 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000143 */ 					switch (__attrib0__) {
/* 000143 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000143 */ 					}
/* 000143 */ 				}
/* 000143 */ 			}
/* 000143 */ 		}
/* 000143 */ 		else {
/* 000143 */ 		}
/* 000144 */ 		var environments = (function () {
/* 000144 */ 			var __accu0__ = [];
/* 000144 */ 			var __iterable0__ = self.math_environment_names;
/* 000144 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000148 */ 				var math_environment_name = __getitem__ (__iterable0__, __index0__);
/* 000148 */ 				(function () {
/* 000148 */ 					var __accu1__ = __accu0__;
/* 000145 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (MathEnvironment, null, math_environment_name));
/* 000145 */ 				}) ();
/* 000145 */ 			}
/* 000145 */ 			return __accu0__;
/* 000145 */ 		}) ();
/* 000150 */ 		var macros = [];
/* 000151 */ 		if (__t__ (self.eqref_macro_name !== null)) {
/* 000152 */ 			(function () {
/* 000152 */ 				var __accu0__ = macros;
/* 000153 */ 				return __call__ (__accu0__.append, __accu0__, __call__ (MathEqrefMacro, null, __kwargtrans__ ({macroname: self.eqref_macro_name, ref_type: self.eqref_ref_type})));
/* 000153 */ 			}) ();
/* 000153 */ 		}
/* 000159 */ 		return __call__ (dict, null, __kwargtrans__ ({macros: macros, environments: environments}));
/* 000159 */ 	});}
/* 000159 */ });
/* 000165 */ export var _EmptyClass =  __class__ ('_EmptyClass', [object], {
/* 000165 */ 	__module__: __name__,
/* 000165 */ });
/* 000168 */ export var _ProxyNodeWithRecomposedLatex =  __class__ ('_ProxyNodeWithRecomposedLatex', [object], {
/* 000168 */ 	__module__: __name__,
/* 000170 */ 	pos: null,
/* 000171 */ 	pos_end: null,
/* 000173 */ 	get __init__ () {return __get__ (this, function (self, verbatim) {
/* 000173 */ 		if (arguments.length) {
/* 000173 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000173 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000173 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000173 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000173 */ 					switch (__attrib0__) {
/* 000173 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000173 */ 						case 'verbatim': var verbatim = __allkwargs0__ [__attrib0__]; break;
/* 000173 */ 					}
/* 000173 */ 				}
/* 000173 */ 			}
/* 000173 */ 		}
/* 000173 */ 		else {
/* 000173 */ 		}
/* 000174 */ 		self._verbatim = verbatim;
/* 000177 */ 		self.flm_specinfo = __call__ (_EmptyClass, null);
/* 000178 */ 		self.flm_specinfo.recompose_flm_text = (function __lambda__ (node, recomposer) {
/* 000178 */ 			var kw = dict ();
/* 000178 */ 			if (arguments.length) {
/* 000178 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000178 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000178 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000178 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000178 */ 						switch (__attrib0__) {
/* 000178 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000178 */ 							case 'recomposer': var recomposer = __allkwargs0__ [__attrib0__]; break;
/* 000178 */ 							default: kw [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000178 */ 						}
/* 000178 */ 					}
/* 000178 */ 					delete kw.__kwargtrans__;
/* 000178 */ 				}
/* 000178 */ 			}
/* 000178 */ 			else {
/* 000178 */ 			}
/* 000180 */ 			return (function () {
/* 000180 */ 				var __accu0__ = self;
/* 000180 */ 				return __call__ (__accu0__.recompose_flm_text, __accu0__, node, __kwargtrans__ (__mergekwargtrans__ ({recomposer: recomposer}, kw)));
/* 000180 */ 			}) ();
/* 000180 */ 		});
/* 000180 */ 	});},
/* 000182 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000182 */ 		if (arguments.length) {
/* 000182 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000182 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000182 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000182 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000182 */ 					switch (__attrib0__) {
/* 000182 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000182 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000182 */ 					}
/* 000182 */ 				}
/* 000182 */ 			}
/* 000182 */ 		}
/* 000182 */ 		else {
/* 000182 */ 		}
/* 000183 */ 		return (function () {
/* 000183 */ 			var __accu0__ = visitor;
/* 000183 */ 			return __call__ (__accu0__.visit_unknown_node, __accu0__, self);
/* 000183 */ 		}) ();
/* 000183 */ 	});},
/* 000185 */ 	get recompose_flm_text () {return __get__ (this, function (self, node, recomposer) {
/* 000185 */ 		var kwargs = dict ();
/* 000185 */ 		if (arguments.length) {
/* 000185 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000185 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000185 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000185 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000185 */ 					switch (__attrib0__) {
/* 000185 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000185 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000185 */ 						case 'recomposer': var recomposer = __allkwargs0__ [__attrib0__]; break;
/* 000185 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000185 */ 					}
/* 000185 */ 				}
/* 000185 */ 				delete kwargs.__kwargtrans__;
/* 000185 */ 			}
/* 000185 */ 		}
/* 000185 */ 		else {
/* 000185 */ 		}
/* 000186 */ 		return self._verbatim;
/* 000186 */ 	});},
/* 000188 */ 	get latex_verbatim () {return __get__ (this, function (self) {
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
/* 000189 */ 		return self._verbatim;
/* 000189 */ 	});}
/* 000189 */ });
/* 000193 */ export var MathEnvironment =  __class__ ('MathEnvironment', [FLMEnvironmentSpecBase], {
/* 000193 */ 	__module__: __name__,
/* 000198 */ 	get get_flm_doc () {return __get__ (this, function (self) {
/* 000198 */ 		if (arguments.length) {
/* 000198 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000198 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000198 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000198 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000198 */ 					switch (__attrib0__) {
/* 000198 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000198 */ 					}
/* 000198 */ 				}
/* 000198 */ 			}
/* 000198 */ 		}
/* 000198 */ 		else {
/* 000198 */ 		}
/* 000199 */ 		return 'Display equation typeset as the corresponding LaTeX environment.';
/* 000199 */ 	});},
/* 000201 */ 	get __init__ () {return __get__ (this, function (self, environmentname, is_numbered) {
/* 000201 */ 		if (typeof is_numbered == 'undefined' || (is_numbered != null && is_numbered.hasOwnProperty ("__kwargtrans__"))) {;
/* 000201 */ 			var is_numbered = null;
/* 000201 */ 		};
/* 000201 */ 		if (arguments.length) {
/* 000201 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000201 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000201 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000201 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000201 */ 					switch (__attrib0__) {
/* 000201 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000201 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000201 */ 						case 'is_numbered': var is_numbered = __allkwargs0__ [__attrib0__]; break;
/* 000201 */ 					}
/* 000201 */ 				}
/* 000201 */ 			}
/* 000201 */ 		}
/* 000201 */ 		else {
/* 000201 */ 		}
/* 000202 */ 		__call__ (__call__ (__super__, null, MathEnvironment, '__init__'), null, self, __kwargtrans__ ({environmentname: environmentname}));
/* 000205 */ 		if (__t__ (is_numbered !== null)) {
/* 000206 */ 			self.is_numbered = is_numbered;
/* 000206 */ 		}
/* 000207 */ 		else {
/* 000208 */ 			self.is_numbered = __ne__ (__getslice__ (environmentname, __neg__ (1), null, 1), '*');
/* 000208 */ 		}
/* 000210 */ 		if (__t__ (!__t__ ((self.is_numbered)))) {
/* 000212 */ 			self.allowed_in_standalone_mode = true;
/* 000212 */ 		}
/* 000212 */ 	});},
/* 000214 */ 	_fields: tuple (['environmentname', 'is_numbered']),
/* 000216 */ 	get make_body_parsing_state_delta () {return __get__ (this, function (self, token, nodeargd, arg_parsing_state_delta, latex_walker) {
/* 000216 */ 		var kwargs = dict ();
/* 000216 */ 		if (arguments.length) {
/* 000216 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000216 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000216 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000216 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000216 */ 					switch (__attrib0__) {
/* 000216 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000216 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000216 */ 						case 'nodeargd': var nodeargd = __allkwargs0__ [__attrib0__]; break;
/* 000216 */ 						case 'arg_parsing_state_delta': var arg_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000216 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000216 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000216 */ 					}
/* 000216 */ 				}
/* 000216 */ 				delete kwargs.__kwargtrans__;
/* 000216 */ 			}
/* 000216 */ 		}
/* 000216 */ 		else {
/* 000216 */ 		}
/* 000218 */ 		return __call__ (ParsingStateDeltaEnterMathMode, null);
/* 000218 */ 	});},
/* 000220 */ 	get make_body_parser () {return __get__ (this, function (self, token, nodeargd, arg_parsing_state_delta) {
/* 000220 */ 		if (arguments.length) {
/* 000220 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000220 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000220 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000220 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000220 */ 					switch (__attrib0__) {
/* 000220 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000220 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000220 */ 						case 'nodeargd': var nodeargd = __allkwargs0__ [__attrib0__]; break;
/* 000220 */ 						case 'arg_parsing_state_delta': var arg_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000220 */ 					}
/* 000220 */ 				}
/* 000220 */ 			}
/* 000220 */ 		}
/* 000220 */ 		else {
/* 000220 */ 		}
/* 000228 */ 		return __call__ (LatexEnvironmentBodyContentsParser, null, __kwargtrans__ ({environmentname: token.arg, contents_parsing_state_delta: __call__ (ParsingStateDeltaExtendLatexContextDb, null, __kwargtrans__ ({extend_latex_context: __call__ (dict, null, __kwargtrans__ ({macros: [__call__ (MacroSpec, null, 'label', __kwargtrans__ ({arguments_spec_list: [__call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: (function () {
/* 000228 */ 			var __accu0__ = latexnodes_parsers;
/* 000228 */ 			return __call__ (__accu0__.LatexCharsGroupParser, __accu0__, __kwargtrans__ ({delimiters: tuple (['{', '}'])}));
/* 000240 */ 		}) (), argname: 'label'}))]})), __call__ (MacroSpec, null, 'tag', __kwargtrans__ ({arguments_spec_list: [__call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: '*', argname: 'tag_star'})), __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: (function () {
/* 000240 */ 			var __accu0__ = latexnodes_parsers;
/* 000240 */ 			return __call__ (__accu0__.LatexCharsGroupParser, __accu0__, __kwargtrans__ ({delimiters: tuple (['{', '}'])}));
/* 000246 */ 		}) (), argname: 'text'}))]})), __call__ (MacroSpec, null, '\\', __kwargtrans__ ({arguments_spec_list: []}))]}))}))}));
/* 000246 */ 	});},
/* 000252 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000252 */ 		if (arguments.length) {
/* 000252 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000252 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000252 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000252 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000252 */ 					switch (__attrib0__) {
/* 000252 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000252 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000252 */ 					}
/* 000252 */ 				}
/* 000252 */ 			}
/* 000252 */ 		}
/* 000252 */ 		else {
/* 000252 */ 		}
/* 000258 */ 		node.flm_equation_lines_labels_infos = [];
/* 000260 */ 		if (__t__ (!__t__ ((self.is_numbered)))) {
/* 000261 */ 			return node;
/* 000261 */ 		}
/* 000263 */ 		var init_last_line_info = function () {
/* 000263 */ 			if (arguments.length) {
/* 000263 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000263 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000263 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000263 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000263 */ 					}
/* 000263 */ 				}
/* 000263 */ 			}
/* 000263 */ 			else {
/* 000263 */ 			}
/* 000264 */ 			return dict ({'labels_info': [], 'custom_tag_flm_text': null, 'nonumber': false, 'line_nodelist': []});
/* 000264 */ 		};
/* 000270 */ 		var last_line_info = __call__ (dict, null, __call__ (init_last_line_info, null));
/* 000271 */ 		var _flush_last_equation_line_labels_infos = function (newline_node) {
/* 000271 */ 			if (typeof newline_node == 'undefined' || (newline_node != null && newline_node.hasOwnProperty ("__kwargtrans__"))) {;
/* 000271 */ 				var newline_node = null;
/* 000271 */ 			};
/* 000271 */ 			if (arguments.length) {
/* 000271 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000271 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000271 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000271 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000271 */ 						switch (__attrib0__) {
/* 000271 */ 							case 'newline_node': var newline_node = __allkwargs0__ [__attrib0__]; break;
/* 000271 */ 						}
/* 000271 */ 					}
/* 000271 */ 				}
/* 000271 */ 			}
/* 000271 */ 			else {
/* 000271 */ 			}
/* 000272 */ 			(function () {
/* 000272 */ 				var __accu0__ = node.flm_equation_lines_labels_infos;
/* 000276 */ 				return __call__ (__accu0__.append, __accu0__, dict ({'labels': __call__ (list, null, __getitem__ (last_line_info, 'labels_info')), 'custom_tag_flm_text': __getitem__ (last_line_info, 'custom_tag_flm_text'), 'nonumber': __getitem__ (last_line_info, 'nonumber'), 'line_nodelist': __call__ (list, null, __getitem__ (last_line_info, 'line_nodelist')), 'newline_node': newline_node}));
/* 000276 */ 			}) ();
/* 000279 */ 			(function () {
/* 000279 */ 				var __accu0__ = last_line_info;
/* 000279 */ 				return __call__ (__accu0__.py_update, __accu0__, __call__ (init_last_line_info, null));
/* 000279 */ 			}) ();
/* 000279 */ 		};
/* 000281 */ 		var last_node_is_newline = false;
/* 000282 */ 		var __iterable0__ = node.nodelist;
/* 000282 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000282 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000283 */ 			if (__t__ (__t__ ((function () {
/* 000283 */ 				var __accu0__ = n;
/* 000283 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000283 */ 			}) ()) && __eq__ (n.macroname, 'label'))) {
/* 000288 */ 				var ref_label_node_args = (function () {
/* 000288 */ 					var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: n}));
/* 000288 */ 					return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['label']));
/* 000288 */ 				}) ();
/* 000291 */ 				var ref_label_full = (function () {
/* 000291 */ 					var __accu0__ = __getitem__ (ref_label_node_args, 'label');
/* 000291 */ 					return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000291 */ 				}) ();
/* 000293 */ 				if (__t__ (__in__ (':', ref_label_full))) {
/* 000294 */ 					var __left0__ = (function () {
/* 000294 */ 						var __accu0__ = ref_label_full;
/* 000294 */ 						return __call__ (__accu0__.py_split, __accu0__, ':', 1);
/* 000294 */ 					}) ();
/* 000294 */ 					var ref_type = __left0__ [0];
/* 000294 */ 					var ref_label = __left0__ [1];
/* 000294 */ 				}
/* 000295 */ 				else {
/* 000296 */ 					var __left0__ = tuple ([null, ref_label_full]);
/* 000296 */ 					var ref_type = __left0__ [0];
/* 000296 */ 					var ref_label = __left0__ [1];
/* 000296 */ 				}
/* 000298 */ 				var info = dict ({'node': n, 'label': tuple ([ref_type, ref_label])});
/* 000303 */ 				(function () {
/* 000303 */ 					var __accu0__ = __getitem__ (last_line_info, 'labels_info');
/* 000303 */ 					return __call__ (__accu0__.append, __accu0__, info);
/* 000303 */ 				}) ();
/* 000303 */ 			}
/* 000305 */ 			else if (__t__ (__t__ ((function () {
/* 000305 */ 				var __accu0__ = n;
/* 000305 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000305 */ 			}) ()) && __eq__ (n.macroname, 'tag'))) {
/* 000308 */ 				var tag_node_args = (function () {
/* 000308 */ 					var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: n}));
/* 000308 */ 					return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['tag_star', 'text']));
/* 000308 */ 				}) ();
/* 000313 */ 				var custom_tag_flm_text = (function () {
/* 000313 */ 					var __accu0__ = (function () {
/* 000313 */ 						var __accu1__ = __getitem__ (tag_node_args, 'text');
/* 000313 */ 						return __call__ (__accu1__.get_content_nodelist, __accu1__);
/* 000313 */ 					}) ();
/* 000313 */ 					return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000313 */ 				}) ();
/* 000314 */ 				if (__t__ (!__t__ (((function () {
/* 000314 */ 					var __accu0__ = __getitem__ (tag_node_args, 'tag_star');
/* 000314 */ 					return __call__ (__accu0__.was_provided, __accu0__);
/* 000314 */ 				}) ())))) {
/* 000315 */ 					var custom_tag_flm_text = '({})'.format (custom_tag_flm_text);
/* 000315 */ 				}
/* 000317 */ 				__setitem__ (last_line_info, 'custom_tag_flm_text', custom_tag_flm_text);
/* 000317 */ 			}
/* 000319 */ 			else if (__t__ (__t__ ((function () {
/* 000319 */ 				var __accu0__ = n;
/* 000319 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000319 */ 			}) ()) && __eq__ (n.macroname, 'nonumber'))) {
/* 000321 */ 				__setitem__ (last_line_info, 'nonumber', true);
/* 000321 */ 			}
/* 000323 */ 			else if (__t__ (__t__ ((function () {
/* 000323 */ 				var __accu0__ = n;
/* 000323 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000323 */ 			}) ()) && __eq__ (n.macroname, '\\'))) {
/* 000324 */ 				__call__ (_flush_last_equation_line_labels_infos, null, n);
/* 000325 */ 				var last_node_is_newline = true;
/* 000325 */ 			}
/* 000326 */ 			else {
/* 000328 */ 				(function () {
/* 000328 */ 					var __accu0__ = __getitem__ (last_line_info, 'line_nodelist');
/* 000328 */ 					return __call__ (__accu0__.append, __accu0__, n);
/* 000328 */ 				}) ();
/* 000330 */ 				if (__t__ (__t__ (!__t__ (((function () {
/* 000330 */ 					var __accu0__ = n;
/* 000330 */ 					return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCommentNode);
/* 000331 */ 				}) ()))) && !__t__ ((__t__ ((function () {
/* 000331 */ 					var __accu0__ = n;
/* 000331 */ 					return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000332 */ 				}) ()) && !__t__ (((function () {
/* 000332 */ 					var __accu0__ = n.chars;
/* 000332 */ 					return __call__ (__accu0__.strip, __accu0__);
/* 000332 */ 				}) ())))))) {
/* 000334 */ 					var last_node_is_newline = false;
/* 000334 */ 				}
/* 000334 */ 			}
/* 000334 */ 		}
/* 000336 */ 		if (__t__ (!__t__ ((last_node_is_newline)))) {
/* 000337 */ 			__call__ (_flush_last_equation_line_labels_infos, null);
/* 000337 */ 		}
/* 000341 */ 		var __iterable0__ = __call__ (enumerate, null, node.flm_equation_lines_labels_infos);
/* 000341 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000341 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000341 */ 			var linej = __left0__ [0];
/* 000341 */ 			var lineinfo = __left0__ [1];
/* 000343 */ 			if (__t__ (__t__ (__getitem__ (lineinfo, 'nonumber')) && (__t__ (__call__ (len, null, __getitem__ (lineinfo, 'labels'))) || __getitem__ (lineinfo, 'custom_tag_flm_text')))) {
/* 000344 */ 				var found_stuff_list = [];
/* 000345 */ 				if (__t__ (__call__ (len, null, __getitem__ (lineinfo, 'labels')))) {
/* 000346 */ 					var labels_text = (function () {
/* 000346 */ 						var __accu0__ = [];
/* 000346 */ 						var __iterable1__ = __getitem__ (lineinfo, 'labels');
/* 000346 */ 						for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000346 */ 							var lblinfo = __getitem__ (__iterable1__, __index1__);
/* 000346 */ 							(function () {
/* 000346 */ 								var __accu1__ = __accu0__;
/* 000346 */ 								return __call__ (__accu1__.append, __accu1__, __getitem__ (lblinfo, 'label'));
/* 000346 */ 							}) ();
/* 000346 */ 						}
/* 000346 */ 						return __accu0__;
/* 000346 */ 					}) ();
/* 000347 */ 					var labels_text_joined = (function () {
/* 000347 */ 						var __accu0__ = ', ';
/* 000347 */ 						return __call__ (__accu0__.join, __accu0__, (function () {
/* 000347 */ 							var __accu1__ = [];
/* 000347 */ 							var __iterable1__ = labels_text;
/* 000347 */ 							for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000347 */ 								var ln = __getitem__ (__iterable1__, __index1__);
/* 000347 */ 								(function () {
/* 000347 */ 									var __accu2__ = __accu1__;
/* 000347 */ 									return __call__ (__accu2__.append, __accu2__, __add__ (__add__ ('‘', ln), '’'));
/* 000347 */ 								}) ();
/* 000347 */ 							}
/* 000347 */ 							return __accu1__;
/* 000347 */ 						}) ());
/* 000347 */ 					}) ();
/* 000348 */ 					(function () {
/* 000348 */ 						var __accu0__ = found_stuff_list;
/* 000348 */ 						return __call__ (__accu0__.append, __accu0__, '\\label label(s) {}'.format (labels_text_joined));
/* 000348 */ 					}) ();
/* 000348 */ 				}
/* 000351 */ 				if (__t__ (__getitem__ (lineinfo, 'custom_tag_flm_text'))) {
/* 000352 */ 					(function () {
/* 000352 */ 						var __accu0__ = found_stuff_list;
/* 000352 */ 						return __call__ (__accu0__.append, __accu0__, 'custom \\tag “{}”'.format (__getitem__ (lineinfo, 'custom_tag_flm_text')));
/* 000352 */ 					}) ();
/* 000352 */ 				}
/* 000355 */ 				var found_stuff = (function () {
/* 000355 */ 					var __accu0__ = ' and ';
/* 000355 */ 					return __call__ (__accu0__.join, __accu0__, found_stuff_list);
/* 000355 */ 				}) ();
/* 000356 */ 				var __except0__ = __call__ (LatexWalkerParseError, null, "You can't have \\nonumber and \\label/\\tag on the same equation line, found {}".format (found_stuff), __kwargtrans__ ({pos: (__t__ (__getitem__ (lineinfo, 'newline_node')) || node).pos}));
/* 000356 */ 				__except0__.__cause__ = null;
/* 000356 */ 				throw __except0__;
/* 000356 */ 			}
/* 000356 */ 		}
/* 000362 */ 		return node;
/* 000362 */ 	});},
/* 000365 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000365 */ 		if (arguments.length) {
/* 000365 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000365 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000365 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000365 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000365 */ 					switch (__attrib0__) {
/* 000365 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000365 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000365 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000365 */ 					}
/* 000365 */ 				}
/* 000365 */ 			}
/* 000365 */ 		}
/* 000365 */ 		else {
/* 000365 */ 		}
/* 000368 */ 		var environmentname = node.environmentname;
/* 000370 */ 		if (__t__ (!__t__ (((function () {
/* 000370 */ 			var __accu0__ = render_context;
/* 000370 */ 			return __call__ (__accu0__.supports_feature, __accu0__, 'math');
/* 000370 */ 		}) ())))) {
/* 000371 */ 			var __except0__ = __call__ (ValueError, null, "Feature 'math' is not enabled, cannot render math environment");
/* 000371 */ 			__except0__.__cause__ = null;
/* 000371 */ 			throw __except0__;
/* 000371 */ 		}
/* 000373 */ 		var math_mgr = (function () {
/* 000373 */ 			var __accu0__ = render_context;
/* 000373 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'math');
/* 000373 */ 		}) ();
/* 000375 */ 		var refs_mgr = null;
/* 000376 */ 		if (__t__ ((function () {
/* 000376 */ 			var __accu0__ = render_context;
/* 000376 */ 			return __call__ (__accu0__.supports_feature, __accu0__, 'refs');
/* 000376 */ 		}) ())) {
/* 000377 */ 			var refs_mgr = (function () {
/* 000377 */ 				var __accu0__ = render_context;
/* 000377 */ 				return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000377 */ 			}) ();
/* 000377 */ 		}
/* 000380 */ 		var nodelist = __call__ (list, null, node.nodelist);
/* 000382 */ 		var target_id = null;
/* 000384 */ 		var lineno = 0;
/* 000385 */ 		var __iterable0__ = node.flm_equation_lines_labels_infos;
/* 000385 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000385 */ 			var line_infos = __getitem__ (__iterable0__, __index0__);
/* 000387 */ 			var nonumber = __getitem__ (line_infos, 'nonumber');
/* 000389 */ 			if (__t__ (nonumber)) {
/* 000389 */ 				continue;
/* 000389 */ 			}
/* 000392 */ 			var custom_tag_flm_text = __getitem__ (line_infos, 'custom_tag_flm_text');
/* 000396 */ 			var __left0__ = (function () {
/* 000396 */ 				var __accu0__ = math_mgr;
/* 000396 */ 				return __call__ (__accu0__.new_numbered_display_math, __accu0__, node, lineno, custom_tag_flm_text);
/* 000396 */ 			}) ();
/* 000396 */ 			var eq_id = __left0__ [0];
/* 000396 */ 			var formatted_ref_flm_text = __left0__ [1];
/* 000396 */ 			var eq_counter_number = __left0__ [2];
/* 000398 */ 			var this_target_id = 'equation-{}'.format (eq_id);
/* 000399 */ 			if (__t__ (target_id === null)) {
/* 000401 */ 				var target_id = this_target_id;
/* 000401 */ 			}
/* 000403 */ 			if (__t__ (!__t__ ((custom_tag_flm_text)))) {
/* 000406 */ 				var newline_node = __getitem__ (line_infos, 'newline_node');
/* 000407 */ 				if (__t__ (newline_node !== null)) {
/* 000408 */ 					var i = (function () {
/* 000408 */ 						var __accu0__ = nodelist;
/* 000408 */ 						return __call__ (__accu0__.index, __accu0__, newline_node);
/* 000408 */ 					}) ();
/* 000408 */ 				}
/* 000409 */ 				else {
/* 000410 */ 					var i = __call__ (len, null, nodelist);
/* 000410 */ 				}
/* 000411 */ 				(function () {
/* 000411 */ 					var __accu0__ = nodelist;
/* 000414 */ 					return __call__ (__accu0__.insert, __accu0__, i, __call__ (_ProxyNodeWithRecomposedLatex, null, __add__ (__add__ ('\\tag*{', formatted_ref_flm_text), '}')));
/* 000414 */ 				}) ();
/* 000414 */ 			}
/* 000421 */ 			var this_target_id = target_id;
/* 000424 */ 			if (__t__ (__t__ (refs_mgr !== null) && render_context.is_first_pass)) {
/* 000425 */ 				var __iterable1__ = __getitem__ (line_infos, 'labels');
/* 000425 */ 				for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000425 */ 					var label_info = __getitem__ (__iterable1__, __index1__);
/* 000426 */ 					var __left0__ = __getitem__ (label_info, 'label');
/* 000426 */ 					var ref_type = __left0__ [0];
/* 000426 */ 					var ref_label = __left0__ [1];
/* 000427 */ 					var counter_formatter_id = math_mgr.feature.counter_formatter.counter_formatter_id;
/* 000429 */ 					(function () {
/* 000429 */ 						var __accu0__ = refs_mgr;
/* 000429 */ 						return __call__ (__accu0__.register_reference, __accu0__, ref_type, ref_label, __kwargtrans__ ({node: node, formatted_ref_flm_text: formatted_ref_flm_text, target_href: '#{}'.format (this_target_id), counter_value: eq_counter_number, counter_formatter_id: counter_formatter_id}));
/* 000429 */ 					}) ();
/* 000429 */ 				}
/* 000429 */ 			}
/* 000437 */ 			var lineno = __call__ (__iadd__, null, lineno, 1);
/* 000437 */ 		}
/* 000440 */ 		return (function () {
/* 000440 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000442 */ 			return __call__ (__accu0__.render_math_content, __accu0__, tuple (['', '']), (function () {
/* 000442 */ 				var __accu1__ = latexnodes_nodes;
/* 000442 */ 				return __call__ (__accu1__.LatexNodeList, __accu1__, nodelist);
/* 000442 */ 			}) (), render_context, 'display', __kwargtrans__ ({environmentname: environmentname, target_id: target_id}));
/* 000442 */ 		}) ();
/* 000442 */ 	});},
/* 000450 */ 	get recompose_pure_latex () {return __get__ (this, function (self, node, recomposer, visited_results_arguments, visited_results_body) {
/* 000450 */ 		var kwargs = dict ();
/* 000450 */ 		if (arguments.length) {
/* 000450 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000450 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000450 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000450 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000450 */ 					switch (__attrib0__) {
/* 000450 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000450 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000450 */ 						case 'recomposer': var recomposer = __allkwargs0__ [__attrib0__]; break;
/* 000450 */ 						case 'visited_results_arguments': var visited_results_arguments = __allkwargs0__ [__attrib0__]; break;
/* 000450 */ 						case 'visited_results_body': var visited_results_body = __allkwargs0__ [__attrib0__]; break;
/* 000450 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000450 */ 					}
/* 000450 */ 				}
/* 000450 */ 				delete kwargs.__kwargtrans__;
/* 000450 */ 			}
/* 000450 */ 		}
/* 000450 */ 		else {
/* 000450 */ 		}
/* 000455 */ 		var s = __add__ (__add__ ('\\begin{', node.environmentname), '}');
/* 000456 */ 		var s = __call__ (__iadd__, null, s, (function () {
/* 000456 */ 			var __accu0__ = '';
/* 000456 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000456 */ 				var __accu1__ = [];
/* 000456 */ 				var __iterable0__ = visited_results_arguments;
/* 000456 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000456 */ 					var x = __getitem__ (__iterable0__, __index0__);
/* 000456 */ 					if (__t__ (x !== null)) {
/* 000456 */ 						(function () {
/* 000456 */ 							var __accu2__ = __accu1__;
/* 000456 */ 							return __call__ (__accu2__.append, __accu2__, x);
/* 000456 */ 						}) ();
/* 000456 */ 					}
/* 000456 */ 				}
/* 000456 */ 				return __accu1__;
/* 000456 */ 			}) ());
/* 000456 */ 		}) ());
/* 000459 */ 		var s_lines = [];
/* 000460 */ 		var __iterable0__ = node.flm_equation_lines_labels_infos;
/* 000460 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000460 */ 			var line_infos = __getitem__ (__iterable0__, __index0__);
/* 000462 */ 			var s_line = '';
/* 000464 */ 			var __iterable1__ = __getitem__ (line_infos, 'line_nodelist');
/* 000464 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000464 */ 				var n = __getitem__ (__iterable1__, __index1__);
/* 000465 */ 				var s_line = __call__ (__iadd__, null, s_line, __getitem__ ((function () {
/* 000465 */ 					var __accu0__ = recomposer;
/* 000465 */ 					return __call__ (__accu0__.recompose_pure_latex, __accu0__, n);
/* 000465 */ 				}) (), 'latex'));
/* 000465 */ 			}
/* 000467 */ 			var s_line = (function () {
/* 000467 */ 				var __accu0__ = s_line;
/* 000467 */ 				return __call__ (__accu0__.strip, __accu0__);
/* 000467 */ 			}) ();
/* 000469 */ 			if (__t__ (__getitem__ (line_infos, 'custom_tag_flm_text') !== null)) {
/* 000470 */ 				var s_line = __call__ (__iadd__, null, s_line, __add__ (__add__ ('\\tag*{', __getitem__ ((function () {
/* 000470 */ 					var __accu0__ = recomposer;
/* 000470 */ 					return __call__ (__accu0__.recompose_pure_latex, __accu0__, __getitem__ (line_infos, 'custom_tag_flm_text'));
/* 000470 */ 				}) (), 'latex')), '}'));
/* 000470 */ 			}
/* 000474 */ 			var __iterable1__ = __getitem__ (line_infos, 'labels');
/* 000474 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000474 */ 				var label_info = __getitem__ (__iterable1__, __index1__);
/* 000475 */ 				var __left0__ = __getitem__ (label_info, 'label');
/* 000475 */ 				var ref_type = __left0__ [0];
/* 000475 */ 				var ref_label = __left0__ [1];
/* 000476 */ 				var safe_label_info = (function () {
/* 000476 */ 					var __accu0__ = recomposer;
/* 000476 */ 					return __call__ (__accu0__.make_safe_label, __accu0__, 'ref', ref_type, ref_label);
/* 000476 */ 				}) ();
/* 000477 */ 				var s_line = __call__ (__iadd__, null, s_line, __add__ (__add__ ('\\label{', __getitem__ (safe_label_info, 'safe_label')), '}'));
/* 000477 */ 			}
/* 000479 */ 			if (__t__ (__getitem__ (line_infos, 'nonumber'))) {
/* 000480 */ 				var s_line = __call__ (__iadd__, null, s_line, '\\nonumber ');
/* 000480 */ 			}
/* 000482 */ 			// pass;
/* 000486 */ 			(function () {
/* 000486 */ 				var __accu0__ = s_lines;
/* 000486 */ 				return __call__ (__accu0__.append, __accu0__, s_line);
/* 000486 */ 			}) ();
/* 000486 */ 		}
/* 000488 */ 		var s = __call__ (__iadd__, null, s, (function () {
/* 000488 */ 			var __accu0__ = '\\\\\n';
/* 000488 */ 			return __call__ (__accu0__.join, __accu0__, s_lines);
/* 000488 */ 		}) ());
/* 000490 */ 		var s = __call__ (__iadd__, null, s, __add__ (__add__ ('\\end{', node.environmentname), '}'));
/* 000492 */ 		return s;
/* 000492 */ 	});}
/* 000492 */ });
/* 000495 */ export var MathEqrefMacro =  __class__ ('MathEqrefMacro', [FLMMacroSpecBase], {
/* 000495 */ 	__module__: __name__,
/* 000497 */ 	delayed_render: true,
/* 000499 */ 	allowed_in_standalone_mode: false,
/* 000504 */ 	get __init__ () {return __get__ (this, function (self, macroname, ref_type) {
/* 000504 */ 		if (typeof macroname == 'undefined' || (macroname != null && macroname.hasOwnProperty ("__kwargtrans__"))) {;
/* 000504 */ 			var macroname = 'eqref';
/* 000504 */ 		};
/* 000504 */ 		if (typeof ref_type == 'undefined' || (ref_type != null && ref_type.hasOwnProperty ("__kwargtrans__"))) {;
/* 000504 */ 			var ref_type = 'eq';
/* 000504 */ 		};
/* 000504 */ 		var kwargs = dict ();
/* 000504 */ 		if (arguments.length) {
/* 000504 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000504 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000504 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000504 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000504 */ 					switch (__attrib0__) {
/* 000504 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000504 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000504 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000504 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000504 */ 					}
/* 000504 */ 				}
/* 000504 */ 				delete kwargs.__kwargtrans__;
/* 000504 */ 			}
/* 000504 */ 		}
/* 000504 */ 		else {
/* 000504 */ 		}
/* 000509 */ 		__call__ (__call__ (__super__, null, MathEqrefMacro, '__init__'), null, self, __kwargtrans__ ({macroname: macroname, arguments_spec_list: [__call__ (FLMArgumentSpec, null, (function () {
/* 000509 */ 			var __accu0__ = latexnodes_parsers;
/* 000509 */ 			return __call__ (__accu0__.LatexCharsGroupParser, __accu0__);
/* 000509 */ 		}) (), __kwargtrans__ ({argname: 'ref_label', flm_doc: __add__ (__add__ ('Equation label.  Must begin with the prefix ‘\\verbtext+', ref_type), ':+’')}))]}));
/* 000516 */ 		self.ref_type = ref_type;
/* 000516 */ 	});},
/* 000518 */ 	_fields: tuple (['macroname', 'ref_type']),
/* 000520 */ 	get get_flm_doc () {return __get__ (this, function (self) {
/* 000520 */ 		if (arguments.length) {
/* 000520 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000520 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000520 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000520 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000520 */ 					switch (__attrib0__) {
/* 000520 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000520 */ 					}
/* 000520 */ 				}
/* 000520 */ 			}
/* 000520 */ 		}
/* 000520 */ 		else {
/* 000520 */ 		}
/* 000521 */ 		return __add__ (__add__ ('Refer to an equation by its label.  The argument must be\n            a valid equation label which starts with \\verbcode+', self.ref_type), ':+.  You can place labels in display equations using the\n            \\verbcode+\\label{…}+ macro.');
/* 000521 */ 	});},
/* 000528 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000528 */ 		if (arguments.length) {
/* 000528 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000528 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000528 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000528 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000528 */ 					switch (__attrib0__) {
/* 000528 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000528 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000528 */ 					}
/* 000528 */ 				}
/* 000528 */ 			}
/* 000528 */ 		}
/* 000528 */ 		else {
/* 000528 */ 		}
/* 000530 */ 		var node_args = (function () {
/* 000530 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000530 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['ref_label']));
/* 000530 */ 		}) ();
/* 000534 */ 		var ref_type = null;
/* 000535 */ 		var ref_label = (function () {
/* 000535 */ 			var __accu0__ = __getitem__ (node_args, 'ref_label');
/* 000535 */ 			return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000535 */ 		}) ();
/* 000536 */ 		if (__t__ (__in__ (':', ref_label))) {
/* 000537 */ 			var __left0__ = (function () {
/* 000537 */ 				var __accu0__ = ref_label;
/* 000537 */ 				return __call__ (__accu0__.py_split, __accu0__, ':', 1);
/* 000537 */ 			}) ();
/* 000537 */ 			var ref_type = __left0__ [0];
/* 000537 */ 			var ref_label = __left0__ [1];
/* 000537 */ 		}
/* 000539 */ 		if (__t__ (__ne__ (ref_type, self.ref_type))) {
/* 000540 */ 			var __except0__ = __call__ (LatexWalkerLocatedError, null, 'Equation labels must begin with “{}:” (error in ‘\\{}’)'.format (self.ref_type, node.macroname), __kwargtrans__ ({pos: node.pos}));
/* 000540 */ 			__except0__.__cause__ = null;
/* 000540 */ 			throw __except0__;
/* 000540 */ 		}
/* 000546 */ 		node.flmarg_ref = tuple ([ref_type, ref_label]);
/* 000547 */ 		node.flm_ref_info = dict ({'ref_list': [node.flmarg_ref], 'display_content_nodelist': null});
/* 000547 */ 	});},
/* 000553 */ 	get prepare_delayed_render () {return __get__ (this, function (self, node, render_context) {
/* 000553 */ 		if (arguments.length) {
/* 000553 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000553 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000553 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000553 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000553 */ 					switch (__attrib0__) {
/* 000553 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000553 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000553 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000553 */ 					}
/* 000553 */ 				}
/* 000553 */ 			}
/* 000553 */ 		}
/* 000553 */ 		else {
/* 000553 */ 		}
/* 000554 */ 		// pass;
/* 000554 */ 	});},
/* 000556 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000556 */ 		if (arguments.length) {
/* 000556 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000556 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000556 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000556 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000556 */ 					switch (__attrib0__) {
/* 000556 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000556 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000556 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000556 */ 					}
/* 000556 */ 				}
/* 000556 */ 			}
/* 000556 */ 		}
/* 000556 */ 		else {
/* 000556 */ 		}
/* 000558 */ 		var __left0__ = node.flmarg_ref;
/* 000558 */ 		var ref_type = __left0__ [0];
/* 000558 */ 		var ref_label = __left0__ [1];
/* 000560 */ 		var refs_mgr = (function () {
/* 000560 */ 			var __accu0__ = render_context;
/* 000560 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000560 */ 		}) ();
/* 000562 */ 		var resource_info = node.latex_walker.resource_info;
/* 000564 */ 		try {
/* 000565 */ 			return (function () {
/* 000565 */ 				var __accu0__ = refs_mgr;
/* 000565 */ 				return __call__ (__accu0__.render_ref, __accu0__, ref_type, ref_label, null, resource_info, __kwargtrans__ ({counter_with_prefix: false}));
/* 000565 */ 			}) ();
/* 000565 */ 		}
/* 000565 */ 		catch (__except0__) {
/* 000565 */ 			if (isinstance (__except0__, Exception)) {
/* 000565 */ 				var e = __except0__;
/* 000572 */ 				(function () {
/* 000572 */ 					var __accu0__ = logger;
/* 000573 */ 					return __call__ (__accu0__.error, __accu0__, 'Failed to resolve reference to ‘{}:{}’: {} in ‘{}’ @ {}'.format (ref_type, ref_label, e, (function () {
/* 000573 */ 						var __accu1__ = node;
/* 000573 */ 						return __call__ (__accu1__.latex_verbatim, __accu1__);
/* 000573 */ 					}) (), (function () {
/* 000573 */ 						var __accu1__ = node;
/* 000573 */ 						return __call__ (__accu1__.format_pos, __accu1__);
/* 000573 */ 					}) ()));
/* 000573 */ 				}) ();
/* 000574 */ 				var __except1__ = __call__ (LatexWalkerLocatedError, null, 'Unable to resolve reference to ‘{}:{}’. {}'.format (ref_type, ref_label, e), __kwargtrans__ ({pos: node.pos}));
/* 000574 */ 				__except1__.__cause__ = null;
/* 000574 */ 				throw __except1__;
/* 000574 */ 			}
/* 000574 */ 			else {
/* 000574 */ 				throw __except0__;
/* 000574 */ 			}
/* 000574 */ 		}
/* 000574 */ 	});},
/* 000579 */ 	get recompose_pure_latex () {return __get__ (this, function (self, node, recomposer, visited_results_arguments) {
/* 000579 */ 		var kwargs = dict ();
/* 000579 */ 		if (arguments.length) {
/* 000579 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000579 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000579 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000579 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000579 */ 					switch (__attrib0__) {
/* 000579 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000579 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000579 */ 						case 'recomposer': var recomposer = __allkwargs0__ [__attrib0__]; break;
/* 000579 */ 						case 'visited_results_arguments': var visited_results_arguments = __allkwargs0__ [__attrib0__]; break;
/* 000579 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000579 */ 					}
/* 000579 */ 				}
/* 000579 */ 				delete kwargs.__kwargtrans__;
/* 000579 */ 			}
/* 000579 */ 		}
/* 000579 */ 		else {
/* 000579 */ 		}
/* 000583 */ 		var safe_label_info = (function () {
/* 000583 */ 			var __accu0__ = recomposer;
/* 000583 */ 			return __call__ (__accu0__.make_safe_label, __accu0__, 'ref', __getitem__ (node.flmarg_ref, 0), __getitem__ (node.flmarg_ref, 1));
/* 000583 */ 		}) ();
/* 000587 */ 		return __add__ (__add__ ('\\eqref{', __getitem__ (safe_label_info, 'safe_label')), '}');
/* 000587 */ 	});}
/* 000587 */ });
/* 000592 */ export var FeatureClass = FeatureMath;
/* 000007 */ 
//# sourceMappingURL=flm.feature.math.map