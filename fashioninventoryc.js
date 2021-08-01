var currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];

function listAllBlackShoes(inventory) {
  //iterate over the array
  //declare flatlist var
  //declare designerName variable
    //iterate over shoes array
    //split shoe name by word into array
      // iterate over word array
        //if current word equal to black
        // add entire entry to flatlist string
        //if not last
        // add '\n' to end of string
  var flatList = ''
  for (var i = 0; i < inventory.length; i++) {
    var designerName = inventory[i]['name']
    var shoes = inventory[i]['shoes']
    for(var j = 0; j < shoes.length; j++) {
      var shoeArr = shoes[j]['name'].split(' ');
      for (var k = 0; k < shoeArr.length; k++) {
        if (shoeArr[k] === 'black') {
          flatList += designerName + ', ' + shoes[j]['name'] + ', ' + shoes[j]['price']
          if ((i === inventory.length - 1) && (j === shoes.length - 1)) {
          continue
        } else {
          flatList += '\n'
        }
        }
     
      }
    }
  }
  return flatList
}

function assertEqual(actual, expected, testName) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log('passed');
  } else {
    console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
  }
}

var actualFlatBlackList = listAllBlackShoes(currentInventory);
var expectedFlatBlackList = 'Brunello Cucinelli, tasselled black low-top lace-up, 1000\nGucci, black leather laced sneakers, 900';
assertEqual(actualFlatBlackList, expectedFlatBlackList, 'should render flat list of black named shoes within inventory');





      
