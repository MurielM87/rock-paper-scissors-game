const SCISSOR = 'scissors', PAPER = 'paper', ROCK = 'rock';
const moves = ['scissors', 'paper', 'rock'];
const options = document.querySelector('.game_options');
const message = document.getElementById('message');
const playerOneImg = document.querySelector('.player_1_choice img');
const playerTwoImg = document.querySelector('.player_2_choice img');

let playerOneMove = playerTwoMove = "";

function getRandomMove() {
    return moves[Math.floor(Math.random() * 3)];
}
options.addEventListener('click', (e) => {
    playerTwoMove = getRandomMove();
    playerOneMove = e.target.dataset.id;
    options.style.pointerEvents = 'none';
    console.log(playerOneMove, playerTwoMove);
    playerOneImg.src = `./images/${playerOneMove}.png`;
    playerOneImg.classList.remove('animate_1');
    playerTwoImg.src = `./images/${playerTwoMove}.png`;
    playerTwoImg.classList.remove('animate_2');
    checkWinner();
});
function checkWinner() {
    if(playerOneMove === playerTwoMove) {
        message.innerHTML = 'draw';
    } else if((playerOneMove === SCISSOR && playerTwoMove === PAPER) || (playerOneMove === PAPER && playerTwoMove === ROCK) || (playerOneMove === ROCK && playerTwoMove === SCISSOR)) {
        message.innerHTML = 'you win !'
    } else {
        message.innerHTML = 'you lose !'
    }
    restart();
}
function restart() {
    setTimeout(() => {
        playerTwoMove = getRandomMove();
        message.innerHTML = 'Start';
        playerOneImg.src = `./images/hand.png`;
        playerOneImg.classList.add('animate_1');
        playerTwoImg.src = `./images/hand.png`;
        playerTwoImg.classList.add('animate_2');
        options.style.pointerEvents = '';
    }, 2000)
}