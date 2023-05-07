const express = require('express');
const router = express.Router();
const {body} = require('express-validator')// Método de Validação dos Inputs

const UserController = require('../controllers/UserController');

//Express-Validator
const validations = [
    body('nameComplet').notEmpty().withMessage("O campo Nome não pode ficar vazio."),
    body('email').notEmpty().withMessage("O campo E-mail não pode ficar vazio."),
    body('isPassword').notEmpty().withMessage("O campo Senha não pode ficar vazio.")
]


router.get('/login-usuario', UserController.loginUsers);
router.post('/create-users', UserController.createUsers);
router.post('/login-usuario', validations , UserController.storeUsers)

module.exports = router;