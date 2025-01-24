const hari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];

// menggunakan fungsi biasa
const hariKapital = hari.map(function(hari){
    return hari.toUpperCase(); 
})
console.log(hariKapital);

// menggunakan arrow function
const hariKapital2 = hari.map((hari) => hari.toUpperCase());
console.log(hariKapital2);

// array kompleks
const movies = [
    {
        title : 'Amadeus',
        score : 99
    },
    {
        title : 'Sharknado',
        score : 97
    },
    {
        title : 'Parasite',
        score : 95
    },
    {
        title : 'Avengers',
        score : 93
    }
]
const title = movies.map((movies) => movies.title.toUpperCase());
console.log(title);