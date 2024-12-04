/* 000001 */ // Transcrypt'ed from Python, 2024-12-04 22:08:15
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
/* 000006 */ export {flmspecinfo, refs, LatexArgumentSpec, Feature, ParsedArgumentsInfo};
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
/* 000081 */ 			return __call__ (__accu0__.ReferenceableInfo, __accu0__, __kwargtrans__ ({kind: 'heading', formatted_ref_flm_text: heading_flm_text, labels: node.flmarg_labels}));
/* 000081 */ 		}) ()];
/* 000081 */ 	});},
/* 000089 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000089 */ 		if (arguments.length) {
/* 000089 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000089 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000089 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000089 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000089 */ 					switch (__attrib0__) {
/* 000089 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000089 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000089 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000089 */ 					}
/* 000089 */ 				}
/* 000089 */ 			}
/* 000089 */ 		}
/* 000089 */ 		else {
/* 000089 */ 		}
/* 000091 */ 		var headings_mgr = (function () {
/* 000091 */ 			var __accu0__ = render_context;
/* 000091 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'headings');
/* 000091 */ 		}) ();
/* 000093 */ 		var target_id = null;
/* 000095 */ 		if (__t__ (__call__ (hasattr, null, node, 'flm_heading_target_id'))) {
/* 000099 */ 			var target_id = node.flm_heading_target_id;
/* 000099 */ 		}
/* 000100 */ 		else {
/* 000102 */ 			var target_id = (function () {
/* 000102 */ 				var __accu0__ = __getitem__ (node.flm_referenceable_infos, 0);
/* 000102 */ 				return __call__ (__accu0__.get_target_id, __accu0__);
/* 000102 */ 			}) ();
/* 000103 */ 			if (__t__ (target_id === null)) {
/* 000104 */ 				var target_id = (function () {
/* 000104 */ 					var __accu0__ = headings_mgr;
/* 000104 */ 					return __call__ (__accu0__.get_default_target_id, __accu0__, node.flmarg_labels, node.flmarg_heading_content_nodelist, __kwargtrans__ ({node: node}));
/* 000104 */ 				}) ();
/* 000104 */ 			}
/* 000104 */ 		}
/* 000110 */ 		if (__t__ (__t__ ((function () {
/* 000110 */ 			var __accu0__ = render_context;
/* 000110 */ 			return __call__ (__accu0__.supports_feature, __accu0__, 'refs');
/* 000110 */ 		}) ()) && render_context.is_first_pass)) {
/* 000111 */ 			var refs_mgr = (function () {
/* 000111 */ 				var __accu0__ = render_context;
/* 000111 */ 				return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000111 */ 			}) ();
/* 000112 */ 			var __iterable0__ = node.flm_referenceable_infos;
/* 000112 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000112 */ 				var flm_referenceable_info = __getitem__ (__iterable0__, __index0__);
/* 000113 */ 				(function () {
/* 000113 */ 					var __accu0__ = refs_mgr;
/* 000113 */ 					return __call__ (__accu0__.register_reference_referenceable, __accu0__, __kwargtrans__ ({node: node, referenceable_info: flm_referenceable_info}));
/* 000113 */ 				}) ();
/* 000113 */ 			}
/* 000113 */ 		}
/* 000118 */ 		return (function () {
/* 000118 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000118 */ 			return __call__ (__accu0__.render_heading, __accu0__, node.flmarg_heading_content_nodelist, __kwargtrans__ ({render_context: render_context, heading_level: self.heading_level, inline_heading: self.inline_heading, target_id: target_id}));
/* 000118 */ 		}) ();
/* 000118 */ 	});},
/* 000127 */ 	get recompose_pure_latex () {return __get__ (this, function (self, node, recomposer, visited_results_arguments) {
/* 000127 */ 		var kwargs = dict ();
/* 000127 */ 		if (arguments.length) {
/* 000127 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000127 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000127 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000127 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000127 */ 					switch (__attrib0__) {
/* 000127 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000127 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000127 */ 						case 'recomposer': var recomposer = __allkwargs0__ [__attrib0__]; break;
/* 000127 */ 						case 'visited_results_arguments': var visited_results_arguments = __allkwargs0__ [__attrib0__]; break;
/* 000127 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000127 */ 					}
/* 000127 */ 				}
/* 000127 */ 				delete kwargs.__kwargtrans__;
/* 000127 */ 			}
/* 000127 */ 		}
/* 000127 */ 		else {
/* 000127 */ 		}
/* 000129 */ 		var heading_macroname = node.macroname;
/* 000131 */ 		var recopt_cells = (function () {
/* 000131 */ 			var __accu0__ = recomposer;
/* 000131 */ 			return __call__ (__accu0__.get_options, __accu0__, 'headings');
/* 000131 */ 		}) ();
/* 000132 */ 		var heading_macroname_mapping = (function () {
/* 000132 */ 			var __accu0__ = recopt_cells;
/* 000132 */ 			return __call__ (__accu0__.py_get, __accu0__, 'macroname_mapping', null);
/* 000132 */ 		}) ();
/* 000133 */ 		if (__t__ (heading_macroname_mapping)) {
/* 000134 */ 			if (__t__ (__in__ (heading_macroname, heading_macroname_mapping))) {
/* 000135 */ 				var heading_macroname = __getitem__ (heading_macroname_mapping, heading_macroname);
/* 000135 */ 			}
/* 000135 */ 		}
/* 000137 */ 		var s = __add__ ('\\', heading_macroname);
/* 000145 */ 		if (__t__ (__getitem__ (visited_results_arguments, 0) !== null)) {
/* 000146 */ 			var s = __call__ (__iadd__, null, s, __getitem__ (visited_results_arguments, 0));
/* 000146 */ 		}
/* 000148 */ 		if (__t__ (__getitem__ (visited_results_arguments, 1) !== null)) {
/* 000149 */ 			var s = __call__ (__iadd__, null, s, __getitem__ (visited_results_arguments, 1));
/* 000149 */ 		}
/* 000152 */ 		var __iterable0__ = node.flmarg_labels;
/* 000152 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000152 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000152 */ 			var ref_type = __left0__ [0];
/* 000152 */ 			var ref_label = __left0__ [1];
/* 000153 */ 			var safe_label_info = (function () {
/* 000153 */ 				var __accu0__ = recomposer;
/* 000153 */ 				return __call__ (__accu0__.make_safe_label, __accu0__, 'ref', ref_type, ref_label);
/* 000153 */ 			}) ();
/* 000154 */ 			var s = __call__ (__iadd__, null, s, __add__ (__add__ ('\\label{', __getitem__ (safe_label_info, 'safe_label')), '}'));
/* 000154 */ 		}
/* 000156 */ 		return s;
/* 000156 */ 	});}
/* 000156 */ });
/* 000160 */ export var FeatureHeadings =  __class__ ('FeatureHeadings', [Feature], {
/* 000160 */ 	__module__: __name__,
/* 000166 */ 	feature_name: 'headings',
/* 000167 */ 	feature_title: 'Headings: sections, paragraphs',
/* 000172 */ 	feature_optional_dependencies: ['refs'],
/* 000172 */ 	RenderManager: __class__ ('RenderManager', [Feature.RenderManager], {
/* 000172 */ 		__module__: __name__,
/* 000175 */ 		get initialize () {return __get__ (this, function (self) {
/* 000175 */ 			if (arguments.length) {
/* 000175 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000175 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000175 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000175 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000175 */ 						switch (__attrib0__) {
/* 000175 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000175 */ 						}
/* 000175 */ 					}
/* 000175 */ 				}
/* 000175 */ 			}
/* 000175 */ 			else {
/* 000175 */ 			}
/* 000176 */ 			self.target_id_counters = dict ({});
/* 000177 */ 			self.target_ids = dict ({});
/* 000177 */ 		});},
/* 000180 */ 		get get_default_target_id () {return __get__ (this, function (self, heading_labels, heading_content_nodelist) {
/* 000180 */ 			if (arguments.length) {
/* 000180 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000180 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000180 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000180 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000180 */ 						switch (__attrib0__) {
/* 000180 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000180 */ 							case 'heading_labels': var heading_labels = __allkwargs0__ [__attrib0__]; break;
/* 000180 */ 							case 'heading_content_nodelist': var heading_content_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000180 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000180 */ 						}
/* 000180 */ 					}
/* 000180 */ 				}
/* 000180 */ 			}
/* 000180 */ 			else {
/* 000180 */ 			}
/* 000182 */ 			var node_id = (function () {
/* 000182 */ 				var __accu0__ = self;
/* 000182 */ 				return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000182 */ 			}) ();
/* 000184 */ 			if (__t__ (__in__ (node_id, self.target_ids))) {
/* 000185 */ 				return __getitem__ (self.target_ids, node_id);
/* 000185 */ 			}
/* 000187 */ 			var tgtid = (function () {
/* 000187 */ 				var __accu0__ = self;
/* 000187 */ 				return __call__ (__accu0__._generate_default_target_id, __accu0__, heading_labels, heading_content_nodelist);
/* 000187 */ 			}) ();
/* 000188 */ 			__setitem__ (self.target_ids, node_id, tgtid);
/* 000189 */ 			return tgtid;
/* 000189 */ 		});},
/* 000191 */ 		get _generate_default_target_id () {return __get__ (this, function (self, heading_labels, heading_content_nodelist) {
/* 000191 */ 			if (arguments.length) {
/* 000191 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000191 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000191 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000191 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000191 */ 						switch (__attrib0__) {
/* 000191 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000191 */ 							case 'heading_labels': var heading_labels = __allkwargs0__ [__attrib0__]; break;
/* 000191 */ 							case 'heading_content_nodelist': var heading_content_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000191 */ 						}
/* 000191 */ 					}
/* 000191 */ 				}
/* 000191 */ 			}
/* 000191 */ 			else {
/* 000191 */ 			}
/* 000194 */ 			var tgtid = (function () {
/* 000194 */ 				var __accu0__ = (function () {
/* 000194 */ 					var __accu1__ = heading_content_nodelist;
/* 000194 */ 					return __call__ (__accu1__.latex_verbatim, __accu1__);
/* 000194 */ 				}) ();
/* 000194 */ 				return __call__ (__accu0__.strip, __accu0__);
/* 000194 */ 			}) ();
/* 000195 */ 			var tgtid = (function () {
/* 000195 */ 				var __accu0__ = re;
/* 000195 */ 				return __call__ (__accu0__.sub, __accu0__, '[^A-Za-z0-9_-]+', '-', tgtid);
/* 000195 */ 			}) ();
/* 000196 */ 			var tgtid = 'sec--{}'.format (tgtid);
/* 000197 */ 			var tgtid = __getslice__ (tgtid, 0, 32, 1);
/* 000198 */ 			if (__t__ (__in__ (tgtid, self.target_id_counters))) {
/* 000199 */ 				__setitem__ (self.target_id_counters, tgtid, __call__ (__iadd__, null, __getitem__ (self.target_id_counters, tgtid), 1));
/* 000200 */ 				return '{}-{}'.format (tgtid, __getitem__ (self.target_id_counters, tgtid));
/* 000200 */ 			}
/* 000202 */ 			__setitem__ (self.target_id_counters, tgtid, 1);
/* 000203 */ 			return tgtid;
/* 000203 */ 		});}
/* 000206 */ 	}),
/* 000206 */ 	SectionCommandInfo: __class__ ('SectionCommandInfo', [object], {
/* 000206 */ 		__module__: __name__,
/* 000207 */ 		get __init__ () {return __get__ (this, function (self, cmdname, inline) {
/* 000207 */ 			if (typeof inline == 'undefined' || (inline != null && inline.hasOwnProperty ("__kwargtrans__"))) {;
/* 000207 */ 				var inline = false;
/* 000207 */ 			};
/* 000207 */ 			if (arguments.length) {
/* 000207 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000207 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000207 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000207 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000207 */ 						switch (__attrib0__) {
/* 000207 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000207 */ 							case 'cmdname': var cmdname = __allkwargs0__ [__attrib0__]; break;
/* 000207 */ 							case 'inline': var inline = __allkwargs0__ [__attrib0__]; break;
/* 000207 */ 						}
/* 000207 */ 					}
/* 000207 */ 				}
/* 000207 */ 			}
/* 000207 */ 			else {
/* 000207 */ 			}
/* 000208 */ 			__call__ (__call__ (__super__, null, FeatureHeadings.SectionCommandInfo, '__init__'), null, self);
/* 000209 */ 			self.cmdname = cmdname;
/* 000210 */ 			self.inline = inline;
/* 000210 */ 		});},
/* 000212 */ 		get __repr__ () {return __get__ (this, function (self) {
/* 000212 */ 			if (arguments.length) {
/* 000212 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000212 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000212 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000212 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000212 */ 						switch (__attrib0__) {
/* 000212 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000212 */ 						}
/* 000212 */ 					}
/* 000212 */ 				}
/* 000212 */ 			}
/* 000212 */ 			else {
/* 000212 */ 			}
/* 000213 */ 			return '{}(cmdname={}, inline={})'.format (self.__class__.__name__, self.cmdname, self.inline);
/* 000213 */ 		});}
/* 000213 */ 	}),
/* 000218 */ 	get __init__ () {return __get__ (this, function (self, section_commands_by_level) {
/* 000218 */ 		if (typeof section_commands_by_level == 'undefined' || (section_commands_by_level != null && section_commands_by_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000218 */ 			var section_commands_by_level = null;
/* 000218 */ 		};
/* 000218 */ 		if (arguments.length) {
/* 000218 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000218 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000218 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000218 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000218 */ 					switch (__attrib0__) {
/* 000218 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000218 */ 						case 'section_commands_by_level': var section_commands_by_level = __allkwargs0__ [__attrib0__]; break;
/* 000218 */ 					}
/* 000218 */ 				}
/* 000218 */ 			}
/* 000218 */ 		}
/* 000218 */ 		else {
/* 000218 */ 		}
/* 000219 */ 		__call__ (__call__ (__super__, null, FeatureHeadings, '__init__'), null, self);
/* 000220 */ 		if (__t__ (section_commands_by_level === null)) {
/* 000222 */ 			var section_commands_by_level = dict ({1: (function () {
/* 000222 */ 				var __accu0__ = self;
/* 000222 */ 				return __call__ (__accu0__.SectionCommandInfo, __accu0__, 'section');
/* 000223 */ 			}) (), 2: (function () {
/* 000223 */ 				var __accu0__ = self;
/* 000223 */ 				return __call__ (__accu0__.SectionCommandInfo, __accu0__, 'subsection');
/* 000224 */ 			}) (), 3: (function () {
/* 000224 */ 				var __accu0__ = self;
/* 000224 */ 				return __call__ (__accu0__.SectionCommandInfo, __accu0__, 'subsubsection');
/* 000225 */ 			}) (), 4: (function () {
/* 000225 */ 				var __accu0__ = self;
/* 000225 */ 				return __call__ (__accu0__.SectionCommandInfo, __accu0__, 'paragraph', __kwargtrans__ ({inline: true}));
/* 000226 */ 			}) (), 5: (function () {
/* 000226 */ 				var __accu0__ = self;
/* 000226 */ 				return __call__ (__accu0__.SectionCommandInfo, __accu0__, 'subparagraph', __kwargtrans__ ({inline: true}));
/* 000227 */ 			}) (), 6: (function () {
/* 000227 */ 				var __accu0__ = self;
/* 000227 */ 				return __call__ (__accu0__.SectionCommandInfo, __accu0__, 'subsubparagraph', __kwargtrans__ ({inline: true}));
/* 000227 */ 			}) ()});
/* 000227 */ 		}
/* 000232 */ 		self.section_commands_by_level = (function () {
/* 000232 */ 			var __accu0__ = [];
/* 000234 */ 			var __iterable0__ = (function () {
/* 000234 */ 				var __accu1__ = __call__ (dict, null, section_commands_by_level);
/* 000234 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000234 */ 			}) ();
/* 000234 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000234 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000234 */ 				var level = __left0__ [0];
/* 000234 */ 				var x = __left0__ [1];
/* 000234 */ 				(function () {
/* 000234 */ 					var __accu1__ = __accu0__;
/* 000233 */ 					return __call__ (__accu1__.append, __accu1__, [level, (function () {
/* 000233 */ 						var __accu2__ = self;
/* 000233 */ 						return __call__ (__accu2__._make_section_command_info, __accu2__, x);
/* 000233 */ 					}) ()]);
/* 000233 */ 				}) ();
/* 000233 */ 			}
/* 000233 */ 			return dict (__accu0__);
/* 000233 */ 		}) ();
/* 000233 */ 	});},
/* 000237 */ 	get _make_section_command_info () {return __get__ (this, function (self, x) {
/* 000237 */ 		if (arguments.length) {
/* 000237 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000237 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000237 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000237 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000237 */ 					switch (__attrib0__) {
/* 000237 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000237 */ 						case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000237 */ 					}
/* 000237 */ 				}
/* 000237 */ 			}
/* 000237 */ 		}
/* 000237 */ 		else {
/* 000237 */ 		}
/* 000243 */ 		if (__t__ (__call__ (isinstance, null, x, self.SectionCommandInfo))) {
/* 000244 */ 			return x;
/* 000244 */ 		}
/* 000245 */ 		if (__t__ (__call__ (isinstance, null, x, str))) {
/* 000246 */ 			return (function () {
/* 000246 */ 				var __accu0__ = self;
/* 000246 */ 				return __call__ (__accu0__.SectionCommandInfo, __accu0__, x);
/* 000246 */ 			}) ();
/* 000246 */ 		}
/* 000247 */ 		return (function () {
/* 000247 */ 			var __accu0__ = self;
/* 000247 */ 			return __call__ (__accu0__.SectionCommandInfo, __accu0__, __kwargtrans__ (x));
/* 000247 */ 		}) ();
/* 000247 */ 	});},
/* 000249 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000249 */ 		if (arguments.length) {
/* 000249 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000249 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000249 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000249 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000249 */ 					switch (__attrib0__) {
/* 000249 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000249 */ 					}
/* 000249 */ 				}
/* 000249 */ 			}
/* 000249 */ 		}
/* 000249 */ 		else {
/* 000249 */ 		}
/* 000250 */ 		return __call__ (dict, null, __kwargtrans__ ({macros: (function () {
/* 000250 */ 			var __accu0__ = [];
/* 000257 */ 			var __iterable0__ = (function () {
/* 000257 */ 				var __accu1__ = self.section_commands_by_level;
/* 000257 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000257 */ 			}) ();
/* 000257 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000257 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000257 */ 				var level = __left0__ [0];
/* 000257 */ 				var sectioncmdspec = __left0__ [1];
/* 000257 */ 				(function () {
/* 000257 */ 					var __accu1__ = __accu0__;
/* 000252 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (HeadingMacro, null, __kwargtrans__ ({macroname: sectioncmdspec.cmdname, heading_level: level, inline_heading: sectioncmdspec.inline})));
/* 000252 */ 				}) ();
/* 000252 */ 			}
/* 000252 */ 			return __accu0__;
/* 000252 */ 		}) ()}));
/* 000252 */ 	});}
/* 000252 */ });
/* 000265 */ export var FeatureClass = FeatureHeadings;
/* 000006 */ 
//# sourceMappingURL=flm.feature.headings.map