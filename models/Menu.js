const {Model, DataTypes} = require('sequelize');

class Menu extends Model {
    static init (sequelize) {
        super.init({
            dish: DataTypes.STRING,
            info: DataTypes.STRING,
            price: DataTypes.DECIMAL,
            url: DataTypes.STRING

        },{
            sequelize,
            tableName: 'menu'
        })
    }
}

module.exports = Menu;

