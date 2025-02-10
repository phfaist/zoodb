/* 000001 */ // Transcrypt'ed from Python, 2025-02-10 09:59:06
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
/* 000006 */ export {LatexArgumentSpec, ParsedArgumentsInfo, flmspecinfo, Feature, refs};
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
/* 000127 */ 	get recompose_pure_latex () {return __get__ (this, function (self, node, recomposer) {
/* 000127 */ 		if (arguments.length) {
/* 000127 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000127 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000127 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000127 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000127 */ 					switch (__attrib0__) {
/* 000127 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000127 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000127 */ 						case 'recomposer': var recomposer = __allkwargs0__ [__attrib0__]; break;
/* 000127 */ 					}
/* 000127 */ 				}
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
/* 000145 */ 		if (__t__ (node.nodeargd !== null)) {
/* 000147 */ 			if (__t__ (__getitem__ (node.nodeargd.argnlist, 0) !== null)) {
/* 000148 */ 				var s = __call__ (__iadd__, null, s, (function () {
/* 000148 */ 					var __accu0__ = recomposer;
/* 000148 */ 					return __call__ (__accu0__.subrecompose, __accu0__, __getitem__ (node.nodeargd.argnlist, 0));
/* 000148 */ 				}) ());
/* 000148 */ 			}
/* 000150 */ 			if (__t__ (__getitem__ (node.nodeargd.argnlist, 1) !== null)) {
/* 000151 */ 				var s = __call__ (__iadd__, null, s, (function () {
/* 000151 */ 					var __accu0__ = recomposer;
/* 000151 */ 					return __call__ (__accu0__.subrecompose, __accu0__, __getitem__ (node.nodeargd.argnlist, 1));
/* 000151 */ 				}) ());
/* 000151 */ 			}
/* 000151 */ 		}
/* 000154 */ 		var __iterable0__ = node.flmarg_labels;
/* 000154 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000154 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000154 */ 			var ref_type = __left0__ [0];
/* 000154 */ 			var ref_label = __left0__ [1];
/* 000155 */ 			var safe_label_info = (function () {
/* 000155 */ 				var __accu0__ = recomposer;
/* 000155 */ 				return __call__ (__accu0__.make_safe_label, __accu0__, 'ref', ref_type, ref_label);
/* 000155 */ 			}) ();
/* 000156 */ 			var s = __call__ (__iadd__, null, s, __add__ (__add__ ('\\label{', __getitem__ (safe_label_info, 'safe_label')), '}'));
/* 000156 */ 		}
/* 000158 */ 		return s;
/* 000158 */ 	});}
/* 000158 */ });
/* 000162 */ export var FeatureHeadings =  __class__ ('FeatureHeadings', [Feature], {
/* 000162 */ 	__module__: __name__,
/* 000168 */ 	feature_name: 'headings',
/* 000169 */ 	feature_title: 'Headings: sections, paragraphs',
/* 000174 */ 	feature_optional_dependencies: ['refs'],
/* 000174 */ 	RenderManager: __class__ ('RenderManager', [Feature.RenderManager], {
/* 000174 */ 		__module__: __name__,
/* 000177 */ 		get initialize () {return __get__ (this, function (self) {
/* 000177 */ 			if (arguments.length) {
/* 000177 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000177 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000177 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000177 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000177 */ 						switch (__attrib0__) {
/* 000177 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000177 */ 						}
/* 000177 */ 					}
/* 000177 */ 				}
/* 000177 */ 			}
/* 000177 */ 			else {
/* 000177 */ 			}
/* 000178 */ 			self.target_id_counters = dict ({});
/* 000179 */ 			self.target_ids = dict ({});
/* 000179 */ 		});},
/* 000182 */ 		get get_default_target_id () {return __get__ (this, function (self, heading_labels, heading_content_nodelist) {
/* 000182 */ 			if (arguments.length) {
/* 000182 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000182 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000182 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000182 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000182 */ 						switch (__attrib0__) {
/* 000182 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000182 */ 							case 'heading_labels': var heading_labels = __allkwargs0__ [__attrib0__]; break;
/* 000182 */ 							case 'heading_content_nodelist': var heading_content_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000182 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000182 */ 						}
/* 000182 */ 					}
/* 000182 */ 				}
/* 000182 */ 			}
/* 000182 */ 			else {
/* 000182 */ 			}
/* 000184 */ 			var node_id = (function () {
/* 000184 */ 				var __accu0__ = self;
/* 000184 */ 				return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000184 */ 			}) ();
/* 000186 */ 			if (__t__ (__in__ (node_id, self.target_ids))) {
/* 000187 */ 				return __getitem__ (self.target_ids, node_id);
/* 000187 */ 			}
/* 000189 */ 			var tgtid = (function () {
/* 000189 */ 				var __accu0__ = self;
/* 000189 */ 				return __call__ (__accu0__._generate_default_target_id, __accu0__, heading_labels, heading_content_nodelist);
/* 000189 */ 			}) ();
/* 000190 */ 			__setitem__ (self.target_ids, node_id, tgtid);
/* 000191 */ 			return tgtid;
/* 000191 */ 		});},
/* 000193 */ 		get _generate_default_target_id () {return __get__ (this, function (self, heading_labels, heading_content_nodelist) {
/* 000193 */ 			if (arguments.length) {
/* 000193 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000193 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000193 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000193 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000193 */ 						switch (__attrib0__) {
/* 000193 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000193 */ 							case 'heading_labels': var heading_labels = __allkwargs0__ [__attrib0__]; break;
/* 000193 */ 							case 'heading_content_nodelist': var heading_content_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000193 */ 						}
/* 000193 */ 					}
/* 000193 */ 				}
/* 000193 */ 			}
/* 000193 */ 			else {
/* 000193 */ 			}
/* 000196 */ 			var tgtid = (function () {
/* 000196 */ 				var __accu0__ = (function () {
/* 000196 */ 					var __accu1__ = heading_content_nodelist;
/* 000196 */ 					return __call__ (__accu1__.latex_verbatim, __accu1__);
/* 000196 */ 				}) ();
/* 000196 */ 				return __call__ (__accu0__.strip, __accu0__);
/* 000196 */ 			}) ();
/* 000197 */ 			var tgtid = (function () {
/* 000197 */ 				var __accu0__ = re;
/* 000197 */ 				return __call__ (__accu0__.sub, __accu0__, '[^A-Za-z0-9_-]+', '-', tgtid);
/* 000197 */ 			}) ();
/* 000198 */ 			var tgtid = 'sec--{}'.format (tgtid);
/* 000199 */ 			var tgtid = __getslice__ (tgtid, 0, 32, 1);
/* 000200 */ 			if (__t__ (__in__ (tgtid, self.target_id_counters))) {
/* 000201 */ 				__setitem__ (self.target_id_counters, tgtid, __call__ (__iadd__, null, __getitem__ (self.target_id_counters, tgtid), 1));
/* 000202 */ 				return '{}-{}'.format (tgtid, __getitem__ (self.target_id_counters, tgtid));
/* 000202 */ 			}
/* 000204 */ 			__setitem__ (self.target_id_counters, tgtid, 1);
/* 000205 */ 			return tgtid;
/* 000205 */ 		});}
/* 000208 */ 	}),
/* 000208 */ 	SectionCommandInfo: __class__ ('SectionCommandInfo', [object], {
/* 000208 */ 		__module__: __name__,
/* 000209 */ 		get __init__ () {return __get__ (this, function (self, cmdname, inline) {
/* 000209 */ 			if (typeof inline == 'undefined' || (inline != null && inline.hasOwnProperty ("__kwargtrans__"))) {;
/* 000209 */ 				var inline = false;
/* 000209 */ 			};
/* 000209 */ 			if (arguments.length) {
/* 000209 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000209 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000209 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000209 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000209 */ 						switch (__attrib0__) {
/* 000209 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000209 */ 							case 'cmdname': var cmdname = __allkwargs0__ [__attrib0__]; break;
/* 000209 */ 							case 'inline': var inline = __allkwargs0__ [__attrib0__]; break;
/* 000209 */ 						}
/* 000209 */ 					}
/* 000209 */ 				}
/* 000209 */ 			}
/* 000209 */ 			else {
/* 000209 */ 			}
/* 000210 */ 			__call__ (__call__ (__super__, null, FeatureHeadings.SectionCommandInfo, '__init__'), null, self);
/* 000211 */ 			self.cmdname = cmdname;
/* 000212 */ 			self.inline = inline;
/* 000212 */ 		});},
/* 000214 */ 		get __repr__ () {return __get__ (this, function (self) {
/* 000214 */ 			if (arguments.length) {
/* 000214 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000214 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000214 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000214 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000214 */ 						switch (__attrib0__) {
/* 000214 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000214 */ 						}
/* 000214 */ 					}
/* 000214 */ 				}
/* 000214 */ 			}
/* 000214 */ 			else {
/* 000214 */ 			}
/* 000215 */ 			return '{}(cmdname={}, inline={})'.format (self.__class__.__name__, self.cmdname, self.inline);
/* 000215 */ 		});}
/* 000215 */ 	}),
/* 000220 */ 	get __init__ () {return __get__ (this, function (self, section_commands_by_level) {
/* 000220 */ 		if (typeof section_commands_by_level == 'undefined' || (section_commands_by_level != null && section_commands_by_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000220 */ 			var section_commands_by_level = null;
/* 000220 */ 		};
/* 000220 */ 		if (arguments.length) {
/* 000220 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000220 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000220 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000220 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000220 */ 					switch (__attrib0__) {
/* 000220 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000220 */ 						case 'section_commands_by_level': var section_commands_by_level = __allkwargs0__ [__attrib0__]; break;
/* 000220 */ 					}
/* 000220 */ 				}
/* 000220 */ 			}
/* 000220 */ 		}
/* 000220 */ 		else {
/* 000220 */ 		}
/* 000221 */ 		__call__ (__call__ (__super__, null, FeatureHeadings, '__init__'), null, self);
/* 000222 */ 		if (__t__ (section_commands_by_level === null)) {
/* 000224 */ 			var section_commands_by_level = dict ({1: (function () {
/* 000224 */ 				var __accu0__ = self;
/* 000224 */ 				return __call__ (__accu0__.SectionCommandInfo, __accu0__, 'section');
/* 000225 */ 			}) (), 2: (function () {
/* 000225 */ 				var __accu0__ = self;
/* 000225 */ 				return __call__ (__accu0__.SectionCommandInfo, __accu0__, 'subsection');
/* 000226 */ 			}) (), 3: (function () {
/* 000226 */ 				var __accu0__ = self;
/* 000226 */ 				return __call__ (__accu0__.SectionCommandInfo, __accu0__, 'subsubsection');
/* 000227 */ 			}) (), 4: (function () {
/* 000227 */ 				var __accu0__ = self;
/* 000227 */ 				return __call__ (__accu0__.SectionCommandInfo, __accu0__, 'paragraph', __kwargtrans__ ({inline: true}));
/* 000228 */ 			}) (), 5: (function () {
/* 000228 */ 				var __accu0__ = self;
/* 000228 */ 				return __call__ (__accu0__.SectionCommandInfo, __accu0__, 'subparagraph', __kwargtrans__ ({inline: true}));
/* 000229 */ 			}) (), 6: (function () {
/* 000229 */ 				var __accu0__ = self;
/* 000229 */ 				return __call__ (__accu0__.SectionCommandInfo, __accu0__, 'subsubparagraph', __kwargtrans__ ({inline: true}));
/* 000229 */ 			}) ()});
/* 000229 */ 		}
/* 000234 */ 		self.section_commands_by_level = (function () {
/* 000234 */ 			var __accu0__ = [];
/* 000236 */ 			var __iterable0__ = (function () {
/* 000236 */ 				var __accu1__ = __call__ (dict, null, section_commands_by_level);
/* 000236 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000236 */ 			}) ();
/* 000236 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000236 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000236 */ 				var level = __left0__ [0];
/* 000236 */ 				var x = __left0__ [1];
/* 000236 */ 				(function () {
/* 000236 */ 					var __accu1__ = __accu0__;
/* 000235 */ 					return __call__ (__accu1__.append, __accu1__, [level, (function () {
/* 000235 */ 						var __accu2__ = self;
/* 000235 */ 						return __call__ (__accu2__._make_section_command_info, __accu2__, x);
/* 000235 */ 					}) ()]);
/* 000235 */ 				}) ();
/* 000235 */ 			}
/* 000235 */ 			return dict (__accu0__);
/* 000235 */ 		}) ();
/* 000235 */ 	});},
/* 000239 */ 	get _make_section_command_info () {return __get__ (this, function (self, x) {
/* 000239 */ 		if (arguments.length) {
/* 000239 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000239 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000239 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000239 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000239 */ 					switch (__attrib0__) {
/* 000239 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000239 */ 						case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000239 */ 					}
/* 000239 */ 				}
/* 000239 */ 			}
/* 000239 */ 		}
/* 000239 */ 		else {
/* 000239 */ 		}
/* 000245 */ 		if (__t__ (__call__ (isinstance, null, x, self.SectionCommandInfo))) {
/* 000246 */ 			return x;
/* 000246 */ 		}
/* 000247 */ 		if (__t__ (__call__ (isinstance, null, x, str))) {
/* 000248 */ 			return (function () {
/* 000248 */ 				var __accu0__ = self;
/* 000248 */ 				return __call__ (__accu0__.SectionCommandInfo, __accu0__, x);
/* 000248 */ 			}) ();
/* 000248 */ 		}
/* 000249 */ 		return (function () {
/* 000249 */ 			var __accu0__ = self;
/* 000249 */ 			return __call__ (__accu0__.SectionCommandInfo, __accu0__, __kwargtrans__ (x));
/* 000249 */ 		}) ();
/* 000249 */ 	});},
/* 000251 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000251 */ 		if (arguments.length) {
/* 000251 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000251 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000251 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000251 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000251 */ 					switch (__attrib0__) {
/* 000251 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000251 */ 					}
/* 000251 */ 				}
/* 000251 */ 			}
/* 000251 */ 		}
/* 000251 */ 		else {
/* 000251 */ 		}
/* 000252 */ 		return __call__ (dict, null, __kwargtrans__ ({macros: (function () {
/* 000252 */ 			var __accu0__ = [];
/* 000259 */ 			var __iterable0__ = (function () {
/* 000259 */ 				var __accu1__ = self.section_commands_by_level;
/* 000259 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000259 */ 			}) ();
/* 000259 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000259 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000259 */ 				var level = __left0__ [0];
/* 000259 */ 				var sectioncmdspec = __left0__ [1];
/* 000259 */ 				(function () {
/* 000259 */ 					var __accu1__ = __accu0__;
/* 000254 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (HeadingMacro, null, __kwargtrans__ ({macroname: sectioncmdspec.cmdname, heading_level: level, inline_heading: sectioncmdspec.inline})));
/* 000254 */ 				}) ();
/* 000254 */ 			}
/* 000254 */ 			return __accu0__;
/* 000254 */ 		}) ()}));
/* 000254 */ 	});}
/* 000254 */ });
/* 000267 */ export var FeatureClass = FeatureHeadings;
/* 000006 */ 
//# sourceMappingURL=flm.feature.headings.map