var Calculate = /** @class */ (function () {
    function Calculate() {
    }
    Calculate.prototype.add1 = function (a, b) {
        return a + b;
    };
    return Calculate;
}());
var cal1 = new Calculate();
var r = cal1.add1(1, 2);
console.log(r);
var r2 = cal1.add1(1, "4");
console.log(r2);
