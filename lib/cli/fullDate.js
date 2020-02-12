const chalk = require("chalk");
const getMoments = require("./../getMoments");
const conversion = require("./../conversion");

const { getDay, getMonth, getYear } = getMoments;
const LABEL = "is a date with";

function fullDate(date) {
  if (!date) return false;

  const day = getDay(date);
  const month = getMonth(date);
  const year = getYear(date);

  console.log(
    chalk.blue(
      `${day}, ${month} ${year} ${LABEL} ${conversion(date)} numerology`
    )
  );
}

module.exports = fullDate;
