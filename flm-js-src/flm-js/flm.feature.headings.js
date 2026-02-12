/* 000001 */ // Transcrypt'ed from Python, 2026-02-12 21:38:41
/* 000006 */ var logging = {};
/* 000006 */ var re = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000022 */ import * as numbering from './flm.feature.numbering.js';
/* 000020 */ import * as refs from './flm.feature.refs.js';
/* 000018 */ import {Feature} from './flm.feature._base.js';
/* 000016 */ import {CounterFormatter, build_counter_formatter} from './flm.counter.js';
/* 000014 */ import * as flmspecinfo from './flm.flmspecinfo.js';
/* 000010 */ import {LatexArgumentSpec, ParsedArgumentsInfo} from './pylatexenc.latexnodes.js';
/* 000007 */ import * as __module_logging__ from './logging.js';
/* 000007 */ __nest__ (logging, '', __module_logging__);
/* 000006 */ import * as __module_re__ from './re.js';
/* 000006 */ __nest__ (re, '', __module_re__);
/* 000006 */ export {ParsedArgumentsInfo, LatexArgumentSpec, refs, build_counter_formatter, CounterFormatter, numbering, flmspecinfo, Feature};
/* 000001 */ var __name__ = 'flm.feature.headings';
/* 000008 */ export var logger = (function () {
/* 000008 */ 	var __accu0__ = logging;
/* 000008 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000008 */ }) ();
/* 000028 */ export var HeadingMacro =  __class__ ('HeadingMacro', [flmspecinfo.FLMMacroSpecBase], {
/* 000028 */ 	__module__: __name__,
/* 000030 */ 	is_block_level: true,
/* 000032 */ 	allowed_in_standalone_mode: true,
/* 000036 */ 	_flm_main_text_argument: 'text',
/* 000038 */ 	allowed_ref_label_prefixes: tuple (['sec', 'topic']),
/* 000040 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000040 */ 		var heading_level = 1;
/* 000040 */ 		var inline_heading = false;
/* 000040 */ 		if (arguments.length) {
/* 000040 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000040 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000040 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000040 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000040 */ 					switch (__attrib0__) {
/* 000040 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000040 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000040 */ 						case 'heading_level': var heading_level = __allkwargs0__ [__attrib0__]; break;
/* 000040 */ 						case 'inline_heading': var inline_heading = __allkwargs0__ [__attrib0__]; break;
/* 000040 */ 					}
/* 000040 */ 				}
/* 000040 */ 			}
/* 000040 */ 		}
/* 000040 */ 		else {
/* 000040 */ 		}
/* 000049 */ 		__call__ (__call__ (__super__, null, HeadingMacro, '__init__'), null, self, macroname, __kwargtrans__ ({arguments_spec_list: [__call__ (LatexArgumentSpec, null, '*', __kwargtrans__ ({argname: 'star'})), flmspecinfo.text_arg, flmspecinfo.label_arg]}));
/* 000054 */ 		self.heading_level = heading_level;
/* 000055 */ 		self.inline_heading = inline_heading;
/* 000057 */ 		self.is_block_heading = self.inline_heading;
/* 000057 */ 	});},
/* 000059 */ 	_fields: tuple (['macroname', 'heading_level', 'inline_heading']),
/* 000061 */ 	get get_flm_doc () {return __get__ (this, function (self) {
/* 000061 */ 		if (arguments.length) {
/* 000061 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000061 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000061 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000061 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000061 */ 					switch (__attrib0__) {
/* 000061 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000061 */ 					}
/* 000061 */ 				}
/* 000061 */ 			}
/* 000061 */ 		}
/* 000061 */ 		else {
/* 000061 */ 		}
/* 000062 */ 		return 'Create a{} heading at level {}'.format ((__t__ (self.inline_heading) ? 'n inline' : ''), self.heading_level);
/* 000062 */ 	});},
/* 000067 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000067 */ 		if (arguments.length) {
/* 000067 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000067 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000067 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000067 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000067 */ 					switch (__attrib0__) {
/* 000067 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000067 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000067 */ 					}
/* 000067 */ 				}
/* 000067 */ 			}
/* 000067 */ 		}
/* 000067 */ 		else {
/* 000067 */ 		}
/* 000069 */ 		var node_args = (function () {
/* 000069 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000069 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['star', 'text', 'label']));
/* 000069 */ 		}) ();
/* 000073 */ 		node.flmarg_skip_numbering = (function () {
/* 000073 */ 			var __accu0__ = __getitem__ (node_args, 'star');
/* 000073 */ 			return __call__ (__accu0__.was_provided, __accu0__);
/* 000073 */ 		}) ();
/* 000075 */ 		node.flmarg_heading_content_nodelist = (function () {
/* 000075 */ 			var __accu0__ = __getitem__ (node_args, 'text');
/* 000075 */ 			return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000075 */ 		}) ();
/* 000077 */ 		node.flmarg_labels = (function () {
/* 000077 */ 			var __accu0__ = flmspecinfo;
/* 000077 */ 			return __call__ (__accu0__.helper_collect_labels, __accu0__, __getitem__ (node_args, 'label'), self.allowed_ref_label_prefixes);
/* 000077 */ 		}) ();
/* 000082 */ 		var heading_flm_text = (function () {
/* 000082 */ 			var __accu0__ = node.flmarg_heading_content_nodelist;
/* 000082 */ 			return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000082 */ 		}) ();
/* 000085 */ 		node.flm_referenceable_infos = [(function () {
/* 000085 */ 			var __accu0__ = refs;
/* 000085 */ 			return __call__ (__accu0__.ReferenceableInfo, __accu0__, __kwargtrans__ ({kind: 'heading', formatted_ref_flm_text: heading_flm_text, labels: node.flmarg_labels}));
/* 000085 */ 		}) ()];
/* 000085 */ 	});},
/* 000093 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000093 */ 		if (arguments.length) {
/* 000093 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000093 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000093 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000093 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000093 */ 					switch (__attrib0__) {
/* 000093 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000093 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000093 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000093 */ 					}
/* 000093 */ 				}
/* 000093 */ 			}
/* 000093 */ 		}
/* 000093 */ 		else {
/* 000093 */ 		}
/* 000095 */ 		var headings_mgr = (function () {
/* 000095 */ 			var __accu0__ = render_context;
/* 000095 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'headings');
/* 000095 */ 		}) ();
/* 000097 */ 		var heading_info = (function () {
/* 000097 */ 			var __accu0__ = headings_mgr;
/* 000097 */ 			return __call__ (__accu0__.new_heading, __accu0__, __kwargtrans__ ({node: node, heading_level: self.heading_level, labels: node.flmarg_labels, heading_content_nodelist: node.flmarg_heading_content_nodelist, skip_numbering: node.flmarg_skip_numbering}));
/* 000097 */ 		}) ();
/* 000105 */ 		return (function () {
/* 000105 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000105 */ 			return __call__ (__accu0__.render_heading, __accu0__, __getitem__ (heading_info, 'content_nodelist'), __kwargtrans__ ({render_context: render_context, heading_level: self.heading_level, inline_heading: self.inline_heading, target_id: __getitem__ (heading_info, 'target_id')}));
/* 000105 */ 		}) ();
/* 000105 */ 	});},
/* 000114 */ 	get recompose_pure_latex () {return __get__ (this, function (self, node, recomposer) {
/* 000114 */ 		if (arguments.length) {
/* 000114 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000114 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000114 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000114 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000114 */ 					switch (__attrib0__) {
/* 000114 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000114 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000114 */ 						case 'recomposer': var recomposer = __allkwargs0__ [__attrib0__]; break;
/* 000114 */ 					}
/* 000114 */ 				}
/* 000114 */ 			}
/* 000114 */ 		}
/* 000114 */ 		else {
/* 000114 */ 		}
/* 000116 */ 		var heading_macroname = node.macroname;
/* 000118 */ 		var recopt_headings = (function () {
/* 000118 */ 			var __accu0__ = recomposer;
/* 000118 */ 			return __call__ (__accu0__.get_options, __accu0__, 'headings');
/* 000118 */ 		}) ();
/* 000119 */ 		var heading_macroname_mapping = (function () {
/* 000119 */ 			var __accu0__ = recopt_headings;
/* 000119 */ 			return __call__ (__accu0__.py_get, __accu0__, 'macroname_mapping', null);
/* 000119 */ 		}) ();
/* 000120 */ 		if (__t__ (heading_macroname_mapping)) {
/* 000121 */ 			if (__t__ (__in__ (heading_macroname, heading_macroname_mapping))) {
/* 000122 */ 				var heading_macroname = __getitem__ (heading_macroname_mapping, heading_macroname);
/* 000122 */ 			}
/* 000122 */ 		}
/* 000124 */ 		var s = __add__ ('\\', heading_macroname);
/* 000132 */ 		if (__t__ (node.nodeargd !== null)) {
/* 000134 */ 			if (__t__ (__getitem__ (node.nodeargd.argnlist, 0) !== null)) {
/* 000135 */ 				var s = __call__ (__iadd__, null, s, (function () {
/* 000135 */ 					var __accu0__ = recomposer;
/* 000135 */ 					return __call__ (__accu0__.subrecompose, __accu0__, __getitem__ (node.nodeargd.argnlist, 0));
/* 000135 */ 				}) ());
/* 000135 */ 			}
/* 000137 */ 			if (__t__ (__getitem__ (node.nodeargd.argnlist, 1) !== null)) {
/* 000138 */ 				var s = __call__ (__iadd__, null, s, (function () {
/* 000138 */ 					var __accu0__ = recomposer;
/* 000138 */ 					return __call__ (__accu0__.subrecompose, __accu0__, __getitem__ (node.nodeargd.argnlist, 1));
/* 000138 */ 				}) ());
/* 000138 */ 			}
/* 000138 */ 		}
/* 000141 */ 		var __iterable0__ = node.flmarg_labels;
/* 000141 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000141 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000141 */ 			var ref_type = __left0__ [0];
/* 000141 */ 			var ref_label = __left0__ [1];
/* 000142 */ 			var safe_label_info = (function () {
/* 000142 */ 				var __accu0__ = recomposer;
/* 000142 */ 				return __call__ (__accu0__.make_safe_label, __accu0__, 'ref', ref_type, ref_label, node.latex_walker.resource_info);
/* 000142 */ 			}) ();
/* 000145 */ 			var s = __call__ (__iadd__, null, s, __add__ (__add__ ('\\label{', __getitem__ (safe_label_info, 'safe_label')), '}'));
/* 000145 */ 		}
/* 000147 */ 		return s;
/* 000147 */ 	});}
/* 000147 */ });
/* 000150 */ export var _default_counter_formatter_spec = dict ({'format_num': dict ({'template': '${arabic}'}), 'prefix_display': dict ({'singular': '§\u2009', 'plural': '§\u2009'}), 'delimiters': tuple (['', '']), 'join_spec': 'compact'});
/* 000167 */ export var _default_section_commands_by_level = dict ({1: __call__ (dict, null, __kwargtrans__ ({cmdname: 'section'})), 2: __call__ (dict, null, __kwargtrans__ ({cmdname: 'subsection'})), 3: __call__ (dict, null, __kwargtrans__ ({cmdname: 'subsubsection'})), 4: __call__ (dict, null, __kwargtrans__ ({cmdname: 'paragraph', inline: true})), 5: __call__ (dict, null, __kwargtrans__ ({cmdname: 'subparagraph', inline: true})), 6: __call__ (dict, null, __kwargtrans__ ({cmdname: 'subsubparagraph', inline: true}))});
/* 000195 */ export var _default_section_numbering_by_level = dict ({1: __call__ (dict, null, __kwargtrans__ ({counter_formatter: dict ({'template': '${arabic}'}), numprefix: null, heading_joiner: '. '})), 2: __call__ (dict, null, __kwargtrans__ ({counter_formatter: dict ({'template': '${arabic}'}), numprefix: '${section}.', heading_joiner: '. '})), 3: __call__ (dict, null, __kwargtrans__ ({counter_formatter: dict ({'template': '${arabic}'}), numprefix: '${subsection}.', heading_joiner: '. '})), 4: __call__ (dict, null, __kwargtrans__ ({counter_formatter: dict ({'template': '${alph}'}), numprefix: null, heading_joiner: '. '})), 5: __call__ (dict, null, __kwargtrans__ ({counter_formatter: dict ({'template': '${alph}'}), numprefix: '${paragraph}.', heading_joiner: '. '})), 6: __call__ (dict, null, __kwargtrans__ ({counter_formatter: dict ({'template': '${alph}'}), numprefix: '${subparagraph}.', heading_joiner: '. '}))});
/* 000204 */ export var _default_section_commands_by_level_with_nomerge = __call__ (dict, null, _default_section_commands_by_level);
/* 000205 */ __setitem__ (_default_section_commands_by_level_with_nomerge, '$no-merge', true);
/* 000207 */ export var _default_section_numbering_by_level_with_nomerge = __call__ (dict, null, _default_section_numbering_by_level);
/* 000208 */ __setitem__ (_default_section_numbering_by_level_with_nomerge, '$no-merge', true);
/* 000211 */ export var FeatureHeadings =  __class__ ('FeatureHeadings', [Feature], {
/* 000211 */ 	__module__: __name__,
/* 000217 */ 	feature_name: 'headings',
/* 000218 */ 	feature_title: 'Headings: sections, paragraphs',
/* 000222 */ 	feature_optional_dependencies: ['refs', 'numbering'],
/* 000222 */ 	RenderManager: __class__ ('RenderManager', [Feature.RenderManager], {
/* 000222 */ 		__module__: __name__,
/* 000225 */ 		get initialize () {return __get__ (this, function (self, numbering_section_depth, section_numbering_by_level, counter_formatter) {
/* 000225 */ 			if (typeof numbering_section_depth == 'undefined' || (numbering_section_depth != null && numbering_section_depth.hasOwnProperty ("__kwargtrans__"))) {;
/* 000225 */ 				var numbering_section_depth = null;
/* 000225 */ 			};
/* 000225 */ 			if (typeof section_numbering_by_level == 'undefined' || (section_numbering_by_level != null && section_numbering_by_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000225 */ 				var section_numbering_by_level = null;
/* 000225 */ 			};
/* 000225 */ 			if (typeof counter_formatter == 'undefined' || (counter_formatter != null && counter_formatter.hasOwnProperty ("__kwargtrans__"))) {;
/* 000225 */ 				var counter_formatter = null;
/* 000225 */ 			};
/* 000225 */ 			if (arguments.length) {
/* 000225 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000225 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000225 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000225 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000225 */ 						switch (__attrib0__) {
/* 000225 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000225 */ 							case 'numbering_section_depth': var numbering_section_depth = __allkwargs0__ [__attrib0__]; break;
/* 000225 */ 							case 'section_numbering_by_level': var section_numbering_by_level = __allkwargs0__ [__attrib0__]; break;
/* 000225 */ 							case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000225 */ 						}
/* 000225 */ 					}
/* 000225 */ 				}
/* 000225 */ 			}
/* 000225 */ 			else {
/* 000225 */ 			}
/* 000231 */ 			self.target_id_counters = dict ({});
/* 000232 */ 			self.target_ids = dict ({});
/* 000234 */ 			if (__t__ (numbering_section_depth !== null)) {
/* 000235 */ 				self.numbering_section_depth = numbering_section_depth;
/* 000235 */ 			}
/* 000236 */ 			else {
/* 000237 */ 				self.numbering_section_depth = self.feature.numbering_section_depth;
/* 000237 */ 			}
/* 000239 */ 			if (__t__ (section_numbering_by_level !== null)) {
/* 000240 */ 				self.section_numbering_by_level = (function () {
/* 000240 */ 					var __accu0__ = [];
/* 000242 */ 					var __iterable0__ = (function () {
/* 000242 */ 						var __accu1__ = __call__ (dict, null, section_numbering_by_level);
/* 000242 */ 						return __call__ (__accu1__.py_items, __accu1__);
/* 000242 */ 					}) ();
/* 000242 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000242 */ 						var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000242 */ 						var level = __left0__ [0];
/* 000242 */ 						var x = __left0__ [1];
/* 000242 */ 						(function () {
/* 000242 */ 							var __accu1__ = __accu0__;
/* 000241 */ 							return __call__ (__accu1__.append, __accu1__, [level, (function () {
/* 000241 */ 								var __accu2__ = self.feature;
/* 000241 */ 								return __call__ (__accu2__._make_section_numbering_info, __accu2__, x);
/* 000241 */ 							}) ()]);
/* 000241 */ 						}) ();
/* 000241 */ 					}
/* 000241 */ 					return dict (__accu0__);
/* 000241 */ 				}) ();
/* 000241 */ 			}
/* 000242 */ 			else {
/* 000245 */ 				self.section_numbering_by_level = self.feature.section_numbering_by_level;
/* 000245 */ 			}
/* 000247 */ 			// pass;
/* 000259 */ 			if (__t__ (counter_formatter !== null)) {
/* 000260 */ 				self.counter_formatter = __call__ (build_counter_formatter, null, counter_formatter, _default_counter_formatter_spec, __kwargtrans__ ({counter_formatter_id: 'section'}));
/* 000260 */ 			}
/* 000264 */ 			else {
/* 000266 */ 				self.counter_formatter = self.feature.counter_formatter;
/* 000266 */ 			}
/* 000268 */ 			self.section_counter_ifaces = dict ({});
/* 000270 */ 			if (__t__ (self.numbering_section_depth !== false)) {
/* 000272 */ 				var last_counter_name = null;
/* 000273 */ 				var base_counter_formatter_spec = (function () {
/* 000273 */ 					var __accu0__ = self.counter_formatter;
/* 000273 */ 					return __call__ (__accu0__.asdict, __accu0__);
/* 000273 */ 				}) ();
/* 000275 */ 				var __iterable0__ = __call__ (sorted, null, (function () {
/* 000275 */ 					var __accu0__ = self.section_numbering_by_level;
/* 000275 */ 					return __call__ (__accu0__.py_keys, __accu0__);
/* 000275 */ 				}) (), __kwargtrans__ ({key: int}));
/* 000275 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000275 */ 					var j = __getitem__ (__iterable0__, __index0__);
/* 000276 */ 					if (__t__ (__t__ (self.numbering_section_depth !== true) && __gt__ (j, self.numbering_section_depth))) {
/* 000276 */ 						break;
/* 000276 */ 					}
/* 000279 */ 					var counter_name = __getitem__ (self.feature.section_commands_by_level, j).cmdname;
/* 000280 */ 					var numbering_info = __getitem__ (self.section_numbering_by_level, j);
/* 000281 */ 					if (__t__ (!__t__ ((numbering_info)))) {
/* 000281 */ 						continue;
/* 000281 */ 					}
/* 000288 */ 					var always_number_within = null;
/* 000289 */ 					var number_within_reset_at = numbering_info.number_within_reset_at;
/* 000290 */ 					if (__t__ (number_within_reset_at)) {
/* 000291 */ 						if (__t__ (number_within_reset_at === true)) {
/* 000292 */ 							if (__t__ (last_counter_name !== null)) {
/* 000293 */ 								var number_within_reset_at = last_counter_name;
/* 000293 */ 							}
/* 000294 */ 							else {
/* 000295 */ 								var number_within_reset_at = null;
/* 000295 */ 							}
/* 000295 */ 						}
/* 000296 */ 						var always_number_within = dict ({'reset_at': number_within_reset_at, 'numprefix': numbering_info.numprefix});
/* 000296 */ 					}
/* 000302 */ 					var sec_counter_formatter = __call__ (build_counter_formatter, null, numbering_info.counter_formatter, base_counter_formatter_spec, __kwargtrans__ ({counter_formatter_id: self.counter_formatter.counter_formatter_id}));
/* 000310 */ 					var counter_iface = (function () {
/* 000310 */ 						var __accu0__ = numbering;
/* 000310 */ 						return __call__ (__accu0__.get_document_render_counter, __accu0__, self.render_context, counter_name, sec_counter_formatter, __kwargtrans__ ({always_number_within: always_number_within}));
/* 000310 */ 					}) ();
/* 000314 */ 					__setitem__ (self.section_counter_ifaces, j, counter_iface);
/* 000316 */ 					var last_counter_name = counter_name;
/* 000316 */ 				}
/* 000318 */ 				// pass;
/* 000318 */ 			}
/* 000318 */ 		});},
/* 000326 */ 		get new_heading () {return __get__ (this, function (self, node, heading_level, labels, heading_content_nodelist, skip_numbering, target_id) {
/* 000326 */ 			if (typeof skip_numbering == 'undefined' || (skip_numbering != null && skip_numbering.hasOwnProperty ("__kwargtrans__"))) {;
/* 000326 */ 				var skip_numbering = false;
/* 000326 */ 			};
/* 000326 */ 			if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000326 */ 				var target_id = null;
/* 000326 */ 			};
/* 000326 */ 			if (arguments.length) {
/* 000326 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000326 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000326 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000326 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000326 */ 						switch (__attrib0__) {
/* 000326 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000326 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000326 */ 							case 'heading_level': var heading_level = __allkwargs0__ [__attrib0__]; break;
/* 000326 */ 							case 'labels': var labels = __allkwargs0__ [__attrib0__]; break;
/* 000326 */ 							case 'heading_content_nodelist': var heading_content_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000326 */ 							case 'skip_numbering': var skip_numbering = __allkwargs0__ [__attrib0__]; break;
/* 000326 */ 							case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000326 */ 						}
/* 000326 */ 					}
/* 000326 */ 				}
/* 000326 */ 			}
/* 000326 */ 			else {
/* 000326 */ 			}
/* 000331 */ 			if (__t__ (target_id === null)) {
/* 000332 */ 				if (__t__ (__call__ (hasattr, null, node, 'flm_heading_target_id'))) {
/* 000336 */ 					var target_id = node.flm_heading_target_id;
/* 000336 */ 				}
/* 000337 */ 				else if (__t__ (__call__ (len, null, node.flm_referenceable_infos))) {
/* 000338 */ 					var target_id = (function () {
/* 000338 */ 						var __accu0__ = __getitem__ (node.flm_referenceable_infos, 0);
/* 000338 */ 						return __call__ (__accu0__.get_target_id, __accu0__);
/* 000338 */ 					}) ();
/* 000338 */ 				}
/* 000338 */ 			}
/* 000340 */ 			if (__t__ (target_id === null)) {
/* 000341 */ 				var target_id = (function () {
/* 000341 */ 					var __accu0__ = self;
/* 000341 */ 					return __call__ (__accu0__.get_default_target_id, __accu0__, labels, heading_content_nodelist, __kwargtrans__ ({node: node}));
/* 000341 */ 				}) ();
/* 000341 */ 			}
/* 000347 */ 			var refs_mgr = null;
/* 000348 */ 			if (__t__ (__t__ ((function () {
/* 000348 */ 				var __accu0__ = self.render_context;
/* 000348 */ 				return __call__ (__accu0__.supports_feature, __accu0__, 'refs');
/* 000348 */ 			}) ()) && self.render_context.is_first_pass)) {
/* 000350 */ 				var refs_mgr = (function () {
/* 000350 */ 					var __accu0__ = self.render_context;
/* 000350 */ 					return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000350 */ 				}) ();
/* 000350 */ 			}
/* 000353 */ 			var sec_num_info = null;
/* 000354 */ 			if (__t__ (__t__ (!__t__ ((skip_numbering))) && __in__ (heading_level, self.section_counter_ifaces))) {
/* 000355 */ 				var counter_iface = __getitem__ (self.section_counter_ifaces, heading_level);
/* 000356 */ 				var numbering_info = __getitem__ (self.section_numbering_by_level, heading_level);
/* 000358 */ 				var sec_num_info = (function () {
/* 000358 */ 					var __accu0__ = counter_iface;
/* 000358 */ 					return __call__ (__accu0__.register_item, __accu0__);
/* 000358 */ 				}) ();
/* 000360 */ 				var heading_joiner = numbering_info.heading_joiner;
/* 000362 */ 				var heading_number_fragment = (function () {
/* 000362 */ 					var __accu0__ = self.render_context.doc.environment;
/* 000362 */ 					return __call__ (__accu0__.make_fragment, __accu0__, __add__ (__getitem__ (sec_num_info, 'formatted_value'), heading_joiner), __kwargtrans__ ({is_block_level: false, what: 'section-{} counter'.format (heading_level)}));
/* 000362 */ 				}) ();
/* 000368 */ 				var full_heading_nodelist = __add__ (__add__ ([], heading_number_fragment.nodes.nodelist), heading_content_nodelist.nodelist);
/* 000374 */ 				if (__t__ (refs_mgr !== null)) {
/* 000375 */ 					var __iterable0__ = labels;
/* 000375 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000375 */ 						var label_info = __getitem__ (__iterable0__, __index0__);
/* 000376 */ 						var __left0__ = label_info;
/* 000376 */ 						var ref_type = __left0__ [0];
/* 000376 */ 						var ref_label = __left0__ [1];
/* 000377 */ 						var counter_formatter_id = self.counter_formatter.counter_formatter_id;
/* 000378 */ 						(function () {
/* 000378 */ 							var __accu0__ = refs_mgr;
/* 000381 */ 							return __call__ (__accu0__.register_reference, __accu0__, ref_type, ref_label, __kwargtrans__ ({node: node, formatted_ref_flm_text: (function () {
/* 000381 */ 								var __accu1__ = self.counter_formatter;
/* 000382 */ 								return __call__ (__accu1__.format_flm, __accu1__, (function () {
/* 000382 */ 									var __accu2__ = __getitem__ (sec_num_info, 'value');
/* 000382 */ 									return __call__ (__accu2__.get_num, __accu2__);
/* 000383 */ 								}) (), __kwargtrans__ ({subnums: (function () {
/* 000383 */ 									var __accu2__ = __getitem__ (sec_num_info, 'value');
/* 000383 */ 									return __call__ (__accu2__.get_subnums, __accu2__);
/* 000383 */ 								}) (), numprefix: __getitem__ (sec_num_info, 'numprefix'), with_prefix: true}));
/* 000383 */ 							}) (), target_href: '#{}'.format (target_id), counter_value: __getitem__ (sec_num_info, 'value'), counter_numprefix: __getitem__ (sec_num_info, 'numprefix'), counter_formatter_id: counter_formatter_id}));
/* 000383 */ 						}) ();
/* 000383 */ 					}
/* 000383 */ 				}
/* 000383 */ 			}
/* 000391 */ 			else {
/* 000393 */ 				var full_heading_nodelist = heading_content_nodelist;
/* 000395 */ 				if (__t__ (refs_mgr !== null)) {
/* 000396 */ 					var __iterable0__ = node.flm_referenceable_infos;
/* 000396 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000396 */ 						var flm_referenceable_info = __getitem__ (__iterable0__, __index0__);
/* 000397 */ 						(function () {
/* 000397 */ 							var __accu0__ = refs_mgr;
/* 000397 */ 							return __call__ (__accu0__.register_reference_referenceable, __accu0__, __kwargtrans__ ({node: node, referenceable_info: flm_referenceable_info}));
/* 000397 */ 						}) ();
/* 000397 */ 					}
/* 000397 */ 				}
/* 000397 */ 			}
/* 000402 */ 			return dict ({'target_id': target_id, 'content_nodelist': full_heading_nodelist, 'sec_num_info': sec_num_info});
/* 000402 */ 		});},
/* 000408 */ 		get get_default_target_id () {return __get__ (this, function (self, heading_labels, heading_content_nodelist) {
/* 000408 */ 			if (arguments.length) {
/* 000408 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000408 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000408 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000408 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000408 */ 						switch (__attrib0__) {
/* 000408 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000408 */ 							case 'heading_labels': var heading_labels = __allkwargs0__ [__attrib0__]; break;
/* 000408 */ 							case 'heading_content_nodelist': var heading_content_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000408 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000408 */ 						}
/* 000408 */ 					}
/* 000408 */ 				}
/* 000408 */ 			}
/* 000408 */ 			else {
/* 000408 */ 			}
/* 000410 */ 			var node_id = (function () {
/* 000410 */ 				var __accu0__ = self;
/* 000410 */ 				return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000410 */ 			}) ();
/* 000412 */ 			if (__t__ (__in__ (node_id, self.target_ids))) {
/* 000413 */ 				return __getitem__ (self.target_ids, node_id);
/* 000413 */ 			}
/* 000415 */ 			var tgtid = (function () {
/* 000415 */ 				var __accu0__ = self;
/* 000415 */ 				return __call__ (__accu0__._generate_default_target_id, __accu0__, heading_labels, heading_content_nodelist);
/* 000415 */ 			}) ();
/* 000416 */ 			__setitem__ (self.target_ids, node_id, tgtid);
/* 000417 */ 			return tgtid;
/* 000417 */ 		});},
/* 000419 */ 		get _generate_default_target_id () {return __get__ (this, function (self, heading_labels, heading_content_nodelist) {
/* 000419 */ 			if (arguments.length) {
/* 000419 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000419 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000419 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000419 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000419 */ 						switch (__attrib0__) {
/* 000419 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000419 */ 							case 'heading_labels': var heading_labels = __allkwargs0__ [__attrib0__]; break;
/* 000419 */ 							case 'heading_content_nodelist': var heading_content_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000419 */ 						}
/* 000419 */ 					}
/* 000419 */ 				}
/* 000419 */ 			}
/* 000419 */ 			else {
/* 000419 */ 			}
/* 000422 */ 			var tgtid = (function () {
/* 000422 */ 				var __accu0__ = (function () {
/* 000422 */ 					var __accu1__ = heading_content_nodelist;
/* 000422 */ 					return __call__ (__accu1__.latex_verbatim, __accu1__);
/* 000422 */ 				}) ();
/* 000422 */ 				return __call__ (__accu0__.strip, __accu0__);
/* 000422 */ 			}) ();
/* 000423 */ 			var tgtid = (function () {
/* 000423 */ 				var __accu0__ = re;
/* 000423 */ 				return __call__ (__accu0__.sub, __accu0__, '[^A-Za-z0-9_-]+', '-', tgtid);
/* 000423 */ 			}) ();
/* 000424 */ 			var tgtid = 'sec--{}'.format (tgtid);
/* 000425 */ 			var tgtid = __getslice__ (tgtid, 0, 32, 1);
/* 000426 */ 			if (__t__ (__in__ (tgtid, self.target_id_counters))) {
/* 000427 */ 				__setitem__ (self.target_id_counters, tgtid, __call__ (__iadd__, null, __getitem__ (self.target_id_counters, tgtid), 1));
/* 000428 */ 				return '{}-{}'.format (tgtid, __getitem__ (self.target_id_counters, tgtid));
/* 000428 */ 			}
/* 000430 */ 			__setitem__ (self.target_id_counters, tgtid, 1);
/* 000431 */ 			return tgtid;
/* 000431 */ 		});}
/* 000434 */ 	}),
/* 000434 */ 	SectionCommandInfo: __class__ ('SectionCommandInfo', [object], {
/* 000434 */ 		__module__: __name__,
/* 000435 */ 		get __init__ () {return __get__ (this, function (self, cmdname, inline) {
/* 000435 */ 			if (typeof inline == 'undefined' || (inline != null && inline.hasOwnProperty ("__kwargtrans__"))) {;
/* 000435 */ 				var inline = false;
/* 000435 */ 			};
/* 000435 */ 			if (arguments.length) {
/* 000435 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000435 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000435 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000435 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000435 */ 						switch (__attrib0__) {
/* 000435 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000435 */ 							case 'cmdname': var cmdname = __allkwargs0__ [__attrib0__]; break;
/* 000435 */ 							case 'inline': var inline = __allkwargs0__ [__attrib0__]; break;
/* 000435 */ 						}
/* 000435 */ 					}
/* 000435 */ 				}
/* 000435 */ 			}
/* 000435 */ 			else {
/* 000435 */ 			}
/* 000436 */ 			__call__ (__call__ (__super__, null, FeatureHeadings.SectionCommandInfo, '__init__'), null, self);
/* 000437 */ 			self.cmdname = cmdname;
/* 000438 */ 			self.inline = inline;
/* 000438 */ 		});},
/* 000440 */ 		get __repr__ () {return __get__ (this, function (self) {
/* 000440 */ 			if (arguments.length) {
/* 000440 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000440 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000440 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000440 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000440 */ 						switch (__attrib0__) {
/* 000440 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000440 */ 						}
/* 000440 */ 					}
/* 000440 */ 				}
/* 000440 */ 			}
/* 000440 */ 			else {
/* 000440 */ 			}
/* 000443 */ 			return '{}(cmdname={}, inline={})'.format (self.__class__.__name__, __call__ (repr, null, self.cmdname), __call__ (repr, null, self.inline));
/* 000443 */ 		});}
/* 000446 */ 	}),
/* 000446 */ 	SectionNumberingInfo: __class__ ('SectionNumberingInfo', [object], {
/* 000446 */ 		__module__: __name__,
/* 000456 */ 		get __init__ () {return __get__ (this, function (self, numprefix, heading_joiner, number_within_reset_at, counter_formatter) {
/* 000456 */ 			if (typeof numprefix == 'undefined' || (numprefix != null && numprefix.hasOwnProperty ("__kwargtrans__"))) {;
/* 000456 */ 				var numprefix = null;
/* 000456 */ 			};
/* 000456 */ 			if (typeof heading_joiner == 'undefined' || (heading_joiner != null && heading_joiner.hasOwnProperty ("__kwargtrans__"))) {;
/* 000456 */ 				var heading_joiner = ' ';
/* 000456 */ 			};
/* 000456 */ 			if (typeof number_within_reset_at == 'undefined' || (number_within_reset_at != null && number_within_reset_at.hasOwnProperty ("__kwargtrans__"))) {;
/* 000456 */ 				var number_within_reset_at = true;
/* 000456 */ 			};
/* 000456 */ 			if (typeof counter_formatter == 'undefined' || (counter_formatter != null && counter_formatter.hasOwnProperty ("__kwargtrans__"))) {;
/* 000456 */ 				var counter_formatter = null;
/* 000456 */ 			};
/* 000456 */ 			if (arguments.length) {
/* 000456 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000456 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000456 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000456 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000456 */ 						switch (__attrib0__) {
/* 000456 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000456 */ 							case 'numprefix': var numprefix = __allkwargs0__ [__attrib0__]; break;
/* 000456 */ 							case 'heading_joiner': var heading_joiner = __allkwargs0__ [__attrib0__]; break;
/* 000456 */ 							case 'number_within_reset_at': var number_within_reset_at = __allkwargs0__ [__attrib0__]; break;
/* 000456 */ 							case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000456 */ 						}
/* 000456 */ 					}
/* 000456 */ 				}
/* 000456 */ 			}
/* 000456 */ 			else {
/* 000456 */ 			}
/* 000461 */ 			__call__ (__call__ (__super__, null, FeatureHeadings.SectionNumberingInfo, '__init__'), null, self);
/* 000462 */ 			self.numprefix = numprefix;
/* 000463 */ 			self.heading_joiner = heading_joiner;
/* 000464 */ 			self.number_within_reset_at = number_within_reset_at;
/* 000465 */ 			self.counter_formatter = counter_formatter;
/* 000465 */ 		});},
/* 000467 */ 		get __repr__ () {return __get__ (this, function (self) {
/* 000467 */ 			if (arguments.length) {
/* 000467 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000467 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000467 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000467 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000467 */ 						switch (__attrib0__) {
/* 000467 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000467 */ 						}
/* 000467 */ 					}
/* 000467 */ 				}
/* 000467 */ 			}
/* 000467 */ 			else {
/* 000467 */ 			}
/* 000473 */ 			return '{}(numprefix={}, heading_joiner={}, number_within_reset_at={}counter_formatter={})'.format (self.__class__.__name__, __call__ (repr, null, self.numprefix), __call__ (repr, null, self.heading_joiner), __call__ (repr, null, self.number_within_reset_at), __call__ (repr, null, self.counter_formatter));
/* 000473 */ 		});}
/* 000473 */ 	}),
/* 000477 */ 	feature_default_config: dict ({'counter_formatter': _default_counter_formatter_spec, 'section_commands_by_level': _default_section_commands_by_level_with_nomerge, 'section_numbering_by_level': _default_section_numbering_by_level_with_nomerge}),
/* 000483 */ 	get __init__ () {return __get__ (this, function (self, section_commands_by_level, numbering_section_depth, counter_formatter, section_numbering_by_level) {
/* 000483 */ 		if (typeof section_commands_by_level == 'undefined' || (section_commands_by_level != null && section_commands_by_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000483 */ 			var section_commands_by_level = null;
/* 000483 */ 		};
/* 000483 */ 		if (typeof numbering_section_depth == 'undefined' || (numbering_section_depth != null && numbering_section_depth.hasOwnProperty ("__kwargtrans__"))) {;
/* 000483 */ 			var numbering_section_depth = false;
/* 000483 */ 		};
/* 000483 */ 		if (typeof counter_formatter == 'undefined' || (counter_formatter != null && counter_formatter.hasOwnProperty ("__kwargtrans__"))) {;
/* 000483 */ 			var counter_formatter = null;
/* 000483 */ 		};
/* 000483 */ 		if (typeof section_numbering_by_level == 'undefined' || (section_numbering_by_level != null && section_numbering_by_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000483 */ 			var section_numbering_by_level = null;
/* 000483 */ 		};
/* 000483 */ 		if (arguments.length) {
/* 000483 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000483 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000483 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000483 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000483 */ 					switch (__attrib0__) {
/* 000483 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000483 */ 						case 'section_commands_by_level': var section_commands_by_level = __allkwargs0__ [__attrib0__]; break;
/* 000483 */ 						case 'numbering_section_depth': var numbering_section_depth = __allkwargs0__ [__attrib0__]; break;
/* 000483 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000483 */ 						case 'section_numbering_by_level': var section_numbering_by_level = __allkwargs0__ [__attrib0__]; break;
/* 000483 */ 					}
/* 000483 */ 				}
/* 000483 */ 			}
/* 000483 */ 		}
/* 000483 */ 		else {
/* 000483 */ 		}
/* 000490 */ 		__call__ (__call__ (__super__, null, FeatureHeadings, '__init__'), null, self);
/* 000492 */ 		if (__t__ (section_commands_by_level === null)) {
/* 000493 */ 			var section_commands_by_level = _default_section_commands_by_level;
/* 000493 */ 		}
/* 000494 */ 		if (__t__ (section_numbering_by_level === null)) {
/* 000495 */ 			var section_numbering_by_level = _default_section_numbering_by_level;
/* 000495 */ 		}
/* 000496 */ 		if (__t__ (counter_formatter === null)) {
/* 000497 */ 			var counter_formatter = _default_counter_formatter_spec;
/* 000497 */ 		}
/* 000498 */ 		var counter_formatter = __call__ (build_counter_formatter, null, counter_formatter, _default_counter_formatter_spec, __kwargtrans__ ({counter_formatter_id: 'section'}));
/* 000503 */ 		self.counter_formatter = counter_formatter;
/* 000507 */ 		self.section_commands_by_level = (function () {
/* 000507 */ 			var __accu0__ = [];
/* 000509 */ 			var __iterable0__ = (function () {
/* 000509 */ 				var __accu1__ = __call__ (dict, null, section_commands_by_level);
/* 000509 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000509 */ 			}) ();
/* 000509 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000509 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000509 */ 				var level = __left0__ [0];
/* 000509 */ 				var x = __left0__ [1];
/* 000509 */ 				if (__t__ (x !== null)) {
/* 000510 */ 					(function () {
/* 000510 */ 						var __accu1__ = __accu0__;
/* 000508 */ 						return __call__ (__accu1__.append, __accu1__, [level, (function () {
/* 000508 */ 							var __accu2__ = self;
/* 000508 */ 							return __call__ (__accu2__._make_section_command_info, __accu2__, x);
/* 000508 */ 						}) ()]);
/* 000508 */ 					}) ();
/* 000508 */ 				}
/* 000508 */ 			}
/* 000508 */ 			return dict (__accu0__);
/* 000508 */ 		}) ();
/* 000512 */ 		self.section_numbering_by_level = (function () {
/* 000512 */ 			var __accu0__ = [];
/* 000514 */ 			var __iterable0__ = (function () {
/* 000514 */ 				var __accu1__ = __call__ (dict, null, section_numbering_by_level);
/* 000514 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000514 */ 			}) ();
/* 000514 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000514 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000514 */ 				var level = __left0__ [0];
/* 000514 */ 				var x = __left0__ [1];
/* 000514 */ 				if (__t__ (x !== null)) {
/* 000515 */ 					(function () {
/* 000515 */ 						var __accu1__ = __accu0__;
/* 000513 */ 						return __call__ (__accu1__.append, __accu1__, [level, (function () {
/* 000513 */ 							var __accu2__ = self;
/* 000513 */ 							return __call__ (__accu2__._make_section_numbering_info, __accu2__, x);
/* 000513 */ 						}) ()]);
/* 000513 */ 					}) ();
/* 000513 */ 				}
/* 000513 */ 			}
/* 000513 */ 			return dict (__accu0__);
/* 000513 */ 		}) ();
/* 000520 */ 		self.numbering_section_depth = numbering_section_depth;
/* 000521 */ 		if (__t__ (self.numbering_section_depth === null)) {
/* 000522 */ 			self.numbering_section_depth = false;
/* 000522 */ 		}
/* 000522 */ 	});},
/* 000525 */ 	get _make_section_command_info () {return __get__ (this, function (self, x) {
/* 000525 */ 		if (arguments.length) {
/* 000525 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000525 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000525 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000525 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000525 */ 					switch (__attrib0__) {
/* 000525 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000525 */ 						case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000525 */ 					}
/* 000525 */ 				}
/* 000525 */ 			}
/* 000525 */ 		}
/* 000525 */ 		else {
/* 000525 */ 		}
/* 000531 */ 		if (__t__ (__call__ (isinstance, null, x, self.SectionCommandInfo))) {
/* 000532 */ 			return x;
/* 000532 */ 		}
/* 000533 */ 		if (__t__ (__call__ (isinstance, null, x, str))) {
/* 000534 */ 			return (function () {
/* 000534 */ 				var __accu0__ = self;
/* 000534 */ 				return __call__ (__accu0__.SectionCommandInfo, __accu0__, x);
/* 000534 */ 			}) ();
/* 000534 */ 		}
/* 000535 */ 		return (function () {
/* 000535 */ 			var __accu0__ = self;
/* 000535 */ 			return __call__ (__accu0__.SectionCommandInfo, __accu0__, __kwargtrans__ (x));
/* 000535 */ 		}) ();
/* 000535 */ 	});},
/* 000537 */ 	get _make_section_numbering_info () {return __get__ (this, function (self, x) {
/* 000537 */ 		if (arguments.length) {
/* 000537 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000537 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000537 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000537 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000537 */ 					switch (__attrib0__) {
/* 000537 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000537 */ 						case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000537 */ 					}
/* 000537 */ 				}
/* 000537 */ 			}
/* 000537 */ 		}
/* 000537 */ 		else {
/* 000537 */ 		}
/* 000538 */ 		if (__t__ (__call__ (isinstance, null, x, self.SectionNumberingInfo))) {
/* 000539 */ 			return x;
/* 000539 */ 		}
/* 000540 */ 		return (function () {
/* 000540 */ 			var __accu0__ = self;
/* 000540 */ 			return __call__ (__accu0__.SectionNumberingInfo, __accu0__, __kwargtrans__ (x));
/* 000540 */ 		}) ();
/* 000540 */ 	});},
/* 000542 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000542 */ 		if (arguments.length) {
/* 000542 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000542 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000542 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000542 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000542 */ 					switch (__attrib0__) {
/* 000542 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000542 */ 					}
/* 000542 */ 				}
/* 000542 */ 			}
/* 000542 */ 		}
/* 000542 */ 		else {
/* 000542 */ 		}
/* 000543 */ 		return __call__ (dict, null, __kwargtrans__ ({macros: (function () {
/* 000543 */ 			var __accu0__ = [];
/* 000550 */ 			var __iterable0__ = (function () {
/* 000550 */ 				var __accu1__ = self.section_commands_by_level;
/* 000550 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000550 */ 			}) ();
/* 000550 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000550 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000550 */ 				var level = __left0__ [0];
/* 000550 */ 				var sectioncmdspec = __left0__ [1];
/* 000550 */ 				(function () {
/* 000550 */ 					var __accu1__ = __accu0__;
/* 000545 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (HeadingMacro, null, __kwargtrans__ ({macroname: sectioncmdspec.cmdname, heading_level: level, inline_heading: sectioncmdspec.inline})));
/* 000545 */ 				}) ();
/* 000545 */ 			}
/* 000545 */ 			return __accu0__;
/* 000545 */ 		}) ()}));
/* 000545 */ 	});}
/* 000545 */ });
/* 000558 */ export var FeatureClass = FeatureHeadings;
/* 000006 */ 
//# sourceMappingURL=flm.feature.headings.map