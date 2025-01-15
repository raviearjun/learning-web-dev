const obj1 = {
    name : "John",
    age : 30,
    city : "New York",
    country : "USA"
}
const obj2 = {
    school : "SMK Telkom Malang",
    major : "Web Development"
}
// menggabungkan dua objek menggunakan spread operator
const objek = {...obj1, ...obj2}
console.log(objek);


// menggabungkan dua array menggunakan spread operator
const koma = [
    'arjun', 'david', 'rafi', 'wibi', 'argy',
]
const komb = [
    'hafiz', 'reyhan', 'kevin', 'ramo', 'faqih',
]
const ilkom = [...koma, ...komb]
console.log(ilkom);

// menyalin array menggunakan spread operator
const ilkom2 = [...ilkom]
console.log(ilkom2);