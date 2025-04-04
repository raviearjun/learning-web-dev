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
    const nRounds = document.querySelector('#nRounds').value; // mengembalikan nilai string
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    scoreBoard.textContent = `${p1Display.textContent} to ${p2Display.textContent}`
    if(p1Score + p2Score == nRounds){ // (num + num == string) aman saja karena dalam js == lebih fleksibel dibandingkan ===
        setTimeout(() => {
            alert("Game Over! The winner is " + (p1Score > p2Score ? "Player 1" : "Player 2"));
            if(p1Score > p2Score){
                p1Display.classList.add('winner');
                p2Display.classList.remove('winner');
            }
            else if(p2Score > p1Score){
                p2Display.classList.add('winner');
                p1Display.classList.add('loser');
            }
            p1Display.innerText = 0;
            p2Display.innerText = 0;
            scoreBoard.innerText = `${p1Display.innerText} to ${p2Display.innerText}`
            p1Score = 0;
            p2Score = 0;

        }, 0);
        
    }
    console.log(p1Score+p2Score, nRounds)
}

resetBtn.addEventListener('click', () => {
    p1Score = 0;
    p2Score = 0;
    scoreBoard.innerText = `${p1Score} to ${p2Score}`
    p1Display.classList.remove('winner', 'loser');
    p2Display.classListremove('winner', 'loser');
})