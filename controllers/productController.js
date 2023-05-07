const Menu = require('../models/Menu')

async function isProduct(req, res){
    const product = await Menu.findByPk(req.params.id);
    console.log(product)
    res.render('PageDetails', {
        product,
        titulo: product.dish,
       
    })
}   


module.exports = {
    isProduct
};