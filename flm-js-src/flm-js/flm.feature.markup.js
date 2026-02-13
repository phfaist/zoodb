/* 000001 */ // Transcrypt'ed from Python, 2026-02-13 22:15:45
/* 000007 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000011 */ import {Feature} from './flm.feature._base.js';
/* 000007 */ import {SemanticBlockEnvironment, TextFormatMacro} from './flm.flmspecinfo.js';
/* 000007 */ export {TextFormatMacro, SemanticBlockEnvironment, Feature};
/* 000001 */ var __name__ = 'flm.feature.markup';
/* 000016 */ export var FeatureMarkup =  __class__ ('FeatureMarkup', [Feature], {
/* 000016 */ 	__module__: __name__,
/* 000018 */ 	feature_name: 'markup',
/* 000019 */ 	feature_title: 'Mark up parts chunks of text to produce custom text formatting or custom environments',
/* 000022 */ 	feature_flm_doc: '\n    Feature that lets you define custom macros and environments that render as\n    custom text formatting macros or custom semantic blocks.\n    ',
/* 000029 */ 	DocumentManager: null,
/* 000030 */ 	RenderManager: null,
/* 000033 */ 	get __init__ () {return __get__ (this, function (self, text_macros, semantic_environments) {
/* 000033 */ 		if (typeof text_macros == 'undefined' || (text_macros != null && text_macros.hasOwnProperty ("__kwargtrans__"))) {;
/* 000033 */ 			var text_macros = null;
/* 000033 */ 		};
/* 000033 */ 		if (typeof semantic_environments == 'undefined' || (semantic_environments != null && semantic_environments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000033 */ 			var semantic_environments = null;
/* 000033 */ 		};
/* 000033 */ 		if (arguments.length) {
/* 000033 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000033 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000033 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000033 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000033 */ 					switch (__attrib0__) {
/* 000033 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000033 */ 						case 'text_macros': var text_macros = __allkwargs0__ [__attrib0__]; break;
/* 000033 */ 						case 'semantic_environments': var semantic_environments = __allkwargs0__ [__attrib0__]; break;
/* 000033 */ 					}
/* 000033 */ 				}
/* 000033 */ 			}
/* 000033 */ 		}
/* 000033 */ 		else {
/* 000033 */ 		}
/* 000037 */ 		__call__ (__call__ (__super__, null, FeatureMarkup, '__init__'), null, self);
/* 000038 */ 		self.text_macros = __t__ (text_macros) || dict ({});
/* 000039 */ 		self.semantic_environments = __t__ (semantic_environments) || dict ({});
/* 000039 */ 	});},
/* 000042 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000042 */ 		if (arguments.length) {
/* 000042 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000042 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000042 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000042 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000042 */ 					switch (__attrib0__) {
/* 000042 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000042 */ 					}
/* 000042 */ 				}
/* 000042 */ 			}
/* 000042 */ 		}
/* 000042 */ 		else {
/* 000042 */ 		}
/* 000044 */ 		var macro_specs = [];
/* 000045 */ 		var __iterable0__ = (function () {
/* 000045 */ 			var __accu0__ = self.text_macros;
/* 000045 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000045 */ 		}) ();
/* 000045 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000045 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000045 */ 			var tmname = __left0__ [0];
/* 000045 */ 			var tmspec = __left0__ [1];
/* 000046 */ 			(function () {
/* 000046 */ 				var __accu0__ = macro_specs;
/* 000046 */ 				return __call__ (__accu0__.append, __accu0__, __call__ (TextFormatMacro, null, __kwargtrans__ (__mergekwargtrans__ ({macroname: tmname}, tmspec))));
/* 000046 */ 			}) ();
/* 000046 */ 		}
/* 000048 */ 		var environment_specs = [];
/* 000049 */ 		var __iterable0__ = (function () {
/* 000049 */ 			var __accu0__ = self.semantic_environments;
/* 000049 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000049 */ 		}) ();
/* 000049 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000049 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000049 */ 			var sename = __left0__ [0];
/* 000049 */ 			var sespec = __left0__ [1];
/* 000050 */ 			(function () {
/* 000050 */ 				var __accu0__ = environment_specs;
/* 000051 */ 				return __call__ (__accu0__.append, __accu0__, __call__ (SemanticBlockEnvironment, null, __kwargtrans__ (__mergekwargtrans__ ({environmentname: sename}, sespec))));
/* 000051 */ 			}) ();
/* 000051 */ 		}
/* 000054 */ 		return dict ({'macros': macro_specs, 'environments': environment_specs});
/* 000054 */ 	});}
/* 000054 */ });
/* 000062 */ export var FeatureClass = FeatureMarkup;
/* 000007 */ 
//# sourceMappingURL=flm.feature.markup.map