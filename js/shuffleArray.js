/**
 * Shuffle an array
 *
 * @Reference:
 * http://stackoverflow.com/a/6274398/1672655
 * http://blog.codinghorror.com/the-danger-of-naivete/
 */

// Fisher–Yates shuffle
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}
