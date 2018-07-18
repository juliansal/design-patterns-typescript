"use strict";
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.getName = function () {
        return this.name + "!";
    };
    Person.prototype.getHeight = function () {
        return this.height;
    };
    Person.prototype.getMaritalStatus = function () {
        return this.married;
    };
    return Person;
}());
exports["default"] = Person;
