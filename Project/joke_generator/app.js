

function jokeGenerator(){
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => {
        const joke = data.value;
        document.getElementById('joke').innerHTML = joke;
    })
}

window.onload = jokeGenerator;