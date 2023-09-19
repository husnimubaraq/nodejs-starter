require("dotenv").config();
const JWT = require("jsonwebtoken");
const _ = require("lodash");

const { response } = require("../utils");

module.exports = {
  authUser: (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization;
  
    if (!authHeader?.startsWith("Bearer ")) return response.Errors(res, 401, "Unauthorized.", [{ detail: "you are not authorized to access this data" }]);
  
    const token = authHeader.split(" ")[1];
  
    JWT.verify(token, process.env.APP_SECRET, (err, decoded) => {
      if (err) return response.Errors(res, 403, "Forbidden.", [{ detail: "your token has expired or not authorized token" }]);
      
      let keyAccountDetail = [];
      let accountDetail = {};
      let isEmpty = _.isEmpty(decoded.data.account_detail);

      if (!isEmpty) {
        keyAccountDetail = Object.keys(decoded.data.account_detail);
        accountDetail = keyAccountDetail.reduce((prev, current) => {
          const keys = current.split("_");
          return { ...prev, [keys.length === 1 ? keys : keys.slice(1).join("_")]: decoded.data.account_detail[current]}
        }, {});
      }

      req.account = decoded;
      req.account.user_id = decoded.data.account_id;
    //   req.account.school_id = isEmpty ? null : accountDetail.school_id;

      // console.log(decoded)

      next();
    });
  },
  authRole: (req, res, next) => {
    let { data } = req.account;
    let role = data.account_role_type;

    if (role !== "admin") return response.Errors(res, 401, "Unauthorized.", [{ detail: "your role are not authorized to access this data" }]);

    next();
  },
};