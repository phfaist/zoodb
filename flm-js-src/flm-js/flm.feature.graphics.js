/* 000001 */ // Transcrypt'ed from Python, 2026-02-23 11:51:26
/* 000006 */ var logging = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000014 */ import {Feature} from './flm.feature._base.js';
/* 000013 */ import {FLMArgumentSpec} from './flm.flmenvironment.js';
/* 000012 */ import {FLMMacroSpecBase} from './flm.flmspecinfo.js';
/* 000010 */ import * as latexnodes_parsers from './pylatexenc.latexnodes.parsers.js';
/* 000009 */ import {LatexWalkerLocatedError, ParsedArgumentsInfo} from './pylatexenc.latexnodes.js';
/* 000006 */ import * as __module_logging__ from './logging.js';
/* 000006 */ __nest__ (logging, '', __module_logging__);
/* 000006 */ export {LatexWalkerLocatedError, Feature, FLMArgumentSpec, ParsedArgumentsInfo, latexnodes_parsers, FLMMacroSpecBase};
/* 000001 */ var __name__ = 'flm.feature.graphics';
/* 000007 */ export var logger = (function () {
/* 000007 */ 	var __accu0__ = logging;
/* 000007 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000007 */ }) ();
/* 000017 */ export var GraphicsResource =  __class__ ('GraphicsResource', [object], {
/* 000017 */ 	__module__: __name__,
/* 000092 */ 	get __init__ () {return __get__ (this, function (self, src_url) {
/* 000092 */ 		var srcset = null;
/* 000092 */ 		var graphics_type = null;
/* 000092 */ 		var dpi = null;
/* 000092 */ 		var pixel_dimensions = null;
/* 000092 */ 		var physical_dimensions = null;
/* 000092 */ 		var source_info = null;
/* 000092 */ 		if (arguments.length) {
/* 000092 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000092 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000092 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000092 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000092 */ 					switch (__attrib0__) {
/* 000092 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000092 */ 						case 'src_url': var src_url = __allkwargs0__ [__attrib0__]; break;
/* 000092 */ 						case 'srcset': var srcset = __allkwargs0__ [__attrib0__]; break;
/* 000092 */ 						case 'graphics_type': var graphics_type = __allkwargs0__ [__attrib0__]; break;
/* 000092 */ 						case 'dpi': var dpi = __allkwargs0__ [__attrib0__]; break;
/* 000092 */ 						case 'pixel_dimensions': var pixel_dimensions = __allkwargs0__ [__attrib0__]; break;
/* 000092 */ 						case 'physical_dimensions': var physical_dimensions = __allkwargs0__ [__attrib0__]; break;
/* 000092 */ 						case 'source_info': var source_info = __allkwargs0__ [__attrib0__]; break;
/* 000092 */ 					}
/* 000092 */ 				}
/* 000092 */ 			}
/* 000092 */ 		}
/* 000092 */ 		else {
/* 000092 */ 		}
/* 000103 */ 		__call__ (__call__ (__super__, null, GraphicsResource, '__init__'), null, self);
/* 000104 */ 		self.src_url = src_url;
/* 000105 */ 		self.srcset = srcset;
/* 000106 */ 		self.graphics_type = graphics_type;
/* 000107 */ 		self.dpi = dpi;
/* 000108 */ 		self.pixel_dimensions = pixel_dimensions;
/* 000109 */ 		self.physical_dimensions = physical_dimensions;
/* 000110 */ 		self.source_info = source_info;
/* 000111 */ 		self._fields = tuple (['src_url', 'srcset', 'graphics_type', 'dpi', 'pixel_dimensions', 'physical_dimensions', 'source_info']);
/* 000111 */ 	});},
/* 000115 */ 	get asdict () {return __get__ (this, function (self) {
/* 000115 */ 		if (arguments.length) {
/* 000115 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000115 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000115 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000115 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000115 */ 					switch (__attrib0__) {
/* 000115 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000115 */ 					}
/* 000115 */ 				}
/* 000115 */ 			}
/* 000115 */ 		}
/* 000115 */ 		else {
/* 000115 */ 		}
/* 000116 */ 		return (function () {
/* 000116 */ 			var __accu0__ = [];
/* 000116 */ 			var __iterable0__ = self._fields;
/* 000116 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000116 */ 				var k = __getitem__ (__iterable0__, __index0__);
/* 000116 */ 				(function () {
/* 000116 */ 					var __accu1__ = __accu0__;
/* 000116 */ 					return __call__ (__accu1__.append, __accu1__, [k, __call__ (getattr, null, self, k)]);
/* 000116 */ 				}) ();
/* 000116 */ 			}
/* 000116 */ 			return dict (__accu0__);
/* 000116 */ 		}) ();
/* 000116 */ 	});},
/* 000118 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000118 */ 		if (arguments.length) {
/* 000118 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000118 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000118 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000118 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000118 */ 					switch (__attrib0__) {
/* 000118 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000118 */ 					}
/* 000118 */ 				}
/* 000118 */ 			}
/* 000118 */ 		}
/* 000118 */ 		else {
/* 000118 */ 		}
/* 000119 */ 		return (function () {
/* 000119 */ 			var __accu0__ = '{}({})';
/* 000121 */ 			return __call__ (__accu0__.format, __accu0__, self.__class__.__name__, (function () {
/* 000121 */ 				var __accu1__ = ', ';
/* 000121 */ 				return __call__ (__accu1__.join, __accu1__, (function () {
/* 000121 */ 					var __accu2__ = [];
/* 000121 */ 					var __iterable0__ = self._fields;
/* 000121 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000121 */ 						var k = __getitem__ (__iterable0__, __index0__);
/* 000121 */ 						(function () {
/* 000121 */ 							var __accu3__ = __accu2__;
/* 000121 */ 							return __call__ (__accu3__.append, __accu3__, '{}={}'.format (k, __call__ (getattr, null, self, k)));
/* 000121 */ 						}) ();
/* 000121 */ 					}
/* 000121 */ 					return __accu2__;
/* 000121 */ 				}) ());
/* 000121 */ 			}) ());
/* 000121 */ 		}) ();
/* 000121 */ 	});}
/* 000121 */ });
/* 000131 */ export var SimpleIncludeGraphicsMacro =  __class__ ('SimpleIncludeGraphicsMacro', [FLMMacroSpecBase], {
/* 000131 */ 	__module__: __name__,
/* 000133 */ 	is_block_level: true,
/* 000135 */ 	allowed_in_standalone_mode: false,
/* 000141 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000141 */ 		var kwargs = dict ();
/* 000141 */ 		if (arguments.length) {
/* 000141 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000141 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000141 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000141 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000141 */ 					switch (__attrib0__) {
/* 000141 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000141 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000141 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000141 */ 					}
/* 000141 */ 				}
/* 000141 */ 				delete kwargs.__kwargtrans__;
/* 000141 */ 			}
/* 000141 */ 		}
/* 000141 */ 		else {
/* 000141 */ 		}
/* 000146 */ 		__call__ (__call__ (__super__, null, SimpleIncludeGraphicsMacro, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({macroname: 'includegraphics', arguments_spec_list: [__call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: (function () {
/* 000146 */ 			var __accu0__ = latexnodes_parsers;
/* 000146 */ 			return __call__ (__accu0__.LatexCharsGroupParser, __accu0__, __kwargtrans__ ({delimiters: tuple (['[', ']']), optional: true}));
/* 000153 */ 		}) (), argname: 'graphics_options'})), __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: (function () {
/* 000153 */ 			var __accu0__ = latexnodes_parsers;
/* 000153 */ 			return __call__ (__accu0__.LatexCharsGroupParser, __accu0__, __kwargtrans__ ({delimiters: tuple (['{', '}'])}));
/* 000153 */ 		}) (), argname: 'graphics_path'}))]}, kwargs)));
/* 000153 */ 	});},
/* 000162 */ 	_fields: tuple (['macroname']),
/* 000164 */ 	get get_flm_doc () {return __get__ (this, function (self) {
/* 000164 */ 		if (arguments.length) {
/* 000164 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000164 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000164 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000164 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000164 */ 					switch (__attrib0__) {
/* 000164 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000164 */ 					}
/* 000164 */ 				}
/* 000164 */ 			}
/* 000164 */ 		}
/* 000164 */ 		else {
/* 000164 */ 		}
/* 000165 */ 		return 'Insert an external graphics object.';
/* 000165 */ 	});},
/* 000167 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000167 */ 		if (arguments.length) {
/* 000167 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000167 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000167 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000167 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000167 */ 					switch (__attrib0__) {
/* 000167 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000167 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000167 */ 					}
/* 000167 */ 				}
/* 000167 */ 			}
/* 000167 */ 		}
/* 000167 */ 		else {
/* 000167 */ 		}
/* 000169 */ 		var node_args = (function () {
/* 000169 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000169 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['graphics_options', 'graphics_path']));
/* 000169 */ 		}) ();
/* 000173 */ 		node.flmarg_graphics_options_value = (function () {
/* 000173 */ 			var __accu0__ = __getitem__ (node_args, 'graphics_options');
/* 000173 */ 			return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000173 */ 		}) ();
/* 000175 */ 		node.flmarg_graphics_path = (function () {
/* 000175 */ 			var __accu0__ = __getitem__ (node_args, 'graphics_path');
/* 000175 */ 			return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000175 */ 		}) ();
/* 000177 */ 		if (__t__ (node.flmarg_graphics_options_value)) {
/* 000178 */ 			var __except0__ = __call__ (LatexWalkerLocatedError, null, __add__ ('Graphics options are not supported for now: '.format (), '‘{}’'.format (node.flmarg_graphics_options_value)), __kwargtrans__ ({pos: __getitem__ (node_args, 'graphics_options').nodelist.pos}));
/* 000178 */ 			__except0__.__cause__ = null;
/* 000178 */ 			throw __except0__;
/* 000178 */ 		}
/* 000184 */ 		node.flm_resources = [dict ({'resource_type': 'graphics_path', 'resource_source_type': 'file', 'resource_source': node.flmarg_graphics_path})];
/* 000190 */ 		return node;
/* 000190 */ 	});},
/* 000192 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000192 */ 		if (arguments.length) {
/* 000192 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000192 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000192 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000192 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000192 */ 					switch (__attrib0__) {
/* 000192 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000192 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000192 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000192 */ 					}
/* 000192 */ 				}
/* 000192 */ 			}
/* 000192 */ 		}
/* 000192 */ 		else {
/* 000192 */ 		}
/* 000194 */ 		var fragment_renderer = render_context.fragment_renderer;
/* 000197 */ 		var graphics_path = node.flmarg_graphics_path;
/* 000199 */ 		if (__t__ (!__t__ (((function () {
/* 000199 */ 			var __accu0__ = render_context;
/* 000199 */ 			return __call__ (__accu0__.supports_feature, __accu0__, 'graphics_resource_provider');
/* 000199 */ 		}) ())))) {
/* 000200 */ 			var __except0__ = __call__ (RuntimeError, null, "FLM's ‘SimpleIncludeGraphicsSpecInfo’ (‘\\includegraphics’) requires a ‘graphics_resource_provider’ feature to be installed in the render context");
/* 000200 */ 			__except0__.__cause__ = null;
/* 000200 */ 			throw __except0__;
/* 000200 */ 		}
/* 000205 */ 		var resource_info = node.latex_walker.resource_info;
/* 000208 */ 		var graphics_resource_provider_mgr = (function () {
/* 000208 */ 			var __accu0__ = render_context;
/* 000208 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'graphics_resource_provider');
/* 000208 */ 		}) ();
/* 000210 */ 		var graphics_resource = (function () {
/* 000210 */ 			var __accu0__ = graphics_resource_provider_mgr;
/* 000210 */ 			return __call__ (__accu0__.get_graphics_resource, __accu0__, graphics_path, resource_info);
/* 000210 */ 		}) ();
/* 000212 */ 		return (function () {
/* 000212 */ 			var __accu0__ = fragment_renderer;
/* 000212 */ 			return __call__ (__accu0__.render_graphics_block, __accu0__, graphics_resource, render_context);
/* 000212 */ 		}) ();
/* 000212 */ 	});},
/* 000218 */ 	get recompose_pure_latex () {return __get__ (this, function (self, node, recomposer) {
/* 000218 */ 		if (arguments.length) {
/* 000218 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000218 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000218 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000218 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000218 */ 					switch (__attrib0__) {
/* 000218 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000218 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000218 */ 						case 'recomposer': var recomposer = __allkwargs0__ [__attrib0__]; break;
/* 000218 */ 					}
/* 000218 */ 				}
/* 000218 */ 			}
/* 000218 */ 		}
/* 000218 */ 		else {
/* 000218 */ 		}
/* 000220 */ 		var magnification = null;
/* 000222 */ 		if (__t__ (recomposer.render_context !== null)) {
/* 000224 */ 			var graphics_resource_provider_mgr = (function () {
/* 000224 */ 				var __accu0__ = recomposer.render_context;
/* 000224 */ 				return __call__ (__accu0__.feature_render_manager, __accu0__, 'graphics_resource_provider');
/* 000224 */ 			}) ();
/* 000226 */ 			var graphics_resource = (function () {
/* 000226 */ 				var __accu0__ = graphics_resource_provider_mgr;
/* 000226 */ 				return __call__ (__accu0__.get_graphics_resource, __accu0__, node.flmarg_graphics_path, __kwargtrans__ ({resource_info: node.latex_walker.resource_info}));
/* 000226 */ 			}) ();
/* 000230 */ 			var fragment_renderer = recomposer.render_context.fragment_renderer;
/* 000231 */ 			if (__t__ (fragment_renderer !== null)) {
/* 000233 */ 				if (__t__ (__t__ (__eq__ (graphics_resource.graphics_type, 'raster')) && __call__ (hasattr, null, fragment_renderer, 'graphics_raster_magnification'))) {
/* 000234 */ 					var magnification = fragment_renderer.graphics_raster_magnification;
/* 000234 */ 				}
/* 000235 */ 				else if (__t__ (__call__ (hasattr, null, fragment_renderer, 'graphics_vector_magnification'))) {
/* 000238 */ 					var magnification = fragment_renderer.graphics_vector_magnification;
/* 000238 */ 				}
/* 000238 */ 			}
/* 000238 */ 		}
/* 000239 */ 		else {
/* 000241 */ 			(function () {
/* 000241 */ 				var __accu0__ = logger;
/* 000241 */ 				return __call__ (__accu0__.warning, __accu0__, 'Recomposing pure latex: we have no access to a graphics resource provider (need a render_context in the pure latex recomposer for that). Graphics resource information will not be available.'.format ());
/* 000241 */ 			}) ();
/* 000246 */ 			var graphics_resource = __call__ (GraphicsResource, null, __kwargtrans__ ({src_url: node.flmarg_graphics_path}));
/* 000246 */ 		}
/* 000250 */ 		var recopt_graphics = (function () {
/* 000250 */ 			var __accu0__ = recomposer;
/* 000250 */ 			return __call__ (__accu0__.get_options, __accu0__, 'graphics');
/* 000250 */ 		}) ();
/* 000251 */ 		// pass;
/* 000254 */ 		var width_scale = (function () {
/* 000254 */ 			var __accu0__ = recopt_graphics;
/* 000254 */ 			return __call__ (__accu0__.py_get, __accu0__, 'width_scale', null);
/* 000254 */ 		}) ();
/* 000255 */ 		var set_max_width = (function () {
/* 000255 */ 			var __accu0__ = recopt_graphics;
/* 000255 */ 			return __call__ (__accu0__.py_get, __accu0__, 'set_max_width', '\\linewidth');
/* 000255 */ 		}) ();
/* 000257 */ 		if (__t__ (__t__ (magnification !== null) && width_scale !== null)) {
/* 000258 */ 			(function () {
/* 000258 */ 				var __accu0__ = logger;
/* 000258 */ 				return __call__ (__accu0__.warning, __accu0__, 'Applying graphics magnification both from magnification=%f from fragment_renderer option as well as from width_scale recomposer option.');
/* 000258 */ 			}) ();
/* 000262 */ 			var magnification = __mul__ (magnification, width_scale);
/* 000262 */ 		}
/* 000263 */ 		else if (__t__ (width_scale !== null)) {
/* 000265 */ 			var magnification = width_scale;
/* 000265 */ 		}
/* 000266 */ 		else if (__t__ (magnification === null)) {
/* 000268 */ 			var magnification = 1;
/* 000268 */ 		}
/* 000272 */ 		var graphics_options_list = [];
/* 000273 */ 		if (__t__ (graphics_resource.physical_dimensions !== null)) {
/* 000274 */ 			var __left0__ = graphics_resource.physical_dimensions;
/* 000274 */ 			var width_pt = __left0__ [0];
/* 000274 */ 			var _ = __left0__ [1];
/* 000275 */ 			if (__t__ (width_pt !== null)) {
/* 000276 */ 				var width_pt = __mul__ (__call__ (float, null, width_pt), magnification);
/* 000277 */ 				(function () {
/* 000277 */ 					var __accu0__ = graphics_options_list;
/* 000277 */ 					return __call__ (__accu0__.append, __accu0__, 'width={}bp'.format (width_pt));
/* 000277 */ 				}) ();
/* 000277 */ 			}
/* 000277 */ 		}
/* 000278 */ 		if (__t__ (__t__ (set_max_width !== null) && set_max_width !== false)) {
/* 000279 */ 			(function () {
/* 000279 */ 				var __accu0__ = recomposer;
/* 000279 */ 				return __call__ (__accu0__.ensure_latex_package, __accu0__, 'adjustbox', __kwargtrans__ ({options: 'export'}));
/* 000279 */ 			}) ();
/* 000280 */ 			(function () {
/* 000280 */ 				var __accu0__ = graphics_options_list;
/* 000280 */ 				return __call__ (__accu0__.append, __accu0__, 'max width={}'.format (set_max_width));
/* 000280 */ 			}) ();
/* 000280 */ 		}
/* 000284 */ 		return __add__ (__add__ (__add__ (__add__ ('\\includegraphics', (__t__ (graphics_options_list) ? __add__ (__add__ ('[', (function () {
/* 000284 */ 			var __accu0__ = ',';
/* 000284 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000284 */ 				var __accu1__ = [];
/* 000284 */ 				var __iterable0__ = graphics_options_list;
/* 000284 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000284 */ 					var opt = __getitem__ (__iterable0__, __index0__);
/* 000284 */ 					(function () {
/* 000284 */ 						var __accu2__ = __accu1__;
/* 000284 */ 						return __call__ (__accu2__.append, __accu2__, opt);
/* 000284 */ 					}) ();
/* 000284 */ 				}
/* 000284 */ 				return __accu1__;
/* 000284 */ 			}) ());
/* 000286 */ 		}) ()), ']') : '')), '{'), __call__ (str, null, graphics_resource.src_url)), '}');
/* 000286 */ 	});}
/* 000286 */ });
/* 000292 */ export var FeatureSimplePathGraphicsResourceProvider =  __class__ ('FeatureSimplePathGraphicsResourceProvider', [Feature], {
/* 000292 */ 	__module__: __name__,
/* 000294 */ 	feature_name: 'graphics_resource_provider',
/* 000297 */ 	feature_title: 'Include external graphics',
/* 000297 */ 	RenderManager: __class__ ('RenderManager', [Feature.RenderManager], {
/* 000297 */ 		__module__: __name__,
/* 000299 */ 		get get_graphics_resource () {return __get__ (this, function (self, graphics_path, resource_info) {
/* 000299 */ 			if (arguments.length) {
/* 000299 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000299 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000299 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000299 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000299 */ 						switch (__attrib0__) {
/* 000299 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000299 */ 							case 'graphics_path': var graphics_path = __allkwargs0__ [__attrib0__]; break;
/* 000299 */ 							case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000299 */ 						}
/* 000299 */ 					}
/* 000299 */ 				}
/* 000299 */ 			}
/* 000299 */ 			else {
/* 000299 */ 			}
/* 000301 */ 			return __call__ (GraphicsResource, null, __kwargtrans__ ({src_url: graphics_path}));
/* 000301 */ 		});}
/* 000301 */ 	})
/* 000301 */ });
/* 000306 */ export var FeatureClass = FeatureSimplePathGraphicsResourceProvider;
/* 000006 */ 
//# sourceMappingURL=flm.feature.graphics.map