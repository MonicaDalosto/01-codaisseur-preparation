const axios = require('axios');
const URL = 'http://localhost:4000';

// (A) Create a function that makes an axios call to GET - / endpoint, and log ONLY the data.

const getData = async () => {
  try {
    const response = await axios.get(`${URL}/`);
    const dataReceived = response.data;

    console.log(dataReceived);
  } catch (error) {
    console.log(error);
  }
};

getData();

// (B) Create a function that makes an axios call to GET - /message endpoint, and log it.

const getMessage = async () => {
  try {
    const response = await axios.get(`${URL}/message`);
    const message = response.data;

    console.log(message);
  } catch (error) {
    console.log(error);
  }
};

getMessage();

// (C) Make a function that takes NO params and makes and axios request to our server to get all characters and logs them.

const getAllCharacters = async () => {
  try {
    const response = await axios.get(`${URL}/characters`);

    const characters = response.data;
    console.log(characters);
  } catch (error) {
    console.log(error);
  }
};

getAllCharacters();

// (D) Make a function that takes 1 parameter (characterId) and makes and axios call to your GET - /characters/:id endpoint. We should log the character with that id that is returned from our route.

const getCharacterById = async characterId => {
  try {
    const response = await axios.get(`${URL}/characters/${characterId}`);

    const character = response.data;
    console.log(character);
  } catch (error) {
    console.log(error.response.data);
  }
};

getCharacterById(18);
