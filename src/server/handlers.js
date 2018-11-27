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

// const publicHandler=(request, response)=>{
//   const filePath=(path.join(__dirname,))
// }
