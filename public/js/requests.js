


const searchRequest = function(value, cb){
    var searchUrl = '/search?value=' + value;
    fetch(searchUrl)
    .then(function(response){
      return response.json();
    }).then(function(data){
      cb(null, data.recipes);
    }).catch(function(error){
      cb(true);
    });
}
