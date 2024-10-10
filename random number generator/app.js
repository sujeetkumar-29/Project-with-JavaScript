let pass=document.querySelector("#password");
let genPass=document.querySelector(".genPass");
let lowerCase=document.querySelector(".lowerCase").checked;
let upperCase=document.querySelector(".upperCase").checked;
let specialChar=document.querySelector(".specialChar").checked;
let numbers=document.querySelector(".numbers").checked;
// let length=" ";
let length=document.querySelector(".length").value;
function generatePassword(length) {
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const lowerCase="abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChar="!@#$%^&*()_+-=";
    let password = "";
    if(!upperCase){

        for (let i = 0; i < length; i++) {
            password = password + upperCase.charAt(Math.floor(Math.random() * upperCase.length));
        }
    }
    if(!lowerCase){
         for (let i = 0; i < length; i++) {
        password = password + lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
    }
    }
   if(!specialChar){
    for (let i = 0; i < length; i++) {
        password = password + specialChar.charAt(Math.floor(Math.random() * specialChar.length));
    }
   }
    if(!numbers){
         for (let i = 0; i < length; i++) {
        password = password + numbers.charAt(Math.floor(Math.random() * numbers.length));
    }

    }
   
    console.log(length);
    return password;
}
// Example usage:
genPass.addEventListener("click",()=>{
   
    const password = generatePassword(length);
    console.log("generated password clicked!");
    pass.value=password;
})
// console.log(password);