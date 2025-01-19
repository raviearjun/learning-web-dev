let day = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
let today = new Date();
let currentDay = today.getDay();
console.log(`Today is: ${day[currentDay]}`); // Today is: Sunday

// suatu array bisa menampung berbagai tipe data
let mixed = [ 1, 'string', false, null ];
console.log(mixed); // [ 1, 'string', false, null ]

// kita bisa memperlakukan isi array seperti matriks
console.log(day[0][0]); // output : S

// kita bisa menggunakan method push() untuk menambahkan elemen baru ke dalam array
let fruits = [ 'Apple', 'Banana' ];
fruits.push('Orange');
console.log(fruits); // [ 'Apple', 'Banana', 'Orange' ]

// kita bisa menggunakan method pop() untuk menghapus elemen terakhir dari array
fruits.pop();
console.log(fruits); // [ 'Apple', 'Banana' ]
// note : elemen yang dihapus akan di return oleh method pop() dan bisa disimpan dalam variabel
residu = fruits.pop();

// kita bisa menggunakan method unshift() untuk menambahkan elemen baru ke dalam array di awal
fruits.unshift('Orange');
console.log(fruits); // [ 'Orange', 'Apple', 'Banana' ]

// kita bisa menggunakan method shift() untuk menghapus elemen pertama dari array
fruits.shift();
console.log(fruits); // [ 'Apple', 'Banana' ]

// kita bisa menggunakan method indexOf() untuk mencari index dari suatu elemen dalam array
console.log(fruits.indexOf('Banana')); // 1
console.log(fruits.indexOf('Orange')); // -1

// kita bisa menggunakan method concat() untuk menggabungkan dua array
let rack1 = [ 'Apple', 'Banana' ];
let rack2 = [ 'Orange', 'Grape' ];
let rack = rack1.concat(rack2);
console.log(rack); // [ 'Apple', 'Banana', 'Orange', 'Grape' ]

// kita bisa menggunakan method reverse untuk membalik urutan elemen dalam array
let days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
console.log(days.reverse());
// note : method reverse() akan mengubah array asli, bukan hanya menampilkan array yang sudah dibalik

// kita bisa menggunakan method slice() untuk mengambil sebagian elemen dari array
// sintaks : array.slice(start, end)
let weekDays = days.slice(0, 4);
let weekend = days.slice(5);
console.log(weekDays); // [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday' ]
// note : kita bisa mengakses beberapa elemen terakhir array dengan menggunakan index negatif
console.log(days.slice(-2)); // [ 'Friday', 'Saturday' ]

// kita bisa menggunakan method splice() untuk menambahkan, menghapus, atau mengganti elemen dalam array
let months = [ 'January', 'March', 'April', 'June', 'July' ];
// sintaks : array.splice(start, deleteCount, item1, item2, ...)
months.splice(1, 0, 'February'); // menghapus 0 elemen dari index 1 dan menambahkan 'February' di index 1
months.splice(3, 1, 'May'); // menghapus 1 elemen dari index 3 dan menambahkan 'May' di index 3
console.log(months); // [ 'January', 'February', 'March', 'May', 'June', 'July' ]

months.splice(2, 0, 'April');
months.splice(6, 1, 'Agustus');
console.log(months); // [ 'January', 'February', 'April', 'March', 'May', 'Agustus', 'July' ]

// ketika kita membandingkan dua array dalam JS, kita tidak bisa menggunakan operator == atau ===
// karena operator tersebut hanya akan membandingkan referensi dari kedua array, bukan isinya
let arr1 = [ 1, 2, 3 ];
let arr2 = [ 1, 2, 3 ];
console.log(arr1 == arr2); // false

let arr3 = arr1;
console.log(arr1 == arr3); // true karena keduanya memiliki referensi yang sama
// konsekuensi : ketika array3 diubah, maka array1 juga akan berubah
arr1.push(4);
console.log(arr3); // [ 1, 2, 3, 4 ]