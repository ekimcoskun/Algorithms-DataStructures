// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

/* 
// # SOLUTION 1
function steps(N) {
  for (let i = 0; i < N; i++) {
    let word = "";
    for (let j = 0; j < N; j++) {
      if (i >= j) {
        word += "#";
      } else {
        word += " ";
      }
    }
    console.log(word);
  }
} 
*/

// # SOLUTION 2 (Recursive Function)

function steps(N, row = 0, stair = "") {
  if (N === row) {
    return;
  }

  if (N === stair.length) {
    console.log(stair);
    return steps(N, row + 1);
  }

  if (stair.length <= row) {
    stair += "#";
  } else {
    stair += " ";
  }

  steps(N, row, stair);
}

steps(3);
