#!/usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([{
        name: "numberone",
        type: "number",
        message: "Kindly enter your first no:"
    },
    {
        name: "numbertwo",
        type: "number",
        message: "Kindly enter your first no:"
    },
    {
        name: "operator",
        type: "list",
        choices: ["*", "/", "-", "+", "%"],
        message: "Select operator:"
    },
]);
const { numberone, numbertwo, operator } = answers;
if (numberone && numbertwo && operator) {
    let result = 0;
    if (operator === "+") {
        result = numberone + numbertwo;
    }
    else if (operator === "-") {
        result = numberone - numbertwo;
    }
    else if (operator === "*") {
        result = numberone * numbertwo;
    }
    else if (operator === "/") {
        result = numberone / numbertwo;
    }
    else if (operator === "%") {
        result = numberone % numbertwo;
    }
    console.log("Your result is:", result);
}
else {
    console.log("Kindly enter your valid input");
}
