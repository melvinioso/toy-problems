/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
var deepEquals = function(apple, orange) {

  // Figured it was worth a try
  // var arg1 = JSON.stringify(apple);
  // var arg2 = JSON.stringify(orange);

  // return (arg1 === arg2);

  // will use recursion here
  // will return true if apple deep equals orange
  if (apple === orange) {
    return true;
  } else if (
    // check if both args are objects and not null
      (typeof apple == "object" && apple != null) && (typeof orange == "object" && orange != null)) {
        // check if both objects have the same number of keys
        if (Object.keys(apple).length != Object.keys(orange).length) {
          return false;
        }
        // check if the keys in orange are in apple
        for (var key in orange) {
          if (apple.hasOwnProperty(key)) {
            // recursively call function on the values for each key
            if (!deepEquals(apple[key], orange[key])) {
              return false;
            }
            // if apple does not have the same keys as orange
          } else {
            return false;
          }
        }
        // if we make it all the way thru the for-in loop
        return true;
        // if we fail the initial object and not null test
      } else {
        return false;
      }
};


console.log(deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}})); // true
console.log(deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}})); // false