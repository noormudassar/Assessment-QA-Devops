const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  test("shuffle returns an array", () => {
    expect(shuffle().toBeInstanceOf(Array));
  });
});
