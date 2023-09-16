const maxCharacter = require("./index.js");

test("maxCharacter function exists", () => {
  expect(typeof maxCharacter).toEqual("function");
});

test("Finds the most frequently used char", () => {
  expect(maxCharacter("a")).toEqual("a");
  expect(maxCharacter("abcdefghijklmnaaaaa")).toEqual("a");
});

test("Works with numbers in the string", () => {
  expect(maxCharacter("ab1c1d1e1f1g1")).toEqual("1");
});
