import { soma } from ".";
describe("index", () => {
  it("should sum two values", () => {
    expect(soma(2, 2)).toEqual(4);
  });
});

import { sumArrayElements } from ".";
describe("index", () => {
  it("Calcule a soma de todos os elementos em um array.", () => {
    //given
    const entrada = [2, 3, 4, 5, 6];

    //when
    const result = sumArrayElements(entrada);

    //then
    expect(result).toBe(20);
  });
  describe("index", () => {
    it("Calcule a soma de todos os elementos em um array.", () => {
      //given
      const entrada = [9, 8, 7, 6];

      //when
      const result = sumArrayElements(entrada);

      //then
      expect(result).toBe(30);
    });
  });
});

import { conversor } from ".";
describe("index", () => {
  it("Escreva um programa que converta uma temperatura de Celsius para Fahrenheit e vice-versa.", () => {
    //given
    const Celsius = 32;

    //when
    const result = conversor(Celsius);

    //then
    expect(result).toBe(89.6);
  });
  describe("index", () => {
    it("Escreva um programa que converta uma temperatura de Celsius para Fahrenheit e vice-versa.", () => {
      //given
      const Celsius = 100;

      //when
      const result = conversor(Celsius);

      //then
      expect(result).toBe(212);
    });
  });
});
