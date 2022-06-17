
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` if the input is not a string. You can expect
 * all non-empty string inputs to be valid roman numerals.
 */

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var translateRomanNumeral = function(romanNumeral) {
// TODO: Implement me!
  if (typeof romanNumeral !== 'string') {
    return null;
  }

  if (romanNumeral.length === 1) {
    return DIGIT_VALUES[romanNumeral];
  }

  const split = romanNumeral.split('');

  let sum = 0;
  for (let i = 0; i < split.length; i++) {
    const firstValue = DIGIT_VALUES[split[i]]
    const secondValue = DIGIT_VALUES[split[i + 1]];
    if (firstValue < secondValue) {
      sum -= firstValue;
    } else {
      sum += firstValue;
    }
  }
  return sum;
};

console.log(translateRomanNumeral("LX")) // 60)
console.log(translateRomanNumeral("IV")) // 4)