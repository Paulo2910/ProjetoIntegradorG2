const Usuario = require('../models/Usuario')
const fs = require('fs');
//const path = require('path')
const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator')//Método de validação dos inputs




async function createUsers(req,res) {
    const { nameComplet, email, isPassword, admin} = req.body;
    const createdUser = await Usuario.create({ nameComplet, email, isPassword, admin});

    return res.json(createdUser);
}

function pageLogin(req,res) {
    res.render('PageLogin', {
        titulo: 'Login'
    })
}
function pageCadastro(req,res) {
    res.render('PageCadastroUser', {
        titulo: 'Cadastro do Usuário'
    })
}

async function storeUsers(req, res) {
    const {nameComplet, email, isPassword, admin } = req.body;
    var passwordEncrypt = bcrypt.hashSync(isPassword, 10)
    const  errors = validationResult(req);

    if(!errors.isEmpty()) {
            console.log(errors.mapped())
            return res.render('PageCadastroUser', {
                errors: errors.mapped(),
                titulo: 'Efetue o Cadastro'
            })
    } else {
        const createdUser = await Usuario.create({
            nameComplet,
            email,
            isPassword: passwordEncrypt,//Método encripitado do no banco
            admin
        });
        console.log(createdUser)
        return res.redirect('/')
    }
}

async function signIn(req,res) {
    const user = await Usuario.findOne({
        attributes: ['email', 'isPassword'],
        where: {
            email: req.body.email,
        }
    });

    if(user === null){
        return res.send('Usuário Inválido')
    }

    if(!(await bcrypt.compare(req.body.isPassword, user.isPassword))) {
        return res.send('Senha incorreta ')
    } else {
        return res.redirect('/')
    }
}



module.exports = {
    storeUsers,
    pageLogin,
    pageCadastro,
    createUsers,
    signIn
}