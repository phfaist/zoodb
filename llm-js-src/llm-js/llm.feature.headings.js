/* 000001 */ // Transcrypt'ed from Python, 2023-04-09 01:44:42
/* 000006 */ var logging = {};
/* 000006 */ var re = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000019 */ import * as refs from './llm.feature.refs.js';
/* 000017 */ import {Feature} from './llm.feature._base.js';
/* 000014 */ import * as llmspecinfo from './llm.llmspecinfo.js';
/* 000010 */ import {ParsedArgumentsInfo} from './pylatexenc.latexnodes.js';
/* 000007 */ import * as __module_logging__ from './logging.js';
/* 000007 */ __nest__ (logging, '', __module_logging__);
/* 000006 */ import * as __module_re__ from './re.js';
/* 000006 */ __nest__ (re, '', __module_re__);
/* 000006 */ export {refs, llmspecinfo, Feature, ParsedArgumentsInfo};
/* 000001 */ var __name__ = 'llm.feature.headings';
/* 000008 */ export var logger = (function () {
/* 000008 */ 	var __accu0__ = logging;
/* 000008 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000008 */ }) ();
/* 000026 */ export var HeadingMacro =  __class__ ('HeadingMacro', [llmspecinfo.LLMMacroSpecBase], {
/* 000026 */ 	__module__: __name__,
/* 000028 */ 	is_block_level: true,
/* 000030 */ 	allowed_in_standalone_mode: true,
/* 000034 */ 	_llm_main_text_argument: 'text',
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
/* 000044 */ 		__call__ (__call__ (__super__, null, HeadingMacro, '__init__'), null, self, macroname, __kwargtrans__ ({arguments_spec_list: [llmspecinfo.text_arg, llmspecinfo.label_arg]}));
/* 000048 */ 		self.heading_level = heading_level;
/* 000049 */ 		self.inline_heading = inline_heading;
/* 000051 */ 		self.is_block_heading = self.inline_heading;
/* 000051 */ 	});},
/* 000053 */ 	get get_llm_doc () {return __get__ (this, function (self) {
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
/* 000065 */ 		node.llmarg_heading_content_nodelist = (function () {
/* 000065 */ 			var __accu0__ = __getitem__ (node_args, 'text');
/* 000065 */ 			return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000065 */ 		}) ();
/* 000067 */ 		node.llmarg_labels = (function () {
/* 000067 */ 			var __accu0__ = llmspecinfo;
/* 000067 */ 			return __call__ (__accu0__.helper_collect_labels, __accu0__, __getitem__ (node_args, 'label'), self.allowed_ref_label_prefixes);
/* 000067 */ 		}) ();
/* 000073 */ 		node.llm_referenceable_infos = [(function () {
/* 000073 */ 			var __accu0__ = refs;
/* 000073 */ 			return __call__ (__accu0__.ReferenceableInfo, __accu0__, __kwargtrans__ ({formatted_ref_llm_text: node.llmarg_heading_content_nodelist, labels: node.llmarg_labels}));
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
/* 000083 */ 		var target_id = (function () {
/* 000083 */ 			var __accu0__ = __getitem__ (node.llm_referenceable_infos, 0);
/* 000083 */ 			return __call__ (__accu0__.get_target_id, __accu0__);
/* 000083 */ 		}) ();
/* 000085 */ 		if (__t__ (target_id === null)) {
/* 000086 */ 			var target_id = (function () {
/* 000086 */ 				var __accu0__ = headings_mgr;
/* 000086 */ 				return __call__ (__accu0__.get_default_target_id, __accu0__, node.llmarg_labels, node.llmarg_heading_content_nodelist, __kwargtrans__ ({node: node}));
/* 000086 */ 			}) ();
/* 000086 */ 		}
/* 000092 */ 		if (__t__ (__t__ ((function () {
/* 000092 */ 			var __accu0__ = render_context;
/* 000092 */ 			return __call__ (__accu0__.supports_feature, __accu0__, 'refs');
/* 000092 */ 		}) ()) && render_context.is_first_pass)) {
/* 000093 */ 			var refs_mgr = (function () {
/* 000093 */ 				var __accu0__ = render_context;
/* 000093 */ 				return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000093 */ 			}) ();
/* 000094 */ 			var __iterable0__ = node.llm_referenceable_infos;
/* 000094 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000094 */ 				var llm_referenceable_info = __getitem__ (__iterable0__, __index0__);
/* 000095 */ 				(function () {
/* 000095 */ 					var __accu0__ = refs_mgr;
/* 000095 */ 					return __call__ (__accu0__.register_reference_referenceable, __accu0__, __kwargtrans__ ({node: node, referenceable_info: llm_referenceable_info}));
/* 000095 */ 				}) ();
/* 000095 */ 			}
/* 000095 */ 		}
/* 000100 */ 		return (function () {
/* 000100 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000100 */ 			return __call__ (__accu0__.render_heading, __accu0__, node.llmarg_heading_content_nodelist, __kwargtrans__ ({render_context: render_context, heading_level: self.heading_level, inline_heading: self.inline_heading, target_id: target_id}));
/* 000100 */ 		}) ();
/* 000100 */ 	});}
/* 000100 */ });
/* 000113 */ export var FeatureHeadings =  __class__ ('FeatureHeadings', [Feature], {
/* 000113 */ 	__module__: __name__,
/* 000119 */ 	feature_name: 'headings',
/* 000120 */ 	feature_title: 'Headings: sections, paragraphs',
/* 000125 */ 	feature_optional_dependencies: ['refs'],
/* 000125 */ 	RenderManager: __class__ ('RenderManager', [Feature.RenderManager], {
/* 000125 */ 		__module__: __name__,
/* 000128 */ 		get initialize () {return __get__ (this, function (self) {
/* 000128 */ 			if (arguments.length) {
/* 000128 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000128 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000128 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000128 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000128 */ 						switch (__attrib0__) {
/* 000128 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000128 */ 						}
/* 000128 */ 					}
/* 000128 */ 				}
/* 000128 */ 			}
/* 000128 */ 			else {
/* 000128 */ 			}
/* 000129 */ 			self.target_id_counters = dict ({});
/* 000130 */ 			self.target_ids = dict ({});
/* 000130 */ 		});},
/* 000133 */ 		get get_default_target_id () {return __get__ (this, function (self, heading_labels, heading_content_nodelist) {
/* 000133 */ 			if (arguments.length) {
/* 000133 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000133 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000133 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000133 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000133 */ 						switch (__attrib0__) {
/* 000133 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000133 */ 							case 'heading_labels': var heading_labels = __allkwargs0__ [__attrib0__]; break;
/* 000133 */ 							case 'heading_content_nodelist': var heading_content_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000133 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000133 */ 						}
/* 000133 */ 					}
/* 000133 */ 				}
/* 000133 */ 			}
/* 000133 */ 			else {
/* 000133 */ 			}
/* 000135 */ 			var node_id = (function () {
/* 000135 */ 				var __accu0__ = self;
/* 000135 */ 				return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000135 */ 			}) ();
/* 000137 */ 			if (__t__ (__in__ (node_id, self.target_ids))) {
/* 000138 */ 				return __getitem__ (self.target_ids, node_id);
/* 000138 */ 			}
/* 000140 */ 			var tgtid = (function () {
/* 000140 */ 				var __accu0__ = self;
/* 000140 */ 				return __call__ (__accu0__._generate_default_target_id, __accu0__, heading_labels, heading_content_nodelist);
/* 000140 */ 			}) ();
/* 000141 */ 			__setitem__ (self.target_ids, node_id, tgtid);
/* 000142 */ 			return tgtid;
/* 000142 */ 		});},
/* 000144 */ 		get _generate_default_target_id () {return __get__ (this, function (self, heading_labels, heading_content_nodelist) {
/* 000144 */ 			if (arguments.length) {
/* 000144 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000144 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000144 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000144 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000144 */ 						switch (__attrib0__) {
/* 000144 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000144 */ 							case 'heading_labels': var heading_labels = __allkwargs0__ [__attrib0__]; break;
/* 000144 */ 							case 'heading_content_nodelist': var heading_content_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000144 */ 						}
/* 000144 */ 					}
/* 000144 */ 				}
/* 000144 */ 			}
/* 000144 */ 			else {
/* 000144 */ 			}
/* 000147 */ 			var tgtid = (function () {
/* 000147 */ 				var __accu0__ = (function () {
/* 000147 */ 					var __accu1__ = heading_content_nodelist;
/* 000147 */ 					return __call__ (__accu1__.latex_verbatim, __accu1__);
/* 000147 */ 				}) ();
/* 000147 */ 				return __call__ (__accu0__.strip, __accu0__);
/* 000147 */ 			}) ();
/* 000148 */ 			var tgtid = (function () {
/* 000148 */ 				var __accu0__ = re;
/* 000148 */ 				return __call__ (__accu0__.sub, __accu0__, '[^A-Za-z0-9_-]+', '-', tgtid);
/* 000148 */ 			}) ();
/* 000149 */ 			var tgtid = 'sec--{}'.format (tgtid);
/* 000150 */ 			var tgtid = __getslice__ (tgtid, 0, 32, 1);
/* 000151 */ 			if (__t__ (__in__ (tgtid, self.target_id_counters))) {
/* 000152 */ 				__setitem__ (self.target_id_counters, tgtid, __call__ (__iadd__, null, __getitem__ (self.target_id_counters, tgtid), 1));
/* 000153 */ 				return '{}-{}'.format (tgtid, __getitem__ (self.target_id_counters, tgtid));
/* 000153 */ 			}
/* 000155 */ 			__setitem__ (self.target_id_counters, tgtid, 1);
/* 000156 */ 			return tgtid;
/* 000156 */ 		});}
/* 000159 */ 	}),
/* 000159 */ 	SectionCommandSpec: __class__ ('SectionCommandSpec', [object], {
/* 000159 */ 		__module__: __name__,
/* 000160 */ 		get __init__ () {return __get__ (this, function (self, cmdname, inline) {
/* 000160 */ 			if (typeof inline == 'undefined' || (inline != null && inline.hasOwnProperty ("__kwargtrans__"))) {;
/* 000160 */ 				var inline = false;
/* 000160 */ 			};
/* 000160 */ 			if (arguments.length) {
/* 000160 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000160 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000160 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000160 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000160 */ 						switch (__attrib0__) {
/* 000160 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000160 */ 							case 'cmdname': var cmdname = __allkwargs0__ [__attrib0__]; break;
/* 000160 */ 							case 'inline': var inline = __allkwargs0__ [__attrib0__]; break;
/* 000160 */ 						}
/* 000160 */ 					}
/* 000160 */ 				}
/* 000160 */ 			}
/* 000160 */ 			else {
/* 000160 */ 			}
/* 000161 */ 			__call__ (__call__ (__super__, null, FeatureHeadings.SectionCommandSpec, '__init__'), null, self);
/* 000162 */ 			self.cmdname = cmdname;
/* 000163 */ 			self.inline = inline;
/* 000163 */ 		});},
/* 000164 */ 		get __repr__ () {return __get__ (this, function (self) {
/* 000164 */ 			if (arguments.length) {
/* 000164 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000164 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000164 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000164 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000164 */ 						switch (__attrib0__) {
/* 000164 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000164 */ 						}
/* 000164 */ 					}
/* 000164 */ 				}
/* 000164 */ 			}
/* 000164 */ 			else {
/* 000164 */ 			}
/* 000165 */ 			return '{}(cmdname={}, inline={})'.format (self.__class__.__name__, self.cmdname, self.inline);
/* 000165 */ 		});}
/* 000165 */ 	}),
/* 000170 */ 	get __init__ () {return __get__ (this, function (self, section_commands_by_level) {
/* 000170 */ 		if (typeof section_commands_by_level == 'undefined' || (section_commands_by_level != null && section_commands_by_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000170 */ 			var section_commands_by_level = null;
/* 000170 */ 		};
/* 000170 */ 		if (arguments.length) {
/* 000170 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000170 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000170 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000170 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000170 */ 					switch (__attrib0__) {
/* 000170 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000170 */ 						case 'section_commands_by_level': var section_commands_by_level = __allkwargs0__ [__attrib0__]; break;
/* 000170 */ 					}
/* 000170 */ 				}
/* 000170 */ 			}
/* 000170 */ 		}
/* 000170 */ 		else {
/* 000170 */ 		}
/* 000171 */ 		__call__ (__call__ (__super__, null, FeatureHeadings, '__init__'), null, self);
/* 000172 */ 		if (__t__ (section_commands_by_level === null)) {
/* 000174 */ 			var section_commands_by_level = dict ({1: (function () {
/* 000174 */ 				var __accu0__ = self;
/* 000174 */ 				return __call__ (__accu0__.SectionCommandSpec, __accu0__, 'section');
/* 000175 */ 			}) (), 2: (function () {
/* 000175 */ 				var __accu0__ = self;
/* 000175 */ 				return __call__ (__accu0__.SectionCommandSpec, __accu0__, 'subsection');
/* 000176 */ 			}) (), 3: (function () {
/* 000176 */ 				var __accu0__ = self;
/* 000176 */ 				return __call__ (__accu0__.SectionCommandSpec, __accu0__, 'subsubsection');
/* 000177 */ 			}) (), 4: (function () {
/* 000177 */ 				var __accu0__ = self;
/* 000177 */ 				return __call__ (__accu0__.SectionCommandSpec, __accu0__, 'paragraph', __kwargtrans__ ({inline: true}));
/* 000178 */ 			}) (), 5: (function () {
/* 000178 */ 				var __accu0__ = self;
/* 000178 */ 				return __call__ (__accu0__.SectionCommandSpec, __accu0__, 'subparagraph', __kwargtrans__ ({inline: true}));
/* 000179 */ 			}) (), 6: (function () {
/* 000179 */ 				var __accu0__ = self;
/* 000179 */ 				return __call__ (__accu0__.SectionCommandSpec, __accu0__, 'subsubparagraph', __kwargtrans__ ({inline: true}));
/* 000179 */ 			}) ()});
/* 000179 */ 		}
/* 000182 */ 		var _mkspecobj = function (x) {
/* 000182 */ 			if (arguments.length) {
/* 000182 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000182 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000182 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000182 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000182 */ 						switch (__attrib0__) {
/* 000182 */ 							case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000182 */ 						}
/* 000182 */ 					}
/* 000182 */ 				}
/* 000182 */ 			}
/* 000182 */ 			else {
/* 000182 */ 			}
/* 000183 */ 			if (__t__ (__call__ (isinstance, null, x, self.SectionCommandSpec))) {
/* 000184 */ 				return x;
/* 000184 */ 			}
/* 000185 */ 			if (__t__ (__call__ (isinstance, null, x, str))) {
/* 000186 */ 				return (function () {
/* 000186 */ 					var __accu0__ = self;
/* 000186 */ 					return __call__ (__accu0__.SectionCommandSpec, __accu0__, x);
/* 000186 */ 				}) ();
/* 000186 */ 			}
/* 000187 */ 			return (function () {
/* 000187 */ 				var __accu0__ = self;
/* 000187 */ 				return __call__ (__accu0__.SectionCommandSpec, __accu0__, __kwargtrans__ (x));
/* 000187 */ 			}) ();
/* 000187 */ 		};
/* 000191 */ 		self.section_commands_by_level = (function () {
/* 000191 */ 			var __accu0__ = [];
/* 000193 */ 			var __iterable0__ = (function () {
/* 000193 */ 				var __accu1__ = __call__ (dict, null, section_commands_by_level);
/* 000193 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000193 */ 			}) ();
/* 000193 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000193 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000193 */ 				var level = __left0__ [0];
/* 000193 */ 				var x = __left0__ [1];
/* 000193 */ 				(function () {
/* 000193 */ 					var __accu1__ = __accu0__;
/* 000192 */ 					return __call__ (__accu1__.append, __accu1__, [level, __call__ (_mkspecobj, null, x)]);
/* 000192 */ 				}) ();
/* 000192 */ 			}
/* 000192 */ 			return dict (__accu0__);
/* 000192 */ 		}) ();
/* 000192 */ 	});},
/* 000196 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000196 */ 		if (arguments.length) {
/* 000196 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000196 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000196 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000196 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000196 */ 					switch (__attrib0__) {
/* 000196 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000196 */ 					}
/* 000196 */ 				}
/* 000196 */ 			}
/* 000196 */ 		}
/* 000196 */ 		else {
/* 000196 */ 		}
/* 000197 */ 		return __call__ (dict, null, __kwargtrans__ ({macros: (function () {
/* 000197 */ 			var __accu0__ = [];
/* 000204 */ 			var __iterable0__ = (function () {
/* 000204 */ 				var __accu1__ = self.section_commands_by_level;
/* 000204 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000204 */ 			}) ();
/* 000204 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000204 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000204 */ 				var level = __left0__ [0];
/* 000204 */ 				var sectioncmdspec = __left0__ [1];
/* 000204 */ 				(function () {
/* 000204 */ 					var __accu1__ = __accu0__;
/* 000199 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (HeadingMacro, null, __kwargtrans__ ({macroname: sectioncmdspec.cmdname, heading_level: level, inline_heading: sectioncmdspec.inline})));
/* 000199 */ 				}) ();
/* 000199 */ 			}
/* 000199 */ 			return __accu0__;
/* 000199 */ 		}) ()}));
/* 000199 */ 	});}
/* 000199 */ });
/* 000212 */ export var FeatureClass = FeatureHeadings;
/* 000006 */ 
//# sourceMappingURL=llm.feature.headings.map