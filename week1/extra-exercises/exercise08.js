// 8: even - Write a function with a single number argument. Return a boolean that indicated wether this number is even.

const even = number1 => {
  return number1 % 2 === 0 ? true : false;
};

const numberChecked = 8;
const result = even(numberChecked);

console.log(`Is the number ${numberChecked} even? ${result}.`);
