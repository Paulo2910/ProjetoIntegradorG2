const express = require('express');
const router = express.Router();
const path =  require('path')
const multer = require('multer')

const AdminProductControllers = require('../controllers/AdminProductControllers')

const multerDiskStorage = multer.diskStorage ({
    destination: (req, file, callback) => {
        const folder =  path.join(__dirname, '../public/img')
        callback(null, folder);
    },
    filename: (req, file, callback) => {
        const imageName = Date.now() + file.originalname;
        callback(null, imageName)
    }
})

const upload = multer({ storage: multerDiskStorage})

router.get('/lista-de-produtos', AdminProductControllers.listProduct)
router.get('/cadastrando-produtos', AdminProductControllers.pageProduct)
router.post('/cadastrando-produtos', upload.single('url') , AdminProductControllers.storeProducts)

//Update
router.get('/editando-produtos/:id', AdminProductControllers.editProducts)
router.put('/editando-produtos/:id', AdminProductControllers.updateProducts)
router.delete('/deletar-produto/:id', AdminProductControllers.destroyProducts)

module.exports = router 