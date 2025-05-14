const name=document.querySelector('#name');
const bio=document.querySelector('#bio');
const followers=document.querySelector('#followers');
const following=document.querySelector('#following');
const repos=document.querySelector('#repos');
const avatar=document.querySelector('#avatar');
const loginDate=document.querySelector('#loginDate');
const lastOnline=document.querySelector('#lastOnline');
const profileLink=document.querySelector('#profileLink');


function findUser(){
    let usernameInput = document.querySelector('#username');
    let username = usernameInput.value;
    if(username === ''){
        alert('Please enter a username');
        return;
    }
    fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(data => {
        if(data.message === 'Not Found'){
            alert('User not found');
            return;
        }
        console.log(data);
        usernameInput.value= '';
        avatar.src = data.avatar_url;
        name.innerHTML = data.name;
        bio.innerHTML=data.bio;
        followers.innerHTML = data.followers;
        following.innerHTML = data.following;
        repos.innerHTML = data.public_repos;
        loginDate.innerHTML = new Date(data.created_at).toDateString();
        lastOnline.innerHTML =new Date(data.updated_at).toDateString(); 
        profileLink.href = data.html_url;
    
    })
    .catch(error => console.log(error));


    
}


