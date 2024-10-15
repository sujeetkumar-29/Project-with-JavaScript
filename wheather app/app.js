let button=document.querySelector("button");
button.addEventListener("click",()=>{
    let input=document.querySelector("input");
    let text=input.value;
    let result=document.querySelector("#result");
    result.textContent=text.toUpperCase();
    
})