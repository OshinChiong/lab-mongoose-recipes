const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

let newRecipe = { 
   title: "Pomodoro",
  level:  "Amateur Chef",
  ingredients: ["tomato" , "pasta"], 
  cuisine: "Italian",
  dishType:  "main_course",
  image: "https://thestayathomechef.com/wp-content/uploads/2020/04/Pasta-Pomodoro-2-scaled.jpg",
  duration: 20,
  creator: "Me" 
};

Recipe
  .create(newRecipe)
  .then(function (results) {
    console.log("Success!", results);
  })
  .catch(function (err) {
    console.log("Something went wrong", err.message);
  });
  

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })
  .then(() => {
    // Run your code here, after you have insured that the connection was made
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });
