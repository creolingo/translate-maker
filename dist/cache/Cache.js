'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Cache = (function () {
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
  }]);

  return Cache;
})();

exports['default'] = Cache;
module.exports = exports['default'];