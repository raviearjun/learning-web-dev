let makanan_jogja = {
    nama : 'nasi goreng',
    langganan : 'pak slamet',
    harga : 15000,
    lokasi : 'pandega marta',
    rasa : 'enak'
}
console.log(makanan_jogja);

// mengakses elemen object
console.log(makanan_jogja.harga); 
console.log(makanan_jogja['nama']); // lebih powerfull karena bisa menggunakan variabel eksternal sebagai key

// kualitas tahun
const tahun = {
    2020 : 'bad',
    2024 : 'good',
}
console.log(tahun["2020"]); // bad
// note : key dalam objek otomatis akan dikonversi menjadi string

//Nested Object
const rumah ={
    kamar : {
        kamar1 : 'tidur',
        kamar2 : 'makan'
    },
    dapur : {
        dapur1 : 'masak',
        dapur2 : 'cuci'
    },
    halaman : {
        halaman1 : 'parkir',
        halaman2 : 'main'
    }
}
const comment = [
    {
        username : 'arjun',
        text : 'nice',
        vote : 3,
    },
    {
        username : 'budi',
        text : 'good',
        vote : 5,
    },
    {
        username : 'charlie',
        text : 'bad',
        vote : 1,
    }
]