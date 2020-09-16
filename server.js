const http = require('http');
const fs = require('fs');

http.createServer((require,respons) => {
    const file = fs.readFileSync('index.html', {encoding: 'utf8'});
    respons.writeHead(200, { 'Content-Type': 'text/html'});
    respons.write(file);
    respons.end();
}).listen(8080)
