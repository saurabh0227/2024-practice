//1-(1/3)+(1/5)-(1/7)+(1/9)

function pattern(input) {
  let finalPattern = '1';

  if (input === 1) return finalPattern;

  let denominator = 3;

  for (let i = 1; i < input; i++) {
    if (i % 2 === 0) {
      finalPattern += `+(1 / ${denominator})`;
    } else {
      finalPattern += `-(1 / ${denominator})`;
    }

    denominator += 2;
  }

  return finalPattern;
}

console.log(pattern(10));
