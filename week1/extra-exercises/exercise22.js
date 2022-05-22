// 22: reverse - Write a function with one string argument. Return the reversed string.
const anyWord = 'jurubeba';

// First solution:
const reverseString = myString => {
  const stringConvertedArray = myString.split('');
  // console.log('stringConvertedArray: ', stringConvertedArray);
  const arrayReversed = stringConvertedArray.reverse();
  // console.log('arrayReversed: ', arrayReversed);
  const stringReversed = arrayReversed.join('');
  // console.log('stringReversed: ', stringReversed);
  return stringReversed;
};

const result = reverseString(mySentence);
console.log('String reversed: ', result);

// Second Solution - using For:
const reverseString2 = myString => {
  let stringReversed;
  for (let index = myString.length; index >= 0; index--) {
    if (stringReversed === undefined) {
      stringReversed = myString[index];
    } else {
      stringReversed = stringReversed + myString[index];
      console.log(stringReversed);
    }
  }
  return stringReversed;
};

const result2 = reverseString2(mySentence);
console.log('String reversed: ', result2);
