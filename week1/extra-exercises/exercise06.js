// 6: maxDivide - Write a function with two number arguments. Have it return the smallest number of the two divided by the largest number.

const maxDivide = (number1, number2) => {
  return number1 < number2 ? number1 / number2 : number2 / number1;
};

const result = maxDivide(2, 5);

console.log(result);
