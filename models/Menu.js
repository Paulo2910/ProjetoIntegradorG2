const {Model, DataTypes} = require('sequelize');
const Category = require('./Category')


class Menu extends Model {
    static init (sequelize) {
        super.init({
            dish: DataTypes.STRING,
            sku: DataTypes.NUMBER,
            descriptions: DataTypes.STRING,
            id_category: DataTypes.NUMBER,
            price: DataTypes.DECIMAL,
            quantity: DataTypes.NUMBER,
            image: DataTypes.STRING,

        },{
            sequelize,
            tableName: 'menu'
        })

        Menu.associate = (listaModels) => {
            Menu.belongsTo(listaModels.Category, {
                foreignKey: 'id_category',
                as: 'category' 
            })
        }
    }
}

module.exports = Menu;

