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
