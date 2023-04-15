const { Usuario } = require('../models/Usuario')

const UserController = {
    index: async (req, res) => {
        let users  = await  Usuario.findAll()

        return res.render('usuarios', { users })
    },
    findById: async(req,res)=> {
        var {id} = req.params;

        var user = await Usuario.findOne({
            where: {
                firstname: 'vitor'
            }
        })

        console.log(user)
    }
}

module.exports = UserController