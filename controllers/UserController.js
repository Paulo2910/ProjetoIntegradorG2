const Usuario = require('../models/Usuario')


async function createUsers(req,res) {
    const { nameComplet, email, isPassword, admin} = req.body;
    const createdUser = await Usuario.create({ nameComplet, email, isPassword, admin});

    return res.json(createdUser);
}


async function storeUsers(req, res) {
    const {nameComplet, email, isPassword, admin } = req.body;
    const createdUser = await Usuario.create(
        {
            nameComplet,
            email,
            isPassword,
            admin
        });
        console.log(createdUser)
        return res.redirect('/')
}

function loginUsers(req,res) {
    res.render('PageLogin', {
        titulo: 'Login'
    })
}

module.exports = {
    storeUsers,
    loginUsers,
    createUsers
}