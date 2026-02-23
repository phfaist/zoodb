/* 000001 */ // Transcrypt'ed from Python, 2026-02-23 19:58:50
/* 000007 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000026 */ import {Feature} from './flm.feature._base.js';
/* 000022 */ import {FLMMacroSpecBase} from './flm.flmspecinfo.js';
/* 000018 */ import {FLMArgumentSpec, FLMParsingStateDeltaSetBlockLevel} from './flm.flmenvironment.js';
/* 000012 */ import {LatexDelimitedGroupParser, LatexGeneralNodesParser, LatexParserBase} from './pylatexenc.latexnodes.parsers.js';
/* 000011 */ import {LatexGroupNode} from './pylatexenc.latexnodes.nodes.js';
/* 000007 */ import {ParsedArgumentsInfo} from './pylatexenc.latexnodes.js';
/* 000007 */ export {FLMArgumentSpec, LatexDelimitedGroupParser, FLMParsingStateDeltaSetBlockLevel, Feature, ParsedArgumentsInfo, FLMMacroSpecBase, LatexGeneralNodesParser, LatexParserBase, LatexGroupNode};
/* 000001 */ var __name__ = 'flm.feature.annotations';
/* 000029 */ export var AnnotationArgumentParser =  __class__ ('AnnotationArgumentParser', [LatexParserBase], {
/* 000029 */ 	__module__: __name__,
/* 000030 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000030 */ 		if (arguments.length) {
/* 000030 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000030 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000030 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000030 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000030 */ 					switch (__attrib0__) {
/* 000030 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000030 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000030 */ 					}
/* 000030 */ 				}
/* 000030 */ 			}
/* 000030 */ 		}
/* 000030 */ 		else {
/* 000030 */ 		}
/* 000031 */ 		__call__ (__call__ (__super__, null, AnnotationArgumentParser, '__init__'), null, self);
/* 000033 */ 		self.macroname = macroname;
/* 000034 */ 		self.endmacroname = __add__ ('end', self.macroname);
/* 000036 */ 		self.parser_arg_highlight = __call__ (LatexDelimitedGroupParser, null, __kwargtrans__ ({delimiters: tuple (['{', '}'])}));
/* 000039 */ 		self.parser_arg_comment = __call__ (LatexDelimitedGroupParser, null, __kwargtrans__ ({delimiters: tuple (['[', ']'])}));
/* 000042 */ 		self.parser_endmacro_highlight = __call__ (LatexGeneralNodesParser, null, __kwargtrans__ ({stop_token_condition: (function __lambda__ (tok) {
/* 000042 */ 			if (arguments.length) {
/* 000042 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000042 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000042 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000042 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000042 */ 						switch (__attrib0__) {
/* 000042 */ 							case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000042 */ 						}
/* 000042 */ 					}
/* 000042 */ 				}
/* 000042 */ 			}
/* 000042 */ 			else {
/* 000042 */ 			}
/* 000042 */ 			return __t__ (__eq__ (tok.tok, 'macro')) && __eq__ (tok.arg, self.endmacroname);
/* 000042 */ 		}), require_stop_condition_met: true}));
/* 000042 */ 	});},
/* 000049 */ 	get parse () {return __get__ (this, function (self, latex_walker, token_reader, parsing_state) {
/* 000049 */ 		var kwargs = dict ();
/* 000049 */ 		if (arguments.length) {
/* 000049 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000049 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000049 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000049 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000049 */ 					switch (__attrib0__) {
/* 000049 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000049 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000049 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000049 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000049 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000049 */ 					}
/* 000049 */ 				}
/* 000049 */ 				delete kwargs.__kwargtrans__;
/* 000049 */ 			}
/* 000049 */ 		}
/* 000049 */ 		else {
/* 000049 */ 		}
/* 000051 */ 		var parsing_state_w_brackets = (function () {
/* 000051 */ 			var __accu0__ = parsing_state;
/* 000051 */ 			return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ ({latex_group_delimiters: [tuple (['{', '}']), tuple (['[', ']'])]}));
/* 000051 */ 		}) ();
/* 000054 */ 		var tok = (function () {
/* 000054 */ 			var __accu0__ = token_reader;
/* 000054 */ 			return __call__ (__accu0__.peek_token, __accu0__, __kwargtrans__ ({parsing_state: parsing_state_w_brackets}));
/* 000054 */ 		}) ();
/* 000056 */ 		if (__t__ (__eq__ (tok.tok, 'brace_open'))) {
/* 000057 */ 			if (__t__ (__eq__ (tok.arg, '{'))) {
/* 000059 */ 				return (function () {
/* 000059 */ 					var __accu0__ = self.parser_arg_highlight;
/* 000059 */ 					return __call__ (__accu0__.parse, __accu0__, latex_walker, token_reader, parsing_state_w_brackets, __kwargtrans__ (kwargs));
/* 000059 */ 				}) ();
/* 000059 */ 			}
/* 000062 */ 			if (__t__ (__eq__ (tok.arg, '['))) {
/* 000064 */ 				return (function () {
/* 000064 */ 					var __accu0__ = self.parser_arg_comment;
/* 000064 */ 					return __call__ (__accu0__.parse, __accu0__, latex_walker, token_reader, parsing_state_w_brackets, __kwargtrans__ (kwargs));
/* 000064 */ 				}) ();
/* 000064 */ 			}
/* 000067 */ 			var __except0__ = __call__ (ValueError, null, 'Unexpected tok.arg={}!'.format (tok.arg));
/* 000067 */ 			__except0__.__cause__ = null;
/* 000067 */ 			throw __except0__;
/* 000067 */ 		}
/* 000069 */ 		var __left0__ = (function () {
/* 000069 */ 			var __accu0__ = self.parser_endmacro_highlight;
/* 000069 */ 			return __call__ (__accu0__.parse, __accu0__, latex_walker, token_reader, parsing_state, __kwargtrans__ (kwargs));
/* 000069 */ 		}) ();
/* 000069 */ 		var nodelist = __left0__ [0];
/* 000069 */ 		var parsing_state_delta = __left0__ [1];
/* 000073 */ 		(function () {
/* 000073 */ 			var __accu0__ = token_reader;
/* 000073 */ 			return __call__ (__accu0__.next_token, __accu0__, parsing_state);
/* 000073 */ 		}) ();
/* 000075 */ 		var groupnode = (function () {
/* 000075 */ 			var __accu0__ = latex_walker;
/* 000075 */ 			return __call__ (__accu0__.make_node, __accu0__, LatexGroupNode, __kwargtrans__ ({nodelist: nodelist, delimiters: tuple (['', '']), pos: nodelist.pos, pos_end: nodelist.pos_end, parsing_state: parsing_state}));
/* 000075 */ 		}) ();
/* 000083 */ 		return tuple ([groupnode, parsing_state_delta]);
/* 000083 */ 	});}
/* 000083 */ });
/* 000089 */ export var AnnotationMacro =  __class__ ('AnnotationMacro', [FLMMacroSpecBase], {
/* 000089 */ 	__module__: __name__,
/* 000091 */ 	allowed_in_standalone_mode: true,
/* 000096 */ 	_flm_main_text_argument: 'text',
/* 000098 */ 	get __init__ () {return __get__ (this, function (self, macroname, initials, color_index) {
/* 000098 */ 		if (typeof initials == 'undefined' || (initials != null && initials.hasOwnProperty ("__kwargtrans__"))) {;
/* 000098 */ 			var initials = null;
/* 000098 */ 		};
/* 000098 */ 		if (typeof color_index == 'undefined' || (color_index != null && color_index.hasOwnProperty ("__kwargtrans__"))) {;
/* 000098 */ 			var color_index = 0;
/* 000098 */ 		};
/* 000098 */ 		if (arguments.length) {
/* 000098 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000098 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000098 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000098 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000098 */ 					switch (__attrib0__) {
/* 000098 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000098 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000098 */ 						case 'initials': var initials = __allkwargs0__ [__attrib0__]; break;
/* 000098 */ 						case 'color_index': var color_index = __allkwargs0__ [__attrib0__]; break;
/* 000098 */ 					}
/* 000098 */ 				}
/* 000098 */ 			}
/* 000098 */ 		}
/* 000098 */ 		else {
/* 000098 */ 		}
/* 000107 */ 		__call__ (__call__ (__super__, null, AnnotationMacro, '__init__'), null, self, __kwargtrans__ ({macroname: macroname, arguments_spec_list: [__call__ (FLMArgumentSpec, null, __kwargtrans__ ({argname: 'text', parser: __call__ (AnnotationArgumentParser, null, __kwargtrans__ ({macroname: macroname})), parsing_state_delta: __call__ (FLMParsingStateDeltaSetBlockLevel, null, __kwargtrans__ ({is_block_level: null}))}))]}));
/* 000113 */ 		self.initials = initials;
/* 000114 */ 		self.color_index = color_index;
/* 000114 */ 	});},
/* 000116 */ 	_fields: tuple (['macroname']),
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
/* 000119 */ 		return 'Annotation macro \\{}'.format (self.macroname);
/* 000119 */ 	});},
/* 000123 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000123 */ 		if (arguments.length) {
/* 000123 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000123 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000123 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000123 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000123 */ 					switch (__attrib0__) {
/* 000123 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000123 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000123 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000123 */ 					}
/* 000123 */ 				}
/* 000123 */ 			}
/* 000123 */ 		}
/* 000123 */ 		else {
/* 000123 */ 		}
/* 000125 */ 		var rdr_mgr = (function () {
/* 000125 */ 			var __accu0__ = render_context;
/* 000125 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'annotations');
/* 000125 */ 		}) ();
/* 000126 */ 		if (__t__ (rdr_mgr.hide_all_annotations)) {
/* 000127 */ 			if (__t__ (__eq__ (__getitem__ (node.flmarg_text_delimiters, 0), '['))) {
/* 000128 */ 				return (function () {
/* 000128 */ 					var __accu0__ = render_context.fragment_renderer;
/* 000128 */ 					return __call__ (__accu0__.render_nothing, __accu0__, render_context);
/* 000128 */ 				}) ();
/* 000128 */ 			}
/* 000129 */ 			return (function () {
/* 000129 */ 				var __accu0__ = render_context.fragment_renderer;
/* 000129 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, node.flmarg_text_nodelist, render_context, __kwargtrans__ ({is_block_level: node.flm_is_block_level}));
/* 000129 */ 			}) ();
/* 000129 */ 		}
/* 000135 */ 		if (__t__ (__eq__ (__getitem__ (node.flmarg_text_delimiters, 0), '['))) {
/* 000136 */ 			return (function () {
/* 000136 */ 				var __accu0__ = render_context.fragment_renderer;
/* 000136 */ 				return __call__ (__accu0__.render_annotation_comment, __accu0__, node.flmarg_text_nodelist, __kwargtrans__ ({render_context: render_context, color_index: self.color_index, initials: self.initials, is_block_level: node.flm_is_block_level}));
/* 000136 */ 			}) ();
/* 000136 */ 		}
/* 000144 */ 		return (function () {
/* 000144 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000144 */ 			return __call__ (__accu0__.render_annotation_highlight, __accu0__, node.flmarg_text_nodelist, __kwargtrans__ ({render_context: render_context, color_index: self.color_index, initials: self.initials, is_block_level: node.flm_is_block_level}));
/* 000144 */ 		}) ();
/* 000144 */ 	});},
/* 000153 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000153 */ 		if (arguments.length) {
/* 000153 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000153 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000153 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000153 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000153 */ 					switch (__attrib0__) {
/* 000153 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000153 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000153 */ 					}
/* 000153 */ 				}
/* 000153 */ 			}
/* 000153 */ 		}
/* 000153 */ 		else {
/* 000153 */ 		}
/* 000155 */ 		var node_args = (function () {
/* 000155 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000155 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['text']));
/* 000155 */ 		}) ();
/* 000159 */ 		var text_arg = __getitem__ (node_args, 'text');
/* 000165 */ 		node.flmarg_text_delimiters = text_arg.argument_node_object.delimiters;
/* 000166 */ 		var text_nodelist = (function () {
/* 000166 */ 			var __accu0__ = text_arg;
/* 000166 */ 			return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000166 */ 		}) ();
/* 000167 */ 		node.flmarg_text_nodelist = text_nodelist;
/* 000169 */ 		var nodes_finalizer = node.latex_walker.flm_environment.nodes_finalizer;
/* 000170 */ 		node.flm_is_block_level = (function () {
/* 000170 */ 			var __accu0__ = nodes_finalizer;
/* 000170 */ 			return __call__ (__accu0__.infer_is_block_level_nodelist, __accu0__, text_nodelist);
/* 000170 */ 		}) ();
/* 000170 */ 	});}
/* 000170 */ });
/* 000175 */ export var FeatureAnnotations =  __class__ ('FeatureAnnotations', [Feature], {
/* 000175 */ 	__module__: __name__,
/* 000177 */ 	feature_name: 'annotations',
/* 000178 */ 	feature_title: 'Support for simple annotations in text (comments and highlighted text)',
/* 000180 */ 	feature_flm_doc: "\n    Supports the definition of custom macros to mark annotations from multiple\n    authors.\n\n    Say we define an annotation macro '\\abc'.  There are two types of\n    annotations each macro such as '\\abc' supports:\n\n       \\abc{This piece of text is highlighted}\n       \\abc This piece of text is highlighted, alternative syntax \\endabc\n\n       \\abc[This is an inline comment.]\n\n    Highlighted text refers to pieces of the document that are highlighted in a\n    particular color; inline comments are any remarks that concern the\n    surrounding text and which would typically be deleted before completing the\n    document.\n    ",
/* 000199 */ 	get __init__ () {return __get__ (this, function (self, macrodefs, hide_all_annotations) {
/* 000199 */ 		if (typeof macrodefs == 'undefined' || (macrodefs != null && macrodefs.hasOwnProperty ("__kwargtrans__"))) {;
/* 000199 */ 			var macrodefs = null;
/* 000199 */ 		};
/* 000199 */ 		if (typeof hide_all_annotations == 'undefined' || (hide_all_annotations != null && hide_all_annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000199 */ 			var hide_all_annotations = false;
/* 000199 */ 		};
/* 000199 */ 		if (arguments.length) {
/* 000199 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000199 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000199 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000199 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000199 */ 					switch (__attrib0__) {
/* 000199 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000199 */ 						case 'macrodefs': var macrodefs = __allkwargs0__ [__attrib0__]; break;
/* 000199 */ 						case 'hide_all_annotations': var hide_all_annotations = __allkwargs0__ [__attrib0__]; break;
/* 000199 */ 					}
/* 000199 */ 				}
/* 000199 */ 			}
/* 000199 */ 		}
/* 000199 */ 		else {
/* 000199 */ 		}
/* 000204 */ 		__call__ (__call__ (__super__, null, FeatureAnnotations, '__init__'), null, self);
/* 000205 */ 		self.macrodefs = __call__ (dict, null, __t__ (macrodefs) || dict ({}));
/* 000206 */ 		self.hide_all_annotations = hide_all_annotations;
/* 000206 */ 	});},
/* 000209 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
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
/* 000210 */ 		var macros = [];
/* 000212 */ 		var color_index = 0;
/* 000214 */ 		var __iterable0__ = (function () {
/* 000214 */ 			var __accu0__ = self.macrodefs;
/* 000214 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000214 */ 		}) ();
/* 000214 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000214 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000214 */ 			var macroname = __left0__ [0];
/* 000214 */ 			var annotdef = __left0__ [1];
/* 000215 */ 			(function () {
/* 000215 */ 				var __accu0__ = macros;
/* 000216 */ 				return __call__ (__accu0__.append, __accu0__, __call__ (AnnotationMacro, null, __kwargtrans__ (__mergekwargtrans__ ({macroname: macroname, color_index: color_index}, annotdef))));
/* 000216 */ 			}) ();
/* 000222 */ 			var color_index = __call__ (__iadd__, null, color_index, 1);
/* 000222 */ 		}
/* 000224 */ 		return __call__ (dict, null, __kwargtrans__ ({macros: macros}));
/* 000226 */ 	});},
/* 000226 */ 	RenderManager: __class__ ('RenderManager', [Feature.RenderManager], {
/* 000226 */ 		__module__: __name__,
/* 000227 */ 		get initialize () {return __get__ (this, function (self, hide_all_annotations) {
/* 000227 */ 			if (typeof hide_all_annotations == 'undefined' || (hide_all_annotations != null && hide_all_annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000227 */ 				var hide_all_annotations = null;
/* 000227 */ 			};
/* 000227 */ 			if (arguments.length) {
/* 000227 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000227 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000227 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000227 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000227 */ 						switch (__attrib0__) {
/* 000227 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000227 */ 							case 'hide_all_annotations': var hide_all_annotations = __allkwargs0__ [__attrib0__]; break;
/* 000227 */ 						}
/* 000227 */ 					}
/* 000227 */ 				}
/* 000227 */ 			}
/* 000227 */ 			else {
/* 000227 */ 			}
/* 000228 */ 			if (__t__ (hide_all_annotations !== null)) {
/* 000229 */ 				self.hide_all_annotations = hide_all_annotations;
/* 000229 */ 			}
/* 000230 */ 			else {
/* 000231 */ 				self.hide_all_annotations = self.feature.hide_all_annotations;
/* 000231 */ 			}
/* 000231 */ 		});}
/* 000231 */ 	})
/* 000231 */ });
/* 000235 */ export var FeatureClass = FeatureAnnotations;
/* 000007 */ 
//# sourceMappingURL=flm.feature.annotations.map