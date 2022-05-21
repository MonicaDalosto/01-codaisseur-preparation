// 13: splitCombine - Write a function with two string arguments. Split both strings in halves and recombine the halves. Return the longest results of the two combinations (or the first one if both have the same length).

const string1 = 'Minha primeira semana de curso foi muito boa';
const string2 = 'Estou ansiosa para aprender react';

const splitCombine = (string1, string2) => {
  // console.log(string1.length / 2, string2.length / 2);

  const firstCombination = string1
    .slice(0, string1.length / 2)
    .concat(string2.slice(string2.length / 2));

  const secondCombination = string1
    .slice(string1.length / 2)
    .concat(string2.slice(0, string2.length / 2));

  // console.log(firstCombination.length, secondCombination.length);

  if (firstCombination.length < secondCombination.length) {
    return secondCombination;
  }

  return firstCombination;
};

const resultSplitCombine = splitCombine(string1, string2);

console.log(resultSplitCombine);

// let startString1 = string1.slice(0, string1.length / 2);
// let endString1 = string1.slice(string1.length / 2);
// let startString2 = string2.slice(0, string2.length / 2);
// let endString2 = string2.slice(string2.length / 2);
