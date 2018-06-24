const http = require('http');
const url = require('url');

const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  console.log('page: ', page);
  res.writeHead(200, { "Content-Type": "text/html" });
  const html = `<p>Hey, everyone! How are <strong>you</strong> doing today?</p>`;
  res.end(html);
});

server.listen(8080);