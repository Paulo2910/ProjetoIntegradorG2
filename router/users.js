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


router.get('/login-usuario', UserController.pageLogin);
router.get('/cadastro-do-usuario', UserController.pageCadastro);

router.post('/cadastro-do-usuario', validations, UserController.storeUsers);
router.post('/login-usuario', UserController.signIn)

//router.post('/create-users', UserController.createUsers);


module.exports = router;