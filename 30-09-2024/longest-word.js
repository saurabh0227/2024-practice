const longestWord = (str) => {
  const strArr = str.split(' ');

  let longestWord = strArr[0];

  for (let i = 1; i < strArr.length; i++) {
    if (strArr[i].length >= longestWord.length) {
      longestWord = strArr[i];
    }
  }
  return longestWord;
};

console.log(longestWord('I am a software engineer'));
