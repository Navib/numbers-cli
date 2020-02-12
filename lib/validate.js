const moment = require("moment");

const err = new Error({
  message: "Date contains letters or is not a valid date",
  value: "validation flag",
  isValid: false
});

function hasLetters(str) {
  var letters = /^[A-Za-z]+$/;
  if (str.match(letters)) {
    return true;
  }
  return false;
}

function validateDate(res) {
  const date = res;
  const isValid = moment(
    date,
    ["MM/DD/YYYY", "MM/D/YYYY", "M/DD/YYYY", "M/D/YYYY", "M/DD/YYYY"],
    true
  ).isValid();
  if (hasLetters(date) || !isValid) return err;
  else return true;
}

module.exports = validateDate;
