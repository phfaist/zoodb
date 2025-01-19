/* 000001 */ // Transcrypt'ed from Python, 2025-01-19 14:47:56
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
/* 000007 */ export {Feature, headings, CounterAlias, ParsingStateDelta, flmspecinfo, macrospec, build_counter_formatter, FLMArgumentSpec, LatexTackOnInformationFieldMacrosParser, ParsedArgumentsInfo, make_invocable_node_instance, latexnodes_nodes, Counter};
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
/* 000064 */ 		self.theorem_spec = theorem_spec;
/* 000065 */ 		self.theorem_type_spec = theorem_type_spec;
/* 000066 */ 		self.allowed_ref_label_prefixes = allowed_ref_label_prefixes;
/* 000066 */ 	});},
/* 000068 */ 	_fields: tuple (['environmentname', 'theorem_spec', 'theorem_type_spec', 'allowed_ref_label_prefixes']),
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
/* 000072 */ 		return (function () {
/* 000072 */ 			var __accu0__ = macrospec;
/* 000074 */ 			return __call__ (__accu0__.LatexEnvironmentBodyContentsParser, __accu0__, __kwargtrans__ ({environmentname: token.arg, contents_parsing_state_delta: __call__ (ParsingStateDelta, null, __kwargtrans__ ({set_attributes: dict ({'is_block_level': true})}))}));
/* 000074 */ 		}) ();
/* 000074 */ 	});},
/* 000081 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000081 */ 		if (arguments.length) {
/* 000081 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000081 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000081 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000081 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000081 */ 					switch (__attrib0__) {
/* 000081 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000081 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000081 */ 					}
/* 000081 */ 				}
/* 000081 */ 			}
/* 000081 */ 		}
/* 000081 */ 		else {
/* 000081 */ 		}
/* 000083 */ 		var node_args = (function () {
/* 000083 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000083 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['thmtitle', 'thmlabel']));
/* 000083 */ 		}) ();
/* 000087 */ 		var thmtitle_nodelist = null;
/* 000088 */ 		if (__t__ ((function () {
/* 000088 */ 			var __accu0__ = __getitem__ (node_args, 'thmtitle');
/* 000088 */ 			return __call__ (__accu0__.was_provided, __accu0__);
/* 000088 */ 		}) ())) {
/* 000089 */ 			var thmtitle_nodelist = (function () {
/* 000089 */ 				var __accu0__ = __getitem__ (node_args, 'thmtitle');
/* 000089 */ 				return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000089 */ 			}) ();
/* 000089 */ 		}
/* 000091 */ 		var relation_ref_target = null;
/* 000092 */ 		var relation_ref_show_ref = false;
/* 000093 */ 		if (__t__ (__getitem__ (self.theorem_type_spec, 'title_enable_relation_ref'))) {
/* 000095 */ 			if (__t__ (__t__ (thmtitle_nodelist !== null) && __gt__ (__call__ (len, null, thmtitle_nodelist), 0))) {
/* 000096 */ 				var chnode = __getitem__ (thmtitle_nodelist, 0);
/* 000098 */ 				if (__t__ (__t__ (chnode !== null) && __t__ ((function () {
/* 000098 */ 					var __accu0__ = chnode;
/* 000098 */ 					return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000099 */ 				}) ()) && (function () {
/* 000099 */ 					var __accu0__ = chnode.chars;
/* 000099 */ 					return __call__ (__accu0__.startswith, __accu0__, '*');
/* 000099 */ 				}) ())) {
/* 000100 */ 					if (__t__ (__ne__ (__call__ (len, null, thmtitle_nodelist), 1))) {
/* 000105 */ 						var __except0__ = __call__ (LatexWalkerLocatedError, null, 'When specifying a proof-ref target as optional argument (‘[*thm:xyz]’), the entire argument must consist of regular characters with no special meaning in FLM.  Got: ‘{}’'.format ((function () {
/* 000105 */ 							var __accu0__ = thmtitle_nodelist;
/* 000105 */ 							return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000105 */ 						}) ()), __kwargtrans__ ({pos: chnode.pos}));
/* 000105 */ 						__except0__.__cause__ = null;
/* 000105 */ 						throw __except0__;
/* 000105 */ 					}
/* 000108 */ 					if (__t__ ((function () {
/* 000108 */ 						var __accu0__ = chnode.chars;
/* 000108 */ 						return __call__ (__accu0__.startswith, __accu0__, '**');
/* 000108 */ 					}) ())) {
/* 000109 */ 						var relation_ref_target = __getslice__ (chnode.chars, 2, null, 1);
/* 000110 */ 						var relation_ref_show_ref = false;
/* 000110 */ 					}
/* 000111 */ 					else if (__t__ ((function () {
/* 000111 */ 						var __accu0__ = chnode.chars;
/* 000111 */ 						return __call__ (__accu0__.startswith, __accu0__, '*');
/* 000111 */ 					}) ())) {
/* 000112 */ 						var relation_ref_target = __getslice__ (chnode.chars, 1, null, 1);
/* 000113 */ 						var relation_ref_show_ref = true;
/* 000113 */ 					}
/* 000113 */ 				}
/* 000113 */ 			}
/* 000113 */ 		}
/* 000115 */ 		if (__t__ (relation_ref_target !== null)) {
/* 000116 */ 			if (__t__ (__in__ (':', relation_ref_target))) {
/* 000117 */ 				var relation_ref_target = (function () {
/* 000117 */ 					var __accu0__ = relation_ref_target;
/* 000117 */ 					return __call__ (__accu0__.py_split, __accu0__, ':', __kwargtrans__ ({maxsplit: 1}));
/* 000117 */ 				}) ();
/* 000117 */ 			}
/* 000118 */ 			else {
/* 000119 */ 				var relation_ref_target = tuple ([null, relation_ref_target]);
/* 000119 */ 			}
/* 000119 */ 		}
/* 000121 */ 		node.flmarg_thmtitle = dict ({'nodelist': thmtitle_nodelist, 'has_relation_ref': (__t__ (relation_ref_target !== null) ? true : false), 'relation_ref_target': relation_ref_target, 'relation_ref_show_ref': relation_ref_show_ref});
/* 000129 */ 		var has_noproofref = null;
/* 000130 */ 		var node_args_thmlabel = __getitem__ (node_args, 'thmlabel');
/* 000131 */ 		if (__t__ ((function () {
/* 000131 */ 			var __accu0__ = node_args_thmlabel;
/* 000131 */ 			return __call__ (__accu0__.was_provided, __accu0__);
/* 000131 */ 		}) ())) {
/* 000132 */ 			var argnodes = (function () {
/* 000132 */ 				var __accu0__ = node_args_thmlabel;
/* 000132 */ 				return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000132 */ 			}) ();
/* 000133 */ 			var __iterable0__ = argnodes;
/* 000133 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000133 */ 				var argnode = __getitem__ (__iterable0__, __index0__);
/* 000134 */ 				if (__t__ (__eq__ (__getitem__ (argnode.delimiters, 0), '\\label'))) {
/* 000134 */ 					continue;
/* 000134 */ 				}
/* 000136 */ 				else if (__t__ (__eq__ (__getitem__ (argnode.delimiters, 0), '\\noproofref'))) {
/* 000137 */ 					var has_noproofref = true;
/* 000137 */ 				}
/* 000138 */ 				else {
/* 000139 */ 					var __except0__ = __call__ (LatexWalkerParseError, null, 'Bad information field macro ‘{}’'.format (__getitem__ (argnode.delimiters, 0)), __kwargtrans__ ({pos: argnode.pos}));
/* 000139 */ 					__except0__.__cause__ = null;
/* 000139 */ 					throw __except0__;
/* 000139 */ 				}
/* 000139 */ 			}
/* 000139 */ 		}
/* 000143 */ 		node.flmarg_has_noproofref = has_noproofref;
/* 000145 */ 		node.flmarg_labels = (function () {
/* 000145 */ 			var __accu0__ = flmspecinfo;
/* 000145 */ 			return __call__ (__accu0__.helper_collect_labels, __accu0__, node_args_thmlabel, self.allowed_ref_label_prefixes, __kwargtrans__ ({allow_unknown_macros: true}));
/* 000145 */ 		}) ();
/* 000151 */ 		return node;
/* 000151 */ 	});},
/* 000153 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000153 */ 		if (arguments.length) {
/* 000153 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000153 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000153 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000153 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000153 */ 					switch (__attrib0__) {
/* 000153 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000153 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000153 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000153 */ 					}
/* 000153 */ 				}
/* 000153 */ 			}
/* 000153 */ 		}
/* 000153 */ 		else {
/* 000153 */ 		}
/* 000155 */ 		var fragment_renderer = render_context.fragment_renderer;
/* 000157 */ 		var thms_mgr = (function () {
/* 000157 */ 			var __accu0__ = render_context;
/* 000157 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'theorems');
/* 000157 */ 		}) ();
/* 000158 */ 		var refs_mgr = (function () {
/* 000158 */ 			var __accu0__ = render_context;
/* 000158 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000158 */ 		}) ();
/* 000162 */ 		var flmarg_thmtitle = node.flmarg_thmtitle;
/* 000163 */ 		var flmarg_labels = node.flmarg_labels;
/* 000167 */ 		if (__t__ (__getitem__ (self.theorem_type_spec, 'numbered'))) {
/* 000169 */ 			var counter = __getitem__ (thms_mgr.counters, self.environmentname);
/* 000170 */ 			var prefix_variant = 'capital';
/* 000172 */ 			var ref_instance = (function () {
/* 000172 */ 				var __accu0__ = refs_mgr;
/* 000172 */ 				return __call__ (__accu0__.register_reference_step_counter, __accu0__, __kwargtrans__ ({node: node, counter: counter, target_href_fn: (function __lambda__ (n) {
/* 000172 */ 					if (arguments.length) {
/* 000172 */ 						var __ilastarg0__ = arguments.length - 1;
/* 000172 */ 						if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000172 */ 							var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000172 */ 							for (var __attrib0__ in __allkwargs0__) {
/* 000172 */ 								switch (__attrib0__) {
/* 000172 */ 									case 'n': var n = __allkwargs0__ [__attrib0__]; break;
/* 000172 */ 								}
/* 000172 */ 							}
/* 000172 */ 						}
/* 000172 */ 					}
/* 000172 */ 					else {
/* 000172 */ 					}
/* 000172 */ 					return '#{}-{}'.format (self.environmentname, n);
/* 000172 */ 				}), counter_with_prefix: true, counter_prefix_variant: prefix_variant}));
/* 000172 */ 			}) ();
/* 000180 */ 			var counter_value = ref_instance.counter_value;
/* 000182 */ 			var title_heading_formatted_flm = ref_instance.formatted_ref_flm_text;
/* 000184 */ 			var target_id = '{}-{}'.format (self.environmentname, counter_value);
/* 000186 */ 			var title_heading_formatted_flm_frag = (function () {
/* 000186 */ 				var __accu0__ = render_context;
/* 000186 */ 				return __call__ (__accu0__.make_standalone_fragment, __accu0__, title_heading_formatted_flm, __kwargtrans__ ({what: 'Theorem heading'}));
/* 000186 */ 			}) ();
/* 000190 */ 			var title_heading_formatted_flm_frag_nodes = title_heading_formatted_flm_frag.nodes;
/* 000192 */ 			var __iterable0__ = flmarg_labels;
/* 000192 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000192 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000192 */ 				var ref_type = __left0__ [0];
/* 000192 */ 				var ref_label = __left0__ [1];
/* 000194 */ 				(function () {
/* 000194 */ 					var __accu0__ = refs_mgr;
/* 000194 */ 					return __call__ (__accu0__.register_reference, __accu0__, ref_type, ref_label, __kwargtrans__ ({node: node, formatted_ref_flm_text: title_heading_formatted_flm_frag, target_href: __add__ ('#', target_id), counter_value: counter_value, counter_formatter_id: counter.formatter.counter_formatter_id}));
/* 000194 */ 				}) ();
/* 000194 */ 			}
/* 000194 */ 		}
/* 000201 */ 		else {
/* 000205 */ 			var theorem_name = __getitem__ (__getitem__ (__getitem__ (self.theorem_spec, 'title'), 'capital'), 'singular');
/* 000207 */ 			var target_id = null;
/* 000210 */ 			var title_heading_formatted_flm_frag_nodes = (function () {
/* 000210 */ 				var __accu0__ = node.latex_walker;
/* 000212 */ 				return __call__ (__accu0__.make_nodelist, __accu0__, [(function () {
/* 000212 */ 					var __accu1__ = node.latex_walker;
/* 000212 */ 					return __call__ (__accu1__.make_node, __accu1__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: theorem_name, pos: node.pos, pos_end: node.pos, parsing_state: node.parsing_state}));
/* 000212 */ 				}) ()], __kwargtrans__ ({parsing_state: node.parsing_state}));
/* 000212 */ 			}) ();
/* 000225 */ 			if (__t__ (__call__ (len, null, flmarg_labels))) {
/* 000226 */ 				var __except0__ = __call__ (LatexWalkerLocatedError, null, __add__ (__add__ ('You cannot use \\label{} in unnumbered theorem environment ‘', self.environmentname), '’'), __kwargtrans__ ({pos: node.pos}));
/* 000226 */ 				__except0__.__cause__ = null;
/* 000226 */ 				throw __except0__;
/* 000226 */ 			}
/* 000226 */ 		}
/* 000238 */ 		var thmtitle_nodelist = null;
/* 000239 */ 		if (__t__ (__getitem__ (flmarg_thmtitle, 'has_relation_ref'))) {
/* 000241 */ 			if (__t__ (__getitem__ (flmarg_thmtitle, 'relation_ref_show_ref'))) {
/* 000243 */ 				var __left0__ = __getitem__ (flmarg_thmtitle, 'relation_ref_target');
/* 000243 */ 				var ref_type = __left0__ [0];
/* 000243 */ 				var ref_label = __left0__ [1];
/* 000246 */ 				var thm_relation_ref_instance = (function () {
/* 000246 */ 					var __accu0__ = refs_mgr;
/* 000246 */ 					return __call__ (__accu0__.get_ref, __accu0__, ref_type, ref_label, node.latex_walker.resource_info);
/* 000246 */ 				}) ();
/* 000250 */ 				var thm_relation_ref_flm_text = thm_relation_ref_instance.formatted_ref_flm_text;
/* 000251 */ 				var thm_relation_ref_flm_frag = (function () {
/* 000251 */ 					var __accu0__ = render_context;
/* 000251 */ 					return __call__ (__accu0__.make_standalone_fragment, __accu0__, thm_relation_ref_flm_text, __kwargtrans__ ({what: 'Thm relation ref'}));
/* 000251 */ 				}) ();
/* 000255 */ 				var thmtitle_nodelist = thm_relation_ref_flm_frag.nodes;
/* 000255 */ 			}
/* 000255 */ 		}
/* 000257 */ 		else if (__t__ (__getitem__ (flmarg_thmtitle, 'nodelist') !== null)) {
/* 000259 */ 			var thmtitle_nodelist = __getitem__ (flmarg_thmtitle, 'nodelist');
/* 000259 */ 		}
/* 000262 */ 		if (__t__ (thmtitle_nodelist !== null)) {
/* 000264 */ 			var heading_nodelist = (function () {
/* 000264 */ 				var __accu0__ = node.latex_walker;
/* 000267 */ 				return __call__ (__accu0__.make_nodelist, __accu0__, __add__ (__add__ (__add__ (__call__ (list, null, title_heading_formatted_flm_frag_nodes), [(function () {
/* 000267 */ 					var __accu1__ = node.latex_walker;
/* 000267 */ 					return __call__ (__accu1__.make_node, __accu1__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: __getitem__ (self.theorem_type_spec, 'heading_title_pre'), pos: node.pos, pos_end: node.pos, parsing_state: node.parsing_state}));
/* 000275 */ 				}) ()]), __call__ (list, null, thmtitle_nodelist)), [(function () {
/* 000275 */ 					var __accu1__ = node.latex_walker;
/* 000275 */ 					return __call__ (__accu1__.make_node, __accu1__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: __getitem__ (self.theorem_type_spec, 'heading_title_post'), pos: node.pos, pos_end: node.pos, parsing_state: node.parsing_state}));
/* 000275 */ 				}) ()]), __kwargtrans__ ({parsing_state: node.parsing_state, pos: node.pos}));
/* 000275 */ 			}) ();
/* 000275 */ 		}
/* 000285 */ 		else {
/* 000289 */ 			var heading_nodelist = title_heading_formatted_flm_frag_nodes;
/* 000289 */ 		}
/* 000294 */ 		var heading_node = __call__ (make_invocable_node_instance, null, latexnodes_nodes.LatexMacroNode, __kwargtrans__ ({flm_spec: (function () {
/* 000294 */ 			var __accu0__ = headings;
/* 000294 */ 			return __call__ (__accu0__.HeadingMacro, __accu0__, __kwargtrans__ ({macroname: null, heading_level: __getitem__ (self.theorem_type_spec, 'theorem_heading_level'), inline_heading: true}));
/* 000294 */ 		}) (), args: dict ({'text': heading_nodelist}), latex_walker: node.latex_walker, parsing_state: node.parsing_state}));
/* 000306 */ 		heading_node.flm_heading_target_id = target_id;
/* 000322 */ 		var final_content_node = (function () {
/* 000322 */ 			var __accu0__ = node.latex_walker;
/* 000322 */ 			return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: __getitem__ (self.theorem_type_spec, 'body_final_content'), pos: node.pos, pos_end: node.pos, parsing_state: node.parsing_state}));
/* 000322 */ 		}) ();
/* 000329 */ 		final_content_node.flm_strip_preceding_whitespace = true;
/* 000332 */ 		if (__t__ (__getitem__ (self.theorem_type_spec, 'body_final_content'))) {
/* 000337 */ 			var body_nodelist = __add__ (__add__ ([heading_node], __call__ (list, null, node.nodelist)), [final_content_node]);
/* 000337 */ 		}
/* 000340 */ 		else {
/* 000347 */ 			var body_nodelist = __add__ ([heading_node], __call__ (list, null, node.nodelist));
/* 000347 */ 		}
/* 000350 */ 		var body_nodelist = (function () {
/* 000350 */ 			var __accu0__ = node.latex_walker;
/* 000350 */ 			return __call__ (__accu0__.make_nodelist, __accu0__, body_nodelist, __kwargtrans__ ({parsing_state: node.parsing_state}));
/* 000350 */ 		}) ();
/* 000355 */ 		var rendered_contents = (function () {
/* 000355 */ 			var __accu0__ = fragment_renderer;
/* 000355 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, body_nodelist, render_context);
/* 000355 */ 		}) ();
/* 000360 */ 		return (function () {
/* 000360 */ 			var __accu0__ = fragment_renderer;
/* 000360 */ 			return __call__ (__accu0__.render_semantic_block, __accu0__, rendered_contents, __getitem__ (self.theorem_spec, 'theorem_type'), render_context, __kwargtrans__ ({annotations: [self.environmentname, 'p-block']}));
/* 000360 */ 		}) ();
/* 000360 */ 	});},
/* 000367 */ 	get recompose_pure_latex () {return __get__ (this, function (self, node, recomposer, visited_results_arguments, visited_results_body) {
/* 000367 */ 		var kwargs = dict ();
/* 000367 */ 		if (arguments.length) {
/* 000367 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000367 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000367 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000367 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000367 */ 					switch (__attrib0__) {
/* 000367 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000367 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000367 */ 						case 'recomposer': var recomposer = __allkwargs0__ [__attrib0__]; break;
/* 000367 */ 						case 'visited_results_arguments': var visited_results_arguments = __allkwargs0__ [__attrib0__]; break;
/* 000367 */ 						case 'visited_results_body': var visited_results_body = __allkwargs0__ [__attrib0__]; break;
/* 000367 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000367 */ 					}
/* 000367 */ 				}
/* 000367 */ 				delete kwargs.__kwargtrans__;
/* 000367 */ 			}
/* 000367 */ 		}
/* 000367 */ 		else {
/* 000367 */ 		}
/* 000370 */ 		var s = __add__ (__add__ ('\\begin{', node.environmentname), '}');
/* 000372 */ 		if (__t__ (!__t__ ((__getitem__ (node.flmarg_thmtitle, 'has_relation_ref'))))) {
/* 000374 */ 			if (__t__ (__getitem__ (visited_results_arguments, 0) !== null)) {
/* 000375 */ 				var s = __call__ (__iadd__, null, s, __getitem__ (visited_results_arguments, 0));
/* 000375 */ 			}
/* 000375 */ 		}
/* 000376 */ 		else {
/* 000377 */ 			var __left0__ = __getitem__ (node.flmarg_thmtitle, 'relation_ref_target');
/* 000377 */ 			var rel_ref_type = __left0__ [0];
/* 000377 */ 			var rel_ref_label = __left0__ [1];
/* 000378 */ 			var safe_label_info = (function () {
/* 000378 */ 				var __accu0__ = recomposer;
/* 000378 */ 				return __call__ (__accu0__.make_safe_label, __accu0__, 'ref', rel_ref_type, rel_ref_label);
/* 000378 */ 			}) ();
/* 000379 */ 			var s = __call__ (__iadd__, null, s, '[*');
/* 000380 */ 			if (__t__ (!__t__ ((__getitem__ (node.flmarg_thmtitle, 'relation_ref_show_ref'))))) {
/* 000381 */ 				var s = __call__ (__iadd__, null, s, '*');
/* 000381 */ 			}
/* 000382 */ 			var s = __call__ (__iadd__, null, s, __getitem__ (safe_label_info, 'safe_label'));
/* 000383 */ 			var s = __call__ (__iadd__, null, s, ']');
/* 000383 */ 		}
/* 000386 */ 		var __iterable0__ = node.flmarg_labels;
/* 000386 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000386 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000386 */ 			var ref_type = __left0__ [0];
/* 000386 */ 			var ref_label = __left0__ [1];
/* 000387 */ 			var safe_label_info = (function () {
/* 000387 */ 				var __accu0__ = recomposer;
/* 000387 */ 				return __call__ (__accu0__.make_safe_label, __accu0__, 'ref', ref_type, ref_label);
/* 000387 */ 			}) ();
/* 000388 */ 			var s = __call__ (__iadd__, null, s, __add__ (__add__ ('\\label{', __getitem__ (safe_label_info, 'safe_label')), '}'));
/* 000388 */ 		}
/* 000390 */ 		var s = __call__ (__iadd__, null, s, (function () {
/* 000390 */ 			var __accu0__ = '';
/* 000390 */ 			return __call__ (__accu0__.join, __accu0__, visited_results_body);
/* 000390 */ 		}) ());
/* 000392 */ 		var s = __call__ (__iadd__, null, s, __add__ (__add__ ('\\end{', node.environmentname), '}'));
/* 000394 */ 		return s;
/* 000394 */ 	});}
/* 000394 */ });
/* 000398 */ export var _default_theorem_environments_simpleset = dict ({'theoremlike': dict ({'theorem': dict ({'title': dict ({'lowercase': 'theorem', 'abbreviated': dict ({'singular': 'Thm.', 'plural': 'Thms.'})})}), 'proposition': dict ({'title': dict ({'lowercase': 'proposition', 'abbreviated': dict ({'singular': 'Prop.', 'plural': 'Props.'})})}), 'lemma': dict ({'title': dict ({'lowercase': 'lemma', 'abbreviated': dict ({'singular': 'Lem.', 'plural': 'Lems.'})})}), 'corollary': dict ({'title': dict ({'lowercase': 'corollary', 'abbreviated': dict ({'singular': 'Cor.', 'plural': 'Cors.'})})})}), 'definitionlike': dict ({'definition': dict ({'title': dict ({'lowercase': 'definition', 'abbreviated': dict ({'singular': 'Def.', 'plural': 'Defs.'})})})}), 'prooflike': dict ({'proof': dict ({'title': dict ({'lowercase': 'proof', 'abbreviated': dict ({'singular': 'Proof', 'plural': 'Proofs'})})})})});
/* 000493 */ export var _default_theorem_environments_defaultset = dict ({'theoremlike': __call__ (dict, null, __getitem__ (_default_theorem_environments_simpleset, 'theoremlike'), __kwargtrans__ (dict ({'conjecture': dict ({'title': dict ({'lowercase': 'conjecture', 'abbreviated': dict ({'singular': 'Conj.', 'plural': 'Conjs.'})})})}))), 'definitionlike': __call__ (dict, null, __getitem__ (_default_theorem_environments_simpleset, 'definitionlike'), __kwargtrans__ (dict ({'remark': dict ({'title': dict ({'lowercase': 'remark', 'abbreviated': dict ({'singular': 'Rem.', 'plural': 'Rems.'})})})}))), 'prooflike': __call__ (dict, null, __getitem__ (_default_theorem_environments_simpleset, 'prooflike'))});
/* 000545 */ export var _default_theorem_environments_richset = dict ({'theoremlike': __call__ (dict, null, __getitem__ (_default_theorem_environments_defaultset, 'theoremlike')), 'definitionlike': __call__ (dict, null, __getitem__ (_default_theorem_environments_defaultset, 'definitionlike'), __kwargtrans__ (dict ({'idea': dict ({'title': dict ({'lowercase': 'idea', 'abbreviated': dict ({'singular': 'Idea', 'plural': 'Ideas'})})}), 'question': dict ({'title': dict ({'lowercase': 'question', 'abbreviated': dict ({'singular': 'Qtn.', 'plural': 'Qtns.'})})}), 'claim': dict ({'title': dict ({'lowercase': 'claim', 'abbreviated': dict ({'singular': 'Clm.', 'plural': 'Clms.'})})}), 'observation': dict ({'title': dict ({'lowercase': 'observation', 'abbreviated': dict ({'singular': 'Obs.', 'plural': 'Obs.'})})}), 'problem': dict ({'title': dict ({'lowercase': 'problem', 'abbreviated': dict ({'singular': 'Prob.', 'plural': 'Probs.'})})})}))), 'prooflike': __call__ (dict, null, __getitem__ (_default_theorem_environments_defaultset, 'prooflike'))});
/* 000549 */ export var default_theorem_environments = dict ({'simpleset': _default_theorem_environments_simpleset, 'defaultset': _default_theorem_environments_defaultset, 'richset': _default_theorem_environments_richset});
/* 000555 */ export var default_theorem_theorem_types = dict ({'theoremlike': dict ({'numbered': true, 'shared_numbering': true, 'counter_formatter': null, 'theorem_heading_level': 'theorem', 'heading_title_pre': ' (', 'heading_title_post': ')', 'title_enable_relation_ref': false, 'body_final_content': ''}), 'definitionlike': dict ({'numbered': true, 'shared_numbering': true, 'counter_formatter': null, 'theorem_heading_level': 'theorem', 'heading_title_pre': ' (', 'heading_title_post': ')', 'title_enable_relation_ref': false}), 'prooflike': dict ({'numbered': false, 'title_enable_relation_ref': true, 'body_final_content': '\xa0□'})});
/* 000587 */ export var default_thm_shared_counter_formatter_spec = dict ({'format_num': 'arabic', 'delimiters': tuple (['', '']), 'join_spec': 'default'});
/* 000594 */ export var default_allowed_ref_label_prefixes = ['thm', 'prop', 'cor', 'lem', 'rem', 'def', 'dfn', 'x', 'topic'];
/* 000601 */ export var FeatureTheorems =  __class__ ('FeatureTheorems', [Feature], {
/* 000601 */ 	__module__: __name__,
/* 000603 */ 	feature_name: 'theorems',
/* 000605 */ 	feature_dependencies: ['refs'],
/* 000616 */ 	feature_default_config: dict ({'environments': __getitem__ (default_theorem_environments, 'defaultset'), 'theorem_types': default_theorem_theorem_types, 'shared_counter_formatter': 'arabic', 'allowed_ref_label_prefixes': default_allowed_ref_label_prefixes}),
/* 000616 */ 	RenderManager: __class__ ('RenderManager', [Feature.RenderManager], {
/* 000616 */ 		__module__: __name__,
/* 000618 */ 		get initialize () {return __get__ (this, function (self) {
/* 000618 */ 			if (arguments.length) {
/* 000618 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000618 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000618 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000618 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000618 */ 						switch (__attrib0__) {
/* 000618 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000618 */ 						}
/* 000618 */ 					}
/* 000618 */ 				}
/* 000618 */ 			}
/* 000618 */ 			else {
/* 000618 */ 			}
/* 000619 */ 			self.shared_counter = __call__ (Counter, null, self.feature.shared_counter_formatter);
/* 000621 */ 			var refs_mgr = (function () {
/* 000621 */ 				var __accu0__ = self.render_context;
/* 000621 */ 				return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000621 */ 			}) ();
/* 000623 */ 			self.counters = dict ({});
/* 000624 */ 			var __iterable0__ = (function () {
/* 000624 */ 				var __accu0__ = self.feature.thm_counter_formatters;
/* 000624 */ 				return __call__ (__accu0__.py_items, __accu0__);
/* 000624 */ 			}) ();
/* 000624 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000624 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000624 */ 				var env_name = __left0__ [0];
/* 000624 */ 				var counter_formatter = __left0__ [1];
/* 000625 */ 				var thm_spec = __getitem__ (self.feature.environments, env_name);
/* 000626 */ 				var thm_type_spec = __getitem__ (self.feature.theorem_types, __getitem__ (thm_spec, 'theorem_type'));
/* 000627 */ 				if (__t__ (__getitem__ (thm_type_spec, 'shared_numbering'))) {
/* 000628 */ 					__setitem__ (self.counters, env_name, __call__ (CounterAlias, null, __kwargtrans__ ({counter_formatter: counter_formatter, alias_counter: self.shared_counter})));
/* 000628 */ 				}
/* 000631 */ 				else {
/* 000633 */ 					__setitem__ (self.counters, env_name, __call__ (Counter, null, __kwargtrans__ ({counter_formatter: counter_formatter})));
/* 000633 */ 				}
/* 000638 */ 				(function () {
/* 000638 */ 					var __accu0__ = refs_mgr;
/* 000638 */ 					return __call__ (__accu0__.register_counter_formatter, __accu0__, __kwargtrans__ ({counter_formatter: counter_formatter}));
/* 000638 */ 				}) ();
/* 000638 */ 			}
/* 000638 */ 		});}
/* 000638 */ 	}),
/* 000643 */ 	get __init__ () {return __get__ (this, function (self, environments, theorem_types, shared_counter_formatter, allowed_ref_label_prefixes) {
/* 000643 */ 		if (typeof environments == 'undefined' || (environments != null && environments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000643 */ 			var environments = null;
/* 000643 */ 		};
/* 000643 */ 		if (typeof theorem_types == 'undefined' || (theorem_types != null && theorem_types.hasOwnProperty ("__kwargtrans__"))) {;
/* 000643 */ 			var theorem_types = null;
/* 000643 */ 		};
/* 000643 */ 		if (typeof shared_counter_formatter == 'undefined' || (shared_counter_formatter != null && shared_counter_formatter.hasOwnProperty ("__kwargtrans__"))) {;
/* 000643 */ 			var shared_counter_formatter = null;
/* 000643 */ 		};
/* 000643 */ 		if (typeof allowed_ref_label_prefixes == 'undefined' || (allowed_ref_label_prefixes != null && allowed_ref_label_prefixes.hasOwnProperty ("__kwargtrans__"))) {;
/* 000643 */ 			var allowed_ref_label_prefixes = null;
/* 000643 */ 		};
/* 000643 */ 		if (arguments.length) {
/* 000643 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000643 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000643 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000643 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000643 */ 					switch (__attrib0__) {
/* 000643 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000643 */ 						case 'environments': var environments = __allkwargs0__ [__attrib0__]; break;
/* 000643 */ 						case 'theorem_types': var theorem_types = __allkwargs0__ [__attrib0__]; break;
/* 000643 */ 						case 'shared_counter_formatter': var shared_counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000643 */ 						case 'allowed_ref_label_prefixes': var allowed_ref_label_prefixes = __allkwargs0__ [__attrib0__]; break;
/* 000643 */ 					}
/* 000643 */ 				}
/* 000643 */ 			}
/* 000643 */ 		}
/* 000643 */ 		else {
/* 000643 */ 		}
/* 000648 */ 		__call__ (__call__ (__super__, null, FeatureTheorems, '__init__'), null, self);
/* 000649 */ 		if (__t__ (environments === null)) {
/* 000650 */ 			var environments = __getitem__ (default_theorem_environments, 'defaultset');
/* 000650 */ 		}
/* 000651 */ 		if (__t__ (__call__ (isinstance, null, environments, str))) {
/* 000652 */ 			var environments = __getitem__ (default_theorem_environments, environments);
/* 000652 */ 		}
/* 000654 */ 		if (__t__ (theorem_types === null)) {
/* 000655 */ 			var theorem_types = default_theorem_theorem_types;
/* 000655 */ 		}
/* 000659 */ 		self.theorem_types = (function () {
/* 000659 */ 			var __accu0__ = [];
/* 000661 */ 			var __iterable0__ = (function () {
/* 000661 */ 				var __accu1__ = __call__ (dict, null, theorem_types);
/* 000661 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000661 */ 			}) ();
/* 000661 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000661 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000661 */ 				var thm_type = __left0__ [0];
/* 000661 */ 				var thm_type_spec = __left0__ [1];
/* 000661 */ 				if (__t__ (thm_type_spec !== null)) {
/* 000662 */ 					(function () {
/* 000662 */ 						var __accu1__ = __accu0__;
/* 000660 */ 						return __call__ (__accu1__.append, __accu1__, [thm_type, (function () {
/* 000660 */ 							var __accu2__ = self;
/* 000660 */ 							return __call__ (__accu2__._standardize_type_spec, __accu2__, thm_type, thm_type_spec);
/* 000660 */ 						}) ()]);
/* 000660 */ 					}) ();
/* 000660 */ 				}
/* 000660 */ 			}
/* 000660 */ 			return dict (__accu0__);
/* 000660 */ 		}) ();
/* 000667 */ 		self.environments = dict ({});
/* 000668 */ 		var __iterable0__ = (function () {
/* 000668 */ 			var __accu0__ = environments;
/* 000668 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000668 */ 		}) ();
/* 000668 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000668 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000668 */ 			var thm_type = __left0__ [0];
/* 000668 */ 			var env_list = __left0__ [1];
/* 000669 */ 			var __iterable1__ = (function () {
/* 000669 */ 				var __accu0__ = env_list;
/* 000669 */ 				return __call__ (__accu0__.py_items, __accu0__);
/* 000669 */ 			}) ();
/* 000669 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000669 */ 				var __left0__ = __getitem__ (__iterable1__, __index1__);
/* 000669 */ 				var env_name = __left0__ [0];
/* 000669 */ 				var thm_spec = __left0__ [1];
/* 000670 */ 				if (__t__ (__in__ ('env_name', self.environments))) {
/* 000671 */ 					var __except0__ = __call__ (ValueError, null, 'Duplicate definition of theorem environment ‘{}’'.format (env_name));
/* 000671 */ 					__except0__.__cause__ = null;
/* 000671 */ 					throw __except0__;
/* 000671 */ 				}
/* 000675 */ 				__setitem__ (self.environments, env_name, (function () {
/* 000675 */ 					var __accu0__ = self;
/* 000675 */ 					return __call__ (__accu0__._standardize_thm_spec, __accu0__, thm_type, env_name, thm_spec);
/* 000675 */ 				}) ());
/* 000675 */ 			}
/* 000675 */ 		}
/* 000679 */ 		self.shared_counter_formatter = __call__ (build_counter_formatter, null, shared_counter_formatter, default_thm_shared_counter_formatter_spec, __kwargtrans__ ({counter_formatter_id: '_theorems_shared'}));
/* 000685 */ 		var use_default_counter_formatter_spec = (function () {
/* 000685 */ 			var __accu0__ = self.shared_counter_formatter;
/* 000685 */ 			return __call__ (__accu0__.asdict, __accu0__);
/* 000685 */ 		}) ();
/* 000687 */ 		self.thm_counter_formatters = dict ({});
/* 000688 */ 		var __iterable0__ = (function () {
/* 000688 */ 			var __accu0__ = self.environments;
/* 000688 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000688 */ 		}) ();
/* 000688 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000688 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000688 */ 			var env_name = __left0__ [0];
/* 000688 */ 			var thm_spec = __left0__ [1];
/* 000689 */ 			var thm_type_spec = __getitem__ (self.theorem_types, __getitem__ (thm_spec, 'theorem_type'));
/* 000690 */ 			if (__t__ (!__t__ ((__getitem__ (thm_type_spec, 'numbered'))))) {
/* 000690 */ 				continue;
/* 000690 */ 			}
/* 000694 */ 			var counter_formatter_spec = (function () {
/* 000694 */ 				var __accu0__ = thm_type_spec;
/* 000694 */ 				return __call__ (__accu0__.py_get, __accu0__, 'counter_formatter', null);
/* 000694 */ 			}) ();
/* 000695 */ 			if (__t__ (counter_formatter_spec === null)) {
/* 000696 */ 				var counter_formatter_spec = dict ({});
/* 000696 */ 			}
/* 000697 */ 			else if (__t__ (__call__ (isinstance, null, counter_formatter_spec, str))) {
/* 000698 */ 				var counter_formatter_spec = dict ({'format_num': counter_formatter_spec});
/* 000698 */ 			}
/* 000699 */ 			else {
/* 000700 */ 				var counter_formatter_spec = __call__ (dict, null, counter_formatter_spec);
/* 000700 */ 			}
/* 000706 */ 			__setitem__ (counter_formatter_spec, 'prefix_display', (function () {
/* 000706 */ 				var __accu0__ = self;
/* 000706 */ 				return __call__ (__accu0__._make_counter_formatter_prefix_for_thm, __accu0__, env_name, thm_spec);
/* 000706 */ 			}) ());
/* 000710 */ 			__setitem__ (self.thm_counter_formatters, env_name, __call__ (build_counter_formatter, null, counter_formatter_spec, use_default_counter_formatter_spec, __kwargtrans__ ({counter_formatter_id: env_name})));
/* 000710 */ 		}
/* 000716 */ 		self.allowed_ref_label_prefixes = __call__ (list, null, (__t__ (allowed_ref_label_prefixes !== null) ? allowed_ref_label_prefixes : default_allowed_ref_label_prefixes));
/* 000716 */ 	});},
/* 000723 */ 	get _standardize_type_spec () {return __get__ (this, function (self, thm_type, thm_type_spec) {
/* 000723 */ 		if (arguments.length) {
/* 000723 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000723 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000723 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000723 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000723 */ 					switch (__attrib0__) {
/* 000723 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000723 */ 						case 'thm_type': var thm_type = __allkwargs0__ [__attrib0__]; break;
/* 000723 */ 						case 'thm_type_spec': var thm_type_spec = __allkwargs0__ [__attrib0__]; break;
/* 000723 */ 					}
/* 000723 */ 				}
/* 000723 */ 			}
/* 000723 */ 		}
/* 000723 */ 		else {
/* 000723 */ 		}
/* 000725 */ 		var spec = __call__ (dict, null, __getitem__ (default_theorem_theorem_types, 'theoremlike'));
/* 000726 */ 		(function () {
/* 000726 */ 			var __accu0__ = spec;
/* 000726 */ 			return __call__ (__accu0__.py_update, __accu0__, thm_type_spec);
/* 000726 */ 		}) ();
/* 000727 */ 		return spec;
/* 000727 */ 	});},
/* 000729 */ 	get _standardize_thm_spec () {return __get__ (this, function (self, thm_type, env_name, thm_spec) {
/* 000729 */ 		if (arguments.length) {
/* 000729 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000729 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000729 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000729 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000729 */ 					switch (__attrib0__) {
/* 000729 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000729 */ 						case 'thm_type': var thm_type = __allkwargs0__ [__attrib0__]; break;
/* 000729 */ 						case 'env_name': var env_name = __allkwargs0__ [__attrib0__]; break;
/* 000729 */ 						case 'thm_spec': var thm_spec = __allkwargs0__ [__attrib0__]; break;
/* 000729 */ 					}
/* 000729 */ 				}
/* 000729 */ 			}
/* 000729 */ 		}
/* 000729 */ 		else {
/* 000729 */ 		}
/* 000730 */ 		if (__t__ (thm_spec === true)) {
/* 000731 */ 			var thm_spec = env_name;
/* 000731 */ 		}
/* 000732 */ 		if (__t__ (__call__ (isinstance, null, thm_spec, str))) {
/* 000733 */ 			var thm_spec = dict ({'title': thm_spec});
/* 000733 */ 		}
/* 000734 */ 		else {
/* 000735 */ 			var thm_spec = __call__ (dict, null, thm_spec);
/* 000735 */ 		}
/* 000737 */ 		__setitem__ (thm_spec, 'theorem_type', thm_type);
/* 000740 */ 		var new_title_spec = dict ({});
/* 000741 */ 		var title = (function () {
/* 000741 */ 			var __accu0__ = thm_spec;
/* 000741 */ 			return __call__ (__accu0__.py_get, __accu0__, 'title', null);
/* 000741 */ 		}) ();
/* 000742 */ 		if (__t__ (title === null)) {
/* 000743 */ 			var title = env_name;
/* 000743 */ 		}
/* 000744 */ 		if (__t__ (__call__ (isinstance, null, title, str))) {
/* 000745 */ 			var title = dict ({'lowercase': dict ({'singular': title, 'plural': __add__ (title, 's')})});
/* 000745 */ 		}
/* 000748 */ 		if (__t__ (__in__ ('lowercase', title))) {
/* 000749 */ 			var lowercase = __getitem__ (title, 'lowercase');
/* 000750 */ 			if (__t__ (__call__ (isinstance, null, lowercase, str))) {
/* 000751 */ 				__setitem__ (new_title_spec, 'lowercase', dict ({'singular': lowercase, 'plural': __add__ (lowercase, 's')}));
/* 000751 */ 			}
/* 000754 */ 			else {
/* 000756 */ 				__setitem__ (new_title_spec, 'lowercase', lowercase);
/* 000756 */ 			}
/* 000756 */ 		}
/* 000757 */ 		else {
/* 000759 */ 			__setitem__ (new_title_spec, 'lowercase', dict ({'singular': '??', 'plural': '???'}));
/* 000759 */ 		}
/* 000761 */ 		if (__t__ (__in__ ('capital', title))) {
/* 000762 */ 			var capital = __getitem__ (title, 'capital');
/* 000763 */ 			if (__t__ (__call__ (isinstance, null, capital, str))) {
/* 000764 */ 				__setitem__ (new_title_spec, 'capital', dict ({'singular': capital, 'plural': __add__ (capital, 's')}));
/* 000764 */ 			}
/* 000767 */ 			else {
/* 000769 */ 				__setitem__ (new_title_spec, 'capital', capital);
/* 000769 */ 			}
/* 000769 */ 		}
/* 000770 */ 		else {
/* 000773 */ 			__setitem__ (new_title_spec, 'capital', dict ({'singular': (function () {
/* 000773 */ 				var __accu0__ = __getitem__ (__getitem__ (new_title_spec, 'lowercase'), 'singular');
/* 000773 */ 				return __call__ (__accu0__.capitalize, __accu0__);
/* 000774 */ 			}) (), 'plural': (function () {
/* 000774 */ 				var __accu0__ = __getitem__ (__getitem__ (new_title_spec, 'lowercase'), 'plural');
/* 000774 */ 				return __call__ (__accu0__.capitalize, __accu0__);
/* 000774 */ 			}) ()}));
/* 000774 */ 		}
/* 000777 */ 		if (__t__ (__in__ ('abbreviated', title))) {
/* 000778 */ 			var abbreviated = __getitem__ (title, 'abbreviated');
/* 000779 */ 			if (__t__ (__call__ (isinstance, null, abbreviated, str))) {
/* 000780 */ 				__setitem__ (new_title_spec, 'abbreviated', dict ({'singular': abbreviated, 'plural': __add__ (abbreviated, 's')}));
/* 000780 */ 			}
/* 000783 */ 			else {
/* 000785 */ 				__setitem__ (new_title_spec, 'abbreviated', abbreviated);
/* 000785 */ 			}
/* 000785 */ 		}
/* 000786 */ 		else {
/* 000790 */ 			__setitem__ (new_title_spec, 'abbreviated', dict ({'singular': __add__ (__getslice__ (__getitem__ (__getitem__ (new_title_spec, 'capital'), 'singular'), 0, 3, 1), '.'), 'plural': __add__ ((function () {
/* 000790 */ 				var __accu0__ = __getslice__ (__getitem__ (__getitem__ (new_title_spec, 'capital'), 'plural'), 0, 3, 1);
/* 000790 */ 				return __call__ (__accu0__.rstrip, __accu0__, 's');
/* 000790 */ 			}) (), 's.')}));
/* 000790 */ 		}
/* 000793 */ 		__setitem__ (thm_spec, 'title', new_title_spec);
/* 000795 */ 		return thm_spec;
/* 000795 */ 	});},
/* 000798 */ 	get _make_counter_formatter_prefix_for_thm () {return __get__ (this, function (self, env_name, thm_spec) {
/* 000798 */ 		if (arguments.length) {
/* 000798 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000798 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000798 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000798 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000798 */ 					switch (__attrib0__) {
/* 000798 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000798 */ 						case 'env_name': var env_name = __allkwargs0__ [__attrib0__]; break;
/* 000798 */ 						case 'thm_spec': var thm_spec = __allkwargs0__ [__attrib0__]; break;
/* 000798 */ 					}
/* 000798 */ 				}
/* 000798 */ 			}
/* 000798 */ 		}
/* 000798 */ 		else {
/* 000798 */ 		}
/* 000799 */ 		var prefix = dict ({});
/* 000801 */ 		var _add_space_values = function (x) {
/* 000801 */ 			if (arguments.length) {
/* 000801 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000801 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000801 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000801 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000801 */ 						switch (__attrib0__) {
/* 000801 */ 							case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000801 */ 						}
/* 000801 */ 					}
/* 000801 */ 				}
/* 000801 */ 			}
/* 000801 */ 			else {
/* 000801 */ 			}
/* 000802 */ 			return (function () {
/* 000802 */ 				var __accu0__ = [];
/* 000802 */ 				var __iterable0__ = (function () {
/* 000802 */ 					var __accu1__ = x;
/* 000802 */ 					return __call__ (__accu1__.py_items, __accu1__);
/* 000802 */ 				}) ();
/* 000802 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000802 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000802 */ 					var k = __left0__ [0];
/* 000802 */ 					var v = __left0__ [1];
/* 000802 */ 					(function () {
/* 000802 */ 						var __accu1__ = __accu0__;
/* 000802 */ 						return __call__ (__accu1__.append, __accu1__, [k, __add__ (v, '~')]);
/* 000802 */ 					}) ();
/* 000802 */ 				}
/* 000802 */ 				return dict (__accu0__);
/* 000802 */ 			}) ();
/* 000802 */ 		};
/* 000804 */ 		__setitem__ (prefix, 'lowercase', __call__ (_add_space_values, null, __getitem__ (__getitem__ (thm_spec, 'title'), 'lowercase')));
/* 000805 */ 		__setitem__ (prefix, 'capital', __call__ (_add_space_values, null, __getitem__ (__getitem__ (thm_spec, 'title'), 'capital')));
/* 000806 */ 		__setitem__ (prefix, 'abbreviated', __call__ (_add_space_values, null, __getitem__ (__getitem__ (thm_spec, 'title'), 'abbreviated')));
/* 000808 */ 		(function () {
/* 000808 */ 			var __accu0__ = prefix;
/* 000808 */ 			return __call__ (__accu0__.py_update, __accu0__, __getitem__ (prefix, 'capital'));
/* 000808 */ 		}) ();
/* 000810 */ 		return prefix;
/* 000810 */ 	});},
/* 000813 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000813 */ 		if (arguments.length) {
/* 000813 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000813 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000813 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000813 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000813 */ 					switch (__attrib0__) {
/* 000813 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000813 */ 					}
/* 000813 */ 				}
/* 000813 */ 			}
/* 000813 */ 		}
/* 000813 */ 		else {
/* 000813 */ 		}
/* 000815 */ 		var environment_specs = [];
/* 000817 */ 		var __iterable0__ = (function () {
/* 000817 */ 			var __accu0__ = self.environments;
/* 000817 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000817 */ 		}) ();
/* 000817 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000817 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000817 */ 			var env_name = __left0__ [0];
/* 000817 */ 			var thm_spec = __left0__ [1];
/* 000818 */ 			(function () {
/* 000818 */ 				var __accu0__ = environment_specs;
/* 000818 */ 				return __call__ (__accu0__.append, __accu0__, __call__ (TheoremEnvironment, null, __kwargtrans__ ({environmentname: env_name, theorem_spec: thm_spec, theorem_type_spec: __getitem__ (self.theorem_types, __getitem__ (thm_spec, 'theorem_type')), allowed_ref_label_prefixes: self.allowed_ref_label_prefixes})));
/* 000818 */ 			}) ();
/* 000818 */ 		}
/* 000825 */ 		return dict ({'environments': environment_specs});
/* 000825 */ 	});}
/* 000825 */ });
/* 000832 */ export var FeatureClass = FeatureTheorems;
/* 000007 */ 
//# sourceMappingURL=flm.feature.theorems.map