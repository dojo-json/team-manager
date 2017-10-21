// require players controller
const playersController = require('./players');

// by including all controllers here we keep requires in
// other files simple
module.exports = {
  playersController,
};
