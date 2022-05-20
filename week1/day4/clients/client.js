const axios = require('axios');

const URL = 'http://localhost:';
const PORT = 4000;

// get all users
const getAllUsers = async () => {
  try {
    const response = await axios.get(`${URL}${PORT}/users`);

    /*
    the finished response will be an object describing the journey over the internet:
        response = {
            headers: <meta data> 
            data: [...users]
        }
    */

    const users = response.data; // The data we want is inside the response.data property:
    console.log(users);
  } catch (error) {
    console.log(error.response.data);
  }
};

// get user by id
const getUserById = async id => {
  try {
    const response = await axios.get(`${URL}${PORT}/users/${id}`);

    const user = response.data;
    console.log(user);
  } catch (error) {
    console.log(error.response.data);
  }
};

// getAllUsers();
getUserById(32);
// getUserById("62555f2d409b466f24b7b273");
