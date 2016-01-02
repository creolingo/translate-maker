'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _lodashCollectionFind = require('lodash/collection/find');

var _lodashCollectionFind2 = _interopRequireDefault(_lodashCollectionFind);

exports['default'] = function (value, part, attrs, metadata) {
  var defaultOption = null;

  for (var _len = arguments.length, args = Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
    args[_key - 4] = arguments[_key];
  }

  var option = (0, _lodashCollectionFind2['default'])(args, function (arg) {
    if (arg.type !== 'pair') {
      return false;
    }

    if (!arg.key || arg.key === 'other') {
      defaultOption = arg;
      return false;
    }

    return arg.key === value;
  });

  if (option) {
    return this.buildText(option.value, attrs, value);
  }

  if (defaultOption) {
    return this.buildText(defaultOption.value, attrs, value);
  }
};

module.exports = exports['default'];