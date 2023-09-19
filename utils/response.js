module.exports = {
    Success: (res, code, message, data, meta = null) => {
      return res.status(code).json({
        status: {
          code: "success",
          message,
        },
        data,
        meta,
      });
    },
    Errors: (res, code, message, errors = null) => {
      const errMessage = message || "Some error occured while processing data";
  
      return res.status(code).json({
        status: {
          code: "failed",
          message: errMessage,
        },
        errors,
      });
    },
  };