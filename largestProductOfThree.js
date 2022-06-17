/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {

  const sorted = array.sort(function(a, b) {
    return a - b;
  });
  const length = sorted.length;

  // console.log(sorted);
  // const first = sorted[0];
  // const second = sorted[1];
  // const third = sorted[2];
  const largestPositive = sorted[length - 1] * sorted[length - 2] * sorted[length - 3];
  const largestNegative = sorted[0] * sorted[1] * sorted[length - 1];
  return Math.max(largestPositive, largestNegative);
  // return first * second * third;
};

console.log(largestProductOfThree([2, 3, -11, 7, 5, -13])) // 1001
console.log(largestProductOfThree([-31, 41, 34, -37, -17, 29])) // 47027
console.log(largestProductOfThree([-1, -2, -3, -4, -5, -6])) // -6