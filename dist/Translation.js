'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var _lodashCollectionEvery = require('lodash/collection/every');

var _lodashCollectionEvery2 = _interopRequireDefault(_lodashCollectionEvery);

var _lodashCollectionSortBy = require('lodash/collection/sortBy');

var _lodashCollectionSortBy2 = _interopRequireDefault(_lodashCollectionSortBy);

var _lodashArrayFirst = require('lodash/array/first');

var _lodashArrayFirst2 = _interopRequireDefault(_lodashArrayFirst);

var _lodashCollectionFilter = require('lodash/collection/filter');

var _lodashCollectionFilter2 = _interopRequireDefault(_lodashCollectionFilter);

var ESCAPE_CHARACTER = '\\';
var VARIABLE_START = '$';
var VARIABLE_REGEX = /{([\s\S]+?)}/g;

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
      Object.keys(value).forEach(function (key) {
        _this.set(key, value[key]);
      });
    }
  }

  _createClass(Translation, [{
    key: 'toString',
    value: function toString() {
      return this.get();
    }
  }, {
    key: '_parseTranslation',
    value: function _parseTranslation(value, callback) {
      var parts = [];
      var startIndex = 0;

      while (true) {
        var match = VARIABLE_REGEX.exec(value);
        if (!match) {
          break;
        }

        var _match = _slicedToArray(match, 2);

        var text = _match[0];
        var inside = _match[1];
        var index = match.index;

        var before = value.substr(startIndex, index - startIndex);

        startIndex = index + text.length;

        // check escape character
        if (index > 0 && value[index - 1] === ESCAPE_CHARACTER) {
          parts.push({
            isVariable: false,
            text: before.substr(0, before.length - ESCAPE_CHARACTER.length) + text
          });

          continue;
        }

        if (before) {
          parts.push({
            isVariable: false,
            text: before
          });
        }

        var variableName = (0, _lodashStringTrim2['default'])(inside);
        if (!variableName) {
          continue;
        }

        var isExternal = variableName[0] === VARIABLE_START;

        parts.push({
          isVariable: true,
          isExternal: isExternal,
          variable: isExternal ? variableName.substr(1) : variableName
        });
      }

      if (startIndex >= value.length) {
        return parts;
      }

      parts.push({
        isVariable: false,
        text: value.substr(startIndex)
      });

      return parts;
    }
  }, {
    key: '_processAttrs',
    value: function _processAttrs(value) {
      var attrs = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      if (!value) {
        return value;
      }

      var root = this._root;
      var parts = this._parseTranslation(value);

      return parts.map(function (part) {
        var isVariable = part.isVariable;
        var text = part.text;
        var variable = part.variable;
        var isExternal = part.isExternal;

        if (!isVariable) {
          return text;
        }

        // reference
        if (!isExternal) {
          var pos = variable.indexOf(VARIABLE_START);
          if (pos === -1) {
            return root.get(variable, attrs);
          }

          var externalVariable = variable.substr(pos + VARIABLE_START.length);

          var suffix = (0, _lodashObjectGet2['default'])(attrs, externalVariable);
          var prefix = variable.substr(0, pos - 1);

          var path = suffix ? prefix + '.' + suffix : prefix;

          return root.get(path, attrs);
        }

        // external variable
        return (0, _lodashObjectGet2['default'])(attrs, variable);
      }).join('');
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
            // TODO get info about missing reference translation
            return void 0;
          }

          return translation.get(newPath, attrs);
        }

        if (!this[path]) {
          // TODO get info about missing reference translation
          return void 0;
        }

        return this[path].get(null, attrs);
      }

      var value = this._value;

      if ((0, _lodashLangIsArray2['default'])(value)) {
        value = this._getValueFromArray(value, attrs);
      } else if ((0, _lodashLangIsPlainObject2['default'])(value)) {
        // search default value
        var defaultChild = (0, _lodashCollectionFind2['default'])(this._children, function (child) {
          return child._isDefault;
        });
        return defaultChild ? defaultChild.get(attrs) : void 0;
      }

      return this._processAttrs(value, attrs);
    }
  }, {
    key: '_getValueFromArray',
    value: function _getValueFromArray(options, attrs) {
      var pass = (0, _lodashCollectionFilter2['default'])(options, function (option) {
        var isObject = (0, _lodashLangIsPlainObject2['default'])(option);
        if (!isObject) {
          return true;
        }

        // check variables
        return (0, _lodashCollectionEvery2['default'])(Object.keys(option), function (variableName) {
          if (!(0, _lodashStringStartsWith2['default'])(variableName, VARIABLE_START)) {
            return true;
          }

          var path = variableName.substr(VARIABLE_START.length);
          var currentValue = (0, _lodashObjectGet2['default'])(attrs, path);

          return option[variableName] === currentValue;
        });
      });

      // select option with more variables
      var sorted = (0, _lodashCollectionSortBy2['default'])(pass, function (option) {
        var isObject = (0, _lodashLangIsPlainObject2['default'])(option);
        if (!isObject) {
          return 0;
        }

        return -(0, _lodashCollectionFilter2['default'])(Object.keys(option), function (variableName) {
          return (0, _lodashStringStartsWith2['default'])(variableName, VARIABLE_START);
        }).length;
      });

      var option = (0, _lodashArrayFirst2['default'])(sorted);
      if (!option) {
        return void 0;
      }

      return (0, _lodashLangIsPlainObject2['default'])(option) ? option.value : option;
    }
  }, {
    key: 'set',
    value: function set(name, value, obj) {
      var _this2 = this;

      if ((0, _lodashLangIsPlainObject2['default'])(name)) {
        Object.keys(name).forEach(function (key) {
          _this2.set(key, name[key], obj);
        });
        return this;
      }

      // TODO add dot notation
      var pos = name.indexOf('.');
      if (pos !== -1) {
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