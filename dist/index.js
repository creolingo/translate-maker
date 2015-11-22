'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Translate = require('./Translate');

var _Translate2 = _interopRequireDefault(_Translate);

var _Translation = require('./Translation');

var _Translation2 = _interopRequireDefault(_Translation);

var _constantsPlural = require('./constants/Plural');

var _constantsPlural2 = _interopRequireDefault(_constantsPlural);

var _constantsGender = require('./constants/Gender');

var _constantsGender2 = _interopRequireDefault(_constantsGender);

exports.Plural = _constantsPlural2['default'];
exports.Gender = _constantsGender2['default'];
exports['default'] = _Translate2['default'];