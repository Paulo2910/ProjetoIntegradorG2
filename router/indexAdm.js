const express = require('express');
const router = express.Router();

const AdminProductControllers = require('../controllers/AdminProductControllers')

router.get('/lista-de-produtos', AdminProductControllers.listProduct)
router.get('/cadastrando-produtos', AdminProductControllers.pageProduct)
router.post('/cadastrando-produtos', AdminProductControllers.storeProducts)

//Update
router.get('/editando-produtos/:id', AdminProductControllers.editProducts)
router.put('/editando-produtos/:id', AdminProductControllers.updateProducts)
router.delete('/deletar-produto/:id', AdminProductControllers.destroyProducts)

module.exports = router 