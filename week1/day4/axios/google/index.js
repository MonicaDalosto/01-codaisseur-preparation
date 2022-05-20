const axios = require('axios');

// An async function..
const getGoogle = async () => {
  try {
    // The await keyword makes my code wait for promises to finish
    const response = await axios.get('google.com');
    // When using Axios, the finished response will be an object describing the journey over the internet.
    const myData = response.data;
    // The data you want is inside the response.data property:
    console.log('responde test: ', myData);
  } catch (error) {
    console.log('error test:', error.message);
  }
};

getGoogle();
