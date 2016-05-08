(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["TranslateMaker"] = factory();
	else
		root["TranslateMaker"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Translate = exports.Translation = exports.Caches = exports.Adapters = exports.Mode = exports.Gender = exports.Plural = exports.getInstance = undefined;

	var _Translate = __webpack_require__(34);

	var _Translate2 = _interopRequireDefault(_Translate);

	var _Translation = __webpack_require__(35);

	var _Translation2 = _interopRequireDefault(_Translation);

	var _Plural = __webpack_require__(70);

	var _Plural2 = _interopRequireDefault(_Plural);

	var _Gender = __webpack_require__(69);

	var _Gender2 = _interopRequireDefault(_Gender);

	var _Mode = __webpack_require__(22);

	var _Mode2 = _interopRequireDefault(_Mode);

	var _adapters = __webpack_require__(66);

	var Adapters = _interopRequireWildcard(_adapters);

	var _caches = __webpack_require__(68);

	var Caches = _interopRequireWildcard(_caches);

	var _getInstance = __webpack_require__(83);

	var _getInstance2 = _interopRequireDefault(_getInstance);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.getInstance = _getInstance2.default;

	// export constants

	exports.Plural = _Plural2.default;
	exports.Gender = _Gender2.default;
	exports.Mode = _Mode2.default;

	// export modules

	exports.Adapters = Adapters;
	exports.Caches = Caches;

	// export classes

	exports.Translation = _Translation2.default;

	// export main class

	exports.Translate = _Translate2.default;
	exports.default = _Translate2.default;

/***/ },
/* 1 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @type {Function}
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	module.exports = isArray;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(14);

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}

	module.exports = toString;


/***/ },
/* 3 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module, global) {var checkGlobal = __webpack_require__(121);

	/** Used to determine if values are of the language type `Object`. */
	var objectTypes = {
	  'function': true,
	  'object': true
	};

	/** Detect free variable `exports`. */
	var freeExports = (objectTypes[typeof exports] && exports && !exports.nodeType)
	  ? exports
	  : undefined;

	/** Detect free variable `module`. */
	var freeModule = (objectTypes[typeof module] && module && !module.nodeType)
	  ? module
	  : undefined;

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = checkGlobal(freeExports && freeModule && typeof global == 'object' && global);

	/** Detect free variable `self`. */
	var freeSelf = checkGlobal(objectTypes[typeof self] && self);

	/** Detect free variable `window`. */
	var freeWindow = checkGlobal(objectTypes[typeof window] && window);

	/** Detect `this` as the global object. */
	var thisGlobal = checkGlobal(objectTypes[typeof this] && this);

	/**
	 * Used as a reference to the global object.
	 *
	 * The `this` value is used if it's the global object to avoid Greasemonkey's
	 * restricted `window` object, otherwise the `window` object is used.
	 */
	var root = freeGlobal ||
	  ((freeWindow !== (thisGlobal && thisGlobal.window)) && freeWindow) ||
	    freeSelf || thisGlobal || Function('return this')();

	module.exports = root;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(187)(module), (function() { return this; }())))

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var isNative = __webpack_require__(170);

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object[key];
	  return isNative(value) ? value : undefined;
	}

	module.exports = getNative;


/***/ },
/* 6 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var baseMatches = __webpack_require__(111),
	    baseMatchesProperty = __webpack_require__(112),
	    identity = __webpack_require__(168),
	    isArray = __webpack_require__(1),
	    property = __webpack_require__(174);

	/**
	 * The base implementation of `_.iteratee`.
	 *
	 * @private
	 * @param {*} [value=_.identity] The value to convert to an iteratee.
	 * @returns {Function} Returns the iteratee.
	 */
	function baseIteratee(value) {
	  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
	  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
	  if (typeof value == 'function') {
	    return value;
	  }
	  if (value == null) {
	    return identity;
	  }
	  if (typeof value == 'object') {
	    return isArray(value)
	      ? baseMatchesProperty(value[0], value[1])
	      : baseMatches(value);
	  }
	  return property(value);
	}

	module.exports = baseIteratee;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(1),
	    isSymbol = __webpack_require__(19);

	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;

	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (isArray(value)) {
	    return false;
	  }
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	      value == null || isSymbol(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	    (object != null && value in Object(object));
	}

	module.exports = isKey;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var isSymbol = __webpack_require__(19);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	module.exports = toKey;


/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Adapter = function () {
	  function Adapter() {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    _classCallCheck(this, Adapter);

	    this._options = options;
	  }

	  _createClass(Adapter, [{
	    key: 'getOptions',
	    value: function getOptions() {
	      return this._options;
	    }
	  }, {
	    key: 'get',
	    value: function get(locale, namespace, callback) {
	      throw new Error('Implement method get');
	    }
	  }, {
	    key: 'set',
	    value: function set(locale, value, namespace, callback) {
	      throw new Error('Implement method set');
	    }
	  }, {
	    key: 'dehydrate',
	    value: function dehydrate() {
	      throw new Error('Implement method dehydrate');
	    }
	  }, {
	    key: 'rehydrate',
	    value: function rehydrate(state) {
	      throw new Error('Implement method rehydrate');
	    }
	  }]);

	  return Adapter;
	}();

	exports.default = Adapter;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(143),
	    listCacheDelete = __webpack_require__(144),
	    listCacheGet = __webpack_require__(145),
	    listCacheHas = __webpack_require__(146),
	    listCacheSet = __webpack_require__(147);

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	module.exports = ListCache;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(57);

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	module.exports = assocIndexOf;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var baseForOwn = __webpack_require__(44),
	    createBaseEach = __webpack_require__(122);

	/**
	 * The base implementation of `_.forEach` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array|Object} Returns `collection`.
	 */
	var baseEach = createBaseEach(baseForOwn);

	module.exports = baseEach;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(42),
	    isSymbol = __webpack_require__(19);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;

	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	module.exports = baseToString;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var isKeyable = __webpack_require__(141);

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	module.exports = getMapData;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(5);

	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');

	module.exports = nativeCreate;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var baseEach = __webpack_require__(13),
	    baseFind = __webpack_require__(104),
	    baseFindIndex = __webpack_require__(105),
	    baseIteratee = __webpack_require__(7),
	    isArray = __webpack_require__(1);

	/**
	 * Iterates over elements of `collection`, returning the first element
	 * `predicate` returns truthy for. The predicate is invoked with three
	 * arguments: (value, index|key, collection).
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object} collection The collection to search.
	 * @param {Array|Function|Object|string} [predicate=_.identity]
	 *  The function invoked per iteration.
	 * @returns {*} Returns the matched element, else `undefined`.
	 * @example
	 *
	 * var users = [
	 *   { 'user': 'barney',  'age': 36, 'active': true },
	 *   { 'user': 'fred',    'age': 40, 'active': false },
	 *   { 'user': 'pebbles', 'age': 1,  'active': true }
	 * ];
	 *
	 * _.find(users, function(o) { return o.age < 40; });
	 * // => object for 'barney'
	 *
	 * // The `_.matches` iteratee shorthand.
	 * _.find(users, { 'age': 1, 'active': true });
	 * // => object for 'pebbles'
	 *
	 * // The `_.matchesProperty` iteratee shorthand.
	 * _.find(users, ['active', false]);
	 * // => object for 'fred'
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.find(users, 'active');
	 * // => object for 'barney'
	 */
	function find(collection, predicate) {
	  predicate = baseIteratee(predicate, 3);
	  if (isArray(collection)) {
	    var index = baseFindIndex(collection, predicate);
	    return index > -1 ? collection[index] : undefined;
	  }
	  return baseFind(collection, predicate, baseEach);
	}

	module.exports = find;


/***/ },
/* 18 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length,
	 *  else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	module.exports = isLength;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var isObjectLike = __webpack_require__(6);

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}

	module.exports = isSymbol;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var baseHas = __webpack_require__(46),
	    baseKeys = __webpack_require__(110),
	    indexKeys = __webpack_require__(139),
	    isArrayLike = __webpack_require__(32),
	    isIndex = __webpack_require__(27),
	    isPrototype = __webpack_require__(142);

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  var isProto = isPrototype(object);
	  if (!(isProto || isArrayLike(object))) {
	    return baseKeys(object);
	  }
	  var indexes = indexKeys(object),
	      skipIndexes = !!indexes,
	      result = indexes || [],
	      length = result.length;

	  for (var key in object) {
	    if (baseHas(object, key) &&
	        !(skipIndexes && (key == 'length' || isIndex(key, length))) &&
	        !(isProto && key == 'constructor')) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = keys;


/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Cache = function () {
	  function Cache() {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    _classCallCheck(this, Cache);

	    this._options = options;
	  }

	  _createClass(Cache, [{
	    key: 'getOptions',
	    value: function getOptions() {
	      return _extends({}, this._options);
	    }
	  }, {
	    key: 'get',
	    value: function get(key) {
	      throw new Error('Implement method get');
	    }
	  }, {
	    key: 'has',
	    value: function has(key) {
	      throw new Error('Implement method has');
	    }
	  }, {
	    key: 'set',
	    value: function set(key, value) {
	      throw new Error('Implement method set');
	    }
	  }, {
	    key: 'clear',
	    value: function clear() {
	      throw new Error('Implement method clear');
	    }
	  }, {
	    key: 'dehydrate',
	    value: function dehydrate() {
	      throw new Error('Implement method dehydrate');
	    }
	  }, {
	    key: 'rehydrate',
	    value: function rehydrate(state) {
	      throw new Error('Implement method rehydrate');
	    }
	  }]);

	  return Cache;
	}();

	exports.default = Cache;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _keymirror = __webpack_require__(88);

	var _keymirror2 = _interopRequireDefault(_keymirror);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _keymirror2.default)({
	  MAIN: null,
	  ICU: null
	});

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var mapCacheClear = __webpack_require__(148),
	    mapCacheDelete = __webpack_require__(149),
	    mapCacheGet = __webpack_require__(150),
	    mapCacheHas = __webpack_require__(151),
	    mapCacheSet = __webpack_require__(152);

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	module.exports = MapCache;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(1),
	    stringToPath = __webpack_require__(163);

	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value) {
	  return isArray(value) ? value : stringToPath(value);
	}

	module.exports = castPath;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var baseSlice = __webpack_require__(116);

	/**
	 * Casts `array` to a slice if it's needed.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {number} start The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the cast slice.
	 */
	function castSlice(array, start, end) {
	  var length = array.length;
	  end = end === undefined ? length : end;
	  return (!start && end >= length) ? array : baseSlice(array, start, end);
	}

	module.exports = castSlice;


/***/ },
/* 26 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}

	module.exports = isHostObject;


/***/ },
/* 27 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}

	module.exports = isIndex;


/***/ },
/* 28 */
/***/ function(module, exports) {

	/** Used to compose unicode character classes. */
	var rsAstralRange = '\\ud800-\\udfff',
	    rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23',
	    rsComboSymbolsRange = '\\u20d0-\\u20f0',
	    rsVarRange = '\\ufe0e\\ufe0f';

	/** Used to compose unicode capture groups. */
	var rsZWJ = '\\u200d';

	/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
	var reHasComplexSymbol = RegExp('[' + rsZWJ + rsAstralRange  + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + ']');

	module.exports = reHasComplexSymbol;


/***/ },
/* 29 */
/***/ function(module, exports) {

	/** Used to compose unicode character classes. */
	var rsAstralRange = '\\ud800-\\udfff',
	    rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23',
	    rsComboSymbolsRange = '\\u20d0-\\u20f0',
	    rsVarRange = '\\ufe0e\\ufe0f';

	/** Used to compose unicode capture groups. */
	var rsAstral = '[' + rsAstralRange + ']',
	    rsCombo = '[' + rsComboMarksRange + rsComboSymbolsRange + ']',
	    rsFitz = '\\ud83c[\\udffb-\\udfff]',
	    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
	    rsNonAstral = '[^' + rsAstralRange + ']',
	    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
	    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
	    rsZWJ = '\\u200d';

	/** Used to compose unicode regexes. */
	var reOptMod = rsModifier + '?',
	    rsOptVar = '[' + rsVarRange + ']?',
	    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
	    rsSeq = rsOptVar + reOptMod + rsOptJoin,
	    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

	/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
	var reComplexSymbol = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

	/**
	 * Converts `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function stringToArray(string) {
	  return string.match(reComplexSymbol);
	}

	module.exports = stringToArray;


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var toString = __webpack_require__(2),
	    upperFirst = __webpack_require__(183);

	/**
	 * Converts the first character of `string` to upper case and the remaining
	 * to lower case.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to capitalize.
	 * @returns {string} Returns the capitalized string.
	 * @example
	 *
	 * _.capitalize('FRED');
	 * // => 'Fred'
	 */
	function capitalize(string) {
	  return upperFirst(toString(string).toLowerCase());
	}

	module.exports = capitalize;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(45);

	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is used in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}

	module.exports = get;


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var getLength = __webpack_require__(131),
	    isFunction = __webpack_require__(33),
	    isLength = __webpack_require__(18);

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value)) && !isFunction(value);
	}

	module.exports = isArrayLike;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(3);

	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8 which returns 'object' for typed array and weak map constructors,
	  // and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	module.exports = isFunction;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Translation = __webpack_require__(35);

	var _Translation2 = _interopRequireDefault(_Translation);

	var _filters = __webpack_require__(75);

	var filters = _interopRequireWildcard(_filters);

	var _isPlainObject = __webpack_require__(61);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _keys = __webpack_require__(20);

	var _keys2 = _interopRequireDefault(_keys);

	var _forOwn = __webpack_require__(59);

	var _forOwn2 = _interopRequireDefault(_forOwn);

	var _Memory = __webpack_require__(37);

	var _Memory2 = _interopRequireDefault(_Memory);

	var _Memory3 = __webpack_require__(38);

	var _Memory4 = _interopRequireDefault(_Memory3);

	var _events = __webpack_require__(87);

	var _events2 = _interopRequireDefault(_events);

	var _Mode = __webpack_require__(22);

	var _Mode2 = _interopRequireDefault(_Mode);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function defaultValue(path, attrs) {
	  return 'Missing default translation for: ' + path;
	}

	var defaultOptions = {
	  locale: null, // current locale
	  locales: null, // available locales
	  namespace: null, // current namespace
	  fallbacks: {},
	  cache: new _Memory4.default({}),
	  adapter: new _Memory2.default({}),
	  defaultAdapter: _Memory2.default,
	  dotNotation: true,
	  mode: _Mode2.default.MAIN,
	  references: true,
	  variables: true,
	  combinations: true,
	  defaultValue: defaultValue,
	  filters: filters
	};

	// TODO add || syntax

	var Translate = function (_EventEmitter) {
	  _inherits(Translate, _EventEmitter);

	  function Translate() {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var callback = arguments.length <= 1 || arguments[1] === undefined ? function () {} : arguments[1];

	    _classCallCheck(this, Translate);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Translate).call(this));

	    _this._options = _extends({}, defaultOptions, options, {
	      filters: _extends({}, filters, options.filters)
	    });

	    // add user filters
	    var _this$_options = _this._options;
	    var locale = _this$_options.locale;
	    var adapter = _this$_options.adapter;
	    var DefaultAdapter = _this$_options.defaultAdapter;

	    if ((0, _isPlainObject2.default)(adapter)) {
	      var newAdapter = _this._options.adapter = new DefaultAdapter();
	      newAdapter.rehydrate(adapter);
	    }

	    _this._translation = new _Translation2.default(_this);

	    if (locale) {
	      _this.load(function (err) {
	        return callback(err, _this);
	      });
	    } else if (callback) {
	      callback(null, _this);
	    }
	    return _this;
	  }

	  _createClass(Translate, [{
	    key: '_clear',
	    value: function _clear() {
	      // clear cache
	      this.getOptions().cache.clear();

	      // todo remove current translations
	      this._translation = new _Translation2.default(this);
	    }
	  }, {
	    key: '_loadLocale',
	    value: function _loadLocale(locale, namespace) {
	      var _this2 = this;

	      var callback = arguments.length <= 2 || arguments[2] === undefined ? function () {} : arguments[2];

	      var adapter = this.getAdapter();
	      if (!locale) {
	        return callback(new Error('Locale is undefined'));
	      }

	      adapter.get(locale, namespace, function (err) {
	        var data = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	        if (err) {
	          return callback(err);
	        }

	        var options = _this2.getOptions();
	        if (namespace && namespace !== options.namespace) {
	          _this2.set(namespace, data);
	        } else {
	          _this2.set(data);
	        }

	        callback(null, data);
	      });
	    }
	  }, {
	    key: 'load',
	    value: function load(namespace) {
	      var callback = arguments.length <= 1 || arguments[1] === undefined ? function () {} : arguments[1];

	      if (typeof namespace === 'function') {
	        return this.load(null, namespace);
	      }

	      var options = this.getOptions();
	      this._loadLocale(options.locale, namespace || options.namespace, callback);
	    }
	  }, {
	    key: 'setLocale',
	    value: function setLocale(locale) {
	      var callback = arguments.length <= 1 || arguments[1] === undefined ? function () {} : arguments[1];

	      var options = this.getOptions();
	      if (options.locale === locale) {
	        return callback(null);
	      } else if (options.locales && options.locales.indexOf(locale) === -1) {
	        return callback(new Error('Locale is not allowed. Setup locales'));
	      }

	      this._options = _extends({}, this.getOptions(), {
	        locale: locale
	      });

	      this._clear();
	      this.load(callback);

	      this.emit('locale', locale);
	    }
	  }, {
	    key: 'get',
	    value: function get(path, attrs, defaultValue) {
	      var _this3 = this;

	      if ((0, _isPlainObject2.default)(path)) {
	        var _ret = function () {
	          var translated = {};
	          (0, _forOwn2.default)(path, function (value, key) {
	            translated[key] = _this3.get(value, attrs, defaultValue, value);
	          });

	          return {
	            v: translated
	          };
	        }();

	        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	      }

	      return this._translation.get(path, attrs, defaultValue, path);
	    }
	  }, {
	    key: 'set',
	    value: function set(name, value) {
	      return this._translation.set(name, value, this);
	    }
	  }, {
	    key: 'getOptions',
	    value: function getOptions() {
	      return this._options;
	    }
	  }, {
	    key: 'getLocale',
	    value: function getLocale() {
	      return this.getOptions().locale;
	    }
	  }, {
	    key: 'getCache',
	    value: function getCache() {
	      return this.getOptions().cache;
	    }
	  }, {
	    key: 'getAdapter',
	    value: function getAdapter() {
	      return this.getOptions().adapter;
	    }
	  }, {
	    key: 'setFilter',
	    value: function setFilter(type, fn) {
	      var _this4 = this;

	      if ((0, _isPlainObject2.default)(type)) {
	        (0, _forOwn2.default)(type, function (filter, filterType) {
	          _this4.setFilter(filterType, filter);
	        });

	        return;
	      }

	      this.getOptions().filters[type] = fn;
	    }
	  }, {
	    key: 'getFilter',
	    value: function getFilter(type) {
	      return this.getOptions().filters[type];
	    }
	  }]);

	  return Translate;
	}(_events2.default);

	exports.default = Translate;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _isPlainObject = __webpack_require__(61);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _startsWith = __webpack_require__(177);

	var _startsWith2 = _interopRequireDefault(_startsWith);

	var _find = __webpack_require__(17);

	var _find2 = _interopRequireDefault(_find);

	var _reject = __webpack_require__(176);

	var _reject2 = _interopRequireDefault(_reject);

	var _get = __webpack_require__(31);

	var _get2 = _interopRequireDefault(_get);

	var _reduce = __webpack_require__(175);

	var _reduce2 = _interopRequireDefault(_reduce);

	var _forOwn = __webpack_require__(59);

	var _forOwn2 = _interopRequireDefault(_forOwn);

	var _parser = __webpack_require__(84);

	var _parser2 = _interopRequireDefault(_parser);

	var _Mode = __webpack_require__(22);

	var _Mode2 = _interopRequireDefault(_Mode);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var EMPTY_TEXT = '';

	function resolveVariable(obj, path) {
	  var value = (0, _get2.default)(obj, path);

	  if (typeof value === 'function') {
	    var pos = path.indexOf('.');
	    if (pos === -1) {
	      return value();
	    }

	    var pathBefore = path.substr(0, pos);
	    var fnName = path.substr(pos + 1);

	    var parentObj = (0, _get2.default)(obj, pathBefore);
	    return parentObj[fnName]();
	  }

	  return value;
	}

	var Translation = function () {
	  function Translation(root, name, value) {
	    var _this = this;

	    _classCallCheck(this, Translation);

	    var isDefault = name && (0, _startsWith2.default)(name, '_');

	    this._name = isDefault ? name.substr(1) : name;
	    this._value = value;
	    this._root = root || this;

	    this._isDefault = isDefault;
	    this._children = [];

	    if ((0, _isPlainObject2.default)(value)) {
	      (0, _forOwn2.default)(value, function (itemValue, key) {
	        _this.set(key, itemValue);
	      });
	    }
	  }

	  _createClass(Translation, [{
	    key: 'getOptions',
	    value: function getOptions() {
	      return this._root.getOptions();
	    }
	  }, {
	    key: 'toString',
	    value: function toString() {
	      return this.get();
	    }
	  }, {
	    key: '_resolveValue',
	    value: function _resolveValue() {
	      var item = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	      var attrs = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	      var type = item.type;
	      var path = item.path;

	      var root = this._root;
	      var options = this.getOptions();

	      if (options.mode === _Mode2.default.ICU) {
	        // ICU is without combinations
	        if (options.references && type === 'variable') {
	          return root.get(path, attrs);
	        } else if (options.variables && type === 'reference') {
	          return resolveVariable(attrs, path);
	        }

	        return void 0;
	      }

	      if (options.references && type === 'reference') {
	        return root.get(path, attrs);
	      } else if (options.variables && type === 'variable') {
	        return resolveVariable(attrs, path);
	      } else if (options.combinations && type === 'combination') {
	        var referencePath = path[0].path;
	        var variablePath = path[1].path;

	        var varToRef = (0, _get2.default)(attrs, variablePath);

	        var refPath = varToRef ? referencePath + '.' + varToRef : referencePath;

	        return root.get(refPath, attrs);
	      }
	    }
	  }, {
	    key: '_buildText',
	    value: function _buildText(obj, attrs, smartValue) {
	      var _this2 = this;

	      if (!obj || obj.type !== 'main') {
	        return void 0;
	      }

	      return obj.values.map(function (part) {
	        var filters = part.filters;

	        if (part.type === 'text') {
	          return part.value;
	        }

	        if (part.type === 'smart') {
	          return smartValue;
	        }

	        var value = _this2._resolveValue(part, attrs);
	        if (!filters || !filters.length) {
	          return value || EMPTY_TEXT;
	        }

	        return (0, _reduce2.default)(filters, function (reducedValue, filter) {
	          return _this2._applyFilter(reducedValue, part, attrs, filter);
	        }, value);
	      }).join('');
	    }
	  }, {
	    key: '_applyFilter',
	    value: function _applyFilter(value, part, attrs, filter) {
	      var root = this._root;
	      var filterFn = root.getFilter(filter.type);
	      var args = filter.args || [];

	      return filterFn ? filterFn.call.apply(filterFn, [this, value, part, attrs, filter.metadata].concat(_toConsumableArray(args))) : value;
	    }
	  }, {
	    key: '_process',
	    value: function _process(value) {
	      var attrs = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	      var path = arguments[2];

	      if (!value) {
	        return value;
	      }

	      var cache = this.getOptions().cache;
	      if (cache.has(value)) {
	        var data = cache.get(value);
	        return this._buildText(data, attrs);
	      }

	      try {
	        var _data = _parser2.default.parse(value);
	        cache.set(value, _data);
	        return this._buildText(_data, attrs);
	      } catch (err) {
	        this._root.emit('err', err, path, value, attrs);
	        return void 0;
	      }
	    }
	  }, {
	    key: 'get',
	    value: function get(path) {
	      var attrs = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	      var defaultValue = arguments[2];
	      var fullPath = arguments[3];

	      var options = this.getOptions();

	      if (typeof attrs === 'string') {
	        return this.get(path, {}, attrs, fullPath);
	      }

	      if (typeof defaultValue === 'undefined') {
	        if (path && path === fullPath) {
	          this._root.emit('missingdefault', fullPath, attrs);
	        }

	        if (options.defaultValue) {
	          var _value = typeof options.defaultValue === 'function' ? options.defaultValue(fullPath, attrs) : options.defaultValue;

	          return this.get(path, attrs, _value, fullPath);
	        }
	      }

	      if ((0, _isPlainObject2.default)(path)) {
	        return this.get(null, path, defaultValue, fullPath);
	      }

	      if (path) {
	        var pos = path.indexOf('.');
	        if (options.dotNotation && pos !== -1) {
	          var name = path.substr(0, pos);
	          var newPath = path.substr(pos + 1);

	          var translation = this[name];
	          if (!translation) {
	            this._root.emit('missing', fullPath, attrs, defaultValue);
	            return this._process(defaultValue, attrs, fullPath);
	          }

	          return translation.get(newPath, attrs, defaultValue, fullPath);
	        }

	        if (!this[path]) {
	          this._root.emit('missing', fullPath, attrs, defaultValue);
	          return this._process(defaultValue, attrs, fullPath);
	        }

	        return this[path].get(null, attrs, defaultValue, fullPath);
	      }

	      var value = this._value;
	      if ((0, _isPlainObject2.default)(value)) {
	        // search default value
	        var defaultChild = (0, _find2.default)(this._children, function (child) {
	          return child._isDefault;
	        });
	        return defaultChild ? defaultChild.get(attrs) : void 0;
	      }

	      return this._process(value, attrs, fullPath);
	    }
	  }, {
	    key: 'set',
	    value: function set(name, value, obj) {
	      var _this3 = this;

	      if (!name) {
	        throw new Error('Name is undefined');
	      }

	      if ((0, _isPlainObject2.default)(name)) {
	        (0, _forOwn2.default)(name, function (nameValue, key) {
	          _this3.set(key, nameValue, obj);
	        });
	        return this;
	      }

	      var options = this.getOptions();
	      var pos = name.indexOf('.');
	      if (options.dotNotation && pos !== -1) {
	        var prefix = name.substr(0, pos);
	        var suffix = name.substr(pos + 1);

	        var data = _defineProperty({}, prefix, _defineProperty({}, suffix, value));

	        this.set(data, null, obj);
	        return this;
	      }

	      var translation = new Translation(this._root, name, value);
	      var key = translation._name;

	      // remove old translation
	      var currentTranslation = this[key];
	      if (currentTranslation) {
	        this._children = (0, _reject2.default)(this._children, function (child) {
	          return child === currentTranslation;
	        });
	      }

	      // save new translation
	      this._children.push(translation);
	      this[key] = translation;

	      if (obj) {
	        obj[key] = translation;
	      }

	      return this;
	    }
	  }]);

	  return Translation;
	}();

	exports.default = Translation;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.defaultResolvePath = defaultResolvePath;

	var _Adapter2 = __webpack_require__(10);

	var _Adapter3 = _interopRequireDefault(_Adapter2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function defaultResolvePath(locale, namespace, options) {
	  var ext = options.ext;
	  var path = options.path;


	  var fileName = ext ? '' + locale + ext : locale;

	  var namespacePath = namespace ? '/' + namespace.replace('.', '/') : '';

	  var namespaceFilePath = namespacePath ? namespacePath + '/' + fileName : fileName;

	  return path ? path + '/' + namespaceFilePath : namespaceFilePath;
	}

	var defaultOptions = {
	  path: void 0,
	  ext: void 0,
	  getData: void 0,
	  setData: void 0,
	  resolvePath: defaultResolvePath
	};

	var File = function (_Adapter) {
	  _inherits(File, _Adapter);

	  function File() {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    _classCallCheck(this, File);

	    if (!options.getData) {
	      throw new Error('You need to set getData');
	    }

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(File).call(this, _extends({}, defaultOptions, options)));
	  }

	  _createClass(File, [{
	    key: 'get',
	    value: function get(locale, namespace, callback) {
	      if (typeof namespace === 'function') {
	        return this.get(locale, null, namespace);
	      }

	      var options = this.getOptions();
	      var resolvePath = options.resolvePath;
	      var getData = options.getData;

	      var path = resolvePath(locale, namespace, options);

	      return getData(path, callback);
	    }
	  }, {
	    key: 'set',
	    value: function set(locale, value, namespace, callback) {
	      if (typeof namespace === 'function') {
	        return this.set(locale, value, null, namespace);
	      }

	      var options = this.getOptions();
	      var resolvePath = options.resolvePath;
	      var setData = options.setData;

	      if (!setData) {
	        return callback(new Error('You need to set option setData'));
	      }

	      var path = resolvePath(locale, namespace, options);

	      return setData(path, value, callback);
	    }
	  }]);

	  return File;
	}(_Adapter3.default);

	exports.default = File;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Adapter2 = __webpack_require__(10);

	var _Adapter3 = _interopRequireDefault(_Adapter2);

	var _get2 = __webpack_require__(31);

	var _get3 = _interopRequireDefault(_get2);

	var _set2 = __webpack_require__(63);

	var _set3 = _interopRequireDefault(_set2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var defaultOptions = {
	  data: {}
	};

	var Memory = function (_Adapter) {
	  _inherits(Memory, _Adapter);

	  function Memory() {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    _classCallCheck(this, Memory);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Memory).call(this, _extends({}, defaultOptions, options)));

	    _this._data = {};
	    return _this;
	  }

	  _createClass(Memory, [{
	    key: 'getPath',
	    value: function getPath(locale, namespace) {
	      return namespace ? namespace + '.' + locale : locale;
	    }
	  }, {
	    key: 'get',
	    value: function get(locale, namespace, callback) {
	      if (typeof namespace === 'function') {
	        return this.get(locale, void 0, namespace);
	      }

	      if (!locale) {
	        return callback(new Error('Locale is undefined'));
	      }

	      var path = this.getPath(locale, namespace);

	      return callback(null, (0, _get3.default)(this._data, path));
	    }
	  }, {
	    key: 'set',
	    value: function set(locale, value, namespace, callback) {
	      if (typeof namespace === 'function') {
	        return this.set(locale, value, void 0, namespace);
	      }

	      if (!locale) {
	        return callback(new Error('Locale is undefined'));
	      }

	      var path = this.getPath(locale, namespace);

	      (0, _set3.default)(this._data, path, value);

	      return callback(null);
	    }
	  }, {
	    key: 'dehydrate',
	    value: function dehydrate() {
	      return _extends({}, this._data);
	    }
	  }, {
	    key: 'rehydrate',
	    value: function rehydrate(state) {
	      this._data = state;
	    }
	  }]);

	  return Memory;
	}(_Adapter3.default);

	exports.default = Memory;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Cache2 = __webpack_require__(21);

	var _Cache3 = _interopRequireDefault(_Cache2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Memory = function (_Cache) {
	  _inherits(Memory, _Cache);

	  function Memory() {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    _classCallCheck(this, Memory);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Memory).call(this, options));

	    _this._data = {};
	    return _this;
	  }

	  _createClass(Memory, [{
	    key: 'get',
	    value: function get(key) {
	      return this._data[key];
	    }
	  }, {
	    key: 'has',
	    value: function has(key) {
	      return !!this._data[key];
	    }
	  }, {
	    key: 'set',
	    value: function set(key, value) {
	      this._data[key] = value;
	      return true;
	    }
	  }, {
	    key: 'clear',
	    value: function clear() {
	      this._data = {};
	      return true;
	    }
	  }, {
	    key: 'dehydrate',
	    value: function dehydrate() {
	      return this._data;
	    }
	  }, {
	    key: 'rehydrate',
	    value: function rehydrate(state) {
	      this._data = state;
	    }
	  }]);

	  return Memory;
	}(_Cache3.default);

	exports.default = Memory;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getPlural;

	var _plurals = __webpack_require__(185);

	var _plurals2 = _interopRequireDefault(_plurals);

	var _localeId = __webpack_require__(89);

	var _localeId2 = _interopRequireDefault(_localeId);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var cachePlural = null;

	function getPlural(locale) {
	  var defaultLanguage = arguments.length <= 1 || arguments[1] === undefined ? 'en' : arguments[1];

	  if (!cachePlural || cachePlural.locale !== locale) {
	    var _ref = (0, _localeId2.default)(locale) || {
	      language: defaultLanguage
	    };

	    var language = _ref.language;


	    cachePlural = {
	      locale: locale,
	      fn: _plurals2.default[language] || _plurals2.default[defaultLanguage]
	    };
	  }

	  return cachePlural.fn;
	}

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(5),
	    root = __webpack_require__(4);

	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');

	module.exports = Map;


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(11),
	    stackClear = __webpack_require__(157),
	    stackDelete = __webpack_require__(158),
	    stackGet = __webpack_require__(159),
	    stackHas = __webpack_require__(160),
	    stackSet = __webpack_require__(161);

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  this.__data__ = new ListCache(entries);
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;

	module.exports = Stack;


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(4);

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;


