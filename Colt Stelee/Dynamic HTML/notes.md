DYNAMIC HTML

1. Apa itu templating?
   **templating** adalah cara mengisi template kode html sehingga kita bisa memodifikasinya agar dinamis
   contoh : kita bisa membuat template "Search/pencarian" sehingga ketika ada user mencari sesuatu, form hmtl itu bisa 'diisi' sesuai dengan yang user butuhkan (dinamis)
2. EJS (embedded JS)
   adalah tools yang membantu kita untuk melakukan templating. tools ini unggul karena JS yang digunakan sintaksnya mirip dengan JS asli
3. Alur kerja templating
   - Express JS (atau BE engine) menerima request dari user
   - Express menangani dengan mencari dan memberikan data dari DB ke template engine seperti EJS
   - EJS akan merender template dengan mengisi form yang harus diisi dengan data olahan dari Express
   - Hasil render diberikan balik ke Express untuk dikirimkan ke user
4. Method `res.render()`
   dalam Express JS akan mencari file template di folder bernama `views` (default)lalu menerima template yang sudah diproses oleh template engine untuk kemudian dikirimkan ulang ke user
5. jajaj
