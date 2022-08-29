/* 000001 */ // Transcrypt'ed from Python, 2022-08-29 11:35:12
/* 000006 */ var logging = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000014 */ import {Feature} from './llm.feature._base.js';
/* 000013 */ import {LLMArgumentSpec} from './llm.llmenvironment.js';
/* 000012 */ import {LLMMacroSpecBase} from './llm.llmspecinfo.js';
/* 000010 */ import * as latexnodes_parsers from './pylatexenc.latexnodes.parsers.js';
/* 000009 */ import {LatexWalkerParseError, ParsedArgumentsInfo} from './pylatexenc.latexnodes.js';
/* 000006 */ import * as __module_logging__ from './logging.js';
/* 000006 */ __nest__ (logging, '', __module_logging__);
/* 000006 */ export {latexnodes_parsers, LLMMacroSpecBase, LLMArgumentSpec, ParsedArgumentsInfo, Feature, LatexWalkerParseError};
/* 000001 */ var __name__ = 'llm.feature.graphics';
/* 000007 */ export var logger = (function () {
/* 000007 */ 	var __accu0__ = logging;
/* 000007 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000007 */ }) ();
/* 000017 */ export var GraphicsResource =  __class__ ('GraphicsResource', [object], {
/* 000017 */ 	__module__: __name__,
/* 000018 */ 	get __init__ () {return __get__ (this, function (self, src_url) {
/* 000018 */ 		var graphics_type = null;
/* 000018 */ 		var dpi = null;
/* 000018 */ 		var pixel_dimensions = null;
/* 000018 */ 		var physical_dimensions = null;
/* 000018 */ 		if (arguments.length) {
/* 000018 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000018 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000018 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000018 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000018 */ 					switch (__attrib0__) {
/* 000018 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000018 */ 						case 'src_url': var src_url = __allkwargs0__ [__attrib0__]; break;
/* 000018 */ 						case 'graphics_type': var graphics_type = __allkwargs0__ [__attrib0__]; break;
/* 000018 */ 						case 'dpi': var dpi = __allkwargs0__ [__attrib0__]; break;
/* 000018 */ 						case 'pixel_dimensions': var pixel_dimensions = __allkwargs0__ [__attrib0__]; break;
/* 000018 */ 						case 'physical_dimensions': var physical_dimensions = __allkwargs0__ [__attrib0__]; break;
/* 000018 */ 					}
/* 000018 */ 				}
/* 000018 */ 			}
/* 000018 */ 		}
/* 000018 */ 		else {
/* 000018 */ 		}
/* 000027 */ 		__call__ (__call__ (__super__, null, GraphicsResource, '__init__'), null, self);
/* 000028 */ 		self.src_url = src_url;
/* 000029 */ 		self.graphics_type = graphics_type;
/* 000030 */ 		self.dpi = dpi;
/* 000031 */ 		self.pixel_dimensions = pixel_dimensions;
/* 000032 */ 		self.physical_dimensions = physical_dimensions;
/* 000033 */ 		self._fields = tuple (['src_url', 'dpi', 'pixel_dimensions', 'physical_dimensions']);
/* 000033 */ 	});},
/* 000035 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000035 */ 		if (arguments.length) {
/* 000035 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000035 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000035 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000035 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000035 */ 					switch (__attrib0__) {
/* 000035 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000035 */ 					}
/* 000035 */ 				}
/* 000035 */ 			}
/* 000035 */ 		}
/* 000035 */ 		else {
/* 000035 */ 		}
/* 000036 */ 		return (function () {
/* 000036 */ 			var __accu0__ = '{}({})';
/* 000038 */ 			return __call__ (__accu0__.format, __accu0__, self.__class__.__name__, (function () {
/* 000038 */ 				var __accu1__ = ', ';
/* 000038 */ 				return __call__ (__accu1__.join, __accu1__, (function () {
/* 000038 */ 					var __accu2__ = [];
/* 000038 */ 					var __iterable0__ = self._fields;
/* 000038 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000038 */ 						var k = __getitem__ (__iterable0__, __index0__);
/* 000038 */ 						(function () {
/* 000038 */ 							var __accu3__ = __accu2__;
/* 000038 */ 							return __call__ (__accu3__.append, __accu3__, '{}={}'.format (k, __call__ (getattr, null, self, k)));
/* 000038 */ 						}) ();
/* 000038 */ 					}
/* 000038 */ 					return __accu2__;
/* 000038 */ 				}) ());
/* 000038 */ 			}) ());
/* 000038 */ 		}) ();
/* 000038 */ 	});}
/* 000038 */ });
/* 000048 */ export var SimpleIncludeGraphicsMacro =  __class__ ('SimpleIncludeGraphicsMacro', [LLMMacroSpecBase], {
/* 000048 */ 	__module__: __name__,
/* 000050 */ 	is_block_level: true,
/* 000052 */ 	allowed_in_standalone_mode: false,
/* 000058 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000058 */ 		var kwargs = dict ();
/* 000058 */ 		if (arguments.length) {
/* 000058 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000058 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000058 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000058 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000058 */ 					switch (__attrib0__) {
/* 000058 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000058 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000058 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000058 */ 					}
/* 000058 */ 				}
/* 000058 */ 				delete kwargs.__kwargtrans__;
/* 000058 */ 			}
/* 000058 */ 		}
/* 000058 */ 		else {
/* 000058 */ 		}
/* 000063 */ 		__call__ (__call__ (__super__, null, SimpleIncludeGraphicsMacro, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({macroname: 'includegraphics', arguments_spec_list: [__call__ (LLMArgumentSpec, null, __kwargtrans__ ({parser: (function () {
/* 000063 */ 			var __accu0__ = latexnodes_parsers;
/* 000063 */ 			return __call__ (__accu0__.LatexCharsGroupParser, __accu0__, __kwargtrans__ ({delimiters: tuple (['[', ']']), optional: true}));
/* 000070 */ 		}) (), argname: 'graphics_options'})), __call__ (LLMArgumentSpec, null, __kwargtrans__ ({parser: (function () {
/* 000070 */ 			var __accu0__ = latexnodes_parsers;
/* 000070 */ 			return __call__ (__accu0__.LatexCharsGroupParser, __accu0__, __kwargtrans__ ({delimiters: tuple (['{', '}'])}));
/* 000070 */ 		}) (), argname: 'graphics_path'}))]}, kwargs)));
/* 000070 */ 	});},
/* 000079 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000079 */ 		if (arguments.length) {
/* 000079 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000079 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000079 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000079 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000079 */ 					switch (__attrib0__) {
/* 000079 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000079 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000079 */ 					}
/* 000079 */ 				}
/* 000079 */ 			}
/* 000079 */ 		}
/* 000079 */ 		else {
/* 000079 */ 		}
/* 000081 */ 		var node_args = (function () {
/* 000081 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000081 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['graphics_options', 'graphics_path']));
/* 000081 */ 		}) ();
/* 000085 */ 		node.llmarg_graphics_options_value = (function () {
/* 000085 */ 			var __accu0__ = __getitem__ (node_args, 'graphics_options');
/* 000085 */ 			return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000085 */ 		}) ();
/* 000087 */ 		node.llmarg_graphics_path = (function () {
/* 000087 */ 			var __accu0__ = __getitem__ (node_args, 'graphics_path');
/* 000087 */ 			return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000087 */ 		}) ();
/* 000089 */ 		return node;
/* 000089 */ 	});},
/* 000091 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000091 */ 		if (arguments.length) {
/* 000091 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000091 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000091 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000091 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000091 */ 					switch (__attrib0__) {
/* 000091 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000091 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000091 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000091 */ 					}
/* 000091 */ 				}
/* 000091 */ 			}
/* 000091 */ 		}
/* 000091 */ 		else {
/* 000091 */ 		}
/* 000093 */ 		var fragment_renderer = render_context.fragment_renderer;
/* 000095 */ 		var graphics_options_value = node.llmarg_graphics_options_value;
/* 000096 */ 		var graphics_path = node.llmarg_graphics_path;
/* 000098 */ 		if (__t__ (graphics_options_value)) {
/* 000099 */ 			var __except0__ = __call__ (LatexWalkerParseError, null, 'Graphics options are not supported here: ‘{}’'.format (graphics_options_value), __kwargtrans__ ({pos: __getitem__ (node_args, 'graphics_options').nodelist.pos}));
/* 000099 */ 			__except0__.__cause__ = null;
/* 000099 */ 			throw __except0__;
/* 000099 */ 		}
/* 000104 */ 		if (__t__ (!__t__ (((function () {
/* 000104 */ 			var __accu0__ = render_context;
/* 000104 */ 			return __call__ (__accu0__.supports_feature, __accu0__, 'graphics_resource_provider');
/* 000104 */ 		}) ())))) {
/* 000105 */ 			var __except0__ = __call__ (RuntimeError, null, "LLM's ‘SimpleIncludeGraphicsSpecInfo’ (‘\\includegraphics’) requires a ‘graphics_resource_provider’ feature to be installed in the render context");
/* 000105 */ 			__except0__.__cause__ = null;
/* 000105 */ 			throw __except0__;
/* 000105 */ 		}
/* 000110 */ 		var resource_info = node.latex_walker.resource_info;
/* 000113 */ 		var graphics_resource_provider_mgr = (function () {
/* 000113 */ 			var __accu0__ = render_context;
/* 000113 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'graphics_resource_provider');
/* 000113 */ 		}) ();
/* 000115 */ 		var graphics_resource = (function () {
/* 000115 */ 			var __accu0__ = graphics_resource_provider_mgr;
/* 000115 */ 			return __call__ (__accu0__.get_graphics_resource, __accu0__, graphics_path, resource_info);
/* 000115 */ 		}) ();
/* 000117 */ 		return (function () {
/* 000117 */ 			var __accu0__ = fragment_renderer;
/* 000117 */ 			return __call__ (__accu0__.render_graphics_block, __accu0__, graphics_resource);
/* 000117 */ 		}) ();
/* 000117 */ 	});}
/* 000117 */ });
/* 000129 */ export var FeatureSimplePathGraphicsResourceProvider =  __class__ ('FeatureSimplePathGraphicsResourceProvider', [Feature], {
/* 000129 */ 	__module__: __name__,
/* 000133 */ 	feature_name: 'graphics_resource_provider',
/* 000133 */ 	RenderManager: __class__ ('RenderManager', [Feature.RenderManager], {
/* 000133 */ 		__module__: __name__,
/* 000135 */ 		get get_graphics_resource () {return __get__ (this, function (self, graphics_path, resource_info) {
/* 000135 */ 			if (arguments.length) {
/* 000135 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000135 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000135 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000135 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000135 */ 						switch (__attrib0__) {
/* 000135 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000135 */ 							case 'graphics_path': var graphics_path = __allkwargs0__ [__attrib0__]; break;
/* 000135 */ 							case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000135 */ 						}
/* 000135 */ 					}
/* 000135 */ 				}
/* 000135 */ 			}
/* 000135 */ 			else {
/* 000135 */ 			}
/* 000137 */ 			return __call__ (GraphicsResource, null, __kwargtrans__ ({src_url: graphics_path}));
/* 000137 */ 		});}
/* 000137 */ 	})
/* 000137 */ });
/* 000006 */ 
//# sourceMappingURL=llm.feature.graphics.map