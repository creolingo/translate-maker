'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Translation = require('./Translation');

var _Translation2 = _interopRequireDefault(_Translation);

var _filtersCapitalize = require('./filters/capitalize');

var _filtersCapitalize2 = _interopRequireDefault(_filtersCapitalize);

var _filtersAs = require('./filters/as');

var _filtersAs2 = _interopRequireDefault(_filtersAs);

var _filtersSelect = require('./filters/select');

var _filtersSelect2 = _interopRequireDefault(_filtersSelect);

var _filtersPlural = require('./filters/plural');

var _filtersPlural2 = _interopRequireDefault(_filtersPlural);

var _filtersCamelCase = require('./filters/camelCase');

var _filtersCamelCase2 = _interopRequireDefault(_filtersCamelCase);

var _filtersTrim = require('./filters/trim');

var _filtersTrim2 = _interopRequireDefault(_filtersTrim);

var _filtersTrunc = require('./filters/trunc');

var _filtersTrunc2 = _interopRequireDefault(_filtersTrunc);

var _filtersEscape = require('./filters/escape');

var _filtersEscape2 = _interopRequireDefault(_filtersEscape);

var _filtersUpperCase = require('./filters/upperCase');

var _filtersUpperCase2 = _interopRequireDefault(_filtersUpperCase);

var _filtersLowerCase = require('./filters/lowerCase');

var _filtersLowerCase2 = _interopRequireDefault(_filtersLowerCase);

var _lodashLangIsPlainObject = require('lodash/lang/isPlainObject');

var _lodashLangIsPlainObject2 = _interopRequireDefault(_lodashLangIsPlainObject);

var _lodashObjectKeys = require('lodash/object/keys');

var _lodashObjectKeys2 = _interopRequireDefault(_lodashObjectKeys);

var defaultOptions = {
  locale: 'en'
};

var Translate = (function () {
  function Translate() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, Translate);

    this._options = _extends({}, defaultOptions, {
      options: options
    });

    this._filters = {
      capitalize: _filtersCapitalize2['default'],
      as: _filtersAs2['default'],
      select: _filtersSelect2['default'],
      plural: _filtersPlural2['default'],
      camelCase: _filtersCamelCase2['default'],
      trim: _filtersTrim2['default'],
      trunc: _filtersTrunc2['default'],
      escape: _filtersEscape2['default'],
      upperCase: _filtersUpperCase2['default'],
      lowerCase: _filtersLowerCase2['default']
    };

    this._translation = new _Translation2['default'](this);
  }

  _createClass(Translate, [{
    key: 'get',
    value: function get(path, attrs) {
      return this._translation.get(path, attrs);
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
    key: 'setFilter',
    value: function setFilter(type, fn) {
      var _this = this;

      if ((0, _lodashLangIsPlainObject2['default'])(type)) {
        (0, _lodashObjectKeys2['default'])(type).forEach(function (filterType) {
          var filter = type[filterType];

          _this.setFilter(filterType, filter);
        });
      }

      this._filters[type] = fn;
    }
  }, {
    key: 'getFilter',
    value: function getFilter(type) {
      return this._filters[type];
    }
  }]);

  return Translate;
})();

exports['default'] = Translate;
module.exports = exports['default'];