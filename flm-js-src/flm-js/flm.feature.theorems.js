/* 000001 */ // Transcrypt'ed from Python, 2026-06-30 21:51:24
/* 000015 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000038 */ import * as headings from './flm.feature.headings.js';
/* 000037 */ import {Feature, FeatureRenderManagerBase} from './flm.feature._base.js';
/* 000035 */ import {Any, Mapping, Sequence, TypeCounterFormatterInput, TypeCounterFormatterSpecDict} from './flm._typing_helpers.js';
/* 000032 */ import * as numbering from './flm.feature.numbering.js';
/* 000031 */ import {build_counter_formatter} from './flm.counter.js';
/* 000028 */ import * as flmspecinfo from './flm.flmspecinfo.js';
/* 000027 */ import {FLMFragment} from './flm.flmfragment.js';
/* 000026 */ import {FLMArgumentSpec, make_invocable_node_instance} from './flm.flmenvironment.js';
/* 000024 */ import * as macrospec from './pylatexenc.macrospec.js';
/* 000021 */ import {LatexTackOnInformationFieldMacrosParser} from './pylatexenc.latexnodes.parsers.js';
/* 000020 */ import * as latexnodes_nodes from './pylatexenc.latexnodes.nodes.js';
/* 000015 */ import {LatexWalkerLocatedError, LatexWalkerParseError, ParsedArgumentsInfo, ParsingStateDelta} from './pylatexenc.latexnodes.js';
/* 000015 */ export {Feature, TypeCounterFormatterSpecDict, LatexWalkerParseError, TypeCounterFormatterInput, Mapping, build_counter_formatter, FeatureRenderManagerBase, ParsingStateDelta, headings, LatexTackOnInformationFieldMacrosParser, latexnodes_nodes, ParsedArgumentsInfo, macrospec, make_invocable_node_instance, FLMArgumentSpec, flmspecinfo, Any, LatexWalkerLocatedError, Sequence, FLMFragment, numbering};
/* 000001 */ var __name__ = 'flm.feature.theorems';
/* 000044 */ export var optional_text_arg = __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: '[', argname: 'thmtitle', flm_doc: 'An optional theorem environment title'}));
/* 000053 */ export var thmlabel_arg = __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: __call__ (LatexTackOnInformationFieldMacrosParser, null, ['label', 'noproofref'], __kwargtrans__ ({allow_multiple: true, macro_arg_parsers: dict ({'noproofref': null})})), argname: 'thmlabel', flm_doc: 'A following \\verbcode+\\label{…}+ macro attaches a label to this macro call; a following \\verbcode+\\noproofref+ indicates that there is no corresponding {proof} environment to look for in the document.'}));
/* 000065 */ export var TheoremEnvironment =  __class__ ('TheoremEnvironment', [flmspecinfo.FLMEnvironmentSpecBase], {
/* 000065 */ 	__module__: __name__,
/* 000067 */ 	is_block_level: true,
/* 000069 */ 	body_contents_is_block_level: true,
/* 000071 */ 	get __init__ () {return __get__ (this, function (self, environmentname, theorem_spec, theorem_type_spec, allowed_ref_label_prefixes) {
/* 000071 */ 		if (arguments.length) {
/* 000071 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000071 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000071 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000071 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000071 */ 					switch (__attrib0__) {
/* 000071 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000071 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000071 */ 						case 'theorem_spec': var theorem_spec = __allkwargs0__ [__attrib0__]; break;
/* 000071 */ 						case 'theorem_type_spec': var theorem_type_spec = __allkwargs0__ [__attrib0__]; break;
/* 000071 */ 						case 'allowed_ref_label_prefixes': var allowed_ref_label_prefixes = __allkwargs0__ [__attrib0__]; break;
/* 000071 */ 					}
/* 000071 */ 				}
/* 000071 */ 			}
/* 000071 */ 		}
/* 000071 */ 		else {
/* 000071 */ 		}
/* 000086 */ 		__call__ (__call__ (__super__, null, TheoremEnvironment, '__init__'), null, self, environmentname, __kwargtrans__ ({arguments_spec_list: [optional_text_arg, thmlabel_arg]}));
/* 000093 */ 		self.theorem_spec = theorem_spec;
/* 000094 */ 		self.theorem_type_spec = theorem_type_spec;
/* 000095 */ 		self.allowed_ref_label_prefixes = allowed_ref_label_prefixes;
/* 000095 */ 	});},
/* 000097 */ 	_fields: tuple (['environmentname', 'theorem_spec', 'theorem_type_spec', 'allowed_ref_label_prefixes']),
/* 000100 */ 	get make_body_parser () {return __get__ (this, function (self, token, nodeargd, arg_parsing_state_delta) {
/* 000100 */ 		if (arguments.length) {
/* 000100 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000100 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000100 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000100 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000100 */ 					switch (__attrib0__) {
/* 000100 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000100 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000100 */ 						case 'nodeargd': var nodeargd = __allkwargs0__ [__attrib0__]; break;
/* 000100 */ 						case 'arg_parsing_state_delta': var arg_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000100 */ 					}
/* 000100 */ 				}
/* 000100 */ 			}
/* 000100 */ 		}
/* 000100 */ 		else {
/* 000100 */ 		}
/* 000101 */ 		return (function () {
/* 000101 */ 			var __accu0__ = macrospec;
/* 000103 */ 			return __call__ (__accu0__.LatexEnvironmentBodyContentsParser, __accu0__, __kwargtrans__ ({environmentname: token.arg, contents_parsing_state_delta: __call__ (ParsingStateDelta, null, __kwargtrans__ ({set_attributes: dict ({'is_block_level': true})}))}));
/* 000103 */ 		}) ();
/* 000103 */ 	});},
/* 000110 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000110 */ 		if (arguments.length) {
/* 000110 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000110 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000110 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000110 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000110 */ 					switch (__attrib0__) {
/* 000110 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000110 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000110 */ 					}
/* 000110 */ 				}
/* 000110 */ 			}
/* 000110 */ 		}
/* 000110 */ 		else {
/* 000110 */ 		}
/* 000112 */ 		var node_args = (function () {
/* 000112 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000112 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['thmtitle', 'thmlabel']));
/* 000112 */ 		}) ();
/* 000116 */ 		var thmtitle_nodelist = null;
/* 000117 */ 		if (__t__ ((function () {
/* 000117 */ 			var __accu0__ = __getitem__ (node_args, 'thmtitle');
/* 000117 */ 			return __call__ (__accu0__.was_provided, __accu0__);
/* 000117 */ 		}) ())) {
/* 000118 */ 			var thmtitle_nodelist = (function () {
/* 000118 */ 				var __accu0__ = __getitem__ (node_args, 'thmtitle');
/* 000118 */ 				return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000118 */ 			}) ();
/* 000118 */ 		}
/* 000120 */ 		var relation_ref_target = null;
/* 000121 */ 		var relation_ref_show_ref = false;
/* 000122 */ 		if (__t__ (__getitem__ (self.theorem_type_spec, 'title_enable_relation_ref'))) {
/* 000124 */ 			if (__t__ (__t__ (thmtitle_nodelist !== null) && __gt__ (__call__ (len, null, thmtitle_nodelist), 0))) {
/* 000125 */ 				var chnode = __getitem__ (thmtitle_nodelist, 0);
/* 000127 */ 				if (__t__ (__t__ (chnode !== null) && __t__ ((function () {
/* 000127 */ 					var __accu0__ = chnode;
/* 000127 */ 					return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000128 */ 				}) ()) && (function () {
/* 000128 */ 					var __accu0__ = chnode.chars;
/* 000128 */ 					return __call__ (__accu0__.startswith, __accu0__, '*');
/* 000128 */ 				}) ())) {
/* 000129 */ 					if (__t__ (__ne__ (__call__ (len, null, thmtitle_nodelist), 1))) {
/* 000134 */ 						var __except0__ = __call__ (LatexWalkerLocatedError, null, 'When specifying a proof-ref target as optional argument (‘[*thm:xyz]’), the entire argument must consist of regular characters with no special meaning in FLM.  Got: ‘{}’'.format ((function () {
/* 000134 */ 							var __accu0__ = thmtitle_nodelist;
/* 000134 */ 							return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000134 */ 						}) ()), __kwargtrans__ ({pos: chnode.pos}));
/* 000134 */ 						__except0__.__cause__ = null;
/* 000134 */ 						throw __except0__;
/* 000134 */ 					}
/* 000137 */ 					if (__t__ ((function () {
/* 000137 */ 						var __accu0__ = chnode.chars;
/* 000137 */ 						return __call__ (__accu0__.startswith, __accu0__, '**');
/* 000137 */ 					}) ())) {
/* 000138 */ 						var relation_ref_target = __getslice__ (chnode.chars, 2, null, 1);
/* 000139 */ 						var relation_ref_show_ref = false;
/* 000139 */ 					}
/* 000140 */ 					else if (__t__ ((function () {
/* 000140 */ 						var __accu0__ = chnode.chars;
/* 000140 */ 						return __call__ (__accu0__.startswith, __accu0__, '*');
/* 000140 */ 					}) ())) {
/* 000141 */ 						var relation_ref_target = __getslice__ (chnode.chars, 1, null, 1);
/* 000142 */ 						var relation_ref_show_ref = true;
/* 000142 */ 					}
/* 000142 */ 				}
/* 000142 */ 			}
/* 000142 */ 		}
/* 000144 */ 		if (__t__ (relation_ref_target !== null)) {
/* 000145 */ 			if (__t__ (__in__ (':', relation_ref_target))) {
/* 000146 */ 				var relation_ref_target = (function () {
/* 000146 */ 					var __accu0__ = relation_ref_target;
/* 000146 */ 					return __call__ (__accu0__.py_split, __accu0__, ':', __kwargtrans__ ({maxsplit: 1}));
/* 000146 */ 				}) ();
/* 000146 */ 			}
/* 000147 */ 			else {
/* 000148 */ 				var relation_ref_target = tuple ([null, relation_ref_target]);
/* 000148 */ 			}
/* 000148 */ 		}
/* 000150 */ 		node.flmarg_thmtitle = dict ({'nodelist': thmtitle_nodelist, 'has_relation_ref': (__t__ (relation_ref_target !== null) ? true : false), 'relation_ref_target': relation_ref_target, 'relation_ref_show_ref': relation_ref_show_ref});
/* 000158 */ 		var has_noproofref = null;
/* 000159 */ 		var node_args_thmlabel = __getitem__ (node_args, 'thmlabel');
/* 000160 */ 		if (__t__ ((function () {
/* 000160 */ 			var __accu0__ = node_args_thmlabel;
/* 000160 */ 			return __call__ (__accu0__.was_provided, __accu0__);
/* 000160 */ 		}) ())) {
/* 000161 */ 			var argnodes = (function () {
/* 000161 */ 				var __accu0__ = node_args_thmlabel;
/* 000161 */ 				return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000161 */ 			}) ();
/* 000162 */ 			var __iterable0__ = argnodes;
/* 000162 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000162 */ 				var argnode = __getitem__ (__iterable0__, __index0__);
/* 000163 */ 				if (__t__ (__eq__ (__getitem__ (argnode.delimiters, 0), '\\label'))) {
/* 000163 */ 					continue;
/* 000163 */ 				}
/* 000165 */ 				else if (__t__ (__eq__ (__getitem__ (argnode.delimiters, 0), '\\noproofref'))) {
/* 000166 */ 					var has_noproofref = true;
/* 000166 */ 				}
/* 000167 */ 				else {
/* 000168 */ 					var __except0__ = __call__ (LatexWalkerParseError, null, 'Bad information field macro ‘{}’'.format (__getitem__ (argnode.delimiters, 0)), __kwargtrans__ ({pos: argnode.pos}));
/* 000168 */ 					__except0__.__cause__ = null;
/* 000168 */ 					throw __except0__;
/* 000168 */ 				}
/* 000168 */ 			}
/* 000168 */ 		}
/* 000172 */ 		node.flmarg_has_noproofref = has_noproofref;
/* 000174 */ 		node.flmarg_labels = (function () {
/* 000174 */ 			var __accu0__ = flmspecinfo;
/* 000174 */ 			return __call__ (__accu0__.helper_collect_labels, __accu0__, node_args_thmlabel, self.allowed_ref_label_prefixes, __kwargtrans__ ({allow_unknown_macros: true}));
/* 000174 */ 		}) ();
/* 000180 */ 		return node;
/* 000180 */ 	});},
/* 000182 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000182 */ 		if (arguments.length) {
/* 000182 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000182 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000182 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000182 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000182 */ 					switch (__attrib0__) {
/* 000182 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000182 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000182 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000182 */ 					}
/* 000182 */ 				}
/* 000182 */ 			}
/* 000182 */ 		}
/* 000182 */ 		else {
/* 000182 */ 		}
/* 000184 */ 		var fragment_renderer = render_context.fragment_renderer;
/* 000186 */ 		var thms_mgr = (function () {
/* 000186 */ 			var __accu0__ = render_context;
/* 000186 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'theorems');
/* 000186 */ 		}) ();
/* 000187 */ 		var refs_mgr = (function () {
/* 000187 */ 			var __accu0__ = render_context;
/* 000187 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000187 */ 		}) ();
/* 000191 */ 		var flmarg_thmtitle = node.flmarg_thmtitle;
/* 000192 */ 		var flmarg_labels = node.flmarg_labels;
/* 000196 */ 		if (__t__ (__getitem__ (self.theorem_type_spec, 'numbered'))) {
/* 000198 */ 			var counter_iface = __getitem__ (thms_mgr.counter_ifaces, self.environmentname);
/* 000199 */ 			var prefix_variant = 'capital';
/* 000201 */ 			var _target_href_fn = function (value) {
/* 000201 */ 				var numprefix = null;
/* 000201 */ 				if (arguments.length) {
/* 000201 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000201 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000201 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000201 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000201 */ 							switch (__attrib0__) {
/* 000201 */ 								case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000201 */ 								case 'numprefix': var numprefix = __allkwargs0__ [__attrib0__]; break;
/* 000201 */ 							}
/* 000201 */ 						}
/* 000201 */ 					}
/* 000201 */ 				}
/* 000201 */ 				else {
/* 000201 */ 				}
/* 000202 */ 				return '#{}-{}'.format (self.environmentname, (function () {
/* 000202 */ 					var __accu0__ = value;
/* 000202 */ 					return __call__ (__accu0__.targetidstr, __accu0__, __kwargtrans__ ({numprefix: numprefix}));
/* 000202 */ 				}) ());
/* 000202 */ 			};
/* 000204 */ 			var ref_instance = (function () {
/* 000204 */ 				var __accu0__ = refs_mgr;
/* 000204 */ 				return __call__ (__accu0__.register_reference_step_counter, __accu0__, __kwargtrans__ ({node: node, counter_iface: counter_iface, target_href_fn: _target_href_fn, counter_with_prefix: true, counter_prefix_variant: prefix_variant}));
/* 000204 */ 			}) ();
/* 000212 */ 			var counter_value = ref_instance.counter_value;
/* 000214 */ 			var title_heading_formatted_flm = ref_instance.formatted_ref_flm_text;
/* 000220 */ 			var title_heading_formatted_flm_frag = (function () {
/* 000220 */ 				var __accu0__ = render_context;
/* 000220 */ 				return __call__ (__accu0__.make_standalone_fragment, __accu0__, title_heading_formatted_flm, __kwargtrans__ ({what: 'Theorem heading'}));
/* 000220 */ 			}) ();
/* 000224 */ 			var title_heading_formatted_flm_frag_nodes = title_heading_formatted_flm_frag.nodes;
/* 000226 */ 			var __iterable0__ = flmarg_labels;
/* 000226 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000226 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000226 */ 				var ref_type = __left0__ [0];
/* 000226 */ 				var ref_label = __left0__ [1];
/* 000228 */ 				(function () {
/* 000228 */ 					var __accu0__ = refs_mgr;
/* 000228 */ 					return __call__ (__accu0__.register_reference, __accu0__, ref_type, ref_label, __kwargtrans__ ({node: node, formatted_ref_flm_text: title_heading_formatted_flm_frag, target_href: ref_instance.target_href, counter_value: counter_value, counter_numprefix: ref_instance.counter_numprefix, counter_formatter_id: counter_iface.formatter.counter_formatter_id}));
/* 000228 */ 				}) ();
/* 000228 */ 			}
/* 000238 */ 			var target_id = __t__ (__getslice__ (ref_instance.target_href, 1, null, 1)) || null;
/* 000238 */ 		}
/* 000239 */ 		else {
/* 000242 */ 			var theorem_name = __getitem__ (__getitem__ (__getitem__ (self.theorem_spec, 'title'), 'capital'), 'singular');
/* 000244 */ 			var target_id = null;
/* 000247 */ 			var title_heading_formatted_flm_frag_nodes = (function () {
/* 000247 */ 				var __accu0__ = node.latex_walker;
/* 000249 */ 				return __call__ (__accu0__.make_nodelist, __accu0__, [(function () {
/* 000249 */ 					var __accu1__ = node.latex_walker;
/* 000249 */ 					return __call__ (__accu1__.make_node, __accu1__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: theorem_name, pos: node.pos, pos_end: node.pos, parsing_state: node.parsing_state}));
/* 000249 */ 				}) ()], __kwargtrans__ ({parsing_state: node.parsing_state}));
/* 000249 */ 			}) ();
/* 000262 */ 			if (__t__ (__call__ (len, null, flmarg_labels))) {
/* 000263 */ 				var __except0__ = __call__ (LatexWalkerLocatedError, null, __add__ (__add__ ('You cannot use \\label{} in unnumbered theorem environment ‘', self.environmentname), '’'), __kwargtrans__ ({pos: node.pos}));
/* 000263 */ 				__except0__.__cause__ = null;
/* 000263 */ 				throw __except0__;
/* 000263 */ 			}
/* 000263 */ 		}
/* 000275 */ 		var thmtitle_nodelist = null;
/* 000276 */ 		if (__t__ (__getitem__ (flmarg_thmtitle, 'has_relation_ref'))) {
/* 000278 */ 			if (__t__ (__getitem__ (flmarg_thmtitle, 'relation_ref_show_ref'))) {
/* 000280 */ 				var __left0__ = __getitem__ (flmarg_thmtitle, 'relation_ref_target');
/* 000280 */ 				var ref_type = __left0__ [0];
/* 000280 */ 				var ref_label = __left0__ [1];
/* 000283 */ 				var thm_relation_ref_instance = (function () {
/* 000283 */ 					var __accu0__ = refs_mgr;
/* 000283 */ 					return __call__ (__accu0__.get_ref, __accu0__, ref_type, ref_label, node.latex_walker.resource_info);
/* 000283 */ 				}) ();
/* 000287 */ 				var thm_relation_ref_flm_text = thm_relation_ref_instance.formatted_ref_flm_text;
/* 000288 */ 				var thm_relation_ref_flm_frag = (function () {
/* 000288 */ 					var __accu0__ = render_context;
/* 000288 */ 					return __call__ (__accu0__.make_standalone_fragment, __accu0__, thm_relation_ref_flm_text, __kwargtrans__ ({what: 'Thm relation ref'}));
/* 000288 */ 				}) ();
/* 000292 */ 				var thmtitle_nodelist = thm_relation_ref_flm_frag.nodes;
/* 000292 */ 			}
/* 000292 */ 		}
/* 000294 */ 		else if (__t__ (__getitem__ (flmarg_thmtitle, 'nodelist') !== null)) {
/* 000296 */ 			var thmtitle_nodelist = __getitem__ (flmarg_thmtitle, 'nodelist');
/* 000296 */ 		}
/* 000299 */ 		if (__t__ (thmtitle_nodelist !== null)) {
/* 000301 */ 			var heading_nodelist = (function () {
/* 000301 */ 				var __accu0__ = node.latex_walker;
/* 000304 */ 				return __call__ (__accu0__.make_nodelist, __accu0__, __add__ (__add__ (__add__ (__call__ (list, null, title_heading_formatted_flm_frag_nodes), [(function () {
/* 000304 */ 					var __accu1__ = node.latex_walker;
/* 000304 */ 					return __call__ (__accu1__.make_node, __accu1__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: __getitem__ (self.theorem_type_spec, 'heading_title_pre'), pos: node.pos, pos_end: node.pos, parsing_state: node.parsing_state}));
/* 000312 */ 				}) ()]), __call__ (list, null, thmtitle_nodelist)), [(function () {
/* 000312 */ 					var __accu1__ = node.latex_walker;
/* 000312 */ 					return __call__ (__accu1__.make_node, __accu1__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: __getitem__ (self.theorem_type_spec, 'heading_title_post'), pos: node.pos, pos_end: node.pos, parsing_state: node.parsing_state}));
/* 000312 */ 				}) ()]), __kwargtrans__ ({parsing_state: node.parsing_state, pos: node.pos}));
/* 000312 */ 			}) ();
/* 000312 */ 		}
/* 000322 */ 		else {
/* 000326 */ 			var heading_nodelist = title_heading_formatted_flm_frag_nodes;
/* 000326 */ 		}
/* 000331 */ 		var heading_node = __call__ (make_invocable_node_instance, null, latexnodes_nodes.LatexMacroNode, __kwargtrans__ ({flm_spec: (function () {
/* 000331 */ 			var __accu0__ = headings;
/* 000331 */ 			return __call__ (__accu0__.HeadingMacro, __accu0__, __kwargtrans__ ({macroname: null, heading_level: __getitem__ (self.theorem_type_spec, 'theorem_heading_level'), inline_heading: true, unregistered_heading: true, target_id: target_id}));
/* 000331 */ 		}) (), args: dict ({'text': heading_nodelist}), latex_walker: node.latex_walker, parsing_state: node.parsing_state}));
/* 000361 */ 		var final_content_node = (function () {
/* 000361 */ 			var __accu0__ = node.latex_walker;
/* 000361 */ 			return __call__ (__accu0__.make_node, __accu0__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({chars: __getitem__ (self.theorem_type_spec, 'body_final_content'), pos: node.pos, pos_end: node.pos, parsing_state: node.parsing_state}));
/* 000361 */ 		}) ();
/* 000368 */ 		final_content_node.flm_strip_preceding_whitespace = true;
/* 000371 */ 		if (__t__ (__getitem__ (self.theorem_type_spec, 'body_final_content'))) {
/* 000376 */ 			var body_nodelist = __add__ (__add__ ([heading_node], __call__ (list, null, node.nodelist)), [final_content_node]);
/* 000376 */ 		}
/* 000379 */ 		else {
/* 000386 */ 			var body_nodelist = __add__ ([heading_node], __call__ (list, null, node.nodelist));
/* 000386 */ 		}
/* 000389 */ 		var body_nodelist = (function () {
/* 000389 */ 			var __accu0__ = node.latex_walker;
/* 000389 */ 			return __call__ (__accu0__.make_nodelist, __accu0__, body_nodelist, __kwargtrans__ ({parsing_state: node.parsing_state}));
/* 000389 */ 		}) ();
/* 000394 */ 		var rendered_contents = (function () {
/* 000394 */ 			var __accu0__ = fragment_renderer;
/* 000394 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, body_nodelist, render_context);
/* 000394 */ 		}) ();
/* 000399 */ 		return (function () {
/* 000399 */ 			var __accu0__ = fragment_renderer;
/* 000399 */ 			return __call__ (__accu0__.render_semantic_block, __accu0__, rendered_contents, __getitem__ (self.theorem_spec, 'theorem_type'), render_context, __kwargtrans__ ({annotations: [self.environmentname, 'p-block']}));
/* 000399 */ 		}) ();
/* 000399 */ 	});},
/* 000406 */ 	get recompose_pure_latex () {return __get__ (this, function (self, node, recomposer) {
/* 000406 */ 		if (arguments.length) {
/* 000406 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000406 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000406 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000406 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000406 */ 					switch (__attrib0__) {
/* 000406 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000406 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000406 */ 						case 'recomposer': var recomposer = __allkwargs0__ [__attrib0__]; break;
/* 000406 */ 					}
/* 000406 */ 				}
/* 000406 */ 			}
/* 000406 */ 		}
/* 000406 */ 		else {
/* 000406 */ 		}
/* 000408 */ 		var s = __add__ (__add__ ('\\begin{', node.environmentname), '}');
/* 000410 */ 		if (__t__ (!__t__ ((__getitem__ (node.flmarg_thmtitle, 'has_relation_ref'))))) {
/* 000412 */ 			if (__t__ (__getitem__ (node.flmarg_thmtitle, 'nodelist') !== null)) {
/* 000413 */ 				var s = __call__ (__iadd__, null, s, __add__ (__add__ ('[{', (function () {
/* 000413 */ 					var __accu0__ = recomposer;
/* 000413 */ 					return __call__ (__accu0__.subrecompose, __accu0__, __getitem__ (node.flmarg_thmtitle, 'nodelist'));
/* 000413 */ 				}) ()), '}]'));
/* 000413 */ 			}
/* 000413 */ 		}
/* 000414 */ 		else {
/* 000415 */ 			var __left0__ = __getitem__ (node.flmarg_thmtitle, 'relation_ref_target');
/* 000415 */ 			var rel_ref_type = __left0__ [0];
/* 000415 */ 			var rel_ref_label = __left0__ [1];
/* 000416 */ 			var safe_label_info = (function () {
/* 000416 */ 				var __accu0__ = recomposer;
/* 000416 */ 				return __call__ (__accu0__.make_safe_label, __accu0__, 'ref', rel_ref_type, rel_ref_label, node.latex_walker.resource_info);
/* 000416 */ 			}) ();
/* 000419 */ 			var s = __call__ (__iadd__, null, s, '[*');
/* 000420 */ 			if (__t__ (!__t__ ((__getitem__ (node.flmarg_thmtitle, 'relation_ref_show_ref'))))) {
/* 000421 */ 				var s = __call__ (__iadd__, null, s, '*');
/* 000421 */ 			}
/* 000422 */ 			var s = __call__ (__iadd__, null, s, __getitem__ (safe_label_info, 'safe_label'));
/* 000423 */ 			var s = __call__ (__iadd__, null, s, ']');
/* 000423 */ 		}
/* 000425 */ 		if (__t__ (node.flmarg_has_noproofref)) {
/* 000426 */ 			var s = __call__ (__iadd__, null, s, '\\noproofref ');
/* 000426 */ 		}
/* 000429 */ 		var __iterable0__ = node.flmarg_labels;
/* 000429 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000429 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000429 */ 			var ref_type = __left0__ [0];
/* 000429 */ 			var ref_label = __left0__ [1];
/* 000430 */ 			var safe_label_info = (function () {
/* 000430 */ 				var __accu0__ = recomposer;
/* 000430 */ 				return __call__ (__accu0__.make_safe_label, __accu0__, 'ref', ref_type, ref_label, node.latex_walker.resource_info);
/* 000430 */ 			}) ();
/* 000433 */ 			var s = __call__ (__iadd__, null, s, __add__ (__add__ ('\\label{', __getitem__ (safe_label_info, 'safe_label')), '}'));
/* 000433 */ 		}
/* 000435 */ 		var s = __call__ (__iadd__, null, s, (function () {
/* 000435 */ 			var __accu0__ = recomposer;
/* 000435 */ 			return __call__ (__accu0__.recompose_nodelist, __accu0__, node.nodelist, node);
/* 000435 */ 		}) ());
/* 000437 */ 		var s = __call__ (__iadd__, null, s, __add__ (__add__ ('\\end{', node.environmentname), '}'));
/* 000439 */ 		return s;
/* 000439 */ 	});}
/* 000439 */ });
/* 000443 */ export var _default_theorem_environments_simpleset = dict ({'theoremlike': dict ({'theorem': dict ({'title': dict ({'lowercase': 'theorem', 'abbreviated': dict ({'singular': 'Thm.', 'plural': 'Thms.'})})}), 'proposition': dict ({'title': dict ({'lowercase': 'proposition', 'abbreviated': dict ({'singular': 'Prop.', 'plural': 'Props.'})})}), 'lemma': dict ({'title': dict ({'lowercase': 'lemma', 'abbreviated': dict ({'singular': 'Lem.', 'plural': 'Lems.'})})}), 'corollary': dict ({'title': dict ({'lowercase': 'corollary', 'abbreviated': dict ({'singular': 'Cor.', 'plural': 'Cors.'})})})}), 'definitionlike': dict ({'definition': dict ({'title': dict ({'lowercase': 'definition', 'abbreviated': dict ({'singular': 'Def.', 'plural': 'Defs.'})})})}), 'prooflike': dict ({'proof': dict ({'title': dict ({'lowercase': 'proof', 'abbreviated': dict ({'singular': 'Proof', 'plural': 'Proofs'})})})})});
/* 000526 */ /* no custom JS code needed here */
/* 000527 */ export var _merge_dicts = function (a, b) {
/* 000527 */ 	if (arguments.length) {
/* 000527 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000527 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000527 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000527 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000527 */ 				switch (__attrib0__) {
/* 000527 */ 					case 'a': var a = __allkwargs0__ [__attrib0__]; break;
/* 000527 */ 					case 'b': var b = __allkwargs0__ [__attrib0__]; break;
/* 000527 */ 				}
/* 000527 */ 			}
/* 000527 */ 		}
/* 000527 */ 	}
/* 000527 */ 	else {
/* 000527 */ 	}
/* 000528 */ 	var result = __call__ (dict, null, a);
/* 000529 */ 	(function () {
/* 000529 */ 		var __accu0__ = result;
/* 000529 */ 		return __call__ (__accu0__.py_update, __accu0__, b);
/* 000529 */ 	}) ();
/* 000530 */ 	return result;
/* 000530 */ };
/* 000557 */ export var _default_theorem_environments_defaultset = dict ({'theoremlike': __call__ (_merge_dicts, null, __getitem__ (_default_theorem_environments_simpleset, 'theoremlike'), dict ({'conjecture': dict ({'title': dict ({'lowercase': 'conjecture', 'abbreviated': dict ({'singular': 'Conj.', 'plural': 'Conjs.'})})})})), 'definitionlike': __call__ (_merge_dicts, null, __getitem__ (_default_theorem_environments_simpleset, 'definitionlike'), dict ({'remark': dict ({'title': dict ({'lowercase': 'remark', 'abbreviated': dict ({'singular': 'Rem.', 'plural': 'Rems.'})})})})), 'prooflike': __call__ (dict, null, __getitem__ (_default_theorem_environments_simpleset, 'prooflike'))});
/* 000609 */ export var _default_theorem_environments_richset = dict ({'theoremlike': __call__ (dict, null, __getitem__ (_default_theorem_environments_defaultset, 'theoremlike')), 'definitionlike': __call__ (_merge_dicts, null, __getitem__ (_default_theorem_environments_defaultset, 'definitionlike'), dict ({'idea': dict ({'title': dict ({'lowercase': 'idea', 'abbreviated': dict ({'singular': 'Idea', 'plural': 'Ideas'})})}), 'question': dict ({'title': dict ({'lowercase': 'question', 'abbreviated': dict ({'singular': 'Qtn.', 'plural': 'Qtns.'})})}), 'claim': dict ({'title': dict ({'lowercase': 'claim', 'abbreviated': dict ({'singular': 'Clm.', 'plural': 'Clms.'})})}), 'observation': dict ({'title': dict ({'lowercase': 'observation', 'abbreviated': dict ({'singular': 'Obs.', 'plural': 'Obs.'})})}), 'problem': dict ({'title': dict ({'lowercase': 'problem', 'abbreviated': dict ({'singular': 'Prob.', 'plural': 'Probs.'})})})})), 'prooflike': __call__ (dict, null, __getitem__ (_default_theorem_environments_defaultset, 'prooflike'))});
/* 000613 */ export var default_theorem_environments = dict ({'simpleset': _default_theorem_environments_simpleset, 'defaultset': _default_theorem_environments_defaultset, 'richset': _default_theorem_environments_richset});
/* 000619 */ export var default_theorem_theorem_types = dict ({'theoremlike': dict ({'numbered': true, 'shared_numbering': true, 'counter_formatter': null, 'theorem_heading_level': 'theorem', 'heading_title_pre': ' (', 'heading_title_post': ')', 'title_enable_relation_ref': false, 'body_final_content': ''}), 'definitionlike': dict ({'numbered': true, 'shared_numbering': true, 'counter_formatter': null, 'theorem_heading_level': 'theorem', 'heading_title_pre': ' (', 'heading_title_post': ')', 'title_enable_relation_ref': false}), 'prooflike': dict ({'numbered': false, 'title_enable_relation_ref': true, 'body_final_content': '\xa0□'})});
/* 000651 */ var default_thm_shared_counter_formatter_spec = dict ({'format_num': 'arabic', 'delimiters': tuple (['', '']), 'join_spec': 'default'});
/* 000658 */ export var default_allowed_ref_label_prefixes = ['thm', 'prop', 'cor', 'lem', 'rem', 'def', 'dfn', 'x', 'topic'];
/* 000682 */ export var FeatureTheorems =  __class__ ('FeatureTheorems', [Feature], {
/* 000682 */ 	__module__: __name__,
/* 000689 */ 	feature_name: 'theorems',
/* 000691 */ 	feature_dependencies: ['refs'],
/* 000692 */ 	feature_optional_dependencies: ['numbering'],
/* 000703 */ 	feature_default_config: dict ({'environments': __getitem__ (default_theorem_environments, 'defaultset'), 'theorem_types': default_theorem_theorem_types, 'shared_counter_formatter': 'arabic', 'allowed_ref_label_prefixes': default_allowed_ref_label_prefixes}),
/* 000703 */ 	RenderManager: __class__ ('RenderManager', [FeatureRenderManagerBase], {
/* 000703 */ 		__module__: __name__,
/* 000705 */ 		get initialize () {return __get__ (this, function (self) {
/* 000705 */ 			if (arguments.length) {
/* 000705 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000705 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000705 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000705 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000705 */ 						switch (__attrib0__) {
/* 000705 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000705 */ 						}
/* 000705 */ 					}
/* 000705 */ 				}
/* 000705 */ 			}
/* 000705 */ 			else {
/* 000705 */ 			}
/* 000707 */ 			self.shared_counter_iface = (function () {
/* 000707 */ 				var __accu0__ = numbering;
/* 000707 */ 				return __call__ (__accu0__.get_document_render_counter, __accu0__, self.render_context, __kwargtrans__ ({counter_name: self.feature.shared_counter_formatter.counter_formatter_id, counter_formatter: self.feature.shared_counter_formatter}));
/* 000707 */ 			}) ();
/* 000713 */ 			var refs_mgr = (function () {
/* 000713 */ 				var __accu0__ = self.render_context;
/* 000713 */ 				return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000713 */ 			}) ();
/* 000715 */ 			self.counter_ifaces = dict ({});
/* 000716 */ 			var __iterable0__ = (function () {
/* 000716 */ 				var __accu0__ = self.feature.thm_counter_formatters;
/* 000716 */ 				return __call__ (__accu0__.py_items, __accu0__);
/* 000716 */ 			}) ();
/* 000716 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000716 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000716 */ 				var env_name = __left0__ [0];
/* 000716 */ 				var counter_formatter = __left0__ [1];
/* 000717 */ 				var thm_spec = __getitem__ (self.feature.environments, env_name);
/* 000718 */ 				var thm_type_spec = __getitem__ (self.feature.theorem_types, __getitem__ (thm_spec, 'theorem_type'));
/* 000720 */ 				var use_alias_counter = null;
/* 000721 */ 				if (__t__ (__getitem__ (thm_type_spec, 'shared_numbering'))) {
/* 000722 */ 					var use_alias_counter = self.shared_counter_iface;
/* 000722 */ 				}
/* 000724 */ 				__setitem__ (self.counter_ifaces, env_name, (function () {
/* 000724 */ 					var __accu0__ = numbering;
/* 000724 */ 					return __call__ (__accu0__.get_document_render_counter, __accu0__, self.render_context, __kwargtrans__ ({counter_name: counter_formatter.counter_formatter_id, counter_formatter: counter_formatter, alias_counter: use_alias_counter}));
/* 000724 */ 				}) ());
/* 000732 */ 				(function () {
/* 000732 */ 					var __accu0__ = refs_mgr;
/* 000732 */ 					return __call__ (__accu0__.register_counter_formatter, __accu0__, __kwargtrans__ ({counter_formatter: counter_formatter}));
/* 000732 */ 				}) ();
/* 000732 */ 			}
/* 000732 */ 		});}
/* 000732 */ 	}),
/* 000737 */ 	get __init__ () {return __get__ (this, function (self, environments, theorem_types, shared_counter_formatter, allowed_ref_label_prefixes) {
/* 000737 */ 		if (typeof environments == 'undefined' || (environments != null && environments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000737 */ 			var environments = null;
/* 000737 */ 		};
/* 000737 */ 		if (typeof theorem_types == 'undefined' || (theorem_types != null && theorem_types.hasOwnProperty ("__kwargtrans__"))) {;
/* 000737 */ 			var theorem_types = null;
/* 000737 */ 		};
/* 000737 */ 		if (typeof shared_counter_formatter == 'undefined' || (shared_counter_formatter != null && shared_counter_formatter.hasOwnProperty ("__kwargtrans__"))) {;
/* 000737 */ 			var shared_counter_formatter = null;
/* 000737 */ 		};
/* 000737 */ 		if (typeof allowed_ref_label_prefixes == 'undefined' || (allowed_ref_label_prefixes != null && allowed_ref_label_prefixes.hasOwnProperty ("__kwargtrans__"))) {;
/* 000737 */ 			var allowed_ref_label_prefixes = null;
/* 000737 */ 		};
/* 000737 */ 		if (arguments.length) {
/* 000737 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000737 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000737 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000737 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000737 */ 					switch (__attrib0__) {
/* 000737 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000737 */ 						case 'environments': var environments = __allkwargs0__ [__attrib0__]; break;
/* 000737 */ 						case 'theorem_types': var theorem_types = __allkwargs0__ [__attrib0__]; break;
/* 000737 */ 						case 'shared_counter_formatter': var shared_counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000737 */ 						case 'allowed_ref_label_prefixes': var allowed_ref_label_prefixes = __allkwargs0__ [__attrib0__]; break;
/* 000737 */ 					}
/* 000737 */ 				}
/* 000737 */ 			}
/* 000737 */ 		}
/* 000737 */ 		else {
/* 000737 */ 		}
/* 000760 */ 		__call__ (__call__ (__super__, null, FeatureTheorems, '__init__'), null, self);
/* 000761 */ 		if (__t__ (environments === null)) {
/* 000762 */ 			var environments = __getitem__ (default_theorem_environments, 'defaultset');
/* 000762 */ 		}
/* 000763 */ 		if (__t__ (__call__ (isinstance, null, environments, str))) {
/* 000764 */ 			var environments = __getitem__ (default_theorem_environments, environments);
/* 000764 */ 		}
/* 000766 */ 		if (__t__ (theorem_types === null)) {
/* 000767 */ 			var theorem_types = default_theorem_theorem_types;
/* 000767 */ 		}
/* 000771 */ 		self.theorem_types = (function () {
/* 000771 */ 			var __accu0__ = [];
/* 000773 */ 			var __iterable0__ = (function () {
/* 000773 */ 				var __accu1__ = __call__ (dict, null, theorem_types);
/* 000773 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000773 */ 			}) ();
/* 000773 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000773 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000773 */ 				var thm_type = __left0__ [0];
/* 000773 */ 				var thm_type_spec = __left0__ [1];
/* 000773 */ 				if (__t__ (thm_type_spec !== null)) {
/* 000774 */ 					(function () {
/* 000774 */ 						var __accu1__ = __accu0__;
/* 000772 */ 						return __call__ (__accu1__.append, __accu1__, [thm_type, (function () {
/* 000772 */ 							var __accu2__ = self;
/* 000772 */ 							return __call__ (__accu2__._standardize_type_spec, __accu2__, thm_type, thm_type_spec);
/* 000772 */ 						}) ()]);
/* 000772 */ 					}) ();
/* 000772 */ 				}
/* 000772 */ 			}
/* 000772 */ 			return dict (__accu0__);
/* 000772 */ 		}) ();
/* 000779 */ 		self.environments = dict ({});
/* 000780 */ 		var __iterable0__ = (function () {
/* 000780 */ 			var __accu0__ = environments;
/* 000780 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000780 */ 		}) ();
/* 000780 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000780 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000780 */ 			var thm_type = __left0__ [0];
/* 000780 */ 			var env_list = __left0__ [1];
/* 000781 */ 			var __iterable1__ = (function () {
/* 000781 */ 				var __accu0__ = env_list;
/* 000781 */ 				return __call__ (__accu0__.py_items, __accu0__);
/* 000781 */ 			}) ();
/* 000781 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000781 */ 				var __left0__ = __getitem__ (__iterable1__, __index1__);
/* 000781 */ 				var env_name = __left0__ [0];
/* 000781 */ 				var thm_spec = __left0__ [1];
/* 000782 */ 				if (__t__ (__in__ (env_name, self.environments))) {
/* 000783 */ 					var __except0__ = __call__ (ValueError, null, 'Duplicate definition of theorem environment ‘{}’'.format (env_name));
/* 000783 */ 					__except0__.__cause__ = null;
/* 000783 */ 					throw __except0__;
/* 000783 */ 				}
/* 000787 */ 				__setitem__ (self.environments, env_name, (function () {
/* 000787 */ 					var __accu0__ = self;
/* 000787 */ 					return __call__ (__accu0__._standardize_thm_spec, __accu0__, thm_type, env_name, thm_spec);
/* 000787 */ 				}) ());
/* 000787 */ 			}
/* 000787 */ 		}
/* 000791 */ 		self.shared_counter_formatter = __call__ (build_counter_formatter, null, shared_counter_formatter, default_thm_shared_counter_formatter_spec, __kwargtrans__ ({counter_formatter_id: '_theorems_shared'}));
/* 000797 */ 		var use_default_counter_formatter_spec = (function () {
/* 000797 */ 			var __accu0__ = self.shared_counter_formatter;
/* 000797 */ 			return __call__ (__accu0__.asdict, __accu0__);
/* 000797 */ 		}) ();
/* 000799 */ 		self.thm_counter_formatters = dict ({});
/* 000800 */ 		var __iterable0__ = (function () {
/* 000800 */ 			var __accu0__ = self.environments;
/* 000800 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000800 */ 		}) ();
/* 000800 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000800 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000800 */ 			var env_name = __left0__ [0];
/* 000800 */ 			var thm_spec = __left0__ [1];
/* 000801 */ 			var thm_type_spec = __getitem__ (self.theorem_types, __getitem__ (thm_spec, 'theorem_type'));
/* 000802 */ 			if (__t__ (!__t__ ((__getitem__ (thm_type_spec, 'numbered'))))) {
/* 000802 */ 				continue;
/* 000802 */ 			}
/* 000806 */ 			var counter_formatter_spec = (function () {
/* 000806 */ 				var __accu0__ = thm_type_spec;
/* 000806 */ 				return __call__ (__accu0__.py_get, __accu0__, 'counter_formatter', null);
/* 000806 */ 			}) ();
/* 000807 */ 			if (__t__ (counter_formatter_spec === null)) {
/* 000808 */ 				var counter_formatter_spec = dict ({});
/* 000808 */ 			}
/* 000809 */ 			else if (__t__ (__call__ (isinstance, null, counter_formatter_spec, str))) {
/* 000810 */ 				var counter_formatter_spec = dict ({'format_num': counter_formatter_spec});
/* 000810 */ 			}
/* 000811 */ 			else {
/* 000812 */ 				var counter_formatter_spec = __call__ (dict, null, counter_formatter_spec);
/* 000812 */ 			}
/* 000818 */ 			__setitem__ (counter_formatter_spec, 'prefix_display', (function () {
/* 000818 */ 				var __accu0__ = self;
/* 000818 */ 				return __call__ (__accu0__._make_counter_formatter_prefix_for_thm, __accu0__, env_name, thm_spec);
/* 000818 */ 			}) ());
/* 000822 */ 			__setitem__ (self.thm_counter_formatters, env_name, __call__ (build_counter_formatter, null, counter_formatter_spec, use_default_counter_formatter_spec, __kwargtrans__ ({counter_formatter_id: env_name})));
/* 000822 */ 		}
/* 000828 */ 		self.allowed_ref_label_prefixes = __call__ (list, null, (__t__ (allowed_ref_label_prefixes !== null) ? allowed_ref_label_prefixes : default_allowed_ref_label_prefixes));
/* 000828 */ 	});},
/* 000835 */ 	get _standardize_type_spec () {return __get__ (this, function (self, thm_type, thm_type_spec) {
/* 000835 */ 		if (arguments.length) {
/* 000835 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000835 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000835 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000835 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000835 */ 					switch (__attrib0__) {
/* 000835 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000835 */ 						case 'thm_type': var thm_type = __allkwargs0__ [__attrib0__]; break;
/* 000835 */ 						case 'thm_type_spec': var thm_type_spec = __allkwargs0__ [__attrib0__]; break;
/* 000835 */ 					}
/* 000835 */ 				}
/* 000835 */ 			}
/* 000835 */ 		}
/* 000835 */ 		else {
/* 000835 */ 		}
/* 000837 */ 		var spec = __call__ (dict, null, __getitem__ (default_theorem_theorem_types, 'theoremlike'));
/* 000838 */ 		(function () {
/* 000838 */ 			var __accu0__ = spec;
/* 000838 */ 			return __call__ (__accu0__.py_update, __accu0__, thm_type_spec);
/* 000838 */ 		}) ();
/* 000839 */ 		return spec;
/* 000839 */ 	});},
/* 000841 */ 	get _standardize_thm_spec () {return __get__ (this, function (self, thm_type, env_name, thm_spec) {
/* 000841 */ 		if (arguments.length) {
/* 000841 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000841 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000841 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000841 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000841 */ 					switch (__attrib0__) {
/* 000841 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000841 */ 						case 'thm_type': var thm_type = __allkwargs0__ [__attrib0__]; break;
/* 000841 */ 						case 'env_name': var env_name = __allkwargs0__ [__attrib0__]; break;
/* 000841 */ 						case 'thm_spec': var thm_spec = __allkwargs0__ [__attrib0__]; break;
/* 000841 */ 					}
/* 000841 */ 				}
/* 000841 */ 			}
/* 000841 */ 		}
/* 000841 */ 		else {
/* 000841 */ 		}
/* 000842 */ 		if (__t__ (thm_spec === true)) {
/* 000843 */ 			var thm_spec = env_name;
/* 000843 */ 		}
/* 000844 */ 		if (__t__ (__call__ (isinstance, null, thm_spec, str))) {
/* 000845 */ 			var thm_spec = dict ({'title': thm_spec});
/* 000845 */ 		}
/* 000846 */ 		else {
/* 000847 */ 			var thm_spec = __call__ (dict, null, thm_spec);
/* 000847 */ 		}
/* 000849 */ 		__setitem__ (thm_spec, 'theorem_type', thm_type);
/* 000852 */ 		var new_title_spec = dict ({});
/* 000853 */ 		var title = (function () {
/* 000853 */ 			var __accu0__ = thm_spec;
/* 000853 */ 			return __call__ (__accu0__.py_get, __accu0__, 'title', null);
/* 000853 */ 		}) ();
/* 000854 */ 		if (__t__ (title === null)) {
/* 000855 */ 			var title = env_name;
/* 000855 */ 		}
/* 000856 */ 		if (__t__ (__call__ (isinstance, null, title, str))) {
/* 000857 */ 			var title = dict ({'lowercase': dict ({'singular': title, 'plural': __add__ (title, 's')})});
/* 000857 */ 		}
/* 000860 */ 		if (__t__ (__in__ ('lowercase', title))) {
/* 000861 */ 			var lowercase = __getitem__ (title, 'lowercase');
/* 000862 */ 			if (__t__ (__call__ (isinstance, null, lowercase, str))) {
/* 000863 */ 				__setitem__ (new_title_spec, 'lowercase', dict ({'singular': lowercase, 'plural': __add__ (lowercase, 's')}));
/* 000863 */ 			}
/* 000866 */ 			else {
/* 000868 */ 				__setitem__ (new_title_spec, 'lowercase', lowercase);
/* 000868 */ 			}
/* 000868 */ 		}
/* 000869 */ 		else {
/* 000871 */ 			__setitem__ (new_title_spec, 'lowercase', dict ({'singular': '??', 'plural': '???'}));
/* 000871 */ 		}
/* 000873 */ 		if (__t__ (__in__ ('capital', title))) {
/* 000874 */ 			var capital = __getitem__ (title, 'capital');
/* 000875 */ 			if (__t__ (__call__ (isinstance, null, capital, str))) {
/* 000876 */ 				__setitem__ (new_title_spec, 'capital', dict ({'singular': capital, 'plural': __add__ (capital, 's')}));
/* 000876 */ 			}
/* 000879 */ 			else {
/* 000881 */ 				__setitem__ (new_title_spec, 'capital', capital);
/* 000881 */ 			}
/* 000881 */ 		}
/* 000882 */ 		else {
/* 000885 */ 			__setitem__ (new_title_spec, 'capital', dict ({'singular': (function () {
/* 000885 */ 				var __accu0__ = __getitem__ (__getitem__ (new_title_spec, 'lowercase'), 'singular');
/* 000885 */ 				return __call__ (__accu0__.capitalize, __accu0__);
/* 000886 */ 			}) (), 'plural': (function () {
/* 000886 */ 				var __accu0__ = __getitem__ (__getitem__ (new_title_spec, 'lowercase'), 'plural');
/* 000886 */ 				return __call__ (__accu0__.capitalize, __accu0__);
/* 000886 */ 			}) ()}));
/* 000886 */ 		}
/* 000889 */ 		if (__t__ (__in__ ('abbreviated', title))) {
/* 000890 */ 			var abbreviated = __getitem__ (title, 'abbreviated');
/* 000891 */ 			if (__t__ (__call__ (isinstance, null, abbreviated, str))) {
/* 000892 */ 				__setitem__ (new_title_spec, 'abbreviated', dict ({'singular': abbreviated, 'plural': __add__ (abbreviated, 's')}));
/* 000892 */ 			}
/* 000895 */ 			else {
/* 000897 */ 				__setitem__ (new_title_spec, 'abbreviated', abbreviated);
/* 000897 */ 			}
/* 000897 */ 		}
/* 000898 */ 		else {
/* 000902 */ 			__setitem__ (new_title_spec, 'abbreviated', dict ({'singular': __add__ (__getslice__ (__getitem__ (__getitem__ (new_title_spec, 'capital'), 'singular'), 0, 3, 1), '.'), 'plural': __add__ ((function () {
/* 000902 */ 				var __accu0__ = __getslice__ (__getitem__ (__getitem__ (new_title_spec, 'capital'), 'plural'), 0, 3, 1);
/* 000902 */ 				return __call__ (__accu0__.rstrip, __accu0__, 's');
/* 000902 */ 			}) (), 's.')}));
/* 000902 */ 		}
/* 000905 */ 		__setitem__ (thm_spec, 'title', new_title_spec);
/* 000907 */ 		return thm_spec;
/* 000907 */ 	});},
/* 000910 */ 	get _make_counter_formatter_prefix_for_thm () {return __get__ (this, function (self, env_name, thm_spec) {
/* 000910 */ 		if (arguments.length) {
/* 000910 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000910 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000910 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000910 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000910 */ 					switch (__attrib0__) {
/* 000910 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000910 */ 						case 'env_name': var env_name = __allkwargs0__ [__attrib0__]; break;
/* 000910 */ 						case 'thm_spec': var thm_spec = __allkwargs0__ [__attrib0__]; break;
/* 000910 */ 					}
/* 000910 */ 				}
/* 000910 */ 			}
/* 000910 */ 		}
/* 000910 */ 		else {
/* 000910 */ 		}
/* 000911 */ 		var prefix = dict ({});
/* 000913 */ 		var _add_space_values = function (x) {
/* 000913 */ 			if (arguments.length) {
/* 000913 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000913 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000913 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000913 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000913 */ 						switch (__attrib0__) {
/* 000913 */ 							case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000913 */ 						}
/* 000913 */ 					}
/* 000913 */ 				}
/* 000913 */ 			}
/* 000913 */ 			else {
/* 000913 */ 			}
/* 000914 */ 			return (function () {
/* 000914 */ 				var __accu0__ = [];
/* 000914 */ 				var __iterable0__ = (function () {
/* 000914 */ 					var __accu1__ = x;
/* 000914 */ 					return __call__ (__accu1__.py_items, __accu1__);
/* 000914 */ 				}) ();
/* 000914 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000914 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000914 */ 					var k = __left0__ [0];
/* 000914 */ 					var v = __left0__ [1];
/* 000914 */ 					(function () {
/* 000914 */ 						var __accu1__ = __accu0__;
/* 000914 */ 						return __call__ (__accu1__.append, __accu1__, [k, __add__ (v, '~')]);
/* 000914 */ 					}) ();
/* 000914 */ 				}
/* 000914 */ 				return dict (__accu0__);
/* 000914 */ 			}) ();
/* 000914 */ 		};
/* 000916 */ 		__setitem__ (prefix, 'lowercase', __call__ (_add_space_values, null, __getitem__ (__getitem__ (thm_spec, 'title'), 'lowercase')));
/* 000917 */ 		__setitem__ (prefix, 'capital', __call__ (_add_space_values, null, __getitem__ (__getitem__ (thm_spec, 'title'), 'capital')));
/* 000918 */ 		__setitem__ (prefix, 'abbreviated', __call__ (_add_space_values, null, __getitem__ (__getitem__ (thm_spec, 'title'), 'abbreviated')));
/* 000920 */ 		(function () {
/* 000920 */ 			var __accu0__ = prefix;
/* 000920 */ 			return __call__ (__accu0__.py_update, __accu0__, __getitem__ (prefix, 'capital'));
/* 000920 */ 		}) ();
/* 000922 */ 		return prefix;
/* 000922 */ 	});},
/* 000925 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000925 */ 		if (arguments.length) {
/* 000925 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000925 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000925 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000925 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000925 */ 					switch (__attrib0__) {
/* 000925 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000925 */ 					}
/* 000925 */ 				}
/* 000925 */ 			}
/* 000925 */ 		}
/* 000925 */ 		else {
/* 000925 */ 		}
/* 000927 */ 		var environment_specs = [];
/* 000929 */ 		var __iterable0__ = (function () {
/* 000929 */ 			var __accu0__ = self.environments;
/* 000929 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000929 */ 		}) ();
/* 000929 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000929 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000929 */ 			var env_name = __left0__ [0];
/* 000929 */ 			var thm_spec = __left0__ [1];
/* 000930 */ 			(function () {
/* 000930 */ 				var __accu0__ = environment_specs;
/* 000930 */ 				return __call__ (__accu0__.append, __accu0__, __call__ (TheoremEnvironment, null, __kwargtrans__ ({environmentname: env_name, theorem_spec: thm_spec, theorem_type_spec: __getitem__ (self.theorem_types, __getitem__ (thm_spec, 'theorem_type')), allowed_ref_label_prefixes: self.allowed_ref_label_prefixes})));
/* 000930 */ 			}) ();
/* 000930 */ 		}
/* 000937 */ 		return dict ({'environments': environment_specs});
/* 000937 */ 	});}
/* 000937 */ });
/* 000944 */ export var FeatureClass = FeatureTheorems;
/* 000015 */ 
//# sourceMappingURL=flm.feature.theorems.map