'use strict';

const mongoose = require('mongoose');

//creating schema
const foodSchema = mongoose.Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },

})

//exporting schema as model
const foodModel = mongoose.model('food', foodSchema);

module.exports = foodModel;