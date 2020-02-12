const prompts = require("prompts");
const chalk = require("chalk");
const validate = require("./validate");
const conversion = require("./conversion");
const fullDate = require("./cli/fullDate");

async function promptDate(err) {
  let msg = chalk.blue("Enter the date (DD/MM/YYYY)");
  if (err) {
    msg = chalk.red(err);
  }
  const response = await prompts({
    type: "text",
    name: "date",
    message: msg
  });

  const date = response.date;

  try {
    validate(date);
  } catch (err) {
    promptDate(err);
  } finally {
    fullDate(date);
  }
}

module.exports = {
  promptDate: promptDate
};
