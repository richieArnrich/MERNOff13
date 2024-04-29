class Calculate {
  add1(a: number, b: number): number;

  add1(a: number, b: string): string;

  add1(a: any, b: any): any {
    return a + b;
  }
}

let cal1 = new Calculate();

let r = cal1.add1(1, 2);
console.log(r);

let r2 = cal1.add1(1, "4");
console.log(r2);
