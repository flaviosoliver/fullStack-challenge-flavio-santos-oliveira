const express = require('express');

const router = express.Router();
const usersController = require('../controller/usersController');
const middleware = require('../middleware');

const { validateToken } = middleware;

router.post('/user',
  usersController.createUser);

router.get('/user',
  validateToken,
  usersController.getAllUsers);

router.get('/user/:id',
validateToken,
usersController.getUserById);

router.delete('/user/me',
validateToken,
usersController.deleteUser);

module.exports = router;