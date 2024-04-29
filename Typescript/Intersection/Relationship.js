var Engine = /** @class */ (function () {
    function Engine(e_no, e_type, e_power, e_capacity) {
        this.e_no = e_no;
        this.e_type = e_type;
        this.e_power = e_power;
        this.e_capacity = e_power;
    }
    return Engine;
}());
var Car = /** @class */ (function () {
    function Car(name, eng) {
        this.name = name;
        this.eng = eng;
    }
    return Car;
}());
// let e1 = new Engine(1, "petrol", 1000, 1600);
var c1 = new Car("alto", new Engine(1, "petrol", 1000, 1600));
console.log(c1.name);
console.log(c1.eng.e_type);
