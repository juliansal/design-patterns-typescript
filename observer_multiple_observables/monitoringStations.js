"use strict";
exports.__esModule = true;
var seismometerLA_1 = require("./seismometerLA");
var seismometerSD_1 = require("./seismometerSD");
var monitoringStationAlpha = /** @class */ (function () {
    function monitoringStationAlpha() {
    }
    monitoringStationAlpha.prototype.update = function (data) {
        console.log('Alpha Station: Tremor magnitude ' + data.tremor + ' in ' + data.city);
    };
    return monitoringStationAlpha;
}());
var monitoringStationBravo = /** @class */ (function () {
    function monitoringStationBravo() {
    }
    monitoringStationBravo.prototype.update = function (data) {
        console.log('Bravo Station: Tremor magnitude ' + data.tremor + ' in ' + data.city);
    };
    return monitoringStationBravo;
}());
var LAmeter = new seismometerLA_1["default"]();
var SDmeter = new seismometerSD_1["default"]();
var monitorA = new monitoringStationAlpha();
var monitorB = new monitoringStationBravo();
// explicitly register an observer
LAmeter.registerObserver(monitorA);
SDmeter.registerObserver(monitorA);
LAmeter.registerObserver(monitorB);
SDmeter.registerObserver(monitorB);
LAmeter.setTremor(19, "Los Angeles");
SDmeter.setTremor(5, "San Diego");
