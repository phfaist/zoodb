/* 000001 */ // Transcrypt'ed from Python, 2026-06-30 21:51:24
/* 000014 */ var logging = {};
/* 000014 */ var re = {};
/* 000014 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000034 */ import * as numbering from './flm.feature.numbering.js';
/* 000032 */ import * as refs from './flm.feature.refs.js';
/* 000030 */ import {Feature} from './flm.feature._base.js';
/* 000028 */ import {Any, Mapping, TypeCounterFormatterInput, TypeCounterFormatterSpecDict, TypeFormatNumSpec} from './flm._typing_helpers.js';
/* 000024 */ import {CounterFormatter, build_counter_formatter} from './flm.counter.js';
/* 000022 */ import * as flmspecinfo from './flm.flmspecinfo.js';
/* 000018 */ import {LatexArgumentSpec, ParsedArgumentsInfo} from './pylatexenc.latexnodes.js';
/* 000015 */ import * as __module_logging__ from './logging.js';
/* 000015 */ __nest__ (logging, '', __module_logging__);
/* 000014 */ import * as __module_re__ from './re.js';
/* 000014 */ __nest__ (re, '', __module_re__);
/* 000014 */ export {CounterFormatter, ParsedArgumentsInfo, build_counter_formatter, LatexArgumentSpec, Feature, TypeFormatNumSpec, refs, TypeCounterFormatterSpecDict, TypeCounterFormatterInput, Mapping, flmspecinfo, Any, numbering};
/* 000001 */ var __name__ = 'flm.feature.headings';
/* 000016 */ export var logger = (function () {
/* 000016 */ 	var __accu0__ = logging;
/* 000016 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000016 */ }) ();
/* 000040 */ export var HeadingMacro =  __class__ ('HeadingMacro', [flmspecinfo.FLMMacroSpecBase], {
/* 000040 */ 	__module__: __name__,
/* 000042 */ 	is_block_level: true,
/* 000044 */ 	allowed_in_standalone_mode: true,
/* 000048 */ 	_flm_main_text_argument: 'text',
/* 000050 */ 	allowed_ref_label_prefixes: tuple (['sec', 'topic']),
/* 000052 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000052 */ 		var heading_level = 1;
/* 000052 */ 		var inline_heading = false;
/* 000052 */ 		var unregistered_heading = false;
/* 000052 */ 		var target_id = null;
/* 000052 */ 		if (arguments.length) {
/* 000052 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000052 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000052 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000052 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000052 */ 					switch (__attrib0__) {
/* 000052 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000052 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000052 */ 						case 'heading_level': var heading_level = __allkwargs0__ [__attrib0__]; break;
/* 000052 */ 						case 'inline_heading': var inline_heading = __allkwargs0__ [__attrib0__]; break;
/* 000052 */ 						case 'unregistered_heading': var unregistered_heading = __allkwargs0__ [__attrib0__]; break;
/* 000052 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000052 */ 					}
/* 000052 */ 				}
/* 000052 */ 			}
/* 000052 */ 		}
/* 000052 */ 		else {
/* 000052 */ 		}
/* 000074 */ 		__call__ (__call__ (__super__, null, HeadingMacro, '__init__'), null, self, macroname, __kwargtrans__ ({arguments_spec_list: [__call__ (LatexArgumentSpec, null, '*', __kwargtrans__ ({argname: 'star'})), flmspecinfo.text_arg, flmspecinfo.label_arg]}));
/* 000079 */ 		self.heading_level = heading_level;
/* 000080 */ 		self.inline_heading = inline_heading;
/* 000081 */ 		self.unregistered_heading = unregistered_heading;
/* 000082 */ 		self.target_id = target_id;
/* 000084 */ 		self.is_block_heading = self.inline_heading;
/* 000084 */ 	});},
/* 000086 */ 	_fields: tuple (['macroname', 'heading_level', 'inline_heading']),
/* 000088 */ 	get get_flm_doc () {return __get__ (this, function (self) {
/* 000088 */ 		if (arguments.length) {
/* 000088 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000088 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000088 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000088 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000088 */ 					switch (__attrib0__) {
/* 000088 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000088 */ 					}
/* 000088 */ 				}
/* 000088 */ 			}
/* 000088 */ 		}
/* 000088 */ 		else {
/* 000088 */ 		}
/* 000089 */ 		return 'Create a{} heading at level {}'.format ((__t__ (self.inline_heading) ? 'n inline' : ''), self.heading_level);
/* 000089 */ 	});},
/* 000094 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000094 */ 		if (arguments.length) {
/* 000094 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000094 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000094 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000094 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000094 */ 					switch (__attrib0__) {
/* 000094 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000094 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000094 */ 					}
/* 000094 */ 				}
/* 000094 */ 			}
/* 000094 */ 		}
/* 000094 */ 		else {
/* 000094 */ 		}
/* 000096 */ 		var node_args = (function () {
/* 000096 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000096 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['star', 'text', 'label']));
/* 000096 */ 		}) ();
/* 000100 */ 		node.flmarg_skip_numbering = (function () {
/* 000100 */ 			var __accu0__ = __getitem__ (node_args, 'star');
/* 000100 */ 			return __call__ (__accu0__.was_provided, __accu0__);
/* 000100 */ 		}) ();
/* 000102 */ 		node.flmarg_heading_content_nodelist = (function () {
/* 000102 */ 			var __accu0__ = __getitem__ (node_args, 'text');
/* 000102 */ 			return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000102 */ 		}) ();
/* 000104 */ 		node.flmarg_labels = (function () {
/* 000104 */ 			var __accu0__ = flmspecinfo;
/* 000104 */ 			return __call__ (__accu0__.helper_collect_labels, __accu0__, __getitem__ (node_args, 'label'), self.allowed_ref_label_prefixes);
/* 000104 */ 		}) ();
/* 000109 */ 		var heading_flm_text = (function () {
/* 000109 */ 			var __accu0__ = node.flmarg_heading_content_nodelist;
/* 000109 */ 			return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000109 */ 		}) ();
/* 000112 */ 		node.flm_referenceable_infos = [(function () {
/* 000112 */ 			var __accu0__ = refs;
/* 000112 */ 			return __call__ (__accu0__.ReferenceableInfo, __accu0__, __kwargtrans__ ({kind: 'heading', formatted_ref_flm_text: heading_flm_text, labels: node.flmarg_labels}));
/* 000112 */ 		}) ()];
/* 000112 */ 	});},
/* 000120 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000120 */ 		if (arguments.length) {
/* 000120 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000120 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000120 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000120 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000120 */ 					switch (__attrib0__) {
/* 000120 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000120 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000120 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000120 */ 					}
/* 000120 */ 				}
/* 000120 */ 			}
/* 000120 */ 		}
/* 000120 */ 		else {
/* 000120 */ 		}
/* 000122 */ 		var headings_mgr = (function () {
/* 000122 */ 			var __accu0__ = render_context;
/* 000122 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'headings');
/* 000122 */ 		}) ();
/* 000124 */ 		if (__t__ (self.unregistered_heading)) {
/* 000125 */ 			var heading_info = dict ({'content_nodelist': node.flmarg_heading_content_nodelist, 'target_id': self.target_id});
/* 000125 */ 		}
/* 000128 */ 		else {
/* 000130 */ 			var heading_info = (function () {
/* 000130 */ 				var __accu0__ = headings_mgr;
/* 000130 */ 				return __call__ (__accu0__.new_heading, __accu0__, __kwargtrans__ ({node: node, heading_level: self.heading_level, labels: node.flmarg_labels, heading_content_nodelist: node.flmarg_heading_content_nodelist, skip_numbering: node.flmarg_skip_numbering, target_id: self.target_id}));
/* 000130 */ 			}) ();
/* 000130 */ 		}
/* 000139 */ 		return (function () {
/* 000139 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000139 */ 			return __call__ (__accu0__.render_heading, __accu0__, __getitem__ (heading_info, 'content_nodelist'), __kwargtrans__ ({render_context: render_context, heading_level: self.heading_level, inline_heading: self.inline_heading, target_id: __getitem__ (heading_info, 'target_id')}));
/* 000139 */ 		}) ();
/* 000139 */ 	});},
/* 000148 */ 	get recompose_pure_latex () {return __get__ (this, function (self, node, recomposer) {
/* 000148 */ 		if (arguments.length) {
/* 000148 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000148 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000148 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000148 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000148 */ 					switch (__attrib0__) {
/* 000148 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000148 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000148 */ 						case 'recomposer': var recomposer = __allkwargs0__ [__attrib0__]; break;
/* 000148 */ 					}
/* 000148 */ 				}
/* 000148 */ 			}
/* 000148 */ 		}
/* 000148 */ 		else {
/* 000148 */ 		}
/* 000150 */ 		var heading_macroname = node.macroname;
/* 000152 */ 		var recopt_headings = (function () {
/* 000152 */ 			var __accu0__ = recomposer;
/* 000152 */ 			return __call__ (__accu0__.get_options, __accu0__, 'headings');
/* 000152 */ 		}) ();
/* 000153 */ 		var heading_macroname_mapping = (function () {
/* 000153 */ 			var __accu0__ = recopt_headings;
/* 000153 */ 			return __call__ (__accu0__.py_get, __accu0__, 'macroname_mapping', null);
/* 000153 */ 		}) ();
/* 000154 */ 		if (__t__ (heading_macroname_mapping)) {
/* 000155 */ 			if (__t__ (__in__ (heading_macroname, heading_macroname_mapping))) {
/* 000156 */ 				var heading_macroname = __getitem__ (heading_macroname_mapping, heading_macroname);
/* 000156 */ 			}
/* 000156 */ 		}
/* 000158 */ 		var s = __add__ ('\\', heading_macroname);
/* 000166 */ 		if (__t__ (node.nodeargd !== null)) {
/* 000168 */ 			if (__t__ (__getitem__ (node.nodeargd.argnlist, 0) !== null)) {
/* 000169 */ 				var s = __call__ (__iadd__, null, s, (function () {
/* 000169 */ 					var __accu0__ = recomposer;
/* 000169 */ 					return __call__ (__accu0__.subrecompose, __accu0__, __getitem__ (node.nodeargd.argnlist, 0));
/* 000169 */ 				}) ());
/* 000169 */ 			}
/* 000171 */ 			if (__t__ (__getitem__ (node.nodeargd.argnlist, 1) !== null)) {
/* 000172 */ 				var s = __call__ (__iadd__, null, s, (function () {
/* 000172 */ 					var __accu0__ = recomposer;
/* 000172 */ 					return __call__ (__accu0__.subrecompose, __accu0__, __getitem__ (node.nodeargd.argnlist, 1));
/* 000172 */ 				}) ());
/* 000172 */ 			}
/* 000172 */ 		}
/* 000175 */ 		var __iterable0__ = node.flmarg_labels;
/* 000175 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000175 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000175 */ 			var ref_type = __left0__ [0];
/* 000175 */ 			var ref_label = __left0__ [1];
/* 000176 */ 			var safe_label_info = (function () {
/* 000176 */ 				var __accu0__ = recomposer;
/* 000176 */ 				return __call__ (__accu0__.make_safe_label, __accu0__, 'ref', ref_type, ref_label, node.latex_walker.resource_info);
/* 000176 */ 			}) ();
/* 000179 */ 			var s = __call__ (__iadd__, null, s, __add__ (__add__ ('\\label{', __getitem__ (safe_label_info, 'safe_label')), '}'));
/* 000179 */ 		}
/* 000181 */ 		return s;
/* 000181 */ 	});}
/* 000181 */ });
/* 000184 */ var _default_counter_formatter_spec = dict ({'format_num': dict ({'template': '${arabic}'}), 'prefix_display': dict ({'singular': '§\u2009', 'plural': '§\u2009'}), 'delimiters': tuple (['', '']), 'join_spec': 'compact'});
/* 000201 */ export var _default_section_commands_by_level = dict ({1: __call__ (dict, null, __kwargtrans__ ({cmdname: 'section'})), 2: __call__ (dict, null, __kwargtrans__ ({cmdname: 'subsection'})), 3: __call__ (dict, null, __kwargtrans__ ({cmdname: 'subsubsection'})), 4: __call__ (dict, null, __kwargtrans__ ({cmdname: 'paragraph', inline: true})), 5: __call__ (dict, null, __kwargtrans__ ({cmdname: 'subparagraph', inline: true})), 6: __call__ (dict, null, __kwargtrans__ ({cmdname: 'subsubparagraph', inline: true}))});
/* 000229 */ export var _default_section_numbering_by_level = dict ({1: __call__ (dict, null, __kwargtrans__ ({counter_formatter: dict ({'template': '${arabic}'}), numprefix: null, heading_joiner: '. '})), 2: __call__ (dict, null, __kwargtrans__ ({counter_formatter: dict ({'template': '${arabic}'}), numprefix: '${section}.', heading_joiner: '. '})), 3: __call__ (dict, null, __kwargtrans__ ({counter_formatter: dict ({'template': '${arabic}'}), numprefix: '${subsection}.', heading_joiner: '. '})), 4: __call__ (dict, null, __kwargtrans__ ({counter_formatter: dict ({'template': '${alph}'}), numprefix: null, heading_joiner: '. '})), 5: __call__ (dict, null, __kwargtrans__ ({counter_formatter: dict ({'template': '${alph}'}), numprefix: '${paragraph}.', heading_joiner: '. '})), 6: __call__ (dict, null, __kwargtrans__ ({counter_formatter: dict ({'template': '${alph}'}), numprefix: '${subparagraph}.', heading_joiner: '. '}))});
/* 000238 */ export var _default_section_commands_by_level_with_nomerge = __call__ (dict, null, _default_section_commands_by_level);
/* 000239 */ __setitem__ (_default_section_commands_by_level_with_nomerge, '$no-merge', true);
/* 000241 */ export var _default_section_numbering_by_level_with_nomerge = __call__ (dict, null, _default_section_numbering_by_level);
/* 000242 */ __setitem__ (_default_section_numbering_by_level_with_nomerge, '$no-merge', true);
/* 000264 */ export var FeatureHeadings =  __class__ ('FeatureHeadings', [Feature], {
/* 000264 */ 	__module__: __name__,
/* 000270 */ 	feature_name: 'headings',
/* 000271 */ 	feature_title: 'Headings: sections, paragraphs',
/* 000275 */ 	feature_optional_dependencies: ['refs', 'numbering'],
/* 000275 */ 	RenderManager: __class__ ('RenderManager', [Feature.RenderManager], {
/* 000275 */ 		__module__: __name__,
/* 000278 */ 		get initialize () {return __get__ (this, function (self, numbering_section_depth, section_numbering_by_level, counter_formatter) {
/* 000278 */ 			if (typeof numbering_section_depth == 'undefined' || (numbering_section_depth != null && numbering_section_depth.hasOwnProperty ("__kwargtrans__"))) {;
/* 000278 */ 				var numbering_section_depth = null;
/* 000278 */ 			};
/* 000278 */ 			if (typeof section_numbering_by_level == 'undefined' || (section_numbering_by_level != null && section_numbering_by_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000278 */ 				var section_numbering_by_level = null;
/* 000278 */ 			};
/* 000278 */ 			if (typeof counter_formatter == 'undefined' || (counter_formatter != null && counter_formatter.hasOwnProperty ("__kwargtrans__"))) {;
/* 000278 */ 				var counter_formatter = null;
/* 000278 */ 			};
/* 000278 */ 			if (arguments.length) {
/* 000278 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000278 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000278 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000278 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000278 */ 						switch (__attrib0__) {
/* 000278 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000278 */ 							case 'numbering_section_depth': var numbering_section_depth = __allkwargs0__ [__attrib0__]; break;
/* 000278 */ 							case 'section_numbering_by_level': var section_numbering_by_level = __allkwargs0__ [__attrib0__]; break;
/* 000278 */ 							case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000278 */ 						}
/* 000278 */ 					}
/* 000278 */ 				}
/* 000278 */ 			}
/* 000278 */ 			else {
/* 000278 */ 			}
/* 000284 */ 			self.target_id_counters = dict ({});
/* 000285 */ 			self.target_ids = dict ({});
/* 000287 */ 			if (__t__ (numbering_section_depth !== null)) {
/* 000288 */ 				self.numbering_section_depth = numbering_section_depth;
/* 000288 */ 			}
/* 000289 */ 			else {
/* 000290 */ 				self.numbering_section_depth = self.feature.numbering_section_depth;
/* 000290 */ 			}
/* 000292 */ 			if (__t__ (section_numbering_by_level !== null)) {
/* 000293 */ 				self.section_numbering_by_level = (function () {
/* 000293 */ 					var __accu0__ = [];
/* 000295 */ 					var __iterable0__ = (function () {
/* 000295 */ 						var __accu1__ = __call__ (dict, null, section_numbering_by_level);
/* 000295 */ 						return __call__ (__accu1__.py_items, __accu1__);
/* 000295 */ 					}) ();
/* 000295 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000295 */ 						var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000295 */ 						var level = __left0__ [0];
/* 000295 */ 						var x = __left0__ [1];
/* 000295 */ 						if (__t__ (x !== null)) {
/* 000296 */ 							(function () {
/* 000296 */ 								var __accu1__ = __accu0__;
/* 000294 */ 								return __call__ (__accu1__.append, __accu1__, [level, (function () {
/* 000294 */ 									var __accu2__ = self.feature;
/* 000294 */ 									return __call__ (__accu2__._make_section_numbering_info, __accu2__, x);
/* 000294 */ 								}) ()]);
/* 000294 */ 							}) ();
/* 000294 */ 						}
/* 000294 */ 					}
/* 000294 */ 					return dict (__accu0__);
/* 000294 */ 				}) ();
/* 000294 */ 			}
/* 000295 */ 			else {
/* 000299 */ 				self.section_numbering_by_level = self.feature.section_numbering_by_level;
/* 000299 */ 			}
/* 000301 */ 			// pass;
/* 000313 */ 			if (__t__ (counter_formatter !== null)) {
/* 000314 */ 				self.counter_formatter = __call__ (build_counter_formatter, null, counter_formatter, _default_counter_formatter_spec, __kwargtrans__ ({counter_formatter_id: 'section'}));
/* 000314 */ 			}
/* 000318 */ 			else {
/* 000320 */ 				self.counter_formatter = self.feature.counter_formatter;
/* 000320 */ 			}
/* 000322 */ 			if (__t__ (__t__ (self.counter_formatter !== null) && (function () {
/* 000322 */ 				var __accu0__ = self.render_context;
/* 000322 */ 				return __call__ (__accu0__.supports_feature, __accu0__, 'refs');
/* 000322 */ 			}) ())) {
/* 000323 */ 				var refs_mgr = (function () {
/* 000323 */ 					var __accu0__ = self.render_context;
/* 000323 */ 					return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000323 */ 				}) ();
/* 000324 */ 				(function () {
/* 000324 */ 					var __accu0__ = refs_mgr;
/* 000324 */ 					return __call__ (__accu0__.register_counter_formatter, __accu0__, __kwargtrans__ ({counter_formatter: self.counter_formatter}));
/* 000324 */ 				}) ();
/* 000324 */ 			}
/* 000328 */ 			self.section_counter_ifaces = dict ({});
/* 000329 */ 			self.heading_infos = dict ({});
/* 000331 */ 			if (__t__ (self.numbering_section_depth !== false)) {
/* 000333 */ 				var last_counter_name = null;
/* 000334 */ 				var base_counter_formatter_spec = (function () {
/* 000334 */ 					var __accu0__ = self.counter_formatter;
/* 000334 */ 					return __call__ (__accu0__.asdict, __accu0__);
/* 000334 */ 				}) ();
/* 000336 */ 				var __iterable0__ = __call__ (sorted, null, (function () {
/* 000336 */ 					var __accu0__ = self.section_numbering_by_level;
/* 000336 */ 					return __call__ (__accu0__.py_keys, __accu0__);
/* 000336 */ 				}) (), __kwargtrans__ ({key: int}));
/* 000336 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000336 */ 					var j = __getitem__ (__iterable0__, __index0__);
/* 000337 */ 					if (__t__ (__t__ (self.numbering_section_depth !== true) && __gt__ (j, self.numbering_section_depth))) {
/* 000337 */ 						break;
/* 000337 */ 					}
/* 000340 */ 					var counter_name = __getitem__ (self.feature.section_commands_by_level, j).cmdname;
/* 000341 */ 					var numbering_info = __getitem__ (self.section_numbering_by_level, j);
/* 000342 */ 					if (__t__ (!__t__ ((numbering_info)))) {
/* 000342 */ 						continue;
/* 000342 */ 					}
/* 000349 */ 					var always_number_within = null;
/* 000350 */ 					var number_within_reset_at = numbering_info.number_within_reset_at;
/* 000351 */ 					if (__t__ (number_within_reset_at)) {
/* 000352 */ 						if (__t__ (number_within_reset_at === true)) {
/* 000353 */ 							if (__t__ (last_counter_name !== null)) {
/* 000354 */ 								var number_within_reset_at = last_counter_name;
/* 000354 */ 							}
/* 000355 */ 							else {
/* 000356 */ 								var number_within_reset_at = null;
/* 000356 */ 							}
/* 000356 */ 						}
/* 000357 */ 						var always_number_within = dict ({'reset_at': number_within_reset_at, 'numprefix': numbering_info.numprefix});
/* 000357 */ 					}
/* 000363 */ 					var sec_counter_formatter = __call__ (build_counter_formatter, null, numbering_info.counter_formatter, base_counter_formatter_spec, __kwargtrans__ ({counter_formatter_id: self.counter_formatter.counter_formatter_id}));
/* 000371 */ 					var counter_iface = (function () {
/* 000371 */ 						var __accu0__ = numbering;
/* 000371 */ 						return __call__ (__accu0__.get_document_render_counter, __accu0__, self.render_context, counter_name, sec_counter_formatter, __kwargtrans__ ({always_number_within: always_number_within}));
/* 000371 */ 					}) ();
/* 000375 */ 					__setitem__ (self.section_counter_ifaces, j, counter_iface);
/* 000377 */ 					var last_counter_name = counter_name;
/* 000377 */ 				}
/* 000379 */ 				// pass;
/* 000379 */ 			}
/* 000379 */ 		});},
/* 000387 */ 		get new_heading () {return __get__ (this, function (self, node, heading_level, labels, heading_content_nodelist, skip_numbering, unregistered_heading, target_id) {
/* 000387 */ 			if (typeof skip_numbering == 'undefined' || (skip_numbering != null && skip_numbering.hasOwnProperty ("__kwargtrans__"))) {;
/* 000387 */ 				var skip_numbering = false;
/* 000387 */ 			};
/* 000387 */ 			if (typeof unregistered_heading == 'undefined' || (unregistered_heading != null && unregistered_heading.hasOwnProperty ("__kwargtrans__"))) {;
/* 000387 */ 				var unregistered_heading = false;
/* 000387 */ 			};
/* 000387 */ 			if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000387 */ 				var target_id = null;
/* 000387 */ 			};
/* 000387 */ 			if (arguments.length) {
/* 000387 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000387 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000387 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000387 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000387 */ 						switch (__attrib0__) {
/* 000387 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000387 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000387 */ 							case 'heading_level': var heading_level = __allkwargs0__ [__attrib0__]; break;
/* 000387 */ 							case 'labels': var labels = __allkwargs0__ [__attrib0__]; break;
/* 000387 */ 							case 'heading_content_nodelist': var heading_content_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000387 */ 							case 'skip_numbering': var skip_numbering = __allkwargs0__ [__attrib0__]; break;
/* 000387 */ 							case 'unregistered_heading': var unregistered_heading = __allkwargs0__ [__attrib0__]; break;
/* 000387 */ 							case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000387 */ 						}
/* 000387 */ 					}
/* 000387 */ 				}
/* 000387 */ 			}
/* 000387 */ 			else {
/* 000387 */ 			}
/* 000393 */ 			var node_id = (function () {
/* 000393 */ 				var __accu0__ = self;
/* 000393 */ 				return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000393 */ 			}) ();
/* 000394 */ 			if (__t__ (__in__ (node_id, self.heading_infos))) {
/* 000395 */ 				return __getitem__ (self.heading_infos, node_id);
/* 000395 */ 			}
/* 000397 */ 			if (__t__ (__t__ (target_id === null) && __call__ (len, null, node.flm_referenceable_infos))) {
/* 000398 */ 				var target_id = (function () {
/* 000398 */ 					var __accu0__ = __getitem__ (node.flm_referenceable_infos, 0);
/* 000398 */ 					return __call__ (__accu0__.get_target_id, __accu0__);
/* 000398 */ 				}) ();
/* 000398 */ 			}
/* 000400 */ 			if (__t__ (target_id === null)) {
/* 000401 */ 				var target_id = (function () {
/* 000401 */ 					var __accu0__ = self;
/* 000401 */ 					return __call__ (__accu0__.get_default_target_id, __accu0__, labels, heading_content_nodelist, __kwargtrans__ ({node: node}));
/* 000401 */ 				}) ();
/* 000401 */ 			}
/* 000407 */ 			var refs_mgr = null;
/* 000408 */ 			if (__t__ (__t__ ((function () {
/* 000408 */ 				var __accu0__ = self.render_context;
/* 000408 */ 				return __call__ (__accu0__.supports_feature, __accu0__, 'refs');
/* 000408 */ 			}) ()) && self.render_context.is_first_pass)) {
/* 000410 */ 				var refs_mgr = (function () {
/* 000410 */ 					var __accu0__ = self.render_context;
/* 000410 */ 					return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000410 */ 				}) ();
/* 000410 */ 			}
/* 000413 */ 			var sec_num_info = null;
/* 000414 */ 			if (__t__ (__t__ (!__t__ ((skip_numbering))) && __in__ (heading_level, self.section_counter_ifaces))) {
/* 000415 */ 				var counter_iface = __getitem__ (self.section_counter_ifaces, heading_level);
/* 000416 */ 				var numbering_info = __getitem__ (self.section_numbering_by_level, heading_level);
/* 000418 */ 				var sec_num_info = (function () {
/* 000418 */ 					var __accu0__ = counter_iface;
/* 000418 */ 					return __call__ (__accu0__.register_item, __accu0__);
/* 000418 */ 				}) ();
/* 000420 */ 				var heading_joiner = numbering_info.heading_joiner;
/* 000422 */ 				var heading_number_fragment = (function () {
/* 000422 */ 					var __accu0__ = self.render_context.doc.environment;
/* 000422 */ 					return __call__ (__accu0__.make_fragment, __accu0__, __add__ (__getitem__ (sec_num_info, 'formatted_value'), heading_joiner), __kwargtrans__ ({is_block_level: false, what: 'section-{} counter'.format (heading_level)}));
/* 000422 */ 				}) ();
/* 000428 */ 				var full_heading_nodelist = __add__ (__add__ ([], heading_number_fragment.nodes.nodelist), heading_content_nodelist.nodelist);
/* 000434 */ 				if (__t__ (refs_mgr !== null)) {
/* 000435 */ 					var __iterable0__ = labels;
/* 000435 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000435 */ 						var label_info = __getitem__ (__iterable0__, __index0__);
/* 000436 */ 						var __left0__ = label_info;
/* 000436 */ 						var ref_type = __left0__ [0];
/* 000436 */ 						var ref_label = __left0__ [1];
/* 000437 */ 						var counter_formatter_id = self.counter_formatter.counter_formatter_id;
/* 000438 */ 						(function () {
/* 000438 */ 							var __accu0__ = refs_mgr;
/* 000441 */ 							return __call__ (__accu0__.register_reference, __accu0__, ref_type, ref_label, __kwargtrans__ ({node: node, formatted_ref_flm_text: (function () {
/* 000441 */ 								var __accu1__ = self.counter_formatter;
/* 000442 */ 								return __call__ (__accu1__.format_flm, __accu1__, (function () {
/* 000442 */ 									var __accu2__ = __getitem__ (sec_num_info, 'value');
/* 000442 */ 									return __call__ (__accu2__.get_num, __accu2__);
/* 000443 */ 								}) (), __kwargtrans__ ({subnums: (function () {
/* 000443 */ 									var __accu2__ = __getitem__ (sec_num_info, 'value');
/* 000443 */ 									return __call__ (__accu2__.get_subnums, __accu2__);
/* 000443 */ 								}) (), numprefix: __getitem__ (sec_num_info, 'numprefix'), with_prefix: true}));
/* 000443 */ 							}) (), target_href: '#{}'.format (target_id), counter_value: __getitem__ (sec_num_info, 'value'), counter_numprefix: __getitem__ (sec_num_info, 'numprefix'), counter_formatter_id: counter_formatter_id}));
/* 000443 */ 						}) ();
/* 000443 */ 					}
/* 000443 */ 				}
/* 000443 */ 			}
/* 000451 */ 			else {
/* 000453 */ 				var full_heading_nodelist = heading_content_nodelist;
/* 000455 */ 				if (__t__ (refs_mgr !== null)) {
/* 000456 */ 					var __iterable0__ = node.flm_referenceable_infos;
/* 000456 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000456 */ 						var flm_referenceable_info = __getitem__ (__iterable0__, __index0__);
/* 000457 */ 						(function () {
/* 000457 */ 							var __accu0__ = refs_mgr;
/* 000457 */ 							return __call__ (__accu0__.register_reference_referenceable, __accu0__, __kwargtrans__ ({node: node, referenceable_info: flm_referenceable_info}));
/* 000457 */ 						}) ();
/* 000457 */ 					}
/* 000457 */ 				}
/* 000457 */ 			}
/* 000462 */ 			var result = dict ({'target_id': target_id, 'content_nodelist': full_heading_nodelist, 'sec_num_info': sec_num_info});
/* 000467 */ 			__setitem__ (self.heading_infos, node_id, result);
/* 000468 */ 			return result;
/* 000468 */ 		});},
/* 000470 */ 		get get_default_target_id () {return __get__ (this, function (self, heading_labels, heading_content_nodelist) {
/* 000470 */ 			if (arguments.length) {
/* 000470 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000470 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000470 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000470 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000470 */ 						switch (__attrib0__) {
/* 000470 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000470 */ 							case 'heading_labels': var heading_labels = __allkwargs0__ [__attrib0__]; break;
/* 000470 */ 							case 'heading_content_nodelist': var heading_content_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000470 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000470 */ 						}
/* 000470 */ 					}
/* 000470 */ 				}
/* 000470 */ 			}
/* 000470 */ 			else {
/* 000470 */ 			}
/* 000472 */ 			var node_id = (function () {
/* 000472 */ 				var __accu0__ = self;
/* 000472 */ 				return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000472 */ 			}) ();
/* 000474 */ 			if (__t__ (__in__ (node_id, self.target_ids))) {
/* 000475 */ 				return __getitem__ (self.target_ids, node_id);
/* 000475 */ 			}
/* 000477 */ 			var tgtid = (function () {
/* 000477 */ 				var __accu0__ = self;
/* 000477 */ 				return __call__ (__accu0__._generate_default_target_id, __accu0__, heading_labels, heading_content_nodelist);
/* 000477 */ 			}) ();
/* 000478 */ 			__setitem__ (self.target_ids, node_id, tgtid);
/* 000479 */ 			return tgtid;
/* 000479 */ 		});},
/* 000481 */ 		get _generate_default_target_id () {return __get__ (this, function (self, heading_labels, heading_content_nodelist) {
/* 000481 */ 			if (arguments.length) {
/* 000481 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000481 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000481 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000481 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000481 */ 						switch (__attrib0__) {
/* 000481 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000481 */ 							case 'heading_labels': var heading_labels = __allkwargs0__ [__attrib0__]; break;
/* 000481 */ 							case 'heading_content_nodelist': var heading_content_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000481 */ 						}
/* 000481 */ 					}
/* 000481 */ 				}
/* 000481 */ 			}
/* 000481 */ 			else {
/* 000481 */ 			}
/* 000484 */ 			var tgtid = (function () {
/* 000484 */ 				var __accu0__ = (function () {
/* 000484 */ 					var __accu1__ = heading_content_nodelist;
/* 000484 */ 					return __call__ (__accu1__.latex_verbatim, __accu1__);
/* 000484 */ 				}) ();
/* 000484 */ 				return __call__ (__accu0__.strip, __accu0__);
/* 000484 */ 			}) ();
/* 000485 */ 			var tgtid = (function () {
/* 000485 */ 				var __accu0__ = re;
/* 000485 */ 				return __call__ (__accu0__.sub, __accu0__, '[^A-Za-z0-9_-]+', '-', tgtid);
/* 000485 */ 			}) ();
/* 000486 */ 			var tgtid = 'sec--{}'.format (tgtid);
/* 000487 */ 			var tgtid = __getslice__ (tgtid, 0, 32, 1);
/* 000488 */ 			if (__t__ (__in__ (tgtid, self.target_id_counters))) {
/* 000489 */ 				__setitem__ (self.target_id_counters, tgtid, __call__ (__iadd__, null, __getitem__ (self.target_id_counters, tgtid), 1));
/* 000490 */ 				return '{}-{}'.format (tgtid, __getitem__ (self.target_id_counters, tgtid));
/* 000490 */ 			}
/* 000492 */ 			__setitem__ (self.target_id_counters, tgtid, 1);
/* 000493 */ 			return tgtid;
/* 000493 */ 		});}
/* 000496 */ 	}),
/* 000496 */ 	SectionCommandInfo: __class__ ('SectionCommandInfo', [object], {
/* 000496 */ 		__module__: __name__,
/* 000497 */ 		get __init__ () {return __get__ (this, function (self, cmdname, inline) {
/* 000497 */ 			if (typeof inline == 'undefined' || (inline != null && inline.hasOwnProperty ("__kwargtrans__"))) {;
/* 000497 */ 				var inline = false;
/* 000497 */ 			};
/* 000497 */ 			if (arguments.length) {
/* 000497 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000497 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000497 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000497 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000497 */ 						switch (__attrib0__) {
/* 000497 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000497 */ 							case 'cmdname': var cmdname = __allkwargs0__ [__attrib0__]; break;
/* 000497 */ 							case 'inline': var inline = __allkwargs0__ [__attrib0__]; break;
/* 000497 */ 						}
/* 000497 */ 					}
/* 000497 */ 				}
/* 000497 */ 			}
/* 000497 */ 			else {
/* 000497 */ 			}
/* 000498 */ 			__call__ (__call__ (__super__, null, FeatureHeadings.SectionCommandInfo, '__init__'), null, self);
/* 000499 */ 			self.cmdname = cmdname;
/* 000500 */ 			self.inline = inline;
/* 000500 */ 		});},
/* 000502 */ 		get __repr__ () {return __get__ (this, function (self) {
/* 000502 */ 			if (arguments.length) {
/* 000502 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000502 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000502 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000502 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000502 */ 						switch (__attrib0__) {
/* 000502 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000502 */ 						}
/* 000502 */ 					}
/* 000502 */ 				}
/* 000502 */ 			}
/* 000502 */ 			else {
/* 000502 */ 			}
/* 000505 */ 			return '{}(cmdname={}, inline={})'.format (self.__class__.__name__, __call__ (repr, null, self.cmdname), __call__ (repr, null, self.inline));
/* 000505 */ 		});}
/* 000508 */ 	}),
/* 000508 */ 	SectionNumberingInfo: __class__ ('SectionNumberingInfo', [object], {
/* 000508 */ 		__module__: __name__,
/* 000518 */ 		get __init__ () {return __get__ (this, function (self, numprefix, heading_joiner, number_within_reset_at, counter_formatter) {
/* 000518 */ 			if (typeof numprefix == 'undefined' || (numprefix != null && numprefix.hasOwnProperty ("__kwargtrans__"))) {;
/* 000518 */ 				var numprefix = null;
/* 000518 */ 			};
/* 000518 */ 			if (typeof heading_joiner == 'undefined' || (heading_joiner != null && heading_joiner.hasOwnProperty ("__kwargtrans__"))) {;
/* 000518 */ 				var heading_joiner = ' ';
/* 000518 */ 			};
/* 000518 */ 			if (typeof number_within_reset_at == 'undefined' || (number_within_reset_at != null && number_within_reset_at.hasOwnProperty ("__kwargtrans__"))) {;
/* 000518 */ 				var number_within_reset_at = true;
/* 000518 */ 			};
/* 000518 */ 			if (typeof counter_formatter == 'undefined' || (counter_formatter != null && counter_formatter.hasOwnProperty ("__kwargtrans__"))) {;
/* 000518 */ 				var counter_formatter = null;
/* 000518 */ 			};
/* 000518 */ 			if (arguments.length) {
/* 000518 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000518 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000518 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000518 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000518 */ 						switch (__attrib0__) {
/* 000518 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000518 */ 							case 'numprefix': var numprefix = __allkwargs0__ [__attrib0__]; break;
/* 000518 */ 							case 'heading_joiner': var heading_joiner = __allkwargs0__ [__attrib0__]; break;
/* 000518 */ 							case 'number_within_reset_at': var number_within_reset_at = __allkwargs0__ [__attrib0__]; break;
/* 000518 */ 							case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000518 */ 						}
/* 000518 */ 					}
/* 000518 */ 				}
/* 000518 */ 			}
/* 000518 */ 			else {
/* 000518 */ 			}
/* 000523 */ 			__call__ (__call__ (__super__, null, FeatureHeadings.SectionNumberingInfo, '__init__'), null, self);
/* 000524 */ 			self.numprefix = numprefix;
/* 000525 */ 			self.heading_joiner = heading_joiner;
/* 000526 */ 			self.number_within_reset_at = number_within_reset_at;
/* 000527 */ 			self.counter_formatter = counter_formatter;
/* 000527 */ 		});},
/* 000529 */ 		get __repr__ () {return __get__ (this, function (self) {
/* 000529 */ 			if (arguments.length) {
/* 000529 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000529 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000529 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000529 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000529 */ 						switch (__attrib0__) {
/* 000529 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000529 */ 						}
/* 000529 */ 					}
/* 000529 */ 				}
/* 000529 */ 			}
/* 000529 */ 			else {
/* 000529 */ 			}
/* 000535 */ 			return '{}(numprefix={}, heading_joiner={}, number_within_reset_at={}counter_formatter={})'.format (self.__class__.__name__, __call__ (repr, null, self.numprefix), __call__ (repr, null, self.heading_joiner), __call__ (repr, null, self.number_within_reset_at), __call__ (repr, null, self.counter_formatter));
/* 000535 */ 		});}
/* 000535 */ 	}),
/* 000539 */ 	feature_default_config: dict ({'counter_formatter': _default_counter_formatter_spec, 'section_commands_by_level': _default_section_commands_by_level_with_nomerge, 'section_numbering_by_level': _default_section_numbering_by_level_with_nomerge}),
/* 000545 */ 	get __init__ () {return __get__ (this, function (self, section_commands_by_level, numbering_section_depth, counter_formatter, section_numbering_by_level) {
/* 000545 */ 		if (typeof section_commands_by_level == 'undefined' || (section_commands_by_level != null && section_commands_by_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000545 */ 			var section_commands_by_level = null;
/* 000545 */ 		};
/* 000545 */ 		if (typeof numbering_section_depth == 'undefined' || (numbering_section_depth != null && numbering_section_depth.hasOwnProperty ("__kwargtrans__"))) {;
/* 000545 */ 			var numbering_section_depth = false;
/* 000545 */ 		};
/* 000545 */ 		if (typeof counter_formatter == 'undefined' || (counter_formatter != null && counter_formatter.hasOwnProperty ("__kwargtrans__"))) {;
/* 000545 */ 			var counter_formatter = null;
/* 000545 */ 		};
/* 000545 */ 		if (typeof section_numbering_by_level == 'undefined' || (section_numbering_by_level != null && section_numbering_by_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000545 */ 			var section_numbering_by_level = null;
/* 000545 */ 		};
/* 000545 */ 		if (arguments.length) {
/* 000545 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000545 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000545 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000545 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000545 */ 					switch (__attrib0__) {
/* 000545 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000545 */ 						case 'section_commands_by_level': var section_commands_by_level = __allkwargs0__ [__attrib0__]; break;
/* 000545 */ 						case 'numbering_section_depth': var numbering_section_depth = __allkwargs0__ [__attrib0__]; break;
/* 000545 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000545 */ 						case 'section_numbering_by_level': var section_numbering_by_level = __allkwargs0__ [__attrib0__]; break;
/* 000545 */ 					}
/* 000545 */ 				}
/* 000545 */ 			}
/* 000545 */ 		}
/* 000545 */ 		else {
/* 000545 */ 		}
/* 000570 */ 		__call__ (__call__ (__super__, null, FeatureHeadings, '__init__'), null, self);
/* 000572 */ 		if (__t__ (section_commands_by_level === null)) {
/* 000573 */ 			var section_commands_by_level = _default_section_commands_by_level;
/* 000573 */ 		}
/* 000574 */ 		if (__t__ (section_numbering_by_level === null)) {
/* 000575 */ 			var section_numbering_by_level = _default_section_numbering_by_level;
/* 000575 */ 		}
/* 000576 */ 		if (__t__ (counter_formatter === null)) {
/* 000577 */ 			var counter_formatter = _default_counter_formatter_spec;
/* 000577 */ 		}
/* 000578 */ 		var counter_formatter = __call__ (build_counter_formatter, null, counter_formatter, _default_counter_formatter_spec, __kwargtrans__ ({counter_formatter_id: 'section'}));
/* 000583 */ 		self.counter_formatter = counter_formatter;
/* 000587 */ 		self.section_commands_by_level = (function () {
/* 000587 */ 			var __accu0__ = [];
/* 000589 */ 			var __iterable0__ = (function () {
/* 000589 */ 				var __accu1__ = __call__ (dict, null, section_commands_by_level);
/* 000589 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000589 */ 			}) ();
/* 000589 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000589 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000589 */ 				var level = __left0__ [0];
/* 000589 */ 				var x = __left0__ [1];
/* 000589 */ 				if (__t__ (x !== null)) {
/* 000590 */ 					(function () {
/* 000590 */ 						var __accu1__ = __accu0__;
/* 000588 */ 						return __call__ (__accu1__.append, __accu1__, [level, (function () {
/* 000588 */ 							var __accu2__ = self;
/* 000588 */ 							return __call__ (__accu2__._make_section_command_info, __accu2__, x);
/* 000588 */ 						}) ()]);
/* 000588 */ 					}) ();
/* 000588 */ 				}
/* 000588 */ 			}
/* 000588 */ 			return dict (__accu0__);
/* 000588 */ 		}) ();
/* 000592 */ 		self.section_numbering_by_level = (function () {
/* 000592 */ 			var __accu0__ = [];
/* 000594 */ 			var __iterable0__ = (function () {
/* 000594 */ 				var __accu1__ = __call__ (dict, null, section_numbering_by_level);
/* 000594 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000594 */ 			}) ();
/* 000594 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000594 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000594 */ 				var level = __left0__ [0];
/* 000594 */ 				var x = __left0__ [1];
/* 000594 */ 				if (__t__ (x !== null)) {
/* 000595 */ 					(function () {
/* 000595 */ 						var __accu1__ = __accu0__;
/* 000593 */ 						return __call__ (__accu1__.append, __accu1__, [level, (function () {
/* 000593 */ 							var __accu2__ = self;
/* 000593 */ 							return __call__ (__accu2__._make_section_numbering_info, __accu2__, x);
/* 000593 */ 						}) ()]);
/* 000593 */ 					}) ();
/* 000593 */ 				}
/* 000593 */ 			}
/* 000593 */ 			return dict (__accu0__);
/* 000593 */ 		}) ();
/* 000600 */ 		self.numbering_section_depth = numbering_section_depth;
/* 000601 */ 		if (__t__ (self.numbering_section_depth === null)) {
/* 000602 */ 			self.numbering_section_depth = false;
/* 000602 */ 		}
/* 000602 */ 	});},
/* 000605 */ 	get _make_section_command_info () {return __get__ (this, function (self, x) {
/* 000605 */ 		if (arguments.length) {
/* 000605 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000605 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000605 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000605 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000605 */ 					switch (__attrib0__) {
/* 000605 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000605 */ 						case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000605 */ 					}
/* 000605 */ 				}
/* 000605 */ 			}
/* 000605 */ 		}
/* 000605 */ 		else {
/* 000605 */ 		}
/* 000611 */ 		if (__t__ (__call__ (isinstance, null, x, self.SectionCommandInfo))) {
/* 000612 */ 			return x;
/* 000612 */ 		}
/* 000613 */ 		if (__t__ (__call__ (isinstance, null, x, str))) {
/* 000614 */ 			return (function () {
/* 000614 */ 				var __accu0__ = self;
/* 000614 */ 				return __call__ (__accu0__.SectionCommandInfo, __accu0__, x);
/* 000614 */ 			}) ();
/* 000614 */ 		}
/* 000615 */ 		return (function () {
/* 000615 */ 			var __accu0__ = self;
/* 000615 */ 			return __call__ (__accu0__.SectionCommandInfo, __accu0__, __kwargtrans__ (x));
/* 000615 */ 		}) ();
/* 000615 */ 	});},
/* 000617 */ 	get _make_section_numbering_info () {return __get__ (this, function (self, x) {
/* 000617 */ 		if (arguments.length) {
/* 000617 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000617 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000617 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000617 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000617 */ 					switch (__attrib0__) {
/* 000617 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000617 */ 						case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000617 */ 					}
/* 000617 */ 				}
/* 000617 */ 			}
/* 000617 */ 		}
/* 000617 */ 		else {
/* 000617 */ 		}
/* 000618 */ 		if (__t__ (__call__ (isinstance, null, x, self.SectionNumberingInfo))) {
/* 000619 */ 			return x;
/* 000619 */ 		}
/* 000620 */ 		return (function () {
/* 000620 */ 			var __accu0__ = self;
/* 000620 */ 			return __call__ (__accu0__.SectionNumberingInfo, __accu0__, __kwargtrans__ (x));
/* 000620 */ 		}) ();
/* 000620 */ 	});},
/* 000622 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000622 */ 		if (arguments.length) {
/* 000622 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000622 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000622 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000622 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000622 */ 					switch (__attrib0__) {
/* 000622 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000622 */ 					}
/* 000622 */ 				}
/* 000622 */ 			}
/* 000622 */ 		}
/* 000622 */ 		else {
/* 000622 */ 		}
/* 000623 */ 		return __call__ (dict, null, __kwargtrans__ ({macros: (function () {
/* 000623 */ 			var __accu0__ = [];
/* 000630 */ 			var __iterable0__ = (function () {
/* 000630 */ 				var __accu1__ = self.section_commands_by_level;
/* 000630 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000630 */ 			}) ();
/* 000630 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000630 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000630 */ 				var level = __left0__ [0];
/* 000630 */ 				var sectioncmdspec = __left0__ [1];
/* 000630 */ 				(function () {
/* 000630 */ 					var __accu1__ = __accu0__;
/* 000625 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (HeadingMacro, null, __kwargtrans__ ({macroname: sectioncmdspec.cmdname, heading_level: level, inline_heading: sectioncmdspec.inline})));
/* 000625 */ 				}) ();
/* 000625 */ 			}
/* 000625 */ 			return __accu0__;
/* 000625 */ 		}) ()}));
/* 000625 */ 	});}
/* 000625 */ });
/* 000638 */ export var FeatureClass = FeatureHeadings;
/* 000014 */ 
//# sourceMappingURL=flm.feature.headings.map