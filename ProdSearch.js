const products = ["Laptop", "Mobile", "Mouse", "Keyboard"];

const search = "Mo";

const result = products.filter(p => p.toLowerCase().includes(search.toLowerCase()));

console.log(result);