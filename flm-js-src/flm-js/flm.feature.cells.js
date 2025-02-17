/* 000001 */ // Transcrypt'ed from Python, 2025-02-17 12:22:08
/* 000010 */ var logging = {};
/* 000010 */ var re = {};
/* 000010 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000033 */ import {Feature} from './flm.feature._base.js';
/* 000028 */ import {FLMEnvironmentSpecBase, FLMMacroSpecError} from './flm.flmspecinfo.js';
/* 000025 */ import {FLMArgumentSpec} from './flm.flmenvironment.js';
/* 000023 */ import * as latexnodes_parsers from './pylatexenc.latexnodes.parsers.js';
/* 000022 */ import * as latexnodes_nodes from './pylatexenc.latexnodes.nodes.js';
/* 000016 */ import {LatexArgumentSpec, LatexWalkerLocatedError, ParsedArgumentsInfo, ParsingStateDelta} from './pylatexenc.latexnodes.js';
/* 000015 */ import * as macrospec from './pylatexenc.macrospec.js';
/* 000012 */ import * as __module_logging__ from './logging.js';
/* 000012 */ __nest__ (logging, '', __module_logging__);
/* 000010 */ import * as __module_re__ from './re.js';
/* 000010 */ __nest__ (re, '', __module_re__);
/* 000010 */ export {FLMEnvironmentSpecBase, latexnodes_parsers, LatexWalkerLocatedError, Feature, FLMArgumentSpec, macrospec, latexnodes_nodes, ParsingStateDelta, ParsedArgumentsInfo, FLMMacroSpecError, LatexArgumentSpec};
/* 000001 */ var __name__ = 'flm.feature.cells';
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
/* 000074 */ }) (), __kwargtrans__ ({argname: 'styles_mapping'})), 'cellcontents': __call__ (FLMArgumentSpec, null, '{', __kwargtrans__ ({argname: 'cellcontents', is_block_level: true}))});
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
/* 000113 */ export var CellMacro =  __class__ ('CellMacro', [FLMMacroSpecError], {
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
/* 000145 */ export var CellIndexRangeModel =  __class__ ('CellIndexRangeModel', [object], {
/* 000145 */ 	__module__: __name__,
/* 000146 */ 	get __init__ () {return __get__ (this, function (self, start, end) {
/* 000146 */ 		if (arguments.length) {
/* 000146 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000146 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000146 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000146 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000146 */ 					switch (__attrib0__) {
/* 000146 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000146 */ 						case 'start': var start = __allkwargs0__ [__attrib0__]; break;
/* 000146 */ 						case 'end': var end = __allkwargs0__ [__attrib0__]; break;
/* 000146 */ 					}
/* 000146 */ 				}
/* 000146 */ 			}
/* 000146 */ 		}
/* 000146 */ 		else {
/* 000146 */ 		}
/* 000147 */ 		__call__ (__call__ (__super__, null, CellIndexRangeModel, '__init__'), null, self);
/* 000150 */ 		self.start = start;
/* 000151 */ 		self.end = end;
/* 000151 */ 	});},
/* 000153 */ 	_fields: tuple (['start', 'end']),
/* 000155 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000155 */ 		if (arguments.length) {
/* 000155 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000155 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000155 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000155 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000155 */ 					switch (__attrib0__) {
/* 000155 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000155 */ 					}
/* 000155 */ 				}
/* 000155 */ 			}
/* 000155 */ 		}
/* 000155 */ 		else {
/* 000155 */ 		}
/* 000156 */ 		if (__t__ (__eq__ (self.end, __add__ (self.start, 1)))) {
/* 000157 */ 			return '{}'.format (__add__ (self.start, 1));
/* 000157 */ 		}
/* 000158 */ 		return '[{}-{}]'.format (__add__ (self.start, 1), self.end);
/* 000158 */ 	});}
/* 000158 */ });
/* 000161 */ export var CellPlacementModel =  __class__ ('CellPlacementModel', [object], {
/* 000161 */ 	__module__: __name__,
/* 000162 */ 	get __init__ () {return __get__ (this, function (self, row_range, col_range) {
/* 000162 */ 		if (arguments.length) {
/* 000162 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000162 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000162 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000162 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000162 */ 					switch (__attrib0__) {
/* 000162 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000162 */ 						case 'row_range': var row_range = __allkwargs0__ [__attrib0__]; break;
/* 000162 */ 						case 'col_range': var col_range = __allkwargs0__ [__attrib0__]; break;
/* 000162 */ 					}
/* 000162 */ 				}
/* 000162 */ 			}
/* 000162 */ 		}
/* 000162 */ 		else {
/* 000162 */ 		}
/* 000163 */ 		__call__ (__call__ (__super__, null, CellPlacementModel, '__init__'), null, self);
/* 000164 */ 		self.row_range = row_range;
/* 000165 */ 		self.col_range = col_range;
/* 000165 */ 	});},
/* 000167 */ 	_fields: tuple (['row_range', 'col_range']),
/* 000169 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000169 */ 		if (arguments.length) {
/* 000169 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000169 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000169 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000169 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000169 */ 					switch (__attrib0__) {
/* 000169 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000169 */ 					}
/* 000169 */ 				}
/* 000169 */ 			}
/* 000169 */ 		}
/* 000169 */ 		else {
/* 000169 */ 		}
/* 000170 */ 		return '{},{}'.format (__call__ (repr, null, self.row_range), __call__ (repr, null, self.col_range));
/* 000170 */ 	});}
/* 000170 */ });
/* 000173 */ export var CellModel =  __class__ ('CellModel', [object], {
/* 000173 */ 	__module__: __name__,
/* 000174 */ 	get __init__ () {return __get__ (this, function (self, placement, styles, content_nodes) {
/* 000174 */ 		if (arguments.length) {
/* 000174 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000174 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000174 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000174 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000174 */ 					switch (__attrib0__) {
/* 000174 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000174 */ 						case 'placement': var placement = __allkwargs0__ [__attrib0__]; break;
/* 000174 */ 						case 'styles': var styles = __allkwargs0__ [__attrib0__]; break;
/* 000174 */ 						case 'content_nodes': var content_nodes = __allkwargs0__ [__attrib0__]; break;
/* 000174 */ 					}
/* 000174 */ 				}
/* 000174 */ 			}
/* 000174 */ 		}
/* 000174 */ 		else {
/* 000174 */ 		}
/* 000175 */ 		__call__ (__call__ (__super__, null, CellModel, '__init__'), null, self);
/* 000176 */ 		self.placement = placement;
/* 000177 */ 		self.styles = styles;
/* 000178 */ 		self.content_nodes = content_nodes;
/* 000178 */ 	});},
/* 000180 */ 	_fields: tuple (['placement', 'styles', 'content_nodes']),
/* 000182 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000182 */ 		if (arguments.length) {
/* 000182 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000182 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000182 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000182 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000182 */ 					switch (__attrib0__) {
/* 000182 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000182 */ 					}
/* 000182 */ 				}
/* 000182 */ 			}
/* 000182 */ 		}
/* 000182 */ 		else {
/* 000182 */ 		}
/* 000184 */ 		return '<Cell @{} <{}> (‘{}’)>'.format (__call__ (repr, null, self.placement), (function () {
/* 000184 */ 			var __accu0__ = ' ';
/* 000184 */ 			return __call__ (__accu0__.join, __accu0__, self.styles);
/* 000185 */ 		}) (), __call__ (_splfysidews, null, (function () {
/* 000185 */ 			var __accu0__ = self.content_nodes;
/* 000185 */ 			return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000185 */ 		}) ()));
/* 000185 */ 	});}
/* 000185 */ });
/* 000188 */ export var _splfysidews = function (s) {
/* 000188 */ 	if (arguments.length) {
/* 000188 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000188 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000188 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000188 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000188 */ 				switch (__attrib0__) {
/* 000188 */ 					case 's': var s = __allkwargs0__ [__attrib0__]; break;
/* 000188 */ 				}
/* 000188 */ 			}
/* 000188 */ 		}
/* 000188 */ 	}
/* 000188 */ 	else {
/* 000188 */ 	}
/* 000190 */ 	return (function () {
/* 000190 */ 		var __accu0__ = re;
/* 000190 */ 		return __call__ (__accu0__.sub, __accu0__, '(^\\s+|\\s+$)', ' ', s);
/* 000190 */ 	}) ();
/* 000190 */ };
/* 000195 */ export var CellPlacementsMappingModel =  __class__ ('CellPlacementsMappingModel', [object], {
/* 000195 */ 	__module__: __name__,
/* 000196 */ 	get __init__ () {return __get__ (this, function (self, row_placements, col_placements) {
/* 000196 */ 		if (arguments.length) {
/* 000196 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000196 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000196 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000196 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000196 */ 					switch (__attrib0__) {
/* 000196 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000196 */ 						case 'row_placements': var row_placements = __allkwargs0__ [__attrib0__]; break;
/* 000196 */ 						case 'col_placements': var col_placements = __allkwargs0__ [__attrib0__]; break;
/* 000196 */ 					}
/* 000196 */ 				}
/* 000196 */ 			}
/* 000196 */ 		}
/* 000196 */ 		else {
/* 000196 */ 		}
/* 000197 */ 		__call__ (__call__ (__super__, null, CellPlacementsMappingModel, '__init__'), null, self);
/* 000198 */ 		self.row_placements = row_placements;
/* 000199 */ 		self.col_placements = col_placements;
/* 000199 */ 	});},
/* 000201 */ 	_fields: tuple (['row_placements', 'col_placements']),
/* 000203 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000203 */ 		if (arguments.length) {
/* 000203 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000203 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000203 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000203 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000203 */ 					switch (__attrib0__) {
/* 000203 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000203 */ 					}
/* 000203 */ 				}
/* 000203 */ 			}
/* 000203 */ 		}
/* 000203 */ 		else {
/* 000203 */ 		}
/* 000206 */ 		return __add__ (__add__ ('{}('.format (self.__class__.__name__), (function () {
/* 000206 */ 			var __accu0__ = '';
/* 000206 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000206 */ 				var __accu1__ = [];
/* 000206 */ 				var __iterable0__ = self._fields;
/* 000206 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000206 */ 					var k = __getitem__ (__iterable0__, __index0__);
/* 000206 */ 					(function () {
/* 000206 */ 						var __accu2__ = __accu1__;
/* 000206 */ 						return __call__ (__accu2__.append, __accu2__, '\n    {}={}'.format (k, __call__ (repr, null, __call__ (getattr, null, self, k))));
/* 000206 */ 					}) ();
/* 000206 */ 				}
/* 000206 */ 				return py_iter (__accu1__);
/* 000206 */ 			}) ());
/* 000206 */ 		}) ()), '\n)'.format ());
/* 000206 */ 	});},
/* 000210 */ 	get _get_index_range () {return __get__ (this, function (self, placements, j, current) {
/* 000210 */ 		if (arguments.length) {
/* 000210 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000210 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000210 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000210 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000210 */ 					switch (__attrib0__) {
/* 000210 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000210 */ 						case 'placements': var placements = __allkwargs0__ [__attrib0__]; break;
/* 000210 */ 						case 'j': var j = __allkwargs0__ [__attrib0__]; break;
/* 000210 */ 						case 'current': var current = __allkwargs0__ [__attrib0__]; break;
/* 000210 */ 					}
/* 000210 */ 				}
/* 000210 */ 			}
/* 000210 */ 		}
/* 000210 */ 		else {
/* 000210 */ 		}
/* 000212 */ 		if (__t__ (__eq__ (__call__ (len, null, placements), 0))) {
/* 000213 */ 			return __call__ (CellIndexRangeModel, null, current, __add__ (current, 1));
/* 000213 */ 		}
/* 000217 */ 		if (__t__ (__lt__ (j, __sub__ (__call__ (len, null, placements), 1)))) {
/* 000218 */ 			return __getitem__ (placements, j);
/* 000218 */ 		}
/* 000220 */ 		var placement = __getitem__ (placements, __neg__ (1));
/* 000221 */ 		if (__t__ (placement.end === null)) {
/* 000222 */ 			var idx = __add__ (placement.start, __add__ (__sub__ (j, __call__ (len, null, placements)), 1));
/* 000223 */ 			return __call__ (CellIndexRangeModel, null, idx, __add__ (idx, 1));
/* 000223 */ 		}
/* 000224 */ 		return placement;
/* 000224 */ 	});},
/* 000226 */ 	get get_row_index_range () {return __get__ (this, function (self, row_j, current_row) {
/* 000226 */ 		if (typeof current_row == 'undefined' || (current_row != null && current_row.hasOwnProperty ("__kwargtrans__"))) {;
/* 000226 */ 			var current_row = null;
/* 000226 */ 		};
/* 000226 */ 		if (arguments.length) {
/* 000226 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000226 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000226 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000226 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000226 */ 					switch (__attrib0__) {
/* 000226 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000226 */ 						case 'row_j': var row_j = __allkwargs0__ [__attrib0__]; break;
/* 000226 */ 						case 'current_row': var current_row = __allkwargs0__ [__attrib0__]; break;
/* 000226 */ 					}
/* 000226 */ 				}
/* 000226 */ 			}
/* 000226 */ 		}
/* 000226 */ 		else {
/* 000226 */ 		}
/* 000227 */ 		return (function () {
/* 000227 */ 			var __accu0__ = self;
/* 000227 */ 			return __call__ (__accu0__._get_index_range, __accu0__, self.row_placements, row_j, current_row);
/* 000227 */ 		}) ();
/* 000227 */ 	});},
/* 000229 */ 	get get_col_index_range () {return __get__ (this, function (self, col_j, current_col) {
/* 000229 */ 		if (typeof current_col == 'undefined' || (current_col != null && current_col.hasOwnProperty ("__kwargtrans__"))) {;
/* 000229 */ 			var current_col = null;
/* 000229 */ 		};
/* 000229 */ 		if (arguments.length) {
/* 000229 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000229 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000229 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000229 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000229 */ 					switch (__attrib0__) {
/* 000229 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000229 */ 						case 'col_j': var col_j = __allkwargs0__ [__attrib0__]; break;
/* 000229 */ 						case 'current_col': var current_col = __allkwargs0__ [__attrib0__]; break;
/* 000229 */ 					}
/* 000229 */ 				}
/* 000229 */ 			}
/* 000229 */ 		}
/* 000229 */ 		else {
/* 000229 */ 		}
/* 000230 */ 		return (function () {
/* 000230 */ 			var __accu0__ = self;
/* 000230 */ 			return __call__ (__accu0__._get_index_range, __accu0__, self.col_placements, col_j, current_col);
/* 000230 */ 		}) ();
/* 000230 */ 	});},
/* 000232 */ 	get start_row_col () {return __get__ (this, function (self, current_row, current_col) {
/* 000232 */ 		if (typeof current_row == 'undefined' || (current_row != null && current_row.hasOwnProperty ("__kwargtrans__"))) {;
/* 000232 */ 			var current_row = null;
/* 000232 */ 		};
/* 000232 */ 		if (typeof current_col == 'undefined' || (current_col != null && current_col.hasOwnProperty ("__kwargtrans__"))) {;
/* 000232 */ 			var current_col = null;
/* 000232 */ 		};
/* 000232 */ 		if (arguments.length) {
/* 000232 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000232 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000232 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000232 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000232 */ 					switch (__attrib0__) {
/* 000232 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000232 */ 						case 'current_row': var current_row = __allkwargs0__ [__attrib0__]; break;
/* 000232 */ 						case 'current_col': var current_col = __allkwargs0__ [__attrib0__]; break;
/* 000232 */ 					}
/* 000232 */ 				}
/* 000232 */ 			}
/* 000232 */ 		}
/* 000232 */ 		else {
/* 000232 */ 		}
/* 000233 */ 		return tuple ([(function () {
/* 000233 */ 			var __accu0__ = self;
/* 000233 */ 			return __call__ (__accu0__.get_row_index_range, __accu0__, 0, current_row);
/* 000234 */ 		}) ().start, (function () {
/* 000234 */ 			var __accu0__ = self;
/* 000234 */ 			return __call__ (__accu0__.get_col_index_range, __accu0__, 0, current_col);
/* 000234 */ 		}) ().start]);
/* 000234 */ 	});}
/* 000234 */ });
/* 000240 */ export var CellsModel =  __class__ ('CellsModel', [object], {
/* 000240 */ 	__module__: __name__,
/* 000241 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000241 */ 		var kwargs = dict ();
/* 000241 */ 		if (arguments.length) {
/* 000241 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000241 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000241 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000241 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000241 */ 					switch (__attrib0__) {
/* 000241 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000241 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000241 */ 					}
/* 000241 */ 				}
/* 000241 */ 				delete kwargs.__kwargtrans__;
/* 000241 */ 			}
/* 000241 */ 		}
/* 000241 */ 		else {
/* 000241 */ 		}
/* 000242 */ 		__call__ (__call__ (__super__, null, CellsModel, '__init__'), null, self);
/* 000246 */ 		self.current_row = 0;
/* 000247 */ 		self.current_col = 0;
/* 000249 */ 		self.row_names = dict ({});
/* 000250 */ 		self.column_names = dict ({});
/* 000253 */ 		if (__t__ (kwargs)) {
/* 000255 */ 			self.cells_size = (function () {
/* 000255 */ 				var __accu0__ = kwargs;
/* 000255 */ 				return __call__ (__accu0__.py_pop, __accu0__, 'cells_size');
/* 000255 */ 			}) ();
/* 000256 */ 			self.cells_data = (function () {
/* 000256 */ 				var __accu0__ = kwargs;
/* 000256 */ 				return __call__ (__accu0__.py_pop, __accu0__, 'cells_data');
/* 000256 */ 			}) ();
/* 000257 */ 			(function () {
/* 000257 */ 				var __accu0__ = self;
/* 000257 */ 				return __call__ (__accu0__.finalize, __accu0__);
/* 000257 */ 			}) ();
/* 000258 */ 			return ;
/* 000258 */ 		}
/* 000260 */ 		self.cells_size = [null, null];
/* 000261 */ 		self.cells_data = [];
/* 000263 */ 		self.grid_data = null;
/* 000263 */ 	});},
/* 000266 */ 	_fields: tuple (['cells_size', 'cells_data']),
/* 000268 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000268 */ 		if (arguments.length) {
/* 000268 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000268 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000268 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000268 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000268 */ 					switch (__attrib0__) {
/* 000268 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000268 */ 					}
/* 000268 */ 				}
/* 000268 */ 			}
/* 000268 */ 		}
/* 000268 */ 		else {
/* 000268 */ 		}
/* 000269 */ 		var pp_data = (function () {
/* 000269 */ 			var __accu0__ = '';
/* 000269 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000269 */ 				var __accu1__ = [];
/* 000269 */ 				var __iterable0__ = self.cells_data;
/* 000269 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000269 */ 					var d = __getitem__ (__iterable0__, __index0__);
/* 000269 */ 					(function () {
/* 000269 */ 						var __accu2__ = __accu1__;
/* 000269 */ 						return __call__ (__accu2__.append, __accu2__, __add__ ('\n        ', __call__ (repr, null, d)));
/* 000269 */ 					}) ();
/* 000269 */ 				}
/* 000269 */ 				return __accu1__;
/* 000269 */ 			}) ());
/* 000269 */ 		}) ();
/* 000271 */ 		return '{}(\n    cells_size={},\n    cells_data=[{}\n    ])'.format (self.__class__.__name__, __call__ (repr, null, self.cells_size), pp_data);
/* 000271 */ 	});},
/* 000277 */ 	get add_cell_node () {return __get__ (this, function (self, cell_node, default_placement, default_styles) {
/* 000277 */ 		if (typeof default_placement == 'undefined' || (default_placement != null && default_placement.hasOwnProperty ("__kwargtrans__"))) {;
/* 000277 */ 			var default_placement = null;
/* 000277 */ 		};
/* 000277 */ 		if (typeof default_styles == 'undefined' || (default_styles != null && default_styles.hasOwnProperty ("__kwargtrans__"))) {;
/* 000277 */ 			var default_styles = null;
/* 000277 */ 		};
/* 000277 */ 		if (arguments.length) {
/* 000277 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000277 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000277 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000277 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000277 */ 					switch (__attrib0__) {
/* 000277 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000277 */ 						case 'cell_node': var cell_node = __allkwargs0__ [__attrib0__]; break;
/* 000277 */ 						case 'default_placement': var default_placement = __allkwargs0__ [__attrib0__]; break;
/* 000277 */ 						case 'default_styles': var default_styles = __allkwargs0__ [__attrib0__]; break;
/* 000277 */ 					}
/* 000277 */ 				}
/* 000277 */ 			}
/* 000277 */ 		}
/* 000277 */ 		else {
/* 000277 */ 		}
/* 000279 */ 		var cell_node_args = (function () {
/* 000279 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: cell_node}));
/* 000279 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['styles', 'placement', 'cellcontents']));
/* 000279 */ 		}) ();
/* 000283 */ 		if (__t__ (default_styles === null)) {
/* 000284 */ 			var default_styles = [];
/* 000284 */ 		}
/* 000286 */ 		if (__t__ ((function () {
/* 000286 */ 			var __accu0__ = __getitem__ (cell_node_args, 'styles');
/* 000286 */ 			return __call__ (__accu0__.was_provided, __accu0__);
/* 000286 */ 		}) ())) {
/* 000288 */ 			var styles = __add__ ((function () {
/* 000288 */ 				var __accu0__ = (function () {
/* 000288 */ 					var __accu1__ = __getitem__ (cell_node_args, 'styles');
/* 000288 */ 					return __call__ (__accu1__.get_content_as_chars, __accu1__);
/* 000288 */ 				}) ();
/* 000288 */ 				return __call__ (__accu0__.py_split, __accu0__, ' ');
/* 000288 */ 			}) (), default_styles);
/* 000288 */ 		}
/* 000290 */ 		else {
/* 000292 */ 			var styles = default_styles;
/* 000292 */ 		}
/* 000294 */ 		if (__t__ ((function () {
/* 000294 */ 			var __accu0__ = __getitem__ (cell_node_args, 'placement');
/* 000294 */ 			return __call__ (__accu0__.was_provided, __accu0__);
/* 000294 */ 		}) ())) {
/* 000295 */ 			var placement_spec = (function () {
/* 000295 */ 				var __accu0__ = __getitem__ (cell_node_args, 'placement');
/* 000295 */ 				return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000295 */ 			}) ();
/* 000295 */ 		}
/* 000296 */ 		else {
/* 000297 */ 			var placement_spec = default_placement;
/* 000297 */ 		}
/* 000299 */ 		var cell_contents = (function () {
/* 000299 */ 			var __accu0__ = __getitem__ (cell_node_args, 'cellcontents');
/* 000299 */ 			return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000299 */ 		}) ();
/* 000301 */ 		return (function () {
/* 000301 */ 			var __accu0__ = self;
/* 000301 */ 			return __call__ (__accu0__.add_cell, __accu0__, placement_spec, styles, cell_contents);
/* 000301 */ 		}) ();
/* 000301 */ 	});},
/* 000303 */ 	get add_cell () {return __get__ (this, function (self, placement_spec, styles, content_nodes) {
/* 000303 */ 		if (arguments.length) {
/* 000303 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000303 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000303 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000303 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000303 */ 					switch (__attrib0__) {
/* 000303 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000303 */ 						case 'placement_spec': var placement_spec = __allkwargs0__ [__attrib0__]; break;
/* 000303 */ 						case 'styles': var styles = __allkwargs0__ [__attrib0__]; break;
/* 000303 */ 						case 'content_nodes': var content_nodes = __allkwargs0__ [__attrib0__]; break;
/* 000303 */ 					}
/* 000303 */ 				}
/* 000303 */ 			}
/* 000303 */ 		}
/* 000303 */ 		else {
/* 000303 */ 		}
/* 000305 */ 		var placement = (function () {
/* 000305 */ 			var __accu0__ = self;
/* 000305 */ 			return __call__ (__accu0__.parse_placement_spec, __accu0__, placement_spec);
/* 000305 */ 		}) ();
/* 000307 */ 		var cell = __call__ (CellModel, null, __kwargtrans__ ({placement: placement, styles: styles, content_nodes: content_nodes}));
/* 000312 */ 		(function () {
/* 000312 */ 			var __accu0__ = self.cells_data;
/* 000312 */ 			return __call__ (__accu0__.append, __accu0__, cell);
/* 000312 */ 		}) ();
/* 000315 */ 		if (__t__ (__t__ (__getitem__ (self.cells_size, 0) === null) || __ge__ (cell.placement.row_range.end, __getitem__ (self.cells_size, 0)))) {
/* 000316 */ 			__setitem__ (self.cells_size, 0, cell.placement.row_range.end);
/* 000316 */ 		}
/* 000317 */ 		if (__t__ (__t__ (__getitem__ (self.cells_size, 1) === null) || __ge__ (cell.placement.col_range.end, __getitem__ (self.cells_size, 1)))) {
/* 000318 */ 			__setitem__ (self.cells_size, 1, cell.placement.col_range.end);
/* 000318 */ 		}
/* 000320 */ 		(function () {
/* 000320 */ 			var __accu0__ = self;
/* 000320 */ 			return __call__ (__accu0__.move_to_col, __accu0__, cell.placement.col_range.end);
/* 000320 */ 		}) ();
/* 000322 */ 		return cell;
/* 000322 */ 	});},
/* 000324 */ 	get move_to_col () {return __get__ (this, function (self, col) {
/* 000324 */ 		if (arguments.length) {
/* 000324 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000324 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000324 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000324 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000324 */ 					switch (__attrib0__) {
/* 000324 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000324 */ 						case 'col': var col = __allkwargs0__ [__attrib0__]; break;
/* 000324 */ 					}
/* 000324 */ 				}
/* 000324 */ 			}
/* 000324 */ 		}
/* 000324 */ 		else {
/* 000324 */ 		}
/* 000325 */ 		self.current_col = col;
/* 000325 */ 	});},
/* 000327 */ 	get move_next_row () {return __get__ (this, function (self) {
/* 000327 */ 		if (arguments.length) {
/* 000327 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000327 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000327 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000327 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000327 */ 					switch (__attrib0__) {
/* 000327 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000327 */ 					}
/* 000327 */ 				}
/* 000327 */ 			}
/* 000327 */ 		}
/* 000327 */ 		else {
/* 000327 */ 		}
/* 000328 */ 		self.current_row = __call__ (__iadd__, null, self.current_row, 1);
/* 000329 */ 		self.current_col = 0;
/* 000329 */ 	});},
/* 000332 */ 	get finalize () {return __get__ (this, function (self) {
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
/* 000334 */ 		self.grid_data = (function () {
/* 000334 */ 			var __accu0__ = [];
/* 000334 */ 			for (var _ = 0; _ < __getitem__ (self.cells_size, 0); _++) {
/* 000336 */ 				(function () {
/* 000336 */ 					var __accu1__ = __accu0__;
/* 000336 */ 					return __call__ (__accu1__.append, __accu1__, (function () {
/* 000336 */ 						var __accu2__ = [];
/* 000335 */ 						for (var _ = 0; _ < __getitem__ (self.cells_size, 1); _++) {
/* 000335 */ 							(function () {
/* 000335 */ 								var __accu3__ = __accu2__;
/* 000335 */ 								return __call__ (__accu3__.append, __accu3__, null);
/* 000335 */ 							}) ();
/* 000335 */ 						}
/* 000335 */ 						return __accu2__;
/* 000335 */ 					}) ());
/* 000335 */ 				}) ();
/* 000335 */ 			}
/* 000335 */ 			return __accu0__;
/* 000335 */ 		}) ();
/* 000338 */ 		var __iterable0__ = self.cells_data;
/* 000338 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000338 */ 			var cell = __getitem__ (__iterable0__, __index0__);
/* 000339 */ 			var is_topleft = true;
/* 000340 */ 			for (var rowidx = cell.placement.row_range.start; rowidx < cell.placement.row_range.end; rowidx++) {
/* 000342 */ 				for (var colidx = cell.placement.col_range.start; colidx < cell.placement.col_range.end; colidx++) {
/* 000344 */ 					if (__t__ (__getitem__ (__getitem__ (self.grid_data, rowidx), colidx) !== null)) {
/* 000345 */ 						var existing_cell = __getitem__ (__getitem__ (__getitem__ (self.grid_data, rowidx), colidx), 'cell');
/* 000347 */ 						var __except0__ = __call__ (ValueError, null, '‘{}’ overlaps with ‘{}’'.format (__call__ (repr, null, cell), __call__ (repr, null, existing_cell)));
/* 000347 */ 						__except0__.__cause__ = null;
/* 000347 */ 						throw __except0__;
/* 000347 */ 					}
/* 000350 */ 					__setitem__ (__getitem__ (self.grid_data, rowidx), colidx, dict ({'cell': cell, 'is_topleft': is_topleft}));
/* 000354 */ 					var is_topleft = false;
/* 000354 */ 				}
/* 000354 */ 			}
/* 000354 */ 		}
/* 000354 */ 	});},
/* 000359 */ 	get add_celldata_node () {return __get__ (this, function (self, celldata_node) {
/* 000359 */ 		if (arguments.length) {
/* 000359 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000359 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000359 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000359 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000359 */ 					switch (__attrib0__) {
/* 000359 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000359 */ 						case 'celldata_node': var celldata_node = __allkwargs0__ [__attrib0__]; break;
/* 000359 */ 					}
/* 000359 */ 				}
/* 000359 */ 			}
/* 000359 */ 		}
/* 000359 */ 		else {
/* 000359 */ 		}
/* 000361 */ 		var celldata_node_args = (function () {
/* 000361 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: celldata_node}));
/* 000361 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['styles_mapping', 'placement_mapping', 'celldata_contents']));
/* 000361 */ 		}) ();
/* 000365 */ 		var styles_mapping = (function () {
/* 000365 */ 			var __accu0__ = [];
/* 000368 */ 			var __iterable0__ = (function () {
/* 000368 */ 				var __accu1__ = (function () {
/* 000368 */ 					var __accu2__ = __getitem__ (celldata_node_args, 'styles_mapping');
/* 000368 */ 					return __call__ (__accu2__.get_content_as_chars, __accu2__);
/* 000368 */ 				}) ();
/* 000368 */ 				return __call__ (__accu1__.py_split, __accu1__, ',');
/* 000368 */ 			}) ();
/* 000368 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000368 */ 				var styles_spec = __getitem__ (__iterable0__, __index0__);
/* 000367 */ 				(function () {
/* 000367 */ 					var __accu1__ = __accu0__;
/* 000366 */ 					return __call__ (__accu1__.append, __accu1__, (function () {
/* 000366 */ 						var __accu2__ = styles_spec;
/* 000366 */ 						return __call__ (__accu2__.py_split, __accu2__);
/* 000366 */ 					}) ());
/* 000366 */ 				}) ();
/* 000366 */ 			}
/* 000366 */ 			return __accu0__;
/* 000366 */ 		}) ();
/* 000371 */ 		var placement_mapping_spec = (function () {
/* 000371 */ 			var __accu0__ = __getitem__ (celldata_node_args, 'placement_mapping');
/* 000371 */ 			return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000371 */ 		}) ();
/* 000373 */ 		var celldata_contents = (function () {
/* 000373 */ 			var __accu0__ = __getitem__ (celldata_node_args, 'celldata_contents');
/* 000373 */ 			return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000373 */ 		}) ();
/* 000377 */ 		var data_rows = (function () {
/* 000377 */ 			var __accu0__ = celldata_contents;
/* 000377 */ 			return __call__ (__accu0__.split_at_node, __accu0__, (function __lambda__ (node) {
/* 000377 */ 				if (arguments.length) {
/* 000377 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000377 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000377 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000377 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000377 */ 							switch (__attrib0__) {
/* 000377 */ 								case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000377 */ 							}
/* 000377 */ 						}
/* 000377 */ 					}
/* 000377 */ 				}
/* 000377 */ 				else {
/* 000377 */ 				}
/* 000379 */ 				return __t__ ((function () {
/* 000379 */ 					var __accu1__ = node;
/* 000379 */ 					return __call__ (__accu1__.isNodeType, __accu1__, latexnodes_nodes.LatexMacroNode);
/* 000379 */ 				}) ()) && __eq__ (node.macroname, '\\');
/* 000379 */ 			}));
/* 000379 */ 		}) ();
/* 000384 */ 		var split_columns_predicate_fn = function (node) {
/* 000384 */ 			if (arguments.length) {
/* 000384 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000384 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000384 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000384 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000384 */ 						switch (__attrib0__) {
/* 000384 */ 							case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000384 */ 						}
/* 000384 */ 					}
/* 000384 */ 				}
/* 000384 */ 			}
/* 000384 */ 			else {
/* 000384 */ 			}
/* 000386 */ 			if (__t__ (__t__ ((function () {
/* 000386 */ 				var __accu0__ = node;
/* 000386 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexSpecialsNode);
/* 000386 */ 			}) ()) && __eq__ (node.specials_chars, '&'))) {
/* 000388 */ 				return true;
/* 000388 */ 			}
/* 000389 */ 			return false;
/* 000389 */ 		};
/* 000391 */ 		var data_content_nodes = (function () {
/* 000391 */ 			var __accu0__ = [];
/* 000391 */ 			var __iterable0__ = data_rows;
/* 000391 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000393 */ 				var data_row = __getitem__ (__iterable0__, __index0__);
/* 000393 */ 				(function () {
/* 000393 */ 					var __accu1__ = __accu0__;
/* 000392 */ 					return __call__ (__accu1__.append, __accu1__, (function () {
/* 000392 */ 						var __accu2__ = data_row;
/* 000392 */ 						return __call__ (__accu2__.split_at_node, __accu2__, split_columns_predicate_fn);
/* 000392 */ 					}) ());
/* 000392 */ 				}) ();
/* 000392 */ 			}
/* 000392 */ 			return __accu0__;
/* 000392 */ 		}) ();
/* 000396 */ 		// pass;
/* 000400 */ 		(function () {
/* 000400 */ 			var __accu0__ = self;
/* 000400 */ 			return __call__ (__accu0__.add_celldata, __accu0__, placement_mapping_spec, styles_mapping, data_content_nodes);
/* 000400 */ 		}) ();
/* 000400 */ 	});},
/* 000403 */ 	get add_celldata () {return __get__ (this, function (self, placement_mapping_spec, styles_mapping, data_content_nodes) {
/* 000403 */ 		if (arguments.length) {
/* 000403 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000403 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000403 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000403 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000403 */ 					switch (__attrib0__) {
/* 000403 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000403 */ 						case 'placement_mapping_spec': var placement_mapping_spec = __allkwargs0__ [__attrib0__]; break;
/* 000403 */ 						case 'styles_mapping': var styles_mapping = __allkwargs0__ [__attrib0__]; break;
/* 000403 */ 						case 'data_content_nodes': var data_content_nodes = __allkwargs0__ [__attrib0__]; break;
/* 000403 */ 					}
/* 000403 */ 				}
/* 000403 */ 			}
/* 000403 */ 		}
/* 000403 */ 		else {
/* 000403 */ 		}
/* 000405 */ 		var placement_mapping = (function () {
/* 000405 */ 			var __accu0__ = self;
/* 000405 */ 			return __call__ (__accu0__.parse_placement_mapping_spec, __accu0__, placement_mapping_spec);
/* 000405 */ 		}) ();
/* 000409 */ 		// pass;
/* 000413 */ 		var __left0__ = (function () {
/* 000413 */ 			var __accu0__ = placement_mapping;
/* 000413 */ 			return __call__ (__accu0__.start_row_col, __accu0__, __kwargtrans__ ({current_row: self.current_row, current_col: self.current_col}));
/* 000413 */ 		}) ();
/* 000413 */ 		self.current_row = __left0__ [0];
/* 000413 */ 		self.current_col = __left0__ [1];
/* 000417 */ 		var data_row_j = 0;
/* 000418 */ 		var __iterable0__ = data_content_nodes;
/* 000418 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000418 */ 			var data_row_data = __getitem__ (__iterable0__, __index0__);
/* 000420 */ 			var data_col_j = 0;
/* 000421 */ 			var __iterable1__ = data_row_data;
/* 000421 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000421 */ 				var cell_content = __getitem__ (__iterable1__, __index1__);
/* 000423 */ 				var row_range = (function () {
/* 000423 */ 					var __accu0__ = placement_mapping;
/* 000423 */ 					return __call__ (__accu0__.get_row_index_range, __accu0__, data_row_j, __kwargtrans__ ({current_row: self.current_row}));
/* 000423 */ 				}) ();
/* 000426 */ 				var col_range = (function () {
/* 000426 */ 					var __accu0__ = placement_mapping;
/* 000426 */ 					return __call__ (__accu0__.get_col_index_range, __accu0__, data_col_j, __kwargtrans__ ({current_col: self.current_col}));
/* 000426 */ 				}) ();
/* 000429 */ 				var placement = __call__ (CellPlacementModel, null, __kwargtrans__ ({row_range: row_range, col_range: col_range}));
/* 000434 */ 				if (__t__ (__lt__ (data_col_j, __call__ (len, null, styles_mapping)))) {
/* 000435 */ 					var styles = __getitem__ (styles_mapping, data_col_j);
/* 000435 */ 				}
/* 000436 */ 				else {
/* 000437 */ 					var styles = __getitem__ (styles_mapping, __neg__ (1));
/* 000437 */ 				}
/* 000440 */ 				var cell_content_nl = (function () {
/* 000440 */ 					var __accu0__ = cell_content.latex_walker;
/* 000440 */ 					return __call__ (__accu0__.filter_whitespace_comments_nodes, __accu0__, cell_content);
/* 000440 */ 				}) ();
/* 000444 */ 				// pass;
/* 000452 */ 				if (__t__ (__t__ (__eq__ (__call__ (len, null, cell_content_nl), 1)) && __t__ ((function () {
/* 000452 */ 					var __accu0__ = __getitem__ (cell_content_nl, 0);
/* 000452 */ 					return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000452 */ 				}) ()) && __eq__ (__getitem__ (cell_content_nl, 0).macroname, 'cell'))) {
/* 000455 */ 					var cell = (function () {
/* 000455 */ 						var __accu0__ = self;
/* 000455 */ 						return __call__ (__accu0__.add_cell_node, __accu0__, __getitem__ (cell_content_nl, 0), __kwargtrans__ ({default_placement: placement, default_styles: styles}));
/* 000455 */ 					}) ();
/* 000458 */ 					var data_col_j = __call__ (__iadd__, null, data_col_j, __sub__ (cell.placement.col_range.end, cell.placement.col_range.start));
/* 000458 */ 				}
/* 000461 */ 				else if (__t__ (__eq__ (__call__ (len, null, cell_content_nl), 0))) {
/* 000464 */ 					self.current_col = col_range.end;
/* 000465 */ 					var data_col_j = __call__ (__iadd__, null, data_col_j, 1);
/* 000465 */ 				}
/* 000466 */ 				else {
/* 000468 */ 					(function () {
/* 000468 */ 						var __accu0__ = self;
/* 000468 */ 						return __call__ (__accu0__.add_cell, __accu0__, placement, styles, cell_content);
/* 000468 */ 					}) ();
/* 000469 */ 					var data_col_j = __call__ (__iadd__, null, data_col_j, 1);
/* 000469 */ 				}
/* 000469 */ 			}
/* 000471 */ 			(function () {
/* 000471 */ 				var __accu0__ = self;
/* 000471 */ 				return __call__ (__accu0__.move_next_row, __accu0__);
/* 000471 */ 			}) ();
/* 000472 */ 			var data_row_j = __call__ (__iadd__, null, data_row_j, 1);
/* 000473 */ 			var data_col_j = 0;
/* 000473 */ 		}
/* 000473 */ 	});},
/* 000478 */ 	_rx_int: (function () {
/* 000478 */ 		var __accu0__ = re;
/* 000478 */ 		return __call__ (__accu0__.compile, __accu0__, '^\\d+$');
/* 000478 */ 	}) (),
/* 000480 */ 	get parse_cell_index_spec () {return __get__ (this, function (self, index_spec, is_row, is_col, py_default) {
/* 000480 */ 		if (typeof is_row == 'undefined' || (is_row != null && is_row.hasOwnProperty ("__kwargtrans__"))) {;
/* 000480 */ 			var is_row = false;
/* 000480 */ 		};
/* 000480 */ 		if (typeof is_col == 'undefined' || (is_col != null && is_col.hasOwnProperty ("__kwargtrans__"))) {;
/* 000480 */ 			var is_col = false;
/* 000480 */ 		};
/* 000480 */ 		if (typeof py_default == 'undefined' || (py_default != null && py_default.hasOwnProperty ("__kwargtrans__"))) {;
/* 000480 */ 			var py_default = _NotSpecified;
/* 000480 */ 		};
/* 000480 */ 		if (arguments.length) {
/* 000480 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000480 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000480 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000480 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000480 */ 					switch (__attrib0__) {
/* 000480 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000480 */ 						case 'index_spec': var index_spec = __allkwargs0__ [__attrib0__]; break;
/* 000480 */ 						case 'is_row': var is_row = __allkwargs0__ [__attrib0__]; break;
/* 000480 */ 						case 'is_col': var is_col = __allkwargs0__ [__attrib0__]; break;
/* 000480 */ 						case 'py_default': var py_default = __allkwargs0__ [__attrib0__]; break;
/* 000480 */ 					}
/* 000480 */ 				}
/* 000480 */ 			}
/* 000480 */ 		}
/* 000480 */ 		else {
/* 000480 */ 		}
/* 000483 */ 		if (__t__ (__call__ (isinstance, null, index_spec, str))) {
/* 000484 */ 			var index_spec_s = index_spec;
/* 000484 */ 		}
/* 000485 */ 		else {
/* 000487 */ 			var index_spec_s = (function () {
/* 000487 */ 				var __accu0__ = index_spec;
/* 000487 */ 				return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000487 */ 			}) ();
/* 000487 */ 		}
/* 000489 */ 		var index_spec_s = (function () {
/* 000489 */ 			var __accu0__ = index_spec_s;
/* 000489 */ 			return __call__ (__accu0__.strip, __accu0__);
/* 000489 */ 		}) ();
/* 000492 */ 		if (__t__ (__t__ (!__t__ ((index_spec_s))) || __eq__ (index_spec_s, '.'))) {
/* 000493 */ 			if (__t__ (py_default !== _NotSpecified)) {
/* 000494 */ 				return py_default;
/* 000494 */ 			}
/* 000495 */ 			if (__t__ (is_row)) {
/* 000496 */ 				return self.current_row;
/* 000496 */ 			}
/* 000497 */ 			if (__t__ (is_col)) {
/* 000498 */ 				return self.current_col;
/* 000498 */ 			}
/* 000499 */ 			var __except0__ = __call__ (RuntimeError, null, 'Internal error: Neither is_row nor is_col is set!');
/* 000499 */ 			__except0__.__cause__ = null;
/* 000499 */ 			throw __except0__;
/* 000499 */ 		}
/* 000502 */ 		if (__t__ ((function () {
/* 000502 */ 			var __accu0__ = self._rx_int;
/* 000502 */ 			return __call__ (__accu0__.match, __accu0__, index_spec_s);
/* 000502 */ 		}) ())) {
/* 000503 */ 			return __sub__ (__call__ (int, null, index_spec_s), 1);
/* 000503 */ 		}
/* 000506 */ 		if (__t__ (__t__ (is_row) && __in__ (index_spec_s, self.row_names))) {
/* 000507 */ 			return __getitem__ (self.row_names, index_spec_s);
/* 000507 */ 		}
/* 000508 */ 		if (__t__ (__t__ (is_col) && __in__ (index_spec_s, self.col_names))) {
/* 000509 */ 			return __getitem__ (self.col_names, index_spec_s);
/* 000509 */ 		}
/* 000511 */ 		var __except0__ = __call__ (ValueError, null, 'Invalid cell index: ‘{}’, expected number or valid alias name'.format (index_spec_s));
/* 000511 */ 		__except0__.__cause__ = null;
/* 000511 */ 		throw __except0__;
/* 000511 */ 	});},
/* 000515 */ 	get parse_cell_index_range_spec () {return __get__ (this, function (self, range_spec_s, is_row, is_col, py_default, default_start, default_end) {
/* 000515 */ 		if (typeof is_row == 'undefined' || (is_row != null && is_row.hasOwnProperty ("__kwargtrans__"))) {;
/* 000515 */ 			var is_row = false;
/* 000515 */ 		};
/* 000515 */ 		if (typeof is_col == 'undefined' || (is_col != null && is_col.hasOwnProperty ("__kwargtrans__"))) {;
/* 000515 */ 			var is_col = false;
/* 000515 */ 		};
/* 000515 */ 		if (typeof py_default == 'undefined' || (py_default != null && py_default.hasOwnProperty ("__kwargtrans__"))) {;
/* 000515 */ 			var py_default = _NotSpecified;
/* 000515 */ 		};
/* 000515 */ 		if (typeof default_start == 'undefined' || (default_start != null && default_start.hasOwnProperty ("__kwargtrans__"))) {;
/* 000515 */ 			var default_start = null;
/* 000515 */ 		};
/* 000515 */ 		if (typeof default_end == 'undefined' || (default_end != null && default_end.hasOwnProperty ("__kwargtrans__"))) {;
/* 000515 */ 			var default_end = null;
/* 000515 */ 		};
/* 000515 */ 		if (arguments.length) {
/* 000515 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000515 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000515 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000515 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000515 */ 					switch (__attrib0__) {
/* 000515 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000515 */ 						case 'range_spec_s': var range_spec_s = __allkwargs0__ [__attrib0__]; break;
/* 000515 */ 						case 'is_row': var is_row = __allkwargs0__ [__attrib0__]; break;
/* 000515 */ 						case 'is_col': var is_col = __allkwargs0__ [__attrib0__]; break;
/* 000515 */ 						case 'py_default': var py_default = __allkwargs0__ [__attrib0__]; break;
/* 000515 */ 						case 'default_start': var default_start = __allkwargs0__ [__attrib0__]; break;
/* 000515 */ 						case 'default_end': var default_end = __allkwargs0__ [__attrib0__]; break;
/* 000515 */ 					}
/* 000515 */ 				}
/* 000515 */ 			}
/* 000515 */ 		}
/* 000515 */ 		else {
/* 000515 */ 		}
/* 000519 */ 		if (__t__ (__in__ (',', range_spec_s))) {
/* 000521 */ 			var parts = (function () {
/* 000521 */ 				var __accu0__ = range_spec_s;
/* 000521 */ 				return __call__ (__accu0__.py_split, __accu0__, ',');
/* 000521 */ 			}) ();
/* 000522 */ 			var include_array = [];
/* 000523 */ 			var overall_start = null;
/* 000524 */ 			var overall_end = null;
/* 000525 */ 			var __iterable0__ = parts;
/* 000525 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000525 */ 				var part = __getitem__ (__iterable0__, __index0__);
/* 000526 */ 				var __left0__ = (function () {
/* 000526 */ 					var __accu0__ = self;
/* 000526 */ 					return __call__ (__accu0__.parse_cell_index_range_spec, __accu0__, part, __kwargtrans__ ({is_row: is_row, is_col: is_col, py_default: py_default}));
/* 000526 */ 				}) ();
/* 000526 */ 				var start = __left0__ [0];
/* 000526 */ 				var end = __left0__ [1];
/* 000530 */ 				for (var idx = start; idx < end; idx++) {
/* 000531 */ 					if (__t__ (__ge__ (idx, __call__ (len, null, include_array)))) {
/* 000532 */ 						var include_array = __call__ (__iadd__, null, include_array, (function () {
/* 000532 */ 							var __accu0__ = [];
/* 000532 */ 							for (var _ = 0; _ < __add__ (__sub__ (end, __call__ (len, null, include_array)), 1); _++) {
/* 000532 */ 								(function () {
/* 000532 */ 									var __accu1__ = __accu0__;
/* 000532 */ 									return __call__ (__accu1__.append, __accu1__, false);
/* 000532 */ 								}) ();
/* 000532 */ 							}
/* 000532 */ 							return __accu0__;
/* 000532 */ 						}) ());
/* 000532 */ 					}
/* 000533 */ 					__setitem__ (include_array, idx, true);
/* 000533 */ 				}
/* 000534 */ 				if (__t__ (__t__ (overall_start === null) || __gt__ (overall_start, start))) {
/* 000535 */ 					var overall_start = start;
/* 000535 */ 				}
/* 000536 */ 				if (__t__ (__t__ (overall_end === null) || __lt__ (overall_end, end))) {
/* 000537 */ 					var overall_end = end;
/* 000537 */ 				}
/* 000537 */ 			}
/* 000539 */ 			for (var idx = overall_start; idx < overall_end; idx++) {
/* 000540 */ 				if (__t__ (!__t__ ((__getitem__ (include_array, idx))))) {
/* 000541 */ 					var __except0__ = __call__ (ValueError, null, 'Specified range ‘{}’ is not contiguous'.format (range_spec_s));
/* 000541 */ 					__except0__.__cause__ = null;
/* 000541 */ 					throw __except0__;
/* 000541 */ 				}
/* 000541 */ 			}
/* 000544 */ 			return tuple ([overall_start, overall_end]);
/* 000544 */ 		}
/* 000546 */ 		if (__t__ (__in__ ('-', range_spec_s))) {
/* 000548 */ 			var __left0__ = (function () {
/* 000548 */ 				var __accu0__ = range_spec_s;
/* 000548 */ 				return __call__ (__accu0__.py_split, __accu0__, '-', 1);
/* 000548 */ 			}) ();
/* 000548 */ 			var start_spec = __left0__ [0];
/* 000548 */ 			var end_spec = __left0__ [1];
/* 000549 */ 			var start = (function () {
/* 000549 */ 				var __accu0__ = self;
/* 000549 */ 				return __call__ (__accu0__.parse_cell_index_spec, __accu0__, start_spec, __kwargtrans__ ({is_row: is_row, is_col: is_col, py_default: default_start}));
/* 000549 */ 			}) ();
/* 000552 */ 			var end_incl = (function () {
/* 000552 */ 				var __accu0__ = self;
/* 000552 */ 				return __call__ (__accu0__.parse_cell_index_spec, __accu0__, end_spec, __kwargtrans__ ({is_row: is_row, is_col: is_col, py_default: null}));
/* 000552 */ 			}) ();
/* 000555 */ 			if (__t__ (end_incl === null)) {
/* 000556 */ 				var end = default_end;
/* 000556 */ 			}
/* 000557 */ 			else {
/* 000558 */ 				var end = __add__ (end_incl, 1);
/* 000558 */ 			}
/* 000559 */ 			return tuple ([start, end]);
/* 000559 */ 		}
/* 000561 */ 		if (__t__ (__in__ ('+', range_spec_s))) {
/* 000563 */ 			var __left0__ = (function () {
/* 000563 */ 				var __accu0__ = range_spec_s;
/* 000563 */ 				return __call__ (__accu0__.py_split, __accu0__, '+', 1);
/* 000563 */ 			}) ();
/* 000563 */ 			var start_spec = __left0__ [0];
/* 000563 */ 			var len_spec = __left0__ [1];
/* 000564 */ 			var start = (function () {
/* 000564 */ 				var __accu0__ = self;
/* 000564 */ 				return __call__ (__accu0__.parse_cell_index_spec, __accu0__, start_spec, __kwargtrans__ ({is_row: is_row, is_col: is_col, py_default: py_default}));
/* 000564 */ 			}) ();
/* 000567 */ 			if (__t__ (!__t__ (((function () {
/* 000567 */ 				var __accu0__ = self._rx_int;
/* 000567 */ 				return __call__ (__accu0__.match, __accu0__, len_spec);
/* 000567 */ 			}) ())))) {
/* 000568 */ 				var __except0__ = __call__ (ValueError, null, 'Invalid number in ‘START+N’ cell index range specification: ‘{}’'.format (len_spec));
/* 000568 */ 				__except0__.__cause__ = null;
/* 000568 */ 				throw __except0__;
/* 000568 */ 			}
/* 000571 */ 			var range_len = __call__ (int, null, len_spec);
/* 000574 */ 			var end = __add__ (start, range_len);
/* 000575 */ 			return tuple ([start, end]);
/* 000575 */ 		}
/* 000577 */ 		var idx = (function () {
/* 000577 */ 			var __accu0__ = self;
/* 000577 */ 			return __call__ (__accu0__.parse_cell_index_spec, __accu0__, range_spec_s, __kwargtrans__ ({is_row: is_row, is_col: is_col, py_default: py_default}));
/* 000577 */ 		}) ();
/* 000580 */ 		return tuple ([idx, __add__ (idx, 1)]);
/* 000580 */ 	});},
/* 000583 */ 	get parse_placement_index_spec () {return __get__ (this, function (self, placement_index_spec, is_row, is_col, py_default, default_start, default_end) {
/* 000583 */ 		if (typeof is_row == 'undefined' || (is_row != null && is_row.hasOwnProperty ("__kwargtrans__"))) {;
/* 000583 */ 			var is_row = false;
/* 000583 */ 		};
/* 000583 */ 		if (typeof is_col == 'undefined' || (is_col != null && is_col.hasOwnProperty ("__kwargtrans__"))) {;
/* 000583 */ 			var is_col = false;
/* 000583 */ 		};
/* 000583 */ 		if (typeof py_default == 'undefined' || (py_default != null && py_default.hasOwnProperty ("__kwargtrans__"))) {;
/* 000583 */ 			var py_default = _NotSpecified;
/* 000583 */ 		};
/* 000583 */ 		if (typeof default_start == 'undefined' || (default_start != null && default_start.hasOwnProperty ("__kwargtrans__"))) {;
/* 000583 */ 			var default_start = 0;
/* 000583 */ 		};
/* 000583 */ 		if (typeof default_end == 'undefined' || (default_end != null && default_end.hasOwnProperty ("__kwargtrans__"))) {;
/* 000583 */ 			var default_end = _NotSpecified;
/* 000583 */ 		};
/* 000583 */ 		if (arguments.length) {
/* 000583 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000583 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000583 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000583 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000583 */ 					switch (__attrib0__) {
/* 000583 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000583 */ 						case 'placement_index_spec': var placement_index_spec = __allkwargs0__ [__attrib0__]; break;
/* 000583 */ 						case 'is_row': var is_row = __allkwargs0__ [__attrib0__]; break;
/* 000583 */ 						case 'is_col': var is_col = __allkwargs0__ [__attrib0__]; break;
/* 000583 */ 						case 'py_default': var py_default = __allkwargs0__ [__attrib0__]; break;
/* 000583 */ 						case 'default_start': var default_start = __allkwargs0__ [__attrib0__]; break;
/* 000583 */ 						case 'default_end': var default_end = __allkwargs0__ [__attrib0__]; break;
/* 000583 */ 					}
/* 000583 */ 				}
/* 000583 */ 			}
/* 000583 */ 		}
/* 000583 */ 		else {
/* 000583 */ 		}
/* 000588 */ 		if (__t__ (__eq__ (__call__ (len, null, placement_index_spec), 0))) {
/* 000589 */ 			if (__t__ (is_row)) {
/* 000590 */ 				return __call__ (CellIndexRangeModel, null, __kwargtrans__ ({start: self.current_row, end: __add__ (self.current_row, 1)}));
/* 000590 */ 			}
/* 000591 */ 			else if (__t__ (is_col)) {
/* 000592 */ 				return __call__ (CellIndexRangeModel, null, __kwargtrans__ ({start: self.current_col, end: __add__ (self.current_col, 1)}));
/* 000592 */ 			}
/* 000593 */ 			else {
/* 000594 */ 				var __except0__ = __call__ (RuntimeError, null, 'Internal error, neither is_row nor is_col was set here.');
/* 000594 */ 				__except0__.__cause__ = null;
/* 000594 */ 				throw __except0__;
/* 000594 */ 			}
/* 000594 */ 		}
/* 000596 */ 		var nl = (function () {
/* 000596 */ 			var __accu0__ = placement_index_spec.latex_walker;
/* 000596 */ 			return __call__ (__accu0__.filter_whitespace_comments_nodes, __accu0__, placement_index_spec);
/* 000596 */ 		}) ();
/* 000600 */ 		if (__t__ (__ne__ (__call__ (len, null, nl), 1))) {
/* 000601 */ 			if (__t__ (is_row)) {
/* 000602 */ 				var PLACEHOLDER = 'ROW';
/* 000602 */ 			}
/* 000603 */ 			else if (__t__ (is_col)) {
/* 000604 */ 				var PLACEHOLDER = 'COL';
/* 000604 */ 			}
/* 000605 */ 			else {
/* 000606 */ 				var PLACEHOLDER = null;
/* 000606 */ 			}
/* 000610 */ 			var __except0__ = __call__ (LatexWalkerLocatedError, null, 'Bad cell index or merge range specification, expected ‘{}’ or ‘\\merge{}{}-RANGE{}’, got {} ({} nodes)'.format (PLACEHOLDER, '{', PLACEHOLDER, '}', __call__ (repr, null, placement_index_spec), __call__ (len, null, nl)), __kwargtrans__ ({pos: nl.pos}));
/* 000610 */ 			__except0__.__cause__ = null;
/* 000610 */ 			throw __except0__;
/* 000610 */ 		}
/* 000614 */ 		var node = __getitem__ (nl, 0);
/* 000616 */ 		if (__t__ (__t__ ((function () {
/* 000616 */ 			var __accu0__ = node;
/* 000616 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000616 */ 		}) ()) && __eq__ (node.macroname, 'merge'))) {
/* 000620 */ 			var merge_node_args = (function () {
/* 000620 */ 				var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000620 */ 				return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['mergespec']));
/* 000620 */ 			}) ();
/* 000624 */ 			var range_spec_s = (function () {
/* 000624 */ 				var __accu0__ = __getitem__ (merge_node_args, 'mergespec');
/* 000624 */ 				return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000624 */ 			}) ();
/* 000626 */ 			var default_end_computed = default_end;
/* 000627 */ 			if (__t__ (default_end_computed === _NotSpecified)) {
/* 000628 */ 				if (__t__ (is_row)) {
/* 000629 */ 					var default_end_computed = __getitem__ (self.cells_size, 0);
/* 000629 */ 				}
/* 000630 */ 				if (__t__ (is_col)) {
/* 000631 */ 					var default_end_computed = __getitem__ (self.cells_size, 1);
/* 000631 */ 				}
/* 000631 */ 			}
/* 000633 */ 			var __left0__ = (function () {
/* 000633 */ 				var __accu0__ = self;
/* 000633 */ 				return __call__ (__accu0__.parse_cell_index_range_spec, __accu0__, range_spec_s, __kwargtrans__ ({is_row: is_row, is_col: is_col, default_start: default_start, default_end: default_end_computed}));
/* 000633 */ 			}) ();
/* 000633 */ 			var start = __left0__ [0];
/* 000633 */ 			var end = __left0__ [1];
/* 000638 */ 			return __call__ (CellIndexRangeModel, null, __kwargtrans__ ({start: start, end: end}));
/* 000638 */ 		}
/* 000641 */ 		var idx = (function () {
/* 000641 */ 			var __accu0__ = self;
/* 000642 */ 			return __call__ (__accu0__.parse_cell_index_spec, __accu0__, (function () {
/* 000642 */ 				var __accu1__ = nl;
/* 000642 */ 				return __call__ (__accu1__.get_content_as_chars, __accu1__);
/* 000642 */ 			}) (), __kwargtrans__ ({is_row: is_row, is_col: is_col, py_default: py_default}));
/* 000642 */ 		}) ();
/* 000645 */ 		return __call__ (CellIndexRangeModel, null, __kwargtrans__ ({start: idx, end: __add__ (idx, 1)}));
/* 000645 */ 	});},
/* 000648 */ 	get parse_placement_spec () {return __get__ (this, function (self, placement_spec) {
/* 000648 */ 		if (arguments.length) {
/* 000648 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000648 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000648 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000648 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000648 */ 					switch (__attrib0__) {
/* 000648 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000648 */ 						case 'placement_spec': var placement_spec = __allkwargs0__ [__attrib0__]; break;
/* 000648 */ 					}
/* 000648 */ 				}
/* 000648 */ 			}
/* 000648 */ 		}
/* 000648 */ 		else {
/* 000648 */ 		}
/* 000650 */ 		if (__t__ (__call__ (isinstance, null, placement_spec, CellPlacementModel))) {
/* 000651 */ 			return placement_spec;
/* 000651 */ 		}
/* 000653 */ 		var __left0__ = tuple ([[], []]);
/* 000653 */ 		var row_spec_nl = __left0__ [0];
/* 000653 */ 		var col_spec_nl = __left0__ [1];
/* 000655 */ 		if (__t__ (placement_spec !== null)) {
/* 000657 */ 			var placement_spec_split = (function () {
/* 000657 */ 				var __accu0__ = placement_spec;
/* 000657 */ 				return __call__ (__accu0__.split_at_chars, __accu0__, ';', __kwargtrans__ ({keep_empty: true}));
/* 000657 */ 			}) ();
/* 000659 */ 			if (__t__ (__eq__ (__call__ (len, null, placement_spec_split), 2))) {
/* 000661 */ 				var __left0__ = placement_spec_split;
/* 000661 */ 				var row_spec_nl = __left0__ [0];
/* 000661 */ 				var col_spec_nl = __left0__ [1];
/* 000661 */ 			}
/* 000663 */ 			else if (__t__ (__eq__ (__call__ (len, null, placement_spec_split), 1))) {
/* 000665 */ 				var __left0__ = placement_spec_split;
/* 000665 */ 				var col_spec_nl = __left0__ [0];
/* 000665 */ 			}
/* 000667 */ 			else if (__t__ (__eq__ (__call__ (len, null, placement_spec_split), 0))) {
/* 000670 */ 				// pass;
/* 000670 */ 			}
/* 000671 */ 			else {
/* 000676 */ 				var __except0__ = __call__ (LatexWalkerLocatedError, null, 'Bad cell placement specification, expected ‘ROW;COL’ or ‘COL’, got ‘{}’'.format (__call__ (_splfysidews, null, (function () {
/* 000676 */ 					var __accu0__ = placement_spec;
/* 000676 */ 					return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000676 */ 				}) ())), __kwargtrans__ ({pos: placement_spec.pos}));
/* 000676 */ 				__except0__.__cause__ = null;
/* 000676 */ 				throw __except0__;
/* 000676 */ 			}
/* 000676 */ 		}
/* 000680 */ 		var row_range = (function () {
/* 000680 */ 			var __accu0__ = self;
/* 000680 */ 			return __call__ (__accu0__.parse_placement_index_spec, __accu0__, row_spec_nl, __kwargtrans__ ({is_row: true}));
/* 000680 */ 		}) ();
/* 000681 */ 		var col_range = (function () {
/* 000681 */ 			var __accu0__ = self;
/* 000681 */ 			return __call__ (__accu0__.parse_placement_index_spec, __accu0__, col_spec_nl, __kwargtrans__ ({is_col: true}));
/* 000681 */ 		}) ();
/* 000683 */ 		return __call__ (CellPlacementModel, null, __kwargtrans__ ({row_range: row_range, col_range: col_range}));
/* 000683 */ 	});},
/* 000688 */ 	get parse_placement_mapping_index_spec () {return __get__ (this, function (self, placement_mapping_index_spec, index_end, is_row, is_col) {
/* 000688 */ 		if (typeof is_row == 'undefined' || (is_row != null && is_row.hasOwnProperty ("__kwargtrans__"))) {;
/* 000688 */ 			var is_row = false;
/* 000688 */ 		};
/* 000688 */ 		if (typeof is_col == 'undefined' || (is_col != null && is_col.hasOwnProperty ("__kwargtrans__"))) {;
/* 000688 */ 			var is_col = false;
/* 000688 */ 		};
/* 000688 */ 		if (arguments.length) {
/* 000688 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000688 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000688 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000688 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000688 */ 					switch (__attrib0__) {
/* 000688 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000688 */ 						case 'placement_mapping_index_spec': var placement_mapping_index_spec = __allkwargs0__ [__attrib0__]; break;
/* 000688 */ 						case 'index_end': var index_end = __allkwargs0__ [__attrib0__]; break;
/* 000688 */ 						case 'is_row': var is_row = __allkwargs0__ [__attrib0__]; break;
/* 000688 */ 						case 'is_col': var is_col = __allkwargs0__ [__attrib0__]; break;
/* 000688 */ 					}
/* 000688 */ 				}
/* 000688 */ 			}
/* 000688 */ 		}
/* 000688 */ 		else {
/* 000688 */ 		}
/* 000691 */ 		if (__t__ (__eq__ (__call__ (len, null, placement_mapping_index_spec), 0))) {
/* 000693 */ 			return [];
/* 000693 */ 		}
/* 000695 */ 		var parts = (function () {
/* 000695 */ 			var __accu0__ = placement_mapping_index_spec;
/* 000695 */ 			return __call__ (__accu0__.split_at_chars, __accu0__, ',', __kwargtrans__ ({keep_empty: true}));
/* 000695 */ 		}) ();
/* 000698 */ 		var current_idx = 0;
/* 000700 */ 		var index_placements = [];
/* 000701 */ 		var __iterable0__ = parts;
/* 000701 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000701 */ 			var placement_part_spec = __getitem__ (__iterable0__, __index0__);
/* 000706 */ 			var nl = (function () {
/* 000706 */ 				var __accu0__ = placement_part_spec.latex_walker;
/* 000706 */ 				return __call__ (__accu0__.filter_whitespace_comments_nodes, __accu0__, placement_part_spec);
/* 000706 */ 			}) ();
/* 000710 */ 			if (__t__ (__ne__ (__call__ (len, null, nl), 1))) {
/* 000711 */ 				if (__t__ (is_row)) {
/* 000712 */ 					var PLACEHOLDER = 'ROW-RANGE';
/* 000712 */ 				}
/* 000713 */ 				else if (__t__ (is_col)) {
/* 000714 */ 					var PLACEHOLDER = 'COL-RANGE';
/* 000714 */ 				}
/* 000715 */ 				else {
/* 000716 */ 					var PLACEHOLDER = null;
/* 000716 */ 				}
/* 000721 */ 				var __except0__ = __call__ (LatexWalkerLocatedError, null, 'Bad cell index or range or merge range specification, expected ‘{}’ or ‘\\merge{}{}-RANGE{}’, got {} ({} nodes)'.format (PLACEHOLDER, '{', PLACEHOLDER, '}', __call__ (repr, null, placement_index_spec), __call__ (len, null, nl)), __kwargtrans__ ({pos: nl.pos}));
/* 000721 */ 				__except0__.__cause__ = null;
/* 000721 */ 				throw __except0__;
/* 000721 */ 			}
/* 000725 */ 			var node = __getitem__ (nl, 0);
/* 000727 */ 			if (__t__ (__t__ ((function () {
/* 000727 */ 				var __accu0__ = node;
/* 000727 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000727 */ 			}) ()) && __eq__ (node.macroname, 'merge'))) {
/* 000731 */ 				var merge_node_args = (function () {
/* 000731 */ 					var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000731 */ 					return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['mergespec']));
/* 000731 */ 				}) ();
/* 000735 */ 				var range_spec_s = (function () {
/* 000735 */ 					var __accu0__ = __getitem__ (merge_node_args, 'mergespec');
/* 000735 */ 					return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000735 */ 				}) ();
/* 000737 */ 				var __left0__ = (function () {
/* 000737 */ 					var __accu0__ = self;
/* 000737 */ 					return __call__ (__accu0__.parse_cell_index_range_spec, __accu0__, range_spec_s, __kwargtrans__ ({is_row: is_row, is_col: is_col, py_default: current_idx, default_start: current_idx, default_end: null}));
/* 000737 */ 				}) ();
/* 000737 */ 				var start = __left0__ [0];
/* 000737 */ 				var end = __left0__ [1];
/* 000743 */ 				(function () {
/* 000743 */ 					var __accu0__ = index_placements;
/* 000743 */ 					return __call__ (__accu0__.append, __accu0__, __call__ (CellIndexRangeModel, null, __kwargtrans__ ({start: start, end: end})));
/* 000743 */ 				}) ();
/* 000744 */ 				var current_idx = end;
/* 000744 */ 				continue;
/* 000744 */ 			}
/* 000748 */ 			var __left0__ = (function () {
/* 000748 */ 				var __accu0__ = self;
/* 000749 */ 				return __call__ (__accu0__.parse_cell_index_range_spec, __accu0__, (function () {
/* 000749 */ 					var __accu1__ = nl;
/* 000749 */ 					return __call__ (__accu1__.get_content_as_chars, __accu1__);
/* 000749 */ 				}) (), __kwargtrans__ ({is_row: is_row, is_col: is_col, py_default: current_idx, default_start: current_idx, default_end: null}));
/* 000749 */ 			}) ();
/* 000749 */ 			var iter_start = __left0__ [0];
/* 000749 */ 			var iter_end = __left0__ [1];
/* 000753 */ 			if (__t__ (iter_end === null)) {
/* 000754 */ 				(function () {
/* 000754 */ 					var __accu0__ = index_placements;
/* 000754 */ 					return __call__ (__accu0__.append, __accu0__, __call__ (CellIndexRangeModel, null, __kwargtrans__ ({start: iter_start, end: null})));
/* 000754 */ 				}) ();
/* 000755 */ 				var current_idx = null;
/* 000755 */ 			}
/* 000756 */ 			else {
/* 000758 */ 				for (var j = iter_start; j < iter_end; j++) {
/* 000759 */ 					(function () {
/* 000759 */ 						var __accu0__ = index_placements;
/* 000759 */ 						return __call__ (__accu0__.append, __accu0__, __call__ (CellIndexRangeModel, null, __kwargtrans__ ({start: j, end: __add__ (j, 1)})));
/* 000759 */ 					}) ();
/* 000760 */ 					var current_idx = __add__ (j, 1);
/* 000760 */ 				}
/* 000760 */ 			}
/* 000760 */ 			continue;
/* 000760 */ 		}
/* 000764 */ 		return index_placements;
/* 000764 */ 	});},
/* 000766 */ 	get parse_placement_mapping_spec () {return __get__ (this, function (self, placement_mapping_spec) {
/* 000766 */ 		if (arguments.length) {
/* 000766 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000766 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000766 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000766 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000766 */ 					switch (__attrib0__) {
/* 000766 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000766 */ 						case 'placement_mapping_spec': var placement_mapping_spec = __allkwargs0__ [__attrib0__]; break;
/* 000766 */ 					}
/* 000766 */ 				}
/* 000766 */ 			}
/* 000766 */ 		}
/* 000766 */ 		else {
/* 000766 */ 		}
/* 000769 */ 		var placement_mapping_spec_split = (function () {
/* 000769 */ 			var __accu0__ = placement_mapping_spec;
/* 000769 */ 			return __call__ (__accu0__.split_at_chars, __accu0__, ';', __kwargtrans__ ({keep_empty: true}));
/* 000769 */ 		}) ();
/* 000771 */ 		if (__t__ (__eq__ (__call__ (len, null, placement_mapping_spec_split), 2))) {
/* 000773 */ 			var __left0__ = placement_mapping_spec_split;
/* 000773 */ 			var row_mapping_spec = __left0__ [0];
/* 000773 */ 			var col_mapping_spec = __left0__ [1];
/* 000773 */ 		}
/* 000775 */ 		else if (__t__ (__eq__ (__call__ (len, null, placement_mapping_spec_split), 1))) {
/* 000777 */ 			var row_mapping_spec = [];
/* 000778 */ 			var __left0__ = placement_mapping_spec_split;
/* 000778 */ 			var col_mapping_spec = __left0__ [0];
/* 000778 */ 		}
/* 000780 */ 		else if (__t__ (__eq__ (__call__ (len, null, placement_mapping_spec_split), 0))) {
/* 000782 */ 			var __left0__ = tuple ([[], []]);
/* 000782 */ 			var row_mapping_spec = __left0__ [0];
/* 000782 */ 			var col_mapping_spec = __left0__ [1];
/* 000782 */ 		}
/* 000783 */ 		else {
/* 000788 */ 			var __except0__ = __call__ (LatexWalkerLocatedError, null, 'Expected ‘ROWS;COLS’ or ‘COLS’ or ‘’ for placement argument, got ‘{}’'.format (__call__ (_splfysidews, null, (function () {
/* 000788 */ 				var __accu0__ = placement_mapping_spec;
/* 000788 */ 				return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000788 */ 			}) ())), __kwargtrans__ ({pos: placement_mapping_spec.pos}));
/* 000788 */ 			__except0__.__cause__ = null;
/* 000788 */ 			throw __except0__;
/* 000788 */ 		}
/* 000792 */ 		var row_placements = (function () {
/* 000792 */ 			var __accu0__ = self;
/* 000792 */ 			return __call__ (__accu0__.parse_placement_mapping_index_spec, __accu0__, row_mapping_spec, __kwargtrans__ ({index_end: null, is_row: true}));
/* 000792 */ 		}) ();
/* 000795 */ 		var col_placements = (function () {
/* 000795 */ 			var __accu0__ = self;
/* 000795 */ 			return __call__ (__accu0__.parse_placement_mapping_index_spec, __accu0__, col_mapping_spec, __kwargtrans__ ({index_end: null, is_col: true}));
/* 000795 */ 		}) ();
/* 000799 */ 		return __call__ (CellPlacementsMappingModel, null, __kwargtrans__ ({row_placements: row_placements, col_placements: col_placements}));
/* 000799 */ 	});}
/* 000799 */ });
/* 000809 */ export var CellsEnvironment =  __class__ ('CellsEnvironment', [FLMEnvironmentSpecBase], {
/* 000809 */ 	__module__: __name__,
/* 000811 */ 	is_block_level: true,
/* 000813 */ 	allowed_in_standalone_mode: true,
/* 000815 */ 	body_contents_is_block_level: true,
/* 000818 */ 	get __init__ () {return __get__ (this, function (self, environmentname) {
/* 000818 */ 		if (typeof environmentname == 'undefined' || (environmentname != null && environmentname.hasOwnProperty ("__kwargtrans__"))) {;
/* 000818 */ 			var environmentname = 'cells';
/* 000818 */ 		};
/* 000818 */ 		if (arguments.length) {
/* 000818 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000818 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000818 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000818 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000818 */ 					switch (__attrib0__) {
/* 000818 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000818 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000818 */ 					}
/* 000818 */ 				}
/* 000818 */ 			}
/* 000818 */ 		}
/* 000818 */ 		else {
/* 000818 */ 		}
/* 000819 */ 		__call__ (__call__ (__super__, null, CellsEnvironment, '__init__'), null, self, __kwargtrans__ ({environmentname: environmentname}));
/* 000819 */ 	});},
/* 000823 */ 	_fields: tuple (['environmentname']),
/* 000825 */ 	get make_body_parser () {return __get__ (this, function (self, token, nodeargd, arg_parsing_state_delta) {
/* 000825 */ 		if (arguments.length) {
/* 000825 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000825 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000825 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000825 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000825 */ 					switch (__attrib0__) {
/* 000825 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000825 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000825 */ 						case 'nodeargd': var nodeargd = __allkwargs0__ [__attrib0__]; break;
/* 000825 */ 						case 'arg_parsing_state_delta': var arg_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000825 */ 					}
/* 000825 */ 				}
/* 000825 */ 			}
/* 000825 */ 		}
/* 000825 */ 		else {
/* 000825 */ 		}
/* 000826 */ 		return (function () {
/* 000826 */ 			var __accu0__ = macrospec;
/* 000828 */ 			return __call__ (__accu0__.LatexEnvironmentBodyContentsParser, __accu0__, __kwargtrans__ ({environmentname: token.arg, contents_parsing_state_delta: (function () {
/* 000828 */ 				var __accu1__ = macrospec;
/* 000833 */ 				return __call__ (__accu1__.ParsingStateDeltaExtendLatexContextDb, __accu1__, __kwargtrans__ ({extend_latex_context: __call__ (dict, null, __kwargtrans__ ({macros: [__call__ (CellMacro, null), __call__ (CelldataMacroSpec, null), __call__ (LatexTabularRowSeparatorSpec, null)]}))}));
/* 000839 */ 			}) (), child_parsing_state_delta: __call__ (ParsingStateDelta, null)}));
/* 000839 */ 		}) ();
/* 000839 */ 	});},
/* 000843 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000843 */ 		if (arguments.length) {
/* 000843 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000843 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000843 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000843 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000843 */ 					switch (__attrib0__) {
/* 000843 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000843 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000843 */ 					}
/* 000843 */ 				}
/* 000843 */ 			}
/* 000843 */ 		}
/* 000843 */ 		else {
/* 000843 */ 		}
/* 000847 */ 		var cells_model = __call__ (CellsModel, null);
/* 000849 */ 		var __iterable0__ = node.nodelist;
/* 000849 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000849 */ 			var n = __getitem__ (__iterable0__, __index0__);
/* 000850 */ 			if (__t__ ((function () {
/* 000850 */ 				var __accu0__ = n;
/* 000850 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexMacroNode);
/* 000850 */ 			}) ())) {
/* 000851 */ 				if (__t__ (__eq__ (n.macroname, 'cell'))) {
/* 000852 */ 					(function () {
/* 000852 */ 						var __accu0__ = cells_model;
/* 000852 */ 						return __call__ (__accu0__.add_cell_node, __accu0__, n);
/* 000852 */ 					}) ();
/* 000852 */ 					continue;
/* 000852 */ 				}
/* 000854 */ 				else if (__t__ (__eq__ (n.macroname, 'celldata'))) {
/* 000855 */ 					(function () {
/* 000855 */ 						var __accu0__ = cells_model;
/* 000855 */ 						return __call__ (__accu0__.add_celldata_node, __accu0__, n);
/* 000855 */ 					}) ();
/* 000855 */ 					continue;
/* 000855 */ 				}
/* 000857 */ 				else if (__t__ (__eq__ (n.macroname, '\\'))) {
/* 000858 */ 					(function () {
/* 000858 */ 						var __accu0__ = cells_model;
/* 000858 */ 						return __call__ (__accu0__.move_next_row, __accu0__);
/* 000858 */ 					}) ();
/* 000858 */ 					continue;
/* 000858 */ 				}
/* 000858 */ 			}
/* 000861 */ 			if (__t__ ((function () {
/* 000861 */ 				var __accu0__ = n;
/* 000861 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCommentNode);
/* 000861 */ 			}) ())) {
/* 000861 */ 				continue;
/* 000861 */ 			}
/* 000865 */ 			if (__t__ (__t__ ((function () {
/* 000865 */ 				var __accu0__ = n;
/* 000865 */ 				return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexCharsNode);
/* 000866 */ 			}) ()) && __eq__ (__call__ (len, null, (function () {
/* 000866 */ 				var __accu0__ = n.chars;
/* 000866 */ 				return __call__ (__accu0__.strip, __accu0__);
/* 000866 */ 			}) ()), 0))) {
/* 000866 */ 				continue;
/* 000866 */ 			}
/* 000871 */ 			var __except0__ = __call__ (LatexWalkerLocatedError, null, 'You cannot place ‘{}’ here.  Expected: \\cell, \\celldata, \\\\.'.format (__call__ (_splfysidews, null, (function () {
/* 000871 */ 				var __accu0__ = n;
/* 000871 */ 				return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000871 */ 			}) ())));
/* 000871 */ 			__except0__.__cause__ = null;
/* 000871 */ 			throw __except0__;
/* 000871 */ 		}
/* 000875 */ 		(function () {
/* 000875 */ 			var __accu0__ = cells_model;
/* 000875 */ 			return __call__ (__accu0__.finalize, __accu0__);
/* 000875 */ 		}) ();
/* 000877 */ 		node.flm_cells_model = cells_model;
/* 000877 */ 	});},
/* 000880 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000880 */ 		if (arguments.length) {
/* 000880 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000880 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000880 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000880 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000880 */ 					switch (__attrib0__) {
/* 000880 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000880 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000880 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000880 */ 					}
/* 000880 */ 				}
/* 000880 */ 			}
/* 000880 */ 		}
/* 000880 */ 		else {
/* 000880 */ 		}
/* 000886 */ 		return (function () {
/* 000886 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000886 */ 			return __call__ (__accu0__.render_cells, __accu0__, __kwargtrans__ ({cells_model: node.flm_cells_model, render_context: render_context}));
/* 000886 */ 		}) ();
/* 000886 */ 	});},
/* 000896 */ 	get recompose_pure_latex () {return __get__ (this, function (self, node, recomposer) {
/* 000896 */ 		if (arguments.length) {
/* 000896 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000896 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000896 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000896 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000896 */ 					switch (__attrib0__) {
/* 000896 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000896 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000896 */ 						case 'recomposer': var recomposer = __allkwargs0__ [__attrib0__]; break;
/* 000896 */ 					}
/* 000896 */ 				}
/* 000896 */ 			}
/* 000896 */ 		}
/* 000896 */ 		else {
/* 000896 */ 		}
/* 000898 */ 		var recopt_cells = (function () {
/* 000898 */ 			var __accu0__ = recomposer;
/* 000898 */ 			return __call__ (__accu0__.get_options, __accu0__, 'cells');
/* 000898 */ 		}) ();
/* 000899 */ 		if (__t__ ((function () {
/* 000899 */ 			var __accu0__ = recopt_cells;
/* 000899 */ 			return __call__ (__accu0__.py_get, __accu0__, 'keep_as_is', false);
/* 000899 */ 		}) ())) {
/* 000900 */ 			return false;
/* 000900 */ 		}
/* 000903 */ 		if (__t__ (__t__ (recomposer.render_context === null) || __t__ (!__t__ ((__call__ (hasattr, null, recomposer.render_context, 'fragment_renderer')))) || recomposer.render_context.fragment_renderer === null)) {
/* 000905 */ 			var __except0__ = __call__ (ValueError, null, 'Recomposing cells while compiling them into a tabularray requires a render_context in the pure latex recomposer with a LatexFragmentRenderer instance.');
/* 000905 */ 			__except0__.__cause__ = null;
/* 000905 */ 			throw __except0__;
/* 000905 */ 		}
/* 000911 */ 		var render_context = recomposer.render_context;
/* 000912 */ 		var fragment_renderer = render_context.fragment_renderer;
/* 000914 */ 		return (function () {
/* 000914 */ 			var __accu0__ = fragment_renderer;
/* 000914 */ 			return __call__ (__accu0__.render_cells, __accu0__, __kwargtrans__ ({cells_model: node.flm_cells_model, render_context: render_context, render_cell_nodelist_contents_fn: (function __lambda__ (nodelist, render_context) {
/* 000914 */ 				if (arguments.length) {
/* 000914 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000914 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000914 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000914 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000914 */ 							switch (__attrib0__) {
/* 000914 */ 								case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000914 */ 								case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000914 */ 							}
/* 000914 */ 						}
/* 000914 */ 					}
/* 000914 */ 				}
/* 000914 */ 				else {
/* 000914 */ 				}
/* 000919 */ 				return (function () {
/* 000919 */ 					var __accu1__ = recomposer;
/* 000919 */ 					return __call__ (__accu1__.subrecompose, __accu1__, nodelist);
/* 000919 */ 				}) ();
/* 000919 */ 			})}));
/* 000919 */ 		}) ();
/* 000919 */ 	});}
/* 000919 */ });
/* 000930 */ export var FeatureProvideCells =  __class__ ('FeatureProvideCells', [Feature], {
/* 000930 */ 	__module__: __name__,
/* 000932 */ 	feature_name: 'cells',
/* 000933 */ 	feature_title: 'Typesetting data tables',
/* 000935 */ 	DocumentManager: null,
/* 000936 */ 	RenderManager: null,
/* 000938 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000938 */ 		if (arguments.length) {
/* 000938 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000938 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000938 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000938 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000938 */ 					switch (__attrib0__) {
/* 000938 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000938 */ 					}
/* 000938 */ 				}
/* 000938 */ 			}
/* 000938 */ 		}
/* 000938 */ 		else {
/* 000938 */ 		}
/* 000941 */ 		return __call__ (dict, null, __kwargtrans__ ({environments: [__call__ (CellsEnvironment, null)]}));
/* 000941 */ 	});},
/* 000947 */ 	get add_flm_doc_latex_context_definitions () {return __get__ (this, function (self, base_feature_definitions) {
/* 000947 */ 		if (arguments.length) {
/* 000947 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000947 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000947 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000947 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000947 */ 					switch (__attrib0__) {
/* 000947 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000947 */ 						case 'base_feature_definitions': var base_feature_definitions = __allkwargs0__ [__attrib0__]; break;
/* 000947 */ 					}
/* 000947 */ 				}
/* 000947 */ 			}
/* 000947 */ 		}
/* 000947 */ 		else {
/* 000947 */ 		}
/* 000960 */ 		return __call__ (dict, null, __kwargtrans__ ({macros: [__call__ (CellMacro, null), __call__ (CelldataMacroSpec, null), __call__ (MergeMacroSpec, null), __call__ (LatexTabularRowSeparatorSpec, null)], specials: [__call__ (LatexTabularColumnSeparatorSpec, null)]}));
/* 000960 */ 	});}
/* 000960 */ });
/* 000964 */ export var FeatureClass = FeatureProvideCells;
/* 000010 */ 
//# sourceMappingURL=flm.feature.cells.map