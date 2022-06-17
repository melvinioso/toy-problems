/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function(arr) {

  let results = {};

  // loop thru the arr
  for (var i = 0; i < arr.length; i++) {
    // if index has not been counted yet
    if (!results[arr[i]]) {
      // var currentIndex = JSON.stringify(results[arr[i]]);
      results[arr[i]] = 0;
    }
    // if index exists increment it
    results[arr[i]] += 1;
  }

  for (var i = 0; i < arr.length; i++) {
    if (results[arr[i]] %2 === 0) {
      return arr[i];
      break;
    }
  }
  return null;
};

/* SOLUTION CODE */

/*
var evenOccurrence = function(arr) {
  // Your code here.

  var hash = {};
  var i;
  // hash of not-even characters
  for (i = 0; i < arr.length; i++) {
    hash[arr[i]] = !hash[arr[i]];
  }
  // return the first even occurrence
  for (i = 0; i < arr.length; i++) {
    if (!hash[arr[i]]) { return arr[i]; }
  }
  return null;
};
*/