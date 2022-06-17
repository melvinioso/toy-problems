/**
 * Write a stack using your preferred instantiation pattern. Implement a min function
 * that returns the minimum value of all the elements in the stack in constant time.stack.

 * All of the functions in the Stack should run in constant time!
 **/

/**
 * Pseudoclassical Stack Class
**/


var Stack = function() {
  this.storage = [];
  this.minimum = [];
};

// add an item to the top of the stack
Stack.prototype.push = function(value) {
  this.storage.push(value);

  if (this.minimum.length === 0 || value <= this.minimum[this.minimum.length - 1]) {
    this.minimum.push(value);
  }
};

// remove an item from the top of the stack
Stack.prototype.pop = function() {
  var popped = this.storage.pop();

  if (popped === this.minimum[this.minimum.length - 1]) {
    this.minimum.pop();
  }

  return popped;
};

// return the number of items in the stack
Stack.prototype.size = function() {
  return this.storage.length;
};

// return the minimum value in the stack
Stack.prototype.min = function() {
  return this.minimum[this.minimum.length - 1];
};

/* SOLUTION CODE */

/*
var Stack = function() {

  var storage = [];
  var minValueStorage = [];

  // add an item to the top of the stack
  this.push = function(value) {

    if (!minValueStorage.length ||
        value <= minValueStorage[minValueStorage.length - 1]) {
      minValueStorage.push(value);
    }
    storage.push(value);
  };

  // remove an item from the top of the stack
  this.pop = function() {

    var value = storage.pop();
    if (value === minValueStorage[minValueStorage.length - 1]) {
      minValueStorage.pop();
    }
    return value;
  };

  // return the number of items in the stack
  this.size = function() {

    return storage.length;
  };

  // return the minimum value in the stack
  this.min = function() {

    return minValueStorage[minValueStorage.length - 1];
  };

};
*/