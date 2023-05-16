const express = require('express');
const router = express.Router();


const indexController = require('../controllers/indexController');
const produtosController  = require('../controllers/productController');
const cartController = require('../controllers/cartController');
const chekoutController = require('../controllers/checkoutController');
const sucessController = require('../controllers/sucessController')



router.get('/', indexController.index);
router.get('/produto/:id', produtosController.isProduct);
router.get('/carrinho', cartController.cart)
router.get('/finalizacao-pedido', chekoutController.chekout)
router.get('/compra-efetuada', sucessController.sucess)




module.exports = router;