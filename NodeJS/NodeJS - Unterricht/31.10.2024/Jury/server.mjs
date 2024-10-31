// server.mjs
import { createServer } from "node:http";
import inspirationalQuotes from "inspirational-quotes";

const server = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(inspirationalQuotes.getQuote().text); // oder .quote für den gesamten Text
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Listening on 127.0.0.1:3000");
});