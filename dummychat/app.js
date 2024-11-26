let sender=document.querySelector(".sender");
let input=document.querySelector("input");

let button=document.querySelector("button");

button.addEventListener("click",()=>{
    let text=input.value;
    console.log("button clicked!");
    console.log(text);
    input.value="";
})

