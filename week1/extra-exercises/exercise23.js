// 23: palindrome - Write a function with one string argument. Return true or false wether this string is a palindrome.
const anyWord = '123454321';

const checkThePalindrome = myString => {
  let myNewString;
  if (typeof myString === 'number') {
    myNewString = myString.toString();
    console.log(typeof myNewString);
  }
  myNewString = myString;
  const stringConvertedArray = myNewString.split('');
  const arrayReversed = stringConvertedArray.reverse();
  const stringReversed = arrayReversed.join('');
  // console.log(stringReversed);
  return myNewString === stringReversed;
};

const result = checkThePalindrome(anyWord);
console.log('IS this String a palindrome? ', result);
