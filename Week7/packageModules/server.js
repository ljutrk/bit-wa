// const figlet = require('./node_modules/figlet/');
const {text} = require('./text');
const http = require('http');
const hostname = '127.0.0.1';
const port = 3202;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
//   res.end('<h1>Hello World</h1>');
res.end(text)
});

server.listen(port, hostname, () => {
  console.log('Server running at http://' + hostname + ':' + port + '/');
});
