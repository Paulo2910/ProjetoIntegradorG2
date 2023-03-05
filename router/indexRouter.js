const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController');
const cardapioController = require('../controllers/menuController');
const produtosController  = require('../controllers/productController');
const cartController = require('../controllers/cartController');
const accountController = require('../controllers/accountController');



router.get('/', indexController.index);
router.get('/cardapios', cardapioController.menu);
router.get('/produto', produtosController.product);
router.get('/carrinho', cartController.cart)
router.get('/usuario', accountController.account);


module.exports = router;