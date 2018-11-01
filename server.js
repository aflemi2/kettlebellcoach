const server = require('http').createServer(require('./app'));
const port = process.env.PORT || 3000;

//sync database

server.listen( port, ()=> { console.log(`You are listening on Port: ${port}`);} );
