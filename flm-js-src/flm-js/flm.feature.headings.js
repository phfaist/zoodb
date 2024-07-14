/* 000001 */ // Transcrypt'ed from Python, 2024-07-14 20:46:43
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
/* 000006 */ export {flmspecinfo, refs, ParsedArgumentsInfo, Feature};
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
/* 000074 */ 		var heading_flm_text = (function () {
/* 000074 */ 			var __accu0__ = node.flmarg_heading_content_nodelist;
/* 000074 */ 			return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000074 */ 		}) ();
/* 000077 */ 		node.flm_referenceable_infos = [(function () {
/* 000077 */ 			var __accu0__ = refs;
/* 000077 */ 			return __call__ (__accu0__.ReferenceableInfo, __accu0__, __kwargtrans__ ({formatted_ref_flm_text: heading_flm_text, labels: node.flmarg_labels}));
/* 000077 */ 		}) ()];
/* 000077 */ 	});},
/* 000084 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000084 */ 		if (arguments.length) {
/* 000084 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000084 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000084 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000084 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000084 */ 					switch (__attrib0__) {
/* 000084 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000084 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000084 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000084 */ 					}
/* 000084 */ 				}
/* 000084 */ 			}
/* 000084 */ 		}
/* 000084 */ 		else {
/* 000084 */ 		}
/* 000086 */ 		var headings_mgr = (function () {
/* 000086 */ 			var __accu0__ = render_context;
/* 000086 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'headings');
/* 000086 */ 		}) ();
/* 000088 */ 		var target_id = null;
/* 000090 */ 		if (__t__ (__call__ (hasattr, null, node, 'flm_heading_target_id'))) {
/* 000094 */ 			var target_id = node.flm_heading_target_id;
/* 000094 */ 		}
/* 000095 */ 		else {
/* 000097 */ 			var target_id = (function () {
/* 000097 */ 				var __accu0__ = __getitem__ (node.flm_referenceable_infos, 0);
/* 000097 */ 				return __call__ (__accu0__.get_target_id, __accu0__);
/* 000097 */ 			}) ();
/* 000098 */ 			if (__t__ (target_id === null)) {
/* 000099 */ 				var target_id = (function () {
/* 000099 */ 					var __accu0__ = headings_mgr;
/* 000099 */ 					return __call__ (__accu0__.get_default_target_id, __accu0__, node.flmarg_labels, node.flmarg_heading_content_nodelist, __kwargtrans__ ({node: node}));
/* 000099 */ 				}) ();
/* 000099 */ 			}
/* 000099 */ 		}
/* 000105 */ 		if (__t__ (__t__ ((function () {
/* 000105 */ 			var __accu0__ = render_context;
/* 000105 */ 			return __call__ (__accu0__.supports_feature, __accu0__, 'refs');
/* 000105 */ 		}) ()) && render_context.is_first_pass)) {
/* 000106 */ 			var refs_mgr = (function () {
/* 000106 */ 				var __accu0__ = render_context;
/* 000106 */ 				return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000106 */ 			}) ();
/* 000107 */ 			var __iterable0__ = node.flm_referenceable_infos;
/* 000107 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000107 */ 				var flm_referenceable_info = __getitem__ (__iterable0__, __index0__);
/* 000108 */ 				(function () {
/* 000108 */ 					var __accu0__ = refs_mgr;
/* 000108 */ 					return __call__ (__accu0__.register_reference_referenceable, __accu0__, __kwargtrans__ ({node: node, referenceable_info: flm_referenceable_info}));
/* 000108 */ 				}) ();
/* 000108 */ 			}
/* 000108 */ 		}
/* 000113 */ 		return (function () {
/* 000113 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000113 */ 			return __call__ (__accu0__.render_heading, __accu0__, node.flmarg_heading_content_nodelist, __kwargtrans__ ({render_context: render_context, heading_level: self.heading_level, inline_heading: self.inline_heading, target_id: target_id}));
/* 000113 */ 		}) ();
/* 000113 */ 	});}
/* 000113 */ });
/* 000124 */ export var FeatureHeadings =  __class__ ('FeatureHeadings', [Feature], {
/* 000124 */ 	__module__: __name__,
/* 000130 */ 	feature_name: 'headings',
/* 000131 */ 	feature_title: 'Headings: sections, paragraphs',
/* 000136 */ 	feature_optional_dependencies: ['refs'],
/* 000136 */ 	RenderManager: __class__ ('RenderManager', [Feature.RenderManager], {
/* 000136 */ 		__module__: __name__,
/* 000139 */ 		get initialize () {return __get__ (this, function (self) {
/* 000139 */ 			if (arguments.length) {
/* 000139 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000139 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000139 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000139 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000139 */ 						switch (__attrib0__) {
/* 000139 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000139 */ 						}
/* 000139 */ 					}
/* 000139 */ 				}
/* 000139 */ 			}
/* 000139 */ 			else {
/* 000139 */ 			}
/* 000140 */ 			self.target_id_counters = dict ({});
/* 000141 */ 			self.target_ids = dict ({});
/* 000141 */ 		});},
/* 000144 */ 		get get_default_target_id () {return __get__ (this, function (self, heading_labels, heading_content_nodelist) {
/* 000144 */ 			if (arguments.length) {
/* 000144 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000144 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000144 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000144 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000144 */ 						switch (__attrib0__) {
/* 000144 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000144 */ 							case 'heading_labels': var heading_labels = __allkwargs0__ [__attrib0__]; break;
/* 000144 */ 							case 'heading_content_nodelist': var heading_content_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000144 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000144 */ 						}
/* 000144 */ 					}
/* 000144 */ 				}
/* 000144 */ 			}
/* 000144 */ 			else {
/* 000144 */ 			}
/* 000146 */ 			var node_id = (function () {
/* 000146 */ 				var __accu0__ = self;
/* 000146 */ 				return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000146 */ 			}) ();
/* 000148 */ 			if (__t__ (__in__ (node_id, self.target_ids))) {
/* 000149 */ 				return __getitem__ (self.target_ids, node_id);
/* 000149 */ 			}
/* 000151 */ 			var tgtid = (function () {
/* 000151 */ 				var __accu0__ = self;
/* 000151 */ 				return __call__ (__accu0__._generate_default_target_id, __accu0__, heading_labels, heading_content_nodelist);
/* 000151 */ 			}) ();
/* 000152 */ 			__setitem__ (self.target_ids, node_id, tgtid);
/* 000153 */ 			return tgtid;
/* 000153 */ 		});},
/* 000155 */ 		get _generate_default_target_id () {return __get__ (this, function (self, heading_labels, heading_content_nodelist) {
/* 000155 */ 			if (arguments.length) {
/* 000155 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000155 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000155 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000155 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000155 */ 						switch (__attrib0__) {
/* 000155 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000155 */ 							case 'heading_labels': var heading_labels = __allkwargs0__ [__attrib0__]; break;
/* 000155 */ 							case 'heading_content_nodelist': var heading_content_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000155 */ 						}
/* 000155 */ 					}
/* 000155 */ 				}
/* 000155 */ 			}
/* 000155 */ 			else {
/* 000155 */ 			}
/* 000158 */ 			var tgtid = (function () {
/* 000158 */ 				var __accu0__ = (function () {
/* 000158 */ 					var __accu1__ = heading_content_nodelist;
/* 000158 */ 					return __call__ (__accu1__.latex_verbatim, __accu1__);
/* 000158 */ 				}) ();
/* 000158 */ 				return __call__ (__accu0__.strip, __accu0__);
/* 000158 */ 			}) ();
/* 000159 */ 			var tgtid = (function () {
/* 000159 */ 				var __accu0__ = re;
/* 000159 */ 				return __call__ (__accu0__.sub, __accu0__, '[^A-Za-z0-9_-]+', '-', tgtid);
/* 000159 */ 			}) ();
/* 000160 */ 			var tgtid = 'sec--{}'.format (tgtid);
/* 000161 */ 			var tgtid = __getslice__ (tgtid, 0, 32, 1);
/* 000162 */ 			if (__t__ (__in__ (tgtid, self.target_id_counters))) {
/* 000163 */ 				__setitem__ (self.target_id_counters, tgtid, __call__ (__iadd__, null, __getitem__ (self.target_id_counters, tgtid), 1));
/* 000164 */ 				return '{}-{}'.format (tgtid, __getitem__ (self.target_id_counters, tgtid));
/* 000164 */ 			}
/* 000166 */ 			__setitem__ (self.target_id_counters, tgtid, 1);
/* 000167 */ 			return tgtid;
/* 000167 */ 		});}
/* 000170 */ 	}),
/* 000170 */ 	SectionCommandInfo: __class__ ('SectionCommandInfo', [object], {
/* 000170 */ 		__module__: __name__,
/* 000171 */ 		get __init__ () {return __get__ (this, function (self, cmdname, inline) {
/* 000171 */ 			if (typeof inline == 'undefined' || (inline != null && inline.hasOwnProperty ("__kwargtrans__"))) {;
/* 000171 */ 				var inline = false;
/* 000171 */ 			};
/* 000171 */ 			if (arguments.length) {
/* 000171 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000171 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000171 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000171 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000171 */ 						switch (__attrib0__) {
/* 000171 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000171 */ 							case 'cmdname': var cmdname = __allkwargs0__ [__attrib0__]; break;
/* 000171 */ 							case 'inline': var inline = __allkwargs0__ [__attrib0__]; break;
/* 000171 */ 						}
/* 000171 */ 					}
/* 000171 */ 				}
/* 000171 */ 			}
/* 000171 */ 			else {
/* 000171 */ 			}
/* 000172 */ 			__call__ (__call__ (__super__, null, FeatureHeadings.SectionCommandInfo, '__init__'), null, self);
/* 000173 */ 			self.cmdname = cmdname;
/* 000174 */ 			self.inline = inline;
/* 000174 */ 		});},
/* 000176 */ 		get __repr__ () {return __get__ (this, function (self) {
/* 000176 */ 			if (arguments.length) {
/* 000176 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000176 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000176 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000176 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000176 */ 						switch (__attrib0__) {
/* 000176 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000176 */ 						}
/* 000176 */ 					}
/* 000176 */ 				}
/* 000176 */ 			}
/* 000176 */ 			else {
/* 000176 */ 			}
/* 000177 */ 			return '{}(cmdname={}, inline={})'.format (self.__class__.__name__, self.cmdname, self.inline);
/* 000177 */ 		});}
/* 000177 */ 	}),
/* 000182 */ 	get __init__ () {return __get__ (this, function (self, section_commands_by_level) {
/* 000182 */ 		if (typeof section_commands_by_level == 'undefined' || (section_commands_by_level != null && section_commands_by_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000182 */ 			var section_commands_by_level = null;
/* 000182 */ 		};
/* 000182 */ 		if (arguments.length) {
/* 000182 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000182 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000182 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000182 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000182 */ 					switch (__attrib0__) {
/* 000182 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000182 */ 						case 'section_commands_by_level': var section_commands_by_level = __allkwargs0__ [__attrib0__]; break;
/* 000182 */ 					}
/* 000182 */ 				}
/* 000182 */ 			}
/* 000182 */ 		}
/* 000182 */ 		else {
/* 000182 */ 		}
/* 000183 */ 		__call__ (__call__ (__super__, null, FeatureHeadings, '__init__'), null, self);
/* 000184 */ 		if (__t__ (section_commands_by_level === null)) {
/* 000186 */ 			var section_commands_by_level = dict ({1: (function () {
/* 000186 */ 				var __accu0__ = self;
/* 000186 */ 				return __call__ (__accu0__.SectionCommandInfo, __accu0__, 'section');
/* 000187 */ 			}) (), 2: (function () {
/* 000187 */ 				var __accu0__ = self;
/* 000187 */ 				return __call__ (__accu0__.SectionCommandInfo, __accu0__, 'subsection');
/* 000188 */ 			}) (), 3: (function () {
/* 000188 */ 				var __accu0__ = self;
/* 000188 */ 				return __call__ (__accu0__.SectionCommandInfo, __accu0__, 'subsubsection');
/* 000189 */ 			}) (), 4: (function () {
/* 000189 */ 				var __accu0__ = self;
/* 000189 */ 				return __call__ (__accu0__.SectionCommandInfo, __accu0__, 'paragraph', __kwargtrans__ ({inline: true}));
/* 000190 */ 			}) (), 5: (function () {
/* 000190 */ 				var __accu0__ = self;
/* 000190 */ 				return __call__ (__accu0__.SectionCommandInfo, __accu0__, 'subparagraph', __kwargtrans__ ({inline: true}));
/* 000191 */ 			}) (), 6: (function () {
/* 000191 */ 				var __accu0__ = self;
/* 000191 */ 				return __call__ (__accu0__.SectionCommandInfo, __accu0__, 'subsubparagraph', __kwargtrans__ ({inline: true}));
/* 000191 */ 			}) ()});
/* 000191 */ 		}
/* 000196 */ 		self.section_commands_by_level = (function () {
/* 000196 */ 			var __accu0__ = [];
/* 000198 */ 			var __iterable0__ = (function () {
/* 000198 */ 				var __accu1__ = __call__ (dict, null, section_commands_by_level);
/* 000198 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000198 */ 			}) ();
/* 000198 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000198 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000198 */ 				var level = __left0__ [0];
/* 000198 */ 				var x = __left0__ [1];
/* 000198 */ 				(function () {
/* 000198 */ 					var __accu1__ = __accu0__;
/* 000197 */ 					return __call__ (__accu1__.append, __accu1__, [level, (function () {
/* 000197 */ 						var __accu2__ = self;
/* 000197 */ 						return __call__ (__accu2__._make_section_command_info, __accu2__, x);
/* 000197 */ 					}) ()]);
/* 000197 */ 				}) ();
/* 000197 */ 			}
/* 000197 */ 			return dict (__accu0__);
/* 000197 */ 		}) ();
/* 000197 */ 	});},
/* 000201 */ 	get _make_section_command_info () {return __get__ (this, function (self, x) {
/* 000201 */ 		if (arguments.length) {
/* 000201 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000201 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000201 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000201 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000201 */ 					switch (__attrib0__) {
/* 000201 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000201 */ 						case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000201 */ 					}
/* 000201 */ 				}
/* 000201 */ 			}
/* 000201 */ 		}
/* 000201 */ 		else {
/* 000201 */ 		}
/* 000207 */ 		if (__t__ (__call__ (isinstance, null, x, self.SectionCommandInfo))) {
/* 000208 */ 			return x;
/* 000208 */ 		}
/* 000209 */ 		if (__t__ (__call__ (isinstance, null, x, str))) {
/* 000210 */ 			return (function () {
/* 000210 */ 				var __accu0__ = self;
/* 000210 */ 				return __call__ (__accu0__.SectionCommandInfo, __accu0__, x);
/* 000210 */ 			}) ();
/* 000210 */ 		}
/* 000211 */ 		return (function () {
/* 000211 */ 			var __accu0__ = self;
/* 000211 */ 			return __call__ (__accu0__.SectionCommandInfo, __accu0__, __kwargtrans__ (x));
/* 000211 */ 		}) ();
/* 000211 */ 	});},
/* 000213 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000213 */ 		if (arguments.length) {
/* 000213 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000213 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000213 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000213 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000213 */ 					switch (__attrib0__) {
/* 000213 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000213 */ 					}
/* 000213 */ 				}
/* 000213 */ 			}
/* 000213 */ 		}
/* 000213 */ 		else {
/* 000213 */ 		}
/* 000214 */ 		return __call__ (dict, null, __kwargtrans__ ({macros: (function () {
/* 000214 */ 			var __accu0__ = [];
/* 000221 */ 			var __iterable0__ = (function () {
/* 000221 */ 				var __accu1__ = self.section_commands_by_level;
/* 000221 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000221 */ 			}) ();
/* 000221 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000221 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000221 */ 				var level = __left0__ [0];
/* 000221 */ 				var sectioncmdspec = __left0__ [1];
/* 000221 */ 				(function () {
/* 000221 */ 					var __accu1__ = __accu0__;
/* 000216 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (HeadingMacro, null, __kwargtrans__ ({macroname: sectioncmdspec.cmdname, heading_level: level, inline_heading: sectioncmdspec.inline})));
/* 000216 */ 				}) ();
/* 000216 */ 			}
/* 000216 */ 			return __accu0__;
/* 000216 */ 		}) ()}));
/* 000216 */ 	});}
/* 000216 */ });
/* 000229 */ export var FeatureClass = FeatureHeadings;
/* 000006 */ 
//# sourceMappingURL=flm.feature.headings.map