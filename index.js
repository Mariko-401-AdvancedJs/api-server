'use strict'

require('dotenv').config();
const server = require('./source/server');
const PORT = process.env.PORT;

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

server.start(PORT);