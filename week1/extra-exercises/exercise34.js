// 34: numberPalindrome - Write a function that takes a number. Return a boolean if the number stays the same when reverted.
const anyNumber = 123454321;

const checkThePalindrome = myValue => {
  let myString = myValue.toString();
  const stringConvertedArray = myString.split('');
  const arrayReversed = stringConvertedArray.reverse();
  const stringReversed = arrayReversed.join('');
  const numberReversed = parseInt(stringReversed);
  // console.log(numberReversed);
  return myValue === numberReversed;
};

const result = checkThePalindrome(anyNumber);
console.log('IS this Number a palindrome? ', result);
