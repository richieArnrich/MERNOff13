class Engine {
  e_no: number;
  e_type: string;
  e_power: number;
  e_capacity: number;

  constructor(e_no, e_type, e_power, e_capacity) {
    this.e_no = e_no;
    this.e_type = e_type;
    this.e_power = e_power;
    this.e_capacity = e_power;
  }
}

class Car {
  name: string;
  eng: Engine;

  constructor(name, eng) {
    this.name = name;
    this.eng = eng;
  }
}

// let e1 = new Engine(1, "petrol", 1000, 1600);

let c1 = new Car("alto", new Engine(1, "petrol", 1000, 1600));

console.log(c1.name);
console.log(c1.eng.e_type);
