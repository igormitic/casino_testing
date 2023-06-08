"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createReport = exports.generateTemplate = void 0;

var _handlebars = _interopRequireDefault(require("handlebars"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _config = _interopRequireDefault(require("../config"));

var generateTemplate = function generateTemplate(options) {
  var templateFile = _fs["default"].readFileSync(_path["default"].resolve(__dirname, '../reporter/template.hbs'), 'utf8');

  var template = _handlebars["default"].compile(templateFile);

  return template(options);
};

exports.generateTemplate = generateTemplate;

var createReport = function createReport(options) {
  var template = generateTemplate(options);

  _fs["default"].writeFile(_config["default"].report(options.instance), template, function (err) {
    if (err) throw err;
  });
};

exports.createReport = createReport;