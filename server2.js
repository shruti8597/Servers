const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.resolve(__dirname,'dist2')));

app.use((req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist2/index.html'));
});

app.listen(5002, () => {
  console.log(`Server is listening on port: 5002`);
});
