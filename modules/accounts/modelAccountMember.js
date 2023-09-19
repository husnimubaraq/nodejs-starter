const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../../configs/database");

class AccountMemberModel extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}

AccountMemberModel.init(
  {
    am_id: {
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      primaryKey: true
    },
    account_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    member_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "account_member",
    freezeTableName: true,
    timestamps: false,
    paranoid: false,
  }
);

module.exports = AccountMemberModel;