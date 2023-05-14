const express = require('express');
const router = express.Router();
const path =  require('path')
const multer = require('multer')
const {body} = require('express-validator')

const AdminProductControllers = require('../controllers/AdminProductControllers')
//const AdminCategoryControllers = require('../controllers/AdminCategoryControllers')

const multerDiskStorage = multer.diskStorage ({
    destination: (req, file, callback) => {
        const folder =  path.join(__dirname, '../public/menu')
        callback(null, folder);
    },
    filename: (req, file, callback) => {
        const imageName = Date.now() + file.originalname;
        callback(null, imageName)
    }
})

const validations = [
    body('dish').notEmpty().withMessage("O campo não pode ficar vazio *"),
   
]

const upload = multer({ storage: multerDiskStorage})


//Rotas dos Produtos
router.get('/lista-de-produtos', AdminProductControllers.listProduct)
router.get('/cadastrando-produtos', AdminProductControllers.pageProduct)
router.post('/cadastrando-produtos', validations , upload.single('image') , AdminProductControllers.storeProducts)

//Update de Produtos
router.get('/editando-produtos/:id', AdminProductControllers.editProducts)
router.put('/editando-produtos/:id',upload.single('image'), AdminProductControllers.updateProducts)
router.delete('/deletar-produto/:id', AdminProductControllers.destroyProducts)



module.exports = router 