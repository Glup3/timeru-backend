import express = require('express');

const app: express.Application = express();

app.get('/', (req, res): void => {
  res.send('Hello World!');
});

app.listen(4000, (): void => {
  console.log('Express server is listening on port 4000!');
});
