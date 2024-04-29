var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GameFramework = /** @class */ (function () {
    function GameFramework() {
    }
    return GameFramework;
}());
var Forza = /** @class */ (function (_super) {
    __extends(Forza, _super);
    function Forza() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Forza.prototype.Accelerate = function () {
        console.log("Press up arrow to accelarate");
    };
    Forza.prototype.Brake = function () {
        console.log("Press down arrow to apply brake");
    };
    Forza.prototype.left = function () {
        console.log("Press left arrow to go left");
    };
    Forza.prototype.right = function () {
        console.log("Press right arrow to go right");
    };
    return Forza;
}(GameFramework));
var user = new Forza(); //polymorphism
user.Accelerate();
user.Brake();
user.left();
user.right();