/***/ },
/* 43 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.reduce` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {*} [accumulator] The initial value.
	 * @param {boolean} [initAccum] Specify using the first element of `array` as
	 *  the initial value.
	 * @returns {*} Returns the accumulated value.
	 */
	function arrayReduce(array, iteratee, accumulator, initAccum) {
	  var index = -1,
	      length = array.length;

	  if (initAccum && length) {
	    accumulator = array[++index];
	  }
	  while (++index < length) {
	    accumulator = iteratee(accumulator, array[index], index, array);
	  }
	  return accumulator;
	}

	module.exports = arrayReduce;


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(106),
	    keys = __webpack_require__(20);

	/**
	 * The base implementation of `_.forOwn` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn(object, iteratee) {
	  return object && baseFor(object, iteratee, keys);
	}

	module.exports = baseForOwn;


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(24),
	    isKey = __webpack_require__(8),
	    toKey = __webpack_require__(9);

	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = isKey(path, object) ? [path] : castPath(path);

	  var index = 0,
	      length = path.length;

	  while (object != null && index < length) {
	    object = object[toKey(path[index++])];
	  }
	  return (index && index == length) ? object : undefined;
	}

	module.exports = baseGet;


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var getPrototype = __webpack_require__(51);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * The base implementation of `_.has` without support for deep paths.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHas(object, key) {
	  // Avoid a bug in IE 10-11 where objects with a [[Prototype]] of `null`,
	  // that are composed entirely of index properties, return `false` for
	  // `hasOwnProperty` checks of them.
	  return hasOwnProperty.call(object, key) ||
	    (typeof object == 'object' && key in object && getPrototype(object) === null);
	}

	module.exports = baseHas;


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var indexOfNaN = __webpack_require__(140);

	/**
	 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseIndexOf(array, value, fromIndex) {
	  if (value !== value) {
	    return indexOfNaN(array, fromIndex);
	  }
	  var index = fromIndex - 1,
	      length = array.length;

	  while (++index < length) {
	    if (array[index] === value) {
	      return index;
	    }
	  }
	  return -1;
	}

	module.exports = baseIndexOf;


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqualDeep = __webpack_require__(108),
	    isObject = __webpack_require__(3),
	    isObjectLike = __webpack_require__(6);

	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {boolean} [bitmask] The bitmask of comparison flags.
	 *  The bitmask may be composed of the following flags:
	 *     1 - Unordered comparison
	 *     2 - Partial comparison
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, customizer, bitmask, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
	}

	module.exports = baseIsEqual;


/***/ },
/* 49 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	module.exports = baseProperty;


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(94),
	    arraySome = __webpack_require__(100);

	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;

	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      arrLength = array.length,
	      othLength = other.length;

	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked) {
	    return stacked == other;
	  }
	  var index = -1,
	      result = true,
	      seen = (bitmask & UNORDERED_COMPARE_FLAG) ? new SetCache : undefined;

	  stack.set(array, other);

	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!arraySome(other, function(othValue, othIndex) {
	            if (!seen.has(othIndex) &&
	                (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
	              return seen.add(othIndex);
	            }
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(
	          arrValue === othValue ||
	            equalFunc(arrValue, othValue, customizer, bitmask, stack)
	        )) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  return result;
	}

	module.exports = equalArrays;


/***/ },
/* 51 */
/***/ function(module, exports) {

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetPrototype = Object.getPrototypeOf;

	/**
	 * Gets the `[[Prototype]]` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {null|Object} Returns the `[[Prototype]]`.
	 */
	function getPrototype(value) {
	  return nativeGetPrototype(Object(value));
	}

	module.exports = getPrototype;


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var DataView = __webpack_require__(90),
	    Map = __webpack_require__(40),
	    Promise = __webpack_require__(92),
	    Set = __webpack_require__(93),
	    WeakMap = __webpack_require__(96),
	    toSource = __webpack_require__(56);

	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag = '[object Set]',
	    weakMapTag = '[object WeakMap]';

	var dataViewTag = '[object DataView]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function getTag(value) {
	  return objectToString.call(value);
	}

	// Fallback for data views, maps, sets, and weak maps in IE 11,
	// for data views in Edge, and promises in Node.js.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = objectToString.call(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : undefined;

	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}

	module.exports = getTag;


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(3);

	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject(value);
	}

	module.exports = isStrictComparable;


/***/ },
/* 54 */
/***/ function(module, exports) {

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);

	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	module.exports = mapToArray;


