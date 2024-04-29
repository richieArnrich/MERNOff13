export {};
class Person {
  Name: string;
  Age: number;

  constructor(Name, Age) {
    this.Name = Name;
    this.Age = Age;
  }
}

class Employee extends Person {
  EmpId: string;
  Salary: number;

  constructor(Name, Age, EmpId, Salary) {
    super(Name, Age);
    this.EmpId = EmpId;
    this.Salary = Salary;
  }

  Display() {
    console.log("Name: " + this.Name);
    console.log("Age: " + this.Age);
    console.log("EmpId: " + this.EmpId);
    console.log("Salary: " + this.Salary);
  }
}

let emp1 = new Employee("Sanajana", 18, "San123", 100);
emp1.Display();
