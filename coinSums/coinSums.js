/*

In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
£1 (100p)
£2 (200p)

It is possible to make £2 in the following way:

1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
How many different ways can £2 be made using any number of coins?

example usage of `makeChange`:

// aka, there's only one way to make 1p. that's with a single 1p piece
makeChange(1) === 1
// aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
makeChange(2) === 2
*/

// Smaller example for 20p
/*
10 | 5 | 1
----------
0 | 0 | 20
0 | 1 | 15
0 | 2 | 10
0 | 3 | 5
0 | 4 | 0
1 | 0 | 10
1 | 1 | 5
1 | 2 | 0
2 | 0 | 0
*/

var makeChange = function(total) {

  var coins = [ 1, 2, 5, 10, 20, 50, 100, 200 ];
  var count = 0;

  // recursive helper function
  var getChange = (index, value) => {
    var currentCoin = coins[index];
    if (index === 0) {
      if (value % currentCoin === 0) {
        count++;
      }
      return;
    }

    while(value >= 0) {
      getChange(index - 1, value);
      value = value - currentCoin;
    }
  };

  // invoke helper function, variables are index for coins array and total
  // start at the largest coin and work backwards
  getChange(coins.length - 1, total);
  return count;
};


console.log(makeChange(-10)); // === 1
console.log(makeChange(1)); // === 1
console.log(makeChange(2)); // === 2
console.log(makeChange(37)); // === 2
console.log(makeChange(50)); // === 2
console.log(makeChange(100)); // === 2
console.log(makeChange(200)); // === 2