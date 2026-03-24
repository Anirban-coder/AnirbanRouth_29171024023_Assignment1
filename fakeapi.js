function fetchUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ name: "Anirban", age: 22 });
        }, 2000);
    });
}

async function getUser() {
    const user = await fetchUser();
    console.log(user);
}

getUser();