const express = require('express');
const characters = require('./characters.json');
const app = express();

// console.log(characters);

// REQUIRED FEATURES:
// 1. (A) Create a GET - / route that responds with the string Hello from Express server

app.get('/hello', (request, response) => {
  console.log('Exercise 1, Hello!');
  response.send('Hello!');
});

// 2. (B) Create a GET - /message route that responds with an html message of your choice. (don't forget to define the html message constant)

const message = `<html>
  <head>
    <title>Home</title>
  </head>
  <body>
    <h1>Welcome to Codaisseur assessment</h1>
  </body>
</html>`;

app.get('/mymessage', (request, response) => {
  console.log('Exercise 2: Message!');
  response.send(message);
});

// 3. (C) Create a GET - /characters route that responds with the whole list of characters.

app.get('/characters', (request, response) => {
  console.log('Exercise 3: The Whole characters');
  response.send(characters);
});

// 4. (D) Create a GET - /characters/:id route that responds with the character with matching id

app.get('/characters/id/:id', (request, response) => {
  let { id } = request.params;
  id = parseInt(id);
  console.log(typeof id);

  const character = characters.find(character => {
    return character.id === id;
  });

  if (!character) {
    return response
      .status(400)
      .send({ message: `Character ${id} was not found` });
  }

  response.send(character);
});

// 5. (E) Create a GET - /characters/bloodtype/:blood route that responds with the characters matching the blood type in the path

app.get('/characters/bloodtype/:blood', (request, response) => {
  const { blood } = request.params;
  console.log(blood);

  const charactersByBlood = characters.filter(character => {
    return character.blood === blood;
  });

  if (charactersByBlood.length === 0) {
    return response
      .status(400)
      .send({ message: `Character with blood type ${blood} was not found` });
  }

  console.log('Exercise 5: Characters by Blood');
  response.send(charactersByBlood);
});

// BONUS FEATURES
// 1. (F) Add validation for feature E - present the correct characters even if blood parameter is written in different cases ("human" vs "Human" vs "HUman")

app.get('/characters/species/:species', (request, response) => {
  const { species } = request.params;
  console.log(species);

  const charactersBySpecies = characters.filter(character => {
    return character.species.toUpperCase() === species.toUpperCase();
  });

  if (charactersBySpecies.length === 0) {
    return response
      .status(400)
      .send({ message: `The specie type ${species} was not found` });
  }

  console.log('Exercise 1 (F): Characters by Species');
  response.send(charactersBySpecies);
});

// 2. (G) Add error handling for features D and E, - users should get a message stating what went wrong
// It's Done on the exercise;

const port = 4000;
app.listen(port, () => {
  console.log('The server is running on port: ', port);
});
