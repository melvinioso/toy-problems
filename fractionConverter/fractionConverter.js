/**
 * Write a function that takes a number as its argument and
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 *
 * Whole numbers and mixed fractions should be returned as irregular fractions
 *
 * Example: toFraction(3.0) === '3/1'
 *
 * Example: toFraction(2.5) === '5/2'
 *
 */

var toFraction = function(num) {
  // Your code here
  let numerator = 0;
  let denominator = 0;
  let counter = 0;
  let temp = 1;
  let newNum = (num % 1).toString().split("");

  if (num % 1 === 0) {
    numerator = num;
    denominator = 1;
  } else if (num % 1 !== 0) {
    for (let i = 1; i < newNum.length; i += 1) {
      if (newNum[i] !== ".") {
        temp *= 10;
      }
    }
    numerator = num * temp;
    denominator = temp;
    if (numerator > denominator) {
      counter = numerator;
    } else {
      counter = denominator;
    }

    while (counter > 0) {
      if (numerator % counter === 0 && denominator % counter === 0) {
        numerator /= counter;
        denominator /= counter;
        break;
      }
      counter--;
    }
  }
  return Math.floor(numerator) + "/" + denominator;
};

console.log(toFraction(0.5)) // 1/2
console.log(toFraction(3.0)) // 3/1
console.log(toFraction(2.5)) // 5/2