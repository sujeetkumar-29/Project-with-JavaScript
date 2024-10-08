const drumPads = document.querySelectorAll('.drum-pad');
const sounds = {
    '65': 'clap',
    '83': 'hihat',
    '68': 'kick',
    '70': 'openhat',
    '71': 'boom',
    '72': 'ride',
    '74': 'snare',
    '75': 'tom',
    '76': 'tink',
};

drumPads.forEach(pad => {
    pad.addEventListener('click', () => {
        playSound(pad.getAttribute('data-key'));
        
    });
});

document.addEventListener('keydown', event => {
    const key = event.keyCode.toString();
    // console.log(key);
    if (sounds[key]) {
        playSound(key);
        for (let i = 0; i < drumPads.length; i++) {
            if (drumPads[i].getAttribute('data-key') === key) {
                drumPads[i].classList.add('playing');
                setTimeout(() => {
                    drumPads[i].classList.remove('playing');
                }, 200);
            }
        }
    }

});

function playSound(key) {
    const audio = new Audio(`sounds/${sounds[key]}.wav`);
    audio.play();
   
}