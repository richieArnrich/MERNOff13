class Add {
  add(a: number, b: number): number;

  add(a: number, b: string): number;

  add(a: any, b: any): any {
    return a + b;
  }
}

let obj = new Add();

console.log(obj.add(1, 4));
obj.add(1, 2);
obj.add(1, "2");
