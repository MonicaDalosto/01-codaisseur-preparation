const characters = require('./characters.json');

// console.log(characters);

/* Character example:
"id": 56,
"name": "Luna Lovegood",
"blood": "Pure-blood",
"species": "Human",
"patronus": "Hare",
"born": "13 February, 1981",
"quote": "Things we lose have a way of coming back to us in the end, if not always in the way we expect",
"imgUrl": "https://static.wikia.nocookie.net/harry-potter-pedia/images/8/87/Luna_profile.png"
*/

// REQUIRED FEATURES
// (A) Select the 4th character of your characters array and console.log it.
const fourthCharacter = characters[3];

console.log('(A) 4th character: ', fourthCharacter);

// (B) use an array method to locate the character object with id 78 and console.log it.

const characterId = 78;

const searchId = characters.find(element => {
  return characterId === element.id;
});

if (searchId === undefined) {
  console.log(`ID: ${characterId} not found`);
}

console.log('(B) Character with ID: ', characterId, searchId);

// (C) Console.log an array with only the characters that have blood: "Half-blood".

const blood = 'Half-blood';

const bloodCharacter = characters.filter(element => {
  return element.blood === blood;
});

console.log(`Test: Output: ${bloodCharacter}`); // it's not working;
console.log('(C) Output: ', bloodCharacter);
console.log(`Total number of Characters: ${characters.length}`);
console.log(`Number of Characters with ${blood}: ${bloodCharacter.length}`);

// (D) Console.log an array that contains only the quotes of each character (so strings, not object)

const quotesCharacter = characters.map(element => {
  return element.quote;
});

console.log('(D) Quotes: ', quotesCharacter);

// (E) Console.log an array with all characters that are not "Human".
const species = 'Human';

const notHumanCharacters = characters.filter(element => {
  return element.species !== species;
});

console.log('(E) Characters that are not Humans', notHumanCharacters);
console.log(`Total number of Characters: ${characters.length}`);
console.log(
  `Number of Characters that are not Humans: ${notHumanCharacters.length}`
);

// (F) Console.log an array of all characters whose name includes "agr"
