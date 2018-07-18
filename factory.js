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
var EnemyShip = /** @class */ (function () {
    function EnemyShip() {
    }
    EnemyShip.prototype.setName = function (name) {
        this.name = name;
    };
    EnemyShip.prototype.getName = function () {
        return this.name;
    };
    EnemyShip.prototype.setDamage = function (amtDamage) {
        this.amtDamage = amtDamage;
    };
    EnemyShip.prototype.getDamage = function () {
        return this.amtDamage;
    };
    EnemyShip.prototype.followHeroShip = function () {
        console.log(this.getName() + " is following the hero ship!");
    };
    EnemyShip.prototype.displayEnemyShip = function () {
        console.log(this.getName() + " is on the screen!");
    };
    EnemyShip.prototype.enemyShipShoots = function () {
        console.log(this.getName() + " attacks and does " + this.getDamage());
    };
    return EnemyShip;
}());
var UFOEnemyShip = /** @class */ (function (_super) {
    __extends(UFOEnemyShip, _super);
    function UFOEnemyShip() {
        var _this = _super.call(this) || this;
        _this.setName("UFO Enemy Ship");
        _this.setDamage(20);
        return _this;
    }
    return UFOEnemyShip;
}(EnemyShip));
var BigUFOEnemyShip = /** @class */ (function (_super) {
    __extends(BigUFOEnemyShip, _super);
    function BigUFOEnemyShip() {
        var _this = _super.call(this) || this;
        _this.setName("Big UFO Enemy Ship");
        _this.setDamage(40);
        return _this;
    }
    return BigUFOEnemyShip;
}(UFOEnemyShip));
var RocketEnemyShip = /** @class */ (function (_super) {
    __extends(RocketEnemyShip, _super);
    function RocketEnemyShip() {
        var _this = _super.call(this) || this;
        _this.setName("Rocket Enemy Ship");
        _this.setDamage(10);
        return _this;
    }
    return RocketEnemyShip;
}(EnemyShip));
var EnemyShipFactory = /** @class */ (function () {
    function EnemyShipFactory() {
    }
    EnemyShipFactory.prototype.makeEnemyShip = function (shipType) {
        if (shipType == "U") {
            return new UFOEnemyShip();
        }
        else if (shipType == "R") {
            return new RocketEnemyShip();
        }
        else if (shipType == "B") {
            return new BigUFOEnemyShip();
        }
        else
            return null;
    };
    return EnemyShipFactory;
}());
var EnemyShipTesting = /** @class */ (function () {
    function EnemyShipTesting() {
        this.stdin = process.openStdin();
        this.shipFactory = new EnemyShipFactory();
        this.run();
    }
    EnemyShipTesting.prototype.run = function () {
        var _this = this;
        console.log("What type of ship? (U / R / B)");
        this.stdin.addListener("data", function (d) {
            var msg = d.toString().trim();
            _this.theEnemy = _this.shipFactory.makeEnemyShip(msg);
            _this.doStuffEnemy(_this.theEnemy);
        });
    };
    EnemyShipTesting.prototype.doStuffEnemy = function (enemyShip) {
        enemyShip.displayEnemyShip();
        enemyShip.followHeroShip();
        enemyShip.enemyShipShoots();
    };
    return EnemyShipTesting;
}());
var enemyShipTesting = new EnemyShipTesting();
