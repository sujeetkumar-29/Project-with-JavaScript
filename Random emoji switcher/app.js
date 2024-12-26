const emoji = document.querySelector('#emoji');

function emojiFetcher() {
  fetch('https://api.github.com/emojis')
    .then((response) => response.json())
    .then((data) => {
        // console.log(data);
      const emojis = Object.keys(data);
      const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
      emoji.src = data[randomEmoji];
    });
}
window.onload = emojiFetcher;
emoji.addEventListener('click', emojiFetcher);
emoji.addEventListener('mouseover', emojiFetcher);