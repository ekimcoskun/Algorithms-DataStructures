const reverse = require(".");

test("Reverse function", () => {
  expect(reverse).toBeDefined();
});

test("Reverse reverses", () => {
  expect(reverse("hello")).toEqual("olleh");
});

test("Reverse reverses", () => {
  expect(reverse("  hello")).toEqual("olleh  ");
});
