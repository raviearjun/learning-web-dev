const firstButton = document.querySelector('#btn1');
const secondButton = document.querySelector('#btn2');
const thirdButton = document.querySelector('#btn3');
const fourthButton = document.querySelector('#btn4');

firstButton.onclick = () => {
    console.log('you clicked me');
}
function click(){
    console.log('you clicked me too');
}
secondButton.onclick = click;

const scream = () => {
    console.log('AAAAAAH! Dont click me!');
}
const badWords = () => {
    console.log('Fuck you!');
}

thirdButton.addEventListener('click', scream);
fourthButton.addEventListener('click', badWords);

