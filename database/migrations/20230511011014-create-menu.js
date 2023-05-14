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
        allowNull: false
      },
      sku:{
        type: Sequelize.STRING,
        allowNull: false
      },
      descriptions: {
        type: Sequelize.STRING,
        allowNull: false
      },
      price: {
        type: Sequelize.STRING,
        allowNull: false
      },
      id_category: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      quantity: {
        type: Sequelize.STRING,
        allowNull: false 
      },
      image: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt:{
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }

    })
     
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Menu');
    
  }
};