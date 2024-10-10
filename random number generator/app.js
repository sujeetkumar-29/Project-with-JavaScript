let pass=document.querySelector("#password");
let withLowerCase=document.querySelector(".lowerCase").checked;
let withUpperCase=document.querySelector(".upperCase").checked;
let withSpecialChar=document.querySelector(".specialChar").checked;
let withNumbers=document.querySelector(".numbers").checked;
let genPass=document.querySelector(".genPass");

let length=document.querySelector(".length").value;
// let length=" ";
function generatePassword(length) {
  
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase="abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChar="!@#$%^&*()_+-=";
    let password = "";
    if(withUpperCase){

        for (let i = 0; i < length; i++) {
            password = password + upperCase.charAt(Math.floor(Math.random() * upperCase.length));
        }
    }
    if(withLowerCase){
         for (let i = 0; i < length; i++) {
        password = password + lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
    }
    }
   if(withSpecialChar){
    for (let i = 0; i < length; i++) {
        password = password + specialChar.charAt(Math.floor(Math.random() * specialChar.length));
    }
   }
    if(withNumbers){
         for (let i = 0; i < length; i++) {
        password = password + numbers.charAt(Math.floor(Math.random() * numbers.length));
    }

    }
   
    return password;
}
// console.log(length);
// Example usage:
genPass.addEventListener("click",()=>{
   
    const password = generatePassword(length);
    console.log("generated password clicked!");
    pass.value=password;
})
// console.log(password);