/* 000001 */ // Transcrypt'ed from Python, 2025-10-21 23:26:08
/* 000006 */ var re = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000015 */ import {SimpleLatexDefinitionsFeature} from './flm.feature._base.js';
/* 000013 */ import {FLMArgumentSpec} from './flm.flmenvironment.js';
/* 000012 */ import {FLMSpecInfo} from './flm.flmspecinfo.js';
/* 000010 */ import * as latexnodes_nodes from './pylatexenc.latexnodes.nodes.js';
/* 000009 */ import * as latexnodes_parsers from './pylatexenc.latexnodes.parsers.js';
/* 000008 */ import {ParsedArgumentsInfo} from './pylatexenc.latexnodes.js';
/* 000006 */ import * as __module_re__ from './re.js';
/* 000006 */ __nest__ (re, '', __module_re__);
/* 000006 */ export {latexnodes_parsers, FLMSpecInfo, FLMArgumentSpec, SimpleLatexDefinitionsFeature, latexnodes_nodes, ParsedArgumentsInfo};
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
/* 000056 */ 	get _get_verbatim_contents_info () {return __get__ (this, function (self, node) {
/* 000056 */ 		if (arguments.length) {
/* 000056 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000056 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000056 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000056 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000056 */ 					switch (__attrib0__) {
/* 000056 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000056 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000056 */ 					}
/* 000056 */ 				}
/* 000056 */ 			}
/* 000056 */ 		}
/* 000056 */ 		else {
/* 000056 */ 		}
/* 000058 */ 		var verbatim_lang = null;
/* 000059 */ 		var verbatim_contents = null;
/* 000060 */ 		var is_inline = false;
/* 000061 */ 		var is_environment = false;
/* 000063 */ 		if (__t__ ((function () {
/* 000063 */ 			var __accu0__ = node;
/* 000063 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexEnvironmentNode);
/* 000063 */ 		}) ())) {
/* 000065 */ 			var is_environment = true;
/* 000069 */ 			if (__t__ (self.include_environment_begin_end)) {
/* 000070 */ 				var verbatim_contents = (function () {
/* 000070 */ 					var __accu0__ = node;
/* 000070 */ 					return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000070 */ 				}) ();
/* 000070 */ 			}
/* 000071 */ 			else {
/* 000074 */ 				var verbatim_contents = (function () {
/* 000074 */ 					var __accu0__ = node.nodelist;
/* 000074 */ 					return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000074 */ 				}) ();
/* 000074 */ 			}
/* 000077 */ 			var node_args = (function () {
/* 000077 */ 				var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000077 */ 				return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['verbatim_lang']), __kwargtrans__ ({skip_nonexistent_arguments: true}));
/* 000077 */ 			}) ();
/* 000081 */ 			if (__t__ (__in__ ('verbatim_lang', node_args))) {
/* 000082 */ 				var verbatim_lang = (function () {
/* 000082 */ 					var __accu0__ = __getitem__ (node_args, 'verbatim_lang');
/* 000082 */ 					return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000082 */ 				}) ();
/* 000082 */ 			}
/* 000082 */ 		}
/* 000083 */ 		else {
/* 000086 */ 			var is_inline = true;
/* 000088 */ 			var node_args = (function () {
/* 000088 */ 				var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000088 */ 				return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['verbatim_content', 'verbatim_lang']), __kwargtrans__ ({skip_nonexistent_arguments: true}));
/* 000088 */ 			}) ();
/* 000093 */ 			var verbatim_contents = (function () {
/* 000093 */ 				var __accu0__ = __getitem__ (node_args, 'verbatim_content');
/* 000093 */ 				return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000093 */ 			}) ();
/* 000095 */ 			if (__t__ (__in__ ('verbatim_lang', node_args))) {
/* 000096 */ 				var verbatim_lang = (function () {
/* 000096 */ 					var __accu0__ = __getitem__ (node_args, 'verbatim_lang');
/* 000096 */ 					return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000096 */ 				}) ();
/* 000096 */ 			}
/* 000096 */ 		}
/* 000098 */ 		return dict ({'is_inline': is_inline, 'is_environment': is_environment, 'verbatim_contents': verbatim_contents, 'verbatim_lang': verbatim_lang});
/* 000098 */ 	});},
/* 000105 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000105 */ 		if (arguments.length) {
/* 000105 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000105 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000105 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000105 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000105 */ 					switch (__attrib0__) {
/* 000105 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000105 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000105 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000105 */ 					}
/* 000105 */ 				}
/* 000105 */ 			}
/* 000105 */ 		}
/* 000105 */ 		else {
/* 000105 */ 		}
/* 000109 */ 		var verbatim_info = (function () {
/* 000109 */ 			var __accu0__ = self;
/* 000109 */ 			return __call__ (__accu0__._get_verbatim_contents_info, __accu0__, node);
/* 000109 */ 		}) ();
/* 000110 */ 		var is_inline = __getitem__ (verbatim_info, 'is_inline');
/* 000111 */ 		var is_environment = __getitem__ (verbatim_info, 'is_environment');
/* 000112 */ 		var verbatim_contents = __getitem__ (verbatim_info, 'verbatim_contents');
/* 000113 */ 		var verbatim_lang = __getitem__ (verbatim_info, 'verbatim_lang');
/* 000115 */ 		var annotations = __t__ (self.annotations) || [];
/* 000117 */ 		if (__t__ (self.verbatimtype !== null)) {
/* 000118 */ 			(function () {
/* 000118 */ 				var __accu0__ = annotations;
/* 000118 */ 				return __call__ (__accu0__.append, __accu0__, 'verbatim{}'.format (self.verbatimtype));
/* 000118 */ 			}) ();
/* 000119 */ 			if (__t__ (is_inline)) {
/* 000120 */ 				(function () {
/* 000120 */ 					var __accu0__ = annotations;
/* 000120 */ 					return __call__ (__accu0__.append, __accu0__, 'verbatim{}-inline'.format (self.verbatimtype));
/* 000120 */ 				}) ();
/* 000120 */ 			}
/* 000121 */ 			if (__t__ (is_environment)) {
/* 000122 */ 				(function () {
/* 000122 */ 					var __accu0__ = annotations;
/* 000122 */ 					return __call__ (__accu0__.append, __accu0__, 'verbatim{}-environment'.format (self.verbatimtype));
/* 000122 */ 				}) ();
/* 000122 */ 			}
/* 000122 */ 		}
/* 000124 */ 		if (__t__ (verbatim_lang)) {
/* 000125 */ 			(function () {
/* 000125 */ 				var __accu0__ = annotations;
/* 000125 */ 				return __call__ (__accu0__.append, __accu0__, 'verbatim-lang-{}'.format (verbatim_lang));
/* 000125 */ 			}) ();
/* 000125 */ 		}
/* 000127 */ 		return (function () {
/* 000127 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000127 */ 			return __call__ (__accu0__.render_verbatim, __accu0__, verbatim_contents, render_context, __kwargtrans__ ({is_block_level: self.is_block_level, annotations: annotations}));
/* 000127 */ 		}) ();
/* 000127 */ 	});},
/* 000134 */ 	get recompose_pure_latex () {return __get__ (this, function (self, node, recomposer) {
/* 000134 */ 		if (arguments.length) {
/* 000134 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000134 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000134 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000134 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000134 */ 					switch (__attrib0__) {
/* 000134 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000134 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000134 */ 						case 'recomposer': var recomposer = __allkwargs0__ [__attrib0__]; break;
/* 000134 */ 					}
/* 000134 */ 				}
/* 000134 */ 			}
/* 000134 */ 		}
/* 000134 */ 		else {
/* 000134 */ 		}
/* 000136 */ 		var recopt_verbatim = (function () {
/* 000136 */ 			var __accu0__ = recomposer;
/* 000136 */ 			return __call__ (__accu0__.get_options, __accu0__, 'verbatim');
/* 000136 */ 		}) ();
/* 000137 */ 		var use_fvextra = (function () {
/* 000137 */ 			var __accu0__ = recopt_verbatim;
/* 000137 */ 			return __call__ (__accu0__.py_get, __accu0__, 'use_fvextra', null);
/* 000137 */ 		}) ();
/* 000139 */ 		if (__t__ (!__t__ ((use_fvextra)))) {
/* 000140 */ 			return false;
/* 000140 */ 		}
/* 000142 */ 		var verbatim_info = (function () {
/* 000142 */ 			var __accu0__ = self;
/* 000142 */ 			return __call__ (__accu0__._get_verbatim_contents_info, __accu0__, node);
/* 000142 */ 		}) ();
/* 000143 */ 		var is_inline = __getitem__ (verbatim_info, 'is_inline');
/* 000144 */ 		var is_environment = __getitem__ (verbatim_info, 'is_environment');
/* 000145 */ 		var verbatim_contents = __getitem__ (verbatim_info, 'verbatim_contents');
/* 000146 */ 		var verbatim_lang = __getitem__ (verbatim_info, 'verbatim_lang');
/* 000148 */ 		if (__t__ (is_environment)) {
/* 000149 */ 			return false;
/* 000149 */ 		}
/* 000151 */ 		(function () {
/* 000151 */ 			var __accu0__ = recomposer;
/* 000151 */ 			return __call__ (__accu0__.ensure_latex_package, __accu0__, 'fvextra');
/* 000151 */ 		}) ();
/* 000153 */ 		var content_escaped = (function () {
/* 000153 */ 			var __accu0__ = re;
/* 000153 */ 			return __call__ (__accu0__.sub, __accu0__, '[^a-zA-Z0-9]', (function __lambda__ (m) {
/* 000153 */ 				if (arguments.length) {
/* 000153 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000153 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000153 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000153 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000153 */ 							switch (__attrib0__) {
/* 000153 */ 								case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000153 */ 							}
/* 000153 */ 						}
/* 000153 */ 					}
/* 000153 */ 				}
/* 000153 */ 				else {
/* 000153 */ 				}
/* 000153 */ 				return __add__ ('\\', (function () {
/* 000153 */ 					var __accu1__ = m;
/* 000153 */ 					return __call__ (__accu1__.group, __accu1__);
/* 000153 */ 				}) ());
/* 000153 */ 			}), verbatim_contents);
/* 000153 */ 		}) ();
/* 000155 */ 		var recomposed = __add__ (__add__ (__add__ (__add__ ('\\EscVerb[formatcom=\\flmFmtVRB{', node.macroname), '}]{'), content_escaped), '}');
/* 000161 */ 		return recomposed;
/* 000161 */ 	});},
/* 000166 */ 	get get_flm_doc () {return __get__ (this, function (self) {
/* 000166 */ 		if (arguments.length) {
/* 000166 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000166 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000166 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000166 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000166 */ 					switch (__attrib0__) {
/* 000166 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000166 */ 					}
/* 000166 */ 				}
/* 000166 */ 			}
/* 000166 */ 		}
/* 000166 */ 		else {
/* 000166 */ 		}
/* 000167 */ 		return 'Typeset verbatim content of type ‘{}’.'.format (self.verbatimtype);
/* 000167 */ 	});}
/* 000167 */ });
/* 000171 */ export var make_verbatim_args_spec_list = function (ismacro, verbatim_delimiters, optional_lang_arg) {
/* 000171 */ 	if (arguments.length) {
/* 000171 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000171 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000171 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000171 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000171 */ 				switch (__attrib0__) {
/* 000171 */ 					case 'ismacro': var ismacro = __allkwargs0__ [__attrib0__]; break;
/* 000171 */ 					case 'verbatim_delimiters': var verbatim_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000171 */ 					case 'optional_lang_arg': var optional_lang_arg = __allkwargs0__ [__attrib0__]; break;
/* 000171 */ 				}
/* 000171 */ 			}
/* 000171 */ 		}
/* 000171 */ 	}
/* 000171 */ 	else {
/* 000171 */ 	}
/* 000172 */ 	var a = [];
/* 000173 */ 	if (__t__ (optional_lang_arg)) {
/* 000174 */ 		(function () {
/* 000174 */ 			var __accu0__ = a;
/* 000176 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: (function () {
/* 000176 */ 				var __accu1__ = latexnodes_parsers;
/* 000176 */ 				return __call__ (__accu1__.LatexCharsGroupParser, __accu1__, __kwargtrans__ ({delimiters: tuple (['[', ']']), optional: true, allow_pre_space: false, enable_comments: false, enable_groups: false}));
/* 000176 */ 			}) (), argname: 'verbatim_lang', flm_doc: 'Programming language in which to interpret the verbatim content, if applicable.  Some formatters might support syntax highlighting in the relevant language.'})));
/* 000176 */ 		}) ();
/* 000176 */ 	}
/* 000189 */ 	if (__t__ (ismacro)) {
/* 000190 */ 		(function () {
/* 000190 */ 			var __accu0__ = a;
/* 000192 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: (function () {
/* 000192 */ 				var __accu1__ = latexnodes_parsers;
/* 000192 */ 				return __call__ (__accu1__.LatexDelimitedVerbatimParser, __accu1__, __kwargtrans__ ({delimiters: verbatim_delimiters}));
/* 000192 */ 			}) (), argname: 'verbatim_content', flm_doc: 'The raw, verbatim content to typeset.  Any special characters, including \\verbcode+\\+, \\verbcode+{+, and \\verbcode+}+, will be typeset as is.'})));
/* 000192 */ 		}) ();
/* 000192 */ 	}
/* 000201 */ 	return a;
/* 000201 */ };
/* 000204 */ export var VerbatimMacro =  __class__ ('VerbatimMacro', [VerbatimSpecInfo], {
/* 000204 */ 	__module__: __name__,
/* 000205 */ 	get __init__ () {return __get__ (this, function (self, macroname, verbatim_delimiters) {
/* 000205 */ 		if (typeof verbatim_delimiters == 'undefined' || (verbatim_delimiters != null && verbatim_delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000205 */ 			var verbatim_delimiters = null;
/* 000205 */ 		};
/* 000205 */ 		var optional_lang_arg = false;
/* 000205 */ 		var kwargs = dict ();
/* 000205 */ 		if (arguments.length) {
/* 000205 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000205 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000205 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000205 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000205 */ 					switch (__attrib0__) {
/* 000205 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000205 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000205 */ 						case 'verbatim_delimiters': var verbatim_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000205 */ 						case 'optional_lang_arg': var optional_lang_arg = __allkwargs0__ [__attrib0__]; break;
/* 000205 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000205 */ 					}
/* 000205 */ 				}
/* 000205 */ 				delete kwargs.__kwargtrans__;
/* 000205 */ 			}
/* 000205 */ 		}
/* 000205 */ 		else {
/* 000205 */ 		}
/* 000213 */ 		__call__ (__call__ (__super__, null, VerbatimMacro, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({macroname: macroname, spec_node_parser_type: 'macro', arguments_spec_list: __call__ (make_verbatim_args_spec_list, null, true, verbatim_delimiters, optional_lang_arg)}, kwargs)));
/* 000218 */ 		self.verbatim_delimiters = verbatim_delimiters;
/* 000219 */ 		self.optional_lang_arg = optional_lang_arg;
/* 000219 */ 	});},
/* 000221 */ 	_fields: tuple (['macroname', 'verbatim_delimiters', 'optional_lang_arg', 'annotations', 'verbatimtype', 'is_block_level', 'include_environment_begin_end'])
/* 000221 */ });
/* 000227 */ export var VerbatimEnvironment =  __class__ ('VerbatimEnvironment', [VerbatimSpecInfo], {
/* 000227 */ 	__module__: __name__,
/* 000228 */ 	get __init__ () {return __get__ (this, function (self, environmentname) {
/* 000228 */ 		var optional_lang_arg = false;
/* 000228 */ 		var kwargs = dict ();
/* 000228 */ 		if (arguments.length) {
/* 000228 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000228 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000228 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000228 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000228 */ 					switch (__attrib0__) {
/* 000228 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000228 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000228 */ 						case 'optional_lang_arg': var optional_lang_arg = __allkwargs0__ [__attrib0__]; break;
/* 000228 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000228 */ 					}
/* 000228 */ 				}
/* 000228 */ 				delete kwargs.__kwargtrans__;
/* 000228 */ 			}
/* 000228 */ 		}
/* 000228 */ 		else {
/* 000228 */ 		}
/* 000232 */ 		__call__ (__call__ (__super__, null, VerbatimEnvironment, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({environmentname: environmentname, spec_node_parser_type: 'environment', arguments_spec_list: __call__ (make_verbatim_args_spec_list, null, false, null, optional_lang_arg)}, kwargs)));
/* 000237 */ 		self.optional_lang_arg = optional_lang_arg;
/* 000237 */ 	});},
/* 000239 */ 	_fields: tuple (['environmentname', 'optional_lang_arg', 'annotations', 'verbatimtype', 'is_block_level', 'include_environment_begin_end'])
/* 000239 */ });
/* 000248 */ export var FeatureVerbatim =  __class__ ('FeatureVerbatim', [SimpleLatexDefinitionsFeature], {
/* 000248 */ 	__module__: __name__,
/* 000250 */ 	feature_name: 'verbatim',
/* 000251 */ 	feature_title: 'Verbatim content typesetting',
/* 000255 */ 	verbatim_include_types: tuple (['text', 'code', 'a']),
/* 000257 */ 	get feature_flm_doc () {return __get__ (this, function (self) {
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
/* 000258 */ 		var s = "\n        You can typeset verbatim content using the \\verbcode+\\verb...+ family of\n        macros and environments.  When typesetting verbatim content, any special\n        meaning of characters in FLM is ignored.  E.g., the characters\n        ‘\\verbcode+\\+’, ‘\\verbcode+{+’, ‘\\verbcode+}+’ are typeset as is, and\n        braces don't have to be matched.\n\n        The following verbatim types are available:\n        \\begin{itemize}\n        ";
/* 000268 */ 		if (__t__ (__in__ ('text', self.verbatim_include_types))) {
/* 000269 */ 			var s = __call__ (__iadd__, null, s, '\n            \\item \\verba{text} — the verbatim characters are typeset as is, with no\n                special formatting applied to them.  This verbatim type is intended\n                for inputing special characters into normal text.\n            ');
/* 000269 */ 		}
/* 000274 */ 		if (__t__ (__in__ ('code', self.verbatim_include_types))) {
/* 000275 */ 			var s = __call__ (__iadd__, null, s, '\n            \\item \\verba{code} — the verbatim characters are typeset as a block of\n                code, possibly to be interpreted as a given programming language.\n                Renderers should represent the content as code, e.g., with a monospaced\n                font.\n            ');
/* 000275 */ 		}
/* 000281 */ 		if (__t__ (__in__ ('a', self.verbatim_include_types))) {
/* 000282 */ 			var s = __call__ (__iadd__, null, s, "\n            \\item \\verba{a} — the verbatim characters are typeset as an identifier,\n                typically in italic font.  This command is intended to typeset e.g.\n                keywords or other content that isn't necessarily to be highlighted as\n                computer code.\n            ");
/* 000282 */ 		}
/* 000288 */ 		var s = __call__ (__iadd__, null, s, '\\end{itemize}');
/* 000289 */ 		return s;
/* 000289 */ 	});},
/* 000291 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000291 */ 		if (arguments.length) {
/* 000291 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000291 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000291 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000291 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000291 */ 					switch (__attrib0__) {
/* 000291 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000291 */ 					}
/* 000291 */ 				}
/* 000291 */ 			}
/* 000291 */ 		}
/* 000291 */ 		else {
/* 000291 */ 		}
/* 000292 */ 		var macros = [];
/* 000293 */ 		var environments = [];
/* 000295 */ 		if (__t__ (__in__ ('text', self.verbatim_include_types))) {
/* 000296 */ 			(function () {
/* 000296 */ 				var __accu0__ = macros;
/* 000297 */ 				return __call__ (__accu0__.append, __accu0__, __call__ (VerbatimMacro, null, __kwargtrans__ ({macroname: 'verbtext'})));
/* 000297 */ 			}) ();
/* 000299 */ 			(function () {
/* 000299 */ 				var __accu0__ = environments;
/* 000300 */ 				return __call__ (__accu0__.append, __accu0__, __call__ (VerbatimEnvironment, null, __kwargtrans__ ({environmentname: 'verbatimtext'})));
/* 000300 */ 			}) ();
/* 000300 */ 		}
/* 000302 */ 		if (__t__ (__in__ ('code', self.verbatim_include_types))) {
/* 000303 */ 			(function () {
/* 000303 */ 				var __accu0__ = macros;
/* 000304 */ 				return __call__ (__accu0__.append, __accu0__, __call__ (VerbatimMacro, null, __kwargtrans__ ({macroname: 'verbcode', optional_lang_arg: true, verbatimtype: 'code'})));
/* 000304 */ 			}) ();
/* 000310 */ 			(function () {
/* 000310 */ 				var __accu0__ = environments;
/* 000311 */ 				return __call__ (__accu0__.append, __accu0__, __call__ (VerbatimEnvironment, null, __kwargtrans__ ({environmentname: 'verbatimcode', optional_lang_arg: true, verbatimtype: 'code', is_block_level: true})));
/* 000311 */ 			}) ();
/* 000311 */ 		}
/* 000317 */ 		if (__t__ (__in__ ('a', self.verbatim_include_types))) {
/* 000318 */ 			(function () {
/* 000318 */ 				var __accu0__ = macros;
/* 000319 */ 				return __call__ (__accu0__.append, __accu0__, __call__ (VerbatimMacro, null, __kwargtrans__ ({macroname: 'verba', optional_lang_arg: true, verbatimtype: 'a'})));
/* 000319 */ 			}) ();
/* 000319 */ 		}
/* 000326 */ 		return dict ({'macros': macros, 'environments': environments});
/* 000326 */ 	});}
/* 000326 */ });
/* 000332 */ export var FeatureClass = FeatureVerbatim;
/* 000006 */ 
//# sourceMappingURL=flm.feature.verbatim.map