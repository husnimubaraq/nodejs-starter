
const _ = require("lodash");

const model = require("./model");
const { memberModel } = require("../../models")
const { response } = require("../../utils");

module.exports = {
  findOne: async (req, res) => {
    let { data } = req.account;

    try {
      return response.Success(res, 200, "Entity found", {});
    } catch (err) {
      return response.Errors(res, 500, err.message, { detail: err });
    }
  },
  findProfileByAccount: async (req, res) => {
    let { params } = req;
    let { data } = req.account;
    let loginUsername = data.account_username;
    let role = data.account_role_type;
    let requestedUsername = params.username;
    let dataFormatted = {};

    const relation = [
      {
        role: "member",
        include: [
          { model: memberModel, as: "member" },
        ],
      }
    ];

    try {
      if (loginUsername !== requestedUsername) return response.Errors(res, 422, "Failed to process.", [{ detail: "invalid selected account" }]);

      const data = await model.findOne({
        where: { account_username: loginUsername },
        include: relation.find((item) => item.role === role)?.include || [],
      });

      if (!data) return response.Errors(res, 404, "Entity not found");

      const sanitizeDataAccount = _.omit(data.dataValues, ["account_password", "account_salt", "account_role_id", "member", "account_role_type", "account_refresh_token"]);

      // rename keys account
      const keysAccount = Object.keys(sanitizeDataAccount);
      const dataAccount = keysAccount.reduce((prev, current) => {
        const keys = current.split("_");
        return { ...prev, [keys.length === 1 ? keys : keys.slice(1).join("_")]: sanitizeDataAccount[current]}
      }, {});

      dataFormatted = { ...dataAccount };

      if (role === "member") {

      }

      return response.Success(res, 201, "Entity found", dataFormatted);
    } catch (err) {
      return response.Errors(res, 500, err.message, { detail: err });
    }
  },
};
