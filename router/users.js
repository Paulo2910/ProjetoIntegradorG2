const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController');


router.get('/', UserController.index);
//router.get('/:id', UserController.findById);

module.exports = router;