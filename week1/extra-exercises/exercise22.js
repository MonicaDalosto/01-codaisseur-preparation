// 22: reverse - Write a function with one string argument. Return the reversed string.
const anyWord = 'Jurubeba';

const reverseString = myString => {
  const stringConvertedArray = myString.split('');
  // console.log('stringConvertedArray: ', stringConvertedArray);
  const arrayReversed = stringConvertedArray.reverse();
  // console.log('arrayReversed: ', arrayReversed);
  const stringReversed = arrayReversed.join('');
  // console.log('stringReversed: ', stringReversed);
  return stringReversed;
};

const result = reverseString(anyWord);
console.log('String reversed: ', result);
