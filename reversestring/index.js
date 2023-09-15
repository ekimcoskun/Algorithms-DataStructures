function reverse(str) {
  // FIRST SOLUTION
  //return str.split("").reverse().join("");
  // SECOND SOLUTION
  return str.split("").reduce((prev, current) => {
    return current + prev;
  }, "");
}
module.exports = reverse;
