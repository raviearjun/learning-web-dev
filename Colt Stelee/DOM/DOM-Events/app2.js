const changeBtn = document.querySelector('#btn');
const h1 = document.querySelector('h1');
const liveCatName = document.querySelector('#live-cat-name');

changeBtn.addEventListener('click', (e) => {
    console.log(e);
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    const newColor = `rgb(${red}, ${green}, ${blue})`;
    document.body.style.backgroundColor = `${newColor}`;
    h1.innerText = `${newColor}`
    
})

const ul = document.querySelector('#cat-name-list')
const input = document.querySelector('#cat-name')
const makeNameList = (name) => {
    const newName = document.createElement('LI')
    newName.innerText = name;
    ul.appendChild(newName); 
}

document.querySelector('#form-nama-kucing').addEventListener('submit', (e) => { // e sebagai event object, spt 'keydown', 'keyup', 
    e.preventDefault();
    const catName = input.value;
    makeNameList(catName);
    input.value = '';
    liveCatName.innerText = '';
})
document.querySelector('#form-nama-kucing').addEventListener('input', (e)=>{
    liveCatName.innerText = input.value;
})


