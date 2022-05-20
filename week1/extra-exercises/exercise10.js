// 10: evenIn - Write a function with a single array of numbers argument. Return an array of all the numbers in this array that are even.

myFirstArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const getTheEvenNumbers = myArray => {
  const evenNumbers = myFirstArray.filter(element => {
    if (element % 2 === 0) {
      return element;
    }
  });

  return evenNumbers;
};

const myNewArray = getTheEvenNumbers(myFirstArray);

console.log('myNewArray: ', myNewArray);
