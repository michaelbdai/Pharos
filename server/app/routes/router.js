const authController = require('../controllers/auth');
const router = require('express').Router();
const socketController = require('../controllers/socket');
const { io } = require('../server.js');

 // User Login Controller
router.post('/auth/login', authController.loginUser);

 // New User Controller
router.post('/auth/register', authController.createUser);


socketController(io.of('/socket'));

module.exports = router;
