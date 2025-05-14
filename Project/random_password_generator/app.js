let pass = document.querySelector("#password");
let withLowerCase = document.querySelector(".lowerCase");
let withUpperCase = document.querySelector(".upperCase");
let withSpecialChar = document.querySelector(".specialChar");
let withNumbers = document.querySelector(".numbers");
let genPass = document.querySelector(".genPass");

// let length=" ";
function generatePassword() {
    let length = document.querySelector(".length").value;


    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChar = "!@#$%^&*()_+-=";
    let char = "";
    if (withUpperCase.checked) {
        char += upperCase;
    }
    if (withLowerCase.checked) {
        char += lowerCase;
    }
    if (withSpecialChar.checked) {
        char += specialChar;
    }
    if (withNumbers.checked) {
        char += numbers;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        password += char.charAt(Math.floor(Math.random() * char.length));
    }

    return password;
}

genPass.addEventListener("click", () => {

    const password = generatePassword();
    // console.log("generated password clicked!");
    pass.value = password;
})
