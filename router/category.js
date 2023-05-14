const express = require('express');
const router = express.Router();

const AdminCategoryControllers = require ('../controllers/AdminCategoryControllers')


router.get('/lista-de-categorias', AdminCategoryControllers.listCategory)
router.get('/cadastrando-categorias', AdminCategoryControllers.pageCategory)
router.get('/editando-categoria/:id', AdminCategoryControllers.editCategory)

router.post('/cadastrando-categorias', AdminCategoryControllers.createCategory)
router.put('/editando-categoria/:id', AdminCategoryControllers.updateCategory)
router.delete('/deletar-categoria/:id', AdminCategoryControllers.destroyCategory)



module.exports = router;