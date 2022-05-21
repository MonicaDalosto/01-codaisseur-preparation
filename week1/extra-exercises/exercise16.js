// 16: combineName - Write a function with one [{firstname: string, lastname: string}](list of object) argument. Return an array with all the full names (both the first and the last name as a single string with a space in between them).
const listOfUsers = [
  {
    firstName: 'Monica',
    lastName: 'Dalosto',
    age: 35,
    gender: 'female',
    origin: 'Brasil',
    address: 'Amsterdam',
    zipCode: '1062ks'
  },
  {
    firstName: 'Gagan',
    lastName: 'Katodia',
    age: 28,
    gender: 'female',
    origin: 'India',
    address: 'Utrecht',
    zipCode: '1076ko'
  },
  {
    firstName: 'Gonzalo',
    lastName: 'Dutto',
    age: 30,
    gender: 'male',
    origin: 'Argentina',
    address: 'Rotterdam',
    zipCode: '1690gr'
  },
  {
    firstName: 'Thijmen',
    lastName: 'Kirch',
    age: 23,
    gender: 'male',
    origin: 'Netherlands',
    address: 'Amesfoort',
    zipCode: '1234jh'
  }
];

// 1 solution: using For... In:

/*

const getFullNames = myArray => {
  const fullNameArray = [];
  for (const key in myArray) {
    const element = myArray[key].firstName.concat(' ', myArray[key].lastName);
    // console.log('element: ', element);
    fullNameArray.push(element);
  }
  console.log('First Solution: ', fullNameArray);
  return fullNameArray;
};

getFullNames(listOfUsers);

// 2 Solution: usinf For..Of:
const getFullNames2 = myArray => {
  const fullNames = [];
  for (const value of myArray) {
    // console.log('values: ', value);
    const { firstName, lastName } = value;
    let fullName = `${firstName} ${lastName}`;
    fullNames.push(fullName);
  }
  console.log('Second Solution: ', fullNames);
  return fullNames;
};

getFullNames2(listOfUsers);

*/

// 3 Solution: using .map() and .filter():
const getFullNames3 = listOfUsers
  .map(user => {
    return user.firstName + ' ' + user.lastName;
  })
  .filter((user, index, myArray) => {
    console.log('user: ', user, 'index: ', index);
    return myArray.indexOf(user) == index;
  });

console.log('getFullnames: ', getFullNames3);
