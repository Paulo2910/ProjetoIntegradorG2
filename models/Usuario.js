module.exports = (sequelize, DataType) => {

    const Usuario = sequelize.define('Usuario', {

        id_usuario:{
            type:DataType.INTERGER,
            primaryKey: true,
            autoIncrement: true
        },

        FirstName: DataType.STRING,
        LastName: DataType.STRING,

        email: {
            type:DataType.STRING, 
            allowNull: false
        },

        pass: DataType.STRING
        
    }, {
        tableName: 'usuario',
        timestamps: false
    })

    return Usuario
}


