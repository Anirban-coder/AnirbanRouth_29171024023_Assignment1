function calculateBill(units) {
    let rate = 0;

    if (units <= 100) rate = 5;
    else if (units <= 200) rate = 7;
    else rate = 10;

    return units * rate;
}

console.log("Bill:", calculateBill(150));