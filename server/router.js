const express = require('express');

const UserController = require('./controllers/user');
const RegisterController = require('./controllers/register');

module.exports = function (app) {
  const apiRoutes = express.Router();
  const userRoutes = express.Router();
  const registerRoutes = express.Router();
  /*------------------------------------------------------------------------------
    PRODUCT ROUTE
  ------------------------------------------------------------------------------*/
  apiRoutes.use('/user', userRoutes);

  userRoutes.get('/:email', UserController.oneUserGet);
  userRoutes.post('/', UserController.saveUser);

  apiRoutes.use('/register', registerRoutes);

  // registerRoutes.get('/', RegisterController.allRegisterGet);
  registerRoutes.get('/:userId', RegisterController.oneRegisterGet);
  registerRoutes.post('/:userId', RegisterController.saveRegister);

  app.use('/api', apiRoutes);
};
