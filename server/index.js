const http = require('http');

//const PORT = 8080;
const PORT = process.env.npm_package_myWebServer_port || 8080;

http.createServer((req, res) => {
    console.log(`Received request for ${req.url}`);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello World!\n');
    res.end(`Received request for ${req.url}`);
  })

.listen(PORT, () => {
    console.log(`Server running at 172.17.1.108:${PORT}/`);
  });

    
