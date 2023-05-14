const {Model, DataTypes} = require('sequelize');

class Category extends Model {
    static init (sequelize) {
        super.init({
            category: DataTypes.STRING,
            slug: DataTypes.STRING,
            id_category: DataTypes.INTEGER

        },{
            sequelize,
            tableName: 'category'
        })

        Category.associate = (listaModels) => {
            Category.belongsTo(listaModels.Menu, {
                foreignKey: 'id_category',
                as: 'categorias' 
            })
        }
    }
}

module.exports = Category;