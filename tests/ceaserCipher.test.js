import ceasar from "../code/ceasarCipher";

test("A to Z with key 1", () => {
  expect(ceasar("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 1)).toBe(
    "BCDEFGHIJKLMNOPQRSTUVWXYZA"
  );
});

test("Same case test with key 4", () => {
  expect(ceasar("AbCdEfGhIJKLmNOpQRStUVwXYz", 4)).toBe(
    "EfGhIjKlMNOPqRStUVWxYZaBCd"
  );
});

test("Punctuation test with key 18", () => {
  expect(ceasar("abcd,efg:hijk;lmno.pqrstuvwxyz?", 18)).toBe(
    "stuv,wxy:zabc;defg.hijklmnopqr?"
  );
});
