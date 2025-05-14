const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
const board = Array(9).fill(null);

cells.forEach(cell => {
    cell.addEventListener('click', handleClick);
});

function handleClick(event) {
    const index = event.target.dataset.index;
    if (board[index] !== null) return;
    board[index] = currentPlayer;
    event.target.textContent = currentPlayer;
    if (checkWinner()) {
        alert(`${currentPlayer} wins!`);
        resetGame();
    } else if (board.every(cell => cell !== null)) {
        alert('Draw!');
        resetGame();
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    return winningCombinations.some(combination => {
        return combination.every(index => board[index] === currentPlayer);
    });
}

function resetGame() {
    board.fill(null);
    cells.forEach(cell => {
        cell.textContent = '';
    });
    currentPlayer = 'X';
}