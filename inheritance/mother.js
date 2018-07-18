"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var person_1 = require("./person");
var Mother = /** @class */ (function (_super) {
    __extends(Mother, _super);
    function Mother() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mother.prototype.call = function (msg) {
        return msg;
    };
    return Mother;
}(person_1["default"]));
var mom = new Mother();
mom.name = "Elsa";
var message = mom.call("Hi mom");
console.log(mom.getName());
console.log(message);
