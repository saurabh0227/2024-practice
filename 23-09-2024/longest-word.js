const longestWord = (str) => {
  const strArr = str.split(' ');

  let longestLength = 0;
  let longestWord = '';
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length > longestLength) {
      longestWord = strArr[i];
    }
  }
  return longestWord;
};
console.log('longestWord:', longestWord('I love coding in javascript'));
