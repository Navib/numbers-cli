const moment = require("moment");

const config = ["MM/DD/YYYY", "MM/D/YYYY", "M/DD/YYYY", "M/D/YYYY"];

function getDay(data) {
  const date = moment(data, config);
  const day = date.format("dddd");
  return day;
}

function getMonth(data) {
  const date = moment(data, config);
  const month = date.format("MMMM");
  return month;
}

function getYear(data) {
  const date = moment(data, config);
  const year = date.format("YYYY");
  return year;
}

function yearsAgo(data) {
  const date = moment(data, config);
  const yearsAgo = date.fromNow();
  return yearsAgo;
}

function dayOfMonth(d) {
  return d.split("/")[1];
}

function dayOfYear(d) {
  const date = moment(d, config);

  return date.dayOfYear();
}

module.exports = {
  getDay: getDay,
  getMonth: getMonth,
  getYear: getYear,
  yearsAgo: yearsAgo,
  dayOfMonth: dayOfMonth,
  dayOfYear: dayOfYear
};
