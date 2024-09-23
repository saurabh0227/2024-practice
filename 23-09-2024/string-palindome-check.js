const stringPalindromeCheck = (str) => {
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
};
console.log('stringPalindromeCheck:', stringPalindromeCheck('racecar'));
