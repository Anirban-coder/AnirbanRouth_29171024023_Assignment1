function login(email, password) {
    const validEmail = "anirouth@gmail.com";
    const validPassword = "1234567";

    if (email === validEmail && password === validPassword) {
        console.log("Login Successful");
    } else {
        console.log("Invalid Credentials");
    }
}

login("anirouth@gmail.com", "1234");