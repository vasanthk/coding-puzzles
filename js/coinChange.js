/**
 * Optimal Coin change problem
 *
 * @Reference:
 * http://kganser.com/change.html
 * https://gist.github.com/jeanlauliac/8674996
 * http://www.geeksforgeeks.org/dynamic-programming-set-7-coin-change/
 * http://stackoverflow.com/questions/1106929/find-all-combinations-of-coins-when-given-some-dollar-value
 */

// Dynamic Programming
var makeChange = function (coins) {
  var cache = {};
  return function change(amount) {
    if (!amount) {
      return [];
    }
    if (cache[amount]) {
      return cache[amount].slice();
    }

    var min = [], newMin, newAmount;
    coins.forEach(function (coin) {
      newAmount = amount - coin;

      if (newAmount >= 0) {
        newMin = change(newAmount);

        if (
          (newMin.length < min.length - 1 || !min.length) &&  // Ensure newMin will be lesser in size than min
          (newMin.length || !newAmount) // Ensure newMin has values and that newAmount is not zero.
        ) {
          min = [coin].concat(newMin);
        }
      }
    });
    cache[amount] = min;
    return cache[amount];
  };
};

// Output
//
// var coins = [1, 6, 10, 25]
// console.log(makeChange(coins)(37));
//
// [6, 6, 25]


// Greedy algorithm (Naive and not accurate for all inputs)'
var makeChange = function (amount) {
  var change = [],
    total = 0;
  [25, 10, 5, 1].forEach(function (coin) {
    while (total + coin <= amount) {
      change.push(coin);
      total += coin;
    }
  });
  return change;
};