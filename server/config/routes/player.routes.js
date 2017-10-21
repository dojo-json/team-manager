// express Router allows for more modular routing
const router = require('express').Router();
// require the players controller
const playersController = require('../../controllers').playersController;

// these routes will get the 'players' prefix when required,
// so no need to include it here
module.exports = router
  .get('/', playersController.index)
  .post('/', playersController.create)
  .get('/:id', playersController.show)
  .put('/:id', playersController.update)
  .delete('/:id', playersController.destroy);
