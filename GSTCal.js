const calculateGST = (amount, gstRate) =>amount + (amount * gstRate / 100);

console.log(calculateGST(1000, 18));