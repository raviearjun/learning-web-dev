const express = require('express');
const app = express();

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    // res.send('Haloo sayangg!')
    // kita juga bisa mengirimkan file html, bukan hanya string seperti di atas
    // untuk itu kita perlu method res.render()
    res.render('home') // ini akan me-render view home.ejs di dalam folder/direktori views (by default)
    // atau kalau mau spesifik bisa dengan res.render('views/home.ejs')
})

app.listen(8080, () => {
    console.log('Listening on port 8080!')
})