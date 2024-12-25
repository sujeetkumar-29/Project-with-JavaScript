
function findUser(){
    let username = document.querySelector('#username').value;
    console.log(username);
    fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
}

