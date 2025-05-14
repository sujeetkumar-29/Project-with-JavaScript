const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let score = 0;

const randomTime = (min, max) => Math.round(Math.random() * (max - min) + min);

const randomHole = (holes) => {
    let hole;
    do {
        hole = holes[Math.floor(Math.random() * holes.length)];
    } while (hole === lastHole);
    lastHole = hole;
    return hole;
};

const peep = () => {
    const time = randomTime(200, 1000);
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
        if (!timeUp) peep();
    }, time);
};

const startGame = () => {
    scoreBoard.textContent = `SCORE: ${score}`;
    timeUp = false;
    score = 0;
    peep();
    setTimeout(() => timeUp = true, 50000);
    
};
const stopGame = () => {
    timeUp = true;
    holes.forEach(hole => hole.classList.remove('up'));
    
};

const whack = (e) => {
    if (!e.isTrusted) return;
    score++;
    e.target.parentNode.classList.remove('up');
    scoreBoard.textContent = `SCORE: ${score}`;
};

moles.forEach(mole => mole.addEventListener('click', whack));