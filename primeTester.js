/**
 * A prime number is a whole number that has no other divisors other than
 * itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

var primeTester = function(n) {

  if (typeof n !== 'number' || n < 1 || n % 1 !== 0) {
    return false;
  }

  var upperLimit = Math.sqrt(Math.abs(n));

  if (n === 1) {
    return false;
  }

  for (var i = 2; i <= upperLimit; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

/* Extra credit: Write a function that generates a list of all prime numbers
 * in a user-specified range (inclusive). If you're not quite sure where to start,
 * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
 * saucy, check out the Sieve of Atkin.)
 */

var primeSieve = function (start, end) {
};

// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31
console.log(primeTester(2)) // true
console.log(primeTester(7)) // true
console.log(primeTester(9)) // false
console.log(primeTester(14)) // false
console.log(primeTester(28)) // false