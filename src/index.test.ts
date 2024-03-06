import { soma } from ".";
describe("index", () => {
  it("should sum two values", () => {
    expect(soma(2, 2)).toEqual(4);
  });
});


import { sumArrayElements } from ".";
describe("index", () => {
    it('Calcule a soma de todos os elementos em um array.', () => {
        //given
        const entrada = [2, 3, 4, 5, 6];

        //when
        const result = sumArrayElements(entrada);

        //then
        expect(result).toBe(20);
    });
});

import { sumArrayElements2 } from ".";
describe("index", () => {
    it('Calcule a soma de todos os elementos em um array.', () => {
        //given
        const entrada = [9, 8, 7, 6];

        //when
        const result = sumArrayElements2(entrada);

        //then
        expect(result).toBe(30);
    });
});