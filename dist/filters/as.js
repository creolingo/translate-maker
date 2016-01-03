'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _lodashObjectSet = require('lodash/object/set');

var _lodashObjectSet2 = _interopRequireDefault(_lodashObjectSet);

var _lodashCollectionForEach = require('lodash/collection/forEach');

var _lodashCollectionForEach2 = _interopRequireDefault(_lodashCollectionForEach);

exports['default'] = function (value, part, attrs, metadata) {
  var _this = this;

  var params = {};

  for (var _len = arguments.length, args = Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
    args[_key - 4] = arguments[_key];
  }

  (0, _lodashCollectionForEach2['default'])(args, function (param) {
    var from = param.from;
    var to = param.to;

    var paramValue = _this.resolveValue(from, attrs);

    (0, _lodashObjectSet2['default'])(params, to, paramValue);
  });

  return this.resolveValue(part, params);
};

module.exports = exports['default'];