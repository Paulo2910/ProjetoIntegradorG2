const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController');
const cardapioController = require('../controllers/menuController');
const produtosController  = require('../controllers/productController');
const cartController = require('../controllers/cartController');



router.get('/', indexController.index);
router.get('/cardapios', cardapioController.menu);
router.get('/produto', produtosController.product);
router.get('/carrinho', cartController.cart)


module.exports = router;