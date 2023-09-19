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

    await queryInterface.createTable('admin', {
      admin_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      admin_name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      admin_created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      admin_created_by: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      admin_updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      admin_updated_by: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      admin_created_at_system: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      admin_updated_at_system: {
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

    await queryInterface.dropTable('admin');
  }
};