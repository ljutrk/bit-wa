const http = require('http');
const hostname = '127.0.0.1';
const port = 3100;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    // res.setHeader("Content-type", "application/JSON");
    res.setHeader("Content-type", "application/JSON");
    // res.end("<h1>Hello world from node server</h>");
    res.end(JSON.stringify({msg: "Hello", name: "zzz", pare: "200 miliJona"}))
});

server.listen(port, hostname, () => {
    console.log("Server running at http://" + hostname + ":" + port);
    
});
