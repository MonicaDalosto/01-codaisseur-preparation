const axios = require('axios');

// axios >> requests >> async >> promisses

const whatILearned = async () => {
  const url = 'http://localhost:3000/schedule';
  const response = await axios.get(url);
  console.log(response.data);
};

whatILearned();
