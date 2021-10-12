/*
Given a square matrix, calculate the absolute difference between the sums of its diagonals.
*/

function diagonalDifference(arr) {
  // Write your code here
  let left = 0;
  let right = 0; 
  let lcounter = 0;
  let rcounter = arr.length-1;
  for (let i = 0; i < arr.length; i++) {
    let cur = arr[i];
    left += cur[lcounter];
    right += cur[rcounter]
    lcounter++;
    rcounter--;
  }
  return Math.abs(left - right)
}


let matrix1 = [[1,2,3], [4,5,6], [9,8,9]];

console.log(diagonalDifference(matrix1)) // expect 2 (15 - 17)

