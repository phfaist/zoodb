/* 000001 */ // Transcrypt'ed from Python, 2026-06-30 21:51:24
/* 000014 */ var logging = {};
/* 000014 */ var re = {};
/* 000014 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000039 */ import * as numbering from './flm.feature.numbering.js';
/* 000038 */ import {build_counter_formatter} from './flm.counter.js';
/* 000036 */ import {Feature} from './flm.feature._base.js';
/* 000034 */ import {Any, Mapping, Sequence, TypeCounterFormatterInput, TypeCounterFormatterSpecDict} from './flm._typing_helpers.js';
/* 000032 */ import {FLMArgumentSpec} from './flm.flmenvironment.js';
/* 000031 */ import {FLMEnvironmentSpecBase, FLMMacroSpecBase} from './flm.flmspecinfo.js';
/* 000025 */ import {LatexEnvironmentBodyContentsParser, MacroSpec, ParsingStateDeltaExtendLatexContextDb} from './pylatexenc.macrospec.js';
/* 000024 */ import * as latexnodes_parsers from './pylatexenc.latexnodes.parsers.js';
/* 000023 */ import * as latexnodes_nodes from './pylatexenc.latexnodes.nodes.js';
/* 000018 */ import {LatexWalkerLocatedError, ParsedArgumentsInfo, ParsingStateDeltaEnterMathMode} from './pylatexenc.latexnodes.js';
/* 000015 */ import * as __module_logging__ from './logging.js';
/* 000015 */ __nest__ (logging, '', __module_logging__);
/* 000014 */ import * as __module_re__ from './re.js';
/* 000014 */ __nest__ (re, '', __module_re__);
/* 000014 */ export {Feature, latexnodes_parsers, TypeCounterFormatterSpecDict, ParsingStateDeltaEnterMathMode, TypeCounterFormatterInput, Mapping, build_counter_formatter, LatexEnvironmentBodyContentsParser, MacroSpec, latexnodes_nodes, ParsedArgumentsInfo, FLMEnvironmentSpecBase, FLMArgumentSpec, Any, LatexWalkerLocatedError, ParsingStateDeltaExtendLatexContextDb, FLMMacroSpecBase, Sequence, numbering};
/* 000001 */ var __name__ = 'flm.feature.math';
/* 000016 */ export var logger = (function () {
/* 000016 */ 	var __accu0__ = logging;
/* 000016 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000016 */ }) ();
/* 000046 */ export var _default_math_environment_names = tuple (['equation', 'equation*', 'align', 'align*', 'gather', 'gather*']);
/* 000056 */ var eq_default_counter_formatter_spec = dict ({'format_num': dict ({'template': '${arabic}'}), 'prefix_display': dict ({'singular': 'Eq.~', 'plural': 'Eqs.~', 'capital': dict ({'singular': 'Equation~', 'plural': 'Equations~'})}), 'delimiters': tuple (['(', ')']), 'join_spec': 'compact'});
/* 000071 */ export var FeatureMath =  __class__ ('FeatureMath', [Feature], {
/* 000071 */ 	__module__: __name__,
/* 000081 */ 	feature_name: 'math',
/* 000082 */ 	feature_title: 'Mathematical typesetting: equations and equation references',
/* 000084 */ 	get feature_flm_doc () {return __get__ (this, function (self) {
/* 000084 */ 		if (arguments.length) {
/* 000084 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000084 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000084 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000084 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000084 */ 					switch (__attrib0__) {
/* 000084 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000084 */ 					}
/* 000084 */ 				}
/* 000084 */ 			}
/* 000084 */ 		}
/* 000084 */ 		else {
/* 000084 */ 		}
/* 000085 */ 		return __add__ (__add__ ('\n            You can use the following environments and macros to typeset pretty display\n            math equations, create labels, and refer to them at other places in your\n            document.\n\n            Note that all equation labels must begin with the prefix \\verbcode{', self.eqref_ref_type), ':}.');
/* 000085 */ 	});},
/* 000095 */ 	feature_optional_dependencies: ['refs', 'numbering'],
/* 000097 */ 	feature_default_config: dict ({'counter_formatter': eq_default_counter_formatter_spec}),
/* 000101 */ 	get __init__ () {return __get__ (this, function (self, counter_formatter, math_environment_names, eqref_macro_name, eqref_ref_type) {
/* 000101 */ 		if (typeof counter_formatter == 'undefined' || (counter_formatter != null && counter_formatter.hasOwnProperty ("__kwargtrans__"))) {;
/* 000101 */ 			var counter_formatter = null;
/* 000101 */ 		};
/* 000101 */ 		if (typeof math_environment_names == 'undefined' || (math_environment_names != null && math_environment_names.hasOwnProperty ("__kwargtrans__"))) {;
/* 000101 */ 			var math_environment_names = null;
/* 000101 */ 		};
/* 000101 */ 		if (typeof eqref_macro_name == 'undefined' || (eqref_macro_name != null && eqref_macro_name.hasOwnProperty ("__kwargtrans__"))) {;
/* 000101 */ 			var eqref_macro_name = 'eqref';
/* 000101 */ 		};
/* 000101 */ 		if (typeof eqref_ref_type == 'undefined' || (eqref_ref_type != null && eqref_ref_type.hasOwnProperty ("__kwargtrans__"))) {;
/* 000101 */ 			var eqref_ref_type = 'eq';
/* 000101 */ 		};
/* 000101 */ 		if (arguments.length) {
/* 000101 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000101 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000101 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000101 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000101 */ 					switch (__attrib0__) {
/* 000101 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000101 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000101 */ 						case 'math_environment_names': var math_environment_names = __allkwargs0__ [__attrib0__]; break;
/* 000101 */ 						case 'eqref_macro_name': var eqref_macro_name = __allkwargs0__ [__attrib0__]; break;
/* 000101 */ 						case 'eqref_ref_type': var eqref_ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000101 */ 					}
/* 000101 */ 				}
/* 000101 */ 			}
/* 000101 */ 		}
/* 000101 */ 		else {
/* 000101 */ 		}
/* 000124 */ 		__call__ (__call__ (__super__, null, FeatureMath, '__init__'), null, self);
/* 000126 */ 		if (__t__ (counter_formatter === null)) {
/* 000127 */ 			var counter_formatter = __getitem__ (self.feature_default_config, 'counter_formatter');
/* 000127 */ 		}
/* 000128 */ 		self.counter_formatter = __call__ (build_counter_formatter, null, counter_formatter, eq_default_counter_formatter_spec, __kwargtrans__ ({counter_formatter_id: 'eq'}));
/* 000134 */ 		if (__t__ (math_environment_names === null)) {
/* 000135 */ 			var math_environment_names = _default_math_environment_names;
/* 000135 */ 		}
/* 000136 */ 		self.math_environment_names = math_environment_names;
/* 000138 */ 		self.eqref_macro_name = eqref_macro_name;
/* 000139 */ 		self.eqref_ref_type = eqref_ref_type;
/* 000141 */ 	});},
/* 000141 */ 	DocumentManager: __class__ ('DocumentManager', [Feature.DocumentManager], {
/* 000141 */ 		__module__: __name__,
/* 000142 */ 		get initialize () {return __get__ (this, function (self) {
/* 000142 */ 			if (arguments.length) {
/* 000142 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000142 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000142 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000142 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000142 */ 						switch (__attrib0__) {
/* 000142 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000142 */ 						}
/* 000142 */ 					}
/* 000142 */ 				}
/* 000142 */ 			}
/* 000142 */ 			else {
/* 000142 */ 			}
/* 000143 */ 			// pass;
/* 000143 */ 		});}
/* 000145 */ 	}),
/* 000145 */ 	RenderManager: __class__ ('RenderManager', [Feature.RenderManager], {
/* 000145 */ 		__module__: __name__,
/* 000146 */ 		get initialize () {return __get__ (this, function (self, counter_formatter) {
/* 000146 */ 			if (typeof counter_formatter == 'undefined' || (counter_formatter != null && counter_formatter.hasOwnProperty ("__kwargtrans__"))) {;
/* 000146 */ 				var counter_formatter = null;
/* 000146 */ 			};
/* 000146 */ 			if (arguments.length) {
/* 000146 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000146 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000146 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000146 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000146 */ 						switch (__attrib0__) {
/* 000146 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000146 */ 							case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000146 */ 						}
/* 000146 */ 					}
/* 000146 */ 				}
/* 000146 */ 			}
/* 000146 */ 			else {
/* 000146 */ 			}
/* 000148 */ 			if (__t__ (counter_formatter !== null)) {
/* 000149 */ 				self.counter_formatter = __call__ (build_counter_formatter, null, counter_formatter, eq_default_counter_formatter_spec, __kwargtrans__ ({counter_formatter_id: 'eq'}));
/* 000149 */ 			}
/* 000153 */ 			else {
/* 000155 */ 				self.counter_formatter = self.feature.counter_formatter;
/* 000155 */ 			}
/* 000157 */ 			self.equation_counter_iface = (function () {
/* 000157 */ 				var __accu0__ = numbering;
/* 000157 */ 				return __call__ (__accu0__.get_document_render_counter, __accu0__, self.render_context, 'equation', self.counter_formatter);
/* 000157 */ 			}) ();
/* 000161 */ 			self.equation_info_by_node = dict ({});
/* 000163 */ 			if (__t__ ((function () {
/* 000163 */ 				var __accu0__ = self.render_context;
/* 000163 */ 				return __call__ (__accu0__.supports_feature, __accu0__, 'refs');
/* 000163 */ 			}) ())) {
/* 000164 */ 				var refs_mgr = (function () {
/* 000164 */ 					var __accu0__ = self.render_context;
/* 000164 */ 					return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000164 */ 				}) ();
/* 000165 */ 				(function () {
/* 000165 */ 					var __accu0__ = refs_mgr;
/* 000165 */ 					return __call__ (__accu0__.register_counter_formatter, __accu0__, __kwargtrans__ ({counter_formatter: self.counter_formatter}));
/* 000165 */ 				}) ();
/* 000165 */ 			}
/* 000165 */ 		});},
/* 000169 */ 		get new_numbered_display_math () {return __get__ (this, function (self, node, lineno, custom_tag_flm_text) {
/* 000169 */ 			if (typeof custom_tag_flm_text == 'undefined' || (custom_tag_flm_text != null && custom_tag_flm_text.hasOwnProperty ("__kwargtrans__"))) {;
/* 000169 */ 				var custom_tag_flm_text = null;
/* 000169 */ 			};
/* 000169 */ 			if (arguments.length) {
/* 000169 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000169 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000169 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000169 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000169 */ 						switch (__attrib0__) {
/* 000169 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000169 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000169 */ 							case 'lineno': var lineno = __allkwargs0__ [__attrib0__]; break;
/* 000169 */ 							case 'custom_tag_flm_text': var custom_tag_flm_text = __allkwargs0__ [__attrib0__]; break;
/* 000169 */ 						}
/* 000169 */ 					}
/* 000169 */ 				}
/* 000169 */ 			}
/* 000169 */ 			else {
/* 000169 */ 			}
/* 000171 */ 			var key = tuple ([(function () {
/* 000171 */ 				var __accu0__ = self;
/* 000171 */ 				return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000171 */ 			}) (), lineno]);
/* 000172 */ 			if (__t__ (__in__ (key, self.equation_info_by_node))) {
/* 000173 */ 				return __getitem__ (self.equation_info_by_node, key);
/* 000173 */ 			}
/* 000175 */ 			if (__t__ (custom_tag_flm_text !== null)) {
/* 000176 */ 				var formatted_ref_flm_text = custom_tag_flm_text;
/* 000177 */ 				var eq_id = '_{}'.format (__getitem__ (key, 0));
/* 000178 */ 				if (__t__ (lineno)) {
/* 000179 */ 					var eq_id = __call__ (__iadd__, null, eq_id, '-{}'.format (lineno));
/* 000179 */ 				}
/* 000180 */ 				var eq_counter_value = null;
/* 000181 */ 				var eq_counter_numprefix = null;
/* 000181 */ 			}
/* 000182 */ 			else {
/* 000183 */ 				var eq_info = (function () {
/* 000183 */ 					var __accu0__ = self.equation_counter_iface;
/* 000183 */ 					return __call__ (__accu0__.register_item, __accu0__);
/* 000183 */ 				}) ();
/* 000184 */ 				var eq_counter_value = __getitem__ (eq_info, 'value');
/* 000185 */ 				var eq_counter_numprefix = __getitem__ (eq_info, 'numprefix');
/* 000186 */ 				var formatted_ref_flm_text = __getitem__ (eq_info, 'formatted_value');
/* 000187 */ 				var eq_id = (function () {
/* 000187 */ 					var __accu0__ = eq_counter_value;
/* 000187 */ 					return __call__ (__accu0__.targetidstr, __accu0__, __kwargtrans__ ({numprefix: eq_counter_numprefix}));
/* 000187 */ 				}) ();
/* 000187 */ 			}
/* 000189 */ 			var info = tuple ([eq_id, formatted_ref_flm_text, eq_counter_numprefix, eq_counter_value]);
/* 000190 */ 			__setitem__ (self.equation_info_by_node, key, info);
/* 000191 */ 			return info;
/* 000191 */ 		});}
/* 000191 */ 	}),
/* 000194 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000194 */ 		if (arguments.length) {
/* 000194 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000194 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000194 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000194 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000194 */ 					switch (__attrib0__) {
/* 000194 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000194 */ 					}
/* 000194 */ 				}
/* 000194 */ 			}
/* 000194 */ 		}
/* 000194 */ 		else {
/* 000194 */ 		}
/* 000195 */ 		var environments = (function () {
/* 000195 */ 			var __accu0__ = [];
/* 000195 */ 			var __iterable0__ = self.math_environment_names;
/* 000195 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000199 */ 				var math_environment_name = __getitem__ (__iterable0__, __index0__);
/* 000199 */ 				(function () {
/* 000199 */ 					var __accu1__ = __accu0__;
/* 000196 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (MathEnvironment, null, math_environment_name));
/* 000196 */ 				}) ();
/* 000196 */ 			}
/* 000196 */ 			return __accu0__;
/* 000196 */ 		}) ();
/* 000201 */ 		var macros = [];
/* 000202 */ 		if (__t__ (self.eqref_macro_name !== null)) {
/* 000203 */ 			(function () {
/* 000203 */ 				var __accu0__ = macros;
/* 000204 */ 				return __call__ (__accu0__.append, __accu0__, __call__ (MathEqrefMacro, null, __kwargtrans__ ({macroname: self.eqref_macro_name, ref_type: self.eqref_ref_type})));
/* 000204 */ 			}) ();
/* 000204 */ 		}
/* 000210 */ 		return __call__ (dict, null, __kwargtrans__ ({macros: macros, environments: environments}));
/* 000210 */ 	});}
/* 000210 */ });
/* 000216 */ export var _EmptyClass =  __class__ ('_EmptyClass', [object], {
/* 000216 */ 	__module__: __name__,
/* 000216 */ });
/* 000219 */ export var _ProxyNodeWithRecomposedLatex =  __class__ ('_ProxyNodeWithRecomposedLatex', [object], {
/* 000219 */ 	__module__: __name__,
/* 000221 */ 	pos: null,
/* 000222 */ 	pos_end: null,
/* 000224 */ 	get __init__ () {return __get__ (this, function (self, verbatim) {
/* 000224 */ 		if (arguments.length) {
/* 000224 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000224 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000224 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000224 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000224 */ 					switch (__attrib0__) {
/* 000224 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000224 */ 						case 'verbatim': var verbatim = __allkwargs0__ [__attrib0__]; break;
/* 000224 */ 					}
/* 000224 */ 				}
/* 000224 */ 			}
/* 000224 */ 		}
/* 000224 */ 		else {
/* 000224 */ 		}
/* 000225 */ 		self._verbatim = verbatim;
/* 000228 */ 		self.flm_specinfo = __call__ (_EmptyClass, null);
/* 000229 */ 		self.flm_specinfo.recompose_flm_text = (function __lambda__ (node, recomposer) {
/* 000229 */ 			if (arguments.length) {
/* 000229 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000229 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000229 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000229 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000229 */ 						switch (__attrib0__) {
/* 000229 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000229 */ 							case 'recomposer': var recomposer = __allkwargs0__ [__attrib0__]; break;
/* 000229 */ 						}
/* 000229 */ 					}
/* 000229 */ 				}
/* 000229 */ 			}
/* 000229 */ 			else {
/* 000229 */ 			}
/* 000231 */ 			return (function () {
/* 000231 */ 				var __accu0__ = self;
/* 000231 */ 				return __call__ (__accu0__.recompose_flm_text, __accu0__, node, __kwargtrans__ ({recomposer: recomposer}));
/* 000231 */ 			}) ();
/* 000231 */ 		});
/* 000231 */ 	});},
/* 000233 */ 	get accept_node_visitor () {return __get__ (this, function (self, visitor) {
/* 000233 */ 		if (arguments.length) {
/* 000233 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000233 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000233 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000233 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000233 */ 					switch (__attrib0__) {
/* 000233 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000233 */ 						case 'visitor': var visitor = __allkwargs0__ [__attrib0__]; break;
/* 000233 */ 					}
/* 000233 */ 				}
/* 000233 */ 			}
/* 000233 */ 		}
/* 000233 */ 		else {
/* 000233 */ 		}
/* 000234 */ 		return (function () {
/* 000234 */ 			var __accu0__ = visitor;
/* 000234 */ 			return __call__ (__accu0__.visit_unknown_node, __accu0__, self);
/* 000234 */ 		}) ();
/* 000234 */ 	});},
/* 000236 */ 	get recompose_flm_text () {return __get__ (this, function (self, node, recomposer) {
/* 000236 */ 		if (arguments.length) {
/* 000236 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000236 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000236 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000236 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000236 */ 					switch (__attrib0__) {
/* 000236 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000236 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000236 */ 						case 'recomposer': var recomposer = __allkwargs0__ [__attrib0__]; break;
/* 000236 */ 					}
/* 000236 */ 				}
/* 000236 */ 			}
/* 000236 */ 		}
/* 000236 */ 		else {
/* 000236 */ 		}
/* 000237 */ 		return self._verbatim;
/* 000237 */ 	});},
/* 000239 */ 	get latex_verbatim () {return __get__ (this, function (self) {
/* 000239 */ 		if (arguments.length) {
/* 000239 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000239 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000239 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000239 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000239 */ 					switch (__attrib0__) {
/* 000239 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000239 */ 					}
/* 000239 */ 				}
/* 000239 */ 			}
/* 000239 */ 		}
/* 000239 */ 		else {
/* 000239 */ 		}
/* 000240 */ 		return self._verbatim;
/* 000240 */ 	});}
/* 000240 */ });
/* 000244 */ export var MathEnvironment =  __class__ ('MathEnvironment', [FLMEnvironmentSpecBase], {
/* 000244 */ 	__module__: __name__,
/* 000257 */ 	get get_flm_doc () {return __get__ (this, function (self) {
/* 000257 */ 		if (arguments.length) {
/* 000257 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000257 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000257 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000257 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000257 */ 					switch (__attrib0__) {
/* 000257 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000257 */ 					}
/* 000257 */ 				}
/* 000257 */ 			}
/* 000257 */ 		}
/* 000257 */ 		else {
/* 000257 */ 		}
/* 000258 */ 		return 'Display equation typeset as the corresponding LaTeX environment.';
/* 000258 */ 	});},
/* 000260 */ 	get __init__ () {return __get__ (this, function (self, environmentname, is_numbered) {
/* 000260 */ 		if (typeof is_numbered == 'undefined' || (is_numbered != null && is_numbered.hasOwnProperty ("__kwargtrans__"))) {;
/* 000260 */ 			var is_numbered = null;
/* 000260 */ 		};
/* 000260 */ 		if (arguments.length) {
/* 000260 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000260 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000260 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000260 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000260 */ 					switch (__attrib0__) {
/* 000260 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000260 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000260 */ 						case 'is_numbered': var is_numbered = __allkwargs0__ [__attrib0__]; break;
/* 000260 */ 					}
/* 000260 */ 				}
/* 000260 */ 			}
/* 000260 */ 		}
/* 000260 */ 		else {
/* 000260 */ 		}
/* 000268 */ 		__call__ (__call__ (__super__, null, MathEnvironment, '__init__'), null, self, __kwargtrans__ ({environmentname: environmentname}));
/* 000271 */ 		if (__t__ (is_numbered !== null)) {
/* 000272 */ 			self.is_numbered = is_numbered;
/* 000272 */ 		}
/* 000273 */ 		else {
/* 000274 */ 			self.is_numbered = __ne__ (__getslice__ (environmentname, __neg__ (1), null, 1), '*');
/* 000274 */ 		}
/* 000276 */ 		if (__t__ (!__t__ ((self.is_numbered)))) {
/* 000278 */ 			self.allowed_in_standalone_mode = true;
/* 000278 */ 		}
/* 000278 */ 	});},
/* 000280 */ 	_fields: tuple (['environmentname', 'is_numbered']),
/* 000282 */ 	get make_body_parsing_state_delta () {return __get__ (this, function (self, token, nodeargd, arg_parsing_state_delta, latex_walker) {
/* 000282 */ 		var kwargs = dict ();
/* 000282 */ 		if (arguments.length) {
/* 000282 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000282 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000282 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000282 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000282 */ 					switch (__attrib0__) {
/* 000282 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000282 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000282 */ 						case 'nodeargd': var nodeargd = __allkwargs0__ [__attrib0__]; break;
/* 000282 */ 						case 'arg_parsing_state_delta': var arg_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000282 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000282 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000282 */ 					}
/* 000282 */ 				}
/* 000282 */ 				delete kwargs.__kwargtrans__;
/* 000282 */ 			}
/* 000282 */ 		}
/* 000282 */ 		else {
/* 000282 */ 		}
/* 000284 */ 		return __call__ (ParsingStateDeltaEnterMathMode, null);
/* 000284 */ 	});},
/* 000286 */ 	get make_body_parser () {return __get__ (this, function (self, token, nodeargd, arg_parsing_state_delta) {
/* 000286 */ 		if (arguments.length) {
/* 000286 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000286 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000286 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000286 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000286 */ 					switch (__attrib0__) {
/* 000286 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000286 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000286 */ 						case 'nodeargd': var nodeargd = __allkwargs0__ [__attrib0__]; break;
/* 000286 */ 						case 'arg_parsing_state_delta': var arg_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000286 */ 					}
/* 000286 */ 				}
/* 000286 */ 			}
/* 000286 */ 		}
/* 000286 */ 		else {
/* 000286 */ 		}
/* 000294 */ 		return __call__ (LatexEnvironmentBodyContentsParser, null, __kwargtrans__ ({environmentname: token.arg, contents_parsing_state_delta: __call__ (ParsingStateDeltaExtendLatexContextDb, null, __kwargtrans__ ({extend_latex_context: __call__ (dict, null, __kwargtrans__ ({macros: [__call__ (MacroSpec, null, 'label', __kwargtrans__ ({arguments_spec_list: [__call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: (function () {
/* 000294 */ 			var __accu0__ = latexnodes_parsers;
/* 000294 */ 			return __call__ (__accu0__.LatexCharsGroupParser, __accu0__, __kwargtrans__ ({delimiters: tuple (['{', '}'])}));
/* 000306 */ 		}) (), argname: 'label'}))]})), __call__ (MacroSpec, null, 'tag', __kwargtrans__ ({arguments_spec_list: [__call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: '*', argname: 'tag_star'})), __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: (function () {
/* 000306 */ 			var __accu0__ = latexnodes_parsers;
/* 000306 */ 			return __call__ (__accu0__.LatexCharsGroupParser, __accu0__, __kwargtrans__ ({delimiters: tuple (['{', '}'])}));
/* 000314 */ 		}) (), argname: 'text'}))]})), __call__ (MacroSpec, null, '\\', __kwargtrans__ ({arguments_spec_list: [__call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: (function () {
/* 000314 */ 			var __accu0__ = latexnodes_parsers;
/* 000314 */ 			return __call__ (__accu0__.LatexDelimitedGroupParser, __accu0__, __kwargtrans__ ({delimiters: tuple (['[', ']']), optional: true, allow_pre_space: false}));
/* 000314 */ 		}) (), argname: 'vertical_spacing'}))]}))]}))}))}));
/* 000314 */ 	});},
/* 000327 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000327 */ 		if (arguments.length) {
/* 000327 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000327 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000327 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000327 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000327 */ 					switch (__attrib0__) {
/* 000327 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000327 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000327 */ 					}
/* 000327 */ 				}
/* 000327 */ 			}
/* 000327 */ 		}
/* 000327 */ 		else {
/* 000327 */ 		}
/* 000333 */ 		node.flm_equation_lines_labels_infos = [];
/* 000338 */ 		var init_last_line_info = function () {
/* 000338 */ 			if (arguments.length) {
/* 000338 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000338 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000338 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000338 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000338 */ 					}
/* 000338 */ 				}
/* 000338 */ 			}
/* 000338 */ 			else {
/* 000338 */ 			}
/* 000339 */ 			return dict ({'labels_info': [], 'custom_tag_flm_text': null, 'nonumber': false, 'line_nodelist': []});
/* 000339 */ 		};
/* 000345 */ 		var last_line_info = __call__ (dict, null, __call__ (init_last_line_info, null));
/* 000346 */ 		var _flush_last_equation_line_labels_infos = function (newline_node) {
/* 000346 */ 			if (typeof newline_node == 'undefined' || (newline_node != null && newline_node.hasOwnProperty ("__kwargtrans__"))) {;
/* 000346 */ 				var newline_node = null;
/* 000346 */ 			};
/* 000346 */ 			if (arguments.length) {
/* 000346 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000346 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000346 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000346 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000346 */ 						switch (__attrib0__) {
/* 000346 */ 							case 'newline_node': var newline_node = __allkwargs0__ [__attrib0__]; break;
/* 000346 */ 						}
/* 000346 */ 					}
/* 000346 */ 				}
/* 000346 */ 			}
/* 000346 */ 			else {
/* 000346 */ 			}
/* 000347 */ 			(function () {
/* 000347 */ 				var __accu0__ = node.flm_equation_lines_labels_infos;
/* 000351 */ 				return __call__ (__accu0__.append, __accu0__, dict ({'labels': __call__ (list, null, __getitem__ (last_line_info, 'labels_info')), 'custom_tag_flm_text': __getitem__ (last_line_info, 'custom_tag_flm_text'), 'nonumber': __getitem__ (last_line_info, 'nonumber'), 'line_nodelist': __call__ (list, null, __getitem__ (last_line_info, 'line_nodelist')), 'newline_node': newline_node}));
/* 000351 */ 			}) ();
/* 000354 */ 			(function () {
/* 000354 */ 				var __accu0__ = last_line_info;
/* 000354 */ 				return __call__ (__accu0__.py_update, __accu0__, __call__ (init_last_line_info, null));
/* 000354 */ 			}) ();
/* 000354 */ 		};
/* 000356 */ 		var last_node_is_newline = false;
/* 000357 */ 		var __iterable0__ = node.nodelist;
/* 000357 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000357 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000358 */ 			if (__t__ (__t__ ((function () {
/* 000358 */ 				var __accu0__ = n;
/* 000358 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000358 */ 			}) ()) && __eq__ (n.macroname, 'label'))) {
/* 000363 */ 				var ref_label_node_args = (function () {
/* 000363 */ 					var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: n}));
/* 000363 */ 					return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['label']));
/* 000363 */ 				}) ();
/* 000366 */ 				var ref_label_full = (function () {
/* 000366 */ 					var __accu0__ = __getitem__ (ref_label_node_args, 'label');
/* 000366 */ 					return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000366 */ 				}) ();
/* 000368 */ 				if (__t__ (__in__ (':', ref_label_full))) {
/* 000369 */ 					var __left0__ = (function () {
/* 000369 */ 						var __accu0__ = ref_label_full;
/* 000369 */ 						return __call__ (__accu0__.py_split, __accu0__, ':', 1);
/* 000369 */ 					}) ();
/* 000369 */ 					var ref_type = __left0__ [0];
/* 000369 */ 					var ref_label = __left0__ [1];
/* 000369 */ 				}
/* 000370 */ 				else {
/* 000371 */ 					var __left0__ = tuple ([null, ref_label_full]);
/* 000371 */ 					var ref_type = __left0__ [0];
/* 000371 */ 					var ref_label = __left0__ [1];
/* 000371 */ 				}
/* 000373 */ 				var info = dict ({'node': n, 'label': tuple ([ref_type, ref_label])});
/* 000378 */ 				(function () {
/* 000378 */ 					var __accu0__ = __getitem__ (last_line_info, 'labels_info');
/* 000378 */ 					return __call__ (__accu0__.append, __accu0__, info);
/* 000378 */ 				}) ();
/* 000378 */ 			}
/* 000380 */ 			else if (__t__ (__t__ ((function () {
/* 000380 */ 				var __accu0__ = n;
/* 000380 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000380 */ 			}) ()) && __eq__ (n.macroname, 'tag'))) {
/* 000383 */ 				var tag_node_args = (function () {
/* 000383 */ 					var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: n}));
/* 000383 */ 					return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['tag_star', 'text']));
/* 000383 */ 				}) ();
/* 000388 */ 				var custom_tag_flm_text = (function () {
/* 000388 */ 					var __accu0__ = (function () {
/* 000388 */ 						var __accu1__ = __getitem__ (tag_node_args, 'text');
/* 000388 */ 						return __call__ (__accu1__.get_content_nodelist, __accu1__);
/* 000388 */ 					}) ();
/* 000388 */ 					return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000388 */ 				}) ();
/* 000389 */ 				if (__t__ (!__t__ (((function () {
/* 000389 */ 					var __accu0__ = __getitem__ (tag_node_args, 'tag_star');
/* 000389 */ 					return __call__ (__accu0__.was_provided, __accu0__);
/* 000389 */ 				}) ())))) {
/* 000390 */ 					var custom_tag_flm_text = '({})'.format (custom_tag_flm_text);
/* 000390 */ 				}
/* 000392 */ 				__setitem__ (last_line_info, 'custom_tag_flm_text', custom_tag_flm_text);
/* 000392 */ 			}
/* 000394 */ 			else if (__t__ (__t__ ((function () {
/* 000394 */ 				var __accu0__ = n;
/* 000394 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000394 */ 			}) ()) && __eq__ (n.macroname, 'nonumber'))) {
/* 000396 */ 				__setitem__ (last_line_info, 'nonumber', true);
/* 000396 */ 			}
/* 000398 */ 			else if (__t__ (__t__ ((function () {
/* 000398 */ 				var __accu0__ = n;
/* 000398 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000398 */ 			}) ()) && __eq__ (n.macroname, '\\'))) {
/* 000399 */ 				__call__ (_flush_last_equation_line_labels_infos, null, n);
/* 000400 */ 				var last_node_is_newline = true;
/* 000400 */ 			}
/* 000401 */ 			else {
/* 000403 */ 				(function () {
/* 000403 */ 					var __accu0__ = __getitem__ (last_line_info, 'line_nodelist');
/* 000403 */ 					return __call__ (__accu0__.append, __accu0__, n);
/* 000403 */ 				}) ();
/* 000405 */ 				if (__t__ (__t__ (!__t__ (((function () {
/* 000405 */ 					var __accu0__ = n;
/* 000405 */ 					return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCommentNode);
/* 000406 */ 				}) ()))) && !__t__ ((__t__ ((function () {
/* 000406 */ 					var __accu0__ = n;
/* 000406 */ 					return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000407 */ 				}) ()) && !__t__ (((function () {
/* 000407 */ 					var __accu0__ = n.chars;
/* 000407 */ 					return __call__ (__accu0__.strip, __accu0__);
/* 000407 */ 				}) ())))))) {
/* 000409 */ 					var last_node_is_newline = false;
/* 000409 */ 				}
/* 000409 */ 			}
/* 000409 */ 		}
/* 000411 */ 		if (__t__ (!__t__ ((last_node_is_newline)))) {
/* 000412 */ 			__call__ (_flush_last_equation_line_labels_infos, null);
/* 000412 */ 		}
/* 000416 */ 		var __iterable0__ = __call__ (enumerate, null, node.flm_equation_lines_labels_infos);
/* 000416 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000416 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000416 */ 			var linej = __left0__ [0];
/* 000416 */ 			var lineinfo = __left0__ [1];
/* 000418 */ 			if (__t__ (__t__ ((__t__ (!__t__ ((self.is_numbered))) || __getitem__ (lineinfo, 'nonumber'))) && (__t__ (__call__ (len, null, __getitem__ (lineinfo, 'labels'))) || __getitem__ (lineinfo, 'custom_tag_flm_text')))) {
/* 000419 */ 				var found_stuff_list = [];
/* 000420 */ 				if (__t__ (__call__ (len, null, __getitem__ (lineinfo, 'labels')))) {
/* 000421 */ 					var labels_text = (function () {
/* 000421 */ 						var __accu0__ = [];
/* 000421 */ 						var __iterable1__ = __getitem__ (lineinfo, 'labels');
/* 000421 */ 						for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000421 */ 							var lblinfo = __getitem__ (__iterable1__, __index1__);
/* 000421 */ 							(function () {
/* 000421 */ 								var __accu1__ = __accu0__;
/* 000421 */ 								return __call__ (__accu1__.append, __accu1__, __getitem__ (lblinfo, 'label'));
/* 000421 */ 							}) ();
/* 000421 */ 						}
/* 000421 */ 						return __accu0__;
/* 000421 */ 					}) ();
/* 000422 */ 					var labels_text_joined = (function () {
/* 000422 */ 						var __accu0__ = ', ';
/* 000422 */ 						return __call__ (__accu0__.join, __accu0__, (function () {
/* 000422 */ 							var __accu1__ = [];
/* 000422 */ 							var __iterable1__ = labels_text;
/* 000422 */ 							for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000422 */ 								var ln = __getitem__ (__iterable1__, __index1__);
/* 000422 */ 								(function () {
/* 000422 */ 									var __accu2__ = __accu1__;
/* 000422 */ 									return __call__ (__accu2__.append, __accu2__, __add__ (__add__ ('‘', ln), '’'));
/* 000422 */ 								}) ();
/* 000422 */ 							}
/* 000422 */ 							return __accu1__;
/* 000422 */ 						}) ());
/* 000422 */ 					}) ();
/* 000423 */ 					(function () {
/* 000423 */ 						var __accu0__ = found_stuff_list;
/* 000423 */ 						return __call__ (__accu0__.append, __accu0__, '\\label label(s) {}'.format (labels_text_joined));
/* 000423 */ 					}) ();
/* 000423 */ 				}
/* 000426 */ 				if (__t__ (__getitem__ (lineinfo, 'custom_tag_flm_text'))) {
/* 000427 */ 					(function () {
/* 000427 */ 						var __accu0__ = found_stuff_list;
/* 000427 */ 						return __call__ (__accu0__.append, __accu0__, 'custom \\tag “{}”'.format (__getitem__ (lineinfo, 'custom_tag_flm_text')));
/* 000427 */ 					}) ();
/* 000427 */ 				}
/* 000430 */ 				var found_stuff = (function () {
/* 000430 */ 					var __accu0__ = ' and ';
/* 000430 */ 					return __call__ (__accu0__.join, __accu0__, found_stuff_list);
/* 000430 */ 				}) ();
/* 000431 */ 				var __except0__ = __call__ (LatexWalkerParseError, null, "You can't have \\nonumber and \\label/\\tag on the same equation line, found {} in environment ‘{}’".format (found_stuff, node.environmentname), __kwargtrans__ ({pos: (__t__ (__getitem__ (lineinfo, 'newline_node')) || node).pos}));
/* 000431 */ 				__except0__.__cause__ = null;
/* 000431 */ 				throw __except0__;
/* 000431 */ 			}
/* 000431 */ 		}
/* 000437 */ 		return node;
/* 000437 */ 	});},
/* 000440 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000440 */ 		if (arguments.length) {
/* 000440 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000440 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000440 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000440 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000440 */ 					switch (__attrib0__) {
/* 000440 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000440 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000440 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000440 */ 					}
/* 000440 */ 				}
/* 000440 */ 			}
/* 000440 */ 		}
/* 000440 */ 		else {
/* 000440 */ 		}
/* 000443 */ 		var environmentname = node.environmentname;
/* 000445 */ 		if (__t__ (!__t__ (((function () {
/* 000445 */ 			var __accu0__ = render_context;
/* 000445 */ 			return __call__ (__accu0__.supports_feature, __accu0__, 'math');
/* 000445 */ 		}) ())))) {
/* 000446 */ 			var __except0__ = __call__ (ValueError, null, "Feature 'math' is not enabled, cannot render math environment");
/* 000446 */ 			__except0__.__cause__ = null;
/* 000446 */ 			throw __except0__;
/* 000446 */ 		}
/* 000448 */ 		var math_mgr = (function () {
/* 000448 */ 			var __accu0__ = render_context;
/* 000448 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'math');
/* 000448 */ 		}) ();
/* 000450 */ 		var refs_mgr = null;
/* 000451 */ 		if (__t__ ((function () {
/* 000451 */ 			var __accu0__ = render_context;
/* 000451 */ 			return __call__ (__accu0__.supports_feature, __accu0__, 'refs');
/* 000451 */ 		}) ())) {
/* 000452 */ 			var refs_mgr = (function () {
/* 000452 */ 				var __accu0__ = render_context;
/* 000452 */ 				return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000452 */ 			}) ();
/* 000452 */ 		}
/* 000455 */ 		var nodelist = __call__ (list, null, node.nodelist);
/* 000457 */ 		var target_id = null;
/* 000459 */ 		var lineno = 0;
/* 000460 */ 		var __iterable0__ = node.flm_equation_lines_labels_infos;
/* 000460 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000460 */ 			var line_infos = __getitem__ (__iterable0__, __index0__);
/* 000462 */ 			var nonumber = __getitem__ (line_infos, 'nonumber');
/* 000464 */ 			if (__t__ (nonumber)) {
/* 000464 */ 				continue;
/* 000464 */ 			}
/* 000467 */ 			var custom_tag_flm_text = __getitem__ (line_infos, 'custom_tag_flm_text');
/* 000471 */ 			var __left0__ = (function () {
/* 000471 */ 				var __accu0__ = math_mgr;
/* 000471 */ 				return __call__ (__accu0__.new_numbered_display_math, __accu0__, node, lineno, custom_tag_flm_text);
/* 000471 */ 			}) ();
/* 000471 */ 			var eq_id = __left0__ [0];
/* 000471 */ 			var formatted_ref_flm_text = __left0__ [1];
/* 000471 */ 			var eq_counter_numprefix = __left0__ [2];
/* 000471 */ 			var eq_counter_value = __left0__ [3];
/* 000473 */ 			var this_target_id = 'equation-{}'.format (eq_id);
/* 000474 */ 			if (__t__ (target_id === null)) {
/* 000476 */ 				var target_id = this_target_id;
/* 000476 */ 			}
/* 000478 */ 			if (__t__ (!__t__ ((custom_tag_flm_text)))) {
/* 000481 */ 				var newline_node = __getitem__ (line_infos, 'newline_node');
/* 000482 */ 				if (__t__ (newline_node !== null)) {
/* 000483 */ 					var i = (function () {
/* 000483 */ 						var __accu0__ = nodelist;
/* 000483 */ 						return __call__ (__accu0__.index, __accu0__, newline_node);
/* 000483 */ 					}) ();
/* 000483 */ 				}
/* 000484 */ 				else {
/* 000485 */ 					var i = __call__ (len, null, nodelist);
/* 000485 */ 				}
/* 000486 */ 				(function () {
/* 000486 */ 					var __accu0__ = nodelist;
/* 000489 */ 					return __call__ (__accu0__.insert, __accu0__, i, __call__ (_ProxyNodeWithRecomposedLatex, null, __add__ (__add__ ('\\tag*{', formatted_ref_flm_text), '}')));
/* 000489 */ 				}) ();
/* 000489 */ 			}
/* 000496 */ 			var this_target_id = target_id;
/* 000499 */ 			if (__t__ (__t__ (refs_mgr !== null) && render_context.is_first_pass)) {
/* 000500 */ 				var __iterable1__ = __getitem__ (line_infos, 'labels');
/* 000500 */ 				for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000500 */ 					var label_info = __getitem__ (__iterable1__, __index1__);
/* 000501 */ 					var __left0__ = __getitem__ (label_info, 'label');
/* 000501 */ 					var ref_type = __left0__ [0];
/* 000501 */ 					var ref_label = __left0__ [1];
/* 000502 */ 					var counter_formatter_id = math_mgr.counter_formatter.counter_formatter_id;
/* 000504 */ 					(function () {
/* 000504 */ 						var __accu0__ = refs_mgr;
/* 000504 */ 						return __call__ (__accu0__.register_reference, __accu0__, ref_type, ref_label, __kwargtrans__ ({node: node, formatted_ref_flm_text: formatted_ref_flm_text, target_href: '#{}'.format (this_target_id), counter_value: eq_counter_value, counter_numprefix: eq_counter_numprefix, counter_formatter_id: counter_formatter_id}));
/* 000504 */ 					}) ();
/* 000504 */ 				}
/* 000504 */ 			}
/* 000513 */ 			var lineno = __call__ (__iadd__, null, lineno, 1);
/* 000513 */ 		}
/* 000516 */ 		return (function () {
/* 000516 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000518 */ 			return __call__ (__accu0__.render_math_content, __accu0__, tuple (['', '']), (function () {
/* 000518 */ 				var __accu1__ = latexnodes_nodes;
/* 000518 */ 				return __call__ (__accu1__.LatexNodeList, __accu1__, nodelist);
/* 000518 */ 			}) (), render_context, 'display', __kwargtrans__ ({environmentname: environmentname, target_id: target_id}));
/* 000518 */ 		}) ();
/* 000518 */ 	});},
/* 000526 */ 	get recompose_pure_latex () {return __get__ (this, function (self, node, recomposer) {
/* 000526 */ 		if (arguments.length) {
/* 000526 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000526 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000526 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000526 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000526 */ 					switch (__attrib0__) {
/* 000526 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000526 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000526 */ 						case 'recomposer': var recomposer = __allkwargs0__ [__attrib0__]; break;
/* 000526 */ 					}
/* 000526 */ 				}
/* 000526 */ 			}
/* 000526 */ 		}
/* 000526 */ 		else {
/* 000526 */ 		}
/* 000528 */ 		var s = '';
/* 000530 */ 		var recopt_math = (function () {
/* 000530 */ 			var __accu0__ = recomposer;
/* 000530 */ 			return __call__ (__accu0__.get_options, __accu0__, 'math');
/* 000530 */ 		}) ();
/* 000531 */ 		var surround_display_math = (function () {
/* 000531 */ 			var __accu0__ = recopt_math;
/* 000531 */ 			return __call__ (__accu0__.py_get, __accu0__, 'surround_display_math', tuple (['', '']));
/* 000531 */ 		}) ();
/* 000532 */ 		var emit_flm_math_environment_macro = (function () {
/* 000532 */ 			var __accu0__ = recopt_math;
/* 000532 */ 			return __call__ (__accu0__.py_get, __accu0__, 'emit_flm_math_environment_macro', false);
/* 000532 */ 		}) ();
/* 000537 */ 		var s = __call__ (__iadd__, null, s, __getitem__ (surround_display_math, 0));
/* 000541 */ 		if (__t__ (emit_flm_math_environment_macro)) {
/* 000542 */ 			var s = __call__ (__iadd__, null, s, __add__ (__add__ ('\\flmMathEnvironment{', node.environmentname), '}{'));
/* 000543 */ 			var s = __call__ (__iadd__, null, s, (function () {
/* 000543 */ 				var __accu0__ = recomposer;
/* 000543 */ 				return __call__ (__accu0__.descend_into_parsed_arguments, __accu0__, node.nodeargd);
/* 000543 */ 			}) ());
/* 000544 */ 			var s = __call__ (__iadd__, null, s, '}{');
/* 000544 */ 		}
/* 000545 */ 		else {
/* 000546 */ 			var s = __call__ (__iadd__, null, s, __add__ (__add__ ('\\begin{', node.environmentname), '}'));
/* 000547 */ 			var s = __call__ (__iadd__, null, s, (function () {
/* 000547 */ 				var __accu0__ = recomposer;
/* 000547 */ 				return __call__ (__accu0__.descend_into_parsed_arguments, __accu0__, node.nodeargd);
/* 000547 */ 			}) ());
/* 000547 */ 		}
/* 000550 */ 		var s_lines = [];
/* 000551 */ 		var last_line_already_has_newline = false;
/* 000552 */ 		var __iterable0__ = node.flm_equation_lines_labels_infos;
/* 000552 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000552 */ 			var line_infos = __getitem__ (__iterable0__, __index0__);
/* 000554 */ 			var s_line = '';
/* 000556 */ 			var __iterable1__ = __getitem__ (line_infos, 'line_nodelist');
/* 000556 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000556 */ 				var n = __getitem__ (__iterable1__, __index1__);
/* 000557 */ 				var s_line = __call__ (__iadd__, null, s_line, (function () {
/* 000557 */ 					var __accu0__ = recomposer;
/* 000557 */ 					return __call__ (__accu0__.subrecompose, __accu0__, n);
/* 000557 */ 				}) ());
/* 000557 */ 			}
/* 000568 */ 			var edge_newlines_info = dict ({'initial': '', 'final': ''});
/* 000573 */ 			var _repl_newline = function (m) {
/* 000573 */ 				if (arguments.length) {
/* 000573 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000573 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000573 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000573 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000573 */ 							switch (__attrib0__) {
/* 000573 */ 								case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000573 */ 							}
/* 000573 */ 						}
/* 000573 */ 					}
/* 000573 */ 				}
/* 000573 */ 				else {
/* 000573 */ 				}
/* 000574 */ 				var nlindent = __add__ ('\n', (function () {
/* 000574 */ 					var __accu0__ = m;
/* 000574 */ 					return __call__ (__accu0__.group, __accu0__, 'indent');
/* 000574 */ 				}) ());
/* 000575 */ 				if (__t__ (__eq__ ((function () {
/* 000575 */ 					var __accu0__ = m;
/* 000575 */ 					return __call__ (__accu0__.start, __accu0__);
/* 000575 */ 				}) (), 0))) {
/* 000576 */ 					if (__t__ (last_line_already_has_newline)) {
/* 000577 */ 						__setitem__ (edge_newlines_info, 'initial', nlindent);
/* 000578 */ 						return '';
/* 000578 */ 					}
/* 000579 */ 					return nlindent;
/* 000579 */ 				}
/* 000580 */ 				if (__t__ (__eq__ ((function () {
/* 000580 */ 					var __accu0__ = m;
/* 000580 */ 					return __call__ (__accu0__.end, __accu0__);
/* 000580 */ 				}) (), __call__ (len, null, s_line)))) {
/* 000581 */ 					__setitem__ (edge_newlines_info, 'final', nlindent);
/* 000582 */ 					return '';
/* 000582 */ 				}
/* 000583 */ 				return nlindent;
/* 000583 */ 			};
/* 000592 */ 			var s_line = (function () {
/* 000592 */ 				var __accu0__ = _rx_newline_spaces;
/* 000592 */ 				return __call__ (__accu0__.sub, __accu0__, _repl_newline, s_line);
/* 000592 */ 			}) ();
/* 000603 */ 			if (__t__ (__getitem__ (line_infos, 'custom_tag_flm_text') !== null)) {
/* 000604 */ 				var s_line = __call__ (__iadd__, null, s_line, __add__ (__add__ ('\\tag*{', __getitem__ (line_infos, 'custom_tag_flm_text')), '}'));
/* 000604 */ 			}
/* 000612 */ 			var __iterable1__ = __getitem__ (line_infos, 'labels');
/* 000612 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000612 */ 				var label_info = __getitem__ (__iterable1__, __index1__);
/* 000613 */ 				var __left0__ = __getitem__ (label_info, 'label');
/* 000613 */ 				var ref_type = __left0__ [0];
/* 000613 */ 				var ref_label = __left0__ [1];
/* 000614 */ 				var safe_label_info = (function () {
/* 000614 */ 					var __accu0__ = recomposer;
/* 000614 */ 					return __call__ (__accu0__.make_safe_label, __accu0__, 'ref', ref_type, ref_label, node.latex_walker.resource_info);
/* 000614 */ 				}) ();
/* 000617 */ 				var s_line = __call__ (__iadd__, null, s_line, __add__ (__add__ ('\\label{', __getitem__ (safe_label_info, 'safe_label')), '}'));
/* 000617 */ 			}
/* 000619 */ 			if (__t__ (__getitem__ (line_infos, 'nonumber'))) {
/* 000620 */ 				var s_line = __call__ (__iadd__, null, s_line, '\\nonumber ');
/* 000620 */ 			}
/* 000622 */ 			if (__t__ (__getitem__ (line_infos, 'newline_node'))) {
/* 000623 */ 				var s_line = __call__ (__iadd__, null, s_line, (function () {
/* 000623 */ 					var __accu0__ = recomposer;
/* 000623 */ 					return __call__ (__accu0__.subrecompose, __accu0__, __getitem__ (line_infos, 'newline_node'));
/* 000623 */ 				}) ());
/* 000623 */ 			}
/* 000630 */ 			var final_newlines = __getitem__ (edge_newlines_info, 'final');
/* 000631 */ 			var s_line = __call__ (__iadd__, null, s_line, final_newlines);
/* 000633 */ 			// pass;
/* 000637 */ 			(function () {
/* 000637 */ 				var __accu0__ = s_lines;
/* 000637 */ 				return __call__ (__accu0__.append, __accu0__, s_line);
/* 000637 */ 			}) ();
/* 000638 */ 			var last_line_already_has_newline = (__t__ (__call__ (len, null, final_newlines)) ? true : false);
/* 000638 */ 		}
/* 000640 */ 		var s = __call__ (__iadd__, null, s, (function () {
/* 000640 */ 			var __accu0__ = '';
/* 000640 */ 			return __call__ (__accu0__.join, __accu0__, s_lines);
/* 000640 */ 		}) ());
/* 000642 */ 		if (__t__ (emit_flm_math_environment_macro)) {
/* 000643 */ 			var s = __call__ (__iadd__, null, s, '}');
/* 000643 */ 		}
/* 000644 */ 		else {
/* 000645 */ 			var s = __call__ (__iadd__, null, s, __add__ (__add__ ('\\end{', node.environmentname), '}'));
/* 000645 */ 		}
/* 000647 */ 		var s = __call__ (__iadd__, null, s, __getitem__ (surround_display_math, 1));
/* 000649 */ 		return s;
/* 000649 */ 	});}
/* 000649 */ });
/* 000652 */ export var _rx_newline_spaces = (function () {
/* 000652 */ 	var __accu0__ = re;
/* 000652 */ 	return __call__ (__accu0__.compile, __accu0__, '([ \\t]*?\\n)+(?P<indent>[ \\t]*)');
/* 000652 */ }) ();
/* 000656 */ export var MathEqrefMacro =  __class__ ('MathEqrefMacro', [FLMMacroSpecBase], {
/* 000656 */ 	__module__: __name__,
/* 000666 */ 	delayed_render: true,
/* 000668 */ 	allowed_in_standalone_mode: false,
/* 000673 */ 	get __init__ () {return __get__ (this, function (self, macroname, ref_type) {
/* 000673 */ 		if (typeof macroname == 'undefined' || (macroname != null && macroname.hasOwnProperty ("__kwargtrans__"))) {;
/* 000673 */ 			var macroname = 'eqref';
/* 000673 */ 		};
/* 000673 */ 		if (typeof ref_type == 'undefined' || (ref_type != null && ref_type.hasOwnProperty ("__kwargtrans__"))) {;
/* 000673 */ 			var ref_type = 'eq';
/* 000673 */ 		};
/* 000673 */ 		var kwargs = dict ();
/* 000673 */ 		if (arguments.length) {
/* 000673 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000673 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000673 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000673 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000673 */ 					switch (__attrib0__) {
/* 000673 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000673 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000673 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000673 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000673 */ 					}
/* 000673 */ 				}
/* 000673 */ 				delete kwargs.__kwargtrans__;
/* 000673 */ 			}
/* 000673 */ 		}
/* 000673 */ 		else {
/* 000673 */ 		}
/* 000683 */ 		__call__ (__call__ (__super__, null, MathEqrefMacro, '__init__'), null, self, __kwargtrans__ ({macroname: macroname, arguments_spec_list: [__call__ (FLMArgumentSpec, null, (function () {
/* 000683 */ 			var __accu0__ = latexnodes_parsers;
/* 000683 */ 			return __call__ (__accu0__.LatexCharsGroupParser, __accu0__);
/* 000683 */ 		}) (), __kwargtrans__ ({argname: 'ref_label', flm_doc: __add__ (__add__ ('Equation label.  Must begin with the prefix ‘\\verbtext+', ref_type), ':+’')}))]}));
/* 000690 */ 		self.ref_type = ref_type;
/* 000690 */ 	});},
/* 000692 */ 	_fields: tuple (['macroname', 'ref_type']),
/* 000694 */ 	get get_flm_doc () {return __get__ (this, function (self) {
/* 000694 */ 		if (arguments.length) {
/* 000694 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000694 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000694 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000694 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000694 */ 					switch (__attrib0__) {
/* 000694 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000694 */ 					}
/* 000694 */ 				}
/* 000694 */ 			}
/* 000694 */ 		}
/* 000694 */ 		else {
/* 000694 */ 		}
/* 000695 */ 		return __add__ (__add__ ('Refer to an equation by its label.  The argument must be\n            a valid equation label which starts with \\verbcode+', self.ref_type), ':+.  You can place labels in display equations using the\n            \\verbcode+\\label{…}+ macro.');
/* 000695 */ 	});},
/* 000702 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000702 */ 		if (arguments.length) {
/* 000702 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000702 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000702 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000702 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000702 */ 					switch (__attrib0__) {
/* 000702 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000702 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000702 */ 					}
/* 000702 */ 				}
/* 000702 */ 			}
/* 000702 */ 		}
/* 000702 */ 		else {
/* 000702 */ 		}
/* 000704 */ 		var node_args = (function () {
/* 000704 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000704 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['ref_label']));
/* 000704 */ 		}) ();
/* 000708 */ 		var ref_type = null;
/* 000709 */ 		var ref_label = (function () {
/* 000709 */ 			var __accu0__ = __getitem__ (node_args, 'ref_label');
/* 000709 */ 			return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000709 */ 		}) ();
/* 000710 */ 		if (__t__ (__in__ (':', ref_label))) {
/* 000711 */ 			var __left0__ = (function () {
/* 000711 */ 				var __accu0__ = ref_label;
/* 000711 */ 				return __call__ (__accu0__.py_split, __accu0__, ':', 1);
/* 000711 */ 			}) ();
/* 000711 */ 			var ref_type = __left0__ [0];
/* 000711 */ 			var ref_label = __left0__ [1];
/* 000711 */ 		}
/* 000713 */ 		if (__t__ (__ne__ (ref_type, self.ref_type))) {
/* 000714 */ 			var __except0__ = __call__ (LatexWalkerLocatedError, null, 'Equation labels must begin with “{}:” (error in ‘\\{}’)'.format (self.ref_type, node.macroname), __kwargtrans__ ({pos: node.pos}));
/* 000714 */ 			__except0__.__cause__ = null;
/* 000714 */ 			throw __except0__;
/* 000714 */ 		}
/* 000720 */ 		node.flmarg_ref = tuple ([ref_type, ref_label]);
/* 000721 */ 		node.flm_ref_info = dict ({'ref_list': [node.flmarg_ref], 'ref_options': dict ({}), 'display_content_nodelist': null});
/* 000721 */ 	});},
/* 000728 */ 	get prepare_delayed_render () {return __get__ (this, function (self, node, render_context) {
/* 000728 */ 		if (arguments.length) {
/* 000728 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000728 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000728 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000728 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000728 */ 					switch (__attrib0__) {
/* 000728 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000728 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000728 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000728 */ 					}
/* 000728 */ 				}
/* 000728 */ 			}
/* 000728 */ 		}
/* 000728 */ 		else {
/* 000728 */ 		}
/* 000729 */ 		// pass;
/* 000729 */ 	});},
/* 000731 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000731 */ 		if (arguments.length) {
/* 000731 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000731 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000731 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000731 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000731 */ 					switch (__attrib0__) {
/* 000731 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000731 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000731 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000731 */ 					}
/* 000731 */ 				}
/* 000731 */ 			}
/* 000731 */ 		}
/* 000731 */ 		else {
/* 000731 */ 		}
/* 000733 */ 		var __left0__ = node.flmarg_ref;
/* 000733 */ 		var ref_type = __left0__ [0];
/* 000733 */ 		var ref_label = __left0__ [1];
/* 000735 */ 		var refs_mgr = (function () {
/* 000735 */ 			var __accu0__ = render_context;
/* 000735 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000735 */ 		}) ();
/* 000737 */ 		var resource_info = node.latex_walker.resource_info;
/* 000739 */ 		try {
/* 000740 */ 			return (function () {
/* 000740 */ 				var __accu0__ = refs_mgr;
/* 000740 */ 				return __call__ (__accu0__.render_ref, __accu0__, ref_type, ref_label, null, resource_info, __kwargtrans__ ({counter_with_prefix: false}));
/* 000740 */ 			}) ();
/* 000740 */ 		}
/* 000740 */ 		catch (__except0__) {
/* 000740 */ 			if (isinstance (__except0__, Exception)) {
/* 000740 */ 				var e = __except0__;
/* 000747 */ 				(function () {
/* 000747 */ 					var __accu0__ = logger;
/* 000748 */ 					return __call__ (__accu0__.error, __accu0__, 'Failed to resolve reference to ‘{}:{}’: {} in ‘{}’ @ {}'.format (ref_type, ref_label, e, (function () {
/* 000748 */ 						var __accu1__ = node;
/* 000748 */ 						return __call__ (__accu1__.latex_verbatim, __accu1__);
/* 000748 */ 					}) (), (function () {
/* 000748 */ 						var __accu1__ = node;
/* 000748 */ 						return __call__ (__accu1__.format_pos, __accu1__);
/* 000748 */ 					}) ()));
/* 000748 */ 				}) ();
/* 000749 */ 				var __except1__ = __call__ (LatexWalkerLocatedError, null, 'Unable to resolve reference to ‘{}:{}’. {}'.format (ref_type, ref_label, e), __kwargtrans__ ({pos: node.pos}));
/* 000749 */ 				__except1__.__cause__ = null;
/* 000749 */ 				throw __except1__;
/* 000749 */ 			}
/* 000749 */ 			else {
/* 000749 */ 				throw __except0__;
/* 000749 */ 			}
/* 000749 */ 		}
/* 000749 */ 	});},
/* 000754 */ 	get recompose_pure_latex () {return __get__ (this, function (self, node, recomposer) {
/* 000754 */ 		if (arguments.length) {
/* 000754 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000754 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000754 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000754 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000754 */ 					switch (__attrib0__) {
/* 000754 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000754 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000754 */ 						case 'recomposer': var recomposer = __allkwargs0__ [__attrib0__]; break;
/* 000754 */ 					}
/* 000754 */ 				}
/* 000754 */ 			}
/* 000754 */ 		}
/* 000754 */ 		else {
/* 000754 */ 		}
/* 000756 */ 		var safe_label_info = (function () {
/* 000756 */ 			var __accu0__ = recomposer;
/* 000756 */ 			return __call__ (__accu0__.make_safe_label, __accu0__, 'ref', __getitem__ (node.flmarg_ref, 0), __getitem__ (node.flmarg_ref, 1), node.latex_walker.resource_info);
/* 000756 */ 		}) ();
/* 000760 */ 		return __add__ (__add__ ('\\eqref{', __getitem__ (safe_label_info, 'safe_label')), '}');
/* 000760 */ 	});}
/* 000760 */ });
/* 000765 */ export var FeatureClass = FeatureMath;
/* 000014 */ 
//# sourceMappingURL=flm.feature.math.map