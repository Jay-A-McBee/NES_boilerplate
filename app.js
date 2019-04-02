const bodyParser = require('body-parser');
const logger = require('morgan');
const express = require('express');
const userRouter = require('./server/userRoutes');

const app = express();

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/user', userRouter);

module.exports = app;