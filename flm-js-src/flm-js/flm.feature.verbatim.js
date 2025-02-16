/* 000001 */ // Transcrypt'ed from Python, 2025-02-16 13:23:55
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000013 */ import {SimpleLatexDefinitionsFeature} from './flm.feature._base.js';
/* 000011 */ import {FLMArgumentSpec} from './flm.flmenvironment.js';
/* 000010 */ import {FLMSpecInfo} from './flm.flmspecinfo.js';
/* 000008 */ import * as latexnodes_nodes from './pylatexenc.latexnodes.nodes.js';
/* 000007 */ import * as latexnodes_parsers from './pylatexenc.latexnodes.parsers.js';
/* 000006 */ import {ParsedArgumentsInfo} from './pylatexenc.latexnodes.js';
/* 000006 */ export {FLMSpecInfo, latexnodes_nodes, SimpleLatexDefinitionsFeature, FLMArgumentSpec, ParsedArgumentsInfo, latexnodes_parsers};
/* 000001 */ var __name__ = 'flm.feature.verbatim';
/* 000018 */ export var VerbatimSpecInfo =  __class__ ('VerbatimSpecInfo', [FLMSpecInfo], {
/* 000018 */ 	__module__: __name__,
/* 000020 */ 	allowed_in_standalone_mode: true,
/* 000028 */ 	get __init__ () {return __get__ (this, function (self, annotations, verbatimtype, is_block_level, include_environment_begin_end) {
/* 000028 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000028 */ 			var annotations = null;
/* 000028 */ 		};
/* 000028 */ 		if (typeof verbatimtype == 'undefined' || (verbatimtype != null && verbatimtype.hasOwnProperty ("__kwargtrans__"))) {;
/* 000028 */ 			var verbatimtype = 'text';
/* 000028 */ 		};
/* 000028 */ 		if (typeof is_block_level == 'undefined' || (is_block_level != null && is_block_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000028 */ 			var is_block_level = false;
/* 000028 */ 		};
/* 000028 */ 		if (typeof include_environment_begin_end == 'undefined' || (include_environment_begin_end != null && include_environment_begin_end.hasOwnProperty ("__kwargtrans__"))) {;
/* 000028 */ 			var include_environment_begin_end = false;
/* 000028 */ 		};
/* 000028 */ 		var kwargs = dict ();
/* 000028 */ 		if (arguments.length) {
/* 000028 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000028 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000028 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000028 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000028 */ 					switch (__attrib0__) {
/* 000028 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000028 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000028 */ 						case 'verbatimtype': var verbatimtype = __allkwargs0__ [__attrib0__]; break;
/* 000028 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000028 */ 						case 'include_environment_begin_end': var include_environment_begin_end = __allkwargs0__ [__attrib0__]; break;
/* 000028 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000028 */ 					}
/* 000028 */ 				}
/* 000028 */ 				delete kwargs.__kwargtrans__;
/* 000028 */ 			}
/* 000028 */ 		}
/* 000028 */ 		else {
/* 000028 */ 		}
/* 000034 */ 		__call__ (__call__ (__super__, null, VerbatimSpecInfo, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000035 */ 		self.annotations = annotations;
/* 000036 */ 		self.verbatimtype = verbatimtype;
/* 000038 */ 		self.include_environment_begin_end = include_environment_begin_end;
/* 000041 */ 		self.is_block_level = is_block_level;
/* 000041 */ 	});},
/* 000043 */ 	get make_body_parser () {return __get__ (this, function (self, token, nodeargd, arg_parsing_state_delta) {
/* 000043 */ 		if (arguments.length) {
/* 000043 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000043 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000043 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000043 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000043 */ 					switch (__attrib0__) {
/* 000043 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000043 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000043 */ 						case 'nodeargd': var nodeargd = __allkwargs0__ [__attrib0__]; break;
/* 000043 */ 						case 'arg_parsing_state_delta': var arg_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000043 */ 					}
/* 000043 */ 				}
/* 000043 */ 			}
/* 000043 */ 		}
/* 000043 */ 		else {
/* 000043 */ 		}
/* 000043 */ 		assert (__eq__ (token.tok, 'begin_environment'));
/* 000048 */ 		var environment_name = token.arg;
/* 000049 */ 		return (function () {
/* 000049 */ 			var __accu0__ = latexnodes_parsers;
/* 000049 */ 			return __call__ (__accu0__.LatexVerbatimEnvironmentContentsParser, __accu0__, __kwargtrans__ ({environment_name: environment_name}));
/* 000049 */ 		}) ();
/* 000049 */ 	});},
/* 000053 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000053 */ 		if (arguments.length) {
/* 000053 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000053 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000053 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000053 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000053 */ 					switch (__attrib0__) {
/* 000053 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000053 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000053 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000053 */ 					}
/* 000053 */ 				}
/* 000053 */ 			}
/* 000053 */ 		}
/* 000053 */ 		else {
/* 000053 */ 		}
/* 000057 */ 		var verbatim_lang = null;
/* 000059 */ 		var is_inline = false;
/* 000060 */ 		var is_environment = false;
/* 000062 */ 		if (__t__ ((function () {
/* 000062 */ 			var __accu0__ = node;
/* 000062 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexEnvironmentNode);
/* 000062 */ 		}) ())) {
/* 000064 */ 			var is_environment = true;
/* 000068 */ 			if (__t__ (self.include_environment_begin_end)) {
/* 000069 */ 				var verbatim_contents = (function () {
/* 000069 */ 					var __accu0__ = node;
/* 000069 */ 					return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000069 */ 				}) ();
/* 000069 */ 			}
/* 000070 */ 			else {
/* 000073 */ 				var verbatim_contents = (function () {
/* 000073 */ 					var __accu0__ = node.nodelist;
/* 000073 */ 					return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000073 */ 				}) ();
/* 000073 */ 			}
/* 000076 */ 			var node_args = (function () {
/* 000076 */ 				var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000076 */ 				return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['verbatim_lang']), __kwargtrans__ ({skip_nonexistent_arguments: true}));
/* 000076 */ 			}) ();
/* 000080 */ 			if (__t__ (__in__ ('verbatim_lang', node_args))) {
/* 000081 */ 				var verbatim_lang = (function () {
/* 000081 */ 					var __accu0__ = __getitem__ (node_args, 'verbatim_lang');
/* 000081 */ 					return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000081 */ 				}) ();
/* 000081 */ 			}
/* 000081 */ 		}
/* 000082 */ 		else {
/* 000085 */ 			var is_inline = true;
/* 000087 */ 			var node_args = (function () {
/* 000087 */ 				var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000087 */ 				return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['verbatim_content', 'verbatim_lang']), __kwargtrans__ ({skip_nonexistent_arguments: true}));
/* 000087 */ 			}) ();
/* 000092 */ 			var verbatim_contents = (function () {
/* 000092 */ 				var __accu0__ = __getitem__ (node_args, 'verbatim_content');
/* 000092 */ 				return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000092 */ 			}) ();
/* 000094 */ 			if (__t__ (__in__ ('verbatim_lang', node_args))) {
/* 000095 */ 				var verbatim_lang = (function () {
/* 000095 */ 					var __accu0__ = __getitem__ (node_args, 'verbatim_lang');
/* 000095 */ 					return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000095 */ 				}) ();
/* 000095 */ 			}
/* 000095 */ 		}
/* 000097 */ 		var annotations = __t__ (self.annotations) || [];
/* 000099 */ 		if (__t__ (self.verbatimtype !== null)) {
/* 000100 */ 			(function () {
/* 000100 */ 				var __accu0__ = annotations;
/* 000100 */ 				return __call__ (__accu0__.append, __accu0__, 'verbatim{}'.format (self.verbatimtype));
/* 000100 */ 			}) ();
/* 000101 */ 			if (__t__ (is_inline)) {
/* 000102 */ 				(function () {
/* 000102 */ 					var __accu0__ = annotations;
/* 000102 */ 					return __call__ (__accu0__.append, __accu0__, 'verbatim{}-inline'.format (self.verbatimtype));
/* 000102 */ 				}) ();
/* 000102 */ 			}
/* 000103 */ 			if (__t__ (is_environment)) {
/* 000104 */ 				(function () {
/* 000104 */ 					var __accu0__ = annotations;
/* 000104 */ 					return __call__ (__accu0__.append, __accu0__, 'verbatim{}-environment'.format (self.verbatimtype));
/* 000104 */ 				}) ();
/* 000104 */ 			}
/* 000104 */ 		}
/* 000106 */ 		if (__t__ (verbatim_lang)) {
/* 000107 */ 			(function () {
/* 000107 */ 				var __accu0__ = annotations;
/* 000107 */ 				return __call__ (__accu0__.append, __accu0__, 'verbatim-lang-{}'.format (verbatim_lang));
/* 000107 */ 			}) ();
/* 000107 */ 		}
/* 000109 */ 		return (function () {
/* 000109 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000109 */ 			return __call__ (__accu0__.render_verbatim, __accu0__, verbatim_contents, render_context, __kwargtrans__ ({is_block_level: self.is_block_level, annotations: annotations}));
/* 000109 */ 		}) ();
/* 000109 */ 	});},
/* 000118 */ 	get get_flm_doc () {return __get__ (this, function (self) {
/* 000118 */ 		if (arguments.length) {
/* 000118 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000118 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000118 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000118 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000118 */ 					switch (__attrib0__) {
/* 000118 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000118 */ 					}
/* 000118 */ 				}
/* 000118 */ 			}
/* 000118 */ 		}
/* 000118 */ 		else {
/* 000118 */ 		}
/* 000119 */ 		return 'Typeset verbatim content of type ‘{}’.'.format (self.verbatimtype);
/* 000119 */ 	});}
/* 000119 */ });
/* 000123 */ export var make_verbatim_args_spec_list = function (ismacro, verbatim_delimiters, optional_lang_arg) {
/* 000123 */ 	if (arguments.length) {
/* 000123 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000123 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000123 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000123 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000123 */ 				switch (__attrib0__) {
/* 000123 */ 					case 'ismacro': var ismacro = __allkwargs0__ [__attrib0__]; break;
/* 000123 */ 					case 'verbatim_delimiters': var verbatim_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000123 */ 					case 'optional_lang_arg': var optional_lang_arg = __allkwargs0__ [__attrib0__]; break;
/* 000123 */ 				}
/* 000123 */ 			}
/* 000123 */ 		}
/* 000123 */ 	}
/* 000123 */ 	else {
/* 000123 */ 	}
/* 000124 */ 	var a = [];
/* 000125 */ 	if (__t__ (optional_lang_arg)) {
/* 000126 */ 		(function () {
/* 000126 */ 			var __accu0__ = a;
/* 000128 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: (function () {
/* 000128 */ 				var __accu1__ = latexnodes_parsers;
/* 000128 */ 				return __call__ (__accu1__.LatexCharsGroupParser, __accu1__, __kwargtrans__ ({delimiters: tuple (['[', ']']), optional: true, allow_pre_space: false, enable_comments: false, enable_groups: false}));
/* 000128 */ 			}) (), argname: 'verbatim_lang', flm_doc: 'Programming language in which to interpret the verbatim content, if applicable.  Some formatters might support syntax highlighting in the relevant language.'})));
/* 000128 */ 		}) ();
/* 000128 */ 	}
/* 000141 */ 	if (__t__ (ismacro)) {
/* 000142 */ 		(function () {
/* 000142 */ 			var __accu0__ = a;
/* 000144 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: (function () {
/* 000144 */ 				var __accu1__ = latexnodes_parsers;
/* 000144 */ 				return __call__ (__accu1__.LatexDelimitedVerbatimParser, __accu1__, __kwargtrans__ ({delimiters: verbatim_delimiters}));
/* 000144 */ 			}) (), argname: 'verbatim_content', flm_doc: 'The raw, verbatim content to typeset.  Any special characters, including \\verbcode+\\+, \\verbcode+{+, and \\verbcode+}+, will be typeset as is.'})));
/* 000144 */ 		}) ();
/* 000144 */ 	}
/* 000153 */ 	return a;
/* 000153 */ };
/* 000156 */ export var VerbatimMacro =  __class__ ('VerbatimMacro', [VerbatimSpecInfo], {
/* 000156 */ 	__module__: __name__,
/* 000157 */ 	get __init__ () {return __get__ (this, function (self, macroname, verbatim_delimiters) {
/* 000157 */ 		if (typeof verbatim_delimiters == 'undefined' || (verbatim_delimiters != null && verbatim_delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000157 */ 			var verbatim_delimiters = null;
/* 000157 */ 		};
/* 000157 */ 		var optional_lang_arg = false;
/* 000157 */ 		var kwargs = dict ();
/* 000157 */ 		if (arguments.length) {
/* 000157 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000157 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000157 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000157 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000157 */ 					switch (__attrib0__) {
/* 000157 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000157 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000157 */ 						case 'verbatim_delimiters': var verbatim_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000157 */ 						case 'optional_lang_arg': var optional_lang_arg = __allkwargs0__ [__attrib0__]; break;
/* 000157 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000157 */ 					}
/* 000157 */ 				}
/* 000157 */ 				delete kwargs.__kwargtrans__;
/* 000157 */ 			}
/* 000157 */ 		}
/* 000157 */ 		else {
/* 000157 */ 		}
/* 000165 */ 		__call__ (__call__ (__super__, null, VerbatimMacro, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({macroname: macroname, spec_node_parser_type: 'macro', arguments_spec_list: __call__ (make_verbatim_args_spec_list, null, true, verbatim_delimiters, optional_lang_arg)}, kwargs)));
/* 000170 */ 		self.verbatim_delimiters = verbatim_delimiters;
/* 000171 */ 		self.optional_lang_arg = optional_lang_arg;
/* 000171 */ 	});},
/* 000173 */ 	_fields: tuple (['macroname', 'verbatim_delimiters', 'optional_lang_arg', 'annotations', 'verbatimtype', 'is_block_level', 'include_environment_begin_end'])
/* 000173 */ });
/* 000179 */ export var VerbatimEnvironment =  __class__ ('VerbatimEnvironment', [VerbatimSpecInfo], {
/* 000179 */ 	__module__: __name__,
/* 000180 */ 	get __init__ () {return __get__ (this, function (self, environmentname) {
/* 000180 */ 		var optional_lang_arg = false;
/* 000180 */ 		var kwargs = dict ();
/* 000180 */ 		if (arguments.length) {
/* 000180 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000180 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000180 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000180 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000180 */ 					switch (__attrib0__) {
/* 000180 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000180 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000180 */ 						case 'optional_lang_arg': var optional_lang_arg = __allkwargs0__ [__attrib0__]; break;
/* 000180 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000180 */ 					}
/* 000180 */ 				}
/* 000180 */ 				delete kwargs.__kwargtrans__;
/* 000180 */ 			}
/* 000180 */ 		}
/* 000180 */ 		else {
/* 000180 */ 		}
/* 000184 */ 		__call__ (__call__ (__super__, null, VerbatimEnvironment, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({environmentname: environmentname, spec_node_parser_type: 'environment', arguments_spec_list: __call__ (make_verbatim_args_spec_list, null, false, null, optional_lang_arg)}, kwargs)));
/* 000189 */ 		self.optional_lang_arg = optional_lang_arg;
/* 000189 */ 	});},
/* 000191 */ 	_fields: tuple (['environmentname', 'optional_lang_arg', 'annotations', 'verbatimtype', 'is_block_level', 'include_environment_begin_end'])
/* 000191 */ });
/* 000200 */ export var FeatureVerbatim =  __class__ ('FeatureVerbatim', [SimpleLatexDefinitionsFeature], {
/* 000200 */ 	__module__: __name__,
/* 000202 */ 	feature_name: 'verbatim',
/* 000203 */ 	feature_title: 'Verbatim content typesetting',
/* 000207 */ 	verbatim_include_types: tuple (['text', 'code', 'a']),
/* 000209 */ 	get feature_flm_doc () {return __get__ (this, function (self) {
/* 000209 */ 		if (arguments.length) {
/* 000209 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000209 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000209 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000209 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000209 */ 					switch (__attrib0__) {
/* 000209 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000209 */ 					}
/* 000209 */ 				}
/* 000209 */ 			}
/* 000209 */ 		}
/* 000209 */ 		else {
/* 000209 */ 		}
/* 000210 */ 		var s = "\n        You can typeset verbatim content using the \\verbcode+\\verb...+ family of\n        macros and environments.  When typesetting verbatim content, any special\n        meaning of characters in FLM is ignored.  E.g., the characters\n        ‘\\verbcode+\\+’, ‘\\verbcode+{+’, ‘\\verbcode+}+’ are typeset as is, and\n        braces don't have to be matched.\n\n        The following verbatim types are available:\n        \\begin{itemize}\n        ";
/* 000220 */ 		if (__t__ (__in__ ('text', self.verbatim_include_types))) {
/* 000221 */ 			var s = __call__ (__iadd__, null, s, '\n            \\item \\verba{text} — the verbatim characters are typeset as is, with no\n                special formatting applied to them.  This verbatim type is intended\n                for inputing special characters into normal text.\n            ');
/* 000221 */ 		}
/* 000226 */ 		if (__t__ (__in__ ('code', self.verbatim_include_types))) {
/* 000227 */ 			var s = __call__ (__iadd__, null, s, '\n            \\item \\verba{code} — the verbatim characters are typeset as a block of\n                code, possibly to be interpreted as a given programming language.\n                Renderers should represent the content as code, e.g., with a monospaced\n                font.\n            ');
/* 000227 */ 		}
/* 000233 */ 		if (__t__ (__in__ ('a', self.verbatim_include_types))) {
/* 000234 */ 			var s = __call__ (__iadd__, null, s, "\n            \\item \\verba{a} — the verbatim characters are typeset as an identifier,\n                typically in italic font.  This command is intended to typeset e.g.\n                keywords or other content that isn't necessarily to be highlighted as\n                computer code.\n            ");
/* 000234 */ 		}
/* 000240 */ 		var s = __call__ (__iadd__, null, s, '\\end{itemize}');
/* 000241 */ 		return s;
/* 000241 */ 	});},
/* 000243 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000243 */ 		if (arguments.length) {
/* 000243 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000243 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000243 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000243 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000243 */ 					switch (__attrib0__) {
/* 000243 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000243 */ 					}
/* 000243 */ 				}
/* 000243 */ 			}
/* 000243 */ 		}
/* 000243 */ 		else {
/* 000243 */ 		}
/* 000244 */ 		var macros = [];
/* 000245 */ 		var environments = [];
/* 000247 */ 		if (__t__ (__in__ ('text', self.verbatim_include_types))) {
/* 000248 */ 			(function () {
/* 000248 */ 				var __accu0__ = macros;
/* 000249 */ 				return __call__ (__accu0__.append, __accu0__, __call__ (VerbatimMacro, null, __kwargtrans__ ({macroname: 'verbtext'})));
/* 000249 */ 			}) ();
/* 000251 */ 			(function () {
/* 000251 */ 				var __accu0__ = environments;
/* 000252 */ 				return __call__ (__accu0__.append, __accu0__, __call__ (VerbatimEnvironment, null, __kwargtrans__ ({environmentname: 'verbatimtext'})));
/* 000252 */ 			}) ();
/* 000252 */ 		}
/* 000254 */ 		if (__t__ (__in__ ('code', self.verbatim_include_types))) {
/* 000255 */ 			(function () {
/* 000255 */ 				var __accu0__ = macros;
/* 000256 */ 				return __call__ (__accu0__.append, __accu0__, __call__ (VerbatimMacro, null, __kwargtrans__ ({macroname: 'verbcode', optional_lang_arg: true, verbatimtype: 'code'})));
/* 000256 */ 			}) ();
/* 000262 */ 			(function () {
/* 000262 */ 				var __accu0__ = environments;
/* 000263 */ 				return __call__ (__accu0__.append, __accu0__, __call__ (VerbatimEnvironment, null, __kwargtrans__ ({environmentname: 'verbatimcode', optional_lang_arg: true, verbatimtype: 'code', is_block_level: true})));
/* 000263 */ 			}) ();
/* 000263 */ 		}
/* 000269 */ 		if (__t__ (__in__ ('a', self.verbatim_include_types))) {
/* 000270 */ 			(function () {
/* 000270 */ 				var __accu0__ = macros;
/* 000271 */ 				return __call__ (__accu0__.append, __accu0__, __call__ (VerbatimMacro, null, __kwargtrans__ ({macroname: 'verba', optional_lang_arg: true, verbatimtype: 'a'})));
/* 000271 */ 			}) ();
/* 000271 */ 		}
/* 000278 */ 		return dict ({'macros': macros, 'environments': environments});
/* 000278 */ 	});}
/* 000278 */ });
/* 000284 */ export var FeatureClass = FeatureVerbatim;
/* 000006 */ 
//# sourceMappingURL=flm.feature.verbatim.map