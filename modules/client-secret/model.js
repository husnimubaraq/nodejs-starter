const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../../configs/database");

class ClientSecretModel extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}

ClientSecretModel.init(
  {
    cs_id: {
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      primaryKey: true
    },
    cs_code: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    cs_am_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    cs_created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    cs_created_by: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    cs_updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    cs_updated_by: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    cs_created_at_system: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    cs_updated_at_system: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "client_secret",
    createdAt: "cs_created_at_system",
    updatedAt: "cs_updated_at_system",
    freezeTableName: true,
    timestamps: false,
    paranoid: false,
  }
);

module.exports = ClientSecretModel;