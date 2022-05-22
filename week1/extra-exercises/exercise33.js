// 33: reverseSentence - Write a function that takes a string. Return the string with the seperate words in the reverse order.
const mySentence = 'We are Codaisseur';

const reverseString = myString => {
  const stringConvertedArray = myString.split(' ');
  console.log('stringConvertedArray: ', stringConvertedArray);
  const arrayReversed = stringConvertedArray.reverse();
  console.log('arrayReversed: ', arrayReversed);
  const stringReversed = arrayReversed.join(' ');
  console.log('stringReversed: ', stringReversed);
  return stringReversed;
};

const result = reverseString(mySentence);
console.log('String reversed: ', result);
