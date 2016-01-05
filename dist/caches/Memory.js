'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Cache2 = require('./Cache');

var _Cache3 = _interopRequireDefault(_Cache2);

var Memory = (function (_Cache) {
  _inherits(Memory, _Cache);

  function Memory() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, Memory);

    _get(Object.getPrototypeOf(Memory.prototype), 'constructor', this).call(this, options);

    this._data = {};
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
})(_Cache3['default']);

exports['default'] = Memory;
module.exports = exports['default'];