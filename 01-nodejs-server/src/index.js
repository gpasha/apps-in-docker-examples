// server.js
const http = require('http');

let counter = 0;

const server = http.createServer((req, res) => {
    console.log('request: ' + (++counter))

    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Access-Control-Allow-Origin', '*');

    if (req.url === '/hello') {
        res.statusCode = 200;
        res.end('Hi from simple node.js app example');
    } else if (req.url === '/error') {
        throw new Error('Fatal error, from simple node.js app example')
    } else {
        res.statusCode = 404;
        res.end('Page NOT found');
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server is listening on PORT ${port}/`);
});
