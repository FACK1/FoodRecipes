//var proccess = require('dotenv/config');

const http = require('http');
const router = require('./router.js');
const PORT =  process.env.PORT ||8000;
const server = http.createServer();

server.listen(PORT, function(){
    console.log("server is up and running on port 8000!")
})
