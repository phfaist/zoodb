/* 000001 */ // Transcrypt'ed from Python, 2022-09-11 22:27:58
/* 000006 */ var logging = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000014 */ import {Feature} from './llm.feature._base.js';
/* 000013 */ import {LLMArgumentSpec} from './llm.llmenvironment.js';
/* 000012 */ import {LLMMacroSpecBase} from './llm.llmspecinfo.js';
/* 000010 */ import * as latexnodes_parsers from './pylatexenc.latexnodes.parsers.js';
/* 000009 */ import {LatexWalkerParseError, ParsedArgumentsInfo} from './pylatexenc.latexnodes.js';
/* 000006 */ import * as __module_logging__ from './logging.js';
/* 000006 */ __nest__ (logging, '', __module_logging__);
/* 000006 */ export {LLMMacroSpecBase, Feature, latexnodes_parsers, LLMArgumentSpec, LatexWalkerParseError, ParsedArgumentsInfo};
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
/* 000033 */ 		self._fields = tuple (['src_url', 'graphics_type', 'dpi', 'pixel_dimensions', 'physical_dimensions']);
/* 000033 */ 	});},
/* 000036 */ 	get asdict () {return __get__ (this, function (self) {
/* 000036 */ 		if (arguments.length) {
/* 000036 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000036 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000036 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000036 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000036 */ 					switch (__attrib0__) {
/* 000036 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000036 */ 					}
/* 000036 */ 				}
/* 000036 */ 			}
/* 000036 */ 		}
/* 000036 */ 		else {
/* 000036 */ 		}
/* 000037 */ 		return (function () {
/* 000037 */ 			var __accu0__ = [];
/* 000037 */ 			var __iterable0__ = self._fields;
/* 000037 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000037 */ 				var k = __getitem__ (__iterable0__, __index0__);
/* 000037 */ 				(function () {
/* 000037 */ 					var __accu1__ = __accu0__;
/* 000037 */ 					return __call__ (__accu1__.append, __accu1__, [k, __call__ (getattr, null, self, k)]);
/* 000037 */ 				}) ();
/* 000037 */ 			}
/* 000037 */ 			return dict (__accu0__);
/* 000037 */ 		}) ();
/* 000037 */ 	});},
/* 000039 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000039 */ 		if (arguments.length) {
/* 000039 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000039 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000039 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000039 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000039 */ 					switch (__attrib0__) {
/* 000039 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000039 */ 					}
/* 000039 */ 				}
/* 000039 */ 			}
/* 000039 */ 		}
/* 000039 */ 		else {
/* 000039 */ 		}
/* 000040 */ 		return (function () {
/* 000040 */ 			var __accu0__ = '{}({})';
/* 000042 */ 			return __call__ (__accu0__.format, __accu0__, self.__class__.__name__, (function () {
/* 000042 */ 				var __accu1__ = ', ';
/* 000042 */ 				return __call__ (__accu1__.join, __accu1__, (function () {
/* 000042 */ 					var __accu2__ = [];
/* 000042 */ 					var __iterable0__ = self._fields;
/* 000042 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000042 */ 						var k = __getitem__ (__iterable0__, __index0__);
/* 000042 */ 						(function () {
/* 000042 */ 							var __accu3__ = __accu2__;
/* 000042 */ 							return __call__ (__accu3__.append, __accu3__, '{}={}'.format (k, __call__ (getattr, null, self, k)));
/* 000042 */ 						}) ();
/* 000042 */ 					}
/* 000042 */ 					return __accu2__;
/* 000042 */ 				}) ());
/* 000042 */ 			}) ());
/* 000042 */ 		}) ();
/* 000042 */ 	});}
/* 000042 */ });
/* 000052 */ export var SimpleIncludeGraphicsMacro =  __class__ ('SimpleIncludeGraphicsMacro', [LLMMacroSpecBase], {
/* 000052 */ 	__module__: __name__,
/* 000054 */ 	is_block_level: true,
/* 000056 */ 	allowed_in_standalone_mode: false,
/* 000062 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000062 */ 		var kwargs = dict ();
/* 000062 */ 		if (arguments.length) {
/* 000062 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000062 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000062 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000062 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000062 */ 					switch (__attrib0__) {
/* 000062 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000062 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000062 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000062 */ 					}
/* 000062 */ 				}
/* 000062 */ 				delete kwargs.__kwargtrans__;
/* 000062 */ 			}
/* 000062 */ 		}
/* 000062 */ 		else {
/* 000062 */ 		}
/* 000067 */ 		__call__ (__call__ (__super__, null, SimpleIncludeGraphicsMacro, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({macroname: 'includegraphics', arguments_spec_list: [__call__ (LLMArgumentSpec, null, __kwargtrans__ ({parser: (function () {
/* 000067 */ 			var __accu0__ = latexnodes_parsers;
/* 000067 */ 			return __call__ (__accu0__.LatexCharsGroupParser, __accu0__, __kwargtrans__ ({delimiters: tuple (['[', ']']), optional: true}));
/* 000074 */ 		}) (), argname: 'graphics_options'})), __call__ (LLMArgumentSpec, null, __kwargtrans__ ({parser: (function () {
/* 000074 */ 			var __accu0__ = latexnodes_parsers;
/* 000074 */ 			return __call__ (__accu0__.LatexCharsGroupParser, __accu0__, __kwargtrans__ ({delimiters: tuple (['{', '}'])}));
/* 000074 */ 		}) (), argname: 'graphics_path'}))]}, kwargs)));
/* 000074 */ 	});},
/* 000083 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000083 */ 		if (arguments.length) {
/* 000083 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000083 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000083 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000083 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000083 */ 					switch (__attrib0__) {
/* 000083 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000083 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000083 */ 					}
/* 000083 */ 				}
/* 000083 */ 			}
/* 000083 */ 		}
/* 000083 */ 		else {
/* 000083 */ 		}
/* 000085 */ 		var node_args = (function () {
/* 000085 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000085 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['graphics_options', 'graphics_path']));
/* 000085 */ 		}) ();
/* 000089 */ 		node.llmarg_graphics_options_value = (function () {
/* 000089 */ 			var __accu0__ = __getitem__ (node_args, 'graphics_options');
/* 000089 */ 			return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000089 */ 		}) ();
/* 000091 */ 		node.llmarg_graphics_path = (function () {
/* 000091 */ 			var __accu0__ = __getitem__ (node_args, 'graphics_path');
/* 000091 */ 			return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000091 */ 		}) ();
/* 000093 */ 		node.llm_resources = [dict ({'resource_type': 'graphics_path', 'resource_source_type': 'file', 'resource_source': node.llmarg_graphics_path})];
/* 000099 */ 		return node;
/* 000099 */ 	});},
/* 000101 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000101 */ 		if (arguments.length) {
/* 000101 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000101 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000101 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000101 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000101 */ 					switch (__attrib0__) {
/* 000101 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000101 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000101 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000101 */ 					}
/* 000101 */ 				}
/* 000101 */ 			}
/* 000101 */ 		}
/* 000101 */ 		else {
/* 000101 */ 		}
/* 000103 */ 		var fragment_renderer = render_context.fragment_renderer;
/* 000105 */ 		var graphics_options_value = node.llmarg_graphics_options_value;
/* 000106 */ 		var graphics_path = node.llmarg_graphics_path;
/* 000108 */ 		if (__t__ (graphics_options_value)) {
/* 000109 */ 			var __except0__ = __call__ (LatexWalkerParseError, null, 'Graphics options are not supported here: ‘{}’'.format (graphics_options_value), __kwargtrans__ ({pos: __getitem__ (node_args, 'graphics_options').nodelist.pos}));
/* 000109 */ 			__except0__.__cause__ = null;
/* 000109 */ 			throw __except0__;
/* 000109 */ 		}
/* 000114 */ 		if (__t__ (!__t__ (((function () {
/* 000114 */ 			var __accu0__ = render_context;
/* 000114 */ 			return __call__ (__accu0__.supports_feature, __accu0__, 'graphics_resource_provider');
/* 000114 */ 		}) ())))) {
/* 000115 */ 			var __except0__ = __call__ (RuntimeError, null, "LLM's ‘SimpleIncludeGraphicsSpecInfo’ (‘\\includegraphics’) requires a ‘graphics_resource_provider’ feature to be installed in the render context");
/* 000115 */ 			__except0__.__cause__ = null;
/* 000115 */ 			throw __except0__;
/* 000115 */ 		}
/* 000120 */ 		var resource_info = node.latex_walker.resource_info;
/* 000123 */ 		var graphics_resource_provider_mgr = (function () {
/* 000123 */ 			var __accu0__ = render_context;
/* 000123 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'graphics_resource_provider');
/* 000123 */ 		}) ();
/* 000125 */ 		var graphics_resource = (function () {
/* 000125 */ 			var __accu0__ = graphics_resource_provider_mgr;
/* 000125 */ 			return __call__ (__accu0__.get_graphics_resource, __accu0__, graphics_path, resource_info);
/* 000125 */ 		}) ();
/* 000127 */ 		return (function () {
/* 000127 */ 			var __accu0__ = fragment_renderer;
/* 000127 */ 			return __call__ (__accu0__.render_graphics_block, __accu0__, graphics_resource);
/* 000127 */ 		}) ();
/* 000127 */ 	});}
/* 000127 */ });
/* 000139 */ export var FeatureSimplePathGraphicsResourceProvider =  __class__ ('FeatureSimplePathGraphicsResourceProvider', [Feature], {
/* 000139 */ 	__module__: __name__,
/* 000143 */ 	feature_name: 'graphics_resource_provider',
/* 000143 */ 	RenderManager: __class__ ('RenderManager', [Feature.RenderManager], {
/* 000143 */ 		__module__: __name__,
/* 000145 */ 		get get_graphics_resource () {return __get__ (this, function (self, graphics_path, resource_info) {
/* 000145 */ 			if (arguments.length) {
/* 000145 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000145 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000145 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000145 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000145 */ 						switch (__attrib0__) {
/* 000145 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000145 */ 							case 'graphics_path': var graphics_path = __allkwargs0__ [__attrib0__]; break;
/* 000145 */ 							case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000145 */ 						}
/* 000145 */ 					}
/* 000145 */ 				}
/* 000145 */ 			}
/* 000145 */ 			else {
/* 000145 */ 			}
/* 000147 */ 			return __call__ (GraphicsResource, null, __kwargtrans__ ({src_url: graphics_path}));
/* 000147 */ 		});}
/* 000147 */ 	})
/* 000147 */ });
/* 000006 */ 
//# sourceMappingURL=llm.feature.graphics.map