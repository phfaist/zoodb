/* 000001 */ // Transcrypt'ed from Python, 2022-09-29 00:22:16
/* 000006 */ var logging = {};
/* 000006 */ var re = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000021 */ import * as refs from './llm.feature.refs.js';
/* 000019 */ import {Feature} from './llm.feature._base.js';
/* 000016 */ import * as llmspecinfo from './llm.llmspecinfo.js';
/* 000014 */ import * as latexnodes_parsers from './pylatexenc.latexnodes.parsers.js';
/* 000010 */ import {LatexWalkerParseError, ParsedArgumentsInfo} from './pylatexenc.latexnodes.js';
/* 000007 */ import * as __module_logging__ from './logging.js';
/* 000007 */ __nest__ (logging, '', __module_logging__);
/* 000006 */ import * as __module_re__ from './re.js';
/* 000006 */ __nest__ (re, '', __module_re__);
/* 000006 */ export {refs, LatexWalkerParseError, ParsedArgumentsInfo, llmspecinfo, latexnodes_parsers, Feature};
/* 000001 */ var __name__ = 'llm.feature.headings';
/* 000008 */ export var logger = (function () {
/* 000008 */ 	var __accu0__ = logging;
/* 000008 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000008 */ }) ();
/* 000028 */ export var HeadingMacro =  __class__ ('HeadingMacro', [llmspecinfo.LLMMacroSpecBase], {
/* 000028 */ 	__module__: __name__,
/* 000030 */ 	is_block_level: true,
/* 000032 */ 	allowed_in_standalone_mode: true,
/* 000036 */ 	_llm_main_text_argument: 'text',
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
/* 000046 */ 		__call__ (__call__ (__super__, null, HeadingMacro, '__init__'), null, self, macroname, __kwargtrans__ ({arguments_spec_list: [llmspecinfo.text_arg, llmspecinfo.label_arg]}));
/* 000050 */ 		self.heading_level = heading_level;
/* 000051 */ 		self.inline_heading = inline_heading;
/* 000053 */ 		self.is_block_heading = self.inline_heading;
/* 000053 */ 	});},
/* 000055 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000055 */ 		if (arguments.length) {
/* 000055 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000055 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000055 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000055 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000055 */ 					switch (__attrib0__) {
/* 000055 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000055 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000055 */ 					}
/* 000055 */ 				}
/* 000055 */ 			}
/* 000055 */ 		}
/* 000055 */ 		else {
/* 000055 */ 		}
/* 000057 */ 		var node_args = (function () {
/* 000057 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000057 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['text', 'label']));
/* 000057 */ 		}) ();
/* 000061 */ 		node.llmarg_heading_content_nodelist = (function () {
/* 000061 */ 			var __accu0__ = __getitem__ (node_args, 'text');
/* 000061 */ 			return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000061 */ 		}) ();
/* 000063 */ 		node.llmarg_labels = (function () {
/* 000063 */ 			var __accu0__ = llmspecinfo;
/* 000063 */ 			return __call__ (__accu0__.helper_collect_labels, __accu0__, __getitem__ (node_args, 'label'), self.allowed_ref_label_prefixes);
/* 000063 */ 		}) ();
/* 000068 */ 		node.llm_referenceable_info = (function () {
/* 000068 */ 			var __accu0__ = refs;
/* 000068 */ 			return __call__ (__accu0__.ReferenceableInfo, __accu0__, __kwargtrans__ ({formatted_ref_llm_text: node.llmarg_heading_content_nodelist, labels: node.llmarg_labels}));
/* 000068 */ 		}) ();
/* 000068 */ 	});},
/* 000074 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000074 */ 		if (arguments.length) {
/* 000074 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000074 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000074 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000074 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000074 */ 					switch (__attrib0__) {
/* 000074 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000074 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000074 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000074 */ 					}
/* 000074 */ 				}
/* 000074 */ 			}
/* 000074 */ 		}
/* 000074 */ 		else {
/* 000074 */ 		}
/* 000076 */ 		var headings_mgr = (function () {
/* 000076 */ 			var __accu0__ = render_context;
/* 000076 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'headings');
/* 000076 */ 		}) ();
/* 000077 */ 		var target_id = (function () {
/* 000077 */ 			var __accu0__ = node.llm_referenceable_info;
/* 000077 */ 			return __call__ (__accu0__.get_target_id, __accu0__);
/* 000077 */ 		}) ();
/* 000079 */ 		if (__t__ (target_id === null)) {
/* 000080 */ 			var target_id = (function () {
/* 000080 */ 				var __accu0__ = headings_mgr;
/* 000080 */ 				return __call__ (__accu0__.get_default_target_id, __accu0__, node.llmarg_labels, node.llmarg_heading_content_nodelist, __kwargtrans__ ({node: node}));
/* 000080 */ 			}) ();
/* 000080 */ 		}
/* 000086 */ 		if (__t__ (__t__ ((function () {
/* 000086 */ 			var __accu0__ = render_context;
/* 000086 */ 			return __call__ (__accu0__.supports_feature, __accu0__, 'refs');
/* 000086 */ 		}) ()) && render_context.is_first_pass)) {
/* 000087 */ 			var refs_mgr = (function () {
/* 000087 */ 				var __accu0__ = render_context;
/* 000087 */ 				return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000087 */ 			}) ();
/* 000088 */ 			(function () {
/* 000088 */ 				var __accu0__ = refs_mgr;
/* 000088 */ 				return __call__ (__accu0__.register_reference_referenceable, __accu0__, __kwargtrans__ ({node: node, referenceable_info: node.llm_referenceable_info}));
/* 000088 */ 			}) ();
/* 000088 */ 		}
/* 000093 */ 		return (function () {
/* 000093 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000093 */ 			return __call__ (__accu0__.render_heading, __accu0__, node.llmarg_heading_content_nodelist, __kwargtrans__ ({render_context: render_context, heading_level: self.heading_level, inline_heading: self.inline_heading, target_id: target_id}));
/* 000093 */ 		}) ();
/* 000093 */ 	});}
/* 000093 */ });
/* 000106 */ export var FeatureHeadings =  __class__ ('FeatureHeadings', [Feature], {
/* 000106 */ 	__module__: __name__,
/* 000114 */ 	feature_name: 'headings',
/* 000114 */ 	RenderManager: __class__ ('RenderManager', [Feature.RenderManager], {
/* 000114 */ 		__module__: __name__,
/* 000117 */ 		get initialize () {return __get__ (this, function (self) {
/* 000117 */ 			if (arguments.length) {
/* 000117 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000117 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000117 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000117 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000117 */ 						switch (__attrib0__) {
/* 000117 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000117 */ 						}
/* 000117 */ 					}
/* 000117 */ 				}
/* 000117 */ 			}
/* 000117 */ 			else {
/* 000117 */ 			}
/* 000118 */ 			self.target_id_counters = dict ({});
/* 000119 */ 			self.target_ids = dict ({});
/* 000119 */ 		});},
/* 000121 */ 		get get_default_target_id () {return __get__ (this, function (self, heading_labels, heading_content_nodelist) {
/* 000121 */ 			if (arguments.length) {
/* 000121 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000121 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000121 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000121 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000121 */ 						switch (__attrib0__) {
/* 000121 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000121 */ 							case 'heading_labels': var heading_labels = __allkwargs0__ [__attrib0__]; break;
/* 000121 */ 							case 'heading_content_nodelist': var heading_content_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000121 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000121 */ 						}
/* 000121 */ 					}
/* 000121 */ 				}
/* 000121 */ 			}
/* 000121 */ 			else {
/* 000121 */ 			}
/* 000123 */ 			var node_id = (function () {
/* 000123 */ 				var __accu0__ = self;
/* 000123 */ 				return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000123 */ 			}) ();
/* 000125 */ 			if (__t__ (__in__ (node_id, self.target_ids))) {
/* 000126 */ 				return __getitem__ (self.target_ids, node_id);
/* 000126 */ 			}
/* 000128 */ 			var tgtid = (function () {
/* 000128 */ 				var __accu0__ = self;
/* 000128 */ 				return __call__ (__accu0__._generate_default_target_id, __accu0__, heading_labels, heading_content_nodelist);
/* 000128 */ 			}) ();
/* 000129 */ 			__setitem__ (self.target_ids, node_id, tgtid);
/* 000130 */ 			return tgtid;
/* 000130 */ 		});},
/* 000132 */ 		get _generate_default_target_id () {return __get__ (this, function (self, heading_labels, heading_content_nodelist) {
/* 000132 */ 			if (arguments.length) {
/* 000132 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000132 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000132 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000132 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000132 */ 						switch (__attrib0__) {
/* 000132 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000132 */ 							case 'heading_labels': var heading_labels = __allkwargs0__ [__attrib0__]; break;
/* 000132 */ 							case 'heading_content_nodelist': var heading_content_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000132 */ 						}
/* 000132 */ 					}
/* 000132 */ 				}
/* 000132 */ 			}
/* 000132 */ 			else {
/* 000132 */ 			}
/* 000135 */ 			var tgtid = (function () {
/* 000135 */ 				var __accu0__ = (function () {
/* 000135 */ 					var __accu1__ = heading_content_nodelist;
/* 000135 */ 					return __call__ (__accu1__.latex_verbatim, __accu1__);
/* 000135 */ 				}) ();
/* 000135 */ 				return __call__ (__accu0__.strip, __accu0__);
/* 000135 */ 			}) ();
/* 000136 */ 			var tgtid = (function () {
/* 000136 */ 				var __accu0__ = re;
/* 000136 */ 				return __call__ (__accu0__.sub, __accu0__, '[^A-Za-z0-9_-]+', '-', tgtid);
/* 000136 */ 			}) ();
/* 000137 */ 			var tgtid = 'sec--{}'.format (tgtid);
/* 000138 */ 			var tgtid = __getslice__ (tgtid, 0, 32, 1);
/* 000139 */ 			if (__t__ (__in__ (tgtid, self.target_id_counters))) {
/* 000140 */ 				__setitem__ (self.target_id_counters, tgtid, __call__ (__iadd__, null, __getitem__ (self.target_id_counters, tgtid), 1));
/* 000141 */ 				return '{}-{}'.format (tgtid, __getitem__ (self.target_id_counters, tgtid));
/* 000141 */ 			}
/* 000143 */ 			__setitem__ (self.target_id_counters, tgtid, 1);
/* 000144 */ 			return tgtid;
/* 000144 */ 		});}
/* 000147 */ 	}),
/* 000147 */ 	SectionCommandSpec: __class__ ('SectionCommandSpec', [object], {
/* 000147 */ 		__module__: __name__,
/* 000148 */ 		get __init__ () {return __get__ (this, function (self, cmdname, inline) {
/* 000148 */ 			if (typeof inline == 'undefined' || (inline != null && inline.hasOwnProperty ("__kwargtrans__"))) {;
/* 000148 */ 				var inline = false;
/* 000148 */ 			};
/* 000148 */ 			if (arguments.length) {
/* 000148 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000148 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000148 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000148 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000148 */ 						switch (__attrib0__) {
/* 000148 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000148 */ 							case 'cmdname': var cmdname = __allkwargs0__ [__attrib0__]; break;
/* 000148 */ 							case 'inline': var inline = __allkwargs0__ [__attrib0__]; break;
/* 000148 */ 						}
/* 000148 */ 					}
/* 000148 */ 				}
/* 000148 */ 			}
/* 000148 */ 			else {
/* 000148 */ 			}
/* 000149 */ 			__call__ (__call__ (__super__, null, FeatureHeadings.SectionCommandSpec, '__init__'), null, self);
/* 000150 */ 			self.cmdname = cmdname;
/* 000151 */ 			self.inline = inline;
/* 000151 */ 		});},
/* 000152 */ 		get __repr__ () {return __get__ (this, function (self) {
/* 000152 */ 			if (arguments.length) {
/* 000152 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000152 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000152 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000152 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000152 */ 						switch (__attrib0__) {
/* 000152 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000152 */ 						}
/* 000152 */ 					}
/* 000152 */ 				}
/* 000152 */ 			}
/* 000152 */ 			else {
/* 000152 */ 			}
/* 000153 */ 			return '{}(cmdname={}, inline={})'.format (self.__class__.__name__, self.cmdname, self.inline);
/* 000153 */ 		});}
/* 000153 */ 	}),
/* 000158 */ 	get __init__ () {return __get__ (this, function (self, section_commands_by_level) {
/* 000158 */ 		if (typeof section_commands_by_level == 'undefined' || (section_commands_by_level != null && section_commands_by_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000158 */ 			var section_commands_by_level = null;
/* 000158 */ 		};
/* 000158 */ 		if (arguments.length) {
/* 000158 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000158 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000158 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000158 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000158 */ 					switch (__attrib0__) {
/* 000158 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000158 */ 						case 'section_commands_by_level': var section_commands_by_level = __allkwargs0__ [__attrib0__]; break;
/* 000158 */ 					}
/* 000158 */ 				}
/* 000158 */ 			}
/* 000158 */ 		}
/* 000158 */ 		else {
/* 000158 */ 		}
/* 000159 */ 		__call__ (__call__ (__super__, null, FeatureHeadings, '__init__'), null, self);
/* 000160 */ 		if (__t__ (section_commands_by_level === null)) {
/* 000162 */ 			var section_commands_by_level = dict ({1: (function () {
/* 000162 */ 				var __accu0__ = self;
/* 000162 */ 				return __call__ (__accu0__.SectionCommandSpec, __accu0__, 'section');
/* 000163 */ 			}) (), 2: (function () {
/* 000163 */ 				var __accu0__ = self;
/* 000163 */ 				return __call__ (__accu0__.SectionCommandSpec, __accu0__, 'subsection');
/* 000164 */ 			}) (), 3: (function () {
/* 000164 */ 				var __accu0__ = self;
/* 000164 */ 				return __call__ (__accu0__.SectionCommandSpec, __accu0__, 'subsubsection');
/* 000165 */ 			}) (), 4: (function () {
/* 000165 */ 				var __accu0__ = self;
/* 000165 */ 				return __call__ (__accu0__.SectionCommandSpec, __accu0__, 'paragraph', __kwargtrans__ ({inline: true}));
/* 000166 */ 			}) (), 5: (function () {
/* 000166 */ 				var __accu0__ = self;
/* 000166 */ 				return __call__ (__accu0__.SectionCommandSpec, __accu0__, 'subparagraph', __kwargtrans__ ({inline: true}));
/* 000167 */ 			}) (), 6: (function () {
/* 000167 */ 				var __accu0__ = self;
/* 000167 */ 				return __call__ (__accu0__.SectionCommandSpec, __accu0__, 'subsubparagraph', __kwargtrans__ ({inline: true}));
/* 000167 */ 			}) ()});
/* 000167 */ 		}
/* 000170 */ 		var _mkspecobj = function (x) {
/* 000170 */ 			if (arguments.length) {
/* 000170 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000170 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000170 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000170 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000170 */ 						switch (__attrib0__) {
/* 000170 */ 							case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000170 */ 						}
/* 000170 */ 					}
/* 000170 */ 				}
/* 000170 */ 			}
/* 000170 */ 			else {
/* 000170 */ 			}
/* 000171 */ 			if (__t__ (__call__ (isinstance, null, x, self.SectionCommandSpec))) {
/* 000172 */ 				return x;
/* 000172 */ 			}
/* 000173 */ 			if (__t__ (__call__ (isinstance, null, x, str))) {
/* 000174 */ 				return (function () {
/* 000174 */ 					var __accu0__ = self;
/* 000174 */ 					return __call__ (__accu0__.SectionCommandSpec, __accu0__, x);
/* 000174 */ 				}) ();
/* 000174 */ 			}
/* 000175 */ 			return (function () {
/* 000175 */ 				var __accu0__ = self;
/* 000175 */ 				return __call__ (__accu0__.SectionCommandSpec, __accu0__, __kwargtrans__ (x));
/* 000175 */ 			}) ();
/* 000175 */ 		};
/* 000179 */ 		self.section_commands_by_level = (function () {
/* 000179 */ 			var __accu0__ = [];
/* 000181 */ 			var __iterable0__ = (function () {
/* 000181 */ 				var __accu1__ = __call__ (dict, null, section_commands_by_level);
/* 000181 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000181 */ 			}) ();
/* 000181 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000181 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000181 */ 				var level = __left0__ [0];
/* 000181 */ 				var x = __left0__ [1];
/* 000181 */ 				(function () {
/* 000181 */ 					var __accu1__ = __accu0__;
/* 000180 */ 					return __call__ (__accu1__.append, __accu1__, [level, __call__ (_mkspecobj, null, x)]);
/* 000180 */ 				}) ();
/* 000180 */ 			}
/* 000180 */ 			return dict (__accu0__);
/* 000180 */ 		}) ();
/* 000180 */ 	});},
/* 000184 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000184 */ 		if (arguments.length) {
/* 000184 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000184 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000184 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000184 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000184 */ 					switch (__attrib0__) {
/* 000184 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000184 */ 					}
/* 000184 */ 				}
/* 000184 */ 			}
/* 000184 */ 		}
/* 000184 */ 		else {
/* 000184 */ 		}
/* 000185 */ 		return __call__ (dict, null, __kwargtrans__ ({macros: (function () {
/* 000185 */ 			var __accu0__ = [];
/* 000192 */ 			var __iterable0__ = (function () {
/* 000192 */ 				var __accu1__ = self.section_commands_by_level;
/* 000192 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000192 */ 			}) ();
/* 000192 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000192 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000192 */ 				var level = __left0__ [0];
/* 000192 */ 				var sectioncmdspec = __left0__ [1];
/* 000192 */ 				(function () {
/* 000192 */ 					var __accu1__ = __accu0__;
/* 000187 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (HeadingMacro, null, __kwargtrans__ ({macroname: sectioncmdspec.cmdname, heading_level: level, inline_heading: sectioncmdspec.inline})));
/* 000187 */ 				}) ();
/* 000187 */ 			}
/* 000187 */ 			return __accu0__;
/* 000187 */ 		}) ()}));
/* 000187 */ 	});}
/* 000187 */ });
/* 000006 */ 
//# sourceMappingURL=llm.feature.headings.map