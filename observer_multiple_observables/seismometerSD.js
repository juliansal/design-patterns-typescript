"use strict";
exports.__esModule = true;
var SeismometerSD = /** @class */ (function () {
    function SeismometerSD() {
        this.observers = [];
    }
    SeismometerSD.prototype.setTremor = function (tremor, city) {
        console.log('*****');
        this.tremor = tremor;
        this.city = city;
        this.notifyObservers();
    };
    SeismometerSD.prototype.registerObserver = function (o) {
        this.observers.push(o);
    };
    SeismometerSD.prototype.removeObserver = function (o) {
        var index = this.observers.indexOf(o);
        this.observers.splice(index, 1);
    };
    SeismometerSD.prototype.notifyObservers = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var o = _a[_i];
            o.update({ tremor: this.tremor, city: this.city });
        }
    };
    return SeismometerSD;
}());
exports["default"] = SeismometerSD;
