'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _lodashStringTrunc = require('lodash/string/trunc');

var _lodashStringTrunc2 = _interopRequireDefault(_lodashStringTrunc);

exports['default'] = function (value, part, attrs, metadata) {
  var length = arguments.length <= 4 || arguments[4] === undefined ? 30 : arguments[4];
  var omission = arguments.length <= 5 || arguments[5] === undefined ? '...' : arguments[5];

  return (0, _lodashStringTrunc2['default'])(value, {
    length: length,
    omission: omission
  });
};

module.exports = exports['default'];