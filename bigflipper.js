


function flipEveryNChars(inputString, n) {
  /// split input string into an array, on no delimiter
  // iterate over the array of charachters by no
    // slice the array from current position to current position plus n
    //reverse the array
    // join the revesed array
    //add resulting string to resulting
    // return result

  var flipped = '';
  var charachters = inputString.split('')
  for (var i = 0; i < charachters.length; i += n) {
    var currentSlice = charachters.slice(i, i + n);
    var reversedSlice = currentSlice.reverse();
    var joinedSlice = reversedSlice.join('');
    flipped += joinedSlice
  }
  return flipped
}

function assertEqual(acutal, expected, testName) {
  if (actual === expected) {
    console.log('passed')
  } else {
    console.log('failed')
  }
}

var input = 'a short example';
var actual = flipEveryNChars(input, 5);
var expected = 'ohs axe trelpma'
assertEqual(actual, expected, 'flip every n char'); // --> ohs axe trelpma

// var splitInput = input.split('');
// var firstSlice = splitInput.slice(0, 5);
// var secondSlice = splitInput.slice(5, 10);
// console.log('first: ', firstSlice);
