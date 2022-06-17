/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = function (array, target) {

  var start = 0;
  var end = array.length - 1;

  while(start <= end) {
    // define middle index
    var middle = Math.floor((start + end) / 2);

    // compare target to middle index
    if (target === array[middle]) {
      return middle;
    }

    // search the right half
    if (target > array[middle]) {
      start = middle + 1;
    }

    // search the left half
    if (target < array[middle]) {
      end = middle - 1;
    }

  }
  // if not found
  return null;
};

console.log(binarySearch([1, 2, 3, 4, 5], 4)); // 3
console.log(binarySearch([1, 2, 3, 4, 5], 8)); // null