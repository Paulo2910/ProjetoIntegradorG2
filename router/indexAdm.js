const express = require('express');
const router = express.Router();

const AdminProductControllers = require('../controllers/AdminProductControllers')

router.get('/lista-de-produtos', AdminProductControllers.listProduct)
router.get('/cadastrando-produtos', AdminProductControllers.cadProduct)
//router.get('/cadastrando-produtos', AdminProductControllers.createProducts)
router.post('/cadastrando-produtos', AdminProductControllers.storeProducts)

//router.get('/lista-de-produtos', AdminProductControllers.cadProduct)

module.exports = router 