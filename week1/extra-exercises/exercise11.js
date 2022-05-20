// 11: multiplyArray - Write a function with a single array of numbers argument. Return the result of multiplying all the numbers.

myFirstArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const multiplyArray = myArray => {
  const evenNumbers = myFirstArray.map(element => {
    return element * 2;
  });
  return evenNumbers;
};

const myNewArray = multiplyArray(myFirstArray);

console.log('myNewArray: ', myNewArray);
