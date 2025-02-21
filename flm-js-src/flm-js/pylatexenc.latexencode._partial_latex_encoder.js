/* 000001 */ // Transcrypt'ed from Python, 2025-02-21 21:50:05
/* 000034 */ var logging = {};
/* 000034 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000046 */ import * as _walker from './pylatexenc.latexwalker._walker.js';
/* 000039 */ import {RULE_CALLABLE, UnicodeToLatexConversionRule, UnicodeToLatexEncoder} from './pylatexenc.latexencode._unicode_to_latex_encoder.js';
/* 000034 */ import * as __module_logging__ from './logging.js';
/* 000034 */ __nest__ (logging, '', __module_logging__);
/* 000034 */ export {UnicodeToLatexEncoder, _walker, UnicodeToLatexConversionRule, RULE_CALLABLE};
/* 000001 */ var __name__ = 'pylatexenc.latexencode._partial_latex_encoder';
/* 000036 */ export var logger = (function () {
/* 000036 */ 	var __accu0__ = logging;
/* 000036 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000036 */ }) ();
/* 000050 */ export var PartialLatexToLatexEncoder =  __class__ ('PartialLatexToLatexEncoder', [UnicodeToLatexEncoder], {
/* 000050 */ 	__module__: __name__,
/* 000073 */ 	get __init__ () {return __get__ (this, function (self, keep_latex_chars, conversion_rules) {
/* 000073 */ 		if (typeof keep_latex_chars == 'undefined' || (keep_latex_chars != null && keep_latex_chars.hasOwnProperty ("__kwargtrans__"))) {;
/* 000073 */ 			var keep_latex_chars = '\\${}^_';
/* 000073 */ 		};
/* 000073 */ 		if (typeof conversion_rules == 'undefined' || (conversion_rules != null && conversion_rules.hasOwnProperty ("__kwargtrans__"))) {;
/* 000073 */ 			var conversion_rules = null;
/* 000073 */ 		};
/* 000073 */ 		var kwargs = dict ();
/* 000073 */ 		if (arguments.length) {
/* 000073 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000073 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000073 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000073 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000073 */ 					switch (__attrib0__) {
/* 000073 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000073 */ 						case 'keep_latex_chars': var keep_latex_chars = __allkwargs0__ [__attrib0__]; break;
/* 000073 */ 						case 'conversion_rules': var conversion_rules = __allkwargs0__ [__attrib0__]; break;
/* 000073 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000073 */ 					}
/* 000073 */ 				}
/* 000073 */ 				delete kwargs.__kwargtrans__;
/* 000073 */ 			}
/* 000073 */ 		}
/* 000073 */ 		else {
/* 000073 */ 		}
/* 000079 */ 		var base_conversion_rules = conversion_rules;
/* 000080 */ 		if (__t__ (base_conversion_rules === null)) {
/* 000081 */ 			var base_conversion_rules = ['defaults'];
/* 000081 */ 		}
/* 000086 */ 		__call__ (__call__ (__super__, null, PartialLatexToLatexEncoder, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({conversion_rules: __add__ ([__call__ (UnicodeToLatexConversionRule, null, __kwargtrans__ ({rule_type: RULE_CALLABLE, rule: self._do_partial_latex_encode_step, replacement_latex_protection: 'none'}))], base_conversion_rules)}, kwargs)));
/* 000094 */ 		self.keep_latex_chars = keep_latex_chars;
/* 000094 */ 	});},
/* 000097 */ 	get _do_partial_latex_encode_step () {return __get__ (this, function (self, s, pos) {
/* 000097 */ 		if (arguments.length) {
/* 000097 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000097 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000097 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000097 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000097 */ 					switch (__attrib0__) {
/* 000097 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000097 */ 						case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000097 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000097 */ 					}
/* 000097 */ 				}
/* 000097 */ 			}
/* 000097 */ 		}
/* 000097 */ 		else {
/* 000097 */ 		}
/* 000107 */ 		if (__t__ (__in__ (__getitem__ (s, pos), self.keep_latex_chars))) {
/* 000109 */ 			var lw = (function () {
/* 000109 */ 				var __accu0__ = _walker;
/* 000109 */ 				return __call__ (__accu0__.LatexWalker, __accu0__, s, __kwargtrans__ ({tolerant_parsing: false}));
/* 000109 */ 			}) ();
/* 000110 */ 			var ps = (function () {
/* 000110 */ 				var __accu0__ = lw;
/* 000110 */ 				return __call__ (__accu0__.make_parsing_state, __accu0__);
/* 000110 */ 			}) ();
/* 000111 */ 			var tok = (function () {
/* 000111 */ 				var __accu0__ = (function () {
/* 000111 */ 					var __accu1__ = lw;
/* 000111 */ 					return __call__ (__accu1__.make_token_reader, __accu1__, __kwargtrans__ ({pos: pos}));
/* 000111 */ 				}) ();
/* 000111 */ 				return __call__ (__accu0__.peek_token, __accu0__, __kwargtrans__ ({parsing_state: ps}));
/* 000111 */ 			}) ();
/* 000113 */ 			var tok_as_latex = __add__ (tok.pre_space, __getslice__ (s, tok.pos, __add__ (tok.pos, tok.len), 1));
/* 000116 */ 			return tuple ([__sub__ (__add__ (tok.pos, tok.len), pos), tok_as_latex]);
/* 000116 */ 		}
/* 000118 */ 		return null;
/* 000118 */ 	});}
/* 000118 */ });
/* 000034 */ 
//# sourceMappingURL=pylatexenc.latexencode._partial_latex_encoder.map