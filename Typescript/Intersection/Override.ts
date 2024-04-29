export {};
class Parent {
  House() {
    console.log("House is red color");
  }
}

class Child extends Parent {
  House() {
    console.log("House is blue color");
  }

  Flat() {
    console.log("Child buys a flat");
  }
}

let parent1: Parent = new Child();

parent1.House();

// parent1.Flat(); exclusive child data cannot be accessed

let child1: Child = parent1 as Child; //downcasting

child1.House();
child1.Flat();
