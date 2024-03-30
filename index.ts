#! /usr/bin/env node

import inquirer from "inquirer";

const gusseNumber = await inquirer.prompt([
  {
    message: "gusse a number 1 to 10 :",
    name: "userGussedNumber",
    type: "number",
  },
]);

let randonNumber = Math.floor(Math.random() * 10 + 1);

if (gusseNumber.userGussedNumber === randonNumber) {
  console.log("congratulation you gussed correct number ");
} else if (gusseNumber.userGussedNumber > 10) {
  console.log("please gusse number between 1 to 10");
} else {
  console.log("Try again!");
}
