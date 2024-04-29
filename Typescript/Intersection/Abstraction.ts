abstract class GameFramework {
  abstract Accelerate();
  abstract Brake();
  abstract left();
  abstract right();
}

class Forza extends GameFramework {
  Accelerate() {
    console.log("Press up arrow to accelarate");
  }

  Brake() {
    console.log("Press down arrow to apply brake");
  }

  left() {
    console.log("Press left arrow to go left");
  }

  right() {
    console.log("Press right arrow to go right");
  }
}

let user: GameFramework = new Forza(); //polymorphism
user.Accelerate();
user.Brake();
user.left();
user.right();
