const btns = document.querySelectorAll('.btn');
const h1s =  document.querySelectorAll('h1');

const randomRgb = () => {
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    return `rgb(${red}, ${green}, ${blue})`
}

for(let btn of btns){
    btn.addEventListener('click', ()=>{
        btn.style.backgroundColor = randomRgb();
        btn.style.color = randomRgb();
    })
}
for(let h1 of h1s){
    h1.addEventListener('click', () => {
        this.style.backgroundColor = randomRgb(); // this akan mengacu pada apa yang di-'click'
        this.style.color = randomRgb(); // sama aja dengan h1.style.color = randomRgb();
    })
}

