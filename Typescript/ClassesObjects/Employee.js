var Employee = /** @class */ (function () {
    function Employee() {
        this.E_id = "ABC123";
    }
    Employee.prototype.getEid = function () {
        console.log(this.E_id);
    };
    return Employee;
}());
var e1 = new Employee();
e1.getEid();
