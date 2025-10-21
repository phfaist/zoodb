/* 000001 */ // Transcrypt'ed from Python, 2025-10-21 23:26:10
/* 000007 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000023 */ import * as headings from './flm.feature.headings.js';
/* 000022 */ import {Feature} from './flm.feature._base.js';
/* 000019 */ import * as numbering from './flm.feature.numbering.js';
/* 000018 */ import {build_counter_formatter} from './flm.counter.js';
/* 000015 */ import * as flmspecinfo from './flm.flmspecinfo.js';
/* 000014 */ import {FLMArgumentSpec, make_invocable_node_instance} from './flm.flmenvironment.js';
/* 000012 */ import * as macrospec from './pylatexenc.macrospec.js';
/* 000009 */ import {LatexTackOnInformationFieldMacrosParser} from './pylatexenc.latexnodes.parsers.js';
/* 000008 */ import * as latexnodes_nodes from './pylatexenc.latexnodes.nodes.js';
/* 000007 */ import {ParsedArgumentsInfo, ParsingStateDelta} from './pylatexenc.latexnodes.js';
/* 000007 */ export {ParsingStateDelta, flmspecinfo, build_counter_formatter, make_invocable_node_instance, Feature, numbering, LatexTackOnInformationFieldMacrosParser, macrospec, FLMArgumentSpec, latexnodes_nodes, ParsedArgumentsInfo, headings};
/* 000001 */ var __name__ = 'flm.feature.theorems';
/* 000029 */ export var optional_text_arg = __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: '[', argname: 'thmtitle', flm_doc: 'An optional theorem environment title'}));
/* 000038 */ export var thmlabel_arg = __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: __call__ (LatexTackOnInformationFieldMacrosParser, null, ['label', 'noproofref'], __kwargtrans__ ({allow_multiple: true, macro_arg_parsers: dict ({'noproofref': null})})), argname: 'thmlabel', flm_doc: 'A following \\verbcode+\\label{…}+ macro attaches a label to this macro call; a following \\noproofref indicates that there is no corresponding {proof} environment to look for in the document.'}));
/* 000050 */ export var TheoremEnvironment =  __class__ ('TheoremEnvironment', [flmspecinfo.FLMEnvironmentSpecBase], {
/* 000050 */ 	__module__: __name__,
/* 000052 */ 	is_block_level: true,
/* 000054 */ 	body_contents_is_block_level: true,
/* 000056 */ 	get __init__ () {return __get__ (this, function (self, environmentname, theorem_spec, theorem_type_spec, allowed_ref_label_prefixes) {
/* 000056 */ 		if (arguments.length) {
/* 000056 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000056 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000056 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000056 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000056 */ 					switch (__attrib0__) {
/* 000056 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000056 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000056 */ 						case 'theorem_spec': var theorem_spec = __allkwargs0__ [__attrib0__]; break;
/* 000056 */ 						case 'theorem_type_spec': var theorem_type_spec = __allkwargs0__ [__attrib0__]; break;
/* 000056 */ 						case 'allowed_ref_label_prefixes': var allowed_ref_label_prefixes = __allkwargs0__ [__attrib0__]; break;
/* 000056 */ 					}
/* 000056 */ 				}
/* 000056 */ 			}
/* 000056 */ 		}
/* 000056 */ 		else {
/* 000056 */ 		}
/* 000058 */ 		__call__ (__call__ (__super__, null, TheoremEnvironment, '__init__'), null, self, environmentname, __kwargtrans__ ({arguments_spec_list: [optional_text_arg, thmlabel_arg]}));
/* 000065 */ 		self.theorem_spec = theorem_spec;
/* 000066 */ 		self.theorem_type_spec = theorem_type_spec;
/* 000067 */ 		self.allowed_ref_label_prefixes = allowed_ref_label_prefixes;
/* 000067 */ 	});},
/* 000069 */ 	_fields: tuple (['environmentname', 'theorem_spec', 'theorem_type_spec', 'allowed_ref_label_prefixes']),
/* 000072 */ 	get make_body_parser () {return __get__ (this, function (self, token, nodeargd, arg_parsing_state_delta) {
/* 000072 */ 		if (arguments.length) {
/* 000072 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000072 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000072 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000072 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000072 */ 					switch (__attrib0__) {
/* 000072 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000072 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000072 */ 						case 'nodeargd': var nodeargd = __allkwargs0__ [__attrib0__]; break;
/* 000072 */ 						case 'arg_parsing_state_delta': var arg_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000072 */ 					}
/* 000072 */ 				}
/* 000072 */ 			}
/* 000072 */ 		}
/* 000072 */ 		else {
/* 000072 */ 		}
/* 000073 */ 		return (function () {
/* 000073 */ 			var __accu0__ = macrospec;
/* 000075 */ 			return __call__ (__accu0__.LatexEnvironmentBodyContentsParser, __accu0__, __kwargtrans__ ({environmentname: token.arg, contents_parsing_state_delta: __call__ (ParsingStateDelta, null, __kwargtrans__ ({set_attributes: dict ({'is_block_level': true})}))}));
/* 000075 */ 		}) ();
/* 000075 */ 	});},
/* 000082 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000082 */ 		if (arguments.length) {
/* 000082 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000082 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000082 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000082 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000082 */ 					switch (__attrib0__) {
/* 000082 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000082 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000082 */ 					}
/* 000082 */ 				}
/* 000082 */ 			}
/* 000082 */ 		}
/* 000082 */ 		else {
/* 000082 */ 		}
/* 000084 */ 		var node_args = (function () {
/* 000084 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000084 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['thmtitle', 'thmlabel']));
/* 000084 */ 		}) ();
/* 000088 */ 		var thmtitle_nodelist = null;
/* 000089 */ 		if (__t__ ((function () {
/* 000089 */ 			var __accu0__ = __getitem__ (node_args, 'thmtitle');
/* 000089 */ 			return __call__ (__accu0__.was_provided, __accu0__);
/* 000089 */ 		}) ())) {
/* 000090 */ 			var thmtitle_nodelist = (function () {
/* 000090 */ 				var __accu0__ = __getitem__ (node_args, 'thmtitle');
/* 000090 */ 				return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000090 */ 			}) ();
/* 000090 */ 		}
/* 000092 */ 		var relation_ref_target = null;
/* 000093 */ 		var relation_ref_show_ref = false;
/* 000094 */ 		if (__t__ (__getitem__ (self.theorem_type_spec, 'title_enable_relation_ref'))) {
/* 000096 */ 			if (__t__ (__t__ (thmtitle_nodelist !== null) && __gt__ (__call__ (len, null, thmtitle_nodelist), 0))) {
/* 000097 */ 				var chnode = __getitem__ (thmtitle_nodelist, 0);
/* 000099 */ 				if (__t__ (__t__ (chnode !== null) && __t__ ((function () {
/* 000099 */ 					var __accu0__ = chnode;
/* 000099 */ 					return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000100 */ 				}) ()) && (function () {
/* 000100 */ 					var __accu0__ = chnode.chars;
/* 000100 */ 					return __call__ (__accu0__.startswith, __accu0__, '*');
/* 000100 */ 				}) ())) {
/* 000101 */ 					if (__t__ (__ne__ (__call__ (len, null, thmtitle_nodelist), 1))) {
/* 000106 */ 						var __except0__ = __call__ (LatexWalkerLocatedError, null, 'When specifying a proof-ref target as optional argument (‘[*thm:xyz]’), the entire argument must consist of regular characters with no special meaning in FLM.  Got: ‘{}’'.format ((function () {
/* 000106 */ 							var __accu0__ = thmtitle_nodelist;
/* 000106 */ 							return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000106 */ 						}) ()), __kwargtrans__ ({pos: chnode.pos}));
/* 000106 */ 						__except0__.__cause__ = null;
/* 000106 */ 						throw __except0__;
/* 000106 */ 					}
/* 000109 */ 					if (__t__ ((function () {
/* 000109 */ 						var __accu0__ = chnode.chars;
/* 000109 */ 						return __call__ (__accu0__.startswith, __accu0__, '**');
/* 000109 */ 					}) ())) {
/* 000110 */ 						var relation_ref_target = __getslice__ (chnode.chars, 2, null, 1);
/* 000111 */ 						var relation_ref_show_ref = false;
/* 000111 */ 					}
/* 000112 */ 					else if (__t__ ((function () {
/* 000112 */ 						var __accu0__ = chnode.chars;
/* 000112 */ 						return __call__ (__accu0__.startswith, __accu0__, '*');
/* 000112 */ 					}) ())) {
/* 000113 */ 						var relation_ref_target = __getslice__ (chnode.chars, 1, null, 1);
/* 000114 */ 						var relation_ref_show_ref = true;
/* 000114 */ 					}
/* 000114 */ 				}
/* 000114 */ 			}
/* 000114 */ 		}
/* 000116 */ 		if (__t__ (relation_ref_target !== null)) {
/* 000117 */ 			if (__t__ (__in__ (':', relation_ref_target))) {
/* 000118 */ 				var relation_ref_target = (function () {
/* 000118 */ 					var __accu0__ = relation_ref_target;
/* 000118 */ 					return __call__ (__accu0__.py_split, __accu0__, ':', __kwargtrans__ ({maxsplit: 1}));
/* 000118 */ 				}) ();
/* 000118 */ 			}
/* 000119 */ 			else {
/* 000120 */ 				var relation_ref_target = tuple ([null, relation_ref_target]);
/* 000120 */ 			}
/* 000120 */ 		}
/* 000122 */ 		node.flmarg_thmtitle = dict ({'nodelist': thmtitle_nodelist, 'has_relation_ref': (__t__ (relation_ref_target !== null) ? true : false), 'relation_ref_target': relation_ref_target, 'relation_ref_show_ref': relation_ref_show_ref});
/* 000130 */ 		var has_noproofref = null;
/* 000131 */ 		var node_args_thmlabel = __getitem__ (node_args, 'thmlabel');
/* 000132 */ 		if (__t__ ((function () {
/* 000132 */ 			var __accu0__ = node_args_thmlabel;
/* 000132 */ 			return __call__ (__accu0__.was_provided, __accu0__);
/* 000132 */ 		}) ())) {
/* 000133 */ 			var argnodes = (function () {
/* 000133 */ 				var __accu0__ = node_args_thmlabel;
/* 000133 */ 				return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000133 */ 			}) ();
/* 000134 */ 			var __iterable0__ = argnodes;
/* 000134 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000134 */ 				var argnode = __getitem__ (__iterable0__, __index0__);
/* 000135 */ 				if (__t__ (__eq__ (__getitem__ (argnode.delimiters, 0), '\\label'))) {
/* 000135 */ 					continue;
/* 000135 */ 				}
/* 000137 */ 				else if (__t__ (__eq__ (__getitem__ (argnode.delimiters, 0), '\\noproofref'))) {
/* 000138 */ 					var has_noproofref = true;
/* 000138 */ 				}
/* 000139 */ 				else {
/* 000140 */ 					var __except0__ = __call__ (LatexWalkerParseError, null, 'Bad information field macro ‘{}’'.format (__getitem__ (argnode.delimiters, 0)), __kwargtrans__ ({pos: argnode.pos}));
/* 000140 */ 					__except0__.__cause__ = null;
/* 000140 */ 					throw __except0__;
/* 000140 */ 				}
/* 000140 */ 			}
/* 000140 */ 		}
/* 000144 */ 		node.flmarg_has_noproofref = has_noproofref;
/* 000146 */ 		node.flmarg_labels = (function () {
/* 000146 */ 			var __accu0__ = flmspecinfo;
/* 000146 */ 			return __call__ (__accu0__.helper_collect_labels, __accu0__, node_args_thmlabel, self.allowed_ref_label_prefixes, __kwargtrans__ ({allow_unknown_macros: true}));
/* 000146 */ 		}) ();
/* 000152 */ 		return node;
/* 000152 */ 	});},
/* 000154 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000154 */ 		if (arguments.length) {
/* 000154 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000154 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000154 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000154 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000154 */ 					switch (__attrib0__) {
/* 000154 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000154 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000154 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000154 */ 					}
/* 000154 */ 				}
/* 000154 */ 			}
/* 000154 */ 		}
/* 000154 */ 		else {
/* 000154 */ 		}
/* 000156 */ 		var fragment_renderer = render_context.fragment_renderer;
/* 000158 */ 		var thms_mgr = (function () {
/* 000158 */ 			var __accu0__ = render_context;
/* 000158 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'theorems');
/* 000158 */ 		}) ();
/* 000159 */ 		var refs_mgr = (function () {
/* 000159 */ 			var __accu0__ = render_context;
/* 000159 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000159 */ 		}) ();
/* 000163 */ 		var flmarg_thmtitle = node.flmarg_thmtitle;
/* 000164 */ 		var flmarg_labels = node.flmarg_labels;
/* 000168 */ 		if (__t__ (__getitem__ (self.theorem_type_spec, 'numbered'))) {
/* 000170 */ 			var counter_iface = __getitem__ (thms_mgr.counter_ifaces, self.environmentname);
/* 000171 */ 			var prefix_variant = 'capital';
/* 000173 */ 			var _target_href_fn = function (value) {
/* 000173 */ 				var numprefix = null;
/* 000173 */ 				if (arguments.length) {
/* 000173 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000173 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000173 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000173 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000173 */ 							switch (__attrib0__) {
/* 000173 */ 								case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000173 */ 								case 'numprefix': var numprefix = __allkwargs0__ [__attrib0__]; break;
/* 000173 */ 							}
/* 000173 */ 						}
/* 000173 */ 					}
/* 000173 */ 				}
/* 000173 */ 				else {
/* 000173 */ 				}
/* 000174 */ 				return '#{}-{}'.format (self.environmentname, (function () {
/* 000174 */ 					var __accu0__ = value;
/* 000174 */ 					return __call__ (__accu0__.targetidstr, __accu0__, __kwargtrans__ ({numprefix: numprefix}));
/* 000174 */ 				}) ());
/* 000174 */ 			};
/* 000176 */ 			var ref_instance = (function () {
/* 000176 */ 				var __accu0__ = refs_mgr;
/* 000176 */ 				return __call__ (__accu0__.register_reference_step_counter, __accu0__, __kwargtrans__ ({node: node, counter_iface: counter_iface, target_href_fn: _target_href_fn, counter_with_prefix: true, counter_prefix_variant: prefix_variant}));
/* 000176 */ 			}) ();
/* 000184 */ 			var counter_value = ref_instance.counter_value;
/* 000186 */ 			var title_heading_formatted_flm = ref_instance.formatted_ref_flm_text;
/* 000188 */ 			var title_heading_formatted_flm_frag = (function () {
/* 000188 */ 				var __accu0__ = render_context;
/* 000188 */ 				return __call__ (__accu0__.make_standalone_fragment, __accu0__, title_heading_formatted_flm, __kwargtrans__ ({what: 'Theorem heading'}));
/* 000188 */ 			}) ();
/* 000192 */ 			var title_heading_formatted_flm_frag_nodes = title_heading_formatted_flm_frag.nodes;
/* 000194 */ 			var __iterable0__ = flmarg_labels;
/* 000194 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000194 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000194 */ 				var ref_type = __left0__ [0];
/* 000194 */ 				var ref_label = __left0__ [1];
/* 000196 */ 				(function () {
/* 000196 */ 					var __accu0__ = refs_mgr;
/* 000196 */ 					return __call__ (__accu0__.register_reference, __accu0__, ref_type, ref_label, __kwargtrans__ ({node: node, formatted_ref_flm_text: title_heading_formatted_flm_frag, target_href: ref_instance.target_href, counter_value: counter_value, counter_numprefix: ref_instance.counter_numprefix, counter_formatter_id: counter_iface.formatter.counter_formatter_id}));
/* 000196 */ 				}) ();
/* 000196 */ 			}
/* 000206 */ 			var target_id = __t__ (__getslice__ (ref_instance.target_href, 1, null, 1)) || null;
/* 000206 */ 		}
/* 000207 */ 		else {
/* 000210 */ 			var theorem_name = __getitem__ (__getitem__ (__getitem__ (self.theorem_spec, 'title'), 'capital'), 'singular');
/* 000212 */ 			var target_id = null;
/* 000215 */ 			var title_heading_formatted_flm_frag_nodes = (function () {
/* 000215 */ 				var __accu0__ = node.latex_walker;
/* 000217 */ 				return __call__ (__accu0__.make_nodelist, __accu0__, [(function () {
/* 000217 */ 					var __accu1__ = node.latex_walker;
/* 000217 */ 					return __call__ (__accu1__.make_node, __accu1__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: theorem_name, pos: node.pos, pos_end: node.pos, parsing_state: node.parsing_state}));
/* 000217 */ 				}) ()], __kwargtrans__ ({parsing_state: node.parsing_state}));
/* 000217 */ 			}) ();
/* 000230 */ 			if (__t__ (__call__ (len, null, flmarg_labels))) {
/* 000231 */ 				var __except0__ = __call__ (LatexWalkerLocatedError, null, __add__ (__add__ ('You cannot use \\label{} in unnumbered theorem environment ‘', self.environmentname), '’'), __kwargtrans__ ({pos: node.pos}));
/* 000231 */ 				__except0__.__cause__ = null;
/* 000231 */ 				throw __except0__;
/* 000231 */ 			}
/* 000231 */ 		}
/* 000243 */ 		var thmtitle_nodelist = null;
/* 000244 */ 		if (__t__ (__getitem__ (flmarg_thmtitle, 'has_relation_ref'))) {
/* 000246 */ 			if (__t__ (__getitem__ (flmarg_thmtitle, 'relation_ref_show_ref'))) {
/* 000248 */ 				var __left0__ = __getitem__ (flmarg_thmtitle, 'relation_ref_target');
/* 000248 */ 				var ref_type = __left0__ [0];
/* 000248 */ 				var ref_label = __left0__ [1];
/* 000251 */ 				var thm_relation_ref_instance = (function () {
/* 000251 */ 					var __accu0__ = refs_mgr;
/* 000251 */ 					return __call__ (__accu0__.get_ref, __accu0__, ref_type, ref_label, node.latex_walker.resource_info);
/* 000251 */ 				}) ();
/* 000255 */ 				var thm_relation_ref_flm_text = thm_relation_ref_instance.formatted_ref_flm_text;
/* 000256 */ 				var thm_relation_ref_flm_frag = (function () {
/* 000256 */ 					var __accu0__ = render_context;
/* 000256 */ 					return __call__ (__accu0__.make_standalone_fragment, __accu0__, thm_relation_ref_flm_text, __kwargtrans__ ({what: 'Thm relation ref'}));
/* 000256 */ 				}) ();
/* 000260 */ 				var thmtitle_nodelist = thm_relation_ref_flm_frag.nodes;
/* 000260 */ 			}
/* 000260 */ 		}
/* 000262 */ 		else if (__t__ (__getitem__ (flmarg_thmtitle, 'nodelist') !== null)) {
/* 000264 */ 			var thmtitle_nodelist = __getitem__ (flmarg_thmtitle, 'nodelist');
/* 000264 */ 		}
/* 000267 */ 		if (__t__ (thmtitle_nodelist !== null)) {
/* 000269 */ 			var heading_nodelist = (function () {
/* 000269 */ 				var __accu0__ = node.latex_walker;
/* 000272 */ 				return __call__ (__accu0__.make_nodelist, __accu0__, __add__ (__add__ (__add__ (__call__ (list, null, title_heading_formatted_flm_frag_nodes), [(function () {
/* 000272 */ 					var __accu1__ = node.latex_walker;
/* 000272 */ 					return __call__ (__accu1__.make_node, __accu1__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: __getitem__ (self.theorem_type_spec, 'heading_title_pre'), pos: node.pos, pos_end: node.pos, parsing_state: node.parsing_state}));
/* 000280 */ 				}) ()]), __call__ (list, null, thmtitle_nodelist)), [(function () {
/* 000280 */ 					var __accu1__ = node.latex_walker;
/* 000280 */ 					return __call__ (__accu1__.make_node, __accu1__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: __getitem__ (self.theorem_type_spec, 'heading_title_post'), pos: node.pos, pos_end: node.pos, parsing_state: node.parsing_state}));
/* 000280 */ 				}) ()]), __kwargtrans__ ({parsing_state: node.parsing_state, pos: node.pos}));
/* 000280 */ 			}) ();
/* 000280 */ 		}
/* 000290 */ 		else {
/* 000294 */ 			var heading_nodelist = title_heading_formatted_flm_frag_nodes;
/* 000294 */ 		}
/* 000299 */ 		var heading_node = __call__ (make_invocable_node_instance, null, latexnodes_nodes.LatexMacroNode, __kwargtrans__ ({flm_spec: (function () {
/* 000299 */ 			var __accu0__ = headings;
/* 000299 */ 			return __call__ (__accu0__.HeadingMacro, __accu0__, __kwargtrans__ ({macroname: null, heading_level: __getitem__ (self.theorem_type_spec, 'theorem_heading_level'), inline_heading: true}));
/* 000299 */ 		}) (), args: dict ({'text': heading_nodelist}), latex_walker: node.latex_walker, parsing_state: node.parsing_state}));
/* 000311 */ 		heading_node.flm_heading_target_id = target_id;
/* 000327 */ 		var final_content_node = (function () {
/* 000327 */ 			var __accu0__ = node.latex_walker;
/* 000327 */ 			return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: __getitem__ (self.theorem_type_spec, 'body_final_content'), pos: node.pos, pos_end: node.pos, parsing_state: node.parsing_state}));
/* 000327 */ 		}) ();
/* 000334 */ 		final_content_node.flm_strip_preceding_whitespace = true;
/* 000337 */ 		if (__t__ (__getitem__ (self.theorem_type_spec, 'body_final_content'))) {
/* 000342 */ 			var body_nodelist = __add__ (__add__ ([heading_node], __call__ (list, null, node.nodelist)), [final_content_node]);
/* 000342 */ 		}
/* 000345 */ 		else {
/* 000352 */ 			var body_nodelist = __add__ ([heading_node], __call__ (list, null, node.nodelist));
/* 000352 */ 		}
/* 000355 */ 		var body_nodelist = (function () {
/* 000355 */ 			var __accu0__ = node.latex_walker;
/* 000355 */ 			return __call__ (__accu0__.make_nodelist, __accu0__, body_nodelist, __kwargtrans__ ({parsing_state: node.parsing_state}));
/* 000355 */ 		}) ();
/* 000360 */ 		var rendered_contents = (function () {
/* 000360 */ 			var __accu0__ = fragment_renderer;
/* 000360 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, body_nodelist, render_context);
/* 000360 */ 		}) ();
/* 000365 */ 		return (function () {
/* 000365 */ 			var __accu0__ = fragment_renderer;
/* 000365 */ 			return __call__ (__accu0__.render_semantic_block, __accu0__, rendered_contents, __getitem__ (self.theorem_spec, 'theorem_type'), render_context, __kwargtrans__ ({annotations: [self.environmentname, 'p-block']}));
/* 000365 */ 		}) ();
/* 000365 */ 	});},
/* 000372 */ 	get recompose_pure_latex () {return __get__ (this, function (self, node, recomposer) {
/* 000372 */ 		if (arguments.length) {
/* 000372 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000372 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000372 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000372 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000372 */ 					switch (__attrib0__) {
/* 000372 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000372 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000372 */ 						case 'recomposer': var recomposer = __allkwargs0__ [__attrib0__]; break;
/* 000372 */ 					}
/* 000372 */ 				}
/* 000372 */ 			}
/* 000372 */ 		}
/* 000372 */ 		else {
/* 000372 */ 		}
/* 000374 */ 		var s = __add__ (__add__ ('\\begin{', node.environmentname), '}');
/* 000376 */ 		if (__t__ (!__t__ ((__getitem__ (node.flmarg_thmtitle, 'has_relation_ref'))))) {
/* 000378 */ 			if (__t__ (__getitem__ (node.flmarg_thmtitle, 'nodelist') !== null)) {
/* 000379 */ 				var s = __call__ (__iadd__, null, s, __add__ (__add__ ('[{', (function () {
/* 000379 */ 					var __accu0__ = recomposer;
/* 000379 */ 					return __call__ (__accu0__.subrecompose, __accu0__, __getitem__ (node.flmarg_thmtitle, 'nodelist'));
/* 000379 */ 				}) ()), '}]'));
/* 000379 */ 			}
/* 000379 */ 		}
/* 000380 */ 		else {
/* 000381 */ 			var __left0__ = __getitem__ (node.flmarg_thmtitle, 'relation_ref_target');
/* 000381 */ 			var rel_ref_type = __left0__ [0];
/* 000381 */ 			var rel_ref_label = __left0__ [1];
/* 000382 */ 			var safe_label_info = (function () {
/* 000382 */ 				var __accu0__ = recomposer;
/* 000382 */ 				return __call__ (__accu0__.make_safe_label, __accu0__, 'ref', rel_ref_type, rel_ref_label, node.latex_walker.resource_info);
/* 000382 */ 			}) ();
/* 000385 */ 			var s = __call__ (__iadd__, null, s, '[*');
/* 000386 */ 			if (__t__ (!__t__ ((__getitem__ (node.flmarg_thmtitle, 'relation_ref_show_ref'))))) {
/* 000387 */ 				var s = __call__ (__iadd__, null, s, '*');
/* 000387 */ 			}
/* 000388 */ 			var s = __call__ (__iadd__, null, s, __getitem__ (safe_label_info, 'safe_label'));
/* 000389 */ 			var s = __call__ (__iadd__, null, s, ']');
/* 000389 */ 		}
/* 000391 */ 		if (__t__ (node.flmarg_has_noproofref)) {
/* 000392 */ 			var s = __call__ (__iadd__, null, s, '\\noproofref ');
/* 000392 */ 		}
/* 000395 */ 		var __iterable0__ = node.flmarg_labels;
/* 000395 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000395 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000395 */ 			var ref_type = __left0__ [0];
/* 000395 */ 			var ref_label = __left0__ [1];
/* 000396 */ 			var safe_label_info = (function () {
/* 000396 */ 				var __accu0__ = recomposer;
/* 000396 */ 				return __call__ (__accu0__.make_safe_label, __accu0__, 'ref', ref_type, ref_label, node.latex_walker.resource_info);
/* 000396 */ 			}) ();
/* 000399 */ 			var s = __call__ (__iadd__, null, s, __add__ (__add__ ('\\label{', __getitem__ (safe_label_info, 'safe_label')), '}'));
/* 000399 */ 		}
/* 000401 */ 		var s = __call__ (__iadd__, null, s, (function () {
/* 000401 */ 			var __accu0__ = recomposer;
/* 000401 */ 			return __call__ (__accu0__.recompose_nodelist, __accu0__, node.nodelist, node);
/* 000401 */ 		}) ());
/* 000403 */ 		var s = __call__ (__iadd__, null, s, __add__ (__add__ ('\\end{', node.environmentname), '}'));
/* 000405 */ 		return s;
/* 000405 */ 	});}
/* 000405 */ });
/* 000409 */ export var _default_theorem_environments_simpleset = dict ({'theoremlike': dict ({'theorem': dict ({'title': dict ({'lowercase': 'theorem', 'abbreviated': dict ({'singular': 'Thm.', 'plural': 'Thms.'})})}), 'proposition': dict ({'title': dict ({'lowercase': 'proposition', 'abbreviated': dict ({'singular': 'Prop.', 'plural': 'Props.'})})}), 'lemma': dict ({'title': dict ({'lowercase': 'lemma', 'abbreviated': dict ({'singular': 'Lem.', 'plural': 'Lems.'})})}), 'corollary': dict ({'title': dict ({'lowercase': 'corollary', 'abbreviated': dict ({'singular': 'Cor.', 'plural': 'Cors.'})})})}), 'definitionlike': dict ({'definition': dict ({'title': dict ({'lowercase': 'definition', 'abbreviated': dict ({'singular': 'Def.', 'plural': 'Defs.'})})})}), 'prooflike': dict ({'proof': dict ({'title': dict ({'lowercase': 'proof', 'abbreviated': dict ({'singular': 'Proof', 'plural': 'Proofs'})})})})});
/* 000504 */ export var _default_theorem_environments_defaultset = dict ({'theoremlike': __call__ (dict, null, __getitem__ (_default_theorem_environments_simpleset, 'theoremlike'), __kwargtrans__ (dict ({'conjecture': dict ({'title': dict ({'lowercase': 'conjecture', 'abbreviated': dict ({'singular': 'Conj.', 'plural': 'Conjs.'})})})}))), 'definitionlike': __call__ (dict, null, __getitem__ (_default_theorem_environments_simpleset, 'definitionlike'), __kwargtrans__ (dict ({'remark': dict ({'title': dict ({'lowercase': 'remark', 'abbreviated': dict ({'singular': 'Rem.', 'plural': 'Rems.'})})})}))), 'prooflike': __call__ (dict, null, __getitem__ (_default_theorem_environments_simpleset, 'prooflike'))});
/* 000556 */ export var _default_theorem_environments_richset = dict ({'theoremlike': __call__ (dict, null, __getitem__ (_default_theorem_environments_defaultset, 'theoremlike')), 'definitionlike': __call__ (dict, null, __getitem__ (_default_theorem_environments_defaultset, 'definitionlike'), __kwargtrans__ (dict ({'idea': dict ({'title': dict ({'lowercase': 'idea', 'abbreviated': dict ({'singular': 'Idea', 'plural': 'Ideas'})})}), 'question': dict ({'title': dict ({'lowercase': 'question', 'abbreviated': dict ({'singular': 'Qtn.', 'plural': 'Qtns.'})})}), 'claim': dict ({'title': dict ({'lowercase': 'claim', 'abbreviated': dict ({'singular': 'Clm.', 'plural': 'Clms.'})})}), 'observation': dict ({'title': dict ({'lowercase': 'observation', 'abbreviated': dict ({'singular': 'Obs.', 'plural': 'Obs.'})})}), 'problem': dict ({'title': dict ({'lowercase': 'problem', 'abbreviated': dict ({'singular': 'Prob.', 'plural': 'Probs.'})})})}))), 'prooflike': __call__ (dict, null, __getitem__ (_default_theorem_environments_defaultset, 'prooflike'))});
/* 000560 */ export var default_theorem_environments = dict ({'simpleset': _default_theorem_environments_simpleset, 'defaultset': _default_theorem_environments_defaultset, 'richset': _default_theorem_environments_richset});
/* 000566 */ export var default_theorem_theorem_types = dict ({'theoremlike': dict ({'numbered': true, 'shared_numbering': true, 'counter_formatter': null, 'theorem_heading_level': 'theorem', 'heading_title_pre': ' (', 'heading_title_post': ')', 'title_enable_relation_ref': false, 'body_final_content': ''}), 'definitionlike': dict ({'numbered': true, 'shared_numbering': true, 'counter_formatter': null, 'theorem_heading_level': 'theorem', 'heading_title_pre': ' (', 'heading_title_post': ')', 'title_enable_relation_ref': false}), 'prooflike': dict ({'numbered': false, 'title_enable_relation_ref': true, 'body_final_content': '\xa0□'})});
/* 000598 */ export var default_thm_shared_counter_formatter_spec = dict ({'format_num': 'arabic', 'delimiters': tuple (['', '']), 'join_spec': 'default'});
/* 000605 */ export var default_allowed_ref_label_prefixes = ['thm', 'prop', 'cor', 'lem', 'rem', 'def', 'dfn', 'x', 'topic'];
/* 000612 */ export var FeatureTheorems =  __class__ ('FeatureTheorems', [Feature], {
/* 000612 */ 	__module__: __name__,
/* 000614 */ 	feature_name: 'theorems',
/* 000616 */ 	feature_dependencies: ['refs'],
/* 000617 */ 	feature_optional_dependencies: ['numbering'],
/* 000628 */ 	feature_default_config: dict ({'environments': __getitem__ (default_theorem_environments, 'defaultset'), 'theorem_types': default_theorem_theorem_types, 'shared_counter_formatter': 'arabic', 'allowed_ref_label_prefixes': default_allowed_ref_label_prefixes}),
/* 000628 */ 	RenderManager: __class__ ('RenderManager', [Feature.RenderManager], {
/* 000628 */ 		__module__: __name__,
/* 000630 */ 		get initialize () {return __get__ (this, function (self) {
/* 000630 */ 			if (arguments.length) {
/* 000630 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000630 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000630 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000630 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000630 */ 						switch (__attrib0__) {
/* 000630 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000630 */ 						}
/* 000630 */ 					}
/* 000630 */ 				}
/* 000630 */ 			}
/* 000630 */ 			else {
/* 000630 */ 			}
/* 000632 */ 			self.shared_counter_iface = (function () {
/* 000632 */ 				var __accu0__ = numbering;
/* 000632 */ 				return __call__ (__accu0__.get_document_render_counter, __accu0__, self.render_context, __kwargtrans__ ({counter_name: self.feature.shared_counter_formatter.counter_formatter_id, counter_formatter: self.feature.shared_counter_formatter}));
/* 000632 */ 			}) ();
/* 000638 */ 			var refs_mgr = (function () {
/* 000638 */ 				var __accu0__ = self.render_context;
/* 000638 */ 				return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000638 */ 			}) ();
/* 000640 */ 			self.counter_ifaces = dict ({});
/* 000641 */ 			var __iterable0__ = (function () {
/* 000641 */ 				var __accu0__ = self.feature.thm_counter_formatters;
/* 000641 */ 				return __call__ (__accu0__.py_items, __accu0__);
/* 000641 */ 			}) ();
/* 000641 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000641 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000641 */ 				var env_name = __left0__ [0];
/* 000641 */ 				var counter_formatter = __left0__ [1];
/* 000642 */ 				var thm_spec = __getitem__ (self.feature.environments, env_name);
/* 000643 */ 				var thm_type_spec = __getitem__ (self.feature.theorem_types, __getitem__ (thm_spec, 'theorem_type'));
/* 000645 */ 				var use_alias_counter = null;
/* 000646 */ 				if (__t__ (__getitem__ (thm_type_spec, 'shared_numbering'))) {
/* 000647 */ 					var use_alias_counter = self.shared_counter_iface;
/* 000647 */ 				}
/* 000649 */ 				__setitem__ (self.counter_ifaces, env_name, (function () {
/* 000649 */ 					var __accu0__ = numbering;
/* 000649 */ 					return __call__ (__accu0__.get_document_render_counter, __accu0__, self.render_context, __kwargtrans__ ({counter_name: counter_formatter.counter_formatter_id, counter_formatter: counter_formatter, alias_counter: use_alias_counter}));
/* 000649 */ 				}) ());
/* 000657 */ 				(function () {
/* 000657 */ 					var __accu0__ = refs_mgr;
/* 000657 */ 					return __call__ (__accu0__.register_counter_formatter, __accu0__, __kwargtrans__ ({counter_formatter: counter_formatter}));
/* 000657 */ 				}) ();
/* 000657 */ 			}
/* 000657 */ 		});}
/* 000657 */ 	}),
/* 000662 */ 	get __init__ () {return __get__ (this, function (self, environments, theorem_types, shared_counter_formatter, allowed_ref_label_prefixes) {
/* 000662 */ 		if (typeof environments == 'undefined' || (environments != null && environments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000662 */ 			var environments = null;
/* 000662 */ 		};
/* 000662 */ 		if (typeof theorem_types == 'undefined' || (theorem_types != null && theorem_types.hasOwnProperty ("__kwargtrans__"))) {;
/* 000662 */ 			var theorem_types = null;
/* 000662 */ 		};
/* 000662 */ 		if (typeof shared_counter_formatter == 'undefined' || (shared_counter_formatter != null && shared_counter_formatter.hasOwnProperty ("__kwargtrans__"))) {;
/* 000662 */ 			var shared_counter_formatter = null;
/* 000662 */ 		};
/* 000662 */ 		if (typeof allowed_ref_label_prefixes == 'undefined' || (allowed_ref_label_prefixes != null && allowed_ref_label_prefixes.hasOwnProperty ("__kwargtrans__"))) {;
/* 000662 */ 			var allowed_ref_label_prefixes = null;
/* 000662 */ 		};
/* 000662 */ 		if (arguments.length) {
/* 000662 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000662 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000662 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000662 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000662 */ 					switch (__attrib0__) {
/* 000662 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000662 */ 						case 'environments': var environments = __allkwargs0__ [__attrib0__]; break;
/* 000662 */ 						case 'theorem_types': var theorem_types = __allkwargs0__ [__attrib0__]; break;
/* 000662 */ 						case 'shared_counter_formatter': var shared_counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000662 */ 						case 'allowed_ref_label_prefixes': var allowed_ref_label_prefixes = __allkwargs0__ [__attrib0__]; break;
/* 000662 */ 					}
/* 000662 */ 				}
/* 000662 */ 			}
/* 000662 */ 		}
/* 000662 */ 		else {
/* 000662 */ 		}
/* 000667 */ 		__call__ (__call__ (__super__, null, FeatureTheorems, '__init__'), null, self);
/* 000668 */ 		if (__t__ (environments === null)) {
/* 000669 */ 			var environments = __getitem__ (default_theorem_environments, 'defaultset');
/* 000669 */ 		}
/* 000670 */ 		if (__t__ (__call__ (isinstance, null, environments, str))) {
/* 000671 */ 			var environments = __getitem__ (default_theorem_environments, environments);
/* 000671 */ 		}
/* 000673 */ 		if (__t__ (theorem_types === null)) {
/* 000674 */ 			var theorem_types = default_theorem_theorem_types;
/* 000674 */ 		}
/* 000678 */ 		self.theorem_types = (function () {
/* 000678 */ 			var __accu0__ = [];
/* 000680 */ 			var __iterable0__ = (function () {
/* 000680 */ 				var __accu1__ = __call__ (dict, null, theorem_types);
/* 000680 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000680 */ 			}) ();
/* 000680 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000680 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000680 */ 				var thm_type = __left0__ [0];
/* 000680 */ 				var thm_type_spec = __left0__ [1];
/* 000680 */ 				if (__t__ (thm_type_spec !== null)) {
/* 000681 */ 					(function () {
/* 000681 */ 						var __accu1__ = __accu0__;
/* 000679 */ 						return __call__ (__accu1__.append, __accu1__, [thm_type, (function () {
/* 000679 */ 							var __accu2__ = self;
/* 000679 */ 							return __call__ (__accu2__._standardize_type_spec, __accu2__, thm_type, thm_type_spec);
/* 000679 */ 						}) ()]);
/* 000679 */ 					}) ();
/* 000679 */ 				}
/* 000679 */ 			}
/* 000679 */ 			return dict (__accu0__);
/* 000679 */ 		}) ();
/* 000686 */ 		self.environments = dict ({});
/* 000687 */ 		var __iterable0__ = (function () {
/* 000687 */ 			var __accu0__ = environments;
/* 000687 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000687 */ 		}) ();
/* 000687 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000687 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000687 */ 			var thm_type = __left0__ [0];
/* 000687 */ 			var env_list = __left0__ [1];
/* 000688 */ 			var __iterable1__ = (function () {
/* 000688 */ 				var __accu0__ = env_list;
/* 000688 */ 				return __call__ (__accu0__.py_items, __accu0__);
/* 000688 */ 			}) ();
/* 000688 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000688 */ 				var __left0__ = __getitem__ (__iterable1__, __index1__);
/* 000688 */ 				var env_name = __left0__ [0];
/* 000688 */ 				var thm_spec = __left0__ [1];
/* 000689 */ 				if (__t__ (__in__ ('env_name', self.environments))) {
/* 000690 */ 					var __except0__ = __call__ (ValueError, null, 'Duplicate definition of theorem environment ‘{}’'.format (env_name));
/* 000690 */ 					__except0__.__cause__ = null;
/* 000690 */ 					throw __except0__;
/* 000690 */ 				}
/* 000694 */ 				__setitem__ (self.environments, env_name, (function () {
/* 000694 */ 					var __accu0__ = self;
/* 000694 */ 					return __call__ (__accu0__._standardize_thm_spec, __accu0__, thm_type, env_name, thm_spec);
/* 000694 */ 				}) ());
/* 000694 */ 			}
/* 000694 */ 		}
/* 000698 */ 		self.shared_counter_formatter = __call__ (build_counter_formatter, null, shared_counter_formatter, default_thm_shared_counter_formatter_spec, __kwargtrans__ ({counter_formatter_id: '_theorems_shared'}));
/* 000704 */ 		var use_default_counter_formatter_spec = (function () {
/* 000704 */ 			var __accu0__ = self.shared_counter_formatter;
/* 000704 */ 			return __call__ (__accu0__.asdict, __accu0__);
/* 000704 */ 		}) ();
/* 000706 */ 		self.thm_counter_formatters = dict ({});
/* 000707 */ 		var __iterable0__ = (function () {
/* 000707 */ 			var __accu0__ = self.environments;
/* 000707 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000707 */ 		}) ();
/* 000707 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000707 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000707 */ 			var env_name = __left0__ [0];
/* 000707 */ 			var thm_spec = __left0__ [1];
/* 000708 */ 			var thm_type_spec = __getitem__ (self.theorem_types, __getitem__ (thm_spec, 'theorem_type'));
/* 000709 */ 			if (__t__ (!__t__ ((__getitem__ (thm_type_spec, 'numbered'))))) {
/* 000709 */ 				continue;
/* 000709 */ 			}
/* 000713 */ 			var counter_formatter_spec = (function () {
/* 000713 */ 				var __accu0__ = thm_type_spec;
/* 000713 */ 				return __call__ (__accu0__.py_get, __accu0__, 'counter_formatter', null);
/* 000713 */ 			}) ();
/* 000714 */ 			if (__t__ (counter_formatter_spec === null)) {
/* 000715 */ 				var counter_formatter_spec = dict ({});
/* 000715 */ 			}
/* 000716 */ 			else if (__t__ (__call__ (isinstance, null, counter_formatter_spec, str))) {
/* 000717 */ 				var counter_formatter_spec = dict ({'format_num': counter_formatter_spec});
/* 000717 */ 			}
/* 000718 */ 			else {
/* 000719 */ 				var counter_formatter_spec = __call__ (dict, null, counter_formatter_spec);
/* 000719 */ 			}
/* 000725 */ 			__setitem__ (counter_formatter_spec, 'prefix_display', (function () {
/* 000725 */ 				var __accu0__ = self;
/* 000725 */ 				return __call__ (__accu0__._make_counter_formatter_prefix_for_thm, __accu0__, env_name, thm_spec);
/* 000725 */ 			}) ());
/* 000729 */ 			__setitem__ (self.thm_counter_formatters, env_name, __call__ (build_counter_formatter, null, counter_formatter_spec, use_default_counter_formatter_spec, __kwargtrans__ ({counter_formatter_id: env_name})));
/* 000729 */ 		}
/* 000735 */ 		self.allowed_ref_label_prefixes = __call__ (list, null, (__t__ (allowed_ref_label_prefixes !== null) ? allowed_ref_label_prefixes : default_allowed_ref_label_prefixes));
/* 000735 */ 	});},
/* 000742 */ 	get _standardize_type_spec () {return __get__ (this, function (self, thm_type, thm_type_spec) {
/* 000742 */ 		if (arguments.length) {
/* 000742 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000742 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000742 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000742 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000742 */ 					switch (__attrib0__) {
/* 000742 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000742 */ 						case 'thm_type': var thm_type = __allkwargs0__ [__attrib0__]; break;
/* 000742 */ 						case 'thm_type_spec': var thm_type_spec = __allkwargs0__ [__attrib0__]; break;
/* 000742 */ 					}
/* 000742 */ 				}
/* 000742 */ 			}
/* 000742 */ 		}
/* 000742 */ 		else {
/* 000742 */ 		}
/* 000744 */ 		var spec = __call__ (dict, null, __getitem__ (default_theorem_theorem_types, 'theoremlike'));
/* 000745 */ 		(function () {
/* 000745 */ 			var __accu0__ = spec;
/* 000745 */ 			return __call__ (__accu0__.py_update, __accu0__, thm_type_spec);
/* 000745 */ 		}) ();
/* 000746 */ 		return spec;
/* 000746 */ 	});},
/* 000748 */ 	get _standardize_thm_spec () {return __get__ (this, function (self, thm_type, env_name, thm_spec) {
/* 000748 */ 		if (arguments.length) {
/* 000748 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000748 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000748 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000748 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000748 */ 					switch (__attrib0__) {
/* 000748 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000748 */ 						case 'thm_type': var thm_type = __allkwargs0__ [__attrib0__]; break;
/* 000748 */ 						case 'env_name': var env_name = __allkwargs0__ [__attrib0__]; break;
/* 000748 */ 						case 'thm_spec': var thm_spec = __allkwargs0__ [__attrib0__]; break;
/* 000748 */ 					}
/* 000748 */ 				}
/* 000748 */ 			}
/* 000748 */ 		}
/* 000748 */ 		else {
/* 000748 */ 		}
/* 000749 */ 		if (__t__ (thm_spec === true)) {
/* 000750 */ 			var thm_spec = env_name;
/* 000750 */ 		}
/* 000751 */ 		if (__t__ (__call__ (isinstance, null, thm_spec, str))) {
/* 000752 */ 			var thm_spec = dict ({'title': thm_spec});
/* 000752 */ 		}
/* 000753 */ 		else {
/* 000754 */ 			var thm_spec = __call__ (dict, null, thm_spec);
/* 000754 */ 		}
/* 000756 */ 		__setitem__ (thm_spec, 'theorem_type', thm_type);
/* 000759 */ 		var new_title_spec = dict ({});
/* 000760 */ 		var title = (function () {
/* 000760 */ 			var __accu0__ = thm_spec;
/* 000760 */ 			return __call__ (__accu0__.py_get, __accu0__, 'title', null);
/* 000760 */ 		}) ();
/* 000761 */ 		if (__t__ (title === null)) {
/* 000762 */ 			var title = env_name;
/* 000762 */ 		}
/* 000763 */ 		if (__t__ (__call__ (isinstance, null, title, str))) {
/* 000764 */ 			var title = dict ({'lowercase': dict ({'singular': title, 'plural': __add__ (title, 's')})});
/* 000764 */ 		}
/* 000767 */ 		if (__t__ (__in__ ('lowercase', title))) {
/* 000768 */ 			var lowercase = __getitem__ (title, 'lowercase');
/* 000769 */ 			if (__t__ (__call__ (isinstance, null, lowercase, str))) {
/* 000770 */ 				__setitem__ (new_title_spec, 'lowercase', dict ({'singular': lowercase, 'plural': __add__ (lowercase, 's')}));
/* 000770 */ 			}
/* 000773 */ 			else {
/* 000775 */ 				__setitem__ (new_title_spec, 'lowercase', lowercase);
/* 000775 */ 			}
/* 000775 */ 		}
/* 000776 */ 		else {
/* 000778 */ 			__setitem__ (new_title_spec, 'lowercase', dict ({'singular': '??', 'plural': '???'}));
/* 000778 */ 		}
/* 000780 */ 		if (__t__ (__in__ ('capital', title))) {
/* 000781 */ 			var capital = __getitem__ (title, 'capital');
/* 000782 */ 			if (__t__ (__call__ (isinstance, null, capital, str))) {
/* 000783 */ 				__setitem__ (new_title_spec, 'capital', dict ({'singular': capital, 'plural': __add__ (capital, 's')}));
/* 000783 */ 			}
/* 000786 */ 			else {
/* 000788 */ 				__setitem__ (new_title_spec, 'capital', capital);
/* 000788 */ 			}
/* 000788 */ 		}
/* 000789 */ 		else {
/* 000792 */ 			__setitem__ (new_title_spec, 'capital', dict ({'singular': (function () {
/* 000792 */ 				var __accu0__ = __getitem__ (__getitem__ (new_title_spec, 'lowercase'), 'singular');
/* 000792 */ 				return __call__ (__accu0__.capitalize, __accu0__);
/* 000793 */ 			}) (), 'plural': (function () {
/* 000793 */ 				var __accu0__ = __getitem__ (__getitem__ (new_title_spec, 'lowercase'), 'plural');
/* 000793 */ 				return __call__ (__accu0__.capitalize, __accu0__);
/* 000793 */ 			}) ()}));
/* 000793 */ 		}
/* 000796 */ 		if (__t__ (__in__ ('abbreviated', title))) {
/* 000797 */ 			var abbreviated = __getitem__ (title, 'abbreviated');
/* 000798 */ 			if (__t__ (__call__ (isinstance, null, abbreviated, str))) {
/* 000799 */ 				__setitem__ (new_title_spec, 'abbreviated', dict ({'singular': abbreviated, 'plural': __add__ (abbreviated, 's')}));
/* 000799 */ 			}
/* 000802 */ 			else {
/* 000804 */ 				__setitem__ (new_title_spec, 'abbreviated', abbreviated);
/* 000804 */ 			}
/* 000804 */ 		}
/* 000805 */ 		else {
/* 000809 */ 			__setitem__ (new_title_spec, 'abbreviated', dict ({'singular': __add__ (__getslice__ (__getitem__ (__getitem__ (new_title_spec, 'capital'), 'singular'), 0, 3, 1), '.'), 'plural': __add__ ((function () {
/* 000809 */ 				var __accu0__ = __getslice__ (__getitem__ (__getitem__ (new_title_spec, 'capital'), 'plural'), 0, 3, 1);
/* 000809 */ 				return __call__ (__accu0__.rstrip, __accu0__, 's');
/* 000809 */ 			}) (), 's.')}));
/* 000809 */ 		}
/* 000812 */ 		__setitem__ (thm_spec, 'title', new_title_spec);
/* 000814 */ 		return thm_spec;
/* 000814 */ 	});},
/* 000817 */ 	get _make_counter_formatter_prefix_for_thm () {return __get__ (this, function (self, env_name, thm_spec) {
/* 000817 */ 		if (arguments.length) {
/* 000817 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000817 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000817 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000817 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000817 */ 					switch (__attrib0__) {
/* 000817 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000817 */ 						case 'env_name': var env_name = __allkwargs0__ [__attrib0__]; break;
/* 000817 */ 						case 'thm_spec': var thm_spec = __allkwargs0__ [__attrib0__]; break;
/* 000817 */ 					}
/* 000817 */ 				}
/* 000817 */ 			}
/* 000817 */ 		}
/* 000817 */ 		else {
/* 000817 */ 		}
/* 000818 */ 		var prefix = dict ({});
/* 000820 */ 		var _add_space_values = function (x) {
/* 000820 */ 			if (arguments.length) {
/* 000820 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000820 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000820 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000820 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000820 */ 						switch (__attrib0__) {
/* 000820 */ 							case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000820 */ 						}
/* 000820 */ 					}
/* 000820 */ 				}
/* 000820 */ 			}
/* 000820 */ 			else {
/* 000820 */ 			}
/* 000821 */ 			return (function () {
/* 000821 */ 				var __accu0__ = [];
/* 000821 */ 				var __iterable0__ = (function () {
/* 000821 */ 					var __accu1__ = x;
/* 000821 */ 					return __call__ (__accu1__.py_items, __accu1__);
/* 000821 */ 				}) ();
/* 000821 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000821 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000821 */ 					var k = __left0__ [0];
/* 000821 */ 					var v = __left0__ [1];
/* 000821 */ 					(function () {
/* 000821 */ 						var __accu1__ = __accu0__;
/* 000821 */ 						return __call__ (__accu1__.append, __accu1__, [k, __add__ (v, '~')]);
/* 000821 */ 					}) ();
/* 000821 */ 				}
/* 000821 */ 				return dict (__accu0__);
/* 000821 */ 			}) ();
/* 000821 */ 		};
/* 000823 */ 		__setitem__ (prefix, 'lowercase', __call__ (_add_space_values, null, __getitem__ (__getitem__ (thm_spec, 'title'), 'lowercase')));
/* 000824 */ 		__setitem__ (prefix, 'capital', __call__ (_add_space_values, null, __getitem__ (__getitem__ (thm_spec, 'title'), 'capital')));
/* 000825 */ 		__setitem__ (prefix, 'abbreviated', __call__ (_add_space_values, null, __getitem__ (__getitem__ (thm_spec, 'title'), 'abbreviated')));
/* 000827 */ 		(function () {
/* 000827 */ 			var __accu0__ = prefix;
/* 000827 */ 			return __call__ (__accu0__.py_update, __accu0__, __getitem__ (prefix, 'capital'));
/* 000827 */ 		}) ();
/* 000829 */ 		return prefix;
/* 000829 */ 	});},
/* 000832 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000832 */ 		if (arguments.length) {
/* 000832 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000832 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000832 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000832 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000832 */ 					switch (__attrib0__) {
/* 000832 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000832 */ 					}
/* 000832 */ 				}
/* 000832 */ 			}
/* 000832 */ 		}
/* 000832 */ 		else {
/* 000832 */ 		}
/* 000834 */ 		var environment_specs = [];
/* 000836 */ 		var __iterable0__ = (function () {
/* 000836 */ 			var __accu0__ = self.environments;
/* 000836 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000836 */ 		}) ();
/* 000836 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000836 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000836 */ 			var env_name = __left0__ [0];
/* 000836 */ 			var thm_spec = __left0__ [1];
/* 000837 */ 			(function () {
/* 000837 */ 				var __accu0__ = environment_specs;
/* 000837 */ 				return __call__ (__accu0__.append, __accu0__, __call__ (TheoremEnvironment, null, __kwargtrans__ ({environmentname: env_name, theorem_spec: thm_spec, theorem_type_spec: __getitem__ (self.theorem_types, __getitem__ (thm_spec, 'theorem_type')), allowed_ref_label_prefixes: self.allowed_ref_label_prefixes})));
/* 000837 */ 			}) ();
/* 000837 */ 		}
/* 000844 */ 		return dict ({'environments': environment_specs});
/* 000844 */ 	});}
/* 000844 */ });
/* 000851 */ export var FeatureClass = FeatureTheorems;
/* 000007 */ 
//# sourceMappingURL=flm.feature.theorems.map