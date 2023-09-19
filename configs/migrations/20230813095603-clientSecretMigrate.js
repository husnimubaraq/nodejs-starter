'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.createTable('client_secret', {
      cs_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      cs_code: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      cs_am_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      cs_created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      cs_created_by: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      cs_updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      cs_updated_by: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      cs_created_at_system: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      cs_updated_at_system: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.dropTable('client_secret');
  }
};