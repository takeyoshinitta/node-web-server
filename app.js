const http = require('http');
const fs = require('fs').promises;
const port = 3000;

const server = http.createServer(async (req, res) => {
    try {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        const data = await fs.readFile('index.html');
        res.write(data);
    } catch (error) {
        res.writeHead(404);
        res.write('Error: File Not Found');
    } finally {
        res.end();
    }
});

server.listen(port, async (error) => {
    try {
        if (error) {
            console.log('Something went wrong', error);
        } else {
            console.log('Server is listening on port ' + port);
        }
    } catch (error) {
        console.log('Something went wrong', error);
    }
});
