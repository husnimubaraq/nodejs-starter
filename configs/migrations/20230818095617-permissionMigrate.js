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

    await queryInterface.createTable('permission', {
      permission_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      permission_name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      permission_desc: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      permission_code: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      permission_created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      permission_created_by: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      permission_updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      permission_updated_by: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      permission_created_at_system: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      permission_updated_at_system: {
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

    await queryInterface.dropTable('permission');
  }
};