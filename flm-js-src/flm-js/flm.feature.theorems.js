/* 000001 */ // Transcrypt'ed from Python, 2024-12-04 22:08:15
/* 000007 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000018 */ import * as headings from './flm.feature.headings.js';
/* 000017 */ import {Feature} from './flm.feature._base.js';
/* 000015 */ import {Counter, CounterAlias, build_counter_formatter} from './flm.counter.js';
/* 000012 */ import * as flmspecinfo from './flm.flmspecinfo.js';
/* 000011 */ import {FLMArgumentSpec, make_invocable_node_instance} from './flm.flmenvironment.js';
/* 000009 */ import * as macrospec from './pylatexenc.macrospec.js';
/* 000008 */ import * as latexnodes_nodes from './pylatexenc.latexnodes.nodes.js';
/* 000007 */ import {ParsedArgumentsInfo, ParsingStateDelta} from './pylatexenc.latexnodes.js';
/* 000007 */ export {flmspecinfo, build_counter_formatter, make_invocable_node_instance, CounterAlias, Counter, headings, Feature, FLMArgumentSpec, ParsedArgumentsInfo, macrospec, ParsingStateDelta, latexnodes_nodes};
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
/* 000204 */ 		var thmtitle_nodelist = null;
/* 000205 */ 		if (__t__ (__getitem__ (flmarg_thmtitle, 'has_relation_ref'))) {
/* 000207 */ 			if (__t__ (__getitem__ (flmarg_thmtitle, 'relation_ref_show_ref'))) {
/* 000209 */ 				var __left0__ = __getitem__ (flmarg_thmtitle, 'relation_ref_target');
/* 000209 */ 				var ref_type = __left0__ [0];
/* 000209 */ 				var ref_label = __left0__ [1];
/* 000212 */ 				var thm_relation_ref_instance = (function () {
/* 000212 */ 					var __accu0__ = refs_mgr;
/* 000212 */ 					return __call__ (__accu0__.get_ref, __accu0__, ref_type, ref_label, node.latex_walker.resource_info);
/* 000212 */ 				}) ();
/* 000216 */ 				var thm_relation_ref_flm_text = thm_relation_ref_instance.formatted_ref_flm_text;
/* 000217 */ 				var thm_relation_ref_flm_frag = (function () {
/* 000217 */ 					var __accu0__ = render_context;
/* 000217 */ 					return __call__ (__accu0__.make_standalone_fragment, __accu0__, thm_relation_ref_flm_text, __kwargtrans__ ({what: 'Thm relation ref'}));
/* 000217 */ 				}) ();
/* 000221 */ 				var thmtitle_nodelist = thm_relation_ref_flm_frag.nodes;
/* 000221 */ 			}
/* 000221 */ 		}
/* 000223 */ 		else if (__t__ (__getitem__ (flmarg_thmtitle, 'nodelist') !== null)) {
/* 000225 */ 			var thmtitle_nodelist = __getitem__ (flmarg_thmtitle, 'nodelist');
/* 000225 */ 		}
/* 000228 */ 		if (__t__ (thmtitle_nodelist !== null)) {
/* 000230 */ 			var heading_nodelist = (function () {
/* 000230 */ 				var __accu0__ = node.latex_walker;
/* 000233 */ 				return __call__ (__accu0__.make_nodelist, __accu0__, __add__ (__add__ (__add__ (__call__ (list, null, title_heading_formatted_flm_frag_nodes), [(function () {
/* 000233 */ 					var __accu1__ = node.latex_walker;
/* 000233 */ 					return __call__ (__accu1__.make_node, __accu1__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: __getitem__ (self.theorem_type_spec, 'heading_title_pre'), pos: node.pos, pos_end: node.pos, parsing_state: node.parsing_state}));
/* 000241 */ 				}) ()]), __call__ (list, null, thmtitle_nodelist)), [(function () {
/* 000241 */ 					var __accu1__ = node.latex_walker;
/* 000241 */ 					return __call__ (__accu1__.make_node, __accu1__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: __getitem__ (self.theorem_type_spec, 'heading_title_post'), pos: node.pos, pos_end: node.pos, parsing_state: node.parsing_state}));
/* 000241 */ 				}) ()]), __kwargtrans__ ({parsing_state: node.parsing_state, pos: node.pos}));
/* 000241 */ 			}) ();
/* 000241 */ 		}
/* 000251 */ 		else {
/* 000255 */ 			var heading_nodelist = title_heading_formatted_flm_frag_nodes;
/* 000255 */ 		}
/* 000260 */ 		var heading_node = __call__ (make_invocable_node_instance, null, latexnodes_nodes.LatexMacroNode, __kwargtrans__ ({flm_spec: (function () {
/* 000260 */ 			var __accu0__ = headings;
/* 000260 */ 			return __call__ (__accu0__.HeadingMacro, __accu0__, __kwargtrans__ ({macroname: null, heading_level: __getitem__ (self.theorem_type_spec, 'theorem_heading_level'), inline_heading: true}));
/* 000260 */ 		}) (), args: dict ({'text': heading_nodelist}), latex_walker: node.latex_walker, parsing_state: node.parsing_state}));
/* 000272 */ 		heading_node.flm_heading_target_id = target_id;
/* 000288 */ 		var final_content_node = (function () {
/* 000288 */ 			var __accu0__ = node.latex_walker;
/* 000288 */ 			return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: __getitem__ (self.theorem_type_spec, 'body_final_content'), pos: node.pos, pos_end: node.pos, parsing_state: node.parsing_state}));
/* 000288 */ 		}) ();
/* 000295 */ 		final_content_node.flm_strip_preceding_whitespace = true;
/* 000298 */ 		if (__t__ (__getitem__ (self.theorem_type_spec, 'body_final_content'))) {
/* 000303 */ 			var body_nodelist = __add__ (__add__ ([heading_node], __call__ (list, null, node.nodelist)), [final_content_node]);
/* 000303 */ 		}
/* 000306 */ 		else {
/* 000313 */ 			var body_nodelist = __add__ ([heading_node], __call__ (list, null, node.nodelist));
/* 000313 */ 		}
/* 000316 */ 		var body_nodelist = (function () {
/* 000316 */ 			var __accu0__ = node.latex_walker;
/* 000316 */ 			return __call__ (__accu0__.make_nodelist, __accu0__, body_nodelist, __kwargtrans__ ({parsing_state: node.parsing_state}));
/* 000316 */ 		}) ();
/* 000321 */ 		var rendered_contents = (function () {
/* 000321 */ 			var __accu0__ = fragment_renderer;
/* 000321 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, body_nodelist, render_context);
/* 000321 */ 		}) ();
/* 000326 */ 		return (function () {
/* 000326 */ 			var __accu0__ = fragment_renderer;
/* 000326 */ 			return __call__ (__accu0__.render_semantic_block, __accu0__, rendered_contents, __getitem__ (self.theorem_spec, 'theorem_type'), render_context, __kwargtrans__ ({annotations: [self.environmentname]}));
/* 000326 */ 		}) ();
/* 000326 */ 	});},
/* 000333 */ 	get recompose_pure_latex () {return __get__ (this, function (self, node, recomposer, visited_results_arguments, visited_results_body) {
/* 000333 */ 		var kwargs = dict ();
/* 000333 */ 		if (arguments.length) {
/* 000333 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000333 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000333 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000333 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000333 */ 					switch (__attrib0__) {
/* 000333 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000333 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000333 */ 						case 'recomposer': var recomposer = __allkwargs0__ [__attrib0__]; break;
/* 000333 */ 						case 'visited_results_arguments': var visited_results_arguments = __allkwargs0__ [__attrib0__]; break;
/* 000333 */ 						case 'visited_results_body': var visited_results_body = __allkwargs0__ [__attrib0__]; break;
/* 000333 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000333 */ 					}
/* 000333 */ 				}
/* 000333 */ 				delete kwargs.__kwargtrans__;
/* 000333 */ 			}
/* 000333 */ 		}
/* 000333 */ 		else {
/* 000333 */ 		}
/* 000336 */ 		var s = __add__ (__add__ ('\\begin{', node.environmentname), '}');
/* 000338 */ 		if (__t__ (!__t__ ((__getitem__ (node.flmarg_thmtitle, 'has_relation_ref'))))) {
/* 000340 */ 			if (__t__ (__getitem__ (visited_results_arguments, 0) !== null)) {
/* 000341 */ 				var s = __call__ (__iadd__, null, s, __getitem__ (visited_results_arguments, 0));
/* 000341 */ 			}
/* 000341 */ 		}
/* 000342 */ 		else {
/* 000343 */ 			var __left0__ = __getitem__ (node.flmarg_thmtitle, 'relation_ref_target');
/* 000343 */ 			var rel_ref_type = __left0__ [0];
/* 000343 */ 			var rel_ref_label = __left0__ [1];
/* 000344 */ 			var safe_label_info = (function () {
/* 000344 */ 				var __accu0__ = recomposer;
/* 000344 */ 				return __call__ (__accu0__.make_safe_label, __accu0__, 'ref', rel_ref_type, rel_ref_label);
/* 000344 */ 			}) ();
/* 000345 */ 			var s = __call__ (__iadd__, null, s, '[*');
/* 000346 */ 			if (__t__ (!__t__ ((__getitem__ (node.flmarg_thmtitle, 'relation_ref_show_ref'))))) {
/* 000347 */ 				var s = __call__ (__iadd__, null, s, '*');
/* 000347 */ 			}
/* 000348 */ 			var s = __call__ (__iadd__, null, s, __getitem__ (safe_label_info, 'safe_label'));
/* 000349 */ 			var s = __call__ (__iadd__, null, s, ']');
/* 000349 */ 		}
/* 000352 */ 		var __iterable0__ = node.flmarg_labels;
/* 000352 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000352 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000352 */ 			var ref_type = __left0__ [0];
/* 000352 */ 			var ref_label = __left0__ [1];
/* 000353 */ 			var safe_label_info = (function () {
/* 000353 */ 				var __accu0__ = recomposer;
/* 000353 */ 				return __call__ (__accu0__.make_safe_label, __accu0__, 'ref', ref_type, ref_label);
/* 000353 */ 			}) ();
/* 000354 */ 			var s = __call__ (__iadd__, null, s, __add__ (__add__ ('\\label{', __getitem__ (safe_label_info, 'safe_label')), '}'));
/* 000354 */ 		}
/* 000356 */ 		var s = __call__ (__iadd__, null, s, (function () {
/* 000356 */ 			var __accu0__ = '';
/* 000356 */ 			return __call__ (__accu0__.join, __accu0__, visited_results_body);
/* 000356 */ 		}) ());
/* 000358 */ 		var s = __call__ (__iadd__, null, s, __add__ (__add__ ('\\end{', node.environmentname), '}'));
/* 000360 */ 		return s;
/* 000360 */ 	});}
/* 000360 */ });
/* 000364 */ export var _default_theorem_environments_simpleset = dict ({'theoremlike': dict ({'theorem': dict ({'title': dict ({'lowercase': 'theorem', 'abbreviated': dict ({'singular': 'Thm.', 'plural': 'Thms.'})})}), 'proposition': dict ({'title': dict ({'lowercase': 'proposition', 'abbreviated': dict ({'singular': 'Prop.', 'plural': 'Props.'})})}), 'lemma': dict ({'title': dict ({'lowercase': 'lemma', 'abbreviated': dict ({'singular': 'Lem.', 'plural': 'Lems.'})})}), 'corollary': dict ({'title': dict ({'lowercase': 'corollary', 'abbreviated': dict ({'singular': 'Cor.', 'plural': 'Cors.'})})})}), 'definitionlike': dict ({'definition': dict ({'title': dict ({'lowercase': 'definition', 'abbreviated': dict ({'singular': 'Def.', 'plural': 'Defs.'})})})}), 'prooflike': dict ({'proof': dict ({'title': dict ({'lowercase': 'proof', 'abbreviated': dict ({'singular': 'Proof', 'plural': 'Proofs'})})})})});
/* 000459 */ export var _default_theorem_environments_defaultset = dict ({'theoremlike': __call__ (dict, null, __getitem__ (_default_theorem_environments_simpleset, 'theoremlike'), __kwargtrans__ (dict ({'conjecture': dict ({'title': dict ({'lowercase': 'conjecture', 'abbreviated': dict ({'singular': 'Conj.', 'plural': 'Conjs.'})})})}))), 'definitionlike': __call__ (dict, null, __getitem__ (_default_theorem_environments_simpleset, 'definitionlike'), __kwargtrans__ (dict ({'remark': dict ({'title': dict ({'lowercase': 'remark', 'abbreviated': dict ({'singular': 'Rem.', 'plural': 'Rems.'})})})}))), 'prooflike': __call__ (dict, null, __getitem__ (_default_theorem_environments_simpleset, 'prooflike'))});
/* 000511 */ export var _default_theorem_environments_richset = dict ({'theoremlike': __call__ (dict, null, __getitem__ (_default_theorem_environments_defaultset, 'theoremlike')), 'definitionlike': __call__ (dict, null, __getitem__ (_default_theorem_environments_defaultset, 'definitionlike'), __kwargtrans__ (dict ({'idea': dict ({'title': dict ({'lowercase': 'idea', 'abbreviated': dict ({'singular': 'Idea', 'plural': 'Ideas'})})}), 'question': dict ({'title': dict ({'lowercase': 'question', 'abbreviated': dict ({'singular': 'Qtn.', 'plural': 'Qtns.'})})}), 'claim': dict ({'title': dict ({'lowercase': 'claim', 'abbreviated': dict ({'singular': 'Clm.', 'plural': 'Clms.'})})}), 'observation': dict ({'title': dict ({'lowercase': 'observation', 'abbreviated': dict ({'singular': 'Obs.', 'plural': 'Obs.'})})}), 'problem': dict ({'title': dict ({'lowercase': 'problem', 'abbreviated': dict ({'singular': 'Prob.', 'plural': 'Probs.'})})})}))), 'prooflike': __call__ (dict, null, __getitem__ (_default_theorem_environments_defaultset, 'prooflike'))});
/* 000515 */ export var default_theorem_environments = dict ({'simpleset': _default_theorem_environments_simpleset, 'defaultset': _default_theorem_environments_defaultset, 'richset': _default_theorem_environments_richset});
/* 000521 */ export var default_theorem_theorem_types = dict ({'theoremlike': dict ({'numbered': true, 'shared_numbering': true, 'counter_formatter': null, 'theorem_heading_level': 'theorem', 'heading_title_pre': ' (', 'heading_title_post': ')', 'title_enable_relation_ref': false, 'body_final_content': ''}), 'definitionlike': dict ({'numbered': true, 'shared_numbering': true, 'counter_formatter': null, 'theorem_heading_level': 'theorem', 'heading_title_pre': ' (', 'heading_title_post': ')', 'title_enable_relation_ref': false}), 'prooflike': dict ({'numbered': false, 'title_enable_relation_ref': true, 'body_final_content': '\xa0□'})});
/* 000553 */ export var default_thm_shared_counter_formatter_spec = dict ({'format_num': 'arabic', 'delimiters': tuple (['', '']), 'join_spec': 'default'});
/* 000560 */ export var default_allowed_ref_label_prefixes = ['thm', 'prop', 'cor', 'lem', 'rem', 'def', 'dfn', 'x', 'topic'];
/* 000567 */ export var FeatureTheorems =  __class__ ('FeatureTheorems', [Feature], {
/* 000567 */ 	__module__: __name__,
/* 000569 */ 	feature_name: 'theorems',
/* 000571 */ 	feature_dependencies: ['refs'],
/* 000582 */ 	feature_default_config: dict ({'environments': __getitem__ (default_theorem_environments, 'defaultset'), 'theorem_types': default_theorem_theorem_types, 'shared_counter_formatter': 'arabic', 'allowed_ref_label_prefixes': default_allowed_ref_label_prefixes}),
/* 000582 */ 	RenderManager: __class__ ('RenderManager', [Feature.RenderManager], {
/* 000582 */ 		__module__: __name__,
/* 000584 */ 		get initialize () {return __get__ (this, function (self) {
/* 000584 */ 			if (arguments.length) {
/* 000584 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000584 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000584 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000584 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000584 */ 						switch (__attrib0__) {
/* 000584 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000584 */ 						}
/* 000584 */ 					}
/* 000584 */ 				}
/* 000584 */ 			}
/* 000584 */ 			else {
/* 000584 */ 			}
/* 000585 */ 			self.shared_counter = __call__ (Counter, null, self.feature.shared_counter_formatter);
/* 000587 */ 			var refs_mgr = (function () {
/* 000587 */ 				var __accu0__ = self.render_context;
/* 000587 */ 				return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000587 */ 			}) ();
/* 000589 */ 			self.counters = dict ({});
/* 000590 */ 			var __iterable0__ = (function () {
/* 000590 */ 				var __accu0__ = self.feature.thm_counter_formatters;
/* 000590 */ 				return __call__ (__accu0__.py_items, __accu0__);
/* 000590 */ 			}) ();
/* 000590 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000590 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000590 */ 				var env_name = __left0__ [0];
/* 000590 */ 				var counter_formatter = __left0__ [1];
/* 000591 */ 				var thm_spec = __getitem__ (self.feature.environments, env_name);
/* 000592 */ 				var thm_type_spec = __getitem__ (self.feature.theorem_types, __getitem__ (thm_spec, 'theorem_type'));
/* 000593 */ 				if (__t__ (__getitem__ (thm_type_spec, 'shared_numbering'))) {
/* 000594 */ 					__setitem__ (self.counters, env_name, __call__ (CounterAlias, null, __kwargtrans__ ({counter_formatter: counter_formatter, alias_counter: self.shared_counter})));
/* 000594 */ 				}
/* 000597 */ 				else {
/* 000599 */ 					__setitem__ (self.counters, env_name, __call__ (Counter, null, __kwargtrans__ ({counter_formatter: counter_formatter})));
/* 000599 */ 				}
/* 000604 */ 				(function () {
/* 000604 */ 					var __accu0__ = refs_mgr;
/* 000604 */ 					return __call__ (__accu0__.register_counter_formatter, __accu0__, __kwargtrans__ ({counter_formatter: counter_formatter}));
/* 000604 */ 				}) ();
/* 000604 */ 			}
/* 000604 */ 		});}
/* 000604 */ 	}),
/* 000609 */ 	get __init__ () {return __get__ (this, function (self, environments, theorem_types, shared_counter_formatter, allowed_ref_label_prefixes) {
/* 000609 */ 		if (typeof environments == 'undefined' || (environments != null && environments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000609 */ 			var environments = null;
/* 000609 */ 		};
/* 000609 */ 		if (typeof theorem_types == 'undefined' || (theorem_types != null && theorem_types.hasOwnProperty ("__kwargtrans__"))) {;
/* 000609 */ 			var theorem_types = null;
/* 000609 */ 		};
/* 000609 */ 		if (typeof shared_counter_formatter == 'undefined' || (shared_counter_formatter != null && shared_counter_formatter.hasOwnProperty ("__kwargtrans__"))) {;
/* 000609 */ 			var shared_counter_formatter = null;
/* 000609 */ 		};
/* 000609 */ 		if (typeof allowed_ref_label_prefixes == 'undefined' || (allowed_ref_label_prefixes != null && allowed_ref_label_prefixes.hasOwnProperty ("__kwargtrans__"))) {;
/* 000609 */ 			var allowed_ref_label_prefixes = null;
/* 000609 */ 		};
/* 000609 */ 		if (arguments.length) {
/* 000609 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000609 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000609 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000609 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000609 */ 					switch (__attrib0__) {
/* 000609 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000609 */ 						case 'environments': var environments = __allkwargs0__ [__attrib0__]; break;
/* 000609 */ 						case 'theorem_types': var theorem_types = __allkwargs0__ [__attrib0__]; break;
/* 000609 */ 						case 'shared_counter_formatter': var shared_counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000609 */ 						case 'allowed_ref_label_prefixes': var allowed_ref_label_prefixes = __allkwargs0__ [__attrib0__]; break;
/* 000609 */ 					}
/* 000609 */ 				}
/* 000609 */ 			}
/* 000609 */ 		}
/* 000609 */ 		else {
/* 000609 */ 		}
/* 000614 */ 		__call__ (__call__ (__super__, null, FeatureTheorems, '__init__'), null, self);
/* 000615 */ 		if (__t__ (environments === null)) {
/* 000616 */ 			var environments = __getitem__ (default_theorem_environments, 'defaultset');
/* 000616 */ 		}
/* 000617 */ 		if (__t__ (__call__ (isinstance, null, environments, str))) {
/* 000618 */ 			var environments = __getitem__ (default_theorem_environments, environments);
/* 000618 */ 		}
/* 000620 */ 		if (__t__ (theorem_types === null)) {
/* 000621 */ 			var theorem_types = default_theorem_theorem_types;
/* 000621 */ 		}
/* 000625 */ 		self.theorem_types = (function () {
/* 000625 */ 			var __accu0__ = [];
/* 000627 */ 			var __iterable0__ = (function () {
/* 000627 */ 				var __accu1__ = __call__ (dict, null, theorem_types);
/* 000627 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000627 */ 			}) ();
/* 000627 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000627 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000627 */ 				var thm_type = __left0__ [0];
/* 000627 */ 				var thm_type_spec = __left0__ [1];
/* 000627 */ 				if (__t__ (thm_type_spec !== null)) {
/* 000628 */ 					(function () {
/* 000628 */ 						var __accu1__ = __accu0__;
/* 000626 */ 						return __call__ (__accu1__.append, __accu1__, [thm_type, (function () {
/* 000626 */ 							var __accu2__ = self;
/* 000626 */ 							return __call__ (__accu2__._standardize_type_spec, __accu2__, thm_type, thm_type_spec);
/* 000626 */ 						}) ()]);
/* 000626 */ 					}) ();
/* 000626 */ 				}
/* 000626 */ 			}
/* 000626 */ 			return dict (__accu0__);
/* 000626 */ 		}) ();
/* 000633 */ 		self.environments = dict ({});
/* 000634 */ 		var __iterable0__ = (function () {
/* 000634 */ 			var __accu0__ = environments;
/* 000634 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000634 */ 		}) ();
/* 000634 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000634 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000634 */ 			var thm_type = __left0__ [0];
/* 000634 */ 			var env_list = __left0__ [1];
/* 000635 */ 			var __iterable1__ = (function () {
/* 000635 */ 				var __accu0__ = env_list;
/* 000635 */ 				return __call__ (__accu0__.py_items, __accu0__);
/* 000635 */ 			}) ();
/* 000635 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000635 */ 				var __left0__ = __getitem__ (__iterable1__, __index1__);
/* 000635 */ 				var env_name = __left0__ [0];
/* 000635 */ 				var thm_spec = __left0__ [1];
/* 000636 */ 				if (__t__ (__in__ ('env_name', self.environments))) {
/* 000637 */ 					var __except0__ = __call__ (ValueError, null, 'Duplicate definition of theorem environment ‘{}’'.format (env_name));
/* 000637 */ 					__except0__.__cause__ = null;
/* 000637 */ 					throw __except0__;
/* 000637 */ 				}
/* 000641 */ 				__setitem__ (self.environments, env_name, (function () {
/* 000641 */ 					var __accu0__ = self;
/* 000641 */ 					return __call__ (__accu0__._standardize_thm_spec, __accu0__, thm_type, env_name, thm_spec);
/* 000641 */ 				}) ());
/* 000641 */ 			}
/* 000641 */ 		}
/* 000645 */ 		self.shared_counter_formatter = __call__ (build_counter_formatter, null, shared_counter_formatter, default_thm_shared_counter_formatter_spec, __kwargtrans__ ({counter_formatter_id: '_theorems_shared'}));
/* 000651 */ 		var use_default_counter_formatter_spec = (function () {
/* 000651 */ 			var __accu0__ = self.shared_counter_formatter;
/* 000651 */ 			return __call__ (__accu0__.asdict, __accu0__);
/* 000651 */ 		}) ();
/* 000653 */ 		self.thm_counter_formatters = dict ({});
/* 000654 */ 		var __iterable0__ = (function () {
/* 000654 */ 			var __accu0__ = self.environments;
/* 000654 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000654 */ 		}) ();
/* 000654 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000654 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000654 */ 			var env_name = __left0__ [0];
/* 000654 */ 			var thm_spec = __left0__ [1];
/* 000655 */ 			var thm_type_spec = __getitem__ (self.theorem_types, __getitem__ (thm_spec, 'theorem_type'));
/* 000656 */ 			if (__t__ (!__t__ ((__getitem__ (thm_type_spec, 'numbered'))))) {
/* 000656 */ 				continue;
/* 000656 */ 			}
/* 000660 */ 			var counter_formatter_spec = (function () {
/* 000660 */ 				var __accu0__ = thm_type_spec;
/* 000660 */ 				return __call__ (__accu0__.py_get, __accu0__, 'counter_formatter', null);
/* 000660 */ 			}) ();
/* 000661 */ 			if (__t__ (counter_formatter_spec === null)) {
/* 000662 */ 				var counter_formatter_spec = dict ({});
/* 000662 */ 			}
/* 000663 */ 			else if (__t__ (__call__ (isinstance, null, counter_formatter_spec, str))) {
/* 000664 */ 				var counter_formatter_spec = dict ({'format_num': counter_formatter_spec});
/* 000664 */ 			}
/* 000665 */ 			else {
/* 000666 */ 				var counter_formatter_spec = __call__ (dict, null, counter_formatter_spec);
/* 000666 */ 			}
/* 000672 */ 			__setitem__ (counter_formatter_spec, 'prefix_display', (function () {
/* 000672 */ 				var __accu0__ = self;
/* 000672 */ 				return __call__ (__accu0__._make_counter_formatter_prefix_for_thm, __accu0__, env_name, thm_spec);
/* 000672 */ 			}) ());
/* 000676 */ 			__setitem__ (self.thm_counter_formatters, env_name, __call__ (build_counter_formatter, null, counter_formatter_spec, use_default_counter_formatter_spec, __kwargtrans__ ({counter_formatter_id: env_name})));
/* 000676 */ 		}
/* 000682 */ 		self.allowed_ref_label_prefixes = __call__ (list, null, (__t__ (allowed_ref_label_prefixes !== null) ? allowed_ref_label_prefixes : default_allowed_ref_label_prefixes));
/* 000682 */ 	});},
/* 000689 */ 	get _standardize_type_spec () {return __get__ (this, function (self, thm_type, thm_type_spec) {
/* 000689 */ 		if (arguments.length) {
/* 000689 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000689 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000689 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000689 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000689 */ 					switch (__attrib0__) {
/* 000689 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000689 */ 						case 'thm_type': var thm_type = __allkwargs0__ [__attrib0__]; break;
/* 000689 */ 						case 'thm_type_spec': var thm_type_spec = __allkwargs0__ [__attrib0__]; break;
/* 000689 */ 					}
/* 000689 */ 				}
/* 000689 */ 			}
/* 000689 */ 		}
/* 000689 */ 		else {
/* 000689 */ 		}
/* 000691 */ 		var spec = __call__ (dict, null, __getitem__ (default_theorem_theorem_types, 'theoremlike'));
/* 000692 */ 		(function () {
/* 000692 */ 			var __accu0__ = spec;
/* 000692 */ 			return __call__ (__accu0__.py_update, __accu0__, thm_type_spec);
/* 000692 */ 		}) ();
/* 000693 */ 		return spec;
/* 000693 */ 	});},
/* 000695 */ 	get _standardize_thm_spec () {return __get__ (this, function (self, thm_type, env_name, thm_spec) {
/* 000695 */ 		if (arguments.length) {
/* 000695 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000695 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000695 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000695 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000695 */ 					switch (__attrib0__) {
/* 000695 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000695 */ 						case 'thm_type': var thm_type = __allkwargs0__ [__attrib0__]; break;
/* 000695 */ 						case 'env_name': var env_name = __allkwargs0__ [__attrib0__]; break;
/* 000695 */ 						case 'thm_spec': var thm_spec = __allkwargs0__ [__attrib0__]; break;
/* 000695 */ 					}
/* 000695 */ 				}
/* 000695 */ 			}
/* 000695 */ 		}
/* 000695 */ 		else {
/* 000695 */ 		}
/* 000696 */ 		if (__t__ (thm_spec === true)) {
/* 000697 */ 			var thm_spec = env_name;
/* 000697 */ 		}
/* 000698 */ 		if (__t__ (__call__ (isinstance, null, thm_spec, str))) {
/* 000699 */ 			var thm_spec = dict ({'title': thm_spec});
/* 000699 */ 		}
/* 000700 */ 		else {
/* 000701 */ 			var thm_spec = __call__ (dict, null, thm_spec);
/* 000701 */ 		}
/* 000703 */ 		__setitem__ (thm_spec, 'theorem_type', thm_type);
/* 000706 */ 		var new_title_spec = dict ({});
/* 000707 */ 		var title = (function () {
/* 000707 */ 			var __accu0__ = thm_spec;
/* 000707 */ 			return __call__ (__accu0__.py_get, __accu0__, 'title', null);
/* 000707 */ 		}) ();
/* 000708 */ 		if (__t__ (title === null)) {
/* 000709 */ 			var title = env_name;
/* 000709 */ 		}
/* 000710 */ 		if (__t__ (__call__ (isinstance, null, title, str))) {
/* 000711 */ 			var title = dict ({'lowercase': dict ({'singular': title, 'plural': __add__ (title, 's')})});
/* 000711 */ 		}
/* 000714 */ 		if (__t__ (__in__ ('lowercase', title))) {
/* 000715 */ 			var lowercase = __getitem__ (title, 'lowercase');
/* 000716 */ 			if (__t__ (__call__ (isinstance, null, lowercase, str))) {
/* 000717 */ 				__setitem__ (new_title_spec, 'lowercase', dict ({'singular': lowercase, 'plural': __add__ (lowercase, 's')}));
/* 000717 */ 			}
/* 000720 */ 			else {
/* 000722 */ 				__setitem__ (new_title_spec, 'lowercase', lowercase);
/* 000722 */ 			}
/* 000722 */ 		}
/* 000723 */ 		else {
/* 000725 */ 			__setitem__ (new_title_spec, 'lowercase', dict ({'singular': '??', 'plural': '???'}));
/* 000725 */ 		}
/* 000727 */ 		if (__t__ (__in__ ('capital', title))) {
/* 000728 */ 			var capital = __getitem__ (title, 'capital');
/* 000729 */ 			if (__t__ (__call__ (isinstance, null, capital, str))) {
/* 000730 */ 				__setitem__ (new_title_spec, 'capital', dict ({'singular': capital, 'plural': __add__ (capital, 's')}));
/* 000730 */ 			}
/* 000733 */ 			else {
/* 000735 */ 				__setitem__ (new_title_spec, 'capital', capital);
/* 000735 */ 			}
/* 000735 */ 		}
/* 000736 */ 		else {
/* 000739 */ 			__setitem__ (new_title_spec, 'capital', dict ({'singular': (function () {
/* 000739 */ 				var __accu0__ = __getitem__ (__getitem__ (new_title_spec, 'lowercase'), 'singular');
/* 000739 */ 				return __call__ (__accu0__.capitalize, __accu0__);
/* 000740 */ 			}) (), 'plural': (function () {
/* 000740 */ 				var __accu0__ = __getitem__ (__getitem__ (new_title_spec, 'lowercase'), 'plural');
/* 000740 */ 				return __call__ (__accu0__.capitalize, __accu0__);
/* 000740 */ 			}) ()}));
/* 000740 */ 		}
/* 000743 */ 		if (__t__ (__in__ ('abbreviated', title))) {
/* 000744 */ 			var abbreviated = __getitem__ (title, 'abbreviated');
/* 000745 */ 			if (__t__ (__call__ (isinstance, null, abbreviated, str))) {
/* 000746 */ 				__setitem__ (new_title_spec, 'abbreviated', dict ({'singular': abbreviated, 'plural': __add__ (abbreviated, 's')}));
/* 000746 */ 			}
/* 000749 */ 			else {
/* 000751 */ 				__setitem__ (new_title_spec, 'abbreviated', abbreviated);
/* 000751 */ 			}
/* 000751 */ 		}
/* 000752 */ 		else {
/* 000756 */ 			__setitem__ (new_title_spec, 'abbreviated', dict ({'singular': __add__ (__getslice__ (__getitem__ (__getitem__ (new_title_spec, 'capital'), 'singular'), 0, 3, 1), '.'), 'plural': __add__ ((function () {
/* 000756 */ 				var __accu0__ = __getslice__ (__getitem__ (__getitem__ (new_title_spec, 'capital'), 'plural'), 0, 3, 1);
/* 000756 */ 				return __call__ (__accu0__.rstrip, __accu0__, 's');
/* 000756 */ 			}) (), 's.')}));
/* 000756 */ 		}
/* 000759 */ 		__setitem__ (thm_spec, 'title', new_title_spec);
/* 000761 */ 		return thm_spec;
/* 000761 */ 	});},
/* 000764 */ 	get _make_counter_formatter_prefix_for_thm () {return __get__ (this, function (self, env_name, thm_spec) {
/* 000764 */ 		if (arguments.length) {
/* 000764 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000764 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000764 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000764 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000764 */ 					switch (__attrib0__) {
/* 000764 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000764 */ 						case 'env_name': var env_name = __allkwargs0__ [__attrib0__]; break;
/* 000764 */ 						case 'thm_spec': var thm_spec = __allkwargs0__ [__attrib0__]; break;
/* 000764 */ 					}
/* 000764 */ 				}
/* 000764 */ 			}
/* 000764 */ 		}
/* 000764 */ 		else {
/* 000764 */ 		}
/* 000765 */ 		var prefix = dict ({});
/* 000767 */ 		var _add_space_values = function (x) {
/* 000767 */ 			if (arguments.length) {
/* 000767 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000767 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000767 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000767 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000767 */ 						switch (__attrib0__) {
/* 000767 */ 							case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000767 */ 						}
/* 000767 */ 					}
/* 000767 */ 				}
/* 000767 */ 			}
/* 000767 */ 			else {
/* 000767 */ 			}
/* 000768 */ 			return (function () {
/* 000768 */ 				var __accu0__ = [];
/* 000768 */ 				var __iterable0__ = (function () {
/* 000768 */ 					var __accu1__ = x;
/* 000768 */ 					return __call__ (__accu1__.py_items, __accu1__);
/* 000768 */ 				}) ();
/* 000768 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000768 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000768 */ 					var k = __left0__ [0];
/* 000768 */ 					var v = __left0__ [1];
/* 000768 */ 					(function () {
/* 000768 */ 						var __accu1__ = __accu0__;
/* 000768 */ 						return __call__ (__accu1__.append, __accu1__, [k, __add__ (v, '~')]);
/* 000768 */ 					}) ();
/* 000768 */ 				}
/* 000768 */ 				return dict (__accu0__);
/* 000768 */ 			}) ();
/* 000768 */ 		};
/* 000770 */ 		__setitem__ (prefix, 'lowercase', __call__ (_add_space_values, null, __getitem__ (__getitem__ (thm_spec, 'title'), 'lowercase')));
/* 000771 */ 		__setitem__ (prefix, 'capital', __call__ (_add_space_values, null, __getitem__ (__getitem__ (thm_spec, 'title'), 'capital')));
/* 000772 */ 		__setitem__ (prefix, 'abbreviated', __call__ (_add_space_values, null, __getitem__ (__getitem__ (thm_spec, 'title'), 'abbreviated')));
/* 000774 */ 		(function () {
/* 000774 */ 			var __accu0__ = prefix;
/* 000774 */ 			return __call__ (__accu0__.py_update, __accu0__, __getitem__ (prefix, 'capital'));
/* 000774 */ 		}) ();
/* 000776 */ 		return prefix;
/* 000776 */ 	});},
/* 000779 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000779 */ 		if (arguments.length) {
/* 000779 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000779 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000779 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000779 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000779 */ 					switch (__attrib0__) {
/* 000779 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000779 */ 					}
/* 000779 */ 				}
/* 000779 */ 			}
/* 000779 */ 		}
/* 000779 */ 		else {
/* 000779 */ 		}
/* 000781 */ 		var environment_specs = [];
/* 000783 */ 		var __iterable0__ = (function () {
/* 000783 */ 			var __accu0__ = self.environments;
/* 000783 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000783 */ 		}) ();
/* 000783 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000783 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000783 */ 			var env_name = __left0__ [0];
/* 000783 */ 			var thm_spec = __left0__ [1];
/* 000784 */ 			(function () {
/* 000784 */ 				var __accu0__ = environment_specs;
/* 000784 */ 				return __call__ (__accu0__.append, __accu0__, __call__ (TheoremEnvironment, null, __kwargtrans__ ({environmentname: env_name, theorem_spec: thm_spec, theorem_type_spec: __getitem__ (self.theorem_types, __getitem__ (thm_spec, 'theorem_type')), allowed_ref_label_prefixes: self.allowed_ref_label_prefixes})));
/* 000784 */ 			}) ();
/* 000784 */ 		}
/* 000791 */ 		return dict ({'environments': environment_specs});
/* 000791 */ 	});}
/* 000791 */ });
/* 000798 */ export var FeatureClass = FeatureTheorems;
/* 000007 */ 
//# sourceMappingURL=flm.feature.theorems.map