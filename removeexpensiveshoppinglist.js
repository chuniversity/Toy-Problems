
shoppingList = [
  {
    item: "rice",
    price: 12.75,
    weightInPounds: 20
  },
  {
    item: "chicken",
    price: 6.99,
    weightInPounds: 1.25
  },
  {
    item: "celery",
    price: 3.99,
    weightInPounds: 2
  },
  {
    item: "carrots",
    price: 2.85,
    weightInPounds: 2
  },
  {
    item: "green beans",
    price: 2.55,
    weightInPounds: 2
  }
];

output = removeMostExpensive(shoppingList);
console.log(shoppingList)
console.log(output)


function removeMostExpensive(list) {
  //implement the function described above, here
  var newArr = list
  var newArr2 = []
  var mostExpensive = newArr[0]['item']
  var mostExpensivePrice = newArr[0]['price']

  for (var i = 0; i < newArr.length; i++) {
    if (newArr[i]['price'] > mostExpensive) {
      mostExpensive = newArr[i]['item'];
      mostExpensivePrice = newArr[i]['price']
    }
    for (var i = 0; i < newArr.length; i++) {
      if (newArr[i]['item'] !== mostExpensive) {
        newArr2.push(newArr[i])
      }
    }
  }
  return newArr2
}
