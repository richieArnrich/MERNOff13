var Add = /** @class */ (function () {
    function Add() {
    }
    Add.prototype.add = function (a, b) {
        return a + b;
    };
    return Add;
}());
var obj = new Add();
console.log(obj.add(1, 4));
obj.add(1, 2);
obj.add(1, "2");
