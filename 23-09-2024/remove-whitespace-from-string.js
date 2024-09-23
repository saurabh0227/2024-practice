const removeWhiteSpace = (str) => {
  let resultedStr = '';

  for (let char of str) {
    if (char !== ' ') resultedStr += char;
  }

  return resultedStr;
};
console.log('removeWhiteSpace:', removeWhiteSpace(' Interview,  Happy'));
