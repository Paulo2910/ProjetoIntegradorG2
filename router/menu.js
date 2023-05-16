const express = require('express');
const router = express.Router();

const menuController =require('../controllers/menuController');
const auth = require('../middlewares/auth')

router.get('/',auth, menuController.menu);
router.post('/create-menu', menuController.createMenu);

module.exports = router;