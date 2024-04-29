"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var Parent = /** @class */ (function () {
    function Parent() {
    }
    Parent.prototype.House = function () {
        console.log("House is red color");
    };
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.House = function () {
        console.log("House is blue color");
    };
    Child.prototype.Flat = function () {
        console.log("Child buys a flat");
    };
    return Child;
}(Parent));
var parent1 = new Child();
parent1.House();
// parent1.Flat(); exclusive child data cannot be accessed
var child1 = parent1;
child1.House();
child1.Flat();
// let child2: Child = child1 as Child;
// child2.Flat();
