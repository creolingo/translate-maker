'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = prepareCLDR;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _cldr = require('cldr');

var _cldr2 = _interopRequireDefault(_cldr);

var _utilsGetPlural = require('./utils/getPlural');

var _makePluralMakePlural = require('make-plural/make-plural');

var _makePluralMakePlural2 = _interopRequireDefault(_makePluralMakePlural);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var localeIds = _cldr2['default'].localeIds;
var store = __dirname + '/cldr/';

function prepareCLDR() {
  var locales = {};
  var MakePlural = _makePluralMakePlural2['default'].load(cldrData('supplemental/plurals'), cldrData('supplemental/ordinals'));

  localeIds.forEach(function (localeCode) {
    var defaultNumberSystem = _cldr2['default'].extractDefaultNumberSystemId(localeCode);

    var displayNames = _cldr2['default'].extractLanguageDisplayNames(localeCode);
    var languageCode = localeCode.match(/([a-zA-Z]+)/)[1];

    locales[localeCode] = {
      plural: _cldr2['default'].extractPluralRuleFunction(localeCode),
      displayName: displayNames[localeCode] || displayNames[languageCode],
      dateFormats: _cldr2['default'].extractDateFormats(localeCode),
      timeFormats: _cldr2['default'].extractTimeFormats(localeCode),
      numberSymbols: _cldr2['default'].extractNumberSymbols(localeCode, defaultNumberSystem)
    };
  });

  console.log(Object.keys(locales).length);

  Object.keys(locales).forEach(function (lg) {});
}

module.exports = exports['default'];