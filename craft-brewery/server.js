const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB.js');
const PORT = process.env.PORT || 3001;
const app = express();
const dotenv = require('dotenv').config();

//To set up mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected, holmes!') },
  err => {console.log('Can not connect to database' + err)}
);

// Define middleware here
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Check with Tyler on this - example showed using bodyParser instead of express - need to know what is correct//
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every other request to the React app

// Define API routes here
const apiRoutes = require('./controllers/beers-api');
app.use('/api', apiRoutes);

// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});



app.listen(PORT, () => {
  console.log(`🌎 ==> API server is running on port ${PORT}!`);
});
