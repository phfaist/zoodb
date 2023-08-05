/* 000001 */ // Transcrypt'ed from Python, 2023-08-06 00:52:18
/* 000007 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000018 */ import * as headings from './flm.feature.headings.js';
/* 000017 */ import {Feature} from './flm.feature._base.js';
/* 000015 */ import {Counter, CounterAlias, build_counter_formatter} from './flm.counter.js';
/* 000012 */ import * as flmspecinfo from './flm.flmspecinfo.js';
/* 000011 */ import {FLMArgumentSpec, make_invocable_node_instance} from './flm.flmenvironment.js';
/* 000009 */ import * as macrospec from './pylatexenc.macrospec.js';
/* 000008 */ import * as latexnodes_nodes from './pylatexenc.latexnodes.nodes.js';
/* 000007 */ import {ParsedArgumentsInfo, ParsingStateDelta} from './pylatexenc.latexnodes.js';
/* 000007 */ export {FLMArgumentSpec, make_invocable_node_instance, ParsingStateDelta, macrospec, headings, flmspecinfo, CounterAlias, Counter, latexnodes_nodes, ParsedArgumentsInfo, Feature, build_counter_formatter};
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
/* 000052 */ 	_fields: tuple (['environmentname', 'theorem_spec', 'theorem_type_spec', 'allowed_ref_label_prefixes']),
/* 000055 */ 	get make_body_parser () {return __get__ (this, function (self, token, nodeargd, arg_parsing_state_delta) {
/* 000055 */ 		if (arguments.length) {
/* 000055 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000055 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000055 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000055 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000055 */ 					switch (__attrib0__) {
/* 000055 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000055 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000055 */ 						case 'nodeargd': var nodeargd = __allkwargs0__ [__attrib0__]; break;
/* 000055 */ 						case 'arg_parsing_state_delta': var arg_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000055 */ 					}
/* 000055 */ 				}
/* 000055 */ 			}
/* 000055 */ 		}
/* 000055 */ 		else {
/* 000055 */ 		}
/* 000056 */ 		return (function () {
/* 000056 */ 			var __accu0__ = macrospec;
/* 000058 */ 			return __call__ (__accu0__.LatexEnvironmentBodyContentsParser, __accu0__, __kwargtrans__ ({environmentname: token.arg, contents_parsing_state_delta: __call__ (ParsingStateDelta, null, __kwargtrans__ ({set_attributes: dict ({'is_block_level': true})}))}));
/* 000058 */ 		}) ();
/* 000058 */ 	});},
/* 000065 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000065 */ 		if (arguments.length) {
/* 000065 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000065 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000065 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000065 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000065 */ 					switch (__attrib0__) {
/* 000065 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000065 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000065 */ 					}
/* 000065 */ 				}
/* 000065 */ 			}
/* 000065 */ 		}
/* 000065 */ 		else {
/* 000065 */ 		}
/* 000067 */ 		var node_args = (function () {
/* 000067 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000067 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['thmtitle', 'label']));
/* 000067 */ 		}) ();
/* 000071 */ 		var thmtitle_nodelist = null;
/* 000072 */ 		if (__t__ ((function () {
/* 000072 */ 			var __accu0__ = __getitem__ (node_args, 'thmtitle');
/* 000072 */ 			return __call__ (__accu0__.was_provided, __accu0__);
/* 000072 */ 		}) ())) {
/* 000073 */ 			var thmtitle_nodelist = (function () {
/* 000073 */ 				var __accu0__ = __getitem__ (node_args, 'thmtitle');
/* 000073 */ 				return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000073 */ 			}) ();
/* 000073 */ 		}
/* 000075 */ 		var relation_ref_target = null;
/* 000076 */ 		var relation_ref_show_ref = false;
/* 000077 */ 		if (__t__ (__getitem__ (self.theorem_type_spec, 'title_enable_relation_ref'))) {
/* 000079 */ 			if (__t__ (__t__ (thmtitle_nodelist !== null) && __gt__ (__call__ (len, null, thmtitle_nodelist), 0))) {
/* 000080 */ 				var chnode = __getitem__ (thmtitle_nodelist, 0);
/* 000082 */ 				if (__t__ (__t__ (chnode !== null) && __t__ ((function () {
/* 000082 */ 					var __accu0__ = chnode;
/* 000082 */ 					return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000083 */ 				}) ()) && (function () {
/* 000083 */ 					var __accu0__ = chnode.chars;
/* 000083 */ 					return __call__ (__accu0__.startswith, __accu0__, '*');
/* 000083 */ 				}) ())) {
/* 000084 */ 					if (__t__ (__ne__ (__call__ (len, null, thmtitle_nodelist), 1))) {
/* 000089 */ 						var __except0__ = __call__ (LatexWalkerLocatedError, null, 'When specifying a proof-ref target as optional argument (‘[*thm:xyz]’), the entire argument must consist of regular characters with no special meaning in FLM.  Got: ‘{}’'.format ((function () {
/* 000089 */ 							var __accu0__ = thmtitle_nodelist;
/* 000089 */ 							return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000089 */ 						}) ()), __kwargtrans__ ({pos: chnode.pos}));
/* 000089 */ 						__except0__.__cause__ = null;
/* 000089 */ 						throw __except0__;
/* 000089 */ 					}
/* 000092 */ 					if (__t__ ((function () {
/* 000092 */ 						var __accu0__ = chnode.chars;
/* 000092 */ 						return __call__ (__accu0__.startswith, __accu0__, '**');
/* 000092 */ 					}) ())) {
/* 000093 */ 						var relation_ref_target = __getslice__ (chnode.chars, 2, null, 1);
/* 000094 */ 						var relation_ref_show_ref = false;
/* 000094 */ 					}
/* 000095 */ 					else if (__t__ ((function () {
/* 000095 */ 						var __accu0__ = chnode.chars;
/* 000095 */ 						return __call__ (__accu0__.startswith, __accu0__, '*');
/* 000095 */ 					}) ())) {
/* 000096 */ 						var relation_ref_target = __getslice__ (chnode.chars, 1, null, 1);
/* 000097 */ 						var relation_ref_show_ref = true;
/* 000097 */ 					}
/* 000097 */ 				}
/* 000097 */ 			}
/* 000097 */ 		}
/* 000099 */ 		if (__t__ (relation_ref_target !== null)) {
/* 000100 */ 			if (__t__ (__in__ (':', relation_ref_target))) {
/* 000101 */ 				var relation_ref_target = (function () {
/* 000101 */ 					var __accu0__ = relation_ref_target;
/* 000101 */ 					return __call__ (__accu0__.py_split, __accu0__, ':', __kwargtrans__ ({maxsplit: 1}));
/* 000101 */ 				}) ();
/* 000101 */ 			}
/* 000102 */ 			else {
/* 000103 */ 				var relation_ref_target = tuple ([null, relation_ref_target]);
/* 000103 */ 			}
/* 000103 */ 		}
/* 000105 */ 		node.flmarg_thmtitle = dict ({'nodelist': thmtitle_nodelist, 'has_relation_ref': (__t__ (relation_ref_target !== null) ? true : false), 'relation_ref_target': relation_ref_target, 'relation_ref_show_ref': relation_ref_show_ref});
/* 000112 */ 		node.flmarg_labels = (function () {
/* 000112 */ 			var __accu0__ = flmspecinfo;
/* 000112 */ 			return __call__ (__accu0__.helper_collect_labels, __accu0__, __getitem__ (node_args, 'label'), self.allowed_ref_label_prefixes);
/* 000112 */ 		}) ();
/* 000117 */ 		return node;
/* 000117 */ 	});},
/* 000119 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000119 */ 		if (arguments.length) {
/* 000119 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000119 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000119 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000119 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000119 */ 					switch (__attrib0__) {
/* 000119 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000119 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000119 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000119 */ 					}
/* 000119 */ 				}
/* 000119 */ 			}
/* 000119 */ 		}
/* 000119 */ 		else {
/* 000119 */ 		}
/* 000121 */ 		var fragment_renderer = render_context.fragment_renderer;
/* 000123 */ 		var thms_mgr = (function () {
/* 000123 */ 			var __accu0__ = render_context;
/* 000123 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'theorems');
/* 000123 */ 		}) ();
/* 000124 */ 		var refs_mgr = (function () {
/* 000124 */ 			var __accu0__ = render_context;
/* 000124 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000124 */ 		}) ();
/* 000128 */ 		var flmarg_thmtitle = node.flmarg_thmtitle;
/* 000129 */ 		var flmarg_labels = node.flmarg_labels;
/* 000133 */ 		if (__t__ (__getitem__ (self.theorem_type_spec, 'numbered'))) {
/* 000135 */ 			var counter = __getitem__ (thms_mgr.counters, self.environmentname);
/* 000136 */ 			var prefix_variant = 'capital';
/* 000138 */ 			var ref_instance = (function () {
/* 000138 */ 				var __accu0__ = refs_mgr;
/* 000138 */ 				return __call__ (__accu0__.register_reference_step_counter, __accu0__, __kwargtrans__ ({node: node, counter: counter, target_href_fn: (function __lambda__ (n) {
/* 000138 */ 					if (arguments.length) {
/* 000138 */ 						var __ilastarg0__ = arguments.length - 1;
/* 000138 */ 						if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000138 */ 							var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000138 */ 							for (var __attrib0__ in __allkwargs0__) {
/* 000138 */ 								switch (__attrib0__) {
/* 000138 */ 									case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000138 */ 								}
/* 000138 */ 							}
/* 000138 */ 						}
/* 000138 */ 					}
/* 000138 */ 					else {
/* 000138 */ 					}
/* 000138 */ 					return '#{}-{}'.format (self.environmentname, n);
/* 000138 */ 				}), counter_with_prefix: true, counter_prefix_variant: prefix_variant}));
/* 000138 */ 			}) ();
/* 000146 */ 			var counter_value = ref_instance.counter_value;
/* 000148 */ 			var title_heading_formatted_flm = ref_instance.formatted_ref_flm_text;
/* 000150 */ 			var target_id = '{}-{}'.format (self.environmentname, counter_value);
/* 000152 */ 			var title_heading_formatted_flm_frag = (function () {
/* 000152 */ 				var __accu0__ = render_context;
/* 000152 */ 				return __call__ (__accu0__.make_standalone_fragment, __accu0__, title_heading_formatted_flm, __kwargtrans__ ({what: 'Theorem heading'}));
/* 000152 */ 			}) ();
/* 000156 */ 			var title_heading_formatted_flm_frag_nodes = title_heading_formatted_flm_frag.nodes;
/* 000158 */ 			var __iterable0__ = flmarg_labels;
/* 000158 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000158 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000158 */ 				var ref_type = __left0__ [0];
/* 000158 */ 				var ref_label = __left0__ [1];
/* 000160 */ 				(function () {
/* 000160 */ 					var __accu0__ = refs_mgr;
/* 000160 */ 					return __call__ (__accu0__.register_reference, __accu0__, ref_type, ref_label, __kwargtrans__ ({node: node, formatted_ref_flm_text: title_heading_formatted_flm_frag, target_href: __add__ ('#', target_id), counter_value: counter_value, counter_formatter_id: counter.formatter.counter_formatter_id}));
/* 000160 */ 				}) ();
/* 000160 */ 			}
/* 000160 */ 		}
/* 000167 */ 		else {
/* 000171 */ 			var theorem_name = __getitem__ (__getitem__ (__getitem__ (self.theorem_spec, 'title'), 'capital'), 'singular');
/* 000173 */ 			var target_id = null;
/* 000176 */ 			var title_heading_formatted_flm_frag_nodes = (function () {
/* 000176 */ 				var __accu0__ = node.latex_walker;
/* 000178 */ 				return __call__ (__accu0__.make_nodelist, __accu0__, [(function () {
/* 000178 */ 					var __accu1__ = node.latex_walker;
/* 000178 */ 					return __call__ (__accu1__.make_node, __accu1__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: theorem_name, pos: node.pos, pos_end: node.pos, parsing_state: node.parsing_state}));
/* 000178 */ 				}) ()], __kwargtrans__ ({parsing_state: node.parsing_state}));
/* 000178 */ 			}) ();
/* 000191 */ 			if (__t__ (__call__ (len, null, flmarg_labels))) {
/* 000192 */ 				var __except0__ = __call__ (LatexWalkerLocatedError, null, __add__ (__add__ ('You cannot use \\label{} in unnumbered theorem environment ‘', self.environmentname), '’'), __kwargtrans__ ({pos: node.pos}));
/* 000192 */ 				__except0__.__cause__ = null;
/* 000192 */ 				throw __except0__;
/* 000192 */ 			}
/* 000192 */ 		}
/* 000213 */ 		var thmtitle_nodelist = null;
/* 000214 */ 		if (__t__ (__getitem__ (flmarg_thmtitle, 'has_relation_ref'))) {
/* 000216 */ 			if (__t__ (__getitem__ (flmarg_thmtitle, 'relation_ref_show_ref'))) {
/* 000218 */ 				var __left0__ = __getitem__ (flmarg_thmtitle, 'relation_ref_target');
/* 000218 */ 				var ref_type = __left0__ [0];
/* 000218 */ 				var ref_label = __left0__ [1];
/* 000221 */ 				var thm_relation_ref_instance = (function () {
/* 000221 */ 					var __accu0__ = refs_mgr;
/* 000221 */ 					return __call__ (__accu0__.get_ref, __accu0__, ref_type, ref_label, node.latex_walker.resource_info);
/* 000221 */ 				}) ();
/* 000225 */ 				var thm_relation_ref_flm_text = thm_relation_ref_instance.formatted_ref_flm_text;
/* 000226 */ 				var thm_relation_ref_flm_frag = (function () {
/* 000226 */ 					var __accu0__ = render_context;
/* 000226 */ 					return __call__ (__accu0__.make_standalone_fragment, __accu0__, thm_relation_ref_flm_text, __kwargtrans__ ({what: 'Thm relation ref'}));
/* 000226 */ 				}) ();
/* 000230 */ 				var thmtitle_nodelist = thm_relation_ref_flm_frag.nodes;
/* 000230 */ 			}
/* 000230 */ 		}
/* 000232 */ 		else if (__t__ (__getitem__ (flmarg_thmtitle, 'nodelist') !== null)) {
/* 000234 */ 			var thmtitle_nodelist = __getitem__ (flmarg_thmtitle, 'nodelist');
/* 000234 */ 		}
/* 000237 */ 		if (__t__ (thmtitle_nodelist !== null)) {
/* 000239 */ 			var heading_nodelist = (function () {
/* 000239 */ 				var __accu0__ = node.latex_walker;
/* 000242 */ 				return __call__ (__accu0__.make_nodelist, __accu0__, __add__ (__add__ (__add__ (__call__ (list, null, title_heading_formatted_flm_frag_nodes), [(function () {
/* 000242 */ 					var __accu1__ = node.latex_walker;
/* 000242 */ 					return __call__ (__accu1__.make_node, __accu1__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: __getitem__ (self.theorem_type_spec, 'heading_title_pre'), pos: node.pos, pos_end: node.pos, parsing_state: node.parsing_state}));
/* 000250 */ 				}) ()]), __call__ (list, null, thmtitle_nodelist)), [(function () {
/* 000250 */ 					var __accu1__ = node.latex_walker;
/* 000250 */ 					return __call__ (__accu1__.make_node, __accu1__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: __getitem__ (self.theorem_type_spec, 'heading_title_post'), pos: node.pos, pos_end: node.pos, parsing_state: node.parsing_state}));
/* 000250 */ 				}) ()]), __kwargtrans__ ({parsing_state: node.parsing_state, pos: node.pos}));
/* 000250 */ 			}) ();
/* 000250 */ 		}
/* 000260 */ 		else {
/* 000264 */ 			var heading_nodelist = title_heading_formatted_flm_frag_nodes;
/* 000264 */ 		}
/* 000269 */ 		var heading_node = __call__ (make_invocable_node_instance, null, latexnodes_nodes.LatexMacroNode, __kwargtrans__ ({flm_spec: (function () {
/* 000269 */ 			var __accu0__ = headings;
/* 000269 */ 			return __call__ (__accu0__.HeadingMacro, __accu0__, __kwargtrans__ ({macroname: null, heading_level: __getitem__ (self.theorem_type_spec, 'theorem_heading_level'), inline_heading: true}));
/* 000269 */ 		}) (), args: dict ({'text': heading_nodelist}), latex_walker: node.latex_walker, parsing_state: node.parsing_state}));
/* 000281 */ 		heading_node.flm_heading_target_id = target_id;
/* 000297 */ 		var final_content_node = (function () {
/* 000297 */ 			var __accu0__ = node.latex_walker;
/* 000297 */ 			return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: __getitem__ (self.theorem_type_spec, 'body_final_content'), pos: node.pos, pos_end: node.pos, parsing_state: node.parsing_state}));
/* 000297 */ 		}) ();
/* 000304 */ 		final_content_node.flm_strip_preceding_whitespace = true;
/* 000307 */ 		if (__t__ (__getitem__ (self.theorem_type_spec, 'body_final_content'))) {
/* 000312 */ 			var body_nodelist = __add__ (__add__ ([heading_node], __call__ (list, null, node.nodelist)), [final_content_node]);
/* 000312 */ 		}
/* 000315 */ 		else {
/* 000322 */ 			var body_nodelist = __add__ ([heading_node], __call__ (list, null, node.nodelist));
/* 000322 */ 		}
/* 000325 */ 		var body_nodelist = (function () {
/* 000325 */ 			var __accu0__ = node.latex_walker;
/* 000325 */ 			return __call__ (__accu0__.make_nodelist, __accu0__, body_nodelist, __kwargtrans__ ({parsing_state: node.parsing_state}));
/* 000325 */ 		}) ();
/* 000330 */ 		var rendered_contents = (function () {
/* 000330 */ 			var __accu0__ = fragment_renderer;
/* 000330 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, body_nodelist, render_context);
/* 000330 */ 		}) ();
/* 000335 */ 		return (function () {
/* 000335 */ 			var __accu0__ = fragment_renderer;
/* 000335 */ 			return __call__ (__accu0__.render_semantic_block, __accu0__, rendered_contents, __getitem__ (self.theorem_spec, 'theorem_type'), render_context, __kwargtrans__ ({annotations: [self.environmentname]}));
/* 000335 */ 		}) ();
/* 000335 */ 	});}
/* 000335 */ });
/* 000345 */ export var _default_theorem_environments_simpleset = dict ({'theoremlike': dict ({'theorem': dict ({'title': dict ({'lowercase': 'theorem', 'abbreviated': dict ({'singular': 'Thm.', 'plural': 'Thms.'})})}), 'proposition': dict ({'title': dict ({'lowercase': 'proposition', 'abbreviated': dict ({'singular': 'Prop.', 'plural': 'Props.'})})}), 'lemma': dict ({'title': dict ({'lowercase': 'lemma', 'abbreviated': dict ({'singular': 'Lem.', 'plural': 'Lems.'})})}), 'corollary': dict ({'title': dict ({'lowercase': 'corollary', 'abbreviated': dict ({'singular': 'Cor.', 'plural': 'Cors.'})})})}), 'definitionlike': dict ({'definition': dict ({'title': dict ({'lowercase': 'definition', 'abbreviated': dict ({'singular': 'Def.', 'plural': 'Defs.'})})})}), 'prooflike': dict ({'proof': dict ({'title': dict ({'lowercase': 'proof', 'abbreviated': dict ({'singular': 'Proof', 'plural': 'Proofs'})})})})});
/* 000440 */ export var _default_theorem_environments_defaultset = dict ({'theoremlike': __call__ (dict, null, __getitem__ (_default_theorem_environments_simpleset, 'theoremlike'), __kwargtrans__ (dict ({'conjecture': dict ({'title': dict ({'lowercase': 'conjecture', 'abbreviated': dict ({'singular': 'Conj.', 'plural': 'Conjs.'})})})}))), 'definitionlike': __call__ (dict, null, __getitem__ (_default_theorem_environments_simpleset, 'definitionlike'), __kwargtrans__ (dict ({'remark': dict ({'title': dict ({'lowercase': 'remark', 'abbreviated': dict ({'singular': 'Rem.', 'plural': 'Rems.'})})})}))), 'prooflike': __call__ (dict, null, __getitem__ (_default_theorem_environments_simpleset, 'prooflike'))});
/* 000492 */ export var _default_theorem_environments_richset = dict ({'theoremlike': __call__ (dict, null, __getitem__ (_default_theorem_environments_defaultset, 'theoremlike')), 'definitionlike': __call__ (dict, null, __getitem__ (_default_theorem_environments_defaultset, 'definitionlike'), __kwargtrans__ (dict ({'idea': dict ({'title': dict ({'lowercase': 'idea', 'abbreviated': dict ({'singular': 'Idea', 'plural': 'Ideas'})})}), 'question': dict ({'title': dict ({'lowercase': 'question', 'abbreviated': dict ({'singular': 'Qtn.', 'plural': 'Qtns.'})})}), 'claim': dict ({'title': dict ({'lowercase': 'claim', 'abbreviated': dict ({'singular': 'Clm.', 'plural': 'Clms.'})})}), 'observation': dict ({'title': dict ({'lowercase': 'observation', 'abbreviated': dict ({'singular': 'Obs.', 'plural': 'Obs.'})})}), 'problem': dict ({'title': dict ({'lowercase': 'problem', 'abbreviated': dict ({'singular': 'Prob.', 'plural': 'Probs.'})})})}))), 'prooflike': __call__ (dict, null, __getitem__ (_default_theorem_environments_defaultset, 'prooflike'))});
/* 000496 */ export var default_theorem_environments = dict ({'simpleset': _default_theorem_environments_simpleset, 'defaultset': _default_theorem_environments_defaultset, 'richset': _default_theorem_environments_richset});
/* 000502 */ export var default_theorem_theorem_types = dict ({'theoremlike': dict ({'numbered': true, 'shared_numbering': true, 'counter_formatter': null, 'theorem_heading_level': 'theorem', 'heading_title_pre': ' (', 'heading_title_post': ')', 'title_enable_relation_ref': false, 'body_final_content': ''}), 'definitionlike': dict ({'numbered': true, 'shared_numbering': true, 'counter_formatter': null, 'theorem_heading_level': 'theorem', 'heading_title_pre': ' (', 'heading_title_post': ')', 'title_enable_relation_ref': false}), 'prooflike': dict ({'numbered': false, 'title_enable_relation_ref': true, 'body_final_content': '\xa0□'})});
/* 000534 */ export var default_thm_shared_counter_formatter_spec = dict ({'format_num': 'arabic', 'delimiters': tuple (['', '']), 'join_spec': 'default'});
/* 000541 */ export var default_allowed_ref_label_prefixes = ['thm', 'prop', 'cor', 'lem', 'rem', 'def', 'dfn', 'x', 'topic'];
/* 000548 */ export var FeatureTheorems =  __class__ ('FeatureTheorems', [Feature], {
/* 000548 */ 	__module__: __name__,
/* 000550 */ 	feature_name: 'theorems',
/* 000552 */ 	feature_dependencies: ['refs'],
/* 000563 */ 	feature_default_config: dict ({'environments': __getitem__ (default_theorem_environments, 'defaultset'), 'theorem_types': default_theorem_theorem_types, 'shared_counter_formatter': 'arabic', 'allowed_ref_label_prefixes': default_allowed_ref_label_prefixes}),
/* 000563 */ 	RenderManager: __class__ ('RenderManager', [Feature.RenderManager], {
/* 000563 */ 		__module__: __name__,
/* 000565 */ 		get initialize () {return __get__ (this, function (self) {
/* 000565 */ 			if (arguments.length) {
/* 000565 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000565 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000565 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000565 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000565 */ 						switch (__attrib0__) {
/* 000565 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000565 */ 						}
/* 000565 */ 					}
/* 000565 */ 				}
/* 000565 */ 			}
/* 000565 */ 			else {
/* 000565 */ 			}
/* 000566 */ 			self.shared_counter = __call__ (Counter, null, self.feature.shared_counter_formatter);
/* 000568 */ 			var refs_mgr = (function () {
/* 000568 */ 				var __accu0__ = self.render_context;
/* 000568 */ 				return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000568 */ 			}) ();
/* 000570 */ 			self.counters = dict ({});
/* 000571 */ 			var __iterable0__ = (function () {
/* 000571 */ 				var __accu0__ = self.feature.thm_counter_formatters;
/* 000571 */ 				return __call__ (__accu0__.py_items, __accu0__);
/* 000571 */ 			}) ();
/* 000571 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000571 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000571 */ 				var env_name = __left0__ [0];
/* 000571 */ 				var counter_formatter = __left0__ [1];
/* 000572 */ 				var thm_spec = __getitem__ (self.feature.environments, env_name);
/* 000573 */ 				var thm_type_spec = __getitem__ (self.feature.theorem_types, __getitem__ (thm_spec, 'theorem_type'));
/* 000574 */ 				if (__t__ (__getitem__ (thm_type_spec, 'shared_numbering'))) {
/* 000575 */ 					__setitem__ (self.counters, env_name, __call__ (CounterAlias, null, __kwargtrans__ ({counter_formatter: counter_formatter, alias_counter: self.shared_counter})));
/* 000575 */ 				}
/* 000578 */ 				else {
/* 000580 */ 					__setitem__ (self.counters, env_name, __call__ (Counter, null, __kwargtrans__ ({counter_formatter: counter_formatter})));
/* 000580 */ 				}
/* 000585 */ 				(function () {
/* 000585 */ 					var __accu0__ = refs_mgr;
/* 000585 */ 					return __call__ (__accu0__.register_counter_formatter, __accu0__, __kwargtrans__ ({counter_formatter: counter_formatter}));
/* 000585 */ 				}) ();
/* 000585 */ 			}
/* 000585 */ 		});}
/* 000585 */ 	}),
/* 000590 */ 	get __init__ () {return __get__ (this, function (self, environments, theorem_types, shared_counter_formatter, allowed_ref_label_prefixes) {
/* 000590 */ 		if (typeof environments == 'undefined' || (environments != null && environments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000590 */ 			var environments = null;
/* 000590 */ 		};
/* 000590 */ 		if (typeof theorem_types == 'undefined' || (theorem_types != null && theorem_types.hasOwnProperty ("__kwargtrans__"))) {;
/* 000590 */ 			var theorem_types = null;
/* 000590 */ 		};
/* 000590 */ 		if (typeof shared_counter_formatter == 'undefined' || (shared_counter_formatter != null && shared_counter_formatter.hasOwnProperty ("__kwargtrans__"))) {;
/* 000590 */ 			var shared_counter_formatter = null;
/* 000590 */ 		};
/* 000590 */ 		if (typeof allowed_ref_label_prefixes == 'undefined' || (allowed_ref_label_prefixes != null && allowed_ref_label_prefixes.hasOwnProperty ("__kwargtrans__"))) {;
/* 000590 */ 			var allowed_ref_label_prefixes = null;
/* 000590 */ 		};
/* 000590 */ 		if (arguments.length) {
/* 000590 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000590 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000590 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000590 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000590 */ 					switch (__attrib0__) {
/* 000590 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000590 */ 						case 'environments': var environments = __allkwargs0__ [__attrib0__]; break;
/* 000590 */ 						case 'theorem_types': var theorem_types = __allkwargs0__ [__attrib0__]; break;
/* 000590 */ 						case 'shared_counter_formatter': var shared_counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000590 */ 						case 'allowed_ref_label_prefixes': var allowed_ref_label_prefixes = __allkwargs0__ [__attrib0__]; break;
/* 000590 */ 					}
/* 000590 */ 				}
/* 000590 */ 			}
/* 000590 */ 		}
/* 000590 */ 		else {
/* 000590 */ 		}
/* 000595 */ 		__call__ (__call__ (__super__, null, FeatureTheorems, '__init__'), null, self);
/* 000596 */ 		if (__t__ (environments === null)) {
/* 000597 */ 			var environments = __getitem__ (default_theorem_environments, 'defaultset');
/* 000597 */ 		}
/* 000598 */ 		if (__t__ (__call__ (isinstance, null, environments, str))) {
/* 000599 */ 			var environments = __getitem__ (default_theorem_environments, environments);
/* 000599 */ 		}
/* 000601 */ 		if (__t__ (theorem_types === null)) {
/* 000602 */ 			var theorem_types = default_theorem_theorem_types;
/* 000602 */ 		}
/* 000606 */ 		self.theorem_types = (function () {
/* 000606 */ 			var __accu0__ = [];
/* 000608 */ 			var __iterable0__ = (function () {
/* 000608 */ 				var __accu1__ = __call__ (dict, null, theorem_types);
/* 000608 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000608 */ 			}) ();
/* 000608 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000608 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000608 */ 				var thm_type = __left0__ [0];
/* 000608 */ 				var thm_type_spec = __left0__ [1];
/* 000608 */ 				if (__t__ (thm_type_spec !== null)) {
/* 000609 */ 					(function () {
/* 000609 */ 						var __accu1__ = __accu0__;
/* 000607 */ 						return __call__ (__accu1__.append, __accu1__, [thm_type, (function () {
/* 000607 */ 							var __accu2__ = self;
/* 000607 */ 							return __call__ (__accu2__._standardize_type_spec, __accu2__, thm_type, thm_type_spec);
/* 000607 */ 						}) ()]);
/* 000607 */ 					}) ();
/* 000607 */ 				}
/* 000607 */ 			}
/* 000607 */ 			return dict (__accu0__);
/* 000607 */ 		}) ();
/* 000614 */ 		self.environments = dict ({});
/* 000615 */ 		var __iterable0__ = (function () {
/* 000615 */ 			var __accu0__ = environments;
/* 000615 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000615 */ 		}) ();
/* 000615 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000615 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000615 */ 			var thm_type = __left0__ [0];
/* 000615 */ 			var env_list = __left0__ [1];
/* 000616 */ 			var __iterable1__ = (function () {
/* 000616 */ 				var __accu0__ = env_list;
/* 000616 */ 				return __call__ (__accu0__.py_items, __accu0__);
/* 000616 */ 			}) ();
/* 000616 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000616 */ 				var __left0__ = __getitem__ (__iterable1__, __index1__);
/* 000616 */ 				var env_name = __left0__ [0];
/* 000616 */ 				var thm_spec = __left0__ [1];
/* 000617 */ 				if (__t__ (__in__ ('env_name', self.environments))) {
/* 000618 */ 					var __except0__ = __call__ (ValueError, null, 'Duplicate definition of theorem environment ‘{}’'.format (env_name));
/* 000618 */ 					__except0__.__cause__ = null;
/* 000618 */ 					throw __except0__;
/* 000618 */ 				}
/* 000622 */ 				__setitem__ (self.environments, env_name, (function () {
/* 000622 */ 					var __accu0__ = self;
/* 000622 */ 					return __call__ (__accu0__._standardize_thm_spec, __accu0__, thm_type, env_name, thm_spec);
/* 000622 */ 				}) ());
/* 000622 */ 			}
/* 000622 */ 		}
/* 000626 */ 		self.shared_counter_formatter = __call__ (build_counter_formatter, null, shared_counter_formatter, default_thm_shared_counter_formatter_spec, __kwargtrans__ ({counter_formatter_id: '_theorems_shared'}));
/* 000632 */ 		var use_default_counter_formatter_spec = (function () {
/* 000632 */ 			var __accu0__ = self.shared_counter_formatter;
/* 000632 */ 			return __call__ (__accu0__.asdict, __accu0__);
/* 000632 */ 		}) ();
/* 000634 */ 		self.thm_counter_formatters = dict ({});
/* 000635 */ 		var __iterable0__ = (function () {
/* 000635 */ 			var __accu0__ = self.environments;
/* 000635 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000635 */ 		}) ();
/* 000635 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000635 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000635 */ 			var env_name = __left0__ [0];
/* 000635 */ 			var thm_spec = __left0__ [1];
/* 000636 */ 			var thm_type_spec = __getitem__ (self.theorem_types, __getitem__ (thm_spec, 'theorem_type'));
/* 000637 */ 			if (__t__ (!__t__ ((__getitem__ (thm_type_spec, 'numbered'))))) {
/* 000637 */ 				continue;
/* 000637 */ 			}
/* 000641 */ 			var counter_formatter_spec = (function () {
/* 000641 */ 				var __accu0__ = thm_type_spec;
/* 000641 */ 				return __call__ (__accu0__.py_get, __accu0__, 'counter_formatter', null);
/* 000641 */ 			}) ();
/* 000642 */ 			if (__t__ (counter_formatter_spec === null)) {
/* 000643 */ 				var counter_formatter_spec = dict ({});
/* 000643 */ 			}
/* 000644 */ 			else if (__t__ (__call__ (isinstance, null, counter_formatter_spec, str))) {
/* 000645 */ 				var counter_formatter_spec = dict ({'format_num': counter_formatter_spec});
/* 000645 */ 			}
/* 000646 */ 			else {
/* 000647 */ 				var counter_formatter_spec = __call__ (dict, null, counter_formatter_spec);
/* 000647 */ 			}
/* 000653 */ 			__setitem__ (counter_formatter_spec, 'prefix_display', (function () {
/* 000653 */ 				var __accu0__ = self;
/* 000653 */ 				return __call__ (__accu0__._make_counter_formatter_prefix_for_thm, __accu0__, env_name, thm_spec);
/* 000653 */ 			}) ());
/* 000657 */ 			__setitem__ (self.thm_counter_formatters, env_name, __call__ (build_counter_formatter, null, counter_formatter_spec, use_default_counter_formatter_spec, __kwargtrans__ ({counter_formatter_id: env_name})));
/* 000657 */ 		}
/* 000663 */ 		self.allowed_ref_label_prefixes = __call__ (list, null, (__t__ (allowed_ref_label_prefixes !== null) ? allowed_ref_label_prefixes : default_allowed_ref_label_prefixes));
/* 000663 */ 	});},
/* 000670 */ 	get _standardize_type_spec () {return __get__ (this, function (self, thm_type, thm_type_spec) {
/* 000670 */ 		if (arguments.length) {
/* 000670 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000670 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000670 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000670 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000670 */ 					switch (__attrib0__) {
/* 000670 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000670 */ 						case 'thm_type': var thm_type = __allkwargs0__ [__attrib0__]; break;
/* 000670 */ 						case 'thm_type_spec': var thm_type_spec = __allkwargs0__ [__attrib0__]; break;
/* 000670 */ 					}
/* 000670 */ 				}
/* 000670 */ 			}
/* 000670 */ 		}
/* 000670 */ 		else {
/* 000670 */ 		}
/* 000672 */ 		var spec = __call__ (dict, null, __getitem__ (default_theorem_theorem_types, 'theoremlike'));
/* 000673 */ 		(function () {
/* 000673 */ 			var __accu0__ = spec;
/* 000673 */ 			return __call__ (__accu0__.py_update, __accu0__, thm_type_spec);
/* 000673 */ 		}) ();
/* 000674 */ 		return spec;
/* 000674 */ 	});},
/* 000676 */ 	get _standardize_thm_spec () {return __get__ (this, function (self, thm_type, env_name, thm_spec) {
/* 000676 */ 		if (arguments.length) {
/* 000676 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000676 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000676 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000676 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000676 */ 					switch (__attrib0__) {
/* 000676 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000676 */ 						case 'thm_type': var thm_type = __allkwargs0__ [__attrib0__]; break;
/* 000676 */ 						case 'env_name': var env_name = __allkwargs0__ [__attrib0__]; break;
/* 000676 */ 						case 'thm_spec': var thm_spec = __allkwargs0__ [__attrib0__]; break;
/* 000676 */ 					}
/* 000676 */ 				}
/* 000676 */ 			}
/* 000676 */ 		}
/* 000676 */ 		else {
/* 000676 */ 		}
/* 000677 */ 		if (__t__ (thm_spec === true)) {
/* 000678 */ 			var thm_spec = env_name;
/* 000678 */ 		}
/* 000679 */ 		if (__t__ (__call__ (isinstance, null, thm_spec, str))) {
/* 000680 */ 			var thm_spec = dict ({'title': thm_spec});
/* 000680 */ 		}
/* 000681 */ 		else {
/* 000682 */ 			var thm_spec = __call__ (dict, null, thm_spec);
/* 000682 */ 		}
/* 000684 */ 		__setitem__ (thm_spec, 'theorem_type', thm_type);
/* 000687 */ 		var new_title_spec = dict ({});
/* 000688 */ 		var title = (function () {
/* 000688 */ 			var __accu0__ = thm_spec;
/* 000688 */ 			return __call__ (__accu0__.py_get, __accu0__, 'title', null);
/* 000688 */ 		}) ();
/* 000689 */ 		if (__t__ (title === null)) {
/* 000690 */ 			var title = env_name;
/* 000690 */ 		}
/* 000691 */ 		if (__t__ (__call__ (isinstance, null, title, str))) {
/* 000692 */ 			var title = dict ({'lowercase': dict ({'singular': title, 'plural': __add__ (title, 's')})});
/* 000692 */ 		}
/* 000695 */ 		if (__t__ (__in__ ('lowercase', title))) {
/* 000696 */ 			var lowercase = __getitem__ (title, 'lowercase');
/* 000697 */ 			if (__t__ (__call__ (isinstance, null, lowercase, str))) {
/* 000698 */ 				__setitem__ (new_title_spec, 'lowercase', dict ({'singular': lowercase, 'plural': __add__ (lowercase, 's')}));
/* 000698 */ 			}
/* 000701 */ 			else {
/* 000703 */ 				__setitem__ (new_title_spec, 'lowercase', lowercase);
/* 000703 */ 			}
/* 000703 */ 		}
/* 000704 */ 		else {
/* 000706 */ 			__setitem__ (new_title_spec, 'lowercase', dict ({'singular': '??', 'plural': '???'}));
/* 000706 */ 		}
/* 000708 */ 		if (__t__ (__in__ ('capital', title))) {
/* 000709 */ 			var capital = __getitem__ (title, 'capital');
/* 000710 */ 			if (__t__ (__call__ (isinstance, null, capital, str))) {
/* 000711 */ 				__setitem__ (new_title_spec, 'capital', dict ({'singular': capital, 'plural': __add__ (capital, 's')}));
/* 000711 */ 			}
/* 000714 */ 			else {
/* 000716 */ 				__setitem__ (new_title_spec, 'capital', capital);
/* 000716 */ 			}
/* 000716 */ 		}
/* 000717 */ 		else {
/* 000720 */ 			__setitem__ (new_title_spec, 'capital', dict ({'singular': (function () {
/* 000720 */ 				var __accu0__ = __getitem__ (__getitem__ (new_title_spec, 'lowercase'), 'singular');
/* 000720 */ 				return __call__ (__accu0__.capitalize, __accu0__);
/* 000721 */ 			}) (), 'plural': (function () {
/* 000721 */ 				var __accu0__ = __getitem__ (__getitem__ (new_title_spec, 'lowercase'), 'plural');
/* 000721 */ 				return __call__ (__accu0__.capitalize, __accu0__);
/* 000721 */ 			}) ()}));
/* 000721 */ 		}
/* 000724 */ 		if (__t__ (__in__ ('abbreviated', title))) {
/* 000725 */ 			var abbreviated = __getitem__ (title, 'abbreviated');
/* 000726 */ 			if (__t__ (__call__ (isinstance, null, abbreviated, str))) {
/* 000727 */ 				__setitem__ (new_title_spec, 'abbreviated', dict ({'singular': abbreviated, 'plural': __add__ (abbreviated, 's')}));
/* 000727 */ 			}
/* 000730 */ 			else {
/* 000732 */ 				__setitem__ (new_title_spec, 'abbreviated', abbreviated);
/* 000732 */ 			}
/* 000732 */ 		}
/* 000733 */ 		else {
/* 000737 */ 			__setitem__ (new_title_spec, 'abbreviated', dict ({'singular': __add__ (__getslice__ (__getitem__ (__getitem__ (new_title_spec, 'capital'), 'singular'), 0, 3, 1), '.'), 'plural': __add__ ((function () {
/* 000737 */ 				var __accu0__ = __getslice__ (__getitem__ (__getitem__ (new_title_spec, 'capital'), 'plural'), 0, 3, 1);
/* 000737 */ 				return __call__ (__accu0__.rstrip, __accu0__, 's');
/* 000737 */ 			}) (), 's.')}));
/* 000737 */ 		}
/* 000740 */ 		__setitem__ (thm_spec, 'title', new_title_spec);
/* 000742 */ 		return thm_spec;
/* 000742 */ 	});},
/* 000745 */ 	get _make_counter_formatter_prefix_for_thm () {return __get__ (this, function (self, env_name, thm_spec) {
/* 000745 */ 		if (arguments.length) {
/* 000745 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000745 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000745 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000745 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000745 */ 					switch (__attrib0__) {
/* 000745 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000745 */ 						case 'env_name': var env_name = __allkwargs0__ [__attrib0__]; break;
/* 000745 */ 						case 'thm_spec': var thm_spec = __allkwargs0__ [__attrib0__]; break;
/* 000745 */ 					}
/* 000745 */ 				}
/* 000745 */ 			}
/* 000745 */ 		}
/* 000745 */ 		else {
/* 000745 */ 		}
/* 000746 */ 		var prefix = dict ({});
/* 000748 */ 		var _add_space_values = function (x) {
/* 000748 */ 			if (arguments.length) {
/* 000748 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000748 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000748 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000748 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000748 */ 						switch (__attrib0__) {
/* 000748 */ 							case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000748 */ 						}
/* 000748 */ 					}
/* 000748 */ 				}
/* 000748 */ 			}
/* 000748 */ 			else {
/* 000748 */ 			}
/* 000749 */ 			return (function () {
/* 000749 */ 				var __accu0__ = [];
/* 000749 */ 				var __iterable0__ = (function () {
/* 000749 */ 					var __accu1__ = x;
/* 000749 */ 					return __call__ (__accu1__.py_items, __accu1__);
/* 000749 */ 				}) ();
/* 000749 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000749 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000749 */ 					var k = __left0__ [0];
/* 000749 */ 					var v = __left0__ [1];
/* 000749 */ 					(function () {
/* 000749 */ 						var __accu1__ = __accu0__;
/* 000749 */ 						return __call__ (__accu1__.append, __accu1__, [k, __add__ (v, '~')]);
/* 000749 */ 					}) ();
/* 000749 */ 				}
/* 000749 */ 				return dict (__accu0__);
/* 000749 */ 			}) ();
/* 000749 */ 		};
/* 000751 */ 		__setitem__ (prefix, 'lowercase', __call__ (_add_space_values, null, __getitem__ (__getitem__ (thm_spec, 'title'), 'lowercase')));
/* 000752 */ 		__setitem__ (prefix, 'capital', __call__ (_add_space_values, null, __getitem__ (__getitem__ (thm_spec, 'title'), 'capital')));
/* 000753 */ 		__setitem__ (prefix, 'abbreviated', __call__ (_add_space_values, null, __getitem__ (__getitem__ (thm_spec, 'title'), 'abbreviated')));
/* 000755 */ 		(function () {
/* 000755 */ 			var __accu0__ = prefix;
/* 000755 */ 			return __call__ (__accu0__.py_update, __accu0__, __getitem__ (prefix, 'capital'));
/* 000755 */ 		}) ();
/* 000757 */ 		return prefix;
/* 000757 */ 	});},
/* 000760 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000760 */ 		if (arguments.length) {
/* 000760 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000760 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000760 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000760 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000760 */ 					switch (__attrib0__) {
/* 000760 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000760 */ 					}
/* 000760 */ 				}
/* 000760 */ 			}
/* 000760 */ 		}
/* 000760 */ 		else {
/* 000760 */ 		}
/* 000762 */ 		var environment_specs = [];
/* 000764 */ 		var __iterable0__ = (function () {
/* 000764 */ 			var __accu0__ = self.environments;
/* 000764 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000764 */ 		}) ();
/* 000764 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000764 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000764 */ 			var env_name = __left0__ [0];
/* 000764 */ 			var thm_spec = __left0__ [1];
/* 000765 */ 			(function () {
/* 000765 */ 				var __accu0__ = environment_specs;
/* 000765 */ 				return __call__ (__accu0__.append, __accu0__, __call__ (TheoremEnvironment, null, __kwargtrans__ ({environmentname: env_name, theorem_spec: thm_spec, theorem_type_spec: __getitem__ (self.theorem_types, __getitem__ (thm_spec, 'theorem_type')), allowed_ref_label_prefixes: self.allowed_ref_label_prefixes})));
/* 000765 */ 			}) ();
/* 000765 */ 		}
/* 000772 */ 		return dict ({'environments': environment_specs});
/* 000772 */ 	});}
/* 000772 */ });
/* 000779 */ export var FeatureClass = FeatureTheorems;
/* 000007 */ 
//# sourceMappingURL=flm.feature.theorems.map