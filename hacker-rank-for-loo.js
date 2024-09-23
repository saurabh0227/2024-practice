const NUMBER_TO_ALPHABET = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine'
];

const output = (a, b) => {
  for (a; a <= b; a++) {
    if (a < 10) {
      console.log(NUMBER_TO_ALPHABET[a]);
    } else if (a % 2 === 0) {
      console.log('even');
    } else {
      console.log('odd');
    }
  }
};

output(7, 13);
