const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('dist3'));

app.use((req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist3/index.html'));
});

app.listen(5003, () => {
  console.log(`Server is listening on port: 5003`);
});
