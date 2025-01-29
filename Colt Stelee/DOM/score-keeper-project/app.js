const player1 = document.querySelector('#p1Button');
const player2 = document.querySelector('#p2Button');
const scoreBoard = document.querySelector('#scoreBoard');
const resetBtn = document.querySelector('#resetBtn');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
let p1Score = 0, p2Score = 0;

player1.addEventListener('click', () => {
    p1Score++;
    addScore();
})

player2.addEventListener('click', () => {
    p2Score++;
    addScore();
})

const addScore = () => {
    const nRounds = document.querySelector('#nRounds').value;
    p1Display.innerText = p1Score;
    p2Display.innerText = p2Score;
    scoreBoard.innerText = `${p1Display.innerText} to ${p2Display.innerText}`
    if(p1Score + p2Score == nRounds){
        setTimeout(() => {
            alert("Game Over! The winner is " + (p1Score > p2Score ? "Player 1" : "Player 2"));
            p1Display.innerText = 0;
            p2Display.innerText = 0;
            scoreBoard.innerText = `${p1Display.innerText} to ${p2Display.innerText}`
        }, 0);
        
    }
    console.log(p1Score+p2Score, nRounds)
}

resetBtn.addEventListener('click', () => {
    p1Score = 0;
    p2Score = 0;
    scoreBoard.innerText = `${p1Score} to ${p2Score}`

})