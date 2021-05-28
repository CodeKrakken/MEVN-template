require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose')
const { PORT, mongoUri } = require('./config')
// const PORT = process.env.PORT
// const mongoUri = process.env.MONGO_URI

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})
.then(() => console.log('MongoDB database Connected ...')).catch((err) => console.log(err))

const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
// const routes = require('./routes/api/routes')

app.use(cors)
app.use(morgan('tiny'))
app.use(bodyParser.json())


app.get('/', (req, res) => {
  try {
    res.send('Hello World')
  } catch (error) {
    console.log(error.message)
  }
})

app.listen(PORT, () => console.log('Listening on http://localhost:' + PORT))