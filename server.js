/* Empty JS object to act as endpoint for all routes */
projectData = {};

/* Express to run server and routes */
const express = require('express');

/* Start up an instance of app */
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')
/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

/* Initialize the main project folder ----> put index.html and demo.js in a folder called website*/
app.use(express.static('website'));

const port = 3000;
/* Spin up the server*/
const server = app.listen(port, listening);
 function listening(){
    // console.log(server);
    console.log(`running on localhost: ${port}`);
  };


// Dummy API End Point
const fakeData = {
    animal: "lion",
    fact: "the biggest cat in africa"
}


app.get("/fakeAnimalData", getfakeData);

function getfakeData(req,res){
    res.send(fakeData)
}

const animalData = [];

app.get("/all", getData)

function getData(req, res){
    res.send(animalData)
}

//Post Route
app.post("/addanimal", addAnimal);

function addAnimal(req,res){

    newEntry = {
        animal: req.body.animal,
        facts: req.body.fact,
        fav: req.body.fav,
    }

    animalData.push(newEntry)
    res.send(animalData)
    console.log(animalData)

}