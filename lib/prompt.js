const prompts = require("prompts");
const chalk = require("chalk");
const validate = require("./validate");
const conversion = require("./conversion");
const fullDate = require("./cli/fullDate");

async function promptDate() {
  let msg = chalk.blue("Enter the date (DD/MM/YYYY)");

  const response = await prompts({
    type: "text",
    name: "date",
    message: msg
  });

  const date = response.date;

  try {
    validate(date);
  } catch (err) {
    console.log(chalk.red(err.message));
    var error = err;
  } finally {
    if (error) promptDate();
    else fullDate(date);

    promptDate();
  }
}

module.exports = {
  promptDate: promptDate
};
