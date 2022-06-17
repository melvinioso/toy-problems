/*
*
* Integer Reverse
*
* Given a positive integer, return its digits reversed.
*
* - DO NOT CONVERT THE INPUT INTO A STRING OR ARRAY.
* - Only use integers and math in your solution.
*
*/

function reverseInteger(number){
  // TODO: Implement this function!
  let result = 0;

  while (number > 0) {
    let mod = number % 10;
    result = (result * 10) + mod;
    number = number - mod;
    number = number / 10;
  }

  return result;
}

console.log(reverseInteger(234235));
