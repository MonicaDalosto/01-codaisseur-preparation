// 17: uniqueCountries - Write a function with one [{country: string}](list of object) argument. Return an array with every unique country value in the input array.

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

const getUniqueCountries = myObject => {
  const myCountries = [];
  for (const value of myObject) {
    // console.log('value: ', value);
    if (!myCountries.includes(value.country)) {
      myCountries.push(value.country);
    }
  }
  return myCountries;
};

getUniqueCountries(countriesObject);
