// Dependency
const http = require('http');
const url = require('url');
const handlers = require('./handlers');

// Configuration
const hostname = 'localhost';
const port = 3000;

// Declaration
const server = http.createServer((req, res) => {
    // Get URL
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;

    // Get PATH
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');

    // Get METHOD
    const method = req.method;

    // Get QUERY PARAMETERS
    const query = parsedUrl.query;

    // Get HEADERS
    const headers = req.headers;

    // Choose which route to use
    let chosenHandler;
    if (router[trimmedPath]) {
        chosenHandler = router[trimmedPath]
    } else {
        chosenHandler = handlers.notFound
    }

    // Construct object to forward to our request
    const requestData = {
        'method': method,
        'path': trimmedPath,
        'query': query,
        'headers': headers,
    }

    chosenHandler(requestData, function(statusCode, responseData) {
        res.setHeader('Content-type','text/html')
        res.writeHead(statusCode);
        res.end(responseData);
    })
});

// Invocation
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

// Route our requests to a function which will handle them
const router = {
    '': handlers.base,
    'about': handlers.about,
}


// Methods
// Send any data to the server - POST
// Get data from the server - GET
// Update a value - UPDATE/PUT/PATCH
// Delete a value - DELETE

// Status Codes
// 200s - OK
// 300s - Redirection
// 400s - 404
// 500s - Server Error

// Base URL - https://www.jumia.co.ke/
// Electonics - https://www.jumia.co.ke/electronics/
// 32 inch TV - https://www.jumia.co.ke/televisions/?display_size=32.0--32#catalog-listing