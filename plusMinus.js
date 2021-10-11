/*
Given an array of integers, calculate the ratios of its elements that are positive, 
negative, and zero. Print the decimal value of each fraction on a new line with  6
places after the decimal.

Note: This challenge introduces precision problems. 
The test cases are scaled to six decimal places, though answers with absolute error
of up to  are acceptable.


*/

const plusMinus = function (arr) {
  let len = arr.length;
  let pos = 0;
  let neg = 0;
  let zer = 0;

  for (let i = 0; i < arr.length; i++) {
    if(arr[i] > 0) {
      pos++;
    } else if (arr[i] < 0) {
      neg++;
    } else if (arr[i] === 0) {
      zer++;
    }
  }
  let posDec = (pos / len).toFixed(6);
  let negDec = (neg / len).toFixed(6);
  let zerDec = (zer / len).toFixed(6);
  console.log(posDec + '\n' + negDec + '\n' + zerDec)

}

let arr1 =  [0, 0, -1, 1, 1]
console.log(plusMinus(arr1)) 
// expect 
// 0.400000
// 0.400000
// 0.200000
