// 4: batman - Write a function without any arguments. Have it return the string 'na' repeated 10 times followed by the string 'batman!'. Use the repeat function you used before to accomplish this.
const batman = () => {
  for (let index = 0; index < 10; index++) {
    console.log('na');
    console.log('batman');
  }
};

batman();
