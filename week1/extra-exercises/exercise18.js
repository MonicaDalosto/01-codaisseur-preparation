// 18: countCountries - Write a function with one [{country: string}](list of object) argument. Return an object with all the unique values as keys and the amount of occurences as value.

const countriesObject = [
  { id: 01, country: 'Argentina' },
  { id: 02, country: 'Brasil' },
  { id: 03, country: 'Netherlands' },
  { id: 04, country: 'India' },
  { id: 05, country: 'Spain' },
  { id: 06, country: 'Portugal' },
  { id: 07, country: 'Argentina' },
  { id: 08, country: 'Brasil' },
  { id: 09, country: 'Netherlands' },
  { id: 10, country: 'France' },
  { id: 11, country: 'Italy' }
];

const countCountries = myObjectList => {
  // myObjectList é o parâmetro da arrow function;
  const countriesTotal = {}; // properties é um novo array(lista) que irá receber os nomes das keys dos meus objetos;
  for (const object of myObjectList) {
    // para cada objeto dentro da minha lista de objetos, faça:
    // console.log('object: ', object);
    if (!countriesTotal[object.country]) {
      // se o objeto countriesTotal não tiver uma key com o valor de object.country...
      countriesTotal[object.country] = 1; // countriesTotal vai receber o valor de object.country como key com valor 1.
    } else {
      // se não... se ele tiver a key...
      countriesTotal[object.country] += 1; // a key de countriesTotal recebe a adição de 1;
    }
  }
  console.log('countriesTotal: ', countriesTotal);
};

countCountries(countriesObject);
