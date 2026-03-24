const readline = require('readline');

function checkResult(marks) {
    return marks >= 40 ? "Pass" : "Fail";
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter marks: ", (marks) => {
    const result = checkResult(parseFloat(marks));
    console.log("Result:", result);
    rl.close();
});