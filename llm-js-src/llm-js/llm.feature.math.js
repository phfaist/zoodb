/* 000001 */ // Transcrypt'ed from Python, 2023-04-09 00:31:37
/* 000006 */ var logging = {};
/* 000006 */ var re = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000028 */ import {Counter, build_counter_formatter} from './llm.counter.js';
/* 000026 */ import {Feature} from './llm.feature._base.js';
/* 000024 */ import {LLMArgumentSpec} from './llm.llmenvironment.js';
/* 000023 */ import {LLMEnvironmentSpecBase, LLMMacroSpecBase} from './llm.llmspecinfo.js';
/* 000017 */ import {LatexEnvironmentBodyContentsParser, MacroSpec, ParsingStateDeltaExtendLatexContextDb} from './pylatexenc.macrospec.js';
/* 000016 */ import * as latexnodes_parsers from './pylatexenc.latexnodes.parsers.js';
/* 000015 */ import * as latexnodes_nodes from './pylatexenc.latexnodes.nodes.js';
/* 000010 */ import {LatexWalkerParseError, ParsedArgumentsInfo, ParsingStateDeltaEnterMathMode} from './pylatexenc.latexnodes.js';
/* 000007 */ import * as __module_logging__ from './logging.js';
/* 000007 */ __nest__ (logging, '', __module_logging__);
/* 000006 */ import * as __module_re__ from './re.js';
/* 000006 */ __nest__ (re, '', __module_re__);
/* 000006 */ export {LLMArgumentSpec, MacroSpec, LLMEnvironmentSpecBase, LatexEnvironmentBodyContentsParser, latexnodes_nodes, ParsingStateDeltaEnterMathMode, build_counter_formatter, Counter, Feature, LatexWalkerParseError, latexnodes_parsers, ParsedArgumentsInfo, LLMMacroSpecBase, ParsingStateDeltaExtendLatexContextDb};
/* 000001 */ var __name__ = 'llm.feature.math';
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
/* 000064 */ 	get feature_llm_doc () {return __get__ (this, function (self) {
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
/* 000092 */ 		self.counter_formatter = __call__ (build_counter_formatter, null, counter_formatter, eq_default_counter_formatter_spec);
/* 000097 */ 		if (__t__ (math_environment_names === null)) {
/* 000098 */ 			var math_environment_names = _default_math_environment_names;
/* 000098 */ 		}
/* 000099 */ 		self.math_environment_names = math_environment_names;
/* 000101 */ 		self.eqref_macro_name = eqref_macro_name;
/* 000102 */ 		self.eqref_ref_type = eqref_ref_type;
/* 000104 */ 	});},
/* 000104 */ 	DocumentManager: __class__ ('DocumentManager', [Feature.DocumentManager], {
/* 000104 */ 		__module__: __name__,
/* 000105 */ 		get initialize () {return __get__ (this, function (self) {
/* 000105 */ 			if (arguments.length) {
/* 000105 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000105 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000105 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000105 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000105 */ 						switch (__attrib0__) {
/* 000105 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000105 */ 						}
/* 000105 */ 					}
/* 000105 */ 				}
/* 000105 */ 			}
/* 000105 */ 			else {
/* 000105 */ 			}
/* 000106 */ 			// pass;
/* 000106 */ 		});}
/* 000108 */ 	}),
/* 000108 */ 	RenderManager: __class__ ('RenderManager', [Feature.RenderManager], {
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
/* 000110 */ 			self.equation_counter = __call__ (Counter, null, self.feature.counter_formatter);
/* 000112 */ 			self.equation_info_by_node = dict ({});
/* 000114 */ 			if (__t__ ((function () {
/* 000114 */ 				var __accu0__ = self.render_context;
/* 000114 */ 				return __call__ (__accu0__.supports_feature, __accu0__, 'refs');
/* 000114 */ 			}) ())) {
/* 000115 */ 				var refs_mgr = (function () {
/* 000115 */ 					var __accu0__ = self.render_context;
/* 000115 */ 					return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000115 */ 				}) ();
/* 000116 */ 				(function () {
/* 000116 */ 					var __accu0__ = refs_mgr;
/* 000116 */ 					return __call__ (__accu0__.register_counter_formatter, __accu0__, self.feature.eqref_ref_type, self.feature.counter_formatter);
/* 000116 */ 				}) ();
/* 000116 */ 			}
/* 000116 */ 		});},
/* 000121 */ 		get new_numbered_display_math () {return __get__ (this, function (self, node, lineno, custom_tag_llm_text) {
/* 000121 */ 			if (typeof custom_tag_llm_text == 'undefined' || (custom_tag_llm_text != null && custom_tag_llm_text.hasOwnProperty ("__kwargtrans__"))) {;
/* 000121 */ 				var custom_tag_llm_text = null;
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
/* 000121 */ 							case 'custom_tag_llm_text': var custom_tag_llm_text = __allkwargs0__ [__attrib0__]; break;
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
/* 000127 */ 			if (__t__ (custom_tag_llm_text !== null)) {
/* 000128 */ 				var formatted_ref_llm_text = custom_tag_llm_text;
/* 000129 */ 				var eq_id = '_{}'.format (__getitem__ (key, 0));
/* 000130 */ 				if (__t__ (lineno)) {
/* 000131 */ 					var eq_id = __call__ (__iadd__, null, eq_id, '-{}'.format (lineno));
/* 000131 */ 				}
/* 000132 */ 				var eq_counter_number = null;
/* 000132 */ 			}
/* 000133 */ 			else {
/* 000135 */ 				var __left0__ = (function () {
/* 000135 */ 					var __accu0__ = self.equation_counter;
/* 000135 */ 					return __call__ (__accu0__.step_and_format_llm, __accu0__);
/* 000135 */ 				}) ();
/* 000135 */ 				var eq_id = __left0__ [0];
/* 000135 */ 				var formatted_ref_llm_text = __left0__ [1];
/* 000136 */ 				var eq_counter_number = eq_id;
/* 000136 */ 			}
/* 000138 */ 			var info = tuple ([eq_id, formatted_ref_llm_text, eq_counter_number]);
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
/* 000177 */ export var MathEnvironment =  __class__ ('MathEnvironment', [LLMEnvironmentSpecBase], {
/* 000177 */ 	__module__: __name__,
/* 000182 */ 	get get_llm_doc () {return __get__ (this, function (self) {
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
/* 000198 */ 	get make_body_parsing_state_delta () {return __get__ (this, function (self, token, nodeargd, arg_parsing_state_delta, latex_walker) {
/* 000198 */ 		var kwargs = dict ();
/* 000198 */ 		if (arguments.length) {
/* 000198 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000198 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000198 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000198 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000198 */ 					switch (__attrib0__) {
/* 000198 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000198 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000198 */ 						case 'nodeargd': var nodeargd = __allkwargs0__ [__attrib0__]; break;
/* 000198 */ 						case 'arg_parsing_state_delta': var arg_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000198 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000198 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000198 */ 					}
/* 000198 */ 				}
/* 000198 */ 				delete kwargs.__kwargtrans__;
/* 000198 */ 			}
/* 000198 */ 		}
/* 000198 */ 		else {
/* 000198 */ 		}
/* 000200 */ 		return __call__ (ParsingStateDeltaEnterMathMode, null);
/* 000200 */ 	});},
/* 000202 */ 	get make_body_parser () {return __get__ (this, function (self, token, nodeargd, arg_parsing_state_delta) {
/* 000202 */ 		if (arguments.length) {
/* 000202 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000202 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000202 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000202 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000202 */ 					switch (__attrib0__) {
/* 000202 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000202 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000202 */ 						case 'nodeargd': var nodeargd = __allkwargs0__ [__attrib0__]; break;
/* 000202 */ 						case 'arg_parsing_state_delta': var arg_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000202 */ 					}
/* 000202 */ 				}
/* 000202 */ 			}
/* 000202 */ 		}
/* 000202 */ 		else {
/* 000202 */ 		}
/* 000210 */ 		return __call__ (LatexEnvironmentBodyContentsParser, null, __kwargtrans__ ({environmentname: token.arg, contents_parsing_state_delta: __call__ (ParsingStateDeltaExtendLatexContextDb, null, __kwargtrans__ ({extend_latex_context: __call__ (dict, null, __kwargtrans__ ({macros: [__call__ (MacroSpec, null, 'label', __kwargtrans__ ({arguments_spec_list: [__call__ (LLMArgumentSpec, null, __kwargtrans__ ({parser: (function () {
/* 000210 */ 			var __accu0__ = latexnodes_parsers;
/* 000210 */ 			return __call__ (__accu0__.LatexCharsGroupParser, __accu0__, __kwargtrans__ ({delimiters: tuple (['{', '}'])}));
/* 000222 */ 		}) (), argname: 'label'}))]})), __call__ (MacroSpec, null, 'tag', __kwargtrans__ ({arguments_spec_list: [__call__ (LLMArgumentSpec, null, __kwargtrans__ ({parser: '*', argname: 'tag_star'})), __call__ (LLMArgumentSpec, null, __kwargtrans__ ({parser: (function () {
/* 000222 */ 			var __accu0__ = latexnodes_parsers;
/* 000222 */ 			return __call__ (__accu0__.LatexCharsGroupParser, __accu0__, __kwargtrans__ ({delimiters: tuple (['{', '}'])}));
/* 000228 */ 		}) (), argname: 'text'}))]})), __call__ (MacroSpec, null, '\\', __kwargtrans__ ({arguments_spec_list: []}))]}))}))}));
/* 000228 */ 	});},
/* 000234 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000234 */ 		if (arguments.length) {
/* 000234 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000234 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000234 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000234 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000234 */ 					switch (__attrib0__) {
/* 000234 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000234 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000234 */ 					}
/* 000234 */ 				}
/* 000234 */ 			}
/* 000234 */ 		}
/* 000234 */ 		else {
/* 000234 */ 		}
/* 000240 */ 		node.llm_equation_lines_labels_infos = [];
/* 000242 */ 		if (__t__ (!__t__ ((self.is_numbered)))) {
/* 000243 */ 			return node;
/* 000243 */ 		}
/* 000245 */ 		var last_line_info = dict ({'labels_info': [], 'custom_tag_llm_text': null});
/* 000249 */ 		var _flush_last_equation_line_labels_infos = function (newline_node) {
/* 000249 */ 			if (typeof newline_node == 'undefined' || (newline_node != null && newline_node.hasOwnProperty ("__kwargtrans__"))) {;
/* 000249 */ 				var newline_node = null;
/* 000249 */ 			};
/* 000249 */ 			if (arguments.length) {
/* 000249 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000249 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000249 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000249 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000249 */ 						switch (__attrib0__) {
/* 000249 */ 							case 'newline_node': var newline_node = __allkwargs0__ [__attrib0__]; break;
/* 000249 */ 						}
/* 000249 */ 					}
/* 000249 */ 				}
/* 000249 */ 			}
/* 000249 */ 			else {
/* 000249 */ 			}
/* 000250 */ 			(function () {
/* 000250 */ 				var __accu0__ = node.llm_equation_lines_labels_infos;
/* 000251 */ 				return __call__ (__accu0__.append, __accu0__, dict ({'labels': __call__ (list, null, __getitem__ (last_line_info, 'labels_info')), 'custom_tag_llm_text': __getitem__ (last_line_info, 'custom_tag_llm_text'), 'newline_node': newline_node}));
/* 000251 */ 			}) ();
/* 000255 */ 			(function () {
/* 000255 */ 				var __accu0__ = last_line_info;
/* 000255 */ 				return __call__ (__accu0__.py_update, __accu0__, dict ({'labels_info': [], 'custom_tag_llm_text': null}));
/* 000255 */ 			}) ();
/* 000255 */ 		};
/* 000260 */ 		var last_node_is_newline = false;
/* 000261 */ 		var __iterable0__ = node.nodelist;
/* 000261 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000261 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000262 */ 			if (__t__ (__t__ ((function () {
/* 000262 */ 				var __accu0__ = n;
/* 000262 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000262 */ 			}) ()) && __eq__ (n.macroname, 'label'))) {
/* 000267 */ 				var ref_label_node_args = (function () {
/* 000267 */ 					var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: n}));
/* 000267 */ 					return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['label']));
/* 000267 */ 				}) ();
/* 000270 */ 				var ref_label_full = (function () {
/* 000270 */ 					var __accu0__ = __getitem__ (ref_label_node_args, 'label');
/* 000270 */ 					return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000270 */ 				}) ();
/* 000272 */ 				if (__t__ (__in__ (':', ref_label_full))) {
/* 000273 */ 					var __left0__ = (function () {
/* 000273 */ 						var __accu0__ = ref_label_full;
/* 000273 */ 						return __call__ (__accu0__.py_split, __accu0__, ':', 1);
/* 000273 */ 					}) ();
/* 000273 */ 					var ref_type = __left0__ [0];
/* 000273 */ 					var ref_label = __left0__ [1];
/* 000273 */ 				}
/* 000274 */ 				else {
/* 000275 */ 					var __left0__ = tuple ([null, ref_label_full]);
/* 000275 */ 					var ref_type = __left0__ [0];
/* 000275 */ 					var ref_label = __left0__ [1];
/* 000275 */ 				}
/* 000277 */ 				var info = dict ({'node': n, 'label': tuple ([ref_type, ref_label])});
/* 000282 */ 				(function () {
/* 000282 */ 					var __accu0__ = __getitem__ (last_line_info, 'labels_info');
/* 000282 */ 					return __call__ (__accu0__.append, __accu0__, info);
/* 000282 */ 				}) ();
/* 000282 */ 			}
/* 000284 */ 			else if (__t__ (__t__ ((function () {
/* 000284 */ 				var __accu0__ = n;
/* 000284 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000284 */ 			}) ()) && __eq__ (n.macroname, 'tag'))) {
/* 000287 */ 				var tag_node_args = (function () {
/* 000287 */ 					var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: n}));
/* 000287 */ 					return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['tag_star', 'text']));
/* 000287 */ 				}) ();
/* 000292 */ 				var custom_tag_llm_text = (function () {
/* 000292 */ 					var __accu0__ = (function () {
/* 000292 */ 						var __accu1__ = __getitem__ (tag_node_args, 'text');
/* 000292 */ 						return __call__ (__accu1__.get_content_nodelist, __accu1__);
/* 000292 */ 					}) ();
/* 000292 */ 					return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000292 */ 				}) ();
/* 000293 */ 				if (__t__ (!__t__ (((function () {
/* 000293 */ 					var __accu0__ = __getitem__ (tag_node_args, 'tag_star');
/* 000293 */ 					return __call__ (__accu0__.was_provided, __accu0__);
/* 000293 */ 				}) ())))) {
/* 000294 */ 					var custom_tag_llm_text = '({})'.format (custom_tag_llm_text);
/* 000294 */ 				}
/* 000296 */ 				__setitem__ (last_line_info, 'custom_tag_llm_text', custom_tag_llm_text);
/* 000296 */ 			}
/* 000298 */ 			else if (__t__ (__t__ ((function () {
/* 000298 */ 				var __accu0__ = n;
/* 000298 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000298 */ 			}) ()) && __eq__ (n.macroname, '\\'))) {
/* 000299 */ 				__call__ (_flush_last_equation_line_labels_infos, null, n);
/* 000300 */ 				var last_node_is_newline = true;
/* 000300 */ 			}
/* 000302 */ 			else if (__t__ (__t__ (!__t__ (((function () {
/* 000302 */ 				var __accu0__ = n;
/* 000302 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCommentNode);
/* 000303 */ 			}) ()))) && !__t__ ((__t__ ((function () {
/* 000303 */ 				var __accu0__ = n;
/* 000303 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000303 */ 			}) ()) && !__t__ (((function () {
/* 000303 */ 				var __accu0__ = n.chars;
/* 000303 */ 				return __call__ (__accu0__.strip, __accu0__);
/* 000303 */ 			}) ())))))) {
/* 000305 */ 				var last_node_is_newline = false;
/* 000305 */ 			}
/* 000305 */ 		}
/* 000307 */ 		if (__t__ (!__t__ ((last_node_is_newline)))) {
/* 000308 */ 			__call__ (_flush_last_equation_line_labels_infos, null);
/* 000308 */ 		}
/* 000310 */ 		return node;
/* 000310 */ 	});},
/* 000313 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000313 */ 		if (arguments.length) {
/* 000313 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000313 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000313 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000313 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000313 */ 					switch (__attrib0__) {
/* 000313 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000313 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000313 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000313 */ 					}
/* 000313 */ 				}
/* 000313 */ 			}
/* 000313 */ 		}
/* 000313 */ 		else {
/* 000313 */ 		}
/* 000316 */ 		var environmentname = node.environmentname;
/* 000318 */ 		if (__t__ (!__t__ (((function () {
/* 000318 */ 			var __accu0__ = render_context;
/* 000318 */ 			return __call__ (__accu0__.supports_feature, __accu0__, 'math');
/* 000318 */ 		}) ())))) {
/* 000319 */ 			var __except0__ = __call__ (ValueError, null, "Feature 'math' is not enabled, cannot render math environment");
/* 000319 */ 			__except0__.__cause__ = null;
/* 000319 */ 			throw __except0__;
/* 000319 */ 		}
/* 000321 */ 		var math_mgr = (function () {
/* 000321 */ 			var __accu0__ = render_context;
/* 000321 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'math');
/* 000321 */ 		}) ();
/* 000323 */ 		var refs_mgr = null;
/* 000324 */ 		if (__t__ ((function () {
/* 000324 */ 			var __accu0__ = render_context;
/* 000324 */ 			return __call__ (__accu0__.supports_feature, __accu0__, 'refs');
/* 000324 */ 		}) ())) {
/* 000325 */ 			var refs_mgr = (function () {
/* 000325 */ 				var __accu0__ = render_context;
/* 000325 */ 				return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000325 */ 			}) ();
/* 000325 */ 		}
/* 000328 */ 		var nodelist = __call__ (list, null, node.nodelist);
/* 000330 */ 		var target_id = null;
/* 000332 */ 		var __iterable0__ = __call__ (enumerate, null, node.llm_equation_lines_labels_infos);
/* 000332 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000332 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000332 */ 			var lineno = __left0__ [0];
/* 000332 */ 			var line_infos = __left0__ [1];
/* 000334 */ 			var custom_tag_llm_text = __getitem__ (line_infos, 'custom_tag_llm_text');
/* 000338 */ 			var __left0__ = (function () {
/* 000338 */ 				var __accu0__ = math_mgr;
/* 000338 */ 				return __call__ (__accu0__.new_numbered_display_math, __accu0__, node, lineno, custom_tag_llm_text);
/* 000338 */ 			}) ();
/* 000338 */ 			var eq_id = __left0__ [0];
/* 000338 */ 			var formatted_ref_llm_text = __left0__ [1];
/* 000338 */ 			var eq_counter_number = __left0__ [2];
/* 000340 */ 			var this_target_id = 'equation-{}'.format (eq_id);
/* 000341 */ 			if (__t__ (target_id === null)) {
/* 000343 */ 				var target_id = this_target_id;
/* 000343 */ 			}
/* 000345 */ 			if (__t__ (!__t__ ((custom_tag_llm_text)))) {
/* 000348 */ 				var newline_node = __getitem__ (line_infos, 'newline_node');
/* 000349 */ 				if (__t__ (newline_node !== null)) {
/* 000350 */ 					var i = (function () {
/* 000350 */ 						var __accu0__ = nodelist;
/* 000350 */ 						return __call__ (__accu0__.index, __accu0__, newline_node);
/* 000350 */ 					}) ();
/* 000350 */ 				}
/* 000351 */ 				else {
/* 000352 */ 					var i = __call__ (len, null, nodelist);
/* 000352 */ 				}
/* 000353 */ 				(function () {
/* 000353 */ 					var __accu0__ = nodelist;
/* 000355 */ 					return __call__ (__accu0__.insert, __accu0__, i, __call__ (_ProxyNodeWithLatexVerbatim, null, __add__ (__add__ ('\\tag*{', formatted_ref_llm_text), '}')));
/* 000355 */ 				}) ();
/* 000355 */ 			}
/* 000362 */ 			var this_target_id = target_id;
/* 000365 */ 			if (__t__ (__t__ (refs_mgr !== null) && render_context.is_first_pass)) {
/* 000366 */ 				var __iterable1__ = __getitem__ (line_infos, 'labels');
/* 000366 */ 				for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000366 */ 					var label_info = __getitem__ (__iterable1__, __index1__);
/* 000367 */ 					var __left0__ = __getitem__ (label_info, 'label');
/* 000367 */ 					var ref_type = __left0__ [0];
/* 000367 */ 					var ref_label = __left0__ [1];
/* 000368 */ 					(function () {
/* 000368 */ 						var __accu0__ = refs_mgr;
/* 000368 */ 						return __call__ (__accu0__.register_reference, __accu0__, ref_type, ref_label, __kwargtrans__ ({node: node, formatted_ref_llm_text: formatted_ref_llm_text, target_href: '#{}'.format (this_target_id), counter_value: eq_counter_number}));
/* 000368 */ 					}) ();
/* 000368 */ 				}
/* 000368 */ 			}
/* 000368 */ 		}
/* 000375 */ 		return (function () {
/* 000375 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000377 */ 			return __call__ (__accu0__.render_math_content, __accu0__, tuple (['\\begin{}{}{}'.format ('{', environmentname, '}'), '\\end{}{}{}'.format ('{', environmentname, '}')]), (function () {
/* 000377 */ 				var __accu1__ = latexnodes_nodes;
/* 000377 */ 				return __call__ (__accu1__.LatexNodeList, __accu1__, nodelist);
/* 000377 */ 			}) (), render_context, 'display', __kwargtrans__ ({environmentname: environmentname, target_id: target_id}));
/* 000377 */ 		}) ();
/* 000377 */ 	});}
/* 000377 */ });
/* 000387 */ export var MathEqrefMacro =  __class__ ('MathEqrefMacro', [LLMMacroSpecBase], {
/* 000387 */ 	__module__: __name__,
/* 000389 */ 	delayed_render: true,
/* 000391 */ 	allowed_in_standalone_mode: false,
/* 000396 */ 	get __init__ () {return __get__ (this, function (self, macroname, ref_type) {
/* 000396 */ 		if (typeof macroname == 'undefined' || (macroname != null && macroname.hasOwnProperty ("__kwargtrans__"))) {;
/* 000396 */ 			var macroname = 'eqref';
/* 000396 */ 		};
/* 000396 */ 		if (typeof ref_type == 'undefined' || (ref_type != null && ref_type.hasOwnProperty ("__kwargtrans__"))) {;
/* 000396 */ 			var ref_type = 'eq';
/* 000396 */ 		};
/* 000396 */ 		var kwargs = dict ();
/* 000396 */ 		if (arguments.length) {
/* 000396 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000396 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000396 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000396 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000396 */ 					switch (__attrib0__) {
/* 000396 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000396 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000396 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000396 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000396 */ 					}
/* 000396 */ 				}
/* 000396 */ 				delete kwargs.__kwargtrans__;
/* 000396 */ 			}
/* 000396 */ 		}
/* 000396 */ 		else {
/* 000396 */ 		}
/* 000401 */ 		__call__ (__call__ (__super__, null, MathEqrefMacro, '__init__'), null, self, __kwargtrans__ ({macroname: macroname, arguments_spec_list: [__call__ (LLMArgumentSpec, null, (function () {
/* 000401 */ 			var __accu0__ = latexnodes_parsers;
/* 000401 */ 			return __call__ (__accu0__.LatexCharsGroupParser, __accu0__);
/* 000401 */ 		}) (), __kwargtrans__ ({argname: 'ref_label', llm_doc: __add__ (__add__ ('Equation label.  Must begin with the prefix ‘\\verbtext+', ref_type), ':+’')}))]}));
/* 000408 */ 		self.ref_type = ref_type;
/* 000408 */ 	});},
/* 000410 */ 	get get_llm_doc () {return __get__ (this, function (self) {
/* 000410 */ 		if (arguments.length) {
/* 000410 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000410 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000410 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000410 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000410 */ 					switch (__attrib0__) {
/* 000410 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000410 */ 					}
/* 000410 */ 				}
/* 000410 */ 			}
/* 000410 */ 		}
/* 000410 */ 		else {
/* 000410 */ 		}
/* 000411 */ 		return __add__ (__add__ ('Refer to an equation by its label.  The argument must be\n            a valid equation label which starts with \\verbcode+', self.ref_type), ':+.  You can place labels in display equations using the\n            \\verbcode+\\label{…}+ macro.');
/* 000411 */ 	});},
/* 000418 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000418 */ 		if (arguments.length) {
/* 000418 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000418 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000418 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000418 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000418 */ 					switch (__attrib0__) {
/* 000418 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000418 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000418 */ 					}
/* 000418 */ 				}
/* 000418 */ 			}
/* 000418 */ 		}
/* 000418 */ 		else {
/* 000418 */ 		}
/* 000420 */ 		var node_args = (function () {
/* 000420 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000420 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['ref_label']));
/* 000420 */ 		}) ();
/* 000424 */ 		var ref_type = null;
/* 000425 */ 		var ref_label = (function () {
/* 000425 */ 			var __accu0__ = __getitem__ (node_args, 'ref_label');
/* 000425 */ 			return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000425 */ 		}) ();
/* 000426 */ 		if (__t__ (__in__ (':', ref_label))) {
/* 000427 */ 			var __left0__ = (function () {
/* 000427 */ 				var __accu0__ = ref_label;
/* 000427 */ 				return __call__ (__accu0__.py_split, __accu0__, ':', 1);
/* 000427 */ 			}) ();
/* 000427 */ 			var ref_type = __left0__ [0];
/* 000427 */ 			var ref_label = __left0__ [1];
/* 000427 */ 		}
/* 000429 */ 		if (__t__ (__ne__ (ref_type, self.ref_type))) {
/* 000430 */ 			var __except0__ = __call__ (LatexWalkerParseError, null, 'Equation labels must begin with “{}:” (error in ‘\\{}’)'.format (self.ref_type, node.macroname), __kwargtrans__ ({pos: node.pos}));
/* 000430 */ 			__except0__.__cause__ = null;
/* 000430 */ 			throw __except0__;
/* 000430 */ 		}
/* 000436 */ 		node.llmarg_ref = tuple ([ref_type, ref_label]);
/* 000436 */ 	});},
/* 000439 */ 	get prepare_delayed_render () {return __get__ (this, function (self, node, render_context) {
/* 000439 */ 		if (arguments.length) {
/* 000439 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000439 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000439 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000439 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000439 */ 					switch (__attrib0__) {
/* 000439 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000439 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000439 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000439 */ 					}
/* 000439 */ 				}
/* 000439 */ 			}
/* 000439 */ 		}
/* 000439 */ 		else {
/* 000439 */ 		}
/* 000440 */ 		// pass;
/* 000440 */ 	});},
/* 000442 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000442 */ 		if (arguments.length) {
/* 000442 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000442 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000442 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000442 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000442 */ 					switch (__attrib0__) {
/* 000442 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000442 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000442 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000442 */ 					}
/* 000442 */ 				}
/* 000442 */ 			}
/* 000442 */ 		}
/* 000442 */ 		else {
/* 000442 */ 		}
/* 000444 */ 		var __left0__ = node.llmarg_ref;
/* 000444 */ 		var ref_type = __left0__ [0];
/* 000444 */ 		var ref_label = __left0__ [1];
/* 000446 */ 		var refs_mgr = (function () {
/* 000446 */ 			var __accu0__ = render_context;
/* 000446 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000446 */ 		}) ();
/* 000448 */ 		var resource_info = node.latex_walker.resource_info;
/* 000450 */ 		try {
/* 000451 */ 			return (function () {
/* 000451 */ 				var __accu0__ = refs_mgr;
/* 000451 */ 				return __call__ (__accu0__.render_ref, __accu0__, ref_type, ref_label, null, resource_info, render_context, __kwargtrans__ ({counter_with_prefix: false}));
/* 000451 */ 			}) ();
/* 000451 */ 		}
/* 000451 */ 		catch (__except0__) {
/* 000451 */ 			if (isinstance (__except0__, Exception)) {
/* 000451 */ 				var e = __except0__;
/* 000459 */ 				(function () {
/* 000459 */ 					var __accu0__ = logger;
/* 000460 */ 					return __call__ (__accu0__.error, __accu0__, 'Failed to resolve reference to ‘{}:{}’: {} in ‘{}’ @ {}'.format (ref_type, ref_label, e, (function () {
/* 000460 */ 						var __accu1__ = node;
/* 000460 */ 						return __call__ (__accu1__.latex_verbatim, __accu1__);
/* 000460 */ 					}) (), (function () {
/* 000460 */ 						var __accu1__ = node;
/* 000460 */ 						return __call__ (__accu1__.format_pos, __accu1__);
/* 000460 */ 					}) ()));
/* 000460 */ 				}) ();
/* 000461 */ 				var __except1__ = __call__ (LatexWalkerParseError, null, 'Unable to resolve reference to ‘{}:{}’. {}'.format (ref_type, ref_label, e), __kwargtrans__ ({pos: node.pos}));
/* 000461 */ 				__except1__.__cause__ = null;
/* 000461 */ 				throw __except1__;
/* 000461 */ 			}
/* 000461 */ 			else {
/* 000461 */ 				throw __except0__;
/* 000461 */ 			}
/* 000461 */ 		}
/* 000461 */ 	});}
/* 000461 */ });
/* 000470 */ export var FeatureClass = FeatureMath;
/* 000006 */ 
//# sourceMappingURL=llm.feature.math.map