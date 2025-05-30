/* 000001 */ // Transcrypt'ed from Python, 2025-02-21 21:50:01
/* 000001 */ var __name__ = 'org.transcrypt.__runtime__';
/* 000003 */ export var __envir__ = {};
/* 000003 */ __envir__.interpreter_name = 'python';
/* 000003 */ __envir__.transpiler_name = 'transcrypt';
/* 000003 */ __envir__.executor_name = __envir__.transpiler_name;
/* 000003 */ __envir__.transpiler_version = '3.9.0';
/* 000003 */ 
/* 000004 */ export function __nest__ (headObject, tailNames, value) {
/* 000004 */     var current = headObject;
/* 000004 */     if (tailNames != '') {
/* 000004 */         var tailChain = tailNames.split ('.');
/* 000004 */         var firstNewIndex = tailChain.length;
/* 000004 */         for (var index = 0; index < tailChain.length; index++) {
/* 000004 */             if (!current.hasOwnProperty (tailChain [index])) {
/* 000004 */                 firstNewIndex = index;
/* 000004 */                 break;
/* 000004 */             }
/* 000004 */             current = current [tailChain [index]];
/* 000004 */         }
/* 000004 */         for (var index = firstNewIndex; index < tailChain.length; index++) {
/* 000004 */             current [tailChain [index]] = {};
/* 000004 */             current = current [tailChain [index]];
/* 000004 */         }
/* 000004 */     }
/* 000004 */     for (let attrib of Object.getOwnPropertyNames (value)) {
/* 000004 */         Object.defineProperty (current, attrib, {
/* 000004 */             get () {return value [attrib];},
/* 000004 */             enumerable: true,
/* 000004 */             configurable: true
/* 000004 */         });
/* 000004 */     }
/* 000004 */ };
/* 000004 */ export function __init__ (module) {
/* 000004 */     if (!module.__inited__) {
/* 000004 */         module.__all__.__init__ (module.__all__);
/* 000004 */         module.__inited__ = true;
/* 000004 */     }
/* 000004 */     return module.__all__;
/* 000004 */ };
/* 000004 */ export function __get__ (aThis, func, quotedFuncName) {
/* 000004 */     if (aThis) {
/* 000004 */         if (aThis.hasOwnProperty ('__class__') || typeof aThis == 'string' || aThis instanceof String) {
/* 000004 */             if (quotedFuncName) {
/* 000004 */                 Object.defineProperty (aThis, quotedFuncName, {
/* 000004 */                     value: function () {
/* 000004 */                         var args = [] .slice.apply (arguments);
/* 000004 */                         return func.apply (null, [aThis] .concat (args));
/* 000004 */                     },
/* 000004 */                     writable: true,
/* 000004 */                     enumerable: true,
/* 000004 */                     configurable: true
/* 000004 */                 });
/* 000004 */             }
/* 000004 */             return function () {
/* 000004 */                 var args = [] .slice.apply (arguments);
/* 000004 */                 return func.apply (null, [aThis.__proxy__ ? aThis.__proxy__ : aThis] .concat (args));
/* 000004 */             };
/* 000004 */         }
/* 000004 */         else {
/* 000004 */             return func;
/* 000004 */         }
/* 000004 */     }
/* 000004 */     else {
/* 000004 */         return func;
/* 000004 */     }
/* 000004 */ };
/* 000004 */ export function __getcm__ (aThis, func, quotedFuncName) {
/* 000004 */     if (aThis.hasOwnProperty ('__class__')) {
/* 000004 */         return function () {
/* 000004 */             var args = [] .slice.apply (arguments);
/* 000004 */             return func.apply (null, [aThis.__class__] .concat (args));
/* 000004 */         };
/* 000004 */     }
/* 000004 */     else {
/* 000004 */         return function () {
/* 000004 */             var args = [] .slice.apply (arguments);
/* 000004 */             return func.apply (null, [aThis] .concat (args));
/* 000004 */         };
/* 000004 */     }
/* 000004 */ };
/* 000004 */ export function __getsm__ (aThis, func, quotedFuncName) {
/* 000004 */     return func;
/* 000004 */ };
/* 000004 */ export var py_metatype = {
/* 000004 */     __name__: 'type',
/* 000004 */     __bases__: [],
/* 000004 */     __new__: function (meta, name, bases, attribs) {
/* 000004 */         var cls = function () {
/* 000004 */             var args = [] .slice.apply (arguments);
/* 000004 */             return cls.__new__ (args);
/* 000004 */         };
/* 000004 */         for (var index = bases.length - 1; index >= 0; index--) {
/* 000004 */             var base = bases [index];
/* 000004 */             for (var attrib in base) {
/* 000004 */                 var descrip = Object.getOwnPropertyDescriptor (base, attrib);
/* 000004 */                 if (descrip == null) {
/* 000004 */                     continue;
/* 000004 */                 }
/* 000004 */                 Object.defineProperty (cls, attrib, descrip);
/* 000004 */             }
/* 000004 */             for (let symbol of Object.getOwnPropertySymbols (base)) {
/* 000004 */                 let descrip = Object.getOwnPropertyDescriptor (base, symbol);
/* 000004 */                 Object.defineProperty (cls, symbol, descrip);
/* 000004 */             }
/* 000004 */         }
/* 000004 */         cls.__metaclass__ = meta;
/* 000004 */         cls.__name__ = name.startsWith ('py_') ? name.slice (3) : name;
/* 000004 */         cls.__bases__ = bases;
/* 000004 */         for (var attrib in attribs) {
/* 000004 */             var descrip = Object.getOwnPropertyDescriptor (attribs, attrib);
/* 000004 */             Object.defineProperty (cls, attrib, descrip);
/* 000004 */         }
/* 000004 */         for (let symbol of Object.getOwnPropertySymbols (attribs)) {
/* 000004 */             let descrip = Object.getOwnPropertyDescriptor (attribs, symbol);
/* 000004 */             Object.defineProperty (cls, symbol, descrip);
/* 000004 */         }
/* 000004 */         return cls;
/* 000004 */     }
/* 000004 */ };
/* 000004 */ py_metatype.__metaclass__ = py_metatype;
/* 000004 */ export var object = {
/* 000004 */     __init__: function (self) {},
/* 000004 */     __metaclass__: py_metatype,
/* 000004 */     __name__: 'object',
/* 000004 */     __bases__: [],
/* 000004 */     __new__: function (args) {
/* 000004 */         var instance = Object.create (this, {__class__: {value: this, enumerable: true}});
/* 000004 */         if ('__getattr__' in this || '__setattr__' in this) {
/* 000004 */             instance.__proxy__ = new Proxy (instance, {
/* 000004 */                 get: function (target, name) {
/* 000004 */                     let result = target [name];
/* 000004 */                     if (result == undefined) {
/* 000004 */                         return target.__getattr__ (name);
/* 000004 */                     }
/* 000004 */                     else {
/* 000004 */                         return result;
/* 000004 */                     }
/* 000004 */                 },
/* 000004 */                 set: function (target, name, value) {
/* 000004 */                     try {
/* 000004 */                         target.__setattr__ (name, value);
/* 000004 */                     }
/* 000004 */                     catch (exception) {
/* 000004 */                         target [name] = value;
/* 000004 */                     }
/* 000004 */                     return true;
/* 000004 */                 }
/* 000004 */             })
/* 000004 */ 			instance = instance.__proxy__
/* 000004 */         }
/* 000004 */         this.__init__.apply (null, [instance] .concat (args));
/* 000004 */         return instance;
/* 000004 */     }
/* 000004 */ };
/* 000004 */ export function __class__ (name, bases, attribs, meta) {
/* 000004 */     if (meta === undefined) {
/* 000004 */         meta = bases [0] .__metaclass__;
/* 000004 */     }
/* 000004 */     return meta.__new__ (meta, name, bases, attribs);
/* 000004 */ };
/* 000004 */ export function __pragma__ () {};
/* 000005 */ export function __call__ (/* <callee>, <this>, <params>* */) {
/* 000005 */     var args = [] .slice.apply (arguments);
/* 000005 */     if (typeof args [0] == 'object' && '__call__' in args [0]) {
/* 000005 */         return args [0] .__call__ .apply (args [1], args.slice (2));
/* 000005 */     }
/* 000005 */     else {
/* 000005 */         return args [0] .apply (args [1], args.slice (2));
/* 000005 */     }
/* 000005 */ };
/* 000005 */ __envir__.executor_name = __envir__.transpiler_name;
/* 000005 */ var __main__ = {__file__: ''};
/* 000005 */ var __except__ = null;
/* 000005 */ export function __kwargtrans__ (anObject) {
/* 000005 */     anObject.__kwargtrans__ = null;
/* 000005 */     anObject.constructor = Object;
/* 000005 */     return anObject;
/* 000005 */ }
/* 000005 */ export function __super__ (aClass, methodName) {
/* 000005 */     for (let base of aClass.__bases__) {
/* 000005 */         if (methodName in base) {
/* 000005 */            return base [methodName];
/* 000005 */         }
/* 000005 */     }
/* 000005 */     throw new Exception ('Superclass method not found');
/* 000005 */ }
/* 000005 */ export function property (getter, setter) {
/* 000005 */     if (!setter) {
/* 000005 */         setter = function () {};
/* 000005 */     }
/* 000005 */     return {get: function () {return getter (this)}, set: function (value) {setter (this, value)}, enumerable: true};
/* 000005 */ }
/* 000005 */ export function __setproperty__ (anObject, name, descriptor) {
/* 000005 */     if (!anObject.hasOwnProperty (name)) {
/* 000005 */         Object.defineProperty (anObject, name, descriptor);
/* 000005 */     }
/* 000005 */ }
/* 000005 */ export function assert (condition, message) {
/* 000005 */     if (!condition) {
/* 000005 */         throw AssertionError (message, new Error ());
/* 000005 */     }
/* 000005 */ }
/* 000005 */ export function __mergekwargtrans__ (object0, object1) {
/* 000005 */     var result = {};
/* 000005 */     for (var attrib in object0) {
/* 000005 */         result [attrib] = object0 [attrib];
/* 000005 */     }
/* 000005 */     for (var attrib in object1) {
/* 000005 */         result [attrib] = object1 [attrib];
/* 000005 */     }
/* 000005 */     return result;
/* 000005 */ };
/* 000005 */ export function __mergefields__ (targetClass, sourceClass) {
/* 000005 */     let fieldNames = ['__reprfields__', '__comparefields__', '__initfields__']
/* 000005 */     if (sourceClass [fieldNames [0]]) {
/* 000005 */         if (targetClass [fieldNames [0]]) {
/* 000005 */             for (let fieldName of fieldNames) {
/* 000005 */                 targetClass [fieldName] = new Set ([...targetClass [fieldName], ...sourceClass [fieldName]]);
/* 000005 */             }
/* 000005 */         }
/* 000005 */         else {
/* 000005 */             for (let fieldName of fieldNames) {
/* 000005 */                 targetClass [fieldName] = new Set (sourceClass [fieldName]);
/* 000005 */             }
/* 000005 */         }
/* 000005 */     }
/* 000005 */ }
/* 000005 */ export function __withblock__ (manager, statements) {
/* 000005 */     if (hasattr (manager, '__enter__')) {
/* 000005 */         try {
/* 000005 */             manager.__enter__ ();
/* 000005 */             statements ();
/* 000005 */             manager.__exit__ ();
/* 000005 */         }
/* 000005 */         catch (exception) {
/* 000005 */             if (! (manager.__exit__ (exception.name, exception, exception.stack))) {
/* 000005 */                 throw exception;
/* 000005 */             }
/* 000005 */         }
/* 000005 */     }
/* 000005 */     else {
/* 000005 */         statements ();
/* 000005 */         manager.close ();
/* 000005 */     }
/* 000005 */ };
/* 000005 */ export function dir (obj) {
/* 000005 */     var aList = [];
/* 000005 */     for (var aKey in obj) {
/* 000005 */         aList.push (aKey.startsWith ('py_') ? aKey.slice (3) : aKey);
/* 000005 */     }
/* 000005 */     aList.sort ();
/* 000005 */     return aList;
/* 000005 */ };
/* 000005 */ export function setattr (obj, name, value) {
/* 000005 */     obj [name] = value;
/* 000005 */ };
/* 000005 */ export function getattr (obj, name) {
/* 000005 */     return name in obj ? obj [name] : obj ['py_' + name];
/* 000005 */ };
/* 000005 */ export function hasattr (obj, name) {
/* 000005 */     try {
/* 000005 */         return name in obj || 'py_' + name in obj;
/* 000005 */     }
/* 000005 */     catch (exception) {
/* 000005 */         return false;
/* 000005 */     }
/* 000005 */ };
/* 000005 */ export function delattr (obj, name) {
/* 000005 */     if (name in obj) {
/* 000005 */         delete obj [name];
/* 000005 */     }
/* 000005 */     else {
/* 000005 */         delete obj ['py_' + name];
/* 000005 */     }
/* 000005 */ };
/* 000005 */ export function __in__ (element, container) {
/* 000005 */     if (container === undefined || container === null) {
/* 000005 */         return false;
/* 000005 */     }
/* 000005 */     if (container.__contains__ instanceof Function) {
/* 000005 */         return container.__contains__ (element);
/* 000005 */     }
/* 000005 */     else {
/* 000005 */         return (
/* 000005 */             container.indexOf ?
/* 000005 */             container.indexOf (element) > -1 :
/* 000005 */             container.hasOwnProperty (element)
/* 000005 */         );
/* 000005 */     }
/* 000005 */ };
/* 000005 */ export function __specialattrib__ (attrib) {
/* 000005 */     return (attrib.startswith ('__') && attrib.endswith ('__')) || attrib == 'constructor' || attrib.startswith ('py_');
/* 000005 */ };
/* 000005 */ export function len (anObject) {
/* 000005 */     if (anObject === undefined || anObject === null) {
/* 000005 */         return 0;
/* 000005 */     }
/* 000005 */     if (anObject.__len__ instanceof Function) {
/* 000005 */         return anObject.__len__ ();
/* 000005 */     }
/* 000005 */     if (anObject.length !== undefined) {
/* 000005 */         return anObject.length;
/* 000005 */     }
/* 000005 */     var length = 0;
/* 000005 */     for (var attr in anObject) {
/* 000005 */         if (!__specialattrib__ (attr)) {
/* 000005 */             length++;
/* 000005 */         }
/* 000005 */     }
/* 000005 */     return length;
/* 000005 */ };
/* 000005 */ export function __i__ (any) {
/* 000005 */     return py_typeof (any) == dict ? any.py_keys () : any;
/* 000005 */ }
/* 000005 */ export function __k__ (keyed, key) {
/* 000005 */     var result = keyed [key];
/* 000005 */     if (typeof result == 'undefined') {
/* 000005 */         if (keyed instanceof Array)
/* 000005 */             if (key == +key && key >= 0 && keyed.length > key)
/* 000005 */                 return result;
/* 000005 */             else
/* 000005 */                 throw IndexError (key, new Error());
/* 000005 */         else
/* 000005 */             throw KeyError (key, new Error());
/* 000005 */     }
/* 000005 */     return result;
/* 000005 */ }
/* 000005 */ export function __t__ (target) {
/* 000005 */     return (
/* 000005 */         target === undefined || target === null ? false :
/* 000005 */         ['boolean', 'number'] .indexOf (typeof target) >= 0 ? target :
/* 000005 */         target.__bool__ instanceof Function ? (target.__bool__ () ? target : false) :
/* 000005 */         target.__len__ instanceof Function ?  (target.__len__ () !== 0 ? target : false) :
/* 000005 */         target instanceof Function ? target :
/* 000005 */         len (target) !== 0 ? target :
/* 000005 */         false
/* 000005 */     );
/* 000005 */ }
/* 000005 */ export function float (any) {
/* 000005 */     if (any == 'inf') {
/* 000005 */         return Infinity;
/* 000005 */     }
/* 000005 */     else if (any == '-inf') {
/* 000005 */         return -Infinity;
/* 000005 */     }
/* 000005 */     else if (any == 'nan') {
/* 000005 */         return NaN;
/* 000005 */     }
/* 000005 */     else if (isNaN (parseFloat (any))) {
/* 000005 */         if (any === false) {
/* 000005 */             return 0;
/* 000005 */         }
/* 000005 */         else if (any === true) {
/* 000005 */             return 1;
/* 000005 */         }
/* 000005 */         else {
/* 000005 */             throw ValueError ("could not convert string to float: '" + str(any) + "'", new Error ());
/* 000005 */         }
/* 000005 */     }
/* 000005 */     else {
/* 000005 */         return +any;
/* 000005 */     }
/* 000005 */ };
/* 000005 */ float.__name__ = 'float';
/* 000005 */ float.__bases__ = [object];
/* 000005 */ export function int (any) {
/* 000005 */     return float (any) | 0
/* 000005 */ };
/* 000005 */ int.__name__ = 'int';
/* 000005 */ int.__bases__ = [object];
/* 000005 */ Number.prototype.__format__ = function (fmt_spec) {
/* 000005 */     if (fmt_spec == undefined || fmt_spec.strip ().length == 0) {
/* 000005 */         return this.toString ();
/* 000005 */     }
/* 000005 */     var thousand_sep = false;
/* 000005 */     var g_default = false;
/* 000005 */     var width = 0;
/* 000005 */     var zero = false;
/* 000005 */     var alternate = false;
/* 000005 */     var sign = '-';
/* 000005 */     var align = '>';
/* 000005 */     var fill = ' ';
/* 000005 */     var precision = undefined;
/* 000005 */     var ftype = undefined;
/* 000005 */     var val = this.valueOf ();
/* 000005 */     var is_negative = val < 0;
/* 000005 */     val = Math.abs (val);
/* 000005 */     function pad (s, width, fill, align) {
/* 000005 */         if (fill == undefined) {
/* 000005 */             fill = ' ';
/* 000005 */         }
/* 000005 */         if (align == undefined) {
/* 000005 */             align = '>';
/* 000005 */         }
/* 000005 */         var alt = '';
/* 000005 */         var sign = '';
/* 000005 */         if (s.startswith (['+', '-'])) {
/* 000005 */             sign = s [0];
/* 000005 */             s = s.substr (1);
/* 000005 */         }
/* 000005 */         if (alternate && s.startswith (['0b', '0o', '0x'])) {
/* 000005 */             alt = s.slice (0, 2);
/* 000005 */             s = s.substr (2);
/* 000005 */         }
/* 000005 */         var len = s.length + sign.length + alt.length;
/* 000005 */         var c = width - len;
/* 000005 */         switch (align) {
/* 000005 */             case '=':
/* 000005 */                 return sign + alt + __mul__ (fill, c) + s;
/* 000005 */             case '>':
/* 000005 */                 return __mul__ (fill, c) + sign + alt + s;
/* 000005 */             case '<':
/* 000005 */                 return sign + alt + s + __mul__ (fill, c);
/* 000005 */             case '^':
/* 000005 */                 var m = ((c % 2) + 2) % 2;
/* 000005 */                 var c = Math.floor (c / 2);
/* 000005 */                 return __mul__ (fill, c) + sign + alt + s + __mul__ (fill, c + m);
/* 000005 */             default:
/* 000005 */                 throw ValueError ("Invalid align type: '" + align + "'", new Error ());
/* 000005 */         }
/* 000005 */     };
/* 000005 */     function format_float (val) {
/* 000005 */         if (val.indexOf ('e+') == -1 && (ftype == 'g' || ftype == 'G')) {
/* 000005 */             var parts = val.py_split ('.');
/* 000005 */             var d = parts [0];
/* 000005 */             var t = parts [1];
/* 000005 */             while (t [t.length - 1] == '0') {
/* 000005 */                 t = t.slice (0, -1);
/* 000005 */             }
/* 000005 */             val = t != '' ? '.'.join ([d, t]) : d;
/* 000005 */         }
/* 000005 */         if (alternate && val.indexOf ('.') == -1) {
/* 000005 */             val = val + '.';
/* 000005 */         }
/* 000005 */         return val;
/* 000005 */     };
/* 000005 */     if (fmt_spec.endswith (['b', 'c', 'd', 'e', 'E', 'f', 'F', 'g', 'G', 'n', 'o', 'x', 'X', '%'])) {
/* 000005 */         ftype = fmt_spec [fmt_spec.length - 1];
/* 000005 */         fmt_spec = fmt_spec.slice (0, -1);
/* 000005 */         if (ftype == 'n') {
/* 000005 */             ftype = Number.isInteger (val) ? 'd' : 'f';
/* 000005 */         }
/* 000005 */     }
/* 000005 */     else {
/* 000005 */         ftype = Number.isInteger (val) ? 'd' : 'g';
/* 000005 */         g_default = true;
/* 000005 */     }
/* 000005 */     var parts = fmt_spec.split ('.');
/* 000005 */     fmt_spec = parts [0];
/* 000005 */     precision = parts [1];
/* 000005 */     if (precision != undefined) {
/* 000005 */         precision = parseInt (precision);
/* 000005 */     }
/* 000005 */     if (fmt_spec.length > 0 && fmt_spec [fmt_spec.length - 1] == ',') {
/* 000005 */         thousand_sep = true;
/* 000005 */         fmt_spec = fmt_spec.slice (0, -1);
/* 000005 */     }
/* 000005 */     if (fmt_spec.length > 0) {
/* 000005 */         var _width = '';
/* 000005 */         while (fmt_spec && fmt_spec [fmt_spec.length - 1].isnumeric ()) {
/* 000005 */             _width = fmt_spec [fmt_spec.length - 1] + _width;
/* 000005 */             fmt_spec = fmt_spec.slice (0, -1);
/* 000005 */         }
/* 000005 */         if (_width.length > 0) {
/* 000005 */             if (_width [0] == '0') {
/* 000005 */                 width = parseInt (_width.substr (1));
/* 000005 */                 zero = true;
/* 000005 */             }
/* 000005 */             else {
/* 000005 */                 width = parseInt (_width);
/* 000005 */             }
/* 000005 */         }
/* 000005 */         if (fmt_spec.length > 0 && fmt_spec [fmt_spec.length - 1] == '#') {
/* 000005 */             alternate = true;
/* 000005 */             fmt_spec = fmt_spec.slice (0, -1);
/* 000005 */         }
/* 000005 */         if (fmt_spec.length > 0 && fmt_spec.endswith (['+', '-', ' '])) {
/* 000005 */             sign = fmt_spec [fmt_spec.length - 1];
/* 000005 */             fmt_spec = fmt_spec.slice (0, -1);
/* 000005 */         }
/* 000005 */         if (fmt_spec.length > 0 && fmt_spec.endswith (['<', '>', '=', '^'])) {
/* 000005 */             align = fmt_spec [fmt_spec.length - 1];
/* 000005 */             fmt_spec = fmt_spec.slice (0, -1);
/* 000005 */         }
/* 000005 */         if (fmt_spec.length > 0) {
/* 000005 */             fill = fmt_spec [0];
/* 000005 */         }
/* 000005 */     }
/* 000005 */     if (isNaN (val)) {
/* 000005 */         val = 'nan';
/* 000005 */     }
/* 000005 */     else if (val == Infinity) {
/* 000005 */         val = 'inf';
/* 000005 */     }
/* 000005 */     else {
/* 000005 */         switch (ftype) {
/* 000005 */             case 'b':
/* 000005 */                 val = Math.floor (val).toString (2);
/* 000005 */                 if (alternate) {
/* 000005 */                     val = '0b' + val;
/* 000005 */                 }
/* 000005 */                 break;
/* 000005 */             case 'c':
/* 000005 */                 val = String.fromCharCode (Math.floor (val));
/* 000005 */                 break;
/* 000005 */             case 'd':
/* 000005 */                 val = Math.floor (val).toString ();
/* 000005 */                 if (thousand_sep) {
/* 000005 */                     val = val.replace (/\B(?=(\d{3})+(?!\d))/g, ',');
/* 000005 */                 }
/* 000005 */                 break;
/* 000005 */             case 'o':
/* 000005 */                 val = Math.floor (val).toString (8);
/* 000005 */                 if (alternate) {
/* 000005 */                     val = '0o' + val;
/* 000005 */                 }
/* 000005 */                 break;
/* 000005 */             case 'x':
/* 000005 */             case 'X':
/* 000005 */                 val = Math.floor (val).toString (16);
/* 000005 */                 if (alternate) {
/* 000005 */                     val = '0x' + val;
/* 000005 */                 }
/* 000005 */                 break;
/* 000005 */             case 'e':
/* 000005 */             case 'E':
/* 000005 */                 if (precision == undefined) {
/* 000005 */                     precision = 6;
/* 000005 */                 }
/* 000005 */                 var num_exp = val.toExponential (precision).split ('e+');
/* 000005 */                 var num = num_exp [0];
/* 000005 */                 var exp = num_exp [1];
/* 000005 */                 val = num.toString () + 'e+' + pad (exp.toString(), 2, '0');
/* 000005 */                 val = format_float (val);
/* 000005 */                 break;
/* 000005 */             case 'f':
/* 000005 */             case 'F':
/* 000005 */             case '%':
/* 000005 */                 if (precision == undefined) {
/* 000005 */                     precision = 6;
/* 000005 */                 }
/* 000005 */                 if (ftype == '%') {
/* 000005 */                     val *= 100;
/* 000005 */                 }
/* 000005 */                 val = val.toFixed (precision);
/* 000005 */                 val = format_float (val);
/* 000005 */                 if (ftype == '%') {
/* 000005 */                     val += '%';
/* 000005 */                 }
/* 000005 */                 break;
/* 000005 */             case 'g':
/* 000005 */             case 'G':
/* 000005 */                 if (precision == undefined) {
/* 000005 */                     precision = g_default ? 1 : 6;
/* 000005 */                 }
/* 000005 */                 if (precision == 0) {
/* 000005 */                     precision = 1;
/* 000005 */                 }
/* 000005 */                 var convert_to_exponent = false;
/* 000005 */                 if (g_default) {
/* 000005 */                     var parts = val.toString ().split ('.');
/* 000005 */                     var digit_count = parts [0].length + parts [1].length;
/* 000005 */                     if (digit_count >= precision) {
/* 000005 */                         convert_to_exponent = true;
/* 000005 */                     }
/* 000005 */                 }
/* 000005 */                 var num_exp = val.toExponential (precision - 1).split ('e+');
/* 000005 */                 var num = num_exp [0];
/* 000005 */                 var exp = num_exp [1];
/* 000005 */                 convert_to_exponent |= !((-4 <= exp && exp < precision));
/* 000005 */                 if (convert_to_exponent) {
/* 000005 */                     val = num.toString() + 'e+' + pad (exp.toString(), 2, '0');
/* 000005 */                 }
/* 000005 */                 else {
/* 000005 */                     val = val.toFixed (precision - 1 - exp);
/* 000005 */                 }
/* 000005 */                 val = format_float (val);
/* 000005 */                 break;
/* 000005 */             default:
/* 000005 */                 throw ValueError ("Invalid format type: '" + ftype + "'", new Error ());
/* 000005 */         }
/* 000005 */     }
/* 000005 */     if (ftype === ftype.toUpperCase ()) {
/* 000005 */         val = val.toUpperCase ()
/* 000005 */     }
/* 000005 */     if (ftype != 'c') {
/* 000005 */         if (sign == '-') {
/* 000005 */             if (is_negative) {
/* 000005 */                 val = '-' + val;
/* 000005 */             }
/* 000005 */         }
/* 000005 */         else {
/* 000005 */             val = is_negative ? '-' + val : sign + val;
/* 000005 */         }
/* 000005 */     }
/* 000005 */     if (zero) {
/* 000005 */         fill = '0';
/* 000005 */         align = '=';
/* 000005 */     }
/* 000005 */     if (width > 0) {
/* 000005 */         val = pad (val, width, fill, align);
/* 000005 */     }
/* 000005 */     return val;
/* 000005 */ };
/* 000005 */ export function bool (any) {
/* 000005 */     return !!__t__ (any);
/* 000005 */ };
/* 000005 */ bool.__name__ = 'bool';
/* 000005 */ bool.__bases__ = [int];
/* 000005 */ export function py_typeof (anObject) {
/* 000005 */     var aType = typeof anObject;
/* 000005 */     if (aType == 'object') {
/* 000005 */         try {
/* 000005 */             return '__class__' in anObject ? anObject.__class__ : object;
/* 000005 */         }
/* 000005 */         catch (exception) {
/* 000005 */             return aType;
/* 000005 */         }
/* 000005 */     }
/* 000005 */     else {
/* 000005 */         return (
/* 000005 */             aType == 'boolean' ? bool :
/* 000005 */             aType == 'string' ? str :
/* 000005 */             aType == 'number' ? (anObject % 1 == 0 ? int : float) :
/* 000005 */             null
/* 000005 */         );
/* 000005 */     }
/* 000005 */ };
/* 000005 */ export function issubclass (aClass, classinfo) {
/* 000005 */     if (classinfo instanceof Array) {
/* 000005 */         for (let aClass2 of classinfo) {
/* 000005 */             if (issubclass (aClass, aClass2)) {
/* 000005 */                 return true;
/* 000005 */             }
/* 000005 */         }
/* 000005 */         return false;
/* 000005 */     }
/* 000005 */     try {
/* 000005 */         var aClass2 = aClass;
/* 000005 */         if (aClass2 == classinfo) {
/* 000005 */             return true;
/* 000005 */         }
/* 000005 */         else {
/* 000005 */             var bases = [].slice.call (aClass2.__bases__);
/* 000005 */             while (bases.length) {
/* 000005 */                 aClass2 = bases.shift ();
/* 000005 */                 if (aClass2 == classinfo) {
/* 000005 */                     return true;
/* 000005 */                 }
/* 000005 */                 if (aClass2.__bases__.length) {
/* 000005 */                     bases = [].slice.call (aClass2.__bases__).concat (bases);
/* 000005 */                 }
/* 000005 */             }
/* 000005 */             return false;
/* 000005 */         }
/* 000005 */     }
/* 000005 */     catch (exception) {
/* 000005 */         return aClass == classinfo || classinfo == object;
/* 000005 */     }
/* 000005 */ };
/* 000005 */ export function isinstance (anObject, classinfo) {
/* 000005 */     try {
/* 000005 */         return '__class__' in anObject ? issubclass (anObject.__class__, classinfo) : issubclass (py_typeof (anObject), classinfo);
/* 000005 */     }
/* 000005 */     catch (exception) {
/* 000005 */         return issubclass (py_typeof (anObject), classinfo);
/* 000005 */     }
/* 000005 */ };
/* 000005 */ export function callable (anObject) {
/* 000005 */     return anObject && typeof anObject == 'object' && '__call__' in anObject ? true : typeof anObject === 'function';
/* 000005 */ };
/* 000005 */ export function repr (anObject) {
/* 000005 */     try {
/* 000005 */         return anObject.__repr__ ();
/* 000005 */     }
/* 000005 */     catch (exception) {
/* 000005 */         try {
/* 000005 */             return anObject.__str__ ();
/* 000005 */         }
/* 000005 */         catch (exception) {
/* 000005 */             try {
/* 000005 */                 if (anObject == null) {
/* 000005 */                     return 'None';
/* 000005 */                 }
/* 000005 */                 else if (anObject.constructor == Object) {
/* 000005 */                     var result = '{';
/* 000005 */                     var comma = false;
/* 000005 */                     for (var attrib in anObject) {
/* 000005 */                         if (!__specialattrib__ (attrib)) {
/* 000005 */                             if (attrib.isnumeric ()) {
/* 000005 */                                 var attribRepr = attrib;
/* 000005 */                             }
/* 000005 */                             else {
/* 000005 */                                 var attribRepr = '\'' + attrib + '\'';
/* 000005 */                             }
/* 000005 */                             if (comma) {
/* 000005 */                                 result += ', ';
/* 000005 */                             }
/* 000005 */                             else {
/* 000005 */                                 comma = true;
/* 000005 */                             }
/* 000005 */                             result += attribRepr + ': ' + repr (anObject [attrib]);
/* 000005 */                         }
/* 000005 */                     }
/* 000005 */                     result += '}';
/* 000005 */                     return result;
/* 000005 */                 }
/* 000005 */                 else {
/* 000005 */                     return typeof anObject == 'boolean' ? anObject.toString () .capitalize () : anObject.toString ();
/* 000005 */                 }
/* 000005 */             }
/* 000005 */             catch (exception) {
/* 000005 */                 return '<object of type: ' + typeof anObject + '>';
/* 000005 */             }
/* 000005 */         }
/* 000005 */     }
/* 000005 */ };
/* 000005 */ export function chr (charCode) {
/* 000005 */     return String.fromCharCode (charCode);
/* 000005 */ };
/* 000005 */ export function ord (aChar) {
/* 000005 */     return aChar.charCodeAt (0);
/* 000005 */ };
/* 000005 */ export function max (nrOrSeq) {
/* 000005 */     return arguments.length == 1 ? Math.max (...nrOrSeq) : Math.max (...arguments);
/* 000005 */ };
/* 000005 */ export function min (nrOrSeq) {
/* 000005 */     return arguments.length == 1 ? Math.min (...nrOrSeq) : Math.min (...arguments);
/* 000005 */ };
/* 000005 */ export var abs = Math.abs;
/* 000005 */ export function round (number, ndigits) {
/* 000005 */     if (ndigits) {
/* 000005 */         var scale = Math.pow (10, ndigits);
/* 000005 */         number *= scale;
/* 000005 */     }
/* 000005 */     var rounded = Math.round (number);
/* 000005 */     if (rounded - number == 0.5 && rounded % 2) {
/* 000005 */         rounded -= 1;
/* 000005 */     }
/* 000005 */     if (ndigits) {
/* 000005 */         rounded /= scale;
/* 000005 */     }
/* 000005 */     return rounded;
/* 000005 */ };
/* 000005 */ export function format (value, fmt_spec) {
/* 000005 */     if (value == undefined) {
/* 000005 */         return 'None';
/* 000005 */     }
/* 000005 */     fmt_spec = fmt_spec || '';
/* 000005 */     var tval = typeof value;
/* 000005 */     switch (tval) {
/* 000005 */         case 'number':
/* 000005 */         case 'string':
/* 000005 */             return value.__format__(fmt_spec);
/* 000005 */         case 'boolean':
/* 000005 */             return fmt_spec ? (value ? 1 : 0).__format__(fmt_spec) : str (value);
/* 000005 */         case 'object':
/* 000005 */             if ('__format__' in value) {
/* 000005 */                 return value.__format__ (fmt_spec);
/* 000005 */             }
/* 000005 */             else {
/* 000005 */                 return str (value).__format__ (fmt_spec);
/* 000005 */             }
/* 000005 */         default:
/* 000005 */             return str (value).__format__ (fmt_spec);
/* 000005 */     }
/* 000005 */ }
/* 000005 */ export function __jsUsePyNext__ () {
/* 000005 */     try {
/* 000005 */         var result = this.__next__ ();
/* 000005 */         return {value: result, done: false};
/* 000005 */     }
/* 000005 */     catch (exception) {
/* 000005 */         return {value: undefined, done: true};
/* 000005 */     }
/* 000005 */ }
/* 000005 */ export function __pyUseJsNext__ () {
/* 000005 */     var result = this.next ();
/* 000005 */     if (result.done) {
/* 000005 */         throw StopIteration (new Error ());
/* 000005 */     }
/* 000005 */     else {
/* 000005 */         return result.value;
/* 000005 */     }
/* 000005 */ }
/* 000005 */ export function py_iter (iterable) {
/* 000005 */     if (typeof iterable == 'string' || '__iter__' in iterable) {
/* 000005 */         var result = iterable.__iter__ ();
/* 000005 */         result.next = __jsUsePyNext__;
/* 000005 */     }
/* 000005 */     else if ('selector' in iterable) {
/* 000005 */         var result = list (iterable) .__iter__ ();
/* 000005 */         result.next = __jsUsePyNext__;
/* 000005 */     }
/* 000005 */     else if ('next' in iterable) {
/* 000005 */         var result = iterable
/* 000005 */         if (! ('__next__' in result)) {
/* 000005 */             result.__next__ = __pyUseJsNext__;
/* 000005 */         }
/* 000005 */     }
/* 000005 */     else if (Symbol.iterator in iterable) {
/* 000005 */         var result = iterable [Symbol.iterator] ();
/* 000005 */         result.__next__ = __pyUseJsNext__;
/* 000005 */     }
/* 000005 */     else {
/* 000005 */         throw IterableError (new Error ());
/* 000005 */     }
/* 000005 */     result [Symbol.iterator] = function () {return result;};
/* 000005 */     return result;
/* 000005 */ }
/* 000005 */ export function py_next (iterator) {
/* 000005 */     try {
/* 000005 */         var result = iterator.__next__ ();
/* 000005 */     }
/* 000005 */     catch (exception) {
/* 000005 */         var result = iterator.next ();
/* 000005 */         if (result.done) {
/* 000005 */             throw StopIteration (new Error ());
/* 000005 */         }
/* 000005 */         else {
/* 000005 */             return result.value;
/* 000005 */         }
/* 000005 */     }
/* 000005 */     if (result == undefined) {
/* 000005 */         throw StopIteration (new Error ());
/* 000005 */     }
/* 000005 */     else {
/* 000005 */         return result;
/* 000005 */     }
/* 000005 */ }
/* 000005 */ export function __PyIterator__ (iterable) {
/* 000005 */     this.iterable = iterable;
/* 000005 */     this.index = 0;
/* 000005 */ }
/* 000005 */ __PyIterator__.prototype.__next__ = function() {
/* 000005 */     if (this.index < this.iterable.length) {
/* 000005 */         return this.iterable [this.index++];
/* 000005 */     }
/* 000005 */     else {
/* 000005 */         throw StopIteration (new Error ());
/* 000005 */     }
/* 000005 */ };
/* 000005 */ export function __JsIterator__ (iterable) {
/* 000005 */     this.iterable = iterable;
/* 000005 */     this.index = 0;
/* 000005 */ }
/* 000005 */ __JsIterator__.prototype.next = function () {
/* 000005 */     if (this.index < this.iterable.py_keys.length) {
/* 000005 */         return {value: this.index++, done: false};
/* 000005 */     }
/* 000005 */     else {
/* 000005 */         return {value: undefined, done: true};
/* 000005 */     }
/* 000005 */ };
/* 000005 */ export function py_reversed (iterable) {
/* 000005 */     iterable = iterable.slice ();
/* 000005 */     iterable.reverse ();
/* 000005 */     return iterable;
/* 000005 */ };
/* 000005 */ export function zip () {
/* 000005 */     var args = [] .slice.call (arguments);
/* 000005 */     for (var i = 0; i < args.length; i++) {
/* 000005 */         if (typeof args [i] == 'string') {
/* 000005 */             args [i] = args [i] .split ('');
/* 000005 */         }
/* 000005 */         else if (!Array.isArray (args [i])) {
/* 000005 */             args [i] = Array.from (args [i]);
/* 000005 */         }
/* 000005 */     }
/* 000005 */     var shortest = args.length == 0 ? [] : args.reduce (
/* 000005 */         function (array0, array1) {
/* 000005 */             return array0.length < array1.length ? array0 : array1;
/* 000005 */         }
/* 000005 */     );
/* 000005 */     return shortest.map (
/* 000005 */         function (current, index) {
/* 000005 */             return args.map (
/* 000005 */                 function (current) {
/* 000005 */                     return current [index];
/* 000005 */                 }
/* 000005 */             );
/* 000005 */         }
/* 000005 */     );
/* 000005 */ };
/* 000005 */ export function range (start, stop, step) {
/* 000005 */     if (stop == undefined) {
/* 000005 */         stop = start;
/* 000005 */         start = 0;
/* 000005 */     }
/* 000005 */     if (step == undefined) {
/* 000005 */         step = 1;
/* 000005 */     }
/* 000005 */     if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
/* 000005 */         return [];
/* 000005 */     }
/* 000005 */     var result = [];
/* 000005 */     for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
/* 000005 */         result.push(i);
/* 000005 */     }
/* 000005 */     return result;
/* 000005 */ };
/* 000005 */ export function any (iterable) {
/* 000005 */     for (let item of iterable) {
/* 000005 */         if (bool (item)) {
/* 000005 */             return true;
/* 000005 */         }
/* 000005 */     }
/* 000005 */     return false;
/* 000005 */ }
/* 000005 */ export function all (iterable) {
/* 000005 */     for (let item of iterable) {
/* 000005 */         if (! bool (item)) {
/* 000005 */             return false;
/* 000005 */         }
/* 000005 */     }
/* 000005 */     return true;
/* 000005 */ }
/* 000005 */ export function sum (iterable) {
/* 000005 */     let result = 0;
/* 000005 */     for (let item of iterable) {
/* 000005 */         result += item;
/* 000005 */     }
/* 000005 */     return result;
/* 000005 */ }
/* 000005 */ export function enumerate (iterable) {
/* 000005 */     return zip (range (len (iterable)), iterable);
/* 000005 */ }
/* 000005 */ export function copy (anObject) {
/* 000005 */     if (anObject == null || typeof anObject == "object") {
/* 000005 */         return anObject;
/* 000005 */     }
/* 000005 */     else {
/* 000005 */         var result = {};
/* 000005 */         for (var attrib in obj) {
/* 000005 */             if (anObject.hasOwnProperty (attrib)) {
/* 000005 */                 result [attrib] = anObject [attrib];
/* 000005 */             }
/* 000005 */         }
/* 000005 */         return result;
/* 000005 */     }
/* 000005 */ }
/* 000005 */ export function deepcopy (anObject) {
/* 000005 */     if (anObject == null || typeof anObject == "object") {
/* 000005 */         return anObject;
/* 000005 */     }
/* 000005 */     else {
/* 000005 */         var result = {};
/* 000005 */         for (var attrib in obj) {
/* 000005 */             if (anObject.hasOwnProperty (attrib)) {
/* 000005 */                 result [attrib] = deepcopy (anObject [attrib]);
/* 000005 */             }
/* 000005 */         }
/* 000005 */         return result;
/* 000005 */     }
/* 000005 */ }
/* 000005 */ export function list (iterable) {
/* 000005 */     let instance = iterable ? Array.from (iterable) : [];
/* 000005 */     return instance;
/* 000005 */ }
/* 000005 */ Array.prototype.__class__ = list;
/* 000005 */ list.__name__ = 'list';
/* 000005 */ list.__bases__ = [object];
/* 000005 */ Array.prototype.__iter__ = function () {return new __PyIterator__ (this);};
/* 000005 */ Array.prototype.__getslice__ = function (start, stop, step) {
/* 000005 */     if (start < 0) {
/* 000005 */         start = this.length + start;
/* 000005 */     }
/* 000005 */     if (stop == null) {
/* 000005 */         stop = this.length;
/* 000005 */     }
/* 000005 */     else if (stop < 0) {
/* 000005 */         stop = this.length + stop;
/* 000005 */     }
/* 000005 */     else if (stop > this.length) {
/* 000005 */         stop = this.length;
/* 000005 */     }
/* 000005 */     if (step == 1) {
/* 000005 */         return Array.prototype.slice.call(this, start, stop);
/* 000005 */     }
/* 000005 */     let result = list ([]);
/* 000005 */     for (let index = start; index < stop; index += step) {
/* 000005 */         result.push (this [index]);
/* 000005 */     }
/* 000005 */     return result;
/* 000005 */ };
/* 000005 */ Array.prototype.__setslice__ = function (start, stop, step, source) {
/* 000005 */     if (start < 0) {
/* 000005 */         start = this.length + start;
/* 000005 */     }
/* 000005 */     if (stop == null) {
/* 000005 */         stop = this.length;
/* 000005 */     }
/* 000005 */     else if (stop < 0) {
/* 000005 */         stop = this.length + stop;
/* 000005 */     }
/* 000005 */     if (step == null) {
/* 000005 */         Array.prototype.splice.apply (this, [start, stop - start] .concat (source));
/* 000005 */     }
/* 000005 */     else {
/* 000005 */         let sourceIndex = 0;
/* 000005 */         for (let targetIndex = start; targetIndex < stop; targetIndex += step) {
/* 000005 */             this [targetIndex] = source [sourceIndex++];
/* 000005 */         }
/* 000005 */     }
/* 000005 */ };
/* 000005 */ Array.prototype.__repr__ = function () {
/* 000005 */     if (this.__class__ == set && !this.length) {
/* 000005 */         return 'set()';
/* 000005 */     }
/* 000005 */     let result = !this.__class__ || this.__class__ == list ? '[' : this.__class__ == tuple ? '(' : '{';
/* 000005 */     for (let index = 0; index < this.length; index++) {
/* 000005 */         if (index) {
/* 000005 */             result += ', ';
/* 000005 */         }
/* 000005 */         result += repr (this [index]);
/* 000005 */     }
/* 000005 */     if (this.__class__ == tuple && this.length == 1) {
/* 000005 */         result += ',';
/* 000005 */     }
/* 000005 */     result += !this.__class__ || this.__class__ == list ? ']' : this.__class__ == tuple ? ')' : '}';;
/* 000005 */     return result;
/* 000005 */ };
/* 000005 */ Array.prototype.__str__ = Array.prototype.__repr__;
/* 000005 */ Array.prototype.append = function (element) {
/* 000005 */     this.push (element);
/* 000005 */ };
/* 000005 */ Array.prototype.py_clear = function () {
/* 000005 */     this.length = 0;
/* 000005 */ };
/* 000005 */ Array.prototype.extend = function (aList) {
/* 000005 */     this.push.apply (this, aList);
/* 000005 */ };
/* 000005 */ Array.prototype.insert = function (index, element) {
/* 000005 */     this.splice (index, 0, element);
/* 000005 */ };
/* 000005 */ Array.prototype.remove = function (element) {
/* 000005 */     let index = this.indexOf (element);
/* 000005 */     if (index == -1) {
/* 000005 */         throw ValueError ("list.remove(x): x not in list", new Error ());
/* 000005 */     }
/* 000005 */     this.splice (index, 1);
/* 000005 */ };
/* 000005 */ Array.prototype.index = function (element) {
/* 000005 */     return this.indexOf (element);
/* 000005 */ };
/* 000005 */ Array.prototype.py_pop = function (index) {
/* 000005 */     if (index == undefined) {
/* 000005 */         return this.pop ();
/* 000005 */     }
/* 000005 */     else {
/* 000005 */         return this.splice (index, 1) [0];
/* 000005 */     }
/* 000005 */ };
/* 000005 */ Array.prototype.py_sort = function () {
/* 000005 */     __sort__.apply  (null, [this].concat ([] .slice.apply (arguments)));
/* 000005 */ };
/* 000005 */ Array.prototype.__add__ = function (aList) {
/* 000005 */     return list (this.concat (aList));
/* 000005 */ };
/* 000005 */ Array.prototype.__mul__ = function (scalar) {
/* 000005 */     let result = this;
/* 000005 */     for (let i = 1; i < scalar; i++) {
/* 000005 */         result = result.concat (this);
/* 000005 */     }
/* 000005 */     return result;
/* 000005 */ };
/* 000005 */ Array.prototype.__rmul__ = Array.prototype.__mul__;
/* 000005 */ export function tuple (iterable) {
/* 000005 */     let instance = iterable ? [] .slice.apply (iterable) : [];
/* 000005 */     instance.__class__ = tuple;
/* 000005 */     return instance;
/* 000005 */ }
/* 000005 */ tuple.__name__ = 'tuple';
/* 000005 */ tuple.__bases__ = [object];
/* 000005 */ export function set (iterable) {
/* 000005 */     let instance = [];
/* 000005 */     if (iterable) {
/* 000005 */         for (let index = 0; index < iterable.length; index++) {
/* 000005 */             instance.add (iterable [index]);
/* 000005 */         }
/* 000005 */     }
/* 000005 */     instance.__class__ = set;
/* 000005 */     return instance;
/* 000005 */ }
/* 000005 */ set.__name__ = 'set';
/* 000005 */ set.__bases__ = [object];
/* 000005 */ Array.prototype.__bindexOf__ = function (element) {
/* 000005 */     element += '';
/* 000005 */     let mindex = 0;
/* 000005 */     let maxdex = this.length - 1;
/* 000005 */     while (mindex <= maxdex) {
/* 000005 */         let index = (mindex + maxdex) / 2 | 0;
/* 000005 */         let middle = this [index] + '';
/* 000005 */         if (middle < element) {
/* 000005 */             mindex = index + 1;
/* 000005 */         }
/* 000005 */         else if (middle > element) {
/* 000005 */             maxdex = index - 1;
/* 000005 */         }
/* 000005 */         else {
/* 000005 */             return index;
/* 000005 */         }
/* 000005 */     }
/* 000005 */     return -1;
/* 000005 */ };
/* 000005 */ Array.prototype.add = function (element) {
/* 000005 */     if (this.indexOf (element) == -1) {
/* 000005 */         this.push (element);
/* 000005 */     }
/* 000005 */ };
/* 000005 */ Array.prototype.discard = function (element) {
/* 000005 */     var index = this.indexOf (element);
/* 000005 */     if (index != -1) {
/* 000005 */         this.splice (index, 1);
/* 000005 */     }
/* 000005 */ };
/* 000005 */ Array.prototype.isdisjoint = function (other) {
/* 000005 */     this.sort ();
/* 000005 */     for (let i = 0; i < other.length; i++) {
/* 000005 */         if (this.__bindexOf__ (other [i]) != -1) {
/* 000005 */             return false;
/* 000005 */         }
/* 000005 */     }
/* 000005 */     return true;
/* 000005 */ };
/* 000005 */ Array.prototype.issuperset = function (other) {
/* 000005 */     this.sort ();
/* 000005 */     for (let i = 0; i < other.length; i++) {
/* 000005 */         if (this.__bindexOf__ (other [i]) == -1) {
/* 000005 */             return false;
/* 000005 */         }
/* 000005 */     }
/* 000005 */     return true;
/* 000005 */ };
/* 000005 */ Array.prototype.issubset = function (other) {
/* 000005 */     return set (other.slice ()) .issuperset (this);
/* 000005 */ };
/* 000005 */ Array.prototype.union = function (other) {
/* 000005 */     let result = set (this.slice () .sort ());
/* 000005 */     for (let i = 0; i < other.length; i++) {
/* 000005 */         if (result.__bindexOf__ (other [i]) == -1) {
/* 000005 */             result.push (other [i]);
/* 000005 */         }
/* 000005 */     }
/* 000005 */     return result;
/* 000005 */ };
/* 000005 */ Array.prototype.intersection = function (other) {
/* 000005 */     this.sort ();
/* 000005 */     let result = set ();
/* 000005 */     for (let i = 0; i < other.length; i++) {
/* 000005 */         if (this.__bindexOf__ (other [i]) != -1) {
/* 000005 */             result.push (other [i]);
/* 000005 */         }
/* 000005 */     }
/* 000005 */     return result;
/* 000005 */ };
/* 000005 */ Array.prototype.difference = function (other) {
/* 000005 */     let sother = set (other.slice () .sort ());
/* 000005 */     let result = set ();
/* 000005 */     for (let i = 0; i < this.length; i++) {
/* 000005 */         if (sother.__bindexOf__ (this [i]) == -1) {
/* 000005 */             result.push (this [i]);
/* 000005 */         }
/* 000005 */     }
/* 000005 */     return result;
/* 000005 */ };
/* 000005 */ Array.prototype.symmetric_difference = function (other) {
/* 000005 */     return this.union (other) .difference (this.intersection (other));
/* 000005 */ };
/* 000005 */ Array.prototype.py_update = function () {
/* 000005 */     let updated = [] .concat.apply (this.slice (), arguments) .sort ();
/* 000005 */     this.py_clear ();
/* 000005 */     for (let i = 0; i < updated.length; i++) {
/* 000005 */         if (updated [i] != updated [i - 1]) {
/* 000005 */             this.push (updated [i]);
/* 000005 */         }
/* 000005 */     }
/* 000005 */ };
/* 000005 */ Array.prototype.__eq__ = function (other) {
/* 000005 */     if (this.length != other.length) {
/* 000005 */         return false;
/* 000005 */     }
/* 000005 */     if (this.__class__ == set) {
/* 000005 */         this.sort ();
/* 000005 */         other.sort ();
/* 000005 */     }
/* 000005 */     for (let i = 0; i < this.length; i++) {
/* 000005 */         if (this [i] != other [i]) {
/* 000005 */             return false;
/* 000005 */         }
/* 000005 */     }
/* 000005 */     return true;
/* 000005 */ };
/* 000005 */ Array.prototype.__ne__ = function (other) {
/* 000005 */     return !this.__eq__ (other);
/* 000005 */ };
/* 000005 */ Array.prototype.__le__ = function (other) {
/* 000005 */     if (this.__class__ == set) {
/* 000005 */         return this.issubset (other);
/* 000005 */     }
/* 000005 */     else {
/* 000005 */         for (let i = 0; i < this.length; i++) {
/* 000005 */             if (this [i] > other [i]) {
/* 000005 */                 return false;
/* 000005 */             }
/* 000005 */             else if (this [i] < other [i]) {
/* 000005 */                 return true;
/* 000005 */             }
/* 000005 */         }
/* 000005 */         return true;
/* 000005 */     }
/* 000005 */ };
/* 000005 */ Array.prototype.__ge__ = function (other) {
/* 000005 */     if (this.__class__ == set) {
/* 000005 */         return this.issuperset (other);
/* 000005 */     }
/* 000005 */     else {
/* 000005 */         for (let i = 0; i < this.length; i++) {
/* 000005 */             if (this [i] < other [i]) {
/* 000005 */                 return false;
/* 000005 */             }
/* 000005 */             else if (this [i] > other [i]) {
/* 000005 */                 return true;
/* 000005 */             }
/* 000005 */         }
/* 000005 */         return true;
/* 000005 */     }
/* 000005 */ };
/* 000005 */ Array.prototype.__lt__ = function (other) {
/* 000005 */     return (
/* 000005 */         this.__class__ == set ?
/* 000005 */         this.issubset (other) && !this.issuperset (other) :
/* 000005 */         !this.__ge__ (other)
/* 000005 */     );
/* 000005 */ };
/* 000005 */ Array.prototype.__gt__ = function (other) {
/* 000005 */     return (
/* 000005 */         this.__class__ == set ?
/* 000005 */         this.issuperset (other) && !this.issubset (other) :
/* 000005 */         !this.__le__ (other)
/* 000005 */     );
/* 000005 */ };
/* 000005 */ export function bytearray (bytable, encoding) {
/* 000005 */     if (bytable == undefined) {
/* 000005 */         return new Uint8Array (0);
/* 000005 */     }
/* 000005 */     else {
/* 000005 */         let aType = py_typeof (bytable);
/* 000005 */         if (aType == int) {
/* 000005 */             return new Uint8Array (bytable);
/* 000005 */         }
/* 000005 */         else if (aType == str) {
/* 000005 */             let aBytes = new Uint8Array (len (bytable));
/* 000005 */             for (let i = 0; i < len (bytable); i++) {
/* 000005 */                 aBytes [i] = bytable.charCodeAt (i);
/* 000005 */             }
/* 000005 */             return aBytes;
/* 000005 */         }
/* 000005 */         else if (aType == list || aType == tuple) {
/* 000005 */             return new Uint8Array (bytable);
/* 000005 */         }
/* 000005 */         else {
/* 000005 */             throw py_TypeError;
/* 000005 */         }
/* 000005 */     }
/* 000005 */ }
/* 000005 */ export var bytes = bytearray;
/* 000005 */ Uint8Array.prototype.__add__ = function (aBytes) {
/* 000005 */     let result = new Uint8Array (this.length + aBytes.length);
/* 000005 */     result.set (this);
/* 000005 */     result.set (aBytes, this.length);
/* 000005 */     return result;
/* 000005 */ };
/* 000005 */ Uint8Array.prototype.__mul__ = function (scalar) {
/* 000005 */     let result = new Uint8Array (scalar * this.length);
/* 000005 */     for (let i = 0; i < scalar; i++) {
/* 000005 */         result.set (this, i * this.length);
/* 000005 */     }
/* 000005 */     return result;
/* 000005 */ };
/* 000005 */ Uint8Array.prototype.__rmul__ = Uint8Array.prototype.__mul__;
/* 000005 */ export function str (stringable) {
/* 000005 */     if (typeof stringable === 'number')
/* 000005 */         return stringable.toString();
/* 000005 */     else {
/* 000005 */         try {
/* 000005 */             return stringable.__str__ ();
/* 000005 */         }
/* 000005 */         catch (exception) {
/* 000005 */             try {
/* 000005 */                 return repr (stringable);
/* 000005 */             }
/* 000005 */             catch (exception) {
/* 000005 */                 return String (stringable);
/* 000005 */             }
/* 000005 */         }
/* 000005 */     }
/* 000005 */ };
/* 000005 */ String.prototype.__class__ = str;
/* 000005 */ str.__name__ = 'str';
/* 000005 */ str.__bases__ = [object];
/* 000005 */ String.prototype.__iter__ = function () {new __PyIterator__ (this);};
/* 000005 */ String.prototype.__repr__ = function () {
/* 000005 */     return (this.indexOf ('\'') == -1 ? '\'' + this + '\'' : '"' + this + '"') .py_replace ('\t', '\\t') .py_replace ('\n', '\\n');
/* 000005 */ };
/* 000005 */ String.prototype.__str__ = function () {
/* 000005 */     return this;
/* 000005 */ };
/* 000005 */ String.prototype.capitalize = function () {
/* 000005 */     return this.charAt (0).toUpperCase () + this.slice (1);
/* 000005 */ };
/* 000005 */ String.prototype.endswith = function (suffix) {
/* 000005 */     if (suffix instanceof Array) {
/* 000005 */         for (var i=0;i<suffix.length;i++) {
/* 000005 */             if (this.slice (-suffix[i].length) == suffix[i])
/* 000005 */                 return true;
/* 000005 */         }
/* 000005 */     } else
/* 000005 */         return suffix == '' || this.slice (-suffix.length) == suffix;
/* 000005 */     return false;
/* 000005 */ };
/* 000005 */ String.prototype.find = function (sub, start) {
/* 000005 */     return this.indexOf (sub, start);
/* 000005 */ };
/* 000005 */ String.prototype.__getslice__ = function (start, stop, step) {
/* 000005 */     if (start < 0) {
/* 000005 */         start = this.length + start;
/* 000005 */     }
/* 000005 */     if (stop == null) {
/* 000005 */         stop = this.length;
/* 000005 */     }
/* 000005 */     else if (stop < 0) {
/* 000005 */         stop = this.length + stop;
/* 000005 */     }
/* 000005 */     var result = '';
/* 000005 */     if (step == 1) {
/* 000005 */         result = this.substring (start, stop);
/* 000005 */     }
/* 000005 */     else {
/* 000005 */         for (var index = start; index < stop; index += step) {
/* 000005 */             result = result.concat (this.charAt(index));
/* 000005 */         }
/* 000005 */     }
/* 000005 */     return result;
/* 000005 */ };
/* 000005 */ String.prototype.__format__ = function (fmt_spec) {
/* 000005 */     if (fmt_spec == undefined || fmt_spec.strip ().length == 0) {
/* 000005 */         return this.valueOf ();
/* 000005 */     }
/* 000005 */     var width = 0;
/* 000005 */     var align = '<';
/* 000005 */     var fill = ' ';
/* 000005 */     var val = this.valueOf ();
/* 000005 */     function pad (s, width, fill, align) {
/* 000005 */         var len = s.length;
/* 000005 */         var c = width - len;
/* 000005 */         switch (align) {
/* 000005 */             case '>':
/* 000005 */                 return __mul__ (fill, c) + s;
/* 000005 */             case '<':
/* 000005 */                 return s + __mul__ (fill, c);
/* 000005 */             case '^':
/* 000005 */                 var m = ((c % 2) + 2) % 2;
/* 000005 */                 var c = Math.floor (c / 2);
/* 000005 */                 return __mul__ (fill, c) + s + __mul__ (fill, c + m);
/* 000005 */             default:
/* 000005 */                 return s;
/* 000005 */         }
/* 000005 */     };
/* 000005 */     if (fmt_spec [fmt_spec.length - 1] == 's') {
/* 000005 */         fmt_spec = fmt_spec.slice (0, -1);
/* 000005 */     }
/* 000005 */     if (fmt_spec.length > 0) {
/* 000005 */         var _width = '';
/* 000005 */         while (fmt_spec && fmt_spec [fmt_spec.length - 1].isnumeric ()) {
/* 000005 */             _width = fmt_spec [fmt_spec.length - 1] + _width;
/* 000005 */             fmt_spec = fmt_spec.slice (0, -1);
/* 000005 */         }
/* 000005 */         if (_width.length > 0) {
/* 000005 */             width = parseInt (_width);
/* 000005 */         }
/* 000005 */         if (fmt_spec.length > 0 && fmt_spec.endswith (['<', '>', '^'])) {
/* 000005 */             align = fmt_spec [fmt_spec.length - 1];
/* 000005 */             fmt_spec = fmt_spec.slice (0, -1);
/* 000005 */         }
/* 000005 */         if (fmt_spec.length > 0) {
/* 000005 */             fill = fmt_spec [0];
/* 000005 */         }
/* 000005 */     }
/* 000005 */     if (width > 0) {
/* 000005 */         val = pad (val, width, fill, align);
/* 000005 */     }
/* 000005 */     return val;
/* 000005 */ };
/* 000005 */ __setproperty__ (String.prototype, 'format', {
/* 000005 */     get: function () {return __get__ (this, function (self) {
/* 000005 */         var args = tuple ([] .slice.apply (arguments).slice (1));
/* 000005 */         var autoIndex = 0;
/* 000005 */         return self.replace (/\{([^\{]*)\}/g, function (match, key) {
/* 000005 */             var parts = key.split (':');
/* 000005 */             key = parts [0];
/* 000005 */             var fmt_spec = parts [1];
/* 000005 */             parts = key.split ('!')
/* 000005 */             key = parts [0];
/* 000005 */             var conversion = parts [1];
/* 000005 */             var value = undefined;
/* 000005 */             if (key == '') {
/* 000005 */                 key = autoIndex++;
/* 000005 */             }
/* 000005 */             if (key == +key && args [key] !== undefined) {
/* 000005 */                 value = args [key];
/* 000005 */             }
/* 000005 */             else {
/* 000005 */                 var attr = undefined;
/* 000005 */                 var idx = ("" + key) .indexOf ('.');
/* 000005 */                 if (idx != -1) {
/* 000005 */                     attr = key.substring (idx + 1);
/* 000005 */                     key = key.substring (0, idx);
/* 000005 */                 }
/* 000005 */                 else {
/* 000005 */                     idx = ("" + key) .indexOf ('[');
/* 000005 */                     if (idx != -1) {
/* 000005 */                         attr = key.substring (idx + 1).slice (0, -1);
/* 000005 */                         key = key.substring (0, idx);
/* 000005 */                     }
/* 000005 */                 }
/* 000005 */                 if ((key == +key) && attr && args [key] !== undefined) {
/* 000005 */                     value = args [key][attr];
/* 000005 */                 }
/* 000005 */                 else {
/* 000005 */                     for (var index = 0; index < args.length; index++) {
/* 000005 */                         if (typeof args [index] == 'object' && args [index] != null && args [index][key] !== undefined) {
/* 000005 */                             if (attr) {
/* 000005 */                                 value = args [index][key][attr];
/* 000005 */                             }
/* 000005 */                             else {
/* 000005 */                                 value = args [index][key];
/* 000005 */                             }
/* 000005 */                             break;
/* 000005 */                         }
/* 000005 */                     }
/* 000005 */                 }
/* 000005 */             }
/* 000005 */             if (value === undefined) {
/* 000005 */                 return match;
/* 000005 */             }
/* 000005 */             if (conversion == 'r') {
/* 000005 */                 value = repr (value);
/* 000005 */             }
/* 000005 */             else if (conversion == 's') {
/* 000005 */                 value = str (value);
/* 000005 */             }
/* 000005 */             else if (conversion == 'a') {
/* 000005 */                 throw ValueError ("Conversion to ascii not yet supported: '" + match + "'", new Error ());
/* 000005 */             }
/* 000005 */             return format (value, fmt_spec);
/* 000005 */         });
/* 000005 */     });},
/* 000005 */     enumerable: true
/* 000005 */ });
/* 000005 */ String.prototype.isalnum = function () {
/* 000005 */     return /^[0-9a-zA-Z]{1,}$/.test(this)
/* 000005 */ }
/* 000005 */ String.prototype.isalpha = function () {
/* 000005 */     return /^[a-zA-Z]{1,}$/.test(this)
/* 000005 */ }
/* 000005 */ String.prototype.isdecimal = function () {
/* 000005 */     return /^[0-9]{1,}$/.test(this)
/* 000005 */ }
/* 000005 */ String.prototype.isdigit = function () {
/* 000005 */     return this.isdecimal()
/* 000005 */ }
/* 000005 */ String.prototype.islower = function () {
/* 000005 */     return /^[a-z]{1,}$/.test(this)
/* 000005 */ }
/* 000005 */ String.prototype.isupper = function () {
/* 000005 */     return /^[A-Z]{1,}$/.test(this)
/* 000005 */ }
/* 000005 */ String.prototype.isspace = function () {
/* 000005 */     return /^[\s]{1,}$/.test(this)
/* 000005 */ }
/* 000005 */ String.prototype.isnumeric = function () {
/* 000005 */     return !isNaN (parseFloat (this)) && isFinite (this);
/* 000005 */ };
/* 000005 */ String.prototype.join = function (strings) {
/* 000005 */     strings = Array.from (strings);
/* 000005 */     return strings.join (this);
/* 000005 */ };
/* 000005 */ String.prototype.lower = function () {
/* 000005 */     return this.toLowerCase ();
/* 000005 */ };
/* 000005 */ String.prototype.py_replace = function (old, aNew, maxreplace) {
/* 000005 */     return this.split (old, maxreplace) .join (aNew);
/* 000005 */ };
/* 000005 */ String.prototype.lstrip = function () {
/* 000005 */     return this.replace (/^\s*/g, '');
/* 000005 */ };
/* 000005 */ String.prototype.rfind = function (sub, start) {
/* 000005 */     return this.lastIndexOf (sub, start);
/* 000005 */ };
/* 000005 */ String.prototype.rsplit = function (sep, maxsplit) {
/* 000005 */     if (sep == undefined || sep == null) {
/* 000005 */         sep = /\s+/;
/* 000005 */         var stripped = this.strip ();
/* 000005 */     }
/* 000005 */     else {
/* 000005 */         var stripped = this;
/* 000005 */     }
/* 000005 */     if (maxsplit == undefined || maxsplit == -1) {
/* 000005 */         return stripped.split (sep);
/* 000005 */     }
/* 000005 */     else {
/* 000005 */         var result = stripped.split (sep);
/* 000005 */         if (maxsplit < result.length) {
/* 000005 */             var maxrsplit = result.length - maxsplit;
/* 000005 */             return [result.slice (0, maxrsplit) .join (sep)] .concat (result.slice (maxrsplit));
/* 000005 */         }
/* 000005 */         else {
/* 000005 */             return result;
/* 000005 */         }
/* 000005 */     }
/* 000005 */ };
/* 000005 */ String.prototype.rstrip = function () {
/* 000005 */     return this.replace (/\s*$/g, '');
/* 000005 */ };
/* 000005 */ String.prototype.py_split = function (sep, maxsplit) {
/* 000005 */     if (sep == undefined || sep == null) {
/* 000005 */         sep = /\s+/;
/* 000005 */         var stripped = this.strip ();
/* 000005 */     }
/* 000005 */     else {
/* 000005 */         var stripped = this;
/* 000005 */     }
/* 000005 */     if (maxsplit == undefined || maxsplit == -1) {
/* 000005 */         return stripped.split (sep);
/* 000005 */     }
/* 000005 */     else {
/* 000005 */         var result = stripped.split (sep);
/* 000005 */         if (maxsplit < result.length) {
/* 000005 */             return result.slice (0, maxsplit).concat ([result.slice (maxsplit).join (sep)]);
/* 000005 */         }
/* 000005 */         else {
/* 000005 */             return result;
/* 000005 */         }
/* 000005 */     }
/* 000005 */ };
/* 000005 */ String.prototype.startswith = function (prefix) {
/* 000005 */     if (prefix instanceof Array) {
/* 000005 */         for (var i=0;i<prefix.length;i++) {
/* 000005 */             if (this.indexOf (prefix [i]) == 0)
/* 000005 */                 return true;
/* 000005 */         }
/* 000005 */     } else
/* 000005 */         return this.indexOf (prefix) == 0;
/* 000005 */     return false;
/* 000005 */ };
/* 000005 */ String.prototype.strip = function () {
/* 000005 */     return this.trim ();
/* 000005 */ };
/* 000005 */ String.prototype.upper = function () {
/* 000005 */     return this.toUpperCase ();
/* 000005 */ };
/* 000005 */ String.prototype.__mul__ = function (scalar) {
/* 000005 */     var result = '';
/* 000005 */     for (var i = 0; i < scalar; i++) {
/* 000005 */         result = result + this;
/* 000005 */     }
/* 000005 */     return result;
/* 000005 */ };
/* 000005 */ String.prototype.__rmul__ = String.prototype.__mul__;
/* 000005 */ function __contains__ (element) {
/* 000005 */     return this.hasOwnProperty (element);
/* 000005 */ }
/* 000005 */ function __keys__ () {
/* 000005 */     var keys = [];
/* 000005 */     for (var attrib in this) {
/* 000005 */         if (!__specialattrib__ (attrib)) {
/* 000005 */             keys.push (attrib);
/* 000005 */         }
/* 000005 */     }
/* 000005 */     return keys;
/* 000005 */ }
/* 000005 */ function __items__ () {
/* 000005 */     var items = [];
/* 000005 */     for (var attrib in this) {
/* 000005 */         if (!__specialattrib__ (attrib)) {
/* 000005 */             items.push ([attrib, this [attrib]]);
/* 000005 */         }
/* 000005 */     }
/* 000005 */     return items;
/* 000005 */ }
/* 000005 */ function __del__ (key) {
/* 000005 */     delete this [key];
/* 000005 */ }
/* 000005 */ function __clear__ () {
/* 000005 */     for (var attrib in this) {
/* 000005 */         delete this [attrib];
/* 000005 */     }
/* 000005 */ }
/* 000005 */ function __getdefault__ (aKey, aDefault) {
/* 000005 */     var result = this [aKey];
/* 000005 */     if (result == undefined) {
/* 000005 */         result = this ['py_' + aKey]
/* 000005 */     }
/* 000005 */     return result == undefined ? (aDefault == undefined ? null : aDefault) : result;
/* 000005 */ }
/* 000005 */ function __setdefault__ (aKey, aDefault) {
/* 000005 */     var result = this [aKey];
/* 000005 */     if (result != undefined) {
/* 000005 */         return result;
/* 000005 */     }
/* 000005 */     var val = aDefault == undefined ? null : aDefault;
/* 000005 */     this [aKey] = val;
/* 000005 */     return val;
/* 000005 */ }
/* 000005 */ function __pop__ (aKey, aDefault) {
/* 000005 */     var result = this [aKey];
/* 000005 */     if (result != undefined) {
/* 000005 */         delete this [aKey];
/* 000005 */         return result;
/* 000005 */     } else {
/* 000005 */         if ( aDefault === undefined ) {
/* 000005 */             throw KeyError (aKey, new Error());
/* 000005 */         }
/* 000005 */     }
/* 000005 */     return aDefault;
/* 000005 */ }
/* 000005 */ function __popitem__ () {
/* 000005 */     var aKey = Object.keys (this) [0];
/* 000005 */     if (aKey == null) {
/* 000005 */         throw KeyError ("popitem(): dictionary is empty", new Error ());
/* 000005 */     }
/* 000005 */     var result = tuple ([aKey, this [aKey]]);
/* 000005 */     delete this [aKey];
/* 000005 */     return result;
/* 000005 */ }
/* 000005 */ function __update__ (aDict) {
/* 000005 */     for (var aKey in aDict) {
/* 000005 */         this [aKey] = aDict [aKey];
/* 000005 */     }
/* 000005 */ }
/* 000005 */ function __values__ () {
/* 000005 */     var values = [];
/* 000005 */     for (var attrib in this) {
/* 000005 */         if (!__specialattrib__ (attrib)) {
/* 000005 */             values.push (this [attrib]);
/* 000005 */         }
/* 000005 */     }
/* 000005 */     return values;
/* 000005 */ }
/* 000005 */ function __dgetitem__ (aKey) {
/* 000005 */     return this [aKey];
/* 000005 */ }
/* 000005 */ function __dsetitem__ (aKey, aValue) {
/* 000005 */     this [aKey] = aValue;
/* 000005 */ }
/* 000005 */ export function dict (objectOrPairs) {
/* 000005 */     var instance = {};
/* 000005 */     if (!objectOrPairs || objectOrPairs instanceof Array) {
/* 000005 */         if (objectOrPairs) {
/* 000005 */             for (var index = 0; index < objectOrPairs.length; index++) {
/* 000005 */                 var pair = objectOrPairs [index];
/* 000005 */                 if ( !(pair instanceof Array) || pair.length != 2) {
/* 000005 */                     throw ValueError(
/* 000005 */                         "dict update sequence element #" + index +
/* 000005 */                         " has length " + pair.length +
/* 000005 */                         "; 2 is required", new Error());
/* 000005 */                 }
/* 000005 */                 var key = pair [0];
/* 000005 */                 var val = pair [1];
/* 000005 */                 if (!(objectOrPairs instanceof Array) && objectOrPairs instanceof Object) {
/* 000005 */                      if (!isinstance (objectOrPairs, dict)) {
/* 000005 */                          val = dict (val);
/* 000005 */                      }
/* 000005 */                 }
/* 000005 */                 instance [key] = val;
/* 000005 */             }
/* 000005 */         }
/* 000005 */     }
/* 000005 */     else {
/* 000005 */         if (isinstance (objectOrPairs, dict)) {
/* 000005 */             var aKeys = objectOrPairs.py_keys ();
/* 000005 */             for (var index = 0; index < aKeys.length; index++ ) {
/* 000005 */                 var key = aKeys [index];
/* 000005 */                 instance [key] = objectOrPairs [key];
/* 000005 */             }
/* 000005 */         } else if (objectOrPairs instanceof Object) {
/* 000005 */             instance = objectOrPairs;
/* 000005 */         } else {
/* 000005 */             throw ValueError ("Invalid type of object for dict creation", new Error ());
/* 000005 */         }
/* 000005 */     }
/* 000005 */     __setproperty__ (instance, '__class__', {value: dict, enumerable: false, writable: true});
/* 000005 */     __setproperty__ (instance, '__contains__', {value: __contains__, enumerable: false});
/* 000005 */     __setproperty__ (instance, 'py_keys', {value: __keys__, enumerable: false});
/* 000005 */     __setproperty__ (instance, '__iter__', {value: function () {new __PyIterator__ (this.py_keys ());}, enumerable: false});
/* 000005 */     __setproperty__ (instance, Symbol.iterator, {value: function () {new __JsIterator__ (this.py_keys ());}, enumerable: false});
/* 000005 */     __setproperty__ (instance, 'py_items', {value: __items__, enumerable: false});
/* 000005 */     __setproperty__ (instance, 'py_del', {value: __del__, enumerable: false});
/* 000005 */     __setproperty__ (instance, 'py_clear', {value: __clear__, enumerable: false});
/* 000005 */     __setproperty__ (instance, 'py_get', {value: __getdefault__, enumerable: false});
/* 000005 */     __setproperty__ (instance, 'py_setdefault', {value: __setdefault__, enumerable: false});
/* 000005 */     __setproperty__ (instance, 'py_pop', {value: __pop__, enumerable: false});
/* 000005 */     __setproperty__ (instance, 'py_popitem', {value: __popitem__, enumerable: false});
/* 000005 */     __setproperty__ (instance, 'py_update', {value: __update__, enumerable: false});
/* 000005 */     __setproperty__ (instance, 'py_values', {value: __values__, enumerable: false});
/* 000005 */     __setproperty__ (instance, '__getitem__', {value: __dgetitem__, enumerable: false});
/* 000005 */     __setproperty__ (instance, '__setitem__', {value: __dsetitem__, enumerable: false});
/* 000005 */     return instance;
/* 000005 */ }
/* 000005 */ dict.__name__ = 'dict';
/* 000005 */ dict.__bases__ = [object];
/* 000005 */ function __setdoc__ (docString) {
/* 000005 */     this.__doc__ = docString;
/* 000005 */     return this;
/* 000005 */ }
/* 000005 */ __setproperty__ (Function.prototype, '__setdoc__', {value: __setdoc__, enumerable: false});
/* 000005 */ export function __jsmod__ (a, b) {
/* 000005 */     if (typeof a == 'object' && '__mod__' in a) {
/* 000005 */         return a.__mod__ (b);
/* 000005 */     }
/* 000005 */     else if (typeof b == 'object' && '__rmod__' in b) {
/* 000005 */         return b.__rmod__ (a);
/* 000005 */     }
/* 000005 */     else {
/* 000005 */         return a % b;
/* 000005 */     }
/* 000005 */ };
/* 000005 */ export function __mod__ (a, b) {
/* 000005 */     if (typeof a == 'object' && '__mod__' in a) {
/* 000005 */         return a.__mod__ (b);
/* 000005 */     }
/* 000005 */     else if (typeof b == 'object' && '__rmod__' in b) {
/* 000005 */         return b.__rmod__ (a);
/* 000005 */     }
/* 000005 */     else {
/* 000005 */         return ((a % b) + b) % b;
/* 000005 */     }
/* 000005 */ };
/* 000005 */ export function __pow__ (a, b) {
/* 000005 */     if (typeof a == 'object' && '__pow__' in a) {
/* 000005 */         return a.__pow__ (b);
/* 000005 */     }
/* 000005 */     else if (typeof b == 'object' && '__rpow__' in b) {
/* 000005 */         return b.__rpow__ (a);
/* 000005 */     }
/* 000005 */     else {
/* 000005 */         return Math.pow (a, b);
/* 000005 */     }
/* 000005 */ };
/* 000005 */ export var pow = __pow__;
/* 000005 */ export function __neg__ (a) {
/* 000005 */     if (typeof a == 'object' && '__neg__' in a) {
/* 000005 */         return a.__neg__ ();
/* 000005 */     }
/* 000005 */     else {
/* 000005 */         return -a;
/* 000005 */     }
/* 000005 */ };
/* 000005 */ export function __matmul__ (a, b) {
/* 000005 */     return a.__matmul__ (b);
/* 000005 */ };
/* 000005 */ export function __mul__ (a, b) {
/* 000005 */     if (typeof a == 'object' && '__mul__' in a) {
/* 000005 */         return a.__mul__ (b);
/* 000005 */     }
/* 000005 */     else if (typeof b == 'object' && '__rmul__' in b) {
/* 000005 */         return b.__rmul__ (a);
/* 000005 */     }
/* 000005 */     else if (typeof a == 'string') {
/* 000005 */         return a.__mul__ (b);
/* 000005 */     }
/* 000005 */     else if (typeof b == 'string') {
/* 000005 */         return b.__rmul__ (a);
/* 000005 */     }
/* 000005 */     else {
/* 000005 */         return a * b;
/* 000005 */     }
/* 000005 */ };
/* 000005 */ export function __truediv__ (a, b) {
/* 000005 */     if (typeof a == 'object' && '__truediv__' in a) {
/* 000005 */         return a.__truediv__ (b);
/* 000005 */     }
/* 000005 */     else if (typeof b == 'object' && '__rtruediv__' in b) {
/* 000005 */         return b.__rtruediv__ (a);
/* 000005 */     }
/* 000005 */     else if (typeof a == 'object' && '__div__' in a) {
/* 000005 */         return a.__div__ (b);
/* 000005 */     }
/* 000005 */     else if (typeof b == 'object' && '__rdiv__' in b) {
/* 000005 */         return b.__rdiv__ (a);
/* 000005 */     }
/* 000005 */     else {
/* 000005 */         return a / b;
/* 000005 */     }
/* 000005 */ };
/* 000005 */ export function __floordiv__ (a, b) {
/* 000005 */     if (typeof a == 'object' && '__floordiv__' in a) {
/* 000005 */         return a.__floordiv__ (b);
/* 000005 */     }
/* 000005 */     else if (typeof b == 'object' && '__rfloordiv__' in b) {
/* 000005 */         return b.__rfloordiv__ (a);
/* 000005 */     }
/* 000005 */     else if (typeof a == 'object' && '__div__' in a) {
/* 000005 */         return a.__div__ (b);
/* 000005 */     }
/* 000005 */     else if (typeof b == 'object' && '__rdiv__' in b) {
/* 000005 */         return b.__rdiv__ (a);
/* 000005 */     }
/* 000005 */     else {
/* 000005 */         return Math.floor (a / b);
/* 000005 */     }
/* 000005 */ };
/* 000005 */ export function __add__ (a, b) {
/* 000005 */     if (typeof a == 'object' && '__add__' in a) {
/* 000005 */         return a.__add__ (b);
/* 000005 */     }
/* 000005 */     else if (typeof b == 'object' && '__radd__' in b) {
/* 000005 */         return b.__radd__ (a);
/* 000005 */     }
/* 000005 */     else {
/* 000005 */         return a + b;
/* 000005 */     }
/* 000005 */ };
/* 000005 */ export function __sub__ (a, b) {
/* 000005 */     if (typeof a == 'object' && '__sub__' in a) {
/* 000005 */         return a.__sub__ (b);
/* 000005 */     }
/* 000005 */     else if (typeof b == 'object' && '__rsub__' in b) {
/* 000005 */         return b.__rsub__ (a);
/* 000005 */     }
/* 000005 */     else {
/* 000005 */         return a - b;
/* 000005 */     }
/* 000005 */ };
/* 000005 */ export function __lshift__ (a, b) {
/* 000005 */     if (typeof a == 'object' && '__lshift__' in a) {
/* 000005 */         return a.__lshift__ (b);
/* 000005 */     }
/* 000005 */     else if (typeof b == 'object' && '__rlshift__' in b) {
/* 000005 */         return b.__rlshift__ (a);
/* 000005 */     }
/* 000005 */     else {
/* 000005 */         return a << b;
/* 000005 */     }
/* 000005 */ };
/* 000005 */ export function __rshift__ (a, b) {
/* 000005 */     if (typeof a == 'object' && '__rshift__' in a) {
/* 000005 */         return a.__rshift__ (b);
/* 000005 */     }
/* 000005 */     else if (typeof b == 'object' && '__rrshift__' in b) {
/* 000005 */         return b.__rrshift__ (a);
/* 000005 */     }
/* 000005 */     else {
/* 000005 */         return a >> b;
/* 000005 */     }
/* 000005 */ };
/* 000005 */ export function __or__ (a, b) {
/* 000005 */     if (typeof a == 'object' && '__or__' in a) {
/* 000005 */         return a.__or__ (b);
/* 000005 */     }
/* 000005 */     else if (typeof b == 'object' && '__ror__' in b) {
/* 000005 */         return b.__ror__ (a);
/* 000005 */     }
/* 000005 */     else {
/* 000005 */         return a | b;
/* 000005 */     }
/* 000005 */ };
/* 000005 */ export function __xor__ (a, b) {
/* 000005 */     if (typeof a == 'object' && '__xor__' in a) {
/* 000005 */         return a.__xor__ (b);
/* 000005 */     }
/* 000005 */     else if (typeof b == 'object' && '__rxor__' in b) {
/* 000005 */         return b.__rxor__ (a);
/* 000005 */     }
/* 000005 */     else {
/* 000005 */         return a ^ b;
/* 000005 */     }
/* 000005 */ };
/* 000005 */ export function __and__ (a, b) {
/* 000005 */     if (typeof a == 'object' && '__and__' in a) {
/* 000005 */         return a.__and__ (b);
/* 000005 */     }
/* 000005 */     else if (typeof b == 'object' && '__rand__' in b) {
/* 000005 */         return b.__rand__ (a);
/* 000005 */     }
/* 000005 */     else {
/* 000005 */         return a & b;
/* 000005 */     }
/* 000005 */ };
/* 000005 */ export function __eq__ (a, b) {
/* 000005 */     if (typeof a == 'object' && '__eq__' in a) {
/* 000005 */         return a.__eq__ (b);
/* 000005 */     }
/* 000005 */     else {
/* 000005 */         return a == b;
/* 000005 */     }
/* 000005 */ };
/* 000005 */ export function __ne__ (a, b) {
/* 000005 */     if (typeof a == 'object' && '__ne__' in a) {
/* 000005 */         return a.__ne__ (b);
/* 000005 */     }
/* 000005 */     else {
/* 000005 */         return a != b
/* 000005 */     }
/* 000005 */ };
/* 000005 */ export function __lt__ (a, b) {
/* 000005 */     if (typeof a == 'object' && '__lt__' in a) {
/* 000005 */         return a.__lt__ (b);
/* 000005 */     }
/* 000005 */     else {
/* 000005 */         return a < b;
/* 000005 */     }
/* 000005 */ };
/* 000005 */ export function __le__ (a, b) {
/* 000005 */     if (typeof a == 'object' && '__le__' in a) {
/* 000005 */         return a.__le__ (b);
/* 000005 */     }
/* 000005 */     else {
/* 000005 */         return a <= b;
/* 000005 */     }
/* 000005 */ };
/* 000005 */ export function __gt__ (a, b) {
/* 000005 */     if (typeof a == 'object' && '__gt__' in a) {
/* 000005 */         return a.__gt__ (b);
/* 000005 */     }
/* 000005 */     else {
/* 000005 */         return a > b;
/* 000005 */     }
/* 000005 */ };
/* 000005 */ export function __ge__ (a, b) {
/* 000005 */     if (typeof a == 'object' && '__ge__' in a) {
/* 000005 */         return a.__ge__ (b);
/* 000005 */     }
/* 000005 */     else {
/* 000005 */         return a >= b;
/* 000005 */     }
/* 000005 */ };
/* 000005 */ export function __imatmul__ (a, b) {
/* 000005 */     if ('__imatmul__' in a) {
/* 000005 */         return a.__imatmul__ (b);
/* 000005 */     }
/* 000005 */     else {
/* 000005 */         return a.__matmul__ (b);
/* 000005 */     }
/* 000005 */ };
/* 000005 */ export function __ipow__ (a, b) {
/* 000005 */     if (typeof a == 'object' && '__pow__' in a) {
/* 000005 */         return a.__ipow__ (b);
/* 000005 */     }
/* 000005 */     else if (typeof a == 'object' && '__ipow__' in a) {
/* 000005 */         return a.__pow__ (b);
/* 000005 */     }
/* 000005 */     else if (typeof b == 'object' && '__rpow__' in b) {
/* 000005 */         return b.__rpow__ (a);
/* 000005 */     }
/* 000005 */     else {
/* 000005 */         return Math.pow (a, b);
/* 000005 */     }
/* 000005 */ };
/* 000005 */ export function __ijsmod__ (a, b) {
/* 000005 */     if (typeof a == 'object' && '__imod__' in a) {
/* 000005 */         return a.__ismod__ (b);
/* 000005 */     }
/* 000005 */     else if (typeof a == 'object' && '__mod__' in a) {
/* 000005 */         return a.__mod__ (b);
/* 000005 */     }
/* 000005 */     else if (typeof b == 'object' && '__rpow__' in b) {
/* 000005 */         return b.__rmod__ (a);
/* 000005 */     }
/* 000005 */     else {
/* 000005 */         return a % b;
/* 000005 */     }
/* 000005 */ };
/* 000005 */ export function __imod__ (a, b) {
/* 000005 */     if (typeof a == 'object' && '__imod__' in a) {
/* 000005 */         return a.__imod__ (b);
/* 000005 */     }
/* 000005 */     else if (typeof a == 'object' && '__mod__' in a) {
/* 000005 */         return a.__mod__ (b);
/* 000005 */     }
/* 000005 */     else if (typeof b == 'object' && '__rmod__' in b) {
/* 000005 */         return b.__rmod__ (a);
/* 000005 */     }
/* 000005 */     else {
/* 000005 */         return ((a % b) + b) % b;
/* 000005 */     }
/* 000005 */ };
/* 000005 */ export function __imul__ (a, b) {
/* 000005 */     if (typeof a == 'object' && '__imul__' in a) {
/* 000005 */         return a.__imul__ (b);
/* 000005 */     }
/* 000005 */     else if (typeof a == 'object' && '__mul__' in a) {
/* 000005 */         return a = a.__mul__ (b);
/* 000005 */     }
/* 000005 */     else if (typeof b == 'object' && '__rmul__' in b) {
/* 000005 */         return a = b.__rmul__ (a);
/* 000005 */     }
/* 000005 */     else if (typeof a == 'string') {
/* 000005 */         return a = a.__mul__ (b);
/* 000005 */     }
/* 000005 */     else if (typeof b == 'string') {
/* 000005 */         return a = b.__rmul__ (a);
/* 000005 */     }
/* 000005 */     else {
/* 000005 */         return a *= b;
/* 000005 */     }
/* 000005 */ };
/* 000005 */ export function __idiv__ (a, b) {
/* 000005 */     if (typeof a == 'object' && '__idiv__' in a) {
/* 000005 */         return a.__idiv__ (b);
/* 000005 */     }
/* 000005 */     else if (typeof a == 'object' && '__div__' in a) {
/* 000005 */         return a = a.__div__ (b);
/* 000005 */     }
/* 000005 */     else if (typeof b == 'object' && '__rdiv__' in b) {
/* 000005 */         return a = b.__rdiv__ (a);
/* 000005 */     }
/* 000005 */     else {
/* 000005 */         return a /= b;
/* 000005 */     }
/* 000005 */ };
/* 000005 */ export function __iadd__ (a, b) {
/* 000005 */     if (typeof a == 'object' && '__iadd__' in a) {
/* 000005 */         return a.__iadd__ (b);
/* 000005 */     }
/* 000005 */     else if (typeof a == 'object' && '__add__' in a) {
/* 000005 */         return a = a.__add__ (b);
/* 000005 */     }
/* 000005 */     else if (typeof b == 'object' && '__radd__' in b) {
/* 000005 */         return a = b.__radd__ (a);
/* 000005 */     }
/* 000005 */     else {
/* 000005 */         return a += b;
/* 000005 */     }
/* 000005 */ };
/* 000005 */ export function __isub__ (a, b) {
/* 000005 */     if (typeof a == 'object' && '__isub__' in a) {
/* 000005 */         return a.__isub__ (b);
/* 000005 */     }
/* 000005 */     else if (typeof a == 'object' && '__sub__' in a) {
/* 000005 */         return a = a.__sub__ (b);
/* 000005 */     }
/* 000005 */     else if (typeof b == 'object' && '__rsub__' in b) {
/* 000005 */         return a = b.__rsub__ (a);
/* 000005 */     }
/* 000005 */     else {
/* 000005 */         return a -= b;
/* 000005 */     }
/* 000005 */ };
/* 000005 */ export function __ilshift__ (a, b) {
/* 000005 */     if (typeof a == 'object' && '__ilshift__' in a) {
/* 000005 */         return a.__ilshift__ (b);
/* 000005 */     }
/* 000005 */     else if (typeof a == 'object' && '__lshift__' in a) {
/* 000005 */         return a = a.__lshift__ (b);
/* 000005 */     }
/* 000005 */     else if (typeof b == 'object' && '__rlshift__' in b) {
/* 000005 */         return a = b.__rlshift__ (a);
/* 000005 */     }
/* 000005 */     else {
/* 000005 */         return a <<= b;
/* 000005 */     }
/* 000005 */ };
/* 000005 */ export function __irshift__ (a, b) {
/* 000005 */     if (typeof a == 'object' && '__irshift__' in a) {
/* 000005 */         return a.__irshift__ (b);
/* 000005 */     }
/* 000005 */     else if (typeof a == 'object' && '__rshift__' in a) {
/* 000005 */         return a = a.__rshift__ (b);
/* 000005 */     }
/* 000005 */     else if (typeof b == 'object' && '__rrshift__' in b) {
/* 000005 */         return a = b.__rrshift__ (a);
/* 000005 */     }
/* 000005 */     else {
/* 000005 */         return a >>= b;
/* 000005 */     }
/* 000005 */ };
/* 000005 */ export function __ior__ (a, b) {
/* 000005 */     if (typeof a == 'object' && '__ior__' in a) {
/* 000005 */         return a.__ior__ (b);
/* 000005 */     }
/* 000005 */     else if (typeof a == 'object' && '__or__' in a) {
/* 000005 */         return a = a.__or__ (b);
/* 000005 */     }
/* 000005 */     else if (typeof b == 'object' && '__ror__' in b) {
/* 000005 */         return a = b.__ror__ (a);
/* 000005 */     }
/* 000005 */     else {
/* 000005 */         return a |= b;
/* 000005 */     }
/* 000005 */ };
/* 000005 */ export function __ixor__ (a, b) {
/* 000005 */     if (typeof a == 'object' && '__ixor__' in a) {
/* 000005 */         return a.__ixor__ (b);
/* 000005 */     }
/* 000005 */     else if (typeof a == 'object' && '__xor__' in a) {
/* 000005 */         return a = a.__xor__ (b);
/* 000005 */     }
/* 000005 */     else if (typeof b == 'object' && '__rxor__' in b) {
/* 000005 */         return a = b.__rxor__ (a);
/* 000005 */     }
/* 000005 */     else {
/* 000005 */         return a ^= b;
/* 000005 */     }
/* 000005 */ };
/* 000005 */ export function __iand__ (a, b) {
/* 000005 */     if (typeof a == 'object' && '__iand__' in a) {
/* 000005 */         return a.__iand__ (b);
/* 000005 */     }
/* 000005 */     else if (typeof a == 'object' && '__and__' in a) {
/* 000005 */         return a = a.__and__ (b);
/* 000005 */     }
/* 000005 */     else if (typeof b == 'object' && '__rand__' in b) {
/* 000005 */         return a = b.__rand__ (a);
/* 000005 */     }
/* 000005 */     else {
/* 000005 */         return a &= b;
/* 000005 */     }
/* 000005 */ };
/* 000005 */ export function __getitem__ (container, key) {
/* 000005 */     if (typeof container == 'object' && '__getitem__' in container) {
/* 000005 */         return container.__getitem__ (key);
/* 000005 */     }
/* 000005 */     else if ((typeof container == 'string' || container instanceof Array) && key < 0) {
/* 000005 */         return container [container.length + key];
/* 000005 */     }
/* 000005 */     else {
/* 000005 */         return container [key];
/* 000005 */     }
/* 000005 */ };
/* 000005 */ export function __setitem__ (container, key, value) {
/* 000005 */     if (typeof container == 'object' && '__setitem__' in container) {
/* 000005 */         container.__setitem__ (key, value);
/* 000005 */     }
/* 000005 */     else if ((typeof container == 'string' || container instanceof Array) && key < 0) {
/* 000005 */         container [container.length + key] = value;
/* 000005 */     }
/* 000005 */     else {
/* 000005 */         container [key] = value;
/* 000005 */     }
/* 000005 */ };
/* 000005 */ export function __getslice__ (container, lower, upper, step) {
/* 000005 */     if (typeof container == 'object' && '__getitem__' in container) {
/* 000005 */         return container.__getitem__ ([lower, upper, step]);
/* 000005 */     }
/* 000005 */     else {
/* 000005 */         return container.__getslice__ (lower, upper, step);
/* 000005 */     }
/* 000005 */ };
/* 000005 */ export function __setslice__ (container, lower, upper, step, value) {
/* 000005 */     if (typeof container == 'object' && '__setitem__' in container) {
/* 000005 */         container.__setitem__ ([lower, upper, step], value);
/* 000005 */     }
/* 000005 */     else {
/* 000005 */         container.__setslice__ (lower, upper, step, value);
/* 000005 */     }
/* 000005 */ };
/* 000015 */ export var BaseException =  __class__ ('BaseException', [object], {
/* 000015 */ 	__module__: __name__,
/* 000015 */ });
/* 000018 */ export var Exception =  __class__ ('Exception', [BaseException], {
/* 000019 */ 	__module__: __name__,
/* 000020 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000020 */ 		var kwargs = dict ();
/* 000020 */ 		if (arguments.length) {
/* 000020 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000020 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000020 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000020 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000020 */ 					switch (__attrib0__) {
/* 000020 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000020 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000020 */ 					}
/* 000020 */ 				}
/* 000020 */ 				delete kwargs.__kwargtrans__;
/* 000020 */ 			}
/* 000020 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000020 */ 		}
/* 000020 */ 		else {
/* 000020 */ 			var args = tuple ();
/* 000020 */ 		}
/* 000021 */ 		self.__args__ = args;
/* 000022 */ 		if (__ne__ (kwargs.error, null)) {
/* 000023 */ 			self.stack = kwargs.error.stack;
/* 000023 */ 		}
/* 000024 */ 		else if (Error) {
/* 000025 */ 			self.stack = new __call__ (Error, null).stack;
/* 000025 */ 		}
/* 000026 */ 		else {
/* 000027 */ 			self.stack = 'No stack trace available';
/* 000027 */ 		}
/* 000028 */ 	});},
/* 000030 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000031 */ 		if (__gt__ (__call__ (len, null, self.__args__), 1)) {
/* 000032 */ 			return (function () {
/* 000032 */ 				var __accu0__ = '{}{}';
/* 000032 */ 				return __call__ (__accu0__.format, __accu0__, self.__class__.__name__, __call__ (repr, null, __call__ (tuple, null, self.__args__)));
/* 000032 */ 			}) ();
/* 000032 */ 		}
/* 000033 */ 		else if (__call__ (len, null, self.__args__)) {
/* 000034 */ 			return (function () {
/* 000034 */ 				var __accu0__ = '{}({})';
/* 000034 */ 				return __call__ (__accu0__.format, __accu0__, self.__class__.__name__, __call__ (repr, null, __getitem__ (self.__args__, 0)));
/* 000034 */ 			}) ();
/* 000034 */ 		}
/* 000035 */ 		else {
/* 000036 */ 			return (function () {
/* 000036 */ 				var __accu0__ = '{}()';
/* 000036 */ 				return __call__ (__accu0__.format, __accu0__, self.__class__.__name__);
/* 000036 */ 			}) ();
/* 000036 */ 		}
/* 000036 */ 	});},
/* 000038 */ 	get __str__ () {return __get__ (this, function (self) {
/* 000039 */ 		if (__gt__ (__call__ (len, null, self.__args__), 1)) {
/* 000040 */ 			return __call__ (str, null, __call__ (tuple, null, self.__args__));
/* 000040 */ 		}
/* 000041 */ 		else if (__call__ (len, null, self.__args__)) {
/* 000042 */ 			return __call__ (str, null, __getitem__ (self.__args__, 0));
/* 000042 */ 		}
/* 000043 */ 		else {
/* 000044 */ 			return '';
/* 000044 */ 		}
/* 000044 */ 	});}
/* 000044 */ });
/* 000046 */ export var IterableError =  __class__ ('IterableError', [Exception], {
/* 000046 */ 	__module__: __name__,
/* 000047 */ 	get __init__ () {return __get__ (this, function (self, error) {
/* 000048 */ 		(function () {
/* 000048 */ 			var __accu0__ = Exception;
/* 000048 */ 			return __call__ (__accu0__.__init__, __accu0__, self, "Can't iterate over non-iterable", __kwargtrans__ ({error: error}));
/* 000048 */ 		}) ();
/* 000048 */ 	});}
/* 000048 */ });
/* 000050 */ export var StopIteration =  __class__ ('StopIteration', [Exception], {
/* 000050 */ 	__module__: __name__,
/* 000051 */ 	get __init__ () {return __get__ (this, function (self, error) {
/* 000052 */ 		(function () {
/* 000052 */ 			var __accu0__ = Exception;
/* 000052 */ 			return __call__ (__accu0__.__init__, __accu0__, self, 'Iterator exhausted', __kwargtrans__ ({error: error}));
/* 000052 */ 		}) ();
/* 000052 */ 	});}
/* 000052 */ });
/* 000054 */ export var ValueError =  __class__ ('ValueError', [Exception], {
/* 000054 */ 	__module__: __name__,
/* 000055 */ 	get __init__ () {return __get__ (this, function (self, message, error) {
/* 000056 */ 		(function () {
/* 000056 */ 			var __accu0__ = Exception;
/* 000056 */ 			return __call__ (__accu0__.__init__, __accu0__, self, message, __kwargtrans__ ({error: error}));
/* 000056 */ 		}) ();
/* 000056 */ 	});}
/* 000056 */ });
/* 000058 */ export var KeyError =  __class__ ('KeyError', [Exception], {
/* 000058 */ 	__module__: __name__,
/* 000059 */ 	get __init__ () {return __get__ (this, function (self, message, error) {
/* 000060 */ 		(function () {
/* 000060 */ 			var __accu0__ = Exception;
/* 000060 */ 			return __call__ (__accu0__.__init__, __accu0__, self, message, __kwargtrans__ ({error: error}));
/* 000060 */ 		}) ();
/* 000060 */ 	});}
/* 000060 */ });
/* 000062 */ export var AssertionError =  __class__ ('AssertionError', [Exception], {
/* 000062 */ 	__module__: __name__,
/* 000063 */ 	get __init__ () {return __get__ (this, function (self, message, error) {
/* 000064 */ 		if (message) {
/* 000065 */ 			(function () {
/* 000065 */ 				var __accu0__ = Exception;
/* 000065 */ 				return __call__ (__accu0__.__init__, __accu0__, self, message, __kwargtrans__ ({error: error}));
/* 000065 */ 			}) ();
/* 000065 */ 		}
/* 000066 */ 		else {
/* 000067 */ 			(function () {
/* 000067 */ 				var __accu0__ = Exception;
/* 000067 */ 				return __call__ (__accu0__.__init__, __accu0__, self, __kwargtrans__ ({error: error}));
/* 000067 */ 			}) ();
/* 000067 */ 		}
/* 000067 */ 	});}
/* 000067 */ });
/* 000069 */ export var NotImplementedError =  __class__ ('NotImplementedError', [Exception], {
/* 000069 */ 	__module__: __name__,
/* 000070 */ 	get __init__ () {return __get__ (this, function (self, message, error) {
/* 000071 */ 		(function () {
/* 000071 */ 			var __accu0__ = Exception;
/* 000071 */ 			return __call__ (__accu0__.__init__, __accu0__, self, message, __kwargtrans__ ({error: error}));
/* 000071 */ 		}) ();
/* 000071 */ 	});}
/* 000071 */ });
/* 000073 */ export var IndexError =  __class__ ('IndexError', [Exception], {
/* 000073 */ 	__module__: __name__,
/* 000074 */ 	get __init__ () {return __get__ (this, function (self, message, error) {
/* 000075 */ 		(function () {
/* 000075 */ 			var __accu0__ = Exception;
/* 000075 */ 			return __call__ (__accu0__.__init__, __accu0__, self, message, __kwargtrans__ ({error: error}));
/* 000075 */ 		}) ();
/* 000075 */ 	});}
/* 000075 */ });
/* 000077 */ export var AttributeError =  __class__ ('AttributeError', [Exception], {
/* 000077 */ 	__module__: __name__,
/* 000078 */ 	get __init__ () {return __get__ (this, function (self, message, error) {
/* 000079 */ 		(function () {
/* 000079 */ 			var __accu0__ = Exception;
/* 000079 */ 			return __call__ (__accu0__.__init__, __accu0__, self, message, __kwargtrans__ ({error: error}));
/* 000079 */ 		}) ();
/* 000079 */ 	});}
/* 000079 */ });
/* 000081 */ export var py_TypeError =  __class__ ('py_TypeError', [Exception], {
/* 000081 */ 	__module__: __name__,
/* 000082 */ 	get __init__ () {return __get__ (this, function (self, message, error) {
/* 000083 */ 		(function () {
/* 000083 */ 			var __accu0__ = Exception;
/* 000083 */ 			return __call__ (__accu0__.__init__, __accu0__, self, message, __kwargtrans__ ({error: error}));
/* 000083 */ 		}) ();
/* 000083 */ 	});}
/* 000083 */ });
/* 000089 */ export var Warning =  __class__ ('Warning', [Exception], {
/* 000089 */ 	__module__: __name__,
/* 000089 */ });
/* 000094 */ export var UserWarning =  __class__ ('UserWarning', [Warning], {
/* 000094 */ 	__module__: __name__,
/* 000094 */ });
/* 000097 */ export var DeprecationWarning =  __class__ ('DeprecationWarning', [Warning], {
/* 000097 */ 	__module__: __name__,
/* 000097 */ });
/* 000100 */ export var RuntimeWarning =  __class__ ('RuntimeWarning', [Warning], {
/* 000100 */ 	__module__: __name__,
/* 000100 */ });
/* 000105 */ export var __sort__ = function (iterable, key, reverse) {
/* 000105 */ 	if (typeof key == 'undefined' || (key != null && key.hasOwnProperty ("__kwargtrans__"))) {;
/* 000105 */ 		var key = null;
/* 000105 */ 	};
/* 000105 */ 	if (typeof reverse == 'undefined' || (reverse != null && reverse.hasOwnProperty ("__kwargtrans__"))) {;
/* 000105 */ 		var reverse = false;
/* 000105 */ 	};
/* 000105 */ 	if (arguments.length) {
/* 000105 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000105 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000105 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000105 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000105 */ 				switch (__attrib0__) {
/* 000105 */ 					case 'iterable': var iterable = __allkwargs0__ [__attrib0__]; break;
/* 000105 */ 					case 'key': var key = __allkwargs0__ [__attrib0__]; break;
/* 000105 */ 					case 'reverse': var reverse = __allkwargs0__ [__attrib0__]; break;
/* 000105 */ 				}
/* 000105 */ 			}
/* 000105 */ 		}
/* 000105 */ 	}
/* 000105 */ 	else {
/* 000105 */ 	}
/* 000106 */ 	if (key) {
/* 000107 */ 		(function () {
/* 000107 */ 			var __accu0__ = iterable;
/* 000107 */ 			return __call__ (__accu0__.sort, __accu0__, (function __lambda__ (a, b) {
/* 000107 */ 				if (arguments.length) {
/* 000107 */ 					var __ilastarg0__ = arguments.length - 1;
/* 000107 */ 					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000107 */ 						var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000107 */ 						for (var __attrib0__ in __allkwargs0__) {
/* 000107 */ 							switch (__attrib0__) {
/* 000107 */ 								case 'a': var a = __allkwargs0__ [__attrib0__]; break;
/* 000107 */ 								case 'b': var b = __allkwargs0__ [__attrib0__]; break;
/* 000107 */ 							}
/* 000107 */ 						}
/* 000107 */ 					}
/* 000107 */ 				}
/* 000107 */ 				else {
/* 000107 */ 				}
/* 000107 */ 				return (__gt__ (__call__ (key, null, a), __call__ (key, null, b)) ? 1 : __neg__ (1));
/* 000107 */ 			}));
/* 000107 */ 		}) ();
/* 000107 */ 	}
/* 000108 */ 	else {
/* 000109 */ 		(function () {
/* 000109 */ 			var __accu0__ = iterable;
/* 000109 */ 			return __call__ (__accu0__.sort, __accu0__);
/* 000109 */ 		}) ();
/* 000109 */ 	}
/* 000111 */ 	if (reverse) {
/* 000112 */ 		(function () {
/* 000112 */ 			var __accu0__ = iterable;
/* 000112 */ 			return __call__ (__accu0__.reverse, __accu0__);
/* 000112 */ 		}) ();
/* 000112 */ 	}
/* 000112 */ };
/* 000114 */ export var sorted = function (iterable, key, reverse) {
/* 000114 */ 	if (typeof key == 'undefined' || (key != null && key.hasOwnProperty ("__kwargtrans__"))) {;
/* 000114 */ 		var key = null;
/* 000114 */ 	};
/* 000114 */ 	if (typeof reverse == 'undefined' || (reverse != null && reverse.hasOwnProperty ("__kwargtrans__"))) {;
/* 000114 */ 		var reverse = false;
/* 000114 */ 	};
/* 000114 */ 	if (arguments.length) {
/* 000114 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000114 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000114 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000114 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000114 */ 				switch (__attrib0__) {
/* 000114 */ 					case 'iterable': var iterable = __allkwargs0__ [__attrib0__]; break;
/* 000114 */ 					case 'key': var key = __allkwargs0__ [__attrib0__]; break;
/* 000114 */ 					case 'reverse': var reverse = __allkwargs0__ [__attrib0__]; break;
/* 000114 */ 				}
/* 000114 */ 			}
/* 000114 */ 		}
/* 000114 */ 	}
/* 000114 */ 	else {
/* 000114 */ 	}
/* 000115 */ 	if (__eq__ (py_typeof (iterable), dict)) {
/* 000116 */ 		var result = __call__ (copy, null, (function () {
/* 000116 */ 			var __accu0__ = iterable;
/* 000116 */ 			return __call__ (__accu0__.py_keys, __accu0__);
/* 000116 */ 		}) ());
/* 000116 */ 	}
/* 000117 */ 	else {
/* 000118 */ 		var result = __call__ (copy, null, iterable);
/* 000118 */ 	}
/* 000120 */ 	__call__ (__sort__, null, result, key, reverse);
/* 000121 */ 	return result;
/* 000121 */ };
/* 000125 */ export var map = function (func, iterable) {
/* 000126 */ 	return (function () {
/* 000126 */ 		var __accu0__ = [];
/* 000126 */ 		var __iterable0__ = iterable;
/* 000126 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000126 */ 			var item = __getitem__ (__iterable0__, __index0__);
/* 000126 */ 			(function () {
/* 000126 */ 				var __accu1__ = __accu0__;
/* 000126 */ 				return __call__ (__accu1__.append, __accu1__, __call__ (func, null, item));
/* 000126 */ 			}) ();
/* 000126 */ 		}
/* 000126 */ 		return __accu0__;
/* 000126 */ 	}) ();
/* 000126 */ };
/* 000129 */ export var filter = function (func, iterable) {
/* 000130 */ 	if (__eq__ (func, null)) {
/* 000131 */ 		var func = bool;
/* 000131 */ 	}
/* 000132 */ 	return (function () {
/* 000132 */ 		var __accu0__ = [];
/* 000132 */ 		var __iterable0__ = iterable;
/* 000132 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000132 */ 			var item = __getitem__ (__iterable0__, __index0__);
/* 000132 */ 			if (__call__ (func, null, item)) {
/* 000132 */ 				(function () {
/* 000132 */ 					var __accu1__ = __accu0__;
/* 000132 */ 					return __call__ (__accu1__.append, __accu1__, item);
/* 000132 */ 				}) ();
/* 000132 */ 			}
/* 000132 */ 		}
/* 000132 */ 		return __accu0__;
/* 000132 */ 	}) ();
/* 000132 */ };
/* 000134 */ export var divmod = function (n, d) {
/* 000135 */ 	return tuple ([__floordiv__ (n, d), __mod__ (n, d)]);
/* 000135 */ };
/* 000241 */ export var __Terminal__ =  __class__ ('__Terminal__', [object], {
/* 000241 */ 	__module__: __name__,
/* 000251 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000252 */ 		self.buffer = '';
/* 000254 */ 		try {
/* 000255 */ 			self.element = (function () {
/* 000255 */ 				var __accu0__ = document;
/* 000255 */ 				return __call__ (__accu0__.getElementById, __accu0__, '__terminal__');
/* 000255 */ 			}) ();
/* 000255 */ 		}
/* 000255 */ 		catch (__except0__) {
/* 000257 */ 			self.element = null;
/* 000257 */ 		}
/* 000259 */ 		if (self.element) {
/* 000260 */ 			self.element.style.overflowX = 'auto';
/* 000261 */ 			self.element.style.boxSizing = 'border-box';
/* 000262 */ 			self.element.style.padding = '5px';
/* 000263 */ 			self.element.innerHTML = '_';
/* 000263 */ 		}
/* 000265 */ 	});},
/* 000267 */ 	get print () {return __get__ (this, function (self) {
/* 000267 */ 		var sep = ' ';
/* 000267 */ 		var end = '\n';
/* 000267 */ 		if (arguments.length) {
/* 000267 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000267 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000267 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000267 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000267 */ 					switch (__attrib0__) {
/* 000267 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000267 */ 						case 'sep': var sep = __allkwargs0__ [__attrib0__]; break;
/* 000267 */ 						case 'end': var end = __allkwargs0__ [__attrib0__]; break;
/* 000267 */ 					}
/* 000267 */ 				}
/* 000267 */ 			}
/* 000267 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000267 */ 		}
/* 000267 */ 		else {
/* 000267 */ 			var args = tuple ();
/* 000267 */ 		}
/* 000268 */ 		self.buffer = __getslice__ ((function () {
/* 000268 */ 			var __accu0__ = '{}{}{}';
/* 000268 */ 			return __call__ (__accu0__.format, __accu0__, self.buffer, (function () {
/* 000268 */ 				var __accu1__ = sep;
/* 000268 */ 				return __call__ (__accu1__.join, __accu1__, (function () {
/* 000268 */ 					var __accu2__ = [];
/* 000268 */ 					var __iterable0__ = args;
/* 000268 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000268 */ 						var arg = __getitem__ (__iterable0__, __index0__);
/* 000268 */ 						(function () {
/* 000268 */ 							var __accu3__ = __accu2__;
/* 000268 */ 							return __call__ (__accu3__.append, __accu3__, __call__ (str, null, arg));
/* 000268 */ 						}) ();
/* 000268 */ 					}
/* 000268 */ 					return __accu2__;
/* 000268 */ 				}) ());
/* 000268 */ 			}) (), end);
/* 000268 */ 		}) (), __neg__ (4096), null, 1);
/* 000270 */ 		if (self.element) {
/* 000271 */ 			self.element.innerHTML = (function () {
/* 000271 */ 				var __accu0__ = (function () {
/* 000271 */ 					var __accu1__ = self.buffer;
/* 000271 */ 					return __call__ (__accu1__.py_replace, __accu1__, '\n', '<br>');
/* 000271 */ 				}) ();
/* 000271 */ 				return __call__ (__accu0__.py_replace, __accu0__, ' ', '&nbsp');
/* 000271 */ 			}) ();
/* 000272 */ 			self.element.scrollTop = self.element.scrollHeight;
/* 000272 */ 		}
/* 000273 */ 		else {
/* 000274 */ 			(function () {
/* 000274 */ 				var __accu0__ = console;
/* 000274 */ 				return __call__ (__accu0__.log, __accu0__, (function () {
/* 000274 */ 					var __accu1__ = sep;
/* 000274 */ 					return __call__ (__accu1__.join, __accu1__, (function () {
/* 000274 */ 						var __accu2__ = [];
/* 000274 */ 						var __iterable0__ = args;
/* 000274 */ 						for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000274 */ 							var arg = __getitem__ (__iterable0__, __index0__);
/* 000274 */ 							(function () {
/* 000274 */ 								var __accu3__ = __accu2__;
/* 000274 */ 								return __call__ (__accu3__.append, __accu3__, __call__ (str, null, arg));
/* 000274 */ 							}) ();
/* 000274 */ 						}
/* 000274 */ 						return __accu2__;
/* 000274 */ 					}) ());
/* 000274 */ 				}) ());
/* 000274 */ 			}) ();
/* 000274 */ 		}
/* 000274 */ 	});},
/* 000276 */ 	get input () {return __get__ (this, function (self, question) {
/* 000276 */ 		if (arguments.length) {
/* 000276 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000276 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000276 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000276 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000276 */ 					switch (__attrib0__) {
/* 000276 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000276 */ 						case 'question': var question = __allkwargs0__ [__attrib0__]; break;
/* 000276 */ 					}
/* 000276 */ 				}
/* 000276 */ 			}
/* 000276 */ 		}
/* 000276 */ 		else {
/* 000276 */ 		}
/* 000277 */ 		(function () {
/* 000277 */ 			var __accu0__ = self;
/* 000277 */ 			return __call__ (__accu0__.print, __accu0__, (function () {
/* 000277 */ 				var __accu1__ = '{}';
/* 000277 */ 				return __call__ (__accu1__.format, __accu1__, question);
/* 000277 */ 			}) (), __kwargtrans__ ({end: ''}));
/* 000277 */ 		}) ();
/* 000278 */ 		var answer = (function () {
/* 000278 */ 			var __accu0__ = window;
/* 000278 */ 			return __call__ (__accu0__.prompt, __accu0__, (function () {
/* 000278 */ 				var __accu1__ = '\n';
/* 000278 */ 				return __call__ (__accu1__.join, __accu1__, __getslice__ ((function () {
/* 000278 */ 					var __accu2__ = self.buffer;
/* 000278 */ 					return __call__ (__accu2__.py_split, __accu2__, '\n');
/* 000278 */ 				}) (), __neg__ (8), null, 1));
/* 000278 */ 			}) ());
/* 000278 */ 		}) ();
/* 000279 */ 		(function () {
/* 000279 */ 			var __accu0__ = self;
/* 000279 */ 			return __call__ (__accu0__.print, __accu0__, answer);
/* 000279 */ 		}) ();
/* 000280 */ 		return answer;
/* 000282 */ 	});}
/* 000282 */ });
/* 000284 */ export var __terminal__ = __call__ (__Terminal__, null);
/* 000286 */ export var print = __terminal__.print;
/* 000287 */ export var input = __terminal__.input;
/* 000287 */ 
//# sourceMappingURL=org.transcrypt.__runtime__.map



