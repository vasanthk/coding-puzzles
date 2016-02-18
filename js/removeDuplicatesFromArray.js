/**
 * Remove duplicates from Array
 *
 * @Reference:
 * http://codereview.stackexchange.com/questions/60128/removing-duplicates-from-an-array-quickly
 * http://stackoverflow.com/questions/9229645/remove-duplicates-from-javascript-array/9229821#9229821
 */

Array.prototype.unique = function (mutate) {
  var unique = this.reduce(function (accum, current) {
    if (accum.indexOf(current) < 0) {
      accum.push(current);
    }
    return accum;
  }, []);
  if (mutate) {
    this.length = 0;
    for (var i = 0; i < unique.length; ++i) {
      this.push(unique[i]);
    }
    return this;
  }
  return unique;
};

// "Smart" but naive way
// Although concise, this algorithm is not particularly efficient for large arrays (quadratic time)
var uniqueArray = arr.filter(function (item, pos) {
  return arr.indexOf(item) === pos;
});

// Hashtables to the rescue
function uniq(a) {
  var seen = {};
  return a.filter(function (item) {
    return seen.hasOwnProperty(item) ? false : (seen[item] = true);
  });
}

// ES6 version
function unique(array) {
  return (new Set(array));
}