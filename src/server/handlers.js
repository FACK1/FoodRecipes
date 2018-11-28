const fs = require('fs');
const path = require('path');
const querystring=require('querystring');
const searchRecipes = require('./searchRecipes');


const  homeHandler=(request,response)=>{
  const htmlPath =  path.join(__dirname, '../public/index.html')
  fs.readFile(htmlPath, (error, html) => {
      if(error){
         response.writeHead(500, {'content-Type': 'text/html'})
         response.end('<h1> Server error! sorry</h1>')
      }
      response.writeHead(200, {'Content-Type': 'text/html'})
      response.end(html)
  });
}

const publicHandler = (request, response) => {
  const extension = request.url.split('.')[1];
  const contentTypeMapping = {
    'html':'text/html',
    'css': 'text/css',
    'js': 'application/js'
  };
  if(!contentTypeMapping[extension]){
    response.writeHead(404,{'Content-Type': 'text/html'});
    response.end('<h1> Not Found </h1>')
  } else {
  const filePath = path.join(__dirname,'..','public, request.url);
  fs.readFile(filePath, (error, file)=>{
    if (error) {
      errorHandler( request, response);
    }
    response.writeHead(200, {'content-type': contentTypeMapping[extension]})
    response.end(file);
  });
  }
};

const errorHandler = (request, response) => {
  response.writeHead(404,{'content-type':'text/html'})
  response.end('<h1> Page Not Found </h1>');
};

const searchHandler=(request, response)=>{
  const searchValue = request.url.split('/')[2];
  if (!searchValue) {
    errorHandler(request, response);
  } else {
    const reslut = searchRecipes(searchValue);
    var convertData= json.stringify(reslut);
    response.writeHead (200, {'content-type': 'application/js'});
    response.end(convertData);
  }
};
