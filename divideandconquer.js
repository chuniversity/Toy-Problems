/*

Binary search is a technique for very rapidly searching a sorted collection by cutting the search space in half at every pass.

Given a sorted array, such as this:
[1, 3, 16, 22, 31, 33, 34]

You can search for the value 31, as follows:

1) Pick the midpoint: 22.
2) The value is higher than 22, so now consider only the right half of the previous array:
[...31, 33, 34]
3) Pick the midpoint: 33
4) The value is lower than 33, so now consider only the left half of the previous array:
[...31...]
5) Pick the midpoint: 31
6) You've hit the value.
7) Return the index of the value.

Notes:
* If you don't find the value, you can return null.
* If at any point you calculate the index of the midpoint and get a fractional number, just round it down ("floor" it).
*/


function binarySearch(array, target) {
  var min = 0;
  var max = array.length - 1;
  var midpoint = Math.floor((max + min) / 2);

  while (min <= max) {
    if (target === array[midpoint]) {
      return midpoint;
    }
    // if the target value is less than the value at the midpoint
    if (target < array[midpoint]) {
      // reset max to be midpoint - 1
      max = midpoint - 1
    }
    // if the target value is greater than the value at the midpoint
    if (target > array[midpoint]) {
      // reset min to be midpoint + 1
      min = midpoint + 1
    }
    midpoint = Math.floor((max + min) / 2);
  }
  //  if while loop stops, we know targte value is not present
  return null
}



/// tests

function assertEqual(actual, expected, target) {
  if (actual === expected) {
    console.log('passed');
  } else {
    console.log('failed')
  }
}

var actual = binarySearch([1, 3, 16, 22, 31, 33, 34], 22)
var expected = 3
console.log(actual)
assertEqual(actual, expected, 'find number')