const models = {
  accountModel: require("./modules/accounts/model"),
  accountAdminModel: require("./modules/accounts/modelAccountAdmin"),
  accountMemberModel: require("./modules/accounts/modelAccountMember"),
  adminModel: require("./modules/admins/model"),
  memberModel: require("./modules/members/model"),
  clientSecretModel: require("./modules/client-secret/model"),
};

// Relationships between tables accounts

models.accountModel.belongsToMany(models.adminModel, { through: models.accountAdminModel, as: "admin", foreignKey: "account_id" });
models.adminModel.belongsToMany(models.accountModel, { through: models.accountAdminModel, as: "account", foreignKey: "admin_id" });

models.accountModel.belongsToMany(models.memberModel, { through: models.accountMemberModel, as: "member", foreignKey: "account_id" });
models.memberModel.belongsToMany(models.accountModel, { through: models.accountMemberModel, as: "account", foreignKey: "member_id" });

module.exports = models;