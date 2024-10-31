// server.mjs
import { createServer } from 'node:http';
import { getRandomQuote } from 'inspirational-quotes';

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(getRandomQuote());
});

console.log(typeof(server));

// starts a simple http server locally on port 3001
server.listen(3001, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3001, nicht schlecht oder?');
});

// run with `node server.mjs`
