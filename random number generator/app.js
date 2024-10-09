function generatePassword(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=";
    let password = "";

    for (let i = 0; i < length; i++) {
        password = password + characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return password;
}

// Example usage:
const password = generatePassword(8);

console.log(password);