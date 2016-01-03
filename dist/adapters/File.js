'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Adapter2 = require('./Adapter');

var _Adapter3 = _interopRequireDefault(_Adapter2);

function getPath(options, namespace, fileName) {
  if (!namespace) {
    return options.path + '/' + fileName;
  }

  var mainPath = options.namespacePath || options.path;
  var directory = namespace.replace('.', '/'); // replace com.data => com/data

  return mainPath + '/' + directory + '/' + fileName;
}

var defaultOptions = {
  path: void 0,
  getFile: void 0,
  getPath: getPath,
  ext: '.js'
};

var File = (function (_Adapter) {
  _inherits(File, _Adapter);

  function File() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, File);

    if (!options.path && !options.getFile) {
      throw new Error('You need to set path or getFile');
    }

    _get(Object.getPrototypeOf(File.prototype), 'constructor', this).call(this, _extends({}, defaultOptions, options));
  }

  _createClass(File, [{
    key: 'get',
    value: function get(locale, namespace, callback) {
      if (typeof namespace === 'function') {
        return this.get(locale, null, namespace);
      }

      var options = this.getOptions();
      if (options.getFile) {
        return callback(null, options.getFile(locale, namespace));
      }

      var fileName = '' + locale + (options.ext || '');
      var filePath = options.getPath(options, namespace, fileName);

      var data = require(filePath);
      callback(null, data);
    }
  }, {
    key: 'set',
    value: function set(locale, value, namespace, callback) {
      throw new Error('File adapter is read only');
    }
  }]);

  return File;
})(_Adapter3['default']);

exports['default'] = File;
module.exports = exports['default'];