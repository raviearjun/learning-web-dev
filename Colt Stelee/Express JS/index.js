const express = require('express');
const app = express();

// // memasang middleware, sebuah fungsi yang akan dieksekusi ketika permintaan datang
// app.use((req, res) => {
//     console.log('We got a new request!')
//     console.log(req.method, req.url)
//     res.send('<h1>HAHAAHHAHAHAHA</h1>')
// })

// routing
app.get('/cat', (req, res) => {
    res.send('Meow');
})

// kita tentu tidak bisa mencatat semua pola permintaan. untuk itu dibuat sintaks untuk menerima pola permintaan umum
// sintaks : app.get('/r/:subpath', (req, res) => {})
app.get('/r/:subpath/:postID', (req, res) => {
    const { subpath, postID } = req.params; // object decomposition
    res.send(`<h1>Browsing ${ subpath } with postID ${ postID }</h1>`)
})

// query string, di dalam kurung kurawal adalah key value yang ada di url, tidak pakem, bisa diubah sesuai kebutuhan
// seperti q=cat, h=cat, watch=cat
app.get('/search', (req, res) => {
    const { h } = req.query;
    res.send(`<h1>Search results for ${ h }</h1>`)
})

app.get('/dogs', (req, res) => {
    res.send('Woof')
})

app.get('/', (req, res) => {
    res.send('Hello World')
})

// select all posts
app.get('*', (req, res) => {
    res.send('Not Found')
})

// mendengarkan permintaan dari client, server menyala 
app.listen(3000,() => {
    console.log('Listening on port 3000')
})