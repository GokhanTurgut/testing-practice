import calculator from "../code/calculator";

test("Add", () => {
  expect(calculator.add(10, 5)).toBe(15);
});

test("Subtract", () => {
  expect(calculator.subtract(10, 5)).toBe(5);
});

test("Divide", () => {
  expect(calculator.divide(9, 3)).toBe(3);
});

test("Multiply", () => {
  expect(calculator.multiply(9, 3)).toBe(27);
});
