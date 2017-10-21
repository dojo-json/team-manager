// regular expression to match js files
const regex      = new RegExp('\\.js$', 'i');
const mongoose   = require('mongoose');
const path       = require('path');
const fs         = require('fs');

// our models directory
const modelsPath = path.resolve('server', 'models');

// Required to remove deprecation warning
mongoose.Promise = global.Promise;

// Create connection to database
mongoose.connect("mongodb://localhost/team-manager");

// Listen for connected event and log a message
mongoose.connection.on('connected', () => console.log('Connected to MongoDB'));

// read models dir and loop through contents
fs.readdirSync(modelsPath).forEach(file => {
  if (regex.test(file)) {
    require(path.join(modelsPath, file));
  }
});
