const http = require('http');
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'site.html');

const server = http.createServer((req, res) => {
  if (req.url === '/status') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('✅ Сервер работает! Сайт активен.');
  } else {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Ошибка при загрузке страницы.');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`🔥 Сервер KileSite запущен: http://localhost:${PORT}`);
});
