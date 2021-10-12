/*

Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

Example

The minimum sum is  and the maximum sum is . The function prints

16 24
*/


function miniMaxSum(arr) {

  let lowest = arr.slice();
  let highest = arr.slice();
  
  let lowestNum = arr[0];
  let highestNum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if(arr[i] < lowestNum) {
      lowestNum = arr[i];
    }
    if(arr[i] > highestNum) {
      highestNum = arr[i];
    }
  }
  lowest.splice(lowest.indexOf(highestNum), 1);
  lowest = lowest.reduce(function(a, b) { return a + b; }, 0);
  highest.splice(highest.indexOf(lowestNum), 1);
  highest = highest.reduce(function(a,b) { return a + b; }, 0);
  console.log(`${lowest} ${highest}`)
}


let arr = [1,3,5,7,9];

console.log(miniMaxSum(arr)) // expect 16 24