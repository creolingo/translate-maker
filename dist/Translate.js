'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x4, _x5, _x6) { var _again = true; _function: while (_again) { var object = _x4, property = _x5, receiver = _x6; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x4 = parent; _x5 = property; _x6 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Translation = require('./Translation');

var _Translation2 = _interopRequireDefault(_Translation);

var _filters = require('./filters');

var filters = _interopRequireWildcard(_filters);

var _lodashLangIsPlainObject = require('lodash/lang/isPlainObject');

var _lodashLangIsPlainObject2 = _interopRequireDefault(_lodashLangIsPlainObject);

var _lodashObjectKeys = require('lodash/object/keys');

var _lodashObjectKeys2 = _interopRequireDefault(_lodashObjectKeys);

var _lodashObjectForOwn = require('lodash/object/forOwn');

var _lodashObjectForOwn2 = _interopRequireDefault(_lodashObjectForOwn);

var _adaptersMemory = require('./adapters/Memory');

var _adaptersMemory2 = _interopRequireDefault(_adaptersMemory);

var _events = require('events');

var _events2 = _interopRequireDefault(_events);

var defaultOptions = {
  locale: null, // current locale
  locales: null, // available locales
  namespace: null, // current namespace
  fallbacks: {},
  adapter: new _adaptersMemory2['default']({}),
  filters: filters
};

var Translate = (function (_EventEmitter) {
  _inherits(Translate, _EventEmitter);

  function Translate() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var callback = arguments.length <= 1 || arguments[1] === undefined ? function () {} : arguments[1];

    _classCallCheck(this, Translate);

    _get(Object.getPrototypeOf(Translate.prototype), 'constructor', this).call(this);

    this._options = _extends({}, defaultOptions, options);

    this._translation = new _Translation2['default'](this);

    if (this._options.locale) {
      this.load(callback);
    } else if (callback) {
      callback(null, {});
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
    key: 'getAdapter',
    value: function getAdapter() {
      return this.getOptions().adapter;
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

      this.getOptions().filters[type] = fn;
    }
  }, {
    key: 'getFilter',
    value: function getFilter(type) {
      return this.getOptions().filters[type];
    }
  }]);

  return Translate;
})(_events2['default']);

exports['default'] = Translate;
module.exports = exports['default'];