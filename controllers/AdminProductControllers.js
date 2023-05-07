const Menu = require('../models/Menu')

async function storeProducts(req, res) {
    const {dish, info, price, url } = req.body;
    const createdMenu = await Menu.create(
        {
            dish, 
            info,
            price, 
            url
        });
        console.log(createdMenu)
        return res.redirect('/administrador/lista-de-produtos')
}

async function listProduct(req, res){
    const products = await Menu.findAll()
    console.log(products)

    res.render('AdminProducts',{
        products,
        titulo: 'Produtos'
    })
}

function cadProduct(req, res){
    res.render('AdminProductsCad',{ 
        titulo: 'Cadastro de Produtos'
    })
}

module.exports = {
    //createProducts,
    storeProducts,
    listProduct,
    cadProduct
}

