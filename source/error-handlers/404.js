'use strict';

function notFoundHandler(req, res, next) {
  res.status(404).send('not found');
}

module.exports = notFoundHandler;
