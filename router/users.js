const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController');

router.get('/login-usuario', UserController.loginUsers);
router.post('/login-usuario', UserController.storeUsers)

module.exports = router;