'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _lodashLangIsArray = require('lodash/lang/isArray');

var _lodashLangIsArray2 = _interopRequireDefault(_lodashLangIsArray);

var _lodashLangIsPlainObject = require('lodash/lang/isPlainObject');

var _lodashLangIsPlainObject2 = _interopRequireDefault(_lodashLangIsPlainObject);

var _lodashStringStartsWith = require('lodash/string/startsWith');

var _lodashStringStartsWith2 = _interopRequireDefault(_lodashStringStartsWith);

var _lodashCollectionFind = require('lodash/collection/find');

var _lodashCollectionFind2 = _interopRequireDefault(_lodashCollectionFind);

var _lodashCollectionReject = require('lodash/collection/reject');

var _lodashCollectionReject2 = _interopRequireDefault(_lodashCollectionReject);

var _lodashStringTrim = require('lodash/string/trim');

var _lodashStringTrim2 = _interopRequireDefault(_lodashStringTrim);

var _lodashObjectGet = require('lodash/object/get');

var _lodashObjectGet2 = _interopRequireDefault(_lodashObjectGet);

var VARIABLE_START = '$';

var Translation = (function () {
  function Translation(name, value) {
    var _this = this;

    var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
    var root = arguments.length <= 3 || arguments[3] === undefined ? this : arguments[3];

    _classCallCheck(this, Translation);

    var isDefault = name && (0, _lodashStringStartsWith2['default'])(name, '_');

    this._name = isDefault ? name.substr(1) : name;
    this._value = value;
    this._options = options;
    this._root = root;

    this._isDefault = isDefault;
    this._children = [];

    if ((0, _lodashLangIsPlainObject2['default'])(value)) {
      Object.keys(value).forEach(function (key) {
        _this.set(key, value[key], options);
      });
    }
  }

  _createClass(Translation, [{
    key: 'toString',
    value: function toString() {
      return this.get();
    }
  }, {
    key: '_processAttrs',
    value: function _processAttrs(value) {
      var attrs = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      if (!value) {
        return value;
      }

      var root = this._root;

      return value.replace(/{([\s\S]+?)}/g, function (m, key) {
        var name = (0, _lodashStringTrim2['default'])(key);
        if (!name) {
          return void 0;
        }

        // TODO check variable
        var isVariable = (0, _lodashStringStartsWith2['default'])(name, VARIABLE_START);
        if (!isVariable) {
          return root.get(name, attrs);
        }

        var variable = name.substr(VARIABLE_START.length);
        return (0, _lodashObjectGet2['default'])(attrs, variable);
      });
    }
  }, {
    key: 'get',
    value: function get(path) {
      var attrs = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      if ((0, _lodashLangIsPlainObject2['default'])(path)) {
        return this.get(null, path);
      }

      if (path) {
        var pos = path.indexOf('.');
        if (pos !== -1) {
          var _name = path.substr(0, pos);
          var newPath = path.substr(pos + 1);

          var translation = this[_name];
          if (!translation) {
            return void 0;
          }

          return translation.get(newPath, attrs);
        }

        return this[path].get(null, attrs);
      }

      var value = this._value;

      if ((0, _lodashLangIsArray2['default'])(value)) {
        // TODO fix it
        return this._getValueFromArray(value, attrs);
      }

      if ((0, _lodashLangIsPlainObject2['default'])(value)) {
        // search default value
        var defaultChild = (0, _lodashCollectionFind2['default'])(this._children, function (child) {
          return child._isDefault;
        });
        return defaultChild ? defaultChild.get(attrs) : void 0;
      }

      return this._processAttrs(value, attrs);
    }
  }, {
    key: 'set',
    value: function set(name, value) {
      var _this2 = this;

      if ((0, _lodashLangIsPlainObject2['default'])(name)) {
        Object.keys(name).forEach(function (key) {
          _this2.set(key, name[key]);
        });
        return this;
      }

      var translation = new Translation(name, value, this._options, this._root);
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

      return this;
    }
  }]);

  return Translation;
})();

exports['default'] = Translation;
module.exports = exports['default'];