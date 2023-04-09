/* 000001 */ // Transcrypt'ed from Python, 2023-04-09 22:34:27
/* 000007 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000018 */ import * as headings from './llm.feature.headings.js';
/* 000017 */ import {Feature} from './llm.feature._base.js';
/* 000015 */ import {Counter, CounterAlias, build_counter_formatter} from './llm.counter.js';
/* 000012 */ import * as llmspecinfo from './llm.llmspecinfo.js';
/* 000011 */ import {LLMArgumentSpec, make_invocable_node_instance} from './llm.llmenvironment.js';
/* 000009 */ import * as macrospec from './pylatexenc.macrospec.js';
/* 000008 */ import * as latexnodes_nodes from './pylatexenc.latexnodes.nodes.js';
/* 000007 */ import {ParsedArgumentsInfo, ParsingStateDelta} from './pylatexenc.latexnodes.js';
/* 000007 */ export {Feature, Counter, LLMArgumentSpec, macrospec, CounterAlias, latexnodes_nodes, build_counter_formatter, ParsedArgumentsInfo, ParsingStateDelta, make_invocable_node_instance, llmspecinfo, headings};
/* 000001 */ var __name__ = 'llm.feature.theorems';
/* 000024 */ export var optional_text_arg = __call__ (LLMArgumentSpec, null, __kwargtrans__ ({parser: '[', argname: 'thmtitle', llm_doc: 'An optional theorem environment title'}));
/* 000032 */ export var TheoremEnvironment =  __class__ ('TheoremEnvironment', [llmspecinfo.LLMEnvironmentSpecBase], {
/* 000032 */ 	__module__: __name__,
/* 000034 */ 	is_block_level: true,
/* 000036 */ 	body_contents_is_block_level: true,
/* 000038 */ 	get __init__ () {return __get__ (this, function (self, environmentname, theorem_spec, theorem_type_spec, allowed_ref_label_prefixes) {
/* 000038 */ 		if (arguments.length) {
/* 000038 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000038 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000038 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000038 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000038 */ 					switch (__attrib0__) {
/* 000038 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000038 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000038 */ 						case 'theorem_spec': var theorem_spec = __allkwargs0__ [__attrib0__]; break;
/* 000038 */ 						case 'theorem_type_spec': var theorem_type_spec = __allkwargs0__ [__attrib0__]; break;
/* 000038 */ 						case 'allowed_ref_label_prefixes': var allowed_ref_label_prefixes = __allkwargs0__ [__attrib0__]; break;
/* 000038 */ 					}
/* 000038 */ 				}
/* 000038 */ 			}
/* 000038 */ 		}
/* 000038 */ 		else {
/* 000038 */ 		}
/* 000040 */ 		__call__ (__call__ (__super__, null, TheoremEnvironment, '__init__'), null, self, environmentname, __kwargtrans__ ({arguments_spec_list: [optional_text_arg, llmspecinfo.label_arg]}));
/* 000048 */ 		self.theorem_spec = theorem_spec;
/* 000049 */ 		self.theorem_type_spec = theorem_type_spec;
/* 000050 */ 		self.allowed_ref_label_prefixes = allowed_ref_label_prefixes;
/* 000050 */ 	});},
/* 000052 */ 	get make_body_parser () {return __get__ (this, function (self, token, nodeargd, arg_parsing_state_delta) {
/* 000052 */ 		if (arguments.length) {
/* 000052 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000052 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000052 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000052 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000052 */ 					switch (__attrib0__) {
/* 000052 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000052 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000052 */ 						case 'nodeargd': var nodeargd = __allkwargs0__ [__attrib0__]; break;
/* 000052 */ 						case 'arg_parsing_state_delta': var arg_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000052 */ 					}
/* 000052 */ 				}
/* 000052 */ 			}
/* 000052 */ 		}
/* 000052 */ 		else {
/* 000052 */ 		}
/* 000053 */ 		return (function () {
/* 000053 */ 			var __accu0__ = macrospec;
/* 000055 */ 			return __call__ (__accu0__.LatexEnvironmentBodyContentsParser, __accu0__, __kwargtrans__ ({environmentname: token.arg, contents_parsing_state_delta: __call__ (ParsingStateDelta, null, __kwargtrans__ ({set_attributes: dict ({'is_block_level': true})}))}));
/* 000055 */ 		}) ();
/* 000055 */ 	});},
/* 000062 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000062 */ 		if (arguments.length) {
/* 000062 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000062 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000062 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000062 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000062 */ 					switch (__attrib0__) {
/* 000062 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000062 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000062 */ 					}
/* 000062 */ 				}
/* 000062 */ 			}
/* 000062 */ 		}
/* 000062 */ 		else {
/* 000062 */ 		}
/* 000064 */ 		var node_args = (function () {
/* 000064 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000064 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['thmtitle', 'label']));
/* 000064 */ 		}) ();
/* 000068 */ 		var thmtitle_nodelist = null;
/* 000069 */ 		if (__t__ ((function () {
/* 000069 */ 			var __accu0__ = __getitem__ (node_args, 'thmtitle');
/* 000069 */ 			return __call__ (__accu0__.was_provided, __accu0__);
/* 000069 */ 		}) ())) {
/* 000070 */ 			var thmtitle_nodelist = (function () {
/* 000070 */ 				var __accu0__ = __getitem__ (node_args, 'thmtitle');
/* 000070 */ 				return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000070 */ 			}) ();
/* 000070 */ 		}
/* 000072 */ 		var relation_ref_target = null;
/* 000073 */ 		var relation_ref_show_ref = false;
/* 000074 */ 		if (__t__ (__getitem__ (self.theorem_type_spec, 'title_enable_relation_ref'))) {
/* 000076 */ 			if (__t__ (__t__ (thmtitle_nodelist !== null) && __gt__ (__call__ (len, null, thmtitle_nodelist), 0))) {
/* 000077 */ 				var chnode = __getitem__ (thmtitle_nodelist, 0);
/* 000079 */ 				if (__t__ (__t__ (chnode !== null) && __t__ ((function () {
/* 000079 */ 					var __accu0__ = chnode;
/* 000079 */ 					return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000080 */ 				}) ()) && (function () {
/* 000080 */ 					var __accu0__ = chnode.chars;
/* 000080 */ 					return __call__ (__accu0__.startswith, __accu0__, '*');
/* 000080 */ 				}) ())) {
/* 000081 */ 					if (__t__ (__ne__ (__call__ (len, null, thmtitle_nodelist), 1))) {
/* 000086 */ 						var __except0__ = __call__ (LatexWalkerParseError, null, 'When specifying a proof-ref target as optional argument (‘[*thm:xyz]’), the entire argument must consist of regular characters with no special meaning in LLM.  Got: ‘{}’'.format ((function () {
/* 000086 */ 							var __accu0__ = thmtitle_nodelist;
/* 000086 */ 							return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000086 */ 						}) ()), __kwargtrans__ ({pos: chnode.pos}));
/* 000086 */ 						__except0__.__cause__ = null;
/* 000086 */ 						throw __except0__;
/* 000086 */ 					}
/* 000089 */ 					if (__t__ ((function () {
/* 000089 */ 						var __accu0__ = chnode.chars;
/* 000089 */ 						return __call__ (__accu0__.startswith, __accu0__, '**');
/* 000089 */ 					}) ())) {
/* 000090 */ 						var relation_ref_target = __getslice__ (chnode.chars, 2, null, 1);
/* 000091 */ 						var relation_ref_show_ref = false;
/* 000091 */ 					}
/* 000092 */ 					else if (__t__ ((function () {
/* 000092 */ 						var __accu0__ = chnode.chars;
/* 000092 */ 						return __call__ (__accu0__.startswith, __accu0__, '*');
/* 000092 */ 					}) ())) {
/* 000093 */ 						var relation_ref_target = __getslice__ (chnode.chars, 1, null, 1);
/* 000094 */ 						var relation_ref_show_ref = true;
/* 000094 */ 					}
/* 000094 */ 				}
/* 000094 */ 			}
/* 000094 */ 		}
/* 000096 */ 		if (__t__ (relation_ref_target !== null)) {
/* 000097 */ 			if (__t__ (__in__ (':', relation_ref_target))) {
/* 000098 */ 				var relation_ref_target = (function () {
/* 000098 */ 					var __accu0__ = relation_ref_target;
/* 000098 */ 					return __call__ (__accu0__.py_split, __accu0__, ':', __kwargtrans__ ({maxsplit: 1}));
/* 000098 */ 				}) ();
/* 000098 */ 			}
/* 000099 */ 			else {
/* 000100 */ 				var relation_ref_target = tuple ([null, relation_ref_target]);
/* 000100 */ 			}
/* 000100 */ 		}
/* 000102 */ 		node.llmarg_thmtitle = dict ({'nodelist': thmtitle_nodelist, 'has_relation_ref': (__t__ (relation_ref_target !== null) ? true : false), 'relation_ref_target': relation_ref_target, 'relation_ref_show_ref': relation_ref_show_ref});
/* 000109 */ 		node.llmarg_labels = (function () {
/* 000109 */ 			var __accu0__ = llmspecinfo;
/* 000109 */ 			return __call__ (__accu0__.helper_collect_labels, __accu0__, __getitem__ (node_args, 'label'), self.allowed_ref_label_prefixes);
/* 000109 */ 		}) ();
/* 000114 */ 		return node;
/* 000114 */ 	});},
/* 000116 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000116 */ 		if (arguments.length) {
/* 000116 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000116 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000116 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000116 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000116 */ 					switch (__attrib0__) {
/* 000116 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000116 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000116 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000116 */ 					}
/* 000116 */ 				}
/* 000116 */ 			}
/* 000116 */ 		}
/* 000116 */ 		else {
/* 000116 */ 		}
/* 000118 */ 		var fragment_renderer = render_context.fragment_renderer;
/* 000120 */ 		var thms_mgr = (function () {
/* 000120 */ 			var __accu0__ = render_context;
/* 000120 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'theorems');
/* 000120 */ 		}) ();
/* 000121 */ 		var refs_mgr = (function () {
/* 000121 */ 			var __accu0__ = render_context;
/* 000121 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000121 */ 		}) ();
/* 000125 */ 		var llmarg_thmtitle = node.llmarg_thmtitle;
/* 000126 */ 		var llmarg_labels = node.llmarg_labels;
/* 000130 */ 		if (__t__ (__getitem__ (self.theorem_type_spec, 'numbered'))) {
/* 000132 */ 			var counter = __getitem__ (thms_mgr.counters, self.environmentname);
/* 000133 */ 			var prefix_variant = 'capital';
/* 000135 */ 			var ref_instance = (function () {
/* 000135 */ 				var __accu0__ = refs_mgr;
/* 000135 */ 				return __call__ (__accu0__.register_reference_step_counter, __accu0__, __kwargtrans__ ({node: node, counter: counter, target_href_fn: (function __lambda__ (n) {
/* 000135 */ 					if (arguments.length) {
/* 000135 */ 						var __ilastarg0__ = arguments.length - 1;
/* 000135 */ 						if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000135 */ 							var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000135 */ 							for (var __attrib0__ in __allkwargs0__) {
/* 000135 */ 								switch (__attrib0__) {
/* 000135 */ 									case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000135 */ 								}
/* 000135 */ 							}
/* 000135 */ 						}
/* 000135 */ 					}
/* 000135 */ 					else {
/* 000135 */ 					}
/* 000135 */ 					return '#{}-{}'.format (self.environmentname, n);
/* 000135 */ 				}), counter_with_prefix: true, counter_prefix_variant: prefix_variant}));
/* 000135 */ 			}) ();
/* 000143 */ 			var counter_value = ref_instance.counter_value;
/* 000145 */ 			var title_heading_formatted_llm = ref_instance.formatted_ref_llm_text;
/* 000147 */ 			var target_id = '{}-{}'.format (self.environmentname, counter.value);
/* 000149 */ 			var title_heading_formatted_llm_frag = (function () {
/* 000149 */ 				var __accu0__ = render_context;
/* 000149 */ 				return __call__ (__accu0__.make_standalone_fragment, __accu0__, title_heading_formatted_llm, __kwargtrans__ ({what: 'Theorem heading'}));
/* 000149 */ 			}) ();
/* 000153 */ 			var title_heading_formatted_llm_frag_nodes = title_heading_formatted_llm_frag.nodes;
/* 000155 */ 			var __iterable0__ = llmarg_labels;
/* 000155 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000155 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000155 */ 				var ref_type = __left0__ [0];
/* 000155 */ 				var ref_label = __left0__ [1];
/* 000157 */ 				(function () {
/* 000157 */ 					var __accu0__ = refs_mgr;
/* 000157 */ 					return __call__ (__accu0__.register_reference, __accu0__, ref_type, ref_label, __kwargtrans__ ({node: node, formatted_ref_llm_text: title_heading_formatted_llm_frag, target_href: __add__ ('#', target_id), counter_value: counter.value, counter_formatter_id: counter.formatter.counter_formatter_id}));
/* 000157 */ 				}) ();
/* 000157 */ 			}
/* 000157 */ 		}
/* 000164 */ 		else {
/* 000168 */ 			var theorem_name = __getitem__ (__getitem__ (__getitem__ (self.theorem_spec, 'title'), 'capital'), 'singular');
/* 000170 */ 			var target_id = null;
/* 000171 */ 			var counter = null;
/* 000173 */ 			var title_heading_formatted_llm_frag_nodes = (function () {
/* 000173 */ 				var __accu0__ = node.latex_walker;
/* 000175 */ 				return __call__ (__accu0__.make_nodelist, __accu0__, [(function () {
/* 000175 */ 					var __accu1__ = node.latex_walker;
/* 000175 */ 					return __call__ (__accu1__.make_node, __accu1__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: theorem_name, pos: node.pos, pos_end: node.pos, parsing_state: node.parsing_state}));
/* 000175 */ 				}) ()], __kwargtrans__ ({parsing_state: node.parsing_state}));
/* 000175 */ 			}) ();
/* 000188 */ 			if (__t__ (__call__ (len, null, llmarg_labels))) {
/* 000189 */ 				var __except0__ = __call__ (LatexWalkerParseError, null, __add__ (__add__ ('You cannot use \\label{} in unnumbered theorem environment ‘', self.environmentname), '’'), __kwargtrans__ ({pos: node.pos}));
/* 000189 */ 				__except0__.__cause__ = null;
/* 000189 */ 				throw __except0__;
/* 000189 */ 			}
/* 000189 */ 		}
/* 000210 */ 		var thmtitle_nodelist = null;
/* 000211 */ 		if (__t__ (__getitem__ (llmarg_thmtitle, 'has_relation_ref'))) {
/* 000213 */ 			if (__t__ (__getitem__ (llmarg_thmtitle, 'relation_ref_show_ref'))) {
/* 000215 */ 				var __left0__ = __getitem__ (llmarg_thmtitle, 'relation_ref_target');
/* 000215 */ 				var ref_type = __left0__ [0];
/* 000215 */ 				var ref_label = __left0__ [1];
/* 000218 */ 				var thm_relation_ref_instance = (function () {
/* 000218 */ 					var __accu0__ = refs_mgr;
/* 000218 */ 					return __call__ (__accu0__.get_ref, __accu0__, ref_type, ref_label, node.latex_walker.resource_info);
/* 000218 */ 				}) ();
/* 000222 */ 				var thm_relation_ref_llm_text = thm_relation_ref_instance.formatted_ref_llm_text;
/* 000223 */ 				var thm_relation_ref_llm_frag = (function () {
/* 000223 */ 					var __accu0__ = render_context;
/* 000223 */ 					return __call__ (__accu0__.make_standalone_fragment, __accu0__, thm_relation_ref_llm_text, __kwargtrans__ ({what: 'Thm relation ref'}));
/* 000223 */ 				}) ();
/* 000227 */ 				var thmtitle_nodelist = thm_relation_ref_llm_frag.nodes;
/* 000227 */ 			}
/* 000227 */ 		}
/* 000229 */ 		else if (__t__ (__getitem__ (llmarg_thmtitle, 'nodelist') !== null)) {
/* 000231 */ 			var thmtitle_nodelist = __getitem__ (llmarg_thmtitle, 'nodelist');
/* 000231 */ 		}
/* 000234 */ 		if (__t__ (thmtitle_nodelist !== null)) {
/* 000236 */ 			var heading_nodelist = (function () {
/* 000236 */ 				var __accu0__ = node.latex_walker;
/* 000239 */ 				return __call__ (__accu0__.make_nodelist, __accu0__, __add__ (__add__ (__add__ (__call__ (list, null, title_heading_formatted_llm_frag_nodes), [(function () {
/* 000239 */ 					var __accu1__ = node.latex_walker;
/* 000239 */ 					return __call__ (__accu1__.make_node, __accu1__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: __getitem__ (self.theorem_type_spec, 'heading_title_pre'), pos: node.pos, pos_end: node.pos, parsing_state: node.parsing_state}));
/* 000247 */ 				}) ()]), __call__ (list, null, thmtitle_nodelist)), [(function () {
/* 000247 */ 					var __accu1__ = node.latex_walker;
/* 000247 */ 					return __call__ (__accu1__.make_node, __accu1__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: __getitem__ (self.theorem_type_spec, 'heading_title_post'), pos: node.pos, pos_end: node.pos, parsing_state: node.parsing_state}));
/* 000247 */ 				}) ()]), __kwargtrans__ ({parsing_state: node.parsing_state, pos: node.pos}));
/* 000247 */ 			}) ();
/* 000247 */ 		}
/* 000257 */ 		else {
/* 000261 */ 			var heading_nodelist = title_heading_formatted_llm_frag_nodes;
/* 000261 */ 		}
/* 000266 */ 		var heading_node = __call__ (make_invocable_node_instance, null, latexnodes_nodes.LatexMacroNode, __kwargtrans__ ({llm_spec: (function () {
/* 000266 */ 			var __accu0__ = headings;
/* 000266 */ 			return __call__ (__accu0__.HeadingMacro, __accu0__, __kwargtrans__ ({macroname: null, heading_level: __getitem__ (self.theorem_type_spec, 'theorem_heading_level'), inline_heading: true}));
/* 000266 */ 		}) (), args: dict ({'text': heading_nodelist}), latex_walker: node.latex_walker, parsing_state: node.parsing_state}));
/* 000278 */ 		heading_node.llm_heading_target_id = target_id;
/* 000294 */ 		var final_content_node = (function () {
/* 000294 */ 			var __accu0__ = node.latex_walker;
/* 000294 */ 			return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: __getitem__ (self.theorem_type_spec, 'body_final_content'), pos: node.pos, pos_end: node.pos, parsing_state: node.parsing_state}));
/* 000294 */ 		}) ();
/* 000301 */ 		final_content_node.llm_strip_preceding_whitespace = true;
/* 000304 */ 		if (__t__ (__getitem__ (self.theorem_type_spec, 'body_final_content'))) {
/* 000309 */ 			var body_nodelist = __add__ (__add__ ([heading_node], __call__ (list, null, node.nodelist)), [final_content_node]);
/* 000309 */ 		}
/* 000312 */ 		else {
/* 000319 */ 			var body_nodelist = __add__ ([heading_node], __call__ (list, null, node.nodelist));
/* 000319 */ 		}
/* 000322 */ 		var body_nodelist = (function () {
/* 000322 */ 			var __accu0__ = node.latex_walker;
/* 000322 */ 			return __call__ (__accu0__.make_nodelist, __accu0__, body_nodelist, __kwargtrans__ ({parsing_state: node.parsing_state}));
/* 000322 */ 		}) ();
/* 000335 */ 		var rendered_contents = (function () {
/* 000335 */ 			var __accu0__ = fragment_renderer;
/* 000335 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, body_nodelist, render_context);
/* 000335 */ 		}) ();
/* 000340 */ 		return (function () {
/* 000340 */ 			var __accu0__ = fragment_renderer;
/* 000340 */ 			return __call__ (__accu0__.render_semantic_block, __accu0__, rendered_contents, __getitem__ (self.theorem_spec, 'theorem_type'), render_context, __kwargtrans__ ({annotations: [self.environmentname]}));
/* 000340 */ 		}) ();
/* 000340 */ 	});}
/* 000340 */ });
/* 000350 */ export var _default_theorem_environments_simpleset = dict ({'theoremlike': dict ({'theorem': dict ({'title': dict ({'lowercase': 'theorem', 'abbreviated': dict ({'singular': 'Thm.', 'plural': 'Thms.'})})}), 'proposition': dict ({'title': dict ({'lowercase': 'proposition', 'abbreviated': dict ({'singular': 'Prop.', 'plural': 'Props.'})})}), 'lemma': dict ({'title': dict ({'lowercase': 'lemma', 'abbreviated': dict ({'singular': 'Lem.', 'plural': 'Lems.'})})}), 'corollary': dict ({'title': dict ({'lowercase': 'corollary', 'abbreviated': dict ({'singular': 'Cor.', 'plural': 'Cors.'})})})}), 'definitionlike': dict ({'definition': dict ({'title': dict ({'lowercase': 'definition', 'abbreviated': dict ({'singular': 'Def.', 'plural': 'Defs.'})})})}), 'prooflike': dict ({'proof': dict ({'title': dict ({'lowercase': 'proof', 'abbreviated': dict ({'singular': 'Proof', 'plural': 'Proofs'})})})})});
/* 000445 */ export var _default_theorem_environments_defaultset = dict ({'theoremlike': __call__ (dict, null, __getitem__ (_default_theorem_environments_simpleset, 'theoremlike'), __kwargtrans__ (dict ({'conjecture': dict ({'title': dict ({'lowercase': 'conjecture', 'abbreviated': dict ({'singular': 'Conj.', 'plural': 'Conjs.'})})})}))), 'definitionlike': __call__ (dict, null, __getitem__ (_default_theorem_environments_simpleset, 'definitionlike'), __kwargtrans__ (dict ({'remark': dict ({'title': dict ({'lowercase': 'remark', 'abbreviated': dict ({'singular': 'Rem.', 'plural': 'Rems.'})})})}))), 'prooflike': __call__ (dict, null, __getitem__ (_default_theorem_environments_simpleset, 'prooflike'))});
/* 000497 */ export var _default_theorem_environments_richset = dict ({'theoremlike': __call__ (dict, null, __getitem__ (_default_theorem_environments_defaultset, 'theoremlike')), 'definitionlike': __call__ (dict, null, __getitem__ (_default_theorem_environments_defaultset, 'definitionlike'), __kwargtrans__ (dict ({'idea': dict ({'title': dict ({'lowercase': 'idea', 'abbreviated': dict ({'singular': 'Idea', 'plural': 'Ideas'})})}), 'question': dict ({'title': dict ({'lowercase': 'question', 'abbreviated': dict ({'singular': 'Qtn.', 'plural': 'Qtns.'})})}), 'claim': dict ({'title': dict ({'lowercase': 'claim', 'abbreviated': dict ({'singular': 'Clm.', 'plural': 'Clms.'})})}), 'observation': dict ({'title': dict ({'lowercase': 'observation', 'abbreviated': dict ({'singular': 'Obs.', 'plural': 'Obs.'})})}), 'problem': dict ({'title': dict ({'lowercase': 'problem', 'abbreviated': dict ({'singular': 'Prob.', 'plural': 'Probs.'})})})}))), 'prooflike': __call__ (dict, null, __getitem__ (_default_theorem_environments_defaultset, 'prooflike'))});
/* 000501 */ export var default_theorem_environments = dict ({'simpleset': _default_theorem_environments_simpleset, 'defaultset': _default_theorem_environments_defaultset, 'richset': _default_theorem_environments_richset});
/* 000507 */ export var default_theorem_theorem_types = dict ({'theoremlike': dict ({'numbered': true, 'shared_numbering': true, 'counter_formatter': null, 'theorem_heading_level': 'theorem', 'heading_title_pre': ' (', 'heading_title_post': ')', 'title_enable_relation_ref': false, 'body_final_content': ''}), 'definitionlike': dict ({'numbered': true, 'shared_numbering': true, 'counter_formatter': null, 'theorem_heading_level': 'theorem', 'heading_title_pre': ' (', 'heading_title_post': ')', 'title_enable_relation_ref': false}), 'prooflike': dict ({'numbered': false, 'title_enable_relation_ref': true, 'body_final_content': '\xa0□'})});
/* 000539 */ export var default_thm_shared_counter_formatter_spec = dict ({'format_num': 'arabic', 'delimiters': tuple (['', '']), 'join_spec': 'default'});
/* 000546 */ export var default_allowed_ref_label_prefixes = ['thm', 'prop', 'cor', 'lem', 'rem', 'def', 'dfn', 'x', 'topic'];
/* 000553 */ export var FeatureTheorems =  __class__ ('FeatureTheorems', [Feature], {
/* 000553 */ 	__module__: __name__,
/* 000555 */ 	feature_name: 'theorems',
/* 000557 */ 	feature_dependencies: ['refs'],
/* 000567 */ 	feature_default_config: dict ({'environments': __getitem__ (default_theorem_environments, 'defaultset'), 'theorem_types': default_theorem_theorem_types, 'shared_counter_formatter': 'arabic', 'allowed_ref_label_prefixes': default_allowed_ref_label_prefixes}),
/* 000567 */ 	RenderManager: __class__ ('RenderManager', [Feature.RenderManager], {
/* 000567 */ 		__module__: __name__,
/* 000569 */ 		get initialize () {return __get__ (this, function (self) {
/* 000569 */ 			if (arguments.length) {
/* 000569 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000569 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000569 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000569 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000569 */ 						switch (__attrib0__) {
/* 000569 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000569 */ 						}
/* 000569 */ 					}
/* 000569 */ 				}
/* 000569 */ 			}
/* 000569 */ 			else {
/* 000569 */ 			}
/* 000570 */ 			self.shared_counter = __call__ (Counter, null, self.feature.shared_counter_formatter);
/* 000572 */ 			var refs_mgr = (function () {
/* 000572 */ 				var __accu0__ = self.render_context;
/* 000572 */ 				return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000572 */ 			}) ();
/* 000574 */ 			self.counters = dict ({});
/* 000575 */ 			var __iterable0__ = (function () {
/* 000575 */ 				var __accu0__ = self.feature.thm_counter_formatters;
/* 000575 */ 				return __call__ (__accu0__.py_items, __accu0__);
/* 000575 */ 			}) ();
/* 000575 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000575 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000575 */ 				var env_name = __left0__ [0];
/* 000575 */ 				var counter_formatter = __left0__ [1];
/* 000576 */ 				var thm_spec = __getitem__ (self.feature.environments, env_name);
/* 000577 */ 				var thm_type_spec = __getitem__ (self.feature.theorem_types, __getitem__ (thm_spec, 'theorem_type'));
/* 000578 */ 				if (__t__ (__getitem__ (thm_type_spec, 'shared_numbering'))) {
/* 000579 */ 					__setitem__ (self.counters, env_name, __call__ (CounterAlias, null, __kwargtrans__ ({counter_formatter: counter_formatter, alias_counter: self.shared_counter})));
/* 000579 */ 				}
/* 000582 */ 				else {
/* 000584 */ 					__setitem__ (self.counters, env_name, __call__ (Counter, null, __kwargtrans__ ({counter_formatter: counter_formatter})));
/* 000584 */ 				}
/* 000589 */ 				(function () {
/* 000589 */ 					var __accu0__ = refs_mgr;
/* 000589 */ 					return __call__ (__accu0__.register_counter_formatter, __accu0__, __kwargtrans__ ({counter_formatter: counter_formatter}));
/* 000589 */ 				}) ();
/* 000589 */ 			}
/* 000589 */ 		});}
/* 000589 */ 	}),
/* 000594 */ 	get __init__ () {return __get__ (this, function (self, environments, theorem_types, shared_counter_formatter, allowed_ref_label_prefixes) {
/* 000594 */ 		if (typeof environments == 'undefined' || (environments != null && environments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000594 */ 			var environments = null;
/* 000594 */ 		};
/* 000594 */ 		if (typeof theorem_types == 'undefined' || (theorem_types != null && theorem_types.hasOwnProperty ("__kwargtrans__"))) {;
/* 000594 */ 			var theorem_types = null;
/* 000594 */ 		};
/* 000594 */ 		if (typeof shared_counter_formatter == 'undefined' || (shared_counter_formatter != null && shared_counter_formatter.hasOwnProperty ("__kwargtrans__"))) {;
/* 000594 */ 			var shared_counter_formatter = null;
/* 000594 */ 		};
/* 000594 */ 		if (typeof allowed_ref_label_prefixes == 'undefined' || (allowed_ref_label_prefixes != null && allowed_ref_label_prefixes.hasOwnProperty ("__kwargtrans__"))) {;
/* 000594 */ 			var allowed_ref_label_prefixes = null;
/* 000594 */ 		};
/* 000594 */ 		if (arguments.length) {
/* 000594 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000594 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000594 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000594 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000594 */ 					switch (__attrib0__) {
/* 000594 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000594 */ 						case 'environments': var environments = __allkwargs0__ [__attrib0__]; break;
/* 000594 */ 						case 'theorem_types': var theorem_types = __allkwargs0__ [__attrib0__]; break;
/* 000594 */ 						case 'shared_counter_formatter': var shared_counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000594 */ 						case 'allowed_ref_label_prefixes': var allowed_ref_label_prefixes = __allkwargs0__ [__attrib0__]; break;
/* 000594 */ 					}
/* 000594 */ 				}
/* 000594 */ 			}
/* 000594 */ 		}
/* 000594 */ 		else {
/* 000594 */ 		}
/* 000599 */ 		__call__ (__call__ (__super__, null, FeatureTheorems, '__init__'), null, self);
/* 000600 */ 		if (__t__ (environments === null)) {
/* 000601 */ 			var environments = __getitem__ (default_theorem_environments, 'defaultset');
/* 000601 */ 		}
/* 000602 */ 		if (__t__ (__call__ (isinstance, null, environments, str))) {
/* 000603 */ 			var environments = __getitem__ (default_theorem_environments, environments);
/* 000603 */ 		}
/* 000605 */ 		if (__t__ (theorem_types === null)) {
/* 000606 */ 			var theorem_types = default_theorem_theorem_types;
/* 000606 */ 		}
/* 000610 */ 		self.theorem_types = (function () {
/* 000610 */ 			var __accu0__ = [];
/* 000612 */ 			var __iterable0__ = (function () {
/* 000612 */ 				var __accu1__ = __call__ (dict, null, theorem_types);
/* 000612 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000612 */ 			}) ();
/* 000612 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000612 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000612 */ 				var thm_type = __left0__ [0];
/* 000612 */ 				var thm_type_spec = __left0__ [1];
/* 000612 */ 				if (__t__ (thm_type_spec !== null)) {
/* 000613 */ 					(function () {
/* 000613 */ 						var __accu1__ = __accu0__;
/* 000611 */ 						return __call__ (__accu1__.append, __accu1__, [thm_type, (function () {
/* 000611 */ 							var __accu2__ = self;
/* 000611 */ 							return __call__ (__accu2__._standardize_type_spec, __accu2__, thm_type, thm_type_spec);
/* 000611 */ 						}) ()]);
/* 000611 */ 					}) ();
/* 000611 */ 				}
/* 000611 */ 			}
/* 000611 */ 			return dict (__accu0__);
/* 000611 */ 		}) ();
/* 000618 */ 		self.environments = dict ({});
/* 000619 */ 		var __iterable0__ = (function () {
/* 000619 */ 			var __accu0__ = environments;
/* 000619 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000619 */ 		}) ();
/* 000619 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000619 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000619 */ 			var thm_type = __left0__ [0];
/* 000619 */ 			var env_list = __left0__ [1];
/* 000620 */ 			var __iterable1__ = (function () {
/* 000620 */ 				var __accu0__ = env_list;
/* 000620 */ 				return __call__ (__accu0__.py_items, __accu0__);
/* 000620 */ 			}) ();
/* 000620 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000620 */ 				var __left0__ = __getitem__ (__iterable1__, __index1__);
/* 000620 */ 				var env_name = __left0__ [0];
/* 000620 */ 				var thm_spec = __left0__ [1];
/* 000621 */ 				if (__t__ (__in__ ('env_name', self.environments))) {
/* 000622 */ 					var __except0__ = __call__ (ValueError, null, 'Duplicate definition of theorem environment ‘{}’'.format (env_name));
/* 000622 */ 					__except0__.__cause__ = null;
/* 000622 */ 					throw __except0__;
/* 000622 */ 				}
/* 000626 */ 				__setitem__ (self.environments, env_name, (function () {
/* 000626 */ 					var __accu0__ = self;
/* 000626 */ 					return __call__ (__accu0__._standardize_thm_spec, __accu0__, thm_type, env_name, thm_spec);
/* 000626 */ 				}) ());
/* 000626 */ 			}
/* 000626 */ 		}
/* 000630 */ 		self.shared_counter_formatter = __call__ (build_counter_formatter, null, shared_counter_formatter, default_thm_shared_counter_formatter_spec, __kwargtrans__ ({counter_formatter_id: '_theorems_shared'}));
/* 000636 */ 		var use_default_counter_formatter_spec = (function () {
/* 000636 */ 			var __accu0__ = self.shared_counter_formatter;
/* 000636 */ 			return __call__ (__accu0__.asdict, __accu0__);
/* 000636 */ 		}) ();
/* 000638 */ 		self.thm_counter_formatters = dict ({});
/* 000639 */ 		var __iterable0__ = (function () {
/* 000639 */ 			var __accu0__ = self.environments;
/* 000639 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000639 */ 		}) ();
/* 000639 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000639 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000639 */ 			var env_name = __left0__ [0];
/* 000639 */ 			var thm_spec = __left0__ [1];
/* 000640 */ 			var thm_type_spec = __getitem__ (self.theorem_types, __getitem__ (thm_spec, 'theorem_type'));
/* 000641 */ 			if (__t__ (!__t__ ((__getitem__ (thm_type_spec, 'numbered'))))) {
/* 000641 */ 				continue;
/* 000641 */ 			}
/* 000645 */ 			var counter_formatter_spec = (function () {
/* 000645 */ 				var __accu0__ = thm_type_spec;
/* 000645 */ 				return __call__ (__accu0__.py_get, __accu0__, 'counter_formatter', null);
/* 000645 */ 			}) ();
/* 000646 */ 			if (__t__ (counter_formatter_spec === null)) {
/* 000647 */ 				var counter_formatter_spec = dict ({});
/* 000647 */ 			}
/* 000648 */ 			else if (__t__ (__call__ (isinstance, null, counter_formatter_spec, str))) {
/* 000649 */ 				var counter_formatter_spec = dict ({'format_num': counter_formatter_spec});
/* 000649 */ 			}
/* 000650 */ 			else {
/* 000651 */ 				var counter_formatter_spec = __call__ (dict, null, counter_formatter_spec);
/* 000651 */ 			}
/* 000657 */ 			__setitem__ (counter_formatter_spec, 'prefix_display', (function () {
/* 000657 */ 				var __accu0__ = self;
/* 000657 */ 				return __call__ (__accu0__._make_counter_formatter_prefix_for_thm, __accu0__, env_name, thm_spec);
/* 000657 */ 			}) ());
/* 000661 */ 			__setitem__ (self.thm_counter_formatters, env_name, __call__ (build_counter_formatter, null, counter_formatter_spec, use_default_counter_formatter_spec, __kwargtrans__ ({counter_formatter_id: env_name})));
/* 000661 */ 		}
/* 000667 */ 		self.allowed_ref_label_prefixes = __call__ (list, null, (__t__ (allowed_ref_label_prefixes !== null) ? allowed_ref_label_prefixes : default_allowed_ref_label_prefixes));
/* 000667 */ 	});},
/* 000674 */ 	get _standardize_type_spec () {return __get__ (this, function (self, thm_type, thm_type_spec) {
/* 000674 */ 		if (arguments.length) {
/* 000674 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000674 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000674 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000674 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000674 */ 					switch (__attrib0__) {
/* 000674 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000674 */ 						case 'thm_type': var thm_type = __allkwargs0__ [__attrib0__]; break;
/* 000674 */ 						case 'thm_type_spec': var thm_type_spec = __allkwargs0__ [__attrib0__]; break;
/* 000674 */ 					}
/* 000674 */ 				}
/* 000674 */ 			}
/* 000674 */ 		}
/* 000674 */ 		else {
/* 000674 */ 		}
/* 000676 */ 		var spec = __call__ (dict, null, __getitem__ (default_theorem_theorem_types, 'theoremlike'));
/* 000677 */ 		(function () {
/* 000677 */ 			var __accu0__ = spec;
/* 000677 */ 			return __call__ (__accu0__.py_update, __accu0__, thm_type_spec);
/* 000677 */ 		}) ();
/* 000678 */ 		return spec;
/* 000678 */ 	});},
/* 000680 */ 	get _standardize_thm_spec () {return __get__ (this, function (self, thm_type, env_name, thm_spec) {
/* 000680 */ 		if (arguments.length) {
/* 000680 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000680 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000680 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000680 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000680 */ 					switch (__attrib0__) {
/* 000680 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000680 */ 						case 'thm_type': var thm_type = __allkwargs0__ [__attrib0__]; break;
/* 000680 */ 						case 'env_name': var env_name = __allkwargs0__ [__attrib0__]; break;
/* 000680 */ 						case 'thm_spec': var thm_spec = __allkwargs0__ [__attrib0__]; break;
/* 000680 */ 					}
/* 000680 */ 				}
/* 000680 */ 			}
/* 000680 */ 		}
/* 000680 */ 		else {
/* 000680 */ 		}
/* 000681 */ 		if (__t__ (thm_spec === true)) {
/* 000682 */ 			var thm_spec = env_name;
/* 000682 */ 		}
/* 000683 */ 		if (__t__ (__call__ (isinstance, null, thm_spec, str))) {
/* 000684 */ 			var thm_spec = dict ({'title': thm_spec});
/* 000684 */ 		}
/* 000685 */ 		else {
/* 000686 */ 			var thm_spec = __call__ (dict, null, thm_spec);
/* 000686 */ 		}
/* 000688 */ 		__setitem__ (thm_spec, 'theorem_type', thm_type);
/* 000691 */ 		var new_title_spec = dict ({});
/* 000692 */ 		var title = (function () {
/* 000692 */ 			var __accu0__ = thm_spec;
/* 000692 */ 			return __call__ (__accu0__.py_get, __accu0__, 'title', null);
/* 000692 */ 		}) ();
/* 000693 */ 		if (__t__ (title === null)) {
/* 000694 */ 			var title = env_name;
/* 000694 */ 		}
/* 000695 */ 		if (__t__ (__call__ (isinstance, null, title, str))) {
/* 000696 */ 			var title = dict ({'lowercase': dict ({'singular': title, 'plural': __add__ (title, 's')})});
/* 000696 */ 		}
/* 000699 */ 		if (__t__ (__in__ ('lowercase', title))) {
/* 000700 */ 			var lowercase = __getitem__ (title, 'lowercase');
/* 000701 */ 			if (__t__ (__call__ (isinstance, null, lowercase, str))) {
/* 000702 */ 				__setitem__ (new_title_spec, 'lowercase', dict ({'singular': lowercase, 'plural': __add__ (lowercase, 's')}));
/* 000702 */ 			}
/* 000705 */ 			else {
/* 000707 */ 				__setitem__ (new_title_spec, 'lowercase', lowercase);
/* 000707 */ 			}
/* 000707 */ 		}
/* 000708 */ 		else {
/* 000710 */ 			__setitem__ (new_title_spec, 'lowercase', dict ({'singular': '??', 'singular': '???'}));
/* 000710 */ 		}
/* 000712 */ 		if (__t__ (__in__ ('capital', title))) {
/* 000713 */ 			var capital = __getitem__ (title, 'capital');
/* 000714 */ 			if (__t__ (__call__ (isinstance, null, capital, str))) {
/* 000715 */ 				__setitem__ (new_title_spec, 'capital', dict ({'singular': capital, 'plural': __add__ (capital, 's')}));
/* 000715 */ 			}
/* 000718 */ 			else {
/* 000720 */ 				__setitem__ (new_title_spec, 'capital', capital);
/* 000720 */ 			}
/* 000720 */ 		}
/* 000721 */ 		else {
/* 000724 */ 			__setitem__ (new_title_spec, 'capital', dict ({'singular': (function () {
/* 000724 */ 				var __accu0__ = __getitem__ (__getitem__ (new_title_spec, 'lowercase'), 'singular');
/* 000724 */ 				return __call__ (__accu0__.capitalize, __accu0__);
/* 000725 */ 			}) (), 'plural': (function () {
/* 000725 */ 				var __accu0__ = __getitem__ (__getitem__ (new_title_spec, 'lowercase'), 'plural');
/* 000725 */ 				return __call__ (__accu0__.capitalize, __accu0__);
/* 000725 */ 			}) ()}));
/* 000725 */ 		}
/* 000728 */ 		if (__t__ (__in__ ('abbreviated', title))) {
/* 000729 */ 			var abbreviated = __getitem__ (title, 'abbreviated');
/* 000730 */ 			if (__t__ (__call__ (isinstance, null, abbreviated, str))) {
/* 000731 */ 				__setitem__ (new_title_spec, 'abbreviated', dict ({'singular': abbreviated, 'plural': __add__ (abbreviated, 's')}));
/* 000731 */ 			}
/* 000734 */ 			else {
/* 000736 */ 				__setitem__ (new_title_spec, 'abbreviated', abbreviated);
/* 000736 */ 			}
/* 000736 */ 		}
/* 000737 */ 		else {
/* 000741 */ 			__setitem__ (new_title_spec, 'abbreviated', dict ({'singular': __add__ (__getslice__ (__getitem__ (__getitem__ (new_title_spec, 'capital'), 'singular'), 0, 3, 1), '.'), 'plural': __add__ ((function () {
/* 000741 */ 				var __accu0__ = __getslice__ (__getitem__ (__getitem__ (new_title_spec, 'capital'), 'plural'), 0, 3, 1);
/* 000741 */ 				return __call__ (__accu0__.rstrip, __accu0__, 's');
/* 000741 */ 			}) (), 's.')}));
/* 000741 */ 		}
/* 000744 */ 		__setitem__ (thm_spec, 'title', new_title_spec);
/* 000746 */ 		return thm_spec;
/* 000746 */ 	});},
/* 000749 */ 	get _make_counter_formatter_prefix_for_thm () {return __get__ (this, function (self, env_name, thm_spec) {
/* 000749 */ 		if (arguments.length) {
/* 000749 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000749 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000749 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000749 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000749 */ 					switch (__attrib0__) {
/* 000749 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000749 */ 						case 'env_name': var env_name = __allkwargs0__ [__attrib0__]; break;
/* 000749 */ 						case 'thm_spec': var thm_spec = __allkwargs0__ [__attrib0__]; break;
/* 000749 */ 					}
/* 000749 */ 				}
/* 000749 */ 			}
/* 000749 */ 		}
/* 000749 */ 		else {
/* 000749 */ 		}
/* 000750 */ 		var prefix = dict ({});
/* 000752 */ 		var _add_space_values = function (x) {
/* 000752 */ 			if (arguments.length) {
/* 000752 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000752 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000752 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000752 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000752 */ 						switch (__attrib0__) {
/* 000752 */ 							case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000752 */ 						}
/* 000752 */ 					}
/* 000752 */ 				}
/* 000752 */ 			}
/* 000752 */ 			else {
/* 000752 */ 			}
/* 000753 */ 			return (function () {
/* 000753 */ 				var __accu0__ = [];
/* 000753 */ 				var __iterable0__ = (function () {
/* 000753 */ 					var __accu1__ = x;
/* 000753 */ 					return __call__ (__accu1__.py_items, __accu1__);
/* 000753 */ 				}) ();
/* 000753 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000753 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000753 */ 					var k = __left0__ [0];
/* 000753 */ 					var v = __left0__ [1];
/* 000753 */ 					(function () {
/* 000753 */ 						var __accu1__ = __accu0__;
/* 000753 */ 						return __call__ (__accu1__.append, __accu1__, [k, __add__ (v, '~')]);
/* 000753 */ 					}) ();
/* 000753 */ 				}
/* 000753 */ 				return dict (__accu0__);
/* 000753 */ 			}) ();
/* 000753 */ 		};
/* 000755 */ 		__setitem__ (prefix, 'lowercase', __call__ (_add_space_values, null, __getitem__ (__getitem__ (thm_spec, 'title'), 'lowercase')));
/* 000756 */ 		__setitem__ (prefix, 'capital', __call__ (_add_space_values, null, __getitem__ (__getitem__ (thm_spec, 'title'), 'capital')));
/* 000757 */ 		__setitem__ (prefix, 'abbreviated', __call__ (_add_space_values, null, __getitem__ (__getitem__ (thm_spec, 'title'), 'abbreviated')));
/* 000759 */ 		(function () {
/* 000759 */ 			var __accu0__ = prefix;
/* 000759 */ 			return __call__ (__accu0__.py_update, __accu0__, __getitem__ (prefix, 'capital'));
/* 000759 */ 		}) ();
/* 000761 */ 		return prefix;
/* 000761 */ 	});},
/* 000764 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000764 */ 		if (arguments.length) {
/* 000764 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000764 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000764 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000764 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000764 */ 					switch (__attrib0__) {
/* 000764 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000764 */ 					}
/* 000764 */ 				}
/* 000764 */ 			}
/* 000764 */ 		}
/* 000764 */ 		else {
/* 000764 */ 		}
/* 000766 */ 		var environment_specs = [];
/* 000768 */ 		var __iterable0__ = (function () {
/* 000768 */ 			var __accu0__ = self.environments;
/* 000768 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000768 */ 		}) ();
/* 000768 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000768 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000768 */ 			var env_name = __left0__ [0];
/* 000768 */ 			var thm_spec = __left0__ [1];
/* 000769 */ 			(function () {
/* 000769 */ 				var __accu0__ = environment_specs;
/* 000769 */ 				return __call__ (__accu0__.append, __accu0__, __call__ (TheoremEnvironment, null, __kwargtrans__ ({environmentname: env_name, theorem_spec: thm_spec, theorem_type_spec: __getitem__ (self.theorem_types, __getitem__ (thm_spec, 'theorem_type')), allowed_ref_label_prefixes: self.allowed_ref_label_prefixes})));
/* 000769 */ 			}) ();
/* 000769 */ 		}
/* 000776 */ 		return dict ({'environments': environment_specs});
/* 000776 */ 	});}
/* 000776 */ });
/* 000783 */ export var FeatureClass = FeatureTheorems;
/* 000007 */ 
//# sourceMappingURL=llm.feature.theorems.map