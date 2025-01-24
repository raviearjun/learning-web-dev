// map() dan filter() menghasilkan array baru

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const isEvenNumber = numbers.map((number) => number % 2 === 0);
console.log(isEvenNumber); // output : [false, true, false, true, false, true, false, true, false, true]

const filteredNumbers = numbers.filter((number) => number % 2 === 0);
console.log(filteredNumbers); // output : [2, 4, 6, 8, 10]

// perbedaan utama :
// map() menghasilkan nilai untuk setiap elemen, 
// sedangkan filter() hanya menghasilkan elemen yang memenuhi kondisi tertentu