function highestPalindrome(inputData, k, i = 0, j = inputData.length - 1) {
  if (i >= j) {
    return inputData;
  }

  if (inputData[i] !== inputData[j]) {
    const newStr1 = replaceStr(inputData, i, (inputData.length - 1 - i));
    const palindrome1 = highestPalindrome(newStr1, k - 1, i + 1, j);

    const newStr2 = replaceStr(inputData, (inputData.length - 1 - i), i);
    const palindrome2 = highestPalindrome(newStr2, k - 1, i + 1, j);

    if (palindrome1 !== -1 && (palindrome2 === -1 || parseInt(palindrome1) >= parseInt(palindrome2))) {
      return palindrome1;
    } else if (palindrome2 !== -1 && (palindrome1 === -1 || parseInt(palindrome2) >= parseInt(palindrome1))) {
      return palindrome2;
    } else {
      return -1;
    }
  } else {
    return highestPalindrome(inputData, k, i + 1, j - 1);
  }
}

function replaceStr(inputData, i, j) {
  const array = inputData.split('');
  array[j] = array[i];
  return array.join('');
}

const k = 1;
const input1 = '3943';
const input2 = '543745';
const input3 = '123421';

console.log(`Highest Palindrome ${input1} =`, highestPalindrome(input1, k));
console.log(`Highest Palindrome ${input2} =`, highestPalindrome(input2, k));
console.log(`Highest Palindrome ${input3} =`, highestPalindrome(input3, k));
