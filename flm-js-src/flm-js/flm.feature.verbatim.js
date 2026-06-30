/* 000001 */ // Transcrypt'ed from Python, 2026-06-30 21:51:22
/* 000016 */ var re = {};
/* 000016 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000027 */ import {SimpleLatexDefinitionsFeature} from './flm.feature._base.js';
/* 000025 */ import {TypeDictWithLatexContextDefinitions} from './flm._typing_helpers.js';
/* 000023 */ import {FLMArgumentSpec} from './flm.flmenvironment.js';
/* 000022 */ import {FLMSpecInfo} from './flm.flmspecinfo.js';
/* 000020 */ import * as latexnodes_nodes from './pylatexenc.latexnodes.nodes.js';
/* 000019 */ import * as latexnodes_parsers from './pylatexenc.latexnodes.parsers.js';
/* 000018 */ import {ParsedArgumentsInfo} from './pylatexenc.latexnodes.js';
/* 000016 */ import * as __module_re__ from './re.js';
/* 000016 */ __nest__ (re, '', __module_re__);
/* 000016 */ export {latexnodes_nodes, ParsedArgumentsInfo, SimpleLatexDefinitionsFeature, TypeDictWithLatexContextDefinitions, FLMSpecInfo, latexnodes_parsers, FLMArgumentSpec};
/* 000001 */ var __name__ = 'flm.feature.verbatim';
/* 000032 */ export var VerbatimSpecInfo =  __class__ ('VerbatimSpecInfo', [FLMSpecInfo], {
/* 000032 */ 	__module__: __name__,
/* 000034 */ 	allowed_in_standalone_mode: true,
/* 000042 */ 	get __init__ () {return __get__ (this, function (self, annotations, verbatimtype, is_block_level, include_environment_begin_end) {
/* 000042 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000042 */ 			var annotations = null;
/* 000042 */ 		};
/* 000042 */ 		if (typeof verbatimtype == 'undefined' || (verbatimtype != null && verbatimtype.hasOwnProperty ("__kwargtrans__"))) {;
/* 000042 */ 			var verbatimtype = 'text';
/* 000042 */ 		};
/* 000042 */ 		if (typeof is_block_level == 'undefined' || (is_block_level != null && is_block_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000042 */ 			var is_block_level = false;
/* 000042 */ 		};
/* 000042 */ 		if (typeof include_environment_begin_end == 'undefined' || (include_environment_begin_end != null && include_environment_begin_end.hasOwnProperty ("__kwargtrans__"))) {;
/* 000042 */ 			var include_environment_begin_end = false;
/* 000042 */ 		};
/* 000042 */ 		var kwargs = dict ();
/* 000042 */ 		if (arguments.length) {
/* 000042 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000042 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000042 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000042 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000042 */ 					switch (__attrib0__) {
/* 000042 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000042 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000042 */ 						case 'verbatimtype': var verbatimtype = __allkwargs0__ [__attrib0__]; break;
/* 000042 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000042 */ 						case 'include_environment_begin_end': var include_environment_begin_end = __allkwargs0__ [__attrib0__]; break;
/* 000042 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000042 */ 					}
/* 000042 */ 				}
/* 000042 */ 				delete kwargs.__kwargtrans__;
/* 000042 */ 			}
/* 000042 */ 		}
/* 000042 */ 		else {
/* 000042 */ 		}
/* 000062 */ 		__call__ (__call__ (__super__, null, VerbatimSpecInfo, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000063 */ 		self.annotations = annotations;
/* 000064 */ 		self.verbatimtype = verbatimtype;
/* 000066 */ 		self.include_environment_begin_end = include_environment_begin_end;
/* 000069 */ 		self.is_block_level = is_block_level;
/* 000069 */ 	});},
/* 000071 */ 	get make_body_parser () {return __get__ (this, function (self, token, nodeargd, arg_parsing_state_delta) {
/* 000071 */ 		if (arguments.length) {
/* 000071 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000071 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000071 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000071 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000071 */ 					switch (__attrib0__) {
/* 000071 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000071 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000071 */ 						case 'nodeargd': var nodeargd = __allkwargs0__ [__attrib0__]; break;
/* 000071 */ 						case 'arg_parsing_state_delta': var arg_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000071 */ 					}
/* 000071 */ 				}
/* 000071 */ 			}
/* 000071 */ 		}
/* 000071 */ 		else {
/* 000071 */ 		}
/* 000071 */ 		assert (__eq__ (token.tok, 'begin_environment'));
/* 000076 */ 		var environment_name = token.arg;
/* 000077 */ 		return (function () {
/* 000077 */ 			var __accu0__ = latexnodes_parsers;
/* 000077 */ 			return __call__ (__accu0__.LatexVerbatimEnvironmentContentsParser, __accu0__, __kwargtrans__ ({environment_name: environment_name}));
/* 000077 */ 		}) ();
/* 000077 */ 	});},
/* 000082 */ 	get _get_verbatim_contents_info () {return __get__ (this, function (self, node) {
/* 000082 */ 		if (arguments.length) {
/* 000082 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000082 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000082 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000082 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000082 */ 					switch (__attrib0__) {
/* 000082 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000082 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000082 */ 					}
/* 000082 */ 				}
/* 000082 */ 			}
/* 000082 */ 		}
/* 000082 */ 		else {
/* 000082 */ 		}
/* 000084 */ 		var verbatim_lang = null;
/* 000085 */ 		var verbatim_contents = null;
/* 000086 */ 		var is_inline = false;
/* 000087 */ 		var is_environment = false;
/* 000089 */ 		if (__t__ ((function () {
/* 000089 */ 			var __accu0__ = node;
/* 000089 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexEnvironmentNode);
/* 000089 */ 		}) ())) {
/* 000091 */ 			var is_environment = true;
/* 000095 */ 			if (__t__ (self.include_environment_begin_end)) {
/* 000096 */ 				var verbatim_contents = (function () {
/* 000096 */ 					var __accu0__ = node;
/* 000096 */ 					return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000096 */ 				}) ();
/* 000096 */ 			}
/* 000097 */ 			else {
/* 000100 */ 				var verbatim_contents = (function () {
/* 000100 */ 					var __accu0__ = node.nodelist;
/* 000100 */ 					return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000100 */ 				}) ();
/* 000100 */ 			}
/* 000103 */ 			var node_args = (function () {
/* 000103 */ 				var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000103 */ 				return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['verbatim_lang']), __kwargtrans__ ({skip_nonexistent_arguments: true}));
/* 000103 */ 			}) ();
/* 000107 */ 			if (__t__ (__in__ ('verbatim_lang', node_args))) {
/* 000108 */ 				var verbatim_lang = (function () {
/* 000108 */ 					var __accu0__ = __getitem__ (node_args, 'verbatim_lang');
/* 000108 */ 					return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000108 */ 				}) ();
/* 000108 */ 			}
/* 000108 */ 		}
/* 000109 */ 		else {
/* 000112 */ 			var is_inline = true;
/* 000114 */ 			var node_args = (function () {
/* 000114 */ 				var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000114 */ 				return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['verbatim_content', 'verbatim_lang']), __kwargtrans__ ({skip_nonexistent_arguments: true}));
/* 000114 */ 			}) ();
/* 000119 */ 			var verbatim_contents = (function () {
/* 000119 */ 				var __accu0__ = __getitem__ (node_args, 'verbatim_content');
/* 000119 */ 				return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000119 */ 			}) ();
/* 000121 */ 			if (__t__ (__in__ ('verbatim_lang', node_args))) {
/* 000122 */ 				var verbatim_lang = (function () {
/* 000122 */ 					var __accu0__ = __getitem__ (node_args, 'verbatim_lang');
/* 000122 */ 					return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000122 */ 				}) ();
/* 000122 */ 			}
/* 000122 */ 		}
/* 000124 */ 		return dict ({'is_inline': is_inline, 'is_environment': is_environment, 'verbatim_contents': verbatim_contents, 'verbatim_lang': verbatim_lang});
/* 000124 */ 	});},
/* 000131 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000131 */ 		if (arguments.length) {
/* 000131 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000131 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000131 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000131 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000131 */ 					switch (__attrib0__) {
/* 000131 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000131 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000131 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000131 */ 					}
/* 000131 */ 				}
/* 000131 */ 			}
/* 000131 */ 		}
/* 000131 */ 		else {
/* 000131 */ 		}
/* 000135 */ 		var verbatim_info = (function () {
/* 000135 */ 			var __accu0__ = self;
/* 000135 */ 			return __call__ (__accu0__._get_verbatim_contents_info, __accu0__, node);
/* 000135 */ 		}) ();
/* 000136 */ 		var is_inline = __getitem__ (verbatim_info, 'is_inline');
/* 000137 */ 		var is_environment = __getitem__ (verbatim_info, 'is_environment');
/* 000138 */ 		var verbatim_contents = __getitem__ (verbatim_info, 'verbatim_contents');
/* 000139 */ 		var verbatim_lang = __getitem__ (verbatim_info, 'verbatim_lang');
/* 000141 */ 		var annotations = __t__ (self.annotations) || [];
/* 000143 */ 		if (__t__ (self.verbatimtype !== null)) {
/* 000144 */ 			(function () {
/* 000144 */ 				var __accu0__ = annotations;
/* 000144 */ 				return __call__ (__accu0__.append, __accu0__, 'verbatim{}'.format (self.verbatimtype));
/* 000144 */ 			}) ();
/* 000145 */ 			if (__t__ (is_inline)) {
/* 000146 */ 				(function () {
/* 000146 */ 					var __accu0__ = annotations;
/* 000146 */ 					return __call__ (__accu0__.append, __accu0__, 'verbatim{}-inline'.format (self.verbatimtype));
/* 000146 */ 				}) ();
/* 000146 */ 			}
/* 000147 */ 			if (__t__ (is_environment)) {
/* 000148 */ 				(function () {
/* 000148 */ 					var __accu0__ = annotations;
/* 000148 */ 					return __call__ (__accu0__.append, __accu0__, 'verbatim{}-environment'.format (self.verbatimtype));
/* 000148 */ 				}) ();
/* 000148 */ 			}
/* 000148 */ 		}
/* 000150 */ 		if (__t__ (verbatim_lang)) {
/* 000151 */ 			(function () {
/* 000151 */ 				var __accu0__ = annotations;
/* 000151 */ 				return __call__ (__accu0__.append, __accu0__, 'verbatim-lang-{}'.format (verbatim_lang));
/* 000151 */ 			}) ();
/* 000151 */ 		}
/* 000153 */ 		return (function () {
/* 000153 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000153 */ 			return __call__ (__accu0__.render_verbatim, __accu0__, verbatim_contents, render_context, __kwargtrans__ ({is_block_level: self.is_block_level, annotations: annotations}));
/* 000153 */ 		}) ();
/* 000153 */ 	});},
/* 000160 */ 	get recompose_pure_latex () {return __get__ (this, function (self, node, recomposer) {
/* 000160 */ 		if (arguments.length) {
/* 000160 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000160 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000160 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000160 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000160 */ 					switch (__attrib0__) {
/* 000160 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000160 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000160 */ 						case 'recomposer': var recomposer = __allkwargs0__ [__attrib0__]; break;
/* 000160 */ 					}
/* 000160 */ 				}
/* 000160 */ 			}
/* 000160 */ 		}
/* 000160 */ 		else {
/* 000160 */ 		}
/* 000162 */ 		var recopt_verbatim = (function () {
/* 000162 */ 			var __accu0__ = recomposer;
/* 000162 */ 			return __call__ (__accu0__.get_options, __accu0__, 'verbatim');
/* 000162 */ 		}) ();
/* 000163 */ 		var use_fvextra = (function () {
/* 000163 */ 			var __accu0__ = recopt_verbatim;
/* 000163 */ 			return __call__ (__accu0__.py_get, __accu0__, 'use_fvextra', null);
/* 000163 */ 		}) ();
/* 000165 */ 		if (__t__ (!__t__ ((use_fvextra)))) {
/* 000166 */ 			return false;
/* 000166 */ 		}
/* 000168 */ 		var verbatim_info = (function () {
/* 000168 */ 			var __accu0__ = self;
/* 000168 */ 			return __call__ (__accu0__._get_verbatim_contents_info, __accu0__, node);
/* 000168 */ 		}) ();
/* 000169 */ 		var is_inline = __getitem__ (verbatim_info, 'is_inline');
/* 000170 */ 		var is_environment = __getitem__ (verbatim_info, 'is_environment');
/* 000171 */ 		var verbatim_contents = __getitem__ (verbatim_info, 'verbatim_contents');
/* 000172 */ 		var verbatim_lang = __getitem__ (verbatim_info, 'verbatim_lang');
/* 000174 */ 		if (__t__ (is_environment)) {
/* 000175 */ 			return false;
/* 000175 */ 		}
/* 000177 */ 		(function () {
/* 000177 */ 			var __accu0__ = recomposer;
/* 000177 */ 			return __call__ (__accu0__.ensure_latex_package, __accu0__, 'fvextra');
/* 000177 */ 		}) ();
/* 000179 */ 		var content_escaped = (function () {
/* 000179 */ 			var __accu0__ = re;
/* 000179 */ 			return __call__ (__accu0__.sub, __accu0__, '[^a-zA-Z0-9]', (function __lambda__ (m) {
/* 000179 */ 				if (arguments.length) {
/* 000179 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000179 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000179 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000179 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000179 */ 							switch (__attrib0__) {
/* 000179 */ 								case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000179 */ 							}
/* 000179 */ 						}
/* 000179 */ 					}
/* 000179 */ 				}
/* 000179 */ 				else {
/* 000179 */ 				}
/* 000179 */ 				return __add__ ('\\', (function () {
/* 000179 */ 					var __accu1__ = m;
/* 000179 */ 					return __call__ (__accu1__.group, __accu1__);
/* 000179 */ 				}) ());
/* 000179 */ 			}), verbatim_contents);
/* 000179 */ 		}) ();
/* 000181 */ 		var recomposed = __add__ (__add__ (__add__ (__add__ ('\\EscVerb[formatcom=\\flmFmtVRB{', node.macroname), '}]{'), content_escaped), '}');
/* 000187 */ 		return recomposed;
/* 000187 */ 	});},
/* 000192 */ 	get get_flm_doc () {return __get__ (this, function (self) {
/* 000192 */ 		if (arguments.length) {
/* 000192 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000192 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000192 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000192 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000192 */ 					switch (__attrib0__) {
/* 000192 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000192 */ 					}
/* 000192 */ 				}
/* 000192 */ 			}
/* 000192 */ 		}
/* 000192 */ 		else {
/* 000192 */ 		}
/* 000193 */ 		return 'Typeset verbatim content of type ‘{}’.'.format (self.verbatimtype);
/* 000193 */ 	});}
/* 000193 */ });
/* 000197 */ export var make_verbatim_args_spec_list = function (ismacro, verbatim_delimiters, optional_lang_arg) {
/* 000197 */ 	if (arguments.length) {
/* 000197 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000197 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000197 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000197 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000197 */ 				switch (__attrib0__) {
/* 000197 */ 					case 'ismacro': var ismacro = __allkwargs0__ [__attrib0__]; break;
/* 000197 */ 					case 'verbatim_delimiters': var verbatim_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000197 */ 					case 'optional_lang_arg': var optional_lang_arg = __allkwargs0__ [__attrib0__]; break;
/* 000197 */ 				}
/* 000197 */ 			}
/* 000197 */ 		}
/* 000197 */ 	}
/* 000197 */ 	else {
/* 000197 */ 	}
/* 000212 */ 	var a = [];
/* 000213 */ 	if (__t__ (optional_lang_arg)) {
/* 000214 */ 		(function () {
/* 000214 */ 			var __accu0__ = a;
/* 000216 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: (function () {
/* 000216 */ 				var __accu1__ = latexnodes_parsers;
/* 000216 */ 				return __call__ (__accu1__.LatexCharsGroupParser, __accu1__, __kwargtrans__ ({delimiters: tuple (['[', ']']), optional: true, allow_pre_space: false, enable_comments: false, enable_groups: false}));
/* 000216 */ 			}) (), argname: 'verbatim_lang', flm_doc: 'Programming language in which to interpret the verbatim content, if applicable.  Some formatters might support syntax highlighting in the relevant language.'})));
/* 000216 */ 		}) ();
/* 000216 */ 	}
/* 000229 */ 	if (__t__ (ismacro)) {
/* 000230 */ 		(function () {
/* 000230 */ 			var __accu0__ = a;
/* 000232 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: (function () {
/* 000232 */ 				var __accu1__ = latexnodes_parsers;
/* 000232 */ 				return __call__ (__accu1__.LatexDelimitedVerbatimParser, __accu1__, __kwargtrans__ ({delimiters: verbatim_delimiters}));
/* 000232 */ 			}) (), argname: 'verbatim_content', flm_doc: 'The raw, verbatim content to typeset.  Any special characters, including \\verbcode+\\+, \\verbcode+{+, and \\verbcode+}+, will be typeset as is.'})));
/* 000232 */ 		}) ();
/* 000232 */ 	}
/* 000241 */ 	return a;
/* 000241 */ };
/* 000244 */ export var VerbatimMacro =  __class__ ('VerbatimMacro', [VerbatimSpecInfo], {
/* 000244 */ 	__module__: __name__,
/* 000246 */ 	get __init__ () {return __get__ (this, function (self, macroname, verbatim_delimiters) {
/* 000246 */ 		if (typeof verbatim_delimiters == 'undefined' || (verbatim_delimiters != null && verbatim_delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000246 */ 			var verbatim_delimiters = null;
/* 000246 */ 		};
/* 000246 */ 		var optional_lang_arg = false;
/* 000246 */ 		var kwargs = dict ();
/* 000246 */ 		if (arguments.length) {
/* 000246 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000246 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000246 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000246 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000246 */ 					switch (__attrib0__) {
/* 000246 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000246 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000246 */ 						case 'verbatim_delimiters': var verbatim_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000246 */ 						case 'optional_lang_arg': var optional_lang_arg = __allkwargs0__ [__attrib0__]; break;
/* 000246 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000246 */ 					}
/* 000246 */ 				}
/* 000246 */ 				delete kwargs.__kwargtrans__;
/* 000246 */ 			}
/* 000246 */ 		}
/* 000246 */ 		else {
/* 000246 */ 		}
/* 000264 */ 		__call__ (__call__ (__super__, null, VerbatimMacro, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({macroname: macroname, spec_node_parser_type: 'macro', arguments_spec_list: __call__ (make_verbatim_args_spec_list, null, true, verbatim_delimiters, optional_lang_arg)}, kwargs)));
/* 000269 */ 		self.verbatim_delimiters = verbatim_delimiters;
/* 000270 */ 		self.optional_lang_arg = optional_lang_arg;
/* 000270 */ 	});},
/* 000272 */ 	_fields: tuple (['macroname', 'verbatim_delimiters', 'optional_lang_arg', 'annotations', 'verbatimtype', 'is_block_level', 'include_environment_begin_end'])
/* 000272 */ });
/* 000278 */ export var VerbatimEnvironment =  __class__ ('VerbatimEnvironment', [VerbatimSpecInfo], {
/* 000278 */ 	__module__: __name__,
/* 000280 */ 	get __init__ () {return __get__ (this, function (self, environmentname) {
/* 000280 */ 		var optional_lang_arg = false;
/* 000280 */ 		var kwargs = dict ();
/* 000280 */ 		if (arguments.length) {
/* 000280 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000280 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000280 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000280 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000280 */ 					switch (__attrib0__) {
/* 000280 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000280 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000280 */ 						case 'optional_lang_arg': var optional_lang_arg = __allkwargs0__ [__attrib0__]; break;
/* 000280 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000280 */ 					}
/* 000280 */ 				}
/* 000280 */ 				delete kwargs.__kwargtrans__;
/* 000280 */ 			}
/* 000280 */ 		}
/* 000280 */ 		else {
/* 000280 */ 		}
/* 000292 */ 		__call__ (__call__ (__super__, null, VerbatimEnvironment, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({environmentname: environmentname, spec_node_parser_type: 'environment', arguments_spec_list: __call__ (make_verbatim_args_spec_list, null, false, null, optional_lang_arg)}, kwargs)));
/* 000297 */ 		self.optional_lang_arg = optional_lang_arg;
/* 000297 */ 	});},
/* 000299 */ 	_fields: tuple (['environmentname', 'optional_lang_arg', 'annotations', 'verbatimtype', 'is_block_level', 'include_environment_begin_end'])
/* 000299 */ });
/* 000308 */ export var FeatureVerbatim =  __class__ ('FeatureVerbatim', [SimpleLatexDefinitionsFeature], {
/* 000308 */ 	__module__: __name__,
/* 000318 */ 	feature_name: 'verbatim',
/* 000319 */ 	feature_title: 'Verbatim content typesetting',
/* 000323 */ 	verbatim_include_types: tuple (['text', 'code', 'a']),
/* 000325 */ 	get feature_flm_doc () {return __get__ (this, function (self) {
/* 000325 */ 		if (arguments.length) {
/* 000325 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000325 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000325 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000325 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000325 */ 					switch (__attrib0__) {
/* 000325 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000325 */ 					}
/* 000325 */ 				}
/* 000325 */ 			}
/* 000325 */ 		}
/* 000325 */ 		else {
/* 000325 */ 		}
/* 000326 */ 		var s = "\n        You can typeset verbatim content using the \\verbcode+\\verb...+ family of\n        macros and environments.  When typesetting verbatim content, any special\n        meaning of characters in FLM is ignored.  E.g., the characters\n        ‘\\verbcode+\\+’, ‘\\verbcode+{+’, ‘\\verbcode+}+’ are typeset as is, and\n        braces don't have to be matched.\n\n        The following verbatim types are available:\n        \\begin{itemize}\n        ";
/* 000336 */ 		if (__t__ (__in__ ('text', self.verbatim_include_types))) {
/* 000337 */ 			var s = __call__ (__iadd__, null, s, '\n            \\item \\verba+\\verbtext{…}+ — the verbatim characters are typeset as is, with no\n                special formatting applied to them.  This verbatim type is intended\n                for inputing special characters into normal text.\n            ');
/* 000337 */ 		}
/* 000342 */ 		if (__t__ (__in__ ('code', self.verbatim_include_types))) {
/* 000343 */ 			var s = __call__ (__iadd__, null, s, '\n            \\item \\verba+\\verbcode{…}+ — the verbatim characters are typeset as a block of\n                code, possibly to be interpreted as a given programming language.\n                Renderers should represent the content as code, e.g., with a monospaced\n                font.\n            ');
/* 000343 */ 		}
/* 000349 */ 		if (__t__ (__in__ ('a', self.verbatim_include_types))) {
/* 000350 */ 			var s = __call__ (__iadd__, null, s, "\n            \\item \\verba+\\verba{…}+ — the verbatim characters are typeset as an identifier,\n                typically in italic font.  This command is intended to typeset e.g.\n                keywords or other content that isn't necessarily to be highlighted as\n                computer code.\n            ");
/* 000350 */ 		}
/* 000356 */ 		var s = __call__ (__iadd__, null, s, '\\end{itemize}');
/* 000357 */ 		return s;
/* 000357 */ 	});},
/* 000359 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000359 */ 		if (arguments.length) {
/* 000359 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000359 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000359 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000359 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000359 */ 					switch (__attrib0__) {
/* 000359 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000359 */ 					}
/* 000359 */ 				}
/* 000359 */ 			}
/* 000359 */ 		}
/* 000359 */ 		else {
/* 000359 */ 		}
/* 000360 */ 		var macros = [];
/* 000361 */ 		var environments = [];
/* 000363 */ 		if (__t__ (__in__ ('text', self.verbatim_include_types))) {
/* 000364 */ 			(function () {
/* 000364 */ 				var __accu0__ = macros;
/* 000365 */ 				return __call__ (__accu0__.append, __accu0__, __call__ (VerbatimMacro, null, __kwargtrans__ ({macroname: 'verbtext'})));
/* 000365 */ 			}) ();
/* 000367 */ 			(function () {
/* 000367 */ 				var __accu0__ = environments;
/* 000368 */ 				return __call__ (__accu0__.append, __accu0__, __call__ (VerbatimEnvironment, null, __kwargtrans__ ({environmentname: 'verbatimtext'})));
/* 000368 */ 			}) ();
/* 000368 */ 		}
/* 000370 */ 		if (__t__ (__in__ ('code', self.verbatim_include_types))) {
/* 000371 */ 			(function () {
/* 000371 */ 				var __accu0__ = macros;
/* 000372 */ 				return __call__ (__accu0__.append, __accu0__, __call__ (VerbatimMacro, null, __kwargtrans__ ({macroname: 'verbcode', optional_lang_arg: true, verbatimtype: 'code'})));
/* 000372 */ 			}) ();
/* 000378 */ 			(function () {
/* 000378 */ 				var __accu0__ = environments;
/* 000379 */ 				return __call__ (__accu0__.append, __accu0__, __call__ (VerbatimEnvironment, null, __kwargtrans__ ({environmentname: 'verbatimcode', optional_lang_arg: true, verbatimtype: 'code', is_block_level: true})));
/* 000379 */ 			}) ();
/* 000379 */ 		}
/* 000385 */ 		if (__t__ (__in__ ('a', self.verbatim_include_types))) {
/* 000386 */ 			(function () {
/* 000386 */ 				var __accu0__ = macros;
/* 000387 */ 				return __call__ (__accu0__.append, __accu0__, __call__ (VerbatimMacro, null, __kwargtrans__ ({macroname: 'verba', optional_lang_arg: true, verbatimtype: 'a'})));
/* 000387 */ 			}) ();
/* 000387 */ 		}
/* 000394 */ 		return dict ({'macros': macros, 'environments': environments});
/* 000394 */ 	});}
/* 000394 */ });
/* 000400 */ export var FeatureClass = FeatureVerbatim;
/* 000016 */ 
//# sourceMappingURL=flm.feature.verbatim.map