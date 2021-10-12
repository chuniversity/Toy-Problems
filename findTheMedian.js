/*
I - array of odd numbers
O - integer
C 

*/

function findMedian(arr) {
  // Write your code here
  let sorted = arr.sort((a,b) => a - b)
  console.log(Math.floor(arr.length / 2))
  return arr[Math.floor(arr.length / 2)]
}

let arr = [5,3,1,2,5,9,5,6,2,8,4,2,6];

console.log(findMedian(arr)) // expect 3