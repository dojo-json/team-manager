// express Router allows for more modular routing
const router = require('express').Router();

// all routes (excluding catch-all) would be required here
// and mounted on the appropriate prefix
// This keeps our server.js file clean by only needing to require
// this single file (and catch-all), instead of all routing
module.exports = router
  .use('/players', require('./player.routes'));






