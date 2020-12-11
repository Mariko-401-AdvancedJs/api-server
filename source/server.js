'use strict';

const express = require('express');
const app = express();
require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('I am connected to db')
});


const logger = require('./middleware/logger');
const notFoundHandler = require('./error-handlers/404');
const serverError = require('./error-handlers/500');

const foodRoutes = require('./routes/food');
// const plantRoutes = require('./routes/plants');

//middleware for food routes
app.use(express.json());
app.use(logger);
app.use(foodRoutes);

// //middleware for plant routes
// app.use(express.json());
// app.use(logger);
// app.use(plantRoutes);


app.use('*', notFoundHandler);
app.use(serverError);

module.exports = {
  server: app,
  start: PORT => {
    console.log(PORT);
    if (!PORT) { throw new Error('port is missing'); }
    app.listen(PORT, () => {
      console.log(`alive on ${PORT}`);
    })
  }
}