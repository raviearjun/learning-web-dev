const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));   
app.set('view engine', 'ejs');

const comments = [
    { username : 'John', comment: 'This is a great post!' },
    { username : 'Jane', comment: 'Thanks for sharing!' },
    { username : 'Bob', comment: 'Very informative.' }

];

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new');
})

app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment });
    res.send('Comment received');
});

app.get('/credentials', (req, res) => {
    res.json({ message: 'Credentials endpoin reached' });
});

app.post('/credentials', (req, res) => {
    console.log(req.body);
    res.json({ message: 'Credentials created' });   
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});