/* 000001 */ // Transcrypt'ed from Python, 2024-09-26 23:29:35
/* 000006 */ var logging = {};
/* 000006 */ var re = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000019 */ import * as refs from './flm.feature.refs.js';
/* 000017 */ import {Feature} from './flm.feature._base.js';
/* 000014 */ import * as flmspecinfo from './flm.flmspecinfo.js';
/* 000010 */ import {LatexArgumentSpec, ParsedArgumentsInfo} from './pylatexenc.latexnodes.js';
/* 000007 */ import * as __module_logging__ from './logging.js';
/* 000007 */ __nest__ (logging, '', __module_logging__);
/* 000006 */ import * as __module_re__ from './re.js';
/* 000006 */ __nest__ (re, '', __module_re__);
/* 000006 */ export {ParsedArgumentsInfo, flmspecinfo, Feature, LatexArgumentSpec, refs};
/* 000001 */ var __name__ = 'flm.feature.headings';
/* 000008 */ export var logger = (function () {
/* 000008 */ 	var __accu0__ = logging;
/* 000008 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000008 */ }) ();
/* 000026 */ export var HeadingMacro =  __class__ ('HeadingMacro', [flmspecinfo.FLMMacroSpecBase], {
/* 000026 */ 	__module__: __name__,
/* 000028 */ 	is_block_level: true,
/* 000030 */ 	allowed_in_standalone_mode: true,
/* 000034 */ 	_flm_main_text_argument: 'text',
/* 000036 */ 	allowed_ref_label_prefixes: tuple (['sec', 'topic']),
/* 000038 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000038 */ 		var heading_level = 1;
/* 000038 */ 		var inline_heading = false;
/* 000038 */ 		if (arguments.length) {
/* 000038 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000038 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000038 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000038 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000038 */ 					switch (__attrib0__) {
/* 000038 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000038 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000038 */ 						case 'heading_level': var heading_level = __allkwargs0__ [__attrib0__]; break;
/* 000038 */ 						case 'inline_heading': var inline_heading = __allkwargs0__ [__attrib0__]; break;
/* 000038 */ 					}
/* 000038 */ 				}
/* 000038 */ 			}
/* 000038 */ 		}
/* 000038 */ 		else {
/* 000038 */ 		}
/* 000047 */ 		__call__ (__call__ (__super__, null, HeadingMacro, '__init__'), null, self, macroname, __kwargtrans__ ({arguments_spec_list: [__call__ (LatexArgumentSpec, null, '*', __kwargtrans__ ({argname: 'star'})), flmspecinfo.text_arg, flmspecinfo.label_arg]}));
/* 000052 */ 		self.heading_level = heading_level;
/* 000053 */ 		self.inline_heading = inline_heading;
/* 000055 */ 		self.is_block_heading = self.inline_heading;
/* 000055 */ 	});},
/* 000057 */ 	_fields: tuple (['macroname', 'heading_level', 'inline_heading']),
/* 000059 */ 	get get_flm_doc () {return __get__ (this, function (self) {
/* 000059 */ 		if (arguments.length) {
/* 000059 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000059 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000059 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000059 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000059 */ 					switch (__attrib0__) {
/* 000059 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000059 */ 					}
/* 000059 */ 				}
/* 000059 */ 			}
/* 000059 */ 		}
/* 000059 */ 		else {
/* 000059 */ 		}
/* 000060 */ 		return 'Create a{} heading at level {}'.format ((__t__ (self.inline_heading) ? 'n inline' : ''), self.heading_level);
/* 000060 */ 	});},
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
/* 000067 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['star', 'text', 'label']));
/* 000067 */ 		}) ();
/* 000071 */ 		node.flmarg_heading_content_nodelist = (function () {
/* 000071 */ 			var __accu0__ = __getitem__ (node_args, 'text');
/* 000071 */ 			return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000071 */ 		}) ();
/* 000073 */ 		node.flmarg_labels = (function () {
/* 000073 */ 			var __accu0__ = flmspecinfo;
/* 000073 */ 			return __call__ (__accu0__.helper_collect_labels, __accu0__, __getitem__ (node_args, 'label'), self.allowed_ref_label_prefixes);
/* 000073 */ 		}) ();
/* 000078 */ 		var heading_flm_text = (function () {
/* 000078 */ 			var __accu0__ = node.flmarg_heading_content_nodelist;
/* 000078 */ 			return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000078 */ 		}) ();
/* 000081 */ 		node.flm_referenceable_infos = [(function () {
/* 000081 */ 			var __accu0__ = refs;
/* 000081 */ 			return __call__ (__accu0__.ReferenceableInfo, __accu0__, __kwargtrans__ ({formatted_ref_flm_text: heading_flm_text, labels: node.flmarg_labels}));
/* 000081 */ 		}) ()];
/* 000081 */ 	});},
/* 000088 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000088 */ 		if (arguments.length) {
/* 000088 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000088 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000088 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000088 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000088 */ 					switch (__attrib0__) {
/* 000088 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000088 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000088 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000088 */ 					}
/* 000088 */ 				}
/* 000088 */ 			}
/* 000088 */ 		}
/* 000088 */ 		else {
/* 000088 */ 		}
/* 000090 */ 		var headings_mgr = (function () {
/* 000090 */ 			var __accu0__ = render_context;
/* 000090 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'headings');
/* 000090 */ 		}) ();
/* 000092 */ 		var target_id = null;
/* 000094 */ 		if (__t__ (__call__ (hasattr, null, node, 'flm_heading_target_id'))) {
/* 000098 */ 			var target_id = node.flm_heading_target_id;
/* 000098 */ 		}
/* 000099 */ 		else {
/* 000101 */ 			var target_id = (function () {
/* 000101 */ 				var __accu0__ = __getitem__ (node.flm_referenceable_infos, 0);
/* 000101 */ 				return __call__ (__accu0__.get_target_id, __accu0__);
/* 000101 */ 			}) ();
/* 000102 */ 			if (__t__ (target_id === null)) {
/* 000103 */ 				var target_id = (function () {
/* 000103 */ 					var __accu0__ = headings_mgr;
/* 000103 */ 					return __call__ (__accu0__.get_default_target_id, __accu0__, node.flmarg_labels, node.flmarg_heading_content_nodelist, __kwargtrans__ ({node: node}));
/* 000103 */ 				}) ();
/* 000103 */ 			}
/* 000103 */ 		}
/* 000109 */ 		if (__t__ (__t__ ((function () {
/* 000109 */ 			var __accu0__ = render_context;
/* 000109 */ 			return __call__ (__accu0__.supports_feature, __accu0__, 'refs');
/* 000109 */ 		}) ()) && render_context.is_first_pass)) {
/* 000110 */ 			var refs_mgr = (function () {
/* 000110 */ 				var __accu0__ = render_context;
/* 000110 */ 				return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000110 */ 			}) ();
/* 000111 */ 			var __iterable0__ = node.flm_referenceable_infos;
/* 000111 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000111 */ 				var flm_referenceable_info = __getitem__ (__iterable0__, __index0__);
/* 000112 */ 				(function () {
/* 000112 */ 					var __accu0__ = refs_mgr;
/* 000112 */ 					return __call__ (__accu0__.register_reference_referenceable, __accu0__, __kwargtrans__ ({node: node, referenceable_info: flm_referenceable_info}));
/* 000112 */ 				}) ();
/* 000112 */ 			}
/* 000112 */ 		}
/* 000117 */ 		return (function () {
/* 000117 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000117 */ 			return __call__ (__accu0__.render_heading, __accu0__, node.flmarg_heading_content_nodelist, __kwargtrans__ ({render_context: render_context, heading_level: self.heading_level, inline_heading: self.inline_heading, target_id: target_id}));
/* 000117 */ 		}) ();
/* 000117 */ 	});},
/* 000126 */ 	get recompose_pure_latex () {return __get__ (this, function (self, node, recomposer, visited_results_arguments) {
/* 000126 */ 		var kwargs = dict ();
/* 000126 */ 		if (arguments.length) {
/* 000126 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000126 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000126 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000126 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000126 */ 					switch (__attrib0__) {
/* 000126 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000126 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000126 */ 						case 'recomposer': var recomposer = __allkwargs0__ [__attrib0__]; break;
/* 000126 */ 						case 'visited_results_arguments': var visited_results_arguments = __allkwargs0__ [__attrib0__]; break;
/* 000126 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000126 */ 					}
/* 000126 */ 				}
/* 000126 */ 				delete kwargs.__kwargtrans__;
/* 000126 */ 			}
/* 000126 */ 		}
/* 000126 */ 		else {
/* 000126 */ 		}
/* 000128 */ 		var heading_macroname = node.macroname;
/* 000130 */ 		var recopt_cells = (function () {
/* 000130 */ 			var __accu0__ = recomposer;
/* 000130 */ 			return __call__ (__accu0__.get_options, __accu0__, 'headings');
/* 000130 */ 		}) ();
/* 000131 */ 		var heading_macroname_mapping = (function () {
/* 000131 */ 			var __accu0__ = recopt_cells;
/* 000131 */ 			return __call__ (__accu0__.py_get, __accu0__, 'macroname_mapping', null);
/* 000131 */ 		}) ();
/* 000132 */ 		if (__t__ (heading_macroname_mapping)) {
/* 000133 */ 			if (__t__ (__in__ (heading_macroname, heading_macroname_mapping))) {
/* 000134 */ 				var heading_macroname = __getitem__ (heading_macroname_mapping, heading_macroname);
/* 000134 */ 			}
/* 000134 */ 		}
/* 000136 */ 		var s = __add__ ('\\', heading_macroname);
/* 000144 */ 		if (__t__ (__getitem__ (visited_results_arguments, 0) !== null)) {
/* 000145 */ 			var s = __call__ (__iadd__, null, s, __getitem__ (visited_results_arguments, 0));
/* 000145 */ 		}
/* 000147 */ 		if (__t__ (__getitem__ (visited_results_arguments, 1) !== null)) {
/* 000148 */ 			var s = __call__ (__iadd__, null, s, __getitem__ (visited_results_arguments, 1));
/* 000148 */ 		}
/* 000151 */ 		var __iterable0__ = node.flmarg_labels;
/* 000151 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000151 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000151 */ 			var ref_type = __left0__ [0];
/* 000151 */ 			var ref_label = __left0__ [1];
/* 000152 */ 			var safe_label_info = (function () {
/* 000152 */ 				var __accu0__ = recomposer;
/* 000152 */ 				return __call__ (__accu0__.make_safe_label, __accu0__, 'ref', ref_type, ref_label);
/* 000152 */ 			}) ();
/* 000153 */ 			var s = __call__ (__iadd__, null, s, __add__ (__add__ ('\\label{', __getitem__ (safe_label_info, 'safe_label')), '}'));
/* 000153 */ 		}
/* 000155 */ 		return s;
/* 000155 */ 	});}
/* 000155 */ });
/* 000159 */ export var FeatureHeadings =  __class__ ('FeatureHeadings', [Feature], {
/* 000159 */ 	__module__: __name__,
/* 000165 */ 	feature_name: 'headings',
/* 000166 */ 	feature_title: 'Headings: sections, paragraphs',
/* 000171 */ 	feature_optional_dependencies: ['refs'],
/* 000171 */ 	RenderManager: __class__ ('RenderManager', [Feature.RenderManager], {
/* 000171 */ 		__module__: __name__,
/* 000174 */ 		get initialize () {return __get__ (this, function (self) {
/* 000174 */ 			if (arguments.length) {
/* 000174 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000174 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000174 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000174 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000174 */ 						switch (__attrib0__) {
/* 000174 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000174 */ 						}
/* 000174 */ 					}
/* 000174 */ 				}
/* 000174 */ 			}
/* 000174 */ 			else {
/* 000174 */ 			}
/* 000175 */ 			self.target_id_counters = dict ({});
/* 000176 */ 			self.target_ids = dict ({});
/* 000176 */ 		});},
/* 000179 */ 		get get_default_target_id () {return __get__ (this, function (self, heading_labels, heading_content_nodelist) {
/* 000179 */ 			if (arguments.length) {
/* 000179 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000179 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000179 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000179 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000179 */ 						switch (__attrib0__) {
/* 000179 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000179 */ 							case 'heading_labels': var heading_labels = __allkwargs0__ [__attrib0__]; break;
/* 000179 */ 							case 'heading_content_nodelist': var heading_content_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000179 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000179 */ 						}
/* 000179 */ 					}
/* 000179 */ 				}
/* 000179 */ 			}
/* 000179 */ 			else {
/* 000179 */ 			}
/* 000181 */ 			var node_id = (function () {
/* 000181 */ 				var __accu0__ = self;
/* 000181 */ 				return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000181 */ 			}) ();
/* 000183 */ 			if (__t__ (__in__ (node_id, self.target_ids))) {
/* 000184 */ 				return __getitem__ (self.target_ids, node_id);
/* 000184 */ 			}
/* 000186 */ 			var tgtid = (function () {
/* 000186 */ 				var __accu0__ = self;
/* 000186 */ 				return __call__ (__accu0__._generate_default_target_id, __accu0__, heading_labels, heading_content_nodelist);
/* 000186 */ 			}) ();
/* 000187 */ 			__setitem__ (self.target_ids, node_id, tgtid);
/* 000188 */ 			return tgtid;
/* 000188 */ 		});},
/* 000190 */ 		get _generate_default_target_id () {return __get__ (this, function (self, heading_labels, heading_content_nodelist) {
/* 000190 */ 			if (arguments.length) {
/* 000190 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000190 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000190 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000190 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000190 */ 						switch (__attrib0__) {
/* 000190 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000190 */ 							case 'heading_labels': var heading_labels = __allkwargs0__ [__attrib0__]; break;
/* 000190 */ 							case 'heading_content_nodelist': var heading_content_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000190 */ 						}
/* 000190 */ 					}
/* 000190 */ 				}
/* 000190 */ 			}
/* 000190 */ 			else {
/* 000190 */ 			}
/* 000193 */ 			var tgtid = (function () {
/* 000193 */ 				var __accu0__ = (function () {
/* 000193 */ 					var __accu1__ = heading_content_nodelist;
/* 000193 */ 					return __call__ (__accu1__.latex_verbatim, __accu1__);
/* 000193 */ 				}) ();
/* 000193 */ 				return __call__ (__accu0__.strip, __accu0__);
/* 000193 */ 			}) ();
/* 000194 */ 			var tgtid = (function () {
/* 000194 */ 				var __accu0__ = re;
/* 000194 */ 				return __call__ (__accu0__.sub, __accu0__, '[^A-Za-z0-9_-]+', '-', tgtid);
/* 000194 */ 			}) ();
/* 000195 */ 			var tgtid = 'sec--{}'.format (tgtid);
/* 000196 */ 			var tgtid = __getslice__ (tgtid, 0, 32, 1);
/* 000197 */ 			if (__t__ (__in__ (tgtid, self.target_id_counters))) {
/* 000198 */ 				__setitem__ (self.target_id_counters, tgtid, __call__ (__iadd__, null, __getitem__ (self.target_id_counters, tgtid), 1));
/* 000199 */ 				return '{}-{}'.format (tgtid, __getitem__ (self.target_id_counters, tgtid));
/* 000199 */ 			}
/* 000201 */ 			__setitem__ (self.target_id_counters, tgtid, 1);
/* 000202 */ 			return tgtid;
/* 000202 */ 		});}
/* 000205 */ 	}),
/* 000205 */ 	SectionCommandInfo: __class__ ('SectionCommandInfo', [object], {
/* 000205 */ 		__module__: __name__,
/* 000206 */ 		get __init__ () {return __get__ (this, function (self, cmdname, inline) {
/* 000206 */ 			if (typeof inline == 'undefined' || (inline != null && inline.hasOwnProperty ("__kwargtrans__"))) {;
/* 000206 */ 				var inline = false;
/* 000206 */ 			};
/* 000206 */ 			if (arguments.length) {
/* 000206 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000206 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000206 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000206 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000206 */ 						switch (__attrib0__) {
/* 000206 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000206 */ 							case 'cmdname': var cmdname = __allkwargs0__ [__attrib0__]; break;
/* 000206 */ 							case 'inline': var inline = __allkwargs0__ [__attrib0__]; break;
/* 000206 */ 						}
/* 000206 */ 					}
/* 000206 */ 				}
/* 000206 */ 			}
/* 000206 */ 			else {
/* 000206 */ 			}
/* 000207 */ 			__call__ (__call__ (__super__, null, FeatureHeadings.SectionCommandInfo, '__init__'), null, self);
/* 000208 */ 			self.cmdname = cmdname;
/* 000209 */ 			self.inline = inline;
/* 000209 */ 		});},
/* 000211 */ 		get __repr__ () {return __get__ (this, function (self) {
/* 000211 */ 			if (arguments.length) {
/* 000211 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000211 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000211 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000211 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000211 */ 						switch (__attrib0__) {
/* 000211 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000211 */ 						}
/* 000211 */ 					}
/* 000211 */ 				}
/* 000211 */ 			}
/* 000211 */ 			else {
/* 000211 */ 			}
/* 000212 */ 			return '{}(cmdname={}, inline={})'.format (self.__class__.__name__, self.cmdname, self.inline);
/* 000212 */ 		});}
/* 000212 */ 	}),
/* 000217 */ 	get __init__ () {return __get__ (this, function (self, section_commands_by_level) {
/* 000217 */ 		if (typeof section_commands_by_level == 'undefined' || (section_commands_by_level != null && section_commands_by_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000217 */ 			var section_commands_by_level = null;
/* 000217 */ 		};
/* 000217 */ 		if (arguments.length) {
/* 000217 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000217 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000217 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000217 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000217 */ 					switch (__attrib0__) {
/* 000217 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000217 */ 						case 'section_commands_by_level': var section_commands_by_level = __allkwargs0__ [__attrib0__]; break;
/* 000217 */ 					}
/* 000217 */ 				}
/* 000217 */ 			}
/* 000217 */ 		}
/* 000217 */ 		else {
/* 000217 */ 		}
/* 000218 */ 		__call__ (__call__ (__super__, null, FeatureHeadings, '__init__'), null, self);
/* 000219 */ 		if (__t__ (section_commands_by_level === null)) {
/* 000221 */ 			var section_commands_by_level = dict ({1: (function () {
/* 000221 */ 				var __accu0__ = self;
/* 000221 */ 				return __call__ (__accu0__.SectionCommandInfo, __accu0__, 'section');
/* 000222 */ 			}) (), 2: (function () {
/* 000222 */ 				var __accu0__ = self;
/* 000222 */ 				return __call__ (__accu0__.SectionCommandInfo, __accu0__, 'subsection');
/* 000223 */ 			}) (), 3: (function () {
/* 000223 */ 				var __accu0__ = self;
/* 000223 */ 				return __call__ (__accu0__.SectionCommandInfo, __accu0__, 'subsubsection');
/* 000224 */ 			}) (), 4: (function () {
/* 000224 */ 				var __accu0__ = self;
/* 000224 */ 				return __call__ (__accu0__.SectionCommandInfo, __accu0__, 'paragraph', __kwargtrans__ ({inline: true}));
/* 000225 */ 			}) (), 5: (function () {
/* 000225 */ 				var __accu0__ = self;
/* 000225 */ 				return __call__ (__accu0__.SectionCommandInfo, __accu0__, 'subparagraph', __kwargtrans__ ({inline: true}));
/* 000226 */ 			}) (), 6: (function () {
/* 000226 */ 				var __accu0__ = self;
/* 000226 */ 				return __call__ (__accu0__.SectionCommandInfo, __accu0__, 'subsubparagraph', __kwargtrans__ ({inline: true}));
/* 000226 */ 			}) ()});
/* 000226 */ 		}
/* 000231 */ 		self.section_commands_by_level = (function () {
/* 000231 */ 			var __accu0__ = [];
/* 000233 */ 			var __iterable0__ = (function () {
/* 000233 */ 				var __accu1__ = __call__ (dict, null, section_commands_by_level);
/* 000233 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000233 */ 			}) ();
/* 000233 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000233 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000233 */ 				var level = __left0__ [0];
/* 000233 */ 				var x = __left0__ [1];
/* 000233 */ 				(function () {
/* 000233 */ 					var __accu1__ = __accu0__;
/* 000232 */ 					return __call__ (__accu1__.append, __accu1__, [level, (function () {
/* 000232 */ 						var __accu2__ = self;
/* 000232 */ 						return __call__ (__accu2__._make_section_command_info, __accu2__, x);
/* 000232 */ 					}) ()]);
/* 000232 */ 				}) ();
/* 000232 */ 			}
/* 000232 */ 			return dict (__accu0__);
/* 000232 */ 		}) ();
/* 000232 */ 	});},
/* 000236 */ 	get _make_section_command_info () {return __get__ (this, function (self, x) {
/* 000236 */ 		if (arguments.length) {
/* 000236 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000236 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000236 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000236 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000236 */ 					switch (__attrib0__) {
/* 000236 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000236 */ 						case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000236 */ 					}
/* 000236 */ 				}
/* 000236 */ 			}
/* 000236 */ 		}
/* 000236 */ 		else {
/* 000236 */ 		}
/* 000242 */ 		if (__t__ (__call__ (isinstance, null, x, self.SectionCommandInfo))) {
/* 000243 */ 			return x;
/* 000243 */ 		}
/* 000244 */ 		if (__t__ (__call__ (isinstance, null, x, str))) {
/* 000245 */ 			return (function () {
/* 000245 */ 				var __accu0__ = self;
/* 000245 */ 				return __call__ (__accu0__.SectionCommandInfo, __accu0__, x);
/* 000245 */ 			}) ();
/* 000245 */ 		}
/* 000246 */ 		return (function () {
/* 000246 */ 			var __accu0__ = self;
/* 000246 */ 			return __call__ (__accu0__.SectionCommandInfo, __accu0__, __kwargtrans__ (x));
/* 000246 */ 		}) ();
/* 000246 */ 	});},
/* 000248 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000248 */ 		if (arguments.length) {
/* 000248 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000248 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000248 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000248 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000248 */ 					switch (__attrib0__) {
/* 000248 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000248 */ 					}
/* 000248 */ 				}
/* 000248 */ 			}
/* 000248 */ 		}
/* 000248 */ 		else {
/* 000248 */ 		}
/* 000249 */ 		return __call__ (dict, null, __kwargtrans__ ({macros: (function () {
/* 000249 */ 			var __accu0__ = [];
/* 000256 */ 			var __iterable0__ = (function () {
/* 000256 */ 				var __accu1__ = self.section_commands_by_level;
/* 000256 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000256 */ 			}) ();
/* 000256 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000256 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000256 */ 				var level = __left0__ [0];
/* 000256 */ 				var sectioncmdspec = __left0__ [1];
/* 000256 */ 				(function () {
/* 000256 */ 					var __accu1__ = __accu0__;
/* 000251 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (HeadingMacro, null, __kwargtrans__ ({macroname: sectioncmdspec.cmdname, heading_level: level, inline_heading: sectioncmdspec.inline})));
/* 000251 */ 				}) ();
/* 000251 */ 			}
/* 000251 */ 			return __accu0__;
/* 000251 */ 		}) ()}));
/* 000251 */ 	});}
/* 000251 */ });
/* 000264 */ export var FeatureClass = FeatureHeadings;
/* 000006 */ 
//# sourceMappingURL=flm.feature.headings.map