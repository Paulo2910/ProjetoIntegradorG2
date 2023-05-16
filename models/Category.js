const {Model, DataTypes} = require('sequelize');

class Category extends Model {
    static init (sequelize) {
        super.init({
            category: DataTypes.STRING,
            slug: DataTypes.STRING,

        },{
            sequelize,
            tableName: 'category'
        })

        Category.associate = (listaModels) => {
            Category.hasMany(listaModels.Menu, {
                foreignKey: 'id_category',
                as: 'menu' 
            })
        }
    }
}

module.exports = Category;