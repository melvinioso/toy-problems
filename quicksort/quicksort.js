/**
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 */


var quicksort = function(array) {

  if (array.length <= 1) {
    return array;
  } else {
    // Picks a value in the array as a pivot.
    var pivot = array[array.length - 1];
    // arrays for storing values
    var left = [];
    var right = [];
    var result = [];

    // Partitions all the elements of the array into two arrays, based on
    // if they are larger or smaller than the pivot.
    for (var i = 0; i < array.length - 1; i++) {
      if (array[i] <= pivot) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    }
    // Recursively sorts the two halves.
    // Combines the two arrays and the pivot into a sorted array.
    return result.concat(quicksort(left), pivot, quicksort(right));
  }
};

console.log(quicksort([1, 100, 2, 43, 21, 54, 6, 24, 98]));

/* SOLUTION CODE */

/*
var concat = function () {
  return [].concat.apply([], arguments);
};

var quicksort = function(array) {

  if (array.length <= 1) { return array; }

  var pivot = array[0];

  var left = array.slice(1).filter(function (x) {
    return x < pivot;
  });

  var right = array.slice(1).filter(function (x) {
    return x >= pivot;
  });

  return concat(quicksort(left), [pivot], quicksort(right));
  };
*/