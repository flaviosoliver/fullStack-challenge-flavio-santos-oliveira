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

// router.get('/user/:id',
// validateTokenMiddleware,
// usersController.getUserById);

// router.put('/user/:id', );

// router.delete('/user/me',
// validateTokenMiddleware,
// usersController.deleteUser);

module.exports = router;