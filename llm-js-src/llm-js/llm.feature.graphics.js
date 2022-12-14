/* 000001 */ // Transcrypt'ed from Python, 2022-12-14 17:06:09
/* 000006 */ var logging = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000014 */ import {Feature} from './llm.feature._base.js';
/* 000013 */ import {LLMArgumentSpec} from './llm.llmenvironment.js';
/* 000012 */ import {LLMMacroSpecBase} from './llm.llmspecinfo.js';
/* 000010 */ import * as latexnodes_parsers from './pylatexenc.latexnodes.parsers.js';
/* 000009 */ import {LatexWalkerParseError, ParsedArgumentsInfo} from './pylatexenc.latexnodes.js';
/* 000006 */ import * as __module_logging__ from './logging.js';
/* 000006 */ __nest__ (logging, '', __module_logging__);
/* 000006 */ export {Feature, LatexWalkerParseError, latexnodes_parsers, ParsedArgumentsInfo, LLMArgumentSpec, LLMMacroSpecBase};
/* 000001 */ var __name__ = 'llm.feature.graphics';
/* 000007 */ export var logger = (function () {
/* 000007 */ 	var __accu0__ = logging;
/* 000007 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000007 */ }) ();
/* 000017 */ export var GraphicsResource =  __class__ ('GraphicsResource', [object], {
/* 000017 */ 	__module__: __name__,
/* 000018 */ 	get __init__ () {return __get__ (this, function (self, src_url) {
/* 000018 */ 		var srcset = null;
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
/* 000018 */ 						case 'srcset': var srcset = __allkwargs0__ [__attrib0__]; break;
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
/* 000028 */ 		__call__ (__call__ (__super__, null, GraphicsResource, '__init__'), null, self);
/* 000029 */ 		self.src_url = src_url;
/* 000030 */ 		self.srcset = srcset;
/* 000031 */ 		self.graphics_type = graphics_type;
/* 000032 */ 		self.dpi = dpi;
/* 000033 */ 		self.pixel_dimensions = pixel_dimensions;
/* 000034 */ 		self.physical_dimensions = physical_dimensions;
/* 000035 */ 		self._fields = tuple (['src_url', 'srcset', 'graphics_type', 'dpi', 'pixel_dimensions', 'physical_dimensions']);
/* 000035 */ 	});},
/* 000038 */ 	get asdict () {return __get__ (this, function (self) {
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
/* 000039 */ 			var __accu0__ = [];
/* 000039 */ 			var __iterable0__ = self._fields;
/* 000039 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000039 */ 				var k = __getitem__ (__iterable0__, __index0__);
/* 000039 */ 				(function () {
/* 000039 */ 					var __accu1__ = __accu0__;
/* 000039 */ 					return __call__ (__accu1__.append, __accu1__, [k, __call__ (getattr, null, self, k)]);
/* 000039 */ 				}) ();
/* 000039 */ 			}
/* 000039 */ 			return dict (__accu0__);
/* 000039 */ 		}) ();
/* 000039 */ 	});},
/* 000041 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000041 */ 		if (arguments.length) {
/* 000041 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000041 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000041 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000041 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000041 */ 					switch (__attrib0__) {
/* 000041 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000041 */ 					}
/* 000041 */ 				}
/* 000041 */ 			}
/* 000041 */ 		}
/* 000041 */ 		else {
/* 000041 */ 		}
/* 000042 */ 		return (function () {
/* 000042 */ 			var __accu0__ = '{}({})';
/* 000044 */ 			return __call__ (__accu0__.format, __accu0__, self.__class__.__name__, (function () {
/* 000044 */ 				var __accu1__ = ', ';
/* 000044 */ 				return __call__ (__accu1__.join, __accu1__, (function () {
/* 000044 */ 					var __accu2__ = [];
/* 000044 */ 					var __iterable0__ = self._fields;
/* 000044 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000044 */ 						var k = __getitem__ (__iterable0__, __index0__);
/* 000044 */ 						(function () {
/* 000044 */ 							var __accu3__ = __accu2__;
/* 000044 */ 							return __call__ (__accu3__.append, __accu3__, '{}={}'.format (k, __call__ (getattr, null, self, k)));
/* 000044 */ 						}) ();
/* 000044 */ 					}
/* 000044 */ 					return __accu2__;
/* 000044 */ 				}) ());
/* 000044 */ 			}) ());
/* 000044 */ 		}) ();
/* 000044 */ 	});}
/* 000044 */ });
/* 000054 */ export var SimpleIncludeGraphicsMacro =  __class__ ('SimpleIncludeGraphicsMacro', [LLMMacroSpecBase], {
/* 000054 */ 	__module__: __name__,
/* 000056 */ 	is_block_level: true,
/* 000058 */ 	allowed_in_standalone_mode: false,
/* 000064 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000064 */ 		var kwargs = dict ();
/* 000064 */ 		if (arguments.length) {
/* 000064 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000064 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000064 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000064 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000064 */ 					switch (__attrib0__) {
/* 000064 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000064 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000064 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000064 */ 					}
/* 000064 */ 				}
/* 000064 */ 				delete kwargs.__kwargtrans__;
/* 000064 */ 			}
/* 000064 */ 		}
/* 000064 */ 		else {
/* 000064 */ 		}
/* 000069 */ 		__call__ (__call__ (__super__, null, SimpleIncludeGraphicsMacro, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({macroname: 'includegraphics', arguments_spec_list: [__call__ (LLMArgumentSpec, null, __kwargtrans__ ({parser: (function () {
/* 000069 */ 			var __accu0__ = latexnodes_parsers;
/* 000069 */ 			return __call__ (__accu0__.LatexCharsGroupParser, __accu0__, __kwargtrans__ ({delimiters: tuple (['[', ']']), optional: true}));
/* 000076 */ 		}) (), argname: 'graphics_options'})), __call__ (LLMArgumentSpec, null, __kwargtrans__ ({parser: (function () {
/* 000076 */ 			var __accu0__ = latexnodes_parsers;
/* 000076 */ 			return __call__ (__accu0__.LatexCharsGroupParser, __accu0__, __kwargtrans__ ({delimiters: tuple (['{', '}'])}));
/* 000076 */ 		}) (), argname: 'graphics_path'}))]}, kwargs)));
/* 000076 */ 	});},
/* 000085 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000085 */ 		if (arguments.length) {
/* 000085 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000085 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000085 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000085 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000085 */ 					switch (__attrib0__) {
/* 000085 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000085 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000085 */ 					}
/* 000085 */ 				}
/* 000085 */ 			}
/* 000085 */ 		}
/* 000085 */ 		else {
/* 000085 */ 		}
/* 000087 */ 		var node_args = (function () {
/* 000087 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000087 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['graphics_options', 'graphics_path']));
/* 000087 */ 		}) ();
/* 000091 */ 		node.llmarg_graphics_options_value = (function () {
/* 000091 */ 			var __accu0__ = __getitem__ (node_args, 'graphics_options');
/* 000091 */ 			return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000091 */ 		}) ();
/* 000093 */ 		node.llmarg_graphics_path = (function () {
/* 000093 */ 			var __accu0__ = __getitem__ (node_args, 'graphics_path');
/* 000093 */ 			return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000093 */ 		}) ();
/* 000095 */ 		node.llm_resources = [dict ({'resource_type': 'graphics_path', 'resource_source_type': 'file', 'resource_source': node.llmarg_graphics_path})];
/* 000101 */ 		return node;
/* 000101 */ 	});},
/* 000103 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000103 */ 		if (arguments.length) {
/* 000103 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000103 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000103 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000103 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000103 */ 					switch (__attrib0__) {
/* 000103 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000103 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000103 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000103 */ 					}
/* 000103 */ 				}
/* 000103 */ 			}
/* 000103 */ 		}
/* 000103 */ 		else {
/* 000103 */ 		}
/* 000105 */ 		var fragment_renderer = render_context.fragment_renderer;
/* 000107 */ 		var graphics_options_value = node.llmarg_graphics_options_value;
/* 000108 */ 		var graphics_path = node.llmarg_graphics_path;
/* 000110 */ 		if (__t__ (graphics_options_value)) {
/* 000111 */ 			var __except0__ = __call__ (LatexWalkerParseError, null, 'Graphics options are not supported here: ‘{}’'.format (graphics_options_value), __kwargtrans__ ({pos: __getitem__ (node_args, 'graphics_options').nodelist.pos}));
/* 000111 */ 			__except0__.__cause__ = null;
/* 000111 */ 			throw __except0__;
/* 000111 */ 		}
/* 000116 */ 		if (__t__ (!__t__ (((function () {
/* 000116 */ 			var __accu0__ = render_context;
/* 000116 */ 			return __call__ (__accu0__.supports_feature, __accu0__, 'graphics_resource_provider');
/* 000116 */ 		}) ())))) {
/* 000117 */ 			var __except0__ = __call__ (RuntimeError, null, "LLM's ‘SimpleIncludeGraphicsSpecInfo’ (‘\\includegraphics’) requires a ‘graphics_resource_provider’ feature to be installed in the render context");
/* 000117 */ 			__except0__.__cause__ = null;
/* 000117 */ 			throw __except0__;
/* 000117 */ 		}
/* 000122 */ 		var resource_info = node.latex_walker.resource_info;
/* 000125 */ 		var graphics_resource_provider_mgr = (function () {
/* 000125 */ 			var __accu0__ = render_context;
/* 000125 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'graphics_resource_provider');
/* 000125 */ 		}) ();
/* 000127 */ 		var graphics_resource = (function () {
/* 000127 */ 			var __accu0__ = graphics_resource_provider_mgr;
/* 000127 */ 			return __call__ (__accu0__.get_graphics_resource, __accu0__, graphics_path, resource_info);
/* 000127 */ 		}) ();
/* 000129 */ 		return (function () {
/* 000129 */ 			var __accu0__ = fragment_renderer;
/* 000129 */ 			return __call__ (__accu0__.render_graphics_block, __accu0__, graphics_resource);
/* 000129 */ 		}) ();
/* 000129 */ 	});}
/* 000129 */ });
/* 000141 */ export var FeatureSimplePathGraphicsResourceProvider =  __class__ ('FeatureSimplePathGraphicsResourceProvider', [Feature], {
/* 000141 */ 	__module__: __name__,
/* 000145 */ 	feature_name: 'graphics_resource_provider',
/* 000145 */ 	RenderManager: __class__ ('RenderManager', [Feature.RenderManager], {
/* 000145 */ 		__module__: __name__,
/* 000147 */ 		get get_graphics_resource () {return __get__ (this, function (self, graphics_path, resource_info) {
/* 000147 */ 			if (arguments.length) {
/* 000147 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000147 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000147 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000147 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000147 */ 						switch (__attrib0__) {
/* 000147 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000147 */ 							case 'graphics_path': var graphics_path = __allkwargs0__ [__attrib0__]; break;
/* 000147 */ 							case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000147 */ 						}
/* 000147 */ 					}
/* 000147 */ 				}
/* 000147 */ 			}
/* 000147 */ 			else {
/* 000147 */ 			}
/* 000149 */ 			return __call__ (GraphicsResource, null, __kwargtrans__ ({src_url: graphics_path}));
/* 000149 */ 		});}
/* 000149 */ 	})
/* 000149 */ });
/* 000006 */ 
//# sourceMappingURL=llm.feature.graphics.map