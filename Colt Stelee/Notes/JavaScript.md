17-01-2025

- di dalam JS, jenis angka hanya ada satu, yaitu `Number`. Sedikit berbeda dengan bahasa pemrogramman lain yang memiliki spesifikasi angka yang berbeda-beda, seperti int, float, dsb.
- NaN dikategorikan sebagai number dalam JS
- `var` adalah cara lama mendeklarasikan variabel dalam JS
- variabel dalam JS bisa secara random diset ulang ke suatu nilai yang bertipe data berbeda
  - contoh :
    let num = 10;
    num = false;
    num // output : false
- dalam js, penulisan variabel paling umum adalah `camelCase`. yaitu penulisan variabel dengan menghilangkan setiap spasi yang ada dan mengubah huruf pertama setiap kata dengan huruf kapital, kecuali pada kata pertama.
  - contoh :
  - myAcount
  - userID
- dalam mendeklarasikan variabel, usahakan menggunakan prinsip kemudahan pembacaan. gunakan nama-nama yang mudah dimengerti.
- String dalam JS bisa diperlakukan layaknya array
  - bisa diakses melalui indeks layaknya array (menggunakan kurung siku)
  - memiliki fungsi-fungsi bawaan seperti `length`.
- Semua nilai dalam JS memiliki nilai kebenaran bawaan. Selain yang ada di bawah ini, suatu nilai memiliki nilai kebenaran `true`
  - false
  - 0
  - '' // empty string
  - null
  - undefined
  - NaN
    Akibatnya : variabel bisa dijadikan parameter fungsi karena mengandung nilai kebenaran
-
