"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var TestStatus = function TestStatus(_ref) {
  var status = _ref.status,
      name = _ref.name,
      percentage = _ref.percentage,
      failureThreshold = _ref.failureThreshold;
  (0, _classCallCheck2["default"])(this, TestStatus);
  this.status = status ? 'pass' : 'fail';
  this.name = name;
  this.percentage = percentage;
  this.failureThreshold = failureThreshold;
};

var _default = TestStatus;
exports["default"] = _default;