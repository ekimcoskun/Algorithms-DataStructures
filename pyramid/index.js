// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

/* 
// SOLUTION 1

function pyramid(n) {
  const totalLineSpace = 2 * n - 1;
  const middleOfLine = Math.round(totalLineSpace / 2) - 1;
  for (let i = 0; i < n; i++) {
    let line = "";
    for (let j = 0; j < totalLineSpace; j++) {
      if (middleOfLine - i <= j && j <= middleOfLine + i) {
        line += "#";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
} 
*/

// SOLUTION 2 (RWCURSIVE FUNCTION)
function pyramid(n, row = 0, level = "") {
  if (row === n) {
    return;
  }

  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  const middleOfLine = Math.round((2 * n - 1) / 2 - 1);
  let add;
  if (
    middleOfLine - row <= level.length &&
    middleOfLine + row >= level.length
  ) {
    add = "#";
  } else {
    add = " ";
  }
  pyramid(n, row, level + add);
}

pyramid(3);