/***/ },
/* 55 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `matchesProperty` for source values suitable
	 * for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function matchesStrictComparable(key, srcValue) {
	  return function(object) {
	    if (object == null) {
	      return false;
	    }
	    return object[key] === srcValue &&
	      (srcValue !== undefined || (key in Object(object)));
	  };
	}

	module.exports = matchesStrictComparable;


/***/ },
/* 56 */
/***/ function(module, exports) {

	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	module.exports = toSource;


/***/ },
/* 57 */
/***/ function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 * var other = { 'user': 'fred' };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	module.exports = eq;


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var arrayEach = __webpack_require__(97),
	    baseEach = __webpack_require__(13),
	    baseIteratee = __webpack_require__(7),
	    isArray = __webpack_require__(1);

	/**
	 * Iterates over elements of `collection` and invokes `iteratee` for each element.
	 * The iteratee is invoked with three arguments: (value, index|key, collection).
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * **Note:** As with other "Collections" methods, objects with a "length"
	 * property are iterated like arrays. To avoid this behavior use `_.forIn`
	 * or `_.forOwn` for object iteration.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @alias each
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	 * @returns {Array|Object} Returns `collection`.
	 * @see _.forEachRight
	 * @example
	 *
	 * _([1, 2]).forEach(function(value) {
	 *   console.log(value);
	 * });
	 * // => Logs `1` then `2`.
	 *
	 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
	 *   console.log(key);
	 * });
	 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
	 */
	function forEach(collection, iteratee) {
	  var func = isArray(collection) ? arrayEach : baseEach;
	  return func(collection, baseIteratee(iteratee, 3));
	}

	module.exports = forEach;


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var baseForOwn = __webpack_require__(44),
	    baseIteratee = __webpack_require__(7);

	/**
	 * Iterates over own enumerable string keyed properties of an object and
	 * invokes `iteratee` for each property. The iteratee is invoked with three
	 * arguments: (value, key, object). Iteratee functions may exit iteration
	 * early by explicitly returning `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.3.0
	 * @category Object
	 * @param {Object} object The object to iterate over.
	 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 * @see _.forOwnRight
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.forOwn(new Foo, function(value, key) {
	 *   console.log(key);
	 * });
	 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
	 */
	function forOwn(object, iteratee) {
	  return object && baseForOwn(object, baseIteratee(iteratee, 3));
	}

	module.exports = forOwn;


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLikeObject = __webpack_require__(169);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}

	module.exports = isArguments;


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var getPrototype = __webpack_require__(51),
	    isHostObject = __webpack_require__(26),
	    isObjectLike = __webpack_require__(6);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object,
	 *  else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) ||
	      objectToString.call(value) != objectTag || isHostObject(value)) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return (typeof Ctor == 'function' &&
	    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
	}

	module.exports = isPlainObject;


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(1),
	    isObjectLike = __webpack_require__(6);

	/** `Object#toString` result references. */
	var stringTag = '[object String]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `String` primitive or object.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isString('abc');
	 * // => true
	 *
	 * _.isString(1);
	 * // => false
	 */
	function isString(value) {
	  return typeof value == 'string' ||
	    (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);
	}

	module.exports = isString;


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var baseSet = __webpack_require__(115);

	/**
	 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
	 * it's created. Arrays are created for missing index properties while objects
	 * are created for all other missing properties. Use `_.setWith` to customize
	 * `path` creation.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to modify.
	 * @param {Array|string} path The path of the property to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.set(object, 'a[0].b.c', 4);
	 * console.log(object.a[0].b.c);
	 * // => 4
	 *
	 * _.set(object, ['x', '0', 'y', 'z'], 5);
	 * console.log(object.x[0].y.z);
	 * // => 5
	 */
	function set(object, path, value) {
	  return object == null ? object : baseSet(object, path, value);
	}

	module.exports = set;


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var toFinite = __webpack_require__(178);

	/**
	 * Converts `value` to an integer.
	 *
	 * **Note:** This function is loosely based on
	 * [`ToInteger`](http://www.ecma-international.org/ecma-262/6.0/#sec-tointeger).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted integer.
	 * @example
	 *
	 * _.toInteger(3.2);
	 * // => 3
	 *
	 * _.toInteger(Number.MIN_VALUE);
	 * // => 0
	 *
	 * _.toInteger(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toInteger('3.2');
	 * // => 3
	 */
	function toInteger(value) {
	  var result = toFinite(value),
	      remainder = result % 1;

	  return result === result ? (remainder ? result - remainder : result) : 0;
	}

	module.exports = toInteger;


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Adapter2 = __webpack_require__(10);

	var _Adapter3 = _interopRequireDefault(_Adapter2);

	var _File = __webpack_require__(36);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function defaultGetData(url, parse, callback) {
	  try {
	    (function () {
	      var xhr = new (XMLHttpRequest || ActiveXObject)('MSXML2.XMLHTTP.3.0');
	      xhr.onreadystatechange = function () {
	        if (xhr.readyState > 3) {
	          callback(null, parse(xhr.responseText));
	        }
	      };

	      xhr.open('GET', url, true);
	      xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	      xhr.send();
	    })();
	  } catch (e) {
	    callback(e);
	  }
	}

	var defaultOptions = {
	  path: void 0,
	  resolvePath: _File.defaultResolvePath,
	  parse: JSON.parse,
	  ext: '.json',
	  getData: defaultGetData,
	  setData: void 0
	};

	var XHR = function (_Adapter) {
	  _inherits(XHR, _Adapter);

	  function XHR() {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    _classCallCheck(this, XHR);

	    if (!options.path) {
	      throw new Error('You need to set path');
	    }

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(XHR).call(this, _extends({}, defaultOptions, options)));
	  }

	  _createClass(XHR, [{
	    key: 'get',
	    value: function get(locale, namespace, callback) {
	      if (typeof namespace === 'function') {
	        return this.get(locale, null, namespace);
	      }

	      var options = this.getOptions();
	      var resolvePath = options.resolvePath;
	      var getData = options.getData;
	      var parse = options.parse;

	      var path = resolvePath(locale, namespace, options);

	      return getData(path, parse, callback);
	    }
	  }, {
	    key: 'set',
	    value: function set(locale, value, namespace, callback) {
	      if (typeof namespace === 'function') {
	        return this.set(locale, value, null, namespace);
	      }

	      throw new Error('XHR adapter is read only');
	    }
	  }]);

	  return XHR;
	}(_Adapter3.default);

	exports.default = XHR;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.XHR = exports.Memory = exports.File = exports.Adapter = undefined;

	var _Adapter = __webpack_require__(10);

	var _Adapter2 = _interopRequireDefault(_Adapter);

	var _File = __webpack_require__(36);

	var _File2 = _interopRequireDefault(_File);

	var _Memory = __webpack_require__(37);

	var _Memory2 = _interopRequireDefault(_Memory);

	var _XHR = __webpack_require__(65);

	var _XHR2 = _interopRequireDefault(_XHR);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Adapter = _Adapter2.default;
	exports.File = _File2.default;
	exports.Memory = _Memory2.default;
	exports.XHR = _XHR2.default;

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Cache2 = __webpack_require__(21);

	var _Cache3 = _interopRequireDefault(_Cache2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Dummy = function (_Cache) {
	  _inherits(Dummy, _Cache);

	  function Dummy() {
	    _classCallCheck(this, Dummy);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Dummy).apply(this, arguments));
	  }

	  _createClass(Dummy, [{
	    key: 'get',
	    value: function get(key) {
	      return void 0;
	    }
	  }, {
	    key: 'has',
	    value: function has(key) {
	      return false;
	    }
	  }, {
	    key: 'set',
	    value: function set(key, value) {
	      return true;
	    }
	  }, {
	    key: 'clear',
	    value: function clear() {
	      return true;
	    }
	  }, {
	    key: 'dehydrate',
	    value: function dehydrate() {
	      return void 0;
	    }
	  }, {
	    key: 'rehydrate',
	    value: function rehydrate(state) {
	      return void 0;
	    }
	  }]);

	  return Dummy;
	}(_Cache3.default);

	exports.default = Dummy;

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Memory = exports.Dummy = exports.Cache = undefined;

	var _Cache = __webpack_require__(21);

	var _Cache2 = _interopRequireDefault(_Cache);

	var _Dummy = __webpack_require__(67);

	var _Dummy2 = _interopRequireDefault(_Dummy);

	var _Memory = __webpack_require__(38);

	var _Memory2 = _interopRequireDefault(_Memory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Cache = _Cache2.default;
	exports.Dummy = _Dummy2.default;
	exports.Memory = _Memory2.default;

/***/ },
/* 69 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  MALE: 'male',
	  FEMALE: 'female',
	  OTHER: 'other'
	};

/***/ },
/* 70 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  ZERO: 'zero',
	  ONE: 'one',
	  TWO: 'two',
	  FEW: 'few',
	  MANY: 'many',
	  OTHER: 'other'
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (value, part, attrs, metadata) {
	  var _this = this;

	  var params = {};

	  for (var _len = arguments.length, args = Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
	    args[_key - 4] = arguments[_key];
	  }

	  (0, _forEach2.default)(args, function (param) {
	    var from = param.from;
	    var to = param.to;

	    var paramValue = _this._resolveValue(from, attrs);

	    (0, _set2.default)(params, to, paramValue);
	  });

	  return this._resolveValue(part, params);
	};

	var _set = __webpack_require__(63);

	var _set2 = _interopRequireDefault(_set);

	var _forEach = __webpack_require__(58);

	var _forEach2 = _interopRequireDefault(_forEach);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (value) {
	  return (0, _camelCase2.default)(value);
	};

	var _camelCase = __webpack_require__(164);

	var _camelCase2 = _interopRequireDefault(_camelCase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (value) {
	  return (0, _capitalize2.default)(value);
	};

	var _capitalize = __webpack_require__(30);

	var _capitalize2 = _interopRequireDefault(_capitalize);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (value) {
	  return (0, _escape2.default)(value);
	};

	var _escape = __webpack_require__(166);

	var _escape2 = _interopRequireDefault(_escape);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.lowerCase = exports.upperCase = exports.escape = exports.truncate = exports.trim = exports.camelCase = exports.ordinal = exports.plural = exports.select = exports.as = exports.capitalize = undefined;

	var _capitalize = __webpack_require__(73);

	var _capitalize2 = _interopRequireDefault(_capitalize);

	var _as = __webpack_require__(71);

	var _as2 = _interopRequireDefault(_as);

	var _select = __webpack_require__(79);

	var _select2 = _interopRequireDefault(_select);

	var _plural = __webpack_require__(78);

	var _plural2 = _interopRequireDefault(_plural);

	var _ordinal = __webpack_require__(77);

	var _ordinal2 = _interopRequireDefault(_ordinal);

	var _camelCase = __webpack_require__(72);

	var _camelCase2 = _interopRequireDefault(_camelCase);

	var _trim = __webpack_require__(80);

	var _trim2 = _interopRequireDefault(_trim);

	var _truncate = __webpack_require__(81);

	var _truncate2 = _interopRequireDefault(_truncate);

	var _escape = __webpack_require__(74);

	var _escape2 = _interopRequireDefault(_escape);

	var _upperCase = __webpack_require__(82);

	var _upperCase2 = _interopRequireDefault(_upperCase);

	var _lowerCase = __webpack_require__(76);

	var _lowerCase2 = _interopRequireDefault(_lowerCase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.capitalize = _capitalize2.default;
	exports.as = _as2.default;
	exports.select = _select2.default;
	exports.plural = _plural2.default;
	exports.ordinal = _ordinal2.default;
	exports.camelCase = _camelCase2.default;
	exports.trim = _trim2.default;
	exports.truncate = _truncate2.default;
	exports.escape = _escape2.default;
	exports.upperCase = _upperCase2.default;
	exports.lowerCase = _lowerCase2.default;

/***/ },
/* 76 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (value) {
	  return typeof value === 'string' ? value.toLowerCase() : value;
	};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (value, part, attrs, metadata) {
	  var root = this._root;
	  var locale = root.getOptions().locale;
	  var numberValue = Number(value);

	  var plural = (0, _getPlural2.default)(locale, 'en');
	  var pluralValue = plural(numberValue, true);
	  var offset = getValue(metadata, 'offset', 0);

	  var smartValue = offset ? numberValue - offset : value;

	  // try to find exact value
	  var exactKey = '=' + numberValue;

	  var option = null;
	  var defaultOption = null;

	  for (var _len = arguments.length, args = Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
	    args[_key - 4] = arguments[_key];
	  }

	  var exactOption = (0, _find2.default)(args, function (arg) {
	    if (arg.type !== 'pair') {
	      return false;
	    }

	    var key = typeof arg.key === 'string' ? arg.key.toLowerCase() : arg.key;

	    if (!key || key === 'other') {
	      defaultOption = arg;
	    } else if (key === exactKey) {
	      return true;
	    } else if (key === pluralValue) {
	      option = arg;
	    }
	  });

	  if (exactOption) {
	    return this._buildText(exactOption.value, attrs, smartValue);
	  } else if (option) {
	    return this._buildText(option.value, attrs, smartValue);
	  } else if (defaultOption) {
	    return this._buildText(defaultOption.value, attrs, smartValue);
	  }
	};

	var _find = __webpack_require__(17);

	var _find2 = _interopRequireDefault(_find);

	var _getPlural = __webpack_require__(39);

	var _getPlural2 = _interopRequireDefault(_getPlural);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getValue(data, key, defaultValue) {
	  var items = data || [];
	  var option = (0, _find2.default)(items, function (item) {
	    return item.key === key;
	  });

	  return option ? option.value : defaultValue;
	}

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (value, part, attrs, metadata) {
	  var root = this._root;
	  var locale = root.getOptions().locale;
	  var numberValue = Number(value);

	  var plural = (0, _getPlural2.default)(locale, 'en');
	  var pluralValue = plural(numberValue);
	  var offset = getValue(metadata, 'offset', 0);

	  var smartValue = offset ? numberValue - offset : value;

	  // try to find exact value
	  var exactKey = '=' + numberValue;

	  var option = null;
	  var defaultOption = null;

	  for (var _len = arguments.length, args = Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
	    args[_key - 4] = arguments[_key];
	  }

	  var exactOption = (0, _find2.default)(args, function (arg) {
	    if (arg.type !== 'pair') {
	      return false;
	    }

	    var key = typeof arg.key === 'string' ? arg.key.toLowerCase() : arg.key;

	    if (!key || key === 'other') {
	      defaultOption = arg;
	    } else if (key === exactKey) {
	      return true;
	    } else if (key === pluralValue) {
	      option = arg;
	    }
	  });

	  if (exactOption) {
	    return this._buildText(exactOption.value, attrs, smartValue);
	  } else if (option) {
	    return this._buildText(option.value, attrs, smartValue);
	  } else if (defaultOption) {
	    return this._buildText(defaultOption.value, attrs, smartValue);
	  }
	};

	var _find = __webpack_require__(17);

	var _find2 = _interopRequireDefault(_find);

	var _getPlural = __webpack_require__(39);

	var _getPlural2 = _interopRequireDefault(_getPlural);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getValue(data, key, defaultValue) {
	  var items = data || [];
	  var option = (0, _find2.default)(items, function (item) {
	    return item.key === key;
	  });

	  return option ? option.value : defaultValue;
	}

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (value, part, attrs, metadata) {
	  var defaultOption = null;

	  for (var _len = arguments.length, args = Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
	    args[_key - 4] = arguments[_key];
	  }

	  var option = (0, _find2.default)(args, function (arg) {
	    if (arg.type !== 'pair') {
	      return false;
	    }

	    if (!arg.key || arg.key === 'other') {
	      defaultOption = arg;
	      return false;
	    }

	    return arg.key === value;
	  });

	  if (option) {
	    return this._buildText(option.value, attrs, value);
	  }

	  if (defaultOption) {
	    return this._buildText(defaultOption.value, attrs, value);
	  }
	};

	var _find = __webpack_require__(17);

	var _find2 = _interopRequireDefault(_find);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (value) {
	  return (0, _trim2.default)(value);
	};

	var _trim = __webpack_require__(181);

	var _trim2 = _interopRequireDefault(_trim);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (value, part, attrs, metadata) {
	  var length = arguments.length <= 4 || arguments[4] === undefined ? 30 : arguments[4];
	  var omission = arguments.length <= 5 || arguments[5] === undefined ? '...' : arguments[5];

	  return (0, _truncate2.default)(value, {
	    length: length,
	    omission: omission
	  });
	};

	var _truncate = __webpack_require__(182);

	var _truncate2 = _interopRequireDefault(_truncate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 82 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (value) {
	  return typeof value === 'string' ? value.toUpperCase() : value;
	};

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getInstance;

	var _Translate = __webpack_require__(34);

	var _Translate2 = _interopRequireDefault(_Translate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var instance = null;

	function getInstance(options) {
	  if (instance) {
	    return instance;
	  }

	  if (!options) {
	    throw new Error('You need to initialize singleton instance first. Call getInstance with options.');
	  }

	  instance = new _Translate2.default(options);
	  return instance;
	}

/***/ },
/* 84 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function () {
	  "use strict";

	  /*
	   * Generated by PEG.js 0.9.0.
	   *
	   * http://pegjs.org/
	   */

	  function peg$subclass(child, parent) {
	    function ctor() {
	      this.constructor = child;
	    }
	    ctor.prototype = parent.prototype;
	    child.prototype = new ctor();
	  }

	  function peg$SyntaxError(message, expected, found, location) {
	    this.message = message;
	    this.expected = expected;
	    this.found = found;
	    this.location = location;
	    this.name = "SyntaxError";

	    if (typeof Error.captureStackTrace === "function") {
	      Error.captureStackTrace(this, peg$SyntaxError);
	    }
	  }

	  peg$subclass(peg$SyntaxError, Error);

	  function peg$parse(input) {
	    var options = arguments.length > 1 ? arguments[1] : {},
	        parser = this,
	        peg$FAILED = {},
	        peg$startRuleFunctions = { start: peg$parsestart },
	        peg$startRuleFunction = peg$parsestart,
	        peg$c0 = /^[ \t\n\r]/,
	        peg$c1 = { type: "class", value: "[ \\t\\n\\r]", description: "[ \\t\\n\\r]" },
	        peg$c2 = { type: "other", description: "whitespace" },
	        peg$c3 = { type: "other", description: "optionalWhitespace" },
	        peg$c4 = "false",
	        peg$c5 = { type: "literal", value: "false", description: "\"false\"" },
	        peg$c6 = function peg$c6() {
	      return false;
	    },
	        peg$c7 = "null",
	        peg$c8 = { type: "literal", value: "null", description: "\"null\"" },
	        peg$c9 = function peg$c9() {
	      return null;
	    },
	        peg$c10 = "undefined",
	        peg$c11 = { type: "literal", value: "undefined", description: "\"undefined\"" },
	        peg$c12 = function peg$c12() {
	      return void 0;
	    },
	        peg$c13 = "true",
	        peg$c14 = { type: "literal", value: "true", description: "\"true\"" },
	        peg$c15 = function peg$c15() {
	      return true;
	    },
	        peg$c16 = { type: "other", description: "number" },
	        peg$c17 = "-",
	        peg$c18 = { type: "literal", value: "-", description: "\"-\"" },
	        peg$c19 = function peg$c19() {
	      return parseFloat(text());
	    },
	        peg$c20 = /^[0-9]/,
	        peg$c21 = { type: "class", value: "[0-9]", description: "[0-9]" },
	        peg$c22 = /^[0-9a-f]/i,
	        peg$c23 = { type: "class", value: "[0-9a-f]i", description: "[0-9a-f]i" },
	        peg$c24 = /^[eE]/,
	        peg$c25 = { type: "class", value: "[eE]", description: "[eE]" },
	        peg$c26 = "+",
	        peg$c27 = { type: "literal", value: "+", description: "\"+\"" },
	        peg$c28 = ".",
	        peg$c29 = { type: "literal", value: ".", description: "\".\"" },
	        peg$c30 = "0",
	        peg$c31 = { type: "literal", value: "0", description: "\"0\"" },
	        peg$c32 = /^[1-9]/,
	        peg$c33 = { type: "class", value: "[1-9]", description: "[1-9]" },
	        peg$c34 = /^[a-z0-9_]/i,
	        peg$c35 = { type: "class", value: "[a-z0-9_]i", description: "[a-z0-9_]i" },
	        peg$c36 = /^[a-z0-9\-_]/i,
	        peg$c37 = { type: "class", value: "[a-z0-9-_]i", description: "[a-z0-9-_]i" },
	        peg$c38 = { type: "other", description: "property" },
	        peg$c39 = { type: "other", description: "reference" },
	        peg$c40 = function peg$c40(path) {
	      return {
	        type: 'reference',
	        path: path
	      };
	    },
	        peg$c41 = { type: "other", description: "variable" },
	        peg$c42 = "$",
	        peg$c43 = { type: "literal", value: "$", description: "\"$\"" },
	        peg$c44 = function peg$c44(reference) {
	      return {
	        type: 'variable',
	        path: reference.path
	      };
	    },
	        peg$c45 = function peg$c45(reference, variable) {
	      return {
	        type: 'combination',
	        path: [reference, variable]
	      };
	    },
	        peg$c46 = "\\n",
	        peg$c47 = { type: "literal", value: "\\n", description: "\"\\\\n\"" },
	        peg$c48 = function peg$c48() {
	      return '\n';
	    },
	        peg$c49 = "\\t",
	        peg$c50 = { type: "literal", value: "\\t", description: "\"\\\\t\"" },
	        peg$c51 = function peg$c51() {
	      return '\t';
	    },
	        peg$c52 = "\\r",
	        peg$c53 = { type: "literal", value: "\\r", description: "\"\\\\r\"" },
	        peg$c54 = function peg$c54() {
	      return '\r';
	    },
	        peg$c55 = "\\\\",
	        peg$c56 = { type: "literal", value: "\\\\", description: "\"\\\\\\\\\"" },
	        peg$c57 = function peg$c57() {
	      return '\\';
	    },
	        peg$c58 = "\\u",
	        peg$c59 = { type: "literal", value: "\\u", description: "\"\\\\u\"" },
	        peg$c60 = function peg$c60(digits) {
	      return String.fromCharCode(parseInt(digits, 16));
	    },
	        peg$c61 = /^[^{}:,# \t\n\r\\]/,
	        peg$c62 = { type: "class", value: "[^{}:,# \\t\\n\\r\\\\]", description: "[^{}:,# \\t\\n\\r\\\\]" },
	        peg$c63 = "\\{",
	        peg$c64 = { type: "literal", value: "\\{", description: "\"\\\\{\"" },
	        peg$c65 = function peg$c65() {
	      return "{";
	    },
	        peg$c66 = "\\}",
	        peg$c67 = { type: "literal", value: "\\}", description: "\"\\\\}\"" },
	        peg$c68 = function peg$c68() {
	      return "}";
	    },
	        peg$c69 = "\\#",
	        peg$c70 = { type: "literal", value: "\\#", description: "\"\\\\#\"" },
	        peg$c71 = function peg$c71() {
	      return '\\#';
	    },
	        peg$c72 = /^[:,]/,
	        peg$c73 = { type: "class", value: "[:,]", description: "[:,]" },
	        peg$c74 = "#",
	        peg$c75 = { type: "literal", value: "#", description: "\"#\"" },
	        peg$c76 = function peg$c76() {
	      return {
	        type: 'smart'
	      };
	    },
	        peg$c77 = function peg$c77(chars) {
	      return chars.join('');
	    },
	        peg$c78 = /^[^"\\]/,
	        peg$c79 = { type: "class", value: "[^\"\\\\]", description: "[^\"\\\\]" },
	        peg$c80 = "\\\"",
	        peg$c81 = { type: "literal", value: "\\\"", description: "\"\\\\\\\"\"" },
	        peg$c82 = function peg$c82() {
	      return '"';
	    },
	        peg$c83 = { type: "other", description: "string" },
	        peg$c84 = "\"",
	        peg$c85 = { type: "literal", value: "\"", description: "\"\\\"\"" },
	        peg$c86 = function peg$c86(chars) {
	      return chars.join("");
	    },
	        peg$c87 = /^[^'\\]/,
	        peg$c88 = { type: "class", value: "[^'\\\\]", description: "[^'\\\\]" },
	        peg$c89 = "\\'",
	        peg$c90 = { type: "literal", value: "\\'", description: "\"\\\\'\"" },
	        peg$c91 = function peg$c91() {
	      return "'";
	    },
	        peg$c92 = "'",
	        peg$c93 = { type: "literal", value: "'", description: "\"'\"" },
	        peg$c94 = "{",
	        peg$c95 = { type: "literal", value: "{", description: "\"{\"" },
	        peg$c96 = "}",
	        peg$c97 = { type: "literal", value: "}", description: "\"}\"" },
	        peg$c98 = function peg$c98(value) {
	      return {
	        type: 'pair',
	        key: null,
	        value: value
	      };
	    },
	        peg$c99 = ":",
	        peg$c100 = { type: "literal", value: ":", description: "\":\"" },
	        peg$c101 = function peg$c101(key, value) {
	      value.key = key;
	      return value;
	    },
	        peg$c102 = { type: "other", description: "argument" },
	        peg$c103 = { type: "other", description: "extended argument" },
	        peg$c104 = function peg$c104(values) {
	      return {
	        type: 'main',
	        values: values
	      };
	    },
	        peg$c105 = function peg$c105(value) {
	      return {
	        type: 'text',
	        value: value
	      };
	    },
	        peg$c106 = "as",
	        peg$c107 = { type: "literal", value: "as", description: "\"as\"" },
	        peg$c108 = function peg$c108(from, to) {
	      return {
	        from: from,
	        to: to.path
	      };
	    },
	        peg$c109 = ",",
	        peg$c110 = { type: "literal", value: ",", description: "\",\"" },
	        peg$c111 = function peg$c111(as) {
	      return as;
	    },
	        peg$c112 = function peg$c112(first, other) {
	      return {
	        type: 'as',
	        args: [first].concat(other)
	      };
	    },
	        peg$c113 = function peg$c113(key, value) {
	      return { key: key, value: value };
	    },
	        peg$c114 = function peg$c114(meta) {
	      return meta;
	    },
	        peg$c115 = function peg$c115(meta, other) {
	      return [meta].concat(other);
	    },
	        peg$c116 = function peg$c116(arg) {
	      return arg;
	    },
	        peg$c117 = function peg$c117(arg, args) {
	      return [arg].concat(args);
	    },
	        peg$c118 = function peg$c118(metadata, args) {
	      return { args: args, metadata: metadata };
	    },
	        peg$c119 = function peg$c119(type, argsMetadata) {
	      return {
	        type: type,
	        args: argsMetadata && argsMetadata.args,
	        metadata: argsMetadata && argsMetadata.metadata
	      };
	    },
	        peg$c120 = "|",
	        peg$c121 = { type: "literal", value: "|", description: "\"|\"" },
	        peg$c122 = function peg$c122(filter) {
	      return filter;
	    },
	        peg$c123 = /^[,|]/,
	        peg$c124 = { type: "class", value: "[,|]", description: "[,|]" },
	        peg$c125 = function peg$c125(filter, other) {
	      return [filter].concat(other);
	    },
	        peg$c126 = function peg$c126(path, filters) {
	      return {
	        type: path.type,
	        path: path.path,
	        filters: filters
	      };
	    },
	        peg$currPos = 0,
	        peg$savedPos = 0,
	        peg$posDetailsCache = [{ line: 1, column: 1, seenCR: false }],
	        peg$maxFailPos = 0,
	        peg$maxFailExpected = [],
	        peg$silentFails = 0,
	        peg$result;

	    if ("startRule" in options) {
	      if (!(options.startRule in peg$startRuleFunctions)) {
	        throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
	      }

	      peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
	    }

	    function text() {
	      return input.substring(peg$savedPos, peg$currPos);
	    }

	    function location() {
	      return peg$computeLocation(peg$savedPos, peg$currPos);
	    }

	    function expected(description) {
	      throw peg$buildException(null, [{ type: "other", description: description }], input.substring(peg$savedPos, peg$currPos), peg$computeLocation(peg$savedPos, peg$currPos));
	    }

	    function error(message) {
	      throw peg$buildException(message, null, input.substring(peg$savedPos, peg$currPos), peg$computeLocation(peg$savedPos, peg$currPos));
	    }

	    function peg$computePosDetails(pos) {
	      var details = peg$posDetailsCache[pos],
	          p,
	          ch;

	      if (details) {
	        return details;
	      } else {
	        p = pos - 1;
	        while (!peg$posDetailsCache[p]) {
	          p--;
	        }

	        details = peg$posDetailsCache[p];
	        details = {
	          line: details.line,
	          column: details.column,
	          seenCR: details.seenCR
	        };

	        while (p < pos) {
	          ch = input.charAt(p);
	          if (ch === "\n") {
	            if (!details.seenCR) {
	              details.line++;
	            }
	            details.column = 1;
	            details.seenCR = false;
	          } else if (ch === "\r" || ch === "\u2028" || ch === "\u2029") {
	            details.line++;
	            details.column = 1;
	            details.seenCR = true;
	          } else {
	            details.column++;
	            details.seenCR = false;
	          }

	          p++;
	        }

	        peg$posDetailsCache[pos] = details;
	        return details;
	      }
	    }

	    function peg$computeLocation(startPos, endPos) {
	      var startPosDetails = peg$computePosDetails(startPos),
	          endPosDetails = peg$computePosDetails(endPos);

	      return {
	        start: {
	          offset: startPos,
	          line: startPosDetails.line,
	          column: startPosDetails.column
	        },
	        end: {
	          offset: endPos,
	          line: endPosDetails.line,
	          column: endPosDetails.column
	        }
	      };
	    }

	    function peg$fail(expected) {
	      if (peg$currPos < peg$maxFailPos) {
	        return;
	      }

	      if (peg$currPos > peg$maxFailPos) {
	        peg$maxFailPos = peg$currPos;
	        peg$maxFailExpected = [];
	      }

	      peg$maxFailExpected.push(expected);
	    }

	    function peg$buildException(message, expected, found, location) {
	      function cleanupExpected(expected) {
	        var i = 1;

	        expected.sort(function (a, b) {
	          if (a.description < b.description) {
	            return -1;
	          } else if (a.description > b.description) {
	            return 1;
	          } else {
	            return 0;
	          }
	        });

	        while (i < expected.length) {
	          if (expected[i - 1] === expected[i]) {
	            expected.splice(i, 1);
	          } else {
	            i++;
	          }
	        }
	      }

	      function buildMessage(expected, found) {
	        function stringEscape(s) {
	          function hex(ch) {
	            return ch.charCodeAt(0).toString(16).toUpperCase();
	          }

	          return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\x08/g, '\\b').replace(/\t/g, '\\t').replace(/\n/g, '\\n').replace(/\f/g, '\\f').replace(/\r/g, '\\r').replace(/[\x00-\x07\x0B\x0E\x0F]/g, function (ch) {
	            return '\\x0' + hex(ch);
	          }).replace(/[\x10-\x1F\x80-\xFF]/g, function (ch) {
	            return '\\x' + hex(ch);
	          }).replace(/[\u0100-\u0FFF]/g, function (ch) {
	            return "\\u0" + hex(ch);
	          }).replace(/[\u1000-\uFFFF]/g, function (ch) {
	            return "\\u" + hex(ch);
	          });
	        }

	        var expectedDescs = new Array(expected.length),
	            expectedDesc,
	            foundDesc,
	            i;

	        for (i = 0; i < expected.length; i++) {
	          expectedDescs[i] = expected[i].description;
	        }

	        expectedDesc = expected.length > 1 ? expectedDescs.slice(0, -1).join(", ") + " or " + expectedDescs[expected.length - 1] : expectedDescs[0];

	        foundDesc = found ? "\"" + stringEscape(found) + "\"" : "end of input";

	        return "Expected " + expectedDesc + " but " + foundDesc + " found.";
	      }

	      if (expected !== null) {
	        cleanupExpected(expected);
	      }

	      return new peg$SyntaxError(message !== null ? message : buildMessage(expected, found), expected, found, location);
	    }

	    function peg$parsestart() {
	      var s0;

	      s0 = peg$parseparse();

	      return s0;
	    }

	    function peg$parsewsChar() {
	      var s0;

	      if (peg$c0.test(input.charAt(peg$currPos))) {
	        s0 = input.charAt(peg$currPos);
	        peg$currPos++;
	      } else {
	        s0 = peg$FAILED;
	        if (peg$silentFails === 0) {
	          peg$fail(peg$c1);
	        }
	      }

	      return s0;
	    }

	    function peg$parsews() {
	      var s0, s1;

	      peg$silentFails++;
	      s0 = [];
	      if (peg$c0.test(input.charAt(peg$currPos))) {
	        s1 = input.charAt(peg$currPos);
	        peg$currPos++;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) {
	          peg$fail(peg$c1);
	        }
	      }
	      if (s1 !== peg$FAILED) {
	        while (s1 !== peg$FAILED) {
	          s0.push(s1);
	          if (peg$c0.test(input.charAt(peg$currPos))) {
	            s1 = input.charAt(peg$currPos);
	            peg$currPos++;
	          } else {
	            s1 = peg$FAILED;
	            if (peg$silentFails === 0) {
	              peg$fail(peg$c1);
	            }
	          }
	        }
	      } else {
	        s0 = peg$FAILED;
	      }
	      peg$silentFails--;
	      if (s0 === peg$FAILED) {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) {
	          peg$fail(peg$c2);
	        }
	      }

	      return s0;
	    }

	    function peg$parse_() {
	      var s0, s1, s2;

	      peg$silentFails++;
	      s0 = peg$currPos;
	      s1 = [];
	      s2 = peg$parsews();
	      while (s2 !== peg$FAILED) {
	        s1.push(s2);
	        s2 = peg$parsews();
	      }
	      if (s1 !== peg$FAILED) {
	        s0 = input.substring(s0, peg$currPos);
	      } else {
	        s0 = s1;
	      }
	      peg$silentFails--;
	      if (s0 === peg$FAILED) {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) {
	          peg$fail(peg$c3);
	        }
	      }

	      return s0;
	    }

	    function peg$parsefalse() {
	      var s0, s1;

	      s0 = peg$currPos;
	      if (input.substr(peg$currPos, 5) === peg$c4) {
	        s1 = peg$c4;
	        peg$currPos += 5;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) {
	          peg$fail(peg$c5);
	        }
	      }
	      if (s1 !== peg$FAILED) {
	        peg$savedPos = s0;
	        s1 = peg$c6();
	      }
	      s0 = s1;

	      return s0;
	    }

	    function peg$parsenull() {
	      var s0, s1;

	      s0 = peg$currPos;
	      if (input.substr(peg$currPos, 4) === peg$c7) {
	        s1 = peg$c7;
	        peg$currPos += 4;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) {
	          peg$fail(peg$c8);
	        }
	      }
	      if (s1 !== peg$FAILED) {
	        peg$savedPos = s0;
	        s1 = peg$c9();
	      }
	      s0 = s1;

	      return s0;
	    }

	    function peg$parseundefined() {
	      var s0, s1;

	      s0 = peg$currPos;
	      if (input.substr(peg$currPos, 9) === peg$c10) {
	        s1 = peg$c10;
	        peg$currPos += 9;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) {
	          peg$fail(peg$c11);
	        }
	      }
	      if (s1 !== peg$FAILED) {
	        peg$savedPos = s0;
	        s1 = peg$c12();
	      }
	      s0 = s1;

	      return s0;
	    }

	    function peg$parsetrue() {
	      var s0, s1;

	      s0 = peg$currPos;
	      if (input.substr(peg$currPos, 4) === peg$c13) {
	        s1 = peg$c13;
	        peg$currPos += 4;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) {
	          peg$fail(peg$c14);
	        }
	      }
	      if (s1 !== peg$FAILED) {
	        peg$savedPos = s0;
	        s1 = peg$c15();
	      }
	      s0 = s1;

	      return s0;
	    }

	    function peg$parsenumber() {
	      var s0, s1, s2, s3, s4;

	      peg$silentFails++;
	      s0 = peg$currPos;
	      if (input.charCodeAt(peg$currPos) === 45) {
	        s1 = peg$c17;
	        peg$currPos++;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) {
	          peg$fail(peg$c18);
	        }
	      }
	      if (s1 === peg$FAILED) {
	        s1 = null;
	      }
	      if (s1 !== peg$FAILED) {
	        s2 = peg$parseint();
	        if (s2 !== peg$FAILED) {
	          s3 = peg$parsefrac();
	          if (s3 === peg$FAILED) {
	            s3 = null;
	          }
	          if (s3 !== peg$FAILED) {
	            s4 = peg$parseexp();
	            if (s4 === peg$FAILED) {
	              s4 = null;
	            }
	            if (s4 !== peg$FAILED) {
	              peg$savedPos = s0;
	              s1 = peg$c19();
	              s0 = s1;
	            } else {
	              peg$currPos = s0;
	              s0 = peg$FAILED;
	            }
	          } else {
	            peg$currPos = s0;
	            s0 = peg$FAILED;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$FAILED;
	      }
	      peg$silentFails--;
	      if (s0 === peg$FAILED) {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) {
	          peg$fail(peg$c16);
	        }
	      }

	      return s0;
	    }

	    function peg$parsedigit() {
	      var s0;

	      if (peg$c20.test(input.charAt(peg$currPos))) {
	        s0 = input.charAt(peg$currPos);
	        peg$currPos++;
	      } else {
	        s0 = peg$FAILED;
	        if (peg$silentFails === 0) {
	          peg$fail(peg$c21);
	        }
	      }

	      return s0;
	    }

	    function peg$parsehexDigit() {
	      var s0;

	      if (peg$c22.test(input.charAt(peg$currPos))) {
	        s0 = input.charAt(peg$currPos);
	        peg$currPos++;
	      } else {
	        s0 = peg$FAILED;
	        if (peg$silentFails === 0) {
	          peg$fail(peg$c23);
	        }
	      }

	      return s0;
	    }

	    function peg$parseexp() {
	      var s0, s1, s2, s3, s4;

	      s0 = peg$currPos;
	      if (peg$c24.test(input.charAt(peg$currPos))) {
	        s1 = input.charAt(peg$currPos);
	        peg$currPos++;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) {
	          peg$fail(peg$c25);
	        }
	      }
	      if (s1 !== peg$FAILED) {
	        if (input.charCodeAt(peg$currPos) === 45) {
	          s2 = peg$c17;
	          peg$currPos++;
	        } else {
	          s2 = peg$FAILED;
	          if (peg$silentFails === 0) {
	            peg$fail(peg$c18);
	          }
	        }
	        if (s2 === peg$FAILED) {
	          if (input.charCodeAt(peg$currPos) === 43) {
	            s2 = peg$c26;
	            peg$currPos++;
	          } else {
	            s2 = peg$FAILED;
	            if (peg$silentFails === 0) {
	              peg$fail(peg$c27);
	            }
	          }
	        }
	        if (s2 === peg$FAILED) {
	          s2 = null;
	        }
	        if (s2 !== peg$FAILED) {
	          s3 = [];
	          s4 = peg$parsedigit();
	          if (s4 !== peg$FAILED) {
	            while (s4 !== peg$FAILED) {
	              s3.push(s4);
	              s4 = peg$parsedigit();
	            }
	          } else {
	            s3 = peg$FAILED;
	          }
	          if (s3 !== peg$FAILED) {
	            s1 = [s1, s2, s3];
	            s0 = s1;
	          } else {
	            peg$currPos = s0;
	            s0 = peg$FAILED;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$FAILED;
	      }

	      return s0;
	    }

	    function peg$parsefrac() {
	      var s0, s1, s2, s3;

	      s0 = peg$currPos;
	      if (input.charCodeAt(peg$currPos) === 46) {
	        s1 = peg$c28;
	        peg$currPos++;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) {
	          peg$fail(peg$c29);
	        }
	      }
	      if (s1 !== peg$FAILED) {
	        s2 = [];
	        s3 = peg$parsedigit();
	        if (s3 !== peg$FAILED) {
	          while (s3 !== peg$FAILED) {
	            s2.push(s3);
	            s3 = peg$parsedigit();
	          }
	        } else {
	          s2 = peg$FAILED;
	        }
	        if (s2 !== peg$FAILED) {
	          s1 = [s1, s2];
	          s0 = s1;
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$FAILED;
	      }

	      return s0;
	    }

	    function peg$parseint() {
	      var s0, s1, s2, s3;

	      if (input.charCodeAt(peg$currPos) === 48) {
	        s0 = peg$c30;
	        peg$currPos++;
	      } else {
	        s0 = peg$FAILED;
	        if (peg$silentFails === 0) {
	          peg$fail(peg$c31);
	        }
	      }
	      if (s0 === peg$FAILED) {
	        s0 = peg$currPos;
	        if (peg$c32.test(input.charAt(peg$currPos))) {
	          s1 = input.charAt(peg$currPos);
	          peg$currPos++;
	        } else {
	          s1 = peg$FAILED;
	          if (peg$silentFails === 0) {
	            peg$fail(peg$c33);
	          }
	        }
	        if (s1 !== peg$FAILED) {
	          s2 = [];
	          s3 = peg$parsedigit();
	          while (s3 !== peg$FAILED) {
	            s2.push(s3);
	            s3 = peg$parsedigit();
	          }
	          if (s2 !== peg$FAILED) {
	            s1 = [s1, s2];
	            s0 = s1;
	          } else {
	            peg$currPos = s0;
	            s0 = peg$FAILED;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	      }

	      return s0;
	    }

	    function peg$parsepropFirstChar() {
	      var s0;

	      if (peg$c34.test(input.charAt(peg$currPos))) {
	        s0 = input.charAt(peg$currPos);
	        peg$currPos++;
	      } else {
	        s0 = peg$FAILED;
	        if (peg$silentFails === 0) {
	          peg$fail(peg$c35);
	        }
	      }

	      return s0;
	    }

	    function peg$parsepropOtherChar() {
	      var s0;

	      if (peg$c36.test(input.charAt(peg$currPos))) {
	        s0 = input.charAt(peg$currPos);
	        peg$currPos++;
	      } else {
	        s0 = peg$FAILED;
	        if (peg$silentFails === 0) {
	          peg$fail(peg$c37);
	        }
	      }

	      return s0;
	    }

	    function peg$parseproperty() {
	      var s0, s1, s2, s3, s4;

	      peg$silentFails++;
	      s0 = peg$currPos;
	      s1 = peg$currPos;
	      s2 = peg$parsepropFirstChar();
	      if (s2 !== peg$FAILED) {
	        s3 = [];
	        s4 = peg$parsepropOtherChar();
	        while (s4 !== peg$FAILED) {
	          s3.push(s4);
	          s4 = peg$parsepropOtherChar();
	        }
	        if (s3 !== peg$FAILED) {
	          s2 = [s2, s3];
	          s1 = s2;
	        } else {
	          peg$currPos = s1;
	          s1 = peg$FAILED;
	        }
	      } else {
	        peg$currPos = s1;
	        s1 = peg$FAILED;
	      }
	      if (s1 !== peg$FAILED) {
	        s0 = input.substring(s0, peg$currPos);
	      } else {
	        s0 = s1;
	      }
	      peg$silentFails--;
	      if (s0 === peg$FAILED) {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) {
	          peg$fail(peg$c38);
	        }
	      }

	      return s0;
	    }

	    function peg$parsereferencePath() {
	      var s0, s1, s2, s3, s4, s5, s6, s7;

	      peg$silentFails++;
	      s0 = peg$currPos;
	      s1 = peg$currPos;
	      s2 = peg$currPos;
	      s3 = peg$parseproperty();
	      if (s3 !== peg$FAILED) {
	        s4 = [];
	        s5 = peg$currPos;
	        if (input.charCodeAt(peg$currPos) === 46) {
	          s6 = peg$c28;
	          peg$currPos++;
	        } else {
	          s6 = peg$FAILED;
	          if (peg$silentFails === 0) {
	            peg$fail(peg$c29);
	          }
	        }
	        if (s6 !== peg$FAILED) {
	          s7 = peg$parseproperty();
	          if (s7 !== peg$FAILED) {
	            s6 = [s6, s7];
	            s5 = s6;
	          } else {
	            peg$currPos = s5;
	            s5 = peg$FAILED;
	          }
	        } else {
	          peg$currPos = s5;
	          s5 = peg$FAILED;
	        }
	        while (s5 !== peg$FAILED) {
	          s4.push(s5);
	          s5 = peg$currPos;
	          if (input.charCodeAt(peg$currPos) === 46) {
	            s6 = peg$c28;
	            peg$currPos++;
	          } else {
	            s6 = peg$FAILED;
	            if (peg$silentFails === 0) {
	              peg$fail(peg$c29);
	            }
	          }
	          if (s6 !== peg$FAILED) {
	            s7 = peg$parseproperty();
	            if (s7 !== peg$FAILED) {
	              s6 = [s6, s7];
	              s5 = s6;
	            } else {
	              peg$currPos = s5;
	              s5 = peg$FAILED;
	            }
	          } else {
	            peg$currPos = s5;
	            s5 = peg$FAILED;
	          }
	        }
	        if (s4 !== peg$FAILED) {
	          s3 = [s3, s4];
	          s2 = s3;
	        } else {
	          peg$currPos = s2;
	          s2 = peg$FAILED;
	        }
	      } else {
	        peg$currPos = s2;
	        s2 = peg$FAILED;
	      }
	      if (s2 !== peg$FAILED) {
	        s1 = input.substring(s1, peg$currPos);
	      } else {
	        s1 = s2;
	      }
	      if (s1 !== peg$FAILED) {
	        peg$savedPos = s0;
	        s1 = peg$c40(s1);
	      }
	      s0 = s1;
	      peg$silentFails--;
	      if (s0 === peg$FAILED) {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) {
	          peg$fail(peg$c39);
	        }
	      }

	      return s0;
	    }

	    function peg$parsevariablePath() {
	      var s0, s1, s2;

	      peg$silentFails++;
	      s0 = peg$currPos;
	      if (input.charCodeAt(peg$currPos) === 36) {
	        s1 = peg$c42;
	        peg$currPos++;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) {
	          peg$fail(peg$c43);
	        }
	      }
	      if (s1 !== peg$FAILED) {
	        s2 = peg$parsereferencePath();
	        if (s2 !== peg$FAILED) {
	          peg$savedPos = s0;
	          s1 = peg$c44(s2);
	          s0 = s1;
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$FAILED;
	      }
	      peg$silentFails--;
	      if (s0 === peg$FAILED) {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) {
	          peg$fail(peg$c41);
	        }
	      }

	      return s0;
	    }

	    function peg$parsereferenceVariablePath() {
	      var s0, s1, s2, s3;

	      s0 = peg$currPos;
	      s1 = peg$parsereferencePath();
	      if (s1 !== peg$FAILED) {
	        if (input.charCodeAt(peg$currPos) === 46) {
	          s2 = peg$c28;
	          peg$currPos++;
	        } else {
	          s2 = peg$FAILED;
	          if (peg$silentFails === 0) {
	            peg$fail(peg$c29);
	          }
	        }
	        if (s2 !== peg$FAILED) {
	          s3 = peg$parsevariablePath();
	          if (s3 !== peg$FAILED) {
	            peg$savedPos = s0;
	            s1 = peg$c45(s1, s3);
	            s0 = s1;
	          } else {
	            peg$currPos = s0;
	            s0 = peg$FAILED;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$FAILED;
	      }

	      return s0;
	    }

	    function peg$parsepath() {
	      var s0;

	      s0 = peg$parsevariablePath();
	      if (s0 === peg$FAILED) {
	        s0 = peg$parsereferenceVariablePath();
	        if (s0 === peg$FAILED) {
	          s0 = peg$parsereferencePath();
	        }
	      }

	      return s0;
	    }

	    function peg$parsenewLine() {
	      var s0, s1;

	      s0 = peg$currPos;
	      if (input.substr(peg$currPos, 2) === peg$c46) {
	        s1 = peg$c46;
	        peg$currPos += 2;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) {
	          peg$fail(peg$c47);
	        }
	      }
	      if (s1 !== peg$FAILED) {
	        peg$savedPos = s0;
	        s1 = peg$c48();
	      }
	      s0 = s1;

	      return s0;
	    }

	    function peg$parsetab() {
	      var s0, s1;

	      s0 = peg$currPos;
	      if (input.substr(peg$currPos, 2) === peg$c49) {
	        s1 = peg$c49;
	        peg$currPos += 2;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) {
	          peg$fail(peg$c50);
	        }
	      }
	      if (s1 !== peg$FAILED) {
	        peg$savedPos = s0;
	        s1 = peg$c51();
	      }
	      s0 = s1;

	      return s0;
	    }

	    function peg$parsereturn() {
	      var s0, s1;

	      s0 = peg$currPos;
	      if (input.substr(peg$currPos, 2) === peg$c52) {
	        s1 = peg$c52;
	        peg$currPos += 2;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) {
	          peg$fail(peg$c53);
	        }
	      }
	      if (s1 !== peg$FAILED) {
	        peg$savedPos = s0;
	        s1 = peg$c54();
	      }
	      s0 = s1;

	      return s0;
	    }

	    function peg$parsebackslash() {
	      var s0, s1;

	      s0 = peg$currPos;
	      if (input.substr(peg$currPos, 2) === peg$c55) {
	        s1 = peg$c55;
	        peg$currPos += 2;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) {
	          peg$fail(peg$c56);
	        }
	      }
	      if (s1 !== peg$FAILED) {
	        peg$savedPos = s0;
	        s1 = peg$c57();
	      }
	      s0 = s1;

	      return s0;
	    }

	    function peg$parseescapedToReal() {
	      var s0;

	      s0 = peg$parsebackslash();
	      if (s0 === peg$FAILED) {
	        s0 = peg$parsenewLine();
	        if (s0 === peg$FAILED) {
	          s0 = peg$parsetab();
	          if (s0 === peg$FAILED) {
	            s0 = peg$parsereturn();
	          }
	        }
	      }

	      return s0;
	    }

	    function peg$parseunicodeToString() {
	      var s0, s1, s2, s3, s4, s5, s6, s7;

	      s0 = peg$currPos;
	      if (input.substr(peg$currPos, 2) === peg$c58) {
	        s1 = peg$c58;
	        peg$currPos += 2;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) {
	          peg$fail(peg$c59);
	        }
	      }
	      if (s1 !== peg$FAILED) {
	        s2 = peg$currPos;
	        s3 = peg$currPos;
	        s4 = peg$parsehexDigit();
	        if (s4 !== peg$FAILED) {
	          s5 = peg$parsehexDigit();
	          if (s5 !== peg$FAILED) {
	            s6 = peg$parsehexDigit();
	            if (s6 !== peg$FAILED) {
	              s7 = peg$parsehexDigit();
	              if (s7 !== peg$FAILED) {
	                s4 = [s4, s5, s6, s7];
	                s3 = s4;
	              } else {
	                peg$currPos = s3;
	                s3 = peg$FAILED;
	              }
	            } else {
	              peg$currPos = s3;
	              s3 = peg$FAILED;
	            }
	          } else {
	            peg$currPos = s3;
	            s3 = peg$FAILED;
	          }
	        } else {
	          peg$currPos = s3;
	          s3 = peg$FAILED;
	        }
	        if (s3 !== peg$FAILED) {
	          s2 = input.substring(s2, peg$currPos);
	        } else {
	          s2 = s3;
	        }
	        if (s2 !== peg$FAILED) {
	          peg$savedPos = s0;
	          s1 = peg$c60(s2);
	          s0 = s1;
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$FAILED;
	      }

	      return s0;
	    }

	    function peg$parseparamChar() {
	      var s0, s1;

	      if (peg$c61.test(input.charAt(peg$currPos))) {
	        s0 = input.charAt(peg$currPos);
	        peg$currPos++;
	      } else {
	        s0 = peg$FAILED;
	        if (peg$silentFails === 0) {
	          peg$fail(peg$c62);
	        }
	      }
	      if (s0 === peg$FAILED) {
	        s0 = peg$parsebackslash();
	        if (s0 === peg$FAILED) {
	          s0 = peg$currPos;
	          if (input.substr(peg$currPos, 2) === peg$c63) {
	            s1 = peg$c63;
	            peg$currPos += 2;
	          } else {
	            s1 = peg$FAILED;
	            if (peg$silentFails === 0) {
	              peg$fail(peg$c64);
	            }
	          }
	          if (s1 !== peg$FAILED) {
	            peg$savedPos = s0;
	            s1 = peg$c65();
	          }
	          s0 = s1;
	          if (s0 === peg$FAILED) {
	            s0 = peg$currPos;
	            if (input.substr(peg$currPos, 2) === peg$c66) {
	              s1 = peg$c66;
	              peg$currPos += 2;
	            } else {
	              s1 = peg$FAILED;
	              if (peg$silentFails === 0) {
	                peg$fail(peg$c67);
	              }
	            }
	            if (s1 !== peg$FAILED) {
	              peg$savedPos = s0;
	              s1 = peg$c68();
	            }
	            s0 = s1;
	            if (s0 === peg$FAILED) {
	              s0 = peg$currPos;
	              if (input.substr(peg$currPos, 2) === peg$c69) {
	                s1 = peg$c69;
	                peg$currPos += 2;
	              } else {
	                s1 = peg$FAILED;
	                if (peg$silentFails === 0) {
	                  peg$fail(peg$c70);
	                }
	              }
	              if (s1 !== peg$FAILED) {
	                peg$savedPos = s0;
	                s1 = peg$c71();
	              }
	              s0 = s1;
	              if (s0 === peg$FAILED) {
	                s0 = peg$parseunicodeToString();
	              }
	            }
	          }
	        }
	      }

	      return s0;
	    }

	    function peg$parsevisibleChar() {
	      var s0;

	      s0 = peg$parseparamChar();
	      if (s0 === peg$FAILED) {
	        if (peg$c72.test(input.charAt(peg$currPos))) {
	          s0 = input.charAt(peg$currPos);
	          peg$currPos++;
	        } else {
	          s0 = peg$FAILED;
	          if (peg$silentFails === 0) {
	            peg$fail(peg$c73);
	          }
	        }
	      }

	      return s0;
	    }

	    function peg$parsechar() {
	      var s0;

	      s0 = peg$parsevisibleChar();
	      if (s0 === peg$FAILED) {
	        s0 = peg$parsewsChar();
	      }

	      return s0;
	    }

	    function peg$parsesmartVariable() {
	      var s0, s1;

	      s0 = peg$currPos;
	      if (input.charCodeAt(peg$currPos) === 35) {
	        s1 = peg$c74;
	        peg$currPos++;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) {
	          peg$fail(peg$c75);
	        }
	      }
	      if (s1 !== peg$FAILED) {
	        peg$savedPos = s0;
	        s1 = peg$c76();
	      }
	      s0 = s1;

	      return s0;
	    }

	    function peg$parseparamString() {
	      var s0, s1, s2;

	      s0 = peg$currPos;
	      s1 = [];
	      s2 = peg$parseparamChar();
	      if (s2 !== peg$FAILED) {
	        while (s2 !== peg$FAILED) {
	          s1.push(s2);
	          s2 = peg$parseparamChar();
	        }
	      } else {
	        s1 = peg$FAILED;
	      }
	      if (s1 !== peg$FAILED) {
	        peg$savedPos = s0;
	        s1 = peg$c77(s1);
	      }
	      s0 = s1;

	      return s0;
	    }

	    function peg$parsevisibleString() {
	      var s0, s1, s2;

	      s0 = peg$currPos;
	      s1 = [];
	      s2 = peg$parsevisibleChar();
	      if (s2 !== peg$FAILED) {
	        while (s2 !== peg$FAILED) {
	          s1.push(s2);
	          s2 = peg$parsevisibleChar();
	        }
	      } else {
	        s1 = peg$FAILED;
	      }
	      if (s1 !== peg$FAILED) {
	        peg$savedPos = s0;
	        s1 = peg$c77(s1);
	      }
	      s0 = s1;

	      return s0;
	    }

	    function peg$parsestring() {
	      var s0, s1, s2;

	      s0 = peg$currPos;
	      s1 = [];
	      s2 = peg$parsechar();
	      if (s2 !== peg$FAILED) {
	        while (s2 !== peg$FAILED) {
	          s1.push(s2);
	          s2 = peg$parsechar();
	        }
	      } else {
	        s1 = peg$FAILED;
	      }
	      if (s1 !== peg$FAILED) {
	        peg$savedPos = s0;
	        s1 = peg$c77(s1);
	      }
	      s0 = s1;

	      return s0;
	    }

	    function peg$parseescapedChar1() {
	      var s0, s1;

	      if (peg$c78.test(input.charAt(peg$currPos))) {
	        s0 = input.charAt(peg$currPos);
	        peg$currPos++;
	      } else {
	        s0 = peg$FAILED;
	        if (peg$silentFails === 0) {
	          peg$fail(peg$c79);
	        }
	      }
	      if (s0 === peg$FAILED) {
	        s0 = peg$parseescapedToReal();
	        if (s0 === peg$FAILED) {
	          s0 = peg$currPos;
	          if (input.substr(peg$currPos, 2) === peg$c80) {
	            s1 = peg$c80;
	            peg$currPos += 2;
	          } else {
	            s1 = peg$FAILED;
	            if (peg$silentFails === 0) {
	              peg$fail(peg$c81);
	            }
	          }
	          if (s1 !== peg$FAILED) {
	            peg$savedPos = s0;
	            s1 = peg$c82();
	          }
	          s0 = s1;
	          if (s0 === peg$FAILED) {
	            s0 = peg$parseunicodeToString();
	          }
	        }
	      }

	      return s0;
	    }

	    function peg$parseeascapedString1() {
	      var s0, s1, s2, s3;

	      peg$silentFails++;
	      s0 = peg$currPos;
	      if (input.charCodeAt(peg$currPos) === 34) {
	        s1 = peg$c84;
	        peg$currPos++;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) {
	          peg$fail(peg$c85);
	        }
	      }
	      if (s1 !== peg$FAILED) {
	        s2 = [];
	        s3 = peg$parseescapedChar1();
	        while (s3 !== peg$FAILED) {
	          s2.push(s3);
	          s3 = peg$parseescapedChar1();
	        }
	        if (s2 !== peg$FAILED) {
	          if (input.charCodeAt(peg$currPos) === 34) {
	            s3 = peg$c84;
	            peg$currPos++;
	          } else {
	            s3 = peg$FAILED;
	            if (peg$silentFails === 0) {
	              peg$fail(peg$c85);
	            }
	          }
	          if (s3 !== peg$FAILED) {
	            peg$savedPos = s0;
	            s1 = peg$c86(s2);
	            s0 = s1;
	          } else {
	            peg$currPos = s0;
	            s0 = peg$FAILED;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$FAILED;
	      }
	      peg$silentFails--;
	      if (s0 === peg$FAILED) {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) {
	          peg$fail(peg$c83);
	        }
	      }

	      return s0;
	    }

	    function peg$parseescapedChar2() {
	      var s0, s1;

	      if (peg$c87.test(input.charAt(peg$currPos))) {
	        s0 = input.charAt(peg$currPos);
	        peg$currPos++;
	      } else {
	        s0 = peg$FAILED;
	        if (peg$silentFails === 0) {
	          peg$fail(peg$c88);
	        }
	      }
	      if (s0 === peg$FAILED) {
	        s0 = peg$parseescapedToReal();
	        if (s0 === peg$FAILED) {
	          s0 = peg$currPos;
	          if (input.substr(peg$currPos, 2) === peg$c89) {
	            s1 = peg$c89;
	            peg$currPos += 2;
	          } else {
	            s1 = peg$FAILED;
	            if (peg$silentFails === 0) {
	              peg$fail(peg$c90);
	            }
	          }
	          if (s1 !== peg$FAILED) {
	            peg$savedPos = s0;
	            s1 = peg$c91();
	          }
	          s0 = s1;
	          if (s0 === peg$FAILED) {
	            s0 = peg$parseunicodeToString();
	          }
	        }
	      }

	      return s0;
	    }

	    function peg$parseeascapedString2() {
	      var s0, s1, s2, s3;

	      peg$silentFails++;
	      s0 = peg$currPos;
	      if (input.charCodeAt(peg$currPos) === 39) {
	        s1 = peg$c92;
	        peg$currPos++;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) {
	          peg$fail(peg$c93);
	        }
	      }
	      if (s1 !== peg$FAILED) {
	        s2 = [];
	        s3 = peg$parseescapedChar2();
	        while (s3 !== peg$FAILED) {
	          s2.push(s3);
	          s3 = peg$parseescapedChar2();
	        }
	        if (s2 !== peg$FAILED) {
	          if (input.charCodeAt(peg$currPos) === 39) {
	            s3 = peg$c92;
	            peg$currPos++;
	          } else {
	            s3 = peg$FAILED;
	            if (peg$silentFails === 0) {
	              peg$fail(peg$c93);
	            }
	          }
	          if (s3 !== peg$FAILED) {
	            peg$savedPos = s0;
	            s1 = peg$c86(s2);
	            s0 = s1;
	          } else {
	            peg$currPos = s0;
	            s0 = peg$FAILED;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$FAILED;
	      }
	      peg$silentFails--;
	      if (s0 === peg$FAILED) {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) {
	          peg$fail(peg$c83);
	        }
	      }

	      return s0;
	    }

	    function peg$parseeascapedString() {
	      var s0;

	      s0 = peg$parseeascapedString1();
	      if (s0 === peg$FAILED) {
	        s0 = peg$parseeascapedString2();
	      }

	      return s0;
	    }

	    function peg$parsekey() {
	      var s0;

	      s0 = peg$parseeascapedString();
	      if (s0 === peg$FAILED) {
	        s0 = peg$parseparamString();
	      }

	      return s0;
	    }

	    function peg$parseparseValue() {
	      var s0, s1, s2, s3, s4;

	      s0 = peg$currPos;
	      s1 = peg$parse_();
	      if (s1 !== peg$FAILED) {
	        if (input.charCodeAt(peg$currPos) === 123) {
	          s2 = peg$c94;
	          peg$currPos++;
	        } else {
	          s2 = peg$FAILED;
	          if (peg$silentFails === 0) {
	            peg$fail(peg$c95);
	          }
	        }
	        if (s2 !== peg$FAILED) {
	          s3 = peg$parseparse();
	          if (s3 !== peg$FAILED) {
	            if (input.charCodeAt(peg$currPos) === 125) {
	              s4 = peg$c96;
	              peg$currPos++;
	            } else {
	              s4 = peg$FAILED;
	              if (peg$silentFails === 0) {
	                peg$fail(peg$c97);
	              }
	            }
	            if (s4 !== peg$FAILED) {
	              peg$savedPos = s0;
	              s1 = peg$c98(s3);
	              s0 = s1;
	            } else {
	              peg$currPos = s0;
	              s0 = peg$FAILED;
	            }
	          } else {
	            peg$currPos = s0;
	            s0 = peg$FAILED;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$FAILED;
	      }

	      return s0;
	    }

	    function peg$parsekeyValueParse() {
	      var s0, s1, s2, s3, s4, s5;

	      s0 = peg$currPos;
	      s1 = peg$parse_();
	      if (s1 !== peg$FAILED) {
	        s2 = peg$parsekey();
	        if (s2 !== peg$FAILED) {
	          s3 = peg$parse_();
	          if (s3 !== peg$FAILED) {
	            if (input.charCodeAt(peg$currPos) === 58) {
	              s4 = peg$c99;
	              peg$currPos++;
	            } else {
	              s4 = peg$FAILED;
	              if (peg$silentFails === 0) {
	                peg$fail(peg$c100);
	              }
	            }
	            if (s4 === peg$FAILED) {
	              s4 = null;
	            }
	            if (s4 !== peg$FAILED) {
	              s5 = peg$parseparseValue();
	              if (s5 !== peg$FAILED) {
	                peg$savedPos = s0;
	                s1 = peg$c101(s2, s5);
	                s0 = s1;
	              } else {
	                peg$currPos = s0;
	                s0 = peg$FAILED;
	              }
	            } else {
	              peg$currPos = s0;
	              s0 = peg$FAILED;
	            }
	          } else {
	            peg$currPos = s0;
	            s0 = peg$FAILED;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$FAILED;
	      }

	      return s0;
	    }

	    function peg$parsearg() {
	      var s0, s1;

	      peg$silentFails++;
	      s0 = peg$parsefalse();
	      if (s0 === peg$FAILED) {
	        s0 = peg$parsenull();
	        if (s0 === peg$FAILED) {
	          s0 = peg$parseundefined();
	          if (s0 === peg$FAILED) {
	            s0 = peg$parsetrue();
	            if (s0 === peg$FAILED) {
	              s0 = peg$parsenumber();
	              if (s0 === peg$FAILED) {
	                s0 = peg$parseeascapedString();
	                if (s0 === peg$FAILED) {
	                  s0 = peg$parsepath();
	                }
	              }
	            }
	          }
	        }
	      }
	      peg$silentFails--;
	      if (s0 === peg$FAILED) {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) {
	          peg$fail(peg$c102);
	        }
	      }

	      return s0;
	    }

	    function peg$parseargExt() {
	      var s0, s1;

	      peg$silentFails++;
	      s0 = peg$parsekeyValueParse();
	      if (s0 === peg$FAILED) {
	        s0 = peg$parseparseValue();
	        if (s0 === peg$FAILED) {
	          s0 = peg$parsearg();
	        }
	      }
	      peg$silentFails--;
	      if (s0 === peg$FAILED) {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) {
	          peg$fail(peg$c103);
	        }
	      }

	      return s0;
	    }

	    function peg$parseparse() {
	      var s0, s1, s2;

	      s0 = peg$currPos;
	      s1 = [];
	      s2 = peg$parsestringFormat();
	      if (s2 === peg$FAILED) {
	        s2 = peg$parsesmartVariable();
	        if (s2 === peg$FAILED) {
	          s2 = peg$parselogicFormat();
	        }
	      }
	      while (s2 !== peg$FAILED) {
	        s1.push(s2);
	        s2 = peg$parsestringFormat();
	        if (s2 === peg$FAILED) {
	          s2 = peg$parsesmartVariable();
	          if (s2 === peg$FAILED) {
	            s2 = peg$parselogicFormat();
	          }
	        }
	      }
	      if (s1 !== peg$FAILED) {
	        peg$savedPos = s0;
	        s1 = peg$c104(s1);
	      }
	      s0 = s1;

	      return s0;
	    }

	    function peg$parsestringFormat() {
	      var s0, s1;

	      s0 = peg$currPos;
	      s1 = peg$parsestring();
	      if (s1 !== peg$FAILED) {
	        peg$savedPos = s0;
	        s1 = peg$c105(s1);
	      }
	      s0 = s1;

	      return s0;
	    }

	    function peg$parseas() {
	      var s0, s1, s2, s3, s4, s5;

	      s0 = peg$currPos;
	      s1 = peg$parsepath();
	      if (s1 !== peg$FAILED) {
	        s2 = peg$parse_();
	        if (s2 !== peg$FAILED) {
	          if (input.substr(peg$currPos, 2) === peg$c106) {
	            s3 = peg$c106;
	            peg$currPos += 2;
	          } else {
	            s3 = peg$FAILED;
	            if (peg$silentFails === 0) {
	              peg$fail(peg$c107);
	            }
	          }
	          if (s3 !== peg$FAILED) {
	            s4 = peg$parse_();
	            if (s4 !== peg$FAILED) {
	              s5 = peg$parsereferencePath();
	              if (s5 !== peg$FAILED) {
	                peg$savedPos = s0;
	                s1 = peg$c108(s1, s5);
	                s0 = s1;
	              } else {
	                peg$currPos = s0;
	                s0 = peg$FAILED;
	              }
	            } else {
	              peg$currPos = s0;
	              s0 = peg$FAILED;
	            }
	          } else {
	            peg$currPos = s0;
	            s0 = peg$FAILED;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$FAILED;
	      }

	      return s0;
	    }

	    function peg$parseasOther() {
	      var s0, s1, s2, s3, s4;

	      s0 = peg$currPos;
	      s1 = peg$parse_();
	      if (s1 !== peg$FAILED) {
	        if (input.charCodeAt(peg$currPos) === 44) {
	          s2 = peg$c109;
	          peg$currPos++;
	        } else {
	          s2 = peg$FAILED;
	          if (peg$silentFails === 0) {
	            peg$fail(peg$c110);
	          }
	        }
	        if (s2 !== peg$FAILED) {
	          s3 = peg$parse_();
	          if (s3 !== peg$FAILED) {
	            s4 = peg$parseas();
	            if (s4 !== peg$FAILED) {
	              peg$savedPos = s0;
	              s1 = peg$c111(s4);
	              s0 = s1;
	            } else {
	              peg$currPos = s0;
	              s0 = peg$FAILED;
	            }
	          } else {
	            peg$currPos = s0;
	            s0 = peg$FAILED;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$FAILED;
	      }

	      return s0;
	    }

	    function peg$parseasForm() {
	      var s0, s1, s2, s3;

	      s0 = peg$currPos;
	      s1 = peg$parseas();
	      if (s1 !== peg$FAILED) {
	        s2 = [];
	        s3 = peg$parseasOther();
	        while (s3 !== peg$FAILED) {
	          s2.push(s3);
	          s3 = peg$parseasOther();
	        }
	        if (s2 !== peg$FAILED) {
	          peg$savedPos = s0;
	          s1 = peg$c112(s1, s2);
	          s0 = s1;
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$FAILED;
	      }

	      return s0;
	    }

	    function peg$parsevalue() {
	      var s0;

	      s0 = peg$parseeascapedString();
	      if (s0 === peg$FAILED) {
	        s0 = peg$parsevisibleString();
	      }

	      return s0;
	    }

	    function peg$parsemeta() {
	      var s0, s1, s2, s3, s4, s5;

	      s0 = peg$currPos;
	      s1 = peg$parsekey();
	      if (s1 !== peg$FAILED) {
	        s2 = peg$parse_();
	        if (s2 !== peg$FAILED) {
	          if (input.charCodeAt(peg$currPos) === 58) {
	            s3 = peg$c99;
	            peg$currPos++;
	          } else {
	            s3 = peg$FAILED;
	            if (peg$silentFails === 0) {
	              peg$fail(peg$c100);
	            }
	          }
	          if (s3 !== peg$FAILED) {
	            s4 = peg$parse_();
	            if (s4 !== peg$FAILED) {
	              s5 = peg$parsearg();
	              if (s5 !== peg$FAILED) {
	                peg$savedPos = s0;
	                s1 = peg$c113(s1, s5);
	                s0 = s1;
	              } else {
	                peg$currPos = s0;
	                s0 = peg$FAILED;
	              }
	            } else {
	              peg$currPos = s0;
	              s0 = peg$FAILED;
	            }
	          } else {
	            peg$currPos = s0;
	            s0 = peg$FAILED;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$FAILED;
	      }

	      return s0;
	    }

	    function peg$parsemetaOther() {
	      var s0, s1, s2;

	      s0 = peg$currPos;
	      s1 = peg$parse_();
	      if (s1 !== peg$FAILED) {
	        s2 = peg$parsemeta();
	        if (s2 !== peg$FAILED) {
	          peg$savedPos = s0;
	          s1 = peg$c114(s2);
	          s0 = s1;
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$FAILED;
	      }

	      return s0;
	    }

	    function peg$parsemetadata() {
	      var s0, s1, s2, s3;

	      s0 = peg$currPos;
	      s1 = peg$parsemeta();
	      if (s1 !== peg$FAILED) {
	        s2 = [];
	        s3 = peg$parsemetaOther();
	        while (s3 !== peg$FAILED) {
	          s2.push(s3);
	          s3 = peg$parsemetaOther();
	        }
	        if (s2 !== peg$FAILED) {
	          peg$savedPos = s0;
	          s1 = peg$c115(s1, s2);
	          s0 = s1;
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$FAILED;
	      }

	      return s0;
	    }

	    function peg$parseargExtOther() {
	      var s0, s1, s2, s3, s4;

	      s0 = peg$currPos;
	      s1 = peg$parse_();
	      if (s1 !== peg$FAILED) {
	        if (input.charCodeAt(peg$currPos) === 44) {
	          s2 = peg$c109;
	          peg$currPos++;
	        } else {
	          s2 = peg$FAILED;
	          if (peg$silentFails === 0) {
	            peg$fail(peg$c110);
	          }
	        }
	        if (s2 === peg$FAILED) {
	          s2 = null;
	        }
	        if (s2 !== peg$FAILED) {
	          s3 = peg$parse_();
	          if (s3 !== peg$FAILED) {
	            s4 = peg$parseargExt();
	            if (s4 !== peg$FAILED) {
	              peg$savedPos = s0;
	              s1 = peg$c116(s4);
	              s0 = s1;
	            } else {
	              peg$currPos = s0;
	              s0 = peg$FAILED;
	            }
	          } else {
	            peg$currPos = s0;
	            s0 = peg$FAILED;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$FAILED;
	      }

	      return s0;
	    }

	    function peg$parseargsExt() {
	      var s0, s1, s2, s3;

	      s0 = peg$currPos;
	      s1 = peg$parseargExt();
	      if (s1 !== peg$FAILED) {
	        s2 = [];
	        s3 = peg$parseargExtOther();
	        while (s3 !== peg$FAILED) {
	          s2.push(s3);
	          s3 = peg$parseargExtOther();
	        }
	        if (s2 !== peg$FAILED) {
	          peg$savedPos = s0;
	          s1 = peg$c117(s1, s2);
	          s0 = s1;
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$FAILED;
	      }

	      return s0;
	    }

	    function peg$parseargsMetadata() {
	      var s0, s1, s2, s3, s4, s5, s6;

	      s0 = peg$currPos;
	      s1 = peg$parse_();
	      if (s1 !== peg$FAILED) {
	        if (input.charCodeAt(peg$currPos) === 44) {
	          s2 = peg$c109;
	          peg$currPos++;
	        } else {
	          s2 = peg$FAILED;
	          if (peg$silentFails === 0) {
	            peg$fail(peg$c110);
	          }
	        }
	        if (s2 !== peg$FAILED) {
	          s3 = peg$parse_();
	          if (s3 !== peg$FAILED) {
	            s4 = peg$parsemetadata();
	            if (s4 === peg$FAILED) {
	              s4 = null;
	            }
	            if (s4 !== peg$FAILED) {
	              s5 = peg$parse_();
	              if (s5 !== peg$FAILED) {
	                s6 = peg$parseargsExt();
	                if (s6 === peg$FAILED) {
	                  s6 = null;
	                }
	                if (s6 !== peg$FAILED) {
	                  peg$savedPos = s0;
	                  s1 = peg$c118(s4, s6);
	                  s0 = s1;
	                } else {
	                  peg$currPos = s0;
	                  s0 = peg$FAILED;
	                }
	              } else {
	                peg$currPos = s0;
	                s0 = peg$FAILED;
	              }
	            } else {
	              peg$currPos = s0;
	              s0 = peg$FAILED;
	            }
	          } else {
	            peg$currPos = s0;
	            s0 = peg$FAILED;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$FAILED;
	      }

	      return s0;
	    }

	    function peg$parsebasicFormat() {
	      var s0, s1, s2;

	      s0 = peg$currPos;
	      s1 = peg$parseparamString();
	      if (s1 !== peg$FAILED) {
	        s2 = peg$parseargsMetadata();
	        if (s2 === peg$FAILED) {
	          s2 = null;
	        }
	        if (s2 !== peg$FAILED) {
	          peg$savedPos = s0;
	          s1 = peg$c119(s1, s2);
	          s0 = s1;
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$FAILED;
	      }

	      return s0;
	    }

	    function peg$parsefilter() {
	      var s0;

	      s0 = peg$parseasForm();
	      if (s0 === peg$FAILED) {
	        s0 = peg$parsebasicFormat();
	      }

	      return s0;
	    }

	    function peg$parsefilterOther() {
	      var s0, s1, s2, s3, s4;

	      s0 = peg$currPos;
	      s1 = peg$parse_();
	      if (s1 !== peg$FAILED) {
	        if (input.charCodeAt(peg$currPos) === 124) {
	          s2 = peg$c120;
	          peg$currPos++;
	        } else {
	          s2 = peg$FAILED;
	          if (peg$silentFails === 0) {
	            peg$fail(peg$c121);
	          }
	        }
	        if (s2 !== peg$FAILED) {
	          s3 = peg$parse_();
	          if (s3 !== peg$FAILED) {
	            s4 = peg$parsefilter();
	            if (s4 !== peg$FAILED) {
	              peg$savedPos = s0;
	              s1 = peg$c122(s4);
	              s0 = s1;
	            } else {
	              peg$currPos = s0;
	              s0 = peg$FAILED;
	            }
	          } else {
	            peg$currPos = s0;
	            s0 = peg$FAILED;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$FAILED;
	      }

	      return s0;
	    }

	    function peg$parsefilters() {
	      var s0, s1, s2, s3, s4, s5, s6;

	      s0 = peg$currPos;
	      s1 = peg$parse_();
	      if (s1 !== peg$FAILED) {
	        if (peg$c123.test(input.charAt(peg$currPos))) {
	          s2 = input.charAt(peg$currPos);
	          peg$currPos++;
	        } else {
	          s2 = peg$FAILED;
	          if (peg$silentFails === 0) {
	            peg$fail(peg$c124);
	          }
	        }
	        if (s2 !== peg$FAILED) {
	          s3 = peg$parse_();
	          if (s3 !== peg$FAILED) {
	            s4 = peg$parsefilter();
	            if (s4 !== peg$FAILED) {
	              s5 = [];
	              s6 = peg$parsefilterOther();
	              while (s6 !== peg$FAILED) {
	                s5.push(s6);
	                s6 = peg$parsefilterOther();
	              }
	              if (s5 !== peg$FAILED) {
	                peg$savedPos = s0;
	                s1 = peg$c125(s4, s5);
	                s0 = s1;
	              } else {
	                peg$currPos = s0;
	                s0 = peg$FAILED;
	              }
	            } else {
	              peg$currPos = s0;
	              s0 = peg$FAILED;
	            }
	          } else {
	            peg$currPos = s0;
	            s0 = peg$FAILED;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$FAILED;
	      }

	      return s0;
	    }

	    function peg$parselogicFormat() {
	      var s0, s1, s2, s3, s4, s5, s6;

	      s0 = peg$currPos;
	      if (input.charCodeAt(peg$currPos) === 123) {
	        s1 = peg$c94;
	        peg$currPos++;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) {
	          peg$fail(peg$c95);
	        }
	      }
	      if (s1 !== peg$FAILED) {
	        s2 = peg$parse_();
	        if (s2 !== peg$FAILED) {
	          s3 = peg$parsepath();
	          if (s3 !== peg$FAILED) {
	            s4 = peg$parsefilters();
	            if (s4 === peg$FAILED) {
	              s4 = null;
	            }
	            if (s4 !== peg$FAILED) {
	              s5 = peg$parse_();
	              if (s5 !== peg$FAILED) {
	                if (input.charCodeAt(peg$currPos) === 125) {
	                  s6 = peg$c96;
	                  peg$currPos++;
	                } else {
	                  s6 = peg$FAILED;
	                  if (peg$silentFails === 0) {
	                    peg$fail(peg$c97);
	                  }
	                }
	                if (s6 !== peg$FAILED) {
	                  peg$savedPos = s0;
	                  s1 = peg$c126(s3, s4);
	                  s0 = s1;
	                } else {
	                  peg$currPos = s0;
	                  s0 = peg$FAILED;
	                }
	              } else {
	                peg$currPos = s0;
	                s0 = peg$FAILED;
	              }
	            } else {
	              peg$currPos = s0;
	              s0 = peg$FAILED;
	            }
	          } else {
	            peg$currPos = s0;
	            s0 = peg$FAILED;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$FAILED;
	      }

	      return s0;
	    }

	    peg$result = peg$startRuleFunction();

	    if (peg$result !== peg$FAILED && peg$currPos === input.length) {
	      return peg$result;
	    } else {
	      if (peg$result !== peg$FAILED && peg$currPos < input.length) {
	        peg$fail({ type: "end", description: "end of input" });
	      }

	      throw peg$buildException(null, peg$maxFailExpected, peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null, peg$maxFailPos < input.length ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1) : peg$computeLocation(peg$maxFailPos, peg$maxFailPos));
	    }
	  }

	  return {
	    SyntaxError: peg$SyntaxError,
	    parse: peg$parse
	  };
	}();

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * This is the web browser implementation of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = __webpack_require__(86);
	exports.log = log;
	exports.formatArgs = formatArgs;
	exports.save = save;
	exports.load = load;
	exports.useColors = useColors;
	exports.storage = 'undefined' != typeof chrome
	               && 'undefined' != typeof chrome.storage
	                  ? chrome.storage.local
	                  : localstorage();

	/**
	 * Colors.
	 */

	exports.colors = [
	  'lightseagreen',
	  'forestgreen',
	  'goldenrod',
	  'dodgerblue',
	  'darkorchid',
	  'crimson'
	];

	/**
	 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
	 * and the Firebug extension (any Firefox version) are known
	 * to support "%c" CSS customizations.
	 *
	 * TODO: add a `localStorage` variable to explicitly enable/disable colors
	 */

	function useColors() {
	  // is webkit? http://stackoverflow.com/a/16459606/376773
	  return ('WebkitAppearance' in document.documentElement.style) ||
	    // is firebug? http://stackoverflow.com/a/398120/376773
	    (window.console && (console.firebug || (console.exception && console.table))) ||
	    // is firefox >= v31?
	    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
	    (navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31);
	}

	/**
	 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
	 */

	exports.formatters.j = function(v) {
	  return JSON.stringify(v);
	};


	/**
	 * Colorize log arguments if enabled.
	 *
	 * @api public
	 */

	function formatArgs() {
	  var args = arguments;
	  var useColors = this.useColors;

	  args[0] = (useColors ? '%c' : '')
	    + this.namespace
	    + (useColors ? ' %c' : ' ')
	    + args[0]
	    + (useColors ? '%c ' : ' ')
	    + '+' + exports.humanize(this.diff);

	  if (!useColors) return args;

	  var c = 'color: ' + this.color;
	  args = [args[0], c, 'color: inherit'].concat(Array.prototype.slice.call(args, 1));

	  // the final "%c" is somewhat tricky, because there could be other
	  // arguments passed either before or after the %c, so we need to
	  // figure out the correct index to insert the CSS into
	  var index = 0;
	  var lastC = 0;
	  args[0].replace(/%[a-z%]/g, function(match) {
	    if ('%%' === match) return;
	    index++;
	    if ('%c' === match) {
	      // we only are interested in the *last* %c
	      // (the user may have provided their own)
	      lastC = index;
	    }
	  });

	  args.splice(lastC, 0, c);
	  return args;
	}

	/**
	 * Invokes `console.log()` when available.
	 * No-op when `console.log` is not a "function".
	 *
	 * @api public
	 */

	function log() {
	  // this hackery is required for IE8/9, where
	  // the `console.log` function doesn't have 'apply'
	  return 'object' === typeof console
	    && console.log
	    && Function.prototype.apply.call(console.log, console, arguments);
	}

	/**
	 * Save `namespaces`.
	 *
	 * @param {String} namespaces
	 * @api private
	 */

	function save(namespaces) {
	  try {
	    if (null == namespaces) {
	      exports.storage.removeItem('debug');
	    } else {
	      exports.storage.debug = namespaces;
	    }
	  } catch(e) {}
	}

	/**
	 * Load `namespaces`.
	 *
	 * @return {String} returns the previously persisted debug modes
	 * @api private
	 */

	function load() {
	  var r;
	  try {
	    r = exports.storage.debug;
	  } catch(e) {}
	  return r;
	}

	/**
	 * Enable namespaces listed in `localStorage.debug` initially.
	 */

	exports.enable(load());

	/**
	 * Localstorage attempts to return the localstorage.
	 *
	 * This is necessary because safari throws
	 * when a user disables cookies/localstorage
	 * and you attempt to access it.
	 *
	 * @return {LocalStorage}
	 * @api private
	 */

	function localstorage(){
	  try {
	    return window.localStorage;
	  } catch (e) {}
	}


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * This is the common logic for both the Node.js and web browser
	 * implementations of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = debug;
	exports.coerce = coerce;
	exports.disable = disable;
	exports.enable = enable;
	exports.enabled = enabled;
	exports.humanize = __webpack_require__(186);

	/**
	 * The currently active debug mode names, and names to skip.
	 */

	exports.names = [];
	exports.skips = [];

	/**
	 * Map of special "%n" handling functions, for the debug "format" argument.
	 *
	 * Valid key names are a single, lowercased letter, i.e. "n".
	 */

	exports.formatters = {};

	/**
	 * Previously assigned color.
	 */

	var prevColor = 0;

	/**
	 * Previous log timestamp.
	 */

	var prevTime;

	/**
	 * Select a color.
	 *
	 * @return {Number}
	 * @api private
	 */

	function selectColor() {
	  return exports.colors[prevColor++ % exports.colors.length];
	}

	/**
	 * Create a debugger with the given `namespace`.
	 *
	 * @param {String} namespace
	 * @return {Function}
	 * @api public
	 */

	function debug(namespace) {

	  // define the `disabled` version
	  function disabled() {
	  }
	  disabled.enabled = false;

	  // define the `enabled` version
	  function enabled() {

	    var self = enabled;

	    // set `diff` timestamp
	    var curr = +new Date();
	    var ms = curr - (prevTime || curr);
	    self.diff = ms;
	    self.prev = prevTime;
	    self.curr = curr;
	    prevTime = curr;

	    // add the `color` if not set
	    if (null == self.useColors) self.useColors = exports.useColors();
	    if (null == self.color && self.useColors) self.color = selectColor();

	    var args = Array.prototype.slice.call(arguments);

	    args[0] = exports.coerce(args[0]);

	    if ('string' !== typeof args[0]) {
	      // anything else let's inspect with %o
	      args = ['%o'].concat(args);
	    }

	    // apply any `formatters` transformations
	    var index = 0;
	    args[0] = args[0].replace(/%([a-z%])/g, function(match, format) {
	      // if we encounter an escaped % then don't increase the array index
	      if (match === '%%') return match;
	      index++;
	      var formatter = exports.formatters[format];
	      if ('function' === typeof formatter) {
	        var val = args[index];
	        match = formatter.call(self, val);

	        // now we need to remove `args[index]` since it's inlined in the `format`
	        args.splice(index, 1);
	        index--;
	      }
	      return match;
	    });

	    if ('function' === typeof exports.formatArgs) {
	      args = exports.formatArgs.apply(self, args);
	    }
	    var logFn = enabled.log || exports.log || console.log.bind(console);
	    logFn.apply(self, args);
	  }
	  enabled.enabled = true;

	  var fn = exports.enabled(namespace) ? enabled : disabled;

	  fn.namespace = namespace;

	  return fn;
	}

	/**
	 * Enables a debug mode by namespaces. This can include modes
	 * separated by a colon and wildcards.
	 *
	 * @param {String} namespaces
	 * @api public
	 */

	function enable(namespaces) {
	  exports.save(namespaces);

	  var split = (namespaces || '').split(/[\s,]+/);
	  var len = split.length;

	  for (var i = 0; i < len; i++) {
	    if (!split[i]) continue; // ignore empty strings
	    namespaces = split[i].replace(/\*/g, '.*?');
	    if (namespaces[0] === '-') {
	      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
	    } else {
	      exports.names.push(new RegExp('^' + namespaces + '$'));
	    }
	  }
	}

	/**
	 * Disable debug output.
	 *
	 * @api public
	 */

	function disable() {
	  exports.enable('');
	}

	/**
	 * Returns true if the given mode name is enabled, false otherwise.
	 *
	 * @param {String} name
	 * @return {Boolean}
	 * @api public
	 */

	function enabled(name) {
	  var i, len;
	  for (i = 0, len = exports.skips.length; i < len; i++) {
	    if (exports.skips[i].test(name)) {
	      return false;
	    }
	  }
	  for (i = 0, len = exports.names.length; i < len; i++) {
	    if (exports.names[i].test(name)) {
	      return true;
	    }
	  }
	  return false;
	}

	/**
	 * Coerce `val`.
	 *
	 * @param {Mixed} val
	 * @return {Mixed}
	 * @api private
	 */

	function coerce(val) {
	  if (val instanceof Error) return val.stack || val.message;
	  return val;
	}


/***/ },
/* 87 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;

	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;

	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;

	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;

	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};

	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;

	  if (!this._events)
	    this._events = {};

	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      }
	      throw TypeError('Uncaught, unspecified "error" event.');
	    }
	  }

	  handler = this._events[type];

	  if (isUndefined(handler))
	    return false;

	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }

	  return true;
	};

	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events)
	    this._events = {};

	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);

	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];

	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }

	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }

	  return this;
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  var fired = false;

	  function g() {
	    this.removeListener(type, g);

	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }

	  g.listener = listener;
	  this.on(type, g);

	  return this;
	};

	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events || !this._events[type])
	    return this;

	  list = this._events[type];
	  length = list.length;
	  position = -1;

	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);

	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }

	    if (position < 0)
	      return this;

	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }

	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }

	  return this;
	};

	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;

	  if (!this._events)
	    return this;

	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }

	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }

	  listeners = this._events[type];

	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];

	  return this;
	};

	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};

	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];

	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};

	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};

	function isFunction(arg) {
	  return typeof arg === 'function';
	}

	function isNumber(arg) {
	  return typeof arg === 'number';
	}

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}

	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ },
/* 88 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2014 Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 */

	"use strict";

	/**
	 * Constructs an enumeration with keys equal to their value.
	 *
	 * For example:
	 *
	 *   var COLORS = keyMirror({blue: null, red: null});
	 *   var myColor = COLORS.blue;
	 *   var isColorValid = !!COLORS[myColor];
	 *
	 * The last line could not be performed if the values of the generated enum were
	 * not equal to their keys.
	 *
	 *   Input:  {key1: val1, key2: val2}
	 *   Output: {key1: key1, key2: key2}
	 *
	 * @param {object} obj
	 * @return {object}
	 */
	var keyMirror = function(obj) {
	  var ret = {};
	  var key;
	  if (!(obj instanceof Object && !Array.isArray(obj))) {
	    throw new Error('keyMirror(...): Argument must be an object.');
	  }
	  for (key in obj) {
	    if (!obj.hasOwnProperty(key)) {
	      continue;
	    }
	    ret[key] = key;
	  }
	  return ret;
	};

	module.exports = keyMirror;


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = parse;
	exports.getLanguage = getLanguage;
	exports.getCountry = getCountry;
	exports.getScript = getScript;
	exports.getVariant = getVariant;
	exports.getKeyword = getKeyword;
	exports.normalize = normalize;
	exports.normalizeAcceptLanguage = normalizeAcceptLanguage;
	exports.prepareSupported = prepareSupported;
	exports.getBest = getBest;

	var _capitalize = __webpack_require__(30);

	var _capitalize2 = _interopRequireDefault(_capitalize);

	var _forEach = __webpack_require__(58);

	var _forEach2 = _interopRequireDefault(_forEach);

	var _isArray = __webpack_require__(1);

	var _isArray2 = _interopRequireDefault(_isArray);

	var _debug = __webpack_require__(85);

	var _debug2 = _interopRequireDefault(_debug);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var log = (0, _debug2.default)('locale-id');

	// http://userguide.icu-project.org/locale
	function parse(locale) {
	  if (!locale) {
	    return void 0;
	  }

	  // extract keyword
	  var stringLocale = String(locale);
	  var keywordPos = stringLocale.indexOf('@');

	  var keyword = keywordPos !== -1 ? stringLocale.substr(keywordPos + 1) : void 0;

	  var localeWithoutKeyword = keywordPos !== -1 ? stringLocale.substr(0, keywordPos) : stringLocale;

	  // en-us => en_us
	  var parts = String(localeWithoutKeyword).replace(/-/g, '_').split('_');

	  if (!parts.length || parts.length > 4) {
	    return void 0;
	  }

	  var language = parts.shift();
	  if (!language) {
	    return void 0;
	  }

	  var retVar = {
	    keyword: keyword,
	    language: language.toLowerCase()
	  };

	  if (!parts.length) {
	    return retVar;
	  }

	  if (parts.length === 3) {
	    var variant = parts.pop();
	    if (variant) {
	      retVar.variant = variant.toUpperCase();
	    }
	  }

	  var country = parts.pop();
	  if (country.length > 3) {
	    retVar.keyword = country;

	    country = parts.pop();
	  }

	  if (country) {
	    retVar.country = country.toUpperCase();
	  }

	  if (!parts.length) {
	    return retVar;
	  }

	  var script = parts.pop();
	  if (script) {
	    retVar.script = (0, _capitalize2.default)(script.toLowerCase());
	  }

	  return retVar;
	}

	function getLanguage(locale) {
	  var obj = parse(locale);
	  return obj ? obj.language : void 0;
	}

	function getCountry(locale) {
	  var obj = parse(locale);
	  return obj ? obj.country : void 0;
	}

	function getScript(locale) {
	  var obj = parse(locale);
	  return obj ? obj.script : void 0;
	}

	function getVariant(locale) {
	  var obj = parse(locale);
	  return obj ? obj.variant : void 0;
	}

	function getKeyword(locale) {
	  var obj = parse(locale);
	  return obj ? obj.keyword : void 0;
	}

	function normalize(locale) {
	  var delimeter = arguments.length <= 1 || arguments[1] === undefined ? '_' : arguments[1];

	  var obj = parse(locale);
	  if (!obj) {
	    return obj;
	  }

	  var result = obj.language;

	  if (obj.script) {
	    result += '' + delimeter + obj.script;
	  }

	  if (obj.country) {
	    result += '' + delimeter + obj.country;
	  }

	  return result;
	}

	var splitAcceptLanguageRegEx = /([a-z]{1,8}(-[a-z]{1,8})?)\s*(;\s*q\s*=\s*(1|0\.[0-9]+))?/ig;
	var acceptLanguageItemRegEx = /^([a-z]{1,8}(-[a-z]{1,8})?)/i;

	function normalizeAcceptLanguage(acceptLanguage) {
	  var returnItems = [];
	  if (!acceptLanguage) {
	    return returnItems;
	  }

	  var items = acceptLanguage.match(splitAcceptLanguageRegEx) || [];
	  (0, _forEach2.default)(items, function (acceptLanguageItem) {
	    var matches = acceptLanguageItem.match(acceptLanguageItemRegEx) || [];
	    var locale = normalize(matches[0]);
	    if (locale) {
	      returnItems.push(locale);
	    }
	  });

	  return returnItems;
	}

	function prepareSupported(supported) {
	  var lgs = {};

	  (0, _forEach2.default)(supported, function (supportedLocale) {
	    var _parse = parse(supportedLocale);

	    var language = _parse.language;
	    var country = _parse.country;

	    if (!language) {
	      throw new Error('Locale ' + supportedLocale + ' is not parsable');
	    }

	    if (!lgs[language]) {
	      lgs[language] = {
	        countries: {},
	        firstCountry: void 0,
	        main: void 0
	      };
	    }

	    var lg = lgs[language];
	    if (country) {
	      lg.countries[country] = supportedLocale;

	      if (!lg.firstCountry) {
	        lg.firstCountry = supportedLocale;
	      }
	    } else {
	      lg.main = supportedLocale;
	    }
	  });

	  return lgs;
	}

	function getBest(supported, locale, defaultLocale, getAnyCountry) {
	  var lgs = (0, _isArray2.default)(supported) ? prepareSupported(supported) : supported;

	  // return defaultLocale if current locale is undefined
	  if (!locale && defaultLocale) {
	    return getBest(supported, defaultLocale, void 0, getAnyCountry);
	  }

	  if (!locale) {
	    log('Locale ' + locale + ' is not supported');
	    return void 0;
	  }

	  var _parse2 = parse(locale);

	  var language = _parse2.language;
	  var country = _parse2.country;

	  if (!language) {
	    return defaultLocale;
	  }

	  // selected locale is not supported
	  if (!lgs[language]) {
	    log('Locale ' + locale + ' is not supported');

	    if (locale === defaultLocale) {
	      return void 0;
	    }

	    return getBest(supported, defaultLocale, null, getAnyCountry);
	  }

	  var _lgs$language = lgs[language];
	  var countries = _lgs$language.countries;
	  var _lgs$language$main = _lgs$language.main;
	  var main = _lgs$language$main === undefined ? defaultLocale : _lgs$language$main;
	  var firstCountry = _lgs$language.firstCountry;

	  if (!countries || !country) {
	    if (getAnyCountry && firstCountry) {
	      return firstCountry;
	    }

	    return main;
	  }

	  if (getAnyCountry && firstCountry) {
	    return countries[country] ? countries[country] : firstCountry;
	  }

	  return countries[country] ? countries[country] : main;
	}

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(5),
	    root = __webpack_require__(4);

	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView');

	module.exports = DataView;


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var hashClear = __webpack_require__(134),
	    hashDelete = __webpack_require__(135),
	    hashGet = __webpack_require__(136),
	    hashHas = __webpack_require__(137),
	    hashSet = __webpack_require__(138);

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	module.exports = Hash;


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(5),
	    root = __webpack_require__(4);

	/* Built-in method references that are verified to be native. */
	var Promise = getNative(root, 'Promise');

	module.exports = Promise;


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(5),
	    root = __webpack_require__(4);

	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');

	module.exports = Set;


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(23),
	    setCacheAdd = __webpack_require__(153),
	    setCacheHas = __webpack_require__(154);

	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values ? values.length : 0;

	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}

	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;

	module.exports = SetCache;


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(4);

	/** Built-in value references. */
	var Uint8Array = root.Uint8Array;

	module.exports = Uint8Array;


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(5),
	    root = __webpack_require__(4);

	/* Built-in method references that are verified to be native. */
	var WeakMap = getNative(root, 'WeakMap');

	module.exports = WeakMap;


/***/ },
/* 97 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.forEach` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array.length;

	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}

	module.exports = arrayEach;


/***/ },
/* 98 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.filter` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */
	function arrayFilter(array, predicate) {
	  var index = -1,
	      length = array.length,
	      resIndex = 0,
	      result = [];

	  while (++index < length) {
	    var value = array[index];
	    if (predicate(value, index, array)) {
	      result[resIndex++] = value;
	    }
	  }
	  return result;
	}

	module.exports = arrayFilter;


/***/ },
/* 99 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array.length,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	module.exports = arrayMap;


/***/ },
/* 100 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array.length;

	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}

	module.exports = arraySome;


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(57);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    object[key] = value;
	  }
	}

	module.exports = assignValue;


/***/ },
/* 102 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.clamp` which doesn't coerce arguments to numbers.
	 *
	 * @private
	 * @param {number} number The number to clamp.
	 * @param {number} [lower] The lower bound.
	 * @param {number} upper The upper bound.
	 * @returns {number} Returns the clamped number.
	 */
	function baseClamp(number, lower, upper) {
	  if (number === number) {
	    if (upper !== undefined) {
	      number = number <= upper ? number : upper;
	    }
	    if (lower !== undefined) {
	      number = number >= lower ? number : lower;
	    }
	  }
	  return number;
	}

	module.exports = baseClamp;


/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	var baseEach = __webpack_require__(13);

	/**
	 * The base implementation of `_.filter` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */
	function baseFilter(collection, predicate) {
	  var result = [];
	  baseEach(collection, function(value, index, collection) {
	    if (predicate(value, index, collection)) {
	      result.push(value);
	    }
	  });
	  return result;
	}

	module.exports = baseFilter;


/***/ },
/* 104 */
/***/ function(module, exports) {

	/**
	 * The base implementation of methods like `_.find` and `_.findKey`, without
	 * support for iteratee shorthands, which iterates over `collection` using
	 * `eachFunc`.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to search.
	 * @param {Function} predicate The function invoked per iteration.
	 * @param {Function} eachFunc The function to iterate over `collection`.
	 * @param {boolean} [retKey] Specify returning the key of the found element
	 *  instead of the element itself.
	 * @returns {*} Returns the found element or its key, else `undefined`.
	 */
	function baseFind(collection, predicate, eachFunc, retKey) {
	  var result;
	  eachFunc(collection, function(value, key, collection) {
	    if (predicate(value, key, collection)) {
	      result = retKey ? key : value;
	      return false;
	    }
	  });
	  return result;
	}

	module.exports = baseFind;


/***/ },
/* 105 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.findIndex` and `_.findLastIndex` without
	 * support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {Function} predicate The function invoked per iteration.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseFindIndex(array, predicate, fromRight) {
	  var length = array.length,
	      index = fromRight ? length : -1;

	  while ((fromRight ? index-- : ++index < length)) {
	    if (predicate(array[index], index, array)) {
	      return index;
	    }
	  }
	  return -1;
	}

	module.exports = baseFindIndex;


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	var createBaseFor = __webpack_require__(123);

	/**
	 * The base implementation of `baseForOwn` which iterates over `object`
	 * properties returned by `keysFunc` and invokes `iteratee` for each property.
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();

	module.exports = baseFor;


/***/ },
/* 107 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.hasIn` without support for deep paths.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHasIn(object, key) {
	  return key in Object(object);
	}

	module.exports = baseHasIn;


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(41),
	    equalArrays = __webpack_require__(50),
	    equalByTag = __webpack_require__(128),
	    equalObjects = __webpack_require__(129),
	    getTag = __webpack_require__(52),
	    isArray = __webpack_require__(1),
	    isHostObject = __webpack_require__(26),
	    isTypedArray = __webpack_require__(172);

	/** Used to compose bitmasks for comparison styles. */
	var PARTIAL_COMPARE_FLAG = 2;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = arrayTag,
	      othTag = arrayTag;

	  if (!objIsArr) {
	    objTag = getTag(object);
	    objTag = objTag == argsTag ? objectTag : objTag;
	  }
	  if (!othIsArr) {
	    othTag = getTag(other);
	    othTag = othTag == argsTag ? objectTag : othTag;
	  }
	  var objIsObj = objTag == objectTag && !isHostObject(object),
	      othIsObj = othTag == objectTag && !isHostObject(other),
	      isSameTag = objTag == othTag;

	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack);
	    return (objIsArr || isTypedArray(object))
	      ? equalArrays(object, other, equalFunc, customizer, bitmask, stack)
	      : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
	  }
	  if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;

	      stack || (stack = new Stack);
	      return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack);
	  return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
	}

	module.exports = baseIsEqualDeep;


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(41),
	    baseIsEqual = __webpack_require__(48);

	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;

	/**
	 * The base implementation of `_.isMatch` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Object} source The object of property values to match.
	 * @param {Array} matchData The property names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, source, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;

	  if (object == null) {
	    return !length;
	  }
	  object = Object(object);
	  while (index--) {
	    var data = matchData[index];
	    if ((noCustomizer && data[2])
	          ? data[1] !== object[data[0]]
	          : !(data[0] in object)
	        ) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];

	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var stack = new Stack;
	      if (customizer) {
	        var result = customizer(objValue, srcValue, key, object, source, stack);
	      }
	      if (!(result === undefined
	            ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack)
	            : result
	          )) {
	        return false;
	      }
	    }
	  }
	  return true;
	}

	module.exports = baseIsMatch;


/***/ },
/* 110 */
/***/ function(module, exports) {

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = Object.keys;

	/**
	 * The base implementation of `_.keys` which doesn't skip the constructor
	 * property of prototypes or treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  return nativeKeys(Object(object));
	}

	module.exports = baseKeys;


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsMatch = __webpack_require__(109),
	    getMatchData = __webpack_require__(132),
	    matchesStrictComparable = __webpack_require__(55);

	/**
	 * The base implementation of `_.matches` which doesn't clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatches(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
	  }
	  return function(object) {
	    return object === source || baseIsMatch(object, source, matchData);
	  };
	}

	module.exports = baseMatches;


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(48),
	    get = __webpack_require__(31),
	    hasIn = __webpack_require__(167),
	    isKey = __webpack_require__(8),
	    isStrictComparable = __webpack_require__(53),
	    matchesStrictComparable = __webpack_require__(55),
	    toKey = __webpack_require__(9);

	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;

	/**
	 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  if (isKey(path) && isStrictComparable(srcValue)) {
	    return matchesStrictComparable(toKey(path), srcValue);
	  }
	  return function(object) {
	    var objValue = get(object, path);
	    return (objValue === undefined && objValue === srcValue)
	      ? hasIn(object, path)
	      : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
	  };
	}

	module.exports = baseMatchesProperty;


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(45);

	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyDeep(path) {
	  return function(object) {
	    return baseGet(object, path);
	  };
	}

	module.exports = basePropertyDeep;


/***/ },
/* 114 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.reduce` and `_.reduceRight`, without support
	 * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {*} accumulator The initial value.
	 * @param {boolean} initAccum Specify using the first or last element of
	 *  `collection` as the initial value.
	 * @param {Function} eachFunc The function to iterate over `collection`.
	 * @returns {*} Returns the accumulated value.
	 */
	function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
	  eachFunc(collection, function(value, index, collection) {
	    accumulator = initAccum
	      ? (initAccum = false, value)
	      : iteratee(accumulator, value, index, collection);
	  });
	  return accumulator;
	}

	module.exports = baseReduce;


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(101),
	    castPath = __webpack_require__(24),
	    isIndex = __webpack_require__(27),
	    isKey = __webpack_require__(8),
	    isObject = __webpack_require__(3),
	    toKey = __webpack_require__(9);

	/**
	 * The base implementation of `_.set`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to set.
	 * @param {*} value The value to set.
	 * @param {Function} [customizer] The function to customize path creation.
	 * @returns {Object} Returns `object`.
	 */
	function baseSet(object, path, value, customizer) {
	  path = isKey(path, object) ? [path] : castPath(path);

	  var index = -1,
	      length = path.length,
	      lastIndex = length - 1,
	      nested = object;

	  while (nested != null && ++index < length) {
	    var key = toKey(path[index]);
	    if (isObject(nested)) {
	      var newValue = value;
	      if (index != lastIndex) {
	        var objValue = nested[key];
	        newValue = customizer ? customizer(objValue, key, nested) : undefined;
	        if (newValue === undefined) {
	          newValue = objValue == null
	            ? (isIndex(path[index + 1]) ? [] : {})
	            : objValue;
	        }
	      }
	      assignValue(nested, key, newValue);
	    }
	    nested = nested[key];
	  }
	  return object;
	}

	module.exports = baseSet;


/***/ },
/* 116 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.slice` without an iteratee call guard.
	 *
	 * @private
	 * @param {Array} array The array to slice.
	 * @param {number} [start=0] The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the slice of `array`.
	 */
	function baseSlice(array, start, end) {
	  var index = -1,
	      length = array.length;

	  if (start < 0) {
	    start = -start > length ? 0 : (length + start);
	  }
	  end = end > length ? length : end;
	  if (end < 0) {
	    end += length;
	  }
	  length = start > end ? 0 : ((end - start) >>> 0);
	  start >>>= 0;

	  var result = Array(length);
	  while (++index < length) {
	    result[index] = array[index + start];
	  }
	  return result;
	}

	module.exports = baseSlice;


/***/ },
/* 117 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	module.exports = baseTimes;


/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(99);

	/**
	 * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
	 * of key-value pairs for `object` corresponding to the property names of `props`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array} props The property names to get values for.
	 * @returns {Object} Returns the key-value pairs.
	 */
	function baseToPairs(object, props) {
	  return arrayMap(props, function(key) {
	    return [key, object[key]];
	  });
	}

	module.exports = baseToPairs;


/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(47);

	/**
	 * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
	 * that is not found in the character symbols.
	 *
	 * @private
	 * @param {Array} strSymbols The string symbols to inspect.
	 * @param {Array} chrSymbols The character symbols to find.
	 * @returns {number} Returns the index of the last unmatched string symbol.
	 */
	function charsEndIndex(strSymbols, chrSymbols) {
	  var index = strSymbols.length;

	  while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
	  return index;
	}

	module.exports = charsEndIndex;


/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(47);

	/**
	 * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
	 * that is not found in the character symbols.
	 *
	 * @private
	 * @param {Array} strSymbols The string symbols to inspect.
	 * @param {Array} chrSymbols The character symbols to find.
	 * @returns {number} Returns the index of the first unmatched string symbol.
	 */
	function charsStartIndex(strSymbols, chrSymbols) {
	  var index = -1,
	      length = strSymbols.length;

	  while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
	  return index;
	}

	module.exports = charsStartIndex;


/***/ },
/* 121 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a global object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {null|Object} Returns `value` if it's a global object, else `null`.
	 */
	function checkGlobal(value) {
	  return (value && value.Object === Object) ? value : null;
	}

	module.exports = checkGlobal;


/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(32);

	/**
	 * Creates a `baseEach` or `baseEachRight` function.
	 *
	 * @private
	 * @param {Function} eachFunc The function to iterate over a collection.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseEach(eachFunc, fromRight) {
	  return function(collection, iteratee) {
	    if (collection == null) {
	      return collection;
	    }
	    if (!isArrayLike(collection)) {
	      return eachFunc(collection, iteratee);
	    }
	    var length = collection.length,
	        index = fromRight ? length : -1,
	        iterable = Object(collection);

	    while ((fromRight ? index-- : ++index < length)) {
	      if (iteratee(iterable[index], index, iterable) === false) {
	        break;
	      }
	    }
	    return collection;
	  };
	}

	module.exports = createBaseEach;


/***/ },
/* 123 */
/***/ function(module, exports) {

	/**
	 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;

	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}

	module.exports = createBaseFor;


/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	var castSlice = __webpack_require__(25),
	    reHasComplexSymbol = __webpack_require__(28),
	    stringToArray = __webpack_require__(29),
	    toString = __webpack_require__(2);

	/**
	 * Creates a function like `_.lowerFirst`.
	 *
	 * @private
	 * @param {string} methodName The name of the `String` case method to use.
	 * @returns {Function} Returns the new case function.
	 */
	function createCaseFirst(methodName) {
	  return function(string) {
	    string = toString(string);

	    var strSymbols = reHasComplexSymbol.test(string)
	      ? stringToArray(string)
	      : undefined;

	    var chr = strSymbols
	      ? strSymbols[0]
	      : string.charAt(0);

	    var trailing = strSymbols
	      ? castSlice(strSymbols, 1).join('')
	      : string.slice(1);

	    return chr[methodName]() + trailing;
	  };
	}

	module.exports = createCaseFirst;


/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	var arrayReduce = __webpack_require__(43),
	    deburr = __webpack_require__(165),
	    words = __webpack_require__(184);

	/** Used to compose unicode capture groups. */
	var rsApos = "['\u2019]";

	/** Used to match apostrophes. */
	var reApos = RegExp(rsApos, 'g');

	/**
	 * Creates a function like `_.camelCase`.
	 *
	 * @private
	 * @param {Function} callback The function to combine each word.
	 * @returns {Function} Returns the new compounder function.
	 */
	function createCompounder(callback) {
	  return function(string) {
	    return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
	  };
	}

	module.exports = createCompounder;


/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	var baseToPairs = __webpack_require__(118),
	    getTag = __webpack_require__(52),
	    mapToArray = __webpack_require__(54),
	    setToPairs = __webpack_require__(156);

	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    setTag = '[object Set]';

	/**
	 * Creates a `_.toPairs` or `_.toPairsIn` function.
	 *
	 * @private
	 * @param {Function} keysFunc The function to get the keys of a given object.
	 * @returns {Function} Returns the new pairs function.
	 */
	function createToPairs(keysFunc) {
	  return function(object) {
	    var tag = getTag(object);
	    if (tag == mapTag) {
	      return mapToArray(object);
	    }
	    if (tag == setTag) {
	      return setToPairs(object);
	    }
	    return baseToPairs(object, keysFunc(object));
	  };
	}

	module.exports = createToPairs;


/***/ },
/* 127 */
/***/ function(module, exports) {

	/** Used to map latin-1 supplementary letters to basic latin letters. */
	var deburredLetters = {
	  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
	  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
	  '\xc7': 'C',  '\xe7': 'c',
	  '\xd0': 'D',  '\xf0': 'd',
	  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
	  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
	  '\xcC': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
	  '\xeC': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
	  '\xd1': 'N',  '\xf1': 'n',
	  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
	  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
	  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
	  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
	  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
	  '\xc6': 'Ae', '\xe6': 'ae',
	  '\xde': 'Th', '\xfe': 'th',
	  '\xdf': 'ss'
	};

	/**
	 * Used by `_.deburr` to convert latin-1 supplementary letters to basic latin letters.
	 *
	 * @private
	 * @param {string} letter The matched letter to deburr.
	 * @returns {string} Returns the deburred letter.
	 */
	function deburrLetter(letter) {
	  return deburredLetters[letter];
	}

	module.exports = deburrLetter;


/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(42),
	    Uint8Array = __webpack_require__(95),
	    equalArrays = __webpack_require__(50),
	    mapToArray = __webpack_require__(54),
	    setToArray = __webpack_require__(155);

	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]';

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
	  switch (tag) {
	    case dataViewTag:
	      if ((object.byteLength != other.byteLength) ||
	          (object.byteOffset != other.byteOffset)) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;

	    case arrayBufferTag:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;

	    case boolTag:
	    case dateTag:
	      // Coerce dates and booleans to numbers, dates to milliseconds and
	      // booleans to `1` or `0` treating invalid dates coerced to `NaN` as
	      // not equal.
	      return +object == +other;

	    case errorTag:
	      return object.name == other.name && object.message == other.message;

	    case numberTag:
	      // Treat `NaN` vs. `NaN` as equal.
	      return (object != +object) ? other != +other : object == +other;

	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/6.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == (other + '');

	    case mapTag:
	      var convert = mapToArray;

	    case setTag:
	      var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
	      convert || (convert = setToArray);

	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= UNORDERED_COMPARE_FLAG;
	      stack.set(object, other);

	      // Recursively compare objects (susceptible to call stack limits).
	      return equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);

	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}

	module.exports = equalByTag;


