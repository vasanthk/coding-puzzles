/**
 * Implement a function that takes in a two-dimensional array of colors that represents a screen,
 * a point in the array, and a color. The function will change the original color of the point to the new
 * color and will fill the surrounding area with the original color in the same fashion.
 *
 * @Reference:
 * Pg. 328 in book.
 *
 */

function paintFill(screen, x, y, newColor) {
  // Gotcha:
  // We use screen[y][x] to pass the current color because in array x, y co-ordinates are accessed as [y][x]
  return paintFillRecurse(screen, x, y, screen[y][x], newColor);
}

function paintFillRecurse(screen, x, y, oldColor, newColor) {
  if (x < 0 || x >= screen[0].length || y < 0 || y >= screen.length) {
    return false;
  }

  if (screen[y][x] === oldColor) {
    screen[y][x] = newColor;
    paintFillRecurse(screen, x - 1, y, oldColor, newColor); // Left
    paintFillRecurse(screen, x + 1, y, oldColor, newColor); // Right
    paintFillRecurse(screen, x, y - 1, oldColor, newColor); // Top
    paintFillRecurse(screen, x, y + 1, oldColor, newColor); // Bottom
  }
  return screen;
}

var screen = [
  ['red', 'red', 'red', 'red', 'red', 'red', 'red'],
  ['red', 'green', 'green', 'green', 'green', 'red', 'red'],
  ['blue', 'blue', 'blue', 'green', 'green', 'green', 'red'],
  ['red', 'red', 'green', 'green', 'green', 'blue', 'blue'],
  ['red', 'red', 'red', 'red', 'blue', 'blue', 'blue']
];

console.log(paintFill(screen, 3, 2, 'white'));