const Menu = require('../models/Menu')

async function index(req,res){
    var promo = await Menu.findAll(
        {
            where: {
                id: [11,12,13]
              }
        }
    )
    
    console.log(promo)
    res.render('index', {promo})
}

module.exports = {
    index
};