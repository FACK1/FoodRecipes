# Food Recipes 

### About:
A website for searching about food recipes
### User journey 
In our app you can  search for your favourite food by putting the name of it in the place of search. 
### Site Link in Heroku :
[Food Recpies](https://foodrecipes-.herokuapp.com/) 
### Site design 

### Architecture 
- Front-End :

  we create  public folder and put inside its folders like :
   - Css folder:
   
       index.css

      resets.css
  - Js folder:
  
     dom.js

     requests.js
   
  - index.html 
  
- Back-End:

  we create src folder and put folders in its like :
  - SearchRecipes folder:
  
    searchRecipes.js
  - Server folder:
  
    server.js

    router.js
   
    handlers.js
  - Test folder:
  
    test.js


- HTML structure :
our website is a  page contains a title for website with background , then will find a box to enter the name for the food  in the same line have a button to search for the food .

 ### How to run our site on your machine?

1- Clone this repo.

2- Open your command line.

3- Put in terminal : **npm install**.

4- Create file and called its **.env** and put in its  PORT=8000 and 
                                                   API_KEY=f6d8c7ad27c900355d91eadd44418003


5- Then put in terminal : **node src/server.js** to run the server. 

6- Open your browser and put in terminal: **localhost:8000**.


### Team Member:
- [Mohammad Al-Sharif](https://github.com/mhmdtshref)
- [Shaimaa Azmi](https://github.com/shaima96)
- [Fidaa alhersh](https://github.com/fdo2)
- [Safa amro](https://github.com/safaaamro)



