export function soma(a, b) {
  return a + b;
}

export function sumArrayElements(entrada) {
  const result = entrada.reduce((acc, curr) => acc + curr, 0);

  return result;
}

export function conversor(Celsius) {
  return (Celsius * 9) / 5 + 32;
}
