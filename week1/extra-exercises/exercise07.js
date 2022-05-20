// 7: maxStr - Write a function with two string arguments. Have it return the longest string.

const maxString = (string1, string2) => {
  return string1.length > string2.length ? string1 : string2;
};

const result = maxString('my biggest text1', 'my text');

console.log('Which is the biggest string: ', result);
