// 9: evenBelow - Write a function with a single number argument. Return an array of all the numbers lower than this argument that are even.

const evenBellow = number1 => {
  let myEvenNumbers = [];
  for (let index = 0; index < number1; index++) {
    if (index % 2 === 0 && index !== 0) {
      let evenNumber = index;
      myEvenNumbers.push(evenNumber);
    }
  }
  return myEvenNumbers;
};

const result = evenBellow(8);

console.log(result);
