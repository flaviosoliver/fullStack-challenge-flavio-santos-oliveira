const express = require('express');

const router = express.Router();
const usersController = require('../controller/usersController');
const middleware = require('../middleware');

const { validateToken } = middleware;

router.post('/user/register',
  usersController.createUser);

router.get('/user/all',
  validateToken,
  usersController.getAllUsers);

// router.get('/user/:id',
// validateToken,
// usersController.getUserById);

router.delete('/user/me',
validateToken,
usersController.deleteUser);

router.post('/user/search',
usersController.getUserByEmail);

module.exports = router;