/* 000001 */ // Transcrypt'ed from Python, 2023-05-13 12:17:29
/* 000006 */ var logging = {};
/* 000006 */ var re = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000019 */ import * as refs from './flm.feature.refs.js';
/* 000017 */ import {Feature} from './flm.feature._base.js';
/* 000014 */ import * as flmspecinfo from './flm.flmspecinfo.js';
/* 000010 */ import {ParsedArgumentsInfo} from './pylatexenc.latexnodes.js';
/* 000007 */ import * as __module_logging__ from './logging.js';
/* 000007 */ __nest__ (logging, '', __module_logging__);
/* 000006 */ import * as __module_re__ from './re.js';
/* 000006 */ __nest__ (re, '', __module_re__);
/* 000006 */ export {Feature, ParsedArgumentsInfo, flmspecinfo, refs};
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
/* 000044 */ 		__call__ (__call__ (__super__, null, HeadingMacro, '__init__'), null, self, macroname, __kwargtrans__ ({arguments_spec_list: [flmspecinfo.text_arg, flmspecinfo.label_arg]}));
/* 000048 */ 		self.heading_level = heading_level;
/* 000049 */ 		self.inline_heading = inline_heading;
/* 000051 */ 		self.is_block_heading = self.inline_heading;
/* 000051 */ 	});},
/* 000053 */ 	get get_flm_doc () {return __get__ (this, function (self) {
/* 000053 */ 		if (arguments.length) {
/* 000053 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000053 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000053 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000053 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000053 */ 					switch (__attrib0__) {
/* 000053 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000053 */ 					}
/* 000053 */ 				}
/* 000053 */ 			}
/* 000053 */ 		}
/* 000053 */ 		else {
/* 000053 */ 		}
/* 000054 */ 		return 'Create a{} heading at level {}'.format ((__t__ (self.inline_heading) ? 'n inline' : ''), self.heading_level);
/* 000054 */ 	});},
/* 000059 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000059 */ 		if (arguments.length) {
/* 000059 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000059 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000059 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000059 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000059 */ 					switch (__attrib0__) {
/* 000059 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000059 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000059 */ 					}
/* 000059 */ 				}
/* 000059 */ 			}
/* 000059 */ 		}
/* 000059 */ 		else {
/* 000059 */ 		}
/* 000061 */ 		var node_args = (function () {
/* 000061 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000061 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['text', 'label']));
/* 000061 */ 		}) ();
/* 000065 */ 		node.flmarg_heading_content_nodelist = (function () {
/* 000065 */ 			var __accu0__ = __getitem__ (node_args, 'text');
/* 000065 */ 			return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000065 */ 		}) ();
/* 000067 */ 		node.flmarg_labels = (function () {
/* 000067 */ 			var __accu0__ = flmspecinfo;
/* 000067 */ 			return __call__ (__accu0__.helper_collect_labels, __accu0__, __getitem__ (node_args, 'label'), self.allowed_ref_label_prefixes);
/* 000067 */ 		}) ();
/* 000073 */ 		node.flm_referenceable_infos = [(function () {
/* 000073 */ 			var __accu0__ = refs;
/* 000073 */ 			return __call__ (__accu0__.ReferenceableInfo, __accu0__, __kwargtrans__ ({formatted_ref_flm_text: node.flmarg_heading_content_nodelist, labels: node.flmarg_labels}));
/* 000073 */ 		}) ()];
/* 000073 */ 	});},
/* 000080 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000080 */ 		if (arguments.length) {
/* 000080 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000080 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000080 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000080 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000080 */ 					switch (__attrib0__) {
/* 000080 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000080 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000080 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000080 */ 					}
/* 000080 */ 				}
/* 000080 */ 			}
/* 000080 */ 		}
/* 000080 */ 		else {
/* 000080 */ 		}
/* 000082 */ 		var headings_mgr = (function () {
/* 000082 */ 			var __accu0__ = render_context;
/* 000082 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'headings');
/* 000082 */ 		}) ();
/* 000084 */ 		var target_id = null;
/* 000086 */ 		if (__t__ (__call__ (hasattr, null, node, 'flm_heading_target_id'))) {
/* 000090 */ 			var target_id = node.flm_heading_target_id;
/* 000090 */ 		}
/* 000091 */ 		else {
/* 000093 */ 			var target_id = (function () {
/* 000093 */ 				var __accu0__ = __getitem__ (node.flm_referenceable_infos, 0);
/* 000093 */ 				return __call__ (__accu0__.get_target_id, __accu0__);
/* 000093 */ 			}) ();
/* 000094 */ 			if (__t__ (target_id === null)) {
/* 000095 */ 				var target_id = (function () {
/* 000095 */ 					var __accu0__ = headings_mgr;
/* 000095 */ 					return __call__ (__accu0__.get_default_target_id, __accu0__, node.flmarg_labels, node.flmarg_heading_content_nodelist, __kwargtrans__ ({node: node}));
/* 000095 */ 				}) ();
/* 000095 */ 			}
/* 000095 */ 		}
/* 000101 */ 		if (__t__ (__t__ ((function () {
/* 000101 */ 			var __accu0__ = render_context;
/* 000101 */ 			return __call__ (__accu0__.supports_feature, __accu0__, 'refs');
/* 000101 */ 		}) ()) && render_context.is_first_pass)) {
/* 000102 */ 			var refs_mgr = (function () {
/* 000102 */ 				var __accu0__ = render_context;
/* 000102 */ 				return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000102 */ 			}) ();
/* 000103 */ 			var __iterable0__ = node.flm_referenceable_infos;
/* 000103 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000103 */ 				var flm_referenceable_info = __getitem__ (__iterable0__, __index0__);
/* 000104 */ 				(function () {
/* 000104 */ 					var __accu0__ = refs_mgr;
/* 000104 */ 					return __call__ (__accu0__.register_reference_referenceable, __accu0__, __kwargtrans__ ({node: node, referenceable_info: flm_referenceable_info}));
/* 000104 */ 				}) ();
/* 000104 */ 			}
/* 000104 */ 		}
/* 000109 */ 		return (function () {
/* 000109 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000109 */ 			return __call__ (__accu0__.render_heading, __accu0__, node.flmarg_heading_content_nodelist, __kwargtrans__ ({render_context: render_context, heading_level: self.heading_level, inline_heading: self.inline_heading, target_id: target_id}));
/* 000109 */ 		}) ();
/* 000109 */ 	});}
/* 000109 */ });
/* 000122 */ export var FeatureHeadings =  __class__ ('FeatureHeadings', [Feature], {
/* 000122 */ 	__module__: __name__,
/* 000128 */ 	feature_name: 'headings',
/* 000129 */ 	feature_title: 'Headings: sections, paragraphs',
/* 000134 */ 	feature_optional_dependencies: ['refs'],
/* 000134 */ 	RenderManager: __class__ ('RenderManager', [Feature.RenderManager], {
/* 000134 */ 		__module__: __name__,
/* 000137 */ 		get initialize () {return __get__ (this, function (self) {
/* 000137 */ 			if (arguments.length) {
/* 000137 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000137 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000137 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000137 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000137 */ 						switch (__attrib0__) {
/* 000137 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000137 */ 						}
/* 000137 */ 					}
/* 000137 */ 				}
/* 000137 */ 			}
/* 000137 */ 			else {
/* 000137 */ 			}
/* 000138 */ 			self.target_id_counters = dict ({});
/* 000139 */ 			self.target_ids = dict ({});
/* 000139 */ 		});},
/* 000142 */ 		get get_default_target_id () {return __get__ (this, function (self, heading_labels, heading_content_nodelist) {
/* 000142 */ 			if (arguments.length) {
/* 000142 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000142 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000142 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000142 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000142 */ 						switch (__attrib0__) {
/* 000142 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000142 */ 							case 'heading_labels': var heading_labels = __allkwargs0__ [__attrib0__]; break;
/* 000142 */ 							case 'heading_content_nodelist': var heading_content_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000142 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000142 */ 						}
/* 000142 */ 					}
/* 000142 */ 				}
/* 000142 */ 			}
/* 000142 */ 			else {
/* 000142 */ 			}
/* 000144 */ 			var node_id = (function () {
/* 000144 */ 				var __accu0__ = self;
/* 000144 */ 				return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000144 */ 			}) ();
/* 000146 */ 			if (__t__ (__in__ (node_id, self.target_ids))) {
/* 000147 */ 				return __getitem__ (self.target_ids, node_id);
/* 000147 */ 			}
/* 000149 */ 			var tgtid = (function () {
/* 000149 */ 				var __accu0__ = self;
/* 000149 */ 				return __call__ (__accu0__._generate_default_target_id, __accu0__, heading_labels, heading_content_nodelist);
/* 000149 */ 			}) ();
/* 000150 */ 			__setitem__ (self.target_ids, node_id, tgtid);
/* 000151 */ 			return tgtid;
/* 000151 */ 		});},
/* 000153 */ 		get _generate_default_target_id () {return __get__ (this, function (self, heading_labels, heading_content_nodelist) {
/* 000153 */ 			if (arguments.length) {
/* 000153 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000153 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000153 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000153 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000153 */ 						switch (__attrib0__) {
/* 000153 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000153 */ 							case 'heading_labels': var heading_labels = __allkwargs0__ [__attrib0__]; break;
/* 000153 */ 							case 'heading_content_nodelist': var heading_content_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000153 */ 						}
/* 000153 */ 					}
/* 000153 */ 				}
/* 000153 */ 			}
/* 000153 */ 			else {
/* 000153 */ 			}
/* 000156 */ 			var tgtid = (function () {
/* 000156 */ 				var __accu0__ = (function () {
/* 000156 */ 					var __accu1__ = heading_content_nodelist;
/* 000156 */ 					return __call__ (__accu1__.latex_verbatim, __accu1__);
/* 000156 */ 				}) ();
/* 000156 */ 				return __call__ (__accu0__.strip, __accu0__);
/* 000156 */ 			}) ();
/* 000157 */ 			var tgtid = (function () {
/* 000157 */ 				var __accu0__ = re;
/* 000157 */ 				return __call__ (__accu0__.sub, __accu0__, '[^A-Za-z0-9_-]+', '-', tgtid);
/* 000157 */ 			}) ();
/* 000158 */ 			var tgtid = 'sec--{}'.format (tgtid);
/* 000159 */ 			var tgtid = __getslice__ (tgtid, 0, 32, 1);
/* 000160 */ 			if (__t__ (__in__ (tgtid, self.target_id_counters))) {
/* 000161 */ 				__setitem__ (self.target_id_counters, tgtid, __call__ (__iadd__, null, __getitem__ (self.target_id_counters, tgtid), 1));
/* 000162 */ 				return '{}-{}'.format (tgtid, __getitem__ (self.target_id_counters, tgtid));
/* 000162 */ 			}
/* 000164 */ 			__setitem__ (self.target_id_counters, tgtid, 1);
/* 000165 */ 			return tgtid;
/* 000165 */ 		});}
/* 000168 */ 	}),
/* 000168 */ 	SectionCommandSpec: __class__ ('SectionCommandSpec', [object], {
/* 000168 */ 		__module__: __name__,
/* 000169 */ 		get __init__ () {return __get__ (this, function (self, cmdname, inline) {
/* 000169 */ 			if (typeof inline == 'undefined' || (inline != null && inline.hasOwnProperty ("__kwargtrans__"))) {;
/* 000169 */ 				var inline = false;
/* 000169 */ 			};
/* 000169 */ 			if (arguments.length) {
/* 000169 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000169 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000169 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000169 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000169 */ 						switch (__attrib0__) {
/* 000169 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000169 */ 							case 'cmdname': var cmdname = __allkwargs0__ [__attrib0__]; break;
/* 000169 */ 							case 'inline': var inline = __allkwargs0__ [__attrib0__]; break;
/* 000169 */ 						}
/* 000169 */ 					}
/* 000169 */ 				}
/* 000169 */ 			}
/* 000169 */ 			else {
/* 000169 */ 			}
/* 000170 */ 			__call__ (__call__ (__super__, null, FeatureHeadings.SectionCommandSpec, '__init__'), null, self);
/* 000171 */ 			self.cmdname = cmdname;
/* 000172 */ 			self.inline = inline;
/* 000172 */ 		});},
/* 000173 */ 		get __repr__ () {return __get__ (this, function (self) {
/* 000173 */ 			if (arguments.length) {
/* 000173 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000173 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000173 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000173 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000173 */ 						switch (__attrib0__) {
/* 000173 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000173 */ 						}
/* 000173 */ 					}
/* 000173 */ 				}
/* 000173 */ 			}
/* 000173 */ 			else {
/* 000173 */ 			}
/* 000174 */ 			return '{}(cmdname={}, inline={})'.format (self.__class__.__name__, self.cmdname, self.inline);
/* 000174 */ 		});}
/* 000174 */ 	}),
/* 000179 */ 	get __init__ () {return __get__ (this, function (self, section_commands_by_level) {
/* 000179 */ 		if (typeof section_commands_by_level == 'undefined' || (section_commands_by_level != null && section_commands_by_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000179 */ 			var section_commands_by_level = null;
/* 000179 */ 		};
/* 000179 */ 		if (arguments.length) {
/* 000179 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000179 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000179 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000179 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000179 */ 					switch (__attrib0__) {
/* 000179 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000179 */ 						case 'section_commands_by_level': var section_commands_by_level = __allkwargs0__ [__attrib0__]; break;
/* 000179 */ 					}
/* 000179 */ 				}
/* 000179 */ 			}
/* 000179 */ 		}
/* 000179 */ 		else {
/* 000179 */ 		}
/* 000180 */ 		__call__ (__call__ (__super__, null, FeatureHeadings, '__init__'), null, self);
/* 000181 */ 		if (__t__ (section_commands_by_level === null)) {
/* 000183 */ 			var section_commands_by_level = dict ({1: (function () {
/* 000183 */ 				var __accu0__ = self;
/* 000183 */ 				return __call__ (__accu0__.SectionCommandSpec, __accu0__, 'section');
/* 000184 */ 			}) (), 2: (function () {
/* 000184 */ 				var __accu0__ = self;
/* 000184 */ 				return __call__ (__accu0__.SectionCommandSpec, __accu0__, 'subsection');
/* 000185 */ 			}) (), 3: (function () {
/* 000185 */ 				var __accu0__ = self;
/* 000185 */ 				return __call__ (__accu0__.SectionCommandSpec, __accu0__, 'subsubsection');
/* 000186 */ 			}) (), 4: (function () {
/* 000186 */ 				var __accu0__ = self;
/* 000186 */ 				return __call__ (__accu0__.SectionCommandSpec, __accu0__, 'paragraph', __kwargtrans__ ({inline: true}));
/* 000187 */ 			}) (), 5: (function () {
/* 000187 */ 				var __accu0__ = self;
/* 000187 */ 				return __call__ (__accu0__.SectionCommandSpec, __accu0__, 'subparagraph', __kwargtrans__ ({inline: true}));
/* 000188 */ 			}) (), 6: (function () {
/* 000188 */ 				var __accu0__ = self;
/* 000188 */ 				return __call__ (__accu0__.SectionCommandSpec, __accu0__, 'subsubparagraph', __kwargtrans__ ({inline: true}));
/* 000188 */ 			}) ()});
/* 000188 */ 		}
/* 000191 */ 		var _mkspecobj = function (x) {
/* 000191 */ 			if (arguments.length) {
/* 000191 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000191 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000191 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000191 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000191 */ 						switch (__attrib0__) {
/* 000191 */ 							case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000191 */ 						}
/* 000191 */ 					}
/* 000191 */ 				}
/* 000191 */ 			}
/* 000191 */ 			else {
/* 000191 */ 			}
/* 000192 */ 			if (__t__ (__call__ (isinstance, null, x, self.SectionCommandSpec))) {
/* 000193 */ 				return x;
/* 000193 */ 			}
/* 000194 */ 			if (__t__ (__call__ (isinstance, null, x, str))) {
/* 000195 */ 				return (function () {
/* 000195 */ 					var __accu0__ = self;
/* 000195 */ 					return __call__ (__accu0__.SectionCommandSpec, __accu0__, x);
/* 000195 */ 				}) ();
/* 000195 */ 			}
/* 000196 */ 			return (function () {
/* 000196 */ 				var __accu0__ = self;
/* 000196 */ 				return __call__ (__accu0__.SectionCommandSpec, __accu0__, __kwargtrans__ (x));
/* 000196 */ 			}) ();
/* 000196 */ 		};
/* 000200 */ 		self.section_commands_by_level = (function () {
/* 000200 */ 			var __accu0__ = [];
/* 000202 */ 			var __iterable0__ = (function () {
/* 000202 */ 				var __accu1__ = __call__ (dict, null, section_commands_by_level);
/* 000202 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000202 */ 			}) ();
/* 000202 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000202 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000202 */ 				var level = __left0__ [0];
/* 000202 */ 				var x = __left0__ [1];
/* 000202 */ 				(function () {
/* 000202 */ 					var __accu1__ = __accu0__;
/* 000201 */ 					return __call__ (__accu1__.append, __accu1__, [level, __call__ (_mkspecobj, null, x)]);
/* 000201 */ 				}) ();
/* 000201 */ 			}
/* 000201 */ 			return dict (__accu0__);
/* 000201 */ 		}) ();
/* 000201 */ 	});},
/* 000205 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000205 */ 		if (arguments.length) {
/* 000205 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000205 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000205 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000205 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000205 */ 					switch (__attrib0__) {
/* 000205 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000205 */ 					}
/* 000205 */ 				}
/* 000205 */ 			}
/* 000205 */ 		}
/* 000205 */ 		else {
/* 000205 */ 		}
/* 000206 */ 		return __call__ (dict, null, __kwargtrans__ ({macros: (function () {
/* 000206 */ 			var __accu0__ = [];
/* 000213 */ 			var __iterable0__ = (function () {
/* 000213 */ 				var __accu1__ = self.section_commands_by_level;
/* 000213 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000213 */ 			}) ();
/* 000213 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000213 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000213 */ 				var level = __left0__ [0];
/* 000213 */ 				var sectioncmdspec = __left0__ [1];
/* 000213 */ 				(function () {
/* 000213 */ 					var __accu1__ = __accu0__;
/* 000208 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (HeadingMacro, null, __kwargtrans__ ({macroname: sectioncmdspec.cmdname, heading_level: level, inline_heading: sectioncmdspec.inline})));
/* 000208 */ 				}) ();
/* 000208 */ 			}
/* 000208 */ 			return __accu0__;
/* 000208 */ 		}) ()}));
/* 000208 */ 	});}
/* 000208 */ });
/* 000221 */ export var FeatureClass = FeatureHeadings;
/* 000006 */ 
//# sourceMappingURL=flm.feature.headings.map