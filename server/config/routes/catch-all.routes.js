// express Router allows for more modular routing
const router = require('express').Router();
const path = require('path');

module.exports = router.all('*', (request, response) => {
  // serve the index when all other routes fail
  response.sendFile(path.resolve('dist', 'index.html'));
});
