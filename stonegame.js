/*
Alex and Lee play a game with piles of stones.  There are an even number of piles arranged in a row, and each pile has a positive integer number of stones piles[i].

The objective of the game is to end with the most stones.  The total number of stones is odd, so there are no ties.

Alex and Lee take turns, with Alex starting first.  Each turn, a player takes the entire pile of stones from either the beginning or the end of the row.  This continues until there are no more piles left, at which point the person with the most stones wins.

Assuming Alex and Lee play optimally, return True if and only if Alex wins the game.

*/



var stoneGameOld = function(piles) {
  let alex = 0
  let lee = 0
  let turn = 0
 

while(piles.length > 0) {
  console.log(turn, 'piles:', piles, 'alex', alex, 'lee', lee)
  let first = piles[0];
  let last = piles[piles.length-1];
  if(turn === 0) {
    if (first === last) {
      if (piles[0 + 1] > )
    } else if (first > last) {
      alex += first;
      piles.shift();
    } else {
      alex += last;
      piles.pop();
    }
  } else {
    if(first >= last) {
      lee += first;
      piles.shift();
    } else {
      lee += last;
      piles.pop();
    }
  }
  if (turn === 0) {turn = 1} else {turn = 0};
}
if (alex > lee) { return true } else { return false }
};





var stoneGame = function(piles) {
  let alex = 0
  let lee = 0
  let turn = 0
 
  const turn = (pile) => {
    if (turn === 0) {
      for (let i = 0; i < pile.length; i++) {
        let first = pile[i];
        for (let j = pile.length-1; j >=0; j--) {
          let last = 
        }
      }
    }
  }



turn(piles)
if (alex > lee) { return true } else { return false }
};


 
let piles = [3,7,2,3] // true

console.log(stoneGame(piles))



