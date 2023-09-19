const { Op } = require("sequelize");
const SHA256 = require("crypto-js/sha256")
const { toString, isNull, isEmpty } = require("lodash");
const jwt = require("jsonwebtoken");
const moment = require("moment");

const { response } = require("../../../utils");

const { 
  accountModel: AccountModel, 
  accountAdminModel: AccountAdminModel,
  accountMemberModel: AccountMemberModel,
  adminModel: AdminModel,
  memberModel: MemberModel
} = require("../../../models");

const login = async (req, res) => {
  try {

    if (isEmpty(req.body.username)) {
      return response.Errors(res, 422, "Failed to logged in.", [{ detail: "username is required" }]);
    }

    if (isEmpty(req.body.password)) {
      return response.Errors(res, 422, "Failed to logged in.", [{ detail: "password is required." }]);
    }

    var account = await AccountModel.findOne({
      where: {
        account_username: {
          [Op.eq]: req.body.username,
        }
      }
    })

    if (isNull(account)) {
      return response.Errors(res, 422, "Failed to logged in.", [{ detail: "account is not found" }]);
    }

    const password = toString(SHA256(req.body.password + account.account_salt))

    if (password != account.account_password) {
      return response.Errors(res, 422, "Failed to logged in.", [{ detail: "password is wrong." }]);
    }

    var account_detail = {}
    switch (account.account_role_type) {
      case "member":
        var account_member = await AccountMemberModel.findOne({
          where: {
            account_id: {
              [Op.eq]: account.account_id,
            }
          },
        })

        if (isNull(account_member)) {
          return response.Errors(res, 422, "Failed to logged in.", [{ detail: "account type member is not mapped with member." }]);
        }

        if (account_member.member_id == 0) {
          return response.Errors(res, 422, "Failed to logged in.", [{ detail: "account type member is not mapped with member." }]);
        }

        var member = await MemberModel.findOne({
          where: {
            member_id: {
              [Op.eq]: account_member.member_id,
            }
          },
        })

        if (isNull(member)) {
          return response.Errors(res, 422, "Failed to logged in.", [{ detail: "account type member is not mapped with member." }]);
        }

        account_detail = { ...member.dataValues };
        break;
      case "admin":
        var account_admin = await AccountAdminModel.findOne({
          where: {
            account_id: {
              [Op.eq]: account.account_id,
            }
          },
        });

        if (isNull(account_admin)) {
          return response.Errors(res, 422, "Failed to logged in.", [{ detail: "account type admin is not mapped with admin." }]);
        }

        if (account_admin.parent_id == 0) {
          return response.Errors(res, 422, "Failed to logged in.", [{ detail: "account type admin is not mapped with admin." }]);
        }

        var admin = await AdminModel.findOne({
          where: {
            admin_id: {
              [Op.eq]: account_admin.admin_id,
            }
          },
        });

        if (isNull(admin)) {
          return response.Errors(res, 422, "Failed to logged in.", [{ detail: "account type admin is not mapped with admin." }]);
        }

        account_detail = admin;
        break;
      default:
        break;
    }

    var token = jwt.sign({
      data: {
        account_id: account.account_id,
        account_username: account.account_username,
        account_role_id: account.account_role_id,
        account_role_type: account.account_role_type,
        account_profile_url: account.account_profile_url,
        account_detail: account_detail,
      }
    // }, process.env.APP_SECRET, { expiresIn: +process.env.APP_EXPIRED * 60 });
    }, process.env.APP_SECRET, { expiresIn: process.env.APP_EXPIRED });

    var refresh_token = jwt.sign({
      data: {
        account_id: account.account_id,
        account_username: account.account_username,
        account_role_id: account.account_role_id,
        account_role_type: account.account_role_type,
        account_detail: account_detail,
      }
    // }, process.env.APP_REFRESH_SECRET, { expiresIn: +process.env.APP_REFRESH_EXPIRED * 60 });
    }, process.env.APP_REFRESH_SECRET, { expiresIn: process.env.APP_REFRESH_EXPIRED });



    await AccountModel.update({ account_updated_at_system: moment.tz('Asia/Jakarta').format(), account_refresh_token: refresh_token }, {
      where: {
        account_username: {
          [Op.eq]: req.body.username,
        }
      }
    })

    return response.Success(res, 201, "Login successful", { token: token, refresh_token: refresh_token, exp: +process.env.APP_EXPIRED * 60 });
  } catch (err) {
    console.log("CONTROLLER-LOGIN, ", err);
    return response.Errors(res, 400, "Failed to logging in.", [{ detail: "Failed to logging in. Please try again" }]);
  }
};

module.exports = login;