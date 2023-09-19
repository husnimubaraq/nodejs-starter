const deromanize = require("deromanize");

module.exports = {
  compareNumerals: (numA, numB) => {
    if (numA < numB) {
      return -1;
    } else if (numA > numB) {
      return 1;
    } else {
      return 0;
    }
  },
  compareRomanNumerals: (a, b) => {
    const numA = deromanize(a);
    const numB = deromanize(b);

    if (numA < numB) {
      return -1;
    } else if (numA > numB) {
      return 1;
    } else {
      return 0;
    }
  },
};