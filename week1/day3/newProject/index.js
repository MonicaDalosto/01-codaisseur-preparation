const express = require('express');
const users = require('./users.json');
const app = express();

// 1 - GET all users:
app.get('/users', (request, response) => {
  response.send(users); // show on Browser;
});

// 2 - GET a user by id
// /users/id
// /users/daskljh3@!413DJASE
app.get('/users/id/:id', (request, response) => {
  const { id } = request.params;

  // DONT do this:!
  // const id = request.params.id

  const user = users.find(user => {
    return user._id === id;
  });

  // if there is no user
  // then send "error: no user was found"
  if (!user) {
    // 400 = bad request = user sent something that is not correct
    return response.status(400).send({ message: 'user was not found' });
  }

  response.send(user);
});

// 3 - GET all users by a specific gender (/users/:gender)
app.get('/users/gender/:gender', (request, response) => {
  const { gender } = request.params;

  if (gender !== 'male' && gender !== 'female') {
    return response
      .status(400)
      .send({ message: 'Gender has to be male or female' });
  }

  // filter users by :gender
  const usersByGender = users.filter(user => {
    return user.gender === gender;
  });

  // if usersByGender is empty -> []
  // [] is something! (Truthy)
  if (usersByGender.length === 0) {
    response
      .status(400)
      .send({ message: `No users with gender ${gender} were found` });

    // BREAK THE FUNCTION
    return;
  }

  response.send(usersByGender);
});

// 4 - GET all users that are above 30 years old and have green eyes (/users/color/:color)
app.get('/users/color/:eyeColor', (request, response) => {
  const { eyeColor } = request.params;

  const usersByEyeColorAndAge = users.filter(user => {
    return user.eyeColor === eyeColor && user.age > 30;
  });

  // filter all users that are eyeColor OR age > 30
  // const usersByEyeColorAndAge = users.filter(user => {
  //   return user.eyeColor === eyeColor || user.age > 30;
  // });

  response.send(usersByEyeColorAndAge);
});

// 5 - GET user by name, no matter in which case it is written (upper or lower or both)
app.get('/users/name/:name', (request, response) => {
  const { name } = request.params;

  // filter david === DaviD
  // toUpperCase DAVID === DAVID
  const usersByName = users.filter(user => {
    return user.name.toUpperCase() === name.toUpperCase();
    // return user.name.toLowerCase() === name.toLowerCase();
  });

  response.send(usersByName);
});

// 6 - Add error handling: It's done in the line 50;

// 7 - Send HTML
app.get('/message/:name', (request, response) => {
  // for variables inside string `${variable}`
  const message = `
  <html>
    <head>
      <title>Welcome!</title>
    </head>
    <body>
      <h1 style="color: green">Welcome ${request.params.name}</h1>
    </body>
  </html>
  `;

  response.send(message);
});

// DRY
// Don't Repeat Yourself
const port = 4000;

app.listen(port, () => {
  console.log('server running on port', port);
});
