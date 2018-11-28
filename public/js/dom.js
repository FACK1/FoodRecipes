var buttonSearch=document.getElementById('buttonSearch');


buttonSearch.addEventListener('click', function(event){
  event.preventDefault();
  var inputFood = document.getElementById('food');
  searchRequest(inputFood.value,function(error, recipes){
    if(error){
      alert("Couldn't get data!");
    }else {
          console.log(recipes);
          updateRecipes(recipes);

    }
  });

  //var searchUrl = '/search?value=' + inputFood.value;

})




var updateRecipes = function(recipesList){

  var listSection = document.getElementById("search-result");
  //listSection.innerHTML = '';
  while (listSection.firstChild){
    listSection.removeChild(listSection.firstChild);
  }
  recipesList.forEach(function(recipe){
    console.log(recipe.title);
    listSection.appendChild(createHtmlItem(recipe));
  });

}


var createHtmlItem = function(recipe){
  var recipeHtmlItem = document.createElement('p');
  recipeHtmlItem.innerText = recipe.title;
  return recipeHtmlItem;

}
