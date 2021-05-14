
function flipPairs(input) {
  var flippedInput = ''
  // iterate over the string input, incrementing by 2
  // check if next charachter is undefined
  //grab current charachter and add to result
  //break:
  // grab next character, add to result
  // grab current charachter and add to result

  for (var i = 0; i < input.length; i += 2) {
    if (input[i + 1] === undefined) {
      flippedInput += input[i];
      break;
    }
    flippedInput += input[i + 1];
    flippedInput += input[i]


  }



  return flippedInput
}




function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log('passed')
  } else {
    console.log('failed')
  }
}

var input_1 = 'check out how interesting this problem is, it\'s insanely interesting!';
var actual_1 = flipPairs(input_1);
var expected_1 = 'hcce kuo toh wnietertsni ghtsip orlbmei ,si \'t sniasenyli tnreseitgn!';
console.log(actual_1)

// assertEqual(actual_1, expected_1, 'should flip pairs');
