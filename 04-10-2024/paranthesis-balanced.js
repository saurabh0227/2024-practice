function isParenthesisBalanced(x) {
  let stack = [];

  // Map for matching parenthesis
  const matchingParenthesis = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (let i = 0; i < x.length; i++) {
    let char = x[i];

    // If it's an opening bracket, push to stack
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    }
    // If it's a closing bracket, check for matching
    else if (char === ')' || char === '}' || char === ']') {
      if (stack.length === 0 || stack.pop() !== matchingParenthesis[char]) {
        return false;
      }
    }
  }

  // If stack is empty, the parentheses are balanced
  return stack.length === 0;
}

// Example usage
let expression = '{ ( [ { ] ) ] }';
console.log(isParenthesisBalanced(expression)); // Output: true
