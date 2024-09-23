const reverseStringOrder = (str) => {
  let lines = str.split('\n');
  let result = lines.map((line) => {
    return line.split(' ').reverse().join(' ');
  });

  console.log(result);
};

let input = `life is beautiful
enjoy it
live upto it`;
reverseStringOrder(input);
