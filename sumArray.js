/*
 * Given an array of numbers, calculate the greatest contiguous sum of numbers in it.
 * A single array item will count as a contiguous sum.
 *
 * example 1: sumArray([1, 2, 3]); // => 6
 * example 2: sumArray([1, 2, 3, -4]); // 6
 * example 3: sumArray([1, 2, 3, -4, 5]); // 7
 * example 4: sumArray([4, -1, 5]); // => 8
 * example 5: sumArray([10, -11, 11]); // 11
 */

// Solved in O(n) time with O(1) memory
var sumArray = function(array) {

  //Kadane's algo
  let max = Number.NEGATIVE_INFINITY;
  let currentMax = 0;

  for (let i = 0; i < array.length; i++) {
    currentMax += array[i];

    if (max < currentMax) {
      max = currentMax;
    }

    if (currentMax < 0) {
      currentMax = 0;
    }
  }

  return max;
};


console.log(sumArray([1, 2, 3])); // => 6)
console.log(sumArray([1, 2, 3, -4])); // 6)
console.log(sumArray([1, 2, 3, -4, 5])); // 7)
console.log(sumArray([4, -1, 5])); // => 8)
console.log(sumArray([10, -11, 11])); // 11)

console.log(sumArray([-7,-6,-9])); // -6
console.log(sumArray([-3,-2,-1,-2,-3])); // -1