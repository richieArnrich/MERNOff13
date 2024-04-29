// debugger;

// var aa = "I am global variable"; // inside global

// console.log(aa);

// function LocalScope() {
//   let aabb = "I am inside a function";
//   console.log(aabb);
// }

// LocalScope();

// let arrowfunc = () => {
//   let aaabbb = "I am inside arrow function";
//   console.log(aaabbb);
// };

// arrowfunc();

// function pow(num) {
//   if (num == 0) {
//     return 0;
//   }
//   while (num != 1) {
//     if (num % 2 != 0) {
//       return 0;
//     }
//     num = num / 2;
//   }
//   return 1;
// }

// function isPower(arr) {
//   return arr.map((num) => {
//     return pow(num) ? 1 : 0;
//   });
// }

// function main() {
//   let arr = [2, 2, 3, 4, 5, 7, 8, 9, 0];
//   let result = isPower(arr);
//   console.log(result);
// }

// main();

function Ethnus() {
  const terrace = "Terrace belongs to ethnus";

  function MernClass() {
    // lexical scope of a variable
    console.log(terrace);
  }

  MernClass();
}

Ethnus();
