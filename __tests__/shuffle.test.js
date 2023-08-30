const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  test("shuffle returns an array", () => {
    const inputArray = [1, 2, 3, 4, 5, 6];
    const resultArray = shuffle(inputArray);
    expect(Array.isArray(resultArray)).toBe(true);
  });
  test("check if items are same as the original array", () => {
    expect(shuffle(input)).toEqual(expect.arrayContaining(input));
  });
});
