const express = require('express');
const characters = require('./characters.json');
const houses = [
  'Stark',
  'Arryn',
  'Baratheon',
  'Greyjoy',
  'Lannister',
  'Martell',
  'TestHouse'
];
const app = express();

// Welcome Message:
app.get('/', (request, response) => {
  response.send('Welcome from Express');
});

// GET all characters
app.get('/characters', (request, response) => {
  if (!characters || characters.length === 0) {
    response.status(500).send({ error: 'Characters were not found' });
    return;
  }
  response.status(200).send(characters);
});

// GET find character by id
app.get('/characters/id/:id', (request, response) => {
  let { id } = request.params;
  id = parseInt(id);
  console.log(typeof id);

  // TASK: SOLVE BUG: no user is found!
  const character = characters.find(character => character.id === id);

  // BONUS TASK: send an error if no user was found
  if (!character) {
    return response
      .status(400)
      .send({ message: `Character ${id} was not found` });
  }

  response.send(character);
});

// GET filter character by house

/* PARTIAL CODE
app.get('/characters/house/:house', (request, response) => {
  const { house } = request.params;
  console.log('Request received');

  // TASK: filter users by house
  // TASK: users should be found even if we type the house name with different cases
  // so "Stark" or "STArk" or "STARK" or "strak" should be the same :)
  const getCharactersByHouseName = characters.filter(character => {
    return character.house.toUpperCase() === house.toUpperCase();
  });

  // BONUS TASK: send an error if there are no users
  if (getCharactersByHouseName.length === 0) {
    return response
      .status(400)
      .send({ Message: `The Character from the house ${house} was not found` });
  }

  // BONUS TASK: 💪 check if house given is in the list of houses
  // If it is not in the list, send an error saying: "incorrect house name"
  // The house list is on top

  response.send(getCharactersByHouseName);
});
*/

app.get('/characters/house/:house', (request, response) => {
  let { house } = request.params;
  house = house.toUpperCase();
  console.log('Request received');

  // TASK: filter users by house
  // TASK: users should be found even if we type the house name with different cases
  // so "Stark" or "STArk" or "STARK" or "strak" should be the same :)
  // BONUS TASK: 💪 check if house given is in the list of houses
  // If it is not in the list, send an error saying: "incorrect house name"
  // The house list is on top
  const houseName = houses.find(houseName => {
    return houseName.toUpperCase() === house;
  });

  if (!houseName) {
    return response.status(400).send({ Message: 'Incorrect house name' });
  } else {
    const charactersByHouseName = characters.filter(character => {
      return character.house.toUpperCase() === house;
    });

    // BONUS TASK: send an error if there are no users
    if (charactersByHouseName.length === 0) {
      return response.status(400).send({
        Message: `No one Character from the house ${house} was found`
      });
    }
    response.send(charactersByHouseName);
  }

  console.log('End of request...');
});

// GET fights between houses
app.get('/characters/fights/', (request, response) => {
  // TASK: return a list of objects that contain:
  // { house , fighting }

  const allFightsBetweenHouses = characters.map(character => {
    /* This code return a list[] of arrays (an array[] of an array[])
    const house = character.house;
    const fighting = character.fighting;
    return [house, fighting];
    */
    // This code return a list[] of object{} (an array[] of objects{})
    return { house: character.house, fighting: character.fighting };
  });

  response.send(allFightsBetweenHouses);
});

// BONUS!!!
// GET characters age in ... years
// this should check if the character is alive
// if it is alive, add the years to its age
// send back characters with the updated age
app.get('/future/:years', (request, response) => {
  let { years } = request.params;
  years = parseInt(years);
  console.log(typeof years);

  const allAlivedCharacters = characters.filter(character => {
    return character.isAlive;
  });
  console.log(allAlivedCharacters);

  const ageOfCharactersInTheFuture = allAlivedCharacters.map(character => {
    // return character.age + years; // return just the list of the age in the future;

    const ageInYears = character.age + years;
    // return a new array, with the objects below:
    return {
      id: character.id,
      isAlive: character.isAlive,
      age: character.age,
      house: character.house,
      name: character.name,
      gender: character.gender,
      familyConnection: character.familyConnection,
      fighting: character.fighting,
      ageInYears: ageInYears
    };
  });

  response.send(ageOfCharactersInTheFuture);
});

PORT = 3000;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
