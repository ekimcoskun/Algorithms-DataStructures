function palindrome(str) {
  //FIRST SOLUTION
  /* return (
    str ===
    str.split("").reduce((prev, current) => {
      return current + prev;
    }, "")
  ); */
  //SECOND SOLUTION
  return str
    .split("")
    .every((value, index) => value === str[str.length - index - 1]);
}

module.exports = palindrome;
