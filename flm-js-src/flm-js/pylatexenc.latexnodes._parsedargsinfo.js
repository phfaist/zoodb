/* 000001 */ // Transcrypt'ed from Python, 2023-05-13 12:17:27
/* 000051 */ var logging = {};
/* 000051 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000055 */ import {LatexWalkerParseError} from './pylatexenc.latexnodes._exctypes.js';
/* 000054 */ import {LatexCharsNode, LatexCommentNode, LatexEnvironmentNode, LatexGroupNode, LatexMacroNode, LatexMathNode, LatexNode, LatexNodeList, LatexNodesVisitor, LatexSpecialsNode, ParsedArguments, __all__, _get_content_as_chars, _unicode_from_str, _update_posposend_from_nodelist, latex_node_types} from './pylatexenc.latexnodes.nodes.js';
/* 000051 */ import * as __module_logging__ from './logging.js';
/* 000051 */ __nest__ (logging, '', __module_logging__);
/* 000051 */ export {LatexMathNode, __all__, _unicode_from_str, LatexWalkerParseError, LatexMacroNode, LatexNode, LatexNodeList, LatexNodesVisitor, LatexSpecialsNode, ParsedArguments, latex_node_types, _update_posposend_from_nodelist, LatexEnvironmentNode, LatexCharsNode, LatexCommentNode, LatexGroupNode, _get_content_as_chars};
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
/* 000103 */ 			return __call__ (LatexNodeList, null, [null]);
/* 000103 */ 		}
/* 000105 */ 		if (__t__ (__call__ (isinstance, null, argument_node_object, LatexNodeList))) {
/* 000106 */ 			return argument_node_object;
/* 000106 */ 		}
/* 000108 */ 		if (__t__ ((function () {
/* 000108 */ 			var __accu0__ = argument_node_object;
/* 000108 */ 			return __call__ (__accu0__.isNodeType, __accu0__, LatexGroupNode);
/* 000108 */ 		}) ())) {
/* 000109 */ 			return argument_node_object.nodelist;
/* 000109 */ 		}
/* 000111 */ 		return __call__ (LatexNodeList, null, [argument_node_object]);
/* 000111 */ 	});},
/* 000114 */ 	get get_content_as_chars () {return __get__ (this, function (self) {
/* 000114 */ 		if (arguments.length) {
/* 000114 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000114 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000114 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000114 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000114 */ 					switch (__attrib0__) {
/* 000114 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000114 */ 					}
/* 000114 */ 				}
/* 000114 */ 			}
/* 000114 */ 		}
/* 000114 */ 		else {
/* 000114 */ 		}
/* 000136 */ 		var nodelist = (function () {
/* 000136 */ 			var __accu0__ = self;
/* 000136 */ 			return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000136 */ 		}) ();
/* 000137 */ 		return (function () {
/* 000137 */ 			var __accu0__ = nodelist;
/* 000137 */ 			return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000137 */ 		}) ();
/* 000137 */ 	});},
/* 000140 */ 	get __repr__ () {return __get__ (this, function (self) {
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
/* 000142 */ 		return (function () {
/* 000142 */ 			var __accu0__ = '{}(argument_node_object={!r})';
/* 000142 */ 			return __call__ (__accu0__.format, __accu0__, self.__class__.__name__, self.argument_node_object);
/* 000142 */ 		}) ();
/* 000142 */ 	});},
/* 000149 */ 	get __eq__ () {return __get__ (this, function (self, other) {
/* 000149 */ 		if (arguments.length) {
/* 000149 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000149 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000149 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000149 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000149 */ 					switch (__attrib0__) {
/* 000149 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000149 */ 						case 'other': var other = __allkwargs0__ [__attrib0__]; break;
/* 000149 */ 					}
/* 000149 */ 				}
/* 000149 */ 			}
/* 000149 */ 		}
/* 000149 */ 		else {
/* 000149 */ 		}
/* 000150 */ 		return __t__ (__t__ (self.argument_node_object === null) && other.argument_node_object === null) || __eq__ (self.argument_node_object, other.argument_node_object);
/* 000150 */ 	});}
/* 000150 */ });
/* 000159 */ export var ParsedArgumentsInfo =  __class__ ('ParsedArgumentsInfo', [object], {
/* 000159 */ 	__module__: __name__,
/* 000164 */ 	get __init__ () {return __get__ (this, function (self, parsed_arguments, node) {
/* 000164 */ 		if (typeof parsed_arguments == 'undefined' || (parsed_arguments != null && parsed_arguments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000164 */ 			var parsed_arguments = null;
/* 000164 */ 		};
/* 000164 */ 		if (typeof node == 'undefined' || (node != null && node.hasOwnProperty ("__kwargtrans__"))) {;
/* 000164 */ 			var node = null;
/* 000164 */ 		};
/* 000164 */ 		if (arguments.length) {
/* 000164 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000164 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000164 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000164 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000164 */ 					switch (__attrib0__) {
/* 000164 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000164 */ 						case 'parsed_arguments': var parsed_arguments = __allkwargs0__ [__attrib0__]; break;
/* 000164 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000164 */ 					}
/* 000164 */ 				}
/* 000164 */ 			}
/* 000164 */ 		}
/* 000164 */ 		else {
/* 000164 */ 		}
/* 000165 */ 		__call__ (__call__ (__super__, null, ParsedArgumentsInfo, '__init__'), null, self);
/* 000166 */ 		self.parsed_arguments = parsed_arguments;
/* 000167 */ 		self.node = node;
/* 000168 */ 		if (__t__ (self.node !== null)) {
/* 000169 */ 			self.node_pos = self.node.pos;
/* 000170 */ 			if (__t__ (__t__ (self.parsed_arguments === null) && __call__ (hasattr, null, self.node, 'nodeargd'))) {
/* 000171 */ 				self.parsed_arguments = self.node.nodeargd;
/* 000171 */ 			}
/* 000172 */ 			else {
/* 000173 */ 				self.parsed_arguments = null;
/* 000173 */ 			}
/* 000173 */ 		}
/* 000174 */ 		else {
/* 000175 */ 			self.node_pos = null;
/* 000175 */ 		}
/* 000177 */ 		if (__t__ (__t__ (self.parsed_arguments === null) && self.node === null)) {
/* 000178 */ 			(function () {
/* 000178 */ 				var __accu0__ = logger;
/* 000178 */ 				return __call__ (__accu0__.warning, __accu0__, 'You created ParsedArgumentsInfo with both node=None and parsed_arguments=None, might be a bug in your code?');
/* 000178 */ 			}) ();
/* 000178 */ 		}
/* 000178 */ 	});},
/* 000181 */ 	get get_argument_info () {return __get__ (this, function (self, arg) {
/* 000181 */ 		if (arguments.length) {
/* 000181 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000181 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000181 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000181 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000181 */ 					switch (__attrib0__) {
/* 000181 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000181 */ 						case 'arg': var arg = __allkwargs0__ [__attrib0__]; break;
/* 000181 */ 					}
/* 000181 */ 				}
/* 000181 */ 			}
/* 000181 */ 		}
/* 000181 */ 		else {
/* 000181 */ 		}
/* 000193 */ 		if (__t__ (self.parsed_arguments === null)) {
/* 000194 */ 			var __except0__ = __call__ (LatexWalkerParseError, null, 'Cannot get argument information, there were no arguments specified', __kwargtrans__ ({pos: self.node_pos}));
/* 000194 */ 			__except0__.__cause__ = null;
/* 000194 */ 			throw __except0__;
/* 000194 */ 		}
/* 000199 */ 		var arg_i = arg;
/* 000200 */ 		if (__t__ (__call__ (isinstance, null, arg_i, _basestring))) {
/* 000202 */ 			var argname = arg_i;
/* 000203 */ 			var __break0__ = false;
/* 000203 */ 			var __iterable0__ = __call__ (enumerate, null, self.parsed_arguments.arguments_spec_list);
/* 000203 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000203 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000203 */ 				var j = __left0__ [0];
/* 000203 */ 				var arg_spec = __left0__ [1];
/* 000204 */ 				if (__t__ (__eq__ (arg_spec.argname, argname))) {
/* 000205 */ 					var arg_i = j;
/* 000205 */ 					__break0__ = true;
/* 000205 */ 					break;
/* 000205 */ 				}
/* 000205 */ 			}
/* 000207 */ 			if (!__break0__) {
/* 000209 */ 				var __except0__ = __call__ (LatexWalkerParseError, null, (function () {
/* 000209 */ 					var __accu0__ = 'Cannot find argument named ‘{}’';
/* 000209 */ 					return __call__ (__accu0__.format, __accu0__, argname);
/* 000209 */ 				}) (), __kwargtrans__ ({pos: self.node_pos}));
/* 000209 */ 				__except0__.__cause__ = null;
/* 000209 */ 				throw __except0__;
/* 000209 */ 			}
/* 000209 */ 		}
/* 000214 */ 		return __call__ (SingleParsedArgumentInfo, null, __getitem__ (self.parsed_arguments.argnlist, arg_i));
/* 000214 */ 	});},
/* 000216 */ 	get get_all_arguments_info () {return __get__ (this, function (self, args, allow_additional_arguments, skip_nonexistent_arguments, return_argnames_only) {
/* 000216 */ 		if (typeof args == 'undefined' || (args != null && args.hasOwnProperty ("__kwargtrans__"))) {;
/* 000216 */ 			var args = null;
/* 000216 */ 		};
/* 000216 */ 		if (typeof allow_additional_arguments == 'undefined' || (allow_additional_arguments != null && allow_additional_arguments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000216 */ 			var allow_additional_arguments = false;
/* 000216 */ 		};
/* 000216 */ 		if (typeof skip_nonexistent_arguments == 'undefined' || (skip_nonexistent_arguments != null && skip_nonexistent_arguments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000216 */ 			var skip_nonexistent_arguments = false;
/* 000216 */ 		};
/* 000216 */ 		if (typeof return_argnames_only == 'undefined' || (return_argnames_only != null && return_argnames_only.hasOwnProperty ("__kwargtrans__"))) {;
/* 000216 */ 			var return_argnames_only = true;
/* 000216 */ 		};
/* 000216 */ 		if (arguments.length) {
/* 000216 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000216 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000216 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000216 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000216 */ 					switch (__attrib0__) {
/* 000216 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000216 */ 						case 'args': var args = __allkwargs0__ [__attrib0__]; break;
/* 000216 */ 						case 'allow_additional_arguments': var allow_additional_arguments = __allkwargs0__ [__attrib0__]; break;
/* 000216 */ 						case 'skip_nonexistent_arguments': var skip_nonexistent_arguments = __allkwargs0__ [__attrib0__]; break;
/* 000216 */ 						case 'return_argnames_only': var return_argnames_only = __allkwargs0__ [__attrib0__]; break;
/* 000216 */ 					}
/* 000216 */ 				}
/* 000216 */ 			}
/* 000216 */ 		}
/* 000216 */ 		else {
/* 000216 */ 		}
/* 000246 */ 		if (__t__ (self.parsed_arguments === null)) {
/* 000247 */ 			if (__t__ (skip_nonexistent_arguments)) {
/* 000248 */ 				return dict ({});
/* 000248 */ 			}
/* 000249 */ 			var msg = 'Missing arguments';
/* 000250 */ 			if (__t__ (self.node !== null)) {
/* 000251 */ 				var msg = (function () {
/* 000251 */ 					var __accu0__ = 'Missing arguments to {!r}';
/* 000251 */ 					return __call__ (__accu0__.format, __accu0__, self.node);
/* 000251 */ 				}) ();
/* 000251 */ 			}
/* 000252 */ 			var __except0__ = __call__ (LatexWalkerParseError, null, msg, self.node_pos);
/* 000252 */ 			__except0__.__cause__ = null;
/* 000252 */ 			throw __except0__;
/* 000252 */ 		}
/* 000257 */ 		var args_info = dict ({});
/* 000259 */ 		var arg_names_seen = __call__ (set, null);
/* 000260 */ 		var arg_i_seen = __call__ (set, null);
/* 000262 */ 		var __iterable0__ = __call__ (enumerate, null, self.parsed_arguments.arguments_spec_list);
/* 000262 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000262 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000262 */ 			var j = __left0__ [0];
/* 000262 */ 			var arg_spec = __left0__ [1];
/* 000264 */ 			var argument_node_object = __getitem__ (self.parsed_arguments.argnlist, j);
/* 000266 */ 			var arg_requested = false;
/* 000267 */ 			var arg_requested_by = null;
/* 000268 */ 			if (__t__ (args !== null)) {
/* 000269 */ 				if (__t__ (__in__ (arg_spec.argname, args))) {
/* 000270 */ 					var arg_requested = true;
/* 000271 */ 					var arg_requested_by = arg_spec.argname;
/* 000272 */ 					(function () {
/* 000272 */ 						var __accu0__ = arg_names_seen;
/* 000272 */ 						return __call__ (__accu0__.add, __accu0__, arg_spec.argname);
/* 000272 */ 					}) ();
/* 000272 */ 				}
/* 000273 */ 				else if (__t__ (__in__ (j, args))) {
/* 000274 */ 					var arg_requested = true;
/* 000275 */ 					var arg_requested_by = j;
/* 000276 */ 					(function () {
/* 000276 */ 						var __accu0__ = arg_i_seen;
/* 000276 */ 						return __call__ (__accu0__.add, __accu0__, j);
/* 000276 */ 					}) ();
/* 000276 */ 				}
/* 000276 */ 			}
/* 000277 */ 			else {
/* 000278 */ 				var arg_requested = true;
/* 000278 */ 			}
/* 000280 */ 			if (__t__ (!__t__ ((arg_requested)))) {
/* 000281 */ 				if (__t__ (!__t__ ((allow_additional_arguments)))) {
/* 000283 */ 					var __except0__ = __call__ (LatexWalkerParseError, null, (function () {
/* 000283 */ 						var __accu0__ = 'Got unexpected argument ‘{}’';
/* 000283 */ 						return __call__ (__accu0__.format, __accu0__, arg_spec.argname);
/* 000283 */ 					}) (), __kwargtrans__ ({pos: (__t__ (argument_node_object !== null) ? argument_node_object.pos : null)}));
/* 000283 */ 					__except0__.__cause__ = null;
/* 000283 */ 					throw __except0__;
/* 000283 */ 				}
/* 000283 */ 				continue;
/* 000283 */ 			}
/* 000290 */ 			var arg_info = __call__ (SingleParsedArgumentInfo, null, argument_node_object);
/* 000292 */ 			if (__t__ (__t__ (!__t__ ((return_argnames_only))) && arg_requested_by !== null)) {
/* 000293 */ 				__setitem__ (args_info, arg_requested_by, arg_info);
/* 000293 */ 			}
/* 000294 */ 			else if (__t__ (arg_spec.argname)) {
/* 000295 */ 				__setitem__ (args_info, arg_spec.argname, arg_info);
/* 000295 */ 			}
/* 000296 */ 			else {
/* 000297 */ 				__setitem__ (args_info, j, arg_info);
/* 000297 */ 			}
/* 000297 */ 		}
/* 000299 */ 		if (__t__ (__t__ (!__t__ ((skip_nonexistent_arguments))) && args !== null)) {
/* 000301 */ 			var __iterable0__ = args;
/* 000301 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000301 */ 				var arg_x = __getitem__ (__iterable0__, __index0__);
/* 000302 */ 				if (__t__ (__t__ (!__in__ (arg_x, arg_names_seen)) && !__in__ (arg_x, arg_i_seen))) {
/* 000304 */ 					var __except0__ = __call__ (ValueError, null, (function () {
/* 000304 */ 						var __accu0__ = 'Missing argument {}';
/* 000307 */ 						return __call__ (__accu0__.format, __accu0__, (__t__ (__call__ (isinstance, null, arg_x, _basestring)) ? __add__ (__add__ ('‘', arg_x), '’') : __call__ (str, null, arg_x)));
/* 000307 */ 					}) ());
/* 000307 */ 					__except0__.__cause__ = null;
/* 000307 */ 					throw __except0__;
/* 000307 */ 				}
/* 000307 */ 			}
/* 000307 */ 		}
/* 000310 */ 		return args_info;
/* 000310 */ 	});}
/* 000310 */ });
/* 000051 */ 
//# sourceMappingURL=pylatexenc.latexnodes._parsedargsinfo.map