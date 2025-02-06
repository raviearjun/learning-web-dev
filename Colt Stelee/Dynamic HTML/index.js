const express = require('express');
const app = express();
const path = require('path');
const serverData = require('./data.json');

// middleware
app.use(express.static(path.join(__dirname, 'public_assets'))); 
// kode di atas :
// 1. menggunakan direktori public_assets dan menjadikannya public (bisa diakses user melalui url)
// 2. express.static() memberikan 'apa adanya' file yang ada di dalam direktori public_assets
 
app.set('view engine', 'ejs') // express js di balik layar mencari view di folder views dan menjadikannya view engine
app.set('views', path.join(__dirname, '/views')) // path.join menggabungkan path ke direktori views
// ini adalah praktik yang bagus mengingat kita kadang perlu mengeksekusi kode dari luar direktori ini

app.get('/', (req, res) => {
    // res.send('Haloo sayangg!')
    // kita juga bisa mengirimkan file html, bukan hanya string seperti di atas
    // untuk itu kita perlu method res.render()
    res.render('home') // ini akan me-render view home.ejs di dalam folder/direktori views (by default)
    // atau kalau mau spesifik bisa dengan res.render('views/home.ejs')
})

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1
    res.render('random', {rand : num}) 
    // merender file random.ejs. 
    // variable num dikenal di file random.ejs dengan nama rand
})

app.get('/r/:subpath', (req, res) => {
    const { subpath } = req.params;
    const data = serverData[subpath];
    console.log(data)
    res.render('subpath.ejs', { ...data })
})

app.get('/cats', (req, res) => {
    const cats = ['Luna', 'Milo', 'Oscar', 'Oreo']
    res.render('cats', {cats})
})

app.listen(8080, () => {
    console.log('Listening on port 8080!')
})