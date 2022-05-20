const express = require('express');
const users = require('./users.json');

const app = express();

// GET all users
app.get('/users', (request, response) => {
  // error handling
  if (!users || users.length === 0) {
    response.status(500).send({ error: 'Users were not found' });
    return;
  }

  response.status(200).send(users);
});

// GET user :id
app.get('/users/:id', (request, response) => {
  const { id } = request.params;

  // error handling: if no id sent
  if (!id || id === '') {
    response.status(400).send({ error: 'id was not sent' });
    return;
  }
  // Go over all the users and find the specific user;
  const user = users.find(user => user._id === id);

  // error handling: wrong id
  if (!user) {
    return response.status(400).send({ error: 'user was not found' });
  }

  response.status(200).send(user);
});

const port = 4000;
app.listen(port, () => {
  console.log('server ir running on port: ', port);
});
