// Importar a classe do sequelize
const Sequelize = require('sequelize');
const Menu = require('../models/Menu')

//importar as configurações
const databaseConfigurations = require('../config/database');

// Criar a conexão
const connection = new Sequelize(databaseConfigurations);
Menu.init(connection)

// Exportando a Conexão
module.exports = connection;


