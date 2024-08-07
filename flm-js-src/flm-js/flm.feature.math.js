/* 000001 */ // Transcrypt'ed from Python, 2024-07-16 00:01:39
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
/* 000007 */ export {Counter, FLMArgumentSpec, LatexEnvironmentBodyContentsParser, ParsedArgumentsInfo, ParsingStateDeltaEnterMathMode, latexnodes_nodes, ParsingStateDeltaExtendLatexContextDb, FLMEnvironmentSpecBase, Feature, FLMMacroSpecBase, latexnodes_parsers, LatexWalkerLocatedError, MacroSpec, build_counter_formatter};
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
/* 000165 */ export var _ProxyNodeWithLatexVerbatim =  __class__ ('_ProxyNodeWithLatexVerbatim', [object], {
/* 000165 */ 	__module__: __name__,
/* 000167 */ 	pos: null,
/* 000168 */ 	pos_end: null,
/* 000170 */ 	get __init__ () {return __get__ (this, function (self, verbatim) {
/* 000170 */ 		if (arguments.length) {
/* 000170 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000170 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000170 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000170 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000170 */ 					switch (__attrib0__) {
/* 000170 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000170 */ 						case 'verbatim': var verbatim = __allkwargs0__ [__attrib0__]; break;
/* 000170 */ 					}
/* 000170 */ 				}
/* 000170 */ 			}
/* 000170 */ 		}
/* 000170 */ 		else {
/* 000170 */ 		}
/* 000171 */ 		self._verbatim = verbatim;
/* 000171 */ 	});},
/* 000173 */ 	get latex_verbatim () {return __get__ (this, function (self) {
/* 000173 */ 		if (arguments.length) {
/* 000173 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000173 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000173 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000173 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000173 */ 					switch (__attrib0__) {
/* 000173 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000173 */ 					}
/* 000173 */ 				}
/* 000173 */ 			}
/* 000173 */ 		}
/* 000173 */ 		else {
/* 000173 */ 		}
/* 000174 */ 		return self._verbatim;
/* 000174 */ 	});}
/* 000174 */ });
/* 000177 */ export var MathEnvironment =  __class__ ('MathEnvironment', [FLMEnvironmentSpecBase], {
/* 000177 */ 	__module__: __name__,
/* 000182 */ 	get get_flm_doc () {return __get__ (this, function (self) {
/* 000182 */ 		if (arguments.length) {
/* 000182 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000182 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000182 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000182 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000182 */ 					switch (__attrib0__) {
/* 000182 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000182 */ 					}
/* 000182 */ 				}
/* 000182 */ 			}
/* 000182 */ 		}
/* 000182 */ 		else {
/* 000182 */ 		}
/* 000183 */ 		return 'Display equation typeset as the corresponding LaTeX environment.';
/* 000183 */ 	});},
/* 000185 */ 	get __init__ () {return __get__ (this, function (self, environmentname, is_numbered) {
/* 000185 */ 		if (typeof is_numbered == 'undefined' || (is_numbered != null && is_numbered.hasOwnProperty ("__kwargtrans__"))) {;
/* 000185 */ 			var is_numbered = null;
/* 000185 */ 		};
/* 000185 */ 		if (arguments.length) {
/* 000185 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000185 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000185 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000185 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000185 */ 					switch (__attrib0__) {
/* 000185 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000185 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000185 */ 						case 'is_numbered': var is_numbered = __allkwargs0__ [__attrib0__]; break;
/* 000185 */ 					}
/* 000185 */ 				}
/* 000185 */ 			}
/* 000185 */ 		}
/* 000185 */ 		else {
/* 000185 */ 		}
/* 000186 */ 		__call__ (__call__ (__super__, null, MathEnvironment, '__init__'), null, self, __kwargtrans__ ({environmentname: environmentname}));
/* 000189 */ 		if (__t__ (is_numbered !== null)) {
/* 000190 */ 			self.is_numbered = is_numbered;
/* 000190 */ 		}
/* 000191 */ 		else {
/* 000192 */ 			self.is_numbered = __ne__ (__getslice__ (environmentname, __neg__ (1), null, 1), '*');
/* 000192 */ 		}
/* 000194 */ 		if (__t__ (!__t__ ((self.is_numbered)))) {
/* 000196 */ 			self.allowed_in_standalone_mode = true;
/* 000196 */ 		}
/* 000196 */ 	});},
/* 000198 */ 	_fields: tuple (['environmentname', 'is_numbered']),
/* 000200 */ 	get make_body_parsing_state_delta () {return __get__ (this, function (self, token, nodeargd, arg_parsing_state_delta, latex_walker) {
/* 000200 */ 		var kwargs = dict ();
/* 000200 */ 		if (arguments.length) {
/* 000200 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000200 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000200 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000200 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000200 */ 					switch (__attrib0__) {
/* 000200 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000200 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000200 */ 						case 'nodeargd': var nodeargd = __allkwargs0__ [__attrib0__]; break;
/* 000200 */ 						case 'arg_parsing_state_delta': var arg_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000200 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000200 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000200 */ 					}
/* 000200 */ 				}
/* 000200 */ 				delete kwargs.__kwargtrans__;
/* 000200 */ 			}
/* 000200 */ 		}
/* 000200 */ 		else {
/* 000200 */ 		}
/* 000202 */ 		return __call__ (ParsingStateDeltaEnterMathMode, null);
/* 000202 */ 	});},
/* 000204 */ 	get make_body_parser () {return __get__ (this, function (self, token, nodeargd, arg_parsing_state_delta) {
/* 000204 */ 		if (arguments.length) {
/* 000204 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000204 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000204 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000204 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000204 */ 					switch (__attrib0__) {
/* 000204 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000204 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000204 */ 						case 'nodeargd': var nodeargd = __allkwargs0__ [__attrib0__]; break;
/* 000204 */ 						case 'arg_parsing_state_delta': var arg_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000204 */ 					}
/* 000204 */ 				}
/* 000204 */ 			}
/* 000204 */ 		}
/* 000204 */ 		else {
/* 000204 */ 		}
/* 000212 */ 		return __call__ (LatexEnvironmentBodyContentsParser, null, __kwargtrans__ ({environmentname: token.arg, contents_parsing_state_delta: __call__ (ParsingStateDeltaExtendLatexContextDb, null, __kwargtrans__ ({extend_latex_context: __call__ (dict, null, __kwargtrans__ ({macros: [__call__ (MacroSpec, null, 'label', __kwargtrans__ ({arguments_spec_list: [__call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: (function () {
/* 000212 */ 			var __accu0__ = latexnodes_parsers;
/* 000212 */ 			return __call__ (__accu0__.LatexCharsGroupParser, __accu0__, __kwargtrans__ ({delimiters: tuple (['{', '}'])}));
/* 000224 */ 		}) (), argname: 'label'}))]})), __call__ (MacroSpec, null, 'tag', __kwargtrans__ ({arguments_spec_list: [__call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: '*', argname: 'tag_star'})), __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: (function () {
/* 000224 */ 			var __accu0__ = latexnodes_parsers;
/* 000224 */ 			return __call__ (__accu0__.LatexCharsGroupParser, __accu0__, __kwargtrans__ ({delimiters: tuple (['{', '}'])}));
/* 000230 */ 		}) (), argname: 'text'}))]})), __call__ (MacroSpec, null, '\\', __kwargtrans__ ({arguments_spec_list: []}))]}))}))}));
/* 000230 */ 	});},
/* 000236 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000236 */ 		if (arguments.length) {
/* 000236 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000236 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000236 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000236 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000236 */ 					switch (__attrib0__) {
/* 000236 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000236 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000236 */ 					}
/* 000236 */ 				}
/* 000236 */ 			}
/* 000236 */ 		}
/* 000236 */ 		else {
/* 000236 */ 		}
/* 000242 */ 		node.flm_equation_lines_labels_infos = [];
/* 000244 */ 		if (__t__ (!__t__ ((self.is_numbered)))) {
/* 000245 */ 			return node;
/* 000245 */ 		}
/* 000247 */ 		var init_last_line_info = dict ({'labels_info': [], 'custom_tag_flm_text': null, 'nonumber': false});
/* 000252 */ 		var last_line_info = __call__ (dict, null, init_last_line_info);
/* 000253 */ 		var _flush_last_equation_line_labels_infos = function (newline_node) {
/* 000253 */ 			if (typeof newline_node == 'undefined' || (newline_node != null && newline_node.hasOwnProperty ("__kwargtrans__"))) {;
/* 000253 */ 				var newline_node = null;
/* 000253 */ 			};
/* 000253 */ 			if (arguments.length) {
/* 000253 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000253 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000253 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000253 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000253 */ 						switch (__attrib0__) {
/* 000253 */ 							case 'newline_node': var newline_node = __allkwargs0__ [__attrib0__]; break;
/* 000253 */ 						}
/* 000253 */ 					}
/* 000253 */ 				}
/* 000253 */ 			}
/* 000253 */ 			else {
/* 000253 */ 			}
/* 000254 */ 			(function () {
/* 000254 */ 				var __accu0__ = node.flm_equation_lines_labels_infos;
/* 000255 */ 				return __call__ (__accu0__.append, __accu0__, dict ({'labels': __call__ (list, null, __getitem__ (last_line_info, 'labels_info')), 'custom_tag_flm_text': __getitem__ (last_line_info, 'custom_tag_flm_text'), 'nonumber': __getitem__ (last_line_info, 'nonumber'), 'newline_node': newline_node}));
/* 000255 */ 			}) ();
/* 000260 */ 			(function () {
/* 000260 */ 				var __accu0__ = last_line_info;
/* 000260 */ 				return __call__ (__accu0__.py_update, __accu0__, init_last_line_info);
/* 000260 */ 			}) ();
/* 000260 */ 		};
/* 000262 */ 		var last_node_is_newline = false;
/* 000263 */ 		var __iterable0__ = node.nodelist;
/* 000263 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000263 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000264 */ 			if (__t__ (__t__ ((function () {
/* 000264 */ 				var __accu0__ = n;
/* 000264 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000264 */ 			}) ()) && __eq__ (n.macroname, 'label'))) {
/* 000269 */ 				var ref_label_node_args = (function () {
/* 000269 */ 					var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: n}));
/* 000269 */ 					return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['label']));
/* 000269 */ 				}) ();
/* 000272 */ 				var ref_label_full = (function () {
/* 000272 */ 					var __accu0__ = __getitem__ (ref_label_node_args, 'label');
/* 000272 */ 					return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000272 */ 				}) ();
/* 000274 */ 				if (__t__ (__in__ (':', ref_label_full))) {
/* 000275 */ 					var __left0__ = (function () {
/* 000275 */ 						var __accu0__ = ref_label_full;
/* 000275 */ 						return __call__ (__accu0__.py_split, __accu0__, ':', 1);
/* 000275 */ 					}) ();
/* 000275 */ 					var ref_type = __left0__ [0];
/* 000275 */ 					var ref_label = __left0__ [1];
/* 000275 */ 				}
/* 000276 */ 				else {
/* 000277 */ 					var __left0__ = tuple ([null, ref_label_full]);
/* 000277 */ 					var ref_type = __left0__ [0];
/* 000277 */ 					var ref_label = __left0__ [1];
/* 000277 */ 				}
/* 000279 */ 				var info = dict ({'node': n, 'label': tuple ([ref_type, ref_label])});
/* 000284 */ 				(function () {
/* 000284 */ 					var __accu0__ = __getitem__ (last_line_info, 'labels_info');
/* 000284 */ 					return __call__ (__accu0__.append, __accu0__, info);
/* 000284 */ 				}) ();
/* 000284 */ 			}
/* 000286 */ 			else if (__t__ (__t__ ((function () {
/* 000286 */ 				var __accu0__ = n;
/* 000286 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000286 */ 			}) ()) && __eq__ (n.macroname, 'tag'))) {
/* 000289 */ 				var tag_node_args = (function () {
/* 000289 */ 					var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: n}));
/* 000289 */ 					return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['tag_star', 'text']));
/* 000289 */ 				}) ();
/* 000294 */ 				var custom_tag_flm_text = (function () {
/* 000294 */ 					var __accu0__ = (function () {
/* 000294 */ 						var __accu1__ = __getitem__ (tag_node_args, 'text');
/* 000294 */ 						return __call__ (__accu1__.get_content_nodelist, __accu1__);
/* 000294 */ 					}) ();
/* 000294 */ 					return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000294 */ 				}) ();
/* 000295 */ 				if (__t__ (!__t__ (((function () {
/* 000295 */ 					var __accu0__ = __getitem__ (tag_node_args, 'tag_star');
/* 000295 */ 					return __call__ (__accu0__.was_provided, __accu0__);
/* 000295 */ 				}) ())))) {
/* 000296 */ 					var custom_tag_flm_text = '({})'.format (custom_tag_flm_text);
/* 000296 */ 				}
/* 000298 */ 				__setitem__ (last_line_info, 'custom_tag_flm_text', custom_tag_flm_text);
/* 000298 */ 			}
/* 000300 */ 			else if (__t__ (__t__ ((function () {
/* 000300 */ 				var __accu0__ = n;
/* 000300 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000300 */ 			}) ()) && __eq__ (n.macroname, 'nonumber'))) {
/* 000302 */ 				__setitem__ (last_line_info, 'nonumber', true);
/* 000302 */ 			}
/* 000304 */ 			else if (__t__ (__t__ ((function () {
/* 000304 */ 				var __accu0__ = n;
/* 000304 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000304 */ 			}) ()) && __eq__ (n.macroname, '\\'))) {
/* 000305 */ 				__call__ (_flush_last_equation_line_labels_infos, null, n);
/* 000306 */ 				var last_node_is_newline = true;
/* 000306 */ 			}
/* 000308 */ 			else if (__t__ (__t__ (!__t__ (((function () {
/* 000308 */ 				var __accu0__ = n;
/* 000308 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCommentNode);
/* 000309 */ 			}) ()))) && !__t__ ((__t__ ((function () {
/* 000309 */ 				var __accu0__ = n;
/* 000309 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000309 */ 			}) ()) && !__t__ (((function () {
/* 000309 */ 				var __accu0__ = n.chars;
/* 000309 */ 				return __call__ (__accu0__.strip, __accu0__);
/* 000309 */ 			}) ())))))) {
/* 000311 */ 				var last_node_is_newline = false;
/* 000311 */ 			}
/* 000311 */ 		}
/* 000313 */ 		if (__t__ (!__t__ ((last_node_is_newline)))) {
/* 000314 */ 			__call__ (_flush_last_equation_line_labels_infos, null);
/* 000314 */ 		}
/* 000318 */ 		var __iterable0__ = __call__ (enumerate, null, node.flm_equation_lines_labels_infos);
/* 000318 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000318 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000318 */ 			var linej = __left0__ [0];
/* 000318 */ 			var lineinfo = __left0__ [1];
/* 000320 */ 			if (__t__ (__t__ (__getitem__ (lineinfo, 'nonumber')) && (__t__ (__call__ (len, null, __getitem__ (lineinfo, 'labels'))) || __getitem__ (lineinfo, 'custom_tag_flm_text')))) {
/* 000321 */ 				var found_stuff_list = [];
/* 000322 */ 				if (__t__ (__call__ (len, null, __getitem__ (lineinfo, 'labels')))) {
/* 000323 */ 					var labels_text = (function () {
/* 000323 */ 						var __accu0__ = [];
/* 000323 */ 						var __iterable1__ = __getitem__ (lineinfo, 'labels');
/* 000323 */ 						for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000323 */ 							var lblinfo = __getitem__ (__iterable1__, __index1__);
/* 000323 */ 							(function () {
/* 000323 */ 								var __accu1__ = __accu0__;
/* 000323 */ 								return __call__ (__accu1__.append, __accu1__, __getitem__ (lblinfo, 'label'));
/* 000323 */ 							}) ();
/* 000323 */ 						}
/* 000323 */ 						return __accu0__;
/* 000323 */ 					}) ();
/* 000324 */ 					var labels_text_joined = (function () {
/* 000324 */ 						var __accu0__ = ', ';
/* 000324 */ 						return __call__ (__accu0__.join, __accu0__, (function () {
/* 000324 */ 							var __accu1__ = [];
/* 000324 */ 							var __iterable1__ = labels_text;
/* 000324 */ 							for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000324 */ 								var ln = __getitem__ (__iterable1__, __index1__);
/* 000324 */ 								(function () {
/* 000324 */ 									var __accu2__ = __accu1__;
/* 000324 */ 									return __call__ (__accu2__.append, __accu2__, __add__ (__add__ ('‘', ln), '’'));
/* 000324 */ 								}) ();
/* 000324 */ 							}
/* 000324 */ 							return __accu1__;
/* 000324 */ 						}) ());
/* 000324 */ 					}) ();
/* 000325 */ 					(function () {
/* 000325 */ 						var __accu0__ = found_stuff_list;
/* 000325 */ 						return __call__ (__accu0__.append, __accu0__, '\\label label(s) {}'.format (labels_text_joined));
/* 000325 */ 					}) ();
/* 000325 */ 				}
/* 000328 */ 				if (__t__ (__getitem__ (lineinfo, 'custom_tag_flm_text'))) {
/* 000329 */ 					(function () {
/* 000329 */ 						var __accu0__ = found_stuff_list;
/* 000329 */ 						return __call__ (__accu0__.append, __accu0__, 'custom \\tag “{}”'.format (__getitem__ (lineinfo, 'custom_tag_flm_text')));
/* 000329 */ 					}) ();
/* 000329 */ 				}
/* 000332 */ 				var found_stuff = (function () {
/* 000332 */ 					var __accu0__ = ' and ';
/* 000332 */ 					return __call__ (__accu0__.join, __accu0__, found_stuff_list);
/* 000332 */ 				}) ();
/* 000333 */ 				var __except0__ = __call__ (LatexWalkerParseError, null, "You can't have \\nonumber and \\label/\\tag on the same equation line, found {}".format (found_stuff), __kwargtrans__ ({pos: (__t__ (__getitem__ (lineinfo, 'newline_node')) || node).pos}));
/* 000333 */ 				__except0__.__cause__ = null;
/* 000333 */ 				throw __except0__;
/* 000333 */ 			}
/* 000333 */ 		}
/* 000339 */ 		return node;
/* 000339 */ 	});},
/* 000342 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000342 */ 		if (arguments.length) {
/* 000342 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000342 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000342 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000342 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000342 */ 					switch (__attrib0__) {
/* 000342 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000342 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000342 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000342 */ 					}
/* 000342 */ 				}
/* 000342 */ 			}
/* 000342 */ 		}
/* 000342 */ 		else {
/* 000342 */ 		}
/* 000345 */ 		var environmentname = node.environmentname;
/* 000347 */ 		if (__t__ (!__t__ (((function () {
/* 000347 */ 			var __accu0__ = render_context;
/* 000347 */ 			return __call__ (__accu0__.supports_feature, __accu0__, 'math');
/* 000347 */ 		}) ())))) {
/* 000348 */ 			var __except0__ = __call__ (ValueError, null, "Feature 'math' is not enabled, cannot render math environment");
/* 000348 */ 			__except0__.__cause__ = null;
/* 000348 */ 			throw __except0__;
/* 000348 */ 		}
/* 000350 */ 		var math_mgr = (function () {
/* 000350 */ 			var __accu0__ = render_context;
/* 000350 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'math');
/* 000350 */ 		}) ();
/* 000352 */ 		var refs_mgr = null;
/* 000353 */ 		if (__t__ ((function () {
/* 000353 */ 			var __accu0__ = render_context;
/* 000353 */ 			return __call__ (__accu0__.supports_feature, __accu0__, 'refs');
/* 000353 */ 		}) ())) {
/* 000354 */ 			var refs_mgr = (function () {
/* 000354 */ 				var __accu0__ = render_context;
/* 000354 */ 				return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000354 */ 			}) ();
/* 000354 */ 		}
/* 000357 */ 		var nodelist = __call__ (list, null, node.nodelist);
/* 000359 */ 		var target_id = null;
/* 000361 */ 		var lineno = 0;
/* 000362 */ 		var __iterable0__ = node.flm_equation_lines_labels_infos;
/* 000362 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000362 */ 			var line_infos = __getitem__ (__iterable0__, __index0__);
/* 000364 */ 			var nonumber = __getitem__ (line_infos, 'nonumber');
/* 000366 */ 			if (__t__ (nonumber)) {
/* 000366 */ 				continue;
/* 000366 */ 			}
/* 000369 */ 			var custom_tag_flm_text = __getitem__ (line_infos, 'custom_tag_flm_text');
/* 000373 */ 			var __left0__ = (function () {
/* 000373 */ 				var __accu0__ = math_mgr;
/* 000373 */ 				return __call__ (__accu0__.new_numbered_display_math, __accu0__, node, lineno, custom_tag_flm_text);
/* 000373 */ 			}) ();
/* 000373 */ 			var eq_id = __left0__ [0];
/* 000373 */ 			var formatted_ref_flm_text = __left0__ [1];
/* 000373 */ 			var eq_counter_number = __left0__ [2];
/* 000375 */ 			var this_target_id = 'equation-{}'.format (eq_id);
/* 000376 */ 			if (__t__ (target_id === null)) {
/* 000378 */ 				var target_id = this_target_id;
/* 000378 */ 			}
/* 000380 */ 			if (__t__ (!__t__ ((custom_tag_flm_text)))) {
/* 000383 */ 				var newline_node = __getitem__ (line_infos, 'newline_node');
/* 000384 */ 				if (__t__ (newline_node !== null)) {
/* 000385 */ 					var i = (function () {
/* 000385 */ 						var __accu0__ = nodelist;
/* 000385 */ 						return __call__ (__accu0__.index, __accu0__, newline_node);
/* 000385 */ 					}) ();
/* 000385 */ 				}
/* 000386 */ 				else {
/* 000387 */ 					var i = __call__ (len, null, nodelist);
/* 000387 */ 				}
/* 000388 */ 				(function () {
/* 000388 */ 					var __accu0__ = nodelist;
/* 000392 */ 					return __call__ (__accu0__.insert, __accu0__, i, __call__ (_ProxyNodeWithLatexVerbatim, null, __add__ (__add__ ('\\tag*{', formatted_ref_flm_text), '}')));
/* 000392 */ 				}) ();
/* 000392 */ 			}
/* 000399 */ 			var this_target_id = target_id;
/* 000402 */ 			if (__t__ (__t__ (refs_mgr !== null) && render_context.is_first_pass)) {
/* 000403 */ 				var __iterable1__ = __getitem__ (line_infos, 'labels');
/* 000403 */ 				for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000403 */ 					var label_info = __getitem__ (__iterable1__, __index1__);
/* 000404 */ 					var __left0__ = __getitem__ (label_info, 'label');
/* 000404 */ 					var ref_type = __left0__ [0];
/* 000404 */ 					var ref_label = __left0__ [1];
/* 000405 */ 					var counter_formatter_id = math_mgr.feature.counter_formatter.counter_formatter_id;
/* 000407 */ 					(function () {
/* 000407 */ 						var __accu0__ = refs_mgr;
/* 000407 */ 						return __call__ (__accu0__.register_reference, __accu0__, ref_type, ref_label, __kwargtrans__ ({node: node, formatted_ref_flm_text: formatted_ref_flm_text, target_href: '#{}'.format (this_target_id), counter_value: eq_counter_number, counter_formatter_id: counter_formatter_id}));
/* 000407 */ 					}) ();
/* 000407 */ 				}
/* 000407 */ 			}
/* 000415 */ 			var lineno = __call__ (__iadd__, null, lineno, 1);
/* 000415 */ 		}
/* 000418 */ 		return (function () {
/* 000418 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000420 */ 			return __call__ (__accu0__.render_math_content, __accu0__, tuple (['', '']), (function () {
/* 000420 */ 				var __accu1__ = latexnodes_nodes;
/* 000420 */ 				return __call__ (__accu1__.LatexNodeList, __accu1__, nodelist);
/* 000420 */ 			}) (), render_context, 'display', __kwargtrans__ ({environmentname: environmentname, target_id: target_id}));
/* 000420 */ 		}) ();
/* 000420 */ 	});}
/* 000420 */ });
/* 000430 */ export var MathEqrefMacro =  __class__ ('MathEqrefMacro', [FLMMacroSpecBase], {
/* 000430 */ 	__module__: __name__,
/* 000432 */ 	delayed_render: true,
/* 000434 */ 	allowed_in_standalone_mode: false,
/* 000439 */ 	get __init__ () {return __get__ (this, function (self, macroname, ref_type) {
/* 000439 */ 		if (typeof macroname == 'undefined' || (macroname != null && macroname.hasOwnProperty ("__kwargtrans__"))) {;
/* 000439 */ 			var macroname = 'eqref';
/* 000439 */ 		};
/* 000439 */ 		if (typeof ref_type == 'undefined' || (ref_type != null && ref_type.hasOwnProperty ("__kwargtrans__"))) {;
/* 000439 */ 			var ref_type = 'eq';
/* 000439 */ 		};
/* 000439 */ 		var kwargs = dict ();
/* 000439 */ 		if (arguments.length) {
/* 000439 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000439 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000439 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000439 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000439 */ 					switch (__attrib0__) {
/* 000439 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000439 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000439 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000439 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000439 */ 					}
/* 000439 */ 				}
/* 000439 */ 				delete kwargs.__kwargtrans__;
/* 000439 */ 			}
/* 000439 */ 		}
/* 000439 */ 		else {
/* 000439 */ 		}
/* 000444 */ 		__call__ (__call__ (__super__, null, MathEqrefMacro, '__init__'), null, self, __kwargtrans__ ({macroname: macroname, arguments_spec_list: [__call__ (FLMArgumentSpec, null, (function () {
/* 000444 */ 			var __accu0__ = latexnodes_parsers;
/* 000444 */ 			return __call__ (__accu0__.LatexCharsGroupParser, __accu0__);
/* 000444 */ 		}) (), __kwargtrans__ ({argname: 'ref_label', flm_doc: __add__ (__add__ ('Equation label.  Must begin with the prefix ‘\\verbtext+', ref_type), ':+’')}))]}));
/* 000451 */ 		self.ref_type = ref_type;
/* 000451 */ 	});},
/* 000453 */ 	_fields: tuple (['macroname', 'ref_type']),
/* 000455 */ 	get get_flm_doc () {return __get__ (this, function (self) {
/* 000455 */ 		if (arguments.length) {
/* 000455 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000455 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000455 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000455 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000455 */ 					switch (__attrib0__) {
/* 000455 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000455 */ 					}
/* 000455 */ 				}
/* 000455 */ 			}
/* 000455 */ 		}
/* 000455 */ 		else {
/* 000455 */ 		}
/* 000456 */ 		return __add__ (__add__ ('Refer to an equation by its label.  The argument must be\n            a valid equation label which starts with \\verbcode+', self.ref_type), ':+.  You can place labels in display equations using the\n            \\verbcode+\\label{…}+ macro.');
/* 000456 */ 	});},
/* 000463 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000463 */ 		if (arguments.length) {
/* 000463 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000463 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000463 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000463 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000463 */ 					switch (__attrib0__) {
/* 000463 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000463 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000463 */ 					}
/* 000463 */ 				}
/* 000463 */ 			}
/* 000463 */ 		}
/* 000463 */ 		else {
/* 000463 */ 		}
/* 000465 */ 		var node_args = (function () {
/* 000465 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000465 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['ref_label']));
/* 000465 */ 		}) ();
/* 000469 */ 		var ref_type = null;
/* 000470 */ 		var ref_label = (function () {
/* 000470 */ 			var __accu0__ = __getitem__ (node_args, 'ref_label');
/* 000470 */ 			return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000470 */ 		}) ();
/* 000471 */ 		if (__t__ (__in__ (':', ref_label))) {
/* 000472 */ 			var __left0__ = (function () {
/* 000472 */ 				var __accu0__ = ref_label;
/* 000472 */ 				return __call__ (__accu0__.py_split, __accu0__, ':', 1);
/* 000472 */ 			}) ();
/* 000472 */ 			var ref_type = __left0__ [0];
/* 000472 */ 			var ref_label = __left0__ [1];
/* 000472 */ 		}
/* 000474 */ 		if (__t__ (__ne__ (ref_type, self.ref_type))) {
/* 000475 */ 			var __except0__ = __call__ (LatexWalkerLocatedError, null, 'Equation labels must begin with “{}:” (error in ‘\\{}’)'.format (self.ref_type, node.macroname), __kwargtrans__ ({pos: node.pos}));
/* 000475 */ 			__except0__.__cause__ = null;
/* 000475 */ 			throw __except0__;
/* 000475 */ 		}
/* 000481 */ 		node.flmarg_ref = tuple ([ref_type, ref_label]);
/* 000481 */ 	});},
/* 000484 */ 	get prepare_delayed_render () {return __get__ (this, function (self, node, render_context) {
/* 000484 */ 		if (arguments.length) {
/* 000484 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000484 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000484 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000484 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000484 */ 					switch (__attrib0__) {
/* 000484 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000484 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000484 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000484 */ 					}
/* 000484 */ 				}
/* 000484 */ 			}
/* 000484 */ 		}
/* 000484 */ 		else {
/* 000484 */ 		}
/* 000485 */ 		// pass;
/* 000485 */ 	});},
/* 000487 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000487 */ 		if (arguments.length) {
/* 000487 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000487 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000487 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000487 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000487 */ 					switch (__attrib0__) {
/* 000487 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000487 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000487 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000487 */ 					}
/* 000487 */ 				}
/* 000487 */ 			}
/* 000487 */ 		}
/* 000487 */ 		else {
/* 000487 */ 		}
/* 000489 */ 		var __left0__ = node.flmarg_ref;
/* 000489 */ 		var ref_type = __left0__ [0];
/* 000489 */ 		var ref_label = __left0__ [1];
/* 000491 */ 		var refs_mgr = (function () {
/* 000491 */ 			var __accu0__ = render_context;
/* 000491 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000491 */ 		}) ();
/* 000493 */ 		var resource_info = node.latex_walker.resource_info;
/* 000495 */ 		try {
/* 000496 */ 			return (function () {
/* 000496 */ 				var __accu0__ = refs_mgr;
/* 000496 */ 				return __call__ (__accu0__.render_ref, __accu0__, ref_type, ref_label, null, resource_info, __kwargtrans__ ({counter_with_prefix: false}));
/* 000496 */ 			}) ();
/* 000496 */ 		}
/* 000496 */ 		catch (__except0__) {
/* 000496 */ 			if (isinstance (__except0__, Exception)) {
/* 000496 */ 				var e = __except0__;
/* 000503 */ 				(function () {
/* 000503 */ 					var __accu0__ = logger;
/* 000504 */ 					return __call__ (__accu0__.error, __accu0__, 'Failed to resolve reference to ‘{}:{}’: {} in ‘{}’ @ {}'.format (ref_type, ref_label, e, (function () {
/* 000504 */ 						var __accu1__ = node;
/* 000504 */ 						return __call__ (__accu1__.latex_verbatim, __accu1__);
/* 000504 */ 					}) (), (function () {
/* 000504 */ 						var __accu1__ = node;
/* 000504 */ 						return __call__ (__accu1__.format_pos, __accu1__);
/* 000504 */ 					}) ()));
/* 000504 */ 				}) ();
/* 000505 */ 				var __except1__ = __call__ (LatexWalkerLocatedError, null, 'Unable to resolve reference to ‘{}:{}’. {}'.format (ref_type, ref_label, e), __kwargtrans__ ({pos: node.pos}));
/* 000505 */ 				__except1__.__cause__ = null;
/* 000505 */ 				throw __except1__;
/* 000505 */ 			}
/* 000505 */ 			else {
/* 000505 */ 				throw __except0__;
/* 000505 */ 			}
/* 000505 */ 		}
/* 000505 */ 	});}
/* 000505 */ });
/* 000514 */ export var FeatureClass = FeatureMath;
/* 000007 */ 
//# sourceMappingURL=flm.feature.math.map