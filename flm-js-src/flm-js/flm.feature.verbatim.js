/* 000001 */ // Transcrypt'ed from Python, 2023-08-09 17:29:32
/* 000007 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000015 */ import {SimpleLatexDefinitionsFeature} from './flm.feature._base.js';
/* 000013 */ import {FLMArgumentSpec} from './flm.flmenvironment.js';
/* 000012 */ import {FLMSpecInfo} from './flm.flmspecinfo.js';
/* 000010 */ import * as latexnodes_nodes from './pylatexenc.latexnodes.nodes.js';
/* 000009 */ import * as latexnodes_parsers from './pylatexenc.latexnodes.parsers.js';
/* 000008 */ import {ParsedArgumentsInfo} from './pylatexenc.latexnodes.js';
/* 000007 */ import * as macrospec from './pylatexenc.macrospec.js';
/* 000007 */ export {FLMSpecInfo, SimpleLatexDefinitionsFeature, macrospec, latexnodes_parsers, latexnodes_nodes, FLMArgumentSpec, ParsedArgumentsInfo};
/* 000001 */ var __name__ = 'flm.feature.verbatim';
/* 000020 */ export var VerbatimSpecInfo =  __class__ ('VerbatimSpecInfo', [FLMSpecInfo], {
/* 000020 */ 	__module__: __name__,
/* 000022 */ 	allowed_in_standalone_mode: true,
/* 000030 */ 	get __init__ () {return __get__ (this, function (self, annotations, verbatimtype, is_block_level, include_environment_begin_end) {
/* 000030 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000030 */ 			var annotations = null;
/* 000030 */ 		};
/* 000030 */ 		if (typeof verbatimtype == 'undefined' || (verbatimtype != null && verbatimtype.hasOwnProperty ("__kwargtrans__"))) {;
/* 000030 */ 			var verbatimtype = 'text';
/* 000030 */ 		};
/* 000030 */ 		if (typeof is_block_level == 'undefined' || (is_block_level != null && is_block_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000030 */ 			var is_block_level = false;
/* 000030 */ 		};
/* 000030 */ 		if (typeof include_environment_begin_end == 'undefined' || (include_environment_begin_end != null && include_environment_begin_end.hasOwnProperty ("__kwargtrans__"))) {;
/* 000030 */ 			var include_environment_begin_end = false;
/* 000030 */ 		};
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
/* 000030 */ 		}
/* 000030 */ 		else {
/* 000030 */ 		}
/* 000036 */ 		__call__ (__call__ (__super__, null, VerbatimSpecInfo, '__init__'), null, self, __kwargtrans__ (kwargs));
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
/* 000120 */ 	get get_flm_doc () {return __get__ (this, function (self) {
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
/* 000125 */ export var make_verbatim_args_spec_list = function (ismacro, verbatim_delimiters, optional_lang_arg) {
/* 000125 */ 	if (arguments.length) {
/* 000125 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000125 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000125 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000125 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000125 */ 				switch (__attrib0__) {
/* 000125 */ 					case 'ismacro': var ismacro = __allkwargs0__ [__attrib0__]; break;
/* 000125 */ 					case 'verbatim_delimiters': var verbatim_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000125 */ 					case 'optional_lang_arg': var optional_lang_arg = __allkwargs0__ [__attrib0__]; break;
/* 000125 */ 				}
/* 000125 */ 			}
/* 000125 */ 		}
/* 000125 */ 	}
/* 000125 */ 	else {
/* 000125 */ 	}
/* 000126 */ 	var a = [];
/* 000127 */ 	if (__t__ (optional_lang_arg)) {
/* 000128 */ 		(function () {
/* 000128 */ 			var __accu0__ = a;
/* 000130 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: (function () {
/* 000130 */ 				var __accu1__ = latexnodes_parsers;
/* 000130 */ 				return __call__ (__accu1__.LatexCharsGroupParser, __accu1__, __kwargtrans__ ({delimiters: tuple (['[', ']']), optional: true, allow_pre_space: false, enable_comments: false, enable_groups: false}));
/* 000130 */ 			}) (), argname: 'verbatim_lang', flm_doc: 'Programming language in which to interpret the verbatim content, if applicable.  Some formatters might support syntax highlighting in the relevant language.'})));
/* 000130 */ 		}) ();
/* 000130 */ 	}
/* 000143 */ 	if (__t__ (ismacro)) {
/* 000144 */ 		(function () {
/* 000144 */ 			var __accu0__ = a;
/* 000146 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: (function () {
/* 000146 */ 				var __accu1__ = latexnodes_parsers;
/* 000146 */ 				return __call__ (__accu1__.LatexDelimitedVerbatimParser, __accu1__, __kwargtrans__ ({delimiters: verbatim_delimiters}));
/* 000146 */ 			}) (), argname: 'verbatim_content', flm_doc: 'The raw, verbatim content to typeset.  Any special characters, including \\verbcode+\\+, \\verbcode+{+, and \\verbcode+}+, will be typeset as is.'})));
/* 000146 */ 		}) ();
/* 000146 */ 	}
/* 000155 */ 	return a;
/* 000155 */ };
/* 000158 */ export var VerbatimMacro =  __class__ ('VerbatimMacro', [VerbatimSpecInfo], {
/* 000158 */ 	__module__: __name__,
/* 000159 */ 	get __init__ () {return __get__ (this, function (self, macroname, verbatim_delimiters) {
/* 000159 */ 		if (typeof verbatim_delimiters == 'undefined' || (verbatim_delimiters != null && verbatim_delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000159 */ 			var verbatim_delimiters = null;
/* 000159 */ 		};
/* 000159 */ 		var optional_lang_arg = false;
/* 000159 */ 		var kwargs = dict ();
/* 000159 */ 		if (arguments.length) {
/* 000159 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000159 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000159 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000159 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000159 */ 					switch (__attrib0__) {
/* 000159 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000159 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000159 */ 						case 'verbatim_delimiters': var verbatim_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000159 */ 						case 'optional_lang_arg': var optional_lang_arg = __allkwargs0__ [__attrib0__]; break;
/* 000159 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000159 */ 					}
/* 000159 */ 				}
/* 000159 */ 				delete kwargs.__kwargtrans__;
/* 000159 */ 			}
/* 000159 */ 		}
/* 000159 */ 		else {
/* 000159 */ 		}
/* 000167 */ 		__call__ (__call__ (__super__, null, VerbatimMacro, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({macroname: macroname, spec_node_parser_type: 'macro', arguments_spec_list: __call__ (make_verbatim_args_spec_list, null, true, verbatim_delimiters, optional_lang_arg)}, kwargs)));
/* 000172 */ 		self.verbatim_delimiters = verbatim_delimiters;
/* 000173 */ 		self.optional_lang_arg = optional_lang_arg;
/* 000173 */ 	});},
/* 000175 */ 	_fields: tuple (['macroname', 'verbatim_delimiters', 'optional_lang_arg', 'annotations', 'verbatimtype', 'is_block_level', 'include_environment_begin_end'])
/* 000175 */ });
/* 000181 */ export var VerbatimEnvironment =  __class__ ('VerbatimEnvironment', [VerbatimSpecInfo], {
/* 000181 */ 	__module__: __name__,
/* 000182 */ 	get __init__ () {return __get__ (this, function (self, environmentname) {
/* 000182 */ 		var optional_lang_arg = false;
/* 000182 */ 		var kwargs = dict ();
/* 000182 */ 		if (arguments.length) {
/* 000182 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000182 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000182 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000182 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000182 */ 					switch (__attrib0__) {
/* 000182 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000182 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000182 */ 						case 'optional_lang_arg': var optional_lang_arg = __allkwargs0__ [__attrib0__]; break;
/* 000182 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000182 */ 					}
/* 000182 */ 				}
/* 000182 */ 				delete kwargs.__kwargtrans__;
/* 000182 */ 			}
/* 000182 */ 		}
/* 000182 */ 		else {
/* 000182 */ 		}
/* 000186 */ 		__call__ (__call__ (__super__, null, VerbatimEnvironment, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({environmentname: environmentname, spec_node_parser_type: 'environment', arguments_spec_list: __call__ (make_verbatim_args_spec_list, null, false, null, optional_lang_arg)}, kwargs)));
/* 000191 */ 		self.optional_lang_arg = optional_lang_arg;
/* 000191 */ 	});},
/* 000193 */ 	_fields: tuple (['environmentname', 'optional_lang_arg', 'annotations', 'verbatimtype', 'is_block_level', 'include_environment_begin_end'])
/* 000193 */ });
/* 000202 */ export var FeatureVerbatim =  __class__ ('FeatureVerbatim', [SimpleLatexDefinitionsFeature], {
/* 000202 */ 	__module__: __name__,
/* 000204 */ 	feature_name: 'verbatim',
/* 000205 */ 	feature_title: 'Verbatim content typesetting',
/* 000209 */ 	verbatim_include_types: tuple (['text', 'code', 'a']),
/* 000211 */ 	get feature_flm_doc () {return __get__ (this, function (self) {
/* 000211 */ 		if (arguments.length) {
/* 000211 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000211 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000211 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000211 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000211 */ 					switch (__attrib0__) {
/* 000211 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000211 */ 					}
/* 000211 */ 				}
/* 000211 */ 			}
/* 000211 */ 		}
/* 000211 */ 		else {
/* 000211 */ 		}
/* 000212 */ 		var s = "\n        You can typeset verbatim content using the \\verbcode+\\verb...+ family of\n        macros and environments.  When typesetting verbatim content, any special\n        meaning of characters in FLM is ignored.  E.g., the characters\n        ‘\\verbcode+\\+’, ‘\\verbcode+{+’, ‘\\verbcode+}+’ are typeset as is, and\n        braces don't have to be matched.\n\n        The following verbatim types are available:\n        \\begin{itemize}\n        ";
/* 000222 */ 		if (__t__ (__in__ ('text', self.verbatim_include_types))) {
/* 000223 */ 			var s = __call__ (__iadd__, null, s, '\n            \\item \\verba{text} — the verbatim characters are typeset as is, with no\n                special formatting applied to them.  This verbatim type is intended\n                for inputing special characters into normal text.\n            ');
/* 000223 */ 		}
/* 000228 */ 		if (__t__ (__in__ ('code', self.verbatim_include_types))) {
/* 000229 */ 			var s = __call__ (__iadd__, null, s, '\n            \\item \\verba{code} — the verbatim characters are typeset as a block of\n                code, possibly to be interpreted as a given programming language.\n                Renderers should represent the content as code, e.g., with a monospaced\n                font.\n            ');
/* 000229 */ 		}
/* 000235 */ 		if (__t__ (__in__ ('a', self.verbatim_include_types))) {
/* 000236 */ 			var s = __call__ (__iadd__, null, s, "\n            \\item \\verba{a} — the verbatim characters are typeset as an identifier,\n                typically in italic font.  This command is intended to typeset e.g.\n                keywords or other content that isn't necessarily to be highlighted as\n                computer code.\n            ");
/* 000236 */ 		}
/* 000242 */ 		var s = __call__ (__iadd__, null, s, '\\end{itemize}');
/* 000243 */ 		return s;
/* 000243 */ 	});},
/* 000245 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000245 */ 		if (arguments.length) {
/* 000245 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000245 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000245 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000245 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000245 */ 					switch (__attrib0__) {
/* 000245 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000245 */ 					}
/* 000245 */ 				}
/* 000245 */ 			}
/* 000245 */ 		}
/* 000245 */ 		else {
/* 000245 */ 		}
/* 000246 */ 		var macros = [];
/* 000247 */ 		var environments = [];
/* 000249 */ 		if (__t__ (__in__ ('text', self.verbatim_include_types))) {
/* 000250 */ 			(function () {
/* 000250 */ 				var __accu0__ = macros;
/* 000251 */ 				return __call__ (__accu0__.append, __accu0__, __call__ (VerbatimMacro, null, __kwargtrans__ ({macroname: 'verbtext'})));
/* 000251 */ 			}) ();
/* 000253 */ 			(function () {
/* 000253 */ 				var __accu0__ = environments;
/* 000254 */ 				return __call__ (__accu0__.append, __accu0__, __call__ (VerbatimEnvironment, null, __kwargtrans__ ({environmentname: 'verbatimtext'})));
/* 000254 */ 			}) ();
/* 000254 */ 		}
/* 000256 */ 		if (__t__ (__in__ ('code', self.verbatim_include_types))) {
/* 000257 */ 			(function () {
/* 000257 */ 				var __accu0__ = macros;
/* 000258 */ 				return __call__ (__accu0__.append, __accu0__, __call__ (VerbatimMacro, null, __kwargtrans__ ({macroname: 'verbcode', optional_lang_arg: true, verbatimtype: 'code'})));
/* 000258 */ 			}) ();
/* 000264 */ 			(function () {
/* 000264 */ 				var __accu0__ = environments;
/* 000265 */ 				return __call__ (__accu0__.append, __accu0__, __call__ (VerbatimEnvironment, null, __kwargtrans__ ({environmentname: 'verbatimcode', optional_lang_arg: true, verbatimtype: 'code', is_block_level: true})));
/* 000265 */ 			}) ();
/* 000265 */ 		}
/* 000271 */ 		if (__t__ (__in__ ('a', self.verbatim_include_types))) {
/* 000272 */ 			(function () {
/* 000272 */ 				var __accu0__ = macros;
/* 000273 */ 				return __call__ (__accu0__.append, __accu0__, __call__ (VerbatimMacro, null, __kwargtrans__ ({macroname: 'verba', optional_lang_arg: true, verbatimtype: 'a'})));
/* 000273 */ 			}) ();
/* 000273 */ 		}
/* 000280 */ 		return dict ({'macros': macros, 'environments': environments});
/* 000280 */ 	});}
/* 000280 */ });
/* 000286 */ export var FeatureClass = FeatureVerbatim;
/* 000007 */ 
//# sourceMappingURL=flm.feature.verbatim.map