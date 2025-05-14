// const sing = async () => {
//     throw new Error("I am an error"); 
//     return "Haii broooo";
// }

// sing()
//     .then((result) => {
//         console.log("the promise resolved with", result);
//     })
//     .catch((err) => {
//         console.log(err);
// })

const login = async (username, passwrod) => {
    console.log("Checking username and password...");
    if(!username || ! passwrod){
        throw new Error("Username and Password are required");
    }
    if(passwrod === "password"){
        return "Welcome back!";
    }
    throw new Error("Invalid Password");
}

login("Ravie", "password")
    .then((result) => {
        console.log("Login success!", result);
    })
    .catch((err) => {
        console.log("Login failed!", err);
    })