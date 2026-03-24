function fetchOrder() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ orderId: 101, item: "Laptop" });
        }, 2000);
    });
}

async function getOrderDetails() {
    const order = await fetchOrder();
    console.log(order);
}

getOrderDetails();