/* 000001 */ // Transcrypt'ed from Python, 2023-01-05 22:41:21
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
/* 000006 */ export {llmspecinfo, latexnodes_parsers, Feature, LatexWalkerParseError, refs, ParsedArgumentsInfo};
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
/* 000069 */ 		node.llm_referenceable_infos = [(function () {
/* 000069 */ 			var __accu0__ = refs;
/* 000069 */ 			return __call__ (__accu0__.ReferenceableInfo, __accu0__, __kwargtrans__ ({formatted_ref_llm_text: node.llmarg_heading_content_nodelist, labels: node.llmarg_labels}));
/* 000069 */ 		}) ()];
/* 000069 */ 	});},
/* 000076 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000076 */ 		if (arguments.length) {
/* 000076 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000076 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000076 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000076 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000076 */ 					switch (__attrib0__) {
/* 000076 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000076 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000076 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000076 */ 					}
/* 000076 */ 				}
/* 000076 */ 			}
/* 000076 */ 		}
/* 000076 */ 		else {
/* 000076 */ 		}
/* 000078 */ 		var headings_mgr = (function () {
/* 000078 */ 			var __accu0__ = render_context;
/* 000078 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'headings');
/* 000078 */ 		}) ();
/* 000079 */ 		var target_id = (function () {
/* 000079 */ 			var __accu0__ = __getitem__ (node.llm_referenceable_infos, 0);
/* 000079 */ 			return __call__ (__accu0__.get_target_id, __accu0__);
/* 000079 */ 		}) ();
/* 000081 */ 		if (__t__ (target_id === null)) {
/* 000082 */ 			var target_id = (function () {
/* 000082 */ 				var __accu0__ = headings_mgr;
/* 000082 */ 				return __call__ (__accu0__.get_default_target_id, __accu0__, node.llmarg_labels, node.llmarg_heading_content_nodelist, __kwargtrans__ ({node: node}));
/* 000082 */ 			}) ();
/* 000082 */ 		}
/* 000088 */ 		if (__t__ (__t__ ((function () {
/* 000088 */ 			var __accu0__ = render_context;
/* 000088 */ 			return __call__ (__accu0__.supports_feature, __accu0__, 'refs');
/* 000088 */ 		}) ()) && render_context.is_first_pass)) {
/* 000089 */ 			var refs_mgr = (function () {
/* 000089 */ 				var __accu0__ = render_context;
/* 000089 */ 				return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000089 */ 			}) ();
/* 000090 */ 			var __iterable0__ = node.llm_referenceable_infos;
/* 000090 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000090 */ 				var llm_referenceable_info = __getitem__ (__iterable0__, __index0__);
/* 000091 */ 				(function () {
/* 000091 */ 					var __accu0__ = refs_mgr;
/* 000091 */ 					return __call__ (__accu0__.register_reference_referenceable, __accu0__, __kwargtrans__ ({node: node, referenceable_info: llm_referenceable_info}));
/* 000091 */ 				}) ();
/* 000091 */ 			}
/* 000091 */ 		}
/* 000096 */ 		return (function () {
/* 000096 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000096 */ 			return __call__ (__accu0__.render_heading, __accu0__, node.llmarg_heading_content_nodelist, __kwargtrans__ ({render_context: render_context, heading_level: self.heading_level, inline_heading: self.inline_heading, target_id: target_id}));
/* 000096 */ 		}) ();
/* 000096 */ 	});}
/* 000096 */ });
/* 000109 */ export var FeatureHeadings =  __class__ ('FeatureHeadings', [Feature], {
/* 000109 */ 	__module__: __name__,
/* 000117 */ 	feature_name: 'headings',
/* 000117 */ 	RenderManager: __class__ ('RenderManager', [Feature.RenderManager], {
/* 000117 */ 		__module__: __name__,
/* 000120 */ 		get initialize () {return __get__ (this, function (self) {
/* 000120 */ 			if (arguments.length) {
/* 000120 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000120 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000120 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000120 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000120 */ 						switch (__attrib0__) {
/* 000120 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000120 */ 						}
/* 000120 */ 					}
/* 000120 */ 				}
/* 000120 */ 			}
/* 000120 */ 			else {
/* 000120 */ 			}
/* 000121 */ 			self.target_id_counters = dict ({});
/* 000122 */ 			self.target_ids = dict ({});
/* 000122 */ 		});},
/* 000124 */ 		get get_default_target_id () {return __get__ (this, function (self, heading_labels, heading_content_nodelist) {
/* 000124 */ 			if (arguments.length) {
/* 000124 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000124 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000124 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000124 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000124 */ 						switch (__attrib0__) {
/* 000124 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000124 */ 							case 'heading_labels': var heading_labels = __allkwargs0__ [__attrib0__]; break;
/* 000124 */ 							case 'heading_content_nodelist': var heading_content_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000124 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000124 */ 						}
/* 000124 */ 					}
/* 000124 */ 				}
/* 000124 */ 			}
/* 000124 */ 			else {
/* 000124 */ 			}
/* 000126 */ 			var node_id = (function () {
/* 000126 */ 				var __accu0__ = self;
/* 000126 */ 				return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000126 */ 			}) ();
/* 000128 */ 			if (__t__ (__in__ (node_id, self.target_ids))) {
/* 000129 */ 				return __getitem__ (self.target_ids, node_id);
/* 000129 */ 			}
/* 000131 */ 			var tgtid = (function () {
/* 000131 */ 				var __accu0__ = self;
/* 000131 */ 				return __call__ (__accu0__._generate_default_target_id, __accu0__, heading_labels, heading_content_nodelist);
/* 000131 */ 			}) ();
/* 000132 */ 			__setitem__ (self.target_ids, node_id, tgtid);
/* 000133 */ 			return tgtid;
/* 000133 */ 		});},
/* 000135 */ 		get _generate_default_target_id () {return __get__ (this, function (self, heading_labels, heading_content_nodelist) {
/* 000135 */ 			if (arguments.length) {
/* 000135 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000135 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000135 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000135 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000135 */ 						switch (__attrib0__) {
/* 000135 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000135 */ 							case 'heading_labels': var heading_labels = __allkwargs0__ [__attrib0__]; break;
/* 000135 */ 							case 'heading_content_nodelist': var heading_content_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000135 */ 						}
/* 000135 */ 					}
/* 000135 */ 				}
/* 000135 */ 			}
/* 000135 */ 			else {
/* 000135 */ 			}
/* 000138 */ 			var tgtid = (function () {
/* 000138 */ 				var __accu0__ = (function () {
/* 000138 */ 					var __accu1__ = heading_content_nodelist;
/* 000138 */ 					return __call__ (__accu1__.latex_verbatim, __accu1__);
/* 000138 */ 				}) ();
/* 000138 */ 				return __call__ (__accu0__.strip, __accu0__);
/* 000138 */ 			}) ();
/* 000139 */ 			var tgtid = (function () {
/* 000139 */ 				var __accu0__ = re;
/* 000139 */ 				return __call__ (__accu0__.sub, __accu0__, '[^A-Za-z0-9_-]+', '-', tgtid);
/* 000139 */ 			}) ();
/* 000140 */ 			var tgtid = 'sec--{}'.format (tgtid);
/* 000141 */ 			var tgtid = __getslice__ (tgtid, 0, 32, 1);
/* 000142 */ 			if (__t__ (__in__ (tgtid, self.target_id_counters))) {
/* 000143 */ 				__setitem__ (self.target_id_counters, tgtid, __call__ (__iadd__, null, __getitem__ (self.target_id_counters, tgtid), 1));
/* 000144 */ 				return '{}-{}'.format (tgtid, __getitem__ (self.target_id_counters, tgtid));
/* 000144 */ 			}
/* 000146 */ 			__setitem__ (self.target_id_counters, tgtid, 1);
/* 000147 */ 			return tgtid;
/* 000147 */ 		});}
/* 000150 */ 	}),
/* 000150 */ 	SectionCommandSpec: __class__ ('SectionCommandSpec', [object], {
/* 000150 */ 		__module__: __name__,
/* 000151 */ 		get __init__ () {return __get__ (this, function (self, cmdname, inline) {
/* 000151 */ 			if (typeof inline == 'undefined' || (inline != null && inline.hasOwnProperty ("__kwargtrans__"))) {;
/* 000151 */ 				var inline = false;
/* 000151 */ 			};
/* 000151 */ 			if (arguments.length) {
/* 000151 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000151 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000151 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000151 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000151 */ 						switch (__attrib0__) {
/* 000151 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000151 */ 							case 'cmdname': var cmdname = __allkwargs0__ [__attrib0__]; break;
/* 000151 */ 							case 'inline': var inline = __allkwargs0__ [__attrib0__]; break;
/* 000151 */ 						}
/* 000151 */ 					}
/* 000151 */ 				}
/* 000151 */ 			}
/* 000151 */ 			else {
/* 000151 */ 			}
/* 000152 */ 			__call__ (__call__ (__super__, null, FeatureHeadings.SectionCommandSpec, '__init__'), null, self);
/* 000153 */ 			self.cmdname = cmdname;
/* 000154 */ 			self.inline = inline;
/* 000154 */ 		});},
/* 000155 */ 		get __repr__ () {return __get__ (this, function (self) {
/* 000155 */ 			if (arguments.length) {
/* 000155 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000155 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000155 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000155 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000155 */ 						switch (__attrib0__) {
/* 000155 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000155 */ 						}
/* 000155 */ 					}
/* 000155 */ 				}
/* 000155 */ 			}
/* 000155 */ 			else {
/* 000155 */ 			}
/* 000156 */ 			return '{}(cmdname={}, inline={})'.format (self.__class__.__name__, self.cmdname, self.inline);
/* 000156 */ 		});}
/* 000156 */ 	}),
/* 000161 */ 	get __init__ () {return __get__ (this, function (self, section_commands_by_level) {
/* 000161 */ 		if (typeof section_commands_by_level == 'undefined' || (section_commands_by_level != null && section_commands_by_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000161 */ 			var section_commands_by_level = null;
/* 000161 */ 		};
/* 000161 */ 		if (arguments.length) {
/* 000161 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000161 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000161 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000161 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000161 */ 					switch (__attrib0__) {
/* 000161 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000161 */ 						case 'section_commands_by_level': var section_commands_by_level = __allkwargs0__ [__attrib0__]; break;
/* 000161 */ 					}
/* 000161 */ 				}
/* 000161 */ 			}
/* 000161 */ 		}
/* 000161 */ 		else {
/* 000161 */ 		}
/* 000162 */ 		__call__ (__call__ (__super__, null, FeatureHeadings, '__init__'), null, self);
/* 000163 */ 		if (__t__ (section_commands_by_level === null)) {
/* 000165 */ 			var section_commands_by_level = dict ({1: (function () {
/* 000165 */ 				var __accu0__ = self;
/* 000165 */ 				return __call__ (__accu0__.SectionCommandSpec, __accu0__, 'section');
/* 000166 */ 			}) (), 2: (function () {
/* 000166 */ 				var __accu0__ = self;
/* 000166 */ 				return __call__ (__accu0__.SectionCommandSpec, __accu0__, 'subsection');
/* 000167 */ 			}) (), 3: (function () {
/* 000167 */ 				var __accu0__ = self;
/* 000167 */ 				return __call__ (__accu0__.SectionCommandSpec, __accu0__, 'subsubsection');
/* 000168 */ 			}) (), 4: (function () {
/* 000168 */ 				var __accu0__ = self;
/* 000168 */ 				return __call__ (__accu0__.SectionCommandSpec, __accu0__, 'paragraph', __kwargtrans__ ({inline: true}));
/* 000169 */ 			}) (), 5: (function () {
/* 000169 */ 				var __accu0__ = self;
/* 000169 */ 				return __call__ (__accu0__.SectionCommandSpec, __accu0__, 'subparagraph', __kwargtrans__ ({inline: true}));
/* 000170 */ 			}) (), 6: (function () {
/* 000170 */ 				var __accu0__ = self;
/* 000170 */ 				return __call__ (__accu0__.SectionCommandSpec, __accu0__, 'subsubparagraph', __kwargtrans__ ({inline: true}));
/* 000170 */ 			}) ()});
/* 000170 */ 		}
/* 000173 */ 		var _mkspecobj = function (x) {
/* 000173 */ 			if (arguments.length) {
/* 000173 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000173 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000173 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000173 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000173 */ 						switch (__attrib0__) {
/* 000173 */ 							case 'x': var x = __allkwargs0__ [__attrib0__]; break;
/* 000173 */ 						}
/* 000173 */ 					}
/* 000173 */ 				}
/* 000173 */ 			}
/* 000173 */ 			else {
/* 000173 */ 			}
/* 000174 */ 			if (__t__ (__call__ (isinstance, null, x, self.SectionCommandSpec))) {
/* 000175 */ 				return x;
/* 000175 */ 			}
/* 000176 */ 			if (__t__ (__call__ (isinstance, null, x, str))) {
/* 000177 */ 				return (function () {
/* 000177 */ 					var __accu0__ = self;
/* 000177 */ 					return __call__ (__accu0__.SectionCommandSpec, __accu0__, x);
/* 000177 */ 				}) ();
/* 000177 */ 			}
/* 000178 */ 			return (function () {
/* 000178 */ 				var __accu0__ = self;
/* 000178 */ 				return __call__ (__accu0__.SectionCommandSpec, __accu0__, __kwargtrans__ (x));
/* 000178 */ 			}) ();
/* 000178 */ 		};
/* 000182 */ 		self.section_commands_by_level = (function () {
/* 000182 */ 			var __accu0__ = [];
/* 000184 */ 			var __iterable0__ = (function () {
/* 000184 */ 				var __accu1__ = __call__ (dict, null, section_commands_by_level);
/* 000184 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000184 */ 			}) ();
/* 000184 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000184 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000184 */ 				var level = __left0__ [0];
/* 000184 */ 				var x = __left0__ [1];
/* 000184 */ 				(function () {
/* 000184 */ 					var __accu1__ = __accu0__;
/* 000183 */ 					return __call__ (__accu1__.append, __accu1__, [level, __call__ (_mkspecobj, null, x)]);
/* 000183 */ 				}) ();
/* 000183 */ 			}
/* 000183 */ 			return dict (__accu0__);
/* 000183 */ 		}) ();
/* 000183 */ 	});},
/* 000187 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000187 */ 		if (arguments.length) {
/* 000187 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000187 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000187 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000187 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000187 */ 					switch (__attrib0__) {
/* 000187 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000187 */ 					}
/* 000187 */ 				}
/* 000187 */ 			}
/* 000187 */ 		}
/* 000187 */ 		else {
/* 000187 */ 		}
/* 000188 */ 		return __call__ (dict, null, __kwargtrans__ ({macros: (function () {
/* 000188 */ 			var __accu0__ = [];
/* 000195 */ 			var __iterable0__ = (function () {
/* 000195 */ 				var __accu1__ = self.section_commands_by_level;
/* 000195 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 000195 */ 			}) ();
/* 000195 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000195 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000195 */ 				var level = __left0__ [0];
/* 000195 */ 				var sectioncmdspec = __left0__ [1];
/* 000195 */ 				(function () {
/* 000195 */ 					var __accu1__ = __accu0__;
/* 000190 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (HeadingMacro, null, __kwargtrans__ ({macroname: sectioncmdspec.cmdname, heading_level: level, inline_heading: sectioncmdspec.inline})));
/* 000190 */ 				}) ();
/* 000190 */ 			}
/* 000190 */ 			return __accu0__;
/* 000190 */ 		}) ()}));
/* 000190 */ 	});}
/* 000190 */ });
/* 000006 */ 
//# sourceMappingURL=llm.feature.headings.map