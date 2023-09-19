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

    await queryInterface.createTable('account', {
      account_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      account_username: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      account_password: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      account_email: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      account_salt: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      account_profile_url: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      account_role_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      account_role_type: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      account_refresh_token: {
        type: Sequelize.TEXT('long'),
        allowNull: false,
      },
      account_created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      account_created_by: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      account_updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      account_updated_by: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      account_created_at_system: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      account_updated_at_system: {
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

    await queryInterface.dropTable('account');
  }
};