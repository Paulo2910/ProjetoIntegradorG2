const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController')
const cardapioController = require('../controllers/cardapioController');
const produtosController  = require('../controllers/produtosController')



router.get('/', indexController.index);
router.get('/cardapios', cardapioController.index)
router.get('/produto', produtosController.index)
//router.get('/detalhes', (req, res) => res.render('./views/detalhesProdutos'));

module.exports = router;