/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	var baseHas = __webpack_require__(46),
	    keys = __webpack_require__(20);

	/** Used to compose bitmasks for comparison styles. */
	var PARTIAL_COMPARE_FLAG = 2;

	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      objProps = keys(object),
	      objLength = objProps.length,
	      othProps = keys(other),
	      othLength = othProps.length;

	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : baseHas(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);

	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;

	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  return result;
	}

	module.exports = equalObjects;


/***/ },
/* 130 */
/***/ function(module, exports) {

	/** Used to map characters to HTML entities. */
	var htmlEscapes = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;',
	  "'": '&#39;',
	  '`': '&#96;'
	};

	/**
	 * Used by `_.escape` to convert characters to HTML entities.
	 *
	 * @private
	 * @param {string} chr The matched character to escape.
	 * @returns {string} Returns the escaped character.
	 */
	function escapeHtmlChar(chr) {
	  return htmlEscapes[chr];
	}

	module.exports = escapeHtmlChar;


/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(49);

	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a
	 * [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792) that affects
	 * Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');

	module.exports = getLength;


/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	var isStrictComparable = __webpack_require__(53),
	    toPairs = __webpack_require__(180);

	/**
	 * Gets the property names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	  var result = toPairs(object),
	      length = result.length;

	  while (length--) {
	    result[length][2] = isStrictComparable(result[length][1]);
	  }
	  return result;
	}

	module.exports = getMatchData;


/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(24),
	    isArguments = __webpack_require__(60),
	    isArray = __webpack_require__(1),
	    isIndex = __webpack_require__(27),
	    isKey = __webpack_require__(8),
	    isLength = __webpack_require__(18),
	    isString = __webpack_require__(62),
	    toKey = __webpack_require__(9);

	/**
	 * Checks if `path` exists on `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @param {Function} hasFunc The function to check properties.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 */
	function hasPath(object, path, hasFunc) {
	  path = isKey(path, object) ? [path] : castPath(path);

	  var result,
	      index = -1,
	      length = path.length;

	  while (++index < length) {
	    var key = toKey(path[index]);
	    if (!(result = object != null && hasFunc(object, key))) {
	      break;
	    }
	    object = object[key];
	  }
	  if (result) {
	    return result;
	  }
	  var length = object ? object.length : 0;
	  return !!length && isLength(length) && isIndex(key, length) &&
	    (isArray(object) || isString(object) || isArguments(object));
	}

	module.exports = hasPath;


