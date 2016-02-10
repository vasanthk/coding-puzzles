/**
 * Remove duplicates from Array
 *
 * @Reference:
 * http://codereview.stackexchange.com/questions/60128/removing-duplicates-from-an-array-quickly
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


// ES6 version
function unique(array) {
  return (new Set(array));
}