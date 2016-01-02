'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Translation = require('./Translation');

var _Translation2 = _interopRequireDefault(_Translation);

var _filters = require('./filters');

var filters = _interopRequireWildcard(_filters);

var _lodashLangIsPlainObject = require('lodash/lang/isPlainObject');

var _lodashLangIsPlainObject2 = _interopRequireDefault(_lodashLangIsPlainObject);

var _lodashObjectKeys = require('lodash/object/keys');

var _lodashObjectKeys2 = _interopRequireDefault(_lodashObjectKeys);

var _adaptersMemory = require('./adapters/Memory');

var _adaptersMemory2 = _interopRequireDefault(_adaptersMemory);

var defaultOptions = {
  locale: null,
  namespace: null,
  adapter: new _adaptersMemory2['default']({}),
  filters: filters
};

var Translate = (function () {
  function Translate() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var callback = arguments.length <= 1 || arguments[1] === undefined ? function () {} : arguments[1];

    _classCallCheck(this, Translate);

    this._options = _extends({}, defaultOptions, options);

    this._filters = _extends({}, this._options.filters);

    this._translation = new _Translation2['default'](this);

    if (this._options.locale) {
      this.load(callback);
    } else if (callback) {
      callback(null);
    }
  }

  _createClass(Translate, [{
    key: '_clear',
    value: function _clear() {
      // todo remove current translations
      this._translation = new _Translation2['default'](this);
    }
  }, {
    key: '_loadLocale',
    value: function _loadLocale(locale, namespace) {
      var _this = this;

      var callback = arguments.length <= 2 || arguments[2] === undefined ? function () {} : arguments[2];

      var adapter = this.getAdapter();
      if (!locale) {
        return callback(new Error('Locale is undefined'));
      }

      adapter.get(locale, namespace, function (err, data) {
        if (err) {
          return callback(err);
        }

        var options = _this.getOptions();
        if (namespace && namespace !== options.namespace) {
          _this.set(namespace, data);
        } else {
          _this.set(data);
        }

        callback(null, data);
      });
    }
  }, {
    key: 'load',
    value: function load(namespace, callback) {
      if (typeof namespace === 'function') {
        return this.load(null, namespace);
      }

      var options = this.getOptions();
      this._loadLocale(options.locale, namespace || options.namespace, callback);
    }
  }, {
    key: 'setLocale',
    value: function setLocale(locale, callback) {
      var options = this.getOptions();
      if (options.locale === locale) {
        return;
      }

      this._options = _extends({}, this.getOptions(), {
        locale: locale
      });

      this._clear();
      this.load(callback);
    }
  }, {
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
    key: 'getAdapter',
    value: function getAdapter() {
      return this.getOptions().adapter;
    }
  }, {
    key: 'getOptions',
    value: function getOptions() {
      return this._options;
    }
  }, {
    key: 'setFilter',
    value: function setFilter(type, fn) {
      var _this2 = this;

      if ((0, _lodashLangIsPlainObject2['default'])(type)) {
        (0, _lodashObjectKeys2['default'])(type).forEach(function (filterType) {
          var filter = type[filterType];

          _this2.setFilter(filterType, filter);
        });

        return;
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