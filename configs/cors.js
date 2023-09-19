require("dotenv").config();

const whitelist = [];

// Localhost
if (process.env.NODE_ENV === "development") {
  whitelist.push(
    "http://localhost",
    "http://localhost:3000",
    "http://192.121.99.11:3000",
    "http://192.121.99.31:3000",
  );
}

// Main Domain
whitelist.push(
  ""
);

const corsoption = {
  origin: function (origin, callback) {
    if (process.env.NODE_ENV === "development") console.log("[ORIGIN]: ", origin);

    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback("Cors block, You shall not pass! :Gandalf", true);
    }
  },
  methods: ["GET","POST","PUT","DELETE","OPTION"],
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

module.exports = { whitelist, corsoption };