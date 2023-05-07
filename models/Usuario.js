const {Model, DataTypes} = require('sequelize');

class Usuario extends Model {
    static init (sequelize) {
        super.init({
            nameComplet: DataTypes.STRING,
            email: DataTypes.STRING,
            isPassword: DataTypes.NUMBER,
            admin: DataTypes.BOOLEAN

        },{
            sequelize,
            tableName: 'users'
        })
    }
}

module.exports = Usuario;