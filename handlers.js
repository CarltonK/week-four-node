const fs = require('fs');

let handlers = {};

// Callback
handlers.base = function (data, callback) {
    fileReader('public/index.html', callback)
};

handlers.notFound = function (data, callback) {
    fileReader('public/notFound.html', callback)
};

function fileReader(path, callback) {
    fs.readFile(path, (err, data) => {
        if (err) {
            callback(404);
        } else {
            callback(200, Buffer.from(data).toString('utf-8'));
        }
    })
}

module.exports = handlers;