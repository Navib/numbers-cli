const moment = require("moment");

const config = [
  "MM/DD/YYYY",
  "MM/D/YYYY",
  "M/DD/YYYY",
  "M/D/YYYY",
  "M/DD/YYYY"
];

function getDay(data) {
  const date = moment(data, config);
  const day = date.format("dddd");
  return day;
}

function getMonth(data) {
  const date = moment(data, config);
  const day = date.format("MMMM");
  return day;
}

function getYear(data) {
  const date = moment(data, config);
  const day = date.format("YYYY");
  return day;
}

module.exports = {
  getDay: getDay,
  getMonth: getMonth,
  getYear: getYear
};
