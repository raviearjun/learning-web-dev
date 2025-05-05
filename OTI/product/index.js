const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views'); // set the views directory to the current dir where index js is located
// Serve static files from /assets
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Middleware untuk file statis (INI HARUS ADA)
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('landing.ejs'); 
});

app.listen(3000, () => {    
  console.log('Server is running on http://localhost:3000');
});