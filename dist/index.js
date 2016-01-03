'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Translate = require('./Translate');

var _Translate2 = _interopRequireDefault(_Translate);

var _Translation = require('./Translation');

var _Translation2 = _interopRequireDefault(_Translation);

var _constantsPlural = require('./constants/Plural');

var _constantsPlural2 = _interopRequireDefault(_constantsPlural);

var _constantsGender = require('./constants/Gender');

var _constantsGender2 = _interopRequireDefault(_constantsGender);

var _constantsMode = require('./constants/Mode');

var _constantsMode2 = _interopRequireDefault(_constantsMode);

var _adapters = require('./adapters');

var Adapters = _interopRequireWildcard(_adapters);

var _caches = require('./caches');

var Caches = _interopRequireWildcard(_caches);

// export constants
exports.Plural = _constantsPlural2['default'];
exports.Gender = _constantsGender2['default'];
exports.Mode = _constantsMode2['default'];

// export modules
exports.Adapters = Adapters;
exports.Caches = Caches;

// export classes
exports.Translation = _Translation2['default'];

// export main class
exports['default'] = _Translate2['default'];