import reverseString from "../code/reverseString";

test("Reverses a word e.g. 1", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("Reverses a word e.g. 2", () => {
  expect(reverseString("world")).toBe("dlrow");
});

test("Reverses a sentence e.g. 1", () => {
  expect(reverseString("hello world!")).toBe("!dlrow olleh");
});
