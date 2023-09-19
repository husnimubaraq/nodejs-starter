const _ = require("lodash");

const model = require("./model");

const { response } = require("../../utils");

module.exports = {
    find: async (req, res) => {
      try {
        const query = {
          order: [["cs_id", "DESC"]]
        };

        const { count, rows } = await model.findAndCountAll(query);

        const message = count !== 0 ? `Entities found with ${count} records` : "There is no record found";

        return response.Success(res, 200, message, rows);
      } catch (err) {
        return response.Errors(res, 500,  err.message, [{ detail: err }]);
      }
    },
    findByAccount: async (req, res) => {
        let { params, query, cookies } = req;
        let { data, user_id } = req.account;
        let loginUsername = data.account_username;
        let role = data.account_role_type;
        let requestedUsername = params.username;
        let dataFormatted = [];
    
        try {
          if (loginUsername !== requestedUsername) return response.Errors(res, 422, "Failed to process.", [{ detail: "invalid selected account" }]);
    
          const data = await model.findOne({
            where: { cs_am_id: user_id },
          });
    
          return response.Success(res, 200, "Entity found", data);
        } catch (err) {
          return response.Errors(res, 500, err.message, { detail: err });
        }
    },
    
}