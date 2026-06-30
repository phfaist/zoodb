/* 000001 */ // Transcrypt'ed from Python, 2026-06-30 21:51:24
/* 000012 */ var logging = {};
/* 000012 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000020 */ import {Feature} from './flm.feature._base.js';
/* 000019 */ import {FLMArgumentSpec} from './flm.flmenvironment.js';
/* 000018 */ import {FLMMacroSpecBase} from './flm.flmspecinfo.js';
/* 000016 */ import * as latexnodes_parsers from './pylatexenc.latexnodes.parsers.js';
/* 000015 */ import {LatexWalkerLocatedError, ParsedArgumentsInfo} from './pylatexenc.latexnodes.js';
/* 000012 */ import * as __module_logging__ from './logging.js';
/* 000012 */ __nest__ (logging, '', __module_logging__);
/* 000012 */ export {FLMMacroSpecBase, ParsedArgumentsInfo, Feature, latexnodes_parsers, FLMArgumentSpec, LatexWalkerLocatedError};
/* 000001 */ var __name__ = 'flm.feature.graphics';
/* 000013 */ export var logger = (function () {
/* 000013 */ 	var __accu0__ = logging;
/* 000013 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000013 */ }) ();
/* 000023 */ export var GraphicsResource =  __class__ ('GraphicsResource', [object], {
/* 000023 */ 	__module__: __name__,
/* 000098 */ 	get __init__ () {return __get__ (this, function (self, src_url) {
/* 000098 */ 		var srcset = null;
/* 000098 */ 		var graphics_type = null;
/* 000098 */ 		var dpi = null;
/* 000098 */ 		var pixel_dimensions = null;
/* 000098 */ 		var physical_dimensions = null;
/* 000098 */ 		var source_info = null;
/* 000098 */ 		if (arguments.length) {
/* 000098 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000098 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000098 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000098 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000098 */ 					switch (__attrib0__) {
/* 000098 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000098 */ 						case 'src_url': var src_url = __allkwargs0__ [__attrib0__]; break;
/* 000098 */ 						case 'srcset': var srcset = __allkwargs0__ [__attrib0__]; break;
/* 000098 */ 						case 'graphics_type': var graphics_type = __allkwargs0__ [__attrib0__]; break;
/* 000098 */ 						case 'dpi': var dpi = __allkwargs0__ [__attrib0__]; break;
/* 000098 */ 						case 'pixel_dimensions': var pixel_dimensions = __allkwargs0__ [__attrib0__]; break;
/* 000098 */ 						case 'physical_dimensions': var physical_dimensions = __allkwargs0__ [__attrib0__]; break;
/* 000098 */ 						case 'source_info': var source_info = __allkwargs0__ [__attrib0__]; break;
/* 000098 */ 					}
/* 000098 */ 				}
/* 000098 */ 			}
/* 000098 */ 		}
/* 000098 */ 		else {
/* 000098 */ 		}
/* 000125 */ 		__call__ (__call__ (__super__, null, GraphicsResource, '__init__'), null, self);
/* 000126 */ 		self.src_url = src_url;
/* 000127 */ 		self.srcset = srcset;
/* 000128 */ 		self.graphics_type = graphics_type;
/* 000129 */ 		self.dpi = dpi;
/* 000130 */ 		self.pixel_dimensions = pixel_dimensions;
/* 000131 */ 		self.physical_dimensions = physical_dimensions;
/* 000132 */ 		self.source_info = source_info;
/* 000133 */ 		self._fields = tuple (['src_url', 'srcset', 'graphics_type', 'dpi', 'pixel_dimensions', 'physical_dimensions', 'source_info']);
/* 000133 */ 	});},
/* 000137 */ 	get asdict () {return __get__ (this, function (self) {
/* 000137 */ 		if (arguments.length) {
/* 000137 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000137 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000137 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000137 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000137 */ 					switch (__attrib0__) {
/* 000137 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000137 */ 					}
/* 000137 */ 				}
/* 000137 */ 			}
/* 000137 */ 		}
/* 000137 */ 		else {
/* 000137 */ 		}
/* 000138 */ 		return (function () {
/* 000138 */ 			var __accu0__ = [];
/* 000138 */ 			var __iterable0__ = self._fields;
/* 000138 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000138 */ 				var k = __getitem__ (__iterable0__, __index0__);
/* 000138 */ 				(function () {
/* 000138 */ 					var __accu1__ = __accu0__;
/* 000138 */ 					return __call__ (__accu1__.append, __accu1__, [k, __call__ (getattr, null, self, k)]);
/* 000138 */ 				}) ();
/* 000138 */ 			}
/* 000138 */ 			return dict (__accu0__);
/* 000138 */ 		}) ();
/* 000138 */ 	});},
/* 000140 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000140 */ 		if (arguments.length) {
/* 000140 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000140 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000140 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000140 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000140 */ 					switch (__attrib0__) {
/* 000140 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000140 */ 					}
/* 000140 */ 				}
/* 000140 */ 			}
/* 000140 */ 		}
/* 000140 */ 		else {
/* 000140 */ 		}
/* 000141 */ 		return (function () {
/* 000141 */ 			var __accu0__ = '{}({})';
/* 000143 */ 			return __call__ (__accu0__.format, __accu0__, self.__class__.__name__, (function () {
/* 000143 */ 				var __accu1__ = ', ';
/* 000143 */ 				return __call__ (__accu1__.join, __accu1__, (function () {
/* 000143 */ 					var __accu2__ = [];
/* 000143 */ 					var __iterable0__ = self._fields;
/* 000143 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000143 */ 						var k = __getitem__ (__iterable0__, __index0__);
/* 000143 */ 						(function () {
/* 000143 */ 							var __accu3__ = __accu2__;
/* 000143 */ 							return __call__ (__accu3__.append, __accu3__, '{}={}'.format (k, __call__ (getattr, null, self, k)));
/* 000143 */ 						}) ();
/* 000143 */ 					}
/* 000143 */ 					return __accu2__;
/* 000143 */ 				}) ());
/* 000143 */ 			}) ());
/* 000143 */ 		}) ();
/* 000143 */ 	});}
/* 000143 */ });
/* 000153 */ export var SimpleIncludeGraphicsMacro =  __class__ ('SimpleIncludeGraphicsMacro', [FLMMacroSpecBase], {
/* 000153 */ 	__module__: __name__,
/* 000163 */ 	is_block_level: true,
/* 000165 */ 	allowed_in_standalone_mode: false,
/* 000171 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000171 */ 		var kwargs = dict ();
/* 000171 */ 		if (arguments.length) {
/* 000171 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000171 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000171 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000171 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000171 */ 					switch (__attrib0__) {
/* 000171 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000171 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000171 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000171 */ 					}
/* 000171 */ 				}
/* 000171 */ 				delete kwargs.__kwargtrans__;
/* 000171 */ 			}
/* 000171 */ 		}
/* 000171 */ 		else {
/* 000171 */ 		}
/* 000176 */ 		__call__ (__call__ (__super__, null, SimpleIncludeGraphicsMacro, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({macroname: 'includegraphics', arguments_spec_list: [__call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: (function () {
/* 000176 */ 			var __accu0__ = latexnodes_parsers;
/* 000176 */ 			return __call__ (__accu0__.LatexCharsGroupParser, __accu0__, __kwargtrans__ ({delimiters: tuple (['[', ']']), optional: true}));
/* 000183 */ 		}) (), argname: 'graphics_options'})), __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: (function () {
/* 000183 */ 			var __accu0__ = latexnodes_parsers;
/* 000183 */ 			return __call__ (__accu0__.LatexCharsGroupParser, __accu0__, __kwargtrans__ ({delimiters: tuple (['{', '}'])}));
/* 000183 */ 		}) (), argname: 'graphics_path'}))]}, kwargs)));
/* 000183 */ 	});},
/* 000192 */ 	_fields: tuple (['macroname']),
/* 000194 */ 	get get_flm_doc () {return __get__ (this, function (self) {
/* 000194 */ 		if (arguments.length) {
/* 000194 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000194 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000194 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000194 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000194 */ 					switch (__attrib0__) {
/* 000194 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000194 */ 					}
/* 000194 */ 				}
/* 000194 */ 			}
/* 000194 */ 		}
/* 000194 */ 		else {
/* 000194 */ 		}
/* 000195 */ 		return 'Insert an external graphics object.';
/* 000195 */ 	});},
/* 000197 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000197 */ 		if (arguments.length) {
/* 000197 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000197 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000197 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000197 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000197 */ 					switch (__attrib0__) {
/* 000197 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000197 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000197 */ 					}
/* 000197 */ 				}
/* 000197 */ 			}
/* 000197 */ 		}
/* 000197 */ 		else {
/* 000197 */ 		}
/* 000199 */ 		var node_args = (function () {
/* 000199 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000199 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['graphics_options', 'graphics_path']));
/* 000199 */ 		}) ();
/* 000203 */ 		node.flmarg_graphics_options_value = (function () {
/* 000203 */ 			var __accu0__ = __getitem__ (node_args, 'graphics_options');
/* 000203 */ 			return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000203 */ 		}) ();
/* 000205 */ 		node.flmarg_graphics_path = (function () {
/* 000205 */ 			var __accu0__ = __getitem__ (node_args, 'graphics_path');
/* 000205 */ 			return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000205 */ 		}) ();
/* 000207 */ 		if (__t__ (node.flmarg_graphics_options_value)) {
/* 000208 */ 			var __except0__ = __call__ (LatexWalkerLocatedError, null, __add__ ('Graphics options are not supported for now: '.format (), '‘{}’'.format (node.flmarg_graphics_options_value)), __kwargtrans__ ({pos: __getitem__ (node_args, 'graphics_options').nodelist.pos}));
/* 000208 */ 			__except0__.__cause__ = null;
/* 000208 */ 			throw __except0__;
/* 000208 */ 		}
/* 000214 */ 		node.flm_resources = [dict ({'resource_type': 'graphics_path', 'resource_source_type': 'file', 'resource_source': node.flmarg_graphics_path})];
/* 000220 */ 		return node;
/* 000220 */ 	});},
/* 000222 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000222 */ 		if (arguments.length) {
/* 000222 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000222 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000222 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000222 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000222 */ 					switch (__attrib0__) {
/* 000222 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000222 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000222 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000222 */ 					}
/* 000222 */ 				}
/* 000222 */ 			}
/* 000222 */ 		}
/* 000222 */ 		else {
/* 000222 */ 		}
/* 000224 */ 		var fragment_renderer = render_context.fragment_renderer;
/* 000227 */ 		var graphics_path = node.flmarg_graphics_path;
/* 000229 */ 		if (__t__ (!__t__ (((function () {
/* 000229 */ 			var __accu0__ = render_context;
/* 000229 */ 			return __call__ (__accu0__.supports_feature, __accu0__, 'graphics_resource_provider');
/* 000229 */ 		}) ())))) {
/* 000230 */ 			var __except0__ = __call__ (RuntimeError, null, "FLM's ‘SimpleIncludeGraphicsSpecInfo’ (‘\\includegraphics’) requires a ‘graphics_resource_provider’ feature to be installed in the render context");
/* 000230 */ 			__except0__.__cause__ = null;
/* 000230 */ 			throw __except0__;
/* 000230 */ 		}
/* 000235 */ 		var resource_info = node.latex_walker.resource_info;
/* 000238 */ 		var graphics_resource_provider_mgr = (function () {
/* 000238 */ 			var __accu0__ = render_context;
/* 000238 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'graphics_resource_provider');
/* 000238 */ 		}) ();
/* 000240 */ 		var graphics_resource = (function () {
/* 000240 */ 			var __accu0__ = graphics_resource_provider_mgr;
/* 000240 */ 			return __call__ (__accu0__.get_graphics_resource, __accu0__, graphics_path, resource_info);
/* 000240 */ 		}) ();
/* 000242 */ 		return (function () {
/* 000242 */ 			var __accu0__ = fragment_renderer;
/* 000242 */ 			return __call__ (__accu0__.render_graphics_block, __accu0__, graphics_resource, render_context);
/* 000242 */ 		}) ();
/* 000242 */ 	});},
/* 000248 */ 	get recompose_pure_latex () {return __get__ (this, function (self, node, recomposer) {
/* 000248 */ 		if (arguments.length) {
/* 000248 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000248 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000248 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000248 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000248 */ 					switch (__attrib0__) {
/* 000248 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000248 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000248 */ 						case 'recomposer': var recomposer = __allkwargs0__ [__attrib0__]; break;
/* 000248 */ 					}
/* 000248 */ 				}
/* 000248 */ 			}
/* 000248 */ 		}
/* 000248 */ 		else {
/* 000248 */ 		}
/* 000250 */ 		var magnification = null;
/* 000252 */ 		if (__t__ (recomposer.render_context !== null)) {
/* 000254 */ 			var graphics_resource_provider_mgr = (function () {
/* 000254 */ 				var __accu0__ = recomposer.render_context;
/* 000254 */ 				return __call__ (__accu0__.feature_render_manager, __accu0__, 'graphics_resource_provider');
/* 000254 */ 			}) ();
/* 000256 */ 			var graphics_resource = (function () {
/* 000256 */ 				var __accu0__ = graphics_resource_provider_mgr;
/* 000256 */ 				return __call__ (__accu0__.get_graphics_resource, __accu0__, node.flmarg_graphics_path, __kwargtrans__ ({resource_info: node.latex_walker.resource_info}));
/* 000256 */ 			}) ();
/* 000260 */ 			var fragment_renderer = recomposer.render_context.fragment_renderer;
/* 000261 */ 			if (__t__ (fragment_renderer !== null)) {
/* 000263 */ 				if (__t__ (__t__ (__eq__ (graphics_resource.graphics_type, 'raster')) && __call__ (hasattr, null, fragment_renderer, 'graphics_raster_magnification'))) {
/* 000264 */ 					var magnification = fragment_renderer.graphics_raster_magnification;
/* 000264 */ 				}
/* 000265 */ 				else if (__t__ (__call__ (hasattr, null, fragment_renderer, 'graphics_vector_magnification'))) {
/* 000268 */ 					var magnification = fragment_renderer.graphics_vector_magnification;
/* 000268 */ 				}
/* 000268 */ 			}
/* 000268 */ 		}
/* 000269 */ 		else {
/* 000271 */ 			(function () {
/* 000271 */ 				var __accu0__ = logger;
/* 000271 */ 				return __call__ (__accu0__.warning, __accu0__, 'Recomposing pure latex: we have no access to a graphics resource provider (need a render_context in the pure latex recomposer for that). Graphics resource information will not be available.'.format ());
/* 000271 */ 			}) ();
/* 000276 */ 			var graphics_resource = __call__ (GraphicsResource, null, __kwargtrans__ ({src_url: node.flmarg_graphics_path}));
/* 000276 */ 		}
/* 000280 */ 		var recopt_graphics = (function () {
/* 000280 */ 			var __accu0__ = recomposer;
/* 000280 */ 			return __call__ (__accu0__.get_options, __accu0__, 'graphics');
/* 000280 */ 		}) ();
/* 000281 */ 		// pass;
/* 000284 */ 		var width_scale = (function () {
/* 000284 */ 			var __accu0__ = recopt_graphics;
/* 000284 */ 			return __call__ (__accu0__.py_get, __accu0__, 'width_scale', null);
/* 000284 */ 		}) ();
/* 000285 */ 		var set_max_width = (function () {
/* 000285 */ 			var __accu0__ = recopt_graphics;
/* 000285 */ 			return __call__ (__accu0__.py_get, __accu0__, 'set_max_width', '\\linewidth');
/* 000285 */ 		}) ();
/* 000287 */ 		if (__t__ (__t__ (magnification !== null) && width_scale !== null)) {
/* 000288 */ 			(function () {
/* 000288 */ 				var __accu0__ = logger;
/* 000288 */ 				return __call__ (__accu0__.warning, __accu0__, 'Applying graphics magnification both from magnification=%f from fragment_renderer option as well as from width_scale recomposer option.');
/* 000288 */ 			}) ();
/* 000292 */ 			var magnification = __mul__ (magnification, width_scale);
/* 000292 */ 		}
/* 000293 */ 		else if (__t__ (width_scale !== null)) {
/* 000295 */ 			var magnification = width_scale;
/* 000295 */ 		}
/* 000296 */ 		else if (__t__ (magnification === null)) {
/* 000298 */ 			var magnification = 1;
/* 000298 */ 		}
/* 000302 */ 		var graphics_options_list = [];
/* 000303 */ 		if (__t__ (graphics_resource.physical_dimensions !== null)) {
/* 000304 */ 			var __left0__ = graphics_resource.physical_dimensions;
/* 000304 */ 			var width_pt = __left0__ [0];
/* 000304 */ 			var _ = __left0__ [1];
/* 000305 */ 			if (__t__ (width_pt !== null)) {
/* 000306 */ 				var width_pt = __mul__ (__call__ (float, null, width_pt), magnification);
/* 000307 */ 				(function () {
/* 000307 */ 					var __accu0__ = graphics_options_list;
/* 000307 */ 					return __call__ (__accu0__.append, __accu0__, 'width={}bp'.format (width_pt));
/* 000307 */ 				}) ();
/* 000307 */ 			}
/* 000307 */ 		}
/* 000308 */ 		if (__t__ (__t__ (set_max_width !== null) && set_max_width !== false)) {
/* 000309 */ 			(function () {
/* 000309 */ 				var __accu0__ = recomposer;
/* 000309 */ 				return __call__ (__accu0__.ensure_latex_package, __accu0__, 'adjustbox', __kwargtrans__ ({options: 'export'}));
/* 000309 */ 			}) ();
/* 000310 */ 			(function () {
/* 000310 */ 				var __accu0__ = graphics_options_list;
/* 000310 */ 				return __call__ (__accu0__.append, __accu0__, 'max width={}'.format (set_max_width));
/* 000310 */ 			}) ();
/* 000310 */ 		}
/* 000314 */ 		return __add__ (__add__ (__add__ (__add__ ('\\includegraphics', (__t__ (graphics_options_list) ? __add__ (__add__ ('[', (function () {
/* 000314 */ 			var __accu0__ = ',';
/* 000314 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000314 */ 				var __accu1__ = [];
/* 000314 */ 				var __iterable0__ = graphics_options_list;
/* 000314 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000314 */ 					var opt = __getitem__ (__iterable0__, __index0__);
/* 000314 */ 					(function () {
/* 000314 */ 						var __accu2__ = __accu1__;
/* 000314 */ 						return __call__ (__accu2__.append, __accu2__, opt);
/* 000314 */ 					}) ();
/* 000314 */ 				}
/* 000314 */ 				return __accu1__;
/* 000314 */ 			}) ());
/* 000316 */ 		}) ()), ']') : '')), '{'), __call__ (str, null, graphics_resource.src_url)), '}');
/* 000316 */ 	});}
/* 000316 */ });
/* 000322 */ export var FeatureSimplePathGraphicsResourceProvider =  __class__ ('FeatureSimplePathGraphicsResourceProvider', [Feature], {
/* 000322 */ 	__module__: __name__,
/* 000330 */ 	feature_name: 'graphics_resource_provider',
/* 000333 */ 	feature_title: 'Include external graphics',
/* 000333 */ 	RenderManager: __class__ ('RenderManager', [Feature.RenderManager], {
/* 000333 */ 		__module__: __name__,
/* 000335 */ 		get get_graphics_resource () {return __get__ (this, function (self, graphics_path, resource_info) {
/* 000335 */ 			if (arguments.length) {
/* 000335 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000335 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000335 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000335 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000335 */ 						switch (__attrib0__) {
/* 000335 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000335 */ 							case 'graphics_path': var graphics_path = __allkwargs0__ [__attrib0__]; break;
/* 000335 */ 							case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000335 */ 						}
/* 000335 */ 					}
/* 000335 */ 				}
/* 000335 */ 			}
/* 000335 */ 			else {
/* 000335 */ 			}
/* 000337 */ 			return __call__ (GraphicsResource, null, __kwargtrans__ ({src_url: graphics_path}));
/* 000337 */ 		});}
/* 000337 */ 	})
/* 000337 */ });
/* 000342 */ export var FeatureClass = FeatureSimplePathGraphicsResourceProvider;
/* 000012 */ 
//# sourceMappingURL=flm.feature.graphics.map