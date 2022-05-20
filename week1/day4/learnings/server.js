const express = require('express');

const app = express();

app.get('/schedule', (request, response) => {
  const days = { yesterday: 'servers', today: 'clients' };
  console.log('Request received!');
  response.send(days.yesterday);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log('Listening on: ', PORT);
});
