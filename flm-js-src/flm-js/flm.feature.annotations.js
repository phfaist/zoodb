/* 000001 */ // Transcrypt'ed from Python, 2026-06-30 21:51:26
/* 000016 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000040 */ import {Feature, FeatureRenderManagerBase} from './flm.feature._base.js';
/* 000036 */ import {FLMMacroSpecBase} from './flm.flmspecinfo.js';
/* 000032 */ import {FLMArgumentSpec, FLMParsingStateDeltaSetBlockLevel} from './flm.flmenvironment.js';
/* 000027 */ import {Mapping, Sequence, TypeCallableSpecBase, TypeDictWithLatexContextDefinitions} from './flm._typing_helpers.js';
/* 000021 */ import {LatexDelimitedGroupParser, LatexGeneralNodesParser, LatexParserBase} from './pylatexenc.latexnodes.parsers.js';
/* 000020 */ import {LatexGroupNode} from './pylatexenc.latexnodes.nodes.js';
/* 000016 */ import {ParsedArgumentsInfo} from './pylatexenc.latexnodes.js';
/* 000016 */ export {LatexDelimitedGroupParser, LatexGroupNode, FLMMacroSpecBase, ParsedArgumentsInfo, FLMParsingStateDeltaSetBlockLevel, FeatureRenderManagerBase, Feature, TypeDictWithLatexContextDefinitions, LatexGeneralNodesParser, Sequence, TypeCallableSpecBase, LatexParserBase, Mapping, FLMArgumentSpec};
/* 000001 */ var __name__ = 'flm.feature.annotations';
/* 000043 */ export var AnnotationArgumentParser =  __class__ ('AnnotationArgumentParser', [LatexParserBase], {
/* 000043 */ 	__module__: __name__,
/* 000055 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000055 */ 		if (arguments.length) {
/* 000055 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000055 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000055 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000055 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000055 */ 					switch (__attrib0__) {
/* 000055 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000055 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000055 */ 					}
/* 000055 */ 				}
/* 000055 */ 			}
/* 000055 */ 		}
/* 000055 */ 		else {
/* 000055 */ 		}
/* 000056 */ 		__call__ (__call__ (__super__, null, AnnotationArgumentParser, '__init__'), null, self);
/* 000058 */ 		self.macroname = macroname;
/* 000059 */ 		self.endmacroname = __add__ ('end', self.macroname);
/* 000061 */ 		self.parser_arg_highlight = __call__ (LatexDelimitedGroupParser, null, __kwargtrans__ ({delimiters: tuple (['{', '}'])}));
/* 000064 */ 		self.parser_arg_comment = __call__ (LatexDelimitedGroupParser, null, __kwargtrans__ ({delimiters: tuple (['[', ']'])}));
/* 000067 */ 		self.parser_endmacro_highlight = __call__ (LatexGeneralNodesParser, null, __kwargtrans__ ({stop_token_condition: (function __lambda__ (tok) {
/* 000067 */ 			if (arguments.length) {
/* 000067 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000067 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000067 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000067 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000067 */ 						switch (__attrib0__) {
/* 000067 */ 							case 'tok': var tok = __allkwargs0__ [__attrib0__]; break;
/* 000067 */ 						}
/* 000067 */ 					}
/* 000067 */ 				}
/* 000067 */ 			}
/* 000067 */ 			else {
/* 000067 */ 			}
/* 000067 */ 			return __t__ (__eq__ (tok.tok, 'macro')) && __eq__ (tok.arg, self.endmacroname);
/* 000067 */ 		}), require_stop_condition_met: true}));
/* 000067 */ 	});},
/* 000074 */ 	get parse () {return __get__ (this, function (self, latex_walker, token_reader, parsing_state) {
/* 000074 */ 		var kwargs = dict ();
/* 000074 */ 		if (arguments.length) {
/* 000074 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000074 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000074 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000074 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000074 */ 					switch (__attrib0__) {
/* 000074 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000074 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000074 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000074 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000074 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000074 */ 					}
/* 000074 */ 				}
/* 000074 */ 				delete kwargs.__kwargtrans__;
/* 000074 */ 			}
/* 000074 */ 		}
/* 000074 */ 		else {
/* 000074 */ 		}
/* 000076 */ 		var parsing_state_w_brackets = (function () {
/* 000076 */ 			var __accu0__ = parsing_state;
/* 000076 */ 			return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ ({latex_group_delimiters: [tuple (['{', '}']), tuple (['[', ']'])]}));
/* 000076 */ 		}) ();
/* 000079 */ 		var tok = (function () {
/* 000079 */ 			var __accu0__ = token_reader;
/* 000079 */ 			return __call__ (__accu0__.peek_token, __accu0__, __kwargtrans__ ({parsing_state: parsing_state_w_brackets}));
/* 000079 */ 		}) ();
/* 000081 */ 		if (__t__ (__eq__ (tok.tok, 'brace_open'))) {
/* 000082 */ 			if (__t__ (__eq__ (tok.arg, '{'))) {
/* 000084 */ 				return (function () {
/* 000084 */ 					var __accu0__ = self.parser_arg_highlight;
/* 000084 */ 					return __call__ (__accu0__.parse, __accu0__, latex_walker, token_reader, parsing_state_w_brackets, __kwargtrans__ (kwargs));
/* 000084 */ 				}) ();
/* 000084 */ 			}
/* 000087 */ 			if (__t__ (__eq__ (tok.arg, '['))) {
/* 000089 */ 				return (function () {
/* 000089 */ 					var __accu0__ = self.parser_arg_comment;
/* 000089 */ 					return __call__ (__accu0__.parse, __accu0__, latex_walker, token_reader, parsing_state_w_brackets, __kwargtrans__ (kwargs));
/* 000089 */ 				}) ();
/* 000089 */ 			}
/* 000092 */ 			var __except0__ = __call__ (ValueError, null, 'Unexpected tok.arg={}!'.format (tok.arg));
/* 000092 */ 			__except0__.__cause__ = null;
/* 000092 */ 			throw __except0__;
/* 000092 */ 		}
/* 000094 */ 		var __left0__ = (function () {
/* 000094 */ 			var __accu0__ = self.parser_endmacro_highlight;
/* 000094 */ 			return __call__ (__accu0__.parse, __accu0__, latex_walker, token_reader, parsing_state, __kwargtrans__ (kwargs));
/* 000094 */ 		}) ();
/* 000094 */ 		var nodelist = __left0__ [0];
/* 000094 */ 		var parsing_state_delta = __left0__ [1];
/* 000098 */ 		(function () {
/* 000098 */ 			var __accu0__ = token_reader;
/* 000098 */ 			return __call__ (__accu0__.next_token, __accu0__, parsing_state);
/* 000098 */ 		}) ();
/* 000100 */ 		var groupnode = (function () {
/* 000100 */ 			var __accu0__ = latex_walker;
/* 000100 */ 			return __call__ (__accu0__.make_node, __accu0__, LatexGroupNode, __kwargtrans__ ({nodelist: nodelist, delimiters: tuple (['', '']), pos: nodelist.pos, pos_end: nodelist.pos_end, parsing_state: parsing_state}));
/* 000100 */ 		}) ();
/* 000108 */ 		return tuple ([groupnode, parsing_state_delta]);
/* 000108 */ 	});}
/* 000108 */ });
/* 000112 */ export var AnnotationMacro =  __class__ ('AnnotationMacro', [FLMMacroSpecBase], {
/* 000112 */ 	__module__: __name__,
/* 000122 */ 	allowed_in_standalone_mode: true,
/* 000127 */ 	_flm_main_text_argument: 'text',
/* 000129 */ 	get __init__ () {return __get__ (this, function (self, macroname, initials, color_index) {
/* 000129 */ 		if (typeof initials == 'undefined' || (initials != null && initials.hasOwnProperty ("__kwargtrans__"))) {;
/* 000129 */ 			var initials = null;
/* 000129 */ 		};
/* 000129 */ 		if (typeof color_index == 'undefined' || (color_index != null && color_index.hasOwnProperty ("__kwargtrans__"))) {;
/* 000129 */ 			var color_index = 0;
/* 000129 */ 		};
/* 000129 */ 		if (arguments.length) {
/* 000129 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000129 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000129 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000129 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000129 */ 					switch (__attrib0__) {
/* 000129 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000129 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000129 */ 						case 'initials': var initials = __allkwargs0__ [__attrib0__]; break;
/* 000129 */ 						case 'color_index': var color_index = __allkwargs0__ [__attrib0__]; break;
/* 000129 */ 					}
/* 000129 */ 				}
/* 000129 */ 			}
/* 000129 */ 		}
/* 000129 */ 		else {
/* 000129 */ 		}
/* 000146 */ 		__call__ (__call__ (__super__, null, AnnotationMacro, '__init__'), null, self, __kwargtrans__ ({macroname: macroname, arguments_spec_list: [__call__ (FLMArgumentSpec, null, __kwargtrans__ ({argname: 'text', parser: __call__ (AnnotationArgumentParser, null, __kwargtrans__ ({macroname: macroname})), parsing_state_delta: __call__ (FLMParsingStateDeltaSetBlockLevel, null, __kwargtrans__ ({is_block_level: null}))}))]}));
/* 000152 */ 		self.initials = initials;
/* 000153 */ 		self.color_index = color_index;
/* 000153 */ 	});},
/* 000155 */ 	_fields: tuple (['macroname']),
/* 000157 */ 	get get_flm_doc () {return __get__ (this, function (self) {
/* 000157 */ 		if (arguments.length) {
/* 000157 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000157 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000157 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000157 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000157 */ 					switch (__attrib0__) {
/* 000157 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000157 */ 					}
/* 000157 */ 				}
/* 000157 */ 			}
/* 000157 */ 		}
/* 000157 */ 		else {
/* 000157 */ 		}
/* 000158 */ 		return 'Annotation macro \\verbcode+\\{}+'.format (self.macroname);
/* 000158 */ 	});},
/* 000162 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000162 */ 		if (arguments.length) {
/* 000162 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000162 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000162 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000162 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000162 */ 					switch (__attrib0__) {
/* 000162 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000162 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000162 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000162 */ 					}
/* 000162 */ 				}
/* 000162 */ 			}
/* 000162 */ 		}
/* 000162 */ 		else {
/* 000162 */ 		}
/* 000164 */ 		var rdr_mgr = (function () {
/* 000164 */ 			var __accu0__ = render_context;
/* 000164 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'annotations');
/* 000164 */ 		}) ();
/* 000165 */ 		if (__t__ (rdr_mgr.hide_all_annotations)) {
/* 000166 */ 			if (__t__ (__eq__ (__getitem__ (node.flmarg_text_delimiters, 0), '['))) {
/* 000167 */ 				return (function () {
/* 000167 */ 					var __accu0__ = render_context.fragment_renderer;
/* 000167 */ 					return __call__ (__accu0__.render_nothing, __accu0__, render_context);
/* 000167 */ 				}) ();
/* 000167 */ 			}
/* 000168 */ 			return (function () {
/* 000168 */ 				var __accu0__ = render_context.fragment_renderer;
/* 000168 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, node.flmarg_text_nodelist, render_context, __kwargtrans__ ({is_block_level: node.flm_is_block_level}));
/* 000168 */ 			}) ();
/* 000168 */ 		}
/* 000174 */ 		if (__t__ (__eq__ (__getitem__ (node.flmarg_text_delimiters, 0), '['))) {
/* 000175 */ 			return (function () {
/* 000175 */ 				var __accu0__ = render_context.fragment_renderer;
/* 000175 */ 				return __call__ (__accu0__.render_annotation_comment, __accu0__, node.flmarg_text_nodelist, __kwargtrans__ ({render_context: render_context, color_index: self.color_index, initials: self.initials, is_block_level: node.flm_is_block_level}));
/* 000175 */ 			}) ();
/* 000175 */ 		}
/* 000183 */ 		return (function () {
/* 000183 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000183 */ 			return __call__ (__accu0__.render_annotation_highlight, __accu0__, node.flmarg_text_nodelist, __kwargtrans__ ({render_context: render_context, color_index: self.color_index, initials: self.initials, is_block_level: node.flm_is_block_level}));
/* 000183 */ 		}) ();
/* 000183 */ 	});},
/* 000192 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000192 */ 		if (arguments.length) {
/* 000192 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000192 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000192 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000192 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000192 */ 					switch (__attrib0__) {
/* 000192 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000192 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000192 */ 					}
/* 000192 */ 				}
/* 000192 */ 			}
/* 000192 */ 		}
/* 000192 */ 		else {
/* 000192 */ 		}
/* 000194 */ 		var node_args = (function () {
/* 000194 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000194 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['text']));
/* 000194 */ 		}) ();
/* 000198 */ 		var text_arg = __getitem__ (node_args, 'text');
/* 000204 */ 		node.flmarg_text_delimiters = text_arg.argument_node_object.delimiters;
/* 000205 */ 		var text_nodelist = (function () {
/* 000205 */ 			var __accu0__ = text_arg;
/* 000205 */ 			return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000205 */ 		}) ();
/* 000206 */ 		node.flmarg_text_nodelist = text_nodelist;
/* 000208 */ 		var nodes_finalizer = node.latex_walker.flm_environment.nodes_finalizer;
/* 000209 */ 		node.flm_is_block_level = (function () {
/* 000209 */ 			var __accu0__ = nodes_finalizer;
/* 000209 */ 			return __call__ (__accu0__.infer_is_block_level_nodelist, __accu0__, text_nodelist);
/* 000209 */ 		}) ();
/* 000209 */ 	});}
/* 000209 */ });
/* 000225 */ export var FeatureAnnotations =  __class__ ('FeatureAnnotations', [Feature], {
/* 000225 */ 	__module__: __name__,
/* 000232 */ 	feature_name: 'annotations',
/* 000233 */ 	feature_title: 'Support for simple annotations in text (comments and highlighted text)',
/* 000235 */ 	feature_flm_doc: "\n    Supports the definition of custom macros to mark annotations from multiple\n    authors.\n\n    Say we define an annotation macro '\\abc'.  There are two types of\n    annotations each macro such as '\\abc' supports:\n\n       \\abc{This piece of text is highlighted}\n       \\abc This piece of text is highlighted, alternative syntax \\endabc\n\n       \\abc[This is an inline comment.]\n\n    Highlighted text refers to pieces of the document that are highlighted in a\n    particular color; inline comments are any remarks that concern the\n    surrounding text and which would typically be deleted before completing the\n    document.\n    ",
/* 000253 */ 	get __init__ () {return __get__ (this, function (self, macrodefs, hide_all_annotations) {
/* 000253 */ 		if (typeof macrodefs == 'undefined' || (macrodefs != null && macrodefs.hasOwnProperty ("__kwargtrans__"))) {;
/* 000253 */ 			var macrodefs = null;
/* 000253 */ 		};
/* 000253 */ 		if (typeof hide_all_annotations == 'undefined' || (hide_all_annotations != null && hide_all_annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000253 */ 			var hide_all_annotations = false;
/* 000253 */ 		};
/* 000253 */ 		if (arguments.length) {
/* 000253 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000253 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000253 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000253 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000253 */ 					switch (__attrib0__) {
/* 000253 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000253 */ 						case 'macrodefs': var macrodefs = __allkwargs0__ [__attrib0__]; break;
/* 000253 */ 						case 'hide_all_annotations': var hide_all_annotations = __allkwargs0__ [__attrib0__]; break;
/* 000253 */ 					}
/* 000253 */ 				}
/* 000253 */ 			}
/* 000253 */ 		}
/* 000253 */ 		else {
/* 000253 */ 		}
/* 000266 */ 		__call__ (__call__ (__super__, null, FeatureAnnotations, '__init__'), null, self);
/* 000267 */ 		self.macrodefs = __call__ (dict, null, __t__ (macrodefs) || dict ({}));
/* 000268 */ 		self.hide_all_annotations = hide_all_annotations;
/* 000268 */ 	});},
/* 000271 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000271 */ 		if (arguments.length) {
/* 000271 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000271 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000271 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000271 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000271 */ 					switch (__attrib0__) {
/* 000271 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000271 */ 					}
/* 000271 */ 				}
/* 000271 */ 			}
/* 000271 */ 		}
/* 000271 */ 		else {
/* 000271 */ 		}
/* 000272 */ 		var macros = [];
/* 000274 */ 		var color_index = 0;
/* 000276 */ 		var __iterable0__ = (function () {
/* 000276 */ 			var __accu0__ = self.macrodefs;
/* 000276 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000276 */ 		}) ();
/* 000276 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000276 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000276 */ 			var macroname = __left0__ [0];
/* 000276 */ 			var annotdef = __left0__ [1];
/* 000277 */ 			(function () {
/* 000277 */ 				var __accu0__ = macros;
/* 000278 */ 				return __call__ (__accu0__.append, __accu0__, __call__ (AnnotationMacro, null, __kwargtrans__ (__mergekwargtrans__ ({macroname: macroname, color_index: color_index}, annotdef))));
/* 000278 */ 			}) ();
/* 000284 */ 			var color_index = __call__ (__iadd__, null, color_index, 1);
/* 000284 */ 		}
/* 000286 */ 		return dict ({'macros': macros});
/* 000290 */ 	});},
/* 000290 */ 	RenderManager: __class__ ('RenderManager', [FeatureRenderManagerBase], {
/* 000290 */ 		__module__: __name__,
/* 000291 */ 		get initialize () {return __get__ (this, function (self, hide_all_annotations) {
/* 000291 */ 			if (typeof hide_all_annotations == 'undefined' || (hide_all_annotations != null && hide_all_annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000291 */ 				var hide_all_annotations = null;
/* 000291 */ 			};
/* 000291 */ 			if (arguments.length) {
/* 000291 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000291 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000291 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000291 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000291 */ 						switch (__attrib0__) {
/* 000291 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000291 */ 							case 'hide_all_annotations': var hide_all_annotations = __allkwargs0__ [__attrib0__]; break;
/* 000291 */ 						}
/* 000291 */ 					}
/* 000291 */ 				}
/* 000291 */ 			}
/* 000291 */ 			else {
/* 000291 */ 			}
/* 000292 */ 			if (__t__ (hide_all_annotations !== null)) {
/* 000293 */ 				self.hide_all_annotations = hide_all_annotations;
/* 000293 */ 			}
/* 000294 */ 			else {
/* 000295 */ 				self.hide_all_annotations = self.feature.hide_all_annotations;
/* 000295 */ 			}
/* 000295 */ 		});}
/* 000295 */ 	})
/* 000295 */ });
/* 000299 */ export var FeatureClass = FeatureAnnotations;
/* 000016 */ 
//# sourceMappingURL=flm.feature.annotations.map