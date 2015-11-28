'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _lodashCollectionFind = require('lodash/collection/find');

var _lodashCollectionFind2 = _interopRequireDefault(_lodashCollectionFind);

exports['default'] = function (value, part, attrs, metadata) {
  var options = arguments.length <= 4 || arguments[4] === undefined ? {} : arguments[4];

  if (options.type === 'pairs') {
    var pairs = options.values || [];
    var option = (0, _lodashCollectionFind2['default'])(pairs, function (pair) {
      return pair.key === value;
    });
    if (option) {
      return this.buildText(option.value, attrs);
    }

    var defaultOption = (0, _lodashCollectionFind2['default'])(pairs, function (pair) {
      return pair.key === null;
    });
    if (defaultOption) {
      return this.buildText(defaultOption.value, attrs);
    }
  }
};

module.exports = exports['default'];