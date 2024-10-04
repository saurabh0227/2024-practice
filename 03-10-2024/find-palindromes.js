const findPalindromes = (str) => {
  let count = 0;

  const checkPalindrome = (left, right) => {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      count++;
      left--;
      right++;
    }
  };

  for (let i = 0; i < str.length; i++) {
    checkPalindrome(i, i);
    checkPalindrome(i, i + 1);
  }

  return count;
};

console.log(findPalindromes('aabbbaa'));
