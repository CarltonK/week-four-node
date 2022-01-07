const fs = require('fs');

fs.readFile('files/words.txt', (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(Buffer.from(data).toString('utf-8'))
    }
});
