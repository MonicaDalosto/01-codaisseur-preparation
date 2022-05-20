// Exercise: start a server
// Import express.
const { response } = require('express');
const express = require('express');

// Create an express server named app.
const app = express();

// const page = `<html>
//   <head>
//     <title>Home</title>
//   </head>
//   <body>
//     <h1>Welcome</h1>
//   </body>
// </html>`;

// app.get('/test', (request, response) => {
//   console.log(request.path);
//   response.send(page);
// });

const port = 3000;

// Exercise: log a confirmation
// Tell the app to listen on port 3000.
app.listen(
  port, // TCP port where the server listens
  () => console.log(`Listening on: ${port}`) // confirmation function
);

// app.get('/user/:name', (request, response) => {
//   const message = 'Welcome, ' + request.params.name;
//   response.send(message);
// });

const render = message => {
  const document = `<html>
    <head>
      <title>Home</title>
    </head>
    <body>
      <h1>${message}</h1>
    </body>
  </html>`;
  return document;
};

app.get('/users/:name', (request, response) => {
  const page = render(request.params.name);
  response.send(page);
});
