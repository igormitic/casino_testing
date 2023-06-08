"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _testStatus = _interopRequireDefault(require("./test-status"));

describe('Test Status', function () {
  it('should return pass when there is no pixel difference', function () {
    var testStatus = new _testStatus["default"]({
      status: true,
      name: 'TestName'
    });
    expect(testStatus.status).toEqual('pass');
  });
  it('should return fail when there is pixel differencea', function () {
    var testStatus = new _testStatus["default"]({
      status: false,
      name: 'TestName'
    });
    expect(testStatus.status).toEqual('fail');
  });
});