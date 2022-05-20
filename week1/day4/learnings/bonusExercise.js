const concepts = {
  database: 'the local that storages data',
  api: 'a server that sends only data',
  client: 'who is requesting some data'
};

// Get just the Keys from the object:
const outputKeys = Object.keys(concepts);
// Get just the Values from the object:
const outputValues = Object.values(concepts);
// Get the Keys and the Values from the object, as an Array of entries:
const outputEntries = Object.entries(concepts);

// console.log('Keys: ', outputKeys);
// console.log('Values: ', outputValues);
// console.log('Entries: ', outputEntries);

// Entries are useful when you want to use both a key and a value. When mapping over the container array, you can destructure the key and value from the entry:
const explanations = outputEntries.map(entry => {
  const [keyword, explanation] = entry;
  // const [keyword, explanation, something] = entry;

  return `${keyword} is ${explanation}`;
  // return `${keyword} is ${explanation} and ${something}`;
});

// console.log(explanations);

// Turn an array into a string using join. By default, join will use a comma, if you want another signal, you can pass as an argument:
const formatted = explanations.join(', ');
console.log(formatted);
