/* 000001 */ // Transcrypt'ed from Python, 2022-12-14 17:06:09
/* 000010 */ var logging = {};
/* 000010 */ var re = {};
/* 000010 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000033 */ import {Feature} from './llm.feature._base.js';
/* 000028 */ import {LLMEnvironmentSpecBase, LLMMacroSpecError} from './llm.llmspecinfo.js';
/* 000025 */ import {LLMArgumentSpec} from './llm.llmenvironment.js';
/* 000023 */ import * as latexnodes_parsers from './pylatexenc.latexnodes.parsers.js';
/* 000022 */ import * as latexnodes_nodes from './pylatexenc.latexnodes.nodes.js';
/* 000016 */ import {LatexArgumentSpec, LatexWalkerParseError, ParsedArgumentsInfo, ParsingStateDelta} from './pylatexenc.latexnodes.js';
/* 000015 */ import * as macrospec from './pylatexenc.macrospec.js';
/* 000012 */ import * as __module_logging__ from './logging.js';
/* 000012 */ __nest__ (logging, '', __module_logging__);
/* 000010 */ import * as __module_re__ from './re.js';
/* 000010 */ __nest__ (re, '', __module_re__);
/* 000010 */ export {Feature, LLMEnvironmentSpecBase, LLMMacroSpecError, latexnodes_parsers, LatexWalkerParseError, ParsedArgumentsInfo, latexnodes_nodes, LatexArgumentSpec, LLMArgumentSpec, ParsingStateDelta, macrospec};
/* 000001 */ var __name__ = 'llm.feature.cells';
/* 000013 */ export var logger = (function () {
/* 000013 */ 	var __accu0__ = logging;
/* 000013 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000013 */ }) ();
/* 000038 */ export var _NotSpecified =  __class__ ('_NotSpecified', [object], {
/* 000038 */ 	__module__: __name__,
/* 000038 */ });
/* 000044 */ export var LatexTabularRowSeparatorSpec =  __class__ ('LatexTabularRowSeparatorSpec', [macrospec.MacroSpec], {
/* 000044 */ 	__module__: __name__,
/* 000045 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000045 */ 		if (arguments.length) {
/* 000045 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000045 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000045 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000045 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000045 */ 					switch (__attrib0__) {
/* 000045 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000045 */ 					}
/* 000045 */ 				}
/* 000045 */ 			}
/* 000045 */ 		}
/* 000045 */ 		else {
/* 000045 */ 		}
/* 000046 */ 		__call__ (__call__ (__super__, null, LatexTabularRowSeparatorSpec, '__init__'), null, self, __kwargtrans__ ({macroname: '\\', arguments_spec_list: []}));
/* 000046 */ 	});}
/* 000046 */ });
/* 000048 */ export var LatexTabularColumnSeparatorSpec =  __class__ ('LatexTabularColumnSeparatorSpec', [macrospec.SpecialsSpec], {
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
/* 000050 */ 		__call__ (__call__ (__super__, null, LatexTabularColumnSeparatorSpec, '__init__'), null, self, __kwargtrans__ ({specials_chars: '&', arguments_spec_list: []}));
/* 000050 */ 	});}
/* 000050 */ });
/* 000055 */ export var _macro_args = dict ({'mergespec': __call__ (LatexArgumentSpec, null, (function () {
/* 000055 */ 	var __accu0__ = latexnodes_parsers;
/* 000055 */ 	return __call__ (__accu0__.LatexCharsGroupParser, __accu0__, __kwargtrans__ ({enable_groups: false}));
/* 000059 */ }) (), __kwargtrans__ ({argname: 'mergespec'})), 'styles': __call__ (LatexArgumentSpec, null, (function () {
/* 000059 */ 	var __accu0__ = latexnodes_parsers;
/* 000059 */ 	return __call__ (__accu0__.LatexCharsGroupParser, __accu0__, __kwargtrans__ ({delimiters: tuple (['<', '>']), enable_groups: false, optional: true}));
/* 000067 */ }) (), __kwargtrans__ ({argname: 'styles'})), 'styles_mapping': __call__ (LatexArgumentSpec, null, (function () {
/* 000067 */ 	var __accu0__ = latexnodes_parsers;
/* 000067 */ 	return __call__ (__accu0__.LatexCharsGroupParser, __accu0__, __kwargtrans__ ({delimiters: tuple (['<', '>']), enable_groups: false, optional: true}));
/* 000074 */ }) (), __kwargtrans__ ({argname: 'styles_mapping'})), 'cellcontents': __call__ (LLMArgumentSpec, null, '{', __kwargtrans__ ({argname: 'cellcontents', is_block_level: true}))});
/* 000081 */ export var MergeMacroSpec =  __class__ ('MergeMacroSpec', [macrospec.MacroSpec], {
/* 000081 */ 	__module__: __name__,
/* 000082 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000082 */ 		if (typeof macroname == 'undefined' || (macroname != null && macroname.hasOwnProperty ("__kwargtrans__"))) {;
/* 000082 */ 			var macroname = 'merge';
/* 000082 */ 		};
/* 000082 */ 		if (arguments.length) {
/* 000082 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000082 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000082 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000082 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000082 */ 					switch (__attrib0__) {
/* 000082 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000082 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000082 */ 					}
/* 000082 */ 				}
/* 000082 */ 			}
/* 000082 */ 		}
/* 000082 */ 		else {
/* 000082 */ 		}
/* 000083 */ 		__call__ (__call__ (__super__, null, MergeMacroSpec, '__init__'), null, self, macroname, __kwargtrans__ ({arguments_spec_list: [__getitem__ (_macro_args, 'mergespec')]}));
/* 000083 */ 	});}
/* 000083 */ });
/* 000088 */ __setitem__ (_macro_args, 'placement', __call__ (LatexArgumentSpec, null, (function () {
/* 000088 */ 	var __accu0__ = latexnodes_parsers;
/* 000088 */ 	return __call__ (__accu0__.LatexDelimitedGroupParser, __accu0__, __kwargtrans__ ({delimiters: tuple (['[', ']']), optional: true}));
/* 000093 */ }) (), __kwargtrans__ ({argname: 'placement', parsing_state_delta: (function () {
/* 000093 */ 	var __accu0__ = macrospec;
/* 000095 */ 	return __call__ (__accu0__.ParsingStateDeltaExtendLatexContextDb, __accu0__, __kwargtrans__ ({extend_latex_context: __call__ (dict, null, __kwargtrans__ ({macros: [__call__ (MergeMacroSpec, null)]}))}));
/* 000095 */ }) ()})));
/* 000101 */ __setitem__ (_macro_args, 'placement_mapping', __call__ (LatexArgumentSpec, null, (function () {
/* 000101 */ 	var __accu0__ = latexnodes_parsers;
/* 000101 */ 	return __call__ (__accu0__.LatexDelimitedGroupParser, __accu0__, __kwargtrans__ ({delimiters: tuple (['[', ']']), optional: true}));
/* 000106 */ }) (), __kwargtrans__ ({argname: 'placement_mapping', parsing_state_delta: (function () {
/* 000106 */ 	var __accu0__ = macrospec;
/* 000108 */ 	return __call__ (__accu0__.ParsingStateDeltaExtendLatexContextDb, __accu0__, __kwargtrans__ ({extend_latex_context: __call__ (dict, null, __kwargtrans__ ({macros: [__call__ (MergeMacroSpec, null)]}))}));
/* 000108 */ }) ()})));
/* 000113 */ export var CellMacro =  __class__ ('CellMacro', [LLMMacroSpecError], {
/* 000113 */ 	__module__: __name__,
/* 000114 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000114 */ 		if (typeof macroname == 'undefined' || (macroname != null && macroname.hasOwnProperty ("__kwargtrans__"))) {;
/* 000114 */ 			var macroname = 'cell';
/* 000114 */ 		};
/* 000114 */ 		if (arguments.length) {
/* 000114 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000114 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000114 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000114 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000114 */ 					switch (__attrib0__) {
/* 000114 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000114 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000114 */ 					}
/* 000114 */ 				}
/* 000114 */ 			}
/* 000114 */ 		}
/* 000114 */ 		else {
/* 000114 */ 		}
/* 000115 */ 		__call__ (__call__ (__super__, null, CellMacro, '__init__'), null, self, __kwargtrans__ ({macroname: macroname, arguments_spec_list: [__getitem__ (_macro_args, 'styles'), __getitem__ (_macro_args, 'placement'), __getitem__ (_macro_args, 'cellcontents')]}));
/* 000115 */ 	});}
/* 000115 */ });
/* 000124 */ __setitem__ (_macro_args, 'celldata_contents', __call__ (LatexArgumentSpec, null, '{', __kwargtrans__ ({argname: 'celldata_contents', parsing_state_delta: (function () {
/* 000124 */ 	var __accu0__ = macrospec;
/* 000127 */ 	return __call__ (__accu0__.ParsingStateDeltaExtendLatexContextDb, __accu0__, __kwargtrans__ ({extend_latex_context: __call__ (dict, null, __kwargtrans__ ({macros: [__call__ (CellMacro, null), __call__ (LatexTabularRowSeparatorSpec, null)], specials: [__call__ (LatexTabularColumnSeparatorSpec, null)]}))}));
/* 000127 */ }) ()})));
/* 000132 */ export var CelldataMacroSpec =  __class__ ('CelldataMacroSpec', [macrospec.MacroSpec], {
/* 000132 */ 	__module__: __name__,
/* 000133 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000133 */ 		if (typeof macroname == 'undefined' || (macroname != null && macroname.hasOwnProperty ("__kwargtrans__"))) {;
/* 000133 */ 			var macroname = 'celldata';
/* 000133 */ 		};
/* 000133 */ 		if (arguments.length) {
/* 000133 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000133 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000133 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000133 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000133 */ 					switch (__attrib0__) {
/* 000133 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000133 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000133 */ 					}
/* 000133 */ 				}
/* 000133 */ 			}
/* 000133 */ 		}
/* 000133 */ 		else {
/* 000133 */ 		}
/* 000134 */ 		__call__ (__call__ (__super__, null, CelldataMacroSpec, '__init__'), null, self, macroname, __kwargtrans__ ({arguments_spec_list: [__getitem__ (_macro_args, 'styles_mapping'), __getitem__ (_macro_args, 'placement_mapping'), __getitem__ (_macro_args, 'celldata_contents')]}));
/* 000134 */ 	});}
/* 000134 */ });
/* 000153 */ export var CellIndexRangeModel =  __class__ ('CellIndexRangeModel', [object], {
/* 000153 */ 	__module__: __name__,
/* 000154 */ 	get __init__ () {return __get__ (this, function (self, start, end) {
/* 000154 */ 		if (arguments.length) {
/* 000154 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000154 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000154 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000154 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000154 */ 					switch (__attrib0__) {
/* 000154 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000154 */ 						case 'start': var start = __allkwargs0__ [__attrib0__]; break;
/* 000154 */ 						case 'end': var end = __allkwargs0__ [__attrib0__]; break;
/* 000154 */ 					}
/* 000154 */ 				}
/* 000154 */ 			}
/* 000154 */ 		}
/* 000154 */ 		else {
/* 000154 */ 		}
/* 000155 */ 		__call__ (__call__ (__super__, null, CellIndexRangeModel, '__init__'), null, self);
/* 000158 */ 		self.start = start;
/* 000159 */ 		self.end = end;
/* 000159 */ 	});},
/* 000161 */ 	_fields: tuple (['start', 'end']),
/* 000163 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000163 */ 		if (arguments.length) {
/* 000163 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000163 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000163 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000163 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000163 */ 					switch (__attrib0__) {
/* 000163 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000163 */ 					}
/* 000163 */ 				}
/* 000163 */ 			}
/* 000163 */ 		}
/* 000163 */ 		else {
/* 000163 */ 		}
/* 000164 */ 		if (__t__ (__eq__ (self.end, __add__ (self.start, 1)))) {
/* 000165 */ 			return '{}'.format (__add__ (self.start, 1));
/* 000165 */ 		}
/* 000166 */ 		return '[{}-{}]'.format (__add__ (self.start, 1), self.end);
/* 000166 */ 	});}
/* 000166 */ });
/* 000169 */ export var CellPlacementModel =  __class__ ('CellPlacementModel', [object], {
/* 000169 */ 	__module__: __name__,
/* 000170 */ 	get __init__ () {return __get__ (this, function (self, row_range, col_range) {
/* 000170 */ 		if (arguments.length) {
/* 000170 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000170 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000170 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000170 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000170 */ 					switch (__attrib0__) {
/* 000170 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000170 */ 						case 'row_range': var row_range = __allkwargs0__ [__attrib0__]; break;
/* 000170 */ 						case 'col_range': var col_range = __allkwargs0__ [__attrib0__]; break;
/* 000170 */ 					}
/* 000170 */ 				}
/* 000170 */ 			}
/* 000170 */ 		}
/* 000170 */ 		else {
/* 000170 */ 		}
/* 000171 */ 		__call__ (__call__ (__super__, null, CellPlacementModel, '__init__'), null, self);
/* 000172 */ 		self.row_range = row_range;
/* 000173 */ 		self.col_range = col_range;
/* 000173 */ 	});},
/* 000175 */ 	_fields: tuple (['row_range', 'col_range']),
/* 000177 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000177 */ 		if (arguments.length) {
/* 000177 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000177 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000177 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000177 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000177 */ 					switch (__attrib0__) {
/* 000177 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000177 */ 					}
/* 000177 */ 				}
/* 000177 */ 			}
/* 000177 */ 		}
/* 000177 */ 		else {
/* 000177 */ 		}
/* 000178 */ 		return '{},{}'.format (__call__ (repr, null, self.row_range), __call__ (repr, null, self.col_range));
/* 000178 */ 	});}
/* 000178 */ });
/* 000181 */ export var CellModel =  __class__ ('CellModel', [object], {
/* 000181 */ 	__module__: __name__,
/* 000182 */ 	get __init__ () {return __get__ (this, function (self, placement, styles, content_nodes) {
/* 000182 */ 		if (arguments.length) {
/* 000182 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000182 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000182 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000182 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000182 */ 					switch (__attrib0__) {
/* 000182 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000182 */ 						case 'placement': var placement = __allkwargs0__ [__attrib0__]; break;
/* 000182 */ 						case 'styles': var styles = __allkwargs0__ [__attrib0__]; break;
/* 000182 */ 						case 'content_nodes': var content_nodes = __allkwargs0__ [__attrib0__]; break;
/* 000182 */ 					}
/* 000182 */ 				}
/* 000182 */ 			}
/* 000182 */ 		}
/* 000182 */ 		else {
/* 000182 */ 		}
/* 000183 */ 		__call__ (__call__ (__super__, null, CellModel, '__init__'), null, self);
/* 000184 */ 		self.placement = placement;
/* 000185 */ 		self.styles = styles;
/* 000186 */ 		self.content_nodes = content_nodes;
/* 000186 */ 	});},
/* 000188 */ 	_fields: tuple (['placement', 'styles', 'content_nodes']),
/* 000190 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000190 */ 		if (arguments.length) {
/* 000190 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000190 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000190 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000190 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000190 */ 					switch (__attrib0__) {
/* 000190 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000190 */ 					}
/* 000190 */ 				}
/* 000190 */ 			}
/* 000190 */ 		}
/* 000190 */ 		else {
/* 000190 */ 		}
/* 000192 */ 		return '<Cell @{} <{}> (‘{}’)>'.format (__call__ (repr, null, self.placement), (function () {
/* 000192 */ 			var __accu0__ = ' ';
/* 000192 */ 			return __call__ (__accu0__.join, __accu0__, self.styles);
/* 000193 */ 		}) (), __call__ (_splfysidews, null, (function () {
/* 000193 */ 			var __accu0__ = self.content_nodes;
/* 000193 */ 			return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000193 */ 		}) ()));
/* 000193 */ 	});}
/* 000193 */ });
/* 000196 */ export var _splfysidews = function (s) {
/* 000196 */ 	if (arguments.length) {
/* 000196 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000196 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000196 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000196 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000196 */ 				switch (__attrib0__) {
/* 000196 */ 					case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000196 */ 				}
/* 000196 */ 			}
/* 000196 */ 		}
/* 000196 */ 	}
/* 000196 */ 	else {
/* 000196 */ 	}
/* 000198 */ 	return (function () {
/* 000198 */ 		var __accu0__ = re;
/* 000198 */ 		return __call__ (__accu0__.sub, __accu0__, '(^\\s+|\\s+$)', ' ', s);
/* 000198 */ 	}) ();
/* 000198 */ };
/* 000203 */ export var CellPlacementsMappingModel =  __class__ ('CellPlacementsMappingModel', [object], {
/* 000203 */ 	__module__: __name__,
/* 000204 */ 	get __init__ () {return __get__ (this, function (self, row_placements, col_placements) {
/* 000204 */ 		if (arguments.length) {
/* 000204 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000204 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000204 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000204 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000204 */ 					switch (__attrib0__) {
/* 000204 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000204 */ 						case 'row_placements': var row_placements = __allkwargs0__ [__attrib0__]; break;
/* 000204 */ 						case 'col_placements': var col_placements = __allkwargs0__ [__attrib0__]; break;
/* 000204 */ 					}
/* 000204 */ 				}
/* 000204 */ 			}
/* 000204 */ 		}
/* 000204 */ 		else {
/* 000204 */ 		}
/* 000205 */ 		__call__ (__call__ (__super__, null, CellPlacementsMappingModel, '__init__'), null, self);
/* 000206 */ 		self.row_placements = row_placements;
/* 000207 */ 		self.col_placements = col_placements;
/* 000207 */ 	});},
/* 000209 */ 	_fields: tuple (['row_placements', 'col_placements']),
/* 000211 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000211 */ 		if (arguments.length) {
/* 000211 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000211 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000211 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000211 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000211 */ 					switch (__attrib0__) {
/* 000211 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000211 */ 					}
/* 000211 */ 				}
/* 000211 */ 			}
/* 000211 */ 		}
/* 000211 */ 		else {
/* 000211 */ 		}
/* 000214 */ 		return __add__ (__add__ ('{}('.format (self.__class__.__name__), (function () {
/* 000214 */ 			var __accu0__ = '';
/* 000214 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000214 */ 				var __accu1__ = [];
/* 000214 */ 				var __iterable0__ = self._fields;
/* 000214 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000214 */ 					var k = __getitem__ (__iterable0__, __index0__);
/* 000214 */ 					(function () {
/* 000214 */ 						var __accu2__ = __accu1__;
/* 000214 */ 						return __call__ (__accu2__.append, __accu2__, '\n    {}={}'.format (k, __call__ (repr, null, __call__ (getattr, null, self, k))));
/* 000214 */ 					}) ();
/* 000214 */ 				}
/* 000214 */ 				return py_iter (__accu1__);
/* 000214 */ 			}) ());
/* 000214 */ 		}) ()), '\n)'.format ());
/* 000214 */ 	});},
/* 000218 */ 	get _get_index_range () {return __get__ (this, function (self, placements, j, current) {
/* 000218 */ 		if (arguments.length) {
/* 000218 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000218 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000218 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000218 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000218 */ 					switch (__attrib0__) {
/* 000218 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000218 */ 						case 'placements': var placements = __allkwargs0__ [__attrib0__]; break;
/* 000218 */ 						case 'j': var j = __allkwargs0__ [__attrib0__]; break;
/* 000218 */ 						case 'current': var current = __allkwargs0__ [__attrib0__]; break;
/* 000218 */ 					}
/* 000218 */ 				}
/* 000218 */ 			}
/* 000218 */ 		}
/* 000218 */ 		else {
/* 000218 */ 		}
/* 000220 */ 		if (__t__ (__eq__ (__call__ (len, null, placements), 0))) {
/* 000221 */ 			return __call__ (CellIndexRangeModel, null, current, __add__ (current, 1));
/* 000221 */ 		}
/* 000225 */ 		if (__t__ (__lt__ (j, __sub__ (__call__ (len, null, placements), 1)))) {
/* 000226 */ 			return __getitem__ (placements, j);
/* 000226 */ 		}
/* 000228 */ 		var placement = __getitem__ (placements, __neg__ (1));
/* 000229 */ 		if (__t__ (placement.end === null)) {
/* 000230 */ 			var idx = __add__ (placement.start, __add__ (__sub__ (j, __call__ (len, null, placements)), 1));
/* 000231 */ 			return __call__ (CellIndexRangeModel, null, idx, __add__ (idx, 1));
/* 000231 */ 		}
/* 000232 */ 		return placement;
/* 000232 */ 	});},
/* 000234 */ 	get get_row_index_range () {return __get__ (this, function (self, row_j, current_row) {
/* 000234 */ 		if (typeof current_row == 'undefined' || (current_row != null && current_row.hasOwnProperty ("__kwargtrans__"))) {;
/* 000234 */ 			var current_row = null;
/* 000234 */ 		};
/* 000234 */ 		if (arguments.length) {
/* 000234 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000234 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000234 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000234 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000234 */ 					switch (__attrib0__) {
/* 000234 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000234 */ 						case 'row_j': var row_j = __allkwargs0__ [__attrib0__]; break;
/* 000234 */ 						case 'current_row': var current_row = __allkwargs0__ [__attrib0__]; break;
/* 000234 */ 					}
/* 000234 */ 				}
/* 000234 */ 			}
/* 000234 */ 		}
/* 000234 */ 		else {
/* 000234 */ 		}
/* 000235 */ 		return (function () {
/* 000235 */ 			var __accu0__ = self;
/* 000235 */ 			return __call__ (__accu0__._get_index_range, __accu0__, self.row_placements, row_j, current_row);
/* 000235 */ 		}) ();
/* 000235 */ 	});},
/* 000237 */ 	get get_col_index_range () {return __get__ (this, function (self, col_j, current_col) {
/* 000237 */ 		if (typeof current_col == 'undefined' || (current_col != null && current_col.hasOwnProperty ("__kwargtrans__"))) {;
/* 000237 */ 			var current_col = null;
/* 000237 */ 		};
/* 000237 */ 		if (arguments.length) {
/* 000237 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000237 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000237 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000237 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000237 */ 					switch (__attrib0__) {
/* 000237 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000237 */ 						case 'col_j': var col_j = __allkwargs0__ [__attrib0__]; break;
/* 000237 */ 						case 'current_col': var current_col = __allkwargs0__ [__attrib0__]; break;
/* 000237 */ 					}
/* 000237 */ 				}
/* 000237 */ 			}
/* 000237 */ 		}
/* 000237 */ 		else {
/* 000237 */ 		}
/* 000238 */ 		return (function () {
/* 000238 */ 			var __accu0__ = self;
/* 000238 */ 			return __call__ (__accu0__._get_index_range, __accu0__, self.col_placements, col_j, current_col);
/* 000238 */ 		}) ();
/* 000238 */ 	});},
/* 000240 */ 	get start_row_col () {return __get__ (this, function (self, current_row, current_col) {
/* 000240 */ 		if (typeof current_row == 'undefined' || (current_row != null && current_row.hasOwnProperty ("__kwargtrans__"))) {;
/* 000240 */ 			var current_row = null;
/* 000240 */ 		};
/* 000240 */ 		if (typeof current_col == 'undefined' || (current_col != null && current_col.hasOwnProperty ("__kwargtrans__"))) {;
/* 000240 */ 			var current_col = null;
/* 000240 */ 		};
/* 000240 */ 		if (arguments.length) {
/* 000240 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000240 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000240 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000240 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000240 */ 					switch (__attrib0__) {
/* 000240 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000240 */ 						case 'current_row': var current_row = __allkwargs0__ [__attrib0__]; break;
/* 000240 */ 						case 'current_col': var current_col = __allkwargs0__ [__attrib0__]; break;
/* 000240 */ 					}
/* 000240 */ 				}
/* 000240 */ 			}
/* 000240 */ 		}
/* 000240 */ 		else {
/* 000240 */ 		}
/* 000241 */ 		return tuple ([(function () {
/* 000241 */ 			var __accu0__ = self;
/* 000241 */ 			return __call__ (__accu0__.get_row_index_range, __accu0__, 0, current_row);
/* 000242 */ 		}) ().start, (function () {
/* 000242 */ 			var __accu0__ = self;
/* 000242 */ 			return __call__ (__accu0__.get_col_index_range, __accu0__, 0, current_col);
/* 000242 */ 		}) ().start]);
/* 000242 */ 	});}
/* 000242 */ });
/* 000248 */ export var CellsModel =  __class__ ('CellsModel', [object], {
/* 000248 */ 	__module__: __name__,
/* 000249 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000249 */ 		var kwargs = dict ();
/* 000249 */ 		if (arguments.length) {
/* 000249 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000249 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000249 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000249 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000249 */ 					switch (__attrib0__) {
/* 000249 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000249 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000249 */ 					}
/* 000249 */ 				}
/* 000249 */ 				delete kwargs.__kwargtrans__;
/* 000249 */ 			}
/* 000249 */ 		}
/* 000249 */ 		else {
/* 000249 */ 		}
/* 000250 */ 		__call__ (__call__ (__super__, null, CellsModel, '__init__'), null, self);
/* 000254 */ 		self.current_row = 0;
/* 000255 */ 		self.current_col = 0;
/* 000257 */ 		self.row_names = dict ({});
/* 000258 */ 		self.column_names = dict ({});
/* 000261 */ 		if (__t__ (kwargs)) {
/* 000263 */ 			self.cells_size = (function () {
/* 000263 */ 				var __accu0__ = kwargs;
/* 000263 */ 				return __call__ (__accu0__.py_pop, __accu0__, 'cells_size');
/* 000263 */ 			}) ();
/* 000264 */ 			self.cells_data = (function () {
/* 000264 */ 				var __accu0__ = kwargs;
/* 000264 */ 				return __call__ (__accu0__.py_pop, __accu0__, 'cells_data');
/* 000264 */ 			}) ();
/* 000265 */ 			(function () {
/* 000265 */ 				var __accu0__ = self;
/* 000265 */ 				return __call__ (__accu0__.finalize, __accu0__);
/* 000265 */ 			}) ();
/* 000266 */ 			return ;
/* 000266 */ 		}
/* 000268 */ 		self.cells_size = [null, null];
/* 000269 */ 		self.cells_data = [];
/* 000271 */ 		self.grid_data = null;
/* 000271 */ 	});},
/* 000274 */ 	_fields: tuple (['cells_size', 'cells_data']),
/* 000276 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000276 */ 		if (arguments.length) {
/* 000276 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000276 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000276 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000276 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000276 */ 					switch (__attrib0__) {
/* 000276 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000276 */ 					}
/* 000276 */ 				}
/* 000276 */ 			}
/* 000276 */ 		}
/* 000276 */ 		else {
/* 000276 */ 		}
/* 000277 */ 		var pp_data = (function () {
/* 000277 */ 			var __accu0__ = '';
/* 000277 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000277 */ 				var __accu1__ = [];
/* 000277 */ 				var __iterable0__ = self.cells_data;
/* 000277 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000277 */ 					var d = __getitem__ (__iterable0__, __index0__);
/* 000277 */ 					(function () {
/* 000277 */ 						var __accu2__ = __accu1__;
/* 000277 */ 						return __call__ (__accu2__.append, __accu2__, __add__ ('\n        ', __call__ (repr, null, d)));
/* 000277 */ 					}) ();
/* 000277 */ 				}
/* 000277 */ 				return __accu1__;
/* 000277 */ 			}) ());
/* 000277 */ 		}) ();
/* 000279 */ 		return '{}(\n    cells_size={},\n    cells_data=[{}\n    ])'.format (self.__class__.__name__, __call__ (repr, null, self.cells_size), pp_data);
/* 000279 */ 	});},
/* 000285 */ 	get add_cell_node () {return __get__ (this, function (self, cell_node, default_placement, default_styles) {
/* 000285 */ 		if (typeof default_placement == 'undefined' || (default_placement != null && default_placement.hasOwnProperty ("__kwargtrans__"))) {;
/* 000285 */ 			var default_placement = null;
/* 000285 */ 		};
/* 000285 */ 		if (typeof default_styles == 'undefined' || (default_styles != null && default_styles.hasOwnProperty ("__kwargtrans__"))) {;
/* 000285 */ 			var default_styles = null;
/* 000285 */ 		};
/* 000285 */ 		if (arguments.length) {
/* 000285 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000285 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000285 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000285 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000285 */ 					switch (__attrib0__) {
/* 000285 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000285 */ 						case 'cell_node': var cell_node = __allkwargs0__ [__attrib0__]; break;
/* 000285 */ 						case 'default_placement': var default_placement = __allkwargs0__ [__attrib0__]; break;
/* 000285 */ 						case 'default_styles': var default_styles = __allkwargs0__ [__attrib0__]; break;
/* 000285 */ 					}
/* 000285 */ 				}
/* 000285 */ 			}
/* 000285 */ 		}
/* 000285 */ 		else {
/* 000285 */ 		}
/* 000287 */ 		var cell_node_args = (function () {
/* 000287 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: cell_node}));
/* 000287 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['styles', 'placement', 'cellcontents']));
/* 000287 */ 		}) ();
/* 000291 */ 		if (__t__ (default_styles === null)) {
/* 000292 */ 			var default_styles = [];
/* 000292 */ 		}
/* 000294 */ 		if (__t__ ((function () {
/* 000294 */ 			var __accu0__ = __getitem__ (cell_node_args, 'styles');
/* 000294 */ 			return __call__ (__accu0__.was_provided, __accu0__);
/* 000294 */ 		}) ())) {
/* 000296 */ 			var styles = __add__ ((function () {
/* 000296 */ 				var __accu0__ = (function () {
/* 000296 */ 					var __accu1__ = __getitem__ (cell_node_args, 'styles');
/* 000296 */ 					return __call__ (__accu1__.get_content_as_chars, __accu1__);
/* 000296 */ 				}) ();
/* 000296 */ 				return __call__ (__accu0__.py_split, __accu0__, ' ');
/* 000296 */ 			}) (), default_styles);
/* 000296 */ 		}
/* 000298 */ 		else {
/* 000300 */ 			var styles = default_styles;
/* 000300 */ 		}
/* 000302 */ 		if (__t__ ((function () {
/* 000302 */ 			var __accu0__ = __getitem__ (cell_node_args, 'placement');
/* 000302 */ 			return __call__ (__accu0__.was_provided, __accu0__);
/* 000302 */ 		}) ())) {
/* 000303 */ 			var placement_spec = (function () {
/* 000303 */ 				var __accu0__ = __getitem__ (cell_node_args, 'placement');
/* 000303 */ 				return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000303 */ 			}) ();
/* 000303 */ 		}
/* 000304 */ 		else {
/* 000305 */ 			var placement_spec = default_placement;
/* 000305 */ 		}
/* 000307 */ 		var cell_contents = (function () {
/* 000307 */ 			var __accu0__ = __getitem__ (cell_node_args, 'cellcontents');
/* 000307 */ 			return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000307 */ 		}) ();
/* 000309 */ 		return (function () {
/* 000309 */ 			var __accu0__ = self;
/* 000309 */ 			return __call__ (__accu0__.add_cell, __accu0__, placement_spec, styles, cell_contents);
/* 000309 */ 		}) ();
/* 000309 */ 	});},
/* 000311 */ 	get add_cell () {return __get__ (this, function (self, placement_spec, styles, content_nodes) {
/* 000311 */ 		if (arguments.length) {
/* 000311 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000311 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000311 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000311 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000311 */ 					switch (__attrib0__) {
/* 000311 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000311 */ 						case 'placement_spec': var placement_spec = __allkwargs0__ [__attrib0__]; break;
/* 000311 */ 						case 'styles': var styles = __allkwargs0__ [__attrib0__]; break;
/* 000311 */ 						case 'content_nodes': var content_nodes = __allkwargs0__ [__attrib0__]; break;
/* 000311 */ 					}
/* 000311 */ 				}
/* 000311 */ 			}
/* 000311 */ 		}
/* 000311 */ 		else {
/* 000311 */ 		}
/* 000313 */ 		var placement = (function () {
/* 000313 */ 			var __accu0__ = self;
/* 000313 */ 			return __call__ (__accu0__.parse_placement_spec, __accu0__, placement_spec);
/* 000313 */ 		}) ();
/* 000315 */ 		var cell = __call__ (CellModel, null, __kwargtrans__ ({placement: placement, styles: styles, content_nodes: content_nodes}));
/* 000320 */ 		(function () {
/* 000320 */ 			var __accu0__ = self.cells_data;
/* 000320 */ 			return __call__ (__accu0__.append, __accu0__, cell);
/* 000320 */ 		}) ();
/* 000323 */ 		if (__t__ (__t__ (__getitem__ (self.cells_size, 0) === null) || __ge__ (cell.placement.row_range.end, __getitem__ (self.cells_size, 0)))) {
/* 000324 */ 			__setitem__ (self.cells_size, 0, cell.placement.row_range.end);
/* 000324 */ 		}
/* 000325 */ 		if (__t__ (__t__ (__getitem__ (self.cells_size, 1) === null) || __ge__ (cell.placement.col_range.end, __getitem__ (self.cells_size, 1)))) {
/* 000326 */ 			__setitem__ (self.cells_size, 1, cell.placement.col_range.end);
/* 000326 */ 		}
/* 000328 */ 		(function () {
/* 000328 */ 			var __accu0__ = self;
/* 000328 */ 			return __call__ (__accu0__.move_to_col, __accu0__, cell.placement.col_range.end);
/* 000328 */ 		}) ();
/* 000330 */ 		return cell;
/* 000330 */ 	});},
/* 000332 */ 	get move_to_col () {return __get__ (this, function (self, col) {
/* 000332 */ 		if (arguments.length) {
/* 000332 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000332 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000332 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000332 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000332 */ 					switch (__attrib0__) {
/* 000332 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000332 */ 						case 'col': var col = __allkwargs0__ [__attrib0__]; break;
/* 000332 */ 					}
/* 000332 */ 				}
/* 000332 */ 			}
/* 000332 */ 		}
/* 000332 */ 		else {
/* 000332 */ 		}
/* 000333 */ 		self.current_col = col;
/* 000333 */ 	});},
/* 000335 */ 	get move_next_row () {return __get__ (this, function (self) {
/* 000335 */ 		if (arguments.length) {
/* 000335 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000335 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000335 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000335 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000335 */ 					switch (__attrib0__) {
/* 000335 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000335 */ 					}
/* 000335 */ 				}
/* 000335 */ 			}
/* 000335 */ 		}
/* 000335 */ 		else {
/* 000335 */ 		}
/* 000336 */ 		self.current_row = __call__ (__iadd__, null, self.current_row, 1);
/* 000337 */ 		self.current_col = 0;
/* 000337 */ 	});},
/* 000340 */ 	get finalize () {return __get__ (this, function (self) {
/* 000340 */ 		if (arguments.length) {
/* 000340 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000340 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000340 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000340 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000340 */ 					switch (__attrib0__) {
/* 000340 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000340 */ 					}
/* 000340 */ 				}
/* 000340 */ 			}
/* 000340 */ 		}
/* 000340 */ 		else {
/* 000340 */ 		}
/* 000342 */ 		self.grid_data = (function () {
/* 000342 */ 			var __accu0__ = [];
/* 000342 */ 			for (var _ = 0; _ < __getitem__ (self.cells_size, 0); _++) {
/* 000344 */ 				(function () {
/* 000344 */ 					var __accu1__ = __accu0__;
/* 000344 */ 					return __call__ (__accu1__.append, __accu1__, (function () {
/* 000344 */ 						var __accu2__ = [];
/* 000343 */ 						for (var _ = 0; _ < __getitem__ (self.cells_size, 1); _++) {
/* 000343 */ 							(function () {
/* 000343 */ 								var __accu3__ = __accu2__;
/* 000343 */ 								return __call__ (__accu3__.append, __accu3__, null);
/* 000343 */ 							}) ();
/* 000343 */ 						}
/* 000343 */ 						return __accu2__;
/* 000343 */ 					}) ());
/* 000343 */ 				}) ();
/* 000343 */ 			}
/* 000343 */ 			return __accu0__;
/* 000343 */ 		}) ();
/* 000346 */ 		var __iterable0__ = self.cells_data;
/* 000346 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000346 */ 			var cell = __getitem__ (__iterable0__, __index0__);
/* 000347 */ 			var is_topleft = true;
/* 000348 */ 			for (var rowidx = cell.placement.row_range.start; rowidx < cell.placement.row_range.end; rowidx++) {
/* 000350 */ 				for (var colidx = cell.placement.col_range.start; colidx < cell.placement.col_range.end; colidx++) {
/* 000352 */ 					if (__t__ (__getitem__ (__getitem__ (self.grid_data, rowidx), colidx) !== null)) {
/* 000353 */ 						var existing_cell = __getitem__ (__getitem__ (__getitem__ (self.grid_data, rowidx), colidx), 'cell');
/* 000355 */ 						var __except0__ = __call__ (ValueError, null, '‘{}’ overlaps with ‘{}’'.format (__call__ (repr, null, cell), __call__ (repr, null, existing_cell)));
/* 000355 */ 						__except0__.__cause__ = null;
/* 000355 */ 						throw __except0__;
/* 000355 */ 					}
/* 000358 */ 					__setitem__ (__getitem__ (self.grid_data, rowidx), colidx, dict ({'cell': cell, 'is_topleft': is_topleft}));
/* 000362 */ 					var is_topleft = false;
/* 000362 */ 				}
/* 000362 */ 			}
/* 000362 */ 		}
/* 000362 */ 	});},
/* 000367 */ 	get add_celldata_node () {return __get__ (this, function (self, celldata_node) {
/* 000367 */ 		if (arguments.length) {
/* 000367 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000367 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000367 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000367 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000367 */ 					switch (__attrib0__) {
/* 000367 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000367 */ 						case 'celldata_node': var celldata_node = __allkwargs0__ [__attrib0__]; break;
/* 000367 */ 					}
/* 000367 */ 				}
/* 000367 */ 			}
/* 000367 */ 		}
/* 000367 */ 		else {
/* 000367 */ 		}
/* 000369 */ 		var celldata_node_args = (function () {
/* 000369 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: celldata_node}));
/* 000369 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['styles_mapping', 'placement_mapping', 'celldata_contents']));
/* 000369 */ 		}) ();
/* 000373 */ 		var styles_mapping = (function () {
/* 000373 */ 			var __accu0__ = [];
/* 000376 */ 			var __iterable0__ = (function () {
/* 000376 */ 				var __accu1__ = (function () {
/* 000376 */ 					var __accu2__ = __getitem__ (celldata_node_args, 'styles_mapping');
/* 000376 */ 					return __call__ (__accu2__.get_content_as_chars, __accu2__);
/* 000376 */ 				}) ();
/* 000376 */ 				return __call__ (__accu1__.py_split, __accu1__, ',');
/* 000376 */ 			}) ();
/* 000376 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000376 */ 				var styles_spec = __getitem__ (__iterable0__, __index0__);
/* 000375 */ 				(function () {
/* 000375 */ 					var __accu1__ = __accu0__;
/* 000374 */ 					return __call__ (__accu1__.append, __accu1__, (function () {
/* 000374 */ 						var __accu2__ = styles_spec;
/* 000374 */ 						return __call__ (__accu2__.py_split, __accu2__);
/* 000374 */ 					}) ());
/* 000374 */ 				}) ();
/* 000374 */ 			}
/* 000374 */ 			return __accu0__;
/* 000374 */ 		}) ();
/* 000379 */ 		var placement_mapping_spec = (function () {
/* 000379 */ 			var __accu0__ = __getitem__ (celldata_node_args, 'placement_mapping');
/* 000379 */ 			return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000379 */ 		}) ();
/* 000381 */ 		var celldata_contents = (function () {
/* 000381 */ 			var __accu0__ = __getitem__ (celldata_node_args, 'celldata_contents');
/* 000381 */ 			return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000381 */ 		}) ();
/* 000385 */ 		var data_rows = (function () {
/* 000385 */ 			var __accu0__ = celldata_contents;
/* 000385 */ 			return __call__ (__accu0__.split_at_node, __accu0__, (function __lambda__ (node) {
/* 000385 */ 				if (arguments.length) {
/* 000385 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000385 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000385 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000385 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000385 */ 							switch (__attrib0__) {
/* 000385 */ 								case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000385 */ 							}
/* 000385 */ 						}
/* 000385 */ 					}
/* 000385 */ 				}
/* 000385 */ 				else {
/* 000385 */ 				}
/* 000387 */ 				return __t__ ((function () {
/* 000387 */ 					var __accu1__ = node;
/* 000387 */ 					return __call__ (__accu1__.isNodeType, __accu1__, latexnodes_nodes.LatexMacroNode);
/* 000387 */ 				}) ()) && __eq__ (node.macroname, '\\');
/* 000387 */ 			}));
/* 000387 */ 		}) ();
/* 000392 */ 		var split_columns_predicate_fn = function (node) {
/* 000392 */ 			if (arguments.length) {
/* 000392 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000392 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000392 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000392 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000392 */ 						switch (__attrib0__) {
/* 000392 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000392 */ 						}
/* 000392 */ 					}
/* 000392 */ 				}
/* 000392 */ 			}
/* 000392 */ 			else {
/* 000392 */ 			}
/* 000394 */ 			if (__t__ (__t__ ((function () {
/* 000394 */ 				var __accu0__ = node;
/* 000394 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexSpecialsNode);
/* 000394 */ 			}) ()) && __eq__ (node.specials_chars, '&'))) {
/* 000396 */ 				return true;
/* 000396 */ 			}
/* 000397 */ 			return false;
/* 000397 */ 		};
/* 000399 */ 		var data_content_nodes = (function () {
/* 000399 */ 			var __accu0__ = [];
/* 000399 */ 			var __iterable0__ = data_rows;
/* 000399 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000401 */ 				var data_row = __getitem__ (__iterable0__, __index0__);
/* 000401 */ 				(function () {
/* 000401 */ 					var __accu1__ = __accu0__;
/* 000400 */ 					return __call__ (__accu1__.append, __accu1__, (function () {
/* 000400 */ 						var __accu2__ = data_row;
/* 000400 */ 						return __call__ (__accu2__.split_at_node, __accu2__, split_columns_predicate_fn);
/* 000400 */ 					}) ());
/* 000400 */ 				}) ();
/* 000400 */ 			}
/* 000400 */ 			return __accu0__;
/* 000400 */ 		}) ();
/* 000404 */ 		(function () {
/* 000404 */ 			var __accu0__ = logger;
/* 000404 */ 			return __call__ (__accu0__.debug, __accu0__, 'data_content_nodes = %r', data_content_nodes);
/* 000404 */ 		}) ();
/* 000406 */ 		(function () {
/* 000406 */ 			var __accu0__ = self;
/* 000406 */ 			return __call__ (__accu0__.add_celldata, __accu0__, placement_mapping_spec, styles_mapping, data_content_nodes);
/* 000406 */ 		}) ();
/* 000406 */ 	});},
/* 000409 */ 	get add_celldata () {return __get__ (this, function (self, placement_mapping_spec, styles_mapping, data_content_nodes) {
/* 000409 */ 		if (arguments.length) {
/* 000409 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000409 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000409 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000409 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000409 */ 					switch (__attrib0__) {
/* 000409 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000409 */ 						case 'placement_mapping_spec': var placement_mapping_spec = __allkwargs0__ [__attrib0__]; break;
/* 000409 */ 						case 'styles_mapping': var styles_mapping = __allkwargs0__ [__attrib0__]; break;
/* 000409 */ 						case 'data_content_nodes': var data_content_nodes = __allkwargs0__ [__attrib0__]; break;
/* 000409 */ 					}
/* 000409 */ 				}
/* 000409 */ 			}
/* 000409 */ 		}
/* 000409 */ 		else {
/* 000409 */ 		}
/* 000411 */ 		var placement_mapping = (function () {
/* 000411 */ 			var __accu0__ = self;
/* 000411 */ 			return __call__ (__accu0__.parse_placement_mapping_spec, __accu0__, placement_mapping_spec);
/* 000411 */ 		}) ();
/* 000415 */ 		(function () {
/* 000415 */ 			var __accu0__ = logger;
/* 000415 */ 			return __call__ (__accu0__.debug, __accu0__, 'add_celldata, placement_mapping = %r', placement_mapping);
/* 000415 */ 		}) ();
/* 000417 */ 		var __left0__ = (function () {
/* 000417 */ 			var __accu0__ = placement_mapping;
/* 000417 */ 			return __call__ (__accu0__.start_row_col, __accu0__, __kwargtrans__ ({current_row: self.current_row, current_col: self.current_col}));
/* 000417 */ 		}) ();
/* 000417 */ 		self.current_row = __left0__ [0];
/* 000417 */ 		self.current_col = __left0__ [1];
/* 000421 */ 		var data_row_j = 0;
/* 000422 */ 		var __iterable0__ = data_content_nodes;
/* 000422 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000422 */ 			var data_row_data = __getitem__ (__iterable0__, __index0__);
/* 000424 */ 			var data_col_j = 0;
/* 000425 */ 			var __iterable1__ = data_row_data;
/* 000425 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000425 */ 				var cell_content = __getitem__ (__iterable1__, __index1__);
/* 000427 */ 				var row_range = (function () {
/* 000427 */ 					var __accu0__ = placement_mapping;
/* 000427 */ 					return __call__ (__accu0__.get_row_index_range, __accu0__, data_row_j, __kwargtrans__ ({current_row: self.current_row}));
/* 000427 */ 				}) ();
/* 000430 */ 				var col_range = (function () {
/* 000430 */ 					var __accu0__ = placement_mapping;
/* 000430 */ 					return __call__ (__accu0__.get_col_index_range, __accu0__, data_col_j, __kwargtrans__ ({current_col: self.current_col}));
/* 000430 */ 				}) ();
/* 000433 */ 				var placement = __call__ (CellPlacementModel, null, __kwargtrans__ ({row_range: row_range, col_range: col_range}));
/* 000438 */ 				if (__t__ (__lt__ (data_col_j, __call__ (len, null, styles_mapping)))) {
/* 000439 */ 					var styles = __getitem__ (styles_mapping, data_col_j);
/* 000439 */ 				}
/* 000440 */ 				else {
/* 000441 */ 					var styles = __getitem__ (styles_mapping, __neg__ (1));
/* 000441 */ 				}
/* 000444 */ 				var cell_content_nl = (function () {
/* 000444 */ 					var __accu0__ = cell_content.latex_walker;
/* 000444 */ 					return __call__ (__accu0__.filter_whitespace_comments_nodes, __accu0__, cell_content);
/* 000444 */ 				}) ();
/* 000448 */ 				(function () {
/* 000448 */ 					var __accu0__ = logger;
/* 000449 */ 					return __call__ (__accu0__.debug, __accu0__, 'placing cell ‘{}’ at default placement {}; data_row_j={}, data_col_j={}'.format (__call__ (_splfysidews, null, (function () {
/* 000449 */ 						var __accu1__ = cell_content_nl;
/* 000449 */ 						return __call__ (__accu1__.latex_verbatim, __accu1__);
/* 000449 */ 					}) ()), placement, data_row_j, data_col_j));
/* 000449 */ 				}) ();
/* 000454 */ 				if (__t__ (__t__ (__eq__ (__call__ (len, null, cell_content_nl), 1)) && __t__ ((function () {
/* 000454 */ 					var __accu0__ = __getitem__ (cell_content_nl, 0);
/* 000454 */ 					return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000454 */ 				}) ()) && __eq__ (__getitem__ (cell_content_nl, 0).macroname, 'cell'))) {
/* 000457 */ 					var cell = (function () {
/* 000457 */ 						var __accu0__ = self;
/* 000457 */ 						return __call__ (__accu0__.add_cell_node, __accu0__, __getitem__ (cell_content_nl, 0), __kwargtrans__ ({default_placement: placement, default_styles: styles}));
/* 000457 */ 					}) ();
/* 000460 */ 					var data_col_j = __call__ (__iadd__, null, data_col_j, __sub__ (cell.placement.col_range.end, cell.placement.col_range.start));
/* 000460 */ 				}
/* 000463 */ 				else if (__t__ (__eq__ (__call__ (len, null, cell_content_nl), 0))) {
/* 000466 */ 					self.current_col = col_range.end;
/* 000467 */ 					var data_col_j = __call__ (__iadd__, null, data_col_j, 1);
/* 000467 */ 				}
/* 000468 */ 				else {
/* 000470 */ 					(function () {
/* 000470 */ 						var __accu0__ = self;
/* 000470 */ 						return __call__ (__accu0__.add_cell, __accu0__, placement, styles, cell_content);
/* 000470 */ 					}) ();
/* 000471 */ 					var data_col_j = __call__ (__iadd__, null, data_col_j, 1);
/* 000471 */ 				}
/* 000471 */ 			}
/* 000473 */ 			(function () {
/* 000473 */ 				var __accu0__ = self;
/* 000473 */ 				return __call__ (__accu0__.move_next_row, __accu0__);
/* 000473 */ 			}) ();
/* 000474 */ 			var data_row_j = __call__ (__iadd__, null, data_row_j, 1);
/* 000475 */ 			var data_col_j = 0;
/* 000475 */ 		}
/* 000475 */ 	});},
/* 000480 */ 	_rx_int: (function () {
/* 000480 */ 		var __accu0__ = re;
/* 000480 */ 		return __call__ (__accu0__.compile, __accu0__, '^\\d+$');
/* 000480 */ 	}) (),
/* 000482 */ 	get parse_cell_index_spec () {return __get__ (this, function (self, index_spec, is_row, is_col, py_default) {
/* 000482 */ 		if (typeof is_row == 'undefined' || (is_row != null && is_row.hasOwnProperty ("__kwargtrans__"))) {;
/* 000482 */ 			var is_row = false;
/* 000482 */ 		};
/* 000482 */ 		if (typeof is_col == 'undefined' || (is_col != null && is_col.hasOwnProperty ("__kwargtrans__"))) {;
/* 000482 */ 			var is_col = false;
/* 000482 */ 		};
/* 000482 */ 		if (typeof py_default == 'undefined' || (py_default != null && py_default.hasOwnProperty ("__kwargtrans__"))) {;
/* 000482 */ 			var py_default = _NotSpecified;
/* 000482 */ 		};
/* 000482 */ 		if (arguments.length) {
/* 000482 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000482 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000482 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000482 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000482 */ 					switch (__attrib0__) {
/* 000482 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000482 */ 						case 'index_spec': var index_spec = __allkwargs0__ [__attrib0__]; break;
/* 000482 */ 						case 'is_row': var is_row = __allkwargs0__ [__attrib0__]; break;
/* 000482 */ 						case 'is_col': var is_col = __allkwargs0__ [__attrib0__]; break;
/* 000482 */ 						case 'py_default': var py_default = __allkwargs0__ [__attrib0__]; break;
/* 000482 */ 					}
/* 000482 */ 				}
/* 000482 */ 			}
/* 000482 */ 		}
/* 000482 */ 		else {
/* 000482 */ 		}
/* 000485 */ 		if (__t__ (__call__ (isinstance, null, index_spec, str))) {
/* 000486 */ 			var index_spec_s = index_spec;
/* 000486 */ 		}
/* 000487 */ 		else {
/* 000489 */ 			var index_spec_s = (function () {
/* 000489 */ 				var __accu0__ = index_spec;
/* 000489 */ 				return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000489 */ 			}) ();
/* 000489 */ 		}
/* 000491 */ 		var index_spec_s = (function () {
/* 000491 */ 			var __accu0__ = index_spec_s;
/* 000491 */ 			return __call__ (__accu0__.strip, __accu0__);
/* 000491 */ 		}) ();
/* 000494 */ 		if (__t__ (__t__ (!__t__ ((index_spec_s))) || __eq__ (index_spec_s, '.'))) {
/* 000495 */ 			if (__t__ (py_default !== _NotSpecified)) {
/* 000496 */ 				return py_default;
/* 000496 */ 			}
/* 000497 */ 			if (__t__ (is_row)) {
/* 000498 */ 				return self.current_row;
/* 000498 */ 			}
/* 000499 */ 			if (__t__ (is_col)) {
/* 000500 */ 				return self.current_col;
/* 000500 */ 			}
/* 000501 */ 			var __except0__ = __call__ (RuntimeError, null, 'Internal error: Neither is_row nor is_col is set!');
/* 000501 */ 			__except0__.__cause__ = null;
/* 000501 */ 			throw __except0__;
/* 000501 */ 		}
/* 000504 */ 		if (__t__ ((function () {
/* 000504 */ 			var __accu0__ = self._rx_int;
/* 000504 */ 			return __call__ (__accu0__.match, __accu0__, index_spec_s);
/* 000504 */ 		}) ())) {
/* 000505 */ 			return __sub__ (__call__ (int, null, index_spec_s), 1);
/* 000505 */ 		}
/* 000508 */ 		if (__t__ (__t__ (is_row) && __in__ (index_spec_s, self.row_names))) {
/* 000509 */ 			return __getitem__ (self.row_names, index_spec_s);
/* 000509 */ 		}
/* 000510 */ 		if (__t__ (__t__ (is_col) && __in__ (index_spec_s, self.col_names))) {
/* 000511 */ 			return __getitem__ (self.col_names, index_spec_s);
/* 000511 */ 		}
/* 000513 */ 		var __except0__ = __call__ (ValueError, null, 'Invalid cell index: ‘{}’, expected number or valid alias name'.format (index_spec_s));
/* 000513 */ 		__except0__.__cause__ = null;
/* 000513 */ 		throw __except0__;
/* 000513 */ 	});},
/* 000517 */ 	get parse_cell_index_range_spec () {return __get__ (this, function (self, range_spec_s, is_row, is_col, py_default, default_start, default_end) {
/* 000517 */ 		if (typeof is_row == 'undefined' || (is_row != null && is_row.hasOwnProperty ("__kwargtrans__"))) {;
/* 000517 */ 			var is_row = false;
/* 000517 */ 		};
/* 000517 */ 		if (typeof is_col == 'undefined' || (is_col != null && is_col.hasOwnProperty ("__kwargtrans__"))) {;
/* 000517 */ 			var is_col = false;
/* 000517 */ 		};
/* 000517 */ 		if (typeof py_default == 'undefined' || (py_default != null && py_default.hasOwnProperty ("__kwargtrans__"))) {;
/* 000517 */ 			var py_default = _NotSpecified;
/* 000517 */ 		};
/* 000517 */ 		if (typeof default_start == 'undefined' || (default_start != null && default_start.hasOwnProperty ("__kwargtrans__"))) {;
/* 000517 */ 			var default_start = null;
/* 000517 */ 		};
/* 000517 */ 		if (typeof default_end == 'undefined' || (default_end != null && default_end.hasOwnProperty ("__kwargtrans__"))) {;
/* 000517 */ 			var default_end = null;
/* 000517 */ 		};
/* 000517 */ 		if (arguments.length) {
/* 000517 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000517 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000517 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000517 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000517 */ 					switch (__attrib0__) {
/* 000517 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000517 */ 						case 'range_spec_s': var range_spec_s = __allkwargs0__ [__attrib0__]; break;
/* 000517 */ 						case 'is_row': var is_row = __allkwargs0__ [__attrib0__]; break;
/* 000517 */ 						case 'is_col': var is_col = __allkwargs0__ [__attrib0__]; break;
/* 000517 */ 						case 'py_default': var py_default = __allkwargs0__ [__attrib0__]; break;
/* 000517 */ 						case 'default_start': var default_start = __allkwargs0__ [__attrib0__]; break;
/* 000517 */ 						case 'default_end': var default_end = __allkwargs0__ [__attrib0__]; break;
/* 000517 */ 					}
/* 000517 */ 				}
/* 000517 */ 			}
/* 000517 */ 		}
/* 000517 */ 		else {
/* 000517 */ 		}
/* 000521 */ 		if (__t__ (__in__ (',', range_spec_s))) {
/* 000523 */ 			var parts = (function () {
/* 000523 */ 				var __accu0__ = range_spec_s;
/* 000523 */ 				return __call__ (__accu0__.py_split, __accu0__, ',');
/* 000523 */ 			}) ();
/* 000524 */ 			var include_array = [];
/* 000525 */ 			var overall_start = null;
/* 000526 */ 			var overall_end = null;
/* 000527 */ 			var __iterable0__ = parts;
/* 000527 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000527 */ 				var part = __getitem__ (__iterable0__, __index0__);
/* 000528 */ 				var __left0__ = (function () {
/* 000528 */ 					var __accu0__ = self;
/* 000528 */ 					return __call__ (__accu0__.parse_cell_index_range_spec, __accu0__, part, __kwargtrans__ ({is_row: is_row, is_col: is_col, py_default: py_default}));
/* 000528 */ 				}) ();
/* 000528 */ 				var start = __left0__ [0];
/* 000528 */ 				var end = __left0__ [1];
/* 000532 */ 				for (var idx = start; idx < end; idx++) {
/* 000533 */ 					if (__t__ (__ge__ (idx, __call__ (len, null, include_array)))) {
/* 000534 */ 						var include_array = __call__ (__iadd__, null, include_array, (function () {
/* 000534 */ 							var __accu0__ = [];
/* 000534 */ 							for (var _ = 0; _ < __add__ (__sub__ (end, __call__ (len, null, include_array)), 1); _++) {
/* 000534 */ 								(function () {
/* 000534 */ 									var __accu1__ = __accu0__;
/* 000534 */ 									return __call__ (__accu1__.append, __accu1__, false);
/* 000534 */ 								}) ();
/* 000534 */ 							}
/* 000534 */ 							return __accu0__;
/* 000534 */ 						}) ());
/* 000534 */ 					}
/* 000535 */ 					__setitem__ (include_array, idx, true);
/* 000535 */ 				}
/* 000536 */ 				if (__t__ (__t__ (overall_start === null) || __gt__ (overall_start, start))) {
/* 000537 */ 					var overall_start = start;
/* 000537 */ 				}
/* 000538 */ 				if (__t__ (__t__ (overall_end === null) || __lt__ (overall_end, end))) {
/* 000539 */ 					var overall_end = end;
/* 000539 */ 				}
/* 000539 */ 			}
/* 000541 */ 			for (var idx = overall_start; idx < overall_end; idx++) {
/* 000542 */ 				if (__t__ (!__t__ ((__getitem__ (include_array, idx))))) {
/* 000543 */ 					var __except0__ = __call__ (ValueError, null, 'Specified range ‘{}’ is not contiguous'.format (range_spec_s));
/* 000543 */ 					__except0__.__cause__ = null;
/* 000543 */ 					throw __except0__;
/* 000543 */ 				}
/* 000543 */ 			}
/* 000546 */ 			return tuple ([overall_start, overall_end]);
/* 000546 */ 		}
/* 000548 */ 		if (__t__ (__in__ ('-', range_spec_s))) {
/* 000550 */ 			var __left0__ = (function () {
/* 000550 */ 				var __accu0__ = range_spec_s;
/* 000550 */ 				return __call__ (__accu0__.py_split, __accu0__, '-', 1);
/* 000550 */ 			}) ();
/* 000550 */ 			var start_spec = __left0__ [0];
/* 000550 */ 			var end_spec = __left0__ [1];
/* 000551 */ 			var start = (function () {
/* 000551 */ 				var __accu0__ = self;
/* 000551 */ 				return __call__ (__accu0__.parse_cell_index_spec, __accu0__, start_spec, __kwargtrans__ ({is_row: is_row, is_col: is_col, py_default: default_start}));
/* 000551 */ 			}) ();
/* 000554 */ 			var end_incl = (function () {
/* 000554 */ 				var __accu0__ = self;
/* 000554 */ 				return __call__ (__accu0__.parse_cell_index_spec, __accu0__, end_spec, __kwargtrans__ ({is_row: is_row, is_col: is_col, py_default: null}));
/* 000554 */ 			}) ();
/* 000557 */ 			if (__t__ (end_incl === null)) {
/* 000558 */ 				var end = default_end;
/* 000558 */ 			}
/* 000559 */ 			else {
/* 000560 */ 				var end = __add__ (end_incl, 1);
/* 000560 */ 			}
/* 000561 */ 			return tuple ([start, end]);
/* 000561 */ 		}
/* 000563 */ 		if (__t__ (__in__ ('+', range_spec_s))) {
/* 000565 */ 			var __left0__ = (function () {
/* 000565 */ 				var __accu0__ = range_spec_s;
/* 000565 */ 				return __call__ (__accu0__.py_split, __accu0__, '+', 1);
/* 000565 */ 			}) ();
/* 000565 */ 			var start_spec = __left0__ [0];
/* 000565 */ 			var len_spec = __left0__ [1];
/* 000566 */ 			var start = (function () {
/* 000566 */ 				var __accu0__ = self;
/* 000566 */ 				return __call__ (__accu0__.parse_cell_index_spec, __accu0__, start_spec, __kwargtrans__ ({is_row: is_row, is_col: is_col, py_default: py_default}));
/* 000566 */ 			}) ();
/* 000569 */ 			if (__t__ (!__t__ (((function () {
/* 000569 */ 				var __accu0__ = self._rx_int;
/* 000569 */ 				return __call__ (__accu0__.match, __accu0__, len_spec);
/* 000569 */ 			}) ())))) {
/* 000570 */ 				var __except0__ = __call__ (ValueError, null, 'Invalid number in ‘START+N’ cell index range specification: ‘{}’'.format (len_spec));
/* 000570 */ 				__except0__.__cause__ = null;
/* 000570 */ 				throw __except0__;
/* 000570 */ 			}
/* 000573 */ 			var range_len = __call__ (int, null, len_spec);
/* 000576 */ 			var end = __add__ (start, range_len);
/* 000577 */ 			return tuple ([start, end]);
/* 000577 */ 		}
/* 000579 */ 		var idx = (function () {
/* 000579 */ 			var __accu0__ = self;
/* 000579 */ 			return __call__ (__accu0__.parse_cell_index_spec, __accu0__, range_spec_s, __kwargtrans__ ({is_row: is_row, is_col: is_col, py_default: py_default}));
/* 000579 */ 		}) ();
/* 000582 */ 		return tuple ([idx, __add__ (idx, 1)]);
/* 000582 */ 	});},
/* 000585 */ 	get parse_placement_index_spec () {return __get__ (this, function (self, placement_index_spec, is_row, is_col, py_default, default_start, default_end) {
/* 000585 */ 		if (typeof is_row == 'undefined' || (is_row != null && is_row.hasOwnProperty ("__kwargtrans__"))) {;
/* 000585 */ 			var is_row = false;
/* 000585 */ 		};
/* 000585 */ 		if (typeof is_col == 'undefined' || (is_col != null && is_col.hasOwnProperty ("__kwargtrans__"))) {;
/* 000585 */ 			var is_col = false;
/* 000585 */ 		};
/* 000585 */ 		if (typeof py_default == 'undefined' || (py_default != null && py_default.hasOwnProperty ("__kwargtrans__"))) {;
/* 000585 */ 			var py_default = _NotSpecified;
/* 000585 */ 		};
/* 000585 */ 		if (typeof default_start == 'undefined' || (default_start != null && default_start.hasOwnProperty ("__kwargtrans__"))) {;
/* 000585 */ 			var default_start = 0;
/* 000585 */ 		};
/* 000585 */ 		if (typeof default_end == 'undefined' || (default_end != null && default_end.hasOwnProperty ("__kwargtrans__"))) {;
/* 000585 */ 			var default_end = _NotSpecified;
/* 000585 */ 		};
/* 000585 */ 		if (arguments.length) {
/* 000585 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000585 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000585 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000585 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000585 */ 					switch (__attrib0__) {
/* 000585 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000585 */ 						case 'placement_index_spec': var placement_index_spec = __allkwargs0__ [__attrib0__]; break;
/* 000585 */ 						case 'is_row': var is_row = __allkwargs0__ [__attrib0__]; break;
/* 000585 */ 						case 'is_col': var is_col = __allkwargs0__ [__attrib0__]; break;
/* 000585 */ 						case 'py_default': var py_default = __allkwargs0__ [__attrib0__]; break;
/* 000585 */ 						case 'default_start': var default_start = __allkwargs0__ [__attrib0__]; break;
/* 000585 */ 						case 'default_end': var default_end = __allkwargs0__ [__attrib0__]; break;
/* 000585 */ 					}
/* 000585 */ 				}
/* 000585 */ 			}
/* 000585 */ 		}
/* 000585 */ 		else {
/* 000585 */ 		}
/* 000590 */ 		if (__t__ (__eq__ (__call__ (len, null, placement_index_spec), 0))) {
/* 000591 */ 			if (__t__ (is_row)) {
/* 000592 */ 				return __call__ (CellIndexRangeModel, null, __kwargtrans__ ({start: self.current_row, end: __add__ (self.current_row, 1)}));
/* 000592 */ 			}
/* 000593 */ 			else if (__t__ (is_col)) {
/* 000594 */ 				return __call__ (CellIndexRangeModel, null, __kwargtrans__ ({start: self.current_col, end: __add__ (self.current_col, 1)}));
/* 000594 */ 			}
/* 000595 */ 			else {
/* 000596 */ 				var __except0__ = __call__ (RuntimeError, null, 'Internal error, neither is_row nor is_col was set here.');
/* 000596 */ 				__except0__.__cause__ = null;
/* 000596 */ 				throw __except0__;
/* 000596 */ 			}
/* 000596 */ 		}
/* 000598 */ 		var nl = (function () {
/* 000598 */ 			var __accu0__ = placement_index_spec.latex_walker;
/* 000598 */ 			return __call__ (__accu0__.filter_whitespace_comments_nodes, __accu0__, placement_index_spec);
/* 000598 */ 		}) ();
/* 000602 */ 		if (__t__ (__ne__ (__call__ (len, null, nl), 1))) {
/* 000603 */ 			if (__t__ (is_row)) {
/* 000604 */ 				var PLACEHOLDER = 'ROW';
/* 000604 */ 			}
/* 000605 */ 			else if (__t__ (is_col)) {
/* 000606 */ 				var PLACEHOLDER = 'COL';
/* 000606 */ 			}
/* 000607 */ 			else {
/* 000608 */ 				var PLACEHOLDER = null;
/* 000608 */ 			}
/* 000612 */ 			var __except0__ = __call__ (LatexWalkerParseError, null, 'Bad cell index or merge range specification, expected ‘{}’ or ‘\\merge{}{}-RANGE{}’, got {} ({} nodes)'.format (PLACEHOLDER, '{', PLACEHOLDER, '}', __call__ (repr, null, placement_index_spec), __call__ (len, null, nl)), __kwargtrans__ ({pos: nl.pos}));
/* 000612 */ 			__except0__.__cause__ = null;
/* 000612 */ 			throw __except0__;
/* 000612 */ 		}
/* 000616 */ 		var node = __getitem__ (nl, 0);
/* 000618 */ 		if (__t__ (__t__ ((function () {
/* 000618 */ 			var __accu0__ = node;
/* 000618 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000618 */ 		}) ()) && __eq__ (node.macroname, 'merge'))) {
/* 000622 */ 			var merge_node_args = (function () {
/* 000622 */ 				var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000622 */ 				return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['mergespec']));
/* 000622 */ 			}) ();
/* 000626 */ 			var range_spec_s = (function () {
/* 000626 */ 				var __accu0__ = __getitem__ (merge_node_args, 'mergespec');
/* 000626 */ 				return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000626 */ 			}) ();
/* 000628 */ 			var default_end_computed = default_end;
/* 000629 */ 			if (__t__ (default_end_computed === _NotSpecified)) {
/* 000630 */ 				if (__t__ (is_row)) {
/* 000631 */ 					var default_end_computed = __getitem__ (self.cells_size, 0);
/* 000631 */ 				}
/* 000632 */ 				if (__t__ (is_col)) {
/* 000633 */ 					var default_end_computed = __getitem__ (self.cells_size, 1);
/* 000633 */ 				}
/* 000633 */ 			}
/* 000635 */ 			var __left0__ = (function () {
/* 000635 */ 				var __accu0__ = self;
/* 000635 */ 				return __call__ (__accu0__.parse_cell_index_range_spec, __accu0__, range_spec_s, __kwargtrans__ ({is_row: is_row, is_col: is_col, default_start: default_start, default_end: default_end_computed}));
/* 000635 */ 			}) ();
/* 000635 */ 			var start = __left0__ [0];
/* 000635 */ 			var end = __left0__ [1];
/* 000640 */ 			return __call__ (CellIndexRangeModel, null, __kwargtrans__ ({start: start, end: end}));
/* 000640 */ 		}
/* 000643 */ 		var idx = (function () {
/* 000643 */ 			var __accu0__ = self;
/* 000644 */ 			return __call__ (__accu0__.parse_cell_index_spec, __accu0__, (function () {
/* 000644 */ 				var __accu1__ = nl;
/* 000644 */ 				return __call__ (__accu1__.get_content_as_chars, __accu1__);
/* 000644 */ 			}) (), __kwargtrans__ ({is_row: is_row, is_col: is_col, py_default: py_default}));
/* 000644 */ 		}) ();
/* 000647 */ 		return __call__ (CellIndexRangeModel, null, __kwargtrans__ ({start: idx, end: __add__ (idx, 1)}));
/* 000647 */ 	});},
/* 000650 */ 	get parse_placement_spec () {return __get__ (this, function (self, placement_spec) {
/* 000650 */ 		if (arguments.length) {
/* 000650 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000650 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000650 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000650 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000650 */ 					switch (__attrib0__) {
/* 000650 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000650 */ 						case 'placement_spec': var placement_spec = __allkwargs0__ [__attrib0__]; break;
/* 000650 */ 					}
/* 000650 */ 				}
/* 000650 */ 			}
/* 000650 */ 		}
/* 000650 */ 		else {
/* 000650 */ 		}
/* 000652 */ 		if (__t__ (__call__ (isinstance, null, placement_spec, CellPlacementModel))) {
/* 000653 */ 			return placement_spec;
/* 000653 */ 		}
/* 000655 */ 		var __left0__ = tuple ([[], []]);
/* 000655 */ 		var row_spec_nl = __left0__ [0];
/* 000655 */ 		var col_spec_nl = __left0__ [1];
/* 000657 */ 		if (__t__ (placement_spec !== null)) {
/* 000659 */ 			var placement_spec_split = (function () {
/* 000659 */ 				var __accu0__ = placement_spec;
/* 000659 */ 				return __call__ (__accu0__.split_at_chars, __accu0__, ';', __kwargtrans__ ({keep_empty: true}));
/* 000659 */ 			}) ();
/* 000661 */ 			if (__t__ (__eq__ (__call__ (len, null, placement_spec_split), 2))) {
/* 000663 */ 				var __left0__ = placement_spec_split;
/* 000663 */ 				var row_spec_nl = __left0__ [0];
/* 000663 */ 				var col_spec_nl = __left0__ [1];
/* 000663 */ 			}
/* 000665 */ 			else if (__t__ (__eq__ (__call__ (len, null, placement_spec_split), 1))) {
/* 000667 */ 				var __left0__ = placement_spec_split;
/* 000667 */ 				var col_spec_nl = __left0__ [0];
/* 000667 */ 			}
/* 000669 */ 			else if (__t__ (__eq__ (__call__ (len, null, placement_spec_split), 0))) {
/* 000672 */ 				// pass;
/* 000672 */ 			}
/* 000673 */ 			else {
/* 000678 */ 				var __except0__ = __call__ (LatexWalkerParseError, null, 'Bad cell placement specification, expected ‘ROW;COL’ or ‘COL’, got ‘{}’'.format (__call__ (_splfysidews, null, (function () {
/* 000678 */ 					var __accu0__ = placement_spec;
/* 000678 */ 					return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000678 */ 				}) ())), __kwargtrans__ ({pos: placement_spec.pos}));
/* 000678 */ 				__except0__.__cause__ = null;
/* 000678 */ 				throw __except0__;
/* 000678 */ 			}
/* 000678 */ 		}
/* 000682 */ 		var row_range = (function () {
/* 000682 */ 			var __accu0__ = self;
/* 000682 */ 			return __call__ (__accu0__.parse_placement_index_spec, __accu0__, row_spec_nl, __kwargtrans__ ({is_row: true}));
/* 000682 */ 		}) ();
/* 000683 */ 		var col_range = (function () {
/* 000683 */ 			var __accu0__ = self;
/* 000683 */ 			return __call__ (__accu0__.parse_placement_index_spec, __accu0__, col_spec_nl, __kwargtrans__ ({is_col: true}));
/* 000683 */ 		}) ();
/* 000685 */ 		return __call__ (CellPlacementModel, null, __kwargtrans__ ({row_range: row_range, col_range: col_range}));
/* 000685 */ 	});},
/* 000690 */ 	get parse_placement_mapping_index_spec () {return __get__ (this, function (self, placement_mapping_index_spec, index_end, is_row, is_col) {
/* 000690 */ 		if (typeof is_row == 'undefined' || (is_row != null && is_row.hasOwnProperty ("__kwargtrans__"))) {;
/* 000690 */ 			var is_row = false;
/* 000690 */ 		};
/* 000690 */ 		if (typeof is_col == 'undefined' || (is_col != null && is_col.hasOwnProperty ("__kwargtrans__"))) {;
/* 000690 */ 			var is_col = false;
/* 000690 */ 		};
/* 000690 */ 		if (arguments.length) {
/* 000690 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000690 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000690 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000690 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000690 */ 					switch (__attrib0__) {
/* 000690 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000690 */ 						case 'placement_mapping_index_spec': var placement_mapping_index_spec = __allkwargs0__ [__attrib0__]; break;
/* 000690 */ 						case 'index_end': var index_end = __allkwargs0__ [__attrib0__]; break;
/* 000690 */ 						case 'is_row': var is_row = __allkwargs0__ [__attrib0__]; break;
/* 000690 */ 						case 'is_col': var is_col = __allkwargs0__ [__attrib0__]; break;
/* 000690 */ 					}
/* 000690 */ 				}
/* 000690 */ 			}
/* 000690 */ 		}
/* 000690 */ 		else {
/* 000690 */ 		}
/* 000693 */ 		if (__t__ (__eq__ (__call__ (len, null, placement_mapping_index_spec), 0))) {
/* 000695 */ 			return [];
/* 000695 */ 		}
/* 000697 */ 		var parts = (function () {
/* 000697 */ 			var __accu0__ = placement_mapping_index_spec;
/* 000697 */ 			return __call__ (__accu0__.split_at_chars, __accu0__, ',', __kwargtrans__ ({keep_empty: true}));
/* 000697 */ 		}) ();
/* 000700 */ 		var current_idx = 0;
/* 000702 */ 		var index_placements = [];
/* 000703 */ 		var __iterable0__ = parts;
/* 000703 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000703 */ 			var placement_part_spec = __getitem__ (__iterable0__, __index0__);
/* 000708 */ 			var nl = (function () {
/* 000708 */ 				var __accu0__ = placement_part_spec.latex_walker;
/* 000708 */ 				return __call__ (__accu0__.filter_whitespace_comments_nodes, __accu0__, placement_part_spec);
/* 000708 */ 			}) ();
/* 000712 */ 			if (__t__ (__ne__ (__call__ (len, null, nl), 1))) {
/* 000713 */ 				if (__t__ (is_row)) {
/* 000714 */ 					var PLACEHOLDER = 'ROW-RANGE';
/* 000714 */ 				}
/* 000715 */ 				else if (__t__ (is_col)) {
/* 000716 */ 					var PLACEHOLDER = 'COL-RANGE';
/* 000716 */ 				}
/* 000717 */ 				else {
/* 000718 */ 					var PLACEHOLDER = null;
/* 000718 */ 				}
/* 000723 */ 				var __except0__ = __call__ (LatexWalkerParseError, null, 'Bad cell index or range or merge range specification, expected ‘{}’ or ‘\\merge{}{}-RANGE{}’, got {} ({} nodes)'.format (PLACEHOLDER, '{', PLACEHOLDER, '}', __call__ (repr, null, placement_index_spec), __call__ (len, null, nl)), __kwargtrans__ ({pos: nl.pos}));
/* 000723 */ 				__except0__.__cause__ = null;
/* 000723 */ 				throw __except0__;
/* 000723 */ 			}
/* 000727 */ 			var node = __getitem__ (nl, 0);
/* 000729 */ 			if (__t__ (__t__ ((function () {
/* 000729 */ 				var __accu0__ = node;
/* 000729 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000729 */ 			}) ()) && __eq__ (node.macroname, 'merge'))) {
/* 000733 */ 				var merge_node_args = (function () {
/* 000733 */ 					var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000733 */ 					return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['mergespec']));
/* 000733 */ 				}) ();
/* 000737 */ 				var range_spec_s = (function () {
/* 000737 */ 					var __accu0__ = __getitem__ (merge_node_args, 'mergespec');
/* 000737 */ 					return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000737 */ 				}) ();
/* 000739 */ 				var __left0__ = (function () {
/* 000739 */ 					var __accu0__ = self;
/* 000739 */ 					return __call__ (__accu0__.parse_cell_index_range_spec, __accu0__, range_spec_s, __kwargtrans__ ({is_row: is_row, is_col: is_col, py_default: current_idx, default_start: current_idx, default_end: null}));
/* 000739 */ 				}) ();
/* 000739 */ 				var start = __left0__ [0];
/* 000739 */ 				var end = __left0__ [1];
/* 000745 */ 				(function () {
/* 000745 */ 					var __accu0__ = index_placements;
/* 000745 */ 					return __call__ (__accu0__.append, __accu0__, __call__ (CellIndexRangeModel, null, __kwargtrans__ ({start: start, end: end})));
/* 000745 */ 				}) ();
/* 000746 */ 				var current_idx = end;
/* 000746 */ 				continue;
/* 000746 */ 			}
/* 000750 */ 			var __left0__ = (function () {
/* 000750 */ 				var __accu0__ = self;
/* 000751 */ 				return __call__ (__accu0__.parse_cell_index_range_spec, __accu0__, (function () {
/* 000751 */ 					var __accu1__ = nl;
/* 000751 */ 					return __call__ (__accu1__.get_content_as_chars, __accu1__);
/* 000751 */ 				}) (), __kwargtrans__ ({is_row: is_row, is_col: is_col, py_default: current_idx, default_start: current_idx, default_end: null}));
/* 000751 */ 			}) ();
/* 000751 */ 			var iter_start = __left0__ [0];
/* 000751 */ 			var iter_end = __left0__ [1];
/* 000759 */ 			if (__t__ (iter_end === null)) {
/* 000760 */ 				(function () {
/* 000760 */ 					var __accu0__ = index_placements;
/* 000760 */ 					return __call__ (__accu0__.append, __accu0__, __call__ (CellIndexRangeModel, null, __kwargtrans__ ({start: iter_start, end: null})));
/* 000760 */ 				}) ();
/* 000761 */ 				var current_idx = null;
/* 000761 */ 			}
/* 000762 */ 			else {
/* 000764 */ 				for (var j = iter_start; j < iter_end; j++) {
/* 000765 */ 					(function () {
/* 000765 */ 						var __accu0__ = index_placements;
/* 000765 */ 						return __call__ (__accu0__.append, __accu0__, __call__ (CellIndexRangeModel, null, __kwargtrans__ ({start: j, end: __add__ (j, 1)})));
/* 000765 */ 					}) ();
/* 000766 */ 					var current_idx = __add__ (j, 1);
/* 000766 */ 				}
/* 000766 */ 			}
/* 000766 */ 			continue;
/* 000766 */ 		}
/* 000770 */ 		return index_placements;
/* 000770 */ 	});},
/* 000772 */ 	get parse_placement_mapping_spec () {return __get__ (this, function (self, placement_mapping_spec) {
/* 000772 */ 		if (arguments.length) {
/* 000772 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000772 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000772 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000772 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000772 */ 					switch (__attrib0__) {
/* 000772 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000772 */ 						case 'placement_mapping_spec': var placement_mapping_spec = __allkwargs0__ [__attrib0__]; break;
/* 000772 */ 					}
/* 000772 */ 				}
/* 000772 */ 			}
/* 000772 */ 		}
/* 000772 */ 		else {
/* 000772 */ 		}
/* 000775 */ 		var placement_mapping_spec_split = (function () {
/* 000775 */ 			var __accu0__ = placement_mapping_spec;
/* 000775 */ 			return __call__ (__accu0__.split_at_chars, __accu0__, ';', __kwargtrans__ ({keep_empty: true}));
/* 000775 */ 		}) ();
/* 000777 */ 		if (__t__ (__eq__ (__call__ (len, null, placement_mapping_spec_split), 2))) {
/* 000779 */ 			var __left0__ = placement_mapping_spec_split;
/* 000779 */ 			var row_mapping_spec = __left0__ [0];
/* 000779 */ 			var col_mapping_spec = __left0__ [1];
/* 000779 */ 		}
/* 000781 */ 		else if (__t__ (__eq__ (__call__ (len, null, placement_mapping_spec_split), 1))) {
/* 000783 */ 			var row_mapping_spec = [];
/* 000784 */ 			var __left0__ = placement_mapping_spec_split;
/* 000784 */ 			var col_mapping_spec = __left0__ [0];
/* 000784 */ 		}
/* 000786 */ 		else if (__t__ (__eq__ (__call__ (len, null, placement_mapping_spec_split), 0))) {
/* 000788 */ 			var __left0__ = tuple ([[], []]);
/* 000788 */ 			var row_mapping_spec = __left0__ [0];
/* 000788 */ 			var col_mapping_spec = __left0__ [1];
/* 000788 */ 		}
/* 000789 */ 		else {
/* 000794 */ 			var __except0__ = __call__ (LatexWalkerParseError, null, 'Expected ‘ROWS;COLS’ or ‘COLS’ or ‘’ for placement argument, got ‘{}’'.format (__call__ (_splfysidews, null, (function () {
/* 000794 */ 				var __accu0__ = placement_mapping_spec;
/* 000794 */ 				return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000794 */ 			}) ())), __kwargtrans__ ({pos: placement_mapping_spec.pos}));
/* 000794 */ 			__except0__.__cause__ = null;
/* 000794 */ 			throw __except0__;
/* 000794 */ 		}
/* 000798 */ 		var row_placements = (function () {
/* 000798 */ 			var __accu0__ = self;
/* 000798 */ 			return __call__ (__accu0__.parse_placement_mapping_index_spec, __accu0__, row_mapping_spec, __kwargtrans__ ({index_end: null, is_row: true}));
/* 000798 */ 		}) ();
/* 000801 */ 		var col_placements = (function () {
/* 000801 */ 			var __accu0__ = self;
/* 000801 */ 			return __call__ (__accu0__.parse_placement_mapping_index_spec, __accu0__, col_mapping_spec, __kwargtrans__ ({index_end: null, is_col: true}));
/* 000801 */ 		}) ();
/* 000805 */ 		return __call__ (CellPlacementsMappingModel, null, __kwargtrans__ ({row_placements: row_placements, col_placements: col_placements}));
/* 000805 */ 	});}
/* 000805 */ });
/* 000815 */ export var CellsEnvironment =  __class__ ('CellsEnvironment', [LLMEnvironmentSpecBase], {
/* 000815 */ 	__module__: __name__,
/* 000817 */ 	is_block_level: true,
/* 000819 */ 	allowed_in_standalone_mode: true,
/* 000821 */ 	body_contents_is_block_level: true,
/* 000824 */ 	get __init__ () {return __get__ (this, function (self, environmentname) {
/* 000824 */ 		if (typeof environmentname == 'undefined' || (environmentname != null && environmentname.hasOwnProperty ("__kwargtrans__"))) {;
/* 000824 */ 			var environmentname = 'cells';
/* 000824 */ 		};
/* 000824 */ 		if (arguments.length) {
/* 000824 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000824 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000824 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000824 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000824 */ 					switch (__attrib0__) {
/* 000824 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000824 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000824 */ 					}
/* 000824 */ 				}
/* 000824 */ 			}
/* 000824 */ 		}
/* 000824 */ 		else {
/* 000824 */ 		}
/* 000825 */ 		__call__ (__call__ (__super__, null, CellsEnvironment, '__init__'), null, self, __kwargtrans__ ({environmentname: environmentname}));
/* 000825 */ 	});},
/* 000829 */ 	get make_body_parser () {return __get__ (this, function (self, token, nodeargd, arg_parsing_state_delta) {
/* 000829 */ 		if (arguments.length) {
/* 000829 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000829 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000829 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000829 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000829 */ 					switch (__attrib0__) {
/* 000829 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000829 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000829 */ 						case 'nodeargd': var nodeargd = __allkwargs0__ [__attrib0__]; break;
/* 000829 */ 						case 'arg_parsing_state_delta': var arg_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000829 */ 					}
/* 000829 */ 				}
/* 000829 */ 			}
/* 000829 */ 		}
/* 000829 */ 		else {
/* 000829 */ 		}
/* 000830 */ 		return (function () {
/* 000830 */ 			var __accu0__ = macrospec;
/* 000832 */ 			return __call__ (__accu0__.LatexEnvironmentBodyContentsParser, __accu0__, __kwargtrans__ ({environmentname: token.arg, contents_parsing_state_delta: (function () {
/* 000832 */ 				var __accu1__ = macrospec;
/* 000837 */ 				return __call__ (__accu1__.ParsingStateDeltaExtendLatexContextDb, __accu1__, __kwargtrans__ ({extend_latex_context: __call__ (dict, null, __kwargtrans__ ({macros: [__call__ (CellMacro, null), __call__ (CelldataMacroSpec, null), __call__ (LatexTabularRowSeparatorSpec, null)]}))}));
/* 000843 */ 			}) (), child_parsing_state_delta: __call__ (ParsingStateDelta, null)}));
/* 000843 */ 		}) ();
/* 000843 */ 	});},
/* 000847 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000847 */ 		if (arguments.length) {
/* 000847 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000847 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000847 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000847 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000847 */ 					switch (__attrib0__) {
/* 000847 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000847 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000847 */ 					}
/* 000847 */ 				}
/* 000847 */ 			}
/* 000847 */ 		}
/* 000847 */ 		else {
/* 000847 */ 		}
/* 000851 */ 		var cells_model = __call__ (CellsModel, null);
/* 000853 */ 		var __iterable0__ = node.nodelist;
/* 000853 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000853 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000854 */ 			if (__t__ ((function () {
/* 000854 */ 				var __accu0__ = n;
/* 000854 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000854 */ 			}) ())) {
/* 000855 */ 				if (__t__ (__eq__ (n.macroname, 'cell'))) {
/* 000856 */ 					(function () {
/* 000856 */ 						var __accu0__ = cells_model;
/* 000856 */ 						return __call__ (__accu0__.add_cell_node, __accu0__, n);
/* 000856 */ 					}) ();
/* 000856 */ 					continue;
/* 000856 */ 				}
/* 000858 */ 				else if (__t__ (__eq__ (n.macroname, 'celldata'))) {
/* 000859 */ 					(function () {
/* 000859 */ 						var __accu0__ = cells_model;
/* 000859 */ 						return __call__ (__accu0__.add_celldata_node, __accu0__, n);
/* 000859 */ 					}) ();
/* 000859 */ 					continue;
/* 000859 */ 				}
/* 000861 */ 				else if (__t__ (__eq__ (n.macroname, '\\'))) {
/* 000862 */ 					(function () {
/* 000862 */ 						var __accu0__ = cells_model;
/* 000862 */ 						return __call__ (__accu0__.move_next_row, __accu0__);
/* 000862 */ 					}) ();
/* 000862 */ 					continue;
/* 000862 */ 				}
/* 000862 */ 			}
/* 000865 */ 			if (__t__ ((function () {
/* 000865 */ 				var __accu0__ = n;
/* 000865 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCommentNode);
/* 000865 */ 			}) ())) {
/* 000865 */ 				continue;
/* 000865 */ 			}
/* 000869 */ 			if (__t__ (__t__ ((function () {
/* 000869 */ 				var __accu0__ = n;
/* 000869 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000870 */ 			}) ()) && __eq__ (__call__ (len, null, (function () {
/* 000870 */ 				var __accu0__ = n.chars;
/* 000870 */ 				return __call__ (__accu0__.strip, __accu0__);
/* 000870 */ 			}) ()), 0))) {
/* 000870 */ 				continue;
/* 000870 */ 			}
/* 000875 */ 			var __except0__ = __call__ (LatexWalkerParseError, null, 'You cannot place ‘{}’ here.  Expected: \\cell, \\celldata, \\\\.'.format (__call__ (_splfysidews, null, (function () {
/* 000875 */ 				var __accu0__ = n;
/* 000875 */ 				return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000875 */ 			}) ())));
/* 000875 */ 			__except0__.__cause__ = null;
/* 000875 */ 			throw __except0__;
/* 000875 */ 		}
/* 000879 */ 		(function () {
/* 000879 */ 			var __accu0__ = cells_model;
/* 000879 */ 			return __call__ (__accu0__.finalize, __accu0__);
/* 000879 */ 		}) ();
/* 000881 */ 		node.llm_cells_model = cells_model;
/* 000881 */ 	});},
/* 000884 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000884 */ 		if (arguments.length) {
/* 000884 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000884 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000884 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000884 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000884 */ 					switch (__attrib0__) {
/* 000884 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000884 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000884 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000884 */ 					}
/* 000884 */ 				}
/* 000884 */ 			}
/* 000884 */ 		}
/* 000884 */ 		else {
/* 000884 */ 		}
/* 000890 */ 		return (function () {
/* 000890 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000890 */ 			return __call__ (__accu0__.render_cells, __accu0__, __kwargtrans__ ({cells_model: node.llm_cells_model, render_context: render_context}));
/* 000890 */ 		}) ();
/* 000890 */ 	});}
/* 000890 */ });
/* 000899 */ export var FeatureProvideCells =  __class__ ('FeatureProvideCells', [Feature], {
/* 000899 */ 	__module__: __name__,
/* 000901 */ 	DocumentManager: null,
/* 000902 */ 	RenderManager: null,
/* 000904 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000904 */ 		if (arguments.length) {
/* 000904 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000904 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000904 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000904 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000904 */ 					switch (__attrib0__) {
/* 000904 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000904 */ 					}
/* 000904 */ 				}
/* 000904 */ 			}
/* 000904 */ 		}
/* 000904 */ 		else {
/* 000904 */ 		}
/* 000907 */ 		return __call__ (dict, null, __kwargtrans__ ({environments: [__call__ (CellsEnvironment, null)]}));
/* 000907 */ 	});}
/* 000907 */ });
/* 000010 */ 
//# sourceMappingURL=llm.feature.cells.map