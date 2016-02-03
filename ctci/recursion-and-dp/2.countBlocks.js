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

  if (!memoizedBlocks[x]) {
    memoizedBlocks[x] = [];
  }

  if (typeof memoizedBlocks[x][y] !== 'number') {
    memoizedBlocks[x][y] = countBlocks(x - 1, y) + countBlocks(x, y - 1);
  }

  return memoizedBlocks[x][y];
}

// USAGE
// console.log(countBlocks(3, 3));  // 20


/**
 * FOLLOW UP
 * Imagine certain squares are “off limits”, such that the robot can not step on them. Design an algorithm to get all possible paths for the robot.
 *
 * @Reference:
 * https://github.com/rcocetta/crackingcode/blob/master/js/chapter8.js
 */

// We'll implement only the "FOLLOW UP"
// Let's assume that the "off limits" squares are marked with a 0 and the others with other numbers
function robot(grid) {
  var N = grid ? grid.length || 0 : 0, //init N depending on the passed grid
    paths = [];

  function takeStep(i, j, dir, path) {
    if (grid[i][j] === 0) {
      return null;
    } else {
      path.push(dir);
      if ((i === N - 1) && (j === N - 1)) {
        //we reached the end
        paths.push(path);
        return;
      }
      if (i < N - 1) {
        takeStep(i + 1, j, "down", path.slice());
        // NOTE: Slice is used to make a copy of the path array (copies by value - instead of passing a reference)
      }
      if (j < N - 1) {
        takeStep(i, j + 1, "right", path.slice());
      }
    }
  }

  if (N >= 2) {
    //if this is not the case, we can't moves
    takeStep(1, 0, "down", []);
    takeStep(0, 1, "right", []);
  }

  return paths;
}

// OUTPUT:
// robot([[1,1,1], [1,1,2], [1,2,4]])
// Returns all possible paths in an array