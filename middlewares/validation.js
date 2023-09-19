require("dotenv").config();
const Joi = require("joi");

const { response } = require("../utils");

const validation = (schema, property) => { 
  return (req, res, next) => {
    const { value, error } = schema.validate(req[property]);

    if (error) {
      const { details } = error;
      const message = details.map(i => i.message).join(',');
    
      console.log("[ERR_VALIDATE]: ", message);
      return response.Errors(res, 422, "Failed to process.", details); 
    }
    
    next();
  } 
}

module.exports = validation;