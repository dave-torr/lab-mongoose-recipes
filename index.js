const mongoose = require('mongoose');
const Recipe = require('./models/Recipe.model'); // Import of the model Recipe from './models/Recipe.model.js'
const data = require('./data.js'); // Import of the data from './data.js'

// Connection to the database "recipeApp"
mongoose
  .connect('mongodb://localhost/recipe-app-dev', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));


  
// Iteration one works, and Turogomboc was created through the following mongoose model:
    // let food = {title: 'Turogomboc', level: 'Amateur Chef', ingredients: ['cheese', 'bread crums', 'limes', 'cream', 'eggs'], cuisine: 'hungarian', dishType: 'Dessert', duration: 2}
    //   Recipe.create(food)
    //     .then(res => console.log('data is saved, and the name of the recepie is', res.title ))
    //     .catch(error => console.log('recipie was not submitted', error));



// ITERATION #3 is ready
    // recipies were created and iterated through function
    insertRecipies = (data) => {
      for(let meal in data){
        Recipe.create(data[meal])
        .then(res => console.log('data is saved, and the name of the recepie is', res.title )) 
        .catch(error => console.log('recipie was not submitted', error))
      }
    }

    // insertRecipies(data)

// Iteration 4 Update:
    // Recipe.findOne({}).then(res => console.log(res))
    // Recipe.updateOne({ title: "Rigatoni alla Genovese" }, { duration: 100 })
    // .then(console.log("Success"))
    // .catch(console.log("err"));


// Iteration 5
    // Recipe.deleteOne({title: "Carrot Cake" }).then(console.log("Carrot Cake Eliminated"))