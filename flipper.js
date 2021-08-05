

function flipPairs(input) {
  var inputArr = input.split('');
  var newArr = [];
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

  for (var i = 0; i < inputArr.length; i++) {
    var currentChar = inputArr[i];
    var newChar = '';
    for (var j = 0; j < alphabet.length; j++) {
      var currentIndex = j;
      var newIndex
      if (currentIndex <= 12) {
        newIndex = currentIndex + 13
      } else {
        newIndex = (currentIndex + 13) - 26
      }
      if (currentChar === alphabet[j]) {
        newChar = alphabet[newIndex]
      } else if (currentChar === ' ' || currentChar === ',' || currentChar === '\'' || currentChar === '!' ){
        newChar = currentChar;
      }
    }
    newArr.push(newChar)
    
  }
  var newStr = '';
  for (var i = 0; i < newArr.length; i++) {
   newStr = newStr.concat(newArr[i])
  }
  return newStr
}

//test function

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
     console.log('passed')
  } else {
      console.log('failed')
    }
}



//test

var input = 'check out how interesting this problem is, it\'s insanely interesting!';
var actual = flipPairs(input);
var expected = 'purpx bhg ubj vagrerfgvat guvf ceboyrz vf, vg\'f vafnaryl vagrerfgvat!'
assertEqual(actual, expected, 'do strings match')

