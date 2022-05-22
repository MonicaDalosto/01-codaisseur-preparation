// 12: divideArray - Write a function with a single array of numbers argument. Return the result of dividing the number from left to right. So the first number gets divided by the second and the result of that gets divided by the third (and so on..).

// 1 answer: Result using For...of:

const myFirstArray = [1024, 2, 2, 2, 2, 4];
let divisionResult;
const arrayOfDivisionResults = [];

for (const value of myFirstArray) {
  if (divisionResult) {
    divisionResult = divisionResult / value;
  } else {
    divisionResult = value;
  }
  arrayOfDivisionResults.push(divisionResult);
  console.log('divisionResult: ', divisionResult);
}
console.log('Final divisionResult: ', divisionResult); // Final divisionResult:  16
console.log('arrayOfResults ', arrayOfDivisionResults); // arrayOfResults  [ 1024, 512, 256, 128, 64, 16 ]

// 2 answer: Result using .reduce with initial value, returning the final number and a new array with all the division results:

/*
Estrutura do método .reduce (eu não usei a parte [index[array]]):
array.reduce(
  (callbackFunction(acumulador, valorAtual, [index[array]]),[valorInicialDoAcumulador]
));
*/
const arrayReduceResult = [];

const reduceResult = myFirstArray.reduce((previousResult, currentValue) => {
  console.log('teste: ', previousResult, currentValue);
  let result;
  if (previousResult) {
    result = previousResult / currentValue;
    arrayReduceResult.push(result);
    return result;
  }
  result = currentValue;
  arrayReduceResult.push(result);
  return result;
}, null);

console.log('reduceResult: ', reduceResult); // reduceResult:  16
console.log('arrayReduceResult: ', arrayReduceResult); // arrayReduceResult: [ 1024, 512, 256, 128, 64, 16 ]

// 3 answer: Result using .reduce without initial value, returning just the final result:
const reduceResult2 = myFirstArray.reduce((previousResult, currentValue) => {
  console.log('teste: ', previousResult, currentValue);
  return previousResult / currentValue;
});

console.log('reduceResult2: ', reduceResult2); // reduceResult2:  16

// see the reduce method;
// https://www.w3schools.com/js/js_array_iteration.asp
