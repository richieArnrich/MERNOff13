class CarDriving {
  private steering: String;
  accelerator: Number;

  public setSteering(direction) {
    this.steering = direction;
    console.log("direction assigned successfully");
  }

  public getSteering() {
    console.log(this.steering);
  }
}

let driver = new CarDriving();
driver.setSteering("right");
driver.getSteering();
