const express = require('express');
const server = express();

server.get('/', (req, res) => { res.send('Tudo certo com a API');});

server.listen(3000, () => {
    console.log("Servidor reiniciado ")
});

