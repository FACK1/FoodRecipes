const buttonSearch = document.getElementById('buttonSearch');


buttonSearch.addEventListener('click', (event) => {
  event.preventDefault();
  const inputFood = document.getElementById('food');
  searchRequest(inputFood.value, (error, recipes) => {
    if (error) {
      alert("Couldn't get data!");
    } else {
      console.log(recipes);
      updateRecipes(recipes);
    }
  });

  // var searchUrl = '/search?value=' + inputFood.value;
});


var updateRecipes = function (recipesList) {
  const listSection = document.getElementById('search-result');
  // listSection.innerHTML = '';
  while (listSection.firstChild) {
    listSection.removeChild(listSection.firstChild);
  }
  recipesList.forEach((recipe) => {
    console.log(recipe.title);
    listSection.appendChild(createHtmlItem(recipe));
  });
};


var createHtmlItem = function (recipe) {
  console.log(recipe.image_url);
  // create the main item div.
  var foods = document.createElement('div');
  foods.setAttribute('class', 'foods');

  // create imageDiv and the img.
  var imageDiv = document.createElement('div');
  imageDiv.setAttribute('class', 'image');
  var image = document.createElement('img');
  image.setAttribute('src', recipe.image_url);
  image.setAttribute('class', 'resultImg');
  imageDiv.appendChild(image);
  foods.appendChild(imageDiv);

  // create paragraph elements.
  var paragraphDiv = document.createElement('div');
  paragraphDiv.setAttribute('class', 'paragraph');
  var dishH4 = document.createElement('h4');
  dishH4.innerText = 'Dish: ' + recipe.title;
  var publisherH4 = document.createElement('h4');
  publisherH4.innerText = 'Publisher: ' + recipe.publisher;
  var recipeIdInput = document.createElement('input');
  recipeIdInput.setAttribute('type', 'hidden');
  paragraphDiv.appendChild(dishH4);
  paragraphDiv.appendChild(publisherH4);
  paragraphDiv.appendChild(recipeIdInput);

  // append paragraph into foods div.
  foods.appendChild(paragraphDiv);

  return foods;

};
