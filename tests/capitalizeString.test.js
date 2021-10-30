import capitalize from "../code/capitalizeString";

test("Capitilizes a word e.g. 1", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("Capitilizes a word e.g. 2", () => {
  expect(capitalize("world")).toBe("World");
});

test("Capitilizes a sentence", () => {
  expect(capitalize("hello world")).toBe("Hello world");
});
