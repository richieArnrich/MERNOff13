class Employee {
  private name: String;
  private E_id = "ABC123";

  public getEid() {
    console.log(this.E_id);
  }
}

let e1 = new Employee();
e1.getEid();
