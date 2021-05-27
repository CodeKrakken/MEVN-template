const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  try {
    res.send('Hello World')
  } catch (error) {
    console.log(error.message)
  }
})

app.listen(PORT, () => console.log('Listening on http://localhost:' + PORT))