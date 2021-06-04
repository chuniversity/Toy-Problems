/*
Given a list of non-negative integers and a target sum, find a pair of numbers that sums to the target sum.

Example:

var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]
*/

function findPairForSum(array, targetSum) {
  var targetArray = []
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++){
      if(array[i] + array[j] !== targetSum) {
        array.splice(i,1) 
        } else if (array[i] + array[j] === targetSum) {
        targetArray.push(array[i], array[j])
        }
    } 
     
  }

  return targetArray
}


// test

function assertArraysEqual(actual, expected, testName) {
  var sameLength = actual.length === expected.length;
  var sameValues = true;
  for (var i = 0; i < expected.length; i++) {
    if (expected[i] !== actual[i]) {
      sameValues = false;
      break
    }
  }
  if (sameLength && sameValues) {
    console.log(`passed`)
  } else {
    console.log(`FAILED [${testName}] Expected ${expected} but got ${actual}`)
  }
}


var actual = findPairForSum([3, 34, 4, 12, 5, 2], 9)
var expected = [4, 5]
assertArraysEqual(actual, expected, 'find pair for sum')