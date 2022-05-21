// 21: mode - Write a function with one [number] argument. Return the mode (most frequent value).
// const myArrayOfNumbers = [30, 45, 65, 45, 76, 27, 45, 40, 45, 35, 45, 33];
const myArrayOfNumbers = [30, 45, 65, 45];

// First Solution: using For...of:
const modeOfMyArray = myArray => {
  const mode = {}; // declarei um objeto mode;
  let maxValue = 0, // maxValue vai receber o valor de cada posição do Array e counter vai contar as aparições de cada valor;
    counter = 0;

  for (const positionValue of myArray) {
    if (!mode[positionValue]) {
      // se o objeto mode não tiver a key item...
      mode[positionValue] = 1; // mode recebe a property [item] com valor 1;
      console.log('Primeira aparição do valor', positionValue);
    } else {
      // se a property já existir...
      mode[positionValue]++; // soma 1, conta mais 1
      console.log(
        positionValue,
        ' valor repetido, quantas vezes ele já apareceu?  ',
        mode[positionValue]
      );
    }
    if (counter < mode[positionValue]) {
      // se count (que inicia com zero) for menor que o valor de mode[item]...
      maxValue = positionValue;
      console.log('O valor mais frequente mudou para: ', maxValue);
      counter = mode[positionValue];
      console.log('A quantidade de vezes que ele apareceu foi: ', counter);
    }
  }
  return maxValue;
};

const result = modeOfMyArray(myArrayOfNumbers);
console.log('The most frequent value is: ', result);

// Second solution: using for:
/*
const modeOfMyArray = myArray => {
  const mode = {}; // declarei um objeto mode;
  let maxValue = 0, // maxValue vai receber o valor de cada posição do Array e counter vai contar as aparições de cada valor;
    counter = 0;

  for (let index = 0; index < myArray.length; index++) {
    // Iterar sobre o array
    const itemValue = myArray[index]; // item recebe o valor da posição do array;
    console.log('itemValue: ', itemValue);

    if (!mode[itemValue]) {
      // se o objeto mode não tiver a key item...
      mode[itemValue] = 1; // mode recebe a property [item] com valor 1;
      console.log('Qtde do Novo item: ', mode[itemValue]);
    } else {
      // se a property já existir...
      mode[itemValue]++; // soma 1, conta mais 1
      console.log('Qtde do item existente: ', mode[itemValue]);
    }

    if (counter < mode[itemValue]) {
      // se count (que inicia com zero) for menor que o valor de mode[item]...
      maxValue = itemValue;
      console.log('valor de maxValue: ', maxValue);
      counter = mode[itemValue];
      console.log('valor de counter: ', counter);
    }
  }

  return maxValue;
};

const result = modeOfMyArray(myArrayOfNumbers);
console.log('The most frequent value is: ', result);
*/
