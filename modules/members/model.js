const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../../configs/database");

class MemberModel extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}

MemberModel.init(
  {
    member_id: {
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      primaryKey: true
    },
    member_code: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    member_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    member_phone: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    member_email: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    member_created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    member_created_by: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    member_updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    member_updated_by: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    member_created_at_system: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    member_updated_at_system: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "member",
    createdAt: "member_created_at_system",
    updatedAt: "member_updated_at_system",
    freezeTableName: true,
    timestamps: false,
    paranoid: false,
  }
);

module.exports = MemberModel;