'use strict'

require('dotenv').config();
const server = require('./source/server');

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/mydb', { useNewUrlParser: true, useUnifiedTopology: true });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {
//   console.log('I am connected to db')
// });

// //I need to create a schema
// const foodSchema = new mongoose.Schema({
//   name: String
// });

// const plantsSchema = new mongoose.Schema({
//   name: String
// });

// // I need to make a model 
// const Food = mongoose.model('Food', foodSchema);
// const Plants = mongoose.model('Plants', plantsSchema);

const PORT = process.env.PORT;
server.start(PORT);