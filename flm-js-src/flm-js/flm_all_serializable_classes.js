/* 000001 */ // Transcrypt'ed from Python, 2025-02-17 14:59:34
/* 000001 */ var flm = {};
/* 000001 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000016 */ import * as __module_flm_feature_verbatim__ from './flm.feature.verbatim.js';
/* 000016 */ __nest__ (flm, 'feature.verbatim', __module_flm_feature_verbatim__);
/* 000015 */ import * as __module_flm_feature_theorems__ from './flm.feature.theorems.js';
/* 000015 */ __nest__ (flm, 'feature.theorems', __module_flm_feature_theorems__);
/* 000014 */ import * as __module_flm_feature_refs__ from './flm.feature.refs.js';
/* 000014 */ __nest__ (flm, 'feature.refs', __module_flm_feature_refs__);
/* 000013 */ import * as __module_flm_feature_math__ from './flm.feature.math.js';
/* 000013 */ __nest__ (flm, 'feature.math', __module_flm_feature_math__);
/* 000012 */ import * as __module_flm_feature_href__ from './flm.feature.href.js';
/* 000012 */ __nest__ (flm, 'feature.href', __module_flm_feature_href__);
/* 000011 */ import * as __module_flm_feature_headings__ from './flm.feature.headings.js';
/* 000011 */ __nest__ (flm, 'feature.headings', __module_flm_feature_headings__);
/* 000010 */ import * as __module_flm_feature_graphics__ from './flm.feature.graphics.js';
/* 000010 */ __nest__ (flm, 'feature.graphics', __module_flm_feature_graphics__);
/* 000009 */ import * as __module_flm_feature_floats__ from './flm.feature.floats.js';
/* 000009 */ __nest__ (flm, 'feature.floats', __module_flm_feature_floats__);
/* 000008 */ import * as __module_flm_feature_enumeration__ from './flm.feature.enumeration.js';
/* 000008 */ __nest__ (flm, 'feature.enumeration', __module_flm_feature_enumeration__);
/* 000007 */ import * as __module_flm_feature_endnotes__ from './flm.feature.endnotes.js';
/* 000007 */ __nest__ (flm, 'feature.endnotes', __module_flm_feature_endnotes__);
/* 000006 */ import * as __module_flm_feature_defterm__ from './flm.feature.defterm.js';
/* 000006 */ __nest__ (flm, 'feature.defterm', __module_flm_feature_defterm__);
/* 000005 */ import * as __module_flm_feature_cite__ from './flm.feature.cite.js';
/* 000005 */ __nest__ (flm, 'feature.cite', __module_flm_feature_cite__);
/* 000004 */ import * as __module_flm_feature_cells__ from './flm.feature.cells.js';
/* 000004 */ __nest__ (flm, 'feature.cells', __module_flm_feature_cells__);
/* 000003 */ import * as __module_flm_flmspecinfo__ from './flm.flmspecinfo.js';
/* 000003 */ __nest__ (flm, 'flmspecinfo', __module_flm_flmspecinfo__);
/* 000001 */ import * as __module_flm_counter__ from './flm.counter.js';
/* 000001 */ __nest__ (flm, 'counter', __module_flm_counter__);
/* 000001 */ var __name__ = 'flm_all_serializable_classes';
/* 000020 */ export var serializable = dict ({'': dict ({'flm.counter:CounterFormatter': flm.counter.CounterFormatter, 'flm.feature.cells:CellIndexRangeModel': flm.feature.cells.CellIndexRangeModel, 'flm.feature.cells:CellPlacementModel': flm.feature.cells.CellPlacementModel, 'flm.feature.cells:CellModel': flm.feature.cells.CellModel, 'flm.feature.cells:CellPlacementsMappingModel': flm.feature.cells.CellPlacementsMappingModel, 'flm.feature.cells:CellsModel': flm.feature.cells.CellsModel, 'flm.feature.endnotes:EndnoteInstance': flm.feature.endnotes.EndnoteInstance, 'flm.feature.floats:FloatContentAnyContent': flm.feature.floats.FloatContentAnyContent, 'flm.feature.floats:FloatContentIncludeGraphics': flm.feature.floats.FloatContentIncludeGraphics, 'flm.feature.floats:FloatContentCells': flm.feature.floats.FloatContentCells, 'flm.feature.floats:FloatInstance': flm.feature.floats.FloatInstance, 'flm.feature.floats:FloatType': flm.feature.floats.FloatType, 'flm.feature.graphics:GraphicsResource': flm.feature.graphics.GraphicsResource, 'flm.feature.refs:ReferenceableInfo': flm.feature.refs.ReferenceableInfo, 'flm.feature.refs:RefInstance': flm.feature.refs.RefInstance}), 'FLMSpecInfo': dict ({'flm.flmspecinfo:ConstantValueMacro': flm.flmspecinfo.ConstantValueMacro, 'flm.flmspecinfo:ConstantValueSpecials': flm.flmspecinfo.ConstantValueSpecials, 'flm.flmspecinfo:TextFormatMacro': flm.flmspecinfo.TextFormatMacro, 'flm.flmspecinfo:SemanticBlockEnvironment': flm.flmspecinfo.SemanticBlockEnvironment, 'flm.flmspecinfo:ParagraphBreakSpecials': flm.flmspecinfo.ParagraphBreakSpecials, 'flm.flmspecinfo:ParagraphBreakMacro': flm.flmspecinfo.ParagraphBreakMacro, 'flm.flmspecinfo:FLMMacroSpecError': flm.flmspecinfo.FLMMacroSpecError, 'flm.flmspecinfo:FLMEnvironmentSpecError': flm.flmspecinfo.FLMEnvironmentSpecError, 'flm.flmspecinfo:FLMSpecialsSpecError': flm.flmspecinfo.FLMSpecialsSpecError, 'flm.feature.cells:LatexTabularRowSeparatorSpec': flm.feature.cells.LatexTabularRowSeparatorSpec, 'flm.feature.cells:LatexTabularColumnSeparatorSpec': flm.feature.cells.LatexTabularColumnSeparatorSpec, 'flm.feature.cells:MergeMacroSpec': flm.feature.cells.MergeMacroSpec, 'flm.feature.cells:CellMacro': flm.feature.cells.CellMacro, 'flm.feature.cells:CelldataMacroSpec': flm.feature.cells.CelldataMacroSpec, 'flm.feature.cells:CellsEnvironment': flm.feature.cells.CellsEnvironment, 'flm.feature.cells:CiteMacro': flm.feature.cells.CiteMacro, 'flm.feature.defterm:DefineTermEnvironment': flm.feature.defterm.DefineTermEnvironment, 'flm.feature.defterm:RefTermMacro': flm.feature.defterm.RefTermMacro, 'flm.feature.endnotes:EndnoteMacro': flm.feature.endnotes.EndnoteMacro, 'flm.feature.enumeration:Enumeration': flm.feature.enumeration.Enumeration, 'flm.feature.floats:FloatEnvironment': flm.feature.floats.FloatEnvironment, 'flm.feature.graphics:SimpleIncludeGraphicsMacro': flm.feature.graphics.SimpleIncludeGraphicsMacro, 'flm.feature.headings:HeadingMacro': flm.feature.headings.HeadingMacro, 'flm.feature.href:HrefHyperlinkMacro': flm.feature.href.HrefHyperlinkMacro, 'flm.feature.math:MathEnvironment': flm.feature.math.MathEnvironment, 'flm.feature.math:MathEqrefMacro': flm.feature.math.MathEqrefMacro, 'flm.feature.refs:RefMacro': flm.feature.refs.RefMacro, 'flm.feature.theorems:TheoremEnvironment': flm.feature.theorems.TheoremEnvironment, 'flm.feature.verbatim:VerbatimSpecInfo': flm.feature.verbatim.VerbatimSpecInfo, 'flm.feature.verbatim:VerbatimMacro': flm.feature.verbatim.VerbatimMacro, 'flm.feature.verbatim:VerbatimEnvironment': flm.feature.verbatim.VerbatimEnvironment})});
/* 000001 */ 
//# sourceMappingURL=flm_all_serializable_classes.map