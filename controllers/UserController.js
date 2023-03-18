const { Usuario } = require('../models')

const UserController = {
    index: async (req, res) => {
        let users  = await  Usuario.findAll()

        return res.render('usuarios', { users })
    }
}

module.exports = UserController