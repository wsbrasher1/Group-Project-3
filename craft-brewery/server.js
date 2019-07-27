//Require the needed dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

//To set up our PORT
const PORT = process.env.PORT || 3000;

//To set up an Express Router
const router = express.Router();

//To have every request go through our router middleware
app.use(router);

app.use(cors());
app.use(bodyParser.json());

//To require our routes pass through our router object
// require("./config/routes")(router);

//To designate our public folder as a static directory
app.use(express.static("./public"));

//To indicate that if our app is deployed, use the deployed database. Otherwise, it will use the local Mongo database
const db = process.env.MONGODB_URI || "mongodb://localhost/brewapp";

//To connect mongoose to our database
mongoose.connect(db, function(error){
  if(error){
    console.log(error);
  }
  else{
    console.log("Yay, this mongoose connection is lit!!");
  }
});



app.get('/', (req, res) => {
    res.send('Aiiiggghhhtttt!!!!');
  });

app.listen(PORT, () => {
    console.log(`App is up and running. Listening on port ${PORT}`);
  });