/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(16);

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	}

	module.exports = hashClear;


/***/ },
/* 135 */
/***/ function(module, exports) {

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  return this.has(key) && delete this.__data__[key];
	}

	module.exports = hashDelete;


/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(16);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}

	module.exports = hashGet;


/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(16);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
	}

	module.exports = hashHas;


/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(16);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}

	module.exports = hashSet;


/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(117),
	    isArguments = __webpack_require__(60),
	    isArray = __webpack_require__(1),
	    isLength = __webpack_require__(18),
	    isString = __webpack_require__(62);

	/**
	 * Creates an array of index keys for `object` values of arrays,
	 * `arguments` objects, and strings, otherwise `null` is returned.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array|null} Returns index keys, else `null`.
	 */
	function indexKeys(object) {
	  var length = object ? object.length : undefined;
	  if (isLength(length) &&
	      (isArray(object) || isString(object) || isArguments(object))) {
	    return baseTimes(length, String);
	  }
	  return null;
	}

	module.exports = indexKeys;


/***/ },
/* 140 */
/***/ function(module, exports) {

	/**
	 * Gets the index at which the first occurrence of `NaN` is found in `array`.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched `NaN`, else `-1`.
	 */
	function indexOfNaN(array, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 0 : -1);

	  while ((fromRight ? index-- : ++index < length)) {
	    var other = array[index];
	    if (other !== other) {
	      return index;
	    }
	  }
	  return -1;
	}

	module.exports = indexOfNaN;


