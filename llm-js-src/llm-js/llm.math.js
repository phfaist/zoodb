/* 000001 */ // Transcrypt'ed from Python, 2022-09-30 23:10:30
/* 000006 */ var logging = {};
/* 000006 */ var re = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000025 */ import {LLMArgumentSpec} from './llm.llmenvironment.js';
/* 000024 */ import {LLMEnvironmentSpecBase, LLMMacroSpecBase} from './llm.llmspecinfo.js';
/* 000018 */ import {LatexEnvironmentBodyContentsParser, MacroSpec, ParsingStateDeltaExtendLatexContextDb} from './pylatexenc.macrospec.js';
/* 000017 */ import * as latexnodes_parsers from './pylatexenc.latexnodes.parsers.js';
/* 000016 */ import * as latexnodes_nodes from './pylatexenc.latexnodes.nodes.js';
/* 000011 */ import {LatexWalkerParseError, ParsedArgumentsInfo, ParsingStateDeltaEnterMathMode} from './pylatexenc.latexnodes.js';
/* 000008 */ import * as __module_logging__ from './logging.js';
/* 000008 */ __nest__ (logging, '', __module_logging__);
/* 000006 */ import * as __module_re__ from './re.js';
/* 000006 */ __nest__ (re, '', __module_re__);
/* 000006 */ export {ParsingStateDeltaExtendLatexContextDb, ParsedArgumentsInfo, LLMMacroSpecBase, LatexWalkerParseError, MacroSpec, latexnodes_parsers, latexnodes_nodes, LLMEnvironmentSpecBase, LLMArgumentSpec, ParsingStateDeltaEnterMathMode, LatexEnvironmentBodyContentsParser};
/* 000001 */ var __name__ = 'llm.math';
/* 000009 */ export var logger = (function () {
/* 000009 */ 	var __accu0__ = logging;
/* 000009 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000009 */ }) ();
/* 000029 */ export var sanitize_for_id = function (x) {
/* 000029 */ 	if (arguments.length) {
/* 000029 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000029 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000029 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000029 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000029 */ 				switch (__attrib0__) {
/* 000029 */ 					case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000029 */ 				}
/* 000029 */ 			}
/* 000029 */ 		}
/* 000029 */ 	}
/* 000029 */ 	else {
/* 000029 */ 	}
/* 000030 */ 	return (function () {
/* 000030 */ 		var __accu0__ = re;
/* 000030 */ 		return __call__ (__accu0__.sub, __accu0__, '[^a-zA-Z0-9_-]', '-', x);
/* 000030 */ 	}) ();
/* 000030 */ };
/* 000034 */ export var MathEnvironment =  __class__ ('MathEnvironment', [LLMEnvironmentSpecBase], {
/* 000034 */ 	__module__: __name__,
/* 000036 */ 	allowed_in_standalone_mode: true,
/* 000038 */ 	get __init__ () {return __get__ (this, function (self, environmentname) {
/* 000038 */ 		if (arguments.length) {
/* 000038 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000038 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000038 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000038 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000038 */ 					switch (__attrib0__) {
/* 000038 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000038 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000038 */ 					}
/* 000038 */ 				}
/* 000038 */ 			}
/* 000038 */ 		}
/* 000038 */ 		else {
/* 000038 */ 		}
/* 000039 */ 		__call__ (__call__ (__super__, null, MathEnvironment, '__init__'), null, self, __kwargtrans__ ({environmentname: environmentname}));
/* 000039 */ 	});},
/* 000041 */ 	get make_body_parsing_state_delta () {return __get__ (this, function (self, token, nodeargd, arg_parsing_state_delta, latex_walker) {
/* 000041 */ 		var kwargs = dict ();
/* 000041 */ 		if (arguments.length) {
/* 000041 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000041 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000041 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000041 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000041 */ 					switch (__attrib0__) {
/* 000041 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000041 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000041 */ 						case 'nodeargd': var nodeargd = __allkwargs0__ [__attrib0__]; break;
/* 000041 */ 						case 'arg_parsing_state_delta': var arg_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000041 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000041 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000041 */ 					}
/* 000041 */ 				}
/* 000041 */ 				delete kwargs.__kwargtrans__;
/* 000041 */ 			}
/* 000041 */ 		}
/* 000041 */ 		else {
/* 000041 */ 		}
/* 000043 */ 		return __call__ (ParsingStateDeltaEnterMathMode, null);
/* 000043 */ 	});},
/* 000045 */ 	get make_body_parser () {return __get__ (this, function (self, token, nodeargd, arg_parsing_state_delta) {
/* 000045 */ 		if (arguments.length) {
/* 000045 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000045 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000045 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000045 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000045 */ 					switch (__attrib0__) {
/* 000045 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000045 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000045 */ 						case 'nodeargd': var nodeargd = __allkwargs0__ [__attrib0__]; break;
/* 000045 */ 						case 'arg_parsing_state_delta': var arg_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000045 */ 					}
/* 000045 */ 				}
/* 000045 */ 			}
/* 000045 */ 		}
/* 000045 */ 		else {
/* 000045 */ 		}
/* 000053 */ 		return __call__ (LatexEnvironmentBodyContentsParser, null, __kwargtrans__ ({environmentname: token.arg, contents_parsing_state_delta: __call__ (ParsingStateDeltaExtendLatexContextDb, null, __kwargtrans__ ({extend_latex_context: __call__ (dict, null, __kwargtrans__ ({macros: [__call__ (MacroSpec, null, 'label', __kwargtrans__ ({arguments_spec_list: [__call__ (LLMArgumentSpec, null, __kwargtrans__ ({parser: (function () {
/* 000053 */ 			var __accu0__ = latexnodes_parsers;
/* 000053 */ 			return __call__ (__accu0__.LatexCharsGroupParser, __accu0__, __kwargtrans__ ({delimiters: tuple (['{', '}'])}));
/* 000053 */ 		}) (), argname: 'label'}))]}))]}))}))}));
/* 000053 */ 	});},
/* 000064 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000064 */ 		if (arguments.length) {
/* 000064 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000064 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000064 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000064 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000064 */ 					switch (__attrib0__) {
/* 000064 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000064 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000064 */ 					}
/* 000064 */ 				}
/* 000064 */ 			}
/* 000064 */ 		}
/* 000064 */ 		else {
/* 000064 */ 		}
/* 000070 */ 		node.llm_equation_label_node = null;
/* 000071 */ 		var __iterable0__ = node.nodelist;
/* 000071 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000071 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000072 */ 			if (__t__ (__t__ ((function () {
/* 000072 */ 				var __accu0__ = n;
/* 000072 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000072 */ 			}) ()) && __eq__ (n.macroname, 'label'))) {
/* 000074 */ 				if (__t__ (node.llm_equation_label_node !== null)) {
/* 000075 */ 					var __except0__ = __call__ (LatexWalkerParseError, null, "You cannot use multiple \\label's in an equation", __kwargtrans__ ({pos: n.pos}));
/* 000075 */ 					__except0__.__cause__ = null;
/* 000075 */ 					throw __except0__;
/* 000075 */ 				}
/* 000081 */ 				node.llm_equation_label_node = n;
/* 000086 */ 				var ref_label_node_args = (function () {
/* 000086 */ 					var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node.llm_equation_label_node}));
/* 000086 */ 					return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['label']));
/* 000086 */ 				}) ();
/* 000090 */ 				var ref_label_full = (function () {
/* 000090 */ 					var __accu0__ = __getitem__ (ref_label_node_args, 'label');
/* 000090 */ 					return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000090 */ 				}) ();
/* 000092 */ 				if (__t__ (__in__ (':', ref_label_full))) {
/* 000093 */ 					var __left0__ = (function () {
/* 000093 */ 						var __accu0__ = ref_label_full;
/* 000093 */ 						return __call__ (__accu0__.py_split, __accu0__, ':', 1);
/* 000093 */ 					}) ();
/* 000093 */ 					var ref_label_prefix = __left0__ [0];
/* 000093 */ 					var ref_label = __left0__ [1];
/* 000093 */ 				}
/* 000094 */ 				else {
/* 000095 */ 					var __left0__ = tuple ([null, ref_label_full]);
/* 000095 */ 					var ref_label_prefix = __left0__ [0];
/* 000095 */ 					var ref_label = __left0__ [1];
/* 000095 */ 				}
/* 000097 */ 				node.llm_equation_ref_label_prefix = ref_label_prefix;
/* 000098 */ 				node.llm_equation_ref_label = ref_label;
/* 000098 */ 				break;
/* 000098 */ 			}
/* 000098 */ 		}
/* 000102 */ 		return node;
/* 000102 */ 	});},
/* 000104 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000104 */ 		if (arguments.length) {
/* 000104 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000104 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000104 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000104 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000104 */ 					switch (__attrib0__) {
/* 000104 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000104 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000104 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000104 */ 					}
/* 000104 */ 				}
/* 000104 */ 			}
/* 000104 */ 		}
/* 000104 */ 		else {
/* 000104 */ 		}
/* 000107 */ 		var environmentname = node.environmentname;
/* 000110 */ 		var ref_label_prefix = null;
/* 000111 */ 		var ref_label = null;
/* 000112 */ 		if (__t__ (__call__ (hasattr, null, node, 'llm_equation_ref_label_prefix'))) {
/* 000113 */ 			var ref_label_prefix = node.llm_equation_ref_label_prefix;
/* 000113 */ 		}
/* 000114 */ 		if (__t__ (__call__ (hasattr, null, node, 'llm_equation_ref_label'))) {
/* 000115 */ 			var ref_label = node.llm_equation_ref_label;
/* 000115 */ 		}
/* 000117 */ 		if (__t__ (__t__ (ref_label_prefix !== null) && ref_label !== null)) {
/* 000118 */ 			var target_id = 'equation--{}'.format (__call__ (sanitize_for_id, null, __add__ (__add__ (ref_label_prefix, ':'), ref_label)));
/* 000118 */ 		}
/* 000119 */ 		else {
/* 000120 */ 			var target_id = null;
/* 000120 */ 		}
/* 000122 */ 		return (function () {
/* 000122 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000122 */ 			return __call__ (__accu0__.render_math_content, __accu0__, tuple (['\\begin{}{}{}'.format ('{', environmentname, '}'), '\\end{}{}{}'.format ('{', environmentname, '}')]), node.nodelist, render_context, 'display', __kwargtrans__ ({environmentname: environmentname, target_id: target_id}));
/* 000122 */ 		}) ();
/* 000122 */ 	});}
/* 000122 */ });
/* 000134 */ export var MathEqrefViaMathContent =  __class__ ('MathEqrefViaMathContent', [LLMMacroSpecBase], {
/* 000134 */ 	__module__: __name__,
/* 000136 */ 	allowed_in_standalone_mode: false,
/* 000141 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000141 */ 		if (typeof macroname == 'undefined' || (macroname != null && macroname.hasOwnProperty ("__kwargtrans__"))) {;
/* 000141 */ 			var macroname = 'eqref';
/* 000141 */ 		};
/* 000141 */ 		var kwargs = dict ();
/* 000141 */ 		if (arguments.length) {
/* 000141 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000141 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000141 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000141 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000141 */ 					switch (__attrib0__) {
/* 000141 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000141 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000141 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000141 */ 					}
/* 000141 */ 				}
/* 000141 */ 				delete kwargs.__kwargtrans__;
/* 000141 */ 			}
/* 000141 */ 		}
/* 000141 */ 		else {
/* 000141 */ 		}
/* 000146 */ 		__call__ (__call__ (__super__, null, MathEqrefViaMathContent, '__init__'), null, self, __kwargtrans__ ({macroname: macroname, arguments_spec_list: [__call__ (LLMArgumentSpec, null, (function () {
/* 000146 */ 			var __accu0__ = latexnodes_parsers;
/* 000146 */ 			return __call__ (__accu0__.LatexCharsGroupParser, __accu0__);
/* 000146 */ 		}) (), __kwargtrans__ ({argname: 'ref_label'}))]}));
/* 000146 */ 	});},
/* 000152 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000152 */ 		if (arguments.length) {
/* 000152 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000152 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000152 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000152 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000152 */ 					switch (__attrib0__) {
/* 000152 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000152 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000152 */ 					}
/* 000152 */ 				}
/* 000152 */ 			}
/* 000152 */ 		}
/* 000152 */ 		else {
/* 000152 */ 		}
/* 000154 */ 		var node_args = (function () {
/* 000154 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000154 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['ref_label']));
/* 000154 */ 		}) ();
/* 000158 */ 		var ref_type = null;
/* 000159 */ 		var ref_label = (function () {
/* 000159 */ 			var __accu0__ = __getitem__ (node_args, 'ref_label');
/* 000159 */ 			return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000159 */ 		}) ();
/* 000160 */ 		if (__t__ (__in__ (':', ref_label))) {
/* 000161 */ 			var __left0__ = (function () {
/* 000161 */ 				var __accu0__ = ref_label;
/* 000161 */ 				return __call__ (__accu0__.py_split, __accu0__, ':', 1);
/* 000161 */ 			}) ();
/* 000161 */ 			var ref_type = __left0__ [0];
/* 000161 */ 			var ref_label = __left0__ [1];
/* 000161 */ 		}
/* 000163 */ 		if (__t__ (__ne__ (ref_type, 'eq'))) {
/* 000164 */ 			var __except0__ = __call__ (LatexWalkerParseError, null, 'Equation labels must begin with “eq:” (error in ‘\\{}’)'.format (node.macroname), __kwargtrans__ ({pos: node.pos}));
/* 000164 */ 			__except0__.__cause__ = null;
/* 000164 */ 			throw __except0__;
/* 000164 */ 		}
/* 000169 */ 		node.llmarg_ref = tuple ([ref_type, ref_label]);
/* 000169 */ 	});},
/* 000172 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000172 */ 		if (arguments.length) {
/* 000172 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000172 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000172 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000172 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000172 */ 					switch (__attrib0__) {
/* 000172 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000172 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000172 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000172 */ 					}
/* 000172 */ 				}
/* 000172 */ 			}
/* 000172 */ 		}
/* 000172 */ 		else {
/* 000172 */ 		}
/* 000177 */ 		return (function () {
/* 000177 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000179 */ 			return __call__ (__accu0__.render_math_content, __accu0__, tuple (['\\(', '\\)']), (function () {
/* 000179 */ 				var __accu1__ = latexnodes_nodes;
/* 000179 */ 				return __call__ (__accu1__.LatexNodeList, __accu1__, [node]);
/* 000179 */ 			}) (), render_context, 'inline');
/* 000179 */ 		}) ();
/* 000179 */ 	});}
/* 000179 */ });
/* 000006 */ 
//# sourceMappingURL=llm.math.map