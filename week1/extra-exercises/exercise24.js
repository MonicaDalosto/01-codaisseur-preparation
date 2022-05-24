// 24: pyramid - Write a function with one number argument. Have it log a pyramid of that size.

//  Copiei essa função da Internet, não resolvi a questão:
function pyramid(number) {
  for (let index = 1; index <= number; index++) {
    let string = ' '.repeat(number - index);
    let string2 = '*'.repeat(index * 2 - 1);
    console.log(string + string2 + string);
  }
}

pyramid(5);
