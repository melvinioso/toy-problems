/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

var rockPaperScissors = function () {
  // TODO: your solution here
  var throws = ['R', 'P', 'S'];
  var results = [];

  // iterater over the array and build all possible throws
  // this is not the most time efficient solution but it works well for 3 rounds
  for (var i = 0; i < throws.length; i++) {
    for (var j = 0; j < throws.length; j++) {
      for (var k = 0; k < throws.length; k++) {
        var throwsStr = throws[i] + throws[j] + throws[k];
        results.push(throwsStr);
      }
    }
  }
  return results;
};

/* SOLUTION CODE */

/*
var rockPaperScissors = function (rounds) {
  // TODO: your solution here

  var rounds = rounds || 3;
  var combos = [];

  var playRounds = function (playedSoFar) {
    playedSoFar = playedSoFar || '';

    if (playedSoFar.length === rounds) {
      combos.push(playedSoFar);
      return;
    }

    ['R', 'P', 'S'].forEach(function(currentPlay) {
      playRounds(playedSoFar + currentPlay);
    });
  };

  playRounds();
  return combos;
};
*/