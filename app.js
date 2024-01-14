const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('ExpressJS 2K24');
});

app.listen(port, () => {
  console.log(`Aplikacja działa na porcie ${port}`);
});
  