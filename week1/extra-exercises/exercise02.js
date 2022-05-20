// 2: double3 - Write a function with two number arguments that returns double the largest argument.

const double3 = (number1, number2) => {
  return number1 > number2 ? number1 * 2 : number2 * 2;
};

const result3 = double3(78, 45);

console.log(result3);
