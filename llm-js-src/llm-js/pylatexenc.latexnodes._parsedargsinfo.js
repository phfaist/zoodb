/* 000001 */ // Transcrypt'ed from Python, 2023-04-09 01:44:40
/* 000051 */ var logging = {};
/* 000051 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000055 */ import {LatexWalkerParseError} from './pylatexenc.latexnodes._exctypes.js';
/* 000054 */ import {LatexCharsNode, LatexCommentNode, LatexEnvironmentNode, LatexGroupNode, LatexMacroNode, LatexMathNode, LatexNode, LatexNodeList, LatexNodesVisitor, LatexSpecialsNode, ParsedArguments, __all__, _get_content_as_chars, _unicode_from_str, _update_posposend_from_nodelist, latex_node_types} from './pylatexenc.latexnodes.nodes.js';
/* 000051 */ import * as __module_logging__ from './logging.js';
/* 000051 */ __nest__ (logging, '', __module_logging__);
/* 000051 */ export {LatexSpecialsNode, LatexEnvironmentNode, LatexCommentNode, __all__, _unicode_from_str, LatexGroupNode, LatexCharsNode, _get_content_as_chars, _update_posposend_from_nodelist, latex_node_types, LatexNodeList, LatexMathNode, LatexNodesVisitor, ParsedArguments, LatexWalkerParseError, LatexNode, LatexMacroNode};
/* 000001 */ var __name__ = 'pylatexenc.latexnodes._parsedargsinfo';
/* 000039 */ export var _basestring = str;
/* 000052 */ export var logger = (function () {
/* 000052 */ 	var __accu0__ = logging;
/* 000052 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000052 */ }) ();
/* 000059 */ export var SingleParsedArgumentInfo =  __class__ ('SingleParsedArgumentInfo', [object], {
/* 000059 */ 	__module__: __name__,
/* 000073 */ 	get __init__ () {return __get__ (this, function (self, argument_node_object) {
/* 000073 */ 		if (arguments.length) {
/* 000073 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000073 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000073 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000073 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000073 */ 					switch (__attrib0__) {
/* 000073 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000073 */ 						case 'argument_node_object': var argument_node_object = __allkwargs0__ [__attrib0__]; break;
/* 000073 */ 					}
/* 000073 */ 				}
/* 000073 */ 			}
/* 000073 */ 		}
/* 000073 */ 		else {
/* 000073 */ 		}
/* 000074 */ 		__call__ (__call__ (__super__, null, SingleParsedArgumentInfo, '__init__'), null, self);
/* 000075 */ 		self.argument_node_object = argument_node_object;
/* 000075 */ 	});},
/* 000077 */ 	get was_provided () {return __get__ (this, function (self) {
/* 000077 */ 		if (arguments.length) {
/* 000077 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000077 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000077 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000077 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000077 */ 					switch (__attrib0__) {
/* 000077 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000077 */ 					}
/* 000077 */ 				}
/* 000077 */ 			}
/* 000077 */ 		}
/* 000077 */ 		else {
/* 000077 */ 		}
/* 000086 */ 		return self.argument_node_object !== null;
/* 000086 */ 	});},
/* 000088 */ 	get get_content_nodelist () {return __get__ (this, function (self) {
/* 000088 */ 		if (arguments.length) {
/* 000088 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000088 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000088 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000088 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000088 */ 					switch (__attrib0__) {
/* 000088 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000088 */ 					}
/* 000088 */ 				}
/* 000088 */ 			}
/* 000088 */ 		}
/* 000088 */ 		else {
/* 000088 */ 		}
/* 000101 */ 		var argument_node_object = self.argument_node_object;
/* 000102 */ 		if (__t__ (argument_node_object === null)) {
/* 000103 */ 			self.nodelist = __call__ (LatexNodeList, null, [null]);
/* 000103 */ 		}
/* 000104 */ 		else if (__t__ (__call__ (isinstance, null, argument_node_object, LatexNodeList))) {
/* 000105 */ 			return argument_node_object;
/* 000105 */ 		}
/* 000106 */ 		else if (__t__ ((function () {
/* 000106 */ 			var __accu0__ = argument_node_object;
/* 000106 */ 			return __call__ (__accu0__.isNodeType, __accu0__, LatexGroupNode);
/* 000106 */ 		}) ())) {
/* 000107 */ 			return argument_node_object.nodelist;
/* 000107 */ 		}
/* 000109 */ 		return __call__ (LatexNodeList, null, [argument_node_object]);
/* 000109 */ 	});},
/* 000112 */ 	get get_content_as_chars () {return __get__ (this, function (self) {
/* 000112 */ 		if (arguments.length) {
/* 000112 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000112 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000112 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000112 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000112 */ 					switch (__attrib0__) {
/* 000112 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000112 */ 					}
/* 000112 */ 				}
/* 000112 */ 			}
/* 000112 */ 		}
/* 000112 */ 		else {
/* 000112 */ 		}
/* 000134 */ 		var nodelist = (function () {
/* 000134 */ 			var __accu0__ = self;
/* 000134 */ 			return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000134 */ 		}) ();
/* 000135 */ 		return (function () {
/* 000135 */ 			var __accu0__ = nodelist;
/* 000135 */ 			return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000135 */ 		}) ();
/* 000135 */ 	});},
/* 000138 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000138 */ 		if (arguments.length) {
/* 000138 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000138 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000138 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000138 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000138 */ 					switch (__attrib0__) {
/* 000138 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000138 */ 					}
/* 000138 */ 				}
/* 000138 */ 			}
/* 000138 */ 		}
/* 000138 */ 		else {
/* 000138 */ 		}
/* 000140 */ 		return (function () {
/* 000140 */ 			var __accu0__ = '{}(argument_node_object={!r})';
/* 000140 */ 			return __call__ (__accu0__.format, __accu0__, self.__class__.__name__, self.argument_node_object);
/* 000140 */ 		}) ();
/* 000140 */ 	});},
/* 000147 */ 	get __eq__ () {return __get__ (this, function (self, other) {
/* 000147 */ 		if (arguments.length) {
/* 000147 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000147 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000147 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000147 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000147 */ 					switch (__attrib0__) {
/* 000147 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000147 */ 						case 'other': var other = __allkwargs0__ [__attrib0__]; break;
/* 000147 */ 					}
/* 000147 */ 				}
/* 000147 */ 			}
/* 000147 */ 		}
/* 000147 */ 		else {
/* 000147 */ 		}
/* 000148 */ 		return __t__ (__t__ (self.argument_node_object === null) && other.argument_node_object === null) || __eq__ (self.argument_node_object, other.argument_node_object);
/* 000148 */ 	});}
/* 000148 */ });
/* 000157 */ export var ParsedArgumentsInfo =  __class__ ('ParsedArgumentsInfo', [object], {
/* 000157 */ 	__module__: __name__,
/* 000162 */ 	get __init__ () {return __get__ (this, function (self, parsed_arguments, node) {
/* 000162 */ 		if (typeof parsed_arguments == 'undefined' || (parsed_arguments != null && parsed_arguments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000162 */ 			var parsed_arguments = null;
/* 000162 */ 		};
/* 000162 */ 		if (typeof node == 'undefined' || (node != null && node.hasOwnProperty ("__kwargtrans__"))) {;
/* 000162 */ 			var node = null;
/* 000162 */ 		};
/* 000162 */ 		if (arguments.length) {
/* 000162 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000162 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000162 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000162 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000162 */ 					switch (__attrib0__) {
/* 000162 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000162 */ 						case 'parsed_arguments': var parsed_arguments = __allkwargs0__ [__attrib0__]; break;
/* 000162 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000162 */ 					}
/* 000162 */ 				}
/* 000162 */ 			}
/* 000162 */ 		}
/* 000162 */ 		else {
/* 000162 */ 		}
/* 000163 */ 		__call__ (__call__ (__super__, null, ParsedArgumentsInfo, '__init__'), null, self);
/* 000164 */ 		self.parsed_arguments = parsed_arguments;
/* 000165 */ 		self.node = node;
/* 000166 */ 		if (__t__ (self.node !== null)) {
/* 000167 */ 			self.node_pos = self.node.pos;
/* 000168 */ 			if (__t__ (__t__ (self.parsed_arguments === null) && __call__ (hasattr, null, self.node, 'nodeargd'))) {
/* 000169 */ 				self.parsed_arguments = self.node.nodeargd;
/* 000169 */ 			}
/* 000170 */ 			else {
/* 000171 */ 				self.parsed_arguments = null;
/* 000171 */ 			}
/* 000171 */ 		}
/* 000172 */ 		else {
/* 000173 */ 			self.node_pos = null;
/* 000173 */ 		}
/* 000175 */ 		if (__t__ (__t__ (self.parsed_arguments === null) && self.node === null)) {
/* 000176 */ 			(function () {
/* 000176 */ 				var __accu0__ = logger;
/* 000176 */ 				return __call__ (__accu0__.warning, __accu0__, 'You created ParsedArgumentsInfo with both node=None and parsed_arguments=None, might be a bug in your code?');
/* 000176 */ 			}) ();
/* 000176 */ 		}
/* 000176 */ 	});},
/* 000179 */ 	get get_argument_info () {return __get__ (this, function (self, arg) {
/* 000179 */ 		if (arguments.length) {
/* 000179 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000179 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000179 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000179 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000179 */ 					switch (__attrib0__) {
/* 000179 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000179 */ 						case 'arg': var arg = __allkwargs0__ [__attrib0__]; break;
/* 000179 */ 					}
/* 000179 */ 				}
/* 000179 */ 			}
/* 000179 */ 		}
/* 000179 */ 		else {
/* 000179 */ 		}
/* 000191 */ 		if (__t__ (self.parsed_arguments === null)) {
/* 000192 */ 			var __except0__ = __call__ (LatexWalkerParseError, null, 'Cannot get argument information, there were no arguments specified', __kwargtrans__ ({pos: self.node_pos}));
/* 000192 */ 			__except0__.__cause__ = null;
/* 000192 */ 			throw __except0__;
/* 000192 */ 		}
/* 000197 */ 		var arg_i = arg;
/* 000198 */ 		if (__t__ (__call__ (isinstance, null, arg_i, _basestring))) {
/* 000200 */ 			var argname = arg_i;
/* 000201 */ 			var __break0__ = false;
/* 000201 */ 			var __iterable0__ = __call__ (enumerate, null, self.parsed_arguments.arguments_spec_list);
/* 000201 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000201 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000201 */ 				var j = __left0__ [0];
/* 000201 */ 				var arg_spec = __left0__ [1];
/* 000202 */ 				if (__t__ (__eq__ (arg_spec.argname, argname))) {
/* 000203 */ 					var arg_i = j;
/* 000203 */ 					__break0__ = true;
/* 000203 */ 					break;
/* 000203 */ 				}
/* 000203 */ 			}
/* 000205 */ 			if (!__break0__) {
/* 000207 */ 				var __except0__ = __call__ (LatexWalkerParseError, null, (function () {
/* 000207 */ 					var __accu0__ = 'Cannot find argument named ‘{}’';
/* 000207 */ 					return __call__ (__accu0__.format, __accu0__, argname);
/* 000207 */ 				}) (), __kwargtrans__ ({pos: self.node_pos}));
/* 000207 */ 				__except0__.__cause__ = null;
/* 000207 */ 				throw __except0__;
/* 000207 */ 			}
/* 000207 */ 		}
/* 000212 */ 		return __call__ (SingleParsedArgumentInfo, null, __getitem__ (self.parsed_arguments.argnlist, arg_i));
/* 000212 */ 	});},
/* 000214 */ 	get get_all_arguments_info () {return __get__ (this, function (self, args, allow_additional_arguments, skip_nonexistent_arguments, return_argnames_only) {
/* 000214 */ 		if (typeof args == 'undefined' || (args != null && args.hasOwnProperty ("__kwargtrans__"))) {;
/* 000214 */ 			var args = null;
/* 000214 */ 		};
/* 000214 */ 		if (typeof allow_additional_arguments == 'undefined' || (allow_additional_arguments != null && allow_additional_arguments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000214 */ 			var allow_additional_arguments = false;
/* 000214 */ 		};
/* 000214 */ 		if (typeof skip_nonexistent_arguments == 'undefined' || (skip_nonexistent_arguments != null && skip_nonexistent_arguments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000214 */ 			var skip_nonexistent_arguments = false;
/* 000214 */ 		};
/* 000214 */ 		if (typeof return_argnames_only == 'undefined' || (return_argnames_only != null && return_argnames_only.hasOwnProperty ("__kwargtrans__"))) {;
/* 000214 */ 			var return_argnames_only = true;
/* 000214 */ 		};
/* 000214 */ 		if (arguments.length) {
/* 000214 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000214 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000214 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000214 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000214 */ 					switch (__attrib0__) {
/* 000214 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000214 */ 						case 'args': var args = __allkwargs0__ [__attrib0__]; break;
/* 000214 */ 						case 'allow_additional_arguments': var allow_additional_arguments = __allkwargs0__ [__attrib0__]; break;
/* 000214 */ 						case 'skip_nonexistent_arguments': var skip_nonexistent_arguments = __allkwargs0__ [__attrib0__]; break;
/* 000214 */ 						case 'return_argnames_only': var return_argnames_only = __allkwargs0__ [__attrib0__]; break;
/* 000214 */ 					}
/* 000214 */ 				}
/* 000214 */ 			}
/* 000214 */ 		}
/* 000214 */ 		else {
/* 000214 */ 		}
/* 000244 */ 		if (__t__ (self.parsed_arguments === null)) {
/* 000245 */ 			if (__t__ (skip_nonexistent_arguments)) {
/* 000246 */ 				return dict ({});
/* 000246 */ 			}
/* 000247 */ 			var msg = 'Missing arguments';
/* 000248 */ 			if (__t__ (self.node !== null)) {
/* 000249 */ 				var msg = (function () {
/* 000249 */ 					var __accu0__ = 'Missing arguments to {!r}';
/* 000249 */ 					return __call__ (__accu0__.format, __accu0__, self.node);
/* 000249 */ 				}) ();
/* 000249 */ 			}
/* 000250 */ 			var __except0__ = __call__ (LatexWalkerParseError, null, msg, self.node_pos);
/* 000250 */ 			__except0__.__cause__ = null;
/* 000250 */ 			throw __except0__;
/* 000250 */ 		}
/* 000255 */ 		var args_info = dict ({});
/* 000257 */ 		var arg_names_seen = __call__ (set, null);
/* 000258 */ 		var arg_i_seen = __call__ (set, null);
/* 000260 */ 		var __iterable0__ = __call__ (enumerate, null, self.parsed_arguments.arguments_spec_list);
/* 000260 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000260 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000260 */ 			var j = __left0__ [0];
/* 000260 */ 			var arg_spec = __left0__ [1];
/* 000262 */ 			var argument_node_object = __getitem__ (self.parsed_arguments.argnlist, j);
/* 000264 */ 			var arg_requested = false;
/* 000265 */ 			var arg_requested_by = null;
/* 000266 */ 			if (__t__ (args !== null)) {
/* 000267 */ 				if (__t__ (__in__ (arg_spec.argname, args))) {
/* 000268 */ 					var arg_requested = true;
/* 000269 */ 					var arg_requested_by = arg_spec.argname;
/* 000270 */ 					(function () {
/* 000270 */ 						var __accu0__ = arg_names_seen;
/* 000270 */ 						return __call__ (__accu0__.add, __accu0__, arg_spec.argname);
/* 000270 */ 					}) ();
/* 000270 */ 				}
/* 000271 */ 				else if (__t__ (__in__ (j, args))) {
/* 000272 */ 					var arg_requested = true;
/* 000273 */ 					var arg_requested_by = j;
/* 000274 */ 					(function () {
/* 000274 */ 						var __accu0__ = arg_i_seen;
/* 000274 */ 						return __call__ (__accu0__.add, __accu0__, j);
/* 000274 */ 					}) ();
/* 000274 */ 				}
/* 000274 */ 			}
/* 000275 */ 			else {
/* 000276 */ 				var arg_requested = true;
/* 000276 */ 			}
/* 000278 */ 			if (__t__ (!__t__ ((arg_requested)))) {
/* 000279 */ 				if (__t__ (!__t__ ((allow_additional_arguments)))) {
/* 000281 */ 					var __except0__ = __call__ (LatexWalkerParseError, null, (function () {
/* 000281 */ 						var __accu0__ = 'Got unexpected argument ‘{}’';
/* 000281 */ 						return __call__ (__accu0__.format, __accu0__, arg_spec.argname);
/* 000281 */ 					}) (), __kwargtrans__ ({pos: (__t__ (argument_node_object !== null) ? argument_node_object.pos : null)}));
/* 000281 */ 					__except0__.__cause__ = null;
/* 000281 */ 					throw __except0__;
/* 000281 */ 				}
/* 000281 */ 				continue;
/* 000281 */ 			}
/* 000288 */ 			var arg_info = __call__ (SingleParsedArgumentInfo, null, argument_node_object);
/* 000290 */ 			if (__t__ (__t__ (!__t__ ((return_argnames_only))) && arg_requested_by !== null)) {
/* 000291 */ 				__setitem__ (args_info, arg_requested_by, arg_info);
/* 000291 */ 			}
/* 000292 */ 			else if (__t__ (arg_spec.argname)) {
/* 000293 */ 				__setitem__ (args_info, arg_spec.argname, arg_info);
/* 000293 */ 			}
/* 000294 */ 			else {
/* 000295 */ 				__setitem__ (args_info, j, arg_info);
/* 000295 */ 			}
/* 000295 */ 		}
/* 000297 */ 		if (__t__ (__t__ (!__t__ ((skip_nonexistent_arguments))) && args !== null)) {
/* 000299 */ 			var __iterable0__ = args;
/* 000299 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000299 */ 				var arg_x = __getitem__ (__iterable0__, __index0__);
/* 000300 */ 				if (__t__ (__t__ (!__in__ (arg_x, arg_names_seen)) && !__in__ (arg_x, arg_i_seen))) {
/* 000302 */ 					var __except0__ = __call__ (ValueError, null, (function () {
/* 000302 */ 						var __accu0__ = 'Missing argument {}';
/* 000305 */ 						return __call__ (__accu0__.format, __accu0__, (__t__ (__call__ (isinstance, null, arg_x, _basestring)) ? __add__ (__add__ ('‘', arg_x), '’') : __call__ (str, null, arg_x)));
/* 000305 */ 					}) ());
/* 000305 */ 					__except0__.__cause__ = null;
/* 000305 */ 					throw __except0__;
/* 000305 */ 				}
/* 000305 */ 			}
/* 000305 */ 		}
/* 000308 */ 		return args_info;
/* 000308 */ 	});}
/* 000308 */ });
/* 000051 */ 
//# sourceMappingURL=pylatexenc.latexnodes._parsedargsinfo.map