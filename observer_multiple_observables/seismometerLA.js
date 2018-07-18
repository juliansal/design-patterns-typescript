"use strict";
exports.__esModule = true;
var SeismometerLA = /** @class */ (function () {
    function SeismometerLA() {
        this.observers = [];
    }
    SeismometerLA.prototype.setTremor = function (tremor, city) {
        console.log('*****');
        this.tremor = tremor;
        this.city = city;
        this.notifyObservers();
    };
    SeismometerLA.prototype.registerObserver = function (o) {
        this.observers.push(o);
    };
    SeismometerLA.prototype.removeObserver = function (o) {
        var index = this.observers.indexOf(o);
        this.observers.splice(index, 1);
    };
    SeismometerLA.prototype.notifyObservers = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var o = _a[_i];
            o.update({ tremor: this.tremor, city: this.city });
        }
    };
    return SeismometerLA;
}());
exports["default"] = SeismometerLA;
