const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController');
//const cardapioController = require('../controllers/menuController');
const produtosController  = require('../controllers/productController');
const cartController = require('../controllers/cartController');
const chekoutController = require('../controllers/checkoutController');
const sucessController = require('../controllers/sucessController')
const accountController = require('../controllers/accountController');
//const LoginController = require('../controllers/LoginController');


router.get('/', indexController.index);
//router.get('/cardapios', cardapioController.menu);
router.get('/produto', produtosController.product);
router.get('/carrinho', cartController.cart)
router.get('/finalizacao-pedido', chekoutController.chekout)
router.get('/compra-efetuada', sucessController.sucess)
router.get('/usuario', accountController.account);



module.exports = router;