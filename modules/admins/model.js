const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../../configs/database");

class AdminModel extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}

AdminModel.init(
  {
    admin_id: {
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      primaryKey: true
    },
    admin_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    admin_created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    admin_created_by: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    admin_updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    admin_updated_by: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    admin_created_at_system: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    admin_updated_at_system: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "admin",
    createdAt: "admin_created_at_system",
    updatedAt: "admin_updated_at_system",
    freezeTableName: true,
    timestamps: false,
    paranoid: false,
  }
);

module.exports = AdminModel;