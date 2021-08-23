// FUNCTION DEFINITION(S)
var classList = ["Joe", "Jack", "John", "Fred", "Frank", "Barry", "Larry", "Mary", "Harry", "Farrell", "Susan", "Monica", "Keira", "Caroline", "Harriet", "Erica", "Luann", "Cheryl", "Beth", "Rupa", "Linda", "Allison", "Nancy", "Dora"];



// USE THIS FUNCTION TO GENERATE A RANDOM NUMBER
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function decorateClassListWithAges(classList) {

  var decoratedClassList = [];

  for (var i = 0; i < classList.length; i++) {
    var studentObj = {
      name: classList[i];
      age: getRandomIntInclusive(10,11)
    };
    decoratedClassList.push(studentObj);
  }
  return decoratedClassList;
}


// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(actual, expected, testName) {

}

// TESTS CASES
var result1 = decorateClassListWithAges(classList)
console.log(result1)
