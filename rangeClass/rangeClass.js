/**
 * Build a class to represent a range of numbers that takes:
 *   - a beginning index,
 *   - an end index (optional)
 *     If there is no end index, the range should include only the passed-in start value.
 *   - a 'step' (optional)
 *     The step is the interval at which elements are included.
 *     For instance, a step of 1 includes every element in the range,
 *     while a step of 2 includes every other element.
 *
 * The range should have a constructor that accepts these arguments in that order.
 *
 * It should also support the following utility functions:
 *   - size(): return the number of items represented by the range
 *   - each(callback(index)): iterate over the range, passing each value to a callback function
 *   - includes(index): return whether or not the range includes the passed value
 *
 * You should also be aware of the following caveats:
 *   - You should allow a negative value for 'step' to count backwards.
 *   - If no step is provided, it should default to 1.
 *   - If the start value is greater than the end value, assume we're counting backwards.
 *   - Should return null if we are given no 'start' value.
 *
 * Range should use constant space, even during the `each` method. i.e. you should *not*
 * use an Array as backing storage. Any given range could potentially be thousands of numbers long,
 * so find a way to represent the range without actually storing each element.
 *
 * USAGE EXAMPLES:
 * var myRange = new Range(0,10); // a new range representing the numbers between 0 and 10 (inclusively)
 *
 * var evenNumbers = new Range(2,8,2); // A range with the even numbers 2, 4, 6, and 8.
 * evenNumbers.each(function(val){
 *   console.log(val+"!");
 * });
 * console.log("Who do we appreciate!?");
 *
 * evenNumbers.size() should be 4
 * evenNumbers.includes(2) should be true, evenNumbers.includes(3) should be false
 */


var Range = function(start, end, step) {
  // Should return null if we are given no 'start' value.
  if (start === undefined) return null;
  this.start = start;
  // If there is no end index, the range should include only the passed-in start value.
  this.end = end === undefined ? start : end;
  // If no step is provided, it should default to 1.
  // If the start value is greater than the end value, assume we're counting backwards.
  this.step = step || (this.end-this.start > 0 ? 1 : -1);
};

Range.prototype.size = function () {
  // if (this.end) {
  //   return Math.round(this.end / this.step);
  // }
  // return Math.round(this.start / this.step);
  return Math.floor((this.end - this.start) / this.step) + 1;
};

Range.prototype.each = function (callback) {

  if (this.step > 0) {
    for (var i = this.start; i <= this.end; i += this.step) {
      callback(i);
    }
  } else {
    for (var i = this.start; i >= this.end; i += this.step) {
      callback(i);
    }
  }
};

Range.prototype.includes = function (val) {

  var isMultipleOfStep = ((this.start - val) % this.step) === 0;

  return this.start < this.end ?  ( (val >= this.start) && (val <= this.end) ) && isMultipleOfStep :  ( (val <= this.start) && (val >= this.end) ) && isMultipleOfStep;
  // if (isNaN(this.end)) {
  //   return this.start === val;
  // } else if (!isNaN(this.end) && val < this.end) {
  //   return val % this.step === 0;
  // }
  // return true
};

var range = new Range(1);
// console.log(range.start)
// console.log(range.end)
console.log(range.includes(1))
console.log(range.includes(50))
// console.log(range);
// var myRange = new Range(0,10); // a new range representing the numbers between 0 and 10 (inclusively)
// console.log(myRange);
// var evenNumbers = new Range(2,8,2); // A range with the even numbers 2, 4, 6, and 8.
// console.log(evenNumbers);
// evenNumbers.each(function(val){
//   console.log(val+"!");
// });
// console.log("Who do we appreciate!?");

// console.log(evenNumbers.size()); // should be 4
// console.log(evenNumbers.includes(2)); // should be true
// console.log(evenNumbers.includes(3)); // should be false
// var threes = new Range(3, 100, 3);
// console.log(threes.includes(3))
// console.log(threes.includes(4))
// console.log(threes.includes(33))
// console.log(threes.includes(99))
// var justOne = new Range(1);
// console.log(justOne.size()) // 1
// var oneToTen = new Range(1, 10);
// console.log(oneToTen.size()) // 10
// var evenDigits = new Range(2, 8, 2);
// console.log(evenDigits.size()) // 4
// var threes = new Range(3, 100, 3);
// console.log(threes.size()) // 33