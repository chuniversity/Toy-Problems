var each = function (collection, iterator) {
  if (Array.isArray(collection) === true) {
    for (var i = 0; i < collection.length; i++) {
      iterator(collection[i], i, collection);
    }
  } else {
    for (var item in collection) {
      iterator(collection[item], item, collection);
    }
  }
};

var uniq = function (array, isSorted, iterator) {
if (iterator === undefined) {
    var count = {};
    for (var i = 0; i < array.length; i++) {
      if (count[array[i]] === undefined) {
        count[array[i]] = 1;
      } else {
        count[array[i]]++;
      }
    }
    var strArr = Object.keys(count);
    var numArr = [];
    for (var i = 0; i < strArr.length; i++) {
      numArr.push(parseFloat(strArr[i]));
    }
    return numArr;
  } else {
    var ittArr = [];
   
    for (var i = 0; i < array.length; i++) {
      ittArr.push(iterator(array[i]).toString())
    }
     
    var nonArr = [];
    var count2 = {};
    for (var i = 0; i < ittArr.length; i++) {       
      if (count2[ittArr[i]] === undefined) { 
        count2[ittArr[i]] = 1;
        nonArr.push(array[i])
      } else {
        count2[ittArr[i]]++;
      }
      console.log(count2)
    }
    return nonArr;
    
  }
};

var numbers = [1, 2, 1, 3, 1, 4];
var otherNumbers = [11.2, 11.9, 12.4, 12.6];

var isOne = function(value) { return value === 1; };
var roundNumber = function(number) { return Math.round(number); };

var output = uniq(numbers, false, isOne)
var output2 = uniq(otherNumbers, false, roundNumber)


console.log(output)
console.log(output2)


