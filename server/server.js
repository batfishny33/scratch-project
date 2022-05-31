require('dotenv').config();
const express = require('express');
const path = require('path')
const cors = require('cors');
const axios = require('axios');
const app = express();
const cookieParser = require('cookie-parser');
const UserRouter = require('./routes/UserRouter.js');
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, '../dist')));

app.use('/users', UserRouter);

app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, '../dist/'));
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
});