//const { Login } = require('../models/Login')

const LoginController = {
    login: async (req, res) => {
        //let login  = await  Login.findAll()

        res.render('PageLogin', {
            titulo: 'Login'
        })
    },
}

module.exports = LoginController