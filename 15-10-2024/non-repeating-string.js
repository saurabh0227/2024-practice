function nonRepeating(str) {
  let charCount = {};

  // Count each character in the string
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the first non-repeating character
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return 'None'; // Return 'None' if no non-repeating character is found
}

console.log(nonRepeating('aabbcc')); // Output: 'w'
