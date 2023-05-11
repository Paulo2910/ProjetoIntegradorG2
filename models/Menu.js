const {Model, DataTypes} = require('sequelize');

class Menu extends Model {
    static init (sequelize) {
        super.init({
            dish: DataTypes.STRING,
            sku: DataTypes.NUMBER,
            descriptions: DataTypes.STRING,
            price: DataTypes.DECIMAL,
            quantity: DataTypes.NUMBER,
            image: DataTypes.STRING

        },{
            sequelize,
            tableName: 'menu'
        })
    }
}

module.exports = Menu;

