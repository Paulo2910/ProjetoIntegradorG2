const Usuario = require('../models/Usuario')

async function pageUsers(req,res) {
    const user = await Usuario.findAll()
    res.render('PageAccount',{
        user,
        titulo: 'Usuários'
    })
}

module.exports = {
    pageUsers
}