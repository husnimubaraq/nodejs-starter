const JWT = require("jsonwebtoken");

module.exports = {
  encoded: (value) => {
    return Buffer.from(value).toString("base64");
  },
  decoded: (value) => {
    return Buffer.from(value, "base64").toString();
  },
  decodePayload: (token) => {
    if (!token) return null;

    return JWT.decode(token);
  },
  formatBytes: (bytes, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  },
  addLeadingZeros: (num, totalLength) => {
    return String(num).padStart(totalLength, "0");
  },
  convertToMoney: (data = 0, prefix = "Rp") => {
    return `${prefix}${data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
  },
  convertToKilo: (data = 0) => {
    return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  },
};