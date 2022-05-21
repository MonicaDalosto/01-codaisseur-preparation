// 19: highestNumber - Write a function with one [number] argument. Return the highest number.

const myArrayOfNumbers = [57, 890, 76, 1645, 156, 976, 32, 1087];

const highestNumber = myArrayOfNumbers.reduce(
  // o Método .reduce vai iterar o myArrayOfNumbers e reduzir resultado para um valor único, definido na linha de retorno:
  (previousResult, currentValue) => {
    // previousResult: é o valor acumulado do teste, recebeu valor inicial de 0;
    // currentValue: é o valor da primeira posição do Array;
    console.log('teste: ', previousResult, currentValue);
    // se previousResult for maior que currentValue, retorne previousResult, se não retorne currentValue:
    return previousResult > currentValue ? previousResult : currentValue;
  },
  0
);

console.log('highestNumber: ', highestNumber); // highestNumber:  1645

// OBS.: O index é o valor inicial de previousResult. Se eu não informar valor de index, o valor inicial de previousResult será o valor de myArrayOfNumbers[0] e o valor de currentValue será o valor de myArrayOfNumbers[1].
