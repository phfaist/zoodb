/* 000001 */ // Transcrypt'ed from Python, 2026-02-12 21:38:43
/* 000007 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000012 */ import {SimpleLatexDefinitionsFeature} from './flm.feature._base.js';
/* 000007 */ import {ConstantValueMacro, ConstantValueSpecials, FLMMacroSpecBase, ParagraphBreakSpecials, TextFormatMacro} from './flm.flmspecinfo.js';
/* 000007 */ export {ConstantValueMacro, ConstantValueSpecials, ParagraphBreakSpecials, SimpleLatexDefinitionsFeature, TextFormatMacro, FLMMacroSpecBase};
/* 000001 */ var __name__ = 'flm.feature.baseformatting';
/* 000015 */ export var NoExtraSpaceAfterDotMacro =  __class__ ('NoExtraSpaceAfterDotMacro', [FLMMacroSpecBase], {
/* 000015 */ 	__module__: __name__,
/* 000022 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000022 */ 		if (arguments.length) {
/* 000022 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000022 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000022 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000022 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000022 */ 					switch (__attrib0__) {
/* 000022 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000022 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000022 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000022 */ 					}
/* 000022 */ 				}
/* 000022 */ 			}
/* 000022 */ 		}
/* 000022 */ 		else {
/* 000022 */ 		}
/* 000023 */ 		if (__t__ (__call__ (hasattr, null, render_context.fragment_renderer, 'latex_macro_no_extra_space_after_dot'))) {
/* 000024 */ 			return render_context.fragment_renderer.latex_macro_no_extra_space_after_dot;
/* 000024 */ 		}
/* 000026 */ 		return '';
/* 000026 */ 	});}
/* 000026 */ });
/* 000029 */ export var FeatureBaseFormatting =  __class__ ('FeatureBaseFormatting', [SimpleLatexDefinitionsFeature], {
/* 000029 */ 	__module__: __name__,
/* 000031 */ 	feature_name: 'baseformatting',
/* 000032 */ 	feature_title: 'Basic formatting',
/* 000034 */ 	feature_flm_doc: '\n    You can produce basic formatting, including emphasis/italics and\n    boldface using the following macros.  Several macros also provide a way to\n    typeset literal characters that would otherwise have a special meaning in\n    your FLM environment.\n\n    Input accents, special characters, etc., directly as Unicode:\n    \\verbcode+éàààé😅Á+. Note that source files should always be encoded using\n    the UTF-8 encoding. You can use pretty quotes \\verbcode+‘+ \\verbcode+’+\n    \\verbcode+“+ \\verbcode+”+; dashes \\verbcode|—| (em dash), \\verbcode|–| (en\n    dash, for ranges); spaces \\verbcode|\xa0| (non-breaking space), \\verbcode|\u2003|\n    (em space), \\verbcode|\u2009| (thin space), etc.\n    ',
/* 000048 */ 	latex_definitions: dict ({'macros': [__call__ (ConstantValueMacro, null, 'textbackslash', __kwargtrans__ ({value: '\\'})), __call__ (ConstantValueMacro, null, '%', __kwargtrans__ ({value: '%'})), __call__ (ConstantValueMacro, null, '#', __kwargtrans__ ({value: '#'})), __call__ (ConstantValueMacro, null, '&', __kwargtrans__ ({value: '&'})), __call__ (ConstantValueMacro, null, '$', __kwargtrans__ ({value: '$'})), __call__ (ConstantValueMacro, null, ' ', __kwargtrans__ ({value: ' '})), __call__ (ConstantValueMacro, null, '{', __kwargtrans__ ({value: '{'})), __call__ (ConstantValueMacro, null, '}', __kwargtrans__ ({value: '}'})), __call__ (TextFormatMacro, null, 'emph', __kwargtrans__ ({text_formats: tuple (['textit'])})), __call__ (TextFormatMacro, null, 'textit', __kwargtrans__ ({text_formats: tuple (['textit'])})), __call__ (TextFormatMacro, null, 'textbf', __kwargtrans__ ({text_formats: tuple (['textbf'])})), __call__ (NoExtraSpaceAfterDotMacro, null, '@')], 'specials': [__call__ (ConstantValueSpecials, null, '~', __kwargtrans__ ({value: '\xa0'})), __call__ (ParagraphBreakSpecials, null, '\n\n')]})
/* 000048 */ });
/* 000087 */ export var FeatureClass = FeatureBaseFormatting;
/* 000007 */ 
//# sourceMappingURL=flm.feature.baseformatting.map