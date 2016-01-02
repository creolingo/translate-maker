'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.localeToLanguage = localeToLanguage;
exports['default'] = getPlural;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _makePluralPlurals = require('make-plural/plurals');

var _makePluralPlurals2 = _interopRequireDefault(_makePluralPlurals);

var _lodashObjectKeys = require('lodash/object/keys');

var _lodashObjectKeys2 = _interopRequireDefault(_lodashObjectKeys);

var _locale = require('locale');

var _locale2 = _interopRequireDefault(_locale);

var supported = new _locale2['default'].Locales((0, _lodashObjectKeys2['default'])(_makePluralPlurals2['default']));

var cachePlural = null;

function localeToLanguage(locale, defaultValue) {
  var language = new _locale2['default'].Locales(locale).best(supported).toString();

  return language || defaultValue;
}

function getPlural(locale) {
  var defaultLanguage = arguments.length <= 1 || arguments[1] === undefined ? 'en' : arguments[1];

  if (!cachePlural || cachePlural.locale !== locale) {
    var language = localeToLanguage(locale, defaultLanguage);

    cachePlural = {
      locale: locale,
      fn: _makePluralPlurals2['default'][language]
    };
  }

  return cachePlural.fn;
}