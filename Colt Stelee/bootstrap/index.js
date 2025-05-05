const fs = require('fs');

fs.readFile('index.html', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data); // prints HTML content in terminal
});
