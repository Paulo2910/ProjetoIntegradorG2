const express = require('express');
const router = express.Router();

const menuController =require('../controllers/menuController');

router.get('/', menuController.menu);
router.post('/create-menu', menuController.createMenu);

module.exports = router;