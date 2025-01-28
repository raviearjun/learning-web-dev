25-01-2025

- Document Object Model
  Adalah struktur data konten web dimuat oleh browser
  Urutan :
  - Document
    adalah root dari DOM, mewakili seluruh dokumen web
  - Object
    adalah representasi node dari DOM. setiap elemen, teks, atribut, dianggap sebagai objek
  - Elemen
    adalah subset dari objek. contoh elemen h1, dia adalah objek. elemen teks 'hello worls' adalah objek.
- Methods
  - getElementById(`id`) : mengembalikan
  - getElementsByClass(`class`) : mengembalikan objek-mirip array, tetapi bukan array. berisi kelas2 yang sesuai dengan passing parameter
  - getElementsByTag() : mirip dengan di atas
    Notes : karena mirip array, beberapa method atau propertinya juga mirip array
    **contoh** :
    _mengakses paragraf pertama pada sekumpulan element paragraf_
    const paragraf1 = document.getElementsByTag('p')[0];
    _mengakses sekumpulan paragraf dalam section div dengan id = id_
    const paragraphs = document.getElementsById('id\*').getElementByTag('p')
    - PERHATIKAN :
      sekumpulan objek mirip array ini bersifat live, artinya adalah ketika terjadi perubahan elemen2 pada DOM, kondisi kumpulan objek ini pun bakal ikut berubah sehingga iterasi pada kumpulan ini akan tidak konsisten karena yang objek yang diacu melalui index berubah2 setiap perulangan (jika dikenai operasi modifikasi seperti penghapusan, penambahan)
  - document.querySelector('css selector') : mengembalikan hasil seleksi yang ditemukan pertama kali dengan metode DFS (depth-first-search)
  - document.querySelectorAll('css selector') : mengembalikan nodelist (semacam array) berisi semua hasil seleksi berdasarkan css selector
