import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "first number" },
    { message: "Enter second number", type: "number", name: "second number" },
    {
        message: "select one of the operator to perform action",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
// conditional statement
if (answer.operator === "Addition") {
    console.log("The Answer Is:", answer["first number"] + answer["second number"]);
}
else if (answer.operator === "Subtraction") {
    console.log("The Answer Is:", answer["first number"] - answer["second number"]);
}
else if (answer.operator === "Multiplication") {
    console.log("The Answer Is:", answer["first number"] * answer["second number"]);
}
else if (answer.operator === "Division") {
    if (answer["second number"] === 0) {
        console.log("Cannot divide by zero");
    }
    else {
        console.log("The Answer Is:", answer["first number"] / answer["second number"]);
    }
}
else {
    console.log("Invalid Operator Selected");
}
