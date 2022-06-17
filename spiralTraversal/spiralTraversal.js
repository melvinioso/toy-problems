/*
 * Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Please write some form of specs, tests, or assertions for your code, and check as many edge cases as you can think of
 *
 * example:

    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

var spiralTraversal = function(matrix) {

  // TODO: Implement me!
  // var list= [];

  // while(matrix.length > 1){

  //   //Right
  //   list= list.concat(matrix.splice(0,1)[0]);

  //   //Down
  //   for(var idx in matrix){
  //     list.push(matrix[idx].splice(-1)[0]);
  //   }

  //   //Left
  //   list= list.concat(matrix.splice(-1,1)[0].reverse());

  //   //Up
  //   for(var idx=matrix.length-1;idx>=0;idx--){
  //     list.push(matrix[idx].splice(0,1)[0]);
  //   }

  // }

  // if(matrix.length>0){
  // 	list.push(matrix.pop()[0]);
  // }

  // return list;
//   var list = [
  var results = [];
  var startRowIndex = 0;
  var endRowIndex = matrix.length - 1;
  var startColIndex = 0;
  var endColIndex = matrix[0].length - 1;

  while (startRowIndex <= endRowIndex && startColIndex <= endColIndex) {

    for (var i = startColIndex; i <= endColIndex; i++) {
      results.push(matrix[startRowIndex][i]);
    }
    startRowIndex++;

    for (var j = startRowIndex; j <= endRowIndex; j++) {
      results.push(matrix[j][endColIndex]);
    }
    endColIndex--;

    if (startRowIndex <= endRowIndex) {
      for (var k = endColIndex; k >= startColIndex; k--) {
        results.push(matrix[endRowIndex][k]);
      }
      endRowIndex--;
    }

    if (startColIndex <= endColIndex) {
      for (var m = endRowIndex; m >= startRowIndex; m--) {
        results.push(matrix[m][startColIndex]);
      }
      startColIndex++;
    }

  }

  return results;
};

var awkwardMatrix1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12], [13, 14, 15], [16, 17, 18], [19, 20, 21], [22, 23, 24]];
var awkwardMatrix2 = [[1, 2, 3, 4, 5, 6, 7], [6, 7, 8, 9, 10, 11, 12], [13, 14, 15, 16, 17, 18, 19]];
var awkwardMatrix3 = [[1, 2, 3, 4, 5, 6, 7]];

console.log(spiralTraversal(awkwardMatrix1) === [1, 2, 3, 6, 9, 12, 15, 18, 21, 24, 23, 22, 19, 16, 13, 10, 7, 4, 5, 8, 11, 14, 17, 20]);
console.log(spiralTraversal(awkwardMatrix2) === [1, 2, 3, 4, 5, 6, 7, 12, 19, 18, 17, 16, 15, 14, 13, 6, 7, 8, 9, 10, 11]);
console.log(spiralTraversal(awkwardMatrix3) === [1, 2, 3, 4, 5, 6, 7]);