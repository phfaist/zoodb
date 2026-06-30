/* 000001 */ // Transcrypt'ed from Python, 2026-06-30 21:51:25
/* 000014 */ var logging = {};
/* 000014 */ var re = {};
/* 000014 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000037 */ import {Feature} from './flm.feature._base.js';
/* 000032 */ import {FLMEnvironmentSpecBase, FLMMacroSpecError} from './flm.flmspecinfo.js';
/* 000029 */ import {FLMArgumentSpec} from './flm.flmenvironment.js';
/* 000027 */ import * as latexnodes_parsers from './pylatexenc.latexnodes.parsers.js';
/* 000026 */ import * as latexnodes_nodes from './pylatexenc.latexnodes.nodes.js';
/* 000020 */ import {LatexArgumentSpec, LatexWalkerLocatedError, ParsedArgumentsInfo, ParsingStateDelta} from './pylatexenc.latexnodes.js';
/* 000019 */ import * as macrospec from './pylatexenc.macrospec.js';
/* 000016 */ import * as __module_logging__ from './logging.js';
/* 000016 */ __nest__ (logging, '', __module_logging__);
/* 000014 */ import * as __module_re__ from './re.js';
/* 000014 */ __nest__ (re, '', __module_re__);
/* 000014 */ export {latexnodes_nodes, ParsedArgumentsInfo, LatexArgumentSpec, ParsingStateDelta, Feature, latexnodes_parsers, FLMMacroSpecError, FLMEnvironmentSpecBase, macrospec, FLMArgumentSpec, LatexWalkerLocatedError};
/* 000001 */ var __name__ = 'flm.feature.cells';
/* 000017 */ export var logger = (function () {
/* 000017 */ 	var __accu0__ = logging;
/* 000017 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000017 */ }) ();
/* 000042 */ export var _NotSpecified =  __class__ ('_NotSpecified', [object], {
/* 000042 */ 	__module__: __name__,
/* 000042 */ });
/* 000048 */ export var LatexTabularRowSeparatorSpec =  __class__ ('LatexTabularRowSeparatorSpec', [macrospec.MacroSpec], {
/* 000048 */ 	__module__: __name__,
/* 000049 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000049 */ 		if (arguments.length) {
/* 000049 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000049 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000049 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000049 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000049 */ 					switch (__attrib0__) {
/* 000049 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000049 */ 					}
/* 000049 */ 				}
/* 000049 */ 			}
/* 000049 */ 		}
/* 000049 */ 		else {
/* 000049 */ 		}
/* 000050 */ 		__call__ (__call__ (__super__, null, LatexTabularRowSeparatorSpec, '__init__'), null, self, __kwargtrans__ ({macroname: '\\', arguments_spec_list: []}));
/* 000050 */ 	});}
/* 000050 */ });
/* 000052 */ export var LatexTabularColumnSeparatorSpec =  __class__ ('LatexTabularColumnSeparatorSpec', [macrospec.SpecialsSpec], {
/* 000052 */ 	__module__: __name__,
/* 000053 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000053 */ 		if (arguments.length) {
/* 000053 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000053 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000053 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000053 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000053 */ 					switch (__attrib0__) {
/* 000053 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000053 */ 					}
/* 000053 */ 				}
/* 000053 */ 			}
/* 000053 */ 		}
/* 000053 */ 		else {
/* 000053 */ 		}
/* 000054 */ 		__call__ (__call__ (__super__, null, LatexTabularColumnSeparatorSpec, '__init__'), null, self, __kwargtrans__ ({specials_chars: '&', arguments_spec_list: []}));
/* 000054 */ 	});}
/* 000054 */ });
/* 000059 */ export var _macro_args = dict ({'mergespec': __call__ (LatexArgumentSpec, null, (function () {
/* 000059 */ 	var __accu0__ = latexnodes_parsers;
/* 000059 */ 	return __call__ (__accu0__.LatexCharsGroupParser, __accu0__, __kwargtrans__ ({enable_groups: false}));
/* 000063 */ }) (), __kwargtrans__ ({argname: 'mergespec'})), 'styles': __call__ (LatexArgumentSpec, null, (function () {
/* 000063 */ 	var __accu0__ = latexnodes_parsers;
/* 000063 */ 	return __call__ (__accu0__.LatexCharsGroupParser, __accu0__, __kwargtrans__ ({delimiters: tuple (['<', '>']), enable_groups: false, optional: true}));
/* 000071 */ }) (), __kwargtrans__ ({argname: 'styles'})), 'styles_mapping': __call__ (LatexArgumentSpec, null, (function () {
/* 000071 */ 	var __accu0__ = latexnodes_parsers;
/* 000071 */ 	return __call__ (__accu0__.LatexCharsGroupParser, __accu0__, __kwargtrans__ ({delimiters: tuple (['<', '>']), enable_groups: false, optional: true}));
/* 000078 */ }) (), __kwargtrans__ ({argname: 'styles_mapping'})), 'cellcontents': __call__ (FLMArgumentSpec, null, '{', __kwargtrans__ ({argname: 'cellcontents', is_block_level: true}))});
/* 000085 */ export var MergeMacroSpec =  __class__ ('MergeMacroSpec', [macrospec.MacroSpec], {
/* 000085 */ 	__module__: __name__,
/* 000086 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000086 */ 		if (typeof macroname == 'undefined' || (macroname != null && macroname.hasOwnProperty ("__kwargtrans__"))) {;
/* 000086 */ 			var macroname = 'merge';
/* 000086 */ 		};
/* 000086 */ 		if (arguments.length) {
/* 000086 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000086 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000086 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000086 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000086 */ 					switch (__attrib0__) {
/* 000086 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000086 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000086 */ 					}
/* 000086 */ 				}
/* 000086 */ 			}
/* 000086 */ 		}
/* 000086 */ 		else {
/* 000086 */ 		}
/* 000087 */ 		__call__ (__call__ (__super__, null, MergeMacroSpec, '__init__'), null, self, macroname, __kwargtrans__ ({arguments_spec_list: [__getitem__ (_macro_args, 'mergespec')]}));
/* 000087 */ 	});}
/* 000087 */ });
/* 000092 */ __setitem__ (_macro_args, 'placement', __call__ (LatexArgumentSpec, null, (function () {
/* 000092 */ 	var __accu0__ = latexnodes_parsers;
/* 000092 */ 	return __call__ (__accu0__.LatexDelimitedGroupParser, __accu0__, __kwargtrans__ ({delimiters: tuple (['[', ']']), optional: true}));
/* 000097 */ }) (), __kwargtrans__ ({argname: 'placement', parsing_state_delta: (function () {
/* 000097 */ 	var __accu0__ = macrospec;
/* 000099 */ 	return __call__ (__accu0__.ParsingStateDeltaExtendLatexContextDb, __accu0__, __kwargtrans__ ({extend_latex_context: __call__ (dict, null, __kwargtrans__ ({macros: [__call__ (MergeMacroSpec, null)]}))}));
/* 000099 */ }) ()})));
/* 000105 */ __setitem__ (_macro_args, 'placement_mapping', __call__ (LatexArgumentSpec, null, (function () {
/* 000105 */ 	var __accu0__ = latexnodes_parsers;
/* 000105 */ 	return __call__ (__accu0__.LatexDelimitedGroupParser, __accu0__, __kwargtrans__ ({delimiters: tuple (['[', ']']), optional: true}));
/* 000110 */ }) (), __kwargtrans__ ({argname: 'placement_mapping', parsing_state_delta: (function () {
/* 000110 */ 	var __accu0__ = macrospec;
/* 000112 */ 	return __call__ (__accu0__.ParsingStateDeltaExtendLatexContextDb, __accu0__, __kwargtrans__ ({extend_latex_context: __call__ (dict, null, __kwargtrans__ ({macros: [__call__ (MergeMacroSpec, null)]}))}));
/* 000112 */ }) ()})));
/* 000117 */ export var CellMacro =  __class__ ('CellMacro', [FLMMacroSpecError], {
/* 000117 */ 	__module__: __name__,
/* 000118 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000118 */ 		if (typeof macroname == 'undefined' || (macroname != null && macroname.hasOwnProperty ("__kwargtrans__"))) {;
/* 000118 */ 			var macroname = 'cell';
/* 000118 */ 		};
/* 000118 */ 		if (arguments.length) {
/* 000118 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000118 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000118 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000118 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000118 */ 					switch (__attrib0__) {
/* 000118 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000118 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000118 */ 					}
/* 000118 */ 				}
/* 000118 */ 			}
/* 000118 */ 		}
/* 000118 */ 		else {
/* 000118 */ 		}
/* 000119 */ 		__call__ (__call__ (__super__, null, CellMacro, '__init__'), null, self, __kwargtrans__ ({macroname: macroname, arguments_spec_list: [__getitem__ (_macro_args, 'styles'), __getitem__ (_macro_args, 'placement'), __getitem__ (_macro_args, 'cellcontents')]}));
/* 000119 */ 	});}
/* 000119 */ });
/* 000128 */ __setitem__ (_macro_args, 'celldata_contents', __call__ (LatexArgumentSpec, null, '{', __kwargtrans__ ({argname: 'celldata_contents', parsing_state_delta: (function () {
/* 000128 */ 	var __accu0__ = macrospec;
/* 000131 */ 	return __call__ (__accu0__.ParsingStateDeltaExtendLatexContextDb, __accu0__, __kwargtrans__ ({extend_latex_context: __call__ (dict, null, __kwargtrans__ ({macros: [__call__ (CellMacro, null), __call__ (LatexTabularRowSeparatorSpec, null)], specials: [__call__ (LatexTabularColumnSeparatorSpec, null)]}))}));
/* 000131 */ }) ()})));
/* 000136 */ export var CelldataMacroSpec =  __class__ ('CelldataMacroSpec', [macrospec.MacroSpec], {
/* 000136 */ 	__module__: __name__,
/* 000137 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000137 */ 		if (typeof macroname == 'undefined' || (macroname != null && macroname.hasOwnProperty ("__kwargtrans__"))) {;
/* 000137 */ 			var macroname = 'celldata';
/* 000137 */ 		};
/* 000137 */ 		if (arguments.length) {
/* 000137 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000137 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000137 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000137 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000137 */ 					switch (__attrib0__) {
/* 000137 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000137 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000137 */ 					}
/* 000137 */ 				}
/* 000137 */ 			}
/* 000137 */ 		}
/* 000137 */ 		else {
/* 000137 */ 		}
/* 000138 */ 		__call__ (__call__ (__super__, null, CelldataMacroSpec, '__init__'), null, self, macroname, __kwargtrans__ ({arguments_spec_list: [__getitem__ (_macro_args, 'styles_mapping'), __getitem__ (_macro_args, 'placement_mapping'), __getitem__ (_macro_args, 'celldata_contents')]}));
/* 000138 */ 	});}
/* 000138 */ });
/* 000149 */ export var CellIndexRangeModel =  __class__ ('CellIndexRangeModel', [object], {
/* 000149 */ 	__module__: __name__,
/* 000156 */ 	get __init__ () {return __get__ (this, function (self, start, end) {
/* 000156 */ 		if (arguments.length) {
/* 000156 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000156 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000156 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000156 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000156 */ 					switch (__attrib0__) {
/* 000156 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 						case 'start': var start = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 						case 'end': var end = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 					}
/* 000156 */ 				}
/* 000156 */ 			}
/* 000156 */ 		}
/* 000156 */ 		else {
/* 000156 */ 		}
/* 000162 */ 		__call__ (__call__ (__super__, null, CellIndexRangeModel, '__init__'), null, self);
/* 000165 */ 		self.start = start;
/* 000166 */ 		self.end = end;
/* 000166 */ 	});},
/* 000168 */ 	_fields: tuple (['start', 'end']),
/* 000170 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000170 */ 		if (arguments.length) {
/* 000170 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000170 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000170 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000170 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000170 */ 					switch (__attrib0__) {
/* 000170 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000170 */ 					}
/* 000170 */ 				}
/* 000170 */ 			}
/* 000170 */ 		}
/* 000170 */ 		else {
/* 000170 */ 		}
/* 000171 */ 		if (__t__ (__eq__ (self.end, __add__ (self.start, 1)))) {
/* 000172 */ 			return '{}'.format (__add__ (self.start, 1));
/* 000172 */ 		}
/* 000173 */ 		return '[{}-{}]'.format (__add__ (self.start, 1), self.end);
/* 000173 */ 	});}
/* 000173 */ });
/* 000176 */ export var CellPlacementModel =  __class__ ('CellPlacementModel', [object], {
/* 000176 */ 	__module__: __name__,
/* 000181 */ 	get __init__ () {return __get__ (this, function (self, row_range, col_range) {
/* 000181 */ 		if (arguments.length) {
/* 000181 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000181 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000181 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000181 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000181 */ 					switch (__attrib0__) {
/* 000181 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000181 */ 						case 'row_range': var row_range = __allkwargs0__ [__attrib0__]; break;
/* 000181 */ 						case 'col_range': var col_range = __allkwargs0__ [__attrib0__]; break;
/* 000181 */ 					}
/* 000181 */ 				}
/* 000181 */ 			}
/* 000181 */ 		}
/* 000181 */ 		else {
/* 000181 */ 		}
/* 000186 */ 		__call__ (__call__ (__super__, null, CellPlacementModel, '__init__'), null, self);
/* 000187 */ 		self.row_range = row_range;
/* 000188 */ 		self.col_range = col_range;
/* 000188 */ 	});},
/* 000190 */ 	_fields: tuple (['row_range', 'col_range']),
/* 000192 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000192 */ 		if (arguments.length) {
/* 000192 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000192 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000192 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000192 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000192 */ 					switch (__attrib0__) {
/* 000192 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000192 */ 					}
/* 000192 */ 				}
/* 000192 */ 			}
/* 000192 */ 		}
/* 000192 */ 		else {
/* 000192 */ 		}
/* 000193 */ 		return '{},{}'.format (__call__ (repr, null, self.row_range), __call__ (repr, null, self.col_range));
/* 000193 */ 	});}
/* 000193 */ });
/* 000196 */ export var CellModel =  __class__ ('CellModel', [object], {
/* 000196 */ 	__module__: __name__,
/* 000201 */ 	get __init__ () {return __get__ (this, function (self, placement, styles, content_nodes) {
/* 000201 */ 		if (arguments.length) {
/* 000201 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000201 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000201 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000201 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000201 */ 					switch (__attrib0__) {
/* 000201 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000201 */ 						case 'placement': var placement = __allkwargs0__ [__attrib0__]; break;
/* 000201 */ 						case 'styles': var styles = __allkwargs0__ [__attrib0__]; break;
/* 000201 */ 						case 'content_nodes': var content_nodes = __allkwargs0__ [__attrib0__]; break;
/* 000201 */ 					}
/* 000201 */ 				}
/* 000201 */ 			}
/* 000201 */ 		}
/* 000201 */ 		else {
/* 000201 */ 		}
/* 000209 */ 		__call__ (__call__ (__super__, null, CellModel, '__init__'), null, self);
/* 000210 */ 		self.placement = placement;
/* 000211 */ 		self.styles = styles;
/* 000212 */ 		self.content_nodes = content_nodes;
/* 000212 */ 	});},
/* 000214 */ 	_fields: tuple (['placement', 'styles', 'content_nodes']),
/* 000216 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000216 */ 		if (arguments.length) {
/* 000216 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000216 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000216 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000216 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000216 */ 					switch (__attrib0__) {
/* 000216 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000216 */ 					}
/* 000216 */ 				}
/* 000216 */ 			}
/* 000216 */ 		}
/* 000216 */ 		else {
/* 000216 */ 		}
/* 000218 */ 		return '<Cell @{} <{}> (‘{}’)>'.format (__call__ (repr, null, self.placement), (function () {
/* 000218 */ 			var __accu0__ = ' ';
/* 000218 */ 			return __call__ (__accu0__.join, __accu0__, self.styles);
/* 000219 */ 		}) (), __call__ (_splfysidews, null, (function () {
/* 000219 */ 			var __accu0__ = self.content_nodes;
/* 000219 */ 			return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000219 */ 		}) ()));
/* 000219 */ 	});}
/* 000219 */ });
/* 000222 */ export var _splfysidews = function (s) {
/* 000222 */ 	if (arguments.length) {
/* 000222 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000222 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000222 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000222 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000222 */ 				switch (__attrib0__) {
/* 000222 */ 					case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000222 */ 				}
/* 000222 */ 			}
/* 000222 */ 		}
/* 000222 */ 	}
/* 000222 */ 	else {
/* 000222 */ 	}
/* 000224 */ 	return (function () {
/* 000224 */ 		var __accu0__ = re;
/* 000224 */ 		return __call__ (__accu0__.sub, __accu0__, '(^\\s+|\\s+$)', ' ', s);
/* 000224 */ 	}) ();
/* 000224 */ };
/* 000229 */ export var CellPlacementsMappingModel =  __class__ ('CellPlacementsMappingModel', [object], {
/* 000229 */ 	__module__: __name__,
/* 000230 */ 	get __init__ () {return __get__ (this, function (self, row_placements, col_placements) {
/* 000230 */ 		if (arguments.length) {
/* 000230 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000230 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000230 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000230 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000230 */ 					switch (__attrib0__) {
/* 000230 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000230 */ 						case 'row_placements': var row_placements = __allkwargs0__ [__attrib0__]; break;
/* 000230 */ 						case 'col_placements': var col_placements = __allkwargs0__ [__attrib0__]; break;
/* 000230 */ 					}
/* 000230 */ 				}
/* 000230 */ 			}
/* 000230 */ 		}
/* 000230 */ 		else {
/* 000230 */ 		}
/* 000231 */ 		__call__ (__call__ (__super__, null, CellPlacementsMappingModel, '__init__'), null, self);
/* 000232 */ 		self.row_placements = row_placements;
/* 000233 */ 		self.col_placements = col_placements;
/* 000233 */ 	});},
/* 000235 */ 	_fields: tuple (['row_placements', 'col_placements']),
/* 000237 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000237 */ 		if (arguments.length) {
/* 000237 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000237 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000237 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000237 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000237 */ 					switch (__attrib0__) {
/* 000237 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000237 */ 					}
/* 000237 */ 				}
/* 000237 */ 			}
/* 000237 */ 		}
/* 000237 */ 		else {
/* 000237 */ 		}
/* 000240 */ 		return __add__ (__add__ ('{}('.format (self.__class__.__name__), (function () {
/* 000240 */ 			var __accu0__ = '';
/* 000240 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000240 */ 				var __accu1__ = [];
/* 000240 */ 				var __iterable0__ = self._fields;
/* 000240 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000240 */ 					var k = __getitem__ (__iterable0__, __index0__);
/* 000240 */ 					(function () {
/* 000240 */ 						var __accu2__ = __accu1__;
/* 000240 */ 						return __call__ (__accu2__.append, __accu2__, '\n    {}={}'.format (k, __call__ (repr, null, __call__ (getattr, null, self, k))));
/* 000240 */ 					}) ();
/* 000240 */ 				}
/* 000240 */ 				return py_iter (__accu1__);
/* 000240 */ 			}) ());
/* 000240 */ 		}) ()), '\n)'.format ());
/* 000240 */ 	});},
/* 000244 */ 	get _get_index_range () {return __get__ (this, function (self, placements, j, current) {
/* 000244 */ 		if (arguments.length) {
/* 000244 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000244 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000244 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000244 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000244 */ 					switch (__attrib0__) {
/* 000244 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000244 */ 						case 'placements': var placements = __allkwargs0__ [__attrib0__]; break;
/* 000244 */ 						case 'j': var j = __allkwargs0__ [__attrib0__]; break;
/* 000244 */ 						case 'current': var current = __allkwargs0__ [__attrib0__]; break;
/* 000244 */ 					}
/* 000244 */ 				}
/* 000244 */ 			}
/* 000244 */ 		}
/* 000244 */ 		else {
/* 000244 */ 		}
/* 000246 */ 		if (__t__ (__eq__ (__call__ (len, null, placements), 0))) {
/* 000247 */ 			return __call__ (CellIndexRangeModel, null, current, __add__ (current, 1));
/* 000247 */ 		}
/* 000251 */ 		if (__t__ (__lt__ (j, __sub__ (__call__ (len, null, placements), 1)))) {
/* 000252 */ 			return __getitem__ (placements, j);
/* 000252 */ 		}
/* 000254 */ 		var placement = __getitem__ (placements, __neg__ (1));
/* 000255 */ 		if (__t__ (placement.end === null)) {
/* 000256 */ 			var idx = __add__ (placement.start, __add__ (__sub__ (j, __call__ (len, null, placements)), 1));
/* 000257 */ 			return __call__ (CellIndexRangeModel, null, idx, __add__ (idx, 1));
/* 000257 */ 		}
/* 000258 */ 		return placement;
/* 000258 */ 	});},
/* 000260 */ 	get get_row_index_range () {return __get__ (this, function (self, row_j, current_row) {
/* 000260 */ 		if (typeof current_row == 'undefined' || (current_row != null && current_row.hasOwnProperty ("__kwargtrans__"))) {;
/* 000260 */ 			var current_row = null;
/* 000260 */ 		};
/* 000260 */ 		if (arguments.length) {
/* 000260 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000260 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000260 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000260 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000260 */ 					switch (__attrib0__) {
/* 000260 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000260 */ 						case 'row_j': var row_j = __allkwargs0__ [__attrib0__]; break;
/* 000260 */ 						case 'current_row': var current_row = __allkwargs0__ [__attrib0__]; break;
/* 000260 */ 					}
/* 000260 */ 				}
/* 000260 */ 			}
/* 000260 */ 		}
/* 000260 */ 		else {
/* 000260 */ 		}
/* 000261 */ 		return (function () {
/* 000261 */ 			var __accu0__ = self;
/* 000261 */ 			return __call__ (__accu0__._get_index_range, __accu0__, self.row_placements, row_j, current_row);
/* 000261 */ 		}) ();
/* 000261 */ 	});},
/* 000263 */ 	get get_col_index_range () {return __get__ (this, function (self, col_j, current_col) {
/* 000263 */ 		if (typeof current_col == 'undefined' || (current_col != null && current_col.hasOwnProperty ("__kwargtrans__"))) {;
/* 000263 */ 			var current_col = null;
/* 000263 */ 		};
/* 000263 */ 		if (arguments.length) {
/* 000263 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000263 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000263 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000263 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000263 */ 					switch (__attrib0__) {
/* 000263 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000263 */ 						case 'col_j': var col_j = __allkwargs0__ [__attrib0__]; break;
/* 000263 */ 						case 'current_col': var current_col = __allkwargs0__ [__attrib0__]; break;
/* 000263 */ 					}
/* 000263 */ 				}
/* 000263 */ 			}
/* 000263 */ 		}
/* 000263 */ 		else {
/* 000263 */ 		}
/* 000264 */ 		return (function () {
/* 000264 */ 			var __accu0__ = self;
/* 000264 */ 			return __call__ (__accu0__._get_index_range, __accu0__, self.col_placements, col_j, current_col);
/* 000264 */ 		}) ();
/* 000264 */ 	});},
/* 000266 */ 	get start_row_col () {return __get__ (this, function (self, current_row, current_col) {
/* 000266 */ 		if (typeof current_row == 'undefined' || (current_row != null && current_row.hasOwnProperty ("__kwargtrans__"))) {;
/* 000266 */ 			var current_row = null;
/* 000266 */ 		};
/* 000266 */ 		if (typeof current_col == 'undefined' || (current_col != null && current_col.hasOwnProperty ("__kwargtrans__"))) {;
/* 000266 */ 			var current_col = null;
/* 000266 */ 		};
/* 000266 */ 		if (arguments.length) {
/* 000266 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000266 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000266 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000266 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000266 */ 					switch (__attrib0__) {
/* 000266 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000266 */ 						case 'current_row': var current_row = __allkwargs0__ [__attrib0__]; break;
/* 000266 */ 						case 'current_col': var current_col = __allkwargs0__ [__attrib0__]; break;
/* 000266 */ 					}
/* 000266 */ 				}
/* 000266 */ 			}
/* 000266 */ 		}
/* 000266 */ 		else {
/* 000266 */ 		}
/* 000267 */ 		return tuple ([(function () {
/* 000267 */ 			var __accu0__ = self;
/* 000267 */ 			return __call__ (__accu0__.get_row_index_range, __accu0__, 0, current_row);
/* 000268 */ 		}) ().start, (function () {
/* 000268 */ 			var __accu0__ = self;
/* 000268 */ 			return __call__ (__accu0__.get_col_index_range, __accu0__, 0, current_col);
/* 000268 */ 		}) ().start]);
/* 000268 */ 	});}
/* 000268 */ });
/* 000274 */ export var CellsModel =  __class__ ('CellsModel', [object], {
/* 000274 */ 	__module__: __name__,
/* 000283 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000283 */ 		var kwargs = dict ();
/* 000283 */ 		if (arguments.length) {
/* 000283 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000283 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000283 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000283 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000283 */ 					switch (__attrib0__) {
/* 000283 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000283 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000283 */ 					}
/* 000283 */ 				}
/* 000283 */ 				delete kwargs.__kwargtrans__;
/* 000283 */ 			}
/* 000283 */ 		}
/* 000283 */ 		else {
/* 000283 */ 		}
/* 000290 */ 		__call__ (__call__ (__super__, null, CellsModel, '__init__'), null, self);
/* 000294 */ 		self.current_row = 0;
/* 000295 */ 		self.current_col = 0;
/* 000297 */ 		self.row_names = dict ({});
/* 000298 */ 		self.column_names = dict ({});
/* 000301 */ 		if (__t__ (kwargs)) {
/* 000303 */ 			self.cells_size = (function () {
/* 000303 */ 				var __accu0__ = kwargs;
/* 000303 */ 				return __call__ (__accu0__.py_pop, __accu0__, 'cells_size');
/* 000303 */ 			}) ();
/* 000304 */ 			self.cells_data = (function () {
/* 000304 */ 				var __accu0__ = kwargs;
/* 000304 */ 				return __call__ (__accu0__.py_pop, __accu0__, 'cells_data');
/* 000304 */ 			}) ();
/* 000305 */ 			(function () {
/* 000305 */ 				var __accu0__ = self;
/* 000305 */ 				return __call__ (__accu0__.finalize, __accu0__);
/* 000305 */ 			}) ();
/* 000306 */ 			return ;
/* 000306 */ 		}
/* 000308 */ 		self.cells_size = [null, null];
/* 000309 */ 		self.cells_data = [];
/* 000311 */ 		self.grid_data = null;
/* 000311 */ 	});},
/* 000314 */ 	_fields: tuple (['cells_size', 'cells_data']),
/* 000316 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000316 */ 		if (arguments.length) {
/* 000316 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000316 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000316 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000316 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000316 */ 					switch (__attrib0__) {
/* 000316 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000316 */ 					}
/* 000316 */ 				}
/* 000316 */ 			}
/* 000316 */ 		}
/* 000316 */ 		else {
/* 000316 */ 		}
/* 000317 */ 		var pp_data = (function () {
/* 000317 */ 			var __accu0__ = '';
/* 000317 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000317 */ 				var __accu1__ = [];
/* 000317 */ 				var __iterable0__ = self.cells_data;
/* 000317 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000317 */ 					var d = __getitem__ (__iterable0__, __index0__);
/* 000317 */ 					(function () {
/* 000317 */ 						var __accu2__ = __accu1__;
/* 000317 */ 						return __call__ (__accu2__.append, __accu2__, __add__ ('\n        ', __call__ (repr, null, d)));
/* 000317 */ 					}) ();
/* 000317 */ 				}
/* 000317 */ 				return __accu1__;
/* 000317 */ 			}) ());
/* 000317 */ 		}) ();
/* 000319 */ 		return '{}(\n    cells_size={},\n    cells_data=[{}\n    ])'.format (self.__class__.__name__, __call__ (repr, null, self.cells_size), pp_data);
/* 000319 */ 	});},
/* 000325 */ 	get add_cell_node () {return __get__ (this, function (self, cell_node, default_placement, default_styles) {
/* 000325 */ 		if (typeof default_placement == 'undefined' || (default_placement != null && default_placement.hasOwnProperty ("__kwargtrans__"))) {;
/* 000325 */ 			var default_placement = null;
/* 000325 */ 		};
/* 000325 */ 		if (typeof default_styles == 'undefined' || (default_styles != null && default_styles.hasOwnProperty ("__kwargtrans__"))) {;
/* 000325 */ 			var default_styles = null;
/* 000325 */ 		};
/* 000325 */ 		if (arguments.length) {
/* 000325 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000325 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000325 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000325 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000325 */ 					switch (__attrib0__) {
/* 000325 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000325 */ 						case 'cell_node': var cell_node = __allkwargs0__ [__attrib0__]; break;
/* 000325 */ 						case 'default_placement': var default_placement = __allkwargs0__ [__attrib0__]; break;
/* 000325 */ 						case 'default_styles': var default_styles = __allkwargs0__ [__attrib0__]; break;
/* 000325 */ 					}
/* 000325 */ 				}
/* 000325 */ 			}
/* 000325 */ 		}
/* 000325 */ 		else {
/* 000325 */ 		}
/* 000327 */ 		var cell_node_args = (function () {
/* 000327 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: cell_node}));
/* 000327 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['styles', 'placement', 'cellcontents']));
/* 000327 */ 		}) ();
/* 000331 */ 		if (__t__ (default_styles === null)) {
/* 000332 */ 			var default_styles = [];
/* 000332 */ 		}
/* 000334 */ 		if (__t__ ((function () {
/* 000334 */ 			var __accu0__ = __getitem__ (cell_node_args, 'styles');
/* 000334 */ 			return __call__ (__accu0__.was_provided, __accu0__);
/* 000334 */ 		}) ())) {
/* 000336 */ 			var styles = __add__ ((function () {
/* 000336 */ 				var __accu0__ = (function () {
/* 000336 */ 					var __accu1__ = __getitem__ (cell_node_args, 'styles');
/* 000336 */ 					return __call__ (__accu1__.get_content_as_chars, __accu1__);
/* 000336 */ 				}) ();
/* 000336 */ 				return __call__ (__accu0__.py_split, __accu0__, ' ');
/* 000336 */ 			}) (), default_styles);
/* 000336 */ 		}
/* 000338 */ 		else {
/* 000340 */ 			var styles = default_styles;
/* 000340 */ 		}
/* 000342 */ 		if (__t__ ((function () {
/* 000342 */ 			var __accu0__ = __getitem__ (cell_node_args, 'placement');
/* 000342 */ 			return __call__ (__accu0__.was_provided, __accu0__);
/* 000342 */ 		}) ())) {
/* 000343 */ 			var placement_spec = (function () {
/* 000343 */ 				var __accu0__ = __getitem__ (cell_node_args, 'placement');
/* 000343 */ 				return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000343 */ 			}) ();
/* 000343 */ 		}
/* 000344 */ 		else {
/* 000345 */ 			var placement_spec = default_placement;
/* 000345 */ 		}
/* 000347 */ 		var cell_contents = (function () {
/* 000347 */ 			var __accu0__ = __getitem__ (cell_node_args, 'cellcontents');
/* 000347 */ 			return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000347 */ 		}) ();
/* 000349 */ 		return (function () {
/* 000349 */ 			var __accu0__ = self;
/* 000349 */ 			return __call__ (__accu0__.add_cell, __accu0__, placement_spec, styles, cell_contents);
/* 000349 */ 		}) ();
/* 000349 */ 	});},
/* 000351 */ 	get add_cell () {return __get__ (this, function (self, placement_spec, styles, content_nodes) {
/* 000351 */ 		if (arguments.length) {
/* 000351 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000351 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000351 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000351 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000351 */ 					switch (__attrib0__) {
/* 000351 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000351 */ 						case 'placement_spec': var placement_spec = __allkwargs0__ [__attrib0__]; break;
/* 000351 */ 						case 'styles': var styles = __allkwargs0__ [__attrib0__]; break;
/* 000351 */ 						case 'content_nodes': var content_nodes = __allkwargs0__ [__attrib0__]; break;
/* 000351 */ 					}
/* 000351 */ 				}
/* 000351 */ 			}
/* 000351 */ 		}
/* 000351 */ 		else {
/* 000351 */ 		}
/* 000353 */ 		var placement = (function () {
/* 000353 */ 			var __accu0__ = self;
/* 000353 */ 			return __call__ (__accu0__.parse_placement_spec, __accu0__, placement_spec);
/* 000353 */ 		}) ();
/* 000355 */ 		var cell = __call__ (CellModel, null, __kwargtrans__ ({placement: placement, styles: styles, content_nodes: content_nodes}));
/* 000360 */ 		(function () {
/* 000360 */ 			var __accu0__ = self.cells_data;
/* 000360 */ 			return __call__ (__accu0__.append, __accu0__, cell);
/* 000360 */ 		}) ();
/* 000363 */ 		if (__t__ (__t__ (__getitem__ (self.cells_size, 0) === null) || __ge__ (cell.placement.row_range.end, __getitem__ (self.cells_size, 0)))) {
/* 000364 */ 			__setitem__ (self.cells_size, 0, cell.placement.row_range.end);
/* 000364 */ 		}
/* 000365 */ 		if (__t__ (__t__ (__getitem__ (self.cells_size, 1) === null) || __ge__ (cell.placement.col_range.end, __getitem__ (self.cells_size, 1)))) {
/* 000366 */ 			__setitem__ (self.cells_size, 1, cell.placement.col_range.end);
/* 000366 */ 		}
/* 000368 */ 		(function () {
/* 000368 */ 			var __accu0__ = self;
/* 000368 */ 			return __call__ (__accu0__.move_to_col, __accu0__, cell.placement.col_range.end);
/* 000368 */ 		}) ();
/* 000370 */ 		return cell;
/* 000370 */ 	});},
/* 000372 */ 	get move_to_col () {return __get__ (this, function (self, col) {
/* 000372 */ 		if (arguments.length) {
/* 000372 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000372 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000372 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000372 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000372 */ 					switch (__attrib0__) {
/* 000372 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000372 */ 						case 'col': var col = __allkwargs0__ [__attrib0__]; break;
/* 000372 */ 					}
/* 000372 */ 				}
/* 000372 */ 			}
/* 000372 */ 		}
/* 000372 */ 		else {
/* 000372 */ 		}
/* 000373 */ 		self.current_col = col;
/* 000373 */ 	});},
/* 000375 */ 	get move_next_row () {return __get__ (this, function (self) {
/* 000375 */ 		if (arguments.length) {
/* 000375 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000375 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000375 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000375 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000375 */ 					switch (__attrib0__) {
/* 000375 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000375 */ 					}
/* 000375 */ 				}
/* 000375 */ 			}
/* 000375 */ 		}
/* 000375 */ 		else {
/* 000375 */ 		}
/* 000376 */ 		self.current_row = __call__ (__iadd__, null, self.current_row, 1);
/* 000377 */ 		self.current_col = 0;
/* 000377 */ 	});},
/* 000380 */ 	get finalize () {return __get__ (this, function (self) {
/* 000380 */ 		if (arguments.length) {
/* 000380 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000380 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000380 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000380 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000380 */ 					switch (__attrib0__) {
/* 000380 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000380 */ 					}
/* 000380 */ 				}
/* 000380 */ 			}
/* 000380 */ 		}
/* 000380 */ 		else {
/* 000380 */ 		}
/* 000382 */ 		self.grid_data = (function () {
/* 000382 */ 			var __accu0__ = [];
/* 000382 */ 			for (var _ = 0; _ < __getitem__ (self.cells_size, 0); _++) {
/* 000384 */ 				(function () {
/* 000384 */ 					var __accu1__ = __accu0__;
/* 000384 */ 					return __call__ (__accu1__.append, __accu1__, (function () {
/* 000384 */ 						var __accu2__ = [];
/* 000383 */ 						for (var _ = 0; _ < __getitem__ (self.cells_size, 1); _++) {
/* 000383 */ 							(function () {
/* 000383 */ 								var __accu3__ = __accu2__;
/* 000383 */ 								return __call__ (__accu3__.append, __accu3__, null);
/* 000383 */ 							}) ();
/* 000383 */ 						}
/* 000383 */ 						return __accu2__;
/* 000383 */ 					}) ());
/* 000383 */ 				}) ();
/* 000383 */ 			}
/* 000383 */ 			return __accu0__;
/* 000383 */ 		}) ();
/* 000386 */ 		var __iterable0__ = self.cells_data;
/* 000386 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000386 */ 			var cell = __getitem__ (__iterable0__, __index0__);
/* 000387 */ 			var is_topleft = true;
/* 000388 */ 			for (var rowidx = cell.placement.row_range.start; rowidx < cell.placement.row_range.end; rowidx++) {
/* 000390 */ 				for (var colidx = cell.placement.col_range.start; colidx < cell.placement.col_range.end; colidx++) {
/* 000392 */ 					if (__t__ (__getitem__ (__getitem__ (self.grid_data, rowidx), colidx) !== null)) {
/* 000393 */ 						var existing_cell = __getitem__ (__getitem__ (__getitem__ (self.grid_data, rowidx), colidx), 'cell');
/* 000395 */ 						var __except0__ = __call__ (ValueError, null, '‘{}’ overlaps with ‘{}’'.format (__call__ (repr, null, cell), __call__ (repr, null, existing_cell)));
/* 000395 */ 						__except0__.__cause__ = null;
/* 000395 */ 						throw __except0__;
/* 000395 */ 					}
/* 000398 */ 					__setitem__ (__getitem__ (self.grid_data, rowidx), colidx, dict ({'cell': cell, 'is_topleft': is_topleft}));
/* 000402 */ 					var is_topleft = false;
/* 000402 */ 				}
/* 000402 */ 			}
/* 000402 */ 		}
/* 000402 */ 	});},
/* 000407 */ 	get add_celldata_node () {return __get__ (this, function (self, celldata_node) {
/* 000407 */ 		if (arguments.length) {
/* 000407 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000407 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000407 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000407 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000407 */ 					switch (__attrib0__) {
/* 000407 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000407 */ 						case 'celldata_node': var celldata_node = __allkwargs0__ [__attrib0__]; break;
/* 000407 */ 					}
/* 000407 */ 				}
/* 000407 */ 			}
/* 000407 */ 		}
/* 000407 */ 		else {
/* 000407 */ 		}
/* 000409 */ 		var celldata_node_args = (function () {
/* 000409 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: celldata_node}));
/* 000409 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['styles_mapping', 'placement_mapping', 'celldata_contents']));
/* 000409 */ 		}) ();
/* 000418 */ 		var styles_mapping = (function () {
/* 000418 */ 			var __accu0__ = [];
/* 000421 */ 			var __iterable0__ = (function () {
/* 000421 */ 				var __accu1__ = (function () {
/* 000421 */ 					var __accu2__ = __getitem__ (celldata_node_args, 'styles_mapping');
/* 000421 */ 					return __call__ (__accu2__.get_content_as_chars, __accu2__);
/* 000421 */ 				}) ();
/* 000421 */ 				return __call__ (__accu1__.py_split, __accu1__, ',');
/* 000421 */ 			}) ();
/* 000421 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000421 */ 				var styles_spec = __getitem__ (__iterable0__, __index0__);
/* 000420 */ 				(function () {
/* 000420 */ 					var __accu1__ = __accu0__;
/* 000420 */ 					return __call__ (__accu1__.append, __accu1__, (function () {
/* 000420 */ 						var __accu2__ = [];
/* 000419 */ 						var __iterable1__ = (function () {
/* 000419 */ 							var __accu3__ = styles_spec;
/* 000419 */ 							return __call__ (__accu3__.py_split, __accu3__);
/* 000419 */ 						}) ();
/* 000419 */ 						for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000419 */ 							var s = __getitem__ (__iterable1__, __index1__);
/* 000419 */ 							if (__t__ (s)) {
/* 000419 */ 								(function () {
/* 000419 */ 									var __accu3__ = __accu2__;
/* 000419 */ 									return __call__ (__accu3__.append, __accu3__, s);
/* 000419 */ 								}) ();
/* 000419 */ 							}
/* 000419 */ 						}
/* 000419 */ 						return __accu2__;
/* 000419 */ 					}) ());
/* 000419 */ 				}) ();
/* 000419 */ 			}
/* 000419 */ 			return __accu0__;
/* 000419 */ 		}) ();
/* 000424 */ 		var placement_mapping_spec = (function () {
/* 000424 */ 			var __accu0__ = __getitem__ (celldata_node_args, 'placement_mapping');
/* 000424 */ 			return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000424 */ 		}) ();
/* 000426 */ 		var celldata_contents = (function () {
/* 000426 */ 			var __accu0__ = __getitem__ (celldata_node_args, 'celldata_contents');
/* 000426 */ 			return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000426 */ 		}) ();
/* 000430 */ 		var data_rows = (function () {
/* 000430 */ 			var __accu0__ = celldata_contents;
/* 000430 */ 			return __call__ (__accu0__.split_at_node, __accu0__, (function __lambda__ (node) {
/* 000430 */ 				if (arguments.length) {
/* 000430 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000430 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000430 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000430 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000430 */ 							switch (__attrib0__) {
/* 000430 */ 								case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000430 */ 							}
/* 000430 */ 						}
/* 000430 */ 					}
/* 000430 */ 				}
/* 000430 */ 				else {
/* 000430 */ 				}
/* 000432 */ 				return __t__ ((function () {
/* 000432 */ 					var __accu1__ = node;
/* 000432 */ 					return __call__ (__accu1__.isNodeType, __accu1__, latexnodes_nodes.LatexMacroNode);
/* 000432 */ 				}) ()) && __eq__ (node.macroname, '\\');
/* 000432 */ 			}));
/* 000432 */ 		}) ();
/* 000437 */ 		var split_columns_predicate_fn = function (node) {
/* 000437 */ 			if (arguments.length) {
/* 000437 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000437 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000437 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000437 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000437 */ 						switch (__attrib0__) {
/* 000437 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000437 */ 						}
/* 000437 */ 					}
/* 000437 */ 				}
/* 000437 */ 			}
/* 000437 */ 			else {
/* 000437 */ 			}
/* 000439 */ 			if (__t__ (__t__ ((function () {
/* 000439 */ 				var __accu0__ = node;
/* 000439 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexSpecialsNode);
/* 000439 */ 			}) ()) && __eq__ (node.specials_chars, '&'))) {
/* 000441 */ 				return true;
/* 000441 */ 			}
/* 000442 */ 			return false;
/* 000442 */ 		};
/* 000444 */ 		var data_content_nodes = (function () {
/* 000444 */ 			var __accu0__ = [];
/* 000444 */ 			var __iterable0__ = data_rows;
/* 000444 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000446 */ 				var data_row = __getitem__ (__iterable0__, __index0__);
/* 000446 */ 				(function () {
/* 000446 */ 					var __accu1__ = __accu0__;
/* 000445 */ 					return __call__ (__accu1__.append, __accu1__, (function () {
/* 000445 */ 						var __accu2__ = data_row;
/* 000445 */ 						return __call__ (__accu2__.split_at_node, __accu2__, split_columns_predicate_fn);
/* 000445 */ 					}) ());
/* 000445 */ 				}) ();
/* 000445 */ 			}
/* 000445 */ 			return __accu0__;
/* 000445 */ 		}) ();
/* 000449 */ 		// pass;
/* 000453 */ 		(function () {
/* 000453 */ 			var __accu0__ = self;
/* 000453 */ 			return __call__ (__accu0__.add_celldata, __accu0__, placement_mapping_spec, styles_mapping, data_content_nodes);
/* 000453 */ 		}) ();
/* 000453 */ 	});},
/* 000456 */ 	get add_celldata () {return __get__ (this, function (self, placement_mapping_spec, styles_mapping, data_content_nodes) {
/* 000456 */ 		if (arguments.length) {
/* 000456 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000456 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000456 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000456 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000456 */ 					switch (__attrib0__) {
/* 000456 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000456 */ 						case 'placement_mapping_spec': var placement_mapping_spec = __allkwargs0__ [__attrib0__]; break;
/* 000456 */ 						case 'styles_mapping': var styles_mapping = __allkwargs0__ [__attrib0__]; break;
/* 000456 */ 						case 'data_content_nodes': var data_content_nodes = __allkwargs0__ [__attrib0__]; break;
/* 000456 */ 					}
/* 000456 */ 				}
/* 000456 */ 			}
/* 000456 */ 		}
/* 000456 */ 		else {
/* 000456 */ 		}
/* 000458 */ 		var placement_mapping = (function () {
/* 000458 */ 			var __accu0__ = self;
/* 000458 */ 			return __call__ (__accu0__.parse_placement_mapping_spec, __accu0__, placement_mapping_spec);
/* 000458 */ 		}) ();
/* 000462 */ 		// pass;
/* 000466 */ 		var __left0__ = (function () {
/* 000466 */ 			var __accu0__ = placement_mapping;
/* 000466 */ 			return __call__ (__accu0__.start_row_col, __accu0__, __kwargtrans__ ({current_row: self.current_row, current_col: self.current_col}));
/* 000466 */ 		}) ();
/* 000466 */ 		self.current_row = __left0__ [0];
/* 000466 */ 		self.current_col = __left0__ [1];
/* 000470 */ 		var data_row_j = 0;
/* 000471 */ 		var __iterable0__ = data_content_nodes;
/* 000471 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000471 */ 			var data_row_data = __getitem__ (__iterable0__, __index0__);
/* 000473 */ 			var data_col_j = 0;
/* 000474 */ 			var __iterable1__ = data_row_data;
/* 000474 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000474 */ 				var cell_content = __getitem__ (__iterable1__, __index1__);
/* 000476 */ 				var row_range = (function () {
/* 000476 */ 					var __accu0__ = placement_mapping;
/* 000476 */ 					return __call__ (__accu0__.get_row_index_range, __accu0__, data_row_j, __kwargtrans__ ({current_row: self.current_row}));
/* 000476 */ 				}) ();
/* 000479 */ 				var col_range = (function () {
/* 000479 */ 					var __accu0__ = placement_mapping;
/* 000479 */ 					return __call__ (__accu0__.get_col_index_range, __accu0__, data_col_j, __kwargtrans__ ({current_col: self.current_col}));
/* 000479 */ 				}) ();
/* 000482 */ 				var placement = __call__ (CellPlacementModel, null, __kwargtrans__ ({row_range: row_range, col_range: col_range}));
/* 000487 */ 				if (__t__ (__lt__ (data_col_j, __call__ (len, null, styles_mapping)))) {
/* 000488 */ 					var styles = __getitem__ (styles_mapping, data_col_j);
/* 000488 */ 				}
/* 000489 */ 				else {
/* 000490 */ 					var styles = __getitem__ (styles_mapping, __neg__ (1));
/* 000490 */ 				}
/* 000493 */ 				var cell_content_nl = (function () {
/* 000493 */ 					var __accu0__ = cell_content.latex_walker;
/* 000493 */ 					return __call__ (__accu0__.filter_whitespace_comments_nodes, __accu0__, cell_content);
/* 000493 */ 				}) ();
/* 000497 */ 				// pass;
/* 000505 */ 				if (__t__ (__t__ (__eq__ (__call__ (len, null, cell_content_nl), 1)) && __t__ ((function () {
/* 000505 */ 					var __accu0__ = __getitem__ (cell_content_nl, 0);
/* 000505 */ 					return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000505 */ 				}) ()) && __eq__ (__getitem__ (cell_content_nl, 0).macroname, 'cell'))) {
/* 000508 */ 					var cell = (function () {
/* 000508 */ 						var __accu0__ = self;
/* 000508 */ 						return __call__ (__accu0__.add_cell_node, __accu0__, __getitem__ (cell_content_nl, 0), __kwargtrans__ ({default_placement: placement, default_styles: styles}));
/* 000508 */ 					}) ();
/* 000511 */ 					var data_col_j = __call__ (__iadd__, null, data_col_j, __sub__ (cell.placement.col_range.end, cell.placement.col_range.start));
/* 000511 */ 				}
/* 000514 */ 				else if (__t__ (__eq__ (__call__ (len, null, cell_content_nl), 0))) {
/* 000517 */ 					self.current_col = col_range.end;
/* 000518 */ 					var data_col_j = __call__ (__iadd__, null, data_col_j, 1);
/* 000518 */ 				}
/* 000519 */ 				else {
/* 000521 */ 					(function () {
/* 000521 */ 						var __accu0__ = self;
/* 000521 */ 						return __call__ (__accu0__.add_cell, __accu0__, placement, styles, cell_content);
/* 000521 */ 					}) ();
/* 000522 */ 					var data_col_j = __call__ (__iadd__, null, data_col_j, 1);
/* 000522 */ 				}
/* 000522 */ 			}
/* 000524 */ 			(function () {
/* 000524 */ 				var __accu0__ = self;
/* 000524 */ 				return __call__ (__accu0__.move_next_row, __accu0__);
/* 000524 */ 			}) ();
/* 000525 */ 			var data_row_j = __call__ (__iadd__, null, data_row_j, 1);
/* 000526 */ 			var data_col_j = 0;
/* 000526 */ 		}
/* 000526 */ 	});},
/* 000531 */ 	_rx_int: (function () {
/* 000531 */ 		var __accu0__ = re;
/* 000531 */ 		return __call__ (__accu0__.compile, __accu0__, '^\\d+$');
/* 000531 */ 	}) (),
/* 000533 */ 	get parse_cell_index_spec () {return __get__ (this, function (self, index_spec, is_row, is_col, py_default) {
/* 000533 */ 		if (typeof is_row == 'undefined' || (is_row != null && is_row.hasOwnProperty ("__kwargtrans__"))) {;
/* 000533 */ 			var is_row = false;
/* 000533 */ 		};
/* 000533 */ 		if (typeof is_col == 'undefined' || (is_col != null && is_col.hasOwnProperty ("__kwargtrans__"))) {;
/* 000533 */ 			var is_col = false;
/* 000533 */ 		};
/* 000533 */ 		if (typeof py_default == 'undefined' || (py_default != null && py_default.hasOwnProperty ("__kwargtrans__"))) {;
/* 000533 */ 			var py_default = _NotSpecified;
/* 000533 */ 		};
/* 000533 */ 		if (arguments.length) {
/* 000533 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000533 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000533 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000533 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000533 */ 					switch (__attrib0__) {
/* 000533 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000533 */ 						case 'index_spec': var index_spec = __allkwargs0__ [__attrib0__]; break;
/* 000533 */ 						case 'is_row': var is_row = __allkwargs0__ [__attrib0__]; break;
/* 000533 */ 						case 'is_col': var is_col = __allkwargs0__ [__attrib0__]; break;
/* 000533 */ 						case 'py_default': var py_default = __allkwargs0__ [__attrib0__]; break;
/* 000533 */ 					}
/* 000533 */ 				}
/* 000533 */ 			}
/* 000533 */ 		}
/* 000533 */ 		else {
/* 000533 */ 		}
/* 000536 */ 		if (__t__ (__call__ (isinstance, null, index_spec, str))) {
/* 000537 */ 			var index_spec_s = index_spec;
/* 000537 */ 		}
/* 000538 */ 		else {
/* 000540 */ 			var index_spec_s = (function () {
/* 000540 */ 				var __accu0__ = index_spec;
/* 000540 */ 				return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000540 */ 			}) ();
/* 000540 */ 		}
/* 000542 */ 		var index_spec_s = (function () {
/* 000542 */ 			var __accu0__ = index_spec_s;
/* 000542 */ 			return __call__ (__accu0__.strip, __accu0__);
/* 000542 */ 		}) ();
/* 000545 */ 		if (__t__ (__t__ (!__t__ ((index_spec_s))) || __eq__ (index_spec_s, '.'))) {
/* 000546 */ 			if (__t__ (py_default !== _NotSpecified)) {
/* 000547 */ 				return py_default;
/* 000547 */ 			}
/* 000548 */ 			if (__t__ (is_row)) {
/* 000549 */ 				return self.current_row;
/* 000549 */ 			}
/* 000550 */ 			if (__t__ (is_col)) {
/* 000551 */ 				return self.current_col;
/* 000551 */ 			}
/* 000552 */ 			var __except0__ = __call__ (RuntimeError, null, 'Internal error: Neither is_row nor is_col is set!');
/* 000552 */ 			__except0__.__cause__ = null;
/* 000552 */ 			throw __except0__;
/* 000552 */ 		}
/* 000555 */ 		if (__t__ ((function () {
/* 000555 */ 			var __accu0__ = self._rx_int;
/* 000555 */ 			return __call__ (__accu0__.match, __accu0__, index_spec_s);
/* 000555 */ 		}) ())) {
/* 000556 */ 			return __sub__ (__call__ (int, null, index_spec_s), 1);
/* 000556 */ 		}
/* 000559 */ 		if (__t__ (__t__ (is_row) && __in__ (index_spec_s, self.row_names))) {
/* 000560 */ 			return __getitem__ (self.row_names, index_spec_s);
/* 000560 */ 		}
/* 000561 */ 		if (__t__ (__t__ (is_col) && __in__ (index_spec_s, self.col_names))) {
/* 000562 */ 			return __getitem__ (self.col_names, index_spec_s);
/* 000562 */ 		}
/* 000564 */ 		var __except0__ = __call__ (ValueError, null, 'Invalid cell index: ‘{}’, expected number or valid alias name'.format (index_spec_s));
/* 000564 */ 		__except0__.__cause__ = null;
/* 000564 */ 		throw __except0__;
/* 000564 */ 	});},
/* 000568 */ 	get parse_cell_index_range_spec () {return __get__ (this, function (self, range_spec_s, is_row, is_col, py_default, default_start, default_end) {
/* 000568 */ 		if (typeof is_row == 'undefined' || (is_row != null && is_row.hasOwnProperty ("__kwargtrans__"))) {;
/* 000568 */ 			var is_row = false;
/* 000568 */ 		};
/* 000568 */ 		if (typeof is_col == 'undefined' || (is_col != null && is_col.hasOwnProperty ("__kwargtrans__"))) {;
/* 000568 */ 			var is_col = false;
/* 000568 */ 		};
/* 000568 */ 		if (typeof py_default == 'undefined' || (py_default != null && py_default.hasOwnProperty ("__kwargtrans__"))) {;
/* 000568 */ 			var py_default = _NotSpecified;
/* 000568 */ 		};
/* 000568 */ 		if (typeof default_start == 'undefined' || (default_start != null && default_start.hasOwnProperty ("__kwargtrans__"))) {;
/* 000568 */ 			var default_start = null;
/* 000568 */ 		};
/* 000568 */ 		if (typeof default_end == 'undefined' || (default_end != null && default_end.hasOwnProperty ("__kwargtrans__"))) {;
/* 000568 */ 			var default_end = null;
/* 000568 */ 		};
/* 000568 */ 		if (arguments.length) {
/* 000568 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000568 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000568 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000568 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000568 */ 					switch (__attrib0__) {
/* 000568 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000568 */ 						case 'range_spec_s': var range_spec_s = __allkwargs0__ [__attrib0__]; break;
/* 000568 */ 						case 'is_row': var is_row = __allkwargs0__ [__attrib0__]; break;
/* 000568 */ 						case 'is_col': var is_col = __allkwargs0__ [__attrib0__]; break;
/* 000568 */ 						case 'py_default': var py_default = __allkwargs0__ [__attrib0__]; break;
/* 000568 */ 						case 'default_start': var default_start = __allkwargs0__ [__attrib0__]; break;
/* 000568 */ 						case 'default_end': var default_end = __allkwargs0__ [__attrib0__]; break;
/* 000568 */ 					}
/* 000568 */ 				}
/* 000568 */ 			}
/* 000568 */ 		}
/* 000568 */ 		else {
/* 000568 */ 		}
/* 000572 */ 		if (__t__ (__in__ (',', range_spec_s))) {
/* 000574 */ 			var parts = (function () {
/* 000574 */ 				var __accu0__ = range_spec_s;
/* 000574 */ 				return __call__ (__accu0__.py_split, __accu0__, ',');
/* 000574 */ 			}) ();
/* 000575 */ 			var include_array = [];
/* 000576 */ 			var overall_start = null;
/* 000577 */ 			var overall_end = null;
/* 000578 */ 			var __iterable0__ = parts;
/* 000578 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000578 */ 				var part = __getitem__ (__iterable0__, __index0__);
/* 000579 */ 				var __left0__ = (function () {
/* 000579 */ 					var __accu0__ = self;
/* 000579 */ 					return __call__ (__accu0__.parse_cell_index_range_spec, __accu0__, part, __kwargtrans__ ({is_row: is_row, is_col: is_col, py_default: py_default}));
/* 000579 */ 				}) ();
/* 000579 */ 				var start = __left0__ [0];
/* 000579 */ 				var end = __left0__ [1];
/* 000583 */ 				for (var idx = start; idx < end; idx++) {
/* 000584 */ 					if (__t__ (__ge__ (idx, __call__ (len, null, include_array)))) {
/* 000585 */ 						var include_array = __call__ (__iadd__, null, include_array, (function () {
/* 000585 */ 							var __accu0__ = [];
/* 000585 */ 							for (var _ = 0; _ < __add__ (__sub__ (end, __call__ (len, null, include_array)), 1); _++) {
/* 000585 */ 								(function () {
/* 000585 */ 									var __accu1__ = __accu0__;
/* 000585 */ 									return __call__ (__accu1__.append, __accu1__, false);
/* 000585 */ 								}) ();
/* 000585 */ 							}
/* 000585 */ 							return __accu0__;
/* 000585 */ 						}) ());
/* 000585 */ 					}
/* 000586 */ 					__setitem__ (include_array, idx, true);
/* 000586 */ 				}
/* 000587 */ 				if (__t__ (__t__ (overall_start === null) || __gt__ (overall_start, start))) {
/* 000588 */ 					var overall_start = start;
/* 000588 */ 				}
/* 000589 */ 				if (__t__ (__t__ (overall_end === null) || __lt__ (overall_end, end))) {
/* 000590 */ 					var overall_end = end;
/* 000590 */ 				}
/* 000590 */ 			}
/* 000592 */ 			for (var idx = overall_start; idx < overall_end; idx++) {
/* 000593 */ 				if (__t__ (!__t__ ((__getitem__ (include_array, idx))))) {
/* 000594 */ 					var __except0__ = __call__ (ValueError, null, 'Specified range ‘{}’ is not contiguous'.format (range_spec_s));
/* 000594 */ 					__except0__.__cause__ = null;
/* 000594 */ 					throw __except0__;
/* 000594 */ 				}
/* 000594 */ 			}
/* 000597 */ 			return tuple ([overall_start, overall_end]);
/* 000597 */ 		}
/* 000599 */ 		if (__t__ (__in__ ('-', range_spec_s))) {
/* 000601 */ 			var __left0__ = (function () {
/* 000601 */ 				var __accu0__ = range_spec_s;
/* 000601 */ 				return __call__ (__accu0__.py_split, __accu0__, '-', 1);
/* 000601 */ 			}) ();
/* 000601 */ 			var start_spec = __left0__ [0];
/* 000601 */ 			var end_spec = __left0__ [1];
/* 000602 */ 			var start = (function () {
/* 000602 */ 				var __accu0__ = self;
/* 000602 */ 				return __call__ (__accu0__.parse_cell_index_spec, __accu0__, start_spec, __kwargtrans__ ({is_row: is_row, is_col: is_col, py_default: default_start}));
/* 000602 */ 			}) ();
/* 000605 */ 			var end_incl = (function () {
/* 000605 */ 				var __accu0__ = self;
/* 000605 */ 				return __call__ (__accu0__.parse_cell_index_spec, __accu0__, end_spec, __kwargtrans__ ({is_row: is_row, is_col: is_col, py_default: null}));
/* 000605 */ 			}) ();
/* 000608 */ 			if (__t__ (end_incl === null)) {
/* 000609 */ 				var end = default_end;
/* 000609 */ 			}
/* 000610 */ 			else {
/* 000611 */ 				var end = __add__ (end_incl, 1);
/* 000611 */ 			}
/* 000612 */ 			return tuple ([start, end]);
/* 000612 */ 		}
/* 000614 */ 		if (__t__ (__in__ ('+', range_spec_s))) {
/* 000616 */ 			var __left0__ = (function () {
/* 000616 */ 				var __accu0__ = range_spec_s;
/* 000616 */ 				return __call__ (__accu0__.py_split, __accu0__, '+', 1);
/* 000616 */ 			}) ();
/* 000616 */ 			var start_spec = __left0__ [0];
/* 000616 */ 			var len_spec = __left0__ [1];
/* 000617 */ 			var start = (function () {
/* 000617 */ 				var __accu0__ = self;
/* 000617 */ 				return __call__ (__accu0__.parse_cell_index_spec, __accu0__, start_spec, __kwargtrans__ ({is_row: is_row, is_col: is_col, py_default: py_default}));
/* 000617 */ 			}) ();
/* 000620 */ 			if (__t__ (!__t__ (((function () {
/* 000620 */ 				var __accu0__ = self._rx_int;
/* 000620 */ 				return __call__ (__accu0__.match, __accu0__, len_spec);
/* 000620 */ 			}) ())))) {
/* 000621 */ 				var __except0__ = __call__ (ValueError, null, 'Invalid number in ‘START+N’ cell index range specification: ‘{}’'.format (len_spec));
/* 000621 */ 				__except0__.__cause__ = null;
/* 000621 */ 				throw __except0__;
/* 000621 */ 			}
/* 000624 */ 			var range_len = __call__ (int, null, len_spec);
/* 000627 */ 			var end = __add__ (start, range_len);
/* 000628 */ 			return tuple ([start, end]);
/* 000628 */ 		}
/* 000630 */ 		var idx = (function () {
/* 000630 */ 			var __accu0__ = self;
/* 000630 */ 			return __call__ (__accu0__.parse_cell_index_spec, __accu0__, range_spec_s, __kwargtrans__ ({is_row: is_row, is_col: is_col, py_default: py_default}));
/* 000630 */ 		}) ();
/* 000633 */ 		return tuple ([idx, __add__ (idx, 1)]);
/* 000633 */ 	});},
/* 000636 */ 	get parse_placement_index_spec () {return __get__ (this, function (self, placement_index_spec, is_row, is_col, py_default, default_start, default_end) {
/* 000636 */ 		if (typeof is_row == 'undefined' || (is_row != null && is_row.hasOwnProperty ("__kwargtrans__"))) {;
/* 000636 */ 			var is_row = false;
/* 000636 */ 		};
/* 000636 */ 		if (typeof is_col == 'undefined' || (is_col != null && is_col.hasOwnProperty ("__kwargtrans__"))) {;
/* 000636 */ 			var is_col = false;
/* 000636 */ 		};
/* 000636 */ 		if (typeof py_default == 'undefined' || (py_default != null && py_default.hasOwnProperty ("__kwargtrans__"))) {;
/* 000636 */ 			var py_default = _NotSpecified;
/* 000636 */ 		};
/* 000636 */ 		if (typeof default_start == 'undefined' || (default_start != null && default_start.hasOwnProperty ("__kwargtrans__"))) {;
/* 000636 */ 			var default_start = 0;
/* 000636 */ 		};
/* 000636 */ 		if (typeof default_end == 'undefined' || (default_end != null && default_end.hasOwnProperty ("__kwargtrans__"))) {;
/* 000636 */ 			var default_end = _NotSpecified;
/* 000636 */ 		};
/* 000636 */ 		if (arguments.length) {
/* 000636 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000636 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000636 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000636 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000636 */ 					switch (__attrib0__) {
/* 000636 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000636 */ 						case 'placement_index_spec': var placement_index_spec = __allkwargs0__ [__attrib0__]; break;
/* 000636 */ 						case 'is_row': var is_row = __allkwargs0__ [__attrib0__]; break;
/* 000636 */ 						case 'is_col': var is_col = __allkwargs0__ [__attrib0__]; break;
/* 000636 */ 						case 'py_default': var py_default = __allkwargs0__ [__attrib0__]; break;
/* 000636 */ 						case 'default_start': var default_start = __allkwargs0__ [__attrib0__]; break;
/* 000636 */ 						case 'default_end': var default_end = __allkwargs0__ [__attrib0__]; break;
/* 000636 */ 					}
/* 000636 */ 				}
/* 000636 */ 			}
/* 000636 */ 		}
/* 000636 */ 		else {
/* 000636 */ 		}
/* 000641 */ 		if (__t__ (__eq__ (__call__ (len, null, placement_index_spec), 0))) {
/* 000642 */ 			if (__t__ (is_row)) {
/* 000643 */ 				return __call__ (CellIndexRangeModel, null, __kwargtrans__ ({start: self.current_row, end: __add__ (self.current_row, 1)}));
/* 000643 */ 			}
/* 000644 */ 			else if (__t__ (is_col)) {
/* 000645 */ 				return __call__ (CellIndexRangeModel, null, __kwargtrans__ ({start: self.current_col, end: __add__ (self.current_col, 1)}));
/* 000645 */ 			}
/* 000646 */ 			else {
/* 000647 */ 				var __except0__ = __call__ (RuntimeError, null, 'Internal error, neither is_row nor is_col was set here.');
/* 000647 */ 				__except0__.__cause__ = null;
/* 000647 */ 				throw __except0__;
/* 000647 */ 			}
/* 000647 */ 		}
/* 000649 */ 		var nl = (function () {
/* 000649 */ 			var __accu0__ = placement_index_spec.latex_walker;
/* 000649 */ 			return __call__ (__accu0__.filter_whitespace_comments_nodes, __accu0__, placement_index_spec);
/* 000649 */ 		}) ();
/* 000653 */ 		if (__t__ (__ne__ (__call__ (len, null, nl), 1))) {
/* 000654 */ 			if (__t__ (is_row)) {
/* 000655 */ 				var PLACEHOLDER = 'ROW';
/* 000655 */ 			}
/* 000656 */ 			else if (__t__ (is_col)) {
/* 000657 */ 				var PLACEHOLDER = 'COL';
/* 000657 */ 			}
/* 000658 */ 			else {
/* 000659 */ 				var PLACEHOLDER = null;
/* 000659 */ 			}
/* 000663 */ 			var __except0__ = __call__ (LatexWalkerLocatedError, null, 'Bad cell index or merge range specification, expected ‘{}’ or ‘\\merge{}{}-RANGE{}’, got {} ({} nodes)'.format (PLACEHOLDER, '{', PLACEHOLDER, '}', __call__ (repr, null, placement_index_spec), __call__ (len, null, nl)), __kwargtrans__ ({pos: nl.pos}));
/* 000663 */ 			__except0__.__cause__ = null;
/* 000663 */ 			throw __except0__;
/* 000663 */ 		}
/* 000667 */ 		var node = __getitem__ (nl, 0);
/* 000669 */ 		if (__t__ (__t__ ((function () {
/* 000669 */ 			var __accu0__ = node;
/* 000669 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000669 */ 		}) ()) && __eq__ (node.macroname, 'merge'))) {
/* 000673 */ 			var merge_node_args = (function () {
/* 000673 */ 				var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000673 */ 				return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['mergespec']));
/* 000673 */ 			}) ();
/* 000677 */ 			var range_spec_s = (function () {
/* 000677 */ 				var __accu0__ = __getitem__ (merge_node_args, 'mergespec');
/* 000677 */ 				return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000677 */ 			}) ();
/* 000679 */ 			var default_end_computed = default_end;
/* 000680 */ 			if (__t__ (default_end_computed === _NotSpecified)) {
/* 000681 */ 				if (__t__ (is_row)) {
/* 000682 */ 					var default_end_computed = __getitem__ (self.cells_size, 0);
/* 000682 */ 				}
/* 000683 */ 				if (__t__ (is_col)) {
/* 000684 */ 					var default_end_computed = __getitem__ (self.cells_size, 1);
/* 000684 */ 				}
/* 000684 */ 			}
/* 000686 */ 			var __left0__ = (function () {
/* 000686 */ 				var __accu0__ = self;
/* 000686 */ 				return __call__ (__accu0__.parse_cell_index_range_spec, __accu0__, range_spec_s, __kwargtrans__ ({is_row: is_row, is_col: is_col, default_start: default_start, default_end: default_end_computed}));
/* 000686 */ 			}) ();
/* 000686 */ 			var start = __left0__ [0];
/* 000686 */ 			var end = __left0__ [1];
/* 000691 */ 			return __call__ (CellIndexRangeModel, null, __kwargtrans__ ({start: start, end: end}));
/* 000691 */ 		}
/* 000694 */ 		var idx = (function () {
/* 000694 */ 			var __accu0__ = self;
/* 000695 */ 			return __call__ (__accu0__.parse_cell_index_spec, __accu0__, (function () {
/* 000695 */ 				var __accu1__ = nl;
/* 000695 */ 				return __call__ (__accu1__.get_content_as_chars, __accu1__);
/* 000695 */ 			}) (), __kwargtrans__ ({is_row: is_row, is_col: is_col, py_default: py_default}));
/* 000695 */ 		}) ();
/* 000698 */ 		return __call__ (CellIndexRangeModel, null, __kwargtrans__ ({start: idx, end: __add__ (idx, 1)}));
/* 000698 */ 	});},
/* 000701 */ 	get parse_placement_spec () {return __get__ (this, function (self, placement_spec) {
/* 000701 */ 		if (arguments.length) {
/* 000701 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000701 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000701 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000701 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000701 */ 					switch (__attrib0__) {
/* 000701 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000701 */ 						case 'placement_spec': var placement_spec = __allkwargs0__ [__attrib0__]; break;
/* 000701 */ 					}
/* 000701 */ 				}
/* 000701 */ 			}
/* 000701 */ 		}
/* 000701 */ 		else {
/* 000701 */ 		}
/* 000703 */ 		if (__t__ (__call__ (isinstance, null, placement_spec, CellPlacementModel))) {
/* 000704 */ 			return placement_spec;
/* 000704 */ 		}
/* 000706 */ 		var __left0__ = tuple ([[], []]);
/* 000706 */ 		var row_spec_nl = __left0__ [0];
/* 000706 */ 		var col_spec_nl = __left0__ [1];
/* 000708 */ 		if (__t__ (placement_spec !== null)) {
/* 000710 */ 			var placement_spec_split = (function () {
/* 000710 */ 				var __accu0__ = placement_spec;
/* 000710 */ 				return __call__ (__accu0__.split_at_chars, __accu0__, ';', __kwargtrans__ ({keep_empty: true}));
/* 000710 */ 			}) ();
/* 000712 */ 			if (__t__ (__eq__ (__call__ (len, null, placement_spec_split), 2))) {
/* 000714 */ 				var __left0__ = placement_spec_split;
/* 000714 */ 				var row_spec_nl = __left0__ [0];
/* 000714 */ 				var col_spec_nl = __left0__ [1];
/* 000714 */ 			}
/* 000716 */ 			else if (__t__ (__eq__ (__call__ (len, null, placement_spec_split), 1))) {
/* 000718 */ 				var __left0__ = placement_spec_split;
/* 000718 */ 				var col_spec_nl = __left0__ [0];
/* 000718 */ 			}
/* 000720 */ 			else if (__t__ (__eq__ (__call__ (len, null, placement_spec_split), 0))) {
/* 000723 */ 				// pass;
/* 000723 */ 			}
/* 000724 */ 			else {
/* 000729 */ 				var __except0__ = __call__ (LatexWalkerLocatedError, null, 'Bad cell placement specification, expected ‘ROW;COL’ or ‘COL’, got ‘{}’'.format (__call__ (_splfysidews, null, (function () {
/* 000729 */ 					var __accu0__ = placement_spec;
/* 000729 */ 					return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000729 */ 				}) ())), __kwargtrans__ ({pos: placement_spec.pos}));
/* 000729 */ 				__except0__.__cause__ = null;
/* 000729 */ 				throw __except0__;
/* 000729 */ 			}
/* 000729 */ 		}
/* 000733 */ 		var row_range = (function () {
/* 000733 */ 			var __accu0__ = self;
/* 000733 */ 			return __call__ (__accu0__.parse_placement_index_spec, __accu0__, row_spec_nl, __kwargtrans__ ({is_row: true}));
/* 000733 */ 		}) ();
/* 000734 */ 		var col_range = (function () {
/* 000734 */ 			var __accu0__ = self;
/* 000734 */ 			return __call__ (__accu0__.parse_placement_index_spec, __accu0__, col_spec_nl, __kwargtrans__ ({is_col: true}));
/* 000734 */ 		}) ();
/* 000736 */ 		return __call__ (CellPlacementModel, null, __kwargtrans__ ({row_range: row_range, col_range: col_range}));
/* 000736 */ 	});},
/* 000741 */ 	get parse_placement_mapping_index_spec () {return __get__ (this, function (self, placement_mapping_index_spec, index_end, is_row, is_col) {
/* 000741 */ 		if (typeof is_row == 'undefined' || (is_row != null && is_row.hasOwnProperty ("__kwargtrans__"))) {;
/* 000741 */ 			var is_row = false;
/* 000741 */ 		};
/* 000741 */ 		if (typeof is_col == 'undefined' || (is_col != null && is_col.hasOwnProperty ("__kwargtrans__"))) {;
/* 000741 */ 			var is_col = false;
/* 000741 */ 		};
/* 000741 */ 		if (arguments.length) {
/* 000741 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000741 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000741 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000741 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000741 */ 					switch (__attrib0__) {
/* 000741 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000741 */ 						case 'placement_mapping_index_spec': var placement_mapping_index_spec = __allkwargs0__ [__attrib0__]; break;
/* 000741 */ 						case 'index_end': var index_end = __allkwargs0__ [__attrib0__]; break;
/* 000741 */ 						case 'is_row': var is_row = __allkwargs0__ [__attrib0__]; break;
/* 000741 */ 						case 'is_col': var is_col = __allkwargs0__ [__attrib0__]; break;
/* 000741 */ 					}
/* 000741 */ 				}
/* 000741 */ 			}
/* 000741 */ 		}
/* 000741 */ 		else {
/* 000741 */ 		}
/* 000744 */ 		if (__t__ (__eq__ (__call__ (len, null, placement_mapping_index_spec), 0))) {
/* 000746 */ 			return [];
/* 000746 */ 		}
/* 000748 */ 		var parts = (function () {
/* 000748 */ 			var __accu0__ = placement_mapping_index_spec;
/* 000748 */ 			return __call__ (__accu0__.split_at_chars, __accu0__, ',', __kwargtrans__ ({keep_empty: true}));
/* 000748 */ 		}) ();
/* 000751 */ 		var current_idx = 0;
/* 000753 */ 		var index_placements = [];
/* 000754 */ 		var __iterable0__ = parts;
/* 000754 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000754 */ 			var placement_part_spec = __getitem__ (__iterable0__, __index0__);
/* 000759 */ 			var nl = (function () {
/* 000759 */ 				var __accu0__ = placement_part_spec.latex_walker;
/* 000759 */ 				return __call__ (__accu0__.filter_whitespace_comments_nodes, __accu0__, placement_part_spec);
/* 000759 */ 			}) ();
/* 000763 */ 			if (__t__ (__ne__ (__call__ (len, null, nl), 1))) {
/* 000764 */ 				if (__t__ (is_row)) {
/* 000765 */ 					var PLACEHOLDER = 'ROW-RANGE';
/* 000765 */ 				}
/* 000766 */ 				else if (__t__ (is_col)) {
/* 000767 */ 					var PLACEHOLDER = 'COL-RANGE';
/* 000767 */ 				}
/* 000768 */ 				else {
/* 000769 */ 					var PLACEHOLDER = null;
/* 000769 */ 				}
/* 000774 */ 				var __except0__ = __call__ (LatexWalkerLocatedError, null, 'Bad cell index or range or merge range specification, expected ‘{}’ or ‘\\merge{}{}-RANGE{}’, got {} ({} nodes)'.format (PLACEHOLDER, '{', PLACEHOLDER, '}', __call__ (repr, null, placement_index_spec), __call__ (len, null, nl)), __kwargtrans__ ({pos: nl.pos}));
/* 000774 */ 				__except0__.__cause__ = null;
/* 000774 */ 				throw __except0__;
/* 000774 */ 			}
/* 000778 */ 			var node = __getitem__ (nl, 0);
/* 000780 */ 			if (__t__ (__t__ ((function () {
/* 000780 */ 				var __accu0__ = node;
/* 000780 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000780 */ 			}) ()) && __eq__ (node.macroname, 'merge'))) {
/* 000784 */ 				var merge_node_args = (function () {
/* 000784 */ 					var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000784 */ 					return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['mergespec']));
/* 000784 */ 				}) ();
/* 000788 */ 				var range_spec_s = (function () {
/* 000788 */ 					var __accu0__ = __getitem__ (merge_node_args, 'mergespec');
/* 000788 */ 					return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000788 */ 				}) ();
/* 000790 */ 				var __left0__ = (function () {
/* 000790 */ 					var __accu0__ = self;
/* 000790 */ 					return __call__ (__accu0__.parse_cell_index_range_spec, __accu0__, range_spec_s, __kwargtrans__ ({is_row: is_row, is_col: is_col, py_default: current_idx, default_start: current_idx, default_end: null}));
/* 000790 */ 				}) ();
/* 000790 */ 				var start = __left0__ [0];
/* 000790 */ 				var end = __left0__ [1];
/* 000796 */ 				(function () {
/* 000796 */ 					var __accu0__ = index_placements;
/* 000796 */ 					return __call__ (__accu0__.append, __accu0__, __call__ (CellIndexRangeModel, null, __kwargtrans__ ({start: start, end: end})));
/* 000796 */ 				}) ();
/* 000797 */ 				var current_idx = end;
/* 000797 */ 				continue;
/* 000797 */ 			}
/* 000801 */ 			var __left0__ = (function () {
/* 000801 */ 				var __accu0__ = self;
/* 000802 */ 				return __call__ (__accu0__.parse_cell_index_range_spec, __accu0__, (function () {
/* 000802 */ 					var __accu1__ = nl;
/* 000802 */ 					return __call__ (__accu1__.get_content_as_chars, __accu1__);
/* 000802 */ 				}) (), __kwargtrans__ ({is_row: is_row, is_col: is_col, py_default: current_idx, default_start: current_idx, default_end: null}));
/* 000802 */ 			}) ();
/* 000802 */ 			var iter_start = __left0__ [0];
/* 000802 */ 			var iter_end = __left0__ [1];
/* 000806 */ 			if (__t__ (iter_end === null)) {
/* 000807 */ 				(function () {
/* 000807 */ 					var __accu0__ = index_placements;
/* 000807 */ 					return __call__ (__accu0__.append, __accu0__, __call__ (CellIndexRangeModel, null, __kwargtrans__ ({start: iter_start, end: null})));
/* 000807 */ 				}) ();
/* 000808 */ 				var current_idx = null;
/* 000808 */ 			}
/* 000809 */ 			else {
/* 000811 */ 				for (var j = iter_start; j < iter_end; j++) {
/* 000812 */ 					(function () {
/* 000812 */ 						var __accu0__ = index_placements;
/* 000812 */ 						return __call__ (__accu0__.append, __accu0__, __call__ (CellIndexRangeModel, null, __kwargtrans__ ({start: j, end: __add__ (j, 1)})));
/* 000812 */ 					}) ();
/* 000813 */ 					var current_idx = __add__ (j, 1);
/* 000813 */ 				}
/* 000813 */ 			}
/* 000813 */ 			continue;
/* 000813 */ 		}
/* 000817 */ 		return index_placements;
/* 000817 */ 	});},
/* 000819 */ 	get parse_placement_mapping_spec () {return __get__ (this, function (self, placement_mapping_spec) {
/* 000819 */ 		if (arguments.length) {
/* 000819 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000819 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000819 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000819 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000819 */ 					switch (__attrib0__) {
/* 000819 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000819 */ 						case 'placement_mapping_spec': var placement_mapping_spec = __allkwargs0__ [__attrib0__]; break;
/* 000819 */ 					}
/* 000819 */ 				}
/* 000819 */ 			}
/* 000819 */ 		}
/* 000819 */ 		else {
/* 000819 */ 		}
/* 000822 */ 		var placement_mapping_spec_split = (function () {
/* 000822 */ 			var __accu0__ = placement_mapping_spec;
/* 000822 */ 			return __call__ (__accu0__.split_at_chars, __accu0__, ';', __kwargtrans__ ({keep_empty: true}));
/* 000822 */ 		}) ();
/* 000824 */ 		if (__t__ (__eq__ (__call__ (len, null, placement_mapping_spec_split), 2))) {
/* 000826 */ 			var __left0__ = placement_mapping_spec_split;
/* 000826 */ 			var row_mapping_spec = __left0__ [0];
/* 000826 */ 			var col_mapping_spec = __left0__ [1];
/* 000826 */ 		}
/* 000828 */ 		else if (__t__ (__eq__ (__call__ (len, null, placement_mapping_spec_split), 1))) {
/* 000830 */ 			var row_mapping_spec = [];
/* 000831 */ 			var __left0__ = placement_mapping_spec_split;
/* 000831 */ 			var col_mapping_spec = __left0__ [0];
/* 000831 */ 		}
/* 000833 */ 		else if (__t__ (__eq__ (__call__ (len, null, placement_mapping_spec_split), 0))) {
/* 000835 */ 			var __left0__ = tuple ([[], []]);
/* 000835 */ 			var row_mapping_spec = __left0__ [0];
/* 000835 */ 			var col_mapping_spec = __left0__ [1];
/* 000835 */ 		}
/* 000836 */ 		else {
/* 000841 */ 			var __except0__ = __call__ (LatexWalkerLocatedError, null, 'Expected ‘ROWS;COLS’ or ‘COLS’ or ‘’ for placement argument, got ‘{}’'.format (__call__ (_splfysidews, null, (function () {
/* 000841 */ 				var __accu0__ = placement_mapping_spec;
/* 000841 */ 				return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000841 */ 			}) ())), __kwargtrans__ ({pos: placement_mapping_spec.pos}));
/* 000841 */ 			__except0__.__cause__ = null;
/* 000841 */ 			throw __except0__;
/* 000841 */ 		}
/* 000845 */ 		var row_placements = (function () {
/* 000845 */ 			var __accu0__ = self;
/* 000845 */ 			return __call__ (__accu0__.parse_placement_mapping_index_spec, __accu0__, row_mapping_spec, __kwargtrans__ ({index_end: null, is_row: true}));
/* 000845 */ 		}) ();
/* 000848 */ 		var col_placements = (function () {
/* 000848 */ 			var __accu0__ = self;
/* 000848 */ 			return __call__ (__accu0__.parse_placement_mapping_index_spec, __accu0__, col_mapping_spec, __kwargtrans__ ({index_end: null, is_col: true}));
/* 000848 */ 		}) ();
/* 000852 */ 		return __call__ (CellPlacementsMappingModel, null, __kwargtrans__ ({row_placements: row_placements, col_placements: col_placements}));
/* 000852 */ 	});}
/* 000852 */ });
/* 000862 */ export var CellsEnvironment =  __class__ ('CellsEnvironment', [FLMEnvironmentSpecBase], {
/* 000862 */ 	__module__: __name__,
/* 000864 */ 	is_block_level: true,
/* 000866 */ 	allowed_in_standalone_mode: true,
/* 000868 */ 	body_contents_is_block_level: true,
/* 000871 */ 	get __init__ () {return __get__ (this, function (self, environmentname) {
/* 000871 */ 		if (typeof environmentname == 'undefined' || (environmentname != null && environmentname.hasOwnProperty ("__kwargtrans__"))) {;
/* 000871 */ 			var environmentname = 'cells';
/* 000871 */ 		};
/* 000871 */ 		if (arguments.length) {
/* 000871 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000871 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000871 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000871 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000871 */ 					switch (__attrib0__) {
/* 000871 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000871 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000871 */ 					}
/* 000871 */ 				}
/* 000871 */ 			}
/* 000871 */ 		}
/* 000871 */ 		else {
/* 000871 */ 		}
/* 000872 */ 		__call__ (__call__ (__super__, null, CellsEnvironment, '__init__'), null, self, __kwargtrans__ ({environmentname: environmentname}));
/* 000872 */ 	});},
/* 000876 */ 	_fields: tuple (['environmentname']),
/* 000878 */ 	get make_body_parser () {return __get__ (this, function (self, token, nodeargd, arg_parsing_state_delta) {
/* 000878 */ 		if (arguments.length) {
/* 000878 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000878 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000878 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000878 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000878 */ 					switch (__attrib0__) {
/* 000878 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000878 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000878 */ 						case 'nodeargd': var nodeargd = __allkwargs0__ [__attrib0__]; break;
/* 000878 */ 						case 'arg_parsing_state_delta': var arg_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000878 */ 					}
/* 000878 */ 				}
/* 000878 */ 			}
/* 000878 */ 		}
/* 000878 */ 		else {
/* 000878 */ 		}
/* 000879 */ 		return (function () {
/* 000879 */ 			var __accu0__ = macrospec;
/* 000881 */ 			return __call__ (__accu0__.LatexEnvironmentBodyContentsParser, __accu0__, __kwargtrans__ ({environmentname: token.arg, contents_parsing_state_delta: (function () {
/* 000881 */ 				var __accu1__ = macrospec;
/* 000886 */ 				return __call__ (__accu1__.ParsingStateDeltaExtendLatexContextDb, __accu1__, __kwargtrans__ ({extend_latex_context: __call__ (dict, null, __kwargtrans__ ({macros: [__call__ (CellMacro, null), __call__ (CelldataMacroSpec, null), __call__ (LatexTabularRowSeparatorSpec, null)]}))}));
/* 000892 */ 			}) (), child_parsing_state_delta: __call__ (ParsingStateDelta, null)}));
/* 000892 */ 		}) ();
/* 000892 */ 	});},
/* 000896 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000896 */ 		if (arguments.length) {
/* 000896 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000896 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000896 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000896 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000896 */ 					switch (__attrib0__) {
/* 000896 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000896 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000896 */ 					}
/* 000896 */ 				}
/* 000896 */ 			}
/* 000896 */ 		}
/* 000896 */ 		else {
/* 000896 */ 		}
/* 000900 */ 		var cells_model = __call__ (CellsModel, null);
/* 000902 */ 		var __iterable0__ = node.nodelist;
/* 000902 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000902 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000903 */ 			if (__t__ ((function () {
/* 000903 */ 				var __accu0__ = n;
/* 000903 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000903 */ 			}) ())) {
/* 000904 */ 				if (__t__ (__eq__ (n.macroname, 'cell'))) {
/* 000905 */ 					(function () {
/* 000905 */ 						var __accu0__ = cells_model;
/* 000905 */ 						return __call__ (__accu0__.add_cell_node, __accu0__, n);
/* 000905 */ 					}) ();
/* 000905 */ 					continue;
/* 000905 */ 				}
/* 000907 */ 				else if (__t__ (__eq__ (n.macroname, 'celldata'))) {
/* 000908 */ 					(function () {
/* 000908 */ 						var __accu0__ = cells_model;
/* 000908 */ 						return __call__ (__accu0__.add_celldata_node, __accu0__, n);
/* 000908 */ 					}) ();
/* 000908 */ 					continue;
/* 000908 */ 				}
/* 000910 */ 				else if (__t__ (__eq__ (n.macroname, '\\'))) {
/* 000911 */ 					(function () {
/* 000911 */ 						var __accu0__ = cells_model;
/* 000911 */ 						return __call__ (__accu0__.move_next_row, __accu0__);
/* 000911 */ 					}) ();
/* 000911 */ 					continue;
/* 000911 */ 				}
/* 000911 */ 			}
/* 000914 */ 			if (__t__ ((function () {
/* 000914 */ 				var __accu0__ = n;
/* 000914 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCommentNode);
/* 000914 */ 			}) ())) {
/* 000914 */ 				continue;
/* 000914 */ 			}
/* 000918 */ 			if (__t__ (__t__ ((function () {
/* 000918 */ 				var __accu0__ = n;
/* 000918 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000919 */ 			}) ()) && __eq__ (__call__ (len, null, (function () {
/* 000919 */ 				var __accu0__ = n.chars;
/* 000919 */ 				return __call__ (__accu0__.strip, __accu0__);
/* 000919 */ 			}) ()), 0))) {
/* 000919 */ 				continue;
/* 000919 */ 			}
/* 000924 */ 			var __except0__ = __call__ (LatexWalkerLocatedError, null, 'You cannot place ‘{}’ here.  Expected: \\cell, \\celldata, \\\\.'.format (__call__ (_splfysidews, null, (function () {
/* 000924 */ 				var __accu0__ = n;
/* 000924 */ 				return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000924 */ 			}) ())));
/* 000924 */ 			__except0__.__cause__ = null;
/* 000924 */ 			throw __except0__;
/* 000924 */ 		}
/* 000928 */ 		(function () {
/* 000928 */ 			var __accu0__ = cells_model;
/* 000928 */ 			return __call__ (__accu0__.finalize, __accu0__);
/* 000928 */ 		}) ();
/* 000930 */ 		node.flm_cells_model = cells_model;
/* 000930 */ 	});},
/* 000933 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000933 */ 		if (arguments.length) {
/* 000933 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000933 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000933 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000933 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000933 */ 					switch (__attrib0__) {
/* 000933 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000933 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000933 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000933 */ 					}
/* 000933 */ 				}
/* 000933 */ 			}
/* 000933 */ 		}
/* 000933 */ 		else {
/* 000933 */ 		}
/* 000939 */ 		return (function () {
/* 000939 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000939 */ 			return __call__ (__accu0__.render_cells, __accu0__, __kwargtrans__ ({cells_model: node.flm_cells_model, render_context: render_context}));
/* 000939 */ 		}) ();
/* 000939 */ 	});},
/* 000949 */ 	get recompose_pure_latex () {return __get__ (this, function (self, node, recomposer) {
/* 000949 */ 		if (arguments.length) {
/* 000949 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000949 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000949 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000949 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000949 */ 					switch (__attrib0__) {
/* 000949 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000949 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000949 */ 						case 'recomposer': var recomposer = __allkwargs0__ [__attrib0__]; break;
/* 000949 */ 					}
/* 000949 */ 				}
/* 000949 */ 			}
/* 000949 */ 		}
/* 000949 */ 		else {
/* 000949 */ 		}
/* 000951 */ 		var recopt_cells = (function () {
/* 000951 */ 			var __accu0__ = recomposer;
/* 000951 */ 			return __call__ (__accu0__.get_options, __accu0__, 'cells');
/* 000951 */ 		}) ();
/* 000952 */ 		if (__t__ ((function () {
/* 000952 */ 			var __accu0__ = recopt_cells;
/* 000952 */ 			return __call__ (__accu0__.py_get, __accu0__, 'keep_as_is', false);
/* 000952 */ 		}) ())) {
/* 000953 */ 			return false;
/* 000953 */ 		}
/* 000956 */ 		if (__t__ (__t__ (recomposer.render_context === null) || __t__ (!__t__ ((__call__ (hasattr, null, recomposer.render_context, 'fragment_renderer')))) || recomposer.render_context.fragment_renderer === null)) {
/* 000958 */ 			var __except0__ = __call__ (ValueError, null, 'Recomposing cells while compiling them into a tabularray requires a render_context in the pure latex recomposer with a LatexFragmentRenderer instance.');
/* 000958 */ 			__except0__.__cause__ = null;
/* 000958 */ 			throw __except0__;
/* 000958 */ 		}
/* 000964 */ 		var render_context = recomposer.render_context;
/* 000965 */ 		var fragment_renderer = render_context.fragment_renderer;
/* 000967 */ 		return (function () {
/* 000967 */ 			var __accu0__ = fragment_renderer;
/* 000967 */ 			return __call__ (__accu0__.render_cells, __accu0__, __kwargtrans__ ({cells_model: node.flm_cells_model, render_context: render_context, render_cell_nodelist_contents_fn: (function __lambda__ (nodelist, render_context) {
/* 000967 */ 				if (arguments.length) {
/* 000967 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000967 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000967 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000967 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000967 */ 							switch (__attrib0__) {
/* 000967 */ 								case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000967 */ 								case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000967 */ 							}
/* 000967 */ 						}
/* 000967 */ 					}
/* 000967 */ 				}
/* 000967 */ 				else {
/* 000967 */ 				}
/* 000972 */ 				return (function () {
/* 000972 */ 					var __accu1__ = recomposer;
/* 000972 */ 					return __call__ (__accu1__.subrecompose, __accu1__, nodelist);
/* 000972 */ 				}) ();
/* 000972 */ 			})}));
/* 000972 */ 		}) ();
/* 000972 */ 	});}
/* 000972 */ });
/* 000983 */ export var FeatureCells =  __class__ ('FeatureCells', [Feature], {
/* 000983 */ 	__module__: __name__,
/* 000991 */ 	feature_name: 'cells',
/* 000992 */ 	feature_title: 'Typesetting data tables',
/* 000994 */ 	DocumentManager: null,
/* 000995 */ 	RenderManager: null,
/* 000997 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000997 */ 		if (arguments.length) {
/* 000997 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000997 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000997 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000997 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000997 */ 					switch (__attrib0__) {
/* 000997 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000997 */ 					}
/* 000997 */ 				}
/* 000997 */ 			}
/* 000997 */ 		}
/* 000997 */ 		else {
/* 000997 */ 		}
/* 001000 */ 		return __call__ (dict, null, __kwargtrans__ ({environments: [__call__ (CellsEnvironment, null)]}));
/* 001000 */ 	});},
/* 001006 */ 	get add_flm_doc_latex_context_definitions () {return __get__ (this, function (self, base_feature_definitions) {
/* 001006 */ 		if (arguments.length) {
/* 001006 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001006 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001006 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001006 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001006 */ 					switch (__attrib0__) {
/* 001006 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001006 */ 						case 'base_feature_definitions': var base_feature_definitions = __allkwargs0__ [__attrib0__]; break;
/* 001006 */ 					}
/* 001006 */ 				}
/* 001006 */ 			}
/* 001006 */ 		}
/* 001006 */ 		else {
/* 001006 */ 		}
/* 001019 */ 		return __call__ (dict, null, __kwargtrans__ ({macros: [__call__ (CellMacro, null), __call__ (CelldataMacroSpec, null), __call__ (MergeMacroSpec, null), __call__ (LatexTabularRowSeparatorSpec, null)], specials: [__call__ (LatexTabularColumnSeparatorSpec, null)]}));
/* 001019 */ 	});}
/* 001019 */ });
/* 001023 */ export var FeatureClass = FeatureCells;
/* 000014 */ 
//# sourceMappingURL=flm.feature.cells.map