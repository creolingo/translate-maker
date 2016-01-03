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

var _adaptersAdapter = require('./adapters/Adapter');

var _adaptersAdapter2 = _interopRequireDefault(_adaptersAdapter);

var _adaptersFile = require('./adapters/File');

var _adaptersFile2 = _interopRequireDefault(_adaptersFile);

var _adaptersMemory = require('./adapters/Memory');

var _adaptersMemory2 = _interopRequireDefault(_adaptersMemory);

exports.Adapter = _adaptersAdapter2['default'];
exports.Plural = _constantsPlural2['default'];
exports.Gender = _constantsGender2['default'];
exports.Translation = _Translation2['default'];
exports.File = _adaptersFile2['default'];
exports.Memory = _adaptersMemory2['default'];
exports['default'] = _Translate2['default'];