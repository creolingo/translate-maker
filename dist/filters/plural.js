'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _lodashCollectionFind = require('lodash/collection/find');

var _lodashCollectionFind2 = _interopRequireDefault(_lodashCollectionFind);

var _cldr = require('cldr');

var _cldr2 = _interopRequireDefault(_cldr);

function plural(locale, count) {
  var fn = _cldr2['default'].extractPluralRuleFunction(locale);

  return fn(count);
}

function getValue(data, key, defaultValue) {
  var items = data || [];
  var option = (0, _lodashCollectionFind2['default'])(items, function (item) {
    return item.key === key;
  });

  return option ? option.value : defaultValue;
}

exports['default'] = function (value, part, attrs, metadata) {
  var options = arguments.length <= 4 || arguments[4] === undefined ? {} : arguments[4];

  var root = this._root;
  var locale = root.getOptions().locale;
  var numberValue = Number(value);
  var pluralValue = plural(locale, numberValue);
  var offset = getValue(metadata, 'offset', 0);
  var smartValue = numberValue - offset;

  if (options.type === 'pairs') {
    var pairs = options.values || [];

    var defaultOption = null;
    var option = (0, _lodashCollectionFind2['default'])(pairs, function (pair) {
      if (!pair.key) {
        defaultOption = pair;
        return false;
      }

      var key = typeof pair.key === 'string' ? pair.key.toLowerCase() : pair.key;
      if (key[0] === '=') {
        var keyValue = parseInt(key.substr(1), 10);
        return keyValue === numberValue;
      }

      return key === pluralValue;
    });

    if (option) {
      return this.buildText(option.value, attrs, smartValue);
    } else if (defaultOption) {
      return this.buildText(defaultOption.value, attrs, smartValue);
    }
  }
};

module.exports = exports['default'];