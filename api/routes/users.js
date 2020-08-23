const express  = require('express');
const router = express.Router();

const User = require('../models/user');
const CheckAuth = require('../middleware/check-auth');

const UserController = require('../controllers/users');

router.post('/signup', UserController.user_signup);

router.post('/login', UserController.user_login);


router.delete('/:userId', CheckAuth, UserController.user_delete);

module.exports = router; 