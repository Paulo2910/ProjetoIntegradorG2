const Usuario = require('../models/Usuario')
const { validationResult } = require('express-validator')//Método de validação dos inputs


async function createUsers(req,res) {
    const { nameComplet, email, isPassword, admin} = req.body;
    const createdUser = await Usuario.create({ nameComplet, email, isPassword, admin});

    return res.json(createdUser);
}

function loginUsers(req,res) {
    res.render('PageLogin', {
        titulo: 'Login'
    })
}

async function storeUsers(req, res) {
    const {nameComplet, email, isPassword, admin } = req.body;
    const  errors = validationResult(req);

    if(!errors.isEmpty()) {
            console.log(errors.mapped())
            return res.render('PageLogin', {
                errors: errors.mapped(),
                titulo: 'Login'
            })
    } else {
        const createdUser = await Usuario.create({
            nameComplet,
            email,
            isPassword,
            admin
        });
        console.log(createdUser)
        return res.redirect('/usuarios/login-usuario', {
            
        })
    }
        
    
   
}



module.exports = {
    storeUsers,
    loginUsers,
    createUsers
}