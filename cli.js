#!user/bin/env node
const figlet = require("figlet");
const prompt = require("./lib/prompt");

// const argv = require("yargs").argv;
// if (argv.ships > 3 && argv.distance < 53.5) {
//   console.log("Plunder more riffiwobbles!");
// } else {
//   console.log("Retreat from the xupptumblers!");
// }

const { promptDate } = prompt;

function app() {
  try {
    promptDate();
  } catch (err) {
    throw err;
  }
}
function cli() {
  figlet.text(
    "Dates",
    {
      font: "Peaks",
      horizontalLayout: "default",
      verticalLayout: "default"
    },
    function(err, data) {
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      console.log(data);
      app();
    }
  );
}

cli();

module.exports = cli;
