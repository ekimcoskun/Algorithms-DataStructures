// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(number) {
  if (number >= 0)
    return parseInt(number.toString().split("").reverse().join(""));
  const abs = parseInt(
    "-" + Math.abs(number.toString().split("").reverse().join(""))
  );
  return abs;
}

module.export = reverseInt;
