require("dotenv").config();
const Joi = require("joi");

module.exports = {
  dataLoginSchema: Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  }),
  dataRegisterSchema: Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    repeat_password: Joi.ref("password"),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
  }).with("password", "repeat_password"),
  dataRefreshTokenSchema: Joi.object({
    refresh_token: Joi.string().pattern(/^[a-zA-Z0-9_\-\.]+$/, "tokens").trim().required()
  }),
};