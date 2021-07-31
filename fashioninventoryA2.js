// FUNCTION DEFINITIONS
var inventory = [
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


function renderInventory(inventory) {
  // create flat list string
  var flatList = "";
  // iterate over the inventory array
  for (var i = 0; i < inventory.length; i++) {
    var designerObject = inventory[i];
    for (var j = 0; j < designerObject.shoes.length; j++) {
      flatList += designerObject.name + ', ' + designerObject.shoes[j].name + ', ' + designerObject.shoes[j].price;
      if ((i === inventory.length - 1) && (j === designerObject.shoes.length - 1)) {
        continue;
      } else {
        flatList += '\n'
      }
    }
  }
  // return flat list string
  return flatList;
}

var output = renderInventory(inventory);
console.log(output)





// // ASSERTION FUNCTION(S) TO BE USED
// function assertEqual(actual, expected, testName) {
//   if (actual === expected) {
//     console.log('passed');
//   } else {
//     console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
//   }
// }

// TESTS FOR RENDER INVENTORY

// var actualFlatList = renderInventory(inventory);
// var expectedFlatList = 'Brunello Cucinelli, tasselled black low-top lace-up, 1000\nBrunello Cucinelli, tasselled green low-top lace-up, 1100\nBrunello Cucinelli, plain beige suede moccasin, 950\nBrunello Cucinelli, plain olive suede moccasin, 1050\nGucci, red leather laced sneakers, 800\nGucci, black leather laced sneakers, 900';
// assertEqual(actualFlatList, expectedFlatList, 'should render flat list for inventory');