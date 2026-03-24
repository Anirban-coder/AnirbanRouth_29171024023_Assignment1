function placeOrder(order, callback) {
    console.log("Order placed:", order);
    callback();
}

function processOrder() {
    console.log("Order is being processed...");
}

placeOrder("Pizza", processOrder);