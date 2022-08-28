/* 000001 */ // Transcrypt'ed from Python, 2022-08-23 17:26:48
/* 000006 */ var logging = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000024 */ import {SimpleIncludeGraphicsMacro} from './llm.feature.graphics.js';
/* 000023 */ import {Feature} from './llm.feature._base.js';
/* 000020 */ import * as fmthelpers from './llm.fmthelpers.js';
/* 000019 */ import {LLMEnvironmentSpecBase} from './llm.llmspecinfo.js';
/* 000018 */ import {LLMArgumentSpec} from './llm.llmenvironment.js';
/* 000012 */ import {LatexEnvironmentBodyContentsParser, MacroSpec, ParsingStateDeltaExtendLatexContextDb} from './pylatexenc.macrospec.js';
/* 000011 */ import * as latexnodes_parsers from './pylatexenc.latexnodes.parsers.js';
/* 000010 */ import * as latexnodes_nodes from './pylatexenc.latexnodes.nodes.js';
/* 000009 */ import {LatexWalkerParseError, ParsedArgumentsInfo} from './pylatexenc.latexnodes.js';
/* 000006 */ import * as __module_logging__ from './logging.js';
/* 000006 */ __nest__ (logging, '', __module_logging__);
/* 000006 */ export {LatexEnvironmentBodyContentsParser, fmthelpers, latexnodes_nodes, LatexWalkerParseError, ParsedArgumentsInfo, MacroSpec, latexnodes_parsers, LLMEnvironmentSpecBase, Feature, ParsingStateDeltaExtendLatexContextDb, LLMArgumentSpec, SimpleIncludeGraphicsMacro};
/* 000001 */ var __name__ = 'llm.feature.floats';
/* 000007 */ export var logger = (function () {
/* 000007 */ 	var __accu0__ = logging;
/* 000007 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000007 */ }) ();
/* 000031 */ export var FloatEnvironment =  __class__ ('FloatEnvironment', [LLMEnvironmentSpecBase], {
/* 000031 */ 	__module__: __name__,
/* 000033 */ 	is_block_level: true,
/* 000035 */ 	float_content_is_block_level: true,
/* 000037 */ 	float_content_render_at_environment_node_location: true,
/* 000045 */ 	allowed_in_standalone_mode: false,
/* 000047 */ 	get __init__ () {return __get__ (this, function (self, float_type) {
/* 000047 */ 		if (arguments.length) {
/* 000047 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000047 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000047 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000047 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000047 */ 					switch (__attrib0__) {
/* 000047 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000047 */ 						case 'float_type': var float_type = __allkwargs0__ [__attrib0__]; break;
/* 000047 */ 					}
/* 000047 */ 				}
/* 000047 */ 			}
/* 000047 */ 		}
/* 000047 */ 		else {
/* 000047 */ 		}
/* 000048 */ 		__call__ (__call__ (__super__, null, FloatEnvironment, '__init__'), null, self, __kwargtrans__ ({environmentname: float_type, arguments_spec_list: []}));
/* 000052 */ 		self.float_type = float_type;
/* 000052 */ 	});},
/* 000054 */ 	get float_content_set_extra_definitions () {return __get__ (this, function (self, extend_latex_context) {
/* 000054 */ 		if (arguments.length) {
/* 000054 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000054 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000054 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000054 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000054 */ 					switch (__attrib0__) {
/* 000054 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000054 */ 						case 'extend_latex_context': var extend_latex_context = __allkwargs0__ [__attrib0__]; break;
/* 000054 */ 					}
/* 000054 */ 				}
/* 000054 */ 			}
/* 000054 */ 		}
/* 000054 */ 		else {
/* 000054 */ 		}
/* 000055 */ 		// pass;
/* 000055 */ 	});},
/* 000057 */ 	get make_body_parser () {return __get__ (this, function (self, token, nodeargd, arg_parsing_state_delta) {
/* 000057 */ 		if (arguments.length) {
/* 000057 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000057 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000057 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000057 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000057 */ 					switch (__attrib0__) {
/* 000057 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000057 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000057 */ 						case 'nodeargd': var nodeargd = __allkwargs0__ [__attrib0__]; break;
/* 000057 */ 						case 'arg_parsing_state_delta': var arg_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000057 */ 					}
/* 000057 */ 				}
/* 000057 */ 			}
/* 000057 */ 		}
/* 000057 */ 		else {
/* 000057 */ 		}
/* 000062 */ 		var extend_latex_context = __call__ (dict, null, __kwargtrans__ ({macros: [__call__ (MacroSpec, null, 'label', __kwargtrans__ ({arguments_spec_list: [__call__ (LLMArgumentSpec, null, __kwargtrans__ ({parser: (function () {
/* 000062 */ 			var __accu0__ = latexnodes_parsers;
/* 000062 */ 			return __call__ (__accu0__.LatexCharsGroupParser, __accu0__, __kwargtrans__ ({delimiters: tuple (['{', '}'])}));
/* 000069 */ 		}) (), argname: 'label'}))]})), __call__ (MacroSpec, null, 'caption', __kwargtrans__ ({arguments_spec_list: [__call__ (LLMArgumentSpec, null, '{', __kwargtrans__ ({argname: 'captiontext'}))]}))], environments: [], specials: []}));
/* 000078 */ 		(function () {
/* 000078 */ 			var __accu0__ = self;
/* 000078 */ 			return __call__ (__accu0__.float_content_set_extra_definitions, __accu0__, extend_latex_context);
/* 000078 */ 		}) ();
/* 000083 */ 		return __call__ (LatexEnvironmentBodyContentsParser, null, __kwargtrans__ ({environmentname: token.arg, contents_parsing_state_delta: __call__ (ParsingStateDeltaExtendLatexContextDb, null, __kwargtrans__ ({extend_latex_context: extend_latex_context, set_attributes: __call__ (dict, null, __kwargtrans__ ({is_block_level: self.float_content_is_block_level}))}))}));
/* 000083 */ 	});},
/* 000087 */ 	get finalize_handle_content_node () {return __get__ (this, function (self, float_node, content_node) {
/* 000087 */ 		if (arguments.length) {
/* 000087 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000087 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000087 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000087 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000087 */ 					switch (__attrib0__) {
/* 000087 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000087 */ 						case 'float_node': var float_node = __allkwargs0__ [__attrib0__]; break;
/* 000087 */ 						case 'content_node': var content_node = __allkwargs0__ [__attrib0__]; break;
/* 000087 */ 					}
/* 000087 */ 				}
/* 000087 */ 			}
/* 000087 */ 		}
/* 000087 */ 		else {
/* 000087 */ 		}
/* 000095 */ 		return true;
/* 000095 */ 	});},
/* 000097 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000097 */ 		if (arguments.length) {
/* 000097 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000097 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000097 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000097 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000097 */ 					switch (__attrib0__) {
/* 000097 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000097 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000097 */ 					}
/* 000097 */ 				}
/* 000097 */ 			}
/* 000097 */ 		}
/* 000097 */ 		else {
/* 000097 */ 		}
/* 000103 */ 		node.llm_float_label = __call__ (dict, null, __kwargtrans__ ({ref_label_prefix: null, ref_label: null, label_node: null}));
/* 000104 */ 		node.llm_float_caption = __call__ (dict, null, __kwargtrans__ ({caption_nodelist: null, caption_node: null}));
/* 000105 */ 		var float_content_items = [];
/* 000106 */ 		var __iterable0__ = node.nodelist;
/* 000106 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000106 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000107 */ 			if (__t__ ((function () {
/* 000107 */ 				var __accu0__ = n;
/* 000107 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000107 */ 			}) ())) {
/* 000109 */ 				if (__t__ (__eq__ (n.macroname, 'label'))) {
/* 000111 */ 					__setitem__ (node.llm_float_label, 'label_node', n);
/* 000113 */ 					var ref_label_node_args = (function () {
/* 000113 */ 						var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: n}));
/* 000113 */ 						return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['label']));
/* 000113 */ 					}) ();
/* 000116 */ 					var ref_label_full = (function () {
/* 000116 */ 						var __accu0__ = __getitem__ (ref_label_node_args, 'label');
/* 000116 */ 						return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000116 */ 					}) ();
/* 000117 */ 					if (__t__ (__in__ (':', ref_label_full))) {
/* 000118 */ 						var __left0__ = (function () {
/* 000118 */ 							var __accu0__ = ref_label_full;
/* 000118 */ 							return __call__ (__accu0__.py_split, __accu0__, ':', 1);
/* 000118 */ 						}) ();
/* 000118 */ 						var ref_label_prefix = __left0__ [0];
/* 000118 */ 						var ref_label = __left0__ [1];
/* 000118 */ 					}
/* 000119 */ 					else {
/* 000120 */ 						var __left0__ = tuple ([null, ref_label_full]);
/* 000120 */ 						var ref_label_prefix = __left0__ [0];
/* 000120 */ 						var ref_label = __left0__ [1];
/* 000120 */ 					}
/* 000122 */ 					if (__t__ (__ne__ (ref_label_prefix, self.float_type))) {
/* 000123 */ 						var __except0__ = __call__ (LatexWalkerParseError, null, '{} label must start with the prefix ‘{}:...’ (got ‘{}’)'.format (self.float_type, self.float_type, ref_label_full), __kwargtrans__ ({pos: n.pos}));
/* 000123 */ 						__except0__.__cause__ = null;
/* 000123 */ 						throw __except0__;
/* 000123 */ 					}
/* 000129 */ 					__setitem__ (node.llm_float_label, 'ref_label_prefix', ref_label_prefix);
/* 000130 */ 					__setitem__ (node.llm_float_label, 'ref_label', ref_label);
/* 000132 */ 					if (__t__ (__ne__ (ref_label_prefix, self.float_type))) {
/* 000133 */ 						var __except0__ = __call__ (LatexWalkerParseError, null, "Float's \\label{}...{} must have the prefix ‘{}:’".format ('{', '}', self.float_type), __kwargtrans__ ({pos: n.pos}));
/* 000133 */ 						__except0__.__cause__ = null;
/* 000133 */ 						throw __except0__;
/* 000133 */ 					}
/* 000133 */ 					continue;
/* 000133 */ 				}
/* 000141 */ 				if (__t__ (__eq__ (n.macroname, 'caption'))) {
/* 000143 */ 					__setitem__ (node.llm_float_caption, 'caption_node', n);
/* 000145 */ 					var ref_caption_node_args = (function () {
/* 000145 */ 						var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: n}));
/* 000145 */ 						return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['captiontext']));
/* 000145 */ 					}) ();
/* 000149 */ 					var ref_caption_nodelist = (function () {
/* 000149 */ 						var __accu0__ = __getitem__ (ref_caption_node_args, 'captiontext');
/* 000149 */ 						return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000149 */ 					}) ();
/* 000150 */ 					__setitem__ (node.llm_float_caption, 'caption_nodelist', ref_caption_nodelist);
/* 000150 */ 					continue;
/* 000150 */ 				}
/* 000150 */ 			}
/* 000154 */ 			var include_in_content = (function () {
/* 000154 */ 				var __accu0__ = self;
/* 000154 */ 				return __call__ (__accu0__.finalize_handle_content_node, __accu0__, node, n);
/* 000154 */ 			}) ();
/* 000155 */ 			if (__t__ (include_in_content)) {
/* 000156 */ 				(function () {
/* 000156 */ 					var __accu0__ = float_content_items;
/* 000156 */ 					return __call__ (__accu0__.append, __accu0__, n);
/* 000156 */ 				}) ();
/* 000156 */ 			}
/* 000156 */ 		}
/* 000159 */ 		node.llm_float_content_nodelist = (function () {
/* 000159 */ 			var __accu0__ = node.latex_walker;
/* 000159 */ 			return __call__ (__accu0__.make_nodelist, __accu0__, float_content_items, __kwargtrans__ ({parsing_state: node.nodelist.parsing_state}));
/* 000159 */ 		}) ();
/* 000166 */ 		return node;
/* 000166 */ 	});},
/* 000169 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000169 */ 		if (arguments.length) {
/* 000169 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000169 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000169 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000169 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000169 */ 					switch (__attrib0__) {
/* 000169 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000169 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000169 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000169 */ 					}
/* 000169 */ 				}
/* 000169 */ 			}
/* 000169 */ 		}
/* 000169 */ 		else {
/* 000169 */ 		}
/* 000171 */ 		var floats_mgr = (function () {
/* 000171 */ 			var __accu0__ = render_context;
/* 000171 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'floats');
/* 000171 */ 		}) ();
/* 000173 */ 		// pass;
/* 000177 */ 		var ref_label_prefix = __getitem__ (node.llm_float_label, 'ref_label_prefix');
/* 000178 */ 		var ref_label = __getitem__ (node.llm_float_label, 'ref_label');
/* 000180 */ 		var numbered = true;
/* 000181 */ 		if (__t__ (__t__ (ref_label_prefix === null) && ref_label === null)) {
/* 000183 */ 			var numbered = false;
/* 000183 */ 		}
/* 000185 */ 		var float_instance = (function () {
/* 000185 */ 			var __accu0__ = floats_mgr;
/* 000185 */ 			return __call__ (__accu0__.register_float, __accu0__, __kwargtrans__ ({node: node, float_type: self.float_type, numbered: numbered, ref_label_prefix: ref_label_prefix, ref_label: ref_label, caption_nodelist: __getitem__ (node.llm_float_caption, 'caption_nodelist'), content_nodelist: node.llm_float_content_nodelist}));
/* 000185 */ 		}) ();
/* 000200 */ 		if (__t__ (self.float_content_render_at_environment_node_location)) {
/* 000201 */ 			return (function () {
/* 000201 */ 				var __accu0__ = self;
/* 000201 */ 				return __call__ (__accu0__.render_float, __accu0__, float_instance, node, render_context);
/* 000201 */ 			}) ();
/* 000201 */ 		}
/* 000203 */ 		return (function () {
/* 000203 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000203 */ 			return __call__ (__accu0__.render_nothing, __accu0__, __kwargtrans__ ({annotations: ['float-placeholder', 'float-{}-placeholder'.format (self.float_type)]}));
/* 000203 */ 		}) ();
/* 000203 */ 	});},
/* 000209 */ 	get render_float () {return __get__ (this, function (self, float_instance, node, render_context) {
/* 000209 */ 		if (arguments.length) {
/* 000209 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000209 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000209 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000209 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000209 */ 					switch (__attrib0__) {
/* 000209 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000209 */ 						case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000209 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000209 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000209 */ 					}
/* 000209 */ 				}
/* 000209 */ 			}
/* 000209 */ 		}
/* 000209 */ 		else {
/* 000209 */ 		}
/* 000211 */ 		var fragment_renderer = render_context.fragment_renderer;
/* 000213 */ 		return (function () {
/* 000213 */ 			var __accu0__ = fragment_renderer;
/* 000213 */ 			return __call__ (__accu0__.render_float, __accu0__, float_instance, render_context);
/* 000213 */ 		}) ();
/* 000213 */ 	});}
/* 000213 */ });
/* 000220 */ export var FloatInstance =  __class__ ('FloatInstance', [object], {
/* 000220 */ 	__module__: __name__,
/* 000221 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000221 */ 		var float_type = null;
/* 000221 */ 		var float_type_info = null;
/* 000221 */ 		var number = null;
/* 000221 */ 		var formatted_counter_value_llm = null;
/* 000221 */ 		var ref_label_prefix = null;
/* 000221 */ 		var ref_label = null;
/* 000221 */ 		var target_id = null;
/* 000221 */ 		var caption_nodelist = null;
/* 000221 */ 		var content_nodelist = null;
/* 000221 */ 		if (arguments.length) {
/* 000221 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000221 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000221 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000221 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000221 */ 					switch (__attrib0__) {
/* 000221 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000221 */ 						case 'float_type': var float_type = __allkwargs0__ [__attrib0__]; break;
/* 000221 */ 						case 'float_type_info': var float_type_info = __allkwargs0__ [__attrib0__]; break;
/* 000221 */ 						case 'number': var number = __allkwargs0__ [__attrib0__]; break;
/* 000221 */ 						case 'formatted_counter_value_llm': var formatted_counter_value_llm = __allkwargs0__ [__attrib0__]; break;
/* 000221 */ 						case 'ref_label_prefix': var ref_label_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000221 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000221 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000221 */ 						case 'caption_nodelist': var caption_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000221 */ 						case 'content_nodelist': var content_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000221 */ 					}
/* 000221 */ 				}
/* 000221 */ 			}
/* 000221 */ 		}
/* 000221 */ 		else {
/* 000221 */ 		}
/* 000233 */ 		__call__ (__call__ (__super__, null, FloatInstance, '__init__'), null, self);
/* 000234 */ 		self.float_type = float_type;
/* 000235 */ 		self.float_type_info = float_type_info;
/* 000236 */ 		self.number = number;
/* 000237 */ 		self.formatted_counter_value_llm = formatted_counter_value_llm;
/* 000238 */ 		self.ref_label_prefix = ref_label_prefix;
/* 000239 */ 		self.ref_label = ref_label;
/* 000240 */ 		self.target_id = target_id;
/* 000241 */ 		self.caption_nodelist = caption_nodelist;
/* 000242 */ 		self.content_nodelist = content_nodelist;
/* 000243 */ 		self._fields = tuple (['float_type', 'float_type_info', 'number', 'formatted_counter_value_llm', 'ref_label_prefix', 'ref_label', 'target_id', 'caption_nodelist', 'content_nodelist']);
/* 000243 */ 	});},
/* 000248 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000248 */ 		if (arguments.length) {
/* 000248 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000248 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000248 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000248 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000248 */ 					switch (__attrib0__) {
/* 000248 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000248 */ 					}
/* 000248 */ 				}
/* 000248 */ 			}
/* 000248 */ 		}
/* 000248 */ 		else {
/* 000248 */ 		}
/* 000249 */ 		return (function () {
/* 000249 */ 			var __accu0__ = '{}({})';
/* 000251 */ 			return __call__ (__accu0__.format, __accu0__, self.__class__.__name__, (function () {
/* 000251 */ 				var __accu1__ = ', ';
/* 000251 */ 				return __call__ (__accu1__.join, __accu1__, (function () {
/* 000251 */ 					var __accu2__ = [];
/* 000251 */ 					var __iterable0__ = self._fields;
/* 000251 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000251 */ 						var k = __getitem__ (__iterable0__, __index0__);
/* 000251 */ 						(function () {
/* 000251 */ 							var __accu3__ = __accu2__;
/* 000251 */ 							return __call__ (__accu3__.append, __accu3__, '{}={}'.format (k, __call__ (getattr, null, self, k)));
/* 000251 */ 						}) ();
/* 000251 */ 					}
/* 000251 */ 					return __accu2__;
/* 000251 */ 				}) ());
/* 000251 */ 			}) ());
/* 000251 */ 		}) ();
/* 000251 */ 	});}
/* 000251 */ });
/* 000258 */ export var FloatType =  __class__ ('FloatType', [object], {
/* 000258 */ 	__module__: __name__,
/* 000259 */ 	get __init__ () {return __get__ (this, function (self, float_type, float_caption_name, counter_formatter) {
/* 000259 */ 		if (arguments.length) {
/* 000259 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000259 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000259 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000259 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000259 */ 					switch (__attrib0__) {
/* 000259 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000259 */ 						case 'float_type': var float_type = __allkwargs0__ [__attrib0__]; break;
/* 000259 */ 						case 'float_caption_name': var float_caption_name = __allkwargs0__ [__attrib0__]; break;
/* 000259 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000259 */ 					}
/* 000259 */ 				}
/* 000259 */ 			}
/* 000259 */ 		}
/* 000259 */ 		else {
/* 000259 */ 		}
/* 000266 */ 		__call__ (__call__ (__super__, null, FloatType, '__init__'), null, self);
/* 000268 */ 		self.float_type = float_type;
/* 000269 */ 		self.float_caption_name = float_caption_name;
/* 000271 */ 		if (__t__ (!__t__ ((__call__ (callable, null, counter_formatter))))) {
/* 000272 */ 			var counter_formatter = __getitem__ (fmthelpers.standard_counter_formatters, counter_formatter);
/* 000272 */ 		}
/* 000273 */ 		self.counter_formatter = counter_formatter;
/* 000275 */ 		self._fields = tuple (['float_type', 'float_caption_name', 'counter_formatter']);
/* 000275 */ 	});},
/* 000277 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000277 */ 		if (arguments.length) {
/* 000277 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000277 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000277 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000277 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000277 */ 					switch (__attrib0__) {
/* 000277 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000277 */ 					}
/* 000277 */ 				}
/* 000277 */ 			}
/* 000277 */ 		}
/* 000277 */ 		else {
/* 000277 */ 		}
/* 000278 */ 		return (function () {
/* 000278 */ 			var __accu0__ = '{}({})';
/* 000280 */ 			return __call__ (__accu0__.format, __accu0__, self.__class__.__name__, (function () {
/* 000280 */ 				var __accu1__ = ', ';
/* 000280 */ 				return __call__ (__accu1__.join, __accu1__, (function () {
/* 000280 */ 					var __accu2__ = [];
/* 000280 */ 					var __iterable0__ = self._fields;
/* 000280 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000280 */ 						var k = __getitem__ (__iterable0__, __index0__);
/* 000280 */ 						(function () {
/* 000280 */ 							var __accu3__ = __accu2__;
/* 000280 */ 							return __call__ (__accu3__.append, __accu3__, '{}={}'.format (k, __call__ (getattr, null, self, k)));
/* 000280 */ 						}) ();
/* 000280 */ 					}
/* 000280 */ 					return __accu2__;
/* 000280 */ 				}) ());
/* 000280 */ 			}) ());
/* 000280 */ 		}) ();
/* 000280 */ 	});}
/* 000280 */ });
/* 000285 */ export var FeatureFloats =  __class__ ('FeatureFloats', [Feature], {
/* 000285 */ 	__module__: __name__,
/* 000287 */ 	feature_name: 'floats',
/* 000289 */ 	get __init__ () {return __get__ (this, function (self, float_types) {
/* 000289 */ 		if (typeof float_types == 'undefined' || (float_types != null && float_types.hasOwnProperty ("__kwargtrans__"))) {;
/* 000289 */ 			var float_types = null;
/* 000289 */ 		};
/* 000289 */ 		if (arguments.length) {
/* 000289 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000289 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000289 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000289 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000289 */ 					switch (__attrib0__) {
/* 000289 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000289 */ 						case 'float_types': var float_types = __allkwargs0__ [__attrib0__]; break;
/* 000289 */ 					}
/* 000289 */ 				}
/* 000289 */ 			}
/* 000289 */ 		}
/* 000289 */ 		else {
/* 000289 */ 		}
/* 000290 */ 		__call__ (__call__ (__super__, null, FeatureFloats, '__init__'), null, self);
/* 000291 */ 		if (__t__ (float_types === null)) {
/* 000294 */ 			var float_types = [__call__ (FloatType, null, 'figure', 'Figure', 'arabic'), __call__ (FloatType, null, 'table', 'Table', 'arabic')];
/* 000294 */ 		}
/* 000296 */ 		var _mkfloattypeobj = function (x) {
/* 000296 */ 			if (arguments.length) {
/* 000296 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000296 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000296 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000296 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000296 */ 						switch (__attrib0__) {
/* 000296 */ 							case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000296 */ 						}
/* 000296 */ 					}
/* 000296 */ 				}
/* 000296 */ 			}
/* 000296 */ 			else {
/* 000296 */ 			}
/* 000297 */ 			if (__t__ (__call__ (isinstance, null, x, FloatType))) {
/* 000298 */ 				return x;
/* 000298 */ 			}
/* 000299 */ 			return __call__ (FloatType, null, __kwargtrans__ (x));
/* 000299 */ 		};
/* 000300 */ 		self.float_types_list = (function () {
/* 000300 */ 			var __accu0__ = [];
/* 000300 */ 			var __iterable0__ = float_types;
/* 000300 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000300 */ 				var x = __getitem__ (__iterable0__, __index0__);
/* 000300 */ 				(function () {
/* 000300 */ 					var __accu1__ = __accu0__;
/* 000300 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (_mkfloattypeobj, null, x));
/* 000300 */ 				}) ();
/* 000300 */ 			}
/* 000300 */ 			return __accu0__;
/* 000300 */ 		}) ();
/* 000301 */ 		self.float_types = (function () {
/* 000301 */ 			var __accu0__ = [];
/* 000301 */ 			var __iterable0__ = self.float_types_list;
/* 000301 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000303 */ 				var ft = __getitem__ (__iterable0__, __index0__);
/* 000303 */ 				(function () {
/* 000303 */ 					var __accu1__ = __accu0__;
/* 000303 */ 					return __call__ (__accu1__.append, __accu1__, [ft.float_type, ft]);
/* 000303 */ 				}) ();
/* 000303 */ 			}
/* 000303 */ 			return dict (__accu0__);
/* 000303 */ 		}) ();
/* 000303 */ 	});},
/* 000306 */ 	make_float_environment_spec: FloatEnvironment,
/* 000308 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000308 */ 		if (arguments.length) {
/* 000308 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000308 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000308 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000308 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000308 */ 					switch (__attrib0__) {
/* 000308 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000308 */ 					}
/* 000308 */ 				}
/* 000308 */ 			}
/* 000308 */ 		}
/* 000308 */ 		else {
/* 000308 */ 		}
/* 000309 */ 		var environments = [];
/* 000310 */ 		var __iterable0__ = (function () {
/* 000310 */ 			var __accu0__ = self.float_types;
/* 000310 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000310 */ 		}) ();
/* 000310 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000310 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000310 */ 			var float_type = __left0__ [0];
/* 000310 */ 			var ftinfo = __left0__ [1];
/* 000311 */ 			(function () {
/* 000311 */ 				var __accu0__ = environments;
/* 000312 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000312 */ 					var __accu1__ = self;
/* 000312 */ 					return __call__ (__accu1__.make_float_environment_spec, __accu1__, float_type);
/* 000312 */ 				}) ());
/* 000312 */ 			}) ();
/* 000312 */ 		}
/* 000314 */ 		return __call__ (dict, null, __kwargtrans__ ({environments: environments}));
/* 000317 */ 	});},
/* 000317 */ 	RenderManager: __class__ ('RenderManager', [Feature.RenderManager], {
/* 000317 */ 		__module__: __name__,
/* 000319 */ 		get initialize () {return __get__ (this, function (self) {
/* 000319 */ 			if (arguments.length) {
/* 000319 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000319 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000319 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000319 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000319 */ 						switch (__attrib0__) {
/* 000319 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000319 */ 						}
/* 000319 */ 					}
/* 000319 */ 				}
/* 000319 */ 			}
/* 000319 */ 			else {
/* 000319 */ 			}
/* 000320 */ 			self.floats = (function () {
/* 000320 */ 				var __accu0__ = [];
/* 000322 */ 				var __iterable0__ = (function () {
/* 000322 */ 					var __accu1__ = self.feature.float_types;
/* 000322 */ 					return __call__ (__accu1__.py_items, __accu1__);
/* 000322 */ 				}) ();
/* 000322 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000322 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000322 */ 					var float_type = __left0__ [0];
/* 000322 */ 					var ftinfo = __left0__ [1];
/* 000322 */ 					(function () {
/* 000322 */ 						var __accu1__ = __accu0__;
/* 000322 */ 						return __call__ (__accu1__.append, __accu1__, [float_type, []]);
/* 000322 */ 					}) ();
/* 000322 */ 				}
/* 000322 */ 				return dict (__accu0__);
/* 000322 */ 			}) ();
/* 000324 */ 			self.float_counters = (function () {
/* 000324 */ 				var __accu0__ = [];
/* 000326 */ 				var __iterable0__ = (function () {
/* 000326 */ 					var __accu1__ = self.feature.float_types;
/* 000326 */ 					return __call__ (__accu1__.py_items, __accu1__);
/* 000326 */ 				}) ();
/* 000326 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000326 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000326 */ 					var float_type = __left0__ [0];
/* 000326 */ 					var ftinfo = __left0__ [1];
/* 000326 */ 					(function () {
/* 000326 */ 						var __accu1__ = __accu0__;
/* 000326 */ 						return __call__ (__accu1__.append, __accu1__, [float_type, 1]);
/* 000326 */ 					}) ();
/* 000326 */ 				}
/* 000326 */ 				return dict (__accu0__);
/* 000326 */ 			}) ();
/* 000328 */ 			self.float_instances = dict ({});
/* 000328 */ 		});},
/* 000330 */ 		get register_float () {return __get__ (this, function (self, float_type) {
/* 000330 */ 			var numbered = true;
/* 000330 */ 			var ref_label_prefix = null;
/* 000330 */ 			var ref_label = null;
/* 000330 */ 			var caption_nodelist = null;
/* 000330 */ 			var content_nodelist = null;
/* 000330 */ 			if (arguments.length) {
/* 000330 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000330 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000330 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000330 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000330 */ 						switch (__attrib0__) {
/* 000330 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000330 */ 							case 'float_type': var float_type = __allkwargs0__ [__attrib0__]; break;
/* 000330 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000330 */ 							case 'numbered': var numbered = __allkwargs0__ [__attrib0__]; break;
/* 000330 */ 							case 'ref_label_prefix': var ref_label_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000330 */ 							case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000330 */ 							case 'caption_nodelist': var caption_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000330 */ 							case 'content_nodelist': var content_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000330 */ 						}
/* 000330 */ 					}
/* 000330 */ 				}
/* 000330 */ 			}
/* 000330 */ 			else {
/* 000330 */ 			}
/* 000342 */ 			var node_id = (function () {
/* 000342 */ 				var __accu0__ = self;
/* 000342 */ 				return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000342 */ 			}) ();
/* 000344 */ 			if (__t__ (__in__ (node_id, self.float_instances))) {
/* 000346 */ 				return __getitem__ (self.float_instances, node_id);
/* 000346 */ 			}
/* 000348 */ 			var float_type_info = __getitem__ (self.feature.float_types, float_type);
/* 000350 */ 			// pass;
/* 000354 */ 			if (__t__ (numbered)) {
/* 000355 */ 				var fmtcounter = float_type_info.counter_formatter;
/* 000356 */ 				var number = __getitem__ (self.float_counters, float_type);
/* 000357 */ 				__setitem__ (self.float_counters, float_type, __call__ (__iadd__, null, __getitem__ (self.float_counters, float_type), 1));
/* 000359 */ 				var fmtvalue_llm_text = __call__ (fmtcounter, null, number);
/* 000360 */ 				var fmtvalue_llm = (function () {
/* 000360 */ 					var __accu0__ = self.render_context.doc.environment;
/* 000360 */ 					return __call__ (__accu0__.make_fragment, __accu0__, fmtvalue_llm_text, __kwargtrans__ ({is_block_level: false, what: '{} {} counter value'.format (float_type, number)}));
/* 000360 */ 				}) ();
/* 000360 */ 			}
/* 000364 */ 			else {
/* 000366 */ 				var number = null;
/* 000367 */ 				var fmtvalue_llm = null;
/* 000367 */ 			}
/* 000369 */ 			var target_id = null;
/* 000370 */ 			if (__t__ (number !== null)) {
/* 000371 */ 				var target_id = '{}-{}'.format (float_type, number);
/* 000371 */ 			}
/* 000373 */ 			var float_instance = __call__ (FloatInstance, null, __kwargtrans__ ({float_type: float_type, float_type_info: float_type_info, number: number, formatted_counter_value_llm: fmtvalue_llm, ref_label_prefix: ref_label_prefix, ref_label: ref_label, target_id: target_id, caption_nodelist: caption_nodelist, content_nodelist: content_nodelist}));
/* 000387 */ 			(function () {
/* 000387 */ 				var __accu0__ = __getitem__ (self.floats, float_type);
/* 000387 */ 				return __call__ (__accu0__.append, __accu0__, float_instance);
/* 000387 */ 			}) ();
/* 000390 */ 			if (__t__ (__t__ (number !== null) && (function () {
/* 000390 */ 				var __accu0__ = self.render_context;
/* 000390 */ 				return __call__ (__accu0__.supports_feature, __accu0__, 'refs');
/* 000390 */ 			}) ())) {
/* 000394 */ 				var refs_mgr = (function () {
/* 000394 */ 					var __accu0__ = self.render_context;
/* 000394 */ 					return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000394 */ 				}) ();
/* 000396 */ 				if (__t__ (__t__ (ref_label_prefix !== null) && ref_label !== null)) {
/* 000396 */ 					assert (__eq__ (ref_label_prefix, float_type));
/* 000400 */ 					var formatted_ref_llm_text = (function () {
/* 000400 */ 						var __accu0__ = self;
/* 000400 */ 						return __call__ (__accu0__.get_formatted_ref_llm_text, __accu0__, float_instance);
/* 000400 */ 					}) ();
/* 000405 */ 					(function () {
/* 000405 */ 						var __accu0__ = refs_mgr;
/* 000405 */ 						return __call__ (__accu0__.register_reference, __accu0__, ref_label_prefix, ref_label, __kwargtrans__ ({node: node, formatted_ref_llm_text: formatted_ref_llm_text, target_href: '#{}'.format (target_id)}));
/* 000405 */ 					}) ();
/* 000405 */ 				}
/* 000405 */ 			}
/* 000413 */ 			__setitem__ (self.float_instances, node_id, float_instance);
/* 000414 */ 			return float_instance;
/* 000414 */ 		});},
/* 000416 */ 		get get_formatted_ref_llm_text () {return __get__ (this, function (self, float_instance) {
/* 000416 */ 			if (arguments.length) {
/* 000416 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000416 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000416 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000416 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000416 */ 						switch (__attrib0__) {
/* 000416 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000416 */ 							case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000416 */ 						}
/* 000416 */ 					}
/* 000416 */ 				}
/* 000416 */ 			}
/* 000416 */ 			else {
/* 000416 */ 			}
/* 000417 */ 			return __add__ (__add__ (float_instance.float_type_info.float_caption_name, '~'), float_instance.formatted_counter_value_llm.llm_text);
/* 000417 */ 		});}
/* 000417 */ 	})
/* 000417 */ });
/* 000427 */ export var FloatEnvironmentIncludeGraphicsOnly =  __class__ ('FloatEnvironmentIncludeGraphicsOnly', [FloatEnvironment], {
/* 000427 */ 	__module__: __name__,
/* 000429 */ 	get float_content_set_extra_definitions () {return __get__ (this, function (self, extend_latex_context) {
/* 000429 */ 		if (arguments.length) {
/* 000429 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000429 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000429 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000429 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000429 */ 					switch (__attrib0__) {
/* 000429 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000429 */ 						case 'extend_latex_context': var extend_latex_context = __allkwargs0__ [__attrib0__]; break;
/* 000429 */ 					}
/* 000429 */ 				}
/* 000429 */ 			}
/* 000429 */ 		}
/* 000429 */ 		else {
/* 000429 */ 		}
/* 000430 */ 		(function () {
/* 000430 */ 			var __accu0__ = __getitem__ (extend_latex_context, 'macros');
/* 000431 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (SimpleIncludeGraphicsMacro, null, __kwargtrans__ ({macroname: 'includegraphics'})));
/* 000431 */ 		}) ();
/* 000431 */ 	});},
/* 000434 */ 	get finalize_handle_content_node () {return __get__ (this, function (self, float_node, content_node) {
/* 000434 */ 		if (arguments.length) {
/* 000434 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000434 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000434 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000434 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000434 */ 					switch (__attrib0__) {
/* 000434 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000434 */ 						case 'float_node': var float_node = __allkwargs0__ [__attrib0__]; break;
/* 000434 */ 						case 'content_node': var content_node = __allkwargs0__ [__attrib0__]; break;
/* 000434 */ 					}
/* 000434 */ 				}
/* 000434 */ 			}
/* 000434 */ 		}
/* 000434 */ 		else {
/* 000434 */ 		}
/* 000435 */ 		if (__t__ (__t__ ((function () {
/* 000435 */ 			var __accu0__ = content_node;
/* 000435 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000435 */ 		}) ()) && __eq__ (content_node.macroname, 'includegraphics'))) {
/* 000438 */ 			if (__t__ (__t__ (__call__ (hasattr, null, float_node, 'llm_includegraphics_node')) && float_node.llm_includegraphics_node !== null)) {
/* 000440 */ 				var __except0__ = __call__ (LatexWalkerParseError, null, '{} should contain exactly one \\includegraphics command apart from possible \\caption and \\label commands'.format (self.float_type), __kwargtrans__ ({pos: content_node.pos}));
/* 000440 */ 				__except0__.__cause__ = null;
/* 000440 */ 				throw __except0__;
/* 000440 */ 			}
/* 000446 */ 			float_node.llm_includegraphics_node = content_node;
/* 000447 */ 			return true;
/* 000447 */ 		}
/* 000449 */ 		if (__t__ (__t__ ((function () {
/* 000449 */ 			var __accu0__ = content_node;
/* 000449 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000450 */ 		}) ()) && __eq__ (__call__ (len, null, (function () {
/* 000450 */ 			var __accu0__ = content_node.chars;
/* 000450 */ 			return __call__ (__accu0__.strip, __accu0__);
/* 000450 */ 		}) ()), 0))) {
/* 000452 */ 			return false;
/* 000452 */ 		}
/* 000454 */ 		if (__t__ ((function () {
/* 000454 */ 			var __accu0__ = content_node;
/* 000454 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCommentNode);
/* 000454 */ 		}) ())) {
/* 000456 */ 			return false;
/* 000456 */ 		}
/* 000458 */ 		var __except0__ = __call__ (LatexWalkerParseError, null, '{} cannot contain content other than \\includegraphics, \\caption and \\label commands'.format (self.float_type), __kwargtrans__ ({pos: content_node.pos}));
/* 000458 */ 		__except0__.__cause__ = null;
/* 000458 */ 		throw __except0__;
/* 000458 */ 	});}
/* 000458 */ });
/* 000469 */ export var FeatureFloatsIncludeGraphicsOnly =  __class__ ('FeatureFloatsIncludeGraphicsOnly', [FeatureFloats], {
/* 000469 */ 	__module__: __name__,
/* 000471 */ 	make_float_environment_spec: FloatEnvironmentIncludeGraphicsOnly
/* 000471 */ });
/* 000006 */ 
//# sourceMappingURL=llm.feature.floats.map