const container = document.querySelector('#container');
const baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

for(let i=1; i<=151; i++){
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon'); // membuat kelas pokemon agar mudah diakses dalam css
    
    const image = document.createElement('img')
    image.src = `${baseUrl}${i}.png`

    const label = document.createElement('text')
    label.innerText = `#${i}`

    pokemon.appendChild(image);
    pokemon.appendChild(label);
    container.appendChild(pokemon);
}