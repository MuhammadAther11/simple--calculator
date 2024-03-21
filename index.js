#! /usr/bin/env node
import inquirer from "inquirer";
const asnwer = await inquirer.prompt([
    { message: "Enter frist number", type: "number", name: "fristNumber" },
    { message: "Enter second numder", type: "number", name: "secondNumber" },
    {
        message: "select one of the operators to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addation", "Subtraction", "Multiplication", "Division"],
    },
]);
// condational statement
if (asnwer.operator === "Addation") {
    console.log(asnwer.fristNumber + asnwer.secondNumber);
}
else if (asnwer.operator === "Subtraction") {
    console.log(asnwer.fristNumber - asnwer.secondNumber);
}
else if (asnwer.operator === "Multiplication") {
    console.log(asnwer.fristNumber * asnwer.secondNumber);
}
else if (asnwer.operator === "Division") {
    console.log(asnwer.fristNumber / asnwer.secondNumber);
}
else {
    console.log("please select valid operator");
}
