// arrow function biasa
const celciusToFahrenheit = (celcius) => {
    const result = 9/5*celcius+32;
    return result;
}

// arrow function sederhana
const celciusToReamur = (celcius) => 9/5*celcius+32;

// memanggil fungsi
let celcius = 36;
console.log(celciusToFahrenheit(celcius));
console.log(celciusToReamur(celcius));

// quiz dicoding
function hello(nama, origin='Bandung'){
    return `Halo! Nama saya ${nama}. Saya tinggal di ${origin}.`;
    
}

const rahmat = hello('Rahmat', 'Semarang');
const indra =  hello('Indra');

console.log(rahmat);
console.log(indra);

const greet = (name) => "Hell0, " +  name + "!";
console.log(greet('Indra'));