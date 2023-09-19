const rateLimit = require("express-rate-limit");

/**
 * 1. Create a rate limiter
 * 2. Set the limit to 10 requests per minute
 */

const apiLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,         // 1 minutes
  max: 50,                         // limit each IP to 50 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = apiLimiter;