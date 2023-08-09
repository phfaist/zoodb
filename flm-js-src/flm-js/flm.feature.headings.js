/* 000001 */ // Transcrypt'ed from Python, 2023-08-09 15:47:09
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
/* 000006 */ export {Feature, refs, flmspecinfo, ParsedArgumentsInfo};
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
/* 000053 */ 	_fields: tuple (['macroname', 'heading_level', 'inline_heading']),
/* 000055 */ 	get get_flm_doc () {return __get__ (this, function (self) {
/* 000055 */ 		if (arguments.length) {
/* 000055 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000055 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000055 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000055 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000055 */ 					switch (__attrib0__) {
/* 000055 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000055 */ 					}
/* 000055 */ 				}
/* 000055 */ 			}
/* 000055 */ 		}
/* 000055 */ 		else {
/* 000055 */ 		}
/* 000056 */ 		return 'Create a{} heading at level {}'.format ((__t__ (self.inline_heading) ? 'n inline' : ''), self.heading_level);
/* 000056 */ 	});},
/* 000061 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000061 */ 		if (arguments.length) {
/* 000061 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000061 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000061 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000061 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000061 */ 					switch (__attrib0__) {
/* 000061 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000061 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000061 */ 					}
/* 000061 */ 				}
/* 000061 */ 			}
/* 000061 */ 		}
/* 000061 */ 		else {
/* 000061 */ 		}
/* 000063 */ 		var node_args = (function () {
/* 000063 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000063 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['text', 'label']));
/* 000063 */ 		}) ();
/* 000067 */ 		node.flmarg_heading_content_nodelist = (function () {
/* 000067 */ 			var __accu0__ = __getitem__ (node_args, 'text');
/* 000067 */ 			return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000067 */ 		}) ();
/* 000069 */ 		node.flmarg_labels = (function () {
/* 000069 */ 			var __accu0__ = flmspecinfo;
/* 000069 */ 			return __call__ (__accu0__.helper_collect_labels, __accu0__, __getitem__ (node_args, 'label'), self.allowed_ref_label_prefixes);
/* 000069 */ 		}) ();
/* 000075 */ 		node.flm_referenceable_infos = [(function () {
/* 000075 */ 			var __accu0__ = refs;
/* 000075 */ 			return __call__ (__accu0__.ReferenceableInfo, __accu0__, __kwargtrans__ ({formatted_ref_flm_text: node.flmarg_heading_content_nodelist, labels: node.flmarg_labels}));
/* 000075 */ 		}) ()];
/* 000075 */ 	});},
/* 000082 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000082 */ 		if (arguments.length) {
/* 000082 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000082 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000082 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000082 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000082 */ 					switch (__attrib0__) {
/* 000082 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000082 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000082 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000082 */ 					}
/* 000082 */ 				}
/* 000082 */ 			}
/* 000082 */ 		}
/* 000082 */ 		else {
/* 000082 */ 		}
/* 000084 */ 		var headings_mgr = (function () {
/* 000084 */ 			var __accu0__ = render_context;
/* 000084 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'headings');
/* 000084 */ 		}) ();
/* 000086 */ 		var target_id = null;
/* 000088 */ 		if (__t__ (__call__ (hasattr, null, node, 'flm_heading_target_id'))) {
/* 000092 */ 			var target_id = node.flm_heading_target_id;
/* 000092 */ 		}
/* 000093 */ 		else {
/* 000095 */ 			var target_id = (function () {
/* 000095 */ 				var __accu0__ = __getitem__ (node.flm_referenceable_infos, 0);
/* 000095 */ 				return __call__ (__accu0__.get_target_id, __accu0__);
/* 000095 */ 			}) ();
/* 000096 */ 			if (__t__ (target_id === null)) {
/* 000097 */ 				var target_id = (function () {
/* 000097 */ 					var __accu0__ = headings_mgr;
/* 000097 */ 					return __call__ (__accu0__.get_default_target_id, __accu0__, node.flmarg_labels, node.flmarg_heading_content_nodelist, __kwargtrans__ ({node: node}));
/* 000097 */ 				}) ();
/* 000097 */ 			}
/* 000097 */ 		}
/* 000103 */ 		if (__t__ (__t__ ((function () {
/* 000103 */ 			var __accu0__ = render_context;
/* 000103 */ 			return __call__ (__accu0__.supports_feature, __accu0__, 'refs');
/* 000103 */ 		}) ()) && render_context.is_first_pass)) {
/* 000104 */ 			var refs_mgr = (function () {
/* 000104 */ 				var __accu0__ = render_context;
/* 000104 */ 				return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000104 */ 			}) ();
/* 000105 */ 			var __iterable0__ = node.flm_referenceable_infos;
/* 000105 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000105 */ 				var flm_referenceable_info = __getitem__ (__iterable0__, __index0__);
/* 000106 */ 				(function () {
/* 000106 */ 					var __accu0__ = refs_mgr;
/* 000106 */ 					return __call__ (__accu0__.register_reference_referenceable, __accu0__, __kwargtrans__ ({node: node, referenceable_info: flm_referenceable_info}));
/* 000106 */ 				}) ();
/* 000106 */ 			}
/* 000106 */ 		}
/* 000111 */ 		return (function () {
/* 000111 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000111 */ 			return __call__ (__accu0__.render_heading, __accu0__, node.flmarg_heading_content_nodelist, __kwargtrans__ ({render_context: render_context, heading_level: self.heading_level, inline_heading: self.inline_heading, target_id: target_id}));
/* 000111 */ 		}) ();
/* 000111 */ 	});}
/* 000111 */ });
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
/* 000168 */ 	SectionCommandInfo: __class__ ('SectionCommandInfo', [object], {
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
/* 000170 */ 			__call__ (__call__ (__super__, null, FeatureHeadings.SectionCommandInfo, '__init__'), null, self);
/* 000171 */ 			self.cmdname = cmdname;
/* 000172 */ 			self.inline = inline;
/* 000172 */ 		});},
/* 000174 */ 		get __repr__ () {return __get__ (this, function (self) {
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
/* 000175 */ 			return '{}(cmdname={}, inline={})'.format (self.__class__.__name__, self.cmdname, self.inline);
/* 000175 */ 		});}
/* 000175 */ 	}),
/* 000180 */ 	get __init__ () {return __get__ (this, function (self, section_commands_by_level) {
/* 000180 */ 		if (typeof section_commands_by_level == 'undefined' || (section_commands_by_level != null && section_commands_by_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000180 */ 			var section_commands_by_level = null;
/* 000180 */ 		};
/* 000180 */ 		if (arguments.length) {
/* 000180 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000180 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000180 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000180 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000180 */ 					switch (__attrib0__) {
/* 000180 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000180 */ 						case 'section_commands_by_level': var section_commands_by_level = __allkwargs0__ [__attrib0__]; break;
/* 000180 */ 					}
/* 000180 */ 				}
/* 000180 */ 			}
/* 000180 */ 		}
/* 000180 */ 		else {
/* 000180 */ 		}
/* 000181 */ 		__call__ (__call__ (__super__, null, FeatureHeadings, '__init__'), null, self);
/* 000182 */ 		if (__t__ (section_commands_by_level === null)) {
/* 000184 */ 			var section_commands_by_level = dict ({1: (function () {
/* 000184 */ 				var __accu0__ = self;
/* 000184 */ 				return __call__ (__accu0__.SectionCommandInfo, __accu0__, 'section');
/* 000185 */ 			}) (), 2: (function () {
/* 000185 */ 				var __accu0__ = self;
/* 000185 */ 				return __call__ (__accu0__.SectionCommandInfo, __accu0__, 'subsection');
/* 000186 */ 			}) (), 3: (function () {
/* 000186 */ 				var __accu0__ = self;
/* 000186 */ 				return __call__ (__accu0__.SectionCommandInfo, __accu0__, 'subsubsection');
/* 000187 */ 			}) (), 4: (function () {
/* 000187 */ 				var __accu0__ = self;
/* 000187 */ 				return __call__ (__accu0__.SectionCommandInfo, __accu0__, 'paragraph', __kwargtrans__ ({inline: true}));
/* 000188 */ 			}) (), 5: (function () {
/* 000188 */ 				var __accu0__ = self;
/* 000188 */ 				return __call__ (__accu0__.SectionCommandInfo, __accu0__, 'subparagraph', __kwargtrans__ ({inline: true}));
/* 000189 */ 			}) (), 6: (function () {
/* 000189 */ 				var __accu0__ = self;
/* 000189 */ 				return __call__ (__accu0__.SectionCommandInfo, __accu0__, 'subsubparagraph', __kwargtrans__ ({inline: true}));
/* 000189 */ 			}) ()});
/* 000189 */ 		}
/* 000194 */ 		self.section_commands_by_level = (function () {
/* 000194 */ 			var __accu0__ = [];
/* 000196 */ 			var __iterable0__ = (function () {
/* 000196 */ 				var __accu1__ = __call__ (dict, null, section_commands_by_level);
/* 000196 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000196 */ 			}) ();
/* 000196 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000196 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000196 */ 				var level = __left0__ [0];
/* 000196 */ 				var x = __left0__ [1];
/* 000196 */ 				(function () {
/* 000196 */ 					var __accu1__ = __accu0__;
/* 000195 */ 					return __call__ (__accu1__.append, __accu1__, [level, (function () {
/* 000195 */ 						var __accu2__ = self;
/* 000195 */ 						return __call__ (__accu2__._make_section_command_info, __accu2__, x);
/* 000195 */ 					}) ()]);
/* 000195 */ 				}) ();
/* 000195 */ 			}
/* 000195 */ 			return dict (__accu0__);
/* 000195 */ 		}) ();
/* 000195 */ 	});},
/* 000199 */ 	get _make_section_command_info () {return __get__ (this, function (self, x) {
/* 000199 */ 		if (arguments.length) {
/* 000199 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000199 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000199 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000199 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000199 */ 					switch (__attrib0__) {
/* 000199 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000199 */ 						case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000199 */ 					}
/* 000199 */ 				}
/* 000199 */ 			}
/* 000199 */ 		}
/* 000199 */ 		else {
/* 000199 */ 		}
/* 000205 */ 		if (__t__ (__call__ (isinstance, null, x, self.SectionCommandInfo))) {
/* 000206 */ 			return x;
/* 000206 */ 		}
/* 000207 */ 		if (__t__ (__call__ (isinstance, null, x, str))) {
/* 000208 */ 			return (function () {
/* 000208 */ 				var __accu0__ = self;
/* 000208 */ 				return __call__ (__accu0__.SectionCommandInfo, __accu0__, x);
/* 000208 */ 			}) ();
/* 000208 */ 		}
/* 000209 */ 		return (function () {
/* 000209 */ 			var __accu0__ = self;
/* 000209 */ 			return __call__ (__accu0__.SectionCommandInfo, __accu0__, __kwargtrans__ (x));
/* 000209 */ 		}) ();
/* 000209 */ 	});},
/* 000211 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000211 */ 		if (arguments.length) {
/* 000211 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000211 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000211 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000211 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000211 */ 					switch (__attrib0__) {
/* 000211 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000211 */ 					}
/* 000211 */ 				}
/* 000211 */ 			}
/* 000211 */ 		}
/* 000211 */ 		else {
/* 000211 */ 		}
/* 000212 */ 		return __call__ (dict, null, __kwargtrans__ ({macros: (function () {
/* 000212 */ 			var __accu0__ = [];
/* 000219 */ 			var __iterable0__ = (function () {
/* 000219 */ 				var __accu1__ = self.section_commands_by_level;
/* 000219 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000219 */ 			}) ();
/* 000219 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000219 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000219 */ 				var level = __left0__ [0];
/* 000219 */ 				var sectioncmdspec = __left0__ [1];
/* 000219 */ 				(function () {
/* 000219 */ 					var __accu1__ = __accu0__;
/* 000214 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (HeadingMacro, null, __kwargtrans__ ({macroname: sectioncmdspec.cmdname, heading_level: level, inline_heading: sectioncmdspec.inline})));
/* 000214 */ 				}) ();
/* 000214 */ 			}
/* 000214 */ 			return __accu0__;
/* 000214 */ 		}) ()}));
/* 000214 */ 	});}
/* 000214 */ });
/* 000227 */ export var FeatureClass = FeatureHeadings;
/* 000006 */ 
//# sourceMappingURL=flm.feature.headings.map