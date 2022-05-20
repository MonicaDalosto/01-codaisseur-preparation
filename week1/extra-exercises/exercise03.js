// 3: repeat - Write a function with a string argument and a number argument that repeates the string from the first argument but repeated the amount of times equal to the second argument.

const repeat = (text, number1) => {
  for (let index = 0; index < number1; index++) {
    console.log(`Index ${index} ${text};`);
  }
};

const result = repeat('Some text written', 5);
