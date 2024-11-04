import http from 'http';
console.log("Server is Online")


const server = http.createServer((req, res) => {
  res.end('Hello From Node.js!');
  console.log(req.url)
  console.log(req.method)
});

server.listen(4000);