

var reduce = function (collection, iterator, accumulator) {
  var collection2;
  if (accumulator === undefined) {
    accumulator = collection[0];
    collection2 = collection.slice(1, collection.length);
  } else {
    collection2 = collection;
  }
  if (Array.isArray(collection2)) {
    for (var i = 0; i < collection2.length; i++) {
      accumulator = iterator(accumulator, collection2[i]);
    }
    return accumulator;
  } else {
    for (var item in collection2) {
      accumulator = iterator(accumulator, collection2[item]);
    }
    return accumulator;
  }
};


every = function (collection, iterator) {

  reduce(function (acc, item) {
    if (!acc) return false;
    return iterator(collection)
  }, false)

};


var array = [1,2,3]




var result2 = every(array)
console.log(result2)