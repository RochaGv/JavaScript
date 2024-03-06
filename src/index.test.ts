import { soma } from ".";
describe("index", () => {
  it("should sum two values", () => {
    expect(soma(2, 2)).toEqual(4);
  });
});
