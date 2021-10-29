const ceasar = require("../code/ceaserCipher");

test("A to Z with key 1", () => {
  expect(ceasar("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 1)).toBe(
    "BCDEFGHIJKLMNOPQRSTUVWXYZA"
  );
});

test("Same case test with key 4", () => {
  expect(ceasar("AbCdEfGhIJKLmNOpQRStUVwXYz", 4)).toBe(
    "EfGhIJKLmNOpQRStUVwXYzAbCd"
  );
});
