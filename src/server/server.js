require('dotenv').config();

const http = require('http');
/* eslint-disable */
const router = require('./router.js');
/* eslint-enable */
const PORT = process.env.PORT || 8000;
const server = http.createServer(router);

server.listen(PORT, () => {
  /* eslint-disable */
  console.log('server is up and running on port 8000!');
  /* eslint-enable */
});
