// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  if (stringA !== stringB) {
    const charMapA = buildCharMap(stringA);
    const charMapB = buildCharMap(stringB);

    if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
      return false;
    }

    for (let char in charMapA) {
      if (charMapA[char] !== charMapB[char]) {
        return false;
      }
    }
    return true;
  }
}

function buildCharMap(string) {
  const charMap = {};
  const splittedString = string.replace(/[^\w]/g, "").toLowerCase().split("");
  splittedString.forEach((item) => {
    if (!charMap[item]) {
      charMap[item] = 1;
    } else {
      charMap[item]++;
    }
  });
  return charMap;
}

/* 
  SOLUTION 2
function anagrams(stringA, stringB) {
  const convertedStringA = stringA
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
  const convertedStringB = stringB
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");

  return convertedStringA === convertedStringB;
} 
*/

module.exports = anagrams;
