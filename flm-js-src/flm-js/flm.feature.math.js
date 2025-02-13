/* 000001 */ // Transcrypt'ed from Python, 2025-02-13 12:53:50
/* 000007 */ var logging = {};
/* 000007 */ var re = {};
/* 000007 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000029 */ import {Counter, build_counter_formatter} from './flm.counter.js';
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
/* 000007 */ export {LatexEnvironmentBodyContentsParser, Counter, FLMEnvironmentSpecBase, ParsedArgumentsInfo, ParsingStateDeltaExtendLatexContextDb, LatexWalkerLocatedError, build_counter_formatter, latexnodes_parsers, Feature, FLMArgumentSpec, MacroSpec, ParsingStateDeltaEnterMathMode, FLMMacroSpecBase, latexnodes_nodes};
/* 000001 */ var __name__ = 'flm.feature.math';
/* 000009 */ export var logger = (function () {
/* 000009 */ 	var __accu0__ = logging;
/* 000009 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000009 */ }) ();
/* 000035 */ export var _default_math_environment_names = tuple (['equation', 'equation*', 'align', 'align*', 'gather', 'gather*']);
/* 000045 */ export var eq_default_counter_formatter_spec = dict ({'format_num': dict ({'template': '(${arabic})'}), 'prefix_display': dict ({'singular': 'Eq.~', 'plural': 'Eqs.~', 'capital': dict ({'singular': 'Equation', 'plural': 'Equations'})}), 'delimiters': tuple (['', '']), 'join_spec': 'compact'});
/* 000060 */ export var FeatureMath =  __class__ ('FeatureMath', [Feature], {
/* 000060 */ 	__module__: __name__,
/* 000062 */ 	feature_name: 'math',
/* 000063 */ 	feature_title: 'Mathematical typesetting: equations and equation references',
/* 000065 */ 	get feature_flm_doc () {return __get__ (this, function (self) {
/* 000065 */ 		if (arguments.length) {
/* 000065 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000065 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000065 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000065 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000065 */ 					switch (__attrib0__) {
/* 000065 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000065 */ 					}
/* 000065 */ 				}
/* 000065 */ 			}
/* 000065 */ 		}
/* 000065 */ 		else {
/* 000065 */ 		}
/* 000066 */ 		return __add__ (__add__ ('\n            You can use the following environments and macros to typeset pretty display\n            math equations, create labels, and refer to them at other places in your\n            document.\n\n            Note that all equation labels must begin with the prefix \\verbcode{', self.eqref_ref_type), ':}.');
/* 000066 */ 	});},
/* 000076 */ 	feature_optional_dependencies: ['refs'],
/* 000078 */ 	feature_default_config: dict ({'counter_formatter': eq_default_counter_formatter_spec}),
/* 000082 */ 	get __init__ () {return __get__ (this, function (self, counter_formatter, math_environment_names, eqref_macro_name, eqref_ref_type) {
/* 000082 */ 		if (typeof counter_formatter == 'undefined' || (counter_formatter != null && counter_formatter.hasOwnProperty ("__kwargtrans__"))) {;
/* 000082 */ 			var counter_formatter = null;
/* 000082 */ 		};
/* 000082 */ 		if (typeof math_environment_names == 'undefined' || (math_environment_names != null && math_environment_names.hasOwnProperty ("__kwargtrans__"))) {;
/* 000082 */ 			var math_environment_names = null;
/* 000082 */ 		};
/* 000082 */ 		if (typeof eqref_macro_name == 'undefined' || (eqref_macro_name != null && eqref_macro_name.hasOwnProperty ("__kwargtrans__"))) {;
/* 000082 */ 			var eqref_macro_name = 'eqref';
/* 000082 */ 		};
/* 000082 */ 		if (typeof eqref_ref_type == 'undefined' || (eqref_ref_type != null && eqref_ref_type.hasOwnProperty ("__kwargtrans__"))) {;
/* 000082 */ 			var eqref_ref_type = 'eq';
/* 000082 */ 		};
/* 000082 */ 		if (arguments.length) {
/* 000082 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000082 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000082 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000082 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000082 */ 					switch (__attrib0__) {
/* 000082 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000082 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000082 */ 						case 'math_environment_names': var math_environment_names = __allkwargs0__ [__attrib0__]; break;
/* 000082 */ 						case 'eqref_macro_name': var eqref_macro_name = __allkwargs0__ [__attrib0__]; break;
/* 000082 */ 						case 'eqref_ref_type': var eqref_ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000082 */ 					}
/* 000082 */ 				}
/* 000082 */ 			}
/* 000082 */ 		}
/* 000082 */ 		else {
/* 000082 */ 		}
/* 000089 */ 		__call__ (__call__ (__super__, null, FeatureMath, '__init__'), null, self);
/* 000091 */ 		if (__t__ (counter_formatter === null)) {
/* 000092 */ 			var counter_formatter = __getitem__ (self.feature_default_config, 'counter_formatter');
/* 000092 */ 		}
/* 000093 */ 		self.counter_formatter = __call__ (build_counter_formatter, null, counter_formatter, eq_default_counter_formatter_spec, __kwargtrans__ ({counter_formatter_id: 'eq'}));
/* 000099 */ 		if (__t__ (math_environment_names === null)) {
/* 000100 */ 			var math_environment_names = _default_math_environment_names;
/* 000100 */ 		}
/* 000101 */ 		self.math_environment_names = math_environment_names;
/* 000103 */ 		self.eqref_macro_name = eqref_macro_name;
/* 000104 */ 		self.eqref_ref_type = eqref_ref_type;
/* 000106 */ 	});},
/* 000106 */ 	DocumentManager: __class__ ('DocumentManager', [Feature.DocumentManager], {
/* 000106 */ 		__module__: __name__,
/* 000107 */ 		get initialize () {return __get__ (this, function (self) {
/* 000107 */ 			if (arguments.length) {
/* 000107 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000107 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000107 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000107 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000107 */ 						switch (__attrib0__) {
/* 000107 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000107 */ 						}
/* 000107 */ 					}
/* 000107 */ 				}
/* 000107 */ 			}
/* 000107 */ 			else {
/* 000107 */ 			}
/* 000108 */ 			// pass;
/* 000108 */ 		});}
/* 000110 */ 	}),
/* 000110 */ 	RenderManager: __class__ ('RenderManager', [Feature.RenderManager], {
/* 000110 */ 		__module__: __name__,
/* 000111 */ 		get initialize () {return __get__ (this, function (self) {
/* 000111 */ 			if (arguments.length) {
/* 000111 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000111 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000111 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000111 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000111 */ 						switch (__attrib0__) {
/* 000111 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000111 */ 						}
/* 000111 */ 					}
/* 000111 */ 				}
/* 000111 */ 			}
/* 000111 */ 			else {
/* 000111 */ 			}
/* 000112 */ 			self.equation_counter = __call__ (Counter, null, self.feature.counter_formatter);
/* 000114 */ 			self.equation_info_by_node = dict ({});
/* 000116 */ 			if (__t__ ((function () {
/* 000116 */ 				var __accu0__ = self.render_context;
/* 000116 */ 				return __call__ (__accu0__.supports_feature, __accu0__, 'refs');
/* 000116 */ 			}) ())) {
/* 000117 */ 				var refs_mgr = (function () {
/* 000117 */ 					var __accu0__ = self.render_context;
/* 000117 */ 					return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000117 */ 				}) ();
/* 000118 */ 				(function () {
/* 000118 */ 					var __accu0__ = refs_mgr;
/* 000118 */ 					return __call__ (__accu0__.register_counter_formatter, __accu0__, __kwargtrans__ ({counter_formatter: self.feature.counter_formatter}));
/* 000118 */ 				}) ();
/* 000118 */ 			}
/* 000118 */ 		});},
/* 000122 */ 		get new_numbered_display_math () {return __get__ (this, function (self, node, lineno, custom_tag_flm_text) {
/* 000122 */ 			if (typeof custom_tag_flm_text == 'undefined' || (custom_tag_flm_text != null && custom_tag_flm_text.hasOwnProperty ("__kwargtrans__"))) {;
/* 000122 */ 				var custom_tag_flm_text = null;
/* 000122 */ 			};
/* 000122 */ 			if (arguments.length) {
/* 000122 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000122 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000122 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000122 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000122 */ 						switch (__attrib0__) {
/* 000122 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000122 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000122 */ 							case 'lineno': var lineno = __allkwargs0__ [__attrib0__]; break;
/* 000122 */ 							case 'custom_tag_flm_text': var custom_tag_flm_text = __allkwargs0__ [__attrib0__]; break;
/* 000122 */ 						}
/* 000122 */ 					}
/* 000122 */ 				}
/* 000122 */ 			}
/* 000122 */ 			else {
/* 000122 */ 			}
/* 000124 */ 			var key = tuple ([(function () {
/* 000124 */ 				var __accu0__ = self;
/* 000124 */ 				return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000124 */ 			}) (), lineno]);
/* 000125 */ 			if (__t__ (__in__ (key, self.equation_info_by_node))) {
/* 000126 */ 				return __getitem__ (self.equation_info_by_node, key);
/* 000126 */ 			}
/* 000128 */ 			if (__t__ (custom_tag_flm_text !== null)) {
/* 000129 */ 				var formatted_ref_flm_text = custom_tag_flm_text;
/* 000130 */ 				var eq_id = '_{}'.format (__getitem__ (key, 0));
/* 000131 */ 				if (__t__ (lineno)) {
/* 000132 */ 					var eq_id = __call__ (__iadd__, null, eq_id, '-{}'.format (lineno));
/* 000132 */ 				}
/* 000133 */ 				var eq_counter_number = null;
/* 000133 */ 			}
/* 000134 */ 			else {
/* 000136 */ 				var __left0__ = (function () {
/* 000136 */ 					var __accu0__ = self.equation_counter;
/* 000136 */ 					return __call__ (__accu0__.step_and_format_flm, __accu0__);
/* 000136 */ 				}) ();
/* 000136 */ 				var eq_id = __left0__ [0];
/* 000136 */ 				var formatted_ref_flm_text = __left0__ [1];
/* 000137 */ 				var eq_counter_number = eq_id;
/* 000137 */ 			}
/* 000139 */ 			var info = tuple ([eq_id, formatted_ref_flm_text, eq_counter_number]);
/* 000140 */ 			__setitem__ (self.equation_info_by_node, key, info);
/* 000141 */ 			return info;
/* 000141 */ 		});}
/* 000141 */ 	}),
/* 000144 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000144 */ 		if (arguments.length) {
/* 000144 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000144 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000144 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000144 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000144 */ 					switch (__attrib0__) {
/* 000144 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000144 */ 					}
/* 000144 */ 				}
/* 000144 */ 			}
/* 000144 */ 		}
/* 000144 */ 		else {
/* 000144 */ 		}
/* 000145 */ 		var environments = (function () {
/* 000145 */ 			var __accu0__ = [];
/* 000145 */ 			var __iterable0__ = self.math_environment_names;
/* 000145 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000149 */ 				var math_environment_name = __getitem__ (__iterable0__, __index0__);
/* 000149 */ 				(function () {
/* 000149 */ 					var __accu1__ = __accu0__;
/* 000146 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (MathEnvironment, null, math_environment_name));
/* 000146 */ 				}) ();
/* 000146 */ 			}
/* 000146 */ 			return __accu0__;
/* 000146 */ 		}) ();
/* 000151 */ 		var macros = [];
/* 000152 */ 		if (__t__ (self.eqref_macro_name !== null)) {
/* 000153 */ 			(function () {
/* 000153 */ 				var __accu0__ = macros;
/* 000154 */ 				return __call__ (__accu0__.append, __accu0__, __call__ (MathEqrefMacro, null, __kwargtrans__ ({macroname: self.eqref_macro_name, ref_type: self.eqref_ref_type})));
/* 000154 */ 			}) ();
/* 000154 */ 		}
/* 000160 */ 		return __call__ (dict, null, __kwargtrans__ ({macros: macros, environments: environments}));
/* 000160 */ 	});}
/* 000160 */ });
/* 000166 */ export var _EmptyClass =  __class__ ('_EmptyClass', [object], {
/* 000166 */ 	__module__: __name__,
/* 000166 */ });
/* 000169 */ export var _ProxyNodeWithRecomposedLatex =  __class__ ('_ProxyNodeWithRecomposedLatex', [object], {
/* 000169 */ 	__module__: __name__,
/* 000171 */ 	pos: null,
/* 000172 */ 	pos_end: null,
/* 000174 */ 	get __init__ () {return __get__ (this, function (self, verbatim) {
/* 000174 */ 		if (arguments.length) {
/* 000174 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000174 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000174 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000174 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000174 */ 					switch (__attrib0__) {
/* 000174 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000174 */ 						case 'verbatim': var verbatim = __allkwargs0__ [__attrib0__]; break;
/* 000174 */ 					}
/* 000174 */ 				}
/* 000174 */ 			}
/* 000174 */ 		}
/* 000174 */ 		else {
/* 000174 */ 		}
/* 000175 */ 		self._verbatim = verbatim;
/* 000178 */ 		self.flm_specinfo = __call__ (_EmptyClass, null);
/* 000179 */ 		self.flm_specinfo.recompose_flm_text = (function __lambda__ (node, recomposer) {
/* 000179 */ 			if (arguments.length) {
/* 000179 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000179 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000179 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000179 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000179 */ 						switch (__attrib0__) {
/* 000179 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000179 */ 							case 'recomposer': var recomposer = __allkwargs0__ [__attrib0__]; break;
/* 000179 */ 						}
/* 000179 */ 					}
/* 000179 */ 				}
/* 000179 */ 			}
/* 000179 */ 			else {
/* 000179 */ 			}
/* 000181 */ 			return (function () {
/* 000181 */ 				var __accu0__ = self;
/* 000181 */ 				return __call__ (__accu0__.recompose_flm_text, __accu0__, node, __kwargtrans__ ({recomposer: recomposer}));
/* 000181 */ 			}) ();
/* 000181 */ 		});
/* 000181 */ 	});},
/* 000183 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000183 */ 		if (arguments.length) {
/* 000183 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000183 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000183 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000183 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000183 */ 					switch (__attrib0__) {
/* 000183 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000183 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000183 */ 					}
/* 000183 */ 				}
/* 000183 */ 			}
/* 000183 */ 		}
/* 000183 */ 		else {
/* 000183 */ 		}
/* 000184 */ 		return (function () {
/* 000184 */ 			var __accu0__ = visitor;
/* 000184 */ 			return __call__ (__accu0__.visit_unknown_node, __accu0__, self);
/* 000184 */ 		}) ();
/* 000184 */ 	});},
/* 000186 */ 	get recompose_flm_text () {return __get__ (this, function (self, node, recomposer) {
/* 000186 */ 		if (arguments.length) {
/* 000186 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000186 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000186 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000186 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000186 */ 					switch (__attrib0__) {
/* 000186 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000186 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000186 */ 						case 'recomposer': var recomposer = __allkwargs0__ [__attrib0__]; break;
/* 000186 */ 					}
/* 000186 */ 				}
/* 000186 */ 			}
/* 000186 */ 		}
/* 000186 */ 		else {
/* 000186 */ 		}
/* 000187 */ 		return self._verbatim;
/* 000187 */ 	});},
/* 000189 */ 	get latex_verbatim () {return __get__ (this, function (self) {
/* 000189 */ 		if (arguments.length) {
/* 000189 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000189 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000189 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000189 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000189 */ 					switch (__attrib0__) {
/* 000189 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000189 */ 					}
/* 000189 */ 				}
/* 000189 */ 			}
/* 000189 */ 		}
/* 000189 */ 		else {
/* 000189 */ 		}
/* 000190 */ 		return self._verbatim;
/* 000190 */ 	});}
/* 000190 */ });
/* 000194 */ export var MathEnvironment =  __class__ ('MathEnvironment', [FLMEnvironmentSpecBase], {
/* 000194 */ 	__module__: __name__,
/* 000199 */ 	get get_flm_doc () {return __get__ (this, function (self) {
/* 000199 */ 		if (arguments.length) {
/* 000199 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000199 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000199 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000199 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000199 */ 					switch (__attrib0__) {
/* 000199 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000199 */ 					}
/* 000199 */ 				}
/* 000199 */ 			}
/* 000199 */ 		}
/* 000199 */ 		else {
/* 000199 */ 		}
/* 000200 */ 		return 'Display equation typeset as the corresponding LaTeX environment.';
/* 000200 */ 	});},
/* 000202 */ 	get __init__ () {return __get__ (this, function (self, environmentname, is_numbered) {
/* 000202 */ 		if (typeof is_numbered == 'undefined' || (is_numbered != null && is_numbered.hasOwnProperty ("__kwargtrans__"))) {;
/* 000202 */ 			var is_numbered = null;
/* 000202 */ 		};
/* 000202 */ 		if (arguments.length) {
/* 000202 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000202 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000202 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000202 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000202 */ 					switch (__attrib0__) {
/* 000202 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000202 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000202 */ 						case 'is_numbered': var is_numbered = __allkwargs0__ [__attrib0__]; break;
/* 000202 */ 					}
/* 000202 */ 				}
/* 000202 */ 			}
/* 000202 */ 		}
/* 000202 */ 		else {
/* 000202 */ 		}
/* 000203 */ 		__call__ (__call__ (__super__, null, MathEnvironment, '__init__'), null, self, __kwargtrans__ ({environmentname: environmentname}));
/* 000206 */ 		if (__t__ (is_numbered !== null)) {
/* 000207 */ 			self.is_numbered = is_numbered;
/* 000207 */ 		}
/* 000208 */ 		else {
/* 000209 */ 			self.is_numbered = __ne__ (__getslice__ (environmentname, __neg__ (1), null, 1), '*');
/* 000209 */ 		}
/* 000211 */ 		if (__t__ (!__t__ ((self.is_numbered)))) {
/* 000213 */ 			self.allowed_in_standalone_mode = true;
/* 000213 */ 		}
/* 000213 */ 	});},
/* 000215 */ 	_fields: tuple (['environmentname', 'is_numbered']),
/* 000217 */ 	get make_body_parsing_state_delta () {return __get__ (this, function (self, token, nodeargd, arg_parsing_state_delta, latex_walker) {
/* 000217 */ 		var kwargs = dict ();
/* 000217 */ 		if (arguments.length) {
/* 000217 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000217 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000217 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000217 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000217 */ 					switch (__attrib0__) {
/* 000217 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000217 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000217 */ 						case 'nodeargd': var nodeargd = __allkwargs0__ [__attrib0__]; break;
/* 000217 */ 						case 'arg_parsing_state_delta': var arg_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000217 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000217 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000217 */ 					}
/* 000217 */ 				}
/* 000217 */ 				delete kwargs.__kwargtrans__;
/* 000217 */ 			}
/* 000217 */ 		}
/* 000217 */ 		else {
/* 000217 */ 		}
/* 000219 */ 		return __call__ (ParsingStateDeltaEnterMathMode, null);
/* 000219 */ 	});},
/* 000221 */ 	get make_body_parser () {return __get__ (this, function (self, token, nodeargd, arg_parsing_state_delta) {
/* 000221 */ 		if (arguments.length) {
/* 000221 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000221 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000221 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000221 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000221 */ 					switch (__attrib0__) {
/* 000221 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000221 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000221 */ 						case 'nodeargd': var nodeargd = __allkwargs0__ [__attrib0__]; break;
/* 000221 */ 						case 'arg_parsing_state_delta': var arg_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000221 */ 					}
/* 000221 */ 				}
/* 000221 */ 			}
/* 000221 */ 		}
/* 000221 */ 		else {
/* 000221 */ 		}
/* 000229 */ 		return __call__ (LatexEnvironmentBodyContentsParser, null, __kwargtrans__ ({environmentname: token.arg, contents_parsing_state_delta: __call__ (ParsingStateDeltaExtendLatexContextDb, null, __kwargtrans__ ({extend_latex_context: __call__ (dict, null, __kwargtrans__ ({macros: [__call__ (MacroSpec, null, 'label', __kwargtrans__ ({arguments_spec_list: [__call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: (function () {
/* 000229 */ 			var __accu0__ = latexnodes_parsers;
/* 000229 */ 			return __call__ (__accu0__.LatexCharsGroupParser, __accu0__, __kwargtrans__ ({delimiters: tuple (['{', '}'])}));
/* 000241 */ 		}) (), argname: 'label'}))]})), __call__ (MacroSpec, null, 'tag', __kwargtrans__ ({arguments_spec_list: [__call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: '*', argname: 'tag_star'})), __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: (function () {
/* 000241 */ 			var __accu0__ = latexnodes_parsers;
/* 000241 */ 			return __call__ (__accu0__.LatexCharsGroupParser, __accu0__, __kwargtrans__ ({delimiters: tuple (['{', '}'])}));
/* 000249 */ 		}) (), argname: 'text'}))]})), __call__ (MacroSpec, null, '\\', __kwargtrans__ ({arguments_spec_list: [__call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: (function () {
/* 000249 */ 			var __accu0__ = latexnodes_parsers;
/* 000249 */ 			return __call__ (__accu0__.LatexDelimitedGroupParser, __accu0__, __kwargtrans__ ({delimiters: tuple (['[', ']']), optional: true, allow_pre_space: false}));
/* 000249 */ 		}) (), argname: 'vertical_spacing'}))]}))]}))}))}));
/* 000249 */ 	});},
/* 000262 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000262 */ 		if (arguments.length) {
/* 000262 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000262 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000262 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000262 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000262 */ 					switch (__attrib0__) {
/* 000262 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000262 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000262 */ 					}
/* 000262 */ 				}
/* 000262 */ 			}
/* 000262 */ 		}
/* 000262 */ 		else {
/* 000262 */ 		}
/* 000268 */ 		node.flm_equation_lines_labels_infos = [];
/* 000270 */ 		if (__t__ (!__t__ ((self.is_numbered)))) {
/* 000271 */ 			return node;
/* 000271 */ 		}
/* 000273 */ 		var init_last_line_info = function () {
/* 000273 */ 			if (arguments.length) {
/* 000273 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000273 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000273 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000273 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000273 */ 					}
/* 000273 */ 				}
/* 000273 */ 			}
/* 000273 */ 			else {
/* 000273 */ 			}
/* 000274 */ 			return dict ({'labels_info': [], 'custom_tag_flm_text': null, 'nonumber': false, 'line_nodelist': []});
/* 000274 */ 		};
/* 000280 */ 		var last_line_info = __call__ (dict, null, __call__ (init_last_line_info, null));
/* 000281 */ 		var _flush_last_equation_line_labels_infos = function (newline_node) {
/* 000281 */ 			if (typeof newline_node == 'undefined' || (newline_node != null && newline_node.hasOwnProperty ("__kwargtrans__"))) {;
/* 000281 */ 				var newline_node = null;
/* 000281 */ 			};
/* 000281 */ 			if (arguments.length) {
/* 000281 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000281 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000281 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000281 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000281 */ 						switch (__attrib0__) {
/* 000281 */ 							case 'newline_node': var newline_node = __allkwargs0__ [__attrib0__]; break;
/* 000281 */ 						}
/* 000281 */ 					}
/* 000281 */ 				}
/* 000281 */ 			}
/* 000281 */ 			else {
/* 000281 */ 			}
/* 000282 */ 			(function () {
/* 000282 */ 				var __accu0__ = node.flm_equation_lines_labels_infos;
/* 000286 */ 				return __call__ (__accu0__.append, __accu0__, dict ({'labels': __call__ (list, null, __getitem__ (last_line_info, 'labels_info')), 'custom_tag_flm_text': __getitem__ (last_line_info, 'custom_tag_flm_text'), 'nonumber': __getitem__ (last_line_info, 'nonumber'), 'line_nodelist': __call__ (list, null, __getitem__ (last_line_info, 'line_nodelist')), 'newline_node': newline_node}));
/* 000286 */ 			}) ();
/* 000289 */ 			(function () {
/* 000289 */ 				var __accu0__ = last_line_info;
/* 000289 */ 				return __call__ (__accu0__.py_update, __accu0__, __call__ (init_last_line_info, null));
/* 000289 */ 			}) ();
/* 000289 */ 		};
/* 000291 */ 		var last_node_is_newline = false;
/* 000292 */ 		var __iterable0__ = node.nodelist;
/* 000292 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000292 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000293 */ 			if (__t__ (__t__ ((function () {
/* 000293 */ 				var __accu0__ = n;
/* 000293 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000293 */ 			}) ()) && __eq__ (n.macroname, 'label'))) {
/* 000298 */ 				var ref_label_node_args = (function () {
/* 000298 */ 					var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: n}));
/* 000298 */ 					return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['label']));
/* 000298 */ 				}) ();
/* 000301 */ 				var ref_label_full = (function () {
/* 000301 */ 					var __accu0__ = __getitem__ (ref_label_node_args, 'label');
/* 000301 */ 					return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000301 */ 				}) ();
/* 000303 */ 				if (__t__ (__in__ (':', ref_label_full))) {
/* 000304 */ 					var __left0__ = (function () {
/* 000304 */ 						var __accu0__ = ref_label_full;
/* 000304 */ 						return __call__ (__accu0__.py_split, __accu0__, ':', 1);
/* 000304 */ 					}) ();
/* 000304 */ 					var ref_type = __left0__ [0];
/* 000304 */ 					var ref_label = __left0__ [1];
/* 000304 */ 				}
/* 000305 */ 				else {
/* 000306 */ 					var __left0__ = tuple ([null, ref_label_full]);
/* 000306 */ 					var ref_type = __left0__ [0];
/* 000306 */ 					var ref_label = __left0__ [1];
/* 000306 */ 				}
/* 000308 */ 				var info = dict ({'node': n, 'label': tuple ([ref_type, ref_label])});
/* 000313 */ 				(function () {
/* 000313 */ 					var __accu0__ = __getitem__ (last_line_info, 'labels_info');
/* 000313 */ 					return __call__ (__accu0__.append, __accu0__, info);
/* 000313 */ 				}) ();
/* 000313 */ 			}
/* 000315 */ 			else if (__t__ (__t__ ((function () {
/* 000315 */ 				var __accu0__ = n;
/* 000315 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000315 */ 			}) ()) && __eq__ (n.macroname, 'tag'))) {
/* 000318 */ 				var tag_node_args = (function () {
/* 000318 */ 					var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: n}));
/* 000318 */ 					return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['tag_star', 'text']));
/* 000318 */ 				}) ();
/* 000323 */ 				var custom_tag_flm_text = (function () {
/* 000323 */ 					var __accu0__ = (function () {
/* 000323 */ 						var __accu1__ = __getitem__ (tag_node_args, 'text');
/* 000323 */ 						return __call__ (__accu1__.get_content_nodelist, __accu1__);
/* 000323 */ 					}) ();
/* 000323 */ 					return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000323 */ 				}) ();
/* 000324 */ 				if (__t__ (!__t__ (((function () {
/* 000324 */ 					var __accu0__ = __getitem__ (tag_node_args, 'tag_star');
/* 000324 */ 					return __call__ (__accu0__.was_provided, __accu0__);
/* 000324 */ 				}) ())))) {
/* 000325 */ 					var custom_tag_flm_text = '({})'.format (custom_tag_flm_text);
/* 000325 */ 				}
/* 000327 */ 				__setitem__ (last_line_info, 'custom_tag_flm_text', custom_tag_flm_text);
/* 000327 */ 			}
/* 000329 */ 			else if (__t__ (__t__ ((function () {
/* 000329 */ 				var __accu0__ = n;
/* 000329 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000329 */ 			}) ()) && __eq__ (n.macroname, 'nonumber'))) {
/* 000331 */ 				__setitem__ (last_line_info, 'nonumber', true);
/* 000331 */ 			}
/* 000333 */ 			else if (__t__ (__t__ ((function () {
/* 000333 */ 				var __accu0__ = n;
/* 000333 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000333 */ 			}) ()) && __eq__ (n.macroname, '\\'))) {
/* 000334 */ 				__call__ (_flush_last_equation_line_labels_infos, null, n);
/* 000335 */ 				var last_node_is_newline = true;
/* 000335 */ 			}
/* 000336 */ 			else {
/* 000338 */ 				(function () {
/* 000338 */ 					var __accu0__ = __getitem__ (last_line_info, 'line_nodelist');
/* 000338 */ 					return __call__ (__accu0__.append, __accu0__, n);
/* 000338 */ 				}) ();
/* 000340 */ 				if (__t__ (__t__ (!__t__ (((function () {
/* 000340 */ 					var __accu0__ = n;
/* 000340 */ 					return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCommentNode);
/* 000341 */ 				}) ()))) && !__t__ ((__t__ ((function () {
/* 000341 */ 					var __accu0__ = n;
/* 000341 */ 					return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000342 */ 				}) ()) && !__t__ (((function () {
/* 000342 */ 					var __accu0__ = n.chars;
/* 000342 */ 					return __call__ (__accu0__.strip, __accu0__);
/* 000342 */ 				}) ())))))) {
/* 000344 */ 					var last_node_is_newline = false;
/* 000344 */ 				}
/* 000344 */ 			}
/* 000344 */ 		}
/* 000346 */ 		if (__t__ (!__t__ ((last_node_is_newline)))) {
/* 000347 */ 			__call__ (_flush_last_equation_line_labels_infos, null);
/* 000347 */ 		}
/* 000351 */ 		var __iterable0__ = __call__ (enumerate, null, node.flm_equation_lines_labels_infos);
/* 000351 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000351 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000351 */ 			var linej = __left0__ [0];
/* 000351 */ 			var lineinfo = __left0__ [1];
/* 000353 */ 			if (__t__ (__t__ (__getitem__ (lineinfo, 'nonumber')) && (__t__ (__call__ (len, null, __getitem__ (lineinfo, 'labels'))) || __getitem__ (lineinfo, 'custom_tag_flm_text')))) {
/* 000354 */ 				var found_stuff_list = [];
/* 000355 */ 				if (__t__ (__call__ (len, null, __getitem__ (lineinfo, 'labels')))) {
/* 000356 */ 					var labels_text = (function () {
/* 000356 */ 						var __accu0__ = [];
/* 000356 */ 						var __iterable1__ = __getitem__ (lineinfo, 'labels');
/* 000356 */ 						for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000356 */ 							var lblinfo = __getitem__ (__iterable1__, __index1__);
/* 000356 */ 							(function () {
/* 000356 */ 								var __accu1__ = __accu0__;
/* 000356 */ 								return __call__ (__accu1__.append, __accu1__, __getitem__ (lblinfo, 'label'));
/* 000356 */ 							}) ();
/* 000356 */ 						}
/* 000356 */ 						return __accu0__;
/* 000356 */ 					}) ();
/* 000357 */ 					var labels_text_joined = (function () {
/* 000357 */ 						var __accu0__ = ', ';
/* 000357 */ 						return __call__ (__accu0__.join, __accu0__, (function () {
/* 000357 */ 							var __accu1__ = [];
/* 000357 */ 							var __iterable1__ = labels_text;
/* 000357 */ 							for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000357 */ 								var ln = __getitem__ (__iterable1__, __index1__);
/* 000357 */ 								(function () {
/* 000357 */ 									var __accu2__ = __accu1__;
/* 000357 */ 									return __call__ (__accu2__.append, __accu2__, __add__ (__add__ ('‘', ln), '’'));
/* 000357 */ 								}) ();
/* 000357 */ 							}
/* 000357 */ 							return __accu1__;
/* 000357 */ 						}) ());
/* 000357 */ 					}) ();
/* 000358 */ 					(function () {
/* 000358 */ 						var __accu0__ = found_stuff_list;
/* 000358 */ 						return __call__ (__accu0__.append, __accu0__, '\\label label(s) {}'.format (labels_text_joined));
/* 000358 */ 					}) ();
/* 000358 */ 				}
/* 000361 */ 				if (__t__ (__getitem__ (lineinfo, 'custom_tag_flm_text'))) {
/* 000362 */ 					(function () {
/* 000362 */ 						var __accu0__ = found_stuff_list;
/* 000362 */ 						return __call__ (__accu0__.append, __accu0__, 'custom \\tag “{}”'.format (__getitem__ (lineinfo, 'custom_tag_flm_text')));
/* 000362 */ 					}) ();
/* 000362 */ 				}
/* 000365 */ 				var found_stuff = (function () {
/* 000365 */ 					var __accu0__ = ' and ';
/* 000365 */ 					return __call__ (__accu0__.join, __accu0__, found_stuff_list);
/* 000365 */ 				}) ();
/* 000366 */ 				var __except0__ = __call__ (LatexWalkerParseError, null, "You can't have \\nonumber and \\label/\\tag on the same equation line, found {}".format (found_stuff), __kwargtrans__ ({pos: (__t__ (__getitem__ (lineinfo, 'newline_node')) || node).pos}));
/* 000366 */ 				__except0__.__cause__ = null;
/* 000366 */ 				throw __except0__;
/* 000366 */ 			}
/* 000366 */ 		}
/* 000372 */ 		return node;
/* 000372 */ 	});},
/* 000375 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000375 */ 		if (arguments.length) {
/* 000375 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000375 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000375 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000375 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000375 */ 					switch (__attrib0__) {
/* 000375 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000375 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000375 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000375 */ 					}
/* 000375 */ 				}
/* 000375 */ 			}
/* 000375 */ 		}
/* 000375 */ 		else {
/* 000375 */ 		}
/* 000378 */ 		var environmentname = node.environmentname;
/* 000380 */ 		if (__t__ (!__t__ (((function () {
/* 000380 */ 			var __accu0__ = render_context;
/* 000380 */ 			return __call__ (__accu0__.supports_feature, __accu0__, 'math');
/* 000380 */ 		}) ())))) {
/* 000381 */ 			var __except0__ = __call__ (ValueError, null, "Feature 'math' is not enabled, cannot render math environment");
/* 000381 */ 			__except0__.__cause__ = null;
/* 000381 */ 			throw __except0__;
/* 000381 */ 		}
/* 000383 */ 		var math_mgr = (function () {
/* 000383 */ 			var __accu0__ = render_context;
/* 000383 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'math');
/* 000383 */ 		}) ();
/* 000385 */ 		var refs_mgr = null;
/* 000386 */ 		if (__t__ ((function () {
/* 000386 */ 			var __accu0__ = render_context;
/* 000386 */ 			return __call__ (__accu0__.supports_feature, __accu0__, 'refs');
/* 000386 */ 		}) ())) {
/* 000387 */ 			var refs_mgr = (function () {
/* 000387 */ 				var __accu0__ = render_context;
/* 000387 */ 				return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000387 */ 			}) ();
/* 000387 */ 		}
/* 000390 */ 		var nodelist = __call__ (list, null, node.nodelist);
/* 000392 */ 		var target_id = null;
/* 000394 */ 		var lineno = 0;
/* 000395 */ 		var __iterable0__ = node.flm_equation_lines_labels_infos;
/* 000395 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000395 */ 			var line_infos = __getitem__ (__iterable0__, __index0__);
/* 000397 */ 			var nonumber = __getitem__ (line_infos, 'nonumber');
/* 000399 */ 			if (__t__ (nonumber)) {
/* 000399 */ 				continue;
/* 000399 */ 			}
/* 000402 */ 			var custom_tag_flm_text = __getitem__ (line_infos, 'custom_tag_flm_text');
/* 000406 */ 			var __left0__ = (function () {
/* 000406 */ 				var __accu0__ = math_mgr;
/* 000406 */ 				return __call__ (__accu0__.new_numbered_display_math, __accu0__, node, lineno, custom_tag_flm_text);
/* 000406 */ 			}) ();
/* 000406 */ 			var eq_id = __left0__ [0];
/* 000406 */ 			var formatted_ref_flm_text = __left0__ [1];
/* 000406 */ 			var eq_counter_number = __left0__ [2];
/* 000408 */ 			var this_target_id = 'equation-{}'.format (eq_id);
/* 000409 */ 			if (__t__ (target_id === null)) {
/* 000411 */ 				var target_id = this_target_id;
/* 000411 */ 			}
/* 000413 */ 			if (__t__ (!__t__ ((custom_tag_flm_text)))) {
/* 000416 */ 				var newline_node = __getitem__ (line_infos, 'newline_node');
/* 000417 */ 				if (__t__ (newline_node !== null)) {
/* 000418 */ 					var i = (function () {
/* 000418 */ 						var __accu0__ = nodelist;
/* 000418 */ 						return __call__ (__accu0__.index, __accu0__, newline_node);
/* 000418 */ 					}) ();
/* 000418 */ 				}
/* 000419 */ 				else {
/* 000420 */ 					var i = __call__ (len, null, nodelist);
/* 000420 */ 				}
/* 000421 */ 				(function () {
/* 000421 */ 					var __accu0__ = nodelist;
/* 000424 */ 					return __call__ (__accu0__.insert, __accu0__, i, __call__ (_ProxyNodeWithRecomposedLatex, null, __add__ (__add__ ('\\tag*{', formatted_ref_flm_text), '}')));
/* 000424 */ 				}) ();
/* 000424 */ 			}
/* 000431 */ 			var this_target_id = target_id;
/* 000434 */ 			if (__t__ (__t__ (refs_mgr !== null) && render_context.is_first_pass)) {
/* 000435 */ 				var __iterable1__ = __getitem__ (line_infos, 'labels');
/* 000435 */ 				for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000435 */ 					var label_info = __getitem__ (__iterable1__, __index1__);
/* 000436 */ 					var __left0__ = __getitem__ (label_info, 'label');
/* 000436 */ 					var ref_type = __left0__ [0];
/* 000436 */ 					var ref_label = __left0__ [1];
/* 000437 */ 					var counter_formatter_id = math_mgr.feature.counter_formatter.counter_formatter_id;
/* 000439 */ 					(function () {
/* 000439 */ 						var __accu0__ = refs_mgr;
/* 000439 */ 						return __call__ (__accu0__.register_reference, __accu0__, ref_type, ref_label, __kwargtrans__ ({node: node, formatted_ref_flm_text: formatted_ref_flm_text, target_href: '#{}'.format (this_target_id), counter_value: eq_counter_number, counter_formatter_id: counter_formatter_id}));
/* 000439 */ 					}) ();
/* 000439 */ 				}
/* 000439 */ 			}
/* 000447 */ 			var lineno = __call__ (__iadd__, null, lineno, 1);
/* 000447 */ 		}
/* 000450 */ 		return (function () {
/* 000450 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000452 */ 			return __call__ (__accu0__.render_math_content, __accu0__, tuple (['', '']), (function () {
/* 000452 */ 				var __accu1__ = latexnodes_nodes;
/* 000452 */ 				return __call__ (__accu1__.LatexNodeList, __accu1__, nodelist);
/* 000452 */ 			}) (), render_context, 'display', __kwargtrans__ ({environmentname: environmentname, target_id: target_id}));
/* 000452 */ 		}) ();
/* 000452 */ 	});},
/* 000460 */ 	get recompose_pure_latex () {return __get__ (this, function (self, node, recomposer) {
/* 000460 */ 		if (arguments.length) {
/* 000460 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000460 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000460 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000460 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000460 */ 					switch (__attrib0__) {
/* 000460 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000460 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000460 */ 						case 'recomposer': var recomposer = __allkwargs0__ [__attrib0__]; break;
/* 000460 */ 					}
/* 000460 */ 				}
/* 000460 */ 			}
/* 000460 */ 		}
/* 000460 */ 		else {
/* 000460 */ 		}
/* 000464 */ 		var s = __add__ (__add__ ('\\begin{', node.environmentname), '}');
/* 000465 */ 		var s = __call__ (__iadd__, null, s, (function () {
/* 000465 */ 			var __accu0__ = recomposer;
/* 000465 */ 			return __call__ (__accu0__.descend_into_parsed_arguments, __accu0__, node.nodeargd);
/* 000465 */ 		}) ());
/* 000468 */ 		var s_lines = [];
/* 000469 */ 		var last_line_already_has_newline = false;
/* 000470 */ 		var __iterable0__ = node.flm_equation_lines_labels_infos;
/* 000470 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000470 */ 			var line_infos = __getitem__ (__iterable0__, __index0__);
/* 000472 */ 			var s_line = '';
/* 000474 */ 			var __iterable1__ = __getitem__ (line_infos, 'line_nodelist');
/* 000474 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000474 */ 				var n = __getitem__ (__iterable1__, __index1__);
/* 000475 */ 				var s_line = __call__ (__iadd__, null, s_line, (function () {
/* 000475 */ 					var __accu0__ = recomposer;
/* 000475 */ 					return __call__ (__accu0__.subrecompose, __accu0__, n);
/* 000475 */ 				}) ());
/* 000475 */ 			}
/* 000486 */ 			var edge_newlines_info = dict ({'initial': '', 'final': ''});
/* 000491 */ 			var _repl_newline = function (m) {
/* 000491 */ 				if (arguments.length) {
/* 000491 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000491 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000491 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000491 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000491 */ 							switch (__attrib0__) {
/* 000491 */ 								case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000491 */ 							}
/* 000491 */ 						}
/* 000491 */ 					}
/* 000491 */ 				}
/* 000491 */ 				else {
/* 000491 */ 				}
/* 000492 */ 				var nlindent = __add__ ('\n', (function () {
/* 000492 */ 					var __accu0__ = m;
/* 000492 */ 					return __call__ (__accu0__.group, __accu0__, 'indent');
/* 000492 */ 				}) ());
/* 000493 */ 				if (__t__ (__eq__ ((function () {
/* 000493 */ 					var __accu0__ = m;
/* 000493 */ 					return __call__ (__accu0__.start, __accu0__);
/* 000493 */ 				}) (), 0))) {
/* 000494 */ 					if (__t__ (last_line_already_has_newline)) {
/* 000495 */ 						__setitem__ (edge_newlines_info, 'initial', nlindent);
/* 000496 */ 						return '';
/* 000496 */ 					}
/* 000497 */ 					return nlindent;
/* 000497 */ 				}
/* 000498 */ 				if (__t__ (__eq__ ((function () {
/* 000498 */ 					var __accu0__ = m;
/* 000498 */ 					return __call__ (__accu0__.end, __accu0__);
/* 000498 */ 				}) (), __call__ (len, null, s_line)))) {
/* 000499 */ 					__setitem__ (edge_newlines_info, 'final', nlindent);
/* 000500 */ 					return '';
/* 000500 */ 				}
/* 000501 */ 				return nlindent;
/* 000501 */ 			};
/* 000510 */ 			var s_line = (function () {
/* 000510 */ 				var __accu0__ = _rx_newline_spaces;
/* 000510 */ 				return __call__ (__accu0__.sub, __accu0__, _repl_newline, s_line);
/* 000510 */ 			}) ();
/* 000521 */ 			if (__t__ (__getitem__ (line_infos, 'custom_tag_flm_text') !== null)) {
/* 000522 */ 				var s_line = __call__ (__iadd__, null, s_line, __add__ (__add__ ('\\tag*{', (function () {
/* 000522 */ 					var __accu0__ = recomposer;
/* 000522 */ 					return __call__ (__accu0__.subrecompose, __accu0__, __getitem__ (line_infos, 'custom_tag_flm_text'));
/* 000522 */ 				}) ()), '}'));
/* 000522 */ 			}
/* 000526 */ 			var __iterable1__ = __getitem__ (line_infos, 'labels');
/* 000526 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000526 */ 				var label_info = __getitem__ (__iterable1__, __index1__);
/* 000527 */ 				var __left0__ = __getitem__ (label_info, 'label');
/* 000527 */ 				var ref_type = __left0__ [0];
/* 000527 */ 				var ref_label = __left0__ [1];
/* 000528 */ 				var safe_label_info = (function () {
/* 000528 */ 					var __accu0__ = recomposer;
/* 000528 */ 					return __call__ (__accu0__.make_safe_label, __accu0__, 'ref', ref_type, ref_label, node.latex_walker.resource_info);
/* 000528 */ 				}) ();
/* 000531 */ 				var s_line = __call__ (__iadd__, null, s_line, __add__ (__add__ ('\\label{', __getitem__ (safe_label_info, 'safe_label')), '}'));
/* 000531 */ 			}
/* 000533 */ 			if (__t__ (__getitem__ (line_infos, 'nonumber'))) {
/* 000534 */ 				var s_line = __call__ (__iadd__, null, s_line, '\\nonumber ');
/* 000534 */ 			}
/* 000536 */ 			if (__t__ (__getitem__ (line_infos, 'newline_node'))) {
/* 000537 */ 				var s_line = __call__ (__iadd__, null, s_line, (function () {
/* 000537 */ 					var __accu0__ = recomposer;
/* 000537 */ 					return __call__ (__accu0__.subrecompose, __accu0__, __getitem__ (line_infos, 'newline_node'));
/* 000537 */ 				}) ());
/* 000537 */ 			}
/* 000544 */ 			var final_newlines = __getitem__ (edge_newlines_info, 'final');
/* 000545 */ 			var s_line = __call__ (__iadd__, null, s_line, final_newlines);
/* 000547 */ 			// pass;
/* 000551 */ 			(function () {
/* 000551 */ 				var __accu0__ = s_lines;
/* 000551 */ 				return __call__ (__accu0__.append, __accu0__, s_line);
/* 000551 */ 			}) ();
/* 000552 */ 			var last_line_already_has_newline = (__t__ (__call__ (len, null, final_newlines)) ? true : false);
/* 000552 */ 		}
/* 000554 */ 		var s = __call__ (__iadd__, null, s, (function () {
/* 000554 */ 			var __accu0__ = '';
/* 000554 */ 			return __call__ (__accu0__.join, __accu0__, s_lines);
/* 000554 */ 		}) ());
/* 000556 */ 		var s = __call__ (__iadd__, null, s, __add__ (__add__ ('\\end{', node.environmentname), '}'));
/* 000558 */ 		return s;
/* 000558 */ 	});}
/* 000558 */ });
/* 000561 */ export var _rx_newline_spaces = (function () {
/* 000561 */ 	var __accu0__ = re;
/* 000561 */ 	return __call__ (__accu0__.compile, __accu0__, '([ \\t]*?\\n)+(?P<indent>[ \\t]*)');
/* 000561 */ }) ();
/* 000565 */ export var MathEqrefMacro =  __class__ ('MathEqrefMacro', [FLMMacroSpecBase], {
/* 000565 */ 	__module__: __name__,
/* 000567 */ 	delayed_render: true,
/* 000569 */ 	allowed_in_standalone_mode: false,
/* 000574 */ 	get __init__ () {return __get__ (this, function (self, macroname, ref_type) {
/* 000574 */ 		if (typeof macroname == 'undefined' || (macroname != null && macroname.hasOwnProperty ("__kwargtrans__"))) {;
/* 000574 */ 			var macroname = 'eqref';
/* 000574 */ 		};
/* 000574 */ 		if (typeof ref_type == 'undefined' || (ref_type != null && ref_type.hasOwnProperty ("__kwargtrans__"))) {;
/* 000574 */ 			var ref_type = 'eq';
/* 000574 */ 		};
/* 000574 */ 		var kwargs = dict ();
/* 000574 */ 		if (arguments.length) {
/* 000574 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000574 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000574 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000574 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000574 */ 					switch (__attrib0__) {
/* 000574 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000574 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000574 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000574 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000574 */ 					}
/* 000574 */ 				}
/* 000574 */ 				delete kwargs.__kwargtrans__;
/* 000574 */ 			}
/* 000574 */ 		}
/* 000574 */ 		else {
/* 000574 */ 		}
/* 000579 */ 		__call__ (__call__ (__super__, null, MathEqrefMacro, '__init__'), null, self, __kwargtrans__ ({macroname: macroname, arguments_spec_list: [__call__ (FLMArgumentSpec, null, (function () {
/* 000579 */ 			var __accu0__ = latexnodes_parsers;
/* 000579 */ 			return __call__ (__accu0__.LatexCharsGroupParser, __accu0__);
/* 000579 */ 		}) (), __kwargtrans__ ({argname: 'ref_label', flm_doc: __add__ (__add__ ('Equation label.  Must begin with the prefix ‘\\verbtext+', ref_type), ':+’')}))]}));
/* 000586 */ 		self.ref_type = ref_type;
/* 000586 */ 	});},
/* 000588 */ 	_fields: tuple (['macroname', 'ref_type']),
/* 000590 */ 	get get_flm_doc () {return __get__ (this, function (self) {
/* 000590 */ 		if (arguments.length) {
/* 000590 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000590 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000590 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000590 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000590 */ 					switch (__attrib0__) {
/* 000590 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000590 */ 					}
/* 000590 */ 				}
/* 000590 */ 			}
/* 000590 */ 		}
/* 000590 */ 		else {
/* 000590 */ 		}
/* 000591 */ 		return __add__ (__add__ ('Refer to an equation by its label.  The argument must be\n            a valid equation label which starts with \\verbcode+', self.ref_type), ':+.  You can place labels in display equations using the\n            \\verbcode+\\label{…}+ macro.');
/* 000591 */ 	});},
/* 000598 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000598 */ 		if (arguments.length) {
/* 000598 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000598 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000598 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000598 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000598 */ 					switch (__attrib0__) {
/* 000598 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000598 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000598 */ 					}
/* 000598 */ 				}
/* 000598 */ 			}
/* 000598 */ 		}
/* 000598 */ 		else {
/* 000598 */ 		}
/* 000600 */ 		var node_args = (function () {
/* 000600 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000600 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['ref_label']));
/* 000600 */ 		}) ();
/* 000604 */ 		var ref_type = null;
/* 000605 */ 		var ref_label = (function () {
/* 000605 */ 			var __accu0__ = __getitem__ (node_args, 'ref_label');
/* 000605 */ 			return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000605 */ 		}) ();
/* 000606 */ 		if (__t__ (__in__ (':', ref_label))) {
/* 000607 */ 			var __left0__ = (function () {
/* 000607 */ 				var __accu0__ = ref_label;
/* 000607 */ 				return __call__ (__accu0__.py_split, __accu0__, ':', 1);
/* 000607 */ 			}) ();
/* 000607 */ 			var ref_type = __left0__ [0];
/* 000607 */ 			var ref_label = __left0__ [1];
/* 000607 */ 		}
/* 000609 */ 		if (__t__ (__ne__ (ref_type, self.ref_type))) {
/* 000610 */ 			var __except0__ = __call__ (LatexWalkerLocatedError, null, 'Equation labels must begin with “{}:” (error in ‘\\{}’)'.format (self.ref_type, node.macroname), __kwargtrans__ ({pos: node.pos}));
/* 000610 */ 			__except0__.__cause__ = null;
/* 000610 */ 			throw __except0__;
/* 000610 */ 		}
/* 000616 */ 		node.flmarg_ref = tuple ([ref_type, ref_label]);
/* 000617 */ 		node.flm_ref_info = dict ({'ref_list': [node.flmarg_ref], 'display_content_nodelist': null});
/* 000617 */ 	});},
/* 000623 */ 	get prepare_delayed_render () {return __get__ (this, function (self, node, render_context) {
/* 000623 */ 		if (arguments.length) {
/* 000623 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000623 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000623 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000623 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000623 */ 					switch (__attrib0__) {
/* 000623 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000623 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000623 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000623 */ 					}
/* 000623 */ 				}
/* 000623 */ 			}
/* 000623 */ 		}
/* 000623 */ 		else {
/* 000623 */ 		}
/* 000624 */ 		// pass;
/* 000624 */ 	});},
/* 000626 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000626 */ 		if (arguments.length) {
/* 000626 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000626 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000626 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000626 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000626 */ 					switch (__attrib0__) {
/* 000626 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000626 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000626 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000626 */ 					}
/* 000626 */ 				}
/* 000626 */ 			}
/* 000626 */ 		}
/* 000626 */ 		else {
/* 000626 */ 		}
/* 000628 */ 		var __left0__ = node.flmarg_ref;
/* 000628 */ 		var ref_type = __left0__ [0];
/* 000628 */ 		var ref_label = __left0__ [1];
/* 000630 */ 		var refs_mgr = (function () {
/* 000630 */ 			var __accu0__ = render_context;
/* 000630 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000630 */ 		}) ();
/* 000632 */ 		var resource_info = node.latex_walker.resource_info;
/* 000634 */ 		try {
/* 000635 */ 			return (function () {
/* 000635 */ 				var __accu0__ = refs_mgr;
/* 000635 */ 				return __call__ (__accu0__.render_ref, __accu0__, ref_type, ref_label, null, resource_info, __kwargtrans__ ({counter_with_prefix: false}));
/* 000635 */ 			}) ();
/* 000635 */ 		}
/* 000635 */ 		catch (__except0__) {
/* 000635 */ 			if (isinstance (__except0__, Exception)) {
/* 000635 */ 				var e = __except0__;
/* 000642 */ 				(function () {
/* 000642 */ 					var __accu0__ = logger;
/* 000643 */ 					return __call__ (__accu0__.error, __accu0__, 'Failed to resolve reference to ‘{}:{}’: {} in ‘{}’ @ {}'.format (ref_type, ref_label, e, (function () {
/* 000643 */ 						var __accu1__ = node;
/* 000643 */ 						return __call__ (__accu1__.latex_verbatim, __accu1__);
/* 000643 */ 					}) (), (function () {
/* 000643 */ 						var __accu1__ = node;
/* 000643 */ 						return __call__ (__accu1__.format_pos, __accu1__);
/* 000643 */ 					}) ()));
/* 000643 */ 				}) ();
/* 000644 */ 				var __except1__ = __call__ (LatexWalkerLocatedError, null, 'Unable to resolve reference to ‘{}:{}’. {}'.format (ref_type, ref_label, e), __kwargtrans__ ({pos: node.pos}));
/* 000644 */ 				__except1__.__cause__ = null;
/* 000644 */ 				throw __except1__;
/* 000644 */ 			}
/* 000644 */ 			else {
/* 000644 */ 				throw __except0__;
/* 000644 */ 			}
/* 000644 */ 		}
/* 000644 */ 	});},
/* 000649 */ 	get recompose_pure_latex () {return __get__ (this, function (self, node, recomposer) {
/* 000649 */ 		if (arguments.length) {
/* 000649 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000649 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000649 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000649 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000649 */ 					switch (__attrib0__) {
/* 000649 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000649 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000649 */ 						case 'recomposer': var recomposer = __allkwargs0__ [__attrib0__]; break;
/* 000649 */ 					}
/* 000649 */ 				}
/* 000649 */ 			}
/* 000649 */ 		}
/* 000649 */ 		else {
/* 000649 */ 		}
/* 000651 */ 		var safe_label_info = (function () {
/* 000651 */ 			var __accu0__ = recomposer;
/* 000651 */ 			return __call__ (__accu0__.make_safe_label, __accu0__, 'ref', __getitem__ (node.flmarg_ref, 0), __getitem__ (node.flmarg_ref, 1), node.latex_walker.resource_info);
/* 000651 */ 		}) ();
/* 000655 */ 		return __add__ (__add__ ('\\eqref{', __getitem__ (safe_label_info, 'safe_label')), '}');
/* 000655 */ 	});}
/* 000655 */ });
/* 000660 */ export var FeatureClass = FeatureMath;
/* 000007 */ 
//# sourceMappingURL=flm.feature.math.map