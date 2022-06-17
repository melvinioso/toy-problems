/*
Given a full sudoku board, return 'solved' if the board is solved, or 'invalid' if the board is invalid.

A sudoku board is solved if each column, row, and 3 x 3 subgrid contains all of the digits from 1 to 9.

Input: A String representing the board.
Output: 'solved' if the board is valid, 'invalid' if it isn't

Example input:
"735814296\n
896275314\n
214963857\n
589427163\n
362189745\n
471356982\n
923541678\n
648792531\n
157638429"
*/

function hasConflicts(numbers) {
  return (
    numbers.length !== 9 ||
    numbers.reduce((sum, digit) => sum + digit, 0) != 45 ||
    numbers.indexOf('5') !== numbers.lastIndexOf('5')
  )
}

function createBoardFromString(board) {
  return board.split('\n').map(function(row) {
    return row.split('').map(Number);
  })
};

function sudokuChecker(board) {
  // Your code here.
  const game = createBoardFromString(board)

  for (let i = 0; i < 9; i++) {
    const row = game[i];
    const col = game.map((row) => row[i]);

    if (hasConflicts(row) || hasConflicts(col)) {
      return 'invalid';
    }
  }

  for (let col = 0; col < 9; col += 3) {
    for (let row = 0; row < 9; row += 3) {
      const row1 = game[row].splice(0, 3);
      const row2 = game[row + 1].splice(0, 3);
      const row3 = game[row + 2].splice(0, 3);

      const square = row1.concat(row2, row3);
      if (hasConflicts(square)) {
        return 'invalid';
      }
    }
  }

  return 'solved';
};

const board1 = "735814296\n896275314\n214963857\n589427163\n362189745\n471356982\n923541678\n648792531\n157638429";
const board2 = "895631472\n327984516\n461257398\n942813765\n183765924\n756429183\n578142639\n214396857\n639578241";
const board3 = "795836421\n462195387\n381247956\n279458613\n654371892\n813629745\n147583269\n538962174\n926714538";


console.log(sudokuChecker(board1));
console.log(sudokuChecker(board2));
console.log(sudokuChecker(board3));
