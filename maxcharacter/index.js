// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxCharacter(str) {
  const splittedStr = str.split("");
  const charObj = {};
  let mostChar = "";
  splittedStr.forEach((value, index) => {
    if (charObj[value]) {
      charObj[value]++;
      if ((charObj[mostChar] || 0) < charObj[value]) {
        mostChar = value;
      }
    } else {
      charObj[value] = 1;
      if ((charObj[mostChar] || 0) < charObj[value]) {
        mostChar = value;
      }
    }
  });
  return mostChar;
}

module.export = maxCharacter;
