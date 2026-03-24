function calculateSalary(basic, hra, bonus) {
    return basic + hra + bonus;
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter Basic Salary: ", (basic) => {
    rl.question("Enter HRA: ", (hra) => {
        rl.question("Enter Bonus: ", (bonus) => {

            const total = calculateSalary(
                parseFloat(basic),
                parseFloat(hra),
                parseFloat(bonus)
            );

            console.log("\nTotal Salary:", total);

            rl.close();
        });
    });
});