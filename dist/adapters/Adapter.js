'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Adapter = (function () {
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
  }]);

  return Adapter;
})();

exports['default'] = Adapter;
module.exports = exports['default'];