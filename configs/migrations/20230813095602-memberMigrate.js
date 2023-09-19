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

    await queryInterface.createTable('member', {
      member_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      member_code: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      member_name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      member_phone: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      member_email: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      member_created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      member_created_by: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      member_updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      member_updated_by: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      member_created_at_system: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      member_updated_at_system: {
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

    await queryInterface.dropTable('member');
  }
};