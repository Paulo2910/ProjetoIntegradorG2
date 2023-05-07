// Importar a classe do sequelize
const Sequelize = require('sequelize');
const Menu = require('../models/Menu')
const Usuario = require('../models/Usuario')

//importar as configurações
const databaseConfigurations = require('../config/database');

// Criar a conexão
const connection = new Sequelize(databaseConfigurations);
Menu.init(connection)
Usuario.init(connection)

// Exportando a Conexão
module.exports = connection;


