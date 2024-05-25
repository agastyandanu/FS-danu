function weightedStrings(inputData, queries) { 
  const weights = new Set(allSubstrings(inputData).map(substring => countWeight(substring)));
  return queries.map(query => weights.has(query) ? 'Yes' : 'No');
}

function countWeight(substring) {
  let weight = 0;
  let count = 0;
  let prev = '';
  for (let i = 0; i < substring.length; i++) {
    if (substring[i] === prev) {
      count++;
    } else {
      count = 1;
      prev = substring[i];
    }
    weight += (substring[i].charCodeAt(0) - 96) * count;
  }
  return weight;
}

const allSubstrings = (input) => {
  let substrings = [];
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length + 1; j++) {
      substrings.push(input.slice(i, j));
    }
  }
  return substrings;
};

const queries = [1, 3, 9, 8];
const input1 = 'abbcccd';
const input2 = 'aabckk';
const input3 = 'abccefff';

console.log(`"${input1}" =`, weightedStrings(input1, queries));
console.log(`"${input2}" =`, weightedStrings(input2, queries));
console.log(`"${input3}" =`, weightedStrings(input3, queries));
