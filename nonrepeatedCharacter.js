/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here
  var splitStr = string.split('');
  var results = {};
  // iterate over string and store char counts
  for (var i = 0; i < splitStr.length; i++) {
    if (results[splitStr[i]] === undefined) {
      results[splitStr[i]] = 1;
    } else {
      results[splitStr[i]] = results[splitStr[i]] + 1;
    }
  }

  for (var key in results) {
    if (results[key] === 1) {
      return key;
    }
  }
};

console.log(firstNonRepeatedCharacter('ABA')); // => 'B'
console.log(firstNonRepeatedCharacter('AACBDB')); // => 'C'