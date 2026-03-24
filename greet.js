function greet(name = "Guest", time = "Good Morning") {
    return `${time}, ${name}!`;
}

console.log(greet("Anirban", "Good Evening"));
console.log(greet());