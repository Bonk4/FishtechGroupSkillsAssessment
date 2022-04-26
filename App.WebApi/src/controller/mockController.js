"use strict";
exports.__esModule = true;
exports.MockController = void 0;
var mockData_1 = require("../mockData");
var MockController = /** @class */ (function () {
    function MockController() {
    }
    //Mock of WhoIs becuase WhoIs has a free-sub request cap
    MockController.prototype.get = function () {
        return mockData_1.MockData.WhoIsMockData();
    };
    return MockController;
}());
exports.MockController = MockController;