/*** PhF/PYLATEXENC - BEGIN CUSTOM PATCHES ***/

//
// Patch Transcrypt's implemnetations of some builtin object methods.
//
String.prototype.startswith = function (prefix, start) {
    //console.log("Custom startswith()! prefix = ", prefix, ", start = ", start);
    var pos_start = (typeof start === 'undefined' ? 0 : start);
    if (prefix instanceof Array) {
        for (var i=0;i<prefix.length;i++) {
            if (this.substring(pos_start, pos_start+prefix[i].length) === prefix [i]) {
                return true;
            }
        }
    } else {
        return (this.substring(pos_start, pos_start+prefix.length) === prefix);
    }
    return false;
};
String.prototype.count = function (ch) {
    var i = 0;
    var count = 0;
    for(; i < this.length; ++i) {
        if (ch == this[i]) {
            ++count;
        }
    }
    return count;
};
String.prototype.rjust = function(width, fill_char) {
    if (this.length >= width) {
        return this;
    }
    return fill_char.repeat(width - this.length) + this;
};
String.prototype.rstrip = function(chars) {
    if (chars === undefined) {
        return this.replace (/\s*$/g, '');
    }
    var s = this;
    while (s.length && chars.indexOf(s.slice(-1)) !== -1) {
        s = s.slice(0, -1);
    }
    return s;
}
//
// Patch Transcrypt's __pop__() method which has a bug
// (https://github.com/QQuick/Transcrypt/issues/827)
//
__pop__ = function (aKey, aDefault) {
    var result = this [aKey];
    if (result !== undefined) {
        delete this [aKey];
        return result;
    } else {
        if ( aDefault === undefined ) {
            throw KeyError (aKey, new Error());
        }
    }
    return aDefault;
}

//
// Check that a is not null, too, otherwise we get errors with "'__eq__' in a".
// Also check for __eq__ in b object!
//
__eq__ = function (a, b) {
    if (typeof a == 'object' && a != null && '__eq__' in a) {
        return a.__eq__ (b);
    } else if (typeof b == 'object' && b != null && '__eq__' in b) {
        return b.__eq__ (a);
    } else {
        return a == b;
    }
};





/*** PhF/PYLATEXENC - END CUSTOM PATCHES ***/
