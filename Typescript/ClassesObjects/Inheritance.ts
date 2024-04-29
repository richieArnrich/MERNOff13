export {};
class Parent {
  House() {
    console.log("Parents house");
  }
}

class Child extends Parent {
  Flat() {
    console.log("Child buys a flat");
  }
}

let c = new Child();

c.House();

c.Flat();
