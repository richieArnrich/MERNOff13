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
var Person = /** @class */ (function () {
    function Person(Name, Age) {
        this.Name = Name;
        this.Age = Age;
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(Name, Age, EmpId, Salary) {
        var _this = _super.call(this, Name, Age) || this;
        _this.EmpId = EmpId;
        _this.Salary = Salary;
        return _this;
    }
    Employee.prototype.Display = function () {
        console.log("Name: " + this.Name);
        console.log("Age: " + this.Age);
        console.log("EmpId: " + this.EmpId);
        console.log("Salary: " + this.Salary);
    };
    return Employee;
}(Person));
var emp1 = new Employee("Sanajana", 18, "San123", 100);
emp1.Display();
