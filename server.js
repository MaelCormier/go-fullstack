const http = require ('http');

const server = http.createServer((req, res) => {
    res.end('Voila la reponse du serveur TEST !');
});

server.listen(process.env.PORT || 3000);