'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _lodashLangIsPlainObject = require('lodash/lang/isPlainObject');

var _lodashLangIsPlainObject2 = _interopRequireDefault(_lodashLangIsPlainObject);

var _lodashStringStartsWith = require('lodash/string/startsWith');

var _lodashStringStartsWith2 = _interopRequireDefault(_lodashStringStartsWith);

var _lodashCollectionFind = require('lodash/collection/find');

var _lodashCollectionFind2 = _interopRequireDefault(_lodashCollectionFind);

var _lodashCollectionReject = require('lodash/collection/reject');

var _lodashCollectionReject2 = _interopRequireDefault(_lodashCollectionReject);

var _lodashObjectGet = require('lodash/object/get');

var _lodashObjectGet2 = _interopRequireDefault(_lodashObjectGet);

var _lodashCollectionReduce = require('lodash/collection/reduce');

var _lodashCollectionReduce2 = _interopRequireDefault(_lodashCollectionReduce);

var _lodashObjectForOwn = require('lodash/object/forOwn');

var _lodashObjectForOwn2 = _interopRequireDefault(_lodashObjectForOwn);

var _parserParser = require('./parser/parser');

var _parserParser2 = _interopRequireDefault(_parserParser);

var _constantsMode = require('./constants/Mode');

var _constantsMode2 = _interopRequireDefault(_constantsMode);

var EMPTY_TEXT = '';

function resolveVariable(obj, path) {
  var value = (0, _lodashObjectGet2['default'])(obj, path);

  if (typeof value === 'function') {
    var pos = path.indexOf('.');
    if (pos === -1) {
      return value();
    }

    var pathBefore = path.substr(0, pos);
    var fnName = path.substr(pos + 1);

    var parentObj = (0, _lodashObjectGet2['default'])(obj, pathBefore);
    return parentObj[fnName]();
  }

  return value;
}

var Translation = (function () {
  function Translation(root, name, value) {
    var _this = this;

    _classCallCheck(this, Translation);

    var isDefault = name && (0, _lodashStringStartsWith2['default'])(name, '_');

    this._name = isDefault ? name.substr(1) : name;
    this._value = value;
    this._root = root || this;

    this._isDefault = isDefault;
    this._children = [];

    if ((0, _lodashLangIsPlainObject2['default'])(value)) {
      (0, _lodashObjectForOwn2['default'])(value, function (itemValue, key) {
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

      if (options.mode === _constantsMode2['default'].ICU) {
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

        var varToRef = (0, _lodashObjectGet2['default'])(attrs, variablePath);

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

        return (0, _lodashCollectionReduce2['default'])(filters, function (reducedValue, filter) {
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
    value: function _process(value, attrs, path) {
      if (attrs === undefined) attrs = {};

      if (!value) {
        return value;
      }

      var cache = this.getOptions().cache;
      if (cache.has(value)) {
        var data = cache.get(value);
        return this._buildText(data, attrs);
      }

      try {
        var data = _parserParser2['default'].parse(value);
        cache.set(value, data);
        return this._buildText(data, attrs);
      } catch (err) {
        this._root.emit('err', err, path, value, attrs);
        return void 0;
      }
    }
  }, {
    key: 'get',
    value: function get(path, attrs, defaultValue, fullPath) {
      if (attrs === undefined) attrs = {};

      if (typeof attrs === 'string') {
        return this.get(path, {}, attrs, fullPath);
      }

      if (typeof defaultValue === 'undefined') {
        return this.get(path, attrs, 'Missing translation for path: ' + path, fullPath);
      }

      if ((0, _lodashLangIsPlainObject2['default'])(path)) {
        return this.get(null, path, defaultValue, fullPath);
      }

      if (path) {
        var options = this.getOptions();
        var pos = path.indexOf('.');
        if (options.dotNotation && pos !== -1) {
          var _name = path.substr(0, pos);
          var newPath = path.substr(pos + 1);

          var translation = this[_name];
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
      if ((0, _lodashLangIsPlainObject2['default'])(value)) {
        // search default value
        var defaultChild = (0, _lodashCollectionFind2['default'])(this._children, function (child) {
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

      if ((0, _lodashLangIsPlainObject2['default'])(name)) {
        (0, _lodashObjectForOwn2['default'])(name, function (nameValue, key) {
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
        this._children = (0, _lodashCollectionReject2['default'])(this._children, function (child) {
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
})();

exports['default'] = Translation;
module.exports = exports['default'];