'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'Menu',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        dish: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        info: {
          type: Sequelize.STRING,
          allowNull: null
        },
        price: {
          type: Sequelize.DECIMAL,
          allowNull: null
        },
        url: {
          type: Sequelize.STRING,
          allowNull: null
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
    await queryInterface.dropTable('Menu')
  }
};
