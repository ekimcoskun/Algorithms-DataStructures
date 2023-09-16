function reverseInt(number) {
  if (number >= 0)
    return parseInt(number.toString().split("").reverse().join(""));
  const abs = parseInt(
    "-" + Math.abs(number.toString().split("").reverse().join(""))
  );
  return abs;
}

module.export = reverseInt;
