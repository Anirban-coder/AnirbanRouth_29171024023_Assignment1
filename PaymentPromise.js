function payment(status) {
    return new Promise((resolve, reject) => {
        if (status) resolve("Payment Successful");
        else reject("Payment Failed");
    });
}

payment(true)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));