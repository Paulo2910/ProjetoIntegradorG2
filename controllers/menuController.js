const Menu = require('../models/Menu')

async function createMenu(req, res) {
    const {dish, info, price, url } = req.body;
    const createdMenu = await Menu.create({dish, info, price, url});

    return res.json(createdMenu)
}

async function menu(req, res){
    const dishs = await Menu.findAll()
    console.log(dishs)

    res.render('PageMenu',{
        dishs,
        titulo: 'Menu'
    })
}

module.exports = {
    menu,
    createMenu
}