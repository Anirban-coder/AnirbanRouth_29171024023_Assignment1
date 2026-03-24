function calculateFinalPrice(price, discountPercent) {
    const discountAmount = (price * discountPercent) / 100;
    const finalPrice = price - discountAmount;
    return finalPrice;
}


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter Original Price: ", (price) => {
    rl.question("Enter Discount (%): ", (discount) => {

        const final = calculateFinalPrice(
            parseFloat(price),
            parseFloat(discount)
        );

        console.log("\nFinal Price after Discount:", final);

        rl.close();
    });
});