// 15: getNames - Write a function with one [{name: string}](list of object) argument. Return an array with all the name properties.

const users = [
  // users é uma lista de Objetos
  {
    firstName: 'Monica',
    lastName: 'Dalosto',
    age: 35,
    origin: 'Brasil'
  },
  {
    firstName: 'Gagan',
    gender: 'female'
  },
  {
    firstName: 'Gonzalo',
    lastName: 'Dutto',
    origin: 'Argentina',
    zipCode: '1690gr'
  },
  {
    firstName: 'Thijmen',
    lastName: 'Kirch',
    origin: 'Netherlands',
    address: 'Amesfoort'
  }
];

// First Solution using For...Of, For...Of, and Includes:
const getPropertiesOfUsersUsingIncludes = myObjectList => {
  // myObjectList é o parâmetro da arrow function;
  const properties = []; // properties é um novo array(lista) que irá receber os nomes das keys dos meus objetos;
  for (const object of myObjectList) {
    // para cada objeto dentro da minha lista de objetos, faça:
    // console.log('object: ', object);
    for (const key of Object.keys(object)) {
      // para cada key das keys do meu objeto, faça:
      if (!properties.includes(key)) {
        // se properties não conter a key... (ou se a key não estiver contida em properties...)
        properties.push(key); // properties irá receber a key na última posição disponível (ou a key será incluída na próxima posição disponível do array properties);
      }
    }
  }
  console.log('properties: ', properties);
};

getPropertiesOfUsersUsingIncludes(users); // estou invocando a função acima e passando a lista de objetos users como argumento;

// Second Solution using For...Of, ..., and new Set:
const getPropertiesOfUsersUsingThreeDotsAndNewSet = myObjectList => {
  const properties = [];
  for (const object of myObjectList) {
    // console.log('value: ', value);
    properties.push(...Object.keys(object));
  }
  console.log('properties: ', properties);
  let uniqueProperties = [...new Set(properties)];
  console.log('uniqueProperties: ', uniqueProperties);
};

getPropertiesOfUsersUsingThreeDotsAndNewSet(users);
