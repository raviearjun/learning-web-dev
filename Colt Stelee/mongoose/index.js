const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/movieApp')
.then(() => {
    console.log('MongoDB connected');
})
.catch(err => {
    console.error('MongoDB connection error:', err);
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Database connected');
});

const movieSchema = new mongoose.Schema({
    title : String,
    year : Number,
    rating : Number,
    genre : String,
}
);

const Movie = mongoose.model('Movie', movieSchema); // create a collection named 'movies'
const amadeus = new Movie({
    title: 'Amadeus',
    year: 1984,
    rating: 8.3,
    genre: 'Biography'
});

