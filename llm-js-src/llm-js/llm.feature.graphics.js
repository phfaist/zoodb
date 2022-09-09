/* 000001 */ // Transcrypt'ed from Python, 2022-09-09 15:10:09
/* 000006 */ var logging = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000014 */ import {Feature} from './llm.feature._base.js';
/* 000013 */ import {LLMArgumentSpec} from './llm.llmenvironment.js';
/* 000012 */ import {LLMMacroSpecBase} from './llm.llmspecinfo.js';
/* 000010 */ import * as latexnodes_parsers from './pylatexenc.latexnodes.parsers.js';
/* 000009 */ import {LatexWalkerParseError, ParsedArgumentsInfo} from './pylatexenc.latexnodes.js';
/* 000006 */ import * as __module_logging__ from './logging.js';
/* 000006 */ __nest__ (logging, '', __module_logging__);
/* 000006 */ export {ParsedArgumentsInfo, LLMMacroSpecBase, LatexWalkerParseError, latexnodes_parsers, Feature, LLMArgumentSpec};
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
/* 000035 */ 	get asdict () {return __get__ (this, function (self) {
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
/* 000036 */ 			var __accu0__ = [];
/* 000036 */ 			var __iterable0__ = self._fields;
/* 000036 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000036 */ 				var k = __getitem__ (__iterable0__, __index0__);
/* 000036 */ 				(function () {
/* 000036 */ 					var __accu1__ = __accu0__;
/* 000036 */ 					return __call__ (__accu1__.append, __accu1__, [k, __call__ (getattr, null, self, k)]);
/* 000036 */ 				}) ();
/* 000036 */ 			}
/* 000036 */ 			return dict (__accu0__);
/* 000036 */ 		}) ();
/* 000036 */ 	});},
/* 000038 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000038 */ 		if (arguments.length) {
/* 000038 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000038 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000038 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000038 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000038 */ 					switch (__attrib0__) {
/* 000038 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000038 */ 					}
/* 000038 */ 				}
/* 000038 */ 			}
/* 000038 */ 		}
/* 000038 */ 		else {
/* 000038 */ 		}
/* 000039 */ 		return (function () {
/* 000039 */ 			var __accu0__ = '{}({})';
/* 000041 */ 			return __call__ (__accu0__.format, __accu0__, self.__class__.__name__, (function () {
/* 000041 */ 				var __accu1__ = ', ';
/* 000041 */ 				return __call__ (__accu1__.join, __accu1__, (function () {
/* 000041 */ 					var __accu2__ = [];
/* 000041 */ 					var __iterable0__ = self._fields;
/* 000041 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000041 */ 						var k = __getitem__ (__iterable0__, __index0__);
/* 000041 */ 						(function () {
/* 000041 */ 							var __accu3__ = __accu2__;
/* 000041 */ 							return __call__ (__accu3__.append, __accu3__, '{}={}'.format (k, __call__ (getattr, null, self, k)));
/* 000041 */ 						}) ();
/* 000041 */ 					}
/* 000041 */ 					return __accu2__;
/* 000041 */ 				}) ());
/* 000041 */ 			}) ());
/* 000041 */ 		}) ();
/* 000041 */ 	});}
/* 000041 */ });
/* 000051 */ export var SimpleIncludeGraphicsMacro =  __class__ ('SimpleIncludeGraphicsMacro', [LLMMacroSpecBase], {
/* 000051 */ 	__module__: __name__,
/* 000053 */ 	is_block_level: true,
/* 000055 */ 	allowed_in_standalone_mode: false,
/* 000061 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000061 */ 		var kwargs = dict ();
/* 000061 */ 		if (arguments.length) {
/* 000061 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000061 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000061 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000061 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000061 */ 					switch (__attrib0__) {
/* 000061 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000061 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000061 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000061 */ 					}
/* 000061 */ 				}
/* 000061 */ 				delete kwargs.__kwargtrans__;
/* 000061 */ 			}
/* 000061 */ 		}
/* 000061 */ 		else {
/* 000061 */ 		}
/* 000066 */ 		__call__ (__call__ (__super__, null, SimpleIncludeGraphicsMacro, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({macroname: 'includegraphics', arguments_spec_list: [__call__ (LLMArgumentSpec, null, __kwargtrans__ ({parser: (function () {
/* 000066 */ 			var __accu0__ = latexnodes_parsers;
/* 000066 */ 			return __call__ (__accu0__.LatexCharsGroupParser, __accu0__, __kwargtrans__ ({delimiters: tuple (['[', ']']), optional: true}));
/* 000073 */ 		}) (), argname: 'graphics_options'})), __call__ (LLMArgumentSpec, null, __kwargtrans__ ({parser: (function () {
/* 000073 */ 			var __accu0__ = latexnodes_parsers;
/* 000073 */ 			return __call__ (__accu0__.LatexCharsGroupParser, __accu0__, __kwargtrans__ ({delimiters: tuple (['{', '}'])}));
/* 000073 */ 		}) (), argname: 'graphics_path'}))]}, kwargs)));
/* 000073 */ 	});},
/* 000082 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000082 */ 		if (arguments.length) {
/* 000082 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000082 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000082 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000082 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000082 */ 					switch (__attrib0__) {
/* 000082 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000082 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000082 */ 					}
/* 000082 */ 				}
/* 000082 */ 			}
/* 000082 */ 		}
/* 000082 */ 		else {
/* 000082 */ 		}
/* 000084 */ 		var node_args = (function () {
/* 000084 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000084 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['graphics_options', 'graphics_path']));
/* 000084 */ 		}) ();
/* 000088 */ 		node.llmarg_graphics_options_value = (function () {
/* 000088 */ 			var __accu0__ = __getitem__ (node_args, 'graphics_options');
/* 000088 */ 			return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000088 */ 		}) ();
/* 000090 */ 		node.llmarg_graphics_path = (function () {
/* 000090 */ 			var __accu0__ = __getitem__ (node_args, 'graphics_path');
/* 000090 */ 			return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000090 */ 		}) ();
/* 000092 */ 		return node;
/* 000092 */ 	});},
/* 000094 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000094 */ 		if (arguments.length) {
/* 000094 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000094 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000094 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000094 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000094 */ 					switch (__attrib0__) {
/* 000094 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000094 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000094 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000094 */ 					}
/* 000094 */ 				}
/* 000094 */ 			}
/* 000094 */ 		}
/* 000094 */ 		else {
/* 000094 */ 		}
/* 000096 */ 		var fragment_renderer = render_context.fragment_renderer;
/* 000098 */ 		var graphics_options_value = node.llmarg_graphics_options_value;
/* 000099 */ 		var graphics_path = node.llmarg_graphics_path;
/* 000101 */ 		if (__t__ (graphics_options_value)) {
/* 000102 */ 			var __except0__ = __call__ (LatexWalkerParseError, null, 'Graphics options are not supported here: ‘{}’'.format (graphics_options_value), __kwargtrans__ ({pos: __getitem__ (node_args, 'graphics_options').nodelist.pos}));
/* 000102 */ 			__except0__.__cause__ = null;
/* 000102 */ 			throw __except0__;
/* 000102 */ 		}
/* 000107 */ 		if (__t__ (!__t__ (((function () {
/* 000107 */ 			var __accu0__ = render_context;
/* 000107 */ 			return __call__ (__accu0__.supports_feature, __accu0__, 'graphics_resource_provider');
/* 000107 */ 		}) ())))) {
/* 000108 */ 			var __except0__ = __call__ (RuntimeError, null, "LLM's ‘SimpleIncludeGraphicsSpecInfo’ (‘\\includegraphics’) requires a ‘graphics_resource_provider’ feature to be installed in the render context");
/* 000108 */ 			__except0__.__cause__ = null;
/* 000108 */ 			throw __except0__;
/* 000108 */ 		}
/* 000113 */ 		var resource_info = node.latex_walker.resource_info;
/* 000116 */ 		var graphics_resource_provider_mgr = (function () {
/* 000116 */ 			var __accu0__ = render_context;
/* 000116 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'graphics_resource_provider');
/* 000116 */ 		}) ();
/* 000118 */ 		var graphics_resource = (function () {
/* 000118 */ 			var __accu0__ = graphics_resource_provider_mgr;
/* 000118 */ 			return __call__ (__accu0__.get_graphics_resource, __accu0__, graphics_path, resource_info);
/* 000118 */ 		}) ();
/* 000120 */ 		return (function () {
/* 000120 */ 			var __accu0__ = fragment_renderer;
/* 000120 */ 			return __call__ (__accu0__.render_graphics_block, __accu0__, graphics_resource);
/* 000120 */ 		}) ();
/* 000120 */ 	});}
/* 000120 */ });
/* 000132 */ export var FeatureSimplePathGraphicsResourceProvider =  __class__ ('FeatureSimplePathGraphicsResourceProvider', [Feature], {
/* 000132 */ 	__module__: __name__,
/* 000136 */ 	feature_name: 'graphics_resource_provider',
/* 000136 */ 	RenderManager: __class__ ('RenderManager', [Feature.RenderManager], {
/* 000136 */ 		__module__: __name__,
/* 000138 */ 		get get_graphics_resource () {return __get__ (this, function (self, graphics_path, resource_info) {
/* 000138 */ 			if (arguments.length) {
/* 000138 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000138 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000138 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000138 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000138 */ 						switch (__attrib0__) {
/* 000138 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000138 */ 							case 'graphics_path': var graphics_path = __allkwargs0__ [__attrib0__]; break;
/* 000138 */ 							case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000138 */ 						}
/* 000138 */ 					}
/* 000138 */ 				}
/* 000138 */ 			}
/* 000138 */ 			else {
/* 000138 */ 			}
/* 000140 */ 			return __call__ (GraphicsResource, null, __kwargtrans__ ({src_url: graphics_path}));
/* 000140 */ 		});}
/* 000140 */ 	})
/* 000140 */ });
/* 000006 */ 
//# sourceMappingURL=llm.feature.graphics.map