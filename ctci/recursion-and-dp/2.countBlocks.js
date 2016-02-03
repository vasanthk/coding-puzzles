/**
 * Imagine a robot sitting on the upper left corner of an X by Y grid. The robot can
 * only move in two directions: right and down. How many possible paths are there
 * for the robot to go from (0,0) to (X,Y)?
 *
 * @Reference:
 * https://github.com/EvanSkeete/front-end-interviews/blob/master/challenges.js#L27
 * https://github.com/vasanthk/cpz/blob/master/js/countBlocks.js
 */

var memoizedBlocks = [[1]];

function countBlocks(x, y) {
  if (x < 0 || y < 0) {
    return 0;
  }

  if(!memoizedBlocks[x]) {
    memoizedBlocks[x] = [];
  }

  if (typeof memoizedBlocks[x][y] !== 'number') {
    memoizedBlocks[x][y] = countBlocks(x-1, y) + countBlocks(x, y-1);
  }

  return memoizedBlocks[x][y];
}

// USAGE
// console.log(countBlocks(3, 3));  // 20