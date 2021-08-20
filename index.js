const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Strawberry or Blueberry?');
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});