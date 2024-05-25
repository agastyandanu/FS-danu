function isBracketBalanced(inputData) {
  const openBracket = ['[', '(', '{'];
  const closeBracket = [']', ')', '}'];
  const match = {
    ']' : '[',
    ')' : '(',
    '}' : '{',
  };
  const array = [];
  for (let char of inputData) {
    if (openBracket.includes(char)) {
      array.push(char);
    } else if (closeBracket.includes(char)) {
      if (array.pop() !== match[char]) {
        return 'NO';
      }
    }
  }
  return array.length === 0 ? 'YES' : 'NO';
}

const input1 = '{[()]}';
const input2 = '{[(])}';
const input3 = '{(([])[])[]}';

console.log(`${input1} =`, isBracketBalanced(input1));
console.log(`${input2} =`, isBracketBalanced(input2));
console.log(`${input3} =`, isBracketBalanced(input3));
