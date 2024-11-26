let sender=document.querySelector(".sender");
let input=document.querySelector("input");
let chats=document.querySelector(".chats");

let button=document.querySelector("button");

button.addEventListener("click",()=>{
    let p=document.createElement("p");
    p.innerHTML=input.value;
    p.classList.add("sender");
    
    
   chats.appendChild(p);
    input.value="";
    scrollToBottom();
})


function scrollToBottom() {
    // const chatsContainer = document.getElementById('chats');
    chats.scrollTop = chats.scrollHeight;
}

