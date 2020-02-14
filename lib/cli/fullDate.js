const chalk = require("chalk");
const getMoments = require("./../getMoments");
const conversion = require("./../conversion");

const {
  getDay,
  getMonth,
  getYear,
  yearsAgo,
  dayOfMonth,
  dayOfYear
} = getMoments;
const LABEL = "is a date with these properties:";

function fullDate(date) {
  if (!date) return false;

  const day = getDay(date);
  const month = getMonth(date);
  const year = getYear(date);
  const yearsPast = yearsAgo(date);

  if (day && month && year) {
    console.log(
      chalk.blue(`${day}, ${month} ${dayOfMonth(date)} ${year} ${LABEL}`)
    );
    console.log(chalk.blue(`Time From current date: ${yearsPast}`));
    console.log(
      chalk.blue(`numerology (D+D+M+M+Y+Y+Y+Y) of ${conversion(date)}`)
    );
    console.log(chalk.blue(`It is day number ${dayOfYear(date)} of the year`));
    console.log(
      chalk.blue(
        `leaving ${365 - parseInt(dayOfYear(date))} days left in the year`
      )
    );
  }
}

module.exports = fullDate;
