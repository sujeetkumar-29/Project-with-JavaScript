let key=document.querySelector("#key");
let keyCode=document.querySelector("#keyCode");
let code=document.querySelector("#code");

function keyCodeWithPress(){
    document.addEventListener("keydown",(event)=>{
        key.value=event.key;
        if(key.value==" "){
            key.value="space";
        }
        keyCode.value=event.code;
        code.value=event.keyCode;
    })
}
keyCodeWithPress();


