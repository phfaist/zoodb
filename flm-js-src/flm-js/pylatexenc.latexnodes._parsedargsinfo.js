/* 000001 */ // Transcrypt'ed from Python, 2025-02-10 09:59:04
/* 000051 */ var logging = {};
/* 000051 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000055 */ import {LatexWalkerParseError} from './pylatexenc.latexnodes._exctypes.js';
/* 000054 */ import {LatexCharsNode, LatexCommentNode, LatexEnvironmentNode, LatexGroupNode, LatexMacroNode, LatexMathNode, LatexNode, LatexNodeList, LatexNodesVisitor, LatexSpecialsNode, ParsedArguments, _UseList, __all__, _display_abbrev_str, _display_str_delimiters, _get_content_as_chars, _unicode_from_str, _update_posposend_from_nodelist, latex_node_types} from './pylatexenc.latexnodes.nodes.js';
/* 000051 */ import * as __module_logging__ from './logging.js';
/* 000051 */ __nest__ (logging, '', __module_logging__);
/* 000051 */ export {LatexEnvironmentNode, __all__, LatexWalkerParseError, LatexMathNode, _display_str_delimiters, LatexMacroNode, _display_abbrev_str, LatexGroupNode, LatexNode, LatexNodesVisitor, LatexCharsNode, latex_node_types, _unicode_from_str, LatexNodeList, _get_content_as_chars, LatexSpecialsNode, LatexCommentNode, ParsedArguments, _UseList, _update_posposend_from_nodelist};
/* 000001 */ var __name__ = 'pylatexenc.latexnodes._parsedargsinfo';
/* 000039 */ export var _basestring = str;
/* 000052 */ export var logger = (function () {
/* 000052 */ 	var __accu0__ = logging;
/* 000052 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000052 */ }) ();
/* 000059 */ export var SingleParsedArgumentInfo =  __class__ ('SingleParsedArgumentInfo', [object], {
/* 000059 */ 	__module__: __name__,
/* 000078 */ 	get __init__ () {return __get__ (this, function (self, argument_node_object) {
/* 000078 */ 		if (arguments.length) {
/* 000078 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000078 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000078 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000078 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000078 */ 					switch (__attrib0__) {
/* 000078 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000078 */ 						case 'argument_node_object': var argument_node_object = __allkwargs0__ [__attrib0__]; break;
/* 000078 */ 					}
/* 000078 */ 				}
/* 000078 */ 			}
/* 000078 */ 		}
/* 000078 */ 		else {
/* 000078 */ 		}
/* 000079 */ 		__call__ (__call__ (__super__, null, SingleParsedArgumentInfo, '__init__'), null, self);
/* 000080 */ 		self.argument_node_object = argument_node_object;
/* 000080 */ 	});},
/* 000082 */ 	get was_provided () {return __get__ (this, function (self) {
/* 000082 */ 		if (arguments.length) {
/* 000082 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000082 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000082 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000082 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000082 */ 					switch (__attrib0__) {
/* 000082 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000082 */ 					}
/* 000082 */ 				}
/* 000082 */ 			}
/* 000082 */ 		}
/* 000082 */ 		else {
/* 000082 */ 		}
/* 000091 */ 		return self.argument_node_object !== null;
/* 000091 */ 	});},
/* 000093 */ 	get get_content_nodelist () {return __get__ (this, function (self, unwrap_double_group, make_nodelist) {
/* 000093 */ 		if (typeof unwrap_double_group == 'undefined' || (unwrap_double_group != null && unwrap_double_group.hasOwnProperty ("__kwargtrans__"))) {;
/* 000093 */ 			var unwrap_double_group = true;
/* 000093 */ 		};
/* 000093 */ 		if (typeof make_nodelist == 'undefined' || (make_nodelist != null && make_nodelist.hasOwnProperty ("__kwargtrans__"))) {;
/* 000093 */ 			var make_nodelist = null;
/* 000093 */ 		};
/* 000093 */ 		if (arguments.length) {
/* 000093 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000093 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000093 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000093 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000093 */ 					switch (__attrib0__) {
/* 000093 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000093 */ 						case 'unwrap_double_group': var unwrap_double_group = __allkwargs0__ [__attrib0__]; break;
/* 000093 */ 						case 'make_nodelist': var make_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000093 */ 					}
/* 000093 */ 				}
/* 000093 */ 			}
/* 000093 */ 		}
/* 000093 */ 		else {
/* 000093 */ 		}
/* 000114 */ 		if (__t__ (make_nodelist === null)) {
/* 000115 */ 			var make_nodelist = LatexNodeList;
/* 000115 */ 		}
/* 000117 */ 		var argument_node_object = self.argument_node_object;
/* 000118 */ 		if (__t__ (argument_node_object === null)) {
/* 000119 */ 			return __call__ (make_nodelist, null, [null]);
/* 000119 */ 		}
/* 000121 */ 		if (__t__ (__call__ (isinstance, null, argument_node_object, LatexNodeList))) {
/* 000122 */ 			return argument_node_object;
/* 000122 */ 		}
/* 000124 */ 		if (__t__ ((function () {
/* 000124 */ 			var __accu0__ = argument_node_object;
/* 000124 */ 			return __call__ (__accu0__.isNodeType, __accu0__, LatexGroupNode);
/* 000124 */ 		}) ())) {
/* 000128 */ 			if (__t__ (__t__ (unwrap_double_group) && __t__ (__eq__ (__call__ (len, null, argument_node_object.nodelist), 1)) && __getitem__ (argument_node_object.nodelist, 0))) {
/* 000130 */ 				var innernode = __getitem__ (argument_node_object.nodelist, 0);
/* 000131 */ 				if (__t__ (__t__ ((function () {
/* 000131 */ 					var __accu0__ = innernode;
/* 000131 */ 					return __call__ (__accu0__.isNodeType, __accu0__, LatexGroupNode);
/* 000131 */ 				}) ()) && __ne__ (__getitem__ (innernode.delimiters, 0), __getitem__ (argument_node_object.delimiters, 0)))) {
/* 000133 */ 					return innernode.nodelist;
/* 000133 */ 				}
/* 000133 */ 			}
/* 000135 */ 			return argument_node_object.nodelist;
/* 000135 */ 		}
/* 000137 */ 		return __call__ (make_nodelist, null, [argument_node_object]);
/* 000137 */ 	});},
/* 000140 */ 	get get_content_as_chars () {return __get__ (this, function (self) {
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
/* 000162 */ 		var nodelist = (function () {
/* 000162 */ 			var __accu0__ = self;
/* 000162 */ 			return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000162 */ 		}) ();
/* 000163 */ 		return (function () {
/* 000163 */ 			var __accu0__ = nodelist;
/* 000163 */ 			return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000163 */ 		}) ();
/* 000163 */ 	});},
/* 000165 */ 	get parse_content_as_keyval () {return __get__ (this, function (self) {
/* 000165 */ 		var kwargs = dict ();
/* 000165 */ 		if (arguments.length) {
/* 000165 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000165 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000165 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000165 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000165 */ 					switch (__attrib0__) {
/* 000165 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000165 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000165 */ 					}
/* 000165 */ 				}
/* 000165 */ 				delete kwargs.__kwargtrans__;
/* 000165 */ 			}
/* 000165 */ 		}
/* 000165 */ 		else {
/* 000165 */ 		}
/* 000173 */ 		var nodelist = (function () {
/* 000173 */ 			var __accu0__ = self;
/* 000173 */ 			return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000173 */ 		}) ();
/* 000174 */ 		return (function () {
/* 000174 */ 			var __accu0__ = nodelist;
/* 000174 */ 			return __call__ (__accu0__.parse_keyval_content, __accu0__, __kwargtrans__ (kwargs));
/* 000174 */ 		}) ();
/* 000174 */ 	});},
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
/* 000179 */ 		return (function () {
/* 000179 */ 			var __accu0__ = '{}(argument_node_object={!r})';
/* 000179 */ 			return __call__ (__accu0__.format, __accu0__, self.__class__.__name__, self.argument_node_object);
/* 000179 */ 		}) ();
/* 000179 */ 	});},
/* 000186 */ 	get __eq__ () {return __get__ (this, function (self, other) {
/* 000186 */ 		if (arguments.length) {
/* 000186 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000186 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000186 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000186 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000186 */ 					switch (__attrib0__) {
/* 000186 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000186 */ 						case 'other': var other = __allkwargs0__ [__attrib0__]; break;
/* 000186 */ 					}
/* 000186 */ 				}
/* 000186 */ 			}
/* 000186 */ 		}
/* 000186 */ 		else {
/* 000186 */ 		}
/* 000187 */ 		return __t__ (__t__ (self.argument_node_object === null) && other.argument_node_object === null) || __eq__ (self.argument_node_object, other.argument_node_object);
/* 000187 */ 	});}
/* 000187 */ });
/* 000196 */ export var ParsedArgumentsInfo =  __class__ ('ParsedArgumentsInfo', [object], {
/* 000196 */ 	__module__: __name__,
/* 000201 */ 	get __init__ () {return __get__ (this, function (self, parsed_arguments, node) {
/* 000201 */ 		if (typeof parsed_arguments == 'undefined' || (parsed_arguments != null && parsed_arguments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000201 */ 			var parsed_arguments = null;
/* 000201 */ 		};
/* 000201 */ 		if (typeof node == 'undefined' || (node != null && node.hasOwnProperty ("__kwargtrans__"))) {;
/* 000201 */ 			var node = null;
/* 000201 */ 		};
/* 000201 */ 		if (arguments.length) {
/* 000201 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000201 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000201 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000201 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000201 */ 					switch (__attrib0__) {
/* 000201 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000201 */ 						case 'parsed_arguments': var parsed_arguments = __allkwargs0__ [__attrib0__]; break;
/* 000201 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000201 */ 					}
/* 000201 */ 				}
/* 000201 */ 			}
/* 000201 */ 		}
/* 000201 */ 		else {
/* 000201 */ 		}
/* 000202 */ 		__call__ (__call__ (__super__, null, ParsedArgumentsInfo, '__init__'), null, self);
/* 000203 */ 		self.parsed_arguments = parsed_arguments;
/* 000204 */ 		self.node = node;
/* 000205 */ 		if (__t__ (self.node !== null)) {
/* 000206 */ 			self.node_pos = self.node.pos;
/* 000207 */ 			if (__t__ (__t__ (self.parsed_arguments === null) && __call__ (hasattr, null, self.node, 'nodeargd'))) {
/* 000208 */ 				self.parsed_arguments = self.node.nodeargd;
/* 000208 */ 			}
/* 000209 */ 			else {
/* 000210 */ 				self.parsed_arguments = null;
/* 000210 */ 			}
/* 000210 */ 		}
/* 000211 */ 		else {
/* 000212 */ 			self.node_pos = null;
/* 000212 */ 		}
/* 000214 */ 		if (__t__ (__t__ (self.parsed_arguments === null) && self.node === null)) {
/* 000215 */ 			(function () {
/* 000215 */ 				var __accu0__ = logger;
/* 000215 */ 				return __call__ (__accu0__.warning, __accu0__, 'You created ParsedArgumentsInfo with both node=None and parsed_arguments=None, might be a bug in your code?');
/* 000215 */ 			}) ();
/* 000215 */ 		}
/* 000215 */ 	});},
/* 000218 */ 	get get_argument_info () {return __get__ (this, function (self, arg) {
/* 000218 */ 		if (arguments.length) {
/* 000218 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000218 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000218 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000218 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000218 */ 					switch (__attrib0__) {
/* 000218 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000218 */ 						case 'arg': var arg = __allkwargs0__ [__attrib0__]; break;
/* 000218 */ 					}
/* 000218 */ 				}
/* 000218 */ 			}
/* 000218 */ 		}
/* 000218 */ 		else {
/* 000218 */ 		}
/* 000230 */ 		if (__t__ (self.parsed_arguments === null)) {
/* 000231 */ 			var __except0__ = __call__ (LatexWalkerParseError, null, 'Cannot get argument information, there were no arguments specified', __kwargtrans__ ({pos: self.node_pos}));
/* 000231 */ 			__except0__.__cause__ = null;
/* 000231 */ 			throw __except0__;
/* 000231 */ 		}
/* 000236 */ 		var arg_i = arg;
/* 000237 */ 		if (__t__ (__call__ (isinstance, null, arg_i, _basestring))) {
/* 000239 */ 			var argname = arg_i;
/* 000240 */ 			var __break0__ = false;
/* 000240 */ 			var __iterable0__ = __call__ (enumerate, null, self.parsed_arguments.arguments_spec_list);
/* 000240 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000240 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000240 */ 				var j = __left0__ [0];
/* 000240 */ 				var arg_spec = __left0__ [1];
/* 000241 */ 				if (__t__ (__eq__ (arg_spec.argname, argname))) {
/* 000242 */ 					var arg_i = j;
/* 000242 */ 					__break0__ = true;
/* 000242 */ 					break;
/* 000242 */ 				}
/* 000242 */ 			}
/* 000244 */ 			if (!__break0__) {
/* 000246 */ 				var __except0__ = __call__ (LatexWalkerParseError, null, (function () {
/* 000246 */ 					var __accu0__ = 'Cannot find argument named ‘{}’';
/* 000246 */ 					return __call__ (__accu0__.format, __accu0__, argname);
/* 000246 */ 				}) (), __kwargtrans__ ({pos: self.node_pos}));
/* 000246 */ 				__except0__.__cause__ = null;
/* 000246 */ 				throw __except0__;
/* 000246 */ 			}
/* 000246 */ 		}
/* 000251 */ 		return __call__ (SingleParsedArgumentInfo, null, __getitem__ (self.parsed_arguments.argnlist, arg_i));
/* 000251 */ 	});},
/* 000253 */ 	get get_all_arguments_info () {return __get__ (this, function (self, args, allow_additional_arguments, skip_nonexistent_arguments, include_unrequested_argnames, include_unrequested_argindices) {
/* 000253 */ 		if (typeof args == 'undefined' || (args != null && args.hasOwnProperty ("__kwargtrans__"))) {;
/* 000253 */ 			var args = null;
/* 000253 */ 		};
/* 000253 */ 		if (typeof allow_additional_arguments == 'undefined' || (allow_additional_arguments != null && allow_additional_arguments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000253 */ 			var allow_additional_arguments = false;
/* 000253 */ 		};
/* 000253 */ 		if (typeof skip_nonexistent_arguments == 'undefined' || (skip_nonexistent_arguments != null && skip_nonexistent_arguments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000253 */ 			var skip_nonexistent_arguments = false;
/* 000253 */ 		};
/* 000253 */ 		if (typeof include_unrequested_argnames == 'undefined' || (include_unrequested_argnames != null && include_unrequested_argnames.hasOwnProperty ("__kwargtrans__"))) {;
/* 000253 */ 			var include_unrequested_argnames = null;
/* 000253 */ 		};
/* 000253 */ 		if (typeof include_unrequested_argindices == 'undefined' || (include_unrequested_argindices != null && include_unrequested_argindices.hasOwnProperty ("__kwargtrans__"))) {;
/* 000253 */ 			var include_unrequested_argindices = null;
/* 000253 */ 		};
/* 000253 */ 		if (arguments.length) {
/* 000253 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000253 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000253 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000253 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000253 */ 					switch (__attrib0__) {
/* 000253 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000253 */ 						case 'args': var args = __allkwargs0__ [__attrib0__]; break;
/* 000253 */ 						case 'allow_additional_arguments': var allow_additional_arguments = __allkwargs0__ [__attrib0__]; break;
/* 000253 */ 						case 'skip_nonexistent_arguments': var skip_nonexistent_arguments = __allkwargs0__ [__attrib0__]; break;
/* 000253 */ 						case 'include_unrequested_argnames': var include_unrequested_argnames = __allkwargs0__ [__attrib0__]; break;
/* 000253 */ 						case 'include_unrequested_argindices': var include_unrequested_argindices = __allkwargs0__ [__attrib0__]; break;
/* 000253 */ 					}
/* 000253 */ 				}
/* 000253 */ 			}
/* 000253 */ 		}
/* 000253 */ 		else {
/* 000253 */ 		}
/* 000305 */ 		if (__t__ (self.parsed_arguments === null)) {
/* 000306 */ 			if (__t__ (skip_nonexistent_arguments)) {
/* 000307 */ 				return dict ({});
/* 000307 */ 			}
/* 000308 */ 			var msg = 'Missing arguments';
/* 000309 */ 			if (__t__ (self.node !== null)) {
/* 000310 */ 				var msg = (function () {
/* 000310 */ 					var __accu0__ = 'Missing arguments to {!r}';
/* 000310 */ 					return __call__ (__accu0__.format, __accu0__, self.node);
/* 000310 */ 				}) ();
/* 000310 */ 			}
/* 000311 */ 			var __except0__ = __call__ (LatexWalkerParseError, null, msg, self.node_pos);
/* 000311 */ 			__except0__.__cause__ = null;
/* 000311 */ 			throw __except0__;
/* 000311 */ 		}
/* 000316 */ 		var args_info = dict ({});
/* 000318 */ 		var arg_names_seen = __call__ (set, null);
/* 000319 */ 		var arg_i_seen = __call__ (set, null);
/* 000321 */ 		if (__t__ (__t__ (args === null) && include_unrequested_argnames === null)) {
/* 000322 */ 			var include_unrequested_argnames = true;
/* 000322 */ 		}
/* 000323 */ 		if (__t__ (__t__ (args === null) && include_unrequested_argindices === null)) {
/* 000324 */ 			var include_unrequested_argindices = true;
/* 000324 */ 		}
/* 000326 */ 		var __iterable0__ = __call__ (enumerate, null, self.parsed_arguments.arguments_spec_list);
/* 000326 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000326 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000326 */ 			var j = __left0__ [0];
/* 000326 */ 			var arg_spec = __left0__ [1];
/* 000328 */ 			var argument_node_object = __getitem__ (self.parsed_arguments.argnlist, j);
/* 000330 */ 			var arg_requested = false;
/* 000331 */ 			var arg_requested_by_name = false;
/* 000332 */ 			var arg_requested_by_index = false;
/* 000333 */ 			if (__t__ (args !== null)) {
/* 000334 */ 				if (__t__ (__t__ (arg_spec.argname) && __in__ (arg_spec.argname, args))) {
/* 000335 */ 					var arg_requested = true;
/* 000336 */ 					var arg_requested_by_name = true;
/* 000337 */ 					(function () {
/* 000337 */ 						var __accu0__ = arg_names_seen;
/* 000337 */ 						return __call__ (__accu0__.add, __accu0__, arg_spec.argname);
/* 000337 */ 					}) ();
/* 000337 */ 				}
/* 000338 */ 				if (__t__ (__in__ (j, args))) {
/* 000339 */ 					var arg_requested = true;
/* 000340 */ 					var arg_requested_by_index = true;
/* 000341 */ 					(function () {
/* 000341 */ 						var __accu0__ = arg_i_seen;
/* 000341 */ 						return __call__ (__accu0__.add, __accu0__, j);
/* 000341 */ 					}) ();
/* 000341 */ 				}
/* 000341 */ 			}
/* 000342 */ 			else {
/* 000343 */ 				var arg_requested = true;
/* 000343 */ 			}
/* 000345 */ 			if (__t__ (!__t__ ((arg_requested)))) {
/* 000346 */ 				if (__t__ (!__t__ ((allow_additional_arguments)))) {
/* 000348 */ 					var __except0__ = __call__ (LatexWalkerParseError, null, (function () {
/* 000348 */ 						var __accu0__ = 'Got unexpected argument ‘{}’';
/* 000348 */ 						return __call__ (__accu0__.format, __accu0__, arg_spec.argname);
/* 000348 */ 					}) (), __kwargtrans__ ({pos: (__t__ (argument_node_object !== null) ? argument_node_object.pos : null)}));
/* 000348 */ 					__except0__.__cause__ = null;
/* 000348 */ 					throw __except0__;
/* 000348 */ 				}
/* 000348 */ 				continue;
/* 000348 */ 			}
/* 000355 */ 			var arg_info = __call__ (SingleParsedArgumentInfo, null, argument_node_object);
/* 000357 */ 			if (__t__ (__t__ (arg_spec.argname) && (__t__ (arg_requested_by_name) || include_unrequested_argnames))) {
/* 000358 */ 				__setitem__ (args_info, arg_spec.argname, arg_info);
/* 000358 */ 			}
/* 000359 */ 			if (__t__ (__t__ (arg_requested_by_index) || include_unrequested_argindices)) {
/* 000360 */ 				__setitem__ (args_info, j, arg_info);
/* 000360 */ 			}
/* 000360 */ 		}
/* 000363 */ 		if (__t__ (__t__ (!__t__ ((skip_nonexistent_arguments))) && args !== null)) {
/* 000365 */ 			var __iterable0__ = args;
/* 000365 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000365 */ 				var arg_x = __getitem__ (__iterable0__, __index0__);
/* 000366 */ 				if (__t__ (__t__ (!__in__ (arg_x, arg_names_seen)) && !__in__ (arg_x, arg_i_seen))) {
/* 000368 */ 					var __except0__ = __call__ (ValueError, null, (function () {
/* 000368 */ 						var __accu0__ = 'Missing argument {}';
/* 000371 */ 						return __call__ (__accu0__.format, __accu0__, (__t__ (__call__ (isinstance, null, arg_x, _basestring)) ? __add__ (__add__ ('‘', arg_x), '’') : __call__ (str, null, arg_x)));
/* 000371 */ 					}) ());
/* 000371 */ 					__except0__.__cause__ = null;
/* 000371 */ 					throw __except0__;
/* 000371 */ 				}
/* 000371 */ 			}
/* 000371 */ 		}
/* 000374 */ 		return args_info;
/* 000374 */ 	});}
/* 000374 */ });
/* 000051 */ 
//# sourceMappingURL=pylatexenc.latexnodes._parsedargsinfo.map