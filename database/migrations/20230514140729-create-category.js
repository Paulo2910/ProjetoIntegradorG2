'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('Category', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category: {
      type: Sequelize.STRING,
      allowNull: false
    },
    slug: {
      type: Sequelize.STRING,
      allowNull: false
    },
    id_category: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Menu',
        key: 'id'
      }
    },
    createdAt:{
      type: Sequelize.DATE,
      allowNull: false
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false
    }
});
     
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Category');
     
  }
};