/***/ },
/* 141 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	module.exports = isKeyable;


/***/ },
/* 142 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

	  return value === proto;
	}

	module.exports = isPrototype;


/***/ },
/* 143 */
/***/ function(module, exports) {

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	}

	module.exports = listCacheClear;


/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(12);

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  return true;
	}

	module.exports = listCacheDelete;


/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(12);

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	module.exports = listCacheGet;


/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(12);

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	module.exports = listCacheHas;


/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(12);

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	module.exports = listCacheSet;


/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	var Hash = __webpack_require__(91),
	    ListCache = __webpack_require__(11),
	    Map = __webpack_require__(40);

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}

	module.exports = mapCacheClear;


/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(15);

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  return getMapData(this, key)['delete'](key);
	}

	module.exports = mapCacheDelete;


/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(15);

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	module.exports = mapCacheGet;


/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(15);

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	module.exports = mapCacheHas;


/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(15);

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  getMapData(this, key).set(key, value);
	  return this;
	}

	module.exports = mapCacheSet;


/***/ },
/* 153 */
/***/ function(module, exports) {

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}

	module.exports = setCacheAdd;


/***/ },
/* 154 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}

	module.exports = setCacheHas;


/***/ },
/* 155 */
/***/ function(module, exports) {

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}

	module.exports = setToArray;


/***/ },
/* 156 */
/***/ function(module, exports) {

	/**
	 * Converts `set` to its value-value pairs.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the value-value pairs.
	 */
	function setToPairs(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function(value) {
	    result[++index] = [value, value];
	  });
	  return result;
	}

	module.exports = setToPairs;


/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(11);

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	}

	module.exports = stackClear;


/***/ },
/* 158 */
/***/ function(module, exports) {

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  return this.__data__['delete'](key);
	}

	module.exports = stackDelete;


/***/ },
/* 159 */
/***/ function(module, exports) {

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}

	module.exports = stackGet;


/***/ },
/* 160 */
/***/ function(module, exports) {

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}

	module.exports = stackHas;


/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(11),
	    MapCache = __webpack_require__(23);

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var cache = this.__data__;
	  if (cache instanceof ListCache && cache.__data__.length == LARGE_ARRAY_SIZE) {
	    cache = this.__data__ = new MapCache(cache.__data__);
	  }
	  cache.set(key, value);
	  return this;
	}

	module.exports = stackSet;


/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	var reHasComplexSymbol = __webpack_require__(28);

	/** Used to compose unicode character classes. */
	var rsAstralRange = '\\ud800-\\udfff',
	    rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23',
	    rsComboSymbolsRange = '\\u20d0-\\u20f0',
	    rsVarRange = '\\ufe0e\\ufe0f';

	/** Used to compose unicode capture groups. */
	var rsAstral = '[' + rsAstralRange + ']',
	    rsCombo = '[' + rsComboMarksRange + rsComboSymbolsRange + ']',
	    rsFitz = '\\ud83c[\\udffb-\\udfff]',
	    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
	    rsNonAstral = '[^' + rsAstralRange + ']',
	    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
	    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
	    rsZWJ = '\\u200d';

	/** Used to compose unicode regexes. */
	var reOptMod = rsModifier + '?',
	    rsOptVar = '[' + rsVarRange + ']?',
	    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
	    rsSeq = rsOptVar + reOptMod + rsOptJoin,
	    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

	/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
	var reComplexSymbol = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

	/**
	 * Gets the number of symbols in `string`.
	 *
	 * @private
	 * @param {string} string The string to inspect.
	 * @returns {number} Returns the string size.
	 */
	function stringSize(string) {
	  if (!(string && reHasComplexSymbol.test(string))) {
	    return string.length;
	  }
	  var result = reComplexSymbol.lastIndex = 0;
	  while (reComplexSymbol.test(string)) {
	    result++;
	  }
	  return result;
	}

	module.exports = stringSize;


