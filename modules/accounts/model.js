const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../../configs/database");

class AccountModel extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}

AccountModel.init(
  {
    account_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    account_username: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    account_password: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    account_email: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    account_salt: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    account_profile_url: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    account_role_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    account_role_type: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    account_refresh_token: {
      type: DataTypes.TEXT('long'),
      allowNull: false,
    },
    account_created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    account_created_by: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    account_updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    account_updated_by: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    account_created_at_system: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    account_updated_at_system: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "account",
    createdAt: "account_created_at_system",
    updatedAt: "account_updated_at_system",
    freezeTableName: true,
    timestamps: false,
    paranoid: false,
  }
);

module.exports = AccountModel;