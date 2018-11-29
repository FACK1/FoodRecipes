require('dotenv').config();
const request = require('request');
const handlers = require('../server/handlers');

const search = (req, res, value) => {
  const searchUrl = `https://www.food2fork.com/api/search?key=${process.env.API_KEY}&q=${value}`;
  request(searchUrl, (error, response, body) => {
    if (error || (response.statusCode !== 200)) {
      // console.log(response.statusCode);
      handlers.errorHandler();
    } else {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(body);
    }
  });
};

module.exports = { search };
