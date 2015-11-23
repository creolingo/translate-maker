'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _cldr = require('cldr');

var _cldr2 = _interopRequireDefault(_cldr);

var _Translation = require('./Translation');

var _Translation2 = _interopRequireDefault(_Translation);

var defaultOptions = {
  locale: 'en'
};

var Translate = (function () {
  function Translate() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, Translate);

    //super();

    this._options = _extends({}, defaultOptions, {
      options: options
    });

    this._translation = new _Translation2['default']();
  }

  _createClass(Translate, [{
    key: 'plural',
    value: function plural(count) {
      var options = this._options;
      var fn = _cldr2['default'].extractPluralRuleFunction(options.locale);

      var value = fn(count);

      return value ? value.toUpperCase() : void 0;
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
  }]);

  return Translate;
})();

exports['default'] = Translate;
module.exports = exports['default'];