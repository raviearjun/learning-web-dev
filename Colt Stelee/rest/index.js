const express = require('express');
const app = express();
const path = require('path');
const {v4: uuid} = require('uuid');
const methodOverride = require('method-override');
uuid();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');

// COMMENTS ROUTES
let comments = [
    { username : 'John', comment: 'This is a great post!', id: uuid() },
    { username : 'Jane', comment: 'Thanks for sharing!', id: uuid() },
    { username : 'Bob', comment: 'Very informative.', id: uuid() }

];

// menampilkan halaman utama
app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
})
// get form untuk membuat halaman baru
app.get('/comments/new', (req, res) => {
    res.render('comments/new');
})
// post untuk mengirimkan data dari form 
app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username:username, comment:comment, id: uuid() });
    // res.send('Comment received');
    res.redirect('/comments');
});
// get untuk menampilkan detail komentar
app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', { comment });
});
// patch to partially update the comments
app.patch('/comments/:id', (req, res) =>{
    const { id } = req.params;
    const newComment = req.body.comment;
    const found_comment = comments.find(c => c.id === id);
    found_comment.comment = newComment;
    res.redirect('/comments');
});
// edit to update the comments
app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', { comment });
});

// delete to remove the comment
app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments');
});


// CREDENTIALS ROUTES
app.get('/credentials', (req, res) => { 
    res.json({ message: 'Credentials endpoint reached' });
});

app.post('/credentials', (req, res) => {
    console.log(req.body);
    res.json({ message: 'Credentials created' });   
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});