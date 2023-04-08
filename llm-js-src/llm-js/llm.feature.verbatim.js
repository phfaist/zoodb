/* 000001 */ // Transcrypt'ed from Python, 2023-04-09 01:44:42
/* 000007 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000015 */ import {SimpleLatexDefinitionsFeature} from './llm.feature._base.js';
/* 000013 */ import {LLMArgumentSpec} from './llm.llmenvironment.js';
/* 000012 */ import {LLMSpecInfo} from './llm.llmspecinfo.js';
/* 000010 */ import * as latexnodes_nodes from './pylatexenc.latexnodes.nodes.js';
/* 000009 */ import * as latexnodes_parsers from './pylatexenc.latexnodes.parsers.js';
/* 000008 */ import {ParsedArgumentsInfo} from './pylatexenc.latexnodes.js';
/* 000007 */ import * as macrospec from './pylatexenc.macrospec.js';
/* 000007 */ export {LLMArgumentSpec, ParsedArgumentsInfo, LLMSpecInfo, SimpleLatexDefinitionsFeature, latexnodes_nodes, latexnodes_parsers, macrospec};
/* 000001 */ var __name__ = 'llm.feature.verbatim';
/* 000020 */ export var VerbatimSpecInfo =  __class__ ('VerbatimSpecInfo', [LLMSpecInfo], {
/* 000020 */ 	__module__: __name__,
/* 000022 */ 	allowed_in_standalone_mode: true,
/* 000030 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000030 */ 		var annotations = null;
/* 000030 */ 		var verbatimtype = 'text';
/* 000030 */ 		var is_block_level = false;
/* 000030 */ 		var include_environment_begin_end = false;
/* 000030 */ 		var kwargs = dict ();
/* 000030 */ 		if (arguments.length) {
/* 000030 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000030 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000030 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000030 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000030 */ 					switch (__attrib0__) {
/* 000030 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000030 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000030 */ 						case 'verbatimtype': var verbatimtype = __allkwargs0__ [__attrib0__]; break;
/* 000030 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000030 */ 						case 'include_environment_begin_end': var include_environment_begin_end = __allkwargs0__ [__attrib0__]; break;
/* 000030 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000030 */ 					}
/* 000030 */ 				}
/* 000030 */ 				delete kwargs.__kwargtrans__;
/* 000030 */ 			}
/* 000030 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000030 */ 		}
/* 000030 */ 		else {
/* 000030 */ 			var args = tuple ();
/* 000030 */ 		}
/* 000036 */ 		__call__ (__call__ (__super__, null, VerbatimSpecInfo, '__init__'), null, self, ...args, __kwargtrans__ (kwargs));
/* 000037 */ 		self.annotations = annotations;
/* 000038 */ 		self.verbatimtype = verbatimtype;
/* 000040 */ 		self.include_environment_begin_end = include_environment_begin_end;
/* 000043 */ 		self.is_block_level = is_block_level;
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
/* 000045 */ 		assert (__eq__ (token.tok, 'begin_environment'));
/* 000050 */ 		var environment_name = token.arg;
/* 000051 */ 		return (function () {
/* 000051 */ 			var __accu0__ = latexnodes_parsers;
/* 000051 */ 			return __call__ (__accu0__.LatexVerbatimEnvironmentContentsParser, __accu0__, __kwargtrans__ ({environment_name: environment_name}));
/* 000051 */ 		}) ();
/* 000051 */ 	});},
/* 000055 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000055 */ 		if (arguments.length) {
/* 000055 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000055 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000055 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000055 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000055 */ 					switch (__attrib0__) {
/* 000055 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000055 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000055 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000055 */ 					}
/* 000055 */ 				}
/* 000055 */ 			}
/* 000055 */ 		}
/* 000055 */ 		else {
/* 000055 */ 		}
/* 000059 */ 		var verbatim_lang = null;
/* 000061 */ 		var is_inline = false;
/* 000062 */ 		var is_environment = false;
/* 000064 */ 		if (__t__ ((function () {
/* 000064 */ 			var __accu0__ = node;
/* 000064 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexEnvironmentNode);
/* 000064 */ 		}) ())) {
/* 000066 */ 			var is_environment = true;
/* 000070 */ 			if (__t__ (self.include_environment_begin_end)) {
/* 000071 */ 				var verbatim_contents = (function () {
/* 000071 */ 					var __accu0__ = node;
/* 000071 */ 					return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000071 */ 				}) ();
/* 000071 */ 			}
/* 000072 */ 			else {
/* 000075 */ 				var verbatim_contents = (function () {
/* 000075 */ 					var __accu0__ = node.nodelist;
/* 000075 */ 					return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000075 */ 				}) ();
/* 000075 */ 			}
/* 000078 */ 			var node_args = (function () {
/* 000078 */ 				var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000078 */ 				return __call__ (__accu0__.get_all_arguments_info, __accu0__, 'verbatim_lang', __kwargtrans__ ({skip_nonexistent_arguments: true}));
/* 000078 */ 			}) ();
/* 000082 */ 			if (__t__ (__in__ ('verbatim_lang', node_args))) {
/* 000083 */ 				var verbatim_lang = (function () {
/* 000083 */ 					var __accu0__ = __getitem__ (node_args, 'verbatim_lang');
/* 000083 */ 					return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000083 */ 				}) ();
/* 000083 */ 			}
/* 000083 */ 		}
/* 000084 */ 		else {
/* 000087 */ 			var is_inline = true;
/* 000089 */ 			var node_args = (function () {
/* 000089 */ 				var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000089 */ 				return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['verbatim_content', 'verbatim_lang']), __kwargtrans__ ({skip_nonexistent_arguments: true}));
/* 000089 */ 			}) ();
/* 000094 */ 			var verbatim_contents = (function () {
/* 000094 */ 				var __accu0__ = __getitem__ (node_args, 'verbatim_content');
/* 000094 */ 				return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000094 */ 			}) ();
/* 000096 */ 			if (__t__ (__in__ ('verbatim_lang', node_args))) {
/* 000097 */ 				var verbatim_lang = (function () {
/* 000097 */ 					var __accu0__ = __getitem__ (node_args, 'verbatim_lang');
/* 000097 */ 					return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000097 */ 				}) ();
/* 000097 */ 			}
/* 000097 */ 		}
/* 000099 */ 		var annotations = __t__ (self.annotations) || [];
/* 000101 */ 		if (__t__ (self.verbatimtype !== null)) {
/* 000102 */ 			(function () {
/* 000102 */ 				var __accu0__ = annotations;
/* 000102 */ 				return __call__ (__accu0__.append, __accu0__, 'verbatim{}'.format (self.verbatimtype));
/* 000102 */ 			}) ();
/* 000103 */ 			if (__t__ (is_inline)) {
/* 000104 */ 				(function () {
/* 000104 */ 					var __accu0__ = annotations;
/* 000104 */ 					return __call__ (__accu0__.append, __accu0__, 'verbatim{}-inline'.format (self.verbatimtype));
/* 000104 */ 				}) ();
/* 000104 */ 			}
/* 000105 */ 			if (__t__ (is_environment)) {
/* 000106 */ 				(function () {
/* 000106 */ 					var __accu0__ = annotations;
/* 000106 */ 					return __call__ (__accu0__.append, __accu0__, 'verbatim{}-environment'.format (self.verbatimtype));
/* 000106 */ 				}) ();
/* 000106 */ 			}
/* 000106 */ 		}
/* 000108 */ 		if (__t__ (verbatim_lang)) {
/* 000109 */ 			(function () {
/* 000109 */ 				var __accu0__ = annotations;
/* 000109 */ 				return __call__ (__accu0__.append, __accu0__, 'verbatim-lang-{}'.format (verbatim_lang));
/* 000109 */ 			}) ();
/* 000109 */ 		}
/* 000111 */ 		return (function () {
/* 000111 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000111 */ 			return __call__ (__accu0__.render_verbatim, __accu0__, verbatim_contents, render_context, __kwargtrans__ ({is_block_level: self.is_block_level, annotations: annotations}));
/* 000111 */ 		}) ();
/* 000111 */ 	});},
/* 000120 */ 	get get_llm_doc () {return __get__ (this, function (self) {
/* 000120 */ 		if (arguments.length) {
/* 000120 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000120 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000120 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000120 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000120 */ 					switch (__attrib0__) {
/* 000120 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000120 */ 					}
/* 000120 */ 				}
/* 000120 */ 			}
/* 000120 */ 		}
/* 000120 */ 		else {
/* 000120 */ 		}
/* 000121 */ 		return 'Typeset verbatim content of type ‘{}’.'.format (self.verbatimtype);
/* 000121 */ 	});}
/* 000121 */ });
/* 000128 */ export var _dobaseconstructors2argslast = function (Me, self, args, kwargs, kwargs_to_first_constructor) {
/* 000128 */ 	if (typeof kwargs_to_first_constructor == 'undefined' || (kwargs_to_first_constructor != null && kwargs_to_first_constructor.hasOwnProperty ("__kwargtrans__"))) {;
/* 000128 */ 		var kwargs_to_first_constructor = null;
/* 000128 */ 	};
/* 000128 */ 	if (arguments.length) {
/* 000128 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000128 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000128 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000128 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000128 */ 				switch (__attrib0__) {
/* 000128 */ 					case 'Me': var Me = __allkwargs0__ [__attrib0__]; break;
/* 000128 */ 					case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000128 */ 					case 'args': var args = __allkwargs0__ [__attrib0__]; break;
/* 000128 */ 					case 'kwargs': var kwargs = __allkwargs0__ [__attrib0__]; break;
/* 000128 */ 					case 'kwargs_to_first_constructor': var kwargs_to_first_constructor = __allkwargs0__ [__attrib0__]; break;
/* 000128 */ 				}
/* 000128 */ 			}
/* 000128 */ 		}
/* 000128 */ 	}
/* 000128 */ 	else {
/* 000128 */ 	}
/* 000130 */ 	var kwargs1 = dict ({});
/* 000131 */ 	var kwargs2 = __call__ (dict, null, kwargs);
/* 000132 */ 	if (__t__ (kwargs_to_first_constructor)) {
/* 000133 */ 		var __iterable0__ = kwargs_to_first_constructor;
/* 000133 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000133 */ 			var kwarg = __getitem__ (__iterable0__, __index0__);
/* 000134 */ 			if (__t__ (__in__ (kwarg, kwargs2))) {
/* 000135 */ 				__setitem__ (kwargs1, kwarg, (function () {
/* 000135 */ 					var __accu0__ = kwargs2;
/* 000135 */ 					return __call__ (__accu0__.py_pop, __accu0__, kwarg);
/* 000135 */ 				}) ());
/* 000135 */ 			}
/* 000135 */ 		}
/* 000135 */ 	}
/* 000136 */ 	(function () {
/* 000136 */ 		var __accu0__ = __getitem__ (Me.__bases__, 0);
/* 000136 */ 		return __call__ (__accu0__.__init__, __accu0__, self, __kwargtrans__ (kwargs1));
/* 000136 */ 	}) ();
/* 000137 */ 	(function () {
/* 000137 */ 		var __accu0__ = __getitem__ (Me.__bases__, 1);
/* 000137 */ 		return __call__ (__accu0__.__init__, __accu0__, self, ...args, __kwargtrans__ (kwargs2));
/* 000137 */ 	}) ();
/* 000137 */ };
/* 000144 */ export var make_verbatim_args_spec_list = function (ismacro, verbatim_delimiters, optional_lang_arg) {
/* 000144 */ 	if (arguments.length) {
/* 000144 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000144 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000144 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000144 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000144 */ 				switch (__attrib0__) {
/* 000144 */ 					case 'ismacro': var ismacro = __allkwargs0__ [__attrib0__]; break;
/* 000144 */ 					case 'verbatim_delimiters': var verbatim_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000144 */ 					case 'optional_lang_arg': var optional_lang_arg = __allkwargs0__ [__attrib0__]; break;
/* 000144 */ 				}
/* 000144 */ 			}
/* 000144 */ 		}
/* 000144 */ 	}
/* 000144 */ 	else {
/* 000144 */ 	}
/* 000145 */ 	var a = [];
/* 000146 */ 	if (__t__ (optional_lang_arg)) {
/* 000147 */ 		(function () {
/* 000147 */ 			var __accu0__ = a;
/* 000149 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (LLMArgumentSpec, null, __kwargtrans__ ({parser: (function () {
/* 000149 */ 				var __accu1__ = latexnodes_parsers;
/* 000149 */ 				return __call__ (__accu1__.LatexCharsGroupParser, __accu1__, __kwargtrans__ ({delimiters: tuple (['[', ']']), optional: true, allow_pre_space: false, enable_comments: false, enable_groups: false}));
/* 000149 */ 			}) (), argname: 'verbatim_lang', llm_doc: 'Programming language in which to interpret the verbatim content, if applicable.  Some formatters might support syntax highlighting in the relevant language.'})));
/* 000149 */ 		}) ();
/* 000149 */ 	}
/* 000162 */ 	if (__t__ (ismacro)) {
/* 000163 */ 		(function () {
/* 000163 */ 			var __accu0__ = a;
/* 000165 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (LLMArgumentSpec, null, __kwargtrans__ ({parser: (function () {
/* 000165 */ 				var __accu1__ = latexnodes_parsers;
/* 000165 */ 				return __call__ (__accu1__.LatexDelimitedVerbatimParser, __accu1__, __kwargtrans__ ({delimiters: verbatim_delimiters}));
/* 000165 */ 			}) (), argname: 'verbatim_content', llm_doc: 'The raw, verbatim content to typeset.  Any special characters, including \\verbcode+\\+, \\verbcode+{+, and \\verbcode+}+, will be typeset as is.'})));
/* 000165 */ 		}) ();
/* 000165 */ 	}
/* 000174 */ 	return a;
/* 000174 */ };
/* 000176 */ export var VerbatimMacro =  __class__ ('VerbatimMacro', [VerbatimSpecInfo, macrospec.MacroSpec], {
/* 000176 */ 	__module__: __name__,
/* 000177 */ 	get __init__ () {return __get__ (this, function (self, macroname, verbatim_delimiters) {
/* 000177 */ 		if (typeof verbatim_delimiters == 'undefined' || (verbatim_delimiters != null && verbatim_delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000177 */ 			var verbatim_delimiters = null;
/* 000177 */ 		};
/* 000177 */ 		var optional_lang_arg = false;
/* 000177 */ 		var kwargs = dict ();
/* 000177 */ 		if (arguments.length) {
/* 000177 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000177 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000177 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000177 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000177 */ 					switch (__attrib0__) {
/* 000177 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000177 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000177 */ 						case 'verbatim_delimiters': var verbatim_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000177 */ 						case 'optional_lang_arg': var optional_lang_arg = __allkwargs0__ [__attrib0__]; break;
/* 000177 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000177 */ 					}
/* 000177 */ 				}
/* 000177 */ 				delete kwargs.__kwargtrans__;
/* 000177 */ 			}
/* 000177 */ 		}
/* 000177 */ 		else {
/* 000177 */ 		}
/* 000184 */ 		var newkwargs = __call__ (dict, null, __kwargtrans__ (__mergekwargtrans__ ({macroname: macroname, arguments_spec_list: __call__ (make_verbatim_args_spec_list, null, true, verbatim_delimiters, optional_lang_arg)}, kwargs)));
/* 000189 */ 		__call__ (_dobaseconstructors2argslast, null, VerbatimMacro, self, [], newkwargs);
/* 000189 */ 	});}
/* 000189 */ });
/* 000192 */ export var VerbatimEnvironment =  __class__ ('VerbatimEnvironment', [VerbatimSpecInfo, macrospec.EnvironmentSpec], {
/* 000192 */ 	__module__: __name__,
/* 000193 */ 	get __init__ () {return __get__ (this, function (self, environmentname) {
/* 000193 */ 		var optional_lang_arg = false;
/* 000193 */ 		var kwargs = dict ();
/* 000193 */ 		if (arguments.length) {
/* 000193 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000193 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000193 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000193 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000193 */ 					switch (__attrib0__) {
/* 000193 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000193 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000193 */ 						case 'optional_lang_arg': var optional_lang_arg = __allkwargs0__ [__attrib0__]; break;
/* 000193 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000193 */ 					}
/* 000193 */ 				}
/* 000193 */ 				delete kwargs.__kwargtrans__;
/* 000193 */ 			}
/* 000193 */ 		}
/* 000193 */ 		else {
/* 000193 */ 		}
/* 000196 */ 		var newkwargs = __call__ (dict, null, __kwargtrans__ (__mergekwargtrans__ ({environmentname: environmentname, arguments_spec_list: __call__ (make_verbatim_args_spec_list, null, false, null, optional_lang_arg)}, kwargs)));
/* 000201 */ 		__call__ (_dobaseconstructors2argslast, null, VerbatimEnvironment, self, [], newkwargs);
/* 000201 */ 	});}
/* 000201 */ });
/* 000207 */ export var FeatureVerbatim =  __class__ ('FeatureVerbatim', [SimpleLatexDefinitionsFeature], {
/* 000207 */ 	__module__: __name__,
/* 000209 */ 	feature_name: 'verbatim',
/* 000210 */ 	feature_title: 'Verbatim content typesetting',
/* 000214 */ 	verbatim_include_types: tuple (['text', 'code', 'a']),
/* 000216 */ 	get feature_llm_doc () {return __get__ (this, function (self) {
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
/* 000217 */ 		var s = "\n        You can typeset verbatim content using the \\verbcode+\\verb...+ family of\n        macros and environments.  When typesetting verbatim content, any special\n        meaning of characters in LLM is ignored.  E.g., the characters\n        ‘\\verbcode+\\+’, ‘\\verbcode+{+’, ‘\\verbcode+}+’ are typeset as is, and\n        braces don't have to be matched.\n\n        The following verbatim types are available:\n        \\begin{itemize}\n        ";
/* 000227 */ 		if (__t__ (__in__ ('text', self.verbatim_include_types))) {
/* 000228 */ 			var s = __call__ (__iadd__, null, s, '\n            \\item \\verba{text} — the verbatim characters are typeset as is, with no\n                special formatting applied to them.  This verbatim type is intended\n                for inputing special characters into normal text.\n            ');
/* 000228 */ 		}
/* 000233 */ 		if (__t__ (__in__ ('code', self.verbatim_include_types))) {
/* 000234 */ 			var s = __call__ (__iadd__, null, s, '\n            \\item \\verba{code} — the verbatim characters are typeset as a block of\n                code, possibly to be interpreted as a given programming language.\n                Renderers should represent the content as code, e.g., with a monospaced\n                font.\n            ');
/* 000234 */ 		}
/* 000240 */ 		if (__t__ (__in__ ('a', self.verbatim_include_types))) {
/* 000241 */ 			var s = __call__ (__iadd__, null, s, "\n            \\item \\verba{a} — the verbatim characters are typeset as an identifier,\n                typically in italic font.  This command is intended to typeset e.g.\n                keywords or other content that isn't necessarily to be highlighted as\n                computer code.\n            ");
/* 000241 */ 		}
/* 000247 */ 		var s = __call__ (__iadd__, null, s, '\\end{itemize}');
/* 000248 */ 		return s;
/* 000248 */ 	});},
/* 000250 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000250 */ 		if (arguments.length) {
/* 000250 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000250 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000250 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000250 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000250 */ 					switch (__attrib0__) {
/* 000250 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000250 */ 					}
/* 000250 */ 				}
/* 000250 */ 			}
/* 000250 */ 		}
/* 000250 */ 		else {
/* 000250 */ 		}
/* 000251 */ 		var macros = [];
/* 000252 */ 		var environments = [];
/* 000254 */ 		if (__t__ (__in__ ('text', self.verbatim_include_types))) {
/* 000255 */ 			(function () {
/* 000255 */ 				var __accu0__ = macros;
/* 000256 */ 				return __call__ (__accu0__.append, __accu0__, __call__ (VerbatimMacro, null, __kwargtrans__ ({macroname: 'verbtext'})));
/* 000256 */ 			}) ();
/* 000258 */ 			(function () {
/* 000258 */ 				var __accu0__ = environments;
/* 000259 */ 				return __call__ (__accu0__.append, __accu0__, __call__ (VerbatimEnvironment, null, __kwargtrans__ ({environmentname: 'verbatimtext'})));
/* 000259 */ 			}) ();
/* 000259 */ 		}
/* 000261 */ 		if (__t__ (__in__ ('code', self.verbatim_include_types))) {
/* 000262 */ 			(function () {
/* 000262 */ 				var __accu0__ = macros;
/* 000263 */ 				return __call__ (__accu0__.append, __accu0__, __call__ (VerbatimMacro, null, __kwargtrans__ ({macroname: 'verbcode', optional_lang_arg: true, verbatimtype: 'code'})));
/* 000263 */ 			}) ();
/* 000269 */ 			(function () {
/* 000269 */ 				var __accu0__ = environments;
/* 000270 */ 				return __call__ (__accu0__.append, __accu0__, __call__ (VerbatimEnvironment, null, __kwargtrans__ ({environmentname: 'verbatimcode', optional_lang_arg: true, verbatimtype: 'code', is_block_level: true})));
/* 000270 */ 			}) ();
/* 000270 */ 		}
/* 000276 */ 		if (__t__ (__in__ ('a', self.verbatim_include_types))) {
/* 000277 */ 			(function () {
/* 000277 */ 				var __accu0__ = macros;
/* 000278 */ 				return __call__ (__accu0__.append, __accu0__, __call__ (VerbatimMacro, null, __kwargtrans__ ({macroname: 'verba', optional_lang_arg: true, verbatimtype: 'a'})));
/* 000278 */ 			}) ();
/* 000278 */ 		}
/* 000285 */ 		return dict ({'macros': macros, 'environments': environments});
/* 000285 */ 	});}
/* 000285 */ });
/* 000291 */ export var FeatureClass = FeatureVerbatim;
/* 000007 */ 
//# sourceMappingURL=llm.feature.verbatim.map