/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	var memoize = __webpack_require__(173),
	    toString = __webpack_require__(2);

	/** Used to match property names within property paths. */
	var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]/g;

	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;

	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoize(function(string) {
	  var result = [];
	  toString(string).replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});

	module.exports = stringToPath;


/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	var capitalize = __webpack_require__(30),
	    createCompounder = __webpack_require__(125);

	/**
	 * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to convert.
	 * @returns {string} Returns the camel cased string.
	 * @example
	 *
	 * _.camelCase('Foo Bar');
	 * // => 'fooBar'
	 *
	 * _.camelCase('--foo-bar--');
	 * // => 'fooBar'
	 *
	 * _.camelCase('__FOO_BAR__');
	 * // => 'fooBar'
	 */
	var camelCase = createCompounder(function(result, word, index) {
	  word = word.toLowerCase();
	  return result + (index ? capitalize(word) : word);
	});

	module.exports = camelCase;


/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	var deburrLetter = __webpack_require__(127),
	    toString = __webpack_require__(2);

	/** Used to match latin-1 supplementary letters (excluding mathematical operators). */
	var reLatin1 = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g;

	/** Used to compose unicode character classes. */
	var rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23',
	    rsComboSymbolsRange = '\\u20d0-\\u20f0';

	/** Used to compose unicode capture groups. */
	var rsCombo = '[' + rsComboMarksRange + rsComboSymbolsRange + ']';

	/**
	 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
	 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
	 */
	var reComboMark = RegExp(rsCombo, 'g');

	/**
	 * Deburrs `string` by converting
	 * [latin-1 supplementary letters](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
	 * to basic latin letters and removing
	 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to deburr.
	 * @returns {string} Returns the deburred string.
	 * @example
	 *
	 * _.deburr('déjà vu');
	 * // => 'deja vu'
	 */
	function deburr(string) {
	  string = toString(string);
	  return string && string.replace(reLatin1, deburrLetter).replace(reComboMark, '');
	}

	module.exports = deburr;


/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	var escapeHtmlChar = __webpack_require__(130),
	    toString = __webpack_require__(2);

	/** Used to match HTML entities and HTML characters. */
	var reUnescapedHtml = /[&<>"'`]/g,
	    reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

	/**
	 * Converts the characters "&", "<", ">", '"', "'", and "\`" in `string` to
	 * their corresponding HTML entities.
	 *
	 * **Note:** No other characters are escaped. To escape additional
	 * characters use a third-party library like [_he_](https://mths.be/he).
	 *
	 * Though the ">" character is escaped for symmetry, characters like
	 * ">" and "/" don't need escaping in HTML and have no special meaning
	 * unless they're part of a tag or unquoted attribute value. See
	 * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
	 * (under "semi-related fun fact") for more details.
	 *
	 * Backticks are escaped because in IE < 9, they can break out of
	 * attribute values or HTML comments. See [#59](https://html5sec.org/#59),
	 * [#102](https://html5sec.org/#102), [#108](https://html5sec.org/#108), and
	 * [#133](https://html5sec.org/#133) of the
	 * [HTML5 Security Cheatsheet](https://html5sec.org/) for more details.
	 *
	 * When working with HTML you should always
	 * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
	 * XSS vectors.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category String
	 * @param {string} [string=''] The string to escape.
	 * @returns {string} Returns the escaped string.
	 * @example
	 *
	 * _.escape('fred, barney, & pebbles');
	 * // => 'fred, barney, &amp; pebbles'
	 */
	function escape(string) {
	  string = toString(string);
	  return (string && reHasUnescapedHtml.test(string))
	    ? string.replace(reUnescapedHtml, escapeHtmlChar)
	    : string;
	}

	module.exports = escape;


/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	var baseHasIn = __webpack_require__(107),
	    hasPath = __webpack_require__(133);

	/**
	 * Checks if `path` is a direct or inherited property of `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
	 *
	 * _.hasIn(object, 'a');
	 * // => true
	 *
	 * _.hasIn(object, 'a.b');
	 * // => true
	 *
	 * _.hasIn(object, ['a', 'b']);
	 * // => true
	 *
	 * _.hasIn(object, 'b');
	 * // => false
	 */
	function hasIn(object, path) {
	  return object != null && hasPath(object, path, baseHasIn);
	}

	module.exports = hasIn;


/***/ },
/* 168 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument given to it.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 *
	 * _.identity(object) === object;
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = identity;


/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(32),
	    isObjectLike = __webpack_require__(6);

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	module.exports = isArrayLikeObject;


/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(33),
	    isHostObject = __webpack_require__(26),
	    isObject = __webpack_require__(3),
	    toSource = __webpack_require__(56);

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	module.exports = isNative;


/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(3);

	/** `Object#toString` result references. */
	var regexpTag = '[object RegExp]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `RegExp` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isRegExp(/abc/);
	 * // => true
	 *
	 * _.isRegExp('/abc/');
	 * // => false
	 */
	function isRegExp(value) {
	  return isObject(value) && objectToString.call(value) == regexpTag;
	}

	module.exports = isRegExp;


/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	var isLength = __webpack_require__(18),
	    isObjectLike = __webpack_require__(6);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	function isTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
	}

	module.exports = isTypedArray;


/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(23);

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;

	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result);
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache);
	  return memoized;
	}

	// Assign cache to `_.memoize`.
	memoize.Cache = MapCache;

	module.exports = memoize;


/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(49),
	    basePropertyDeep = __webpack_require__(113),
	    isKey = __webpack_require__(8),
	    toKey = __webpack_require__(9);

	/**
	 * Creates a function that returns the value at `path` of a given object.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': 2 } },
	 *   { 'a': { 'b': 1 } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b'));
	 * // => [2, 1]
	 *
	 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
	}

	module.exports = property;


/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	var arrayReduce = __webpack_require__(43),
	    baseEach = __webpack_require__(13),
	    baseIteratee = __webpack_require__(7),
	    baseReduce = __webpack_require__(114),
	    isArray = __webpack_require__(1);

	/**
	 * Reduces `collection` to a value which is the accumulated result of running
	 * each element in `collection` thru `iteratee`, where each successive
	 * invocation is supplied the return value of the previous. If `accumulator`
	 * is not given, the first element of `collection` is used as the initial
	 * value. The iteratee is invoked with four arguments:
	 * (accumulator, value, index|key, collection).
	 *
	 * Many lodash methods are guarded to work as iteratees for methods like
	 * `_.reduce`, `_.reduceRight`, and `_.transform`.
	 *
	 * The guarded methods are:
	 * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
	 * and `sortBy`
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	 * @param {*} [accumulator] The initial value.
	 * @returns {*} Returns the accumulated value.
	 * @see _.reduceRight
	 * @example
	 *
	 * _.reduce([1, 2], function(sum, n) {
	 *   return sum + n;
	 * }, 0);
	 * // => 3
	 *
	 * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
	 *   (result[value] || (result[value] = [])).push(key);
	 *   return result;
	 * }, {});
	 * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
	 */
	function reduce(collection, iteratee, accumulator) {
	  var func = isArray(collection) ? arrayReduce : baseReduce,
	      initAccum = arguments.length < 3;

	  return func(collection, baseIteratee(iteratee, 4), accumulator, initAccum, baseEach);
	}

	module.exports = reduce;


/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	var arrayFilter = __webpack_require__(98),
	    baseFilter = __webpack_require__(103),
	    baseIteratee = __webpack_require__(7),
	    isArray = __webpack_require__(1);

	/**
	 * The opposite of `_.filter`; this method returns the elements of `collection`
	 * that `predicate` does **not** return truthy for.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Array|Function|Object|string} [predicate=_.identity]
	 *  The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 * @see _.filter
	 * @example
	 *
	 * var users = [
	 *   { 'user': 'barney', 'age': 36, 'active': false },
	 *   { 'user': 'fred',   'age': 40, 'active': true }
	 * ];
	 *
	 * _.reject(users, function(o) { return !o.active; });
	 * // => objects for ['fred']
	 *
	 * // The `_.matches` iteratee shorthand.
	 * _.reject(users, { 'age': 40, 'active': true });
	 * // => objects for ['barney']
	 *
	 * // The `_.matchesProperty` iteratee shorthand.
	 * _.reject(users, ['active', false]);
	 * // => objects for ['fred']
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.reject(users, 'active');
	 * // => objects for ['barney']
	 */
	function reject(collection, predicate) {
	  var func = isArray(collection) ? arrayFilter : baseFilter;
	  predicate = baseIteratee(predicate, 3);
	  return func(collection, function(value, index, collection) {
	    return !predicate(value, index, collection);
	  });
	}

	module.exports = reject;


/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	var baseClamp = __webpack_require__(102),
	    baseToString = __webpack_require__(14),
	    toInteger = __webpack_require__(64),
	    toString = __webpack_require__(2);

	/**
	 * Checks if `string` starts with the given target string.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to search.
	 * @param {string} [target] The string to search for.
	 * @param {number} [position=0] The position to search from.
	 * @returns {boolean} Returns `true` if `string` starts with `target`,
	 *  else `false`.
	 * @example
	 *
	 * _.startsWith('abc', 'a');
	 * // => true
	 *
	 * _.startsWith('abc', 'b');
	 * // => false
	 *
	 * _.startsWith('abc', 'b', 1);
	 * // => true
	 */
	function startsWith(string, target, position) {
	  string = toString(string);
	  position = baseClamp(toInteger(position), 0, string.length);
	  return string.lastIndexOf(baseToString(target), position) == position;
	}

	module.exports = startsWith;


/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	var toNumber = __webpack_require__(179);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0,
	    MAX_INTEGER = 1.7976931348623157e+308;

	/**
	 * Converts `value` to a finite number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.12.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted number.
	 * @example
	 *
	 * _.toFinite(3.2);
	 * // => 3.2
	 *
	 * _.toFinite(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toFinite(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toFinite('3.2');
	 * // => 3.2
	 */
	function toFinite(value) {
	  if (!value) {
	    return value === 0 ? value : 0;
	  }
	  value = toNumber(value);
	  if (value === INFINITY || value === -INFINITY) {
	    var sign = (value < 0 ? -1 : 1);
	    return sign * MAX_INTEGER;
	  }
	  return value === value ? value : 0;
	}

	module.exports = toFinite;


/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(33),
	    isObject = __webpack_require__(3),
	    isSymbol = __webpack_require__(19);

	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;

	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;

	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;

	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;

	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;

	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = isFunction(value.valueOf) ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}

	module.exports = toNumber;


/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	var createToPairs = __webpack_require__(126),
	    keys = __webpack_require__(20);

	/**
	 * Creates an array of own enumerable string keyed-value pairs for `object`
	 * which can be consumed by `_.fromPairs`. If `object` is a map or set, its
	 * entries are returned.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @alias entries
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the key-value pairs.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.toPairs(new Foo);
	 * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
	 */
	var toPairs = createToPairs(keys);

	module.exports = toPairs;


/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(14),
	    castSlice = __webpack_require__(25),
	    charsEndIndex = __webpack_require__(119),
	    charsStartIndex = __webpack_require__(120),
	    stringToArray = __webpack_require__(29),
	    toString = __webpack_require__(2);

	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;

	/**
	 * Removes leading and trailing whitespace or specified characters from `string`.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to trim.
	 * @param {string} [chars=whitespace] The characters to trim.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	 * @returns {string} Returns the trimmed string.
	 * @example
	 *
	 * _.trim('  abc  ');
	 * // => 'abc'
	 *
	 * _.trim('-_-abc-_-', '_-');
	 * // => 'abc'
	 *
	 * _.map(['  foo  ', '  bar  '], _.trim);
	 * // => ['foo', 'bar']
	 */
	function trim(string, chars, guard) {
	  string = toString(string);
	  if (string && (guard || chars === undefined)) {
	    return string.replace(reTrim, '');
	  }
	  if (!string || !(chars = baseToString(chars))) {
	    return string;
	  }
	  var strSymbols = stringToArray(string),
	      chrSymbols = stringToArray(chars),
	      start = charsStartIndex(strSymbols, chrSymbols),
	      end = charsEndIndex(strSymbols, chrSymbols) + 1;

	  return castSlice(strSymbols, start, end).join('');
	}

	module.exports = trim;


/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(14),
	    castSlice = __webpack_require__(25),
	    isObject = __webpack_require__(3),
	    isRegExp = __webpack_require__(171),
	    reHasComplexSymbol = __webpack_require__(28),
	    stringSize = __webpack_require__(162),
	    stringToArray = __webpack_require__(29),
	    toInteger = __webpack_require__(64),
	    toString = __webpack_require__(2);

	/** Used as default options for `_.truncate`. */
	var DEFAULT_TRUNC_LENGTH = 30,
	    DEFAULT_TRUNC_OMISSION = '...';

	/** Used to match `RegExp` flags from their coerced string values. */
	var reFlags = /\w*$/;

	/**
	 * Truncates `string` if it's longer than the given maximum string length.
	 * The last characters of the truncated string are replaced with the omission
	 * string which defaults to "...".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category String
	 * @param {string} [string=''] The string to truncate.
	 * @param {Object} [options={}] The options object.
	 * @param {number} [options.length=30] The maximum string length.
	 * @param {string} [options.omission='...'] The string to indicate text is omitted.
	 * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
	 * @returns {string} Returns the truncated string.
	 * @example
	 *
	 * _.truncate('hi-diddly-ho there, neighborino');
	 * // => 'hi-diddly-ho there, neighbo...'
	 *
	 * _.truncate('hi-diddly-ho there, neighborino', {
	 *   'length': 24,
	 *   'separator': ' '
	 * });
	 * // => 'hi-diddly-ho there,...'
	 *
	 * _.truncate('hi-diddly-ho there, neighborino', {
	 *   'length': 24,
	 *   'separator': /,? +/
	 * });
	 * // => 'hi-diddly-ho there...'
	 *
	 * _.truncate('hi-diddly-ho there, neighborino', {
	 *   'omission': ' [...]'
	 * });
	 * // => 'hi-diddly-ho there, neig [...]'
	 */
	function truncate(string, options) {
	  var length = DEFAULT_TRUNC_LENGTH,
	      omission = DEFAULT_TRUNC_OMISSION;

	  if (isObject(options)) {
	    var separator = 'separator' in options ? options.separator : separator;
	    length = 'length' in options ? toInteger(options.length) : length;
	    omission = 'omission' in options ? baseToString(options.omission) : omission;
	  }
	  string = toString(string);

	  var strLength = string.length;
	  if (reHasComplexSymbol.test(string)) {
	    var strSymbols = stringToArray(string);
	    strLength = strSymbols.length;
	  }
	  if (length >= strLength) {
	    return string;
	  }
	  var end = length - stringSize(omission);
	  if (end < 1) {
	    return omission;
	  }
	  var result = strSymbols
	    ? castSlice(strSymbols, 0, end).join('')
	    : string.slice(0, end);

	  if (separator === undefined) {
	    return result + omission;
	  }
	  if (strSymbols) {
	    end += (result.length - end);
	  }
	  if (isRegExp(separator)) {
	    if (string.slice(end).search(separator)) {
	      var match,
	          substring = result;

	      if (!separator.global) {
	        separator = RegExp(separator.source, toString(reFlags.exec(separator)) + 'g');
	      }
	      separator.lastIndex = 0;
	      while ((match = separator.exec(substring))) {
	        var newEnd = match.index;
	      }
	      result = result.slice(0, newEnd === undefined ? end : newEnd);
	    }
	  } else if (string.indexOf(baseToString(separator), end) != end) {
	    var index = result.lastIndexOf(separator);
	    if (index > -1) {
	      result = result.slice(0, index);
	    }
	  }
	  return result + omission;
	}

	module.exports = truncate;


/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	var createCaseFirst = __webpack_require__(124);

	/**
	 * Converts the first character of `string` to upper case.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category String
	 * @param {string} [string=''] The string to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.upperFirst('fred');
	 * // => 'Fred'
	 *
	 * _.upperFirst('FRED');
	 * // => 'FRED'
	 */
	var upperFirst = createCaseFirst('toUpperCase');

	module.exports = upperFirst;


/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	var toString = __webpack_require__(2);

	/** Used to match non-compound words composed of alphanumeric characters. */
	var reBasicWord = /[a-zA-Z0-9]+/g;

	/** Used to compose unicode character classes. */
	var rsAstralRange = '\\ud800-\\udfff',
	    rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23',
	    rsComboSymbolsRange = '\\u20d0-\\u20f0',
	    rsDingbatRange = '\\u2700-\\u27bf',
	    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
	    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
	    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
	    rsPunctuationRange = '\\u2000-\\u206f',
	    rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
	    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
	    rsVarRange = '\\ufe0e\\ufe0f',
	    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

	/** Used to compose unicode capture groups. */
	var rsApos = "['\u2019]",
	    rsBreak = '[' + rsBreakRange + ']',
	    rsCombo = '[' + rsComboMarksRange + rsComboSymbolsRange + ']',
	    rsDigits = '\\d+',
	    rsDingbat = '[' + rsDingbatRange + ']',
	    rsLower = '[' + rsLowerRange + ']',
	    rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
	    rsFitz = '\\ud83c[\\udffb-\\udfff]',
	    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
	    rsNonAstral = '[^' + rsAstralRange + ']',
	    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
	    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
	    rsUpper = '[' + rsUpperRange + ']',
	    rsZWJ = '\\u200d';

	/** Used to compose unicode regexes. */
	var rsLowerMisc = '(?:' + rsLower + '|' + rsMisc + ')',
	    rsUpperMisc = '(?:' + rsUpper + '|' + rsMisc + ')',
	    rsOptLowerContr = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
	    rsOptUpperContr = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
	    reOptMod = rsModifier + '?',
	    rsOptVar = '[' + rsVarRange + ']?',
	    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
	    rsSeq = rsOptVar + reOptMod + rsOptJoin,
	    rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;

	/** Used to match complex or compound words. */
	var reComplexWord = RegExp([
	  rsUpper + '?' + rsLower + '+' + rsOptLowerContr + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
	  rsUpperMisc + '+' + rsOptUpperContr + '(?=' + [rsBreak, rsUpper + rsLowerMisc, '$'].join('|') + ')',
	  rsUpper + '?' + rsLowerMisc + '+' + rsOptLowerContr,
	  rsUpper + '+' + rsOptUpperContr,
	  rsDigits,
	  rsEmoji
	].join('|'), 'g');

	/** Used to detect strings that need a more robust regexp to match words. */
	var reHasComplexWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

	/**
	 * Splits `string` into an array of its words.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to inspect.
	 * @param {RegExp|string} [pattern] The pattern to match words.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	 * @returns {Array} Returns the words of `string`.
	 * @example
	 *
	 * _.words('fred, barney, & pebbles');
	 * // => ['fred', 'barney', 'pebbles']
	 *
	 * _.words('fred, barney, & pebbles', /[^, ]+/g);
	 * // => ['fred', 'barney', '&', 'pebbles']
	 */
	function words(string, pattern, guard) {
	  string = toString(string);
	  pattern = guard ? undefined : pattern;

	  if (pattern === undefined) {
	    pattern = reHasComplexWord.test(string) ? reComplexWord : reBasicWord;
	  }
	  return string.match(pattern) || [];
	}

	module.exports = words;


