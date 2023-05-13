/* 000001 */ // Transcrypt'ed from Python, 2023-05-13 11:42:38
/* 000007 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000018 */ import * as headings from './flm.feature.headings.js';
/* 000017 */ import {Feature} from './flm.feature._base.js';
/* 000015 */ import {Counter, CounterAlias, build_counter_formatter} from './flm.counter.js';
/* 000012 */ import * as flmspecinfo from './flm.flmspecinfo.js';
/* 000011 */ import {FLMArgumentSpec, make_invocable_node_instance} from './flm.flmenvironment.js';
/* 000009 */ import * as macrospec from './pylatexenc.macrospec.js';
/* 000008 */ import * as latexnodes_nodes from './pylatexenc.latexnodes.nodes.js';
/* 000007 */ import {ParsedArgumentsInfo, ParsingStateDelta} from './pylatexenc.latexnodes.js';
/* 000007 */ export {build_counter_formatter, headings, ParsedArgumentsInfo, Counter, latexnodes_nodes, flmspecinfo, make_invocable_node_instance, ParsingStateDelta, Feature, FLMArgumentSpec, macrospec, CounterAlias};
/* 000001 */ var __name__ = 'flm.feature.theorems';
/* 000024 */ export var optional_text_arg = __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: '[', argname: 'thmtitle', flm_doc: 'An optional theorem environment title'}));
/* 000032 */ export var TheoremEnvironment =  __class__ ('TheoremEnvironment', [flmspecinfo.FLMEnvironmentSpecBase], {
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
/* 000040 */ 		__call__ (__call__ (__super__, null, TheoremEnvironment, '__init__'), null, self, environmentname, __kwargtrans__ ({arguments_spec_list: [optional_text_arg, flmspecinfo.label_arg]}));
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
/* 000086 */ 						var __except0__ = __call__ (LatexWalkerLocatedError, null, 'When specifying a proof-ref target as optional argument (‘[*thm:xyz]’), the entire argument must consist of regular characters with no special meaning in FLM.  Got: ‘{}’'.format ((function () {
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
/* 000102 */ 		node.flmarg_thmtitle = dict ({'nodelist': thmtitle_nodelist, 'has_relation_ref': (__t__ (relation_ref_target !== null) ? true : false), 'relation_ref_target': relation_ref_target, 'relation_ref_show_ref': relation_ref_show_ref});
/* 000109 */ 		node.flmarg_labels = (function () {
/* 000109 */ 			var __accu0__ = flmspecinfo;
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
/* 000125 */ 		var flmarg_thmtitle = node.flmarg_thmtitle;
/* 000126 */ 		var flmarg_labels = node.flmarg_labels;
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
/* 000145 */ 			var title_heading_formatted_flm = ref_instance.formatted_ref_flm_text;
/* 000147 */ 			var target_id = '{}-{}'.format (self.environmentname, counter_value);
/* 000149 */ 			var title_heading_formatted_flm_frag = (function () {
/* 000149 */ 				var __accu0__ = render_context;
/* 000149 */ 				return __call__ (__accu0__.make_standalone_fragment, __accu0__, title_heading_formatted_flm, __kwargtrans__ ({what: 'Theorem heading'}));
/* 000149 */ 			}) ();
/* 000153 */ 			var title_heading_formatted_flm_frag_nodes = title_heading_formatted_flm_frag.nodes;
/* 000155 */ 			var __iterable0__ = flmarg_labels;
/* 000155 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000155 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000155 */ 				var ref_type = __left0__ [0];
/* 000155 */ 				var ref_label = __left0__ [1];
/* 000157 */ 				(function () {
/* 000157 */ 					var __accu0__ = refs_mgr;
/* 000157 */ 					return __call__ (__accu0__.register_reference, __accu0__, ref_type, ref_label, __kwargtrans__ ({node: node, formatted_ref_flm_text: title_heading_formatted_flm_frag, target_href: __add__ ('#', target_id), counter_value: counter_value, counter_formatter_id: counter.formatter.counter_formatter_id}));
/* 000157 */ 				}) ();
/* 000157 */ 			}
/* 000157 */ 		}
/* 000164 */ 		else {
/* 000168 */ 			var theorem_name = __getitem__ (__getitem__ (__getitem__ (self.theorem_spec, 'title'), 'capital'), 'singular');
/* 000170 */ 			var target_id = null;
/* 000173 */ 			var title_heading_formatted_flm_frag_nodes = (function () {
/* 000173 */ 				var __accu0__ = node.latex_walker;
/* 000175 */ 				return __call__ (__accu0__.make_nodelist, __accu0__, [(function () {
/* 000175 */ 					var __accu1__ = node.latex_walker;
/* 000175 */ 					return __call__ (__accu1__.make_node, __accu1__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: theorem_name, pos: node.pos, pos_end: node.pos, parsing_state: node.parsing_state}));
/* 000175 */ 				}) ()], __kwargtrans__ ({parsing_state: node.parsing_state}));
/* 000175 */ 			}) ();
/* 000188 */ 			if (__t__ (__call__ (len, null, flmarg_labels))) {
/* 000189 */ 				var __except0__ = __call__ (LatexWalkerLocatedError, null, __add__ (__add__ ('You cannot use \\label{} in unnumbered theorem environment ‘', self.environmentname), '’'), __kwargtrans__ ({pos: node.pos}));
/* 000189 */ 				__except0__.__cause__ = null;
/* 000189 */ 				throw __except0__;
/* 000189 */ 			}
/* 000189 */ 		}
/* 000210 */ 		var thmtitle_nodelist = null;
/* 000211 */ 		if (__t__ (__getitem__ (flmarg_thmtitle, 'has_relation_ref'))) {
/* 000213 */ 			if (__t__ (__getitem__ (flmarg_thmtitle, 'relation_ref_show_ref'))) {
/* 000215 */ 				var __left0__ = __getitem__ (flmarg_thmtitle, 'relation_ref_target');
/* 000215 */ 				var ref_type = __left0__ [0];
/* 000215 */ 				var ref_label = __left0__ [1];
/* 000218 */ 				var thm_relation_ref_instance = (function () {
/* 000218 */ 					var __accu0__ = refs_mgr;
/* 000218 */ 					return __call__ (__accu0__.get_ref, __accu0__, ref_type, ref_label, node.latex_walker.resource_info);
/* 000218 */ 				}) ();
/* 000222 */ 				var thm_relation_ref_flm_text = thm_relation_ref_instance.formatted_ref_flm_text;
/* 000223 */ 				var thm_relation_ref_flm_frag = (function () {
/* 000223 */ 					var __accu0__ = render_context;
/* 000223 */ 					return __call__ (__accu0__.make_standalone_fragment, __accu0__, thm_relation_ref_flm_text, __kwargtrans__ ({what: 'Thm relation ref'}));
/* 000223 */ 				}) ();
/* 000227 */ 				var thmtitle_nodelist = thm_relation_ref_flm_frag.nodes;
/* 000227 */ 			}
/* 000227 */ 		}
/* 000229 */ 		else if (__t__ (__getitem__ (flmarg_thmtitle, 'nodelist') !== null)) {
/* 000231 */ 			var thmtitle_nodelist = __getitem__ (flmarg_thmtitle, 'nodelist');
/* 000231 */ 		}
/* 000234 */ 		if (__t__ (thmtitle_nodelist !== null)) {
/* 000236 */ 			var heading_nodelist = (function () {
/* 000236 */ 				var __accu0__ = node.latex_walker;
/* 000239 */ 				return __call__ (__accu0__.make_nodelist, __accu0__, __add__ (__add__ (__add__ (__call__ (list, null, title_heading_formatted_flm_frag_nodes), [(function () {
/* 000239 */ 					var __accu1__ = node.latex_walker;
/* 000239 */ 					return __call__ (__accu1__.make_node, __accu1__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: __getitem__ (self.theorem_type_spec, 'heading_title_pre'), pos: node.pos, pos_end: node.pos, parsing_state: node.parsing_state}));
/* 000247 */ 				}) ()]), __call__ (list, null, thmtitle_nodelist)), [(function () {
/* 000247 */ 					var __accu1__ = node.latex_walker;
/* 000247 */ 					return __call__ (__accu1__.make_node, __accu1__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: __getitem__ (self.theorem_type_spec, 'heading_title_post'), pos: node.pos, pos_end: node.pos, parsing_state: node.parsing_state}));
/* 000247 */ 				}) ()]), __kwargtrans__ ({parsing_state: node.parsing_state, pos: node.pos}));
/* 000247 */ 			}) ();
/* 000247 */ 		}
/* 000257 */ 		else {
/* 000261 */ 			var heading_nodelist = title_heading_formatted_flm_frag_nodes;
/* 000261 */ 		}
/* 000266 */ 		var heading_node = __call__ (make_invocable_node_instance, null, latexnodes_nodes.LatexMacroNode, __kwargtrans__ ({flm_spec: (function () {
/* 000266 */ 			var __accu0__ = headings;
/* 000266 */ 			return __call__ (__accu0__.HeadingMacro, __accu0__, __kwargtrans__ ({macroname: null, heading_level: __getitem__ (self.theorem_type_spec, 'theorem_heading_level'), inline_heading: true}));
/* 000266 */ 		}) (), args: dict ({'text': heading_nodelist}), latex_walker: node.latex_walker, parsing_state: node.parsing_state}));
/* 000278 */ 		heading_node.flm_heading_target_id = target_id;
/* 000294 */ 		var final_content_node = (function () {
/* 000294 */ 			var __accu0__ = node.latex_walker;
/* 000294 */ 			return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: __getitem__ (self.theorem_type_spec, 'body_final_content'), pos: node.pos, pos_end: node.pos, parsing_state: node.parsing_state}));
/* 000294 */ 		}) ();
/* 000301 */ 		final_content_node.flm_strip_preceding_whitespace = true;
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
/* 000327 */ 		var rendered_contents = (function () {
/* 000327 */ 			var __accu0__ = fragment_renderer;
/* 000327 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, body_nodelist, render_context);
/* 000327 */ 		}) ();
/* 000332 */ 		return (function () {
/* 000332 */ 			var __accu0__ = fragment_renderer;
/* 000332 */ 			return __call__ (__accu0__.render_semantic_block, __accu0__, rendered_contents, __getitem__ (self.theorem_spec, 'theorem_type'), render_context, __kwargtrans__ ({annotations: [self.environmentname]}));
/* 000332 */ 		}) ();
/* 000332 */ 	});}
/* 000332 */ });
/* 000342 */ export var _default_theorem_environments_simpleset = dict ({'theoremlike': dict ({'theorem': dict ({'title': dict ({'lowercase': 'theorem', 'abbreviated': dict ({'singular': 'Thm.', 'plural': 'Thms.'})})}), 'proposition': dict ({'title': dict ({'lowercase': 'proposition', 'abbreviated': dict ({'singular': 'Prop.', 'plural': 'Props.'})})}), 'lemma': dict ({'title': dict ({'lowercase': 'lemma', 'abbreviated': dict ({'singular': 'Lem.', 'plural': 'Lems.'})})}), 'corollary': dict ({'title': dict ({'lowercase': 'corollary', 'abbreviated': dict ({'singular': 'Cor.', 'plural': 'Cors.'})})})}), 'definitionlike': dict ({'definition': dict ({'title': dict ({'lowercase': 'definition', 'abbreviated': dict ({'singular': 'Def.', 'plural': 'Defs.'})})})}), 'prooflike': dict ({'proof': dict ({'title': dict ({'lowercase': 'proof', 'abbreviated': dict ({'singular': 'Proof', 'plural': 'Proofs'})})})})});
/* 000437 */ export var _default_theorem_environments_defaultset = dict ({'theoremlike': __call__ (dict, null, __getitem__ (_default_theorem_environments_simpleset, 'theoremlike'), __kwargtrans__ (dict ({'conjecture': dict ({'title': dict ({'lowercase': 'conjecture', 'abbreviated': dict ({'singular': 'Conj.', 'plural': 'Conjs.'})})})}))), 'definitionlike': __call__ (dict, null, __getitem__ (_default_theorem_environments_simpleset, 'definitionlike'), __kwargtrans__ (dict ({'remark': dict ({'title': dict ({'lowercase': 'remark', 'abbreviated': dict ({'singular': 'Rem.', 'plural': 'Rems.'})})})}))), 'prooflike': __call__ (dict, null, __getitem__ (_default_theorem_environments_simpleset, 'prooflike'))});
/* 000489 */ export var _default_theorem_environments_richset = dict ({'theoremlike': __call__ (dict, null, __getitem__ (_default_theorem_environments_defaultset, 'theoremlike')), 'definitionlike': __call__ (dict, null, __getitem__ (_default_theorem_environments_defaultset, 'definitionlike'), __kwargtrans__ (dict ({'idea': dict ({'title': dict ({'lowercase': 'idea', 'abbreviated': dict ({'singular': 'Idea', 'plural': 'Ideas'})})}), 'question': dict ({'title': dict ({'lowercase': 'question', 'abbreviated': dict ({'singular': 'Qtn.', 'plural': 'Qtns.'})})}), 'claim': dict ({'title': dict ({'lowercase': 'claim', 'abbreviated': dict ({'singular': 'Clm.', 'plural': 'Clms.'})})}), 'observation': dict ({'title': dict ({'lowercase': 'observation', 'abbreviated': dict ({'singular': 'Obs.', 'plural': 'Obs.'})})}), 'problem': dict ({'title': dict ({'lowercase': 'problem', 'abbreviated': dict ({'singular': 'Prob.', 'plural': 'Probs.'})})})}))), 'prooflike': __call__ (dict, null, __getitem__ (_default_theorem_environments_defaultset, 'prooflike'))});
/* 000493 */ export var default_theorem_environments = dict ({'simpleset': _default_theorem_environments_simpleset, 'defaultset': _default_theorem_environments_defaultset, 'richset': _default_theorem_environments_richset});
/* 000499 */ export var default_theorem_theorem_types = dict ({'theoremlike': dict ({'numbered': true, 'shared_numbering': true, 'counter_formatter': null, 'theorem_heading_level': 'theorem', 'heading_title_pre': ' (', 'heading_title_post': ')', 'title_enable_relation_ref': false, 'body_final_content': ''}), 'definitionlike': dict ({'numbered': true, 'shared_numbering': true, 'counter_formatter': null, 'theorem_heading_level': 'theorem', 'heading_title_pre': ' (', 'heading_title_post': ')', 'title_enable_relation_ref': false}), 'prooflike': dict ({'numbered': false, 'title_enable_relation_ref': true, 'body_final_content': '\xa0□'})});
/* 000531 */ export var default_thm_shared_counter_formatter_spec = dict ({'format_num': 'arabic', 'delimiters': tuple (['', '']), 'join_spec': 'default'});
/* 000538 */ export var default_allowed_ref_label_prefixes = ['thm', 'prop', 'cor', 'lem', 'rem', 'def', 'dfn', 'x', 'topic'];
/* 000545 */ export var FeatureTheorems =  __class__ ('FeatureTheorems', [Feature], {
/* 000545 */ 	__module__: __name__,
/* 000547 */ 	feature_name: 'theorems',
/* 000549 */ 	feature_dependencies: ['refs'],
/* 000562 */ 	feature_default_config: dict ({'environments': __getitem__ (default_theorem_environments, 'defaultset'), 'theorem_types': default_theorem_theorem_types, 'shared_counter_formatter': 'arabic', 'allowed_ref_label_prefixes': default_allowed_ref_label_prefixes}),
/* 000562 */ 	RenderManager: __class__ ('RenderManager', [Feature.RenderManager], {
/* 000562 */ 		__module__: __name__,
/* 000564 */ 		get initialize () {return __get__ (this, function (self) {
/* 000564 */ 			if (arguments.length) {
/* 000564 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000564 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000564 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000564 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000564 */ 						switch (__attrib0__) {
/* 000564 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000564 */ 						}
/* 000564 */ 					}
/* 000564 */ 				}
/* 000564 */ 			}
/* 000564 */ 			else {
/* 000564 */ 			}
/* 000565 */ 			self.shared_counter = __call__ (Counter, null, self.feature.shared_counter_formatter);
/* 000567 */ 			var refs_mgr = (function () {
/* 000567 */ 				var __accu0__ = self.render_context;
/* 000567 */ 				return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000567 */ 			}) ();
/* 000569 */ 			self.counters = dict ({});
/* 000570 */ 			var __iterable0__ = (function () {
/* 000570 */ 				var __accu0__ = self.feature.thm_counter_formatters;
/* 000570 */ 				return __call__ (__accu0__.py_items, __accu0__);
/* 000570 */ 			}) ();
/* 000570 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000570 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000570 */ 				var env_name = __left0__ [0];
/* 000570 */ 				var counter_formatter = __left0__ [1];
/* 000571 */ 				var thm_spec = __getitem__ (self.feature.environments, env_name);
/* 000572 */ 				var thm_type_spec = __getitem__ (self.feature.theorem_types, __getitem__ (thm_spec, 'theorem_type'));
/* 000573 */ 				if (__t__ (__getitem__ (thm_type_spec, 'shared_numbering'))) {
/* 000574 */ 					__setitem__ (self.counters, env_name, __call__ (CounterAlias, null, __kwargtrans__ ({counter_formatter: counter_formatter, alias_counter: self.shared_counter})));
/* 000574 */ 				}
/* 000577 */ 				else {
/* 000579 */ 					__setitem__ (self.counters, env_name, __call__ (Counter, null, __kwargtrans__ ({counter_formatter: counter_formatter})));
/* 000579 */ 				}
/* 000584 */ 				(function () {
/* 000584 */ 					var __accu0__ = refs_mgr;
/* 000584 */ 					return __call__ (__accu0__.register_counter_formatter, __accu0__, __kwargtrans__ ({counter_formatter: counter_formatter}));
/* 000584 */ 				}) ();
/* 000584 */ 			}
/* 000584 */ 		});}
/* 000584 */ 	}),
/* 000589 */ 	get __init__ () {return __get__ (this, function (self, environments, theorem_types, shared_counter_formatter, allowed_ref_label_prefixes) {
/* 000589 */ 		if (typeof environments == 'undefined' || (environments != null && environments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000589 */ 			var environments = null;
/* 000589 */ 		};
/* 000589 */ 		if (typeof theorem_types == 'undefined' || (theorem_types != null && theorem_types.hasOwnProperty ("__kwargtrans__"))) {;
/* 000589 */ 			var theorem_types = null;
/* 000589 */ 		};
/* 000589 */ 		if (typeof shared_counter_formatter == 'undefined' || (shared_counter_formatter != null && shared_counter_formatter.hasOwnProperty ("__kwargtrans__"))) {;
/* 000589 */ 			var shared_counter_formatter = null;
/* 000589 */ 		};
/* 000589 */ 		if (typeof allowed_ref_label_prefixes == 'undefined' || (allowed_ref_label_prefixes != null && allowed_ref_label_prefixes.hasOwnProperty ("__kwargtrans__"))) {;
/* 000589 */ 			var allowed_ref_label_prefixes = null;
/* 000589 */ 		};
/* 000589 */ 		if (arguments.length) {
/* 000589 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000589 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000589 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000589 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000589 */ 					switch (__attrib0__) {
/* 000589 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000589 */ 						case 'environments': var environments = __allkwargs0__ [__attrib0__]; break;
/* 000589 */ 						case 'theorem_types': var theorem_types = __allkwargs0__ [__attrib0__]; break;
/* 000589 */ 						case 'shared_counter_formatter': var shared_counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000589 */ 						case 'allowed_ref_label_prefixes': var allowed_ref_label_prefixes = __allkwargs0__ [__attrib0__]; break;
/* 000589 */ 					}
/* 000589 */ 				}
/* 000589 */ 			}
/* 000589 */ 		}
/* 000589 */ 		else {
/* 000589 */ 		}
/* 000594 */ 		__call__ (__call__ (__super__, null, FeatureTheorems, '__init__'), null, self);
/* 000595 */ 		if (__t__ (environments === null)) {
/* 000596 */ 			var environments = __getitem__ (default_theorem_environments, 'defaultset');
/* 000596 */ 		}
/* 000597 */ 		if (__t__ (__call__ (isinstance, null, environments, str))) {
/* 000598 */ 			var environments = __getitem__ (default_theorem_environments, environments);
/* 000598 */ 		}
/* 000600 */ 		if (__t__ (theorem_types === null)) {
/* 000601 */ 			var theorem_types = default_theorem_theorem_types;
/* 000601 */ 		}
/* 000605 */ 		self.theorem_types = (function () {
/* 000605 */ 			var __accu0__ = [];
/* 000607 */ 			var __iterable0__ = (function () {
/* 000607 */ 				var __accu1__ = __call__ (dict, null, theorem_types);
/* 000607 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000607 */ 			}) ();
/* 000607 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000607 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000607 */ 				var thm_type = __left0__ [0];
/* 000607 */ 				var thm_type_spec = __left0__ [1];
/* 000607 */ 				if (__t__ (thm_type_spec !== null)) {
/* 000608 */ 					(function () {
/* 000608 */ 						var __accu1__ = __accu0__;
/* 000606 */ 						return __call__ (__accu1__.append, __accu1__, [thm_type, (function () {
/* 000606 */ 							var __accu2__ = self;
/* 000606 */ 							return __call__ (__accu2__._standardize_type_spec, __accu2__, thm_type, thm_type_spec);
/* 000606 */ 						}) ()]);
/* 000606 */ 					}) ();
/* 000606 */ 				}
/* 000606 */ 			}
/* 000606 */ 			return dict (__accu0__);
/* 000606 */ 		}) ();
/* 000613 */ 		self.environments = dict ({});
/* 000614 */ 		var __iterable0__ = (function () {
/* 000614 */ 			var __accu0__ = environments;
/* 000614 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000614 */ 		}) ();
/* 000614 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000614 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000614 */ 			var thm_type = __left0__ [0];
/* 000614 */ 			var env_list = __left0__ [1];
/* 000615 */ 			var __iterable1__ = (function () {
/* 000615 */ 				var __accu0__ = env_list;
/* 000615 */ 				return __call__ (__accu0__.py_items, __accu0__);
/* 000615 */ 			}) ();
/* 000615 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000615 */ 				var __left0__ = __getitem__ (__iterable1__, __index1__);
/* 000615 */ 				var env_name = __left0__ [0];
/* 000615 */ 				var thm_spec = __left0__ [1];
/* 000616 */ 				if (__t__ (__in__ ('env_name', self.environments))) {
/* 000617 */ 					var __except0__ = __call__ (ValueError, null, 'Duplicate definition of theorem environment ‘{}’'.format (env_name));
/* 000617 */ 					__except0__.__cause__ = null;
/* 000617 */ 					throw __except0__;
/* 000617 */ 				}
/* 000621 */ 				__setitem__ (self.environments, env_name, (function () {
/* 000621 */ 					var __accu0__ = self;
/* 000621 */ 					return __call__ (__accu0__._standardize_thm_spec, __accu0__, thm_type, env_name, thm_spec);
/* 000621 */ 				}) ());
/* 000621 */ 			}
/* 000621 */ 		}
/* 000625 */ 		self.shared_counter_formatter = __call__ (build_counter_formatter, null, shared_counter_formatter, default_thm_shared_counter_formatter_spec, __kwargtrans__ ({counter_formatter_id: '_theorems_shared'}));
/* 000631 */ 		var use_default_counter_formatter_spec = (function () {
/* 000631 */ 			var __accu0__ = self.shared_counter_formatter;
/* 000631 */ 			return __call__ (__accu0__.asdict, __accu0__);
/* 000631 */ 		}) ();
/* 000633 */ 		self.thm_counter_formatters = dict ({});
/* 000634 */ 		var __iterable0__ = (function () {
/* 000634 */ 			var __accu0__ = self.environments;
/* 000634 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000634 */ 		}) ();
/* 000634 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000634 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000634 */ 			var env_name = __left0__ [0];
/* 000634 */ 			var thm_spec = __left0__ [1];
/* 000635 */ 			var thm_type_spec = __getitem__ (self.theorem_types, __getitem__ (thm_spec, 'theorem_type'));
/* 000636 */ 			if (__t__ (!__t__ ((__getitem__ (thm_type_spec, 'numbered'))))) {
/* 000636 */ 				continue;
/* 000636 */ 			}
/* 000640 */ 			var counter_formatter_spec = (function () {
/* 000640 */ 				var __accu0__ = thm_type_spec;
/* 000640 */ 				return __call__ (__accu0__.py_get, __accu0__, 'counter_formatter', null);
/* 000640 */ 			}) ();
/* 000641 */ 			if (__t__ (counter_formatter_spec === null)) {
/* 000642 */ 				var counter_formatter_spec = dict ({});
/* 000642 */ 			}
/* 000643 */ 			else if (__t__ (__call__ (isinstance, null, counter_formatter_spec, str))) {
/* 000644 */ 				var counter_formatter_spec = dict ({'format_num': counter_formatter_spec});
/* 000644 */ 			}
/* 000645 */ 			else {
/* 000646 */ 				var counter_formatter_spec = __call__ (dict, null, counter_formatter_spec);
/* 000646 */ 			}
/* 000652 */ 			__setitem__ (counter_formatter_spec, 'prefix_display', (function () {
/* 000652 */ 				var __accu0__ = self;
/* 000652 */ 				return __call__ (__accu0__._make_counter_formatter_prefix_for_thm, __accu0__, env_name, thm_spec);
/* 000652 */ 			}) ());
/* 000656 */ 			__setitem__ (self.thm_counter_formatters, env_name, __call__ (build_counter_formatter, null, counter_formatter_spec, use_default_counter_formatter_spec, __kwargtrans__ ({counter_formatter_id: env_name})));
/* 000656 */ 		}
/* 000662 */ 		self.allowed_ref_label_prefixes = __call__ (list, null, (__t__ (allowed_ref_label_prefixes !== null) ? allowed_ref_label_prefixes : default_allowed_ref_label_prefixes));
/* 000662 */ 	});},
/* 000669 */ 	get _standardize_type_spec () {return __get__ (this, function (self, thm_type, thm_type_spec) {
/* 000669 */ 		if (arguments.length) {
/* 000669 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000669 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000669 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000669 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000669 */ 					switch (__attrib0__) {
/* 000669 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000669 */ 						case 'thm_type': var thm_type = __allkwargs0__ [__attrib0__]; break;
/* 000669 */ 						case 'thm_type_spec': var thm_type_spec = __allkwargs0__ [__attrib0__]; break;
/* 000669 */ 					}
/* 000669 */ 				}
/* 000669 */ 			}
/* 000669 */ 		}
/* 000669 */ 		else {
/* 000669 */ 		}
/* 000671 */ 		var spec = __call__ (dict, null, __getitem__ (default_theorem_theorem_types, 'theoremlike'));
/* 000672 */ 		(function () {
/* 000672 */ 			var __accu0__ = spec;
/* 000672 */ 			return __call__ (__accu0__.py_update, __accu0__, thm_type_spec);
/* 000672 */ 		}) ();
/* 000673 */ 		return spec;
/* 000673 */ 	});},
/* 000675 */ 	get _standardize_thm_spec () {return __get__ (this, function (self, thm_type, env_name, thm_spec) {
/* 000675 */ 		if (arguments.length) {
/* 000675 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000675 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000675 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000675 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000675 */ 					switch (__attrib0__) {
/* 000675 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000675 */ 						case 'thm_type': var thm_type = __allkwargs0__ [__attrib0__]; break;
/* 000675 */ 						case 'env_name': var env_name = __allkwargs0__ [__attrib0__]; break;
/* 000675 */ 						case 'thm_spec': var thm_spec = __allkwargs0__ [__attrib0__]; break;
/* 000675 */ 					}
/* 000675 */ 				}
/* 000675 */ 			}
/* 000675 */ 		}
/* 000675 */ 		else {
/* 000675 */ 		}
/* 000676 */ 		if (__t__ (thm_spec === true)) {
/* 000677 */ 			var thm_spec = env_name;
/* 000677 */ 		}
/* 000678 */ 		if (__t__ (__call__ (isinstance, null, thm_spec, str))) {
/* 000679 */ 			var thm_spec = dict ({'title': thm_spec});
/* 000679 */ 		}
/* 000680 */ 		else {
/* 000681 */ 			var thm_spec = __call__ (dict, null, thm_spec);
/* 000681 */ 		}
/* 000683 */ 		__setitem__ (thm_spec, 'theorem_type', thm_type);
/* 000686 */ 		var new_title_spec = dict ({});
/* 000687 */ 		var title = (function () {
/* 000687 */ 			var __accu0__ = thm_spec;
/* 000687 */ 			return __call__ (__accu0__.py_get, __accu0__, 'title', null);
/* 000687 */ 		}) ();
/* 000688 */ 		if (__t__ (title === null)) {
/* 000689 */ 			var title = env_name;
/* 000689 */ 		}
/* 000690 */ 		if (__t__ (__call__ (isinstance, null, title, str))) {
/* 000691 */ 			var title = dict ({'lowercase': dict ({'singular': title, 'plural': __add__ (title, 's')})});
/* 000691 */ 		}
/* 000694 */ 		if (__t__ (__in__ ('lowercase', title))) {
/* 000695 */ 			var lowercase = __getitem__ (title, 'lowercase');
/* 000696 */ 			if (__t__ (__call__ (isinstance, null, lowercase, str))) {
/* 000697 */ 				__setitem__ (new_title_spec, 'lowercase', dict ({'singular': lowercase, 'plural': __add__ (lowercase, 's')}));
/* 000697 */ 			}
/* 000700 */ 			else {
/* 000702 */ 				__setitem__ (new_title_spec, 'lowercase', lowercase);
/* 000702 */ 			}
/* 000702 */ 		}
/* 000703 */ 		else {
/* 000705 */ 			__setitem__ (new_title_spec, 'lowercase', dict ({'singular': '??', 'plural': '???'}));
/* 000705 */ 		}
/* 000707 */ 		if (__t__ (__in__ ('capital', title))) {
/* 000708 */ 			var capital = __getitem__ (title, 'capital');
/* 000709 */ 			if (__t__ (__call__ (isinstance, null, capital, str))) {
/* 000710 */ 				__setitem__ (new_title_spec, 'capital', dict ({'singular': capital, 'plural': __add__ (capital, 's')}));
/* 000710 */ 			}
/* 000713 */ 			else {
/* 000715 */ 				__setitem__ (new_title_spec, 'capital', capital);
/* 000715 */ 			}
/* 000715 */ 		}
/* 000716 */ 		else {
/* 000719 */ 			__setitem__ (new_title_spec, 'capital', dict ({'singular': (function () {
/* 000719 */ 				var __accu0__ = __getitem__ (__getitem__ (new_title_spec, 'lowercase'), 'singular');
/* 000719 */ 				return __call__ (__accu0__.capitalize, __accu0__);
/* 000720 */ 			}) (), 'plural': (function () {
/* 000720 */ 				var __accu0__ = __getitem__ (__getitem__ (new_title_spec, 'lowercase'), 'plural');
/* 000720 */ 				return __call__ (__accu0__.capitalize, __accu0__);
/* 000720 */ 			}) ()}));
/* 000720 */ 		}
/* 000723 */ 		if (__t__ (__in__ ('abbreviated', title))) {
/* 000724 */ 			var abbreviated = __getitem__ (title, 'abbreviated');
/* 000725 */ 			if (__t__ (__call__ (isinstance, null, abbreviated, str))) {
/* 000726 */ 				__setitem__ (new_title_spec, 'abbreviated', dict ({'singular': abbreviated, 'plural': __add__ (abbreviated, 's')}));
/* 000726 */ 			}
/* 000729 */ 			else {
/* 000731 */ 				__setitem__ (new_title_spec, 'abbreviated', abbreviated);
/* 000731 */ 			}
/* 000731 */ 		}
/* 000732 */ 		else {
/* 000736 */ 			__setitem__ (new_title_spec, 'abbreviated', dict ({'singular': __add__ (__getslice__ (__getitem__ (__getitem__ (new_title_spec, 'capital'), 'singular'), 0, 3, 1), '.'), 'plural': __add__ ((function () {
/* 000736 */ 				var __accu0__ = __getslice__ (__getitem__ (__getitem__ (new_title_spec, 'capital'), 'plural'), 0, 3, 1);
/* 000736 */ 				return __call__ (__accu0__.rstrip, __accu0__, 's');
/* 000736 */ 			}) (), 's.')}));
/* 000736 */ 		}
/* 000739 */ 		__setitem__ (thm_spec, 'title', new_title_spec);
/* 000741 */ 		return thm_spec;
/* 000741 */ 	});},
/* 000744 */ 	get _make_counter_formatter_prefix_for_thm () {return __get__ (this, function (self, env_name, thm_spec) {
/* 000744 */ 		if (arguments.length) {
/* 000744 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000744 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000744 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000744 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000744 */ 					switch (__attrib0__) {
/* 000744 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000744 */ 						case 'env_name': var env_name = __allkwargs0__ [__attrib0__]; break;
/* 000744 */ 						case 'thm_spec': var thm_spec = __allkwargs0__ [__attrib0__]; break;
/* 000744 */ 					}
/* 000744 */ 				}
/* 000744 */ 			}
/* 000744 */ 		}
/* 000744 */ 		else {
/* 000744 */ 		}
/* 000745 */ 		var prefix = dict ({});
/* 000747 */ 		var _add_space_values = function (x) {
/* 000747 */ 			if (arguments.length) {
/* 000747 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000747 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000747 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000747 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000747 */ 						switch (__attrib0__) {
/* 000747 */ 							case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000747 */ 						}
/* 000747 */ 					}
/* 000747 */ 				}
/* 000747 */ 			}
/* 000747 */ 			else {
/* 000747 */ 			}
/* 000748 */ 			return (function () {
/* 000748 */ 				var __accu0__ = [];
/* 000748 */ 				var __iterable0__ = (function () {
/* 000748 */ 					var __accu1__ = x;
/* 000748 */ 					return __call__ (__accu1__.py_items, __accu1__);
/* 000748 */ 				}) ();
/* 000748 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000748 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000748 */ 					var k = __left0__ [0];
/* 000748 */ 					var v = __left0__ [1];
/* 000748 */ 					(function () {
/* 000748 */ 						var __accu1__ = __accu0__;
/* 000748 */ 						return __call__ (__accu1__.append, __accu1__, [k, __add__ (v, '~')]);
/* 000748 */ 					}) ();
/* 000748 */ 				}
/* 000748 */ 				return dict (__accu0__);
/* 000748 */ 			}) ();
/* 000748 */ 		};
/* 000750 */ 		__setitem__ (prefix, 'lowercase', __call__ (_add_space_values, null, __getitem__ (__getitem__ (thm_spec, 'title'), 'lowercase')));
/* 000751 */ 		__setitem__ (prefix, 'capital', __call__ (_add_space_values, null, __getitem__ (__getitem__ (thm_spec, 'title'), 'capital')));
/* 000752 */ 		__setitem__ (prefix, 'abbreviated', __call__ (_add_space_values, null, __getitem__ (__getitem__ (thm_spec, 'title'), 'abbreviated')));
/* 000754 */ 		(function () {
/* 000754 */ 			var __accu0__ = prefix;
/* 000754 */ 			return __call__ (__accu0__.py_update, __accu0__, __getitem__ (prefix, 'capital'));
/* 000754 */ 		}) ();
/* 000756 */ 		return prefix;
/* 000756 */ 	});},
/* 000759 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000759 */ 		if (arguments.length) {
/* 000759 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000759 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000759 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000759 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000759 */ 					switch (__attrib0__) {
/* 000759 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000759 */ 					}
/* 000759 */ 				}
/* 000759 */ 			}
/* 000759 */ 		}
/* 000759 */ 		else {
/* 000759 */ 		}
/* 000761 */ 		var environment_specs = [];
/* 000763 */ 		var __iterable0__ = (function () {
/* 000763 */ 			var __accu0__ = self.environments;
/* 000763 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000763 */ 		}) ();
/* 000763 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000763 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000763 */ 			var env_name = __left0__ [0];
/* 000763 */ 			var thm_spec = __left0__ [1];
/* 000764 */ 			(function () {
/* 000764 */ 				var __accu0__ = environment_specs;
/* 000764 */ 				return __call__ (__accu0__.append, __accu0__, __call__ (TheoremEnvironment, null, __kwargtrans__ ({environmentname: env_name, theorem_spec: thm_spec, theorem_type_spec: __getitem__ (self.theorem_types, __getitem__ (thm_spec, 'theorem_type')), allowed_ref_label_prefixes: self.allowed_ref_label_prefixes})));
/* 000764 */ 			}) ();
/* 000764 */ 		}
/* 000771 */ 		return dict ({'environments': environment_specs});
/* 000771 */ 	});}
/* 000771 */ });
/* 000778 */ export var FeatureClass = FeatureTheorems;
/* 000007 */ 
//# sourceMappingURL=flm.feature.theorems.map