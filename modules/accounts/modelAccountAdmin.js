const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../../configs/database");

class AccountAdminModel extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}

AccountAdminModel.init(
  {
    aa_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    account_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    admin_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "account_admin",
    freezeTableName: true,
    timestamps: false,
    paranoid: false,
  }
);

module.exports = AccountAdminModel;