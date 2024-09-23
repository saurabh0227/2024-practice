const numberOfVowels = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) count++;
  }

  return count;
};
console.log('numberOfVowels:', numberOfVowels('listen'));
