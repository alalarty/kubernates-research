const http = require('http');
const os = require('os')

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!!! hostname: ' + os.hostname());
});

server.listen(port, () => {
  console.log(`Server running at localhost:${port}/`);
});
