/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function(string) {
  // Your code here.
  var results = [];

  // use a helper recursive function
  var findAnagram = function(anagram, str) {
    // when the anagram is same length as string push into results
    if (anagram.length === string.length) {
      results.push(anagram);
    } else {
      // loop over the string and recursively build an anagram
      for (var i = 0; i < str.length; i++) {
        // recursively call findAnagram
        // pass in current anagram plus the next letter in str
        // recursively call after slicing str
        findAnagram(anagram + str[i], str.slice(0, i).concat(str.slice(i + 1)));
      };
    }
  };
  // invoke recursive function and set starting anagram to empty string
  findAnagram('', string);
  var newResults = new Set(results);
  var arrayResults = [...newResults];
  return arrayResults;
};


var anagrams = allAnagrams('apps');
console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]