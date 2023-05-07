'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable(
    'Users',
    {
      id:{
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
      },
      nameComplet: {
        type: Sequelize.STRING(150),
        allowNull: false

      },
      email: {
        type: Sequelize.STRING(150),
        allowNull: false
      },
      isPassword: {
        type: Sequelize.STRING(150),
        allowNull: false
      },
      admin: {
        type: Sequelize.BOOLEAN,
        allowNull: true
      },
      createdAt:{
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }

    }
   )
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('Users');
     
  }
};
