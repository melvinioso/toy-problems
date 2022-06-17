/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note:
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same.
 *
 * Example 2 :
 *
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

var powerSet = function(str) {

  var obj = {};
  // remove duplicate letters
  for (var i = 0; i < str.length; i++) {
    obj[str[i]] = true;
  }

  var array = Object.keys(obj);

  var result = [''];

  for (var i = 0; i < array.length; i++) {
    // prevents infinite loop
    var resLength = result.length;
    for (var j = 0; j < resLength; j++) {
      result.push(result[j].concat(array[i]));
    };
  };

  return result;
};

console.log(powerSet("jump")); // ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]