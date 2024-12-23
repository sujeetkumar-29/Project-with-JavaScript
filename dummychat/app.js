const element = document.querySelector('.chats');
element.scrollTop = element.scrollHeight;
let sender=document.querySelector(".sender");
let reciever=document.querySelector(".reciever");
let input=document.querySelector("input");
let chats=document.querySelector(".chats");

let button=document.querySelector("button");

button.addEventListener("click",()=>{
    let p=document.createElement("p");
    p.innerHTML=input.value;
    p.classList.add("sender");
    
    
   chats.appendChild(p);
    scrollToBottom();
    if(input.value!=""){
        autoMessage();
    }
    input.value="";
    function autoMessage(){
        setTimeout(()=>{
    
            let p=document.createElement("p");
            p.innerHTML="thanks for message";
            p.classList.add("reciever");
            chats.appendChild(p);
            scrollToBottom();
        },1000);
    }
})


function scrollToBottom() {
    // const chatsContainer = document.getElementById('chats');
    chats.scrollTop = chats.scrollHeight;
}

