/* 000001 */ // Transcrypt'ed from Python, 2025-02-17 12:39:33
/* 000007 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000021 */ import * as headings from './flm.feature.headings.js';
/* 000020 */ import {Feature} from './flm.feature._base.js';
/* 000018 */ import {Counter, CounterAlias, build_counter_formatter} from './flm.counter.js';
/* 000015 */ import * as flmspecinfo from './flm.flmspecinfo.js';
/* 000014 */ import {FLMArgumentSpec, make_invocable_node_instance} from './flm.flmenvironment.js';
/* 000012 */ import * as macrospec from './pylatexenc.macrospec.js';
/* 000009 */ import {LatexTackOnInformationFieldMacrosParser} from './pylatexenc.latexnodes.parsers.js';
/* 000008 */ import * as latexnodes_nodes from './pylatexenc.latexnodes.nodes.js';
/* 000007 */ import {ParsedArgumentsInfo, ParsingStateDelta} from './pylatexenc.latexnodes.js';
/* 000007 */ export {Feature, headings, CounterAlias, FLMArgumentSpec, latexnodes_nodes, ParsingStateDelta, LatexTackOnInformationFieldMacrosParser, flmspecinfo, make_invocable_node_instance, ParsedArgumentsInfo, build_counter_formatter, Counter, macrospec};
/* 000001 */ var __name__ = 'flm.feature.theorems';
/* 000027 */ export var optional_text_arg = __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: '[', argname: 'thmtitle', flm_doc: 'An optional theorem environment title'}));
/* 000036 */ export var thmlabel_arg = __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: __call__ (LatexTackOnInformationFieldMacrosParser, null, ['label', 'noproofref'], __kwargtrans__ ({allow_multiple: true, macro_arg_parsers: dict ({'noproofref': null})})), argname: 'thmlabel', flm_doc: 'A following \\verbcode+\\label{…}+ macro attaches a label to this macro call; a following \\noproofref indicates that there is no corresponding {proof} environment to look for in the document.'}));
/* 000048 */ export var TheoremEnvironment =  __class__ ('TheoremEnvironment', [flmspecinfo.FLMEnvironmentSpecBase], {
/* 000048 */ 	__module__: __name__,
/* 000050 */ 	is_block_level: true,
/* 000052 */ 	body_contents_is_block_level: true,
/* 000054 */ 	get __init__ () {return __get__ (this, function (self, environmentname, theorem_spec, theorem_type_spec, allowed_ref_label_prefixes) {
/* 000054 */ 		if (arguments.length) {
/* 000054 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000054 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000054 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000054 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000054 */ 					switch (__attrib0__) {
/* 000054 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000054 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000054 */ 						case 'theorem_spec': var theorem_spec = __allkwargs0__ [__attrib0__]; break;
/* 000054 */ 						case 'theorem_type_spec': var theorem_type_spec = __allkwargs0__ [__attrib0__]; break;
/* 000054 */ 						case 'allowed_ref_label_prefixes': var allowed_ref_label_prefixes = __allkwargs0__ [__attrib0__]; break;
/* 000054 */ 					}
/* 000054 */ 				}
/* 000054 */ 			}
/* 000054 */ 		}
/* 000054 */ 		else {
/* 000054 */ 		}
/* 000056 */ 		__call__ (__call__ (__super__, null, TheoremEnvironment, '__init__'), null, self, environmentname, __kwargtrans__ ({arguments_spec_list: [optional_text_arg, thmlabel_arg]}));
/* 000063 */ 		self.theorem_spec = theorem_spec;
/* 000064 */ 		self.theorem_type_spec = theorem_type_spec;
/* 000065 */ 		self.allowed_ref_label_prefixes = allowed_ref_label_prefixes;
/* 000065 */ 	});},
/* 000067 */ 	_fields: tuple (['environmentname', 'theorem_spec', 'theorem_type_spec', 'allowed_ref_label_prefixes']),
/* 000070 */ 	get make_body_parser () {return __get__ (this, function (self, token, nodeargd, arg_parsing_state_delta) {
/* 000070 */ 		if (arguments.length) {
/* 000070 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000070 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000070 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000070 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000070 */ 					switch (__attrib0__) {
/* 000070 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000070 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000070 */ 						case 'nodeargd': var nodeargd = __allkwargs0__ [__attrib0__]; break;
/* 000070 */ 						case 'arg_parsing_state_delta': var arg_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000070 */ 					}
/* 000070 */ 				}
/* 000070 */ 			}
/* 000070 */ 		}
/* 000070 */ 		else {
/* 000070 */ 		}
/* 000071 */ 		return (function () {
/* 000071 */ 			var __accu0__ = macrospec;
/* 000073 */ 			return __call__ (__accu0__.LatexEnvironmentBodyContentsParser, __accu0__, __kwargtrans__ ({environmentname: token.arg, contents_parsing_state_delta: __call__ (ParsingStateDelta, null, __kwargtrans__ ({set_attributes: dict ({'is_block_level': true})}))}));
/* 000073 */ 		}) ();
/* 000073 */ 	});},
/* 000080 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000080 */ 		if (arguments.length) {
/* 000080 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000080 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000080 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000080 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000080 */ 					switch (__attrib0__) {
/* 000080 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000080 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000080 */ 					}
/* 000080 */ 				}
/* 000080 */ 			}
/* 000080 */ 		}
/* 000080 */ 		else {
/* 000080 */ 		}
/* 000082 */ 		var node_args = (function () {
/* 000082 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000082 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['thmtitle', 'thmlabel']));
/* 000082 */ 		}) ();
/* 000086 */ 		var thmtitle_nodelist = null;
/* 000087 */ 		if (__t__ ((function () {
/* 000087 */ 			var __accu0__ = __getitem__ (node_args, 'thmtitle');
/* 000087 */ 			return __call__ (__accu0__.was_provided, __accu0__);
/* 000087 */ 		}) ())) {
/* 000088 */ 			var thmtitle_nodelist = (function () {
/* 000088 */ 				var __accu0__ = __getitem__ (node_args, 'thmtitle');
/* 000088 */ 				return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000088 */ 			}) ();
/* 000088 */ 		}
/* 000090 */ 		var relation_ref_target = null;
/* 000091 */ 		var relation_ref_show_ref = false;
/* 000092 */ 		if (__t__ (__getitem__ (self.theorem_type_spec, 'title_enable_relation_ref'))) {
/* 000094 */ 			if (__t__ (__t__ (thmtitle_nodelist !== null) && __gt__ (__call__ (len, null, thmtitle_nodelist), 0))) {
/* 000095 */ 				var chnode = __getitem__ (thmtitle_nodelist, 0);
/* 000097 */ 				if (__t__ (__t__ (chnode !== null) && __t__ ((function () {
/* 000097 */ 					var __accu0__ = chnode;
/* 000097 */ 					return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000098 */ 				}) ()) && (function () {
/* 000098 */ 					var __accu0__ = chnode.chars;
/* 000098 */ 					return __call__ (__accu0__.startswith, __accu0__, '*');
/* 000098 */ 				}) ())) {
/* 000099 */ 					if (__t__ (__ne__ (__call__ (len, null, thmtitle_nodelist), 1))) {
/* 000104 */ 						var __except0__ = __call__ (LatexWalkerLocatedError, null, 'When specifying a proof-ref target as optional argument (‘[*thm:xyz]’), the entire argument must consist of regular characters with no special meaning in FLM.  Got: ‘{}’'.format ((function () {
/* 000104 */ 							var __accu0__ = thmtitle_nodelist;
/* 000104 */ 							return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000104 */ 						}) ()), __kwargtrans__ ({pos: chnode.pos}));
/* 000104 */ 						__except0__.__cause__ = null;
/* 000104 */ 						throw __except0__;
/* 000104 */ 					}
/* 000107 */ 					if (__t__ ((function () {
/* 000107 */ 						var __accu0__ = chnode.chars;
/* 000107 */ 						return __call__ (__accu0__.startswith, __accu0__, '**');
/* 000107 */ 					}) ())) {
/* 000108 */ 						var relation_ref_target = __getslice__ (chnode.chars, 2, null, 1);
/* 000109 */ 						var relation_ref_show_ref = false;
/* 000109 */ 					}
/* 000110 */ 					else if (__t__ ((function () {
/* 000110 */ 						var __accu0__ = chnode.chars;
/* 000110 */ 						return __call__ (__accu0__.startswith, __accu0__, '*');
/* 000110 */ 					}) ())) {
/* 000111 */ 						var relation_ref_target = __getslice__ (chnode.chars, 1, null, 1);
/* 000112 */ 						var relation_ref_show_ref = true;
/* 000112 */ 					}
/* 000112 */ 				}
/* 000112 */ 			}
/* 000112 */ 		}
/* 000114 */ 		if (__t__ (relation_ref_target !== null)) {
/* 000115 */ 			if (__t__ (__in__ (':', relation_ref_target))) {
/* 000116 */ 				var relation_ref_target = (function () {
/* 000116 */ 					var __accu0__ = relation_ref_target;
/* 000116 */ 					return __call__ (__accu0__.py_split, __accu0__, ':', __kwargtrans__ ({maxsplit: 1}));
/* 000116 */ 				}) ();
/* 000116 */ 			}
/* 000117 */ 			else {
/* 000118 */ 				var relation_ref_target = tuple ([null, relation_ref_target]);
/* 000118 */ 			}
/* 000118 */ 		}
/* 000120 */ 		node.flmarg_thmtitle = dict ({'nodelist': thmtitle_nodelist, 'has_relation_ref': (__t__ (relation_ref_target !== null) ? true : false), 'relation_ref_target': relation_ref_target, 'relation_ref_show_ref': relation_ref_show_ref});
/* 000128 */ 		var has_noproofref = null;
/* 000129 */ 		var node_args_thmlabel = __getitem__ (node_args, 'thmlabel');
/* 000130 */ 		if (__t__ ((function () {
/* 000130 */ 			var __accu0__ = node_args_thmlabel;
/* 000130 */ 			return __call__ (__accu0__.was_provided, __accu0__);
/* 000130 */ 		}) ())) {
/* 000131 */ 			var argnodes = (function () {
/* 000131 */ 				var __accu0__ = node_args_thmlabel;
/* 000131 */ 				return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000131 */ 			}) ();
/* 000132 */ 			var __iterable0__ = argnodes;
/* 000132 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000132 */ 				var argnode = __getitem__ (__iterable0__, __index0__);
/* 000133 */ 				if (__t__ (__eq__ (__getitem__ (argnode.delimiters, 0), '\\label'))) {
/* 000133 */ 					continue;
/* 000133 */ 				}
/* 000135 */ 				else if (__t__ (__eq__ (__getitem__ (argnode.delimiters, 0), '\\noproofref'))) {
/* 000136 */ 					var has_noproofref = true;
/* 000136 */ 				}
/* 000137 */ 				else {
/* 000138 */ 					var __except0__ = __call__ (LatexWalkerParseError, null, 'Bad information field macro ‘{}’'.format (__getitem__ (argnode.delimiters, 0)), __kwargtrans__ ({pos: argnode.pos}));
/* 000138 */ 					__except0__.__cause__ = null;
/* 000138 */ 					throw __except0__;
/* 000138 */ 				}
/* 000138 */ 			}
/* 000138 */ 		}
/* 000142 */ 		node.flmarg_has_noproofref = has_noproofref;
/* 000144 */ 		node.flmarg_labels = (function () {
/* 000144 */ 			var __accu0__ = flmspecinfo;
/* 000144 */ 			return __call__ (__accu0__.helper_collect_labels, __accu0__, node_args_thmlabel, self.allowed_ref_label_prefixes, __kwargtrans__ ({allow_unknown_macros: true}));
/* 000144 */ 		}) ();
/* 000150 */ 		return node;
/* 000150 */ 	});},
/* 000152 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000152 */ 		if (arguments.length) {
/* 000152 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000152 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000152 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000152 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000152 */ 					switch (__attrib0__) {
/* 000152 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000152 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000152 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000152 */ 					}
/* 000152 */ 				}
/* 000152 */ 			}
/* 000152 */ 		}
/* 000152 */ 		else {
/* 000152 */ 		}
/* 000154 */ 		var fragment_renderer = render_context.fragment_renderer;
/* 000156 */ 		var thms_mgr = (function () {
/* 000156 */ 			var __accu0__ = render_context;
/* 000156 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'theorems');
/* 000156 */ 		}) ();
/* 000157 */ 		var refs_mgr = (function () {
/* 000157 */ 			var __accu0__ = render_context;
/* 000157 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000157 */ 		}) ();
/* 000161 */ 		var flmarg_thmtitle = node.flmarg_thmtitle;
/* 000162 */ 		var flmarg_labels = node.flmarg_labels;
/* 000166 */ 		if (__t__ (__getitem__ (self.theorem_type_spec, 'numbered'))) {
/* 000168 */ 			var counter = __getitem__ (thms_mgr.counters, self.environmentname);
/* 000169 */ 			var prefix_variant = 'capital';
/* 000171 */ 			var ref_instance = (function () {
/* 000171 */ 				var __accu0__ = refs_mgr;
/* 000171 */ 				return __call__ (__accu0__.register_reference_step_counter, __accu0__, __kwargtrans__ ({node: node, counter: counter, target_href_fn: (function __lambda__ (n) {
/* 000171 */ 					if (arguments.length) {
/* 000171 */ 						var __ilastarg0__ = arguments.length - 1;
/* 000171 */ 						if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000171 */ 							var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000171 */ 							for (var __attrib0__ in __allkwargs0__) {
/* 000171 */ 								switch (__attrib0__) {
/* 000171 */ 									case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000171 */ 								}
/* 000171 */ 							}
/* 000171 */ 						}
/* 000171 */ 					}
/* 000171 */ 					else {
/* 000171 */ 					}
/* 000171 */ 					return '#{}-{}'.format (self.environmentname, n);
/* 000171 */ 				}), counter_with_prefix: true, counter_prefix_variant: prefix_variant}));
/* 000171 */ 			}) ();
/* 000179 */ 			var counter_value = ref_instance.counter_value;
/* 000181 */ 			var title_heading_formatted_flm = ref_instance.formatted_ref_flm_text;
/* 000183 */ 			var target_id = '{}-{}'.format (self.environmentname, counter_value);
/* 000185 */ 			var title_heading_formatted_flm_frag = (function () {
/* 000185 */ 				var __accu0__ = render_context;
/* 000185 */ 				return __call__ (__accu0__.make_standalone_fragment, __accu0__, title_heading_formatted_flm, __kwargtrans__ ({what: 'Theorem heading'}));
/* 000185 */ 			}) ();
/* 000189 */ 			var title_heading_formatted_flm_frag_nodes = title_heading_formatted_flm_frag.nodes;
/* 000191 */ 			var __iterable0__ = flmarg_labels;
/* 000191 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000191 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000191 */ 				var ref_type = __left0__ [0];
/* 000191 */ 				var ref_label = __left0__ [1];
/* 000193 */ 				(function () {
/* 000193 */ 					var __accu0__ = refs_mgr;
/* 000193 */ 					return __call__ (__accu0__.register_reference, __accu0__, ref_type, ref_label, __kwargtrans__ ({node: node, formatted_ref_flm_text: title_heading_formatted_flm_frag, target_href: __add__ ('#', target_id), counter_value: counter_value, counter_formatter_id: counter.formatter.counter_formatter_id}));
/* 000193 */ 				}) ();
/* 000193 */ 			}
/* 000193 */ 		}
/* 000200 */ 		else {
/* 000204 */ 			var theorem_name = __getitem__ (__getitem__ (__getitem__ (self.theorem_spec, 'title'), 'capital'), 'singular');
/* 000206 */ 			var target_id = null;
/* 000209 */ 			var title_heading_formatted_flm_frag_nodes = (function () {
/* 000209 */ 				var __accu0__ = node.latex_walker;
/* 000211 */ 				return __call__ (__accu0__.make_nodelist, __accu0__, [(function () {
/* 000211 */ 					var __accu1__ = node.latex_walker;
/* 000211 */ 					return __call__ (__accu1__.make_node, __accu1__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: theorem_name, pos: node.pos, pos_end: node.pos, parsing_state: node.parsing_state}));
/* 000211 */ 				}) ()], __kwargtrans__ ({parsing_state: node.parsing_state}));
/* 000211 */ 			}) ();
/* 000224 */ 			if (__t__ (__call__ (len, null, flmarg_labels))) {
/* 000225 */ 				var __except0__ = __call__ (LatexWalkerLocatedError, null, __add__ (__add__ ('You cannot use \\label{} in unnumbered theorem environment ‘', self.environmentname), '’'), __kwargtrans__ ({pos: node.pos}));
/* 000225 */ 				__except0__.__cause__ = null;
/* 000225 */ 				throw __except0__;
/* 000225 */ 			}
/* 000225 */ 		}
/* 000237 */ 		var thmtitle_nodelist = null;
/* 000238 */ 		if (__t__ (__getitem__ (flmarg_thmtitle, 'has_relation_ref'))) {
/* 000240 */ 			if (__t__ (__getitem__ (flmarg_thmtitle, 'relation_ref_show_ref'))) {
/* 000242 */ 				var __left0__ = __getitem__ (flmarg_thmtitle, 'relation_ref_target');
/* 000242 */ 				var ref_type = __left0__ [0];
/* 000242 */ 				var ref_label = __left0__ [1];
/* 000245 */ 				var thm_relation_ref_instance = (function () {
/* 000245 */ 					var __accu0__ = refs_mgr;
/* 000245 */ 					return __call__ (__accu0__.get_ref, __accu0__, ref_type, ref_label, node.latex_walker.resource_info);
/* 000245 */ 				}) ();
/* 000249 */ 				var thm_relation_ref_flm_text = thm_relation_ref_instance.formatted_ref_flm_text;
/* 000250 */ 				var thm_relation_ref_flm_frag = (function () {
/* 000250 */ 					var __accu0__ = render_context;
/* 000250 */ 					return __call__ (__accu0__.make_standalone_fragment, __accu0__, thm_relation_ref_flm_text, __kwargtrans__ ({what: 'Thm relation ref'}));
/* 000250 */ 				}) ();
/* 000254 */ 				var thmtitle_nodelist = thm_relation_ref_flm_frag.nodes;
/* 000254 */ 			}
/* 000254 */ 		}
/* 000256 */ 		else if (__t__ (__getitem__ (flmarg_thmtitle, 'nodelist') !== null)) {
/* 000258 */ 			var thmtitle_nodelist = __getitem__ (flmarg_thmtitle, 'nodelist');
/* 000258 */ 		}
/* 000261 */ 		if (__t__ (thmtitle_nodelist !== null)) {
/* 000263 */ 			var heading_nodelist = (function () {
/* 000263 */ 				var __accu0__ = node.latex_walker;
/* 000266 */ 				return __call__ (__accu0__.make_nodelist, __accu0__, __add__ (__add__ (__add__ (__call__ (list, null, title_heading_formatted_flm_frag_nodes), [(function () {
/* 000266 */ 					var __accu1__ = node.latex_walker;
/* 000266 */ 					return __call__ (__accu1__.make_node, __accu1__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: __getitem__ (self.theorem_type_spec, 'heading_title_pre'), pos: node.pos, pos_end: node.pos, parsing_state: node.parsing_state}));
/* 000274 */ 				}) ()]), __call__ (list, null, thmtitle_nodelist)), [(function () {
/* 000274 */ 					var __accu1__ = node.latex_walker;
/* 000274 */ 					return __call__ (__accu1__.make_node, __accu1__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: __getitem__ (self.theorem_type_spec, 'heading_title_post'), pos: node.pos, pos_end: node.pos, parsing_state: node.parsing_state}));
/* 000274 */ 				}) ()]), __kwargtrans__ ({parsing_state: node.parsing_state, pos: node.pos}));
/* 000274 */ 			}) ();
/* 000274 */ 		}
/* 000284 */ 		else {
/* 000288 */ 			var heading_nodelist = title_heading_formatted_flm_frag_nodes;
/* 000288 */ 		}
/* 000293 */ 		var heading_node = __call__ (make_invocable_node_instance, null, latexnodes_nodes.LatexMacroNode, __kwargtrans__ ({flm_spec: (function () {
/* 000293 */ 			var __accu0__ = headings;
/* 000293 */ 			return __call__ (__accu0__.HeadingMacro, __accu0__, __kwargtrans__ ({macroname: null, heading_level: __getitem__ (self.theorem_type_spec, 'theorem_heading_level'), inline_heading: true}));
/* 000293 */ 		}) (), args: dict ({'text': heading_nodelist}), latex_walker: node.latex_walker, parsing_state: node.parsing_state}));
/* 000305 */ 		heading_node.flm_heading_target_id = target_id;
/* 000321 */ 		var final_content_node = (function () {
/* 000321 */ 			var __accu0__ = node.latex_walker;
/* 000321 */ 			return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: __getitem__ (self.theorem_type_spec, 'body_final_content'), pos: node.pos, pos_end: node.pos, parsing_state: node.parsing_state}));
/* 000321 */ 		}) ();
/* 000328 */ 		final_content_node.flm_strip_preceding_whitespace = true;
/* 000331 */ 		if (__t__ (__getitem__ (self.theorem_type_spec, 'body_final_content'))) {
/* 000336 */ 			var body_nodelist = __add__ (__add__ ([heading_node], __call__ (list, null, node.nodelist)), [final_content_node]);
/* 000336 */ 		}
/* 000339 */ 		else {
/* 000346 */ 			var body_nodelist = __add__ ([heading_node], __call__ (list, null, node.nodelist));
/* 000346 */ 		}
/* 000349 */ 		var body_nodelist = (function () {
/* 000349 */ 			var __accu0__ = node.latex_walker;
/* 000349 */ 			return __call__ (__accu0__.make_nodelist, __accu0__, body_nodelist, __kwargtrans__ ({parsing_state: node.parsing_state}));
/* 000349 */ 		}) ();
/* 000354 */ 		var rendered_contents = (function () {
/* 000354 */ 			var __accu0__ = fragment_renderer;
/* 000354 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, body_nodelist, render_context);
/* 000354 */ 		}) ();
/* 000359 */ 		return (function () {
/* 000359 */ 			var __accu0__ = fragment_renderer;
/* 000359 */ 			return __call__ (__accu0__.render_semantic_block, __accu0__, rendered_contents, __getitem__ (self.theorem_spec, 'theorem_type'), render_context, __kwargtrans__ ({annotations: [self.environmentname, 'p-block']}));
/* 000359 */ 		}) ();
/* 000359 */ 	});},
/* 000366 */ 	get recompose_pure_latex () {return __get__ (this, function (self, node, recomposer) {
/* 000366 */ 		if (arguments.length) {
/* 000366 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000366 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000366 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000366 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000366 */ 					switch (__attrib0__) {
/* 000366 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000366 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000366 */ 						case 'recomposer': var recomposer = __allkwargs0__ [__attrib0__]; break;
/* 000366 */ 					}
/* 000366 */ 				}
/* 000366 */ 			}
/* 000366 */ 		}
/* 000366 */ 		else {
/* 000366 */ 		}
/* 000368 */ 		var s = __add__ (__add__ ('\\begin{', node.environmentname), '}');
/* 000370 */ 		if (__t__ (!__t__ ((__getitem__ (node.flmarg_thmtitle, 'has_relation_ref'))))) {
/* 000372 */ 			if (__t__ (__getitem__ (node.flmarg_thmtitle, 'nodelist') !== null)) {
/* 000373 */ 				var s = __call__ (__iadd__, null, s, __add__ (__add__ ('[{', (function () {
/* 000373 */ 					var __accu0__ = recomposer;
/* 000373 */ 					return __call__ (__accu0__.subrecompose, __accu0__, __getitem__ (node.flmarg_thmtitle, 'nodelist'));
/* 000373 */ 				}) ()), '}]'));
/* 000373 */ 			}
/* 000373 */ 		}
/* 000374 */ 		else {
/* 000375 */ 			var __left0__ = __getitem__ (node.flmarg_thmtitle, 'relation_ref_target');
/* 000375 */ 			var rel_ref_type = __left0__ [0];
/* 000375 */ 			var rel_ref_label = __left0__ [1];
/* 000376 */ 			var safe_label_info = (function () {
/* 000376 */ 				var __accu0__ = recomposer;
/* 000376 */ 				return __call__ (__accu0__.make_safe_label, __accu0__, 'ref', rel_ref_type, rel_ref_label, node.latex_walker.resource_info);
/* 000376 */ 			}) ();
/* 000379 */ 			var s = __call__ (__iadd__, null, s, '[*');
/* 000380 */ 			if (__t__ (!__t__ ((__getitem__ (node.flmarg_thmtitle, 'relation_ref_show_ref'))))) {
/* 000381 */ 				var s = __call__ (__iadd__, null, s, '*');
/* 000381 */ 			}
/* 000382 */ 			var s = __call__ (__iadd__, null, s, __getitem__ (safe_label_info, 'safe_label'));
/* 000383 */ 			var s = __call__ (__iadd__, null, s, ']');
/* 000383 */ 		}
/* 000385 */ 		if (__t__ (node.flmarg_has_noproofref)) {
/* 000386 */ 			var s = __call__ (__iadd__, null, s, '\\noproofref ');
/* 000386 */ 		}
/* 000389 */ 		var __iterable0__ = node.flmarg_labels;
/* 000389 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000389 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000389 */ 			var ref_type = __left0__ [0];
/* 000389 */ 			var ref_label = __left0__ [1];
/* 000390 */ 			var safe_label_info = (function () {
/* 000390 */ 				var __accu0__ = recomposer;
/* 000390 */ 				return __call__ (__accu0__.make_safe_label, __accu0__, 'ref', ref_type, ref_label, node.latex_walker.resource_info);
/* 000390 */ 			}) ();
/* 000393 */ 			var s = __call__ (__iadd__, null, s, __add__ (__add__ ('\\label{', __getitem__ (safe_label_info, 'safe_label')), '}'));
/* 000393 */ 		}
/* 000395 */ 		var s = __call__ (__iadd__, null, s, (function () {
/* 000395 */ 			var __accu0__ = recomposer;
/* 000395 */ 			return __call__ (__accu0__.recompose_nodelist, __accu0__, node.nodelist, node);
/* 000395 */ 		}) ());
/* 000397 */ 		var s = __call__ (__iadd__, null, s, __add__ (__add__ ('\\end{', node.environmentname), '}'));
/* 000399 */ 		return s;
/* 000399 */ 	});}
/* 000399 */ });
/* 000403 */ export var _default_theorem_environments_simpleset = dict ({'theoremlike': dict ({'theorem': dict ({'title': dict ({'lowercase': 'theorem', 'abbreviated': dict ({'singular': 'Thm.', 'plural': 'Thms.'})})}), 'proposition': dict ({'title': dict ({'lowercase': 'proposition', 'abbreviated': dict ({'singular': 'Prop.', 'plural': 'Props.'})})}), 'lemma': dict ({'title': dict ({'lowercase': 'lemma', 'abbreviated': dict ({'singular': 'Lem.', 'plural': 'Lems.'})})}), 'corollary': dict ({'title': dict ({'lowercase': 'corollary', 'abbreviated': dict ({'singular': 'Cor.', 'plural': 'Cors.'})})})}), 'definitionlike': dict ({'definition': dict ({'title': dict ({'lowercase': 'definition', 'abbreviated': dict ({'singular': 'Def.', 'plural': 'Defs.'})})})}), 'prooflike': dict ({'proof': dict ({'title': dict ({'lowercase': 'proof', 'abbreviated': dict ({'singular': 'Proof', 'plural': 'Proofs'})})})})});
/* 000498 */ export var _default_theorem_environments_defaultset = dict ({'theoremlike': __call__ (dict, null, __getitem__ (_default_theorem_environments_simpleset, 'theoremlike'), __kwargtrans__ (dict ({'conjecture': dict ({'title': dict ({'lowercase': 'conjecture', 'abbreviated': dict ({'singular': 'Conj.', 'plural': 'Conjs.'})})})}))), 'definitionlike': __call__ (dict, null, __getitem__ (_default_theorem_environments_simpleset, 'definitionlike'), __kwargtrans__ (dict ({'remark': dict ({'title': dict ({'lowercase': 'remark', 'abbreviated': dict ({'singular': 'Rem.', 'plural': 'Rems.'})})})}))), 'prooflike': __call__ (dict, null, __getitem__ (_default_theorem_environments_simpleset, 'prooflike'))});
/* 000550 */ export var _default_theorem_environments_richset = dict ({'theoremlike': __call__ (dict, null, __getitem__ (_default_theorem_environments_defaultset, 'theoremlike')), 'definitionlike': __call__ (dict, null, __getitem__ (_default_theorem_environments_defaultset, 'definitionlike'), __kwargtrans__ (dict ({'idea': dict ({'title': dict ({'lowercase': 'idea', 'abbreviated': dict ({'singular': 'Idea', 'plural': 'Ideas'})})}), 'question': dict ({'title': dict ({'lowercase': 'question', 'abbreviated': dict ({'singular': 'Qtn.', 'plural': 'Qtns.'})})}), 'claim': dict ({'title': dict ({'lowercase': 'claim', 'abbreviated': dict ({'singular': 'Clm.', 'plural': 'Clms.'})})}), 'observation': dict ({'title': dict ({'lowercase': 'observation', 'abbreviated': dict ({'singular': 'Obs.', 'plural': 'Obs.'})})}), 'problem': dict ({'title': dict ({'lowercase': 'problem', 'abbreviated': dict ({'singular': 'Prob.', 'plural': 'Probs.'})})})}))), 'prooflike': __call__ (dict, null, __getitem__ (_default_theorem_environments_defaultset, 'prooflike'))});
/* 000554 */ export var default_theorem_environments = dict ({'simpleset': _default_theorem_environments_simpleset, 'defaultset': _default_theorem_environments_defaultset, 'richset': _default_theorem_environments_richset});
/* 000560 */ export var default_theorem_theorem_types = dict ({'theoremlike': dict ({'numbered': true, 'shared_numbering': true, 'counter_formatter': null, 'theorem_heading_level': 'theorem', 'heading_title_pre': ' (', 'heading_title_post': ')', 'title_enable_relation_ref': false, 'body_final_content': ''}), 'definitionlike': dict ({'numbered': true, 'shared_numbering': true, 'counter_formatter': null, 'theorem_heading_level': 'theorem', 'heading_title_pre': ' (', 'heading_title_post': ')', 'title_enable_relation_ref': false}), 'prooflike': dict ({'numbered': false, 'title_enable_relation_ref': true, 'body_final_content': '\xa0□'})});
/* 000592 */ export var default_thm_shared_counter_formatter_spec = dict ({'format_num': 'arabic', 'delimiters': tuple (['', '']), 'join_spec': 'default'});
/* 000599 */ export var default_allowed_ref_label_prefixes = ['thm', 'prop', 'cor', 'lem', 'rem', 'def', 'dfn', 'x', 'topic'];
/* 000606 */ export var FeatureTheorems =  __class__ ('FeatureTheorems', [Feature], {
/* 000606 */ 	__module__: __name__,
/* 000608 */ 	feature_name: 'theorems',
/* 000610 */ 	feature_dependencies: ['refs'],
/* 000621 */ 	feature_default_config: dict ({'environments': __getitem__ (default_theorem_environments, 'defaultset'), 'theorem_types': default_theorem_theorem_types, 'shared_counter_formatter': 'arabic', 'allowed_ref_label_prefixes': default_allowed_ref_label_prefixes}),
/* 000621 */ 	RenderManager: __class__ ('RenderManager', [Feature.RenderManager], {
/* 000621 */ 		__module__: __name__,
/* 000623 */ 		get initialize () {return __get__ (this, function (self) {
/* 000623 */ 			if (arguments.length) {
/* 000623 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000623 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000623 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000623 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000623 */ 						switch (__attrib0__) {
/* 000623 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000623 */ 						}
/* 000623 */ 					}
/* 000623 */ 				}
/* 000623 */ 			}
/* 000623 */ 			else {
/* 000623 */ 			}
/* 000624 */ 			self.shared_counter = __call__ (Counter, null, self.feature.shared_counter_formatter);
/* 000626 */ 			var refs_mgr = (function () {
/* 000626 */ 				var __accu0__ = self.render_context;
/* 000626 */ 				return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000626 */ 			}) ();
/* 000628 */ 			self.counters = dict ({});
/* 000629 */ 			var __iterable0__ = (function () {
/* 000629 */ 				var __accu0__ = self.feature.thm_counter_formatters;
/* 000629 */ 				return __call__ (__accu0__.py_items, __accu0__);
/* 000629 */ 			}) ();
/* 000629 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000629 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000629 */ 				var env_name = __left0__ [0];
/* 000629 */ 				var counter_formatter = __left0__ [1];
/* 000630 */ 				var thm_spec = __getitem__ (self.feature.environments, env_name);
/* 000631 */ 				var thm_type_spec = __getitem__ (self.feature.theorem_types, __getitem__ (thm_spec, 'theorem_type'));
/* 000632 */ 				if (__t__ (__getitem__ (thm_type_spec, 'shared_numbering'))) {
/* 000633 */ 					__setitem__ (self.counters, env_name, __call__ (CounterAlias, null, __kwargtrans__ ({counter_formatter: counter_formatter, alias_counter: self.shared_counter})));
/* 000633 */ 				}
/* 000636 */ 				else {
/* 000638 */ 					__setitem__ (self.counters, env_name, __call__ (Counter, null, __kwargtrans__ ({counter_formatter: counter_formatter})));
/* 000638 */ 				}
/* 000643 */ 				(function () {
/* 000643 */ 					var __accu0__ = refs_mgr;
/* 000643 */ 					return __call__ (__accu0__.register_counter_formatter, __accu0__, __kwargtrans__ ({counter_formatter: counter_formatter}));
/* 000643 */ 				}) ();
/* 000643 */ 			}
/* 000643 */ 		});}
/* 000643 */ 	}),
/* 000648 */ 	get __init__ () {return __get__ (this, function (self, environments, theorem_types, shared_counter_formatter, allowed_ref_label_prefixes) {
/* 000648 */ 		if (typeof environments == 'undefined' || (environments != null && environments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000648 */ 			var environments = null;
/* 000648 */ 		};
/* 000648 */ 		if (typeof theorem_types == 'undefined' || (theorem_types != null && theorem_types.hasOwnProperty ("__kwargtrans__"))) {;
/* 000648 */ 			var theorem_types = null;
/* 000648 */ 		};
/* 000648 */ 		if (typeof shared_counter_formatter == 'undefined' || (shared_counter_formatter != null && shared_counter_formatter.hasOwnProperty ("__kwargtrans__"))) {;
/* 000648 */ 			var shared_counter_formatter = null;
/* 000648 */ 		};
/* 000648 */ 		if (typeof allowed_ref_label_prefixes == 'undefined' || (allowed_ref_label_prefixes != null && allowed_ref_label_prefixes.hasOwnProperty ("__kwargtrans__"))) {;
/* 000648 */ 			var allowed_ref_label_prefixes = null;
/* 000648 */ 		};
/* 000648 */ 		if (arguments.length) {
/* 000648 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000648 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000648 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000648 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000648 */ 					switch (__attrib0__) {
/* 000648 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000648 */ 						case 'environments': var environments = __allkwargs0__ [__attrib0__]; break;
/* 000648 */ 						case 'theorem_types': var theorem_types = __allkwargs0__ [__attrib0__]; break;
/* 000648 */ 						case 'shared_counter_formatter': var shared_counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000648 */ 						case 'allowed_ref_label_prefixes': var allowed_ref_label_prefixes = __allkwargs0__ [__attrib0__]; break;
/* 000648 */ 					}
/* 000648 */ 				}
/* 000648 */ 			}
/* 000648 */ 		}
/* 000648 */ 		else {
/* 000648 */ 		}
/* 000653 */ 		__call__ (__call__ (__super__, null, FeatureTheorems, '__init__'), null, self);
/* 000654 */ 		if (__t__ (environments === null)) {
/* 000655 */ 			var environments = __getitem__ (default_theorem_environments, 'defaultset');
/* 000655 */ 		}
/* 000656 */ 		if (__t__ (__call__ (isinstance, null, environments, str))) {
/* 000657 */ 			var environments = __getitem__ (default_theorem_environments, environments);
/* 000657 */ 		}
/* 000659 */ 		if (__t__ (theorem_types === null)) {
/* 000660 */ 			var theorem_types = default_theorem_theorem_types;
/* 000660 */ 		}
/* 000664 */ 		self.theorem_types = (function () {
/* 000664 */ 			var __accu0__ = [];
/* 000666 */ 			var __iterable0__ = (function () {
/* 000666 */ 				var __accu1__ = __call__ (dict, null, theorem_types);
/* 000666 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000666 */ 			}) ();
/* 000666 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000666 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000666 */ 				var thm_type = __left0__ [0];
/* 000666 */ 				var thm_type_spec = __left0__ [1];
/* 000666 */ 				if (__t__ (thm_type_spec !== null)) {
/* 000667 */ 					(function () {
/* 000667 */ 						var __accu1__ = __accu0__;
/* 000665 */ 						return __call__ (__accu1__.append, __accu1__, [thm_type, (function () {
/* 000665 */ 							var __accu2__ = self;
/* 000665 */ 							return __call__ (__accu2__._standardize_type_spec, __accu2__, thm_type, thm_type_spec);
/* 000665 */ 						}) ()]);
/* 000665 */ 					}) ();
/* 000665 */ 				}
/* 000665 */ 			}
/* 000665 */ 			return dict (__accu0__);
/* 000665 */ 		}) ();
/* 000672 */ 		self.environments = dict ({});
/* 000673 */ 		var __iterable0__ = (function () {
/* 000673 */ 			var __accu0__ = environments;
/* 000673 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000673 */ 		}) ();
/* 000673 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000673 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000673 */ 			var thm_type = __left0__ [0];
/* 000673 */ 			var env_list = __left0__ [1];
/* 000674 */ 			var __iterable1__ = (function () {
/* 000674 */ 				var __accu0__ = env_list;
/* 000674 */ 				return __call__ (__accu0__.py_items, __accu0__);
/* 000674 */ 			}) ();
/* 000674 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000674 */ 				var __left0__ = __getitem__ (__iterable1__, __index1__);
/* 000674 */ 				var env_name = __left0__ [0];
/* 000674 */ 				var thm_spec = __left0__ [1];
/* 000675 */ 				if (__t__ (__in__ ('env_name', self.environments))) {
/* 000676 */ 					var __except0__ = __call__ (ValueError, null, 'Duplicate definition of theorem environment ‘{}’'.format (env_name));
/* 000676 */ 					__except0__.__cause__ = null;
/* 000676 */ 					throw __except0__;
/* 000676 */ 				}
/* 000680 */ 				__setitem__ (self.environments, env_name, (function () {
/* 000680 */ 					var __accu0__ = self;
/* 000680 */ 					return __call__ (__accu0__._standardize_thm_spec, __accu0__, thm_type, env_name, thm_spec);
/* 000680 */ 				}) ());
/* 000680 */ 			}
/* 000680 */ 		}
/* 000684 */ 		self.shared_counter_formatter = __call__ (build_counter_formatter, null, shared_counter_formatter, default_thm_shared_counter_formatter_spec, __kwargtrans__ ({counter_formatter_id: '_theorems_shared'}));
/* 000690 */ 		var use_default_counter_formatter_spec = (function () {
/* 000690 */ 			var __accu0__ = self.shared_counter_formatter;
/* 000690 */ 			return __call__ (__accu0__.asdict, __accu0__);
/* 000690 */ 		}) ();
/* 000692 */ 		self.thm_counter_formatters = dict ({});
/* 000693 */ 		var __iterable0__ = (function () {
/* 000693 */ 			var __accu0__ = self.environments;
/* 000693 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000693 */ 		}) ();
/* 000693 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000693 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000693 */ 			var env_name = __left0__ [0];
/* 000693 */ 			var thm_spec = __left0__ [1];
/* 000694 */ 			var thm_type_spec = __getitem__ (self.theorem_types, __getitem__ (thm_spec, 'theorem_type'));
/* 000695 */ 			if (__t__ (!__t__ ((__getitem__ (thm_type_spec, 'numbered'))))) {
/* 000695 */ 				continue;
/* 000695 */ 			}
/* 000699 */ 			var counter_formatter_spec = (function () {
/* 000699 */ 				var __accu0__ = thm_type_spec;
/* 000699 */ 				return __call__ (__accu0__.py_get, __accu0__, 'counter_formatter', null);
/* 000699 */ 			}) ();
/* 000700 */ 			if (__t__ (counter_formatter_spec === null)) {
/* 000701 */ 				var counter_formatter_spec = dict ({});
/* 000701 */ 			}
/* 000702 */ 			else if (__t__ (__call__ (isinstance, null, counter_formatter_spec, str))) {
/* 000703 */ 				var counter_formatter_spec = dict ({'format_num': counter_formatter_spec});
/* 000703 */ 			}
/* 000704 */ 			else {
/* 000705 */ 				var counter_formatter_spec = __call__ (dict, null, counter_formatter_spec);
/* 000705 */ 			}
/* 000711 */ 			__setitem__ (counter_formatter_spec, 'prefix_display', (function () {
/* 000711 */ 				var __accu0__ = self;
/* 000711 */ 				return __call__ (__accu0__._make_counter_formatter_prefix_for_thm, __accu0__, env_name, thm_spec);
/* 000711 */ 			}) ());
/* 000715 */ 			__setitem__ (self.thm_counter_formatters, env_name, __call__ (build_counter_formatter, null, counter_formatter_spec, use_default_counter_formatter_spec, __kwargtrans__ ({counter_formatter_id: env_name})));
/* 000715 */ 		}
/* 000721 */ 		self.allowed_ref_label_prefixes = __call__ (list, null, (__t__ (allowed_ref_label_prefixes !== null) ? allowed_ref_label_prefixes : default_allowed_ref_label_prefixes));
/* 000721 */ 	});},
/* 000728 */ 	get _standardize_type_spec () {return __get__ (this, function (self, thm_type, thm_type_spec) {
/* 000728 */ 		if (arguments.length) {
/* 000728 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000728 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000728 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000728 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000728 */ 					switch (__attrib0__) {
/* 000728 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000728 */ 						case 'thm_type': var thm_type = __allkwargs0__ [__attrib0__]; break;
/* 000728 */ 						case 'thm_type_spec': var thm_type_spec = __allkwargs0__ [__attrib0__]; break;
/* 000728 */ 					}
/* 000728 */ 				}
/* 000728 */ 			}
/* 000728 */ 		}
/* 000728 */ 		else {
/* 000728 */ 		}
/* 000730 */ 		var spec = __call__ (dict, null, __getitem__ (default_theorem_theorem_types, 'theoremlike'));
/* 000731 */ 		(function () {
/* 000731 */ 			var __accu0__ = spec;
/* 000731 */ 			return __call__ (__accu0__.py_update, __accu0__, thm_type_spec);
/* 000731 */ 		}) ();
/* 000732 */ 		return spec;
/* 000732 */ 	});},
/* 000734 */ 	get _standardize_thm_spec () {return __get__ (this, function (self, thm_type, env_name, thm_spec) {
/* 000734 */ 		if (arguments.length) {
/* 000734 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000734 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000734 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000734 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000734 */ 					switch (__attrib0__) {
/* 000734 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000734 */ 						case 'thm_type': var thm_type = __allkwargs0__ [__attrib0__]; break;
/* 000734 */ 						case 'env_name': var env_name = __allkwargs0__ [__attrib0__]; break;
/* 000734 */ 						case 'thm_spec': var thm_spec = __allkwargs0__ [__attrib0__]; break;
/* 000734 */ 					}
/* 000734 */ 				}
/* 000734 */ 			}
/* 000734 */ 		}
/* 000734 */ 		else {
/* 000734 */ 		}
/* 000735 */ 		if (__t__ (thm_spec === true)) {
/* 000736 */ 			var thm_spec = env_name;
/* 000736 */ 		}
/* 000737 */ 		if (__t__ (__call__ (isinstance, null, thm_spec, str))) {
/* 000738 */ 			var thm_spec = dict ({'title': thm_spec});
/* 000738 */ 		}
/* 000739 */ 		else {
/* 000740 */ 			var thm_spec = __call__ (dict, null, thm_spec);
/* 000740 */ 		}
/* 000742 */ 		__setitem__ (thm_spec, 'theorem_type', thm_type);
/* 000745 */ 		var new_title_spec = dict ({});
/* 000746 */ 		var title = (function () {
/* 000746 */ 			var __accu0__ = thm_spec;
/* 000746 */ 			return __call__ (__accu0__.py_get, __accu0__, 'title', null);
/* 000746 */ 		}) ();
/* 000747 */ 		if (__t__ (title === null)) {
/* 000748 */ 			var title = env_name;
/* 000748 */ 		}
/* 000749 */ 		if (__t__ (__call__ (isinstance, null, title, str))) {
/* 000750 */ 			var title = dict ({'lowercase': dict ({'singular': title, 'plural': __add__ (title, 's')})});
/* 000750 */ 		}
/* 000753 */ 		if (__t__ (__in__ ('lowercase', title))) {
/* 000754 */ 			var lowercase = __getitem__ (title, 'lowercase');
/* 000755 */ 			if (__t__ (__call__ (isinstance, null, lowercase, str))) {
/* 000756 */ 				__setitem__ (new_title_spec, 'lowercase', dict ({'singular': lowercase, 'plural': __add__ (lowercase, 's')}));
/* 000756 */ 			}
/* 000759 */ 			else {
/* 000761 */ 				__setitem__ (new_title_spec, 'lowercase', lowercase);
/* 000761 */ 			}
/* 000761 */ 		}
/* 000762 */ 		else {
/* 000764 */ 			__setitem__ (new_title_spec, 'lowercase', dict ({'singular': '??', 'plural': '???'}));
/* 000764 */ 		}
/* 000766 */ 		if (__t__ (__in__ ('capital', title))) {
/* 000767 */ 			var capital = __getitem__ (title, 'capital');
/* 000768 */ 			if (__t__ (__call__ (isinstance, null, capital, str))) {
/* 000769 */ 				__setitem__ (new_title_spec, 'capital', dict ({'singular': capital, 'plural': __add__ (capital, 's')}));
/* 000769 */ 			}
/* 000772 */ 			else {
/* 000774 */ 				__setitem__ (new_title_spec, 'capital', capital);
/* 000774 */ 			}
/* 000774 */ 		}
/* 000775 */ 		else {
/* 000778 */ 			__setitem__ (new_title_spec, 'capital', dict ({'singular': (function () {
/* 000778 */ 				var __accu0__ = __getitem__ (__getitem__ (new_title_spec, 'lowercase'), 'singular');
/* 000778 */ 				return __call__ (__accu0__.capitalize, __accu0__);
/* 000779 */ 			}) (), 'plural': (function () {
/* 000779 */ 				var __accu0__ = __getitem__ (__getitem__ (new_title_spec, 'lowercase'), 'plural');
/* 000779 */ 				return __call__ (__accu0__.capitalize, __accu0__);
/* 000779 */ 			}) ()}));
/* 000779 */ 		}
/* 000782 */ 		if (__t__ (__in__ ('abbreviated', title))) {
/* 000783 */ 			var abbreviated = __getitem__ (title, 'abbreviated');
/* 000784 */ 			if (__t__ (__call__ (isinstance, null, abbreviated, str))) {
/* 000785 */ 				__setitem__ (new_title_spec, 'abbreviated', dict ({'singular': abbreviated, 'plural': __add__ (abbreviated, 's')}));
/* 000785 */ 			}
/* 000788 */ 			else {
/* 000790 */ 				__setitem__ (new_title_spec, 'abbreviated', abbreviated);
/* 000790 */ 			}
/* 000790 */ 		}
/* 000791 */ 		else {
/* 000795 */ 			__setitem__ (new_title_spec, 'abbreviated', dict ({'singular': __add__ (__getslice__ (__getitem__ (__getitem__ (new_title_spec, 'capital'), 'singular'), 0, 3, 1), '.'), 'plural': __add__ ((function () {
/* 000795 */ 				var __accu0__ = __getslice__ (__getitem__ (__getitem__ (new_title_spec, 'capital'), 'plural'), 0, 3, 1);
/* 000795 */ 				return __call__ (__accu0__.rstrip, __accu0__, 's');
/* 000795 */ 			}) (), 's.')}));
/* 000795 */ 		}
/* 000798 */ 		__setitem__ (thm_spec, 'title', new_title_spec);
/* 000800 */ 		return thm_spec;
/* 000800 */ 	});},
/* 000803 */ 	get _make_counter_formatter_prefix_for_thm () {return __get__ (this, function (self, env_name, thm_spec) {
/* 000803 */ 		if (arguments.length) {
/* 000803 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000803 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000803 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000803 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000803 */ 					switch (__attrib0__) {
/* 000803 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000803 */ 						case 'env_name': var env_name = __allkwargs0__ [__attrib0__]; break;
/* 000803 */ 						case 'thm_spec': var thm_spec = __allkwargs0__ [__attrib0__]; break;
/* 000803 */ 					}
/* 000803 */ 				}
/* 000803 */ 			}
/* 000803 */ 		}
/* 000803 */ 		else {
/* 000803 */ 		}
/* 000804 */ 		var prefix = dict ({});
/* 000806 */ 		var _add_space_values = function (x) {
/* 000806 */ 			if (arguments.length) {
/* 000806 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000806 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000806 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000806 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000806 */ 						switch (__attrib0__) {
/* 000806 */ 							case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000806 */ 						}
/* 000806 */ 					}
/* 000806 */ 				}
/* 000806 */ 			}
/* 000806 */ 			else {
/* 000806 */ 			}
/* 000807 */ 			return (function () {
/* 000807 */ 				var __accu0__ = [];
/* 000807 */ 				var __iterable0__ = (function () {
/* 000807 */ 					var __accu1__ = x;
/* 000807 */ 					return __call__ (__accu1__.py_items, __accu1__);
/* 000807 */ 				}) ();
/* 000807 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000807 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000807 */ 					var k = __left0__ [0];
/* 000807 */ 					var v = __left0__ [1];
/* 000807 */ 					(function () {
/* 000807 */ 						var __accu1__ = __accu0__;
/* 000807 */ 						return __call__ (__accu1__.append, __accu1__, [k, __add__ (v, '~')]);
/* 000807 */ 					}) ();
/* 000807 */ 				}
/* 000807 */ 				return dict (__accu0__);
/* 000807 */ 			}) ();
/* 000807 */ 		};
/* 000809 */ 		__setitem__ (prefix, 'lowercase', __call__ (_add_space_values, null, __getitem__ (__getitem__ (thm_spec, 'title'), 'lowercase')));
/* 000810 */ 		__setitem__ (prefix, 'capital', __call__ (_add_space_values, null, __getitem__ (__getitem__ (thm_spec, 'title'), 'capital')));
/* 000811 */ 		__setitem__ (prefix, 'abbreviated', __call__ (_add_space_values, null, __getitem__ (__getitem__ (thm_spec, 'title'), 'abbreviated')));
/* 000813 */ 		(function () {
/* 000813 */ 			var __accu0__ = prefix;
/* 000813 */ 			return __call__ (__accu0__.py_update, __accu0__, __getitem__ (prefix, 'capital'));
/* 000813 */ 		}) ();
/* 000815 */ 		return prefix;
/* 000815 */ 	});},
/* 000818 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000818 */ 		if (arguments.length) {
/* 000818 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000818 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000818 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000818 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000818 */ 					switch (__attrib0__) {
/* 000818 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000818 */ 					}
/* 000818 */ 				}
/* 000818 */ 			}
/* 000818 */ 		}
/* 000818 */ 		else {
/* 000818 */ 		}
/* 000820 */ 		var environment_specs = [];
/* 000822 */ 		var __iterable0__ = (function () {
/* 000822 */ 			var __accu0__ = self.environments;
/* 000822 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000822 */ 		}) ();
/* 000822 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000822 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000822 */ 			var env_name = __left0__ [0];
/* 000822 */ 			var thm_spec = __left0__ [1];
/* 000823 */ 			(function () {
/* 000823 */ 				var __accu0__ = environment_specs;
/* 000823 */ 				return __call__ (__accu0__.append, __accu0__, __call__ (TheoremEnvironment, null, __kwargtrans__ ({environmentname: env_name, theorem_spec: thm_spec, theorem_type_spec: __getitem__ (self.theorem_types, __getitem__ (thm_spec, 'theorem_type')), allowed_ref_label_prefixes: self.allowed_ref_label_prefixes})));
/* 000823 */ 			}) ();
/* 000823 */ 		}
/* 000830 */ 		return dict ({'environments': environment_specs});
/* 000830 */ 	});}
/* 000830 */ });
/* 000837 */ export var FeatureClass = FeatureTheorems;
/* 000007 */ 
//# sourceMappingURL=flm.feature.theorems.map