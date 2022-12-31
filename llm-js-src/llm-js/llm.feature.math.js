/* 000001 */ // Transcrypt'ed from Python, 2022-12-31 14:28:56
/* 000006 */ var logging = {};
/* 000006 */ var re = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000028 */ import * as fmthelpers from './llm.fmthelpers.js';
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
/* 000006 */ export {LLMMacroSpecBase, LLMArgumentSpec, LLMEnvironmentSpecBase, LatexEnvironmentBodyContentsParser, Feature, ParsingStateDeltaExtendLatexContextDb, ParsingStateDeltaEnterMathMode, MacroSpec, latexnodes_parsers, ParsedArgumentsInfo, fmthelpers, LatexWalkerParseError, latexnodes_nodes};
/* 000001 */ var __name__ = 'llm.feature.math';
/* 000008 */ export var logger = (function () {
/* 000008 */ 	var __accu0__ = logging;
/* 000008 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000008 */ }) ();
/* 000033 */ export var sanitize_for_id = function (x) {
/* 000033 */ 	if (arguments.length) {
/* 000033 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000033 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000033 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000033 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000033 */ 				switch (__attrib0__) {
/* 000033 */ 					case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000033 */ 				}
/* 000033 */ 			}
/* 000033 */ 		}
/* 000033 */ 	}
/* 000033 */ 	else {
/* 000033 */ 	}
/* 000034 */ 	return (function () {
/* 000034 */ 		var __accu0__ = re;
/* 000034 */ 		return __call__ (__accu0__.sub, __accu0__, '[^a-zA-Z0-9_-]', '-', x);
/* 000034 */ 	}) ();
/* 000034 */ };
/* 000038 */ export var _default_math_environment_names = tuple (['equation', 'equation*', 'align', 'align*', 'gather', 'gather*']);
/* 000048 */ export var FeatureMath =  __class__ ('FeatureMath', [Feature], {
/* 000048 */ 	__module__: __name__,
/* 000050 */ 	feature_name: 'math',
/* 000052 */ 	get __init__ () {return __get__ (this, function (self, eq_counter_formatter, math_environment_names, eqref_macro_name, eqref_ref_type) {
/* 000052 */ 		if (typeof eq_counter_formatter == 'undefined' || (eq_counter_formatter != null && eq_counter_formatter.hasOwnProperty ("__kwargtrans__"))) {;
/* 000052 */ 			var eq_counter_formatter = null;
/* 000052 */ 		};
/* 000052 */ 		if (typeof math_environment_names == 'undefined' || (math_environment_names != null && math_environment_names.hasOwnProperty ("__kwargtrans__"))) {;
/* 000052 */ 			var math_environment_names = null;
/* 000052 */ 		};
/* 000052 */ 		if (typeof eqref_macro_name == 'undefined' || (eqref_macro_name != null && eqref_macro_name.hasOwnProperty ("__kwargtrans__"))) {;
/* 000052 */ 			var eqref_macro_name = 'eqref';
/* 000052 */ 		};
/* 000052 */ 		if (typeof eqref_ref_type == 'undefined' || (eqref_ref_type != null && eqref_ref_type.hasOwnProperty ("__kwargtrans__"))) {;
/* 000052 */ 			var eqref_ref_type = 'eq';
/* 000052 */ 		};
/* 000052 */ 		if (arguments.length) {
/* 000052 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000052 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000052 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000052 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000052 */ 					switch (__attrib0__) {
/* 000052 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000052 */ 						case 'eq_counter_formatter': var eq_counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000052 */ 						case 'math_environment_names': var math_environment_names = __allkwargs0__ [__attrib0__]; break;
/* 000052 */ 						case 'eqref_macro_name': var eqref_macro_name = __allkwargs0__ [__attrib0__]; break;
/* 000052 */ 						case 'eqref_ref_type': var eqref_ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000052 */ 					}
/* 000052 */ 				}
/* 000052 */ 			}
/* 000052 */ 		}
/* 000052 */ 		else {
/* 000052 */ 		}
/* 000059 */ 		__call__ (__call__ (__super__, null, FeatureMath, '__init__'), null, self);
/* 000061 */ 		if (__t__ (eq_counter_formatter === null)) {
/* 000062 */ 			var eq_counter_formatter = dict ({'template': '(${arabic})'});
/* 000062 */ 		}
/* 000064 */ 		self.eq_counter_formatter = (function () {
/* 000064 */ 			var __accu0__ = fmthelpers;
/* 000064 */ 			return __call__ (__accu0__.parse_counter_formatter, __accu0__, eq_counter_formatter);
/* 000064 */ 		}) ();
/* 000066 */ 		if (__t__ (math_environment_names === null)) {
/* 000067 */ 			var math_environment_names = _default_math_environment_names;
/* 000067 */ 		}
/* 000068 */ 		self.math_environment_names = math_environment_names;
/* 000070 */ 		self.eqref_macro_name = eqref_macro_name;
/* 000071 */ 		self.eqref_ref_type = eqref_ref_type;
/* 000073 */ 	});},
/* 000073 */ 	DocumentManager: __class__ ('DocumentManager', [Feature.DocumentManager], {
/* 000073 */ 		__module__: __name__,
/* 000074 */ 		get initialize () {return __get__ (this, function (self) {
/* 000074 */ 			if (arguments.length) {
/* 000074 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000074 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000074 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000074 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000074 */ 						switch (__attrib0__) {
/* 000074 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000074 */ 						}
/* 000074 */ 					}
/* 000074 */ 				}
/* 000074 */ 			}
/* 000074 */ 			else {
/* 000074 */ 			}
/* 000075 */ 			// pass;
/* 000075 */ 		});}
/* 000077 */ 	}),
/* 000077 */ 	RenderManager: __class__ ('RenderManager', [Feature.RenderManager], {
/* 000077 */ 		__module__: __name__,
/* 000078 */ 		get initialize () {return __get__ (this, function (self) {
/* 000078 */ 			if (arguments.length) {
/* 000078 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000078 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000078 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000078 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000078 */ 						switch (__attrib0__) {
/* 000078 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000078 */ 						}
/* 000078 */ 					}
/* 000078 */ 				}
/* 000078 */ 			}
/* 000078 */ 			else {
/* 000078 */ 			}
/* 000079 */ 			self.equation_counter = 1;
/* 000080 */ 			self.equation_info_by_node = dict ({});
/* 000080 */ 		});},
/* 000082 */ 		get new_numbered_display_math () {return __get__ (this, function (self, node, lineno, custom_tag_llm_text) {
/* 000082 */ 			if (typeof custom_tag_llm_text == 'undefined' || (custom_tag_llm_text != null && custom_tag_llm_text.hasOwnProperty ("__kwargtrans__"))) {;
/* 000082 */ 				var custom_tag_llm_text = null;
/* 000082 */ 			};
/* 000082 */ 			if (arguments.length) {
/* 000082 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000082 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000082 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000082 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000082 */ 						switch (__attrib0__) {
/* 000082 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000082 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000082 */ 							case 'lineno': var lineno = __allkwargs0__ [__attrib0__]; break;
/* 000082 */ 							case 'custom_tag_llm_text': var custom_tag_llm_text = __allkwargs0__ [__attrib0__]; break;
/* 000082 */ 						}
/* 000082 */ 					}
/* 000082 */ 				}
/* 000082 */ 			}
/* 000082 */ 			else {
/* 000082 */ 			}
/* 000084 */ 			var key = tuple ([(function () {
/* 000084 */ 				var __accu0__ = self;
/* 000084 */ 				return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000084 */ 			}) (), lineno]);
/* 000085 */ 			if (__t__ (__in__ (key, self.equation_info_by_node))) {
/* 000086 */ 				return __getitem__ (self.equation_info_by_node, key);
/* 000086 */ 			}
/* 000088 */ 			if (__t__ (custom_tag_llm_text !== null)) {
/* 000089 */ 				var formatted_ref_llm_text = custom_tag_llm_text;
/* 000090 */ 				var eq_id = '_{}'.format (__getitem__ (key, 0));
/* 000091 */ 				if (__t__ (lineno)) {
/* 000092 */ 					var eq_id = __call__ (__iadd__, null, eq_id, '-{}'.format (lineno));
/* 000092 */ 				}
/* 000092 */ 			}
/* 000093 */ 			else {
/* 000094 */ 				var eq_id = self.equation_counter;
/* 000095 */ 				var formatted_ref_llm_text = (function () {
/* 000095 */ 					var __accu0__ = self.feature;
/* 000095 */ 					return __call__ (__accu0__.eq_counter_formatter, __accu0__, eq_id);
/* 000095 */ 				}) ();
/* 000096 */ 				self.equation_counter = __call__ (__iadd__, null, self.equation_counter, 1);
/* 000096 */ 			}
/* 000098 */ 			var info = tuple ([eq_id, formatted_ref_llm_text]);
/* 000099 */ 			__setitem__ (self.equation_info_by_node, key, info);
/* 000100 */ 			return info;
/* 000100 */ 		});}
/* 000100 */ 	}),
/* 000103 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000103 */ 		if (arguments.length) {
/* 000103 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000103 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000103 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000103 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000103 */ 					switch (__attrib0__) {
/* 000103 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000103 */ 					}
/* 000103 */ 				}
/* 000103 */ 			}
/* 000103 */ 		}
/* 000103 */ 		else {
/* 000103 */ 		}
/* 000104 */ 		var environments = (function () {
/* 000104 */ 			var __accu0__ = [];
/* 000104 */ 			var __iterable0__ = self.math_environment_names;
/* 000104 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000108 */ 				var math_environment_name = __getitem__ (__iterable0__, __index0__);
/* 000108 */ 				(function () {
/* 000108 */ 					var __accu1__ = __accu0__;
/* 000105 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (MathEnvironment, null, math_environment_name));
/* 000105 */ 				}) ();
/* 000105 */ 			}
/* 000105 */ 			return __accu0__;
/* 000105 */ 		}) ();
/* 000110 */ 		var macros = [];
/* 000111 */ 		if (__t__ (self.eqref_macro_name !== null)) {
/* 000112 */ 			(function () {
/* 000112 */ 				var __accu0__ = macros;
/* 000113 */ 				return __call__ (__accu0__.append, __accu0__, __call__ (MathEqrefMacro, null, __kwargtrans__ ({macroname: self.eqref_macro_name, ref_type: self.eqref_ref_type})));
/* 000113 */ 			}) ();
/* 000113 */ 		}
/* 000119 */ 		return __call__ (dict, null, __kwargtrans__ ({macros: macros, environments: environments}));
/* 000119 */ 	});}
/* 000119 */ });
/* 000125 */ export var _ProxyNodeWithLatexVerbatim =  __class__ ('_ProxyNodeWithLatexVerbatim', [object], {
/* 000125 */ 	__module__: __name__,
/* 000127 */ 	pos: null,
/* 000128 */ 	pos_end: null,
/* 000130 */ 	get __init__ () {return __get__ (this, function (self, verbatim) {
/* 000130 */ 		if (arguments.length) {
/* 000130 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000130 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000130 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000130 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000130 */ 					switch (__attrib0__) {
/* 000130 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000130 */ 						case 'verbatim': var verbatim = __allkwargs0__ [__attrib0__]; break;
/* 000130 */ 					}
/* 000130 */ 				}
/* 000130 */ 			}
/* 000130 */ 		}
/* 000130 */ 		else {
/* 000130 */ 		}
/* 000131 */ 		self._verbatim = verbatim;
/* 000131 */ 	});},
/* 000133 */ 	get latex_verbatim () {return __get__ (this, function (self) {
/* 000133 */ 		if (arguments.length) {
/* 000133 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000133 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000133 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000133 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000133 */ 					switch (__attrib0__) {
/* 000133 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000133 */ 					}
/* 000133 */ 				}
/* 000133 */ 			}
/* 000133 */ 		}
/* 000133 */ 		else {
/* 000133 */ 		}
/* 000134 */ 		return self._verbatim;
/* 000134 */ 	});}
/* 000134 */ });
/* 000137 */ export var MathEnvironment =  __class__ ('MathEnvironment', [LLMEnvironmentSpecBase], {
/* 000137 */ 	__module__: __name__,
/* 000142 */ 	get __init__ () {return __get__ (this, function (self, environmentname, is_numbered) {
/* 000142 */ 		if (typeof is_numbered == 'undefined' || (is_numbered != null && is_numbered.hasOwnProperty ("__kwargtrans__"))) {;
/* 000142 */ 			var is_numbered = null;
/* 000142 */ 		};
/* 000142 */ 		if (arguments.length) {
/* 000142 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000142 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000142 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000142 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000142 */ 					switch (__attrib0__) {
/* 000142 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000142 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000142 */ 						case 'is_numbered': var is_numbered = __allkwargs0__ [__attrib0__]; break;
/* 000142 */ 					}
/* 000142 */ 				}
/* 000142 */ 			}
/* 000142 */ 		}
/* 000142 */ 		else {
/* 000142 */ 		}
/* 000143 */ 		__call__ (__call__ (__super__, null, MathEnvironment, '__init__'), null, self, __kwargtrans__ ({environmentname: environmentname}));
/* 000144 */ 		if (__t__ (is_numbered !== null)) {
/* 000145 */ 			self.is_numbered = is_numbered;
/* 000145 */ 		}
/* 000146 */ 		else {
/* 000147 */ 			self.is_numbered = __ne__ (__getslice__ (environmentname, __neg__ (1), null, 1), '*');
/* 000147 */ 		}
/* 000149 */ 		if (__t__ (!__t__ ((self.is_numbered)))) {
/* 000151 */ 			self.allowed_in_standalone_mode = true;
/* 000151 */ 		}
/* 000151 */ 	});},
/* 000153 */ 	get make_body_parsing_state_delta () {return __get__ (this, function (self, token, nodeargd, arg_parsing_state_delta, latex_walker) {
/* 000153 */ 		var kwargs = dict ();
/* 000153 */ 		if (arguments.length) {
/* 000153 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000153 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000153 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000153 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000153 */ 					switch (__attrib0__) {
/* 000153 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000153 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000153 */ 						case 'nodeargd': var nodeargd = __allkwargs0__ [__attrib0__]; break;
/* 000153 */ 						case 'arg_parsing_state_delta': var arg_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000153 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000153 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000153 */ 					}
/* 000153 */ 				}
/* 000153 */ 				delete kwargs.__kwargtrans__;
/* 000153 */ 			}
/* 000153 */ 		}
/* 000153 */ 		else {
/* 000153 */ 		}
/* 000155 */ 		return __call__ (ParsingStateDeltaEnterMathMode, null);
/* 000155 */ 	});},
/* 000157 */ 	get make_body_parser () {return __get__ (this, function (self, token, nodeargd, arg_parsing_state_delta) {
/* 000157 */ 		if (arguments.length) {
/* 000157 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000157 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000157 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000157 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000157 */ 					switch (__attrib0__) {
/* 000157 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000157 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000157 */ 						case 'nodeargd': var nodeargd = __allkwargs0__ [__attrib0__]; break;
/* 000157 */ 						case 'arg_parsing_state_delta': var arg_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000157 */ 					}
/* 000157 */ 				}
/* 000157 */ 			}
/* 000157 */ 		}
/* 000157 */ 		else {
/* 000157 */ 		}
/* 000165 */ 		return __call__ (LatexEnvironmentBodyContentsParser, null, __kwargtrans__ ({environmentname: token.arg, contents_parsing_state_delta: __call__ (ParsingStateDeltaExtendLatexContextDb, null, __kwargtrans__ ({extend_latex_context: __call__ (dict, null, __kwargtrans__ ({macros: [__call__ (MacroSpec, null, 'label', __kwargtrans__ ({arguments_spec_list: [__call__ (LLMArgumentSpec, null, __kwargtrans__ ({parser: (function () {
/* 000165 */ 			var __accu0__ = latexnodes_parsers;
/* 000165 */ 			return __call__ (__accu0__.LatexCharsGroupParser, __accu0__, __kwargtrans__ ({delimiters: tuple (['{', '}'])}));
/* 000177 */ 		}) (), argname: 'label'}))]})), __call__ (MacroSpec, null, 'tag', __kwargtrans__ ({arguments_spec_list: [__call__ (LLMArgumentSpec, null, __kwargtrans__ ({parser: '*', argname: 'tag_star'})), __call__ (LLMArgumentSpec, null, __kwargtrans__ ({parser: (function () {
/* 000177 */ 			var __accu0__ = latexnodes_parsers;
/* 000177 */ 			return __call__ (__accu0__.LatexCharsGroupParser, __accu0__, __kwargtrans__ ({delimiters: tuple (['{', '}'])}));
/* 000183 */ 		}) (), argname: 'text'}))]})), __call__ (MacroSpec, null, '\\', __kwargtrans__ ({arguments_spec_list: []}))]}))}))}));
/* 000183 */ 	});},
/* 000189 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000189 */ 		if (arguments.length) {
/* 000189 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000189 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000189 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000189 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000189 */ 					switch (__attrib0__) {
/* 000189 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000189 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000189 */ 					}
/* 000189 */ 				}
/* 000189 */ 			}
/* 000189 */ 		}
/* 000189 */ 		else {
/* 000189 */ 		}
/* 000195 */ 		node.llm_equation_lines_labels_infos = [];
/* 000197 */ 		if (__t__ (!__t__ ((self.is_numbered)))) {
/* 000198 */ 			return node;
/* 000198 */ 		}
/* 000200 */ 		var last_line_info = dict ({'labels_info': [], 'custom_tag_llm_text': null});
/* 000204 */ 		var _flush_last_equation_line_labels_infos = function (newline_node) {
/* 000204 */ 			if (typeof newline_node == 'undefined' || (newline_node != null && newline_node.hasOwnProperty ("__kwargtrans__"))) {;
/* 000204 */ 				var newline_node = null;
/* 000204 */ 			};
/* 000204 */ 			if (arguments.length) {
/* 000204 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000204 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000204 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000204 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000204 */ 						switch (__attrib0__) {
/* 000204 */ 							case 'newline_node': var newline_node = __allkwargs0__ [__attrib0__]; break;
/* 000204 */ 						}
/* 000204 */ 					}
/* 000204 */ 				}
/* 000204 */ 			}
/* 000204 */ 			else {
/* 000204 */ 			}
/* 000205 */ 			(function () {
/* 000205 */ 				var __accu0__ = node.llm_equation_lines_labels_infos;
/* 000206 */ 				return __call__ (__accu0__.append, __accu0__, dict ({'labels': __call__ (list, null, __getitem__ (last_line_info, 'labels_info')), 'custom_tag_llm_text': __getitem__ (last_line_info, 'custom_tag_llm_text'), 'newline_node': newline_node}));
/* 000206 */ 			}) ();
/* 000210 */ 			(function () {
/* 000210 */ 				var __accu0__ = last_line_info;
/* 000210 */ 				return __call__ (__accu0__.py_update, __accu0__, dict ({'labels_info': [], 'custom_tag_llm_text': null}));
/* 000210 */ 			}) ();
/* 000210 */ 		};
/* 000215 */ 		var last_node_is_newline = false;
/* 000216 */ 		var __iterable0__ = node.nodelist;
/* 000216 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000216 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000217 */ 			if (__t__ (__t__ ((function () {
/* 000217 */ 				var __accu0__ = n;
/* 000217 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000217 */ 			}) ()) && __eq__ (n.macroname, 'label'))) {
/* 000222 */ 				var ref_label_node_args = (function () {
/* 000222 */ 					var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: n}));
/* 000222 */ 					return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['label']));
/* 000222 */ 				}) ();
/* 000225 */ 				var ref_label_full = (function () {
/* 000225 */ 					var __accu0__ = __getitem__ (ref_label_node_args, 'label');
/* 000225 */ 					return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000225 */ 				}) ();
/* 000227 */ 				if (__t__ (__in__ (':', ref_label_full))) {
/* 000228 */ 					var __left0__ = (function () {
/* 000228 */ 						var __accu0__ = ref_label_full;
/* 000228 */ 						return __call__ (__accu0__.py_split, __accu0__, ':', 1);
/* 000228 */ 					}) ();
/* 000228 */ 					var ref_type = __left0__ [0];
/* 000228 */ 					var ref_label = __left0__ [1];
/* 000228 */ 				}
/* 000229 */ 				else {
/* 000230 */ 					var __left0__ = tuple ([null, ref_label_full]);
/* 000230 */ 					var ref_type = __left0__ [0];
/* 000230 */ 					var ref_label = __left0__ [1];
/* 000230 */ 				}
/* 000232 */ 				var info = dict ({'node': n, 'label': tuple ([ref_type, ref_label])});
/* 000237 */ 				(function () {
/* 000237 */ 					var __accu0__ = __getitem__ (last_line_info, 'labels_info');
/* 000237 */ 					return __call__ (__accu0__.append, __accu0__, info);
/* 000237 */ 				}) ();
/* 000237 */ 			}
/* 000239 */ 			else if (__t__ (__t__ ((function () {
/* 000239 */ 				var __accu0__ = n;
/* 000239 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000239 */ 			}) ()) && __eq__ (n.macroname, 'tag'))) {
/* 000242 */ 				var tag_node_args = (function () {
/* 000242 */ 					var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: n}));
/* 000242 */ 					return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['tag_star', 'text']));
/* 000242 */ 				}) ();
/* 000247 */ 				var custom_tag_llm_text = (function () {
/* 000247 */ 					var __accu0__ = (function () {
/* 000247 */ 						var __accu1__ = __getitem__ (tag_node_args, 'text');
/* 000247 */ 						return __call__ (__accu1__.get_content_nodelist, __accu1__);
/* 000247 */ 					}) ();
/* 000247 */ 					return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000247 */ 				}) ();
/* 000248 */ 				if (__t__ (!__t__ (((function () {
/* 000248 */ 					var __accu0__ = __getitem__ (tag_node_args, 'tag_star');
/* 000248 */ 					return __call__ (__accu0__.was_provided, __accu0__);
/* 000248 */ 				}) ())))) {
/* 000249 */ 					var custom_tag_llm_text = '({})'.format (custom_tag_llm_text);
/* 000249 */ 				}
/* 000251 */ 				__setitem__ (last_line_info, 'custom_tag_llm_text', custom_tag_llm_text);
/* 000251 */ 			}
/* 000253 */ 			else if (__t__ (__t__ ((function () {
/* 000253 */ 				var __accu0__ = n;
/* 000253 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000253 */ 			}) ()) && __eq__ (n.macroname, '\\'))) {
/* 000254 */ 				__call__ (_flush_last_equation_line_labels_infos, null, n);
/* 000255 */ 				var last_node_is_newline = true;
/* 000255 */ 			}
/* 000257 */ 			else if (__t__ (__t__ (!__t__ (((function () {
/* 000257 */ 				var __accu0__ = n;
/* 000257 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCommentNode);
/* 000258 */ 			}) ()))) && !__t__ ((__t__ ((function () {
/* 000258 */ 				var __accu0__ = n;
/* 000258 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000258 */ 			}) ()) && !__t__ (((function () {
/* 000258 */ 				var __accu0__ = n.chars;
/* 000258 */ 				return __call__ (__accu0__.strip, __accu0__);
/* 000258 */ 			}) ())))))) {
/* 000260 */ 				var last_node_is_newline = false;
/* 000260 */ 			}
/* 000260 */ 		}
/* 000262 */ 		if (__t__ (!__t__ ((last_node_is_newline)))) {
/* 000263 */ 			__call__ (_flush_last_equation_line_labels_infos, null);
/* 000263 */ 		}
/* 000265 */ 		return node;
/* 000265 */ 	});},
/* 000268 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000268 */ 		if (arguments.length) {
/* 000268 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000268 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000268 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000268 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000268 */ 					switch (__attrib0__) {
/* 000268 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000268 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000268 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000268 */ 					}
/* 000268 */ 				}
/* 000268 */ 			}
/* 000268 */ 		}
/* 000268 */ 		else {
/* 000268 */ 		}
/* 000271 */ 		var environmentname = node.environmentname;
/* 000273 */ 		if (__t__ (!__t__ (((function () {
/* 000273 */ 			var __accu0__ = render_context;
/* 000273 */ 			return __call__ (__accu0__.supports_feature, __accu0__, 'math');
/* 000273 */ 		}) ())))) {
/* 000274 */ 			var __except0__ = __call__ (ValueError, null, "Feature 'math' is not enabled, cannot render math environment");
/* 000274 */ 			__except0__.__cause__ = null;
/* 000274 */ 			throw __except0__;
/* 000274 */ 		}
/* 000276 */ 		var math_mgr = (function () {
/* 000276 */ 			var __accu0__ = render_context;
/* 000276 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'math');
/* 000276 */ 		}) ();
/* 000278 */ 		var refs_mgr = null;
/* 000279 */ 		if (__t__ ((function () {
/* 000279 */ 			var __accu0__ = render_context;
/* 000279 */ 			return __call__ (__accu0__.supports_feature, __accu0__, 'refs');
/* 000279 */ 		}) ())) {
/* 000280 */ 			var refs_mgr = (function () {
/* 000280 */ 				var __accu0__ = render_context;
/* 000280 */ 				return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000280 */ 			}) ();
/* 000280 */ 		}
/* 000283 */ 		var nodelist = __call__ (list, null, node.nodelist);
/* 000285 */ 		var target_id = null;
/* 000287 */ 		var __iterable0__ = __call__ (enumerate, null, node.llm_equation_lines_labels_infos);
/* 000287 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000287 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000287 */ 			var lineno = __left0__ [0];
/* 000287 */ 			var line_infos = __left0__ [1];
/* 000289 */ 			var custom_tag_llm_text = __getitem__ (line_infos, 'custom_tag_llm_text');
/* 000293 */ 			var __left0__ = (function () {
/* 000293 */ 				var __accu0__ = math_mgr;
/* 000293 */ 				return __call__ (__accu0__.new_numbered_display_math, __accu0__, node, lineno, custom_tag_llm_text);
/* 000293 */ 			}) ();
/* 000293 */ 			var eq_id = __left0__ [0];
/* 000293 */ 			var formatted_ref_llm_text = __left0__ [1];
/* 000295 */ 			var this_target_id = 'equation-{}'.format (eq_id);
/* 000296 */ 			if (__t__ (target_id === null)) {
/* 000298 */ 				var target_id = this_target_id;
/* 000298 */ 			}
/* 000300 */ 			if (__t__ (!__t__ ((custom_tag_llm_text)))) {
/* 000303 */ 				var newline_node = __getitem__ (line_infos, 'newline_node');
/* 000304 */ 				if (__t__ (newline_node !== null)) {
/* 000305 */ 					var i = (function () {
/* 000305 */ 						var __accu0__ = nodelist;
/* 000305 */ 						return __call__ (__accu0__.index, __accu0__, newline_node);
/* 000305 */ 					}) ();
/* 000305 */ 				}
/* 000306 */ 				else {
/* 000307 */ 					var i = __call__ (len, null, nodelist);
/* 000307 */ 				}
/* 000308 */ 				(function () {
/* 000308 */ 					var __accu0__ = nodelist;
/* 000310 */ 					return __call__ (__accu0__.insert, __accu0__, i, __call__ (_ProxyNodeWithLatexVerbatim, null, __add__ (__add__ ('\\tag*{', formatted_ref_llm_text), '}')));
/* 000310 */ 				}) ();
/* 000310 */ 			}
/* 000317 */ 			var this_target_id = target_id;
/* 000320 */ 			if (__t__ (__t__ (refs_mgr !== null) && render_context.is_first_pass)) {
/* 000321 */ 				var __iterable1__ = __getitem__ (line_infos, 'labels');
/* 000321 */ 				for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000321 */ 					var label_info = __getitem__ (__iterable1__, __index1__);
/* 000322 */ 					var __left0__ = __getitem__ (label_info, 'label');
/* 000322 */ 					var ref_type = __left0__ [0];
/* 000322 */ 					var ref_label = __left0__ [1];
/* 000323 */ 					(function () {
/* 000323 */ 						var __accu0__ = refs_mgr;
/* 000323 */ 						return __call__ (__accu0__.register_reference, __accu0__, ref_type, ref_label, __kwargtrans__ ({node: node, formatted_ref_llm_text: formatted_ref_llm_text, target_href: '#{}'.format (this_target_id)}));
/* 000323 */ 					}) ();
/* 000323 */ 				}
/* 000323 */ 			}
/* 000323 */ 		}
/* 000329 */ 		return (function () {
/* 000329 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000331 */ 			return __call__ (__accu0__.render_math_content, __accu0__, tuple (['\\begin{}{}{}'.format ('{', environmentname, '}'), '\\end{}{}{}'.format ('{', environmentname, '}')]), (function () {
/* 000331 */ 				var __accu1__ = latexnodes_nodes;
/* 000331 */ 				return __call__ (__accu1__.LatexNodeList, __accu1__, nodelist);
/* 000331 */ 			}) (), render_context, 'display', __kwargtrans__ ({environmentname: environmentname, target_id: target_id}));
/* 000331 */ 		}) ();
/* 000331 */ 	});}
/* 000331 */ });
/* 000341 */ export var MathEqrefMacro =  __class__ ('MathEqrefMacro', [LLMMacroSpecBase], {
/* 000341 */ 	__module__: __name__,
/* 000343 */ 	delayed_render: true,
/* 000345 */ 	allowed_in_standalone_mode: false,
/* 000350 */ 	get __init__ () {return __get__ (this, function (self, macroname, ref_type) {
/* 000350 */ 		if (typeof macroname == 'undefined' || (macroname != null && macroname.hasOwnProperty ("__kwargtrans__"))) {;
/* 000350 */ 			var macroname = 'eqref';
/* 000350 */ 		};
/* 000350 */ 		if (typeof ref_type == 'undefined' || (ref_type != null && ref_type.hasOwnProperty ("__kwargtrans__"))) {;
/* 000350 */ 			var ref_type = 'eq';
/* 000350 */ 		};
/* 000350 */ 		var kwargs = dict ();
/* 000350 */ 		if (arguments.length) {
/* 000350 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000350 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000350 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000350 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000350 */ 					switch (__attrib0__) {
/* 000350 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000350 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000350 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000350 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000350 */ 					}
/* 000350 */ 				}
/* 000350 */ 				delete kwargs.__kwargtrans__;
/* 000350 */ 			}
/* 000350 */ 		}
/* 000350 */ 		else {
/* 000350 */ 		}
/* 000355 */ 		__call__ (__call__ (__super__, null, MathEqrefMacro, '__init__'), null, self, __kwargtrans__ ({macroname: macroname, arguments_spec_list: [__call__ (LLMArgumentSpec, null, (function () {
/* 000355 */ 			var __accu0__ = latexnodes_parsers;
/* 000355 */ 			return __call__ (__accu0__.LatexCharsGroupParser, __accu0__);
/* 000355 */ 		}) (), __kwargtrans__ ({argname: 'ref_label'}))]}));
/* 000360 */ 		self.ref_type = ref_type;
/* 000360 */ 	});},
/* 000362 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000362 */ 		if (arguments.length) {
/* 000362 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000362 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000362 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000362 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000362 */ 					switch (__attrib0__) {
/* 000362 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000362 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000362 */ 					}
/* 000362 */ 				}
/* 000362 */ 			}
/* 000362 */ 		}
/* 000362 */ 		else {
/* 000362 */ 		}
/* 000364 */ 		var node_args = (function () {
/* 000364 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000364 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['ref_label']));
/* 000364 */ 		}) ();
/* 000368 */ 		var ref_type = null;
/* 000369 */ 		var ref_label = (function () {
/* 000369 */ 			var __accu0__ = __getitem__ (node_args, 'ref_label');
/* 000369 */ 			return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000369 */ 		}) ();
/* 000370 */ 		if (__t__ (__in__ (':', ref_label))) {
/* 000371 */ 			var __left0__ = (function () {
/* 000371 */ 				var __accu0__ = ref_label;
/* 000371 */ 				return __call__ (__accu0__.py_split, __accu0__, ':', 1);
/* 000371 */ 			}) ();
/* 000371 */ 			var ref_type = __left0__ [0];
/* 000371 */ 			var ref_label = __left0__ [1];
/* 000371 */ 		}
/* 000373 */ 		if (__t__ (__ne__ (ref_type, self.ref_type))) {
/* 000374 */ 			var __except0__ = __call__ (LatexWalkerParseError, null, 'Equation labels must begin with “{}:” (error in ‘\\{}’)'.format (self.ref_type, node.macroname), __kwargtrans__ ({pos: node.pos}));
/* 000374 */ 			__except0__.__cause__ = null;
/* 000374 */ 			throw __except0__;
/* 000374 */ 		}
/* 000380 */ 		node.llmarg_ref = tuple ([ref_type, ref_label]);
/* 000380 */ 	});},
/* 000383 */ 	get prepare_delayed_render () {return __get__ (this, function (self, node, render_context) {
/* 000383 */ 		if (arguments.length) {
/* 000383 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000383 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000383 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000383 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000383 */ 					switch (__attrib0__) {
/* 000383 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000383 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000383 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000383 */ 					}
/* 000383 */ 				}
/* 000383 */ 			}
/* 000383 */ 		}
/* 000383 */ 		else {
/* 000383 */ 		}
/* 000384 */ 		// pass;
/* 000384 */ 	});},
/* 000386 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000386 */ 		if (arguments.length) {
/* 000386 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000386 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000386 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000386 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000386 */ 					switch (__attrib0__) {
/* 000386 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000386 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000386 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000386 */ 					}
/* 000386 */ 				}
/* 000386 */ 			}
/* 000386 */ 		}
/* 000386 */ 		else {
/* 000386 */ 		}
/* 000388 */ 		var __left0__ = node.llmarg_ref;
/* 000388 */ 		var ref_type = __left0__ [0];
/* 000388 */ 		var ref_label = __left0__ [1];
/* 000390 */ 		var refs_mgr = (function () {
/* 000390 */ 			var __accu0__ = render_context;
/* 000390 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000390 */ 		}) ();
/* 000392 */ 		var resource_info = node.latex_walker.resource_info;
/* 000394 */ 		try {
/* 000395 */ 			return (function () {
/* 000395 */ 				var __accu0__ = refs_mgr;
/* 000395 */ 				return __call__ (__accu0__.render_ref, __accu0__, ref_type, ref_label, null, resource_info, render_context);
/* 000395 */ 			}) ();
/* 000395 */ 		}
/* 000395 */ 		catch (__except0__) {
/* 000395 */ 			if (isinstance (__except0__, Exception)) {
/* 000395 */ 				var e = __except0__;
/* 000402 */ 				(function () {
/* 000402 */ 					var __accu0__ = logger;
/* 000403 */ 					return __call__ (__accu0__.error, __accu0__, 'Failed to resolve reference to ‘{}:{}’: {} in ‘{}’ @ {}'.format (ref_type, ref_label, e, (function () {
/* 000403 */ 						var __accu1__ = node;
/* 000403 */ 						return __call__ (__accu1__.latex_verbatim, __accu1__);
/* 000403 */ 					}) (), (function () {
/* 000403 */ 						var __accu1__ = node;
/* 000403 */ 						return __call__ (__accu1__.format_pos, __accu1__);
/* 000403 */ 					}) ()));
/* 000403 */ 				}) ();
/* 000404 */ 				var __except1__ = __call__ (LatexWalkerParseError, null, 'Unable to resolve reference to ‘{}:{}’. {}'.format (ref_type, ref_label, e), __kwargtrans__ ({pos: node.pos}));
/* 000404 */ 				__except1__.__cause__ = null;
/* 000404 */ 				throw __except1__;
/* 000404 */ 			}
/* 000404 */ 			else {
/* 000404 */ 				throw __except0__;
/* 000404 */ 			}
/* 000404 */ 		}
/* 000404 */ 	});}
/* 000404 */ });
/* 000006 */ 
//# sourceMappingURL=llm.feature.math.map