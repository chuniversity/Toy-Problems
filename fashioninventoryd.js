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


function calculateAveragePricePerDesigner(inventory) {

var designersArray = []
var designersObj = {}
  for (var i = 0; i < inventory.length; i++) {
    var name = inventory[i].name;
    var shoes = inventory[i].shoes;
    var priceSum = 0;
    var priceTotal = shoes.length;
    for(var j = 0; j < shoes.length; j++) {
      priceSum += shoes[j].price
    }
    var priceAvg = priceSum / priceTotal
    designersArray.push({'name': name, 'averagePrice': priceAvg})
  }
  designersObj.designers = designersArray
  return designersObj
}



var expected = {
  'designers': [
    {
      'name': 'Brunello Cucinelli',
      'averagePrice': 1025
    },
    {
      'name': 'Gucci',
      'averagePrice': 850
    }
  ]
};

function assertEqual(actual, expected, testName) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log('passed')
  } else {
    console.log('failed')
  }
}


// Create helper functions if needed

var actual = calculateAveragePricePerDesigner(currentInventory)

var result1 = calculateAveragePricePerDesigner(currentInventory)
assertEqual(actual, expected, 'are the objects equal')
