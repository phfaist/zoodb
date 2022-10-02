/* 000001 */ // Transcrypt'ed from Python, 2022-10-02 16:34:51
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
/* 000010 */ export {LatexArgumentSpec, LatexWalkerParseError, latexnodes_parsers, macrospec, ParsingStateDelta, LLMEnvironmentSpecBase, LLMMacroSpecError, ParsedArgumentsInfo, Feature, LLMArgumentSpec, latexnodes_nodes};
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
/* 000269 */ 	});},
/* 000271 */ 	_fields: tuple (['cells_size', 'cells_data']),
/* 000273 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000273 */ 		if (arguments.length) {
/* 000273 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000273 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000273 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000273 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000273 */ 					switch (__attrib0__) {
/* 000273 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000273 */ 					}
/* 000273 */ 				}
/* 000273 */ 			}
/* 000273 */ 		}
/* 000273 */ 		else {
/* 000273 */ 		}
/* 000274 */ 		var pp_data = (function () {
/* 000274 */ 			var __accu0__ = '';
/* 000274 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000274 */ 				var __accu1__ = [];
/* 000274 */ 				var __iterable0__ = self.cells_data;
/* 000274 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000274 */ 					var d = __getitem__ (__iterable0__, __index0__);
/* 000274 */ 					(function () {
/* 000274 */ 						var __accu2__ = __accu1__;
/* 000274 */ 						return __call__ (__accu2__.append, __accu2__, __add__ ('\n        ', __call__ (repr, null, d)));
/* 000274 */ 					}) ();
/* 000274 */ 				}
/* 000274 */ 				return __accu1__;
/* 000274 */ 			}) ());
/* 000274 */ 		}) ();
/* 000276 */ 		return '{}(\n    cells_size={},\n    cells_data=[{}\n    ])'.format (self.__class__.__name__, __call__ (repr, null, self.cells_size), pp_data);
/* 000276 */ 	});},
/* 000282 */ 	get add_cell_node () {return __get__ (this, function (self, cell_node, default_placement, default_styles) {
/* 000282 */ 		if (typeof default_placement == 'undefined' || (default_placement != null && default_placement.hasOwnProperty ("__kwargtrans__"))) {;
/* 000282 */ 			var default_placement = null;
/* 000282 */ 		};
/* 000282 */ 		if (typeof default_styles == 'undefined' || (default_styles != null && default_styles.hasOwnProperty ("__kwargtrans__"))) {;
/* 000282 */ 			var default_styles = null;
/* 000282 */ 		};
/* 000282 */ 		if (arguments.length) {
/* 000282 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000282 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000282 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000282 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000282 */ 					switch (__attrib0__) {
/* 000282 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000282 */ 						case 'cell_node': var cell_node = __allkwargs0__ [__attrib0__]; break;
/* 000282 */ 						case 'default_placement': var default_placement = __allkwargs0__ [__attrib0__]; break;
/* 000282 */ 						case 'default_styles': var default_styles = __allkwargs0__ [__attrib0__]; break;
/* 000282 */ 					}
/* 000282 */ 				}
/* 000282 */ 			}
/* 000282 */ 		}
/* 000282 */ 		else {
/* 000282 */ 		}
/* 000284 */ 		var cell_node_args = (function () {
/* 000284 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: cell_node}));
/* 000284 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['styles', 'placement', 'cellcontents']));
/* 000284 */ 		}) ();
/* 000288 */ 		if (__t__ (default_styles === null)) {
/* 000289 */ 			var default_styles = [];
/* 000289 */ 		}
/* 000291 */ 		if (__t__ ((function () {
/* 000291 */ 			var __accu0__ = __getitem__ (cell_node_args, 'styles');
/* 000291 */ 			return __call__ (__accu0__.was_provided, __accu0__);
/* 000291 */ 		}) ())) {
/* 000293 */ 			var styles = __add__ ((function () {
/* 000293 */ 				var __accu0__ = (function () {
/* 000293 */ 					var __accu1__ = __getitem__ (cell_node_args, 'styles');
/* 000293 */ 					return __call__ (__accu1__.get_content_as_chars, __accu1__);
/* 000293 */ 				}) ();
/* 000293 */ 				return __call__ (__accu0__.py_split, __accu0__, ' ');
/* 000293 */ 			}) (), default_styles);
/* 000293 */ 		}
/* 000295 */ 		else {
/* 000297 */ 			var styles = default_styles;
/* 000297 */ 		}
/* 000299 */ 		if (__t__ ((function () {
/* 000299 */ 			var __accu0__ = __getitem__ (cell_node_args, 'placement');
/* 000299 */ 			return __call__ (__accu0__.was_provided, __accu0__);
/* 000299 */ 		}) ())) {
/* 000300 */ 			var placement_spec = (function () {
/* 000300 */ 				var __accu0__ = __getitem__ (cell_node_args, 'placement');
/* 000300 */ 				return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000300 */ 			}) ();
/* 000300 */ 		}
/* 000301 */ 		else {
/* 000302 */ 			var placement_spec = default_placement;
/* 000302 */ 		}
/* 000304 */ 		var cell_contents = (function () {
/* 000304 */ 			var __accu0__ = __getitem__ (cell_node_args, 'cellcontents');
/* 000304 */ 			return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000304 */ 		}) ();
/* 000306 */ 		return (function () {
/* 000306 */ 			var __accu0__ = self;
/* 000306 */ 			return __call__ (__accu0__.add_cell, __accu0__, placement_spec, styles, cell_contents);
/* 000306 */ 		}) ();
/* 000306 */ 	});},
/* 000308 */ 	get add_cell () {return __get__ (this, function (self, placement_spec, styles, content_nodes) {
/* 000308 */ 		if (arguments.length) {
/* 000308 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000308 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000308 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000308 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000308 */ 					switch (__attrib0__) {
/* 000308 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000308 */ 						case 'placement_spec': var placement_spec = __allkwargs0__ [__attrib0__]; break;
/* 000308 */ 						case 'styles': var styles = __allkwargs0__ [__attrib0__]; break;
/* 000308 */ 						case 'content_nodes': var content_nodes = __allkwargs0__ [__attrib0__]; break;
/* 000308 */ 					}
/* 000308 */ 				}
/* 000308 */ 			}
/* 000308 */ 		}
/* 000308 */ 		else {
/* 000308 */ 		}
/* 000310 */ 		var placement = (function () {
/* 000310 */ 			var __accu0__ = self;
/* 000310 */ 			return __call__ (__accu0__.parse_placement_spec, __accu0__, placement_spec);
/* 000310 */ 		}) ();
/* 000312 */ 		var cell = __call__ (CellModel, null, __kwargtrans__ ({placement: placement, styles: styles, content_nodes: content_nodes}));
/* 000317 */ 		(function () {
/* 000317 */ 			var __accu0__ = self.cells_data;
/* 000317 */ 			return __call__ (__accu0__.append, __accu0__, cell);
/* 000317 */ 		}) ();
/* 000320 */ 		if (__t__ (__t__ (__getitem__ (self.cells_size, 0) === null) || __ge__ (cell.placement.row_range.end, __getitem__ (self.cells_size, 0)))) {
/* 000321 */ 			__setitem__ (self.cells_size, 0, cell.placement.row_range.end);
/* 000321 */ 		}
/* 000322 */ 		if (__t__ (__t__ (__getitem__ (self.cells_size, 1) === null) || __ge__ (cell.placement.col_range.end, __getitem__ (self.cells_size, 1)))) {
/* 000323 */ 			__setitem__ (self.cells_size, 1, cell.placement.col_range.end);
/* 000323 */ 		}
/* 000325 */ 		(function () {
/* 000325 */ 			var __accu0__ = self;
/* 000325 */ 			return __call__ (__accu0__.move_to_col, __accu0__, cell.placement.col_range.end);
/* 000325 */ 		}) ();
/* 000327 */ 		return cell;
/* 000327 */ 	});},
/* 000329 */ 	get move_to_col () {return __get__ (this, function (self, col) {
/* 000329 */ 		if (arguments.length) {
/* 000329 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000329 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000329 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000329 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000329 */ 					switch (__attrib0__) {
/* 000329 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000329 */ 						case 'col': var col = __allkwargs0__ [__attrib0__]; break;
/* 000329 */ 					}
/* 000329 */ 				}
/* 000329 */ 			}
/* 000329 */ 		}
/* 000329 */ 		else {
/* 000329 */ 		}
/* 000330 */ 		self.current_col = col;
/* 000330 */ 	});},
/* 000332 */ 	get move_next_row () {return __get__ (this, function (self) {
/* 000332 */ 		if (arguments.length) {
/* 000332 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000332 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000332 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000332 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000332 */ 					switch (__attrib0__) {
/* 000332 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000332 */ 					}
/* 000332 */ 				}
/* 000332 */ 			}
/* 000332 */ 		}
/* 000332 */ 		else {
/* 000332 */ 		}
/* 000333 */ 		self.current_row = __call__ (__iadd__, null, self.current_row, 1);
/* 000334 */ 		self.current_col = 0;
/* 000334 */ 	});},
/* 000337 */ 	get finalize () {return __get__ (this, function (self) {
/* 000337 */ 		if (arguments.length) {
/* 000337 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000337 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000337 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000337 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000337 */ 					switch (__attrib0__) {
/* 000337 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000337 */ 					}
/* 000337 */ 				}
/* 000337 */ 			}
/* 000337 */ 		}
/* 000337 */ 		else {
/* 000337 */ 		}
/* 000339 */ 		self.grid_data = (function () {
/* 000339 */ 			var __accu0__ = [];
/* 000339 */ 			for (var _ = 0; _ < __getitem__ (self.cells_size, 0); _++) {
/* 000341 */ 				(function () {
/* 000341 */ 					var __accu1__ = __accu0__;
/* 000341 */ 					return __call__ (__accu1__.append, __accu1__, (function () {
/* 000341 */ 						var __accu2__ = [];
/* 000340 */ 						for (var _ = 0; _ < __getitem__ (self.cells_size, 1); _++) {
/* 000340 */ 							(function () {
/* 000340 */ 								var __accu3__ = __accu2__;
/* 000340 */ 								return __call__ (__accu3__.append, __accu3__, null);
/* 000340 */ 							}) ();
/* 000340 */ 						}
/* 000340 */ 						return __accu2__;
/* 000340 */ 					}) ());
/* 000340 */ 				}) ();
/* 000340 */ 			}
/* 000340 */ 			return __accu0__;
/* 000340 */ 		}) ();
/* 000343 */ 		var __iterable0__ = self.cells_data;
/* 000343 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000343 */ 			var cell = __getitem__ (__iterable0__, __index0__);
/* 000344 */ 			var is_topleft = true;
/* 000345 */ 			for (var rowidx = cell.placement.row_range.start; rowidx < cell.placement.row_range.end; rowidx++) {
/* 000347 */ 				for (var colidx = cell.placement.col_range.start; colidx < cell.placement.col_range.end; colidx++) {
/* 000349 */ 					if (__t__ (__getitem__ (__getitem__ (self.grid_data, rowidx), colidx) !== null)) {
/* 000350 */ 						var existing_cell = __getitem__ (__getitem__ (__getitem__ (self.grid_data, rowidx), colidx), 'cell');
/* 000352 */ 						var __except0__ = __call__ (ValueError, null, '‘{}’ overlaps with ‘{}’'.format (__call__ (repr, null, cell), __call__ (repr, null, existing_cell)));
/* 000352 */ 						__except0__.__cause__ = null;
/* 000352 */ 						throw __except0__;
/* 000352 */ 					}
/* 000355 */ 					__setitem__ (__getitem__ (self.grid_data, rowidx), colidx, dict ({'cell': cell, 'is_topleft': is_topleft}));
/* 000359 */ 					var is_topleft = false;
/* 000359 */ 				}
/* 000359 */ 			}
/* 000359 */ 		}
/* 000359 */ 	});},
/* 000364 */ 	get add_celldata_node () {return __get__ (this, function (self, celldata_node) {
/* 000364 */ 		if (arguments.length) {
/* 000364 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000364 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000364 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000364 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000364 */ 					switch (__attrib0__) {
/* 000364 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000364 */ 						case 'celldata_node': var celldata_node = __allkwargs0__ [__attrib0__]; break;
/* 000364 */ 					}
/* 000364 */ 				}
/* 000364 */ 			}
/* 000364 */ 		}
/* 000364 */ 		else {
/* 000364 */ 		}
/* 000366 */ 		var celldata_node_args = (function () {
/* 000366 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: celldata_node}));
/* 000366 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['styles_mapping', 'placement_mapping', 'celldata_contents']));
/* 000366 */ 		}) ();
/* 000370 */ 		var styles_mapping = (function () {
/* 000370 */ 			var __accu0__ = [];
/* 000373 */ 			var __iterable0__ = (function () {
/* 000373 */ 				var __accu1__ = (function () {
/* 000373 */ 					var __accu2__ = __getitem__ (celldata_node_args, 'styles_mapping');
/* 000373 */ 					return __call__ (__accu2__.get_content_as_chars, __accu2__);
/* 000373 */ 				}) ();
/* 000373 */ 				return __call__ (__accu1__.py_split, __accu1__, ',');
/* 000373 */ 			}) ();
/* 000373 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000373 */ 				var styles_spec = __getitem__ (__iterable0__, __index0__);
/* 000372 */ 				(function () {
/* 000372 */ 					var __accu1__ = __accu0__;
/* 000371 */ 					return __call__ (__accu1__.append, __accu1__, (function () {
/* 000371 */ 						var __accu2__ = styles_spec;
/* 000371 */ 						return __call__ (__accu2__.py_split, __accu2__);
/* 000371 */ 					}) ());
/* 000371 */ 				}) ();
/* 000371 */ 			}
/* 000371 */ 			return __accu0__;
/* 000371 */ 		}) ();
/* 000376 */ 		var placement_mapping_spec = (function () {
/* 000376 */ 			var __accu0__ = __getitem__ (celldata_node_args, 'placement_mapping');
/* 000376 */ 			return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000376 */ 		}) ();
/* 000378 */ 		var celldata_contents = (function () {
/* 000378 */ 			var __accu0__ = __getitem__ (celldata_node_args, 'celldata_contents');
/* 000378 */ 			return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000378 */ 		}) ();
/* 000382 */ 		var data_rows = (function () {
/* 000382 */ 			var __accu0__ = celldata_contents;
/* 000382 */ 			return __call__ (__accu0__.split_at_node, __accu0__, (function __lambda__ (node) {
/* 000382 */ 				if (arguments.length) {
/* 000382 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000382 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000382 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000382 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000382 */ 							switch (__attrib0__) {
/* 000382 */ 								case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000382 */ 							}
/* 000382 */ 						}
/* 000382 */ 					}
/* 000382 */ 				}
/* 000382 */ 				else {
/* 000382 */ 				}
/* 000384 */ 				return __t__ ((function () {
/* 000384 */ 					var __accu1__ = node;
/* 000384 */ 					return __call__ (__accu1__.isNodeType, __accu1__, latexnodes_nodes.LatexMacroNode);
/* 000384 */ 				}) ()) && __eq__ (node.macroname, '\\');
/* 000384 */ 			}));
/* 000384 */ 		}) ();
/* 000389 */ 		var split_columns_predicate_fn = function (node) {
/* 000389 */ 			if (arguments.length) {
/* 000389 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000389 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000389 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000389 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000389 */ 						switch (__attrib0__) {
/* 000389 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000389 */ 						}
/* 000389 */ 					}
/* 000389 */ 				}
/* 000389 */ 			}
/* 000389 */ 			else {
/* 000389 */ 			}
/* 000391 */ 			if (__t__ (__t__ ((function () {
/* 000391 */ 				var __accu0__ = node;
/* 000391 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexSpecialsNode);
/* 000391 */ 			}) ()) && __eq__ (node.specials_chars, '&'))) {
/* 000393 */ 				return true;
/* 000393 */ 			}
/* 000394 */ 			return false;
/* 000394 */ 		};
/* 000396 */ 		var data_content_nodes = (function () {
/* 000396 */ 			var __accu0__ = [];
/* 000396 */ 			var __iterable0__ = data_rows;
/* 000396 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000398 */ 				var data_row = __getitem__ (__iterable0__, __index0__);
/* 000398 */ 				(function () {
/* 000398 */ 					var __accu1__ = __accu0__;
/* 000397 */ 					return __call__ (__accu1__.append, __accu1__, (function () {
/* 000397 */ 						var __accu2__ = data_row;
/* 000397 */ 						return __call__ (__accu2__.split_at_node, __accu2__, split_columns_predicate_fn);
/* 000397 */ 					}) ());
/* 000397 */ 				}) ();
/* 000397 */ 			}
/* 000397 */ 			return __accu0__;
/* 000397 */ 		}) ();
/* 000401 */ 		// pass;
/* 000405 */ 		(function () {
/* 000405 */ 			var __accu0__ = self;
/* 000405 */ 			return __call__ (__accu0__.add_celldata, __accu0__, placement_mapping_spec, styles_mapping, data_content_nodes);
/* 000405 */ 		}) ();
/* 000405 */ 	});},
/* 000408 */ 	get add_celldata () {return __get__ (this, function (self, placement_mapping_spec, styles_mapping, data_content_nodes) {
/* 000408 */ 		if (arguments.length) {
/* 000408 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000408 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000408 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000408 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000408 */ 					switch (__attrib0__) {
/* 000408 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000408 */ 						case 'placement_mapping_spec': var placement_mapping_spec = __allkwargs0__ [__attrib0__]; break;
/* 000408 */ 						case 'styles_mapping': var styles_mapping = __allkwargs0__ [__attrib0__]; break;
/* 000408 */ 						case 'data_content_nodes': var data_content_nodes = __allkwargs0__ [__attrib0__]; break;
/* 000408 */ 					}
/* 000408 */ 				}
/* 000408 */ 			}
/* 000408 */ 		}
/* 000408 */ 		else {
/* 000408 */ 		}
/* 000410 */ 		var placement_mapping = (function () {
/* 000410 */ 			var __accu0__ = self;
/* 000410 */ 			return __call__ (__accu0__.parse_placement_mapping_spec, __accu0__, placement_mapping_spec);
/* 000410 */ 		}) ();
/* 000414 */ 		// pass;
/* 000418 */ 		var __left0__ = (function () {
/* 000418 */ 			var __accu0__ = placement_mapping;
/* 000418 */ 			return __call__ (__accu0__.start_row_col, __accu0__, __kwargtrans__ ({current_row: self.current_row, current_col: self.current_col}));
/* 000418 */ 		}) ();
/* 000418 */ 		self.current_row = __left0__ [0];
/* 000418 */ 		self.current_col = __left0__ [1];
/* 000422 */ 		var data_row_j = 0;
/* 000423 */ 		var __iterable0__ = data_content_nodes;
/* 000423 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000423 */ 			var data_row_data = __getitem__ (__iterable0__, __index0__);
/* 000425 */ 			var data_col_j = 0;
/* 000426 */ 			var __iterable1__ = data_row_data;
/* 000426 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000426 */ 				var cell_content = __getitem__ (__iterable1__, __index1__);
/* 000428 */ 				var row_range = (function () {
/* 000428 */ 					var __accu0__ = placement_mapping;
/* 000428 */ 					return __call__ (__accu0__.get_row_index_range, __accu0__, data_row_j, __kwargtrans__ ({current_row: self.current_row}));
/* 000428 */ 				}) ();
/* 000431 */ 				var col_range = (function () {
/* 000431 */ 					var __accu0__ = placement_mapping;
/* 000431 */ 					return __call__ (__accu0__.get_col_index_range, __accu0__, data_col_j, __kwargtrans__ ({current_col: self.current_col}));
/* 000431 */ 				}) ();
/* 000434 */ 				var placement = __call__ (CellPlacementModel, null, __kwargtrans__ ({row_range: row_range, col_range: col_range}));
/* 000439 */ 				if (__t__ (__lt__ (data_col_j, __call__ (len, null, styles_mapping)))) {
/* 000440 */ 					var styles = __getitem__ (styles_mapping, data_col_j);
/* 000440 */ 				}
/* 000441 */ 				else {
/* 000442 */ 					var styles = __getitem__ (styles_mapping, __neg__ (1));
/* 000442 */ 				}
/* 000445 */ 				var cell_content_nl = (function () {
/* 000445 */ 					var __accu0__ = cell_content.latex_walker;
/* 000445 */ 					return __call__ (__accu0__.filter_whitespace_comments_nodes, __accu0__, cell_content);
/* 000445 */ 				}) ();
/* 000449 */ 				// pass;
/* 000457 */ 				if (__t__ (__t__ (__eq__ (__call__ (len, null, cell_content_nl), 1)) && __t__ ((function () {
/* 000457 */ 					var __accu0__ = __getitem__ (cell_content_nl, 0);
/* 000457 */ 					return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000457 */ 				}) ()) && __eq__ (__getitem__ (cell_content_nl, 0).macroname, 'cell'))) {
/* 000460 */ 					var cell = (function () {
/* 000460 */ 						var __accu0__ = self;
/* 000460 */ 						return __call__ (__accu0__.add_cell_node, __accu0__, __getitem__ (cell_content_nl, 0), __kwargtrans__ ({default_placement: placement, default_styles: styles}));
/* 000460 */ 					}) ();
/* 000463 */ 					var data_col_j = __call__ (__iadd__, null, data_col_j, __sub__ (cell.placement.col_range.end, cell.placement.col_range.start));
/* 000463 */ 				}
/* 000466 */ 				else if (__t__ (__eq__ (__call__ (len, null, cell_content_nl), 0))) {
/* 000469 */ 					self.current_col = col_range.end;
/* 000470 */ 					var data_col_j = __call__ (__iadd__, null, data_col_j, 1);
/* 000470 */ 				}
/* 000471 */ 				else {
/* 000473 */ 					(function () {
/* 000473 */ 						var __accu0__ = self;
/* 000473 */ 						return __call__ (__accu0__.add_cell, __accu0__, placement, styles, cell_content);
/* 000473 */ 					}) ();
/* 000474 */ 					var data_col_j = __call__ (__iadd__, null, data_col_j, 1);
/* 000474 */ 				}
/* 000474 */ 			}
/* 000476 */ 			(function () {
/* 000476 */ 				var __accu0__ = self;
/* 000476 */ 				return __call__ (__accu0__.move_next_row, __accu0__);
/* 000476 */ 			}) ();
/* 000477 */ 			var data_row_j = __call__ (__iadd__, null, data_row_j, 1);
/* 000478 */ 			var data_col_j = 0;
/* 000478 */ 		}
/* 000478 */ 	});},
/* 000483 */ 	_rx_int: (function () {
/* 000483 */ 		var __accu0__ = re;
/* 000483 */ 		return __call__ (__accu0__.compile, __accu0__, '^\\d+$');
/* 000483 */ 	}) (),
/* 000485 */ 	get parse_cell_index_spec () {return __get__ (this, function (self, index_spec, is_row, is_col, py_default) {
/* 000485 */ 		if (typeof is_row == 'undefined' || (is_row != null && is_row.hasOwnProperty ("__kwargtrans__"))) {;
/* 000485 */ 			var is_row = false;
/* 000485 */ 		};
/* 000485 */ 		if (typeof is_col == 'undefined' || (is_col != null && is_col.hasOwnProperty ("__kwargtrans__"))) {;
/* 000485 */ 			var is_col = false;
/* 000485 */ 		};
/* 000485 */ 		if (typeof py_default == 'undefined' || (py_default != null && py_default.hasOwnProperty ("__kwargtrans__"))) {;
/* 000485 */ 			var py_default = _NotSpecified;
/* 000485 */ 		};
/* 000485 */ 		if (arguments.length) {
/* 000485 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000485 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000485 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000485 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000485 */ 					switch (__attrib0__) {
/* 000485 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000485 */ 						case 'index_spec': var index_spec = __allkwargs0__ [__attrib0__]; break;
/* 000485 */ 						case 'is_row': var is_row = __allkwargs0__ [__attrib0__]; break;
/* 000485 */ 						case 'is_col': var is_col = __allkwargs0__ [__attrib0__]; break;
/* 000485 */ 						case 'py_default': var py_default = __allkwargs0__ [__attrib0__]; break;
/* 000485 */ 					}
/* 000485 */ 				}
/* 000485 */ 			}
/* 000485 */ 		}
/* 000485 */ 		else {
/* 000485 */ 		}
/* 000488 */ 		if (__t__ (__call__ (isinstance, null, index_spec, str))) {
/* 000489 */ 			var index_spec_s = index_spec;
/* 000489 */ 		}
/* 000490 */ 		else {
/* 000492 */ 			var index_spec_s = (function () {
/* 000492 */ 				var __accu0__ = index_spec;
/* 000492 */ 				return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000492 */ 			}) ();
/* 000492 */ 		}
/* 000494 */ 		var index_spec_s = (function () {
/* 000494 */ 			var __accu0__ = index_spec_s;
/* 000494 */ 			return __call__ (__accu0__.strip, __accu0__);
/* 000494 */ 		}) ();
/* 000497 */ 		if (__t__ (__t__ (!__t__ ((index_spec_s))) || __eq__ (index_spec_s, '.'))) {
/* 000498 */ 			if (__t__ (py_default !== _NotSpecified)) {
/* 000499 */ 				return py_default;
/* 000499 */ 			}
/* 000500 */ 			if (__t__ (is_row)) {
/* 000501 */ 				return self.current_row;
/* 000501 */ 			}
/* 000502 */ 			if (__t__ (is_col)) {
/* 000503 */ 				return self.current_col;
/* 000503 */ 			}
/* 000504 */ 			var __except0__ = __call__ (RuntimeError, null, 'Internal error: Neither is_row nor is_col is set!');
/* 000504 */ 			__except0__.__cause__ = null;
/* 000504 */ 			throw __except0__;
/* 000504 */ 		}
/* 000507 */ 		if (__t__ ((function () {
/* 000507 */ 			var __accu0__ = self._rx_int;
/* 000507 */ 			return __call__ (__accu0__.match, __accu0__, index_spec_s);
/* 000507 */ 		}) ())) {
/* 000508 */ 			return __sub__ (__call__ (int, null, index_spec_s), 1);
/* 000508 */ 		}
/* 000511 */ 		if (__t__ (__t__ (is_row) && __in__ (index_spec_s, self.row_names))) {
/* 000512 */ 			return __getitem__ (self.row_names, index_spec_s);
/* 000512 */ 		}
/* 000513 */ 		if (__t__ (__t__ (is_col) && __in__ (index_spec_s, self.col_names))) {
/* 000514 */ 			return __getitem__ (self.col_names, index_spec_s);
/* 000514 */ 		}
/* 000516 */ 		var __except0__ = __call__ (ValueError, null, 'Invalid cell index: ‘{}’, expected number or valid alias name'.format (index_spec_s));
/* 000516 */ 		__except0__.__cause__ = null;
/* 000516 */ 		throw __except0__;
/* 000516 */ 	});},
/* 000520 */ 	get parse_cell_index_range_spec () {return __get__ (this, function (self, range_spec_s, is_row, is_col, py_default, default_start, default_end) {
/* 000520 */ 		if (typeof is_row == 'undefined' || (is_row != null && is_row.hasOwnProperty ("__kwargtrans__"))) {;
/* 000520 */ 			var is_row = false;
/* 000520 */ 		};
/* 000520 */ 		if (typeof is_col == 'undefined' || (is_col != null && is_col.hasOwnProperty ("__kwargtrans__"))) {;
/* 000520 */ 			var is_col = false;
/* 000520 */ 		};
/* 000520 */ 		if (typeof py_default == 'undefined' || (py_default != null && py_default.hasOwnProperty ("__kwargtrans__"))) {;
/* 000520 */ 			var py_default = _NotSpecified;
/* 000520 */ 		};
/* 000520 */ 		if (typeof default_start == 'undefined' || (default_start != null && default_start.hasOwnProperty ("__kwargtrans__"))) {;
/* 000520 */ 			var default_start = null;
/* 000520 */ 		};
/* 000520 */ 		if (typeof default_end == 'undefined' || (default_end != null && default_end.hasOwnProperty ("__kwargtrans__"))) {;
/* 000520 */ 			var default_end = null;
/* 000520 */ 		};
/* 000520 */ 		if (arguments.length) {
/* 000520 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000520 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000520 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000520 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000520 */ 					switch (__attrib0__) {
/* 000520 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000520 */ 						case 'range_spec_s': var range_spec_s = __allkwargs0__ [__attrib0__]; break;
/* 000520 */ 						case 'is_row': var is_row = __allkwargs0__ [__attrib0__]; break;
/* 000520 */ 						case 'is_col': var is_col = __allkwargs0__ [__attrib0__]; break;
/* 000520 */ 						case 'py_default': var py_default = __allkwargs0__ [__attrib0__]; break;
/* 000520 */ 						case 'default_start': var default_start = __allkwargs0__ [__attrib0__]; break;
/* 000520 */ 						case 'default_end': var default_end = __allkwargs0__ [__attrib0__]; break;
/* 000520 */ 					}
/* 000520 */ 				}
/* 000520 */ 			}
/* 000520 */ 		}
/* 000520 */ 		else {
/* 000520 */ 		}
/* 000524 */ 		if (__t__ (__in__ (',', range_spec_s))) {
/* 000526 */ 			var parts = (function () {
/* 000526 */ 				var __accu0__ = range_spec_s;
/* 000526 */ 				return __call__ (__accu0__.py_split, __accu0__, ',');
/* 000526 */ 			}) ();
/* 000527 */ 			var include_array = [];
/* 000528 */ 			var overall_start = null;
/* 000529 */ 			var overall_end = null;
/* 000530 */ 			var __iterable0__ = parts;
/* 000530 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000530 */ 				var part = __getitem__ (__iterable0__, __index0__);
/* 000531 */ 				var __left0__ = (function () {
/* 000531 */ 					var __accu0__ = self;
/* 000531 */ 					return __call__ (__accu0__.parse_cell_index_range_spec, __accu0__, part, __kwargtrans__ ({is_row: is_row, is_col: is_col, py_default: py_default}));
/* 000531 */ 				}) ();
/* 000531 */ 				var start = __left0__ [0];
/* 000531 */ 				var end = __left0__ [1];
/* 000535 */ 				for (var idx = start; idx < end; idx++) {
/* 000536 */ 					if (__t__ (__ge__ (idx, __call__ (len, null, include_array)))) {
/* 000537 */ 						var include_array = __call__ (__iadd__, null, include_array, (function () {
/* 000537 */ 							var __accu0__ = [];
/* 000537 */ 							for (var _ = 0; _ < __add__ (__sub__ (end, __call__ (len, null, include_array)), 1); _++) {
/* 000537 */ 								(function () {
/* 000537 */ 									var __accu1__ = __accu0__;
/* 000537 */ 									return __call__ (__accu1__.append, __accu1__, false);
/* 000537 */ 								}) ();
/* 000537 */ 							}
/* 000537 */ 							return __accu0__;
/* 000537 */ 						}) ());
/* 000537 */ 					}
/* 000538 */ 					__setitem__ (include_array, idx, true);
/* 000538 */ 				}
/* 000539 */ 				if (__t__ (__t__ (overall_start === null) || __gt__ (overall_start, start))) {
/* 000540 */ 					var overall_start = start;
/* 000540 */ 				}
/* 000541 */ 				if (__t__ (__t__ (overall_end === null) || __lt__ (overall_end, end))) {
/* 000542 */ 					var overall_end = end;
/* 000542 */ 				}
/* 000542 */ 			}
/* 000544 */ 			for (var idx = overall_start; idx < overall_end; idx++) {
/* 000545 */ 				if (__t__ (!__t__ ((__getitem__ (include_array, idx))))) {
/* 000546 */ 					var __except0__ = __call__ (ValueError, null, 'Specified range ‘{}’ is not contiguous'.format (range_spec_s));
/* 000546 */ 					__except0__.__cause__ = null;
/* 000546 */ 					throw __except0__;
/* 000546 */ 				}
/* 000546 */ 			}
/* 000549 */ 			return tuple ([overall_start, overall_end]);
/* 000549 */ 		}
/* 000551 */ 		if (__t__ (__in__ ('-', range_spec_s))) {
/* 000553 */ 			var __left0__ = (function () {
/* 000553 */ 				var __accu0__ = range_spec_s;
/* 000553 */ 				return __call__ (__accu0__.py_split, __accu0__, '-', 1);
/* 000553 */ 			}) ();
/* 000553 */ 			var start_spec = __left0__ [0];
/* 000553 */ 			var end_spec = __left0__ [1];
/* 000554 */ 			var start = (function () {
/* 000554 */ 				var __accu0__ = self;
/* 000554 */ 				return __call__ (__accu0__.parse_cell_index_spec, __accu0__, start_spec, __kwargtrans__ ({is_row: is_row, is_col: is_col, py_default: default_start}));
/* 000554 */ 			}) ();
/* 000557 */ 			var end_incl = (function () {
/* 000557 */ 				var __accu0__ = self;
/* 000557 */ 				return __call__ (__accu0__.parse_cell_index_spec, __accu0__, end_spec, __kwargtrans__ ({is_row: is_row, is_col: is_col, py_default: null}));
/* 000557 */ 			}) ();
/* 000560 */ 			if (__t__ (end_incl === null)) {
/* 000561 */ 				var end = default_end;
/* 000561 */ 			}
/* 000562 */ 			else {
/* 000563 */ 				var end = __add__ (end_incl, 1);
/* 000563 */ 			}
/* 000564 */ 			return tuple ([start, end]);
/* 000564 */ 		}
/* 000566 */ 		if (__t__ (__in__ ('+', range_spec_s))) {
/* 000568 */ 			var __left0__ = (function () {
/* 000568 */ 				var __accu0__ = range_spec_s;
/* 000568 */ 				return __call__ (__accu0__.py_split, __accu0__, '+', 1);
/* 000568 */ 			}) ();
/* 000568 */ 			var start_spec = __left0__ [0];
/* 000568 */ 			var len_spec = __left0__ [1];
/* 000569 */ 			var start = (function () {
/* 000569 */ 				var __accu0__ = self;
/* 000569 */ 				return __call__ (__accu0__.parse_cell_index_spec, __accu0__, start_spec, __kwargtrans__ ({is_row: is_row, is_col: is_col, py_default: py_default}));
/* 000569 */ 			}) ();
/* 000572 */ 			if (__t__ (!__t__ (((function () {
/* 000572 */ 				var __accu0__ = self._rx_int;
/* 000572 */ 				return __call__ (__accu0__.match, __accu0__, len_spec);
/* 000572 */ 			}) ())))) {
/* 000573 */ 				var __except0__ = __call__ (ValueError, null, 'Invalid number in ‘START+N’ cell index range specification: ‘{}’'.format (len_spec));
/* 000573 */ 				__except0__.__cause__ = null;
/* 000573 */ 				throw __except0__;
/* 000573 */ 			}
/* 000576 */ 			var range_len = __call__ (int, null, len_spec);
/* 000579 */ 			var end = __add__ (start, range_len);
/* 000580 */ 			return tuple ([start, end]);
/* 000580 */ 		}
/* 000582 */ 		var idx = (function () {
/* 000582 */ 			var __accu0__ = self;
/* 000582 */ 			return __call__ (__accu0__.parse_cell_index_spec, __accu0__, range_spec_s, __kwargtrans__ ({is_row: is_row, is_col: is_col, py_default: py_default}));
/* 000582 */ 		}) ();
/* 000585 */ 		return tuple ([idx, __add__ (idx, 1)]);
/* 000585 */ 	});},
/* 000588 */ 	get parse_placement_index_spec () {return __get__ (this, function (self, placement_index_spec, is_row, is_col, py_default, default_start, default_end) {
/* 000588 */ 		if (typeof is_row == 'undefined' || (is_row != null && is_row.hasOwnProperty ("__kwargtrans__"))) {;
/* 000588 */ 			var is_row = false;
/* 000588 */ 		};
/* 000588 */ 		if (typeof is_col == 'undefined' || (is_col != null && is_col.hasOwnProperty ("__kwargtrans__"))) {;
/* 000588 */ 			var is_col = false;
/* 000588 */ 		};
/* 000588 */ 		if (typeof py_default == 'undefined' || (py_default != null && py_default.hasOwnProperty ("__kwargtrans__"))) {;
/* 000588 */ 			var py_default = _NotSpecified;
/* 000588 */ 		};
/* 000588 */ 		if (typeof default_start == 'undefined' || (default_start != null && default_start.hasOwnProperty ("__kwargtrans__"))) {;
/* 000588 */ 			var default_start = 0;
/* 000588 */ 		};
/* 000588 */ 		if (typeof default_end == 'undefined' || (default_end != null && default_end.hasOwnProperty ("__kwargtrans__"))) {;
/* 000588 */ 			var default_end = _NotSpecified;
/* 000588 */ 		};
/* 000588 */ 		if (arguments.length) {
/* 000588 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000588 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000588 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000588 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000588 */ 					switch (__attrib0__) {
/* 000588 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000588 */ 						case 'placement_index_spec': var placement_index_spec = __allkwargs0__ [__attrib0__]; break;
/* 000588 */ 						case 'is_row': var is_row = __allkwargs0__ [__attrib0__]; break;
/* 000588 */ 						case 'is_col': var is_col = __allkwargs0__ [__attrib0__]; break;
/* 000588 */ 						case 'py_default': var py_default = __allkwargs0__ [__attrib0__]; break;
/* 000588 */ 						case 'default_start': var default_start = __allkwargs0__ [__attrib0__]; break;
/* 000588 */ 						case 'default_end': var default_end = __allkwargs0__ [__attrib0__]; break;
/* 000588 */ 					}
/* 000588 */ 				}
/* 000588 */ 			}
/* 000588 */ 		}
/* 000588 */ 		else {
/* 000588 */ 		}
/* 000593 */ 		if (__t__ (__eq__ (__call__ (len, null, placement_index_spec), 0))) {
/* 000594 */ 			if (__t__ (is_row)) {
/* 000595 */ 				return __call__ (CellIndexRangeModel, null, __kwargtrans__ ({start: self.current_row, end: __add__ (self.current_row, 1)}));
/* 000595 */ 			}
/* 000596 */ 			else if (__t__ (is_col)) {
/* 000597 */ 				return __call__ (CellIndexRangeModel, null, __kwargtrans__ ({start: self.current_col, end: __add__ (self.current_col, 1)}));
/* 000597 */ 			}
/* 000598 */ 			else {
/* 000599 */ 				var __except0__ = __call__ (RuntimeError, null, 'Internal error, neither is_row nor is_col was set here.');
/* 000599 */ 				__except0__.__cause__ = null;
/* 000599 */ 				throw __except0__;
/* 000599 */ 			}
/* 000599 */ 		}
/* 000601 */ 		var nl = (function () {
/* 000601 */ 			var __accu0__ = placement_index_spec.latex_walker;
/* 000601 */ 			return __call__ (__accu0__.filter_whitespace_comments_nodes, __accu0__, placement_index_spec);
/* 000601 */ 		}) ();
/* 000605 */ 		if (__t__ (__ne__ (__call__ (len, null, nl), 1))) {
/* 000606 */ 			if (__t__ (is_row)) {
/* 000607 */ 				var PLACEHOLDER = 'ROW';
/* 000607 */ 			}
/* 000608 */ 			else if (__t__ (is_col)) {
/* 000609 */ 				var PLACEHOLDER = 'COL';
/* 000609 */ 			}
/* 000610 */ 			else {
/* 000611 */ 				var PLACEHOLDER = null;
/* 000611 */ 			}
/* 000615 */ 			var __except0__ = __call__ (LatexWalkerParseError, null, 'Bad cell index or merge range specification, expected ‘{}’ or ‘\\merge{}{}-RANGE{}’, got {} ({} nodes)'.format (PLACEHOLDER, '{', PLACEHOLDER, '}', __call__ (repr, null, placement_index_spec), __call__ (len, null, nl)), __kwargtrans__ ({pos: nl.pos}));
/* 000615 */ 			__except0__.__cause__ = null;
/* 000615 */ 			throw __except0__;
/* 000615 */ 		}
/* 000619 */ 		var node = __getitem__ (nl, 0);
/* 000621 */ 		if (__t__ (__t__ ((function () {
/* 000621 */ 			var __accu0__ = node;
/* 000621 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000621 */ 		}) ()) && __eq__ (node.macroname, 'merge'))) {
/* 000625 */ 			var merge_node_args = (function () {
/* 000625 */ 				var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000625 */ 				return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['mergespec']));
/* 000625 */ 			}) ();
/* 000629 */ 			var range_spec_s = (function () {
/* 000629 */ 				var __accu0__ = __getitem__ (merge_node_args, 'mergespec');
/* 000629 */ 				return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000629 */ 			}) ();
/* 000631 */ 			var default_end_computed = default_end;
/* 000632 */ 			if (__t__ (default_end_computed === _NotSpecified)) {
/* 000633 */ 				if (__t__ (is_row)) {
/* 000634 */ 					var default_end_computed = __getitem__ (self.cells_size, 0);
/* 000634 */ 				}
/* 000635 */ 				if (__t__ (is_col)) {
/* 000636 */ 					var default_end_computed = __getitem__ (self.cells_size, 1);
/* 000636 */ 				}
/* 000636 */ 			}
/* 000638 */ 			var __left0__ = (function () {
/* 000638 */ 				var __accu0__ = self;
/* 000638 */ 				return __call__ (__accu0__.parse_cell_index_range_spec, __accu0__, range_spec_s, __kwargtrans__ ({is_row: is_row, is_col: is_col, default_start: default_start, default_end: default_end_computed}));
/* 000638 */ 			}) ();
/* 000638 */ 			var start = __left0__ [0];
/* 000638 */ 			var end = __left0__ [1];
/* 000643 */ 			return __call__ (CellIndexRangeModel, null, __kwargtrans__ ({start: start, end: end}));
/* 000643 */ 		}
/* 000646 */ 		var idx = (function () {
/* 000646 */ 			var __accu0__ = self;
/* 000647 */ 			return __call__ (__accu0__.parse_cell_index_spec, __accu0__, (function () {
/* 000647 */ 				var __accu1__ = nl;
/* 000647 */ 				return __call__ (__accu1__.get_content_as_chars, __accu1__);
/* 000647 */ 			}) (), __kwargtrans__ ({is_row: is_row, is_col: is_col, py_default: py_default}));
/* 000647 */ 		}) ();
/* 000650 */ 		return __call__ (CellIndexRangeModel, null, __kwargtrans__ ({start: idx, end: __add__ (idx, 1)}));
/* 000650 */ 	});},
/* 000653 */ 	get parse_placement_spec () {return __get__ (this, function (self, placement_spec) {
/* 000653 */ 		if (arguments.length) {
/* 000653 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000653 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000653 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000653 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000653 */ 					switch (__attrib0__) {
/* 000653 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000653 */ 						case 'placement_spec': var placement_spec = __allkwargs0__ [__attrib0__]; break;
/* 000653 */ 					}
/* 000653 */ 				}
/* 000653 */ 			}
/* 000653 */ 		}
/* 000653 */ 		else {
/* 000653 */ 		}
/* 000655 */ 		if (__t__ (__call__ (isinstance, null, placement_spec, CellPlacementModel))) {
/* 000656 */ 			return placement_spec;
/* 000656 */ 		}
/* 000658 */ 		var __left0__ = tuple ([[], []]);
/* 000658 */ 		var row_spec_nl = __left0__ [0];
/* 000658 */ 		var col_spec_nl = __left0__ [1];
/* 000660 */ 		if (__t__ (placement_spec !== null)) {
/* 000662 */ 			var placement_spec_split = (function () {
/* 000662 */ 				var __accu0__ = placement_spec;
/* 000662 */ 				return __call__ (__accu0__.split_at_chars, __accu0__, ';', __kwargtrans__ ({keep_empty: true}));
/* 000662 */ 			}) ();
/* 000664 */ 			if (__t__ (__eq__ (__call__ (len, null, placement_spec_split), 2))) {
/* 000666 */ 				var __left0__ = placement_spec_split;
/* 000666 */ 				var row_spec_nl = __left0__ [0];
/* 000666 */ 				var col_spec_nl = __left0__ [1];
/* 000666 */ 			}
/* 000668 */ 			else if (__t__ (__eq__ (__call__ (len, null, placement_spec_split), 1))) {
/* 000670 */ 				var __left0__ = placement_spec_split;
/* 000670 */ 				var col_spec_nl = __left0__ [0];
/* 000670 */ 			}
/* 000672 */ 			else if (__t__ (__eq__ (__call__ (len, null, placement_spec_split), 0))) {
/* 000675 */ 				// pass;
/* 000675 */ 			}
/* 000676 */ 			else {
/* 000681 */ 				var __except0__ = __call__ (LatexWalkerParseError, null, 'Bad cell placement specification, expected ‘ROW;COL’ or ‘COL’, got ‘{}’'.format (__call__ (_splfysidews, null, (function () {
/* 000681 */ 					var __accu0__ = placement_spec;
/* 000681 */ 					return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000681 */ 				}) ())), __kwargtrans__ ({pos: placement_spec.pos}));
/* 000681 */ 				__except0__.__cause__ = null;
/* 000681 */ 				throw __except0__;
/* 000681 */ 			}
/* 000681 */ 		}
/* 000685 */ 		var row_range = (function () {
/* 000685 */ 			var __accu0__ = self;
/* 000685 */ 			return __call__ (__accu0__.parse_placement_index_spec, __accu0__, row_spec_nl, __kwargtrans__ ({is_row: true}));
/* 000685 */ 		}) ();
/* 000686 */ 		var col_range = (function () {
/* 000686 */ 			var __accu0__ = self;
/* 000686 */ 			return __call__ (__accu0__.parse_placement_index_spec, __accu0__, col_spec_nl, __kwargtrans__ ({is_col: true}));
/* 000686 */ 		}) ();
/* 000688 */ 		return __call__ (CellPlacementModel, null, __kwargtrans__ ({row_range: row_range, col_range: col_range}));
/* 000688 */ 	});},
/* 000693 */ 	get parse_placement_mapping_index_spec () {return __get__ (this, function (self, placement_mapping_index_spec, index_end, is_row, is_col) {
/* 000693 */ 		if (typeof is_row == 'undefined' || (is_row != null && is_row.hasOwnProperty ("__kwargtrans__"))) {;
/* 000693 */ 			var is_row = false;
/* 000693 */ 		};
/* 000693 */ 		if (typeof is_col == 'undefined' || (is_col != null && is_col.hasOwnProperty ("__kwargtrans__"))) {;
/* 000693 */ 			var is_col = false;
/* 000693 */ 		};
/* 000693 */ 		if (arguments.length) {
/* 000693 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000693 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000693 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000693 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000693 */ 					switch (__attrib0__) {
/* 000693 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000693 */ 						case 'placement_mapping_index_spec': var placement_mapping_index_spec = __allkwargs0__ [__attrib0__]; break;
/* 000693 */ 						case 'index_end': var index_end = __allkwargs0__ [__attrib0__]; break;
/* 000693 */ 						case 'is_row': var is_row = __allkwargs0__ [__attrib0__]; break;
/* 000693 */ 						case 'is_col': var is_col = __allkwargs0__ [__attrib0__]; break;
/* 000693 */ 					}
/* 000693 */ 				}
/* 000693 */ 			}
/* 000693 */ 		}
/* 000693 */ 		else {
/* 000693 */ 		}
/* 000696 */ 		if (__t__ (__eq__ (__call__ (len, null, placement_mapping_index_spec), 0))) {
/* 000698 */ 			return [];
/* 000698 */ 		}
/* 000700 */ 		var parts = (function () {
/* 000700 */ 			var __accu0__ = placement_mapping_index_spec;
/* 000700 */ 			return __call__ (__accu0__.split_at_chars, __accu0__, ',', __kwargtrans__ ({keep_empty: true}));
/* 000700 */ 		}) ();
/* 000703 */ 		var current_idx = 0;
/* 000705 */ 		var index_placements = [];
/* 000706 */ 		var __iterable0__ = parts;
/* 000706 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000706 */ 			var placement_part_spec = __getitem__ (__iterable0__, __index0__);
/* 000711 */ 			var nl = (function () {
/* 000711 */ 				var __accu0__ = placement_part_spec.latex_walker;
/* 000711 */ 				return __call__ (__accu0__.filter_whitespace_comments_nodes, __accu0__, placement_part_spec);
/* 000711 */ 			}) ();
/* 000715 */ 			if (__t__ (__ne__ (__call__ (len, null, nl), 1))) {
/* 000716 */ 				if (__t__ (is_row)) {
/* 000717 */ 					var PLACEHOLDER = 'ROW-RANGE';
/* 000717 */ 				}
/* 000718 */ 				else if (__t__ (is_col)) {
/* 000719 */ 					var PLACEHOLDER = 'COL-RANGE';
/* 000719 */ 				}
/* 000720 */ 				else {
/* 000721 */ 					var PLACEHOLDER = null;
/* 000721 */ 				}
/* 000726 */ 				var __except0__ = __call__ (LatexWalkerParseError, null, 'Bad cell index or range or merge range specification, expected ‘{}’ or ‘\\merge{}{}-RANGE{}’, got {} ({} nodes)'.format (PLACEHOLDER, '{', PLACEHOLDER, '}', __call__ (repr, null, placement_index_spec), __call__ (len, null, nl)), __kwargtrans__ ({pos: nl.pos}));
/* 000726 */ 				__except0__.__cause__ = null;
/* 000726 */ 				throw __except0__;
/* 000726 */ 			}
/* 000730 */ 			var node = __getitem__ (nl, 0);
/* 000732 */ 			if (__t__ (__t__ ((function () {
/* 000732 */ 				var __accu0__ = node;
/* 000732 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000732 */ 			}) ()) && __eq__ (node.macroname, 'merge'))) {
/* 000736 */ 				var merge_node_args = (function () {
/* 000736 */ 					var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000736 */ 					return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['mergespec']));
/* 000736 */ 				}) ();
/* 000740 */ 				var range_spec_s = (function () {
/* 000740 */ 					var __accu0__ = __getitem__ (merge_node_args, 'mergespec');
/* 000740 */ 					return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000740 */ 				}) ();
/* 000742 */ 				var __left0__ = (function () {
/* 000742 */ 					var __accu0__ = self;
/* 000742 */ 					return __call__ (__accu0__.parse_cell_index_range_spec, __accu0__, range_spec_s, __kwargtrans__ ({is_row: is_row, is_col: is_col, py_default: current_idx, default_start: current_idx, default_end: null}));
/* 000742 */ 				}) ();
/* 000742 */ 				var start = __left0__ [0];
/* 000742 */ 				var end = __left0__ [1];
/* 000748 */ 				(function () {
/* 000748 */ 					var __accu0__ = index_placements;
/* 000748 */ 					return __call__ (__accu0__.append, __accu0__, __call__ (CellIndexRangeModel, null, __kwargtrans__ ({start: start, end: end})));
/* 000748 */ 				}) ();
/* 000749 */ 				var current_idx = end;
/* 000749 */ 				continue;
/* 000749 */ 			}
/* 000753 */ 			var __left0__ = (function () {
/* 000753 */ 				var __accu0__ = self;
/* 000754 */ 				return __call__ (__accu0__.parse_cell_index_range_spec, __accu0__, (function () {
/* 000754 */ 					var __accu1__ = nl;
/* 000754 */ 					return __call__ (__accu1__.get_content_as_chars, __accu1__);
/* 000754 */ 				}) (), __kwargtrans__ ({is_row: is_row, is_col: is_col, py_default: current_idx, default_start: current_idx, default_end: null}));
/* 000754 */ 			}) ();
/* 000754 */ 			var iter_start = __left0__ [0];
/* 000754 */ 			var iter_end = __left0__ [1];
/* 000762 */ 			if (__t__ (iter_end === null)) {
/* 000763 */ 				(function () {
/* 000763 */ 					var __accu0__ = index_placements;
/* 000763 */ 					return __call__ (__accu0__.append, __accu0__, __call__ (CellIndexRangeModel, null, __kwargtrans__ ({start: iter_start, end: null})));
/* 000763 */ 				}) ();
/* 000764 */ 				var current_idx = null;
/* 000764 */ 			}
/* 000765 */ 			else {
/* 000767 */ 				for (var j = iter_start; j < iter_end; j++) {
/* 000768 */ 					(function () {
/* 000768 */ 						var __accu0__ = index_placements;
/* 000768 */ 						return __call__ (__accu0__.append, __accu0__, __call__ (CellIndexRangeModel, null, __kwargtrans__ ({start: j, end: __add__ (j, 1)})));
/* 000768 */ 					}) ();
/* 000769 */ 					var current_idx = __add__ (j, 1);
/* 000769 */ 				}
/* 000769 */ 			}
/* 000769 */ 			continue;
/* 000769 */ 		}
/* 000773 */ 		return index_placements;
/* 000773 */ 	});},
/* 000775 */ 	get parse_placement_mapping_spec () {return __get__ (this, function (self, placement_mapping_spec) {
/* 000775 */ 		if (arguments.length) {
/* 000775 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000775 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000775 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000775 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000775 */ 					switch (__attrib0__) {
/* 000775 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000775 */ 						case 'placement_mapping_spec': var placement_mapping_spec = __allkwargs0__ [__attrib0__]; break;
/* 000775 */ 					}
/* 000775 */ 				}
/* 000775 */ 			}
/* 000775 */ 		}
/* 000775 */ 		else {
/* 000775 */ 		}
/* 000778 */ 		var placement_mapping_spec_split = (function () {
/* 000778 */ 			var __accu0__ = placement_mapping_spec;
/* 000778 */ 			return __call__ (__accu0__.split_at_chars, __accu0__, ';', __kwargtrans__ ({keep_empty: true}));
/* 000778 */ 		}) ();
/* 000780 */ 		if (__t__ (__eq__ (__call__ (len, null, placement_mapping_spec_split), 2))) {
/* 000782 */ 			var __left0__ = placement_mapping_spec_split;
/* 000782 */ 			var row_mapping_spec = __left0__ [0];
/* 000782 */ 			var col_mapping_spec = __left0__ [1];
/* 000782 */ 		}
/* 000784 */ 		else if (__t__ (__eq__ (__call__ (len, null, placement_mapping_spec_split), 1))) {
/* 000786 */ 			var row_mapping_spec = [];
/* 000787 */ 			var __left0__ = placement_mapping_spec_split;
/* 000787 */ 			var col_mapping_spec = __left0__ [0];
/* 000787 */ 		}
/* 000789 */ 		else if (__t__ (__eq__ (__call__ (len, null, placement_mapping_spec_split), 0))) {
/* 000791 */ 			var __left0__ = tuple ([[], []]);
/* 000791 */ 			var row_mapping_spec = __left0__ [0];
/* 000791 */ 			var col_mapping_spec = __left0__ [1];
/* 000791 */ 		}
/* 000792 */ 		else {
/* 000797 */ 			var __except0__ = __call__ (LatexWalkerParseError, null, 'Expected ‘ROWS;COLS’ or ‘COLS’ or ‘’ for placement argument, got ‘{}’'.format (__call__ (_splfysidews, null, (function () {
/* 000797 */ 				var __accu0__ = placement_mapping_spec;
/* 000797 */ 				return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000797 */ 			}) ())), __kwargtrans__ ({pos: placement_mapping_spec.pos}));
/* 000797 */ 			__except0__.__cause__ = null;
/* 000797 */ 			throw __except0__;
/* 000797 */ 		}
/* 000801 */ 		var row_placements = (function () {
/* 000801 */ 			var __accu0__ = self;
/* 000801 */ 			return __call__ (__accu0__.parse_placement_mapping_index_spec, __accu0__, row_mapping_spec, __kwargtrans__ ({index_end: null, is_row: true}));
/* 000801 */ 		}) ();
/* 000804 */ 		var col_placements = (function () {
/* 000804 */ 			var __accu0__ = self;
/* 000804 */ 			return __call__ (__accu0__.parse_placement_mapping_index_spec, __accu0__, col_mapping_spec, __kwargtrans__ ({index_end: null, is_col: true}));
/* 000804 */ 		}) ();
/* 000808 */ 		return __call__ (CellPlacementsMappingModel, null, __kwargtrans__ ({row_placements: row_placements, col_placements: col_placements}));
/* 000808 */ 	});}
/* 000808 */ });
/* 000818 */ export var CellsEnvironment =  __class__ ('CellsEnvironment', [LLMEnvironmentSpecBase], {
/* 000818 */ 	__module__: __name__,
/* 000820 */ 	is_block_level: true,
/* 000822 */ 	allowed_in_standalone_mode: true,
/* 000824 */ 	body_contents_is_block_level: true,
/* 000827 */ 	get __init__ () {return __get__ (this, function (self, environmentname) {
/* 000827 */ 		if (typeof environmentname == 'undefined' || (environmentname != null && environmentname.hasOwnProperty ("__kwargtrans__"))) {;
/* 000827 */ 			var environmentname = 'cells';
/* 000827 */ 		};
/* 000827 */ 		if (arguments.length) {
/* 000827 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000827 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000827 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000827 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000827 */ 					switch (__attrib0__) {
/* 000827 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000827 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000827 */ 					}
/* 000827 */ 				}
/* 000827 */ 			}
/* 000827 */ 		}
/* 000827 */ 		else {
/* 000827 */ 		}
/* 000828 */ 		__call__ (__call__ (__super__, null, CellsEnvironment, '__init__'), null, self, __kwargtrans__ ({environmentname: environmentname}));
/* 000828 */ 	});},
/* 000832 */ 	get make_body_parser () {return __get__ (this, function (self, token, nodeargd, arg_parsing_state_delta) {
/* 000832 */ 		if (arguments.length) {
/* 000832 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000832 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000832 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000832 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000832 */ 					switch (__attrib0__) {
/* 000832 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000832 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000832 */ 						case 'nodeargd': var nodeargd = __allkwargs0__ [__attrib0__]; break;
/* 000832 */ 						case 'arg_parsing_state_delta': var arg_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000832 */ 					}
/* 000832 */ 				}
/* 000832 */ 			}
/* 000832 */ 		}
/* 000832 */ 		else {
/* 000832 */ 		}
/* 000833 */ 		return (function () {
/* 000833 */ 			var __accu0__ = macrospec;
/* 000835 */ 			return __call__ (__accu0__.LatexEnvironmentBodyContentsParser, __accu0__, __kwargtrans__ ({environmentname: token.arg, contents_parsing_state_delta: (function () {
/* 000835 */ 				var __accu1__ = macrospec;
/* 000840 */ 				return __call__ (__accu1__.ParsingStateDeltaExtendLatexContextDb, __accu1__, __kwargtrans__ ({extend_latex_context: __call__ (dict, null, __kwargtrans__ ({macros: [__call__ (CellMacro, null), __call__ (CelldataMacroSpec, null), __call__ (LatexTabularRowSeparatorSpec, null)]}))}));
/* 000846 */ 			}) (), child_parsing_state_delta: __call__ (ParsingStateDelta, null)}));
/* 000846 */ 		}) ();
/* 000846 */ 	});},
/* 000850 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000850 */ 		if (arguments.length) {
/* 000850 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000850 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000850 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000850 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000850 */ 					switch (__attrib0__) {
/* 000850 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000850 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000850 */ 					}
/* 000850 */ 				}
/* 000850 */ 			}
/* 000850 */ 		}
/* 000850 */ 		else {
/* 000850 */ 		}
/* 000854 */ 		var cells_model = __call__ (CellsModel, null);
/* 000856 */ 		var __iterable0__ = node.nodelist;
/* 000856 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000856 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000857 */ 			if (__t__ ((function () {
/* 000857 */ 				var __accu0__ = n;
/* 000857 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000857 */ 			}) ())) {
/* 000858 */ 				if (__t__ (__eq__ (n.macroname, 'cell'))) {
/* 000859 */ 					(function () {
/* 000859 */ 						var __accu0__ = cells_model;
/* 000859 */ 						return __call__ (__accu0__.add_cell_node, __accu0__, n);
/* 000859 */ 					}) ();
/* 000859 */ 					continue;
/* 000859 */ 				}
/* 000861 */ 				else if (__t__ (__eq__ (n.macroname, 'celldata'))) {
/* 000862 */ 					(function () {
/* 000862 */ 						var __accu0__ = cells_model;
/* 000862 */ 						return __call__ (__accu0__.add_celldata_node, __accu0__, n);
/* 000862 */ 					}) ();
/* 000862 */ 					continue;
/* 000862 */ 				}
/* 000864 */ 				else if (__t__ (__eq__ (n.macroname, '\\'))) {
/* 000865 */ 					(function () {
/* 000865 */ 						var __accu0__ = cells_model;
/* 000865 */ 						return __call__ (__accu0__.move_next_row, __accu0__);
/* 000865 */ 					}) ();
/* 000865 */ 					continue;
/* 000865 */ 				}
/* 000865 */ 			}
/* 000868 */ 			if (__t__ ((function () {
/* 000868 */ 				var __accu0__ = n;
/* 000868 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCommentNode);
/* 000868 */ 			}) ())) {
/* 000868 */ 				continue;
/* 000868 */ 			}
/* 000872 */ 			if (__t__ (__t__ ((function () {
/* 000872 */ 				var __accu0__ = n;
/* 000872 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000873 */ 			}) ()) && __eq__ (__call__ (len, null, (function () {
/* 000873 */ 				var __accu0__ = n.chars;
/* 000873 */ 				return __call__ (__accu0__.strip, __accu0__);
/* 000873 */ 			}) ()), 0))) {
/* 000873 */ 				continue;
/* 000873 */ 			}
/* 000878 */ 			var __except0__ = __call__ (LatexWalkerParseError, null, 'You cannot place ‘{}’ here.  Expected: \\cell, \\celldata, \\\\.'.format (__call__ (_splfysidews, null, (function () {
/* 000878 */ 				var __accu0__ = n;
/* 000878 */ 				return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000878 */ 			}) ())));
/* 000878 */ 			__except0__.__cause__ = null;
/* 000878 */ 			throw __except0__;
/* 000878 */ 		}
/* 000882 */ 		(function () {
/* 000882 */ 			var __accu0__ = cells_model;
/* 000882 */ 			return __call__ (__accu0__.finalize, __accu0__);
/* 000882 */ 		}) ();
/* 000884 */ 		node.llm_cells_model = cells_model;
/* 000884 */ 	});},
/* 000887 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000887 */ 		if (arguments.length) {
/* 000887 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000887 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000887 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000887 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000887 */ 					switch (__attrib0__) {
/* 000887 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000887 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000887 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000887 */ 					}
/* 000887 */ 				}
/* 000887 */ 			}
/* 000887 */ 		}
/* 000887 */ 		else {
/* 000887 */ 		}
/* 000893 */ 		return (function () {
/* 000893 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000893 */ 			return __call__ (__accu0__.render_cells, __accu0__, __kwargtrans__ ({cells_model: node.llm_cells_model, render_context: render_context}));
/* 000893 */ 		}) ();
/* 000893 */ 	});}
/* 000893 */ });
/* 000902 */ export var FeatureProvideCells =  __class__ ('FeatureProvideCells', [Feature], {
/* 000902 */ 	__module__: __name__,
/* 000904 */ 	DocumentManager: null,
/* 000905 */ 	RenderManager: null,
/* 000907 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000907 */ 		if (arguments.length) {
/* 000907 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000907 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000907 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000907 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000907 */ 					switch (__attrib0__) {
/* 000907 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000907 */ 					}
/* 000907 */ 				}
/* 000907 */ 			}
/* 000907 */ 		}
/* 000907 */ 		else {
/* 000907 */ 		}
/* 000910 */ 		return __call__ (dict, null, __kwargtrans__ ({environments: [__call__ (CellsEnvironment, null)]}));
/* 000910 */ 	});}
/* 000910 */ });
/* 000010 */ 
//# sourceMappingURL=llm.feature.cells.map