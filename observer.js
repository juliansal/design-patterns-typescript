var WeatherStation = /** @class */ (function () {
    function WeatherStation() {
        this.observers = [];
    }
    WeatherStation.prototype.setTemperature = function (temp) {
        console.log('*****');
        this.temperature = temp;
        this.notifyObservers();
    };
    WeatherStation.prototype.registerObserver = function (o) {
        this.observers.push(o);
    };
    WeatherStation.prototype.removeObserver = function (o) {
        var index = this.observers.indexOf(o);
        this.observers.splice(index, 1);
    };
    WeatherStation.prototype.notifyObservers = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var o = _a[_i];
            o.update(this.temperature);
        }
    };
    return WeatherStation;
}());
var TemperatureDisplay = /** @class */ (function () {
    function TemperatureDisplay(weatherStation) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }
    TemperatureDisplay.prototype.update = function (temperature) {
        console.log('Display: temperature is ' + temperature);
    };
    return TemperatureDisplay;
}());
var Fan = /** @class */ (function () {
    function Fan() {
    }
    //private subject: Subject;
    // constructor(weatherStation: Subject) {
    // 	//let subject: Subject = weatherStation;
    // 	//weatherStation.registerObserver(this);
    // }
    Fan.prototype.update = function (temperature) {
        console.log("Fan: temperature is " + temperature);
    };
    return Fan;
}());
var weatherStation = new WeatherStation();
// observer registered in constructor
var tempDisplay = new TemperatureDisplay(weatherStation);
var fan = new Fan();
// explicitly register an observer
weatherStation.registerObserver(fan);
weatherStation.setTemperature(19);
weatherStation.setTemperature(29);
weatherStation.setTemperature(1);
weatherStation.setTemperature(20);