/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var _cp = [
	function(n, ord) {
	  if (ord) return 'other';
	  return 'other';
	},
	function(n, ord) {
	  if (ord) return 'other';
	  return (n == 1) ? 'one' : 'other';
	},
	function(n, ord) {
	  if (ord) return 'other';
	  return ((n == 0
	          || n == 1)) ? 'one' : 'other';
	},
	function(n, ord) {
	  var s = String(n).split('.'), v0 = !s[1];
	  if (ord) return 'other';
	  return (n == 1 && v0) ? 'one' : 'other';
	}
	];

	(function (root, plurals) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (plurals), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === 'object') {
	    module.exports = plurals;
	  } else {
	    root.plurals = plurals;
	  }
	}(this, {
	af: _cp[1],

	ak: _cp[2],

	am: function(n, ord) {
	  if (ord) return 'other';
	  return (n >= 0 && n <= 1) ? 'one' : 'other';
	},

	ar: function(n, ord) {
	  var s = String(n).split('.'), t0 = Number(s[0]) == n,
	      n100 = t0 && s[0].slice(-2);
	  if (ord) return 'other';
	  return (n == 0) ? 'zero'
	      : (n == 1) ? 'one'
	      : (n == 2) ? 'two'
	      : ((n100 >= 3 && n100 <= 10)) ? 'few'
	      : ((n100 >= 11 && n100 <= 99)) ? 'many'
	      : 'other';
	},

	as: function(n, ord) {
	  if (ord) return ((n == 1 || n == 5 || n == 7 || n == 8 || n == 9
	          || n == 10)) ? 'one'
	      : ((n == 2
	          || n == 3)) ? 'two'
	      : (n == 4) ? 'few'
	      : (n == 6) ? 'many'
	      : 'other';
	  return (n >= 0 && n <= 1) ? 'one' : 'other';
	},

	asa: _cp[1],

	ast: _cp[3],

	az: function(n, ord) {
	  var s = String(n).split('.'), i = s[0], i10 = i.slice(-1),
	      i100 = i.slice(-2), i1000 = i.slice(-3);
	  if (ord) return ((i10 == 1 || i10 == 2 || i10 == 5 || i10 == 7 || i10 == 8)
	          || (i100 == 20 || i100 == 50 || i100 == 70
	          || i100 == 80)) ? 'one'
	      : ((i10 == 3 || i10 == 4) || (i1000 == 100 || i1000 == 200
	          || i1000 == 300 || i1000 == 400 || i1000 == 500 || i1000 == 600 || i1000 == 700
	          || i1000 == 800
	          || i1000 == 900)) ? 'few'
	      : (i == 0 || i10 == 6 || (i100 == 40 || i100 == 60
	          || i100 == 90)) ? 'many'
	      : 'other';
	  return (n == 1) ? 'one' : 'other';
	},

	be: function(n, ord) {
	  var s = String(n).split('.'), t0 = Number(s[0]) == n,
	      n10 = t0 && s[0].slice(-1), n100 = t0 && s[0].slice(-2);
	  if (ord) return ((n10 == 2
	          || n10 == 3) && n100 != 12 && n100 != 13) ? 'few' : 'other';
	  return (n10 == 1 && n100 != 11) ? 'one'
	      : ((n10 >= 2 && n10 <= 4) && (n100 < 12
	          || n100 > 14)) ? 'few'
	      : (t0 && n10 == 0 || (n10 >= 5 && n10 <= 9)
	          || (n100 >= 11 && n100 <= 14)) ? 'many'
	      : 'other';
	},

	bem: _cp[1],

	bez: _cp[1],

	bg: _cp[1],

	bh: _cp[2],

	bm: _cp[0],

	bn: function(n, ord) {
	  if (ord) return ((n == 1 || n == 5 || n == 7 || n == 8 || n == 9
	          || n == 10)) ? 'one'
	      : ((n == 2
	          || n == 3)) ? 'two'
	      : (n == 4) ? 'few'
	      : (n == 6) ? 'many'
	      : 'other';
	  return (n >= 0 && n <= 1) ? 'one' : 'other';
	},

	bo: _cp[0],

	br: function(n, ord) {
	  var s = String(n).split('.'), t0 = Number(s[0]) == n,
	      n10 = t0 && s[0].slice(-1), n100 = t0 && s[0].slice(-2),
	      n1000000 = t0 && s[0].slice(-6);
	  if (ord) return 'other';
	  return (n10 == 1 && n100 != 11 && n100 != 71 && n100 != 91) ? 'one'
	      : (n10 == 2 && n100 != 12 && n100 != 72 && n100 != 92) ? 'two'
	      : (((n10 == 3 || n10 == 4) || n10 == 9) && (n100 < 10
	          || n100 > 19) && (n100 < 70 || n100 > 79) && (n100 < 90
	          || n100 > 99)) ? 'few'
	      : (n != 0 && t0 && n1000000 == 0) ? 'many'
	      : 'other';
	},

	brx: _cp[1],

	bs: function(n, ord) {
	  var s = String(n).split('.'), i = s[0], f = s[1] || '', v0 = !s[1],
	      i10 = i.slice(-1), i100 = i.slice(-2), f10 = f.slice(-1), f100 = f.slice(-2);
	  if (ord) return 'other';
	  return (v0 && i10 == 1 && i100 != 11
	          || f10 == 1 && f100 != 11) ? 'one'
	      : (v0 && (i10 >= 2 && i10 <= 4) && (i100 < 12 || i100 > 14)
	          || (f10 >= 2 && f10 <= 4) && (f100 < 12
	          || f100 > 14)) ? 'few'
	      : 'other';
	},

	ca: function(n, ord) {
	  var s = String(n).split('.'), v0 = !s[1];
	  if (ord) return ((n == 1
	          || n == 3)) ? 'one'
	      : (n == 2) ? 'two'
	      : (n == 4) ? 'few'
	      : 'other';
	  return (n == 1 && v0) ? 'one' : 'other';
	},

	ce: _cp[1],

	cgg: _cp[1],

	chr: _cp[1],

	ckb: _cp[1],

	cs: function(n, ord) {
	  var s = String(n).split('.'), i = s[0], v0 = !s[1];
	  if (ord) return 'other';
	  return (n == 1 && v0) ? 'one'
	      : ((i >= 2 && i <= 4) && v0) ? 'few'
	      : (!v0) ? 'many'
	      : 'other';
	},

	cy: function(n, ord) {
	  if (ord) return ((n == 0 || n == 7 || n == 8
	          || n == 9)) ? 'zero'
	      : (n == 1) ? 'one'
	      : (n == 2) ? 'two'
	      : ((n == 3
	          || n == 4)) ? 'few'
	      : ((n == 5
	          || n == 6)) ? 'many'
	      : 'other';
	  return (n == 0) ? 'zero'
	      : (n == 1) ? 'one'
	      : (n == 2) ? 'two'
	      : (n == 3) ? 'few'
	      : (n == 6) ? 'many'
	      : 'other';
	},

	da: function(n, ord) {
	  var s = String(n).split('.'), i = s[0], t0 = Number(s[0]) == n;
	  if (ord) return 'other';
	  return (n == 1 || !t0 && (i == 0
	          || i == 1)) ? 'one' : 'other';
	},

	de: _cp[3],

	dsb: function(n, ord) {
	  var s = String(n).split('.'), i = s[0], f = s[1] || '', v0 = !s[1],
	      i100 = i.slice(-2), f100 = f.slice(-2);
	  if (ord) return 'other';
	  return (v0 && i100 == 1
	          || f100 == 1) ? 'one'
	      : (v0 && i100 == 2
	          || f100 == 2) ? 'two'
	      : (v0 && (i100 == 3 || i100 == 4) || (f100 == 3
	          || f100 == 4)) ? 'few'
	      : 'other';
	},

	dv: _cp[1],

	dz: _cp[0],

	ee: _cp[1],

	el: _cp[1],

	en: function(n, ord) {
	  var s = String(n).split('.'), v0 = !s[1], t0 = Number(s[0]) == n,
	      n10 = t0 && s[0].slice(-1), n100 = t0 && s[0].slice(-2);
	  if (ord) return (n10 == 1 && n100 != 11) ? 'one'
	      : (n10 == 2 && n100 != 12) ? 'two'
	      : (n10 == 3 && n100 != 13) ? 'few'
	      : 'other';
	  return (n == 1 && v0) ? 'one' : 'other';
	},

	eo: _cp[1],

	es: _cp[1],

	et: _cp[3],

	eu: _cp[1],

	fa: function(n, ord) {
	  if (ord) return 'other';
	  return (n >= 0 && n <= 1) ? 'one' : 'other';
	},

	ff: function(n, ord) {
	  if (ord) return 'other';
	  return (n >= 0 && n < 2) ? 'one' : 'other';
	},

	fi: _cp[3],

	fil: function(n, ord) {
	  var s = String(n).split('.'), i = s[0], f = s[1] || '', v0 = !s[1],
	      i10 = i.slice(-1), f10 = f.slice(-1);
	  if (ord) return (n == 1) ? 'one' : 'other';
	  return (v0 && (i == 1 || i == 2 || i == 3)
	          || v0 && i10 != 4 && i10 != 6 && i10 != 9
	          || !v0 && f10 != 4 && f10 != 6 && f10 != 9) ? 'one' : 'other';
	},

	fo: _cp[1],

	fr: function(n, ord) {
	  if (ord) return (n == 1) ? 'one' : 'other';
	  return (n >= 0 && n < 2) ? 'one' : 'other';
	},

	fur: _cp[1],

	fy: _cp[3],

	ga: function(n, ord) {
	  var s = String(n).split('.'), t0 = Number(s[0]) == n;
	  if (ord) return (n == 1) ? 'one' : 'other';
	  return (n == 1) ? 'one'
	      : (n == 2) ? 'two'
	      : ((t0 && n >= 3 && n <= 6)) ? 'few'
	      : ((t0 && n >= 7 && n <= 10)) ? 'many'
	      : 'other';
	},

	gd: function(n, ord) {
	  var s = String(n).split('.'), t0 = Number(s[0]) == n;
	  if (ord) return 'other';
	  return ((n == 1
	          || n == 11)) ? 'one'
	      : ((n == 2
	          || n == 12)) ? 'two'
	      : (((t0 && n >= 3 && n <= 10)
	          || (t0 && n >= 13 && n <= 19))) ? 'few'
	      : 'other';
	},

	gl: _cp[3],

	gsw: _cp[1],

	gu: function(n, ord) {
	  if (ord) return (n == 1) ? 'one'
	      : ((n == 2
	          || n == 3)) ? 'two'
	      : (n == 4) ? 'few'
	      : (n == 6) ? 'many'
	      : 'other';
	  return (n >= 0 && n <= 1) ? 'one' : 'other';
	},

	guw: _cp[2],

	gv: function(n, ord) {
	  var s = String(n).split('.'), i = s[0], v0 = !s[1], i10 = i.slice(-1),
	      i100 = i.slice(-2);
	  if (ord) return 'other';
	  return (v0 && i10 == 1) ? 'one'
	      : (v0 && i10 == 2) ? 'two'
	      : (v0 && (i100 == 0 || i100 == 20 || i100 == 40 || i100 == 60
	          || i100 == 80)) ? 'few'
	      : (!v0) ? 'many'
	      : 'other';
	},

	ha: _cp[1],

	haw: _cp[1],

	he: function(n, ord) {
	  var s = String(n).split('.'), i = s[0], v0 = !s[1], t0 = Number(s[0]) == n,
	      n10 = t0 && s[0].slice(-1);
	  if (ord) return 'other';
	  return (n == 1 && v0) ? 'one'
	      : (i == 2 && v0) ? 'two'
	      : (v0 && (n < 0
	          || n > 10) && t0 && n10 == 0) ? 'many'
	      : 'other';
	},

	hi: function(n, ord) {
	  if (ord) return (n == 1) ? 'one'
	      : ((n == 2
	          || n == 3)) ? 'two'
	      : (n == 4) ? 'few'
	      : (n == 6) ? 'many'
	      : 'other';
	  return (n >= 0 && n <= 1) ? 'one' : 'other';
	},

	hr: function(n, ord) {
	  var s = String(n).split('.'), i = s[0], f = s[1] || '', v0 = !s[1],
	      i10 = i.slice(-1), i100 = i.slice(-2), f10 = f.slice(-1), f100 = f.slice(-2);
	  if (ord) return 'other';
	  return (v0 && i10 == 1 && i100 != 11
	          || f10 == 1 && f100 != 11) ? 'one'
	      : (v0 && (i10 >= 2 && i10 <= 4) && (i100 < 12 || i100 > 14)
	          || (f10 >= 2 && f10 <= 4) && (f100 < 12
	          || f100 > 14)) ? 'few'
	      : 'other';
	},

	hsb: function(n, ord) {
	  var s = String(n).split('.'), i = s[0], f = s[1] || '', v0 = !s[1],
	      i100 = i.slice(-2), f100 = f.slice(-2);
	  if (ord) return 'other';
	  return (v0 && i100 == 1
	          || f100 == 1) ? 'one'
	      : (v0 && i100 == 2
	          || f100 == 2) ? 'two'
	      : (v0 && (i100 == 3 || i100 == 4) || (f100 == 3
	          || f100 == 4)) ? 'few'
	      : 'other';
	},

	hu: function(n, ord) {
	  if (ord) return ((n == 1
	          || n == 5)) ? 'one' : 'other';
	  return (n == 1) ? 'one' : 'other';
	},

	hy: function(n, ord) {
	  if (ord) return (n == 1) ? 'one' : 'other';
	  return (n >= 0 && n < 2) ? 'one' : 'other';
	},

	id: _cp[0],

	ig: _cp[0],

	ii: _cp[0],

	"in": _cp[0],

	is: function(n, ord) {
	  var s = String(n).split('.'), i = s[0], t0 = Number(s[0]) == n,
	      i10 = i.slice(-1), i100 = i.slice(-2);
	  if (ord) return 'other';
	  return (t0 && i10 == 1 && i100 != 11
	          || !t0) ? 'one' : 'other';
	},

	it: function(n, ord) {
	  var s = String(n).split('.'), v0 = !s[1];
	  if (ord) return ((n == 11 || n == 8 || n == 80
	          || n == 800)) ? 'many' : 'other';
	  return (n == 1 && v0) ? 'one' : 'other';
	},

	iu: function(n, ord) {
	  if (ord) return 'other';
	  return (n == 1) ? 'one'
	      : (n == 2) ? 'two'
	      : 'other';
	},

	iw: function(n, ord) {
	  var s = String(n).split('.'), i = s[0], v0 = !s[1], t0 = Number(s[0]) == n,
	      n10 = t0 && s[0].slice(-1);
	  if (ord) return 'other';
	  return (n == 1 && v0) ? 'one'
	      : (i == 2 && v0) ? 'two'
	      : (v0 && (n < 0
	          || n > 10) && t0 && n10 == 0) ? 'many'
	      : 'other';
	},

	ja: _cp[0],

	jbo: _cp[0],

	jgo: _cp[1],

	ji: _cp[3],

	jmc: _cp[1],

	jv: _cp[0],

	jw: _cp[0],

	ka: function(n, ord) {
	  var s = String(n).split('.'), i = s[0], i100 = i.slice(-2);
	  if (ord) return (i == 1) ? 'one'
	      : (i == 0 || ((i100 >= 2 && i100 <= 20) || i100 == 40 || i100 == 60
	          || i100 == 80)) ? 'many'
	      : 'other';
	  return (n == 1) ? 'one' : 'other';
	},

	kab: function(n, ord) {
	  if (ord) return 'other';
	  return (n >= 0 && n < 2) ? 'one' : 'other';
	},

	kaj: _cp[1],

	kcg: _cp[1],

	kde: _cp[0],

	kea: _cp[0],

	kk: function(n, ord) {
	  var s = String(n).split('.'), t0 = Number(s[0]) == n,
	      n10 = t0 && s[0].slice(-1);
	  if (ord) return (n10 == 6 || n10 == 9
	          || t0 && n10 == 0 && n != 0) ? 'many' : 'other';
	  return (n == 1) ? 'one' : 'other';
	},

	kkj: _cp[1],

	kl: _cp[1],

	km: _cp[0],

	kn: function(n, ord) {
	  if (ord) return 'other';
	  return (n >= 0 && n <= 1) ? 'one' : 'other';
	},

	ko: _cp[0],

	ks: _cp[1],

	ksb: _cp[1],

	ksh: function(n, ord) {
	  if (ord) return 'other';
	  return (n == 0) ? 'zero'
	      : (n == 1) ? 'one'
	      : 'other';
	},

	ku: _cp[1],

	kw: function(n, ord) {
	  if (ord) return 'other';
	  return (n == 1) ? 'one'
	      : (n == 2) ? 'two'
	      : 'other';
	},

	ky: _cp[1],

	lag: function(n, ord) {
	  var s = String(n).split('.'), i = s[0];
	  if (ord) return 'other';
	  return (n == 0) ? 'zero'
	      : ((i == 0
	          || i == 1) && n != 0) ? 'one'
	      : 'other';
	},

	lb: _cp[1],

	lg: _cp[1],

	lkt: _cp[0],

	ln: _cp[2],

	lo: function(n, ord) {
	  if (ord) return (n == 1) ? 'one' : 'other';
	  return 'other';
	},

	lt: function(n, ord) {
	  var s = String(n).split('.'), f = s[1] || '', t0 = Number(s[0]) == n,
	      n10 = t0 && s[0].slice(-1), n100 = t0 && s[0].slice(-2);
	  if (ord) return 'other';
	  return (n10 == 1 && (n100 < 11
	          || n100 > 19)) ? 'one'
	      : ((n10 >= 2 && n10 <= 9) && (n100 < 11
	          || n100 > 19)) ? 'few'
	      : (f != 0) ? 'many'
	      : 'other';
	},

	lv: function(n, ord) {
	  var s = String(n).split('.'), f = s[1] || '', v = f.length,
	      t0 = Number(s[0]) == n, n10 = t0 && s[0].slice(-1),
	      n100 = t0 && s[0].slice(-2), f100 = f.slice(-2), f10 = f.slice(-1);
	  if (ord) return 'other';
	  return (t0 && n10 == 0 || (n100 >= 11 && n100 <= 19)
	          || v == 2 && (f100 >= 11 && f100 <= 19)) ? 'zero'
	      : (n10 == 1 && n100 != 11 || v == 2 && f10 == 1 && f100 != 11
	          || v != 2 && f10 == 1) ? 'one'
	      : 'other';
	},

	mas: _cp[1],

	mg: _cp[2],

	mgo: _cp[1],

	mk: function(n, ord) {
	  var s = String(n).split('.'), i = s[0], f = s[1] || '', v0 = !s[1],
	      i10 = i.slice(-1), i100 = i.slice(-2), f10 = f.slice(-1);
	  if (ord) return (i10 == 1 && i100 != 11) ? 'one'
	      : (i10 == 2 && i100 != 12) ? 'two'
	      : ((i10 == 7
	          || i10 == 8) && i100 != 17 && i100 != 18) ? 'many'
	      : 'other';
	  return (v0 && i10 == 1
	          || f10 == 1) ? 'one' : 'other';
	},

	ml: _cp[1],

	mn: _cp[1],

	mo: function(n, ord) {
	  var s = String(n).split('.'), v0 = !s[1], t0 = Number(s[0]) == n,
	      n100 = t0 && s[0].slice(-2);
	  if (ord) return (n == 1) ? 'one' : 'other';
	  return (n == 1 && v0) ? 'one'
	      : (!v0 || n == 0
	          || n != 1 && (n100 >= 1 && n100 <= 19)) ? 'few'
	      : 'other';
	},

	mr: function(n, ord) {
	  if (ord) return (n == 1) ? 'one'
	      : ((n == 2
	          || n == 3)) ? 'two'
	      : (n == 4) ? 'few'
	      : 'other';
	  return (n >= 0 && n <= 1) ? 'one' : 'other';
	},

	ms: function(n, ord) {
	  if (ord) return (n == 1) ? 'one' : 'other';
	  return 'other';
	},

	mt: function(n, ord) {
	  var s = String(n).split('.'), t0 = Number(s[0]) == n,
	      n100 = t0 && s[0].slice(-2);
	  if (ord) return 'other';
	  return (n == 1) ? 'one'
	      : (n == 0
	          || (n100 >= 2 && n100 <= 10)) ? 'few'
	      : ((n100 >= 11 && n100 <= 19)) ? 'many'
	      : 'other';
	},

	my: _cp[0],

	nah: _cp[1],

	naq: function(n, ord) {
	  if (ord) return 'other';
	  return (n == 1) ? 'one'
	      : (n == 2) ? 'two'
	      : 'other';
	},

	nb: _cp[1],

	nd: _cp[1],

	ne: function(n, ord) {
	  var s = String(n).split('.'), t0 = Number(s[0]) == n;
	  if (ord) return ((t0 && n >= 1 && n <= 4)) ? 'one' : 'other';
	  return (n == 1) ? 'one' : 'other';
	},

	nl: _cp[3],

	nn: _cp[1],

	nnh: _cp[1],

	no: _cp[1],

	nqo: _cp[0],

	nr: _cp[1],

	nso: _cp[2],

	ny: _cp[1],

	nyn: _cp[1],

	om: _cp[1],

	or: _cp[1],

	os: _cp[1],

	pa: _cp[2],

	pap: _cp[1],

	pl: function(n, ord) {
	  var s = String(n).split('.'), i = s[0], v0 = !s[1], i10 = i.slice(-1),
	      i100 = i.slice(-2);
	  if (ord) return 'other';
	  return (n == 1 && v0) ? 'one'
	      : (v0 && (i10 >= 2 && i10 <= 4) && (i100 < 12
	          || i100 > 14)) ? 'few'
	      : (v0 && i != 1 && (i10 == 0 || i10 == 1)
	          || v0 && (i10 >= 5 && i10 <= 9)
	          || v0 && (i100 >= 12 && i100 <= 14)) ? 'many'
	      : 'other';
	},

	prg: function(n, ord) {
	  var s = String(n).split('.'), f = s[1] || '', v = f.length,
	      t0 = Number(s[0]) == n, n10 = t0 && s[0].slice(-1),
	      n100 = t0 && s[0].slice(-2), f100 = f.slice(-2), f10 = f.slice(-1);
	  if (ord) return 'other';
	  return (t0 && n10 == 0 || (n100 >= 11 && n100 <= 19)
	          || v == 2 && (f100 >= 11 && f100 <= 19)) ? 'zero'
	      : (n10 == 1 && n100 != 11 || v == 2 && f10 == 1 && f100 != 11
	          || v != 2 && f10 == 1) ? 'one'
	      : 'other';
	},

	ps: _cp[1],

	pt: function(n, ord) {
	  var s = String(n).split('.'), t0 = Number(s[0]) == n;
	  if (ord) return 'other';
	  return ((t0 && n >= 0 && n <= 2) && n != 2) ? 'one' : 'other';
	},

	"pt-PT": _cp[3],

	rm: _cp[1],

	ro: function(n, ord) {
	  var s = String(n).split('.'), v0 = !s[1], t0 = Number(s[0]) == n,
	      n100 = t0 && s[0].slice(-2);
	  if (ord) return (n == 1) ? 'one' : 'other';
	  return (n == 1 && v0) ? 'one'
	      : (!v0 || n == 0
	          || n != 1 && (n100 >= 1 && n100 <= 19)) ? 'few'
	      : 'other';
	},

	rof: _cp[1],

	root: _cp[0],

	ru: function(n, ord) {
	  var s = String(n).split('.'), i = s[0], v0 = !s[1], i10 = i.slice(-1),
	      i100 = i.slice(-2);
	  if (ord) return 'other';
	  return (v0 && i10 == 1 && i100 != 11) ? 'one'
	      : (v0 && (i10 >= 2 && i10 <= 4) && (i100 < 12
	          || i100 > 14)) ? 'few'
	      : (v0 && i10 == 0 || v0 && (i10 >= 5 && i10 <= 9)
	          || v0 && (i100 >= 11 && i100 <= 14)) ? 'many'
	      : 'other';
	},

	rwk: _cp[1],

	sah: _cp[0],

	saq: _cp[1],

	sdh: _cp[1],

	se: function(n, ord) {
	  if (ord) return 'other';
	  return (n == 1) ? 'one'
	      : (n == 2) ? 'two'
	      : 'other';
	},

	seh: _cp[1],

	ses: _cp[0],

	sg: _cp[0],

	sh: function(n, ord) {
	  var s = String(n).split('.'), i = s[0], f = s[1] || '', v0 = !s[1],
	      i10 = i.slice(-1), i100 = i.slice(-2), f10 = f.slice(-1), f100 = f.slice(-2);
	  if (ord) return 'other';
	  return (v0 && i10 == 1 && i100 != 11
	          || f10 == 1 && f100 != 11) ? 'one'
	      : (v0 && (i10 >= 2 && i10 <= 4) && (i100 < 12 || i100 > 14)
	          || (f10 >= 2 && f10 <= 4) && (f100 < 12
	          || f100 > 14)) ? 'few'
	      : 'other';
	},

	shi: function(n, ord) {
	  var s = String(n).split('.'), t0 = Number(s[0]) == n;
	  if (ord) return 'other';
	  return (n >= 0 && n <= 1) ? 'one'
	      : ((t0 && n >= 2 && n <= 10)) ? 'few'
	      : 'other';
	},

	si: function(n, ord) {
	  var s = String(n).split('.'), i = s[0], f = s[1] || '';
	  if (ord) return 'other';
	  return ((n == 0 || n == 1)
	          || i == 0 && f == 1) ? 'one' : 'other';
	},

	sk: function(n, ord) {
	  var s = String(n).split('.'), i = s[0], v0 = !s[1];
	  if (ord) return 'other';
	  return (n == 1 && v0) ? 'one'
	      : ((i >= 2 && i <= 4) && v0) ? 'few'
	      : (!v0) ? 'many'
	      : 'other';
	},

	sl: function(n, ord) {
	  var s = String(n).split('.'), i = s[0], v0 = !s[1], i100 = i.slice(-2);
	  if (ord) return 'other';
	  return (v0 && i100 == 1) ? 'one'
	      : (v0 && i100 == 2) ? 'two'
	      : (v0 && (i100 == 3 || i100 == 4)
	          || !v0) ? 'few'
	      : 'other';
	},

	sma: function(n, ord) {
	  if (ord) return 'other';
	  return (n == 1) ? 'one'
	      : (n == 2) ? 'two'
	      : 'other';
	},

	smi: function(n, ord) {
	  if (ord) return 'other';
	  return (n == 1) ? 'one'
	      : (n == 2) ? 'two'
	      : 'other';
	},

	smj: function(n, ord) {
	  if (ord) return 'other';
	  return (n == 1) ? 'one'
	      : (n == 2) ? 'two'
	      : 'other';
	},

	smn: function(n, ord) {
	  if (ord) return 'other';
	  return (n == 1) ? 'one'
	      : (n == 2) ? 'two'
	      : 'other';
	},

	sms: function(n, ord) {
	  if (ord) return 'other';
	  return (n == 1) ? 'one'
	      : (n == 2) ? 'two'
	      : 'other';
	},

	sn: _cp[1],

	so: _cp[1],

	sq: function(n, ord) {
	  var s = String(n).split('.'), t0 = Number(s[0]) == n,
	      n10 = t0 && s[0].slice(-1), n100 = t0 && s[0].slice(-2);
	  if (ord) return (n == 1) ? 'one'
	      : (n10 == 4 && n100 != 14) ? 'many'
	      : 'other';
	  return (n == 1) ? 'one' : 'other';
	},

	sr: function(n, ord) {
	  var s = String(n).split('.'), i = s[0], f = s[1] || '', v0 = !s[1],
	      i10 = i.slice(-1), i100 = i.slice(-2), f10 = f.slice(-1), f100 = f.slice(-2);
	  if (ord) return 'other';
	  return (v0 && i10 == 1 && i100 != 11
	          || f10 == 1 && f100 != 11) ? 'one'
	      : (v0 && (i10 >= 2 && i10 <= 4) && (i100 < 12 || i100 > 14)
	          || (f10 >= 2 && f10 <= 4) && (f100 < 12
	          || f100 > 14)) ? 'few'
	      : 'other';
	},

	ss: _cp[1],

	ssy: _cp[1],

	st: _cp[1],

	sv: function(n, ord) {
	  var s = String(n).split('.'), v0 = !s[1], t0 = Number(s[0]) == n,
	      n10 = t0 && s[0].slice(-1), n100 = t0 && s[0].slice(-2);
	  if (ord) return ((n10 == 1
	          || n10 == 2) && n100 != 11 && n100 != 12) ? 'one' : 'other';
	  return (n == 1 && v0) ? 'one' : 'other';
	},

	sw: _cp[3],

	syr: _cp[1],

	ta: _cp[1],

	te: _cp[1],

	teo: _cp[1],

	th: _cp[0],

	ti: _cp[2],

	tig: _cp[1],

	tk: _cp[1],

	tl: function(n, ord) {
	  var s = String(n).split('.'), i = s[0], f = s[1] || '', v0 = !s[1],
	      i10 = i.slice(-1), f10 = f.slice(-1);
	  if (ord) return (n == 1) ? 'one' : 'other';
	  return (v0 && (i == 1 || i == 2 || i == 3)
	          || v0 && i10 != 4 && i10 != 6 && i10 != 9
	          || !v0 && f10 != 4 && f10 != 6 && f10 != 9) ? 'one' : 'other';
	},

	tn: _cp[1],

	to: _cp[0],

	tr: _cp[1],

	ts: _cp[1],

	tzm: function(n, ord) {
	  var s = String(n).split('.'), t0 = Number(s[0]) == n;
	  if (ord) return 'other';
	  return ((n == 0 || n == 1)
	          || (t0 && n >= 11 && n <= 99)) ? 'one' : 'other';
	},

	ug: _cp[1],

	uk: function(n, ord) {
	  var s = String(n).split('.'), i = s[0], v0 = !s[1], t0 = Number(s[0]) == n,
	      n10 = t0 && s[0].slice(-1), n100 = t0 && s[0].slice(-2), i10 = i.slice(-1),
	      i100 = i.slice(-2);
	  if (ord) return (n10 == 3 && n100 != 13) ? 'few' : 'other';
	  return (v0 && i10 == 1 && i100 != 11) ? 'one'
	      : (v0 && (i10 >= 2 && i10 <= 4) && (i100 < 12
	          || i100 > 14)) ? 'few'
	      : (v0 && i10 == 0 || v0 && (i10 >= 5 && i10 <= 9)
	          || v0 && (i100 >= 11 && i100 <= 14)) ? 'many'
	      : 'other';
	},

	ur: _cp[3],

	uz: _cp[1],

	ve: _cp[1],

	vi: function(n, ord) {
	  if (ord) return (n == 1) ? 'one' : 'other';
	  return 'other';
	},

	vo: _cp[1],

	vun: _cp[1],

	wa: _cp[2],

	wae: _cp[1],

	wo: _cp[0],

	xh: _cp[1],

	xog: _cp[1],

	yi: _cp[3],

	yo: _cp[0],

	zh: _cp[0],

	zu: function(n, ord) {
	  if (ord) return 'other';
	  return (n >= 0 && n <= 1) ? 'one' : 'other';
	}
	}));


/***/ },
/* 186 */
/***/ function(module, exports) {

	/**
	 * Helpers.
	 */

	var s = 1000;
	var m = s * 60;
	var h = m * 60;
	var d = h * 24;
	var y = d * 365.25;

	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @param {String|Number} val
	 * @param {Object} options
	 * @return {String|Number}
	 * @api public
	 */

	module.exports = function(val, options){
	  options = options || {};
	  if ('string' == typeof val) return parse(val);
	  return options.long
	    ? long(val)
	    : short(val);
	};

	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */

	function parse(str) {
	  str = '' + str;
	  if (str.length > 10000) return;
	  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
	  if (!match) return;
	  var n = parseFloat(match[1]);
	  var type = (match[2] || 'ms').toLowerCase();
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'yrs':
	    case 'yr':
	    case 'y':
	      return n * y;
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d;
	    case 'hours':
	    case 'hour':
	    case 'hrs':
	    case 'hr':
	    case 'h':
	      return n * h;
	    case 'minutes':
	    case 'minute':
	    case 'mins':
	    case 'min':
	    case 'm':
	      return n * m;
	    case 'seconds':
	    case 'second':
	    case 'secs':
	    case 'sec':
	    case 's':
	      return n * s;
	    case 'milliseconds':
	    case 'millisecond':
	    case 'msecs':
	    case 'msec':
	    case 'ms':
	      return n;
	  }
	}

	/**
	 * Short format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function short(ms) {
	  if (ms >= d) return Math.round(ms / d) + 'd';
	  if (ms >= h) return Math.round(ms / h) + 'h';
	  if (ms >= m) return Math.round(ms / m) + 'm';
	  if (ms >= s) return Math.round(ms / s) + 's';
	  return ms + 'ms';
	}

	/**
	 * Long format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function long(ms) {
	  return plural(ms, d, 'day')
	    || plural(ms, h, 'hour')
	    || plural(ms, m, 'minute')
	    || plural(ms, s, 'second')
	    || ms + ' ms';
	}

	/**
	 * Pluralization helper.
	 */

	function plural(ms, n, name) {
	  if (ms < n) return;
	  if (ms < n * 1.5) return Math.floor(ms / n) + ' ' + name;
	  return Math.ceil(ms / n) + ' ' + name + 's';
	}


/***/ },
/* 187 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }
/******/ ])
});
;