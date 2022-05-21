// 20: average - Write a function with one [number] argument. Return the average.

const myArrayOfNumbers = [57, 890, 76, 1645, 156, 976, 32, 1087];

const getAverageValueOfAnArray = myArray => {
  let totalValue = 0;
  for (const value of myArray) {
    totalValue += value;
    // console.log(totalValue);
  }
  // console.log(totalValue / myArray.length);
  return totalValue / myArray.length;
};

const result = getAverageValueOfAnArray(myArrayOfNumbers);
console.log('The average value of myArray is: ', result);
