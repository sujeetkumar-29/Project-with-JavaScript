

function keyCodeWithPress(){
    document.addEventListener("keydown",(e)=>{
        console.log(e.key);
        console.log(e.code);
        console.log(e.keyCode);
    })
}
keyCodeWithPress();