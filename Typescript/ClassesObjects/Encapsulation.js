var CarDriving = /** @class */ (function () {
    function CarDriving() {
    }
    CarDriving.prototype.setSteering = function (direction) {
        this.steering = direction;
        console.log("direction assigned successfully");
    };
    CarDriving.prototype.getSteering = function () {
        console.log(this.steering);
    };
    return CarDriving;
}());
var driver = new CarDriving();
driver.setSteering("right");
driver.getSteering();
