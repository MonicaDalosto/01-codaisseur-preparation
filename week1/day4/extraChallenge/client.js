const axios = require('axios');
const URL = 'http://localhost:3000';

const welcomeMessage = async () => {
  try {
    const response = await axios.get(`${URL}/`);
    const message = response.data;

    console.log(message);
  } catch (error) {
    console.log(error);
  }
};

// NOTICE: most those tasks require changes to server.js (backend) as well

// TASK: request all characters
const getAllCharacters = async () => {
  try {
    const response = await axios.get(`${URL}/characters`);

    const characters = response.data;
    console.log(characters);
  } catch (error) {
    console.log(error.characters);
  }
};

// TASK: request one character using id
const getCharacterById = async id => {
  try {
    const response = await axios.get(`${URL}/characters/id/${id}`);

    const character = response.data;
    console.log(character);
  } catch (error) {
    console.log(error.response.data);
  }
};

// TASK request all character of a specific house
const getCharactersByHouseName = async house => {
  try {
    const response = await axios.get(`${URL}/characters/house/${house}`);

    const characters = response.data;
    console.log(characters);
  } catch (error) {
    console.log(error.response.data);
  }
};

// TASK request all fights between houses
const getAllFightsBetweenHouses = async () => {
  try {
    const response = await axios.get(`${URL}/characters/fights/`);
    console.log(response);

    const fightsBetweenHouses = response.data;
    console.log(fightsBetweenHouses);
  } catch (error) {
    console.log(error);
  }
};

// TASK request the future age of characters, passing the number of years from now
const getAgeOfCharactersInTheFuture = async years => {
  try {
    const response = await axios.get(`${URL}/future/${years}`);

    const characters = response.data;
    console.log(characters);
  } catch (error) {
    console.log(error);
  }
};

// Run 'node client.js' to execute these functions

// Calling all the functions:
// welcomeMessage();
// getAllCharacters();
// getCharacterById(12511);
// getCharacterById(765433789);
// getCharactersByHouseName('Stark');
// getCharactersByHouseName('TestHouse');
getAllFightsBetweenHouses();
// getAgeOfCharactersInTheFuture(5);
