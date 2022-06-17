/**
 * A Fibonacci sequence is a list of numbers that begins with 0 and 1, and each
 * subsequent number is the sum of the previous two.
 *
 * For example, the first five Fibonacci numbers are:
 *
 *   0 1 1 2 3
 *
 * If n were 4, your function should return 3; for 5, it should return 5.
 *
 * Write a function that accepts a number, n, and returns the nth Fibonacci
 * number. Use a recursive solution to this problem; if you finish with time
 * left over, implement an iterative solution.
 *
 * example usage:
 * nthFibonacci(2); // => 1
 * nthFibonacci(3); // => 2
 * nthFibonacci(4); // => 3
 * etc...
 *
 */

 /* RECURSIVE */
var nthFibonacci = function (n, twoBack = 0, oneBack = 1) {
  // TODO: implement me!
  // if (n < 2) return n;

  // return nthFibonacci(n - 1) + nthFibonacci(n - 2);
  // return n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);
  return n === 0 ? twoBack : nthFibonacci(n - 1, oneBack, twoBack + oneBack);
};

/* ITERATIVE */
// var iterativeFibonacci = function (n) {
//   // TODO: implement me!
//   let fibSequence = [0, 1];

//   if (n < 2) {
//     return 1;
//   }

//   for (let i = 2; i <= n; i++) {
//     fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2];
//   }

//   return fibSequence[n];
// };

console.log('recursive');
console.log(nthFibonacci(2)); // => 1
console.log(nthFibonacci(3)); // => 2
console.log(nthFibonacci(4)); // => 3
// console.log('iterative');
// console.log(iterativeFibonacci(2)); // => 1
// console.log(iterativeFibonacci(3)); // => 2
// console.log(iterativeFibonacci(4)); // => 3
