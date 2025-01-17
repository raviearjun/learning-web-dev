17-01-2025

// Method dan Property

- Dalam JS, kita bisa mengakses property yang dimiliki variabel dengan menggunakan sintaks `variable.property` dan mengakses method yang bisa bekerja pada variabel dengan menggunakan sintaks `variabel.method()`.
- Beberapa property string yang paling sering digunakan, antara lain, adalah :
  - `length`
  - `
- Beberapa method string yang paling sering digunakan dengan JS adalah
  - `trim()` // untuk memangkas whitespace pada awal dan akhir string
  - `toLowerCase()` // untuk mengubah string menjadi huruf kecil semua
  - `toUpperCase()` // untuk mengubah string menjadi huruf besar semua
- Kita bisa mengombinasikan beberapa method/property sekaligus dalam satu baris untuk memodifikasi string
  contoh :
  - variabel.trim().toLowerCase(); // mengembalikan versi huruf kecil dair string yang telah di-trim
  - variabel.trim().length; // mengembalikan panjang string yang telah dikenai method trim
- Beberapa method dalam JS mensyaratkan adanya parameter,
  contoh :
  - method `.indexOf('a')` // mengembalikan nilai indeks string yang di indeks tersebut terdapat letter 'a' pertama kali
  - method `.slice(m, n)` // mengembalikan potongan string dimulai dari indeks ke m dan berakhir di indeks ke n
  - method `.replace('string1', 'string2')` // mengembalikan string baru dengan mengganti potongan string 'string1' menjadi 'string2'.
