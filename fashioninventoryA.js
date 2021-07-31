
var currentInventory = [
  {
    name: "Brunello Cucinelli",
    shoes: [
      { name: "tasselled black low-top lace-up", price: 1000 },
      { name: "tasselled green low-top lace-up", price: 1100 },
      { name: "plain beige suede moccasin", price: 950 },
      { name: "plain olive suede moccasin", price: 1050 },
    ],
  },
  {
    name: "Gucci",
    shoes: [
      { name: "red leather laced sneakers", price: 800 },
      { name: "black leather laced sneakers", price: 900 },
    ],
  },
];

function renderInventory(inventory) {
  var formatted = [];
  for (var i = 0; i < inventory.length; i++) {
    var designer = inventory[i];
    var shoes = designer["shoes"];

    var designerName = designer.name;

    for (var j = 0; j < shoes.length; j++) {
      var currentShoe = shoes[j];

      var shoeName = currentShoe["name"];
      var shoePrice = currentShoe["price"];
      var currentLine = designerName
        .concat(", ", shoeName)
        .concat(", ", shoePrice);
      formatted.push(currentLine);
    }
  }

  for (var i = 0; i < formatted.length; i++) {
    return(formatted[i])
  }
}

//Create helper functions if needed

// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log('passed');
  } else {
    console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
  }
}

var actualFlatList = renderInventory(currentInventory);
var expectedFlatList = 'Brunello Cucinelli, tasselled black low-top lace-up, 1000\nBrunello Cucinelli, tasselled green low-top lace-up, 1100\nBrunello Cucinelli, plain beige suede moccasin, 950\nBrunello Cucinelli, plain olive suede moccasin, 1050\nGucci, red leather laced sneakers, 800\nGucci, black leather laced sneakers, 900';
assertEqual(actualFlatList, expectedFlatList, 'should render flat list for inventory');
